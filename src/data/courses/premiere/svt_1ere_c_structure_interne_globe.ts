import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 1 : La structure interne du globe terrestre » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=941
export const SVT_1ERE_C_L01_STRUCTURE_INTERNE_GLOBE: CurriculumChapter = {
  "id": "premiere_c_svt_l01_structure_interne_globe_terrestre",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 1,
  "title": "Leçon 1 : La structure interne du globe terrestre",
  "summary": "On détermine les caractéristiques des ondes sismiques et on explique leur propagation afin de déduire la structure interne de la Terre : croûte, manteau et noyau, séparés par des discontinuités.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=941",
  "points": [
    {
      "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p01",
      "order": 1,
      "title": "Les conséquences des activités internes du globe",
      "summary": "Les séismes et les volcans manifestent les activités internes et provoquent des conséquences sur les êtres vivants, les infrastructures et l’environnement.",
      "conceptExplanation": "Les activités internes du globe terrestre se manifestent par des séismes et des volcans.\nElles provoquent diverses conséquences au niveau des êtres vivants (pertes en vies humaines, animales et végétales), au niveau des infrastructures (routes, habitations) et au niveau de l’environnement (raz de marée, pollution de l’air).\nAu cours d’une éruption volcanique, trois types de produits sont rejetés : les produits solides (cendres et bombes volcaniques), les produits liquides (coulées de laves) et les produits gazeux (fumerolles).",
      "keyRule": "Les produits volcaniques sont solides, liquides et gazeux, et les séismes détruisent habitations et routes.",
      "formulas": [],
      "workedExample": {
        "title": "Les images des conséquences des séismes et volcans",
        "statement": "On observe à l’œil nu des images montrant les conséquences des séismes et des volcans. Que constate-t-on ?",
        "methodSteps": [
          "Image 1 : destruction d’habitations et image 2 : destruction des routes.",
          "Image 3 : rejet de cendres volcaniques, de bombes volcaniques, de fumerolles et de coulées de laves.",
          "On en déduit que les activités internes ont des conséquences sur les êtres vivants, les infrastructures et l’environnement."
        ],
        "conclusion": "Les manifestations internes du globe ont des conséquences visibles en surface."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Séismes et volcans, manifestations internes",
          "stepTheme": "Séismes et volcans, manifestations internes",
          "stepBadge": "Séismes et volcans, manifestations internes",
          "paragraphText": "• Séisme et volcan : manifestations des activités internes du globe terrestre.\nLeurs conséquences s’observent à l’œil nu sur les images du résumé.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p01_q1",
            "type": "mcq",
            "prompt": "Les activités internes du globe se manifestent notamment par :",
            "options": [
              "Les séismes et les volcans",
              "Uniquement la pluie et le vent",
              "La seule érosion des rivières",
              "La rotation de la Lune"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé part de l’observation des conséquences des séismes et des volcans."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les dégâts sur les infrastructures",
          "stepTheme": "Les dégâts sur les infrastructures",
          "stepBadge": "Les dégâts sur les infrastructures",
          "paragraphText": "Les séismes détruisent les habitations et les routes.\nCes dégâts touchent les infrastructures construites par l’homme.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p01_q2",
            "type": "mcq",
            "prompt": "Sur les images, les séismes provoquent :",
            "options": [
              "La croissance des forêts",
              "L’augmentation des récoltes",
              "La destruction d’habitations et de routes",
              "La formation de nouvelles routes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les résultats listent destruction d’habitations (image 1) et destruction des routes (image 2)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les trois produits d’une éruption",
          "stepTheme": "Les trois produits d’une éruption",
          "stepBadge": "Les trois produits d’une éruption",
          "paragraphText": "Au cours de l’éruption volcanique, trois types de produits sont rejetés.\nCe sont les produits solides, les produits liquides et les produits gazeux.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p01_q3",
            "type": "mcq",
            "prompt": "Les fumerolles rejetées par un volcan sont des produits :",
            "options": [
              "Minéraux cristallisés",
              "Gazeux",
              "Solides",
              "Liquides"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé classe les fumerolles parmi les produits gazeux, avec les cendres et bombes en solides et les coulées de laves en liquides."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les coulées de laves, produits liquides",
          "stepTheme": "Les coulées de laves, produits liquides",
          "stepBadge": "Les coulées de laves, produits liquides",
          "paragraphText": "• Coulée de laves : produit liquide rejeté lors d’une éruption volcanique.\nLes bombes volcaniques et les cendres sont, elles, des produits solides.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p01_q4",
            "type": "mcq",
            "prompt": "Les coulées de laves correspondent aux produits :",
            "options": [
              "Gazeux",
              "Solides",
              "Aqueux de pluie",
              "Liquides"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’analyse du résumé dit : produits liquides (coulée de laves)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les conséquences sur l’environnement",
          "stepTheme": "Les conséquences sur l’environnement",
          "stepBadge": "Les conséquences sur l’environnement",
          "paragraphText": "Piège : les conséquences ne touchent pas que les habitations.\nElles concernent aussi l’environnement, avec les raz de marée et la pollution de l’air.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p01_q5",
            "type": "mcq",
            "prompt": "Parmi les conséquences citées sur l’environnement, on trouve :",
            "options": [
              "La baisse des marées seulement",
              "L’assèchement des puits",
              "Le raz de marée et la pollution de l’air",
              "La fonte des neiges uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé cite, pour l’environnement, raz de marée et pollution de l’air."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les pertes en vies",
          "stepTheme": "Les pertes en vies",
          "stepBadge": "Les pertes en vies",
          "paragraphText": "Exemple des conséquences sur les êtres vivants : pertes en vies humaines, animales et végétales.\nCes pertes s’ajoutent aux dégâts matériels.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p01_q6",
            "type": "mcq",
            "prompt": "Les activités internes peuvent provoquer des pertes :",
            "options": [
              "En vies humaines, animales et végétales",
              "Aucune perte",
              "Uniquement matérielles",
              "Uniquement végétales"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’analyse mentionne les pertes en vie humaine, animale et végétale."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p01_q1",
          "type": "mcq",
          "prompt": "Les activités internes du globe se manifestent notamment par :",
          "options": [
            "Les séismes et les volcans",
            "Uniquement la pluie et le vent",
            "La seule érosion des rivières",
            "La rotation de la Lune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé part de l’observation des conséquences des séismes et des volcans."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p01_q2",
          "type": "mcq",
          "prompt": "Sur les images, les séismes provoquent :",
          "options": [
            "La croissance des forêts",
            "L’augmentation des récoltes",
            "La destruction d’habitations et de routes",
            "La formation de nouvelles routes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les résultats listent destruction d’habitations (image 1) et destruction des routes (image 2)."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p01_q3",
          "type": "mcq",
          "prompt": "Les fumerolles rejetées par un volcan sont des produits :",
          "options": [
            "Minéraux cristallisés",
            "Gazeux",
            "Solides",
            "Liquides"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé classe les fumerolles parmi les produits gazeux, avec les cendres et bombes en solides et les coulées de laves en liquides."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p01_q4",
          "type": "mcq",
          "prompt": "Les coulées de laves correspondent aux produits :",
          "options": [
            "Gazeux",
            "Solides",
            "Aqueux de pluie",
            "Liquides"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’analyse du résumé dit : produits liquides (coulée de laves)."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p01_q5",
          "type": "mcq",
          "prompt": "Parmi les conséquences citées sur l’environnement, on trouve :",
          "options": [
            "La baisse des marées seulement",
            "L’assèchement des puits",
            "Le raz de marée et la pollution de l’air",
            "La fonte des neiges uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé cite, pour l’environnement, raz de marée et pollution de l’air."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p01_q6",
          "type": "mcq",
          "prompt": "Les activités internes peuvent provoquer des pertes :",
          "options": [
            "En vies humaines, animales et végétales",
            "Aucune perte",
            "Uniquement matérielles",
            "Uniquement végétales"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’analyse mentionne les pertes en vie humaine, animale et végétale."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p02",
      "order": 2,
      "title": "Les caractéristiques des ondes sismiques P, S et L",
      "summary": "Le sismogramme présente trois ondes d’amplitudes et de durées différentes : P, rapide et de compression, S, de cisaillement dans les solides, et L, lente et superficielle.",
      "conceptExplanation": "À la suite d’une explosion, des chercheurs enregistrent les ondes sismiques à l’aide d’un sismographe et obtiennent un sismogramme présentant l’onde P, l’onde S et l’onde L.\nL’onde P ou onde primaire est de faible amplitude et de durée courte : c’est la première enregistrée, la plus rapide ; elle se propage dans les milieux solides et liquides et c’est une onde de compression, qui déplace les particules dans le même sens que sa propagation.\nL’onde S ou onde secondaire est de moyenne amplitude, moins rapide, enregistrée après l’onde P ; elle ne se propage que dans le milieu solide et c’est une onde de cisaillement, qui déplace les particules perpendiculairement à son sens de propagation.\nL’onde L ou onde longue est de grande amplitude, très lente, enregistrée en dernier ; elle se propage dans les couches superficielles et c’est une onde de torsion (compression et cisaillement).",
      "keyRule": "L’ordre d’arrivée est P puis S puis L : P est la plus rapide, L la plus lente et superficielle.",
      "formulas": [],
      "workedExample": {
        "title": "Du foyer à l’épicentre",
        "statement": "Un séisme naît à l’intérieur de la Terre. Nomme le lieu de naissance et le lieu en surface à la verticale.",
        "methodSteps": [
          "Les ondes naissent au foyer ou hypocentre, lieu précis du relâchement brutal des tensions.",
          "Le lieu en surface à la verticale de l’hypocentre est l’épicentre, où l’intensité est la plus élevée.",
          "L’énergie libérée est la magnitude, mesurée sur l’échelle de Richter."
        ],
        "conclusion": "Foyer en profondeur et épicentre en surface sont deux lieux à ne pas confondre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le sismogramme et ses trois ondes",
          "stepTheme": "Le sismogramme et ses trois ondes",
          "stepBadge": "Le sismogramme et ses trois ondes",
          "paragraphText": "• Sismogramme : enregistrement des ondes émises par un séisme, obtenu avec un sismographe.\nIl présente les ondes P, S et L, d’amplitudes et de durées différentes.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p02_q1",
            "type": "mcq",
            "prompt": "Le sismogramme est :",
            "options": [
              "La définition d’une faille",
              "Une force d’extension",
              "La rupture d’une roche",
              "L’enregistrement des ondes émises par un séisme"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’activité d’application associe sismogramme à enregistrement des ondes émises par un séisme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’onde P, onde de compression",
          "stepTheme": "L’onde P, onde de compression",
          "stepBadge": "L’onde P, onde de compression",
          "paragraphText": "L’onde P est la première enregistrée et la plus rapide.\nElle se propage dans les solides et les liquides et déplace les particules dans le même sens que sa propagation : c’est une onde de compression.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p02_q2",
            "type": "mcq",
            "prompt": "L’onde P se propage :",
            "options": [
              "Uniquement dans les liquides",
              "Dans les milieux solides et liquides",
              "Uniquement en surface",
              "Uniquement dans les solides"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation du résumé précise que les ondes P se propagent dans les milieux solides et liquides."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’onde S, onde de cisaillement",
          "stepTheme": "L’onde S, onde de cisaillement",
          "stepBadge": "L’onde S, onde de cisaillement",
          "paragraphText": "L’onde S est enregistrée après l’onde P et elle est moins rapide.\nElle déplace les particules perpendiculairement à son sens de propagation : c’est une onde de cisaillement.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p02_q3",
            "type": "mcq",
            "prompt": "L’onde S déplace les particules :",
            "options": [
              "Perpendiculairement à son sens de propagation",
              "Sans aucun déplacement",
              "Dans le même sens que sa propagation",
              "Uniquement vers le haut"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé définit les ondes S comme des ondes de cisaillement, perpendiculaires au sens de propagation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L’onde L, onde superficielle",
          "stepTheme": "L’onde L, onde superficielle",
          "stepBadge": "L’onde L, onde superficielle",
          "paragraphText": "• Onde L : onde longue, de grande amplitude et de durée longue, enregistrée en dernier.\nElle se propage dans les couches superficielles de la Terre et c’est une onde de torsion.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p02_q4",
            "type": "mcq",
            "prompt": "Les ondes L se propagent :",
            "options": [
              "Uniquement dans le noyau",
              "Uniquement dans les liquides",
              "Dans les couches superficielles de la Terre",
              "Plus vite que les ondes P"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé indique que les ondes L, très lentes et dernières enregistrées, se propagent dans les couches superficielles."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Foyer et épicentre",
          "stepTheme": "Foyer et épicentre",
          "stepBadge": "Foyer et épicentre",
          "paragraphText": "Piège : le foyer n’est pas en surface.\nLe foyer ou hypocentre est en profondeur, l’épicentre est en surface, à sa verticale, là où l’intensité est la plus élevée.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p02_q5",
            "type": "mcq",
            "prompt": "L’épicentre est :",
            "options": [
              "L’appareil qui enregistre les ondes",
              "La zone en surface où l’intensité du séisme est plus élevée",
              "L’échelle de mesure de la magnitude",
              "Le lieu profond où naissent les ondes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé définit l’épicentre comme le lieu en surface le plus proche de l’hypocentre, où l’intensité est plus élevée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La magnitude et l’échelle de Richter",
          "stepTheme": "La magnitude et l’échelle de Richter",
          "stepBadge": "La magnitude et l’échelle de Richter",
          "paragraphText": "Exemple de mesure : l’intensité ou l’énergie libérée par un séisme est la magnitude.\nElle se calcule en fonction de l’amplitude maximale des secousses et se mesure à partir de l’échelle de Richter.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p02_q6",
            "type": "mcq",
            "prompt": "La magnitude d’un séisme se mesure à partir de :",
            "options": [
              "Le nombre d’habitations détruites",
              "L’échelle des températures",
              "La profondeur du foyer seule",
              "L’échelle de Richter"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé dit que la magnitude peut être mesurée à partir de l’échelle de Richter."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p02_q1",
          "type": "mcq",
          "prompt": "Le sismogramme est :",
          "options": [
            "La définition d’une faille",
            "Une force d’extension",
            "La rupture d’une roche",
            "L’enregistrement des ondes émises par un séisme"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’activité d’application associe sismogramme à enregistrement des ondes émises par un séisme."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p02_q2",
          "type": "mcq",
          "prompt": "L’onde P se propage :",
          "options": [
            "Uniquement dans les liquides",
            "Dans les milieux solides et liquides",
            "Uniquement en surface",
            "Uniquement dans les solides"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation du résumé précise que les ondes P se propagent dans les milieux solides et liquides."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p02_q3",
          "type": "mcq",
          "prompt": "L’onde S déplace les particules :",
          "options": [
            "Perpendiculairement à son sens de propagation",
            "Sans aucun déplacement",
            "Dans le même sens que sa propagation",
            "Uniquement vers le haut"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé définit les ondes S comme des ondes de cisaillement, perpendiculaires au sens de propagation."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p02_q4",
          "type": "mcq",
          "prompt": "Les ondes L se propagent :",
          "options": [
            "Uniquement dans le noyau",
            "Uniquement dans les liquides",
            "Dans les couches superficielles de la Terre",
            "Plus vite que les ondes P"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé indique que les ondes L, très lentes et dernières enregistrées, se propagent dans les couches superficielles."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p02_q5",
          "type": "mcq",
          "prompt": "L’épicentre est :",
          "options": [
            "L’appareil qui enregistre les ondes",
            "La zone en surface où l’intensité du séisme est plus élevée",
            "L’échelle de mesure de la magnitude",
            "Le lieu profond où naissent les ondes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé définit l’épicentre comme le lieu en surface le plus proche de l’hypocentre, où l’intensité est plus élevée."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p02_q6",
          "type": "mcq",
          "prompt": "La magnitude d’un séisme se mesure à partir de :",
          "options": [
            "Le nombre d’habitations détruites",
            "L’échelle des températures",
            "La profondeur du foyer seule",
            "L’échelle de Richter"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé dit que la magnitude peut être mesurée à partir de l’échelle de Richter."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p03",
      "order": 3,
      "title": "La propagation des ondes et les hodographes",
      "summary": "Les hodographes montrent que la vitesse des ondes dépend de la nature du milieu traversé : constante pour L dans un milieu homogène, variable pour P et S dans des milieux de plus en plus denses.",
      "conceptExplanation": "Expérience 1 : on mesure le temps de propagation des ondes en fonction de la distance à l’épicentre ; les courbes obtenues sont des hodographes.\nL’hodographe de l’onde L est une droite : sa vitesse de propagation est constante, car ces ondes se propagent dans un milieu homogène ; les couches superficielles du globe sont donc homogènes.\nLes hodographes des ondes P et S sont curvilignes : leur vitesse augmente lorsque la distance épicentrale augmente, ce qui indique des milieux hétérogènes, de plus en plus denses en profondeur.\nLa vitesse de propagation des ondes sismiques dépend donc de la nature du milieu traversé.",
      "keyRule": "Une vitesse constante signale un milieu homogène ; une vitesse qui augmente signale des milieux de plus en plus denses.",
      "formulas": [],
      "workedExample": {
        "title": "Lire les hodographes P, S et L",
        "statement": "On donne les hodographes des trois ondes. Comment distinguer le comportement de L de celui de P et S ?",
        "methodSteps": [
          "L’hodographe de L est une droite, donc vitesse constante.",
          "Les hodographes de P et S sont curvilignes, donc vitesse variable qui augmente.",
          "On conclut à des milieux différents selon la profondeur."
        ],
        "conclusion": "La forme de l’hodographe renseigne sur l’homogénéité du milieu traversé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d’un hodographe",
          "stepTheme": "Définition d’un hodographe",
          "stepBadge": "Définition d’un hodographe",
          "paragraphText": "• Hodographe : courbe qui traduit la vitesse de propagation des ondes sismiques en fonction de la distance à l’épicentre.\nL’expérience 1 construit les hodographes des ondes P, S et L.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p03_q1",
            "type": "mcq",
            "prompt": "Un hodographe traduit :",
            "options": [
              "La température du milieu",
              "La magnitude du séisme",
              "La vitesse de propagation des ondes en fonction de la distance épicentrale",
              "La composition chimique des roches"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les résultats de l’expérience 1 disent que les courbes sont des hodographes traduisant la vitesse de propagation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’hodographe droit de l’onde L",
          "stepTheme": "L’hodographe droit de l’onde L",
          "stepBadge": "L’hodographe droit de l’onde L",
          "paragraphText": "L’hodographe de l’onde L est une droite.\nSa vitesse de propagation est donc constante.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p03_q2",
            "type": "mcq",
            "prompt": "Si l’hodographe est une droite, la vitesse est :",
            "options": [
              "Constante",
              "Décroissante",
              "Nulle",
              "Croissante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’analyse de l’expérience 1 associe hodographe droit et vitesse constante pour l’onde L."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les hodographes curvilignes de P et S",
          "stepTheme": "Les hodographes curvilignes de P et S",
          "stepBadge": "Les hodographes curvilignes de P et S",
          "paragraphText": "Les hodographes des ondes P et S sont curvilignes.\nLeur vitesse augmente lorsque la distance épicentrale augmente.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p03_q3",
            "type": "mcq",
            "prompt": "Pour les ondes P et S, la vitesse :",
            "options": [
              "Ne dépend pas du milieu",
              "Diminue avec la distance",
              "Reste nulle",
              "Augmente lorsque la distance épicentrale augmente"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est l’analyse exacte de l’expérience 1 dans le résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Milieu homogène et milieu hétérogène",
          "stepTheme": "Milieu homogène et milieu hétérogène",
          "stepBadge": "Milieu homogène et milieu hétérogène",
          "paragraphText": "• Milieu homogène : milieu qui a les mêmes propriétés physiques.\n• Milieu hétérogène : milieu qui n’a pas les mêmes propriétés physiques.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p03_q4",
            "type": "mcq",
            "prompt": "La constance de la vitesse des ondes L s’explique parce qu’elles se propagent dans :",
            "options": [
              "Un milieu liquide",
              "Un milieu homogène",
              "Le noyau interne",
              "Un milieu vide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation indique que les couches superficielles, homogènes, donnent une vitesse constante aux ondes L."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La vitesse dépend du milieu",
          "stepTheme": "La vitesse dépend du milieu",
          "stepBadge": "La vitesse dépend du milieu",
          "paragraphText": "Piège : la vitesse des ondes n’est pas une constante universelle.\nElle dépend de la nature du milieu traversé et augmente dans des milieux de plus en plus denses.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p03_q5",
            "type": "mcq",
            "prompt": "L’augmentation des vitesses de P et S montre que les milieux traversés sont :",
            "options": [
              "De plus en plus denses",
              "Toujours liquides",
              "Sans aucune propriété physique",
              "De moins en moins denses"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’interprétation conclut que des vitesses croissantes signalent des milieux de plus en plus denses."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les couches superficielles homogènes",
          "stepTheme": "Les couches superficielles homogènes",
          "stepBadge": "Les couches superficielles homogènes",
          "paragraphText": "Exemple : les ondes L restent en surface et gardent une vitesse constante.\nCela révèle que les couches superficielles du globe terrestre sont homogènes.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p03_q6",
            "type": "mcq",
            "prompt": "Les couches superficielles du globe sont :",
            "options": [
              "Sans roches",
              "Hétérogènes",
              "Homogènes",
              "Liquides"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé déduit l’homogénéité des couches superficielles de la constance de la vitesse des ondes L."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p03_q1",
          "type": "mcq",
          "prompt": "Un hodographe traduit :",
          "options": [
            "La température du milieu",
            "La magnitude du séisme",
            "La vitesse de propagation des ondes en fonction de la distance épicentrale",
            "La composition chimique des roches"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les résultats de l’expérience 1 disent que les courbes sont des hodographes traduisant la vitesse de propagation."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p03_q2",
          "type": "mcq",
          "prompt": "Si l’hodographe est une droite, la vitesse est :",
          "options": [
            "Constante",
            "Décroissante",
            "Nulle",
            "Croissante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’analyse de l’expérience 1 associe hodographe droit et vitesse constante pour l’onde L."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p03_q3",
          "type": "mcq",
          "prompt": "Pour les ondes P et S, la vitesse :",
          "options": [
            "Ne dépend pas du milieu",
            "Diminue avec la distance",
            "Reste nulle",
            "Augmente lorsque la distance épicentrale augmente"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est l’analyse exacte de l’expérience 1 dans le résumé."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p03_q4",
          "type": "mcq",
          "prompt": "La constance de la vitesse des ondes L s’explique parce qu’elles se propagent dans :",
          "options": [
            "Un milieu liquide",
            "Un milieu homogène",
            "Le noyau interne",
            "Un milieu vide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation indique que les couches superficielles, homogènes, donnent une vitesse constante aux ondes L."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p03_q5",
          "type": "mcq",
          "prompt": "L’augmentation des vitesses de P et S montre que les milieux traversés sont :",
          "options": [
            "De plus en plus denses",
            "Toujours liquides",
            "Sans aucune propriété physique",
            "De moins en moins denses"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’interprétation conclut que des vitesses croissantes signalent des milieux de plus en plus denses."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p03_q6",
          "type": "mcq",
          "prompt": "Les couches superficielles du globe sont :",
          "options": [
            "Sans roches",
            "Hétérogènes",
            "Homogènes",
            "Liquides"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé déduit l’homogénéité des couches superficielles de la constance de la vitesse des ondes L."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p04",
      "order": 4,
      "title": "Croûte, discontinuité de Mohorovicic et manteau",
      "summary": "La chute de vitesse à 70 km marque la discontinuité de Mohorovicic, entre la croûte et le manteau, lui-même divisé en manteau supérieur (avec lithosphère et asthénosphère) et manteau inférieur solide jusqu’à 2900 km.",
      "conceptExplanation": "De 0 à 70 km de profondeur, la vitesse des ondes P et S augmente rapidement : elles traversent une couche de plus en plus dense appelée la croûte ou écorce terrestre, épaisse de 70 km sous les continents et de 6 à 7 km sous les océans.\nÀ 70 km, la vitesse chute brutalement : les ondes traversent une nouvelle couche moins dense ; la limite est la discontinuité de Mohorovicic.\nDe 70 km à 2900 km, la vitesse augmente progressivement en deux temps : c’est le manteau, subdivisé en manteau supérieur (de 70 km à 750 km), dont une petite partie supérieure forme avec la croûte la lithosphère et dont la partie inférieure visqueuse est l’asthénosphère, et en manteau inférieur ou mésosphère (de 750 km à 2900 km), qui est solide.",
      "keyRule": "À 70 km : discontinuité de Mohorovicic ; en dessous, le manteau va jusqu’à 2900 km.",
      "formulas": [],
      "workedExample": {
        "title": "Annoter la structure jusqu’au manteau",
        "statement": "Sur le schéma de structure, identifie la croûte, le manteau et la première discontinuité.",
        "methodSteps": [
          "La croûte est la couche superficielle, continentale et océanique.",
          "La discontinuité de Mohorovicic la sépare du manteau.",
          "Le manteau comprend le manteau supérieur puis le manteau inférieur."
        ],
        "conclusion": "La première grande limite interne est la discontinuité de Mohorovicic."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La croûte terrestre",
          "stepTheme": "La croûte terrestre",
          "stepBadge": "La croûte terrestre",
          "paragraphText": "• Croûte ou écorce terrestre : première couche traversée par les ondes, de plus en plus dense de 0 à 70 km.\nElle mesure 70 km sous les continents et 6 à 7 km sous les océans.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p04_q1",
            "type": "mcq",
            "prompt": "L’épaisseur de la croûte sous les océans est de :",
            "options": [
              "70 km",
              "6 à 7 km",
              "2900 km",
              "5100 km"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation donne 70 km sous les continents et 6 à 7 km sous les océans."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La chute de vitesse à 70 km",
          "stepTheme": "La chute de vitesse à 70 km",
          "stepBadge": "La chute de vitesse à 70 km",
          "paragraphText": "À 70 km de profondeur, la vitesse des ondes P et S chute brutalement.\nCette chute signale le passage dans une couche de nature différente et moins dense.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p04_q2",
            "type": "mcq",
            "prompt": "À 70 km, la vitesse des ondes P et S :",
            "options": [
              "Reste exactement constante",
              "S’inverse",
              "Devient infinie",
              "Chute brutalement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le résultat de l’expérience 2 relevé dans le résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La discontinuité de Mohorovicic",
          "stepTheme": "La discontinuité de Mohorovicic",
          "stepBadge": "La discontinuité de Mohorovicic",
          "paragraphText": "• Discontinuité de Mohorovicic : limite entre la croûte terrestre et le manteau, à 70 km de profondeur.\nElle est révélée par la chute brutale de vitesse.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p04_q3",
            "type": "mcq",
            "prompt": "La discontinuité de Mohorovicic sépare :",
            "options": [
              "Le manteau supérieur et l’asthénosphère seulement",
              "Le noyau externe et le noyau interne",
              "La croûte et le manteau",
              "Les deux hémisphères"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé nomme Mohorovicic la limite entre la croûte et la couche suivante, le manteau."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le manteau supérieur et la lithosphère",
          "stepTheme": "Le manteau supérieur et la lithosphère",
          "stepBadge": "Le manteau supérieur et la lithosphère",
          "paragraphText": "Le manteau supérieur va de 70 km à 750 km.\nUne petite partie supérieure du manteau supérieur forme avec la croûte la lithosphère, et sa partie inférieure visqueuse est l’asthénosphère.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p04_q4",
            "type": "mcq",
            "prompt": "La lithosphère est formée par :",
            "options": [
              "La croûte et une petite partie supérieure du manteau supérieur",
              "Le noyau et le manteau inférieur",
              "La croûte seule sans manteau",
              "Uniquement l’asthénosphère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé définit la lithosphère comme l’ensemble croûte plus petite partie supérieure du manteau supérieur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L’asthénosphère n’est pas la lithosphère",
          "stepTheme": "L’asthénosphère n’est pas la lithosphère",
          "stepBadge": "L’asthénosphère n’est pas la lithosphère",
          "paragraphText": "Piège : confondre les deux parties du manteau supérieur.\nLa lithosphère est rigide et superficielle ; l’asthénosphère est la partie inférieure visqueuse du manteau supérieur.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p04_q5",
            "type": "mcq",
            "prompt": "L’asthénosphère correspond à :",
            "options": [
              "Le noyau interne solide",
              "La discontinuité de Gutenberg",
              "La croûte océanique",
              "La partie inférieure visqueuse du manteau supérieur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé décrit l’asthénosphère comme la partie inférieure visqueuse du manteau supérieur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le manteau inférieur ou mésosphère",
          "stepTheme": "Le manteau inférieur ou mésosphère",
          "stepBadge": "Le manteau inférieur ou mésosphère",
          "paragraphText": "Exemple de sous-couche profonde : le manteau inférieur, ou mésosphère, va de 750 km à 2900 km.\nLe résumé précise qu’il est solide.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p04_q6",
            "type": "mcq",
            "prompt": "Le manteau inférieur s’étend de :",
            "options": [
              "5100 km au centre",
              "750 km à 2900 km",
              "0 à 70 km",
              "2900 km à 5100 km"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les bornes 750 km et 2900 km sont celles du manteau inférieur dans le résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p04_q1",
          "type": "mcq",
          "prompt": "L’épaisseur de la croûte sous les océans est de :",
          "options": [
            "70 km",
            "6 à 7 km",
            "2900 km",
            "5100 km"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation donne 70 km sous les continents et 6 à 7 km sous les océans."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p04_q2",
          "type": "mcq",
          "prompt": "À 70 km, la vitesse des ondes P et S :",
          "options": [
            "Reste exactement constante",
            "S’inverse",
            "Devient infinie",
            "Chute brutalement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le résultat de l’expérience 2 relevé dans le résumé."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p04_q3",
          "type": "mcq",
          "prompt": "La discontinuité de Mohorovicic sépare :",
          "options": [
            "Le manteau supérieur et l’asthénosphère seulement",
            "Le noyau externe et le noyau interne",
            "La croûte et le manteau",
            "Les deux hémisphères"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé nomme Mohorovicic la limite entre la croûte et la couche suivante, le manteau."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p04_q4",
          "type": "mcq",
          "prompt": "La lithosphère est formée par :",
          "options": [
            "La croûte et une petite partie supérieure du manteau supérieur",
            "Le noyau et le manteau inférieur",
            "La croûte seule sans manteau",
            "Uniquement l’asthénosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé définit la lithosphère comme l’ensemble croûte plus petite partie supérieure du manteau supérieur."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p04_q5",
          "type": "mcq",
          "prompt": "L’asthénosphère correspond à :",
          "options": [
            "Le noyau interne solide",
            "La discontinuité de Gutenberg",
            "La croûte océanique",
            "La partie inférieure visqueuse du manteau supérieur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé décrit l’asthénosphère comme la partie inférieure visqueuse du manteau supérieur."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p04_q6",
          "type": "mcq",
          "prompt": "Le manteau inférieur s’étend de :",
          "options": [
            "5100 km au centre",
            "750 km à 2900 km",
            "0 à 70 km",
            "2900 km à 5100 km"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les bornes 750 km et 2900 km sont celles du manteau inférieur dans le résumé."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p05",
      "order": 5,
      "title": "Le noyau : discontinuité de Gutenberg, noyau externe liquide et graine solide",
      "summary": "À 2900 km, la discontinuité de Gutenberg sépare le manteau du noyau externe liquide, où les ondes S disparaissent ; à 5100 km, la discontinuité de Lehmann précède le noyau interne solide, où les ondes S réapparaissent.",
      "conceptExplanation": "À 2900 km de profondeur, la vitesse des ondes P chute brutalement (elle passe d’environ 14 km par seconde à environ 8 km par seconde) tandis que celle des ondes S s’annule : c’est la discontinuité de Gutenberg, qui marque le passage du manteau à une autre couche.\nDe 2900 km à 5100 km, la vitesse des ondes P augmente progressivement : cette couche est le noyau externe, dans lequel les ondes S ne sont plus transmises ; il est donc liquide.\nÀ partir de 5100 km, les vitesses restent constantes car les ondes traversent une couche homogène, le noyau interne ou graine, dans lequel les ondes S réapparaissent : ce noyau est donc solide. La limite à 5100 km, entre noyau externe et noyau interne, est la discontinuité de Lehmann.",
      "keyRule": "Disparition des ondes S égale milieu liquide ; leur réapparition égale milieu solide.",
      "formulas": [],
      "workedExample": {
        "title": "Déduire l’état du noyau externe",
        "statement": "Les ondes S s’annulent à 2900 km et ne sont plus transmises jusqu’à 5100 km. Quel est l’état de la couche traversée ?",
        "methodSteps": [
          "Les ondes S ne se propagent que dans les solides, d’après la partie sur leurs caractéristiques.",
          "Leur absence entre 2900 km et 5100 km signale une couche non solide.",
          "Cette couche est le noyau externe."
        ],
        "conclusion": "Le noyau externe est liquide, déduit de la disparition des ondes S."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La discontinuité de Gutenberg",
          "stepTheme": "La discontinuité de Gutenberg",
          "stepBadge": "La discontinuité de Gutenberg",
          "paragraphText": "• Discontinuité de Gutenberg : limite à 2900 km de profondeur entre le manteau et le noyau.\nElle est marquée par une chute brutale des vitesses.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p05_q1",
            "type": "mcq",
            "prompt": "La discontinuité de Gutenberg se situe à :",
            "options": [
              "2900 km",
              "70 km",
              "750 km",
              "5100 km"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé place Gutenberg à 2900 km, au passage du manteau à la couche suivante."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le sort des ondes S à 2900 km",
          "stepTheme": "Le sort des ondes S à 2900 km",
          "stepBadge": "Le sort des ondes S à 2900 km",
          "paragraphText": "À 2900 km, la vitesse des ondes P chute et celle des ondes S s’annule.\nLes ondes S ne sont plus transmises dans le noyau externe.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p05_q2",
            "type": "mcq",
            "prompt": "À 2900 km, la vitesse des ondes S :",
            "options": [
              "Reste constante",
              "Devient celle des ondes L",
              "S’annule",
              "Double"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résultat de l’expérience 2 indique que la vitesse des ondes S s’annule à 2900 km."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le noyau externe liquide",
          "stepTheme": "Le noyau externe liquide",
          "stepBadge": "Le noyau externe liquide",
          "paragraphText": "• Noyau externe : couche de 2900 km à 5100 km où la vitesse des ondes P augmente progressivement.\nLes ondes S n’y sont plus transmises : il est liquide.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p05_q3",
            "type": "mcq",
            "prompt": "Le noyau externe est :",
            "options": [
              "Homogène et froid",
              "Liquide",
              "Solide",
              "Gazeux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé déduit l’état liquide du noyau externe de la non-transmission des ondes S."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La discontinuité de Lehmann",
          "stepTheme": "La discontinuité de Lehmann",
          "stepBadge": "La discontinuité de Lehmann",
          "paragraphText": "À 5100 km se trouve une limite entre le noyau externe et le noyau interne.\nCette limite est appelée la discontinuité de Lehmann.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p05_q4",
            "type": "mcq",
            "prompt": "La discontinuité de Lehmann sépare :",
            "options": [
              "La croûte et le manteau",
              "Le manteau et le noyau externe",
              "La lithosphère et l’asthénosphère",
              "Le noyau externe et le noyau interne"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé place Lehmann à 5100 km, entre noyau externe et noyau interne."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le noyau interne est solide",
          "stepTheme": "Le noyau interne est solide",
          "stepBadge": "Le noyau interne est solide",
          "paragraphText": "Piège : tout le noyau n’est pas liquide.\nDans le noyau interne, les ondes S réapparaissent, signe d’un milieu solide, et les vitesses restent constantes car la couche est homogène.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p05_q5",
            "type": "mcq",
            "prompt": "La réapparition des ondes S dans le noyau interne indique qu’il est :",
            "options": [
              "Gazeux",
              "Vide",
              "Solide",
              "Liquide"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé conclut que le noyau interne ou graine est solide car les ondes S y réapparaissent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le schéma complet de la structure",
          "stepTheme": "Le schéma complet de la structure",
          "stepBadge": "Le schéma complet de la structure",
          "paragraphText": "Exemple d’annotation du schéma : croûte continentale, croûte océanique, manteau, noyau externe, noyau interne ou graine, noyau.\nLes discontinuités sont Mohorovicic, Gutenberg et Lehmann.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p05_q6",
            "type": "mcq",
            "prompt": "Dans le corrigé du schéma, le numéro de la graine correspond au :",
            "options": [
              "Noyau interne",
              "Discontinuité de Gutenberg",
              "Manteau",
              "Noyau externe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’activité d’application nomme le noyau interne ou graine comme couche distincte du noyau externe."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p05_q1",
          "type": "mcq",
          "prompt": "La discontinuité de Gutenberg se situe à :",
          "options": [
            "2900 km",
            "70 km",
            "750 km",
            "5100 km"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé place Gutenberg à 2900 km, au passage du manteau à la couche suivante."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p05_q2",
          "type": "mcq",
          "prompt": "À 2900 km, la vitesse des ondes S :",
          "options": [
            "Reste constante",
            "Devient celle des ondes L",
            "S’annule",
            "Double"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résultat de l’expérience 2 indique que la vitesse des ondes S s’annule à 2900 km."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p05_q3",
          "type": "mcq",
          "prompt": "Le noyau externe est :",
          "options": [
            "Homogène et froid",
            "Liquide",
            "Solide",
            "Gazeux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé déduit l’état liquide du noyau externe de la non-transmission des ondes S."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p05_q4",
          "type": "mcq",
          "prompt": "La discontinuité de Lehmann sépare :",
          "options": [
            "La croûte et le manteau",
            "Le manteau et le noyau externe",
            "La lithosphère et l’asthénosphère",
            "Le noyau externe et le noyau interne"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé place Lehmann à 5100 km, entre noyau externe et noyau interne."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p05_q5",
          "type": "mcq",
          "prompt": "La réapparition des ondes S dans le noyau interne indique qu’il est :",
          "options": [
            "Gazeux",
            "Vide",
            "Solide",
            "Liquide"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé conclut que le noyau interne ou graine est solide car les ondes S y réapparaissent."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_terrestre_p05_q6",
          "type": "mcq",
          "prompt": "Dans le corrigé du schéma, le numéro de la graine correspond au :",
          "options": [
            "Noyau interne",
            "Discontinuité de Gutenberg",
            "Manteau",
            "Noyau externe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’activité d’application nomme le noyau interne ou graine comme couche distincte du noyau externe."
        }
      ]
    }
  ]
};
