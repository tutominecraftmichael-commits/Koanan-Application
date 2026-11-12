import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : Terminales C, D, E — Thème : Électricité — Titre : Auto-induction électromagnétique
export const PHYSIQUE_TLE_CD_L08_AUTO_INDUCTION: CurriculumChapter = {
  "id": "terminale_d_physique_l08_auto_induction",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ],
  "order": 8,
  "title": "Leçon 8 : Auto-induction électromagnétique",
  "summary": "Étude approfondie de l'auto-induction électromagnétique : mise en évidence expérimentale (retard à l'allumage, étincelle de rupture, rôle de la diode de roue libre), flux magnétique propre Φ = L . i, inductance propre L d'un solénoïde en Henry (H), force électromotrice d'auto-induction e = -L (di/dt), tension aux bornes d'une bobine réelle u = r i + L (di/dt), énergie magnétique emmagasinée Em = 1/2 L i², et dynamique transitoire du dipôle RL avec constante de temps τ = L / (R + r).",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : Terminales C, D, E – Thème : Électricité – Auto-induction)",
  "points": [
    {
      "id": "terminale_d_physique_l08_p01",
      "order": 1,
      "title": "Mise en évidence expérimentale du phénomène d'auto-induction",
      "summary": "Définition de l'auto-induction, expérience des deux lampes en dérivation, retard à l'établissement du courant, surtension à l'ouverture du circuit (étincelle de rupture) et rôle protecteur de la diode de roue libre.",
      "conceptExplanation": "1. Définition de l'auto-induction :\nL'auto-induction est un cas particulier d'induction électromagnétique où le circuit inducteur (qui crée le champ magnétique variable) et le circuit induit (où apparaît la force électromotrice) sont confondus en un seul et même circuit.\n\n2. Expérience de retard à l'allumage (fermeture du circuit) :\nOn monte en dérivation sur un générateur continu de tension E deux branches :\n- Branche 1 : un conducteur ohmique de résistance R1 en série avec une lampe L1 ;\n- Branche 2 : une bobine à noyau de fer doux (inductance L, résistance interne r = R1) en série avec une lampe L2 identique à L1.\nÀ la fermeture de l'interrupteur, L1 s'allume instantanément, tandis que L2 s'allume avec un retard visible de plusieurs dixièmes de seconde avant d'atteindre le même éclat que L1. La bobine s'oppose à l'établissement brutal du courant dans sa branche.\n\n3. Expérience d'ouverture du circuit (étincelle de rupture) :\nLorsqu'on ouvre brutalement un circuit comportant une bobine parcourue par un fort courant, on observe une étincelle éclatante entre les contacts de l'interrupteur. L'annulation brutale du courant (di/dt très négatif) engendre une très forte surtension d'auto-induction capable d'ioniser l'air.\n\n4. Rôle de la diode de roue libre :\nPour protéger les transistors ou relais contre cette surtension destructrice, on branche une diode en dérivation inverse aux bornes de la bobine. À l'ouverture, la diode devient passante et assure une extinction douce et continue du courant.",
      "keyRule": "D'après la loi de Lenz, la bobine s'oppose systématiquement à toute variation du courant qui la traverse : elle freine son établissement à la fermeture et retarde son annulation à l'ouverture.",
      "formulas": [
        {
          "name": "Loi de modération de Lenz pour l'auto-induction",
          "formula": "e_\\text{auto} = -\\frac{\\mathrm{d}\\Phi_p}{\\mathrm{d}t} = -L\\,\\frac{\\mathrm{d}i}{\\mathrm{d}t}",
          "note": "Opposition stricte à la variation de courant di/dt"
        }
      ],
      "workedExample": {
        "title": "Analyse expérimentale d'un allumage temporisé",
        "statement": "Dans un circuit comprenant deux branches en parallèle alimentées par un générateur E = 12 V : la branche A contient un résistor R = 24 Ω et une lampe LA ; la branche B contient une bobine (L = 1,2 H, r = 24 Ω) et une lampe LB. À t = 0, on ferme le circuit. Décris le comportement des deux lampes et calcule l'intensité finale dans chaque branche.",
        "methodSteps": [
          "Étape 1 : Analyser le comportement à t = 0. Dans la branche purement ohmique A, le courant s'établit quasi instantanément : LA brille immédiatement. Dans la branche B, la variation di/dt fait naître une f.é.m. d'auto-induction d'opposition e < 0 qui freine l'installation du courant : LB s'allume avec un retard progressif.",
          "Étape 2 : Analyser le régime permanent établi (t >> τ). Lorsque le courant cesse de varier (di/dt = 0), la f.é.m. d'auto-induction s'annule : e = 0.",
          "Étape 3 : Calculer l'intensité finale. Puisque r = R = 24 Ω, les deux branches ont la même résistance : IA = IB = E / 24 = 12 / 24 = 0,50 A. Les deux lampes brillent avec un éclat parfaitement identique en régime permanent."
        ],
        "conclusion": "En régime permanent continu, la bobine n'exerce plus aucun effet d'auto-induction et se comporte comme un conducteur ohmique ordinaire."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison des comportements de la bobine selon la phase",
        "tableData": {
          "headers": [
            "Phase temporelle",
            "Variation du courant",
            "f.é.m. d'auto-induction",
            "Comportement physique",
            "Manifestation concrète"
          ],
          "rows": [
            [
              "Fermeture (t = 0⁺)",
              "di/dt > 0 (croissance)",
              "e = -L(di/dt) < 0",
              "Freinage de l'établissement",
              "Retard visible à l'allumage d'une lampe"
            ],
            [
              "Régime permanent (t >> τ)",
              "di/dt = 0 (constant)",
              "e = 0 V",
              "Résistor pur de résistance r",
              "Éclat nominal stable sans surtension"
            ],
            [
              "Ouverture brutale",
              "di/dt << 0 (chute ultra-rapide)",
              "e = -L(di/dt) >> 0",
              "Maintien forcé du courant",
              "Étincelle de rupture aux bornes de l'interrupteur"
            ],
            [
              "Avec diode de roue libre",
              "di/dt < 0 (décroissance guidée)",
              "e > 0 bornée par la diode",
              "Décharge douce dans la boucle",
              "Protection totale contre les arcs et surtensions"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition générale de l'auto-induction",
          "stepTheme": "Fondement électrodynamique",
          "stepBadge": "Circuit inducteur = induit",
          "paragraphText": "On appelle auto-induction le phénomène d'induction électromagnétique dans lequel le circuit créateur du champ magnétique variable (le circuit inducteur) et le circuit dans lequel apparaît la f.é.m. induite (le circuit induit) sont un seul et unique circuit.",
          "exercise": {
            "id": "terminale_d_physique_l08_p01_q1",
            "type": "mcq",
            "prompt": "Quelle caractéristique distingue rigoureusement le phénomène d'auto-induction de l'induction électromagnétique classique ?",
            "options": [
              "Le circuit inducteur et le circuit induit constituent un seul et même dipôle électrique",
              "Il requiert la présence obligatoire d'un aimant permanent en mouvement mécanique",
              "Le courant qui parcourt le circuit doit obligatoirement être continu et constant",
              "La tension produite est toujours rigoureusement égale à zéro volt"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans l'auto-induction, le champ magnétique variable est produit par les variations du courant circulant dans le circuit lui-même."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Retard à l'établissement du courant à la fermeture",
          "stepTheme": "Expérience des deux lampes",
          "stepBadge": "Opposition à la montée",
          "paragraphText": "Lors de la fermeture d'un circuit contenant une bobine, l'intensité ne passe pas instantanément de 0 à sa valeur maximale : la bobine s'oppose à la croissance du courant en développant une f.é.m. induite négative. On observe un retard visible à l'allumage.",
          "exercise": {
            "id": "terminale_d_physique_l08_p01_q2",
            "type": "mcq",
            "prompt": "Dans un montage comprenant une lampe L1 en série avec un résistor R et une lampe L2 en série avec une bobine (L, r=R), qu'observe-t-on à la mise sous tension ?",
            "options": [
              "L1 s'allume instantanément, tandis que L2 s'allume avec un retard progressif",
              "L2 s'allume immédiatement et L1 reste éteinte en permanence",
              "Les deux lampes s'allument à la même milliseconde exacte",
              "L2 grille immédiatement sous l'effet d'une surtension instantanée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La bobine freine la montée du courant dans sa branche : L2 s'allume donc avec un retard caractéristique par rapport à L1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Étincelle de rupture à l'ouverture du circuit",
          "stepTheme": "Coupure inductive",
          "stepBadge": "Surtension |di/dt| élevé",
          "paragraphText": "À l'ouverture brutale du circuit, le courant tend à s'annuler instantanément (durée Δt extrêmement courte, donc di/dt très grand en valeur absolue). La f.é.m. induite e = -L(di/dt) atteint alors plusieurs centaines de volts, provoquant une étincelle de rupture par ionisation de l'air.",
          "exercise": {
            "id": "terminale_d_physique_l08_p01_q3",
            "type": "mcq",
            "prompt": "Quelle est la cause physique de l'étincelle de rupture observée à l'ouverture des contacts d'un interrupteur alimentant un gros électroaimant ?",
            "options": [
              "Une forte surtension d'auto-induction due à la décroissance brutale du courant (|di/dt| très grand)",
              "L'échauffement normal des fils de connexion par effet Joule continu",
              "L'annulation immédiate de la vitesse des électrons libres dans le cuivre",
              "Une baisse brutale de la résistance ohmique de l'isolant de l'interrupteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme le temps d'ouverture est infime, le rapport |di/dt| est colossal, ce qui engendre une surtension e = -L(di/dt) très supérieure à la tension du générateur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Protection électronique : la diode de roue libre",
          "stepTheme": "Sécurité des circuits",
          "stepBadge": "Diode antiparallèle",
          "paragraphText": "Pour protéger les circuits électroniques (transistors, microcontrôleurs) contre les surtensions destructrices de rupture inductive, on connecte une diode dite de roue libre en parallèle inverse sur la bobine. Bloquée lors de la commande normale, elle conduit à l'ouverture pour évacuer l'énergie sans arc.",
          "exercise": {
            "id": "terminale_d_physique_l08_p01_q4",
            "type": "mcq",
            "prompt": "Comment doit être connectée une diode de roue libre pour protéger un transistor commandant une bobine de relais ?",
            "options": [
              "En parallèle inverse aux bornes de la bobine (bloquée sous la tension d'alimentation normale)",
              "En série avec la bobine dans le sens passant du courant d'alimentation",
              "En parallèle sur l'alimentation pour court-circuiter la source",
              "En série avec l'interrupteur mécanique pour empêcher sa fermeture"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La diode est montée en inverse aux bornes de la charge inductive : bloquée au repos, elle devient passante à l'ouverture pour absorber la surtension."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le piège du régime continu permanent",
          "stepTheme": "Régime établi",
          "stepBadge": "di/dt = 0 => e = 0",
          "paragraphText": "En régime continu permanent, l'intensité du courant i est strictement constante au cours du temps. Par conséquent, sa dérivée temporelle est nulle (di/dt = 0) et la f.é.m. d'auto-induction est rigoureusement nulle (e = 0). La bobine se comporte comme un conducteur ohmique ordinaire de résistance r.",
          "exercise": {
            "id": "terminale_d_physique_l08_p01_q5",
            "type": "mcq",
            "prompt": "Une bobine d'inductance L = 2,5 H et de résistance r = 10 Ω est branchée depuis 10 minutes sous une tension continue constante U = 20 V. Que vaut la f.é.m. d'auto-induction e ?",
            "options": [
              "e = 0 V car l'intensité est rigoureusement stationnaire",
              "e = -50 V",
              "e = +20 V",
              "e = -25 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En régime permanent, le courant est constant : di/dt = 0, donc e = -L(di/dt) = 0 V."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Rôle du noyau de fer doux",
          "stepTheme": "Amplification ferromagnétique",
          "stepBadge": "µr >> 1",
          "paragraphText": "L'introduction d'un noyau en fer doux au cœur du solénoïde canalise les lignes d'induction et multiplie le champ magnétique intérieur par la perméabilité relative µr (de l'ordre de 500 à 5000). L'inductance L est démultipliée dans les mêmes proportions, ce qui allonge considérablement le retard à l'allumage.",
          "exercise": {
            "id": "terminale_d_physique_l08_p01_q6",
            "type": "mcq",
            "prompt": "Que se produit-il sur la durée du retard à l'allumage d'une lampe en série avec une bobine si l'on retire son noyau de fer doux ?",
            "options": [
              "Le retard diminue drastiquement et devient presque imperceptible à l'œil nu",
              "Le retard augmente de façon spectaculaire",
              "Le retard ne varie pas car la résistance interne du fil de cuivre reste identique",
              "La lampe ne peut plus du tout s'allumer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans noyau de fer, l'inductance L chute fortement, la constante de temps τ diminue, et l'établissement du courant devient quasi instantané."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Conformité stricte à la loi de modération de Lenz",
          "stepTheme": "Loi de Lenz",
          "stepBadge": "Modération de la cause",
          "paragraphText": "La f.é.m. d'auto-induction illustre directement la loi de Lenz : lorsque le courant inducteur cherche à croître, le courant auto-induit circule en sens inverse pour freiner cette croissance ; lorsqu'il cherche à décroître, le courant auto-induit circule dans le même sens pour prolonger son passage.",
          "exercise": {
            "id": "terminale_d_physique_l08_p01_q7",
            "type": "mcq",
            "prompt": "Lorsqu'un opérateur tente de diminuer rapidement le courant traversant une inductance, dans quel sens agit le courant auto-induit ?",
            "options": [
              "Dans le même sens que le courant principal pour s'opposer à son extinction",
              "En sens inverse pour précipiter l'annulation du courant",
              "Il s'annule immédiatement pour respecter la loi d'Ohm",
              "Il oscille spontanément à une fréquence indéterminée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après la loi de Lenz, l'effet s'oppose à la cause. Si la cause est la diminution de l'intensité, l'induction agit dans le même sens pour tenter de maintenir le courant."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l08_p01_q1",
          "type": "mcq",
          "prompt": "Quelle caractéristique distingue rigoureusement le phénomène d'auto-induction de l'induction électromagnétique classique ?",
          "options": [
            "Le circuit inducteur et le circuit induit constituent un seul et même dipôle électrique",
            "Il requiert la présence obligatoire d'un aimant permanent en mouvement mécanique",
            "Le courant qui parcourt le circuit doit obligatoirement être continu et constant",
            "La tension produite est toujours rigoureusement égale à zéro volt"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans l'auto-induction, le champ magnétique variable est produit par les variations du courant circulant dans le circuit lui-même."
        },
        {
          "id": "terminale_d_physique_l08_p01_q2",
          "type": "mcq",
          "prompt": "Dans un montage comprenant une lampe L1 en série avec un résistor R et une lampe L2 en série avec une bobine (L, r=R), qu'observe-t-on à la mise sous tension ?",
          "options": [
            "L1 s'allume instantanément, tandis que L2 s'allume avec un retard progressif",
            "L2 s'allume immédiatement et L1 reste éteinte en permanence",
            "Les deux lampes s'allument à la même milliseconde exacte",
            "L2 grille immédiatement sous l'effet d'une surtension instantanée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La bobine freine la montée du courant dans sa branche : L2 s'allume donc avec un retard caractéristique par rapport à L1."
        },
        {
          "id": "terminale_d_physique_l08_p01_q3",
          "type": "mcq",
          "prompt": "Quelle est la cause physique de l'étincelle de rupture observée à l'ouverture des contacts d'un interrupteur alimentant un gros électroaimant ?",
          "options": [
            "Une forte surtension d'auto-induction due à la décroissance brutale du courant (|di/dt| très grand)",
            "L'échauffement normal des fils de connexion par effet Joule continu",
            "L'annulation immédiate de la vitesse des électrons libres dans le cuivre",
            "Une baisse brutale de la résistance ohmique de l'isolant de l'interrupteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme le temps d'ouverture est infime, le rapport |di/dt| est colossal, ce qui engendre une surtension e = -L(di/dt) très supérieure à la tension du générateur."
        },
        {
          "id": "terminale_d_physique_l08_p01_q4",
          "type": "mcq",
          "prompt": "Comment doit être connectée une diode de roue libre pour protéger un transistor commandant une bobine de relais ?",
          "options": [
            "En parallèle inverse aux bornes de la bobine (bloquée sous la tension d'alimentation normale)",
            "En série avec la bobine dans le sens passant du courant d'alimentation",
            "En parallèle sur l'alimentation pour court-circuiter la source",
            "En série avec l'interrupteur mécanique pour empêcher sa fermeture"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La diode est montée en inverse aux bornes de la charge inductive : bloquée au repos, elle devient passante à l'ouverture pour absorber la surtension."
        },
        {
          "id": "terminale_d_physique_l08_p01_q5",
          "type": "mcq",
          "prompt": "Une bobine d'inductance L = 2,5 H et de résistance r = 10 Ω est branchée depuis 10 minutes sous une tension continue constante U = 20 V. Que vaut la f.é.m. d'auto-induction e ?",
          "options": [
            "e = 0 V car l'intensité est rigoureusement stationnaire",
            "e = -50 V",
            "e = +20 V",
            "e = -25 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En régime permanent, le courant est constant : di/dt = 0, donc e = -L(di/dt) = 0 V."
        },
        {
          "id": "terminale_d_physique_l08_p01_q6",
          "type": "mcq",
          "prompt": "Que se produit-il sur la durée du retard à l'allumage d'une lampe en série avec une bobine si l'on retire son noyau de fer doux ?",
          "options": [
            "Le retard diminue drastiquement et devient presque imperceptible à l'œil nu",
            "Le retard augmente de façon spectaculaire",
            "Le retard ne varie pas car la résistance interne du fil de cuivre reste identique",
            "La lampe ne peut plus du tout s'allumer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans noyau de fer, l'inductance L chute fortement, la constante de temps τ diminue, et l'établissement du courant devient quasi instantané."
        },
        {
          "id": "terminale_d_physique_l08_p01_q7",
          "type": "mcq",
          "prompt": "Lorsqu'un opérateur tente de diminuer rapidement le courant traversant une inductance, dans quel sens agit le courant auto-induit ?",
          "options": [
            "Dans le même sens que le courant principal pour s'opposer à son extinction",
            "En sens inverse pour précipiter l'annulation du courant",
            "Il s'annule immédiatement pour respecter la loi d'Ohm",
            "Il oscille spontanément à une fréquence indéterminée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la loi de Lenz, l'effet s'oppose à la cause. Si la cause est la diminution de l'intensité, l'induction agit dans le même sens pour tenter de maintenir le courant."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l08_p02",
      "order": 2,
      "title": "Flux magnétique propre et inductance propre d'un solénoïde",
      "summary": "Expression du flux propre Φ = L . i, définition et unité de l'inductance L (le Henry, H), formule géométrique du solénoïde L = μ0 (N² / ℓ) S, équivalences dimensionnelles et indépendance vis-à-vis du courant.",
      "conceptExplanation": "1. Notion de flux magnétique propre :\nLorsqu'un circuit fermé est parcouru par un courant d'intensité i, ce courant crée dans tout l'espace environnant un champ magnétique propre B proportionnel à i. Le flux magnétique de ce champ propre à travers le circuit lui-même est appelé flux propre, noté Φ_p ou simplement Φ.\n\n2. Définition de l'inductance propre L :\nPuisque le champ B est proportionnel à i, le flux propre Φ est également proportionnel à l'intensité i. Le coefficient de proportionnalité est l'inductance propre du circuit, notée L :\nΦ = L · i.\n- Φ est exprimé en Webers (Wb) ;\n- i est exprimé en Ampères (A) ;\n- L est exprimé en Henrys (symbole : H).\n\n3. Inductance propre d'un solénoïde long dans l'air :\nConsidérons un solénoïde de longueur ℓ, comportant N spires jointives de section droite S. Le champ magnétique au centre vaut :\nB = μ0 · (N / ℓ) · i.\nLe flux propre total à travers les N spires vaut :\nΦ = N · B · S = N · [μ0 · (N / ℓ) · i] · S = μ0 · (N² / ℓ) · S · i.\nPar identification avec Φ = L · i, on déduit l'inductance propre du solénoïde :\nL = μ0 · (N² / ℓ) · S = μ0 · n² · V,\noù n = N / ℓ est le nombre de spires par mètre, V = S · ℓ est le volume intérieur du solénoïde, et μ0 = 4π × 10⁻⁷ H·m⁻¹ est la perméabilité magnétique du vide.",
      "keyRule": "L'inductance L d'un solénoïde ne dépend QUE de sa géométrie : L = μ0 (N² / ℓ) S. Elle est proportionnelle au carré du nombre de spires N² et au volume intérieur V.",
      "formulas": [
        {
          "name": "Relation flux propre - intensité",
          "formula": "\\Phi = L\\,i",
          "note": "Φ en Wb, L en Henrys (H), i en A"
        },
        {
          "name": "Inductance propre du solénoïde long",
          "formula": "L = \\mu_0\\,\\frac{N^2}{\\ell}\\,S = \\mu_0\\,n^2\\,V",
          "note": "μ0 = 4π × 10⁻⁷ H·m⁻¹, S en m², ℓ en m"
        }
      ],
      "workedExample": {
        "title": "Calcul de l'inductance et du flux d'un solénoïde d'expérimentation",
        "statement": "Un solénoïde long sans noyau de fer a une longueur ℓ = 40 cm, un diamètre d = 4,0 cm (rayon r = 2,0 cm), et possède N = 800 spires jointives. Il est traversé par un courant i = 1,5 A. (On donne μ0 = 4π × 10⁻⁷ H·m⁻¹ et π ≈ 3,1416).\\n1. Calcule la section S du solénoïde.\\n2. Calcule l'inductance propre L.\\n3. Calcule le flux magnétique propre total Φ.",
        "methodSteps": [
          "Étape 1 : Calculer la section droite S en m² : S = π * r² = 3,1416 * (0,020)² = 3,1416 * 4,0 * 10⁻⁴ ≈ 1,257 * 10⁻³ m².",
          "Étape 2 : Appliquer la formule de l'inductance : L = μ0 * (N² / ℓ) * S = 4π * 10⁻⁷ * (800² / 0,40) * 1,257 * 10⁻³ = 4π * 10⁻⁷ * (640 000 / 0,40) * 1,257 * 10⁻³ = 4π * 10⁻⁷ * (1,6 * 10⁶) * 1,257 * 10⁻³ = 6,4π * 10⁻¹ * 1,257 * 10⁻³ ≈ 2,53 * 10⁻³ H = 2,53 mH.",
          "Étape 3 : Calculer le flux propre total : Φ = L * i = 2,53 * 10⁻³ * 1,5 ≈ 3,80 * 10⁻³ Wb = 3,80 mWb."
        ],
        "conclusion": "L'inductance vaut 2,53 mH et le flux propre total embrassé sous 1,5 A est de 3,80 mWb."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Paramètres influençant l'inductance propre d'un solénoïde",
        "tableData": {
          "headers": [
            "Paramètre physique",
            "Modification appliquée",
            "Impact sur l'inductance L",
            "Raison théorique"
          ],
          "rows": [
            [
              "Nombre de spires N",
              "Doublé (N' = 2N à ℓ et S constants)",
              "Multipliée par 4",
              "Dépendance quadratique en N² (L ∝ N²)"
            ],
            [
              "Rayon du cylindre r",
              "Doublé (section S' = 4S)",
              "Multipliée par 4",
              "Section proportionnelle au carré du rayon (S = π r²)"
            ],
            [
              "Longueur ℓ du bobinage",
              "Doublée (à N et S constants)",
              "Divisée par 2",
              "Densité de spires réduite (L ∝ 1/ℓ)"
            ],
            [
              "Noyau ferromagnétique",
              "Ajout d'un noyau de fer doux",
              "Multipliée par µr (500 à 5000)",
              "Perméabilité magnétique effective µ = µ0 · µr"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du Henry et de l'inductance L",
          "stepTheme": "Unité et grandeur",
          "stepBadge": "Φ = L i [H]",
          "paragraphText": "L'inductance propre L est le coefficient de proportionnalité reliant le flux magnétique propre Φ d'un circuit au courant i qui le parcourt (Φ = L · i). Un circuit a une inductance de 1 Henry (1 H) si un courant de 1 Ampère y produit un flux propre de 1 Weber (1 H = 1 Wb / 1 A).",
          "exercise": {
            "id": "terminale_d_physique_l08_p02_q1",
            "type": "mcq",
            "prompt": "Un enroulement inductif traversé par un courant i = 2,0 A embrasse un flux magnétique propre total Φ = 0,16 Wb. Que vaut son inductance propre L ?",
            "options": [
              "L = 0,080 H = 80 mH",
              "L = 0,32 H",
              "L = 12,5 H",
              "L = 0,020 H"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L = Φ / i = 0,16 Wb / 2,0 A = 0,080 H = 80 mH."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Formule de l'inductance d'un solénoïde long",
          "stepTheme": "Calcul analytique",
          "stepBadge": "L = μ0 (N²/ℓ) S",
          "paragraphText": "Pour un solénoïde cylindrique à spires jointives sans fer de longueur ℓ, section droite S et comportant N spires, l'inductance s'exprime par L = μ0 (N² / ℓ) S = μ0 n² V, où n = N/ℓ est la densité linéique de spires et V le volume interne.",
          "exercise": {
            "id": "terminale_d_physique_l08_p02_q2",
            "type": "mcq",
            "prompt": "Si l'on triple le nombre total de spires N d'un solénoïde sans modifier sa longueur ℓ ni son diamètre, que devient son inductance propre L ?",
            "options": [
              "Elle est multipliée par 9",
              "Elle est multipliée par 3",
              "Elle est divisée par 3",
              "Elle reste invariable car le volume intérieur n'a pas changé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L est proportionnelle au carré du nombre de spires (N²). Multiplier N par 3 multiplie L par 3² = 9."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Équivalences dimensionnelles du Henry",
          "stepTheme": "Analyse dimensionnelle",
          "stepBadge": "1 H = 1 Ω.s = 1 V.s.A⁻¹",
          "paragraphText": "Dans le Système International, le Henry (H) équivaut à : 1 H = 1 Wb·A⁻¹ = 1 V·s·A⁻¹ = 1 Ω·s = 1 J·A⁻². L'équivalence 1 H = 1 Ω·s est particulièrement utile lors de l'étude des circuits transitoires où le rapport L/R s'exprime en secondes.",
          "exercise": {
            "id": "terminale_d_physique_l08_p02_q3",
            "type": "mcq",
            "prompt": "Laquelle des unités composées suivantes est rigoureusement homogène au Henry (H) ?",
            "options": [
              "Ohm-seconde (Ω · s)",
              "Volt par seconde (V · s⁻¹)",
              "Weber par Ampère carré (Wb · A⁻²)",
              "Joule par seconde (J · s⁻¹)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme u = L (di/dt), [L] = [u]·[t]/[i] = V·s·A⁻¹ = (V/A)·s = Ω·s."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calcul du flux propre à travers N spires",
          "stepTheme": "Méthode de calcul",
          "stepBadge": "Φ = N B S",
          "paragraphText": "Pour déterminer le flux propre embrassé par une bobine de N spires, on calcule d'abord le champ magnétique axial au centre B = μ0 (N/ℓ) i, puis le flux élémentaire à travers une spire Φ1 = B · S, et enfin le flux global Φ = N · Φ1 = N B S.",
          "exercise": {
            "id": "terminale_d_physique_l08_p02_q4",
            "type": "mcq",
            "prompt": "Un solénoïde de N = 400 spires de section S = 25 cm² (0,0025 m²) crée un champ intérieur uniforme B = 0,050 T. Que vaut son flux magnétique propre total ?",
            "options": [
              "Φ = 0,050 Wb = 50 mWb",
              "Φ = 0,50 Wb",
              "Φ = 0,002 Wb",
              "Φ = 2,5 Wb"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Φ = N * B * S = 400 * 0,050 * 0,0025 = 20 * 0,0025 = 0,050 Wb = 50 mWb."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Conversion rigoureuse des longueurs et surfaces",
          "stepTheme": "Unités géométriques",
          "stepBadge": "Attention aux cm²",
          "paragraphText": "Dans la formule L = μ0 (N² / ℓ) S, la longueur ℓ doit être impérativement exprimée en mètres (1 cm = 10⁻² m) et la section S en mètres carrés (1 cm² = 10⁻⁴ m² et 1 mm² = 10⁻⁶ m²). Une erreur sur la puissance de dix fausse le résultat de plusieurs ordres de grandeur.",
          "exercise": {
            "id": "terminale_d_physique_l08_p02_q5",
            "type": "mcq",
            "prompt": "Une bobine cylindrique possède un rayon intérieur r = 10 cm. Quelle est sa section S exprimée en mètres carrés SI ?",
            "options": [
              "S = 3,14 × 10⁻² m²",
              "S = 3,14 × 10⁻⁴ m²",
              "S = 3,14 × 10⁻¹ m²",
              "S = 0,314 m²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "r = 10 cm = 0,10 m => S = π * r² = 3,1416 * (0,10)² = 3,1416 * 0,01 = 3,14 × 10⁻² m²."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Validité de la formule pour un solénoïde infini",
          "stepTheme": "Limite théorique",
          "stepBadge": "ℓ >> r",
          "paragraphText": "La relation L = μ0 (N² / ℓ) S suppose que le champ magnétique est rigoureusement uniforme sur toute la longueur du solénoïde, ce qui n'est vérifié que pour un solénoïde long tel que ℓ ≥ 10 r. Pour une bobine plate ou courte, les fuites latérales réduisent l'inductance réelle de 20 % à 40 %.",
          "exercise": {
            "id": "terminale_d_physique_l08_p02_q6",
            "type": "mcq",
            "prompt": "Pour lequel de ces solénoïdes la formule L = μ0 (N²/ℓ) S est-elle la plus précise ?",
            "options": [
              "Un solénoïde de longueur ℓ = 80 cm et de rayon r = 2,0 cm",
              "Un solénoïde de longueur ℓ = 5,0 cm et de rayon r = 10 cm",
              "Une bobine plate d'épaisseur ℓ = 1,0 cm et de rayon r = 25 cm",
              "Elle est d'une exactitude absolue quelle que soit la forme géométrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour ℓ = 80 cm et r = 2 cm, le rapport ℓ/r = 40 >> 10 : le champ est quasi parfaitement uniforme sur la quasi-totalité de l'enroulement."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Indépendance de L par rapport au courant",
          "stepTheme": "Composant linéaire",
          "stepBadge": "L = Cte sans fer",
          "paragraphText": "Pour une bobine sans matériau ferromagnétique (bobine à air), l'inductance propre L est une constante physique intrinsèque indépendante de la valeur de l'intensité i. Le dipôle bobine est alors un dipôle rigoureusement linéaire.",
          "exercise": {
            "id": "terminale_d_physique_l08_p02_q7",
            "type": "mcq",
            "prompt": "Si l'on fait passer le courant traversant une bobine à air de 0,5 A à 2,0 A, comment varie son inductance propre L ?",
            "options": [
              "L reste rigoureusement constante",
              "L est multipliée par 4",
              "L est multipliée par 16",
              "L est divisée par 4"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour une bobine à air, L ne dépend que de ses dimensions géométriques (N, ℓ, S) et nullement de l'intensité i."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l08_p02_q1",
          "type": "mcq",
          "prompt": "Un enroulement inductif traversé par un courant i = 2,0 A embrasse un flux magnétique propre total Φ = 0,16 Wb. Que vaut son inductance propre L ?",
          "options": [
            "L = 0,080 H = 80 mH",
            "L = 0,32 H",
            "L = 12,5 H",
            "L = 0,020 H"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L = Φ / i = 0,16 Wb / 2,0 A = 0,080 H = 80 mH."
        },
        {
          "id": "terminale_d_physique_l08_p02_q2",
          "type": "mcq",
          "prompt": "Si l'on triple le nombre total de spires N d'un solénoïde sans modifier sa longueur ℓ ni son diamètre, que devient son inductance propre L ?",
          "options": [
            "Elle est multipliée par 9",
            "Elle est multipliée par 3",
            "Elle est divisée par 3",
            "Elle reste invariable car le volume intérieur n'a pas changé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L est proportionnelle au carré du nombre de spires (N²). Multiplier N par 3 multiplie L par 3² = 9."
        },
        {
          "id": "terminale_d_physique_l08_p02_q3",
          "type": "mcq",
          "prompt": "Laquelle des unités composées suivantes est rigoureusement homogène au Henry (H) ?",
          "options": [
            "Ohm-seconde (Ω · s)",
            "Volt par seconde (V · s⁻¹)",
            "Weber par Ampère carré (Wb · A⁻²)",
            "Joule par seconde (J · s⁻¹)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme u = L (di/dt), [L] = [u]·[t]/[i] = V·s·A⁻¹ = (V/A)·s = Ω·s."
        },
        {
          "id": "terminale_d_physique_l08_p02_q4",
          "type": "mcq",
          "prompt": "Un solénoïde de N = 400 spires de section S = 25 cm² (0,0025 m²) crée un champ intérieur uniforme B = 0,050 T. Que vaut son flux magnétique propre total ?",
          "options": [
            "Φ = 0,050 Wb = 50 mWb",
            "Φ = 0,50 Wb",
            "Φ = 0,002 Wb",
            "Φ = 2,5 Wb"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Φ = N * B * S = 400 * 0,050 * 0,0025 = 20 * 0,0025 = 0,050 Wb = 50 mWb."
        },
        {
          "id": "terminale_d_physique_l08_p02_q5",
          "type": "mcq",
          "prompt": "Une bobine cylindrique possède un rayon intérieur r = 10 cm. Quelle est sa section S exprimée en mètres carrés SI ?",
          "options": [
            "S = 3,14 × 10⁻² m²",
            "S = 3,14 × 10⁻⁴ m²",
            "S = 3,14 × 10⁻¹ m²",
            "S = 0,314 m²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "r = 10 cm = 0,10 m => S = π * r² = 3,1416 * (0,10)² = 3,1416 * 0,01 = 3,14 × 10⁻² m²."
        },
        {
          "id": "terminale_d_physique_l08_p02_q6",
          "type": "mcq",
          "prompt": "Pour lequel de ces solénoïdes la formule L = μ0 (N²/ℓ) S est-elle la plus précise ?",
          "options": [
            "Un solénoïde de longueur ℓ = 80 cm et de rayon r = 2,0 cm",
            "Un solénoïde de longueur ℓ = 5,0 cm et de rayon r = 10 cm",
            "Une bobine plate d'épaisseur ℓ = 1,0 cm et de rayon r = 25 cm",
            "Elle est d'une exactitude absolue quelle que soit la forme géométrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour ℓ = 80 cm et r = 2 cm, le rapport ℓ/r = 40 >> 10 : le champ est quasi parfaitement uniforme sur la quasi-totalité de l'enroulement."
        },
        {
          "id": "terminale_d_physique_l08_p02_q7",
          "type": "mcq",
          "prompt": "Si l'on fait passer le courant traversant une bobine à air de 0,5 A à 2,0 A, comment varie son inductance propre L ?",
          "options": [
            "L reste rigoureusement constante",
            "L est multipliée par 4",
            "L est multipliée par 16",
            "L est divisée par 4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour une bobine à air, L ne dépend que de ses dimensions géométriques (N, ℓ, S) et nullement de l'intensité i."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l08_p03",
      "order": 3,
      "title": "Force électromotrice d'auto-induction",
      "summary": "Expression générale e = -dΦ/dt = -L (di/dt), signe de e lors de la croissance et de la décroissance, calcul par la dérivée ou la pente graphique, cas du régime sinusoïdal et fondement énergétique du signe moins.",
      "conceptExplanation": "1. Expression fondamentale de la f.é.m. d'auto-induction :\nD'après la loi de Faraday, toute variation du flux magnétique à travers un circuit crée une f.é.m. induite e = -dΦ/dt. Comme le flux propre est Φ = L · i avec une inductance L constante dans le temps, on obtient :\ne = - \\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t} = - L \\,\\frac{\\mathrm{d}i}{\\mathrm{d}t}.\n\n2. Comportement selon le sens de variation de i(t) :\n- Si l'intensité augmente (di/dt > 0) : e = -L (di/dt) < 0. La f.é.m. est négative : elle s'oppose à la tension motrice du générateur et freine la croissance du courant.\n- Si l'intensité diminue (di/dt < 0) : e = -L (di/dt) > 0. La f.é.m. devient positive : elle agit comme un générateur auxiliaire qui tente de maintenir le courant pour empêcher son annulation.\n- Si le courant est constant (di/dt = 0) : e = 0. Le phénomène d'auto-induction disparaît totalement.\n\n3. Cas d'un courant en créneau ou triangulaire :\nSi le courant i(t) est constitué d'une succession de rampes linéaires (triangulaire) avec di/dt = constante, alors la f.é.m. d'auto-induction e(t) est constituée de paliers constants (signal en créneau rectangulaire).",
      "keyRule": "La f.é.m. d'auto-induction vaut e = -L (di/dt). Elle s'oppose aux variations de courant : négative lors de la montée (freinage), positive lors de la descente (maintien).",
      "formulas": [
        {
          "name": "Force électromotrice d'auto-induction",
          "formula": "e = -L\\,\\frac{\\mathrm{d}i}{\\mathrm{d}t}",
          "note": "e en Volts (V), L en H, di/dt en A·s⁻¹"
        }
      ],
      "workedExample": {
        "title": "Calcul de la f.é.m. d'auto-induction lors de rampes d'intensité",
        "statement": "Une bobine d'inductance L = 0,25 H est parcourue par un courant i(t) dont l'évolution temporelle est la suivante :\\n- De t = 0 à t = 20 ms : i croît linéairement de 0 à 1,0 A ;\\n- De t = 20 ms à t = 60 ms : i reste constant à 1,0 A ;\\n- De t = 60 ms à t = 65 ms : i décroît linéairement de 1,0 A à 0 A.\\nCalcule la f.é.m. d'auto-induction e pour chacune de ces trois phases.",
        "methodSteps": [
          "Étape 1 : Phase 1 (croissance). Pente di/dt = (1,0 - 0) / (20 * 10⁻³ - 0) = 1,0 / 0,020 = +50 A·s⁻¹. e1 = -L * (di/dt) = -0,25 * (+50) = -12,5 V.",
          "Étape 2 : Phase 2 (palier continu). i = constante, donc di/dt = 0. e2 = -L * 0 = 0 V.",
          "Étape 3 : Phase 3 (décroissance rapide). Pente di/dt = (0 - 1,0) / (65 * 10⁻³ - 60 * 10⁻³) = -1,0 / (5 * 10⁻³) = -200 A·s⁻¹. e3 = -L * (di/dt) = -0,25 * (-200) = +50 V."
        ],
        "conclusion": "Lors de la rupture rapide (phase 3), la f.é.m. d'auto-induction positive atteint +50 V, soit 4 fois la valeur absolue observée lors de la phase d'établissement."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Signe et rôle de la f.é.m. d'auto-induction selon la dynamique du courant",
        "tableData": {
          "headers": [
            "Tendance de i(t)",
            "Signe de di/dt",
            "Signe de e = -L(di/dt)",
            "Rôle vis-à-vis du courant",
            "Analogie mécanique"
          ],
          "rows": [
            [
              "Montée du courant",
              "di/dt > 0",
              "e < 0 (négative)",
              "Force contre-électromotrice d'opposition",
              "Force d'inertie de freinage lors d'une accélération"
            ],
            [
              "Palier constant",
              "di/dt = 0",
              "e = 0 V",
              "Comportement neutre (pure résistance r)",
              "Vitesse constante, force d'inertie nulle"
            ],
            [
              "Chute du courant",
              "di/dt < 0",
              "e > 0 (positive)",
              "Force électromotrice motrice d'appoint",
              "Force d'inertie qui propulse vers l'avant au freinage"
            ],
            [
              "Sinusoïdal i = Im sin(ωt)",
              "ω Im cos(ωt)",
              "e = -L ω Im cos(ωt)",
              "Déphasage de -π/2 (quadrature retard)",
              "Vitesse et accélération en quadrature"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Formule de la f.é.m. d'auto-induction e",
          "stepTheme": "Loi de Faraday-Lenz",
          "stepBadge": "e = -L di/dt",
          "paragraphText": "En combinant la loi de Faraday e = -dΦ/dt et la relation du flux propre Φ = L · i, la force électromotrice d'auto-induction s'écrit e = -L (di/dt). Elle s'exprime en Volts (V) et mesure le taux d'opposition de la bobine aux variations d'intensité.",
          "exercise": {
            "id": "terminale_d_physique_l08_p03_q1",
            "type": "mcq",
            "prompt": "Une bobine d'inductance L = 0,40 H est traversée par un courant qui augmente au rythme constant de 15 A·s⁻¹. Que vaut la f.é.m. d'auto-induction e ?",
            "options": [
              "e = -6,0 V",
              "e = +6,0 V",
              "e = -37,5 V",
              "e = 0 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "e = -L (di/dt) = -0,40 * (+15) = -6,0 V."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Opposition lors de la croissance du courant",
          "stepTheme": "Phase d'établissement",
          "stepBadge": "di/dt > 0 => e < 0",
          "paragraphText": "Lorsque le courant croît (di/dt > 0), la f.é.m. e est négative : elle se comporte comme une force contre-électromotrice (f.c.é.m.) qui retranche de l'énergie au générateur pour ralentir la mise en vitesse des porteurs de charge.",
          "exercise": {
            "id": "terminale_d_physique_l08_p03_q2",
            "type": "mcq",
            "prompt": "Pourquoi la f.é.m. d'auto-induction est-elle négative lors de la fermeture d'un circuit alimenté par un générateur continu ?",
            "options": [
              "Parce qu'elle s'oppose à l'établissement du courant imposé par le générateur (loi de Lenz)",
              "Parce que la charge des électrons est intrinsèquement négative",
              "Parce que l'inductance L d'une bobine est une grandeur toujours négative",
              "Parce que la tension du générateur devient négative à la fermeture"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le signe négatif reflète la loi de modération de Lenz : e s'oppose à la cause qui lui donne naissance (la croissance du courant)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Effet moteur lors de la décroissance du courant",
          "stepTheme": "Phase d'extinction",
          "stepBadge": "di/dt < 0 => e > 0",
          "paragraphText": "Lorsque le courant décroît (di/dt < 0), e devient positive (e > 0). La bobine se transforme transitoirement en générateur d'appoint qui pousse les charges électriques dans le sens du courant pour tenter d'éviter son annulation.",
          "exercise": {
            "id": "terminale_d_physique_l08_p03_q3",
            "type": "mcq",
            "prompt": "Dans une bobine d'inductance L = 0,20 H, le courant passe de 2,0 A à 0 A en un temps très bref de 2,0 ms. Que vaut la f.é.m. d'auto-induction moyenne ?",
            "options": [
              "e = +200 V",
              "e = -200 V",
              "e = +20 V",
              "e = -0,40 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "di/dt = (0 - 2,0) / (2,0 * 10⁻³) = -1000 A·s⁻¹. e = -L (di/dt) = -0,20 * (-1000) = +200 V."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Détermination graphique de e à partir de la courbe i(t)",
          "stepTheme": "Méthode expérimentale",
          "stepBadge": "e = -L * Pente",
          "paragraphText": "Sur un chronogramme expérimental i(t), la dérivée temporelle di/dt en un point représente le coefficient directeur (la pente) de la tangente à la courbe à cet instant. On en déduit immédiatement la f.é.m. e = -L × (Pente).",
          "exercise": {
            "id": "terminale_d_physique_l08_p03_q4",
            "type": "mcq",
            "prompt": "À un instant t1, la tangente à la courbe i(t) a une pente de +40 A·s⁻¹. Sachant que la bobine a une inductance L = 0,50 H, quelle est la valeur de e à cet instant ?",
            "options": [
              "e(t1) = -20 V",
              "e(t1) = +20 V",
              "e(t1) = -80 V",
              "e(t1) = +80 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "e = -L * pente = -0,50 * (+40) = -20 V."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confusion entre flux élevé et dérivée du flux",
          "stepTheme": "Erreur conceptuelle",
          "stepBadge": "Φ grand ≠ e grand",
          "paragraphText": "Une erreur très fréquente consiste à croire qu'un flux magnétique très intense implique une grande f.é.m. d'induction. Même sous un flux propre immense de plusieurs dizaines de Webers, si le courant ne varie pas (di/dt = 0), la f.é.m. est strictement nulle.",
          "exercise": {
            "id": "terminale_d_physique_l08_p03_q5",
            "type": "mcq",
            "prompt": "Un électroaimant supraconducteur génère un flux magnétique propre de 100 Wb sous un courant continu stable de 200 A. Que vaut la f.é.m. d'auto-induction e ?",
            "options": [
              "e = 0 V car le courant ne varie pas (di/dt = 0)",
              "e = -20 000 V",
              "e = +100 V",
              "e = -0,50 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'induction dépend de la variation temporelle du flux (dΦ/dt) et non de sa valeur absolue. Si i = Cte, di/dt = 0 donc e = 0 V."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "f.é.m. en régime sinusoïdal alternatif",
          "stepTheme": "Courant alternatif",
          "stepBadge": "Déphasage de π/2",
          "paragraphText": "Si i(t) = Im sin(ωt), la dérivée vaut di/dt = ω Im cos(ωt). La f.é.m. auto-induite vaut e(t) = -L ω Im cos(ωt) = L ω Im sin(ωt - π/2). L'amplitude vaut Em = L ω Im et la f.é.m. est en quadrature retard de phase (-π/2) sur le courant.",
          "exercise": {
            "id": "terminale_d_physique_l08_p03_q6",
            "type": "mcq",
            "prompt": "Quelle est l'amplitude maximale Em de la f.é.m. d'auto-induction lorsque le courant est i(t) = Im sin(ωt) ?",
            "options": [
              "Em = L · ω · Im",
              "Em = L · Im / ω",
              "Em = ω / (L · Im)",
              "Em = L · Im²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme e(t) = -L(di/dt) = -L ω Im cos(ωt), l'amplitude maximale de l'oscillation est L ω Im."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Nécessité physique du signe négatif",
          "stepTheme": "Conservation de l'énergie",
          "stepBadge": "Stabilité thermodynamique",
          "paragraphText": "Le signe moins dans e = -L (di/dt) assure la conservation de l'énergie. Si le signe était positif (+L di/dt), toute augmentation infinitésimale de courant induirait une f.é.m. positive qui amplifierait le courant sans apport extérieur, menant à une explosion énergétique impossible.",
          "exercise": {
            "id": "terminale_d_physique_l08_p03_q7",
            "type": "mcq",
            "prompt": "Que se passerait-il sur le plan thermodynamique si la formule de l'auto-induction s'écrivait e = + L (di/dt) ?",
            "options": [
              "Le courant divergerait spontanément vers l'infini, violant la conservation de l'énergie",
              "Le courant s'annulerait instantanément dès la fermeture",
              "La résistance interne du circuit deviendrait négative",
              "Le dipôle produirait du froid absolu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un signe positif créerait un effet amplificateur instable (effet Larsen électromagnétique), créant de l'énergie à partir de rien."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l08_p03_q1",
          "type": "mcq",
          "prompt": "Une bobine d'inductance L = 0,40 H est traversée par un courant qui augmente au rythme constant de 15 A·s⁻¹. Que vaut la f.é.m. d'auto-induction e ?",
          "options": [
            "e = -6,0 V",
            "e = +6,0 V",
            "e = -37,5 V",
            "e = 0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "e = -L (di/dt) = -0,40 * (+15) = -6,0 V."
        },
        {
          "id": "terminale_d_physique_l08_p03_q2",
          "type": "mcq",
          "prompt": "Pourquoi la f.é.m. d'auto-induction est-elle négative lors de la fermeture d'un circuit alimenté par un générateur continu ?",
          "options": [
            "Parce qu'elle s'oppose à l'établissement du courant imposé par le générateur (loi de Lenz)",
            "Parce que la charge des électrons est intrinsèquement négative",
            "Parce que l'inductance L d'une bobine est une grandeur toujours négative",
            "Parce que la tension du générateur devient négative à la fermeture"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le signe négatif reflète la loi de modération de Lenz : e s'oppose à la cause qui lui donne naissance (la croissance du courant)."
        },
        {
          "id": "terminale_d_physique_l08_p03_q3",
          "type": "mcq",
          "prompt": "Dans une bobine d'inductance L = 0,20 H, le courant passe de 2,0 A à 0 A en un temps très bref de 2,0 ms. Que vaut la f.é.m. d'auto-induction moyenne ?",
          "options": [
            "e = +200 V",
            "e = -200 V",
            "e = +20 V",
            "e = -0,40 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "di/dt = (0 - 2,0) / (2,0 * 10⁻³) = -1000 A·s⁻¹. e = -L (di/dt) = -0,20 * (-1000) = +200 V."
        },
        {
          "id": "terminale_d_physique_l08_p03_q4",
          "type": "mcq",
          "prompt": "À un instant t1, la tangente à la courbe i(t) a une pente de +40 A·s⁻¹. Sachant que la bobine a une inductance L = 0,50 H, quelle est la valeur de e à cet instant ?",
          "options": [
            "e(t1) = -20 V",
            "e(t1) = +20 V",
            "e(t1) = -80 V",
            "e(t1) = +80 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "e = -L * pente = -0,50 * (+40) = -20 V."
        },
        {
          "id": "terminale_d_physique_l08_p03_q5",
          "type": "mcq",
          "prompt": "Un électroaimant supraconducteur génère un flux magnétique propre de 100 Wb sous un courant continu stable de 200 A. Que vaut la f.é.m. d'auto-induction e ?",
          "options": [
            "e = 0 V car le courant ne varie pas (di/dt = 0)",
            "e = -20 000 V",
            "e = +100 V",
            "e = -0,50 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'induction dépend de la variation temporelle du flux (dΦ/dt) et non de sa valeur absolue. Si i = Cte, di/dt = 0 donc e = 0 V."
        },
        {
          "id": "terminale_d_physique_l08_p03_q6",
          "type": "mcq",
          "prompt": "Quelle est l'amplitude maximale Em de la f.é.m. d'auto-induction lorsque le courant est i(t) = Im sin(ωt) ?",
          "options": [
            "Em = L · ω · Im",
            "Em = L · Im / ω",
            "Em = ω / (L · Im)",
            "Em = L · Im²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme e(t) = -L(di/dt) = -L ω Im cos(ωt), l'amplitude maximale de l'oscillation est L ω Im."
        },
        {
          "id": "terminale_d_physique_l08_p03_q7",
          "type": "mcq",
          "prompt": "Que se passerait-il sur le plan thermodynamique si la formule de l'auto-induction s'écrivait e = + L (di/dt) ?",
          "options": [
            "Le courant divergerait spontanément vers l'infini, violant la conservation de l'énergie",
            "Le courant s'annulerait instantanément dès la fermeture",
            "La résistance interne du circuit deviendrait négative",
            "Le dipôle produirait du froid absolu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un signe positif créerait un effet amplificateur instable (effet Larsen électromagnétique), créant de l'énergie à partir de rien."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l08_p04",
      "order": 4,
      "title": "Tension aux bornes d'une bobine réelle",
      "summary": "Loi d'Ohm en convention récepteur u = r i + L (di/dt), cas limite de la bobine idéale sans résistance, continuité physique du courant i(t), mesure expérimentale de r et L, et comportement haute vs basse fréquence.",
      "conceptExplanation": "1. Modélisation d'une bobine réelle en convention récepteur :\nUne bobine réelle est constituée d'un enroulement de fil conducteur présentant une résistance ohmique interne r et une inductance L. Orientée en convention récepteur (flèches u et i en sens opposés), elle équivaut à un conducteur ohmique r en série avec un générateur de f.é.m. d'auto-induction e = -L di/dt.\nLa loi des tensions donne :\nu = r · i - e = r · i - (-L \\frac{\\mathrm{d}i}{\\mathrm{d}t}) = r · i + L \\,\\frac{\\mathrm{d}i}{\\mathrm{d}t}.\n\n2. Cas particuliers remarquables :\n- Bobine idéale (purement inductive, r = 0) : u = L (di/dt).\n- Régime continu permanent (di/dt = 0) : u = r · I. La composante inductive s'annule, la bobine se comporte comme un conducteur ohmique ordinaire.\n- Décroissance très rapide du courant (di/dt < 0) : si L |di/dt| > r i, la tension u devient négative (comportement momentané en générateur d'énergie).\n\n3. Continuité temporelle de l'intensité i(t) :\nL'intensité du courant i(t) traversant une bobine est obligatoirement une fonction continue du temps. Une discontinuité (saut brusque) de i nécessiterait une dérivée di/dt infinie, ce qui imposerait une tension u infinie et une puissance infinie, choses physiquement irréalisables.",
      "keyRule": "En convention récepteur, la tension aux bornes d'une bobine s'écrit u = r i + L (di/dt). L'intensité i(t) y est obligatoirement continue (jamais de variation discontinue).",
      "formulas": [
        {
          "name": "Tension aux bornes d'une bobine réelle",
          "formula": "u = r\\,i + L\\,\\frac{\\mathrm{d}i}{\\mathrm{d}t}",
          "note": "Convention récepteur, r en Ω, L en H, i en A"
        },
        {
          "name": "Cas de la bobine pure (idéale)",
          "formula": "u_L = L\\,\\frac{\\mathrm{d}i}{\\mathrm{d}t}",
          "note": "Pour une résistance interne négligeable r = 0"
        }
      ],
      "workedExample": {
        "title": "Calcul de la tension aux bornes d'une bobine en régime dynamique",
        "statement": "Une bobine d'inductance L = 0,20 H et de résistance r = 5,0 Ω est branchée en convention récepteur. Calcule la tension u à ses bornes dans les trois situations suivantes :\\n1. En régime continu permanent sous une intensité constante I = 2,0 A ;\\n2. À un instant où i = 1,0 A et croît à raison de di/dt = +30 A·s⁻¹ ;\\n3. À un instant où i = 1,0 A mais décroît à raison de di/dt = -40 A·s⁻¹.",
        "methodSteps": [
          "Étape 1 : Régime continu permanent. di/dt = 0. u1 = r * I + L * 0 = 5,0 * 2,0 = 10 V.",
          "Étape 2 : Phase de croissance. u2 = r * i + L * (di/dt) = (5,0 * 1,0) + (0,20 * (+30)) = 5,0 + 6,0 = 11,0 V.",
          "Étape 3 : Phase de décroissance rapide. u3 = r * i + L * (di/dt) = (5,0 * 1,0) + (0,20 * (-40)) = 5,0 - 8,0 = -3,0 V."
        ],
        "conclusion": "Lors d'une chute rapide du courant, la composante inductive négative l'emporte sur le terme ohmique : la tension devient négative (u = -3,0 V), prouvant que la bobine restitue son énergie."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Composantes de la tension u = r i + L (di/dt)",
        "tableData": {
          "headers": [
            "Régime électrique",
            "Terme ohmique (r i)",
            "Terme inductif (L di/dt)",
            "Tension globale u",
            "Rôle du dipôle"
          ],
          "rows": [
            [
              "Continu établi (i = Cte)",
              "r · I",
              "0 V",
              "u = r · I",
              "Récepteur ohmique pur"
            ],
            [
              "Montée du courant (di/dt > 0)",
              "r · i > 0",
              "L · di/dt > 0",
              "u > r · i",
              "Récepteur stockant de l'énergie magnétique"
            ],
            [
              "Décroissance lente (|L di/dt| < r i)",
              "r · i > 0",
              "L · di/dt < 0",
              "0 < u < r · i",
              "Récepteur partiellement déchargé"
            ],
            [
              "Décroissance brutale (|L di/dt| > r i)",
              "r · i > 0",
              "L · di/dt << 0",
              "u < 0 (négative)",
              "Générateur transitoire d'appoint"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Formule fondamentale en convention récepteur",
          "stepTheme": "Loi des mailles",
          "stepBadge": "u = r i + L di/dt",
          "paragraphText": "En convention récepteur, la tension aux bornes d'une bobine réelle de résistance interne r et d'inductance propre L s'exprime par la relation u = r i + L (di/dt). Elle additionne la chute ohmique de tension (r i) et la tension d'auto-induction (L di/dt).",
          "exercise": {
            "id": "terminale_d_physique_l08_p04_q1",
            "type": "mcq",
            "prompt": "En convention récepteur, quelle est la tension aux bornes d'une bobine réelle (r, L) lorsque le courant augmente ?",
            "options": [
              "u = r · i + L · (di/dt)",
              "u = r · i - L · (di/dt)",
              "u = L · (di/dt) - r · i",
              "u = r · i / (L · di/dt)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme u = r i - e et que e = -L(di/dt), on a u = r i - (-L di/dt) = r i + L (di/dt)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Comportement d'une bobine idéale purement inductive",
          "stepTheme": "Inductance pure",
          "stepBadge": "u = L di/dt (r = 0)",
          "paragraphText": "Pour une bobine idéale dont le fil conducteur présente une résistance négligeable (r ≈ 0), la tension est directement proportionnelle à la dérivée temporelle du courant : u = L (di/dt).",
          "exercise": {
            "id": "terminale_d_physique_l08_p04_q2",
            "type": "mcq",
            "prompt": "On applique une tension constante u = 6,0 V aux bornes d'une bobine idéale de résistance nulle et d'inductance L = 0,30 H. Que vaut la dérivée temporelle di/dt du courant ?",
            "options": [
              "di/dt = +20 A·s⁻¹ (l'intensité croît linéairement)",
              "di/dt = 0 A·s⁻¹ (l'intensité est bloquée)",
              "di/dt = +1,8 A·s⁻¹",
              "di/dt = +0,05 A·s⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "u = L (di/dt) => di/dt = u / L = 6,0 / 0,30 = +20 A·s⁻¹."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Continuité obligatoire de l'intensité i(t)",
          "stepTheme": "Théorème de continuité",
          "stepBadge": "Pas de saut de i(t)",
          "paragraphText": "L'intensité du courant i(t) traversant une bobine est obligatoirement continue au cours du temps : i(t⁺) = i(t⁻). Tout saut discontinu imposerait une dérivée di/dt infinie, ce qui nécessiterait une tension infinie et une puissance infinie, ce qui est physiquement impossible.",
          "exercise": {
            "id": "terminale_d_physique_l08_p04_q3",
            "type": "mcq",
            "prompt": "Pourquoi l'intensité du courant électrique traversant une bobine ne peut-elle subir aucune discontinuité brutale ?",
            "options": [
              "Parce qu'un saut discontinu nécessiterait une tension et une puissance infinies à cause du terme L (di/dt)",
              "Parce que la résistance ohmique de la bobine s'annule instantanément",
              "Parce que les électrons du métal se bloquent mutuellement",
              "Parce que le flux magnétique ne peut être qu'un nombre entier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'énergie magnétique Em = 1/2 L i² ne peut pas varier de façon discontinue sans échange d'une puissance infinie P = dEm/dt."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Détermination expérimentale de r et L",
          "stepTheme": "Protocole expérimental",
          "stepBadge": "Continu puis variable",
          "paragraphText": "Pour déterminer expérimentalement les caractéristiques (r, L) d'une bobine : on mesure d'abord sa résistance en courant continu (r = U/I), puis on la soumet à une tension périodique en créneau pour observer le régime transitoire et extraire la constante de temps τ = L / (R + r), d'où l'on tire L.",
          "exercise": {
            "id": "terminale_d_physique_l08_p04_q4",
            "type": "mcq",
            "prompt": "Une bobine alimentée sous une tension continue de 12 V est traversée par un courant permanent de 1,5 A. Que vaut sa résistance interne r ?",
            "options": [
              "r = 8,0 Ω",
              "r = 18 Ω",
              "r = 0,125 Ω",
              "r = 10 Ω"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En courant continu, di/dt = 0, donc u = r · I => r = u / I = 12 / 1,5 = 8,0 Ω."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Attention à la convention générateur",
          "stepTheme": "Convention de fléchage",
          "stepBadge": "Flèches u et i de même sens",
          "paragraphText": "Si un sujet impose la convention générateur (flèche de tension u et flèche de courant i orientées dans le même sens), la formule change de signe : u_générateur = e - r i = - L (di/dt) - r i. En convention récepteur standard, la formule est u = r i + L (di/dt).",
          "exercise": {
            "id": "terminale_d_physique_l08_p04_q5",
            "type": "mcq",
            "prompt": "Quelle est l'expression de la tension u aux bornes d'une bobine réelle si le schéma impose la convention générateur ?",
            "options": [
              "u = - r · i - L · (di/dt)",
              "u = + r · i + L · (di/dt)",
              "u = L · (di/dt) / r",
              "u = + r · i - L · (di/dt)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En convention générateur, u = - u_recepteur = - (r i + L di/dt) = - r i - L (di/dt)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Tension à l'instant initial t = 0⁺",
          "stepTheme": "Fermeture du circuit",
          "stepBadge": "u_bobine(0⁺) = E",
          "paragraphText": "Lors de la fermeture à t = 0 d'un circuit série (E, R, bobine), par continuité du courant, on a i(0⁺) = i(0⁻) = 0 A. La tension aux bornes du conducteur ohmique est nulle (u_R = R × 0 = 0). Toute la tension du générateur est donc instantanément appliquée aux bornes de la bobine : u_bobine(0⁺) = E.",
          "exercise": {
            "id": "terminale_d_physique_l08_p04_q6",
            "type": "mcq",
            "prompt": "On connecte à t = 0 un générateur de 10 V à un circuit série comprenant un résistor de 50 Ω et une bobine (L = 0,2 H, r = 10 Ω). Que vaut la tension aux bornes de la bobine à l'instant t = 0⁺ ?",
            "options": [
              "u(0⁺) = 10 V",
              "u(0⁺) = 0 V",
              "u(0⁺) = 1,67 V",
              "u(0⁺) = 5,0 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme i(0⁺) = 0, la chute de tension dans le résistor est u_R = R * 0 = 0 V. D'après la loi des mailles, u_bobine(0⁺) = E = 10 V."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Comportement fréquentiel : filtre passe-bas naturel",
          "stepTheme": "Impédance inductive",
          "stepBadge": "Z = L ω",
          "paragraphText": "À très basse fréquence (ou en continu, ω → 0), l'impédance inductive Lω est négligeable et la bobine se comporte comme un simple fil de faible résistance r. À très haute fréquence (ω → ∞), l'impédance Lω devient immense et bloque le courant : la bobine se comporte comme un circuit ouvert (effet filtrant passe-bas).",
          "exercise": {
            "id": "terminale_d_physique_l08_p04_q7",
            "type": "mcq",
            "prompt": "Comment se comporte une bobine idéale face à un signal électrique de très haute fréquence ?",
            "options": [
              "Elle oppose une très forte impédance et se comporte pratiquement comme un circuit ouvert",
              "Elle se comporte comme un court-circuit de résistance nulle",
              "Elle transforme le signal alternatif en courant continu pur",
              "Elle double l'amplitude du courant sans déphasage"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'impédance d'une bobine pure Z = Lω croît proportionnellement à la pulsation ω : elle bloque les très hautes fréquences."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l08_p04_q1",
          "type": "mcq",
          "prompt": "En convention récepteur, quelle est la tension aux bornes d'une bobine réelle (r, L) lorsque le courant augmente ?",
          "options": [
            "u = r · i + L · (di/dt)",
            "u = r · i - L · (di/dt)",
            "u = L · (di/dt) - r · i",
            "u = r · i / (L · di/dt)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme u = r i - e et que e = -L(di/dt), on a u = r i - (-L di/dt) = r i + L (di/dt)."
        },
        {
          "id": "terminale_d_physique_l08_p04_q2",
          "type": "mcq",
          "prompt": "On applique une tension constante u = 6,0 V aux bornes d'une bobine idéale de résistance nulle et d'inductance L = 0,30 H. Que vaut la dérivée temporelle di/dt du courant ?",
          "options": [
            "di/dt = +20 A·s⁻¹ (l'intensité croît linéairement)",
            "di/dt = 0 A·s⁻¹ (l'intensité est bloquée)",
            "di/dt = +1,8 A·s⁻¹",
            "di/dt = +0,05 A·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "u = L (di/dt) => di/dt = u / L = 6,0 / 0,30 = +20 A·s⁻¹."
        },
        {
          "id": "terminale_d_physique_l08_p04_q3",
          "type": "mcq",
          "prompt": "Pourquoi l'intensité du courant électrique traversant une bobine ne peut-elle subir aucune discontinuité brutale ?",
          "options": [
            "Parce qu'un saut discontinu nécessiterait une tension et une puissance infinies à cause du terme L (di/dt)",
            "Parce que la résistance ohmique de la bobine s'annule instantanément",
            "Parce que les électrons du métal se bloquent mutuellement",
            "Parce que le flux magnétique ne peut être qu'un nombre entier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'énergie magnétique Em = 1/2 L i² ne peut pas varier de façon discontinue sans échange d'une puissance infinie P = dEm/dt."
        },
        {
          "id": "terminale_d_physique_l08_p04_q4",
          "type": "mcq",
          "prompt": "Une bobine alimentée sous une tension continue de 12 V est traversée par un courant permanent de 1,5 A. Que vaut sa résistance interne r ?",
          "options": [
            "r = 8,0 Ω",
            "r = 18 Ω",
            "r = 0,125 Ω",
            "r = 10 Ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En courant continu, di/dt = 0, donc u = r · I => r = u / I = 12 / 1,5 = 8,0 Ω."
        },
        {
          "id": "terminale_d_physique_l08_p04_q5",
          "type": "mcq",
          "prompt": "Quelle est l'expression de la tension u aux bornes d'une bobine réelle si le schéma impose la convention générateur ?",
          "options": [
            "u = - r · i - L · (di/dt)",
            "u = + r · i + L · (di/dt)",
            "u = L · (di/dt) / r",
            "u = + r · i - L · (di/dt)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En convention générateur, u = - u_recepteur = - (r i + L di/dt) = - r i - L (di/dt)."
        },
        {
          "id": "terminale_d_physique_l08_p04_q6",
          "type": "mcq",
          "prompt": "On connecte à t = 0 un générateur de 10 V à un circuit série comprenant un résistor de 50 Ω et une bobine (L = 0,2 H, r = 10 Ω). Que vaut la tension aux bornes de la bobine à l'instant t = 0⁺ ?",
          "options": [
            "u(0⁺) = 10 V",
            "u(0⁺) = 0 V",
            "u(0⁺) = 1,67 V",
            "u(0⁺) = 5,0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme i(0⁺) = 0, la chute de tension dans le résistor est u_R = R * 0 = 0 V. D'après la loi des mailles, u_bobine(0⁺) = E = 10 V."
        },
        {
          "id": "terminale_d_physique_l08_p04_q7",
          "type": "mcq",
          "prompt": "Comment se comporte une bobine idéale face à un signal électrique de très haute fréquence ?",
          "options": [
            "Elle oppose une très forte impédance et se comporte pratiquement comme un circuit ouvert",
            "Elle se comporte comme un court-circuit de résistance nulle",
            "Elle transforme le signal alternatif en courant continu pur",
            "Elle double l'amplitude du courant sans déphasage"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'impédance d'une bobine pure Z = Lω croît proportionnellement à la pulsation ω : elle bloque les très hautes fréquences."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l08_p05",
      "order": 5,
      "title": "Énergie magnétique emmagasinée dans une bobine",
      "summary": "Expression de l'énergie magnétique Em = 1/2 L i², démonstration par le bilan de puissance électrique instantanée, analogie mécanique (masse et vitesse), densité volumique d'énergie B² / 2μ0, dépendance quadratique et réversibilité du stockage.",
      "conceptExplanation": "1. Bilan de puissance électrique instantanée :\nLa puissance électrique instantanée reçue par une bobine réelle en convention récepteur s'écrit :\np(t) = u(t) · i(t) = [r · i(t) + L \\,\\frac{\\mathrm{d}i}{\\mathrm{d}t}] · i(t) = r \\,i^2(t) + L \\,i(t) \\,\\frac{\\mathrm{d}i}{\\mathrm{d}t}.\nOn observe deux termes distincts :\n- Le terme p_J = r i² représente la puissance dissipée irréversiblement sous forme de chaleur par effet Joule dans le fil ;\n- Le terme p_mag = L i (di/dt) représente la puissance fournie au champ magnétique. En remarquant que :\n\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left[\\frac{1}{2}\\,L\\,i^2\\right] = \\frac{1}{2}\\,L \\cdot 2\\,i \\,\\frac{\\mathrm{d}i}{\\mathrm{d}t} = L\\,i\\,\\frac{\\mathrm{d}i}{\\mathrm{d}t},\nce second terme est la dérivée temporelle d'une grandeur énergétique.\n\n2. Expression de l'énergie magnétique stockée :\nL'énergie magnétique emmagasinée par une inductance L traversée par un courant d'intensité i vaut :\nE_m = \\frac{1}{2}\\,L\\,i^2.\n- Em est exprimée en Joules (J) ;\n- L est exprimée en Henrys (H) ;\n- i est exprimé en Ampères (A).\n\n3. Densité volumique d'énergie magnétique :\nDans un solénoïde long de volume V = S · ℓ où le champ B est uniforme, l'énergie est localisée dans le champ magnétique lui-même. En remplaçant L = μ0 n² V et i = B / (μ0 n), on obtient :\nE_m = \\frac{1}{2}\\,(μ0\\,n^2\\,V)\\,\\left(\\frac{B}{μ0\\,n}\\right)^2 = \\frac{B^2}{2\\,\\mu_0}\\,V.\nLa densité volumique d'énergie magnétique vaut donc :\nw_m = \\frac{E_m}{V} = \\frac{B^2}{2\\,\\mu_0} \\quad (\\text{en } \\text{J}\\cdot\\text{m}^{-3}).",
      "keyRule": "L'énergie magnétique vaut Em = 1/2 L i². C'est un stockage d'énergie réversible logé dans le champ magnétique B (densité wm = B² / 2μ0).",
      "formulas": [
        {
          "name": "Énergie magnétique emmagasinée",
          "formula": "E_m = \\frac{1}{2}\\,L\\,i^2",
          "note": "Em en Joules (J), L en H, i en A"
        },
        {
          "name": "Densité volumique d'énergie magnétique",
          "formula": "w_m = \\frac{B^2}{2\\,\\mu_0}",
          "note": "wm en J·m⁻³, B en Teslas (T), μ0 = 4π × 10⁻⁷ H·m⁻¹"
        }
      ],
      "workedExample": {
        "title": "Calcul d'énergie magnétique et de puissance de restitution",
        "statement": "Une bobine d'inductance L = 0,60 H et de résistance r = 4,0 Ω est parcourue par un courant continu d'intensité I = 3,0 A.\\n1. Calcule l'énergie magnétique Em stockée dans la bobine.\\n2. Calcule la puissance thermique pJ dissipée par effet Joule.\\n3. Si le courant est coupé de manière à s'annuler complètement en une durée Δt = 1,5 ms, calcule la puissance moyenne P_moyen libérée lors de la rupture.",
        "methodSteps": [
          "Étape 1 : Calculer l'énergie magnétique emmagasinée : Em = 1/2 * L * I² = 0,5 * 0,60 * (3,0)² = 0,30 * 9,0 = 2,7 Joules.",
          "Étape 2 : Calculer la puissance dissipée par effet Joule : pJ = r * I² = 4,0 * (3,0)² = 4,0 * 9,0 = 36 Watts.",
          "Étape 3 : Calculer la puissance moyenne de libération lors de l'ouverture : P_moyen = ΔEm / Δt = 2,7 J / (1,5 * 10⁻³ s) = 1800 Watts = 1,8 kW."
        ],
        "conclusion": "L'énergie stockée (2,7 J) libérée en un temps éclair de 1,5 ms développe une puissance instantanée de 1,8 kW, expliquant l'intensité lumineuse et sonore de l'étincelle de rupture."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Analogie électromécanique entre inductance et masse",
        "tableData": {
          "headers": [
            "Grandeur mécanique",
            "Symbole mécanique",
            "Grandeur électrique inductive",
            "Symbole électrique",
            "Équivalence formelle"
          ],
          "rows": [
            [
              "Masse d'inertie",
              "m (kg)",
              "Inductance propre",
              "L (H)",
              "Inertie aux variations d'état"
            ],
            [
              "Vitesse instantanée",
              "v (m·s⁻¹)",
              "Intensité du courant",
              "i (A)",
              "Flux de porteurs de charge"
            ],
            [
              "Force mécanique",
              "F (N)",
              "Tension électrique",
              "u (V)",
              "Cause motrice de mise en mouvement"
            ],
            [
              "Énergie cinétique",
              "Ec = 1/2 m v²",
              "Énergie magnétique",
              "Em = 1/2 L i²",
              "Énergie stockée liée au mouvement"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Formule de l'énergie magnétique Em",
          "stepTheme": "Stockage énergétique",
          "stepBadge": "Em = 1/2 L i²",
          "paragraphText": "L'énergie emmagasinée sous forme magnétique dans une bobine d'inductance L parcourue par un courant i est donnée par la relation Em = 1/2 L i². Elle s'exprime en Joules (J) et correspond au travail fourni pour établir le champ magnétique.",
          "exercise": {
            "id": "terminale_d_physique_l08_p05_q1",
            "type": "mcq",
            "prompt": "Une bobine d'inductance L = 0,50 H est parcourue par un courant continu d'intensité i = 4,0 A. Quelle est la valeur de l'énergie magnétique emmagasinée ?",
            "options": [
              "Em = 4,0 J",
              "Em = 8,0 J",
              "Em = 2,0 J",
              "Em = 1,0 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Em = 1/2 * L * i² = 0,5 * 0,50 * (4,0)² = 0,25 * 16 = 4,0 Joules."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Démonstration par la puissance instantanée p(t)",
          "stepTheme": "Démonstration thermodynamique",
          "stepBadge": "d/dt (1/2 L i²) = L i di/dt",
          "paragraphText": "La puissance totale reçue par une bobine est p(t) = u · i = r i² + L i (di/dt). Le second terme est égal à d/dt [ 1/2 L i² ]. En intégrant entre t = 0 (où i = 0) et l'instant où l'intensité atteint sa valeur permanente I, on obtient exactement l'énergie magnétique stockée Em = 1/2 L I².",
          "exercise": {
            "id": "terminale_d_physique_l08_p05_q2",
            "type": "mcq",
            "prompt": "Dans le bilan de puissance électrique d'une bobine p(t) = r i² + L i (di/dt), que représente le terme L i (di/dt) ?",
            "options": [
              "La puissance instantanée échangée avec le champ magnétique pour le stocker ou le restituer",
              "La puissance thermique perdue définitivement par effet Joule dans l'environnement",
              "La puissance mécanique fournie par les forces de gravitation",
              "La puissance électrique consommée par le voltmètre de mesure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "r i² est la puissance thermique dissipée par effet Joule, tandis que L i (di/dt) est la puissance magnétique réversible stockée (dEm/dt)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'analogie mécanique de l'énergie cinétique",
          "stepTheme": "Analogie physique",
          "stepBadge": "1/2 m v² <-> 1/2 L i²",
          "paragraphText": "Il existe une analogie mathématique parfaite entre l'énergie cinétique d'un solide en translation Ec = 1/2 m v² et l'énergie magnétique d'un circuit Em = 1/2 L i². L'inductance L joue exactement le rôle d'une masse électrique qui s'oppose aux variations d'intensité comme la masse s'oppose aux variations de vitesse.",
          "exercise": {
            "id": "terminale_d_physique_l08_p05_q3",
            "type": "mcq",
            "prompt": "Dans l'analogie entre énergie cinétique (1/2 m v²) et énergie magnétique (1/2 L i²), à quelle grandeur correspond l'inductance propre L ?",
            "options": [
              "À la masse d'inertie m du solide en mouvement",
              "À la vitesse v du centre d'inertie",
              "À la raideur k du ressort de rappel",
              "Au coefficient de frottement de l'air"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'inductance L mesure l'inertie électrique du circuit, de même que la masse m mesure l'inertie mécanique d'un solide."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Densité volumique d'énergie magnétique",
          "stepTheme": "Localisation de l'énergie",
          "stepBadge": "wm = B² / 2μ0",
          "paragraphText": "L'énergie magnétique d'un solénoïde est uniformément répartie dans son volume intérieur V = S · ℓ. La densité volumique d'énergie magnétique vaut wm = Em / V = B² / (2 μ0) (en Joules par mètre cube, J·m⁻³).",
          "exercise": {
            "id": "terminale_d_physique_l08_p05_q4",
            "type": "mcq",
            "prompt": "Dans une zone de l'espace où règne un champ magnétique uniforme B = 0,10 T dans l'air (μ0 = 4π × 10⁻⁷ H·m⁻¹), quelle est la densité volumique d'énergie magnétique wm ?",
            "options": [
              "wm ≈ 3,98 × 10³ J·m⁻³ = 3,98 kJ·m⁻³",
              "wm ≈ 3,98 × 10⁻² J·m⁻³",
              "wm ≈ 7,96 × 10⁶ J·m⁻³",
              "wm ≈ 1,26 × 10⁻⁴ J·m⁻³"
            ],
            "correctAnswerIndex": 0,
            "explanation": "wm = B² / (2 μ0) = (0,10)² / (2 * 4π * 10⁻⁷) = 0,01 / (8π * 10⁻⁷) = 10⁵ / (8π) ≈ 3979 J·m⁻³ ≈ 3,98 kJ·m⁻³."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Dépendance quadratique vis-à-vis du courant",
          "stepTheme": "Erreur de proportionnalité",
          "stepBadge": "i doublé => Em quadruplée",
          "paragraphText": "L'énergie magnétique est proportionnelle au carré de l'intensité i². Si l'intensité du courant est multipliée par 3, l'énergie magnétique emmagasinée est multipliée par 3² = 9 (et non par 3 !).",
          "exercise": {
            "id": "terminale_d_physique_l08_p05_q5",
            "type": "mcq",
            "prompt": "L'intensité du courant traversant une inductance passe de 1,5 A à 4,5 A. Par quel facteur l'énergie magnétique stockée est-elle multipliée ?",
            "options": [
              "Multipliée par 9",
              "Multipliée par 3",
              "Multipliée par 6",
              "Multipliée par 27"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le courant est multiplié par 3 (4,5 / 1,5 = 3). Comme Em est proportionnelle à i², l'énergie est multipliée par 3² = 9."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Application aux bobines d'allumage des moteurs thermiques",
          "stepTheme": "Technologie automobile",
          "stepBadge": "Étincelle de bougie",
          "paragraphText": "Dans le circuit d'allumage d'un moteur à essence, un courant de plusieurs ampères établit une énergie magnétique de quelques dizaines de millijoules dans le bobinage primaire. La coupure brutale par un rupteur ou transistor libère cette énergie en quelques microsecondes, générant au secondaire une tension de 20 000 V qui fait jaillir l'étincelle à la bougie.",
          "exercise": {
            "id": "terminale_d_physique_l08_p05_q6",
            "type": "mcq",
            "prompt": "Quel est le principe physique exploité par la bobine d'allumage d'un moteur pour enflammer le mélange air-carburant ?",
            "options": [
              "La restitution ultra-rapide de l'énergie magnétique stockée générant une étincelle de haute tension",
              "La dilatation thermique des fils de cuivre provoquant une onde de choc mécanique",
              "L'ionisation chimique du liquide de refroidissement",
              "L'absorption d'ondes radio provenant de l'alternateur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La coupure ultra-rapide du courant dans la bobine primaire libère son énergie magnétique sous forme d'une gigantesque surtension induite aux bornes de la bougie."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Réversibilité intégrale du stockage magnétique",
          "stepTheme": "Propriété thermodynamique",
          "stepBadge": "Stockage réversible",
          "paragraphText": "Alors que l'énergie dissipée par effet Joule dans la résistance est irrémédiablement perdue sous forme de chaleur désordonnée, l'énergie magnétique stockée dans une inductance est totalement réversible : elle est intégralement restituée au circuit lors de la phase de coupure ou d'oscillation.",
          "exercise": {
            "id": "terminale_d_physique_l08_p05_q7",
            "type": "mcq",
            "prompt": "Quelle est la différence fondamentale entre l'énergie dissipée par effet Joule et l'énergie magnétique emmagasinée dans une bobine ?",
            "options": [
              "L'effet Joule est une perte thermique irréversible, tandis que l'énergie magnétique est réversiblement stockée et restituable",
              "L'effet Joule n'existe que dans le vide spatial",
              "L'énergie magnétique est obligatoirement transformée en lumière visible",
              "Il n'y a aucune différence, toutes deux disparaissent instantanément du circuit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'inductance constitue un réservoir d'énergie réversible capable de restituer l'intégralité de l'énergie emmagasinée dans son champ magnétique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l08_p05_q1",
          "type": "mcq",
          "prompt": "Une bobine d'inductance L = 0,50 H est parcourue par un courant continu d'intensité i = 4,0 A. Quelle est la valeur de l'énergie magnétique emmagasinée ?",
          "options": [
            "Em = 4,0 J",
            "Em = 8,0 J",
            "Em = 2,0 J",
            "Em = 1,0 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Em = 1/2 * L * i² = 0,5 * 0,50 * (4,0)² = 0,25 * 16 = 4,0 Joules."
        },
        {
          "id": "terminale_d_physique_l08_p05_q2",
          "type": "mcq",
          "prompt": "Dans le bilan de puissance électrique d'une bobine p(t) = r i² + L i (di/dt), que représente le terme L i (di/dt) ?",
          "options": [
            "La puissance instantanée échangée avec le champ magnétique pour le stocker ou le restituer",
            "La puissance thermique perdue définitivement par effet Joule dans l'environnement",
            "La puissance mécanique fournie par les forces de gravitation",
            "La puissance électrique consommée par le voltmètre de mesure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "r i² est la puissance thermique dissipée par effet Joule, tandis que L i (di/dt) est la puissance magnétique réversible stockée (dEm/dt)."
        },
        {
          "id": "terminale_d_physique_l08_p05_q3",
          "type": "mcq",
          "prompt": "Dans l'analogie entre énergie cinétique (1/2 m v²) et énergie magnétique (1/2 L i²), à quelle grandeur correspond l'inductance propre L ?",
          "options": [
            "À la masse d'inertie m du solide en mouvement",
            "À la vitesse v du centre d'inertie",
            "À la raideur k du ressort de rappel",
            "Au coefficient de frottement de l'air"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'inductance L mesure l'inertie électrique du circuit, de même que la masse m mesure l'inertie mécanique d'un solide."
        },
        {
          "id": "terminale_d_physique_l08_p05_q4",
          "type": "mcq",
          "prompt": "Dans une zone de l'espace où règne un champ magnétique uniforme B = 0,10 T dans l'air (μ0 = 4π × 10⁻⁷ H·m⁻¹), quelle est la densité volumique d'énergie magnétique wm ?",
          "options": [
            "wm ≈ 3,98 × 10³ J·m⁻³ = 3,98 kJ·m⁻³",
            "wm ≈ 3,98 × 10⁻² J·m⁻³",
            "wm ≈ 7,96 × 10⁶ J·m⁻³",
            "wm ≈ 1,26 × 10⁻⁴ J·m⁻³"
          ],
          "correctAnswerIndex": 0,
          "explanation": "wm = B² / (2 μ0) = (0,10)² / (2 * 4π * 10⁻⁷) = 0,01 / (8π * 10⁻⁷) = 10⁵ / (8π) ≈ 3979 J·m⁻³ ≈ 3,98 kJ·m⁻³."
        },
        {
          "id": "terminale_d_physique_l08_p05_q5",
          "type": "mcq",
          "prompt": "L'intensité du courant traversant une inductance passe de 1,5 A à 4,5 A. Par quel facteur l'énergie magnétique stockée est-elle multipliée ?",
          "options": [
            "Multipliée par 9",
            "Multipliée par 3",
            "Multipliée par 6",
            "Multipliée par 27"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le courant est multiplié par 3 (4,5 / 1,5 = 3). Comme Em est proportionnelle à i², l'énergie est multipliée par 3² = 9."
        },
        {
          "id": "terminale_d_physique_l08_p05_q6",
          "type": "mcq",
          "prompt": "Quel est le principe physique exploité par la bobine d'allumage d'un moteur pour enflammer le mélange air-carburant ?",
          "options": [
            "La restitution ultra-rapide de l'énergie magnétique stockée générant une étincelle de haute tension",
            "La dilatation thermique des fils de cuivre provoquant une onde de choc mécanique",
            "L'ionisation chimique du liquide de refroidissement",
            "L'absorption d'ondes radio provenant de l'alternateur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La coupure ultra-rapide du courant dans la bobine primaire libère son énergie magnétique sous forme d'une gigantesque surtension induite aux bornes de la bougie."
        },
        {
          "id": "terminale_d_physique_l08_p05_q7",
          "type": "mcq",
          "prompt": "Quelle est la différence fondamentale entre l'énergie dissipée par effet Joule et l'énergie magnétique emmagasinée dans une bobine ?",
          "options": [
            "L'effet Joule est une perte thermique irréversible, tandis que l'énergie magnétique est réversiblement stockée et restituable",
            "L'effet Joule n'existe que dans le vide spatial",
            "L'énergie magnétique est obligatoirement transformée en lumière visible",
            "Il n'y a aucune différence, toutes deux disparaissent instantanément du circuit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'inductance constitue un réservoir d'énergie réversible capable de restituer l'intégralité de l'énergie emmagasinée dans son champ magnétique."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l08_p06",
      "order": 6,
      "title": "Réponse d'un dipôle RL : équation différentielle et constante de temps",
      "summary": "Établissement de l'équation différentielle du circuit RL série, expression et analyse dimensionnelle de la constante de temps τ = L / (R + r), solution analytique i(t) = I0 (1 - e^(-t/τ)), méthode de la tangente à l'origine, règle des 5τ et régime d'extinction.",
      "conceptExplanation": "1. Équation différentielle à l'établissement du courant :\nOn considère un circuit série composé d'un générateur idéal de tension continue E, d'un interrupteur K, d'un conducteur ohmique de résistance R et d'une bobine réelle (inductance L, résistance r). On ferme K à t = 0.\nD'après la loi des mailles :\nE = u_R(t) + u_bobine(t) = R · i(t) + [r · i(t) + L \\,\\frac{\\mathrm{d}i}{\\mathrm{d}t}] = (R + r) · i(t) + L \\,\\frac{\\mathrm{d}i}{\\mathrm{d}t}.\nEn posant la résistance totale R_tot = R + r, on écrit la forme canonique de l'équation différentielle du premier ordre :\ni(t) + \\frac{L}{R_\\text{tot}}\\,\\frac{\\mathrm{d}i}{\\mathrm{d}t} = \\frac{E}{R_\\text{tot}} \\iff i(t) + \\tau\\,\\frac{\\mathrm{d}i}{\\mathrm{d}t} = I_0,\noù I0 = E / R_tot est l'intensité maximale en régime permanent, et τ = L / R_tot = L / (R + r) est la constante de temps du dipôle RL.\n\n2. Solution analytique de l'établissement du courant :\nAvec la condition initiale i(0) = 0 (continuité du courant à travers la bobine), la solution mathématique s'écrit :\ni(t) = I_0 \\left(1 - \\mathrm{e}^{-t/\\tau}\\right).\n- Pour t = 0 : i(0) = I0 (1 - 1) = 0 A ;\n- Pour t = τ : i(τ) = I0 (1 - e⁻¹) = I0 (1 - 0,368) = 0,632 · I0 (soit 63,2 % de la valeur finale) ;\n- Pour t = 5τ : i(5τ) = I0 (1 - e⁻⁵) = 0,993 · I0 (soit plus de 99 % de la valeur finale). On considère alors que le régime permanent est pratiquement établi.\n\n3. Détermination graphique de τ :\n- Méthode 1 (tangente à l'origine) : la tangente à la courbe i(t) à t = 0 a pour équation y = (I0 / τ) t. Elle coupe l'asymptote horizontale i = I0 au point d'abscisse t = τ.\n- Méthode 2 (ordonnée à 63 %) : on repère l'ordonnée i = 0,63 · I0 sur la courbe, son abscisse correspond exactement à t = τ.\n\n4. Régime d'extinction du courant (rupture douce en circuit fermé) :\nSi le circuit RL est déconnecté du générateur et refermé sur lui-même, l'équation devient R_tot i + L (di/dt) = 0. La solution est une décroissance exponentielle pure : i(t) = I0 e^(-t/τ). À t = τ, l'intensité ne vaut plus que 37 % de sa valeur initiale (i(τ) = 0,37 I0).",
      "keyRule": "La constante de temps vaut τ = L / (R + r) (en secondes). À t = τ, le courant a atteint 63 % de sa valeur finale à l'établissement (ou ne vaut plus que 37 % à l'extinction). Le régime permanent est établi à 5τ.",
      "formulas": [
        {
          "name": "Constante de temps du dipôle RL",
          "formula": "\\tau = \\frac{L}{R_\\text{tot}} = \\frac{L}{R + r}",
          "note": "τ en secondes (s), L en H, R et r en Ω"
        },
        {
          "name": "Loi temporelle d'établissement du courant",
          "formula": "i(t) = I_0\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)",
          "note": "I0 = E / (R + r), i(0) = 0"
        },
        {
          "name": "Loi temporelle d'extinction du courant",
          "formula": "i(t) = I_0\\,\\mathrm{e}^{-t/\\tau}",
          "note": "Décroissance exponentielle libre"
        }
      ],
      "workedExample": {
        "title": "Étude complète d'un dipôle RL soumis à un échelon de tension",
        "statement": "Un circuit RL série comprend un générateur idéal E = 12 V, un résistor R = 35 Ω et une bobine réelle (L = 200 mH, r = 5,0 Ω). À t = 0, on ferme le circuit.\\n1. Calcule la résistance totale du circuit R_tot.\\n2. Calcule l'intensité finale I0 en régime permanent.\\n3. Calcule la constante de temps τ du dipôle.\\n4. Calcule l'intensité i et la tension aux bornes de la bobine u_b à l'instant t = τ.",
        "methodSteps": [
          "Étape 1 : Calculer la résistance totale du circuit : R_tot = R + r = 35 + 5,0 = 40 Ω.",
          "Étape 2 : Calculer l'intensité en régime permanent : I0 = E / R_tot = 12 / 40 = 0,30 A = 300 mA.",
          "Étape 3 : Calculer la constante de temps : L = 200 mH = 0,200 H. τ = L / R_tot = 0,200 / 40 = 0,0050 s = 5,0 ms.",
          "Étape 4 : Calculer i et u_b à t = τ. i(τ) = I0 * (1 - e⁻¹) = 0,30 * 0,632 ≈ 0,190 A = 190 mA. La tension aux bornes du résistor externe vaut u_R(τ) = R * i(τ) = 35 * 0,190 = 6,65 V. D'après la loi des mailles, la tension aux bornes de la bobine vaut u_b(τ) = E - u_R(τ) = 12 - 6,65 = 5,35 V."
        ],
        "conclusion": "La constante de temps τ = 5,0 ms régit l'évolution du circuit. Le régime permanent à 99 % est atteint au bout d'une durée de 5τ = 25 ms."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Repères remarquables sur la courbe d'établissement du courant RL",
        "tableData": {
          "headers": [
            "Instant t",
            "Valeur théorique de i(t)",
            "Pourcentage du régime final",
            "État du système"
          ],
          "rows": [
            [
              "t = 0",
              "i(0) = 0 A",
              "0 %",
              "Fermeture du commutateur, courant initial nul"
            ],
            [
              "t = τ = L/R_tot",
              "i(τ) = I0 (1 - e⁻¹)",
              "63,2 % de I0",
              "Fin de la phase initiale d'établissement rapide"
            ],
            [
              "t = 3 · τ",
              "i(3τ) = I0 (1 - e⁻³)",
              "95,0 % de I0",
              "Rapprochement étroit du régime asymptotique"
            ],
            [
              "t = 5 · τ",
              "i(5τ) = I0 (1 - e⁻⁵)",
              "99,3 % de I0",
              "Régime permanent pratiquement atteint"
            ],
            [
              "t → ∞",
              "i(∞) = I0 = E / R_tot",
              "100 %",
              "Régime permanent continu rigoureux (di/dt = 0)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la constante de temps τ",
          "stepTheme": "Constante temporelle",
          "stepBadge": "τ = L / (R + r)",
          "paragraphText": "La constante de temps τ d'un circuit RL caractérise l'inertie du dipôle et fixe l'échelle de temps de l'établissement ou de l'extinction du courant. Elle est définie par le rapport de l'inductance L à la résistance totale du circuit : τ = L / R_tot = L / (R + r). Elle s'exprime en secondes (s).",
          "exercise": {
            "id": "terminale_d_physique_l08_p06_q1",
            "type": "mcq",
            "prompt": "Un dipôle RL est constitué d'une bobine d'inductance L = 0,25 H et de résistance interne r = 5 Ω en série avec un conducteur ohmique R = 45 Ω. Que vaut sa constante de temps τ ?",
            "options": [
              "τ = 5,0 ms = 5,0 × 10⁻³ s",
              "τ = 50 ms",
              "τ = 0,055 s",
              "τ = 12,5 s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "R_tot = R + r = 45 + 5 = 50 Ω. τ = L / R_tot = 0,25 / 50 = 0,005 s = 5,0 ms."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Analyse dimensionnelle démontrant que [L/R] = [T]",
          "stepTheme": "Homogénéité physique",
          "stepBadge": "[L/R] = [T] (seconde)",
          "paragraphText": "En utilisant la loi d'Ohm U = R · I et la relation d'auto-induction U = L (dI/dt), on a : [R] = [U]·[I]⁻¹ et [L] = [U]·[T]·[I]⁻¹. Par quotient : [L / R] = ([U]·[T]·[I]⁻¹) / ([U]·[I]⁻¹) = [T]. La grandeur τ = L/R est donc rigoureusement homogène à un temps.",
          "exercise": {
            "id": "terminale_d_physique_l08_p06_q2",
            "type": "mcq",
            "prompt": "Quelle est l'unité SI résultant de l'analyse dimensionnelle du quotient L / R ?",
            "options": [
              "La seconde (s)",
              "Le Hertz (Hz)",
              "L'Ohm par seconde (Ω·s⁻¹)",
              "Le Henry par Ohm (H·Ω⁻¹)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "[L/R] = [U·T·I⁻¹] / [U·I⁻¹] = [T], ce qui correspond à la seconde (s)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Équation différentielle canonique et solution",
          "stepTheme": "Résolution mathématique",
          "stepBadge": "i(t) = I0 (1 - e^(-t/τ))",
          "paragraphText": "La loi des mailles donne E = R_tot i + L (di/dt), ce qui s'écrit i + τ (di/dt) = I0 avec I0 = E / R_tot. La solution générale s'annulant à t = 0 est la fonction exponentielle croissante i(t) = I0 (1 - e^(-t/τ)).",
          "exercise": {
            "id": "terminale_d_physique_l08_p06_q3",
            "type": "mcq",
            "prompt": "Quelle est l'intensité du courant à l'instant t = τ lors de l'établissement du courant dans un dipôle RL alimenté sous I0 = 500 mA ?",
            "options": [
              "i(τ) ≈ 316 mA (soit 63,2 % de I0)",
              "i(τ) = 250 mA (50 %)",
              "i(τ) = 184 mA (36,8 %)",
              "i(τ) = 495 mA (99 %)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "i(τ) = I0 (1 - e⁻¹) = 500 * (1 - 0,368) = 500 * 0,632 = 316 mA."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Méthode de la tangente à l'origine pour déterminer τ",
          "stepTheme": "Exploitation graphique",
          "stepBadge": "Intersection à t = τ",
          "paragraphText": "Pour déterminer expérimentalement τ sur un graphe i(t) : on trace la tangente à la courbe à l'instant initial t = 0 et l'asymptote horizontale i = I0. Le point d'intersection de ces deux droites a pour abscisse exacte t = τ.",
          "exercise": {
            "id": "terminale_d_physique_l08_p06_q4",
            "type": "mcq",
            "prompt": "Sur un oscilloscope, la tangente à l'origine de la courbe i(t) coupe l'asymptote horizontale du courant maximal I0 = 200 mA au temps t = 4,0 ms. Que vaut la constante de temps τ ?",
            "options": [
              "τ = 4,0 ms",
              "τ = 8,0 ms",
              "τ = 2,0 ms",
              "τ = 20 ms"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par propriété géométrique des équations différentielles du 1er ordre, l'abscisse du point d'intersection de la tangente à l'origine avec l'asymptote est exactement égale à τ."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne jamais oublier la résistance interne r de la bobine",
          "stepTheme": "Piège classique",
          "stepBadge": "R_tot = R + r",
          "paragraphText": "Une erreur très fréquente aux examens consiste à calculer τ = L / R en oubliant la résistance interne r de la bobine. La résistance totale qui dissipe l'énergie et limite le courant est la somme R_tot = R + r. Oublier r fausse à la fois le calcul de τ et celui de I0 = E / (R + r).",
          "exercise": {
            "id": "terminale_d_physique_l08_p06_q5",
            "type": "mcq",
            "prompt": "Un circuit RL est alimenté par un générateur E = 15 V avec un résistor R = 25 Ω et une bobine (L = 100 mH, r = 5 Ω). Quelle est la valeur exacte du courant permanent I0 ?",
            "options": [
              "I0 = 0,50 A (car R_tot = 25 + 5 = 30 Ω)",
              "I0 = 0,60 A (si l'on oublie r)",
              "I0 = 3,0 A (si l'on ne compte que r)",
              "I0 = 0,25 A"
            ],
            "correctAnswerIndex": 0,
            "explanation": "I0 = E / (R + r) = 15 / (25 + 5) = 15 / 30 = 0,50 A. Oublier r conduirait à l'erreur 15/25 = 0,60 A."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La règle pratique des 5τ pour le régime permanent",
          "stepTheme": "Durée du régime transitoire",
          "stepBadge": "Δt_transitoire ≈ 5τ",
          "paragraphText": "En théorie, l'exponentielle 1 - e^(-t/τ) n'atteint 100 % qu'à l'infini. En pratique expérimentale, à t = 3τ on a 95 % et à t = 5τ on atteint 99,3 % de I0. Les physiciens et ingénieurs considèrent donc conventionnellement que le régime transitoire dure Δt = 5 · τ.",
          "exercise": {
            "id": "terminale_d_physique_l08_p06_q6",
            "type": "mcq",
            "prompt": "Si la constante de temps d'un circuit de relais RL est τ = 8,0 ms, quelle est la durée estimée du régime transitoire d'établissement du courant à 99 % ?",
            "options": [
              "Δt ≈ 40 ms (soit 5 × τ)",
              "Δt ≈ 8,0 ms",
              "Δt ≈ 16 ms",
              "Δt ≈ 80 ms"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le régime transitoire d'un système du premier ordre est considéré comme terminé à plus de 99 % au bout d'une durée conventionnelle de 5 constantes de temps (5 * 8,0 ms = 40 ms)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Régime d'extinction du courant dans un dipôle RL fermé",
          "stepTheme": "Décroissance libre",
          "stepBadge": "i(t) = I0 e^(-t/τ)",
          "paragraphText": "Lorsque le dipôle RL est déconnecté du générateur et court-circuité (ou refermé via une diode de roue libre), l'équation sans second membre R_tot i + L (di/dt) = 0 a pour solution i(t) = I0 e^(-t/τ). À t = τ, il ne subsiste plus que 36,8 % du courant initial.",
          "exercise": {
            "id": "terminale_d_physique_l08_p06_q7",
            "type": "mcq",
            "prompt": "Lors de l'extinction du courant dans un circuit RL fermé, que vaut l'intensité à l'instant t = τ par rapport à l'intensité initiale I0 ?",
            "options": [
              "i(τ) ≈ 0,368 · I0 (environ 37 % de la valeur de départ)",
              "i(τ) ≈ 0,632 · I0 (environ 63 %)",
              "i(τ) = 0,500 · I0 (exactement la moitié)",
              "i(τ) = 0 A (courant complètement annulé)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "i(τ) = I0 * e⁻¹ ≈ 0,368 * I0, soit environ 37 % du courant de départ."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l08_p06_q1",
          "type": "mcq",
          "prompt": "Un dipôle RL est constitué d'une bobine d'inductance L = 0,25 H et de résistance interne r = 5 Ω en série avec un conducteur ohmique R = 45 Ω. Que vaut sa constante de temps τ ?",
          "options": [
            "τ = 5,0 ms = 5,0 × 10⁻³ s",
            "τ = 50 ms",
            "τ = 0,055 s",
            "τ = 12,5 s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "R_tot = R + r = 45 + 5 = 50 Ω. τ = L / R_tot = 0,25 / 50 = 0,005 s = 5,0 ms."
        },
        {
          "id": "terminale_d_physique_l08_p06_q2",
          "type": "mcq",
          "prompt": "Quelle est l'unité SI résultant de l'analyse dimensionnelle du quotient L / R ?",
          "options": [
            "La seconde (s)",
            "Le Hertz (Hz)",
            "L'Ohm par seconde (Ω·s⁻¹)",
            "Le Henry par Ohm (H·Ω⁻¹)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "[L/R] = [U·T·I⁻¹] / [U·I⁻¹] = [T], ce qui correspond à la seconde (s)."
        },
        {
          "id": "terminale_d_physique_l08_p06_q3",
          "type": "mcq",
          "prompt": "Quelle est l'intensité du courant à l'instant t = τ lors de l'établissement du courant dans un dipôle RL alimenté sous I0 = 500 mA ?",
          "options": [
            "i(τ) ≈ 316 mA (soit 63,2 % de I0)",
            "i(τ) = 250 mA (50 %)",
            "i(τ) = 184 mA (36,8 %)",
            "i(τ) = 495 mA (99 %)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "i(τ) = I0 (1 - e⁻¹) = 500 * (1 - 0,368) = 500 * 0,632 = 316 mA."
        },
        {
          "id": "terminale_d_physique_l08_p06_q4",
          "type": "mcq",
          "prompt": "Sur un oscilloscope, la tangente à l'origine de la courbe i(t) coupe l'asymptote horizontale du courant maximal I0 = 200 mA au temps t = 4,0 ms. Que vaut la constante de temps τ ?",
          "options": [
            "τ = 4,0 ms",
            "τ = 8,0 ms",
            "τ = 2,0 ms",
            "τ = 20 ms"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par propriété géométrique des équations différentielles du 1er ordre, l'abscisse du point d'intersection de la tangente à l'origine avec l'asymptote est exactement égale à τ."
        },
        {
          "id": "terminale_d_physique_l08_p06_q5",
          "type": "mcq",
          "prompt": "Un circuit RL est alimenté par un générateur E = 15 V avec un résistor R = 25 Ω et une bobine (L = 100 mH, r = 5 Ω). Quelle est la valeur exacte du courant permanent I0 ?",
          "options": [
            "I0 = 0,50 A (car R_tot = 25 + 5 = 30 Ω)",
            "I0 = 0,60 A (si l'on oublie r)",
            "I0 = 3,0 A (si l'on ne compte que r)",
            "I0 = 0,25 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "I0 = E / (R + r) = 15 / (25 + 5) = 15 / 30 = 0,50 A. Oublier r conduirait à l'erreur 15/25 = 0,60 A."
        },
        {
          "id": "terminale_d_physique_l08_p06_q6",
          "type": "mcq",
          "prompt": "Si la constante de temps d'un circuit de relais RL est τ = 8,0 ms, quelle est la durée estimée du régime transitoire d'établissement du courant à 99 % ?",
          "options": [
            "Δt ≈ 40 ms (soit 5 × τ)",
            "Δt ≈ 8,0 ms",
            "Δt ≈ 16 ms",
            "Δt ≈ 80 ms"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le régime transitoire d'un système du premier ordre est considéré comme terminé à plus de 99 % au bout d'une durée conventionnelle de 5 constantes de temps (5 * 8,0 ms = 40 ms)."
        },
        {
          "id": "terminale_d_physique_l08_p06_q7",
          "type": "mcq",
          "prompt": "Lors de l'extinction du courant dans un circuit RL fermé, que vaut l'intensité à l'instant t = τ par rapport à l'intensité initiale I0 ?",
          "options": [
            "i(τ) ≈ 0,368 · I0 (environ 37 % de la valeur de départ)",
            "i(τ) ≈ 0,632 · I0 (environ 63 %)",
            "i(τ) = 0,500 · I0 (exactement la moitié)",
            "i(τ) = 0 A (courant complètement annulé)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "i(τ) = I0 * e⁻¹ ≈ 0,368 * I0, soit environ 37 % du courant de départ."
        }
      ]
    }
  ]
};
