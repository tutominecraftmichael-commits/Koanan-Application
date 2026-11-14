import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const PHYSIQUE_TLE_CD_L15_MODELE_ONDULATOIRE_LUMIERE: CurriculumChapter = {
  "id": "physique_tle_cd_15_modele_ondulatoire_lumiere",
  "order": 15,
  "title": "Modèle ondulatoire de la lumière (Diffraction et interférences)",
  "summary": "Étude rigoureuse du caractère ondulatoire de la lumière : phénomène de diffraction par une fente ou un trou, écart angulaire theta = lambda/a, largeur de la tache centrale, interférences lumineuses à deux ondes (fentes d'Young), différence de marche géométrique delta = a.y/D, interfrange i = lambda.D/a, nature électromagnétique et spectre complet.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC)",
  "points": [
    {
      "id": "pt1_phenomene_diffraction_optique_geometrique",
      "order": 1,
      "title": "Phénomène de diffraction et limites de l'optique géométrique",
      "summary": "Mise en évidence expérimentale de la diffraction, mise en défaut du principe de propagation rectiligne de la lumière, conditions d'observation et caractère ondulatoire.",
      "conceptExplanation": "En optique géométrique classique, la lumière est modélisée par des rayons rectilignes se propageant en ligne droite dans un milieu homogène et transparent. Toutefois, lorsque l'on interpose sur le trajet d'un faisceau lumineux (tel qu'un faisceau laser monochromatique) un obstacle ou une ouverture de petite dimension (fente étroite, trou micrométrique, fil de cheveu), on constate que le faisceau ne forme pas une ombre géométrique nette : la lumière s'étale transversalement dans des directions non prévues par l'optique géométrique. Ce phénomène est la diffraction. La diffraction est une propriété caractéristique universelle de toutes les ondes (acoustiques, mécaniques, lumineuses). Elle se manifeste de façon d'autant plus marquée que les dimensions 'a' de l'ouverture ou de l'obstacle sont petites et du même ordre de grandeur que la longueur d'onde lambda de la lumière (a de l'ordre de grandeur de lambda ou de quelques dizaines à centaines de micromètres).",
      "keyRule": "La diffraction prouve la nature ondulatoire de la lumière et met en défaut le principe de propagation rectiligne dès que la dimension de l'obstacle est comparable à la longueur d'onde.",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "a \\sim \\lambda \\implies \\text{Diffraction très marquée}"
        },
        {
          "name": "Relation 2",
          "formula": "\\text{Optique géométrique valide si : } a \\gg \\lambda"
        }
      ],
      "workedExample": {
        "title": "Comparaison de l'effet de diffraction pour la lumière et pour le son",
        "statement": "On considère une porte de largeur a = 80 cm. 1. Calculer le rapport lambda / a pour une onde sonore de fréquence 1 000 Hz dans l'air (v = 340 m/s). 2. Calculer le même rapport pour une onde lumineuse rouge (lambda = 650 nm). 3. Expliquer pourquoi on peut entendre une conversation venant d'une pièce voisine sans voir les personnes qui parlent.",
        "methodSteps": [
          "Étape 1 : Pour le son, calculer la longueur d'onde sonore : lambda_son = v / f = 340 m/s / 1000 Hz = 0,34 m = 34 cm. Le rapport lambda_son / a = 0,34 / 0,80 = 0,425 (de l'ordre de 1).",
          "Étape 2 : Pour la lumière rouge : lambda_lum = 650 nm = 6,50.10⁻⁷ m. Le rapport lambda_lum / a = 6,50.10⁻⁷ / 0,80 ≈ 8,1.10⁻⁷ (extrêmement petit devant 1).",
          "Étape 3 : Interpréter les résultats : Comme lambda_son est du même ordre de grandeur que la largeur de la porte (a ~ lambda_son), l'onde sonore subit une diffraction spectaculaire à travers l'ouverture et contourne les parois dans toutes les directions. En revanche, pour la lumière, la largeur de la porte est plus d'un million de fois plus grande que la longueur d'onde (a >> lambda_lum) : la diffraction lumineuse est imperceptible, et la lumière se propage de manière rigoureusement rectiligne (optique géométrique)."
        ],
        "conclusion": "La diffraction est flagrante pour le son au quotidien parce que ses longueurs d'onde sont à notre échelle métrique, alors qu'elle requiert des fentes microscopiques pour être observée avec la lumière visible (lambda ~ 0,5 µm)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison entre propagation rectiligne géométrique et diffraction ondulatoire",
        "tableData": {
          "headers": [
            "Critère d'analyse",
            "Modèle de l'optique géométrique",
            "Modèle ondulatoire (phénomène de diffraction)",
            "Conséquence pratique"
          ],
          "rows": [
            [
              "Principe de base",
              "Propagation rigoureusement rectiligne des rayons lumineux",
              "Propagation ondulatoire avec étalement de l'onde au franchissement d'obstacles",
              "La lumière contourne les bords des fentes étroites"
            ],
            [
              "Condition de validité",
              "Dimensions des obstacles a >> lambda (grands objets du quotidien)",
              "Dimensions des obstacles a de l'ordre de lambda à 100 lambda (fentes fines)",
              "L'optique géométrique n'est qu'une approximation asymptotique pour lambda -> 0"
            ],
            [
              "Image sur l'écran",
              "Tache géométrique délimitée aux dimensions nettes de l'ouverture",
              "Figure étalée formée d'une tache centrale brillante entourée de franges secondaires",
              "La tache centrale est beaucoup plus large que la fente elle-même !"
            ],
            [
              "Évolution avec la taille a",
              "Si a diminue, la tache lumineuse rétrécit",
              "Si a diminue, la tache centrale s'élargit inversement proportionnellement !",
              "Plus l'ouverture est étroite, plus la lumière s'étale largement"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Mise en évidence de la diffraction par un laser",
          "stepTheme": "Phénomène de diffraction",
          "stepBadge": "Définition",
          "paragraphText": "Lorsqu'on éclaire une fente verticale très fine (largeur a de quelques centièmes de millimètre) à l'aide d'un faisceau laser monochromatique, on observe sur un écran situé à quelques mètres une figure de diffraction horizontale : une tache centrale très lumineuse et large, entourée de part et d'autre de taches secondaires alternées de plus en plus faibles, séparées par des extinctions sombres. L'étalement de la lumière s'effectue perpendiculairement à la direction de la fente. Ce comportement est la signature incontestable de la nature ondulatoire de la lumière.",
          "exercise": {
            "id": "phys_tle_cd_15_p1_s1_qcm",
            "type": "mcq",
            "prompt": "On éclaire une fente verticale étroite avec un laser rouge. Dans quelle direction la figure de diffraction s'étale-t-elle principalement sur l'écran ?",
            "options": [
              "Verticalement, dans le même sens que la fente",
              "Horizontalement, dans la direction perpendiculaire à la fente",
              "En cercles concentriques",
              "La lumière ne s'étale pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'étalement par diffraction s'effectue toujours dans la direction où la dimension de l'obstacle est la plus petite. Pour une fente verticale étroite (largeur a petite selon l'axe horizontal, hauteur grande selon l'axe vertical), la diffraction a lieu horizontalement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Principe de Huygens-Fresnel et ondelettes secondaires",
          "stepTheme": "Théorie d'ondes",
          "stepBadge": "Principe fondamental",
          "paragraphText": "Selon le principe de Huygens-Fresnel, chaque point d'une ouverture atteint par une onde incidente se comporte comme une source ponctuelle secondaire émettant des ondelettes sphériques de même fréquence et en phase. Au-delà de l'ouverture, l'onde résultante en tout point de l'espace est la superposition cohérente de toutes ces ondelettes secondaires. Cette interférence continue entre ondelettes issues de la fente engendre l'alternance de zones d'extinction et de renforcement lumineux.",
          "exercise": {
            "id": "phys_tle_cd_15_p1_s2_qcm",
            "type": "mcq",
            "prompt": "D'après le principe de Huygens-Fresnel, que devient le front d'onde plan d'une onde lumineuse lorsqu'il atteint les bords d'un petit orifice ?",
            "options": [
              "Il est totalement absorbé par les bords",
              "Chaque point de l'ouverture devient une source virtuelle d'ondelettes sphériques qui interfèrent entre elles",
              "Il se divise en deux rayons lumineux classiques",
              "Il change de fréquence"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'énoncé fondamental du principe de Huygens-Fresnel : chaque point de l'ouverture se comporte comme un émetteur secondaire d'ondes sphériques synchrones, dont la superposition crée la figure de diffraction observée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Influence de la taille de l'ouverture sur l'étalement",
          "stepTheme": "Comportement inverse",
          "stepBadge": "Propriété clé",
          "paragraphText": "Une propriété spectaculaire de la diffraction est sa relation de réciprocité spatiale : plus l'ouverture est petite, plus l'étalement angulaire du faisceau diffracté est grand. Si l'on réduit progressivement la largeur 'a' d'une fente, on voit la tache centrale sur l'écran s'élargir au lieu de rétrécir ! Inversement, si la fente devient très large devant la longueur d'onde (a >> lambda), l'angle de diffraction devient infinitésimal, et l'on retrouve l'ombre géométrique nette de l'optique classique.",
          "exercise": {
            "id": "phys_tle_cd_15_p1_s3_qcm",
            "type": "mcq",
            "prompt": "On remplace une fente de diffraction de largeur a₁ = 0,20 mm par une fente plus étroite de largeur a₂ = 0,05 mm. Comment évolue la largeur de la tache centrale sur l'écran ?",
            "options": [
              "Elle est divisée par 4",
              "Elle reste inchangée",
              "Elle est multipliée par 4",
              "Elle est multipliée par 16"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La largeur de la tache centrale L est inversement proportionnelle à la largeur de la fente a (L = 2*lambda*D / a). En divisant a par 4 (0,20 / 0,05 = 4), la largeur L de la tache centrale est multipliée par 4."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Confusion entre diffraction par un trou et diffraction par une fente",
          "stepBadge": "Attention piège",
          "stepTheme": "Géométrie des figures",
          "paragraphText": "Il convient de ne pas confondre les figures obtenues selon la géométrie de l'ouverture : 1. Pour une fente rectiligne de largeur a, la figure est unidimensionnelle : c'est une succession de taches rectangulaires alignées le long d'un axe perpendiculaire à la fente. 2. Pour un trou circulaire de diamètre a, la figure de diffraction présente une symétrie de révolution : elle est formée d'un disque central circulaire très brillant (le disque d'Airy) entouré d'anneaux concentriques alternativement sombres et brillants.",
          "exercise": {
            "id": "phys_tle_cd_15_p1_s4_qcm",
            "type": "mcq",
            "prompt": "Quelle figure de diffraction observe-t-on sur un écran placé derrière un diaphragme circulaire à trou d'aiguille éclairé par un laser ?",
            "options": [
              "Une croix lumineuse en forme de X",
              "Une tache centrale circulaire (disque d'Airy) entourée d'anneaux concentriques clairs et sombres",
              "Une ligne droite continue de points lumineux",
              "Un écran totalement noir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La symétrie axiale du trou circulaire produit une figure de diffraction à symétrie circulaire : la tache d'Airy centrale entourée d'anneaux concentriques d'intensités décroissantes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Critère de détection de la diffraction",
          "stepTheme": "Ordres de grandeur",
          "stepBadge": "Méthode",
          "paragraphText": "Pour déterminer si la diffraction doit être prise en compte dans un problème physique : 1. Calculer le rapport lambda / a en exprimant lambda et a dans la même unité (ex. en mètres). 2. Si lambda / a >= 0,001 (10⁻³), l'écart angulaire theta >= 1 mrad est tout à fait mesurable à l'échelle d'un laboratoire (D = 1 à 2 m), la diffraction est incontournable. 3. Si lambda / a < 10⁻⁵ (objets macroscopiques centimétriques), la diffraction est négligeable et l'optique géométrique s'applique rigoureusement.",
          "exercise": {
            "id": "phys_tle_cd_15_p1_s5_qcm",
            "type": "mcq",
            "prompt": "Pour un faisceau laser vert (lambda = 532 nm), parmi les obstacles suivants, lequel produira la diffraction angulaire la plus importante ?",
            "options": [
              "Une fente de largeur a = 1,0 mm",
              "Un cheveu de diamètre d = 80 µm",
              "Un fil de toile d'araignée de diamètre d = 5 µm",
              "Une fente de largeur a = 0,10 mm"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'écart angulaire de diffraction theta = lambda / a est d'autant plus grand que la dimension de l'obstacle a est petite. Avec d = 5 µm = 5.10⁻⁶ m, on a le plus petit obstacle, d'où l'étalement angulaire maximal : theta = 532.10⁻⁹ / 5.10⁻⁶ ≈ 0,106 rad ≈ 6°."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Principe de Babinet pour les ouvertures et obstacles complémentaires",
          "stepTheme": "Théorème de Babinet",
          "stepBadge": "Théorème optique",
          "paragraphText": "Le théorème de Babinet stipule que la figure de diffraction produite par un obstacle opaque (par exemple un cheveu ou un fil calibré de diamètre d) est rigoureusement identique en dimensions et en espacement à celle produite par une fente de même largeur a = d (à l'exception du point central géométrique). Cette propriété remarquable permet de mesurer le diamètre d'un cheveu ou d'une fibre textile avec une précision micrométrique sans microscope, simplement en mesurant la largeur de sa tache de diffraction centrale !",
          "exercise": {
            "id": "phys_tle_cd_15_p1_s6_qcm",
            "type": "mcq",
            "prompt": "Un cheveu tendu sur le trajet d'un laser produit une tache centrale de diffraction de largeur L = 3,2 cm sur un écran situé à D = 2,0 m (laser rouge lambda = 640 nm). Quelle est l'épaisseur d de ce cheveu ?",
            "options": [
              "40 µm",
              "80 µm",
              "160 µm",
              "400 µm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après la formule de la fente (théorème de Babinet d = a) : L = 2*lambda*D / d => d = 2*lambda*D / L = (2 * 640.10⁻⁹ m * 2,0 m) / (3,2.10⁻² m) = 2,56.10⁻⁶ / 3,2.10⁻² = 8,0.10⁻⁵ m = 80 µm."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Limite de résolution des instruments d'optique (critère de Rayleigh)",
          "stepTheme": "Résolution spatiale",
          "stepBadge": "Application optique",
          "paragraphText": "La diffraction par la pupille circulaire d'entrée d'un objectif de télescope, microscope ou appareil photo impose une limite physique absolue infranchissable à la netteté des images : deux points sources distincts ne peuvent être résolus et séparés que si le centre de la tache d'Airy de l'un tombe au-delà du premier anneau sombre de l'autre (critère de Rayleigh). L'angle limite de résolution est theta_lim = 1,22 * lambda / D_ouverture. Plus le diamètre D de l'objectif est grand, plus la limite angulaire est faible et plus l'image est détaillée.",
          "exercise": {
            "id": "phys_tle_cd_15_p1_s7_qcm",
            "type": "mcq",
            "prompt": "Pourquoi les astronomes construisent-ils des télescopes avec des miroirs primaires géants de 10 à 39 mètres de diamètre ?",
            "options": [
              "Uniquement pour résister au vent",
              "Pour collecter plus de lumière et réduire l'angle de diffraction (theta_lim = 1,22.lambda / D) afin d'obtenir des images d'une résolution spatiale extrême",
              "Pour modifier la longueur d'onde des étoiles observées",
              "Pour annuler la gravité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un diamètre D très grand diminue l'angle de diffraction theta_limite, ce qui permet de séparer des étoiles extrêmement proches et de révéler des détails microscopiques sur des galaxies distantes."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_15_p1_s1_qcm",
          "type": "mcq",
          "prompt": "On éclaire une fente verticale étroite avec un laser rouge. Dans quelle direction la figure de diffraction s'étale-t-elle principalement sur l'écran ?",
          "options": [
            "Verticalement, dans le même sens que la fente",
            "Horizontalement, dans la direction perpendiculaire à la fente",
            "En cercles concentriques",
            "La lumière ne s'étale pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'étalement par diffraction s'effectue toujours dans la direction où la dimension de l'obstacle est la plus petite. Pour une fente verticale étroite (largeur a petite selon l'axe horizontal, hauteur grande selon l'axe vertical), la diffraction a lieu horizontalement."
        },
        {
          "id": "phys_tle_cd_15_p1_s2_qcm",
          "type": "mcq",
          "prompt": "D'après le principe de Huygens-Fresnel, que devient le front d'onde plan d'une onde lumineuse lorsqu'il atteint les bords d'un petit orifice ?",
          "options": [
            "Il est totalement absorbé par les bords",
            "Chaque point de l'ouverture devient une source virtuelle d'ondelettes sphériques qui interfèrent entre elles",
            "Il se divise en deux rayons lumineux classiques",
            "Il change de fréquence"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'énoncé fondamental du principe de Huygens-Fresnel : chaque point de l'ouverture se comporte comme un émetteur secondaire d'ondes sphériques synchrones, dont la superposition crée la figure de diffraction observée."
        },
        {
          "id": "phys_tle_cd_15_p1_s3_qcm",
          "type": "mcq",
          "prompt": "On remplace une fente de diffraction de largeur a₁ = 0,20 mm par une fente plus étroite de largeur a₂ = 0,05 mm. Comment évolue la largeur de la tache centrale sur l'écran ?",
          "options": [
            "Elle est divisée par 4",
            "Elle reste inchangée",
            "Elle est multipliée par 4",
            "Elle est multipliée par 16"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La largeur de la tache centrale L est inversement proportionnelle à la largeur de la fente a (L = 2*lambda*D / a). En divisant a par 4 (0,20 / 0,05 = 4), la largeur L de la tache centrale est multipliée par 4."
        },
        {
          "id": "phys_tle_cd_15_p1_s4_qcm",
          "type": "mcq",
          "prompt": "Quelle figure de diffraction observe-t-on sur un écran placé derrière un diaphragme circulaire à trou d'aiguille éclairé par un laser ?",
          "options": [
            "Une croix lumineuse en forme de X",
            "Une tache centrale circulaire (disque d'Airy) entourée d'anneaux concentriques clairs et sombres",
            "Une ligne droite continue de points lumineux",
            "Un écran totalement noir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La symétrie axiale du trou circulaire produit une figure de diffraction à symétrie circulaire : la tache d'Airy centrale entourée d'anneaux concentriques d'intensités décroissantes."
        },
        {
          "id": "phys_tle_cd_15_p1_s5_qcm",
          "type": "mcq",
          "prompt": "Pour un faisceau laser vert (lambda = 532 nm), parmi les obstacles suivants, lequel produira la diffraction angulaire la plus importante ?",
          "options": [
            "Une fente de largeur a = 1,0 mm",
            "Un cheveu de diamètre d = 80 µm",
            "Un fil de toile d'araignée de diamètre d = 5 µm",
            "Une fente de largeur a = 0,10 mm"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'écart angulaire de diffraction theta = lambda / a est d'autant plus grand que la dimension de l'obstacle a est petite. Avec d = 5 µm = 5.10⁻⁶ m, on a le plus petit obstacle, d'où l'étalement angulaire maximal : theta = 532.10⁻⁹ / 5.10⁻⁶ ≈ 0,106 rad ≈ 6°."
        },
        {
          "id": "phys_tle_cd_15_p1_s6_qcm",
          "type": "mcq",
          "prompt": "Un cheveu tendu sur le trajet d'un laser produit une tache centrale de diffraction de largeur L = 3,2 cm sur un écran situé à D = 2,0 m (laser rouge lambda = 640 nm). Quelle est l'épaisseur d de ce cheveu ?",
          "options": [
            "40 µm",
            "80 µm",
            "160 µm",
            "400 µm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après la formule de la fente (théorème de Babinet d = a) : L = 2*lambda*D / d => d = 2*lambda*D / L = (2 * 640.10⁻⁹ m * 2,0 m) / (3,2.10⁻² m) = 2,56.10⁻⁶ / 3,2.10⁻² = 8,0.10⁻⁵ m = 80 µm."
        },
        {
          "id": "phys_tle_cd_15_p1_s7_qcm",
          "type": "mcq",
          "prompt": "Pourquoi les astronomes construisent-ils des télescopes avec des miroirs primaires géants de 10 à 39 mètres de diamètre ?",
          "options": [
            "Uniquement pour résister au vent",
            "Pour collecter plus de lumière et réduire l'angle de diffraction (theta_lim = 1,22.lambda / D) afin d'obtenir des images d'une résolution spatiale extrême",
            "Pour modifier la longueur d'onde des étoiles observées",
            "Pour annuler la gravité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un diamètre D très grand diminue l'angle de diffraction theta_limite, ce qui permet de séparer des étoiles extrêmement proches et de révéler des détails microscopiques sur des galaxies distantes."
        }
      ]
    },
    {
      "id": "pt2_diffraction_fente_ecart_angulaire_largeur",
      "order": 2,
      "title": "Modélisation quantitative de la diffraction par une fente",
      "summary": "Définition de l'écart angulaire theta = lambda/a, relation trigonométrique tan(theta) = L/(2D) approx theta, formule de la largeur de la tache centrale L = 2.lambda.D / a et exploitation graphique.",
      "conceptExplanation": "Soit une fente rectiligne de largeur a éclairée sous incidence normale par une radiation monochromatique de longueur d'onde lambda. L'écran d'observation est placé parallèlement à la fente à une distance D (avec D >> a). Le faisceau diffracté s'étale sur un angle total 2.theta, où theta est le demi-écart angulaire de diffraction (angle entre le centre de la tache centrale et la première extinction sombre). La théorie ondulatoire établit que : theta = lambda / a (avec theta en radians, lambda et a dans la même unité de longueur). Sur l'écran, le centre de la première zone sombre se trouve à une distance y_1 = L / 2 du centre de la tache centrale, où L représente la largeur totale de la tache centrale. Dans le triangle rectangle fente-centre-extinction : tan(theta) = (L / 2) / D = L / (2D). Comme les angles de diffraction sont très petits en pratique (theta < 0,1 rad), on applique l'approximation des petits angles : tan(theta) ≈ theta (en radians). On en déduit l'égalité fondamentale : theta = lambda / a = L / (2D), ce qui fournit la formule maîtresse de la largeur de la tache centrale : L = (2 * lambda * D) / a.",
      "keyRule": "Pour une fente de largeur a : theta = lambda / a (en rad) et L = (2.lambda.D) / a. La largeur de la tache centrale est le double de celle des taches secondaires.",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "\\theta = \\frac{\\lambda}{a} \\quad (\\theta \\text{ en radians, } \\lambda \\text{ et } a \\text{ en mètres})"
        },
        {
          "name": "Relation 2",
          "formula": "\\tan\\theta = \\frac{L}{2D} \\approx \\theta \\quad (\\text{si } \\theta \\ll 1\\text{ rad})"
        },
        {
          "name": "Relation 3",
          "formula": "L = \\frac{2 \\lambda D}{a}"
        },
        {
          "name": "Relation 4",
          "formula": "\\theta_{\\text{trou}} = 1{,}22 \\frac{\\lambda}{a} \\implies d_{\\text{Airy}} = 2{,}44 \\frac{\\lambda D}{a}"
        }
      ],
      "workedExample": {
        "title": "Calcul de la longueur d'onde d'un laser inconnu par diffraction",
        "statement": "On utilise une fente de largeur a = 0,10 mm placée à une distance D = 2,50 m d'un écran. Un laser de longueur d'onde lambda inconnue produit une tache centrale de diffraction de largeur mesurée L = 3,16 cm. 1. Calculer le demi-écart angulaire theta en radians. 2. Déterminer la longueur d'onde lambda de la lumière émise par ce laser en nanomètres (nm). 3. Identifier la couleur de ce laser.",
        "methodSteps": [
          "Étape 1 : Exprimer toutes les grandeurs en unités du SI (mètres) : a = 0,10 mm = 1,00.10⁻⁴ m ; D = 2,50 m ; L = 3,16 cm = 3,16.10⁻² m.",
          "Étape 2 : Calculer l'écart angulaire theta : theta = L / (2D) = 3,16.10⁻² / (2 * 2,50) = 3,16.10⁻² / 5,00 = 6,32.10⁻³ rad (angle très petit, approximation vérifiée).",
          "Étape 3 : Calculer la longueur d'onde lambda : D'après theta = lambda / a => lambda = theta * a = 6,32.10⁻³ rad * 1,00.10⁻⁴ m = 6,32.10⁻⁷ m = 632 nm.",
          "Étape 4 : Déduction spectrale : Une longueur d'onde de 632,8 nm est caractéristique du laser Hélium-Néon (He-Ne), émettant une lumière rouge éclatante."
        ],
        "conclusion": "Le laser émet à lambda = 632 nm dans le rouge, avec un demi-angle de diffraction de 6,32 mrad."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau des variations de la largeur de la tache centrale L = 2.lambda.D / a",
        "tableData": {
          "headers": [
            "Paramètre modifié",
            "Variation appliquée",
            "Effet direct sur l'écart theta",
            "Effet sur la largeur L de la tache centrale"
          ],
          "rows": [
            [
              "Largeur de fente a",
              "Doublée (2a)",
              "Divisé par 2 (theta/2)",
              "Divisée par 2 (L/2 : la figure se resserre)"
            ],
            [
              "Largeur de fente a",
              "Divisée par 2 (a/2)",
              "Doublé (2.theta)",
              "Doublée (2L : la figure s'étale)"
            ],
            [
              "Longueur d'onde lambda",
              "Augmentée (passage du bleu au rouge)",
              "Augmenté",
              "Augmentée (le rouge s'étale plus que le bleu)"
            ],
            [
              "Distance écran D",
              "Doublée (2D)",
              "Inchangé (propriété de la fente)",
              "Doublée (agrandissement géométrique proportionnel à D)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition rigoureuse du demi-écart angulaire theta",
          "stepTheme": "Écart angulaire",
          "stepBadge": "Angle en radians",
          "paragraphText": "Le demi-écart angulaire de diffraction (noté theta) est l'angle sous lequel on voit, depuis la fente, le segment joignant le centre de la tache centrale au milieu de la première extinction sombre. Dans le Système International, theta s'exprime obligatoirement en radians (rad). La théorie montre que pour une fente de largeur a éclairée sous onde plane de longueur d'onde lambda, la première extinction survient pour theta = lambda / a.",
          "exercise": {
            "id": "phys_tle_cd_15_p2_s1_qcm",
            "type": "mcq",
            "prompt": "Une fente de largeur a = 0,25 mm est éclairée par une lumière de longueur d'onde lambda = 500 nm. Quelle est la valeur de l'écart angulaire theta en radians et en degrés ?",
            "options": [
              "theta = 2,0.10⁻³ rad (environ 0,11°)",
              "theta = 2,0 rad (environ 114°)",
              "theta = 0,50 rad",
              "theta = 1,25.10⁻⁶ rad"
            ],
            "correctAnswerIndex": 0,
            "explanation": "theta = lambda / a = (500.10⁻⁹ m) / (0,25.10⁻³ m) = 2,0.10⁻³ rad. En degrés : theta(deg) = 2,0.10⁻³ * (180 / pi) ≈ 0,115°."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Relation trigonométrique et approximation des petits angles",
          "stepTheme": "Géométrie de diffraction",
          "stepBadge": "Approximation tan(theta) = theta",
          "paragraphText": "Considérons le triangle rectangle formé par la fente, le centre de l'écran et la première extinction sombre. La distance fente-écran est D, et la distance du centre à la première extinction est y_1 = L / 2. Par trigonométrie : tan(theta) = y_1 / D = L / (2D). Comme l'écart angulaire theta est couramment de l'ordre de 10⁻³ rad (quelques milliradians), on a rigoureusement tan(theta) ≈ theta (avec une erreur relative inférieure à 0,01 %). Par conséquent, theta = L / (2D), ce qui relie directement l'angle microscopique à la dimension macroscopique L mesurable à la règle.",
          "exercise": {
            "id": "phys_tle_cd_15_p2_s2_qcm",
            "type": "mcq",
            "prompt": "Pour un angle theta = 0,050 rad, quelle est l'erreur commise en assimilant tan(theta) à theta ?",
            "options": [
              "Moins de 0,1 % (tan(0,050) = 0,05004)",
              "Environ 5 %",
              "Environ 25 %",
              "Plus de 50 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "tan(0,050 rad) = 0,0500417 rad. L'écart relatif est (0,0500417 - 0,050) / 0,050 ≈ 0,08 %, soit largement inférieur à 0,1 %. L'approximation tan(theta) ≈ theta est donc remarquablement précise."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Formule maîtresse de la largeur de la tache centrale L",
          "stepTheme": "Largeur de tache",
          "stepBadge": "Formule d'examen",
          "paragraphText": "En égalant les deux expressions de theta : lambda / a = L / (2D), on obtient la formule fondamentale : L = (2 * lambda * D) / a. La largeur totale de la tache centrale L est donc : 1. Proportionnelle à la longueur d'onde lambda (la lumière rouge s'étale plus que la bleue). 2. Proportionnelle à la distance fente-écran D (plus l'écran est éloigné, plus la figure est grande). 3. Inversement proportionnelle à la largeur de la fente a. Remarque : les taches secondaires latérales ont chacune une largeur égale à L / 2 = lambda.D / a (la tache centrale est deux fois plus large qu'une tache secondaire).",
          "exercise": {
            "id": "phys_tle_cd_15_p2_s3_qcm",
            "type": "mcq",
            "prompt": "Une fente produit une tache centrale de 2,0 cm pour un laser vert (500 nm). Si l'on remplace le laser vert par un laser rouge (750 nm) sans rien modifier d'autre au montage, que devient la largeur de la tache centrale ?",
            "options": [
              "1,33 cm",
              "2,0 cm",
              "3,0 cm",
              "4,5 cm"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L est proportionnelle à lambda : L₂ / L₁ = lambda₂ / lambda₁ = 750 / 500 = 1,5. La nouvelle largeur est L₂ = 1,5 * L₁ = 1,5 * 2,0 cm = 3,0 cm."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Exploitation graphique des droites L = f(1/a) ou theta = f(1/a)",
          "stepTheme": "Régression linéaire",
          "stepBadge": "Méthode expérimentale",
          "paragraphText": "Dans les protocoles de TP et sujets de Baccalauréat, on fait varier la largeur a de la fente à l'aide d'un micromètre et on mesure L. En traçant le graphe L en fonction de (1/a), on obtient une droite passant par l'origine d'équation L = k * (1/a). Le coefficient directeur de cette droite vaut k = 2 * lambda * D. En mesurant la pente expérimentale k et connaissant D, on détermine avec une grande précision la longueur d'onde du laser : lambda = k / (2D).",
          "exercise": {
            "id": "phys_tle_cd_15_p2_s4_qcm",
            "type": "mcq",
            "prompt": "Sur le graphe L = f(1/a), la pente de la droite vaut k = 2,52.10⁻⁶ m² pour un écran situé à D = 2,0 m. Quelle est la longueur d'onde du faisceau lumineux utilisé ?",
            "options": [
              "450 nm",
              "530 nm",
              "630 nm",
              "700 nm"
            ],
            "correctAnswerIndex": 2,
            "explanation": "k = 2 * lambda * D => lambda = k / (2D) = 2,52.10⁻⁶ m² / (2 * 2,0 m) = 2,52.10⁻⁶ / 4,0 = 6,30.10⁻⁷ m = 630 nm."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège entre largeur de la fente a et distance des fentes dans les interférences",
          "stepTheme": "Rigueur des notations",
          "stepBadge": "Attention piège",
          "paragraphText": "Il est capital de ne jamais confondre : 'a' dans la diffraction (qui représente la largeur d'une fente unique ou le diamètre d'un trou/fil) avec 'a' dans les interférences d'Young (qui représente l'écartement entre les centres de deux fentes distinctes). Dans un dispositif réel à deux fentes d'Young, chaque fente individuelle produit de la diffraction (enveloppe globale de largeur L = 2.lambda.D/a), à l'intérieur de laquelle se dessinent les franges d'interférences serrées d'interfrange i = lambda.D/d !",
          "exercise": {
            "id": "phys_tle_cd_15_p2_s5_qcm",
            "type": "mcq",
            "prompt": "Dans une expérience d'optique, on observe une large tache lumineuse contenant 11 franges d'interférences fines et serrées. Quelle interprétation physique relie ces deux motifs ?",
            "options": [
              "La large tache est due aux interférences et les franges fines à la diffraction",
              "La large enveloppe est la figure de diffraction due à la largeur finie de chaque fente, et les franges fines résultent de l'interférence entre les deux fentes",
              "C'est un artefact de l'appareil de mesure",
              "La source est composée de 11 couleurs différentes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La diffraction par chaque fente individuelle modèle le profil d'intensité global (l'enveloppe de diffraction), tandis que l'interférence à deux ondes module cette intensité par de fines franges régulières."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Diffraction de la lumière blanche et irisation",
          "stepTheme": "Lumière polychromatique",
          "stepBadge": "Irisation",
          "paragraphText": "Lorsqu'on éclaire une fente fine avec de la lumière blanche polychromatique, chaque composante monochromatique diffracte selon son propre angle theta(lambda) = lambda / a. Comme le rouge a une longueur d'onde plus grande que le violet (lambda_rouge ~ 750 nm > lambda_violet ~ 400 nm), le rouge est plus étalé que le violet. Au centre, toutes les couleurs se superposent en phase : la tache centrale est bordée de blanc au milieu, frangée de rouge à l'extérieur et de violet-bleuâtre vers l'intérieur. C'est l'origine des reflets irisés colorés observés sur la surface d'un disque CD ou d'une bulle de savon.",
          "exercise": {
            "id": "phys_tle_cd_15_p2_s6_qcm",
            "type": "mcq",
            "prompt": "Si une fente étroite est éclairée en lumière blanche, quelle couleur apparaît sur le bord extérieur le plus éloigné de la tache centrale de diffraction ?",
            "options": [
              "Le bleu-violet",
              "Le vert",
              "Le rouge",
              "Le noir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Puisque theta = lambda / a et que lambda_rouge > lambda_bleu, la lumière rouge est diffractée sous un angle plus grand que toutes les autres couleurs du spectre visible : elle borde donc la partie extérieure de la tache."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Vérification des incertitudes de mesure en TP",
          "stepTheme": "Métrologie",
          "stepBadge": "Incertitude expérimentale",
          "paragraphText": "En travaux pratiques, la mesure de la largeur L est entachée d'une incertitude ΔL due au flou sur la position de l'extinction sombre. Pour minimiser l'incertitude relative ΔL / L, il est hautement recommandé d'augmenter la distance D fente-écran (D >= 2 m) afin d'obtenir une tache centrale L bien étalée (L >= 2 cm), rendant la mesure au double-décimètre très précise.",
          "exercise": {
            "id": "phys_tle_cd_15_p2_s7_qcm",
            "type": "mcq",
            "prompt": "On mesure L = 25,0 mm ± 0,5 mm sur un écran à D = 2,00 m ± 0,01 m pour une fente a = 0,100 mm ± 0,002 mm. Quelle est l'incertitude relative sur la mesure de L ?",
            "options": [
              "0,5 %",
              "2,0 %",
              "5,0 %",
              "10 %"
            ],
            "correctAnswerIndex": 1,
            "explanation": "ΔL / L = 0,5 mm / 25,0 mm = 1 / 50 = 0,020 = 2,0 %."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_15_p2_s1_qcm",
          "type": "mcq",
          "prompt": "Une fente de largeur a = 0,25 mm est éclairée par une lumière de longueur d'onde lambda = 500 nm. Quelle est la valeur de l'écart angulaire theta en radians et en degrés ?",
          "options": [
            "theta = 2,0.10⁻³ rad (environ 0,11°)",
            "theta = 2,0 rad (environ 114°)",
            "theta = 0,50 rad",
            "theta = 1,25.10⁻⁶ rad"
          ],
          "correctAnswerIndex": 0,
          "explanation": "theta = lambda / a = (500.10⁻⁹ m) / (0,25.10⁻³ m) = 2,0.10⁻³ rad. En degrés : theta(deg) = 2,0.10⁻³ * (180 / pi) ≈ 0,115°."
        },
        {
          "id": "phys_tle_cd_15_p2_s2_qcm",
          "type": "mcq",
          "prompt": "Pour un angle theta = 0,050 rad, quelle est l'erreur commise en assimilant tan(theta) à theta ?",
          "options": [
            "Moins de 0,1 % (tan(0,050) = 0,05004)",
            "Environ 5 %",
            "Environ 25 %",
            "Plus de 50 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "tan(0,050 rad) = 0,0500417 rad. L'écart relatif est (0,0500417 - 0,050) / 0,050 ≈ 0,08 %, soit largement inférieur à 0,1 %. L'approximation tan(theta) ≈ theta est donc remarquablement précise."
        },
        {
          "id": "phys_tle_cd_15_p2_s3_qcm",
          "type": "mcq",
          "prompt": "Une fente produit une tache centrale de 2,0 cm pour un laser vert (500 nm). Si l'on remplace le laser vert par un laser rouge (750 nm) sans rien modifier d'autre au montage, que devient la largeur de la tache centrale ?",
          "options": [
            "1,33 cm",
            "2,0 cm",
            "3,0 cm",
            "4,5 cm"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L est proportionnelle à lambda : L₂ / L₁ = lambda₂ / lambda₁ = 750 / 500 = 1,5. La nouvelle largeur est L₂ = 1,5 * L₁ = 1,5 * 2,0 cm = 3,0 cm."
        },
        {
          "id": "phys_tle_cd_15_p2_s4_qcm",
          "type": "mcq",
          "prompt": "Sur le graphe L = f(1/a), la pente de la droite vaut k = 2,52.10⁻⁶ m² pour un écran situé à D = 2,0 m. Quelle est la longueur d'onde du faisceau lumineux utilisé ?",
          "options": [
            "450 nm",
            "530 nm",
            "630 nm",
            "700 nm"
          ],
          "correctAnswerIndex": 2,
          "explanation": "k = 2 * lambda * D => lambda = k / (2D) = 2,52.10⁻⁶ m² / (2 * 2,0 m) = 2,52.10⁻⁶ / 4,0 = 6,30.10⁻⁷ m = 630 nm."
        },
        {
          "id": "phys_tle_cd_15_p2_s5_qcm",
          "type": "mcq",
          "prompt": "Dans une expérience d'optique, on observe une large tache lumineuse contenant 11 franges d'interférences fines et serrées. Quelle interprétation physique relie ces deux motifs ?",
          "options": [
            "La large tache est due aux interférences et les franges fines à la diffraction",
            "La large enveloppe est la figure de diffraction due à la largeur finie de chaque fente, et les franges fines résultent de l'interférence entre les deux fentes",
            "C'est un artefact de l'appareil de mesure",
            "La source est composée de 11 couleurs différentes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La diffraction par chaque fente individuelle modèle le profil d'intensité global (l'enveloppe de diffraction), tandis que l'interférence à deux ondes module cette intensité par de fines franges régulières."
        },
        {
          "id": "phys_tle_cd_15_p2_s6_qcm",
          "type": "mcq",
          "prompt": "Si une fente étroite est éclairée en lumière blanche, quelle couleur apparaît sur le bord extérieur le plus éloigné de la tache centrale de diffraction ?",
          "options": [
            "Le bleu-violet",
            "Le vert",
            "Le rouge",
            "Le noir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Puisque theta = lambda / a et que lambda_rouge > lambda_bleu, la lumière rouge est diffractée sous un angle plus grand que toutes les autres couleurs du spectre visible : elle borde donc la partie extérieure de la tache."
        },
        {
          "id": "phys_tle_cd_15_p2_s7_qcm",
          "type": "mcq",
          "prompt": "On mesure L = 25,0 mm ± 0,5 mm sur un écran à D = 2,00 m ± 0,01 m pour une fente a = 0,100 mm ± 0,002 mm. Quelle est l'incertitude relative sur la mesure de L ?",
          "options": [
            "0,5 %",
            "2,0 %",
            "5,0 %",
            "10 %"
          ],
          "correctAnswerIndex": 1,
          "explanation": "ΔL / L = 0,5 mm / 25,0 mm = 1 / 50 = 0,020 = 2,0 %."
        }
      ]
    },
    {
      "id": "pt3_interferences_fentes_young",
      "order": 3,
      "title": "Interférences lumineuses et dispositif des fentes d'Young",
      "summary": "Conditions d'obtention d'interférences stables (sources synchrones et cohérentes), dispositif expérimental des fentes d'Young, principe de division du front d'onde et observation des franges rectilignes.",
      "conceptExplanation": "On appelle interférences lumineuses le phénomène résultant de la superposition dans l'espace de deux (ou plusieurs) ondes lumineuses issues d'une même source. Dans la zone de recouvrement des faisceaux (champ d'interférences), l'intensité lumineuse résultante ne correspond pas à la simple somme des intensités : elle présente une modulation périodique de zones lumineuses (renforcement d'intensité, interférences constructives) et de zones d'obscurité totale (annulation d'intensité, interférences destructives). Pour obtenir des interférences observables et stables dans le temps, deux conditions physiques strictes sont indispensables : 1. Les sources doivent être synchrones : elles doivent émettre exactement à la même fréquence (même longueur d'onde lambda). 2. Les sources doivent être mutuellement cohérentes : leur déphasage initial Delta phi_0 doit rester rigoureusement constant au cours du temps. Comme deux ampoules ou deux lasers distincts subissent des trains d'ondes indépendants désynchronisés toutes les nanosecondes, on réalise la cohérence en divisant le front d'onde d'une SOURCE UNIQUE au moyen des fentes d'Young (Thomas Young, 1801).",
      "keyRule": "Pour observer des interférences lumineuses stables, les deux sources secondaires doivent impérativement être synchrones (même fréquence) et cohérentes (déphasage constant), ce qui s'obtient en éclairant deux fentes fines par une source unique.",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "I(P) = I_1 + I_2 + 2 \\sqrt{I_1 I_2} \\cos(\\Delta\\varphi)"
        },
        {
          "name": "Relation 2",
          "formula": "\\Delta\\varphi = \\frac{2\\pi}{\\lambda} \\delta + \\Delta\\varphi_0 \\quad (\\text{déphasage})"
        }
      ],
      "workedExample": {
        "title": "Calcul de l'intensité résultante au point central d'un écran d'Young",
        "statement": "Deux fentes d'Young identiques S₁ et S₂ émettent chacune une onde lumineuse produisant une intensité I₀ sur un écran. On suppose les deux ondes rigoureusement en phase à la sortie des fentes. 1. Quelle est l'intensité résultante au centre O de l'écran où la différence de marche est nulle ? 2. Quelle est l'intensité en un point où le déphasage vaut Delta phi = pi rad ?",
        "methodSteps": [
          "Étape 1 : Poser la formule d'interférence à deux ondes de même intensité I₁ = I₂ = I₀ : I(P) = 2.I₀ * [1 + cos(Δphi)] = 4.I₀ * cos²(Δphi / 2).",
          "Étape 2 : Au point central O, les distances parcourues sont égales (S₁O = S₂O), donc la différence de marche est nulle (delta = 0), d'où un déphasage nul : Δphi = 0.",
          "Étape 3 : Calculer l'intensité au centre : I(O) = 4.I₀ * cos²(0) = 4.I₀. L'intensité maximale est 4 fois l'intensité d'une fente seule (interférence parfaitement constructive).",
          "Étape 4 : En un point où Δphi = pi rad (opposition de phase) : I = 4.I₀ * cos²(pi / 2) = 0. Il y a obscurité absolue (interférence parfaitement destructive)."
        ],
        "conclusion": "L'intensité oscille entre un maximum de 4.I₀ (frange brillante) et un minimum de 0 (frange sombre), conservant l'énergie moyenne totale sur l'écran."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des conditions et vocabulaire des interférences lumineuses",
        "tableData": {
          "headers": [
            "Concept clé",
            "Définition physique",
            "Condition de réalisation",
            "Effet si non respecté"
          ],
          "rows": [
            [
              "Sources synchrones",
              "Même pulsation omega, même fréquence nu, même longueur d'onde lambda",
              "Utiliser un faisceau monochromatique issu d'un laser ou filtré",
              "Battements optiques ultra-rapides invisibles à l'œil"
            ],
            [
              "Sources cohérentes",
              "Différence de phase initiale Delta phi_0 constante dans le temps",
              "Éclairer les deux fentes à partir d'une fente source primaire unique",
              "Brouillage instantané : éclairement uniforme sans franges"
            ],
            [
              "Champ d'interférence",
              "Zone de l'espace où les deux faisceaux diffractés se superposent",
              "Angle de diffraction suffisant pour que les faisceaux se recouvrent",
              "Deux taches lumineuses séparées sans interférence"
            ],
            [
              "Franges d'interférence",
              "Lignes alternativement claires et sombres rectilignes et équidistantes",
              "Fentes rectilignes fines et parallèles",
              "Brouillage si les fentes ne sont pas parallèles"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Principe du dispositif historique des fentes d'Young (1801)",
          "stepTheme": "Dispositif d'Young",
          "stepBadge": "Expérience historique",
          "paragraphText": "En 1801, le médecin et physicien anglais Thomas Young réalise l'expérience fondatrice prouvant la nature ondulatoire de la lumière. Une source monochromatique ponctuelle S éclaire deux fentes très fines et parallèles S₁ et S₂, séparées d'une distance 'a' (de l'ordre du dixième de millimètre). Par diffraction, chaque fente se comporte comme une source lumineuse secondaire. Les deux faisceaux diffractés s'élargissent et se recouvrent sur un écran placé à distance D (D >> a). Dans cette zone de superposition, on observe un réseau régulier de franges d'interférences rectilignes alternativement sombres et brillantes.",
          "exercise": {
            "id": "phys_tle_cd_15_p3_s1_qcm",
            "type": "mcq",
            "prompt": "Pourquoi est-il rigoureusement impossible d'observer des interférences stables en utilisant deux ampoules à incandescence distinctes placées côte à côte ?",
            "options": [
              "Parce que la lumière des ampoules est trop puissante",
              "Parce que les trains d'ondes émis par deux sources indépendantes ont des phases qui fluctuent aléatoirement des millions de fois par seconde (sources incohérentes)",
              "Parce que le filament n'émet pas de photons",
              "Parce que l'air bloque les interférences"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux sources lumineuses distinctes sont mutuellement incohérentes : chaque atome de chaque filament émet des trains d'ondes indépendants d'une durée de vie de 10⁻¹⁰ s avec une phase aléatoire. L'œil ou les capteurs n'enregistrent qu'une moyenne temporelle uniforme sans aucun contraste de franges."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Cohérence spatiale et temporelle des sources secondaires",
          "stepTheme": "Cohérence optique",
          "stepBadge": "Propriété de cohérence",
          "paragraphText": "En utilisant une fente source primaire unique S pour alimenter simultanément S₁ et S₂, tout saut de phase ou train d'onde issu de S atteint S₁ et S₂ au même instant (ou avec un retard fixe parfaitement constant). Les deux sources secondaires S₁ et S₂ sont alors dites cohérentes : leurs déphasages restent verrouillés l'un à l'autre au cours du temps, ce qui permet l'observation d'un système de franges stationnaires parfaitement nettes.",
          "exercise": {
            "id": "phys_tle_cd_15_p3_s2_qcm",
            "type": "mcq",
            "prompt": "Comment qualifie-t-on la méthode utilisée dans les fentes d'Young pour produire deux sources cohérentes à partir d'une seule onde incidente ?",
            "options": [
              "Division d'amplitude",
              "Division du front d'onde",
              "Effet photoélectrique",
              "Polarisation par réflexion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les fentes d'Young découpent deux portions distinctes du même front d'onde spatial incident : c'est un système interférentiel par 'division du front d'onde' (par opposition aux interféromètres de Michelson qui procèdent par division d'amplitude avec une lame semi-réfléchissante)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Aspect de la figure d'interférences au centre de l'écran",
          "stepTheme": "Frange centrale",
          "stepBadge": "Frange centrale brillante",
          "paragraphText": "Au centre géométrique de l'écran (point O situé sur le plan médiateur de [S₁S₂]), la distance S₁O est rigoureusement égale à S₂O. La différence de chemin parcouru est nulle, donc les deux ondes arrivent en phase parfaite et s'additionnent constructivement. La frange centrale (d'ordre k = 0) est donc TOUJOURS une frange brillante d'intensité maximale.",
          "exercise": {
            "id": "phys_tle_cd_15_p3_s3_qcm",
            "type": "mcq",
            "prompt": "Que se trouve-t-il exactement au centre géométrique O d'un écran d'Young classique symétrique ?",
            "options": [
              "Une frange sombre d'intensité nulle",
              "Le centre de la frange brillante d'ordre zéro (k = 0)",
              "Un trou noir d'absorption",
              "Une frange de couleur rouge obligatoirement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sur le plan médiateur des deux fentes, la différence de marche est nulle (delta = 0) : les deux ondes vibrent en phase, formant le centre de la frange brillante d'ordre zéro."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Interférences en lumière polychromatique (lumière blanche)",
          "stepTheme": "Franges irisées",
          "stepBadge": "Lumière blanche",
          "paragraphText": "Si l'on éclaire les fentes d'Young en lumière blanche : 1. Au centre O (delta = 0), la différence de marche est nulle pour TOUTES les longueurs d'onde : toutes les couleurs interfèrent constructivement, donnant une frange centrale d'un BLANC éclatant. 2. De part et d'autre, l'interfrange i = lambda.D/a dépend de la longueur d'onde : les franges violettes (plus serrées) et rouges (plus écartées) se décalent, créant de magnifiques bandes irisées (blanc supérieur, franges irisées bordées de bleu à l'intérieur et de rouge à l'extérieur). 3. À grande distance du centre, le chevauchement d'une multitude d'ordres différents reconstitue un 'blanc d'ordre supérieur'.",
          "exercise": {
            "id": "phys_tle_cd_15_p3_s4_qcm",
            "type": "mcq",
            "prompt": "Lorsqu'on réalise l'expérience des fentes d'Young en lumière blanche, quelle est la couleur de la frange centrale d'ordre k = 0 ?",
            "options": [
              "Rouge",
              "Noire",
              "Blanche",
              "Bleue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Au centre O, delta = 0 pour toutes les longueurs d'onde du spectre visible : toutes les couleurs ont simultanément leur maximum d'intensité, ce qui recompose une frange d'un blanc pur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège sur l'alignement des fentes et de la source primaire",
          "stepTheme": "Conditions expérimentales",
          "stepBadge": "Attention piège",
          "paragraphText": "Si la fente source primaire S n'est pas rigoureusement équidistante des deux fentes secondaires S₁ et S₂ (S déplacée transversalement d'une distance s), la différence de marche initiale n'est plus nulle. Toute la figure d'interférences sur l'écran subit une translation latérale sans être déformée. Pour maintenir la frange centrale au centre de l'écran, la source S doit se trouver sur le plan médiateur de [S₁S₂].",
          "exercise": {
            "id": "phys_tle_cd_15_p3_s5_qcm",
            "type": "mcq",
            "prompt": "Si l'on déplace la source primaire S vers le haut parallèlement au plan des fentes, dans quel sens se déplace l'ensemble des franges sur l'écran d'observation ?",
            "options": [
              "Vers le haut également",
              "Vers le bas",
              "Les franges disparaissent immédiatement",
              "Elles ne bougent pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Déplacer la source vers le haut allonge le trajet SS₁ et raccourcit SS₂. Pour compenser ce décalage et rétablir delta = 0, le point d'observation sur l'écran doit se déplacer vers le bas : les franges se déplacent en sens inverse de la source."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Conservation de l'énergie dans les interférences",
          "stepTheme": "Bilan énergétique",
          "stepBadge": "Loi de conservation",
          "paragraphText": "Les interférences lumineuses ne créent ni ne détruisent d'énergie lumineuse : elles ne font que REDISTRIBUER spatialement l'énergie. L'énergie qui a 'disparu' des franges sombres (où l'intensité est nulle) se retrouve intégralement concentrée dans les franges brillantes (où l'intensité vaut 4.I₀ au lieu de 2.I₀). L'intensité moyenne calculée sur une période spatiale est rigoureusement égale à 2.I₀, c'est-à-dire la somme des intensités fournies par les deux fentes séparées.",
          "exercise": {
            "id": "phys_tle_cd_15_p3_s6_qcm",
            "type": "mcq",
            "prompt": "Que devient l'énergie lumineuse qui semble 'manquer' dans les franges sombres d'interférences ?",
            "options": [
              "Elle est convertie en chaleur dans l'écran",
              "Elle est redistribuée par les interférences constructives dans les franges brillantes voisines",
              "Elle est détruite par annihilation des photons",
              "Elle repart vers la source laser"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'énergie est strictement conservée : les zones sombres résultent d'interférences destructives locales qui transfèrent la puissance lumineuse vers les zones brillantes, portant l'intensité maximale à 4.I₀ pour une moyenne de 2.I₀."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Expérience d'interférences photon par photon",
          "stepTheme": "Optique quantique",
          "stepBadge": "Interférence quantique",
          "paragraphText": "Si l'on atténue le faisceau laser au point qu'un seul photon à la fois traverse le dispositif des fentes d'Young, chaque photon individuel heurte l'écran en un point précis sous forme d'un impact localisé (comportement corpusculaire). Cependant, au fur et à mesure que les impacts de milliers de photons individuels s'accumulent au cours du temps, la distribution statistique des impacts dessine parfaitement les franges d'interférences ondulatoires ! Chaque photon individuel interfère 'avec lui-même' à travers les deux fentes.",
          "exercise": {
            "id": "phys_tle_cd_15_p3_s7_qcm",
            "type": "mcq",
            "prompt": "Dans une expérience de fentes d'Young réalisée en envoyant les photons un par un à intervalles de temps espacés, qu'observe-t-on sur la plaque détectrice après l'enregistrement de 100 000 photons ?",
            "options": [
              "Une tache floue totalement aléatoire",
              "Deux bandes d'impacts situées exactement derrière les fentes",
              "Le réseau complet de franges d'interférences ondulatoires",
              "Aucun impact n'est détecté"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Cette expérience spectaculaire d'optique quantique démontre la nature probabiliste de la fonction d'onde : chaque photon individuel interfère et la probabilité d'impact sur l'écran suit rigoureusement la figure d'interférences ondulatoire continue."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_15_p3_s1_qcm",
          "type": "mcq",
          "prompt": "Pourquoi est-il rigoureusement impossible d'observer des interférences stables en utilisant deux ampoules à incandescence distinctes placées côte à côte ?",
          "options": [
            "Parce que la lumière des ampoules est trop puissante",
            "Parce que les trains d'ondes émis par deux sources indépendantes ont des phases qui fluctuent aléatoirement des millions de fois par seconde (sources incohérentes)",
            "Parce que le filament n'émet pas de photons",
            "Parce que l'air bloque les interférences"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux sources lumineuses distinctes sont mutuellement incohérentes : chaque atome de chaque filament émet des trains d'ondes indépendants d'une durée de vie de 10⁻¹⁰ s avec une phase aléatoire. L'œil ou les capteurs n'enregistrent qu'une moyenne temporelle uniforme sans aucun contraste de franges."
        },
        {
          "id": "phys_tle_cd_15_p3_s2_qcm",
          "type": "mcq",
          "prompt": "Comment qualifie-t-on la méthode utilisée dans les fentes d'Young pour produire deux sources cohérentes à partir d'une seule onde incidente ?",
          "options": [
            "Division d'amplitude",
            "Division du front d'onde",
            "Effet photoélectrique",
            "Polarisation par réflexion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les fentes d'Young découpent deux portions distinctes du même front d'onde spatial incident : c'est un système interférentiel par 'division du front d'onde' (par opposition aux interféromètres de Michelson qui procèdent par division d'amplitude avec une lame semi-réfléchissante)."
        },
        {
          "id": "phys_tle_cd_15_p3_s3_qcm",
          "type": "mcq",
          "prompt": "Que se trouve-t-il exactement au centre géométrique O d'un écran d'Young classique symétrique ?",
          "options": [
            "Une frange sombre d'intensité nulle",
            "Le centre de la frange brillante d'ordre zéro (k = 0)",
            "Un trou noir d'absorption",
            "Une frange de couleur rouge obligatoirement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sur le plan médiateur des deux fentes, la différence de marche est nulle (delta = 0) : les deux ondes vibrent en phase, formant le centre de la frange brillante d'ordre zéro."
        },
        {
          "id": "phys_tle_cd_15_p3_s4_qcm",
          "type": "mcq",
          "prompt": "Lorsqu'on réalise l'expérience des fentes d'Young en lumière blanche, quelle est la couleur de la frange centrale d'ordre k = 0 ?",
          "options": [
            "Rouge",
            "Noire",
            "Blanche",
            "Bleue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Au centre O, delta = 0 pour toutes les longueurs d'onde du spectre visible : toutes les couleurs ont simultanément leur maximum d'intensité, ce qui recompose une frange d'un blanc pur."
        },
        {
          "id": "phys_tle_cd_15_p3_s5_qcm",
          "type": "mcq",
          "prompt": "Si l'on déplace la source primaire S vers le haut parallèlement au plan des fentes, dans quel sens se déplace l'ensemble des franges sur l'écran d'observation ?",
          "options": [
            "Vers le haut également",
            "Vers le bas",
            "Les franges disparaissent immédiatement",
            "Elles ne bougent pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Déplacer la source vers le haut allonge le trajet SS₁ et raccourcit SS₂. Pour compenser ce décalage et rétablir delta = 0, le point d'observation sur l'écran doit se déplacer vers le bas : les franges se déplacent en sens inverse de la source."
        },
        {
          "id": "phys_tle_cd_15_p3_s6_qcm",
          "type": "mcq",
          "prompt": "Que devient l'énergie lumineuse qui semble 'manquer' dans les franges sombres d'interférences ?",
          "options": [
            "Elle est convertie en chaleur dans l'écran",
            "Elle est redistribuée par les interférences constructives dans les franges brillantes voisines",
            "Elle est détruite par annihilation des photons",
            "Elle repart vers la source laser"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'énergie est strictement conservée : les zones sombres résultent d'interférences destructives locales qui transfèrent la puissance lumineuse vers les zones brillantes, portant l'intensité maximale à 4.I₀ pour une moyenne de 2.I₀."
        },
        {
          "id": "phys_tle_cd_15_p3_s7_qcm",
          "type": "mcq",
          "prompt": "Dans une expérience de fentes d'Young réalisée en envoyant les photons un par un à intervalles de temps espacés, qu'observe-t-on sur la plaque détectrice après l'enregistrement de 100 000 photons ?",
          "options": [
            "Une tache floue totalement aléatoire",
            "Deux bandes d'impacts situées exactement derrière les fentes",
            "Le réseau complet de franges d'interférences ondulatoires",
            "Aucun impact n'est détecté"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Cette expérience spectaculaire d'optique quantique démontre la nature probabiliste de la fonction d'onde : chaque photon individuel interfère et la probabilité d'impact sur l'écran suit rigoureusement la figure d'interférences ondulatoire continue."
        }
      ]
    },
    {
      "id": "pt4_difference_marche_franges",
      "order": 4,
      "title": "Différence de marche géométrique et position des franges",
      "summary": "Établissement trigonométrique de la différence de marche delta = a.y/D, conditions mathématiques des franges brillantes et sombres, et équation de position y(k).",
      "conceptExplanation": "Considérons un point P quelconque d'abscisse y sur l'écran d'observation (orienté perpendiculairement aux franges avec pour origine le centre O). La distance parcourue par l'onde issue de S₁ est d₁ = S₁P et celle issue de S₂ est d₂ = S₂P. La différence de marche géométrique delta est la différence entre ces deux trajets optiques : delta = d₂ - d₁ = S₂P - S₁P. Comme la distance D entre le plan des fentes et l'écran est gigantesque par rapport à l'écartement des fentes 'a' et à la position y (D >> a et D >> y), les rayons S₁P et S₂P sont quasi parallèles et forment un angle theta petit avec l'axe optique. En projetant orthogonalement S₁ sur le rayon S₂P au point H, on a delta ≈ S₂H = a * sin(theta) ≈ a * tan(theta) = a * (y / D). 1. Franges brillantes (renforcement maximal) : les deux ondes arrivent en phase si la différence de marche est un multiple entier de la longueur d'onde : delta = k * lambda (avec k in Z, ordre d'interférence). La position y_b des franges brillantes est donc : y_b = k * (lambda * D / a). 2. Franges sombres (extinction totale) : les deux ondes arrivent en opposition de phase si la différence de marche est un multiple demi-entier de la longueur d'onde : delta = (2k + 1) * (lambda / 2). La position y_s des franges sombres est : y_s = (k + 1/2) * (lambda * D / a) = (2k + 1) * (lambda * D / (2a)).",
      "keyRule": "Différence de marche : delta = a.y / D. Franges brillantes pour delta = k.lambda => y = k.(lambda.D / a). Franges sombres pour delta = (2k+1).(lambda/2) => y = (2k+1).(lambda.D / (2a)).",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "\\delta = S_2P - S_1P \\approx \\frac{a y}{D}"
        },
        {
          "name": "Relation 2",
          "formula": "\\text{Franges brillantes : } \\delta = k \\lambda \\iff y_k = k \\frac{\\lambda D}{a} \\quad (k \\in \\mathbb{Z})"
        },
        {
          "name": "Relation 3",
          "formula": "\\text{Franges sombres : } \\delta = \\left(k + \\frac{1}{2}\\right) \\lambda \\iff y'_k = \\left(k + \\frac{1}{2}\\right) \\frac{\\lambda D}{a} \\quad (k \\in \\mathbb{Z})"
        },
        {
          "name": "Relation 4",
          "formula": "k = \\frac{\\delta}{\\lambda} \\quad (\\text{ordre d'interférence au point } P)"
        }
      ],
      "workedExample": {
        "title": "Détermination de la nature et de l'ordre d'interférence en un point de l'écran",
        "statement": "Dans un dispositif d'Young, la distance entre les fentes est a = 0,20 mm, la distance à l'écran est D = 1,20 m, et la lumière monochromatique a pour longueur d'onde lambda = 600 nm. On considère un point P sur l'écran situé à la distance y = 7,20 mm du centre O. 1. Calculer la différence de marche delta au point P en nanomètres. 2. Déterminer l'ordre d'interférence k au point P. 3. Le point P se trouve-t-il sur une frange brillante ou sombre ? Préciser son numéro.",
        "methodSteps": [
          "Étape 1 : Convertir les données dans le SI : a = 0,20.10⁻³ m ; D = 1,20 m ; y = 7,20.10⁻³ m ; lambda = 600.10⁻⁹ m.",
          "Étape 2 : Calculer la différence de marche : delta = (a * y) / D = (0,20.10⁻³ * 7,20.10⁻³) / 1,20 = 1,44.10⁻⁶ / 1,20 = 1,20.10⁻⁶ m = 1 200 nm.",
          "Étape 3 : Calculer l'ordre d'interférence : k = delta / lambda = 1 200 nm / 600 nm = 2,00.",
          "Étape 4 : Conclusion : k = 2 étant un nombre entier strictement positif, le point P correspond au centre de la 2e frange brillante située au-dessus de la frange centrale (d'ordre k = 2)."
        ],
        "conclusion": "Au point P, la différence de marche vaut exactement 2 longueurs d'onde (1200 nm) : on observe le centre de la 2ème frange brillante."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau de correspondance entre ordre k, différence de marche delta et position y",
        "tableData": {
          "headers": [
            "Ordre (k)",
            "Différence de marche delta",
            "Type de frange",
            "Position sur l'écran y (en unité de i = lambda.D/a)"
          ],
          "rows": [
            [
              "k = 0",
              "delta = 0",
              "Frange brillante centrale",
              "y = 0"
            ],
            [
              "k = 0 (sombre)",
              "delta = +0,5.lambda",
              "1re frange sombre supérieure",
              "y = +0,5.i"
            ],
            [
              "k = +1",
              "delta = +1,0.lambda",
              "1re frange brillante supérieure",
              "y = +1,0.i"
            ],
            [
              "k = +1 (sombre)",
              "delta = +1,5.lambda",
              "2e frange sombre supérieure",
              "y = +1,5.i"
            ],
            [
              "k = +2",
              "delta = +2,0.lambda",
              "2e frange brillante supérieure",
              "y = +2,0.i"
            ],
            [
              "k = -1",
              "delta = -1,0.lambda",
              "1re frange brillante inférieure",
              "y = -1,0.i"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition géométrique de la différence de marche delta",
          "stepTheme": "Différence de marche",
          "stepBadge": "Définition géométrique",
          "paragraphText": "La différence de marche géométrique (notée delta) entre deux ondes synchrones issues de sources S₁ et S₂ et se rencontrant en un point P est la différence des distances parcourues dans le vide (ou dans l'air d'indice n ≈ 1) : delta = S₂P - S₁P. Elle s'exprime en mètres. Elle mesure le retard spatial de l'une des ondes sur l'autre lors de leur propagation.",
          "exercise": {
            "id": "phys_tle_cd_15_p4_s1_qcm",
            "type": "mcq",
            "prompt": "Si en un point P de l'écran, le trajet S₁P mesure 1,500000 m et le trajet S₂P mesure 1,500900 m, quelle est la différence de marche delta en nanomètres ?",
            "options": [
              "90 nm",
              "900 nm",
              "9 000 nm",
              "0,9 nm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "delta = S₂P - S₁P = 1,500900 m - 1,500000 m = 0,000900 m = 9,00.10⁻⁴ m = 900 nm."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Démonstration de la formule approchée delta = a.y / D",
          "stepTheme": "Démonstration analytique",
          "stepBadge": "Démonstration classique",
          "paragraphText": "En repère cartésien avec l'axe (Oy) sur l'écran et (Ox) orthogonal au plan des fentes : S₁ a pour coordonnées (0, +a/2) et S₂ (0, -a/2). Le point P est en (D, y). D'après le théorème de Pythagore : S₁P² = D² + (y - a/2)² et S₂P² = D² + (y + a/2)². On en déduit : S₂P² - S₁P² = (S₂P - S₁P)(S₂P + S₁P) = [D² + (y + a/2)²] - [D² + (y - a/2)²] = 2.a.y. Comme a << D et y << D, on a S₂P + S₁P ≈ 2D. Par conséquent : S₂P - S₁P = delta = (2.a.y) / (2D) = a.y / D.",
          "exercise": {
            "id": "phys_tle_cd_15_p4_s2_qcm",
            "type": "mcq",
            "prompt": "Dans la démonstration de delta = a.y / D, quelle hypothèse géométrique justifie l'approximation S₂P + S₁P ≈ 2D ?",
            "options": [
              "La vitesse de la lumière est infinie",
              "La distance des fentes à l'écran D est immensément plus grande que l'écartement des fentes 'a' et la coordonnée y (D >> a et D >> y)",
              "L'écran est concave",
              "La lumière est purement corpusculaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Puisque D vaut typiquement 1 à 2 mètres alors que a et y sont de l'ordre du millimètre, S₁P et S₂P diffèrent de D de moins de quelques parties par million : S₁P + S₂P ≈ D + D = 2D."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Condition mathématique d'interférence constructive (frange brillante)",
          "stepTheme": "Interférences constructives",
          "stepBadge": "Franges brillantes",
          "paragraphText": "Deux ondes sinusoïdales interfèrent de manière rigoureusement constructive lorsque leurs ébranlements oscillent en phase parfaite : leur déphasage est un multiple entier de 2.pi (Δphi = 2.k.pi). Sachant que Δphi = (2.pi / lambda) * delta, la condition s'écrit : (2.pi / lambda) * delta = 2.k.pi <=> delta = k * lambda (avec k in Z). En remplaçant delta par a.y/D : a.y/D = k.lambda => y_b = k * (lambda.D / a).",
          "exercise": {
            "id": "phys_tle_cd_15_p4_s3_qcm",
            "type": "mcq",
            "prompt": "Pour une lumière de longueur d'onde lambda = 500 nm, quelle valeur de la différence de marche delta produit la 3ème frange brillante située au-dessus de la frange centrale ?",
            "options": [
              "750 nm",
              "1 000 nm",
              "1 500 nm",
              "2 000 nm"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour la 3ème frange brillante, k = 3. La différence de marche vaut delta = k * lambda = 3 * 500 nm = 1 500 nm."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Condition mathématique d'interférence destructive (frange sombre)",
          "stepTheme": "Interférences destructives",
          "stepBadge": "Franges sombres",
          "paragraphText": "Deux ondes interfèrent de manière totalement destructive lorsque leurs ébranlements oscillent en opposition de phase : leur déphasage est un multiple impair de pi : Δphi = (2k + 1).pi. La différence de marche correspondante est un multiple demi-entier de la longueur d'onde : delta = (2k + 1) * (lambda / 2) = (k + 1/2) * lambda (avec k in Z). La position des franges sombres sur l'écran est donc : y_s = (k + 1/2) * (lambda.D / a). La première frange sombre (k = 0) se situe à y = 0,5 * (lambda.D / a).",
          "exercise": {
            "id": "phys_tle_cd_15_p4_s4_qcm",
            "type": "mcq",
            "prompt": "Quelle est la différence de marche delta au centre de la 1ère frange sombre supérieure pour lambda = 600 nm ?",
            "options": [
              "150 nm",
              "300 nm (lambda / 2)",
              "600 nm",
              "900 nm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour la 1ère frange sombre (k = 0), la différence de marche vaut delta = (0 + 1/2) * lambda = lambda / 2 = 600 / 2 = 300 nm."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Numérotation des franges sombres : le décalage d'indice k",
          "stepTheme": "Numérotation",
          "stepBadge": "Attention piège",
          "paragraphText": "Attention au piège classique de numérotation ! Pour les franges brillantes, l'indice k correspond directement au nom de la frange : k = 1 est la 1ère frange brillante, k = 2 est la 2ème frange brillante. En revanche, pour les franges sombres d'équation y = (k + 1/2).i : la 1ère frange sombre supérieure correspond à k = 0 (y = 0,5.i), la 2ème frange sombre correspond à k = 1 (y = 1,5.i), et la 3ème frange sombre correspond à k = 2 (y = 2,5.i) ! La n-ième frange sombre a donc pour coordonnée y = (n - 0,5).i.",
          "exercise": {
            "id": "phys_tle_cd_15_p4_s5_qcm",
            "type": "mcq",
            "prompt": "À quelle distance du centre O se trouve la 4ème frange sombre si l'interfrange vaut i = 2,0 mm ?",
            "options": [
              "4,0 mm",
              "7,0 mm (3,5 * i)",
              "8,0 mm",
              "9,0 mm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La 1ère sombre est à 0,5*i ; la 2ème à 1,5*i ; la 3ème à 2,5*i ; et la 4ème frange sombre se trouve à y = 3,5 * i = 3,5 * 2,0 mm = 7,0 mm."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Ordre d'interférence p = delta / lambda (grandeur continue)",
          "stepTheme": "Ordre d'interférence",
          "stepBadge": "Grandeur scalaire",
          "paragraphText": "En un point quelconque P de l'écran (qui n'est pas forcément sur le centre d'une frange), on définit l'ordre d'interférence p (ou k) comme le rapport réel p = delta / lambda = a.y / (lambda.D). Si p est un entier (p in Z), P est le centre d'une frange brillante. Si p est un demi-entier (p = k + 0,5 avec k in Z), P est le centre d'une frange sombre. Si p est une valeur intermédiaire quelconque (ex. p = 1,23), P est situé dans une zone d'éclairement intermédiaire entre clair et sombre.",
          "exercise": {
            "id": "phys_tle_cd_15_p4_s6_qcm",
            "type": "mcq",
            "prompt": "Au point P d'un écran d'Young, la différence de marche vaut delta = 1,75.10⁻⁶ m pour une longueur d'onde lambda = 500 nm. Quel est l'ordre d'interférence p et l'état d'éclairement au point P ?",
            "options": [
              "p = 3,5 : centre de la 4ème frange sombre",
              "p = 3,0 : centre d'une frange brillante",
              "p = 4,0 : centre d'une frange brillante",
              "p = 2,5 : centre de la 3ème frange sombre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "p = delta / lambda = 1750 nm / 500 nm = 3,5 = 3 + 1/2. Comme p est un demi-entier, c'est une extinction sombre : il s'agit de la 4ème frange sombre supérieure (k = 3)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Calcul du nombre total de franges observables sur un écran de largeur finie",
          "stepTheme": "Champ d'observation",
          "stepBadge": "Calcul global",
          "paragraphText": "Sur un écran de largeur totale W = 6,0 cm centré sur l'axe optique (s'étendant de y = -3,0 cm à y = +3,0 cm) avec un interfrange i = 2,5 mm : le nombre total d'interfranges contenus dans la demi-largeur est y_max / i = 30 mm / 2,5 mm = 12 interfranges. Il y a donc la frange centrale k = 0, plus 12 franges brillantes vers le haut et 12 vers le bas, soit au total N_b = 2 * 12 + 1 = 25 franges brillantes visibles.",
          "exercise": {
            "id": "phys_tle_cd_15_p4_s7_qcm",
            "type": "mcq",
            "prompt": "Combien de franges brillantes au total peut-on observer sur une zone d'écran de largeur 40 mm centrée en O si l'interfrange vaut i = 3,0 mm ?",
            "options": [
              "11 franges",
              "13 franges",
              "14 franges",
              "27 franges"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La zone s'étend de -20 mm à +20 mm. L'ordre maximal est k_max = E(20 / 3,0) = E(6,67) = 6. Les ordres entiers possibles sont k in {-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6}, ce qui fait 2 * 6 + 1 = 13 franges brillantes."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_15_p4_s1_qcm",
          "type": "mcq",
          "prompt": "Si en un point P de l'écran, le trajet S₁P mesure 1,500000 m et le trajet S₂P mesure 1,500900 m, quelle est la différence de marche delta en nanomètres ?",
          "options": [
            "90 nm",
            "900 nm",
            "9 000 nm",
            "0,9 nm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "delta = S₂P - S₁P = 1,500900 m - 1,500000 m = 0,000900 m = 9,00.10⁻⁴ m = 900 nm."
        },
        {
          "id": "phys_tle_cd_15_p4_s2_qcm",
          "type": "mcq",
          "prompt": "Dans la démonstration de delta = a.y / D, quelle hypothèse géométrique justifie l'approximation S₂P + S₁P ≈ 2D ?",
          "options": [
            "La vitesse de la lumière est infinie",
            "La distance des fentes à l'écran D est immensément plus grande que l'écartement des fentes 'a' et la coordonnée y (D >> a et D >> y)",
            "L'écran est concave",
            "La lumière est purement corpusculaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Puisque D vaut typiquement 1 à 2 mètres alors que a et y sont de l'ordre du millimètre, S₁P et S₂P diffèrent de D de moins de quelques parties par million : S₁P + S₂P ≈ D + D = 2D."
        },
        {
          "id": "phys_tle_cd_15_p4_s3_qcm",
          "type": "mcq",
          "prompt": "Pour une lumière de longueur d'onde lambda = 500 nm, quelle valeur de la différence de marche delta produit la 3ème frange brillante située au-dessus de la frange centrale ?",
          "options": [
            "750 nm",
            "1 000 nm",
            "1 500 nm",
            "2 000 nm"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour la 3ème frange brillante, k = 3. La différence de marche vaut delta = k * lambda = 3 * 500 nm = 1 500 nm."
        },
        {
          "id": "phys_tle_cd_15_p4_s4_qcm",
          "type": "mcq",
          "prompt": "Quelle est la différence de marche delta au centre de la 1ère frange sombre supérieure pour lambda = 600 nm ?",
          "options": [
            "150 nm",
            "300 nm (lambda / 2)",
            "600 nm",
            "900 nm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour la 1ère frange sombre (k = 0), la différence de marche vaut delta = (0 + 1/2) * lambda = lambda / 2 = 600 / 2 = 300 nm."
        },
        {
          "id": "phys_tle_cd_15_p4_s5_qcm",
          "type": "mcq",
          "prompt": "À quelle distance du centre O se trouve la 4ème frange sombre si l'interfrange vaut i = 2,0 mm ?",
          "options": [
            "4,0 mm",
            "7,0 mm (3,5 * i)",
            "8,0 mm",
            "9,0 mm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La 1ère sombre est à 0,5*i ; la 2ème à 1,5*i ; la 3ème à 2,5*i ; et la 4ème frange sombre se trouve à y = 3,5 * i = 3,5 * 2,0 mm = 7,0 mm."
        },
        {
          "id": "phys_tle_cd_15_p4_s6_qcm",
          "type": "mcq",
          "prompt": "Au point P d'un écran d'Young, la différence de marche vaut delta = 1,75.10⁻⁶ m pour une longueur d'onde lambda = 500 nm. Quel est l'ordre d'interférence p et l'état d'éclairement au point P ?",
          "options": [
            "p = 3,5 : centre de la 4ème frange sombre",
            "p = 3,0 : centre d'une frange brillante",
            "p = 4,0 : centre d'une frange brillante",
            "p = 2,5 : centre de la 3ème frange sombre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "p = delta / lambda = 1750 nm / 500 nm = 3,5 = 3 + 1/2. Comme p est un demi-entier, c'est une extinction sombre : il s'agit de la 4ème frange sombre supérieure (k = 3)."
        },
        {
          "id": "phys_tle_cd_15_p4_s7_qcm",
          "type": "mcq",
          "prompt": "Combien de franges brillantes au total peut-on observer sur une zone d'écran de largeur 40 mm centrée en O si l'interfrange vaut i = 3,0 mm ?",
          "options": [
            "11 franges",
            "13 franges",
            "14 franges",
            "27 franges"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La zone s'étend de -20 mm à +20 mm. L'ordre maximal est k_max = E(20 / 3,0) = E(6,67) = 6. Les ordres entiers possibles sont k in {-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6}, ce qui fait 2 * 6 + 1 = 13 franges brillantes."
        }
      ]
    },
    {
      "id": "pt5_interfrange_mesure_metrologie",
      "order": 5,
      "title": "Interfrange et métrologie des longueurs d'onde",
      "summary": "Définition de l'interfrange i = lambda.D / a, protocole expérimental de mesure sur n franges consécutives L = n.i, détermination de longueurs d'onde ou d'écartements microscopiques.",
      "conceptExplanation": "L'interfrange (noté 'i') est la distance séparant les centres de deux franges brillantes consécutives ou de deux franges sombres consécutives sur l'écran d'observation. En faisant la différence entre les positions de deux franges brillantes consécutives d'ordres k+1 et k : i = y_{k+1} - y_k = (k+1)*(lambda.D / a) - k*(lambda.D / a) = lambda.D / a. L'interfrange est une constante spatiale : les franges d'interférences sont rigoureusement équidistantes sur tout l'écran. Cette formule fondamentale i = (lambda * D) / a montre que l'interfrange est : 1. Proportionnel à la longueur d'onde lambda (les franges rouges sont plus espacées que les bleues). 2. Proportionnel à la distance D de l'écran. 3. Inversement proportionnel à l'écartement 'a' des fentes (plus les fentes sont proches, plus les franges sont larges et faciles à observer). En métrologie de laboratoire, la mesure directe d'un seul interfrange est trop imprécise (i de l'ordre de 0,5 à 2 mm) ; on mesure donc à la règle ou au vernier la largeur globale L d'un paquet de n interfranges (L = n * i), d'où i = L / n.",
      "keyRule": "L'interfrange est la distance séparant deux franges de même nature consécutives : i = lambda.D / a. Pour minimiser l'incertitude de mesure, on mesure n interfranges : i = L / n.",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "i = y_{k+1} - y_k = \\frac{\\lambda D}{a}"
        },
        {
          "name": "Relation 2",
          "formula": "L = n \\times i \\implies i = \\frac{L}{n}"
        },
        {
          "name": "Relation 3",
          "formula": "\\lambda = \\frac{a \\times i}{D} = \\frac{a \\times L}{n \\times D}"
        },
        {
          "name": "Relation 4",
          "formula": "a = \\frac{\\lambda D}{i}"
        }
      ],
      "workedExample": {
        "title": "Détermination métrologique de la longueur d'onde d'un laser avec calcul d'incertitude",
        "statement": "Dans une expérience de fentes d'Young, la distance entre les fentes est a = 0,250 mm et la distance à l'écran est D = 1,80 m. Un élève mesure avec un réglet la distance séparant le milieu de la 1ère frange brillante et le milieu de la 7ème frange brillante d'un même côté : il trouve L = 27,0 mm. 1. Déterminer le nombre d'interfranges n correspondant à cette mesure. 2. En déduire la valeur de l'interfrange i. 3. Calculer la longueur d'onde lambda du faisceau laser.",
        "methodSteps": [
          "Étape 1 : Déterminer le nombre d'interfranges n : La distance entre la frange d'ordre k₁ = 1 et la frange d'ordre k₂ = 7 contient n = k₂ - k₁ = 7 - 1 = 6 interfranges consécutifs.",
          "Étape 2 : Calculer l'interfrange i : i = L / n = 27,0 mm / 6 = 4,50 mm = 4,50.10⁻³ m.",
          "Étape 3 : Poser la relation fondamentale : i = (lambda * D) / a => lambda = (a * i) / D.",
          "Étape 4 : Effectuer l'application numérique : lambda = (0,250.10⁻³ m * 4,50.10⁻³ m) / 1,80 m = 1,125.10⁻⁶ / 1,80 = 6,25.10⁻⁷ m = 625 nm."
        ],
        "conclusion": "L'interfrange mesure i = 4,50 mm, ce qui permet de déterminer la longueur d'onde du laser : lambda = 625 nm (domaine rouge-orangé)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des paramètres influençant l'interfrange i = lambda.D / a",
        "tableData": {
          "headers": [
            "Paramètre modifié",
            "Sens de variation",
            "Influence sur l'interfrange i",
            "Aspect visuel sur l'écran"
          ],
          "rows": [
            [
              "Écartement des fentes (a)",
              "Augmente (fentes plus écartées)",
              "Diminue (i se rétrécit)",
              "Franges plus fines, plus serrées, difficiles à distinguer"
            ],
            [
              "Écartement des fentes (a)",
              "Diminue (fentes plus rapprochées)",
              "Augmente (i s'élargit)",
              "Franges plus larges et aérées, excellente lisibilité"
            ],
            [
              "Distance à l'écran (D)",
              "Augmente (recul de l'écran)",
              "Augmente proportionnellement",
              "La figure s'agrandit, mais la luminosité baisse"
            ],
            [
              "Couleur (lambda)",
              "Passage du bleu (450 nm) au rouge (650 nm)",
              "Augmente d'un facteur 1,44",
              "Le réseau de franges rouges est nettement plus espacé que le réseau bleu"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition formelle de l'interfrange i",
          "stepTheme": "Interfrange",
          "stepBadge": "Définition",
          "paragraphText": "L'interfrange (noté i) est la distance séparant deux franges brillantes consécutives ou deux franges sombres consécutives. C'est la période spatiale de la figure d'interférences sur l'écran d'observation. Elle s'exprime dans le Système International en mètres (m), mais est couramment mesurée en millimètres (mm). La formule théorique est : i = (lambda * D) / a.",
          "exercise": {
            "id": "phys_tle_cd_15_p5_s1_qcm",
            "type": "mcq",
            "prompt": "On utilise deux fentes distantes de a = 0,20 mm avec un laser rouge (lambda = 640 nm) et un écran à D = 1,50 m. Quelle est la valeur numérique de l'interfrange i ?",
            "options": [
              "0,48 mm",
              "2,40 mm",
              "4,80 mm",
              "9,60 mm"
            ],
            "correctAnswerIndex": 2,
            "explanation": "i = (lambda * D) / a = (640.10⁻⁹ m * 1,50 m) / (0,20.10⁻³ m) = 9,60.10⁻⁷ / 2,0.10⁻⁴ = 4,80.10⁻³ m = 4,80 mm."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Protocole de mesure sur n interfranges (règle des n intervalles)",
          "stepTheme": "Protocole métrologique",
          "stepBadge": "Méthode expérimentale",
          "paragraphText": "Pour limiter l'erreur de parallaxe et l'incertitude liée à l'épaisseur de la pointe de repérage, on ne mesure jamais un seul interfrange. Le protocole rigoureux consiste à : 1. Repérer le milieu de la frange brillante d'ordre k₁. 2. Compter n intervalles d'interfranges pour atteindre la frange d'ordre k₂ = k₁ + n (ex. 5 à 10 franges). 3. Mesurer la distance totale L entre ces deux repères. 4. Calculer l'interfrange moyen : i = L / n. L'incertitude absolue sur i est ainsi divisée par n : Δi = ΔL / n.",
          "exercise": {
            "id": "phys_tle_cd_15_p5_s2_qcm",
            "type": "mcq",
            "prompt": "Un élève repère 11 franges brillantes consécutives sur son écran et mesure une distance totale L = 22,0 mm entre la première et la onzième frange. Quel est le nombre d'interfranges n et la valeur de i ?",
            "options": [
              "n = 11 et i = 2,00 mm",
              "n = 10 et i = 2,20 mm",
              "n = 10 et i = 2,00 mm",
              "n = 12 et i = 1,83 mm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Entre 11 poteaux consécutifs, il y a 10 intervalles (n = 11 - 1 = 10). L'interfrange vaut donc i = L / n = 22,0 mm / 10 = 2,20 mm. C'est le piège classique des piquets et des intervalles !"
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Sensibilité de l'interfrange à la couleur : comparaison bleu / rouge",
          "stepTheme": "Dépendance spectrale",
          "stepBadge": "Propriété spectrale",
          "paragraphText": "Puisque l'interfrange est directement proportionnel à lambda (i ~ lambda) : pour un même montage à fentes d'Young, le passage d'une diode laser violette (lambda₁ = 405 nm) à une diode laser rouge (lambda₂ = 810 nm, proche IR) double exactement la valeur de l'interfrange : i₂ = 2 * i₁. Si l'on superpose deux faisceaux monochromatiques bleu et rouge, on observe des coïncidences périodiques de franges brillantes tous les N interfranges.",
          "exercise": {
            "id": "phys_tle_cd_15_p5_s3_qcm",
            "type": "mcq",
            "prompt": "On éclaire simultanément les fentes d'Young par deux radiations monochromatiques : une bleue (lambda_B = 480 nm) et une jaune (lambda_J = 600 nm). À quelle position la frange brillante jaune d'ordre k_J coïncide-t-elle avec une frange brillante bleue d'ordre k_B pour la première fois en dehors du centre O ?",
            "options": [
              "k_B = 5 et k_J = 4",
              "k_B = 4 et k_J = 5",
              "k_B = 6 et k_J = 5",
              "k_B = 3 et k_J = 2"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour qu'il y ait coïncidence en un point y : y = k_B * i_B = k_J * i_J => k_B * lambda_B = k_J * lambda_J => k_B / k_J = lambda_J / lambda_B = 600 / 480 = 5 / 4. La première coïncidence non nulle a lieu pour k_B = 5 et k_J = 4."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Piège sur la distance D fente-écran : confusion d'unités",
          "stepTheme": "Unités de calcul",
          "stepBadge": "Attention piège",
          "paragraphText": "Lors du calcul de lambda = (a * i) / D : l'écartement 'a' et l'interfrange 'i' sont généralement fournis en millimètres (mm) ou micromètres (µm), tandis que D est en mètres (m). Il est impératif de tout convertir en mètres avant d'effectuer les opérations : a(m) = a(mm) * 10⁻³, i(m) = i(mm) * 10⁻³. Oublier une seule conversion conduit à des longueurs d'onde aberrantes décalées de plusieurs ordres de grandeur.",
          "exercise": {
            "id": "phys_tle_cd_15_p5_s4_qcm",
            "type": "mcq",
            "prompt": "On donne a = 0,30 mm, i = 3,5 mm et D = 2,1 m. Quelle est la valeur correcte de la longueur d'onde lambda en nanomètres ?",
            "options": [
              "500 nm",
              "50 nm",
              "5 000 nm",
              "0,50 nm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "lambda = (a * i) / D = (0,30.10⁻³ m * 3,5.10⁻³ m) / 2,1 m = 1,05.10⁻⁶ / 2,1 = 5,00.10⁻⁷ m = 500 nm."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Influence de l'indice du milieu (expérience dans l'eau)",
          "stepTheme": "Milieu réfringent",
          "stepBadge": "Milieu matériel",
          "paragraphText": "Si l'on immerge l'ensemble du dispositif des fentes d'Young dans un milieu transparent d'indice de réfraction n (par exemple dans l'eau où n = 1,33), la fréquence nu reste inchangée mais la vitesse de la lumière diminue (v = c/n) et la longueur d'onde dans le milieu devient lambda_n = lambda / n. L'interfrange devient alors : i_n = (lambda_n * D) / a = i / n. Dans l'eau, les franges sont donc 1,33 fois plus serrées que dans l'air !",
          "exercise": {
            "id": "phys_tle_cd_15_p5_s5_qcm",
            "type": "mcq",
            "prompt": "L'interfrange dans l'air vaut i = 4,0 mm. Si l'on remplit l'espace entre les fentes et l'écran avec un liquide d'indice de réfraction n = 1,60, que devient la valeur de l'interfrange ?",
            "options": [
              "6,4 mm",
              "4,0 mm",
              "2,5 mm",
              "1,6 mm"
            ],
            "correctAnswerIndex": 2,
            "explanation": "i_liquide = i_air / n = 4,0 mm / 1,60 = 2,5 mm."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Mesure de l'épaisseur d'une lame transparente par décalage des franges",
          "stepTheme": "Interférométrie",
          "stepBadge": "Application métrologique",
          "paragraphText": "Si l'on interpose sur le trajet du faisceau passant par S₁ une lame mince transparente d'épaisseur e et d'indice de réfraction n > 1, le trajet optique à travers la lame est augmenté de (n - 1)*e. Toute la figure d'interférences se décale alors latéralement d'un nombre de franges N tel que : (n - 1)*e = N * lambda. En comptant le nombre N de franges ayant défilé, on peut mesurer l'épaisseur e d'une membrane biologique ou d'un film plastique avec une précision nanométrique !",
          "exercise": {
            "id": "phys_tle_cd_15_p5_s6_qcm",
            "type": "mcq",
            "prompt": "L'interposition d'une fine feuille de verre d'indice n = 1,50 devant l'une des fentes provoque le défilement de N = 10 franges d'interférences sous un laser de lambda = 600 nm. Quelle est l'épaisseur e de cette lame de verre ?",
            "options": [
              "3,0 µm",
              "6,0 µm",
              "12 µm",
              "60 µm"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La variation de chemin optique est Δdelta = (n - 1)*e = N * lambda => e = (N * lambda) / (n - 1) = (10 * 600.10⁻⁹ m) / (1,50 - 1) = 6,00.10⁻⁶ / 0,50 = 1,20.10⁻⁵ m = 12 µm."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Réseaux de diffraction et spectroscopie à haute résolution",
          "stepTheme": "Réseaux optiques",
          "stepBadge": "Haute résolution",
          "paragraphText": "En multipliant le nombre de fentes parallèles équidistantes (N = plusieurs centaines à milliers de fentes par millimètre), on obtient un réseau de diffraction. Les interférences à N ondes rendent les raies d'interférences infiniment fines, intenses et séparées par de larges zones sombres. Les réseaux constituent le composant dispersif essentiel des spectromètres modernes pour analyser les gaz polluants et la lumière des étoiles.",
          "exercise": {
            "id": "phys_tle_cd_15_p5_s7_qcm",
            "type": "mcq",
            "prompt": "Un réseau de diffraction comporte n = 500 traits par millimètre. Quel est le pas du réseau 'a' (distance entre deux fentes consécutives) ?",
            "options": [
              "2,0 µm",
              "5,0 µm",
              "0,50 mm",
              "2,0 mm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le pas du réseau est l'inverse de la densité de traits : a = 1 mm / 500 = 1,0.10⁻³ m / 500 = 2,0.10⁻⁶ m = 2,0 µm."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_15_p5_s1_qcm",
          "type": "mcq",
          "prompt": "On utilise deux fentes distantes de a = 0,20 mm avec un laser rouge (lambda = 640 nm) et un écran à D = 1,50 m. Quelle est la valeur numérique de l'interfrange i ?",
          "options": [
            "0,48 mm",
            "2,40 mm",
            "4,80 mm",
            "9,60 mm"
          ],
          "correctAnswerIndex": 2,
          "explanation": "i = (lambda * D) / a = (640.10⁻⁹ m * 1,50 m) / (0,20.10⁻³ m) = 9,60.10⁻⁷ / 2,0.10⁻⁴ = 4,80.10⁻³ m = 4,80 mm."
        },
        {
          "id": "phys_tle_cd_15_p5_s2_qcm",
          "type": "mcq",
          "prompt": "Un élève repère 11 franges brillantes consécutives sur son écran et mesure une distance totale L = 22,0 mm entre la première et la onzième frange. Quel est le nombre d'interfranges n et la valeur de i ?",
          "options": [
            "n = 11 et i = 2,00 mm",
            "n = 10 et i = 2,20 mm",
            "n = 10 et i = 2,00 mm",
            "n = 12 et i = 1,83 mm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Entre 11 poteaux consécutifs, il y a 10 intervalles (n = 11 - 1 = 10). L'interfrange vaut donc i = L / n = 22,0 mm / 10 = 2,20 mm. C'est le piège classique des piquets et des intervalles !"
        },
        {
          "id": "phys_tle_cd_15_p5_s3_qcm",
          "type": "mcq",
          "prompt": "On éclaire simultanément les fentes d'Young par deux radiations monochromatiques : une bleue (lambda_B = 480 nm) et une jaune (lambda_J = 600 nm). À quelle position la frange brillante jaune d'ordre k_J coïncide-t-elle avec une frange brillante bleue d'ordre k_B pour la première fois en dehors du centre O ?",
          "options": [
            "k_B = 5 et k_J = 4",
            "k_B = 4 et k_J = 5",
            "k_B = 6 et k_J = 5",
            "k_B = 3 et k_J = 2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour qu'il y ait coïncidence en un point y : y = k_B * i_B = k_J * i_J => k_B * lambda_B = k_J * lambda_J => k_B / k_J = lambda_J / lambda_B = 600 / 480 = 5 / 4. La première coïncidence non nulle a lieu pour k_B = 5 et k_J = 4."
        },
        {
          "id": "phys_tle_cd_15_p5_s4_qcm",
          "type": "mcq",
          "prompt": "On donne a = 0,30 mm, i = 3,5 mm et D = 2,1 m. Quelle est la valeur correcte de la longueur d'onde lambda en nanomètres ?",
          "options": [
            "500 nm",
            "50 nm",
            "5 000 nm",
            "0,50 nm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "lambda = (a * i) / D = (0,30.10⁻³ m * 3,5.10⁻³ m) / 2,1 m = 1,05.10⁻⁶ / 2,1 = 5,00.10⁻⁷ m = 500 nm."
        },
        {
          "id": "phys_tle_cd_15_p5_s5_qcm",
          "type": "mcq",
          "prompt": "L'interfrange dans l'air vaut i = 4,0 mm. Si l'on remplit l'espace entre les fentes et l'écran avec un liquide d'indice de réfraction n = 1,60, que devient la valeur de l'interfrange ?",
          "options": [
            "6,4 mm",
            "4,0 mm",
            "2,5 mm",
            "1,6 mm"
          ],
          "correctAnswerIndex": 2,
          "explanation": "i_liquide = i_air / n = 4,0 mm / 1,60 = 2,5 mm."
        },
        {
          "id": "phys_tle_cd_15_p5_s6_qcm",
          "type": "mcq",
          "prompt": "L'interposition d'une fine feuille de verre d'indice n = 1,50 devant l'une des fentes provoque le défilement de N = 10 franges d'interférences sous un laser de lambda = 600 nm. Quelle est l'épaisseur e de cette lame de verre ?",
          "options": [
            "3,0 µm",
            "6,0 µm",
            "12 µm",
            "60 µm"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La variation de chemin optique est Δdelta = (n - 1)*e = N * lambda => e = (N * lambda) / (n - 1) = (10 * 600.10⁻⁹ m) / (1,50 - 1) = 6,00.10⁻⁶ / 0,50 = 1,20.10⁻⁵ m = 12 µm."
        },
        {
          "id": "phys_tle_cd_15_p5_s7_qcm",
          "type": "mcq",
          "prompt": "Un réseau de diffraction comporte n = 500 traits par millimètre. Quel est le pas du réseau 'a' (distance entre deux fentes consécutives) ?",
          "options": [
            "2,0 µm",
            "5,0 µm",
            "0,50 mm",
            "2,0 mm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pas du réseau est l'inverse de la densité de traits : a = 1 mm / 500 = 1,0.10⁻³ m / 500 = 2,0.10⁻⁶ m = 2,0 µm."
        }
      ]
    },
    {
      "id": "pt6_ondes_electromagnetiques_spectre_synthese",
      "order": 6,
      "title": "Nature électromagnétique de la lumière et spectre global",
      "summary": "Définition de l'onde électromagnétique (couplage E et B), vitesse de propagation dans le vide c = 3.10⁸ m/s, relation c = lambda.nu, échelle complète du spectre électromagnétique et synthèse de la dualité onde-corpuscule.",
      "conceptExplanation": "James Clerk Maxwell a unifié en 1865 l'électricité et le magnétisme en démontrant qu'une perturbation électromagnétique se propage dans l'espace sous la forme d'une onde transversale : une onde électromagnétique (OEM). Elle est constituée de la vibration couplée d'un champ électrique E(t) et d'un champ magnétique B(t) orthogonaux entre eux et tous deux perpendiculaires à la direction de propagation de l'onde (trièdre direct E, B, v). Une onde électromagnétique n'a besoin d'aucun support matériel pour se propager : elle se propage dans le vide à la vitesse fondamentale de la lumière c ≈ 3,00.10⁸ m/s. Elle obéit à la double périodicité spatiale (longueur d'onde lambda) et temporelle (période T ou fréquence nu = 1/T) avec la relation universelle : lambda = c.T = c / nu <=> c = lambda * nu. Le spectre électromagnétique s'étend de manière continue sur plus de vingt ordres de grandeur : des ondes radio kilométriques aux rayons gamma subatomiques. La lumière visible ne constitue qu'une infime fenêtre (de 400 nm pour le violet à 750 nm pour le rouge) à laquelle nos yeux sont biologiquement adaptés.",
      "keyRule": "Pour toute onde électromagnétique dans le vide : c = lambda.nu (avec c = 3.10⁸ m/s). Les ondes se propagent dans le vide et transportent de l'énergie sans transport de matière.",
      "formulas": [
        {
          "name": "Relation 1",
          "formula": "c = \\lambda \\nu = \\frac{\\lambda}{T}"
        },
        {
          "name": "Relation 2",
          "formula": "\\nu = \\frac{c}{\\lambda} \\iff \\lambda = \\frac{c}{\\nu}"
        },
        {
          "name": "Relation 3",
          "formula": "E = h \\nu = \\frac{h c}{\\lambda} \\quad (\\text{énergie du photon associé})"
        },
        {
          "name": "Relation 4",
          "formula": "p = \\frac{h}{\\lambda} = \\frac{E}{c} \\quad (\\text{quantité de mouvement})"
        }
      ],
      "workedExample": {
        "title": "Calcul de la longueur d'onde et de l'énergie des photons d'un relais de téléphonie mobile 4G",
        "statement": "Une antenne-relais de téléphonie mobile émet une onde hertzienne à la fréquence nu = 1,80 GHz (bande 1 800 MHz). 1. Calculer la période T de cette onde électromagnétique. 2. Déterminer sa longueur d'onde lambda dans le vide en centimètres. 3. Calculer l'énergie d'un photon associé en électronvolts (eV). 4. Cette onde est-elle ionisante ? Données : c = 3,00.10⁸ m/s ; h = 6,63.10⁻³⁴ J.s ; 1 eV = 1,60.10⁻¹⁹ J.",
        "methodSteps": [
          "Étape 1 : Convertir la fréquence en Hertz : nu = 1,80 GHz = 1,80.10⁹ Hz.",
          "Étape 2 : Calculer la période : T = 1 / nu = 1 / (1,80.10⁹ s⁻¹) ≈ 5,56.10⁻¹⁰ s = 0,556 ns.",
          "Étape 3 : Calculer la longueur d'onde dans le vide : lambda = c / nu = (3,00.10⁸ m/s) / (1,80.10⁹ s⁻¹) = 0,167 m = 16,7 cm.",
          "Étape 4 : Calculer l'énergie d'un photon en Joules : E = h * nu = 6,63.10⁻³⁴ J.s * 1,80.10⁹ s⁻¹ ≈ 1,193.10⁻²⁴ J.",
          "Étape 5 : Convertir en électronvolts : E(eV) = 1,193.10⁻²⁴ / 1,602.10⁻¹⁹ ≈ 7,45.10⁻⁶ eV = 7,45 µeV.",
          "Étape 6 : Conclure sur le caractère ionisant : L'énergie requise pour ioniser un atome ou casser une liaison chimique biologique est de plusieurs électronvolts (E > 10 eV). Comme 7,45 µeV est plus d'un million de fois inférieur à ce seuil, les ondes de téléphonie sont rigoureusement non-ionisantes."
        ],
        "conclusion": "L'onde 4G a une longueur d'onde de 16,7 cm et ses photons ont une énergie infime (7,45 µeV), excluant tout effet d'ionisation nucléaire ou moléculaire."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Spectre électromagnétique continu et applications sociétales",
        "tableData": {
          "headers": [
            "Domaine d'ondes",
            "Gamme de longueurs d'onde lambda",
            "Gamme de fréquences nu",
            "Énergie des photons",
            "Applications principales"
          ],
          "rows": [
            [
              "Ondes radio (hertziennes)",
              "1 m à > 100 km",
              "< 300 MHz",
              "< 1,2 µeV",
              "Radio FM, radiodiffusion AM, liaisons maritimes, radars longue portée"
            ],
            [
              "Micro-ondes",
              "1 mm à 1 m",
              "300 MHz à 300 GHz",
              "1,2 µeV à 1,2 meV",
              "Téléphonie 4G/5G, Wi-Fi, fours à micro-ondes, liaisons satellites GPS"
            ],
            [
              "Infrarouge (IR)",
              "780 nm à 1 mm",
              "300 GHz à 385 THz",
              "1,2 meV à 1,6 eV",
              "Télécommandes, caméras thermiques, télécommunications par fibre optique"
            ],
            [
              "Lumière visible",
              "400 nm à 780 nm",
              "385 THz à 750 THz",
              "1,6 eV à 3,1 eV",
              "Vision humaine, éclairage, photosynthèse végétale"
            ],
            [
              "Ultraviolet (UV)",
              "10 nm à 400 nm",
              "750 THz à 30 PHz",
              "3,1 eV à 124 eV",
              "Bronzage, synthèse de vitamine D, stérilisation germicide, lampes de Wood"
            ],
            [
              "Rayons X",
              "0,01 nm à 10 nm",
              "30 PHz à 30 EHz",
              "124 eV à 124 keV",
              "Radiographie médicale, scanners hospitaliers, sécurité des aéroports"
            ],
            [
              "Rayons gamma (γ)",
              "< 0,01 nm (< 10 pm)",
              "> 30 EHz",
              "> 124 keV à plusieurs MeV",
              "Radiothérapie anti-cancéreuse, gammagraphie industrielle, astrophysique spatiale"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Structure vectorielle d'une onde électromagnétique plane",
          "stepTheme": "Onde électromagnétique",
          "stepBadge": "Définition vectorielle",
          "paragraphText": "Une onde électromagnétique est la propagation spatio-temporelle d'un champ électrique E et d'un champ magnétique B couplés par les équations de Maxwell. Dans une onde progressive plane se propageant dans le vide selon l'axe Oz : le champ électrique E et le champ magnétique B oscillent en phase, sont perpendiculaires entre eux (E orthogonal à B) et perpendiculaires à la direction de propagation Oz. Le trièdre (E, B, v) est un trièdre direct. Le rapport des amplitudes dans le vide est invariant : E_m / B_m = c.",
          "exercise": {
            "id": "phys_tle_cd_15_p6_s1_qcm",
            "type": "mcq",
            "prompt": "Dans une onde électromagnétique se propageant dans le vide, quelle relation lie l'amplitude du champ électrique E_m à celle du champ magnétique B_m ?",
            "options": [
              "E_m = B_m",
              "E_m = c * B_m",
              "B_m = c * E_m",
              "E_m = B_m / (2 * pi)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après les équations de Maxwell dans le vide, les amplitudes sont reliées par la célérité c de la lumière : E_m = c * B_m (avec E en V/m, B en Tesla et c en m/s)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Propriété de propagation dans le vide et célérité c",
          "stepTheme": "Vitesse de la lumière",
          "stepBadge": "Constante universelle",
          "paragraphText": "Contrairement aux ondes mécaniques (son, vagues) qui requièrent obligatoirement un milieu matériel support (air, eau, solide) pour osciller et se propager, les ondes électromagnétiques se propagent parfaitement dans le vide absolu. Leur vitesse dans le vide est une constante fondamentale universelle : c = 1 / sqrt(mu_0 * epsilon_0) ≈ 299 792 458 m/s, fixée conventionnellement à c = 3,00.10⁸ m/s. Dans l'air, la vitesse est quasiment identique (v_air ≈ c / 1,0003 ≈ c).",
          "exercise": {
            "id": "phys_tle_cd_15_p6_s2_qcm",
            "type": "mcq",
            "prompt": "Combien de temps met un signal radioélectrique émis depuis la Terre pour atteindre un robot explorateur situé sur Mars à une distance d = 1,5.10⁸ km ?",
            "options": [
              "5 secondes",
              "50 secondes",
              "500 secondes (8 minutes 20 secondes)",
              "5 000 secondes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "d = 1,5.10⁸ km = 1,5.10¹¹ m. Le temps de parcours à la vitesse de la lumière est t = d / c = 1,5.10¹¹ m / (3,00.10⁸ m/s) = 500 secondes, soit 8 minutes et 20 secondes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Relation de double périodicité : c = lambda * nu",
          "stepTheme": "Périodicité spatio-temporelle",
          "stepBadge": "Formule universelle",
          "paragraphText": "Une onde électromagnétique sinusoïdale présente une double périodicité : 1. Une périodicité temporelle définie par sa période T (en secondes) et sa fréquence nu = 1/T (en Hertz, Hz). 2. Une périodicité spatiale définie par sa longueur d'onde lambda (en mètres), distance parcourue par l'onde pendant une période temporelle T : lambda = c * T = c / nu. La fréquence nu est invariante quel que soit le milieu traversé, tandis que la longueur d'onde diminue dans un milieu d'indice n : lambda_milieu = lambda_vide / n.",
          "exercise": {
            "id": "phys_tle_cd_15_p6_s3_qcm",
            "type": "mcq",
            "prompt": "Une station radio émet sur la bande FM à la fréquence nu = 98,5 MHz. Quelle est la longueur d'onde lambda de cette onde dans l'air ?",
            "options": [
              "30,5 cm",
              "3,05 m",
              "30,5 m",
              "305 m"
            ],
            "correctAnswerIndex": 1,
            "explanation": "lambda = c / nu = (3,00.10⁸ m/s) / (98,5.10⁶ s⁻¹) ≈ 3,046 m ≈ 3,05 m."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Confusion entre ondes sonores et ondes électromagnétiques",
          "stepTheme": "Nature des ondes",
          "stepBadge": "Attention piège",
          "paragraphText": "Une confusion fréquente est d'assimiler les ondes sonores et les ondes radio. Une onde sonore est une onde MÉCANIQUE longitudinale de pression : elle ne peut pas se propager dans le vide spatial et sa vitesse dans l'air n'est que de 340 m/s. Une onde radio est une onde ÉLECTROMAGNÉTIQUE transversale : elle se propage dans le vide à 300 000 km/s ! Lorsqu'un astronaute parle sur la Lune, sa voix est convertie par un microphone en onde radioélectrique pour franchir le vide spatial et atteindre la Terre.",
          "exercise": {
            "id": "phys_tle_cd_15_p6_s4_qcm",
            "type": "mcq",
            "prompt": "Dans le vide spatial interstellaire, laquelle de ces deux ondes peut se propager ?",
            "options": [
              "Le son produit par l'explosion d'une étoile",
              "La lumière et les ondes radio émises par l'explosion de l'étoile",
              "Les deux ondes se propagent à la même vitesse",
              "Aucune des deux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le son étant une onde mécanique nécessitant un support matériel élastique (molécules d'air), il ne se propage absolument pas dans le vide. La lumière et les ondes radio sont électromagnétiques et se propagent librement dans le vide à la vitesse c."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Frontière d'ionisation du spectre : rayonnements non-ionisants vs ionisants",
          "stepTheme": "Radioprotection et spectre",
          "stepBadge": "Frontière biologique",
          "paragraphText": "Le spectre électromagnétique est séparé en deux catégories biologiques majeures selon l'énergie de leurs photons individuels E = h.nu : 1. Les rayonnements non-ionisants (ondes radio, micro-ondes, infrarouges, lumière visible, UV proches) : E < 10 eV. Leurs photons ne possèdent pas l'énergie suffisante pour arracher des électrons aux atomes des molécules vivantes ; leurs effets sont purement thermiques (échauffement macroscopique). 2. Les rayonnements ionisants (UV lointains, rayons X, rayons gamma) : E > 10 eV à plusieurs MeV. Leurs photons arrachent des électrons et brisent les molécules d'ADN, exigeant une radioprotection stricte.",
          "exercise": {
            "id": "phys_tle_cd_15_p6_s5_qcm",
            "type": "mcq",
            "prompt": "Pourquoi les ondes Wi-Fi (2,4 GHz) et la lumière d'une lampe de salon ne peuvent-elles en aucun cas provoquer de mutations génétiques radio-induites dans les cellules vivantes ?",
            "options": [
              "Parce que leur intensité lumineuse est nulle",
              "Parce que l'énergie individuelle de chaque photon (micro-eV ou quelques eV) est bien inférieure au seuil d'ionisation des atomes (~10 eV)",
              "Parce qu'elles se propagent en ligne courbe",
              "Parce qu'elles sont détruites par l'oxygène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'effet mutagène ou ionisant dépend exclusivement de l'énergie d'un photon individuel E = h.nu. Pour le Wi-Fi (E ~ 10 µeV) ou le visible (E ~ 2 à 3 eV), les photons sont incapables d'ioniser un atome ou de casser une liaison covalente de l'ADN."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Synthèse de la dualité onde-corpuscule de Louis de Broglie",
          "stepTheme": "Physique quantique",
          "stepBadge": "Grande unification",
          "paragraphText": "En 1924, le physicien français Louis de Broglie généralise la dualité onde-corpuscule en postulant que toute particule matérielle en mouvement (comme un électron ou un neutron) possède également une onde de matière associée dont la longueur d'onde est donnée par la relation : lambda_{dB} = h / p = h / (m.v). De la même manière que la lumière ondule lors de sa propagation (diffraction) et corpuscule lors de ses échanges (effet photoélectrique), des faisceaux d'électrons accélérés produisent des figures de diffraction à travers des réseaux cristallins (microscope électronique).",
          "exercise": {
            "id": "phys_tle_cd_15_p6_s6_qcm",
            "type": "mcq",
            "prompt": "Quelle est la longueur d'onde de de Broglie associée à un électron accéléré à la vitesse v = 1,0.10⁶ m/s ? (m_e = 9,11.10⁻³¹ kg ; h = 6,63.10⁻³⁴ J.s)",
            "options": [
              "0,728 nm (7,28.10⁻¹⁰ m)",
              "7,28 nm",
              "0,0728 nm",
              "72,8 nm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "lambda = h / (m_e * v) = 6,63.10⁻³⁴ / (9,11.10⁻³¹ * 1,0.10⁶) = 6,63.10⁻³⁴ / 9,11.10⁻²⁵ ≈ 7,28.10⁻¹⁰ m = 0,728 nm. Cette longueur d'onde est du même ordre que la distance interatomique dans un cristal, ce qui permet la diffraction électronique."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Bilan global de l'optique ondulatoire et synthèse finale",
          "stepTheme": "Synthèse générale",
          "stepBadge": "Récapitulatif de fin de leçon",
          "paragraphText": "La diffraction et les interférences démontrent sans équivoque la nature ondulatoire de la lumière. L'écart angulaire de diffraction theta = lambda / a et l'interfrange d'Young i = lambda.D / a fournissent des outils métrologiques d'une précision inégalée pour mesurer des longueurs d'onde nanométriques ou des structures micrométriques. Conjugué au modèle corpusculaire du photon, le modèle ondulatoire de Maxwell forme la vision moderne complète de la lumière, pierre angulaire de toutes les télécommunications et technologies optoélectroniques.",
          "exercise": {
            "id": "phys_tle_cd_15_p6_s7_qcm",
            "type": "mcq",
            "prompt": "Quel ensemble de phénomènes optiques suffit à prouver de manière irréfutable que la lumière se comporte comme une onde lors de sa propagation spatiale ?",
            "options": [
              "La réflexion sur un miroir plan et la réfraction selon les lois de Snell-Descartes",
              "L'effet photoélectrique et les spectres de raies de Bohr",
              "La diffraction par une fente étroite et la formation de franges d'interférences avec les fentes d'Young",
              "L'absorption et l'émission spontanée de photons"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La diffraction et les interférences lumineuses sont les deux manifestations indiscutables du comportement ondulatoire, car elles résultent directement de la superposition de phases et ne peuvent en aucun cas s'expliquer par une cinématique corpusculaire classique."
          }
        }
      ],
      "exercises": [
        {
          "id": "phys_tle_cd_15_p6_s1_qcm",
          "type": "mcq",
          "prompt": "Dans une onde électromagnétique se propageant dans le vide, quelle relation lie l'amplitude du champ électrique E_m à celle du champ magnétique B_m ?",
          "options": [
            "E_m = B_m",
            "E_m = c * B_m",
            "B_m = c * E_m",
            "E_m = B_m / (2 * pi)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après les équations de Maxwell dans le vide, les amplitudes sont reliées par la célérité c de la lumière : E_m = c * B_m (avec E en V/m, B en Tesla et c en m/s)."
        },
        {
          "id": "phys_tle_cd_15_p6_s2_qcm",
          "type": "mcq",
          "prompt": "Combien de temps met un signal radioélectrique émis depuis la Terre pour atteindre un robot explorateur situé sur Mars à une distance d = 1,5.10⁸ km ?",
          "options": [
            "5 secondes",
            "50 secondes",
            "500 secondes (8 minutes 20 secondes)",
            "5 000 secondes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "d = 1,5.10⁸ km = 1,5.10¹¹ m. Le temps de parcours à la vitesse de la lumière est t = d / c = 1,5.10¹¹ m / (3,00.10⁸ m/s) = 500 secondes, soit 8 minutes et 20 secondes."
        },
        {
          "id": "phys_tle_cd_15_p6_s3_qcm",
          "type": "mcq",
          "prompt": "Une station radio émet sur la bande FM à la fréquence nu = 98,5 MHz. Quelle est la longueur d'onde lambda de cette onde dans l'air ?",
          "options": [
            "30,5 cm",
            "3,05 m",
            "30,5 m",
            "305 m"
          ],
          "correctAnswerIndex": 1,
          "explanation": "lambda = c / nu = (3,00.10⁸ m/s) / (98,5.10⁶ s⁻¹) ≈ 3,046 m ≈ 3,05 m."
        },
        {
          "id": "phys_tle_cd_15_p6_s4_qcm",
          "type": "mcq",
          "prompt": "Dans le vide spatial interstellaire, laquelle de ces deux ondes peut se propager ?",
          "options": [
            "Le son produit par l'explosion d'une étoile",
            "La lumière et les ondes radio émises par l'explosion de l'étoile",
            "Les deux ondes se propagent à la même vitesse",
            "Aucune des deux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le son étant une onde mécanique nécessitant un support matériel élastique (molécules d'air), il ne se propage absolument pas dans le vide. La lumière et les ondes radio sont électromagnétiques et se propagent librement dans le vide à la vitesse c."
        },
        {
          "id": "phys_tle_cd_15_p6_s5_qcm",
          "type": "mcq",
          "prompt": "Pourquoi les ondes Wi-Fi (2,4 GHz) et la lumière d'une lampe de salon ne peuvent-elles en aucun cas provoquer de mutations génétiques radio-induites dans les cellules vivantes ?",
          "options": [
            "Parce que leur intensité lumineuse est nulle",
            "Parce que l'énergie individuelle de chaque photon (micro-eV ou quelques eV) est bien inférieure au seuil d'ionisation des atomes (~10 eV)",
            "Parce qu'elles se propagent en ligne courbe",
            "Parce qu'elles sont détruites par l'oxygène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'effet mutagène ou ionisant dépend exclusivement de l'énergie d'un photon individuel E = h.nu. Pour le Wi-Fi (E ~ 10 µeV) ou le visible (E ~ 2 à 3 eV), les photons sont incapables d'ioniser un atome ou de casser une liaison covalente de l'ADN."
        },
        {
          "id": "phys_tle_cd_15_p6_s6_qcm",
          "type": "mcq",
          "prompt": "Quelle est la longueur d'onde de de Broglie associée à un électron accéléré à la vitesse v = 1,0.10⁶ m/s ? (m_e = 9,11.10⁻³¹ kg ; h = 6,63.10⁻³⁴ J.s)",
          "options": [
            "0,728 nm (7,28.10⁻¹⁰ m)",
            "7,28 nm",
            "0,0728 nm",
            "72,8 nm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "lambda = h / (m_e * v) = 6,63.10⁻³⁴ / (9,11.10⁻³¹ * 1,0.10⁶) = 6,63.10⁻³⁴ / 9,11.10⁻²⁵ ≈ 7,28.10⁻¹⁰ m = 0,728 nm. Cette longueur d'onde est du même ordre que la distance interatomique dans un cristal, ce qui permet la diffraction électronique."
        },
        {
          "id": "phys_tle_cd_15_p6_s7_qcm",
          "type": "mcq",
          "prompt": "Quel ensemble de phénomènes optiques suffit à prouver de manière irréfutable que la lumière se comporte comme une onde lors de sa propagation spatiale ?",
          "options": [
            "La réflexion sur un miroir plan et la réfraction selon les lois de Snell-Descartes",
            "L'effet photoélectrique et les spectres de raies de Bohr",
            "La diffraction par une fente étroite et la formation de franges d'interférences avec les fentes d'Young",
            "L'absorption et l'émission spontanée de photons"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La diffraction et les interférences lumineuses sont les deux manifestations indiscutables du comportement ondulatoire, car elles résultent directement de la superposition de phases et ne peuvent en aucun cas s'expliquer par une cinématique corpusculaire classique."
        }
      ]
    }
  ],
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ]
};
