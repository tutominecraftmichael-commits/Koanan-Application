import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Énergie potentielle électrostatique » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Énergie potentielle électrostatique » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const PHYSIQUE_1ERE_CD_L02_ENERGIE_POTENTIELLE_ELECTROSTATIQUE: CurriculumChapter = {
  "id": "premiere_c_physique_l02_energie_potentielle_electrostatique",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 2,
  "title": "Leçon 2 : Énergie potentielle électrostatique",
  "summary": "Dans un champ électrostatique uniforme, une particule chargée subit la force F = qE, dont le travail s'exprime aussi à l'aide de la différence de potentiel : W = q × UAB. La leçon définit alors l'énergie potentielle électrostatique Ep = qV, l'énergie mécanique de la particule et l'électronvolt.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Énergie potentielle électrostatique » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p01",
      "order": 1,
      "title": "Travail d'une force électrostatique dans un champ uniforme",
      "summary": "Une charge q dans un champ uniforme E subit F = qE ; le travail de cette force de A vers B vaut qE · AB.",
      "conceptExplanation": "Une particule de charge électrique q, placée dans un champ électrostatique $\\vec{E}$ uniforme, subit la force électrostatique $\\vec{F} = q\\vec{E}$.\nLorsque le point d'application de la force se déplace du point A au point B, le travail de la force est $W(\\vec{F}) = \\vec{F} \\cdot \\overrightarrow{AB} = q\\vec{E} \\cdot \\overrightarrow{AB}$.\nLes unités sont cohérentes : le travail en joules (J), la charge en coulombs (C), le champ en volts par mètre (V/m) et le déplacement en mètres (m).\nComme le poids, la force électrostatique est une force conservative : d'après les exercices de la leçon, son travail entre deux points ne dépend pas du chemin suivi.",
      "keyRule": "Force électrostatique : F = qE ; son travail de A vers B : W = qE · AB, indépendant du chemin suivi.",
      "formulas": [
        {
          "name": "Force électrostatique",
          "formula": "\\vec{F} = q \\times \\vec{E}",
          "note": "q en coulombs, E en V/m, F en newtons ; le sens de F dépend du signe de q."
        },
        {
          "name": "Travail de la force électrostatique",
          "formula": "W_{A \\to B}(\\vec{F}) = q \\, \\vec{E} \\cdot \\overrightarrow{AB}",
          "note": "Travail en joules pour le déplacement de A vers B."
        }
      ],
      "workedExample": {
        "title": "Les exercices 1 et 2 : les deux expressions à retenir",
        "statement": "Écris l'expression du travail de la force électrostatique dans un champ uniforme, puis complète la phrase : le travail de la force électrostatique appliquée à une particule chargée entre deux points est égal à la diminution de quoi ?",
        "methodSteps": [
          "Le travail s'écrit W = qE · AB, et aussi W = q(VA − VB) avec les potentiels des deux points.",
          "L'exercice 2 donne la phrase exacte : ce travail est égal à la diminution de l'énergie potentielle électrostatique.",
          "L'exercice 1 rappelle aussi l'énergie potentielle au point M : Ep = q × VM."
        ],
        "conclusion": "Ce sont les réponses des solutions des exercices 1 et 2 de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La force électrostatique F = qE",
          "stepTheme": "La force électrostatique F = qE",
          "stepBadge": "La force électrostatique F = qE",
          "paragraphText": "• Force électrostatique : force subie par une particule de charge q placée dans un champ électrostatique $\\vec{E}$.\nElle vaut $\\vec{F} = q\\vec{E}$ : si q est positive, $\\vec{F}$ a le même sens que $\\vec{E}$ ; si q est négative, elle est de sens opposé.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p01_q1",
            "type": "mcq",
            "prompt": "La force subie par une particule de charge q dans un champ électrostatique E s'écrit :",
            "options": [
              "$\\vec{F} = \\frac{\\vec{E}}{q}$",
              "$\\vec{F} = q \\times \\vec{E}$",
              "$\\vec{F} = \\frac{q}{\\vec{E}}$",
              "$\\vec{F} = q + \\vec{E}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation du §1 du résumé : la force électrostatique est le produit de la charge par le champ."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le travail : W = qE · AB",
          "stepTheme": "Le travail : W = qE · AB",
          "stepBadge": "Le travail : W = qE · AB",
          "paragraphText": "Lorsque la particule se déplace de A vers B, le travail de la force électrostatique est le produit scalaire $W = \\vec{F} \\cdot \\overrightarrow{AB}$.\nEn remplaçant $\\vec{F}$ par $q\\vec{E}$, on obtient $W = q\\vec{E} \\cdot \\overrightarrow{AB}$.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p01_q2",
            "type": "mcq",
            "prompt": "Le travail de la force électrostatique pour un déplacement de A vers B s'écrit :",
            "options": [
              "$W = q \\times \\vec{E} \\cdot \\overrightarrow{AB}$",
              "$W = \\frac{q}{E} \\times AB$",
              "$W = E \\times \\overrightarrow{AB}$ sans la charge",
              "$W = q + E + AB$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'expression du §1, reprise dans la solution de l'exercice 1 : W = qE · AB."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les unités du travail électrostatique",
          "stepTheme": "Les unités du travail électrostatique",
          "stepBadge": "Les unités du travail électrostatique",
          "paragraphText": "Le résumé associe à la formule ses unités : le travail en joules (J), la charge en coulombs (C), le champ en volts par mètre (V/m) et le déplacement en mètres (m).\nVérifier ces unités avant un calcul évite les erreurs de conversion.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p01_q3",
            "type": "mcq",
            "prompt": "Dans l'expression du travail de la force électrostatique, le champ E s'exprime en :",
            "options": [
              "Coulombs (C)",
              "Joules (J)",
              "Volts (V)",
              "Volts par mètre (V/m)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé donne les unités sous la formule : J pour le travail, C pour la charge, V/m pour le champ et m pour le déplacement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le travail ne dépend pas du chemin suivi",
          "stepTheme": "Le travail ne dépend pas du chemin suivi",
          "stepBadge": "Le travail ne dépend pas du chemin suivi",
          "paragraphText": "L'exercice 3 demande de juger l'affirmation « le travail de la force électrostatique dépend des chemins suivis par une charge pour aller de A à B ».\nLa solution répond : faux. Comme pour le poids, seuls les points de départ et d'arrivée comptent.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p01_q4",
            "type": "mcq",
            "prompt": "Le travail de la force électrostatique entre deux points A et B dépend du chemin suivi :",
            "options": [
              "Vrai, il faut connaître la trajectoire",
              "Vrai, uniquement pour les charges négatives",
              "Faux, il ne dépend que des points A et B",
              "Faux, car ce travail est toujours nul"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La solution de l'exercice 3 répond « faux » à cette affirmation : la force électrostatique est conservative."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La force sur la charge du pendule (situation d'évaluation)",
          "stepTheme": "La force sur la charge du pendule (situation d'évaluation)",
          "stepBadge": "La force sur la charge du pendule (situation d'évaluation)",
          "paragraphText": "Dans la situation d'évaluation, la charge vaut q = 8·10⁻⁸ C et le champ entre les plaques vaut 10⁵ V/m.\nLa force électrostatique qui s'exerce sur la charge vaut donc $F_e = q \\times E$, à comparer au poids mg = 0,01 N de la charge de masse 1 g.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p01_q5",
            "type": "mcq",
            "prompt": "Calcule la force électrostatique sur la charge de la situation d'évaluation (q = 8·10⁻⁸ C, E = 10⁵ V/m) :",
            "options": [
              "$8 \\times 10^{-3}$ N",
              "$8 \\times 10^{-13}$ N",
              "$0{,}8$ N",
              "$8 \\times 10^{3}$ N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Fe = q × E = 8·10⁻⁸ × 10⁵ = 8·10⁻³ N : c'est la force qui écarte le pendule de la verticale dans la situation d'évaluation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Un travail nul : déplacement sur une équipotentielle",
          "stepTheme": "Un travail nul : déplacement sur une équipotentielle",
          "stepBadge": "Un travail nul : déplacement sur une équipotentielle",
          "paragraphText": "L'exercice 3 précise aussi que le travail de la force électrostatique peut être nul : c'est le cas lorsqu'on déplace la charge sur une surface équipotentielle.\nLe déplacement est alors perpendiculaire au champ, et le produit scalaire est nul.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p01_q6",
            "type": "mcq",
            "prompt": "Le travail de la force électrostatique est nul lorsque la charge se déplace :",
            "options": [
              "Le long d'une ligne de champ",
              "Sur une surface équipotentielle",
              "Uniquement si la charge est nulle",
              "Jamais, d'après l'exercice 3"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La solution de l'exercice 3 (question 4) précise : W = 0 si on déplace la charge sur une surface équipotentielle."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p01_q1",
          "type": "mcq",
          "prompt": "La force subie par une particule de charge q dans un champ électrostatique E s'écrit :",
          "options": [
            "$\\vec{F} = \\frac{\\vec{E}}{q}$",
            "$\\vec{F} = q \\times \\vec{E}$",
            "$\\vec{F} = \\frac{q}{\\vec{E}}$",
            "$\\vec{F} = q + \\vec{E}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation du §1 du résumé : la force électrostatique est le produit de la charge par le champ."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p01_q2",
          "type": "mcq",
          "prompt": "Le travail de la force électrostatique pour un déplacement de A vers B s'écrit :",
          "options": [
            "$W = q \\times \\vec{E} \\cdot \\overrightarrow{AB}$",
            "$W = \\frac{q}{E} \\times AB$",
            "$W = E \\times \\overrightarrow{AB}$ sans la charge",
            "$W = q + E + AB$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'expression du §1, reprise dans la solution de l'exercice 1 : W = qE · AB."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p01_q3",
          "type": "mcq",
          "prompt": "Dans l'expression du travail de la force électrostatique, le champ E s'exprime en :",
          "options": [
            "Coulombs (C)",
            "Joules (J)",
            "Volts (V)",
            "Volts par mètre (V/m)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé donne les unités sous la formule : J pour le travail, C pour la charge, V/m pour le champ et m pour le déplacement."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p01_q4",
          "type": "mcq",
          "prompt": "Le travail de la force électrostatique entre deux points A et B dépend du chemin suivi :",
          "options": [
            "Vrai, il faut connaître la trajectoire",
            "Vrai, uniquement pour les charges négatives",
            "Faux, il ne dépend que des points A et B",
            "Faux, car ce travail est toujours nul"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La solution de l'exercice 3 répond « faux » à cette affirmation : la force électrostatique est conservative."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p01_q5",
          "type": "mcq",
          "prompt": "Calcule la force électrostatique sur la charge de la situation d'évaluation (q = 8·10⁻⁸ C, E = 10⁵ V/m) :",
          "options": [
            "$8 \\times 10^{-3}$ N",
            "$8 \\times 10^{-13}$ N",
            "$0{,}8$ N",
            "$8 \\times 10^{3}$ N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Fe = q × E = 8·10⁻⁸ × 10⁵ = 8·10⁻³ N : c'est la force qui écarte le pendule de la verticale dans la situation d'évaluation."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p01_q6",
          "type": "mcq",
          "prompt": "Le travail de la force électrostatique est nul lorsque la charge se déplace :",
          "options": [
            "Le long d'une ligne de champ",
            "Sur une surface équipotentielle",
            "Uniquement si la charge est nulle",
            "Jamais, d'après l'exercice 3"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La solution de l'exercice 3 (question 4) précise : W = 0 si on déplace la charge sur une surface équipotentielle."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p02",
      "order": 2,
      "title": "Différence de potentiel, sens du champ et équipotentiels",
      "summary": "La ddp entre A et B vaut UAB = VA − VB ; le champ E va dans le sens des potentiels décroissants et E = U divisé par d entre deux plaques.",
      "conceptExplanation": "Dans un champ électrostatique $\\vec{E}$ uniforme, la différence de potentiels (ddp, ou tension) entre deux points A et B est $U_{AB} = V_A - V_B$.\nLe champ $\\vec{E}$ est orienté dans le sens des potentiels décroissants.\nUn équipotentiel est l'ensemble des points qui ont le même potentiel électrostatique ; les équipotentiels sont des droites (des plans) perpendiculaires aux lignes de champ.\nEntre les plaques P et N d'un condensateur plan, distantes de d et soumises à la tension U = VP − VN, le champ vaut $E = \\frac{U}{d}$.",
      "keyRule": "UAB = VA − VB ; E pointe vers les potentiels décroissants ; entre deux plaques, E = U divisé par d.",
      "formulas": [
        {
          "name": "Différence de potentiel",
          "formula": "U_{AB} = V_A - V_B",
          "note": "La ddp (ou tension) entre A et B s'exprime en volts."
        },
        {
          "name": "Champ entre deux plaques",
          "formula": "E = \\frac{U}{d}",
          "note": "U : tension entre les plaques en volts ; d : distance entre les plaques en mètres ; E en V/m."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application 1 : le condensateur plan",
        "statement": "Un champ électrostatique uniforme règne entre les plaques positive P et négative N d'un condensateur plan, distantes de d = 5 cm, sous la tension U = 6 V. Calcule la valeur du champ, puis la ddp UAB entre les points A et B situés respectivement à 1 cm de P et à 2 cm de N.",
        "methodSteps": [
          "Le champ vaut E = U divisé par d, avec d = 0,05 m : E = 120 V/m.",
          "La distance entre les équipotentielles passant par A et par B vaut d' = 5 − 1 − 2 = 2 cm.",
          "La ddp cherchée vaut UAB = E × d' = 120 × 0,02 = 2,4 V."
        ],
        "conclusion": "E = 120 V/m et UAB = 2,4 V : ce sont les résultats de la solution de l'activité d'application 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La différence de potentiel UAB = VA − VB",
          "stepTheme": "La différence de potentiel UAB = VA − VB",
          "stepBadge": "La différence de potentiel UAB = VA − VB",
          "paragraphText": "• Différence de potentiel (ddp ou tension) : entre deux points A et B d'un champ uniforme, elle est donnée par $U_{AB} = V_A - V_B$.\nElle s'exprime en volts (V), comme les potentiels VA et VB.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p02_q1",
            "type": "mcq",
            "prompt": "La différence de potentiel entre les points A et B est définie par :",
            "options": [
              "$U_{AB} = V_A - V_B$",
              "$U_{AB} = V_A + V_B$",
              "$U_{AB} = V_A \\times V_B$",
              "$U_{AB} = V_B - V_A$ par définition dans le résumé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §2.1 du résumé : UAB = VA − VB."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Le champ va vers les potentiels décroissants",
          "stepTheme": "Le champ va vers les potentiels décroissants",
          "stepBadge": "Le champ va vers les potentiels décroissants",
          "paragraphText": "Piège fréquent : inverser ce sens et croire que le champ pointe vers les potentiels croissants.\nLe §2.2 du résumé donne le sens du champ : $\\vec{E}$ est dans le sens des potentiels décroissants.\nConnaître le sens de $\\vec{E}$ permet donc de comparer les potentiels de deux points, comme dans la situation d'évaluation où l'on déduit VB > VA.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p02_q2",
            "type": "mcq",
            "prompt": "Le vecteur champ électrostatique E est orienté :",
            "options": [
              "Dans le sens des potentiels croissants",
              "Perpendiculairement aux potentiels",
              "Dans le sens des potentiels décroissants",
              "Sans rapport avec les potentiels"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le §2.2 du résumé : E est dans le sens des potentiels décroissants."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les équipotentiels",
          "stepTheme": "Les équipotentiels",
          "stepBadge": "Les équipotentiels",
          "paragraphText": "• Équipotentiel : ensemble des points qui ont le même potentiel électrostatique.\nDans un champ uniforme, les équipotentiels sont des droites perpendiculaires aux lignes de champ, et le champ $\\vec{E}$ est perpendiculaire aux surfaces équipotentielles (exercice 3, question 2 : vrai).",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p02_q3",
            "type": "mcq",
            "prompt": "Un équipotentiel est l'ensemble des points qui ont :",
            "options": [
              "La même charge électrique",
              "Le même potentiel électrostatique",
              "La même énergie cinétique",
              "La même vitesse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §2.3 du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le champ entre les plaques : E = U divisé par d",
          "stepTheme": "Le champ entre les plaques : E = U divisé par d",
          "stepBadge": "Le champ entre les plaques : E = U divisé par d",
          "paragraphText": "Pour les points P et N situés sur les plaques, la ddp VP − VN = U est la tension appliquée aux plaques.\nLe champ entre les plaques vaut alors $E = \\frac{V_P - V_N}{d} = \\frac{U}{d}$, ce qui donne aussi l'unité du champ : le volt par mètre.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p02_q4",
            "type": "mcq",
            "prompt": "Le champ électrostatique entre deux plaques distantes de d, soumises à la tension U, vaut :",
            "options": [
              "$E = U \\times d$",
              "$E = \\frac{d}{U}$",
              "$E = \\frac{U}{d}$",
              "$E = U + d$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la relation du §2.4 du résumé : E = (VP − VN) divisé par d, soit U divisé par d."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le calcul de l'activité 1 : E = 120 V/m",
          "stepTheme": "Le calcul de l'activité 1 : E = 120 V/m",
          "stepBadge": "Le calcul de l'activité 1 : E = 120 V/m",
          "paragraphText": "Dans l'activité 1, les plaques sont distantes de d = 5 cm, soit 0,05 m, et la tension vaut U = 6 V.\nLa solution convertit la distance en mètres avant d'appliquer la formule du champ.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p02_q5",
            "type": "mcq",
            "prompt": "Calcule le champ entre les plaques de l'activité 1 (U = 6 V, d = 5 cm) :",
            "options": [
              "1,2 V/m",
              "30 V/m",
              "0,3 V/m",
              "120 V/m"
            ],
            "correctAnswerIndex": 3,
            "explanation": "E = 6 divisé par 0,05 = 120 V/m (solution de l'activité d'application 1)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La ddp entre deux équipotentielles : UAB = 2,4 V",
          "stepTheme": "La ddp entre deux équipotentielles : UAB = 2,4 V",
          "stepBadge": "La ddp entre deux équipotentielles : UAB = 2,4 V",
          "paragraphText": "Le point A est à 1 cm de la plaque P et le point B à 2 cm de la plaque N : les équipotentielles qui passent par A et B sont distantes de d' = 2 cm.\nLa solution calcule alors la ddp par $U_{AB} = E \\times d'$.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p02_q6",
            "type": "mcq",
            "prompt": "La ddp entre les points A et B de l'activité 1 (E = 120 V/m, d' = 2 cm) vaut :",
            "options": [
              "2,4 V",
              "6 V",
              "240 V",
              "1,2 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "UAB = E × d' = 120 × 0,02 = 2,4 V (solution de l'activité d'application 1)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p02_q1",
          "type": "mcq",
          "prompt": "La différence de potentiel entre les points A et B est définie par :",
          "options": [
            "$U_{AB} = V_A - V_B$",
            "$U_{AB} = V_A + V_B$",
            "$U_{AB} = V_A \\times V_B$",
            "$U_{AB} = V_B - V_A$ par définition dans le résumé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §2.1 du résumé : UAB = VA − VB."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p02_q2",
          "type": "mcq",
          "prompt": "Le vecteur champ électrostatique E est orienté :",
          "options": [
            "Dans le sens des potentiels croissants",
            "Perpendiculairement aux potentiels",
            "Dans le sens des potentiels décroissants",
            "Sans rapport avec les potentiels"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le §2.2 du résumé : E est dans le sens des potentiels décroissants."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p02_q3",
          "type": "mcq",
          "prompt": "Un équipotentiel est l'ensemble des points qui ont :",
          "options": [
            "La même charge électrique",
            "Le même potentiel électrostatique",
            "La même énergie cinétique",
            "La même vitesse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §2.3 du résumé."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p02_q4",
          "type": "mcq",
          "prompt": "Le champ électrostatique entre deux plaques distantes de d, soumises à la tension U, vaut :",
          "options": [
            "$E = U \\times d$",
            "$E = \\frac{d}{U}$",
            "$E = \\frac{U}{d}$",
            "$E = U + d$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la relation du §2.4 du résumé : E = (VP − VN) divisé par d, soit U divisé par d."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p02_q5",
          "type": "mcq",
          "prompt": "Calcule le champ entre les plaques de l'activité 1 (U = 6 V, d = 5 cm) :",
          "options": [
            "1,2 V/m",
            "30 V/m",
            "0,3 V/m",
            "120 V/m"
          ],
          "correctAnswerIndex": 3,
          "explanation": "E = 6 divisé par 0,05 = 120 V/m (solution de l'activité d'application 1)."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p02_q6",
          "type": "mcq",
          "prompt": "La ddp entre les points A et B de l'activité 1 (E = 120 V/m, d' = 2 cm) vaut :",
          "options": [
            "2,4 V",
            "6 V",
            "240 V",
            "1,2 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "UAB = E × d' = 120 × 0,02 = 2,4 V (solution de l'activité d'application 1)."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p03",
      "order": 3,
      "title": "Énergie potentielle électrostatique et travail W = q × UAB",
      "summary": "Au point M de potentiel VM, une charge q possède l'énergie potentielle Ep = q × VM, et W = q × UAB entre A et B.",
      "conceptExplanation": "Le travail de la force électrostatique s'écrit aussi avec les potentiels : $W_{A \\to B} = q \\times (V_A - V_B) = q \\times U_{AB}$, avec le travail en joules, la charge en coulombs et la ddp en volts.\nUne particule de charge électrique q placée au point M, de potentiel électrostatique VM, possède une énergie potentielle électrostatique définie par $E_p(M) = q \\times V_M$.\nD'après l'exercice 2, le travail de la force électrostatique appliquée à une particule chargée entre deux points est égal à la diminution de son énergie potentielle électrostatique.\nLa documentation précise que cette énergie est indépendante du chemin suivi et qu'elle est égale au travail qu'il faut fournir pour amener la particule, de façon quasi-statique, de l'infini à sa position.",
      "keyRule": "Ep(M) = q × VM ; entre A et B, W = q × UAB = diminution de l'énergie potentielle.",
      "formulas": [
        {
          "name": "Travail et différence de potentiel",
          "formula": "W_{A \\to B} = q \\times (V_A - V_B) = q \\times U_{AB}",
          "note": "W en joules, q en coulombs, potentiels en volts."
        },
        {
          "name": "Énergie potentielle électrostatique",
          "formula": "E_p(M) = q \\times V_M",
          "note": "Énergie de la charge q placée au point M de potentiel VM."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application 2 : le travail sur un électron",
        "statement": "Dans le dispositif de l'activité 1 (UAB = 2,4 V), calcule en joules et en électronvolts le travail de la force électrostatique subie par un électron qui se déplace du point B vers le point A.",
        "methodSteps": [
          "Pour un électron, la charge vaut q = −e ; le travail de B vers A s'écrit W = −e × UBA = e × UAB.",
          "Application numérique : W = 1,6·10⁻¹⁹ × 2,4 = 3,84·10⁻¹⁹ J.",
          "En électronvolts, ce travail vaut simplement 2,4 eV."
        ],
        "conclusion": "Le travail vaut 3,84·10⁻¹⁹ J, soit 2,4 eV : c'est la solution de l'activité d'application 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'autre expression du travail : W = q × UAB",
          "stepTheme": "L'autre expression du travail : W = q × UAB",
          "stepBadge": "L'autre expression du travail : W = q × UAB",
          "paragraphText": "Le §2.5 du résumé donne l'autre expression du travail : $W_{A \\to B} = q \\times (V_A - V_B) = q \\times U_{AB}$.\nElle est souvent plus rapide que le produit scalaire, car elle n'utilise que la charge et la ddp entre les deux points.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p03_q1",
            "type": "mcq",
            "prompt": "L'autre expression du travail de la force électrostatique entre A et B est :",
            "options": [
              "$W = q \\times U_{AB}$",
              "$W = \\frac{U_{AB}}{q}$",
              "$W = q + U_{AB}$",
              "$W = U_{AB}$ uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le §2.5 du résumé : W = q × (VA − VB) = q × UAB."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'énergie potentielle électrostatique Ep = q × V",
          "stepTheme": "L'énergie potentielle électrostatique Ep = q × V",
          "stepBadge": "L'énergie potentielle électrostatique Ep = q × V",
          "paragraphText": "• Énergie potentielle électrostatique : une particule de charge q placée au point M, de potentiel VM, possède l'énergie $E_p(M) = q \\times V_M$.\nElle s'exprime en joules, avec q en coulombs et VM en volts.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p03_q2",
            "type": "mcq",
            "prompt": "L'énergie potentielle électrostatique d'une charge q au point M s'écrit :",
            "options": [
              "$E_p = \\frac{q}{V_M}$",
              "$E_p = q \\times V_M$",
              "$E_p = V_M$ uniquement",
              "$E_p = q + V_M$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §3.1 du résumé, reprise dans la solution de l'exercice 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le travail égale la diminution de l'énergie potentielle",
          "stepTheme": "Le travail égale la diminution de l'énergie potentielle",
          "stepBadge": "Le travail égale la diminution de l'énergie potentielle",
          "paragraphText": "L'exercice 2 fait construire la phrase exacte : le travail de la force électrostatique appliquée à une particule chargée entre deux points est égal à la diminution de l'énergie potentielle électrostatique.\nSi l'énergie potentielle diminue, le travail est positif ; si elle augmente, il est négatif.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p03_q3",
            "type": "mcq",
            "prompt": "Le travail de la force électrostatique entre deux points est égal :",
            "options": [
              "À l'augmentation de l'énergie potentielle dans tous les cas",
              "À l'énergie cinétique finale",
              "À la diminution de l'énergie potentielle électrostatique",
              "À la somme des deux énergies potentielles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la phrase construite dans la solution de l'exercice 2 de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'électron de l'activité 2 : 3,84·10⁻¹⁹ J",
          "stepTheme": "L'électron de l'activité 2 : 3,84·10⁻¹⁹ J",
          "stepBadge": "L'électron de l'activité 2 : 3,84·10⁻¹⁹ J",
          "paragraphText": "Pour l'électron allant de B vers A, la solution écrit $W = e \\times U_{AB}$ avec UAB = 2,4 V.\nLe calcul donne un travail positif : l'électron est attiré dans ce sens par la force électrostatique.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p03_q4",
            "type": "mcq",
            "prompt": "Le travail de la force électrostatique sur l'électron de l'activité 2 (de B vers A) vaut, en joules :",
            "options": [
              "$2{,}4$ J",
              "$1{,}6 \\times 10^{-19}$ J",
              "$6{,}7 \\times 10^{-19}$ J",
              "$3{,}84 \\times 10^{-19}$ J"
            ],
            "correctAnswerIndex": 3,
            "explanation": "W = e × UAB = 1,6·10⁻¹⁹ × 2,4 = 3,84·10⁻¹⁹ J (solution de l'activité d'application 2)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le même travail en électronvolts : 2,4 eV",
          "stepTheme": "Le même travail en électronvolts : 2,4 eV",
          "stepBadge": "Le même travail en électronvolts : 2,4 eV",
          "paragraphText": "La solution de l'activité 2 donne aussi le résultat en électronvolts : 2,4 eV.\nPour une charge élémentaire e qui traverse une ddp de 2,4 V, le travail en électronvolts est numériquement égal à la ddp en volts.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p03_q5",
            "type": "mcq",
            "prompt": "Le travail de l'activité 2, exprimé en électronvolts, vaut :",
            "options": [
              "2,4 eV",
              "3,84 eV",
              "1,6 eV",
              "240 eV"
            ],
            "correctAnswerIndex": 0,
            "explanation": "W = 3,84·10⁻¹⁹ J correspond à 2,4 eV, car 1 eV = 1,6·10⁻¹⁹ J (solution de l'activité 2)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le signe de la charge de l'électron",
          "stepTheme": "Le signe de la charge de l'électron",
          "stepBadge": "Le signe de la charge de l'électron",
          "paragraphText": "Piège : dans $E_p = q \\times V$ et dans $W = q \\times U_{AB}$, la charge d'un électron vaut q = −e = −1,6·10⁻¹⁹ C.\nOublier ce signe moins inverse le signe de l'énergie potentielle de l'électron, comme le montre l'exercice 4 où Ep de l'électron au point S est négative.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p03_q6",
            "type": "mcq",
            "prompt": "Dans la formule Ep = q × V appliquée à un électron, la charge q vaut :",
            "options": [
              "$+1{,}6 \\times 10^{-19}$ C",
              "$-1{,}6 \\times 10^{-19}$ C",
              "0 C",
              "1 C"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La charge de l'électron est négative : q = −e. C'est ce signe qui donne, dans l'exercice 4, une énergie potentielle négative pour l'électron au point S."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p03_q1",
          "type": "mcq",
          "prompt": "L'autre expression du travail de la force électrostatique entre A et B est :",
          "options": [
            "$W = q \\times U_{AB}$",
            "$W = \\frac{U_{AB}}{q}$",
            "$W = q + U_{AB}$",
            "$W = U_{AB}$ uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le §2.5 du résumé : W = q × (VA − VB) = q × UAB."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p03_q2",
          "type": "mcq",
          "prompt": "L'énergie potentielle électrostatique d'une charge q au point M s'écrit :",
          "options": [
            "$E_p = \\frac{q}{V_M}$",
            "$E_p = q \\times V_M$",
            "$E_p = V_M$ uniquement",
            "$E_p = q + V_M$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §3.1 du résumé, reprise dans la solution de l'exercice 1."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p03_q3",
          "type": "mcq",
          "prompt": "Le travail de la force électrostatique entre deux points est égal :",
          "options": [
            "À l'augmentation de l'énergie potentielle dans tous les cas",
            "À l'énergie cinétique finale",
            "À la diminution de l'énergie potentielle électrostatique",
            "À la somme des deux énergies potentielles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la phrase construite dans la solution de l'exercice 2 de la leçon."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p03_q4",
          "type": "mcq",
          "prompt": "Le travail de la force électrostatique sur l'électron de l'activité 2 (de B vers A) vaut, en joules :",
          "options": [
            "$2{,}4$ J",
            "$1{,}6 \\times 10^{-19}$ J",
            "$6{,}7 \\times 10^{-19}$ J",
            "$3{,}84 \\times 10^{-19}$ J"
          ],
          "correctAnswerIndex": 3,
          "explanation": "W = e × UAB = 1,6·10⁻¹⁹ × 2,4 = 3,84·10⁻¹⁹ J (solution de l'activité d'application 2)."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p03_q5",
          "type": "mcq",
          "prompt": "Le travail de l'activité 2, exprimé en électronvolts, vaut :",
          "options": [
            "2,4 eV",
            "3,84 eV",
            "1,6 eV",
            "240 eV"
          ],
          "correctAnswerIndex": 0,
          "explanation": "W = 3,84·10⁻¹⁹ J correspond à 2,4 eV, car 1 eV = 1,6·10⁻¹⁹ J (solution de l'activité 2)."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p03_q6",
          "type": "mcq",
          "prompt": "Dans la formule Ep = q × V appliquée à un électron, la charge q vaut :",
          "options": [
            "$+1{,}6 \\times 10^{-19}$ C",
            "$-1{,}6 \\times 10^{-19}$ C",
            "0 C",
            "1 C"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La charge de l'électron est négative : q = −e. C'est ce signe qui donne, dans l'exercice 4, une énergie potentielle négative pour l'électron au point S."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p04",
      "order": 4,
      "title": "Énergie mécanique et électronvolt",
      "summary": "L'énergie mécanique d'une particule chargée vaut Em = ½mv² + qV ; l'électronvolt vaut 1,6·10⁻¹⁹ J.",
      "conceptExplanation": "En tout point de l'espace où règne un champ électrostatique, l'énergie mécanique d'une particule de charge q, de masse m et de vitesse v, est la somme de son énergie cinétique et de son énergie potentielle électrostatique : $E_M = E_C + E_P = \\frac{1}{2}mv^2 + qV$.\nL'énergie s'exprime aussi en électronvolts : $1 \\text{ eV} = 1 \\times (1{,}6 \\times 10^{-19} \\text{ C}) \\times (1 \\text{ V}) = 1{,}6 \\times 10^{-19}$ J.\nL'exercice 4 (oscilloscope) utilise ces relations : des électrons accélérés sous une tension de 1 600 V atteignent une énergie cinétique de 1,6 keV et une vitesse de 2,37·10⁷ m/s.",
      "keyRule": "Em = Ec + Ep = ½mv² + qV ; 1 eV = 1,6·10⁻¹⁹ J pour convertir les énergies des particules.",
      "formulas": [
        {
          "name": "Énergie mécanique d'une particule chargée",
          "formula": "E_M = \\frac{1}{2}mv^2 + qV",
          "note": "Somme de l'énergie cinétique et de l'énergie potentielle électrostatique."
        },
        {
          "name": "L'électronvolt",
          "formula": "1\\ \\text{eV} = 1{,}6 \\times 10^{-19}\\ \\text{J}",
          "note": "Énergie d'une charge élémentaire traversant une ddp de 1 V."
        }
      ],
      "workedExample": {
        "title": "L'exercice 4 : les électrons du canon de l'oscilloscope",
        "statement": "Les électrons sortent du canon à électrons avec une vitesse supposée nulle et sont accélérés par une tension U = 1 600 V entre la cathode et l'anode. Calcule leur vitesse et leur énergie cinétique à la sortie du canon.",
        "methodSteps": [
          "Le bilan des forces ne retient que la force électrostatique, le poids étant négligeable devant elle.",
          "Le théorème de l'énergie cinétique donne ½mvA² = e × U, d'où vA = 2,37·10⁷ m/s.",
          "L'énergie cinétique vaut EcA = e × U = 1 600 eV, soit 1,6 keV."
        ],
        "conclusion": "vA = 2,37·10⁷ m/s et EcA = 1,6 keV : ce sont les résultats de la solution de l'exercice 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'énergie mécanique : Em = Ec + Ep",
          "stepTheme": "L'énergie mécanique : Em = Ec + Ep",
          "stepBadge": "L'énergie mécanique : Em = Ec + Ep",
          "paragraphText": "• Énergie mécanique : en tout point de l'espace où règne le champ, c'est la somme de l'énergie cinétique et de l'énergie potentielle électrostatique de la particule.\nOn écrit $E_M = E_C + E_P$.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p04_q1",
            "type": "mcq",
            "prompt": "L'énergie mécanique d'une particule chargée dans un champ électrostatique est :",
            "options": [
              "La somme de son énergie cinétique et de son énergie potentielle électrostatique",
              "Son énergie cinétique uniquement",
              "Son énergie potentielle uniquement",
              "La différence entre le champ et la charge"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §3.2 du résumé : EM = EC + EP."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'expression Em = ½mv² + qV",
          "stepTheme": "L'expression Em = ½mv² + qV",
          "stepBadge": "L'expression Em = ½mv² + qV",
          "paragraphText": "En remplaçant chaque énergie par son expression, on obtient $E_M = \\frac{1}{2}mv^2 + qV$.\nLe premier terme est l'énergie cinétique de la particule de masse m et de vitesse v ; le second est son énergie potentielle électrostatique au point de potentiel V.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p04_q2",
            "type": "mcq",
            "prompt": "L'énergie mécanique d'une particule de charge q, de masse m et de vitesse v s'écrit :",
            "options": [
              "$E_M = \\frac{1}{2}mv^2 - qV$ dans tous les cas",
              "$E_M = mv^2 + qV$",
              "$E_M = \\frac{1}{2}mv^2 + qV$",
              "$E_M = qV$ uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'expression du §3.2 : EM = ½mv² + qV."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'électronvolt, autre unité de l'énergie",
          "stepTheme": "L'électronvolt, autre unité de l'énergie",
          "stepBadge": "L'électronvolt, autre unité de l'énergie",
          "paragraphText": "• Électronvolt (eV) : autre unité de l'énergie, adaptée aux particules chargées.\nLe résumé calcule : 1 eV = 1 × (1,6·10⁻¹⁹ C) × (1 V) = 1,6·10⁻¹⁹ J.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p04_q3",
            "type": "mcq",
            "prompt": "Un électronvolt vaut, en joules :",
            "options": [
              "$1{,}6 \\times 10^{-19}$ J",
              "$1{,}6$ J",
              "$10^{-19}$ J",
              "$3{,}84 \\times 10^{-19}$ J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la conversion du §3.3 du résumé : 1 eV = 1,6·10⁻¹⁹ J."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Convertir des keV en joules",
          "stepTheme": "Convertir des keV en joules",
          "stepBadge": "Convertir des keV en joules",
          "paragraphText": "Méthode : multiplier la valeur en électronvolts par 1,6·10⁻¹⁹ pour obtenir les joules.\nPour l'énergie cinétique des électrons du canon, 1,6 keV = 1 600 eV, ce qui donne 2,56·10⁻¹⁶ J.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p04_q4",
            "type": "mcq",
            "prompt": "L'énergie cinétique de 1,6 keV des électrons de l'exercice 4 vaut, en joules :",
            "options": [
              "$1{,}6 \\times 10^{-19}$ J",
              "$2{,}56 \\times 10^{-16}$ J",
              "$2{,}56 \\times 10^{-19}$ J",
              "$1{,}6 \\times 10^{-16}$ J"
            ],
            "correctAnswerIndex": 1,
            "explanation": "1,6 keV = 1 600 eV ; 1 600 × 1,6·10⁻¹⁹ = 2,56·10⁻¹⁶ J."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La vitesse des électrons à la sortie du canon",
          "stepTheme": "La vitesse des électrons à la sortie du canon",
          "stepBadge": "La vitesse des électrons à la sortie du canon",
          "paragraphText": "Dans l'exercice 4, les électrons partent sans vitesse et sont accélérés sous U = 1 600 V.\nLa solution obtient, à la sortie du canon, une vitesse vA = 2,37·10⁷ m/s, très grande devant les vitesses ordinaires : le poids de l'électron est négligeable devant la force électrostatique.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p04_q5",
            "type": "mcq",
            "prompt": "La vitesse des électrons à la sortie du canon de l'exercice 4 (U = 1 600 V) vaut :",
            "options": [
              "$2{,}37 \\times 10^{5}$ m/s",
              "$1{,}6 \\times 10^{7}$ m/s",
              "$2{,}37 \\times 10^{7}$ m/s",
              "$3{,}84 \\times 10^{7}$ m/s"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le résultat de la solution de l'exercice 4 : vA = 2,37·10⁷ m/s, avec une énergie cinétique de 1,6 keV."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le champ n'est uniforme qu'entre plaques planes et parallèles",
          "stepTheme": "Le champ n'est uniforme qu'entre plaques planes et parallèles",
          "stepBadge": "Le champ n'est uniforme qu'entre plaques planes et parallèles",
          "paragraphText": "L'exercice 3 (question 6) juge l'affirmation « le champ entre les armatures d'un condensateur est uniforme quelle que soit la forme de ses armatures ».\nLa solution répond : faux, les armatures doivent être planes et parallèles pour que le champ soit uniforme.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p04_q6",
            "type": "mcq",
            "prompt": "Le champ électrostatique entre les armatures d'un condensateur est uniforme :",
            "options": [
              "Quelle que soit la forme des armatures",
              "Uniquement si la tension est nulle",
              "Uniquement pour les charges positives",
              "Seulement si les armatures sont planes et parallèles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la réponse de la solution de l'exercice 3 (question 6) : il faut des armatures planes et parallèles."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p04_q1",
          "type": "mcq",
          "prompt": "L'énergie mécanique d'une particule chargée dans un champ électrostatique est :",
          "options": [
            "La somme de son énergie cinétique et de son énergie potentielle électrostatique",
            "Son énergie cinétique uniquement",
            "Son énergie potentielle uniquement",
            "La différence entre le champ et la charge"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §3.2 du résumé : EM = EC + EP."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p04_q2",
          "type": "mcq",
          "prompt": "L'énergie mécanique d'une particule de charge q, de masse m et de vitesse v s'écrit :",
          "options": [
            "$E_M = \\frac{1}{2}mv^2 - qV$ dans tous les cas",
            "$E_M = mv^2 + qV$",
            "$E_M = \\frac{1}{2}mv^2 + qV$",
            "$E_M = qV$ uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'expression du §3.2 : EM = ½mv² + qV."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p04_q3",
          "type": "mcq",
          "prompt": "Un électronvolt vaut, en joules :",
          "options": [
            "$1{,}6 \\times 10^{-19}$ J",
            "$1{,}6$ J",
            "$10^{-19}$ J",
            "$3{,}84 \\times 10^{-19}$ J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la conversion du §3.3 du résumé : 1 eV = 1,6·10⁻¹⁹ J."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p04_q4",
          "type": "mcq",
          "prompt": "L'énergie cinétique de 1,6 keV des électrons de l'exercice 4 vaut, en joules :",
          "options": [
            "$1{,}6 \\times 10^{-19}$ J",
            "$2{,}56 \\times 10^{-16}$ J",
            "$2{,}56 \\times 10^{-19}$ J",
            "$1{,}6 \\times 10^{-16}$ J"
          ],
          "correctAnswerIndex": 1,
          "explanation": "1,6 keV = 1 600 eV ; 1 600 × 1,6·10⁻¹⁹ = 2,56·10⁻¹⁶ J."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p04_q5",
          "type": "mcq",
          "prompt": "La vitesse des électrons à la sortie du canon de l'exercice 4 (U = 1 600 V) vaut :",
          "options": [
            "$2{,}37 \\times 10^{5}$ m/s",
            "$1{,}6 \\times 10^{7}$ m/s",
            "$2{,}37 \\times 10^{7}$ m/s",
            "$3{,}84 \\times 10^{7}$ m/s"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le résultat de la solution de l'exercice 4 : vA = 2,37·10⁷ m/s, avec une énergie cinétique de 1,6 keV."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p04_q6",
          "type": "mcq",
          "prompt": "Le champ électrostatique entre les armatures d'un condensateur est uniforme :",
          "options": [
            "Quelle que soit la forme des armatures",
            "Uniquement si la tension est nulle",
            "Uniquement pour les charges positives",
            "Seulement si les armatures sont planes et parallèles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la réponse de la solution de l'exercice 3 (question 6) : il faut des armatures planes et parallèles."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p05",
      "order": 5,
      "title": "Application : le pendule électrostatique entre deux plaques",
      "summary": "À l'équilibre du pendule, tan α = qE divisé par mg : la situation donne α = 38,66° et une tension du fil de 0,013 N.",
      "conceptExplanation": "La situation d'évaluation place une charge positive q = 8·10⁻⁸ C, de masse m = 1 g, suspendue à un fil entre deux plaques parallèles distantes de d = 10 cm et soumises à une tension de valeur absolue |U| = 10⁴ V (g = 10 N/kg).\nLe champ $\\vec{E}$ étant orienté dans le sens des potentiels décroissants, on a VB > VA, donc UAB = VA − VB < 0.\nLa valeur du champ vaut $E = \\frac{|U|}{d} = 10^5$ V/m.\nÀ l'équilibre, la somme des forces (poids, tension du fil, force électrostatique) est nulle ; les projections donnent $\\tan\\alpha = \\frac{qE}{mg}$, soit α = 38,66°, et la tension du fil vaut $T = \\frac{mg}{\\cos\\alpha} = 0{,}013$ N.",
      "keyRule": "Pendule électrostatique à l'équilibre : tan α = qE/(mg) — comparer la force électrostatique au poids.",
      "formulas": [
        {
          "name": "Inclinaison du pendule électrostatique",
          "formula": "\\tan\\alpha = \\frac{qE}{mg}",
          "note": "À l'équilibre entre la force électrostatique, le poids et la tension du fil."
        },
        {
          "name": "Tension du fil à l'équilibre",
          "formula": "T = \\frac{mg}{\\cos\\alpha}",
          "note": "Projection de l'équilibre sur la verticale."
        }
      ],
      "workedExample": {
        "title": "L'exercice 4 : l'énergie potentielle de l'électron dans l'oscilloscope",
        "statement": "Dans l'exercice 4, les électrons pénètrent entre les plaques de déviation (tension 500 V, distance 2 cm) et en sortent au point S, tel que le déplacement dans le champ vaut L = 0,6 cm ; l'origine des potentiels est au point d'entrée O. Calcule le potentiel VS, l'énergie potentielle de l'électron en S et son énergie cinétique de sortie.",
        "methodSteps": [
          "Le potentiel en S vaut VS = U × L divisé par d, soit 500 × 0,6 divisé par 2 : VS = 150 V.",
          "L'énergie potentielle de l'électron en S vaut Ep = −e × VS = −150 eV, soit −0,15 keV (et 0 J en O).",
          "L'énergie cinétique de sortie vaut EcS = EcA + e × VS = 1,6 keV + 0,15 keV = 1,75 keV."
        ],
        "conclusion": "VS = 150 V, Ep(S) = −0,15 keV et EcS = 1,75 keV : ce sont les résultats de la solution de l'exercice 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "piege",
          "stepTitle": "Le signe de la ddp UAB dans la situation",
          "stepTheme": "Le signe de la ddp UAB dans la situation",
          "stepBadge": "Le signe de la ddp UAB dans la situation",
          "paragraphText": "Piège : la situation donne la valeur absolue de la tension, mais la ddp UAB possède un signe qu'il faut déterminer.\nLe champ $\\vec{E}$ est orienté dans le sens des potentiels décroissants : dans le dispositif de la situation, la solution en déduit VB > VA.\nDonc VA − VB < 0 et la différence de potentiel UAB est négative.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p05_q1",
            "type": "mcq",
            "prompt": "Dans la situation d'évaluation, le signe de la différence de potentiel UAB est :",
            "options": [
              "Positif, car VA > VB",
              "Négatif, car E va vers les potentiels décroissants et VB > VA",
              "Nul, car le pendule est à l'équilibre",
              "Impossible à déterminer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la réponse de la résolution (question 1.1) : E étant dans le sens des potentiels décroissants, VB > VA donc UAB < 0."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La valeur du champ : 10⁵ V/m",
          "stepTheme": "La valeur du champ : 10⁵ V/m",
          "stepBadge": "La valeur du champ : 10⁵ V/m",
          "paragraphText": "La valeur du champ se calcule par $E = \\frac{|U|}{d}$, avec |U| = 10⁴ V et d = 10 cm, soit 0,10 m.\nLa solution de la situation obtient un champ de 10⁵ V/m, dirigé de la plaque de plus haut potentiel vers celle de plus bas potentiel.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p05_q2",
            "type": "mcq",
            "prompt": "La valeur du champ entre les plaques de la situation (|U| = 10⁴ V, d = 10 cm) vaut :",
            "options": [
              "$10^{3}$ V/m",
              "$10^{4}$ V/m",
              "$10^{6}$ V/m",
              "$10^{5}$ V/m"
            ],
            "correctAnswerIndex": 3,
            "explanation": "E = 10⁴ divisé par 0,10 = 10⁵ V/m (résolution de la situation d'évaluation)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La condition d'équilibre du pendule",
          "stepTheme": "La condition d'équilibre du pendule",
          "stepBadge": "La condition d'équilibre du pendule",
          "paragraphText": "• Équilibre d'un solide : état dans lequel la somme vectorielle des forces appliquées au solide est nulle.\nLe système est la charge q, soumise à trois forces : son poids, la tension du fil et la force électrostatique.\nÀ l'équilibre, leur somme vectorielle est nulle ; les projections donnent Fe = T sin α et P = T cos α.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p05_q3",
            "type": "mcq",
            "prompt": "À l'équilibre du pendule électrostatique, les forces appliquées à la charge vérifient :",
            "options": [
              "$\\vec{F_e} + \\vec{P} + \\vec{T} = \\vec{0}$",
              "La force électrostatique est nulle",
              "La tension du fil est nulle",
              "Le poids est nul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la condition d'équilibre écrite dans la résolution : la somme des trois forces est le vecteur nul."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L'angle d'inclinaison : α = 38,66°",
          "stepTheme": "L'angle d'inclinaison : α = 38,66°",
          "stepBadge": "L'angle d'inclinaison : α = 38,66°",
          "paragraphText": "En divisant les deux projections, on obtient $\\tan\\alpha = \\frac{F_e}{P} = \\frac{qE}{mg}$.\nAvec qE = 8·10⁻³ N et mg = 0,01 N, le rapport vaut 0,8, ce qui donne l'angle de la solution.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p05_q4",
            "type": "mcq",
            "prompt": "L'angle que fait le fil du pendule avec la verticale dans la situation d'évaluation vaut :",
            "options": [
              "5,71°",
              "38,66°",
              "60°",
              "90°"
            ],
            "correctAnswerIndex": 1,
            "explanation": "tan α = qE/(mg) = 0,8, donc α = 38,66° (résolution de la situation d'évaluation)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La tension du fil : 0,013 N",
          "stepTheme": "La tension du fil : 0,013 N",
          "stepBadge": "La tension du fil : 0,013 N",
          "paragraphText": "La projection sur la verticale donne P = T cos α, donc $T = \\frac{mg}{\\cos\\alpha}$.\nLa solution calcule cette tension du fil : c'était le but du dispositif décrit dans la situation.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p05_q5",
            "type": "mcq",
            "prompt": "La tension du fil du pendule dans la situation d'évaluation vaut :",
            "options": [
              "0,010 N",
              "0,008 N",
              "0,013 N",
              "0,100 N"
            ],
            "correctAnswerIndex": 2,
            "explanation": "T = mg divisé par cos α = 0,01 divisé par cos 38,66°, soit environ 0,013 N (résolution de la situation)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 5 : un angle plus petit, 5,71°",
          "stepTheme": "L'exercice 5 : un angle plus petit, 5,71°",
          "stepBadge": "L'exercice 5 : un angle plus petit, 5,71°",
          "paragraphText": "Dans l'exercice 5, la charge est négative (q = −10⁻⁸ C) et le champ a la même valeur, 10⁵ V/m, pour une masse de 1 g.\nLe rapport entre la force électrostatique et le poids vaut alors 0,1 : l'inclinaison est beaucoup plus faible que dans la situation d'évaluation.",
          "exercise": {
            "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p05_q6",
            "type": "mcq",
            "prompt": "L'angle d'équilibre du pendule de l'exercice 5 (charge de valeur absolue 10⁻⁸ C) vaut :",
            "options": [
              "38,66°",
              "45°",
              "0,57°",
              "5,71°"
            ],
            "correctAnswerIndex": 3,
            "explanation": "tan α = |q|E/(mg) = 0,1, donc α = 5,71° (solution de l'exercice 5)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p05_q1",
          "type": "mcq",
          "prompt": "Dans la situation d'évaluation, le signe de la différence de potentiel UAB est :",
          "options": [
            "Positif, car VA > VB",
            "Négatif, car E va vers les potentiels décroissants et VB > VA",
            "Nul, car le pendule est à l'équilibre",
            "Impossible à déterminer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la réponse de la résolution (question 1.1) : E étant dans le sens des potentiels décroissants, VB > VA donc UAB < 0."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p05_q2",
          "type": "mcq",
          "prompt": "La valeur du champ entre les plaques de la situation (|U| = 10⁴ V, d = 10 cm) vaut :",
          "options": [
            "$10^{3}$ V/m",
            "$10^{4}$ V/m",
            "$10^{6}$ V/m",
            "$10^{5}$ V/m"
          ],
          "correctAnswerIndex": 3,
          "explanation": "E = 10⁴ divisé par 0,10 = 10⁵ V/m (résolution de la situation d'évaluation)."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p05_q3",
          "type": "mcq",
          "prompt": "À l'équilibre du pendule électrostatique, les forces appliquées à la charge vérifient :",
          "options": [
            "$\\vec{F_e} + \\vec{P} + \\vec{T} = \\vec{0}$",
            "La force électrostatique est nulle",
            "La tension du fil est nulle",
            "Le poids est nul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la condition d'équilibre écrite dans la résolution : la somme des trois forces est le vecteur nul."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p05_q4",
          "type": "mcq",
          "prompt": "L'angle que fait le fil du pendule avec la verticale dans la situation d'évaluation vaut :",
          "options": [
            "5,71°",
            "38,66°",
            "60°",
            "90°"
          ],
          "correctAnswerIndex": 1,
          "explanation": "tan α = qE/(mg) = 0,8, donc α = 38,66° (résolution de la situation d'évaluation)."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p05_q5",
          "type": "mcq",
          "prompt": "La tension du fil du pendule dans la situation d'évaluation vaut :",
          "options": [
            "0,010 N",
            "0,008 N",
            "0,013 N",
            "0,100 N"
          ],
          "correctAnswerIndex": 2,
          "explanation": "T = mg divisé par cos α = 0,01 divisé par cos 38,66°, soit environ 0,013 N (résolution de la situation)."
        },
        {
          "id": "premiere_c_physique_l02_energie_potentielle_electrostatique_p05_q6",
          "type": "mcq",
          "prompt": "L'angle d'équilibre du pendule de l'exercice 5 (charge de valeur absolue 10⁻⁸ C) vaut :",
          "options": [
            "38,66°",
            "45°",
            "0,57°",
            "5,71°"
          ],
          "correctAnswerIndex": 3,
          "explanation": "tan α = |q|E/(mg) = 0,1, donc α = 5,71° (solution de l'exercice 5)."
        }
      ]
    }
  ]
};
