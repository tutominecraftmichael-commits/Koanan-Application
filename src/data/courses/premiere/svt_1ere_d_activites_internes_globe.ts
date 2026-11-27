import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 6 : Les activités internes du globe terrestre » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2790
export const SVT_1ERE_D_L06_ACTIVITES_INTERNES_GLOBE: CurriculumChapter = {
  "id": "premiere_d_svt_l06_activites_internes_globe_terrestre",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 6,
  "title": "Leçon 6 : Les activités internes du globe terrestre",
  "summary": "On détermine les effets des séismes et du volcanisme, les caractéristiques des ondes sismiques enregistrées, puis on déduit la structure interne de la Terre de la propagation de ces ondes.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2790",
  "points": [
    {
      "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p01",
      "order": 1,
      "title": "Séismes et volcanisme : les déformations de la surface terrestre",
      "summary": "Lister les effets des séismes et du volcanisme qui déforment la surface externe de la Terre.",
      "conceptExplanation": "Les documents de la leçon montrent les effets dévastateurs d’un tsunami, formé à la suite d’un tremblement de terre, les effets d’un séisme en Alaska et les effets d’un volcanisme sur un village du Japon.\nLes séismes provoquent la fissuration de la terre, la destruction des habitations, des édifices publics, des ponts et des barrages, des pertes en vies humaines, la destruction de la végétation et des animaux, des glissements de terrains, un raz de marée ou tsunami lorsque le séisme se déroule dans les terres sous-marines, et le volcanisme.\nLe volcanisme provoque le rejet des cendres, qui entraîne l’engloutissement des habitations, l’incinération de la végétation et des animaux, l’intoxication des hommes et des animaux et la perturbation de la navigation aérienne.\nLe séisme et le volcanisme entraînent donc des déformations sur la structure externe de la Terre : les mouvements internes de la terre se manifestent en déformant sa surface externe.",
      "keyRule": "Séisme : fissuration et destructions, tsunami en mer ; volcanisme : cendres, engloutissement et intoxication — la surface est déformée.",
      "formulas": [],
      "workedExample": {
        "title": "Relever les conséquences d’un séisme dans une liste",
        "statement": "L’exercice donne des phrases relatives aux conséquences du séisme et du volcanisme : fissuration du sol, effondrement des immeubles, mais aussi assèchement des cours d’eau, réchauffement du climat et appauvrissement des sols. Relève les intrus, selon la leçon.",
        "methodSteps": [
          "La fissuration du sol et l’effondrement des immeubles figurent parmi les effets des séismes décrits dans la leçon.",
          "L’assèchement des cours d’eau, le réchauffement du climat et l’appauvrissement des sols cultivables ne figurent pas dans la liste des effets de la leçon.",
          "Ce sont donc les intrus à relever."
        ],
        "conclusion": "Seuls les effets effectivement décrits dans la leçon doivent être retenus."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le tsunami, conséquence d’un séisme sous-marin",
          "stepTheme": "Le tsunami, conséquence d’un séisme sous-marin",
          "stepBadge": "Le tsunami, conséquence d’un séisme sous-marin",
          "paragraphText": "Le document de la leçon montre les dégâts engendrés après le passage du tsunami formé au large des côtes, à la suite d’un tremblement de terre.\nLorsque le séisme se déroule dans les terres sous-marines, il provoque un raz de marée ou tsunami.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p01_q1",
            "type": "mcq",
            "prompt": "Un tsunami, selon la leçon, est provoqué par :",
            "options": [
              "Un séisme qui se déroule dans les terres sous-marines",
              "Une éruption de cendres uniquement",
              "Une pluie intense",
              "Un glissement de terrain en montagne seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon rattache le raz de marée ou tsunami au séisme sous-marin."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les effets destructeurs des séismes",
          "stepTheme": "Les effets destructeurs des séismes",
          "stepBadge": "Les effets destructeurs des séismes",
          "paragraphText": "Les séismes provoquent la fissuration de la terre et la destruction des habitations, des édifices publics, des ponts et des barrages.\nIls causent aussi des pertes en vies humaines et des glissements de terrains.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p01_q2",
            "type": "mcq",
            "prompt": "Parmi les effets suivants, lequel est attribué aux séismes dans la leçon ?",
            "options": [
              "La fissuration de la terre et la destruction des habitations",
              "Le réchauffement du climat",
              "L’appauvrissement des sols cultivables",
              "L’assèchement durable des cours d’eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La liste de la leçon commence par la fissuration de la terre et les destructions."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les effets du rejet des cendres volcaniques",
          "stepTheme": "Les effets du rejet des cendres volcaniques",
          "stepBadge": "Les effets du rejet des cendres volcaniques",
          "paragraphText": "Le volcanisme provoque le rejet des cendres.\nCe rejet entraîne l’engloutissement des habitations, l’incinération de la végétation et des animaux, l’intoxication des hommes et des animaux et la perturbation de la navigation aérienne.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p01_q3",
            "type": "mcq",
            "prompt": "Le rejet des cendres volcaniques entraîne notamment :",
            "options": [
              "La formation d’un tsunami",
              "L’intoxication des hommes et des animaux et la perturbation de la navigation aérienne",
              "La fissuration par les ondes uniquement",
              "Une baisse de la magnitude"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Effets des cendres listés dans la leçon : engloutissement, incinération, intoxication, perturbation aérienne."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Des exemples chiffrés de magnitude",
          "stepTheme": "Des exemples chiffrés de magnitude",
          "stepBadge": "Des exemples chiffrés de magnitude",
          "paragraphText": "Le tsunami de la photo de la leçon fait suite au plus fort tremblement de terre jamais enregistré, de magnitude élevée sur l’échelle de Richter.\nLe séisme en Alaska montré dans un autre document fut aussi l’un des plus violents d’Amérique du Nord.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p01_q4",
            "type": "mcq",
            "prompt": "Les documents de la leçon illustrent les séismes par :",
            "options": [
              "Des pluies et des inondations",
              "Un tsunami après un séisme majeur, un séisme destructeur en Alaska et une éruption au Japon",
              "Des éruptions uniquement sous-marines",
              "Des expériences de laboratoire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les trois documents montrent un tsunami, un séisme en Alaska et un volcanisme au Japon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Conclusion : déformation de la surface externe",
          "stepTheme": "Conclusion : déformation de la surface externe",
          "stepBadge": "Conclusion : déformation de la surface externe",
          "paragraphText": "Le séisme et le volcanisme entraînent des déformations sur la structure externe de la Terre.\nLes mouvements internes de la terre se manifestent donc en déformant sa surface externe.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p01_q5",
            "type": "mcq",
            "prompt": "La conclusion de cette partie est que les mouvements internes de la terre se manifestent :",
            "options": [
              "Sans aucun effet visible",
              "En déformant sa surface externe, par les séismes et le volcanisme",
              "Uniquement en profondeur",
              "Par le climat"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la leçon pour la première hypothèse."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p01_q1",
          "type": "mcq",
          "prompt": "Un tsunami, selon la leçon, est provoqué par :",
          "options": [
            "Un séisme qui se déroule dans les terres sous-marines",
            "Une éruption de cendres uniquement",
            "Une pluie intense",
            "Un glissement de terrain en montagne seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon rattache le raz de marée ou tsunami au séisme sous-marin."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p01_q2",
          "type": "mcq",
          "prompt": "Parmi les effets suivants, lequel est attribué aux séismes dans la leçon ?",
          "options": [
            "La fissuration de la terre et la destruction des habitations",
            "Le réchauffement du climat",
            "L’appauvrissement des sols cultivables",
            "L’assèchement durable des cours d’eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La liste de la leçon commence par la fissuration de la terre et les destructions."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p01_q3",
          "type": "mcq",
          "prompt": "Le rejet des cendres volcaniques entraîne notamment :",
          "options": [
            "La formation d’un tsunami",
            "L’intoxication des hommes et des animaux et la perturbation de la navigation aérienne",
            "La fissuration par les ondes uniquement",
            "Une baisse de la magnitude"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Effets des cendres listés dans la leçon : engloutissement, incinération, intoxication, perturbation aérienne."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p01_q4",
          "type": "mcq",
          "prompt": "Les documents de la leçon illustrent les séismes par :",
          "options": [
            "Des pluies et des inondations",
            "Un tsunami après un séisme majeur, un séisme destructeur en Alaska et une éruption au Japon",
            "Des éruptions uniquement sous-marines",
            "Des expériences de laboratoire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les trois documents montrent un tsunami, un séisme en Alaska et un volcanisme au Japon."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p01_q5",
          "type": "mcq",
          "prompt": "La conclusion de cette partie est que les mouvements internes de la terre se manifestent :",
          "options": [
            "Sans aucun effet visible",
            "En déformant sa surface externe, par les séismes et le volcanisme",
            "Uniquement en profondeur",
            "Par le climat"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la leçon pour la première hypothèse."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p02",
      "order": 2,
      "title": "L’enregistrement des ondes sismiques : sismographe et sismogramme",
      "summary": "Décrire l’enregistrement d’un séisme et identifier les trois parties d’un sismogramme.",
      "conceptExplanation": "La plupart des appareils enregistreurs, ou sismographes, sont de type pendulaire, constitués d’une masse rigide suspendue à un fil ou à un ressort ; lorsqu’une secousse ébranle le support et le cylindre enregistreur, la masse tend à rester immobile en vertu de son inertie.\nPour connaître les mouvements du sol en grandeur et en direction, il faut trois sismographes : un sismographe horizontal orienté nord-sud, un sismographe horizontal orienté est-ouest et un sismographe vertical.\nL’enregistrement observé est un sismogramme, série d’oscillations d’amplitudes différentes, constitué de trois parties.\nLa première partie, d’oscillations de petites amplitudes, représente les premières ondes enregistrées après un séisme : ce sont les ondes primaires ou ondes P.\nLa deuxième partie, d’oscillations d’amplitude moyenne, est enregistrée secondairement : ce sont les ondes secondaires ou ondes S ; la troisième partie, d’oscillations de grandes amplitudes, représente des ondes lentes qui apparaissent en dernière position : ce sont les ondes L.",
      "keyRule": "Sismogramme : petites amplitudes d’abord pour les ondes P, amplitudes moyennes ensuite pour les ondes S, grandes amplitudes à la fin pour les ondes L.",
      "formulas": [],
      "workedExample": {
        "title": "Répondre vrai ou faux sur la propagation des ondes",
        "statement": "L’activité d’application affirme notamment que les ondes L sont lentes, que l’épicentre est la zone de surface où l’intensité est la plus élevée et que l’hypocentre est le lieu d’où partent les ondes sismiques. Vérifie ces affirmations avec le contenu de la leçon.",
        "methodSteps": [
          "Les ondes L apparaissent en dernière position sur le sismogramme : elles sont lentes — affirmation vraie.",
          "L’épicentre est la zone à la verticale du foyer où les effets sont les plus ressentis — affirmation vraie.",
          "L’hypocentre, ou foyer, est le lieu où le séisme prend naissance — affirmation vraie ; en revanche, la magnitude n’est pas la force d’un volcan et les ondes P ne sont pas les plus destructrices."
        ],
        "conclusion": "Trois affirmations sont vraies ; celles sur la magnitude-volcan et les ondes P destructrices sont fausses."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le sismographe pendulaire",
          "stepTheme": "Le sismographe pendulaire",
          "stepBadge": "Le sismographe pendulaire",
          "paragraphText": "Les sismographes sont de type pendulaire : une masse rigide suspendue à un fil ou à un ressort.\nQuand une secousse ébranle le support, la masse tend à rester immobile en vertu de son inertie, pendant que le cylindre enregistreur bouge.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p02_q1",
            "type": "mcq",
            "prompt": "Dans un sismographe pendulaire, lors d’une secousse, la masse suspendue :",
            "options": [
              "Suit exactement le mouvement du sol",
              "Tend à rester immobile en vertu de son inertie",
              "Tourne sur elle-même",
              "Amplifie elle-même le séisme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte de la leçon explique le rôle de l’inertie de la masse du sismographe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Trois sismographes pour trois directions",
          "stepTheme": "Trois sismographes pour trois directions",
          "stepBadge": "Trois sismographes pour trois directions",
          "paragraphText": "Il faut utiliser trois sismographes : un horizontal orienté nord-sud, un horizontal orienté est-ouest et un vertical.\nEux seuls permettent de connaître les mouvements du sol en grandeur et en direction.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p02_q2",
            "type": "mcq",
            "prompt": "Pour enregistrer complètement les mouvements du sol, il faut :",
            "options": [
              "Un seul sismographe",
              "Trois sismographes : nord-sud, est-ouest et vertical",
              "Un sismographe sous-marin uniquement",
              "Douze sismographes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte de la leçon exige trois sismographes selon les trois coordonnées."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le sismogramme en trois parties",
          "stepTheme": "Le sismogramme en trois parties",
          "stepBadge": "Le sismogramme en trois parties",
          "paragraphText": "• Sismogramme : enregistrement constitué d’une série d’oscillations d’amplitudes différentes, en trois parties.\nPetites amplitudes pour les ondes P, amplitudes moyennes pour les ondes S, grandes amplitudes pour les ondes L.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p02_q3",
            "type": "mcq",
            "prompt": "Sur un sismogramme, les premières oscillations enregistrées, de petites amplitudes, correspondent :",
            "options": [
              "Aux ondes L",
              "Aux ondes S",
              "Aux ondes primaires ou ondes P",
              "Aux cendres volcaniques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse de la leçon : la première partie du sismogramme représente les ondes P."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Ondes S au milieu, ondes L à la fin",
          "stepTheme": "Ondes S au milieu, ondes L à la fin",
          "stepBadge": "Ondes S au milieu, ondes L à la fin",
          "paragraphText": "La deuxième partie du sismogramme, d’amplitude moyenne, est enregistrée secondairement : ce sont les ondes S.\nLa troisième partie, de grandes amplitudes, représente les ondes lentes qui apparaissent en dernière position : les ondes L.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p02_q4",
            "type": "mcq",
            "prompt": "Les ondes qui apparaissent en dernière position, avec de grandes amplitudes, sont :",
            "options": [
              "Les ondes P",
              "Les ondes S",
              "Les ondes L, ondes lentes",
              "Les ondes du tsunami"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La troisième partie du sismogramme correspond aux ondes L."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Conclusion : trois types d’ondes",
          "stepTheme": "Conclusion : trois types d’ondes",
          "stepBadge": "Conclusion : trois types d’ondes",
          "paragraphText": "Les ondes P, les ondes S et les ondes L sont les principales ondes à l’origine des activités sismiques.\nLeur ordre d’arrivée sur le sismogramme reflète leur vitesse.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p02_q5",
            "type": "mcq",
            "prompt": "Les principales ondes d’un séisme sont :",
            "options": [
              "Les ondes P, S et L",
              "Uniquement les ondes L",
              "Les ondes radio",
              "Les ondes sonores de l’air"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Conclusion de la leçon : ondes P, ondes S et ondes L."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p02_q1",
          "type": "mcq",
          "prompt": "Dans un sismographe pendulaire, lors d’une secousse, la masse suspendue :",
          "options": [
            "Suit exactement le mouvement du sol",
            "Tend à rester immobile en vertu de son inertie",
            "Tourne sur elle-même",
            "Amplifie elle-même le séisme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte de la leçon explique le rôle de l’inertie de la masse du sismographe."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p02_q2",
          "type": "mcq",
          "prompt": "Pour enregistrer complètement les mouvements du sol, il faut :",
          "options": [
            "Un seul sismographe",
            "Trois sismographes : nord-sud, est-ouest et vertical",
            "Un sismographe sous-marin uniquement",
            "Douze sismographes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte de la leçon exige trois sismographes selon les trois coordonnées."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p02_q3",
          "type": "mcq",
          "prompt": "Sur un sismogramme, les premières oscillations enregistrées, de petites amplitudes, correspondent :",
          "options": [
            "Aux ondes L",
            "Aux ondes S",
            "Aux ondes primaires ou ondes P",
            "Aux cendres volcaniques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse de la leçon : la première partie du sismogramme représente les ondes P."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p02_q4",
          "type": "mcq",
          "prompt": "Les ondes qui apparaissent en dernière position, avec de grandes amplitudes, sont :",
          "options": [
            "Les ondes P",
            "Les ondes S",
            "Les ondes L, ondes lentes",
            "Les ondes du tsunami"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La troisième partie du sismogramme correspond aux ondes L."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p02_q5",
          "type": "mcq",
          "prompt": "Les principales ondes d’un séisme sont :",
          "options": [
            "Les ondes P, S et L",
            "Uniquement les ondes L",
            "Les ondes radio",
            "Les ondes sonores de l’air"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Conclusion de la leçon : ondes P, ondes S et ondes L."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p03",
      "order": 3,
      "title": "Les caractéristiques des ondes P, S et L",
      "summary": "Comparer la vitesse, le mode de propagation et le milieu traversé par chaque type d’onde.",
      "conceptExplanation": "L’hodographe représente le temps de propagation des ondes P, S et L en fonction de la distance à l’épicentre ; pour une station très éloignée de l’épicentre, les ondes P arrivent les premières, puis les ondes S, puis les ondes L.\nLes ondes P sont les plus rapides : ce sont des ondes longitudinales de compression et de décompression, capables de se propager aussi bien dans les solides que dans les fluides, et responsables du grondement sourd que l’on peut entendre au début d’un tremblement de terre.\nLes ondes S sont des ondes transversales de cisaillement par rapport à la direction de propagation : elles ne sont transmises que par les solides, car les liquides n’offrent aucune résistance aux cisaillements.\nOndes P et ondes S se propagent à l’intérieur du globe terrestre et constituent les derniers trains d’ondes pour les ondes L, qui entraînent des mouvements très complexes de torsion du sol et se propagent dans les couches superficielles du globe : ce sont les ondes de surface, guidées par ces couches.\nLes ondes S et les ondes L sont les plus destructrices ; les ondes émises lors d’un séisme présentent donc des caractéristiques différentes.",
      "keyRule": "P : rapides, compression, solides et fluides ; S : cisaillement, solides seuls ; L : surface, lentes — S et L sont les plus destructrices.",
      "formulas": [],
      "workedExample": {
        "title": "Associer chaque affirmation à son onde",
        "statement": "L’exercice associe des affirmations aux ondes : premières inscrites et plus rapides ; compression-décompression dans solides et fluides ; grondement sourd au début ; transversales transmises par les solides seuls ; guidées par les couches superficielles ; plus destructrices. Classe-les.",
        "methodSteps": [
          "Les ondes P sont les premières inscrites, les plus rapides, de compression-décompression, et responsables du grondement sourd.",
          "Les ondes S sont transversales, de cisaillement, transmises par les solides seuls.",
          "Les ondes L sont guidées par les couches superficielles et figurent, avec les ondes S, parmi les plus destructrices."
        ],
        "conclusion": "Chaque affirmation de l’exercice renvoie à l’une des trois ondes selon ses caractéristiques."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’hodographe",
          "stepTheme": "L’hodographe",
          "stepBadge": "L’hodographe",
          "paragraphText": "• Hodographe : représentation du temps de propagation des ondes P, S et L en fonction de la distance à l’épicentre.\nIl permet de comparer les vitesses des trois ondes.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p03_q1",
            "type": "mcq",
            "prompt": "L’hodographe représente :",
            "options": [
              "La température du globe selon la profondeur",
              "Le temps de propagation des ondes en fonction de la distance à l’épicentre",
              "La masse des sismographes",
              "La profondeur du foyer seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultat de la leçon : l’hodographe donne le temps de propagation selon la distance à l’épicentre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les ondes P, les plus rapides",
          "stepTheme": "Les ondes P, les plus rapides",
          "stepBadge": "Les ondes P, les plus rapides",
          "paragraphText": "Les ondes P sont les plus rapides, donc se propagent les premières.\nCe sont des ondes longitudinales de compression et de décompression, capables de se propager dans les solides comme dans les fluides.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p03_q2",
            "type": "mcq",
            "prompt": "Les ondes P sont des ondes :",
            "options": [
              "Transversales, dans les solides seuls",
              "Longitudinales de compression et de décompression, dans les solides et les fluides",
              "De surface uniquement",
              "Les plus lentes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Caractéristiques des ondes P données par la leçon : rapides, longitudinales, tous milieux."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le grondement sourd des ondes P",
          "stepTheme": "Le grondement sourd des ondes P",
          "stepBadge": "Le grondement sourd des ondes P",
          "paragraphText": "Les ondes P sont responsables du grondement sourd que l’on peut entendre au début d’un tremblement de terre.\nC’est cohérent avec leur arrivée en premier.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p03_q3",
            "type": "mcq",
            "prompt": "Le grondement sourd entendu au début d’un tremblement de terre est dû :",
            "options": [
              "Aux ondes L",
              "Aux cendres volcaniques",
              "Aux ondes P",
              "Aux ondes S uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon attribue ce grondement aux ondes P."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les ondes S, transmises par les solides seuls",
          "stepTheme": "Les ondes S, transmises par les solides seuls",
          "stepBadge": "Les ondes S, transmises par les solides seuls",
          "paragraphText": "Les ondes S sont des ondes transversales de cisaillement par rapport à la direction de propagation.\nElles ne sont transmises que par les solides, car les liquides n’offrent aucune résistance aux cisaillements.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p03_q4",
            "type": "mcq",
            "prompt": "Les ondes S ne sont transmises que par les solides parce que :",
            "options": [
              "Les fluides les amplifient trop",
              "Les liquides n’offrent aucune résistance aux cisaillements",
              "Elles sont trop rapides",
              "Elles se propagent en surface"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Explication de la leçon : pas de résistance au cisaillement dans les liquides."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les ondes L, ondes de surface destructrices",
          "stepTheme": "Les ondes L, ondes de surface destructrices",
          "stepBadge": "Les ondes L, ondes de surface destructrices",
          "paragraphText": "Les ondes L se propagent dans les couches superficielles du globe : ce sont les ondes de surface, qui entraînent des mouvements complexes de torsion du sol.\nLes ondes S et les ondes L sont les plus destructrices.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p03_q5",
            "type": "mcq",
            "prompt": "Les ondes les plus destructrices, selon la leçon, sont :",
            "options": [
              "Uniquement les ondes P",
              "Les ondes S et les ondes L",
              "Aucune onde",
              "Les ondes P et les ondes L seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon désigne les ondes S et les ondes L comme les plus destructrices."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p03_q1",
          "type": "mcq",
          "prompt": "L’hodographe représente :",
          "options": [
            "La température du globe selon la profondeur",
            "Le temps de propagation des ondes en fonction de la distance à l’épicentre",
            "La masse des sismographes",
            "La profondeur du foyer seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultat de la leçon : l’hodographe donne le temps de propagation selon la distance à l’épicentre."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p03_q2",
          "type": "mcq",
          "prompt": "Les ondes P sont des ondes :",
          "options": [
            "Transversales, dans les solides seuls",
            "Longitudinales de compression et de décompression, dans les solides et les fluides",
            "De surface uniquement",
            "Les plus lentes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Caractéristiques des ondes P données par la leçon : rapides, longitudinales, tous milieux."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p03_q3",
          "type": "mcq",
          "prompt": "Le grondement sourd entendu au début d’un tremblement de terre est dû :",
          "options": [
            "Aux ondes L",
            "Aux cendres volcaniques",
            "Aux ondes P",
            "Aux ondes S uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon attribue ce grondement aux ondes P."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p03_q4",
          "type": "mcq",
          "prompt": "Les ondes S ne sont transmises que par les solides parce que :",
          "options": [
            "Les fluides les amplifient trop",
            "Les liquides n’offrent aucune résistance aux cisaillements",
            "Elles sont trop rapides",
            "Elles se propagent en surface"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Explication de la leçon : pas de résistance au cisaillement dans les liquides."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p03_q5",
          "type": "mcq",
          "prompt": "Les ondes les plus destructrices, selon la leçon, sont :",
          "options": [
            "Uniquement les ondes P",
            "Les ondes S et les ondes L",
            "Aucune onde",
            "Les ondes P et les ondes L seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon désigne les ondes S et les ondes L comme les plus destructrices."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p04",
      "order": 4,
      "title": "Foyer, épicentre, magnitude : définir un séisme",
      "summary": "Définir le séisme, son foyer ou hypocentre, son épicentre et sa magnitude sur l’échelle de Richter.",
      "conceptExplanation": "Le lieu où le séisme prend naissance, par rupture brutale des roches, à l’intérieur de la Terre, est appelé le foyer ou hypocentre.\nLa zone située à la surface du globe, à la verticale du foyer et où les effets d’un séisme sont les plus ressentis, est appelée l’épicentre.\nL’intensité ou quantité d’énergie dégagée au foyer d’un séisme est la magnitude ; elle est exprimée sur l’échelle de Richter, et plus la magnitude du séisme est élevée, plus le séisme est destructeur.\nLe séisme est une rupture brutale des roches en profondeur, soumises à des tensions, qui occasionne la propagation des ondes.\nSelon la documentation de la leçon, cette rupture se produit le plus souvent au niveau d’une faille, dans les premiers kilomètres de la couche externe, quand les roches déformées par les contraintes libèrent brutalement leur énergie sous forme de chaleur et de vibrations, les ondes sismiques.",
      "keyRule": "Foyer en profondeur, épicentre à la verticale en surface, magnitude pour l’énergie : le séisme est une rupture brutale des roches.",
      "formulas": [],
      "workedExample": {
        "title": "Lire les informations d’un devoir sur les ondes",
        "statement": "Dans un manuel, trois types d’ondes se propagent lors d’un séisme : ondes P ou ondes de compression, ondes S ou ondes de cisaillement, ondes L ou ondes longues, avec des distances parcourues en des temps donnés. Que permettent les hodographes construits à partir de ces données ?",
        "methodSteps": [
          "Les hodographes comparent le temps de propagation de chaque onde selon la distance à l’épicentre.",
          "Leur analyse montre que les ondes P sont les plus rapides et les ondes L les plus lentes.",
          "On peut alors déterminer le retard des ondes S sur les ondes P pour une distance donnée."
        ],
        "conclusion": "Les hodographes servent à comparer les vitesses et les retards des ondes, comme dans l’exercice de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le foyer ou hypocentre",
          "stepTheme": "Le foyer ou hypocentre",
          "stepBadge": "Le foyer ou hypocentre",
          "paragraphText": "• Foyer ou hypocentre : lieu où le séisme prend naissance, par rupture brutale des roches, à l’intérieur de la Terre.\nC’est de là que partent les ondes sismiques.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p04_q1",
            "type": "mcq",
            "prompt": "Le foyer d’un séisme est :",
            "options": [
              "La zone de surface la plus touchée",
              "Le lieu, en profondeur, où le séisme prend naissance par rupture brutale des roches",
              "L’appareil enregistreur",
              "Le centre du volcan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définitions de la leçon : le foyer ou hypocentre est en profondeur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’épicentre",
          "stepTheme": "L’épicentre",
          "stepBadge": "L’épicentre",
          "paragraphText": "• Épicentre : zone située à la surface du globe, à la verticale du foyer.\nC’est là que les effets d’un séisme sont les plus ressentis.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p04_q2",
            "type": "mcq",
            "prompt": "L’épicentre est :",
            "options": [
              "Le foyer lui-même, en profondeur",
              "La zone de surface à la verticale du foyer, où les effets sont les plus ressentis",
              "La station de Lamto",
              "Un type d’onde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon place l’épicentre en surface, à la verticale du foyer."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La magnitude et l’échelle de Richter",
          "stepTheme": "La magnitude et l’échelle de Richter",
          "stepBadge": "La magnitude et l’échelle de Richter",
          "paragraphText": "• Magnitude : quantité d’énergie dégagée au foyer d’un séisme.\nElle est exprimée sur l’échelle de Richter, et plus elle est élevée, plus le séisme est destructeur.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p04_q3",
            "type": "mcq",
            "prompt": "La magnitude d’un séisme mesure :",
            "options": [
              "La durée du sismogramme",
              "La quantité d’énergie dégagée au foyer, exprimée sur l’échelle de Richter",
              "La profondeur de l’épicentre",
              "La force d’un volcan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition de la leçon : la magnitude est l’énergie au foyer, sur l’échelle de Richter."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le séisme, rupture brutale des roches",
          "stepTheme": "Le séisme, rupture brutale des roches",
          "stepBadge": "Le séisme, rupture brutale des roches",
          "paragraphText": "• Séisme : rupture brutale des roches en profondeur soumises à des tensions.\nCette rupture occasionne la propagation des ondes sismiques dans toutes les directions à partir du foyer.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p04_q4",
            "type": "mcq",
            "prompt": "Un séisme est :",
            "options": [
              "Une éruption de lave",
              "Une rupture brutale des roches en profondeur, qui occasionne la propagation des ondes",
              "Un mouvement de la mer uniquement",
              "Une vibration des sismographes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition donnée dans l’analyse de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre foyer et épicentre",
          "stepTheme": "Ne pas confondre foyer et épicentre",
          "stepBadge": "Ne pas confondre foyer et épicentre",
          "paragraphText": "Piège fréquent : placer l’épicentre en profondeur ou le foyer en surface.\nRetiens : foyer égale profondeur, épicentre égale surface à la verticale du foyer.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p04_q5",
            "type": "mcq",
            "prompt": "L’affirmation juste est :",
            "options": [
              "L’épicentre est en profondeur et le foyer en surface",
              "Le foyer est en profondeur et l’épicentre est en surface, à sa verticale",
              "Foyer et épicentre sont deux ondes",
              "La magnitude se mesure à l’épicentre seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon oppose nettement le foyer profond et l’épicentre de surface."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p04_q1",
          "type": "mcq",
          "prompt": "Le foyer d’un séisme est :",
          "options": [
            "La zone de surface la plus touchée",
            "Le lieu, en profondeur, où le séisme prend naissance par rupture brutale des roches",
            "L’appareil enregistreur",
            "Le centre du volcan"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définitions de la leçon : le foyer ou hypocentre est en profondeur."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p04_q2",
          "type": "mcq",
          "prompt": "L’épicentre est :",
          "options": [
            "Le foyer lui-même, en profondeur",
            "La zone de surface à la verticale du foyer, où les effets sont les plus ressentis",
            "La station de Lamto",
            "Un type d’onde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon place l’épicentre en surface, à la verticale du foyer."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p04_q3",
          "type": "mcq",
          "prompt": "La magnitude d’un séisme mesure :",
          "options": [
            "La durée du sismogramme",
            "La quantité d’énergie dégagée au foyer, exprimée sur l’échelle de Richter",
            "La profondeur de l’épicentre",
            "La force d’un volcan"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition de la leçon : la magnitude est l’énergie au foyer, sur l’échelle de Richter."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p04_q4",
          "type": "mcq",
          "prompt": "Un séisme est :",
          "options": [
            "Une éruption de lave",
            "Une rupture brutale des roches en profondeur, qui occasionne la propagation des ondes",
            "Un mouvement de la mer uniquement",
            "Une vibration des sismographes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition donnée dans l’analyse de la leçon."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p04_q5",
          "type": "mcq",
          "prompt": "L’affirmation juste est :",
          "options": [
            "L’épicentre est en profondeur et le foyer en surface",
            "Le foyer est en profondeur et l’épicentre est en surface, à sa verticale",
            "Foyer et épicentre sont deux ondes",
            "La magnitude se mesure à l’épicentre seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon oppose nettement le foyer profond et l’épicentre de surface."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p05",
      "order": 5,
      "title": "La structure interne du globe : discontinuités et couches",
      "summary": "Lire les variations de vitesse des ondes pour dégager les trois discontinuités et les quatre couches du globe.",
      "conceptExplanation": "Les graphes décrivent la vitesse de propagation des ondes P et S en fonction de la profondeur de la Terre.\nOn observe trois cassures nettes dans l’évolution des ondes : au tout début de la courbe, une augmentation très rapide de la vitesse des deux ondes ; à grande profondeur, une grande chute de la vitesse, jusqu’à zéro pour les ondes S ; et plus profondément encore, une augmentation brutale de la vitesse des ondes.\nCes cassures mettent en évidence trois discontinuités dans la structure de la Terre : le Moho, entre dix et soixante-dix kilomètres de profondeur, la discontinuité de Gutenberg et la discontinuité de Lehmann — une discontinuité est la limite entre deux couches terrestres de propriétés différentes.\nCes trois discontinuités délimitent quatre couches concentriques qui constituent le globe : la croûte, le manteau, le noyau externe et la graine, ou noyau interne.\nLes ondes S ne se propagent pas dans le noyau externe parce que c’est un milieu liquide ; les mouvements internes de la terre se manifestent donc en fonction de sa structure, et les principaux mouvements internes sont les séismes et les volcans.",
      "keyRule": "Trois discontinuités, quatre couches : croûte, manteau, noyau externe liquide sans ondes S, et graine.",
      "formulas": [],
      "workedExample": {
        "title": "Exploiter un document sur la vitesse des ondes en profondeur",
        "statement": "Un document montre la vitesse des ondes P et S selon la profondeur, avec des chutes brusques. Indique la démarche pour nommer les structures mises en évidence, selon la situation d’évaluation de la leçon.",
        "methodSteps": [
          "Repérer les profondeurs où la vitesse des ondes chute brusquement : ce sont des discontinuités.",
          "Expliquer ces variations par le changement de propriétés entre deux couches, notamment le passage à un milieu liquide où les ondes S disparaissent.",
          "Dessiner ensuite le schéma de la structure interne du globe avec ses couches majeures."
        ],
        "conclusion": "Les discontinuités déduites des courbes délimitent les couches concentriques du globe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Trois cassures dans les courbes de vitesse",
          "stepTheme": "Trois cassures dans les courbes de vitesse",
          "stepBadge": "Trois cassures dans les courbes de vitesse",
          "paragraphText": "On observe trois cassures nettes dans l’évolution des ondes selon la profondeur.\nAu début de la courbe, la vitesse des deux ondes augmente très rapidement ; plus bas, elle chute fortement, jusqu’à zéro pour les ondes S, puis augmente brutalement.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p05_q1",
            "type": "mcq",
            "prompt": "Les cassures des courbes de vitesse des ondes signalent :",
            "options": [
              "Des erreurs des sismographes",
              "Des discontinuités dans la structure de la Terre",
              "La fin du séisme",
              "Des volcans en surface"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la leçon : les cassures mettent en évidence des discontinuités."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Qu’est-ce qu’une discontinuité",
          "stepTheme": "Qu’est-ce qu’une discontinuité",
          "stepBadge": "Qu’est-ce qu’une discontinuité",
          "paragraphText": "• Discontinuité : limite entre deux couches terrestres de propriétés différentes.\nLes trois discontinuités de la leçon sont le Moho, la discontinuité de Gutenberg et la discontinuité de Lehmann.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p05_q2",
            "type": "mcq",
            "prompt": "Une discontinuité est :",
            "options": [
              "Une onde très rapide",
              "La limite entre deux couches terrestres de propriétés différentes",
              "Le foyer d’un séisme",
              "Une couche de lave"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition donnée dans l’interprétation de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le Moho, première discontinuité",
          "stepTheme": "Le Moho, première discontinuité",
          "stepBadge": "Le Moho, première discontinuité",
          "paragraphText": "Le Moho se situe entre dix et soixante-dix kilomètres de profondeur.\nC’est la première discontinuité rencontrée en descendant dans le globe.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p05_q3",
            "type": "mcq",
            "prompt": "Le Moho est situé :",
            "options": [
              "À la surface de l’épicentre",
              "Entre dix et soixante-dix kilomètres de profondeur",
              "Au centre de la Terre",
              "Dans le noyau externe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon situe le Moho entre dix et soixante-dix kilomètres de profondeur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Quatre couches concentriques",
          "stepTheme": "Quatre couches concentriques",
          "stepBadge": "Quatre couches concentriques",
          "paragraphText": "Les trois discontinuités délimitent quatre couches concentriques : la croûte, le manteau, le noyau externe et la graine ou noyau interne.\nLa terre est donc constituée de couches concentriques de propriétés différentes.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p05_q4",
            "type": "mcq",
            "prompt": "Les quatre couches délimitées par les discontinuités sont :",
            "options": [
              "Croûte, manteau, noyau externe et graine",
              "Croûte, épicentre, foyer et magma",
              "Moho, Gutenberg, Lehmann et Richter",
              "Lithosphère seule et océans"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Liste de la leçon : croûte, manteau, noyau externe et graine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le noyau externe liquide bloque les ondes S",
          "stepTheme": "Le noyau externe liquide bloque les ondes S",
          "stepBadge": "Le noyau externe liquide bloque les ondes S",
          "paragraphText": "Les ondes S ne se propagent pas dans le noyau externe parce que c’est un milieu liquide.\nLeur vitesse y tombe à zéro, ce qui révèle la nature liquide de cette couche.",
          "exercise": {
            "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p05_q5",
            "type": "mcq",
            "prompt": "Les ondes S disparaissent dans le noyau externe parce que :",
            "options": [
              "Il est trop froid",
              "C’est un milieu liquide, qui ne transmet pas les ondes de cisaillement",
              "Il est constitué de cendres",
              "Les sismographes y sont absents"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Explication de la leçon : le noyau externe est liquide, donc sans propagation des ondes S."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p05_q1",
          "type": "mcq",
          "prompt": "Les cassures des courbes de vitesse des ondes signalent :",
          "options": [
            "Des erreurs des sismographes",
            "Des discontinuités dans la structure de la Terre",
            "La fin du séisme",
            "Des volcans en surface"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la leçon : les cassures mettent en évidence des discontinuités."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p05_q2",
          "type": "mcq",
          "prompt": "Une discontinuité est :",
          "options": [
            "Une onde très rapide",
            "La limite entre deux couches terrestres de propriétés différentes",
            "Le foyer d’un séisme",
            "Une couche de lave"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition donnée dans l’interprétation de la leçon."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p05_q3",
          "type": "mcq",
          "prompt": "Le Moho est situé :",
          "options": [
            "À la surface de l’épicentre",
            "Entre dix et soixante-dix kilomètres de profondeur",
            "Au centre de la Terre",
            "Dans le noyau externe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon situe le Moho entre dix et soixante-dix kilomètres de profondeur."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p05_q4",
          "type": "mcq",
          "prompt": "Les quatre couches délimitées par les discontinuités sont :",
          "options": [
            "Croûte, manteau, noyau externe et graine",
            "Croûte, épicentre, foyer et magma",
            "Moho, Gutenberg, Lehmann et Richter",
            "Lithosphère seule et océans"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Liste de la leçon : croûte, manteau, noyau externe et graine."
        },
        {
          "id": "premiere_d_svt_l06_activites_internes_globe_terrestre_p05_q5",
          "type": "mcq",
          "prompt": "Les ondes S disparaissent dans le noyau externe parce que :",
          "options": [
            "Il est trop froid",
            "C’est un milieu liquide, qui ne transmet pas les ondes de cisaillement",
            "Il est constitué de cendres",
            "Les sismographes y sont absents"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Explication de la leçon : le noyau externe est liquide, donc sans propagation des ondes S."
        }
      ]
    }
  ]
};
