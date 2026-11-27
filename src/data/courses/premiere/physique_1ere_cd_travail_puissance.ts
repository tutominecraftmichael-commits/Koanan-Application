import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Travail et puissance d'une force (translation) » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Travail et puissance d'une force (translation) » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const PHYSIQUE_1ERE_CD_L01_TRAVAIL_PUISSANCE: CurriculumChapter = {
  "id": "premiere_c_physique_l01_travail_puissance",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 1,
  "title": "Leçon 1 : Travail et puissance d'une force (translation)",
  "summary": "Le travail d'une force constante est le produit scalaire de la force par le déplacement : il est moteur, nul ou résistant selon l'angle entre la force et le déplacement. La leçon définit ensuite la puissance moyenne et la puissance instantanée, puis le travail du poids et celui de la tension d'un ressort.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Travail et puissance d'une force (translation) » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_physique_l01_travail_puissance_p01",
      "order": 1,
      "title": "Travail d'une force constante au cours d'un déplacement rectiligne",
      "summary": "Le travail est le produit scalaire de la force par le déplacement ; son signe dépend de l'angle α entre les deux vecteurs.",
      "conceptExplanation": "Le travail de la force constante $\\vec{F}$ au cours du déplacement rectiligne $\\overrightarrow{AB}$ est égal au produit scalaire du vecteur force $\\vec{F}$ par le vecteur déplacement $\\overrightarrow{AB}$ : $W_{AB}(\\vec{F}) = \\vec{F} \\cdot \\overrightarrow{AB} = F \\times AB \\times \\cos\\alpha$, avec $\\alpha$ l'angle entre $\\vec{F}$ et $\\overrightarrow{AB}$.\nL'unité S.I. du travail est le joule (J).\nLe travail est une grandeur algébrique : si $\\alpha < 90°$, $\\cos\\alpha > 0$ et le travail est positif, il est dit moteur ; si $\\alpha = 90°$, $\\cos\\alpha = 0$ et le travail est nul ; si $90° < \\alpha < 180°$, $\\cos\\alpha < 0$ et le travail est négatif, il est dit résistant.",
      "keyRule": "W = F × AB × cos α : le signe du travail se lit sur l'angle α entre la force et le déplacement.",
      "formulas": [
        {
          "name": "Travail d'une force constante",
          "formula": "W_{AB}(\\vec{F}) = \\vec{F} \\cdot \\overrightarrow{AB} = F \\times AB \\times \\cos\\alpha",
          "note": "F en newtons, AB en mètres, W en joules ; α est l'angle entre la force et le déplacement."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application : la nature des travaux",
        "statement": "Un solide se déplace dans le sens de son vecteur-vitesse. Quatre forces sont représentées : F1 fait un angle aigu avec le déplacement, F2 et F4 lui sont perpendiculaires, F3 fait un angle obtus avec lui. Donne la nature du travail de chacune.",
        "methodSteps": [
          "Pour F1, l'angle est aigu (α < 90°) : le cosinus est positif, le travail est moteur.",
          "Pour F2 et F4, l'angle vaut 90° : le cosinus est nul, le travail est nul.",
          "Pour F3, l'angle est obtus (90° < α < 180°) : le cosinus est négatif, le travail est résistant."
        ],
        "conclusion": "Ce sont les réponses de la résolution de l'activité d'application du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition du travail",
          "stepTheme": "La définition du travail",
          "stepBadge": "La définition du travail",
          "paragraphText": "• Travail d'une force constante : au cours du déplacement rectiligne de A vers B, il est égal au produit scalaire du vecteur force par le vecteur déplacement.\nOn écrit $W_{AB}(\\vec{F}) = \\vec{F} \\cdot \\overrightarrow{AB}$.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p01_q1",
            "type": "mcq",
            "prompt": "Le travail d'une force constante au cours d'un déplacement rectiligne est égal :",
            "options": [
              "Au produit de la force par la durée du déplacement",
              "Au produit scalaire du vecteur force par le vecteur déplacement",
              "Au quotient de la force par le déplacement",
              "À la somme des valeurs de la force et du déplacement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §1.1.1 du résumé : $W_{AB}(\\vec{F}) = \\vec{F} \\cdot \\overrightarrow{AB}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'expression avec l'angle α",
          "stepTheme": "L'expression avec l'angle α",
          "stepBadge": "L'expression avec l'angle α",
          "paragraphText": "Le produit scalaire se développe : $W_{AB}(\\vec{F}) = F \\times AB \\times \\cos\\alpha$, où $\\alpha$ est l'angle entre le vecteur force et le vecteur déplacement.\nIl faut donc connaître trois grandeurs : la valeur de la force, la longueur du déplacement et l'angle α.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p01_q2",
            "type": "mcq",
            "prompt": "Dans l'expression du travail, l'angle α est l'angle entre :",
            "options": [
              "La force et la verticale",
              "Le déplacement et l'horizontale",
              "Le vecteur force et le vecteur déplacement",
              "La force et le vecteur-vitesse du centre de masse uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé définit $\\alpha = (\\vec{F}, \\overrightarrow{AB})$ : l'angle de la force avec le déplacement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'unité du travail : le joule",
          "stepTheme": "L'unité du travail : le joule",
          "stepBadge": "L'unité du travail : le joule",
          "paragraphText": "L'unité S.I. du travail est le joule, de symbole J.\nAvec F en newtons et AB en mètres, le produit $F \\times AB \\times \\cos\\alpha$ donne bien un travail en joules.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p01_q3",
            "type": "mcq",
            "prompt": "L'unité du travail dans le système international est :",
            "options": [
              "Le joule (J)",
              "Le watt (W)",
              "Le newton (N)",
              "Le pascal (Pa)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le §1.1.2 du résumé : l'unité S.I. du travail est le joule (J) ; le watt est l'unité de la puissance."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le travail moteur (α < 90°)",
          "stepTheme": "Le travail moteur (α < 90°)",
          "stepBadge": "Le travail moteur (α < 90°)",
          "paragraphText": "Premier cas du résumé : si $\\alpha < 90°$, alors $\\cos\\alpha > 0$ et $W_{AB}(\\vec{F}) > 0$.\nLe travail est dit moteur : la force favorise le déplacement, comme la force F1 de l'activité d'application.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p01_q4",
            "type": "mcq",
            "prompt": "Le travail d'une force est dit moteur lorsque :",
            "options": [
              "L'angle α vaut exactement 90°",
              "L'angle α est supérieur à 90°",
              "La force est perpendiculaire au déplacement",
              "L'angle α est inférieur à 90°, le travail est alors positif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pour α < 90°, cos α > 0 donc W > 0 : c'est le premier cas du §1.1.3 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le travail nul et le travail résistant",
          "stepTheme": "Le travail nul et le travail résistant",
          "stepBadge": "Le travail nul et le travail résistant",
          "paragraphText": "Deuxième cas : si $\\alpha = 90°$, $\\cos\\alpha = 0$ et le travail est nul, même si la force n'est pas nulle.\nTroisième cas : si $90° < \\alpha < 180°$, $\\cos\\alpha < 0$ et le travail est négatif : il est dit résistant, la force s'oppose au déplacement.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p01_q5",
            "type": "mcq",
            "prompt": "Une force perpendiculaire au déplacement de son point d'application effectue un travail :",
            "options": [
              "Moteur",
              "Nul",
              "Résistant",
              "Toujours maximal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour α = 90°, cos α = 0 donc W = 0 : c'est le cas des forces F2 et F4 de l'activité d'application."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un calcul de travail moteur",
          "stepTheme": "Un calcul de travail moteur",
          "stepBadge": "Un calcul de travail moteur",
          "paragraphText": "Application de la formule : pour une force de 200 N, un déplacement de 5 m et un angle de 60°, on calcule $W = F \\times AB \\times \\cos\\alpha$.\nComme $\\cos 60° = 0{,}5$, le travail vaut 500 J : il est positif, donc moteur.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p01_q6",
            "type": "mcq",
            "prompt": "Calcule le travail d'une force $F = 200$ N pour un déplacement $AB = 5$ m avec $\\alpha = 60°$ :",
            "options": [
              "1000 J",
              "250 J",
              "500 J",
              "0 J"
            ],
            "correctAnswerIndex": 2,
            "explanation": "W = 200 × 5 × cos 60° = 1000 × 0,5 = 500 J."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l01_travail_puissance_p01_q1",
          "type": "mcq",
          "prompt": "Le travail d'une force constante au cours d'un déplacement rectiligne est égal :",
          "options": [
            "Au produit de la force par la durée du déplacement",
            "Au produit scalaire du vecteur force par le vecteur déplacement",
            "Au quotient de la force par le déplacement",
            "À la somme des valeurs de la force et du déplacement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §1.1.1 du résumé : $W_{AB}(\\vec{F}) = \\vec{F} \\cdot \\overrightarrow{AB}$."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p01_q2",
          "type": "mcq",
          "prompt": "Dans l'expression du travail, l'angle α est l'angle entre :",
          "options": [
            "La force et la verticale",
            "Le déplacement et l'horizontale",
            "Le vecteur force et le vecteur déplacement",
            "La force et le vecteur-vitesse du centre de masse uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé définit $\\alpha = (\\vec{F}, \\overrightarrow{AB})$ : l'angle de la force avec le déplacement."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p01_q3",
          "type": "mcq",
          "prompt": "L'unité du travail dans le système international est :",
          "options": [
            "Le joule (J)",
            "Le watt (W)",
            "Le newton (N)",
            "Le pascal (Pa)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le §1.1.2 du résumé : l'unité S.I. du travail est le joule (J) ; le watt est l'unité de la puissance."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p01_q4",
          "type": "mcq",
          "prompt": "Le travail d'une force est dit moteur lorsque :",
          "options": [
            "L'angle α vaut exactement 90°",
            "L'angle α est supérieur à 90°",
            "La force est perpendiculaire au déplacement",
            "L'angle α est inférieur à 90°, le travail est alors positif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pour α < 90°, cos α > 0 donc W > 0 : c'est le premier cas du §1.1.3 du résumé."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p01_q5",
          "type": "mcq",
          "prompt": "Une force perpendiculaire au déplacement de son point d'application effectue un travail :",
          "options": [
            "Moteur",
            "Nul",
            "Résistant",
            "Toujours maximal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour α = 90°, cos α = 0 donc W = 0 : c'est le cas des forces F2 et F4 de l'activité d'application."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p01_q6",
          "type": "mcq",
          "prompt": "Calcule le travail d'une force $F = 200$ N pour un déplacement $AB = 5$ m avec $\\alpha = 60°$ :",
          "options": [
            "1000 J",
            "250 J",
            "500 J",
            "0 J"
          ],
          "correctAnswerIndex": 2,
          "explanation": "W = 200 × 5 × cos 60° = 1000 × 0,5 = 500 J."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l01_travail_puissance_p02",
      "order": 2,
      "title": "Travail du poids au cours d'un déplacement quelconque",
      "summary": "Le travail du poids ne dépend que des altitudes de départ et d'arrivée : W = mg(zA − zB).",
      "conceptExplanation": "Un solide se déplace du point A, d'altitude zA, au point B, d'altitude zB, l'axe des côtes étant ascendant.\nLe travail du poids s'écrit $W_{AB}(\\vec{P}) = \\vec{P} \\cdot \\overrightarrow{AB} = mg(z_A - z_B)$, que l'on note aussi $W_{AB}(\\vec{P}) = mg \\times \\Delta z$.\nConclusion du résumé : le travail du poids d'un corps ne dépend pas du chemin suivi, mais uniquement des positions de départ et d'arrivée de son point d'application.\nSi le corps descend (zA > zB), le travail du poids est positif et moteur ; s'il monte, il est négatif et résistant.",
      "keyRule": "Travail du poids : mg(zA − zB), axe des côtes ascendant ; il ne dépend jamais du chemin suivi.",
      "formulas": [
        {
          "name": "Travail du poids",
          "formula": "W_{AB}(\\vec{P}) = mg(z_A - z_B)",
          "note": "Axe des côtes ascendant ; m en kg, g en N/kg, altitudes en mètres, W en joules."
        }
      ],
      "workedExample": {
        "title": "L'exercice 2 : le pendule et le travail du poids",
        "statement": "Un pendule de longueur l = 40 cm porte une bille de masse m = 100 g. On l'écarte d'un angle θ = 60° de la verticale puis on l'abandonne : la bille décrit l'arc jusqu'à la position d'équilibre. Détermine le travail du poids et celui de la tension du fil (g = 10 N/kg).",
        "methodSteps": [
          "La tension du fil est orthogonale au déplacement : son travail est nul, W(T) = 0 J.",
          "La différence d'altitude vaut zA − zA0 = l(1 − cos θ).",
          "W(P) = mgl(1 − cos θ) = 0,1 × 10 × 0,4 × (1 − cos 60°) = 0,2 J."
        ],
        "conclusion": "Le travail du poids est moteur (la bille descend) et celui de la tension est nul : ce sont les résultats de la solution de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'expression du travail du poids",
          "stepTheme": "L'expression du travail du poids",
          "stepBadge": "L'expression du travail du poids",
          "paragraphText": "• Travail du poids : pour un déplacement de A (altitude zA) vers B (altitude zB), l'axe des côtes étant ascendant, $W_{AB}(\\vec{P}) = mg(z_A - z_B)$.\nC'est la réponse de l'activité d'application du §1.2 : parmi les propositions, seule mg(zA − zB) est exacte.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p02_q1",
            "type": "mcq",
            "prompt": "L'expression du travail du poids d'un solide allant de A vers B, l'axe des côtes étant ascendant, est :",
            "options": [
              "$W = mg(z_B - z_A)$",
              "$W = mg \\times AB$",
              "$W = -mg \\times AB$",
              "$W = mg(z_A - z_B)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la formule établie au §1.2.1 et confirmée par l'activité d'application : W = mg(zA − zB)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le travail du poids ne dépend pas du chemin",
          "stepTheme": "Le travail du poids ne dépend pas du chemin",
          "stepBadge": "Le travail du poids ne dépend pas du chemin",
          "paragraphText": "Conclusion du §1.2.2 : le travail du poids ne dépend pas du chemin suivi, mais uniquement des positions de départ et d'arrivée.\nL'exercice 1 le vérifie : sur le trajet ABCD, la somme des travaux d'une force constante (−50 J + 550 J + 100 J = 600 J) est égale au travail sur le trajet direct AD (600 J).",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p02_q2",
            "type": "mcq",
            "prompt": "Le travail du poids d'un corps entre deux points A et B dépend :",
            "options": [
              "Uniquement des positions de départ et d'arrivée",
              "Du chemin suivi entre A et B",
              "De la durée du déplacement",
              "De la vitesse du corps"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la conclusion du §1.2.2 du résumé : seuls zA et zB interviennent dans mg(zA − zB)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calculer le travail du poids en descente",
          "stepTheme": "Calculer le travail du poids en descente",
          "stepBadge": "Calculer le travail du poids en descente",
          "paragraphText": "Méthode : relever zA et zB, puis appliquer $W = mg(z_A - z_B)$.\nPour un corps de masse 2 kg qui descend de zA = 5 m à zB = 2 m (g = 10 N/kg), la différence d'altitude vaut 3 m et le travail est positif.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p02_q3",
            "type": "mcq",
            "prompt": "Calcule le travail du poids d'un corps de masse 2 kg descendant de 5 m à 2 m d'altitude (g = 10 N/kg) :",
            "options": [
              "−60 J",
              "60 J",
              "20 J",
              "100 J"
            ],
            "correctAnswerIndex": 1,
            "explanation": "W = mg(zA − zB) = 2 × 10 × (5 − 2) = 60 J, positif car le corps descend."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "En montée, le travail du poids est résistant",
          "stepTheme": "En montée, le travail du poids est résistant",
          "stepBadge": "En montée, le travail du poids est résistant",
          "paragraphText": "Piège : si le corps monte, zB > zA, donc (zA − zB) est négatif et le travail du poids est négatif.\nDans la situation d'évaluation, la caisse de 60 kg monte sur le plan incliné : le travail de son poids est résistant.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p02_q4",
            "type": "mcq",
            "prompt": "Lorsqu'un solide monte, le travail de son poids est :",
            "options": [
              "Positif et moteur",
              "Toujours nul",
              "Négatif et résistant",
              "Égal à mg × AB dans tous les cas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En montée, zA − zB < 0 donc W = mg(zA − zB) < 0 : le poids s'oppose au déplacement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le pendule de l'exercice 2",
          "stepTheme": "Le pendule de l'exercice 2",
          "stepBadge": "Le pendule de l'exercice 2",
          "paragraphText": "Pour la bille du pendule (m = 100 g, l = 40 cm, θ = 60°), la solution calcule $W(\\vec{P}) = mgl(1 - \\cos\\theta)$.\nL'application numérique donne 0,2 J : la bille descend vers sa position d'équilibre, le travail est moteur.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p02_q5",
            "type": "mcq",
            "prompt": "Le travail du poids de la bille du pendule de l'exercice 2 (m = 100 g, l = 40 cm, θ = 60°) vaut :",
            "options": [
              "0 J",
              "0,4 J",
              "2 J",
              "0,2 J"
            ],
            "correctAnswerIndex": 3,
            "explanation": "W = mgl(1 − cos θ) = 0,1 × 10 × 0,4 × (1 − 0,5) = 0,2 J (solution de l'exercice 2)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le chariot de l'exercice 5 sur la partie AB",
          "stepTheme": "Le chariot de l'exercice 5 sur la partie AB",
          "stepBadge": "Le chariot de l'exercice 5 sur la partie AB",
          "paragraphText": "Dans l'exercice 5, le chariot de masse 1 kg descend la partie rectiligne AB = 2 m inclinée de 30°.\nLa solution écrit $W_{A \\to B}(\\vec{P}) = mg \\times AB \\times \\sin\\alpha$ et trouve 10 J, un travail moteur cohérent avec la descente.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p02_q6",
            "type": "mcq",
            "prompt": "Le travail du poids du chariot de l'exercice 5 sur la partie AB (descente de 2 m inclinée de 30°, m = 1 kg) vaut :",
            "options": [
              "10 J, moteur",
              "−10 J, résistant",
              "0 J",
              "20 J, moteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "W = mg × AB × sin 30° = 1 × 10 × 2 × 0,5 = 10 J > 0 : travail moteur (solution de l'exercice 5)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l01_travail_puissance_p02_q1",
          "type": "mcq",
          "prompt": "L'expression du travail du poids d'un solide allant de A vers B, l'axe des côtes étant ascendant, est :",
          "options": [
            "$W = mg(z_B - z_A)$",
            "$W = mg \\times AB$",
            "$W = -mg \\times AB$",
            "$W = mg(z_A - z_B)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la formule établie au §1.2.1 et confirmée par l'activité d'application : W = mg(zA − zB)."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p02_q2",
          "type": "mcq",
          "prompt": "Le travail du poids d'un corps entre deux points A et B dépend :",
          "options": [
            "Uniquement des positions de départ et d'arrivée",
            "Du chemin suivi entre A et B",
            "De la durée du déplacement",
            "De la vitesse du corps"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la conclusion du §1.2.2 du résumé : seuls zA et zB interviennent dans mg(zA − zB)."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p02_q3",
          "type": "mcq",
          "prompt": "Calcule le travail du poids d'un corps de masse 2 kg descendant de 5 m à 2 m d'altitude (g = 10 N/kg) :",
          "options": [
            "−60 J",
            "60 J",
            "20 J",
            "100 J"
          ],
          "correctAnswerIndex": 1,
          "explanation": "W = mg(zA − zB) = 2 × 10 × (5 − 2) = 60 J, positif car le corps descend."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p02_q4",
          "type": "mcq",
          "prompt": "Lorsqu'un solide monte, le travail de son poids est :",
          "options": [
            "Positif et moteur",
            "Toujours nul",
            "Négatif et résistant",
            "Égal à mg × AB dans tous les cas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "En montée, zA − zB < 0 donc W = mg(zA − zB) < 0 : le poids s'oppose au déplacement."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p02_q5",
          "type": "mcq",
          "prompt": "Le travail du poids de la bille du pendule de l'exercice 2 (m = 100 g, l = 40 cm, θ = 60°) vaut :",
          "options": [
            "0 J",
            "0,4 J",
            "2 J",
            "0,2 J"
          ],
          "correctAnswerIndex": 3,
          "explanation": "W = mgl(1 − cos θ) = 0,1 × 10 × 0,4 × (1 − 0,5) = 0,2 J (solution de l'exercice 2)."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p02_q6",
          "type": "mcq",
          "prompt": "Le travail du poids du chariot de l'exercice 5 sur la partie AB (descente de 2 m inclinée de 30°, m = 1 kg) vaut :",
          "options": [
            "10 J, moteur",
            "−10 J, résistant",
            "0 J",
            "20 J, moteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "W = mg × AB × sin 30° = 1 × 10 × 2 × 0,5 = 10 J > 0 : travail moteur (solution de l'exercice 5)."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l01_travail_puissance_p03",
      "order": 3,
      "title": "Puissance d'une force constante",
      "summary": "La puissance moyenne est le travail divisé par la durée ; la puissance instantanée est le produit scalaire de la force par la vitesse.",
      "conceptExplanation": "Une force $\\vec{F}$, effectuant un travail $W(\\vec{F})$ pendant la durée $\\Delta t$, développe une puissance moyenne $P_m = \\frac{W(\\vec{F})}{\\Delta t}$.\nLe travail s'exprime en joules (J), la durée en secondes (s) et la puissance moyenne en watts (symbole : W).\nPour un déplacement élémentaire pendant un temps très bref, la puissance est dite instantanée : elle vaut $P = \\vec{F} \\cdot \\vec{v}$, où $\\vec{v}$ est la vitesse instantanée du point d'application de la force.\nLa documentation ajoute que la puissance reflète la vitesse à laquelle un travail est fourni : à travail égal, le système le plus puissant est le plus rapide.",
      "keyRule": "Puissance moyenne : W divisé par Δt ; puissance instantanée : P = F · v.",
      "formulas": [
        {
          "name": "Puissance moyenne",
          "formula": "P_m = \\frac{W(\\vec{F})}{\\Delta t}",
          "note": "W en joules, Δt en secondes, Pm en watts."
        },
        {
          "name": "Puissance instantanée",
          "formula": "P = \\vec{F} \\cdot \\vec{v}",
          "note": "v est la vitesse instantanée du point d'application de la force."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application : la grue",
        "statement": "Une grue déploie une force de valeur F = 1 000 N pour soulever verticalement une charge pendant une durée Δt = 50 s. La variation d'altitude au cours de la montée est Δz = 30 m. Calcule le travail de la force et sa puissance moyenne.",
        "methodSteps": [
          "Le travail de la force vaut W(F) = F × Δz = 1 000 × 30 = 30 000 J.",
          "La puissance moyenne est le quotient du travail par la durée.",
          "Pmoy = $\\frac{30\\,000}{50} = 600$ W, en appliquant la formule avec les valeurs en joules et en secondes."
        ],
        "conclusion": "Le travail vaut 30 000 J et la puissance moyenne 600 W : ce sont les valeurs de la résolution de l'activité."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La puissance moyenne",
          "stepTheme": "La puissance moyenne",
          "stepBadge": "La puissance moyenne",
          "paragraphText": "• Puissance moyenne : une force effectuant un travail W pendant la durée Δt développe la puissance moyenne $P_m = \\frac{W}{\\Delta t}$.\nElle mesure donc le travail fourni par unité de temps.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p03_q1",
            "type": "mcq",
            "prompt": "La puissance moyenne développée par une force est définie par :",
            "options": [
              "Le produit du travail par la durée",
              "Le quotient du travail par la durée de réalisation",
              "Le quotient de la durée par le travail",
              "Le produit de la force par la masse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §2.1 du résumé : Pm = W(F) divisé par Δt."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les unités de la puissance",
          "stepTheme": "Les unités de la puissance",
          "stepBadge": "Les unités de la puissance",
          "paragraphText": "Le travail s'exprime en joules (J), la durée en secondes (s) et la puissance en watts, de symbole W.\nAttention à ne pas confondre le symbole W du watt avec la notation W du travail.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p03_q2",
            "type": "mcq",
            "prompt": "L'unité de la puissance dans le système international est :",
            "options": [
              "Le joule",
              "Le newton",
              "Le watt",
              "Le mètre par seconde"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le §2.1 précise : W en joules, Δt en secondes et Pm en watts (symbole W)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calculer une puissance moyenne",
          "stepTheme": "Calculer une puissance moyenne",
          "stepBadge": "Calculer une puissance moyenne",
          "paragraphText": "Méthode de l'activité de la grue : on calcule d'abord le travail (30 000 J), puis on divise par la durée (50 s).\nOn obtient une puissance moyenne de 600 W.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p03_q3",
            "type": "mcq",
            "prompt": "Une force effectue un travail de 30 000 J en 50 s. Sa puissance moyenne vaut :",
            "options": [
              "600 W",
              "60 W",
              "1 500 W",
              "0 W"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pmoy = $\\frac{30\\,000}{50} = 600$ W : c'est le calcul de la résolution de l'activité d'application."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La puissance instantanée P = F · v",
          "stepTheme": "La puissance instantanée P = F · v",
          "stepBadge": "La puissance instantanée P = F · v",
          "paragraphText": "• Puissance instantanée : pour un déplacement élémentaire pendant un temps très bref, $P = \\vec{F} \\cdot \\vec{v}$.\nIci, $\\vec{v}$ est la vitesse instantanée du point d'application de la force.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p03_q4",
            "type": "mcq",
            "prompt": "La puissance instantanée d'une force constante s'écrit :",
            "options": [
              "$P = \\vec{F} \\cdot \\overrightarrow{AB}$",
              "$P = \\frac{\\vec{F}}{\\vec{v}}$",
              "$P = F \\times \\Delta t$",
              "$P = \\vec{F} \\cdot \\vec{v}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le résultat du §2.2 : la puissance instantanée est le produit scalaire de la force par la vitesse instantanée de son point d'application."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le wagonnet de l'exercice 4 sur AB",
          "stepTheme": "Le wagonnet de l'exercice 4 sur AB",
          "stepBadge": "Le wagonnet de l'exercice 4 sur AB",
          "paragraphText": "Sur la portion AB, la force de traction vaut F = 50 N et le wagonnet avance à vitesse constante v = 54 km/h, soit 15 m/s, la force étant parallèle au déplacement.\nLa solution calcule la puissance par $P = F \\times v$ et trouve 750 W.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p03_q5",
            "type": "mcq",
            "prompt": "La puissance développée par la force de traction du wagonnet sur AB (F = 50 N, v = 15 m/s) vaut :",
            "options": [
              "50 W",
              "750 W",
              "7 500 W",
              "15 W"
            ],
            "correctAnswerIndex": 1,
            "explanation": "P = F × v = 50 × 15 = 750 W (solution de l'exercice 4, étude sur la portion AB)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Même travail, puissance différente",
          "stepTheme": "Même travail, puissance différente",
          "stepBadge": "Même travail, puissance différente",
          "paragraphText": "La documentation le souligne : le même travail peut être effectué en marchant ou en courant, mais la puissance nécessaire est beaucoup plus grande dans le second cas.\nLa puissance tient compte de la durée, contrairement au travail seul.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p03_q6",
            "type": "mcq",
            "prompt": "Deux systèmes fournissent le même travail. Le plus puissant des deux est :",
            "options": [
              "Celui qui a la plus grande masse",
              "Celui qui met le plus de temps",
              "Celui qui est le plus rapide à fournir ce travail",
              "Celui dont la force est la plus faible"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D'après la documentation, la puissance reflète la vitesse à laquelle un travail est fourni : à travail égal, le plus rapide est le plus puissant."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l01_travail_puissance_p03_q1",
          "type": "mcq",
          "prompt": "La puissance moyenne développée par une force est définie par :",
          "options": [
            "Le produit du travail par la durée",
            "Le quotient du travail par la durée de réalisation",
            "Le quotient de la durée par le travail",
            "Le produit de la force par la masse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §2.1 du résumé : Pm = W(F) divisé par Δt."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p03_q2",
          "type": "mcq",
          "prompt": "L'unité de la puissance dans le système international est :",
          "options": [
            "Le joule",
            "Le newton",
            "Le watt",
            "Le mètre par seconde"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le §2.1 précise : W en joules, Δt en secondes et Pm en watts (symbole W)."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p03_q3",
          "type": "mcq",
          "prompt": "Une force effectue un travail de 30 000 J en 50 s. Sa puissance moyenne vaut :",
          "options": [
            "600 W",
            "60 W",
            "1 500 W",
            "0 W"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pmoy = $\\frac{30\\,000}{50} = 600$ W : c'est le calcul de la résolution de l'activité d'application."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p03_q4",
          "type": "mcq",
          "prompt": "La puissance instantanée d'une force constante s'écrit :",
          "options": [
            "$P = \\vec{F} \\cdot \\overrightarrow{AB}$",
            "$P = \\frac{\\vec{F}}{\\vec{v}}$",
            "$P = F \\times \\Delta t$",
            "$P = \\vec{F} \\cdot \\vec{v}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le résultat du §2.2 : la puissance instantanée est le produit scalaire de la force par la vitesse instantanée de son point d'application."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p03_q5",
          "type": "mcq",
          "prompt": "La puissance développée par la force de traction du wagonnet sur AB (F = 50 N, v = 15 m/s) vaut :",
          "options": [
            "50 W",
            "750 W",
            "7 500 W",
            "15 W"
          ],
          "correctAnswerIndex": 1,
          "explanation": "P = F × v = 50 × 15 = 750 W (solution de l'exercice 4, étude sur la portion AB)."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p03_q6",
          "type": "mcq",
          "prompt": "Deux systèmes fournissent le même travail. Le plus puissant des deux est :",
          "options": [
            "Celui qui a la plus grande masse",
            "Celui qui met le plus de temps",
            "Celui qui est le plus rapide à fournir ce travail",
            "Celui dont la force est la plus faible"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D'après la documentation, la puissance reflète la vitesse à laquelle un travail est fourni : à travail égal, le plus rapide est le plus puissant."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l01_travail_puissance_p04",
      "order": 4,
      "title": "Travail de la tension d'un ressort",
      "summary": "La tension d'un ressort vaut T = kx et son travail, de x1 à x2, vaut −½k(x2² − x1²).",
      "conceptExplanation": "Un solide repose sur un plan horizontal sans frottements, attaché à un ressort de raideur k. Lorsqu'on étire le ressort, il s'allonge d'une longueur x et exerce sur le solide une force appelée tension du ressort.\nLes forces exercées par l'opérateur et par le ressort sont proportionnelles à l'allongement : $T = F = k \\times x$, et la tension s'écrit vectoriellement $\\vec{T} = -kx\\,\\vec{i}$ : elle s'oppose à l'allongement.\nLe travail élémentaire de la tension vaut $\\delta W' = -kx \\times \\delta x$ ; en sommant sur tout l'allongement (aire du triangle de la courbe F = kx), on obtient le travail de l'opérateur $W(\\vec{F}) = \\frac{1}{2}kx^2$ et celui de la tension $W(\\vec{T}) = -\\frac{1}{2}kx^2$.\nConclusion du résumé : si l'allongement passe de x1 à x2, $W(\\vec{T}) = -\\frac{1}{2}k(x_2^2 - x_1^2)$.",
      "keyRule": "Tension d'un ressort : T = kx ; son travail de x1 à x2 vaut −½k(x2² − x1²), toujours opposé à celui de l'opérateur.",
      "formulas": [
        {
          "name": "Tension d'un ressort",
          "formula": "T = k \\times x",
          "note": "k : raideur du ressort en N/m ; x : allongement en mètres ; T en newtons."
        },
        {
          "name": "Travail de la tension",
          "formula": "W(\\vec{T}) = -\\frac{1}{2}k(x_2^2 - x_1^2)",
          "note": "De l'allongement x1 à l'allongement x2 ; depuis l'équilibre (x1 = 0) : W = −½kx²."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application : le ressort de raideur 25 N/m",
        "statement": "Un ressort à spires non jointives, d'axe horizontal, a une constante de raideur k = 25 N/m. Initialement au repos, il est allongé de 8 cm par un opérateur. Détermine le travail de la tension du ressort de l'équilibre jusqu'à 8 cm, puis de 3 cm jusqu'à 8 cm, et le travail de l'opérateur.",
        "methodSteps": [
          "De l'équilibre à 8 cm : W(T) = −½ × 25 × (0,08² − 0) = −8·10⁻² J.",
          "De 3 cm à 8 cm : W(T) = −½ × 25 × (0,08² − 0,03²) = −6,9·10⁻² J.",
          "Le travail de l'opérateur est l'opposé de celui de la tension depuis l'équilibre : W(F) = +8·10⁻² J."
        ],
        "conclusion": "Ce sont les valeurs numériques de la solution de l'activité d'application du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La tension, force de rappel du ressort",
          "stepTheme": "La tension, force de rappel du ressort",
          "stepBadge": "La tension, force de rappel du ressort",
          "paragraphText": "• Tension d'un ressort : force exercée par le ressort sur le solide lorsqu'il est étiré ou comprimé.\nElle est proportionnelle à l'allongement x : $T = k \\times x$, où k est la constante de raideur du ressort.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p04_q1",
            "type": "mcq",
            "prompt": "La valeur de la tension d'un ressort de raideur k allongé de x est :",
            "options": [
              "$T = \\frac{k}{x}$",
              "$T = k \\times x$",
              "$T = \\frac{x}{k}$",
              "$T = k + x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé établit que les forces de l'opérateur et du ressort sont proportionnelles à l'allongement : T = F = k × x."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le sens de la tension : elle s'oppose à l'allongement",
          "stepTheme": "Le sens de la tension : elle s'oppose à l'allongement",
          "stepBadge": "Le sens de la tension : elle s'oppose à l'allongement",
          "paragraphText": "Sur l'axe x'x orienté dans le sens de l'allongement, la force de l'opérateur s'écrit $\\vec{F} = kx\\,\\vec{i}$ et la tension $\\vec{T} = -kx\\,\\vec{i}$.\nLe signe moins traduit le fait que la tension tire le solide vers sa position d'équilibre : c'est une force de rappel.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p04_q2",
            "type": "mcq",
            "prompt": "Vectoriellement, la tension du ressort étiré s'écrit, sur l'axe de l'allongement :",
            "options": [
              "$\\vec{T} = kx\\,\\vec{i}$",
              "$\\vec{T} = -kx\\,\\vec{i}$",
              "$\\vec{T} = \\vec{0}$ dans tous les cas",
              "$\\vec{T} = \\frac{1}{k}x\\,\\vec{i}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé donne F = kx i pour l'opérateur et T = −kx i pour le ressort : la tension est opposée à l'allongement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le travail de la tension depuis l'équilibre",
          "stepTheme": "Le travail de la tension depuis l'équilibre",
          "stepBadge": "Le travail de la tension depuis l'équilibre",
          "paragraphText": "En sommant les travaux élémentaires, le travail de la force de l'opérateur de l'équilibre jusqu'à l'allongement x est l'aire du triangle de la courbe F = kx : $W(\\vec{F}) = \\frac{1}{2}kx^2$.\nLe travail de la tension est son opposé : $W(\\vec{T}) = -\\frac{1}{2}kx^2$.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p04_q3",
            "type": "mcq",
            "prompt": "Le travail de la tension d'un ressort allongé de l'équilibre jusqu'à x vaut :",
            "options": [
              "$W = \\frac{1}{2}kx^2$",
              "$W = kx^2$",
              "$W = -\\frac{1}{2}kx^2$",
              "$W = -kx$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La tension travaille contre l'allongement : son travail est l'opposé de celui de l'opérateur, W(T) = −½kx² (§3.3 du résumé)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le cas général : de x1 à x2",
          "stepTheme": "Le cas général : de x1 à x2",
          "stepBadge": "Le cas général : de x1 à x2",
          "paragraphText": "Conclusion du résumé : l'expression du travail de la tension d'un ressort dont l'allongement passe progressivement de x1 à x2 est $W(\\vec{T}) = -\\frac{1}{2}k(x_2^2 - x_1^2)$.\nAttention : ce sont les carrés des allongements qui se soustraient, pas les allongements eux-mêmes.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p04_q4",
            "type": "mcq",
            "prompt": "Le travail de la tension lorsque l'allongement passe de x1 à x2 s'écrit :",
            "options": [
              "$W = -\\frac{1}{2}k(x_2 - x_1)$",
              "$W = -\\frac{1}{2}k(x_2^2 - x_1^2)$",
              "$W = -k(x_2^2 - x_1^2)$",
              "$W = \\frac{1}{2}k(x_2^2 - x_1^2)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion du §3.3 : W(T) = −½k(x2² − x1²), avec le signe moins de la force de rappel."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le calcul de l'activité : −8·10⁻² J",
          "stepTheme": "Le calcul de l'activité : −8·10⁻² J",
          "stepBadge": "Le calcul de l'activité : −8·10⁻² J",
          "paragraphText": "Pour k = 25 N/m et un allongement de 8 cm depuis l'équilibre, la solution convertit 8 cm en 0,08 m avant d'appliquer la formule.\nElle obtient $W(\\vec{T}) = -8 \\times 10^{-2}$ J : un travail résistant, comme attendu pour une force de rappel.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p04_q5",
            "type": "mcq",
            "prompt": "Calcule le travail de la tension du ressort de l'activité (k = 25 N/m) allongé de l'équilibre à 8 cm :",
            "options": [
              "$+8 \\times 10^{-2}$ J",
              "$-8 \\times 10^{-2}$ J",
              "$-0{,}16$ J",
              "$-2$ J"
            ],
            "correctAnswerIndex": 1,
            "explanation": "W(T) = −½ × 25 × 0,08² = −0,08 J = −8·10⁻² J (solution de l'activité d'application)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre travail de l'opérateur et travail de la tension",
          "stepTheme": "Ne pas confondre travail de l'opérateur et travail de la tension",
          "stepBadge": "Ne pas confondre travail de l'opérateur et travail de la tension",
          "paragraphText": "Piège : pour le même allongement, le travail de l'opérateur est positif ($+\\frac{1}{2}kx^2$) et celui de la tension est négatif ($-\\frac{1}{2}kx^2$).\nDans l'activité, l'opérateur fournit donc +8·10⁻² J pendant que la tension effectue −8·10⁻² J.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p04_q6",
            "type": "mcq",
            "prompt": "Le travail effectué par l'opérateur qui allonge le ressort de l'activité jusqu'à 8 cm vaut :",
            "options": [
              "$-8 \\times 10^{-2}$ J",
              "$0$ J",
              "$+8 \\times 10^{-2}$ J",
              "$+6{,}9 \\times 10^{-2}$ J"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le travail de l'opérateur est l'opposé de celui de la tension : W(F) = −W(T) = +8·10⁻² J (question 2 de l'activité)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l01_travail_puissance_p04_q1",
          "type": "mcq",
          "prompt": "La valeur de la tension d'un ressort de raideur k allongé de x est :",
          "options": [
            "$T = \\frac{k}{x}$",
            "$T = k \\times x$",
            "$T = \\frac{x}{k}$",
            "$T = k + x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé établit que les forces de l'opérateur et du ressort sont proportionnelles à l'allongement : T = F = k × x."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p04_q2",
          "type": "mcq",
          "prompt": "Vectoriellement, la tension du ressort étiré s'écrit, sur l'axe de l'allongement :",
          "options": [
            "$\\vec{T} = kx\\,\\vec{i}$",
            "$\\vec{T} = -kx\\,\\vec{i}$",
            "$\\vec{T} = \\vec{0}$ dans tous les cas",
            "$\\vec{T} = \\frac{1}{k}x\\,\\vec{i}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé donne F = kx i pour l'opérateur et T = −kx i pour le ressort : la tension est opposée à l'allongement."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p04_q3",
          "type": "mcq",
          "prompt": "Le travail de la tension d'un ressort allongé de l'équilibre jusqu'à x vaut :",
          "options": [
            "$W = \\frac{1}{2}kx^2$",
            "$W = kx^2$",
            "$W = -\\frac{1}{2}kx^2$",
            "$W = -kx$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La tension travaille contre l'allongement : son travail est l'opposé de celui de l'opérateur, W(T) = −½kx² (§3.3 du résumé)."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p04_q4",
          "type": "mcq",
          "prompt": "Le travail de la tension lorsque l'allongement passe de x1 à x2 s'écrit :",
          "options": [
            "$W = -\\frac{1}{2}k(x_2 - x_1)$",
            "$W = -\\frac{1}{2}k(x_2^2 - x_1^2)$",
            "$W = -k(x_2^2 - x_1^2)$",
            "$W = \\frac{1}{2}k(x_2^2 - x_1^2)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion du §3.3 : W(T) = −½k(x2² − x1²), avec le signe moins de la force de rappel."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p04_q5",
          "type": "mcq",
          "prompt": "Calcule le travail de la tension du ressort de l'activité (k = 25 N/m) allongé de l'équilibre à 8 cm :",
          "options": [
            "$+8 \\times 10^{-2}$ J",
            "$-8 \\times 10^{-2}$ J",
            "$-0{,}16$ J",
            "$-2$ J"
          ],
          "correctAnswerIndex": 1,
          "explanation": "W(T) = −½ × 25 × 0,08² = −0,08 J = −8·10⁻² J (solution de l'activité d'application)."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p04_q6",
          "type": "mcq",
          "prompt": "Le travail effectué par l'opérateur qui allonge le ressort de l'activité jusqu'à 8 cm vaut :",
          "options": [
            "$-8 \\times 10^{-2}$ J",
            "$0$ J",
            "$+8 \\times 10^{-2}$ J",
            "$+6{,}9 \\times 10^{-2}$ J"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le travail de l'opérateur est l'opposé de celui de la tension : W(F) = −W(T) = +8·10⁻² J (question 2 de l'activité)."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l01_travail_puissance_p05",
      "order": 5,
      "title": "Application : la caisse tirée sur un plan incliné",
      "summary": "Sur un plan incliné de 20°, la tension de la corde est motrice, le poids et le frottement sont résistants.",
      "conceptExplanation": "Dans la situation d'évaluation, une caisse de masse m = 60 kg, supposée ponctuelle, est posée sur un plan incliné d'un angle α = 20° par rapport à l'horizontale.\nUn ouvrier la tire sur une distance AB = 11,5 m à l'aide d'une corde : la tension de la corde vaut T = 500 N, la force de frottement vaut f = 50 N et g = 10 N/kg.\nLa tension de la corde est motrice car elle contribue au déplacement de la caisse ; les travaux du poids et de la force de frottement sont résistants car ces forces s'opposent à la montée.\nLa résolution calcule : $W_{AB}(\\vec{P}) = mg(z_i - z_f) = -2\\,360$ J, $W_{AB}(\\vec{T}) = T \\times AB = 5\\,750$ J et $W_{AB}(\\vec{f}) = -f \\times AB = -575$ J.",
      "keyRule": "Sur un plan incliné en montée : force de traction motrice, poids et frottement résistants ; chaque travail se calcule avec sa propre formule.",
      "formulas": [
        {
          "name": "Travaux dans la situation d'évaluation",
          "formula": "W_{AB}(\\vec{T}) = T \\times AB \\quad ; \\quad W_{AB}(\\vec{f}) = -f \\times AB",
          "note": "T = 500 N, f = 50 N et AB = 11,5 m dans la situation du résumé."
        }
      ],
      "workedExample": {
        "title": "L'exercice 3 : la skieuse et la force de traction",
        "statement": "Une skieuse de masse m = 58 kg est tirée à vitesse constante par un remonte-pente sur une piste rectiligne de longueur L = 300 m inclinée de α = 20°. La tige fait un angle β = 30° avec la piste et les frottements sont négligeables (g = 9,8 N/kg). Détermine la valeur de la force de traction de la tige.",
        "methodSteps": [
          "Les travaux sur AB : celui de la réaction normale est nul (force perpendiculaire), celui du poids vaut −mgL sin α et celui de la traction vaut T × L × cos β.",
          "À vitesse constante, le principe de l'inertie donne la somme des forces nulle, donc la somme des travaux est nulle.",
          "On en tire T = mg sin α divisé par cos β, soit T = 224,48 N."
        ],
        "conclusion": "La force de traction vaut 224,48 N : c'est le résultat de la solution de l'exercice 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La nature du travail de la tension de la corde",
          "stepTheme": "La nature du travail de la tension de la corde",
          "stepBadge": "La nature du travail de la tension de la corde",
          "paragraphText": "• Travail moteur : travail d'une force qui contribue au déplacement du solide. Dans la résolution, on représente d'abord les forces (poids, tension de la corde, réaction du plan décomposée en réaction normale et frottement), puis on juge la nature de chaque travail.\nLe travail de la tension de la corde est moteur car elle contribue au déplacement de la caisse.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p05_q1",
            "type": "mcq",
            "prompt": "Dans la situation d'évaluation, le travail de la tension de la corde est :",
            "options": [
              "Moteur, car la tension contribue au déplacement de la caisse",
              "Résistant, car la corde retient la caisse",
              "Nul, car la corde est inextensible",
              "Moteur uniquement si la caisse descend"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la réponse de la résolution : la tension tire la caisse dans le sens de son déplacement, son travail est moteur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Poids et frottement : des travaux résistants",
          "stepTheme": "Poids et frottement : des travaux résistants",
          "stepBadge": "Poids et frottement : des travaux résistants",
          "paragraphText": "La résolution poursuit : les travaux du poids et de la force de frottement sont résistants.\nCes deux forces s'opposent à la montée de la caisse le long du plan incliné.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p05_q2",
            "type": "mcq",
            "prompt": "Pendant la montée de la caisse, les travaux du poids et du frottement sont :",
            "options": [
              "Tous les deux moteurs",
              "Résistants, car ces forces s'opposent à la montée",
              "Tous les deux nuls",
              "Moteur pour le poids, nul pour le frottement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la justification de la résolution de la situation d'évaluation : poids et frottement s'opposent au déplacement en montée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le travail du poids de la caisse : −2 360 J",
          "stepTheme": "Le travail du poids de la caisse : −2 360 J",
          "stepBadge": "Le travail du poids de la caisse : −2 360 J",
          "paragraphText": "La caisse part de l'altitude zi = 0 et arrive à l'altitude $z_f = AB \\times \\sin 20°$.\nLa résolution applique $W_{AB}(\\vec{P}) = mg(z_i - z_f)$ avec m = 60 kg et g = 10 N/kg, et obtient un travail négatif.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p05_q3",
            "type": "mcq",
            "prompt": "Le travail du poids de la caisse (m = 60 kg, AB = 11,5 m, plan incliné de 20°) vaut :",
            "options": [
              "+2 360 J",
              "−575 J",
              "−2 360 J",
              "−6 900 J"
            ],
            "correctAnswerIndex": 2,
            "explanation": "W(P) = 60 × 10 × (0 − 11,5 × sin 20°) = −2 360 J (résolution de la situation d'évaluation)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le travail de la tension : 5 750 J",
          "stepTheme": "Le travail de la tension : 5 750 J",
          "stepBadge": "Le travail de la tension : 5 750 J",
          "paragraphText": "La tension de la corde est dirigée le long du déplacement : son travail est le produit de sa valeur par la distance parcourue.\nAvec T = 500 N et AB = 11,5 m, la résolution obtient un travail moteur de 5 750 J.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p05_q4",
            "type": "mcq",
            "prompt": "Le travail de la tension de la corde (T = 500 N, AB = 11,5 m) vaut :",
            "options": [
              "500 J",
              "11,5 J",
              "−5 750 J",
              "5 750 J"
            ],
            "correctAnswerIndex": 3,
            "explanation": "W(T) = T × AB = 500 × 11,5 = 5 750 J, positif car la tension est dans le sens du déplacement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le travail du frottement : −575 J",
          "stepTheme": "Le travail du frottement : −575 J",
          "stepBadge": "Le travail du frottement : −575 J",
          "paragraphText": "La force de frottement, de valeur f = 50 N, est opposée au déplacement sur toute la distance AB.\nSon travail vaut donc $W_{AB}(\\vec{f}) = -f \\times AB$ : c'est le travail que la situation demandait de déterminer.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p05_q5",
            "type": "mcq",
            "prompt": "Le travail de la force de frottement subie par la caisse (f = 50 N, AB = 11,5 m) vaut :",
            "options": [
              "−575 J",
              "+575 J",
              "−50 J",
              "−2 360 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "W(f) = −f × AB = −50 × 11,5 = −575 J : le signe moins vient de l'opposition du frottement au déplacement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La réaction normale ne travaille pas",
          "stepTheme": "La réaction normale ne travaille pas",
          "stepBadge": "La réaction normale ne travaille pas",
          "paragraphText": "Piège classique : la réaction normale du support est perpendiculaire au déplacement, donc son travail est nul.\nL'exercice 3 le rappelle pour la skieuse : $W_{AB}(\\vec{R}_N) = 0$ J car $\\vec{R}_N$ est perpendiculaire à $\\overrightarrow{AB}$ ; il en va de même pour la réaction normale du plan dans la situation de la caisse.",
          "exercise": {
            "id": "premiere_c_physique_l01_travail_puissance_p05_q6",
            "type": "mcq",
            "prompt": "Le travail de la réaction normale du plan sur la caisse est :",
            "options": [
              "Moteur",
              "Nul, car la réaction normale est perpendiculaire au déplacement",
              "Résistant",
              "Égal à celui du frottement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une force perpendiculaire au déplacement a un travail nul (α = 90°) : c'est le rappel fait dans la solution de l'exercice 3."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l01_travail_puissance_p05_q1",
          "type": "mcq",
          "prompt": "Dans la situation d'évaluation, le travail de la tension de la corde est :",
          "options": [
            "Moteur, car la tension contribue au déplacement de la caisse",
            "Résistant, car la corde retient la caisse",
            "Nul, car la corde est inextensible",
            "Moteur uniquement si la caisse descend"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la réponse de la résolution : la tension tire la caisse dans le sens de son déplacement, son travail est moteur."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p05_q2",
          "type": "mcq",
          "prompt": "Pendant la montée de la caisse, les travaux du poids et du frottement sont :",
          "options": [
            "Tous les deux moteurs",
            "Résistants, car ces forces s'opposent à la montée",
            "Tous les deux nuls",
            "Moteur pour le poids, nul pour le frottement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la justification de la résolution de la situation d'évaluation : poids et frottement s'opposent au déplacement en montée."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p05_q3",
          "type": "mcq",
          "prompt": "Le travail du poids de la caisse (m = 60 kg, AB = 11,5 m, plan incliné de 20°) vaut :",
          "options": [
            "+2 360 J",
            "−575 J",
            "−2 360 J",
            "−6 900 J"
          ],
          "correctAnswerIndex": 2,
          "explanation": "W(P) = 60 × 10 × (0 − 11,5 × sin 20°) = −2 360 J (résolution de la situation d'évaluation)."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p05_q4",
          "type": "mcq",
          "prompt": "Le travail de la tension de la corde (T = 500 N, AB = 11,5 m) vaut :",
          "options": [
            "500 J",
            "11,5 J",
            "−5 750 J",
            "5 750 J"
          ],
          "correctAnswerIndex": 3,
          "explanation": "W(T) = T × AB = 500 × 11,5 = 5 750 J, positif car la tension est dans le sens du déplacement."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p05_q5",
          "type": "mcq",
          "prompt": "Le travail de la force de frottement subie par la caisse (f = 50 N, AB = 11,5 m) vaut :",
          "options": [
            "−575 J",
            "+575 J",
            "−50 J",
            "−2 360 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "W(f) = −f × AB = −50 × 11,5 = −575 J : le signe moins vient de l'opposition du frottement au déplacement."
        },
        {
          "id": "premiere_c_physique_l01_travail_puissance_p05_q6",
          "type": "mcq",
          "prompt": "Le travail de la réaction normale du plan sur la caisse est :",
          "options": [
            "Moteur",
            "Nul, car la réaction normale est perpendiculaire au déplacement",
            "Résistant",
            "Égal à celui du frottement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une force perpendiculaire au déplacement a un travail nul (α = 90°) : c'est le rappel fait dans la solution de l'exercice 3."
        }
      ]
    }
  ]
};
