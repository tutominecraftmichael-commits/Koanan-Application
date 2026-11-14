import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « PC 1ère CD P5,4 : Énergie mécanique » (leçon 5 en 1re C, 4 en 1re D).
// Fichier généré (scratchpad build_1re_pc_p4_p6.mjs) : modifier le générateur plutôt que ce fichier.
export const PHYSIQUE_1RE_CD_P5_ENERGIE_MECANIQUE: CurriculumChapter = {
  "id": "premiere_c_physique_p5_energie_mecanique",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 5,
  "title": "Leçon 5 : Énergie mécanique",
  "summary": "Énergie mécanique EM = EC + EP, conservation sans frottement (chute libre, plan incliné, pistes) et non-conservation avec frottements (ΔEM = W(f) < 0). Leçon 5 en 1re C, leçon 4 en 1re D.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "PC1ère CD_P5,4 Energie mécanique.pdf",
  "points": [
    {
      "id": "premiere_c_physique_p5_energie_mecanique_p01",
      "order": 1,
      "title": "Étude énergétique d’une chute libre",
      "summary": "Exploiter un enregistrement de chute libre : Ec augmente, Ep diminue, Ec + Ep reste constante.",
      "conceptExplanation": "Situation : Ossey, élève de 1re à Adzopé, sait qu’un corps en mouvement possède de l’énergie cinétique et de l’énergie potentielle. Son grand frère lui explique que leur somme peut augmenter, diminuer ou rester constante selon les forces qui s’exercent.\n- Expérience : une bille d’acier de masse $m = 2$ g tombe en chute libre sans vitesse initiale ; ses positions $A_0, A_1, \\ldots, A_9$ sont enregistrées toutes les $\\tau = 20$ ms ($g = 9{,}8$ N·kg⁻¹, référence des énergies potentielles en $A_9$).\n- Résultats : l’énergie cinétique $E_c = \\frac{1}{2}mv^2$ augmente, l’énergie potentielle $E_p = mgh$ diminue, et leur somme reste égale à environ $3{,}11 \\times 10^{-3}$ J.\n- Conclusion : au cours d’une chute libre, $E_c + E_p = \\text{constante}$.",
      "keyRule": "En chute libre, Ec augmente exactement autant que Ep diminue : Ec + Ep reste constante.",
      "formulas": [
        {
          "name": "Bilan de la chute libre",
          "formula": "E_c + E_p = \\text{constante}",
          "note": "Ec = ½mv² ; Ep = mgh"
        }
      ],
      "workedExample": {
        "title": "Bilan au point A₄",
        "statement": "Au point $A_4$, la bille de $2\\,\\mathrm{g}$ est à $h_4 = 12{,}73\\,\\mathrm{cm}$ au-dessus de $A_9$ et a la vitesse $v_4 = 0{,}78\\,\\mathrm{m\\cdot s^{-1}}$ ($g = 9{,}8\\,\\mathrm{N\\cdot kg^{-1}}$). Calculer $E_c$, $E_p$ et leur somme.",
        "methodSteps": [
          "Ec = ½ × 0,002 × 0,78² ≈ 0,61 × 10⁻³ J.",
          "Ep = 0,002 × 9,8 × 0,1273 ≈ 2,50 × 10⁻³ J.",
          "Ec + Ep ≈ 3,11 × 10⁻³ J, comme au départ."
        ],
        "conclusion": "La somme Ec + Ep est la même qu’en A₀ : elle se conserve pendant la chute libre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Mesures",
          "stepTheme": "Bille de 2 g",
          "stepTitle": "Énergie potentielle de la bille au départ",
          "paragraphText": "Au départ ($A_0$), la bille de 2 g est immobile à $h_0 = 15{,}88$ cm au-dessus de $A_9$, la position de référence. Toute son énergie est alors potentielle.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p01_q1",
            "type": "mcq",
            "prompt": "Une bille de masse $m = 2\\,\\mathrm{g}$ est lâchée sans vitesse à $h_0 = 15{,}88\\,\\mathrm{cm}$ au-dessus du niveau de référence ($g = 9{,}8\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est son énergie potentielle de pesanteur au départ ?",
            "options": [
              "$3{,}11 \\times 10^{-3}\\,\\mathrm{J}$",
              "$3{,}11\\,\\mathrm{J}$",
              "$0{,}311\\,\\mathrm{J}$",
              "$3{,}11 \\times 10^{-2}\\,\\mathrm{J}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_p = mgh_0 = 0{,}002 \\times 9{,}8 \\times 0{,}1588 \\approx 3{,}11 \\times 10^{-3}\\,\\mathrm{J}$ (masse en kg, hauteur en m)."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Chute libre d’une bille de 2 g (mesures toutes les 20 ms)",
            "caption": "Énergies en millijoules (1 mJ = 10⁻³ J), référence des énergies potentielles en A₉, g = 9,8 N/kg.",
            "tableData": {
              "headers": [
                "Position",
                "h (cm)",
                "v (m/s)",
                "Ec (mJ)",
                "Ep (mJ)",
                "Ec + Ep (mJ)"
              ],
              "rows": [
                [
                  "A₀",
                  "15,88",
                  "0",
                  "0,00",
                  "3,11",
                  "3,11"
                ],
                [
                  "A₂",
                  "15,09",
                  "0,39",
                  "0,15",
                  "2,96",
                  "3,11"
                ],
                [
                  "A₄",
                  "12,73",
                  "0,78",
                  "0,61",
                  "2,50",
                  "3,11"
                ],
                [
                  "A₆",
                  "8,82",
                  "1,18",
                  "1,38",
                  "1,73",
                  "3,11"
                ],
                [
                  "A₈",
                  "3,33",
                  "1,57",
                  "2,46",
                  "0,65",
                  "3,11"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Énergie cinétique",
          "stepTheme": "Point A₈",
          "stepTitle": "Énergie cinétique de la bille en A₈",
          "paragraphText": "En $A_8$, la bille a une vitesse $v_8 = 1{,}57$ m·s⁻¹. Son énergie cinétique est $E_c = \\frac{1}{2}mv_8^2$, avec $m$ en kg.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p01_q2",
            "type": "mcq",
            "prompt": "Une bille de masse $m = 2\\,\\mathrm{g}$ en chute libre passe en un point avec la vitesse $v = 1{,}57\\,\\mathrm{m\\cdot s^{-1}}$. Quelle est son énergie cinétique en ce point ?",
            "options": [
              "$2{,}46 \\times 10^{-3}\\,\\mathrm{J}$",
              "$2{,}46\\,\\mathrm{J}$",
              "$1{,}57 \\times 10^{-3}\\,\\mathrm{J}$",
              "$4{,}93 \\times 10^{-3}\\,\\mathrm{J}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_c = \\frac{1}{2} \\times 0{,}002 \\times 1{,}57^2 \\approx 2{,}46 \\times 10^{-3}\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Somme constante",
          "stepTheme": "Ec + Ep",
          "stepTitle": "La somme Ec + Ep reste constante",
          "paragraphText": "Dans le tableau, $E_c + E_p$ vaut environ $3{,}11 \\times 10^{-3}$ J à toutes les positions. Les petits écarts (3,10 ou 3,12) viennent des arrondis de mesure.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p01_q3",
            "type": "mcq",
            "prompt": "Lors de la chute libre d’une bille, on calcule à plusieurs positions $E_c + E_p$ et on trouve, en $10^{-3}\\,\\mathrm{J}$ : 3,11 ; 3,11 ; 3,11 ; 3,12 ; 3,11 ; 3,10 ; 3,11. Que peut-on conclure ?",
            "options": [
              "La somme Ec + Ep reste constante pendant la chute",
              "La somme Ec + Ep augmente pendant la chute",
              "La somme Ec + Ep diminue à cause du poids",
              "Ec et Ep restent chacune constantes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Aux arrondis près, la somme ne change pas : au cours d’une chute libre, Ec + Ep = constante."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Déduire Ec",
          "stepTheme": "Ec = somme − Ep",
          "stepTitle": "Retrouver Ec à partir de Ep et de la somme",
          "paragraphText": "Puisque $E_c + E_p$ est constante, connaître la somme et l’une des deux énergies suffit : $E_c = (E_c + E_p) - E_p$.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p01_q4",
            "type": "mcq",
            "prompt": "Une bille en chute libre a une énergie $E_c + E_p = 3{,}11 \\times 10^{-3}\\,\\mathrm{J}$ qui reste constante. Au point $A_4$, son énergie potentielle vaut $E_p = 2{,}50 \\times 10^{-3}\\,\\mathrm{J}$. Quelle est son énergie cinétique en $A_4$ ?",
            "options": [
              "$0{,}61 \\times 10^{-3}\\,\\mathrm{J}$",
              "$5{,}61 \\times 10^{-3}\\,\\mathrm{J}$",
              "$2{,}50 \\times 10^{-3}\\,\\mathrm{J}$",
              "$3{,}11 \\times 10^{-3}\\,\\mathrm{J}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_c = 3{,}11 \\times 10^{-3} - 2{,}50 \\times 10^{-3} = 0{,}61 \\times 10^{-3}\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Échanges",
          "stepTheme": "Transformation d’énergie",
          "stepTitle": "Ec et Ep varient en sens contraires",
          "paragraphText": "Pendant la chute, l’énergie potentielle se **transforme** en énergie cinétique : ce que $E_p$ perd, $E_c$ le gagne. Aucune des deux n’est constante, seule leur somme l’est.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p01_q5",
            "type": "mcq",
            "prompt": "Une pierre tombe en chute libre (frottements de l’air négligés). Comment évoluent son énergie cinétique $E_c$ et son énergie potentielle de pesanteur $E_p$ ?",
            "options": [
              "$E_c$ augmente et $E_p$ diminue de la même quantité",
              "$E_c$ et $E_p$ augmentent toutes les deux",
              "$E_c$ diminue et $E_p$ augmente",
              "$E_c$ et $E_p$ restent constantes toutes les deux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La pierre accélère (Ec augmente) et perd de l’altitude (Ep diminue) ; la somme reste constante."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p01_q1",
          "type": "mcq",
          "prompt": "Une bille de masse $m = 2\\,\\mathrm{g}$ est lâchée sans vitesse à $h_0 = 15{,}88\\,\\mathrm{cm}$ au-dessus du niveau de référence ($g = 9{,}8\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est son énergie potentielle de pesanteur au départ ?",
          "options": [
            "$3{,}11 \\times 10^{-3}\\,\\mathrm{J}$",
            "$3{,}11\\,\\mathrm{J}$",
            "$0{,}311\\,\\mathrm{J}$",
            "$3{,}11 \\times 10^{-2}\\,\\mathrm{J}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_p = mgh_0 = 0{,}002 \\times 9{,}8 \\times 0{,}1588 \\approx 3{,}11 \\times 10^{-3}\\,\\mathrm{J}$ (masse en kg, hauteur en m)."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p01_q2",
          "type": "mcq",
          "prompt": "Une bille de masse $m = 2\\,\\mathrm{g}$ en chute libre passe en un point avec la vitesse $v = 1{,}57\\,\\mathrm{m\\cdot s^{-1}}$. Quelle est son énergie cinétique en ce point ?",
          "options": [
            "$2{,}46 \\times 10^{-3}\\,\\mathrm{J}$",
            "$2{,}46\\,\\mathrm{J}$",
            "$1{,}57 \\times 10^{-3}\\,\\mathrm{J}$",
            "$4{,}93 \\times 10^{-3}\\,\\mathrm{J}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_c = \\frac{1}{2} \\times 0{,}002 \\times 1{,}57^2 \\approx 2{,}46 \\times 10^{-3}\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p01_q3",
          "type": "mcq",
          "prompt": "Lors de la chute libre d’une bille, on calcule à plusieurs positions $E_c + E_p$ et on trouve, en $10^{-3}\\,\\mathrm{J}$ : 3,11 ; 3,11 ; 3,11 ; 3,12 ; 3,11 ; 3,10 ; 3,11. Que peut-on conclure ?",
          "options": [
            "La somme Ec + Ep reste constante pendant la chute",
            "La somme Ec + Ep augmente pendant la chute",
            "La somme Ec + Ep diminue à cause du poids",
            "Ec et Ep restent chacune constantes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Aux arrondis près, la somme ne change pas : au cours d’une chute libre, Ec + Ep = constante."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p01_q4",
          "type": "mcq",
          "prompt": "Une bille en chute libre a une énergie $E_c + E_p = 3{,}11 \\times 10^{-3}\\,\\mathrm{J}$ qui reste constante. Au point $A_4$, son énergie potentielle vaut $E_p = 2{,}50 \\times 10^{-3}\\,\\mathrm{J}$. Quelle est son énergie cinétique en $A_4$ ?",
          "options": [
            "$0{,}61 \\times 10^{-3}\\,\\mathrm{J}$",
            "$5{,}61 \\times 10^{-3}\\,\\mathrm{J}$",
            "$2{,}50 \\times 10^{-3}\\,\\mathrm{J}$",
            "$3{,}11 \\times 10^{-3}\\,\\mathrm{J}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_c = 3{,}11 \\times 10^{-3} - 2{,}50 \\times 10^{-3} = 0{,}61 \\times 10^{-3}\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p01_q5",
          "type": "mcq",
          "prompt": "Une pierre tombe en chute libre (frottements de l’air négligés). Comment évoluent son énergie cinétique $E_c$ et son énergie potentielle de pesanteur $E_p$ ?",
          "options": [
            "$E_c$ augmente et $E_p$ diminue de la même quantité",
            "$E_c$ et $E_p$ augmentent toutes les deux",
            "$E_c$ diminue et $E_p$ augmente",
            "$E_c$ et $E_p$ restent constantes toutes les deux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La pierre accélère (Ec augmente) et perd de l’altitude (Ep diminue) ; la somme reste constante."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p5_energie_mecanique_p02",
      "order": 2,
      "title": "Définition de l’énergie mécanique",
      "summary": "Définir EM = EC + EP et la calculer pour un solide dans le champ de pesanteur ou accroché à un ressort.",
      "conceptExplanation": "- Définition : l’énergie mécanique d’un système est la somme de son énergie cinétique et de son énergie potentielle : $E_M = E_C + E_P$, en joules (J).\n- Solide de masse $m$ à l’altitude $z$, en translation à la vitesse $v$ : $E_M = \\frac{1}{2}mv^2 + mgz$.\n- Solide accroché à un ressort horizontal d’allongement $x$ : $E_M = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$.\n- Comme $E_P$, la valeur de $E_M$ dépend de la référence choisie pour l’énergie potentielle.",
      "keyRule": "EM = EC + EP. Avec la pesanteur : ½mv² + mgz ; avec un ressort horizontal : ½mv² + ½kx².",
      "formulas": [
        {
          "name": "Énergie mécanique (pesanteur)",
          "formula": "E_M = \\frac{1}{2}mv^2 + mgz",
          "note": "z mesurée à partir de la référence"
        },
        {
          "name": "Énergie mécanique (ressort horizontal)",
          "formula": "E_M = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2",
          "note": "x : allongement du ressort"
        }
      ],
      "workedExample": {
        "title": "Activité d’application : solide sur un plan incliné",
        "statement": "Un solide de masse $m = 200\\,\\mathrm{g}$ descend un plan incliné sans frottement. À l’altitude $h_1 = 4\\,\\mathrm{m}$, sa vitesse est $v_1 = 1{,}25\\,\\mathrm{m\\cdot s^{-1}}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$, le sol est la référence). Calculer $E_C$, $E_P$ et $E_M$ à cette altitude.",
        "methodSteps": [
          "EC = ½ × 0,2 × 1,25² ≈ 0,16 J.",
          "EP = 0,2 × 10 × 4 = 8 J.",
          "EM = EC + EP ≈ 8,16 J."
        ],
        "conclusion": "À l’altitude h₁, l’énergie mécanique du solide vaut environ 8,16 J."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Définition",
          "stepTheme": "EM = EC + EP",
          "stepTitle": "Qu’est-ce que l’énergie mécanique ?",
          "paragraphText": "L’**énergie mécanique** $E_M$ d’un système est la **somme** de son énergie cinétique et de son énergie potentielle : $E_M = E_C + E_P$. Elle s’exprime en joules (J).",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p02_q1",
            "type": "mcq",
            "prompt": "À un instant donné, un solide possède une énergie cinétique $E_C = 2\\,\\mathrm{J}$ et une énergie potentielle de pesanteur $E_P = 5\\,\\mathrm{J}$. Quelle est son énergie mécanique à cet instant ?",
            "options": [
              "7 J",
              "3 J",
              "10 J",
              "2,5 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_M = E_C + E_P = 2 + 5 = 7\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Plan incliné",
          "stepTheme": "Solide de 200 g",
          "stepTitle": "Énergie mécanique d’un solide sur une pente",
          "paragraphText": "Un solide de 200 g descend un plan incliné sans frottement. À l’altitude $h_1 = 4$ m (le sol étant la référence), sa vitesse est $v_1 = 1{,}25$ m·s⁻¹ : on calcule $E_C$ et $E_P$, puis on les additionne.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p02_q2",
            "type": "mcq",
            "prompt": "Un solide de masse $m = 200\\,\\mathrm{g}$ descend un plan incliné. À l’altitude $h_1 = 4\\,\\mathrm{m}$ au-dessus du sol (référence), sa vitesse est $v_1 = 1{,}25\\,\\mathrm{m\\cdot s^{-1}}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est son énergie mécanique ?",
            "options": [
              "8,16 J",
              "8 J",
              "0,16 J",
              "7,84 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_C = \\frac{1}{2} \\times 0{,}2 \\times 1{,}25^2 \\approx 0{,}16\\,\\mathrm{J}$ ; $E_P = 0{,}2 \\times 10 \\times 4 = 8\\,\\mathrm{J}$ ; $E_M \\approx 8{,}16\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Part cinétique",
          "stepTheme": "v au carré",
          "stepTitle": "Calculer la part cinétique sans se tromper",
          "paragraphText": "$E_C = \\frac{1}{2}mv^2$ : on élève d’abord la vitesse au carré, puis on multiplie par la moitié de la masse exprimée en kg.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p02_q3",
            "type": "mcq",
            "prompt": "Un solide de masse $m = 200\\,\\mathrm{g}$ se déplace à la vitesse $v = 1{,}25\\,\\mathrm{m\\cdot s^{-1}}$. Quelle est son énergie cinétique ?",
            "options": [
              "≈ 0,16 J",
              "≈ 0,31 J",
              "≈ 156 J",
              "0,125 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_C = \\frac{1}{2} \\times 0{,}2 \\times 1{,}5625 \\approx 0{,}16\\,\\mathrm{J}$ (156 J : masse laissée en grammes ; 0,125 J : vitesse non élevée au carré)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Avec un ressort",
          "stepTheme": "Pendule élastique",
          "stepTitle": "Énergie mécanique d’un pendule élastique horizontal",
          "paragraphText": "Pour un solide accroché à un ressort horizontal, l’énergie potentielle est élastique : $E_M = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$, où $x$ est l’allongement du ressort.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p02_q4",
            "type": "mcq",
            "prompt": "Un solide de masse $m = 0{,}5\\,\\mathrm{kg}$, accroché à un ressort horizontal de raideur $k = 100\\,\\mathrm{N\\cdot m^{-1}}$, passe à la vitesse $v = 2\\,\\mathrm{m\\cdot s^{-1}}$ quand l’allongement du ressort est $x = 0{,}1\\,\\mathrm{m}$. Quelle est son énergie mécanique ?",
            "options": [
              "1,5 J",
              "1 J",
              "0,5 J",
              "11 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_M = \\frac{1}{2} \\times 0{,}5 \\times 2^2 + \\frac{1}{2} \\times 100 \\times 0{,}1^2 = 1 + 0{,}5 = 1{,}5\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Boule lancée",
          "stepTheme": "Exercice 1",
          "stepTitle": "Énergie mécanique au lancement",
          "paragraphText": "Une boule lancée verticalement possède à la fois de l’énergie cinétique (sa vitesse) et de l’énergie potentielle (sa hauteur au-dessus du sol).",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p02_q5",
            "type": "mcq",
            "prompt": "Une boule de masse $m = 500\\,\\mathrm{g}$ est lancée verticalement avec une vitesse $v = 5\\,\\mathrm{m\\cdot s^{-1}}$ depuis une hauteur $h = 3\\,\\mathrm{m}$ au-dessus du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$, référence : le sol). Quelle est son énergie mécanique au lancement ?",
            "options": [
              "21,25 J",
              "15 J",
              "6,25 J",
              "27,5 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_M = \\frac{1}{2} \\times 0{,}5 \\times 5^2 + 0{,}5 \\times 10 \\times 3 = 6{,}25 + 15 = 21{,}25\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Référence",
          "stepTheme": "EM dépend de la référence",
          "stepTitle": "L’énergie mécanique dépend de la référence",
          "paragraphText": "La valeur de $E_M$ dépend de la référence choisie pour $E_P$. Si la référence est le point de lancement lui-même, $E_P = 0$ en ce point et $E_M = E_C$.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p02_q6",
            "type": "mcq",
            "prompt": "Une boule de masse $500\\,\\mathrm{g}$ est lancée à $v = 5\\,\\mathrm{m\\cdot s^{-1}}$ depuis une hauteur de $3\\,\\mathrm{m}$ au-dessus du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). On prend cette fois le point de lancement comme référence des énergies potentielles. Que vaut son énergie mécanique au lancement ?",
            "options": [
              "6,25 J",
              "21,25 J",
              "15 J",
              "0 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au point de lancement, $E_P = 0$ : $E_M = E_C = \\frac{1}{2} \\times 0{,}5 \\times 25 = 6{,}25\\,\\mathrm{J}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p02_q1",
          "type": "mcq",
          "prompt": "À un instant donné, un solide possède une énergie cinétique $E_C = 2\\,\\mathrm{J}$ et une énergie potentielle de pesanteur $E_P = 5\\,\\mathrm{J}$. Quelle est son énergie mécanique à cet instant ?",
          "options": [
            "7 J",
            "3 J",
            "10 J",
            "2,5 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_M = E_C + E_P = 2 + 5 = 7\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p02_q2",
          "type": "mcq",
          "prompt": "Un solide de masse $m = 200\\,\\mathrm{g}$ descend un plan incliné. À l’altitude $h_1 = 4\\,\\mathrm{m}$ au-dessus du sol (référence), sa vitesse est $v_1 = 1{,}25\\,\\mathrm{m\\cdot s^{-1}}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est son énergie mécanique ?",
          "options": [
            "8,16 J",
            "8 J",
            "0,16 J",
            "7,84 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_C = \\frac{1}{2} \\times 0{,}2 \\times 1{,}25^2 \\approx 0{,}16\\,\\mathrm{J}$ ; $E_P = 0{,}2 \\times 10 \\times 4 = 8\\,\\mathrm{J}$ ; $E_M \\approx 8{,}16\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p02_q3",
          "type": "mcq",
          "prompt": "Un solide de masse $m = 200\\,\\mathrm{g}$ se déplace à la vitesse $v = 1{,}25\\,\\mathrm{m\\cdot s^{-1}}$. Quelle est son énergie cinétique ?",
          "options": [
            "≈ 0,16 J",
            "≈ 0,31 J",
            "≈ 156 J",
            "0,125 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_C = \\frac{1}{2} \\times 0{,}2 \\times 1{,}5625 \\approx 0{,}16\\,\\mathrm{J}$ (156 J : masse laissée en grammes ; 0,125 J : vitesse non élevée au carré)."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p02_q4",
          "type": "mcq",
          "prompt": "Un solide de masse $m = 0{,}5\\,\\mathrm{kg}$, accroché à un ressort horizontal de raideur $k = 100\\,\\mathrm{N\\cdot m^{-1}}$, passe à la vitesse $v = 2\\,\\mathrm{m\\cdot s^{-1}}$ quand l’allongement du ressort est $x = 0{,}1\\,\\mathrm{m}$. Quelle est son énergie mécanique ?",
          "options": [
            "1,5 J",
            "1 J",
            "0,5 J",
            "11 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_M = \\frac{1}{2} \\times 0{,}5 \\times 2^2 + \\frac{1}{2} \\times 100 \\times 0{,}1^2 = 1 + 0{,}5 = 1{,}5\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p02_q5",
          "type": "mcq",
          "prompt": "Une boule de masse $m = 500\\,\\mathrm{g}$ est lancée verticalement avec une vitesse $v = 5\\,\\mathrm{m\\cdot s^{-1}}$ depuis une hauteur $h = 3\\,\\mathrm{m}$ au-dessus du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$, référence : le sol). Quelle est son énergie mécanique au lancement ?",
          "options": [
            "21,25 J",
            "15 J",
            "6,25 J",
            "27,5 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_M = \\frac{1}{2} \\times 0{,}5 \\times 5^2 + 0{,}5 \\times 10 \\times 3 = 6{,}25 + 15 = 21{,}25\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p02_q6",
          "type": "mcq",
          "prompt": "Une boule de masse $500\\,\\mathrm{g}$ est lancée à $v = 5\\,\\mathrm{m\\cdot s^{-1}}$ depuis une hauteur de $3\\,\\mathrm{m}$ au-dessus du sol ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). On prend cette fois le point de lancement comme référence des énergies potentielles. Que vaut son énergie mécanique au lancement ?",
          "options": [
            "6,25 J",
            "21,25 J",
            "15 J",
            "0 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au point de lancement, $E_P = 0$ : $E_M = E_C = \\frac{1}{2} \\times 0{,}5 \\times 25 = 6{,}25\\,\\mathrm{J}$."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p5_energie_mecanique_p03",
      "order": 3,
      "title": "Conservation de l’énergie mécanique",
      "summary": "Montrer que EM se conserve en chute libre et sur un plan incliné sans frottement, puis s’en servir pour calculer des vitesses.",
      "conceptExplanation": "- Chute libre : le théorème de l’énergie cinétique entre A et B donne $\\frac{1}{2}mv_B^2 - \\frac{1}{2}mv_A^2 = mg(z_A - z_B)$, soit $E_{M_B} = E_{M_A}$ : l’énergie mécanique se conserve ($\\Delta E_M = 0$).\n- Plan incliné sans frottement : la réaction $\\vec{R}$ est perpendiculaire au déplacement, son travail est nul ; seul le poids travaille et $E_M$ se conserve encore.\n- Condition : en l’absence de forces de frottement, l’énergie mécanique d’un système se conserve. Le système est dit conservatif ; le poids est une force conservative.\n- Méthode : on écrit $E_M$ (départ) $= E_M$ (arrivée), puis on isole la grandeur cherchée (vitesse ou hauteur).",
      "keyRule": "Sans frottement : EM(A) = EM(B). Départ au repos depuis l’altitude zA : v = √(2g(zA − z)).",
      "formulas": [
        {
          "name": "Conservation de l’énergie mécanique",
          "formula": "\\frac{1}{2}mv_A^2 + mgz_A = \\frac{1}{2}mv_B^2 + mgz_B",
          "note": "Sans frottement (système conservatif)"
        }
      ],
      "workedExample": {
        "title": "Exercice 2 corrigé : le rocher qui tombe d’une falaise",
        "statement": "Un rocher de $300\\,\\mathrm{kg}$ se détache sans vitesse d’une falaise, à $H = 240\\,\\mathrm{m}$ au-dessus du niveau de la mer ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$, chute libre). Calculer son énergie mécanique initiale, puis son énergie cinétique et sa vitesse à l’altitude $\\frac{H}{4}$.",
        "methodSteps": [
          "EM,i = 0 + mgH = 300 × 10 × 240 = 720 kJ.",
          "À H/4 : EC = mgH − mgH/4 = ¾ mgH = 540 kJ ; EP = 180 kJ.",
          "½mv² = ¾ mgH, donc v = √(1,5 × 10 × 240) = 60 m/s."
        ],
        "conclusion": "À 60 m d’altitude, le rocher a 540 kJ d’énergie cinétique et va à 60 m/s."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepBadge": "Chute libre",
          "stepTheme": "ΔEM = 0",
          "stepTitle": "En chute libre, l’énergie mécanique se conserve",
          "paragraphText": "Entre deux positions A et B d’une chute libre, seul le poids travaille. Le théorème de l’énergie cinétique donne $E_{C_B} - E_{C_A} = mg(z_A - z_B)$, d’où $E_{C_B} + E_{P_B} = E_{C_A} + E_{P_A}$ : $E_{M_B} = E_{M_A}$.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p03_q1",
            "type": "mcq",
            "prompt": "Un solide est en chute libre entre deux positions A et B. Que peut-on dire de la variation de son énergie mécanique $\\Delta E_M = E_{M_B} - E_{M_A}$ ?",
            "options": [
              "$\\Delta E_M = 0$ : l’énergie mécanique se conserve",
              "$\\Delta E_M > 0$ car la vitesse augmente",
              "$\\Delta E_M < 0$ car le solide descend",
              "$\\Delta E_M$ est égale au travail du poids"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La hausse de $E_C$ compense exactement la baisse de $E_P$ : $\\Delta E_M = 0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "Plan incliné",
          "stepTheme": "W(R) = 0",
          "stepTitle": "Pourquoi la réaction ne change pas l’énergie mécanique",
          "paragraphText": "Sur un plan incliné **sans frottement**, la réaction $\\vec{R}$ du support est perpendiculaire au déplacement : $W(\\vec{R}) = 0$. Seul le poids travaille, donc $E_M$ se conserve.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p03_q2",
            "type": "mcq",
            "prompt": "Un solide glisse sans frottement le long d’un plan incliné. Pourquoi le travail de la réaction $\\vec{R}$ du plan est-il nul ?",
            "options": [
              "Parce que $\\vec{R}$ est perpendiculaire au déplacement",
              "Parce que $\\vec{R}$ a la même valeur que le poids",
              "Parce que le solide descend",
              "Parce que $\\vec{R}$ est parallèle au plan"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une force perpendiculaire au déplacement ne travaille pas : $W(\\vec{R}) = R \\times AB \\times \\cos 90^\\circ = 0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Système conservatif",
          "stepTheme": "Définition",
          "stepTitle": "Quand dit-on qu’un système est conservatif ?",
          "paragraphText": "Un système est dit **conservatif** quand son énergie mécanique se conserve. C’est le cas en l’absence de forces de frottement : le poids est une force conservative.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p03_q3",
            "type": "mcq",
            "prompt": "Un système est dit conservatif si :",
            "options": [
              "son énergie mécanique se conserve",
              "son énergie cinétique se conserve",
              "son énergie potentielle de pesanteur se conserve",
              "sa vitesse reste constante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la somme EC + EP qui reste constante ; EC et EP, elles, s’échangent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Rocher",
          "stepTheme": "Départ au repos",
          "stepTitle": "Énergie mécanique d’un rocher qui se détache",
          "paragraphText": "Un rocher qui se détache sans vitesse d’une falaise n’a au départ que de l’énergie potentielle : $E_{M,i} = mgH$ (référence : le niveau de la mer).",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p03_q4",
            "type": "mcq",
            "prompt": "Un rocher de masse $m = 300\\,\\mathrm{kg}$ se détache sans vitesse d’une falaise, à l’altitude $H = 240\\,\\mathrm{m}$ au-dessus du niveau de la mer ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$, référence : niveau de la mer). Quelle est son énergie mécanique initiale ?",
            "options": [
              "720 kJ",
              "72 kJ",
              "7,2 kJ",
              "720 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_{M,i} = 0 + mgH = 300 \\times 10 \\times 240 = 720\\,000\\,\\mathrm{J} = 720\\,\\mathrm{kJ}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Altitude H/4",
          "stepTheme": "EC = ¾ mgH",
          "stepTitle": "Énergie cinétique au quart de la hauteur",
          "paragraphText": "En chute libre, $E_M$ reste égale à $mgH$. À l’altitude $\\frac{H}{4}$ : $E_C = mgH - mg\\frac{H}{4} = \\frac{3}{4}mgH$.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p03_q5",
            "type": "mcq",
            "prompt": "Un rocher de $300\\,\\mathrm{kg}$ tombe en chute libre, sans vitesse initiale, depuis l’altitude $H = 240\\,\\mathrm{m}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$, référence : niveau de la mer). Quelle est son énergie cinétique quand il passe à l’altitude $60\\,\\mathrm{m}$ ?",
            "options": [
              "540 kJ",
              "180 kJ",
              "720 kJ",
              "360 kJ"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_C = mg(H - 60) = 300 \\times 10 \\times 180 = 540\\,000\\,\\mathrm{J} = 540\\,\\mathrm{kJ}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Vitesse",
          "stepTheme": "v = √(2gΔh)",
          "stepTitle": "Déduire la vitesse de l’énergie cinétique",
          "paragraphText": "De $\\frac{1}{2}mv^2 = mg\\,\\Delta h$ (hauteur de chute $\\Delta h$), on tire $v = \\sqrt{2g\\,\\Delta h}$ : la masse se simplifie.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p03_q6",
            "type": "mcq",
            "prompt": "Un rocher tombe en chute libre sans vitesse initiale depuis l’altitude $H = 240\\,\\mathrm{m}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est sa vitesse quand il passe à l’altitude $60\\,\\mathrm{m}$ ?",
            "options": [
              "60 m·s⁻¹",
              "30 m·s⁻¹",
              "≈ 69 m·s⁻¹",
              "3 600 m·s⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il est descendu de $180\\,\\mathrm{m}$ : $v = \\sqrt{2 \\times 10 \\times 180} = \\sqrt{3\\,600} = 60\\,\\mathrm{m\\cdot s^{-1}}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Basket",
          "stepTheme": "Ballon qui monte",
          "stepTitle": "Vitesse du ballon dans le panier",
          "paragraphText": "Sans frottement, $\\frac{1}{2}mv_A^2 + mgh_A = \\frac{1}{2}mv_B^2 + mgh_B$, donc $v_B = \\sqrt{v_A^2 + 2g(h_A - h_B)}$. Le ballon monte ($h_B > h_A$) : il arrive moins vite qu’au lancer.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p03_q7",
            "type": "mcq",
            "prompt": "Un basketteur lance le ballon d’un point A situé à $h_A = 2\\,\\mathrm{m}$ du sol avec la vitesse $v_A = 9{,}1\\,\\mathrm{m\\cdot s^{-1}}$. Le panier B est à $h_B = 3{,}05\\,\\mathrm{m}$ du sol. Frottements négligés, $g = 10\\,\\mathrm{N\\cdot kg^{-1}}$. Quelle est la vitesse du ballon quand il entre dans le panier ?",
            "options": [
              "≈ 7,86 m·s⁻¹",
              "≈ 10,2 m·s⁻¹",
              "9,1 m·s⁻¹",
              "≈ 4,58 m·s⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$v_B = \\sqrt{9{,}1^2 + 2 \\times 10 \\times (2 - 3{,}05)} = \\sqrt{82{,}81 - 21} \\approx 7{,}86\\,\\mathrm{m\\cdot s^{-1}}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p03_q1",
          "type": "mcq",
          "prompt": "Un solide est en chute libre entre deux positions A et B. Que peut-on dire de la variation de son énergie mécanique $\\Delta E_M = E_{M_B} - E_{M_A}$ ?",
          "options": [
            "$\\Delta E_M = 0$ : l’énergie mécanique se conserve",
            "$\\Delta E_M > 0$ car la vitesse augmente",
            "$\\Delta E_M < 0$ car le solide descend",
            "$\\Delta E_M$ est égale au travail du poids"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La hausse de $E_C$ compense exactement la baisse de $E_P$ : $\\Delta E_M = 0$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p03_q2",
          "type": "mcq",
          "prompt": "Un solide glisse sans frottement le long d’un plan incliné. Pourquoi le travail de la réaction $\\vec{R}$ du plan est-il nul ?",
          "options": [
            "Parce que $\\vec{R}$ est perpendiculaire au déplacement",
            "Parce que $\\vec{R}$ a la même valeur que le poids",
            "Parce que le solide descend",
            "Parce que $\\vec{R}$ est parallèle au plan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une force perpendiculaire au déplacement ne travaille pas : $W(\\vec{R}) = R \\times AB \\times \\cos 90^\\circ = 0$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p03_q3",
          "type": "mcq",
          "prompt": "Un système est dit conservatif si :",
          "options": [
            "son énergie mécanique se conserve",
            "son énergie cinétique se conserve",
            "son énergie potentielle de pesanteur se conserve",
            "sa vitesse reste constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la somme EC + EP qui reste constante ; EC et EP, elles, s’échangent."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p03_q4",
          "type": "mcq",
          "prompt": "Un rocher de masse $m = 300\\,\\mathrm{kg}$ se détache sans vitesse d’une falaise, à l’altitude $H = 240\\,\\mathrm{m}$ au-dessus du niveau de la mer ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$, référence : niveau de la mer). Quelle est son énergie mécanique initiale ?",
          "options": [
            "720 kJ",
            "72 kJ",
            "7,2 kJ",
            "720 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_{M,i} = 0 + mgH = 300 \\times 10 \\times 240 = 720\\,000\\,\\mathrm{J} = 720\\,\\mathrm{kJ}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p03_q5",
          "type": "mcq",
          "prompt": "Un rocher de $300\\,\\mathrm{kg}$ tombe en chute libre, sans vitesse initiale, depuis l’altitude $H = 240\\,\\mathrm{m}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$, référence : niveau de la mer). Quelle est son énergie cinétique quand il passe à l’altitude $60\\,\\mathrm{m}$ ?",
          "options": [
            "540 kJ",
            "180 kJ",
            "720 kJ",
            "360 kJ"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_C = mg(H - 60) = 300 \\times 10 \\times 180 = 540\\,000\\,\\mathrm{J} = 540\\,\\mathrm{kJ}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p03_q6",
          "type": "mcq",
          "prompt": "Un rocher tombe en chute libre sans vitesse initiale depuis l’altitude $H = 240\\,\\mathrm{m}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est sa vitesse quand il passe à l’altitude $60\\,\\mathrm{m}$ ?",
          "options": [
            "60 m·s⁻¹",
            "30 m·s⁻¹",
            "≈ 69 m·s⁻¹",
            "3 600 m·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il est descendu de $180\\,\\mathrm{m}$ : $v = \\sqrt{2 \\times 10 \\times 180} = \\sqrt{3\\,600} = 60\\,\\mathrm{m\\cdot s^{-1}}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p03_q7",
          "type": "mcq",
          "prompt": "Un basketteur lance le ballon d’un point A situé à $h_A = 2\\,\\mathrm{m}$ du sol avec la vitesse $v_A = 9{,}1\\,\\mathrm{m\\cdot s^{-1}}$. Le panier B est à $h_B = 3{,}05\\,\\mathrm{m}$ du sol. Frottements négligés, $g = 10\\,\\mathrm{N\\cdot kg^{-1}}$. Quelle est la vitesse du ballon quand il entre dans le panier ?",
          "options": [
            "≈ 7,86 m·s⁻¹",
            "≈ 10,2 m·s⁻¹",
            "9,1 m·s⁻¹",
            "≈ 4,58 m·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$v_B = \\sqrt{9{,}1^2 + 2 \\times 10 \\times (2 - 3{,}05)} = \\sqrt{82{,}81 - 21} \\approx 7{,}86\\,\\mathrm{m\\cdot s^{-1}}$."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p5_energie_mecanique_p04",
      "order": 4,
      "title": "Applications : pistes et plans inclinés sans frottement",
      "summary": "Utiliser la conservation de EM pour trouver vitesses, point de vitesse maximale et hauteur de remontée.",
      "conceptExplanation": "- Voiturette sur une piste lisse : partie de A ($z_A = 3$ m) sans vitesse, elle passe par le creux B (1,5 m), la bosse C (2,7 m) et le creux D (1 m). Comme $E_M$ est constante : $v = \\sqrt{2g(z_A - z)}$ en tout point d’altitude $z$.\n- L’énergie cinétique est maximale là où l’altitude est minimale.\n- Le solide s’arrête et rebrousse chemin à l’altitude de départ $z_A$ : il ne peut pas monter plus haut.\n- Deux plans inclinés : un solide lâché en B sur un plan d’angle $\\beta = 30^\\circ$ (avec $OK = 10$ cm) part de l’altitude $z_B = OK\\tan\\beta$ ; il remonte sur l’autre plan jusqu’à la même altitude, quel que soit l’angle de ce plan.",
      "keyRule": "Piste sans frottement, départ au repos : v = √(2g(zA − z)) ; le solide remonte au plus jusqu’à son altitude de départ.",
      "formulas": [
        {
          "name": "Vitesse sur une piste sans frottement (départ au repos)",
          "formula": "v = \\sqrt{2g(z_A - z)}",
          "note": "zA : altitude du point de départ"
        }
      ],
      "workedExample": {
        "title": "Exercice 4 corrigé : la voiturette sur la piste ABCD",
        "statement": "Une voiturette part sans vitesse de A ($z_A = 3\\,\\mathrm{m}$) et glisse sans frottement sur une piste passant par B ($1{,}5\\,\\mathrm{m}$), C ($2{,}7\\,\\mathrm{m}$) et D ($1\\,\\mathrm{m}$), avec $g = 10\\,\\mathrm{N\\cdot kg^{-1}}$. Calculer $v_C$ et $v_D$, trouver où $E_C$ est maximale et jusqu’où elle remonte après D.",
        "methodSteps": [
          "EM(A) = EM(C) : vC = √(2 × 10 × (3 − 2,7)) ≈ 2,45 m/s.",
          "EM(A) = EM(D) : vD = √(2 × 10 × (3 − 1)) ≈ 6,32 m/s.",
          "EC = mg(zA − z) est maximale pour z minimale : au point D.",
          "Au point d’arrêt F, EC = 0 : zF = zA = 3 m."
        ],
        "conclusion": "La voiturette remonte exactement au niveau de A, jamais plus haut."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Bosse C",
          "stepTheme": "v = √(2g(zA − z))",
          "stepTitle": "Vitesse au sommet d’une bosse",
          "paragraphText": "Voiturette partie de A au repos ($z_A = 3$ m) sur une piste lisse : $mgz_A = \\frac{1}{2}mv_C^2 + mgz_C$, donc $v_C = \\sqrt{2g(z_A - z_C)}$.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p04_q1",
            "type": "mcq",
            "prompt": "Une voiturette part sans vitesse d’un point A d’altitude $z_A = 3\\,\\mathrm{m}$ et glisse sans frottement sur une piste. Quelle est sa vitesse au sommet C d’une bosse d’altitude $z_C = 2{,}7\\,\\mathrm{m}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$) ?",
            "options": [
              "≈ 2,45 m·s⁻¹",
              "≈ 7,35 m·s⁻¹",
              "6 m·s⁻¹",
              "≈ 0,77 m·s⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$v_C = \\sqrt{2 \\times 10 \\times (3 - 2{,}7)} = \\sqrt{6} \\approx 2{,}45\\,\\mathrm{m\\cdot s^{-1}}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Creux D",
          "stepTheme": "Point bas",
          "stepTitle": "Vitesse au fond d’un creux",
          "paragraphText": "Même méthode au creux D : $v_D = \\sqrt{2g(z_A - z_D)}$. Plus le point est bas, plus la voiturette va vite.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p04_q2",
            "type": "mcq",
            "prompt": "Une voiturette part sans vitesse d’un point A d’altitude $z_A = 3\\,\\mathrm{m}$ et glisse sans frottement. Quelle est sa vitesse au fond D d’un creux d’altitude $z_D = 1\\,\\mathrm{m}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$) ?",
            "options": [
              "≈ 6,32 m·s⁻¹",
              "≈ 4,47 m·s⁻¹",
              "≈ 7,75 m·s⁻¹",
              "40 m·s⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$v_D = \\sqrt{2 \\times 10 \\times (3 - 1)} = \\sqrt{40} \\approx 6{,}32\\,\\mathrm{m\\cdot s^{-1}}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "EC maximale",
          "stepTheme": "Point le plus bas",
          "stepTitle": "Où l’énergie cinétique est-elle maximale ?",
          "paragraphText": "Avec $E_M$ constante : $E_C = mg(z_A - z)$. $E_C$ est maximale quand $z$ est minimale, c’est-à-dire au point le plus bas de la piste.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p04_q3",
            "type": "mcq",
            "prompt": "Une voiturette partie au repos de A (altitude 3 m) glisse sans frottement et passe par B (1,5 m), C (2,7 m) puis D (1 m). En quel point son énergie cinétique est-elle maximale ?",
            "options": [
              "En D",
              "En B",
              "En C",
              "En A"
            ],
            "correctAnswerIndex": 0,
            "explanation": "EC = mg(zA − z) est la plus grande là où z est la plus petite : en D (1 m)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Hauteur maximale",
          "stepTheme": "zF = zA",
          "stepTitle": "Jusqu’où la voiturette peut-elle remonter ?",
          "paragraphText": "Au point F où la voiturette s’arrête, $E_C = 0$ : $mgz_A = mgz_F$, donc $z_F = z_A$. Sans frottement, elle remonte exactement à son altitude de départ, jamais plus haut.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p04_q4",
            "type": "mcq",
            "prompt": "Une voiturette part sans vitesse d’un point A d’altitude $3\\,\\mathrm{m}$ et glisse sans frottement sur une piste qui remonte après un creux situé à $1\\,\\mathrm{m}$. À quelle altitude maximale peut-elle remonter ?",
            "options": [
              "3 m, l’altitude de départ",
              "2 m",
              "4 m",
              "1 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au point d’arrêt, $E_C = 0$ et $E_M$ conservée : $mgz_F = mgz_A$, donc $z_F = 3\\,\\mathrm{m}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Plans inclinés",
          "stepTheme": "Lâcher en B",
          "stepTitle": "Vitesse au bas d’un plan incliné",
          "paragraphText": "Un solide lâché sans vitesse en B, sur un plan incliné d’angle $\\beta = 30^\\circ$ avec $OK = 10$ cm, est à l’altitude $z_B = OK\\tan\\beta \\approx 0{,}058$ m au-dessus de O. Au passage en O : $\\frac{1}{2}mv_O^2 = mgz_B$.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p04_q5",
            "type": "mcq",
            "prompt": "Un solide est lâché sans vitesse au point B d’un plan incliné, situé à l’altitude $z_B = 0{,}1 \\times \\tan 30^\\circ \\approx 0{,}058\\,\\mathrm{m}$ au-dessus du point O. Il glisse sans frottement jusqu’en O ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est sa vitesse en O ?",
            "options": [
              "≈ 1,07 m·s⁻¹",
              "≈ 1,41 m·s⁻¹",
              "≈ 0,34 m·s⁻¹",
              "≈ 1,16 m·s⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$v_O = \\sqrt{2gz_B} = \\sqrt{2 \\times 10 \\times 0{,}0577} \\approx 1{,}07\\,\\mathrm{m\\cdot s^{-1}}$ (le corrigé officiel arrondit à 1,1 m·s⁻¹)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Remontée",
          "stepTheme": "zG = zB",
          "stepTitle": "Hauteur atteinte sur l’autre plan incliné",
          "paragraphText": "Le solide remonte ensuite un plan d’angle $\\alpha = 40^\\circ$. Il s’arrête en G quand $E_C = 0$ : $mgz_G = mgz_B$, donc $z_G = z_B$, quel que soit l’angle $\\alpha$.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p04_q6",
            "type": "mcq",
            "prompt": "Un solide lâché sans vitesse en B, à l’altitude $z_B \\approx 0{,}058\\,\\mathrm{m}$, descend jusqu’en O puis remonte sans frottement un autre plan incliné d’angle $\\alpha = 40^\\circ$. À quelle altitude $z_G$ sa vitesse s’annule-t-elle ?",
            "options": [
              "≈ 0,058 m",
              "≈ 0,084 m",
              "≈ 0,069 m",
              "0,1 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Conservation de $E_M$ : $z_G = z_B \\approx 0{,}058\\,\\mathrm{m}$ ; l’angle $\\alpha$ change seulement la distance parcourue sur la pente."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p04_q1",
          "type": "mcq",
          "prompt": "Une voiturette part sans vitesse d’un point A d’altitude $z_A = 3\\,\\mathrm{m}$ et glisse sans frottement sur une piste. Quelle est sa vitesse au sommet C d’une bosse d’altitude $z_C = 2{,}7\\,\\mathrm{m}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$) ?",
          "options": [
            "≈ 2,45 m·s⁻¹",
            "≈ 7,35 m·s⁻¹",
            "6 m·s⁻¹",
            "≈ 0,77 m·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$v_C = \\sqrt{2 \\times 10 \\times (3 - 2{,}7)} = \\sqrt{6} \\approx 2{,}45\\,\\mathrm{m\\cdot s^{-1}}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p04_q2",
          "type": "mcq",
          "prompt": "Une voiturette part sans vitesse d’un point A d’altitude $z_A = 3\\,\\mathrm{m}$ et glisse sans frottement. Quelle est sa vitesse au fond D d’un creux d’altitude $z_D = 1\\,\\mathrm{m}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$) ?",
          "options": [
            "≈ 6,32 m·s⁻¹",
            "≈ 4,47 m·s⁻¹",
            "≈ 7,75 m·s⁻¹",
            "40 m·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$v_D = \\sqrt{2 \\times 10 \\times (3 - 1)} = \\sqrt{40} \\approx 6{,}32\\,\\mathrm{m\\cdot s^{-1}}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p04_q3",
          "type": "mcq",
          "prompt": "Une voiturette partie au repos de A (altitude 3 m) glisse sans frottement et passe par B (1,5 m), C (2,7 m) puis D (1 m). En quel point son énergie cinétique est-elle maximale ?",
          "options": [
            "En D",
            "En B",
            "En C",
            "En A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "EC = mg(zA − z) est la plus grande là où z est la plus petite : en D (1 m)."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p04_q4",
          "type": "mcq",
          "prompt": "Une voiturette part sans vitesse d’un point A d’altitude $3\\,\\mathrm{m}$ et glisse sans frottement sur une piste qui remonte après un creux situé à $1\\,\\mathrm{m}$. À quelle altitude maximale peut-elle remonter ?",
          "options": [
            "3 m, l’altitude de départ",
            "2 m",
            "4 m",
            "1 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au point d’arrêt, $E_C = 0$ et $E_M$ conservée : $mgz_F = mgz_A$, donc $z_F = 3\\,\\mathrm{m}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p04_q5",
          "type": "mcq",
          "prompt": "Un solide est lâché sans vitesse au point B d’un plan incliné, situé à l’altitude $z_B = 0{,}1 \\times \\tan 30^\\circ \\approx 0{,}058\\,\\mathrm{m}$ au-dessus du point O. Il glisse sans frottement jusqu’en O ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est sa vitesse en O ?",
          "options": [
            "≈ 1,07 m·s⁻¹",
            "≈ 1,41 m·s⁻¹",
            "≈ 0,34 m·s⁻¹",
            "≈ 1,16 m·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$v_O = \\sqrt{2gz_B} = \\sqrt{2 \\times 10 \\times 0{,}0577} \\approx 1{,}07\\,\\mathrm{m\\cdot s^{-1}}$ (le corrigé officiel arrondit à 1,1 m·s⁻¹)."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p04_q6",
          "type": "mcq",
          "prompt": "Un solide lâché sans vitesse en B, à l’altitude $z_B \\approx 0{,}058\\,\\mathrm{m}$, descend jusqu’en O puis remonte sans frottement un autre plan incliné d’angle $\\alpha = 40^\\circ$. À quelle altitude $z_G$ sa vitesse s’annule-t-elle ?",
          "options": [
            "≈ 0,058 m",
            "≈ 0,084 m",
            "≈ 0,069 m",
            "0,1 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Conservation de $E_M$ : $z_G = z_B \\approx 0{,}058\\,\\mathrm{m}$ ; l’angle $\\alpha$ change seulement la distance parcourue sur la pente."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p5_energie_mecanique_p05",
      "order": 5,
      "title": "Non-conservation : le rôle des frottements",
      "summary": "Montrer que ΔEM = W(f) < 0 en présence de frottements et l’appliquer à un cube sur un profil ABCD.",
      "conceptExplanation": "- Avec frottements : le solide est soumis à son poids $\\vec{P}$, à la réaction normale $\\vec{R}$ et à une force de frottement $\\vec{f}$ opposée au mouvement.\n- Le théorème de l’énergie cinétique donne $\\Delta E_C = W(\\vec{P}) + W(\\vec{f})$ et, comme $\\Delta E_P = -W(\\vec{P})$ : $\\Delta E_M = W(\\vec{f})$.\n- Le travail des frottements est résistant : $\\Delta E_M = W(\\vec{f}) < 0$. Le système perd de l’énergie mécanique (transformée en chaleur) : il est dit dissipatif, et $\\vec{f}$ est une force non conservative.\n- Sur un trajet rectiligne de longueur $L$ avec une force de frottement constante d’intensité $f$ : $W(\\vec{f}) = -f \\times L$.",
      "keyRule": "Avec frottements : ΔEM = W(f) = −f × L < 0. L’énergie perdue est transformée en chaleur.",
      "formulas": [
        {
          "name": "Non-conservation de l’énergie mécanique",
          "formula": "\\Delta E_M = W(\\vec{f}) = -f \\cdot L",
          "note": "f en N, L en m"
        }
      ],
      "workedExample": {
        "title": "Situation d’évaluation : le cube sur le profil ABCD",
        "statement": "Un cube de $1\\,\\mathrm{kg}$ est lâché sans vitesse sur le plan AB, à $h_1 = 1\\,\\mathrm{m}$ au-dessus de BC ; les pentes AB et CD (30°) sont sans frottement, la partie horizontale BC ($L = 2\\,\\mathrm{m}$) exerce un frottement $f = 3{,}92\\,\\mathrm{N}$ ($g = 9{,}8\\,\\mathrm{N\\cdot kg^{-1}}$, $E_P = 0$ sur BC). Calculer $E_{M1}$, $E_{M2}$ en C, $v_C$ et la hauteur de demi-tour $h_2$.",
        "methodSteps": [
          "EM1 = 0 + mgh₁ = 1 × 9,8 × 1 = 9,8 J ; sur AB, EM se conserve.",
          "Sur BC : EM2 = EM1 − f × L = 9,8 − 3,92 × 2 = 1,96 J.",
          "En C, EP = 0 : vC = √(2 × 1,96 ÷ 1) ≈ 2 m/s.",
          "Sur CD, EM se conserve : mgh₂ = 1,96 J, donc h₂ = 0,2 m."
        ],
        "conclusion": "Les frottements sur BC ont fait perdre 7,84 J : le cube ne remonte qu’à 0,2 m au lieu de 1 m."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepBadge": "ΔEM = W(f)",
          "stepTheme": "Bilan avec frottements",
          "stepTitle": "Ce que deviennent les frottements dans le bilan",
          "paragraphText": "Quand des frottements agissent, la variation d’énergie mécanique est égale au travail des forces de frottement : $\\Delta E_M = W(\\vec{f})$.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p05_q1",
            "type": "mcq",
            "prompt": "Un solide glisse sur un plan incliné en subissant son poids $\\vec{P}$, la réaction normale $\\vec{R}$ et une force de frottement $\\vec{f}$. À quoi est égale la variation de son énergie mécanique entre A et B ?",
            "options": [
              "Au travail de la force de frottement $W_{AB}(\\vec{f})$",
              "Au travail du poids $W_{AB}(\\vec{P})$",
              "Au travail de la réaction $W_{AB}(\\vec{R})$",
              "À zéro, car l’énergie mécanique se conserve toujours"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\Delta E_C = W(\\vec{P}) + W(\\vec{f})$ et $\\Delta E_P = -W(\\vec{P})$, donc $\\Delta E_M = W(\\vec{f})$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepBadge": "Système dissipatif",
          "stepTheme": "ΔEM < 0",
          "stepTitle": "Les frottements font toujours perdre de l’énergie",
          "paragraphText": "La force de frottement est opposée au mouvement : son travail est **résistant**, donc $\\Delta E_M = W(\\vec{f}) < 0$. Le système est **dissipatif** : l’énergie perdue se transforme en chaleur.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p05_q2",
            "type": "mcq",
            "prompt": "Un cube glisse sur une piste horizontale avec frottements. Quel est le signe de la variation de son énergie mécanique, et que devient l’énergie perdue ?",
            "options": [
              "$\\Delta E_M < 0$ ; elle est transformée en chaleur",
              "$\\Delta E_M > 0$ ; elle augmente la vitesse",
              "$\\Delta E_M = 0$ ; rien n’est perdu",
              "$\\Delta E_M < 0$ ; elle disparaît sans laisser de trace"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le travail des frottements est négatif ; l’énergie n’est pas détruite, elle chauffe le cube et la piste."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Départ du cube",
          "stepTheme": "EM1 = mgh₁",
          "stepTitle": "Énergie mécanique du cube au départ",
          "paragraphText": "Un cube de 1 kg est lâché sans vitesse sur le plan AB, son centre d’inertie à $h_1 = 1$ m au-dessus de la partie horizontale BC (référence, $g = 9{,}8$ N·kg⁻¹). Au départ : $E_{M1} = 0 + mgh_1$.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p05_q3",
            "type": "mcq",
            "prompt": "Un cube de masse $m = 1\\,\\mathrm{kg}$ est lâché sans vitesse à la hauteur $h_1 = 1\\,\\mathrm{m}$ au-dessus du niveau de référence ($g = 9{,}8\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est son énergie mécanique au départ ?",
            "options": [
              "9,8 J",
              "0 J",
              "4,9 J",
              "98 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_{M1} = E_{C1} + E_{P1} = 0 + 1 \\times 9{,}8 \\times 1 = 9{,}8\\,\\mathrm{J}$."
          },
          "visualSchema": {
            "type": "geometry_svg",
            "title": "Profil ABCD : pentes lisses, partie BC avec frottements",
            "caption": "Cube de 1 kg lâché sans vitesse en A (h₁ = 1 m), BC = 2 m avec f = 3,92 N, pentes à 30°.",
            "svgContent": "<svg viewBox=\"0 0 380 175\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\" font-family=\"sans-serif\">\n  <line x1=\"20\" y1=\"140\" x2=\"365\" y2=\"140\" stroke=\"#94a3b8\" stroke-dasharray=\"4 3\"/>\n  <line x1=\"70\" y1=\"40\" x2=\"140\" y2=\"140\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>\n  <line x1=\"140\" y1=\"140\" x2=\"250\" y2=\"140\" stroke=\"#b45309\" stroke-width=\"4\"/>\n  <line x1=\"250\" y1=\"140\" x2=\"320\" y2=\"40\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>\n  <rect x=\"72\" y=\"36\" width=\"16\" height=\"16\" fill=\"#64748b\" stroke=\"#1e293b\" transform=\"rotate(55 80 44)\"/>\n  <text x=\"60\" y=\"34\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">A</text>\n  <text x=\"134\" y=\"157\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">B</text>\n  <text x=\"246\" y=\"157\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">C</text>\n  <text x=\"324\" y=\"38\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e293b\">D</text>\n  <line x1=\"40\" y1=\"44\" x2=\"40\" y2=\"140\" stroke=\"#2563eb\" stroke-width=\"1.5\"/>\n  <polygon points=\"40,44 36,53 44,53\" fill=\"#2563eb\"/><polygon points=\"40,140 36,131 44,131\" fill=\"#2563eb\"/>\n  <text x=\"14\" y=\"95\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">h₁</text>\n  <text x=\"160\" y=\"132\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#b45309\">frottements f</text>\n  <text x=\"172\" y=\"168\" font-size=\"10.5\" fill=\"#1e293b\">L = 2 m</text>\n  <text x=\"112\" y=\"134\" font-size=\"10\" fill=\"#475569\">30°</text>\n  <text x=\"258\" y=\"134\" font-size=\"10\" fill=\"#475569\">30°</text>\n  <line x1=\"300\" y1=\"112\" x2=\"350\" y2=\"112\" stroke=\"#dc2626\" stroke-dasharray=\"3 3\"/>\n  <text x=\"330\" y=\"106\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">h₂ ?</text>\n</svg>"
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Partie rugueuse",
          "stepTheme": "EM2 = EM1 − fL",
          "stepTitle": "Énergie mécanique après la partie avec frottements",
          "paragraphText": "Sur AB, il n’y a pas de frottement : $E_M(B) = E_{M1}$. Sur BC (longueur $L = 2$ m), la force de frottement $f = 3{,}92$ N fait perdre $f \\times L$ : $E_{M2} = E_{M1} - fL$.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p05_q4",
            "type": "mcq",
            "prompt": "Un cube a une énergie mécanique $E_{M1} = 9{,}8\\,\\mathrm{J}$ en arrivant en B. Il parcourt ensuite la partie horizontale BC, de longueur $L = 2\\,\\mathrm{m}$, en subissant une force de frottement constante $f = 3{,}92\\,\\mathrm{N}$. Quelle est son énergie mécanique en C ?",
            "options": [
              "1,96 J",
              "7,84 J",
              "17,64 J",
              "5,88 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_{M2} = 9{,}8 - 3{,}92 \\times 2 = 9{,}8 - 7{,}84 = 1{,}96\\,\\mathrm{J}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Vitesse en C",
          "stepTheme": "EP = 0 en C",
          "stepTitle": "Vitesse du cube en C",
          "paragraphText": "En C, le cube est au niveau de référence ($E_P = 0$) : toute son énergie mécanique est cinétique, $E_{M2} = \\frac{1}{2}mv_C^2$.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p05_q5",
            "type": "mcq",
            "prompt": "Un cube de masse $m = 1\\,\\mathrm{kg}$ arrive en C, au niveau de référence des énergies potentielles, avec une énergie mécanique $E_{M2} = 1{,}96\\,\\mathrm{J}$. Quelle est sa vitesse en C ?",
            "options": [
              "≈ 2 m·s⁻¹",
              "≈ 3,92 m·s⁻¹",
              "≈ 1,4 m·s⁻¹",
              "≈ 0,98 m·s⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$v_C = \\sqrt{\\frac{2E_{M2}}{m}} = \\sqrt{3{,}92} \\approx 1{,}98 \\approx 2\\,\\mathrm{m\\cdot s^{-1}}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Demi-tour",
          "stepTheme": "h₂ = EM2 ÷ (mg)",
          "stepTitle": "Hauteur de demi-tour sur la pente CD",
          "paragraphText": "Sur CD, il n’y a plus de frottement : $E_M$ se conserve à nouveau. Au point de rebroussement, $E_C = 0$ : $mgh_2 = E_{M2}$.",
          "exercise": {
            "id": "premiere_c_physique_p5_energie_mecanique_p05_q6",
            "type": "mcq",
            "prompt": "Un cube de masse $1\\,\\mathrm{kg}$ aborde en C une pente sans frottement avec une énergie mécanique $E_{M2} = 1{,}96\\,\\mathrm{J}$ (C est au niveau de référence, $g = 9{,}8\\,\\mathrm{N\\cdot kg^{-1}}$). À quelle hauteur $h_2$ fait-il demi-tour ?",
            "options": [
              "0,2 m",
              "1 m",
              "0,8 m",
              "2 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$h_2 = \\frac{E_{M2}}{mg} = \\frac{1{,}96}{1 \\times 9{,}8} = 0{,}2\\,\\mathrm{m}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p05_q1",
          "type": "mcq",
          "prompt": "Un solide glisse sur un plan incliné en subissant son poids $\\vec{P}$, la réaction normale $\\vec{R}$ et une force de frottement $\\vec{f}$. À quoi est égale la variation de son énergie mécanique entre A et B ?",
          "options": [
            "Au travail de la force de frottement $W_{AB}(\\vec{f})$",
            "Au travail du poids $W_{AB}(\\vec{P})$",
            "Au travail de la réaction $W_{AB}(\\vec{R})$",
            "À zéro, car l’énergie mécanique se conserve toujours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\Delta E_C = W(\\vec{P}) + W(\\vec{f})$ et $\\Delta E_P = -W(\\vec{P})$, donc $\\Delta E_M = W(\\vec{f})$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p05_q2",
          "type": "mcq",
          "prompt": "Un cube glisse sur une piste horizontale avec frottements. Quel est le signe de la variation de son énergie mécanique, et que devient l’énergie perdue ?",
          "options": [
            "$\\Delta E_M < 0$ ; elle est transformée en chaleur",
            "$\\Delta E_M > 0$ ; elle augmente la vitesse",
            "$\\Delta E_M = 0$ ; rien n’est perdu",
            "$\\Delta E_M < 0$ ; elle disparaît sans laisser de trace"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le travail des frottements est négatif ; l’énergie n’est pas détruite, elle chauffe le cube et la piste."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p05_q3",
          "type": "mcq",
          "prompt": "Un cube de masse $m = 1\\,\\mathrm{kg}$ est lâché sans vitesse à la hauteur $h_1 = 1\\,\\mathrm{m}$ au-dessus du niveau de référence ($g = 9{,}8\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est son énergie mécanique au départ ?",
          "options": [
            "9,8 J",
            "0 J",
            "4,9 J",
            "98 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_{M1} = E_{C1} + E_{P1} = 0 + 1 \\times 9{,}8 \\times 1 = 9{,}8\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p05_q4",
          "type": "mcq",
          "prompt": "Un cube a une énergie mécanique $E_{M1} = 9{,}8\\,\\mathrm{J}$ en arrivant en B. Il parcourt ensuite la partie horizontale BC, de longueur $L = 2\\,\\mathrm{m}$, en subissant une force de frottement constante $f = 3{,}92\\,\\mathrm{N}$. Quelle est son énergie mécanique en C ?",
          "options": [
            "1,96 J",
            "7,84 J",
            "17,64 J",
            "5,88 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_{M2} = 9{,}8 - 3{,}92 \\times 2 = 9{,}8 - 7{,}84 = 1{,}96\\,\\mathrm{J}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p05_q5",
          "type": "mcq",
          "prompt": "Un cube de masse $m = 1\\,\\mathrm{kg}$ arrive en C, au niveau de référence des énergies potentielles, avec une énergie mécanique $E_{M2} = 1{,}96\\,\\mathrm{J}$. Quelle est sa vitesse en C ?",
          "options": [
            "≈ 2 m·s⁻¹",
            "≈ 3,92 m·s⁻¹",
            "≈ 1,4 m·s⁻¹",
            "≈ 0,98 m·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$v_C = \\sqrt{\\frac{2E_{M2}}{m}} = \\sqrt{3{,}92} \\approx 1{,}98 \\approx 2\\,\\mathrm{m\\cdot s^{-1}}$."
        },
        {
          "id": "premiere_c_physique_p5_energie_mecanique_p05_q6",
          "type": "mcq",
          "prompt": "Un cube de masse $1\\,\\mathrm{kg}$ aborde en C une pente sans frottement avec une énergie mécanique $E_{M2} = 1{,}96\\,\\mathrm{J}$ (C est au niveau de référence, $g = 9{,}8\\,\\mathrm{N\\cdot kg^{-1}}$). À quelle hauteur $h_2$ fait-il demi-tour ?",
          "options": [
            "0,2 m",
            "1 m",
            "0,8 m",
            "2 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$h_2 = \\frac{E_{M2}}{mg} = \\frac{1{,}96}{1 \\times 9{,}8} = 0{,}2\\,\\mathrm{m}$."
        }
      ]
    }
  ]
};
