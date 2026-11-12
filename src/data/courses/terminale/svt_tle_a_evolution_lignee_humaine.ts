import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT TA_L4_Lévolution de la lignée humaine.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const SVT_TLE_A_L04_EVOLUTION_LIGNEE_HUMAINE: CurriculumChapter = {
  "id": "terminale_a_svt_l04_evolution_lignee_humaine",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 4,
  "title": "Leçon 4 : L'évolution de la lignée humaine",
  "summary": "Crâne et cerveau de l'australopithèque à Homo sapiens, stature et bipédie, comparaison de l'hémoglobine (homme, gorille, porc, cheval), théories de Lamarck, Darwin, De Vries et Morgan, théorie synthétique.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT TA_L4_Lévolution de la lignée humaine.pdf",
  "points": [
    {
      "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01",
      "order": 1,
      "title": "Le crâne et le cerveau au cours de l'évolution",
      "summary": "De l'australopithèque à Homo sapiens : un crâne et un cerveau qui grandissent.",
      "conceptExplanation": "Situation : un film documentaire montre le passage de l'australopithèque (hominidé fossile) à Homo sapiens, l'homme d'aujourd'hui. Hypothèses : l'évolution de la lignée humaine s'est faite par des transformations morphologiques, des modifications de stature, des modifications moléculaires ; elle est expliquée par des théories.\n\nDocument 1 : crânes et moulages du cerveau de A. Australopithecus, B. Homo habilis, C. Homo erectus, D. Homme de Néandertal (Homo sapiens neanderthalensis, aujourd'hui souvent appelé Homo neanderthalensis), E. Homo sapiens sapiens.\n\nOrdres de grandeur du volume du cerveau (valeurs moyennes habituelles) :\n- australopithèque : environ 450 cm³ ;\n- Homo habilis : environ 650 cm³ ;\n- Homo erectus : environ 1 000 cm³ ;\n- Homme de Néandertal : environ 1 500 cm³ ;\n- Homo sapiens actuel : environ 1 350 cm³.\n\nRésultats : quand on passe des australopithèques à Homo sapiens sapiens :\n- la morphologie du crâne se modifie (front plus droit, face moins avancée) ;\n- la boîte crânienne et le cerveau augmentent progressivement de volume ;\n- les circonvolutions (plis) du cerveau deviennent plus nombreuses ;\n- la vascularisation du cerveau augmente, avec de plus en plus de ramifications.\n\nConclusion : l'évolution de la lignée humaine s'est faite par des transformations morphologiques.\n\nNuance : à l'échelle de la lignée, l'augmentation du volume et de la complexité du cerveau accompagne le développement des capacités (outils, langage). Mais entre individus d'aujourd'hui, la taille du cerveau ne mesure pas l'intelligence ; et Néandertal avait en moyenne un cerveau un peu plus gros que le nôtre.",
      "keyRule": "De l'australopithèque à Homo sapiens : crâne modifié, boîte crânienne et cerveau plus volumineux, plus de circonvolutions et de vaisseaux.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer deux volumes",
        "statement": "Le cerveau d'un australopithèque mesure environ 450 cm³, celui d'Homo sapiens environ 1 350 cm³. Combien de fois plus gros est le cerveau d'Homo sapiens ?",
        "methodSteps": [
          "On divise : 1 350 ÷ 450.",
          "1 350 ÷ 450 = 3."
        ],
        "conclusion": "Le cerveau d'Homo sapiens est environ 3 fois plus volumineux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les hominidés",
          "stepTheme": "Les hominidés",
          "stepBadge": "Les hominidés",
          "paragraphText": "La lignée humaine va de l'australopithèque (hominidé fossile) à Homo sapiens, en passant par Homo habilis, Homo erectus et l'Homme de Néandertal.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q1",
            "type": "mcq",
            "prompt": "Le document 1 présente les crânes de l'australopithèque, d'Homo habilis, d'Homo erectus, de l'Homme de Néandertal et d'Homo sapiens. Lequel est le plus ancien ?",
            "options": [
              "Homo sapiens",
              "Homo erectus",
              "L'australopithèque",
              "L'Homme de Néandertal"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'australopithèque est un hominidé fossile, à la base de la série."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un cerveau plus gros",
          "stepTheme": "Un cerveau plus gros",
          "stepBadge": "Un cerveau plus gros",
          "paragraphText": "Des australopithèques à Homo sapiens, la boîte crânienne et le cerveau augmentent progressivement de volume.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q2",
            "type": "mcq",
            "prompt": "Vrai ou faux : « Le passage des australopithèques aux Homo sapiens sapiens se caractérise par une augmentation du volume de la boîte crânienne et du cerveau. »",
            "options": [
              "Vrai",
              "Faux : le volume diminue",
              "Faux : le volume ne change pas",
              "Faux : seul le crâne grandit, pas le cerveau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cerveau passe d'environ 450 cm³ à environ 1 350 cm³."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calculer un rapport",
          "stepTheme": "Calculer un rapport",
          "stepBadge": "Calculer un rapport",
          "paragraphText": "Cerveau d'australopithèque : environ 450 cm³ ; cerveau d'Homo sapiens : environ 1 350 cm³ ; 1 350 ÷ 450 = 3.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q3",
            "type": "mcq",
            "prompt": "Le volume moyen du cerveau est d'environ 450 cm³ chez l'australopithèque et d'environ 1 350 cm³ chez Homo sapiens. Combien de fois plus volumineux est le cerveau d'Homo sapiens ?",
            "options": [
              "2 fois",
              "3 fois",
              "4 fois",
              "900 fois"
            ],
            "correctAnswerIndex": 1,
            "explanation": "1 350 ÷ 450 = 3."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Les circonvolutions",
          "stepTheme": "Les circonvolutions",
          "stepBadge": "Les circonvolutions",
          "paragraphText": "Au cours de l'évolution, les circonvolutions du cerveau deviennent plus nombreuses ; elles ne disparaissent pas.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q4",
            "type": "mcq",
            "prompt": "Vrai ou faux : « Le passage des australopithèques aux Homo sapiens sapiens se caractérise par la disparition des circonvolutions sur le cerveau. »",
            "options": [
              "Vrai",
              "Faux : les circonvolutions deviennent plus nombreuses",
              "Faux : il n'y a jamais eu de circonvolutions",
              "Vrai, seulement chez Néandertal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Plus de plis, c'est plus de surface pour le cortex."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La vascularisation",
          "stepTheme": "La vascularisation",
          "stepBadge": "La vascularisation",
          "paragraphText": "Le nombre de vaisseaux sanguins du cerveau, faible au départ, augmente avec de plus en plus de ramifications.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q5",
            "type": "mcq",
            "prompt": "Les moulages du cerveau, de l'australopithèque à Homo sapiens, montrent les traces des vaisseaux sanguins. Comment évolue la vascularisation ?",
            "options": [
              "Elle diminue",
              "Elle augmente, avec de plus en plus de ramifications",
              "Elle disparaît",
              "Elle reste identique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un cerveau plus actif a besoin de plus de sang."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Néandertal",
          "stepTheme": "Néandertal",
          "stepBadge": "Néandertal",
          "paragraphText": "L'Homme de Néandertal avait en moyenne un cerveau d'environ 1 500 cm³, un peu plus gros que celui d'Homo sapiens (environ 1 350 cm³).",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q6",
            "type": "mcq",
            "prompt": "Le cerveau de l'Homme de Néandertal mesurait en moyenne environ 1 500 cm³, celui d'Homo sapiens environ 1 350 cm³. Que montre cette comparaison ?",
            "options": [
              "Que Néandertal était forcément plus intelligent que nous",
              "Que la taille du cerveau ne suffit pas à mesurer l'intelligence",
              "Que le cerveau humain a rétréci de moitié",
              "Que Néandertal n'était pas un hominidé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'organisation du cerveau compte autant que sa taille."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "La conclusion",
          "stepTheme": "La conclusion",
          "stepBadge": "La conclusion",
          "paragraphText": "L'évolution de la lignée humaine s'est faite par des transformations morphologiques du crâne et du cerveau.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q7",
            "type": "mcq",
            "prompt": "On observe, de l'australopithèque à Homo sapiens : modification de la forme du crâne, augmentation du volume du cerveau, plus de circonvolutions et de vaisseaux. Quelle conclusion en tire-t-on ?",
            "options": [
              "L'évolution humaine s'est faite par des transformations morphologiques",
              "L'homme n'a pas évolué",
              "Seule la taille du corps a changé",
              "Les australopithèques étaient des Homo sapiens"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Morphologie = forme et structure."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q1",
          "type": "mcq",
          "prompt": "Le document 1 présente les crânes de l'australopithèque, d'Homo habilis, d'Homo erectus, de l'Homme de Néandertal et d'Homo sapiens. Lequel est le plus ancien ?",
          "options": [
            "Homo sapiens",
            "Homo erectus",
            "L'australopithèque",
            "L'Homme de Néandertal"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'australopithèque est un hominidé fossile, à la base de la série."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q2",
          "type": "mcq",
          "prompt": "Vrai ou faux : « Le passage des australopithèques aux Homo sapiens sapiens se caractérise par une augmentation du volume de la boîte crânienne et du cerveau. »",
          "options": [
            "Vrai",
            "Faux : le volume diminue",
            "Faux : le volume ne change pas",
            "Faux : seul le crâne grandit, pas le cerveau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cerveau passe d'environ 450 cm³ à environ 1 350 cm³."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q3",
          "type": "mcq",
          "prompt": "Le volume moyen du cerveau est d'environ 450 cm³ chez l'australopithèque et d'environ 1 350 cm³ chez Homo sapiens. Combien de fois plus volumineux est le cerveau d'Homo sapiens ?",
          "options": [
            "2 fois",
            "3 fois",
            "4 fois",
            "900 fois"
          ],
          "correctAnswerIndex": 1,
          "explanation": "1 350 ÷ 450 = 3."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q4",
          "type": "mcq",
          "prompt": "Vrai ou faux : « Le passage des australopithèques aux Homo sapiens sapiens se caractérise par la disparition des circonvolutions sur le cerveau. »",
          "options": [
            "Vrai",
            "Faux : les circonvolutions deviennent plus nombreuses",
            "Faux : il n'y a jamais eu de circonvolutions",
            "Vrai, seulement chez Néandertal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Plus de plis, c'est plus de surface pour le cortex."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q5",
          "type": "mcq",
          "prompt": "Les moulages du cerveau, de l'australopithèque à Homo sapiens, montrent les traces des vaisseaux sanguins. Comment évolue la vascularisation ?",
          "options": [
            "Elle diminue",
            "Elle augmente, avec de plus en plus de ramifications",
            "Elle disparaît",
            "Elle reste identique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un cerveau plus actif a besoin de plus de sang."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q6",
          "type": "mcq",
          "prompt": "Le cerveau de l'Homme de Néandertal mesurait en moyenne environ 1 500 cm³, celui d'Homo sapiens environ 1 350 cm³. Que montre cette comparaison ?",
          "options": [
            "Que Néandertal était forcément plus intelligent que nous",
            "Que la taille du cerveau ne suffit pas à mesurer l'intelligence",
            "Que le cerveau humain a rétréci de moitié",
            "Que Néandertal n'était pas un hominidé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'organisation du cerveau compte autant que sa taille."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p01_q7",
          "type": "mcq",
          "prompt": "On observe, de l'australopithèque à Homo sapiens : modification de la forme du crâne, augmentation du volume du cerveau, plus de circonvolutions et de vaisseaux. Quelle conclusion en tire-t-on ?",
          "options": [
            "L'évolution humaine s'est faite par des transformations morphologiques",
            "L'homme n'a pas évolué",
            "Seule la taille du corps a changé",
            "Les australopithèques étaient des Homo sapiens"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Morphologie = forme et structure."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02",
      "order": 2,
      "title": "La stature : debout sur deux jambes",
      "summary": "Comparer le squelette du chimpanzé (gorille) et celui de l'homme.",
      "conceptExplanation": "Document 2 : comparaison du squelette du chimpanzé (ou du gorille) et de l'homme. Pour chaque caractère : chimpanzé (gorille) / homme.\n- Colonne vertébrale : une seule courbure (en arc) / 4 courbures (en S) ;\n- Bassin : étroit et allongé / large et court ;\n- Membre supérieur : bras court, paume large, doigts courts / bras plus libre, paume mince, pouce bien dégagé et opposable, doigts longs (main habile) ;\n- Membre inférieur : pied large et court, gros orteil opposé aux autres doigts (pied préhensile), voûte plantaire peu développée / pied mince et long, tous les orteils parallèles, voûte plantaire développée.\n\nInterprétation : ces caractères de l'homme sont des adaptations à la BIPÉDIE (marche debout sur deux jambes) :\n- les 4 courbures de la colonne amortissent les chocs et placent la tête au-dessus du bassin ;\n- le bassin large et court soutient les organes et porte le poids du corps ;\n- la voûte plantaire et les orteils parallèles permettent une marche efficace ;\n- les mains, libérées de la marche, servent à fabriquer et utiliser des outils.\n\nConclusion : l'évolution de la lignée humaine s'est faite par des modifications de la stature : passage d'une posture penchée (quadrupédie) à une posture redressée (bipédie).",
      "keyRule": "Homme : colonne à 4 courbures, bassin large et court, voûte plantaire, orteils parallèles = bipédie. Chimpanzé : 1 courbure, bassin étroit et allongé, gros orteil opposable.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître un squelette",
        "statement": "Un squelette fossile possède une colonne vertébrale à 4 courbures, un bassin large et court et une voûte plantaire développée. Ressemble-t-il plus à l'homme ou au chimpanzé ?",
        "methodSteps": [
          "4 courbures : caractère humain.",
          "Bassin large et court, voûte plantaire : caractères humains liés à la bipédie."
        ],
        "conclusion": "Il ressemble à l'homme : il marchait debout."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "La colonne vertébrale",
          "stepTheme": "La colonne vertébrale",
          "stepBadge": "La colonne vertébrale",
          "paragraphText": "La colonne vertébrale du chimpanzé (gorille) a une seule courbure ; celle de l'homme en a quatre.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q1",
            "type": "mcq",
            "prompt": "D'après le tableau de comparaison du chimpanzé (gorille) et de l'homme, combien de courbures possède la colonne vertébrale de l'homme ?",
            "options": [
              "Une seule",
              "Deux",
              "Quatre",
              "Aucune"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le chimpanzé n'en a qu'une : sa colonne est en arc."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le bassin",
          "stepTheme": "Le bassin",
          "stepBadge": "Le bassin",
          "paragraphText": "Le bassin du chimpanzé est étroit et allongé ; celui de l'homme est large et court.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q2",
            "type": "mcq",
            "prompt": "D'après le tableau de comparaison, comment est le bassin de l'homme par rapport à celui du chimpanzé (étroit et allongé) ?",
            "options": [
              "Étroit et allongé lui aussi",
              "Large et court",
              "Absent",
              "Très long"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un bassin large et court supporte le poids du corps debout."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le pied",
          "stepTheme": "Le pied",
          "stepBadge": "Le pied",
          "paragraphText": "Chez le chimpanzé, le gros orteil est opposé aux autres doigts et la voûte plantaire est peu développée ; chez l'homme, les orteils sont parallèles et la voûte plantaire est développée.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q3",
            "type": "mcq",
            "prompt": "Quel caractère du membre inférieur appartient à l'homme, et non au chimpanzé ?",
            "options": [
              "Un gros orteil opposé aux autres doigts",
              "Une voûte plantaire peu développée",
              "Des orteils parallèles et une voûte plantaire développée",
              "Un pied large et court"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce pied est adapté à la marche, pas à la saisie des branches."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La main",
          "stepTheme": "La main",
          "stepBadge": "La main",
          "paragraphText": "La main humaine a une paume mince, des doigts longs et un pouce bien dégagé, opposable aux autres doigts : elle est très habile.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q4",
            "type": "mcq",
            "prompt": "D'après le tableau de comparaison, comment est la paume de la main de l'homme, par rapport à celle du chimpanzé (paume large) ?",
            "options": [
              "Large",
              "Mince, avec un pouce bien dégagé",
              "Sans pouce",
              "Couverte de poils"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La main libérée de la marche sert à manipuler et à fabriquer."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La bipédie",
          "stepTheme": "La bipédie",
          "stepBadge": "La bipédie",
          "paragraphText": "La bipédie est la marche debout sur les deux membres inférieurs. Les caractères du squelette humain y sont adaptés.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q5",
            "type": "mcq",
            "prompt": "La colonne à 4 courbures, le bassin large et court et la voûte plantaire de l'homme sont des adaptations à quel mode de déplacement ?",
            "options": [
              "La nage",
              "La bipédie (marche debout sur deux jambes)",
              "Le vol",
              "La reptation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ils maintiennent le corps redressé et amortissent les chocs."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Compléter un tableau",
          "stepTheme": "Compléter un tableau",
          "stepBadge": "Compléter un tableau",
          "paragraphText": "Chimpanzé : une courbure, étroit et allongé, paume large, voûte peu développée. Homme : 4 courbures, large et court, paume mince, voûte développée.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q6",
            "type": "mcq",
            "prompt": "On complète le tableau chimpanzé / homme avec : « une courbure », « 4 courbures », « étroit et allongé », « large et court ». Quelle ligne est juste ?",
            "options": [
              "Colonne : chimpanzé 4 courbures, homme une courbure",
              "Bassin : chimpanzé étroit et allongé, homme large et court",
              "Bassin : chimpanzé large et court, homme étroit et allongé",
              "Colonne : les deux ont 4 courbures"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le bassin humain est adapté à la station debout."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "La conclusion",
          "stepTheme": "La conclusion",
          "stepBadge": "La conclusion",
          "paragraphText": "L'évolution de la lignée humaine s'est faite par des modifications de la stature : passage d'une posture penchée à une posture redressée.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q7",
            "type": "mcq",
            "prompt": "La comparaison des squelettes du chimpanzé et de l'homme (colonne, bassin, mains, pieds) permet de conclure que l'évolution humaine s'est faite par :",
            "options": [
              "Des modifications de la stature (passage à la bipédie)",
              "Des modifications de la couleur de la peau",
              "La disparition des membres",
              "Aucune modification"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la deuxième hypothèse du cours, vérifiée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q1",
          "type": "mcq",
          "prompt": "D'après le tableau de comparaison du chimpanzé (gorille) et de l'homme, combien de courbures possède la colonne vertébrale de l'homme ?",
          "options": [
            "Une seule",
            "Deux",
            "Quatre",
            "Aucune"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le chimpanzé n'en a qu'une : sa colonne est en arc."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q2",
          "type": "mcq",
          "prompt": "D'après le tableau de comparaison, comment est le bassin de l'homme par rapport à celui du chimpanzé (étroit et allongé) ?",
          "options": [
            "Étroit et allongé lui aussi",
            "Large et court",
            "Absent",
            "Très long"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un bassin large et court supporte le poids du corps debout."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q3",
          "type": "mcq",
          "prompt": "Quel caractère du membre inférieur appartient à l'homme, et non au chimpanzé ?",
          "options": [
            "Un gros orteil opposé aux autres doigts",
            "Une voûte plantaire peu développée",
            "Des orteils parallèles et une voûte plantaire développée",
            "Un pied large et court"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce pied est adapté à la marche, pas à la saisie des branches."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q4",
          "type": "mcq",
          "prompt": "D'après le tableau de comparaison, comment est la paume de la main de l'homme, par rapport à celle du chimpanzé (paume large) ?",
          "options": [
            "Large",
            "Mince, avec un pouce bien dégagé",
            "Sans pouce",
            "Couverte de poils"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La main libérée de la marche sert à manipuler et à fabriquer."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q5",
          "type": "mcq",
          "prompt": "La colonne à 4 courbures, le bassin large et court et la voûte plantaire de l'homme sont des adaptations à quel mode de déplacement ?",
          "options": [
            "La nage",
            "La bipédie (marche debout sur deux jambes)",
            "Le vol",
            "La reptation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ils maintiennent le corps redressé et amortissent les chocs."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q6",
          "type": "mcq",
          "prompt": "On complète le tableau chimpanzé / homme avec : « une courbure », « 4 courbures », « étroit et allongé », « large et court ». Quelle ligne est juste ?",
          "options": [
            "Colonne : chimpanzé 4 courbures, homme une courbure",
            "Bassin : chimpanzé étroit et allongé, homme large et court",
            "Bassin : chimpanzé large et court, homme étroit et allongé",
            "Colonne : les deux ont 4 courbures"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le bassin humain est adapté à la station debout."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p02_q7",
          "type": "mcq",
          "prompt": "La comparaison des squelettes du chimpanzé et de l'homme (colonne, bassin, mains, pieds) permet de conclure que l'évolution humaine s'est faite par :",
          "options": [
            "Des modifications de la stature (passage à la bipédie)",
            "Des modifications de la couleur de la peau",
            "La disparition des membres",
            "Aucune modification"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la deuxième hypothèse du cours, vérifiée."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03",
      "order": 3,
      "title": "Les molécules racontent la parenté",
      "summary": "Comparer l'hémoglobine de l'homme, du gorille, du porc et du cheval.",
      "conceptExplanation": "Document 3 : les 19 premiers acides aminés de la chaîne β de l'hémoglobine de 4 espèces.\n- Homme : VAL HIS LEU THR PRO GLU GLU LYS SER ALA VAL THR ALA LEU TRY GLY LYS VAL ASP\n- Gorille : identique à l'homme sur ces 19 acides aminés.\n- Porc : 2 différences avec l'homme : position 4, SER à la place de THR ; position 5, ALA à la place de PRO.\n- Cheval : 4 différences avec l'homme : position 4, SER à la place de THR ; position 5, GLY à la place de PRO ; position 9, ALA à la place de SER ; position 12, LEU à la place de THR.\n- Porc et cheval : 3 différences entre eux (positions 5, 9 et 12).\n\nInterprétation :\n- sur 19 acides aminés, seuls 4 varient : ces 4 espèces sont très apparentées (ce sont des mammifères) ;\n- l'homme et le gorille ont des séquences identiques : le gorille est le plus proche parent de l'homme parmi ces espèces (ce sont des primates) ;\n- plus le nombre d'acides aminés différents est grand, plus les espèces sont éloignées, et plus leur séparation est ancienne : la séparation avec le cheval est la plus ancienne, puis celle avec le porc ; la séparation avec le gorille est la plus récente.\n\nConclusion : l'évolution de la lignée humaine s'est faite aussi par des modifications moléculaires (mutations).\n\nAttention : cela ne veut pas dire que l'homme descend du gorille actuel. L'homme, le gorille et le chimpanzé ont un ANCÊTRE COMMUN, dont les descendants ont évolué chacun de leur côté.",
      "keyRule": "Moins il y a d'acides aminés différents, plus deux espèces sont proches parentes. Homme-gorille : 0 ; homme-porc : 2 ; homme-cheval : 4 (sur 19).",
      "formulas": [],
      "workedExample": {
        "title": "Classer par parenté",
        "statement": "Sur les 19 premiers acides aminés de la chaîne β de l'hémoglobine, l'homme diffère de 0 acide aminé avec le gorille, de 2 avec le porc et de 4 avec le cheval. Classe ces espèces de la plus proche à la plus éloignée de l'homme.",
        "methodSteps": [
          "Moins de différences = parenté plus proche.",
          "0 < 2 < 4."
        ],
        "conclusion": "Gorille, puis porc, puis cheval."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Homme et gorille",
          "stepTheme": "Homme et gorille",
          "stepBadge": "Homme et gorille",
          "paragraphText": "Sur les 19 premiers acides aminés de la chaîne β de l'hémoglobine, l'homme et le gorille n'ont aucune différence.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q1",
            "type": "mcq",
            "prompt": "On compare les 19 premiers acides aminés de la chaîne β de l'hémoglobine. Combien de différences y a-t-il entre l'homme et le gorille ?",
            "options": [
              "0",
              "2",
              "3",
              "4"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux séquences sont identiques sur ces 19 acides aminés."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Homme et porc",
          "stepTheme": "Homme et porc",
          "stepBadge": "Homme et porc",
          "paragraphText": "Avec le porc, 2 acides aminés diffèrent : position 4 (SER au lieu de THR) et position 5 (ALA au lieu de PRO).",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q2",
            "type": "mcq",
            "prompt": "Dans la chaîne β de l'hémoglobine, l'homme a THR en position 4 et PRO en position 5 ; le porc a SER en position 4 et ALA en position 5 ; les 17 autres sont identiques. Combien d'acides aminés diffèrent entre l'homme et le porc ?",
            "options": [
              "0",
              "2",
              "4",
              "19"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seules les positions 4 et 5 changent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Homme et cheval",
          "stepTheme": "Homme et cheval",
          "stepBadge": "Homme et cheval",
          "paragraphText": "Avec le cheval, 4 acides aminés diffèrent : positions 4 (SER), 5 (GLY), 9 (ALA) et 12 (LEU).",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q3",
            "type": "mcq",
            "prompt": "Par rapport à l'homme, le cheval a SER en position 4, GLY en position 5, ALA en position 9 et LEU en position 12 ; les 15 autres acides aminés sont identiques. Combien de différences y a-t-il ?",
            "options": [
              "2",
              "3",
              "4",
              "15"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Positions 4, 5, 9 et 12."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Porc et cheval",
          "stepTheme": "Porc et cheval",
          "stepBadge": "Porc et cheval",
          "paragraphText": "Porc : SER-ALA en 4-5, SER en 9, THR en 12. Cheval : SER-GLY en 4-5, ALA en 9, LEU en 12. Ils diffèrent aux positions 5, 9 et 12.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q4",
            "type": "mcq",
            "prompt": "Le porc a, en positions 4, 5, 9 et 12 : SER, ALA, SER, THR. Le cheval a, aux mêmes positions : SER, GLY, ALA, LEU. Le reste est identique. Combien d'acides aminés diffèrent entre le porc et le cheval ?",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Positions 5, 9 et 12 ; la position 4 est identique (SER)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La règle de parenté",
          "stepTheme": "La règle de parenté",
          "stepBadge": "La règle de parenté",
          "paragraphText": "Plus deux espèces ont d'acides aminés différents, plus elles sont éloignées et plus leur séparation est ancienne.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q5",
            "type": "mcq",
            "prompt": "Sur 19 acides aminés de l'hémoglobine, l'homme diffère de 0 avec le gorille, de 2 avec le porc et de 4 avec le cheval. Avec quelle espèce la séparation de la lignée humaine est-elle la plus ancienne ?",
            "options": [
              "Le gorille",
              "Le porc",
              "Le cheval",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le plus de différences = la séparation la plus ancienne."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un ancêtre commun",
          "stepTheme": "Un ancêtre commun",
          "stepBadge": "Un ancêtre commun",
          "paragraphText": "L'homme ne descend pas du gorille actuel : ils ont un ancêtre commun, et chacun a évolué de son côté.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q6",
            "type": "mcq",
            "prompt": "L'homme et le gorille ont des hémoglobines identiques sur 19 acides aminés. Quelle conclusion est scientifiquement correcte ?",
            "options": [
              "L'homme descend du gorille actuel",
              "L'homme et le gorille sont de proches parents qui partagent un ancêtre commun",
              "Le gorille descend de l'homme",
              "L'homme et le gorille sont la même espèce"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont des espèces « cousines », pas l'une issue de l'autre."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "Des primates",
          "stepTheme": "Des primates",
          "stepBadge": "Des primates",
          "paragraphText": "L'homme et le gorille sont des primates ; avec le porc et le cheval, ce sont tous des mammifères.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q7",
            "type": "mcq",
            "prompt": "L'homme, le gorille, le porc et le cheval n'ont que 4 acides aminés variables sur 19 dans leur hémoglobine. À quel groupe appartiennent-ils tous les quatre ?",
            "options": [
              "Aux oiseaux",
              "Aux mammifères",
              "Aux poissons",
              "Aux reptiles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Parmi eux, l'homme et le gorille forment le sous-groupe des primates."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q1",
          "type": "mcq",
          "prompt": "On compare les 19 premiers acides aminés de la chaîne β de l'hémoglobine. Combien de différences y a-t-il entre l'homme et le gorille ?",
          "options": [
            "0",
            "2",
            "3",
            "4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux séquences sont identiques sur ces 19 acides aminés."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q2",
          "type": "mcq",
          "prompt": "Dans la chaîne β de l'hémoglobine, l'homme a THR en position 4 et PRO en position 5 ; le porc a SER en position 4 et ALA en position 5 ; les 17 autres sont identiques. Combien d'acides aminés diffèrent entre l'homme et le porc ?",
          "options": [
            "0",
            "2",
            "4",
            "19"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seules les positions 4 et 5 changent."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q3",
          "type": "mcq",
          "prompt": "Par rapport à l'homme, le cheval a SER en position 4, GLY en position 5, ALA en position 9 et LEU en position 12 ; les 15 autres acides aminés sont identiques. Combien de différences y a-t-il ?",
          "options": [
            "2",
            "3",
            "4",
            "15"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Positions 4, 5, 9 et 12."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q4",
          "type": "mcq",
          "prompt": "Le porc a, en positions 4, 5, 9 et 12 : SER, ALA, SER, THR. Le cheval a, aux mêmes positions : SER, GLY, ALA, LEU. Le reste est identique. Combien d'acides aminés diffèrent entre le porc et le cheval ?",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Positions 5, 9 et 12 ; la position 4 est identique (SER)."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q5",
          "type": "mcq",
          "prompt": "Sur 19 acides aminés de l'hémoglobine, l'homme diffère de 0 avec le gorille, de 2 avec le porc et de 4 avec le cheval. Avec quelle espèce la séparation de la lignée humaine est-elle la plus ancienne ?",
          "options": [
            "Le gorille",
            "Le porc",
            "Le cheval",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le plus de différences = la séparation la plus ancienne."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q6",
          "type": "mcq",
          "prompt": "L'homme et le gorille ont des hémoglobines identiques sur 19 acides aminés. Quelle conclusion est scientifiquement correcte ?",
          "options": [
            "L'homme descend du gorille actuel",
            "L'homme et le gorille sont de proches parents qui partagent un ancêtre commun",
            "Le gorille descend de l'homme",
            "L'homme et le gorille sont la même espèce"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont des espèces « cousines », pas l'une issue de l'autre."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p03_q7",
          "type": "mcq",
          "prompt": "L'homme, le gorille, le porc et le cheval n'ont que 4 acides aminés variables sur 19 dans leur hémoglobine. À quel groupe appartiennent-ils tous les quatre ?",
          "options": [
            "Aux oiseaux",
            "Aux mammifères",
            "Aux poissons",
            "Aux reptiles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Parmi eux, l'homme et le gorille forment le sous-groupe des primates."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04",
      "order": 4,
      "title": "Les théories de l'évolution",
      "summary": "Lamarck, Darwin, De Vries et Morgan.",
      "conceptExplanation": "Texte 1 : quelques théories.\n- Jean-Baptiste Lamarck (1744-1829) : il existe une tendance spontanée des êtres vivants à devenir de plus en plus complexes ; elle est orientée par les circonstances (le milieu), et les modifications acquises sont transmises à la descendance : « la fonction crée l'organe ». Exemple classique : la girafe aurait allongé son cou à force de l'étirer, et transmis ce long cou à ses petits. Cette transmission des caractères acquis n'a pas été confirmée.\n- Charles Darwin (1809-1882) : les êtres vivants se reproduisent en très grand nombre, mais il n'y a pas de surpopulation. La destruction des individus en surnombre ne se fait pas au hasard : ceux qui présentent des variations avantageuses sont favorisés dans la lutte pour la vie ; seuls les plus aptes parviennent à se reproduire : c'est la SÉLECTION NATURELLE.\n- Hugo De Vries (1848-1935) et Thomas Hunt Morgan (1866-1945) : le passage d'une espèce à l'autre se fait par une MUTATION brutale, et non graduellement par la sélection naturelle : c'est le mutationnisme. (Le document indique 1886 pour la naissance de Morgan ; il est né en 1866.)\n- Les généticiens modernes : l'évolution est un changement de la fréquence des gènes (allèles) dans les populations.\n\nPrécision : chez Darwin, les « plus aptes » ne sont pas forcément les plus forts, mais les mieux adaptés à leur milieu (ceux qui survivent et se reproduisent le plus).",
      "keyRule": "Lamarck : « la fonction crée l'organe » (caractères acquis transmis). Darwin : sélection naturelle des plus aptes. De Vries et Morgan : mutations brutales.",
      "formulas": [],
      "workedExample": {
        "title": "Lamarck ou Darwin ?",
        "statement": "Pourquoi les girafes ont-elles un long cou ? Donne l'explication de Lamarck puis celle de Darwin.",
        "methodSteps": [
          "Lamarck : à force d'étirer leur cou pour manger, les girafes l'ont allongé et ont transmis ce caractère acquis.",
          "Darwin : parmi des girafes au cou de longueurs variées, celles au cou plus long mangeaient mieux, survivaient et se reproduisaient davantage."
        ],
        "conclusion": "Lamarck : la fonction crée l'organe. Darwin : la sélection naturelle trie les variations existantes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Lamarck",
          "stepTheme": "Lamarck",
          "stepBadge": "Lamarck",
          "paragraphText": "Pour Lamarck (1744-1829), les modifications acquises sous l'effet du milieu sont transmises à la descendance : « la fonction crée l'organe ».",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q1",
            "type": "mcq",
            "prompt": "Quel savant a résumé sa théorie de l'évolution par la formule « la fonction crée l'organe » ?",
            "options": [
              "Darwin",
              "Lamarck",
              "De Vries",
              "Morgan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour Lamarck, le besoin et l'usage transforment les organes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Darwin",
          "stepTheme": "Darwin",
          "stepBadge": "Darwin",
          "paragraphText": "Pour Darwin (1809-1882), les individus présentant des variations avantageuses survivent et se reproduisent davantage : c'est la sélection naturelle.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q2",
            "type": "mcq",
            "prompt": "Darwin observe que les êtres vivants se reproduisent en très grand nombre sans qu'il y ait surpopulation, et que les individus aux variations avantageuses survivent mieux. Comment appelle-t-il ce mécanisme ?",
            "options": [
              "La mutation brutale",
              "La sélection naturelle",
              "La transmission des caractères acquis",
              "La génération spontanée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La nature « sélectionne » les plus aptes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le mutationnisme",
          "stepTheme": "Le mutationnisme",
          "stepBadge": "Le mutationnisme",
          "paragraphText": "Pour De Vries (1848-1935) et Morgan (1866-1945), le passage d'une espèce à une autre se fait par une mutation brutale.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q3",
            "type": "mcq",
            "prompt": "Selon De Vries et Morgan, comment se fait le passage d'une espèce à une autre ?",
            "options": [
              "Par une mutation brutale des gènes",
              "Par l'usage des organes",
              "Par la volonté des êtres vivants",
              "Par la sélection naturelle seule, très lentement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On les appelle les mutationnistes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La girafe de Lamarck",
          "stepTheme": "La girafe de Lamarck",
          "stepBadge": "La girafe de Lamarck",
          "paragraphText": "Pour Lamarck, la girafe aurait allongé son cou à force de l'étirer pour manger les feuilles hautes, et aurait transmis ce cou long à ses petits.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q4",
            "type": "mcq",
            "prompt": "« Les girafes ont allongé leur cou à force de l'étirer pour atteindre les feuilles, puis ont transmis ce long cou à leurs petits. » À quelle théorie correspond cette explication ?",
            "options": [
              "Au darwinisme",
              "Au lamarckisme",
              "Au mutationnisme",
              "À la théorie synthétique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la transmission d'un caractère acquis par l'usage."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La girafe de Darwin",
          "stepTheme": "La girafe de Darwin",
          "stepBadge": "La girafe de Darwin",
          "paragraphText": "Pour Darwin, parmi des girafes au cou de longueurs variées, celles au cou plus long mangeaient mieux, survivaient et se reproduisaient plus.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q5",
            "type": "mcq",
            "prompt": "« Parmi des girafes nées avec des cous de longueurs différentes, celles au cou plus long trouvaient plus de nourriture, survivaient et avaient plus de petits. » À quelle théorie correspond cette explication ?",
            "options": [
              "Au lamarckisme",
              "Au darwinisme (sélection naturelle)",
              "Au mutationnisme",
              "Au créationnisme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La variation existe d'abord ; le milieu la trie ensuite."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les plus aptes",
          "stepTheme": "Les plus aptes",
          "stepBadge": "Les plus aptes",
          "paragraphText": "Chez Darwin, les « plus aptes » sont les mieux adaptés au milieu, pas forcément les plus forts.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q6",
            "type": "mcq",
            "prompt": "Dans la théorie de Darwin, « seuls les plus aptes parviennent à procréer ». Qui sont les « plus aptes » ?",
            "options": [
              "Toujours les plus forts physiquement",
              "Les mieux adaptés à leur milieu, qui survivent et se reproduisent le plus",
              "Les plus âgés",
              "Les plus grands"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un petit animal bien camouflé peut être plus apte qu'un gros."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "Les généticiens modernes",
          "stepTheme": "Les généticiens modernes",
          "stepBadge": "Les généticiens modernes",
          "paragraphText": "Pour les généticiens modernes, l'évolution est un changement de la fréquence des gènes au sein des populations.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q7",
            "type": "mcq",
            "prompt": "Selon les généticiens modernes, comment peut-on comprendre l'évolution d'une espèce ?",
            "options": [
              "Comme un changement de la fréquence des gènes dans les populations",
              "Comme la volonté des individus",
              "Comme un phénomène impossible",
              "Comme une transmission des caractères acquis"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un allèle avantageux devient plus fréquent au fil des générations."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q1",
          "type": "mcq",
          "prompt": "Quel savant a résumé sa théorie de l'évolution par la formule « la fonction crée l'organe » ?",
          "options": [
            "Darwin",
            "Lamarck",
            "De Vries",
            "Morgan"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour Lamarck, le besoin et l'usage transforment les organes."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q2",
          "type": "mcq",
          "prompt": "Darwin observe que les êtres vivants se reproduisent en très grand nombre sans qu'il y ait surpopulation, et que les individus aux variations avantageuses survivent mieux. Comment appelle-t-il ce mécanisme ?",
          "options": [
            "La mutation brutale",
            "La sélection naturelle",
            "La transmission des caractères acquis",
            "La génération spontanée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La nature « sélectionne » les plus aptes."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q3",
          "type": "mcq",
          "prompt": "Selon De Vries et Morgan, comment se fait le passage d'une espèce à une autre ?",
          "options": [
            "Par une mutation brutale des gènes",
            "Par l'usage des organes",
            "Par la volonté des êtres vivants",
            "Par la sélection naturelle seule, très lentement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On les appelle les mutationnistes."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q4",
          "type": "mcq",
          "prompt": "« Les girafes ont allongé leur cou à force de l'étirer pour atteindre les feuilles, puis ont transmis ce long cou à leurs petits. » À quelle théorie correspond cette explication ?",
          "options": [
            "Au darwinisme",
            "Au lamarckisme",
            "Au mutationnisme",
            "À la théorie synthétique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la transmission d'un caractère acquis par l'usage."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q5",
          "type": "mcq",
          "prompt": "« Parmi des girafes nées avec des cous de longueurs différentes, celles au cou plus long trouvaient plus de nourriture, survivaient et avaient plus de petits. » À quelle théorie correspond cette explication ?",
          "options": [
            "Au lamarckisme",
            "Au darwinisme (sélection naturelle)",
            "Au mutationnisme",
            "Au créationnisme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La variation existe d'abord ; le milieu la trie ensuite."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q6",
          "type": "mcq",
          "prompt": "Dans la théorie de Darwin, « seuls les plus aptes parviennent à procréer ». Qui sont les « plus aptes » ?",
          "options": [
            "Toujours les plus forts physiquement",
            "Les mieux adaptés à leur milieu, qui survivent et se reproduisent le plus",
            "Les plus âgés",
            "Les plus grands"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un petit animal bien camouflé peut être plus apte qu'un gros."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p04_q7",
          "type": "mcq",
          "prompt": "Selon les généticiens modernes, comment peut-on comprendre l'évolution d'une espèce ?",
          "options": [
            "Comme un changement de la fréquence des gènes dans les populations",
            "Comme la volonté des individus",
            "Comme un phénomène impossible",
            "Comme une transmission des caractères acquis"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un allèle avantageux devient plus fréquent au fil des générations."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05",
      "order": 5,
      "title": "La théorie synthétique de l'évolution",
      "summary": "Mutation × sélection × temps.",
      "conceptExplanation": "Texte 2 : « La transformation évolutive de grande amplitude ne peut être immédiate, totale, sous peine d'altérer gravement l'état d'adaptation, donc la viabilité de l'organisme. Une transformation ne pourra se réaliser que de façon progressive, lente, par sommation de petits changements, tous dans le même sens, ce qui peut s'exprimer ainsi : la mutation du généticien, orientée par la sélection et multipliée par le temps du paléontologiste engendre toute la transformation évolutive quelle que soit son amplitude. »\n\nTrois facteurs de l'évolution :\n1. les MUTATIONS : des changements des gènes, qui créent la variation entre individus ;\n2. la SÉLECTION NATURELLE : elle élimine les individus fragiles (mal adaptés) et favorise ceux qui sont adaptés ;\n3. le TEMPS (géologique, paléontologique) : il permet l'accumulation de nombreux petits changements.\n\nLa théorie synthétique de l'évolution (ou néodarwinisme) fait la synthèse des théories précédentes : elle regroupe les données de la systématique (classification), de la paléontologie (fossiles) et de la génétique (gènes, mutations).\n\nChaque théorie a ses limites : Lamarck (la transmission des caractères acquis n'est pas prouvée), Darwin (il ne connaissait pas les gènes), mutationnisme (une seule mutation brutale ne crée pas une nouvelle espèce viable).\n\nConclusion générale : l'évolution de la lignée humaine s'est faite par des transformations morphologiques (crâne, cerveau), des modifications de la stature (bipédie) et des modifications moléculaires ; elle s'explique par la théorie synthétique.",
      "keyRule": "Théorie synthétique : mutations (variation) × sélection naturelle (tri) × temps (accumulation). Elle réunit systématique, paléontologie et génétique.",
      "formulas": [],
      "workedExample": {
        "title": "La formule du texte 2",
        "statement": "Explique la phrase : « la mutation du généticien, orientée par la sélection et multipliée par le temps du paléontologiste ».",
        "methodSteps": [
          "Les mutations créent de petites variations.",
          "La sélection naturelle conserve celles qui sont avantageuses.",
          "Sur des millions d'années, ces petits changements s'additionnent."
        ],
        "conclusion": "L'évolution résulte de la combinaison des mutations, de la sélection et du temps."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Trois facteurs",
          "stepTheme": "Trois facteurs",
          "stepBadge": "Trois facteurs",
          "paragraphText": "« La mutation du généticien, orientée par la sélection et multipliée par le temps du paléontologiste engendre toute la transformation évolutive. »",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q1",
            "type": "mcq",
            "prompt": "Le texte dit : « la mutation du généticien, orientée par la sélection et multipliée par le temps du paléontologiste engendre toute la transformation évolutive ». Quels sont les trois facteurs de l'évolution cités ?",
            "options": [
              "La mutation, la sélection naturelle et le temps",
              "La volonté, l'effort et l'usage",
              "Le climat, la nourriture et le sommeil",
              "La fonction, l'organe et le besoin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le cœur de la théorie synthétique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Lent et progressif",
          "stepTheme": "Lent et progressif",
          "stepBadge": "Lent et progressif",
          "paragraphText": "Une grande transformation ne peut être immédiate : elle se fait lentement, par l'addition de petits changements dans le même sens.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q2",
            "type": "mcq",
            "prompt": "Selon le texte 2, pourquoi une grande transformation évolutive ne peut-elle pas être immédiate et totale ?",
            "options": [
              "Parce qu'elle altérerait gravement l'adaptation et la viabilité de l'organisme",
              "Parce que les gènes ne changent jamais",
              "Parce que Dieu l'interdit",
              "Parce que les fossiles n'existent pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un changement trop brutal produirait un organisme non viable."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La théorie synthétique",
          "stepTheme": "La théorie synthétique",
          "stepBadge": "La théorie synthétique",
          "paragraphText": "La théorie synthétique fait la synthèse des théories antérieures et regroupe les données de la systématique, de la paléontologie et de la génétique.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q3",
            "type": "mcq",
            "prompt": "Quelles disciplines la théorie synthétique de l'évolution regroupe-t-elle ?",
            "options": [
              "La systématique, la paléontologie et la génétique",
              "La chimie, la physique et l'astronomie",
              "L'histoire, la géographie et la philosophie",
              "Les mathématiques seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Classification, fossiles et gènes : trois sources de preuves."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de la sélection",
          "stepTheme": "Le rôle de la sélection",
          "stepBadge": "Le rôle de la sélection",
          "paragraphText": "Les mutations produisent des individus fragiles et des individus résistants ; la sélection naturelle élimine les fragiles au fil du temps.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q4",
            "type": "mcq",
            "prompt": "Dans la théorie synthétique, les mutations produisent des individus plus ou moins adaptés. Quel est le rôle de la sélection naturelle ?",
            "options": [
              "Créer les mutations",
              "Éliminer les individus mal adaptés et favoriser les mieux adaptés",
              "Arrêter le temps",
              "Transmettre les caractères acquis"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La sélection oriente l'évolution ; les mutations la rendent possible."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les limites",
          "stepTheme": "Les limites",
          "stepBadge": "Les limites",
          "paragraphText": "Chaque théorie a des limites : Lamarck (caractères acquis non transmis), Darwin (ignorait les gènes), mutationnisme (une seule mutation brutale ne suffit pas).",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q5",
            "type": "mcq",
            "prompt": "Un sportif développe ses muscles par l'entraînement. Selon les connaissances actuelles, ses enfants naîtront-ils avec ces muscles développés ?",
            "options": [
              "Oui, comme le dit Lamarck",
              "Non : un caractère acquis pendant la vie ne se transmet pas par les gènes",
              "Oui, mais seulement les garçons",
              "Oui, si les deux parents s'entraînent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la principale limite de la théorie de Lamarck."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Associer savant et idée",
          "stepTheme": "Associer savant et idée",
          "stepBadge": "Associer savant et idée",
          "paragraphText": "Lamarck : la fonction crée l'organe. Darwin : sélection naturelle. De Vries et Morgan : mutation. Théorie synthétique : mutation × sélection × temps.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q6",
            "type": "mcq",
            "prompt": "Associe : Lamarck, Darwin, De Vries. Quelle association est juste ?",
            "options": [
              "Lamarck – sélection naturelle ; Darwin – mutation ; De Vries – la fonction crée l'organe",
              "Lamarck – la fonction crée l'organe ; Darwin – sélection naturelle ; De Vries – mutation brutale",
              "Lamarck – mutation ; Darwin – la fonction crée l'organe ; De Vries – sélection",
              "Les trois défendent la même idée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La théorie synthétique réunit ensuite ces apports."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "La conclusion générale",
          "stepTheme": "La conclusion générale",
          "stepBadge": "La conclusion générale",
          "paragraphText": "L'évolution de la lignée humaine s'est faite par des transformations morphologiques, des modifications de stature et des modifications moléculaires ; elle s'explique par la théorie synthétique.",
          "exercise": {
            "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q7",
            "type": "mcq",
            "prompt": "Selon la conclusion générale de la leçon sur l'évolution de la lignée humaine, par quels types de modifications cette évolution s'est-elle faite ?",
            "options": [
              "Morphologiques (crâne, cerveau), de stature (bipédie) et moléculaires",
              "Uniquement de couleur de peau",
              "Uniquement de taille",
              "Aucune : l'homme n'a pas évolué"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les trois premières hypothèses du cours, toutes vérifiées."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q1",
          "type": "mcq",
          "prompt": "Le texte dit : « la mutation du généticien, orientée par la sélection et multipliée par le temps du paléontologiste engendre toute la transformation évolutive ». Quels sont les trois facteurs de l'évolution cités ?",
          "options": [
            "La mutation, la sélection naturelle et le temps",
            "La volonté, l'effort et l'usage",
            "Le climat, la nourriture et le sommeil",
            "La fonction, l'organe et le besoin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le cœur de la théorie synthétique."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q2",
          "type": "mcq",
          "prompt": "Selon le texte 2, pourquoi une grande transformation évolutive ne peut-elle pas être immédiate et totale ?",
          "options": [
            "Parce qu'elle altérerait gravement l'adaptation et la viabilité de l'organisme",
            "Parce que les gènes ne changent jamais",
            "Parce que Dieu l'interdit",
            "Parce que les fossiles n'existent pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un changement trop brutal produirait un organisme non viable."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q3",
          "type": "mcq",
          "prompt": "Quelles disciplines la théorie synthétique de l'évolution regroupe-t-elle ?",
          "options": [
            "La systématique, la paléontologie et la génétique",
            "La chimie, la physique et l'astronomie",
            "L'histoire, la géographie et la philosophie",
            "Les mathématiques seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Classification, fossiles et gènes : trois sources de preuves."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q4",
          "type": "mcq",
          "prompt": "Dans la théorie synthétique, les mutations produisent des individus plus ou moins adaptés. Quel est le rôle de la sélection naturelle ?",
          "options": [
            "Créer les mutations",
            "Éliminer les individus mal adaptés et favoriser les mieux adaptés",
            "Arrêter le temps",
            "Transmettre les caractères acquis"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La sélection oriente l'évolution ; les mutations la rendent possible."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q5",
          "type": "mcq",
          "prompt": "Un sportif développe ses muscles par l'entraînement. Selon les connaissances actuelles, ses enfants naîtront-ils avec ces muscles développés ?",
          "options": [
            "Oui, comme le dit Lamarck",
            "Non : un caractère acquis pendant la vie ne se transmet pas par les gènes",
            "Oui, mais seulement les garçons",
            "Oui, si les deux parents s'entraînent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la principale limite de la théorie de Lamarck."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q6",
          "type": "mcq",
          "prompt": "Associe : Lamarck, Darwin, De Vries. Quelle association est juste ?",
          "options": [
            "Lamarck – sélection naturelle ; Darwin – mutation ; De Vries – la fonction crée l'organe",
            "Lamarck – la fonction crée l'organe ; Darwin – sélection naturelle ; De Vries – mutation brutale",
            "Lamarck – mutation ; Darwin – la fonction crée l'organe ; De Vries – sélection",
            "Les trois défendent la même idée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La théorie synthétique réunit ensuite ces apports."
        },
        {
          "id": "terminale_a_svt_l04_evolution_lignee_humaine_p05_q7",
          "type": "mcq",
          "prompt": "Selon la conclusion générale de la leçon sur l'évolution de la lignée humaine, par quels types de modifications cette évolution s'est-elle faite ?",
          "options": [
            "Morphologiques (crâne, cerveau), de stature (bipédie) et moléculaires",
            "Uniquement de couleur de peau",
            "Uniquement de taille",
            "Aucune : l'homme n'a pas évolué"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les trois premières hypothèses du cours, toutes vérifiées."
        }
      ]
    }
  ]
};
