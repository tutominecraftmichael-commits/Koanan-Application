import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : Terminales C, D, E — Thème : Électromagnétisme — Titre : Induction électromagnétique
export const PHYSIQUE_TLE_CD_L07_INDUCTION_ELECTROMAGNETIQUE: CurriculumChapter = {
  "id": "terminale_d_physique_l07_induction_electromagnetique",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ],
  "order": 7,
  "title": "Leçon 7 : Induction électromagnétique",
  "summary": "Étude complète du phénomène d'induction électromagnétique : notion de flux magnétique Φ = B . S cos θ (en Webers), règle du flux maximal, mise en évidence expérimentale (mouvements relatifs aimant-bobine, rotation dans un champ, variation de surface sur rails de Laplace), lois de l'induction (loi de Lenz et loi de Faraday e = -dΦ/dt), calcul de la f.é.m. induite, du courant induit i = e / (R + r), de la quantité d'électricité induite Q = -ΔΦ / (R + r), étude dynamique de la tige sur rails avec force de freinage électromagnétique, et applications technologiques majeures : transformateurs (rapport k = U₂/U₁ = N₂/N₁ = I₁/I₂), alternateurs industriels, microphones électrodynamiques et disques durs magnétiques.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : Terminales C, D, E – Thème : Électromagnétisme – Induction électromagnétique)",
  "points": [
    {
      "id": "terminale_d_physique_l07_induction_p01",
      "order": 1,
      "title": "Notion de flux magnétique et règle du flux maximal",
      "summary": "Définition du vecteur surface S, flux magnétique d'un champ uniforme Φ = B . S = B S cos θ, unité légale (Weber, Wb), flux à travers une bobine de N spires, et règle fondamentale du flux maximal à l'équilibre.",
      "conceptExplanation": "1. Vecteur-surface S d'un circuit plan :\nUn circuit fermé plan délimite une surface plane d'aire S. On associe à ce circuit un vecteur-surface S = S n, où n est le vecteur unitaire normal au plan du circuit. Le sens de n est fixé par la règle de la main droite ou du tire-bouchon d'Ampère associé au sens positif arbitraire choisi sur le circuit.\n\n2. Définition du flux magnétique Φ :\nSoit un circuit plan de surface S plongé dans un champ magnétique uniforme B. Le flux magnétique Φ à travers la surface fermée est le produit scalaire du vecteur champ B et du vecteur-surface S :\nΦ = B . S = B * S * cos θ.\n- θ = (B, S) est l'angle géométrique entre le vecteur champ B et la normale n au circuit ;\n- Le flux magnétique est une grandeur algébrique (positive, négative ou nulle) ;\n- Son unité dans le Système International est le Weber (symbole : Wb). 1 Wb = 1 T.m².\n\n3. Flux à travers une bobine de N spires :\nSi la bobine comporte N spires identiques superposées embrassant le même champ B, le flux magnétique total vaut :\nΦ = N * B * S * cos θ.\n\n4. Règle du flux maximal :\nUn circuit fermé mobile suspendu dans un champ magnétique et parcouru par un courant électrique continu tend spontanément à pivoter pour s'immobiliser dans une position d'équilibre stable où le flux magnétique qui le traverse est MAXIMAL et POSITIF :\nLe vecteur surface S s'aligne exactement dans la même direction et le même sens que le vecteur champ B (θ = 0 => cos θ = 1 => Φ_max = N B S).",
      "keyRule": "Le flux magnétique vaut Φ = N B S cos θ (en Wb). Il est maximal et positif (Φ_max = N B S) lorsque la normale n au plan du circuit est parallèle et de même sens que le champ magnétique B (θ = 0).",
      "formulas": [
        {
          "name": "Flux magnétique à travers N spires",
          "formula": "\\Phi = N\\,\\vec{B} \\cdot \\vec{S} = N\\,B\\,S\\,\\cos\\theta",
          "note": "θ = angle (B, S), Φ en Webers (Wb)"
        },
        {
          "name": "Flux maximal à l'équilibre",
          "formula": "\\Phi_\\text{max} = N\\,B\\,S",
          "note": "Pour θ = 0 (cos θ = 1)"
        }
      ],
      "workedExample": {
        "title": "Calcul du flux magnétique à travers une bobine plate inclinée",
        "statement": "Une bobine plate circulaire comporte N = 100 spires de rayon r = 5,0 cm. Elle est placée dans un champ magnétique uniforme B = 0,20 T. Calcule l'aire d'une spire S, puis le flux magnétique Φ lorsque l'axe de la bobine fait un angle θ = 60° avec les lignes de champ (cos 60° = 0,50).",
        "methodSteps": [
          "Étape 1 : Calculer l'aire S d'une spire circulaire : S = π * r² = 3,1416 * (0,050)² = 3,1416 * 0,0025 ≈ 7,854 * 10⁻³ m².",
          "Étape 2 : Appliquer la formule du flux magnétique pour N spires : Φ = N * B * S * cos θ.",
          "Étape 3 : Effectuer le calcul numérique : Φ = 100 * 0,20 * (7,854 * 10⁻³) * 0,50 = 20 * (7,854 * 10⁻³) * 0,50 = 10 * (7,854 * 10⁻³) ≈ 0,0785 Wb = 78,5 mWb."
        ],
        "conclusion": "Le flux magnétique embrassé par les 100 spires sous une inclinaison de 60° vaut 78,5 mWb."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Configuration et signe du flux magnétique selon l'angle θ",
        "tableData": {
          "headers": [
            "Orientation de la normale n",
            "Angle θ = (B, S)",
            "Valeur de cos θ",
            "Flux magnétique Φ",
            "Signification physique"
          ],
          "rows": [
            [
              "Parallèle et même sens que B",
              "θ = 0 rad (0°)",
              "cos 0 = +1",
              "Φ = + N B S (maximal)",
              "Position d'équilibre stable (règle du flux maximal)"
            ],
            [
              "Incliné sous angle aigu",
              "0 < θ < π/2 (ex: 60°)",
              "0 < cos θ < 1",
              "0 < Φ < N B S",
              "Flux positif (lignes traversent dans le sens positif)"
            ],
            [
              "Perpendiculaire aux lignes de B",
              "θ = π/2 rad (90°)",
              "cos(π/2) = 0",
              "Φ = 0 Wb",
              "Plan du circuit parallèle aux lignes de champ"
            ],
            [
              "Parallèle et sens opposé à B",
              "θ = π rad (180°)",
              "cos π = -1",
              "Φ = - N B S (minimal)",
              "Position d'équilibre instable"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le vecteur surface S et la convention d'orientation",
          "stepTheme": "Géométrie du circuit",
          "stepBadge": "S = S n",
          "paragraphText": "Le vecteur-surface S d'un circuit plan fermé est défini par S = S n, où S est l'aire géométrique du domaine et n le vecteur unitaire perpendiculaire au plan du circuit. Le sens de n est fixé par la règle de la main droite associée au sens de parcours positif arbitraire choisi sur le contour.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p01_q1",
            "type": "mcq",
            "prompt": "Un circuit circulaire est orienté dans le sens trigonométrique (anti-horaire) sur une table horizontale. Vers où pointe le vecteur-surface S associé ?",
            "options": [
              "Verticalement vers le haut",
              "Verticalement vers le bas",
              "Horizontalement vers la droite",
              "Il n'a pas de sens défini"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En enroulant les doigts de la main droite dans le sens trigonométrique, le pouce dressé pointe verticalement vers le haut."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'unité légale du flux : le Weber (Wb)",
          "stepTheme": "Unité SI",
          "stepBadge": "1 Wb = 1 T.m² = 1 V.s",
          "paragraphText": "Le flux magnétique s'exprime dans le Système International en Webers (Wb). Par définition, 1 Weber est le flux magnétique produit par un champ uniforme de 1 Tesla traversant perpendiculairement une surface plane de 1 mètre carré (1 Wb = 1 T * 1 m² = 1 V.s).",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p01_q2",
            "type": "mcq",
            "prompt": "Une bobine de N = 50 spires d'aire individuelle S = 20 cm² (0,002 m²) est traversée orthogonalement par un champ B = 0,10 T. Que vaut le flux magnétique Φ ?",
            "options": [
              "Φ = 0,01 Wb = 10 mWb",
              "Φ = 1,0 Wb",
              "Φ = 0,1 Wb",
              "Φ = 0,0001 Wb"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Φ = N * B * S * cos 0° = 50 * 0,10 * 0,002 * 1 = 0,01 Wb = 10 mWb."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul du flux pour un angle donné entre le plan et B",
          "stepTheme": "Attention aux angles",
          "stepBadge": "θ avec la normale",
          "paragraphText": "Attention cruciale : dans la formule Φ = B S cos θ, l'angle θ est l'angle entre le vecteur champ B et la NORMALE n au plan du circuit. Si l'énoncé donne l'angle β formé par le champ B avec le PLAN du circuit, alors θ = 90° - β et cos θ = sin β.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p01_q3",
            "type": "mcq",
            "prompt": "Le plan d'une spire fait un angle de 30° avec les lignes de champ magnétique. Quel angle θ doit-on introduire dans cos θ ?",
            "options": [
              "θ = 60° (car la normale fait 90° - 30° = 60° avec B)",
              "θ = 30°",
              "θ = 0°",
              "θ = 90°"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'angle θ de la formule du flux est mesuré par rapport à la normale du plan. Si le plan fait 30° avec B, sa normale fait 90° - 30° = 60° avec B."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La règle du flux maximal",
          "stepTheme": "Équilibre magnétique",
          "stepBadge": "Position stable",
          "paragraphText": "Un circuit fermé mobile traversé par un courant I et placé dans un champ uniforme s'oriente spontanément pour que le flux embrassé soit maximal et positif. Les forces de Laplace créent un couple moteur qui tourne le circuit jusqu'à ce que son vecteur surface S s'aligne sur le vecteur B.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p01_q4",
            "type": "mcq",
            "prompt": "Dans quelle orientation un cadre mobile parcouru par un courant s'immobilise-t-il à l'équilibre stable dans un champ magnétique ?",
            "options": [
              "Son plan est perpendiculaire à B avec son vecteur surface S de même sens que B",
              "Son plan est parallèle à B",
              "Son plan fait un angle de 45°",
              "Son vecteur surface S est opposé à B"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À l'équilibre stable, le flux est maximal : S et B sont colinéaires et de même sens (θ = 0°), ce qui correspond à un plan de spire perpendiculaire aux lignes de champ."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Mesure du flux par le fluxmètre",
          "stepTheme": "Appareil de mesure",
          "stepBadge": "Fluxmètre",
          "paragraphText": "Le fluxmètre est un galvanomètre balistique très amorti ou un intégrateur électronique qui mesure directement la variation de flux magnétique Delta Φ reliant une bobine exploratrice à l'appareil lors de son déplacement ou de la coupure du champ.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p01_q5",
            "type": "mcq",
            "prompt": "Quel appareil de mesure permet d'évaluer directement le flux magnétique traversant une bobine ?",
            "options": [
              "Un fluxmètre",
              "Un voltmètre continu",
              "Un fréquencemètre",
              "Un luxmètre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le fluxmètre intègre la tension induite pour afficher directement la valeur du flux magnétique en Webers."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Flux nul dans un plan parallèle au champ",
          "stepTheme": "Spire de profil",
          "stepBadge": "cos 90° = 0 => Φ = 0",
          "paragraphText": "Lorsque le plan d'une spire est parallèle aux lignes de champ magnétique, les lignes de champ 'rasent' la surface sans jamais la traverser. La normale n fait un angle de 90° avec B (cos 90° = 0) : le flux magnétique est rigoureusement nul, même si le champ B est extrêmement intense !",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p01_q6",
            "type": "mcq",
            "prompt": "Une bobine est placée de profil, son plan étant strictement parallèle aux lignes d'un champ géant de 10 Teslas. Que vaut le flux magnétique qui la traverse ?",
            "options": [
              "Φ = 0 Wb",
              "Φ = 10 Wb",
              "Φ = infini",
              "Φ = 100 Wb"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Aucune ligne de champ ne perce la surface : la normale fait 90° avec B, d'où cos 90° = 0 et Φ = 0 Wb."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Flux d'un champ tournant (principe de l'alternateur)",
          "stepTheme": "Flux alternatif",
          "stepBadge": "Φ(t) = Φ_max cos(ω t)",
          "paragraphText": "Si une bobine tourne à vitesse angulaire constante ω = 2π f dans un champ B stationnaire, l'angle varie selon θ(t) = ω t. Le flux magnétique devient une fonction sinusoïdale du temps : Φ(t) = N B S cos(ω t). Cette variation périodique est le fondement de la production industrielle de courant alternatif.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p01_q7",
            "type": "mcq",
            "prompt": "Une spire tourne à la fréquence de 50 tours par seconde (ω = 100π rad/s) dans un champ où Φ_max = 0,02 Wb. Quelle est l'expression du flux instantané ?",
            "options": [
              "Φ(t) = 0,02 cos(100π t)",
              "Φ(t) = 0,02 sin(50 t)",
              "Φ(t) = 2 cos(100 t)",
              "Φ(t) = 0,02 t"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec ω = 2π * 50 = 100π rad/s, le flux instantané s'écrit Φ(t) = Φ_max cos(ω t) = 0,02 cos(100π t)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l07_induction_p01_q1",
          "type": "mcq",
          "prompt": "Un circuit circulaire est orienté dans le sens trigonométrique (anti-horaire) sur une table horizontale. Vers où pointe le vecteur-surface S associé ?",
          "options": [
            "Verticalement vers le haut",
            "Verticalement vers le bas",
            "Horizontalement vers la droite",
            "Il n'a pas de sens défini"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En enroulant les doigts de la main droite dans le sens trigonométrique, le pouce dressé pointe verticalement vers le haut."
        },
        {
          "id": "terminale_d_physique_l07_induction_p01_q2",
          "type": "mcq",
          "prompt": "Une bobine de N = 50 spires d'aire individuelle S = 20 cm² (0,002 m²) est traversée orthogonalement par un champ B = 0,10 T. Que vaut le flux magnétique Φ ?",
          "options": [
            "Φ = 0,01 Wb = 10 mWb",
            "Φ = 1,0 Wb",
            "Φ = 0,1 Wb",
            "Φ = 0,0001 Wb"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Φ = N * B * S * cos 0° = 50 * 0,10 * 0,002 * 1 = 0,01 Wb = 10 mWb."
        },
        {
          "id": "terminale_d_physique_l07_induction_p01_q3",
          "type": "mcq",
          "prompt": "Le plan d'une spire fait un angle de 30° avec les lignes de champ magnétique. Quel angle θ doit-on introduire dans cos θ ?",
          "options": [
            "θ = 60° (car la normale fait 90° - 30° = 60° avec B)",
            "θ = 30°",
            "θ = 0°",
            "θ = 90°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'angle θ de la formule du flux est mesuré par rapport à la normale du plan. Si le plan fait 30° avec B, sa normale fait 90° - 30° = 60° avec B."
        },
        {
          "id": "terminale_d_physique_l07_induction_p01_q4",
          "type": "mcq",
          "prompt": "Dans quelle orientation un cadre mobile parcouru par un courant s'immobilise-t-il à l'équilibre stable dans un champ magnétique ?",
          "options": [
            "Son plan est perpendiculaire à B avec son vecteur surface S de même sens que B",
            "Son plan est parallèle à B",
            "Son plan fait un angle de 45°",
            "Son vecteur surface S est opposé à B"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À l'équilibre stable, le flux est maximal : S et B sont colinéaires et de même sens (θ = 0°), ce qui correspond à un plan de spire perpendiculaire aux lignes de champ."
        },
        {
          "id": "terminale_d_physique_l07_induction_p01_q5",
          "type": "mcq",
          "prompt": "Quel appareil de mesure permet d'évaluer directement le flux magnétique traversant une bobine ?",
          "options": [
            "Un fluxmètre",
            "Un voltmètre continu",
            "Un fréquencemètre",
            "Un luxmètre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le fluxmètre intègre la tension induite pour afficher directement la valeur du flux magnétique en Webers."
        },
        {
          "id": "terminale_d_physique_l07_induction_p01_q6",
          "type": "mcq",
          "prompt": "Une bobine est placée de profil, son plan étant strictement parallèle aux lignes d'un champ géant de 10 Teslas. Que vaut le flux magnétique qui la traverse ?",
          "options": [
            "Φ = 0 Wb",
            "Φ = 10 Wb",
            "Φ = infini",
            "Φ = 100 Wb"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Aucune ligne de champ ne perce la surface : la normale fait 90° avec B, d'où cos 90° = 0 et Φ = 0 Wb."
        },
        {
          "id": "terminale_d_physique_l07_induction_p01_q7",
          "type": "mcq",
          "prompt": "Une spire tourne à la fréquence de 50 tours par seconde (ω = 100π rad/s) dans un champ où Φ_max = 0,02 Wb. Quelle est l'expression du flux instantané ?",
          "options": [
            "Φ(t) = 0,02 cos(100π t)",
            "Φ(t) = 0,02 sin(50 t)",
            "Φ(t) = 2 cos(100 t)",
            "Φ(t) = 0,02 t"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec ω = 2π * 50 = 100π rad/s, le flux instantané s'écrit Φ(t) = Φ_max cos(ω t) = 0,02 cos(100π t)."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l07_induction_p02",
      "order": 2,
      "title": "Mise en évidence expérimentale de l'induction électromagnétique",
      "summary": "Expériences d'induction : mouvement relatif aimant-bobine, rotation d'un circuit dans un champ, variation de surface sur rails de Laplace, couplage entre bobine inductrice et bobine induite, et condition sine qua non de variation temporelle du flux.",
      "conceptExplanation": "1. Expérience du mouvement relatif aimant-bobine :\nOn relie une bobine fermée sur un galvanomètre à zéro central sans aucun générateur. Lorsqu'on approche le pôle Nord d'un aimant vers la bobine, l'aiguille dévie dans un sens (apparition d'un courant induit). Si l'on immobilise l'aimant, l'aiguille revient instantanément à zéro (courant nul). Si l'on éloigne l'aimant, l'aiguille dévie en sens inverse.\n- L'aimant créateur du champ magnétique est appelé l'inducteur ;\n- La bobine où se manifeste le courant induit est appelée le circuit induit (l'induit) ;\n- L'intensité du courant induit augmente avec la rapidité du déplacement de l'aimant.\n\n2. Autres modes de création de l'induction :\n- Par rotation du circuit dans un champ fixe (variation de l'angle θ) ;\n- Par variation géométrique de l'aire du circuit (déplacement d'une tige mobile sur des rails conducteurs dans un champ B, variation de S) ;\n- Par variation de l'intensité du courant dans une bobine inductrice voisine (fermeture, ouverture ou modulation d'un rhéostat dans le primaire, faisant varier l'intensité de B).\n\n3. Conclusion fondamentale de Faraday :\nUn courant électrique induit apparaît dans un circuit fermé chaque fois que le flux magnétique qui le traverse subit une VARIATION au cours du temps (dΦ/dt ≠ 0). Ce courant ne dure que pendant toute la durée de la variation du flux.",
      "keyRule": "L'induction n'apparaît QUE lorsqu'il y a variation temporelle du flux magnétique (dΦ/dt ≠ 0). Si le flux reste constant (aimant immobile, courant fixe), aucun courant induit n'existe.",
      "formulas": [
        {
          "name": "Condition d'existence de l'induction",
          "formula": "\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t} \\neq 0 \\iff \\text{Courant induit } i \\neq 0",
          "note": "Le flux doit varier au cours du temps"
        }
      ],
      "workedExample": {
        "title": "Identification de la présence ou non d'un courant induit",
        "statement": "Une bobine fermée sur une ampoule est placée dans l'entrefer d'un aimant où règne un champ B très intense et parfaitement constant. La bobine et l'aimant sont transportés ensemble à la vitesse de 100 km/h dans un train. L'ampoule s'allume-t-elle ?",
        "methodSteps": [
          "Étape 1 : Analyser l'état du flux magnétique embrassé par la bobine : comme l'aimant et la bobine se déplacent ensemble à la même vitesse, il n'y a aucun mouvement relatif entre eux.",
          "Étape 2 : Évaluer la variation de flux : le champ B, la surface S et l'angle θ sont constants au cours du temps, donc dΦ/dt = 0.",
          "Étape 3 : Conclure sur le courant induit : le flux ne variant pas, aucun courant induit n'est généré."
        ],
        "conclusion": "L'ampoule reste totalement éteinte : seule une variation temporelle du flux peut engendrer l'induction, quelle que soit la vitesse absolue du système."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Synthèse des modes de production de l'induction électromagnétique",
        "tableData": {
          "headers": [
            "Mode expérimental",
            "Paramètre variable",
            "Mécanisme physique",
            "Durée du courant induit",
            "Application industrielle"
          ],
          "rows": [
            [
              "Déplacement d'un aimant",
              "Distance inducteur-induit",
              "Variation de l'intensité B(t)",
              "Pendant le mouvement de l'aimant",
              "Capteur de vitesse de roue (ABS)"
            ],
            [
              "Rotation d'une bobine",
              "Angle θ = ω t",
              "Variation périodique de cos(ω t)",
              "Permanente tant que la rotation dure",
              "Alternateur de centrale électrique, dynamo vélo"
            ],
            [
              "Déplacement d'une tige sur rails",
              "Surface du circuit S(t) = ℓ v t",
              "Variation linéaire de la surface",
              "Pendant le roulement de la tige",
              "Frein électromagnétique, débitmètre inductif"
            ],
            [
              "Variation du courant primaire",
              "Courant inducteur i₁(t)",
              "Variation de B₁(t) = μ₀ n i₁(t)",
              "Pendant la transition du courant",
              "Transformateur électrique, bobine d'allumage"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Inducteur et Induit",
          "stepTheme": "Vocabulaire de l'induction",
          "stepBadge": "Source et Récepteur",
          "paragraphText": "Dans tout phénomène d'induction électromagnétique, on distingue deux entités : l'inducteur (la source qui produit le champ magnétique, comme un aimant ou une bobine primaire) et l'induit (le circuit fermé où prend naissance le courant électrique induit).",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p02_q1",
            "type": "mcq",
            "prompt": "Dans une génératrice de bicyclette (dynamo), quel organe constitue l'inducteur et quel organe constitue l'induit ?",
            "options": [
              "L'aimant tournant est l'inducteur et la bobine fixe est l'induit",
              "La bobine est l'inducteur et l'aimant est l'induit",
              "La jante de la roue est l'inducteur",
              "L'ampoule est l'induit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'aimant tournant génère le champ magnétique inducteur ; la bobine fixe qui recueille le courant induit constitue l'induit."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Rôle de la vitesse de déplacement",
          "stepTheme": "Intensité du courant induit",
          "stepBadge": "i proportionnel à v",
          "paragraphText": "L'intensité du courant induit est d'autant plus grande que la variation de flux est rapide : plus on approche ou éloigne rapidement l'aimant de la bobine (vitesse v élevée), plus la déviation de l'aiguille du galvanomètre est importante.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p02_q2",
            "type": "mcq",
            "prompt": "Que se passe-t-il si l'on approche un aimant très lentement vers une bobine, puis qu'on l'approche très brusquement à grande vitesse ?",
            "options": [
              "Le courant induit est faible à basse vitesse et beaucoup plus intense lors de l'approche brusque",
              "Le courant induit est identique dans les deux cas",
              "Le courant s'annule lors de l'approche rapide",
              "L'aimant se désaimante à grande vitesse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La force électromotrice induite est proportionnelle à la vitesse de variation du flux dΦ/dt : un déplacement rapide produit une f.é.m. et un courant induit bien plus intenses."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Annulation du courant à l'arrêt",
          "stepTheme": "Dépendance temporelle",
          "stepBadge": "Immobilité => i = 0",
          "paragraphText": "Dès que le mouvement relatif cesse, même si l'aimant reste positionné tout près ou à l'intérieur de la bobine où le champ est maximal, le courant induit s'annule instantanément : l'induction exige impérativement une variation de flux et non une simple présence de champ.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p02_q3",
            "type": "mcq",
            "prompt": "Un aimant puissant est posé immobile au cœur d'une bobine de 5000 spires. Que mesure un ampèremètre branché aux bornes de la bobine ?",
            "options": [
              "0,0 A (aucun courant électrique)",
              "Un courant géant continu",
              "Un courant alternatif de 50 Hz",
              "Une étincelle permanente"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Puisque l'aimant est immobile, le flux magnétique ne varie pas (dΦ/dt = 0) : le courant induit est rigoureusement nul."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Induction par variation de surface (rails de Laplace inversés)",
          "stepTheme": "Générateur sur rails",
          "stepBadge": "ΔS engendre e",
          "paragraphText": "Lorsqu'une tige métallique roule à vitesse constante v sur deux rails parallèles distants de ℓ dans un champ orthogonal B, la surface du circuit varie selon S(t) = S₀ + ℓ v t. Cette variation continue de surface engendre un flux variable Φ(t) = -B(S₀ + ℓ v t) et une f.é.m. induite motrice e = B ℓ v.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p02_q4",
            "type": "mcq",
            "prompt": "Une tige de 25 cm roule à v = 10 m/s sur des rails dans B = 1,0 T orthogonal. Quelle f.é.m. induite e apparaît entre ses extrémités ?",
            "options": [
              "e = 2,5 V",
              "e = 25 V",
              "e = 0,25 V",
              "e = 250 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "e = B * ℓ * v = 1,0 * 0,25 * 10 = 2,5 V (conforme à l'exercice 3 du PDF officiel p. 11)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Induction mutuelle entre deux bobines",
          "stepTheme": "Couplage inductif",
          "stepBadge": "Primaire et Secondaire",
          "paragraphText": "Lorsqu'une bobine inductrice (primaire) parcourue par un courant variable i₁(t) est placée à proximité d'une seconde bobine (secondaire), le champ variable B₁(t) traverse les spires du secondaire et y crée une tension induite e₂(t) sans aucun contact électrique entre les circuits : c'est l'induction mutuelle.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p02_q5",
            "type": "mcq",
            "prompt": "À la fermeture de l'interrupteur du circuit inducteur primaire, pourquoi apparaît-il une impulsion de courant dans la bobine secondaire ?",
            "options": [
              "Parce que le courant primaire passe de 0 à I, créant un champ B croissant et donc un flux croissant dans le secondaire",
              "Parce que des électrons sautent dans l'air entre les bobines",
              "Parce que la bobine chauffe",
              "Parce que le cuivre est magnétique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La transition de courant 0 -> I crée une variation rapide de flux dΦ/dt, ce qui induit une f.é.m. brève dans la bobine voisine."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Ne pas confondre induction en circuit ouvert et en circuit fermé",
          "stepTheme": "f.é.m. vs Courant",
          "stepBadge": "Circuit ouvert => e ≠ 0 mais i = 0",
          "paragraphText": "Si le circuit induit est ouvert (interrupteur ouvert ou voltmètre à haute impédance), aucun courant induit ne peut circuler (i = 0). Cependant, la force électromotrice induite e = -dΦ/dt existe bel et bien entre les bornes ouvertes ! La tension à vide mesurée vaut alors u = -e = dΦ/dt.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p02_q6",
            "type": "mcq",
            "prompt": "On approche un aimant d'une bobine dont les bornes sont laissées libres en circuit ouvert. Que mesure-t-on entre ses bornes ?",
            "options": [
              "Une tension électrique (f.é.m. induite e) bien que le courant soit nul (i = 0)",
              "Absolument rien : ni tension ni courant",
              "Un court-circuit",
              "Une résistance infinie qui explose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La f.é.m. d'induction e existe dès qu'il y a variation de flux, que le circuit soit fermé ou ouvert. Le courant, lui, exige la fermeture physique du circuit."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le freinage magnétique par induction sur un chariot",
          "stepTheme": "Freinage de Lenz",
          "stepBadge": "Force opposée au mouvement",
          "paragraphText": "Lorsqu'un cadre conducteur fermé pénètre dans l'entrefer d'un aimant, le courant induit qui y naît subit une force de Laplace dirigée vers l'arrière, ralentissant vigoureusement le cadre. C'est l'illustration mécanique directe de la modération de Lenz.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p02_q7",
            "type": "mcq",
            "prompt": "Une boucle de cuivre est lancée vers l'entrefer d'un aimant. Au moment où elle pénètre dans le champ magnétique, que subit-elle ?",
            "options": [
              "Une force de freinage qui la ralentit spontanément",
              "Une force d'accélération qui la propulse plus vite",
              "Une force ascendante qui la fait voler",
              "Aucune force mécanique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le courant induit créé par l'augmentation de flux subit une force de Laplace qui s'oppose à l'entrée de la boucle dans le champ : elle est freinée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l07_induction_p02_q1",
          "type": "mcq",
          "prompt": "Dans une génératrice de bicyclette (dynamo), quel organe constitue l'inducteur et quel organe constitue l'induit ?",
          "options": [
            "L'aimant tournant est l'inducteur et la bobine fixe est l'induit",
            "La bobine est l'inducteur et l'aimant est l'induit",
            "La jante de la roue est l'inducteur",
            "L'ampoule est l'induit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'aimant tournant génère le champ magnétique inducteur ; la bobine fixe qui recueille le courant induit constitue l'induit."
        },
        {
          "id": "terminale_d_physique_l07_induction_p02_q2",
          "type": "mcq",
          "prompt": "Que se passe-t-il si l'on approche un aimant très lentement vers une bobine, puis qu'on l'approche très brusquement à grande vitesse ?",
          "options": [
            "Le courant induit est faible à basse vitesse et beaucoup plus intense lors de l'approche brusque",
            "Le courant induit est identique dans les deux cas",
            "Le courant s'annule lors de l'approche rapide",
            "L'aimant se désaimante à grande vitesse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La force électromotrice induite est proportionnelle à la vitesse de variation du flux dΦ/dt : un déplacement rapide produit une f.é.m. et un courant induit bien plus intenses."
        },
        {
          "id": "terminale_d_physique_l07_induction_p02_q3",
          "type": "mcq",
          "prompt": "Un aimant puissant est posé immobile au cœur d'une bobine de 5000 spires. Que mesure un ampèremètre branché aux bornes de la bobine ?",
          "options": [
            "0,0 A (aucun courant électrique)",
            "Un courant géant continu",
            "Un courant alternatif de 50 Hz",
            "Une étincelle permanente"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque l'aimant est immobile, le flux magnétique ne varie pas (dΦ/dt = 0) : le courant induit est rigoureusement nul."
        },
        {
          "id": "terminale_d_physique_l07_induction_p02_q4",
          "type": "mcq",
          "prompt": "Une tige de 25 cm roule à v = 10 m/s sur des rails dans B = 1,0 T orthogonal. Quelle f.é.m. induite e apparaît entre ses extrémités ?",
          "options": [
            "e = 2,5 V",
            "e = 25 V",
            "e = 0,25 V",
            "e = 250 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "e = B * ℓ * v = 1,0 * 0,25 * 10 = 2,5 V (conforme à l'exercice 3 du PDF officiel p. 11)."
        },
        {
          "id": "terminale_d_physique_l07_induction_p02_q5",
          "type": "mcq",
          "prompt": "À la fermeture de l'interrupteur du circuit inducteur primaire, pourquoi apparaît-il une impulsion de courant dans la bobine secondaire ?",
          "options": [
            "Parce que le courant primaire passe de 0 à I, créant un champ B croissant et donc un flux croissant dans le secondaire",
            "Parce que des électrons sautent dans l'air entre les bobines",
            "Parce que la bobine chauffe",
            "Parce que le cuivre est magnétique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La transition de courant 0 -> I crée une variation rapide de flux dΦ/dt, ce qui induit une f.é.m. brève dans la bobine voisine."
        },
        {
          "id": "terminale_d_physique_l07_induction_p02_q6",
          "type": "mcq",
          "prompt": "On approche un aimant d'une bobine dont les bornes sont laissées libres en circuit ouvert. Que mesure-t-on entre ses bornes ?",
          "options": [
            "Une tension électrique (f.é.m. induite e) bien que le courant soit nul (i = 0)",
            "Absolument rien : ni tension ni courant",
            "Un court-circuit",
            "Une résistance infinie qui explose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La f.é.m. d'induction e existe dès qu'il y a variation de flux, que le circuit soit fermé ou ouvert. Le courant, lui, exige la fermeture physique du circuit."
        },
        {
          "id": "terminale_d_physique_l07_induction_p02_q7",
          "type": "mcq",
          "prompt": "Une boucle de cuivre est lancée vers l'entrefer d'un aimant. Au moment où elle pénètre dans le champ magnétique, que subit-elle ?",
          "options": [
            "Une force de freinage qui la ralentit spontanément",
            "Une force d'accélération qui la propulse plus vite",
            "Une force ascendante qui la fait voler",
            "Aucune force mécanique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le courant induit créé par l'augmentation de flux subit une force de Laplace qui s'oppose à l'entrée de la boucle dans le champ : elle est freinée."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l07_induction_p03",
      "order": 3,
      "title": "Lois de l'induction : Loi de Lenz et Loi de Faraday",
      "summary": "Énoncé de la loi de Lenz (principe de modération), prévision du sens du courant induit, énoncé de la loi de Faraday e = -dΦ/dt, signification physique du signe moins, f.é.m. moyenne emoy = -ΔΦ / Δt, et méthodologie d'orientation de circuit.",
      "conceptExplanation": "1. La loi de Lenz (1834) :\nLe sens du courant induit est tel que, par ses effets électromagnétiques (champ magnétique induit B_induit ou forces de Laplace induites), il s'oppose constamment à la cause qui lui donne naissance.\n- Si la cause est l'augmentation du flux magnétique (dΦ > 0), le courant induit crée un champ B_induit de sens contraire au champ inducteur pour freiner cette augmentation ;\n- Si la cause est la diminution du flux magnétique (dΦ < 0), le courant induit crée un champ B_induit de même sens que le champ inducteur pour compenser cette diminution ;\n- Si la cause est le mouvement relatif d'un conducteur, le courant induit subit une force de Laplace qui s'oppose au déplacement (force de freinage).\n\n2. La loi de Faraday (1831) :\nTout circuit électrique soumis à une variation de flux magnétique est le siège d'une force électromotrice induite instantanée e égale à l'opposé de la dérivée par rapport au temps du flux magnétique :\ne = - dΦ / dt.\n- e est la force électromotrice induite (en Volts, V) ;\n- dΦ/dt est la vitesse de variation du flux magnétique (en Wb/s ou V) ;\n- Le signe moins (-) traduit mathématiquement la loi de modération de Lenz.\n\n3. Force électromotrice moyenne emoy :\nPendant un intervalle de temps fini Δt = t_f - t_i au cours duquel le flux passe de la valeur initiale Φ_i à la valeur finale Φ_f (ΔΦ = Φ_f - Φ_i), la f.é.m. moyenne s'écrit :\ne_moy = - ΔΦ / Δt = - (Φ_f - Φ_i) / (t_f - t_i).\n\n4. Détermination algébrique du sens du courant induit :\nAprès avoir orienté arbitrairement le circuit (ce qui fixe le vecteur n et donc le calcul de Φ) :\n- Si e > 0 : le courant induit circule dans le sens positif choisi ;\n- Si e < 0 : le courant induit circule en sens inverse du sens positif choisi.",
      "keyRule": "Loi de Faraday : e = -dΦ/dt. Loi de Lenz : le courant induit s'oppose à la cause qui l'a créé. Si le flux augmente (dΦ/dt > 0), e < 0 (courant opposé au sens positif) ; si le flux diminue, e > 0.",
      "formulas": [
        {
          "name": "Loi de Faraday (f.é.m. instantanée)",
          "formula": "e = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}",
          "note": "e en volts (V), Φ en webers (Wb)"
        },
        {
          "name": "Force électromotrice moyenne",
          "formula": "e_\\text{moy} = -\\frac{\\Delta\\Phi}{\\Delta t} = -\\frac{\\Phi_f - \\Phi_i}{t_f - t_i}",
          "note": "Sur l'intervalle Δt"
        }
      ],
      "workedExample": {
        "title": "Calcul de la f.é.m. induite par décroissance linéaire d'un champ",
        "statement": "Une bobine comportant N = 100 spires de rayon r = 4,0 cm est placée perpendiculairement à un champ magnétique uniforme B dont l'intensité décroît linéairement de B₁ = 0,04 T à B₂ = 0,00 T en une durée Δt = 0,10 s. Calcule la f.é.m. induite e et précise le sens du courant par rapport au sens du vecteur surface.",
        "methodSteps": [
          "Étape 1 : Calculer l'aire des spires : S = π * r² = π * (0,04)² = 1,6 * 10⁻³ π m² ≈ 5,027 * 10⁻³ m².",
          "Étape 2 : Calculer la pente de variation temporelle du champ : a = dB/dt = (B₂ - B₁) / Δt = (0 - 0,04) / 0,10 = -0,40 T/s.",
          "Étape 3 : Exprimer le flux magnétique : Φ(t) = N * S * B(t) => dΦ/dt = N * S * (dB/dt).",
          "Étape 4 : Calculer la f.é.m. par la loi de Faraday : e = -dΦ/dt = - N * S * a = - 100 * (1,6 * 10⁻³ π) * (-0,40) = +0,064 π V ≈ +0,20 V.",
          "Étape 5 : Interpréter le signe : e > 0, donc le courant induit circule dans le sens positif choisi (il crée un champ induit dans le même sens que B pour s'opposer à sa disparition)."
        ],
        "conclusion": "La bobine produit une tension induite de +0,20 V circulant dans le sens positif convenu."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Application conjointe de la loi de Lenz et de la loi de Faraday",
        "tableData": {
          "headers": [
            "Variation physique du flux",
            "Signe de dΦ/dt",
            "Signe de e = -dΦ/dt",
            "Sens de circulation de i",
            "Action du champ induit B_induit"
          ],
          "rows": [
            [
              "Flux croissant (approche du pôle Nord)",
              "dΦ/dt > 0",
              "e < 0",
              "Sens opposé au sens positif",
              "B_induit s'oppose à B (crée une face Nord répulsive)"
            ],
            [
              "Flux décroissant (éloignement du pôle Nord)",
              "dΦ/dt < 0",
              "e > 0",
              "Même sens que le sens positif",
              "B_induit renforce B (crée une face Sud attractive)"
            ],
            [
              "Flux constant (immobilité)",
              "dΦ/dt = 0",
              "e = 0 V",
              "Aucun courant (i = 0)",
              "Aucun champ induit"
            ],
            [
              "Inversion du sens d'enroulement",
              "-",
              "Signe inversé",
              "Inversé aux bornes",
              "Même orientation spatiale de B_induit"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Énoncé de la loi de Lenz",
          "stepTheme": "Principe de modération",
          "stepBadge": "Opposition à la cause",
          "paragraphText": "Le sens du courant induit est tel que, par ses effets électromagnétiques, il s'oppose à la cause qui lui donne naissance. Si le flux inducteur diminue, le courant induit crée un champ qui tend à le renforcer ; si le flux augmente, il crée un champ qui tend à le réduire.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p03_q1",
            "type": "mcq",
            "prompt": "On approche le pôle Nord d'un aimant vers la face avant d'une bobine. Quelle face la bobine présente-t-elle à l'aimant pour s'opposer à son approche ?",
            "options": [
              "Une face Nord (afin de repousser le pôle Nord qui approche)",
              "Une face Sud pour l'attirer",
              "Une face neutre sans champ",
              "Une face positive électrostatique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour s'opposer à l'approche du pôle Nord, la bobine génère un champ induit sortant par sa face avant, créant une face Nord qui repousse l'aimant (loi de Lenz)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La loi de Faraday e = -dΦ/dt",
          "stepTheme": "Loi quantitative",
          "stepBadge": "e en Volts",
          "paragraphText": "La loi de Faraday stipule que la f.é.m. induite instantanée e est égale à l'opposé de la dérivée par rapport au temps du flux magnétique traversant le circuit : e = -dΦ/dt. Le signe moins traduit mathématiquement la loi de Lenz.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p03_q2",
            "type": "mcq",
            "prompt": "Le flux magnétique à travers un circuit varie selon la loi horaire Φ(t) = 0,50 - 2,0 t (en Webers). Quelle est la valeur de la f.é.m. induite e ?",
            "options": [
              "e = +2,0 V",
              "e = -2,0 V",
              "e = +0,50 V",
              "e = -1,0 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "dΦ/dt = -2,0 Wb/s. D'où e = -dΦ/dt = -(-2,0) = +2,0 V."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul de la f.é.m. moyenne emoy = -ΔΦ / Δt",
          "stepTheme": "Variation moyenne",
          "stepBadge": "emoy = -ΔΦ / Δt",
          "paragraphText": "Sur un intervalle de temps fini Δt, la force électromotrice induite moyenne s'évalue par emoy = -ΔΦ / Δt = -(Φ_final - Φ_initial) / Δt. Elle permet de quantifier la tension moyenne générée lors d'une manœuvre brusque.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p03_q3",
            "type": "mcq",
            "prompt": "Le flux embrassé par une bobine passe de Φ₁ = 0,15 Wb à Φ₂ = 0,05 Wb en Δt = 20 ms (0,020 s). Que vaut la f.é.m. moyenne induite ?",
            "options": [
              "emoy = +5,0 V",
              "emoy = -5,0 V",
              "emoy = +0,10 V",
              "emoy = -2,0 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ΔΦ = Φ₂ - Φ₁ = 0,05 - 0,15 = -0,10 Wb. emoy = -(-0,10) / 0,020 = +5,0 V."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Répulsion à l'approche et attraction à l'éloignement",
          "stepTheme": "Conséquence mécanique",
          "stepBadge": "Force de Lenz",
          "paragraphText": "Conséquence universelle de la loi de Lenz : approcher un aimant d'un circuit fermé induit une force magnétique de RÉPULSION qui résiste à l'approche. Éloigner l'aimant induit une force d'ATTRACTION qui retient l'aimant. L'opérateur doit toujours fournir un travail mécanique moteur pour vaincre cette résistance.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p03_q4",
            "type": "mcq",
            "prompt": "On éloigne le pôle Sud d'un aimant d'un anneau de cuivre fermé suspendu. Que fait l'anneau ?",
            "options": [
              "Il est attiré par l'aimant et le suit dans son déplacement pour s'opposer à l'éloignement",
              "Il est repoussé vigoureusement",
              "Il reste immobile",
              "Il explose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après la loi de Lenz, l'effet s'oppose à la cause : la cause étant l'éloignement, la force induite est attractive pour tenter de maintenir l'aimant à proximité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Détermination du sens du courant à l'aide d'un vecteur surface n",
          "stepTheme": "Algèbre de signe",
          "stepBadge": "e > 0 => sens direct",
          "paragraphText": "Pour déterminer rigoureusement le sens du courant induit : 1) Choisir un sens de parcours positif ; 2) En déduire le vecteur n ; 3) Calculer Φ = B S cos θ ; 4) Calculer e = -dΦ/dt ; 5) Si e > 0, le courant circule dans le sens choisi ; si e < 0, il circule en sens inverse.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p03_q5",
            "type": "mcq",
            "prompt": "Dans un circuit orienté positivement, on calcule e = -4,5 V. Dans quel sens le courant induit circule-t-il ?",
            "options": [
              "En sens inverse du sens positif choisi",
              "Dans le sens positif choisi",
              "Le courant ne peut pas circuler si e est négatif",
              "Dans les deux sens alternativement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une f.é.m. algébrique négative (e < 0) signifie simplement que le courant physique circule en sens inverse de la flèche d'orientation arbitraire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Oubli du signe moins dans la loi de Faraday",
          "stepTheme": "Convention de signe",
          "stepBadge": "Signe moins obligatoire",
          "paragraphText": "Écrire e = dΦ/dt sans le signe moins est une faute conceptuelle grave qui viole le principe de conservation de l'énergie. Sans ce signe moins, le courant induit créerait un champ renforçant la cause, provoquant une divergence catastrophique d'énergie infinie spontanée !",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p03_q6",
            "type": "mcq",
            "prompt": "Pourquoi le signe moins (-) dans e = -dΦ/dt est-il indispensable à la physique de l'induction ?",
            "options": [
              "Parce qu'il garantit le respect de la loi de conservation de l'énergie en assurant que les effets s'opposent à la cause",
              "C'est une simple faute d'imprimerie historique",
              "Pour rendre la tension toujours négative",
              "Parce que les électrons ont une charge positive"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le signe moins traduit le principe de modération (loi de Lenz) : sans lui, l'énergie créée s'auto-amplifierait sans travail extérieur, violant la thermodynamique."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Induction dans une bobine à courant triangulaire",
          "stepTheme": "Signal en créneaux",
          "stepBadge": "Rampe => f.é.m. constante",
          "paragraphText": "Si le courant dans une bobine inductrice varie en dents de scie ou en rampe linéaire i(t) = a t, la dérivée di/dt est constante par morceaux : la f.é.m. induite e(t) prend alors la forme d'un signal en créneaux rectangulaires alternant entre -E₀ et +E₀.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p03_q7",
            "type": "mcq",
            "prompt": "Si le courant inducteur croît linéairement à la vitesse constante di/dt = +50 A/s puis décroît à -50 A/s, quelle est la forme temporelle de la f.é.m. induite e(t) ?",
            "options": [
              "Un signal en créneaux rectangulaires alternant entre une valeur négative constante et une valeur positive constante",
              "Un signal triangulaire identique",
              "Une droite constante à zéro",
              "Une onde sinusoïdale pure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée d'une fonction linéaire par morceaux est une fonction constante par morceaux : la f.é.m. e = -k di/dt prend l'allure de créneaux rectangulaires (conforme à l'exercice 4 p. 12 du PDF officiel)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l07_induction_p03_q1",
          "type": "mcq",
          "prompt": "On approche le pôle Nord d'un aimant vers la face avant d'une bobine. Quelle face la bobine présente-t-elle à l'aimant pour s'opposer à son approche ?",
          "options": [
            "Une face Nord (afin de repousser le pôle Nord qui approche)",
            "Une face Sud pour l'attirer",
            "Une face neutre sans champ",
            "Une face positive électrostatique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour s'opposer à l'approche du pôle Nord, la bobine génère un champ induit sortant par sa face avant, créant une face Nord qui repousse l'aimant (loi de Lenz)."
        },
        {
          "id": "terminale_d_physique_l07_induction_p03_q2",
          "type": "mcq",
          "prompt": "Le flux magnétique à travers un circuit varie selon la loi horaire Φ(t) = 0,50 - 2,0 t (en Webers). Quelle est la valeur de la f.é.m. induite e ?",
          "options": [
            "e = +2,0 V",
            "e = -2,0 V",
            "e = +0,50 V",
            "e = -1,0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "dΦ/dt = -2,0 Wb/s. D'où e = -dΦ/dt = -(-2,0) = +2,0 V."
        },
        {
          "id": "terminale_d_physique_l07_induction_p03_q3",
          "type": "mcq",
          "prompt": "Le flux embrassé par une bobine passe de Φ₁ = 0,15 Wb à Φ₂ = 0,05 Wb en Δt = 20 ms (0,020 s). Que vaut la f.é.m. moyenne induite ?",
          "options": [
            "emoy = +5,0 V",
            "emoy = -5,0 V",
            "emoy = +0,10 V",
            "emoy = -2,0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ΔΦ = Φ₂ - Φ₁ = 0,05 - 0,15 = -0,10 Wb. emoy = -(-0,10) / 0,020 = +5,0 V."
        },
        {
          "id": "terminale_d_physique_l07_induction_p03_q4",
          "type": "mcq",
          "prompt": "On éloigne le pôle Sud d'un aimant d'un anneau de cuivre fermé suspendu. Que fait l'anneau ?",
          "options": [
            "Il est attiré par l'aimant et le suit dans son déplacement pour s'opposer à l'éloignement",
            "Il est repoussé vigoureusement",
            "Il reste immobile",
            "Il explose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la loi de Lenz, l'effet s'oppose à la cause : la cause étant l'éloignement, la force induite est attractive pour tenter de maintenir l'aimant à proximité."
        },
        {
          "id": "terminale_d_physique_l07_induction_p03_q5",
          "type": "mcq",
          "prompt": "Dans un circuit orienté positivement, on calcule e = -4,5 V. Dans quel sens le courant induit circule-t-il ?",
          "options": [
            "En sens inverse du sens positif choisi",
            "Dans le sens positif choisi",
            "Le courant ne peut pas circuler si e est négatif",
            "Dans les deux sens alternativement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une f.é.m. algébrique négative (e < 0) signifie simplement que le courant physique circule en sens inverse de la flèche d'orientation arbitraire."
        },
        {
          "id": "terminale_d_physique_l07_induction_p03_q6",
          "type": "mcq",
          "prompt": "Pourquoi le signe moins (-) dans e = -dΦ/dt est-il indispensable à la physique de l'induction ?",
          "options": [
            "Parce qu'il garantit le respect de la loi de conservation de l'énergie en assurant que les effets s'opposent à la cause",
            "C'est une simple faute d'imprimerie historique",
            "Pour rendre la tension toujours négative",
            "Parce que les électrons ont une charge positive"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le signe moins traduit le principe de modération (loi de Lenz) : sans lui, l'énergie créée s'auto-amplifierait sans travail extérieur, violant la thermodynamique."
        },
        {
          "id": "terminale_d_physique_l07_induction_p03_q7",
          "type": "mcq",
          "prompt": "Si le courant inducteur croît linéairement à la vitesse constante di/dt = +50 A/s puis décroît à -50 A/s, quelle est la forme temporelle de la f.é.m. induite e(t) ?",
          "options": [
            "Un signal en créneaux rectangulaires alternant entre une valeur négative constante et une valeur positive constante",
            "Un signal triangulaire identique",
            "Une droite constante à zéro",
            "Une onde sinusoïdale pure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée d'une fonction linéaire par morceaux est une fonction constante par morceaux : la f.é.m. e = -k di/dt prend l'allure de créneaux rectangulaires (conforme à l'exercice 4 p. 12 du PDF officiel)."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l07_induction_p04",
      "order": 4,
      "title": "Courant induit, tension aux bornes et quantité d'électricité",
      "summary": "Loi d'Ohm pour le circuit induit i = e / (R + r), tension aux bornes d'un dipôle induit u = r i - e, quantité d'électricité induite Q = -ΔΦ / (R + r) indépendante de la durée, et dynamique complète d'une tige mobile sur rails.",
      "conceptExplanation": "1. Circuit induit fermé et intensité du courant induit :\nConsidérons un circuit induit de résistance interne r fermé sur un conducteur ohmique extérieur de résistance R. Le circuit est équivalent à un générateur de f.é.m. e et de résistance interne r débitant dans la résistance R. D'après la loi de Pouillet (loi d'Ohm généralisée) :\ni = e / (R + r) = - [1 / (R + r)] * (dΦ / dt).\n\n2. Tension aux bornes du dipôle générateur induit :\nLa tension u aux bornes de la bobine siège de l'induction (en convention générateur) s'écrit :\nu = - R * i = r i - e = - [R / (R + r)] * e.\nLorsque le circuit est ouvert (interrupteur ouvert, i = 0), la tension aux bornes vaut directement :\nu = -e = dΦ / dt.\n\n3. Quantité d'électricité induite Q :\nL'intensité du courant étant i = dq / dt, la charge élémentaire transportée pendant dt vaut dq = i dt = - [dΦ / (R + r)].\nPar intégration entre l'instant initial t_i (flux Φ_i) et l'instant final t_f (flux Φ_f) :\nQ = Intégrale(i dt) = - (Φ_f - Φ_i) / (R + r) = - ΔΦ / (R + r).\nRésultat remarquable : La quantité totale d'électricité Q ayant circulé dépend UNIQUEMENT de la variation globale de flux ΔΦ et de la résistance totale du circuit : elle est totalement INDÉPENDANTE de la durée du déplacement Δt !\n\n4. Étude complète d'une tige mobile sur rails de Laplace (générateur glissant) :\nUne tige de longueur ℓ et de résistance r glisse à vitesse constante v sur des rails sans frottement fermés par un résistor R, sous un champ B orthogonal :\n- Flux à la date t : Φ(t) = -B (S₀ + ℓ v t) ;\n- F.é.m. induite : e = -dΦ/dt = B ℓ v ;\n- Courant induit : i = e / (R + r) = (B ℓ v) / (R + r) ;\n- Force de Laplace de freinage : F' = i ℓ B = (B² ℓ² v) / (R + r) dirigée à l'opposé de la vitesse v ;\n- Pour maintenir la vitesse constante v, l'opérateur doit exercer une force motrice F_motrice = + F'.",
      "keyRule": "L'intensité du courant induit est i = e / (R + r). La charge induite totale est Q = -ΔΦ / (R + r) (indépendante de la vitesse). Sur des rails, e = B ℓ v et la force de freinage vaut F' = (B² ℓ² v) / (R + r).",
      "formulas": [
        {
          "name": "Intensité du courant induit",
          "formula": "i = \\frac{e}{R + r} = -\\frac{1}{R + r}\\,\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}",
          "note": "R + r résistance totale en ohms (Ω)"
        },
        {
          "name": "Quantité d'électricité induite totale",
          "formula": "Q = -\\frac{\\Delta\\Phi}{R + r} = \\frac{\\Phi_i - \\Phi_f}{R + r}",
          "note": "Indépendante de la vitesse et de la durée"
        },
        {
          "name": "F.é.m. sur rails de Laplace",
          "formula": "e = B\\,\\ell\\,v",
          "note": "v vitesse de glissement en m/s"
        },
        {
          "name": "Force électromagnétique de freinage",
          "formula": "F' = \\frac{B^2\\,\\ell^2\\,v}{R + r}",
          "note": "Proportionnelle à la vitesse v"
        }
      ],
      "workedExample": {
        "title": "Calcul complet d'un générateur linéaire sur rails",
        "statement": "Deux rails horizontaux distants de ℓ = 25 cm sont reliés par un résistor R = 0,50 Ω. Une tige de résistance r = 0,50 Ω glisse à vitesse constante v = 10 m/s sous un champ magnétique vertical B = 1,0 T. Calcule la f.é.m. induite e, l'intensité du courant induit i, et l'intensité de la force de freinage F'.",
        "methodSteps": [
          "Étape 1 : Calculer la f.é.m. induite : e = B * ℓ * v = 1,0 * 0,25 * 10 = 2,5 V.",
          "Étape 2 : Calculer la résistance totale du circuit : R_tot = R + r = 0,50 + 0,50 = 1,00 Ω.",
          "Étape 3 : Calculer l'intensité du courant induit : i = e / R_tot = 2,5 / 1,00 = 2,5 A.",
          "Étape 4 : Calculer la force de Laplace résistante subie par la tige : F' = i * ℓ * B = 2,5 * 0,25 * 1,0 = 0,625 N (orientée vers l'arrière, opposée à v)."
        ],
        "conclusion": "Le générateur sur rails délivre 2,5 A sous une tension induite de 2,5 V et subit une force de freinage de 0,625 N."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Bilan des grandeurs électriques et dynamiques du générateur sur rails",
        "tableData": {
          "headers": [
            "Grandeur",
            "Formule analytique",
            "Valeur type",
            "Orientation / Signe",
            "Rôle physique"
          ],
          "rows": [
            [
              "F.é.m. induite e",
              "e = B ℓ v",
              "2,5 V",
              "Fixe le sens de circulation",
              "Tension motrice générée par le déplacement"
            ],
            [
              "Courant induit i",
              "i = B ℓ v / (R + r)",
              "2,5 A",
              "Circule de M' vers M dans la tige",
              "Porteur du flux de puissance électrique"
            ],
            [
              "Force de freinage F'",
              "F' = i ℓ B = (B² ℓ² v) / (R + r)",
              "0,625 N",
              "Opposée au vecteur vitesse v",
              "Frein électromagnétique conforme à Lenz"
            ],
            [
              "Puissance mécanique fournie",
              "P_meca = F' * v = (B² ℓ² v²) / (R + r)",
              "6,25 W",
              "Travail fourni par l'opérateur",
              "Exactement égale à la puissance Joule dissipée P_J = (R + r) i²"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Loi d'Ohm pour le circuit induit",
          "stepTheme": "Courant induit",
          "stepBadge": "i = e / (R + r)",
          "paragraphText": "Dans un circuit induit de résistance totale R_tot = R + r, le courant induit est déterminé par la loi de Pouillet : i = e / (R + r). Si la résistance totale est très faible, une faible variation de flux engendre un courant très élevé.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p04_q1",
            "type": "mcq",
            "prompt": "Une f.é.m. induite e = 12 V naît dans une bobine de résistance interne r = 1,0 Ω connectée à un résistor R = 5,0 Ω. Quelle est l'intensité du courant induit i ?",
            "options": [
              "i = 2,0 A",
              "i = 12 A",
              "i = 2,4 A",
              "i = 0,5 A"
            ],
            "correctAnswerIndex": 0,
            "explanation": "i = e / (R + r) = 12 / (5,0 + 1,0) = 12 / 6,0 = 2,0 A."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La quantité d'électricité induite Q = -ΔΦ / (R + r)",
          "stepTheme": "Indépendance de la durée",
          "stepBadge": "Loi de Felici",
          "paragraphText": "La quantité totale d'électricité induite déplacée Q = Intégrale(i dt) = -ΔΦ / (R + r) ne dépend que de la variation totale de flux ΔΦ et de la résistance. Que l'on déplace l'aimant en 1 seconde ou en 10 minutes, la même charge électrique totale aura traversé le circuit.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p04_q2",
            "type": "mcq",
            "prompt": "Un circuit de résistance R_tot = 2,0 Ω subit une variation de flux ΔΦ = -0,40 Wb. Quelle est la quantité d'électricité totale Q ayant circulé ?",
            "options": [
              "Q = 0,20 C",
              "Q = 0,80 C",
              "Q = 0,05 C",
              "Q = 2,0 C"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Q = -ΔΦ / R_tot = -(-0,40) / 2,0 = 0,20 Coulombs."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul de la f.é.m. sur rails e = B ℓ v",
          "stepTheme": "Conducteur glissant",
          "stepBadge": "e = B ℓ v",
          "paragraphText": "Lorsqu'une tige métallique de longueur ℓ se déplace à vitesse v perpendiculairement aux lignes d'un champ uniforme B, les électrons de conduction subissent la force magnétique de Lorentz transversale, créant entre les extrémités de la tige la tension induite e = B ℓ v.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p04_q3",
            "type": "mcq",
            "prompt": "Un avion de 40 m d'envergure vole horizontalement à v = 250 m/s à travers la composante verticale du champ terrestre Bv = 4,0 * 10⁻⁵ T. Quelle tension induite apparaît entre les extrémités de ses ailes ?",
            "options": [
              "e = 0,40 V",
              "e = 4,0 V",
              "e = 0,04 V",
              "e = 40 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "e = Bv * ℓ * v = (4,0 * 10⁻⁵) * 40 * 250 = (4,0 * 10⁻⁵) * 10 000 = 0,40 V."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La force électromagnétique de freinage F' = (B² ℓ² v) / R_tot",
          "stepTheme": "Freinage linéaire",
          "stepBadge": "F' proportionnel à v",
          "paragraphText": "Le courant induit i traversant la tige immergée dans le champ B génère une force de Laplace F' = i ℓ B = (B² ℓ² v) / (R + r). Cette force s'oppose rigoureusement au vecteur vitesse v : c'est un frottement visqueux d'origine purement électromagnétique.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p04_q4",
            "type": "mcq",
            "prompt": "Si l'on double la vitesse de déplacement v de la tige sur les rails de Laplace, que devient la force de freinage électromagnétique F' ?",
            "options": [
              "Elle est doublée",
              "Elle est quadruplée",
              "Elle est divisée par 2",
              "Elle reste inchangée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "F' = (B² ℓ² / R_tot) * v est directement proportionnelle au premier degré à la vitesse v : doubler v double exactement la force de freinage."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Bilan des puissances et conservation de l'énergie",
          "stepTheme": "Conservation énergétique",
          "stepBadge": "P_meca = P_Joule",
          "paragraphText": "La puissance mécanique fournie par l'opérateur pour maintenir la vitesse constante vaut P_meca = F' * v = (B² ℓ² v²) / R_tot. La puissance dissipée par effet Joule dans les résistances vaut P_J = R_tot * i² = R_tot * (B ℓ v / R_tot)² = (B² ℓ² v²) / R_tot. La puissance mécanique est donc intégralement convertie en puissance électrique !",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p04_q5",
            "type": "mcq",
            "prompt": "Dans un système de rails de Laplace idéal sans frottement solide, quelle est la relation entre la puissance mécanique fournie par l'opérateur P_meca et la puissance électrique dissipée par effet Joule P_J ?",
            "options": [
              "P_meca = P_J (conversion parfaite à 100% sans perte)",
              "P_meca est toujours 10 fois supérieure à P_J",
              "P_meca = 0",
              "P_J = 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'énergie mécanique dépensée pour pousser la tige est exactement égale à l'énergie électrique consommée par effet Joule dans le circuit."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Ne pas oublier la résistance interne de la tige",
          "stepTheme": "Résistance totale",
          "stepBadge": "R + r au dénominateur",
          "paragraphText": "Lors des calculs d'intensité de courant sur rails, beaucoup d'élèves oublient d'additionner la résistance propre r de la tige mobile métallique à la résistance R du résistor fixe. La résistance du circuit est R_tot = R + r. Oublier r fausse tous les calculs de courant et de force.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p04_q6",
            "type": "mcq",
            "prompt": "Un circuit sur rails a un conducteur ohmique R = 0,8 Ω et la tige mobile possède une résistance interne propre r = 0,2 Ω. Quelle résistance doit figurer au dénominateur du calcul de i ?",
            "options": [
              "R_tot = 1,0 Ω (0,8 + 0,2)",
              "R = 0,8 Ω seulement",
              "r = 0,2 Ω seulement",
              "0,16 Ω"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La tige et le résistor sont connectés en série : leurs résistances s'additionnent obligatoirement : R_tot = R + r = 1,0 Ω."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Vitesse limite d'une tige en chute sur rails inclinés",
          "stepTheme": "Vitesse limite",
          "stepBadge": "Équilibre P_pente = F'",
          "paragraphText": "Si les rails sont inclinés d'un angle α et que la tige descend sous l'action de son propre poids, la composante motrice m g sin α est progressivement compensée par la force de freinage électromagnétique F'(v). La tige atteint alors une vitesse limite constante v_lim = [m g sin α * (R + r)] / (B² ℓ²).",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p04_q7",
            "type": "mcq",
            "prompt": "Pourquoi une tige métallique conductrice lâchée sur des rails inclinés dans un champ magnétique n'accélère-t-elle pas indéfiniment ?",
            "options": [
              "Parce que la force de freinage de Laplace augmente avec la vitesse jusqu'à équilibrer exactement la composante du poids, stabilisant la vitesse à une valeur limite constante",
              "Parce que la gravité disparaît",
              "Parce que les rails fondent",
              "Parce que le champ B diminue"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'équivalent parfait d'une vitesse limite de chute dans un fluide visqueux : la force de freinage électromagnétique F' proportionnelle à v compense le poids moteur."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l07_induction_p04_q1",
          "type": "mcq",
          "prompt": "Une f.é.m. induite e = 12 V naît dans une bobine de résistance interne r = 1,0 Ω connectée à un résistor R = 5,0 Ω. Quelle est l'intensité du courant induit i ?",
          "options": [
            "i = 2,0 A",
            "i = 12 A",
            "i = 2,4 A",
            "i = 0,5 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "i = e / (R + r) = 12 / (5,0 + 1,0) = 12 / 6,0 = 2,0 A."
        },
        {
          "id": "terminale_d_physique_l07_induction_p04_q2",
          "type": "mcq",
          "prompt": "Un circuit de résistance R_tot = 2,0 Ω subit une variation de flux ΔΦ = -0,40 Wb. Quelle est la quantité d'électricité totale Q ayant circulé ?",
          "options": [
            "Q = 0,20 C",
            "Q = 0,80 C",
            "Q = 0,05 C",
            "Q = 2,0 C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Q = -ΔΦ / R_tot = -(-0,40) / 2,0 = 0,20 Coulombs."
        },
        {
          "id": "terminale_d_physique_l07_induction_p04_q3",
          "type": "mcq",
          "prompt": "Un avion de 40 m d'envergure vole horizontalement à v = 250 m/s à travers la composante verticale du champ terrestre Bv = 4,0 * 10⁻⁵ T. Quelle tension induite apparaît entre les extrémités de ses ailes ?",
          "options": [
            "e = 0,40 V",
            "e = 4,0 V",
            "e = 0,04 V",
            "e = 40 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "e = Bv * ℓ * v = (4,0 * 10⁻⁵) * 40 * 250 = (4,0 * 10⁻⁵) * 10 000 = 0,40 V."
        },
        {
          "id": "terminale_d_physique_l07_induction_p04_q4",
          "type": "mcq",
          "prompt": "Si l'on double la vitesse de déplacement v de la tige sur les rails de Laplace, que devient la force de freinage électromagnétique F' ?",
          "options": [
            "Elle est doublée",
            "Elle est quadruplée",
            "Elle est divisée par 2",
            "Elle reste inchangée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "F' = (B² ℓ² / R_tot) * v est directement proportionnelle au premier degré à la vitesse v : doubler v double exactement la force de freinage."
        },
        {
          "id": "terminale_d_physique_l07_induction_p04_q5",
          "type": "mcq",
          "prompt": "Dans un système de rails de Laplace idéal sans frottement solide, quelle est la relation entre la puissance mécanique fournie par l'opérateur P_meca et la puissance électrique dissipée par effet Joule P_J ?",
          "options": [
            "P_meca = P_J (conversion parfaite à 100% sans perte)",
            "P_meca est toujours 10 fois supérieure à P_J",
            "P_meca = 0",
            "P_J = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'énergie mécanique dépensée pour pousser la tige est exactement égale à l'énergie électrique consommée par effet Joule dans le circuit."
        },
        {
          "id": "terminale_d_physique_l07_induction_p04_q6",
          "type": "mcq",
          "prompt": "Un circuit sur rails a un conducteur ohmique R = 0,8 Ω et la tige mobile possède une résistance interne propre r = 0,2 Ω. Quelle résistance doit figurer au dénominateur du calcul de i ?",
          "options": [
            "R_tot = 1,0 Ω (0,8 + 0,2)",
            "R = 0,8 Ω seulement",
            "r = 0,2 Ω seulement",
            "0,16 Ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La tige et le résistor sont connectés en série : leurs résistances s'additionnent obligatoirement : R_tot = R + r = 1,0 Ω."
        },
        {
          "id": "terminale_d_physique_l07_induction_p04_q7",
          "type": "mcq",
          "prompt": "Pourquoi une tige métallique conductrice lâchée sur des rails inclinés dans un champ magnétique n'accélère-t-elle pas indéfiniment ?",
          "options": [
            "Parce que la force de freinage de Laplace augmente avec la vitesse jusqu'à équilibrer exactement la composante du poids, stabilisant la vitesse à une valeur limite constante",
            "Parce que la gravité disparaît",
            "Parce que les rails fondent",
            "Parce que le champ B diminue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'équivalent parfait d'une vitesse limite de chute dans un fluide visqueux : la force de freinage électromagnétique F' proportionnelle à v compense le poids moteur."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l07_induction_p05",
      "order": 5,
      "title": "Applications industrielles 1 : Les transformateurs",
      "summary": "Constitution d'un transformateur (primaire, secondaire, noyau magnétique feuilleté), principe d'induction mutuelle en régime alternatif, rapport de transformation k = U₂ / U₁ = N₂ / N₁ = I₁ / I₂, transformateurs abaisseurs, élévateurs et transport d'électricité haute tension.",
      "conceptExplanation": "1. Constitution générale d'un transformateur :\nUn transformateur électrique est un convertisseur statique d'énergie qui permet de modifier la valeur efficace d'une tension alternative sinusoïdale tout en conservant la même fréquence. Il comprend :\n- Un circuit primaire (enroulement inducteur de N₁ spires) relié à la source de tension alternative u₁(t) ;\n- Un circuit secondaire (enroulement induit de N₂ spires) débitant dans le circuit d'utilisation sous la tension u₂(t) ;\n- Un circuit magnétique ferromagnétique fermé (noyau en tôles d'acier au silicium feuilletées) qui canalise intégralement le flux magnétique du primaire vers le secondaire sans fuite.\nImportant : Un transformateur ne fonctionne JAMAIS en courant continu (car un courant continu produit un flux constant dΦ/dt = 0, donc une tension secondaire rigoureusement nulle).\n\n2. Rapport de transformation k :\nEn désignant par U₁ et U₂ les tensions efficaces aux bornes du primaire et du secondaire, et par N₁ et N₂ les nombres de spires respectifs, le flux total traversant chaque spire étant identique :\ne₁ = -N₁ (dΦ/dt)  et  e₂ = -N₂ (dΦ/dt).\nPour un transformateur parfait (sans perte de flux ni pertes par effet Joule) :\nk = U₂ / U₁ = N₂ / N₁.\n\n3. Les trois catégories de transformateurs :\n- Si k = N₂ / N₁ < 1 (N₂ < N₁) : U₂ < U₁, le transformateur est dit ABAISSEUR de tension (ex: chargeurs de smartphones, transformateurs de quartier 20 kV -> 230 V) ;\n- Si k = N₂ / N₁ > 1 (N₂ > N₁) : U₂ > U₁, le transformateur est dit ÉLÉVATEUR de tension (ex: sortie de centrale électrique 20 kV -> 400 kV pour le transport longue distance) ;\n- Si k = 1 (N₂ = N₁) : U₂ = U₁, transformateur d'ISOLEMENT (sécurité des personnes dans les locaux humides, salles de bain, blocs opératoires).\n\n4. Relation sur les intensités et conservation de la puissance :\nDans un transformateur idéal, la puissance apparente transmise se conserve intégralement : P₁ = P₂ => U₁ * I₁ = U₂ * I₂. On en déduit :\nk = U₂ / U₁ = N₂ / N₁ = I₁ / I₂.\nUn transformateur élévateur de tension diminue l'intensité du courant dans le même rapport (I₂ = I₁ / k), ce qui réduit drastiquement les pertes par effet Joule (P_J = R I²) sur les lignes très haute tension (THT).",
      "keyRule": "Rapport de transformation : k = U₂ / U₁ = N₂ / N₁ = I₁ / I₂. Si k < 1 : abaisseur ; si k > 1 : élévateur. Le transformateur ne fonctionne qu'en courant alternatif. Le transport d'énergie à haute tension minimise les pertes par effet Joule.",
      "formulas": [
        {
          "name": "Rapport de transformation",
          "formula": "k = \\frac{U_2}{U_1} = \\frac{N_2}{N_1}",
          "note": "U₁ et U₂ tensions efficaces"
        },
        {
          "name": "Relation des intensités (transformateur idéal)",
          "formula": "k = \\frac{I_1}{I_2} \\iff U_1\\,I_1 = U_2\\,I_2",
          "note": "Conservation de la puissance apparente"
        }
      ],
      "workedExample": {
        "title": "Calcul du rapport de transformation et de l'intensité secondaire",
        "statement": "Un transformateur parfait abaisseur est alimenté sous une tension efficace primaire U₁ = 220 V et délivre au secondaire U₂ = 24 V. Le bobinage primaire comporte N₁ = 1000 spires. Calcule le rapport de transformation k, le nombre de spires N₂ du secondaire, et l'intensité efficace I₂ au secondaire sachant que I₁ = 0,50 A.",
        "methodSteps": [
          "Étape 1 : Calculer le rapport de transformation k : k = U₂ / U₁ = 24 / 220 ≈ 0,109 (k < 1, transformateur abaisseur).",
          "Étape 2 : Calculer le nombre de spires au secondaire : N₂ = k * N₁ = (24 / 220) * 1000 ≈ 109 spires.",
          "Étape 3 : Calculer l'intensité efficace secondaire par conservation de puissance : I₂ = I₁ / k = 0,50 / (24 / 220) = (0,50 * 220) / 24 = 110 / 24 ≈ 4,58 A."
        ],
        "conclusion": "Le transformateur possède 109 spires au secondaire et délivre un courant de 4,58 A sous 24 V."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des types de transformateurs",
        "tableData": {
          "headers": [
            "Type de transformateur",
            "Condition sur les spires",
            "Rapport k",
            "Tensions efficaces",
            "Intensités efficaces",
            "Application type"
          ],
          "rows": [
            [
              "Élévateur de tension",
              "N₂ > N₁",
              "k > 1",
              "U₂ > U₁",
              "I₂ < I₁",
              "Sortie de centrale électrique (transport THT)"
            ],
            [
              "Abaisseur de tension",
              "N₂ < N₁",
              "k < 1",
              "U₂ < U₁",
              "I₂ > I₁",
              "Distribution domestique (230 V), chargeurs"
            ],
            [
              "Transformateur d'isolement",
              "N₂ = N₁",
              "k = 1",
              "U₂ = U₁",
              "I₂ = I₁",
              "Sécurité des personnes (isolement galvanique)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Constitution du transformateur",
          "stepTheme": "Organes du transformateur",
          "stepBadge": "Primaire et Secondaire",
          "paragraphText": "Un transformateur est une machine électrique statique comprenant deux bobinages indépendants (primaire de N₁ spires et secondaire de N₂ spires) couplés magnétiquement par un circuit ferromagnétique fermé feuilleté.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p05_q1",
            "type": "mcq",
            "prompt": "Pourquoi un transformateur ne peut-il pas fonctionner avec une pile ou une batterie délivrant une tension continue ?",
            "options": [
              "Parce qu'une tension continue produit un flux magnétique constant (dΦ/dt = 0), ne générant aucune f.é.m. induite au secondaire",
              "Parce que la pile n'a pas assez d'ampères",
              "Parce que le cuivre des bobines bloque le courant continu",
              "Parce que le noyau fondrait instantanément"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'induction électromagnétique exige une variation temporelle de flux : en continu, le flux est fixe, donc la tension induite secondaire est rigoureusement nulle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Rapport de transformation k = N₂ / N₁",
          "stepTheme": "Rapport de spires",
          "stepBadge": "k = U₂ / U₁",
          "paragraphText": "Le rapport de transformation k est égal au rapport du nombre de spires du secondaire sur le primaire : k = N₂ / N₁. Il est égal au rapport des tensions efficaces à vide : U₂ / U₁ = k.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p05_q2",
            "type": "mcq",
            "prompt": "Un transformateur comporte N₁ = 600 spires au primaire et N₂ = 60 spires au secondaire. Quel est son rapport de transformation k et de quel type d'appareil s'agit-il ?",
            "options": [
              "k = 0,10 (transformateur abaisseur de tension)",
              "k = 10 (transformateur élévateur)",
              "k = 1,0 (transformateur d'isolement)",
              "k = 36 000"
            ],
            "correctAnswerIndex": 0,
            "explanation": "k = N₂ / N₁ = 60 / 600 = 0,10. Comme k < 1, c'est un transformateur abaisseur qui divise la tension d'entrée par 10."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul de la tension secondaire U₂ = k U₁",
          "stepTheme": "Calcul de tension",
          "stepBadge": "U₂ = k U₁",
          "paragraphText": "Pour déterminer la tension délivrée par le secondaire d'un transformateur sans perte alimenté par U₁, on applique directement la relation U₂ = k * U₁ = (N₂ / N₁) * U₁.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p05_q3",
            "type": "mcq",
            "prompt": "Un transformateur élévateur de rapport k = 15 est branché sur le secteur 230 V. Quelle tension efficace U₂ recueille-t-on au secondaire ?",
            "options": [
              "U₂ = 3450 V",
              "U₂ = 15,3 V",
              "U₂ = 230 V",
              "U₂ = 500 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "U₂ = k * U₁ = 15 * 230 = 3450 V."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Relation inverse sur les courants I₂ = I₁ / k",
          "stepTheme": "Conservation de la puissance",
          "stepBadge": "U₁ I₁ = U₂ I₂",
          "paragraphText": "Dans un transformateur de haut rendement, la puissance électrique fournie au primaire est égale à la puissance restituée au secondaire : U₁ * I₁ = U₂ * I₂. On en déduit I₂ = (U₁ / U₂) * I₁ = I₁ / k. Si la tension est augmentée par 10, le courant est divisé par 10.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p05_q4",
            "type": "mcq",
            "prompt": "Un transformateur abaisseur divise la tension par 20 (k = 0,05). Si le primaire absorbe I₁ = 1,0 A, quel courant I₂ circule dans la charge du secondaire ?",
            "options": [
              "I₂ = 20 A (le courant est multiplié par 20)",
              "I₂ = 0,05 A",
              "I₂ = 1,0 A",
              "I₂ = 0,0025 A"
            ],
            "correctAnswerIndex": 0,
            "explanation": "I₂ = I₁ / k = 1,0 / 0,05 = 20 A. L'abaissement de la tension permet de délivrer de fortes intensités sous basse tension."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Raison fondamentale du transport sous très haute tension (THT)",
          "stepTheme": "Réseau électrique",
          "stepBadge": "Pertes Joule P_J = R I²",
          "paragraphText": "Pour transporter une même puissance P = U I sur des centaines de kilomètres de lignes électriques, élever la tension U à 400 000 V permet de diviser le courant I par des milliers. Comme les pertes par effet Joule dans les câbles dépendent du CARRÉ du courant (P_J = R I²), élever la tension d'un facteur 20 réduit les pertes en ligne d'un facteur 400 !",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p05_q5",
            "type": "mcq",
            "prompt": "Pourquoi utilise-t-on des transformateurs élévateurs à la sortie des centrales électriques avant d'injecter le courant sur les lignes de transport ?",
            "options": [
              "Pour diminuer l'intensité du courant I et ainsi réduire drastiquement les pertes d'énergie par effet Joule (P = R I²)",
              "Pour accélérer la vitesse de la lumière",
              "Pour transformer le courant en courant continu",
              "Pour refroidir les câbles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En élevant la tension, le courant diminue dans la même proportion. Les pertes thermiques en ligne (R I²) sont divisées par le carré de ce rapport."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Ne pas inverser le rapport des courants",
          "stepTheme": "Rapport I₁/I₂ vs U₂/U₁",
          "stepBadge": "Attention : k = I₁ / I₂",
          "paragraphText": "Faites très attention aux indices : le rapport de transformation vaut k = U₂ / U₁ = N₂ / N₁, MAIS pour les courants, il vaut k = I₁ / I₂ (les indices 1 et 2 sont inversés !). Écrire k = I₂ / I₁ est une erreur classique qui conduirait à violer la conservation de l'énergie en prétendant qu'un transformateur élévateur augmente à la fois la tension et le courant.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p05_q6",
            "type": "mcq",
            "prompt": "Pour un transformateur abaisseur où U₂ < U₁ (k < 1), comment se situe le courant secondaire I₂ par rapport au courant primaire I₁ ?",
            "options": [
              "I₂ > I₁ (le courant secondaire est supérieur au courant primaire)",
              "I₂ < I₁",
              "I₂ = I₁",
              "I₂ = 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par conservation de l'énergie (U₁ I₁ = U₂ I₂), si U₂ est plus petit que U₁, alors I₂ doit impérativement être plus grand que I₁."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Le transformateur d'isolement (k = 1)",
          "stepTheme": "Sécurité électrique",
          "stepBadge": "Séparation galvanique",
          "paragraphText": "Un transformateur d'isolement possède le même nombre de spires au primaire et au secondaire (N₁ = N₂ => k = 1 => U₂ = U₁). Son rôle n'est pas de modifier la tension, mais de séparer physiquement le réseau secondaire de la terre (suppression de la référence de terre du neutre), protégeant totalement un utilisateur touchant un fil dénudé contre toute électrocution.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p05_q7",
            "type": "mcq",
            "prompt": "Quel est le bénéfice de sécurité apporté par un transformateur d'isolement (k = 1) dans une salle d'eau ou un atelier ?",
            "options": [
              "Supprimer la liaison électrique directe avec la terre, empêchant le courant de traverser le corps d'une personne touchant accidentellement un conducteur actif",
              "Diviser la facture d'électricité par deux",
              "Bloquer les surtensions de foudre",
              "Empêcher les ampoules de chauffer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le circuit secondaire est galvaniquement isolé de la terre : aucun courant de défaut ne peut se refermer à travers le sol et le corps de l'utilisateur."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l07_induction_p05_q1",
          "type": "mcq",
          "prompt": "Pourquoi un transformateur ne peut-il pas fonctionner avec une pile ou une batterie délivrant une tension continue ?",
          "options": [
            "Parce qu'une tension continue produit un flux magnétique constant (dΦ/dt = 0), ne générant aucune f.é.m. induite au secondaire",
            "Parce que la pile n'a pas assez d'ampères",
            "Parce que le cuivre des bobines bloque le courant continu",
            "Parce que le noyau fondrait instantanément"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'induction électromagnétique exige une variation temporelle de flux : en continu, le flux est fixe, donc la tension induite secondaire est rigoureusement nulle."
        },
        {
          "id": "terminale_d_physique_l07_induction_p05_q2",
          "type": "mcq",
          "prompt": "Un transformateur comporte N₁ = 600 spires au primaire et N₂ = 60 spires au secondaire. Quel est son rapport de transformation k et de quel type d'appareil s'agit-il ?",
          "options": [
            "k = 0,10 (transformateur abaisseur de tension)",
            "k = 10 (transformateur élévateur)",
            "k = 1,0 (transformateur d'isolement)",
            "k = 36 000"
          ],
          "correctAnswerIndex": 0,
          "explanation": "k = N₂ / N₁ = 60 / 600 = 0,10. Comme k < 1, c'est un transformateur abaisseur qui divise la tension d'entrée par 10."
        },
        {
          "id": "terminale_d_physique_l07_induction_p05_q3",
          "type": "mcq",
          "prompt": "Un transformateur élévateur de rapport k = 15 est branché sur le secteur 230 V. Quelle tension efficace U₂ recueille-t-on au secondaire ?",
          "options": [
            "U₂ = 3450 V",
            "U₂ = 15,3 V",
            "U₂ = 230 V",
            "U₂ = 500 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "U₂ = k * U₁ = 15 * 230 = 3450 V."
        },
        {
          "id": "terminale_d_physique_l07_induction_p05_q4",
          "type": "mcq",
          "prompt": "Un transformateur abaisseur divise la tension par 20 (k = 0,05). Si le primaire absorbe I₁ = 1,0 A, quel courant I₂ circule dans la charge du secondaire ?",
          "options": [
            "I₂ = 20 A (le courant est multiplié par 20)",
            "I₂ = 0,05 A",
            "I₂ = 1,0 A",
            "I₂ = 0,0025 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "I₂ = I₁ / k = 1,0 / 0,05 = 20 A. L'abaissement de la tension permet de délivrer de fortes intensités sous basse tension."
        },
        {
          "id": "terminale_d_physique_l07_induction_p05_q5",
          "type": "mcq",
          "prompt": "Pourquoi utilise-t-on des transformateurs élévateurs à la sortie des centrales électriques avant d'injecter le courant sur les lignes de transport ?",
          "options": [
            "Pour diminuer l'intensité du courant I et ainsi réduire drastiquement les pertes d'énergie par effet Joule (P = R I²)",
            "Pour accélérer la vitesse de la lumière",
            "Pour transformer le courant en courant continu",
            "Pour refroidir les câbles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En élevant la tension, le courant diminue dans la même proportion. Les pertes thermiques en ligne (R I²) sont divisées par le carré de ce rapport."
        },
        {
          "id": "terminale_d_physique_l07_induction_p05_q6",
          "type": "mcq",
          "prompt": "Pour un transformateur abaisseur où U₂ < U₁ (k < 1), comment se situe le courant secondaire I₂ par rapport au courant primaire I₁ ?",
          "options": [
            "I₂ > I₁ (le courant secondaire est supérieur au courant primaire)",
            "I₂ < I₁",
            "I₂ = I₁",
            "I₂ = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par conservation de l'énergie (U₁ I₁ = U₂ I₂), si U₂ est plus petit que U₁, alors I₂ doit impérativement être plus grand que I₁."
        },
        {
          "id": "terminale_d_physique_l07_induction_p05_q7",
          "type": "mcq",
          "prompt": "Quel est le bénéfice de sécurité apporté par un transformateur d'isolement (k = 1) dans une salle d'eau ou un atelier ?",
          "options": [
            "Supprimer la liaison électrique directe avec la terre, empêchant le courant de traverser le corps d'une personne touchant accidentellement un conducteur actif",
            "Diviser la facture d'électricité par deux",
            "Bloquer les surtensions de foudre",
            "Empêcher les ampoules de chauffer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le circuit secondaire est galvaniquement isolé de la terre : aucun courant de défaut ne peut se refermer à travers le sol et le corps de l'utilisateur."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l07_induction_p06",
      "order": 6,
      "title": "Applications industrielles 2 : Alternateurs, microphones et disques durs",
      "summary": "Principe et équations de l'alternateur synchrone e(t) = N B S ω sin(ω t), microphone électrodynamique à bobine mobile, têtes de lecture inductives et magnétorésistives (GMR) des disques durs informatiques.",
      "conceptExplanation": "1. L'alternateur industriel (production d'énergie électrique) :\nL'alternateur transforme l'énergie mécanique fournie par une turbine (hydraulique, thermique, nucléaire ou éolienne) en énergie électrique alternative sinusoïdale :\n- Le rotor (inducteur) : électroaimant tournant entraîné à la vitesse angulaire de rotation ω ;\n- Le stator (induit) : ensemble de bobines fixes montées en série logées dans la carcasse externe.\nLe flux magnétique traversant une bobine du stator varie selon la loi sinusoïdale :\nΦ(t) = N B S cos(ω t).\nD'après la loi de Faraday, la f.é.m. induite recueillie vaut :\ne(t) = - dΦ / dt = - d/dt [N B S cos(ω t)] = N B S ω sin(ω t) = E_max sin(ω t).\nL'amplitude maximale vaut E_max = N B S ω, et la fréquence du réseau électrique est f = ω / 2π = p * n_rot (où p est le nombre de paires de pôles et n_rot la vitesse de rotation en tours/seconde).\n\n2. Le microphone électrodynamique à bobine mobile :\nIl utilise le principe inverse du haut-parleur. Une membrane très légère réagit aux ondes de pression acoustique de la voix. La bobine mobile qui lui est solidaire se déplace dans l'entrefer d'un aimant permanent. Ce mouvement relatif fait varier le flux magnétique embrassé par les spires, générant aux bornes de la bobine une f.é.m. induite e(t) = -dΦ/dt directement proportionnelle à la vitesse de vibration de la membrane (tension audio fidèle).\n\n3. Les têtes de lecture des disques durs informatiques :\n- Tête inductive classique : un minuscule électroaimant survole le plateau ferromagnétique tournant à 20 nm de distance. Les micro-domaines magnétiques gravés (bits 0 et 1) font varier le flux dans la tête lors de leur passage, induisant de brèves impulsions électriques de tension e(t) ;\n- Têtes modernes magnétorésistives (GMR / TMR) : la variation du champ magnétique des nano-domaines modifie la résistance électrique d'un capteur multicouche par effet quantique de magnétorésistance géante, permettant des densités de stockage téraoctets.",
      "keyRule": "L'alternateur produit une tension alternative sinusoïdale e(t) = N B S ω sin(ω t). Le microphone convertit la voix en tension induite. Les têtes de disques durs lisent l'information binaire par induction ou magnétorésistance géante.",
      "formulas": [
        {
          "name": "F.é.m. d'un alternateur sinusoïdal",
          "formula": "e(t) = N\\,B\\,S\\,\\omega\\,\\sin(\\omega\\,t) = E_\\text{max}\\,\\sin(\\omega\\,t)",
          "note": "E_max = N B S ω"
        },
        {
          "name": "Fréquence de la tension de sortie",
          "formula": "f = p\\,n_\\text{rot}",
          "note": "p paires de pôles, n_rot en tr/s"
        }
      ],
      "workedExample": {
        "title": "Calcul de la f.é.m. maximale d'un alternateur d'éolienne",
        "statement": "Le rotor d'un alternateur d'éolienne tourne à la vitesse de 1500 tours/min (n_rot = 25 tr/s, soit ω = 2π * 25 ≈ 157,1 rad/s). Le stator comporte N = 200 spires d'aire S = 0,050 m² baignant dans un champ d'intensité B = 0,60 T. Calcule la f.é.m. maximale E_max et la tension efficace correspondante U_eff.",
        "methodSteps": [
          "Étape 1 : Calculer la pulsation de rotation : ω = 2π * n_rot = 2 * 3,1416 * 25 ≈ 157,08 rad/s.",
          "Étape 2 : Appliquer la formule de la f.é.m. de crête de l'alternateur : E_max = N * B * S * ω.",
          "Étape 3 : Effectuer l'application numérique : E_max = 200 * 0,60 * 0,050 * 157,08 = 6,0 * 157,08 ≈ 942,5 V.",
          "Étape 4 : Déduire la valeur efficace : U_eff = E_max / √2 = 942,5 / 1,414 ≈ 666,5 V."
        ],
        "conclusion": "L'alternateur fournit une tension sinusoïdale de crête de 942,5 V et une tension efficace de 666,5 V à 50 Hz."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Synthèse des technologies fondées sur l'induction électromagnétique",
        "tableData": {
          "headers": [
            "Technologie",
            "Nature de la conversion",
            "Organe inducteur",
            "Organe induit",
            "Grandeur de sortie"
          ],
          "rows": [
            [
              "Alternateur de centrale",
              "Énergie mécanique -> Électrique",
              "Rotor à électroaimants tournants",
              "Stator à bobines fixes",
              "Tension sinusoïdale 50 Hz haute puissance"
            ],
            [
              "Microphone électrodynamique",
              "Énergie acoustique -> Électrique",
              "Aimant permanent fixe",
              "Bobine solidaire de la membrane",
              "Signal audio analogique en millivolts"
            ],
            [
              "Tête de lecture de disque dur",
              "Information magnétique -> Électrique",
              "Domaines magnétiques du disque en rotation",
              "Micro-bobine ou capteur GMR",
              "Séquence binaire numérique de bits"
            ],
            [
              "Génératrice tachymétrique",
              "Vitesse de rotation -> Électrique",
              "Aimant fixé sur l'arbre moteur",
              "Bobinage fixe",
              "Tension proportionnelle à la vitesse de rotation"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Principe fonctionnel de l'alternateur",
          "stepTheme": "Conversion électromécanique",
          "stepBadge": "Rotor et Stator",
          "paragraphText": "Un alternateur est une machine tournante qui convertit de l'énergie mécanique en énergie électrique alternative sinusoïdale grâce au mouvement relatif entre un rotor inducteur créateur de champ magnétique et un stator induit bobiné.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p06_q1",
            "type": "mcq",
            "prompt": "Dans un grand alternateur de centrale hydroélectrique, pourquoi fait-on tourner les électroaimants (rotor) plutôt que les bobinages d'induit débitant le courant ?",
            "options": [
              "Pour recueillir les courants gigantesques directement sur le stator fixe sans passer par des balais et bagues frottantes fragiles",
              "Parce que les aimants sont plus légers que les bobines",
              "Pour augmenter la fréquence du réseau",
              "Pour éviter le champ magnétique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le stator fixe permet de collecter en toute sécurité des milliers d'ampères sous haute tension via des barres rigides sans risque d'arcs électriques sur des contacts tournants."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Formule de la fréquence industrielle f = p n_rot",
          "stepTheme": "Fréquence réseau",
          "stepBadge": "f = 50 Hz en Côte d'Ivoire",
          "paragraphText": "La fréquence du courant alternatif produit par un alternateur dépend du nombre de paires de pôles p du rotor et de sa vitesse de rotation n_rot (en tours par seconde) : f = p * n_rot. Pour obtenir le standard 50 Hz avec un alternateur à 2 pôles (p = 1), le rotor doit tourner exactement à 50 tr/s (3000 tr/min).",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p06_q2",
            "type": "mcq",
            "prompt": "Un alternateur d'usine hydroélectrique possède p = 10 paires de pôles. À quelle vitesse de rotation n_rot (en tours par minute) la turbine doit-elle tourner pour produire du courant à 50 Hz ?",
            "options": [
              "300 tr/min (soit 5 tr/s)",
              "3000 tr/min",
              "1500 tr/min",
              "500 tr/min"
            ],
            "correctAnswerIndex": 0,
            "explanation": "f = p * n_rot => n_rot = f / p = 50 / 10 = 5 tr/s = 5 * 60 = 300 tr/min."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul de l'amplitude de tension E_max = N B S ω",
          "stepTheme": "Amplitude f.é.m.",
          "stepBadge": "E_max proportionnelle à ω",
          "paragraphText": "L'amplitude de la f.é.m. induite est proportionnelle à la vitesse de rotation : E_max = N B S ω. Si la vitesse de rotation de la turbine diminue, la tension maximale diminue proportionnellement dans le même rapport.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p06_q3",
            "type": "mcq",
            "prompt": "Une dynamo de vélo produit une tension de crête de 6,0 V lorsque le cycliste roule à 20 km/h. S'il ralentit à 10 km/h, que vaut la nouvelle tension de crête ?",
            "options": [
              "3,0 V (divisée par deux)",
              "6,0 V",
              "1,5 V",
              "0 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La vitesse angulaire ω est divisée par deux : l'amplitude E_max étant proportionnelle à ω, elle passe de 6,0 V à 3,0 V."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le microphone dynamique à bobine mobile",
          "stepTheme": "Transducteur acoustique",
          "stepBadge": "Membrane + Bobine",
          "paragraphText": "Le microphone électrodynamique est constitué d'une membrane acoustique fixée à une bobine mobile très légère baignant dans le champ d'un aimant permanent. La pression des ondes sonores met en vibration la bobine : la variation de flux induit un signal électrique alternatif proportionnel au son émis.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p06_q4",
            "type": "mcq",
            "prompt": "Quel est l'atout technique majeur des microphones électrodynamiques sur scène par rapport aux microphones électrostatiques de studio ?",
            "options": [
              "Une excellente robustesse mécanique, une grande résistance aux pressions acoustiques élevées et l'absence totale de pile ou d'alimentation fantôme",
              "La capture des ultrasons de chauve-souris",
              "L'amplification par laser",
              "Le fonctionnement sans fil naturel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Totalement passifs, robustes et tolérants aux chocs et fortes pressions acoustiques, les micros dynamiques (comme le célèbre Shure SM58) sont la référence de scène."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La lecture des disques durs par tête inductive",
          "stepTheme": "Stockage de données",
          "stepBadge": "Bits magnétiques",
          "paragraphText": "Dans un disque dur magnétique traditionnel, chaque bit d'information est stocké sous forme d'un minuscule domaine aimanté orienté dans un sens ou dans l'autre sur le plateau en rotation. Au passage sous la tête de lecture, l'inversion d'aimantation induit une impulsion de tension de Faraday traduisant le bit logique.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p06_q5",
            "type": "mcq",
            "prompt": "Sur quel phénomène physique repose la lecture d'un bit de donnée lors du passage d'une transition magnétique sous une tête inductive de disque dur ?",
            "options": [
              "La variation rapide de flux magnétique qui induit une impulsion de f.é.m. de Faraday dans le micro-bobinage de la tête",
              "La fusion thermique du disque",
              "Une réaction électrostatique statique",
              "Une mesure de poids du bit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La transition entre deux domaines d'aimantations opposées crée une brusque variation de flux dΦ/dt qui génère l'impulsion de tension lue par le contrôleur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : La tête de lecture inductive ne lit rien si le disque ne tourne pas",
          "stepTheme": "Condition dynamique",
          "stepBadge": "Disque immobile = lecture impossible",
          "paragraphText": "Une tête de lecture purement inductive est incapable de lire les données si le disque est à l'arrêt, car les domaines magnétiques statiques ne créent aucune variation temporelle de flux (dΦ/dt = 0). C'est pourquoi la lecture exige la rotation rapide des plateaux (5400 à 7200 tr/min).",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p06_q6",
            "type": "mcq",
            "prompt": "Pourquoi un disque dur doit-il impérativement être en rotation rapide pour que sa tête inductive puisse lire les données écrites ?",
            "options": [
              "Pour créer une variation temporelle de flux magnétique dΦ/dt indispensable à la naissance de la tension induite",
              "Pour chauffer le métal",
              "Pour empêcher la poussière de tomber",
              "Pour créer un vide d'air"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans vitesse de défilement, le flux magnétique reste rigoureusement fixe et la f.é.m. induite est nulle."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Les capteurs de vitesse de roue ABS",
          "stepTheme": "Sécurité automobile",
          "stepBadge": "Roue phonique",
          "paragraphText": "Dans le système de freinage ABS d'une automobile, une roue dentée en acier solidaire de la roue tourne devant un capteur inductif fixe. Le défilement des dents fait osciller périodiquement la réluctance et le flux magnétique, générant une tension alternative dont la fréquence informe le calculateur de la vitesse exacte de la roue pour éviter le blocage.",
          "exercise": {
            "id": "terminale_d_physique_l07_induction_p06_q7",
            "type": "mcq",
            "prompt": "Comment le calculateur ABS d'une voiture détecte-t-il l'amorce de blocage d'une roue lors d'un freinage d'urgence ?",
            "options": [
              "Par la chute brutale de la fréquence du signal alternatif induit délivré par le capteur électromagnétique de roue",
              "Par une augmentation de température des pneus",
              "Par un signal GPS",
              "Par le bruit des plaquettes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fréquence du signal induit par la roue dentée est proportionnelle à la vitesse de rotation de la roue : une chute anormale de fréquence signale le début de glissement."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l07_induction_p06_q1",
          "type": "mcq",
          "prompt": "Dans un grand alternateur de centrale hydroélectrique, pourquoi fait-on tourner les électroaimants (rotor) plutôt que les bobinages d'induit débitant le courant ?",
          "options": [
            "Pour recueillir les courants gigantesques directement sur le stator fixe sans passer par des balais et bagues frottantes fragiles",
            "Parce que les aimants sont plus légers que les bobines",
            "Pour augmenter la fréquence du réseau",
            "Pour éviter le champ magnétique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le stator fixe permet de collecter en toute sécurité des milliers d'ampères sous haute tension via des barres rigides sans risque d'arcs électriques sur des contacts tournants."
        },
        {
          "id": "terminale_d_physique_l07_induction_p06_q2",
          "type": "mcq",
          "prompt": "Un alternateur d'usine hydroélectrique possède p = 10 paires de pôles. À quelle vitesse de rotation n_rot (en tours par minute) la turbine doit-elle tourner pour produire du courant à 50 Hz ?",
          "options": [
            "300 tr/min (soit 5 tr/s)",
            "3000 tr/min",
            "1500 tr/min",
            "500 tr/min"
          ],
          "correctAnswerIndex": 0,
          "explanation": "f = p * n_rot => n_rot = f / p = 50 / 10 = 5 tr/s = 5 * 60 = 300 tr/min."
        },
        {
          "id": "terminale_d_physique_l07_induction_p06_q3",
          "type": "mcq",
          "prompt": "Une dynamo de vélo produit une tension de crête de 6,0 V lorsque le cycliste roule à 20 km/h. S'il ralentit à 10 km/h, que vaut la nouvelle tension de crête ?",
          "options": [
            "3,0 V (divisée par deux)",
            "6,0 V",
            "1,5 V",
            "0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La vitesse angulaire ω est divisée par deux : l'amplitude E_max étant proportionnelle à ω, elle passe de 6,0 V à 3,0 V."
        },
        {
          "id": "terminale_d_physique_l07_induction_p06_q4",
          "type": "mcq",
          "prompt": "Quel est l'atout technique majeur des microphones électrodynamiques sur scène par rapport aux microphones électrostatiques de studio ?",
          "options": [
            "Une excellente robustesse mécanique, une grande résistance aux pressions acoustiques élevées et l'absence totale de pile ou d'alimentation fantôme",
            "La capture des ultrasons de chauve-souris",
            "L'amplification par laser",
            "Le fonctionnement sans fil naturel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Totalement passifs, robustes et tolérants aux chocs et fortes pressions acoustiques, les micros dynamiques (comme le célèbre Shure SM58) sont la référence de scène."
        },
        {
          "id": "terminale_d_physique_l07_induction_p06_q5",
          "type": "mcq",
          "prompt": "Sur quel phénomène physique repose la lecture d'un bit de donnée lors du passage d'une transition magnétique sous une tête inductive de disque dur ?",
          "options": [
            "La variation rapide de flux magnétique qui induit une impulsion de f.é.m. de Faraday dans le micro-bobinage de la tête",
            "La fusion thermique du disque",
            "Une réaction électrostatique statique",
            "Une mesure de poids du bit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La transition entre deux domaines d'aimantations opposées crée une brusque variation de flux dΦ/dt qui génère l'impulsion de tension lue par le contrôleur."
        },
        {
          "id": "terminale_d_physique_l07_induction_p06_q6",
          "type": "mcq",
          "prompt": "Pourquoi un disque dur doit-il impérativement être en rotation rapide pour que sa tête inductive puisse lire les données écrites ?",
          "options": [
            "Pour créer une variation temporelle de flux magnétique dΦ/dt indispensable à la naissance de la tension induite",
            "Pour chauffer le métal",
            "Pour empêcher la poussière de tomber",
            "Pour créer un vide d'air"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans vitesse de défilement, le flux magnétique reste rigoureusement fixe et la f.é.m. induite est nulle."
        },
        {
          "id": "terminale_d_physique_l07_induction_p06_q7",
          "type": "mcq",
          "prompt": "Comment le calculateur ABS d'une voiture détecte-t-il l'amorce de blocage d'une roue lors d'un freinage d'urgence ?",
          "options": [
            "Par la chute brutale de la fréquence du signal alternatif induit délivré par le capteur électromagnétique de roue",
            "Par une augmentation de température des pneus",
            "Par un signal GPS",
            "Par le bruit des plaquettes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fréquence du signal induit par la roue dentée est proportionnelle à la vitesse de rotation de la roue : une chute anormale de fréquence signale le début de glissement."
        }
      ]
    }
  ]
};
