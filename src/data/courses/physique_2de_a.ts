// ============================================================================
// MODULE OFFICIEL : PHYSIQUE 2de A (PHYSIQUE-CHIMIE)
// Ministère de l'Éducation Nationale et de l'Alphabétisation (MENA - Côte d'Ivoire)
// Thème 1 : Mécanique
// Leçon 1 : Le mouvement
// Leçon 2 : Équilibre d'un solide soumis à deux forces
// Règle absolue : Zéro code brut informatique, pédagogie pas-à-pas, 8 questions QCM par mini-leçon (score 8/8 exigé)
// ============================================================================

import type { CurriculumChapter } from '../../lib/curriculum/types';

// ============================================================================
// LEÇON 1 : LE MOUVEMENT
// ============================================================================
export const physique2deALeMouvementChapter: CurriculumChapter = {
  id: 'seconde_a_physique_ch1_le_mouvement',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_a',
  order: 1,
  officialVolumeHours: 8,
  title: 'Leçon 1 — Le mouvement',
  summary:
    "Caractère relatif du mouvement et référentiels (terrestre, géocentrique, Copernic), repères d'espace et de temps, vecteur-position, trajectoire, vitesses moyenne et instantanée, vecteur-vitesse et types de mouvement (rectiligne uniforme MRU et rectiligne varié MRUV).",
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/4 : Relativité du mouvement, Référentiels et Repères
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_physique_ch1_p1',
      order: 1,
      title: 'Relativité du mouvement, référentiels et repères',
      summary:
        "Caractère relatif du mouvement par rapport à l'objet de référence, définition des référentiels (terrestre, géocentrique, Copernic) et choix des repères d'espace et de temps.",
      conceptExplanation: `Pour décrire le mouvement d'un objet, la première démarche scientifique indispensable consiste à préciser par rapport à quoi ce mouvement est étudié.

1. Caractère relatif du mouvement :
Un même corps peut être simultanément au repos et en mouvement selon l'observateur choisi.
Exemple fondamental :
Considérons un passager assis dans un car roulant sur la route :
- Par rapport au car (ou au conducteur), le passager est immobile (au repos).
- Par rapport à un piéton arrêté sur le trottoir, le passager se déplace à la vitesse du car (en mouvement).
Conclusion : Le mouvement d'un corps n'est jamais absolu ; il est toujours relatif au solide de référence choisi.

2. Qu'est-ce qu'un référentiel ?
Un référentiel est un solide indéformable par rapport auquel on décrit la position et le mouvement d'un mobile.
En physique, on utilise trois référentiels fondamentaux selon la nature de l'étude :
- Le référentiel terrestre (ou du laboratoire) :
  Il est lié à la Terre (la salle de classe, la route, le sol). C'est le référentiel usuel pour étudier les mouvements des piétons, des voitures, des trains et la chute des corps sur Terre.
- Le référentiel géocentrique :
  Son origine est le centre de la Terre, et ses trois axes pointent vers trois étoiles lointaines considérées comme fixes. Il est utilisé pour étudier le mouvement des satellites artificiels et de la Lune autour de la Terre.
- Le référentiel de Copernic (ou référentiel héliocentrique) :
  Son origine est le centre du Soleil, et ses trois axes pointent vers trois étoiles fixes lointaines. Il est utilisé pour étudier les mouvements des planètes, des comètes et des sondes spatiales dans le système solaire.

3. Les repères associés au référentiel :
Pour repérer précisément un point mobile au cours du temps, on associe au référentiel :
- Un repère d'espace : généralement un repère orthonormé (O, i, j, k) permettant de déterminer à chaque instant les coordonnées d'espace (x, y, z) du mobile.
- Un repère de temps : défini par un instant initial choisi arbitrairement comme origine des dates (t = 0), et par une unité légale de mesure du temps qui est la seconde (s).`,
      formulas: [
        {
          name: 'Les 3 référentiels fondamentaux',
          formula: 'Terrestre (sur Terre) | Géocentrique (satellites) | Copernic (planètes)',
          note: 'Choix fondamental selon l\'échelle du mouvement étudié.'
        },
        {
          name: 'Unité légale de temps',
          formula: 't en secondes (s)',
          note: 'Origine des dates : t = 0 fixé arbitrairement.'
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Le voyage de Mory dans le mini-car",
        statement: "Mory voyage assis à côté du conducteur dans un mini-car roulant de Bouaflé vers Yamoussoukro. Un élève arrêté au bord de la route les regarde passer. Préciser l'état de repos ou de mouvement de Mory par rapport au car et par rapport au piéton, puis nommer le référentiel adéquat pour étudier le trajet du car.",
        methodSteps: [
          "Étape 1 : Par rapport au mini-car, la distance entre Mory et le siège ne varie pas : Mory est au repos dans le car.",
          "Étape 2 : Par rapport au piéton immobile sur le trottoir, Mory change continuellement de position : Mory est en mouvement.",
          "Étape 3 : Pour étudier le trajet de Bouaflé à Yamoussoukro sur la route, le référentiel adapté est le référentiel terrestre lié au sol."
        ],
        conclusion: "Le mouvement est relatif au solide de référence choisi. Pour ce déplacement routier, on utilise le référentiel terrestre."
      },
      exercises: [
        {
          id: 'seconde_a_physique_ch1_p1_ex1',
          type: 'mcq',
          prompt: "Pourquoi dit-on en physique que le mouvement d'un objet est relatif ?",
          options: [
            "Parce qu'un objet peut être au repos par rapport à un corps et en mouvement par rapport à un autre",
            "Parce que la vitesse d'un objet est toujours égale à zéro",
            "Parce que tous les corps de l'univers se déplacent à la vitesse de la lumière",
            "Parce que les objets ne peuvent se déplacer qu'en ligne droite"
          ],
          correctAnswerIndex: 0,
          explanation: "Le mouvement n'a de sens que si l'on précise l'objet de référence choisi : un voyageur est immobile par rapport à son train mais en mouvement par rapport aux rails."
        },
        {
          id: 'seconde_a_physique_ch1_p1_ex2',
          type: 'mcq',
          prompt: "Qu'appelle-t-on rigoureusement un référentiel en mécanique ?",
          options: [
            "Un solide indéformable par rapport auquel on décrit le mouvement d'un mobile",
            "Un chronomètre qui mesure la durée d'une course",
            "Une balance qui mesure la masse d'un objet",
            "Une règle graduée servant uniquement à tracer des segments"
          ],
          correctAnswerIndex: 0,
          explanation: "Un référentiel est rigoureusement défini comme un solide indéformable de référence choisi pour décrire la position et l'évolution d'un mobile."
        },
        {
          id: 'seconde_a_physique_ch1_p1_ex3',
          type: 'mcq',
          prompt: "Quel référentiel utilise-t-on obligatoirement pour étudier le mouvement d'une voiture sur une route ivoirienne ?",
          options: ['Le référentiel terrestre', 'Le référentiel de Copernic', 'Le référentiel géocentrique', 'Le référentiel lunaire'],
          correctAnswerIndex: 0,
          explanation: "Pour tous les mouvements se déroulant à la surface de la Terre (voitures, trains, marcheurs, chutes d'objets), on utilise le référentiel terrestre lié au sol."
        },
        {
          id: 'seconde_a_physique_ch1_p1_ex4',
          type: 'mcq',
          prompt: "Quel référentiel a son origine au centre de la Terre et ses axes dirigés vers trois étoiles lointaines fixes ?",
          options: ['Le référentiel géocentrique', 'Le référentiel terrestre', 'Le référentiel de Copernic', 'Le référentiel du laboratoire'],
          correctAnswerIndex: 0,
          explanation: "Le référentiel géocentrique a pour centre le centre de gravité de la Terre et ses trois axes orientés vers trois étoiles fixes lointaines."
        },
        {
          id: 'seconde_a_physique_ch1_p1_ex5',
          type: 'mcq',
          prompt: "Quel référentiel est utilisé pour étudier le mouvement des planètes autour du Soleil ?",
          options: ['Le référentiel de Copernic (héliocentrique)', 'Le référentiel terrestre', 'Le référentiel géocentrique', 'Le référentiel de la Lune'],
          correctAnswerIndex: 0,
          explanation: "Le référentiel de Copernic (ou héliocentrique), centré sur le Soleil, est le référentiel privilégié pour décrire le mouvement orbital des planètes et astres du système solaire."
        },
        {
          id: 'seconde_a_physique_ch1_p1_ex6',
          type: 'mcq',
          prompt: "Pour étudier le mouvement d'un satellite météorologique tournant autour de la Terre, quel est le référentiel le plus approprié ?",
          options: ['Le référentiel géocentrique', 'Le référentiel de Copernic', 'Le référentiel terrestre', 'Le référentiel solaire'],
          correctAnswerIndex: 0,
          explanation: "Le référentiel géocentrique est le référentiel adapté à l'étude des satellites artificiels en orbite autour de notre planète."
        },
        {
          id: 'seconde_a_physique_ch1_p1_ex7',
          type: 'mcq',
          prompt: "Quelle est l'unité légale internationale (SI) de la date et de la durée dans le repère de temps ?",
          options: ['La seconde (s)', 'La minute (min)', "L'heure (h)", 'Le jour (j)'],
          correctAnswerIndex: 0,
          explanation: "L'unité légale du système international (SI) pour le temps est la seconde (symbole s)."
        },
        {
          id: 'seconde_a_physique_ch1_p1_ex8',
          type: 'mcq',
          prompt: "Un élève est assis dans un bus qui roule à 50 km/h. Quel est son état par rapport au bus et par rapport à un arbre au bord de la voie ?",
          options: [
            "Au repos par rapport au bus, en mouvement par rapport à l'arbre",
            "En mouvement par rapport au bus, au repos par rapport à l'arbre",
            "En mouvement par rapport au bus et à l'arbre",
            "Au repos par rapport au bus et à l'arbre"
          ],
          correctAnswerIndex: 0,
          explanation: "Sa position ne change pas par rapport à l'intérieur du bus (au repos), mais change continuellement par rapport aux arbres enracinés au sol (en mouvement)."
        }
      ]
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/4 : Vecteur-position, Vecteur-déplacement et Trajectoire
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_physique_ch1_p2',
      order: 2,
      title: 'Point mobile, vecteur-position, déplacement et trajectoire',
      summary:
        "Repérage d'un point mobile par ses coordonnées, expression du vecteur-position OM = x i + y j, vecteur-déplacement et classification des trajectoires (rectiligne, circulaire, curviligne).",
      conceptExplanation: `Pour modéliser le déplacement d'un objet dont les dimensions sont petites devant les distances parcourues, on l'assimile à un point géométrique appelé point mobile.

1. Vecteur-position d'un point mobile :
Dans un repère d'espace orthonormé (O, i, j), la position d'un point mobile M à une date t donnée est repérée par ses coordonnées cartésiennes (x, y).
On appelle vecteur-position du mobile à la date t le vecteur issu de l'origine O et pointant vers la position M :
  OM(t) = x(t) i + y(t) j.
Si le mouvement s'effectue dans l'espace à trois dimensions :
  OM(t) = x(t) i + y(t) j + z(t) k.
La distance entre l'origine O et le point mobile M est la norme du vecteur-position :
  OM = √(x² + y²).

2. Vecteur-déplacement d'un point mobile :
Soit M₁ la position du mobile à la date t₁, et M₂ sa position à une date ultérieure t₂.
Le vecteur-déplacement du mobile entre ces deux dates est le vecteur reliant directement M₁ à M₂ :
  M₁M₂ = OM₂ - OM₁.
En coordonnées cartésiennes :
  M₁M₂ = (x₂ - x₁) i + (y₂ - y₁) j.

3. Notion de trajectoire :
La trajectoire d'un point mobile est la ligne continue constituée par l'ensemble des positions successives occupées par ce point au cours de son mouvement.
Important : Tout comme le mouvement, la trajectoire dépend du référentiel choisi !
On distingue trois formes fondamentales de trajectoires :
- Trajectoire rectiligne : la trajectoire est une portion de ligne droite.
- Trajectoire circulaire : la trajectoire est un cercle ou un arc de cercle.
- Trajectoire curviligne : la trajectoire est une courbe géométrique quelconque (parabole, ellipse, onde, etc.).`,
      formulas: [
        {
          name: 'Vecteur-position en 2 dimensions',
          formula: 'OM = x i + y j',
          note: 'Norme : OM = √(x² + y²) en mètres.'
        },
        {
          name: 'Vecteur-déplacement',
          formula: 'M₁M₂ = OM₂ - OM₁ = (x₂ - x₁) i + (y₂ - y₁) j',
          note: 'Relie la position initiale à la position finale.'
        },
        {
          name: 'Les 3 types de trajectoires',
          formula: 'Rectiligne (droite) | Circulaire (cercle) | Curviligne (courbe)',
          note: 'La trajectoire dépend obligatoirement du référentiel.'
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Repérage et vecteur-position sur quadrillage",
        statement: "Dans un repère d'espace orthonormé (O, i, j), un point mobile se trouve à la date t₁ à la position M₁(x₁ = 1 m, y₁ = 4 m) et à la date t₂ à la position M₂(x₂ = 5 m, y₂ = 3 m). Écrire les vecteurs-positions OM₁ et OM₂, puis exprimer le vecteur-déplacement M₁M₂.",
        methodSteps: [
          "Étape 1 : Écrire le vecteur-position à la date t₁ : OM₁ = 1 i + 4 j.",
          "Étape 2 : Écrire le vecteur-position à la date t₂ : OM₂ = 5 i + 3 j.",
          "Étape 3 : Calculer le vecteur-déplacement M₁M₂ = OM₂ - OM₁ = (5 - 1) i + (3 - 4) j = 4 i - 1 j."
        ],
        conclusion: "OM₁ = i + 4 j ; OM₂ = 5 i + 3 j et le vecteur-déplacement M₁M₂ = 4 i - j."
      },
      exercises: [
        {
          id: 'seconde_a_physique_ch1_p2_ex1',
          type: 'mcq',
          prompt: "Dans un repère orthonormé (O, i, j), un point mobile M a pour coordonnées x = 3 m et y = 4 m. Quelle est l'expression de son vecteur-position OM ?",
          options: ['OM = 3 i + 4 j', 'OM = 4 i + 3 j', 'OM = 7 i', 'OM = 12 i j'],
          correctAnswerIndex: 0,
          explanation: "Par définition, le vecteur-position s'écrit OM = x i + y j, soit ici OM = 3 i + 4 j."
        },
        {
          id: 'seconde_a_physique_ch1_p2_ex2',
          type: 'mcq',
          prompt: "Quelle est la distance OM séparant l'origine O du point M de coordonnées (3 m, 4 m) ?",
          options: ['5 m', '7 m', '1 m', '25 m'],
          correctAnswerIndex: 0,
          explanation: "La norme est OM = √(3² + 4²) = √(9 + 16) = √25 = 5 m."
        },
        {
          id: 'seconde_a_physique_ch1_p2_ex3',
          type: 'mcq',
          prompt: "Qu'appelle-t-on la trajectoire d'un mobile en mécanique ?",
          options: [
            "L'ensemble des positions successives occupées par le point mobile au cours de son mouvement",
            "La durée totale mise par le mobile pour effectuer son trajet",
            "La vitesse maximale enregistrée au compteur",
            "La force qui tire le mobile vers l'avant"
          ],
          correctAnswerIndex: 0,
          explanation: "La trajectoire est la ligne géométrique continue jalonnée par l'ensemble des positions successivement occupées par le mobile dans un référentiel donné."
        },
        {
          id: 'seconde_a_physique_ch1_p2_ex4',
          type: 'mcq',
          prompt: "Comment qualifie-t-on la trajectoire d'un train se déplaçant sur une voie parfaitement rectiligne sans virage ?",
          options: ['Trajectoire rectiligne', 'Trajectoire circulaire', 'Trajectoire curviligne', 'Trajectoire discontinue'],
          correctAnswerIndex: 0,
          explanation: "Lorsque l'ensemble des positions est aligné sur une ligne droite, la trajectoire est dite rectiligne."
        },
        {
          id: 'seconde_a_physique_ch1_p2_ex5',
          type: 'mcq',
          prompt: "Quelle est la nature de la trajectoire de la valve d'une roue de bicyclette observée par rapport au cadre du vélo ?",
          options: ['Circulaire', 'Rectiligne', 'Parabolique', 'Immobile'],
          correctAnswerIndex: 0,
          explanation: "Par rapport au cadre du vélo (dont l'axe de la roue est fixe), la valve décrit un cercle parfait : la trajectoire est circulaire."
        },
        {
          id: 'seconde_a_physique_ch1_p2_ex6',
          type: 'mcq',
          prompt: "La forme de la trajectoire d'un mobile dépend-elle du référentiel choisi ?",
          options: [
            "Oui, la trajectoire dépend obligatoirement du référentiel choisi",
            "Non, la trajectoire est une propriété absolue identique pour tous les observateurs",
            "Uniquement si la vitesse dépasse 100 km/h",
            "Uniquement pour les mouvements dans l'eau"
          ],
          correctAnswerIndex: 0,
          explanation: "Tout comme le mouvement, la trajectoire est relative : un colis lâché d'un avion a une trajectoire rectiligne verticale pour le pilote, mais parabolique (curviligne) pour un observateur au sol."
        },
        {
          id: 'seconde_a_physique_ch1_p2_ex7',
          type: 'mcq',
          prompt: "Soient les positions M₁(1, 2) et M₂(4, 6). Quelles sont les composantes du vecteur-déplacement M₁M₂ ?",
          options: ['M₁M₂ = 3 i + 4 j', 'M₁M₂ = 5 i + 8 j', 'M₁M₂ = -3 i - 4 j', 'M₁M₂ = 4 i + 12 j'],
          correctAnswerIndex: 0,
          explanation: "M₁M₂ = (x₂ - x₁) i + (y₂ - y₁) j = (4 - 1) i + (6 - 2) j = 3 i + 4 j."
        },
        {
          id: 'seconde_a_physique_ch1_p2_ex8',
          type: 'mcq',
          prompt: "Comment qualifie-t-on une trajectoire qui n'est ni une droite ni un cercle ?",
          options: ['Curviligne', 'Rectiligne', 'Uniforme', 'Nulle'],
          correctAnswerIndex: 0,
          explanation: "Toute trajectoire plane ou spatiale décrivant une courbe quelconque est appelée trajectoire curviligne."
        }
      ]
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 3/4 : Vitesse moyenne, Vitesse instantanée et Vecteur-vitesse
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_physique_ch1_p3',
      order: 3,
      title: 'Vitesse moyenne, vitesse instantanée et vecteur-vitesse',
      summary:
        "Définition et calcul de la vitesse moyenne Vm = d / Δt, relation de conversion 1 m/s = 3,6 km/h, détermination de la vitesse instantanée v(ti) sur chronophotographie et caractéristiques du vecteur-vitesse.",
      conceptExplanation: `La rapidité avec laquelle un point mobile effectue son déplacement est quantifiée par la grandeur vitesse.

1. Vitesse moyenne (V_m) :
La vitesse moyenne d'un mobile est égale au quotient de la distance parcourue d par la durée Δt mise pour la parcourir :
  V_m = d / Δt.
Unités légales officielles (SI) :
- Distance d en mètres (m).
- Durée Δt en secondes (s).
- Vitesse moyenne V_m en mètres par seconde (m·s⁻¹ ou m/s).

Règle d'or de conversion d'unités :
Pour passer des m·s⁻¹ en km·h⁻¹, on multiplie par 3,6 :
  1 m·s⁻¹ = 3,6 km·h⁻¹.
Pour passer des km·h⁻¹ en m·s⁻¹, on divise par 3,6 :
  Exemple : 90 km·h⁻¹ = 90 / 3,6 = 25 m·s⁻¹.

2. Vitesse instantanée v(t) :
La vitesse instantanée est la vitesse du mobile à un instant précis t. C'est la valeur indiquée en temps réel par l'aiguille du compteur de vitesse d'une voiture.
Sur un enregistrement expérimental (table à coussin d'air ou chronophotographie) où les positions successives M₀, M₁, M₂... sont relevées à intervalles de temps réguliers τ :
La vitesse instantanée à la date t_i (position M_i) est évaluée par la vitesse moyenne entre les positions encadrantes M_{i-1} et M_{i+1} :
  v(t_i) = M_{i-1}M_{i+1} / (t_{i+1} - t_{i-1}) = M_{i-1}M_{i+1} / (2τ).

3. Caractéristiques du vecteur-vitesse v(t) :
À chaque instant, le vecteur-vitesse v(t) est défini par 4 caractéristiques physiques fondamentales :
- Point d'application : la position occupée par le mobile à cet instant (point M_i).
- Direction : la droite tangente à la trajectoire au point M_i considéré.
- Sens : le sens du mouvement du mobile.
- Valeur (ou norme) : la vitesse instantanée v(t_i) = ||v(t_i)||, représentée selon une échelle graphique choisie (ex : 1 cm pour 0,5 m·s⁻¹).`,
      formulas: [
        {
          name: 'Vitesse moyenne',
          formula: 'V_m = d / Δt',
          note: 'd en mètres (m), Δt en secondes (s), V_m en m·s⁻¹.'
        },
        {
          name: "Relation de conversion d'unités",
          formula: '1 m·s⁻¹ = 3,6 km·h⁻¹',
          note: 'Multiplier par 3,6 pour passer en km/h ; diviser par 3,6 pour passer en m/s.'
        },
        {
          name: 'Vitesse instantanée sur enregistrement',
          formula: 'v(t_i) = M_{i-1}M_{i+1} / (2τ)',
          note: 'Distance entre points encadrants divisée par 2τ.'
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Vitesse moyenne du train Treichville-Bouaké",
        statement: "Un train part de Treichville (Abidjan) pour Bouaké, distants de d = 340 km. Le départ s'effectue à 8 h 45 min. Le train arrive à Dimbokro à 11 h 50 min où il s'arrête 20 min, puis poursuit sans arrêt et arrive à Bouaké 2 h 35 min après. Déterminer la durée totale du trajet en secondes, puis calculer la vitesse moyenne du train en m·s⁻¹ et en km·h⁻¹.",
        methodSteps: [
          "Étape 1 : Calculer la durée totale du parcours : Δt = (11 h 50 min - 8 h 45 min) + 20 min + 2 h 35 min = 3 h 05 min + 20 min + 2 h 35 min = 6 h 00 min.",
          "Étape 2 : Convertir la durée en secondes : Δt = 6 × 3600 s = 21 600 s. Convertir la distance en mètres : d = 340 km = 340 000 m.",
          "Étape 3 : Calculer la vitesse moyenne en m·s⁻¹ : V_m = 340 000 / 21 600 ≈ 15,74 m·s⁻¹.",
          "Étape 4 : Convertir en km·h⁻¹ : V_m = 340 km / 6 h ≈ 56,67 km·h⁻¹ (ou 15,74 × 3,6 = 56,67 km·h⁻¹)."
        ],
        conclusion: "La durée du trajet est de 6 h (21 600 s) et la vitesse moyenne du train est de 15,74 m·s⁻¹ (soit 56,67 km·h⁻¹)."
      },
      exercises: [
        {
          id: 'seconde_a_physique_ch1_p3_ex1',
          type: 'mcq',
          prompt: "Quelle formule permet de calculer la vitesse moyenne V_m d'un mobile parcourant une distance d pendant une durée Δt ?",
          options: ['V_m = d / Δt', 'V_m = d × Δt', 'V_m = Δt / d', 'V_m = d + Δt'],
          correctAnswerIndex: 0,
          explanation: "La vitesse moyenne est par définition le quotient de la distance parcourue par la durée : V_m = d / Δt."
        },
        {
          id: 'seconde_a_physique_ch1_p3_ex2',
          type: 'mcq',
          prompt: "Un automobiliste parcourt une distance d = 60 km en une durée Δt = 55 minutes. Quelle est sa vitesse moyenne en m·s⁻¹ ?",
          options: ['18,18 m·s⁻¹', '1,09 m·s⁻¹', '65,45 m·s⁻¹', '33,00 m·s⁻¹'],
          correctAnswerIndex: 0,
          explanation: "d = 60 000 m et Δt = 55 × 60 = 3300 s. V_m = 60 000 / 3300 ≈ 18,18 m·s⁻¹."
        },
        {
          id: 'seconde_a_physique_ch1_p3_ex3',
          type: 'mcq',
          prompt: "Une vitesse de 20 m·s⁻¹ équivaut à combien en km·h⁻¹ ?",
          options: ['72 km·h⁻¹', '5,55 km·h⁻¹', '20 km·h⁻¹', '200 km·h⁻¹'],
          correctAnswerIndex: 0,
          explanation: "Pour convertir des m·s⁻¹ en km·h⁻¹, on multiplie par 3,6 : 20 × 3,6 = 72 km·h⁻¹."
        },
        {
          id: 'seconde_a_physique_ch1_p3_ex4',
          type: 'mcq',
          prompt: "Une voiture roule à 108 km·h⁻¹ sur l'autoroute du Nord. Quelle est sa vitesse en m·s⁻¹ ?",
          options: ['30 m·s⁻¹', '388,8 m·s⁻¹', '10,8 m·s⁻¹', '54 m·s⁻¹'],
          correctAnswerIndex: 0,
          explanation: "Pour convertir des km·h⁻¹ en m·s⁻¹, on divise par 3,6 : 108 / 3,6 = 30 m·s⁻¹."
        },
        {
          id: 'seconde_a_physique_ch1_p3_ex5',
          type: 'mcq',
          prompt: "Sur un enregistrement avec un intervalle de temps τ entre deux marquages successifs, quelle formule donne la vitesse instantanée v(t₂) au point M₂ ?",
          options: [
            'v(t₂) = M₁M₃ / (2τ)',
            'v(t₂) = M₂M₃ / τ',
            'v(t₂) = M₀M₂ / τ',
            'v(t₂) = M₁M₂ / (2τ)'
          ],
          correctAnswerIndex: 0,
          explanation: "La vitesse instantanée au point M₂ est évaluée entre les points encadrants M₁ et M₃ distants d'une durée 2τ : v(t₂) = M₁M₃ / (2τ)."
        },
        {
          id: 'seconde_a_physique_ch1_p3_ex6',
          type: 'mcq',
          prompt: "Sur une table à coussin d'air à τ = 20 ms (soit 0,02 s), on mesure la distance M₀M₂ = 3,8 cm (soit 0,038 m). Quelle est la vitesse instantanée v(t₁) ?",
          options: ['0,95 m·s⁻¹', '1,90 m·s⁻¹', '0,475 m·s⁻¹', '9,5 m·s⁻¹'],
          correctAnswerIndex: 0,
          explanation: "v(t₁) = M₀M₂ / (2τ) = 0,038 / (2 × 0,02) = 0,038 / 0,04 = 0,95 m·s⁻¹."
        },
        {
          id: 'seconde_a_physique_ch1_p3_ex7',
          type: 'mcq',
          prompt: "Quelle est la direction du vecteur-vitesse en un point d'une trajectoire courbe ?",
          options: [
            "La tangente à la trajectoire en ce point",
            "La perpendiculaire à la trajectoire",
            "Une droite reliant le point à l'origine O",
            "Toujours la verticale du lieu"
          ],
          correctAnswerIndex: 0,
          explanation: "Le vecteur-vitesse est toujours rigoureusement porté par la droite tangente à la trajectoire au point considéré."
        },
        {
          id: 'seconde_a_physique_ch1_p3_ex8',
          type: 'mcq',
          prompt: "Quel appareil de bord d'un véhicule automobile indique directement la valeur de sa vitesse instantanée ?",
          options: ['Le compteur de vitesse (tachymètre)', 'Le compte-tours moteur', 'La jauge à essence', 'Le thermomètre d\'huile'],
          correctAnswerIndex: 0,
          explanation: "Le compteur de vitesse (ou tachymètre) du tableau de bord donne la valeur instantanée de la vitesse à chaque instant précis."
        }
      ]
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 4/4 : Types de mouvement (MRU et MRUV)
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_physique_ch1_p4',
      order: 4,
      title: 'Mouvements rectilignes : uniforme (MRU) et varié (MRUV)',
      summary:
        "Caractérisation du mouvement rectiligne uniforme (trajectoire droite, vitesse constante, vecteur-vitesse invariant) et du mouvement rectiligne uniformément varié (accéléré ou ralenti).",
      conceptExplanation: `L'analyse combinée de la trajectoire et de la variation de la vitesse permet de déterminer avec précision la nature physique d'un mouvement.

1. Mouvement Rectiligne Uniforme (MRU) :
Un mobile est animé d'un Mouvement Rectiligne Uniforme si :
- Sa trajectoire est une droite (points alignés sur l'enregistrement).
- Sa vitesse instantanée reste rigoureusement constante au cours du temps :
  v(t₁) = v(t₂) = v(t₃) = constante.
Sur un enregistrement à intervalles de temps réguliers τ, les points successifs sont alignés et équidistants (espacés de la même distance).
Propriété fondamentale du vecteur-vitesse en MRU :
Le vecteur-vitesse v est rigoureusement constant : il conserve au cours du temps sa direction (la droite), son sens et sa valeur numérique.

2. Mouvement Rectiligne Varié (accéléré ou ralenti) :
Un mobile est en mouvement rectiligne varié si sa trajectoire est une droite mais que la valeur de sa vitesse change au cours du temps :
- Mouvement accéléré : la vitesse augmente (v₁ < v₂ < v₃...).
  Sur l'enregistrement, les points successifs s'écartent de plus en plus (la distance entre deux points augmente).
- Mouvement ralenti (ou décéléré) : la vitesse diminue (v₁ > v₂ > v₃...).
  Sur l'enregistrement, les points successifs se rapprochent de plus en plus (la distance entre deux points diminue).

3. Mouvement Rectiligne Uniformément Varié (MRUV) :
Si, en plus d'être varié, la vitesse augmente ou diminue d'une quantité constante par unité de temps (variation uniforme de la vitesse : v₄ - v₂ = v₆ - v₄ = constante) :
Le mouvement est dit Rectiligne Uniformément Varié.
Propriété du vecteur-vitesse en MRUV :
Le vecteur-vitesse n'est pas constant : il conserve sa direction et son sens, mais sa valeur (norme) varie au cours du temps.`,
      formulas: [
        {
          name: 'Critère du Mouvement Rectiligne Uniforme (MRU)',
          formula: 'Trajectoire droite + v = constante => vecteur v = CONSTANT',
          note: 'Points alignés et équidistants sur l\'enregistrement.'
        },
        {
          name: 'Critère du Mouvement Rectiligne Varié (MRUV)',
          formula: 'Trajectoire droite + v augmente (accéléré) ou diminue (ralenti)',
          note: 'Direction et sens constants, mais norme ||v|| variable.'
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Analyse de l'enregistrement d'un palet autoporteur",
        statement: "Sur une table à coussin d'air horizontale, l'enregistrement des positions d'un mobile A donne des points A₀, A₁, A₂, A₃... alignés et distants de 2,75 cm toutes les 30 ms (τ = 30 ms). Calculer les vitesses instantanées v₂ et v₆ puis déterminer la nature du mouvement.",
        methodSteps: [
          "Étape 1 : Calculer v₂ au point A₂ : v₂ = A₁A₃ / (2τ) = (2,75 × 10⁻² m) / (60 × 10⁻³ s) ≈ 0,46 m·s⁻¹.",
          "Étape 2 : Calculer v₆ au point A₆ : v₆ = A₅A₇ / (2τ) = (2,75 × 10⁻² m) / (60 × 10⁻³ s) ≈ 0,46 m·s⁻¹.",
          "Étape 3 : Constater que v₂ = v₆ = 0,46 m·s⁻¹ (vitesse instantanée constante).",
          "Étape 4 : Conclure : la trajectoire étant une droite et la vitesse étant constante, le mouvement est Rectiligne Uniforme (MRU)."
        ],
        conclusion: "Le mobile est animé d'un Mouvement Rectiligne Uniforme (MRU) avec un vecteur-vitesse rigoureusement constant."
      },
      exercises: [
        {
          id: 'seconde_a_physique_ch1_p4_ex1',
          type: 'mcq',
          prompt: "Quelles sont les deux conditions indispensables pour qu'un mouvement soit qualifié de Rectiligne Uniforme (MRU) ?",
          options: [
            "Une trajectoire droite et une vitesse instantanée constante",
            "Une trajectoire circulaire et une vitesse croissante",
            "Une trajectoire courbe et une accélération nulle",
            "Une trajectoire droite et une vitesse qui augmente régulièrement"
          ],
          correctAnswerIndex: 0,
          explanation: "Rectiligne signifie que la trajectoire est une ligne droite, et Uniforme signifie que la valeur de la vitesse reste rigoureusement constante dans le temps."
        },
        {
          id: 'seconde_a_physique_ch1_p4_ex2',
          type: 'mcq',
          prompt: "Sur un enregistrement à intervalles réguliers τ, comment se présentent les positions d'un mobile en Mouvement Rectiligne Uniforme ?",
          options: [
            "Les points sont alignés et équidistants (même distance entre chaque point)",
            "Les points sont alignés et de plus en plus espacés",
            "Les points sont disposés sur un cercle parfait",
            "Les points sont alignés et de plus en plus rapprochés"
          ],
          correctAnswerIndex: 0,
          explanation: "En MRU, la vitesse étant constante, le mobile parcourt des distances égales pendant des durées égales τ : les points sont alignés et strictement équidistants."
        },
        {
          id: 'seconde_a_physique_ch1_p4_ex3',
          type: 'mcq',
          prompt: "Au cours d'un Mouvement Rectiligne Uniforme, que peut-on dire du vecteur-vitesse v ?",
          options: [
            "Le vecteur-vitesse est constant (il conserve sa direction, son sens et sa valeur)",
            "Le vecteur-vitesse change de sens toutes les secondes",
            "Seule la direction du vecteur-vitesse varie",
            "Le vecteur-vitesse est nul"
          ],
          correctAnswerIndex: 0,
          explanation: "Dans un MRU, la direction ne change pas (ligne droite), le sens est invariant et la valeur est constante : le vecteur-vitesse v est donc rigoureusement constant."
        },
        {
          id: 'seconde_a_physique_ch1_p4_ex4',
          type: 'mcq',
          prompt: "Sur un enregistrement rectiligne, on constate que la distance entre les points successifs augmente progressivement. Quelle est la nature de ce mouvement ?",
          options: [
            "Mouvement rectiligne accéléré",
            "Mouvement rectiligne ralenti",
            "Mouvement rectiligne uniforme",
            "Mouvement circulaire uniforme"
          ],
          correctAnswerIndex: 0,
          explanation: "Si la distance parcourue pendant la même durée τ augmente, cela signifie que la vitesse augmente : le mouvement est rectiligne accéléré."
        },
        {
          id: 'seconde_a_physique_ch1_p4_ex5',
          type: 'mcq',
          prompt: "Sur un enregistrement rectiligne, on calcule : v₂ = 0,5 m·s⁻¹, v₄ = 0,83 m·s⁻¹ et v₆ = 1,16 m·s⁻¹. On remarque que v₄ - v₂ = v₆ - v₄ = 0,33 m·s⁻¹. Comment qualifie-t-on ce mouvement ?",
          options: [
            "Mouvement rectiligne uniformément varié (accéléré)",
            "Mouvement rectiligne uniforme",
            "Mouvement curviligne ralenti",
            "Mouvement stationnaire sans déplacement"
          ],
          correctAnswerIndex: 0,
          explanation: "La vitesse augmente de manière constante et régulière dans le temps : le mouvement est rectiligne uniformément accéléré (MRUV)."
        },
        {
          id: 'seconde_a_physique_ch1_p4_ex6',
          type: 'mcq',
          prompt: "Dans un mouvement circulaire uniforme (trajectoire cercle à vitesse de valeur constante), le vecteur-vitesse est-il constant ?",
          options: [
            "Non, car sa direction change continuellement en restant tangente au cercle",
            "Oui, car la valeur de la vitesse ne change pas",
            "Oui, car le rayon est constant",
            "Oui, car le mouvement ne s'arrête jamais"
          ],
          correctAnswerIndex: 0,
          explanation: "Un vecteur n'est constant que si ses 3 caractéristiques (direction, sens, norme) sont invariantes. En mouvement circulaire, la direction tourne continuellement : le vecteur-vitesse n'est donc PAS constant."
        },
        {
          id: 'seconde_a_physique_ch1_p4_ex7',
          type: 'mcq',
          prompt: "Un véhicule freine en ligne droite pour s'arrêter à un feu rouge. Quelle est la nature de son mouvement pendant le freinage ?",
          options: [
            "Mouvement rectiligne ralenti (décéléré)",
            "Mouvement rectiligne accéléré",
            "Mouvement rectiligne uniforme",
            "Mouvement circulaire ralenti"
          ],
          correctAnswerIndex: 0,
          explanation: "La trajectoire est une droite et la vitesse diminue jusqu'à l'arrêt : le mouvement est rectiligne ralenti."
        },
        {
          id: 'seconde_a_physique_ch1_p4_ex8',
          type: 'mcq',
          prompt: "Au cours d'un mouvement rectiligne uniformément varié, qu'est-ce qui reste invariant dans le vecteur-vitesse ?",
          options: [
            "Sa direction et son sens restent invariants (seule sa norme varie)",
            "Sa valeur numérique reste invariante",
            "Rien ne reste invariant",
            "Sa position d'origine reste fixe"
          ],
          correctAnswerIndex: 0,
          explanation: "En ligne droite sans demi-tour, la direction (la droite) et le sens du vecteur-vitesse restent constants, tandis que sa valeur numérique (norme) augmente ou diminue."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 2 : ÉQUILIBRE D'UN SOLIDE SOUMIS À DEUX FORCES
// ============================================================================
export const physique2deAEquilibreSolideDeuxForcesChapter: CurriculumChapter = {
  id: 'seconde_a_physique_ch2_equilibre_solide_deux_forces',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_a',
  order: 2,
  officialVolumeHours: 8,
  title: "Leçon 2 — Équilibre d'un solide soumis à deux forces",
  summary:
    "Conditions d'équilibre d'un solide soumis à deux forces (même direction/support, sens opposés, même intensité F₁ + F₂ = 0), étude d'exemples fondamentaux (support horizontal, fil, plan incliné rugueux, ressort, poussée d'Archimède) et classification des équilibres (stable, instable, indifférent).",
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/3 : Conditions d'équilibre d'un solide soumis à deux forces
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_physique_ch2_p1',
      order: 1,
      title: "Conditions d'équilibre d'un solide soumis à deux forces",
      summary:
        "Énoncé officiel des conditions nécessaires et suffisantes d'équilibre (même direction, sens opposés, même intensité) et relation vectorielle fondamentale F₁ + F₂ = 0.",
      conceptExplanation: `Lorsqu'un objet matériel ne bouge pas dans notre environnement quotidien, il est dans un état d'immobilité appelé équilibre mécanique.

1. Notion d'équilibre d'un solide :
Un solide est dit en équilibre dans un référentiel donné si tous ses points restent au repos (immobiles) au cours du temps.

2. Dispositif expérimental d'étude :
On accroche un solide très léger (anneau de masse négligeable) entre deux dynamomètres A et B fixés à des supports :
- Les fils des deux dynamomètres s'alignent spontanément le long d'une même ligne droite.
- Les forces F₁ et F₂ exercées par les dynamomètres tirent dans des directions opposées.
- Les aiguilles des deux dynamomètres indiquent rigoureusement la même graduation (même intensité en Newtons : F₁ = F₂).

3. Règle fondamentale : Conditions d'équilibre officiel MENA :
Un solide soumis à l'action de deux forces F₁ et F₂ est en équilibre si et seulement si ces deux forces vérifient simultanément trois conditions :
- Elles ont la même direction (même droite d'action ou même support).
- Elles sont de sens opposés (l'une tire dans un sens, l'autre dans le sens contraire).
- Elles ont la même intensité (même valeur numérique : F₁ = F₂).

4. Traduction vectorielle indispensable :
L'ensemble de ces conditions se résume par la relation vectorielle fondamentale d'équilibre :
  F₁ + F₂ = 0 (vecteur nul).
Conséquence géométrique directe :
Sur un schéma, les deux flèches représentant les vecteurs-forces F₁ et F₂ ont la même longueur, sont portées par la même droite et pointent en sens inverses.`,
      formulas: [
        {
          name: "Condition vectorielle d'équilibre à deux forces",
          formula: 'F₁ + F₂ = 0',
          note: 'Somme vectorielle égale au vecteur nul.'
        },
        {
          name: "Conditions scalaires d'équilibre",
          formula: 'Même direction + Sens opposés + Même valeur (F₁ = F₂)',
          note: 'Les trois conditions doivent obligatoirement être réunies.'
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Équilibre d'un solide entre deux dynamomètres",
        statement: "Un solide de masse négligeable est maintenu en équilibre par deux dynamomètres D₁ et D₂. Le dynamomètre D₁ indique une force F₁ = 4,5 N orientée horizontalement vers la gauche. Déterminer les caractéristiques complètes (direction, sens et intensité) de la force F₂ exercée par le dynamomètre D₂.",
        methodSteps: [
          "Étape 1 : Le solide étant en équilibre sous l'action de deux forces, on applique la condition vectorielle : F₁ + F₂ = 0.",
          "Étape 2 : Direction de F₂ : même direction que F₁, c'est-à-dire la droite horizontale.",
          "Étape 3 : Sens de F₂ : opposé à celui de F₁, donc orienté horizontalement vers la droite.",
          "Étape 4 : Intensité de F₂ : égale à celle de F₁, soit F₂ = F₁ = 4,5 N."
        ],
        conclusion: "La force F₂ est horizontale, orientée vers la droite et a une intensité de 4,5 N."
      },
      exercises: [
        {
          id: 'seconde_a_physique_ch2_p1_ex1',
          type: 'mcq',
          prompt: "Quelles sont les trois conditions nécessaires et suffisantes pour qu'un solide soumis à deux forces F₁ et F₂ soit en équilibre ?",
          options: [
            "Même direction, sens opposés et même intensité (valeur)",
            "Directions perpendiculaires, même sens et même intensité",
            "Même direction, même sens et intensités différentes",
            "Sens opposés uniquement, peu importe la direction et la valeur"
          ],
          correctAnswerIndex: 0,
          explanation: "Pour que deux forces s'annulent parfaitement, elles doivent obligatoirement avoir la même droite d'action, des sens contraires et la même intensité en Newtons."
        },
        {
          id: 'seconde_a_physique_ch2_p1_ex2',
          type: 'mcq',
          prompt: "Quelle relation vectorielle traduit l'équilibre d'un solide soumis à deux forces F₁ et F₂ ?",
          options: ['F₁ + F₂ = 0', 'F₁ - F₂ = 0 (avec même sens)', 'F₁ × F₂ = 0', 'F₁ + F₂ = 2 N'],
          correctAnswerIndex: 0,
          explanation: "La relation vectorielle fondamentale est F₁ + F₂ = 0, traduisant que F₁ = -F₂."
        },
        {
          id: 'seconde_a_physique_ch2_p1_ex3',
          type: 'mcq',
          prompt: "Un solide est soumis à deux forces opposées F₁ = 10 N et F₂ = 6 N agissant sur la même droite. Ce solide est-il en équilibre ?",
          options: [
            "Non, car les deux forces n'ont pas la même intensité",
            "Oui, car elles ont la même droite d'action",
            "Oui, car elles sont de sens opposés",
            "Oui, car la résultante est positive"
          ],
          correctAnswerIndex: 0,
          explanation: "Comme F₁ ≠ F₂ (10 N ≠ 6 N), la résultante n'est pas nulle (4 N résiduels) : le solide n'est pas en équilibre et va se mettre en mouvement."
        },
        {
          id: 'seconde_a_physique_ch2_p1_ex4',
          type: 'mcq',
          prompt: "Deux forces ont la même valeur de 5 N et sont de sens opposés, mais sont portées par deux droites parallèles distinctes non confondues. Le solide est-il en équilibre de translation et de rotation ?",
          options: [
            "Non, car elles n'ont pas la même droite d'action (elles forment un couple qui fait tourner le solide)",
            "Oui, le solide est parfaitement immobile",
            "Oui, car 5 N - 5 N = 0 N",
            "Oui, car les droites sont parallèles"
          ],
          correctAnswerIndex: 0,
          explanation: "Deux forces de droites d'action distinctes créent un couple de rotation qui fait tourner le solide. L'équilibre exige qu'elles aient STRICTEMENT la même droite d'action."
        },
        {
          id: 'seconde_a_physique_ch2_p1_ex5',
          type: 'mcq',
          prompt: "Sur un schéma à l'échelle 1 cm pour 2 N représentant un solide en équilibre soumis à deux forces F₁ et F₂ de valeur 6 N, quelle doit être la longueur des deux flèches ?",
          options: ['3 cm pour chacune des deux flèches', '6 cm pour F₁ et 3 cm pour F₂', '12 cm', '1,5 cm'],
          correctAnswerIndex: 0,
          explanation: "À l'échelle 1 cm pour 2 N, une force de 6 N est représentée par une flèche de longueur 6 / 2 = 3 cm. Comme F₁ = F₂ = 6 N, les deux flèches mesurent exactement 3 cm."
        },
        {
          id: 'seconde_a_physique_ch2_p1_ex6',
          type: 'mcq',
          prompt: "Dans quelle unité du système international (SI) mesure-t-on l'intensité d'une force ?",
          options: ['Le Newton (N)', 'Le kilogramme (kg)', 'Le Joule (J)', 'Le Watt (W)'],
          correctAnswerIndex: 0,
          explanation: "L'intensité d'une force se mesure en Newtons (symbole N), à l'aide d'un dynamomètre."
        },
        {
          id: 'seconde_a_physique_ch2_p1_ex7',
          type: 'mcq',
          prompt: "Si une force F₁ est verticale et dirigée vers le haut, quelles doivent être la direction et le sens de la force F₂ pour assurer l'équilibre ?",
          options: [
            "Verticale et dirigée vers le bas",
            "Horizontale et dirigée vers la droite",
            "Verticale et dirigée vers le haut",
            "Inclinée à 45 degrés vers le bas"
          ],
          correctAnswerIndex: 0,
          explanation: "F₂ doit obligatoirement avoir la même direction (verticale) et le sens opposé (vers le bas)."
        },
        {
          id: 'seconde_a_physique_ch2_p1_ex8',
          type: 'mcq',
          prompt: "Un objet immobile posé sur une table est soumis à son poids P et à la réaction R de la table. Si P = 15 N, quelle est l'intensité de la réaction R ?",
          options: ['15 N', '0 N', '30 N', '-15 N (valeur absolue)'],
          correctAnswerIndex: 0,
          explanation: "À l'équilibre, l'intensité de la réaction compense exactement le poids : R = P = 15 N (les intensités sont toujours positives)."
        }
      ]
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/3 : Étude d'exemples fondamentaux
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_physique_ch2_p2',
      order: 2,
      title: "Étude d'exemples fondamentaux (Support, Fil, Plan incliné, Ressort, Poussée d'Archimède)",
      summary:
        "Applications concrètes de l'équilibre à deux forces : solide sur table horizontale (P + R = 0), solide suspendu à un fil (P + T = 0), solide sur plan incliné avec frottements, ressort et poussée d'Archimède.",
      conceptExplanation: `Les principes de l'équilibre à deux forces s'appliquent à une multitude de situations pratiques rencontrées en laboratoire et dans la vie courante.

1. Solide posé sur un plan horizontal :
Un objet (ex : livre de masse m posé sur une table) est soumis à deux forces extérieures :
- Son poids P : force à distance exercée par la Terre, verticale, vers le bas, appliquée au centre de gravité G, de valeur P = m × g.
- La réaction R de la table : force de contact exercée par la surface, verticale, vers le haut, appliquée au point de contact O.
À l'équilibre : P + R = 0, d'où en valeur : R = P = m × g.

2. Solide suspendu à un fil :
Une boule de masse m suspendue à un fil inextensible est soumise à deux forces :
- Son poids P (vertical, vers le bas, appliqué en G).
- La tension T du fil : force de contact dirigée vers le haut le long du fil, appliquée au point d'attache.
À l'équilibre : P + T = 0, d'où en valeur : T = P = m × g.

3. Solide posé sur un plan incliné rugueux :
Un solide reste en équilibre sur un plan incliné uniquement si la surface est rugueuse (présence de frottements) !
Dans ce cas, la réaction globale R du plan se décompose en deux composantes perpendiculaires :
- La réaction normale R_N : perpendiculaire (orthogonale) au plan incliné, empêchant l'enfoncement du solide.
- La force de frottement f : parallèle (tangente) au plan incliné et dirigée vers le haut pour s'opposer au glissement vers le bas.
Relation de décomposition : R = R_N + f.
À l'équilibre : P + R = 0   (soit P + R_N + f = 0).

4. Solide suspendu à un ressort :
Un solide fixé à l'extrémité d'un ressort vertical est soumis à son poids P et à la tension T du ressort (qui s'oppose à son allongement).
À l'équilibre : P + T = 0, d'où T = P.

5. Corps immergé ou flottant (Poussée d'Archimède) :
Un objet flottant immobile à la surface d'un liquide (ou remonté à la surface) est soumis à deux forces :
- Son poids P (vertical vers le bas).
- La poussée d'Archimède P_A : force verticale exercée par le fluide, dirigée vers le haut et appliquée au centre de poussée.
À l'équilibre : P + P_A = 0, d'où en valeur : P_A = P = m × g.`,
      formulas: [
        {
          name: 'Calcul du poids d\'un corps',
          formula: 'P = m × g',
          note: 'm en kg, g en N/kg (sur Terre g ≈ 10 N/kg ou 9,8 N/kg), P en N.'
        },
        {
          name: 'Solide sur plan horizontal ou suspendu',
          formula: 'P + R = 0  =>  R = P   et   P + T = 0  =>  T = P',
          note: 'Compensation parfaite des deux forces opposées.'
        },
        {
          name: 'Décomposition sur plan incliné rugueux',
          formula: 'R = R_N + f',
          note: 'R_N normale au plan, f force de frottement parallèle au plan.'
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Le dictionnaire posé sur la table du professeur",
        statement: "Un dictionnaire de masse m = 500 g est posé en équilibre sur une table horizontale. L'intensité de la pesanteur vaut g = 10 N/kg. Citer les deux forces s'exerçant sur le dictionnaire, calculer leurs valeurs respectives et déterminer la longueur de leur représentation à l'échelle 1 cm pour 2,5 N.",
        methodSteps: [
          "Étape 1 : Identifier le système et faire le bilan des forces : le système est le dictionnaire. Les forces extérieures sont le poids P (action de la Terre) et la réaction R (action de la table).",
          "Étape 2 : Convertir la masse en kilogrammes : m = 500 g = 0,5 kg.",
          "Étape 3 : Calculer la valeur du poids : P = m × g = 0,5 kg × 10 N/kg = 5 N.",
          "Étape 4 : Appliquer la condition d'équilibre : P + R = 0, d'où R = P = 5 N.",
          "Étape 5 : Déterminer la longueur des vecteurs : à l'échelle 1 cm pour 2,5 N, la longueur vaut 5 / 2,5 = 2 cm."
        ],
        conclusion: "Les deux forces sont le poids P = 5 N et la réaction R = 5 N. Elles sont représentées par deux flèches verticales opposées de 2 cm chacune."
      },
      exercises: [
        {
          id: 'seconde_a_physique_ch2_p2_ex1',
          type: 'mcq',
          prompt: "Un paquet de sucre de masse m = 1 kg est posé sur une table horizontale (g = 10 N/kg). Quelle est la valeur de la réaction R exercée par la table ?",
          options: ['10 N', '1 N', '0,1 N', '100 N'],
          correctAnswerIndex: 0,
          explanation: "P = m × g = 1 × 10 = 10 N. À l'équilibre P + R = 0, d'où R = P = 10 N."
        },
        {
          id: 'seconde_a_physique_ch2_p2_ex2',
          type: 'mcq',
          prompt: "Une petite sphère de masse m = 100 g est suspendue immobile à un fil (g = 10 N/kg). Quelle est l'intensité de la tension T du fil ?",
          options: ['1 N', '10 N', '0,1 N', '100 N'],
          correctAnswerIndex: 0,
          explanation: "m = 100 g = 0,1 kg. P = m × g = 0,1 × 10 = 1 N. À l'équilibre, T = P = 1 N."
        },
        {
          id: 'seconde_a_physique_ch2_p2_ex3',
          type: 'mcq',
          prompt: "Sur un plan incliné rugueux, en quelles composantes se décompose la réaction R du support ?",
          options: [
            "Une réaction normale R_N perpendiculaire au plan et une force de frottement f parallèle au plan",
            "Deux forces verticales identiques",
            "Le poids et la poussée d'Archimède",
            "Une tension et un champ magnétique"
          ],
          correctAnswerIndex: 0,
          explanation: "La réaction du support rugueux se décompose en une composante normale R_N (empêchant l'enfoncement) et une force de frottement tangentielle f (s'opposant au glissement) : R = R_N + f."
        },
        {
          id: 'seconde_a_physique_ch2_p2_ex4',
          type: 'mcq',
          prompt: "Un solide peut-il rester en équilibre sur un plan incliné parfaitement lisse sans aucun frottement ?",
          options: [
            "Non, il glisse obligatoirement vers le bas",
            "Oui, s'il est très lourd",
            "Oui, car la réaction annule toujours le poids",
            "Oui, si l'angle d'inclinaison est supérieur à 60 degrés"
          ],
          correctAnswerIndex: 0,
          explanation: "Sur un plan parfaitement lisse, la réaction R est strictement perpendiculaire au plan : elle ne peut pas être alignée avec le poids P qui est vertical. L'équilibre est impossible et le solide glisse."
        },
        {
          id: 'seconde_a_physique_ch2_p2_ex5',
          type: 'mcq',
          prompt: "Un bloc de polystyrène de masse m = 150 g flotte en équilibre à la surface de l'eau (g = 10 N/kg). Quelle est la valeur de la poussée d'Archimède P_A ?",
          options: ['1,5 N', '150 N', '0,15 N', '15 N'],
          correctAnswerIndex: 0,
          explanation: "m = 150 g = 0,15 kg. P = 0,15 × 10 = 1,5 N. À l'équilibre du corps flottant : P_A = P = 1,5 N."
        },
        {
          id: 'seconde_a_physique_ch2_p2_ex6',
          type: 'mcq',
          prompt: "Où s'applique la poussée d'Archimède P_A exercée par l'eau sur un corps immergé ?",
          options: [
            "Au centre de poussée (centre de gravité de la partie immergée)",
            "Au centre de la Terre",
            "Au fond du récipient",
            "À la surface de l'air libre"
          ],
          correctAnswerIndex: 0,
          explanation: "La poussée d'Archimède s'applique au centre de poussée, qui coïncide avec le centre de gravité du volume de fluide déplacé."
        },
        {
          id: 'seconde_a_physique_ch2_p2_ex7',
          type: 'mcq',
          prompt: "Où est appliqué le poids P d'un corps homogène ?",
          options: [
            "Au centre de gravité G du corps",
            "Au point de contact extérieur",
            "Au sommet supérieur de l'objet",
            "À la base inférieure de l'objet"
          ],
          correctAnswerIndex: 0,
          explanation: "Le poids est une force répartie dont la résultante s'applique en un point unique appelé centre de gravité (G) du corps."
        },
        {
          id: 'seconde_a_physique_ch2_p2_ex8',
          type: 'mcq',
          prompt: "Quelle est la direction et le sens de la tension d'un fil soutenant une boule suspendue ?",
          options: [
            "Direction du fil, sens dirigé vers le point de suspension (vers le haut)",
            "Direction horizontale, vers la droite",
            "Direction perpendiculaire au fil",
            "Direction du fil, sens dirigé vers le bas"
          ],
          correctAnswerIndex: 0,
          explanation: "La tension du fil tire toujours le mobile le long de la ligne du fil en direction de son point d'attache (vers le haut)."
        }
      ]
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 3/3 : Les différents types d'équilibre (Stable, Instable, Indifférent)
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_physique_ch2_p3',
      order: 3,
      title: "Les différents types d'équilibre : stable, instable et indifférent",
      summary:
        "Définition et critères des trois états d'équilibre mécanique : équilibre stable (retour après oscillations), équilibre instable (éloignement et basculement) et équilibre indifférent (maintien du nouvel état).",
      conceptExplanation: `Tous les équilibres ne réagissent pas de la même façon lorsqu'on leur applique une légère perturbation. En physique, on classe l'équilibre d'un solide en trois catégories fondamentales.

1. L'équilibre stable :
Un équilibre est dit stable si, lorsqu'on écarte très légèrement le solide de sa position d'équilibre initiale et qu'on le lâche, il y revient spontanément après avoir effectué quelques oscillations.
Exemples concrets :
- Une règle suspendue par un clou traversant son extrémité supérieure (située au-dessus de son centre de gravité G).
- Une bille placée au creux d'un bol ou d'une cuvette hémisphérique : écartée vers le bord, elle redescend et revient se stabiliser au fond.
Explication mécanique : Lors d'un léger déplacement, les droites d'action des deux forces s'écartent l'une de l'autre de manière à créer un couple de rappel qui ramène le solide vers sa position d'équilibre.

2. L'équilibre instable :
Un équilibre est dit instable si, lorsqu'on écarte très légèrement le solide de sa position d'équilibre, il s'en éloigne de plus en plus et bascule sans jamais y revenir de lui-même.
Exemples concrets :
- Une règle maintenue verticalement en équilibre sur le bout d'un doigt (point d'appui situé au-dessous du centre de gravité G).
- Une personne portant un seau d'eau lourd sur la tête sans le tenir avec ses mains : à la moindre inclinaison, le seau bascule et tombe.
- Une bille placée en équilibre précaire au sommet d'un dôme sphérique.
Explication mécanique : Lors du moindre déplacement, les droites d'action des deux forces s'écartent en créant un couple moteur de basculement qui amplifie l'écart et fait chuter le solide.

3. L'équilibre indifférent :
Un équilibre est dit indifférent si, lorsqu'on écarte le solide de sa position initiale, il reste en équilibre dans sa nouvelle position sans chercher ni à revenir ni à s'éloigner davantage.
Exemples concrets :
- Une sphère ou un cylindre parfait posé sur une table plane parfaitement horizontale.
- Une roue bien équilibrée montée sur un axe horizontal passant exactement par son centre de gravité G.
Explication mécanique : Dans n'importe quelle position de roulement, le centre de gravité G reste à la même hauteur et les deux forces (poids et réaction) restent directement opposées sur la même ligne droite verticale.`,
      formulas: [
        {
          name: "Critère de l'équilibre stable",
          formula: "Écarté -> y revient après oscillations (couple de rappel)",
          note: 'Centre de gravité G situé au-dessous de l\'axe de suspension.'
        },
        {
          name: "Critère de l'équilibre instable",
          formula: "Écarté -> s'en éloigne et bascule (couple de basculement)",
          note: 'Point d\'appui situé au-dessous du centre de gravité G.'
        },
        {
          name: "Critère de l'équilibre indifférent",
          formula: 'Écarté -> reste en équilibre dans la nouvelle position',
          note: 'Exemple : sphère ou cylindre sur table horizontale.'
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Le seau d'eau sur la tête sans les mains",
        statement: "Une jeune fille porte un seau d'eau plein de masse m = 15 kg sur la tête sans le tenir avec les mains (g = 10 N/kg). Faire le bilan des forces extérieures, calculer leurs valeurs respectives et justifier rigoureusement si cet équilibre est stable, instable ou indifférent.",
        methodSteps: [
          "Étape 1 : Le système étudié est le seau d'eau. Les forces extérieures sont le poids P appliqué au centre de gravité G et la réaction R de la tête appliquée au contact O.",
          "Étape 2 : Calcul des valeurs à l'équilibre : P = m × g = 15 kg × 10 N/kg = 150 N. À l'équilibre, R = P = 150 N.",
          "Étape 3 : Analyser la stabilité : le point d'appui O sur la tête est situé en bas, au-dessous du centre de gravité G du seau.",
          "Étape 4 : Si la tête s'incline d'un millimètre, les lignes d'action de P et de R ne se croisent plus pour rappeler le seau : elles créent un couple de basculement qui accélère la chute du seau."
        ],
        conclusion: "L'équilibre du seau sur la tête est instable. La moindre perturbation entraîne la chute du solide s'il n'est pas retenu par les mains."
      },
      exercises: [
        {
          id: 'seconde_a_physique_ch2_p3_ex1',
          type: 'mcq',
          prompt: "Comment qualifie-t-on l'équilibre d'un solide qui, légèrement écarté de sa position, y revient spontanément après plusieurs oscillations ?",
          options: ['Équilibre stable', 'Équilibre instable', 'Équilibre indifférent', 'Équilibre dynamique'],
          correctAnswerIndex: 0,
          explanation: "Par définition, un équilibre est stable lorsque le système retourne de lui-même à sa position initiale après une petite perturbation."
        },
        {
          id: 'seconde_a_physique_ch2_p3_ex2',
          type: 'mcq',
          prompt: "Une règle est suspendue librement à un clou par son extrémité supérieure. Quel type d'équilibre présente cette règle ?",
          options: ['Équilibre stable', 'Équilibre instable', 'Équilibre indifférent', 'Équilibre nul'],
          correctAnswerIndex: 0,
          explanation: "Le point de suspension étant situé au-dessus du centre de gravité G, si on écarte la règle, son poids crée un couple de rappel qui la ramène à la verticale : l'équilibre est stable."
        },
        {
          id: 'seconde_a_physique_ch2_p3_ex3',
          type: 'mcq',
          prompt: "Une règle est posée verticalement en équilibre sur le doigt d'un élève. Quel type d'équilibre présente cette situation ?",
          options: ['Équilibre instable', 'Équilibre stable', 'Équilibre indifférent', 'Équilibre perpétuel'],
          correctAnswerIndex: 0,
          explanation: "Le point d'appui étant situé sous le centre de gravité, la moindre déviation fait basculer la règle : l'équilibre est instable."
        },
        {
          id: 'seconde_a_physique_ch2_p3_ex4',
          type: 'mcq',
          prompt: "Une bille est posée sur une table plane parfaitement horizontale. Lorsqu'on la déplace un peu, elle s'arrête et reste en équilibre. Quel est ce type d'équilibre ?",
          options: ['Équilibre indifférent', 'Équilibre stable', 'Équilibre instable', 'Déséquilibre total'],
          correctAnswerIndex: 0,
          explanation: "La bille conserve son équilibre dans n'importe quelle nouvelle position sur le plan horizontal : l'équilibre est dit indifférent."
        },
        {
          id: 'seconde_a_physique_ch2_p3_ex5',
          type: 'mcq',
          prompt: "Pourquoi l'équilibre d'une personne portant une charge sur la tête sans les mains est-il classé comme instable ?",
          options: [
            "Parce que le moindre écart engendre un basculement qui fait tomber la charge",
            "Parce que la charge s'envole vers le haut",
            "Parce que la réaction de la tête est nulle",
            "Parce que le poids disparaît à chaque pas"
          ],
          correctAnswerIndex: 0,
          explanation: "C'est un équilibre instable typique : le centre de gravité de la charge est situé au-dessus du point d'appui, provoquant un basculement dès qu'une déviation se produit."
        },
        {
          id: 'seconde_a_physique_ch2_p3_ex6',
          type: 'mcq',
          prompt: "Une bille se trouve tout au fond d'une coupe hémisphérique. Quel est son type d'équilibre ?",
          options: ['Équilibre stable', 'Équilibre instable', 'Équilibre indifférent', 'Équilibre instable oscillatoire'],
          correctAnswerIndex: 0,
          explanation: "Écartée du fond, la bille remonte la paroi puis redescend sous l'effet de son poids pour revenir au fond : l'équilibre est stable."
        },
        {
          id: 'seconde_a_physique_ch2_p3_ex7',
          type: 'mcq',
          prompt: "Une bille se trouve en équilibre précaire au sommet d'une sphère bombée. Quel est son type d'équilibre ?",
          options: ['Équilibre instable', 'Équilibre stable', 'Équilibre indifférent', 'Équilibre élastique'],
          correctAnswerIndex: 0,
          explanation: "Dès qu'on pousse la bille au sommet d'une colline ou sphère bombée, elle dévale la pente sans revenir : l'équilibre est instable."
        },
        {
          id: 'seconde_a_physique_ch2_p3_ex8',
          type: 'mcq',
          prompt: "Dans le cas d'un solide suspendu à un axe, quelle condition géométrique garantit un équilibre stable ?",
          options: [
            "Le centre de gravité G doit être situé au-dessous de l'axe de suspension",
            "Le centre de gravité G doit être situé au-dessus de l'axe",
            "L'axe doit être vertical",
            "Le solide doit avoir une forme sphérique"
          ],
          correctAnswerIndex: 0,
          explanation: "Lorsque le centre de gravité G est au-dessous de l'axe de suspension, la force de gravité exerce toujours une action de rappel vers la position verticale d'équilibre stable."
        }
      ]
    }
  ]
};
