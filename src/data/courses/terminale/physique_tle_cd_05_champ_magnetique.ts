import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : Terminales C, D — Thème : Électricité — Titre : Champ magnétique
export const PHYSIQUE_TLE_CD_L05_CHAMP_MAGNETIQUE: CurriculumChapter = {
  "id": "terminale_d_physique_l05_champ_magnetique",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ],
  "order": 5,
  "title": "Leçon 5 : Champ magnétique",
  "summary": "Étude complète du champ magnétique : mise en évidence expérimentale des interactions magnétiques (aimants et courants), définition et caractéristiques du vecteur champ magnétique B (direction, sens, valeur mesurée en Tesla par teslamètre à effet Hall), spectres magnétiques et lignes de champ (aimant droit, aimant en U), étude approfondie du solénoïde (champ uniforme interne, règles d'orientation d'Ampère et de la main droite, formule B = μ₀ n I), superposition vectorielle des champs magnétiques et déviation par rapport au champ terrestre Bh, bobines plates et fil rectiligne infini, applications industrielles et médicales (électroaimants, spectrométrie, IRM).",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : Terminales C, D – Thème : Électricité – Champ magnétique)",
  "points": [
    {
      "id": "terminale_d_physique_l05_champ_magnetique_p01",
      "order": 1,
      "title": "Mise en évidence expérimentale et interactions magnétiques",
      "summary": "Interactions mutuelles entre aimants, pôles Nord et Sud, expérience d'Œrsted (interaction courant-aimant), interaction entre deux bobines et notion fondamentale de modification des propriétés de l'espace.",
      "conceptExplanation": "1. Interactions entre aimants permanents :\nTout aimant possède deux pôles inséparables appelés pôle Nord (N) et pôle Sud (S). Deux pôles de même nom se repoussent mutuellement (Nord-Nord ou Sud-Sud) ; deux pôles de noms différents s'attirent (Nord-Sud).\n\n2. L'expérience historique d'Œrsted (1820) :\nLorsqu'un fil conducteur parcouru par un courant électrique continu est placé parallèlement et au-dessus d'une aiguille aimantée au repos, l'aiguille dévie brusquement dès la fermeture du circuit. Si l'on inverse le sens du courant, l'aiguille dévie en sens inverse. Dès que le courant est coupé, l'aiguille reprend sa position initiale alignée avec le méridien magnétique terrestre.\n\n3. Interactions entre circuits parcourus par des courants :\nDeux bobines ou deux solénoïdes parcourus par des courants continus exercent l'un sur l'autre des actions mécaniques à distance identiques à celles de deux aimants : leurs faces de même nom se repoussent et leurs faces de noms contraires s'attirent.\n\n4. Définition de l'espace champ magnétique :\nLa présence d'un aimant, de la planète Terre ou d'un conducteur parcouru par un courant électrique modifie les propriétés de l'espace environnant : on dit qu'il y règne un champ magnétique.",
      "keyRule": "Les pôles de même nom se repoussent, les pôles contraires s'attirent. Un courant électrique est une source de champ magnétique au même titre qu'un aimant permanent.",
      "formulas": [
        {
          "name": "Loi des pôles magnétiques",
          "formula": "\\text{Pôles identiques} \\implies \\text{Répulsion} \\quad ; \\quad \\text{Pôles contraires} \\implies \\text{Attraction}",
          "note": "Nord (N) et Sud (S)"
        }
      ],
      "workedExample": {
        "title": "Identification des pôles d'un aimant inconnu",
        "statement": "On approche le pôle d'un aimant B étiqueté '?' vers le pôle Sud connu d'une aiguille aimantée mobile. L'aiguille est immédiatement repoussée vers l'arrière. Quel est le nom du pôle approché de l'aimant B ?",
        "methodSteps": [
          "Étape 1 : Rappeler la loi des pôles magnétiques : deux pôles de même nom se repoussent, tandis que deux pôles opposés s'attirent.",
          "Étape 2 : Analyser l'effet observé : le pôle testé repousse le pôle Sud de l'aiguille aimantée.",
          "Étape 3 : Déduire la nature du pôle : le pôle approché de l'aimant B est obligatoirement un pôle Sud."
        ],
        "conclusion": "Le pôle approché est un pôle Sud, conformément à la répulsion mutuelle entre pôles de même nom."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des interactions magnétiques fondamentales",
        "tableData": {
          "headers": [
            "Source 1",
            "Source 2",
            "Configuration",
            "Nature de l'action mécanique",
            "Observation expérimentale"
          ],
          "rows": [
            [
              "Pôle Nord (aimant 1)",
              "Pôle Nord (aimant 2)",
              "Pôles de même nom",
              "Répulsion mutuelle",
              "Éloignement spontané des deux extrémités"
            ],
            [
              "Pôle Sud (aimant 1)",
              "Pôle Sud (aimant 2)",
              "Pôles de même nom",
              "Répulsion mutuelle",
              "Éloignement spontané des deux extrémités"
            ],
            [
              "Pôle Nord (aimant 1)",
              "Pôle Sud (aimant 2)",
              "Pôles opposés",
              "Attraction mutuelle",
              "Rapprochement et accolement solide"
            ],
            [
              "Fil électrique avec courant I",
              "Aiguille aimantée",
              "Circuit fermé",
              "Couple de rotation",
              "Déviation de l'aiguille (expérience d'Œrsted)"
            ],
            [
              "Face Nord (bobine 1)",
              "Face Sud (bobine 2)",
              "Courants circulaires",
              "Attraction mutuelle",
              "Rapprochement axial des deux bobines"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'espace champ magnétique",
          "stepTheme": "Notion de champ",
          "stepBadge": "Espace modifié",
          "paragraphText": "On appelle espace champ magnétique toute région de l'espace dont les propriétés physiques sont modifiées par la présence d'un aimant, de la Terre ou d'un conducteur parcouru par un courant électrique, de sorte qu'une aiguille aimantée ou une charge en mouvement y subit une action mécanique.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p01_q1",
            "type": "mcq",
            "prompt": "Lequel des éléments suivants NE génère PAS de champ magnétique permanent ou induit dans l'espace environnant ?",
            "options": [
              "Une charge électrique statique immobile au repos",
              "Un aimant naturel en ferrite",
              "Un fil de cuivre parcouru par un courant de 5 A",
              "La planète Terre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une charge statique au repos ne crée qu'un champ électrostatique. Pour engendrer un champ magnétique, il faut des charges électriques en mouvement (courant) ou un matériau aimanté."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'inséparabilité des pôles magnétiques",
          "stepTheme": "Dipôle magnétique",
          "stepBadge": "Pas de monopôle",
          "paragraphText": "Tout aimant est un dipôle magnétique comportant un pôle Nord et un pôle Sud. Si l'on brise un aimant en deux parties, on n'isole JAMAIS un pôle Nord d'un pôle Sud : chaque fragment devient instantanément un nouvel aimant complet possédant à son tour un pôle Nord et un pôle Sud.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p01_q2",
            "type": "mcq",
            "prompt": "On coupe en son milieu un barreau aimanté possédant un pôle Nord à gauche et un pôle Sud à droite. Qu'obtient-on ?",
            "options": [
              "Deux aimants complets, possédant chacun un pôle Nord et un pôle Sud",
              "Un morceau purement pôle Nord et un morceau purement pôle Sud",
              "Deux morceaux totalement désaimantés",
              "Un aimant et un simple morceau de fer neutre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les monopôles magnétiques isolés n'existent pas dans la nature macroscopique : couper un aimant crée deux dipôles indépendants."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'expérience d'Œrsted et le lien électricité-magnétisme",
          "stepTheme": "Découverte historique",
          "stepBadge": "I crée B",
          "paragraphText": "Réalisée en 1820 par Hans Christian Œrsted, cette expérience fondamentale prouve qu'un courant électrique continu engendre un champ magnétique : l'aiguille aimantée s'oriente perpendiculairement au fil pour un courant intense, reliant définitivement l'électricité et le magnétisme (électromagnétisme).",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p01_q3",
            "type": "mcq",
            "prompt": "Que se passe-t-il si l'on inverse les bornes du générateur alimentant le fil conducteur au-dessus de l'aiguille aimantée d'Œrsted ?",
            "options": [
              "L'aiguille aimantée dévie dans le sens opposé",
              "L'aiguille cesse de dévier et reste immobile",
              "L'aiguille commence à tourner en continu",
              "L'aiguille perd instantanément toute son aimantation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Inverser le sens du courant inverse le sens du vecteur champ magnétique B créé, ce qui inverse le sens de rotation de l'aiguille aimantée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les faces d'une bobine circulaire",
          "stepTheme": "Faces Nord et Sud",
          "stepBadge": "Sens horaire / antihoraire",
          "paragraphText": "Une bobine plate ou une spire circulaire parcourue par un courant présente deux faces : la face Nord (N) est celle par laquelle un observateur voit le courant circuler dans le sens trigonométrique (anti-horaire) ; la face Sud (S) est celle où le courant tourne dans le sens horaire.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p01_q4",
            "type": "mcq",
            "prompt": "Un observateur regarde une spire et voit le courant circuler dans le sens des aiguilles d'une montre (sens horaire). De quelle face s'agit-il ?",
            "options": [
              "La face Sud (les extrémités de la lettre S suivent le sens du courant)",
              "La face Nord",
              "La face Est",
              "La face neutre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans le sens des aiguilles d'une montre, les flèches du courant s'inscrivent sur les pointes de la lettre 'S' : c'est la face Sud."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Prévision des interactions entre deux solénoïdes",
          "stepTheme": "Attraction / Répulsion",
          "stepBadge": "Faces en regard",
          "paragraphText": "Pour déterminer si deux solénoïdes coaxiaux face à face s'attirent ou se repoussent, on détermine la face de chacun située en regard : si les faces en vis-à-vis sont de même nom (Nord-Nord ou Sud-Sud), les solénoïdes se repoussent ; si elles sont contraires (Nord-Sud), ils s'attirent.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p01_q5",
            "type": "mcq",
            "prompt": "Deux bobines plates coaxiales sont placées en vis-à-vis. Dans les deux bobines, le courant circule dans le même sens (sens trigonométrique pour un même observateur situé entre elles). Que font les bobines ?",
            "options": [
              "Elles se repoussent car les faces en vis-à-vis sont toutes deux des faces Nord",
              "Elles s'attirent vigoureusement",
              "Elles tournent l'une autour de l'autre",
              "Le courant s'annule immédiatement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'observateur voyant le sens trigonométrique des deux côtés observe deux faces Nord en regard : deux faces de même nom se repoussent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Confusion entre charges électriques et pôles magnétiques",
          "stepTheme": "Électrostatique vs Magnétisme",
          "stepBadge": "Charges ≠ Pôles",
          "paragraphText": "Ne confondez pas les charges électriques (+ et -) et les pôles magnétiques (Nord et Sud). Une charge positive peut exister seule de façon isolée (comme un proton), alors qu'un pôle magnétique Nord isolé ne peut jamais exister sans son pôle Sud associé.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p01_q6",
            "type": "mcq",
            "prompt": "Une particule chargée positivement et immobile est placée près du pôle Nord d'un aimant. Subit-elle une force magnétique d'attraction ou de répulsion ?",
            "options": [
              "Aucune force magnétique car la particule est immobile (v = 0)",
              "Une répulsion magnétique violente",
              "Une attraction vers le pôle Nord",
              "Une mise en orbite circulaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le champ magnétique n'exerce de force magnétique que sur des charges EN MOUVEMENT (F = q v B sin θ). Une charge immobile ne subit aucune interaction magnétique."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le champ magnétique terrestre et la boussole",
          "stepTheme": "Géomagnétisme",
          "stepBadge": "Méridien magnétique",
          "paragraphText": "La Terre se comporte comme un gigantesque aimant dont le pôle Sud magnétique est situé près du pôle Nord géographique. C'est pourquoi le pôle Nord d'une boussole (qui pointe vers le Nord géographique) est en réalité attiré par le pôle Sud magnétique de la Terre.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p01_q7",
            "type": "mcq",
            "prompt": "Quelle est la nature magnétique du pôle terrestre situé au voisinage du pôle Nord géographique de la Terre ?",
            "options": [
              "C'est magnétiquement un pôle Sud",
              "C'est magnétiquement un pôle Nord",
              "C'est un pôle électrostatique positif",
              "C'est un point neutre de champ nul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Puisque les pôles opposés s'attirent, le pôle Nord d'une aiguille de boussole est attiré vers le pôle Sud magnétique de la planète, situé géographiquement au Nord."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p01_q1",
          "type": "mcq",
          "prompt": "Lequel des éléments suivants NE génère PAS de champ magnétique permanent ou induit dans l'espace environnant ?",
          "options": [
            "Une charge électrique statique immobile au repos",
            "Un aimant naturel en ferrite",
            "Un fil de cuivre parcouru par un courant de 5 A",
            "La planète Terre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une charge statique au repos ne crée qu'un champ électrostatique. Pour engendrer un champ magnétique, il faut des charges électriques en mouvement (courant) ou un matériau aimanté."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p01_q2",
          "type": "mcq",
          "prompt": "On coupe en son milieu un barreau aimanté possédant un pôle Nord à gauche et un pôle Sud à droite. Qu'obtient-on ?",
          "options": [
            "Deux aimants complets, possédant chacun un pôle Nord et un pôle Sud",
            "Un morceau purement pôle Nord et un morceau purement pôle Sud",
            "Deux morceaux totalement désaimantés",
            "Un aimant et un simple morceau de fer neutre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les monopôles magnétiques isolés n'existent pas dans la nature macroscopique : couper un aimant crée deux dipôles indépendants."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p01_q3",
          "type": "mcq",
          "prompt": "Que se passe-t-il si l'on inverse les bornes du générateur alimentant le fil conducteur au-dessus de l'aiguille aimantée d'Œrsted ?",
          "options": [
            "L'aiguille aimantée dévie dans le sens opposé",
            "L'aiguille cesse de dévier et reste immobile",
            "L'aiguille commence à tourner en continu",
            "L'aiguille perd instantanément toute son aimantation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Inverser le sens du courant inverse le sens du vecteur champ magnétique B créé, ce qui inverse le sens de rotation de l'aiguille aimantée."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p01_q4",
          "type": "mcq",
          "prompt": "Un observateur regarde une spire et voit le courant circuler dans le sens des aiguilles d'une montre (sens horaire). De quelle face s'agit-il ?",
          "options": [
            "La face Sud (les extrémités de la lettre S suivent le sens du courant)",
            "La face Nord",
            "La face Est",
            "La face neutre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le sens des aiguilles d'une montre, les flèches du courant s'inscrivent sur les pointes de la lettre 'S' : c'est la face Sud."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p01_q5",
          "type": "mcq",
          "prompt": "Deux bobines plates coaxiales sont placées en vis-à-vis. Dans les deux bobines, le courant circule dans le même sens (sens trigonométrique pour un même observateur situé entre elles). Que font les bobines ?",
          "options": [
            "Elles se repoussent car les faces en vis-à-vis sont toutes deux des faces Nord",
            "Elles s'attirent vigoureusement",
            "Elles tournent l'une autour de l'autre",
            "Le courant s'annule immédiatement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'observateur voyant le sens trigonométrique des deux côtés observe deux faces Nord en regard : deux faces de même nom se repoussent."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p01_q6",
          "type": "mcq",
          "prompt": "Une particule chargée positivement et immobile est placée près du pôle Nord d'un aimant. Subit-elle une force magnétique d'attraction ou de répulsion ?",
          "options": [
            "Aucune force magnétique car la particule est immobile (v = 0)",
            "Une répulsion magnétique violente",
            "Une attraction vers le pôle Nord",
            "Une mise en orbite circulaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le champ magnétique n'exerce de force magnétique que sur des charges EN MOUVEMENT (F = q v B sin θ). Une charge immobile ne subit aucune interaction magnétique."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p01_q7",
          "type": "mcq",
          "prompt": "Quelle est la nature magnétique du pôle terrestre situé au voisinage du pôle Nord géographique de la Terre ?",
          "options": [
            "C'est magnétiquement un pôle Sud",
            "C'est magnétiquement un pôle Nord",
            "C'est un pôle électrostatique positif",
            "C'est un point neutre de champ nul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque les pôles opposés s'attirent, le pôle Nord d'une aiguille de boussole est attiré vers le pôle Sud magnétique de la planète, situé géographiquement au Nord."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l05_champ_magnetique_p02",
      "order": 2,
      "title": "Le vecteur champ magnétique B : caractéristiques et mesure",
      "summary": "Définition vectorielle de B, direction et sens donnés par l'aiguille aimantée, norme mesurée en Tesla (T), principe de la sonde de Hall et ordres de grandeur usuels.",
      "conceptExplanation": "1. Définition du vecteur champ magnétique B :\nEn tout point M d'un espace où règne un champ magnétique, on associe un vecteur champ magnétique noté B caractérisé par :\n- Point d'application : le point M considéré ;\n- Direction : celle de l'axe longitudinal d'une petite aiguille aimantée en équilibre au point M ;\n- Sens : orienté du pôle Sud (S) vers le pôle Nord (N) de cette aiguille aimantée ;\n- Valeur (ou intensité) : notée B, exprimée dans le Système International en Tesla (symbole : T).\n\n2. Mesure du champ magnétique : le teslamètre :\nL'intensité du champ magnétique est mesurée avec précision à l'aide d'un teslamètre équipé d'une sonde de Hall. Une plaquette semi-conductrice parcourue par un courant électrique calibré génère une tension transversale (tension de Hall VH) proportionnelle à l'intensité de la composante normale de B : VH = k * B.\n\n3. Ordres de grandeur du champ magnétique :\n- Champ magnétique terrestre à la surface : BT ≈ 4 * 10⁻⁵ T (composante horizontale en Côte d'Ivoire : Bh ≈ 2 * 10⁻⁵ T à 3 * 10⁻⁵ T) ;\n- Petit aimant de réfrigérateur : B ≈ 10⁻² T (10 mT) ;\n- Entrefer d'un aimant en U puissant : B ≈ 0,1 T à 0,5 T ;\n- Solénoïde de laboratoire : B ≈ 10⁻³ T à 10⁻² T ;\n- Électroaimants supraconducteurs d'IRM hospitaliers : B ≈ 1,5 T à 3,0 T.",
      "keyRule": "Le vecteur B est tangent à l'aiguille aimantée et orienté de son pôle Sud vers son pôle Nord (S -> N). L'intensité B se mesure en Tesla (T) avec un teslamètre.",
      "formulas": [
        {
          "name": "Unité du champ magnétique",
          "formula": "[B] = \\text{Tesla (T)}",
          "note": "1 mT = 10⁻³ T  ;  1 µT = 10⁻⁶ T"
        },
        {
          "name": "Principe de la sonde de Hall",
          "formula": "V_H = k_H \\cdot I \\cdot B",
          "note": "Tension de Hall proportionnelle à B"
        }
      ],
      "workedExample": {
        "title": "Conversion et comparaison d'intensités de champ magnétique",
        "statement": "Un teslamètre affiche une intensité B₁ = 25 mT au centre d'un solénoïde. La composante horizontale du champ terrestre vaut Bh = 20 µT. Exprime B₁ et Bh en Teslas, puis calcule le rapport B₁ / Bh.",
        "methodSteps": [
          "Étape 1 : Convertir B₁ en Teslas : 25 mT = 25 * 10⁻³ T = 0,025 T.",
          "Étape 2 : Convertir Bh en Teslas : 20 µT = 20 * 10⁻⁶ T = 2,0 * 10⁻⁵ T.",
          "Étape 3 : Calculer le rapport B₁ / Bh = (2,5 * 10⁻²) / (2,0 * 10⁻⁵) = 1250."
        ],
        "conclusion": "Le champ créé par le solénoïde est 1250 fois plus intense que le champ magnétique terrestre local."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau des ordres de grandeur du champ magnétique B",
        "tableData": {
          "headers": [
            "Environnement / Source",
            "Ordre de grandeur de B",
            "Équivalence usuelle",
            "Impact dynamique"
          ],
          "rows": [
            [
              "Espace interstellaire",
              "10⁻¹⁰ T (0,1 nT)",
              "Négligeable",
              "Déviation infime des rayons cosmiques"
            ],
            [
              "Champ magnétique terrestre (surface)",
              "20 à 50 µT",
              "0,02 à 0,05 mT",
              "Orientation des boussoles"
            ],
            [
              "Aimant jouet / Frigo",
              "5 à 10 mT",
              "5000 à 10 000 µT",
              "Maintien mécanique de feuilles"
            ],
            [
              "Solénoïde d'enseignement",
              "1 à 15 mT",
              "0,001 à 0,015 T",
              "Étude des lois de Laplace et d'induction"
            ],
            [
              "Aimant en U de laboratoire",
              "0,1 à 0,5 T",
              "100 à 500 mT",
              "Déviation visible de faisceaux et rails"
            ],
            [
              "IRM médicale hospitalière",
              "1,5 à 3,0 T",
              "1500 à 3000 mT",
              "Résonance des protons de l'organisme"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Orientation du vecteur champ magnétique B",
          "stepTheme": "Sens vectoriel",
          "stepBadge": "Sud vers Nord",
          "paragraphText": "En tout point M d'un espace champ magnétique, le vecteur B a pour direction l'axe de l'aiguille aimantée placée en ce point, et pour sens celui qui va du pôle Sud vers le pôle Nord de cette aiguille aimantée.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p02_q1",
            "type": "mcq",
            "prompt": "Une aiguille aimantée placée au point M s'immobilise selon la droite est-ouest, sa pointe Nord dirigée vers l'est. Quelles sont les caractéristiques du vecteur champ B en ce point ?",
            "options": [
              "Direction horizontale est-ouest, sens orienté vers l'est",
              "Direction horizontale est-ouest, sens orienté vers l'ouest",
              "Direction verticale, sens vers le haut",
              "Sens indéterminé sans connaître la masse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le vecteur B est parallèle à l'axe de l'aiguille et dirigé du pôle Sud vers le pôle Nord : la pointe Nord indiquant l'est, B est orienté vers l'est."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'unité internationale : le Tesla (T)",
          "stepTheme": "Système SI",
          "stepBadge": "1 T = 1 N / (A.m)",
          "paragraphText": "L'unité de mesure du champ magnétique dans le Système International est le Tesla (T), nommé en hommage au physicien Nikola Tesla. Dans le système fondamental, un Tesla équivaut à 1 N / (A.m) ou 1 kg / (A.s²). En laboratoire, on utilise très fréquemment le millitesla (1 mT = 10⁻³ T) et le microtesla (1 µT = 10⁻⁶ T).",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p02_q2",
            "type": "mcq",
            "prompt": "Un champ magnétique a pour valeur B = 0,0045 T. Comment s'écrit cette valeur en milliteslas (mT) ?",
            "options": [
              "4,5 mT",
              "45 mT",
              "0,45 mT",
              "450 mT"
            ],
            "correctAnswerIndex": 0,
            "explanation": "1 mT = 10⁻³ T, donc 0,0045 T = 4,5 * 10⁻³ T = 4,5 mT."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Mesure de B par la sonde de Hall",
          "stepTheme": "Instrumentation",
          "stepBadge": "Effet Hall",
          "paragraphText": "Le teslamètre exploite l'effet Hall : lorsqu'un courant traverse une fine plaquette conductrice soumise à un champ B perpendiculaire, la force magnétique de Lorentz dévie les porteurs de charge, créant une différence de potentiel transversale VH directement proportionnelle à B.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p02_q3",
            "type": "mcq",
            "prompt": "Pour mesurer la valeur maximale du champ B à l'aide d'une sonde de Hall plate, comment doit être orientée la plaquette de la sonde par rapport aux lignes de champ ?",
            "options": [
              "Strictement perpendiculaire aux lignes de champ",
              "Strictement parallèle aux lignes de champ",
              "Inclinée à 45°",
              "L'orientation n'a aucune influence sur la mesure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'effet Hall dépend de la composante normale du champ : la tension transversale est maximale lorsque les lignes de champ coupent la plaquette sous une incidence de 90° (perpendiculairement)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Champ magnétique uniforme",
          "stepTheme": "Homogénéité spatiale",
          "stepBadge": "B = Cste vectorielle",
          "paragraphText": "Un champ magnétique est uniforme dans une région de l'espace si le vecteur B conserve rigoureusement la même direction, le même sens et la même norme en tout point de cette région. Les lignes de champ y sont des droites parallèles équidistantes.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p02_q4",
            "type": "mcq",
            "prompt": "Où trouve-t-on couramment un champ magnétique uniforme dans les dispositifs de laboratoire de lycée ?",
            "options": [
              "Dans l'entrefer d'un aimant en U et à l'intérieur d'un long solénoïde",
              "Au voisinage immédiat de la pointe d'un clou en fer doux",
              "À l'extérieur d'un aimant droit très court",
              "Au sommet d'une pile électrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'entrefer d'un aimant en U (zone située entre les pôles plats) et l'intérieur d'un solénoïde long sont les deux exemples canoniques de champ uniforme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le champ de pesanteur comparé au champ magnétique",
          "stepTheme": "Champs vectoriels",
          "stepBadge": "Force de contact vs Force de Lorentz",
          "paragraphText": "Contrairement au champ de pesanteur g qui agit sur tout corps possédant une masse qu'il soit au repos ou en mouvement (P = m g), le champ magnétique B n'exerce aucune force sur une charge au repos (v = 0) : son action ne se manifeste que sur les charges en déplacement ou sur les dipôles magnétiques.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p02_q5",
            "type": "mcq",
            "prompt": "Quelle est la force magnétique subie par un électron immobile placé dans un champ magnétique géant B = 5,0 T ?",
            "options": [
              "F = 0 N",
              "F = 5,0 N",
              "F = 8,0 * 10⁻¹⁹ N",
              "F = 9,1 * 10⁻³¹ N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La force magnétique exercée sur une particule chargée est la force de Lorentz F = |q| v B sin θ. Si la particule est immobile (v = 0), la force magnétique est rigoureusement nulle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Ne pas confondre champ B et potentiel",
          "stepTheme": "Grandeur vectorielle",
          "stepBadge": "Vecteur B",
          "paragraphText": "Le champ magnétique est fondamentalement vectoriel. On ne peut jamais additionner algébriquement les valeurs de deux champs magnétiques sans tenir compte de leurs angles et de leurs directions : l'addition de deux champs s'effectue obligatoirement par la règle du parallélogramme vectoriel.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p02_q6",
            "type": "mcq",
            "prompt": "En un point M se superposent deux champs perpendiculaires B₁ = 3 mT et B₂ = 4 mT. Quelle est la norme du champ résultant B ?",
            "options": [
              "B = 5 mT",
              "B = 7 mT",
              "B = 1 mT",
              "B = 12 mT"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme les deux vecteurs sont perpendiculaires, le théorème de Pythagore s'applique : B = √(B₁² + B₂²) = √(3² + 4²) = √25 = 5 mT."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Sensibilité de l'imagerie par résonance magnétique (IRM)",
          "stepTheme": "IRM médicale",
          "stepBadge": "Haute intensité",
          "paragraphText": "Les appareils d'IRM hospitaliers utilisent des bobines supraconductrices refroidies à l'hélium liquide (-269 °C) pour produire un champ magnétique stationnaire très intense (typiquement 1,5 T ou 3,0 T) afin d'aligner le spin magnétique des noyaux d'hydrogène du corps humain.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p02_q7",
            "type": "mcq",
            "prompt": "Combien de fois un appareil d'IRM de 3,0 T est-il plus intense que le champ magnétique terrestre moyen (Bh ≈ 30 µT = 3,0 * 10⁻⁵ T) ?",
            "options": [
              "100 000 fois plus intense",
              "1 000 fois plus intense",
              "10 000 fois plus intense",
              "100 fois plus intense"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Rapport = 3,0 / (3,0 * 10⁻⁵) = 1 / 10⁻⁵ = 100 000."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p02_q1",
          "type": "mcq",
          "prompt": "Une aiguille aimantée placée au point M s'immobilise selon la droite est-ouest, sa pointe Nord dirigée vers l'est. Quelles sont les caractéristiques du vecteur champ B en ce point ?",
          "options": [
            "Direction horizontale est-ouest, sens orienté vers l'est",
            "Direction horizontale est-ouest, sens orienté vers l'ouest",
            "Direction verticale, sens vers le haut",
            "Sens indéterminé sans connaître la masse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le vecteur B est parallèle à l'axe de l'aiguille et dirigé du pôle Sud vers le pôle Nord : la pointe Nord indiquant l'est, B est orienté vers l'est."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p02_q2",
          "type": "mcq",
          "prompt": "Un champ magnétique a pour valeur B = 0,0045 T. Comment s'écrit cette valeur en milliteslas (mT) ?",
          "options": [
            "4,5 mT",
            "45 mT",
            "0,45 mT",
            "450 mT"
          ],
          "correctAnswerIndex": 0,
          "explanation": "1 mT = 10⁻³ T, donc 0,0045 T = 4,5 * 10⁻³ T = 4,5 mT."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p02_q3",
          "type": "mcq",
          "prompt": "Pour mesurer la valeur maximale du champ B à l'aide d'une sonde de Hall plate, comment doit être orientée la plaquette de la sonde par rapport aux lignes de champ ?",
          "options": [
            "Strictement perpendiculaire aux lignes de champ",
            "Strictement parallèle aux lignes de champ",
            "Inclinée à 45°",
            "L'orientation n'a aucune influence sur la mesure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'effet Hall dépend de la composante normale du champ : la tension transversale est maximale lorsque les lignes de champ coupent la plaquette sous une incidence de 90° (perpendiculairement)."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p02_q4",
          "type": "mcq",
          "prompt": "Où trouve-t-on couramment un champ magnétique uniforme dans les dispositifs de laboratoire de lycée ?",
          "options": [
            "Dans l'entrefer d'un aimant en U et à l'intérieur d'un long solénoïde",
            "Au voisinage immédiat de la pointe d'un clou en fer doux",
            "À l'extérieur d'un aimant droit très court",
            "Au sommet d'une pile électrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'entrefer d'un aimant en U (zone située entre les pôles plats) et l'intérieur d'un solénoïde long sont les deux exemples canoniques de champ uniforme."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p02_q5",
          "type": "mcq",
          "prompt": "Quelle est la force magnétique subie par un électron immobile placé dans un champ magnétique géant B = 5,0 T ?",
          "options": [
            "F = 0 N",
            "F = 5,0 N",
            "F = 8,0 * 10⁻¹⁹ N",
            "F = 9,1 * 10⁻³¹ N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La force magnétique exercée sur une particule chargée est la force de Lorentz F = |q| v B sin θ. Si la particule est immobile (v = 0), la force magnétique est rigoureusement nulle."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p02_q6",
          "type": "mcq",
          "prompt": "En un point M se superposent deux champs perpendiculaires B₁ = 3 mT et B₂ = 4 mT. Quelle est la norme du champ résultant B ?",
          "options": [
            "B = 5 mT",
            "B = 7 mT",
            "B = 1 mT",
            "B = 12 mT"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme les deux vecteurs sont perpendiculaires, le théorème de Pythagore s'applique : B = √(B₁² + B₂²) = √(3² + 4²) = √25 = 5 mT."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p02_q7",
          "type": "mcq",
          "prompt": "Combien de fois un appareil d'IRM de 3,0 T est-il plus intense que le champ magnétique terrestre moyen (Bh ≈ 30 µT = 3,0 * 10⁻⁵ T) ?",
          "options": [
            "100 000 fois plus intense",
            "1 000 fois plus intense",
            "10 000 fois plus intense",
            "100 fois plus intense"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Rapport = 3,0 / (3,0 * 10⁻⁵) = 1 / 10⁻⁵ = 100 000."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l05_champ_magnetique_p03",
      "order": 3,
      "title": "Spectres magnétiques et lignes de champ",
      "summary": "Définition d'une ligne de champ, notion de spectre magnétique, visualisation à la limaille de fer, orientation des lignes (sortent du Nord et entrent au Sud), spectre de l'aimant droit et de l'aimant en U.",
      "conceptExplanation": "1. Définition d'une ligne de champ magnétique :\nUne ligne de champ magnétique est une ligne continue de l'espace, orientée, qui est en chacun de ses points tangente au vecteur champ magnétique B. En tout point d'une ligne de champ, la flèche d'orientation indique le sens du vecteur B.\nDeux lignes de champ ne peuvent jamais se couper (sinon le vecteur B aurait deux directions différentes au point d'intersection, ce qui est physiquement impossible).\n\n2. Le spectre magnétique :\nL'ensemble de toutes les lignes de champ d'un domaine constitue le spectre magnétique de la source. On le matérialise expérimentalement en saupoudrant de la fine limaille de fer sur une plaque transparente placée au-dessus de l'aimant : chaque grain de fer doux s'aimante par influence et s'aligne le long des lignes de champ comme une minuscule boussole.\n\n3. Règles d'orientation des lignes de champ :\nÀ l'extérieur d'un aimant (aimant droit ou en U), les lignes de champ sortent toujours par le pôle Nord et entrent par le pôle Sud. À l'intérieur de l'aimant, les lignes se referment en allant du pôle Sud vers le pôle Nord (les lignes de champ magnétique sont des boucles fermées sans commencement ni fin, car le flux de B est conservatif : div B = 0).\n\n4. Caractéristiques des spectres usuels :\n- Aimant droit : les lignes de champ forment des boucles symétriques qui s'évasent largement dans l'espace en s'éloignant des pôles. Le champ est le plus intense au voisinage immédiat des extrémités polaires (lignes très resserrées).\n- Aimant en U : dans la région comprise entre les deux branches polaires plates (l'entrefer), les lignes de champ sont rectilignes, parallèles et équidistantes : le champ y est parfaitement uniforme et dirigé du pôle Nord vers le pôle Sud.",
      "keyRule": "À l'extérieur d'un aimant, les lignes de champ sortent par le pôle Nord et rentrent par le pôle Sud. Dans l'entrefer d'un aimant en U, les lignes sont parallèles : le champ y est uniforme.",
      "formulas": [
        {
          "name": "Propriété de la ligne de champ",
          "formula": "\\vec{B}(M) \\parallel \\text{Tangente à la ligne de champ en } M",
          "note": "Orientée dans le sens de B"
        }
      ],
      "workedExample": {
        "title": "Orientation d'aiguilles aimantées sur un spectre d'aimant droit",
        "statement": "On place une petite aiguille aimantée au point P situé sur l'axe longitudinal d'un aimant droit, face à son pôle Nord. Comment s'oriente l'aiguille et vers où pointe son pôle Nord ?",
        "methodSteps": [
          "Étape 1 : Analyser le champ B créé par l'aimant : sur l'axe en face du pôle Nord, le champ B est centrifuge (il sort du pôle Nord en s'éloignant de l'aimant).",
          "Étape 2 : Rappeler l'orientation de l'aiguille aimantée : le vecteur B va du Sud vers le Nord de l'aiguille.",
          "Étape 3 : Conclure : le pôle Sud de l'aiguille est attiré par le pôle Nord de l'aimant, donc la pointe Nord de l'aiguille pointe vers l'extérieur (dans le sens de B)."
        ],
        "conclusion": "L'aiguille s'aligne sur l'axe, son pôle Sud faisant face au pôle Nord de l'aimant et sa pointe Nord tournée vers l'extérieur."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif des spectres magnétiques d'aimants",
        "tableData": {
          "headers": [
            "Dispositif",
            "Topologie des lignes",
            "Zone d'uniformité",
            "Orientation externe",
            "Densité de lignes"
          ],
          "rows": [
            [
              "Aimant droit",
              "Boucles courbes divergentes",
              "Aucune (champ non uniforme)",
              "Sortent du Nord, entrent au Sud",
              "Maximale aux pôles, faible au centre"
            ],
            [
              "Aimant en U (entrefer)",
              "Droites rigoureusement parallèles",
              "Tout l'entrefer entre les faces",
              "Du pôle Nord vers le pôle Sud",
              "Densité constante dans l'entrefer"
            ],
            [
              "Deux aimants face à face (N-S)",
              "Lignes tendues d'un pôle à l'autre",
              "Région centrale quasi uniforme",
              "Du Nord de l'aimant 1 au Sud de l'aimant 2",
              "Très forte concentration axiale"
            ],
            [
              "Deux aimants face à face (N-N)",
              "Lignes divergentes se repoussant",
              "Point central où B = 0",
              "Divergent vers les côtés",
              "Densité nulle au point neutre médian"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'une ligne de champ",
          "stepTheme": "Géométrie du champ",
          "stepBadge": "Tangente à B",
          "paragraphText": "Une ligne de champ magnétique est une ligne imaginaire continue, orientée, tangente en chacun de ses points au vecteur champ magnétique B existant en ce point. Le sens assigné à la ligne de champ est celui du vecteur B.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p03_q1",
            "type": "mcq",
            "prompt": "Deux lignes de champ magnétique peuvent-elles se croiser en un point de l'espace ?",
            "options": [
              "Non, car le vecteur champ magnétique en ce point aurait deux directions différentes, ce qui est impossible",
              "Oui, cela se produit toujours au pôle Nord d'un aimant",
              "Oui, si le champ est particulièrement intense",
              "Oui, au centre exact d'une bobine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En un point physique donné, le champ magnétique B est unique (résultante vectorielle unique). Si deux lignes se croisaient, il y aurait deux tangentes et donc deux vecteurs B distincts, ce qui est absurde."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Règle d'orientation externe des lignes de champ",
          "stepTheme": "Sens de parcours",
          "stepBadge": "Nord vers Sud (extérieur)",
          "paragraphText": "À l'extérieur d'un aimant, les lignes de champ magnétique sont toujours orientées en sortant par le pôle Nord et en entrant par le pôle Sud. À l'intérieur de la matière aimantée, elles se referment du pôle Sud vers le pôle Nord.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p03_q2",
            "type": "mcq",
            "prompt": "Sur le schéma d'un aimant droit, les flèches portées par les lignes de champ à l'air libre :",
            "options": [
              "Émergent du pôle Nord et convergent vers le pôle Sud",
              "Émergent du pôle Sud et convergent vers le pôle Nord",
              "Pointent toutes vers le centre géométrique de l'aimant",
              "N'ont aucune flèche car le champ est statique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par convention universelle, à l'extérieur des aimants, les lignes de champ sortent du pôle Nord et rentrent au pôle Sud."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le spectre magnétique à la limaille de fer",
          "stepTheme": "Matérialisation",
          "stepBadge": "Limaille de fer",
          "paragraphText": "Le spectre magnétique est la figure formée par l'ensemble des lignes de champ d'un domaine. Chaque grain de limaille de fer doux se comporte par influence magnétique comme un micro-dipôle qui s'oriente tangentiellement à la ligne locale sous l'action du couple magnétique.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p03_q3",
            "type": "mcq",
            "prompt": "Pourquoi tapote-t-on légèrement la plaque de verre saupoudrée de limaille pour révéler le spectre magnétique ?",
            "options": [
              "Pour vaincre les frottements mécaniques et permettre aux grains de s'aligner librement le long des lignes de champ",
              "Pour aimanter la plaque de verre",
              "Pour chauffer les grains de fer",
              "Pour inverser les pôles de l'aimant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les légères vibrations réduisent les forces de frottement solide entre les grains et le support, permettant aux couples magnétiques d'orienter les grains."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le champ dans l'entrefer d'un aimant en U",
          "stepTheme": "Champ uniforme",
          "stepBadge": "Lignes parallèles",
          "paragraphText": "L'entrefer d'un aimant en U est l'espace compris entre ses deux armatures polaires planes. Dans cette région, les lignes de champ sont des segments de droites rigoureusement parallèles et équidistantes, dirigées du pôle Nord vers le pôle Sud : le champ y est parfaitement uniforme.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p03_q4",
            "type": "mcq",
            "prompt": "Comment se présente le spectre magnétique dans l'entrefer d'un aimant en U ?",
            "options": [
              "Des lignes droites parallèles et régulièrement espacées",
              "Des cercles concentriques",
              "Des paraboles convergentes vers le centre",
              "Une zone totalement dépourvue de lignes de champ"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La géométrie plane et parallèle des pôles dans l'entrefer crée un faisceau de lignes droites parallèles, signature d'un champ vectoriel uniforme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Lien entre resserrement des lignes et intensité du champ",
          "stepTheme": "Densité de lignes",
          "stepBadge": "Lignes serrées => B grand",
          "paragraphText": "Plus les lignes de champ sont resserrées dans une région de l'espace, plus la norme du champ magnétique B y est élevée. Inversement, plus les lignes s'écartent, plus le champ magnétique s'affaiblit.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p03_q5",
            "type": "mcq",
            "prompt": "Où le champ magnétique d'un barreau aimanté est-il le plus intense ?",
            "options": [
              "Au contact immédiat des deux pôles d'extrémité où les lignes sont les plus denses",
              "Au milieu exact du barreau à l'extérieur",
              "À 1 mètre de distance",
              "L'intensité est rigoureusement constante partout"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est au niveau des pôles que les lignes de champ convergent et sont les plus denses : la norme du vecteur B y atteint sa valeur maximale."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Le point neutre entre deux pôles identiques",
          "stepTheme": "Annulation de B",
          "stepBadge": "B = 0 au centre",
          "paragraphText": "Lorsque deux pôles identiques (par exemple deux pôles Nord) sont placés face à face, les lignes de champ se repoussent et divergent. Au point médian situé exactement à mi-distance des deux pôles, les deux vecteurs champs s'opposent et s'annulent rigoureusement : B_total = 0. C'est un point neutre sans aucune ligne de champ.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p03_q6",
            "type": "mcq",
            "prompt": "Deux pôles Nord identiques créent chacun un champ de 40 mT en un point central O équidistant. Que vaut le champ magnétique total en O ?",
            "options": [
              "B_total = 0 mT (les deux vecteurs opposés s'annulent)",
              "B_total = 80 mT",
              "B_total = 40 mT",
              "B_total = 1600 mT"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux champs ont la même intensité mais des sens rigoureusement opposés sur l'axe : B_total = B₁ - B₂ = 40 - 40 = 0 mT."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Spectre magnétique d'un courant rectiligne",
          "stepTheme": "Fil infini",
          "stepBadge": "Cercles concentriques",
          "paragraphText": "Autour d'un fil rectiligne infini parcouru par un courant d'intensité I, les lignes de champ magnétique forment des cercles concentriques centrés sur le fil et contenus dans des plans perpendiculaires au fil. Leur sens est donné par la règle du tire-bouchon de Maxwell ou de la main droite.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p03_q7",
            "type": "mcq",
            "prompt": "Quelle est la forme géométrique des lignes de champ magnétique créées par un long câble électrique rectiligne vertical parcouru par un courant ?",
            "options": [
              "Des cercles concentriques horizontaux centrés sur l'axe du fil",
              "Des droites parallèles verticales",
              "Des rayons rectilignes s'éloignant du fil",
              "Des hélices montant vers le haut"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La symétrie axiale du fil conducteur impose des lignes de champ circulaires concentriques réparties dans les plans perpendiculaires au conducteur."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p03_q1",
          "type": "mcq",
          "prompt": "Deux lignes de champ magnétique peuvent-elles se croiser en un point de l'espace ?",
          "options": [
            "Non, car le vecteur champ magnétique en ce point aurait deux directions différentes, ce qui est impossible",
            "Oui, cela se produit toujours au pôle Nord d'un aimant",
            "Oui, si le champ est particulièrement intense",
            "Oui, au centre exact d'une bobine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En un point physique donné, le champ magnétique B est unique (résultante vectorielle unique). Si deux lignes se croisaient, il y aurait deux tangentes et donc deux vecteurs B distincts, ce qui est absurde."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p03_q2",
          "type": "mcq",
          "prompt": "Sur le schéma d'un aimant droit, les flèches portées par les lignes de champ à l'air libre :",
          "options": [
            "Émergent du pôle Nord et convergent vers le pôle Sud",
            "Émergent du pôle Sud et convergent vers le pôle Nord",
            "Pointent toutes vers le centre géométrique de l'aimant",
            "N'ont aucune flèche car le champ est statique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par convention universelle, à l'extérieur des aimants, les lignes de champ sortent du pôle Nord et rentrent au pôle Sud."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p03_q3",
          "type": "mcq",
          "prompt": "Pourquoi tapote-t-on légèrement la plaque de verre saupoudrée de limaille pour révéler le spectre magnétique ?",
          "options": [
            "Pour vaincre les frottements mécaniques et permettre aux grains de s'aligner librement le long des lignes de champ",
            "Pour aimanter la plaque de verre",
            "Pour chauffer les grains de fer",
            "Pour inverser les pôles de l'aimant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les légères vibrations réduisent les forces de frottement solide entre les grains et le support, permettant aux couples magnétiques d'orienter les grains."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p03_q4",
          "type": "mcq",
          "prompt": "Comment se présente le spectre magnétique dans l'entrefer d'un aimant en U ?",
          "options": [
            "Des lignes droites parallèles et régulièrement espacées",
            "Des cercles concentriques",
            "Des paraboles convergentes vers le centre",
            "Une zone totalement dépourvue de lignes de champ"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La géométrie plane et parallèle des pôles dans l'entrefer crée un faisceau de lignes droites parallèles, signature d'un champ vectoriel uniforme."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p03_q5",
          "type": "mcq",
          "prompt": "Où le champ magnétique d'un barreau aimanté est-il le plus intense ?",
          "options": [
            "Au contact immédiat des deux pôles d'extrémité où les lignes sont les plus denses",
            "Au milieu exact du barreau à l'extérieur",
            "À 1 mètre de distance",
            "L'intensité est rigoureusement constante partout"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est au niveau des pôles que les lignes de champ convergent et sont les plus denses : la norme du vecteur B y atteint sa valeur maximale."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p03_q6",
          "type": "mcq",
          "prompt": "Deux pôles Nord identiques créent chacun un champ de 40 mT en un point central O équidistant. Que vaut le champ magnétique total en O ?",
          "options": [
            "B_total = 0 mT (les deux vecteurs opposés s'annulent)",
            "B_total = 80 mT",
            "B_total = 40 mT",
            "B_total = 1600 mT"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux champs ont la même intensité mais des sens rigoureusement opposés sur l'axe : B_total = B₁ - B₂ = 40 - 40 = 0 mT."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p03_q7",
          "type": "mcq",
          "prompt": "Quelle est la forme géométrique des lignes de champ magnétique créées par un long câble électrique rectiligne vertical parcouru par un courant ?",
          "options": [
            "Des cercles concentriques horizontaux centrés sur l'axe du fil",
            "Des droites parallèles verticales",
            "Des rayons rectilignes s'éloignant du fil",
            "Des hélices montant vers le haut"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La symétrie axiale du fil conducteur impose des lignes de champ circulaires concentriques réparties dans les plans perpendiculaires au conducteur."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l05_champ_magnetique_p04",
      "order": 4,
      "title": "Le solénoïde : champ uniforme interne, règles et formule quantitative",
      "summary": "Définition géométrique du solénoïde (L ≥ 10 R), champ uniforme à l'intérieur, règles d'orientation (bonhomme d'Ampère, main droite, faces), et loi quantitative B = μ₀ n I = μ₀ (N/L) I avec perméabilité du vide μ₀ = 4π * 10⁻⁷ S.I.",
      "conceptExplanation": "1. Définition du solénoïde :\nUn solénoïde est une bobine cylindrique constituée d'un enroulement régulier de spires conductrices jointives ou serrées, dont la longueur L est nettement supérieure à son rayon R (au moins L ≥ 10 R selon le critère officiel des programmes ivoiriens).\n\n2. Uniformité du champ magnétique interne :\nÀ l'intérieur d'un solénoïde de longueur suffisante et loin des extrémités, le champ magnétique est rigoureusement uniforme :\n- Direction : l'axe longitudinal du solénoïde ;\n- Sens : déterminé par l'une des règles d'orientation spatiale ;\n- Norme : strictement constante en tout point de l'espace intérieur.\nÀ l'extérieur du solénoïde, le champ magnétique est extrêmement faible, quasi nul pour un solénoïde très long.\n\n3. Règles de détermination du sens de B :\n- Règle de la main droite : On entoure le solénoïde avec la main droite de sorte que les quatre doigts repliés indiquent le sens de circulation du courant I dans les spires ; le pouce tendu à 90° indique alors le sens du vecteur champ magnétique B à l'intérieur.\n- Règle du bonhomme d'Ampère : Un observateur couché sur les spires, le courant entrant par ses pieds et sortant par sa tête, et regardant vers l'axe du solénoïde, a son bras gauche tendu qui indique le sens du vecteur B.\n- Règle des faces : Les lignes de champ sortent par la face Nord et entrent par la face Sud. L'intérieur voit le champ aller de la face Sud vers la face Nord.\n\n4. Formule quantitative de l'intensité du champ B :\nÀ l'intérieur d'un solénoïde de longueur L comportant N spires parcouru par un courant d'intensité I :\nB = μ₀ * (N / L) * I = μ₀ * n * I.\n- μ₀ = 4π * 10⁻⁷ S.I. ≈ 1,257 * 10⁻⁶ T.m/A (perméabilité magnétique du vide ou de l'air) ;\n- N : nombre total de spires du bobinage ;\n- L : longueur du solénoïde (en mètres) ;\n- n = N / L : nombre de spires par mètre (en spires/m ou m⁻¹) ;\n- I : intensité du courant électrique (en ampères, A).",
      "keyRule": "À l'intérieur d'un solénoïde long (L ≥ 10 R), le champ est uniforme et axial : B = μ₀ n I = μ₀ (N / L) I avec μ₀ = 4π * 10⁻⁷ S.I. Le sens est donné par le pouce de la main droite lorsque les doigts suivent le courant.",
      "formulas": [
        {
          "name": "Champ magnétique au centre d'un solénoïde",
          "formula": "B = \\mu_0\\,\\frac{N}{L}\\,I = \\mu_0\\,n\\,I",
          "note": "μ₀ = 4π * 10⁻⁷ S.I., n en spires/m, I en A"
        },
        {
          "name": "Densité linéique de spires",
          "formula": "n = \\frac{N}{L}",
          "note": "Nombre de spires par mètre de bobinage"
        }
      ],
      "workedExample": {
        "title": "Calcul du champ et du nombre de spires par couche",
        "statement": "Un solénoïde de longueur L = 40 cm comporte N = 800 spires réparties sur 4 couches superposées. Il est traversé par un courant d'intensité I = 2,5 A. Calcule la densité de spires n, le nombre de spires par couche, et la valeur du champ B au centre (μ₀ = 4π * 10⁻⁷ S.I.).",
        "methodSteps": [
          "Étape 1 : Calculer la densité de spires : n = N / L = 800 / 0,40 = 2000 spires/m.",
          "Étape 2 : Calculer le nombre de spires par couche : N_couche = N / 4 = 800 / 4 = 200 spires/couche.",
          "Étape 3 : Calculer la norme du champ B : B = μ₀ * n * I = (4π * 10⁻⁷) * 2000 * 2,5 = (4π * 10⁻⁷) * 5000 = 2π * 10⁻³ T ≈ 6,28 * 10⁻³ T = 6,28 mT."
        ],
        "conclusion": "Le solénoïde produit un champ axial uniforme de 6,28 mT, avec 200 spires par couche."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des caractéristiques du champ dans un solénoïde",
        "tableData": {
          "headers": [
            "Zone spatiale",
            "Direction du vecteur B",
            "Sens de parcours",
            "Norme B",
            "Nature du champ"
          ],
          "rows": [
            [
              "Intérieur central (axe)",
              "Parallèle à l'axe longitudinal",
              "De la face Sud vers la face Nord",
              "B = μ₀ (N / L) I = μ₀ n I",
              "Rigoureusement uniforme"
            ],
            [
              "Extrémités (bords)",
              "Divergent en éventail",
              "Sortent par la face Nord",
              "B_bord ≈ B_centre / 2",
              "Non uniforme (effets de bord)"
            ],
            [
              "Extérieur du solénoïde",
              "Rebouclent vers la face Sud",
              "Du Nord vers le Sud",
              "B_ext ≈ 0 (pour un solénoïde très long)",
              "Quasi nul"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Critère géométrique du solénoïde",
          "stepTheme": "Dimensionnement",
          "stepBadge": "L ≥ 10 R",
          "paragraphText": "Pour qu'une bobine cylindrique soit qualifiée de solénoïde et présente un champ uniforme sur la quasi-totalité de sa longueur, sa longueur L doit être au moins 10 fois supérieure à son rayon R (L ≥ 10 R ou L ≥ 5 D où D est le diamètre).",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p04_q1",
            "type": "mcq",
            "prompt": "Une bobine cylindrique a un diamètre D = 4 cm (rayon R = 2 cm). Quelle doit être sa longueur minimale L pour être considérée comme un solénoïde selon les critères officiels ?",
            "options": [
              "L ≥ 20 cm",
              "L ≥ 4 cm",
              "L ≥ 40 cm",
              "L ≥ 2 cm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La condition L ≥ 10 R impose avec R = 2 cm : L ≥ 10 * 2 = 20 cm."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule quantitative B = μ₀ n I",
          "stepTheme": "Formule fondamentale",
          "stepBadge": "B = μ₀ n I",
          "paragraphText": "Au centre d'un solénoïde de n spires par mètre parcouru par un courant d'intensité I, l'intensité du champ magnétique est donnée par B = μ₀ n I = μ₀ (N / L) I, où μ₀ = 4π * 10⁻⁷ S.I. Le champ B est strictement proportionnel à l'intensité I du courant et au nombre de spires par mètre n.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p04_q2",
            "type": "mcq",
            "prompt": "Un solénoïde comporte n = 1000 spires/m et est parcouru par un courant I = 2,0 A. Que vaut l'intensité du champ magnétique B créé à l'intérieur (prendre π ≈ 3,14) ?",
            "options": [
              "B ≈ 2,51 * 10⁻³ T = 2,51 mT",
              "B ≈ 2,51 T",
              "B ≈ 8,0 * 10⁻⁶ T",
              "B ≈ 0,50 mT"
            ],
            "correctAnswerIndex": 0,
            "explanation": "B = μ₀ * n * I = (4 * 3,14 * 10⁻⁷) * 1000 * 2,0 = 8 * 3,14 * 10⁻⁴ ≈ 2,51 * 10⁻³ T = 2,51 mT."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Règle de la main droite pour le solénoïde",
          "stepTheme": "Orientation vectorielle",
          "stepBadge": "Doigts = I, Pouce = B",
          "paragraphText": "En entourant le solénoïde avec les quatre doigts de la main droite dans le sens de parcours du courant électrique I dans les spires visibles, le pouce tendu orthogonalement indique directement et sans ambiguïté le sens du vecteur champ magnétique B à l'intérieur du solénoïde.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p04_q3",
            "type": "mcq",
            "prompt": "Le courant monte sur la face avant visible des spires d'un solénoïde horizontal. En appliquant la règle de la main droite, vers où pointe le champ B à l'intérieur ?",
            "options": [
              "Vers la gauche",
              "Vers la droite",
              "Vers le haut verticalement",
              "Vers le bas verticalement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En plaçant la paume contre la face avant et les doigts pointant vers le haut (sens du courant), le pouce s'écarte horizontalement vers la gauche : B est orienté vers la gauche."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Exploitation graphique de la caractéristique B = f(I)",
          "stepTheme": "Pente k = μ₀ n",
          "stepBadge": "B = k I",
          "paragraphText": "La courbe expérimentale représentant B en fonction de I est une droite linéaire passant par l'origine : B = k I. Le coefficient de proportionnalité (pente) vaut k = Delta B / Delta I = μ₀ n = μ₀ (N / L). Il permet de déterminer expérimentalement le nombre de spires N ou la perméabilité μ₀.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p04_q4",
            "type": "mcq",
            "prompt": "La pente de la droite B = f(I) d'un solénoïde de longueur L = 50 cm vaut k = 2,51 * 10⁻³ T/A. Sachant que μ₀ = 4π * 10⁻⁷ S.I. ≈ 1,257 * 10⁻⁶ S.I., quel est le nombre total de spires N du solénoïde ?",
            "options": [
              "N = 1000 spires",
              "N = 2000 spires",
              "N = 500 spires",
              "N = 250 spires"
            ],
            "correctAnswerIndex": 0,
            "explanation": "k = μ₀ (N / L) => N = (k * L) / μ₀ = (2,51 * 10⁻³ * 0,50) / (1,257 * 10⁻⁶) = (1,255 * 10⁻³) / (1,257 * 10⁻⁶) ≈ 1000 spires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Effet d'un noyau de fer doux : l'électroaimant",
          "stepTheme": "Perméabilité relative",
          "stepBadge": "B = μ_r B₀",
          "paragraphText": "Si l'on insère à l'intérieur du solénoïde un cylindre de fer doux ferromagnétique, le champ magnétique est multiplié par la perméabilité relative du matériau μ_r (souvent entre 1000 et 10 000) : B = μ_r μ₀ n I. L'ensemble constitue un électroaimant capable d'exercer des forces magnétiques considérables.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p04_q5",
            "type": "mcq",
            "prompt": "Un solénoïde dans l'air crée un champ de 2 mT. Quel champ obtient-on si l'on y insère un noyau de fer doux de perméabilité relative μ_r = 1500 ?",
            "options": [
              "B = 3,0 T (multiplié par 1500)",
              "B = 3,0 mT",
              "B = 1502 mT",
              "B = 0,0013 T"
            ],
            "correctAnswerIndex": 0,
            "explanation": "B = μ_r * B₀ = 1500 * 2 * 10⁻³ T = 3,0 T."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Confusion entre longueur du solénoïde et longueur du fil",
          "stepTheme": "Géométrie d'enroulement",
          "stepBadge": "L_solenoide ≠ L_fil",
          "paragraphText": "Ne confondez jamais la longueur L du solénoïde (la dimension du cylindre selon son axe, généralement 20 à 80 cm) et la longueur totale du fil de cuivre ayant servi au bobinage (qui vaut L_fil = N * 2π R, pouvant atteindre plusieurs centaines de mètres). Dans la formule B = μ₀ (N/L) I, L est IMPÉRATIVEMENT la longueur du cylindre.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p04_q6",
            "type": "mcq",
            "prompt": "Un fil de 125,6 m est enroulé en N = 1000 spires circulaires de rayon R = 2 cm pour former un solénoïde de longueur L = 40 cm. Quelle longueur doit-on insérer au dénominateur de B = μ₀ N I / L ?",
            "options": [
              "L = 0,40 m = 40 cm",
              "L = 125,6 m",
              "L = 0,02 m",
              "L = 1000 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au dénominateur figure exclusivement la longueur axiale du solénoïde L = 0,40 m, et non la longueur déroulée du fil conducteur."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Calcul du nombre de couches de bobinage",
          "stepTheme": "Spire jointive",
          "stepBadge": "N_couche = N / p",
          "paragraphText": "Si le bobinage comporte p couches superposées de spires identiques de diamètre d_fil, le nombre de spires par couche vaut N / p. Sur une seule couche de longueur L avec des spires jointives sans espace, le nombre de spires maximum est L / d_fil.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p04_q7",
            "type": "mcq",
            "prompt": "Un solénoïde de L = 50 cm comporte N = 1000 spires réparties sur p = 5 couches régulières. Combien de spires comporte chaque couche ?",
            "options": [
              "200 spires par couche",
              "500 spires par couche",
              "5000 spires par couche",
              "50 spires par couche"
            ],
            "correctAnswerIndex": 0,
            "explanation": "N_couche = N / p = 1000 / 5 = 200 spires par couche."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p04_q1",
          "type": "mcq",
          "prompt": "Une bobine cylindrique a un diamètre D = 4 cm (rayon R = 2 cm). Quelle doit être sa longueur minimale L pour être considérée comme un solénoïde selon les critères officiels ?",
          "options": [
            "L ≥ 20 cm",
            "L ≥ 4 cm",
            "L ≥ 40 cm",
            "L ≥ 2 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La condition L ≥ 10 R impose avec R = 2 cm : L ≥ 10 * 2 = 20 cm."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p04_q2",
          "type": "mcq",
          "prompt": "Un solénoïde comporte n = 1000 spires/m et est parcouru par un courant I = 2,0 A. Que vaut l'intensité du champ magnétique B créé à l'intérieur (prendre π ≈ 3,14) ?",
          "options": [
            "B ≈ 2,51 * 10⁻³ T = 2,51 mT",
            "B ≈ 2,51 T",
            "B ≈ 8,0 * 10⁻⁶ T",
            "B ≈ 0,50 mT"
          ],
          "correctAnswerIndex": 0,
          "explanation": "B = μ₀ * n * I = (4 * 3,14 * 10⁻⁷) * 1000 * 2,0 = 8 * 3,14 * 10⁻⁴ ≈ 2,51 * 10⁻³ T = 2,51 mT."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p04_q3",
          "type": "mcq",
          "prompt": "Le courant monte sur la face avant visible des spires d'un solénoïde horizontal. En appliquant la règle de la main droite, vers où pointe le champ B à l'intérieur ?",
          "options": [
            "Vers la gauche",
            "Vers la droite",
            "Vers le haut verticalement",
            "Vers le bas verticalement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En plaçant la paume contre la face avant et les doigts pointant vers le haut (sens du courant), le pouce s'écarte horizontalement vers la gauche : B est orienté vers la gauche."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p04_q4",
          "type": "mcq",
          "prompt": "La pente de la droite B = f(I) d'un solénoïde de longueur L = 50 cm vaut k = 2,51 * 10⁻³ T/A. Sachant que μ₀ = 4π * 10⁻⁷ S.I. ≈ 1,257 * 10⁻⁶ S.I., quel est le nombre total de spires N du solénoïde ?",
          "options": [
            "N = 1000 spires",
            "N = 2000 spires",
            "N = 500 spires",
            "N = 250 spires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "k = μ₀ (N / L) => N = (k * L) / μ₀ = (2,51 * 10⁻³ * 0,50) / (1,257 * 10⁻⁶) = (1,255 * 10⁻³) / (1,257 * 10⁻⁶) ≈ 1000 spires."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p04_q5",
          "type": "mcq",
          "prompt": "Un solénoïde dans l'air crée un champ de 2 mT. Quel champ obtient-on si l'on y insère un noyau de fer doux de perméabilité relative μ_r = 1500 ?",
          "options": [
            "B = 3,0 T (multiplié par 1500)",
            "B = 3,0 mT",
            "B = 1502 mT",
            "B = 0,0013 T"
          ],
          "correctAnswerIndex": 0,
          "explanation": "B = μ_r * B₀ = 1500 * 2 * 10⁻³ T = 3,0 T."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p04_q6",
          "type": "mcq",
          "prompt": "Un fil de 125,6 m est enroulé en N = 1000 spires circulaires de rayon R = 2 cm pour former un solénoïde de longueur L = 40 cm. Quelle longueur doit-on insérer au dénominateur de B = μ₀ N I / L ?",
          "options": [
            "L = 0,40 m = 40 cm",
            "L = 125,6 m",
            "L = 0,02 m",
            "L = 1000 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au dénominateur figure exclusivement la longueur axiale du solénoïde L = 0,40 m, et non la longueur déroulée du fil conducteur."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p04_q7",
          "type": "mcq",
          "prompt": "Un solénoïde de L = 50 cm comporte N = 1000 spires réparties sur p = 5 couches régulières. Combien de spires comporte chaque couche ?",
          "options": [
            "200 spires par couche",
            "500 spires par couche",
            "5000 spires par couche",
            "50 spires par couche"
          ],
          "correctAnswerIndex": 0,
          "explanation": "N_couche = N / p = 1000 / 5 = 200 spires par couche."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l05_champ_magnetique_p05",
      "order": 5,
      "title": "Superposition de champs magnétiques et champ terrestre Bh",
      "summary": "Principe de superposition vectorielle B = B₁ + B₂, déviation d'une boussole sous l'action simultanée du champ créé par un solénoïde et du champ terrestre Bh, relations trigonométriques tan α = B₀ / Bh et calcul de la résultante.",
      "conceptExplanation": "1. Le principe de superposition vectorielle :\nLorsque plusieurs sources de champ magnétique (aimants, solénoïdes, Terre) agissent simultanément en un même point M de l'espace, le champ magnétique résultant B est la somme vectorielle des champs créés individuellement par chaque source :\nB = B₁ + B₂ + ... = Somme B_i.\nUne aiguille aimantée placée en M s'aligne selon la direction et le sens du vecteur résultant B.\n\n2. Déviation d'une boussole dans un solénoïde orthogonal au champ terrestre :\nSoit un solénoïde placé de telle sorte que son axe soit horizontal et perpendiculaire au méridien magnétique terrestre :\n- En l'absence de courant (I = 0) : l'aiguille aimantée placée au centre O s'aligne le long du méridien magnétique, orientée vers le Nord magnétique terrestre sous l'action de la composante horizontale du champ terrestre Bh.\n- Lorsqu'on établit un courant I : le solénoïde crée en O un champ B₀ porté par son axe (donc perpendiculaire à Bh).\n- Le champ résultant s'écrit vectoriellement : B = B₀ + Bh.\n\n3. Relations trigonométriques du triangle rectangle des champs :\nComme B₀ est perpendiculaire à Bh, les trois vecteurs B₀, Bh et B forment un triangle rectangle en l'extrémité de Bh :\n- Angle de déviation α de l'aiguille par rapport au méridien terrestre : tan α = B₀ / Bh  =>  B₀ = Bh * tan α.\n- Norme du champ résultant : B = √(B₀² + Bh²) = Bh / cos α.\nCette expérience canonique permet de mesurer la valeur de Bh ou de calibrer le champ B₀ d'une bobine sans teslamètre.",
      "keyRule": "Les champs magnétiques s'ajoutent vectoriellement : B = B₀ + Bh. Si B₀ est orthogonal à Bh : tan α = B₀ / Bh => B₀ = Bh tan α et B = √(B₀² + Bh²).",
      "formulas": [
        {
          "name": "Principe de superposition vectorielle",
          "formula": "\\vec{B} = \\sum \\vec{B}_i = \\vec{B}_1 + \\vec{B}_2",
          "note": "Addition géométrique vectorielle"
        },
        {
          "name": "Relation de déviation par rapport à Bh",
          "formula": "\\tan\\alpha = \\frac{B_0}{B_h} \\iff B_0 = B_h\\,\\tan\\alpha",
          "note": "B₀ orthogonal à Bh"
        },
        {
          "name": "Norme du champ résultant",
          "formula": "B = \\sqrt{B_0^2 + B_h^2}",
          "note": "Triangle rectangle"
        }
      ],
      "workedExample": {
        "title": "Détermination du champ d'un solénoïde par déviation d'une boussole",
        "statement": "L'axe d'un solénoïde est disposé perpendiculairement au méridien magnétique terrestre où Bh = 2,0 * 10⁻⁵ T. Lorsqu'un courant I circule dans le solénoïde, une aiguille aimantée placée en son centre dévie d'un angle α = 30° (tan 30° ≈ 0,577 ; cos 30° ≈ 0,866). Calcule le champ B₀ créé par le solénoïde et la norme du champ résultant B.",
        "methodSteps": [
          "Étape 1 : Appliquer la relation trigonométrique de l'angle de déviation : tan α = B₀ / Bh.",
          "Étape 2 : Calculer le champ propre B₀ : B₀ = Bh * tan α = (2,0 * 10⁻⁵) * 0,577 ≈ 1,15 * 10⁻⁵ T = 11,5 µT.",
          "Étape 3 : Calculer la norme du champ résultant B : B = Bh / cos α = (2,0 * 10⁻⁵) / 0,866 ≈ 2,31 * 10⁻⁵ T = 23,1 µT.",
          "Vérification par Pythagore : B = √[B₀² + Bh²] = √[(1,15)² + (2,0)²] * 10⁻⁵ = √(1,32 + 4,0) * 10⁻⁵ = √5,32 * 10⁻⁵ ≈ 2,31 * 10⁻⁵ T."
        ],
        "conclusion": "Le solénoïde crée un champ de 1,15 * 10⁻⁵ T et le champ total orientant l'aiguille vaut 2,31 * 10⁻⁵ T."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Configuration vectorielle de la superposition B = B₀ + Bh",
        "tableData": {
          "headers": [
            "Vecteur champ",
            "Orientation spatiale",
            "Origine physique",
            "Intensité type",
            "Formule trigonométrique"
          ],
          "rows": [
            [
              "Champ terrestre Bh",
              "Horizontal selon le méridien magnétique (Sud -> Nord)",
              "Noyau ferromagnétique terrestre",
              "Bh ≈ 2 * 10⁻⁵ T",
              "Bh = B cos α"
            ],
            [
              "Champ du solénoïde B₀",
              "Horizontal selon l'axe est-ouest du solénoïde",
              "Courant I dans les spires",
              "B₀ = μ₀ n I",
              "B₀ = Bh tan α"
            ],
            [
              "Champ résultant B",
              "Incliné de l'angle α par rapport au méridien",
              "Superposition B = B₀ + Bh",
              "B = √(B₀² + Bh²)",
              "B = Bh / cos α"
            ],
            [
              "Aiguille aimantée",
              "S'aligne rigoureusement sur le vecteur résultant B",
              "Couple magnétique de rappel",
              "-",
              "Pointe Nord alignée sur B"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le principe de superposition vectorielle",
          "stepTheme": "Addition vectorielle",
          "stepBadge": "B = B₁ + B₂",
          "paragraphText": "En un point soumis à plusieurs champs magnétiques distincts B₁ et B₂, le champ total résultant est la somme vectorielle géométrique B = B₁ + B₂. Si les champs ont même direction et même sens, leurs intensités s'ajoutent ; s'ils sont opposés, elles se retranchent ; s'ils forment un angle, on applique les lois de la trigonométrie vectorielle.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p05_q1",
            "type": "mcq",
            "prompt": "Deux bobines coaxiales créent au même point deux champs magnétiques de même direction et de même sens B₁ = 12 mT et B₂ = 18 mT. Que vaut la norme du champ résultant ?",
            "options": [
              "B = 30 mT",
              "B = 6 mT",
              "B = 21,6 mT",
              "B = 216 mT"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme les deux vecteurs sont colinéaires et de même sens, les normes s'ajoutent directement : B = B₁ + B₂ = 12 + 18 = 30 mT."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La composante horizontale terrestre Bh",
          "stepTheme": "Référence terrestre",
          "stepBadge": "Bh ≈ 2 * 10⁻⁵ T",
          "paragraphText": "Le champ magnétique terrestre en un lieu comporte une composante verticale Bv et une composante horizontale Bh. Seule la composante horizontale Bh agit sur une boussole montée sur pivot vertical, contraignant l'aiguille à pointer vers le Nord magnétique en l'absence d'autre perturbation.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p05_q2",
            "type": "mcq",
            "prompt": "Pourquoi une aiguille aimantée pivotant sur un axe vertical ne répond-elle qu'à la composante horizontale Bh du champ terrestre ?",
            "options": [
              "Parce que son axe mécanique de rotation empêche tout basculement vertical, ne laissant libre que la rotation dans le plan horizontal",
              "Parce que la composante verticale est nulle partout sur Terre",
              "Parce que la gravité annule le magnétisme vertical",
              "Parce que la boussole est en plastique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'axe mécanique vertical bloque le degré de liberté en inclinaison : l'aiguille ne peut tourner que dans le plan horizontal sous l'effet du couple produit par Bh."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Disposition orthogonale canonique d'un solénoïde",
          "stepTheme": "Protocole expérimental",
          "stepBadge": "Axe Est-Ouest",
          "paragraphText": "Pour mesurer le champ B₀ d'un solénoïde par déviation d'une boussole, on doit impérativement orienter l'axe du solénoïde selon la direction Est-Ouest perpendiculaire au méridien magnétique. Ainsi, le vecteur B₀ créé est rigoureusement orthogonal au vecteur Bh terrestre.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p05_q3",
            "type": "mcq",
            "prompt": "Si l'axe du solénoïde était aligné Nord-Sud (parallèle à Bh), qu'observerait-on sur l'aiguille aimantée lors de l'établissement du courant ?",
            "options": [
              "Elle ne dévierait pas d'un angle oblique : elle resterait orientée Nord-Sud (ou basculerait à 180° si B₀ > Bh)",
              "Elle dévierait à 45°",
              "Elle se mettrait à tourner sans fin",
              "Elle s'élèverait vers le haut"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux vecteurs colinéaires ne forment aucun angle : l'aiguille reste sur la même droite Nord-Sud et ne dévie pas de façon mesurable."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Relation tan α = B₀ / Bh",
          "stepTheme": "Trigonométrie de la déviation",
          "stepBadge": "B₀ = Bh tan α",
          "paragraphText": "Dans la configuration orthogonale, la tangente de l'angle de déviation α mesuré sur le cadran de la boussole donne le rapport direct entre le champ de la bobine et le champ terrestre : tan α = B₀ / Bh. D'où B₀ = Bh * tan α.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p05_q4",
            "type": "mcq",
            "prompt": "On mesure un angle de déviation de l'aiguille α = 45° (tan 45° = 1,0). Sachant que Bh = 2,0 * 10⁻⁵ T, quelle est la valeur du champ B₀ produit par le solénoïde ?",
            "options": [
              "B₀ = 2,0 * 10⁻⁵ T = Bh",
              "B₀ = 1,0 * 10⁻⁵ T",
              "B₀ = 4,0 * 10⁻⁵ T",
              "B₀ = 0 T"
            ],
            "correctAnswerIndex": 0,
            "explanation": "tan 45° = 1 => B₀ / Bh = 1 => B₀ = Bh = 2,0 * 10⁻⁵ T."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Norme du champ résultant B = √(B₀² + Bh²)",
          "stepTheme": "Intensité totale",
          "stepBadge": "Pythagore",
          "paragraphText": "La norme du champ magnétique total qui oriente effectivement l'aiguille est l'hypoténuse du triangle rectangle formé par les composantes orthogonales : B = √(B₀² + Bh²). Elle est toujours strictement supérieure à chacune des composantes isolées.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p05_q5",
            "type": "mcq",
            "prompt": "Si B₀ = 15 µT et Bh = 20 µT, que vaut la norme du champ magnétique résultant B ?",
            "options": [
              "B = 25 µT",
              "B = 35 µT",
              "B = 5 µT",
              "B = 300 µT"
            ],
            "correctAnswerIndex": 0,
            "explanation": "B = √(15² + 20²) = √(225 + 400) = √625 = 25 µT."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Non-linéarité de l'angle α avec l'intensité I",
          "stepTheme": "Fonction tangente",
          "stepBadge": "α n'est pas proportionnel à I",
          "paragraphText": "Bien que le champ B₀ soit strictement proportionnel à l'intensité I (B₀ = k I), l'angle de déviation α n'est PAS proportionnel à I, car c'est sa TANGENTE qui est proportionnelle : tan α = (k / Bh) I. Pour doubler l'angle α de 30° à 60°, il ne faut pas doubler le courant, mais multiplier le courant par 3 (car tan 60° / tan 30° = √3 / (1/√3) = 3) !",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p05_q6",
            "type": "mcq",
            "prompt": "Pour un courant I₁ = 1,0 A, on observe une déviation α₁ = 30° (tan 30° ≈ 0,577). Quel courant I₂ faut-il pour obtenir une déviation α₂ = 45° (tan 45° = 1,0) ?",
            "options": [
              "I₂ ≈ 1,73 A",
              "I₂ = 1,50 A",
              "I₂ = 2,00 A",
              "I₂ = 1,25 A"
            ],
            "correctAnswerIndex": 0,
            "explanation": "tan α₂ / tan α₁ = I₂ / I₁ => I₂ = I₁ * (tan 45° / tan 30°) = 1,0 * (1,0 / 0,577) ≈ 1,73 A (et non 1,5 A)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Boussole des tangentes",
          "stepTheme": "Instrument historique",
          "stepBadge": "Galvanomètre des tangentes",
          "paragraphText": "La boussole des tangentes est un instrument historique de précision constitué d'une bobine circulaire verticale orientée selon le méridien magnétique et d'une petite boussole en son centre. Elle servait au XIXe siècle d'ampèremètre étalon absolu par la mesure directe de tan α.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p05_q7",
            "type": "mcq",
            "prompt": "Quel est l'intérêt fondamental de la boussole des tangentes dans l'histoire de la physique ?",
            "options": [
              "Mesurer l'intensité d'un courant électrique en valeur absolue à partir des seules dimensions géométriques de la bobine et du champ terrestre",
              "Prédire la météo par électrostatique",
              "Accélérer des particules atomiques",
              "Convertir le courant continu en courant alternatif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle permettait d'étalonner et de mesurer des courants électriques sans aucun ressort mécanique, par simple équilibre magnétique sur le champ terrestre."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p05_q1",
          "type": "mcq",
          "prompt": "Deux bobines coaxiales créent au même point deux champs magnétiques de même direction et de même sens B₁ = 12 mT et B₂ = 18 mT. Que vaut la norme du champ résultant ?",
          "options": [
            "B = 30 mT",
            "B = 6 mT",
            "B = 21,6 mT",
            "B = 216 mT"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme les deux vecteurs sont colinéaires et de même sens, les normes s'ajoutent directement : B = B₁ + B₂ = 12 + 18 = 30 mT."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p05_q2",
          "type": "mcq",
          "prompt": "Pourquoi une aiguille aimantée pivotant sur un axe vertical ne répond-elle qu'à la composante horizontale Bh du champ terrestre ?",
          "options": [
            "Parce que son axe mécanique de rotation empêche tout basculement vertical, ne laissant libre que la rotation dans le plan horizontal",
            "Parce que la composante verticale est nulle partout sur Terre",
            "Parce que la gravité annule le magnétisme vertical",
            "Parce que la boussole est en plastique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'axe mécanique vertical bloque le degré de liberté en inclinaison : l'aiguille ne peut tourner que dans le plan horizontal sous l'effet du couple produit par Bh."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p05_q3",
          "type": "mcq",
          "prompt": "Si l'axe du solénoïde était aligné Nord-Sud (parallèle à Bh), qu'observerait-on sur l'aiguille aimantée lors de l'établissement du courant ?",
          "options": [
            "Elle ne dévierait pas d'un angle oblique : elle resterait orientée Nord-Sud (ou basculerait à 180° si B₀ > Bh)",
            "Elle dévierait à 45°",
            "Elle se mettrait à tourner sans fin",
            "Elle s'élèverait vers le haut"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux vecteurs colinéaires ne forment aucun angle : l'aiguille reste sur la même droite Nord-Sud et ne dévie pas de façon mesurable."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p05_q4",
          "type": "mcq",
          "prompt": "On mesure un angle de déviation de l'aiguille α = 45° (tan 45° = 1,0). Sachant que Bh = 2,0 * 10⁻⁵ T, quelle est la valeur du champ B₀ produit par le solénoïde ?",
          "options": [
            "B₀ = 2,0 * 10⁻⁵ T = Bh",
            "B₀ = 1,0 * 10⁻⁵ T",
            "B₀ = 4,0 * 10⁻⁵ T",
            "B₀ = 0 T"
          ],
          "correctAnswerIndex": 0,
          "explanation": "tan 45° = 1 => B₀ / Bh = 1 => B₀ = Bh = 2,0 * 10⁻⁵ T."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p05_q5",
          "type": "mcq",
          "prompt": "Si B₀ = 15 µT et Bh = 20 µT, que vaut la norme du champ magnétique résultant B ?",
          "options": [
            "B = 25 µT",
            "B = 35 µT",
            "B = 5 µT",
            "B = 300 µT"
          ],
          "correctAnswerIndex": 0,
          "explanation": "B = √(15² + 20²) = √(225 + 400) = √625 = 25 µT."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p05_q6",
          "type": "mcq",
          "prompt": "Pour un courant I₁ = 1,0 A, on observe une déviation α₁ = 30° (tan 30° ≈ 0,577). Quel courant I₂ faut-il pour obtenir une déviation α₂ = 45° (tan 45° = 1,0) ?",
          "options": [
            "I₂ ≈ 1,73 A",
            "I₂ = 1,50 A",
            "I₂ = 2,00 A",
            "I₂ = 1,25 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "tan α₂ / tan α₁ = I₂ / I₁ => I₂ = I₁ * (tan 45° / tan 30°) = 1,0 * (1,0 / 0,577) ≈ 1,73 A (et non 1,5 A)."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p05_q7",
          "type": "mcq",
          "prompt": "Quel est l'intérêt fondamental de la boussole des tangentes dans l'histoire de la physique ?",
          "options": [
            "Mesurer l'intensité d'un courant électrique en valeur absolue à partir des seules dimensions géométriques de la bobine et du champ terrestre",
            "Prédire la météo par électrostatique",
            "Accélérer des particules atomiques",
            "Convertir le courant continu en courant alternatif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle permettait d'étalonner et de mesurer des courants électriques sans aucun ressort mécanique, par simple équilibre magnétique sur le champ terrestre."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l05_champ_magnetique_p06",
      "order": 6,
      "title": "Autres sources magnétiques et applications technologiques",
      "summary": "Champ d'une bobine plate B = μ₀ N I / (2 R), champ d'un fil rectiligne B = μ₀ I / (2π d), blindage magnétique, et applications technologiques majeures (relais électromagnétiques, spectromètre de masse, moteurs électriques).",
      "conceptExplanation": "1. Le champ créé par une bobine plate (L << R) :\nUne bobine est dite plate lorsque sa longueur axiale L est très inférieure au rayon R de ses spires (L << R). Au centre géométrique O d'une bobine plate comportant N spires circulaires parcourue par un courant I, le champ B est perpendiculaire au plan des spires et son intensité vaut :\nB = μ₀ * (N * I) / (2 * R).\n\n2. Le champ créé par un fil conducteur rectiligne infini :\nÀ une distance d d'un fil rectiligne très long parcouru par un courant d'intensité I, les lignes de champ sont des cercles concentriques et l'intensité du champ est donnée par la loi de Biot et Savart :\nB = (μ₀ * I) / (2π * d).\nLe champ décroît inversement avec la distance d au fil.\n\n3. Le blindage magnétique :\nPour protéger des instruments de mesure sensibles (oscilloscopes, microscopes électroniques) des champs magnétiques parasites extérieurs, on les enferme dans une enceinte faite d'un matériau à très haute perméabilité magnétique (comme le mu-métal ou fer doux). Les lignes de champ sont canalisées à l'intérieur des parois de l'enceinte sans pénétrer dans l'espace intérieur protégé.\n\n4. Applications technologiques fondamentales :\n- Le relais électromagnétique : un électroaimant commandé par un courant de faible puissance attire une palette métallique qui ferme un circuit de forte puissance (sécurité industrielle) ;\n- Le spectromètre de masse : sépare les isotopes chimiques grâce à la déviation circulaire provoquée par un champ magnétique transversal B (rayon de trajectoire R = m v / (|q| B)) ;\n- Le confinement magnétique (Tokamak) : confinement d'un plasma de fusion thermonucléaire à plus de 100 millions de degrés par des champs magnétiques toroïdaux gigantesques.",
      "keyRule": "Au centre d'une bobine plate : B = μ₀ N I / (2 R). Près d'un fil rectiligne : B = μ₀ I / (2π d). Le blindage magnétique canalise les lignes de champ dans un matériau ferromagnétique à forte perméabilité.",
      "formulas": [
        {
          "name": "Champ au centre d'une bobine plate",
          "formula": "B = \\mu_0\\,\\frac{N\\,I}{2\\,R}",
          "note": "N spires de rayon R en mètres"
        },
        {
          "name": "Champ d'un fil rectiligne infini",
          "formula": "B = \\frac{\\mu_0\\,I}{2\\pi\\,d}",
          "note": "d distance au fil en mètres"
        },
        {
          "name": "Rayon de courbure dans un spectromètre",
          "formula": "R = \\frac{m\\,v}{|q|\\,B}",
          "note": "Séparation isotopique de masse m"
        }
      ],
      "workedExample": {
        "title": "Calcul du champ au centre d'une bobine plate",
        "statement": "Une bobine plate comporte N = 200 spires de rayon moyen R = 5,0 cm. Elle est parcourue par un courant d'intensité I = 1,5 A (μ₀ = 4π * 10⁻⁷ S.I.). Calcule l'intensité du champ B au centre de la bobine.",
        "methodSteps": [
          "Étape 1 : Convertir le rayon en mètres : R = 0,050 m.",
          "Étape 2 : Appliquer la formule de la bobine plate : B = μ₀ * (N * I) / (2 * R).",
          "Étape 3 : Effectuer l'application numérique : B = (4π * 10⁻⁷ * 200 * 1,5) / (2 * 0,050) = (1,200π * 10⁻⁴) / 0,10 = 12π * 10⁻⁴ T ≈ 3,77 * 10⁻³ T = 3,77 mT."
        ],
        "conclusion": "Le champ au centre de la bobine plate s'élève à 3,77 mT."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Synthèse comparative des formules de champ magnétique selon la géométrie",
        "tableData": {
          "headers": [
            "Source conductrice",
            "Formule du champ B",
            "Facteur géométrique",
            "Allure des lignes de champ",
            "Exemple typique d'usage"
          ],
          "rows": [
            [
              "Solénoïde long (intérieur)",
              "B = μ₀ (N / L) I",
              "n = N / L (densité axiale)",
              "Droites parallèles uniformes",
              "Chambre d'expérience, RMN"
            ],
            [
              "Bobine plate (au centre)",
              "B = μ₀ N I / (2 R)",
              "Rayon R des spires",
              "Perpendiculaire au plan de la spire",
              "Bobines de Helmholtz"
            ],
            [
              "Fil rectiligne infini",
              "B = μ₀ I / (2π d)",
              "Distance radiale d au fil",
              "Cercles concentriques centrés sur le fil",
              "Lignes haute tension"
            ],
            [
              "Paire de Helmholtz (2 bobines)",
              "B ≈ 0,715 μ₀ (N / R) I",
              "Écartement égal au rayon R",
              "Champ hautement uniforme au centre",
              "Mesure du rapport e / m de l'électron"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La bobine plate",
          "stepTheme": "Géométrie circulaire",
          "stepBadge": "L << R",
          "paragraphText": "Une bobine est dite plate lorsque sa dimension axiale (sa longueur L) est négligeable devant le rayon R de ses spires (L << R). Au centre O de cette bobine, le champ B est perpendiculaire au plan des spires et vaut B = μ₀ N I / (2 R).",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p06_q1",
            "type": "mcq",
            "prompt": "Si l'on divise par 2 le rayon R des spires d'une bobine plate tout en maintenant le nombre de spires N et le courant I constants, que devient le champ B au centre ?",
            "options": [
              "Il est multiplié par 2",
              "Il est divisé par 2",
              "Il est multiplié par 4",
              "Il reste inchangé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme B = μ₀ N I / (2 R), le champ est inversement proportionnel au rayon R : diviser R par 2 double l'intensité du champ au centre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Champ créé par un fil conducteur rectiligne",
          "stepTheme": "Loi de Biot et Savart",
          "stepBadge": "B ∝ 1 / d",
          "paragraphText": "À une distance d d'un fil rectiligne très long parcouru par un courant I, la valeur du champ magnétique est donnée par la loi de Biot et Savart : B = (μ₀ I) / (2π d). Le champ décroît proportionnellement à l'inverse de la distance au fil.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p06_q2",
            "type": "mcq",
            "prompt": "À une distance d = 2,0 cm d'un fil rectiligne parcouru par I = 10 A, que vaut le champ B (prendre μ₀ / 2π = 2 * 10⁻⁷ S.I.) ?",
            "options": [
              "B = 1,0 * 10⁻⁴ T = 0,10 mT",
              "B = 1,0 * 10⁻³ T",
              "B = 2,0 * 10⁻⁵ T",
              "B = 5,0 * 10⁻⁶ T"
            ],
            "correctAnswerIndex": 0,
            "explanation": "B = (2 * 10⁻⁷) * (10 / 0,020) = (2 * 10⁻⁷) * 500 = 1,0 * 10⁻⁴ T = 0,10 mT."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Principe du blindage magnétique",
          "stepTheme": "Protection magnétique",
          "stepBadge": "Mu-métal",
          "paragraphText": "Les champs magnétiques ne peuvent pas être arrêtés par des isolants ordinaires (plastique, bois, verre). Pour isoler un espace des champs magnétiques, on l'entoure d'une coque en matériau à très haute perméabilité magnétique (fer doux, alliage mu-métal) : les lignes de champ contournent la cavité intérieure en se concentrant dans les parois du blindage.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p06_q3",
            "type": "mcq",
            "prompt": "Quel matériau convient pour réaliser un blindage efficace contre les champs magnétiques continus ?",
            "options": [
              "Le fer doux ou un alliage ferromagnétique doux (mu-métal)",
              "Le plastique polyéthylène",
              "Une plaque de verre trempé",
              "Une feuille de carton épais"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seuls les matériaux ferromagnétiques à haute perméabilité magnétique peuvent canaliser les lignes de flux magnétique dans leur masse pour protéger le volume interne."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le relais électromagnétique",
          "stepTheme": "Interrupteur commandé",
          "stepBadge": "Sécurité électrique",
          "paragraphText": "Le relais électromagnétique est constitué d'un électroaimant qui, lorsqu'il est alimenté par un circuit de commande basse tension (ex. 12 V ou capteur électronique), attire une armature mobile actionnant des contacts pour ouvrir ou fermer un circuit de puissance haute tension (ex. 230 V / 400 V).",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p06_q4",
            "type": "mcq",
            "prompt": "Quel est l'avantage primordial d'un relais électromagnétique dans une armoire industrielle ?",
            "options": [
              "Assurer une isolation galvanique totale entre le circuit de commande et le circuit de puissance",
              "Produire de la lumière",
              "Remplacer les fusibles",
              "Transformer le courant continu en courant triphasé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le relais permet de commander de très fortes puissances sans aucun contact électrique direct entre l'utilisateur (ou le microcontrôleur) et le circuit haute tension."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les bobines d'Helmholtz",
          "stepTheme": "Champ uniforme ouvert",
          "stepBadge": "Distance = Rayon",
          "paragraphText": "Deux bobines plates identiques de rayon R, montées parallèlement sur le même axe et séparées d'une distance exactement égale à leur rayon R (d = R), parcourues par des courants dans le même sens, créent entre elles un domaine de champ magnétique hautement uniforme et facilement accessible pour les expériences de déviation de particules.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p06_q5",
            "type": "mcq",
            "prompt": "Dans un dispositif de bobines d'Helmholtz de rayon R = 15 cm, à quelle distance d l'une de l'autre doit-on espacer les deux bobines ?",
            "options": [
              "d = 15 cm (d = R)",
              "d = 30 cm (d = 2R)",
              "d = 7,5 cm (d = R/2)",
              "d = 1,5 cm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La condition mathématique d'annulation de la dérivée seconde spatiale du champ garantissant une zone uniforme maximale est strictement d = R."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : L'aimant ne stocke pas d'énergie infinie",
          "stepTheme": "Désaimantation",
          "stepBadge": "Température de Curie",
          "paragraphText": "L'aimantation d'un aimant permanent n'est pas indestructible : si on chauffe un aimant au-dessus d'une température critique appelée la température de Curie (environ 770 °C pour le fer pur), l'agitation thermique détruit totalement l'alignement des domaines magnétiques (domaines de Weiss) : le matériau devient paramagnétique et perd toute aimantation permanente.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p06_q6",
            "type": "mcq",
            "prompt": "Que se passe-t-il si l'on porte un aimant en acier au rouge vif dans la flamme d'un bec Bunsen ?",
            "options": [
              "Il perd définitivement son aimantation permanente car il dépasse sa température de Curie",
              "Son champ magnétique est multiplié par dix",
              "Ses pôles Nord et Sud s'inversent périodiquement",
              "Il devient supraconducteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au-delà de la température de Curie, l'agitation thermique désordonne irréversiblement les moments magnétiques microscopiques : l'aimant est démagnétisé."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le confinement magnétique dans les réacteurs à fusion (Tokamak)",
          "stepTheme": "Énergie du futur",
          "stepBadge": "Tokamak / ITER",
          "paragraphText": "Dans les réacteurs de recherche à fusion thermonucléaire (comme le projet international ITER), aucun matériau terrestre ne pouvant résister au contact d'un gaz chauffé à 150 millions de degrés, des électroaimants géants créent une cage magnétique toroïdale fermée qui maintient le plasma en lévitation sans toucher les parois.",
          "exercise": {
            "id": "terminale_d_physique_l05_champ_magnetique_p06_q7",
            "type": "mcq",
            "prompt": "Quel phénomène physique fondamental permet de confiner le plasma dans un Tokamak ?",
            "options": [
              "L'enroulement hélicoïdal des particules chargées le long des lignes d'un champ magnétique puissant",
              "L'attraction gravitationnelle des bobines",
              "La pression de l'air ambiant",
              "Une barrière laser continue"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les ions et électrons ultra-chauds du plasma sont contraints par la force magnétique de Lorentz à spiraler le long des lignes de champ magnétiques fermées sans toucher les parois solides."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p06_q1",
          "type": "mcq",
          "prompt": "Si l'on divise par 2 le rayon R des spires d'une bobine plate tout en maintenant le nombre de spires N et le courant I constants, que devient le champ B au centre ?",
          "options": [
            "Il est multiplié par 2",
            "Il est divisé par 2",
            "Il est multiplié par 4",
            "Il reste inchangé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme B = μ₀ N I / (2 R), le champ est inversement proportionnel au rayon R : diviser R par 2 double l'intensité du champ au centre."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p06_q2",
          "type": "mcq",
          "prompt": "À une distance d = 2,0 cm d'un fil rectiligne parcouru par I = 10 A, que vaut le champ B (prendre μ₀ / 2π = 2 * 10⁻⁷ S.I.) ?",
          "options": [
            "B = 1,0 * 10⁻⁴ T = 0,10 mT",
            "B = 1,0 * 10⁻³ T",
            "B = 2,0 * 10⁻⁵ T",
            "B = 5,0 * 10⁻⁶ T"
          ],
          "correctAnswerIndex": 0,
          "explanation": "B = (2 * 10⁻⁷) * (10 / 0,020) = (2 * 10⁻⁷) * 500 = 1,0 * 10⁻⁴ T = 0,10 mT."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p06_q3",
          "type": "mcq",
          "prompt": "Quel matériau convient pour réaliser un blindage efficace contre les champs magnétiques continus ?",
          "options": [
            "Le fer doux ou un alliage ferromagnétique doux (mu-métal)",
            "Le plastique polyéthylène",
            "Une plaque de verre trempé",
            "Une feuille de carton épais"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seuls les matériaux ferromagnétiques à haute perméabilité magnétique peuvent canaliser les lignes de flux magnétique dans leur masse pour protéger le volume interne."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p06_q4",
          "type": "mcq",
          "prompt": "Quel est l'avantage primordial d'un relais électromagnétique dans une armoire industrielle ?",
          "options": [
            "Assurer une isolation galvanique totale entre le circuit de commande et le circuit de puissance",
            "Produire de la lumière",
            "Remplacer les fusibles",
            "Transformer le courant continu en courant triphasé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le relais permet de commander de très fortes puissances sans aucun contact électrique direct entre l'utilisateur (ou le microcontrôleur) et le circuit haute tension."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p06_q5",
          "type": "mcq",
          "prompt": "Dans un dispositif de bobines d'Helmholtz de rayon R = 15 cm, à quelle distance d l'une de l'autre doit-on espacer les deux bobines ?",
          "options": [
            "d = 15 cm (d = R)",
            "d = 30 cm (d = 2R)",
            "d = 7,5 cm (d = R/2)",
            "d = 1,5 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La condition mathématique d'annulation de la dérivée seconde spatiale du champ garantissant une zone uniforme maximale est strictement d = R."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p06_q6",
          "type": "mcq",
          "prompt": "Que se passe-t-il si l'on porte un aimant en acier au rouge vif dans la flamme d'un bec Bunsen ?",
          "options": [
            "Il perd définitivement son aimantation permanente car il dépasse sa température de Curie",
            "Son champ magnétique est multiplié par dix",
            "Ses pôles Nord et Sud s'inversent périodiquement",
            "Il devient supraconducteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au-delà de la température de Curie, l'agitation thermique désordonne irréversiblement les moments magnétiques microscopiques : l'aimant est démagnétisé."
        },
        {
          "id": "terminale_d_physique_l05_champ_magnetique_p06_q7",
          "type": "mcq",
          "prompt": "Quel phénomène physique fondamental permet de confiner le plasma dans un Tokamak ?",
          "options": [
            "L'enroulement hélicoïdal des particules chargées le long des lignes d'un champ magnétique puissant",
            "L'attraction gravitationnelle des bobines",
            "La pression de l'air ambiant",
            "Une barrière laser continue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ions et électrons ultra-chauds du plasma sont contraints par la force magnétique de Lorentz à spiraler le long des lignes de champ magnétiques fermées sans toucher les parois solides."
        }
      ]
    }
  ]
};
