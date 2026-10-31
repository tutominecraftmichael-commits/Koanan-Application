// ============================================================================
// MODULE OFFICIEL : PHYSIQUE 2de C (PHYSIQUE-CHIMIE)
// Ministère de l'Éducation Nationale et de l'Alphabétisation (MENA - Côte d'Ivoire)
//
// THÈME 1 : MÉCANIQUE
// - Leçon 1 : Le mouvement (8h)
// - Leçon 2 : Actions mécaniques ou forces (8h)
// - Leçon 3 : Équilibre d'un solide soumis à deux forces puis à trois forces (8h)
// - Leçon 4 : Principe de l'inertie (6h)
// - Leçon 5 : Équilibre d'un solide mobile autour d'un axe fixe (8h)
// - Leçon 6 : Quantité de mouvement (6h)
//
// THÈME 2 : ÉLECTRICITÉ ET ÉLECTRONIQUE
// - Leçon 7 : Intensité d'un courant continu (6h)
// - Leçon 8 : Tension électrique (6h)
// - Leçon 9 : Étude expérimentale de quelques dipôles passifs (8h)
// - Leçon 10 : Étude expérimentale d'un dipôle actif. Point de fonctionnement (8h)
//
// Règle absolue : Zéro code brut informatique, pédagogie pas-à-pas, 8 questions QCM par mini-leçon (score 8/8 exigé)
// ============================================================================

import type { CurriculumChapter } from '../../lib/curriculum/types';

