import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « PC 1ère CD P4,3 : Énergie potentielle » (leçon 4 en 1re C, 3 en 1re D).
// Fichier généré (scratchpad build_1re_pc_p4_p6.mjs) : modifier le générateur plutôt que ce fichier.
export const PHYSIQUE_1RE_CD_P4_ENERGIE_POTENTIELLE: CurriculumChapter = {
  "id": "premiere_c_physique_p4_energie_potentielle",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 4,
  "title": "Leçon 4 : Énergie potentielle",
  "summary": "Énergie potentielle de pesanteur Ep = mg(z − z₀) et choix de la référence, variation ΔEp = −W(P), applications (pompe, pendule) et énergie potentielle élastique ½kx² (1re C). Leçon 4 en 1re C, leçon 3 en 1re D.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "PC1ère CD_P4,3 Energie potentielle.pdf",
  "points": [
    {
      "id": "premiere_c_physique_p4_energie_potentielle_p01",
      "order": 1,
      "title": "Énergie potentielle de pesanteur et état de référence",
      "summary": "Définir l’énergie potentielle de pesanteur, écrire Ep = mgz + C puis Ep = mg(z − z₀) selon la référence choisie.",
      "conceptExplanation": "Situation : sur la côte qui mène au lycée, un camion chargé de billes de bois ne peut plus monter ; il redescend de plus en plus vite. Ce qu’il « avait en réserve » du fait de sa hauteur, c’est son énergie potentielle de pesanteur.\n- Définition : l’énergie potentielle de pesanteur d’un solide est l’énergie qu’il possède du fait de sa position par rapport à la Terre.\n- Expression : $E_p(z) = mgz + C$, où $C$ est une constante arbitraire, $m$ la masse (kg), $g$ l’intensité de la pesanteur (N·kg⁻¹) et $z$ l’altitude du centre d’inertie sur un axe vertical orienté vers le haut (m).\n- Position de référence : c’est la position où l’on décide que $E_p = 0$ ; sa cote est $z_0$. Alors $C = -mgz_0$ et $E_p = mg(z - z_0)$.\n- Signe : si $z > z_0$, $E_p > 0$ ; si $z < z_0$, $E_p < 0$.\n- Unité : le joule (J).",
      "keyRule": "Ep = mg(z − z₀) : choisir d’abord la référence z₀ (où Ep = 0), axe vertical vers le haut, altitudes en mètres et masse en kilogrammes.",
      "formulas": [
        {
          "name": "Énergie potentielle de pesanteur",
          "formula": "E_p = mg(z - z_0)",
          "note": "m en kg, g en N·kg⁻¹, z et z₀ en m, Ep en J"
        }
      ],
      "workedExample": {
        "title": "Activité d’application 1 : un objet lancé vers le haut",
        "statement": "Un objet de masse $m = 500\\,\\mathrm{g}$ atteint un point $M$ d’altitude $z = 20\\,\\mathrm{m}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Calculer son énergie potentielle en $M$ par rapport à $M$, au sol, puis au fond d’un puits de profondeur $10\\,\\mathrm{m}$.",
        "methodSteps": [
          "Convertir la masse : m = 500 g = 0,5 kg.",
          "Référence en M : z = z₀, donc Ep = 0 J.",
          "Référence au sol (z₀ = 0) : Ep = 0,5 × 10 × 20 = 100 J.",
          "Référence au fond du puits (z₀ = −10 m) : Ep = 0,5 × 10 × (20 + 10) = 150 J."
        ],
        "conclusion": "La valeur de Ep dépend de la référence choisie : 0 J, 100 J ou 150 J pour la même position."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Définition",
          "stepTheme": "Énergie de position",
          "stepTitle": "Qu’est-ce que l’énergie potentielle de pesanteur ?",
          "paragraphText": "L’**énergie potentielle de pesanteur** d’un solide est l’énergie qu’il possède du fait de sa **position par rapport à la Terre**. Un camion chargé arrêté en haut d’une côte en possède : s’il se met à descendre, cette énergie se transforme en vitesse.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p01_q1",
            "type": "mcq",
            "prompt": "Un camion remorque chargé de billes de bois est immobile en haut d’une côte. Quelle énergie possède-t-il du fait de sa position par rapport à la Terre ?",
            "options": [
              "De l’énergie potentielle de pesanteur",
              "De l’énergie cinétique, car il est lourd",
              "Aucune énergie, car il est immobile",
              "De l’énergie électrique stockée dans sa charge"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Immobile, il n’a pas d’énergie cinétique ($v = 0$), mais il possède une énergie potentielle de pesanteur liée à son altitude."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "Expression",
          "stepTheme": "Ep = mgz + C",
          "stepTitle": "D’où vient l’expression Ep = mgz + C ?",
          "paragraphText": "Quand un solide passe de l’altitude $z_1$ à l’altitude $z_2$ (axe vertical orienté vers le haut), le travail de son poids vaut $W_{12}(\\vec{P}) = mgz_1 - mgz_2$. On l’écrit comme la différence des valeurs d’une fonction : $E_p(z) = mgz + C$, où $C$ est une constante arbitraire.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p01_q2",
            "type": "mcq",
            "prompt": "Un solide de masse $m$ passe de l’altitude $z_1$ à l’altitude $z_2$ (axe $Oz$ vers le haut). Le travail de son poids est $W_{12}(\\vec{P}) = mg(z_1 - z_2)$. Quelle fonction $E_p(z)$ vérifie $W_{12}(\\vec{P}) = E_p(z_1) - E_p(z_2)$ ?",
            "options": [
              "$E_p(z) = mgz + C$",
              "$E_p(z) = -mgz + C$",
              "$E_p(z) = \\frac{1}{2}mz^2$",
              "$E_p(z) = \\frac{mg}{z}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_p(z_1) - E_p(z_2) = (mgz_1 + C) - (mgz_2 + C) = mg(z_1 - z_2)$ : c’est bien le travail du poids."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Référence",
          "stepTheme": "Ep = 0 en z₀",
          "stepTitle": "Choisir la position de référence",
          "paragraphText": "La **position de référence** est la position où l’on décide que $E_p = 0$ ; sa cote est notée $z_0$. Alors $mgz_0 + C = 0$, donc $C = -mgz_0$ et $E_p(z) = mg(z - z_0)$.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p01_q3",
            "type": "mcq",
            "prompt": "On prend comme référence des énergies potentielles le niveau d’une table, de cote $z_0 = 2\\,\\mathrm{m}$ (axe vertical vers le haut). Quelle est l’expression de l’énergie potentielle de pesanteur d’un solide de masse $m$ situé à l’altitude $z$ ?",
            "options": [
              "$E_p = mg(z - 2)$",
              "$E_p = mg(z + 2)$",
              "$E_p = mgz$",
              "$E_p = mg(2 - z)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En $z_0 = 2\\,\\mathrm{m}$, $E_p = 0$ : $C = -2mg$, d’où $E_p = mg(z - 2)$."
          },
          "visualSchema": {
            "type": "geometry_svg",
            "title": "Une même position, trois références",
            "caption": "Objet de 500 g en M (20 m au-dessus du sol), g = 10 N/kg : Ep dépend de la référence choisie.",
            "svgContent": "<svg viewBox=\"0 0 390 205\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\" font-family=\"sans-serif\">\n  <line x1=\"50\" y1=\"195\" x2=\"50\" y2=\"22\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <polygon points=\"50,12 45,23 55,23\" fill=\"#1e293b\"/>\n  <text x=\"58\" y=\"22\" font-size=\"11\" fill=\"#1e293b\">z (m)</text>\n  <line x1=\"44\" y1=\"60\" x2=\"56\" y2=\"60\" stroke=\"#1e293b\"/><text x=\"20\" y=\"64\" font-size=\"10\" fill=\"#1e293b\">20</text>\n  <line x1=\"44\" y1=\"140\" x2=\"56\" y2=\"140\" stroke=\"#1e293b\"/><text x=\"30\" y=\"144\" font-size=\"10\" fill=\"#1e293b\">0</text>\n  <line x1=\"44\" y1=\"180\" x2=\"56\" y2=\"180\" stroke=\"#1e293b\"/><text x=\"16\" y=\"184\" font-size=\"10\" fill=\"#1e293b\">−10</text>\n  <line x1=\"70\" y1=\"140\" x2=\"150\" y2=\"140\" stroke=\"#78350f\" stroke-width=\"3\"/>\n  <line x1=\"190\" y1=\"140\" x2=\"230\" y2=\"140\" stroke=\"#78350f\" stroke-width=\"3\"/>\n  <polyline points=\"150,140 150,180 190,180 190,140\" fill=\"#e0f2fe\" stroke=\"#78350f\" stroke-width=\"2\"/>\n  <text x=\"76\" y=\"156\" font-size=\"10\" fill=\"#78350f\">Sol</text>\n  <text x=\"152\" y=\"196\" font-size=\"10\" fill=\"#78350f\">Puits</text>\n  <line x1=\"50\" y1=\"60\" x2=\"103\" y2=\"60\" stroke=\"#64748b\" stroke-dasharray=\"3 3\"/>\n  <line x1=\"50\" y1=\"180\" x2=\"150\" y2=\"180\" stroke=\"#64748b\" stroke-dasharray=\"3 3\"/>\n  <circle cx=\"110\" cy=\"60\" r=\"7\" fill=\"#2563eb\"/>\n  <text x=\"121\" y=\"64\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\">M</text>\n  <text x=\"240\" y=\"64\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1d4ed8\">Réf. en M : Ep = 0 J</text>\n  <text x=\"240\" y=\"144\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#047857\">Réf. sol : Ep = 100 J</text>\n  <text x=\"240\" y=\"184\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#b45309\">Réf. fond : Ep = 150 J</text>\n</svg>"
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Calcul",
          "stepTheme": "Unités SI",
          "stepTitle": "Calculer Ep par rapport au sol",
          "paragraphText": "Pour calculer $E_p = mg(z - z_0)$ : masse en **kilogrammes**, $g$ en N·kg⁻¹, altitudes en **mètres**. Par exemple, 500 g = 0,5 kg.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p01_q4",
            "type": "mcq",
            "prompt": "Un objet de masse $m = 500\\,\\mathrm{g}$ est lancé vers le haut et atteint un point $M$ d’altitude $z = 20\\,\\mathrm{m}$ au-dessus du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est son énergie potentielle de pesanteur en $M$, la référence étant le sol ?",
            "options": [
              "100 J",
              "100 000 J",
              "10 J",
              "50 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_p = mg(z - z_0) = 0{,}5 \\times 10 \\times 20 = 100\\,\\mathrm{J}$ (attention : 500 g = 0,5 kg)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Autre référence",
          "stepTheme": "Fond d’un puits",
          "stepTitle": "Changer de référence change la valeur de Ep",
          "paragraphText": "Si la référence est le fond d’un puits de profondeur 10 m, sa cote est $z_0 = -10\\,\\mathrm{m}$ (sous le sol). Le point $M$, à 20 m au-dessus du sol, est alors 30 m au-dessus de la référence.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p01_q5",
            "type": "mcq",
            "prompt": "Un objet de masse $m = 500\\,\\mathrm{g}$ est en $M$, à $z = 20\\,\\mathrm{m}$ au-dessus du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). On prend pour référence le fond d’un puits de profondeur $10\\,\\mathrm{m}$ ($z_0 = -10\\,\\mathrm{m}$). Que vaut son énergie potentielle de pesanteur en $M$ ?",
            "options": [
              "150 J",
              "100 J",
              "50 J",
              "200 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_p = 0{,}5 \\times 10 \\times (20 - (-10)) = 0{,}5 \\times 10 \\times 30 = 150\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Signe",
          "stepTheme": "Ep négative",
          "stepTitle": "Sous la référence, Ep est négative",
          "paragraphText": "Si le solide est **au-dessous** de la référence ($z < z_0$), alors $E_p = mg(z - z_0) < 0$. Une énergie potentielle négative n’est pas une erreur : elle signifie seulement « plus bas que la référence ».",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p01_q6",
            "type": "mcq",
            "prompt": "Un plongeur de masse $100\\,\\mathrm{kg}$ se trouve à $50\\,\\mathrm{m}$ de profondeur. L’axe $Oz$ est orienté vers le haut et l’énergie potentielle de pesanteur est nulle au niveau de la mer ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Que vaut son énergie potentielle de pesanteur ?",
            "options": [
              "$-50\\,\\mathrm{kJ}$",
              "$+50\\,\\mathrm{kJ}$",
              "$50\\,\\mathrm{J}$",
              "$0\\,\\mathrm{J}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$z = -50\\,\\mathrm{m}$ et $z_0 = 0$ : $E_p = 100 \\times 10 \\times (-50) = -50\\,000\\,\\mathrm{J} = -50\\,\\mathrm{kJ}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Référence en M",
          "stepTheme": "Ep = 0 à la référence",
          "stepTitle": "Au niveau de la référence, Ep est nulle",
          "paragraphText": "Si l’on choisit la position même du solide comme référence, son énergie potentielle y est **nulle**, quelle que soit sa hauteur au-dessus du sol : une valeur de $E_p$ n’a de sens qu’avec sa référence.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p01_q7",
            "type": "mcq",
            "prompt": "Un objet de masse $m = 500\\,\\mathrm{g}$ est au point $M$, à $20\\,\\mathrm{m}$ au-dessus du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). On choisit le point $M$ lui-même comme position de référence. Que vaut son énergie potentielle de pesanteur en $M$ ?",
            "options": [
              "0 J",
              "100 J",
              "200 J",
              "−100 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En $M$, $z = z_0$ donc $E_p = mg(z - z_0) = 0\\,\\mathrm{J}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p01_q1",
          "type": "mcq",
          "prompt": "Un camion remorque chargé de billes de bois est immobile en haut d’une côte. Quelle énergie possède-t-il du fait de sa position par rapport à la Terre ?",
          "options": [
            "De l’énergie potentielle de pesanteur",
            "De l’énergie cinétique, car il est lourd",
            "Aucune énergie, car il est immobile",
            "De l’énergie électrique stockée dans sa charge"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Immobile, il n’a pas d’énergie cinétique ($v = 0$), mais il possède une énergie potentielle de pesanteur liée à son altitude."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p01_q2",
          "type": "mcq",
          "prompt": "Un solide de masse $m$ passe de l’altitude $z_1$ à l’altitude $z_2$ (axe $Oz$ vers le haut). Le travail de son poids est $W_{12}(\\vec{P}) = mg(z_1 - z_2)$. Quelle fonction $E_p(z)$ vérifie $W_{12}(\\vec{P}) = E_p(z_1) - E_p(z_2)$ ?",
          "options": [
            "$E_p(z) = mgz + C$",
            "$E_p(z) = -mgz + C$",
            "$E_p(z) = \\frac{1}{2}mz^2$",
            "$E_p(z) = \\frac{mg}{z}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_p(z_1) - E_p(z_2) = (mgz_1 + C) - (mgz_2 + C) = mg(z_1 - z_2)$ : c’est bien le travail du poids."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p01_q3",
          "type": "mcq",
          "prompt": "On prend comme référence des énergies potentielles le niveau d’une table, de cote $z_0 = 2\\,\\mathrm{m}$ (axe vertical vers le haut). Quelle est l’expression de l’énergie potentielle de pesanteur d’un solide de masse $m$ situé à l’altitude $z$ ?",
          "options": [
            "$E_p = mg(z - 2)$",
            "$E_p = mg(z + 2)$",
            "$E_p = mgz$",
            "$E_p = mg(2 - z)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En $z_0 = 2\\,\\mathrm{m}$, $E_p = 0$ : $C = -2mg$, d’où $E_p = mg(z - 2)$."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p01_q4",
          "type": "mcq",
          "prompt": "Un objet de masse $m = 500\\,\\mathrm{g}$ est lancé vers le haut et atteint un point $M$ d’altitude $z = 20\\,\\mathrm{m}$ au-dessus du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est son énergie potentielle de pesanteur en $M$, la référence étant le sol ?",
          "options": [
            "100 J",
            "100 000 J",
            "10 J",
            "50 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_p = mg(z - z_0) = 0{,}5 \\times 10 \\times 20 = 100\\,\\mathrm{J}$ (attention : 500 g = 0,5 kg)."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p01_q5",
          "type": "mcq",
          "prompt": "Un objet de masse $m = 500\\,\\mathrm{g}$ est en $M$, à $z = 20\\,\\mathrm{m}$ au-dessus du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). On prend pour référence le fond d’un puits de profondeur $10\\,\\mathrm{m}$ ($z_0 = -10\\,\\mathrm{m}$). Que vaut son énergie potentielle de pesanteur en $M$ ?",
          "options": [
            "150 J",
            "100 J",
            "50 J",
            "200 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_p = 0{,}5 \\times 10 \\times (20 - (-10)) = 0{,}5 \\times 10 \\times 30 = 150\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p01_q6",
          "type": "mcq",
          "prompt": "Un plongeur de masse $100\\,\\mathrm{kg}$ se trouve à $50\\,\\mathrm{m}$ de profondeur. L’axe $Oz$ est orienté vers le haut et l’énergie potentielle de pesanteur est nulle au niveau de la mer ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Que vaut son énergie potentielle de pesanteur ?",
          "options": [
            "$-50\\,\\mathrm{kJ}$",
            "$+50\\,\\mathrm{kJ}$",
            "$50\\,\\mathrm{J}$",
            "$0\\,\\mathrm{J}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$z = -50\\,\\mathrm{m}$ et $z_0 = 0$ : $E_p = 100 \\times 10 \\times (-50) = -50\\,000\\,\\mathrm{J} = -50\\,\\mathrm{kJ}$."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p01_q7",
          "type": "mcq",
          "prompt": "Un objet de masse $m = 500\\,\\mathrm{g}$ est au point $M$, à $20\\,\\mathrm{m}$ au-dessus du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). On choisit le point $M$ lui-même comme position de référence. Que vaut son énergie potentielle de pesanteur en $M$ ?",
          "options": [
            "0 J",
            "100 J",
            "200 J",
            "−100 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En $M$, $z = z_0$ donc $E_p = mg(z - z_0) = 0\\,\\mathrm{J}$."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p4_energie_potentielle_p02",
      "order": 2,
      "title": "Variation de l’énergie potentielle et travail du poids",
      "summary": "Calculer ΔEp = mgΔz, montrer que ΔEp = −W(P) et que ΔEp ne dépend pas de la référence.",
      "conceptExplanation": "- Variation : entre deux positions d’altitudes $z_1$ et $z_2$, $\\Delta E_p = E_{p2} - E_{p1} = mg(z_2 - z_1) = mg\\,\\Delta z$.\n- Lien avec le travail du poids : $\\Delta E_p = -W(\\vec{P})$. Quand le solide monte, $W(\\vec{P}) < 0$ et $E_p$ augmente ; quand il descend, $W(\\vec{P}) > 0$ et $E_p$ diminue.\n- Indépendance : la constante $C$ disparaît dans la différence, donc $\\Delta E_p$ ne dépend pas de la position de référence choisie.\n- Plan incliné : un déplacement $L$ le long d’une pente d’angle $\\alpha$ fait varier l’altitude de $\\Delta z = L\\sin\\alpha$.",
      "keyRule": "ΔEp = mgΔz = −W(P) : monter fait augmenter Ep, descendre la fait diminuer ; ΔEp ne dépend pas de la référence.",
      "formulas": [
        {
          "name": "Variation d’énergie potentielle de pesanteur",
          "formula": "\\Delta E_p = mg(z_2 - z_1) = -W_{12}(\\vec{P})",
          "note": "Δz > 0 quand le solide monte (axe Oz vers le haut)"
        }
      ],
      "workedExample": {
        "title": "Situation d’évaluation : palet lancé sur un plan incliné",
        "statement": "Un palet de masse $m = 500\\,\\mathrm{g}$ est lancé vers le haut sur un plan incliné de $\\alpha = 15^\\circ$ ; il passe de $M_0$ à $M_1$ avec $M_0M_1 = L = 1{,}5\\,\\mathrm{m}$ ($g = 9{,}8\\,\\mathrm{N\\cdot kg^{-1}}$, référence : niveau de $M_0$, pas de frottements). Comparer $\\Delta E_p$ et la somme des travaux.",
        "methodSteps": [
          "Ep(M₀) = mg(z₀ − z₀) = 0 J.",
          "Ep(M₁) = mg(z₁ − z₀) = mgL sin α = 0,5 × 9,8 × 1,5 × sin 15° ≈ 1,9 J, donc ΔEp ≈ 1,9 J.",
          "La réaction du plan est perpendiculaire au déplacement : son travail est nul.",
          "Somme des travaux : W(P) = mg(z₀ − z₁) ≈ −1,9 J."
        ],
        "conclusion": "ΔEp = −∑W : la variation d’énergie potentielle est l’opposé du travail du poids."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepBadge": "ΔEp = mgΔz",
          "stepTheme": "Variation",
          "stepTitle": "Calculer une variation d’énergie potentielle",
          "paragraphText": "Entre une position 1 et une position 2, $\\Delta E_p = E_{p2} - E_{p1} = mg(z_2 - z_1) = mg\\,\\Delta z$. Si le solide monte, $\\Delta z > 0$ et $E_p$ augmente.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p02_q1",
            "type": "mcq",
            "prompt": "Un sac de ciment de masse $m = 50\\,\\mathrm{kg}$ est monté du sol jusqu’au deuxième étage d’un chantier, $6\\,\\mathrm{m}$ plus haut ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est la variation de son énergie potentielle de pesanteur ?",
            "options": [
              "+3 000 J",
              "−3 000 J",
              "+300 J",
              "+30 000 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\Delta E_p = mg\\,\\Delta z = 50 \\times 10 \\times 6 = 3\\,000\\,\\mathrm{J}$ : positive car le sac monte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "ΔEp = −W(P)",
          "stepTheme": "Travail du poids",
          "stepTitle": "Variation de Ep et travail du poids",
          "paragraphText": "Le travail du poids est l’opposé de la variation d’énergie potentielle : $\\Delta E_p = -W(\\vec{P})$. Un travail du poids **résistant** (montée) correspond à une énergie potentielle qui **augmente**.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p02_q2",
            "type": "mcq",
            "prompt": "Pendant la montée d’un ballon, le travail de son poids vaut $W(\\vec{P}) = -100\\,\\mathrm{J}$. Quelle est la variation de son énergie potentielle de pesanteur ?",
            "options": [
              "$\\Delta E_p = +100\\,\\mathrm{J}$",
              "$\\Delta E_p = -100\\,\\mathrm{J}$",
              "$\\Delta E_p = 0\\,\\mathrm{J}$",
              "$\\Delta E_p = -200\\,\\mathrm{J}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\Delta E_p = -W(\\vec{P}) = -(-100) = +100\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Indépendance",
          "stepTheme": "Référence quelconque",
          "stepTitle": "ΔEp ne dépend pas de la référence",
          "paragraphText": "Dans $\\Delta E_p = (mgz_2 + C) - (mgz_1 + C)$, la constante $C$ s’élimine : la **variation** d’énergie potentielle est la même quelle que soit la référence, alors que la **valeur** de $E_p$ en dépend.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p02_q3",
            "type": "mcq",
            "prompt": "Un objet de masse $500\\,\\mathrm{g}$ monte du sol ($z = 0$) jusqu’au point $M$ ($z = 20\\,\\mathrm{m}$), avec $g = 10\\,\\mathrm{N\\cdot kg^{-1}}$. On calcule $\\Delta E_p$ une fois avec la référence au sol, une fois avec la référence au fond d’un puits de profondeur $10\\,\\mathrm{m}$. Quels résultats obtient-on ?",
            "options": [
              "100 J dans les deux cas",
              "100 J puis 150 J",
              "0 J puis 100 J",
              "100 J puis 50 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Référence au sol : 100 − 0 = 100 J. Référence au fond du puits : 150 − 50 = 100 J. La variation ne dépend pas de la référence."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Plan incliné",
          "stepTheme": "Δz = L sin α",
          "stepTitle": "Altitude gagnée sur un plan incliné",
          "paragraphText": "Sur un plan incliné d’angle $\\alpha$ avec l’horizontale, un déplacement de longueur $L$ le long de la pente fait gagner l’altitude $\\Delta z = L\\sin\\alpha$ (et non $L\\cos\\alpha$, qui est le déplacement horizontal).",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p02_q4",
            "type": "mcq",
            "prompt": "Un palet de masse $m = 500\\,\\mathrm{g}$ est lancé vers le haut le long d’un plan incliné d’un angle $\\alpha = 15^\\circ$ sur l’horizontale. Il passe de $M_0$ à $M_1$ avec $M_0M_1 = L = 1{,}5\\,\\mathrm{m}$ ($g = 9{,}8\\,\\mathrm{N\\cdot kg^{-1}}$). Le niveau de $M_0$ est la référence. Que vaut l’énergie potentielle de pesanteur du palet en $M_1$ ?",
            "options": [
              "≈ 1,9 J",
              "≈ 7,1 J",
              "≈ 7,35 J",
              "≈ −1,9 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_p(M_1) = mgL\\sin\\alpha = 0{,}5 \\times 9{,}8 \\times 1{,}5 \\times \\sin 15^\\circ \\approx 1{,}9\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Somme des travaux",
          "stepTheme": "ΔEp = −∑W",
          "stepTitle": "Comparer ΔEp et la somme des travaux",
          "paragraphText": "Sans frottements, le palet ne subit que son poids $\\vec{P}$ et la réaction $\\vec{R}$ du plan. $\\vec{R}$ est perpendiculaire au déplacement : son travail est nul. Donc $\\sum W = W(\\vec{P})$ et $\\Delta E_p = -\\sum W$.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p02_q5",
            "type": "mcq",
            "prompt": "Un palet de masse $500\\,\\mathrm{g}$ monte sans frottement de $M_0$ à $M_1$ le long d’un plan incliné ; il gagne une énergie potentielle de pesanteur $\\Delta E_p = 1{,}9\\,\\mathrm{J}$. Que vaut la somme des travaux des forces extérieures (poids et réaction du plan) ?",
            "options": [
              "−1,9 J",
              "+1,9 J",
              "0 J",
              "−3,8 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$W(\\vec{R}) = 0$ (réaction perpendiculaire au déplacement) et $W(\\vec{P}) = -\\Delta E_p = -1{,}9\\,\\mathrm{J}$ : $\\sum W = -1{,}9\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Randonnée",
          "stepTheme": "Mont Nimba",
          "stepTitle": "Énergie potentielle d’un randonneur au sommet",
          "paragraphText": "Lors d’un voyage d’étude, un touriste de 80 kg escalade une montagne : la 1re station est à 500 m du sol, la 2e à 850 m, le sommet à 1 500 m. Avec le sol comme référence, $E_p = mgz$ à chaque station.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p02_q6",
            "type": "mcq",
            "prompt": "Un touriste de masse $m = 80\\,\\mathrm{kg}$ escalade une montagne jusqu’au sommet, situé à $1\\,500\\,\\mathrm{m}$ au-dessus du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Le sol est la référence. Quelle est son énergie potentielle de pesanteur au sommet ?",
            "options": [
              "$1{,}2 \\times 10^{6}\\,\\mathrm{J}$",
              "$5{,}2 \\times 10^{5}\\,\\mathrm{J}$",
              "$1{,}2 \\times 10^{5}\\,\\mathrm{J}$",
              "$6{,}8 \\times 10^{5}\\,\\mathrm{J}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_p = 80 \\times 10 \\times 1\\,500 = 1\\,200\\,000\\,\\mathrm{J} = 1{,}2 \\times 10^{6}\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Nouvelle référence",
          "stepTheme": "Station sous la référence",
          "stepTitle": "Une station située sous la référence",
          "paragraphText": "Si la 2e station (850 m) devient la référence, la 1re station (500 m) est **au-dessous** : l’énergie potentielle y devient négative. La variation entre le sol et le sommet, elle, reste $1{,}2 \\times 10^{6}$ J.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p02_q7",
            "type": "mcq",
            "prompt": "Un touriste de masse $80\\,\\mathrm{kg}$ est à la première station d’une montagne, à $500\\,\\mathrm{m}$ du sol. La référence des énergies potentielles est la deuxième station, à $850\\,\\mathrm{m}$ du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Que vaut son énergie potentielle à la première station ?",
            "options": [
              "$-2{,}8 \\times 10^{5}\\,\\mathrm{J}$",
              "$+2{,}8 \\times 10^{5}\\,\\mathrm{J}$",
              "$4 \\times 10^{5}\\,\\mathrm{J}$",
              "$0\\,\\mathrm{J}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_p = 80 \\times 10 \\times (500 - 850) = -280\\,000\\,\\mathrm{J} = -2{,}8 \\times 10^{5}\\,\\mathrm{J}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p02_q1",
          "type": "mcq",
          "prompt": "Un sac de ciment de masse $m = 50\\,\\mathrm{kg}$ est monté du sol jusqu’au deuxième étage d’un chantier, $6\\,\\mathrm{m}$ plus haut ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est la variation de son énergie potentielle de pesanteur ?",
          "options": [
            "+3 000 J",
            "−3 000 J",
            "+300 J",
            "+30 000 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\Delta E_p = mg\\,\\Delta z = 50 \\times 10 \\times 6 = 3\\,000\\,\\mathrm{J}$ : positive car le sac monte."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p02_q2",
          "type": "mcq",
          "prompt": "Pendant la montée d’un ballon, le travail de son poids vaut $W(\\vec{P}) = -100\\,\\mathrm{J}$. Quelle est la variation de son énergie potentielle de pesanteur ?",
          "options": [
            "$\\Delta E_p = +100\\,\\mathrm{J}$",
            "$\\Delta E_p = -100\\,\\mathrm{J}$",
            "$\\Delta E_p = 0\\,\\mathrm{J}$",
            "$\\Delta E_p = -200\\,\\mathrm{J}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\Delta E_p = -W(\\vec{P}) = -(-100) = +100\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p02_q3",
          "type": "mcq",
          "prompt": "Un objet de masse $500\\,\\mathrm{g}$ monte du sol ($z = 0$) jusqu’au point $M$ ($z = 20\\,\\mathrm{m}$), avec $g = 10\\,\\mathrm{N\\cdot kg^{-1}}$. On calcule $\\Delta E_p$ une fois avec la référence au sol, une fois avec la référence au fond d’un puits de profondeur $10\\,\\mathrm{m}$. Quels résultats obtient-on ?",
          "options": [
            "100 J dans les deux cas",
            "100 J puis 150 J",
            "0 J puis 100 J",
            "100 J puis 50 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Référence au sol : 100 − 0 = 100 J. Référence au fond du puits : 150 − 50 = 100 J. La variation ne dépend pas de la référence."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p02_q4",
          "type": "mcq",
          "prompt": "Un palet de masse $m = 500\\,\\mathrm{g}$ est lancé vers le haut le long d’un plan incliné d’un angle $\\alpha = 15^\\circ$ sur l’horizontale. Il passe de $M_0$ à $M_1$ avec $M_0M_1 = L = 1{,}5\\,\\mathrm{m}$ ($g = 9{,}8\\,\\mathrm{N\\cdot kg^{-1}}$). Le niveau de $M_0$ est la référence. Que vaut l’énergie potentielle de pesanteur du palet en $M_1$ ?",
          "options": [
            "≈ 1,9 J",
            "≈ 7,1 J",
            "≈ 7,35 J",
            "≈ −1,9 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_p(M_1) = mgL\\sin\\alpha = 0{,}5 \\times 9{,}8 \\times 1{,}5 \\times \\sin 15^\\circ \\approx 1{,}9\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p02_q5",
          "type": "mcq",
          "prompt": "Un palet de masse $500\\,\\mathrm{g}$ monte sans frottement de $M_0$ à $M_1$ le long d’un plan incliné ; il gagne une énergie potentielle de pesanteur $\\Delta E_p = 1{,}9\\,\\mathrm{J}$. Que vaut la somme des travaux des forces extérieures (poids et réaction du plan) ?",
          "options": [
            "−1,9 J",
            "+1,9 J",
            "0 J",
            "−3,8 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$W(\\vec{R}) = 0$ (réaction perpendiculaire au déplacement) et $W(\\vec{P}) = -\\Delta E_p = -1{,}9\\,\\mathrm{J}$ : $\\sum W = -1{,}9\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p02_q6",
          "type": "mcq",
          "prompt": "Un touriste de masse $m = 80\\,\\mathrm{kg}$ escalade une montagne jusqu’au sommet, situé à $1\\,500\\,\\mathrm{m}$ au-dessus du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Le sol est la référence. Quelle est son énergie potentielle de pesanteur au sommet ?",
          "options": [
            "$1{,}2 \\times 10^{6}\\,\\mathrm{J}$",
            "$5{,}2 \\times 10^{5}\\,\\mathrm{J}$",
            "$1{,}2 \\times 10^{5}\\,\\mathrm{J}$",
            "$6{,}8 \\times 10^{5}\\,\\mathrm{J}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_p = 80 \\times 10 \\times 1\\,500 = 1\\,200\\,000\\,\\mathrm{J} = 1{,}2 \\times 10^{6}\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p02_q7",
          "type": "mcq",
          "prompt": "Un touriste de masse $80\\,\\mathrm{kg}$ est à la première station d’une montagne, à $500\\,\\mathrm{m}$ du sol. La référence des énergies potentielles est la deuxième station, à $850\\,\\mathrm{m}$ du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Que vaut son énergie potentielle à la première station ?",
          "options": [
            "$-2{,}8 \\times 10^{5}\\,\\mathrm{J}$",
            "$+2{,}8 \\times 10^{5}\\,\\mathrm{J}$",
            "$4 \\times 10^{5}\\,\\mathrm{J}$",
            "$0\\,\\mathrm{J}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_p = 80 \\times 10 \\times (500 - 850) = -280\\,000\\,\\mathrm{J} = -2{,}8 \\times 10^{5}\\,\\mathrm{J}$."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p4_energie_potentielle_p03",
      "order": 3,
      "title": "Applications : pompe à eau et pendule simple",
      "summary": "Utiliser ΔEp pour trouver la puissance minimale d’une pompe et l’énergie potentielle d’un pendule écarté.",
      "conceptExplanation": "- Pompe : pour monter une masse $m$ d’eau d’une hauteur $h$, il faut lui fournir au moins $\\Delta E_p = mgh$. Si cette énergie est fournie pendant la durée $\\Delta t$, la puissance minimale du moteur est $P_{min} = \\frac{\\Delta E_p}{\\Delta t}$.\n- Débit : 1 L d’eau a une masse d’environ 1 kg ; un débit de 6 000 L par minute correspond à 100 kg d’eau par seconde.\n- Pendule simple : une sphère suspendue à un fil de longueur $L$, écartée d’un angle $\\alpha$ de la verticale, est montée de $h = L(1 - \\cos\\alpha)$ au-dessus de sa position d’équilibre.\n- Correction du document officiel : dans l’exercice de la pompe, l’eau monte, donc $\\Delta E_p = +6 \\times 10^{3}$ J chaque seconde (et non $-6 \\times 10^{3}$ J), et la puissance minimale du moteur est 6 000 W (et non 100 W).",
      "keyRule": "Pompe : puissance minimale = ΔEp divisée par la durée. Pendule écarté d’un angle α : il est monté de h = L(1 − cos α).",
      "formulas": [
        {
          "name": "Puissance minimale d’une pompe",
          "formula": "P_{min} = \\frac{\\Delta E_p}{\\Delta t} = \\frac{mgh}{\\Delta t}",
          "note": "ΔEp en J, Δt en s, P en W"
        },
        {
          "name": "Hauteur d’un pendule écarté",
          "formula": "h = L(1 - \\cos\\alpha)",
          "note": "L longueur du fil, α angle avec la verticale"
        }
      ],
      "workedExample": {
        "title": "Exercice 2 corrigé : la pompe à eau",
        "statement": "Une pompe refoule de l’eau dans un réservoir situé $6\\,\\mathrm{m}$ plus haut avec un débit de $6\\,000\\,\\mathrm{L}$ par minute ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Calculer $\\Delta E_p$ de l’eau montée en une seconde, puis la puissance minimale du moteur.",
        "methodSteps": [
          "6 000 L par minute = 100 L par seconde, soit environ 100 kg d’eau chaque seconde.",
          "ΔEp = mgh = 100 × 10 × 6 = +6 000 J (l’eau monte : ΔEp est positive).",
          "P min = ΔEp ÷ Δt = 6 000 J ÷ 1 s = 6 000 W.",
          "Le corrigé officiel écrit −6 × 10³ J et 100 W : ces deux résultats sont faux."
        ],
        "conclusion": "Le moteur doit fournir au moins 6 kW (sans compter les pertes)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Débit",
          "stepTheme": "L par minute → kg par seconde",
          "stepTitle": "Du débit à la masse d’eau par seconde",
          "paragraphText": "Un débit de 6 000 litres par minute signifie 6 000 ÷ 60 = 100 litres chaque seconde. Comme 1 L d’eau a une masse d’environ 1 kg, la pompe monte 100 kg d’eau par seconde.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p03_q1",
            "type": "mcq",
            "prompt": "Une pompe refoule de l’eau avec un débit de $6\\,000\\,\\mathrm{L}$ par minute (1 L d’eau a une masse d’environ 1 kg). Quelle masse d’eau monte-t-elle en une seconde ?",
            "options": [
              "100 kg",
              "6 000 kg",
              "360 000 kg",
              "60 kg"
            ],
            "correctAnswerIndex": 0,
            "explanation": "6 000 L ÷ 60 s = 100 L par seconde, soit environ 100 kg d’eau."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "ΔEp de l’eau",
          "stepTheme": "Montée de 6 m",
          "stepTitle": "Énergie gagnée par l’eau en une seconde",
          "paragraphText": "L’eau est montée dans un réservoir situé 6 m plus haut : en une seconde, ses 100 kg gagnent $\\Delta E_p = mgh$.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p03_q2",
            "type": "mcq",
            "prompt": "Une pompe monte $100\\,\\mathrm{kg}$ d’eau par seconde dans un réservoir situé $6\\,\\mathrm{m}$ plus haut ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est la variation d’énergie potentielle de pesanteur de cette eau en une seconde ?",
            "options": [
              "$+6\\,000\\,\\mathrm{J}$",
              "$-6\\,000\\,\\mathrm{J}$",
              "$+600\\,\\mathrm{J}$",
              "$+100\\,\\mathrm{J}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\Delta E_p = mgh = 100 \\times 10 \\times 6 = 6\\,000\\,\\mathrm{J}$, positive car l’eau monte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Signe",
          "stepTheme": "Correction du corrigé",
          "stepTitle": "L’eau monte : ΔEp est positive",
          "paragraphText": "Le corrigé officiel de cet exercice écrit $\\Delta E_p = -6 \\times 10^{3}$ J : c’est une erreur de signe. Quand l’eau **monte**, le travail de son poids est négatif et $\\Delta E_p = -W(\\vec{P})$ est **positive**.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p03_q3",
            "type": "mcq",
            "prompt": "De l’eau est pompée vers un réservoir situé plus haut. Quels sont les signes de la variation de son énergie potentielle de pesanteur $\\Delta E_p$ et du travail de son poids $W(\\vec{P})$ ?",
            "options": [
              "$\\Delta E_p > 0$ et $W(\\vec{P}) < 0$",
              "$\\Delta E_p < 0$ et $W(\\vec{P}) > 0$",
              "$\\Delta E_p > 0$ et $W(\\vec{P}) > 0$",
              "$\\Delta E_p < 0$ et $W(\\vec{P}) < 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Montée : $W(\\vec{P}) = -mgh < 0$, donc $\\Delta E_p = -W(\\vec{P}) = +mgh > 0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Puissance",
          "stepTheme": "P = ΔEp ÷ Δt",
          "stepTitle": "Puissance minimale du moteur de la pompe",
          "paragraphText": "Le moteur doit fournir au moins l’énergie $\\Delta E_p$ pendant la durée $\\Delta t$ : $P_{min} = \\frac{\\Delta E_p}{\\Delta t}$. Le corrigé officiel annonce 100 W : c’est faux, $\\frac{6\\,000\\,\\mathrm{J}}{1\\,\\mathrm{s}} = 6\\,000\\,\\mathrm{W}$.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p03_q4",
            "type": "mcq",
            "prompt": "Le moteur d’une pompe doit fournir une énergie $\\Delta E_p = 6\\,000\\,\\mathrm{J}$ chaque seconde pour monter l’eau. Quelle est sa puissance minimale ?",
            "options": [
              "6 000 W (6 kW)",
              "100 W",
              "600 W",
              "60 W"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$P_{min} = \\frac{6\\,000\\,\\mathrm{J}}{1\\,\\mathrm{s}} = 6\\,000\\,\\mathrm{W} = 6\\,\\mathrm{kW}$ (pertes non comptées)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Pendule",
          "stepTheme": "h = L(1 − cos α)",
          "stepTitle": "De combien monte un pendule écarté ?",
          "paragraphText": "Une sphère suspendue à un fil de longueur $L$ et écartée d’un angle $\\alpha$ de la verticale est plus haute que sa position d’équilibre de $h = L - L\\cos\\alpha = L(1 - \\cos\\alpha)$.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p03_q5",
            "type": "mcq",
            "prompt": "Une sphère est suspendue à un fil de longueur $L = 90\\,\\mathrm{cm}$. On écarte le fil d’un angle $\\alpha = 30^\\circ$ par rapport à la verticale. De quelle hauteur la sphère est-elle montée par rapport à sa position d’équilibre ?",
            "options": [
              "≈ 0,12 m",
              "≈ 0,78 m",
              "0,45 m",
              "0,90 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$h = L(1 - \\cos 30^\\circ) = 0{,}9 \\times (1 - 0{,}866) \\approx 0{,}12\\,\\mathrm{m}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Ep du pendule",
          "stepTheme": "Position de départ",
          "stepTitle": "Énergie potentielle du pendule au départ",
          "paragraphText": "Avec la position d’équilibre (fil vertical) comme référence, l’énergie potentielle de la sphère écartée vaut $E_p = mgL(1 - \\cos\\alpha)$.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p03_q6",
            "type": "mcq",
            "prompt": "Une sphère de masse $m = 200\\,\\mathrm{g}$, suspendue à un fil de longueur $L = 90\\,\\mathrm{cm}$, est écartée de $\\alpha = 30^\\circ$ de la verticale ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). La référence est la position d’équilibre (fil vertical). Que vaut son énergie potentielle de pesanteur ?",
            "options": [
              "≈ 0,24 J",
              "≈ 1,56 J",
              "≈ 0,9 J",
              "≈ 2,4 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_p = 0{,}2 \\times 10 \\times 0{,}9 \\times (1 - 0{,}866) \\approx 0{,}24\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Position basse",
          "stepTheme": "Ep = 0 en bas",
          "stepTitle": "Au point le plus bas, toute l’énergie est cinétique",
          "paragraphText": "Sans frottement, l’énergie de la sphère se conserve. Au passage par la position la plus basse (la référence), $E_p = 0$ et toute l’énergie est devenue cinétique : $E_c \\approx 0{,}24$ J. Le corrigé officiel écrit « $E_c = E_p = 0{,}2412$ J », ce qui prête à confusion : en bas, $E_p$ vaut 0.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p03_q7",
            "type": "mcq",
            "prompt": "Une sphère de pendule, lâchée sans vitesse avec $E_p \\approx 0{,}24\\,\\mathrm{J}$ (référence : sa position la plus basse), oscille sans frottement. Que valent $E_c$ et $E_p$ quand elle passe par la position la plus basse ?",
            "options": [
              "$E_c \\approx 0{,}24\\,\\mathrm{J}$ et $E_p = 0$",
              "$E_c = E_p \\approx 0{,}24\\,\\mathrm{J}$",
              "$E_c = 0$ et $E_p \\approx 0{,}24\\,\\mathrm{J}$",
              "$E_c \\approx 0{,}12\\,\\mathrm{J}$ et $E_p \\approx 0{,}12\\,\\mathrm{J}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au point le plus bas, $z = z_0$ donc $E_p = 0$ ; l’énergie conservée est entièrement cinétique : $E_c \\approx 0{,}24\\,\\mathrm{J}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p03_q1",
          "type": "mcq",
          "prompt": "Une pompe refoule de l’eau avec un débit de $6\\,000\\,\\mathrm{L}$ par minute (1 L d’eau a une masse d’environ 1 kg). Quelle masse d’eau monte-t-elle en une seconde ?",
          "options": [
            "100 kg",
            "6 000 kg",
            "360 000 kg",
            "60 kg"
          ],
          "correctAnswerIndex": 0,
          "explanation": "6 000 L ÷ 60 s = 100 L par seconde, soit environ 100 kg d’eau."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p03_q2",
          "type": "mcq",
          "prompt": "Une pompe monte $100\\,\\mathrm{kg}$ d’eau par seconde dans un réservoir situé $6\\,\\mathrm{m}$ plus haut ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est la variation d’énergie potentielle de pesanteur de cette eau en une seconde ?",
          "options": [
            "$+6\\,000\\,\\mathrm{J}$",
            "$-6\\,000\\,\\mathrm{J}$",
            "$+600\\,\\mathrm{J}$",
            "$+100\\,\\mathrm{J}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\Delta E_p = mgh = 100 \\times 10 \\times 6 = 6\\,000\\,\\mathrm{J}$, positive car l’eau monte."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p03_q3",
          "type": "mcq",
          "prompt": "De l’eau est pompée vers un réservoir situé plus haut. Quels sont les signes de la variation de son énergie potentielle de pesanteur $\\Delta E_p$ et du travail de son poids $W(\\vec{P})$ ?",
          "options": [
            "$\\Delta E_p > 0$ et $W(\\vec{P}) < 0$",
            "$\\Delta E_p < 0$ et $W(\\vec{P}) > 0$",
            "$\\Delta E_p > 0$ et $W(\\vec{P}) > 0$",
            "$\\Delta E_p < 0$ et $W(\\vec{P}) < 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Montée : $W(\\vec{P}) = -mgh < 0$, donc $\\Delta E_p = -W(\\vec{P}) = +mgh > 0$."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p03_q4",
          "type": "mcq",
          "prompt": "Le moteur d’une pompe doit fournir une énergie $\\Delta E_p = 6\\,000\\,\\mathrm{J}$ chaque seconde pour monter l’eau. Quelle est sa puissance minimale ?",
          "options": [
            "6 000 W (6 kW)",
            "100 W",
            "600 W",
            "60 W"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$P_{min} = \\frac{6\\,000\\,\\mathrm{J}}{1\\,\\mathrm{s}} = 6\\,000\\,\\mathrm{W} = 6\\,\\mathrm{kW}$ (pertes non comptées)."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p03_q5",
          "type": "mcq",
          "prompt": "Une sphère est suspendue à un fil de longueur $L = 90\\,\\mathrm{cm}$. On écarte le fil d’un angle $\\alpha = 30^\\circ$ par rapport à la verticale. De quelle hauteur la sphère est-elle montée par rapport à sa position d’équilibre ?",
          "options": [
            "≈ 0,12 m",
            "≈ 0,78 m",
            "0,45 m",
            "0,90 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$h = L(1 - \\cos 30^\\circ) = 0{,}9 \\times (1 - 0{,}866) \\approx 0{,}12\\,\\mathrm{m}$."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p03_q6",
          "type": "mcq",
          "prompt": "Une sphère de masse $m = 200\\,\\mathrm{g}$, suspendue à un fil de longueur $L = 90\\,\\mathrm{cm}$, est écartée de $\\alpha = 30^\\circ$ de la verticale ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). La référence est la position d’équilibre (fil vertical). Que vaut son énergie potentielle de pesanteur ?",
          "options": [
            "≈ 0,24 J",
            "≈ 1,56 J",
            "≈ 0,9 J",
            "≈ 2,4 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_p = 0{,}2 \\times 10 \\times 0{,}9 \\times (1 - 0{,}866) \\approx 0{,}24\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p03_q7",
          "type": "mcq",
          "prompt": "Une sphère de pendule, lâchée sans vitesse avec $E_p \\approx 0{,}24\\,\\mathrm{J}$ (référence : sa position la plus basse), oscille sans frottement. Que valent $E_c$ et $E_p$ quand elle passe par la position la plus basse ?",
          "options": [
            "$E_c \\approx 0{,}24\\,\\mathrm{J}$ et $E_p = 0$",
            "$E_c = E_p \\approx 0{,}24\\,\\mathrm{J}$",
            "$E_c = 0$ et $E_p \\approx 0{,}24\\,\\mathrm{J}$",
            "$E_c \\approx 0{,}12\\,\\mathrm{J}$ et $E_p \\approx 0{,}12\\,\\mathrm{J}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au point le plus bas, $z = z_0$ donc $E_p = 0$ ; l’énergie conservée est entièrement cinétique : $E_c \\approx 0{,}24\\,\\mathrm{J}$."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p4_energie_potentielle_p04",
      "order": 4,
      "title": "Énergie potentielle élastique d’un ressort (1re C)",
      "summary": "Définir et calculer l’énergie potentielle élastique Epe = ½kx² et relier sa variation au travail de la tension du ressort. Partie au programme des 1res C et E.",
      "conceptExplanation": "- Pendule élastique : un solide accroché à un ressort de raideur $k$, qui glisse sans frottement sur un plan horizontal.\n- Définition : l’énergie potentielle élastique d’un ressort est l’énergie qu’il possède du fait de sa déformation $x$ (allongement ou raccourcissement par rapport à sa longueur à vide).\n- Expression : $E_{pe} = \\frac{1}{2}kx^2$, avec $k$ en N·m⁻¹, $x$ en m et $E_{pe}$ en J. Elle est nulle à la longueur à vide ($x = 0$).\n- Variation : entre deux déformations $x_1$ et $x_2$, $\\Delta E_{pe} = \\frac{1}{2}k(x_2^2 - x_1^2) = -W(\\vec{T})$, où $\\vec{T}$ est la tension du ressort.\n- Cette partie concerne les élèves de 1re C (et E), pas ceux de 1re D.",
      "keyRule": "Epe = ½·k·x², x = déformation par rapport à la longueur à vide (en m) ; ΔEpe = −W(T).",
      "formulas": [
        {
          "name": "Énergie potentielle élastique",
          "formula": "E_{pe} = \\frac{1}{2}kx^2",
          "note": "k en N·m⁻¹ ; x en m ; Epe en J"
        },
        {
          "name": "Variation et travail de la tension",
          "formula": "\\Delta E_{pe} = \\frac{1}{2}k(x_2^2 - x_1^2) = -W_{12}(\\vec{T})",
          "note": "x₁, x₂ : déformations initiale et finale"
        }
      ],
      "workedExample": {
        "title": "Activité d’application 2 : ressort comprimé",
        "statement": "Un ressort de longueur à vide $\\ell_0 = 20\\,\\mathrm{cm}$ et de raideur $k = 20\\,\\mathrm{N\\cdot m^{-1}}$ est comprimé à la moitié de sa longueur. Calculer son énergie potentielle élastique, sa variation et le travail de la tension.",
        "methodSteps": [
          "Déformation : x = 20 − 10 = 10 cm = 0,10 m.",
          "Epe = ½ × 20 × 0,10² = 0,1 J.",
          "Au départ le ressort était à vide (Epe = 0) : ΔEpe = 0,1 J.",
          "W(T) = −½kx² = −0,1 J."
        ],
        "conclusion": "ΔEpe = −W(T) : la variation d’énergie élastique est l’opposé du travail de la tension."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Définition",
          "stepTheme": "Epe = ½kx²",
          "stepTitle": "L’énergie stockée dans un ressort déformé",
          "paragraphText": "Un ressort de raideur $k$, déformé de $x$ (allongé ou comprimé) par rapport à sa longueur à vide, possède une **énergie potentielle élastique** $E_{pe} = \\frac{1}{2}kx^2$. Elle est nulle quand le ressort a sa longueur à vide.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p04_q1",
            "type": "mcq",
            "prompt": "Un ressort de raideur $k$ est déformé de $x$ (allongement ou raccourcissement) par rapport à sa longueur à vide. Quelle est l’expression de son énergie potentielle élastique ?",
            "options": [
              "$E_{pe} = \\frac{1}{2}kx^2$",
              "$E_{pe} = kx$",
              "$E_{pe} = \\frac{1}{2}kx$",
              "$E_{pe} = kx^2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’énergie stockée est égale au travail fourni pour déformer le ressort, c’est-à-dire l’aire du triangle sous la droite $F = kx$ : $\\frac{1}{2}kx^2$."
          },
          "visualSchema": {
            "type": "geometry_svg",
            "title": "Ressort déformé de x",
            "caption": "x est mesuré à partir de la longueur à vide (point O) : Epe = ½·k·x².",
            "svgContent": "<svg viewBox=\"0 0 380 140\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\" font-family=\"sans-serif\">\n  <line x1=\"22\" y1=\"40\" x2=\"22\" y2=\"110\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n  <line x1=\"12\" y1=\"50\" x2=\"22\" y2=\"40\" stroke=\"#1e293b\"/><line x1=\"12\" y1=\"66\" x2=\"22\" y2=\"56\" stroke=\"#1e293b\"/>\n  <line x1=\"12\" y1=\"82\" x2=\"22\" y2=\"72\" stroke=\"#1e293b\"/><line x1=\"12\" y1=\"98\" x2=\"22\" y2=\"88\" stroke=\"#1e293b\"/>\n  <line x1=\"22\" y1=\"110\" x2=\"370\" y2=\"110\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <polyline points=\"22,90 42,90 52,78 67,102 82,78 97,102 112,78 127,102 142,78 157,102 172,78 184,90 210,90\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n  <rect x=\"210\" y=\"70\" width=\"40\" height=\"40\" fill=\"#e2e8f0\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n  <text x=\"224\" y=\"95\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">S</text>\n  <line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"125\" stroke=\"#dc2626\" stroke-dasharray=\"4 3\"/>\n  <text x=\"128\" y=\"36\" font-size=\"10\" fill=\"#dc2626\">O : longueur à vide</text>\n  <line x1=\"170\" y1=\"125\" x2=\"205\" y2=\"125\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <polygon points=\"210,125 201,120 201,130\" fill=\"#dc2626\"/>\n  <text x=\"183\" y=\"138\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">x</text>\n  <text x=\"268\" y=\"62\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\">Epe = ½ k x²</text>\n  <text x=\"268\" y=\"80\" font-size=\"10\" fill=\"#334155\">k : raideur (N/m)</text>\n  <text x=\"268\" y=\"96\" font-size=\"10\" fill=\"#334155\">x : déformation (m)</text>\n</svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Compression",
          "stepTheme": "Calcul de Epe",
          "stepTitle": "Calculer Epe d’un ressort comprimé",
          "paragraphText": "Comprimer un ressort de longueur à vide $\\ell_0 = 20$ cm jusqu’à la moitié de sa longueur, c’est le raccourcir de $x = 10$ cm $= 0{,}10$ m. On calcule ensuite $\\frac{1}{2}kx^2$ avec $x$ en mètres.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p04_q2",
            "type": "mcq",
            "prompt": "Un ressort de longueur à vide $\\ell_0 = 20\\,\\mathrm{cm}$ et de raideur $k = 20\\,\\mathrm{N\\cdot m^{-1}}$ est comprimé jusqu’à la moitié de sa longueur. Quelle énergie potentielle élastique possède-t-il ?",
            "options": [
              "0,1 J",
              "0,4 J",
              "1 000 J",
              "0,2 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$x = 0{,}10\\,\\mathrm{m}$ ; $E_{pe} = \\frac{1}{2} \\times 20 \\times 0{,}10^2 = 0{,}1\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Toujours positive",
          "stepTheme": "x²",
          "stepTitle": "Allongé ou comprimé : même énergie",
          "paragraphText": "Comme $x$ est élevé au carré, un ressort comprimé de 4 cm stocke la même énergie qu’un ressort allongé de 4 cm. $E_{pe}$ n’est jamais négative.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p04_q3",
            "type": "mcq",
            "prompt": "Un ressort de raideur $k = 50\\,\\mathrm{N\\cdot m^{-1}}$ est d’abord comprimé de $4\\,\\mathrm{cm}$, puis allongé de $4\\,\\mathrm{cm}$ par rapport à sa longueur à vide. Que valent ses énergies potentielles élastiques dans les deux cas ?",
            "options": [
              "0,04 J dans les deux cas",
              "−0,04 J puis +0,04 J",
              "0,08 J puis 0 J",
              "400 J dans les deux cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_{pe} = \\frac{1}{2} \\times 50 \\times 0{,}04^2 = 0{,}04\\,\\mathrm{J}$ dans les deux cas (400 J correspond à l’erreur de garder $x$ en centimètres)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "ΔEpe",
          "stepTheme": "Deux déformations",
          "stepTitle": "Variation d’énergie élastique entre deux positions",
          "paragraphText": "Quand la déformation passe de $x_1$ à $x_2$ : $\\Delta E_{pe} = \\frac{1}{2}kx_2^2 - \\frac{1}{2}kx_1^2 = \\frac{1}{2}k(x_2^2 - x_1^2)$. Attention : ce n’est pas $\\frac{1}{2}k(x_2 - x_1)^2$.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p04_q4",
            "type": "mcq",
            "prompt": "L’allongement d’un ressort de raideur $k = 20\\,\\mathrm{N\\cdot m^{-1}}$ passe de $x_1 = 0{,}05\\,\\mathrm{m}$ à $x_2 = 0{,}10\\,\\mathrm{m}$. Quelle est la variation de son énergie potentielle élastique ?",
            "options": [
              "+0,075 J",
              "+0,025 J",
              "−0,075 J",
              "+0,1 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\Delta E_{pe} = \\frac{1}{2} \\times 20 \\times (0{,}10^2 - 0{,}05^2) = 10 \\times 0{,}0075 = 0{,}075\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "ΔEpe = −W(T)",
          "stepTheme": "Travail de la tension",
          "stepTitle": "Variation de Epe et travail de la tension",
          "paragraphText": "La variation de l’énergie potentielle élastique d’un ressort est égale à l’**opposé du travail de sa tension** : $\\Delta E_{pe} = -W(\\vec{T})$. Quand on comprime le ressort, sa tension s’oppose au mouvement : son travail est négatif.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p04_q5",
            "type": "mcq",
            "prompt": "On comprime un ressort de raideur $k = 20\\,\\mathrm{N\\cdot m^{-1}}$ de $x = 0{,}10\\,\\mathrm{m}$ à partir de sa longueur à vide : son énergie potentielle élastique augmente de $0{,}1\\,\\mathrm{J}$. Quel est le travail de la tension du ressort pendant cette compression ?",
            "options": [
              "−0,1 J",
              "+0,1 J",
              "0 J",
              "−0,2 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$W(\\vec{T}) = -\\Delta E_{pe} = -0{,}1\\,\\mathrm{J}$ : travail résistant."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Longueur à vide",
          "stepTheme": "x = ℓ − ℓ₀",
          "stepTitle": "La déformation se mesure à partir de la longueur à vide",
          "paragraphText": "La déformation $x$ vaut $\\ell - \\ell_0$ : l’écart entre la longueur actuelle et la longueur à vide. Utiliser la longueur totale $\\ell$ à la place de $x$ est une erreur fréquente.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p04_q6",
            "type": "mcq",
            "prompt": "Un ressort de longueur à vide $\\ell_0 = 15\\,\\mathrm{cm}$ et de raideur $k = 100\\,\\mathrm{N\\cdot m^{-1}}$ est étiré jusqu’à la longueur $\\ell = 18\\,\\mathrm{cm}$. Quelle est son énergie potentielle élastique ?",
            "options": [
              "0,045 J",
              "1,62 J",
              "0,09 J",
              "450 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$x = 18 - 15 = 3\\,\\mathrm{cm} = 0{,}03\\,\\mathrm{m}$ ; $E_{pe} = \\frac{1}{2} \\times 100 \\times 0{,}03^2 = 0{,}045\\,\\mathrm{J}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p04_q1",
          "type": "mcq",
          "prompt": "Un ressort de raideur $k$ est déformé de $x$ (allongement ou raccourcissement) par rapport à sa longueur à vide. Quelle est l’expression de son énergie potentielle élastique ?",
          "options": [
            "$E_{pe} = \\frac{1}{2}kx^2$",
            "$E_{pe} = kx$",
            "$E_{pe} = \\frac{1}{2}kx$",
            "$E_{pe} = kx^2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’énergie stockée est égale au travail fourni pour déformer le ressort, c’est-à-dire l’aire du triangle sous la droite $F = kx$ : $\\frac{1}{2}kx^2$."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p04_q2",
          "type": "mcq",
          "prompt": "Un ressort de longueur à vide $\\ell_0 = 20\\,\\mathrm{cm}$ et de raideur $k = 20\\,\\mathrm{N\\cdot m^{-1}}$ est comprimé jusqu’à la moitié de sa longueur. Quelle énergie potentielle élastique possède-t-il ?",
          "options": [
            "0,1 J",
            "0,4 J",
            "1 000 J",
            "0,2 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$x = 0{,}10\\,\\mathrm{m}$ ; $E_{pe} = \\frac{1}{2} \\times 20 \\times 0{,}10^2 = 0{,}1\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p04_q3",
          "type": "mcq",
          "prompt": "Un ressort de raideur $k = 50\\,\\mathrm{N\\cdot m^{-1}}$ est d’abord comprimé de $4\\,\\mathrm{cm}$, puis allongé de $4\\,\\mathrm{cm}$ par rapport à sa longueur à vide. Que valent ses énergies potentielles élastiques dans les deux cas ?",
          "options": [
            "0,04 J dans les deux cas",
            "−0,04 J puis +0,04 J",
            "0,08 J puis 0 J",
            "400 J dans les deux cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_{pe} = \\frac{1}{2} \\times 50 \\times 0{,}04^2 = 0{,}04\\,\\mathrm{J}$ dans les deux cas (400 J correspond à l’erreur de garder $x$ en centimètres)."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p04_q4",
          "type": "mcq",
          "prompt": "L’allongement d’un ressort de raideur $k = 20\\,\\mathrm{N\\cdot m^{-1}}$ passe de $x_1 = 0{,}05\\,\\mathrm{m}$ à $x_2 = 0{,}10\\,\\mathrm{m}$. Quelle est la variation de son énergie potentielle élastique ?",
          "options": [
            "+0,075 J",
            "+0,025 J",
            "−0,075 J",
            "+0,1 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\Delta E_{pe} = \\frac{1}{2} \\times 20 \\times (0{,}10^2 - 0{,}05^2) = 10 \\times 0{,}0075 = 0{,}075\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p04_q5",
          "type": "mcq",
          "prompt": "On comprime un ressort de raideur $k = 20\\,\\mathrm{N\\cdot m^{-1}}$ de $x = 0{,}10\\,\\mathrm{m}$ à partir de sa longueur à vide : son énergie potentielle élastique augmente de $0{,}1\\,\\mathrm{J}$. Quel est le travail de la tension du ressort pendant cette compression ?",
          "options": [
            "−0,1 J",
            "+0,1 J",
            "0 J",
            "−0,2 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$W(\\vec{T}) = -\\Delta E_{pe} = -0{,}1\\,\\mathrm{J}$ : travail résistant."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p04_q6",
          "type": "mcq",
          "prompt": "Un ressort de longueur à vide $\\ell_0 = 15\\,\\mathrm{cm}$ et de raideur $k = 100\\,\\mathrm{N\\cdot m^{-1}}$ est étiré jusqu’à la longueur $\\ell = 18\\,\\mathrm{cm}$. Quelle est son énergie potentielle élastique ?",
          "options": [
            "0,045 J",
            "1,62 J",
            "0,09 J",
            "450 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$x = 18 - 15 = 3\\,\\mathrm{cm} = 0{,}03\\,\\mathrm{m}$ ; $E_{pe} = \\frac{1}{2} \\times 100 \\times 0{,}03^2 = 0{,}045\\,\\mathrm{J}$."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p4_energie_potentielle_p05",
      "order": 5,
      "title": "Bilan : vrai ou faux et formes d’énergie potentielle",
      "summary": "Vérifier les idées clés (référence, forces conservatives) et reconnaître les différentes énergies potentielles.",
      "conceptExplanation": "- L’énergie potentielle n’est pas définie de façon absolue : sa valeur dépend de la référence choisie, sa variation non.\n- Elle n’est pas constante au cours du temps : elle change quand la position change.\n- Le poids et la tension d’un ressort sont des forces conservatives ; les forces de frottement sont non conservatives.\n- Types d’énergie potentielle : de pesanteur (position dans le champ de pesanteur), élastique (déformation d’un ressort), électrostatique (charge dans un champ électrique), chimique (liaisons entre atomes).\n- Le terme « énergie potentielle » a été introduit au XIXe siècle par l’ingénieur écossais William Rankine.\n- Erreur de la documentation : la formule « $E = m\\frac{v^2}{2} = mgh$ » mélange deux énergies. L’énergie potentielle de pesanteur s’écrit $E_p = mgh$ ; $\\frac{1}{2}mv^2$ est l’énergie cinétique.",
      "keyRule": "La valeur de Ep dépend de la référence, sa variation non. Le poids est conservatif, les frottements ne le sont pas.",
      "formulas": [
        {
          "name": "Énergie potentielle de pesanteur",
          "formula": "E_p = mgh",
          "note": "h : hauteur au-dessus de la référence"
        }
      ],
      "workedExample": {
        "title": "Exercice 1 corrigé : vrai ou faux",
        "statement": "Dire si chaque affirmation est vraie ou fausse : (1) l’énergie potentielle est définie de façon absolue ; (2) l’énergie potentielle d’un système est constante au cours du temps ; (3) les forces de frottement sont non conservatives ; (4) plus un solide s’éloigne de la Terre, plus son énergie potentielle est grande ; (5) la variation d’énergie potentielle ne dépend pas du choix de la référence.",
        "methodSteps": [
          "(1) Faux : sa valeur dépend de la référence.",
          "(2) Faux : elle varie avec la position.",
          "(3) Vrai.",
          "(4) Vrai (axe vertical orienté vers le haut).",
          "(5) Vrai : la constante s’élimine dans la différence."
        ],
        "conclusion": "Réponses : 1 faux, 2 faux, 3 vrai, 4 vrai, 5 vrai."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "piege",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Pas de valeur absolue",
          "stepTitle": "L’énergie potentielle est-elle absolue ?",
          "paragraphText": "L’énergie potentielle n’est **pas** définie de façon absolue : sa valeur dépend toujours de la position de référence choisie.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p05_q1",
            "type": "mcq",
            "prompt": "Vrai ou faux : « L’énergie potentielle de pesanteur d’un solide est définie de façon absolue, indépendamment de tout choix de référence. »",
            "options": [
              "Faux : sa valeur dépend de la référence choisie",
              "Vrai : elle ne dépend que de la masse du solide",
              "Vrai : elle est toujours mesurée par rapport au sol",
              "Faux : elle dépend seulement de la vitesse du solide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_p = mg(z - z_0)$ change avec $z_0$ : il n’y a pas de valeur absolue."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Forces",
          "stepTheme": "Conservatives ou non",
          "stepTitle": "Forces conservatives et non conservatives",
          "paragraphText": "Le **poids** est une force conservative : son travail ne dépend que des positions de départ et d’arrivée. Les **forces de frottement** sont non conservatives : elles font perdre de l’énergie mécanique au système.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p05_q2",
            "type": "mcq",
            "prompt": "Vrai ou faux : « Les forces de frottement sont des forces non conservatives. »",
            "options": [
              "Vrai : elles font perdre de l’énergie mécanique au système",
              "Faux : ce sont des forces conservatives, comme le poids",
              "Faux : leur travail est toujours nul",
              "Vrai, mais seulement sur un plan horizontal"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le travail des frottements dépend du chemin suivi et est toujours résistant : ils ne sont pas conservatifs."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Ep, masse et altitude",
          "stepTheme": "Grandeurs en jeu",
          "stepTitle": "De quoi dépend l’énergie potentielle de pesanteur ?",
          "paragraphText": "Avec un axe vertical orienté vers le haut, $E_p = mg(z - z_0)$ augmente avec l’altitude $z$ : plus un solide s’éloigne du sol, plus son énergie potentielle est grande. Elle est aussi proportionnelle à sa **masse**.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p05_q3",
            "type": "mcq",
            "prompt": "L’énergie potentielle de pesanteur $E_p = mg(z - z_0)$ d’un solide dépend de quelles grandeurs liées au solide ?",
            "options": [
              "De son altitude et de sa masse",
              "De son altitude seulement",
              "De sa vitesse et de sa masse",
              "De sa vitesse seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans $E_p = mg(z - z_0)$ figurent $m$ et $z$, pas la vitesse. Le corrigé officiel de l’exercice 3 de la leçon « Énergie mécanique » ne retient que l’altitude : c’est incomplet."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Formes",
          "stepTheme": "Plusieurs énergies potentielles",
          "stepTitle": "Les différentes énergies potentielles",
          "paragraphText": "On rencontre plusieurs énergies potentielles : de **pesanteur** (position par rapport à la Terre), **élastique** (déformation d’un ressort), **électrostatique** (charge placée dans un champ électrique) et **chimique** (liaisons entre atomes).",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p05_q4",
            "type": "mcq",
            "prompt": "Parmi ces énergies, laquelle n’est pas une énergie potentielle ?",
            "options": [
              "L’énergie cinétique d’un ballon en mouvement",
              "L’énergie élastique d’un ressort comprimé",
              "L’énergie d’une charge placée dans un champ électrique",
              "L’énergie stockée dans les liaisons d’une molécule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’énergie cinétique est liée à la vitesse, pas à la position ni à la configuration du système."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Formule",
          "stepTheme": "mgh ≠ ½mv²",
          "stepTitle": "Ne pas confondre ½mv² et mgh",
          "paragraphText": "La documentation de la leçon écrit « $E = m\\frac{v^2}{2} = mgh$ » pour l’énergie potentielle : c’est une erreur. $E_p = mgh$ est l’énergie potentielle de pesanteur ; $\\frac{1}{2}mv^2$ est l’énergie cinétique. Elles ne sont égales que dans des cas particuliers.",
          "exercise": {
            "id": "premiere_c_physique_p4_energie_potentielle_p05_q5",
            "type": "mcq",
            "prompt": "Un ballon de masse $m$ se trouve à la hauteur $h$ au-dessus de la référence et se déplace à la vitesse $v$. Quelle expression donne son énergie potentielle de pesanteur ?",
            "options": [
              "$E_p = mgh$",
              "$E_p = \\frac{1}{2}mv^2$",
              "$E_p = \\frac{1}{2}mv^2 + mgh$",
              "$E_p = mv^2h$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_p = mgh$ ; $\\frac{1}{2}mv^2$ est l’énergie cinétique, et la somme des deux est l’énergie mécanique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p05_q1",
          "type": "mcq",
          "prompt": "Vrai ou faux : « L’énergie potentielle de pesanteur d’un solide est définie de façon absolue, indépendamment de tout choix de référence. »",
          "options": [
            "Faux : sa valeur dépend de la référence choisie",
            "Vrai : elle ne dépend que de la masse du solide",
            "Vrai : elle est toujours mesurée par rapport au sol",
            "Faux : elle dépend seulement de la vitesse du solide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_p = mg(z - z_0)$ change avec $z_0$ : il n’y a pas de valeur absolue."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p05_q2",
          "type": "mcq",
          "prompt": "Vrai ou faux : « Les forces de frottement sont des forces non conservatives. »",
          "options": [
            "Vrai : elles font perdre de l’énergie mécanique au système",
            "Faux : ce sont des forces conservatives, comme le poids",
            "Faux : leur travail est toujours nul",
            "Vrai, mais seulement sur un plan horizontal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le travail des frottements dépend du chemin suivi et est toujours résistant : ils ne sont pas conservatifs."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p05_q3",
          "type": "mcq",
          "prompt": "L’énergie potentielle de pesanteur $E_p = mg(z - z_0)$ d’un solide dépend de quelles grandeurs liées au solide ?",
          "options": [
            "De son altitude et de sa masse",
            "De son altitude seulement",
            "De sa vitesse et de sa masse",
            "De sa vitesse seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans $E_p = mg(z - z_0)$ figurent $m$ et $z$, pas la vitesse. Le corrigé officiel de l’exercice 3 de la leçon « Énergie mécanique » ne retient que l’altitude : c’est incomplet."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p05_q4",
          "type": "mcq",
          "prompt": "Parmi ces énergies, laquelle n’est pas une énergie potentielle ?",
          "options": [
            "L’énergie cinétique d’un ballon en mouvement",
            "L’énergie élastique d’un ressort comprimé",
            "L’énergie d’une charge placée dans un champ électrique",
            "L’énergie stockée dans les liaisons d’une molécule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’énergie cinétique est liée à la vitesse, pas à la position ni à la configuration du système."
        },
        {
          "id": "premiere_c_physique_p4_energie_potentielle_p05_q5",
          "type": "mcq",
          "prompt": "Un ballon de masse $m$ se trouve à la hauteur $h$ au-dessus de la référence et se déplace à la vitesse $v$. Quelle expression donne son énergie potentielle de pesanteur ?",
          "options": [
            "$E_p = mgh$",
            "$E_p = \\frac{1}{2}mv^2$",
            "$E_p = \\frac{1}{2}mv^2 + mgh$",
            "$E_p = mv^2h$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_p = mgh$ ; $\\frac{1}{2}mv^2$ est l’énergie cinétique, et la somme des deux est l’énergie mécanique."
        }
      ]
    }
  ]
};
