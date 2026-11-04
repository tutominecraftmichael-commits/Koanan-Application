import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 2nde G2- La planète Terre.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const GEO_2DE_L02_PLANETE_TERRE: CurriculumChapter = {
  "id": "seconde_a_hg_geographie_l02_planete_terre",
  "subjectId": "histoire_geo",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 2,
  "title": "Leçon 2 : La planète Terre",
  "summary": "La Terre dans le système solaire, sa forme, sa structure, ses mouvements (rotation, révolution) et la tectonique des plaques.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "2nde G2- La planète Terre.pdf",
  "points": [
    {
      "id": "seconde_a_hg_geographie_l02_planete_terre_p01",
      "order": 1,
      "title": "La Terre dans le système solaire",
      "summary": "Les planètes du système solaire, le géocentrisme et l'héliocentrisme.",
      "conceptExplanation": "Le système solaire est l'ensemble formé par le Soleil et les planètes qui gravitent autour de lui.\nIl compte huit planètes : Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus et Neptune. Pluton n'est plus comptée parmi les planètes (c'est une planète naine depuis 2006).\nLa Terre est à environ 150 millions de km du Soleil ; son satellite naturel est la Lune. Le Soleil est environ 109 fois plus grand que la Terre (en diamètre).\n\nDeux théories se sont opposées :\n- le géocentrisme (Aristote, Ptolémée, de l'Antiquité au XVIe siècle) : la Terre, immobile, est au centre ;\n- l'héliocentrisme (Nicolas Copernic au XVIe siècle, confirmé par Galilée) : le Soleil est au centre et la Terre tourne autour.",
      "keyRule": "8 planètes ; la Terre est à 150 millions de km du Soleil ; héliocentrisme (Copernic, Galilée) contre géocentrisme (Aristote, Ptolémée).",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner les planètes",
        "statement": "Quelle est la place de la Terre en partant du Soleil ?",
        "methodSteps": [
          "Mercure (1), Vénus (2), Terre (3), Mars (4).",
          "Puis Jupiter, Saturne, Uranus, Neptune."
        ],
        "conclusion": "La Terre est la troisième planète à partir du Soleil."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le système solaire",
          "stepTheme": "Le système solaire",
          "stepBadge": "Le système solaire",
          "paragraphText": "Le système solaire est l'ensemble formé par le Soleil et les planètes qui gravitent autour de lui.\nLe Soleil en est le centre.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que le système solaire ?",
            "options": [
              "L'ensemble des étoiles visibles la nuit depuis la Terre",
              "L'ensemble formé par la Terre et la Lune uniquement",
              "L'ensemble formé par le Soleil et les planètes qui gravitent autour de lui",
              "L'ensemble des galaxies qui composent l'univers"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le système solaire = le Soleil + les planètes qui tournent autour de lui."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Huit planètes",
          "stepTheme": "Huit planètes",
          "stepBadge": "Huit planètes",
          "paragraphText": "Le système solaire compte huit planètes : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune.\nPluton n'est plus comptée : c'est une planète naine.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q2",
            "type": "mcq",
            "prompt": "Combien de planètes compte le système solaire ?",
            "options": [
              "Huit",
              "Neuf",
              "Sept",
              "Dix"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Huit planètes ; Pluton, planète naine, n'est plus comptée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Distance et satellite",
          "stepTheme": "Distance et satellite",
          "stepBadge": "Distance et satellite",
          "paragraphText": "• La Terre est à environ 150 millions de km du Soleil.\n• Son satellite naturel est la Lune.\n• Le Soleil est environ 109 fois plus grand que la Terre.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q3",
            "type": "mcq",
            "prompt": "Quel est le satellite naturel de la Terre ?",
            "options": [
              "Le Soleil",
              "Mars",
              "Vénus",
              "La Lune"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La Lune est le satellite naturel de la Terre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Loin du Soleil",
          "stepTheme": "Loin du Soleil",
          "stepBadge": "Loin du Soleil",
          "paragraphText": "La distance moyenne entre la Terre et le Soleil est d'environ 150 000 000 km, soit 150 millions de kilomètres.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q4",
            "type": "mcq",
            "prompt": "Quelle est la distance moyenne entre la Terre et le Soleil ?",
            "options": [
              "Environ 15 millions de km",
              "Environ 150 millions de km",
              "Environ 1,5 milliard de km",
              "Environ 384 000 km"
            ],
            "correctAnswerIndex": 1,
            "explanation": "150 millions de km. 384 000 km est la distance Terre-Lune."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le géocentrisme",
          "stepTheme": "Le géocentrisme",
          "stepBadge": "Le géocentrisme",
          "paragraphText": "Le géocentrisme : de l'Antiquité à la fin du XVIe siècle, Aristote, Ptolémée et d'autres savants pensaient que la Terre, immobile, était au centre de l'univers.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q5",
            "type": "mcq",
            "prompt": "Que soutient la théorie du géocentrisme ?",
            "options": [
              "Le Soleil est au centre et la Terre tourne autour",
              "La Terre, immobile, est au centre de l'univers",
              "La Lune est au centre du système solaire",
              "Les planètes ne tournent autour d'aucun astre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Géo = Terre : le géocentrisme place la Terre au centre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "L'héliocentrisme",
          "stepTheme": "L'héliocentrisme",
          "stepBadge": "L'héliocentrisme",
          "paragraphText": "L'héliocentrisme : démontré par Nicolas Copernic au XVIe siècle et confirmé par Galilée.\nLe Soleil est au centre ; la Terre est mobile et tourne autour de lui.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q6",
            "type": "mcq",
            "prompt": "Quel savant a démontré l'héliocentrisme au XVIe siècle ?",
            "options": [
              "Ptolémée",
              "Aristote",
              "Thalès de Milet",
              "Nicolas Copernic"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Copernic a démontré l'héliocentrisme ; Galilée l'a confirmé."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser",
          "stepTheme": "Ne pas inverser",
          "stepBadge": "Ne pas inverser",
          "paragraphText": "Hélio = Soleil ; géo = Terre.\n• Héliocentrisme : le Soleil au centre (Copernic, Galilée).\n• Géocentrisme : la Terre au centre (Aristote, Ptolémée).",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q7",
            "type": "mcq",
            "prompt": "Quels savants défendaient le géocentrisme ?",
            "options": [
              "Aristote et Ptolémée",
              "Copernic et Galilée",
              "Galilée et Wegener",
              "Copernic et Ératosthène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Aristote et Ptolémée plaçaient la Terre au centre ; Copernic et Galilée ont prouvé le contraire."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que le système solaire ?",
          "options": [
            "L'ensemble des étoiles visibles la nuit depuis la Terre",
            "L'ensemble formé par la Terre et la Lune uniquement",
            "L'ensemble formé par le Soleil et les planètes qui gravitent autour de lui",
            "L'ensemble des galaxies qui composent l'univers"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le système solaire = le Soleil + les planètes qui tournent autour de lui."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q2",
          "type": "mcq",
          "prompt": "Combien de planètes compte le système solaire ?",
          "options": [
            "Huit",
            "Neuf",
            "Sept",
            "Dix"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Huit planètes ; Pluton, planète naine, n'est plus comptée."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q3",
          "type": "mcq",
          "prompt": "Quel est le satellite naturel de la Terre ?",
          "options": [
            "Le Soleil",
            "Mars",
            "Vénus",
            "La Lune"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La Lune est le satellite naturel de la Terre."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q4",
          "type": "mcq",
          "prompt": "Quelle est la distance moyenne entre la Terre et le Soleil ?",
          "options": [
            "Environ 15 millions de km",
            "Environ 150 millions de km",
            "Environ 1,5 milliard de km",
            "Environ 384 000 km"
          ],
          "correctAnswerIndex": 1,
          "explanation": "150 millions de km. 384 000 km est la distance Terre-Lune."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q5",
          "type": "mcq",
          "prompt": "Que soutient la théorie du géocentrisme ?",
          "options": [
            "Le Soleil est au centre et la Terre tourne autour",
            "La Terre, immobile, est au centre de l'univers",
            "La Lune est au centre du système solaire",
            "Les planètes ne tournent autour d'aucun astre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Géo = Terre : le géocentrisme place la Terre au centre."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q6",
          "type": "mcq",
          "prompt": "Quel savant a démontré l'héliocentrisme au XVIe siècle ?",
          "options": [
            "Ptolémée",
            "Aristote",
            "Thalès de Milet",
            "Nicolas Copernic"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Copernic a démontré l'héliocentrisme ; Galilée l'a confirmé."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p01_q7",
          "type": "mcq",
          "prompt": "Quels savants défendaient le géocentrisme ?",
          "options": [
            "Aristote et Ptolémée",
            "Copernic et Galilée",
            "Galilée et Wegener",
            "Copernic et Ératosthène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Aristote et Ptolémée plaçaient la Terre au centre ; Copernic et Galilée ont prouvé le contraire."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l02_planete_terre_p02",
      "order": 2,
      "title": "Une planète vivante, sphérique et immense",
      "summary": "Les conditions de la vie, la forme et les dimensions de la Terre.",
      "conceptExplanation": "La Terre est la seule planète connue où la vie s'est développée : une atmosphère avec de l'oxygène, de l'azote et du gaz carbonique, une température moyenne d'environ 15 °C, et une couche d'ozone qui la protège des rayons ultraviolets du Soleil.\n\nLa Terre a la forme d'une sphère imparfaite : légèrement aplatie aux pôles et renflée à l'équateur. On dit qu'elle est ellipsoïdale.\nLes savants grecs ont débattu de sa forme : Thalès pensait qu'elle était un disque plat (théorie de la platitude) ; Aristote a prouvé qu'elle était ronde grâce à l'ombre de la Terre sur la Lune lors des éclipses (théorie de la rotondité) ; Pythagore et Platon lui donnaient une forme sphérique.\n\nSes dimensions : superficie 510 millions de km², circonférence 40 077 km (mesurée pour la première fois par Ératosthène), diamètre à l'équateur 12 756 km, rayon à l'équateur 6 378 km.",
      "keyRule": "Terre ellipsoïdale (aplatie aux pôles) ; 510 millions de km² ; circonférence 40 077 km ; rayon équatorial 6 378 km.",
      "formulas": [],
      "workedExample": {
        "title": "Retrouver le rayon",
        "statement": "Le diamètre de la Terre à l'équateur est de 12 756 km. Quel est son rayon équatorial ?",
        "methodSteps": [
          "Le rayon est la moitié du diamètre.",
          "12 756 / 2 = 6 378 km."
        ],
        "conclusion": "Le rayon équatorial est de 6 378 km."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les conditions de la vie",
          "stepTheme": "Les conditions de la vie",
          "stepBadge": "Les conditions de la vie",
          "paragraphText": "La Terre réunit les conditions de la vie :\n• une atmosphère avec de l'oxygène, de l'azote et du gaz carbonique ;\n• une température moyenne d'environ 15 °C ;\n• une couche d'ozone qui arrête les rayons ultraviolets.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q1",
            "type": "mcq",
            "prompt": "Quel est le rôle de la couche d'ozone ?",
            "options": [
              "Fournir l'oxygène que respirent les êtres vivants",
              "Retenir l'eau des océans à la surface de la Terre",
              "Protéger la Terre des rayons ultraviolets du Soleil",
              "Réchauffer la Terre en produisant de la chaleur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La couche d'ozone filtre les rayons ultraviolets du Soleil."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une température supportable",
          "stepTheme": "Une température supportable",
          "stepBadge": "Une température supportable",
          "paragraphText": "La température moyenne à la surface de la Terre est d'environ 15 °C : elle permet la vie animale et végétale.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q2",
            "type": "mcq",
            "prompt": "Quelle est la température moyenne à la surface de la Terre ?",
            "options": [
              "Environ 50 °C",
              "Environ 0 °C",
              "Environ −20 °C",
              "Environ 15 °C"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Environ 15 °C, une température favorable à la vie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Une forme ellipsoïdale",
          "stepTheme": "Une forme ellipsoïdale",
          "stepBadge": "Une forme ellipsoïdale",
          "paragraphText": "La Terre n'est pas une sphère parfaite : elle est légèrement aplatie aux pôles et renflée (enflée) à l'équateur.\nOn dit qu'elle a une forme ellipsoïdale.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q3",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que la Terre a une forme ellipsoïdale ?",
            "options": [
              "Parce qu'elle est parfaitement ronde dans toutes les directions",
              "Parce qu'elle est renflée aux pôles et aplatie à l'équateur",
              "Parce qu'elle est légèrement aplatie aux pôles et renflée à l'équateur",
              "Parce qu'elle a la forme d'un disque plat posé sur l'eau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Aplatie aux pôles, renflée à l'équateur : c'est un ellipsoïde."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le débat des savants grecs",
          "stepTheme": "Le débat des savants grecs",
          "stepBadge": "Le débat des savants grecs",
          "paragraphText": "• Thalès de Milet : la Terre est un disque plat sur l'eau (platitude).\n• Aristote : l'ombre ronde de la Terre sur la Lune pendant les éclipses prouve qu'elle est ronde (rotondité).\n• Pythagore et Platon : forme sphérique.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q4",
            "type": "mcq",
            "prompt": "Quelle preuve Aristote a-t-il donnée de la forme arrondie de la Terre ?",
            "options": [
              "La mesure de la circonférence de la Terre avec des bâtons",
              "L'ombre ronde de la Terre sur la Lune lors des éclipses",
              "Le tour du monde en bateau de ses élèves",
              "La photographie de la Terre prise depuis l'espace"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pendant une éclipse de Lune, l'ombre de la Terre est toujours ronde."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Thalès et la platitude",
          "stepTheme": "Thalès et la platitude",
          "stepBadge": "Thalès et la platitude",
          "paragraphText": "Thalès de Milet fut le premier à se poser la question de la forme de la Terre.\nIl pensait que la Terre était un disque plat posé sur une vaste étendue d'eau : c'est la théorie de la platitude.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q5",
            "type": "mcq",
            "prompt": "Quelle théorie Thalès de Milet défendait-il ?",
            "options": [
              "La théorie de la platitude (un disque plat sur l'eau)",
              "La théorie de la rotondité (une Terre ronde)",
              "La théorie de l'héliocentrisme (le Soleil au centre)",
              "La théorie de la dérive des continents"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Thalès : disque plat (platitude). Aristote : rotondité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des dimensions gigantesques",
          "stepTheme": "Des dimensions gigantesques",
          "stepBadge": "Des dimensions gigantesques",
          "paragraphText": "• Superficie : 510 millions de km².\n• Circonférence : 40 077 km (première mesure par Ératosthène).\n• Diamètre à l'équateur : 12 756 km.\n• Rayon à l'équateur : 6 378 km.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q6",
            "type": "mcq",
            "prompt": "Quelle est la circonférence de la Terre ?",
            "options": [
              "40 077 km",
              "12 756 km",
              "6 378 km",
              "150 000 km"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La circonférence (le tour de la Terre) est de 40 077 km."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Du diamètre au rayon",
          "stepTheme": "Du diamètre au rayon",
          "stepBadge": "Du diamètre au rayon",
          "paragraphText": "Le rayon est la moitié du diamètre : rayon = diamètre / 2.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q7",
            "type": "mcq",
            "prompt": "Le diamètre équatorial de la Terre est 12 756 km. Quel est son rayon équatorial ?",
            "options": [
              "25 512 km",
              "6 378 km",
              "12 756 km",
              "3 189 km"
            ],
            "correctAnswerIndex": 1,
            "explanation": "12 756 / 2 = 6 378 km."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q1",
          "type": "mcq",
          "prompt": "Quel est le rôle de la couche d'ozone ?",
          "options": [
            "Fournir l'oxygène que respirent les êtres vivants",
            "Retenir l'eau des océans à la surface de la Terre",
            "Protéger la Terre des rayons ultraviolets du Soleil",
            "Réchauffer la Terre en produisant de la chaleur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La couche d'ozone filtre les rayons ultraviolets du Soleil."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q2",
          "type": "mcq",
          "prompt": "Quelle est la température moyenne à la surface de la Terre ?",
          "options": [
            "Environ 50 °C",
            "Environ 0 °C",
            "Environ −20 °C",
            "Environ 15 °C"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Environ 15 °C, une température favorable à la vie."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q3",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que la Terre a une forme ellipsoïdale ?",
          "options": [
            "Parce qu'elle est parfaitement ronde dans toutes les directions",
            "Parce qu'elle est renflée aux pôles et aplatie à l'équateur",
            "Parce qu'elle est légèrement aplatie aux pôles et renflée à l'équateur",
            "Parce qu'elle a la forme d'un disque plat posé sur l'eau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Aplatie aux pôles, renflée à l'équateur : c'est un ellipsoïde."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q4",
          "type": "mcq",
          "prompt": "Quelle preuve Aristote a-t-il donnée de la forme arrondie de la Terre ?",
          "options": [
            "La mesure de la circonférence de la Terre avec des bâtons",
            "L'ombre ronde de la Terre sur la Lune lors des éclipses",
            "Le tour du monde en bateau de ses élèves",
            "La photographie de la Terre prise depuis l'espace"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pendant une éclipse de Lune, l'ombre de la Terre est toujours ronde."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q5",
          "type": "mcq",
          "prompt": "Quelle théorie Thalès de Milet défendait-il ?",
          "options": [
            "La théorie de la platitude (un disque plat sur l'eau)",
            "La théorie de la rotondité (une Terre ronde)",
            "La théorie de l'héliocentrisme (le Soleil au centre)",
            "La théorie de la dérive des continents"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Thalès : disque plat (platitude). Aristote : rotondité."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q6",
          "type": "mcq",
          "prompt": "Quelle est la circonférence de la Terre ?",
          "options": [
            "40 077 km",
            "12 756 km",
            "6 378 km",
            "150 000 km"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La circonférence (le tour de la Terre) est de 40 077 km."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p02_q7",
          "type": "mcq",
          "prompt": "Le diamètre équatorial de la Terre est 12 756 km. Quel est son rayon équatorial ?",
          "options": [
            "25 512 km",
            "6 378 km",
            "12 756 km",
            "3 189 km"
          ],
          "correctAnswerIndex": 1,
          "explanation": "12 756 / 2 = 6 378 km."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l02_planete_terre_p03",
      "order": 3,
      "title": "La structure de la Terre",
      "summary": "Continents et océans à la surface ; écorce, manteau et noyau à l'intérieur.",
      "conceptExplanation": "Structure externe : la surface de la Terre est formée de continents (29 %) et d'eaux marines (71 %), d'où son nom de planète bleue. Il y a six continents : Afrique, Europe, Asie, Amérique, Océanie et Antarctique ; l'Océanie est le plus petit.\nL'équateur partage la Terre en deux hémisphères : l'hémisphère Nord, qui porte la plus grande partie des terres émergées, et l'hémisphère Sud, surtout couvert d'océans.\n\nStructure interne : trois couches concentriques.\n- L'écorce terrestre (lithosphère) : de 10 à 70 km d'épaisseur, riche en silicium et aluminium (SIAL) ; croûte continentale épaisse et croûte océanique mince.\n- Le manteau : environ 2 885 km d'épaisseur, très chaud, fait de silicates et de magnésium (SIMA).\n- Le noyau, fait de nickel et de fer (NIFE) : un noyau externe liquide et un noyau interne solide (la graine).",
      "keyRule": "Surface : 29 % de terres, 71 % d'eau. Intérieur : écorce (SIAL), manteau (SIMA), noyau (NIFE, externe liquide, graine solide).",
      "formulas": [],
      "workedExample": {
        "title": "Retrouver la part des terres",
        "statement": "Les océans couvrent 71 % de la surface terrestre. Quelle part reste-t-il aux continents ?",
        "methodSteps": [
          "La surface totale vaut 100 %.",
          "100 − 71 = 29."
        ],
        "conclusion": "Les continents occupent 29 % de la surface terrestre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La planète bleue",
          "stepTheme": "La planète bleue",
          "stepBadge": "La planète bleue",
          "paragraphText": "La surface de la Terre est formée :\n• de continents (terres émergées) : 29 % ;\n• de mers et d'océans : 71 %.\nL'eau domine : c'est pourquoi on l'appelle la planète bleue.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q1",
            "type": "mcq",
            "prompt": "Pourquoi appelle-t-on la Terre la « planète bleue » ?",
            "options": [
              "Parce que son atmosphère est entièrement composée d'ozone bleu",
              "Parce que les continents couvrent 71 % de sa surface",
              "Parce que les mers et les océans couvrent 71 % de sa surface",
              "Parce que le Soleil l'éclaire avec une lumière bleue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "71 % d'eau : vue de l'espace, la Terre paraît bleue."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Six continents",
          "stepTheme": "Six continents",
          "stepBadge": "Six continents",
          "paragraphText": "Les six continents sont : l'Afrique, l'Europe, l'Asie, l'Amérique, l'Océanie et l'Antarctique.\nLe plus petit est l'Océanie.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q2",
            "type": "mcq",
            "prompt": "Quel est le plus petit des continents ?",
            "options": [
              "L'Europe",
              "L'Antarctique",
              "L'Afrique",
              "L'Océanie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'Océanie est le plus petit continent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Deux hémisphères",
          "stepTheme": "Deux hémisphères",
          "stepBadge": "Deux hémisphères",
          "paragraphText": "L'équateur, ligne imaginaire, partage la Terre en deux hémisphères.\n• Hémisphère Nord : la plus grande partie des terres émergées.\n• Hémisphère Sud : surtout couvert par les océans.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q3",
            "type": "mcq",
            "prompt": "Dans quel hémisphère se trouve la plus grande partie des terres émergées ?",
            "options": [
              "L'hémisphère Sud",
              "Elles sont réparties à égalité",
              "L'hémisphère Nord",
              "Elles se trouvent toutes sur l'équateur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les terres émergées sont surtout dans l'hémisphère Nord ; l'hémisphère Sud est surtout océanique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'écorce terrestre (SIAL)",
          "stepTheme": "L'écorce terrestre (SIAL)",
          "stepBadge": "L'écorce terrestre (SIAL)",
          "paragraphText": "L'écorce terrestre est la couche superficielle ; sa surface est le sol.\n• Épaisseur : de 10 à 70 km.\n• Riche en silicium et en aluminium : SIAL.\n• Croûte continentale épaisse, croûte océanique mince.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q4",
            "type": "mcq",
            "prompt": "Pourquoi l'écorce terrestre est-elle appelée SIAL ?",
            "options": [
              "Parce qu'elle est riche en silicium et en magnésium",
              "Parce qu'elle est faite de nickel et de fer",
              "Parce qu'elle est entièrement liquide et brûlante",
              "Parce qu'elle est riche en silicium et en aluminium"
            ],
            "correctAnswerIndex": 3,
            "explanation": "SI = silicium, AL = aluminium."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le manteau (SIMA)",
          "stepTheme": "Le manteau (SIMA)",
          "stepBadge": "Le manteau (SIMA)",
          "paragraphText": "Le manteau est la couche intermédiaire.\n• Épaisseur : environ 2 885 km.\n• Très chaud, fait de silicates et de magnésium : SIMA.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q5",
            "type": "mcq",
            "prompt": "Quelle est la couche intermédiaire de la Terre ?",
            "options": [
              "Le manteau",
              "L'écorce terrestre",
              "Le noyau interne",
              "L'atmosphère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "De l'extérieur vers le centre : écorce, manteau, noyau. Le manteau est au milieu."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le noyau (NIFE)",
          "stepTheme": "Le noyau (NIFE)",
          "stepBadge": "Le noyau (NIFE)",
          "paragraphText": "Le noyau est au centre de la Terre ; il est fait de nickel et de fer (NIFE).\n• Noyau externe : liquide.\n• Noyau interne, ou graine : solide.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q6",
            "type": "mcq",
            "prompt": "De quoi le noyau terrestre est-il essentiellement constitué ?",
            "options": [
              "De silicium et d'aluminium",
              "De nickel et de fer",
              "De silicium et de magnésium",
              "D'eau et de gaz carbonique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "NI = nickel, FE = fer : le noyau est appelé NIFE."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Liquide ou solide ?",
          "stepTheme": "Liquide ou solide ?",
          "stepBadge": "Liquide ou solide ?",
          "paragraphText": "Attention :\n• le noyau externe est liquide ;\n• le noyau interne (la graine) est solide.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q7",
            "type": "mcq",
            "prompt": "Comment appelle-t-on le noyau interne solide de la Terre ?",
            "options": [
              "Le manteau",
              "La graine",
              "Le SIAL",
              "La croûte océanique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le noyau interne, solide, est appelé la graine."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q1",
          "type": "mcq",
          "prompt": "Pourquoi appelle-t-on la Terre la « planète bleue » ?",
          "options": [
            "Parce que son atmosphère est entièrement composée d'ozone bleu",
            "Parce que les continents couvrent 71 % de sa surface",
            "Parce que les mers et les océans couvrent 71 % de sa surface",
            "Parce que le Soleil l'éclaire avec une lumière bleue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "71 % d'eau : vue de l'espace, la Terre paraît bleue."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q2",
          "type": "mcq",
          "prompt": "Quel est le plus petit des continents ?",
          "options": [
            "L'Europe",
            "L'Antarctique",
            "L'Afrique",
            "L'Océanie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'Océanie est le plus petit continent."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q3",
          "type": "mcq",
          "prompt": "Dans quel hémisphère se trouve la plus grande partie des terres émergées ?",
          "options": [
            "L'hémisphère Sud",
            "Elles sont réparties à égalité",
            "L'hémisphère Nord",
            "Elles se trouvent toutes sur l'équateur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les terres émergées sont surtout dans l'hémisphère Nord ; l'hémisphère Sud est surtout océanique."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q4",
          "type": "mcq",
          "prompt": "Pourquoi l'écorce terrestre est-elle appelée SIAL ?",
          "options": [
            "Parce qu'elle est riche en silicium et en magnésium",
            "Parce qu'elle est faite de nickel et de fer",
            "Parce qu'elle est entièrement liquide et brûlante",
            "Parce qu'elle est riche en silicium et en aluminium"
          ],
          "correctAnswerIndex": 3,
          "explanation": "SI = silicium, AL = aluminium."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q5",
          "type": "mcq",
          "prompt": "Quelle est la couche intermédiaire de la Terre ?",
          "options": [
            "Le manteau",
            "L'écorce terrestre",
            "Le noyau interne",
            "L'atmosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "De l'extérieur vers le centre : écorce, manteau, noyau. Le manteau est au milieu."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q6",
          "type": "mcq",
          "prompt": "De quoi le noyau terrestre est-il essentiellement constitué ?",
          "options": [
            "De silicium et d'aluminium",
            "De nickel et de fer",
            "De silicium et de magnésium",
            "D'eau et de gaz carbonique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "NI = nickel, FE = fer : le noyau est appelé NIFE."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p03_q7",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le noyau interne solide de la Terre ?",
          "options": [
            "Le manteau",
            "La graine",
            "Le SIAL",
            "La croûte océanique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le noyau interne, solide, est appelé la graine."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l02_planete_terre_p04",
      "order": 4,
      "title": "La rotation de la Terre",
      "summary": "Le mouvement de la Terre sur elle-même et ses conséquences.",
      "conceptExplanation": "La rotation est le mouvement que la Terre effectue sur elle-même, autour de l'axe des pôles, d'ouest en est, en 23 h 56 min 4 s (environ 24 heures). La vitesse de rotation est nulle aux pôles et atteint environ 1 666 km/h à l'équateur.\n\nConséquences :\n- la succession du jour et de la nuit : la face éclairée connaît le jour, l'autre la nuit ;\n- le décalage horaire : la Terre est divisée en 24 fuseaux horaires de 15° chacun ; on avance d'une heure par fuseau vers l'est et on recule d'une heure vers l'ouest ; l'heure du méridien de Greenwich est l'heure universelle (GMT) ;\n- la déviation des corps en mouvement (force de Coriolis) : vers la droite dans l'hémisphère Nord, vers la gauche dans l'hémisphère Sud ;\n- le mouvement apparent du Soleil : il semble se lever à l'est et se coucher à l'ouest, alors que c'est la Terre qui tourne sur elle-même d'ouest en est.",
      "keyRule": "Rotation : d'ouest en est en 24 h ; 24 fuseaux de 15° ; vers l'est on ajoute 1 h par 15°, vers l'ouest on retire 1 h.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer une heure locale",
        "statement": "Il est 14 h GMT. Quelle heure est-il au point A (15° N ; 60° O) ?",
        "methodSteps": [
          "Écart avec Greenwich : 60°.",
          "60 / 15 = 4 heures.",
          "A est à l'ouest : on retire 4 h.",
          "14 − 4 = 10 h."
        ],
        "conclusion": "Il est 10 h au point A."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La rotation",
          "stepTheme": "La rotation",
          "stepBadge": "La rotation",
          "paragraphText": "La rotation est le mouvement de la Terre sur elle-même, autour de l'axe des pôles.\nElle se fait d'ouest en est, en 23 h 56 min 4 s, soit environ 24 heures.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q1",
            "type": "mcq",
            "prompt": "En combien de temps la Terre fait-elle un tour sur elle-même ?",
            "options": [
              "Environ 24 heures (23 h 56 min 4 s)",
              "Environ 365 jours et 6 heures",
              "Environ 12 heures",
              "Environ 29 jours"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une rotation dure 23 h 56 min 4 s, environ un jour."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le jour et la nuit",
          "stepTheme": "Le jour et la nuit",
          "stepBadge": "Le jour et la nuit",
          "paragraphText": "Pendant la rotation, chaque face de la Terre passe tour à tour dans la lumière du Soleil puis dans l'ombre.\nLa face éclairée connaît le jour, l'autre face la nuit.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est la conséquence directe de la rotation de la Terre ?",
            "options": [
              "La succession des saisons dans l'année",
              "L'inégale durée des jours au solstice",
              "La dérive lente des continents",
              "La succession du jour et de la nuit"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La rotation fait alterner le jour et la nuit ; les saisons viennent de la révolution."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les fuseaux horaires",
          "stepTheme": "Les fuseaux horaires",
          "stepBadge": "Les fuseaux horaires",
          "paragraphText": "La Terre est divisée en 24 fuseaux horaires de 15° chacun (360° / 24 = 15°).\n• 15° de longitude = 1 heure.\n• Dans un même fuseau, on a la même heure.\n• L'heure du méridien de Greenwich est l'heure universelle (GMT).",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q3",
            "type": "mcq",
            "prompt": "Combien de degrés de longitude correspondent à une heure de décalage ?",
            "options": [
              "24°",
              "30°",
              "15°",
              "1°"
            ],
            "correctAnswerIndex": 2,
            "explanation": "360° / 24 h = 15° par heure."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Vers l'est ou vers l'ouest ?",
          "stepTheme": "Vers l'est ou vers l'ouest ?",
          "stepBadge": "Vers l'est ou vers l'ouest ?",
          "paragraphText": "• Vers l'est : on AVANCE d'une heure par fuseau (on ajoute).\n• Vers l'ouest : on RECULE d'une heure par fuseau (on retire).\nÉcart en heures = écart de longitude / 15.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q4",
            "type": "mcq",
            "prompt": "Il est 14 h GMT. Quelle heure est-il à 60° Ouest ?",
            "options": [
              "18 h",
              "14 h",
              "10 h",
              "4 h"
            ],
            "correctAnswerIndex": 2,
            "explanation": "60 / 15 = 4 h ; vers l'ouest on retire : 14 − 4 = 10 h."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calculer vers l'est",
          "stepTheme": "Calculer vers l'est",
          "stepBadge": "Calculer vers l'est",
          "paragraphText": "Exemple : il est 9 h GMT. À 45° Est, l'écart est 45 / 15 = 3 h.\nVers l'est, on ajoute : 9 + 3 = 12 h.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q5",
            "type": "mcq",
            "prompt": "Il est 8 h GMT. Quelle heure est-il à 30° Est ?",
            "options": [
              "10 h",
              "6 h",
              "8 h",
              "11 h"
            ],
            "correctAnswerIndex": 0,
            "explanation": "30 / 15 = 2 h ; vers l'est on ajoute : 8 + 2 = 10 h."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La force de Coriolis",
          "stepTheme": "La force de Coriolis",
          "stepBadge": "La force de Coriolis",
          "paragraphText": "Selon Gustave Coriolis, la rotation de la Terre dévie les corps en mouvement (vents, cours d'eau) :\n• vers la droite dans l'hémisphère Nord ;\n• vers la gauche dans l'hémisphère Sud.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q6",
            "type": "mcq",
            "prompt": "Dans l'hémisphère Nord, de quel côté la rotation de la Terre dévie-t-elle les vents ?",
            "options": [
              "Vers la gauche",
              "Vers le haut",
              "Elle ne les dévie pas",
              "Vers la droite"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Hémisphère Nord : vers la droite ; hémisphère Sud : vers la gauche."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le Soleil ne bouge pas",
          "stepTheme": "Le Soleil ne bouge pas",
          "stepBadge": "Le Soleil ne bouge pas",
          "paragraphText": "Le Soleil semble se lever à l'est et se coucher à l'ouest.\nCe n'est qu'une apparence : c'est la Terre qui tourne sur elle-même d'ouest en est.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q7",
            "type": "mcq",
            "prompt": "Pourquoi le Soleil semble-t-il se lever à l'est ?",
            "options": [
              "Parce que le Soleil tourne autour de la Terre d'est en ouest",
              "Parce que la Terre tourne sur elle-même d'ouest en est",
              "Parce que la Terre tourne sur elle-même d'est en ouest",
              "Parce que la Lune cache le Soleil pendant la nuit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le mouvement du Soleil est apparent : il résulte de la rotation de la Terre d'ouest en est."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q1",
          "type": "mcq",
          "prompt": "En combien de temps la Terre fait-elle un tour sur elle-même ?",
          "options": [
            "Environ 24 heures (23 h 56 min 4 s)",
            "Environ 365 jours et 6 heures",
            "Environ 12 heures",
            "Environ 29 jours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une rotation dure 23 h 56 min 4 s, environ un jour."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est la conséquence directe de la rotation de la Terre ?",
          "options": [
            "La succession des saisons dans l'année",
            "L'inégale durée des jours au solstice",
            "La dérive lente des continents",
            "La succession du jour et de la nuit"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La rotation fait alterner le jour et la nuit ; les saisons viennent de la révolution."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q3",
          "type": "mcq",
          "prompt": "Combien de degrés de longitude correspondent à une heure de décalage ?",
          "options": [
            "24°",
            "30°",
            "15°",
            "1°"
          ],
          "correctAnswerIndex": 2,
          "explanation": "360° / 24 h = 15° par heure."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q4",
          "type": "mcq",
          "prompt": "Il est 14 h GMT. Quelle heure est-il à 60° Ouest ?",
          "options": [
            "18 h",
            "14 h",
            "10 h",
            "4 h"
          ],
          "correctAnswerIndex": 2,
          "explanation": "60 / 15 = 4 h ; vers l'ouest on retire : 14 − 4 = 10 h."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q5",
          "type": "mcq",
          "prompt": "Il est 8 h GMT. Quelle heure est-il à 30° Est ?",
          "options": [
            "10 h",
            "6 h",
            "8 h",
            "11 h"
          ],
          "correctAnswerIndex": 0,
          "explanation": "30 / 15 = 2 h ; vers l'est on ajoute : 8 + 2 = 10 h."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q6",
          "type": "mcq",
          "prompt": "Dans l'hémisphère Nord, de quel côté la rotation de la Terre dévie-t-elle les vents ?",
          "options": [
            "Vers la gauche",
            "Vers le haut",
            "Elle ne les dévie pas",
            "Vers la droite"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Hémisphère Nord : vers la droite ; hémisphère Sud : vers la gauche."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p04_q7",
          "type": "mcq",
          "prompt": "Pourquoi le Soleil semble-t-il se lever à l'est ?",
          "options": [
            "Parce que le Soleil tourne autour de la Terre d'est en ouest",
            "Parce que la Terre tourne sur elle-même d'ouest en est",
            "Parce que la Terre tourne sur elle-même d'est en ouest",
            "Parce que la Lune cache le Soleil pendant la nuit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le mouvement du Soleil est apparent : il résulte de la rotation de la Terre d'ouest en est."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l02_planete_terre_p05",
      "order": 5,
      "title": "La révolution de la Terre",
      "summary": "Le mouvement de la Terre autour du Soleil, les solstices, les équinoxes et les saisons.",
      "conceptExplanation": "La révolution est le mouvement de la Terre autour du Soleil, d'ouest en est, en 365 jours et 6 heures, sur une ellipse appelée orbite terrestre. L'axe des pôles est incliné (66° sur le plan de l'orbite). Les 6 heures de retard s'accumulent : tous les 4 ans, on ajoute un jour en février (année bissextile de 366 jours).\n\nConséquences :\n- les solstices : le 21 juin (solstice d'été), le Soleil est au-dessus du tropique du Cancer et les jours sont plus longs dans l'hémisphère Nord ; le 21 décembre (solstice d'hiver), il est au-dessus du tropique du Capricorne et les jours sont plus longs dans l'hémisphère Sud ;\n- les équinoxes (21 mars et 21 septembre) : le Soleil est au-dessus de l'équateur, le jour et la nuit durent 12 heures partout ;\n- l'inégale répartition de la chaleur : une zone chaude entre les tropiques, deux zones tempérées, deux zones froides au-delà des cercles polaires ;\n- les saisons : quatre saisons dans les zones tempérées et froides (inversées dans l'hémisphère Sud) ; dans la zone chaude, la pluie fait les saisons (saison des pluies et saison sèche).",
      "keyRule": "Révolution : 365 j 6 h ; solstices (21 juin, 21 décembre) = jours inégaux ; équinoxes (21 mars, 21 septembre) = 12 h de jour partout.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l'année bissextile",
        "statement": "Pourquoi février compte-t-il 29 jours tous les 4 ans ?",
        "methodSteps": [
          "La révolution dure 365 jours et 6 heures.",
          "Chaque année, on garde 6 heures de retard.",
          "En 4 ans : 4 × 6 h = 24 h, soit un jour."
        ],
        "conclusion": "On ajoute ce jour en février : l'année bissextile compte 366 jours."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La révolution",
          "stepTheme": "La révolution",
          "stepBadge": "La révolution",
          "paragraphText": "La révolution est le mouvement de la Terre autour du Soleil.\nElle dure 365 jours et 6 heures et suit une ellipse appelée orbite terrestre.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q1",
            "type": "mcq",
            "prompt": "Combien de temps dure la révolution de la Terre autour du Soleil ?",
            "options": [
              "23 heures 56 minutes",
              "365 jours et 6 heures",
              "366 jours exactement",
              "29 jours et demi"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La révolution dure 365 jours et 6 heures."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "L'année bissextile",
          "stepTheme": "L'année bissextile",
          "stepBadge": "L'année bissextile",
          "paragraphText": "Chaque année, il reste 6 heures en plus des 365 jours.\nEn 4 ans : 4 × 6 h = 24 h = 1 jour.\nOn ajoute donc un jour en février : l'année bissextile compte 366 jours.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q2",
            "type": "mcq",
            "prompt": "Pourquoi ajoute-t-on un jour en février tous les 4 ans ?",
            "options": [
              "Parce que la Terre tourne plus vite sur elle-même tous les 4 ans",
              "Parce que la Lune fait un tour de plus autour de la Terre tous les 4 ans",
              "Pour rattraper les 4 minutes de retard de la rotation de la Terre",
              "Pour rattraper les 6 heures de retard accumulées chaque année (4 × 6 h = 24 h)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "4 × 6 h = 24 h : un jour entier à ajouter, d'où l'année bissextile."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le solstice d'été (21 juin)",
          "stepTheme": "Le solstice d'été (21 juin)",
          "stepBadge": "Le solstice d'été (21 juin)",
          "paragraphText": "Au solstice d'été, le 21 juin :\n• le Soleil est au-dessus du tropique du Cancer ;\n• l'hémisphère Nord est le plus éclairé : les jours y sont plus longs que les nuits ;\n• c'est l'inverse dans l'hémisphère Sud.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q3",
            "type": "mcq",
            "prompt": "Le 21 juin, au-dessus de quel tropique se trouve le Soleil ?",
            "options": [
              "Le tropique du Cancer",
              "Le tropique du Capricorne",
              "L'équateur",
              "Le cercle polaire arctique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "21 juin : Soleil au-dessus du tropique du Cancer (hémisphère Nord)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le solstice d'hiver (21 décembre)",
          "stepTheme": "Le solstice d'hiver (21 décembre)",
          "stepBadge": "Le solstice d'hiver (21 décembre)",
          "paragraphText": "Au solstice d'hiver, le 21 décembre :\n• le Soleil est au-dessus du tropique du Capricorne ;\n• l'hémisphère Sud est le plus éclairé : ses jours sont plus longs ;\n• dans les régions polaires du Nord, c'est la nuit polaire.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q4",
            "type": "mcq",
            "prompt": "Le 21 décembre, quel hémisphère a les jours les plus longs ?",
            "options": [
              "L'hémisphère Nord",
              "Les deux à égalité",
              "L'hémisphère Sud",
              "Aucun, il fait nuit partout"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le 21 décembre, le Soleil est au-dessus du tropique du Capricorne : l'hémisphère Sud est le plus éclairé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les équinoxes",
          "stepTheme": "Les équinoxes",
          "stepBadge": "Les équinoxes",
          "paragraphText": "Aux équinoxes (21 mars et 21 septembre), le Soleil est au-dessus de l'équateur.\nPartout sur la Terre, le jour et la nuit durent 12 heures chacun.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q5",
            "type": "mcq",
            "prompt": "Que se passe-t-il partout sur la Terre le jour d'un équinoxe ?",
            "options": [
              "Le jour dure 24 heures dans l'hémisphère Nord",
              "La nuit dure 24 heures à l'équateur",
              "Le Soleil est au-dessus du tropique du Cancer",
              "Le jour et la nuit durent 12 heures chacun"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Équinoxe = « nuit égale » : 12 h de jour et 12 h de nuit partout."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les zones thermiques",
          "stepTheme": "Les zones thermiques",
          "stepBadge": "Les zones thermiques",
          "paragraphText": "La chaleur est inégalement répartie :\n• une zone chaude entre les deux tropiques ;\n• deux zones tempérées entre les tropiques et les cercles polaires ;\n• deux zones froides au-delà des cercles polaires.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q6",
            "type": "mcq",
            "prompt": "Où se situe la zone chaude ?",
            "options": [
              "Entre les tropiques et les cercles polaires",
              "Au-delà des cercles polaires",
              "Entre les deux tropiques",
              "Uniquement sur l'équateur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La zone chaude s'étend entre le tropique du Cancer et le tropique du Capricorne."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Les saisons en Côte d'Ivoire",
          "stepTheme": "Les saisons en Côte d'Ivoire",
          "stepBadge": "Les saisons en Côte d'Ivoire",
          "paragraphText": "• Zones tempérées et froides : quatre saisons (été, automne, hiver, printemps), inversées dans l'hémisphère Sud.\n• Zone chaude (comme la Côte d'Ivoire) : c'est la pluie qui fait les saisons : saison des pluies et saison sèche.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q7",
            "type": "mcq",
            "prompt": "En zone chaude, comme en Côte d'Ivoire, qu'est-ce qui détermine les saisons ?",
            "options": [
              "La température (été, automne, hiver, printemps)",
              "La pluie (saison des pluies et saison sèche)",
              "La durée du jour, qui change beaucoup dans l'année",
              "La position de la Lune autour de la Terre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans la zone chaude, on distingue les saisons par la pluie."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q1",
          "type": "mcq",
          "prompt": "Combien de temps dure la révolution de la Terre autour du Soleil ?",
          "options": [
            "23 heures 56 minutes",
            "365 jours et 6 heures",
            "366 jours exactement",
            "29 jours et demi"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La révolution dure 365 jours et 6 heures."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q2",
          "type": "mcq",
          "prompt": "Pourquoi ajoute-t-on un jour en février tous les 4 ans ?",
          "options": [
            "Parce que la Terre tourne plus vite sur elle-même tous les 4 ans",
            "Parce que la Lune fait un tour de plus autour de la Terre tous les 4 ans",
            "Pour rattraper les 4 minutes de retard de la rotation de la Terre",
            "Pour rattraper les 6 heures de retard accumulées chaque année (4 × 6 h = 24 h)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "4 × 6 h = 24 h : un jour entier à ajouter, d'où l'année bissextile."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q3",
          "type": "mcq",
          "prompt": "Le 21 juin, au-dessus de quel tropique se trouve le Soleil ?",
          "options": [
            "Le tropique du Cancer",
            "Le tropique du Capricorne",
            "L'équateur",
            "Le cercle polaire arctique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "21 juin : Soleil au-dessus du tropique du Cancer (hémisphère Nord)."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q4",
          "type": "mcq",
          "prompt": "Le 21 décembre, quel hémisphère a les jours les plus longs ?",
          "options": [
            "L'hémisphère Nord",
            "Les deux à égalité",
            "L'hémisphère Sud",
            "Aucun, il fait nuit partout"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le 21 décembre, le Soleil est au-dessus du tropique du Capricorne : l'hémisphère Sud est le plus éclairé."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q5",
          "type": "mcq",
          "prompt": "Que se passe-t-il partout sur la Terre le jour d'un équinoxe ?",
          "options": [
            "Le jour dure 24 heures dans l'hémisphère Nord",
            "La nuit dure 24 heures à l'équateur",
            "Le Soleil est au-dessus du tropique du Cancer",
            "Le jour et la nuit durent 12 heures chacun"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Équinoxe = « nuit égale » : 12 h de jour et 12 h de nuit partout."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q6",
          "type": "mcq",
          "prompt": "Où se situe la zone chaude ?",
          "options": [
            "Entre les tropiques et les cercles polaires",
            "Au-delà des cercles polaires",
            "Entre les deux tropiques",
            "Uniquement sur l'équateur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La zone chaude s'étend entre le tropique du Cancer et le tropique du Capricorne."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p05_q7",
          "type": "mcq",
          "prompt": "En zone chaude, comme en Côte d'Ivoire, qu'est-ce qui détermine les saisons ?",
          "options": [
            "La température (été, automne, hiver, printemps)",
            "La pluie (saison des pluies et saison sèche)",
            "La durée du jour, qui change beaucoup dans l'année",
            "La position de la Lune autour de la Terre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans la zone chaude, on distingue les saisons par la pluie."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l02_planete_terre_p06",
      "order": 6,
      "title": "Une planète animée : dérive et tectonique",
      "summary": "La dérive des continents de Wegener et la tectonique des plaques.",
      "conceptExplanation": "En 1912, l'Allemand Alfred Wegener émet l'hypothèse de la dérive des continents : il y a plus de 200 millions d'années, les continents étaient soudés en un seul continent, la Pangée, qui s'est fragmenté pour donner les continents et les océans actuels. Il s'appuie sur les contours des continents qui s'emboîtent, sur les roches et les sédiments.\n\nDepuis 1958, l'étude des fonds océaniques montre que l'écorce terrestre est découpée en plaques (Amérique, Pacifique, Nazca, Afrique, Eurasie, Indo-Australie, Antarctique).\n- Quand les plaques se rapprochent (convergence : collision ou subduction), naissent des chaînes de montagnes et des volcans : Cordillère des Andes, Rocheuses.\n- Quand elles s'éloignent (divergence, accrétion), naissent des océans, des mers et des fossés.\n- Leurs frottements provoquent des séismes et des éruptions volcaniques.",
      "keyRule": "Wegener (1912) : la Pangée ; plaques qui se rapprochent = montagnes et volcans ; plaques qui s'éloignent = océans et fossés.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer une chaîne de montagnes",
        "statement": "Pourquoi la Cordillère des Andes s'est-elle formée à l'ouest de l'Amérique du Sud ?",
        "methodSteps": [
          "La plaque de Nazca (Pacifique) rencontre la plaque sud-américaine.",
          "C'est un mouvement de convergence (subduction).",
          "La convergence fait naître montagnes et volcans."
        ],
        "conclusion": "Les Andes sont nées de la convergence de deux plaques."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dérive des continents",
          "stepTheme": "La dérive des continents",
          "stepBadge": "La dérive des continents",
          "paragraphText": "En 1912, l'Allemand Alfred Wegener émet l'hypothèse de la dérive des continents : les continents se sont déplacés au cours du temps.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q1",
            "type": "mcq",
            "prompt": "Qui a émis l'hypothèse de la dérive des continents en 1912 ?",
            "options": [
              "Alfred Wegener",
              "Nicolas Copernic",
              "Gustave Coriolis",
              "Gerardus Mercator"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Alfred Wegener, savant allemand, en 1912."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La Pangée",
          "stepTheme": "La Pangée",
          "stepBadge": "La Pangée",
          "paragraphText": "Selon Wegener, il y a plus de 200 millions d'années, tous les continents étaient soudés en un seul continent : la Pangée.\nElle s'est ensuite fragmentée pour donner les continents actuels.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q2",
            "type": "mcq",
            "prompt": "Comment s'appelait le continent unique d'il y a plus de 200 millions d'années ?",
            "options": [
              "La Pangée",
              "La Laurasie",
              "L'Atlantide",
              "Le Gondwana"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La Pangée était le continent unique qui s'est ensuite fragmenté."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les preuves de Wegener",
          "stepTheme": "Les preuves de Wegener",
          "stepBadge": "Les preuves de Wegener",
          "paragraphText": "Wegener appuie sa théorie sur :\n• les contours des continents qui s'emboîtent (Afrique et Amérique du Sud) ;\n• les roches et les sédiments identiques de part et d'autre des océans.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q3",
            "type": "mcq",
            "prompt": "Quelle observation Wegener utilise-t-il pour appuyer sa théorie ?",
            "options": [
              "La rotation de la Terre qui dévie les vents vers la droite",
              "Les contours des continents qui s'emboîtent, comme l'Afrique et l'Amérique du Sud",
              "L'ombre ronde de la Terre sur la Lune lors des éclipses",
              "La différence de durée entre le jour et la nuit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les côtes de l'Afrique et de l'Amérique du Sud s'emboîtent comme un puzzle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les plaques tectoniques",
          "stepTheme": "Les plaques tectoniques",
          "stepBadge": "Les plaques tectoniques",
          "paragraphText": "Depuis 1958, l'étude des fonds océaniques montre que l'écorce terrestre est découpée en plaques : Amérique, Pacifique, Nazca, Afrique, Eurasie, Indo-Australie, Antarctique.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q4",
            "type": "mcq",
            "prompt": "Que montre l'étude des fonds océaniques depuis 1958 ?",
            "options": [
              "La Terre est un disque plat posé sur l'eau",
              "Les continents n'ont jamais bougé",
              "L'écorce terrestre est découpée en plusieurs plaques",
              "Le noyau terrestre est entièrement solide"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'écorce est fragmentée en plaques mobiles : c'est la tectonique des plaques."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Quand les plaques se rapprochent",
          "stepTheme": "Quand les plaques se rapprochent",
          "stepBadge": "Quand les plaques se rapprochent",
          "paragraphText": "Mouvement de convergence (collision ou subduction) : les plaques se rapprochent.\nIl fait naître des chaînes de montagnes et des volcans.\nExemples : la Cordillère des Andes, les Rocheuses.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q5",
            "type": "mcq",
            "prompt": "Quelle est la conséquence de la convergence de deux plaques ?",
            "options": [
              "La formation de nouveaux océans et de fossés",
              "La disparition des saisons",
              "L'arrêt de la rotation de la Terre",
              "La formation de chaînes de montagnes et de volcans"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Convergence : montagnes et volcans (Andes, Rocheuses)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Quand les plaques s'éloignent",
          "stepTheme": "Quand les plaques s'éloignent",
          "stepBadge": "Quand les plaques s'éloignent",
          "paragraphText": "Mouvement de divergence (éloignement, accrétion) : les plaques s'écartent.\nIl fait naître des océans, des mers et des fossés.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q6",
            "type": "mcq",
            "prompt": "Que provoque l'éloignement de deux plaques ?",
            "options": [
              "La naissance de chaînes de montagnes",
              "La formation de la Pangée",
              "La naissance d'océans, de mers et de fossés",
              "L'aplatissement de la Terre aux pôles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Divergence : ouverture d'océans et de fossés."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Séismes et volcans",
          "stepTheme": "Séismes et volcans",
          "stepBadge": "Séismes et volcans",
          "paragraphText": "Les frottements entre les plaques provoquent les tremblements de terre (séismes) et les éruptions volcaniques.\nIls ne sont donc pas dus au hasard.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q7",
            "type": "mcq",
            "prompt": "Quelle est l'origine des séismes ?",
            "options": [
              "La rotation de la Terre sur elle-même",
              "L'attraction de la Lune sur les océans",
              "Les variations de la température de l'air",
              "Les frottements entre les plaques tectoniques"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les séismes naissent des mouvements et frottements des plaques."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q1",
          "type": "mcq",
          "prompt": "Qui a émis l'hypothèse de la dérive des continents en 1912 ?",
          "options": [
            "Alfred Wegener",
            "Nicolas Copernic",
            "Gustave Coriolis",
            "Gerardus Mercator"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Alfred Wegener, savant allemand, en 1912."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q2",
          "type": "mcq",
          "prompt": "Comment s'appelait le continent unique d'il y a plus de 200 millions d'années ?",
          "options": [
            "La Pangée",
            "La Laurasie",
            "L'Atlantide",
            "Le Gondwana"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Pangée était le continent unique qui s'est ensuite fragmenté."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q3",
          "type": "mcq",
          "prompt": "Quelle observation Wegener utilise-t-il pour appuyer sa théorie ?",
          "options": [
            "La rotation de la Terre qui dévie les vents vers la droite",
            "Les contours des continents qui s'emboîtent, comme l'Afrique et l'Amérique du Sud",
            "L'ombre ronde de la Terre sur la Lune lors des éclipses",
            "La différence de durée entre le jour et la nuit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les côtes de l'Afrique et de l'Amérique du Sud s'emboîtent comme un puzzle."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q4",
          "type": "mcq",
          "prompt": "Que montre l'étude des fonds océaniques depuis 1958 ?",
          "options": [
            "La Terre est un disque plat posé sur l'eau",
            "Les continents n'ont jamais bougé",
            "L'écorce terrestre est découpée en plusieurs plaques",
            "Le noyau terrestre est entièrement solide"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'écorce est fragmentée en plaques mobiles : c'est la tectonique des plaques."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q5",
          "type": "mcq",
          "prompt": "Quelle est la conséquence de la convergence de deux plaques ?",
          "options": [
            "La formation de nouveaux océans et de fossés",
            "La disparition des saisons",
            "L'arrêt de la rotation de la Terre",
            "La formation de chaînes de montagnes et de volcans"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Convergence : montagnes et volcans (Andes, Rocheuses)."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q6",
          "type": "mcq",
          "prompt": "Que provoque l'éloignement de deux plaques ?",
          "options": [
            "La naissance de chaînes de montagnes",
            "La formation de la Pangée",
            "La naissance d'océans, de mers et de fossés",
            "L'aplatissement de la Terre aux pôles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Divergence : ouverture d'océans et de fossés."
        },
        {
          "id": "seconde_a_hg_geographie_l02_planete_terre_p06_q7",
          "type": "mcq",
          "prompt": "Quelle est l'origine des séismes ?",
          "options": [
            "La rotation de la Terre sur elle-même",
            "L'attraction de la Lune sur les océans",
            "Les variations de la température de l'air",
            "Les frottements entre les plaques tectoniques"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les séismes naissent des mouvements et frottements des plaques."
        }
      ]
    }
  ]
};
