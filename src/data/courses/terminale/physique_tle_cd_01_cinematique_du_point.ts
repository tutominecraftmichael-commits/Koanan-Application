import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : Terminales C, D — Thème : Mécanique — Titre : Cinématique du point
export const PHYSIQUE_TLE_CD_L01_CINEMATIQUE_DU_POINT: CurriculumChapter = {
  "id": "terminale_d_physique_l01_cinematique_du_point",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ],
  "order": 1,
  "title": "Leçon 1 : Cinématique du point matériel",
  "summary": "Description spatiotemporelle du mouvement : référentiels d'espace et de temps, vecteur-position, équations horaires et trajectoire cartésienne, vecteur-vitesse instantanée et dérivée temporelle, base de Frenet (vecteurs tangent et normal), vecteur-accélération et décomposition intrinsèque (accélération tangentielle a_tau et normale centripète a_n = v^2/rho), étude complète du Mouvement Rectiligne Uniforme (MRU), du Mouvement Rectiligne Uniformément Varié (MRUV) avec relation indépendante du temps, et du Mouvement Circulaire Uniforme (MCU).",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : Terminales C, D – Thème : Mécanique – Cinématique du point)",
  "points": [
    {
      "id": "terminale_d_physique_l01_cinematique_p01",
      "order": 1,
      "title": "Référentiels, repères d'espace-temps et vecteur-position",
      "summary": "Définition du référentiel, repère d'espace orthonormé (O, i, j, k), repère temporel (t = 0 s), vecteur-position OM(t), coordonnées cartésiennes et équation cartésienne de la trajectoire par élimination de t.",
      "conceptExplanation": "1. Référentiel et repères :\nPour décrire le mouvement d'un point matériel, il est indispensable de définir un solide de référence indéformable appelé référentiel.\n- Le repère d'espace est un système d'axes orthonormés (O, i, j, k) lié rigidement au référentiel, permettant de repérer la position géométrique d'un point mobile M à tout instant.\n- Le repère de temps associe une échelle temporelle munie d'une origine des dates arbitraire (t = 0 s) et d'une unité (la seconde, s).\n\n2. Vecteur-position OM(t) :\nLe vecteur-position est le vecteur joignant l'origine O du repère d'espace au point mobile M à l'instant t :\nOM(t) = x(t) i + y(t) j + z(t) k.\nLes fonctions x(t), y(t) et z(t) sont les équations horaires (ou paramétriques) du mouvement.\nLa distance du point M à l'origine vaut OM = ||OM|| = sqrt(x² + y² + z²).\n\n3. Trajectoire et équation cartésienne :\nLa trajectoire est la courbe géométrique continue décrite par les positions successives occupées par le point mobile au cours du temps. L'équation cartésienne de la trajectoire s'obtient en éliminant la variable temporelle t entre les équations horaires, aboutissant à une relation de la forme y = f(x) ou f(x, y, z) = 0.",
      "keyRule": "Le vecteur-position OM(t) = x(t) i + y(t) j + z(t) k donne la position instantanée. L'équation cartésienne de la trajectoire s'obtient en exprimant t en fonction de x dans l'équation horaire x(t), puis en le substituant dans y(t).",
      "formulas": [
        {
          "name": "Vecteur-position en coordonnées cartésiennes",
          "formula": "\\vec{OM}(t) = x(t)\\,\\vec{i} + y(t)\\,\\vec{j} + z(t)\\,\\vec{k}",
          "note": "x, y, z sont les équations horaires en mètres (m)"
        },
        {
          "name": "Distance à l'origine (norme du vecteur-position)",
          "formula": "\\|\\vec{OM}\\| = \\sqrt{x^2(t) + y^2(t) + z^2(t)}",
          "note": "Grandeur scalaire toujours positive ou nulle"
        }
      ],
      "workedExample": {
        "title": "Établissement de l'équation cartésienne d'un mouvement plan",
        "statement": "Dans un repère orthonormé (O, i, j), un mobile ponctuel est animé des équations horaires : x(t) = 2 t et y(t) = -t² + 3 (avec t >= 0 en secondes, x et y en mètres). Détermine l'équation cartésienne de sa trajectoire et sa nature géométrique.",
        "methodSteps": [
          "Étape 1 : Exprimer la date t à partir de l'abscisse horaire : x = 2 t => t = x / 2.",
          "Étape 2 : Remplacer l'expression de t dans l'ordonnée y(t) : y = -(x / 2)² + 3 = -(x² / 4) + 3 = -0,25 x² + 3.",
          "Étape 3 : Déterminer le domaine de définition spatial : comme t >= 0 et x = 2 t, on a x >= 0."
        ],
        "conclusion": "L'équation cartésienne est y = -0,25 x² + 3 (avec x >= 0) : la trajectoire est une branche de parabole à concavité tournée vers le bas."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Grandeurs fondamentales de position et repérage spatiotemporel",
        "tableData": {
          "headers": [
            "Concept",
            "Définition physique",
            "Expression mathématique",
            "Unité SI"
          ],
          "rows": [
            [
              "Référentiel",
              "Solide par rapport auquel le mouvement est analysé",
              "Ex : Référentiel terrestre du laboratoire",
              "Sans unité"
            ],
            [
              "Repère d'espace",
              "Trièdre orthonormé lié au référentiel",
              "(O, i, j, k) avec ||i|| = ||j|| = ||k|| = 1",
              "Mètre (m)"
            ],
            [
              "Équations horaires",
              "Coordonnées cartésiennes en fonction du temps",
              "x = f(t) ; y = g(t) ; z = h(t)",
              "Mètre (m), Seconde (s)"
            ],
            [
              "Équation de trajectoire",
              "Relation géométrique liant les coordonnées sans le temps",
              "y = f(x) obtenue par élimination de t",
              "Mètre (m)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Notion de référentiel et relativité du mouvement",
          "stepTheme": "Relativité du mouvement",
          "stepBadge": "Référentiel",
          "paragraphText": "Le mouvement d'un point matériel est relatif : un objet peut être immobile par rapport à un observateur et en mouvement rapide par rapport à un autre. Pour décrire une trajectoire ou mesurer une vitesse, il est indispensable de préciser le solide de référence indéformable par rapport auquel l'étude est effectuée, appelé référentiel.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p01_q1",
            "type": "mcq",
            "prompt": "Un voyageur est assis immobile dans un train qui roule à 120 km/h en ligne droite. Quel énoncé décrit rigoureusement son état cinématique ?",
            "options": [
              "Il est au repos dans le référentiel du train, mais en mouvement rectiligne uniforme à 120 km/h dans le référentiel terrestre lié aux rails.",
              "Il est au repos absolu car il ne marche pas dans le couloir.",
              "Son vecteur-position est nul quel que soit le référentiel choisi.",
              "Il est en mouvement accéléré par rapport au sol car le train roule vite."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le mouvement dépend strictement du référentiel d'observation. Dans le wagon, le voyageur ne change pas de position (vitesse nulle), tandis que par rapport au sol terrestre, il avance à la vitesse du train."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Vecteur-position et coordonnées cartésiennes",
          "stepTheme": "Repérage cartésien",
          "stepBadge": "Vecteur OM",
          "paragraphText": "Dans un repère orthonormé (O, i, j, k), la position d'un point matériel M à la date t est définie par le vecteur-position OM(t) = x(t) i + y(t) j + z(t) k. La distance qui sépare le mobile de l'origine est la norme ||OM|| = sqrt(x² + y² + z²).",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p01_q2",
            "type": "mcq",
            "prompt": "À la date t = 2 s, un mobile a pour coordonnées cartésiennes x = 6 m, y = -3 m et z = 2 m. Quelle est la distance séparant le mobile de l'origine O du repère ?",
            "options": [
              "7,0 m",
              "11 m",
              "5,0 m",
              "49 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "||OM|| = sqrt(x² + y² + z²) = sqrt(6² + (-3)² + 2²) = sqrt(36 + 9 + 4) = sqrt(49) = 7,0 m."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Détermination de l'équation cartésienne de la trajectoire",
          "stepTheme": "Trajectoire",
          "stepBadge": "Élimination de t",
          "paragraphText": "Pour déterminer l'équation cartésienne de la trajectoire dans un plan (O, i, j), on isole la variable temporelle t dans l'une des équations horaires (généralement x = f(t)) et on reporte cette expression de t dans l'autre équation horaire y = g(t).",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p01_q3",
            "type": "mcq",
            "prompt": "Un point mobile est animé des équations horaires x(t) = 3 t et y(t) = 6 t - 2 (en mètres et secondes). Quelle est l'équation cartésienne de sa trajectoire ?",
            "options": [
              "y = 2 x - 2 (droite affine)",
              "y = 3 x - 2",
              "y = 0,5 x² - 2",
              "y = 18 x - 2"
            ],
            "correctAnswerIndex": 0,
            "explanation": "De x = 3 t, on tire t = x / 3. En reportant dans y : y = 6(x / 3) - 2 = 2 x - 2. La trajectoire est une droite d'équation y = 2 x - 2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Trajectoires curvilignes paraboliques",
          "stepTheme": "Parabole",
          "stepBadge": "Trajectoire courbe",
          "paragraphText": "Lorsque l'équation horaire sur un axe est linéaire en t et que l'équation sur l'autre axe est quadratique (en t²), l'élimination du temps conduit à une équation cartésienne de second degré y = A x² + B x + C : la trajectoire du mobile est une parabole.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p01_q4",
            "type": "mcq",
            "prompt": "Les équations horaires d'un mobile sont x(t) = 4 t et y(t) = -2 t² + 8 t. Quels sont le sommet de la parabole et l'abscisse où le mobile recoupe l'axe Ox (y = 0 avec x > 0) ?",
            "options": [
              "Sommet en x = 8 m (y = 8 m) et retour à y = 0 pour x = 16 m",
              "Sommet en x = 4 m (y = 6 m) et retour à y = 0 pour x = 8 m",
              "Sommet en x = 2 m (y = 4 m) et retour à y = 0 pour x = 4 m",
              "La trajectoire est une ellipse fermée de demi-grand axe 8 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "t = x / 4 => y = -2(x / 4)² + 8(x / 4) = -x² / 8 + 2 x. Le sommet correspond à dy/dx = -x/4 + 2 = 0 => x = 8 m, y(8) = -64/8 + 16 = 8 m. Pour y = 0 => x(-x/8 + 2) = 0 => x = 16 m."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Vecteur déplacement entre deux instants",
          "stepTheme": "Déplacement",
          "stepBadge": "Delta OM",
          "paragraphText": "Le vecteur déplacement entre deux dates t1 et t2 est le vecteur joignant la position initiale M1 à la position finale M2 : Delta OM = M1M2 = OM(t2) - OM(t1). Sa norme représente la distance en ligne droite entre M1 et M2, qui est inférieure ou égale à la longueur de l'arc de trajectoire réellement parcouru.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p01_q5",
            "type": "mcq",
            "prompt": "Un mobile part de M1(2 ; 1) à t1 = 0 s et atteint M2(6 ; 4) à t2 = 2 s (coordonnées en mètres). Quelles sont les composantes du vecteur déplacement M1M2 et sa norme ?",
            "options": [
              "M1M2 = 4 i + 3 j et ||M1M2|| = 5,0 m",
              "M1M2 = 8 i + 5 j et ||M1M2|| = 9,4 m",
              "M1M2 = 3 i + 4 j et ||M1M2|| = 7,0 m",
              "M1M2 = 2 i + 2 j et ||M1M2|| = 2,8 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Delta x = 6 - 2 = 4 m et Delta y = 4 - 1 = 3 m. La norme vaut ||M1M2|| = sqrt(4² + 3²) = sqrt(16 + 9) = sqrt(25) = 5,0 m."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Trajectoire circulaire et coordonnées polaires",
          "stepTheme": "Trajectoire circulaire",
          "stepBadge": "Cercle",
          "paragraphText": "Lorsque les équations horaires s'écrivent x(t) = R cos(omega t) et y(t) = R sin(omega t), la relation fondamentale cos²(theta) + sin²(theta) = 1 conduit à x² + y² = R² cos²(omega t) + R² sin²(omega t) = R². La trajectoire du point matériel est un cercle de centre O et de rayon R.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p01_q6",
            "type": "mcq",
            "prompt": "Un mobile décrit un mouvement plan d'équations horaires x(t) = 5 cos(4 t) et y(t) = 5 sin(4 t) (en mètres et secondes). Quelle est la trajectoire de ce mobile et quelle est la distance à l'origine à tout instant ?",
            "options": [
              "Un cercle de centre O et de rayon R = 5 m ; la distance OM reste rigoureusement constante et égale à 5 m.",
              "Une droite passant par l'origine de pente 4.",
              "Une parabole de sommet S(5, 4).",
              "Une cycloïde dont la distance varie entre 0 et 10 m."
            ],
            "correctAnswerIndex": 0,
            "explanation": "x² + y² = 25 cos²(4t) + 25 sin²(4t) = 25(cos² + sin²) = 25 = 5². C'est l'équation cartésienne d'un cercle de rayon R = 5 m centré à l'origine. OM = sqrt(x² + y²) = 5 m = cste."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège fréquent : confusion entre trajectoire et graphe horaire",
          "stepTheme": "Représentation graphique",
          "stepBadge": "Attention au bac",
          "paragraphText": "Il ne faut jamais confondre la trajectoire spatiale y = f(x) (dessinée dans l'espace physique à deux dimensions) et un graphe horaire x = f(t) ou v = f(t). Une courbe sinusoïdale sur un graphe x = f(t) peut très bien représenter un mouvement purement rectiligne le long d'un segment de droite.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p01_q7",
            "type": "mcq",
            "prompt": "Un mobile a pour équations x(t) = 3 cos(pi·t) et y(t) = 0 (en mètres). Quelle est la trajectoire réelle du mobile dans l'espace physique ?",
            "options": [
              "Un segment de droite de longueur 6 m centré sur l'origine le long de l'axe Ox, parcouru en va-et-vient périodique.",
              "Une sinusoïde ondulant dans le plan (x, y).",
              "Un cercle de rayon 3 m.",
              "Une onde transversale se propageant dans l'air."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Puisque y = 0 à tout instant, le mobile reste confiné sur l'axe Ox. Comme -1 <= cos(pi·t) <= 1, son abscisse oscille strictement entre x = -3 m et x = +3 m. Sa trajectoire est donc un segment de droite de 6 mètres."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l01_cinematique_p01_q1",
          "type": "mcq",
          "prompt": "Un voyageur est assis immobile dans un train qui roule à 120 km/h en ligne droite. Quel énoncé décrit rigoureusement son état cinématique ?",
          "options": [
            "Il est au repos dans le référentiel du train, mais en mouvement rectiligne uniforme à 120 km/h dans le référentiel terrestre lié aux rails.",
            "Il est au repos absolu car il ne marche pas dans le couloir.",
            "Son vecteur-position est nul quel que soit le référentiel choisi.",
            "Il est en mouvement accéléré par rapport au sol car le train roule vite."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le mouvement dépend strictement du référentiel d'observation. Dans le wagon, le voyageur ne change pas de position (vitesse nulle), tandis que par rapport au sol terrestre, il avance à la vitesse du train."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p01_q2",
          "type": "mcq",
          "prompt": "À la date t = 2 s, un mobile a pour coordonnées cartésiennes x = 6 m, y = -3 m et z = 2 m. Quelle est la distance séparant le mobile de l'origine O du repère ?",
          "options": [
            "7,0 m",
            "11 m",
            "5,0 m",
            "49 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "||OM|| = sqrt(x² + y² + z²) = sqrt(6² + (-3)² + 2²) = sqrt(36 + 9 + 4) = sqrt(49) = 7,0 m."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p01_q3",
          "type": "mcq",
          "prompt": "Un point mobile est animé des équations horaires x(t) = 3 t et y(t) = 6 t - 2 (en mètres et secondes). Quelle est l'équation cartésienne de sa trajectoire ?",
          "options": [
            "y = 2 x - 2 (droite affine)",
            "y = 3 x - 2",
            "y = 0,5 x² - 2",
            "y = 18 x - 2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "De x = 3 t, on tire t = x / 3. En reportant dans y : y = 6(x / 3) - 2 = 2 x - 2. La trajectoire est une droite d'équation y = 2 x - 2."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p01_q4",
          "type": "mcq",
          "prompt": "Les équations horaires d'un mobile sont x(t) = 4 t et y(t) = -2 t² + 8 t. Quels sont le sommet de la parabole et l'abscisse où le mobile recoupe l'axe Ox (y = 0 avec x > 0) ?",
          "options": [
            "Sommet en x = 8 m (y = 8 m) et retour à y = 0 pour x = 16 m",
            "Sommet en x = 4 m (y = 6 m) et retour à y = 0 pour x = 8 m",
            "Sommet en x = 2 m (y = 4 m) et retour à y = 0 pour x = 4 m",
            "La trajectoire est une ellipse fermée de demi-grand axe 8 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "t = x / 4 => y = -2(x / 4)² + 8(x / 4) = -x² / 8 + 2 x. Le sommet correspond à dy/dx = -x/4 + 2 = 0 => x = 8 m, y(8) = -64/8 + 16 = 8 m. Pour y = 0 => x(-x/8 + 2) = 0 => x = 16 m."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p01_q5",
          "type": "mcq",
          "prompt": "Un mobile part de M1(2 ; 1) à t1 = 0 s et atteint M2(6 ; 4) à t2 = 2 s (coordonnées en mètres). Quelles sont les composantes du vecteur déplacement M1M2 et sa norme ?",
          "options": [
            "M1M2 = 4 i + 3 j et ||M1M2|| = 5,0 m",
            "M1M2 = 8 i + 5 j et ||M1M2|| = 9,4 m",
            "M1M2 = 3 i + 4 j et ||M1M2|| = 7,0 m",
            "M1M2 = 2 i + 2 j et ||M1M2|| = 2,8 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Delta x = 6 - 2 = 4 m et Delta y = 4 - 1 = 3 m. La norme vaut ||M1M2|| = sqrt(4² + 3²) = sqrt(16 + 9) = sqrt(25) = 5,0 m."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p01_q6",
          "type": "mcq",
          "prompt": "Un mobile décrit un mouvement plan d'équations horaires x(t) = 5 cos(4 t) et y(t) = 5 sin(4 t) (en mètres et secondes). Quelle est la trajectoire de ce mobile et quelle est la distance à l'origine à tout instant ?",
          "options": [
            "Un cercle de centre O et de rayon R = 5 m ; la distance OM reste rigoureusement constante et égale à 5 m.",
            "Une droite passant par l'origine de pente 4.",
            "Une parabole de sommet S(5, 4).",
            "Une cycloïde dont la distance varie entre 0 et 10 m."
          ],
          "correctAnswerIndex": 0,
          "explanation": "x² + y² = 25 cos²(4t) + 25 sin²(4t) = 25(cos² + sin²) = 25 = 5². C'est l'équation cartésienne d'un cercle de rayon R = 5 m centré à l'origine. OM = sqrt(x² + y²) = 5 m = cste."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p01_q7",
          "type": "mcq",
          "prompt": "Un mobile a pour équations x(t) = 3 cos(pi·t) et y(t) = 0 (en mètres). Quelle est la trajectoire réelle du mobile dans l'espace physique ?",
          "options": [
            "Un segment de droite de longueur 6 m centré sur l'origine le long de l'axe Ox, parcouru en va-et-vient périodique.",
            "Une sinusoïde ondulant dans le plan (x, y).",
            "Un cercle de rayon 3 m.",
            "Une onde transversale se propageant dans l'air."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque y = 0 à tout instant, le mobile reste confiné sur l'axe Ox. Comme -1 <= cos(pi·t) <= 1, son abscisse oscille strictement entre x = -3 m et x = +3 m. Sa trajectoire est donc un segment de droite de 6 mètres."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l01_cinematique_p02",
      "order": 2,
      "title": "Vecteur-vitesse instantanée et décomposition dans la base de Frenet",
      "summary": "Définition de la vitesse instantanée v = dOM/dt, composantes cartésiennes vx = dx/dt, vy = dy/dt, vz = dz/dt, norme v, direction tangente au mouvement, et expression intrinsèque dans la base de Frenet v = (ds/dt) tau.",
      "conceptExplanation": "1. Définition du vecteur-vitesse instantanée :\nLe vecteur-vitesse instantanée est la dérivée temporelle première du vecteur-position :\nvec(v)(t) = dOM/dt.\n\n2. Composantes cartésiennes :\nvec(v) = (dx/dt) i + (dy/dt) j + (dz/dt) k = vx i + vy j + vz k = x_point i + y_point j + z_point k.\nLa valeur scalaire de la vitesse (sa norme) s'exprime par :\nv = ||vec(v)|| = sqrt(vx² + vy² + vz²) = sqrt((dx/dt)² + (dy/dt)² + (dz/dt)²), exprimée en mètres par seconde (m/s ou m·s⁻¹).\n\n3. Propriétés vectorielles géométriques :\nLe vecteur-vitesse présente à chaque instant :\n- Un point d'application : le point mobile M à l'instant t considéré.\n- Une direction : la droite tangente à la trajectoire au point M.\n- Un sens : le sens du mouvement du mobile.\n- Une norme : la rapidité instantanée v (toujours positive ou nulle).\n\n4. Expression dans la base de Frenet (tau, n) :\nLa base de Frenet est un repère mobile local attaché au point mobile M :\n- tau est le vecteur unitaire tangent à la trajectoire et orienté dans le sens du mouvement.\n- n est le vecteur unitaire normal, perpendiculaire à tau et orienté vers la concavité de la trajectoire (vers le centre de courbure).\nDans cette base intrinsèque, le vecteur-vitesse est strictement colinéaire au vecteur tangent :\nvec(v) = v tau = (ds/dt) tau = s_point tau, où s(t) est l'abscisse curviligne du point M mesurée le long de la trajectoire.",
      "keyRule": "Le vecteur-vitesse est toujours tangent à la trajectoire et dirigé dans le sens du déplacement : vec(v) = dOM/dt = vx i + vy j. Dans la base de Frenet : vec(v) = (ds/dt) tau.",
      "formulas": [
        {
          "name": "Vecteur-vitesse instantanée en coordonnées cartésiennes",
          "formula": "\\vec{v} = \\frac{d\\vec{OM}}{dt} = \\dot{x}\\,\\vec{i} + \\dot{y}\\,\\vec{j} + \\dot{z}\\,\\vec{k}",
          "note": "vx = dx/dt, vy = dy/dt, vz = dz/dt"
        },
        {
          "name": "Vitesse scalaire instantanée dans la base de Frenet",
          "formula": "\\vec{v} = v\\,\\vec{\\tau} = \\frac{ds}{dt}\\,\\vec{\\tau}",
          "note": "tau est unitaire tangent, s est l'abscisse curviligne"
        }
      ],
      "workedExample": {
        "title": "Calcul du vecteur-vitesse et de sa norme à un instant fixé",
        "statement": "Dans un repère cartésien, les équations horaires d'un solide sont x(t) = 3 t² + 1 et y(t) = -4 t + 5 (t en s, x et y en m). Calcule les coordonnées du vecteur-vitesse instantanée à t = 1,0 s ainsi que la valeur de sa vitesse.",
        "methodSteps": [
          "Étape 1 : Dériver x(t) par rapport au temps : vx(t) = dx/dt = d(3 t² + 1)/dt = 6 t.",
          "Étape 2 : Dériver y(t) par rapport au temps : vy(t) = dy/dt = d(-4 t + 5)/dt = -4 m/s.",
          "Étape 3 : Évaluer à t = 1,0 s : vx(1) = 6 × 1,0 = 6,0 m/s et vy(1) = -4,0 m/s.",
          "Étape 4 : Calculer la norme : v(1) = sqrt(vx² + vy²) = sqrt(6,0² + (-4,0)²) = sqrt(36 + 16) = sqrt(52) ≈ 7,21 m/s."
        ],
        "conclusion": "À t = 1,0 s, vec(v) = 6,0 i - 4,0 j et sa vitesse instantanée est de 7,21 m/s."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Caractéristiques géométriques du vecteur-vitesse",
        "tableData": {
          "headers": [
            "Caractéristique",
            "Propriété géométrique",
            "Repère cartésien",
            "Base de Frenet"
          ],
          "rows": [
            [
              "Point d'application",
              "Position du mobile M(t)",
              "Coordonnées (x, y, z)",
              "Origine locale en M"
            ],
            [
              "Direction",
              "Tangente à la trajectoire en M",
              "Portée par dx·i + dy·j",
              "Colinéaire au vecteur unitaire tau"
            ],
            [
              "Sens",
              "Sens réel du déplacement",
              "Sens de progression des coordonnées",
              "Identique au sens de tau"
            ],
            [
              "Norme (valeur)",
              "Vitesse scalaire instantanée",
              "v = sqrt(vx² + vy² + vz²)",
              "v = ds/dt = s_point >= 0"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la vitesse instantanée par dérivation",
          "stepTheme": "Dérivation temporelle",
          "stepBadge": "Définition vitesse",
          "paragraphText": "La vitesse instantanée vec(v) est la limite du vecteur vitesse moyenne lorsque l'intervalle de temps Delta t tend vers zéro. Mathématiquement, c'est la dérivée temporelle du vecteur-position : vec(v)(t) = lim (Delta t -> 0) Delta OM / Delta t = dOM/dt.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p02_q1",
            "type": "mcq",
            "prompt": "Le vecteur-position d'un mobile est vec(OM)(t) = (2 t³ - t) i + (4 t + 3) j (en mètres). Quelle est l'expression du vecteur-vitesse instantanée à tout instant t ?",
            "options": [
              "vec(v)(t) = (6 t² - 1) i + 4 j",
              "vec(v)(t) = (2 t² - 1) i + 4 j",
              "vec(v)(t) = 6 t i + 4 j",
              "vec(v)(t) = (6 t³ - t) i + 4 t j"
            ],
            "correctAnswerIndex": 0,
            "explanation": "vx = d(2 t³ - t)/dt = 6 t² - 1 et vy = d(4 t + 3)/dt = 4. Donc vec(v)(t) = (6 t² - 1) i + 4 j."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Direction tangente du vecteur-vitesse",
          "stepTheme": "Tangente à la trajectoire",
          "stepBadge": "Direction géométrique",
          "paragraphText": "Quelle que soit la forme de la trajectoire (rectiligne, parabolique, circulaire ou gauche), le vecteur-vitesse instantanée est rigoureusement porté par la tangente géométrique à la trajectoire au point occupé par le mobile à cet instant.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p02_q2",
            "type": "mcq",
            "prompt": "Un véhicule prend un virage circulaire à vitesse constante. Que peut-on affirmer de son vecteur-vitesse ?",
            "options": [
              "Sa valeur (norme) est constante, mais sa direction change continuellement puisqu'elle reste tangente au cercle en chaque point.",
              "Le vecteur-vitesse est rigoureusement constant en norme et en direction.",
              "Le vecteur-vitesse pointe vers le centre du virage circulaire.",
              "Le vecteur-vitesse est nul au sommet du virage."
            ],
            "correctAnswerIndex": 0,
            "explanation": "En virage, la direction de la tangente tourne en permanence au fur et à mesure que le véhicule avance : le vecteur-vitesse varie donc en direction, même si sa norme scalaire reste constante."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La base mobile de Frenet (tau, n)",
          "stepTheme": "Repère intrinsèque",
          "stepBadge": "Base de Frenet",
          "paragraphText": "La base de Frenet (tau, n) est liée au mobile M. Le vecteur tau est tangent et orienté vers l'avant du mouvement. Le vecteur n est orthogonal à tau et dirigé vers le centre de courbure (vers l'intérieur de la courbure). Dans cette base, vec(v) = v tau.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p02_q3",
            "type": "mcq",
            "prompt": "Dans la base de Frenet (tau, n), quelle est la composante normale vn du vecteur-vitesse instantanée vec(v) ?",
            "options": [
              "vn = 0, car la vitesse est rigoureusement portée par le vecteur tangent tau.",
              "vn = v² / R",
              "vn = R omega",
              "vn = g sin(alpha)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition même de la base de Frenet, le vecteur-vitesse est entièrement tangent à la courbe : vec(v) = v tau + 0 n. Sa composante normale est donc strictement nulle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Lien entre vitesse linéaire et vitesse angulaire",
          "stepTheme": "Mouvement de rotation",
          "stepBadge": "v = R omega",
          "paragraphText": "Pour un mobile en rotation ou sur une trajectoire circulaire de rayon R, l'abscisse curviligne s'écrit s = R theta. En dérivant par rapport au temps : v = ds/dt = R (dtheta/dt) = R omega, où omega est la vitesse angulaire exprimée en radians par seconde (rad/s).",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p02_q4",
            "type": "mcq",
            "prompt": "Une meule circulaire d'affûtage de rayon R = 15 cm tourne à une vitesse angulaire constante omega = 200 rad/s. Quelle est la vitesse linéaire d'un point situé sur la périphérie de la meule ?",
            "options": [
              "30 m/s (soit 108 km/h)",
              "3000 m/s",
              "13,3 m/s",
              "1,5 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "v = R omega avec R = 15 cm = 0,15 m. D'où v = 0,15 m × 200 rad/s = 30 m/s (soit 30 × 3,6 = 108 km/h)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calcul de l'angle d'inclinaison du vecteur-vitesse",
          "stepTheme": "Orientation de la vitesse",
          "stepBadge": "Pente tan alpha",
          "paragraphText": "Dans le plan (O, i, j), l'angle alpha que fait le vecteur-vitesse vec(v) avec l'axe horizontal Ox est donné par : tan(alpha) = vy / vx = dy/dx. La valeur de la vitesse vaut v = sqrt(vx² + vy²), et l'on a vx = v cos(alpha) et vy = v sin(alpha).",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p02_q5",
            "type": "mcq",
            "prompt": "Un point mobile a pour composantes de vitesse vx = 10 m/s et vy = -10 m/s à une date donnée. Quel angle alpha fait le vecteur-vitesse avec l'axe horizontal Ox ?",
            "options": [
              "alpha = -45° (ou 315°), dirigé vers le bas et l'avant",
              "alpha = +45°",
              "alpha = 90°",
              "alpha = 0°"
            ],
            "correctAnswerIndex": 0,
            "explanation": "tan(alpha) = vy / vx = -10 / 10 = -1. D'où alpha = arctan(-1) = -45°. Le vecteur est incliné de 45° sous l'horizontale."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Vitesse moyenne versus vitesse instantanée",
          "stepTheme": "Comparaison des vitesses",
          "stepBadge": "Vitesse moyenne",
          "paragraphText": "La vitesse moyenne entre deux dates est le quotient scalaire de la distance totale parcourue d par la durée écoulée : vm = d / Delta t. Elle ne renseigne en rien sur les variations intermédiaires de vitesse (accélérations, arrêts, freinages) mesurées par la vitesse instantanée v(t).",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p02_q6",
            "type": "mcq",
            "prompt": "Un automobiliste parcourt les 100 premiers kilomètres d'un trajet à 50 km/h, puis les 100 kilomètres suivants à 100 km/h. Quelle est sa vitesse moyenne sur l'ensemble du trajet de 200 km ?",
            "options": [
              "66,7 km/h (et non 75 km/h)",
              "75,0 km/h",
              "50,0 km/h",
              "80,0 km/h"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Durée premier tronçon : t1 = 100 / 50 = 2,0 h. Durée second tronçon : t2 = 100 / 100 = 1,0 h. Durée totale = 3,0 h pour 200 km. Vitesse moyenne vm = 200 km / 3,0 h = 66,7 km/h. La moyenne arithmétique 75 km/h est un piège classique."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège fréquent sur le signe de la vitesse",
          "stepTheme": "Norme et composantes",
          "stepBadge": "Attention au signe",
          "paragraphText": "La norme de la vitesse v = ||vec(v)|| est par définition une grandeur strictement positive ou nulle. En revanche, les coordonnées algébriques de la vitesse (vx, vy, vz) ou la dérivée curviligne s_point = ds/dt peuvent être négatives lorsque le mobile se déplace dans le sens contraire à l'axe choisi.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p02_q7",
            "type": "mcq",
            "prompt": "Un mobile recule le long de l'axe Ox avec l'équation horaire x(t) = -5 t + 8. Que valent sa vitesse algébrique vx et la norme de son vecteur-vitesse v ?",
            "options": [
              "vx = -5 m/s et v = ||vec(v)|| = +5 m/s",
              "vx = -5 m/s et v = -5 m/s",
              "vx = +5 m/s et v = 0 m/s",
              "vx = 8 m/s et v = 5 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La composante algébrique est la dérivée dx/dt = -5 m/s (indiquant un recul par rapport à l'axe). La norme du vecteur-vitesse est positive : v = sqrt((-5)²) = +5 m/s."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l01_cinematique_p02_q1",
          "type": "mcq",
          "prompt": "Le vecteur-position d'un mobile est vec(OM)(t) = (2 t³ - t) i + (4 t + 3) j (en mètres). Quelle est l'expression du vecteur-vitesse instantanée à tout instant t ?",
          "options": [
            "vec(v)(t) = (6 t² - 1) i + 4 j",
            "vec(v)(t) = (2 t² - 1) i + 4 j",
            "vec(v)(t) = 6 t i + 4 j",
            "vec(v)(t) = (6 t³ - t) i + 4 t j"
          ],
          "correctAnswerIndex": 0,
          "explanation": "vx = d(2 t³ - t)/dt = 6 t² - 1 et vy = d(4 t + 3)/dt = 4. Donc vec(v)(t) = (6 t² - 1) i + 4 j."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p02_q2",
          "type": "mcq",
          "prompt": "Un véhicule prend un virage circulaire à vitesse constante. Que peut-on affirmer de son vecteur-vitesse ?",
          "options": [
            "Sa valeur (norme) est constante, mais sa direction change continuellement puisqu'elle reste tangente au cercle en chaque point.",
            "Le vecteur-vitesse est rigoureusement constant en norme et en direction.",
            "Le vecteur-vitesse pointe vers le centre du virage circulaire.",
            "Le vecteur-vitesse est nul au sommet du virage."
          ],
          "correctAnswerIndex": 0,
          "explanation": "En virage, la direction de la tangente tourne en permanence au fur et à mesure que le véhicule avance : le vecteur-vitesse varie donc en direction, même si sa norme scalaire reste constante."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p02_q3",
          "type": "mcq",
          "prompt": "Dans la base de Frenet (tau, n), quelle est la composante normale vn du vecteur-vitesse instantanée vec(v) ?",
          "options": [
            "vn = 0, car la vitesse est rigoureusement portée par le vecteur tangent tau.",
            "vn = v² / R",
            "vn = R omega",
            "vn = g sin(alpha)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition même de la base de Frenet, le vecteur-vitesse est entièrement tangent à la courbe : vec(v) = v tau + 0 n. Sa composante normale est donc strictement nulle."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p02_q4",
          "type": "mcq",
          "prompt": "Une meule circulaire d'affûtage de rayon R = 15 cm tourne à une vitesse angulaire constante omega = 200 rad/s. Quelle est la vitesse linéaire d'un point situé sur la périphérie de la meule ?",
          "options": [
            "30 m/s (soit 108 km/h)",
            "3000 m/s",
            "13,3 m/s",
            "1,5 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "v = R omega avec R = 15 cm = 0,15 m. D'où v = 0,15 m × 200 rad/s = 30 m/s (soit 30 × 3,6 = 108 km/h)."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p02_q5",
          "type": "mcq",
          "prompt": "Un point mobile a pour composantes de vitesse vx = 10 m/s et vy = -10 m/s à une date donnée. Quel angle alpha fait le vecteur-vitesse avec l'axe horizontal Ox ?",
          "options": [
            "alpha = -45° (ou 315°), dirigé vers le bas et l'avant",
            "alpha = +45°",
            "alpha = 90°",
            "alpha = 0°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "tan(alpha) = vy / vx = -10 / 10 = -1. D'où alpha = arctan(-1) = -45°. Le vecteur est incliné de 45° sous l'horizontale."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p02_q6",
          "type": "mcq",
          "prompt": "Un automobiliste parcourt les 100 premiers kilomètres d'un trajet à 50 km/h, puis les 100 kilomètres suivants à 100 km/h. Quelle est sa vitesse moyenne sur l'ensemble du trajet de 200 km ?",
          "options": [
            "66,7 km/h (et non 75 km/h)",
            "75,0 km/h",
            "50,0 km/h",
            "80,0 km/h"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Durée premier tronçon : t1 = 100 / 50 = 2,0 h. Durée second tronçon : t2 = 100 / 100 = 1,0 h. Durée totale = 3,0 h pour 200 km. Vitesse moyenne vm = 200 km / 3,0 h = 66,7 km/h. La moyenne arithmétique 75 km/h est un piège classique."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p02_q7",
          "type": "mcq",
          "prompt": "Un mobile recule le long de l'axe Ox avec l'équation horaire x(t) = -5 t + 8. Que valent sa vitesse algébrique vx et la norme de son vecteur-vitesse v ?",
          "options": [
            "vx = -5 m/s et v = ||vec(v)|| = +5 m/s",
            "vx = -5 m/s et v = -5 m/s",
            "vx = +5 m/s et v = 0 m/s",
            "vx = 8 m/s et v = 5 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La composante algébrique est la dérivée dx/dt = -5 m/s (indiquant un recul par rapport à l'axe). La norme du vecteur-vitesse est positive : v = sqrt((-5)²) = +5 m/s."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l01_cinematique_p03",
      "order": 3,
      "title": "Vecteur-accélération : composantes cartésiennes et décomposition de Frenet",
      "summary": "Définition de l'accélération instantanée a = dv/dt = d²OM/dt², composantes cartésiennes (x'', y'', z''), et décomposition intrinsèque dans la base de Frenet : a = a_tau tau + a_n n, avec accélération tangentielle a_tau = dv/dt et accélération normale centripète a_n = v²/rho.",
      "conceptExplanation": "1. Définition du vecteur-accélération instantanée :\nL'accélération instantanée mesure la rapidité de variation du vecteur-vitesse au cours du temps. C'est la dérivée temporelle première de la vitesse, ou la dérivée seconde du vecteur-position :\nvec(a)(t) = d(vec(v))/dt = d²OM/dt².\n\n2. Coordonnées cartésiennes :\nvec(a) = (dvx/dt) i + (dvy/dt) j + (dvz/dt) k = x_point_point i + y_point_point j + z_point_point k.\nSa norme vaut : a = ||vec(a)|| = sqrt(ax² + ay² + az²), exprimée en m/s² (ou m·s⁻²).\n\n3. Décomposition intrinsèque dans la base de Frenet (tau, n) :\nDans la base de Frenet, le vecteur-accélération se décompose en deux composantes orthogonales fondamentales ayant chacune une signification physique distincte :\nvec(a) = a_tau tau + a_n n.\n\n- Accélération tangentielle a_tau :\na_tau = dv/dt = d²s/dt² = s_point_point.\nElle renseigne sur la variation de la valeur (norme) de la vitesse. Si la vitesse scalaire est constante (mouvement uniforme), a_tau = 0.\n\n- Accélération normale a_n :\na_n = v² / rho (où rho est le rayon de courbure local de la trajectoire ; pour un cercle, rho = R).\nElle est strictement positive ou nulle, dirigée selon le vecteur unitaire n vers l'intérieur de la courbure (accélération centripète). Elle renseigne sur la variation de la direction de la vitesse. Si la trajectoire est une ligne droite (rho -> infini), a_n = 0.\n\n4. Norme globale de l'accélération :\nPuisque tau et n sont orthogonaux (tau _|_ n), la norme de l'accélération vaut :\na = sqrt(a_tau² + a_n²) = sqrt((dv/dt)² + (v² / rho)²).",
      "keyRule": "L'accélération tangentielle a_tau = dv/dt quantifie la variation de la valeur de la vitesse. L'accélération normale a_n = v²/rho quantifie la variation de sa direction (centripète). Norme : a = sqrt(a_tau² + a_n²).",
      "formulas": [
        {
          "name": "Accélération dans la base de Frenet",
          "formula": "\\vec{a} = a_\\tau\\,\\vec{\\tau} + a_n\\,\\vec{n} = \\frac{dv}{dt}\\,\\vec{\\tau} + \\frac{v^2}{\\rho}\\,\\vec{n}",
          "note": "a_tau tangentielle, a_n normale centripète, rho rayon de courbure"
        },
        {
          "name": "Norme du vecteur-accélération",
          "formula": "a = \\sqrt{a_\\tau^2 + a_n^2} = \\sqrt{\\left(\\frac{dv}{dt}\\right)^2 + \\left(\\frac{v^2}{\\rho}\\right)^2}",
          "note": "En mètres par seconde carrée (m/s² ou m·s⁻²)"
        }
      ],
      "workedExample": {
        "title": "Calcul des composantes tangentielle et normale dans un virage",
        "statement": "Un automobiliste aborde un virage circulaire de rayon R = 50 m à la vitesse initiale de 20 m/s tout en freinant uniformément avec une décélération tangentielle constante a_tau = -3,0 m/s². Calcule la composante normale de son accélération et la norme totale de son accélération à cet instant.",
        "methodSteps": [
          "Étape 1 : Calculer l'accélération normale centripète : a_n = v² / R = 20² / 50 = 400 / 50 = 8,0 m/s².",
          "Étape 2 : Rappeler l'accélération tangentielle : a_tau = -3,0 m/s².",
          "Étape 3 : Calculer la norme de l'accélération totale : a = sqrt(a_tau² + a_n²) = sqrt((-3,0)² + 8,0²) = sqrt(9,0 + 64,0) = sqrt(73) ≈ 8,54 m/s²."
        ],
        "conclusion": "L'accélération du véhicule dans le virage vaut a = 8,54 m/s²."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Composantes de l'accélération dans la base de Frenet",
        "tableData": {
          "headers": [
            "Composante",
            "Formule mathématique",
            "Orientation physique",
            "Rôle cinématique"
          ],
          "rows": [
            [
              "Tangentielle a_tau",
              "a_tau = dv/dt = d²s/dt²",
              "Colinéaire à tau (tangente)",
              "Mesure la variation de la grandeur de la vitesse (accélération/freinage)"
            ],
            [
              "Normale a_n",
              "a_n = v² / rho",
              "Colinéaire à n (centripète)",
              "Mesure la variation de la direction de la trajectoire (courbure)"
            ],
            [
              "Accélération totale a",
              "a = sqrt(a_tau² + a_n²)",
              "Inclinée vers l'intérieur",
              "Résultante des variations vectorielles de vitesse"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Vecteur-accélération comme dérivée seconde de la position",
          "stepTheme": "Dérivée seconde",
          "stepBadge": "Définition a",
          "paragraphText": "L'accélération instantanée est la dérivée temporelle première de la vitesse et la dérivée seconde de la position : vec(a) = dv/dt = d²OM/dt². En repère cartésien, ax = d²x/dt², ay = d²y/dt² et az = d²z/dt².",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p03_q1",
            "type": "mcq",
            "prompt": "Un mobile a pour équations horaires x(t) = 4 t² - 2 t et y(t) = -t² + 5 (en mètres). Quelles sont les composantes de son vecteur-accélération vec(a) ?",
            "options": [
              "ax = 8 m/s² et ay = -2 m/s² (accélération constante)",
              "ax = 8 t - 2 et ay = -2 t",
              "ax = 4 m/s² et ay = -1 m/s²",
              "ax = 0 et ay = 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "vx = 8 t - 2 => ax = d(8 t - 2)/dt = 8 m/s². vy = -2 t => ay = d(-2 t)/dt = -2 m/s². L'accélération est constante : vec(a) = 8 i - 2 j."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Rôle de l'accélération tangentielle",
          "stepTheme": "Accélération tangentielle",
          "stepBadge": "a_tau = dv/dt",
          "paragraphText": "L'accélération tangentielle a_tau = dv/dt est nulle si et seulement si la valeur scalaire de la vitesse reste constante. Dans tout mouvement uniforme (rectiligne ou circulaire), a_tau = 0.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p03_q2",
            "type": "mcq",
            "prompt": "Un satellite tourne sur une orbite circulaire à vitesse constante v = 7,5 km/s. Que vaut son accélération tangentielle a_tau ?",
            "options": [
              "a_tau = 0 m/s², car la valeur scalaire de la vitesse ne varie pas.",
              "a_tau = 7,5 m/s²",
              "a_tau = 9,8 m/s²",
              "a_tau = v² / R"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Puisque la norme de la vitesse est constante (dv/dt = 0), la composante tangentielle de l'accélération est rigoureusement nulle : a_tau = 0."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Rôle de l'accélération normale et caractère centripète",
          "stepTheme": "Accélération normale",
          "stepBadge": "a_n = v²/rho",
          "paragraphText": "L'accélération normale a_n = v² / rho est dirigée vers le centre de courbure. Elle est nulle si et seulement si la trajectoire est rectiligne (rayon de courbure infini rho -> infini). Tout changement de direction implique une accélération normale non nulle.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p03_q3",
            "type": "mcq",
            "prompt": "Un train roule à 72 km/h sur une voie droite rectiligne. Que vaut son accélération normale a_n ?",
            "options": [
              "a_n = 0 m/s², car sur une ligne droite le rayon de courbure est infini (1 / rho = 0).",
              "a_n = 20 m/s²",
              "a_n = 9,8 m/s²",
              "a_n = 72 m/s²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sur une trajectoire rectiligne, la direction de la vitesse ne change jamais. Le rayon de courbure est infini, d'où a_n = v² / infini = 0."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Détermination du rayon de courbure d'une trajectoire",
          "stepTheme": "Rayon de courbure",
          "stepBadge": "rho = v²/a_n",
          "paragraphText": "Si l'on connaît la vitesse v du mobile et sa composante normale d'accélération a_n, le rayon de courbure local de la trajectoire se déduit par : rho = v² / a_n. Au sommet d'une trajectoire parabolique par exemple, a_n = g et rho = v_sommet² / g.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p03_q4",
            "type": "mcq",
            "prompt": "Un projectile atteint le sommet de sa trajectoire avec une vitesse purement horizontale v = 30 m/s. Sachant qu'au sommet son accélération est verticale et vaut a_n = g = 10 m/s², quel est le rayon de courbure de la parabole en ce point ?",
            "options": [
              "rho = 90 m",
              "rho = 3,0 m",
              "rho = 300 m",
              "rho = 45 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "rho = v² / a_n = (30)² / 10 = 900 / 10 = 90 m."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Produit scalaire accélération-vitesse et nature du mouvement",
          "stepTheme": "Accéléré ou retardé",
          "stepBadge": "Signe de a · v",
          "paragraphText": "Le caractère accéléré ou retardé d'un mouvement s'analyse grâce au produit scalaire vec(a) · vec(v) = ax vx + ay vy = v (dv/dt) : si vec(a) · vec(v) > 0, la vitesse augmente (mouvement accéléré) ; si vec(a) · vec(v) < 0, la vitesse diminue (mouvement retardé ou décéléré) ; si vec(a) · vec(v) = 0, la vitesse reste constante (mouvement uniforme).",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p03_q5",
            "type": "mcq",
            "prompt": "Un point mobile a pour coordonnées de vitesse vx = 2 m/s et vy = -2 t, et pour accélération ax = 0 et ay = -2 m/s². À t = 1,0 s, le mouvement est-il accéléré ou retardé ?",
            "options": [
              "Accéléré, car vec(a) · vec(v) = 0 × 2 + (-2) × (-2) = +4 > 0.",
              "Retardé, car l'accélération ay est négative.",
              "Uniforme, car ax = 0.",
              "Immobile, car vy s'annule."
            ],
            "correctAnswerIndex": 0,
            "explanation": "À t = 1 s, vy = -2 m/s. Le produit scalaire vaut vec(a)·vec(v) = ax·vx + ay·vy = (0)(2) + (-2)(-2) = +4 m²/s³ > 0. Le vecteur-accélération et le vecteur-vitesse pointent dans le même sens général : la vitesse du mobile croît, le mouvement est accéléré."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Calcul de l'accélération à partir d'un looping d'avion",
          "stepTheme": "Accélération en facteur g",
          "stepBadge": "Facteur de charge",
          "paragraphText": "Lors d'une boucle verticale (looping), un pilote d'avion de vitesse constante v décrivant un cercle de rayon R subit une accélération normale an = v² / R souvent exprimée en multiples de g (nombre de g subis : n = an / g).",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p03_q6",
            "type": "mcq",
            "prompt": "Un avion de voltige vole à la vitesse constante v = 1800 km/h (soit 500 m/s) et subit une accélération centripète an = 10 g (avec g = 10 m/s²). Quel est le rayon R de la trajectoire circulaire décrite ?",
            "options": [
              "R = 2500 m (soit 2,5 km)",
              "R = 500 m",
              "R = 25 000 m",
              "R = 100 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "an = 10 × 10 = 100 m/s². Or an = v² / R => R = v² / an = (500)² / 100 = 250 000 / 100 = 2500 m."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège fréquent sur le vecteur-accélération en mouvement curviligne uniforme",
          "stepTheme": "Accélération non nulle",
          "stepBadge": "Attention au bac",
          "paragraphText": "Une erreur très fréquente chez les candidats au baccalauréat est d'écrire que l'accélération est nulle sous prétexte que le mouvement est 'uniforme' ! Dans un mouvement circulaire uniforme, si a_tau = 0, l'accélération normale an = v² / R est NON NULLE : le vecteur-accélération est centripète et permanent.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p03_q7",
            "type": "mcq",
            "prompt": "Pourquoi un mobile décrivant un cercle à vitesse constante de 10 m/s possède-t-il une accélération non nulle ?",
            "options": [
              "Parce que bien que sa valeur scalaire soit constante, le vecteur-vitesse change continuellement de direction à chaque instant.",
              "Parce que les frottements augmentent sa vitesse angulaire.",
              "Parce que son rayon diminue avec le temps.",
              "C'est faux : son accélération vectorielle est rigoureusement nulle."
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'accélération est la dérivée du VECTEUR vitesse. Même si la norme ||vec(v)|| ne varie pas, l'orientation du vecteur tourne en continu : il existe donc une accélération centripète normale an = v² / R non nulle."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l01_cinematique_p03_q1",
          "type": "mcq",
          "prompt": "Un mobile a pour équations horaires x(t) = 4 t² - 2 t et y(t) = -t² + 5 (en mètres). Quelles sont les composantes de son vecteur-accélération vec(a) ?",
          "options": [
            "ax = 8 m/s² et ay = -2 m/s² (accélération constante)",
            "ax = 8 t - 2 et ay = -2 t",
            "ax = 4 m/s² et ay = -1 m/s²",
            "ax = 0 et ay = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "vx = 8 t - 2 => ax = d(8 t - 2)/dt = 8 m/s². vy = -2 t => ay = d(-2 t)/dt = -2 m/s². L'accélération est constante : vec(a) = 8 i - 2 j."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p03_q2",
          "type": "mcq",
          "prompt": "Un satellite tourne sur une orbite circulaire à vitesse constante v = 7,5 km/s. Que vaut son accélération tangentielle a_tau ?",
          "options": [
            "a_tau = 0 m/s², car la valeur scalaire de la vitesse ne varie pas.",
            "a_tau = 7,5 m/s²",
            "a_tau = 9,8 m/s²",
            "a_tau = v² / R"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque la norme de la vitesse est constante (dv/dt = 0), la composante tangentielle de l'accélération est rigoureusement nulle : a_tau = 0."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p03_q3",
          "type": "mcq",
          "prompt": "Un train roule à 72 km/h sur une voie droite rectiligne. Que vaut son accélération normale a_n ?",
          "options": [
            "a_n = 0 m/s², car sur une ligne droite le rayon de courbure est infini (1 / rho = 0).",
            "a_n = 20 m/s²",
            "a_n = 9,8 m/s²",
            "a_n = 72 m/s²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sur une trajectoire rectiligne, la direction de la vitesse ne change jamais. Le rayon de courbure est infini, d'où a_n = v² / infini = 0."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p03_q4",
          "type": "mcq",
          "prompt": "Un projectile atteint le sommet de sa trajectoire avec une vitesse purement horizontale v = 30 m/s. Sachant qu'au sommet son accélération est verticale et vaut a_n = g = 10 m/s², quel est le rayon de courbure de la parabole en ce point ?",
          "options": [
            "rho = 90 m",
            "rho = 3,0 m",
            "rho = 300 m",
            "rho = 45 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "rho = v² / a_n = (30)² / 10 = 900 / 10 = 90 m."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p03_q5",
          "type": "mcq",
          "prompt": "Un point mobile a pour coordonnées de vitesse vx = 2 m/s et vy = -2 t, et pour accélération ax = 0 et ay = -2 m/s². À t = 1,0 s, le mouvement est-il accéléré ou retardé ?",
          "options": [
            "Accéléré, car vec(a) · vec(v) = 0 × 2 + (-2) × (-2) = +4 > 0.",
            "Retardé, car l'accélération ay est négative.",
            "Uniforme, car ax = 0.",
            "Immobile, car vy s'annule."
          ],
          "correctAnswerIndex": 0,
          "explanation": "À t = 1 s, vy = -2 m/s. Le produit scalaire vaut vec(a)·vec(v) = ax·vx + ay·vy = (0)(2) + (-2)(-2) = +4 m²/s³ > 0. Le vecteur-accélération et le vecteur-vitesse pointent dans le même sens général : la vitesse du mobile croît, le mouvement est accéléré."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p03_q6",
          "type": "mcq",
          "prompt": "Un avion de voltige vole à la vitesse constante v = 1800 km/h (soit 500 m/s) et subit une accélération centripète an = 10 g (avec g = 10 m/s²). Quel est le rayon R de la trajectoire circulaire décrite ?",
          "options": [
            "R = 2500 m (soit 2,5 km)",
            "R = 500 m",
            "R = 25 000 m",
            "R = 100 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "an = 10 × 10 = 100 m/s². Or an = v² / R => R = v² / an = (500)² / 100 = 250 000 / 100 = 2500 m."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p03_q7",
          "type": "mcq",
          "prompt": "Pourquoi un mobile décrivant un cercle à vitesse constante de 10 m/s possède-t-il une accélération non nulle ?",
          "options": [
            "Parce que bien que sa valeur scalaire soit constante, le vecteur-vitesse change continuellement de direction à chaque instant.",
            "Parce que les frottements augmentent sa vitesse angulaire.",
            "Parce que son rayon diminue avec le temps.",
            "C'est faux : son accélération vectorielle est rigoureusement nulle."
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'accélération est la dérivée du VECTEUR vitesse. Même si la norme ||vec(v)|| ne varie pas, l'orientation du vecteur tourne en continu : il existe donc une accélération centripète normale an = v² / R non nulle."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l01_cinematique_p04",
      "order": 4,
      "title": "Mouvements rectilignes : Uniforme (MRU) et Uniformément Varié (MRUV)",
      "summary": "Critères cinématiques d'un MRU (a = 0, v = cste, x = v0 t + x0) et d'un MRUV (a = cste, v = a t + v0, x = 1/2 a t² + v0 t + x0), relation indépendante du temps v1² - v0² = 2 a Delta x, et condition mouvement accéléré (a·v > 0) vs décéléré (a·v < 0).",
      "conceptExplanation": "1. Mouvement Rectiligne Uniforme (MRU) :\nUn point mobile décrit un MRU si sa trajectoire est une droite et son vecteur-vitesse est constant (vec(v) = vec(cste)).\n- Accélération : a = 0 m/s².\n- Vitesse : v(t) = v0 = cste.\n- Équation horaire de position : x(t) = v0 t + x0 (fonction affine du temps).\n\n2. Mouvement Rectiligne Uniformément Varié (MRUV) :\nUn point mobile décrit un MRUV si sa trajectoire est une droite et son vecteur-accélération est constant et non nul (vec(a) = vec(cste) != 0).\n- Accélération : a(t) = a = cste.\n- Équation horaire de vitesse : v(t) = a t + v0 (fonction affine du temps).\n- Équation horaire de position : x(t) = (1/2) a t² + v0 t + x0 (polynôme du second degré en t).\n\n3. Relation indépendante du temps (formule d'élimination de t) :\nEn éliminant la date t entre l'équation de vitesse t = (v1 - v0) / a et l'équation de position, on obtient la relation fondamentale :\nv1² - v0² = 2 a (x1 - x0) = 2 a Delta x.\nCette relation est extrêmement puissante pour déterminer une vitesse ou une distance d'arrêt sans avoir à calculer la durée du trajet.\n\n4. Mouvement accéléré vs Mouvement retardé (freinage) :\n- Si vec(a) · vec(v) = a·v > 0 : le vecteur accélération et la vitesse ont même sens, la vitesse augmente en valeur absolue -> mouvement accéléré.\n- Si vec(a) · vec(v) = a·v < 0 : le vecteur accélération s'oppose à la vitesse, la valeur de la vitesse décroît -> mouvement retardé (ou décéléré).",
      "keyRule": "MRU : a = 0, x(t) = v0 t + x0. MRUV : a = cste, v(t) = a t + v0, x(t) = 1/2 a t² + v0 t + x0. Relation indépendante du temps : v1² - v0² = 2 a Delta x.",
      "formulas": [
        {
          "name": "Équations horaires du MRUV",
          "formula": "v(t) = a\\,t + v_0 \\quad ; \\quad x(t) = \\frac{1}{2}\\,a\\,t^2 + v_0\\,t + x_0",
          "note": "a constante en m/s², v0 vitesse initiale, x0 position initiale"
        },
        {
          "name": "Relation indépendante du temps",
          "formula": "v_1^2 - v_0^2 = 2\\,a\\,(x_1 - x_0) = 2\\,a\\,\\Delta x",
          "note": "Permet de calculer une vitesse ou distance sans connaître t"
        }
      ],
      "workedExample": {
        "title": "Calcul de la distance d'arrêt d'un véhicule par la relation indépendante du temps",
        "statement": "Une voiture roulant à la vitesse de 90 km/h (25 m/s) freine d'urgence avec une décélération constante a = -5,0 m/s². Calcule la distance parcourue par la voiture jusqu'à son arrêt complet ainsi que la durée du freinage.",
        "methodSteps": [
          "Étape 1 : Identifier les conditions : v0 = 25 m/s, vitesse finale à l'arrêt v1 = 0 m/s, a = -5,0 m/s².",
          "Étape 2 : Appliquer la relation indépendante du temps : v1² - v0² = 2 a Delta x => 0² - 25² = 2(-5,0) Delta x.",
          "Étape 3 : Calculer la distance d'arrêt : -625 = -10 Delta x => Delta x = 625 / 10 = 62,5 m.",
          "Étape 4 : Calculer la durée du freinage à partir de v = a t + v0 : 0 = -5,0 t + 25 => t = 25 / 5,0 = 5,0 s."
        ],
        "conclusion": "Le véhicule met 5,0 s pour s'immobiliser et parcourt une distance d'arrêt de 62,5 m."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison des mouvements rectilignes uniforme et uniformément varié",
        "tableData": {
          "headers": [
            "Type de mouvement",
            "Accélération a(t)",
            "Vitesse v(t)",
            "Position x(t)",
            "Graphe caractéristique"
          ],
          "rows": [
            [
              "MRU (Uniforme)",
              "a = 0 m/s²",
              "v = v0 = constante",
              "x(t) = v0 t + x0",
              "Droite horizontale v(t) et droite de pente v0 pour x(t)"
            ],
            [
              "MRUV accéléré",
              "a = cste > 0 (a·v > 0)",
              "v(t) croissante (a t + v0)",
              "x(t) = 1/2 a t² + v0 t + x0",
              "Droite croissante v(t) et parabole convexe x(t)"
            ],
            [
              "MRUV retardé",
              "a = cste < 0 (a·v < 0)",
              "v(t) décroissante (a t + v0)",
              "x(t) = 1/2 a t² + v0 t + x0",
              "Droite décroissante v(t) et parabole concave x(t)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Critères d'un Mouvement Rectiligne Uniforme (MRU)",
          "stepTheme": "MRU",
          "stepBadge": "a = 0",
          "paragraphText": "Un mouvement est rectiligne uniforme si sa trajectoire est une droite et sa vitesse vectorielle est rigoureusement constante. Par conséquent, l'accélération est nulle : a = 0 m/s². L'équation horaire est une fonction affine du temps : x(t) = v0 t + x0.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p04_q1",
            "type": "mcq",
            "prompt": "Parmi les équations horaires suivantes (en mètres et secondes), laquelle correspond à un mouvement rectiligne uniforme ?",
            "options": [
              "x(t) = -4 t + 7",
              "x(t) = 3 t² - 2 t + 1",
              "x(t) = 5 / t",
              "x(t) = 4 cos(2 t)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'équation horaire d'un MRU est de la forme x(t) = v0 t + x0 (polynôme de degré 1). x(t) = -4 t + 7 correspond à un MRU de vitesse constante v0 = -4 m/s et d'abscisse initiale x0 = 7 m."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Critères d'un Mouvement Rectiligne Uniformément Varié (MRUV)",
          "stepTheme": "MRUV",
          "stepBadge": "a = cste != 0",
          "paragraphText": "Un mouvement est rectiligne uniformément varié si sa trajectoire est une droite et son vecteur-accélération est constant et non nul (a = cste != 0). La vitesse est affine v(t) = a t + v0 et la position est quadratique x(t) = (1/2) a t² + v0 t + x0.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p04_q2",
            "type": "mcq",
            "prompt": "Un mobile part du repos à l'origine avec une accélération constante a = 3,0 m/s². Quelle distance parcourt-il en 4,0 secondes ?",
            "options": [
              "24 m",
              "12 m",
              "48 m",
              "6,0 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "x(t) = (1/2) a t² + v0 t + x0 avec v0 = 0 et x0 = 0. Donc x(4) = (1/2) × 3,0 × 4,0² = 1,5 × 16 = 24 m."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La formule indépendante du temps",
          "stepTheme": "Formule sans le temps",
          "stepBadge": "v² - v0² = 2 a Delta x",
          "paragraphText": "En combinant les équations v = a t + v0 et x - x0 = (1/2) a t² + v0 t, on élimine la variable t pour établir : v1² - v0² = 2 a (x1 - x0). Cette relation est valable pour tout MRUV.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p04_q3",
            "type": "mcq",
            "prompt": "Un solide lâché sans vitesse initiale depuis le haut d'un plan incliné atteint le bas avec une vitesse de 6,0 m/s sur une distance de glisse de 4,5 m. Que vaut son accélération le long du plan ?",
            "options": [
              "a = 4,0 m/s²",
              "a = 2,0 m/s²",
              "a = 8,0 m/s²",
              "a = 1,33 m/s²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "v1² - v0² = 2 a Delta x => 6,0² - 0 = 2 a (4,5) => 36 = 9 a => a = 36 / 9 = 4,0 m/s²."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Caractère accéléré ou retardé (critère du signe a·v)",
          "stepTheme": "Sens de l'accélération",
          "stepBadge": "Produit a·v",
          "paragraphText": "Dans un mouvement rectiligne, le signe de l'accélération seul ne suffit pas à savoir si le mobile accélère ou freine ! C'est le produit a·v qui décide : si a et v ont même signe (a·v > 0), le mouvement est accéléré ; si a et v sont de signes opposés (a·v < 0), le mouvement est retardé.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p04_q4",
            "type": "mcq",
            "prompt": "Un mobile recule dans le sens des x négatifs avec une vitesse v = -8 m/s et subit une accélération a = -2 m/s². Le mouvement est-il accéléré ou retardé ?",
            "options": [
              "Accéléré, car a et v ont tous deux le même signe négatif (a·v = (-2) × (-8) = +16 > 0).",
              "Retardé, car l'accélération est négative.",
              "Uniforme, car a et v sont tous deux négatifs.",
              "Immobile, car les valeurs négatives s'annulent."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le produit a·v = (-2)(-8) = +16 > 0. L'accélération agit dans le même sens que le déplacement (vers les x négatifs), donc la valeur de la vitesse du mobile passe de 8 m/s à 10 m/s, 12 m/s : le mouvement est accéléré."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Résolution de problèmes de croisement ou rattrapage",
          "stepTheme": "Rattrapage cinématique",
          "stepBadge": "x1(t) = x2(t)",
          "paragraphText": "Lors d'un problème de rencontre ou de dépassement entre deux mobiles 1 et 2, la condition physique de rencontre s'écrit x1(t) = x2(t). La résolution de cette équation algébrique donne la date tR de la rencontre, qui permet ensuite de calculer la position et la vitesse des deux véhicules.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p04_q5",
            "type": "mcq",
            "prompt": "Un motard part du repos en O avec une accélération constante a = 4,0 m/s² au moment précis où un camion le dépasse à vitesse constante v = 20 m/s. Au bout de combien de temps le motard rattrape-t-il le camion ?",
            "options": [
              "t = 10 s",
              "t = 5,0 s",
              "t = 20 s",
              "t = 2,5 s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "x_camion = 20 t et x_motard = (1/2)(4,0) t² = 2,0 t². Condition de rattrapage : 2,0 t² = 20 t => t(2,0 t - 20) = 0. La date non nulle est t = 20 / 2,0 = 10 s."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Aire sous la courbe v(t) et distance parcourue",
          "stepTheme": "Intégration géométrique",
          "stepBadge": "Aire sous v(t)",
          "paragraphText": "Sur un graphe représentant la vitesse v en fonction du temps t, l'aire géométrique comprise entre la courbe v(t), l'axe des temps et les verticales t1 et t2 est rigoureusement égale à la distance parcourue : Delta x = intégrale de v(t) dt.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p04_q6",
            "type": "mcq",
            "prompt": "Un mobile part du repos et accélère uniformément jusqu'à 30 m/s en 6,0 s, puis maintient cette vitesse pendant 10 s. Quelle est la distance totale parcourue calculée par l'aire du graphe v(t) ?",
            "options": [
              "390 m (aire d'un triangle de base 6 s + aire d'un rectangle de base 10 s)",
              "480 m",
              "180 m",
              "300 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Distance phase 1 (triangle) : d1 = (30 × 6,0) / 2 = 90 m. Distance phase 2 (rectangle) : d2 = 30 × 10 = 300 m. Distance totale = 90 + 300 = 390 m (ou aire d'un trapèze : ((16 + 10) × 30) / 2 = 390 m)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège fréquent sur le temps de demi-distance",
          "stepTheme": "Non-linéarité temporelle",
          "stepBadge": "Attention non-linéaire",
          "paragraphText": "En MRUV avec départ arrêté (x = (1/2) a t²), la distance est proportionnelle au CARRÉ du temps. Il faut 71 % du temps total pour parcourir la première moitié de la distance, et seulement 29 % du temps pour la seconde moitié !",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p04_q7",
            "type": "mcq",
            "prompt": "Une voiture accélère uniformément depuis le repos et parcourt 100 m en 10 secondes. À quel instant t a-t-elle franchi la mi-parcours (50 m) ?",
            "options": [
              "t ≈ 7,07 s (soit 10 / sqrt(2), et non 5,0 s)",
              "t = 5,0 s",
              "t = 2,5 s",
              "t = 8,5 s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "x = (1/2) a t². Le rapport des distances donne x / x_tot = (t / t_tot)² => 50 / 100 = 0,5 = (t / 10)², d'où t = 10 × sqrt(0,5) = 10 / sqrt(2) ≈ 7,07 s. Le mobile met beaucoup plus de temps au début car sa vitesse est encore faible."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l01_cinematique_p04_q1",
          "type": "mcq",
          "prompt": "Parmi les équations horaires suivantes (en mètres et secondes), laquelle correspond à un mouvement rectiligne uniforme ?",
          "options": [
            "x(t) = -4 t + 7",
            "x(t) = 3 t² - 2 t + 1",
            "x(t) = 5 / t",
            "x(t) = 4 cos(2 t)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équation horaire d'un MRU est de la forme x(t) = v0 t + x0 (polynôme de degré 1). x(t) = -4 t + 7 correspond à un MRU de vitesse constante v0 = -4 m/s et d'abscisse initiale x0 = 7 m."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p04_q2",
          "type": "mcq",
          "prompt": "Un mobile part du repos à l'origine avec une accélération constante a = 3,0 m/s². Quelle distance parcourt-il en 4,0 secondes ?",
          "options": [
            "24 m",
            "12 m",
            "48 m",
            "6,0 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "x(t) = (1/2) a t² + v0 t + x0 avec v0 = 0 et x0 = 0. Donc x(4) = (1/2) × 3,0 × 4,0² = 1,5 × 16 = 24 m."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p04_q3",
          "type": "mcq",
          "prompt": "Un solide lâché sans vitesse initiale depuis le haut d'un plan incliné atteint le bas avec une vitesse de 6,0 m/s sur une distance de glisse de 4,5 m. Que vaut son accélération le long du plan ?",
          "options": [
            "a = 4,0 m/s²",
            "a = 2,0 m/s²",
            "a = 8,0 m/s²",
            "a = 1,33 m/s²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "v1² - v0² = 2 a Delta x => 6,0² - 0 = 2 a (4,5) => 36 = 9 a => a = 36 / 9 = 4,0 m/s²."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p04_q4",
          "type": "mcq",
          "prompt": "Un mobile recule dans le sens des x négatifs avec une vitesse v = -8 m/s et subit une accélération a = -2 m/s². Le mouvement est-il accéléré ou retardé ?",
          "options": [
            "Accéléré, car a et v ont tous deux le même signe négatif (a·v = (-2) × (-8) = +16 > 0).",
            "Retardé, car l'accélération est négative.",
            "Uniforme, car a et v sont tous deux négatifs.",
            "Immobile, car les valeurs négatives s'annulent."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le produit a·v = (-2)(-8) = +16 > 0. L'accélération agit dans le même sens que le déplacement (vers les x négatifs), donc la valeur de la vitesse du mobile passe de 8 m/s à 10 m/s, 12 m/s : le mouvement est accéléré."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p04_q5",
          "type": "mcq",
          "prompt": "Un motard part du repos en O avec une accélération constante a = 4,0 m/s² au moment précis où un camion le dépasse à vitesse constante v = 20 m/s. Au bout de combien de temps le motard rattrape-t-il le camion ?",
          "options": [
            "t = 10 s",
            "t = 5,0 s",
            "t = 20 s",
            "t = 2,5 s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "x_camion = 20 t et x_motard = (1/2)(4,0) t² = 2,0 t². Condition de rattrapage : 2,0 t² = 20 t => t(2,0 t - 20) = 0. La date non nulle est t = 20 / 2,0 = 10 s."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p04_q6",
          "type": "mcq",
          "prompt": "Un mobile part du repos et accélère uniformément jusqu'à 30 m/s en 6,0 s, puis maintient cette vitesse pendant 10 s. Quelle est la distance totale parcourue calculée par l'aire du graphe v(t) ?",
          "options": [
            "390 m (aire d'un triangle de base 6 s + aire d'un rectangle de base 10 s)",
            "480 m",
            "180 m",
            "300 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Distance phase 1 (triangle) : d1 = (30 × 6,0) / 2 = 90 m. Distance phase 2 (rectangle) : d2 = 30 × 10 = 300 m. Distance totale = 90 + 300 = 390 m (ou aire d'un trapèze : ((16 + 10) × 30) / 2 = 390 m)."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p04_q7",
          "type": "mcq",
          "prompt": "Une voiture accélère uniformément depuis le repos et parcourt 100 m en 10 secondes. À quel instant t a-t-elle franchi la mi-parcours (50 m) ?",
          "options": [
            "t ≈ 7,07 s (soit 10 / sqrt(2), et non 5,0 s)",
            "t = 5,0 s",
            "t = 2,5 s",
            "t = 8,5 s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "x = (1/2) a t². Le rapport des distances donne x / x_tot = (t / t_tot)² => 50 / 100 = 0,5 = (t / 10)², d'où t = 10 × sqrt(0,5) = 10 / sqrt(2) ≈ 7,07 s. Le mobile met beaucoup plus de temps au début car sa vitesse est encore faible."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l01_cinematique_p05",
      "order": 5,
      "title": "Mouvement Circulaire Uniforme (MCU) et paramètres de rotation",
      "summary": "Définition du MCU (trajectoire circulaire et vitesse constante), abscisse angulaire theta(t) = omega t + theta0, abscisse curviligne s(t) = R theta, vitesse angulaire omega (rad/s), période T = 2pi/omega, fréquence N, relation v = R omega, et accélération purement normale centripète an = v²/R = R omega².",
      "conceptExplanation": "1. Définition du Mouvement Circulaire Uniforme (MCU) :\nUn point matériel M décrit un MCU si sa trajectoire est un cercle de rayon R et si la valeur algébrique de sa vitesse instantanée est constante (v = cste).\n\n2. Repérage du mobile sur le cercle :\n- Abscisse angulaire theta : angle orienté theta = (OM0, OM) exprimé en radians (rad).\n- Abscisse curviligne s : longueur de l'arc de cercle s = M0M = R theta (en mètres).\n\n3. Vitesse angulaire et vitesse linéaire :\n- La vitesse angulaire omega est la dérivée temporelle de l'abscisse angulaire :\nomega = dtheta/dt (constante, en rad/s).\n- Équation horaire angulaire : theta(t) = omega t + theta0.\n- Équation horaire curviligne : s(t) = R theta(t) = R (omega t + theta0) = v t + s0.\n- Relation fondamentale entre vitesse linéaire v et vitesse angulaire omega :\nv = ds/dt = R (dtheta/dt) = R omega.\n\n4. Période T et Fréquence N :\n- La période T est la durée mise par le mobile pour effectuer un tour complet (Delta theta = 2 pi rad) :\nT = 2 pi / omega = 2 pi R / v (en secondes, s).\n- La fréquence N (ou f) est le nombre de tours effectués par seconde :\nN = 1 / T = omega / (2 pi) (en Hertz, Hz, ou tours/s).\n\n5. Accélération dans le MCU :\nDans la base de Frenet (tau, n) :\n- Accélération tangentielle : a_tau = dv/dt = 0 (car v = cste).\n- Accélération normale centripète : an = v² / R = (R omega)² / R = R omega².\nL'accélération totale est donc strictement normale et centripète : vec(a) = (R omega²) n = (v² / R) n.",
      "keyRule": "En MCU : v = R omega, theta(t) = omega t + theta0, période T = 2pi/omega, fréquence N = 1/T. L'accélération est purement normale et centripète : a_tau = 0 et an = v²/R = R omega².",
      "formulas": [
        {
          "name": "Lien vitesse linéaire et angulaire",
          "formula": "v = R \\cdot \\omega \\quad ; \\quad s(t) = R \\cdot \\theta(t)",
          "note": "v en m/s, R en m, omega en rad/s"
        },
        {
          "name": "Période et fréquence du MCU",
          "formula": "T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi R}{v} \\quad ; \\quad N = \\frac{1}{T} = \\frac{\\omega}{2\\pi}",
          "note": "T en secondes (s), N en Hertz (Hz)"
        },
        {
          "name": "Accélération centripète du MCU",
          "formula": "a = a_n = \\frac{v^2}{R} = R \\cdot \\omega^2 \\quad ; \\quad a_\\tau = 0",
          "note": "Vecteur-accélération dirigé vers le centre du cercle"
        }
      ],
      "workedExample": {
        "title": "Calcul complet des paramètres cinématiques d'une centrifugeuse",
        "statement": "Une centrifugeuse de laboratoire fait tourner des tubes à essai sur un cercle de rayon R = 20 cm à la fréquence de rotation de 3000 tours par minute. Calcule sa vitesse angulaire omega, la période de rotation T, la vitesse linéaire v d'un échantillon et l'accélération centripète subie.",
        "methodSteps": [
          "Étape 1 : Convertir la fréquence en tours par seconde (Hz) : N = 3000 tr / 60 s = 50 Hz.",
          "Étape 2 : Calculer la vitesse angulaire : omega = 2 pi N = 2 pi × 50 = 100 pi ≈ 314,16 rad/s.",
          "Étape 3 : Calculer la période : T = 1 / N = 1 / 50 = 0,020 s (20 ms).",
          "Étape 4 : Calculer la vitesse linéaire avec R = 0,20 m : v = R omega = 0,20 × 314,16 ≈ 62,83 m/s.",
          "Étape 5 : Calculer l'accélération centripète : an = v² / R = (62,83)² / 0,20 ≈ 19 739 m/s² (soit environ 2012 g !)."
        ],
        "conclusion": "L'échantillon tourne à 314 rad/s avec une vitesse de 62,8 m/s et subit une accélération phénoménale de 19 740 m/s²."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Grandeurs caractéristiques du Mouvement Circulaire Uniforme (MCU)",
        "tableData": {
          "headers": [
            "Grandeur",
            "Symbole",
            "Expression fondamentale",
            "Unité SI"
          ],
          "rows": [
            [
              "Rayon de la trajectoire",
              "R",
              "R = OM = constante",
              "Mètre (m)"
            ],
            [
              "Abscisse angulaire",
              "theta(t)",
              "theta(t) = omega t + theta0",
              "Radian (rad)"
            ],
            [
              "Vitesse angulaire",
              "omega",
              "omega = dtheta/dt = 2 pi / T",
              "Radian par seconde (rad/s)"
            ],
            [
              "Vitesse linéaire",
              "v",
              "v = ds/dt = R omega",
              "Mètre par seconde (m/s)"
            ],
            [
              "Période",
              "T",
              "T = 2 pi / omega = 1 / N",
              "Seconde (s)"
            ],
            [
              "Accélération normale",
              "an",
              "an = v² / R = R omega²",
              "Mètre par seconde carrée (m/s²)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Vitesse angulaire et relation v = R omega",
          "stepTheme": "Vitesse angulaire",
          "stepBadge": "omega en rad/s",
          "paragraphText": "La vitesse angulaire omega = dtheta/dt mesure l'angle balayé par unité de temps en radians par seconde. Elle est reliée à la vitesse linéaire de déplacement v le long du cercle par la relation v = R omega.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p05_q1",
            "type": "mcq",
            "prompt": "Un disque compact (CD) tourne à omega = 50 rad/s. Quelle est la vitesse linéaire d'un point A situé à rA = 2,0 cm du centre et d'un point B situé à la périphérie à rB = 6,0 cm ?",
            "options": [
              "vA = 1,0 m/s et vB = 3,0 m/s",
              "vA = 50 m/s et vB = 50 m/s",
              "vA = 25 m/s et vB = 75 m/s",
              "vA = 0,20 m/s et vB = 0,60 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "v = r omega. vA = 0,02 m × 50 rad/s = 1,0 m/s. vB = 0,06 m × 50 rad/s = 3,0 m/s. Tous les points du solide ont la même vitesse angulaire omega, mais leur vitesse linéaire croît proportionnellement à la distance au centre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Période T et Fréquence N",
          "stepTheme": "Périodicité",
          "stepBadge": "T et N",
          "paragraphText": "La période T est la durée d'un tour complet (T = 2 pi / omega). La fréquence N = 1 / T est le nombre de tours par seconde (en Hertz, Hz). Par exemple, pour les aiguilles d'une montre : aiguille des secondes T = 60 s, des minutes T = 3600 s, des heures T = 12 h = 43 200 s.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p05_q2",
            "type": "mcq",
            "prompt": "La Terre effectue un tour complet sur elle-même en environ 24 heures (86 400 s) dans le référentiel géocentrique. Quelle est sa vitesse angulaire de rotation propre omega_T ?",
            "options": [
              "omega_T ≈ 7,27×10⁻⁵ rad/s",
              "omega_T = 1,0 rad/s",
              "omega_T = 3,6×10⁻³ rad/s",
              "omega_T = 2,4×10⁻⁴ rad/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "omega = 2 pi / T = 2 × 3,14159 / 86 400 s ≈ 7,27×10⁻⁵ rad/s."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Accélération centripète dans le MCU",
          "stepTheme": "Accélération normale",
          "stepBadge": "an = R omega²",
          "paragraphText": "Dans un MCU, l'accélération tangentielle est nulle car la vitesse scalaire ne varie pas. L'accélération totale se réduit à sa composante normale centripète : a = an = v² / R = R omega².",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p05_q3",
            "type": "mcq",
            "prompt": "Un mobile décrit un cercle de rayon R = 0,50 m avec une vitesse constante v = 4,0 m/s. Quelle est son accélération centripète ?",
            "options": [
              "a = 32 m/s²",
              "a = 8,0 m/s²",
              "a = 16 m/s²",
              "a = 0 m/s²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "a = an = v² / R = (4,0)² / 0,50 = 16 / 0,50 = 32 m/s²."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calcul de la date d'accomplissement d'un tour complet",
          "stepTheme": "Tour complet",
          "stepBadge": "Delta theta = 2 pi",
          "paragraphText": "Pour déterminer l'instant t auquel un mobile aura accompli son premier tour complet depuis t = 0 avec l'équation theta(t) = omega t + theta0, la condition angulaire s'écrit : theta(t) = theta0 + 2 pi, soit omega t = 2 pi => t = 2 pi / omega = T.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p05_q4",
            "type": "mcq",
            "prompt": "Un mobile a pour équation horaire angulaire theta(t) = 2,0 t + pi/2 (rad). À quelle date t décrira-t-il un tour complet supplémentaire (Delta theta = 2 pi rad) ?",
            "options": [
              "t = pi s ≈ 3,14 s",
              "t = 2,36 s",
              "t = 1,0 s",
              "t = 6,28 s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Delta theta = omega Delta t => 2 pi = 2,0 Delta t => Delta t = 2 pi / 2,0 = pi s ≈ 3,14 s."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Effet d'une variation de rayon sur l'accélération centripète",
          "stepTheme": "Dépendance en R",
          "stepBadge": "Sensibilité au rayon",
          "paragraphText": "Attention aux formules d'accélération an = v² / R et an = R omega² : à vitesse linéaire v constante, an est inversement proportionnelle à R (un virage plus serré génère plus d'accélération) ; à vitesse angulaire omega constante, an est directement proportionnelle à R (les points extérieurs subissent plus d'accélération).",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p05_q5",
            "type": "mcq",
            "prompt": "Un véhicule aborde à la même vitesse v = 20 m/s deux virages : le premier de rayon R1 = 100 m et le second de rayon R2 = 25 m. Par quel facteur l'accélération centripète est-elle multipliée dans le second virage ?",
            "options": [
              "Elle est multipliée par 4 (an2 = 4 an1)",
              "Elle est divisée par 4",
              "Elle reste inchangée",
              "Elle est multipliée par 16"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À vitesse v constante, an = v² / R. Si le rayon est divisé par 4 (de 100 m à 25 m), l'accélération centripète est multipliée par 4 : an2 / an1 = R1 / R2 = 100 / 25 = 4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Vitesse d'un point à la surface de la Terre selon la latitude",
          "stepTheme": "Rotation terrestre",
          "stepBadge": "Latitude lambda",
          "paragraphText": "À une latitude lambda sur la Terre de rayon RT, un point décrit un cercle de rayon r = RT cos(lambda). Sa vitesse linéaire due à la rotation terrestre vaut v = r omega_T = RT omega_T cos(lambda). Elle est maximale à l'équateur (lambda = 0, v ≈ 1670 km/h) et nulle aux pôles (lambda = 90°).",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p05_q6",
            "type": "mcq",
            "prompt": "À Abidjan (latitude environ lambda ≈ 5° Nord, où cos(5°) ≈ 0,996), sachant que RT ≈ 6400 km et omega_T ≈ 7,27×10⁻⁵ rad/s, quelle est la vitesse linéaire d'entraînement d'un habitant par la rotation de la Terre ?",
            "options": [
              "Environ 463 m/s (soit environ 1668 km/h)",
              "Environ 100 m/s",
              "Environ 0 m/s",
              "Environ 30 km/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "v = RT cos(lambda) omega_T = (6,4×10⁶ m) × 0,996 × (7,27×10⁻⁵ rad/s) ≈ 463,4 m/s ≈ 1668 km/h. Cette vitesse importante vers l'Est est exploitée pour lancer les fusées depuis les zones équatoriales."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège fréquent : unité de la vitesse angulaire",
          "stepTheme": "Unités d'angle",
          "stepBadge": "Radians obligatoires",
          "paragraphText": "Dans toutes les formules de cinématique (v = R omega, an = R omega², theta = omega t), l'angle theta DOIT impérativement être exprimé en RADIANS (rad) et la vitesse angulaire en RADIANS PAR SECONDE (rad/s). Ne jamais introduire de valeurs en degrés ou en tours/min sans conversion préalable (1 tour = 2 pi rad ; 360° = 2 pi rad).",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p05_q7",
            "type": "mcq",
            "prompt": "Un moteur tourne à 1200 tours par minute. Quelle est la valeur de sa vitesse angulaire omega dans le système international ?",
            "options": [
              "omega = 40 pi rad/s ≈ 125,7 rad/s",
              "omega = 1200 rad/s",
              "omega = 20 rad/s",
              "omega = 72 000 rad/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "1200 tours/min = 1200 / 60 tours/s = 20 tours/s. Comme 1 tour = 2 pi radians, omega = 20 × 2 pi = 40 pi ≈ 125,7 rad/s."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l01_cinematique_p05_q1",
          "type": "mcq",
          "prompt": "Un disque compact (CD) tourne à omega = 50 rad/s. Quelle est la vitesse linéaire d'un point A situé à rA = 2,0 cm du centre et d'un point B situé à la périphérie à rB = 6,0 cm ?",
          "options": [
            "vA = 1,0 m/s et vB = 3,0 m/s",
            "vA = 50 m/s et vB = 50 m/s",
            "vA = 25 m/s et vB = 75 m/s",
            "vA = 0,20 m/s et vB = 0,60 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "v = r omega. vA = 0,02 m × 50 rad/s = 1,0 m/s. vB = 0,06 m × 50 rad/s = 3,0 m/s. Tous les points du solide ont la même vitesse angulaire omega, mais leur vitesse linéaire croît proportionnellement à la distance au centre."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p05_q2",
          "type": "mcq",
          "prompt": "La Terre effectue un tour complet sur elle-même en environ 24 heures (86 400 s) dans le référentiel géocentrique. Quelle est sa vitesse angulaire de rotation propre omega_T ?",
          "options": [
            "omega_T ≈ 7,27×10⁻⁵ rad/s",
            "omega_T = 1,0 rad/s",
            "omega_T = 3,6×10⁻³ rad/s",
            "omega_T = 2,4×10⁻⁴ rad/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "omega = 2 pi / T = 2 × 3,14159 / 86 400 s ≈ 7,27×10⁻⁵ rad/s."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p05_q3",
          "type": "mcq",
          "prompt": "Un mobile décrit un cercle de rayon R = 0,50 m avec une vitesse constante v = 4,0 m/s. Quelle est son accélération centripète ?",
          "options": [
            "a = 32 m/s²",
            "a = 8,0 m/s²",
            "a = 16 m/s²",
            "a = 0 m/s²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "a = an = v² / R = (4,0)² / 0,50 = 16 / 0,50 = 32 m/s²."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p05_q4",
          "type": "mcq",
          "prompt": "Un mobile a pour équation horaire angulaire theta(t) = 2,0 t + pi/2 (rad). À quelle date t décrira-t-il un tour complet supplémentaire (Delta theta = 2 pi rad) ?",
          "options": [
            "t = pi s ≈ 3,14 s",
            "t = 2,36 s",
            "t = 1,0 s",
            "t = 6,28 s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Delta theta = omega Delta t => 2 pi = 2,0 Delta t => Delta t = 2 pi / 2,0 = pi s ≈ 3,14 s."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p05_q5",
          "type": "mcq",
          "prompt": "Un véhicule aborde à la même vitesse v = 20 m/s deux virages : le premier de rayon R1 = 100 m et le second de rayon R2 = 25 m. Par quel facteur l'accélération centripète est-elle multipliée dans le second virage ?",
          "options": [
            "Elle est multipliée par 4 (an2 = 4 an1)",
            "Elle est divisée par 4",
            "Elle reste inchangée",
            "Elle est multipliée par 16"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À vitesse v constante, an = v² / R. Si le rayon est divisé par 4 (de 100 m à 25 m), l'accélération centripète est multipliée par 4 : an2 / an1 = R1 / R2 = 100 / 25 = 4."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p05_q6",
          "type": "mcq",
          "prompt": "À Abidjan (latitude environ lambda ≈ 5° Nord, où cos(5°) ≈ 0,996), sachant que RT ≈ 6400 km et omega_T ≈ 7,27×10⁻⁵ rad/s, quelle est la vitesse linéaire d'entraînement d'un habitant par la rotation de la Terre ?",
          "options": [
            "Environ 463 m/s (soit environ 1668 km/h)",
            "Environ 100 m/s",
            "Environ 0 m/s",
            "Environ 30 km/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "v = RT cos(lambda) omega_T = (6,4×10⁶ m) × 0,996 × (7,27×10⁻⁵ rad/s) ≈ 463,4 m/s ≈ 1668 km/h. Cette vitesse importante vers l'Est est exploitée pour lancer les fusées depuis les zones équatoriales."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p05_q7",
          "type": "mcq",
          "prompt": "Un moteur tourne à 1200 tours par minute. Quelle est la valeur de sa vitesse angulaire omega dans le système international ?",
          "options": [
            "omega = 40 pi rad/s ≈ 125,7 rad/s",
            "omega = 1200 rad/s",
            "omega = 20 rad/s",
            "omega = 72 000 rad/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "1200 tours/min = 1200 / 60 tours/s = 20 tours/s. Comme 1 tour = 2 pi radians, omega = 20 × 2 pi = 40 pi ≈ 125,7 rad/s."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l01_cinematique_p06",
      "order": 6,
      "title": "Exploitation des enregistrements chronophotographiques et synthèse d'examen",
      "summary": "Exploitation de pointages expérimentaux, calcul de la vitesse instantanée approchée vi = M(i-1)M(i+1)/(2 tau), calcul de l'accélération ai = (v(i+1) - v(i-1))/(2 tau), tracé et interprétation des graphes v = f(t) et a = f(t), et résolution méthodique des situations d'évaluation de type Baccalauréat.",
      "conceptExplanation": "1. Enregistrement chronophotographique (table à coussin d'air ou caméra rapide) :\nUn dispositif expérimental enregistre les positions successives M0, M1, M2, ..., Mn d'un point mobile à intervalles de temps réguliers et constants notés tau (ex: tau = 40 ms ou tau = 20 ms).\n\n2. Détermination de la vitesse instantanée en un point Mi :\nOn assimile la vitesse instantanée au point Mi à la vitesse moyenne sur l'intervalle [t(i-1), t(i+1)] encadrant Mi :\nvi = M(i-1)M(i+1) / (2 tau).\nSur le schéma, le vecteur vec(v)i a pour origine Mi, est tangent à la trajectoire (porté par la corde M(i-1)M(i+1)), orienté dans le sens du mouvement, et sa longueur est tracée selon une échelle de vitesse imposée.\n\n3. Détermination de l'accélération au point Mi :\nLe vecteur variation de vitesse en Mi est : Delta vec(v)i = vec(v)(i+1) - vec(v)(i-1).\nL'accélération instantanée approchée vaut :\nai = ||Delta vec(v)i|| / (2 tau).\n\n4. Démarche d'analyse d'un mouvement d'après un enregistrement :\n- Si les distances entre points successifs sont constantes (M0M1 = M1M2 = M2M3) sur une droite : le mouvement est Rectiligne Uniforme (MRU).\n- Si les distances successives augmentent régulièrement sur une droite : le mouvement est Rectiligne Uniformément Accéléré (MRUA).\n- Si les points sont régulièrement espacés sur un cercle : le mouvement est Circulaire Uniforme (MCU).",
      "keyRule": "Sur un enregistrement de période tau : vi = M(i-1)M(i+1) / (2 tau). Si les espacements successifs croissent d'une quantité constante Delta(Delta x) = a tau², le mouvement est un MRUV d'accélération a = Delta(Delta x) / tau².",
      "formulas": [
        {
          "name": "Vitesse instantanée approchée sur enregistrement",
          "formula": "v_i = \\frac{M_{i-1}M_{i+1}}{2\\,\\tau}",
          "note": "tau est la durée entre deux marquages consécutifs"
        },
        {
          "name": "Accélération instantanée approchée",
          "formula": "a_i = \\frac{\\|\\vec{v}_{i+1} - \\vec{v}_{i-1}\\|}{2\\,\\tau} \\approx \\frac{v_{i+1} - v_{i-1}}{2\\,\\tau}",
          "note": "Différence vectorielle entre deux vitesses consécutives"
        }
      ],
      "workedExample": {
        "title": "Exploitation d'un enregistrement rectiligne au laboratoire",
        "statement": "Sur un enregistrement rectiligne avec tau = 40 ms (0,040 s), on mesure à la règle les distances depuis l'origine M0 : M0M1 = 1,6 cm, M0M2 = 4,8 cm, M0M3 = 9,6 cm, M0M4 = 16,0 cm. Calcule les vitesses instantanées v1, v2 et v3, puis déduis la valeur de l'accélération du mobile.",
        "methodSteps": [
          "Étape 1 : Calculer la distance M0M2 pour v1 : M0M2 = 4,8 cm = 0,048 m. v1 = M0M2 / (2 tau) = 0,048 / 0,080 = 0,60 m/s.",
          "Étape 2 : Calculer la distance M1M3 pour v2 : M1M3 = M0M3 - M0M1 = 9,6 - 1,6 = 8,0 cm = 0,080 m. v2 = M1M3 / (2 tau) = 0,080 / 0,080 = 1,00 m/s.",
          "Étape 3 : Calculer la distance M2M4 pour v3 : M2M4 = M0M4 - M0M2 = 16,0 - 4,8 = 11,2 cm = 0,112 m. v3 = M2M4 / (2 tau) = 0,112 / 0,080 = 1,40 m/s.",
          "Étape 4 : Constater la variation régulière de vitesse : v2 - v1 = 0,40 m/s et v3 - v2 = 0,40 m/s sur une durée tau = 0,040 s.",
          "Étape 5 : Calculer l'accélération : a = Delta v / tau = 0,40 m/s / 0,040 s = 10,0 m/s²."
        ],
        "conclusion": "Le mobile est animé d'un MRUV d'accélération constante a = 10,0 m/s²."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Méthode d'exploitation chronophotographique",
        "tableData": {
          "headers": [
            "Mesure expérimentale",
            "Formule de calcul",
            "Propriété géométrique",
            "Critère d'identification"
          ],
          "rows": [
            [
              "Vitesse au point Mi",
              "vi = M(i-1)M(i+1) / (2 tau)",
              "Vecteur tangent à la trajectoire en Mi",
              "Si vi = cste : mouvement uniforme"
            ],
            [
              "Variation de vitesse",
              "Delta vi = v(i+1) - v(i-1)",
              "Vecteur orienté vers l'accélération",
              "Si Delta vi // vitesse : trajectoire rectiligne"
            ],
            [
              "Accélération ai",
              "ai = Delta vi / (2 tau)",
              "Indique la force résultante subie",
              "Si ai = cste : mouvement uniformément varié"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Formule de calcul de la vitesse sur un enregistrement",
          "stepTheme": "Pointage expérimental",
          "stepBadge": "vi = M(i-1)M(i+1)/(2 tau)",
          "paragraphText": "Pour déterminer la vitesse instantanée au point Mi à partir d'un enregistrement où les éclairs sont espacés d'une durée tau, on mesure la distance séparant le point précédent M(i-1) du point suivant M(i+1), puis on divise par la durée 2 tau : vi = M(i-1)M(i+1) / (2 tau).",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p06_q1",
            "type": "mcq",
            "prompt": "Sur un enregistrement à l'échelle 1:1 avec tau = 20 ms, la distance réelle mesurée entre M3 et M5 est de 7,2 cm. Quelle est la vitesse instantanée v4 au point M4 ?",
            "options": [
              "v4 = 1,8 m/s",
              "v4 = 3,6 m/s",
              "v4 = 0,72 m/s",
              "v4 = 7,2 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "M3M5 = 7,2 cm = 0,072 m. La durée vaut 2 tau = 2 × 0,020 s = 0,040 s. v4 = 0,072 / 0,040 = 1,8 m/s."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Prise en compte de l'échelle de reproduction",
          "stepTheme": "Échelle de schéma",
          "stepBadge": "Conversion d'échelle",
          "paragraphText": "Si le document présente une échelle de réduction (par exemple 1 cm sur le papier représente 5 cm dans la réalité, soit échelle 1/5), il faut impérativement multiplier la mesure lue à la règle par 5 avant de calculer la vitesse réelle.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p06_q2",
            "type": "mcq",
            "prompt": "Sur une reproduction à l'échelle 1/10 (1 cm papier = 10 cm réels), la règle mesure M1M3 = 3,0 cm avec tau = 50 ms. Quelle est la vitesse réelle v2 du mobile ?",
            "options": [
              "v2 = 3,0 m/s",
              "v2 = 0,30 m/s",
              "v2 = 6,0 m/s",
              "v2 = 30 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Distance réelle = 3,0 cm × 10 = 30 cm = 0,30 m. Durée = 2 tau = 2 × 0,050 s = 0,10 s. v2 = 0,30 m / 0,10 s = 3,0 m/s."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Tracé du vecteur-vitesse sur une copie d'examen",
          "stepTheme": "Représentation vectorielle",
          "stepBadge": "Échelle des vitesses",
          "paragraphText": "Pour tracer le vecteur-vitesse vec(v)i au point Mi : on prend pour origine le point Mi, on trace la tangente (parallèle à la corde M(i-1)M(i+1)), on oriente la flèche dans le sens du mouvement, et on calcule la longueur du segment fléché selon l'échelle graphique imposée (ex: 1 cm pour 1 m/s).",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p06_q3",
            "type": "mcq",
            "prompt": "On a calculé v3 = 2,5 m/s. L'énoncé indique l'échelle : 1 cm représente 0,5 m/s. Quelle doit être la longueur du vecteur vec(v)3 tracé sur le schéma ?",
            "options": [
              "5,0 cm",
              "2,5 cm",
              "1,25 cm",
              "10 cm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Longueur = 2,5 m/s / (0,5 m/s par cm) = 5,0 cm."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Reconnaissance d'un MRUV par les différences secondes",
          "stepTheme": "Différences de distances",
          "stepBadge": "Delta(Delta x) = a tau²",
          "paragraphText": "Dans un MRUV, les distances franchies pendant des intervalles consécutifs tau vérifient la loi des espaces : e2 - e1 = e3 - e2 = ... = a tau². Cette différence d'espacement constante permet de prouver immédiatement qu'un mouvement est uniformément varié.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p06_q4",
            "type": "mcq",
            "prompt": "Sur un enregistrement avec tau = 0,10 s, les segments successifs mesurent : e1 = 2,0 cm, e2 = 5,0 cm, e3 = 8,0 cm, e4 = 11,0 cm. Quel est le type de mouvement et que vaut l'accélération a ?",
            "options": [
              "MRUV avec a = 3,0 m/s²",
              "MRU avec v = 3,0 m/s",
              "MRUV avec a = 0,30 m/s²",
              "Mouvement quelconque sans loi identifiable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La variation d'espacement est constante : Delta e = 3,0 cm = 0,030 m. Comme Delta e = a tau², on en déduit a = Delta e / tau² = 0,030 / (0,10)² = 0,030 / 0,01 = 3,0 m/s². Le mouvement est un MRUV d'accélération 3,0 m/s²."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Construction graphique du vecteur-accélération",
          "stepTheme": "Vecteur accélération",
          "stepBadge": "Construction Delta v",
          "paragraphText": "Pour construire le vecteur Delta vec(v)i = vec(v)(i+1) - vec(v)(i-1) : on translate les vecteurs vec(v)(i+1) et -vec(v)(i-1) à partir d'un même point origine, puis on trace leur somme vectorielle. En mouvement rectiligne accéléré, Delta vec(v)i est colinéaire et de même sens que la vitesse.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p06_q5",
            "type": "mcq",
            "prompt": "Sur une trajectoire rectiligne, on mesure v2 = 1,2 m/s et v4 = 2,0 m/s dans le même sens avec tau = 40 ms. Que vaut l'accélération a3 en M3 ?",
            "options": [
              "a3 = 10 m/s²",
              "a3 = 20 m/s²",
              "a3 = 5,0 m/s²",
              "a3 = 0,8 m/s²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Delta v = v4 - v2 = 2,0 - 1,2 = 0,8 m/s. a3 = Delta v / (2 tau) = 0,8 m/s / (2 × 0,040 s) = 0,8 / 0,08 = 10 m/s²."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Interprétation d'un enregistrement circulaire",
          "stepTheme": "Enregistrement circulaire",
          "stepBadge": "MCU expérimental",
          "paragraphText": "Sur un enregistrement circulaire où les points sont disposés sur un cercle de rayon R avec un arc constant entre points consécutifs, la vitesse linéaire est constante. Les vecteurs Delta vec(v) construits en chaque point pointent tous rigoureusement vers le centre du cercle : c'est la preuve expérimentale directe de l'accélération centripète.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p06_q6",
            "type": "mcq",
            "prompt": "Lors du pointage d'un solide en rotation uniforme sur un disque, que constate-t-on pour la direction du vecteur accélération construit en n'importe quel point de la trajectoire ?",
            "options": [
              "Il est toujours dirigé selon le rayon vers le centre de rotation du disque (centripète).",
              "Il est tangent au cercle dans le sens de la rotation.",
              "Il est dirigé vers l'extérieur du cercle par force centrifuge.",
              "Il est perpendiculaire au plan du disque."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans tout mouvement circulaire uniforme, l'accélération est purement normale et centripète : elle est constamment dirigée vers le centre du cercle de rotation."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège fréquent sur le dénominateur de la vitesse approchée",
          "stepTheme": "Dénominateur 2 tau",
          "stepBadge": "Ne pas diviser par tau",
          "paragraphText": "L'erreur la plus classique consiste à diviser la distance M(i-1)M(i+1) par tau au lieu de 2 tau ! Puisqu'il y a DEUX intervalles de temps de durée tau entre l'instant t(i-1) et l'instant t(i+1), le dénominateur est impérativement 2 tau.",
          "exercise": {
            "id": "terminale_d_physique_l01_cinematique_p06_q7",
            "type": "mcq",
            "prompt": "Pour calculer la vitesse au point M2 à partir de la distance mesurée M1M3, pourquoi divise-t-on par 2 tau et non par tau ?",
            "options": [
              "Parce que le temps écoulé entre le passage en M1 et le passage en M3 est égal à t3 - t1 = 2 tau.",
              "Parce que la vitesse est divisée par 2 au centre de l'intervalle.",
              "Parce que l'appareil enregistre deux fois chaque point.",
              "C'est une convention arbitraire sans fondement temporel."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Entre M1 et M2 il s'écoule un temps tau ; entre M2 et M3 il s'écoule à nouveau un temps tau. L'écart temporel total pour parcourir la distance mesurée M1M3 est donc t3 - t1 = 2 tau."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l01_cinematique_p06_q1",
          "type": "mcq",
          "prompt": "Sur un enregistrement à l'échelle 1:1 avec tau = 20 ms, la distance réelle mesurée entre M3 et M5 est de 7,2 cm. Quelle est la vitesse instantanée v4 au point M4 ?",
          "options": [
            "v4 = 1,8 m/s",
            "v4 = 3,6 m/s",
            "v4 = 0,72 m/s",
            "v4 = 7,2 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "M3M5 = 7,2 cm = 0,072 m. La durée vaut 2 tau = 2 × 0,020 s = 0,040 s. v4 = 0,072 / 0,040 = 1,8 m/s."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p06_q2",
          "type": "mcq",
          "prompt": "Sur une reproduction à l'échelle 1/10 (1 cm papier = 10 cm réels), la règle mesure M1M3 = 3,0 cm avec tau = 50 ms. Quelle est la vitesse réelle v2 du mobile ?",
          "options": [
            "v2 = 3,0 m/s",
            "v2 = 0,30 m/s",
            "v2 = 6,0 m/s",
            "v2 = 30 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Distance réelle = 3,0 cm × 10 = 30 cm = 0,30 m. Durée = 2 tau = 2 × 0,050 s = 0,10 s. v2 = 0,30 m / 0,10 s = 3,0 m/s."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p06_q3",
          "type": "mcq",
          "prompt": "On a calculé v3 = 2,5 m/s. L'énoncé indique l'échelle : 1 cm représente 0,5 m/s. Quelle doit être la longueur du vecteur vec(v)3 tracé sur le schéma ?",
          "options": [
            "5,0 cm",
            "2,5 cm",
            "1,25 cm",
            "10 cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Longueur = 2,5 m/s / (0,5 m/s par cm) = 5,0 cm."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p06_q4",
          "type": "mcq",
          "prompt": "Sur un enregistrement avec tau = 0,10 s, les segments successifs mesurent : e1 = 2,0 cm, e2 = 5,0 cm, e3 = 8,0 cm, e4 = 11,0 cm. Quel est le type de mouvement et que vaut l'accélération a ?",
          "options": [
            "MRUV avec a = 3,0 m/s²",
            "MRU avec v = 3,0 m/s",
            "MRUV avec a = 0,30 m/s²",
            "Mouvement quelconque sans loi identifiable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La variation d'espacement est constante : Delta e = 3,0 cm = 0,030 m. Comme Delta e = a tau², on en déduit a = Delta e / tau² = 0,030 / (0,10)² = 0,030 / 0,01 = 3,0 m/s². Le mouvement est un MRUV d'accélération 3,0 m/s²."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p06_q5",
          "type": "mcq",
          "prompt": "Sur une trajectoire rectiligne, on mesure v2 = 1,2 m/s et v4 = 2,0 m/s dans le même sens avec tau = 40 ms. Que vaut l'accélération a3 en M3 ?",
          "options": [
            "a3 = 10 m/s²",
            "a3 = 20 m/s²",
            "a3 = 5,0 m/s²",
            "a3 = 0,8 m/s²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Delta v = v4 - v2 = 2,0 - 1,2 = 0,8 m/s. a3 = Delta v / (2 tau) = 0,8 m/s / (2 × 0,040 s) = 0,8 / 0,08 = 10 m/s²."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p06_q6",
          "type": "mcq",
          "prompt": "Lors du pointage d'un solide en rotation uniforme sur un disque, que constate-t-on pour la direction du vecteur accélération construit en n'importe quel point de la trajectoire ?",
          "options": [
            "Il est toujours dirigé selon le rayon vers le centre de rotation du disque (centripète).",
            "Il est tangent au cercle dans le sens de la rotation.",
            "Il est dirigé vers l'extérieur du cercle par force centrifuge.",
            "Il est perpendiculaire au plan du disque."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans tout mouvement circulaire uniforme, l'accélération est purement normale et centripète : elle est constamment dirigée vers le centre du cercle de rotation."
        },
        {
          "id": "terminale_d_physique_l01_cinematique_p06_q7",
          "type": "mcq",
          "prompt": "Pour calculer la vitesse au point M2 à partir de la distance mesurée M1M3, pourquoi divise-t-on par 2 tau et non par tau ?",
          "options": [
            "Parce que le temps écoulé entre le passage en M1 et le passage en M3 est égal à t3 - t1 = 2 tau.",
            "Parce que la vitesse est divisée par 2 au centre de l'intervalle.",
            "Parce que l'appareil enregistre deux fois chaque point.",
            "C'est une convention arbitraire sans fondement temporel."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Entre M1 et M2 il s'écoule un temps tau ; entre M2 et M3 il s'écoule à nouveau un temps tau. L'écart temporel total pour parcourir la distance mesurée M1M3 est donc t3 - t1 = 2 tau."
        }
      ]
    }
  ]
};
