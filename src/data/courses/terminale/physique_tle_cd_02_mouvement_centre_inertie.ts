import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : Terminales C, D — Thème : Mécanique — Titre : Mouvement du centre d'inertie d'un solide
export const PHYSIQUE_TLE_CD_L02_MOUVEMENT_CENTRE_INERTIE: CurriculumChapter = {
  "id": "terminale_d_physique_l02_mouvement_centre_inertie",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ],
  "order": 2,
  "title": "Leçon 2 : Mouvement du centre d'inertie d'un solide",
  "summary": "Dynamique newtonienne du solide : définition et hiérarchie des référentiels galiléens (Copernic, géocentrique, terrestre), principe de l'inertie (1ère loi de Newton), énoncé et application du théorème du centre d'inertie (TCI : Somme F_ext = m a_G, 2ème loi de Newton), théorème de l'énergie cinétique (TEC : Delta Ec = Somme W_AB), protocole méthodique de résolution d'un problème de mécanique, dynamique sur plan incliné (avec et sans frottement), et étude rigoureuse du mouvement sur piste circulaire dans la base de Frenet (expression de la réaction normale R(theta) et condition critique de décollement R = 0).",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : Terminales C, D – Thème : Mécanique – Mouvement du centre d'inertie d'un solide)",
  "points": [
    {
      "id": "terminale_d_physique_l02_centre_inertie_p01",
      "order": 1,
      "title": "Référentiels galiléens et principe de l'inertie",
      "summary": "Définition rigoureuse d'un référentiel galiléen, hiérarchie des référentiels (Copernic, géocentrique, terrestre), conditions de validité de l'approximation galiléenne, et énoncé du principe de l'inertie (première loi de Newton).",
      "conceptExplanation": "1. Définition d'un référentiel galiléen :\nUn référentiel galiléen (ou inertiel) est un référentiel dans lequel le principe de l'inertie est rigoureusement vérifié. Tout référentiel animé d'un mouvement de translation rectiligne et uniforme par rapport à un référentiel galiléen est lui-même galiléen.\n\n2. Les trois référentiels usuels de la mécanique :\n- Le référentiel de Copernic (héliocentrique) : son origine est le centre de masse du système solaire (proche du centre du Soleil) et ses trois axes sont dirigés vers trois étoiles lointaines considérées comme fixes. C'est le meilleur référentiel galiléen pour étudier le mouvement des planètes et des sondes interplanétaires.\n- Le référentiel géocentrique : son origine est le centre d'inertie de la Terre et ses axes sont parallèles à ceux du référentiel de Copernic. Il ne tourne pas avec la Terre sur elle-même. Il est galiléen pour étudier les satellites terrestres (mouvements durant quelques heures à quelques jours).\n- Le référentiel terrestre (du laboratoire) : lié à un solide fixe à la surface de la Terre (sol, mur, paillasse). En raison de la rotation propre de la Terre (un tour en 24 h), ce référentiel n'est pas strictement galiléen, mais il peut être considéré comme tel avec une excellente précision pour toutes les expériences de courte durée (durée inférieure à quelques minutes) où les effets de la rotation terrestre sont négligeables.\n\n3. Le principe de l'inertie (première loi de Newton) :\nDans un référentiel galiléen, si un solide n'est soumis à aucune force extérieure, ou si la somme vectorielle des forces extérieures qui s'exercent sur lui est nulle (Somme F_ext = 0) :\n- son vecteur accélération est nul : a_G = 0 ;\n- son centre d'inertie G est soit au repos (v_G = 0), soit animé d'un mouvement rectiligne uniforme (v_G = cste).",
      "keyRule": "Un référentiel galiléen vérifie le principe d'inertie : Somme F_ext = 0 <=> a_G = 0 <=> v_G = cste (repos ou MRU). Le référentiel terrestre est galiléen pour les expériences de laboratoire de courte durée.",
      "formulas": [
        {
          "name": "Principe de l'inertie (1ère loi de Newton)",
          "formula": "\\sum \\vec{F}_\\text{ext} = \\vec{0} \\iff \\vec{a}_G = \\vec{0} \\iff \\vec{v}_G = \\vec{\\text{cste}}",
          "note": "Dans tout référentiel galiléen"
        }
      ],
      "workedExample": {
        "title": "Analyse du comportement d'un pendule suspendu dans un véhicule",
        "statement": "Dans un autocar en ligne droite, un passager observe un pendule suspendu au rétroviseur. Le fil reste rigoureusement vertical tant que le car roule à 80 km/h constants, puis s'incline vers l'arrière quand le car accélère, et vers l'avant quand il freine. Explique ces observations à l'aide des référentiels.",
        "methodSteps": [
          "Étape 1 : Analyser le cas à vitesse constante : le car est en translation rectiligne uniforme par rapport à la route terrestre (référentiel galiléen). Le car constitue donc un référentiel galiléen.",
          "Étape 2 : Bilan des forces sur le pendule à vitesse constante : tension T du fil et poids P. Comme le pendule est au repos dans le car, T + P = 0, le fil reste vertical.",
          "Étape 3 : Analyser le cas de l'accélération : le car accélère, son référentiel n'est plus galiléen. Par inertie, la masse du pendule tend à conserver sa vitesse précédente, ce qui incline le fil vers l'arrière par rapport au car.",
          "Étape 4 : Analyser le cas du freinage : le car ralentit, la masse continue d'avancer par inertie, le fil s'incline vers l'avant."
        ],
        "conclusion": "Le car n'est un référentiel galiléen que lorsqu'il roule à vitesse constante en ligne droite (MRU)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Hiérarchie des référentiels en mécanique",
        "tableData": {
          "headers": [
            "Référentiel",
            "Origine du repère",
            "Orientation des 3 axes",
            "Domaine de validité galiléenne"
          ],
          "rows": [
            [
              "Copernic (héliocentrique)",
              "Centre du système solaire",
              "Vers 3 étoiles lointaines fixes",
              "Mouvement des planètes et sondes spatiales"
            ],
            [
              "Géocentrique",
              "Centre d'inertie de la Terre",
              "Parallèles aux axes de Copernic",
              "Mouvement de la Lune et satellites artificiels"
            ],
            [
              "Terrestre (laboratoire)",
              "Point fixe à la surface de la Terre",
              "Axes liés au sol (vertical, est, nord)",
              "Expériences courantes au laboratoire (durée < quelques minutes)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un référentiel galiléen",
          "stepTheme": "Référentiel galiléen",
          "stepBadge": "Principe d'inertie",
          "paragraphText": "Un référentiel galiléen (ou inertiel) est un référentiel d'espace-temps dans lequel la première loi de Newton (principe d'inertie) est rigoureusement vérifiée : tout corps isolé ou pseudo-isolé y conserve son état de repos ou de mouvement rectiligne uniforme.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p01_q1",
            "type": "mcq",
            "prompt": "Lequel des référentiels suivants peut être considéré avec la plus grande rigueur comme un référentiel galiléen pour étudier le mouvement d'une sonde spatiale voyageant de la Terre vers Jupiter ?",
            "options": [
              "Le référentiel héliocentrique de Copernic",
              "Le référentiel terrestre du centre spatial",
              "Le référentiel géocentrique",
              "Le référentiel lié à la sonde elle-même"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour des trajectoires à l'échelle du système solaire s'étalant sur plusieurs mois ou années, seul le référentiel héliocentrique de Copernic (lié au centre du système solaire et à des étoiles lointaines fixes) offre le caractère galiléen requis."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Principe d'équivalence galiléenne",
          "stepTheme": "Invariance galiléenne",
          "stepBadge": "Translation uniforme",
          "paragraphText": "Tout référentiel R' en mouvement de translation rectiligne et uniforme par rapport à un référentiel galiléen R est lui-même un référentiel galiléen. Les lois de la mécanique newtonienne y ont exactement la même formulation mathématique.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p01_q2",
            "type": "mcq",
            "prompt": "Un avion de ligne vole en palier horizontal à altitude et vitesse constantes (900 km/h en ligne droite dans de l'air calme). Une hôtesse de l'air lâche une pomme dans l'allée centrale. Que devient la pomme dans le référentiel de l'avion ?",
            "options": [
              "Elle tombe verticalement en chute libre aux pieds de l'hôtesse, exactement comme dans une pièce immobile au sol.",
              "Elle est projetée violemment vers l'arrière à 900 km/h.",
              "Elle s'élève vers le plafond de la cabine.",
              "Elle reste en lévitation stationnaire sans tomber."
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'avion étant en translation rectiligne uniforme par rapport à la Terre, la cabine est un référentiel galiléen. Les lois de la chute libre y sont rigoureusement identiques à celles observées au laboratoire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Énoncé du principe de l'inertie",
          "stepTheme": "1ère loi de Newton",
          "stepBadge": "Somme F_ext = 0",
          "paragraphText": "Dans un référentiel galiléen, si la somme vectorielle des forces extérieures appliquées à un solide est nulle (Somme F_ext = 0), le vecteur-accélération du centre d'inertie est nul (a_G = 0). Le solide est alors soit immobile, soit en mouvement rectiligne uniforme.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p01_q3",
            "type": "mcq",
            "prompt": "Si la résultante des forces extérieures appliquées à un solide est nulle dans un référentiel galiléen, peut-on affirmer que ce solide est obligatoirement immobile ?",
            "options": [
              "Non, car il peut également être animé d'un mouvement rectiligne et uniforme de vitesse constante non nulle.",
              "Oui, l'absence de force implique l'immobilité totale et absolue.",
              "Oui, car toute vitesse nécessite une force motrice permanente pour être maintenue.",
              "Non, car il peut tourner sur un cercle à vitesse constante."
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'annulation de la résultante des forces implique a_G = 0 => v_G = cste. Cette constante peut être nulle (repos) ou non nulle (mouvement rectiligne uniforme). Une force n'est pas nécessaire pour maintenir un mouvement, mais pour le MODIFIER."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le référentiel géocentrique et son usage",
          "stepTheme": "Référentiel géocentrique",
          "stepBadge": "Satellites terrestres",
          "paragraphText": "Le référentiel géocentrique a pour origine le centre de la Terre et ses axes pointent vers les trois mêmes étoiles fixes que Copernic. Il ne participe pas à la rotation de 24 h de la Terre. C'est le référentiel adapté pour l'étude des satellites météorologiques, GPS et de la Lune.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p01_q4",
            "type": "mcq",
            "prompt": "Pourquoi n'utilise-t-on pas le référentiel terrestre du laboratoire pour décrire l'orbite circulaire d'un satellite géostationnaire autour de la Terre ?",
            "options": [
              "Parce que dans le référentiel terrestre, le satellite géostationnaire apparaît immobile au-dessus du même point, ce qui masquerait sa dynamique orbitale réelle.",
              "Parce que le satellite est trop lourd pour le référentiel terrestre.",
              "Parce que le champ de gravitation s'annule à l'altitude géostationnaire.",
              "Parce que la vitesse de la lumière empêche les mesures depuis le sol."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un satellite géostationnaire a une période orbitale de 24 h égale à la rotation de la Terre. Vu du sol, il est immobile au zénith. C'est dans le référentiel géocentrique que son orbite circulaire de 42 164 km de rayon prend son sens physique d'équilibre entre gravitation et accélération centripète."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Limites de l'approximation galiléenne du référentiel terrestre",
          "stepTheme": "Rotation de la Terre",
          "stepBadge": "Effets de rotation",
          "paragraphText": "Le référentiel terrestre tourne avec la Terre (vitesse angulaire de 7,27×10⁻⁵ rad/s). Cette rotation engendre une accélération d'entraînement et une accélération de Coriolis. Pour les mouvements rapides sur de grandes distances (vents atmosphériques, courants océaniques, tirs d'artillerie à longue portée), il n'est plus galiléen.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p01_q5",
            "type": "mcq",
            "prompt": "Dans quelle situation expérimentale le référentiel terrestre de la salle de classe NE PEUT-IL PLUS être considéré comme galiléen ?",
            "options": [
              "Lors de l'observation pendant 48 heures de la lente rotation du plan d'oscillation du pendule de Foucault.",
              "Lors de la chute d'une bille d'acier sur 1 mètre durant 0,45 s.",
              "Lors de l'oscillation d'un ressort pendant 10 secondes.",
              "Lors du titrage pH-métrique d'un acide au laboratoire."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le pendule de Foucault tourne de plusieurs degrés par heure en raison directe de la rotation terrestre : sur une longue durée (plusieurs heures à jours), l'écart au caractère galiléen devient prépondérant et observable."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le centre d'inertie G et le centre de gravité",
          "stepTheme": "Centre d'inertie",
          "stepBadge": "Barycentre G",
          "paragraphText": "Le centre d'inertie G d'un solide est le barycentre des masses élémentaires qui le composent : Somme mi GMi = 0. Dans un champ de gravitation uniforme, le centre d'inertie coïncide rigoureusement avec le centre de gravité du solide (point d'application du poids P).",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p01_q6",
            "type": "mcq",
            "prompt": "Deux masses ponctuelles m1 = 200 g et m2 = 600 g sont fixées aux extrémités d'une tige rigide sans masse de longueur L = 80 cm. À quelle distance du point m1 se trouve le centre d'inertie G ?",
            "options": [
              "xG = 60 cm de m1 (plus proche de la masse la plus lourde)",
              "xG = 40 cm (au milieu de la tige)",
              "xG = 20 cm de m1",
              "xG = 75 cm de m1"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition barycentrique : (m1 + m2) xG = m2 L => (200 + 600) xG = 600 × 80 => 800 xG = 48 000 => xG = 60 cm. Le centre d'inertie est situé aux 3/4 de la distance à partir de m1, donc plus près de m2."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège fréquent : forces d'inertie dans un référentiel non galiléen",
          "stepTheme": "Référentiels accélérés",
          "stepBadge": "Attention au bac",
          "paragraphText": "Dans un véhicule qui freine ou accélère, la sensation d'être 'poussé' vers l'avant ou l'arrière n'est PAS causée par une force physique réelle, mais par l'inertie de notre propre corps qui tend à conserver sa vitesse dans le référentiel terrestre galiléen. Les lois de Newton ne s'appliquent directement que dans les référentiels galiléens.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p01_q7",
            "type": "mcq",
            "prompt": "Lorsqu'une voiture tourne brusquement vers la gauche, les passagers se sentent déportés vers la droite. Quelle force physique réelle extérieure s'exerce sur eux vers la droite ?",
            "options": [
              "Aucune force réelle extérieure ne s'exerce vers la droite : c'est l'inertie des passagers qui tend à poursuivre la trajectoire rectiligne dans le référentiel terrestre.",
              "Une force centrifuge gravitationnelle émise par le moteur.",
              "Le poids du véhicule qui bascule vers la droite.",
              "La force magnétique de la batterie."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il n'existe aucune force physique s'appliquant vers la droite. La voiture tourne vers la gauche sous l'action des pneus, tandis que le corps des passagers continue en ligne droite par inertie, créant l'illusion d'une projection latérale."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l02_centre_inertie_p01_q1",
          "type": "mcq",
          "prompt": "Lequel des référentiels suivants peut être considéré avec la plus grande rigueur comme un référentiel galiléen pour étudier le mouvement d'une sonde spatiale voyageant de la Terre vers Jupiter ?",
          "options": [
            "Le référentiel héliocentrique de Copernic",
            "Le référentiel terrestre du centre spatial",
            "Le référentiel géocentrique",
            "Le référentiel lié à la sonde elle-même"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour des trajectoires à l'échelle du système solaire s'étalant sur plusieurs mois ou années, seul le référentiel héliocentrique de Copernic (lié au centre du système solaire et à des étoiles lointaines fixes) offre le caractère galiléen requis."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p01_q2",
          "type": "mcq",
          "prompt": "Un avion de ligne vole en palier horizontal à altitude et vitesse constantes (900 km/h en ligne droite dans de l'air calme). Une hôtesse de l'air lâche une pomme dans l'allée centrale. Que devient la pomme dans le référentiel de l'avion ?",
          "options": [
            "Elle tombe verticalement en chute libre aux pieds de l'hôtesse, exactement comme dans une pièce immobile au sol.",
            "Elle est projetée violemment vers l'arrière à 900 km/h.",
            "Elle s'élève vers le plafond de la cabine.",
            "Elle reste en lévitation stationnaire sans tomber."
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'avion étant en translation rectiligne uniforme par rapport à la Terre, la cabine est un référentiel galiléen. Les lois de la chute libre y sont rigoureusement identiques à celles observées au laboratoire."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p01_q3",
          "type": "mcq",
          "prompt": "Si la résultante des forces extérieures appliquées à un solide est nulle dans un référentiel galiléen, peut-on affirmer que ce solide est obligatoirement immobile ?",
          "options": [
            "Non, car il peut également être animé d'un mouvement rectiligne et uniforme de vitesse constante non nulle.",
            "Oui, l'absence de force implique l'immobilité totale et absolue.",
            "Oui, car toute vitesse nécessite une force motrice permanente pour être maintenue.",
            "Non, car il peut tourner sur un cercle à vitesse constante."
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'annulation de la résultante des forces implique a_G = 0 => v_G = cste. Cette constante peut être nulle (repos) ou non nulle (mouvement rectiligne uniforme). Une force n'est pas nécessaire pour maintenir un mouvement, mais pour le MODIFIER."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p01_q4",
          "type": "mcq",
          "prompt": "Pourquoi n'utilise-t-on pas le référentiel terrestre du laboratoire pour décrire l'orbite circulaire d'un satellite géostationnaire autour de la Terre ?",
          "options": [
            "Parce que dans le référentiel terrestre, le satellite géostationnaire apparaît immobile au-dessus du même point, ce qui masquerait sa dynamique orbitale réelle.",
            "Parce que le satellite est trop lourd pour le référentiel terrestre.",
            "Parce que le champ de gravitation s'annule à l'altitude géostationnaire.",
            "Parce que la vitesse de la lumière empêche les mesures depuis le sol."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un satellite géostationnaire a une période orbitale de 24 h égale à la rotation de la Terre. Vu du sol, il est immobile au zénith. C'est dans le référentiel géocentrique que son orbite circulaire de 42 164 km de rayon prend son sens physique d'équilibre entre gravitation et accélération centripète."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p01_q5",
          "type": "mcq",
          "prompt": "Dans quelle situation expérimentale le référentiel terrestre de la salle de classe NE PEUT-IL PLUS être considéré comme galiléen ?",
          "options": [
            "Lors de l'observation pendant 48 heures de la lente rotation du plan d'oscillation du pendule de Foucault.",
            "Lors de la chute d'une bille d'acier sur 1 mètre durant 0,45 s.",
            "Lors de l'oscillation d'un ressort pendant 10 secondes.",
            "Lors du titrage pH-métrique d'un acide au laboratoire."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pendule de Foucault tourne de plusieurs degrés par heure en raison directe de la rotation terrestre : sur une longue durée (plusieurs heures à jours), l'écart au caractère galiléen devient prépondérant et observable."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p01_q6",
          "type": "mcq",
          "prompt": "Deux masses ponctuelles m1 = 200 g et m2 = 600 g sont fixées aux extrémités d'une tige rigide sans masse de longueur L = 80 cm. À quelle distance du point m1 se trouve le centre d'inertie G ?",
          "options": [
            "xG = 60 cm de m1 (plus proche de la masse la plus lourde)",
            "xG = 40 cm (au milieu de la tige)",
            "xG = 20 cm de m1",
            "xG = 75 cm de m1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition barycentrique : (m1 + m2) xG = m2 L => (200 + 600) xG = 600 × 80 => 800 xG = 48 000 => xG = 60 cm. Le centre d'inertie est situé aux 3/4 de la distance à partir de m1, donc plus près de m2."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p01_q7",
          "type": "mcq",
          "prompt": "Lorsqu'une voiture tourne brusquement vers la gauche, les passagers se sentent déportés vers la droite. Quelle force physique réelle extérieure s'exerce sur eux vers la droite ?",
          "options": [
            "Aucune force réelle extérieure ne s'exerce vers la droite : c'est l'inertie des passagers qui tend à poursuivre la trajectoire rectiligne dans le référentiel terrestre.",
            "Une force centrifuge gravitationnelle émise par le moteur.",
            "Le poids du véhicule qui bascule vers la droite.",
            "La force magnétique de la batterie."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il n'existe aucune force physique s'appliquant vers la droite. La voiture tourne vers la gauche sous l'action des pneus, tandis que le corps des passagers continue en ligne droite par inertie, créant l'illusion d'une projection latérale."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l02_centre_inertie_p02",
      "order": 2,
      "title": "Théorème du centre d'inertie (Deuxième loi de Newton)",
      "summary": "Énoncé vectoriel Somme F_ext = m a_G, notion de force résultante, quantité de mouvement p = m v_G et formulation différentielle Somme F_ext = dp/dt, masse inertielle, et projections cartésiennes scalaires.",
      "conceptExplanation": "1. Énoncé du théorème du centre d'inertie (TCI) :\nDans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un système matériel de masse constante m est égale au produit de sa masse par le vecteur-accélération de son centre d'inertie :\nSomme vec(F)_ext = m vec(a)_G.\n\n2. Formulation par la quantité de mouvement :\nLa quantité de mouvement d'un solide de masse m dont le centre d'inertie est animé de la vitesse vec(v)_G est le vecteur :\nvec(p) = m vec(v)_G (en kg·m·s⁻¹).\nLe théorème du centre d'inertie s'énonce de façon générale par :\nSomme vec(F)_ext = d(vec(p))/dt.\nSi la masse m est constante : d(m vec(v)_G)/dt = m d(vec(v)_G)/dt = m vec(a)_G.\n\n3. Projections scalaires dans un repère cartésien (O, i, j, k) :\nL'égalité vectorielle Somme vec(F)_ext = m vec(a)_G équivaut à trois équations différentielles scalaires indépendantes le long des axes du repère :\n- Axe Ox : Somme F_ext,x = m a_x = m (d²x/dt²)\n- Axe Oy : Somme F_ext,y = m a_y = m (d²y/dt²)\n- Axe Oz : Somme F_ext,z = m a_z = m (d²z/dt²).\n\n4. Caractéristiques de la masse inertielle :\nLa masse m qui figure dans la relation du TCI mesure l'inertie du corps, c'est-à-dire son opposition ou sa résistance à toute modification de son vecteur-vitesse sous l'action d'une force donnée.",
      "keyRule": "Dans un référentiel galiléen : Somme F_ext = m a_G = dp/dt. La projection scalaire sur chaque axe cartésien donne Somme F_x = m a_x, Somme F_y = m a_y, Somme F_z = m a_z.",
      "formulas": [
        {
          "name": "Théorème du centre d'inertie (2ème loi de Newton)",
          "formula": "\\sum \\vec{F}_\\text{ext} = m \\cdot \\vec{a}_G",
          "note": "En Newtons (N), avec m en kg et a_G en m/s²"
        },
        {
          "name": "Formulation par la quantité de mouvement",
          "formula": "\\sum \\vec{F}_\\text{ext} = \\frac{d\\vec{p}}{dt} \\quad \\text{avec} \\quad \\vec{p} = m \\cdot \\vec{v}_G",
          "note": "Formulation fondamentale valable même si la masse varie"
        }
      ],
      "workedExample": {
        "title": "Calcul de la force motrice requise pour accélérer un solide",
        "statement": "Un wagonnet de masse m = 500 kg se déplace sur une voie rectiligne horizontale. Les forces de frottement équivalent à une force constante f = 150 N opposée au mouvement. Détermine l'intensité de la force motrice horizontale F nécessaire pour conférer au wagonnet une accélération constante a = 1,2 m/s².",
        "methodSteps": [
          "Étape 1 : Système : le wagonnet (m = 500 kg). Référentiel terrestre galiléen muni d'un axe Ox orienté dans le sens du mouvement.",
          "Étape 2 : Bilan des forces : Poids P (vertical vers le bas), réaction normale Rn (verticale vers le haut), force motrice F (axe Ox positif), frottement f (axe Ox négatif).",
          "Étape 3 : Appliquer le TCI : vec(P) + vec(Rn) + vec(F) + vec(f) = m vec(a).",
          "Étape 4 : Projeter sur l'axe horizontal Ox : 0 + 0 + F - f = m a => F = m a + f.",
          "Étape 5 : Calcul numérique : F = (500 kg × 1,2 m/s²) + 150 N = 600 N + 150 N = 750 N."
        ],
        "conclusion": "La force motrice doit développer une intensité constante de 750 N."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Composantes et bilan scalaire du théorème du centre d'inertie",
        "tableData": {
          "headers": [
            "Axe de projection",
            "Somme des composantes de force",
            "Accélération scalaire",
            "Équation différentielle"
          ],
          "rows": [
            [
              "Axe Ox",
              "Somme Fx",
              "ax = Somme Fx / m",
              "d²x/dt² = ax"
            ],
            [
              "Axe Oy",
              "Somme Fy",
              "ay = Somme Fy / m",
              "d²y/dt² = ay"
            ],
            [
              "Axe Oz",
              "Somme Fz",
              "az = Somme Fz / m",
              "d²z/dt² = az"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Énoncé vectoriel de la 2ème loi de Newton",
          "stepTheme": "2ème loi de Newton",
          "stepBadge": "TCI fondamental",
          "paragraphText": "La deuxième loi de Newton affirme que dans un référentiel galiléen, l'accélération vec(a)_G d'un point matériel de masse m est directement proportionnelle à la force résultante vec(F)_ext appliquée et inversement proportionnelle à sa masse : vec(a)_G = (1/m) Somme vec(F)_ext.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p02_q1",
            "type": "mcq",
            "prompt": "Une force constante résultante de 12 N est appliquée à un solide de masse m = 3,0 kg initialement au repos. Quelle est l'accélération acquise par le solide ?",
            "options": [
              "a = 4,0 m/s²",
              "a = 36 m/s²",
              "a = 0,25 m/s²",
              "a = 9,0 m/s²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "a = F / m = 12 N / 3,0 kg = 4,0 m/s²."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Vecteur quantité de mouvement",
          "stepTheme": "Quantité de mouvement",
          "stepBadge": "p = m v",
          "paragraphText": "Le vecteur quantité de mouvement vec(p) = m vec(v) traduit l'effet combiné de la masse et de la vitesse. La deuxième loi de Newton sous forme générale s'écrit Somme vec(F)_ext = dp/dt. Si un système est isolé (Somme vec(F)_ext = 0), son vecteur quantité de mouvement est rigoureusement conservé (principe de conservation du recul, propulsion par réaction).",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p02_q2",
            "type": "mcq",
            "prompt": "Un fusil de masse M = 4,0 kg tire une balle de masse m = 20 g (0,020 kg) qui sort du canon à la vitesse de 600 m/s. En admettant le système fusil-balle isolé horizontalement lors du tir, quelle est la vitesse de recul VR du fusil ?",
            "options": [
              "VR = -3,0 m/s (recul dans le sens opposé à la balle)",
              "VR = -30 m/s",
              "VR = 0 m/s",
              "VR = +12 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Conservation de la quantité de mouvement : p_initial = 0 => M VR + m v = 0 => VR = - (m v) / M = -(0,020 × 600) / 4,0 = -12 / 4,0 = -3,0 m/s."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Projection sur des axes orthogonaux",
          "stepTheme": "Projections scalaires",
          "stepBadge": "Méthode de projection",
          "paragraphText": "Le TCI est une égalité vectorielle. Pour l'exploiter numériquement, on projette la relation sur les axes d'un repère orthonormé judicieusement choisi (par exemple un axe Ox colinéaire au déplacement et un axe Oy perpendiculaire).",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p02_q3",
            "type": "mcq",
            "prompt": "Un traîneau de masse m = 40 kg glisse sur la neige sans frottement sous l'action d'une corde tirée avec une force F = 80 N faisant un angle alpha = 60° avec l'horizontale. Quelle est l'accélération horizontale ax du traîneau ?",
            "options": [
              "ax = 1,0 m/s²",
              "ax = 2,0 m/s²",
              "ax = 1,73 m/s²",
              "ax = 0,50 m/s²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Projection sur l'axe horizontal Ox : Fx = F cos(alpha) = m ax => ax = (F cos 60°) / m = (80 × 0,50) / 40 = 40 / 40 = 1,0 m/s²."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Mouvement d'un solide en chute libre sans vitesse initiale",
          "stepTheme": "Chute libre",
          "stepBadge": "a = g",
          "paragraphText": "Un solide est en chute libre s'il n'est soumis qu'à son propre poids P = m g. D'après le TCI : m g = m a => a = g. L'accélération est strictement verticale vers le bas, constante, et indépendante de la masse du solide.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p02_q4",
            "type": "mcq",
            "prompt": "Dans le vide (sans aucune résistance de l'air), une bille de plomb de 500 g et une plume de 1 g sont lâchées de la même hauteur en même temps sans vitesse initiale. Que constate-t-on ?",
            "options": [
              "Elles touchent le sol exactement au même instant avec la même vitesse car leur accélération a = g est identique.",
              "La bille de plomb arrive 500 fois plus vite car son poids est 500 fois plus grand.",
              "La plume flotte et met plus de temps à descendre.",
              "Le plomb accélère mais la plume a une vitesse constante."
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après la deuxième loi de Newton, m g = m a implique a = g pour tous les corps sans exception dans le vide. La masse m s'élimine de l'équation : tous les objets chutent avec la même accélération de 9,8 m/s²."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Action et réaction (3ème loi de Newton)",
          "stepTheme": "Interactions mutuelles",
          "stepBadge": "3ème loi de Newton",
          "paragraphText": "La troisième loi de Newton (principe des actions réciproques) énonce que si un corps A exerce une force F(A->B) sur un corps B, alors le corps B exerce simultanément sur le corps A une force opposée F(B->A) : F(A->B) = -F(B->A). Ces deux forces ont même droite d'action, même intensité, des sens opposés, mais s'appliquent sur des corps DIFFÉRENTS.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p02_q5",
            "type": "mcq",
            "prompt": "La Terre attire une pomme de 200 g avec une force gravitationnelle égale à son poids P ≈ 2,0 N. Avec quelle force la pomme attire-t-elle la Terre en retour ?",
            "options": [
              "Exactement avec la même intensité de 2,0 N, mais dirigée vers le haut vers la pomme.",
              "Avec une force nulle car la Terre est infiniment plus massive.",
              "Avec une force infime de 10⁻²⁴ N.",
              "La pomme n'exerce aucune force d'attraction sur la Terre."
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après le principe des actions réciproques, les forces d'interaction sont rigoureusement égales en intensité : la pomme attire la Terre avec exactement 2,0 N. Mais comme la masse de la Terre est immense (6×10²⁴ kg), son accélération résultante est quasi nulle (a = 2 / 6×10²⁴ ≈ 3×10⁻²⁵ m/s²)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Calcul de la réaction normale d'un support",
          "stepTheme": "Réaction d'appui",
          "stepBadge": "Équilibre normal",
          "paragraphText": "Lorsqu'un solide repose sans décollement sur une surface (axe Oy normal à la surface), l'accélération perpendiculaire au support est nulle (ay = 0). La projection du TCI sur l'axe normal permet de déduire la valeur de la réaction normale Rn exercée par le support.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p02_q6",
            "type": "mcq",
            "prompt": "Un carton de masse m = 15 kg repose sur le plancher horizontal d'un ascenseur qui accélère vers le haut avec a = 2,0 m/s² (avec g = 10 m/s²). Quelle est la force de réaction Rn exercée par le plancher sur le carton ?",
            "options": [
              "Rn = 180 N",
              "Rn = 150 N",
              "Rn = 120 N",
              "Rn = 30 N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Projection sur l'axe vertical orienté vers le haut : Rn - P = m a => Rn = m(g + a) = 15 kg × (10 + 2,0) = 15 × 12 = 180 N. L'ascenseur en accélération vers le haut augmente la réaction d'appui normale."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège fréquent : confusion entre poids P et réaction normale Rn",
          "stepTheme": "Couple de forces",
          "stepBadge": "Attention au bac",
          "paragraphText": "Le poids P et la réaction normale Rn ne forment JAMAIS un couple action-réaction au sens de la 3ème loi de Newton ! Ils s'appliquent tous les deux sur le MÊME corps (le solide), alors qu'une action et sa réaction s'exercent impérativement sur deux corps distincts.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p02_q7",
            "type": "mcq",
            "prompt": "Quelle est la force qui constitue la véritable réaction réciproque (au sens de la 3ème loi de Newton) au poids P d'un livre posé sur une table ?",
            "options": [
              "La force gravitationnelle exercée par le livre sur le centre de la Terre.",
              "La réaction normale de la table sur le livre.",
              "La force de frottement de l'air.",
              "La pression atmosphérique exercée sur la couverture."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le poids P est l'attraction gravitationnelle exercée par la Terre sur le livre. Sa réaction réciproque au sens de la 3ème loi de Newton est donc l'attraction gravitationnelle exercée par le livre sur la Terre."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l02_centre_inertie_p02_q1",
          "type": "mcq",
          "prompt": "Une force constante résultante de 12 N est appliquée à un solide de masse m = 3,0 kg initialement au repos. Quelle est l'accélération acquise par le solide ?",
          "options": [
            "a = 4,0 m/s²",
            "a = 36 m/s²",
            "a = 0,25 m/s²",
            "a = 9,0 m/s²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "a = F / m = 12 N / 3,0 kg = 4,0 m/s²."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p02_q2",
          "type": "mcq",
          "prompt": "Un fusil de masse M = 4,0 kg tire une balle de masse m = 20 g (0,020 kg) qui sort du canon à la vitesse de 600 m/s. En admettant le système fusil-balle isolé horizontalement lors du tir, quelle est la vitesse de recul VR du fusil ?",
          "options": [
            "VR = -3,0 m/s (recul dans le sens opposé à la balle)",
            "VR = -30 m/s",
            "VR = 0 m/s",
            "VR = +12 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Conservation de la quantité de mouvement : p_initial = 0 => M VR + m v = 0 => VR = - (m v) / M = -(0,020 × 600) / 4,0 = -12 / 4,0 = -3,0 m/s."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p02_q3",
          "type": "mcq",
          "prompt": "Un traîneau de masse m = 40 kg glisse sur la neige sans frottement sous l'action d'une corde tirée avec une force F = 80 N faisant un angle alpha = 60° avec l'horizontale. Quelle est l'accélération horizontale ax du traîneau ?",
          "options": [
            "ax = 1,0 m/s²",
            "ax = 2,0 m/s²",
            "ax = 1,73 m/s²",
            "ax = 0,50 m/s²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Projection sur l'axe horizontal Ox : Fx = F cos(alpha) = m ax => ax = (F cos 60°) / m = (80 × 0,50) / 40 = 40 / 40 = 1,0 m/s²."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p02_q4",
          "type": "mcq",
          "prompt": "Dans le vide (sans aucune résistance de l'air), une bille de plomb de 500 g et une plume de 1 g sont lâchées de la même hauteur en même temps sans vitesse initiale. Que constate-t-on ?",
          "options": [
            "Elles touchent le sol exactement au même instant avec la même vitesse car leur accélération a = g est identique.",
            "La bille de plomb arrive 500 fois plus vite car son poids est 500 fois plus grand.",
            "La plume flotte et met plus de temps à descendre.",
            "Le plomb accélère mais la plume a une vitesse constante."
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la deuxième loi de Newton, m g = m a implique a = g pour tous les corps sans exception dans le vide. La masse m s'élimine de l'équation : tous les objets chutent avec la même accélération de 9,8 m/s²."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p02_q5",
          "type": "mcq",
          "prompt": "La Terre attire une pomme de 200 g avec une force gravitationnelle égale à son poids P ≈ 2,0 N. Avec quelle force la pomme attire-t-elle la Terre en retour ?",
          "options": [
            "Exactement avec la même intensité de 2,0 N, mais dirigée vers le haut vers la pomme.",
            "Avec une force nulle car la Terre est infiniment plus massive.",
            "Avec une force infime de 10⁻²⁴ N.",
            "La pomme n'exerce aucune force d'attraction sur la Terre."
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après le principe des actions réciproques, les forces d'interaction sont rigoureusement égales en intensité : la pomme attire la Terre avec exactement 2,0 N. Mais comme la masse de la Terre est immense (6×10²⁴ kg), son accélération résultante est quasi nulle (a = 2 / 6×10²⁴ ≈ 3×10⁻²⁵ m/s²)."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p02_q6",
          "type": "mcq",
          "prompt": "Un carton de masse m = 15 kg repose sur le plancher horizontal d'un ascenseur qui accélère vers le haut avec a = 2,0 m/s² (avec g = 10 m/s²). Quelle est la force de réaction Rn exercée par le plancher sur le carton ?",
          "options": [
            "Rn = 180 N",
            "Rn = 150 N",
            "Rn = 120 N",
            "Rn = 30 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Projection sur l'axe vertical orienté vers le haut : Rn - P = m a => Rn = m(g + a) = 15 kg × (10 + 2,0) = 15 × 12 = 180 N. L'ascenseur en accélération vers le haut augmente la réaction d'appui normale."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p02_q7",
          "type": "mcq",
          "prompt": "Quelle est la force qui constitue la véritable réaction réciproque (au sens de la 3ème loi de Newton) au poids P d'un livre posé sur une table ?",
          "options": [
            "La force gravitationnelle exercée par le livre sur le centre de la Terre.",
            "La réaction normale de la table sur le livre.",
            "La force de frottement de l'air.",
            "La pression atmosphérique exercée sur la couverture."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le poids P est l'attraction gravitationnelle exercée par la Terre sur le livre. Sa réaction réciproque au sens de la 3ème loi de Newton est donc l'attraction gravitationnelle exercée par le livre sur la Terre."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l02_centre_inertie_p03",
      "order": 3,
      "title": "Théorème de l'énergie cinétique (TEC) et travail mécanique",
      "summary": "Énoncé du TEC dans un référentiel galiléen Delta Ec = Ec,B - Ec,A = Somme W_AB(F_ext), calcul du travail des forces courantes (poids, tension, frottement, force constante), et complémentarité avec le théorème du centre d'inertie.",
      "conceptExplanation": "1. Énergie cinétique d'un solide en translation :\nL'énergie cinétique d'un solide de masse m dont le centre d'inertie se déplace à la vitesse v est une grandeur scalaire toujours positive ou nulle :\nEc = (1/2) m v² (exprimée en Joules, J).\n\n2. Travail mécanique d'une force W_AB(F) :\nLors d'un déplacement rectiligne du point d'application de A vers B :\n- Force constante : W_AB(F) = vec(F) · vec(AB) = F · AB · cos(alpha).\n* Si alpha < 90° : W > 0, travail moteur (augmente l'énergie cinétique).\n* Si alpha > 90° : W < 0, travail résistant (diminue l'énergie cinétique).\n* Si alpha = 90° (force perpendiculaire au déplacement) : W = 0, travail nul.\n\n3. Travaux des forces fondamentales en mécanique :\n- Travail du poids P : W_AB(P) = m g (zA - zB) = +- m g h.\nLe travail du poids est indépendant du chemin suivi (force conservative) : il est moteur en descente (+ m g h) et résistant en montée (- m g h).\n- Réaction normale d'un support Rn : comme Rn est constamment perpendiculaire à la trajectoire, W_AB(Rn) = 0 à tout instant.\n- Force de frottement constante f : opposée à la trajectoire (alpha = 180°), son travail le long d'un parcours de longueur l vaut W_AB(f) = -f · l (toujours résistant, dissipé sous forme thermique).\n\n4. Énoncé du théorème de l'énergie cinétique (TEC) :\nDans un référentiel galiléen, la variation de l'énergie cinétique d'un solide entre deux positions A et B est égale à la somme algébrique des travaux de toutes les forces extérieures appliquées au solide entre A et B :\nDelta Ec = Ec,B - Ec,A = (1/2) m vB² - (1/2) m vA² = Somme W_AB(F_ext).",
      "keyRule": "Théorème de l'énergie cinétique : Ec,B - Ec,A = Somme W_AB(F_ext). Travail du poids : W(P) = +- m g h (moteur en descente, résistant en montée). Réaction normale : W(Rn) = 0. Frottement : W(f) = -f · l.",
      "formulas": [
        {
          "name": "Théorème de l'énergie cinétique (TEC)",
          "formula": "\\Delta E_C = E_{C,B} - E_{C,A} = \\frac{1}{2} m v_B^2 - \\frac{1}{2} m v_A^2 = \\sum W_{AB}(\\vec{F}_\\text{ext})",
          "note": "En Joules (J), valable pour tout solide en translation"
        },
        {
          "name": "Travail mécanique d'une force constante",
          "formula": "W_{AB}(\\vec{F}) = \\vec{F} \\cdot \\vec{AB} = F \\cdot AB \\cdot \\cos(\\alpha)",
          "note": "Travail du poids : W(P) = m g h (descente) ou -m g h (montée)"
        }
      ],
      "workedExample": {
        "title": "Calcul de la vitesse finale d'un solide par le TEC",
        "statement": "Un solide ponctuel de masse m = 2,0 kg part du repos au sommet A d'un plan incliné de longueur AB = 5,0 m faisant un angle theta = 30° avec l'horizontale. Une force de frottement constante f = 3,0 N s'oppose au glissement. Calcule sa vitesse vB au bas du plan (on donne g = 10 m/s²).",
        "methodSteps": [
          "Étape 1 : Calculer le dénivelé vertical : h = AB sin(theta) = 5,0 × sin(30°) = 5,0 × 0,50 = 2,5 m.",
          "Étape 2 : Bilan des travaux : W(P) = +m g h = 2,0 × 10 × 2,5 = +50 J. W(Rn) = 0 J. W(f) = -f · AB = -3,0 × 5,0 = -15 J.",
          "Étape 3 : Somme des travaux : Somme W = 50 - 15 = 35 J.",
          "Étape 4 : Appliquer le TEC entre A et B avec vA = 0 : (1/2) m vB² - 0 = Somme W => (1/2)(2,0) vB² = 35 => vB² = 35.",
          "Étape 5 : En déduire la vitesse : vB = sqrt(35) ≈ 5,92 m/s."
        ],
        "conclusion": "La vitesse au bas de la descente vaut vB = 5,92 m/s."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Nature et expression des travaux des forces mécaniques",
        "tableData": {
          "headers": [
            "Force appliquée",
            "Expression du travail W_AB",
            "Nature du travail",
            "Propriété essentielle"
          ],
          "rows": [
            [
              "Poids P",
              "W(P) = +- m g h",
              "Moteur en descente (+), Résistant en montée (-)",
              "Indépendant du chemin suivi (force conservative)"
            ],
            [
              "Réaction normale Rn",
              "W(Rn) = 0 J",
              "Travail nul (force d'appui)",
              "Toujours orthogonale au vecteur déplacement élémentaire"
            ],
            [
              "Frottement f",
              "W(f) = -f · l",
              "Toujours résistant (-)",
              "Dépend de la longueur réelle du trajet (dissipation thermique)"
            ],
            [
              "Force motrice F // déplacement",
              "W(F) = +F · l",
              "Moteur (+)",
              "Transfère de l'énergie cinétique au système"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Énergie cinétique d'un solide en translation",
          "stepTheme": "Énergie cinétique",
          "stepBadge": "Ec = 1/2 m v²",
          "paragraphText": "L'énergie cinétique Ec = (1/2) m v² quantifie l'énergie emmagasinée par un corps du fait de sa vitesse. Elle dépend proportionnellement de la masse m et du CARRÉ de la vitesse v. Doubler la vitesse multiplie l'énergie cinétique par 4.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p03_q1",
            "type": "mcq",
            "prompt": "Un véhicule roule à 50 km/h. S'il augmente sa vitesse à 100 km/h (vitesse doublée), par combien son énergie cinétique est-elle multipliée ?",
            "options": [
              "Elle est multipliée par 4 (2² = 4)",
              "Elle est multipliée par 2",
              "Elle est multipliée par 8",
              "Elle reste constante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ec est proportionnelle à v². Lorsque la vitesse est multipliée par 2, l'énergie cinétique est multipliée par 2² = 4. C'est pourquoi la distance de freinage quadruple lorsque la vitesse double."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Travail d'une force constante",
          "stepTheme": "Travail mécanique",
          "stepBadge": "W = F · AB · cos(alpha)",
          "paragraphText": "Le travail d'une force constante est le produit scalaire W = vec(F) · vec(AB) = F · AB cos(alpha). Il s'exprime en Joules (J). Si alpha < 90°, cos(alpha) > 0 (travail moteur). Si alpha > 90°, cos(alpha) < 0 (travail résistant). Si alpha = 90°, le travail est rigoureusement nul.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p03_q2",
            "type": "mcq",
            "prompt": "Une personne tire une caisse sur 10 m avec une force F = 50 N faisant un angle de 60° avec le sol. Quel travail fournit cette force ?",
            "options": [
              "W = 250 J",
              "W = 500 J",
              "W = 433 J",
              "W = 0 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "W = F · AB · cos(60°) = 50 N × 10 m × 0,50 = 250 J."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Travail du poids : indépendance du chemin suivi",
          "stepTheme": "Force conservative",
          "stepBadge": "W(P) = m g h",
          "paragraphText": "Le travail du poids ne dépend que de la différence d'altitude entre le point de départ A et le point d'arrivée B : W(P) = m g (zA - zB) = +- m g h. Il est totalement indépendant de la forme du trajet (qu'il soit vertical, en pente douce, en escalier ou en lacets).",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p03_q3",
            "type": "mcq",
            "prompt": "Un skieur de 70 kg descend une montagne d'une hauteur h = 400 m. Que la piste soit une pente directe ou une suite de virages de 3 km de long, que vaut le travail de son poids lors de la descente (g = 9,8 m/s²) ?",
            "options": [
              "W(P) = +274,4 kJ (identique quel que soit le parcours suivi)",
              "W(P) est plus grand sur la piste de 3 km",
              "W(P) est plus petit sur la piste directe",
              "W(P) = 0 kJ car le skieur glisse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le poids est une force conservative : W(P) = +m g h = 70 kg × 9,8 m/s² × 400 m = +274 400 J = +274,4 kJ. Le trajet réel n'intervient pas."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Travail nul de la réaction normale Rn",
          "stepTheme": "Force d'appui",
          "stepBadge": "W(Rn) = 0",
          "paragraphText": "La réaction normale Rn exercée par un support (plan horizontal, plan incliné, rail, piste circulaire) est à tout instant perpendiculaire au vecteur déplacement élémentaire. Son angle d'action vaut constamment alpha = 90°, donc cos(90°) = 0 : le travail de la réaction normale est TOUJOURS nul.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p03_q4",
            "type": "mcq",
            "prompt": "Pourquoi la réaction normale d'une piste curviligne ne modifie-t-elle jamais l'énergie cinétique d'un mobile qui glisse dessus ?",
            "options": [
              "Parce que son vecteur force est constamment orthogonal à la vitesse (alpha = 90°), son travail mécanique est donc rigoureusement nul à chaque instant.",
              "Parce que la réaction normale s'annule toujours pendant le mouvement.",
              "Parce que la réaction normale n'est pas une vraie force.",
              "Parce que la masse du solide absorbe cette énergie."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une force perpendiculaire à la vitesse ne produit aucun travail : dW = Rn · dl cos(90°) = 0. Elle peut modifier la direction de la vitesse (accélération normale), mais ne peut en aucun cas changer sa valeur scalaire ni son énergie cinétique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Application du TEC pour calculer une vitesse",
          "stepTheme": "Calcul par le TEC",
          "stepBadge": "Méthode TEC",
          "paragraphText": "Le théorème de l'énergie cinétique est particulièrement direct lorsqu'on cherche la vitesse d'un corps à l'issue d'un trajet sans avoir besoin de calculer l'accélération ni d'intégrer les équations horaires du temps.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p03_q5",
            "type": "mcq",
            "prompt": "Une bille d'acier est lâchée sans vitesse initiale d'une hauteur h = 5,0 m au-dessus du sol. En négligeant les frottements de l'air, quelle est sa vitesse d'impact au sol (g = 10 m/s²) ?",
            "options": [
              "v = 10 m/s",
              "v = 5,0 m/s",
              "v = 50 m/s",
              "v = 14,1 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par le TEC : (1/2) m v² - 0 = m g h => v = sqrt(2 g h) = sqrt(2 × 10 × 5,0) = sqrt(100) = 10 m/s."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Dissipation d'énergie par frottement et distance d'arrêt",
          "stepTheme": "Frottements et freinage",
          "stepBadge": "W(f) = -f · d",
          "paragraphText": "Lors du freinage d'un solide de masse m lancé à la vitesse v0 sur une piste horizontale rugueuse où s'exerce une force de frottement f, le TEC donne : 0 - (1/2) m v0² = -f · d, d'où la distance d'arrêt : d = (m v0²) / (2 f).",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p03_q6",
            "type": "mcq",
            "prompt": "Un palet de masse m = 0,80 kg est lancé à la vitesse initiale v0 = 6,0 m/s sur de la glace. Il glisse puis s'arrête sous l'effet de frottements constants f = 1,2 N. Quelle distance d parcourt-il avant de s'arrêter ?",
            "options": [
              "d = 12 m",
              "d = 6,0 m",
              "d = 24 m",
              "d = 2,4 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "d = (m v0²) / (2 f) = (0,80 × 6,0²) / (2 × 1,2) = (0,80 × 36) / 2,4 = 28,8 / 2,4 = 12 m."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège fréquent : signe du travail du poids",
          "stepTheme": "Signe de W(P)",
          "stepBadge": "Attention au signe de h",
          "paragraphText": "Le signe du travail du poids dépend exclusivement du sens vertical du déplacement : W(P) = +m g h si le centre d'inertie descend (travail moteur favorable), et W(P) = -m g h si le centre d'inertie monte (travail résistant qui freine le solide). Ne jamais se tromper de signe dans le bilan énergétique.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p03_q7",
            "type": "mcq",
            "prompt": "Une bille de masse m = 100 g est lancée verticalement vers le haut à v0 = 8,0 m/s et s'arrête momentanément au sommet de sa trajectoire à une hauteur h. Quel travail a effectué son poids pendant cette montée ?",
            "options": [
              "W(P) = -3,2 J (travail résistant négatif)",
              "W(P) = +3,2 J",
              "W(P) = -0,8 J",
              "W(P) = 0 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par le TEC : 0 - (1/2) m v0² = W(P) => W(P) = - (1/2)(0,10)(8,0²) = -0,05 × 64 = -3,2 J. Le travail est négatif car le poids résiste à l'élévation de la bille."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l02_centre_inertie_p03_q1",
          "type": "mcq",
          "prompt": "Un véhicule roule à 50 km/h. S'il augmente sa vitesse à 100 km/h (vitesse doublée), par combien son énergie cinétique est-elle multipliée ?",
          "options": [
            "Elle est multipliée par 4 (2² = 4)",
            "Elle est multipliée par 2",
            "Elle est multipliée par 8",
            "Elle reste constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ec est proportionnelle à v². Lorsque la vitesse est multipliée par 2, l'énergie cinétique est multipliée par 2² = 4. C'est pourquoi la distance de freinage quadruple lorsque la vitesse double."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p03_q2",
          "type": "mcq",
          "prompt": "Une personne tire une caisse sur 10 m avec une force F = 50 N faisant un angle de 60° avec le sol. Quel travail fournit cette force ?",
          "options": [
            "W = 250 J",
            "W = 500 J",
            "W = 433 J",
            "W = 0 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "W = F · AB · cos(60°) = 50 N × 10 m × 0,50 = 250 J."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p03_q3",
          "type": "mcq",
          "prompt": "Un skieur de 70 kg descend une montagne d'une hauteur h = 400 m. Que la piste soit une pente directe ou une suite de virages de 3 km de long, que vaut le travail de son poids lors de la descente (g = 9,8 m/s²) ?",
          "options": [
            "W(P) = +274,4 kJ (identique quel que soit le parcours suivi)",
            "W(P) est plus grand sur la piste de 3 km",
            "W(P) est plus petit sur la piste directe",
            "W(P) = 0 kJ car le skieur glisse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le poids est une force conservative : W(P) = +m g h = 70 kg × 9,8 m/s² × 400 m = +274 400 J = +274,4 kJ. Le trajet réel n'intervient pas."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p03_q4",
          "type": "mcq",
          "prompt": "Pourquoi la réaction normale d'une piste curviligne ne modifie-t-elle jamais l'énergie cinétique d'un mobile qui glisse dessus ?",
          "options": [
            "Parce que son vecteur force est constamment orthogonal à la vitesse (alpha = 90°), son travail mécanique est donc rigoureusement nul à chaque instant.",
            "Parce que la réaction normale s'annule toujours pendant le mouvement.",
            "Parce que la réaction normale n'est pas une vraie force.",
            "Parce que la masse du solide absorbe cette énergie."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une force perpendiculaire à la vitesse ne produit aucun travail : dW = Rn · dl cos(90°) = 0. Elle peut modifier la direction de la vitesse (accélération normale), mais ne peut en aucun cas changer sa valeur scalaire ni son énergie cinétique."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p03_q5",
          "type": "mcq",
          "prompt": "Une bille d'acier est lâchée sans vitesse initiale d'une hauteur h = 5,0 m au-dessus du sol. En négligeant les frottements de l'air, quelle est sa vitesse d'impact au sol (g = 10 m/s²) ?",
          "options": [
            "v = 10 m/s",
            "v = 5,0 m/s",
            "v = 50 m/s",
            "v = 14,1 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par le TEC : (1/2) m v² - 0 = m g h => v = sqrt(2 g h) = sqrt(2 × 10 × 5,0) = sqrt(100) = 10 m/s."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p03_q6",
          "type": "mcq",
          "prompt": "Un palet de masse m = 0,80 kg est lancé à la vitesse initiale v0 = 6,0 m/s sur de la glace. Il glisse puis s'arrête sous l'effet de frottements constants f = 1,2 N. Quelle distance d parcourt-il avant de s'arrêter ?",
          "options": [
            "d = 12 m",
            "d = 6,0 m",
            "d = 24 m",
            "d = 2,4 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "d = (m v0²) / (2 f) = (0,80 × 6,0²) / (2 × 1,2) = (0,80 × 36) / 2,4 = 28,8 / 2,4 = 12 m."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p03_q7",
          "type": "mcq",
          "prompt": "Une bille de masse m = 100 g est lancée verticalement vers le haut à v0 = 8,0 m/s et s'arrête momentanément au sommet de sa trajectoire à une hauteur h. Quel travail a effectué son poids pendant cette montée ?",
          "options": [
            "W(P) = -3,2 J (travail résistant négatif)",
            "W(P) = +3,2 J",
            "W(P) = -0,8 J",
            "W(P) = 0 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par le TEC : 0 - (1/2) m v0² = W(P) => W(P) = - (1/2)(0,10)(8,0²) = -0,05 × 64 = -3,2 J. Le travail est négatif car le poids résiste à l'élévation de la bille."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l02_centre_inertie_p04",
      "order": 4,
      "title": "Protocole de résolution d'un problème de mécanique et plan incliné",
      "summary": "Protocole rigoureux en 4 étapes (Système, Référentiel et repère, Bilan des forces, Application TCI/TEC), étude complète du solide glissant sur un plan incliné d'angle theta sans frottement (a = g sin theta), et avec force de frottement f (a = g sin theta - f/m, détermination de f et calcul de la distance d'arrêt).",
      "conceptExplanation": "1. Le protocole officiel en 4 étapes de la mécanique :\nPour résoudre méthodiquement tout exercice de mécanique au baccalauréat :\n- Étape 1 : Définir le système matériel étudié (masse m, dimensions).\n- Étape 2 : Préciser le référentiel d'étude (référentiel terrestre supposé galiléen) et choisir un repère d'espace orthonormé adapté à la géométrie de la trajectoire (ex: axe Ox parallèle au plan incliné orienté dans le sens du mouvement, axe Oy perpendiculaire vers le haut).\n- Étape 3 : Établir l'inventaire complet des forces extérieures appliquées et réaliser un schéma clair avec les vecteurs forces correctement orientés.\n- Étape 4 : Appliquer le théorème adapté (TCI pour obtenir l'accélération et les équations horaires, ou TEC pour relier directement les vitesses et les distances).\n\n2. Solide sur plan incliné d'angle theta SANS frottement :\n- Forces : Poids P (décomposé en Px = +m g sin theta et Py = -m g cos theta) et réaction normale Rn (Rnx = 0, Rny = +Rn).\n- TCI sur Ox : Px + Rnx = m ax => m g sin theta + 0 = m ax => ax = g sin theta.\n- L'accélération est constante : le mouvement est un MRUV rectiligne uniformément accéléré.\n- Vitesse en bas d'une pente de longueur l : vB = sqrt(2 g l sin theta).\n- TCI sur Oy : Py + Rny = m ay = 0 => Rn = m g cos theta.\n\n3. Solide sur plan incliné d'angle theta AVEC force de frottement f constante :\n- La force de frottement f s'oppose au glissement (fx = -f, fy = 0).\n- Projection sur Ox : m g sin theta - f = m ax => ax = g sin theta - (f / m).\n- Détermination de la force de frottement par la mesure de ax : f = m (g sin theta - ax).\n- Par le TEC : (1/2) m vB² - 0 = m g l sin theta - f l => f = m (g sin theta - vB² / (2 l)).",
      "keyRule": "Sur plan incliné sans frottement : ax = g sin theta et Rn = m g cos theta. Avec frottement f : ax = g sin theta - f/m. Pour déterminer f : f = m (g sin theta - ax).",
      "formulas": [
        {
          "name": "Accélération sur plan incliné avec frottements",
          "formula": "a_x = g \\cdot \\sin(\\theta) - \\frac{f}{m}",
          "note": "Sans frottement (f = 0) : ax = g sin(theta)"
        },
        {
          "name": "Réaction normale d'un plan incliné",
          "formula": "R_n = m \\cdot g \\cdot \\cos(\\theta)",
          "note": "Déduite de la projection perpendiculaire au plan"
        }
      ],
      "workedExample": {
        "title": "Résolution complète de la situation du banc incliné",
        "statement": "Un mobile de masse m = 630 g est lâché sans vitesse initiale en A au sommet d'un banc à coussin d'air de longueur AB = 2,0 m incliné de theta = 30° par rapport à l'horizontale. Les frottements sont négligeables et g = 10 m/s². Calcule son accélération ax et sa vitesse vB au bas du banc.",
        "methodSteps": [
          "Étape 1 : Système : le mobile (m = 0,630 kg). Référentiel terrestre supposé galiléen muni du repère (A, x) le long du banc vers le bas et (A, y) perpendiculaire vers le haut.",
          "Étape 2 : Bilan des forces : Poids P et réaction normale R de la piste.",
          "Étape 3 : Projection du TCI sur Ax : Px + Rx = m ax => m g sin(theta) + 0 = m ax => ax = g sin(30°) = 10 × 0,50 = 5,0 m/s².",
          "Étape 4 : Calcul de la vitesse au point B par le TEC : (1/2) m vB² - 0 = W(P) + W(R) = m g AB sin(theta) + 0 => vB = sqrt(2 g AB sin theta).",
          "Étape 5 : Application numérique : vB = sqrt(2 × 10 × 2,0 × 0,50) = sqrt(20) ≈ 4,47 m/s (arrondi à 4,5 m/s)."
        ],
        "conclusion": "L'accélération vaut 5,0 m/s² et la vitesse au bas du banc est de 4,5 m/s."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Décomposition des forces sur un plan incliné",
        "tableData": {
          "headers": [
            "Force appliquée",
            "Composante parallèle au plan (Ox)",
            "Composante normale au plan (Oy)",
            "Rôle physique"
          ],
          "rows": [
            [
              "Poids P = m g",
              "Px = +m g sin(theta)",
              "Py = -m g cos(theta)",
              "Px tire le mobile vers le bas ; Py plaque le mobile sur le plan"
            ],
            [
              "Réaction normale Rn",
              "Rnx = 0",
              "Rny = +Rn = m g cos(theta)",
              "Empêche l'enfoncement dans la surface d'appui"
            ],
            [
              "Frottement f",
              "fx = -f",
              "fy = 0",
              "S'oppose au glissement vers le bas"
            ],
            [
              "Résultante globale",
              "m ax = m g sin(theta) - f",
              "m ay = 0 (pas de décollement)",
              "Détermine l'accélération le long de la pente"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Le protocole obligatoire d'analyse mécanique",
          "stepTheme": "Protocole d'examen",
          "stepBadge": "Les 4 étapes",
          "paragraphText": "Au baccalauréat, la rédaction d'un problème de mécanique doit comporter explicitement : 1° Système étudié ; 2° Référentiel d'étude et repère d'axes ; 3° Bilan et schéma des forces appliquées ; 4° Application du TCI ou du TEC avec projection rigoureuse.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est la première étape indispensable avant d'écrire toute équation de Newton ou de dynamique ?",
            "options": [
              "Définir précisément le système matériel et le référentiel d'étude.",
              "Calculer l'énergie cinétique finale.",
              "Tracer une courbe sur papier millimétré.",
              "Déterminer la masse molaire du solide."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans définition préalable du système et du référentiel (qui doit être galiléen), les forces intérieures/extérieures et les accélérations n'ont aucun sens physique défini."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Accélération sur plan incliné lisse sans frottement",
          "stepTheme": "Plan incliné lisse",
          "stepBadge": "ax = g sin theta",
          "paragraphText": "Sur un plan incliné d'angle theta par rapport à l'horizontale sans frottements, l'accélération d'un solide qui descend vaut exactement ax = g sin(theta). Elle est strictement indépendante de la masse du solide : une bille de 10 g et un bloc de 100 kg ont la même accélération.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p04_q2",
            "type": "mcq",
            "prompt": "Un solide glisse sans frottement sur un plan incliné d'un angle theta = 30° par rapport à l'horizontale. Sachant que g = 10 m/s², que vaut son accélération le long du plan ?",
            "options": [
              "ax = 5,0 m/s²",
              "ax = 8,66 m/s²",
              "ax = 10 m/s²",
              "ax = 2,5 m/s²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ax = g sin(30°) = 10 × 0,50 = 5,0 m/s²."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Effet d'une force de frottement constante sur l'accélération",
          "stepTheme": "Frottement et décélération",
          "stepBadge": "ax = g sin theta - f/m",
          "paragraphText": "En présence d'une force de frottement f opposée au glissement vers le bas, la résultante le long de la pente s'écrit m g sin(theta) - f = m ax, ce qui donne ax = g sin(theta) - f/m. Pour qu'il y ait glissement vers le bas, il faut impérativement que m g sin(theta) > f.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p04_q3",
            "type": "mcq",
            "prompt": "Un véhicule de masse m = 800 kg descend une pente inclinée de alpha = 20° avec une accélération mesurée ax = 0,225 m/s² (avec g = 9,8 m/s² et sin 20° ≈ 0,342). Quelle est la valeur de la résultante f des forces de frottement ?",
            "options": [
              "f ≈ 2501 N",
              "f ≈ 180 N",
              "f ≈ 2681 N",
              "f ≈ 500 N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "f = m(g sin alpha - ax) = 800 × (9,8 × 0,342 - 0,225) = 800 × (3,3516 - 0,225) = 800 × 3,1266 ≈ 2501,3 N."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calcul de la vitesse par la relation v² = 2 ax l",
          "stepTheme": "Cinématique du plan",
          "stepBadge": "Calcul de vitesse",
          "paragraphText": "Puisque le mouvement sur plan incliné sous force constante est un MRUV, la vitesse au bas de la pente de longueur l (avec départ arrêté v0 = 0) se calcule indifféremment par la relation cinématique v² = 2 ax l ou par le théorème de l'énergie cinétique.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p04_q4",
            "type": "mcq",
            "prompt": "Un solide descend sans vitesse initiale un plan incliné de longueur l = 500 m avec une accélération constante ax = 0,225 m/s². Quelle est sa vitesse d'arrivée au bas de la côte ?",
            "options": [
              "v = 15 m/s (soit 54 km/h)",
              "v = 225 m/s",
              "v = 11,25 m/s",
              "v = 10 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "v² - 0 = 2 ax l = 2 × 0,225 × 500 = 225 => v = sqrt(225) = 15 m/s."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Distance d'arrêt sur une portion horizontale après la pente",
          "stepTheme": "Freinage horizontal",
          "stepBadge": "Distance d'arrêt d",
          "paragraphText": "Parvenu au bas de la côte avec la vitesse vA, le mobile aborde une piste horizontale. Le poids et la réaction normale s'équilibrent (Rn = P). La seule force horizontale est le frottement f. Le mobile décélère avec a = -f/m jusqu'à l'arrêt complet sur une distance d = (m vA²) / (2 f).",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p04_q5",
            "type": "mcq",
            "prompt": "Un véhicule de 800 kg arrivant à vA = 15 m/s roule sur le plat sous l'action des frottements f = 2501,4 N. Quelle distance d parcourt-il avant de s'immobiliser ?",
            "options": [
              "d ≈ 36 m",
              "d ≈ 72 m",
              "d ≈ 18 m",
              "d ≈ 50 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "d = (m vA²) / (2 f) = (800 × 15²) / (2 × 2501,4) = (800 × 225) / 5002,8 = 180 000 / 5002,8 ≈ 35,98 m ≈ 36 m."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Expression de la réaction normale Rn sur plan incliné",
          "stepTheme": "Pression d'appui",
          "stepBadge": "Rn = m g cos theta",
          "paragraphText": "La projection perpendiculaire au plan incliné (axe Oy) donne Rn - m g cos(theta) = 0 => Rn = m g cos(theta). Plus la pente est forte (theta augmente), plus cos(theta) diminue, et plus la pression d'appui normale faiblit (elle s'annule pour une paroi verticale theta = 90°).",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p04_q6",
            "type": "mcq",
            "prompt": "Un carton de masse m = 10 kg repose sur une rampe inclinée de theta = 60° par rapport à l'horizontale (g = 10 m/s²). Quelle est la réaction normale exercée par la rampe sur le carton ?",
            "options": [
              "Rn = 50 N",
              "Rn = 100 N",
              "Rn = 86,6 N",
              "Rn = 0 N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Rn = m g cos(60°) = 10 kg × 10 m/s² × 0,50 = 50 N."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège fréquent : confusion entre sin(theta) et cos(theta) dans les projections",
          "stepTheme": "Trigonométrie de la pente",
          "stepBadge": "Attention au bac",
          "paragraphText": "Sur un plan incliné d'angle theta avec l'horizontale : le côté opposé à l'angle d'inclinaison est parallèle au plan incliné => la composante motrice du poids fait intervenir sin(theta). La composante d'appui normale fait intervenir cos(theta). Confondre sinus et cosinus fausse l'intégralité du problème !",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p04_q7",
            "type": "mcq",
            "prompt": "Pour un angle de pente theta mesuré par rapport à l'horizontale, quelle est l'expression de la composante motrice tangentielle Px du poids le long du plan incliné ?",
            "options": [
              "Px = +m g sin(theta)",
              "Px = +m g cos(theta)",
              "Px = +m g tan(theta)",
              "Px = +m g"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans le triangle rectangle des forces, la composante parallèle à la pente est le côté opposé à l'angle theta : Px = m g sin(theta)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l02_centre_inertie_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est la première étape indispensable avant d'écrire toute équation de Newton ou de dynamique ?",
          "options": [
            "Définir précisément le système matériel et le référentiel d'étude.",
            "Calculer l'énergie cinétique finale.",
            "Tracer une courbe sur papier millimétré.",
            "Déterminer la masse molaire du solide."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans définition préalable du système et du référentiel (qui doit être galiléen), les forces intérieures/extérieures et les accélérations n'ont aucun sens physique défini."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p04_q2",
          "type": "mcq",
          "prompt": "Un solide glisse sans frottement sur un plan incliné d'un angle theta = 30° par rapport à l'horizontale. Sachant que g = 10 m/s², que vaut son accélération le long du plan ?",
          "options": [
            "ax = 5,0 m/s²",
            "ax = 8,66 m/s²",
            "ax = 10 m/s²",
            "ax = 2,5 m/s²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ax = g sin(30°) = 10 × 0,50 = 5,0 m/s²."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p04_q3",
          "type": "mcq",
          "prompt": "Un véhicule de masse m = 800 kg descend une pente inclinée de alpha = 20° avec une accélération mesurée ax = 0,225 m/s² (avec g = 9,8 m/s² et sin 20° ≈ 0,342). Quelle est la valeur de la résultante f des forces de frottement ?",
          "options": [
            "f ≈ 2501 N",
            "f ≈ 180 N",
            "f ≈ 2681 N",
            "f ≈ 500 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "f = m(g sin alpha - ax) = 800 × (9,8 × 0,342 - 0,225) = 800 × (3,3516 - 0,225) = 800 × 3,1266 ≈ 2501,3 N."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p04_q4",
          "type": "mcq",
          "prompt": "Un solide descend sans vitesse initiale un plan incliné de longueur l = 500 m avec une accélération constante ax = 0,225 m/s². Quelle est sa vitesse d'arrivée au bas de la côte ?",
          "options": [
            "v = 15 m/s (soit 54 km/h)",
            "v = 225 m/s",
            "v = 11,25 m/s",
            "v = 10 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "v² - 0 = 2 ax l = 2 × 0,225 × 500 = 225 => v = sqrt(225) = 15 m/s."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p04_q5",
          "type": "mcq",
          "prompt": "Un véhicule de 800 kg arrivant à vA = 15 m/s roule sur le plat sous l'action des frottements f = 2501,4 N. Quelle distance d parcourt-il avant de s'immobiliser ?",
          "options": [
            "d ≈ 36 m",
            "d ≈ 72 m",
            "d ≈ 18 m",
            "d ≈ 50 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "d = (m vA²) / (2 f) = (800 × 15²) / (2 × 2501,4) = (800 × 225) / 5002,8 = 180 000 / 5002,8 ≈ 35,98 m ≈ 36 m."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p04_q6",
          "type": "mcq",
          "prompt": "Un carton de masse m = 10 kg repose sur une rampe inclinée de theta = 60° par rapport à l'horizontale (g = 10 m/s²). Quelle est la réaction normale exercée par la rampe sur le carton ?",
          "options": [
            "Rn = 50 N",
            "Rn = 100 N",
            "Rn = 86,6 N",
            "Rn = 0 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Rn = m g cos(60°) = 10 kg × 10 m/s² × 0,50 = 50 N."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p04_q7",
          "type": "mcq",
          "prompt": "Pour un angle de pente theta mesuré par rapport à l'horizontale, quelle est l'expression de la composante motrice tangentielle Px du poids le long du plan incliné ?",
          "options": [
            "Px = +m g sin(theta)",
            "Px = +m g cos(theta)",
            "Px = +m g tan(theta)",
            "Px = +m g"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le triangle rectangle des forces, la composante parallèle à la pente est le côté opposé à l'angle theta : Px = m g sin(theta)."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l02_centre_inertie_p05",
      "order": 5,
      "title": "Dynamique sur piste circulaire et condition de décollement",
      "summary": "Étude d'un solide sur une portion circulaire verticale de rayon r, projection du TCI dans la base de Frenet (tau, n), expression de la réaction normale R(theta) = m g cos theta + m v²/r, vitesse au point M par le TEC, et détermination de la condition critique de non-décollement (R >= 0).",
      "conceptExplanation": "1. Modélisation géométrique d'une piste circulaire verticale :\nSoit une piste circulaire de centre O et de rayon r située dans un plan vertical. La position d'un solide ponctuel M glissant à l'intérieur de la piste est repérée par l'angle theta par rapport à la verticale ascendante ou descendante.\n\n2. Bilan des forces et base de Frenet (tau, n) :\nAu point M, le solide est soumis à :\n- Son poids P = m g (vertical vers le bas).\n- La réaction normale R de la piste (perpendiculaire à la piste, dirigée vers le centre O du cercle, c'est-à-dire selon le vecteur normal n de Frenet).\n- En appliquant le TCI : vec(P) + vec(R) = m vec(a).\nDans la base de Frenet :\n- Axe tangent tau : P_tau = m a_tau = m (dv/dt).\n- Axe normal n : R - P_n = m an = m (v²/r) => R = P_n + m (v²/r).\nSi theta est l'angle par rapport à la verticale descendante : P_n = m g cos(theta), donc :\nR(theta) = m g cos(theta) + m v_M² / r.\n\n3. Calcul de la vitesse en M par le théorème de l'énergie cinétique :\nEntre le point bas C (où le solide arrive à la vitesse vC) et le point M situé à la hauteur h = r (1 - cos theta) au-dessus de C :\n(1/2) m v_M² - (1/2) m v_C² = W(P) + W(R) = -m g h + 0 = -m g r (1 - cos theta).\nOn en déduit la vitesse instantanée en tout point M :\nv_M = sqrt(v_C² - 2 g r (1 - cos theta)).\n\n4. Expression générale de la réaction normale R(theta) :\nEn substituant v_M² = v_C² - 2 g r + 2 g r cos(theta) dans l'expression de R :\nR(theta) = m g cos(theta) + (m / r) [v_C² - 2 g r + 2 g r cos(theta)]\nR(theta) = (m v_C² / r) - m g (2 - 3 cos theta).\n\n5. Condition critique de décollement (perte de contact) :\nLa piste ne peut que repousser le solide vers l'intérieur : la réaction normale ne peut être que positive (R >= 0). Le solide quitte la piste (décollement) dès que la réaction s'annule : R(theta) = 0.",
      "keyRule": "Sur une piste circulaire de rayon r : R(theta) = m g cos theta + m v_M²/r. Avec le TEC, v_M² = v_C² - 2 g r (1 - cos theta). Le solide décolle ou quitte la piste dès que la réaction normale s'annule : R(theta) = 0.",
      "formulas": [
        {
          "name": "Vitesse sur piste circulaire verticale (par le TEC)",
          "formula": "v_M = \\sqrt{v_C^2 - 2\\,g\\,r\\,(1 - \\cos\\theta)}",
          "note": "h = r(1 - cos theta) au-dessus du point bas C"
        },
        {
          "name": "Réaction normale de la piste en M",
          "formula": "R(\\theta) = \\frac{m\\,v_C^2}{r} - m\\,g\\,(2 - 3\\cos\\theta)",
          "note": "Condition de contact maintenu : R(theta) >= 0"
        }
      ],
      "workedExample": {
        "title": "Calcul de la force minimale F0 pour qu'un solide atteigne le point K sans décoller",
        "statement": "Un solide de masse m = 500 g (0,50 kg) initialement au repos en A est poussé sur une distance horizontale AB = L = 1,5 m par une force motrice constante F. En C, il aborde sans frottement une portion circulaire verticale de rayon r = 1,0 m. Il doit atteindre le point K situé à mi-hauteur (theta = 90°) sans quitter la piste. Calcule la force minimale F0 nécessaire (g = 10 m/s²).",
        "methodSteps": [
          "Étape 1 : Vitesse en C par le TEC sur le plat : vC² = (2 F L) / m.",
          "Étape 2 : Condition au point K (theta = 90°) : le solide quitte la piste en K si RK = 0 N.",
          "Étape 3 : Expression de RK : RK = (2 F0 L / r) - m g (2 - 3 cos 90°) = (2 F0 L / r) - 2 m g.",
          "Étape 4 : Écrire RK = 0 => 2 F0 L / r = 2 m g => F0 = (m g r) / L.",
          "Étape 5 : Calcul numérique : F0 = (0,50 kg × 10 m/s² × 1,0 m) / 1,5 m = 5,0 / 1,5 ≈ 3,33 N (ou 1,67 N si m = 0,25 kg)."
        ],
        "conclusion": "La force motrice minimale requise pour atteindre le point K sans décoller vaut F0 = (m g r) / L."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Grandeurs dynamiques le long d'un profil circulaire vertical",
        "tableData": {
          "headers": [
            "Position sur le cercle",
            "Angle theta",
            "Vitesse au carré v_M²",
            "Réaction normale R(theta)"
          ],
          "rows": [
            [
              "Point bas C (entrée)",
              "theta = 0°",
              "vC² (vitesse maximale)",
              "R_C = (m vC² / r) + m g (réaction maximale)"
            ],
            [
              "Point horizontal K",
              "theta = 90°",
              "vC² - 2 g r",
              "R_K = (m vC² / r) - 2 m g"
            ],
            [
              "Sommet D (point haut)",
              "theta = 180°",
              "vC² - 4 g r (vitesse minimale)",
              "R_D = (m vC² / r) - 5 m g (point le plus critique)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Application du TCI dans la base de Frenet sur une trajectoire courbe",
          "stepTheme": "Base de Frenet",
          "stepBadge": "Projections dans Frenet",
          "paragraphText": "Sur une trajectoire courbe, le repère le plus efficace pour appliquer le théorème du centre d'inertie est la base de Frenet liée au mobile : l'axe tangent donne l'accélération scalaire a_tau = dv/dt, et l'axe normal donne la force centripète m an = m v²/r.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p05_q1",
            "type": "mcq",
            "prompt": "Quelle est la composante normale de la deuxième loi de Newton pour un mobile de masse m glissant sur une piste circulaire de rayon r soumise à la réaction normale R dirigée vers le centre et au poids P ?",
            "options": [
              "R - P_n = m (v² / r)",
              "R + P_n = 0",
              "R = m (dv/dt)",
              "R = m g r"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sur l'axe normal unitaire n dirigé vers le centre du cercle : la projection donne Rn + Pn = m an => R - P_n = m (v² / r), d'où R = P_n + m (v² / r)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Expression de la vitesse par le théorème de l'énergie cinétique",
          "stepTheme": "Vitesse sur cercle",
          "stepBadge": "v² = v0² - 2 g h",
          "paragraphText": "Sur une piste circulaire sans frottement, la réaction normale ne travaille pas (W(R) = 0). Le TEC entre le point bas C et un point M situé à l'angle theta donne : (1/2) m vM² - (1/2) m vC² = -m g h avec h = r (1 - cos theta). D'où vM² = vC² - 2 g r (1 - cos theta).",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p05_q2",
            "type": "mcq",
            "prompt": "Un solide aborde une boucle de rayon r = 2,0 m au point bas C à la vitesse vC = 10 m/s. Quelle est sa vitesse au sommet K situé à mi-hauteur (theta = 90° avec cos 90° = 0) en prenant g = 10 m/s² ?",
            "options": [
              "vK = sqrt(60) ≈ 7,75 m/s",
              "vK = 10 m/s",
              "vK = 6,0 m/s",
              "vK = 0 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "h = r(1 - cos 90°) = 2,0 × (1 - 0) = 2,0 m. vK² = vC² - 2 g h = 10² - 2 × 10 × 2,0 = 100 - 40 = 60 => vK = sqrt(60) ≈ 7,75 m/s."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Variation de la réaction normale avec l'altitude",
          "stepTheme": "Réaction d'appui",
          "stepBadge": "R(theta) décroissante",
          "paragraphText": "L'expression de la réaction normale R(theta) = (m vC² / r) - m g (2 - 3 cos theta) montre que la réaction normale est maximale au point le plus bas (theta = 0) et décroît continuellement au fur et à mesure que le solide prend de l'altitude dans la boucle.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p05_q3",
            "type": "mcq",
            "prompt": "En quel point d'un looping circulaire vertical la piste subit-elle l'effort de pression le plus intense de la part du mobile ?",
            "options": [
              "Au point le plus bas (theta = 0°), où la vitesse est maximale et le poids s'ajoute à la force centrifuge.",
              "Au sommet de la boucle (point le plus haut).",
              "À mi-hauteur (theta = 90°).",
              "L'effort est rigoureusement constant sur tout le pourtour du cercle."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au point bas, la réaction d'appui vaut RC = m vC² / r + m g. La force centrifuge et le poids s'exercent tous deux vers l'extérieur de la piste : c'est le point où la structure est la plus fortement sollicitée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Définition physique du décollement d'un solide",
          "stepTheme": "Perte de contact",
          "stepBadge": "Condition R = 0",
          "paragraphText": "Une piste matérielle ne peut exercer qu'une force de poussée répulsive vers l'intérieur (R >= 0). Elle ne peut pas 'retenir' ou attirer le solide. Si la vitesse devient insuffisante, la réaction d'appui s'annule : R = 0. Le solide quitte alors la piste et entame une trajectoire parabolique de chute libre.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p05_q4",
            "type": "mcq",
            "prompt": "Quelle équation mathématique traduit rigoureusement le fait qu'un solide quitte une piste circulaire au point de coordonnées angulaires theta_d ?",
            "options": [
              "R(theta_d) = 0 N",
              "v(theta_d) = 0 m/s",
              "a(theta_d) = 0 m/s²",
              "P = 0 N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le contact mécanique cesse exactement au moment où la réaction d'appui normale s'annule : R = 0. (La vitesse au moment du décollement n'est pas forcément nulle, le mobile quitte simplement le cercle)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Vitesse critique au sommet d'un looping complet",
          "stepTheme": "Looping complet",
          "stepBadge": "v_sommet >= sqrt(g r)",
          "paragraphText": "Au sommet d'une boucle circulaire verticale (theta = 180°, point D), le poids est orienté vers le centre du cercle. L'équation normale s'écrit RD + m g = m vD² / r => RD = m(vD² / r - g). Pour que le mobile ne décroche pas (RD >= 0), il faut impérativement que sa vitesse au sommet vérifie vD >= sqrt(g r).",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p05_q5",
            "type": "mcq",
            "prompt": "Un wagon de montagnes russes de rayon r = 9,0 m décrit un looping complet. Quelle vitesse minimale absolue doit-il posséder au sommet pour ne pas quitter les rails (g = 10 m/s²) ?",
            "options": [
              "v_sommet >= sqrt(g r) = sqrt(90) ≈ 9,49 m/s (soit 34,2 km/h)",
              "v_sommet >= 0 m/s",
              "v_sommet >= 18 m/s",
              "v_sommet >= 90 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La condition de non-décollement au sommet impose RD >= 0 => m(vD² / r - g) >= 0 => vD >= sqrt(g r) = sqrt(10 × 9,0) = sqrt(90) ≈ 9,49 m/s."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Vitesse d'entrée minimale pour franchir un looping",
          "stepTheme": "Condition au départ",
          "stepBadge": "vC >= sqrt(5 g r)",
          "paragraphText": "En combinant la conservation de l'énergie cinétique vD² = vC² - 4 g r et la condition de passage au sommet vD² >= g r, on déduit la vitesse minimale nécessaire au point bas pour franchir le looping complet : vC² >= 5 g r => vC >= sqrt(5 g r).",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p05_q6",
            "type": "mcq",
            "prompt": "Pour une boucle de rayon r = 5,0 m (g = 10 m/s²), quelle vitesse minimale vC un véhicule doit-il posséder à l'entrée au point bas pour boucler le looping sans décoller ?",
            "options": [
              "vC >= sqrt(5 g r) = sqrt(250) ≈ 15,8 m/s (environ 57 km/h)",
              "vC >= sqrt(g r) = 7,07 m/s",
              "vC >= 25 m/s",
              "vC >= 10 m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "vC_min = sqrt(5 g r) = sqrt(5 × 10 × 5,0) = sqrt(250) ≈ 15,8 m/s."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège fréquent : décollement extérieur sur une bosse sphérique",
          "stepTheme": "Piste convexe",
          "stepBadge": "Bosse convexe",
          "paragraphText": "Attention au signe si le solide glisse à l'EXTÉRIEUR d'une sphère ou d'un dôme convexe de rayon R : la réaction normale est alors orientée vers l'extérieur du cercle (opposée à n). L'équation normale devient P cos(theta) - R = m v²/R => R = m(g cos theta - v²/R). Le décollement se produit si v² > g R cos(theta).",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p05_q7",
            "type": "mcq",
            "prompt": "Un véhicule franchit le sommet d'une colline circulaire de rayon R = 40 m (theta = 0). À partir de quelle vitesse le véhicule décolle-t-il du sol en perdant toute adhérence (g = 10 m/s²) ?",
            "options": [
              "v > sqrt(g R) = sqrt(400) = 20 m/s (soit 72 km/h)",
              "v > 40 m/s",
              "v > 10 m/s",
              "Le véhicule ne peut jamais décoller sur une bosse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au sommet de la bosse, R = m(g - v²/R). Le décollement (R = 0) intervient dès que v = sqrt(g R) = sqrt(10 × 40) = 20 m/s (72 km/h). Au-delà de cette vitesse, les roues ne touchent plus le sol."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l02_centre_inertie_p05_q1",
          "type": "mcq",
          "prompt": "Quelle est la composante normale de la deuxième loi de Newton pour un mobile de masse m glissant sur une piste circulaire de rayon r soumise à la réaction normale R dirigée vers le centre et au poids P ?",
          "options": [
            "R - P_n = m (v² / r)",
            "R + P_n = 0",
            "R = m (dv/dt)",
            "R = m g r"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sur l'axe normal unitaire n dirigé vers le centre du cercle : la projection donne Rn + Pn = m an => R - P_n = m (v² / r), d'où R = P_n + m (v² / r)."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p05_q2",
          "type": "mcq",
          "prompt": "Un solide aborde une boucle de rayon r = 2,0 m au point bas C à la vitesse vC = 10 m/s. Quelle est sa vitesse au sommet K situé à mi-hauteur (theta = 90° avec cos 90° = 0) en prenant g = 10 m/s² ?",
          "options": [
            "vK = sqrt(60) ≈ 7,75 m/s",
            "vK = 10 m/s",
            "vK = 6,0 m/s",
            "vK = 0 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "h = r(1 - cos 90°) = 2,0 × (1 - 0) = 2,0 m. vK² = vC² - 2 g h = 10² - 2 × 10 × 2,0 = 100 - 40 = 60 => vK = sqrt(60) ≈ 7,75 m/s."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p05_q3",
          "type": "mcq",
          "prompt": "En quel point d'un looping circulaire vertical la piste subit-elle l'effort de pression le plus intense de la part du mobile ?",
          "options": [
            "Au point le plus bas (theta = 0°), où la vitesse est maximale et le poids s'ajoute à la force centrifuge.",
            "Au sommet de la boucle (point le plus haut).",
            "À mi-hauteur (theta = 90°).",
            "L'effort est rigoureusement constant sur tout le pourtour du cercle."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au point bas, la réaction d'appui vaut RC = m vC² / r + m g. La force centrifuge et le poids s'exercent tous deux vers l'extérieur de la piste : c'est le point où la structure est la plus fortement sollicitée."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p05_q4",
          "type": "mcq",
          "prompt": "Quelle équation mathématique traduit rigoureusement le fait qu'un solide quitte une piste circulaire au point de coordonnées angulaires theta_d ?",
          "options": [
            "R(theta_d) = 0 N",
            "v(theta_d) = 0 m/s",
            "a(theta_d) = 0 m/s²",
            "P = 0 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le contact mécanique cesse exactement au moment où la réaction d'appui normale s'annule : R = 0. (La vitesse au moment du décollement n'est pas forcément nulle, le mobile quitte simplement le cercle)."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p05_q5",
          "type": "mcq",
          "prompt": "Un wagon de montagnes russes de rayon r = 9,0 m décrit un looping complet. Quelle vitesse minimale absolue doit-il posséder au sommet pour ne pas quitter les rails (g = 10 m/s²) ?",
          "options": [
            "v_sommet >= sqrt(g r) = sqrt(90) ≈ 9,49 m/s (soit 34,2 km/h)",
            "v_sommet >= 0 m/s",
            "v_sommet >= 18 m/s",
            "v_sommet >= 90 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La condition de non-décollement au sommet impose RD >= 0 => m(vD² / r - g) >= 0 => vD >= sqrt(g r) = sqrt(10 × 9,0) = sqrt(90) ≈ 9,49 m/s."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p05_q6",
          "type": "mcq",
          "prompt": "Pour une boucle de rayon r = 5,0 m (g = 10 m/s²), quelle vitesse minimale vC un véhicule doit-il posséder à l'entrée au point bas pour boucler le looping sans décoller ?",
          "options": [
            "vC >= sqrt(5 g r) = sqrt(250) ≈ 15,8 m/s (environ 57 km/h)",
            "vC >= sqrt(g r) = 7,07 m/s",
            "vC >= 25 m/s",
            "vC >= 10 m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "vC_min = sqrt(5 g r) = sqrt(5 × 10 × 5,0) = sqrt(250) ≈ 15,8 m/s."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p05_q7",
          "type": "mcq",
          "prompt": "Un véhicule franchit le sommet d'une colline circulaire de rayon R = 40 m (theta = 0). À partir de quelle vitesse le véhicule décolle-t-il du sol en perdant toute adhérence (g = 10 m/s²) ?",
          "options": [
            "v > sqrt(g R) = sqrt(400) = 20 m/s (soit 72 km/h)",
            "v > 40 m/s",
            "v > 10 m/s",
            "Le véhicule ne peut jamais décoller sur une bosse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au sommet de la bosse, R = m(g - v²/R). Le décollement (R = 0) intervient dès que v = sqrt(g R) = sqrt(10 × 40) = 20 m/s (72 km/h). Au-delà de cette vitesse, les roues ne touchent plus le sol."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l02_centre_inertie_p06",
      "order": 6,
      "title": "Systèmes mécaniques réels, frottements et sécurité routière",
      "summary": "Bilan énergétique global, travail des forces non conservatives et dissipation thermique Delta Em = W(f) = -f · d, adhérence des pneumatiques, coefficient de frottement, calcul des distances de sécurité et sensibilisation aux dangers de la vitesse sur les routes en Côte d'Ivoire.",
      "conceptExplanation": "1. Énergie mécanique et forces non conservatives :\nL'énergie mécanique d'un système est la somme de son énergie cinétique et de son énergie potentielle de pesanteur :\nEm = Ec + Epp = (1/2) m v² + m g z.\n- En l'absence de frottement (forces conservatives uniquement) : Delta Em = 0 (conservation stricte de l'énergie mécanique).\n- En présence de frottements (forces non conservatives) : la variation de l'énergie mécanique est égale au travail des forces de frottement :\nDelta Em = Em(B) - Em(A) = W_AB(f) = -f · l < 0.\nL'énergie mécanique 'perdue' est intégralement convertie en énergie thermique (échauffement des freins et de la piste).\n\n2. Lois du frottement solide (lois de Coulomb du frottement) :\nLa force de frottement tangentielle f exercée entre deux surfaces en contact est proportionnelle à la réaction normale d'appui Rn :\nf = mu · Rn (où mu est le coefficient de frottement dynamique ou coefficient d'adhérence).\nSur route horizontale : Rn = m g, donc f = mu · m · g.\nL'accélération de freinage maximale permise par l'adhérence des pneus vaut alors :\na_max = -f / m = -mu · g.\nRemarque fondamentale : cette accélération de freinage est INDÉPENDANTE de la masse du véhicule ! Un camion et une petite citadine ont la même décélération théorique maximale pour des pneus de même qualité.\n\n3. Distance d'arrêt totale d'un véhicule en circulation :\nLa distance totale d'arrêt dA se décompose en deux distances consécutives :\ndA = dR + dF\n- Distance de réaction dR : distance parcourue pendant le temps de réaction du conducteur (t_R ≈ 1 s en moyenne) à vitesse constante :\ndR = v · t_R.\n- Distance de freinage dF : distance parcourue pendant le ralentissement mécanique :\ndF = v² / (2 |a|) = v² / (2 mu g).\nSur route mouillée en Côte d'Ivoire, le coefficient d'adhérence mu chute de 0,8 (route sèche) à 0,4 (route pluvieuse), ce qui DOUBLE la distance de freinage !",
      "keyRule": "L'énergie mécanique varie selon Delta Em = W(f) = -f · l. La distance d'arrêt totale vaut dA = dR + dF = v · tR + v² / (2 mu g). Sur route mouillée, le coefficient mu est divisé par 2, donc dF est doublée.",
      "formulas": [
        {
          "name": "Bilan d'énergie mécanique avec frottements",
          "formula": "\\Delta E_m = E_m(B) - E_m(A) = W_{AB}(\\vec{f}) = -f \\cdot l",
          "note": "L'énergie mécanique dissipée se transforme en chaleur"
        },
        {
          "name": "Distance d'arrêt totale d'un véhicule",
          "formula": "d_A = d_R + d_F = v \\cdot t_R + \\frac{v^2}{2\\,\\mu\\,g}",
          "note": "tR temps de réaction (~1 s), mu coefficient d'adhérence"
        }
      ],
      "workedExample": {
        "title": "Calcul de la distance d'arrêt sur route sèche versus route mouillée",
        "statement": "Une automobile roule à 108 km/h (v = 30 m/s) sur l'autoroute du Nord en Côte d'Ivoire. Le temps de réaction du conducteur est tR = 1,0 s et g = 10 m/s². Calcule la distance d'arrêt totale sur route sèche (mu = 0,80) puis sur route inondée après une pluie tropicale (mu = 0,40).",
        "methodSteps": [
          "Étape 1 : Calculer la distance de réaction : dR = v · tR = 30 m/s × 1,0 s = 30 m.",
          "Étape 2 : Calculer la distance de freinage sur route sèche (mu = 0,80) : dF(sec) = 30² / (2 × 0,80 × 10) = 900 / 16 = 56,25 m.",
          "Étape 3 : Distance totale sur route sèche : dA(sec) = 30 + 56,25 ≈ 86,3 m.",
          "Étape 4 : Calculer la distance de freinage sur route mouillée (mu = 0,40) : dF(mouillé) = 30² / (2 × 0,40 × 10) = 900 / 8,0 = 112,5 m.",
          "Étape 5 : Distance totale sur route mouillée : dA(mouillé) = 30 + 112,5 = 142,5 m."
        ],
        "conclusion": "Sur route mouillée, la distance d'arrêt passe de 86,3 m à 142,5 m : elle augmente de près de 60 mètres !"
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Composantes de la distance d'arrêt d'un véhicule",
        "tableData": {
          "headers": [
            "Composante",
            "Facteur déterminant",
            "Formule de calcul",
            "Influence des conditions"
          ],
          "rows": [
            [
              "Distance de réaction dR",
              "État du conducteur (fatigue, alcool, téléphone)",
              "dR = v · tR",
              "Augmente si le conducteur est distrait ou fatigué"
            ],
            [
              "Distance de freinage dF",
              "Adhérence des pneus et état de la route",
              "dF = v² / (2 mu g)",
              "Double sur route mouillée par rapport à route sèche"
            ],
            [
              "Distance d'arrêt totale dA",
              "Somme des deux phases",
              "dA = dR + dF",
              "Quadruple si la vitesse passe de 50 à 100 km/h"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Variation de l'énergie mécanique sous l'action des frottements",
          "stepTheme": "Énergie mécanique",
          "stepBadge": "Delta Em = W(f)",
          "paragraphText": "En présence de forces de frottement f, l'énergie mécanique d'un système n'est plus conservée. La variation Delta Em = Em(final) - Em(initial) est égale au travail résistant des forces de frottement : Delta Em = -f · l. Cette énergie se dissipe sous forme de chaleur dans l'environnement.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p06_q1",
            "type": "mcq",
            "prompt": "Un wagonnet de 100 kg part du repos à une hauteur h = 10 m (Em_initial = 10 000 J) et arrive au bas de la pente avec une vitesse de 12 m/s (g = 10 m/s²). Quelle quantité d'énergie thermique Q a été dissipée par les frottements ?",
            "options": [
              "Q = 2800 J",
              "Q = 7200 J",
              "Q = 10 000 J",
              "Q = 0 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ec_final = (1/2) m v² = (1/2) × 100 × 12² = 50 × 144 = 7200 J. Em_final = 7200 J. Perte d'énergie mécanique |Delta Em| = 10 000 - 7200 = 2800 J. Cette énergie a été dissipée en chaleur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Coefficient d'adhérence mu et décélération maximale",
          "stepTheme": "Adhérence des pneus",
          "stepBadge": "a = -mu g",
          "paragraphText": "La force de freinage maximale f_max qu'un pneu peut développer sans déraper est f_max = mu Rn = mu m g. La décélération maximale correspondante vaut a_max = -f_max / m = -mu g. Elle ne dépend ni de la masse du véhicule, ni de la largeur des pneus.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p06_q2",
            "type": "mcq",
            "prompt": "Sur une route sèche avec un coefficient d'adhérence mu = 0,80 et g = 10 m/s², quelle est la décélération maximale de freinage sans blocage des roues ?",
            "options": [
              "a_max = -8,0 m/s²",
              "a_max = -10 m/s²",
              "a_max = -0,80 m/s²",
              "a_max = -80 m/s²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "|a_max| = mu g = 0,80 × 10 = 8,0 m/s²."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul de la distance de réaction dR",
          "stepTheme": "Distance de réaction",
          "stepBadge": "dR = v · tR",
          "paragraphText": "Entre l'instant où le conducteur aperçoit un obstacle et l'instant où il appuie sur la pédale de frein, il s'écoule un temps de réaction tR (typiquement 1 seconde). Pendant cette durée, le véhicule continue d'avancer à vitesse constante : dR = v · tR.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p06_q3",
            "type": "mcq",
            "prompt": "Un conducteur roule à 72 km/h (20 m/s). Avec un temps de réaction de 1,2 s, quelle distance franchit-il avant même de commencer à freiner ?",
            "options": [
              "dR = 24 m",
              "dR = 12 m",
              "dR = 72 m",
              "dR = 16,7 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "dR = v · tR = 20 m/s × 1,2 s = 24 m."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Impact de la pluie sur la distance de freinage",
          "stepTheme": "Route mouillée",
          "stepBadge": "Aquaplaning",
          "paragraphText": "Sur route mouillée, la présence d'un film d'eau réduit considérablement le contact pneu-chaussée (aquaplanage). Le coefficient d'adhérence mu est approximativement divisé par 2. Comme dF = v² / (2 mu g), la distance de freinage est directement DOUBLÉE.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p06_q4",
            "type": "mcq",
            "prompt": "Si la distance de freinage d'une voiture à 90 km/h est de 40 m sur route sèche, quelle sera-t-elle sur route mouillée où l'adhérence est réduite de moitié ?",
            "options": [
              "80 m (distance de freinage doublée)",
              "40 m",
              "160 m",
              "60 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "dF = v² / (2 mu g). Lorsque le coefficient mu est divisé par 2, la distance de freinage est multipliée par 2 : 40 m × 2 = 80 m."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Vérification du respect de la vitesse autorisée en Côte d'Ivoire",
          "stepTheme": "Sécurité routière",
          "stepBadge": "Code de la route CI",
          "paragraphText": "Sur les autoroutes de Côte d'Ivoire (ex: autoroute du Nord Abidjan-Yamoussoukro), la vitesse maximale autorisée pour les véhicules légers est de 120 km/h (soit environ 33,3 m/s). Un calcul cinématique de dépassement permet de vérifier formellement si un automobiliste est en infraction.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p06_q5",
            "type": "mcq",
            "prompt": "Une voiture accélère et atteint une vitesse de 50 m/s au moment où elle dépasse un car. Sachant que la vitesse limite sur l'autoroute est de 120 km/h, l'automobiliste est-il en infraction ?",
            "options": [
              "Oui, car 50 m/s correspond à 180 km/h, ce qui dépasse largement les 120 km/h autorisés.",
              "Non, 50 m/s est inférieur à 120 km/h.",
              "Non, car le dépassement autorise une vitesse illimitée.",
              "On ne peut pas savoir sans connaître la marque de la voiture."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour convertir des m/s en km/h, on multiplie par 3,6 : v = 50 × 3,6 = 180 km/h. La vitesse autorisée étant de 120 km/h, l'automobiliste commet un grand excès de vitesse (+60 km/h)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Rôle des ceintures de sécurité et des airbags",
          "stepTheme": "Inertie corporelle",
          "stepBadge": "Sécurité passive",
          "paragraphText": "Lors d'un choc frontal, le véhicule s'arrête brutalement en quelques centièmes de seconde. En l'absence de ceinture, les passagers poursuivent leur mouvement à la vitesse initiale par inertie et heurtent le pare-brise. La ceinture et l'airbag augmentent la distance d'arrêt du corps et réduisent la force d'impact subie.",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p06_q6",
            "type": "mcq",
            "prompt": "Quel principe fondamental de la physique explique qu'un conducteur non ceinturé soit projeté contre le pare-brise lors d'un accident frontal ?",
            "options": [
              "Le principe de l'inertie (1ère loi de Newton) : en l'absence de force de retenue, son corps continue son mouvement rectiligne uniforme à sa vitesse antérieure.",
              "La force centrifuge de la voiture.",
              "L'attraction électrostatique du pare-brise.",
              "Le poids du conducteur qui devient horizontal."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lorsque les freins ou l'obstacle stoppent la carrosserie, aucune force n'arrête le passager non ceinturé : son corps conserve sa vitesse initiale par inertie jusqu'à rencontrer un obstacle."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège fréquent : masse du véhicule et distance de freinage",
          "stepTheme": "Invariance de la masse",
          "stepBadge": "Attention au bac",
          "paragraphText": "Contrairement à une idée reçue très tenace, la distance de freinage théorique pure dF = v² / (2 mu g) ne dépend PAS de la masse du véhicule : un camion vide ou plein glisse sur la même distance théorique à vitesse égale, car une masse plus lourde augmente proportionnellement la force d'adhérence f = mu m g !",
          "exercise": {
            "id": "terminale_d_physique_l02_centre_inertie_p06_q7",
            "type": "mcq",
            "prompt": "Deux voitures identiques A (masse 1000 kg) et B (chargée à 1500 kg) freinent roues bloquées à 90 km/h sur la même route sèche. Que peut-on dire de leur distance de glissade théorique ?",
            "options": [
              "Elle est rigoureusement identique pour les deux voitures, car la masse s'élimine de l'équation a = -mu g.",
              "La voiture chargée met 1,5 fois plus de distance pour s'arrêter.",
              "La voiture légère met deux fois plus de distance pour s'arrêter.",
              "La voiture chargée s'arrête instantanément."
            ],
            "correctAnswerIndex": 0,
            "explanation": "La force de frottement vaut f = mu m g. En appliquant la 2e loi de Newton : -f = m a => -mu m g = m a => a = -mu g. L'accélération ne dépend pas de la masse m, donc la distance d'arrêt dF = v² / (2 mu g) est la même pour les deux véhicules."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l02_centre_inertie_p06_q1",
          "type": "mcq",
          "prompt": "Un wagonnet de 100 kg part du repos à une hauteur h = 10 m (Em_initial = 10 000 J) et arrive au bas de la pente avec une vitesse de 12 m/s (g = 10 m/s²). Quelle quantité d'énergie thermique Q a été dissipée par les frottements ?",
          "options": [
            "Q = 2800 J",
            "Q = 7200 J",
            "Q = 10 000 J",
            "Q = 0 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ec_final = (1/2) m v² = (1/2) × 100 × 12² = 50 × 144 = 7200 J. Em_final = 7200 J. Perte d'énergie mécanique |Delta Em| = 10 000 - 7200 = 2800 J. Cette énergie a été dissipée en chaleur."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p06_q2",
          "type": "mcq",
          "prompt": "Sur une route sèche avec un coefficient d'adhérence mu = 0,80 et g = 10 m/s², quelle est la décélération maximale de freinage sans blocage des roues ?",
          "options": [
            "a_max = -8,0 m/s²",
            "a_max = -10 m/s²",
            "a_max = -0,80 m/s²",
            "a_max = -80 m/s²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "|a_max| = mu g = 0,80 × 10 = 8,0 m/s²."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p06_q3",
          "type": "mcq",
          "prompt": "Un conducteur roule à 72 km/h (20 m/s). Avec un temps de réaction de 1,2 s, quelle distance franchit-il avant même de commencer à freiner ?",
          "options": [
            "dR = 24 m",
            "dR = 12 m",
            "dR = 72 m",
            "dR = 16,7 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "dR = v · tR = 20 m/s × 1,2 s = 24 m."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p06_q4",
          "type": "mcq",
          "prompt": "Si la distance de freinage d'une voiture à 90 km/h est de 40 m sur route sèche, quelle sera-t-elle sur route mouillée où l'adhérence est réduite de moitié ?",
          "options": [
            "80 m (distance de freinage doublée)",
            "40 m",
            "160 m",
            "60 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "dF = v² / (2 mu g). Lorsque le coefficient mu est divisé par 2, la distance de freinage est multipliée par 2 : 40 m × 2 = 80 m."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p06_q5",
          "type": "mcq",
          "prompt": "Une voiture accélère et atteint une vitesse de 50 m/s au moment où elle dépasse un car. Sachant que la vitesse limite sur l'autoroute est de 120 km/h, l'automobiliste est-il en infraction ?",
          "options": [
            "Oui, car 50 m/s correspond à 180 km/h, ce qui dépasse largement les 120 km/h autorisés.",
            "Non, 50 m/s est inférieur à 120 km/h.",
            "Non, car le dépassement autorise une vitesse illimitée.",
            "On ne peut pas savoir sans connaître la marque de la voiture."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour convertir des m/s en km/h, on multiplie par 3,6 : v = 50 × 3,6 = 180 km/h. La vitesse autorisée étant de 120 km/h, l'automobiliste commet un grand excès de vitesse (+60 km/h)."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p06_q6",
          "type": "mcq",
          "prompt": "Quel principe fondamental de la physique explique qu'un conducteur non ceinturé soit projeté contre le pare-brise lors d'un accident frontal ?",
          "options": [
            "Le principe de l'inertie (1ère loi de Newton) : en l'absence de force de retenue, son corps continue son mouvement rectiligne uniforme à sa vitesse antérieure.",
            "La force centrifuge de la voiture.",
            "L'attraction électrostatique du pare-brise.",
            "Le poids du conducteur qui devient horizontal."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque les freins ou l'obstacle stoppent la carrosserie, aucune force n'arrête le passager non ceinturé : son corps conserve sa vitesse initiale par inertie jusqu'à rencontrer un obstacle."
        },
        {
          "id": "terminale_d_physique_l02_centre_inertie_p06_q7",
          "type": "mcq",
          "prompt": "Deux voitures identiques A (masse 1000 kg) et B (chargée à 1500 kg) freinent roues bloquées à 90 km/h sur la même route sèche. Que peut-on dire de leur distance de glissade théorique ?",
          "options": [
            "Elle est rigoureusement identique pour les deux voitures, car la masse s'élimine de l'équation a = -mu g.",
            "La voiture chargée met 1,5 fois plus de distance pour s'arrêter.",
            "La voiture légère met deux fois plus de distance pour s'arrêter.",
            "La voiture chargée s'arrête instantanément."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La force de frottement vaut f = mu m g. En appliquant la 2e loi de Newton : -f = m a => -mu m g = m a => a = -mu g. L'accélération ne dépend pas de la masse m, donc la distance d'arrêt dF = v² / (2 mu g) est la même pour les deux véhicules."
        }
      ]
    }
  ]
};
