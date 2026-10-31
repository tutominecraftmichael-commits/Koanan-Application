// ============================================================================
// MODULE OFFICIEL : PHYSIQUE 2de C (PHYSIQUE-CHIMIE)
// Ministère de l'Éducation Nationale et de l'Alphabétisation (MENA - Côte d'Ivoire)
// Thème 1 : Mécanique
// Leçon 1 : Le mouvement
// Leçon 2 : Actions mécaniques ou forces
// Leçon 3 : Équilibre d'un solide soumis à deux forces puis à trois forces
// Leçon 4 : Principe de l'inertie
// Leçon 5 : Équilibre d'un solide mobile autour d'un axe fixe
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
// EXPORTATION DE TOUS LES CHAPITRES DE PHYSIQUE 2de C
// ============================================================================
export const physique2deCChapters: CurriculumChapter[] = [
  physique2deCLeMouvementChapter,
  physique2deCActionsMecaniquesForcesChapter,
  physique2deCEquilibreDeuxTroisForcesChapter,
  physique2deCPrincipeInertieChapter,
  physique2deCEquilibreSolideAxeFixeChapter,
];