// ============================================================================
// LEÇON 1 : LE MOUVEMENT
// ============================================================================
export const physique2deCLeMouvementChapter: CurriculumChapter = {
  "id": "seconde_c_physique_ch1_le_mouvement",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 1,
  "officialVolumeHours": 8,
  "title": "Leçon 1 — Le mouvement",
  "summary": "Caractère relatif du mouvement, choix des référentiels (terrestre, géocentrique, Copernic), repères d'espace et de temps, vecteur-position, trajectoires, et étude cinématique des mouvements (MRU, MRUV, MCU).",
  "points": [
    {
      "id": "seconde_c_physique_ch1_p1_relativite_referentiels_reperes",
      "order": 1,
      "title": "Relativité du mouvement, référentiels et repères d'espace-temps",
      "summary": "Comprendre le caractère relatif du mouvement, distinguer les référentiels usuels et savoir repérer un mobile à l'aide de son vecteur-position et de sa trajectoire.",
      "conceptExplanation": "1. Caractère relatif du mouvement :\nUn corps ne peut pas être dit en mouvement ou au repos de manière absolue. Son état dépend exclusivement de l'objet de référence choisi comme observateur. Exemple : un passager assis dans un car en marche est au repos par rapport au car, mais en mouvement par rapport au sol ou à un piéton sur le bas-côté.\n\n2. Référentiel :\nUn référentiel est un solide indéformable par rapport auquel on décrit la position et le mouvement d'un objet mobile. Les trois référentiels classiques de la physique sont :\n- Le référentiel terrestre : lié à la surface de la Terre (ex : le sol, la table de laboratoire). Utilisé pour étudier les mouvements des objets au voisinage du sol terrestre.\n- Le référentiel géocentrique : lié au centre de la Terre et à trois axes dirigés vers trois étoiles fixes lointaines. Utilisé pour étudier le mouvement des satellites artificiels ou de la Lune autour de la Terre.\n- Le référentiel de Copernic (ou héliocentrique) : lié au centre du Soleil et à trois étoiles fixes. Utilisé pour étudier le mouvement des planètes et des sondes interplanétaires.\n\n3. Repérage d'un point mobile :\n- Repère d'espace : repère cartésien orthonormé (O, i, j, k) lié au référentiel. La position du point mobile M à la date t est définie par ses coordonnées (x, y, z).\n- Vecteur-position : OM = x·i + y·j + z·k. Sa norme vaut ||OM|| = √(x² + y² + z²).\n- Vecteur déplacement entre deux dates t₁ et t₂ : M₁M₂ = OM₂ − OM₁.\n- Repère de temps : fixé par une origine des dates (t = 0 s) arbitraire et une unité légale : la seconde (s).\n\n4. Trajectoire d'un point mobile :\nLa trajectoire est la ligne continue constituée de l'ensemble des positions successives occupées par le point mobile au cours du temps. Elle dépend du référentiel choisi. Elle peut être :\n- rectiligne (une portion de droite),\n- circulaire (un arc de cercle ou un cercle complet),\n- curviligne (une courbe quelconque).",
      "formulas": [
        {
          "name": "Vecteur-position cartésien",
          "formula": "OM = x·i + y·j + z·k",
          "note": "x, y, z sont les coordonnées du point mobile à l'instant t."
        },
        {
          "name": "Norme de la position (distance à l'origine)",
          "formula": "||OM|| = √(x² + y² + z²)",
          "note": "Distance en mètres entre l'origine O du repère et le point M."
        },
        {
          "name": "Vecteur déplacement",
          "formula": "M₁M₂ = OM₂ − OM₁",
          "note": "Vecteur joignant la position initiale M₁ à la position finale M₂."
        },
        {
          "name": "Référentiel terrestre",
          "formula": "Lié au sol de la Terre",
          "note": "Référentiel adapté à l'étude des transports et chutes au sol."
        },
        {
          "name": "Référentiel géocentrique",
          "formula": "Origine = Centre de la Terre",
          "note": "Adapté à la trajectoire des satellites et de la Lune."
        }
      ],
      "keyRule": "Le mouvement est relatif au référentiel. La position est donnée par le vecteur-position OM = x·i + y·j. La trajectoire est la courbe reliant les positions successives.",
      "workedExample": {
        "title": "Repérage des coordonnées et expression du vecteur-position",
        "statement": "Dans un repère cartésien orthonormé (O, i, j) lié au sol terrestre, un mobile ponctuel M se trouve à la date t₁ = 2 s au point M₁ de coordonnées x₁ = 3 m et y₁ = 4 m. À la date t₂ = 5 s, il se trouve au point M₂ de coordonnées x₂ = 7 m et y₂ = 7 m. 1) Écris les vecteurs-positions OM₁ et OM₂. 2) Détermine les coordonnées et la norme du vecteur déplacement M₁M₂.",
        "methodSteps": [
          "Exprimer le vecteur-position à la date t₁ : OM₁ = 3·i + 4·j.",
          "Calculer la distance à l'origine à t₁ : ||OM₁|| = √(3² + 4²) = √(9 + 16) = √25 = 5 m.",
          "Exprimer le vecteur-position à la date t₂ : OM₂ = 7·i + 7·j.",
          "Calculer le vecteur déplacement : M₁M₂ = OM₂ − OM₁ = (7 − 3)·i + (7 − 4)·j = 4·i + 3·j.",
          "Calculer la norme du déplacement : ||M₁M₂|| = √(4² + 3²) = √(16 + 9) = √25 = 5 m."
        ],
        "conclusion": "Le vecteur déplacement est M₁M₂ = 4·i + 3·j et le mobile a parcouru une distance en ligne droite de 5 m entre t₁ et t₂."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch1_p1_ex1",
          "type": "mcq",
          "prompt": "Pourquoi affirme-t-on en physique que le mouvement d'un objet est toujours relatif ?",
          "options": [
            "Parce que l'état de mouvement ou de repos d'un corps dépend uniquement du référentiel par rapport auquel on l'observe",
            "Parce que la vitesse d'un objet diminue toujours spontanément avec le temps",
            "Parce qu'il est impossible de mesurer la position d'un objet avec précision",
            "Parce que tous les objets de l'univers se déplacent à la même vitesse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un corps peut être simultanément au repos par rapport à un observateur (ex : un passager assis dans un bus) et en mouvement par rapport à un autre (un piéton sur le trottoir). Le mouvement dépend du référentiel."
        },
        {
          "id": "seconde_c_physique_ch1_p1_ex2",
          "type": "mcq",
          "prompt": "Quel référentiel est le plus approprié pour étudier le mouvement d'un satellite artificiel de télécommunication en orbite autour de la Terre ?",
          "options": [
            "Le référentiel géocentrique (lié au centre de la Terre et orienté vers 3 étoiles lointaines)",
            "Le référentiel terrestre (lié à la surface du sol)",
            "Le référentiel de Copernic (lié au centre du Soleil)",
            "Le référentiel de la Lune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour étudier les objets gravitant autour de la Terre (satellites, Lune), on utilise le référentiel géocentrique, dont l'origine est le centre de la Terre."
        },
        {
          "id": "seconde_c_physique_ch1_p1_ex3",
          "type": "mcq",
          "prompt": "Quel référentiel est utilisé pour décrire le mouvement des planètes (Mars, Jupiter, Terre) dans le système solaire ?",
          "options": [
            "Le référentiel de Copernic ou héliocentrique",
            "Le référentiel terrestre",
            "Le référentiel géocentrique",
            "Le référentiel lié à la Station Spatiale Internationale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le référentiel de Copernic a pour centre le Soleil et ses axes pointent vers 3 étoiles fixes lointaines : c'est le référentiel d'étude des planètes."
        },
        {
          "id": "seconde_c_physique_ch1_p1_ex4",
          "type": "mcq",
          "prompt": "Dans un repère (O, i, j), un point mobile M a pour coordonnées x = 6 m et y = 8 m. Quelle est l'expression de son vecteur-position OM et sa distance à l'origine ?",
          "options": [
            "OM = 6·i + 8·j et ||OM|| = 10 m",
            "OM = 8·i + 6·j et ||OM|| = 14 m",
            "OM = 6·i − 8·j et ||OM|| = 48 m",
            "OM = 14·i + 14·j et ||OM|| = 2 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "OM = x·i + y·j = 6·i + 8·j. La norme est ||OM|| = √(6² + 8²) = √(36 + 64) = √100 = 10 m."
        },
        {
          "id": "seconde_c_physique_ch1_p1_ex5",
          "type": "mcq",
          "prompt": "Comment définit-on la trajectoire d'un point mobile en cinématique ?",
          "options": [
            "L'ensemble des positions successivement occupées par le point mobile au cours de son mouvement",
            "La droite reliant le départ à l'arrivée uniquement",
            "La durée totale mise par le corps pour s'arrêter",
            "La valeur de la vitesse indiquée sur le compteur kilométrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La trajectoire est la courbe géométrique formée par l'ensemble continu des positions occupées par le mobile dans le référentiel choisi."
        },
        {
          "id": "seconde_c_physique_ch1_p1_ex6",
          "type": "mcq",
          "prompt": "La trajectoire d'une valve de roue de bicyclette en mouvement est :",
          "options": [
            "Circulaire par rapport au cadre du vélo, mais cycloïdale (curviligne) par rapport à la route",
            "Toujours rectiligne quel que soit le référentiel",
            "Toujours circulaire par rapport à la route",
            "Immobile par rapport au sol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La nature de la trajectoire dépend du référentiel : par rapport à l'axe de la roue elle est un cercle, mais par rapport au sol fixe elle décrit une cycloïde."
        },
        {
          "id": "seconde_c_physique_ch1_p1_ex7",
          "type": "mcq",
          "prompt": "À t₁ = 1 s, OM₁ = 2·i + 1·j. À t₂ = 4 s, OM₂ = 5·i + 5·j. Quelles sont les coordonnées du vecteur déplacement M₁M₂ ?",
          "options": [
            "(3 ; 4) car M₁M₂ = (5 − 2)·i + (5 − 1)·j = 3·i + 4·j",
            "(7 ; 6) par addition des coordonnées",
            "(10 ; 5) par multiplication",
            "(2,5 ; 2,5) par moyenne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "M₁M₂ = OM₂ − OM₁ = (x₂ − x₁)·i + (y₂ − y₁)·j = (5 − 2)·i + (5 − 1)·j = 3·i + 4·j."
        },
        {
          "id": "seconde_c_physique_ch1_p1_ex8",
          "type": "mcq",
          "prompt": "Quelle est l'unité légale de temps dans le Système International (SI) pour repérer une date ?",
          "options": [
            "La seconde (s)",
            "La minute (min)",
            "L'heure (h)",
            "Le jour (j)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'unité officielle et légale de temps du Système International est la seconde, notée s."
        }
      ]
    },
    {
      "id": "seconde_c_physique_ch1_p2_vitesses_vecteur_vitesse_mouvements",
      "order": 2,
      "title": "Vitesse moyenne, vitesse instantanée et types de mouvements",
      "summary": "Calculer les vitesses moyenne et instantanée sur un enregistrement, tracer le vecteur-vitesse et caractériser les mouvements rectilignes et circulaires.",
      "conceptExplanation": "1. Vitesse moyenne :\nLa vitesse moyenne V_m d'un mobile est le quotient de la distance totale d parcourue par la durée Δt mise pour la parcourir :\nV_m = d / Δt (avec d en mètres m, Δt en secondes s, V_m en m/s).\nConversion d'unités : 1 m/s = 3,6 km/h (pour passer de km/h en m/s, on divise par 3,6).\n\n2. Vitesse instantanée v(t) :\nLa vitesse instantanée est la vitesse du mobile à un instant précis t. C'est la valeur indiquée par le tachymètre (compteur) d'un véhicule.\nSur un enregistrement chronophotographique où les positions M₀, M₁, M₂... sont relevées à intervalles de temps réguliers τ (tau) :\nOn évalue la vitesse instantanée au point M_i par la vitesse moyenne entre les deux positions encadrantes M_{i-1} et M_{i+1} :\nv(t_i) = M_{i-1}M_{i+1} / (t_{i+1} − t_{i-1}) = M_{i-1}M_{i+1} / (2τ).\n\n3. Vecteur-vitesse v(t) :\nÀ chaque instant, on associe un vecteur-vitesse v(t) défini par :\n- Origine (point d'application) : la position M_i du mobile à cet instant.\n- Direction : la tangente à la trajectoire au point M_i (la droite M_{i-1}M_{i+1}).\n- Sens : celui du mouvement.\n- Valeur (norme) : v(t_i) en m/s, représentée par une flèche selon une échelle donnée.\n\n4. Étude des différents types de mouvements :\n- Mouvement Rectiligne Uniforme (MRU) : trajectoire rectiligne, points alignés et équidistants. Les vitesses instantanées sont constantes : v₁ = v₂ = v₃ = constante. Le vecteur-vitesse v est rigoureusement constant (conserve sa direction, son sens et sa norme).\n- Mouvement Rectiligne Uniformément Varié (MRUV) : trajectoire rectiligne, points alignés mais la distance entre points successifs augmente régulièrement (mouvement accéléré) ou diminue régulièrement (décéléré). La vitesse varie de manière régulière (v_{i+1} − v_i = constante). Le vecteur-vitesse conserve sa direction et son sens, mais sa norme varie.\n- Mouvement Circulaire Uniforme (MCU) : trajectoire circulaire, points équidistants sur le cercle. La valeur de la vitesse v est constante, mais la direction du vecteur-vitesse change à chaque instant (tangente au cercle). Par conséquent, le vecteur-vitesse v n'est PAS constant !",
      "formulas": [
        {
          "name": "Vitesse moyenne",
          "formula": "V_m = d / Δt",
          "note": "d en mètres, Δt en secondes, V_m en m/s."
        },
        {
          "name": "Conversion km/h en m/s",
          "formula": "1 m/s = 3,6 km/h ⟺ v(m/s) = v(km/h) / 3,6",
          "note": "Relation usuelle pour les calculs de transport."
        },
        {
          "name": "Vitesse instantanée sur enregistrement",
          "formula": "v(t_i) = M_{i-1}M_{i+1} / (2τ)",
          "note": "M_{i-1}M_{i+1} est la distance réelle séparant les positions encadrantes."
        },
        {
          "name": "Mouvement Rectiligne Uniforme (MRU)",
          "formula": "v = constante ⟺ vecteur v = constant",
          "note": "Direction, sens et norme restent rigoureusement invariants."
        },
        {
          "name": "Mouvement Circulaire Uniforme (MCU)",
          "formula": "v = constante mais vecteur v non constant",
          "note": "La norme est fixe mais la direction tourne continuellement."
        }
      ],
      "keyRule": "V_m = d / Δt. Sur enregistrement : v(t_i) = M_{i-1}M_{i+1} / (2τ). En MRU, le vecteur-vitesse est constant. En MCU, seule la norme est constante (la direction change).",
      "workedExample": {
        "title": "Calcul de vitesses instantanées et caractérisation du mouvement sur table à coussin d'air",
        "statement": "Sur une table à coussin d'air, on enregistre le mouvement d'un palet à intervalles de temps réguliers τ = 40 ms. Les points A₀, A₁, A₂, A₃, A₄, A₅ sont alignés en ligne droite. On mesure les distances réelles : A₀A₂ = 4,8 cm et A₂A₄ = 4,8 cm. 1) Calcule les vitesses instantanées v₁ et v₃ aux dates t₁ et t₃. 2) Compare ces vitesses et qualifie la nature du mouvement du palet.",
        "methodSteps": [
          "Convertir les données dans le système international : τ = 40 ms = 40 × 10⁻³ s = 0,040 s, d'où 2τ = 0,080 s. Distance A₀A₂ = 4,8 cm = 4,8 × 10⁻² m = 0,048 m ; A₂A₄ = 0,048 m.",
          "Calculer la vitesse instantanée v₁ au point A₁ : v₁ = A₀A₂ / (2τ) = 0,048 m / 0,080 s = 0,60 m/s.",
          "Calculer la vitesse instantanée v₃ au point A₃ : v₃ = A₂A₄ / (2τ) = 0,048 m / 0,080 s = 0,60 m/s.",
          "Analyser les résultats : les points sont alignés (trajectoire rectiligne) et les vitesses instantanées sont égales (v₁ = v₃ = 0,60 m/s).",
          "Conclure sur la nature du mouvement : la trajectoire étant une droite et la vitesse étant constante, le mouvement est rectiligne uniforme (MRU)."
        ],
        "conclusion": "Le mouvement du palet est un mouvement rectiligne uniforme (MRU) avec une vitesse constante v = 0,60 m/s (soit 2,16 km/h)."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch1_p2_ex1",
          "type": "mcq",
          "prompt": "Un automobiliste ivoirien parcourt le trajet Yamoussoukro - Bouaflé (distance d = 60 km) en une durée Δt = 50 minutes. Quelle est sa vitesse moyenne en m/s et en km/h ?",
          "options": [
            "V_m = 72 km/h soit 20 m/s",
            "V_m = 120 km/h soit 33,3 m/s",
            "V_m = 50 km/h soit 13,8 m/s",
            "V_m = 60 km/h soit 16,6 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Δt = 50 min = 50/60 h = 5/6 h. V_m = 60 / (5/6) = 72 km/h. En m/s : 72 / 3,6 = 20 m/s."
        },
        {
          "id": "seconde_c_physique_ch1_p2_ex2",
          "type": "mcq",
          "prompt": "Sur un enregistrement de mouvement avec un intervalle de temps régulier τ = 20 ms, la distance mesurée entre les points M₁ et M₃ est M₁M₃ = 3,8 cm. Quelle est la vitesse instantanée v₂ au point M₂ ?",
          "options": [
            "0,95 m/s",
            "1,90 m/s",
            "0,095 m/s",
            "9,5 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "v₂ = M₁M₃ / (2τ) = 3,8 × 10⁻² m / (2 × 20 × 10⁻³ s) = 0,038 / 0,040 = 0,95 m/s."
        },
        {
          "id": "seconde_c_physique_ch1_p2_ex3",
          "type": "mcq",
          "prompt": "Quelles sont les quatre caractéristiques d'un vecteur-vitesse v(t) en un point M d'une trajectoire ?",
          "options": [
            "Point d'application M, direction tangente à la trajectoire en M, sens du mouvement, valeur ||v||",
            "Point d'application l'origine O, direction verticale, sens vers le bas, masse du mobile",
            "Point d'application le centre de la Terre, direction quelconque, sens positif, accélération",
            "Point d'application le point d'arrivée, direction perpendiculaire, sens opposé, force motrice"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le vecteur-vitesse s'applique au point mobile considéré, est tangent à la trajectoire, orienté dans le sens du déplacement, et sa longueur est proportionnelle à la valeur scalaire de la vitesse."
        },
        {
          "id": "seconde_c_physique_ch1_p2_ex4",
          "type": "mcq",
          "prompt": "Dans un mouvement circulaire uniforme (MCU), le vecteur-vitesse est-il constant ?",
          "options": [
            "Non, car bien que sa valeur reste constante, sa direction change à chaque instant (tangente en rotation)",
            "Oui, car la trajectoire est régulière",
            "Oui, car la vitesse est constante sur le compteur",
            "Non, car sa valeur diminue à chaque tour"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un vecteur n'est constant que si sa direction, son sens ET sa norme restent tous les trois invariants. En MCU, la direction tourne continuellement, donc le vecteur-vitesse n'est pas constant."
        },
        {
          "id": "seconde_c_physique_ch1_p2_ex5",
          "type": "mcq",
          "prompt": "Un mobile décrit une droite. Aux dates t₂, t₄ et t₆ séparées par un même intervalle de temps, ses vitesses valent v₂ = 0,5 m/s, v₄ = 0,8 m/s et v₆ = 1,1 m/s. Quelle est la nature de ce mouvement ?",
          "options": [
            "Mouvement rectiligne uniformément varié (accéléré)",
            "Mouvement rectiligne uniforme",
            "Mouvement circulaire uniforme",
            "Mouvement curviligne ralenti"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La trajectoire est une droite et la vitesse augmente régulièrement d'une même quantité : v₄ − v₂ = v₆ − v₄ = 0,3 m/s. C'est un mouvement rectiligne uniformément varié."
        },
        {
          "id": "seconde_c_physique_ch1_p2_ex6",
          "type": "mcq",
          "prompt": "Si sur un enregistrement, les points successifs A₀, A₁, A₂, A₃... sont alignés et que les distances A₀A₁ = A₁A₂ = A₂A₃ sont rigoureusement égales, que peut-on déduire ?",
          "options": [
            "Le mouvement est rectiligne et uniforme (MRU), avec un vecteur-vitesse constant",
            "Le mouvement est uniformément retardé",
            "Le mobile est au repos absolu",
            "Le mobile décrit un cercle complet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Des points alignés et équidistants pour des durées égales τ signifient que la distance parcourue par unité de temps est constante sur une droite : MRU."
        },
        {
          "id": "seconde_c_physique_ch1_p2_ex7",
          "type": "mcq",
          "prompt": "Un guépard sprinte à une vitesse de 108 km/h. Quelle distance franchit-il en exactement 5 secondes ?",
          "options": [
            "150 mètres",
            "540 mètres",
            "30 mètres",
            "108 mètres"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Convertir en m/s : v = 108 / 3,6 = 30 m/s. En 5 secondes : d = v × Δt = 30 × 5 = 150 m."
        },
        {
          "id": "seconde_c_physique_ch1_p2_ex8",
          "type": "mcq",
          "prompt": "Pour représenter un vecteur-vitesse de valeur v = 0,75 m/s avec une échelle graphique où 1 cm correspond à 0,25 m/s, quelle doit être la longueur de la flèche ?",
          "options": [
            "3,0 cm",
            "0,75 cm",
            "1,5 cm",
            "4,0 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Longueur = Valeur / Échelle = 0,75 / 0,25 = 3,0 cm."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 2 : ACTIONS MÉCANIQUES OU FORCES
// ============================================================================
export const physique2deCActionsMecaniquesForcesChapter: CurriculumChapter = {
  "id": "seconde_c_physique_ch2_actions_mecaniques_forces",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 2,
  "officialVolumeHours": 8,
  "title": "Leçon 2 — Actions mécaniques ou forces",
  "summary": "Manifestations et effets d'une action mécanique, vecteur force, actions de contact localisées et réparties, tension d'un ressort (loi de Hooke), poids d'un corps, principe des actions réciproques (3e loi de Newton) et poussée d'Archimède.",
  "points": [
    {
      "id": "seconde_c_physique_ch2_p1_effets_force_ressort",
      "order": 1,
      "title": "Effets d'une force, caractéristiques et tension d'un ressort",
      "summary": "Identifier les manifestations d'une force, définir ses quatre caractéristiques vectorielles et appliquer la loi d'allongement d'un ressort élastique.",
      "conceptExplanation": "1. Manifestations et effets d'une action mécanique :\nUne action mécanique exercée par un corps auteur sur un corps receveur produit deux grands types d'effets :\n- Effet dynamique : mettre un corps en mouvement ou modifier sa vitesse ou sa trajectoire (déviation).\n- Effet statique : déformer un corps ou le maintenir en équilibre.\n\n2. Modélisation par un vecteur force F :\nL'action mécanique est modélisée par une grandeur vectorielle appelée force, notée F, caractérisée par :\n- Un point d'application : le point précis où la force est appliquée au solide.\n- Une direction (droite d'action) : la droite suivant laquelle s'exerce l'action.\n- Un sens : le sens d'action du mouvement que la force tend à produire.\n- Une intensité (valeur ou norme) : grandeur scalaire positive exprimée en newtons (N), mesurée à l'aide d'un dynamomètre.\n\n3. Action mécanique de contact localisée : la tension d'un ressort :\nUne force de contact est localisée lorsque la surface de contact entre l'auteur et le receveur est assimilable à un point (ex : fil tendu, pointe de compas, crochet d'un ressort).\nPour un ressort hélicoïdal à spires non jointives de longueur à vide l₀ :\n- Lorsqu'on lui suspend une charge, sa longueur devient l. Son allongement est x = l − l₀ (en mètres m).\n- La tension T exercée par le ressort sur le solide s'oppose à l'étirement (dirigée le long de l'axe, du solide vers le ressort).\n- Loi d'allongement (loi de Hooke) : la tension T est proportionnelle à l'allongement x :\nT = k × x = k × (l − l₀)  (avec T en N, x en m et k en N/m).\nLa constante de proportionnalité k est appelée constante de raideur du ressort. Plus le ressort est rigide, plus k est grand.",
      "formulas": [
        {
          "name": "Allongement d'un ressort",
          "formula": "x = l − l₀",
          "note": "Différence entre la longueur sous charge l et la longueur à vide l₀ (en m)."
        },
        {
          "name": "Tension d'un ressort (Loi de Hooke)",
          "formula": "T = k × x = k × |l − l₀|",
          "note": "T en newtons (N), k en N/m et x en mètres (m)."
        },
        {
          "name": "Constante de raideur",
          "formula": "k = T / x = ΔT / Δx",
          "note": "Pente de la droite d'étalonnage T = f(x)."
        },
        {
          "name": "Longueur sous charge",
          "formula": "l = l₀ + (T / k)",
          "note": "Permet de prédire l'étirement du ressort sous une force donnée."
        }
      ],
      "keyRule": "Une force est caractérisée par son point d'application, sa direction, son sens et son intensité en newtons (N). La tension d'un ressort vaut T = k·x, où x = l − l₀ est l'allongement en mètres.",
      "workedExample": {
        "title": "Calcul de la raideur et allongement d'un ressort",
        "statement": "Un ressort de longueur à vide l₀ = 15 cm a une constante de raideur k = 40 N/m. On lui suspend une masse m = 200 g à l'équilibre. On prend g = 10 N/kg. 1) Détermine la valeur de la tension T du ressort. 2) Calcule l'allongement x du ressort en cm. 3) Déduis-en la longueur totale l du ressort sous cette charge.",
        "methodSteps": [
          "Calculer le poids de la masse suspendue : P = m × g = 0,200 kg × 10 N/kg = 2,0 N.",
          "À l'équilibre, le solide est soumis à son poids et à la tension du ressort : T = P = 2,0 N.",
          "Appliquer la loi d'allongement T = k × x pour déterminer x : x = T / k = 2,0 N / 40 N/m = 0,05 m = 5,0 cm.",
          "Calculer la longueur finale sous charge : l = l₀ + x = 15 cm + 5,0 cm = 20,0 cm."
        ],
        "conclusion": "La tension du ressort vaut T = 2,0 N, l'allongement est de 5,0 cm et la longueur totale du ressort sous charge est de 20,0 cm."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch2_p1_ex1",
          "type": "mcq",
          "prompt": "Lequel des effets suivants illustre un effet statique d'une force ?",
          "options": [
            "L'étirement et l'allongement d'un ressort sous l'effet d'une masse",
            "L'accélération d'un véhicule au feu vert",
            "La déviation de la trajectoire d'un ballon par un coup de tête",
            "La chute libre d'une bille d'acier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un effet statique correspond à une déformation du corps ou à son maintien en équilibre. L'accélération et la déviation sont des effets dynamiques."
        },
        {
          "id": "seconde_c_physique_ch2_p1_ex2",
          "type": "mcq",
          "prompt": "Quel instrument de laboratoire permet de mesurer directement l'intensité d'une force en newtons (N) ?",
          "options": [
            "Le dynamomètre",
            "Le tachymètre",
            "La balance à plateaux",
            "Le manomètre à colonne d'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le dynamomètre est l'instrument de mesure d'une force. Il utilise la déformation étalonnée d'un ressort élastique."
        },
        {
          "id": "seconde_c_physique_ch2_p1_ex3",
          "type": "mcq",
          "prompt": "Un ressort de constante de raideur k = 50 N/m subit un allongement x = 6 cm. Quelle est l'intensité de sa tension T ?",
          "options": [
            "3,0 N",
            "300 N",
            "0,83 N",
            "30 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Convertir x en mètres : x = 6 cm = 0,06 m. T = k × x = 50 N/m × 0,06 m = 3,0 N."
        },
        {
          "id": "seconde_c_physique_ch2_p1_ex4",
          "type": "mcq",
          "prompt": "Sous l'action d'une force de traction de 12 N, un ressort de longueur à vide l₀ = 10 cm s'allonge jusqu'à une longueur l = 16 cm. Que vaut sa constante de raideur k ?",
          "options": [
            "200 N/m",
            "75 N/m",
            "2 N/m",
            "120 N/m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Allongement x = l − l₀ = 16 − 10 = 6 cm = 0,06 m. k = T / x = 12 / 0,06 = 200 N/m."
        },
        {
          "id": "seconde_c_physique_ch2_p1_ex5",
          "type": "mcq",
          "prompt": "Pourquoi la force exercée par un fil inextensible tendu sur un solide est-elle qualifiée de force localisée ?",
          "options": [
            "Parce que son action s'exerce sur une surface de contact minuscule assimilable à un point unique (le point d'attache)",
            "Parce qu'elle s'exerce sur l'ensemble de la masse du solide",
            "Parce qu'elle est toujours orientée vers le centre de la Terre",
            "Parce que le fil ne peut jamais casser"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une action de contact est dite localisée si sa zone de contact peut être réduite à un point précis d'application."
        },
        {
          "id": "seconde_c_physique_ch2_p1_ex6",
          "type": "mcq",
          "prompt": "Deux ressorts R₁ et R₂ ont pour raideurs respectives k₁ = 20 N/m et k₂ = 100 N/m. Si on leur applique la même force de traction T = 5 N, quel ressort s'allonge le plus ?",
          "options": [
            "Le ressort R₁ (car sa raideur est plus faible : x₁ = 25 cm contre x₂ = 5 cm)",
            "Le ressort R₂ car il est plus raide",
            "Ils s'allongent exactement de la même longueur car la force est identique",
            "Aucun ne s'allonge car 5 N est insuffisant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "x = T / k. À force égale, l'allongement est inversement proportionnel à la raideur. x₁ = 5/20 = 0,25 m = 25 cm, tandis que x₂ = 5/100 = 0,05 m = 5 cm."
        },
        {
          "id": "seconde_c_physique_ch2_p1_ex7",
          "type": "mcq",
          "prompt": "Quelle est la direction et le sens de la tension T exercée par un ressort étiré sur un solide suspendu ?",
          "options": [
            "Direction l'axe du ressort, sens orienté du solide vers le ressort (force de rappel qui tire)",
            "Direction horizontale, sens vers la droite",
            "Direction quelconque, sens vers le bas",
            "Direction perpendiculaire à l'axe du ressort"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La tension d'un ressort étiré est une force de rappel qui cherche à ramener le ressort à sa longueur à vide : elle est le long de son axe et dirigée du solide vers le ressort."
        },
        {
          "id": "seconde_c_physique_ch2_p1_ex8",
          "type": "mcq",
          "prompt": "Un ressort étalonné a une longueur à vide l₀ = 12 cm et une raideur k = 25 N/m. On veut qu'il atteigne une longueur de 18 cm. Quelle force F doit-on exercer ?",
          "options": [
            "1,5 N",
            "15 N",
            "4,5 N",
            "0,15 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "x = 18 − 12 = 6 cm = 0,06 m. F = k × x = 25 × 0,06 = 1,5 N."
        }
      ]
    },
    {
      "id": "seconde_c_physique_ch2_p2_actions_reparties_archimede_actions_reciproques",
      "order": 2,
      "title": "Actions réparties, poussée d'Archimède et principe des actions réciproques",
      "summary": "Distinguer forces réparties en volume et surface, calculer la poussée d'Archimède et maîtriser le principe d'action-réaction (3e loi de Newton).",
      "conceptExplanation": "1. Actions mécaniques réparties :\n- En volume : s'exercent sur chaque élément de matière du corps. L'exemple fondamental est le poids P, qui est l'attraction gravitationnelle exercée par la Terre sur toute la masse du corps. Il est modélisé par une force unique appliquée au centre de gravité G du solide, de direction verticale, dirigée vers le bas, d'intensité P = m × g (avec m en kg et g en N/kg).\n- En surface : s'exercent sur toute une surface de contact macroscopique. Exemples : la réaction R d'une table sur un objet posé (décomposable en réaction normale R_N et force de frottement f), ou les forces pressantes exercées par un fluide sur une paroi.\n\n2. La poussée d'Archimède P_A (ou F_A) :\nTout corps immergé dans un fluide au repos subit de la part de ce fluide une force de poussée verticale, dirigée du bas vers le haut, égale au poids du volume de fluide déplacé :\nP_A = m_fluide × g = ρ_fluide × V_immergé × g (avec ρ en kg/m³, V en m³, g en N/kg et P_A en N).\n- Poids apparent : lorsqu'un solide est immergé, son poids mesuré au dynamomètre est son poids apparent P' tel que : P' = P − P_A, d'où P_A = P − P'.\n\n3. Principe des actions réciproques (Troisième loi de Newton) :\nLorsque deux corps A et B interagissent (que ce soit par contact ou à distance) :\nLe corps A exerce sur le corps B une force F_{A/B}, et simultanément, le corps B exerce sur le corps A une force F_{B/A} telle que :\nF_{A/B} = −F_{B/A}.\nCes deux forces ont obligatoirement :\n- la même droite d'action (même direction),\n- la même intensité (||F_{A/B}|| = ||F_{B/A}||),\n- des sens opposés,\n- mais des points d'application différents (l'une s'applique sur B, l'autre sur A ! Elles ne s'annulent donc pas sur un même système).\nApplication fondamentale : la propulsion par réaction (fusée propulsant les gaz vers l'arrière, les gaz propulsant la fusée vers l'avant ; nageur poussant l'eau en arrière).",
      "formulas": [
        {
          "name": "Intensité du poids",
          "formula": "P = m × g",
          "note": "m en kg, g en N/kg (environ 9,8 ou 10 N/kg en Côte d'Ivoire)."
        },
        {
          "name": "Poussée d'Archimède",
          "formula": "P_A = ρ_fluide × V_immergé × g",
          "note": "ρ en kg/m³, V en m³, P_A en newtons."
        },
        {
          "name": "Poids apparent",
          "formula": "P' = P − P_A ⟺ P_A = P − P'",
          "note": "P est le poids réel dans le vide/air, P' est la tension du fil mesurée dans le liquide."
        },
        {
          "name": "Principe des actions réciproques (3e loi de Newton)",
          "formula": "F_{A/B} = −F_{B/A}",
          "note": "Même droite d'action, même valeur, sens opposés, corps receveurs différents."
        },
        {
          "name": "Résultante de deux forces perpendiculaires",
          "formula": "F = √(F₁² + F₂²)",
          "note": "Norme de la résultante vectorielle par le théorème de Pythagore."
        }
      ],
      "keyRule": "P = m·g (vers le bas). Poussée d'Archimède : P_A = ρ·V·g (vers le haut), avec P_A = P − P'. Troisième loi de Newton : F_{A/B} = −F_{B/A} (même valeur, sens opposés).",
      "workedExample": {
        "title": "Calcul de la poussée d'Archimède, volume et masse volumique d'un solide",
        "statement": "Un solide métallique a un poids réel dans l'air P = 1,1 N. On le plonge entièrement dans une éprouvette contenant de l'alcool de masse volumique ρ = 800 kg/m³. Le dynamomètre qui le soutient indique alors une tension (poids apparent) P' = 0,7 N. On donne g = 10 N/kg. 1) Calcule la valeur de la poussée d'Archimède P_A subie par le solide. 2) Détermine le volume V du solide en cm³. 3) Calcule la masse m et la masse volumique ρ_solide du solide.",
        "methodSteps": [
          "Calculer la poussée d'Archimède à partir de la perte de poids apparente : P_A = P − P' = 1,1 N − 0,7 N = 0,4 N.",
          "Exprimer la poussée d'Archimède en fonction du volume : P_A = ρ × V × g ⟹ V = P_A / (ρ × g).",
          "Calculer le volume immergé V : V = 0,4 N / (800 kg/m³ × 10 N/kg) = 0,4 / 8000 = 5,0 × 10⁻⁵ m³ = 50 cm³.",
          "Calculer la masse du solide : m = P / g = 1,1 N / 10 N/kg = 0,11 kg = 110 g.",
          "Calculer la masse volumique du solide : ρ_solide = m / V = 0,11 kg / (5,0 × 10⁻⁵ m³) = 2200 kg/m³ = 2,2 g/cm³."
        ],
        "conclusion": "La poussée d'Archimède est P_A = 0,4 N, le volume de l'objet est de 50 cm³ et sa masse volumique est de 2,2 g/cm³."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch2_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle est l'expression correcte du principe des actions réciproques (3e loi de Newton) entre deux corps A et B ?",
          "options": [
            "F_{A/B} = −F_{B/A} (les deux forces ont même droite d'action, même valeur et sens opposés)",
            "F_{A/B} = F_{B/A} (les deux forces ont même sens)",
            "F_{A/B} + F_{B/A} = 2 F",
            "F_{A/B} = 0 si les corps sont au repos"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La troisième loi de Newton énonce que toute action d'un corps A sur B entraîne une réaction instantanée égale en intensité et opposée en sens de B sur A : F_{A/B} = −F_{B/A}."
        },
        {
          "id": "seconde_c_physique_ch2_p2_ex2",
          "type": "mcq",
          "prompt": "Pourquoi la fusée spatiale décolle-t-elle et monte-t-elle dans le vide de l'espace où il n'y a pas d'air ?",
          "options": [
            "Parce que la fusée éjecte des gaz chauds vers le bas (action), et en retour les gaz exercent sur la fusée une force égale propulsée vers le haut (réaction)",
            "Parce qu'elle prend appui sur les molécules d'air environnantes",
            "Parce que la gravité terrestre disparaît immédiatement au décollage",
            "Parce que le feu aspire la fusée vers le ciel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La propulsion spatiale fonctionne selon le principe d'action-réaction : l'éjection à haute vitesse de gaz de combustion vers l'arrière propulse la fusée vers l'avant sans besoin d'aucun support extérieur."
        },
        {
          "id": "seconde_c_physique_ch2_p2_ex3",
          "type": "mcq",
          "prompt": "Un objet pèse 2,5 N dans l'air. Immergé dans l'eau, un dynamomètre indique un poids apparent P' = 1,5 N. Quelle est la valeur de la poussée d'Archimède subie ?",
          "options": [
            "1,0 N",
            "4,0 N",
            "2,5 N",
            "0,6 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P_A = P − P' = 2,5 − 1,5 = 1,0 N."
        },
        {
          "id": "seconde_c_physique_ch2_p2_ex4",
          "type": "mcq",
          "prompt": "Quelle est la masse volumique de l'eau pure dans les unités usuelles du système international (SI) ?",
          "options": [
            "1000 kg/m³ (soit 1,0 g/cm³)",
            "100 kg/m³",
            "10 000 kg/m³",
            "1,0 kg/m³"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un litre d'eau pure a une masse de 1 kg, ce qui correspond à 1000 kg/m³ ou 1 g/cm³."
        },
        {
          "id": "seconde_c_physique_ch2_p2_ex5",
          "type": "mcq",
          "prompt": "En un point d'un solide sont appliquées deux forces perpendiculaires : F₁ = 3 N (verticale) et F₂ = 4 N (horizontale). Quelle est l'intensité de la résultante F = F₁ + F₂ ?",
          "options": [
            "5 N",
            "7 N",
            "1 N",
            "12 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme les deux forces sont perpendiculaires, F = √(F₁² + F₂²) = √(3² + 4²) = √(9 + 16) = √25 = 5 N."
        },
        {
          "id": "seconde_c_physique_ch2_p2_ex6",
          "type": "mcq",
          "prompt": "Parmi les forces suivantes, laquelle est une force à distance et répartie dans le volume du corps ?",
          "options": [
            "Le poids P exercé par la Terre",
            "La réaction normale de la table",
            "La tension d'un fil inextensible",
            "La force de frottement de l'air sur une voile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le poids est l'attraction gravitationnelle exercée à distance par la Terre sur l'ensemble des atomes qui composent le volume du corps."
        },
        {
          "id": "seconde_c_physique_ch2_p2_ex7",
          "type": "mcq",
          "prompt": "Un homme d'une masse de 70 kg se tient debout immobile sur le sol (g = 10 N/kg). Quelle force le sol exerce-t-il sur ses pieds en vertu du principe des actions réciproques ?",
          "options": [
            "Une force verticale vers le haut d'intensité 700 N",
            "Une force verticale vers le bas d'intensité 700 N",
            "Une force nulle car l'homme est immobile",
            "Une force de 70 N vers le haut"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'homme exerce sur le sol une force de contact vers le bas égale à son poids P = 70 × 10 = 700 N. En retour, le sol exerce sur l'homme une force verticale de même intensité 700 N vers le haut."
        },
        {
          "id": "seconde_c_physique_ch2_p2_ex8",
          "type": "mcq",
          "prompt": "Si le poids P d'un corps solide est strictement inférieur à la poussée d'Archimède maximale P_A qu'il peut subir lorsqu'il est immergé, que fait ce corps relâché au fond de l'eau ?",
          "options": [
            "Il remonte à la surface et flotte",
            "Il coule immédiatement au fond du récipient",
            "Il reste indéfiniment suspendu au milieu du liquide",
            "Il se vaporise sous forme de bulles de gaz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque la poussée d'Archimède est supérieure au poids (P < P_A, soit ρ_solide < ρ_liquide), la résultante verticale est dirigée vers le haut : le corps remonte et flotte à la surface."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 3 : ÉQUILIBRE D'UN SOLIDE SOUMIS À DEUX FORCES PUIS À TROIS FORCES
// ============================================================================
export const physique2deCEquilibreDeuxTroisForcesChapter: CurriculumChapter = {
  "id": "seconde_c_physique_ch3_equilibre_solide_deux_trois_forces",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 3,
  "officialVolumeHours": 8,
  "title": "Leçon 3 — Équilibre d'un solide soumis à deux forces puis à trois forces",
  "summary": "Conditions nécessaires d'équilibre sous deux forces, étude de cas (plan horizontal, fil, plan incliné avec frottement), types d'équilibre (stable, instable, indifférent) et équilibre sous trois forces coplanaires et concourantes (résolutions graphique et analytique).",
  "points": [
    {
      "id": "seconde_c_physique_ch3_p1_equilibre_deux_forces_types",
      "order": 1,
      "title": "Conditions d'équilibre sous deux forces et types d'équilibre",
      "summary": "Maîtriser les conditions d'équilibre d'un solide soumis à deux forces, décomposer la réaction sur un plan rugueux et distinguer les équilibres stable, instable et indifférent.",
      "conceptExplanation": "1. Conditions d'équilibre d'un solide soumis à deux forces :\nLorsqu'un solide soumis à l'action de deux forces F_A et F_B est en équilibre statique dans un référentiel terrestre, nécessairement :\n- Les deux forces ont la même droite d'action (même support rectiligne).\n- La somme vectorielle des deux forces est nulle : F_A + F_B = 0 ⟹ F_A = −F_B.\nPar conséquent, elles ont la même intensité (||F_A|| = ||F_B||) et des sens opposés.\n\n2. Étude de cas classiques du programme :\n- Solide posé sur un plan horizontal : le solide est soumis à son poids P (vertical vers le bas) et à la réaction R du support (verticale vers le haut). À l'équilibre : P + R = 0 ⟹ P = R = m·g.\n- Solide suspendu à un fil inextensible : soumis au poids P et à la tension T du fil. À l'équilibre : P + T = 0 ⟹ P = T.\n- Solide posé sur un plan incliné rugueux : l'équilibre n'est possible que si le plan présente des rugosités (frottements). La réaction R du plan se décompose en deux composantes orthogonales :\n  • Une réaction normale R_N (perpendiculaire au plan incliné, qui empêche l'enfoncement).\n  • Une force de frottement f (tangente au plan incliné, orientée vers le haut pour s'opposer au glissement vers le bas) :\n  R = R_N + f. À l'équilibre : P + R = 0 ⟹ R = P.\n\n3. Les trois types d'équilibre mécanique :\n- Équilibre stable : si on écarte légèrement le corps de sa position d'équilibre, il y revient spontanément après quelques oscillations (ex : règle suspendue par un trou situé au-dessus de son centre de gravité G, bille au fond d'un bol concave).\n- Équilibre instable : si on écarte légèrement le corps, il s'en éloigne définitivement sans pouvoir y revenir seul (ex : règle posée en équilibre sur sa pointe, bille au sommet d'une sphère convexe).\n- Équilibre indifférent : lorsqu'on déplace le corps, il reste en équilibre dans sa nouvelle position (ex : sphère homogène posée sur une table horizontale, cylindre couché).",
      "formulas": [
        {
          "name": "Condition vectorielle sous deux forces",
          "formula": "F_A + F_B = 0 ⟺ F_A = −F_B",
          "note": "Même intensité, sens opposés et même droite d'action."
        },
        {
          "name": "Égalité des intensités à l'équilibre",
          "formula": "||F_A|| = ||F_B||",
          "note": "Valeurs scalaires égales en newtons."
        },
        {
          "name": "Décomposition de la réaction d'appui rugueux",
          "formula": "R = R_N + f",
          "note": "R_N est normale au plan, f est la force de frottement tangentielle."
        },
        {
          "name": "Norme de la réaction avec frottement",
          "formula": "R = √(R_N² + f²)",
          "note": "Composantes orthogonales de la réaction totale."
        }
      ],
      "keyRule": "Un solide soumis à deux forces est en équilibre si F_A + F_B = 0 et si elles ont la même droite d'action. L'équilibre est stable si le mobile y revient après perturbation, instable s'il s'en écarte.",
      "workedExample": {
        "title": "Équilibre d'un solide sur plan incliné rugueux et calcul du frottement",
        "statement": "Un bloc de bois de masse m = 500 g est maintenu en équilibre statique sur un plan incliné faisant un angle α = 30° avec l'horizontale grâce aux frottements. On donne g = 10 N/kg. 1) Fais le bilan des forces appliquées au bloc. 2) Détermine par le calcul l'intensité de la réaction normale R_N et de la force de frottement f.",
        "methodSteps": [
          "Bilan des forces : le bloc est soumis à son poids P = m × g = 0,500 kg × 10 N/kg = 5,0 N et à la réaction globale R du plan incliné (R = R_N + f).",
          "Condition d'équilibre : P + R = 0 ⟹ R = −P, donc R = 5,0 N (verticale vers le haut).",
          "Projeter sur les axes liés au plan incliné (axe x parallèle au plan orienté vers le haut, axe y perpendiculaire orienté vers le haut) :\n  • P_x = −P × sin α = −5,0 × sin(30°) = −2,5 N.\n  • P_y = −P × cos α = −5,0 × cos(30°) = −5,0 × 0,866 = −4,33 N.",
          "À l'équilibre, sur l'axe x : P_x + f = 0 ⟹ f = −P_x = 2,5 N.",
          "Sur l'axe y : P_y + R_N = 0 ⟹ R_N = −P_y = 4,33 N.",
          "Vérifier : √(R_N² + f²) = √(4,33² + 2,5²) = √(18,75 + 6,25) = √25 = 5,0 N = P."
        ],
        "conclusion": "La force de frottement vaut f = 2,5 N (tangente au plan vers le haut) et la réaction normale vaut R_N = 4,33 N."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch3_p1_ex1",
          "type": "mcq",
          "prompt": "Quelles sont les deux conditions nécessaires et suffisantes pour qu'un solide soumis à deux forces F₁ et F₂ soit en équilibre statique ?",
          "options": [
            "F₁ + F₂ = 0 (intensités égales et sens contraires) et les forces ont la même droite d'action",
            "F₁ et F₂ sont perpendiculaires et de même intensité",
            "F₁ + F₂ = 2 F et les droites se coupent à angle droit",
            "Les deux forces doivent obligatoirement être nulles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équilibre sous deux forces exige à la fois la nullité de la somme vectorielle (F₁ + F₂ = 0) et l'alignement strict de leurs supports (même droite d'action pour éviter tout couple de rotation)."
        },
        {
          "id": "seconde_c_physique_ch3_p1_ex2",
          "type": "mcq",
          "prompt": "Une boule de pétanque homogène posée sur une table plane parfaitement horizontale est légèrement déplacée. Elle s'immobilise dans sa nouvelle position. De quel type d'équilibre s'agit-il ?",
          "options": [
            "Équilibre indifférent",
            "Équilibre stable",
            "Équilibre instable",
            "Équilibre oscillatoire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un équilibre est indifférent lorsque le solide, après avoir été déplacé d'une position d'équilibre, reste spontanément en équilibre dans sa nouvelle position."
        },
        {
          "id": "seconde_c_physique_ch3_p1_ex3",
          "type": "mcq",
          "prompt": "Une règle suspendue par un axe passant par son extrémité supérieure oscille puis revient à sa position verticale d'origine. Quel est ce type d'équilibre ?",
          "options": [
            "Équilibre stable (car le centre de gravité est situé au-dessous de l'axe de suspension)",
            "Équilibre instable",
            "Équilibre indifférent",
            "Équilibre dynamique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque le centre de gravité est situé en dessous du point de suspension, le couple de rappel ramène toujours le solide à sa position d'équilibre : c'est un équilibre stable."
        },
        {
          "id": "seconde_c_physique_ch3_p1_ex4",
          "type": "mcq",
          "prompt": "Un objet de masse m = 2,5 kg est suspendu à un fil vertical au repos (g = 9,8 N/kg). Quelle est la tension T du fil ?",
          "options": [
            "24,5 N",
            "2,5 N",
            "9,8 N",
            "250 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À l'équilibre : T = P = m × g = 2,5 kg × 9,8 N/kg = 24,5 N."
        },
        {
          "id": "seconde_c_physique_ch3_p1_ex5",
          "type": "mcq",
          "prompt": "Sur une surface de contact inclinée rugueuse, en quelles composantes se décompose la réaction d'appui R du support sur le solide ?",
          "options": [
            "Une réaction normale R_N perpendiculaire au plan et une force de frottement f parallèle au plan",
            "Deux forces verticales de sens contraires",
            "Une force d'attraction magnétique et le poids",
            "Une force centrifuge et une force de rappel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réaction R d'un support rugueux se décompose en une composante normale R_N (empêchant l'interpénétration) et une composante tangentielle f (force de frottement s'opposant au glissement)."
        },
        {
          "id": "seconde_c_physique_ch3_p1_ex6",
          "type": "mcq",
          "prompt": "Si le plan incliné était parfaitement lisse (aucun frottement, f = 0), un solide abandonné sans fil sur ce plan pourrait-il rester en équilibre ?",
          "options": [
            "Non, car la réaction R serait purement normale et ne pourrait pas compenser la composante du poids parallèle au plan",
            "Oui, car la pesanteur s'annule sur un plan incliné",
            "Oui, si la masse du solide est inférieure à 100 g",
            "Oui, car la réaction normale compense toujours le poids"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans frottement, R est strictement orthogonale au plan. La composante P_x = P·sin α n'étant compensée par aucune force, le solide accélère et glisse vers le bas."
        },
        {
          "id": "seconde_c_physique_ch3_p1_ex7",
          "type": "mcq",
          "prompt": "Un crayon posé debout verticalement sur sa mine très pointue tombe dès qu'on le lâche. Comment qualifie-t-on cet équilibre ?",
          "options": [
            "Équilibre instable (car le centre de gravité est situé au-dessus de la base d'appui quasi-ponctuelle)",
            "Équilibre stable",
            "Équilibre indifférent",
            "Équilibre stationnaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toute perturbation minuscule écarte le centre de gravité et crée un moment de renversement qui éloigne définitivement le corps : équilibre instable."
        },
        {
          "id": "seconde_c_physique_ch3_p1_ex8",
          "type": "mcq",
          "prompt": "Sur un plan incliné, on a mesuré R_N = 8 N et f = 6 N. Quelle est l'intensité de la réaction globale R exercée par le support ?",
          "options": [
            "10 N",
            "14 N",
            "2 N",
            "48 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "R = √(R_N² + f²) = √(8² + 6²) = √(64 + 36) = √100 = 10 N."
        }
      ]
    },
    {
      "id": "seconde_c_physique_ch3_p2_equilibre_trois_forces_statique",
      "order": 2,
      "title": "Équilibre sous trois forces non parallèles et résolution de problèmes",
      "summary": "Énoncer les trois conditions nécessaires d'équilibre sous trois forces non parallèles et maîtriser les méthodes graphique et analytique.",
      "conceptExplanation": "1. Conditions nécessaires d'équilibre d'un solide soumis à trois forces non parallèles :\nLorsqu'un solide soumis à trois forces non parallèles F₁, F₂ et F₃ est en équilibre statique dans un référentiel terrestre :\n- Les trois forces sont nécessairement coplanaires (situées dans un même plan géométrique).\n- Leurs trois droites d'action sont concourantes en un même point géométrique unique O.\n- La somme vectorielle des trois forces est nulle :\nF₁ + F₂ + F₃ = 0.\nCette condition vectorielle implique que la somme de deux forces est égale à l'opposée de la troisième : F₁ + F₂ = −F₃.\n\n2. Méthode de résolution graphique (dynamique fermée) :\nEn traçant les vecteurs bout à bout à une échelle donnée (ex : 1 cm ⟷ 50 N) :\n- La relation F₁ + F₂ + F₃ = 0 se traduit par un polygone fermé (un triangle des forces fermé sans rupture).\n- On utilise les propriétés trigonométriques du triangle (sinus, cosinus, tangente ou théorème d'Al-Kashi) ou la projection géométrique pour déterminer les intensités inconnues.\n\n3. Méthode de résolution analytique (par projection cartésienne) :\nC'est la méthode de référence la plus rigoureuse :\n- Définir le système mécanique et le référentiel d'étude (terrestre).\n- Faire l'inventaire complet des forces extérieures appliquées.\n- Choisir un repère orthonormé judicieux (O, i, j) dont l'un des axes est souvent aligné avec l'un des vecteurs ou le plan de glissement.\n- Projeter la condition vectorielle F₁ + F₂ + F₃ = 0 sur les deux axes :\n  • Axe (Ox) : F₁_x + F₂_x + F₃_x = 0\n  • Axe (Oy) : F₁_y + F₂_y + F₃_y = 0\n- Résoudre le système d'équations algébriques pour trouver les grandeurs inconnues (tensions de fil, intensités, angles d'inclinaison).\nExemple type : solide retenu sur un plan incliné lisse d'angle α par un fil parallèle au plan :\n- Poids : P_x = −m·g·sin α, P_y = −m·g·cos α.\n- Tension : T_x = T, T_y = 0.\n- Réaction : R_x = 0, R_y = R.\nÀ l'équilibre : T = m·g·sin α  et  R = m·g·cos α.",
      "formulas": [
        {
          "name": "Condition d'équilibre vectorielle",
          "formula": "F₁ + F₂ + F₃ = 0",
          "note": "Le polygone des forces est un triangle fermé."
        },
        {
          "name": "Conditions géométriques nécessaires",
          "formula": "Forces coplanaires et droites d'action concourantes",
          "note": "Toutes les lignes d'action se coupent en un point unique."
        },
        {
          "name": "Système analytique de projection",
          "formula": "∑ F_x = 0  et  ∑ F_y = 0",
          "note": "Équations scalaires obtenues dans le repère cartésien."
        },
        {
          "name": "Tension sur plan incliné lisse",
          "formula": "T = m·g·sin α",
          "note": "Composante du poids équilibrée par le fil."
        },
        {
          "name": "Réaction normale sur plan incliné",
          "formula": "R = m·g·cos α",
          "note": "Composante perpendiculaire équilibrée par le support."
        }
      ],
      "keyRule": "Pour 3 forces non parallèles en équilibre : elles sont coplanaires, concourantes, et F₁ + F₂ + F₃ = 0. Sur plan incliné lisse d'angle α : T = mg·sin α et R = mg·cos α.",
      "workedExample": {
        "title": "Calcul de la tension et de la réaction pour un solide sur plan incliné lisse",
        "statement": "Un solide homogène de masse m = 700 g est maintenu en équilibre sur un plan incliné lisse (sans aucun frottement) faisant un angle α = 30° avec l'horizontale, grâce à un fil inextensible parallèle au plan. On donne g = 10 N/kg. 1) Détermine les conditions d'équilibre. 2) Calcule par la méthode analytique la valeur de la tension T du fil et celle de la réaction R du support.",
        "methodSteps": [
          "Définir le système et le référentiel : Système = {solide}, Référentiel = terrestre supposé galiléen.",
          "Bilan des forces extérieures : Poids P (vertical vers le bas, P = m·g = 0,700 × 10 = 7,0 N), Réaction R du plan (perpendiculaire au plan incliné vers le haut), Tension T du fil (parallèle au plan vers le haut).",
          "Condition d'équilibre : P + R + T = 0.",
          "Choisir le repère orthonormé (G, x, y) : axe Gx parallèle au plan orienté vers le haut, axe Gy perpendiculaire au plan orienté vers le haut.",
          "Projeter sur l'axe Gx : −P·sin α + T + 0 = 0 ⟹ T = P·sin α = 7,0 × sin(30°) = 7,0 × 0,5 = 3,5 N.",
          "Projeter sur l'axe Gy : −P·cos α + 0 + R = 0 ⟹ R = P·cos α = 7,0 × cos(30°) = 7,0 × 0,866 = 6,06 N (soit environ 6,1 N)."
        ],
        "conclusion": "La tension du fil vaut T = 3,5 N et la réaction normale du support vaut R = 6,1 N."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch3_p2_ex1",
          "type": "mcq",
          "prompt": "Quelles sont les trois conditions indispensables pour qu'un solide soumis à trois forces non parallèles soit en équilibre statique ?",
          "options": [
            "Les forces doivent être coplanaires, leurs droites d'action concourantes et leur somme vectorielle nulle (F₁ + F₂ + F₃ = 0)",
            "Les forces doivent être parallèles, verticales et d'intensités égales",
            "Les forces doivent former un angle de 90° deux à deux sans se croiser",
            "Les forces doivent être colinéaires et de même sens"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour éviter tout mouvement de rotation et de translation, les trois forces doivent appartenir au même plan (coplanaires), se croiser en un point unique (concourantes), et leur somme vectorielle doit s'annuler."
        },
        {
          "id": "seconde_c_physique_ch3_p2_ex2",
          "type": "mcq",
          "prompt": "Un projecteur de masse m = 30 kg pour un spectacle à Abidjan est maintenu en équilibre par deux câbles faisant des angles symétriques α = 30° avec l'horizontale. On donne g = 10 N/kg. Que vaut le poids P du projecteur et la somme des tensions des deux câbles ?",
          "options": [
            "P = 300 N et T₁ + T₂ = −P (la résultante des deux tensions compense exactement le poids)",
            "P = 30 N et T₁ + T₂ = 0",
            "P = 3000 N et T₁ = T₂ = 300 N",
            "P = 3 N et le projecteur flotte sans tension"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P = m × g = 30 × 10 = 300 N. À l'équilibre : P + T₁ + T₂ = 0 ⟹ T₁ + T₂ = −P."
        },
        {
          "id": "seconde_c_physique_ch3_p2_ex3",
          "type": "mcq",
          "prompt": "Sur un plan incliné lisse d'un angle α = 30° avec l'horizontale, un solide de masse m = 2 kg est retenu par un fil parallèle au plan. Avec g = 10 N/kg, quelle est l'intensité de la tension T du fil ?",
          "options": [
            "10 N car T = m·g·sin(30°) = 2 × 10 × 0,5",
            "20 N car T = m·g",
            "17,3 N car T = m·g·cos(30°)",
            "5 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La projection de l'équilibre sur la pente donne T = P·sin α = m·g·sin α = 2 × 10 × 0,5 = 10 N."
        },
        {
          "id": "seconde_c_physique_ch3_p2_ex4",
          "type": "mcq",
          "prompt": "Pour ce même solide de masse m = 2 kg sur le plan incliné lisse à 30°, quelle est l'intensité de la réaction normale R du plan ?",
          "options": [
            "17,32 N car R = m·g·cos(30°) = 20 × (√3 / 2)",
            "10 N",
            "20 N",
            "0 N car le plan est lisse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La projection perpendiculairement au plan donne R = P·cos α = 20 × cos(30°) = 20 × 0,866 = 17,32 N."
        },
        {
          "id": "seconde_c_physique_ch3_p2_ex5",
          "type": "mcq",
          "prompt": "Que signifie géométriquement la condition F₁ + F₂ + F₃ = 0 lorsqu'on construit graphiquement le dynamique des forces ?",
          "options": [
            "Les trois vecteurs mis bout à bout forment un triangle fermé (l'extrémité du dernier rejoint l'origine du premier)",
            "Les trois vecteurs pointent obligatoirement vers le même sommet",
            "Le polygone est ouvert avec un écart représentant l'accélération",
            "Les trois vecteurs sont de longueurs obligatoirement identiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La somme vectorielle nulle signifie que le contour fermé formé par les vecteurs-forces mis bout à bout se referme exactement sur son point de départ (triangle des forces fermé)."
        },
        {
          "id": "seconde_c_physique_ch3_p2_ex6",
          "type": "mcq",
          "prompt": "Une sphère homogène est suspendue à un fil attaché à un mur vertical parfaitement lisse. Les droites d'action du poids, de la tension du fil et de la réaction du mur :",
          "options": [
            "Se coupent nécessairement toutes les trois au centre de la sphère",
            "Sont toutes parallèles entre elles",
            "Ne se rencontrent jamais",
            "Sont orthogonales deux à deux sans point commun"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque la sphère est en équilibre sous trois forces non parallèles, leurs trois droites d'action sont obligatoirement concourantes au centre géométrique de la sphère."
        },
        {
          "id": "seconde_c_physique_ch3_p2_ex7",
          "type": "mcq",
          "prompt": "Si trois forces coplanaires concourantes F₁, F₂ et F₃ appliquées à un solide ont pour résultante F₁ + F₂ + F₃ = 5 N · i ≠ 0, que peut-on affirmer ?",
          "options": [
            "Le solide n'est pas en équilibre statique et va accélérer dans la direction du vecteur i",
            "Le solide est obligatoirement en équilibre",
            "Le solide tourne à vitesse constante sans avancer",
            "Les forces s'annulent grâce à la gravité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si la somme des forces extérieures n'est pas nulle, la condition d'équilibre n'est pas vérifiée : le solide subit une accélération dans le sens de la résultante non nulle."
        },
        {
          "id": "seconde_c_physique_ch3_p2_ex8",
          "type": "mcq",
          "prompt": "Un solide est retenu en équilibre sur un plan incliné par un ressort de raideur k = 20 N/m. La projection de son poids le long de la pente vaut P_x = 0,735 N. De combien de centimètres le ressort s'allonge-t-il ?",
          "options": [
            "3,7 cm environ car x = P_x / k = 0,735 / 20 = 0,03675 m",
            "14,7 cm",
            "0,27 cm",
            "20 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À l'équilibre le long de l'axe : T = P_x ⟹ k × x = 0,735 N ⟹ x = 0,735 / 20 = 0,03675 m ≈ 3,7 cm."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 4 : PRINCIPE DE L'INERTIE
// ============================================================================
export const physique2deCPrincipeInertieChapter: CurriculumChapter = {
  "id": "seconde_c_physique_ch4_principe_inertie",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 4,
  "officialVolumeHours": 6,
  "title": "Leçon 4 — Principe de l'inertie",
  "summary": "Systèmes isolés et pseudo-isolés, centre d'inertie G d'un système, énoncé de la première loi de Newton (principe de l'inertie), mouvements d'ensemble et propre, et barycentre pondéré.",
  "points": [
    {
      "id": "seconde_c_physique_ch4_p1_systemes_principe_inertie_mouvements",
      "order": 1,
      "title": "Systèmes isolés, principe de l'inertie et mouvements d'ensemble et propre",
      "summary": "Définir un système pseudo-isolé, énoncer le principe de l'inertie (1ère loi de Newton) et distinguer mouvement d'ensemble du centre d'inertie et mouvement propre.",
      "conceptExplanation": "1. Définitions préalables :\n- Système mécanique : le solide, ensemble de solides ou point matériel dont on étudie le mouvement. Tout ce qui ne fait pas partie du système constitue le milieu extérieur.\n- Système isolé : système théorique qui n'est soumis à aucune force extérieure (impossible à réaliser rigoureusement sur Terre).\n- Système pseudo-isolé : système réel soumis à des forces extérieures dont la somme vectorielle est nulle à chaque instant : ∑ F_ext = 0 (les forces extérieures se compensent exactement). Exemple : un mobile autoporteur lancé sur une table à coussin d'air horizontale (le poids P et la réaction normale R se compensent : P + R = 0).\n\n2. Mouvement du centre d'inertie G :\nLorsqu'on lance un mobile autoporteur sur une table à coussin d'air horizontale en lui imprimant une rotation :\n- Le centre de gravité G décrit une ligne droite en parcourant des distances égales pendant des durées égales : son mouvement est rectiligne et uniforme (MRU).\n- Un point périphérique A quelconque du mobile décrit une trajectoire curviligne complexe (une épicycloïde ou trochoïde).\n- G est un point privilégié du mobile appelé centre d'inertie.\n\n3. Énoncé du principe de l'inertie (Première loi de Newton) :\nDans un référentiel galiléen, le centre d'inertie G d'un système isolé ou pseudo-isolé (∑ F_ext = 0) :\n- reste au repos s'il est initialement au repos (immobilité),\n- est animé d'un mouvement rectiligne et uniforme (MRU, vitesse v_G constante en norme, direction et sens) s'il a été mis en mouvement.\nRéciproquement, si le centre d'inertie d'un solide est immobile ou en MRU, alors la somme des forces extérieures qui s'exercent sur lui est rigoureusement nulle.\n\n4. Mouvement d'ensemble et mouvement propre :\n- Mouvement d'ensemble : c'est le mouvement du centre d'inertie G dans le référentiel terrestre (rectiligne et uniforme pour un système pseudo-isolé).\n- Mouvement propre : c'est le mouvement d'un point du solide autre que le centre d'inertie. Dans le référentiel lié au centre d'inertie G, le mouvement propre d'un point est un mouvement circulaire uniforme autour de l'axe passant par G ; dans le référentiel terrestre, il est curviligne.",
      "formulas": [
        {
          "name": "Condition de système pseudo-isolé",
          "formula": "∑ F_ext = 0",
          "note": "Les forces extérieures appliquées se compensent exactement à tout instant."
        },
        {
          "name": "Principe de l'inertie (1ère loi de Newton)",
          "formula": "∑ F_ext = 0 ⟺ v_G = vecteur constant",
          "note": "v_G = 0 (repos) ou v_G = constante ≠ 0 (mouvement rectiligne uniforme)."
        },
        {
          "name": "Mouvement d'ensemble",
          "formula": "Mouvement décrit par le centre d'inertie G",
          "note": "Rectiligne et uniforme dans un référentiel galiléen si ∑ F_ext = 0."
        },
        {
          "name": "Mouvement propre",
          "formula": "Mouvement relatif par rapport au repère lié à G",
          "note": "Circulaire uniforme autour de l'axe passant par G."
        }
      ],
      "keyRule": "Si ∑ F_ext = 0, le centre d'inertie G reste au repos ou persévère dans son mouvement rectiligne uniforme (MRU). Le mouvement d'ensemble est celui de G, le mouvement propre s'effectue autour de G.",
      "workedExample": {
        "title": "Application du principe de l'inertie sur une table horizontale verglacée",
        "statement": "Un solide (S) de masse m = 300 g glisse sur une piste horizontale rectiligne à vitesse constante v = 2 m/s sous l'action d'une force motrice horizontale F d'intensité F = 4 N. On donne g = 10 N/kg. 1) Quelle est la nature du mouvement de G ? 2) Que peut-on déduire pour la somme des forces extérieures d'après le principe de l'inertie ? 3) Détermine l'intensité et la direction de la réaction R exercée par la piste sur le solide.",
        "methodSteps": [
          "Constater la nature du mouvement : le solide se déplace en ligne droite à vitesse constante, son centre d'inertie a donc un mouvement rectiligne uniforme (v_G = vecteur constant).",
          "Appliquer le principe de l'inertie : comme v_G = constante, le système est pseudo-isolé, donc la somme des forces extérieures est nulle : ∑ F_ext = 0 ⟹ P + R + F = 0.",
          "Calculer le poids du solide : P = m × g = 0,300 kg × 10 N/kg = 3,0 N (vertical vers le bas).",
          "Exprimer la réaction globale de la piste R : R = −(P + F).",
          "Calculer l'intensité de la réaction : P et F étant perpendiculaires, R = √(P² + F²) = √(3,0² + 4,0²) = √(9 + 16) = √25 = 5,0 N.",
          "Déterminer les composantes : la piste exerce une réaction normale R_N = 3 N (vers le haut) pour compenser le poids et une force de frottement f = 4 N (opposée à F) pour compenser la force motrice."
        ],
        "conclusion": "D'après le principe de l'inertie, la réaction exercée par la piste a une intensité R = 5,0 N et est inclinée vers l'arrière pour équilibrer P et F."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch4_p1_ex1",
          "type": "mcq",
          "prompt": "Comment définit-on rigoureusement un système pseudo-isolé en mécanique ?",
          "options": [
            "C'est un système soumis à des forces extérieures qui se compensent mutuellement à chaque instant (∑ F_ext = 0)",
            "C'est un système qui ne contient aucun atome",
            "C'est un système qui se déplace à la vitesse de la lumière",
            "C'est un système isolé thermiquement par du polystyrène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un système pseudo-isolé subit des forces extérieures réelles, mais leur résultante vectorielle est rigoureusement nulle (∑ F_ext = 0), comme un palet sur coussin d'air où P + R = 0."
        },
        {
          "id": "seconde_c_physique_ch4_p1_ex2",
          "type": "mcq",
          "prompt": "Dans un référentiel galiléen, que devient le centre d'inertie G d'un système pseudo-isolé initialement en mouvement ?",
          "options": [
            "Il persévère dans un mouvement rectiligne et uniforme (vitesse constante en valeur, direction et sens)",
            "Il ralentit et s'arrête obligatoirement au bout de quelques secondes",
            "Il se met à tourner en cercle à vitesse accélérée",
            "Il monte spontanément vers le ciel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la première loi de Newton (principe d'inertie), en l'absence de force nette, un corps en mouvement conserve indéfiniment sa vitesse vectorielle en ligne droite."
        },
        {
          "id": "seconde_c_physique_ch4_p1_ex3",
          "type": "mcq",
          "prompt": "Lorsqu'un palet autoporteur tourne sur lui-même tout en glissant sur une table à coussin d'air horizontale, quel point possède une trajectoire rectiligne ?",
          "options": [
            "Uniquement son centre d'inertie G",
            "Tous les points de sa périphérie",
            "Aucun point car le palet tourne",
            "Le point le plus éloigné du centre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centre d'inertie G est le seul point privilégié dont le mouvement d'ensemble est rectiligne uniforme, tandis que les autres points décrivent des trajectoires curvilignes."
        },
        {
          "id": "seconde_c_physique_ch4_p1_ex4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le mouvement d'un point du système décrit dans le référentiel lié à son centre d'inertie G ?",
          "options": [
            "Le mouvement propre du système",
            "Le mouvement d'ensemble du système",
            "Le mouvement gravitationnel",
            "Le mouvement balistique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le mouvement d'ensemble est celui de G par rapport au sol ; le mouvement d'un point par rapport à G s'appelle son mouvement propre (circulaire dans le repère de G)."
        },
        {
          "id": "seconde_c_physique_ch4_p1_ex5",
          "type": "mcq",
          "prompt": "Sur une route parfaitement verglacée où les frottements sont rigoureusement nuls (verglas sans adhérence), une voiture en marche peut-elle négocier un virage ?",
          "options": [
            "Non, car en l'absence de force latérale de frottement, le principe de l'inertie impose au véhicule de continuer tout droit en ligne droite",
            "Oui, il suffit de tourner vivement le volant",
            "Oui, en accélérant à fond",
            "Oui, car le poids fait tourner la voiture"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tourner, une force centripète est nécessaire (frottement pneu-sol). Sans frottement (verglas parfait), les forces se compensent (P + R_N = 0) et le principe de l'inertie force la voiture à poursuivre en ligne droite (sortie de route)."
        },
        {
          "id": "seconde_c_physique_ch4_p1_ex6",
          "type": "mcq",
          "prompt": "Un palet glissant sur une table à coussin d'air horizontale parcourt 1,2 m en 2 s en ligne droite. Quelle est la vitesse de son centre d'inertie ?",
          "options": [
            "0,6 m/s constante",
            "2,4 m/s",
            "0,3 m/s",
            "1,2 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le système étant pseudo-isolé, le mouvement est rectiligne uniforme : v_G = d / Δt = 1,2 m / 2 s = 0,6 m/s constante."
        },
        {
          "id": "seconde_c_physique_ch4_p1_ex7",
          "type": "mcq",
          "prompt": "Si un solide est immobile dans le référentiel du laboratoire, que peut-on affirmer avec certitude d'après le principe d'inertie ?",
          "options": [
            "La somme vectorielle de toutes les forces extérieures qui agissent sur lui est nulle (∑ F_ext = 0)",
            "Le solide ne subit absolument aucune force",
            "La gravité ne s'exerce plus sur le solide",
            "Le solide a une masse nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'immobilité dans un référentiel galiléen implique que les forces extérieures qui s'exercent sur le corps s'annulent exactement vectoriellement : ∑ F_ext = 0."
        },
        {
          "id": "seconde_c_physique_ch4_p1_ex8",
          "type": "mcq",
          "prompt": "Qui est le physicien qui a formulé pour la première fois les trois lois fondamentales du mouvement dans son ouvrage Principia Mathematica en 1687 ?",
          "options": [
            "Isaac Newton",
            "Galilée",
            "René Descartes",
            "Albert Einstein"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Isaac Newton a formalisé les trois lois du mouvement (1. Principe d'inertie, 2. Principe fondamental, 3. Actions réciproques) dans ses célèbres Principia."
        }
      ]
    },
    {
      "id": "seconde_c_physique_ch4_p2_determination_centre_inertie_barycentre",
      "order": 2,
      "title": "Détermination du centre d'inertie et barycentre d'un système",
      "summary": "Localiser le centre d'inertie de solides géométriques simples et calculer la position du barycentre pondéré pour un ensemble de solides ou une molécule.",
      "conceptExplanation": "1. Centre d'inertie d'un solide de forme géométrique simple et homogène :\nPour un corps homogène (masse volumique constante), le centre d'inertie G coïncide avec le centre de symétrie géométrique du solide :\n- Segment de droite : milieu du segment.\n- Carré, rectangle ou parallélogramme : point d'intersection des diagonales.\n- Triangle : point de concours des médianes (situé aux 2/3 de chaque médiane à partir du sommet correspondant).\n- Disque, cercle ou sphère : centre géométrique du cercle ou de la sphère.\n- Cylindre plein homogène : milieu de l'axe de révolution (à mi-hauteur).\n\n2. Centre d'inertie d'un ensemble de solides (barycentre pondéré) :\nConsidérons un système formé de deux solides S₁ et S₂ de masses m₁ et m₂, ayant pour centres d'inertie respectifs G₁ et G₂ :\n- Le centre d'inertie global G du système est le barycentre des points G₁ et G₂ pondérés par les masses m₁ et m₂ :\nm₁·GG₁ + m₂·GG₂ = 0.\n- Pour tout point origine O de l'espace, la relation barycentrique s'écrit :\nOG = (m₁·OG₁ + m₂·OG₂) / (m₁ + m₂).\n- En choisissant le point G₁ comme origine (O = G₁), on obtient la relation pratique de positionnement :\nG₁G = (m₂ / (m₁ + m₂)) · G₁G₂.\nRemarques fondamentales :\n- Le point G appartient obligatoirement au segment [G₁G₂].\n- G est toujours plus proche du solide de plus grande masse. Si m₁ > m₂, G est plus proche de G₁.\n- Si m₁ = m₂, G est le milieu exact du segment [G₁G₂].\n\n3. Généralisation à n solides :\nPour un système de n masses m_i situées en G_i :\nOG = (∑ m_i·OG_i) / (∑ m_i).\nCette relation s'applique aussi bien à des objets macroscopiques (masses assemblées, pièces mécaniques, marteau, canne avec pommeau) qu'à l'échelle microscopique pour déterminer le centre d'inertie des molécules chimiques (ex : HCl, CO₂).",
      "formulas": [
        {
          "name": "Définition vectorielle du centre d'inertie (barycentre)",
          "formula": "m₁·GG₁ + m₂·GG₂ = 0",
          "note": "G est le barycentre de (G₁, m₁) et (G₂, m₂)."
        },
        {
          "name": "Position de G par rapport à un point O quelconque",
          "formula": "OG = (m₁·OG₁ + m₂·OG₂) / (m₁ + m₂)",
          "note": "Formule fondamentale de barycentre en physique."
        },
        {
          "name": "Position de G par rapport à G₁",
          "formula": "G₁G = (m₂ / (m₁ + m₂)) × G₁G₂",
          "note": "Distance scalaire le long du segment [G₁G₂]."
        },
        {
          "name": "Centre d'inertie d'un triangle",
          "formula": "AG = 2/3 AA'",
          "note": "A' est le milieu du côté opposé au sommet A."
        }
      ],
      "keyRule": "G₁G = [m₂ / (m₁ + m₂)] · G₁G₂. Le centre d'inertie G est situé sur le segment joignant les centres et est toujours plus proche du corps le plus lourd.",
      "workedExample": {
        "title": "Calcul du centre d'inertie d'une canne composée d'un pommeau et d'une tige",
        "statement": "Une canne de grand-père est constituée d'une tige en bois (T) homogène de longueur L = 60 cm, de masse m₂ = 200 g, et d'un pommeau sphérique (S) de rayon r = 1,2 cm, de masse m₁ = 100 g, fixé à l'une de ses extrémités B. Soit A l'autre extrémité de la tige. 1) Précise les positions des centres d'inertie G₂ de la tige et G₁ de la sphère par rapport à l'extrémité A. 2) Calcule la distance AG entre l'extrémité A et le centre d'inertie global G de la canne.",
        "methodSteps": [
          "Localiser le centre d'inertie G₂ de la tige homogène : G₂ est au milieu de la tige, donc AG₂ = L / 2 = 60 / 2 = 30 cm.",
          "Localiser le centre d'inertie G₁ du pommeau sphérique : le pommeau est centré au-delà de l'extrémité B, donc AG₁ = L + r = 60 + 1,2 = 61,2 cm.",
          "Appliquer la relation barycentrique avec l'extrémité A comme origine :\n  AG = (m₁·AG₁ + m₂·AG₂) / (m₁ + m₂).",
          "Calculer la somme des masses : m₁ + m₂ = 100 g + 200 g = 300 g.",
          "Effectuer l'application numérique :\n  AG = (100 × 61,2 + 200 × 30) / 300 = (6120 + 6000) / 300 = 12120 / 300 = 40,4 cm."
        ],
        "conclusion": "Le centre d'inertie de la canne est situé à la distance AG = 40,4 cm de l'extrémité A (déplacé vers le pommeau par rapport au milieu de la tige)."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch4_p2_ex1",
          "type": "mcq",
          "prompt": "Où se situe géométriquement le centre d'inertie G d'une plaque triangulaire homogène ?",
          "options": [
            "Au point d'intersection des trois médianes (aux deux tiers de chaque médiane en partant du sommet)",
            "Au milieu du côté le plus long",
            "Au sommet ayant le plus grand angle",
            "Au centre du cercle inscrit uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour un triangle homogène, le centre d'inertie coïncide avec le centre de gravité géométrique, qui est le point de concours des médianes situé à 2/3 du sommet."
        },
        {
          "id": "seconde_c_physique_ch4_p2_ex2",
          "type": "mcq",
          "prompt": "Deux points matériels A et B ont pour masses m_A = 200 g et m_B = 600 g et sont distants de AB = 40 cm. À quelle distance de A se trouve le centre d'inertie G ?",
          "options": [
            "30 cm car AG = [m_B / (m_A + m_B)] × AB = (600 / 800) × 40",
            "10 cm car G est plus proche de A",
            "20 cm au milieu",
            "40 cm au point B"
          ],
          "correctAnswerIndex": 0,
          "explanation": "AG = [m_B / (m_A + m_B)] × AB = (600 / 800) × 40 = 0,75 × 40 = 30 cm. G est bien plus proche de B (le plus lourd, GB = 10 cm)."
        },
        {
          "id": "seconde_c_physique_ch4_p2_ex3",
          "type": "mcq",
          "prompt": "Dans une molécule de chlorure d'hydrogène HCl, la distance internucléaire H-Cl est d = 127,4 pm. Les masses molaires sont M(H) = 1,0 g/mol et M(Cl) = 35,5 g/mol. De quel atome le centre d'inertie G est-il le plus proche ?",
          "options": [
            "De l'atome de chlore Cl car sa masse est 35,5 fois plus grande que celle de l'hydrogène",
            "De l'atome d'hydrogène H car il est plus petit",
            "Exactement à mi-chemin entre H et Cl",
            "À l'extérieur de la molécule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le barycentre pondéré se situe toujours plus proche du corps le plus massif : M(Cl) >> M(H), donc G est presque confondu avec le noyau de chlore (à 3,5 pm du chlore)."
        },
        {
          "id": "seconde_c_physique_ch4_p2_ex4",
          "type": "mcq",
          "prompt": "Si deux solides S₁ et S₂ ont exactement la même masse (m₁ = m₂), où se situe le centre d'inertie global G du système constitué par ces deux solides ?",
          "options": [
            "Au milieu exact du segment [G₁G₂]",
            "En G₁",
            "En G₂",
            "À l'infini"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque les masses sont identiques, les coefficients barycentriques sont égaux, ce qui fait de G l'isobarycentre, c'est-à-dire le milieu du segment [G₁G₂]."
        },
        {
          "id": "seconde_c_physique_ch4_p2_ex5",
          "type": "mcq",
          "prompt": "Quelle est l'expression générale vectorielle reliant le centre d'inertie G à deux centres d'inertie G₁ et G₂ de masses m₁ et m₂ par rapport à une origine O ?",
          "options": [
            "OG = (m₁·OG₁ + m₂·OG₂) / (m₁ + m₂)",
            "OG = (OG₁ + OG₂) / (m₁ × m₂)",
            "OG = m₁·OG₁ − m₂·OG₂",
            "OG = √(OG₁² + OG₂²)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La définition mathématique et physique du centre de masse pour deux corps est la moyenne pondérée par les masses : OG = (m₁·OG₁ + m₂·OG₂) / (m₁ + m₂)."
        },
        {
          "id": "seconde_c_physique_ch4_p2_ex6",
          "type": "mcq",
          "prompt": "Une barre d'haltères de longueur L = 1,5 m sans masse porte un disque de 10 kg à l'extrémité gauche et un disque de 30 kg à l'extrémité droite. Où doit-on placer le support pour maintenir la barre en équilibre horizontal ?",
          "options": [
            "À 1,125 m de l'extrémité gauche (à 0,375 m du disque le plus lourd)",
            "Au milieu à 0,75 m",
            "À 0,50 m de l'extrémité gauche",
            "À 1,40 m de l'extrémité droite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "d = [m₂ / (m₁ + m₂)] × L = [30 / (10 + 30)] × 1,5 = (3/4) × 1,5 = 1,125 m de la masse de 10 kg."
        },
        {
          "id": "seconde_c_physique_ch4_p2_ex7",
          "type": "mcq",
          "prompt": "Où se trouve le centre d'inertie d'un cerceau circulaire métallique homogène ?",
          "options": [
            "Au centre géométrique du cercle, c'est-à-dire dans le vide où il n'y a pas de matière",
            "Sur le fil métallique du cerceau",
            "Au point le plus bas du cerceau",
            "Sur la table de support"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centre d'inertie dépend de la géométrie globale de la masse : pour un cerceau ou un anneau, le centre de symétrie est situé au centre du cercle, en dehors de la matière."
        },
        {
          "id": "seconde_c_physique_ch4_p2_ex8",
          "type": "mcq",
          "prompt": "Lors d'une collision entre deux palets autoporteurs sur une table horizontale sans frottement, que fait le centre d'inertie global G du système constitué des deux palets ?",
          "options": [
            "Il conserve exactement son mouvement rectiligne uniforme sans être perturbé par le choc",
            "Il s'arrête brusquement au moment de l'impact",
            "Il recule en sens inverse",
            "Il accélère fortement vers le haut"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les forces lors du choc sont des forces intérieures au système. Les forces extérieures restant compensées (∑ F_ext = 0), le principe d'inertie garantit que le mouvement de G reste rigoureusement rectiligne et uniforme."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 5 : ÉQUILIBRE D'UN SOLIDE MOBILE AUTOUR D'UN AXE FIXE
// ============================================================================
export const physique2deCEquilibreSolideAxeFixeChapter: CurriculumChapter = {
  "id": "seconde_c_physique_ch5_equilibre_solide_axe_fixe",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 5,
  "officialVolumeHours": 8,
  "title": "Leçon 5 — Équilibre d'un solide mobile autour d'un axe fixe",
  "summary": "Effet de rotation d'une force, moment d'une force par rapport à un axe fixe, bras de levier, théorème des moments et conditions générales d'équilibre statique (translation et rotation).",
  "points": [
    {
      "id": "seconde_c_physique_ch5_p1_effet_rotation_moment_force",
      "order": 1,
      "title": "Effet de rotation d'une force, moment et bras de levier",
      "summary": "Comprendre quand une force produit une rotation, définir le moment d'une force M_Δ(F) = ± F·d et calculer le bras de levier dans diverses configurations.",
      "conceptExplanation": "1. Effet de rotation d'une force autour d'un axe fixe (Δ) :\nUne force F appliquée à un solide mobile autour d'un axe fixe (Δ) produit un effet de rotation si et seulement si sa droite d'action (son support) :\n- n'est pas parallèle à l'axe (Δ),\n- et ne coupe pas l'axe (Δ).\nSi la droite d'action rencontre l'axe ou lui est parallèle, son effet de rotation est nul.\n\n2. Définition du moment d'une force :\nLe moment d'une force F par rapport à un axe fixe (Δ), noté M_Δ(F), mesure son efficacité à faire tourner le solide autour de cet axe. C'est le produit de l'intensité F de la force par la distance orthogonale d séparant l'axe (Δ) de la droite d'action de la force :\n|M_Δ(F)| = F × d  (avec F en newtons N, d en mètres m et M_Δ en newton-mètre N·m).\nCette distance d est appelée le bras de levier.\n\n3. Le moment : une grandeur algébrique :\nLe moment peut être positif ou négatif selon le sens de rotation qu'il tend à provoquer par rapport à un sens conventionnel choisi arbitrairement (sens trigonométrique ou sens des aiguilles d'une montre) :\n- M_Δ(F) = + F × d si la force tend à faire tourner le solide dans le sens positif choisi (+).\n- M_Δ(F) = − F × d si la force tend à faire tourner le solide dans le sens contraire (−).\n- M_Δ(F) = 0 si la droite d'action coupe l'axe (Δ) ou est parallèle à (Δ).\n\n4. Détermination géométrique du bras de levier d :\nLe bras de levier d est TOUJOURS la longueur du segment perpendiculaire mené de l'axe (Δ) à la droite d'action de la force :\n- Si la force F est perpendiculaire au bras de longueur l : d = l.\n- Si la force F ou la barre fait un angle α avec la direction perpendiculaire : d = l × sin α ou d = l × cos α selon la disposition géométrique.",
      "formulas": [
        {
          "name": "Moment d'une force par rapport à un axe fixe",
          "formula": "M_Δ(F) = ± F × d",
          "note": "F en newtons (N), d en mètres (m), moment en N·m."
        },
        {
          "name": "Bras de levier (distance orthogonale)",
          "formula": "d = distance(axe Δ, droite d'action)",
          "note": "Segment perpendiculaire abaissé de l'axe sur la droite de la force."
        },
        {
          "name": "Moment nul (aucun effet de rotation)",
          "formula": "M_Δ(F) = 0 ⟺ droite coupe Δ ou parallèle à Δ",
          "note": "C'est le cas du poids si l'axe passe par G, ou de la réaction de l'axe."
        },
        {
          "name": "Bras de levier avec angle α",
          "formula": "d = l × sin α  (ou l × cos α)",
          "note": "Projection géométrique orthogonale."
        }
      ],
      "keyRule": "M_Δ(F) = ± F × d (en N·m). Le bras de levier d est la distance perpendiculaire de l'axe à la droite d'action. Si la force coupe l'axe ou est parallèle à l'axe, M_Δ = 0.",
      "workedExample": {
        "title": "Calcul du moment d'une force sur une manivelle de treuil",
        "statement": "Pour débloquer un écrou de roue, un automobiliste applique une force verticale descendante F = 400 N à l'extrémité d'une clé de longueur l = 25 cm. La clé fait un angle α = 30° avec l'horizontale. On choisit le sens des aiguilles d'une montre comme sens positif. 1) Détermine l'expression et la valeur du bras de levier d. 2) Calcule le moment de la force par rapport à l'axe de rotation. 3) Pour quelle orientation de la clé le moment est-il maximal avec cette même force ?",
        "methodSteps": [
          "Exprimer le bras de levier d : la force étant verticale, le bras de levier est la distance horizontale entre l'axe et la ligne d'action de la force. On a d = l × cos α.",
          "Convertir et calculer d : l = 25 cm = 0,25 m et α = 30°. d = 0,25 × cos(30°) = 0,25 × 0,866 = 0,2165 m.",
          "Calculer le moment de la force : la force tend à faire tourner dans le sens horaire (+), donc M_Δ(F) = + F × d = 400 N × 0,2165 m = 86,6 N·m.",
          "Analyser le cas maximal : le moment M_Δ(F) = F × l × cos α est maximal quand cos α = 1, c'est-à-dire quand α = 0° (la clé est parfaitement horizontale, perpendiculaire à la force verticale).",
          "Calculer ce moment maximal : M_max = F × l = 400 N × 0,25 m = 100 N·m."
        ],
        "conclusion": "Le moment actuel est de 86,6 N·m, et il est maximal (100 N·m) lorsque la clé est en position horizontale."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch5_p1_ex1",
          "type": "mcq",
          "prompt": "Dans laquelle des situations suivantes le moment d'une force par rapport à un axe fixe (Δ) est-il rigoureusement nul ?",
          "options": [
            "Lorsque la droite d'action de la force coupe l'axe de rotation ou lui est parallèle",
            "Lorsque la force est perpendiculaire à l'axe sans le couper",
            "Lorsque le bras de levier est égal à 1 mètre",
            "Lorsque la force a une intensité de 100 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une force dont la droite d'action coupe l'axe ou est parallèle à l'axe ne produit aucun effet de rotation : son bras de levier est nul, donc son moment est égal à zéro."
        },
        {
          "id": "seconde_c_physique_ch5_p1_ex2",
          "type": "mcq",
          "prompt": "Quelle est l'unité légale du moment d'une force dans le Système International ?",
          "options": [
            "Le newton-mètre (N·m)",
            "Le joule (J)",
            "Le newton par mètre (N/m)",
            "Le watt (W)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le moment est le produit d'une force en newtons par une distance en mètres : son unité est le newton-mètre (N·m)."
        },
        {
          "id": "seconde_c_physique_ch5_p1_ex3",
          "type": "mcq",
          "prompt": "Un technicien exerce une force perpendiculaire F = 150 N sur le manche d'un treuil à une distance d = 32 cm de l'axe de rotation. Quel est le moment de cette force ?",
          "options": [
            "48 N·m",
            "4800 N·m",
            "4,8 N·m",
            "182 N·m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "d = 32 cm = 0,32 m. M_Δ(F) = F × d = 150 N × 0,32 m = 48 N·m."
        },
        {
          "id": "seconde_c_physique_ch5_p1_ex4",
          "type": "mcq",
          "prompt": "Comment définit-on géométriquement le bras de levier d d'une force par rapport à un axe (Δ) ?",
          "options": [
            "La distance orthogonale (perpendiculaire) entre l'axe de rotation et la droite d'action de la force",
            "La longueur totale du solide",
            "La distance entre le point d'impact et le sol",
            "La longueur de la flèche du vecteur force"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bras de levier est la plus courte distance séparant l'axe de rotation et la droite support de la force : c'est la distance perpendiculaire."
        },
        {
          "id": "seconde_c_physique_ch5_p1_ex5",
          "type": "mcq",
          "prompt": "Pourquoi est-il beaucoup plus facile d'ouvrir une porte en poussant près de la poignée plutôt que près des gonds (charnières) ?",
          "options": [
            "Parce que près de la poignée, le bras de levier d est maximal, ce qui produit un moment plus grand pour le même effort F",
            "Parce que la porte pèse moins lourd près de la poignée",
            "Parce que la force de frottement de l'air est plus petite",
            "Parce que l'axe de rotation se déplace vers la poignée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le moment de rotation vaut M = F × d. En poussant loin de l'axe (charnières), d est grand, donc la force nécessaire F = M / d est minimale."
        },
        {
          "id": "seconde_c_physique_ch5_p1_ex6",
          "type": "mcq",
          "prompt": "Une force F₁ de 20 N s'applique à d₁ = 0,30 m de l'axe. Une force F₂ de 60 N s'applique à d₂ = 0,10 m. Leurs moments en valeur absolue sont-ils égaux ?",
          "options": [
            "Oui, car M₁ = 20 × 0,30 = 6 N·m et M₂ = 60 × 0,10 = 6 N·m",
            "Non, car F₂ est 3 fois plus grande que F₁",
            "Non, car les distances sont différentes",
            "Non, le moment dépend de la masse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'effet de rotation dépend du produit F × d. Ici, 20 × 0,30 = 6 N·m et 60 × 0,10 = 6 N·m : les deux forces ont exactement le même moment."
        },
        {
          "id": "seconde_c_physique_ch5_p1_ex7",
          "type": "mcq",
          "prompt": "Pourquoi le moment d'une force est-il qualifié de grandeur algébrique ?",
          "options": [
            "Parce qu'il peut être positif (+) ou négatif (−) selon que la force tend à faire tourner dans le sens conventionnel choisi ou en sens inverse",
            "Parce qu'il ne peut être calculé qu'avec des lettres de l'alphabet",
            "Parce qu'il n'a pas de dimension physique",
            "Parce qu'il est toujours imaginaire pur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une grandeur algébrique est munie d'un signe : son signe (+ ou −) indique le sens de rotation induit par rapport au sens trigonométrique arbitrairement choisi."
        },
        {
          "id": "seconde_c_physique_ch5_p1_ex8",
          "type": "mcq",
          "prompt": "Une tige horizontale de longueur L = 1 m est mobile autour de son milieu O. Deux forces verticales vers le bas de même intensité F = 10 N sont appliquées aux deux extrémités A et B. Quel est le moment résultant par rapport à O ?",
          "options": [
            "0 N·m (les deux moments sont opposés et s'annulent : +5 N·m et −5 N·m)",
            "10 N·m",
            "20 N·m",
            "5 N·m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'une tend à faire tourner dans le sens horaire (−10 × 0,5 = −5 N·m), l'autre dans le sens trigonométrique (+10 × 0,5 = +5 N·m). La somme vaut zéro : équilibre de rotation."
        }
      ]
    },
    {
      "id": "seconde_c_physique_ch5_p2_theoreme_moments_conditions_generales",
      "order": 2,
      "title": "Théorème des moments et conditions générales d'équilibre",
      "summary": "Énoncer et appliquer le théorème des moments, formuler les deux conditions générales d'équilibre statique et résoudre des systèmes mécaniques concrets (levier, balançoire, brouette).",
      "conceptExplanation": "1. Énoncé du théorème des moments :\nLorsqu'un solide mobile autour d'un axe fixe (Δ) est en équilibre statique, la somme algébrique des moments de toutes les forces extérieures appliquées par rapport à cet axe est nécessairement nulle :\n∑ M_Δ(F_ext) = 0.\nC'est la condition nécessaire de non-rotation autour de l'axe (Δ).\n\n2. Conditions générales d'équilibre d'un solide mobile autour d'un axe fixe :\nPour qu'un solide mobile autour d'un axe fixe soit en parfait équilibre d'immobilité dans le référentiel terrestre, deux conditions indépendantes doivent être simultanément vérifiées :\n1. Condition d'équilibre de translation (immobilité du centre d'inertie) :\n   ∑ F_ext = 0 (la somme vectorielle de toutes les forces extérieures est nulle).\n2. Condition d'équilibre de rotation (non-rotation autour de l'axe) :\n   ∑ M_Δ(F_ext) = 0 (la somme algébrique des moments par rapport à l'axe est nulle).\n\n3. Remarque pratique fondamentale sur la réaction de l'axe :\nLa droite d'action de la réaction R exercée par l'axe de rotation passe par l'axe (Δ). Par conséquent, son bras de levier par rapport à (Δ) est rigoureusement nul : M_Δ(R) = 0 N·m.\nL'utilisation du théorème des moments permet donc d'éliminer la réaction inconnue de l'axe et de déterminer directement les autres forces appliquées.\n\n4. Applications pratiques du programme ivoirien :\n- Le levier et le pied-de-biche : pour arracher un clou en exerçant une force modérée F_B à l'extrémité OB = 20 cm, le clou résiste à OA = 2 cm avec une force F_A = F_B × (OB / OA) = 10 × F_B. Le levier démultiplie la force !\n- La balançoire à bascule : pour deux enfants de masses m₁ et m₂ assis à des distances d₁ et d₂ du rondin d'appui O : m₁·g·d₁ = m₂·g·d₂ ⟹ m₁·d₁ = m₂·d₂.\n- La brouette : charge de poids P située à d₁ de l'axe de la roue, mains du manœuvre situées à d₁ + d₂. À l'équilibre : F × (d₁ + d₂) = P × d₁ ⟹ F = P × [d₁ / (d₁ + d₂)]. L'effort à fournir est nettement inférieur au poids total.",
      "formulas": [
        {
          "name": "Théorème des moments",
          "formula": "∑ M_Δ(F_ext) = 0",
          "note": "Condition nécessaire de non-rotation autour de l'axe fixe."
        },
        {
          "name": "Condition d'équilibre de translation",
          "formula": "∑ F_ext = 0",
          "note": "Condition d'immobilité du centre d'inertie du solide."
        },
        {
          "name": "Moment nul de la réaction de l'axe",
          "formula": "M_Δ(R) = 0",
          "note": "Car la droite d'action de la réaction de l'axe coupe l'axe de rotation."
        },
        {
          "name": "Règle du levier (balançoire)",
          "formula": "m₁ × d₁ = m₂ × d₂",
          "note": "Équilibre d'une bascule horizontale avec appui central."
        },
        {
          "name": "Force sur les manches d'une brouette",
          "formula": "F = P × [d₁ / (d₁ + d₂)]",
          "note": "Démultiplication de l'effort par effet de levier."
        }
      ],
      "keyRule": "Équilibre avec axe fixe : ∑ F_ext = 0 (non-translation) et ∑ M_Δ(F_ext) = 0 (non-rotation). M_Δ(R) = 0 permet de calculer les forces sans connaître la réaction de l'axe.",
      "workedExample": {
        "title": "Calcul de l'effort de levage d'une brouette de chantier chargée",
        "statement": "Sur un chantier de construction à Abidjan, un ouvrier transporte du gravier à l'aide d'une brouette. La masse totale de la brouette chargée est m = 150 kg, et son centre de gravité G est situé à une distance horizontale d₁ = 80 cm de l'axe de la roue O. L'ouvrier soulève les poignées en A situées à une distance d₂ = 140 cm en arrière de G (soit à d₁ + d₂ = 220 cm de l'axe O) par une force verticale F. On prend g = 9,8 N/kg. 1) Écris le bilan des forces et applique le théorème des moments à l'équilibre horizontal. 2) Calcule la force F exercée par l'ouvrier. 3) Détermine la réaction R exercée par le sol sur la roue en O.",
        "methodSteps": [
          "Bilan des forces extérieures appliquées à la brouette :\n  • Le poids de l'ensemble P = m × g = 150 kg × 9,8 N/kg = 1470 N (appliqué en G, vertical descendant).\n  • La réaction R du sol sur la roue en O (verticale ascendante).\n  • La force verticale F exercée par les bras de l'ouvrier en A (verticale ascendante).",
          "Calculer les moments par rapport à l'axe de rotation O en choisissant le sens anti-horaire comme positif :\n  • M_O(R) = 0 car la droite d'action coupe l'axe O.\n  • M_O(P) = −P × d₁ (tend à faire tourner dans le sens horaire).\n  • M_O(F) = +F × (d₁ + d₂) (tend à soulever dans le sens anti-horaire).",
          "Appliquer le théorème des moments à l'équilibre : ∑ M_O(F_ext) = 0 ⟹ F × (d₁ + d₂) − P × d₁ = 0.",
          "En déduire l'intensité de la force F :\n  F = P × [d₁ / (d₁ + d₂)] = 1470 N × [0,80 m / (0,80 + 1,40) m] = 1470 × (0,80 / 2,20) = 534,5 N.",
          "Appliquer la condition de translation pour déterminer R : ∑ F_ext = 0 ⟹ R + F − P = 0 ⟹ R = P − F = 1470 − 534,5 = 935,5 N."
        ],
        "conclusion": "L'ouvrier n'a besoin de soulever qu'une force F = 534,5 N (équivalente à environ 54,5 kg) au lieu des 150 kg réels grâce à l'effet de levier de la brouette."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch5_p2_ex1",
          "type": "mcq",
          "prompt": "Quel est l'énoncé exact du théorème des moments pour un solide mobile autour d'un axe fixe en équilibre ?",
          "options": [
            "La somme algébrique des moments de toutes les forces extérieures appliquées par rapport à cet axe est nulle : ∑ M_Δ(F_ext) = 0",
            "La somme des intensités des forces est égale au produit des masses",
            "Le moment de la première force est toujours égal à 1",
            "La somme des moments est égale au poids du solide multiplié par la vitesse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le théorème des moments énonce que pour qu'un solide ne tourne pas autour d'un axe fixe, la somme algébrique de tous les moments appliqués par rapport à cet axe doit être nulle."
        },
        {
          "id": "seconde_c_physique_ch5_p2_ex2",
          "type": "mcq",
          "prompt": "Pourquoi choisit-on presque toujours l'axe de rotation physique pour appliquer le théorème des moments ?",
          "options": [
            "Parce que le moment de la réaction de l'axe y est rigoureusement nul (M_Δ(R) = 0), ce qui élimine cette force inconnue du calcul",
            "Parce que c'est là que la pesanteur est la plus forte",
            "Parce que la vitesse y est infinie",
            "Parce que les autres points sont interdits par les mathématiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réaction R exercée par l'axe coupe l'axe, donc son bras de levier est zéro. Son moment s'annule, ce qui simplifie énormément la résolution."
        },
        {
          "id": "seconde_c_physique_ch5_p2_ex3",
          "type": "mcq",
          "prompt": "Deux enfants, Akim (40 kg) et Mikan (20 kg), sont assis sur une balançoire horizontale. Si Mikan est assis à 2 m de l'axe d'appui, à quelle distance Akim doit-il s'asseoir pour équilibrer la balançoire ?",
          "options": [
            "1,0 m car m₁ × d₁ = m₂ × d₂ ⟹ 40 × d₁ = 20 × 2",
            "2,0 m",
            "0,5 m",
            "4,0 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "m₁·d₁ = m₂·d₂ ⟹ 40 × d₁ = 20 × 2 = 40 ⟹ d₁ = 1,0 m."
        },
        {
          "id": "seconde_c_physique_ch5_p2_ex4",
          "type": "mcq",
          "prompt": "Un pied-de-biche a une branche de longueur OB = 20 cm et une fourche de longueur OA = 2 cm. Si l'on appuie en B avec une force F_B = 200 N, quelle force d'arrachage F_A est exercée sur le clou ?",
          "options": [
            "2000 N car F_A = F_B × (OB / OA) = 200 × (20 / 2)",
            "200 N",
            "20 N",
            "400 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le théorème des moments donne F_A × OA = F_B × OB ⟹ F_A = 200 × (20 / 2) = 2000 N. La force est multipliée par 10."
        },
        {
          "id": "seconde_c_physique_ch5_p2_ex5",
          "type": "mcq",
          "prompt": "Pour une barrière de péage homogène de longueur L et de poids P = 50 N, son poids s'applique en son centre de gravité G (à L/2 de l'axe). Si un contrepoids exerce un moment moteur de 62,5 N·m, quelle doit être la longueur L de la barrière à l'équilibre ?",
          "options": [
            "2,5 m car 62,5 − P × (L / 2) = 0 ⟹ L = (2 × 62,5) / 50 = 2,5 m",
            "1,25 m",
            "5,0 m",
            "10 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "M_moteur = P × (L/2) ⟹ 62,5 = 50 × L / 2 = 25 L ⟹ L = 62,5 / 25 = 2,5 m."
        },
        {
          "id": "seconde_c_physique_ch5_p2_ex6",
          "type": "mcq",
          "prompt": "Quelles sont les deux conditions générales indispensables pour qu'un solide mobile autour d'un axe fixe soit en équilibre statique complet ?",
          "options": [
            "∑ F_ext = 0 (non-translation) ET ∑ M_Δ(F_ext) = 0 (non-rotation)",
            "Uniquement que son poids soit nul",
            "Uniquement que la vitesse de rotation soit constante",
            "Que les forces soient parallèles à l'axe de rotation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équilibre global exige l'immobilité de translation (∑ F_ext = 0) et l'absence de rotation (∑ M_Δ(F_ext) = 0)."
        },
        {
          "id": "seconde_c_physique_ch5_p2_ex7",
          "type": "mcq",
          "prompt": "Une pédale OA de longueur L = 20 cm est mobile autour d'un axe horizontal en O. Une force horizontale F = 20 N s'applique en A. Elle est maintenue à l'équilibre à 30° par un ressort fixé au milieu C (d = 10 cm) perpendiculaire à OA. Quelle est la tension T du ressort ?",
          "options": [
            "20 N car T × (L/2) = F × L × sin(30°) ⟹ T × 10 = 20 × 20 × 0,5 ⟹ T = 20 N",
            "40 N",
            "10 N",
            "5 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Théorème des moments : T × (L/2) − F × L × sin(30°) = 0 ⟹ T = 2 F sin(30°) = 2 × 20 × 0,5 = 20 N."
        },
        {
          "id": "seconde_c_physique_ch5_p2_ex8",
          "type": "mcq",
          "prompt": "Si ce même ressort fixé sur la pédale développe une tension T = 20 N et subit un raccourcissement Δx = 8 cm, quelle est sa raideur k ?",
          "options": [
            "250 N/m car k = T / Δx = 20 / 0,08",
            "160 N/m",
            "25 N/m",
            "2,5 N/m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "k = T / Δx = 20 N / 0,08 m = 250 N/m."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 6 : QUANTITÉ DE MOUVEMENT
// ============================================================================
export const physique2deCQuantiteDeMouvementChapter: CurriculumChapter = {
  "id": "seconde_c_physique_ch6_quantite_de_mouvement",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 6,
  "officialVolumeHours": 6,
  "title": "Leçon 6 — Quantité de mouvement",
  "summary": "Définition vectorielle de la quantité de mouvement p = m·v, quantité de mouvement d'un système de deux solides, loi de conservation pour un système isolé ou pseudo-isolé et applications aux chocs, au recul et à la propulsion par réaction.",
  "points": [
    {
      "id": "seconde_c_physique_ch6_p1_vecteur_quantite_mouvement_solide_systeme",
      "order": 1,
      "title": "Vecteur quantité de mouvement d'un solide et d'un système matériel",
      "summary": "Définir le vecteur quantité de mouvement p = m·v d'un solide, connaître ses caractéristiques et exprimer la quantité de mouvement globale d'un système de solides.",
      "conceptExplanation": "1. Définition du vecteur quantité de mouvement d'un solide :\nLe vecteur quantité de mouvement d'un point matériel ou d'un solide de masse m dont le centre d'inertie se déplace à la vitesse vectorielle v_G est égal au produit de sa masse par son vecteur-vitesse :\np = m · v_G.\n\n2. Caractéristiques physiques de p :\n- Point d'application : le centre d'inertie G du solide.\n- Direction : celle du vecteur-vitesse v_G (tangente à la trajectoire).\n- Sens : celui du mouvement (identique au sens de v_G).\n- Norme (valeur) : p = m · v_G avec m en kilogrammes (kg), v_G en mètres par seconde (m·s⁻¹ ou m/s) et p en kilogramme-mètre par seconde (kg·m·s⁻¹ ou kg·m/s).\nAttention : le vecteur quantité de mouvement dépend impérativement du référentiel choisi, car la vitesse v_G dépend du référentiel.\n\n3. Vecteur quantité de mouvement d'un système de deux solides :\nPour un système constitué de deux solides S₁ (masse m₁, centre d'inertie G₁, vitesse v_G1) et S₂ (masse m₂, centre d'inertie G₂, vitesse v_G2) :\nLe vecteur quantité de mouvement global du système est la somme vectorielle des quantités de mouvement individuelles :\np = p₁ + p₂ = m₁ · v_G1 + m₂ · v_G2.\nSi G est le centre d'inertie de l'ensemble du système (masse totale M = m₁ + m₂), on a également :\np = (m₁ + m₂) · v_G = M · v_G.\n\n4. Position du centre d'inertie d'un système de deux solides :\nLe centre d'inertie G est le barycentre des centres G₁ et G₂ affectés des masses m₁ et m₂ :\nOG = (m₁ · OG₁ + m₂ · OG₂) / (m₁ + m₂).\nEn prenant pour origine le point G₁ (O ≡ G₁) :\nG₁G = [m₂ / (m₁ + m₂)] · G₁G₂.\nExemple : si m₂ = 2 m₁, alors G₁G = (2 / 3) G₁G₂.",
      "formulas": [
        {
          "name": "Vecteur quantité de mouvement",
          "formula": "p = m · v_G",
          "note": "m en kg, v_G en m·s⁻¹, p en kg·m·s⁻¹ (ou kg·m/s)."
        },
        {
          "name": "Norme de la quantité de mouvement",
          "formula": "p = m × v",
          "note": "Valeur scalaire toujours positive, proportionnelle à la masse et à la vitesse."
        },
        {
          "name": "Quantité de mouvement d'un système de solides",
          "formula": "p = p₁ + p₂ = m₁ · v₁ + m₂ · v₂ = (m₁ + m₂) · v_G",
          "note": "Somme vectorielle des impulsions de chaque solide composant le système."
        },
        {
          "name": "Position du barycentre d'un système binaire",
          "formula": "G₁G = [m₂ / (m₁ + m₂)] · G₁G₂",
          "note": "Le centre d'inertie est toujours plus proche du solide le plus lourd."
        }
      ],
      "keyRule": "La quantité de mouvement est une grandeur STRICTEMENT VECTORIELLE. Pour un système de plusieurs corps se déplaçant dans des directions différentes, on ne peut jamais additionner simplement les valeurs numériques scalaires : il faut impérativement faire une addition vectorielle (géométrique ou par projection sur des axes).",
      "workedExample": {
        "title": "Exemple résolu : Calcul de quantité de mouvement d'une automobile et d'une balle",
        "statement": "1. Une automobile de masse m₁ = 1 200 kg roule à la vitesse v₁ = 90 km/h sur une route rectiligne.\n2. Une balle de fusil de masse m₂ = 20 g est tirée à la vitesse v₂ = 800 m/s.\nCalculer la norme de la quantité de mouvement de chaque objet et comparer leurs ordres de grandeur.",
        "methodSteps": [
          "Étape 1 : Convertir les grandeurs dans les unités légales du Système International (SI).",
          "Pour l'automobile : v₁ = 90 km/h = 90 / 3,6 = 25 m/s. Sa masse est déjà en kg : m₁ = 1 200 kg.",
          "Pour la balle : v₂ = 800 m/s. Convertir sa masse en kg : m₂ = 20 g = 20 × 10⁻³ kg = 0,020 kg.",
          "Étape 2 : Calculer la quantité de mouvement p₁ de l'automobile : p₁ = m₁ × v₁ = 1 200 × 25 = 30 000 kg·m/s = 3,0 × 10⁴ kg·m·s⁻¹.",
          "Étape 3 : Calculer la quantité de mouvement p₂ de la balle : p₂ = m₂ × v₂ = 0,020 × 800 = 16 kg·m/s = 16 kg·m·s⁻¹.",
          "Étape 4 : Comparer les deux valeurs : p₁ / p₂ = 30 000 / 16 = 1 875."
        ],
        "conclusion": "L'automobile possède une quantité de mouvement 1 875 fois plus grande que la balle, car sa masse imposante compense largement sa vitesse plus modeste."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch6_p1_ex1",
          "type": "mcq",
          "prompt": "Quelle est l'unité légale de la quantité de mouvement dans le Système International (SI) ?",
          "options": [
            "Le kilogramme-mètre par seconde (kg·m·s⁻¹)",
            "Le newton par seconde (N·s⁻¹)",
            "Le joule par seconde (J·s⁻¹)",
            "Le mètre par seconde carrée (m·s⁻²)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le Système International, la masse s'exprime en kg et la vitesse en m·s⁻¹, donc la quantité de mouvement p = m·v s'exprime en kg·m·s⁻¹ (ou en N·s car 1 N = 1 kg·m·s⁻²)."
        },
        {
          "id": "seconde_c_physique_ch6_p1_ex2",
          "type": "mcq",
          "prompt": "Quelles sont les caractéristiques vectorielles du vecteur quantité de mouvement p d'un point matériel ?",
          "options": [
            "Même point d'application, même direction et même sens que le vecteur-vitesse v_G",
            "Même direction mais de sens toujours opposé à v_G",
            "Direction perpendiculaire à la trajectoire et sens vers l'intérieur",
            "Point d'application à l'origine du repère et direction constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque p = m · v_G et que la masse m est un scalaire strictement positif (m > 0), le vecteur p a exactement la même direction, le même sens et le même point d'application que v_G."
        },
        {
          "id": "seconde_c_physique_ch6_p1_ex3",
          "type": "mcq",
          "prompt": "Une balle de tennis de masse m = 60 g est servie à une vitesse v = 180 km/h. Quelle est la norme de sa quantité de mouvement ?",
          "options": [
            "3,0 kg·m·s⁻¹",
            "10,8 kg·m·s⁻¹",
            "300 kg·m·s⁻¹",
            "1,08 × 10⁴ kg·m·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Convertissons en unités SI : m = 60 g = 0,060 kg et v = 180 km/h = 180 / 3,6 = 50 m/s. On en déduit : p = m × v = 0,060 × 50 = 3,0 kg·m·s⁻¹."
        },
        {
          "id": "seconde_c_physique_ch6_p1_ex4",
          "type": "mcq",
          "prompt": "Si la vitesse d'un mobile est doublée alors que sa masse reste constante, sa quantité de mouvement :",
          "options": [
            "Est multipliée par 2",
            "Est multipliée par 4",
            "Reste inchangée",
            "Est divisée par 2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La norme de la quantité de mouvement p = m × v est directement proportionnelle à la vitesse v. Si v devient 2v, p' = m × (2v) = 2p."
        },
        {
          "id": "seconde_c_physique_ch6_p1_ex5",
          "type": "mcq",
          "prompt": "Deux solides A et B de masses mA = 2 kg et mB = 3 kg se déplacent en sens contraires sur un même axe avec des vitesses respectives vA = +4 m/s et vB = −2 m/s. Quelle est la quantité de mouvement totale du système {A + B} sur cet axe ?",
          "options": [
            "+2 kg·m·s⁻¹",
            "+14 kg·m·s⁻¹",
            "−2 kg·m·s⁻¹",
            "+8 kg·m·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La projection sur l'axe donne : p = pA + pB = mA·vA + mB·vB = (2 × (+4)) + (3 × (−2)) = 8 − 6 = +2 kg·m·s⁻¹."
        },
        {
          "id": "seconde_c_physique_ch6_p1_ex6",
          "type": "mcq",
          "prompt": "Deux corps ponctuels A et B de masses mA = 100 g et mB = 300 g sont distants de AB = 40 cm. À quelle distance du point A se trouve le centre d'inertie G du système ?",
          "options": [
            "30 cm de A",
            "10 cm de A",
            "20 cm de A",
            "25 cm de A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par la formule du barycentre : AG = [mB / (mA + mB)] · AB = [300 / (100 + 300)] × 40 = (3/4) × 40 = 30 cm. Le centre d'inertie est bien plus proche du corps le plus lourd B."
        },
        {
          "id": "seconde_c_physique_ch6_p1_ex7",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que le vecteur quantité de mouvement est relatif au référentiel d'observation ?",
          "options": [
            "Parce que le vecteur-vitesse v dépend du référentiel d'étude choisi",
            "Parce que la masse d'un objet change d'un référentiel à l'autre",
            "Parce que la quantité de mouvement ne peut être mesurée que sur la Terre",
            "Parce que la direction de la force de gravité change"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La masse m est invariante en mécanique classique, mais le vecteur vitesse v dépend du référentiel d'observation (relativité du mouvement). Donc p = m·v dépend directement du référentiel."
        },
        {
          "id": "seconde_c_physique_ch6_p1_ex8",
          "type": "mcq",
          "prompt": "Un système de deux solides a une masse totale M = 5 kg et son centre d'inertie G a une vitesse v_G = 3 m/s. Quelle est la quantité de mouvement totale du système ?",
          "options": [
            "15 kg·m·s⁻¹",
            "1,67 kg·m·s⁻¹",
            "45 kg·m·s⁻¹",
            "8 kg·m·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par la relation générale p = M · v_G, la quantité de mouvement totale d'un système est égale au produit de sa masse totale par la vitesse de son centre d'inertie : p = 5 × 3 = 15 kg·m·s⁻¹."
        }
      ]
    },
    {
      "id": "seconde_c_physique_ch6_p2_conservation_quantite_mouvement_applications",
      "order": 2,
      "title": "Loi de conservation de la quantité de mouvement et applications pratiques",
      "summary": "Énoncer la loi de conservation pour un système isolé ou pseudo-isolé et l'appliquer au recul des armes à feu, à la propulsion par réaction et aux chocs (mous ou élastiques).",
      "conceptExplanation": "1. Énoncé de la loi de conservation de la quantité de mouvement :\nPour un système matériel isolé (soumis à aucune force extérieure) ou pseudo-isolé (dont la somme des forces extérieures est nulle : Σ F_ext = 0), le vecteur quantité de mouvement total du système se conserve :\np_total = constante  ⇔  p_après = p_avant.\nRemarque : cette loi est une conséquence directe du principe de l'inertie et de la 3e loi de Newton (principe des actions réciproques).\n\n2. Phénomène de recul (armes à feu, canons, patineurs) :\nConsidérons un canon de masse M contenant un boulet de masse m, initialement immobile sur un sol horizontal sans frottement :\n- Avant le tir : le système est au repos, donc p_avant = (M + m) · 0 = 0.\n- Après le tir : le boulet part avec une vitesse vectorielle v_B et le canon acquiert une vitesse de recul v_C :\np_après = m · v_B + M · v_C.\n- Par conservation de la quantité de mouvement (p_après = p_avant = 0) :\nm · v_B + M · v_C = 0  ⇒  v_C = − (m / M) · v_B.\nEn valeur scalaire : v_C = (m / M) · v_B.\nLe signe négatif signifie que le canon recule impérativement dans le sens strictement opposé à celui de l'éjection du boulet.\n\n3. Propulsion par réaction (fusées, avions à réaction) :\nUne fusée éjecte des gaz de combustion vers l'arrière à très grande vitesse. Par conservation de la quantité de mouvement du système {fusée + gaz}, l'expulsion des gaz vers l'arrière propulse la fusée vers l'avant, même dans le vide absolu spatial où il n'y a aucun air sur lequel 's'appuyer'.\n\n4. Étude des collisions et chocs entre solides :\n- Choc mou (ou inélastique) : après l'impact, les deux solides s'accrochent et restent liés en un seul corps de masse (m₁ + m₂) se déplaçant à la vitesse commune v' :\nm₁ · v₁ + m₂ · v₂ = (m₁ + m₂) · v'  ⇒  v' = (m₁ · v₁ + m₂ · v₂) / (m₁ + m₂).\n- Choc avec trajectoires sécantes : on projette l'égalité vectorielle p_avant = p_après sur deux axes orthogonaux Ox et Oy à l'aide des cosinus et sinus des angles de tir.",
      "formulas": [
        {
          "name": "Loi de conservation de la quantité de mouvement",
          "formula": "p_après = p_avant (si Σ F_ext = 0)",
          "note": "Valable pour tout système isolé ou pseudo-isolé, déformable ou non."
        },
        {
          "name": "Vitesse de recul d'un canon ou d'une arme",
          "formula": "v_C = − (m / M) · v_B",
          "note": "M masse du canon, m masse du projectile, v_B vitesse du projectile."
        },
        {
          "name": "Vitesse après un choc mou (solides solidaires)",
          "formula": "v' = (m₁ · v₁ + m₂ · v₂) / (m₁ + m₂)",
          "note": "Vitesse commune du centre d'inertie après accolement des deux corps."
        },
        {
          "name": "Séparation mutuelle de deux corps au repos",
          "formula": "m₁ · v₁ + m₂ · v₂ = 0  ⇒  v₂ = (m₁ / m₂) · v₁",
          "note": "Deux patineurs qui se repoussent partent en sens opposés."
        }
      ],
      "keyRule": "Avant un tir ou une répulsion mutuelle à partir du repos, la quantité de mouvement initiale est STRICTEMENT NULLE (p_avant = 0). Après la séparation, la somme vectorielle reste nulle : m₁·v₁ + m₂·v₂ = 0, ce qui impose que les deux corps partent obligatoirement en sens opposés avec des vitesses inversement proportionnelles à leurs masses.",
      "workedExample": {
        "title": "Exemple résolu : Choc mou entre deux wagons de train sur une voie ferrée",
        "statement": "Sur une voie de triage rectiligne et horizontale, un wagon de marchandises A de masse mA = 30 tonnes roulant à la vitesse vA = 2,0 m/s heurte un wagon B immobile de masse mB = 20 tonnes. Les deux wagons s'accrochent automatiquement lors du choc.\n1. Calculer la quantité de mouvement totale du système avant le choc.\n2. Déterminer la vitesse v' de l'ensemble {A + B} après l'accrochage.",
        "methodSteps": [
          "Étape 1 : Définir le système {wagon A + wagon B} et vérifier les hypothèses. Le système est sur rails horizontaux sans frottements notables : le poids total est compensé par la réaction normale des rails, le système est donc pseudo-isolé horizontalement.",
          "Étape 2 : Convertir les masses en kg : mA = 30 000 kg, mB = 20 000 kg.",
          "Étape 3 : Calculer la quantité de mouvement avant le choc : p_avant = mA · vA + mB · vB = (30 000 × 2,0) + (20 000 × 0) = 60 000 kg·m·s⁻¹.",
          "Étape 4 : Appliquer la conservation de la quantité de mouvement : p_après = p_avant = 60 000 kg·m·s⁻¹.",
          "Étape 5 : Exprimer p_après pour le système accroché de masse totale (mA + mB) : p_après = (mA + mB) × v'.",
          "Étape 6 : Isoler et calculer v' : v' = p_après / (mA + mB) = 60 000 / (30 000 + 20 000) = 60 000 / 50 000 = 1,2 m/s."
        ],
        "conclusion": "Après le choc mou, l'ensemble des deux wagons continue son mouvement dans le même sens à la vitesse réduite de 1,2 m/s."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch6_p2_ex1",
          "type": "mcq",
          "prompt": "À quelle condition essentielle la quantité de mouvement totale d'un système se conserve-t-elle au cours d'un phénomène ?",
          "options": [
            "Le système doit être isolé ou pseudo-isolé (somme des forces extérieures nulle)",
            "Le système doit obligatoirement être constitué d'un seul solide indéformable",
            "La vitesse de chaque objet doit rester strictement constante",
            "Il ne doit y avoir aucune force intérieure entre les éléments du système"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La quantité de mouvement se conserve si et seulement si la somme des forces extérieures appliquées au système est nulle (Σ F_ext = 0), c'est-à-dire si le système est isolé ou pseudo-isolé."
        },
        {
          "id": "seconde_c_physique_ch6_p2_ex2",
          "type": "mcq",
          "prompt": "Un canon de masse M = 1 000 kg éjecte horizontalement un obus de masse m = 10 kg à la vitesse de 600 m/s. Quelle est la valeur de la vitesse de recul du canon ?",
          "options": [
            "6,0 m/s dans le sens opposé à l'obus",
            "60 m/s dans le sens de l'obus",
            "0,6 m/s dans le sens opposé à l'obus",
            "600 m/s dans le sens opposé à l'obus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par conservation de la quantité de mouvement (système initialement au repos) : M·v_C + m·v_obus = 0 ⇒ v_C = (m / M) × v_obus = (10 / 1000) × 600 = 0,01 × 600 = 6,0 m/s (en sens inverse)."
        },
        {
          "id": "seconde_c_physique_ch6_p2_ex3",
          "type": "mcq",
          "prompt": "Deux patineurs A (50 kg) et B (25 kg), immobiles sur une patinoire sans frottement, se repoussent des deux mains. Le patineur A part à la vitesse vA = 1,5 m/s. Quelle est la vitesse du patineur B ?",
          "options": [
            "3,0 m/s en sens opposé à A",
            "0,75 m/s en sens opposé à A",
            "1,5 m/s dans le même sens que A",
            "6,0 m/s en sens opposé à A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Initialement au repos : mA·vA + mB·vB = 0 ⇒ vB = (mA / mB) × vA = (50 / 25) × 1,5 = 2 × 1,5 = 3,0 m/s en sens opposé."
        },
        {
          "id": "seconde_c_physique_ch6_p2_ex4",
          "type": "mcq",
          "prompt": "Un solide A (masse m, vitesse v) heurte de plein fouet un solide B identique (masse m) au repos. Après le choc mou, ils restent soudés. Quelle est la vitesse du système {A + B} ?",
          "options": [
            "v / 2",
            "v",
            "2 v",
            "0 (immobiles)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par conservation : p_avant = m·v + m·0 = m·v. Après le choc, la masse totale est 2m, donc p_après = (2m)·v' = m·v ⇒ v' = v / 2."
        },
        {
          "id": "seconde_c_physique_ch6_p2_ex5",
          "type": "mcq",
          "prompt": "Comment une fusée spatiale parvient-elle à accélérer dans le vide sidéral où il n'y a aucune atmosphère ?",
          "options": [
            "En éjectant des gaz à grande vitesse vers l'arrière, ce qui propulse la fusée vers l'avant par conservation de la quantité de mouvement",
            "En prenant appui sur le rayonnement solaire incident",
            "En utilisant la force d'attraction résiduelle des étoiles proches",
            "En créant un vide encore plus poussé à l'avant de sa trajectoire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La propulsion par réaction repose sur la conservation de la quantité de mouvement du système fermé {fusée + gaz éjectés} : l'éjection des gaz vers l'arrière crée instantanément une impulsion motrice vers l'avant, sans besoin de support extérieur."
        },
        {
          "id": "seconde_c_physique_ch6_p2_ex6",
          "type": "mcq",
          "prompt": "Une locomotive de 40 000 kg roulant à 36 km/h heurte un wagon immobile de 20 000 kg et s'y accroche. Quelle est la vitesse de l'ensemble après la collision ?",
          "options": [
            "6,67 m/s (soit 24 km/h)",
            "10 m/s (soit 36 km/h)",
            "18 m/s (soit 64,8 km/h)",
            "5 m/s (soit 18 km/h)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Convertissons : 36 km/h = 10 m/s. p_avant = 40 000 × 10 = 400 000 kg·m/s. Après accrochage, masse totale = 40 000 + 20 000 = 60 000 kg. Vitesse commune : v' = 400 000 / 60 000 = 40 / 6 ≈ 6,67 m/s (ou 24 km/h)."
        },
        {
          "id": "seconde_c_physique_ch6_p2_ex7",
          "type": "mcq",
          "prompt": "Lors d'une explosion d'une grenade initialement au repos qui se brise en deux éclats de masses m₁ = 200 g et m₂ = 300 g, l'éclat 1 part vers la droite à 150 m/s. Quel est le mouvement de l'éclat 2 ?",
          "options": [
            "Il part vers la gauche à 100 m/s",
            "Il part vers la droite à 100 m/s",
            "Il part vers la gauche à 150 m/s",
            "Il reste immobile au point d'explosion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "p_avant = 0. Donc m₁·v₁ + m₂·v₂ = 0 ⇒ v₂ = − (m₁ / m₂) · v₁ = − (200 / 300) × 150 = − 100 m/s. Il se déplace donc vers la gauche à 100 m/s."
        },
        {
          "id": "seconde_c_physique_ch6_p2_ex8",
          "type": "mcq",
          "prompt": "Dans le cas d'un choc élastique frontal entre deux billes de même masse m où la bille 1 arrive à la vitesse v et la bille 2 est initialement au repos :",
          "options": [
            "La bille 1 s'arrête net et la bille 2 repart avec la vitesse v",
            "Les deux billes repartent ensemble à la vitesse v / 2",
            "Les deux billes rebondissent en sens inverse à la vitesse v",
            "La bille 1 continue à la vitesse v et la bille 2 reste immobile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lors d'un choc élastique frontal entre corps de masses identiques, il y a transfert intégral de la quantité de mouvement et de l'énergie cinétique : le premier solide s'immobilise et transmet l'intégralité de sa vitesse au second (comme dans le pendule de Newton)."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 7 : INTENSITÉ D'UN COURANT CONTINU
// ============================================================================
export const physique2deCIntensiteCourantContinuChapter: CurriculumChapter = {
  "id": "seconde_c_physique_ch7_intensite_courant_continu",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 7,
  "officialVolumeHours": 6,
  "title": "Leçon 7 — Intensité d'un courant continu",
  "summary": "Quantité d'électricité Q = n·e, définition du courant I = Q/Δt, mesure à l'ampèremètre, propriétés dans une branche et application rigoureuse de la loi des nœuds.",
  "points": [
    {
      "id": "seconde_c_physique_ch7_p1_quantite_electricite_mesure_ampèremetre",
      "order": 1,
      "title": "Quantité d'électricité, intensité du courant et mesure à l'ampèremètre",
      "summary": "Relier la quantité d'électricité aux porteurs de charge, définir l'intensité I = Q/Δt et maîtriser la mesure par ampèremètre numérique ou analogique à aiguille.",
      "conceptExplanation": "1. Nature du courant électrique et porteurs de charge :\nLe courant électrique est un déplacement d'ensemble ordonné de porteurs de charge électrique :\n- Dans les métaux et conducteurs solides : les porteurs sont des électrons libres, chargés négativement (q = −e = −1,6 × 10⁻¹⁹ C), qui se déplacent de la borne négative (−) vers la borne positive (+) du générateur.\n- Le sens conventionnel du courant électrique est, par convention historique, orienté de la borne positive (+) vers la borne négative (−) à l'extérieur du générateur.\n- Dans les solutions électrolytiques : le courant est assuré par le déplacement simultané des cations (ions positifs vers la cathode) et des anions (ions négatifs vers l'anode).\n\n2. Quantité d'électricité Q :\nLa quantité d'électricité transportée par n porteurs de charge vaut :\nQ = n · |q|.\nPour un flux de n électrons : Q = n · e avec e = 1,6 × 10⁻¹⁹ C (charge élémentaire).\nL'unité de charge électrique est le coulomb (C).\nPour une mole d'électrons (N_A = 6,02 × 10²³ mol⁻¹) : Q_mol = N_A · e ≈ 96 500 C (constante de Faraday).\n\n3. Définition de l'intensité du courant électrique I :\nL'intensité I à travers une section droite de conducteur est le débit de charge, c'est-à-dire le quotient de la quantité d'électricité Q traversant cette section par la durée Δt du passage :\nI = Q / Δt  ⇔  Q = I · Δt.\nUnités : I en ampères (A), Q en coulombs (C), Δt en secondes (s).\nDébit d'électrons D : D = n / Δt = I / e (nombre d'électrons par seconde).\n\n4. Mesure de l'intensité à l'ampèremètre :\n- L'ampèremètre (ou multimètre en mode A-DC) se branche impérativement EN SÉRIE dans le circuit pour être traversé par le courant à mesurer (sa résistance interne est quasi nulle).\n- Le courant doit entrer par la borne A (ou mA) et ressortir par la borne COM.\n- Ampèremètre à aiguille : la formule de lecture est :\nI = (Calibre × Lecture) / Échelle.\nExemple : calibre C = 1 A, aiguille sur la graduation L = 65 d'une échelle à E = 100 divisions :\nI = (1 × 65) / 100 = 0,65 A.\n- Règle de choix du calibre : choisir le calibre immédiatement supérieur à l'intensité attendue pour obtenir la plus grande déviation possible de l'aiguille tout en évitant de détériorer l'appareil.",
      "formulas": [
        {
          "name": "Quantité d'électricité",
          "formula": "Q = n · e",
          "note": "n nombre d'électrons, e = 1,6 × 10⁻¹⁹ C, Q en coulombs (C)."
        },
        {
          "name": "Intensité du courant continu",
          "formula": "I = Q / Δt",
          "note": "I en ampères (A), Q en coulombs (C), Δt en secondes (s)."
        },
        {
          "name": "Débit d'électrons",
          "formula": "D = n / Δt = I / e",
          "note": "Nombre d'électrons traversant la section par seconde (en électrons/s)."
        },
        {
          "name": "Lecture sur ampèremètre à aiguille",
          "formula": "I = (Calibre × Lecture) / Échelle",
          "note": "Lecture = division indiquée par l'aiguille, Échelle = graduation maximale."
        }
      ],
      "keyRule": "L'ampèremètre se branche TOUJOURS EN SÉRIE. Le brancher en dérivation crée un court-circuit dangereux car sa résistance interne est quasi nulle. En cas de calcul avec I = Q / Δt, la durée Δt doit TOUJOURS être convertie en secondes (ex : 1 heure = 3 600 s).",
      "workedExample": {
        "title": "Exemple résolu : Débit d'électrons et lecture d'un ampèremètre",
        "statement": "Un circuit est traversé par un courant continu pendant une durée Δt = 5,0 minutes. L'ampèremètre utilisé possède un calibre C = 500 mA, une échelle de 100 divisions et son aiguille se stabilise sur la division 72.\n1. Calculer l'intensité I du courant dans le circuit.\n2. Calculer la quantité d'électricité Q ayant traversé le circuit.\n3. En déduire le nombre n d'électrons ayant circulé (e = 1,6 × 10⁻¹⁹ C).",
        "methodSteps": [
          "Étape 1 : Calculer l'intensité I par la formule de lecture : I = (Calibre × Lecture) / Échelle = (500 mA × 72) / 100 = 360 mA = 0,36 A.",
          "Étape 2 : Convertir la durée en secondes : Δt = 5,0 min = 5,0 × 60 = 300 s.",
          "Étape 3 : Calculer la quantité d'électricité Q : Q = I × Δt = 0,36 A × 300 s = 108 C.",
          "Étape 4 : Déterminer le nombre d'électrons n : n = Q / e = 108 / (1,6 × 10⁻¹⁹) = 6,75 × 10²⁰ électrons."
        ],
        "conclusion": "Le courant est de 0,36 A, la charge globale transportée est de 108 C et cela correspond au flux de 6,75 × 10²⁰ électrons."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch7_p1_ex1",
          "type": "mcq",
          "prompt": "Quel est le sens conventionnel du courant électrique à l'extérieur du générateur ?",
          "options": [
            "De la borne positive (+) vers la borne négative (−)",
            "De la borne négative (−) vers la borne positive (+)",
            "Du récepteur vers la masse du circuit",
            "Aléatoire selon la température du conducteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par convention internationale établie par Ampère, le courant électrique sort de la borne positive (+) et entre par la borne négative (−) du générateur à l'extérieur de celui-ci (sens inverse du mouvement des électrons)."
        },
        {
          "id": "seconde_c_physique_ch7_p1_ex2",
          "type": "mcq",
          "prompt": "Quelle est la quantité d'électricité transportée par 5,0 × 10¹⁹ électrons (e = 1,6 × 10⁻¹⁹ C) ?",
          "options": [
            "8,0 C",
            "3,125 C",
            "80 C",
            "0,80 C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Q = n · e = (5,0 × 10¹⁹) × (1,6 × 10⁻¹⁹) = 5,0 × 1,6 = 8,0 C."
        },
        {
          "id": "seconde_c_physique_ch7_p1_ex3",
          "type": "mcq",
          "prompt": "Un conducteur est traversé par une quantité d'électricité de Q = 720 C en 2 minutes. Quelle est l'intensité du courant continu ?",
          "options": [
            "6,0 A",
            "360 A",
            "12 A",
            "1 440 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Convertissons la durée en secondes : Δt = 2 min = 120 s. L'intensité vaut I = Q / Δt = 720 / 120 = 6,0 A."
        },
        {
          "id": "seconde_c_physique_ch7_p1_ex4",
          "type": "mcq",
          "prompt": "Comment doit être inséré un ampèremètre pour mesurer l'intensité du courant dans un dipôle ?",
          "options": [
            "En série avec le dipôle",
            "En dérivation aux bornes du dipôle",
            "En dérivation aux bornes du générateur uniquement",
            "Entre la borne positive et la carcasse métallique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour être traversé par le même flux de charges que le dipôle étudié, l'ampèremètre doit impérativement être branché en série."
        },
        {
          "id": "seconde_c_physique_ch7_p1_ex5",
          "type": "mcq",
          "prompt": "Sur un ampèremètre à aiguille de calibre 3 A comportant 100 divisions, l'aiguille s'arrête sur la graduation 45. Quelle est l'intensité mesurée ?",
          "options": [
            "1,35 A",
            "0,45 A",
            "1,50 A",
            "0,15 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par la formule de lecture : I = (Calibre × Lecture) / Échelle = (3 × 45) / 100 = 135 / 100 = 1,35 A."
        },
        {
          "id": "seconde_c_physique_ch7_p1_ex6",
          "type": "mcq",
          "prompt": "On désire mesurer un courant continu estimé à environ 180 mA. On dispose des calibres suivants : 5 A ; 1 A ; 200 mA ; 20 mA. Quel est le calibre le plus approprié ?",
          "options": [
            "200 mA",
            "20 mA",
            "1 A",
            "5 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calibre de 200 mA est immédiatement supérieur à 180 mA. Il permet d'obtenir la déviation maximale de l'aiguille (meilleure précision) sans dépasser la limite de l'appareil (le calibre 20 mA saturerait l'appareil)."
        },
        {
          "id": "seconde_c_physique_ch7_p1_ex7",
          "type": "mcq",
          "prompt": "Un courant de 2,0 A traverse une lampe. Quel est le débit d'électrons dans le filament (e = 1,6 × 10⁻¹⁹ C) ?",
          "options": [
            "1,25 × 10¹⁹ électrons par seconde",
            "3,2 × 10⁻¹⁹ électrons par seconde",
            "2,0 × 10¹⁹ électrons par seconde",
            "8,0 × 10¹⁸ électrons par seconde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le débit d'électrons est D = I / e = 2,0 / (1,6 × 10⁻¹⁹) = 1,25 × 10¹⁹ électrons/s."
        },
        {
          "id": "seconde_c_physique_ch7_p1_ex8",
          "type": "mcq",
          "prompt": "Quelle est la quantité d'électricité transportée par 1 mole d'ions cuivre(II) Cu²⁺ en solution aqueuse (NA = 6,02 × 10²³ mol⁻¹, e = 1,6 × 10⁻¹⁹ C) ?",
          "options": [
            "192 640 C (soit 2 NA·e)",
            "96 320 C (soit NA·e)",
            "48 160 C",
            "3,85 × 10⁵ C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque ion Cu²⁺ porte une charge q = +2e. Pour une mole d'ions Cu²⁺, la charge totale transportée est Q = 2 × NA × e = 2 × (6,02 × 10²³) × (1,6 × 10⁻¹⁹) ≈ 192 640 C."
        }
      ]
    },
    {
      "id": "seconde_c_physique_ch7_p2_proprietes_courant_loi_des_noeuds",
      "order": 2,
      "title": "Propriétés du courant dans un circuit, branches et loi des nœuds",
      "summary": "Comprendre l'unicité du courant dans une branche et maîtriser la loi des nœuds pour déterminer des intensités inconnues dans les circuits ramifiés.",
      "conceptExplanation": "1. Notions de nœud, de branche et de maille :\n- Nœud : point de connexion commun à au moins trois conducteurs (fils ou dipôles).\n- Branche : portion d'un circuit électrique comprise entre deux nœuds consécutifs. Une branche est constituée de dipôles connectés en série.\n- Branche principale : branche qui contient le générateur de tension.\n- Branches dérivées : branches connectées en parallèle sur les nœuds principaux.\n\n2. Unicité de l'intensité dans une branche :\nDans une branche (ou dans un circuit série sans dérivation), l'intensité du courant électrique est STRICTEMENT LA MÊME en tout point. L'ordre des dipôles branchés en série n'a aucune influence sur l'intensité du courant qui les traverse.\n\n3. Loi des nœuds (conservation de la charge électrique) :\nLa charge électrique ne peut ni s'accumuler en un point du circuit, ni disparaître. Par conséquent, en tout nœud d'un réseau électrique :\nLa somme des intensités des courants arrivant à un nœud est rigoureusement égale à la somme des intensités des courants qui en partent :\nΣ I_arrivant = Σ I_partant.\nExemple classique : pour un nœud où arrive le courant principal I et d'où partent les courants I₁ et I₂ :\nI = I₁ + I₂.\n\n4. Méthode pour résoudre un circuit ramifié :\n- Étape 1 : Identifier tous les nœuds du montage (lettrage A, B, C...).\n- Étape 2 : Flécher le sens du courant dans chaque branche.\n- Étape 3 : Écrire l'équation de la loi des nœuds pour chaque nœud (courants entrants d'un côté de l'égalité, courants sortants de l'autre).\n- Étape 4 : Résoudre le système d'équations pour déterminer les intensités inconnues.",
      "formulas": [
        {
          "name": "Loi des nœuds",
          "formula": "Σ I_arrivant = Σ I_partant",
          "note": "En tout nœud, somme des courants entrants = somme des courants sortants."
        },
        {
          "name": "Unicité dans une branche",
          "formula": "I_amont = I_aval = constante",
          "note": "L'intensité ne faiblit pas le long d'une même branche."
        },
        {
          "name": "Division du courant en deux branches",
          "formula": "I = I₁ + I₂",
          "note": "Le courant principal se partage entre les dérivations."
        }
      ],
      "keyRule": "Un ampèremètre placé n'importe où dans une même branche mesure la même intensité. À un nœud, un courant qui entre est TOUJOURS positif dans la somme entrante : si un calcul d'intensité donne un résultat négatif, cela signifie simplement que le courant circule dans le sens opposé à la flèche choisie initialement.",
      "workedExample": {
        "title": "Exemple résolu : Calcul des intensités dans un nœud triple",
        "statement": "À un nœud K d'un circuit électrique arrivent trois conducteurs transportant les courants I₁ = 2,5 A, I₂ = 1,8 A et I₃. Deux autres conducteurs partent de ce nœud et transportent I₄ = 3,2 A et I₅ = 2,6 A.\n1. Écrire la loi des nœuds au point K en supposant que I₃ arrive au nœud.\n2. Calculer l'intensité I₃ et confirmer son sens.",
        "methodSteps": [
          "Étape 1 : Identifier les courants qui arrivent au nœud K : I₁, I₂ et I₃.",
          "Étape 2 : Identifier les courants qui partent du nœud K : I₄ et I₅.",
          "Étape 3 : Poser l'égalité de la loi des nœuds : I₁ + I₂ + I₃ = I₄ + I₅.",
          "Étape 4 : Remplacer par les valeurs numériques : 2,5 + 1,8 + I₃ = 3,2 + 2,6 ⇔ 4,3 + I₃ = 5,8.",
          "Étape 5 : Isoler I₃ : I₃ = 5,8 − 4,3 = 1,5 A."
        ],
        "conclusion": "L'intensité I₃ vaut 1,5 A. Le signe étant positif, le courant I₃ arrive bien effectivement vers le nœud K."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch7_p2_ex1",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on un nœud dans un circuit électrique ?",
          "options": [
            "Un point de jonction reliant au moins trois fils conducteurs",
            "L'interrupteur qui commande l'ouverture du circuit",
            "La borne positive de la pile d'alimentation",
            "Le filament d'une lampe à incandescence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition en électrocinétique, un nœud est un point de connexion commun à plus de deux conducteurs (au moins 3 conducteurs)."
        },
        {
          "id": "seconde_c_physique_ch7_p2_ex2",
          "type": "mcq",
          "prompt": "Dans un circuit en série comportant une pile, une résistance et une lampe, comment varie l'intensité du courant entre l'entrée de la résistance et la sortie de la lampe ?",
          "options": [
            "L'intensité est rigoureusement identique en tout point du circuit",
            "L'intensité diminue après avoir traversé la résistance",
            "L'intensité augmente après la lampe",
            "L'intensité est nulle entre la résistance et la lampe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans une branche ou un circuit série, le courant ne s'use pas : il y a conservation intégrale des porteurs de charge, l'intensité est la même en tout point."
        },
        {
          "id": "seconde_c_physique_ch7_p2_ex3",
          "type": "mcq",
          "prompt": "Un générateur débite un courant principal de I = 1,4 A dans un nœud qui alimente trois lampes en dérivation. On mesure I₁ = 0,50 A et I₂ = 0,25 A. Quelle est l'intensité I₃ traversant la 3e lampe ?",
          "options": [
            "0,65 A",
            "0,75 A",
            "1,15 A",
            "0,35 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la loi des nœuds : I = I₁ + I₂ + I₃ ⇒ I₃ = I − (I₁ + I₂) = 1,4 − (0,50 + 0,25) = 1,4 − 0,75 = 0,65 A."
        },
        {
          "id": "seconde_c_physique_ch7_p2_ex4",
          "type": "mcq",
          "prompt": "À un nœud P arrivent deux courants I₁ = 4 A et I₂ = 6 A. Trois courants en repartent : I₃ = 3 A, I₄ = 5 A et I₅. Que vaut I₅ ?",
          "options": [
            "2 A",
            "4 A",
            "8 A",
            "1 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Σ I_arrivant = Σ I_partant ⇒ I₁ + I₂ = I₃ + I₄ + I₅ ⇒ 4 + 6 = 3 + 5 + I₅ ⇒ 10 = 8 + I₅ ⇒ I₅ = 2 A."
        },
        {
          "id": "seconde_c_physique_ch7_p2_ex5",
          "type": "mcq",
          "prompt": "La loi des nœuds est une conséquence fondamentale de quel principe de la physique ?",
          "options": [
            "La conservation de la charge électrique",
            "La conservation de l'énergie thermique",
            "La réfraction de la lumière",
            "Le principe d'Archimède"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme les charges électriques ne peuvent ni être créées, ni être détruites, ni s'accumuler en un point du conducteur, tout ce qui entre dans un nœud doit obligatoirement en ressortir (conservation de la charge)."
        },
        {
          "id": "seconde_c_physique_ch7_p2_ex6",
          "type": "mcq",
          "prompt": "Dans un montage en dérivation à deux branches identiques, le courant principal vaut I = 0,80 A. Quelle est l'intensité qui traverse chaque branche ?",
          "options": [
            "0,40 A dans chaque branche",
            "0,80 A dans chaque branche",
            "1,60 A dans chaque branche",
            "0,20 A dans chaque branche"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si les deux branches réceptrices sont identiques, le courant se répartit équitablement : I₁ = I₂ = I / 2 = 0,80 / 2 = 0,40 A."
        },
        {
          "id": "seconde_c_physique_ch7_p2_ex7",
          "type": "mcq",
          "prompt": "Soit un nœud où trois courants sont fléchés arrivant : I₁ = 5 A, I₂ = 3 A et I₃. Aucun courant n'est fléché partant. Que vaut I₃ d'après la loi des nœuds ?",
          "options": [
            "−8 A (le courant part en réalité du nœud)",
            "+8 A",
            "0 A",
            "Impossible à déterminer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La somme des courants arrivant doit être égale à la somme des courants partant : I₁ + I₂ + I₃ = 0 ⇒ 5 + 3 + I₃ = 0 ⇒ I₃ = −8 A. Le signe négatif indique qu'en réalité ce courant part du nœud avec une valeur absolue de 8 A."
        },
        {
          "id": "seconde_c_physique_ch7_p2_ex8",
          "type": "mcq",
          "prompt": "Si l'on ajoute une branche supplémentaire en dérivation dans un circuit domestique alimenté sous tension constante, que devient l'intensité du courant principal fourni par le compteur ?",
          "options": [
            "Elle augmente car elle est égale à la somme des courants de toutes les dérivations",
            "Elle diminue car la résistance totale augmente",
            "Elle reste exactement constante",
            "Elle devient nulle par sécurité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque nouvel appareil branché en dérivation appelle son propre courant I_k. D'après la loi des nœuds, le courant principal I_total = Σ I_k augmente à chaque appareil supplémentaire mis en marche."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 8 : TENSION ÉLECTRIQUE
// ============================================================================
export const physique2deCTensionElectriqueChapter: CurriculumChapter = {
  "id": "seconde_c_physique_ch8_tension_electrique",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 8,
  "officialVolumeHours": 6,
  "title": "Leçon 8 — Tension électrique",
  "summary": "Définition de la tension U_AB = V_A − V_B, caractère algébrique, lois des tensions en série et en dérivation, et mesure à l'oscilloscope (tensions continue et alternative sinusoïdale).",
  "points": [
    {
      "id": "seconde_c_physique_ch8_p1_notion_tension_lois_tensions_continues",
      "order": 1,
      "title": "Notion de tension, différence de potentiel et lois des circuits continus",
      "summary": "Définir la tension U_AB comme différence d'état électrique, maîtriser son caractère algébrique et appliquer les lois d'additivité (série) et d'unicité (dérivation).",
      "conceptExplanation": "1. Notion de tension électrique et différence de potentiel :\nLe courant électrique circule entre deux points d'un circuit parce que ces deux points ne se trouvent pas dans le même état électrique. La différence d'état électrique entre deux points A et B est appelée tension électrique ou différence de potentiel (d.d.p.) :\nU_AB = V_A − V_B.\n- V_A est le potentiel électrique au point A et V_B le potentiel au point B.\n- L'unité légale de tension électrique est le volt (symbole : V).\n- Représentation conventionnelle : la tension U_AB se représente par un segment fléché orienté de la deuxième lettre vers la première, c'est-à-dire de B vers A.\n\n2. Caractère algébrique de la tension électrique :\nLa tension est une grandeur algébrique (elle peut être positive, négative ou nulle) :\nU_BA = V_B − V_A = − (V_A − V_B) = − U_AB.\nExemple : si U_AB = +4,5 V, alors U_BA = −4,5 V.\n\n3. La masse d'un circuit électrique :\nLa masse d'un circuit est un conducteur commun pris comme référence de potentiel zéro : V_masse = 0 V.\nLa tension mesurée entre un point A quelconque et la masse est directement égale au potentiel de ce point : U_AM = V_A − 0 = V_A.\n\n4. Lois des tensions continues :\n- Additivité des tensions dans un circuit en série (loi des mailles) :\nEntre les extrémités d'une association de dipôles en série, la tension globale est égale à la somme des tensions aux bornes de chaque dipôle :\nU_AC = U_AB + U_BC.\nPlus généralement sur une maille fermée : la somme algébrique des tensions le long d'une maille orientée est nulle (loi des mailles).\n- Égalité des tensions dans un circuit en dérivation (parallèle) :\nLes dipôles branchés en dérivation entre deux mêmes nœuds A et B sont soumis à la MÊME tension électrique :\nU_branche1 = U_branche2 = U_générateur = U_AB.\n- Tension aux bornes d'un fil conducteur parfait : nulle (U_fil = 0 V car V_amont = V_aval).\n- Tension aux bornes d'un interrupteur : U_ouvert = E (tension du générateur), U_fermé = 0 V (assimilable à un fil).",
      "formulas": [
        {
          "name": "Définition de la tension électrique",
          "formula": "U_AB = V_A − V_B",
          "note": "Différence de potentiel entre les points A et B (en volts V)."
        },
        {
          "name": "Caractère algébrique de la tension",
          "formula": "U_BA = − U_AB",
          "note": "Inverser les bornes inverse le signe de la valeur mesurée."
        },
        {
          "name": "Loi d'additivité des tensions (circuit série)",
          "formula": "U_AC = U_AB + U_BC",
          "note": "La tension totale est la somme des tensions intermédiaires."
        },
        {
          "name": "Égalité des tensions en dérivation",
          "formula": "U_PN = U₁ = U₂",
          "note": "Deux dipôles montés en parallèle ont toujours la même tension."
        }
      ],
      "keyRule": "Un voltmètre se branche STRICTEMENT EN DÉRIVATION aux bornes du dipôle à mesurer. Pour mesurer U_AB, la borne V (+) doit être reliée au point A et la borne COM (−) doit être reliée au point B. Si on inverse les bornes, le voltmètre affiche une valeur opposée négative.",
      "workedExample": {
        "title": "Exemple résolu : Calcul des tensions dans un circuit mixte",
        "statement": "On considère un circuit où un générateur maintient une tension U_AD = 12,0 V. Entre A et D se trouvent en série un conducteur R₁ (bornes A et B), un ensemble en dérivation {R₂, R₃} (bornes B et C) et une lampe L (bornes C et D). On mesure U_AB = 3,5 V et U_CD = 4,2 V.\n1. Calculer la tension U_BC aux bornes de la dérivation.\n2. En déduire la tension aux bornes de chaque résistance R₂ et R₃.",
        "methodSteps": [
          "Étape 1 : Appliquer la loi d'additivité des tensions sur la branche principale en série : U_AD = U_AB + U_BC + U_CD.",
          "Étape 2 : Isoler la tension inconnue U_BC : U_BC = U_AD − U_AB − U_CD.",
          "Étape 3 : Remplacer par les valeurs numériques : U_BC = 12,0 − 3,5 − 4,2 = 4,3 V.",
          "Étape 4 : Utiliser la propriété des dipôles en dérivation : les résistances R₂ et R₃ sont montées en parallèle entre les nœuds B et C, elles sont donc soumises à la même tension que l'ensemble : U_R2 = U_R3 = U_BC = 4,3 V."
        ],
        "conclusion": "La tension aux bornes de la dérivation est U_BC = 4,3 V et chaque résistor en parallèle reçoit exactement 4,3 V."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch8_p1_ex1",
          "type": "mcq",
          "prompt": "Comment se branche un voltmètre pour mesurer la tension aux bornes d'une lampe ?",
          "options": [
            "En dérivation (parallèle) aux bornes de la lampe",
            "En série avant la lampe",
            "En série après la lampe",
            "Entre la borne positive et la carcasse sans toucher la lampe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le voltmètre possède une résistance interne extrêmement grande : il se branche toujours en dérivation aux bornes du composant dont on veut connaître la tension."
        },
        {
          "id": "seconde_c_physique_ch8_p1_ex2",
          "type": "mcq",
          "prompt": "Si le potentiel électrique au point A est VA = 9,0 V et au point B est VB = 2,5 V, que vaut la tension U_BA ?",
          "options": [
            "−6,5 V",
            "+6,5 V",
            "+11,5 V",
            "−11,5 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "U_BA = VB − VA = 2,5 − 9,0 = −6,5 V (ou U_BA = −U_AB = −(9,0 − 2,5) = −6,5 V)."
        },
        {
          "id": "seconde_c_physique_ch8_p1_ex3",
          "type": "mcq",
          "prompt": "Quelle est la tension aux bornes d'un interrupteur ouvert dans un circuit alimenté par une pile de f.é.m. E = 4,5 V ?",
          "options": [
            "4,5 V",
            "0 V",
            "−4,5 V",
            "Infinie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque l'interrupteur est ouvert, aucun courant ne circule, la tension aux bornes des autres dipôles est nulle et l'interrupteur ouvert supporte la totalité de la tension du générateur (U = E = 4,5 V)."
        },
        {
          "id": "seconde_c_physique_ch8_p1_ex4",
          "type": "mcq",
          "prompt": "Trois lampes identiques sont montées en série aux bornes d'un générateur délivrant 12 V. Quelle est la tension aux bornes de chaque lampe ?",
          "options": [
            "4 V",
            "12 V",
            "36 V",
            "0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En série, la tension totale s'additionne : U = U₁ + U₂ + U₃. Comme les lampes sont identiques, U₁ = U₂ = U₃ = 12 / 3 = 4 V."
        },
        {
          "id": "seconde_c_physique_ch8_p1_ex5",
          "type": "mcq",
          "prompt": "Deux lampes L₁ et L₂ sont branchées en dérivation aux bornes d'une batterie de voiture de 12 V. Que vaut la tension aux bornes de L₂ ?",
          "options": [
            "12 V",
            "6 V",
            "24 V",
            "0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans un circuit en dérivation, la tension est rigoureusement identique aux bornes de chaque branche : U_L2 = U_L1 = U_batterie = 12 V."
        },
        {
          "id": "seconde_c_physique_ch8_p1_ex6",
          "type": "mcq",
          "prompt": "Que vaut conventionnellement le potentiel électrique de la masse d'un circuit ?",
          "options": [
            "0 V",
            "1 V",
            "La valeur de la tension de la pile",
            "Une valeur indéterminée dépendante de la résistance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La masse est le conducteur de référence choisi conventionnellement avec un potentiel nul : V_masse = 0 V."
        },
        {
          "id": "seconde_c_physique_ch8_p1_ex7",
          "type": "mcq",
          "prompt": "Dans une branche fermée sans générateur, on a U_AB = 3 V et U_BC = 5 V. Quelle est la tension U_CA ?",
          "options": [
            "−8 V",
            "+8 V",
            "+2 V",
            "−2 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "U_AC = U_AB + U_BC = 3 + 5 = 8 V. Donc U_CA = −U_AC = −8 V."
        },
        {
          "id": "seconde_c_physique_ch8_p1_ex8",
          "type": "mcq",
          "prompt": "Quelle est la tension mesurée entre les deux extrémités d'un fil de connexion en cuivre parfait traversé par un courant de 2 A ?",
          "options": [
            "0 V",
            "2 V",
            "0,5 V",
            "Dépendante de la longueur du fil"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour un fil conducteur idéal de résistance nulle (R = 0), la différence de potentiel à ses bornes est rigoureusement nulle : U_fil = 0 V."
        }
      ]
    },
    {
      "id": "seconde_c_physique_ch8_p2_visualisation_oscilloscope_sinusoidale",
      "order": 2,
      "title": "Visualisation et mesure d'une tension à l'oscilloscope",
      "summary": "Maîtriser les réglages de l'oscilloscope (sensibilité verticale s_v, base de temps b) et déterminer les grandeurs d'une tension continue ou alternative sinusoïdale (T, N, Umax, Ueff).",
      "conceptExplanation": "1. Présentation de l'oscilloscope cathodique ou numérique :\nL'oscilloscope est un appareil de mesure qui permet de visualiser et d'analyser l'évolution d'une tension électrique au cours du temps (oscillogramme).\n- Entrée verticale (voie Y) : connectée aux bornes du dipôle (borne rouge/âme au point chaud, borne noire/tresse à la masse).\n- Sensibilité verticale (gain s_v ou k_v) : exprimée en volts par division (V/div) ou en V/cm.\n- Balayage horizontal (base de temps b ou k_h) : fait défiler le spot de gauche à droite à vitesse constante. Exprimé en secondes par division (s/div) ou millisecondes par division (ms/div).\n\n2. Mesure d'une tension continue à l'oscilloscope :\nLorsque le balayage est activé, une tension continue se traduit par un trait horizontal dévié de d divisions par rapport à la ligne centrale zéro :\n|U| = s_v × d.\n- Déviation vers le haut : tension positive (U > 0).\n- Déviation vers le bas : tension négative (U < 0).\nExemple : s_v = 2 V/div et déviation de 3 divisions vers le haut ⇒ U = + (2 × 3) = +6 V.\n\n3. Caractéristiques d'une tension alternative sinusoïdale :\nUne tension alternative sinusoïdale prend successivement des valeurs positives et négatives, symétriques par rapport au zéro.\n- Période T : plus petit intervalle de temps au bout duquel le motif se reproduit identique à lui-même :\nT = b × d_h.\n(b : base de temps en s/div, d_h : nombre de divisions horizontales pour un motif complet en div). Unité légale : la seconde (s).\n- Fréquence N (ou f) : nombre de motifs par seconde, inverse de la période :\nN = 1 / T en Hertz (Hz).\n- Tension maximale (amplitude) U_max : valeur crête la plus haute atteinte par le signal par rapport à l'axe zéro :\nU_max = s_v × d_v  ou  U_max = U_cc / 2 (avec U_cc tension crête à crête).\n- Tension efficace U_eff (ou U) : tension continue produisant le même effet thermique dans une résistance. C'est la tension affichée par un voltmètre en mode alternatif (AC) :\nU_eff = U_max / √2  ≈ U_max / 1,414  ⇔  U_max = U_eff × √2.\nExemple en Côte d'Ivoire : la tension secteur domestique a une valeur efficace U_eff = 220 V ou 230 V, ce qui correspond à une valeur maximale U_max = 220 × 1,414 ≈ 311 V.",
      "formulas": [
        {
          "name": "Tension continue à l'oscilloscope",
          "formula": "U = ± (s_v × d)",
          "note": "+ si vers le haut, − si vers le bas."
        },
        {
          "name": "Période temporelle",
          "formula": "T = b × d_h",
          "note": "b en s/div ou ms/div, d_h en divisions."
        },
        {
          "name": "Fréquence du signal",
          "formula": "N = 1 / T",
          "note": "T en secondes (s), N en hertz (Hz)."
        },
        {
          "name": "Relation tension maximale et efficace",
          "formula": "U_eff = U_max / √2",
          "note": "Valable exclusivement pour une tension alternative sinusoïdale."
        }
      ],
      "keyRule": "Attention aux unités lors du calcul de la fréquence : la période T calculée en millisecondes (ms) doit OBLIGATOIREMENT être convertie en secondes (1 ms = 10⁻³ s = 0,001 s) avant de poser N = 1 / T. De même, la tension crête à crête U_cc couvre le haut et le bas de la courbe, donc U_max = U_cc / 2.",
      "workedExample": {
        "title": "Exemple résolu : Exploitation complète d'un oscillogramme sinusoïdal",
        "statement": "On observe sur un écran d'oscilloscope une tension alternative sinusoïdale avec les réglages suivants :\n- Sensibilité verticale : s_v = 5 V/div\n- Base de temps : b = 2 ms/div\nSur l'écran, un motif périodique complet s'étend horizontalement sur d_h = 8 divisions et la hauteur totale crête à crête mesure d_v = 4 divisions.\n1. Calculer la tension maximale U_max.\n2. Calculer la tension efficace U_eff.\n3. Déterminer la période T en secondes puis la fréquence N du signal.",
        "methodSteps": [
          "Étape 1 : Calculer la tension crête à crête puis l'amplitude U_max : U_cc = s_v × d_v = 5 V/div × 4 div = 20 V. L'amplitude maximale vaut : U_max = U_cc / 2 = 20 / 2 = 10 V (ou directement U_max = s_v × (4/2) = 5 × 2 = 10 V).",
          "Étape 2 : Calculer la tension efficace : U_eff = U_max / √2 = 10 / 1,414 ≈ 7,07 V.",
          "Étape 3 : Calculer la période T : T = b × d_h = 2 ms/div × 8 div = 16 ms.",
          "Étape 4 : Convertir la période en secondes : T = 16 ms = 16 × 10⁻³ s = 0,016 s.",
          "Étape 5 : Calculer la fréquence N : N = 1 / T = 1 / 0,016 = 62,5 Hz."
        ],
        "conclusion": "La tension étudiée a une amplitude de 10 V, une tension efficace de 7,07 V, une période de 16 ms et une fréquence de 62,5 Hz."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch8_p2_ex1",
          "type": "mcq",
          "prompt": "Sur un oscilloscope, la sensibilité verticale est réglée sur 2 V/div. Le spot lumineux d'une tension continue est dévié de 3,5 divisions vers le haut. Quelle est la valeur de cette tension ?",
          "options": [
            "+7,0 V",
            "−7,0 V",
            "+1,75 V",
            "+5,5 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "U = + (s_v × d) = + (2 V/div × 3,5 div) = +7,0 V."
        },
        {
          "id": "seconde_c_physique_ch8_p2_ex2",
          "type": "mcq",
          "prompt": "Une base de temps est réglée sur b = 5 ms/div. Si une période d'un signal sinusoïdal occupe 4 divisions horizontales, que vaut sa période T ?",
          "options": [
            "20 ms (soit 0,02 s)",
            "1,25 ms",
            "0,8 ms",
            "200 ms"
          ],
          "correctAnswerIndex": 0,
          "explanation": "T = b × d_h = 5 ms/div × 4 div = 20 ms = 0,020 s."
        },
        {
          "id": "seconde_c_physique_ch8_p2_ex3",
          "type": "mcq",
          "prompt": "Quelle est la fréquence N d'une tension sinusoïdale de période T = 20 ms ?",
          "options": [
            "50 Hz",
            "0,05 Hz",
            "500 Hz",
            "20 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "T = 20 ms = 0,020 s. La fréquence vaut N = 1 / T = 1 / 0,020 = 50 Hz (fréquence standard du réseau électrique)."
        },
        {
          "id": "seconde_c_physique_ch8_p2_ex4",
          "type": "mcq",
          "prompt": "Un voltmètre en mode alternatif indique une tension de U = 220 V pour une tension sinusoïdale. Quelle est la tension maximale U_max correspondante ?",
          "options": [
            "Environ 311 V",
            "Environ 155 V",
            "Exactement 220 V",
            "440 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "U_max = U_eff × √2 = 220 × 1,414 ≈ 311 V."
        },
        {
          "id": "seconde_c_physique_ch8_p2_ex5",
          "type": "mcq",
          "prompt": "Si l'amplitude crête à crête mesurée sur un écran est de U_cc = 14 V, quelle est l'amplitude maximale U_max ?",
          "options": [
            "7 V",
            "14 V",
            "28 V",
            "9,9 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La tension crête à crête s'étend de −U_max à +U_max, soit U_cc = 2 U_max. Donc U_max = U_cc / 2 = 14 / 2 = 7 V."
        },
        {
          "id": "seconde_c_physique_ch8_p2_ex6",
          "type": "mcq",
          "prompt": "Si on coupe le balayage horizontal (bouton de balayage sur arrêt / mode XY) lors de la visualisation d'une tension sinusoïdale, qu'observe-t-on sur l'écran ?",
          "options": [
            "Un segment de droite vertical centré sur l'origine",
            "Un point lumineux immobile au centre",
            "Une ligne horizontale continue",
            "Un cercle lumineux parfait"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans balayage horizontal, le spot ne défile plus vers la droite : il oscille uniquement verticalement de bas en haut entre −U_max et +U_max, dessinant un segment vertical lumineux."
        },
        {
          "id": "seconde_c_physique_ch8_p2_ex7",
          "type": "mcq",
          "prompt": "Un signal a une fréquence N = 400 Hz. Quelle est sa période T ?",
          "options": [
            "2,5 ms (soit 2,5 × 10⁻³ s)",
            "4,0 ms",
            "0,25 s",
            "0,4 ms"
          ],
          "correctAnswerIndex": 0,
          "explanation": "T = 1 / N = 1 / 400 = 0,0025 s = 2,5 × 10⁻³ s = 2,5 ms."
        },
        {
          "id": "seconde_c_physique_ch8_p2_ex8",
          "type": "mcq",
          "prompt": "Quel bouton de l'oscilloscope permet d'éliminer la composante continue d'un signal pour n'observer que sa partie alternative ?",
          "options": [
            "Le couplage AC",
            "Le couplage DC",
            "La mise à la masse GND",
            "Le réglage FOCUS"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le mode AC insère un condensateur de découplage en série qui bloque la composante continue et ne transmet que la partie variable/alternative du signal."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 9 : ÉTUDE EXPÉRIMENTALE DE QUELQUES DIPÔLES PASSIFS
// ============================================================================
export const physique2deCDipolesPassifsChapter: CurriculumChapter = {
  "id": "seconde_c_physique_ch9_dipoles_passifs",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 9,
  "officialVolumeHours": 8,
  "title": "Leçon 9 — Étude expérimentale de quelques dipôles passifs",
  "summary": "Définition d'un dipôle passif, conducteur ohmique (loi d'Ohm, conductance, code des couleurs), associations série et dérivation, et étude des dipôles non linéaires (diode à jonction, diode Zener, DEL, lampe).",
  "points": [
    {
      "id": "seconde_c_physique_ch9_p1_conducteur_ohmique_loi_ohm_associations",
      "order": 1,
      "title": "Conducteur ohmique : loi d'Ohm, code couleur et associations de résistances",
      "summary": "Caractériser le dipôle passif linéaire, vérifier la loi d'Ohm U = R·I, déterminer la résistance par anneaux de couleur et calculer les résistances équivalentes.",
      "conceptExplanation": "1. Définition générale d'un dipôle passif :\nUn dipôle est dit passif si la tension entre ses bornes est strictement nulle lorsqu'il n'est relié à aucun générateur (en circuit ouvert : I = 0 ⇒ U = 0 V). Sa caractéristique passe obligatoirement par l'origine O(0, 0).\nConvention récepteur : pour un dipôle passif, la flèche tension U_AB et la flèche intensité I_AB sont représentées en sens contraires.\n\n2. Caractéristique d'un conducteur ohmique (résistor) :\nLe tracé de la tension U_AB en fonction de l'intensité I_AB donne une droite passant par l'origine dans les deux sens de branchement. C'est donc un dipôle passif, linéaire et symétrique.\n- Loi d'Ohm : la tension est proportionnelle à l'intensité du courant qui traverse le résistor :\nU_AB = R · I_AB.\n- Résistance R : coefficient directeur (pente) de la caractéristique : R = ΔU / ΔI. Unité légale : l'ohm (symbole : Ω).\n- Conductance G : aptitude du conducteur à laisser passer le courant, inverse de la résistance : G = 1 / R. Unité : le siemens (symbole : S).\n\n3. Détermination de la résistance par le code des couleurs :\nLes résistances possèdent des anneaux de couleur normalisés (chiffres a, b, multiplicateur c, tolérance T) :\nR = (10a + b) × 10^c ± T% Ω.\nCode mnémotechnique ('Ne Manger Rien Ou Jeûner Voilà Bien Votre Grande Bonté') :\nNoir=0, Brun=1, Rouge=2, Orange=3, Jaune=4, Vert=5, Bleu=6, Violet=7, Gris=8, Blanc=9.\nAnneau de tolérance : Or = ±5 %, Argent = ±10 %.\nExemple : Jaune (4), Violet (7), Rouge (10²), Or (5 %) ⇒ R = 47 × 10² ± 5 % = 4 700 Ω ± 5 %.\n\n4. Associations de conducteurs ohmiques :\n- Association en série : les résistances sont traversées par le même courant. La résistance équivalente R_e est la somme des résistances individuelles :\nR_e = R₁ + R₂ + ... + R_n = Σ R_i.\n(La résistance équivalente est plus grande que la plus grande des résistances).\n- Association en parallèle (dérivation) : les résistances sont soumises à la même tension. L'inverse de la résistance équivalente est égal à la somme des inverses :\n1 / R_e = 1 / R₁ + 1 / R₂ + ... + 1 / R_n = Σ (1 / R_i).\nPour deux conducteurs en parallèle : R_e = (R₁ × R₂) / (R₁ + R₂).\n(La résistance équivalente est plus petite que la plus petite des résistances).",
      "formulas": [
        {
          "name": "Loi d'Ohm",
          "formula": "U_AB = R · I_AB",
          "note": "U en volts (V), R en ohms (Ω), I en ampères (A)."
        },
        {
          "name": "Conductance électrique",
          "formula": "G = 1 / R",
          "note": "G en siemens (S), R en ohms (Ω)."
        },
        {
          "name": "Résistance équivalente en série",
          "formula": "R_e = R₁ + R₂ + ... + R_n",
          "note": "Addition directe des résistances."
        },
        {
          "name": "Résistance équivalente de deux résistors en dérivation",
          "formula": "R_e = (R₁ × R₂) / (R₁ + R₂)",
          "note": "Produit divisé par la somme."
        }
      ],
      "keyRule": "En série, la résistance totale augmente toujours (R_e > max(R_i)). En parallèle, la résistance totale diminue toujours (R_e < min(R_i)). Pour convertir les mA en A dans la loi d'Ohm, diviser impérativement par 1 000 (ex : 250 mA = 0,250 A).",
      "workedExample": {
        "title": "Exemple résolu : Calcul de résistance équivalente mixte et tension partielle",
        "statement": "On dispose de trois résistances : R₁ = 40 Ω, R₂ = 60 Ω montées en parallèle, et cette association est placée en série avec R₃ = 16 Ω. L'ensemble est alimenté sous une tension totale U = 20 V.\n1. Calculer la résistance équivalente R' de la portion en dérivation {R₁, R₂}.\n2. Calculer la résistance équivalente totale R_e du circuit.\n3. Déterminer l'intensité I du courant principal et la tension U_R3 aux bornes de R₃.",
        "methodSteps": [
          "Étape 1 : Calculer R' pour les deux résistances en dérivation : R' = (R₁ × R₂) / (R₁ + R₂) = (40 × 60) / (40 + 60) = 2 400 / 100 = 24 Ω.",
          "Étape 2 : Calculer la résistance équivalente totale en série avec R₃ : R_e = R' + R₃ = 24 + 16 = 40 Ω.",
          "Étape 3 : Calculer l'intensité I du courant principal fourni par le générateur : I = U / R_e = 20 V / 40 Ω = 0,50 A.",
          "Étape 4 : Calculer la tension aux bornes de R₃ : U_R3 = R₃ × I = 16 Ω × 0,50 A = 8,0 V."
        ],
        "conclusion": "La résistance équivalente totale est de 40 Ω, le courant principal vaut 0,50 A et la tension aux bornes de R₃ est de 8,0 V."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch9_p1_ex1",
          "type": "mcq",
          "prompt": "Pourquoi dit-on qu'un conducteur ohmique est un dipôle linéaire et symétrique ?",
          "options": [
            "Sa caractéristique U = f(I) est une droite passant par l'origine et son comportement est rigoureusement identique quel que soit le sens du courant",
            "Il ne fonctionne que dans un seul sens du courant continu",
            "Sa résistance change de valeur selon la tension appliquée",
            "Il émet de la lumière proportionnellement au courant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un dipôle est linéaire car sa courbe caractéristique est une droite passant par O (U = R·I), et symétrique car son tracé présente une symétrie centrale par rapport à l'origine (même valeur de R en sens direct et inverse)."
        },
        {
          "id": "seconde_c_physique_ch9_p1_ex2",
          "type": "mcq",
          "prompt": "Un conducteur ohmique de résistance R = 150 Ω est traversé par un courant d'intensité I = 40 mA. Quelle est la tension à ses bornes ?",
          "options": [
            "6,0 V",
            "6 000 V",
            "3,75 V",
            "0,27 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Convertissons en ampères : I = 40 mA = 0,040 A. U = R × I = 150 × 0,040 = 6,0 V."
        },
        {
          "id": "seconde_c_physique_ch9_p1_ex3",
          "type": "mcq",
          "prompt": "Quelle est la conductance G d'un conducteur ohmique de résistance R = 200 Ω ?",
          "options": [
            "0,005 S (soit 5 mS)",
            "200 S",
            "0,05 S",
            "50 S"
          ],
          "correctAnswerIndex": 0,
          "explanation": "G = 1 / R = 1 / 200 = 0,005 S (siemens) = 5 mS."
        },
        {
          "id": "seconde_c_physique_ch9_p1_ex4",
          "type": "mcq",
          "prompt": "Une résistance porte les anneaux suivants : Rouge (2), Violet (7), Orange (3) et Or (5 %). Quelle est sa valeur nominale ?",
          "options": [
            "27 000 Ω ± 5 % (27 kΩ)",
            "273 Ω ± 5 %",
            "2 700 Ω ± 5 %",
            "270 kΩ ± 5 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "R = (10a + b) × 10^c = 27 × 10³ Ω = 27 000 Ω = 27 kΩ, avec une tolérance de ±5 %."
        },
        {
          "id": "seconde_c_physique_ch9_p1_ex5",
          "type": "mcq",
          "prompt": "Deux conducteurs ohmiques de résistances R₁ = 30 Ω et R₂ = 20 Ω sont connectés en série. Quelle est la résistance équivalente de cette association ?",
          "options": [
            "50 Ω",
            "12 Ω",
            "600 Ω",
            "10 Ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En série, les résistances s'additionnent : R_e = R₁ + R₂ = 30 + 20 = 50 Ω."
        },
        {
          "id": "seconde_c_physique_ch9_p1_ex6",
          "type": "mcq",
          "prompt": "Deux conducteurs ohmiques de résistances R₁ = 30 Ω et R₂ = 20 Ω sont connectés en dérivation (parallèle). Quelle est la résistance équivalente ?",
          "options": [
            "12 Ω",
            "50 Ω",
            "25 Ω",
            "600 Ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En dérivation pour deux résistances : R_e = (R₁ × R₂) / (R₁ + R₂) = (30 × 20) / (30 + 20) = 600 / 50 = 12 Ω."
        },
        {
          "id": "seconde_c_physique_ch9_p1_ex7",
          "type": "mcq",
          "prompt": "Trois résistances identiques de valeur R = 90 Ω sont branchées en parallèle. Quelle est la résistance équivalente du dipôle ?",
          "options": [
            "30 Ω",
            "270 Ω",
            "90 Ω",
            "10 Ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour n résistances identiques en parallèle : R_e = R / n = 90 / 3 = 30 Ω."
        },
        {
          "id": "seconde_c_physique_ch9_p1_ex8",
          "type": "mcq",
          "prompt": "Un voltmètre mesure U = 12 V aux bornes d'un résistor et un ampèremètre indique I = 0,24 A. Quelle est la puissance P dissipée par effet Joule ?",
          "options": [
            "2,88 W",
            "50 W",
            "0,02 W",
            "144 W"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P = U × I = 12 V × 0,24 A = 2,88 W (ou P = R·I² = 50 × 0,24² = 2,88 W)."
        }
      ]
    },
    {
      "id": "seconde_c_physique_ch9_p2_dipoles_non_lineaires_diodes_lampe",
      "order": 2,
      "title": "Dipôles non linéaires : diodes à jonction, diode Zener et lampe à incandescence",
      "summary": "Comprendre le comportement dissymétrique et non linéaire des diodes, déterminer la tension seuil Us, la tension Zener Uz et analyser la variation thermique d'une lampe.",
      "conceptExplanation": "1. Notions de dipôles non linéaires et dissymétriques :\nUn dipôle est dit non linéaire si sa caractéristique U = f(I) n'est pas une droite. Il est dit dissymétrique si son comportement électrique change selon le sens de branchement dans le circuit (dipôle polarisé ayant une anode A et une cathode K).\n\n2. La diode à jonction au silicium :\n- Symbole : triangle fléché vers une barre verticale (le sens du triangle indique le sens passant direct, de l'anode A vers la cathode K).\n- Sens direct (U_AK > 0) :\n  * Si U_AK < U_s : l'intensité est nulle (I = 0). La diode est dite bloquée (équivalente à un interrupteur ouvert).\n  * Si U_AK ≥ U_s : l'intensité croît très rapidement et la tension reste quasiment stabilisée à U_s. La diode est dite passante (équivalente à un interrupteur fermé avec une chute de tension U_s).\n  * U_s est la tension de seuil : U_s ≈ 0,6 V à 0,7 V pour le silicium, et ≈ 0,2 V à 0,3 V pour le germanium.\n- Sens inverse (U_AK < 0) : l'intensité reste négligeable (I ≈ 0). La diode est bloquée.\n- Diode idéale (parfaite) : modèle théorique où U_s = 0 V (bloquée si U < 0, court-circuit parfait si U ≥ 0).\n- Application majeure : Redressement du courant alternatif. Un pont de 4 diodes (pont de Graetz) redresse les deux alternances d'une tension sinusoïdale en tension redressée double alternance unidirectionnelle.\n\n3. La diode Zener :\n- Sens direct : se comporte exactement comme une diode ordinaire (passante au-delà de U_s ≈ 0,7 V).\n- Sens inverse : bloquée tant que la tension reste comprise entre −U_Z et 0 V (−U_Z < U_AK ≤ 0). En revanche, lorsque U_AK ≤ −U_Z, la diode devient brutalement conductrice par effet Zener et maintient une tension constante U_Z à ses bornes.\n- Application majeure : Stabilisation et régulation des tensions d'alimentation.\n\n4. La diode électroluminescente (DEL ou LED) :\nÉmet de la lumière lorsqu'elle est polarisée en sens direct et que la tension dépasse son seuil d'allumage (U_s compris entre 1,8 V pour le rouge et 3,2 V pour le bleu/blanc).\n\n5. La lampe à incandescence :\n- Sa caractéristique passe par l'origine et présente une symétrie par rapport à O : c'est un dipôle passif, symétrique mais NON LINÉAIRE.\n- La pente ΔU / ΔI augmente au fur et à mesure que l'intensité croît : lorsque le filament chauffe sous l'effet Joule, sa résistance R augmente avec la température.",
      "formulas": [
        {
          "name": "Diode à jonction en sens direct",
          "formula": "U_AK ≥ U_s  (passante)",
          "note": "U_s ≈ 0,6 V pour le silicium."
        },
        {
          "name": "Diode Zener en sens inverse",
          "formula": "U_KA = U_Z  (tension Zener stabilisée)",
          "note": "Utilisée pour réguler la tension aux bornes d'une charge."
        },
        {
          "name": "Résistance thermique d'un filament",
          "formula": "R(T) = R₀ · (1 + α · ΔT)",
          "note": "La résistance augmente avec l'échauffement du tungstène."
        }
      ],
      "keyRule": "Une diode ordinaire ne conduit le courant que dans UN SEUL SENS : de l'anode (+) vers la cathode (−). Si on la branche à l'envers, elle se bloque complètement et coupe le courant (I = 0). La diode Zener, en revanche, est conçue pour être utilisée exprès en polarisation INVERSE pour stabiliser une tension égale à U_Z.",
      "workedExample": {
        "title": "Exemple résolu : Circuit de protection avec une DEL et résistance de limitation",
        "statement": "On alimente une DEL rouge de tension de seuil U_s = 2,0 V à partir d'un générateur de tension continue E = 9,0 V. Pour limiter le courant dans la DEL à I = 20 mA lorsqu'elle éclaire, on place une résistance de protection R_p en série.\n1. Écrire la loi d'additivité des tensions le long de la maille.\n2. Calculer la tension U_Rp aux bornes de la résistance lorsque la DEL est passante.\n3. En déduire la valeur nécessaire pour la résistance de protection R_p.",
        "methodSteps": [
          "Étape 1 : Écrire la loi des mailles pour le circuit série en état passant : E = U_Rp + U_s.",
          "Étape 2 : Isoler la tension U_Rp aux bornes du résistor : U_Rp = E − U_s = 9,0 V − 2,0 V = 7,0 V.",
          "Étape 3 : Convertir l'intensité en ampères : I = 20 mA = 0,020 A.",
          "Étape 4 : Appliquer la loi d'Ohm pour le résistor de protection : R_p = U_Rp / I = 7,0 V / 0,020 A = 350 Ω."
        ],
        "conclusion": "La résistance de protection doit avoir une valeur de 350 Ω pour limiter le courant à 20 mA et éviter de détruire la DEL."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch9_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle est la tension de seuil typique d'une diode à jonction au silicium en sens direct ?",
          "options": [
            "Environ 0,6 V à 0,7 V",
            "Exactement 0 V",
            "Environ 2,0 V à 3,0 V",
            "12 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour une diode au silicium, la conduction démarre à partir d'une tension de seuil Us d'environ 0,6 V à 0,7 V."
        },
        {
          "id": "seconde_c_physique_ch9_p2_ex2",
          "type": "mcq",
          "prompt": "Que vaut l'intensité du courant qui traverse une diode ordinaire branchée en polarisation inverse (sous une tension inférieure à sa tension de claquage) ?",
          "options": [
            "Pratiquement nulle (I ≈ 0 A)",
            "Maximale",
            "Infinie",
            "Égale au courant nominal de la pile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En polarisation inverse, la diode à jonction est bloquée et se comporte comme un isolant ou un interrupteur ouvert : le courant résiduel est quasiment nul."
        },
        {
          "id": "seconde_c_physique_ch9_p2_ex3",
          "type": "mcq",
          "prompt": "Quel composant électrique permet de maintenir une tension quasi constante à ses bornes lorsqu'il est polarisé en sens inverse ?",
          "options": [
            "La diode Zener",
            "Le conducteur ohmique",
            "La lampe à incandescence",
            "L'interrupteur à bilame"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La diode Zener est spécialement fabriquée pour fonctionner en polarisation inverse au-delà de sa tension de claquage Uz (effet Zener), maintenant ainsi une tension de référence rigoureusement stable."
        },
        {
          "id": "seconde_c_physique_ch9_p2_ex4",
          "type": "mcq",
          "prompt": "Pourquoi la caractéristique d'une lampe à incandescence n'est-elle pas une droite linéaire ?",
          "options": [
            "Parce que la résistance de son filament de tungstène augmente lorsque sa température s'élève",
            "Parce que la lampe ne fonctionne qu'avec du courant alternatif",
            "Parce qu'elle contient du gaz isolant qui bloque le courant",
            "Parce que la loi d'Ohm ne s'applique pas aux métaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque l'intensité augmente, le filament s'échauffe par effet Joule. Pour les métaux, la résistivité augmente fortement avec la température, ce qui incurve la caractéristique (pente non constante)."
        },
        {
          "id": "seconde_c_physique_ch9_p2_ex5",
          "type": "mcq",
          "prompt": "Une diode Zener possède une tension de seuil direct Us = 0,7 V et une tension Zener Uz = 6,8 V. Quelle tension apparaît à ses bornes si elle est passante en inverse ?",
          "options": [
            "6,8 V",
            "0,7 V",
            "7,5 V",
            "0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En sens inverse dans son domaine de conduction Zener, la tension aux bornes de la diode est stabilisée à sa tension Zener Uz = 6,8 V."
        },
        {
          "id": "seconde_c_physique_ch9_p2_ex6",
          "type": "mcq",
          "prompt": "Quel montage permet de transformer une tension alternative sinusoïdale en tension redressée double alternance ?",
          "options": [
            "Un pont de quatre diodes (pont de Graetz)",
            "Une diode unique montée en série",
            "Deux résistances montées en dérivation",
            "Un potentiomètre réglé à mi-course"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pont de Graetz constitué de 4 diodes connectées en anneau permet de faire circuler le courant dans la charge toujours dans le même sens quelle que soit l'alternance de la tension d'entrée (redressement double alternance)."
        },
        {
          "id": "seconde_c_physique_ch9_p2_ex7",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une diode idéale (ou modèle de la diode parfaite) ?",
          "options": [
            "Une diode théorique sans tension de seuil (Us = 0 V) et sans résistance interne en sens direct",
            "Une diode qui laisse passer le courant dans les deux sens",
            "Une diode qui produit de l'énergie électrique",
            "Une diode incassable aux surtensions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La diode idéale est un modèle simplifié où la tension de seuil est nulle (Us = 0 V) : elle agit comme un interrupteur parfait fermé en direct et ouvert en inverse."
        },
        {
          "id": "seconde_c_physique_ch9_p2_ex8",
          "type": "mcq",
          "prompt": "Une DEL de tension de seuil Us = 2,2 V est montée en parallèle avec une résistance R = 100 Ω. Pour que la DEL s'allume, quelle condition doit remplir l'intensité minimale I_min délivrée à l'ensemble ?",
          "options": [
            "I_min = 2,2 / 100 = 22 mA",
            "I_min = 100 / 2,2 = 45,4 mA",
            "I_min = 2,2 × 100 = 220 mA",
            "I_min = 0 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tant que la DEL est bloquée, tout le courant traverse la résistance R. La tension U = R·I atteint le seuil d'allumage Us = 2,2 V dès que I_min = Us / R = 2,2 / 100 = 0,022 A = 22 mA."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 10 : ÉTUDE EXPÉRIMENTALE D'UN DIPÔLE ACTIF. POINT DE FONCTIONNEMENT
// ============================================================================
export const physique2deCDipoleActifPointFonctionnementChapter: CurriculumChapter = {
  "id": "seconde_c_physique_ch10_dipole_actif_point_fonctionnement",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 10,
  "officialVolumeHours": 8,
  "title": "Leçon 10 — Étude expérimentale d'un dipôle actif. Point de fonctionnement",
  "summary": "Caractéristique intensité-tension d'une pile U_PN = E − r·I, force électromotrice E, résistance interne r, court-circuit, point de fonctionnement et loi de Pouillet.",
  "points": [
    {
      "id": "seconde_c_physique_ch10_p1_caracteristique_pile_fem_resistance_interne",
      "order": 1,
      "title": "Caractéristique d'une pile : f.é.m. E, résistance interne r et court-circuit",
      "summary": "Définir le dipôle actif, tracer et exploiter l'équation de la caractéristique U_PN = E − r·I, déterminer E et r et calculer le courant de court-circuit I_CC.",
      "conceptExplanation": "1. Définition d'un dipôle actif et convention générateur :\nUn dipôle est dit actif s'il existe une différence de potentiel non nulle entre ses bornes en circuit ouvert (hors de tout circuit électrique). Les dipôles actifs constituent les générateurs d'énergie électrique (piles, accumulateurs, alternateurs, cellules photovoltaïques).\n- Convention générateur : la flèche représentant la tension U_PN et la flèche représentant le courant débité I sont tracées dans le MÊME sens.\n\n2. Caractéristique intensité-tension d'une pile réelle :\nL'étude expérimentale (variation du courant à l'aide d'un rhéostat) montre que la caractéristique U_PN = f(I) est un segment de droite de pente négative ne passant pas par l'origine.\nSon équation mathématique est de la forme :\nU_PN = E − r · I.\n- Force électromotrice (f.é.m.) E : c'est l'ordonnée à l'origine (pour I = 0 A). Elle représente la tension mesurée à vide entre les bornes de la pile. Elle s'exprime en volts (V).\n- Résistance interne r : c'est l'opposé du coefficient directeur (pente négative a) de la droite :\na = ΔU_PN / ΔI = −r  ⇒  r = − (ΔU_PN / ΔI) = (E − U_PN) / I.\nLa résistance interne r s'exprime en ohms (Ω). Elle traduit la perte de tension par effet Joule à l'intérieur de la pile lors du débit.\n\n3. Modèle du générateur idéal de tension :\nSi la résistance interne est nulle (r = 0 Ω), la tension reste rigoureusement constante quel que soit le courant débité :\nU_PN = E = constante.\nLa caractéristique d'un générateur idéal de tension est une droite strictement horizontale.\n\n4. Intensité de courant de court-circuit I_CC :\nLe court-circuit correspond au cas où les bornes P et N de la pile sont reliées par un fil conducteur de résistance quasi nulle (U_PN = 0 V) :\nU_PN = 0  ⇒  E − r · I_CC = 0  ⇒  I_CC = E / r.\n- I_CC est l'abscisse à l'origine de la caractéristique.\n- C'est l'intensité maximale théorique que peut fournir le générateur. En pratique, ce courant très élevé échauffe violemment la pile et peut provoquer son explosion ou sa détérioration irréversible.",
      "formulas": [
        {
          "name": "Loi d'Ohm pour un générateur (pile)",
          "formula": "U_PN = E − r · I",
          "note": "E f.é.m. en V, r résistance interne en Ω, I en A."
        },
        {
          "name": "Calcul de la résistance interne",
          "formula": "r = (E − U_PN) / I = − (ΔU / ΔI)",
          "note": "Valeur positive toujours exprimée en ohms (Ω)."
        },
        {
          "name": "Courant de court-circuit",
          "formula": "I_CC = E / r",
          "note": "Intensité obtenue pour une tension nulle (U_PN = 0 V)."
        },
        {
          "name": "Générateur idéal de tension",
          "formula": "U_PN = E (r = 0)",
          "note": "Tension rigoureusement indépendante du courant débité."
        }
      ],
      "keyRule": "La force électromotrice E se mesure TOUJOURS À VIDE (circuit ouvert, I = 0). Dès que la pile débite du courant dans un circuit fermé, la tension réelle U_PN à ses bornes DIMINUE obligatoirement à cause de la chute de tension ohmique interne r·I (U_PN = E − r·I < E).",
      "workedExample": {
        "title": "Exemple résolu : Détermination de la f.é.m., de la résistance interne et de I_CC",
        "statement": "Une pile électrique a une tension à vide de 4,5 V. Lorsqu'on la branche aux bornes d'un résistor, elle débite un courant I = 0,20 A et la tension entre ses bornes devient U_PN = 4,2 V.\n1. Donner la valeur de sa force électromotrice E.\n2. Calculer sa résistance interne r.\n3. Déterminer l'intensité du courant de court-circuit I_CC.",
        "methodSteps": [
          "Étape 1 : Identifier la f.é.m. E : la tension à vide (I = 0) est égale à la force électromotrice, donc E = 4,5 V.",
          "Étape 2 : Appliquer la formule de la tension en charge : U_PN = E − r·I ⇒ r·I = E − U_PN.",
          "Étape 3 : Isoler et calculer r : r = (E − U_PN) / I = (4,5 − 4,2) / 0,20 = 0,30 / 0,20 = 1,5 Ω.",
          "Étape 4 : Calculer le courant de court-circuit : I_CC = E / r = 4,5 / 1,5 = 3,0 A."
        ],
        "conclusion": "La pile a une f.é.m. de 4,5 V, une résistance interne de 1,5 Ω et son intensité de court-circuit vaut 3,0 A."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch10_p1_ex1",
          "type": "mcq",
          "prompt": "Que représente physiquement la force électromotrice (f.é.m.) E d'une pile ?",
          "options": [
            "La tension mesurée entre ses bornes en circuit ouvert (à vide, I = 0)",
            "L'intensité maximale du courant que la pile peut délivrer",
            "La résistance de son électrolyte interne",
            "La puissance thermique perdue par effet Joule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La force électromotrice E d'un dipôle actif est la tension entre ses bornes lorsqu'il ne débite aucun courant (à vide, I = 0 A)."
        },
        {
          "id": "seconde_c_physique_ch10_p1_ex2",
          "type": "mcq",
          "prompt": "Une pile de f.é.m. E = 9,0 V et de résistance interne r = 2,0 Ω débite une intensité de I = 0,5 A. Quelle est la tension U_PN à ses bornes ?",
          "options": [
            "8,0 V",
            "10,0 V",
            "9,0 V",
            "4,5 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "U_PN = E − r·I = 9,0 − (2,0 × 0,5) = 9,0 − 1,0 = 8,0 V."
        },
        {
          "id": "seconde_c_physique_ch10_p1_ex3",
          "type": "mcq",
          "prompt": "L'équation de la caractéristique d'un générateur est U_PN = 24 − 0,1 · I (unités SI). Quelles sont les valeurs de sa f.é.m. E et de sa résistance interne r ?",
          "options": [
            "E = 24 V et r = 0,1 Ω",
            "E = 0,1 V et r = 24 Ω",
            "E = 24 V et r = −0,1 Ω",
            "E = 240 V et r = 10 Ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par identification avec la relation générale U_PN = E − r·I : l'ordonnée à l'origine est E = 24 V et la résistance interne est r = 0,1 Ω."
        },
        {
          "id": "seconde_c_physique_ch10_p1_ex4",
          "type": "mcq",
          "prompt": "Quelle est l'intensité du courant de court-circuit I_CC d'une pile ayant E = 6,0 V et r = 1,2 Ω ?",
          "options": [
            "5,0 A",
            "7,2 A",
            "0,2 A",
            "50 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En court-circuit, U_PN = 0 V ⇒ I_CC = E / r = 6,0 / 1,2 = 5,0 A."
        },
        {
          "id": "seconde_c_physique_ch10_p1_ex5",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un générateur idéal de tension ?",
          "options": [
            "Un générateur dont la résistance interne est nulle (r = 0), maintenant une tension U = E constante quel que soit le débit",
            "Un générateur qui ne s'use jamais avec le temps",
            "Un générateur qui fournit un courant continu d'intensité infinie sans fil",
            "Une batterie qui n'a pas besoin d'être rechargée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un générateur idéal de tension possède une résistance interne nulle r = 0 Ω, ce qui implique que la tension à ses bornes reste strictement égale à sa f.é.m. E, quelle que soit la valeur du courant débité."
        },
        {
          "id": "seconde_c_physique_ch10_p1_ex6",
          "type": "mcq",
          "prompt": "Une batterie débite 10 A sous une tension de 11,5 V. Sachant que sa tension à vide est de 12,5 V, quelle est sa résistance interne ?",
          "options": [
            "0,10 Ω",
            "1,0 Ω",
            "0,25 Ω",
            "1,25 Ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "r = (E − U) / I = (12,5 − 11,5) / 10 = 1,0 / 10 = 0,10 Ω."
        },
        {
          "id": "seconde_c_physique_ch10_p1_ex7",
          "type": "mcq",
          "prompt": "Pourquoi la tension aux bornes d'une pile réelle s'effondre-t-elle quand on lui demande un courant très intense ?",
          "options": [
            "À cause de la chute de tension interne r·I provoquée par sa résistance interne",
            "Parce que la force électromotrice E s'annule instantanément",
            "Parce que les électrons ralentissent à cause de la lumière",
            "Parce que la loi des mailles ne s'applique plus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après U = E − r·I, plus le courant I débité est grand, plus le terme soustractif r·I augmente, ce qui fait chuter la tension disponible aux bornes de la pile."
        },
        {
          "id": "seconde_c_physique_ch10_p1_ex8",
          "type": "mcq",
          "prompt": "Sur un graphe U_PN = f(I), comment détermine-t-on graphiquement la résistance interne r d'une pile ?",
          "options": [
            "En calculant la valeur absolue de la pente de la droite : r = |ΔU / ΔI|",
            "En lisant directement l'ordonnée à l'origine",
            "En lisant l'abscisse à l'origine",
            "En multipliant la tension maximale par l'intensité maximale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équation est U_PN = −r·I + E. La pente de la droite est a = −r, donc la résistance interne r est l'opposé de la pente : r = −(ΔU / ΔI) = |ΔU / ΔI|."
        }
      ]
    },
    {
      "id": "seconde_c_physique_ch10_p2_point_fonctionnement_loi_de_pouillet",
      "order": 2,
      "title": "Point de fonctionnement d'un circuit et loi de Pouillet",
      "summary": "Déterminer graphiquement et par calcul le point de fonctionnement F(IF, UF) d'une association dipôle actif-récepteur et appliquer la loi de Pouillet aux circuits série.",
      "conceptExplanation": "1. Notion de point de fonctionnement F(I_F, U_F) :\nLorsqu'on connecte un dipôle actif (générateur : pile de f.é.m. E et résistance r) aux bornes d'un dipôle récepteur (passif ou non linéaire), ils s'imposent mutuellement leurs grandeurs électriques :\n- Ils sont traversés par le même courant d'intensité I_F.\n- Ils ont entre leurs bornes la même tension U_F.\nLe couple (I_F, U_F) s'appelle le point de fonctionnement du circuit.\n\n2. Détermination graphique du point de fonctionnement :\nOn trace sur un même repère cartésien avec les mêmes échelles :\n- La caractéristique du dipôle actif : U_PN = E − r·I (droite descendante).\n- La caractéristique du dipôle récepteur : U_AB = f(I) (droite passant par l'origine pour une résistance, ou courbe pour une diode/lampe).\nLe point d'intersection F des deux courbes correspond aux valeurs vérifiant simultanément les équations des deux dipôles : ses coordonnées sont (I_F, U_F).\nCette méthode graphique est indispensable lorsque le récepteur est non linéaire (diode, DEL, lampe).\n\n3. Détermination algébrique (cas d'un conducteur ohmique R) :\nLa pile impose U_PN = E − r·I et le résistor impose U_AB = R·I.\nComme les bornes sont directement reliées (U_PN = U_AB) :\nE − r·I = R·I  ⇒  (R + r) · I = E  ⇒  I_F = E / (R + r).\nLa tension au point de fonctionnement s'obtient alors indifféremment par :\nU_F = R · I_F  ou  U_F = E − r · I_F.\n\n4. Loi de Pouillet (circuit en série comportant plusieurs dipôles) :\nDans un circuit série à une seule maille comportant plusieurs générateurs montés en concordance (dont les f.é.m. s'ajoutent) et plusieurs résistances et résistances internes :\nL'intensité I du courant continu s'obtient en divisant la somme des forces électromotrices par la somme de toutes les résistances du circuit (conducteurs ohmiques + résistances internes) :\nI = (Σ E_i) / (Σ R_j + Σ r_i).\nExemple : deux piles (E₁, r₁) et (E₂, r₂) en série alimentant deux résistances R₁ et R₂ :\nI = (E₁ + E₂) / (R₁ + R₂ + r₁ + r₂).",
      "formulas": [
        {
          "name": "Courant au point de fonctionnement (pile + résistor)",
          "formula": "I_F = E / (R + r)",
          "note": "E en V, R et r en Ω, I_F en A."
        },
        {
          "name": "Tension au point de fonctionnement",
          "formula": "U_F = R · I_F = E − r · I_F",
          "note": "Tension commune aux bornes des deux dipôles."
        },
        {
          "name": "Loi de Pouillet (généralisée)",
          "formula": "I = (Σ E_i) / (Σ R_j + Σ r_i)",
          "note": "Rapport de la somme des f.é.m. sur la somme des résistances totales."
        }
      ],
      "keyRule": "Pour déterminer algébriquement le point de fonctionnement, on écrit TOUJOURS l'égalité des tensions aux bornes du générateur et du récepteur : U_générateur = U_récepteur ⇔ E − r·I = R·I. Pour plusieurs piles branchées en série, vérifier qu'elles sont montées en CONCORDANCE (le pôle + de l'une est relié au pôle − de la suivante).",
      "workedExample": {
        "title": "Exemple résolu : Application de la loi de Pouillet avec deux piles et deux résistances",
        "statement": "On réalise un circuit série comprenant :\n- Deux piles montées en série concordance : E₁ = 4,5 V (r₁ = 1,0 Ω) et E₂ = 1,5 V (r₂ = 0,5 Ω).\n- Deux conducteurs ohmiques : R₁ = 8,5 Ω et R₂ = 14,0 Ω.\n1. Écrire l'expression littérale de l'intensité I du courant d'après la loi de Pouillet.\n2. Calculer la valeur numérique de I.\n3. Calculer la tension disponible aux bornes de chaque résistance.",
        "methodSteps": [
          "Étape 1 : Écrire la loi de Pouillet : I = (E₁ + E₂) / (R₁ + R₂ + r₁ + r₂).",
          "Étape 2 : Calculer la somme des f.é.m. : Σ E = 4,5 + 1,5 = 6,0 V.",
          "Étape 3 : Calculer la somme des résistances : Σ R_tot = R₁ + R₂ + r₁ + r₂ = 8,5 + 14,0 + 1,0 + 0,5 = 24,0 Ω.",
          "Étape 4 : Calculer l'intensité I : I = 6,0 V / 24,0 Ω = 0,25 A = 250 mA.",
          "Étape 5 : Calculer les tensions partielles : U_R1 = R₁ × I = 8,5 × 0,25 = 2,125 V, et U_R2 = R₂ × I = 14,0 × 0,25 = 3,50 V."
        ],
        "conclusion": "L'intensité du courant dans le circuit série est de 0,25 A (250 mA) et les tensions aux bornes des résistances sont respectivement 2,13 V et 3,50 V."
      },
      "exercises": [
        {
          "id": "seconde_c_physique_ch10_p2_ex1",
          "type": "mcq",
          "prompt": "Qu'est-ce que le point de fonctionnement d'un circuit électrique associant un générateur et un récepteur ?",
          "options": [
            "Le couple de valeurs (IF, UF) de l'intensité du courant dans le circuit et de la tension commune aux bornes des deux dipôles",
            "La valeur maximale de la température atteinte par le générateur",
            "Le moment précis où le circuit est allumé",
            "La position physique de l'interrupteur sur la platine d'essai"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le point de fonctionnement F(IF, UF) est l'unique état électrique stable défini par l'intensité IF commune qui traverse les composants et la tension UF commune à leurs bornes."
        },
        {
          "id": "seconde_c_physique_ch10_p2_ex2",
          "type": "mcq",
          "prompt": "Une pile de f.é.m. E = 4,0 V et de résistance interne r = 1,0 Ω est branchée aux bornes d'un résistor R = 15,0 Ω. Quelle est l'intensité IF dans le circuit ?",
          "options": [
            "0,25 A",
            "0,27 A",
            "4,0 A",
            "0,50 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par la loi d'Ohm généralisée : IF = E / (R + r) = 4,0 / (15,0 + 1,0) = 4,0 / 16,0 = 0,25 A."
        },
        {
          "id": "seconde_c_physique_ch10_p2_ex3",
          "type": "mcq",
          "prompt": "Dans le circuit précédent (E = 4 V, r = 1 Ω, R = 15 Ω, IF = 0,25 A), quelle est la tension UF aux bornes de la pile ?",
          "options": [
            "3,75 V",
            "4,0 V",
            "0,25 V",
            "3,50 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "UF = R × IF = 15 × 0,25 = 3,75 V (ou UF = E − r·IF = 4,0 − (1 × 0,25) = 3,75 V)."
        },
        {
          "id": "seconde_c_physique_ch10_p2_ex4",
          "type": "mcq",
          "prompt": "Comment détermine-t-on graphiquement le point de fonctionnement d'une pile associée à un dipôle non linéaire (comme une DEL ou une diode) ?",
          "options": [
            "À l'intersection des courbes caractéristiques du générateur et du récepteur tracées sur le même graphique",
            "En mesurant la surface comprise sous la courbe de la diode",
            "En additionnant les ordonnées à l'origine des deux composants",
            "En divisant la pente de la pile par la pente de la diode"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le point de fonctionnement correspond à l'état où tension et intensité sont simultanément égales pour les deux dipôles, ce qui géométriquement correspond au point d'intersection des deux caractéristiques."
        },
        {
          "id": "seconde_c_physique_ch10_p2_ex5",
          "type": "mcq",
          "prompt": "Selon la loi de Pouillet, comment s'exprime l'intensité I dans un circuit série composé de générateurs et de résistors ?",
          "options": [
            "I = (Σ Ei) / (Σ Rj + Σ ri)",
            "I = (Σ Rj) / (Σ Ei + Σ ri)",
            "I = (Σ Ei) × (Σ Rj)",
            "I = (Σ Ei − Σ ri) / Σ Rj"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La loi de Pouillet stipule que l'intensité s'obtient en divisant la somme des f.é.m. des générateurs en concordance par la somme totale de toutes les résistances (internes et externes) du circuit."
        },
        {
          "id": "seconde_c_physique_ch10_p2_ex6",
          "type": "mcq",
          "prompt": "Deux piles identiques (E = 1,5 V, r = 0,2 Ω) sont montées en série concordance pour alimenter une lampe de résistance R = 5,6 Ω. Que vaut le courant I ?",
          "options": [
            "0,50 A",
            "0,25 A",
            "0,53 A",
            "1,0 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "I = (E₁ + E₂) / (R + r₁ + r₂) = (1,5 + 1,5) / (5,6 + 0,2 + 0,2) = 3,0 / 6,0 = 0,50 A."
        },
        {
          "id": "seconde_c_physique_ch10_p2_ex7",
          "type": "mcq",
          "prompt": "Si l'on augmente la résistance extérieure R d'un circuit alimenté par une pile (E, r), que devient le point de fonctionnement (IF, UF) ?",
          "options": [
            "IF diminue et UF augmente pour se rapprocher de E",
            "IF augmente et UF diminue",
            "IF et UF augmentent tous les deux",
            "IF et UF restent strictement inchangés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Quand R augmente, le dénominateur de IF = E / (R+r) augmente donc IF diminue. Par conséquent, la chute interne r·IF faiblit et la tension disponible UF = E − r·IF augmente pour se rapprocher de la f.é.m. à vide E."
        },
        {
          "id": "seconde_c_physique_ch10_p2_ex8",
          "type": "mcq",
          "prompt": "Un générateur (E = 12 V, r = 2 Ω) est branché sur une résistance de protection Rp = 10 Ω et un potentiomètre réglable Rh (0 à 100 Ω). Quelle est l'intensité maximale que peut débiter le circuit ?",
          "options": [
            "1,0 A (pour Rh = 0 Ω)",
            "6,0 A",
            "0,107 A",
            "0,12 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le courant est maximal lorsque la résistance réglable est minimale (Rh = 0 Ω) : I_max = E / (r + Rp + 0) = 12 / (2 + 10) = 12 / 12 = 1,0 A."
        }
      ]
    }
  ]
};

// ============================================================================
// EXPORTATION DE TOUS LES CHAPITRES DE PHYSIQUE 2de C (10 LEÇONS OFFICIELLES)
// ============================================================================
export const physique2deCChapters: CurriculumChapter[] = [
  physique2deCLeMouvementChapter,
  physique2deCActionsMecaniquesForcesChapter,
  physique2deCEquilibreDeuxTroisForcesChapter,
  physique2deCPrincipeInertieChapter,
  physique2deCEquilibreSolideAxeFixeChapter,
  physique2deCQuantiteDeMouvementChapter,
  physique2deCIntensiteCourantContinuChapter,
  physique2deCTensionElectriqueChapter,
  physique2deCDipolesPassifsChapter,
  physique2deCDipoleActifPointFonctionnementChapter,
];
