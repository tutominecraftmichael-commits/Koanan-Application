import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 1 : Cinématique du point » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1341
export const PHYSIQUE_TLE_CD_L01_CINEMATIQUE: CurriculumChapter = {
  "id": "terminale_c_physique_l01_cinematique",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 1,
  "title": "Leçon 1 : Cinématique du point",
  "summary": "On rappelle les notions de référentiel et de repères, puis on définit les vecteurs position, vitesse et accélération (repère cartésien et base de Frenet) et on étudie les mouvements rectilignes uniforme et uniformément varié, puis le mouvement circulaire uniforme.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1341",
  "points": [
    {
      "id": "terminale_c_physique_l01_cinematique_p01",
      "order": 1,
      "title": "Référentiel, repères et trajectoire",
      "summary": "Décrire un mouvement exige un référentiel, un repère d'espace et un repère de temps.",
      "conceptExplanation": "Un référentiel est un objet par rapport auquel on décrit le mouvement d'un objet : un mouvement n'a de sens que relativement à un référentiel.\nUn repère d'espace est un système d'axes lié à un référentiel, dans lequel on étudie le mouvement ; il permet de définir la position d'un point mobile grâce à ses coordonnées, et le repère généralement utilisé est orthonormé, par exemple R(O, i, j, k).\nLe repère de temps permet de situer le mobile dans le temps : il est défini par un instant-origine choisi arbitrairement comme origine des dates (t = 0 s).\nLa trajectoire d'un point matériel est l'ensemble des positions successives occupées par ce point au cours de son mouvement.",
      "keyRule": "Trois outils pour décrire un mouvement : le référentiel, le repère d'espace (positions) et le repère de temps (dates).",
      "formulas": [],
      "workedExample": {
        "title": "Le coureur de la situation d'apprentissage",
        "statement": "Un élève parcourt une piste rectiligne puis une piste curviligne. Comment décrire son mouvement ?",
        "methodSteps": [
          "On choisit un référentiel, par exemple le sol (la piste).",
          "On y attache un repère d'espace pour repérer les positions successives du coureur.",
          "L'ensemble de ces positions forme sa trajectoire : d'abord une droite, puis une courbe."
        ],
        "conclusion": "C'est la démarche d'enregistrement que la classe met en place pour déterminer les équations horaires des mouvements."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le référentiel",
          "stepTheme": "Le référentiel",
          "stepBadge": "Le référentiel",
          "paragraphText": "• Référentiel : objet par rapport auquel on décrit le mouvement d'un objet.\nSans référentiel précisé, parler de mouvement n'a pas de sens.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p01_q1",
            "type": "mcq",
            "prompt": "Un référentiel est :",
            "options": [
              "Un objet par rapport auquel on décrit le mouvement d'un objet",
              "Un système d'axes gradués",
              "L'ensemble des positions d'un mobile",
              "Un chronomètre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §1.1 du résumé : tout mouvement est relatif à un référentiel."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le repère d'espace",
          "stepTheme": "Le repère d'espace",
          "stepBadge": "Le repère d'espace",
          "paragraphText": "• Repère d'espace : système d'axes lié à un référentiel, dans lequel on étudie le mouvement d'un objet.\nIl permet de définir la position d'un point mobile grâce à ses coordonnées ; le repère généralement utilisé est orthonormé.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p01_q2",
            "type": "mcq",
            "prompt": "Le repère d'espace sert à :",
            "options": [
              "Mesurer les dates",
              "Définir la position d'un point mobile grâce à ses coordonnées",
              "Mesurer la masse du mobile",
              "Décrire les forces appliquées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le rôle donné au §1.2 du résumé ; les dates relèvent du repère de temps."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le repère de temps",
          "stepTheme": "Le repère de temps",
          "stepBadge": "Le repère de temps",
          "paragraphText": "• Repère de temps : il permet de situer un point mobile dans le temps.\nIl est défini par un instant-origine choisi arbitrairement comme origine des dates, t = 0 s.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p01_q3",
            "type": "mcq",
            "prompt": "L'origine des dates du repère de temps est :",
            "options": [
              "Toujours minuit",
              "Le début de l'expérience pour tous les mouvements",
              "Un instant choisi arbitrairement, noté t = 0 s",
              "L'instant où le mobile s'arrête"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé précise que l'instant-origine est choisi arbitrairement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La trajectoire d'un point matériel",
          "stepTheme": "La trajectoire d'un point matériel",
          "stepBadge": "La trajectoire d'un point matériel",
          "paragraphText": "• Trajectoire : ensemble des positions successives occupées par un point matériel au cours de son mouvement.\nSi la trajectoire est une droite, le mouvement est rectiligne ; si c'est un cercle, il est circulaire.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p01_q4",
            "type": "mcq",
            "prompt": "La trajectoire d'un point matériel est :",
            "options": [
              "La distance parcourue",
              "La courbe décrite par le vecteur-vitesse",
              "Le graphe de la vitesse",
              "L'ensemble des positions successives occupées par le point"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la définition du §1.4 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le repère orthonormé R(O, i, j, k)",
          "stepTheme": "Le repère orthonormé R(O, i, j, k)",
          "stepBadge": "Le repère orthonormé R(O, i, j, k)",
          "paragraphText": "Le repère d'espace généralement utilisé est orthonormé : ses axes sont perpendiculaires et ses vecteurs unitaires i, j, k ont même norme.\nL'exemple du résumé est le repère R(O, i, j, k) pour un mouvement dans l'espace.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p01_q5",
            "type": "mcq",
            "prompt": "Le repère d'espace généralement utilisé en cinématique est :",
            "options": [
              "Un repère orthonormé",
              "Un repère quelconque non gradué",
              "Un repère polaire uniquement",
              "Un repère lié au mobile dans tous les cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé le précise au §1.2 : le repère, généralement utilisé, est orthonormé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La cinématique ignore les causes du mouvement",
          "stepTheme": "La cinématique ignore les causes du mouvement",
          "stepBadge": "La cinématique ignore les causes du mouvement",
          "paragraphText": "La documentation rappelle que la cinématique du point est l'étude du mouvement d'un point matériel indépendamment des causes de ce mouvement.\nElle relie position, vitesse et accélération ; les forces relèvent de la dynamique.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p01_q6",
            "type": "mcq",
            "prompt": "La cinématique du point étudie le mouvement :",
            "options": [
              "En fonction des forces appliquées",
              "Indépendamment des causes du mouvement",
              "Uniquement au repos",
              "Uniquement pour les solides étendus"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la documentation du résumé : position, vitesse et accélération, sans les forces."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l01_cinematique_p01_q1",
          "type": "mcq",
          "prompt": "Un référentiel est :",
          "options": [
            "Un objet par rapport auquel on décrit le mouvement d'un objet",
            "Un système d'axes gradués",
            "L'ensemble des positions d'un mobile",
            "Un chronomètre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §1.1 du résumé : tout mouvement est relatif à un référentiel."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p01_q2",
          "type": "mcq",
          "prompt": "Le repère d'espace sert à :",
          "options": [
            "Mesurer les dates",
            "Définir la position d'un point mobile grâce à ses coordonnées",
            "Mesurer la masse du mobile",
            "Décrire les forces appliquées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le rôle donné au §1.2 du résumé ; les dates relèvent du repère de temps."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p01_q3",
          "type": "mcq",
          "prompt": "L'origine des dates du repère de temps est :",
          "options": [
            "Toujours minuit",
            "Le début de l'expérience pour tous les mouvements",
            "Un instant choisi arbitrairement, noté t = 0 s",
            "L'instant où le mobile s'arrête"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé précise que l'instant-origine est choisi arbitrairement."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p01_q4",
          "type": "mcq",
          "prompt": "La trajectoire d'un point matériel est :",
          "options": [
            "La distance parcourue",
            "La courbe décrite par le vecteur-vitesse",
            "Le graphe de la vitesse",
            "L'ensemble des positions successives occupées par le point"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la définition du §1.4 du résumé."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p01_q5",
          "type": "mcq",
          "prompt": "Le repère d'espace généralement utilisé en cinématique est :",
          "options": [
            "Un repère orthonormé",
            "Un repère quelconque non gradué",
            "Un repère polaire uniquement",
            "Un repère lié au mobile dans tous les cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé le précise au §1.2 : le repère, généralement utilisé, est orthonormé."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p01_q6",
          "type": "mcq",
          "prompt": "La cinématique du point étudie le mouvement :",
          "options": [
            "En fonction des forces appliquées",
            "Indépendamment des causes du mouvement",
            "Uniquement au repos",
            "Uniquement pour les solides étendus"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la documentation du résumé : position, vitesse et accélération, sans les forces."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l01_cinematique_p02",
      "order": 2,
      "title": "Vecteur-position et vecteur-vitesse",
      "summary": "OM donne la position ; sa dérivée par rapport au temps donne le vecteur-vitesse.",
      "conceptExplanation": "Le vecteur-position OM est le vecteur qui donne la position d'un point matériel M dans un repère d'espace à chaque instant t.\nDans un repère cartésien, il s'écrit $\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ dans l'espace, $x\\vec{i} + y\\vec{j}$ dans un plan et $x\\vec{i}$ sur une droite ; les coordonnées (x, y, z) en fonction du temps sont les équations horaires du mouvement.\nLe vecteur-vitesse instantanée est la dérivée du vecteur-position par rapport au temps : ses coordonnées sont (dx/dt, dy/dt, dz/dt) et sa valeur est $v = \\sqrt{\\dot{x}^2 + \\dot{y}^2 + \\dot{z}^2}$, en m/s.\nL'équation cartésienne de la trajectoire est la relation qui lie les coordonnées x, y et z entre elles (sans le temps).",
      "keyRule": "v = dOM/dt : on dérive chaque coordonnée de la position pour obtenir celles de la vitesse.",
      "formulas": [
        {
          "name": "Vecteur-position",
          "formula": "\\vec{OM} = x\\,\\vec{i} + y\\,\\vec{j} + z\\,\\vec{k}",
          "note": "Dans l'espace ; se réduire selon la dimension du mouvement."
        },
        {
          "name": "Vecteur-vitesse",
          "formula": "\\vec{v} = \\frac{d\\vec{OM}}{dt}",
          "note": "Coordonnées (ẋ, ẏ, ż) ; valeur v en m/s."
        },
        {
          "name": "Valeur de la vitesse",
          "formula": "v = \\sqrt{\\dot{x}^2 + \\dot{y}^2 + \\dot{z}^2}",
          "note": "Norme du vecteur-vitesse."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application 1",
        "statement": "Dans un repère orthonormé (O, i, j), un mobile a pour équations horaires x(t) = t et y(t) = −t²/2 + 2. Détermine les coordonnées de son vecteur-vitesse et la valeur de la vitesse.",
        "methodSteps": [
          "vx = dx/dt = 1 m/s.",
          "vy = dy/dt = −t.",
          "v = √(vx² + vy²) = √(1 + t²)."
        ],
        "conclusion": "Ce sont les résultats de la résolution de l'activité 1 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le vecteur-position",
          "stepTheme": "Le vecteur-position",
          "stepBadge": "Le vecteur-position",
          "paragraphText": "• Vecteur-position OM : vecteur qui donne la position d'un point matériel M dans un repère d'espace à chaque instant t.\nIl dépend du temps : OM(t), car le mobile se déplace.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p02_q1",
            "type": "mcq",
            "prompt": "Le vecteur-position OM donne :",
            "options": [
              "La position du point M à chaque instant t",
              "La vitesse du point M",
              "La trajectoire complète sans le temps",
              "L'accélération du point M"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §2.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'expression selon la dimension",
          "stepTheme": "L'expression selon la dimension",
          "stepBadge": "L'expression selon la dimension",
          "paragraphText": "Dans l'espace : OM = x i + y j + z k ; dans un plan : OM = x i + y j ; sur une droite : OM = x i.\nLes coordonnées sont les équations horaires (ou équations paramétriques) du mouvement.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p02_q2",
            "type": "mcq",
            "prompt": "Pour un mouvement sur une droite (axe Ox), le vecteur-position s'écrit :",
            "options": [
              "$\\vec{OM} = x\\vec{i} + y\\vec{j}$",
              "$\\vec{OM} = x\\vec{i}$",
              "$\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$",
              "$\\vec{OM} = y\\vec{j}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une seule coordonnée suffit sur une droite : OM = x i (§2.2 du résumé)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le vecteur-vitesse, dérivée de la position",
          "stepTheme": "Le vecteur-vitesse, dérivée de la position",
          "stepBadge": "Le vecteur-vitesse, dérivée de la position",
          "paragraphText": "• Vecteur-vitesse instantanée : dérivée du vecteur-position par rapport au temps, v = dOM/dt.\nSes coordonnées cartésiennes sont les dérivées des coordonnées : (ẋ, ẏ, ż).",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p02_q3",
            "type": "mcq",
            "prompt": "Le vecteur-vitesse instantanée est :",
            "options": [
              "Le produit de la position par le temps",
              "La dérivée du vecteur-accélération",
              "La dérivée du vecteur-position par rapport au temps",
              "La somme des coordonnées"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du §3.1 du résumé : v = dOM/dt."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer les coordonnées de la vitesse",
          "stepTheme": "Calculer les coordonnées de la vitesse",
          "stepBadge": "Calculer les coordonnées de la vitesse",
          "paragraphText": "Dans l'exercice 2, le mobile a pour coordonnées x = 2t et y = −t² (en mètres).\nOn dérive : vx = 2 m/s et vy = −2t ; à t = 0,5 s, vy = −1 m/s et v = √(2² + 1²) ≈ 2,24 m/s.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p02_q4",
            "type": "mcq",
            "prompt": "Pour x = 2t et y = −t², la valeur de la vitesse à t = 0,5 s vaut environ :",
            "options": [
              "2,00 m/s",
              "1,00 m/s",
              "4,00 m/s",
              "2,24 m/s"
            ],
            "correctAnswerIndex": 3,
            "explanation": "vx = 2 et vy = −2t = −1 à t = 0,5 s : v = √(4 + 1) ≈ 2,24 m/s (solution de l'exercice 2)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'équation cartésienne de la trajectoire",
          "stepTheme": "L'équation cartésienne de la trajectoire",
          "stepBadge": "L'équation cartésienne de la trajectoire",
          "paragraphText": "Remarque du résumé : l'équation cartésienne de la trajectoire est la relation qui lie les coordonnées cartésiennes x, y et z.\nOn l'obtient en éliminant le temps t entre les équations horaires.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p02_q5",
            "type": "mcq",
            "prompt": "L'équation cartésienne de la trajectoire relie :",
            "options": [
              "Les coordonnées x, y et z entre elles (sans le temps)",
              "La vitesse et le temps",
              "L'accélération et la position",
              "La masse et la vitesse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la remarque du §2.2 : les équations horaires donnent la position en fonction de t, l'équation cartésienne élimine t."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre équations horaires et trajectoire",
          "stepTheme": "Ne pas confondre équations horaires et trajectoire",
          "stepBadge": "Ne pas confondre équations horaires et trajectoire",
          "paragraphText": "Piège : pour x = t et y = −t²/2 + 2 (activité 1), la trajectoire n'est pas une droite.\nEn éliminant t (t = x), on obtient y = −x²/2 + 2 : c'est une parabole.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p02_q6",
            "type": "mcq",
            "prompt": "Le mobile de l'activité 1 (x = t ; y = −t²/2 + 2) décrit une trajectoire :",
            "options": [
              "Rectiligne",
              "Parabolique, d'équation y = −x²/2 + 2",
              "Circulaire",
              "Quelconque sans équation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En remplaçant t par x dans y(t), on obtient une parabole : la trajectoire se déduit des équations horaires."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l01_cinematique_p02_q1",
          "type": "mcq",
          "prompt": "Le vecteur-position OM donne :",
          "options": [
            "La position du point M à chaque instant t",
            "La vitesse du point M",
            "La trajectoire complète sans le temps",
            "L'accélération du point M"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §2.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p02_q2",
          "type": "mcq",
          "prompt": "Pour un mouvement sur une droite (axe Ox), le vecteur-position s'écrit :",
          "options": [
            "$\\vec{OM} = x\\vec{i} + y\\vec{j}$",
            "$\\vec{OM} = x\\vec{i}$",
            "$\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$",
            "$\\vec{OM} = y\\vec{j}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une seule coordonnée suffit sur une droite : OM = x i (§2.2 du résumé)."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p02_q3",
          "type": "mcq",
          "prompt": "Le vecteur-vitesse instantanée est :",
          "options": [
            "Le produit de la position par le temps",
            "La dérivée du vecteur-accélération",
            "La dérivée du vecteur-position par rapport au temps",
            "La somme des coordonnées"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du §3.1 du résumé : v = dOM/dt."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p02_q4",
          "type": "mcq",
          "prompt": "Pour x = 2t et y = −t², la valeur de la vitesse à t = 0,5 s vaut environ :",
          "options": [
            "2,00 m/s",
            "1,00 m/s",
            "4,00 m/s",
            "2,24 m/s"
          ],
          "correctAnswerIndex": 3,
          "explanation": "vx = 2 et vy = −2t = −1 à t = 0,5 s : v = √(4 + 1) ≈ 2,24 m/s (solution de l'exercice 2)."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p02_q5",
          "type": "mcq",
          "prompt": "L'équation cartésienne de la trajectoire relie :",
          "options": [
            "Les coordonnées x, y et z entre elles (sans le temps)",
            "La vitesse et le temps",
            "L'accélération et la position",
            "La masse et la vitesse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la remarque du §2.2 : les équations horaires donnent la position en fonction de t, l'équation cartésienne élimine t."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p02_q6",
          "type": "mcq",
          "prompt": "Le mobile de l'activité 1 (x = t ; y = −t²/2 + 2) décrit une trajectoire :",
          "options": [
            "Rectiligne",
            "Parabolique, d'équation y = −x²/2 + 2",
            "Circulaire",
            "Quelconque sans équation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "En remplaçant t par x dans y(t), on obtient une parabole : la trajectoire se déduit des équations horaires."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l01_cinematique_p03",
      "order": 3,
      "title": "Vecteur-accélération et base de Frenet",
      "summary": "a = dv/dt ; dans la base de Frenet, a se décompose en une composante tangentielle et une composante normale.",
      "conceptExplanation": "Le vecteur-accélération instantanée est la dérivée du vecteur-vitesse par rapport au temps, donc la dérivée seconde du vecteur-position : ses coordonnées sont (ẍ, ÿ, z̈) et sa valeur s'exprime en m/s².\nLa base de Frenet (τ, n) est une base liée au point mobile : τ est le vecteur unitaire tangent à la trajectoire et n le vecteur unitaire normal à τ, orienté vers la concavité de la trajectoire.\nDans cette base, la vitesse s'écrit v = v τ avec v = ds/dt, où s est l'abscisse curviligne.\nL'accélération se décompose : a = aτ τ + an n, avec l'accélération tangentielle aτ = dv/dt et l'accélération normale an = v²/ρ, où ρ est le rayon de courbure de la trajectoire (ρ = R pour un cercle).",
      "keyRule": "Frenet : aτ = dv/dt (variation de la valeur de v) et an = v²/ρ (changement de direction).",
      "formulas": [
        {
          "name": "Vecteur-accélération",
          "formula": "\\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{OM}}{dt^2}",
          "note": "Coordonnées (ẍ, ÿ, z̈) ; valeur en m/s²."
        },
        {
          "name": "Accélération dans la base de Frenet",
          "formula": "\\vec{a} = \\frac{dv}{dt}\\,\\vec{\\tau} + \\frac{v^2}{\\rho}\\,\\vec{n}",
          "note": "ρ : rayon de courbure ; a = √(aτ² + an²)."
        },
        {
          "name": "Vitesse dans la base de Frenet",
          "formula": "\\vec{v} = v\\,\\vec{\\tau} \\quad ; \\quad v = \\frac{ds}{dt}",
          "note": "s est l'abscisse curviligne du mobile."
        }
      ],
      "workedExample": {
        "title": "L'exercice 3 : accélération et nature du mouvement",
        "statement": "Un point M a pour coordonnées x = 2t et y = −t². Détermine les coordonnées de son accélération, sa valeur à t = 1 s, et si le mouvement est accéléré ou retardé.",
        "methodSteps": [
          "vx = 2 et vy = −2t, donc ax = 0 et ay = −2 m/s².",
          "La valeur de l'accélération est constante : a = 2 m/s².",
          "Le produit scalaire a·v = (−2t) × (−2) = 4t > 0 pour t > 0 : le mouvement est accéléré."
        ],
        "conclusion": "Ce sont les résultats de la solution de l'exercice 3 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le vecteur-accélération",
          "stepTheme": "Le vecteur-accélération",
          "stepBadge": "Le vecteur-accélération",
          "paragraphText": "• Vecteur-accélération instantanée : dérivée du vecteur-vitesse instantanée par rapport au temps, a = dv/dt.\nC'est aussi la dérivée seconde du vecteur-position par rapport au temps.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p03_q1",
            "type": "mcq",
            "prompt": "Le vecteur-accélération instantanée est égal à :",
            "options": [
              "La dérivée de la position par rapport au temps",
              "La dérivée du vecteur-vitesse par rapport au temps",
              "Le produit de la vitesse par le temps",
              "La dérivée seconde de la vitesse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "a = dv/dt = d²OM/dt² : définition du §4.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les coordonnées cartésiennes de l'accélération",
          "stepTheme": "Les coordonnées cartésiennes de l'accélération",
          "stepBadge": "Les coordonnées cartésiennes de l'accélération",
          "paragraphText": "Dans le repère cartésien, a = ẍ i + ÿ j + z̈ k.\nSa valeur est a = √(ẍ² + ÿ² + z̈²) et elle s'exprime en m·s⁻².",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p03_q2",
            "type": "mcq",
            "prompt": "L'unité de la valeur de l'accélération dans le système international est :",
            "options": [
              "Le mètre par seconde (m/s)",
              "Le mètre (m)",
              "Le mètre par seconde carrée (m/s²)",
              "Le radian par seconde"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé le précise : la valeur de l'accélération s'exprime en m·s⁻²."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La base de Frenet, liée au mobile",
          "stepTheme": "La base de Frenet, liée au mobile",
          "stepBadge": "La base de Frenet, liée au mobile",
          "paragraphText": "• Base de Frenet (τ, n) : base liée au point matériel mobile M.\nτ est le vecteur unitaire tangent à la trajectoire ; n est le vecteur unitaire normal à τ, orienté vers la concavité de la trajectoire.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p03_q3",
            "type": "mcq",
            "prompt": "Dans la base de Frenet, le vecteur n est :",
            "options": [
              "Tangent à la trajectoire",
              "Toujours vertical",
              "Lié au repère fixe",
              "Normal à τ et orienté vers la concavité de la trajectoire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la définition du résumé : n pointe vers le centre de courbure, du côté de la concavité."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'accélération tangentielle aτ = dv/dt",
          "stepTheme": "L'accélération tangentielle aτ = dv/dt",
          "stepBadge": "L'accélération tangentielle aτ = dv/dt",
          "paragraphText": "L'accélération tangentielle est la composante de a selon τ : aτ = dv/dt = s̈ (dérivée seconde de l'abscisse curviligne).\nElle traduit la variation de la valeur de la vitesse : si v est constante, aτ = 0.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p03_q4",
            "type": "mcq",
            "prompt": "L'accélération tangentielle d'un mobile dont la valeur de la vitesse est constante vaut :",
            "options": [
              "0",
              "v²/ρ",
              "v/R systématiquement",
              "Elle est toujours maximale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "aτ = dv/dt : si v ne varie pas, aτ = 0 ; il ne reste que l'accélération normale."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'accélération normale an = v²/ρ",
          "stepTheme": "L'accélération normale an = v²/ρ",
          "stepBadge": "L'accélération normale an = v²/ρ",
          "paragraphText": "L'accélération normale est la composante de a selon n : an = v²/ρ, où ρ est le rayon de courbure de la trajectoire.\nRemarque du résumé : si la trajectoire est circulaire, ρ = R, le rayon du cercle.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p03_q5",
            "type": "mcq",
            "prompt": "Pour une trajectoire circulaire de rayon R, l'accélération normale s'écrit :",
            "options": [
              "an = v × R",
              "an = v²/R",
              "an = dv/dt",
              "an = 0"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On remplace le rayon de courbure ρ par R dans an = v²/ρ (remarque du résumé)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Vitesse constante ne veut pas dire accélération nulle",
          "stepTheme": "Vitesse constante ne veut pas dire accélération nulle",
          "stepBadge": "Vitesse constante ne veut pas dire accélération nulle",
          "paragraphText": "Piège : si la direction de la vitesse change, le vecteur-vitesse n'est pas constant et l'accélération n'est pas nulle.\nC'est l'accélération normale qui traduit ce changement de direction, même à valeur de vitesse constante.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p03_q6",
            "type": "mcq",
            "prompt": "Un mobile à valeur de vitesse constante sur une trajectoire courbe a :",
            "options": [
              "Une accélération nulle",
              "Un vecteur-vitesse constant",
              "Une accélération normale non nulle (et aτ = 0)",
              "Une accélération tangentielle maximale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La direction de v change : an = v²/ρ ≠ 0, alors que aτ = dv/dt = 0."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l01_cinematique_p03_q1",
          "type": "mcq",
          "prompt": "Le vecteur-accélération instantanée est égal à :",
          "options": [
            "La dérivée de la position par rapport au temps",
            "La dérivée du vecteur-vitesse par rapport au temps",
            "Le produit de la vitesse par le temps",
            "La dérivée seconde de la vitesse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "a = dv/dt = d²OM/dt² : définition du §4.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p03_q2",
          "type": "mcq",
          "prompt": "L'unité de la valeur de l'accélération dans le système international est :",
          "options": [
            "Le mètre par seconde (m/s)",
            "Le mètre (m)",
            "Le mètre par seconde carrée (m/s²)",
            "Le radian par seconde"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé le précise : la valeur de l'accélération s'exprime en m·s⁻²."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p03_q3",
          "type": "mcq",
          "prompt": "Dans la base de Frenet, le vecteur n est :",
          "options": [
            "Tangent à la trajectoire",
            "Toujours vertical",
            "Lié au repère fixe",
            "Normal à τ et orienté vers la concavité de la trajectoire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la définition du résumé : n pointe vers le centre de courbure, du côté de la concavité."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p03_q4",
          "type": "mcq",
          "prompt": "L'accélération tangentielle d'un mobile dont la valeur de la vitesse est constante vaut :",
          "options": [
            "0",
            "v²/ρ",
            "v/R systématiquement",
            "Elle est toujours maximale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "aτ = dv/dt : si v ne varie pas, aτ = 0 ; il ne reste que l'accélération normale."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p03_q5",
          "type": "mcq",
          "prompt": "Pour une trajectoire circulaire de rayon R, l'accélération normale s'écrit :",
          "options": [
            "an = v × R",
            "an = v²/R",
            "an = dv/dt",
            "an = 0"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On remplace le rayon de courbure ρ par R dans an = v²/ρ (remarque du résumé)."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p03_q6",
          "type": "mcq",
          "prompt": "Un mobile à valeur de vitesse constante sur une trajectoire courbe a :",
          "options": [
            "Une accélération nulle",
            "Un vecteur-vitesse constant",
            "Une accélération normale non nulle (et aτ = 0)",
            "Une accélération tangentielle maximale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La direction de v change : an = v²/ρ ≠ 0, alors que aτ = dv/dt = 0."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l01_cinematique_p04",
      "order": 4,
      "title": "Mouvements rectilignes uniforme et uniformément varié",
      "summary": "x = v₀t + x₀ si v est constant ; x = ½aₓt² + v₀ₓt + x₀ si a est constant.",
      "conceptExplanation": "Un point mobile décrit un mouvement rectiligne et uniforme lorsque son vecteur-vitesse instantanée est constant : le vecteur accélération est alors nul, et sur un axe, x = v₀t + x₀.\nUn point mobile décrit un mouvement rectiligne et uniformément varié si sa trajectoire est rectiligne et si son vecteur-accélération est constant.\nSes équations horaires sont : vx = ax·t + v0x et x = ½·ax·t² + v0x·t + x₀, d'où la relation indépendante du temps v₁² − v₀² = 2·ax·(x₁ − x₀).\nLe mouvement est accéléré si a·v = ax·vx > 0, et retardé si ax·vx < 0.",
      "keyRule": "MRU : v constant, a = 0. MRUV : a constant, v affine en t, x quadratique en t.",
      "formulas": [
        {
          "name": "Équations du MRU",
          "formula": "v = v_0 \\quad ; \\quad x = v_0 t + x_0",
          "note": "Vecteur-vitesse constant, accélération nulle."
        },
        {
          "name": "Équations du MRUV",
          "formula": "v_x = a_x t + v_{0x} \\quad ; \\quad x = \\frac{1}{2} a_x t^2 + v_{0x} t + x_0",
          "note": "Accélération constante ax."
        },
        {
          "name": "Relation sans le temps",
          "formula": "\\Delta v^2 = 2\\,a_x \\times \\Delta x",
          "note": "Obtenue en éliminant t entre les deux équations du MRUV."
        }
      ],
      "workedExample": {
        "title": "Identifier les mouvements (activités 3 et 4)",
        "statement": "Parmi les équations horaires suivantes (en mètres), lesquelles correspondent à un MRU et lesquelles à un MRUV : x = −2t ; x = 2t² − t + 1 ; x = t − 1 ; x = −t²/2 − 3 ?",
        "methodSteps": [
          "MRU (x affine en t) : x = −2t (v₀ = −2 m/s, x₀ = 0) et x = t − 1 (v₀ = 1 m/s, x₀ = −1 m).",
          "MRUV (x quadratique en t) : x = 2t² − t + 1 (ax = 4 m/s², v0x = −1 m/s, x₀ = 1 m).",
          "x = −t²/2 − 3 : ax = −1 m/s², v0x = 0, x₀ = −3 m (MRUV)."
        ],
        "conclusion": "Ce sont les identifications et les valeurs des activités d'application 3 et 4 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le mouvement rectiligne et uniforme",
          "stepTheme": "Le mouvement rectiligne et uniforme",
          "stepBadge": "Le mouvement rectiligne et uniforme",
          "paragraphText": "• Mouvement rectiligne et uniforme : mouvement d'un point dont le vecteur-vitesse instantanée est constant.\nLe vecteur accélération est alors nul : a = 0 m/s².",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p04_q1",
            "type": "mcq",
            "prompt": "Un mouvement rectiligne et uniforme est caractérisé par :",
            "options": [
              "Un vecteur-vitesse constant et une accélération nulle",
              "Une accélération constante non nulle",
              "Une vitesse qui croît linéairement",
              "Une trajectoire circulaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §5.1.1 du résumé : v constant implique a = 0."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'équation horaire du MRU",
          "stepTheme": "L'équation horaire du MRU",
          "stepBadge": "L'équation horaire du MRU",
          "paragraphText": "Sur l'axe (O, i), le MRU a pour équations : v = v₀ et x = v₀t + x₀.\nx₀ est l'abscisse initiale (à t = 0) et v₀ la vitesse, constante.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p04_q2",
            "type": "mcq",
            "prompt": "Pour le mouvement d'équation x = t − 1 (MRU), la vitesse et l'abscisse initiale sont :",
            "options": [
              "v₀ = −1 m/s et x₀ = 1 m",
              "v₀ = 1 m/s et x₀ = −1 m",
              "v₀ = 0 et x₀ = −1 m",
              "v₀ = 1 m/s et x₀ = 0"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En identifiant à x = v₀t + x₀ : v₀ = 1 m/s et x₀ = −1 m (activité 3 du résumé)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le mouvement rectiligne et uniformément varié",
          "stepTheme": "Le mouvement rectiligne et uniformément varié",
          "stepBadge": "Le mouvement rectiligne et uniformément varié",
          "paragraphText": "• Mouvement rectiligne et uniformément varié : trajectoire rectiligne et vecteur-accélération constant.\n« Uniformément varié » porte sur l'accélération constante, pas sur la vitesse.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p04_q3",
            "type": "mcq",
            "prompt": "Un mouvement rectiligne et uniformément varié a :",
            "options": [
              "Une vitesse constante",
              "Une accélération nulle",
              "Un vecteur-accélération constant",
              "Une position affine en t"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du §5.2.1 du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Lire ax, v0x et x₀ dans une équation",
          "stepTheme": "Lire ax, v0x et x₀ dans une équation",
          "stepBadge": "Lire ax, v0x et x₀ dans une équation",
          "paragraphText": "Pour x = 2t² − t + 1, on identifie à x = ½ax t² + v0x t + x₀.\nLe coefficient de t² vaut ½ax = 2, donc ax = 4 m/s² ; v0x = −1 m/s et x₀ = 1 m (activité 4).",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p04_q4",
            "type": "mcq",
            "prompt": "Pour le mouvement x = 2t² − t + 1, l'accélération vaut :",
            "options": [
              "2 m/s²",
              "−1 m/s²",
              "1 m/s²",
              "4 m/s²"
            ],
            "correctAnswerIndex": 3,
            "explanation": "ax = 2 × (coefficient de t²) = 2 × 2 = 4 m/s² : identification faite dans l'activité 4."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La relation Δv² = 2ax·Δx",
          "stepTheme": "La relation Δv² = 2ax·Δx",
          "stepBadge": "La relation Δv² = 2ax·Δx",
          "paragraphText": "En combinant les équations horaires de la vitesse et de l'abscisse, on élimine le temps.\nOn obtient entre deux dates : v₁² − v₀² = 2·ax·(x₁ − x₀), soit Δv² = 2·ax·Δx.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p04_q5",
            "type": "mcq",
            "prompt": "La relation indépendante du temps du MRUV s'écrit :",
            "options": [
              "Δv² = 2·ax·Δx",
              "Δv = 2·ax·Δx",
              "Δx² = 2·ax·Δv",
              "v = ax·x"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la relation du §5.2.2, obtenue en combinant les équations (1) et (2) du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Accéléré ou retardé : le signe de ax·vx",
          "stepTheme": "Accéléré ou retardé : le signe de ax·vx",
          "stepBadge": "Accéléré ou retardé : le signe de ax·vx",
          "paragraphText": "Remarque du résumé : si a·v = ax·vx > 0, le mouvement est accéléré ; si ax·vx < 0, il est retardé.\nCe n'est donc pas le seul signe de l'accélération qui décide, mais le produit avec la vitesse.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p04_q6",
            "type": "mcq",
            "prompt": "Un mobile avec ax = −2 m/s² et vx = −3 m/s est en mouvement :",
            "options": [
              "Retardé, car l'accélération est négative",
              "Accéléré, car ax·vx = 6 > 0",
              "Uniforme",
              "Au repos"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le produit ax·vx est positif : la valeur de la vitesse augmente, le mouvement est accéléré (remarque du résumé)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l01_cinematique_p04_q1",
          "type": "mcq",
          "prompt": "Un mouvement rectiligne et uniforme est caractérisé par :",
          "options": [
            "Un vecteur-vitesse constant et une accélération nulle",
            "Une accélération constante non nulle",
            "Une vitesse qui croît linéairement",
            "Une trajectoire circulaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §5.1.1 du résumé : v constant implique a = 0."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p04_q2",
          "type": "mcq",
          "prompt": "Pour le mouvement d'équation x = t − 1 (MRU), la vitesse et l'abscisse initiale sont :",
          "options": [
            "v₀ = −1 m/s et x₀ = 1 m",
            "v₀ = 1 m/s et x₀ = −1 m",
            "v₀ = 0 et x₀ = −1 m",
            "v₀ = 1 m/s et x₀ = 0"
          ],
          "correctAnswerIndex": 1,
          "explanation": "En identifiant à x = v₀t + x₀ : v₀ = 1 m/s et x₀ = −1 m (activité 3 du résumé)."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p04_q3",
          "type": "mcq",
          "prompt": "Un mouvement rectiligne et uniformément varié a :",
          "options": [
            "Une vitesse constante",
            "Une accélération nulle",
            "Un vecteur-accélération constant",
            "Une position affine en t"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du §5.2.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p04_q4",
          "type": "mcq",
          "prompt": "Pour le mouvement x = 2t² − t + 1, l'accélération vaut :",
          "options": [
            "2 m/s²",
            "−1 m/s²",
            "1 m/s²",
            "4 m/s²"
          ],
          "correctAnswerIndex": 3,
          "explanation": "ax = 2 × (coefficient de t²) = 2 × 2 = 4 m/s² : identification faite dans l'activité 4."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p04_q5",
          "type": "mcq",
          "prompt": "La relation indépendante du temps du MRUV s'écrit :",
          "options": [
            "Δv² = 2·ax·Δx",
            "Δv = 2·ax·Δx",
            "Δx² = 2·ax·Δv",
            "v = ax·x"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la relation du §5.2.2, obtenue en combinant les équations (1) et (2) du résumé."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p04_q6",
          "type": "mcq",
          "prompt": "Un mobile avec ax = −2 m/s² et vx = −3 m/s est en mouvement :",
          "options": [
            "Retardé, car l'accélération est négative",
            "Accéléré, car ax·vx = 6 > 0",
            "Uniforme",
            "Au repos"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le produit ax·vx est positif : la valeur de la vitesse augmente, le mouvement est accéléré (remarque du résumé)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l01_cinematique_p05",
      "order": 5,
      "title": "Le mouvement circulaire et uniforme",
      "summary": "Trajectoire circulaire et vitesse de valeur constante : v = Rω et a = Rω², normale et centripète.",
      "conceptExplanation": "Un point mobile décrit un mouvement circulaire et uniforme si sa trajectoire est circulaire et si la valeur de son vecteur-vitesse est constante.\nOn repère le point sur le cercle par ses coordonnées cartésiennes (x = R cos θ, y = R sin θ), par son abscisse curviligne s = Rθ ou par son abscisse angulaire θ.\nDans la base de Frenet : v = Rω τ, où ω = dθ/dt est la vitesse angulaire, et a = Rω² n : l'accélération est normale et centripète, de valeur an = v²/R = Rω².\nLes équations horaires sont θ = ωt + θ₀ et s = vt + s₀.",
      "keyRule": "MCU : v = Rω ; a = v²/R = Rω², dirigée vers le centre ; θ = ωt + θ₀.",
      "formulas": [
        {
          "name": "Vitesse linéaire et vitesse angulaire",
          "formula": "v = R \\times \\omega",
          "note": "R en mètres, ω en rad/s, v en m/s."
        },
        {
          "name": "Accélération du MCU",
          "formula": "a_n = \\frac{v^2}{R} = R \\times \\omega^2",
          "note": "Accélération normale et centripète ; aτ = 0."
        },
        {
          "name": "Équations horaires angulaires",
          "formula": "\\theta = \\omega t + \\theta_0 \\quad ; \\quad s = R\\theta",
          "note": "s est l'abscisse curviligne."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application 2 : R = 20 cm et ω = 250 rad/s",
        "statement": "Un mobile en mouvement circulaire uniforme décrit un cercle de rayon R = 20 cm à la vitesse angulaire ω = 250 rad/s. Détermine sa vitesse linéaire et son accélération.",
        "methodSteps": [
          "v = Rω = 50 m/s (avec R = 0,2 m et ω = 250 rad/s).",
          "a = v²/R, appliquée avec v = 50 m/s et R = 0,2 m.",
          "On obtient a = 12 500 m/s²."
        ],
        "conclusion": "Ce sont les valeurs calculées dans la résolution de l'activité 2 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du mouvement circulaire et uniforme",
          "stepTheme": "Définition du mouvement circulaire et uniforme",
          "stepBadge": "Définition du mouvement circulaire et uniforme",
          "paragraphText": "• Mouvement circulaire et uniforme : trajectoire circulaire et valeur du vecteur-vitesse constante.\nC'est la définition reprise à la question 1.1 de l'exercice 5 du résumé.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p05_q1",
            "type": "mcq",
            "prompt": "Un mouvement circulaire et uniforme est un mouvement dont :",
            "options": [
              "La trajectoire est circulaire et la valeur de la vitesse est constante",
              "Le vecteur-vitesse est constant",
              "L'accélération est nulle",
              "La vitesse angulaire varie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Attention : le vecteur-vitesse change de direction, seule sa valeur est constante (§5.3.1)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le repérage sur le cercle",
          "stepTheme": "Le repérage sur le cercle",
          "stepBadge": "Le repérage sur le cercle",
          "paragraphText": "On peut repérer M sur le cercle par ses coordonnées cartésiennes, par son abscisse curviligne s ou par son abscisse angulaire θ.\nOn établit : x = R cos θ, y = R sin θ et s = Rθ.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p05_q2",
            "type": "mcq",
            "prompt": "L'abscisse curviligne s d'un point sur un cercle de rayon R est liée à l'abscisse angulaire θ par :",
            "options": [
              "s = θ/R",
              "s = Rθ",
              "s = R/θ",
              "s = R + θ"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation établie au §5.3.2 : l'arc parcouru vaut le rayon multiplié par l'angle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'accélération est centripète",
          "stepTheme": "L'accélération est centripète",
          "stepBadge": "L'accélération est centripète",
          "paragraphText": "Dans le MCU, l'accélération est purement normale : a = an n = Rω² n.\nLe résumé précise qu'elle est normale et centripète, c'est-à-dire dirigée vers le centre du cercle.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p05_q3",
            "type": "mcq",
            "prompt": "Dans un mouvement circulaire et uniforme, le vecteur-accélération est :",
            "options": [
              "Nul",
              "Tangent à la trajectoire",
              "Normal et centripète, de valeur Rω²",
              "Constant en direction"
            ],
            "correctAnswerIndex": 2,
            "explanation": "aτ = 0 car v est constante en valeur ; il reste a = Rω² n, dirigée vers le centre (§5.3.3)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le looping de l'avion (exercice 4)",
          "stepTheme": "Le looping de l'avion (exercice 4)",
          "stepBadge": "Le looping de l'avion (exercice 4)",
          "paragraphText": "L'avion de voltige décrit un cercle à vitesse constante v = 1800 km/h, soit 500 m/s, avec une accélération a = 10 g = 100 m/s².\nLa solution calcule le rayon R = v²/an = 2500 m, puis ω = v/R = 0,2 rad/s.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p05_q4",
            "type": "mcq",
            "prompt": "Le rayon de la trajectoire circulaire de l'avion de l'exercice 4 vaut :",
            "options": [
              "250 m",
              "25 m",
              "5000 m",
              "2500 m"
            ],
            "correctAnswerIndex": 3,
            "explanation": "R = v²/an avec v = 500 m/s et an = 100 m/s² : R = 2500 m (solution de l'exercice 4)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Lire ω et θ₀ dans θ(t) (exercice 5)",
          "stepTheme": "Lire ω et θ₀ dans θ(t) (exercice 5)",
          "stepBadge": "Lire ω et θ₀ dans θ(t) (exercice 5)",
          "paragraphText": "Dans l'exercice 5, l'abscisse angulaire est θ = 2t + π/2 (avec a = 2,56 m/s²).\nPar identification avec θ = ωt + θ₀ : ω = 2 rad/s et θ₀ = π/2 rad ; le rayon vaut R = a/ω² = 0,64 m et v = Rω = 1,28 m/s.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p05_q5",
            "type": "mcq",
            "prompt": "Pour le mobile de l'exercice 5 (θ = 2t + π/2), la vitesse angulaire et le rayon valent :",
            "options": [
              "ω = 2 rad/s et R = 0,64 m",
              "ω = 0,5 rad/s et R = 2,56 m",
              "ω = 2 rad/s et R = 5,12 m",
              "ω = π/2 rad/s et R = 0,64 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ω est le coefficient de t, et R = a/ω² = 2,56/4 = 0,64 m (solution de l'exercice 5)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La date d'un tour complet (exercice 5)",
          "stepTheme": "La date d'un tour complet (exercice 5)",
          "stepBadge": "La date d'un tour complet (exercice 5)",
          "paragraphText": "Un tour complet correspond à θ = 2π rad.\nAvec θ = 2t + π/2, la solution résout l'équation et trouve la première date de tour complet : t = 2,36 s.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p05_q6",
            "type": "mcq",
            "prompt": "Le mobile de l'exercice 5 décrit son premier cercle complet à la date :",
            "options": [
              "t = 3,14 s",
              "t = 2,36 s",
              "t = 1,28 s",
              "t = 6,28 s"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On résout 2t + π/2 = 2π : t = 2,36 s d'après la solution de l'exercice 5."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l01_cinematique_p05_q1",
          "type": "mcq",
          "prompt": "Un mouvement circulaire et uniforme est un mouvement dont :",
          "options": [
            "La trajectoire est circulaire et la valeur de la vitesse est constante",
            "Le vecteur-vitesse est constant",
            "L'accélération est nulle",
            "La vitesse angulaire varie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Attention : le vecteur-vitesse change de direction, seule sa valeur est constante (§5.3.1)."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p05_q2",
          "type": "mcq",
          "prompt": "L'abscisse curviligne s d'un point sur un cercle de rayon R est liée à l'abscisse angulaire θ par :",
          "options": [
            "s = θ/R",
            "s = Rθ",
            "s = R/θ",
            "s = R + θ"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation établie au §5.3.2 : l'arc parcouru vaut le rayon multiplié par l'angle."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p05_q3",
          "type": "mcq",
          "prompt": "Dans un mouvement circulaire et uniforme, le vecteur-accélération est :",
          "options": [
            "Nul",
            "Tangent à la trajectoire",
            "Normal et centripète, de valeur Rω²",
            "Constant en direction"
          ],
          "correctAnswerIndex": 2,
          "explanation": "aτ = 0 car v est constante en valeur ; il reste a = Rω² n, dirigée vers le centre (§5.3.3)."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p05_q4",
          "type": "mcq",
          "prompt": "Le rayon de la trajectoire circulaire de l'avion de l'exercice 4 vaut :",
          "options": [
            "250 m",
            "25 m",
            "5000 m",
            "2500 m"
          ],
          "correctAnswerIndex": 3,
          "explanation": "R = v²/an avec v = 500 m/s et an = 100 m/s² : R = 2500 m (solution de l'exercice 4)."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p05_q5",
          "type": "mcq",
          "prompt": "Pour le mobile de l'exercice 5 (θ = 2t + π/2), la vitesse angulaire et le rayon valent :",
          "options": [
            "ω = 2 rad/s et R = 0,64 m",
            "ω = 0,5 rad/s et R = 2,56 m",
            "ω = 2 rad/s et R = 5,12 m",
            "ω = π/2 rad/s et R = 0,64 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ω est le coefficient de t, et R = a/ω² = 2,56/4 = 0,64 m (solution de l'exercice 5)."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p05_q6",
          "type": "mcq",
          "prompt": "Le mobile de l'exercice 5 décrit son premier cercle complet à la date :",
          "options": [
            "t = 3,14 s",
            "t = 2,36 s",
            "t = 1,28 s",
            "t = 6,28 s"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On résout 2t + π/2 = 2π : t = 2,36 s d'après la solution de l'exercice 5."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l01_cinematique_p06",
      "order": 6,
      "title": "Application : la poursuite sur l'autoroute (situation d'évaluation)",
      "summary": "Une automobile en MRUV rattrape un minibus en MRU : équations horaires, date et lieu du dépassement.",
      "conceptExplanation": "Une automobile A, à l'arrêt au niveau d'une borne O, démarre avec une accélération constante aA = 6 m/s² au moment où un minibus B la dépasse à la vitesse constante vB = 25 m/s.\nL'automobile décrit un mouvement rectiligne et uniformément varié (accéléré) : vA(t) = 6t et xA(t) = 3t².\nLe minibus décrit un mouvement rectiligne et uniforme : xB(t) = 25t.\nL'automobile rattrape le minibus quand xA = xB, à la date tR = 8,33 s, après 208,25 m parcourus ; sa vitesse vaut alors environ 50 m/s, soit 180 km/h, supérieure à la limite de 120 km/h : l'automobiliste est en faute.",
      "keyRule": "Rattrapage : égaliser les deux équations horaires xA(t) = xB(t) et ne garder que la solution physiquement acceptable.",
      "formulas": [
        {
          "name": "Équations horaires de la situation",
          "formula": "x_A(t) = 3t^2 \\quad ; \\quad x_B(t) = 25t",
          "note": "A en MRUV depuis l'arrêt ; B en MRU à 25 m/s."
        }
      ],
      "workedExample": {
        "title": "Le tableau de l'activité 5 : reconnaître un mouvement",
        "statement": "Associe chaque caractéristique au type de mouvement : (a) le vecteur-vitesse est constant ; (b) le vecteur-accélération est constant ; (c) le vecteur-accélération est centripète.",
        "methodSteps": [
          "(a) Vecteur-vitesse constant : mouvement rectiligne uniforme.",
          "(b) Vecteur-accélération constant : mouvement rectiligne uniformément varié.",
          "(c) Accélération centripète : mouvement circulaire uniforme."
        ],
        "conclusion": "Ce sont les correspondances de la résolution de l'activité d'application 5 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "La nature des deux mouvements",
          "stepTheme": "La nature des deux mouvements",
          "stepBadge": "La nature des deux mouvements",
          "paragraphText": "La résolution justifie : A a une trajectoire droite et une accélération constante, c'est un MRUV (accéléré car il part de l'arrêt).\nB a une trajectoire droite et une vitesse constante : c'est un MRU.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p06_q1",
            "type": "mcq",
            "prompt": "Dans la situation d'évaluation, l'automobile A et le minibus B décrivent respectivement :",
            "options": [
              "Un MRUV et un MRU",
              "Un MRU et un MRUV",
              "Deux MRU",
              "Deux MRUV"
            ],
            "correctAnswerIndex": 0,
            "explanation": "A accélère uniformément depuis l'arrêt ; B garde une vitesse constante de 25 m/s."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les équations horaires de A",
          "stepTheme": "Les équations horaires de A",
          "stepBadge": "Les équations horaires de A",
          "paragraphText": "Pour A : v0A = 0 et x0A = 0, avec aA = 6 m/s².\nLa résolution établit vA(t) = 6t et xA(t) = 3t² (car ½ × 6 = 3).",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p06_q2",
            "type": "mcq",
            "prompt": "L'équation horaire de l'automobile A est :",
            "options": [
              "xA(t) = 6t",
              "xA(t) = 3t²",
              "xA(t) = 6t²",
              "xA(t) = 25t"
            ],
            "correctAnswerIndex": 1,
            "explanation": "xA = ½·aA·t² = 3t² puisque A démarre sans vitesse initiale depuis l'origine."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La date de rattrapage",
          "stepTheme": "La date de rattrapage",
          "stepBadge": "La date de rattrapage",
          "paragraphText": "A rattrape B quand leurs abscisses sont égales : 3t² = 25t.\nOutre la solution t = 0 (le départ), la solution physiquement acceptable est tR = 8,33 s.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p06_q3",
            "type": "mcq",
            "prompt": "L'automobile A rattrape le minibus B à la date :",
            "options": [
              "tR = 25 s",
              "tR = 4,17 s",
              "tR = 8,33 s",
              "tR = 6 s"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La résolution donne tR ≈ 8,33 s, en écartant la solution t = 0 du départ."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La distance de rattrapage",
          "stepTheme": "La distance de rattrapage",
          "stepBadge": "La distance de rattrapage",
          "paragraphText": "À la date tR, les deux véhicules ont parcouru la même distance depuis la borne O.\nLa résolution calcule dR = 25 × tR = 208,25 m.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p06_q4",
            "type": "mcq",
            "prompt": "La distance parcourue par chaque véhicule au moment du rattrapage vaut :",
            "options": [
              "25 m",
              "120 m",
              "50 m",
              "208,25 m"
            ],
            "correctAnswerIndex": 3,
            "explanation": "dR = xB(tR) = 25 × 8,33 ≈ 208,25 m d'après la résolution."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La vitesse de A au dépassement",
          "stepTheme": "La vitesse de A au dépassement",
          "stepBadge": "La vitesse de A au dépassement",
          "paragraphText": "La vitesse de A à tR vaut vAR = 6 × tR ≈ 50 m/s.\nConvertie, cela donne 180 km/h, alors que la vitesse maximale autorisée sur les autoroutes ivoiriennes est de 120 km/h.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p06_q5",
            "type": "mcq",
            "prompt": "La vitesse de l'automobile A au moment du dépassement vaut environ :",
            "options": [
              "50 m/s, soit 180 km/h",
              "25 m/s, soit 90 km/h",
              "33 m/s, soit 120 km/h",
              "12,5 m/s, soit 45 km/h"
            ],
            "correctAnswerIndex": 0,
            "explanation": "vAR = aA × tR ≈ 50 m/s = 180 km/h : c'est le calcul de la résolution."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Convertir les vitesses pour conclure",
          "stepTheme": "Convertir les vitesses pour conclure",
          "stepBadge": "Convertir les vitesses pour conclure",
          "paragraphText": "La faute se juge en comparant la vitesse à la limite, dans la même unité.\n50 m/s × 3,6 = 180 km/h > 120 km/h : l'automobiliste a dépassé la vitesse maximale autorisée, il est en faute.",
          "exercise": {
            "id": "terminale_c_physique_l01_cinematique_p06_q6",
            "type": "mcq",
            "prompt": "L'automobiliste est en faute parce que :",
            "options": [
              "Il a rattrapé le minibus",
              "Sa vitesse au dépassement (180 km/h) dépasse la limite autorisée de 120 km/h",
              "Il est parti d'un arrêt",
              "Le minibus roulait trop lentement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion de la résolution : dépassement de la vitesse maximale autorisée sur autoroute."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l01_cinematique_p06_q1",
          "type": "mcq",
          "prompt": "Dans la situation d'évaluation, l'automobile A et le minibus B décrivent respectivement :",
          "options": [
            "Un MRUV et un MRU",
            "Un MRU et un MRUV",
            "Deux MRU",
            "Deux MRUV"
          ],
          "correctAnswerIndex": 0,
          "explanation": "A accélère uniformément depuis l'arrêt ; B garde une vitesse constante de 25 m/s."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p06_q2",
          "type": "mcq",
          "prompt": "L'équation horaire de l'automobile A est :",
          "options": [
            "xA(t) = 6t",
            "xA(t) = 3t²",
            "xA(t) = 6t²",
            "xA(t) = 25t"
          ],
          "correctAnswerIndex": 1,
          "explanation": "xA = ½·aA·t² = 3t² puisque A démarre sans vitesse initiale depuis l'origine."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p06_q3",
          "type": "mcq",
          "prompt": "L'automobile A rattrape le minibus B à la date :",
          "options": [
            "tR = 25 s",
            "tR = 4,17 s",
            "tR = 8,33 s",
            "tR = 6 s"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La résolution donne tR ≈ 8,33 s, en écartant la solution t = 0 du départ."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p06_q4",
          "type": "mcq",
          "prompt": "La distance parcourue par chaque véhicule au moment du rattrapage vaut :",
          "options": [
            "25 m",
            "120 m",
            "50 m",
            "208,25 m"
          ],
          "correctAnswerIndex": 3,
          "explanation": "dR = xB(tR) = 25 × 8,33 ≈ 208,25 m d'après la résolution."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p06_q5",
          "type": "mcq",
          "prompt": "La vitesse de l'automobile A au moment du dépassement vaut environ :",
          "options": [
            "50 m/s, soit 180 km/h",
            "25 m/s, soit 90 km/h",
            "33 m/s, soit 120 km/h",
            "12,5 m/s, soit 45 km/h"
          ],
          "correctAnswerIndex": 0,
          "explanation": "vAR = aA × tR ≈ 50 m/s = 180 km/h : c'est le calcul de la résolution."
        },
        {
          "id": "terminale_c_physique_l01_cinematique_p06_q6",
          "type": "mcq",
          "prompt": "L'automobiliste est en faute parce que :",
          "options": [
            "Il a rattrapé le minibus",
            "Sa vitesse au dépassement (180 km/h) dépasse la limite autorisée de 120 km/h",
            "Il est parti d'un arrêt",
            "Le minibus roulait trop lentement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion de la résolution : dépassement de la vitesse maximale autorisée sur autoroute."
        }
      ]
    }
  ]
};
