import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : Terminales C, D, E — Thème : Électricité — Titre : Puissance en régime sinusoïdal et transport d'énergie
export const PHYSIQUE_TLE_CD_L12_PUISSANCE_REGIME_SINUSOIDAL: CurriculumChapter = {
  "id": "terminale_d_physique_l12_puissance_regime_sinusoidal",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ],
  "order": 12,
  "title": "Leçon 12 : Puissance en régime sinusoïdal et transport d'énergie",
  "summary": "Étude quantitative de la puissance et de l'énergie en courant alternatif sinusoïdal : puissance instantanée p(t) et décomposition en composantes continue et fluctuante à pulsation 2ω, puissance moyenne active P = UI cos φ = Rtot I², puissance apparente S = UI en V·A, facteur de puissance cos φ = Rtot/Z, équivalence stricte entre bande passante à -3 dB et bande passante à mi-puissance (P ≥ P0/2), relèvement du facteur de puissance par condensateur de compensation, justification thermodynamique du transport de l'électricité sous haute tension (pertes Joule en 1/U²) et infrastructure des réseaux électriques.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : Terminales C, D, E – Thème : Électricité – Puissance en régime sinusoïdal)",
  "points": [
    {
      "id": "terminale_d_physique_l12_p01",
      "order": 1,
      "title": "Puissance instantanée en régime alternatif sinusoïdal",
      "summary": "Définition de la puissance instantanée p(t) = u(t) · i(t), transformation trigonométrique du produit de cosinus, décomposition en terme constant et terme fluctuant à pulsation double 2ω, et interprétation physique des échanges d'énergie.",
      "conceptExplanation": "1. Définition de la puissance instantanée :\nLa puissance électrique instantanée p(t) reçue par un dipôle à chaque instant t est égale au produit de la tension instantanée u(t) à ses bornes par l'intensité instantanée i(t) qui le traverse :\np(t) = u(t) \\cdot i(t).\n\n2. Développement mathématique pour des signaux sinusoïdaux :\nConsidérons les expressions générales de l'intensité et de la tension :\ni(t) = I_m \\cos(\\omega t) \\quad \\text{et} \\quad u(t) = U_m \\cos(\\omega t + \\varphi_{u/i}),\noù φu/i est le déphasage de la tension par rapport au courant.\nLa puissance instantanée s'écrit :\np(t) = U_m\\,I_m \\cos(\\omega t) \\cos(\\omega t + \\varphi_{u/i}).\n\nEn utilisant l'identité trigonométrique fondamentale :\n\\cos a \\cdot \\cos b = \\frac{1}{2} [\\cos(a + b) + \\cos(a - b)],\navec a = ωt + φu/i et b = ωt, on obtient :\n\\cos(\\omega t + \\varphi_{u/i}) \\cos(\\omega t) = \\frac{1}{2} [\\cos(2\\omega t + \\varphi_{u/i}) + \\cos(\\varphi_{u/i})].\n\nEn remplaçant Um par U√2 et Im par I√2 (où U et I sont les valeurs efficaces), le facteur 1/2 Um Im se simplifie :\n\\frac{1}{2}\\,U_m\\,I_m = \\frac{1}{2}\\,(U\\sqrt{2})\\,(I\\sqrt{2}) = U\\,I.\n\nOn déduit la forme canonique de la puissance instantanée en régime sinusoïdal :\np(t) = U\\,I\\,\\cos\\varphi_{u/i} + U\\,I\\,\\cos(2\\omega t + \\varphi_{u/i}).\n\n3. Analyse des deux composantes de p(t) :\n- La composante constante (ou valeur moyenne temporelle) : P = UI cos φu/i. Elle représente le débit moyen net d'énergie transformé de façon irréversible en chaleur ou en travail mécanique utile ;\n- La composante fluctuante (ou oscillante) : UI cos(2ωt + φu/i). C'est une oscillation sinusoïdale de pulsation double 2ω (et donc de fréquence double 2N = 2/T). Sa valeur moyenne sur une période est rigoureusement nulle : elle traduit un va-et-vient perpétuel et réversible d'énergie électromagnétique stockée puis restituée alternativement par la bobine et le condensateur.",
      "keyRule": "La puissance instantanée vaut p(t) = UI cos φ + UI cos(2ωt + φ). Elle oscille à fréquence double (2N) autour de sa valeur moyenne constante P = UI cos φ.",
      "formulas": [
        {
          "name": "Forme canonique de la puissance instantanée",
          "formula": "p(t) = U\\,I\\,\\cos\\varphi + U\\,I\\,\\cos(2\\omega t + \\varphi)",
          "note": "U et I efficaces, oscillation à pulsation 2ω"
        },
        {
          "name": "Fréquence d'oscillation de la puissance instantanée",
          "formula": "N_p = 2\\,N = \\frac{2}{T}",
          "note": "Fréquence double de celle du courant"
        }
      ],
      "workedExample": {
        "title": "Décomposition et analyse de la puissance instantanée",
        "statement": "Un dipôle RLC est alimenté sous une tension alternative de fréquence N = 50 Hz et de valeur efficace U = 220 V. L'intensité efficace absorbée est I = 2,0 A et le déphasage est φ = π/3 rad (+60°).\\n1. Quelle est la fréquence Np et la période Tp des fluctuations de la puissance instantanée ?\\n2. Calcule la composante constante de la puissance instantanée.\\n3. Calcule l'amplitude de la composante fluctuante.\\n4. Détermine les valeurs maximale p_max et minimale p_min de la puissance instantanée au cours du temps.",
        "methodSteps": [
          "Étape 1 : Calculer la fréquence et la période de p(t) :\\nNp = 2 × N = 2 × 50 = 100 Hz.\\nTp = 1 / Np = 1 / 100 = 0,010 s = 10 ms (la puissance oscille deux fois plus vite que la tension).",
          "Étape 2 : Calculer la composante constante :\\nP_const = U × I × cos φ = 220 × 2,0 × cos(π/3) = 440 × 0,50 = 220 W.",
          "Étape 3 : Calculer l'amplitude de fluctuation :\\nP_fluc_max = U × I = 220 × 2,0 = 440 W.",
          "Étape 4 : Déterminer p_max et p_min :\\np_max = P_const + P_fluc_max = 220 + 440 = 660 W.\\np_min = P_const - P_fluc_max = 220 - 440 = -220 W."
        ],
        "conclusion": "La puissance instantanée oscille à 100 Hz entre -220 W et +660 W autour de sa moyenne de 220 W. Les phases où p(t) < 0 correspondent aux instants où le dipôle restitue momentanément de l'énergie au générateur."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Analyse des deux termes de la puissance instantanée p(t)",
        "tableData": {
          "headers": [
            "Terme mathématique",
            "Valeur numérique",
            "Périodicité temporelle",
            "Moyenne sur une période",
            "Signification physique"
          ],
          "rows": [
            [
              "Composante continue : U I cos φ",
              "Constante indépendante de t",
              "Statique (invariable)",
              "U I cos φ",
              "Puissance active moyenne réellement consommée"
            ],
            [
              "Composante variable : U I cos(2ωt + φ)",
              "Oscille entre -UI et +UI",
              "Période Tp = T/2 (pulsation 2ω)",
              "0 W",
              "Échanges réversibles d'énergie magnétique/électrique"
            ],
            [
              "Puissance instantanée totale p(t)",
              "p(t) = P + U I cos(2ωt+φ)",
              "Période Tp = T/2",
              "P = U I cos φ",
              "Puissance transitant en temps réel dans le circuit"
            ],
            [
              "Cas où p(t) < 0",
              "Quand U I cos(2ωt+φ) < -P",
              "Régime transitoire périodique",
              "Intégrée dans la moyenne",
              "Restitution d'énergie par L ou C vers le réseau"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la puissance instantanée p(t)",
          "stepTheme": "Définition physique",
          "stepBadge": "p(t) = u(t) · i(t)",
          "paragraphText": "La puissance électrique instantanée p(t) reçue par un composant ou un dipôle est le produit de la tension instantanée à ses bornes par l'intensité instantanée du courant qui le traverse à la même microseconde : p(t) = u(t) · i(t). Elle s'exprime en Watts (W).",
          "exercise": {
            "id": "terminale_d_physique_l12_p01_q1",
            "type": "mcq",
            "prompt": "À un instant précis t1, la tension aux bornes d'un dipôle vaut u(t1) = +150 V et le courant vaut i(t1) = -2,0 A. Que vaut la puissance instantanée p(t1) ?",
            "options": [
              "p(t1) = -300 W (le dipôle fournit de l'énergie au circuit à cet instant)",
              "p(t1) = +300 W",
              "p(t1) = 0 W",
              "p(t1) = +75 W"
            ],
            "correctAnswerIndex": 0,
            "explanation": "p(t1) = u(t1) × i(t1) = 150 V × (-2,0 A) = -300 W. Le signe négatif indique une restitution instantanée d'énergie."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Pulsation double de la puissance instantanée",
          "stepTheme": "Fréquence de fluctuation",
          "stepBadge": "Pulsation 2ω, fréquence 2N",
          "paragraphText": "En régime alternatif de fréquence N, la puissance instantanée p(t) fluctue à une fréquence double Np = 2N (pulsation 2ω). Pour le réseau ivoirien à 50 Hz, la puissance électrique instantanée oscille ainsi à 100 Hz.",
          "exercise": {
            "id": "terminale_d_physique_l12_p01_q2",
            "type": "mcq",
            "prompt": "Une lampe à incandescence est alimentée par une tension sinusoïdale de fréquence 50 Hz. À quelle fréquence la puissance instantanée fournie au filament oscille-t-elle ?",
            "options": [
              "À 100 Hz (le double de la fréquence du courant)",
              "À 50 Hz",
              "À 25 Hz",
              "La puissance ne fluctue pas, elle est rigoureusement constante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La composante variable de p(t) est proportionnelle à cos(2ωt + φ) : sa fréquence est 2 × 50 Hz = 100 Hz."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Démonstration trigonométrique de la forme canonique",
          "stepTheme": "Identité produit de cosinus",
          "stepBadge": "cos a cos b = 1/2 [cos(a+b) + cos(a-b)]",
          "paragraphText": "En injectant cos(ωt) cos(ωt + φ) = 1/2 [cos(2ωt + φ) + cos φ] et en développant avec Um = U√2 et Im = I√2, on sépare la constante UI cos φ du terme oscillant UI cos(2ωt + φ).",
          "exercise": {
            "id": "terminale_d_physique_l12_p01_q3",
            "type": "mcq",
            "prompt": "Quelle identité trigonométrique permet de transformer le produit u(t) · i(t) en somme de deux composantes ?",
            "options": [
              "cos(a) · cos(b) = (1/2) [cos(a + b) + cos(a - b)]",
              "cos(a) + cos(b) = 2 cos(a) cos(b)",
              "sin²(a) + cos²(a) = 1",
              "tan(a) = sin(a) / cos(a)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la formule de linéarisation du produit de deux cosinus qui fait apparaître la somme (2ωt + φ) et la différence constante (φ)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Annulation de la moyenne du terme fluctuant",
          "stepTheme": "Moyenne temporelle",
          "stepBadge": "<cos(2ωt + φ)> = 0",
          "paragraphText": "L'intégrale de la fonction périodique cos(2ωt + φ) sur une période complète est rigoureusement nulle : pendant un demi-cycle elle est positive, et pendant le demi-cycle suivant elle est négative de même surface. Sa moyenne temporelle est donc nulle.",
          "exercise": {
            "id": "terminale_d_physique_l12_p01_q4",
            "type": "mcq",
            "prompt": "Que vaut la moyenne temporelle sur une période de la composante fluctuante UI cos(2ωt + φ) de la puissance instantanée ?",
            "options": [
              "0 W (valeur moyenne rigoureusement nulle)",
              "UI / √2",
              "UI cos φ",
              "UI / 2"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'intégrale d'une sinusoïde pure sur une ou plusieurs périodes entières est rigoureusement égale à zéro."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confusion entre puissance instantanée négative et non-conservation de l'énergie",
          "stepTheme": "Signe négatif de p(t)",
          "stepBadge": "p(t) < 0 = restitution",
          "paragraphText": "Une puissance instantanée peut devenir temporairement négative sans violer la conservation de l'énergie : cela traduit simplement le fait que la bobine ou le condensateur restitue vers le réseau l'énergie magnétique ou électrostatique qu'il avait emmagasinée un quart de période plus tôt.",
          "exercise": {
            "id": "terminale_d_physique_l12_p01_q5",
            "type": "mcq",
            "prompt": "Que signifie concrètement pour un circuit électrique le fait que sa puissance instantanée p(t) prenne une valeur négative à certains instants ?",
            "options": [
              "Le dipôle renvoie temporairement de l'énergie électrique vers le générateur",
              "Le dipôle est en train de brûler par surchauffe",
              "La tension du générateur s'est inversée de manière permanente",
              "L'énergie est détruite spontanément"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En convention récepteur, p(t) < 0 signifie que le transfert d'énergie s'inverse : le composant réactif restitue son énergie stockée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Puissance instantanée d'un résistor pur",
          "stepTheme": "Cas ohmique pur",
          "stepBadge": "φ = 0 => p(t) ≥ 0 toujours",
          "paragraphText": "Pour un conducteur ohmique pur, u et i sont en phase (φ = 0). La puissance instantanée vaut p(t) = UI + UI cos(2ωt) = UI [1 + cos(2ωt)] = 2 UI cos²(ωt). Comme cos²(ωt) ≥ 0, la puissance d'un résistor n'est JAMAIS négative : il ne fait que consommer de l'énergie de manière irréversible.",
          "exercise": {
            "id": "terminale_d_physique_l12_p01_q6",
            "type": "mcq",
            "prompt": "Que peut-on affirmer sur le signe de la puissance instantanée p(t) absorbée par un conducteur ohmique de résistance R ?",
            "options": [
              "Elle est toujours positive ou nulle (p(t) ≥ 0 à tout instant t)",
              "Elle est toujours strictement négative",
              "Elle oscille symétriquement entre -UI et +UI",
              "Elle est constante et ne varie pas dans le temps"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour un résistor, p(t) = R i²(t) : le carré d'un nombre réel étant toujours positif ou nul, la puissance est toujours positive."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Puissance instantanée d'un dipôle purement réactif (L ou C)",
          "stepTheme": "Dipôle réactif pur",
          "stepBadge": "φ = ±π/2 => P_moyenne = 0",
          "paragraphText": "Pour une inductance pure (φ = +π/2) ou un condensateur pur (φ = -π/2), on a cos φ = 0. La composante continue s'annule et il ne reste que p(t) = ± UI sin(2ωt). La puissance oscille symétriquement autour de zéro : le dipôle n'absorbe aucune énergie nette en moyenne.",
          "exercise": {
            "id": "terminale_d_physique_l12_p01_q7",
            "type": "mcq",
            "prompt": "Quelle est l'expression de la puissance instantanée reçue par un condensateur idéal de capacité C (φ = -π/2) sous une tension U et un courant I ?",
            "options": [
              "p(t) = - U I sin(2ωt) (moyenne nulle)",
              "p(t) = U I (constante)",
              "p(t) = (1/2) C U²",
              "p(t) = U I cos(ωt)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme cos(-π/2) = 0 et cos(2ωt - π/2) = sin(2ωt), p(t) = UI sin(2ωt) : la puissance moyenne est rigoureusement nulle."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l12_p01_q1",
          "type": "mcq",
          "prompt": "À un instant précis t1, la tension aux bornes d'un dipôle vaut u(t1) = +150 V et le courant vaut i(t1) = -2,0 A. Que vaut la puissance instantanée p(t1) ?",
          "options": [
            "p(t1) = -300 W (le dipôle fournit de l'énergie au circuit à cet instant)",
            "p(t1) = +300 W",
            "p(t1) = 0 W",
            "p(t1) = +75 W"
          ],
          "correctAnswerIndex": 0,
          "explanation": "p(t1) = u(t1) × i(t1) = 150 V × (-2,0 A) = -300 W. Le signe négatif indique une restitution instantanée d'énergie."
        },
        {
          "id": "terminale_d_physique_l12_p01_q2",
          "type": "mcq",
          "prompt": "Une lampe à incandescence est alimentée par une tension sinusoïdale de fréquence 50 Hz. À quelle fréquence la puissance instantanée fournie au filament oscille-t-elle ?",
          "options": [
            "À 100 Hz (le double de la fréquence du courant)",
            "À 50 Hz",
            "À 25 Hz",
            "La puissance ne fluctue pas, elle est rigoureusement constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La composante variable de p(t) est proportionnelle à cos(2ωt + φ) : sa fréquence est 2 × 50 Hz = 100 Hz."
        },
        {
          "id": "terminale_d_physique_l12_p01_q3",
          "type": "mcq",
          "prompt": "Quelle identité trigonométrique permet de transformer le produit u(t) · i(t) en somme de deux composantes ?",
          "options": [
            "cos(a) · cos(b) = (1/2) [cos(a + b) + cos(a - b)]",
            "cos(a) + cos(b) = 2 cos(a) cos(b)",
            "sin²(a) + cos²(a) = 1",
            "tan(a) = sin(a) / cos(a)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la formule de linéarisation du produit de deux cosinus qui fait apparaître la somme (2ωt + φ) et la différence constante (φ)."
        },
        {
          "id": "terminale_d_physique_l12_p01_q4",
          "type": "mcq",
          "prompt": "Que vaut la moyenne temporelle sur une période de la composante fluctuante UI cos(2ωt + φ) de la puissance instantanée ?",
          "options": [
            "0 W (valeur moyenne rigoureusement nulle)",
            "UI / √2",
            "UI cos φ",
            "UI / 2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'intégrale d'une sinusoïde pure sur une ou plusieurs périodes entières est rigoureusement égale à zéro."
        },
        {
          "id": "terminale_d_physique_l12_p01_q5",
          "type": "mcq",
          "prompt": "Que signifie concrètement pour un circuit électrique le fait que sa puissance instantanée p(t) prenne une valeur négative à certains instants ?",
          "options": [
            "Le dipôle renvoie temporairement de l'énergie électrique vers le générateur",
            "Le dipôle est en train de brûler par surchauffe",
            "La tension du générateur s'est inversée de manière permanente",
            "L'énergie est détruite spontanément"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En convention récepteur, p(t) < 0 signifie que le transfert d'énergie s'inverse : le composant réactif restitue son énergie stockée."
        },
        {
          "id": "terminale_d_physique_l12_p01_q6",
          "type": "mcq",
          "prompt": "Que peut-on affirmer sur le signe de la puissance instantanée p(t) absorbée par un conducteur ohmique de résistance R ?",
          "options": [
            "Elle est toujours positive ou nulle (p(t) ≥ 0 à tout instant t)",
            "Elle est toujours strictement négative",
            "Elle oscille symétriquement entre -UI et +UI",
            "Elle est constante et ne varie pas dans le temps"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour un résistor, p(t) = R i²(t) : le carré d'un nombre réel étant toujours positif ou nul, la puissance est toujours positive."
        },
        {
          "id": "terminale_d_physique_l12_p01_q7",
          "type": "mcq",
          "prompt": "Quelle est l'expression de la puissance instantanée reçue par un condensateur idéal de capacité C (φ = -π/2) sous une tension U et un courant I ?",
          "options": [
            "p(t) = - U I sin(2ωt) (moyenne nulle)",
            "p(t) = U I (constante)",
            "p(t) = (1/2) C U²",
            "p(t) = U I cos(ωt)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme cos(-π/2) = 0 et cos(2ωt - π/2) = sin(2ωt), p(t) = UI sin(2ωt) : la puissance moyenne est rigoureusement nulle."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l12_p02",
      "order": 2,
      "title": "Puissance moyenne (active), apparente et facteur de puissance",
      "summary": "Expression de la puissance active P = UI cos φ (en Watts), de la puissance apparente S = UI (en Volt-Ampères), du facteur de puissance cos φ = Rtot/Z, localisation exclusive des pertes thermiques dans les résistors (P = Rtot I²) et puissance nulle des dipôles réactifs purs.",
      "conceptExplanation": "1. La puissance moyenne (ou puissance active) P :\nLa puissance moyenne P consommée par un dipôle pendant une période T est la moyenne temporelle de sa puissance instantanée p(t) :\nP = \\langle p(t) \\rangle = \\frac{1}{T} \\int_0^T p(t)\\,\\mathrm{d}t.\nComme la moyenne du terme fluctuant à pulsation 2ω est nulle, on obtient la formule fondamentale de la puissance active en courant alternatif sinusoïdal :\nP = U\\,I\\,\\cos\\varphi_{u/i}.\n- P est la puissance active, exprimée en Watts (W) ;\n- U est la tension efficace en Volts (V) ;\n- I est l'intensité efficace en Ampères (A) ;\n- φu/i est le déphasage de la tension par rapport au courant.\n\n2. La puissance apparente S :\nLe produit direct de la tension efficace par l'intensité efficace est appelé la puissance apparente, notée S :\nS = U \\times I.\n- S s'exprime dans une unité spécifique pour éviter toute confusion avec les Watts : le Volt-Ampère (symbole : V·A ou kVA) ;\n- S caractérise le dimensionnement géométrique et thermique des transformateurs, alternateurs et câbles d'alimentation.\n\n3. Le facteur de puissance cos φ :\nLe facteur de puissance d'une installation est le rapport entre la puissance active P réellement transformée et la puissance apparente S mise en jeu :\n\\cos\\varphi_{u/i} = \\frac{P}{S} = \\frac{P}{U\\,I}.\nPuisque dans le triangle de Fresnel cos φ = Rtot / Z, on a l'égalité fondamentale :\n\\cos\\varphi_{u/i} = \\frac{R_\\text{tot}}{Z} = \\frac{R + r}{\\sqrt{(R + r)^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2}}.\nLe facteur de puissance est un nombre sans unité, toujours compris entre 0 et 1 (0 ≤ cos φ ≤ 1).\n\n4. Localisation des pertes et puissance moyenne dans un circuit RLC série :\nEn substituant U = Z · I et cos φ = Rtot / Z dans la formule de la puissance active :\nP = U\\,I\\,\\cos\\varphi = (Z\\,I)\\,I\\,\\left(\\frac{R_\\text{tot}}{Z}\\right) = R_\\text{tot}\\,I^2 = (R + r)\\,I^2.\nConclusion capitale : dans un dipôle RLC série complet, toute la puissance active moyenne consommée apparaît exclusivement sous forme d'énergie thermique (effet Joule) dans les conducteurs ohmiques et la résistance interne de la bobine. Un condensateur parfait et une bobine pure ne consomment rigoureusement aucune puissance active en moyenne !",
      "keyRule": "Puissance active : P = UI cos φ = Rtot I² (en Watts). Puissance apparente : S = UI (en V·A). Facteur de puissance : cos φ = P/S = Rtot/Z (entre 0 et 1). L et C purs ne consomment aucune puissance (P = 0).",
      "formulas": [
        {
          "name": "Puissance moyenne active consommée",
          "formula": "P = U\\,I\\,\\cos\\varphi = R_\\text{tot}\\,I^2 = (R+r)\\,I^2",
          "note": "En Watts (W)"
        },
        {
          "name": "Puissance apparente",
          "formula": "S = U\\,I",
          "note": "En Volt-Ampères (V·A)"
        },
        {
          "name": "Facteur de puissance",
          "formula": "\\cos\\varphi = \\frac{P}{S} = \\frac{R_\\text{tot}}{Z}",
          "note": "0 ≤ cos φ ≤ 1 (sans unité)"
        }
      ],
      "workedExample": {
        "title": "Calcul complet des puissances d'un moteur asynchrone d'usine",
        "statement": "Un moteur électrique d'atelier est assimilable à l'association en série d'une résistance R = 18 Ω et d'une inductance L = 76,4 mH (0,0764 H). Il est branché sur le secteur 220 V - 50 Hz (ω ≈ 314,2 rad·s⁻¹).\\n1. Calcule l'impédance Z du moteur et son facteur de puissance cos φ.\\n2. Calcule l'intensité efficace I du courant absorbé.\\n3. Calcule la puissance apparente S et la puissance active P consommée par le moteur.\\n4. Vérifie que P = R I².",
        "methodSteps": [
          "Étape 1 : Calculer Z et cos φ :\\nLω = 0,0764 H × 314,2 rad·s⁻¹ ≈ 24,0 Ω.\\nZ = √(R² + L²ω²) = √(18² + 24²) = √(324 + 576) = √900 = 30 Ω.\\ncos φ = R / Z = 18 / 30 = 0,60 (φ = arccos(0,60) ≈ 0,927 rad = 53,1°).",
          "Étape 2 : Calculer le courant efficace I :\\nI = U / Z = 220 V / 30 Ω ≈ 7,33 A.",
          "Étape 3 : Calculer les puissances S et P :\\nS = U × I = 220 V × 7,333 A ≈ 1613 V·A = 1,61 kVA.\\nP = U × I × cos φ = 220 × 7,333 × 0,60 ≈ 968 W.",
          "Étape 4 : Vérifier avec P = R I² :\\nP = 18 Ω × (7,333 A)² = 18 × 53,78 ≈ 968 W. Les deux calculs concordent parfaitement."
        ],
        "conclusion": "Le moteur consomme 968 W de puissance active utile et thermique tout en appelant 1,61 kVA de puissance apparente sur la ligne en raison d'un facteur de puissance médiocre de 0,60."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Distinction fondamentale entre les trois notions de puissance",
        "tableData": {
          "headers": [
            "Type de puissance",
            "Symbole usuel",
            "Formule de calcul",
            "Unité légale SI",
            "Rôle physique et d'ingénierie"
          ],
          "rows": [
            [
              "Puissance active (moyenne)",
              "P",
              "P = U I cos φ = Rtot I²",
              "Watt (W) ou kW",
              "Travail utile mécanique et chaleur thermique réelle"
            ],
            [
              "Puissance apparente",
              "S",
              "S = U · I = Z I²",
              "Volt-Ampère (V·A) ou kVA",
              "Dimensionnement des câbles et des transformateurs"
            ],
            [
              "Facteur de puissance",
              "k = cos φ",
              "cos φ = P / S = Rtot / Z",
              "Sans dimension (0 à 1)",
              "Rendement de transmission électrique de la ligne"
            ],
            [
              "Puissance dans L ou C purs",
              "P(L) ou P(C)",
              "P = U I cos(±π/2) = 0",
              "0 Watt",
              "Aucune consommation active, échange purement réactif"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Formule de la puissance active P = UI cos φ",
          "stepTheme": "Puissance active",
          "stepBadge": "P = UI cos φ [W]",
          "paragraphText": "La puissance active moyenne consommée par un dipôle en courant alternatif est P = U I cos φ. Elle s'exprime en Watts (W) et mesure l'énergie réellement absorbée par le dipôle par unité de temps.",
          "exercise": {
            "id": "terminale_d_physique_l12_p02_q1",
            "type": "mcq",
            "prompt": "Un dipôle alimenté sous U = 230 V est traversé par un courant efficace I = 4,0 A avec un facteur de puissance cos φ = 0,85. Quelle est sa puissance active P ?",
            "options": [
              "P = 782 W",
              "P = 920 W",
              "P = 1082 W",
              "P = 665 W"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P = U × I × cos φ = 230 × 4,0 × 0,85 = 782 W."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Définition de la puissance apparente S = UI",
          "stepTheme": "Puissance apparente",
          "stepBadge": "S = UI [V·A]",
          "paragraphText": "La puissance apparente S est le produit direct de la tension efficace par le courant efficace : S = U · I. Elle s'exprime obligatoirement en Volt-Ampères (V·A) pour la distinguer de la puissance active.",
          "exercise": {
            "id": "terminale_d_physique_l12_p02_q2",
            "type": "mcq",
            "prompt": "Un transformateur d'alimentation est marqué 'Puissance : 5,0 kVA' sous une tension secondaire de 250 V. Quel courant efficace maximal peut-il débiter ?",
            "options": [
              "I_max = 20 A",
              "I_max = 1250 A",
              "I_max = 50 A",
              "I_max = 10 A"
            ],
            "correctAnswerIndex": 0,
            "explanation": "S = U × I => I = S / U = 5000 V·A / 250 V = 20 A."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Localisation exclusive des pertes par effet Joule dans les résistances",
          "stepTheme": "Pertes thermiques",
          "stepBadge": "P = Rtot I²",
          "paragraphText": "En remplaçant U par Z I et cos φ par Rtot / Z, on démontre que P = Rtot I². Dans tout circuit alternatif, seule la résistance dissipe de la puissance active : la bobine et le condensateur ne consomment aucune énergie sur une période.",
          "exercise": {
            "id": "terminale_d_physique_l12_p02_q3",
            "type": "mcq",
            "prompt": "Un circuit RLC série comprenant R = 25 Ω, L = 0,2 H et C = 10 µF est traversé par un courant efficace I = 2,0 A. Quelle est la puissance active P consommée par l'ensemble ?",
            "options": [
              "P = 100 W (car P = R I² = 25 × 2² = 100 W)",
              "P = 50 W",
              "P = 200 W",
              "P dépend obligatoirement de la fréquence N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P = Rtot I² = 25 × (2,0)² = 25 × 4 = 100 W. Seule la résistance consomme de la puissance active."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Puissance nulle d'un condensateur ou d'une bobine idéale",
          "stepTheme": "Dipôles purement réactifs",
          "stepBadge": "cos(±π/2) = 0 => P = 0",
          "paragraphText": "Pour un condensateur pur ou une inductance pure, le déphasage est de ±π/2 (90°). Puisque cos(±π/2) = 0, la puissance moyenne consommée est rigoureusement nulle : P = 0 W. Ces dipôles ne chauffent pas et ne consomment aucune énergie active.",
          "exercise": {
            "id": "terminale_d_physique_l12_p02_q4",
            "type": "mcq",
            "prompt": "Quelle est la puissance moyenne consommée par un condensateur idéal de capacité 50 µF branché directement sous la tension du secteur 220 V - 50 Hz ?",
            "options": [
              "P = 0 W car son déphasage est de -π/2 (cos φ = 0)",
              "P = 153 W",
              "P = 220 W",
              "P = 11 W"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un condensateur pur ne dissipe aucune puissance active : P = U I cos(-π/2) = U I × 0 = 0 W."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confusion entre Watts (W) et Volt-Ampères (V·A)",
          "stepTheme": "Unités de puissance",
          "stepBadge": "W pour active, V·A pour apparente",
          "paragraphText": "Ne confondez jamais les unités ! Écrire une puissance active en V·A ou une puissance apparente en Watts est une erreur lourdement pénalisée aux examens. Seule la puissance active se facture en kWh aux consommateurs particuliers.",
          "exercise": {
            "id": "terminale_d_physique_l12_p02_q5",
            "type": "mcq",
            "prompt": "Sous quelle unité normalisée doit-on impérativement exprimer la puissance apparente S = U · I d'un groupe électrogène ?",
            "options": [
              "En Volt-Ampère (V·A ou kVA)",
              "En Watt (W)",
              "En Joule par seconde uniquement",
              "En Ohm-Ampère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La puissance apparente S s'exprime obligatoirement en Volt-Ampère (V·A) pour la distinguer de la puissance active P (en Watts)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Puissance active maximale à la résonance",
          "stepTheme": "Maximum de puissance",
          "stepBadge": "P0 = U² / Rtot",
          "paragraphText": "À la résonance, cos φ = 1 et Z = Rtot. L'intensité atteint son maximum I0 = U / Rtot. La puissance active consommée atteint alors son maximum absolu : P0 = U I0 = Rtot I0² = U² / Rtot.",
          "exercise": {
            "id": "terminale_d_physique_l12_p02_q6",
            "type": "mcq",
            "prompt": "Sous une tension efficace U = 20 V, un circuit RLC ayant Rtot = 10 Ω est à la résonance d'intensité. Que vaut la puissance active P0 consommée ?",
            "options": [
              "P0 = 40 W",
              "P0 = 20 W",
              "P0 = 200 W",
              "P0 = 400 W"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P0 = U² / Rtot = 20² / 10 = 400 / 10 = 40 W."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Inégalité fondamentale P ≤ S",
          "stepTheme": "Encadrement",
          "stepBadge": "P ≤ S (égalité si cos φ = 1)",
          "paragraphText": "Comme |cos φ| ≤ 1, on a toujours P ≤ S. L'égalité P = S n'a lieu que si cos φ = 1 (circuit purement ohmique ou en résonance d'intensité). Plus cos φ s'éloigne de 1, plus la fraction utile de la puissance apparente diminue.",
          "exercise": {
            "id": "terminale_d_physique_l12_p02_q7",
            "type": "mcq",
            "prompt": "Dans quel cas unique la puissance active P d'un circuit électrique alternatif est-elle rigoureusement égale à sa puissance apparente S ?",
            "options": [
              "Lorsque le facteur de puissance vaut cos φ = 1 (circuit purement résistif ou à la résonance)",
              "Lorsque la fréquence est infinie",
              "Lorsque la tension est nulle",
              "Lorsque le déphasage vaut 90°"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P = S cos φ => P = S si et seulement si cos φ = 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l12_p02_q1",
          "type": "mcq",
          "prompt": "Un dipôle alimenté sous U = 230 V est traversé par un courant efficace I = 4,0 A avec un facteur de puissance cos φ = 0,85. Quelle est sa puissance active P ?",
          "options": [
            "P = 782 W",
            "P = 920 W",
            "P = 1082 W",
            "P = 665 W"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P = U × I × cos φ = 230 × 4,0 × 0,85 = 782 W."
        },
        {
          "id": "terminale_d_physique_l12_p02_q2",
          "type": "mcq",
          "prompt": "Un transformateur d'alimentation est marqué 'Puissance : 5,0 kVA' sous une tension secondaire de 250 V. Quel courant efficace maximal peut-il débiter ?",
          "options": [
            "I_max = 20 A",
            "I_max = 1250 A",
            "I_max = 50 A",
            "I_max = 10 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "S = U × I => I = S / U = 5000 V·A / 250 V = 20 A."
        },
        {
          "id": "terminale_d_physique_l12_p02_q3",
          "type": "mcq",
          "prompt": "Un circuit RLC série comprenant R = 25 Ω, L = 0,2 H et C = 10 µF est traversé par un courant efficace I = 2,0 A. Quelle est la puissance active P consommée par l'ensemble ?",
          "options": [
            "P = 100 W (car P = R I² = 25 × 2² = 100 W)",
            "P = 50 W",
            "P = 200 W",
            "P dépend obligatoirement de la fréquence N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P = Rtot I² = 25 × (2,0)² = 25 × 4 = 100 W. Seule la résistance consomme de la puissance active."
        },
        {
          "id": "terminale_d_physique_l12_p02_q4",
          "type": "mcq",
          "prompt": "Quelle est la puissance moyenne consommée par un condensateur idéal de capacité 50 µF branché directement sous la tension du secteur 220 V - 50 Hz ?",
          "options": [
            "P = 0 W car son déphasage est de -π/2 (cos φ = 0)",
            "P = 153 W",
            "P = 220 W",
            "P = 11 W"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un condensateur pur ne dissipe aucune puissance active : P = U I cos(-π/2) = U I × 0 = 0 W."
        },
        {
          "id": "terminale_d_physique_l12_p02_q5",
          "type": "mcq",
          "prompt": "Sous quelle unité normalisée doit-on impérativement exprimer la puissance apparente S = U · I d'un groupe électrogène ?",
          "options": [
            "En Volt-Ampère (V·A ou kVA)",
            "En Watt (W)",
            "En Joule par seconde uniquement",
            "En Ohm-Ampère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La puissance apparente S s'exprime obligatoirement en Volt-Ampère (V·A) pour la distinguer de la puissance active P (en Watts)."
        },
        {
          "id": "terminale_d_physique_l12_p02_q6",
          "type": "mcq",
          "prompt": "Sous une tension efficace U = 20 V, un circuit RLC ayant Rtot = 10 Ω est à la résonance d'intensité. Que vaut la puissance active P0 consommée ?",
          "options": [
            "P0 = 40 W",
            "P0 = 20 W",
            "P0 = 200 W",
            "P0 = 400 W"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P0 = U² / Rtot = 20² / 10 = 400 / 10 = 40 W."
        },
        {
          "id": "terminale_d_physique_l12_p02_q7",
          "type": "mcq",
          "prompt": "Dans quel cas unique la puissance active P d'un circuit électrique alternatif est-elle rigoureusement égale à sa puissance apparente S ?",
          "options": [
            "Lorsque le facteur de puissance vaut cos φ = 1 (circuit purement résistif ou à la résonance)",
            "Lorsque la fréquence est infinie",
            "Lorsque la tension est nulle",
            "Lorsque le déphasage vaut 90°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P = S cos φ => P = S si et seulement si cos φ = 1."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l12_p03",
      "order": 3,
      "title": "Bande passante définie par la puissance à mi-hauteur",
      "summary": "Puissance active maximale P0 = U²/Rtot à la résonance, définition énergétique de la bande passante P ≥ P0/2, démonstration de l'équivalence exacte avec la bande à 3 dB (I = I0/√2), calcul des pulsations de coupure ω1 et ω2 et largeur Δf = Rtot/(2πL).",
      "conceptExplanation": "1. Puissance active maximale à la résonance :\nLorsque la fréquence du générateur excitateur est égale à la fréquence de résonance N0 = 1/(2π√LC), l'impédance est minimale (Z = Rtot) et le facteur de puissance est unitaire (cos φ = 1). La puissance active consommée par le dipôle atteint sa valeur maximale P0 :\nP_0 = R_\\text{tot}\\,I_0^2 = R_\\text{tot} \\cdot \\left(\\frac{U}{R_\\text{tot}}\\right)^2 = \\frac{U^2}{R_\\text{tot}}.\n\n2. Définition énergétique de la bande passante :\nLa bande passante d'un circuit RLC série est l'intervalle de fréquences [f1 ; f2] pour lesquelles la puissance active moyenne P consommée dans le circuit est supérieure ou égale à la moitié de la puissance maximale P0 consommée à la résonance :\nP \\ge \\frac{P_0}{2}.\n\n3. Démonstration de l'équivalence avec la condition en intensité I ≥ I0/√2 :\nPuisque dans un circuit RLC série la puissance active s'écrit P = Rtot I² et que P0 = Rtot I0², la condition de mi-puissance s'écrit :\nP = \\frac{P_0}{2} \\iff R_\\text{tot}\\,I^2 = \\frac{1}{2}\\,R_\\text{tot}\\,I_0^2 \\iff I^2 = \\frac{I_0^2}{2} \\iff I = \\frac{I_0}{\\sqrt{2}}.\nLa définition énergétique par la mi-puissance (P = P0/2) et la définition géométrique à -3 dB (I = I0/√2) sont donc rigoureusement identiques et équivalentes !\n\n4. Détermination des pulsations de coupure ω1 et ω2 :\nEn remplaçant P = (Rtot · U²) / [Rtot² + (Lω - 1/Cω)²] dans l'égalité P = P0/2 = U² / (2 Rtot) :\n\\frac{R_\\text{tot}\\,U^2}{R_\\text{tot}^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2} = \\frac{U^2}{2\\,R_\\text{tot}} \\iff R_\\text{tot}^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2 = 2\\,R_\\text{tot}^2 \\iff \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2 = R_\\text{tot}^2.\nEn prenant la racine carrée, on obtient deux cas réels :\n- 1er cas (pulsation haute ω1) : Lω1 - 1/(Cω1) = +Rtot \\iff L C ω1² - Rtot C ω1 - 1 = 0 ;\n- 2ème cas (pulsation basse ω2) : Lω2 - 1/(Cω2) = -Rtot \\iff L C ω2² + Rtot C ω2 - 1 = 0.\nLa seule solution positive de chaque équation donne :\n\\omega_1 = \\frac{R_\\text{tot} C + \\sqrt{R_\\text{tot}^2 C^2 + 4 L C}}{2 L C} \\quad \\text{et} \\quad \\omega_2 = \\frac{- R_\\text{tot} C + \\sqrt{R_\\text{tot}^2 C^2 + 4 L C}}{2 L C}.\nEn faisant la différence, les termes sous la racine s'annulent :\n\\Delta\\omega = \\omega_1 - \\omega_2 = \\frac{2\\,R_\\text{tot}\\,C}{2\\,L\\,C} = \\frac{R_\\text{tot}}{L} \\implies \\Delta f = \\frac{\\Delta\\omega}{2\\pi} = \\frac{R_\\text{tot}}{2\\pi\\,L}.",
      "keyRule": "La bande passante à mi-puissance (P = P0/2) est exactement la bande passante à I = I0/√2. Sa largeur s'écrit Δf = f1 - f2 = Rtot / (2πL) (en Hz) et Δω = Rtot / L (en rad/s).",
      "formulas": [
        {
          "name": "Condition de mi-puissance",
          "formula": "P = \\frac{P_0}{2} \\iff I = \\frac{I_0}{\\sqrt{2}}",
          "note": "P0 = U² / Rtot = puissance maximale"
        },
        {
          "name": "Équation des pulsations de coupure",
          "formula": "\\left|L\\omega - \\frac{1}{C\\omega}\\right| = R_\\text{tot}",
          "note": "Donne ω1 et ω2"
        },
        {
          "name": "Largeur de la bande passante énergétique",
          "formula": "\\Delta f = f_1 - f_2 = \\frac{R_\\text{tot}}{2\\pi\\,L} \\quad ; \\quad \\Delta\\omega = \\frac{R_\\text{tot}}{L}",
          "note": "Parfaite concordance théorique"
        }
      ],
      "workedExample": {
        "title": "Calcul complet de la bande passante à mi-puissance",
        "statement": "Dans un TP de Terminale, un groupe monte en série un condensateur C = 4,0 µF, une bobine pure L = 1,0 H et un conducteur ohmique R = 500 Ω. L'ensemble est alimenté sous une tension efficace U = 220 V de fréquence réglable.\\n1. Calcule la pulsation propre ω0, la fréquence de résonance f0 et la puissance maximale P0.\\n2. Calcule les deux pulsations de coupure ω1 et ω2 pour lesquelles P = P0 / 2.\\n3. En déduis les fréquences correspondantes f1 et f2, puis la largeur de la bande passante Δf.\\n4. Vérifie la relation théorique Δf = R / (2πL).",
        "methodSteps": [
          "Étape 1 : Calculer ω0, f0 et P0 :\\nω0 = 1 / √(LC) = 1 / √(1,0 × 4,0 × 10⁻⁶) = 1 / (2,0 × 10⁻³) = 500 rad·s⁻¹.\\nf0 = ω0 / (2π) = 500 / (2 × 3,1416) ≈ 79,6 Hz.\\nP0 = U² / R = 220² / 500 = 48 400 / 500 = 96,8 W.",
          "Étape 2 : Calculer ω1 et ω2 pour P = P0 / 2 = 48,4 W :\\nRC = 500 × 4,0 × 10⁻⁶ = 2,0 × 10⁻³ s. LC = 1,0 × 4,0 × 10⁻⁶ = 4,0 × 10⁻⁶ s².\\n√(R²C² + 4LC) = √[(2,0 × 10⁻³)² + 4 × 4,0 × 10⁻⁶] = √[4 × 10⁻⁶ + 16 × 10⁻⁶] = √(20 × 10⁻⁶) ≈ 4,472 × 10⁻³ s.\\nω1 = (RC + √(R²C² + 4LC)) / (2LC) = (2,0 × 10⁻³ + 4,472 × 10⁻³) / (8,0 × 10⁻⁶) = 6,472 × 10⁻³ / 8,0 × 10⁻⁶ = 809 rad·s⁻¹.\\nω2 = (-RC + √(R²C² + 4LC)) / (2LC) = (-2,0 × 10⁻³ + 4,472 × 10⁻³) / (8,0 × 10⁻⁶) = 2,472 × 10⁻³ / 8,0 × 10⁻⁶ = 309 rad·s⁻¹.",
          "Étape 3 : Calculer f1, f2 et Δf :\\nf1 = ω1 / (2π) = 809 / 6,2832 ≈ 128,8 Hz ≈ 129 Hz.\\nf2 = ω2 / (2π) = 309 / 6,2832 ≈ 49,2 Hz.\\nΔf = f1 - f2 = 128,8 - 49,2 = 79,6 Hz.",
          "Étape 4 : Vérifier la formule théorique :\\nΔf_théorique = R / (2πL) = 500 / (2 × 3,1416 × 1,0) = 500 / 6,2832 ≈ 79,6 Hz. L'égalité est rigoureusement parfaite !"
        ],
        "conclusion": "La puissance maximale P0 = 96,8 W est divisée par deux (P = 48,4 W) à f2 = 49,2 Hz et f1 = 129 Hz. L'intervalle de mi-puissance a une largeur exacte Δf = 79,6 Hz = R / (2πL)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Courbe de puissance P = f(N) et bande passante à mi-hauteur",
        "tableData": {
          "headers": [
            "Point de la courbe",
            "Fréquence N",
            "Puissance dissipée P",
            "Intensité efficace I",
            "Déphasage φ"
          ],
          "rows": [
            [
              "Fréquence de coupure basse",
              "f2 = 49,2 Hz",
              "P = P0 / 2 = 48,4 W",
              "I = I0 / √2",
              "φ = -45° (capacitif)"
            ],
            [
              "Pic de résonance",
              "f0 = 79,6 Hz",
              "P = P0 = 96,8 W (maximum)",
              "I = I0 = 0,44 A",
              "φ = 0° (en phase)"
            ],
            [
              "Fréquence de coupure haute",
              "f1 = 129,0 Hz",
              "P = P0 / 2 = 48,4 W",
              "I = I0 / √2",
              "φ = +45° (inductif)"
            ],
            [
              "Largeur de la bande passante",
              "Δf = f1 - f2 = 79,6 Hz",
              "P ≥ P0 / 2 sur tout l'intervalle",
              "I ≥ I0 / √2",
              "Intervalle de fonctionnement utile"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition énergétique de la bande passante",
          "stepTheme": "Puissance à mi-hauteur",
          "stepBadge": "P ≥ P0 / 2",
          "paragraphText": "La bande passante d'un circuit RLC série est l'intervalle de fréquences pour lesquelles la puissance active consommée par le circuit est supérieure ou égale à la moitié de la puissance maximale de résonance : P ≥ P0 / 2.",
          "exercise": {
            "id": "terminale_d_physique_l12_p03_q1",
            "type": "mcq",
            "prompt": "Un circuit RLC consomme à la résonance une puissance P0 = 64 W. Quelle puissance consomme-t-il exactement aux deux extrémités de sa bande passante ?",
            "options": [
              "P = 32 W (la moitié de la puissance maximale)",
              "P = 45,3 W",
              "P = 16 W",
              "P = 64 W"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, les bornes de la bande passante correspondent à la mi-puissance : P = P0 / 2 = 64 / 2 = 32 W."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Démonstration de l'identité P/P0 = (I/I0)²",
          "stepTheme": "Lien puissance-courant",
          "stepBadge": "P/P0 = I²/I0² = 1/2",
          "paragraphText": "Comme P = Rtot I² et P0 = Rtot I0², le rapport P/P0 se simplifie par Rtot : P / P0 = I² / I0². Imposer P = P0 / 2 équivaut donc rigoureusement à I² = I0² / 2, soit I = I0 / √2.",
          "exercise": {
            "id": "terminale_d_physique_l12_p03_q2",
            "type": "mcq",
            "prompt": "Pourquoi la bande passante à -3 dB (définie par I = I0/√2) coïncide-t-elle exactement avec la bande passante à mi-puissance (P = P0/2) ?",
            "options": [
              "Parce que la puissance thermique est proportionnelle au carré de l'intensité (P = R I²), et que (1/√2)² = 1/2",
              "Parce que le voltmètre divise la tension par deux",
              "Parce que la résonance multiplie la fréquence par deux",
              "C'est une simple coïncidence numérique valable uniquement à 50 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P ∝ I². Si le courant est divisé par √2, la puissance est divisée par (√2)² = 2 : c'est la mi-puissance exacte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul de la largeur de bande en pulsation Δω = Rtot / L",
          "stepTheme": "Largeur en pulsation",
          "stepBadge": "Δω = Rtot / L [rad·s⁻¹]",
          "paragraphText": "En soustrayant les deux solutions positives ω1 et ω2 issues de |Lω - 1/Cω| = Rtot, la largeur en pulsation est égale au quotient de la résistance totale par l'inductance : Δω = Rtot / L.",
          "exercise": {
            "id": "terminale_d_physique_l12_p03_q3",
            "type": "mcq",
            "prompt": "Un circuit RLC série a une inductance L = 0,40 H et une résistance totale Rtot = 80 Ω. Quelle est la largeur de sa bande passante en pulsation Δω ?",
            "options": [
              "Δω = 200 rad·s⁻¹",
              "Δω = 32 rad·s⁻¹",
              "Δω = 0,005 rad·s⁻¹",
              "Δω = 31,8 rad·s⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Δω = Rtot / L = 80 / 0,40 = 200 rad·s⁻¹."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Largeur en fréquence Δf = Rtot / (2πL)",
          "stepTheme": "Largeur en Hertz",
          "stepBadge": "Δf = Rtot / (2πL) [Hz]",
          "paragraphText": "Puisque Δω = 2π Δf, la largeur de la bande passante exprimée en Hertz s'obtient en divisant Δω par 2π : Δf = Rtot / (2π L).",
          "exercise": {
            "id": "terminale_d_physique_l12_p03_q4",
            "type": "mcq",
            "prompt": "Si la largeur en pulsation d'un filtre est Δω = 628,3 rad·s⁻¹, quelle est sa largeur de bande passante en fréquence Δf ?",
            "options": [
              "Δf = 100 Hz",
              "Δf = 628 Hz",
              "Δf = 50 Hz",
              "Δf = 3948 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Δf = Δω / (2π) = 628,3 / (2 × 3,1416) = 100 Hz."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Attention au produit des fréquences de coupure : f1 · f2 = f0²",
          "stepTheme": "Moyenne géométrique",
          "stepBadge": "f0 = √(f1 · f2) ≠ (f1+f2)/2",
          "paragraphText": "Contrairement à une idée reçue, la courbe de résonance n'est pas rigoureusement symétrique par rapport à f0 : la fréquence de résonance f0 est la moyenne GÉOMÉTRIQUE des fréquences de coupure (f0 = √(f1 · f2)) et non leur moyenne arithmétique !",
          "exercise": {
            "id": "terminale_d_physique_l12_p03_q5",
            "type": "mcq",
            "prompt": "Les fréquences de coupure d'un circuit résonant sont f1 = 400 Hz et f2 = 100 Hz. Quelle est la fréquence propre de résonance f0 exacte ?",
            "options": [
              "f0 = √(400 × 100) = √40000 = 200 Hz",
              "f0 = (400 + 100) / 2 = 250 Hz",
              "f0 = 300 Hz",
              "f0 = 150 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par propriété mathématique des équations en ω1 et ω2, ω1 · ω2 = 1/(LC) = ω0², donc f0 = √(f1 · f2) = √(40 000) = 200 Hz."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Énergie consommée dans la bande passante",
          "stepTheme": "Consommation d'énergie",
          "stepBadge": "E = P · Δt",
          "paragraphText": "Pour un appareil fonctionnant à l'intérieur de sa bande passante pendant une durée Δt, l'énergie électrique consommée en Joules est E = P · Δt = U I cos φ · Δt. Plus le circuit fonctionne près de la résonance, plus le transfert d'énergie est efficace.",
          "exercise": {
            "id": "terminale_d_physique_l12_p03_q6",
            "type": "mcq",
            "prompt": "Un dipôle RLC consomme une puissance moyenne constante P = 250 W pendant une durée de fonctionnement de 2 heures. Quelle est l'énergie consommée en kilowattheures (kWh) ?",
            "options": [
              "E = 0,50 kWh",
              "E = 500 kWh",
              "E = 2,0 kWh",
              "E = 125 kWh"
            ],
            "correctAnswerIndex": 0,
            "explanation": "E = P (en kW) × t (en heures) = 0,250 kW × 2 h = 0,50 kWh (soit 1,8 × 10⁶ J)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Rôle de l'amortissement sur la bande passante énergétique",
          "stepTheme": "Amortissement",
          "stepBadge": "Frottement thermique",
          "paragraphText": "La largeur de la bande passante mesure la rapidité avec laquelle l'oscillateur dissipe son énergie. Un circuit fortement amorti par une grande résistance R dissipe l'énergie sur un large éventail de fréquences (large bande passante).",
          "exercise": {
            "id": "terminale_d_physique_l12_p03_q7",
            "type": "mcq",
            "prompt": "Si l'on veut concevoir un circuit RLC capable d'absorber de la puissance sur une très large bande de fréquences (filtre large bande), comment doit-on choisir sa résistance R ?",
            "options": [
              "On doit choisir une résistance R élevée",
              "On doit choisir une résistance R nulle",
              "La résistance n'a aucune influence sur la largeur de la bande passante",
              "On doit retirer la bobine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Puisque Δf = R / (2πL), augmenter la résistance R élargit proportionnellement la bande passante."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l12_p03_q1",
          "type": "mcq",
          "prompt": "Un circuit RLC consomme à la résonance une puissance P0 = 64 W. Quelle puissance consomme-t-il exactement aux deux extrémités de sa bande passante ?",
          "options": [
            "P = 32 W (la moitié de la puissance maximale)",
            "P = 45,3 W",
            "P = 16 W",
            "P = 64 W"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, les bornes de la bande passante correspondent à la mi-puissance : P = P0 / 2 = 64 / 2 = 32 W."
        },
        {
          "id": "terminale_d_physique_l12_p03_q2",
          "type": "mcq",
          "prompt": "Pourquoi la bande passante à -3 dB (définie par I = I0/√2) coïncide-t-elle exactement avec la bande passante à mi-puissance (P = P0/2) ?",
          "options": [
            "Parce que la puissance thermique est proportionnelle au carré de l'intensité (P = R I²), et que (1/√2)² = 1/2",
            "Parce que le voltmètre divise la tension par deux",
            "Parce que la résonance multiplie la fréquence par deux",
            "C'est une simple coïncidence numérique valable uniquement à 50 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P ∝ I². Si le courant est divisé par √2, la puissance est divisée par (√2)² = 2 : c'est la mi-puissance exacte."
        },
        {
          "id": "terminale_d_physique_l12_p03_q3",
          "type": "mcq",
          "prompt": "Un circuit RLC série a une inductance L = 0,40 H et une résistance totale Rtot = 80 Ω. Quelle est la largeur de sa bande passante en pulsation Δω ?",
          "options": [
            "Δω = 200 rad·s⁻¹",
            "Δω = 32 rad·s⁻¹",
            "Δω = 0,005 rad·s⁻¹",
            "Δω = 31,8 rad·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Δω = Rtot / L = 80 / 0,40 = 200 rad·s⁻¹."
        },
        {
          "id": "terminale_d_physique_l12_p03_q4",
          "type": "mcq",
          "prompt": "Si la largeur en pulsation d'un filtre est Δω = 628,3 rad·s⁻¹, quelle est sa largeur de bande passante en fréquence Δf ?",
          "options": [
            "Δf = 100 Hz",
            "Δf = 628 Hz",
            "Δf = 50 Hz",
            "Δf = 3948 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Δf = Δω / (2π) = 628,3 / (2 × 3,1416) = 100 Hz."
        },
        {
          "id": "terminale_d_physique_l12_p03_q5",
          "type": "mcq",
          "prompt": "Les fréquences de coupure d'un circuit résonant sont f1 = 400 Hz et f2 = 100 Hz. Quelle est la fréquence propre de résonance f0 exacte ?",
          "options": [
            "f0 = √(400 × 100) = √40000 = 200 Hz",
            "f0 = (400 + 100) / 2 = 250 Hz",
            "f0 = 300 Hz",
            "f0 = 150 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par propriété mathématique des équations en ω1 et ω2, ω1 · ω2 = 1/(LC) = ω0², donc f0 = √(f1 · f2) = √(40 000) = 200 Hz."
        },
        {
          "id": "terminale_d_physique_l12_p03_q6",
          "type": "mcq",
          "prompt": "Un dipôle RLC consomme une puissance moyenne constante P = 250 W pendant une durée de fonctionnement de 2 heures. Quelle est l'énergie consommée en kilowattheures (kWh) ?",
          "options": [
            "E = 0,50 kWh",
            "E = 500 kWh",
            "E = 2,0 kWh",
            "E = 125 kWh"
          ],
          "correctAnswerIndex": 0,
          "explanation": "E = P (en kW) × t (en heures) = 0,250 kW × 2 h = 0,50 kWh (soit 1,8 × 10⁶ J)."
        },
        {
          "id": "terminale_d_physique_l12_p03_q7",
          "type": "mcq",
          "prompt": "Si l'on veut concevoir un circuit RLC capable d'absorber de la puissance sur une très large bande de fréquences (filtre large bande), comment doit-on choisir sa résistance R ?",
          "options": [
            "On doit choisir une résistance R élevée",
            "On doit choisir une résistance R nulle",
            "La résistance n'a aucune influence sur la largeur de la bande passante",
            "On doit retirer la bobine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque Δf = R / (2πL), augmenter la résistance R élargit proportionnellement la bande passante."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l12_p04",
      "order": 4,
      "title": "Facteur de puissance et relèvement par batterie de condensateurs",
      "summary": "Inconvénients majeurs d'un facteur de puissance faible (surintensité en ligne, surchauffe et pertes Joule excessives), démonstration de la variation des pertes en 1/cos² φ, et méthode industrielle de relèvement du cos φ par adjonction de condensateurs en dérivation.",
      "conceptExplanation": "1. Pourquoi le facteur de puissance doit-il être proche de 1 ?\nDans toute installation électrique industrielle ou domestique alimentée sous une tension efficace fixée U (par exemple 220 V ou 400 V), la puissance active utile consommée est P = UI cos φ.\nL'intensité efficace appelée sur la ligne d'alimentation s'écrit donc :\nI = \\frac{P}{U\\,\\cos\\varphi}.\nSi une usine utilise de nombreux moteurs asynchrones et transformateurs (très inductifs), le déphasage φ est grand et le facteur de puissance cos φ est faible (par exemple cos φ = 0,60 au lieu de 0,90) :\n- Pour fournir exactement la même puissance utile P = 10 kW, l'intensité efficace appelée passe de I = 50,5 A (pour cos φ = 0,9) à I' = 75,8 A (pour cos φ = 0,6) ;\n- Le courant dans les câbles augmente d'un facteur 1,5 (50 % de courant supplémentaire sans produire le moindre travail utile en plus !).\n\n2. Conséquences désastreuses d'un mauvais facteur de puissance :\n- Augmentation spectaculaire des pertes par effet Joule dans les lignes de distribution : les pertes Joule s'écrivent P_pertes = r_ligne · I² = r_ligne · P² / (U² cos² φ). Elles sont inversement proportionnelles au carré du facteur de puissance (1 / cos² φ) ! En passant de cos φ = 0,9 à 0,6, les pertes en ligne sont multipliées par (75,8 / 50,5)² = 2,25 (soit +125 % de pertes pures) ;\n- Chutes de tension en ligne plus fortes (ΔU = r_ligne · I) détériorant la qualité du courant chez les usagers voisins ;\n- Nécessité de surdimensionner les alternateurs, les transformateurs et la section des câbles en cuivre pour supporter ce courant inutile.\nPour cette raison, les compagnies distributrices d'électricité (comme la CIE en Côte d'Ivoire) imposent un facteur de puissance minimal (souvent cos φ ≥ 0,90) sous peine de lourdes pénalités financières.\n\n3. Principe du relèvement du facteur de puissance (compensation d'énergie réactive) :\nPour ramener le facteur de puissance d'une installation inductive d'une valeur médiocre cos φ1 à une valeur optimale cos φ2 ≈ 0,95 ou 1, on branche une batterie de condensateurs de capacité C en dérivation (parallèle) aux bornes de l'installation :\n- Le condensateur appelle un courant en avance de 90° qui annule la composante réactive inductive du courant des moteurs ;\n- La puissance active utile P consommée par l'usine reste rigoureusement inchangée ;\n- L'intensité totale appelée sur le réseau public I diminue considérablement, soulageant les transformateurs et réduisant les pertes Joule.",
      "keyRule": "Un facteur de puissance faible (cos φ < 0,8) augmente le courant I = P/(U cos φ) et multiplie les pertes Joule en 1/cos² φ. On relève le facteur de puissance en connectant des condensateurs en dérivation.",
      "formulas": [
        {
          "name": "Intensité appelée en fonction du facteur de puissance",
          "formula": "I = \\frac{P}{U\\,\\cos\\varphi}",
          "note": "I augmente si cos φ diminue"
        },
        {
          "name": "Pertes par effet Joule dans la ligne d'amenée",
          "formula": "P_\\text{pertes} = r_\\text{ligne}\\,I^2 = \\frac{r_\\text{ligne}\\,P^2}{U^2\\,\\cos^2\\varphi}",
          "note": "Pertes inversement proportionnelles à cos² φ"
        },
        {
          "name": "Rapport d'accroissement des pertes Joule",
          "formula": "\\frac{P_\\text{pertes}'}{P_\\text{pertes}} = \\left(\\frac{\\cos\\varphi_1}{\\cos\\varphi_2}\\right)^2",
          "note": "Multipliées par 2,25 si cos φ passe de 0,9 à 0,6"
        }
      ],
      "workedExample": {
        "title": "Calcul de l'impact du facteur de puissance sur les pertes en ligne",
        "statement": "Une entreprise industrielle ivoirienne absorbe une puissance active constante P = 22 kW sous une tension efficace monophasée U = 220 V. La ligne électrique qui relie le transformateur de quartier à l'usine a une résistance totale r_ligne = 0,50 Ω.\\n1. Calcule l'intensité I1 appelée et les pertes Joule en ligne P_pertes1 si l'installation a un bon facteur de puissance cos φ1 = 0,92.\\n2. Calcule l'intensité I2 et les pertes P_pertes2 si des moteurs dégradent le facteur de puissance à cos φ2 = 0,55.\\n3. Compare les pertes Joule dans les deux cas et commente.",
        "methodSteps": [
          "Étape 1 : Cas où cos φ1 = 0,92 :\\nI1 = P / (U × cos φ1) = 22 000 / (220 × 0,92) = 22 000 / 202,4 ≈ 108,7 A.\\nP_pertes1 = r_ligne × I1² = 0,50 × (108,7)² = 0,50 × 11 816 ≈ 5908 W = 5,91 kW.",
          "Étape 2 : Cas où cos φ2 = 0,55 :\\nI2 = P / (U × cos φ2) = 22 000 / (220 × 0,55) = 22 000 / 121 = 181,8 A.\\nP_pertes2 = r_ligne × I2² = 0,50 × (181,8)² = 0,50 × 33 051 ≈ 16 526 W = 16,53 kW.",
          "Étape 3 : Comparer les pertes :\\nRapport = P_pertes2 / P_pertes1 = 16 526 / 5908 ≈ 2,80.\\nPertes supplémentaires dissipées en pure perte dans les câbles : 16,53 - 5,91 = 10,62 kW !"
        ],
        "conclusion": "La dégradation du facteur de puissance fait bondir les pertes par effet Joule de 5,9 kW à 16,5 kW (pertes multipliées par 2,8). L'usine gaspille 10,6 kW de chaleur dans ses câbles, d'où l'obligation d'installer des condensateurs de compensation."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Effet du relèvement du facteur de puissance sur une installation industrielle",
        "tableData": {
          "headers": [
            "Paramètre de l'installation",
            "Avant compensation (cos φ = 0,6)",
            "Après compensation (cos φ = 0,95)",
            "Bénéfice technique et économique"
          ],
          "rows": [
            [
              "Puissance active utile P",
              "10 kW (constante)",
              "10 kW (constante)",
              "Même travail utile mécanique produit"
            ],
            [
              "Intensité en ligne I",
              "75,8 A (très élevée)",
              "47,8 A (réduite de 37 %)",
              "Moins d'échauffement des disjoncteurs et câbles"
            ],
            [
              "Puissance apparente S",
              "16,7 kVA",
              "10,5 kVA",
              "Libère de la puissance sur le transformateur"
            ],
            [
              "Pertes Joule en ligne",
              "Relativement à 100 %",
              "Réduites à 40 % (-60 % de pertes)",
              "Facture d'électricité fortement allégée"
            ],
            [
              "Pénalités du distributeur",
              "Pénalités financières lourdes",
              "Aucune pénalité (bonus réseau)",
              "Amortissement rapide des condensateurs"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Rôle économique du facteur de puissance",
          "stepTheme": "Rendement de ligne",
          "stepBadge": "cos φ proche de 1",
          "paragraphText": "Le facteur de puissance cos φ mesure l'efficacité avec laquelle le courant appelé est utilisé pour produire de la puissance active. Il doit être maintenu le plus proche possible de 1 afin de minimiser le courant I transitant sur le réseau public pour une puissance P donnée.",
          "exercise": {
            "id": "terminale_d_physique_l12_p04_q1",
            "type": "mcq",
            "prompt": "Pour quelle raison fondamentale les distributeurs d'énergie électrique exigent-ils que les entreprises industrielles maintiennent un facteur de puissance cos φ supérieur à 0,90 ?",
            "options": [
              "Pour réduire l'intensité du courant en ligne et limiter ainsi les pertes par effet Joule dans les câbles de transport",
              "Pour augmenter la fréquence du réseau à 100 Hz",
              "Pour empêcher les transformateurs de tourner mécaniquement",
              "Pour obliger les usines à couper leurs moteurs la nuit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un facteur de puissance élevé diminue l'intensité en ligne I = P/(U cos φ), ce qui réduit drastiquement les pertes Joule et les chutes de tension."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Loi de variation des pertes Joule en 1 / cos² φ",
          "stepTheme": "Loi quadratique",
          "stepBadge": "Pertes ∝ 1 / cos² φ",
          "paragraphText": "Puisque les pertes Joule dans les lignes d'alimentation s'écrivent P_pertes = r_ligne I² et que I = P / (U cos φ), on a P_pertes = r_ligne P² / (U² cos² φ). Les pertes varient comme l'inverse du carré du facteur de puissance : diviser cos φ par 1,5 multiplie les pertes par 2,25.",
          "exercise": {
            "id": "terminale_d_physique_l12_p04_q2",
            "type": "mcq",
            "prompt": "Si le facteur de puissance d'une installation industrielle passe de 0,9 à 0,6 à puissance utile P constante, par quel facteur les pertes Joule dans les câbles d'alimentation sont-elles multipliées ?",
            "options": [
              "Multipliées par 2,25 car les pertes dépendent de 1 / cos² φ",
              "Multipliées par 1,5",
              "Divisées par 2,25",
              "Invariables car P reste constante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Rapport des pertes = (cos φ1 / cos φ2)² = (0,9 / 0,6)² = (1,5)² = 2,25."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Branchement d'une batterie de condensateurs en dérivation",
          "stepTheme": "Technique de compensation",
          "stepBadge": "Condensateurs en parallèle",
          "paragraphText": "Pour relever le facteur de puissance sans modifier la tension aux bornes des appareils, on installe une batterie de condensateurs en dérivation (parallèle) à l'entrée de l'installation. Les condensateurs fournissent localement l'énergie réactive réclamée par les bobinages des moteurs.",
          "exercise": {
            "id": "terminale_d_physique_l12_p04_q3",
            "type": "mcq",
            "prompt": "Comment doit être connectée une batterie de condensateurs destinée à relever le facteur de puissance d'une installation d'atelier ?",
            "options": [
              "En dérivation (parallèle) aux bornes de l'installation",
              "En série sur la phase de la ligne principale",
              "En série avec le fil de terre",
              "En série entre les bornes du disjoncteur différentiel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les condensateurs sont montés en dérivation afin de compenser le courant réactif tout en maintenant la tension nominale d'alimentation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Conservation de la puissance active P lors de la compensation",
          "stepTheme": "Bilan actif invariable",
          "stepBadge": "P_totale inchangée",
          "paragraphText": "Un condensateur idéal ne consommant aucune puissance active (PC = 0 W), l'adjonction de la batterie de condensateurs en parallèle ne modifie absolument pas la puissance active consommée par les machines de l'usine : le travail produit reste strictement le même.",
          "exercise": {
            "id": "terminale_d_physique_l12_p04_q4",
            "type": "mcq",
            "prompt": "Que devient la puissance active P consommée par les moteurs d'une usine lorsqu'on connecte une batterie de condensateurs de compensation en parallèle ?",
            "options": [
              "Elle reste strictement identique",
              "Elle double",
              "Elle est divisée par deux",
              "Elle s'annule complètement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les condensateurs idéaux ne consomment aucune puissance active (P = 0). La puissance active totale P consommée par les machines reste inchangée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Attention au risque de surcompensation",
          "stepTheme": "Surcompensation",
          "stepBadge": "cos φ > 1 impossible",
          "paragraphText": "Si l'on installe une capacité C excessivement grande, le circuit peut basculer d'un comportement inductif à un comportement fortement capacitif (déphasage négatif). Le courant se remet alors à augmenter et le facteur de puissance rechute : c'est la surcompensation.",
          "exercise": {
            "id": "terminale_d_physique_l12_p04_q5",
            "type": "mcq",
            "prompt": "Que se produit-il si la capacité des condensateurs ajoutés est trop importante (surcompensation) ?",
            "options": [
              "L'installation devient capacitive, le courant total ré-augmente et le facteur de puissance diminue à nouveau",
              "La tension du réseau s'effondre à 0 V",
              "Le disjoncteur transforme le courant alternatif en continu",
              "Le facteur de puissance dépasse 1,5"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une capacité excessive rend le circuit capacitif (φ < 0), ce qui ré-augmente l'intensité réactive et dégrade le cos φ."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Calcul de la capacité de compensation C",
          "stepTheme": "Formule de Boucherot",
          "stepBadge": "C = P (tan φ - tan φ') / (U² ω)",
          "paragraphText": "Pour relever la phase de φ à φ' à puissance P constante sous tension U et pulsation ω, la capacité nécessaire de la batterie de condensateurs en dérivation vaut : C = [P · (tan φ - tan φ')] / (U² · ω).",
          "exercise": {
            "id": "terminale_d_physique_l12_p04_q6",
            "type": "mcq",
            "prompt": "Pour annuler totalement le déphasage d'un circuit (passer à tan φ' = 0, soit cos φ' = 1) absorbant P sous tension U et pulsation ω, quelle capacité C de condensateur parallèle faut-il ?",
            "options": [
              "C = (P · tan φ) / (U² · ω)",
              "C = U² / (P · ω)",
              "C = P / (U · ω · cos φ)",
              "C = tan φ / (P · U²)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La puissance réactive à compenser est Qc = P tan φ = C U² ω, d'où C = (P tan φ) / (U² ω)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Impact sur la section des câbles d'alimentation",
          "stepTheme": "Économie de cuivre",
          "stepBadge": "Section de câble ∝ I",
          "paragraphText": "La section requise pour un conducteur en cuivre est directement proportionnelle à l'intensité efficace maximale qu'il doit véhiculer sans s'échauffer (généralement 5 A/mm²). En divisant le courant appelé par 1,5 grâce à un cos φ de 0,95, on réduit d'un tiers la masse de cuivre des câbles.",
          "exercise": {
            "id": "terminale_d_physique_l12_p04_q7",
            "type": "mcq",
            "prompt": "Quel avantage structurel apporte la réduction de courant permise par un facteur de puissance élevé lors de la construction d'un bâtiment ?",
            "options": [
              "Elle permet d'utiliser des câbles électriques de plus petite section de cuivre et des disjoncteurs moins coûteux",
              "Elle augmente la vitesse de transmission d'internet",
              "Elle permet de supprimer les fusibles",
              "Elle annule le champ de pesanteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un courant plus faible permet d'utiliser des conducteurs de plus petit diamètre, réduisant considérablement le coût de l'installation électrique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l12_p04_q1",
          "type": "mcq",
          "prompt": "Pour quelle raison fondamentale les distributeurs d'énergie électrique exigent-ils que les entreprises industrielles maintiennent un facteur de puissance cos φ supérieur à 0,90 ?",
          "options": [
            "Pour réduire l'intensité du courant en ligne et limiter ainsi les pertes par effet Joule dans les câbles de transport",
            "Pour augmenter la fréquence du réseau à 100 Hz",
            "Pour empêcher les transformateurs de tourner mécaniquement",
            "Pour obliger les usines à couper leurs moteurs la nuit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un facteur de puissance élevé diminue l'intensité en ligne I = P/(U cos φ), ce qui réduit drastiquement les pertes Joule et les chutes de tension."
        },
        {
          "id": "terminale_d_physique_l12_p04_q2",
          "type": "mcq",
          "prompt": "Si le facteur de puissance d'une installation industrielle passe de 0,9 à 0,6 à puissance utile P constante, par quel facteur les pertes Joule dans les câbles d'alimentation sont-elles multipliées ?",
          "options": [
            "Multipliées par 2,25 car les pertes dépendent de 1 / cos² φ",
            "Multipliées par 1,5",
            "Divisées par 2,25",
            "Invariables car P reste constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Rapport des pertes = (cos φ1 / cos φ2)² = (0,9 / 0,6)² = (1,5)² = 2,25."
        },
        {
          "id": "terminale_d_physique_l12_p04_q3",
          "type": "mcq",
          "prompt": "Comment doit être connectée une batterie de condensateurs destinée à relever le facteur de puissance d'une installation d'atelier ?",
          "options": [
            "En dérivation (parallèle) aux bornes de l'installation",
            "En série sur la phase de la ligne principale",
            "En série avec le fil de terre",
            "En série entre les bornes du disjoncteur différentiel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les condensateurs sont montés en dérivation afin de compenser le courant réactif tout en maintenant la tension nominale d'alimentation."
        },
        {
          "id": "terminale_d_physique_l12_p04_q4",
          "type": "mcq",
          "prompt": "Que devient la puissance active P consommée par les moteurs d'une usine lorsqu'on connecte une batterie de condensateurs de compensation en parallèle ?",
          "options": [
            "Elle reste strictement identique",
            "Elle double",
            "Elle est divisée par deux",
            "Elle s'annule complètement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les condensateurs idéaux ne consomment aucune puissance active (P = 0). La puissance active totale P consommée par les machines reste inchangée."
        },
        {
          "id": "terminale_d_physique_l12_p04_q5",
          "type": "mcq",
          "prompt": "Que se produit-il si la capacité des condensateurs ajoutés est trop importante (surcompensation) ?",
          "options": [
            "L'installation devient capacitive, le courant total ré-augmente et le facteur de puissance diminue à nouveau",
            "La tension du réseau s'effondre à 0 V",
            "Le disjoncteur transforme le courant alternatif en continu",
            "Le facteur de puissance dépasse 1,5"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une capacité excessive rend le circuit capacitif (φ < 0), ce qui ré-augmente l'intensité réactive et dégrade le cos φ."
        },
        {
          "id": "terminale_d_physique_l12_p04_q6",
          "type": "mcq",
          "prompt": "Pour annuler totalement le déphasage d'un circuit (passer à tan φ' = 0, soit cos φ' = 1) absorbant P sous tension U et pulsation ω, quelle capacité C de condensateur parallèle faut-il ?",
          "options": [
            "C = (P · tan φ) / (U² · ω)",
            "C = U² / (P · ω)",
            "C = P / (U · ω · cos φ)",
            "C = tan φ / (P · U²)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La puissance réactive à compenser est Qc = P tan φ = C U² ω, d'où C = (P tan φ) / (U² ω)."
        },
        {
          "id": "terminale_d_physique_l12_p04_q7",
          "type": "mcq",
          "prompt": "Quel avantage structurel apporte la réduction de courant permise par un facteur de puissance élevé lors de la construction d'un bâtiment ?",
          "options": [
            "Elle permet d'utiliser des câbles électriques de plus petite section de cuivre et des disjoncteurs moins coûteux",
            "Elle augmente la vitesse de transmission d'internet",
            "Elle permet de supprimer les fusibles",
            "Elle annule le champ de pesanteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un courant plus faible permet d'utiliser des conducteurs de plus petit diamètre, réduisant considérablement le coût de l'installation électrique."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l12_p05",
      "order": 5,
      "title": "Transport du courant électrique sous haute tension",
      "summary": "Expérience comparée de transport à basse et haute tension, démonstration de la loi des pertes Joule P_pertes = R_ligne P² / (U² cos² φ), justification physique de la Très Haute Tension (THT), rôle des transformateurs élévateurs et abaisseurs.",
      "conceptExplanation": "1. Le problème du transport de l'électricité sur de grandes distances :\nLes centres de production d'électricité (centrales hydroélectriques de Soubré ou Taabo, centrales thermiques d'Azito ou CIPREL) sont souvent situés à des centaines de kilomètres des grands centres urbains de consommation (Abidjan, Bouaké, San-Pédro). Les lignes électriques de transport, bien que constituées de métaux excellents conducteurs (alliages d'aluminium-acier), possèdent une résistance électrique non négligeable r_ligne proportionnelle à leur longueur :\nr_\\text{ligne} = \\rho \\,\\frac{\\ell}{S}.\n\n2. Expérience de laboratoire comparée (modélisation de ligne) :\nOn transmet une puissance constante à une lampe témoin à travers deux fils résistifs modélisant la ligne (R = 470 Ω) selon deux modes :\n- Mode A (transport en basse tension 12 V) : le courant I est très fort, la lampe brille à peine car la quasi-totalité de l'énergie est perdue en chaleur dans les 470 Ω de la ligne ;\n- Mode B (transport sous tension élevée 220 V via transformateurs élévateur 12V/220V et abaisseur 220V/12V) : pour la même puissance transmise, la lampe brille avec éclat nominal : les pertes Joule dans la ligne de 470 Ω sont devenues négligeables !\n\n3. Démonstration physique de la loi des pertes en 1/U² :\nSoit P la puissance active totale que la centrale doit acheminer à destination sous un facteur de puissance cos φ. L'intensité efficace I circulant dans les câbles de la ligne est :\nI = \\frac{P}{U\\,\\cos\\varphi}.\nLa puissance perdue par effet Joule le long des câbles de résistance r_ligne s'exprime par :\nP_\\text{pertes} = r_\\text{ligne}\\,I^2 = r_\\text{ligne} \\cdot \\left(\\frac{P}{U\\,\\cos\\varphi}\\right)^2 = \\frac{r_\\text{ligne}\\,P^2}{U^2\\,\\cos^2\\varphi}.\n\nConséquence fondamentale :\nPour une puissance transportée P donnée et une résistance de ligne r_ligne fixée, les pertes par effet Joule sont rigoureusement inversement proportionnelles au carré de la tension de transport U² :\nP_\\text{pertes} \\propto \\frac{1}{U^2}.\n- Si l'on multiplie la tension par 10, les pertes Joule en ligne sont divisées par 10² = 100 ;\n- Si l'on transporte l'énergie sous 400 000 V (Très Haute Tension) au lieu de 20 000 V (Moyenne Tension), la tension est multipliée par 20 : les pertes en ligne sont divisées par 20² = 400 !\n\n4. L'architecture du réseau de transport et de distribution :\n- À la sortie des alternateurs des centrales (tension de 10 à 20 kV), des transformateurs élévateurs élèvent la tension à 225 kV ou 400 kV (réseau de grand transport THT sur grands pylônes) ;\n- Aux abords des villes, des postes de transformation abaisseurs réduisent la tension à 20 kV (réseau de distribution moyenne tension HTA) ;\n- Dans chaque quartier ou village, des transformateurs abaisseurs finaux convertissent le 20 kV en Basse Tension (230 V monophasé / 400 V triphasé) pour la distribution aux usagers.",
      "keyRule": "Les pertes Joule en ligne sont inversement proportionnelles au carré de la tension : P_pertes = r_ligne P² / (U² cos² φ). Transporter sous Très Haute Tension (THT) divise les pertes par le carré du rapport d'élévation.",
      "formulas": [
        {
          "name": "Pertes par effet Joule en ligne de transport",
          "formula": "P_\\text{pertes} = r_\\text{ligne}\\,I^2 = \\frac{r_\\text{ligne}\\,P^2}{U^2\\,\\cos^2\\varphi}",
          "note": "Pertes ∝ 1/U²"
        },
        {
          "name": "Rendement de transport de la ligne",
          "formula": "\\eta = \\frac{P_\\text{utile}}{P_\\text{produite}} = \\frac{P}{P + P_\\text{pertes}}",
          "note": "Tend vers 1 sous très haute tension"
        }
      ],
      "workedExample": {
        "title": "Comparaison des pertes de transport sous 20 kV et sous 400 kV",
        "statement": "Une centrale électrique doit transporter une puissance active P = 200 MW (2,0 × 10⁸ W) vers une métropole distante de 250 km. La ligne triphasée équivalente présente une résistance globale r_ligne = 10 Ω. On prend cos φ = 1 pour simplifier.\\n1. Calcule l'intensité I1 et les pertes Joule P_pertes1 si le transport s'effectuait sous U1 = 20 kV (20 000 V).\\n2. Calcule l'intensité I2 et les pertes Joule P_pertes2 si le transport est réalisé sous la Très Haute Tension U2 = 400 kV (400 000 V).\\n3. Calcule le rendement de la ligne dans les deux cas et conclus.",
        "methodSteps": [
          "Étape 1 : Transport sous U1 = 20 kV :\\nI1 = P / U1 = 2,0 × 10⁸ W / 20 000 V = 10 000 A = 10 kA.\\nP_pertes1 = r_ligne × I1² = 10 Ω × (10 000 A)² = 10 × 10⁸ = 1,0 × 10⁹ W = 1000 MW !\\nRemarque : 1000 MW de pertes dépassent la production de 200 MW : le transport est totalement impossible, la ligne fondrait immédiatement.",
          "Étape 2 : Transport sous U2 = 400 kV :\\nI2 = P / U2 = 2,0 × 10⁸ W / 400 000 V = 500 A.\\nP_pertes2 = r_ligne × I2² = 10 Ω × (500 A)² = 10 × 250 000 = 2,5 × 10⁶ W = 2,5 MW.",
          "Étape 3 : Comparer les pertes et rendements :\\nRapport des pertes : P_pertes1 / P_pertes2 = (400 kV / 20 kV)² = 20² = 400.\\nRendement sous 400 kV : η = P / (P + P_pertes) = 200 MW / (200 + 2,5) MW = 200 / 202,5 ≈ 98,8 %."
        ],
        "conclusion": "Sous 400 kV, les pertes en ligne ne représentent plus que 1,2 % de l'énergie produite (rendement de 98,8 %), alors qu'elles auraient détruit la ligne sous 20 kV. La Très Haute Tension est la condition sine qua non du transport électrique moderne."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Chaîne globale du transport d'électricité sous haute tension",
        "tableData": {
          "headers": [
            "Étape du réseau",
            "Niveau de tension usuel",
            "Appareil clé",
            "Rôle technique"
          ],
          "rows": [
            [
              "Centrale de production",
              "10 kV à 20 kV",
              "Alternateur triphasé",
              "Conversion mécanique -> électrique"
            ],
            [
              "Poste élévateur de départ",
              "Élévation à 225 kV - 400 kV",
              "Transformateur élévateur",
              "Abaissement du courant I pour minimiser les pertes Joule"
            ],
            [
              "Réseau de grand transport THT",
              "225 kV à 400 kV (THT)",
              "Pylônes métalliques (10-90 m)",
              "Acheminement sur des centaines de km"
            ],
            [
              "Poste de répartition régional",
              "Abaissement à 20 kV (HTA)",
              "Transformateur abaisseur",
              "Distribution vers les villes et zones industrielles"
            ],
            [
              "Poste de distribution finale",
              "Abaissement à 230 V / 400 V",
              "Transformateur de quartier",
              "Alimentation sécurisée des foyers et commerces"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Loi de proportionnalité inverse des pertes en 1/U²",
          "stepTheme": "Pertes et tension",
          "stepBadge": "P_pertes ∝ 1 / U²",
          "paragraphText": "Pour une même puissance active P à transporter à travers une ligne de résistance R, les pertes par effet Joule sont inversement proportionnelles au carré de la tension de transport : P_pertes = R P² / (U² cos² φ). Multiplier la tension par un facteur k divise les pertes par k².",
          "exercise": {
            "id": "terminale_d_physique_l12_p05_q1",
            "type": "mcq",
            "prompt": "Si la tension d'une ligne de transport électrique est multipliée par 5 à puissance transportée constante, que deviennent les pertes par effet Joule dans les câbles ?",
            "options": [
              "Elles sont divisées par 25 (soit 5²)",
              "Elles sont divisées par 5",
              "Elles sont multipliées par 5",
              "Elles restent constantes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les pertes Joule varient en 1/U². Si U est multipliée par 5, les pertes sont divisées par 5² = 25."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Rôle des transformateurs dans la chaîne de transport",
          "stepTheme": "Transformateurs élévateurs/abaisseurs",
          "stepBadge": "U élève => I baisse",
          "paragraphText": "Le transport haute tension est rendu possible par le transformateur monophasé ou triphasé : un transformateur élévateur augmente la tension U en réduisant d'autant le courant I (car U1 I1 ≈ U2 I2), puis des transformateurs abaisseurs restituent une basse tension sécurisée aux usagers.",
          "exercise": {
            "id": "terminale_d_physique_l12_p05_q2",
            "type": "mcq",
            "prompt": "Pourquoi élève-t-on la tension à la sortie des centrales avant d'injecter le courant dans les lignes de grand transport ?",
            "options": [
              "Pour diminuer l'intensité efficace I du courant et réduire ainsi au minimum les pertes par effet Joule dans les câbles",
              "Pour augmenter la fréquence du courant à 1000 Hz",
              "Pour que les électrons voyagent plus vite que la lumière",
              "Pour empêcher les oiseaux de se poser sur les lignes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P = UI. À puissance constante, une très haute tension U impose une intensité I très faible, minimisant les pertes RI²."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Classification des réseaux : THT, HTA et BT",
          "stepTheme": "Normes de tension",
          "stepBadge": "THT > 50 kV, BT ≤ 1 kV",
          "paragraphText": "En électrotechnique, les réseaux sont classés en : Très Haute Tension (THT, de 63 kV à 400 kV en grand transport), Moyenne Tension (HTA, de 1 kV à 50 kV, usuellement 20 kV en distribution régionale) et Basse Tension (BT, inférieure à 1000 V, usuellement 230 V / 400 V domestique).",
          "exercise": {
            "id": "terminale_d_physique_l12_p05_q3",
            "type": "mcq",
            "prompt": "À quel domaine de tension appartient la tension de 20 000 V (20 kV) utilisée pour la distribution d'électricité dans les communes ivoiriennes ?",
            "options": [
              "Moyenne Tension (HTA)",
              "Basse Tension (BT)",
              "Très Haute Tension (THT)",
              "Très Basse Tension de Sécurité (TBTS)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "20 kV est la tension standard du réseau de distribution moyenne tension (HTA)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Expérience du modèle réduit de ligne avec lampe témoin",
          "stepTheme": "Expérience de cours",
          "stepBadge": "12V direct vs 220V transformé",
          "paragraphText": "Dans l'expérience officielle, une lampe de 12 V alimentée à travers 470 Ω sous 12 V directs reste éteinte car le courant I produit une chute de tension totale dans la résistance. En insérant deux transformateurs (12V/220V puis 220V/12V), le courant dans la ligne chute d'un facteur 18 et la lampe s'allume avec son éclat normal.",
          "exercise": {
            "id": "terminale_d_physique_l12_p05_q4",
            "type": "mcq",
            "prompt": "Dans l'expérience de modélisation avec deux transformateurs et une résistance de ligne de 470 Ω, pourquoi la lampe s'allume-t-elle sous 220 V alors qu'elle restait éteinte sous 12 V ?",
            "options": [
              "Parce que le courant dans la ligne est devenu 18 fois plus faible sous 220 V, rendant la chute de tension dans les 470 Ω négligeable",
              "Parce que la résistance de 470 Ω a disparu",
              "Parce que le transformateur crée de l'énergie gratuite",
              "Parce que la lampe a changé de puissance nominale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'élévation de tension réduit le courant en ligne de 12/220, réduisant la chute de tension dans les 470 Ω à presque rien."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Pourquoi ne pas transporter sous tension infiniment haute ?",
          "stepTheme": "Limites physiques de la THT",
          "stepBadge": "Effet couronne et isolement",
          "paragraphText": "Si la haute tension réduit les pertes Joule, on ne peut pas l'augmenter indéfiniment : au-delà de 400 kV à 800 kV, le champ électrique à la surface des câbles ionise l'air (effet couronne, grésillements et pertes d'énergie par décharge dans l'air) et nécessite des isolateurs géants très coûteux.",
          "exercise": {
            "id": "terminale_d_physique_l12_p05_q5",
            "type": "mcq",
            "prompt": "Quelle contrainte physique empêche d'augmenter indéfiniment la tension de transport au-delà de 400 000 V ?",
            "options": [
              "L'ionisation de l'air ambiant autour des câbles (effet couronne) et les exigences colossales d'isolement diélectrique",
              "La vitesse des électrons qui deviendrait négative",
              "L'épuisement de l'eau dans les barrages",
              "L'interdiction de la loi d'Ohm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au-delà de quelques centaines de kV, l'effet couronne ionise l'air et dissipe de l'énergie, imposant des pylônes et chaînes d'isolateurs démesurés."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Constitution des câbles de lignes THT",
          "stepTheme": "Technologie des câbles",
          "stepBadge": "Almélec et âme d'acier",
          "paragraphText": "Les câbles THT ne sont pas en cuivre massif (trop lourd et cher) : ils sont constitués d'une âme centrale en acier pour la résistance mécanique à la traction du vent, entourée de brins en alliage d'aluminium (almélec) pour la conductivité électrique, sans isolant plastique extérieur (l'air sert d'isolant naturel).",
          "exercise": {
            "id": "terminale_d_physique_l12_p05_q6",
            "type": "mcq",
            "prompt": "De quels matériaux sont principalement constitués les câbles suspendus aux pylônes de Très Haute Tension ?",
            "options": [
              "D'une âme en acier mécanique entourée de brins d'alliage d'aluminium conducteur",
              "De cuivre pur entouré de caoutchouc épais",
              "De plomb massif",
              "De fibres optiques en verre pur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'aluminium allie légèreté et excellente conductivité, tandis que l'acier central assure la tenue mécanique à la traction entre deux pylônes distants."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Rendement global d'un réseau moderne",
          "stepTheme": "Rendement mondial",
          "stepBadge": "Rendement de ligne > 95 %",
          "paragraphText": "Grâce à l'utilisation systématique de la THT, le réseau moderne de transport électrique parvient à acheminer des centaines de gigawatts sur des milliers de kilomètres avec un rendement supérieur à 95 % (les pertes de transport et distribution n'excèdent pas 5 à 7 % de la production totale).",
          "exercise": {
            "id": "terminale_d_physique_l12_p05_q7",
            "type": "mcq",
            "prompt": "Quel est l'ordre de grandeur du rendement énergétique moyen du transport et de la distribution d'électricité moderne sous haute tension ?",
            "options": [
              "Supérieur à 92 - 95 % (moins de 5 à 8 % de pertes totales)",
              "Environ 50 % (la moitié de l'énergie est perdue)",
              "Moins de 20 %",
              "100 % rigoureux sans aucune perte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Grâce à la THT, le grand transport électrique atteint un rendement exceptionnel supérieur à 95 %."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l12_p05_q1",
          "type": "mcq",
          "prompt": "Si la tension d'une ligne de transport électrique est multipliée par 5 à puissance transportée constante, que deviennent les pertes par effet Joule dans les câbles ?",
          "options": [
            "Elles sont divisées par 25 (soit 5²)",
            "Elles sont divisées par 5",
            "Elles sont multipliées par 5",
            "Elles restent constantes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les pertes Joule varient en 1/U². Si U est multipliée par 5, les pertes sont divisées par 5² = 25."
        },
        {
          "id": "terminale_d_physique_l12_p05_q2",
          "type": "mcq",
          "prompt": "Pourquoi élève-t-on la tension à la sortie des centrales avant d'injecter le courant dans les lignes de grand transport ?",
          "options": [
            "Pour diminuer l'intensité efficace I du courant et réduire ainsi au minimum les pertes par effet Joule dans les câbles",
            "Pour augmenter la fréquence du courant à 1000 Hz",
            "Pour que les électrons voyagent plus vite que la lumière",
            "Pour empêcher les oiseaux de se poser sur les lignes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P = UI. À puissance constante, une très haute tension U impose une intensité I très faible, minimisant les pertes RI²."
        },
        {
          "id": "terminale_d_physique_l12_p05_q3",
          "type": "mcq",
          "prompt": "À quel domaine de tension appartient la tension de 20 000 V (20 kV) utilisée pour la distribution d'électricité dans les communes ivoiriennes ?",
          "options": [
            "Moyenne Tension (HTA)",
            "Basse Tension (BT)",
            "Très Haute Tension (THT)",
            "Très Basse Tension de Sécurité (TBTS)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "20 kV est la tension standard du réseau de distribution moyenne tension (HTA)."
        },
        {
          "id": "terminale_d_physique_l12_p05_q4",
          "type": "mcq",
          "prompt": "Dans l'expérience de modélisation avec deux transformateurs et une résistance de ligne de 470 Ω, pourquoi la lampe s'allume-t-elle sous 220 V alors qu'elle restait éteinte sous 12 V ?",
          "options": [
            "Parce que le courant dans la ligne est devenu 18 fois plus faible sous 220 V, rendant la chute de tension dans les 470 Ω négligeable",
            "Parce que la résistance de 470 Ω a disparu",
            "Parce que le transformateur crée de l'énergie gratuite",
            "Parce que la lampe a changé de puissance nominale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'élévation de tension réduit le courant en ligne de 12/220, réduisant la chute de tension dans les 470 Ω à presque rien."
        },
        {
          "id": "terminale_d_physique_l12_p05_q5",
          "type": "mcq",
          "prompt": "Quelle contrainte physique empêche d'augmenter indéfiniment la tension de transport au-delà de 400 000 V ?",
          "options": [
            "L'ionisation de l'air ambiant autour des câbles (effet couronne) et les exigences colossales d'isolement diélectrique",
            "La vitesse des électrons qui deviendrait négative",
            "L'épuisement de l'eau dans les barrages",
            "L'interdiction de la loi d'Ohm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au-delà de quelques centaines de kV, l'effet couronne ionise l'air et dissipe de l'énergie, imposant des pylônes et chaînes d'isolateurs démesurés."
        },
        {
          "id": "terminale_d_physique_l12_p05_q6",
          "type": "mcq",
          "prompt": "De quels matériaux sont principalement constitués les câbles suspendus aux pylônes de Très Haute Tension ?",
          "options": [
            "D'une âme en acier mécanique entourée de brins d'alliage d'aluminium conducteur",
            "De cuivre pur entouré de caoutchouc épais",
            "De plomb massif",
            "De fibres optiques en verre pur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'aluminium allie légèreté et excellente conductivité, tandis que l'acier central assure la tenue mécanique à la traction entre deux pylônes distants."
        },
        {
          "id": "terminale_d_physique_l12_p05_q7",
          "type": "mcq",
          "prompt": "Quel est l'ordre de grandeur du rendement énergétique moyen du transport et de la distribution d'électricité moderne sous haute tension ?",
          "options": [
            "Supérieur à 92 - 95 % (moins de 5 à 8 % de pertes totales)",
            "Environ 50 % (la moitié de l'énergie est perdue)",
            "Moins de 20 %",
            "100 % rigoureux sans aucune perte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Grâce à la THT, le grand transport électrique atteint un rendement exceptionnel supérieur à 95 %."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l12_p06",
      "order": 6,
      "title": "Bilan énergétique global, puissance réactive et sécurité",
      "summary": "Énergie électrique consommée E = P · Δt (en Joules et kWh), puissance réactive Q_reac = UI sin φ en VAR, triangle des puissances S² = P² + Q_reac², dimensionnement thermique des installations et innocuité des champs magnétiques sous les lignes THT.",
      "conceptExplanation": "1. Énergie électrique consommée en régime alternatif :\nL'énergie électrique E consommée par un dipôle pendant une durée d'utilisation Δt sous une puissance active moyenne P s'exprime par :\nE = P \\cdot \\Delta t = U\\,I\\,\\cos\\varphi \\cdot \\Delta t.\n- Dans le Système International, avec P en Watts et Δt en secondes, E s'exprime en Joules (J) ;\n- En pratique industrielle et domestique, on utilise le kilowattheure (kWh) :\n1 \\text{ kWh} = 1000 \\text{ W} \\times 3600 \\text{ s} = 3,6 \\times 10^6 \\text{ J} = 3,6 \\text{ MJ}.\nC'est cette énergie active E qui est mesurée par le compteur électrique de la CIE et facturée aux usagers.\n\n2. Le triangle des puissances et la puissance réactive :\nPour modéliser l'ensemble des échanges énergétiques en régime alternatif, on définit trois puissances formant un triangle rectangle géométrique (triangle de Boucherot) :\n- La puissance active : P = U I cos φ (en Watts, W, sur l'axe horizontal) ;\n- La puissance réactive : Q_reac = U I sin φ (en Volt-Ampères Réactifs, noté VAR, sur l'axe vertical) ;\n- La puissance apparente : S = U I (en Volt-Ampères, V·A, sur l'hypoténuse).\nD'après le théorème de Pythagore :\nS^2 = P^2 + Q_\\text{reac}^2 \\iff S = \\sqrt{P^2 + Q_\\text{reac}^2}.\n- La puissance active P correspond au travail réel et à la chaleur Joule dissipée ;\n- La puissance réactive Q_reac correspond aux échanges oscillatoires d'énergie magnétique (inductances) ou électrostatique (condensateurs) sans dépense moyenne d'énergie.\n\n3. Dimensionnement thermique des installations :\nL'échauffement thermique des câbles, transformateurs et disjoncteurs dépend directement de l'intensité efficace I = S / U. Les constructeurs calibrent donc toujours le matériel en fonction de la puissance apparente nominale S (exprimée en kVA ou MVA) et non de la puissance active P.\n\n4. Sécurité des lignes électriques et champs électromagnétiques :\n- Hauteur des pylônes : les pylônes de THT mesurent entre 10 et 90 mètres de hauteur pour maintenir les conducteurs nus à une distance de sécurité absolue du sol et de la végétation ;\n- Chaînes d'isolateurs : constituées d'assiettes de verre trempé ou de porcelaine en chapelet (une assiette isolant environ 10 à 15 kV) ;\n- Champ magnétique sous les lignes THT : à la fréquence industrielle de 50 Hz, le champ magnétique sous une ligne de 400 kV à 100 m de hauteur est de l'ordre de 0,2 µT à 6 µT au sol. Ces valeurs sont nettement inférieures aux normes internationales de sécurité de l'OMS (100 µT) et représentent dix fois moins que le champ magnétique émis à proximité immédiate d'un écran de télévision ou d'un sèche-cheveux.",
      "keyRule": "L'énergie facturée est E = P · Δt (1 kWh = 3,6 MJ). Le triangle des puissances relie active, réactive et apparente : S² = P² + Q_reac². Le matériel est calibré en V·A (puissance apparente S).",
      "formulas": [
        {
          "name": "Énergie électrique consommée",
          "formula": "E = P\\,\\Delta t = U\\,I\\,\\cos\\varphi\\,\\Delta t",
          "note": "1 kWh = 3,6 × 10⁶ J = 3,6 MJ"
        },
        {
          "name": "Triangle des puissances (théorème de Pythagore)",
          "formula": "S^2 = P^2 + Q_\\text{reac}^2 \\iff S = \\sqrt{P^2 + Q_\\text{reac}^2}",
          "note": "P en W, Q_reac en VAR, S en V·A"
        },
        {
          "name": "Puissance réactive",
          "formula": "Q_\\text{reac} = U\\,I\\,\\sin\\varphi",
          "note": "En Volt-Ampère Réactif (VAR)"
        }
      ],
      "workedExample": {
        "title": "Calcul du triangle des puissances et dimensionnement d'un transformateur",
        "statement": "Un atelier de menuiserie industrielle absorbe une puissance active P = 48 kW et une puissance réactive inductive Q_reac = 36 kVAR sous une tension de 400 V.\\n1. Calcule la puissance apparente S de l'installation.\\n2. Calcule le facteur de puissance cos φ de l'atelier.\\n3. Détermine l'intensité efficace I appelée en tête d'installation.\\n4. Parmi les transformateurs disponibles sur le marché (50 kVA, 63 kVA, 80 kVA), quel est le modèle minimal requis pour alimenter cet atelier sans surcharge ?",
        "methodSteps": [
          "Étape 1 : Calculer la puissance apparente S :\\nS = √(P² + Q_reac²) = √(48² + 36²) = √(2304 + 1296) = √3600 = 60 kVA (60 000 V·A).",
          "Étape 2 : Calculer le facteur de puissance :\\ncos φ = P / S = 48 kW / 60 kVA = 0,80.",
          "Étape 3 : Calculer le courant appelé :\\nI = S / U = 60 000 V·A / 400 V = 150 A.",
          "Étape 4 : Choisir le transformateur :\\nLa puissance apparente appelée étant de 60 kVA, le transformateur de 50 kVA serait en surcharge thermique permanente (risque d'incendie).\\nLe modèle minimal normalisé adapté est celui de 63 kVA."
        ],
        "conclusion": "L'installation développe S = 60 kVA sous cos φ = 0,80. Elle exige un transformateur d'au moins 63 kVA pour supporter les 150 A appelés."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Le triangle des puissances et ses unités spécifiques",
        "tableData": {
          "headers": [
            "Grandeur",
            "Symbole",
            "Unité normalisée",
            "Sens physique",
            "Composant responsable"
          ],
          "rows": [
            [
              "Puissance active",
              "P",
              "Watt (W) ou kW",
              "Énergie thermique ou mécanique irréversible",
              "Conducteurs ohmiques, pertes Joule"
            ],
            [
              "Puissance réactive",
              "Q_reac",
              "Volt-Ampère Réactif (VAR)",
              "Énergie oscillatoire stockée sans perte nette",
              "Bobines (+VAR) et condensateurs (-VAR)"
            ],
            [
              "Puissance apparente",
              "S",
              "Volt-Ampère (V·A) ou kVA",
              "Dimensionnement total des lignes et générateurs",
              "Ensemble de l'installation (S = UI)"
            ],
            [
              "Facteur de puissance",
              "cos φ",
              "Sans unité (0 à 1)",
              "Rapport P / S = efficacité énergétique",
              "Angle de déphasage global de la charge"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Formule de l'énergie électrique E = P · Δt",
          "stepTheme": "Énergie électrique",
          "stepBadge": "1 kWh = 3,6 MJ",
          "paragraphText": "L'énergie électrique consommée par un appareil fonctionnant sous une puissance active moyenne P pendant une durée Δt est donnée par E = P · Δt. L'unité légale est le Joule (J), mais l'unité commerciale de facturation est le kilowattheure (1 kWh = 3,6 × 10⁶ J).",
          "exercise": {
            "id": "terminale_d_physique_l12_p06_q1",
            "type": "mcq",
            "prompt": "Un climatiseur consommant une puissance active moyenne P = 1500 W fonctionne pendant 8 heures par jour. Quelle est l'énergie consommée en une journée en kWh ?",
            "options": [
              "E = 12 kWh",
              "E = 187,5 kWh",
              "E = 1,5 kWh",
              "E = 43,2 kWh"
            ],
            "correctAnswerIndex": 0,
            "explanation": "E = P (en kW) × t (en h) = 1,5 kW × 8 h = 12 kWh."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Définition de la puissance réactive Q_reac",
          "stepTheme": "Puissance réactive",
          "stepBadge": "Q_reac = UI sin φ [VAR]",
          "paragraphText": "La puissance réactive, notée Q_reac, s'exprime par Q_reac = U I sin φ. Elle s'exprime obligatoirement en Volt-Ampères Réactifs (VAR). Elle mesure le va-et-vient d'énergie électromagnétique qui magnétise les bobines sans fournir de travail mécanique direct.",
          "exercise": {
            "id": "terminale_d_physique_l12_p06_q2",
            "type": "mcq",
            "prompt": "Quelle est l'unité légale de la puissance réactive Q_reac en électrotechnique ?",
            "options": [
              "Le Volt-Ampère Réactif (VAR)",
              "Le Watt (W)",
              "Le Joule (J)",
              "Le Pascal (Pa)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La puissance réactive s'exprime obligatoirement en Volt-Ampère Réactif (VAR) pour éviter toute confusion avec les Watts (P) et les V·A (S)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le triangle des puissances : S² = P² + Q_reac²",
          "stepTheme": "Théorème de Boucherot",
          "stepBadge": "S = √(P² + Q²)",
          "paragraphText": "Dans le plan complexe des puissances, la puissance apparente S forme l'hypoténuse d'un triangle rectangle dont les côtés sont la puissance active P (base) et la puissance réactive Q_reac (hauteur). On a donc rigoureusement S² = P² + Q_reac².",
          "exercise": {
            "id": "terminale_d_physique_l12_p06_q3",
            "type": "mcq",
            "prompt": "Une usine consomme P = 80 kW de puissance active et Q_reac = 60 kVAR de puissance réactive. Quelle est la puissance apparente S correspondante ?",
            "options": [
              "S = 100 kVA",
              "S = 140 kVA",
              "S = 20 kVA",
              "S = 4800 kVA"
            ],
            "correctAnswerIndex": 0,
            "explanation": "S = √(P² + Q_reac²) = √(80² + 60²) = √(6400 + 3600) = √10 000 = 100 kVA."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Pourquoi calibrer les générateurs en V·A plutôt qu'en Watts ?",
          "stepTheme": "Dimensionnement matériel",
          "stepBadge": "Calibrage en kVA",
          "paragraphText": "L'échauffement thermique des bobinages d'un transformateur ou d'un alternateur dépend du courant I qui les traverse, indépendamment du déphasage φ. Le constructeur garantit une tension U et un courant I maximal, donc une puissance apparente S = UI en kVA, sans connaître à l'avance le cos φ de la charge de l'utilisateur.",
          "exercise": {
            "id": "terminale_d_physique_l12_p06_q4",
            "type": "mcq",
            "prompt": "Pourquoi la plaque signalétique d'un transformateur industriel indique-t-elle sa puissance en kVA plutôt qu'en kW ?",
            "options": [
              "Parce que son échauffement thermique dépend du courant total I = S/U, quel que soit le facteur de puissance de l'installation",
              "Parce que le Watt est interdit dans les normes internationales",
              "Parce que les kVA sont toujours plus grands que les kW",
              "Parce qu'il ne fonctionne pas en courant continu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'échauffement des conducteurs dépend uniquement de I = S/U. Le constructeur calibre son appareil sur la puissance apparente S en kVA."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confusion sur la dangerosité des champs sous les lignes THT",
          "stepTheme": "Sécurité et santé",
          "stepBadge": "Champ < 6 µT au sol",
          "paragraphText": "De nombreuses personnes craignent le champ électromagnétique sous les lignes THT. Or, à 50 Hz (très basse fréquence non ionisante), le champ magnétique mesuré au sol sous une ligne de 400 kV à 100 m de hauteur est d'environ 0,2 µT à 6 µT, soit dix fois moins que celui mesuré à 10 cm d'un téléviseur (environ 10 µT).",
          "exercise": {
            "id": "terminale_d_physique_l12_p06_q5",
            "type": "mcq",
            "prompt": "Quel est l'ordre de grandeur du champ magnétique terrestre ou industriel ressenti au sol sous une ligne Très Haute Tension à 100 mètres de hauteur ?",
            "options": [
              "Environ 0,2 µT à 6 µT (dix fois moins qu'à proximité d'un téléviseur domestique)",
              "Plus de 100 Teslas (mortel instantanément)",
              "Strictement 0 µT car l'air bloque le magnétisme",
              "1000 microteslas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le champ magnétique diminue très vite avec la distance (en 1/d) et n'excède pas quelques microteslas au sol, largement sous le seuil OMS de 100 µT."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Rôle des chaînes d'isolateurs en verre suspendues aux pylônes",
          "stepTheme": "Isolement électrique",
          "stepBadge": "Assiettes d'isolateurs",
          "paragraphText": "Les câbles THT sont nus (sans gaine isolante). Pour empêcher le courant de 400 000 V de s'écouler vers la terre à travers les pylônes métalliques, les câbles sont suspendus par des chaînes de 15 à 25 coupelles en verre ou porcelaine, chaque assiette empêchant la formation d'un arc pour environ 15 kV.",
          "exercise": {
            "id": "terminale_d_physique_l12_p06_q6",
            "type": "mcq",
            "prompt": "À quoi servent les coupelles en verre suspendues en chapelet entre les pylônes métalliques et les câbles haute tension ?",
            "options": [
              "À isoler électriquement les câbles sous haute tension de la carcasse métallique du pylône relié à la terre",
              "À décorer le paysage",
              "À mesurer la vitesse du vent",
              "À stocker l'énergie solaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ces assiettes en verre ou en céramique isolent parfaitement les câbles sous très haute tension du pylône métallique relié au sol."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Principe du compteur électrique domestique",
          "stepTheme": "Comptage d'énergie",
          "stepBadge": "Comptage en kWh",
          "paragraphText": "Le compteur électrique domestique mesure le produit instantané u(t) · i(t) et intègre ce produit au cours du temps : il enregistre exclusivement l'énergie active E = ∫ P dt (en kWh). Les particuliers ne paient donc que l'énergie active réellement transformée en chaleur, froid, lumière ou mouvement.",
          "exercise": {
            "id": "terminale_d_physique_l12_p06_q7",
            "type": "mcq",
            "prompt": "Quelle grandeur physique un compteur électrique domestique (comme les compteurs CIE) enregistre-t-il pour établir la facture d'électricité ?",
            "options": [
              "L'énergie active consommée E = P · Δt, exprimée en kilowattheures (kWh)",
              "La tension maximale en Volts",
              "La puissance apparente S en Volt-Ampères uniquement",
              "La quantité de courant continue en Coulombs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le compteur enregistre l'énergie active réelle consommée sur la période, facturée en kilowattheures (kWh)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l12_p06_q1",
          "type": "mcq",
          "prompt": "Un climatiseur consommant une puissance active moyenne P = 1500 W fonctionne pendant 8 heures par jour. Quelle est l'énergie consommée en une journée en kWh ?",
          "options": [
            "E = 12 kWh",
            "E = 187,5 kWh",
            "E = 1,5 kWh",
            "E = 43,2 kWh"
          ],
          "correctAnswerIndex": 0,
          "explanation": "E = P (en kW) × t (en h) = 1,5 kW × 8 h = 12 kWh."
        },
        {
          "id": "terminale_d_physique_l12_p06_q2",
          "type": "mcq",
          "prompt": "Quelle est l'unité légale de la puissance réactive Q_reac en électrotechnique ?",
          "options": [
            "Le Volt-Ampère Réactif (VAR)",
            "Le Watt (W)",
            "Le Joule (J)",
            "Le Pascal (Pa)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La puissance réactive s'exprime obligatoirement en Volt-Ampère Réactif (VAR) pour éviter toute confusion avec les Watts (P) et les V·A (S)."
        },
        {
          "id": "terminale_d_physique_l12_p06_q3",
          "type": "mcq",
          "prompt": "Une usine consomme P = 80 kW de puissance active et Q_reac = 60 kVAR de puissance réactive. Quelle est la puissance apparente S correspondante ?",
          "options": [
            "S = 100 kVA",
            "S = 140 kVA",
            "S = 20 kVA",
            "S = 4800 kVA"
          ],
          "correctAnswerIndex": 0,
          "explanation": "S = √(P² + Q_reac²) = √(80² + 60²) = √(6400 + 3600) = √10 000 = 100 kVA."
        },
        {
          "id": "terminale_d_physique_l12_p06_q4",
          "type": "mcq",
          "prompt": "Pourquoi la plaque signalétique d'un transformateur industriel indique-t-elle sa puissance en kVA plutôt qu'en kW ?",
          "options": [
            "Parce que son échauffement thermique dépend du courant total I = S/U, quel que soit le facteur de puissance de l'installation",
            "Parce que le Watt est interdit dans les normes internationales",
            "Parce que les kVA sont toujours plus grands que les kW",
            "Parce qu'il ne fonctionne pas en courant continu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'échauffement des conducteurs dépend uniquement de I = S/U. Le constructeur calibre son appareil sur la puissance apparente S en kVA."
        },
        {
          "id": "terminale_d_physique_l12_p06_q5",
          "type": "mcq",
          "prompt": "Quel est l'ordre de grandeur du champ magnétique terrestre ou industriel ressenti au sol sous une ligne Très Haute Tension à 100 mètres de hauteur ?",
          "options": [
            "Environ 0,2 µT à 6 µT (dix fois moins qu'à proximité d'un téléviseur domestique)",
            "Plus de 100 Teslas (mortel instantanément)",
            "Strictement 0 µT car l'air bloque le magnétisme",
            "1000 microteslas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le champ magnétique diminue très vite avec la distance (en 1/d) et n'excède pas quelques microteslas au sol, largement sous le seuil OMS de 100 µT."
        },
        {
          "id": "terminale_d_physique_l12_p06_q6",
          "type": "mcq",
          "prompt": "À quoi servent les coupelles en verre suspendues en chapelet entre les pylônes métalliques et les câbles haute tension ?",
          "options": [
            "À isoler électriquement les câbles sous haute tension de la carcasse métallique du pylône relié à la terre",
            "À décorer le paysage",
            "À mesurer la vitesse du vent",
            "À stocker l'énergie solaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ces assiettes en verre ou en céramique isolent parfaitement les câbles sous très haute tension du pylône métallique relié au sol."
        },
        {
          "id": "terminale_d_physique_l12_p06_q7",
          "type": "mcq",
          "prompt": "Quelle grandeur physique un compteur électrique domestique (comme les compteurs CIE) enregistre-t-il pour établir la facture d'électricité ?",
          "options": [
            "L'énergie active consommée E = P · Δt, exprimée en kilowattheures (kWh)",
            "La tension maximale en Volts",
            "La puissance apparente S en Volt-Ampères uniquement",
            "La quantité de courant continue en Coulombs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le compteur enregistre l'énergie active réelle consommée sur la période, facturée en kilowattheures (kWh)."
        }
      ]
    }
  ]
};
