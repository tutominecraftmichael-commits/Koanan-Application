import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : Terminales C, D — Thème : Mécanique — Titre : Mouvements dans les champs g et E uniformes
export const PHYSIQUE_TLE_CD_L03_CHAMPS_UNIFORMES_G_ET_E: CurriculumChapter = {
  "id": "terminale_d_physique_l03_champs_uniformes_g_et_e",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ],
  "order": 3,
  "title": "Leçon 3 : Mouvements dans les champs g et E uniformes",
  "summary": "Étude dynamique et cinématique comparée dans les champs uniformes : notion de champ vectoriel uniforme (champ de pesanteur terrestre g et champ électrostatique E dans un condensateur plan), application du théorème du centre d'inertie (a = g indépendant de la masse vs a = (q/m) E dépendant de la charge massique), équations horaires et équation cartésienne de la trajectoire parabolique du projectile, flèche, portée, durée de vol et franchissement d'obstacles, déviation angulaire α et déflexion électrostatique Y d'un faisceau d'électrons, condition de non-interception par les plaques, accélération préalable par canon à électrons (tension U₀) et formule universelle de déflexion de l'oscilloscope cathodique.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : Terminales C, D – Thème : Mécanique – Mouvements dans les champs g et E uniformes)",
  "points": [
    {
      "id": "terminale_d_physique_l03_champs_uniformes_p01",
      "order": 1,
      "title": "Notion de champ vectoriel uniforme : gravitationnel g et électrostatique E",
      "summary": "Définition rigoureuse d'un champ vectoriel uniforme, comparaison du champ de pesanteur terrestre local et du champ électrostatique d'un condensateur plan, orientation des lignes de champ, et comparaison fondamentale des ordres de grandeur entre poids et force électrostatique.",
      "conceptExplanation": "1. Définition d'un champ vectoriel uniforme :\nUn champ vectoriel est uniforme dans une région de l'espace si le vecteur champ associé conserve rigoureusement la même direction, le même sens et la même intensité (norme) en tout point de cette région. Les lignes de champ y sont des droites parallèles équidistantes.\n\n2. Le champ de pesanteur terrestre uniforme g :\nAu voisinage immédiat de la surface de la Terre et sur une échelle restreinte (quelques centaines de mètres), la courbure terrestre et les variations d'altitude sont négligeables. Le champ de pesanteur g est uniforme : vertical, descendant vers le centre de la Terre, d'intensité g ≈ 9,8 N/kg (ou 10 m/s² selon les énoncés). Tout corps de masse m y subit la force de pesanteur (le poids) P = m g.\n\n3. Le champ électrostatique uniforme E dans un condensateur plan :\nEntre deux armatures métalliques planes, parallèles, distantes de d et portées à des potentiels VA et VB (avec VA > VB), règne un champ électrostatique uniforme E :\n- Direction : perpendiculaire aux plaques ;\n- Sens : dirigé du potentiel le plus élevé vers le potentiel le plus bas (de la plaque positive vers la plaque négative) ;\n- Norme : E = U / d, où U = |VA - VB| est la tension électrique entre les armatures (exprimée en V/m ou N/C).\nUne particule de charge q placée dans ce champ subit la force électrostatique Fe = q E. Si q > 0, Fe a le même sens que E ; si q < 0 (comme pour l'électron où q = -e), Fe est de sens opposé à E.\n\n4. Rapport fondamental Fe / P pour une particule microscopique :\nPour les particules élémentaires (électrons, protons, ions), la force électrostatique Fe = |q| E surpasse le poids gravitationnel P = m g de 10 à 14 ordres de grandeur (Fe / P ≈ 10¹⁴ pour un électron sous un champ modéré de 4000 V/m). En physique des particules, le poids est donc rigoureusement négligé.",
      "keyRule": "Un champ est uniforme si son vecteur est constant en tout point. Dans un condensateur plan : E = U / d dirigé vers les potentiels décroissants. Pour les particules atomiques, le poids P est négligeable devant la force électrostatique Fe (Fe >> P).",
      "formulas": [
        {
          "name": "Intensité du champ électrostatique uniforme",
          "formula": "E = \\frac{U}{d}",
          "note": "U en volts (V), d en mètres (m), E en V/m ou N/C"
        },
        {
          "name": "Force électrostatique vectorielle",
          "formula": "\\vec{F}_e = q\\,\\vec{E}",
          "note": "q en coulombs (C), Fe en newtons (N)"
        },
        {
          "name": "Force de pesanteur (Poids)",
          "formula": "\\vec{P} = m\\,\\vec{g}",
          "note": "m en kg, g en m/s² ou N/kg, P en newtons (N)"
        }
      ],
      "workedExample": {
        "title": "Comparaison des forces subies par un électron entre deux plaques",
        "statement": "Deux plaques planes horizontales distantes de d = 3,0 cm sont soumises à une tension U = 120 V. Un électron de masse m = 9,1 * 10⁻³¹ kg et de charge q = -1,6 * 10⁻¹⁹ C s'y trouve. Calcule l'intensité de la force électrique Fe, du poids P (avec g = 10 m/s²), et compare leurs ordres de grandeur.",
        "methodSteps": [
          "Étape 1 : Calculer la norme du champ électrique : E = U / d = 120 / 0,030 = 4000 V/m.",
          "Étape 2 : Calculer la force électrostatique : Fe = |q| * E = 1,6 * 10⁻¹⁹ * 4000 = 6,4 * 10⁻¹⁶ N.",
          "Étape 3 : Calculer le poids : P = m * g = 9,1 * 10⁻³¹ * 10 = 9,1 * 10⁻³⁰ N.",
          "Étape 4 : Calculer le rapport : Fe / P = (6,4 * 10⁻¹⁶) / (9,1 * 10⁻³⁰) ≈ 7,0 * 10¹³.",
          "Conclusion : La force électrostatique est 70 000 milliards de fois plus intense que le poids, justifiant pleinement de négliger P."
        ],
        "conclusion": "La force électrostatique est 70 000 milliards de fois plus intense que le poids, ce qui justifie rigoureusement de négliger le poids en dynamique des particules chargées."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif des champs uniformes g et E",
        "tableData": {
          "headers": [
            "Champ vectoriel",
            "Origine physique",
            "Vecteur champ",
            "Norme et unité",
            "Orientation des lignes de champ"
          ],
          "rows": [
            [
              "Champ de pesanteur terrestre",
              "Terre (masse planétaire)",
              "g (vertical descendant)",
              "g ≈ 9,8 à 10 N/kg (ou m/s²)",
              "Lignes verticales parallèles dirigées vers le sol"
            ],
            [
              "Champ électrostatique",
              "Condensateur plan chargé",
              "E (perpendiculaire aux armatures)",
              "E = U / d (V/m ou N/C)",
              "Lignes parallèles dirigées de l'armature (+) vers l'armature (-)"
            ],
            [
              "Force subie par le système",
              "Action à distance",
              "P = m g  ou  Fe = q E",
              "P = m g  /  Fe = |q| E",
              "Même sens si charge positive ; sens opposé si charge négative"
            ],
            [
              "Rapport Fe / P (électron)",
              "Interaction microscopique",
              "Fe / P ≈ 10¹⁴ >> 1",
              "Fe domine de 14 ordres",
              "Le poids P est rigoureusement négligeable devant Fe"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un champ uniforme",
          "stepTheme": "Notion de champ",
          "stepBadge": "Vecteur constant",
          "paragraphText": "Un champ est dit uniforme dans une région de l'espace si le vecteur champ associé conserve exactement les mêmes caractéristiques en tout point de cette région : même direction, même sens et même valeur (norme). Les lignes de champ y sont des droites strictement parallèles entre elles.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p01_q1",
            "type": "mcq",
            "prompt": "Dans un domaine où règne un champ électrique uniforme E, on mesure en un point M1 une valeur de 2500 V/m dirigée verticalement vers le haut. Que vaut le vecteur champ en un point M2 situé 50 cm plus loin dans ce même domaine ?",
            "options": [
              "Exactement 2500 V/m, vertical et dirigé vers le haut",
              "Une valeur affaiblie de 1250 V/m par effet de distance",
              "Une valeur orientée vers le bas par symétrie",
              "Une valeur nulle car M2 est éloigné de la source"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition d'un champ uniforme, le vecteur champ est rigoureusement identique en direction, sens et norme en tout point du domaine considéré."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le champ de pesanteur terrestre local",
          "stepTheme": "Champ gravitationnel",
          "stepBadge": "g = 9,8 m/s²",
          "paragraphText": "Au voisinage de la surface de la Terre et sur une échelle restreinte (quelques centaines de mètres), la courbure terrestre est négligeable : le champ de pesanteur g est considéré comme uniforme. Sa direction est verticale, son sens descendant vers le centre de la Terre, et sa norme vaut environ g = 9,8 m/s² (ou 10 m/s² dans les applications usuelles en Côte d'Ivoire).",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p01_q2",
            "type": "mcq",
            "prompt": "À Abidjan où g = 9,8 N/kg, quelle est l'intensité du poids d'une balle de masse m = 400 g et quelle force d'interaction subit-elle en champ uniforme ?",
            "options": [
              "P = 3,92 N dirigé verticalement vers le bas",
              "P = 3920 N dirigé vers le sol",
              "P = 0,392 N sans direction privilégiée",
              "P = 39,2 N horizontalement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P = m * g avec m = 0,400 kg : P = 0,400 * 9,8 = 3,92 N, dirigé verticalement vers le centre de la Terre (vers le bas)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le champ électrostatique dans un condensateur plan",
          "stepTheme": "Condensateur plan",
          "stepBadge": "E = U / d",
          "paragraphText": "Entre deux plaques métalliques planes, parallèles et séparées d'une distance d soumises à une différence de potentiel U = |VA - VB|, il règne un champ électrostatique uniforme E. Sa direction est perpendiculaire aux armatures et son intensité est donnée par E = U / d, exprimée en volts par mètre (V/m) ou en newtons par coulomb (N/C).",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p01_q3",
            "type": "mcq",
            "prompt": "Deux plaques planes distantes de d = 2,5 cm sont portées aux potentiels VA = +120 V et VB = -80 V. Quelle est la norme du champ électrostatique E régnant entre elles ?",
            "options": [
              "8000 V/m",
              "1600 V/m",
              "4800 V/m",
              "200 V/m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "U = |VA - VB| = |120 - (-80)| = 200 V. La distance en mètres est d = 0,025 m. D'où E = U / d = 200 / 0,025 = 8000 V/m."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Orientation de E et force électrostatique subie",
          "stepTheme": "Force de Lorentz électrique",
          "stepBadge": "Fe = q E",
          "paragraphText": "Le vecteur champ électrostatique E est toujours orienté dans le sens des potentiels décroissants (de la plaque au potentiel le plus élevé vers la plaque au potentiel le plus bas). Une particule de charge q placée dans ce champ subit une force électrostatique Fe = q E. Si q > 0, Fe a le même sens que E ; si q < 0 (comme l'électron), Fe est de sens opposé à E.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p01_q4",
            "type": "mcq",
            "prompt": "La plaque supérieure A est au potentiel VA = +500 V et la plaque inférieure B est au potentiel VB = 0 V. Vers quelle plaque est accéléré un électron (q = -e < 0) placé au repos entre les armatures ?",
            "options": [
              "Vers la plaque supérieure A (vers les potentiels croissants)",
              "Vers la plaque inférieure B (vers les potentiels décroissants)",
              "Il reste immobile car le champ compense sa charge",
              "Il effectue un mouvement circulaire sans translation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le champ E est orienté du haut (+) vers le bas (-). La charge de l'électron étant négative (q = -e), la force subie Fe = q E est dirigée vers le haut, attirant l'électron vers la plaque positive A."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Comparaison du poids et de la force électrostatique",
          "stepTheme": "Ordres de grandeur",
          "stepBadge": "P << Fe",
          "paragraphText": "Pour toute particule microscopique chargée (électron, proton, ion), le rapport entre la force de pesanteur P = m g et la force électrostatique Fe = |q| E est infinitésimal (de l'ordre de 10⁻¹⁴ pour un électron sous un champ classique de 10⁴ V/m). En mécanique atomique et dans les accélérateurs de particules, le poids est donc rigoureusement négligé devant la force électrique.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p01_q5",
            "type": "mcq",
            "prompt": "Pour un proton (m = 1,67 * 10⁻²⁷ kg, q = 1,6 * 10⁻¹⁹ C) dans un champ E = 2000 V/m avec g = 10 m/s², quel est le rapport Fe / P ?",
            "options": [
              "Environ 1,9 * 10¹⁰ (Fe surpasse P de plus de 10 milliards de fois)",
              "Environ 1,0 (les deux forces s'équilibrent parfaitement)",
              "Environ 10⁻¹⁰ (le poids domine largement la force électrique)",
              "Environ 5,3 * 10⁻⁴ (forces d'ordres de grandeur comparables)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Fe = |q| E = 1,6 * 10⁻¹⁹ * 2000 = 3,2 * 10⁻¹⁶ N. P = m * g = 1,67 * 10⁻²⁷ * 10 = 1,67 * 10⁻²⁶ N. Rapport Fe / P = 3,2 * 10⁻¹⁶ / 1,67 * 10⁻²⁶ ≈ 1,9 * 10¹⁰."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Potentiel scalaire vs Champ vectoriel",
          "stepTheme": "Précision conceptuelle",
          "stepBadge": "V scalaire ≠ E vecteur",
          "paragraphText": "Attention à ne jamais confondre le potentiel électrique V (grandeur scalaire s'exprimant en volts) et le champ électrique E (grandeur vectorielle en V/m). Un potentiel peut être nul en un point de l'espace (par exemple au plan médian entre deux plaques portées à +100 V et -100 V) alors que le champ électrique y est parfaitement non nul (E = U/d ≠ 0).",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p01_q6",
            "type": "mcq",
            "prompt": "Deux armatures distantes de d = 4 cm sont alimentées par VA = +150 V et VB = -150 V. Quel est le potentiel électrique V et le champ E au point O situé exactement à mi-distance des deux plaques ?",
            "options": [
              "V = 0 V et E = 7500 V/m dirigé de A vers B",
              "V = 0 V et E = 0 V/m",
              "V = 150 V et E = 3750 V/m dirigé de B vers A",
              "V = 300 V et E = 75 V/m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par symétrie linéaire, le potentiel médian vaut V = (VA + VB)/2 = 0 V. Mais la tension totale est U = 300 V, d'où E = 300 / 0,04 = 7500 V/m dirigé de A vers B."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Comportement d'une particule neutre dans les deux champs",
          "stepTheme": "Sensibilité aux champs",
          "stepBadge": "Neutron q = 0",
          "paragraphText": "Une particule neutre (comme un neutron, q = 0 et m ≠ 0) traversant un champ électrostatique ne subit aucune force électrique (Fe = 0) : sa trajectoire reste strictement rectiligne. En revanche, dans le champ de pesanteur, sa masse fait qu'elle subit le poids P = m g et décrit une trajectoire parabolique comme tout projectile macroscopique.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p01_q7",
            "type": "mcq",
            "prompt": "Un faisceau constitué d'électrons (e⁻), de neutrons (n) et de protons (p⁺) pénètre horizontalement entre deux plaques horizontales chargées (plaque supérieure positive). Que constate-t-on ?",
            "options": [
              "L'électron dévie vers le haut, le proton dévie vers le bas, et le neutron continue tout droit sans déviation",
              "Toutes les particules sont déviées vers le haut avec la même courbure",
              "Le neutron s'arrête net au milieu des armatures",
              "L'électron et le proton vont tout droit et le neutron est attiré par la plaque négative"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'électron (q < 0) est attiré par la plaque (+), le proton (q > 0) est attiré par la plaque (-), et le neutron (q = 0) n'étant pas soumis à la force électrique n'est pas dévié."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p01_q1",
          "type": "mcq",
          "prompt": "Dans un domaine où règne un champ électrique uniforme E, on mesure en un point M1 une valeur de 2500 V/m dirigée verticalement vers le haut. Que vaut le vecteur champ en un point M2 situé 50 cm plus loin dans ce même domaine ?",
          "options": [
            "Exactement 2500 V/m, vertical et dirigé vers le haut",
            "Une valeur affaiblie de 1250 V/m par effet de distance",
            "Une valeur orientée vers le bas par symétrie",
            "Une valeur nulle car M2 est éloigné de la source"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition d'un champ uniforme, le vecteur champ est rigoureusement identique en direction, sens et norme en tout point du domaine considéré."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p01_q2",
          "type": "mcq",
          "prompt": "À Abidjan où g = 9,8 N/kg, quelle est l'intensité du poids d'une balle de masse m = 400 g et quelle force d'interaction subit-elle en champ uniforme ?",
          "options": [
            "P = 3,92 N dirigé verticalement vers le bas",
            "P = 3920 N dirigé vers le sol",
            "P = 0,392 N sans direction privilégiée",
            "P = 39,2 N horizontalement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P = m * g avec m = 0,400 kg : P = 0,400 * 9,8 = 3,92 N, dirigé verticalement vers le centre de la Terre (vers le bas)."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p01_q3",
          "type": "mcq",
          "prompt": "Deux plaques planes distantes de d = 2,5 cm sont portées aux potentiels VA = +120 V et VB = -80 V. Quelle est la norme du champ électrostatique E régnant entre elles ?",
          "options": [
            "8000 V/m",
            "1600 V/m",
            "4800 V/m",
            "200 V/m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "U = |VA - VB| = |120 - (-80)| = 200 V. La distance en mètres est d = 0,025 m. D'où E = U / d = 200 / 0,025 = 8000 V/m."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p01_q4",
          "type": "mcq",
          "prompt": "La plaque supérieure A est au potentiel VA = +500 V et la plaque inférieure B est au potentiel VB = 0 V. Vers quelle plaque est accéléré un électron (q = -e < 0) placé au repos entre les armatures ?",
          "options": [
            "Vers la plaque supérieure A (vers les potentiels croissants)",
            "Vers la plaque inférieure B (vers les potentiels décroissants)",
            "Il reste immobile car le champ compense sa charge",
            "Il effectue un mouvement circulaire sans translation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le champ E est orienté du haut (+) vers le bas (-). La charge de l'électron étant négative (q = -e), la force subie Fe = q E est dirigée vers le haut, attirant l'électron vers la plaque positive A."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p01_q5",
          "type": "mcq",
          "prompt": "Pour un proton (m = 1,67 * 10⁻²⁷ kg, q = 1,6 * 10⁻¹⁹ C) dans un champ E = 2000 V/m avec g = 10 m/s², quel est le rapport Fe / P ?",
          "options": [
            "Environ 1,9 * 10¹⁰ (Fe surpasse P de plus de 10 milliards de fois)",
            "Environ 1,0 (les deux forces s'équilibrent parfaitement)",
            "Environ 10⁻¹⁰ (le poids domine largement la force électrique)",
            "Environ 5,3 * 10⁻⁴ (forces d'ordres de grandeur comparables)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Fe = |q| E = 1,6 * 10⁻¹⁹ * 2000 = 3,2 * 10⁻¹⁶ N. P = m * g = 1,67 * 10⁻²⁷ * 10 = 1,67 * 10⁻²⁶ N. Rapport Fe / P = 3,2 * 10⁻¹⁶ / 1,67 * 10⁻²⁶ ≈ 1,9 * 10¹⁰."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p01_q6",
          "type": "mcq",
          "prompt": "Deux armatures distantes de d = 4 cm sont alimentées par VA = +150 V et VB = -150 V. Quel est le potentiel électrique V et le champ E au point O situé exactement à mi-distance des deux plaques ?",
          "options": [
            "V = 0 V et E = 7500 V/m dirigé de A vers B",
            "V = 0 V et E = 0 V/m",
            "V = 150 V et E = 3750 V/m dirigé de B vers A",
            "V = 300 V et E = 75 V/m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par symétrie linéaire, le potentiel médian vaut V = (VA + VB)/2 = 0 V. Mais la tension totale est U = 300 V, d'où E = 300 / 0,04 = 7500 V/m dirigé de A vers B."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p01_q7",
          "type": "mcq",
          "prompt": "Un faisceau constitué d'électrons (e⁻), de neutrons (n) et de protons (p⁺) pénètre horizontalement entre deux plaques horizontales chargées (plaque supérieure positive). Que constate-t-on ?",
          "options": [
            "L'électron dévie vers le haut, le proton dévie vers le bas, et le neutron continue tout droit sans déviation",
            "Toutes les particules sont déviées vers le haut avec la même courbure",
            "Le neutron s'arrête net au milieu des armatures",
            "L'électron et le proton vont tout droit et le neutron est attiré par la plaque négative"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'électron (q < 0) est attiré par la plaque (+), le proton (q > 0) est attiré par la plaque (-), et le neutron (q = 0) n'étant pas soumis à la force électrique n'est pas dévié."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l03_champs_uniformes_p02",
      "order": 2,
      "title": "Mouvement d'un projectile dans le champ de pesanteur uniforme g",
      "summary": "Étude cinématique et dynamique complète de la chute libre : conditions initiales, application de la 2e loi de Newton (a = g), indépendance de la masse, équations horaires de vitesse et de position, équation cartésienne de la trajectoire parabolique, et cas particulier fondamental du tir horizontal.",
      "conceptExplanation": "1. Modèle de chute libre et conditions initiales :\nUn solide de masse m est lancé dans l'air depuis une position initiale OG₀(x₀ = 0, y₀ = 0, z₀ = h) avec un vecteur vitesse initiale v₀ faisant un angle α avec l'horizontale (v₀x = v₀ cos α, v₀y = 0, v₀z = v₀ sin α). L'action de l'air est négligée devant le poids P.\n\n2. Accélération par la deuxième loi de Newton :\nDans le référentiel terrestre supposé galiléen : Somme F_ext = P = m a => m g = m a => a = g.\nL'accélération du projectile est égale à l'accélération de la pesanteur g. Elle est rigoureusement indépendante de la masse m du projectile.\n\n3. Projection cartésienne et équations horaires :\nDans le repère (O, i, j, k) avec k vertical ascendant :\n- Accélération : ax = 0, ay = 0, az = -g.\n- Vitesse instantanée (première intégration) : vx(t) = v₀ cos α (constant), vy(t) = 0, vz(t) = -g t + v₀ sin α.\n- Position instantanée (seconde intégration) : x(t) = (v₀ cos α) t, y(t) = 0, z(t) = -(1/2) g t² + (v₀ sin α) t + h.\nPuisque y(t) = 0, le mouvement est rigoureusement plan et s'effectue dans le plan vertical (Ox, Oz).\n\n4. Équation cartésienne de la trajectoire :\nEn éliminant t = x / (v₀ cos α), on obtient l'équation cartésienne de la parabole de tir :\nz(x) = - [g / (2 v₀² cos²α)] x² + (tan α) x + h.\nC'est l'équation d'une parabole dont la concavité est tournée vers le bas (-g / 2 v₀² cos²α < 0).\n\n5. Cas du tir horizontal (α = 0) :\nSi le projectile est lancé horizontalement depuis une hauteur h (α = 0, cos 0 = 1, tan 0 = 0) :\nz(x) = - [g / (2 v₀²)] x² + h. Le sommet de la trajectoire est alors situé exactement au point de lancement (x = 0, z = h).",
      "keyRule": "En chute libre : a = g (indépendant de m). La composante horizontale de la vitesse est constante (vx = v₀ cos α). L'équation cartésienne de la trajectoire est z(x) = - [g / (2 v₀² cos²α)] x² + (tan α) x + h.",
      "formulas": [
        {
          "name": "Vecteur accélération du projectile",
          "formula": "\\vec{a} = \\vec{g} \\iff \\begin{cases} a_x = 0 \\\\ a_y = 0 \\\\ a_z = -g \\end{cases}",
          "note": "Indépendant de la masse m"
        },
        {
          "name": "Équations horaires de position",
          "formula": "\\begin{cases} x(t) = (v_0\\cos\\alpha)\\,t \\\\ z(t) = -\\frac{1}{2}g\\,t^2 + (v_0\\sin\\alpha)\\,t + h \\end{cases}",
          "note": "Plan vertical (Ox, Oz)"
        },
        {
          "name": "Équation cartésienne de la trajectoire",
          "formula": "z(x) = -\\frac{g}{2\\,v_0^2\\cos^2\\alpha}\\,x^2 + (\\tan\\alpha)\\,x + h",
          "note": "Parabole de concavité tournée vers le bas"
        }
      ],
      "workedExample": {
        "title": "Établissement des équations horaires d'un tir de ballon",
        "statement": "Un ballon est botté depuis le sol (h = 0) à v₀ = 20 m/s sous un angle α = 30° par rapport au sol (cos 30° = 0,866 ; sin 30° = 0,5 ; g = 10 m/s²). Établis l'équation de sa trajectoire et calcule son altitude pour x = 17,32 m.",
        "methodSteps": [
          "Étape 1 : Coordonnées de vitesse initiale : v₀x = 20 * 0,866 = 17,32 m/s ; v₀z = 20 * 0,5 = 10 m/s.",
          "Étape 2 : Équations horaires : x(t) = 17,32 t  et  z(t) = -5 t² + 10 t.",
          "Étape 3 : Équation cartésienne : t = x / 17,32 => z(x) = -5 (x / 17,32)² + (10 / 17,32) x = -0,0167 x² + 0,577 x.",
          "Étape 4 : Évaluation à x = 17,32 m (qui correspond à t = 1,0 s) : z(17,32) = -5(1)² + 10(1) = 5,0 m (sommet de la trajectoire)."
        ],
        "conclusion": "À la distance horizontale x = 17,32 m, le ballon atteint le sommet de sa parabole à une altitude maximale de 5,0 mètres."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Grandeurs cinématiques et dynamiques du projectile dans le repère (Ox, Oz)",
        "tableData": {
          "headers": [
            "Grandeur",
            "Composante selon l'axe horizontal (Ox)",
            "Composante selon l'axe vertical (Oz)",
            "Interprétation physique"
          ],
          "rows": [
            [
              "Conditions initiales (t = 0)",
              "x₀ = 0  ;  v₀x = v₀ cos α",
              "z₀ = h  ;  v₀z = v₀ sin α",
              "Lancement avec vitesse v₀ inclinée de l'angle α à la hauteur h"
            ],
            [
              "Accélération a = g",
              "ax = 0",
              "az = -g",
              "Mouvement rectiligne uniforme sur (Ox), MRUA sur (Oz)"
            ],
            [
              "Vecteur vitesse v(t)",
              "vx(t) = v₀ cos α (constante)",
              "vz(t) = -g t + v₀ sin α",
              "La vitesse horizontale ne varie jamais au cours du vol"
            ],
            [
              "Vecteur position OG(t)",
              "x(t) = (v₀ cos α) t",
              "z(t) = -(1/2) g t² + (v₀ sin α) t + h",
              "Équations horaires paramétriques du mouvement"
            ],
            [
              "Trajectoire z(x)",
              "-",
              "z(x) = - [g / (2 v₀² cos²α)] x² + x tan α + h",
              "Arc de parabole à concavité tournée vers le bas"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le modèle du projectile en chute libre",
          "stepTheme": "Chute libre",
          "stepBadge": "Seul P agit",
          "paragraphText": "On appelle projectile tout corps solide lancé avec une vitesse initiale v₀ dans le champ de pesanteur terrestre. Lorsque la résistance de l'air est négligée devant le poids, le projectile est en chute libre : son mouvement est entièrement gouverné par l'accélération de la pesanteur g.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p02_q1",
            "type": "mcq",
            "prompt": "Dans un tube vidé d'air (tube de Newton), on lâche sans vitesse initiale une plume de 2 g et une bille d'acier de 500 g. Que se passe-t-il ?",
            "options": [
              "Elles atteignent le fond rigoureusement au même instant avec la même accélération g",
              "La bille d'acier arrive beaucoup plus vite car son poids est 250 fois supérieur",
              "La plume flotte en suspension car elle ne subit pas la pesanteur dans le vide",
              "La bille rebondit immédiatement avant que la plume n'ait commencé à descendre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans le vide, les frottements de l'air sont nuls. L'accélération en chute libre vaut a = g pour tous les corps, indépendamment de leur masse : ils tombent exactement à la même vitesse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Théorème du centre d'inertie : a = g",
          "stepTheme": "2e loi de Newton",
          "stepBadge": "Indépendant de m",
          "paragraphText": "En appliquant la deuxième loi de Newton dans le référentiel terrestre supposé galiléen : somme(Fext) = P = m a. Puisque P = m g, on en déduit m a = m g, soit vectoriellement a = g. L'accélération du centre d'inertie d'un projectile en chute libre est égale au vecteur champ de pesanteur g, indépendante de la masse du solide.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p02_q2",
            "type": "mcq",
            "prompt": "Deux obus A (m = 5 kg) et B (m = 25 kg) sont tirés du même point avec la même vitesse initiale v₀ et le même angle de tir α. Quelle affirmation est correcte en négligeant l'air ?",
            "options": [
              "Leurs trajectoires sont rigoureusement superposables et ils atterrissent au même endroit",
              "L'obus B va 5 fois plus loin car son inertie est plus grande",
              "L'obus A monte plus haut car il est plus léger",
              "L'obus B retombe deux fois plus vite en raison de sa masse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme a = g et que les conditions initiales (position et vitesse) sont strictement identiques, les équations différentielles et leurs solutions sont identiques : la masse n'intervient nulle part."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Projection des conditions initiales dans le repère",
          "stepTheme": "Repérage cartésien",
          "stepBadge": "t = 0",
          "paragraphText": "Dans le repère orthonormé (O, i, j, k) où k est vertical ascendant et i horizontal dans la direction du tir, les coordonnées initiales à t = 0 sont : OG₀(x₀ = 0, y₀ = 0, z₀ = h) et v₀(v₀x = v₀ cos α, v₀y = 0, v₀z = v₀ sin α). L'angle α est l'angle de tir formé par v₀ avec l'horizontale.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p02_q3",
            "type": "mcq",
            "prompt": "Un joueur de football tire un ballon à v₀ = 25 m/s avec un angle de tir α = 37° (cos 37° = 0,80 ; sin 37° = 0,60) depuis le sol (h = 0). Quelles sont les composantes v₀x et v₀z du vecteur vitesse initiale ?",
            "options": [
              "v₀x = 20 m/s et v₀z = 15 m/s",
              "v₀x = 15 m/s et v₀z = 20 m/s",
              "v₀x = 25 m/s et v₀z = 0 m/s",
              "v₀x = 12,5 m/s et v₀z = 12,5 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "v₀x = v₀ cos α = 25 * 0,80 = 20 m/s. v₀z = v₀ sin α = 25 * 0,60 = 15 m/s."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Équations horaires de la vitesse",
          "stepTheme": "Cinématique vectorielle",
          "stepBadge": "Intégration de a",
          "paragraphText": "Puisque a(ax = 0, ay = 0, az = -g), une première intégration par rapport au temps en tenant compte des constantes d'intégration donne le vecteur vitesse v(t) : vx(t) = v₀ cos α (mouvement uniforme sur Ox), vy(t) = 0, vz(t) = -g t + v₀ sin α (mouvement uniformément varié sur Oz).",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p02_q4",
            "type": "mcq",
            "prompt": "Avec les données précédentes (v₀x = 20 m/s, v₀z = 15 m/s, g = 10 m/s²), que vaut la composante verticale vz de la vitesse à l'instant t = 2,0 s ?",
            "options": [
              "vz(2) = -5 m/s (la balle est en phase descendante)",
              "vz(2) = +5 m/s (la balle continue de monter)",
              "vz(2) = 0 m/s (la balle est au sommet)",
              "vz(2) = -20 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "vz(t) = -g t + v₀z = -10 * 2,0 + 15 = -20 + 15 = -5 m/s. Le signe négatif indique que la balle a déjà franchi le sommet et est en train de redescendre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Équations horaires de la position et planéité",
          "stepTheme": "Position OG(t)",
          "stepBadge": "Plan (Ox, Oz)",
          "paragraphText": "En intégrant une seconde fois par rapport au temps t : x(t) = (v₀ cos α) t, y(t) = 0, z(t) = -(1/2) g t² + (v₀ sin α) t + h. Comme y(t) = 0 à tout instant, le mouvement est rigoureusement plan et contenu dans le plan vertical (Ox, Oz) défini par le vecteur vitesse initiale v₀ et la verticale descendante g.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p02_q5",
            "type": "mcq",
            "prompt": "Un projectile est lancé depuis le sol (h = 0) à v₀ = 30 m/s avec α = 60° (cos 60° = 0,5 ; sin 60° ≈ 0,866) et g = 10 m/s². À quelle distance horizontale x se trouve-t-il à la date t = 3,0 s ?",
            "options": [
              "x(3) = 45 m",
              "x(3) = 90 m",
              "x(3) = 77,9 m",
              "x(3) = 15 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "x(t) = (v₀ cos α) t = (30 * 0,5) * 3,0 = 15 * 3,0 = 45 m."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Équation cartésienne de la trajectoire parabolique",
          "stepTheme": "Trajectoire z(x)",
          "stepBadge": "Élimination de t",
          "paragraphText": "En exprimant le temps à partir de l'équation sur l'axe horizontal : t = x / (v₀ cos α). En injectant cette expression dans l'équation horaire z(t), on obtient l'équation cartésienne : z(x) = - [g / (2 v₀² cos²α)] x² + (tan α) x + h. C'est l'équation d'une parabole d'axe vertical orientée vers les z décroissants.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p02_q6",
            "type": "mcq",
            "prompt": "Un projectile est lancé à v₀ = 10 m/s avec α = 45° depuis l'origine (h = 0, g = 10 m/s²). Sachant que cos 45° = √2 / 2 et tan 45° = 1, quelle est l'équation numérique de sa trajectoire z(x) ?",
            "options": [
              "z(x) = - 0,1 x² + x",
              "z(x) = - 0,05 x² + x",
              "z(x) = - x² + 10 x",
              "z(x) = - 0,2 x² + 0,5 x"
            ],
            "correctAnswerIndex": 0,
            "explanation": "2 v₀² cos²α = 2 * 100 * (1/2) = 100. Le coefficient devant x² vaut donc -g / 100 = -10 / 100 = -0,1. Comme tan 45° = 1 et h = 0 : z(x) = -0,1 x² + x."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège : Cas particulier du tir horizontal (α = 0)",
          "stepTheme": "Tir horizontal",
          "stepBadge": "cos 0° = 1, sin 0° = 0",
          "paragraphText": "Lorsque le tir est purement horizontal, l'angle vaut α = 0. Dans ce cas particulier fondamental : v₀x = v₀, v₀z = 0, et tan α = 0. L'équation de la trajectoire devient simplement : z(x) = - [g / (2 v₀²)] x² + h. Le sommet de la parabole coïncide directement avec le point de lancement.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p02_q7",
            "type": "mcq",
            "prompt": "Depuis une table de hauteur h = 1,25 m, une bille roule et quitte le bord horizontalement à v₀ = 4,0 m/s (g = 10 m/s²). À quelle distance x du pied de la table touche-t-elle le sol ?",
            "options": [
              "x = 2,0 m",
              "x = 1,25 m",
              "x = 4,0 m",
              "x = 0,5 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au sol z = 0 => 0 = - (1/2) g t² + h => t² = 2h / g = 2 * 1,25 / 10 = 0,25 => t = 0,5 s. Alors x = v₀ * t = 4,0 * 0,5 = 2,0 m."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p02_q1",
          "type": "mcq",
          "prompt": "Dans un tube vidé d'air (tube de Newton), on lâche sans vitesse initiale une plume de 2 g et une bille d'acier de 500 g. Que se passe-t-il ?",
          "options": [
            "Elles atteignent le fond rigoureusement au même instant avec la même accélération g",
            "La bille d'acier arrive beaucoup plus vite car son poids est 250 fois supérieur",
            "La plume flotte en suspension car elle ne subit pas la pesanteur dans le vide",
            "La bille rebondit immédiatement avant que la plume n'ait commencé à descendre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le vide, les frottements de l'air sont nuls. L'accélération en chute libre vaut a = g pour tous les corps, indépendamment de leur masse : ils tombent exactement à la même vitesse."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p02_q2",
          "type": "mcq",
          "prompt": "Deux obus A (m = 5 kg) et B (m = 25 kg) sont tirés du même point avec la même vitesse initiale v₀ et le même angle de tir α. Quelle affirmation est correcte en négligeant l'air ?",
          "options": [
            "Leurs trajectoires sont rigoureusement superposables et ils atterrissent au même endroit",
            "L'obus B va 5 fois plus loin car son inertie est plus grande",
            "L'obus A monte plus haut car il est plus léger",
            "L'obus B retombe deux fois plus vite en raison de sa masse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme a = g et que les conditions initiales (position et vitesse) sont strictement identiques, les équations différentielles et leurs solutions sont identiques : la masse n'intervient nulle part."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p02_q3",
          "type": "mcq",
          "prompt": "Un joueur de football tire un ballon à v₀ = 25 m/s avec un angle de tir α = 37° (cos 37° = 0,80 ; sin 37° = 0,60) depuis le sol (h = 0). Quelles sont les composantes v₀x et v₀z du vecteur vitesse initiale ?",
          "options": [
            "v₀x = 20 m/s et v₀z = 15 m/s",
            "v₀x = 15 m/s et v₀z = 20 m/s",
            "v₀x = 25 m/s et v₀z = 0 m/s",
            "v₀x = 12,5 m/s et v₀z = 12,5 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "v₀x = v₀ cos α = 25 * 0,80 = 20 m/s. v₀z = v₀ sin α = 25 * 0,60 = 15 m/s."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p02_q4",
          "type": "mcq",
          "prompt": "Avec les données précédentes (v₀x = 20 m/s, v₀z = 15 m/s, g = 10 m/s²), que vaut la composante verticale vz de la vitesse à l'instant t = 2,0 s ?",
          "options": [
            "vz(2) = -5 m/s (la balle est en phase descendante)",
            "vz(2) = +5 m/s (la balle continue de monter)",
            "vz(2) = 0 m/s (la balle est au sommet)",
            "vz(2) = -20 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "vz(t) = -g t + v₀z = -10 * 2,0 + 15 = -20 + 15 = -5 m/s. Le signe négatif indique que la balle a déjà franchi le sommet et est en train de redescendre."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p02_q5",
          "type": "mcq",
          "prompt": "Un projectile est lancé depuis le sol (h = 0) à v₀ = 30 m/s avec α = 60° (cos 60° = 0,5 ; sin 60° ≈ 0,866) et g = 10 m/s². À quelle distance horizontale x se trouve-t-il à la date t = 3,0 s ?",
          "options": [
            "x(3) = 45 m",
            "x(3) = 90 m",
            "x(3) = 77,9 m",
            "x(3) = 15 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "x(t) = (v₀ cos α) t = (30 * 0,5) * 3,0 = 15 * 3,0 = 45 m."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p02_q6",
          "type": "mcq",
          "prompt": "Un projectile est lancé à v₀ = 10 m/s avec α = 45° depuis l'origine (h = 0, g = 10 m/s²). Sachant que cos 45° = √2 / 2 et tan 45° = 1, quelle est l'équation numérique de sa trajectoire z(x) ?",
          "options": [
            "z(x) = - 0,1 x² + x",
            "z(x) = - 0,05 x² + x",
            "z(x) = - x² + 10 x",
            "z(x) = - 0,2 x² + 0,5 x"
          ],
          "correctAnswerIndex": 0,
          "explanation": "2 v₀² cos²α = 2 * 100 * (1/2) = 100. Le coefficient devant x² vaut donc -g / 100 = -10 / 100 = -0,1. Comme tan 45° = 1 et h = 0 : z(x) = -0,1 x² + x."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p02_q7",
          "type": "mcq",
          "prompt": "Depuis une table de hauteur h = 1,25 m, une bille roule et quitte le bord horizontalement à v₀ = 4,0 m/s (g = 10 m/s²). À quelle distance x du pied de la table touche-t-elle le sol ?",
          "options": [
            "x = 2,0 m",
            "x = 1,25 m",
            "x = 4,0 m",
            "x = 0,5 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au sol z = 0 => 0 = - (1/2) g t² + h => t² = 2h / g = 2 * 1,25 / 10 = 0,25 => t = 0,5 s. Alors x = v₀ * t = 4,0 * 0,5 = 2,0 m."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l03_champs_uniformes_p03",
      "order": 3,
      "title": "Caractéristiques du tir : flèche, portée, durée de vol et franchissement",
      "summary": "Définition physique et calcul analytique de la flèche (hauteur maximale Zs), portée horizontale Xp et optimisation de l'angle (α = 45°), calcul de la vitesse d'impact par le théorème de l'énergie cinétique, et condition analytique de franchissement d'obstacles verticaux (filet, joueur).",
      "conceptExplanation": "1. La flèche ou hauteur maximale Zs :\nLa flèche correspond à l'altitude maximale Zs atteinte par le projectile au cours de sa trajectoire. Au sommet S, le projectile cesse de monter : sa vitesse verticale s'annule : vz(ts) = 0.\nDe -g ts + v₀ sin α = 0, on tire l'instant au sommet : ts = (v₀ sin α) / g.\nEn reportant ts dans z(t) avec altitude initiale h : Zs = h + (v₀² sin²α) / (2 g).\nAu sommet, la vitesse n'est PAS nulle : elle est purement horizontale et égale à vs = v₀ cos α.\n\n2. La portée horizontale Xp :\nLa portée est la distance horizontale séparant le point de lancement du point de chute P au niveau du sol (z = 0).\nPour un tir partant du sol (h = 0) : z(Xp) = 0 => Xp [-g Xp / (2 v₀² cos²α) + tan α] = 0.\nPuisque Xp ≠ 0 : Xp = (2 v₀² sin α cos α) / g = (v₀² sin 2α) / g.\nPour v₀ fixé, la portée est maximale quand sin 2α = 1, soit 2α = 90° => α = 45°. La portée maximale vaut Xp,max = v₀² / g.\nDeux angles complémentaires (α₁ et α₂ avec α₁ + α₂ = 90°) fournissent la même portée horizontale.\n\n3. Durée totale du tir tp et vitesse d'impact vp :\nPour un tir au sol (h = 0), la durée totale est exactement le double du temps au sommet : tp = 2 ts = (2 v₀ sin α) / g.\nD'après le théorème de l'énergie cinétique appliqué entre le départ et l'arrivée au sol : (1/2) m vp² - (1/2) m v₀² = m g h => vp = √(v₀² + 2 g h). Si h = 0, le projectile retombe au sol avec une vitesse de même norme que sa vitesse de départ : vp = v₀.\n\n4. Méthodologie de franchissement d'un obstacle :\nPour savoir si un projectile franchit un obstacle situé en x_obs (filet de tennis, mur, défenseur) de hauteur H_obs :\nOn calcule l'ordonnée de la trajectoire à cette abscisse z(x_obs). L'obstacle est franchi si et seulement si z(x_obs) > H_obs. La marge de passage vaut D' = z(x_obs) - H_obs.",
      "keyRule": "Au sommet S : vz = 0 et Zs = h + (v₀² sin²α) / (2g). La portée au sol est Xp = (v₀² sin 2α) / g, maximale pour α = 45°. L'obstacle est franchi si z(x_obs) > H_obs.",
      "formulas": [
        {
          "name": "Flèche (hauteur maximale)",
          "formula": "Z_S = h + \\frac{v_0^2\\sin^2\\alpha}{2g}",
          "note": "Altitude en mètres (m)"
        },
        {
          "name": "Portée horizontale (pour h = 0)",
          "formula": "X_P = \\frac{v_0^2\\sin 2\\alpha}{g}",
          "note": "Maximale pour α = 45° : X_P,max = v_0² / g"
        },
        {
          "name": "Vitesse d'impact au sol",
          "formula": "v_P = \\sqrt{v_0^2 + 2gh}",
          "note": "Déduite du théorème de l'énergie cinétique"
        }
      ],
      "workedExample": {
        "title": "Franchissement d'un joueur adverse au tennis",
        "statement": "Un joueur A frappe une balle à h = 0,5 m au-dessus du sol. L'équation de la trajectoire est z(x) = -0,14 x² + 1,73 x + 0,5. Le joueur adverse B se tient à x = 11 m avec sa raquette levée à H = 2,5 m. Démontre que la balle passe au-dessus de sa raquette et calcule la marge D'.",
        "methodSteps": [
          "Étape 1 : Calculer l'ordonnée de la balle à l'abscisse de l'adversaire x = 11 m :",
          "z(11) = -0,14 * (11)² + 1,73 * 11 + 0,5 = -0,14 * 121 + 19,03 + 0,5 = -16,94 + 19,53 = 2,59 m.",
          "Étape 2 : Comparer avec la hauteur de la raquette : z(11) = 2,59 m > H = 2,50 m.",
          "Étape 3 : Calculer la marge de franchissement : D' = z(11) - H = 2,59 - 2,50 = 0,09 m = 9 cm.",
          "Conclusion : La balle franchit l'adversaire avec une hauteur de sécurité de 9 cm."
        ],
        "conclusion": "La balle franchit l'adversaire avec une marge de sécurité de 9 cm au-dessus de sa raquette tendue."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des caractéristiques du tir parabolique (h = 0)",
        "tableData": {
          "headers": [
            "Caractéristique",
            "Condition physique",
            "Expression analytique",
            "Valeur type (v₀=20 m/s, α=30°, g=10)",
            "Propriété remarquable"
          ],
          "rows": [
            [
              "Flèche (hauteur max Zs)",
              "Vitesse verticale vz(ts) = 0",
              "Zs = (v₀² sin²α) / (2 g)",
              "Zs = (400 * 0,25) / 20 = 5,0 m",
              "La vitesse au sommet est purement horizontale : vs = v₀ cos α"
            ],
            [
              "Date au sommet ts",
              "-g ts + v₀ sin α = 0",
              "ts = (v₀ sin α) / g",
              "ts = (20 * 0,5) / 10 = 1,0 s",
              "Exactement la moitié du temps de vol total au sol"
            ],
            [
              "Portée horizontale Xp",
              "Impact au sol : z(Xp) = 0",
              "Xp = (v₀² sin 2α) / g",
              "Xp = (400 * sin 60°) / 10 ≈ 34,6 m",
              "Maximale pour α = 45° (Xp,max = v₀² / g)"
            ],
            [
              "Durée totale tp",
              "Retour au sol : z(tp) = 0",
              "tp = 2 ts = (2 v₀ sin α) / g",
              "tp = 2,0 s",
              "Symétrie parfaite de la trajectoire si le sol est au niveau h = 0"
            ],
            [
              "Vitesse d'impact vp",
              "Conservation de l'énergie mécanique",
              "vp = √(vpx² + vpz²) = √(v₀² + 2gh)",
              "vp = v₀ = 20 m/s (si h = 0)",
              "Si h > 0, vp est supérieure à la vitesse initiale v₀"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La flèche ou hauteur maximale Zs",
          "stepTheme": "Sommet S",
          "stepBadge": "vz = 0",
          "paragraphText": "La flèche correspond à l'altitude maximale Zs atteinte par le projectile au cours de son mouvement. Au sommet S de la parabole, la composante verticale de la vitesse s'annule : vz(ts) = 0. Le vecteur vitesse en S est purement horizontal : vs = v₀ cos α i.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p03_q1",
            "type": "mcq",
            "prompt": "Un projectile est lancé à v₀ = 40 m/s avec un angle α = 60° (cos 60° = 0,5 ; sin 60° = 0,866) avec g = 10 m/s². Que vaut la norme de son vecteur vitesse au sommet de sa trajectoire ?",
            "options": [
              "vs = 20 m/s",
              "vs = 0 m/s",
              "vs = 34,6 m/s",
              "vs = 40 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au sommet, la vitesse verticale est nulle (vsz = 0), mais la composante horizontale reste constante : vs = vsx = v₀ cos α = 40 * 0,5 = 20 m/s."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calcul analytique de la flèche Zs",
          "stepTheme": "Altitude du sommet",
          "stepBadge": "Zs = v₀² sin²α / 2g",
          "paragraphText": "De la condition vz(ts) = -g ts + v₀ sin α = 0, on tire l'instant de passage au sommet : ts = (v₀ sin α) / g. En reportant ts dans l'expression de z(t) avec z₀ = h, on obtient la formule de la flèche : Zs = h + (v₀² sin²α) / (2 g).",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p03_q2",
            "type": "mcq",
            "prompt": "Une flèche est tirée depuis le sol (h = 0) avec v₀ = 50 m/s et α = 30° (sin 30° = 0,5) dans un champ g = 10 m/s². Quelle hauteur maximale atteint-elle ?",
            "options": [
              "31,25 m",
              "62,5 m",
              "125 m",
              "15,6 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Zs = (v₀² sin²α) / (2 g) = (2500 * 0,25) / (2 * 10) = 625 / 20 = 31,25 m."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La portée horizontale Xp",
          "stepTheme": "Point de chute P",
          "stepBadge": "z(Xp) = 0",
          "paragraphText": "La portée horizontale Xp est la distance entre le point de lancement (projeté sur le sol) et le point d'impact P du projectile sur le plan horizontal (z = 0). Pour un tir partant du niveau du sol (h = 0), l'équation z(Xp) = 0 donne : Xp = (v₀² sin 2α) / g en utilisant l'identité trigonométrique 2 sin α cos α = sin 2α.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p03_q3",
            "type": "mcq",
            "prompt": "Un canon tire un boulet avec v₀ = 100 m/s sous un angle α = 15° (sin 30° = 0,5) avec g = 10 m/s² depuis le sol (h = 0). Quelle est la portée Xp ?",
            "options": [
              "Xp = 500 m",
              "Xp = 1000 m",
              "Xp = 250 m",
              "Xp = 866 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Xp = (v₀² sin 2α) / g = (100² * sin(2 * 15°)) / 10 = (10000 * sin 30°) / 10 = (10000 * 0,5) / 10 = 500 m."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Angle de tir optimal pour la portée maximale",
          "stepTheme": "Portée maximale",
          "stepBadge": "α = 45°",
          "paragraphText": "Pour une vitesse initiale v₀ fixée, la portée Xp = (v₀² sin 2α) / g est maximale lorsque le terme sin 2α est maximal, c'est-à-dire sin 2α = 1, ce qui correspond à 2α = 90°, soit α = 45°. La portée maximale vaut alors Xp,max = v₀² / g. De plus, deux angles complémentaires (α et 90° - α) conduisent à la même portée.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p03_q4",
            "type": "mcq",
            "prompt": "Un sauteur en longueur quitte le sol avec une vitesse de module v₀ = 9,8 m/s (g = 9,8 m/s²). Quelle est la portée théorique maximale qu'il peut atteindre en choisissant l'angle optimal de 45° ?",
            "options": [
              "9,8 m",
              "4,9 m",
              "19,6 m",
              "7,0 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Xp,max = v₀² / g = (9,8)² / 9,8 = 9,8 m."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Vitesse au point d'impact par le théorème de l'énergie cinétique",
          "stepTheme": "Vitesse d'impact",
          "stepBadge": "vp = √(v₀² + 2gh)",
          "paragraphText": "Le théorème de l'énergie cinétique appliqué entre le point de départ M₀(z₀ = h) et le point d'impact P(zp = 0) stipule : (1/2) m vp² - (1/2) m v₀² = W(P) = m g h. En simplifiant par m, on en déduit l'expression universelle de la vitesse d'impact : vp = √(v₀² + 2 g h). Si h = 0, vp = v₀.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p03_q5",
            "type": "mcq",
            "prompt": "Une balle de tennis est frappée à v₀ = 12 m/s à une hauteur h = 0,5 m au-dessus du sol (g = 10 m/s²). Quelle est la vitesse vp de la balle lorsqu'elle touche le sol ?",
            "options": [
              "vp = 12,41 m/s",
              "vp = 12,00 m/s",
              "vp = 14,28 m/s",
              "vp = 10,50 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "vp = √(v₀² + 2 g h) = √(12² + 2 * 10 * 0,5) = √(144 + 10) = √154 ≈ 12,41 m/s."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Franchissement d'un obstacle vertical",
          "stepTheme": "Filet ou joueur adverse",
          "stepBadge": "z(x_obs) > H_obs",
          "paragraphText": "Pour déterminer si un projectile franchit un obstacle vertical situé à l'abscisse x_obs (par exemple un filet ou une raquette levée à la hauteur H_obs), on calcule l'ordonnée de la trajectoire à cette abscisse z(x_obs). L'obstacle est franchi si et seulement si z(x_obs) > H_obs. La marge de passage est D' = z(x_obs) - H_obs.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p03_q6",
            "type": "mcq",
            "prompt": "La trajectoire d'une balle de tennis est donnée par z(x) = -0,14 x² + 1,73 x + 0,5 (en mètres). Un joueur adverse se tient à l'abscisse x = 11 m avec sa raquette levée à H = 2,50 m. La balle passe-t-elle au-dessus de sa raquette ?",
            "options": [
              "Oui, car à x = 11 m, z(11) = 2,59 m > 2,50 m (marge de 9 cm)",
              "Non, car z(11) = 2,41 m < 2,50 m (elle est interceptée)",
              "Non, car la balle retombe au sol avant 11 m",
              "Oui, avec une marge énorme de plus de 2 mètres"
            ],
            "correctAnswerIndex": 0,
            "explanation": "z(11) = -0,14 * (11)² + 1,73 * 11 + 0,5 = -0,14 * 121 + 19,03 + 0,5 = -16,94 + 19,53 = 2,59 m. Comme 2,59 m > 2,50 m, la balle passe au-dessus avec une marge D' = 2,59 - 2,50 = 0,09 m = 9 cm."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège : Durée du vol lorsque le lancer a lieu depuis une hauteur h > 0",
          "stepTheme": "Calcul de tp",
          "stepBadge": "Δ > 0",
          "paragraphText": "Si le tir ne part pas du niveau du sol (h > 0), la durée totale de vol tp n'est PLUS égale au double du temps au sommet (tp ≠ 2 ts) car la descente est plus longue que la montée. Il faut impérativement résoudre l'équation du second degré en t : -(1/2) g t² + (v₀ sin α) t + h = 0 et retenir la racine positive.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p03_q7",
            "type": "mcq",
            "prompt": "Un projectile est lâché à t = 0 avec vz = 0 depuis un balcon à h = 45 m (g = 10 m/s²). Quelle est sa durée de chute jusqu'au sol ?",
            "options": [
              "t = 3,0 s",
              "t = 4,5 s",
              "t = 9,0 s",
              "t = 1,5 s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "z(t) = -(1/2) g t² + h = 0 => 5 t² = 45 => t² = 9 => t = 3,0 s."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p03_q1",
          "type": "mcq",
          "prompt": "Un projectile est lancé à v₀ = 40 m/s avec un angle α = 60° (cos 60° = 0,5 ; sin 60° = 0,866) avec g = 10 m/s². Que vaut la norme de son vecteur vitesse au sommet de sa trajectoire ?",
          "options": [
            "vs = 20 m/s",
            "vs = 0 m/s",
            "vs = 34,6 m/s",
            "vs = 40 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au sommet, la vitesse verticale est nulle (vsz = 0), mais la composante horizontale reste constante : vs = vsx = v₀ cos α = 40 * 0,5 = 20 m/s."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p03_q2",
          "type": "mcq",
          "prompt": "Une flèche est tirée depuis le sol (h = 0) avec v₀ = 50 m/s et α = 30° (sin 30° = 0,5) dans un champ g = 10 m/s². Quelle hauteur maximale atteint-elle ?",
          "options": [
            "31,25 m",
            "62,5 m",
            "125 m",
            "15,6 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Zs = (v₀² sin²α) / (2 g) = (2500 * 0,25) / (2 * 10) = 625 / 20 = 31,25 m."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p03_q3",
          "type": "mcq",
          "prompt": "Un canon tire un boulet avec v₀ = 100 m/s sous un angle α = 15° (sin 30° = 0,5) avec g = 10 m/s² depuis le sol (h = 0). Quelle est la portée Xp ?",
          "options": [
            "Xp = 500 m",
            "Xp = 1000 m",
            "Xp = 250 m",
            "Xp = 866 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Xp = (v₀² sin 2α) / g = (100² * sin(2 * 15°)) / 10 = (10000 * sin 30°) / 10 = (10000 * 0,5) / 10 = 500 m."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p03_q4",
          "type": "mcq",
          "prompt": "Un sauteur en longueur quitte le sol avec une vitesse de module v₀ = 9,8 m/s (g = 9,8 m/s²). Quelle est la portée théorique maximale qu'il peut atteindre en choisissant l'angle optimal de 45° ?",
          "options": [
            "9,8 m",
            "4,9 m",
            "19,6 m",
            "7,0 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Xp,max = v₀² / g = (9,8)² / 9,8 = 9,8 m."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p03_q5",
          "type": "mcq",
          "prompt": "Une balle de tennis est frappée à v₀ = 12 m/s à une hauteur h = 0,5 m au-dessus du sol (g = 10 m/s²). Quelle est la vitesse vp de la balle lorsqu'elle touche le sol ?",
          "options": [
            "vp = 12,41 m/s",
            "vp = 12,00 m/s",
            "vp = 14,28 m/s",
            "vp = 10,50 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "vp = √(v₀² + 2 g h) = √(12² + 2 * 10 * 0,5) = √(144 + 10) = √154 ≈ 12,41 m/s."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p03_q6",
          "type": "mcq",
          "prompt": "La trajectoire d'une balle de tennis est donnée par z(x) = -0,14 x² + 1,73 x + 0,5 (en mètres). Un joueur adverse se tient à l'abscisse x = 11 m avec sa raquette levée à H = 2,50 m. La balle passe-t-elle au-dessus de sa raquette ?",
          "options": [
            "Oui, car à x = 11 m, z(11) = 2,59 m > 2,50 m (marge de 9 cm)",
            "Non, car z(11) = 2,41 m < 2,50 m (elle est interceptée)",
            "Non, car la balle retombe au sol avant 11 m",
            "Oui, avec une marge énorme de plus de 2 mètres"
          ],
          "correctAnswerIndex": 0,
          "explanation": "z(11) = -0,14 * (11)² + 1,73 * 11 + 0,5 = -0,14 * 121 + 19,03 + 0,5 = -16,94 + 19,53 = 2,59 m. Comme 2,59 m > 2,50 m, la balle passe au-dessus avec une marge D' = 2,59 - 2,50 = 0,09 m = 9 cm."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p03_q7",
          "type": "mcq",
          "prompt": "Un projectile est lâché à t = 0 avec vz = 0 depuis un balcon à h = 45 m (g = 10 m/s²). Quelle est sa durée de chute jusqu'au sol ?",
          "options": [
            "t = 3,0 s",
            "t = 4,5 s",
            "t = 9,0 s",
            "t = 1,5 s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "z(t) = -(1/2) g t² + h = 0 => 5 t² = 45 => t² = 9 => t = 3,0 s."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l03_champs_uniformes_p04",
      "order": 4,
      "title": "Mouvement d'une particule chargée dans un champ électrostatique E",
      "summary": "Dynamique d'une particule de charge q dans un condensateur plan : application de la 2e loi de Newton (a = (q/m) E), projection dans le repère du laboratoire, équations horaires, équation cartésienne de la trajectoire parabolique et sensibilité quadratique à la vitesse initiale.",
      "conceptExplanation": "1. Conditions d'injection dans le condensateur plan :\nUne particule chargée (charge q, masse m) pénètre en O(0,0) entre deux armatures parallèles de longueur ℓ distantes de d, avec une vitesse initiale horizontale v₀ = v₀ i. Entre les armatures règne un champ électrostatique uniforme E perpendiculaire à v₀ (par exemple vertical descendant : E = -E j avec E = U/d).\n\n2. Accélération de la particule :\nLe poids étant rigoureusement négligeable devant la force électrostatique (P << Fe) :\nSomme F_ext = Fe = q E = m a => a = (q / m) E.\nL'accélération dépend fondamentalement de la charge massique q / m. Si la particule est un électron (q = -e < 0) et E vertical descendant :\na = (-e / m) (-E j) = (e E / m) j = (e U / m d) j.\n\n3. Équations horaires de la vitesse et de la position :\n- Accélération : ax = 0  et  ay = (e U) / (m d).\n- Vitesse instantanée : vx(t) = v₀  et  vy(t) = [(e U) / (m d)] t.\n- Position instantanée : x(t) = v₀ t  et  y(t) = (1/2) [(e U) / (m d)] t².\n\n4. Équation cartésienne de la trajectoire parabolique :\nEn éliminant t = x / v₀, on obtient :\ny(x) = [e U / (2 m d v₀²)] x² = [e E / (2 m v₀²)] x².\nLa trajectoire à l'intérieur du condensateur est un arc de parabole de sommet O, incurvée vers la plaque positive (vers les y positifs pour un électron).\n\n5. Influence de la vitesse et de la tension :\n- La déviation est proportionnelle à la tension appliquée U.\n- La déviation est inversement proportionnelle au carré de la vitesse v₀ (y ∝ 1 / v₀²).",
      "keyRule": "L'accélération vaut a = (q/m) E. Pour un électron entre plaques horizontales (plaque supérieure positive), la trajectoire est l'arc de parabole y(x) = [e U / (2 m d v₀²)] x².",
      "formulas": [
        {
          "name": "Accélération de la particule chargée",
          "formula": "\\vec{a} = \\frac{q}{m}\\,\\vec{E}",
          "note": "Dépend du rapport charge / masse (q/m)"
        },
        {
          "name": "Équations horaires du faisceau",
          "formula": "\\begin{cases} x(t) = v_0\\,t \\\\ y(t) = \\frac{q E}{2m}\\,t^2 = \\frac{q U}{2md}\\,t^2 \\end{cases}",
          "note": "Mouvement uniforme sur (Ox), uniformément varié sur (Oy)"
        },
        {
          "name": "Équation cartésienne de la parabole",
          "formula": "y(x) = \\frac{q U}{2 m d v_0^2}\\,x^2",
          "note": "Courbure proportionnelle à U et inversement à v₀²"
        }
      ],
      "workedExample": {
        "title": "Calcul de la vitesse transversale d'un électron à la sortie",
        "statement": "Un électron (e = 1,6 * 10⁻¹⁹ C, m = 9,1 * 10⁻³¹ kg) pénètre à v₀ = 2,0 * 10⁷ m/s dans un condensateur de longueur ℓ = 5 cm, avec d = 2 cm et U = 100 V. Calcule la durée de traversée et la vitesse verticale vy à la sortie.",
        "methodSteps": [
          "Étape 1 : Calculer la durée de traversée : ts = ℓ / v₀ = 0,05 / (2,0 * 10⁷) = 2,5 * 10⁻⁹ s (2,5 ns).",
          "Étape 2 : Calculer le champ électrique : E = U / d = 100 / 0,02 = 5000 V/m.",
          "Étape 3 : Calculer l'accélération verticale : ay = (e E) / m = (1,6 * 10⁻¹⁹ * 5000) / (9,1 * 10⁻³¹) ≈ 8,79 * 10¹⁴ m/s².",
          "Étape 4 : Calculer la vitesse verticale vy(ts) = ay * ts = (8,79 * 10¹⁴) * (2,5 * 10⁻⁹) ≈ 2,20 * 10⁶ m/s.",
          "Conclusion : L'électron acquiert une vitesse transversale de 2,2 millions de mètres par seconde sans que sa composante horizontale v₀x n'ait varié."
        ],
        "conclusion": "L'électron acquiert une vitesse transversale de 2,20 * 10⁶ m/s sans que sa vitesse longitudinale horizontale v₀ ne soit modifiée."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif du comportement des particules chargées dans un condensateur",
        "tableData": {
          "headers": [
            "Particule",
            "Charge q",
            "Masse m",
            "Accélération a = (q/m) E",
            "Sens de déviation (E dirigé vers le bas)"
          ],
          "rows": [
            [
              "Électron (e⁻)",
              "-e = -1,6 * 10⁻¹⁹ C",
              "9,1 * 10⁻³¹ kg",
              "Norme a ≈ 1,76 * 10¹⁴ m/s²",
              "Vers le haut (attiré par l'armature positive +)"
            ],
            [
              "Proton (p⁺)",
              "+e = +1,6 * 10⁻¹⁹ C",
              "1,67 * 10⁻²⁷ kg",
              "Norme a ≈ 9,58 * 10¹⁰ m/s²",
              "Vers le bas (attiré par l'armature négative -)"
            ],
            [
              "Particule alpha (He²⁺)",
              "+2e = +3,2 * 10⁻¹⁹ C",
              "6,64 * 10⁻²⁷ kg",
              "Norme a ≈ 4,82 * 10¹⁰ m/s²",
              "Vers le bas (déviation plus faible que le proton)"
            ],
            [
              "Neutron (n)",
              "0 C",
              "1,67 * 10⁻²⁷ kg",
              "a = 0",
              "Aucune déviation : mouvement rectiligne uniforme"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Dispositif d'injection dans le condensateur plan",
          "stepTheme": "Conditions de pénétration",
          "stepBadge": "v₀ = v₀ i",
          "paragraphText": "Une particule de masse m et de charge q pénètre en O(0,0) avec une vitesse initiale v₀ = v₀ i parallèle aux plaques horizontales d'un condensateur plan de longueur ℓ et distantes de d. Entre les plaques règne un champ électrostatique uniforme E perpendiculaire à v₀.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p04_q1",
            "type": "mcq",
            "prompt": "Dans un condensateur plan de longueur ℓ = 8 cm et d'écartement d = 3 cm, on applique une tension positive U = 120 V entre les plaques P (supérieure) et P' (inférieure). Quelle est l'intensité du champ E et sa direction ?",
            "options": [
              "E = 4000 V/m, perpendiculaire aux plaques et orienté du haut vers le bas",
              "E = 1500 V/m, horizontal dans le sens de v₀",
              "E = 9600 V/m, orienté du bas vers le haut",
              "E = 360 V/m, oblique à 45°"
            ],
            "correctAnswerIndex": 0,
            "explanation": "E = U / d = 120 / 0,03 = 4000 V/m. Il est perpendiculaire aux plaques et dirigé de la plaque positive (P) vers la plaque négative (P'), donc vers le bas."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deuxième loi de Newton : accélération a = (q/m) E",
          "stepTheme": "Dynamique relativiste/classique",
          "stepBadge": "Dépend de q/m",
          "paragraphText": "En négligeant le poids devant la force électrique, la deuxième loi de Newton s'écrit : Fe = q E = m a, d'où a = (q / m) E. Contrairement au mouvement dans le champ de pesanteur où l'accélération ne dépendait pas de la masse, ici l'accélération dépend fondamentalement du rapport de charge massique q / m.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est l'accélération subie par un électron (e = 1,6 * 10⁻¹⁹ C, m = 9,1 * 10⁻³¹ kg) dans un champ électrique de norme E = 4000 V/m ?",
            "options": [
              "a ≈ 7,03 * 10¹⁴ m/s²",
              "a ≈ 3,64 * 10⁶ m/s²",
              "a ≈ 9,8 m/s²",
              "a ≈ 1,42 * 10⁻²⁴ m/s²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "a = (e / m) * E = (1,6 * 10⁻¹⁹ / 9,1 * 10⁻³¹) * 4000 ≈ 1,758 * 10¹¹ * 4000 ≈ 7,03 * 10¹⁴ m/s²."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Projection des équations et composantes de la vitesse",
          "stepTheme": "Projection cartésienne",
          "stepBadge": "v(t)",
          "paragraphText": "Si le champ E est vertical descendant (E = -E j) et que la particule est un électron (q = -e), la force Fe = -e (-E j) = e E j est verticale ascendante. On a : ax = 0, ay = (e E) / m. Par intégration avec v₀(v₀x = v₀, v₀y = 0) : vx(t) = v₀ et vy(t) = (e E / m) t.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p04_q3",
            "type": "mcq",
            "prompt": "Un électron pénètre à v₀ = 2,0 * 10⁷ m/s dans un condensateur où l'accélération verticale vaut ay = 7,0 * 10¹⁴ m/s². Que vaut sa vitesse verticale vy à la date t = 2,0 * 10⁻⁹ s ?",
            "options": [
              "vy = 1,4 * 10⁶ m/s",
              "vy = 1,4 * 10⁷ m/s",
              "vy = 3,5 * 10⁵ m/s",
              "vy = 2,0 * 10⁷ m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "vy(t) = ay * t = 7,0 * 10¹⁴ * 2,0 * 10⁻⁹ = 1,4 * 10⁶ m/s."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Équations horaires de position de la particule",
          "stepTheme": "Position OG(t)",
          "stepBadge": "x = v₀ t, y = (1/2) a t²",
          "paragraphText": "Par une seconde intégration par rapport au temps avec les conditions initiales x(0) = 0 et y(0) = 0 : x(t) = v₀ t et y(t) = (1/2) (q E / m) t² = (e E / 2m) t². La composante horizontale croît linéairement tandis que la déviation transversale croît avec le carré du temps.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p04_q4",
            "type": "mcq",
            "prompt": "Pour un condensateur de longueur ℓ = 8 cm, combien de temps met un électron injecté à v₀ = 2,0 * 10⁷ m/s pour franchir les plaques en ligne droite selon (Ox) ?",
            "options": [
              "t_s = 4,0 * 10⁻⁹ s (soit 4 nanosecondes)",
              "t_s = 4,0 * 10⁻⁷ s",
              "t_s = 1,6 * 10⁻⁸ s",
              "t_s = 2,5 * 10⁻⁶ s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "t_s = ℓ / v₀ = 0,08 / (2,0 * 10⁷) = 4,0 * 10⁻⁹ s = 4,0 ns."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Équation cartésienne de la trajectoire dans le condensateur",
          "stepTheme": "Trajectoire y(x)",
          "stepBadge": "y = (e U / 2 m d v₀²) x²",
          "paragraphText": "En éliminant t = x / v₀ dans l'équation y(t) et en remplaçant E par U / d, on obtient l'équation cartésienne de la trajectoire de l'électron entre les plaques : y(x) = (e E / 2 m v₀²) x² = (e U / 2 m d v₀²) x². C'est un arc de parabole dont la courbure est directement proportionnelle à la tension appliquée U.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p04_q5",
            "type": "mcq",
            "prompt": "Si la tension entre les armatures U est multipliée par 3 tandis que la vitesse d'entrée v₀ reste inchangée, que devient la déviation verticale y(x) pour une abscisse x donnée ?",
            "options": [
              "Elle est multipliée par 3",
              "Elle est multipliée par 9",
              "Elle est divisée par 3",
              "Elle reste strictement identique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme y(x) = (e U / 2 m d v₀²) x², la déviation y est proportionnelle au premier degré à la tension U : multiplier U par 3 triple exactement la déviation y."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : Effet d'une variation de la vitesse d'injection v₀",
          "stepTheme": "Sensibilité cinétique",
          "stepBadge": "Facteur 1 / v₀²",
          "paragraphText": "Attention au rôle prépondérant de la vitesse initiale : la déviation y(x) est inversement proportionnelle au CARRÉ de la vitesse v₀ (y ∝ 1 / v₀²). Si la vitesse initiale est doublée (v₀' = 2 v₀), la particule passe deux fois plus vite entre les plaques et sa déviation verticale est divisée par 4 !",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p04_q6",
            "type": "mcq",
            "prompt": "Un faisceau d'électrons pénètre dans les plaques à v₀. Si on multiplie la vitesse par 2, quelle fraction de sa déviation initiale y subit-il à la sortie ?",
            "options": [
              "Un quart (y / 4)",
              "La moitié (y / 2)",
              "Le double (2 y)",
              "Un huitième (y / 8)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "y(ℓ) ∝ 1 / v₀². En remplaçant v₀ par 2 v₀, le dénominateur contient (2 v₀)² = 4 v₀², ce qui divise la déviation finale par 4."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Comparaison des déviations électron vs proton",
          "stepTheme": "Rapport des inerties",
          "stepBadge": "m_p ≈ 1836 m_e",
          "paragraphText": "Si un proton et un électron pénètrent avec la même vitesse initiale v₀ dans le même condensateur, la force électrique a le même module mais est de sens inverse. Comme le proton est 1836 fois plus lourd que l'électron (m_p ≈ 1836 m_e), son accélération et sa courbure parabolique sont 1836 fois plus faibles : le proton subit une déviation quasi imperceptible par rapport à l'électron.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p04_q7",
            "type": "mcq",
            "prompt": "Un électron subit une déviation de 10 mm à la traversée d'un condensateur. Quelle déviation subirait un proton injecté dans les mêmes conditions de vitesse et de champ ?",
            "options": [
              "Environ 5,4 micromètres (déviation minuscule en sens inverse)",
              "Exactement 10 mm en sens inverse",
              "Environ 18,36 mètres",
              "Une déviation rigoureusement nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "y_proton = y_electron * (m_e / m_p) ≈ 10 mm / 1836 ≈ 0,00545 mm = 5,45 µm en sens inverse."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p04_q1",
          "type": "mcq",
          "prompt": "Dans un condensateur plan de longueur ℓ = 8 cm et d'écartement d = 3 cm, on applique une tension positive U = 120 V entre les plaques P (supérieure) et P' (inférieure). Quelle est l'intensité du champ E et sa direction ?",
          "options": [
            "E = 4000 V/m, perpendiculaire aux plaques et orienté du haut vers le bas",
            "E = 1500 V/m, horizontal dans le sens de v₀",
            "E = 9600 V/m, orienté du bas vers le haut",
            "E = 360 V/m, oblique à 45°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "E = U / d = 120 / 0,03 = 4000 V/m. Il est perpendiculaire aux plaques et dirigé de la plaque positive (P) vers la plaque négative (P'), donc vers le bas."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est l'accélération subie par un électron (e = 1,6 * 10⁻¹⁹ C, m = 9,1 * 10⁻³¹ kg) dans un champ électrique de norme E = 4000 V/m ?",
          "options": [
            "a ≈ 7,03 * 10¹⁴ m/s²",
            "a ≈ 3,64 * 10⁶ m/s²",
            "a ≈ 9,8 m/s²",
            "a ≈ 1,42 * 10⁻²⁴ m/s²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "a = (e / m) * E = (1,6 * 10⁻¹⁹ / 9,1 * 10⁻³¹) * 4000 ≈ 1,758 * 10¹¹ * 4000 ≈ 7,03 * 10¹⁴ m/s²."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p04_q3",
          "type": "mcq",
          "prompt": "Un électron pénètre à v₀ = 2,0 * 10⁷ m/s dans un condensateur où l'accélération verticale vaut ay = 7,0 * 10¹⁴ m/s². Que vaut sa vitesse verticale vy à la date t = 2,0 * 10⁻⁹ s ?",
          "options": [
            "vy = 1,4 * 10⁶ m/s",
            "vy = 1,4 * 10⁷ m/s",
            "vy = 3,5 * 10⁵ m/s",
            "vy = 2,0 * 10⁷ m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "vy(t) = ay * t = 7,0 * 10¹⁴ * 2,0 * 10⁻⁹ = 1,4 * 10⁶ m/s."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p04_q4",
          "type": "mcq",
          "prompt": "Pour un condensateur de longueur ℓ = 8 cm, combien de temps met un électron injecté à v₀ = 2,0 * 10⁷ m/s pour franchir les plaques en ligne droite selon (Ox) ?",
          "options": [
            "t_s = 4,0 * 10⁻⁹ s (soit 4 nanosecondes)",
            "t_s = 4,0 * 10⁻⁷ s",
            "t_s = 1,6 * 10⁻⁸ s",
            "t_s = 2,5 * 10⁻⁶ s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "t_s = ℓ / v₀ = 0,08 / (2,0 * 10⁷) = 4,0 * 10⁻⁹ s = 4,0 ns."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p04_q5",
          "type": "mcq",
          "prompt": "Si la tension entre les armatures U est multipliée par 3 tandis que la vitesse d'entrée v₀ reste inchangée, que devient la déviation verticale y(x) pour une abscisse x donnée ?",
          "options": [
            "Elle est multipliée par 3",
            "Elle est multipliée par 9",
            "Elle est divisée par 3",
            "Elle reste strictement identique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme y(x) = (e U / 2 m d v₀²) x², la déviation y est proportionnelle au premier degré à la tension U : multiplier U par 3 triple exactement la déviation y."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p04_q6",
          "type": "mcq",
          "prompt": "Un faisceau d'électrons pénètre dans les plaques à v₀. Si on multiplie la vitesse par 2, quelle fraction de sa déviation initiale y subit-il à la sortie ?",
          "options": [
            "Un quart (y / 4)",
            "La moitié (y / 2)",
            "Le double (2 y)",
            "Un huitième (y / 8)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "y(ℓ) ∝ 1 / v₀². En remplaçant v₀ par 2 v₀, le dénominateur contient (2 v₀)² = 4 v₀², ce qui divise la déviation finale par 4."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p04_q7",
          "type": "mcq",
          "prompt": "Un électron subit une déviation de 10 mm à la traversée d'un condensateur. Quelle déviation subirait un proton injecté dans les mêmes conditions de vitesse et de champ ?",
          "options": [
            "Environ 5,4 micromètres (déviation minuscule en sens inverse)",
            "Exactement 10 mm en sens inverse",
            "Environ 18,36 mètres",
            "Une déviation rigoureusement nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "y_proton = y_electron * (m_e / m_p) ≈ 10 mm / 1836 ≈ 0,00545 mm = 5,45 µm en sens inverse."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l03_champs_uniformes_p05",
      "order": 5,
      "title": "Déviation angulaire α, sortie du condensateur et déflexion sur écran Y",
      "summary": "Coordonnées du point de sortie S, condition analytique de non-interception (|ys| < d/2), déviation angulaire α, propriété géométrique fondamentale de la tangente passant par le centre I (xI = ℓ/2), mouvement rectiligne uniforme hors champ et calcul de la déflexion Y sur écran.",
      "conceptExplanation": "1. Le point de sortie S du condensateur :\nLa particule quitte le champ à l'abscisse xs = ℓ. Ses coordonnées en S sont : xs = ℓ et ys = [e U / (2 m d v₀²)] ℓ².\nLes composantes de son vecteur vitesse vs en S sont : vsx = v₀  et  vsy = (e U ℓ) / (m d v₀).\n\n2. Condition de sortie sans interception par les armatures :\nComme le faisceau entre au centre géométrique des armatures (y = 0), il ne heurtera pas les plaques si et seulement si son ordonnée de sortie vérifie : |ys| < d / 2.\nSoit [e U / (2 m d v₀²)] ℓ² < d / 2 => U < (m d² v₀²) / (e ℓ²).\nCette relation fixe la tension limite maximale admissible pour éviter l'absorption du faisceau par les armatures.\n\n3. Déviation angulaire α :\nC'est l'angle que fait le vecteur vitesse de sortie vs avec la direction initiale (axe Ox) :\ntan α = vsy / vsx = vsy / v₀ = (e U ℓ) / (m d v₀²).\n\n4. Mouvement au-delà du condensateur et point I :\nDès que x > ℓ, le champ électrique s'annule (E = 0). D'après le principe d'inertie, le mouvement de l'électron devient rectiligne et uniforme, dirigé selon la tangente à la trajectoire au point S.\nPropriété géométrique capitale : La tangente en S à la parabole d'équation y = k x² coupe l'axe (Ox) exactement en son milieu : xI = ℓ / 2. Le point I(ℓ/2, 0) est le centre géométrique des plaques.\n\n5. Déflexion électrostatique Y sur l'écran :\nUn écran fluorescent est placé à la distance D du centre I des plaques. Dans le triangle rectangle reliant I, le centre de l'écran O' et le spot P :\ntan α = Y / D => Y = D tan α = [e ℓ D / (m d v₀²)] U.\nLe déplacement Y du spot sur l'écran est rigoureusement proportionnel à la tension U appliquée entre les plaques déflectrices.",
      "keyRule": "Sortie sans heurt : |ys| < d/2 <=> U < (m d² v₀²) / (e ℓ²). La tangente en S passe par le centre I (xI = ℓ/2). La déflexion sur écran vaut Y = D tan α = [e ℓ D / (m d v₀²)] U.",
      "formulas": [
        {
          "name": "Déviation à la sortie des plaques",
          "formula": "y_S = \\frac{e\\,U\\,\\ell^2}{2\\,m\\,d\\,v_0^2}",
          "note": "Condition de non-choc : |y_S| < d / 2"
        },
        {
          "name": "Angle de déviation angulaire α",
          "formula": "\\tan\\alpha = \\frac{v_{Sy}}{v_{Sx}} = \\frac{e\\,U\\,\\ell}{m\\,d\\,v_0^2} = \\frac{2\\,y_S}{\\ell}",
          "note": "La tangente coupe (Ox) au centre I (xI = ℓ/2)"
        },
        {
          "name": "Déflexion sur écran fluorescent",
          "formula": "Y = D\\,\\tan\\alpha = \\frac{e\\,\\ell\\,D}{m\\,d\\,v_0^2}\\,U",
          "note": "D est la distance entre le centre I des plaques et l'écran"
        }
      ],
      "workedExample": {
        "title": "Calcul complet de déflexion sur un écran fluorescent",
        "statement": "Un condensateur a pour caractéristiques : ℓ = 5 cm, d = 2 cm, U = 100 V. Des électrons y pénètrent à v₀ = 1,30 * 10⁷ m/s. L'écran est à D = 20 cm du centre des plaques. Calcule ys, vérifie la non-interception, puis calcule Y (e = 1,6 * 10⁻¹⁹ C, m = 9,1 * 10⁻³¹ kg).",
        "methodSteps": [
          "Étape 1 : Calculer ys = (1,6 * 10⁻¹⁹ * 100 * 0,05²) / (2 * 9,1 * 10⁻³¹ * 0,02 * (1,30 * 10⁷)²) ≈ (4,0 * 10⁻²⁰) / (6,15 * 10⁻¹⁸) ≈ 0,0065 m = 6,5 mm.",
          "Étape 2 : Vérifier la condition : d / 2 = 2 cm / 2 = 1,0 cm = 10 mm. Comme 6,5 mm < 10 mm, les électrons ne heurtent pas la plaque supérieure.",
          "Étape 3 : Calculer tan α = 2 ys / ℓ = (2 * 6,5 * 10⁻³) / 0,05 = 0,26 (α ≈ 14,57°).",
          "Étape 4 : Calculer la déflexion sur l'écran : Y = D * tan α = 0,20 * 0,26 = 0,052 m = 5,2 cm.",
          "Conclusion : Le spot lumineux est dévié de 5,2 cm au-dessus du centre de l'écran."
        ],
        "conclusion": "Le spot lumineux est dévié de 5,2 cm au-dessus du centre de l'écran sans que les électrons n'aient touché les plaques."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau récapitulatif des paramètres de déflexion électrostatique",
        "tableData": {
          "headers": [
            "Grandeur",
            "Définition physique",
            "Expression mathématique",
            "Valeur type",
            "Remarque géométrique"
          ],
          "rows": [
            [
              "Déplacement à la sortie ys",
              "Ordonnée de la particule en x = ℓ",
              "ys = (e U ℓ²) / (2 m d v₀²)",
              "ys = 6,5 mm",
              "Ne doit pas dépasser d / 2 pour éviter le choc"
            ],
            [
              "Condition de non-interception",
              "La particule sort sans heurter les armatures",
              "U < (m d² v₀²) / (e ℓ²)",
              "U < 356 V",
              "Fixe la tension maximale applicable au condensateur"
            ],
            [
              "Angle de déviation α",
              "Angle entre vecteur v₀ et vecteur vs",
              "tan α = (e U ℓ) / (m d v₀²)",
              "α ≈ 14,6°",
              "tan α = 2 ys / ℓ (la tangente coupe Ox en ℓ / 2)"
            ],
            [
              "Centre géométrique I",
              "Point d'intersection de la tangente avec (Ox)",
              "xI = ℓ / 2",
              "xI = 4,0 cm",
              "Propriété fondamentale des paraboles : sommet en O"
            ],
            [
              "Déflexion sur écran Y",
              "Déplacement du spot sur l'écran à distance D",
              "Y = D tan α = (e ℓ D / m d v₀²) U",
              "Y = 2,27 cm",
              "Y est rigoureusement proportionnel à la tension U"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le point de sortie S du condensateur",
          "stepTheme": "Point S",
          "stepBadge": "x = ℓ",
          "paragraphText": "Le point de sortie S est le point où la particule franchit le bord des armatures en x = ℓ. Ses coordonnées sont : xs = ℓ et ys = (e U / 2 m d v₀²) ℓ². Les composantes de sa vitesse en S sont : vsx = v₀ et vsy = (e U ℓ) / (m d v₀).",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p05_q1",
            "type": "mcq",
            "prompt": "Pour un électron avec ℓ = 8 cm, d = 3 cm, U = 120 V, v₀ = 2,11 * 10⁷ m/s (e = 1,6 * 10⁻¹⁹ C, m = 9,1 * 10⁻³¹ kg), que vaut l'ordonnée de sortie ys ?",
            "options": [
              "ys ≈ 5,0 * 10⁻³ m = 5,0 mm",
              "ys ≈ 15,0 mm",
              "ys ≈ 0,5 mm",
              "ys ≈ 30 mm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ys = (e U ℓ²) / (2 m d v₀²) = (1,6 * 10⁻¹⁹ * 120 * 0,08²) / (2 * 9,1 * 10⁻³¹ * 0,03 * (2,11 * 10⁷)²) ≈ (1,2288 * 10⁻¹⁹) / (2,433 * 10⁻¹⁷) ≈ 5,05 * 10⁻³ m ≈ 5,0 mm."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Condition de non-interception par les armatures",
          "stepTheme": "Sortie effective",
          "stepBadge": "|ys| < d / 2",
          "paragraphText": "Puisque le faisceau pénètre à mi-distance des armatures en y = 0, la particule sortira effectivement du condensateur sans heurter la plaque si et seulement si sa déviation en sortie vérifie |ys| < d / 2. Cela impose une condition limite sur la tension : U < (m d² v₀²) / (e ℓ²).",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p05_q2",
            "type": "mcq",
            "prompt": "Avec d = 3 cm, quelle est l'ordonnée maximale permise |ys| pour qu'un électron ne s'écrase pas sur l'armature ?",
            "options": [
              "|ys| < 1,5 cm = 15 mm",
              "|ys| < 3,0 cm = 30 mm",
              "|ys| < 0,75 cm = 7,5 mm",
              "|ys| < 6,0 cm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les plaques sont distantes de d = 3 cm et centrées autour de l'axe (Ox). La distance entre l'axe et chaque plaque est donc d / 2 = 1,5 cm = 15 mm."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul de la déviation angulaire α",
          "stepTheme": "Angle de déviation",
          "stepBadge": "tan α = vsy / vsx",
          "paragraphText": "La déviation angulaire α est l'angle formé par le vecteur vitesse de sortie vs avec la direction initiale v₀ (axe Ox). On a : tan α = vsy / vsx = vsy / v₀ = (e U ℓ) / (m d v₀²). Pour de petits angles, tan α ≈ α en radians.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p05_q3",
            "type": "mcq",
            "prompt": "À la sortie du condensateur, un électron possède vsx = 2,0 * 10⁷ m/s et vsy = 5,0 * 10⁶ m/s. Que vaut la tangente de son angle de déviation tan α ?",
            "options": [
              "tan α = 0,25",
              "tan α = 4,0",
              "tan α = 0,10",
              "tan α = 0,50"
            ],
            "correctAnswerIndex": 0,
            "explanation": "tan α = vsy / vsx = (5,0 * 10⁶) / (2,0 * 10⁷) = 0,25 (soit un angle α ≈ 14,04°)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Mouvement rectiligne uniforme au-delà du condensateur",
          "stepTheme": "Hors champ",
          "stepBadge": "F = 0 => MRU",
          "paragraphText": "Dès que la particule quitte l'espace compris entre les plaques (x > ℓ), le champ électrostatique est nul (E = 0) et le poids reste négligeable. La particule n'est soumise à aucune force : d'après le principe d'inertie, son mouvement devient rectiligne et uniforme, porté par la tangente à la trajectoire au point de sortie S.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p05_q4",
            "type": "mcq",
            "prompt": "Entre la sortie des plaques et un écran placé plus loin dans le vide, quelle est la trajectoire de l'électron ?",
            "options": [
              "Un segment de droite porté par le vecteur vitesse vs",
              "Une parabole continuant à s'incurver vers le haut",
              "Une spirale due au champ magnétique résiduel",
              "Un cercle centré sur le milieu des armatures"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans le vide sans champ, la résultante des forces est nulle : le mouvement est rectiligne uniforme le long de la droite tangente en S."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Propriété géométrique du centre I des plaques",
          "stepTheme": "Point I",
          "stepBadge": "xI = ℓ / 2",
          "paragraphText": "Une propriété remarquable de la tangente à une parabole issue du sommet montre que la tangente en S coupe l'axe horizontal (Ox) exactement au milieu des armatures, au point I d'abscisse xI = ℓ / 2. On a donc géométriquement : tan α = ys / (ℓ / 2) = 2 ys / ℓ.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p05_q5",
            "type": "mcq",
            "prompt": "Des plaques ont une longueur ℓ = 10 cm. À quelle abscisse xI la tangente à la parabole au point de sortie coupe-t-elle l'axe longitudinal (Ox) ?",
            "options": [
              "xI = 5,0 cm",
              "xI = 10,0 cm",
              "xI = 2,5 cm",
              "xI = 0 cm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La tangente en S coupe toujours l'axe (Ox) au centre géométrique des armatures : xI = ℓ / 2 = 10 / 2 = 5,0 cm."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Calcul de la déflexion électrostatique Y sur l'écran",
          "stepTheme": "Déplacement du spot",
          "stepBadge": "Y = D tan α",
          "paragraphText": "Soit un écran fluorescent (E) placé à une distance D du centre I des armatures (D = L' + ℓ/2). Dans le triangle rectangle reliant le centre I, le centre de l'écran O' et le point d'impact P : tan α = O'P / IO' = Y / D, d'où Y = D tan α. En remplaçant tan α : Y = (e ℓ D / m d v₀²) U.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p05_q6",
            "type": "mcq",
            "prompt": "Un écran est placé à une distance D = 25 cm du centre des plaques. Sachant que tan α = 0,12, quelle est la déflexion Y du faisceau sur l'écran ?",
            "options": [
              "Y = 3,0 cm",
              "Y = 0,48 cm",
              "Y = 2,08 cm",
              "Y = 12 cm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Y = D * tan α = 25 cm * 0,12 = 3,0 cm."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège : Confusion entre la distance D et la distance écran-sortie",
          "stepTheme": "Repérage géométrique",
          "stepBadge": "D = L' + ℓ / 2",
          "paragraphText": "Dans les énoncés d'examen, prenez garde à la définition de la distance de l'écran : si l'énoncé donne la distance L' entre le bord de SORTIE du condensateur et l'écran, la distance D au centre I vaut D = L' + ℓ / 2. Utiliser L' au lieu de D conduit systématiquement à sous-estimer la déflexion Y.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p05_q7",
            "type": "mcq",
            "prompt": "Des armatures ont une longueur ℓ = 6 cm. L'écran est situé à une distance L' = 17 cm du bord de sortie des armatures. Quelle valeur de D doit-on utiliser dans la formule Y = D tan α ?",
            "options": [
              "D = 20 cm",
              "D = 17 cm",
              "D = 23 cm",
              "D = 14 cm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D = L' + ℓ / 2 = 17 cm + 6 / 2 cm = 17 + 3 = 20 cm."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p05_q1",
          "type": "mcq",
          "prompt": "Pour un électron avec ℓ = 8 cm, d = 3 cm, U = 120 V, v₀ = 2,11 * 10⁷ m/s (e = 1,6 * 10⁻¹⁹ C, m = 9,1 * 10⁻³¹ kg), que vaut l'ordonnée de sortie ys ?",
          "options": [
            "ys ≈ 5,0 * 10⁻³ m = 5,0 mm",
            "ys ≈ 15,0 mm",
            "ys ≈ 0,5 mm",
            "ys ≈ 30 mm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ys = (e U ℓ²) / (2 m d v₀²) = (1,6 * 10⁻¹⁹ * 120 * 0,08²) / (2 * 9,1 * 10⁻³¹ * 0,03 * (2,11 * 10⁷)²) ≈ (1,2288 * 10⁻¹⁹) / (2,433 * 10⁻¹⁷) ≈ 5,05 * 10⁻³ m ≈ 5,0 mm."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p05_q2",
          "type": "mcq",
          "prompt": "Avec d = 3 cm, quelle est l'ordonnée maximale permise |ys| pour qu'un électron ne s'écrase pas sur l'armature ?",
          "options": [
            "|ys| < 1,5 cm = 15 mm",
            "|ys| < 3,0 cm = 30 mm",
            "|ys| < 0,75 cm = 7,5 mm",
            "|ys| < 6,0 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les plaques sont distantes de d = 3 cm et centrées autour de l'axe (Ox). La distance entre l'axe et chaque plaque est donc d / 2 = 1,5 cm = 15 mm."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p05_q3",
          "type": "mcq",
          "prompt": "À la sortie du condensateur, un électron possède vsx = 2,0 * 10⁷ m/s et vsy = 5,0 * 10⁶ m/s. Que vaut la tangente de son angle de déviation tan α ?",
          "options": [
            "tan α = 0,25",
            "tan α = 4,0",
            "tan α = 0,10",
            "tan α = 0,50"
          ],
          "correctAnswerIndex": 0,
          "explanation": "tan α = vsy / vsx = (5,0 * 10⁶) / (2,0 * 10⁷) = 0,25 (soit un angle α ≈ 14,04°)."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p05_q4",
          "type": "mcq",
          "prompt": "Entre la sortie des plaques et un écran placé plus loin dans le vide, quelle est la trajectoire de l'électron ?",
          "options": [
            "Un segment de droite porté par le vecteur vitesse vs",
            "Une parabole continuant à s'incurver vers le haut",
            "Une spirale due au champ magnétique résiduel",
            "Un cercle centré sur le milieu des armatures"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le vide sans champ, la résultante des forces est nulle : le mouvement est rectiligne uniforme le long de la droite tangente en S."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p05_q5",
          "type": "mcq",
          "prompt": "Des plaques ont une longueur ℓ = 10 cm. À quelle abscisse xI la tangente à la parabole au point de sortie coupe-t-elle l'axe longitudinal (Ox) ?",
          "options": [
            "xI = 5,0 cm",
            "xI = 10,0 cm",
            "xI = 2,5 cm",
            "xI = 0 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La tangente en S coupe toujours l'axe (Ox) au centre géométrique des armatures : xI = ℓ / 2 = 10 / 2 = 5,0 cm."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p05_q6",
          "type": "mcq",
          "prompt": "Un écran est placé à une distance D = 25 cm du centre des plaques. Sachant que tan α = 0,12, quelle est la déflexion Y du faisceau sur l'écran ?",
          "options": [
            "Y = 3,0 cm",
            "Y = 0,48 cm",
            "Y = 2,08 cm",
            "Y = 12 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Y = D * tan α = 25 cm * 0,12 = 3,0 cm."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p05_q7",
          "type": "mcq",
          "prompt": "Des armatures ont une longueur ℓ = 6 cm. L'écran est situé à une distance L' = 17 cm du bord de sortie des armatures. Quelle valeur de D doit-on utiliser dans la formule Y = D tan α ?",
          "options": [
            "D = 20 cm",
            "D = 17 cm",
            "D = 23 cm",
            "D = 14 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D = L' + ℓ / 2 = 17 cm + 6 / 2 cm = 17 + 3 = 20 cm."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l03_champs_uniformes_p06",
      "order": 6,
      "title": "Accélération préalable, sensibilité et oscilloscope cathodique",
      "summary": "Principe du canon à électrons (tension accélératrice U₀), calcul de v₀ par le théorème de l'énergie cinétique, formule universelle de déflexion Y indépendante de la masse et de la charge, sensibilité électrostatique S, et fonctionnement d'un oscilloscope analogique (voie verticale et balayage horizontal).",
      "conceptExplanation": "1. Le canon à électrons et la tension accélératrice U₀ :\nLe faisceau d'électrons est généré par un canon constitué d'une cathode chauffante C émettant des électrons par effet thermoélectronique à vitesse négligeable (vC ≈ 0), et d'une anode trouée A portée à un potentiel élevé VA > VC. La tension d'accélération est notée U₀ = VA - VC > 0 (généralement 1 à 5 kV).\n\n2. Vitesse d'injection v₀ par le théorème de l'énergie cinétique :\nEn appliquant le théorème de l'énergie cinétique à l'électron entre C et A :\nDelta Ec = (1/2) m v₀² - 0 = W(Fe) = -e (VC - VA) = e (VA - VC) = e U₀.\nD'où : v₀² = (2 e U₀) / m  =>  v₀ = √(2 e U₀ / m).\nL'énergie cinétique acquise par l'électron vaut Ec = e U₀.\n\n3. La formule universelle de déflexion :\nEn remplaçant v₀² = (2 e U₀ / m) dans l'expression de la déflexion Y = [e ℓ D / (m d v₀²)] U :\nY = [e ℓ D / (m d (2 e U₀ / m))] U = [ℓ D / (2 d U₀)] U.\nRésultat majeur : la déflexion finale Y ne dépend NI de la charge e NI de la masse m de la particule ! Toute particule chargée accélérée depuis le repos par une tension U₀ subira exactement la même déflexion sous la tension U dans le même condensateur.\n\n4. Sensibilité électrostatique S de l'oscilloscope :\nLa sensibilité est définie comme le déplacement du spot par unité de tension déflectrice appliquée :\nS = Y / U = (ℓ D) / (2 d U₀).\nElle s'exprime en m/V ou mm/V. C'est une constante de l'appareil ne dépendant que de sa géométrie (ℓ, d, D) et de sa tension d'accélération U₀.\n\n5. Fonctionnement d'un oscilloscope cathodique :\n- Plaques de déviation verticale Y : soumises à la tension à visualiser u(t). Le spot se déplace verticalement : y(t) = S * u(t).\n- Plaques de déviation horizontale X : soumises à une tension en dent de scie périodique (base de temps) générant un balayage temporel linéaire : x(t) = k * t.\nLa combinaison des deux mouvements trace la courbe u = f(t) sur l'écran fluorescent.",
      "keyRule": "L'énergie cinétique du canon vaut Ec = (1/2) m v₀² = e U₀ => v₀ = √(2 e U₀ / m). La déflexion universelle est Y = [ℓ D / (2 d U₀)] U (indépendante de e et m). La sensibilité vaut S = Y / U = (ℓ D) / (2 d U₀).",
      "formulas": [
        {
          "name": "Vitesse à la sortie du canon à électrons",
          "formula": "v_0 = \\sqrt{\\frac{2\\,e\\,U_0}{m}}",
          "note": "U₀ tension accélératrice en volts (V)"
        },
        {
          "name": "Formule universelle de déflexion",
          "formula": "Y = \\frac{\\ell\\,D}{2\\,d\\,U_0}\\,U",
          "note": "Indépendante de e et de m !"
        },
        {
          "name": "Sensibilité électrostatique de l'oscilloscope",
          "formula": "S = \\frac{Y}{U} = \\frac{\\ell\\,D}{2\\,d\\,U_0}",
          "note": "Exprimée en m/V, mm/V ou div/V"
        }
      ],
      "workedExample": {
        "title": "Calcul de la sensibilité d'un tube d'oscilloscope",
        "statement": "Un tube cathodique présente les caractéristiques : ℓ = 8 cm, d = 3 cm, D = 18 cm et U₀ = 1,20 kV (1200 V). Calcule la sensibilité électrostatique S en mm/V, puis le déplacement Y obtenu pour une tension mesurée U = 50 V.",
        "methodSteps": [
          "Étape 1 : Convertir toutes les longueurs en mètres : ℓ = 0,08 m ; d = 0,03 m ; D = 0,18 m.",
          "Étape 2 : Calculer la sensibilité théorique : S = (ℓ * D) / (2 * d * U₀) = (0,08 * 0,18) / (2 * 0,03 * 1200) = 0,0144 / 72 = 2,0 * 10⁻⁴ m/V.",
          "Étape 3 : Convertir en mm/V : S = 2,0 * 10⁻⁴ * 1000 = 0,20 mm/V.",
          "Étape 4 : Calculer la déflexion pour U = 50 V : Y = S * U = 0,20 mm/V * 50 V = 10 mm = 1,0 cm.",
          "Conclusion : Chaque volt appliqué déplace le spot de 0,2 mm ; une tension de 50 V produit une déflexion de 1 cm."
        ],
        "conclusion": "La sensibilité du tube est de 0,20 mm/V, produisant un déplacement net du spot de 1,0 cm sous une tension de 50 V."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Synthèse des caractéristiques du canon à électrons et de l'oscilloscope",
        "tableData": {
          "headers": [
            "Organe / Grandeur",
            "Principe physique",
            "Formule mathématique",
            "Dépendance physique",
            "Rôle technologique"
          ],
          "rows": [
            [
              "Canon à électrons (C-A)",
              "Accélération électrostatique sous tension U₀",
              "v₀ = √(2 e U₀ / m)",
              "v₀ dépend de e / m",
              "Produit un faisceau homocinétique à vitesse v₀ réglable"
            ],
            [
              "Énergie cinétique acquise",
              "Théorème de l'énergie cinétique Ec = W",
              "Ec = (1/2) m v₀² = e U₀",
              "Proportionnelle à U₀",
              "1 eV = 1,6 * 10⁻¹⁹ J"
            ],
            [
              "Formule universelle de déflexion Y",
              "Injection de v₀² dans Y = (e ℓ D / m d v₀²) U",
              "Y = (ℓ D / 2 d U₀) U",
              "TOTALEMENT INDÉPENDANTE de e et de m !",
              "Même déviation pour toute particule accélérée sous U₀"
            ],
            [
              "Sensibilité électrostatique S",
              "Déplacement par volt appliqué S = Y / U",
              "S = (ℓ D) / (2 d U₀)",
              "Constante propre à l'appareil",
              "S'exprime en m/V ou mm/V"
            ],
            [
              "Plaques de déviation Y",
              "Tension du signal d'entrée u(t)",
              "y_spot(t) = S * u(t)",
              "Voie verticale",
              "Affichage fidèle de la forme d'onde étudiée"
            ],
            [
              "Plaques de déviation X",
              "Tension en dent de scie périodique",
              "x_spot(t) ∝ t",
              "Base de temps",
              "Balayage linéaire horizontal en fonction du temps"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le canon à électrons et la tension accélératrice U₀",
          "stepTheme": "Canon à électrons",
          "stepBadge": "U₀ = VA - VC > 0",
          "paragraphText": "Le canon à électrons est constitué d'une cathode C émettrice chauffée et d'une anode percée A portée à un potentiel très positif VA > VC. Les électrons émis avec une vitesse initiale quasi nulle sont violemment accélérés vers l'anode sous la différence de potentiel U₀ = VA - VC (de l'ordre de 1 à 5 kV) avant de pénétrer dans le condensateur déflecteur.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p06_q1",
            "type": "mcq",
            "prompt": "Pour accélérer des électrons de charge q = -e de la cathode C vers l'anode A, quel doit être le signe de la tension U₀ = VA - VC ?",
            "options": [
              "U₀ doit être positive (VA > VC afin d'attirer les électrons)",
              "U₀ doit être négative (VA < VC afin de repousser les électrons)",
              "U₀ doit être nulle car les électrons avancent par diffusion",
              "Le signe n'a aucune importance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les électrons étant négatifs, ils sont attirés vers les potentiels plus élevés : on doit donc avoir VA > VC, c'est-à-dire U₀ > 0."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Vitesse d'injection v₀ par le théorème de l'énergie cinétique",
          "stepTheme": "Calcul de v₀",
          "stepBadge": "v₀ = √(2 e U₀ / m)",
          "paragraphText": "En appliquant le théorème de l'énergie cinétique à l'électron entre la cathode C (vC ≈ 0) et l'anode A : Ec(A) - Ec(C) = W(Fe) = -e (VC - VA) = e (VA - VC) = e U₀. D'où (1/2) m v₀² = e U₀, ce qui donne l'expression de la vitesse d'injection : v₀ = √(2 e U₀ / m).",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p06_q2",
            "type": "mcq",
            "prompt": "Sous une tension d'accélération U₀ = 1270 V, quelle est la vitesse v₀ acquise par un électron (e = 1,6 * 10⁻¹⁹ C, m = 9,1 * 10⁻³¹ kg) ?",
            "options": [
              "v₀ ≈ 2,11 * 10⁷ m/s",
              "v₀ ≈ 4,46 * 10¹⁴ m/s",
              "v₀ ≈ 1,49 * 10⁶ m/s",
              "v₀ ≈ 3,00 * 10⁸ m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "v₀ = √(2 * 1,6 * 10⁻¹⁹ * 1270 / 9,1 * 10⁻³¹) = √(4,064 * 10⁻¹⁶ / 9,1 * 10⁻³¹) = √(4,466 * 10¹⁴) ≈ 2,11 * 10⁷ m/s (environ 7% de la vitesse de la lumière)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Formule universelle de déflexion : Indépendance de e et m",
          "stepTheme": "Résultat capital",
          "stepBadge": "Y = (ℓ D / 2 d U₀) U",
          "paragraphText": "En remplaçant v₀² = (2 e U₀ / m) dans l'expression de la déflexion Y = (e ℓ D / m d v₀²) U, les termes e et m se simplifient exactement : Y = (ℓ D / 2 d U₀) U. C'est un résultat magistral : la déflexion finale Y sur l'écran ne dépend NI de la masse m NI de la charge e de la particule accélérée par la tension préalable U₀ !",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p06_q3",
            "type": "mcq",
            "prompt": "Un électron et un positron (même masse mais charge opposée +e) puis un ion accélérés sous la même tension U₀ traversent le même condensateur soumis à la même tension U. Que vaut la valeur absolue de leur déflexion |Y| sur l'écran ?",
            "options": [
              "Elle est rigoureusement identique pour toutes ces particules",
              "L'ion subit une déviation 1000 fois plus faible en raison de sa masse",
              "Le positron n'est pas dévié",
              "L'électron dévie deux fois plus car il est plus rapide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans l'expression Y = (ℓ D / 2 d U₀) U, ni la masse ni la charge n'apparaissent : pour une géométrie et des tensions fixées (U₀ et U), la déflexion |Y| est universelle pour toute particule chargée accélérée depuis le repos par U₀."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La sensibilité électrostatique de l'oscilloscope",
          "stepTheme": "Sensibilité S",
          "stepBadge": "S = Y / U = ℓ D / 2 d U₀",
          "paragraphText": "On appelle sensibilité électrostatique de l'oscilloscope le rapport noté S = Y / U entre le déplacement du spot sur l'écran et la tension déflectrice appliquée. Son expression théorique est S = (ℓ D) / (2 d U₀). Elle s'exprime en mètres par volt (m/V) ou plus communément en millimètres par volt (mm/V) ou divisions par volt (div/V).",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p06_q4",
            "type": "mcq",
            "prompt": "Un tube cathodique a pour paramètres : ℓ = 8 cm, d = 3 cm, D = 18 cm et U₀ = 1200 V. Quelle est sa sensibilité électrostatique S ?",
            "options": [
              "S = 2,0 * 10⁻⁴ m/V = 0,20 mm/V",
              "S = 5,0 mm/V",
              "S = 0,05 mm/V",
              "S = 1,2 mm/V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "S = (ℓ * D) / (2 * d * U₀) = (0,08 * 0,18) / (2 * 0,03 * 1200) = 0,0144 / 72 = 0,0002 m/V = 0,20 mm/V."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Optimisation de la sensibilité d'un écran",
          "stepTheme": "Paramètres de conception",
          "stepBadge": "Augmenter S",
          "paragraphText": "Pour rendre un oscilloscope plus sensible (obtenir une plus grande déflexion Y pour une même tension mesurée U), il faut augmenter le numérateur (plaques plus longues ℓ, écran plus éloigné D) ou diminuer le dénominateur (rapprocher les plaques d, diminuer la tension d'accélération U₀). Cependant, diminuer U₀ réduit la luminosité du spot.",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p06_q5",
            "type": "mcq",
            "prompt": "Si on divise par 2 la distance d entre les armatures tout en conservant tous les autres paramètres inchangés, que devient la sensibilité S de l'oscilloscope ?",
            "options": [
              "Elle est doublée (le spot dévie deux fois plus)",
              "Elle est divisée par 2",
              "Elle est multipliée par 4",
              "Elle reste inchangée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme S = (ℓ D) / (2 d U₀), la sensibilité est inversement proportionnelle à d : diviser d par 2 revient à multiplier S par 2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Balayage temporel et affichage des signaux alternatifs",
          "stepTheme": "Oscilloscope cathodique",
          "stepBadge": "Tension en dent de scie",
          "paragraphText": "Pour visualiser une tension périodique u(t) en fonction du temps sur un écran, on applique le signal à mesurer u(t) sur les plaques de déviation verticale (déplacement y ∝ u(t)), et une tension en dent de scie linéaire u_x(t) sur les plaques de déviation horizontale (déplacement x ∝ t). Le spot balaye ainsi régulièrement l'écran de gauche à droite, traçant fidèlement la courbe u = f(t).",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p06_q6",
            "type": "mcq",
            "prompt": "Que voit-on sur l'écran d'un oscilloscope si on applique une tension alternative sinusoïdale sur la voie verticale SANS activer la base de temps (balayage horizontal désactivé) ?",
            "options": [
              "Un segment vertical rectiligne lumineux",
              "Une belle courbe sinusoïdale figée",
              "Un spot ponctuel immobile au centre",
              "Un cercle parfait"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans balayage horizontal (x = 0), le spot oscille uniquement verticalement entre +Ymax et -Ymax à la fréquence du signal : par persistance rétinienne, on observe un trait vertical lumineux continu."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège : Confusion entre la tension d'accélération U₀ et la tension de déflexion U",
          "stepTheme": "U₀ canon vs U plaques",
          "stepBadge": "U₀ >> U",
          "paragraphText": "Ne confondez jamais la tension U₀ du canon à électrons (qui sert à donner sa vitesse initiale v₀ au faisceau le long de l'axe longitudinal, généralement entre 1000 et 5000 V) et la tension U appliquée entre les plaques de déviation (qui sert à dévier transversalement le faisceau, généralement comprise entre 10 et 200 V).",
          "exercise": {
            "id": "terminale_d_physique_l03_champs_uniformes_p06_q7",
            "type": "mcq",
            "prompt": "Dans la formule de déflexion Y = (ℓ D / 2 d U₀) U, quelle tension figure au dénominateur et quel est son ordre de grandeur typique ?",
            "options": [
              "La tension d'accélération U₀ du canon (de l'ordre du kilovolt, 1000 à 3000 V)",
              "La tension de déflexion U des plaques (de l'ordre de quelques millivolts)",
              "La tension secteur 220 V",
              "Le potentiel de masse 0 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au dénominateur figure U₀, la haute tension d'accélération du canon à électrons (typiquement 1 à quelques kV), qui contrôle l'énergie cinétique initiale des électrons."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p06_q1",
          "type": "mcq",
          "prompt": "Pour accélérer des électrons de charge q = -e de la cathode C vers l'anode A, quel doit être le signe de la tension U₀ = VA - VC ?",
          "options": [
            "U₀ doit être positive (VA > VC afin d'attirer les électrons)",
            "U₀ doit être négative (VA < VC afin de repousser les électrons)",
            "U₀ doit être nulle car les électrons avancent par diffusion",
            "Le signe n'a aucune importance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les électrons étant négatifs, ils sont attirés vers les potentiels plus élevés : on doit donc avoir VA > VC, c'est-à-dire U₀ > 0."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p06_q2",
          "type": "mcq",
          "prompt": "Sous une tension d'accélération U₀ = 1270 V, quelle est la vitesse v₀ acquise par un électron (e = 1,6 * 10⁻¹⁹ C, m = 9,1 * 10⁻³¹ kg) ?",
          "options": [
            "v₀ ≈ 2,11 * 10⁷ m/s",
            "v₀ ≈ 4,46 * 10¹⁴ m/s",
            "v₀ ≈ 1,49 * 10⁶ m/s",
            "v₀ ≈ 3,00 * 10⁸ m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "v₀ = √(2 * 1,6 * 10⁻¹⁹ * 1270 / 9,1 * 10⁻³¹) = √(4,064 * 10⁻¹⁶ / 9,1 * 10⁻³¹) = √(4,466 * 10¹⁴) ≈ 2,11 * 10⁷ m/s (environ 7% de la vitesse de la lumière)."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p06_q3",
          "type": "mcq",
          "prompt": "Un électron et un positron (même masse mais charge opposée +e) puis un ion accélérés sous la même tension U₀ traversent le même condensateur soumis à la même tension U. Que vaut la valeur absolue de leur déflexion |Y| sur l'écran ?",
          "options": [
            "Elle est rigoureusement identique pour toutes ces particules",
            "L'ion subit une déviation 1000 fois plus faible en raison de sa masse",
            "Le positron n'est pas dévié",
            "L'électron dévie deux fois plus car il est plus rapide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans l'expression Y = (ℓ D / 2 d U₀) U, ni la masse ni la charge n'apparaissent : pour une géométrie et des tensions fixées (U₀ et U), la déflexion |Y| est universelle pour toute particule chargée accélérée depuis le repos par U₀."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p06_q4",
          "type": "mcq",
          "prompt": "Un tube cathodique a pour paramètres : ℓ = 8 cm, d = 3 cm, D = 18 cm et U₀ = 1200 V. Quelle est sa sensibilité électrostatique S ?",
          "options": [
            "S = 2,0 * 10⁻⁴ m/V = 0,20 mm/V",
            "S = 5,0 mm/V",
            "S = 0,05 mm/V",
            "S = 1,2 mm/V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "S = (ℓ * D) / (2 * d * U₀) = (0,08 * 0,18) / (2 * 0,03 * 1200) = 0,0144 / 72 = 0,0002 m/V = 0,20 mm/V."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p06_q5",
          "type": "mcq",
          "prompt": "Si on divise par 2 la distance d entre les armatures tout en conservant tous les autres paramètres inchangés, que devient la sensibilité S de l'oscilloscope ?",
          "options": [
            "Elle est doublée (le spot dévie deux fois plus)",
            "Elle est divisée par 2",
            "Elle est multipliée par 4",
            "Elle reste inchangée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme S = (ℓ D) / (2 d U₀), la sensibilité est inversement proportionnelle à d : diviser d par 2 revient à multiplier S par 2."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p06_q6",
          "type": "mcq",
          "prompt": "Que voit-on sur l'écran d'un oscilloscope si on applique une tension alternative sinusoïdale sur la voie verticale SANS activer la base de temps (balayage horizontal désactivé) ?",
          "options": [
            "Un segment vertical rectiligne lumineux",
            "Une belle courbe sinusoïdale figée",
            "Un spot ponctuel immobile au centre",
            "Un cercle parfait"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans balayage horizontal (x = 0), le spot oscille uniquement verticalement entre +Ymax et -Ymax à la fréquence du signal : par persistance rétinienne, on observe un trait vertical lumineux continu."
        },
        {
          "id": "terminale_d_physique_l03_champs_uniformes_p06_q7",
          "type": "mcq",
          "prompt": "Dans la formule de déflexion Y = (ℓ D / 2 d U₀) U, quelle tension figure au dénominateur et quel est son ordre de grandeur typique ?",
          "options": [
            "La tension d'accélération U₀ du canon (de l'ordre du kilovolt, 1000 à 3000 V)",
            "La tension de déflexion U des plaques (de l'ordre de quelques millivolts)",
            "La tension secteur 220 V",
            "Le potentiel de masse 0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au dénominateur figure U₀, la haute tension d'accélération du canon à électrons (typiquement 1 à quelques kV), qui contrôle l'énergie cinétique initiale des électrons."
        }
      ]
    }
  ]
};
