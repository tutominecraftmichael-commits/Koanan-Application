import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1A-Maths leçon-06 Statistique.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_1RE_L06_STATISTIQUES: CurriculumChapter = {
  "id": "premiere_a1_maths_numerique_l06_statistiques",
  "subjectId": "maths",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 6,
  "title": "Leçon 6 : Statistiques",
  "summary": "Séries regroupées en classes : amplitude, centre, densité, classe modale, moyenne, médiane, quartiles, histogramme, courbes cumulatives, variance, écart type et écart absolu moyen.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "1A-Maths leçon-06 Statistique.pdf",
  "points": [
    {
      "id": "premiere_a1_maths_numerique_l06_statistiques_p01",
      "order": 1,
      "title": "Classes : amplitude, centre et densité",
      "summary": "Les trois nombres qui décrivent une classe $[x_1\\,;x_2[$.",
      "conceptExplanation": "Une série statistique regroupée en classes se présente dans un tableau : classes $[x_1\\,;x_2[$, $[x_2\\,;x_3[$… et leurs effectifs $n_1$, $n_2$… L'effectif total est $N$.\n\nPour une classe $[x_1\\,;x_2[$ :\n- son amplitude est $x_2-x_1$ ;\n- son centre est $c_1=\\dfrac{x_1+x_2}{2}$ ;\n- sa densité est le quotient de son effectif par son amplitude : $\\dfrac{n_1}{x_2-x_1}$.\n\nExemple : pour la classe $[1\\,;5[$ d'effectif $12$ : amplitude $5-1=4$, centre $\\dfrac{1+5}{2}=3$, densité $\\dfrac{12}{4}=3$.\n\nSi l'on connaît la fréquence $f$ d'une classe et l'effectif total $N$, son effectif est $f\\times N$.",
      "keyRule": "Amplitude $=x_2-x_1$ ; centre $=\\dfrac{x_1+x_2}{2}$ ; densité $=\\dfrac{\\text{effectif}}{\\text{amplitude}}$.",
      "formulas": [
        {
          "name": "Centre de la classe",
          "formula": "c=\\dfrac{x_1+x_2}{2}"
        },
        {
          "name": "Densité de la classe",
          "formula": "d=\\dfrac{n}{x_2-x_1}"
        }
      ],
      "workedExample": {
        "title": "Compléter une colonne",
        "statement": "La classe $[5\\,;8[$ a pour effectif $28$. Donne son amplitude, son centre et sa densité.",
        "methodSteps": [
          "Amplitude : $8-5=3$.",
          "Centre : $\\dfrac{5+8}{2}=6{,}5$.",
          "Densité : $\\dfrac{28}{3}\\approx9{,}33$."
        ],
        "conclusion": "Amplitude $3$, centre $6{,}5$, densité environ $9{,}33$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'amplitude",
          "stepTheme": "L'amplitude",
          "stepBadge": "L'amplitude",
          "paragraphText": "L'amplitude de la classe $[x_1\\,;x_2[$ est sa largeur : $x_2-x_1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q1",
            "type": "mcq",
            "prompt": "Quelle est l'amplitude de la classe $[14\\,;21[$ ?",
            "options": [
              "$35$",
              "$17{,}5$",
              "$7$",
              "$14$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$21-14=7$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le centre",
          "stepTheme": "Le centre",
          "stepBadge": "Le centre",
          "paragraphText": "Le centre de la classe $[x_1\\,;x_2[$ est le milieu des bornes : $\\dfrac{x_1+x_2}{2}$. Pour $[1\\,;5[$ : $\\dfrac{1+5}{2}=3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q2",
            "type": "mcq",
            "prompt": "Quel est le centre de la classe $[8\\,;13[$ ?",
            "options": [
              "$10{,}5$",
              "$5$",
              "$21$",
              "$10$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{8+13}{2}=\\dfrac{21}{2}=10{,}5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La densité",
          "stepTheme": "La densité",
          "stepBadge": "La densité",
          "paragraphText": "La densité d'une classe est son effectif divisé par son amplitude. Pour $[1\\,;5[$ d'effectif $12$ : $\\dfrac{12}{4}=3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q3",
            "type": "mcq",
            "prompt": "La classe $[13\\,;14[$ a pour effectif $24$. Quelle est sa densité ?",
            "options": [
              "$1$",
              "$13{,}5$",
              "$\\dfrac{1}{24}$",
              "$24$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Amplitude $14-13=1$, donc densité $\\dfrac{24}{1}=24$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Avec des décimaux",
          "stepTheme": "Avec des décimaux",
          "stepBadge": "Avec des décimaux",
          "paragraphText": "Pour $[3\\,;4{,}5[$ : amplitude $1{,}5$ et centre $\\dfrac{3+4{,}5}{2}=3{,}75$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q4",
            "type": "mcq",
            "prompt": "Quel est le centre de la classe $[5{,}5\\,;6[$ ?",
            "options": [
              "$0{,}5$",
              "$5{,}75$",
              "$11{,}5$",
              "$6$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{5{,}5+6}{2}=\\dfrac{11{,}5}{2}=5{,}75$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Densité avec une fréquence",
          "stepTheme": "Densité avec une fréquence",
          "stepBadge": "Densité avec une fréquence",
          "paragraphText": "On peut aussi diviser une fréquence par l'amplitude. Pour $[6\\,;8[$ de fréquence $0{,}15$ : $\\dfrac{0{,}15}{2}=0{,}075$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q5",
            "type": "mcq",
            "prompt": "La classe $[3\\,;5[$ a pour fréquence $0{,}25$. Quelle est sa densité ?",
            "options": [
              "$0{,}5$",
              "$0{,}25$",
              "$0{,}125$",
              "$2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Amplitude $2$, donc $\\dfrac{0{,}25}{2}=0{,}125$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Retrouver un effectif",
          "stepTheme": "Retrouver un effectif",
          "stepBadge": "Retrouver un effectif",
          "paragraphText": "Effectif d'une classe $=$ fréquence $\\times$ effectif total. Avec $N=100$ et une fréquence de $0{,}35$ : $35$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q6",
            "type": "mcq",
            "prompt": "Avec $N=100$, la classe $[6{,}5\\,;7[$ a pour fréquence $0{,}3$. Quel est son effectif ?",
            "options": [
              "$30$",
              "$3$",
              "$0{,}3$",
              "$300$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$0{,}3\\times100=30$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Densité ou effectif ?",
          "stepTheme": "Densité ou effectif ?",
          "stepBadge": "Densité ou effectif ?",
          "paragraphText": "Une classe très large peut avoir un grand effectif mais une petite densité. Ne confonds pas les deux : la densité tient compte de la largeur.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q7",
            "type": "mcq",
            "prompt": "La classe $[12\\,;20[$ a pour effectif $20$. Quelle est sa densité ?",
            "options": [
              "$20$",
              "$8$",
              "$16$",
              "$2{,}5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Amplitude $8$, donc $\\dfrac{20}{8}=2{,}5$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q1",
          "type": "mcq",
          "prompt": "Quelle est l'amplitude de la classe $[14\\,;21[$ ?",
          "options": [
            "$35$",
            "$17{,}5$",
            "$7$",
            "$14$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$21-14=7$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q2",
          "type": "mcq",
          "prompt": "Quel est le centre de la classe $[8\\,;13[$ ?",
          "options": [
            "$10{,}5$",
            "$5$",
            "$21$",
            "$10$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{8+13}{2}=\\dfrac{21}{2}=10{,}5$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q3",
          "type": "mcq",
          "prompt": "La classe $[13\\,;14[$ a pour effectif $24$. Quelle est sa densité ?",
          "options": [
            "$1$",
            "$13{,}5$",
            "$\\dfrac{1}{24}$",
            "$24$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Amplitude $14-13=1$, donc densité $\\dfrac{24}{1}=24$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q4",
          "type": "mcq",
          "prompt": "Quel est le centre de la classe $[5{,}5\\,;6[$ ?",
          "options": [
            "$0{,}5$",
            "$5{,}75$",
            "$11{,}5$",
            "$6$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{5{,}5+6}{2}=\\dfrac{11{,}5}{2}=5{,}75$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q5",
          "type": "mcq",
          "prompt": "La classe $[3\\,;5[$ a pour fréquence $0{,}25$. Quelle est sa densité ?",
          "options": [
            "$0{,}5$",
            "$0{,}25$",
            "$0{,}125$",
            "$2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Amplitude $2$, donc $\\dfrac{0{,}25}{2}=0{,}125$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q6",
          "type": "mcq",
          "prompt": "Avec $N=100$, la classe $[6{,}5\\,;7[$ a pour fréquence $0{,}3$. Quel est son effectif ?",
          "options": [
            "$30$",
            "$3$",
            "$0{,}3$",
            "$300$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$0{,}3\\times100=30$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q7",
          "type": "mcq",
          "prompt": "La classe $[12\\,;20[$ a pour effectif $20$. Quelle est sa densité ?",
          "options": [
            "$20$",
            "$8$",
            "$16$",
            "$2{,}5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Amplitude $8$, donc $\\dfrac{20}{8}=2{,}5$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l06_statistiques_p02",
      "order": 2,
      "title": "Classe modale et moyenne",
      "summary": "La classe de plus grande densité et la moyenne calculée avec les centres.",
      "conceptExplanation": "Classe modale : c'est une classe dont la DENSITÉ est maximale.\nCas particulier : si toutes les classes ont la même amplitude, c'est une classe d'effectif maximal.\n\nMoyenne d'une série regroupée en classes de centres $c_1,\\dots,c_p$ :\n$$\\bar{x}=\\dfrac{1}{N}(n_1c_1+n_2c_2+\\dots+n_pc_p)$$\nou, avec les fréquences : $\\bar{x}=f_1c_1+f_2c_2+\\dots+f_pc_p$.\n\nExemple : classes $[1\\,;5[$, $[5\\,;8[$, $[8\\,;13[$, $[13\\,;14[$, $[14\\,;21[$ d'effectifs $12$, $28$, $32$, $24$, $8$ ($N=104$).\n- Densités : $3$ ; $9{,}33$ ; $6{,}4$ ; $24$ ; $1{,}14$. La classe modale est $[13\\,;14[$ (et non $[8\\,;13[$, qui a le plus grand effectif).\n- Moyenne : $\\dfrac{12\\times3+28\\times6{,}5+32\\times10{,}5+24\\times13{,}5+8\\times17{,}5}{104}=\\dfrac{1018}{104}\\approx9{,}79$.",
      "keyRule": "Classe modale = densité maximale. $\\bar{x}=\\dfrac{1}{N}\\sum n_ic_i$ avec les CENTRES des classes.",
      "formulas": [
        {
          "name": "Moyenne",
          "formula": "\\bar{x}=\\dfrac{1}{N}(n_1c_1+n_2c_2+\\dots+n_pc_p)"
        }
      ],
      "workedExample": {
        "title": "Le tonnage moyen d'anacarde",
        "statement": "Classes $[2\\,;4[$ à $[12\\,;14[$, effectifs $16$, $12$, $8$, $7$, $5$, $2$ ($N=50$). Calcule la moyenne.",
        "methodSteps": [
          "Centres : $3$, $5$, $7$, $9$, $11$, $13$.",
          "$16\\times3+12\\times5+8\\times7+7\\times9+5\\times11+2\\times13=308$.",
          "$\\bar{x}=\\dfrac{308}{50}=6{,}16$."
        ],
        "conclusion": "Le tonnage moyen est $6{,}16$ tonnes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La classe modale",
          "stepTheme": "La classe modale",
          "stepBadge": "La classe modale",
          "paragraphText": "Une classe modale est une classe dont la densité est maximale.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q1",
            "type": "mcq",
            "prompt": "Densités : $3$ ; $9{,}33$ ; $6{,}4$ ; $24$ ; $1{,}14$ pour $[1\\,;5[$, $[5\\,;8[$, $[8\\,;13[$, $[13\\,;14[$, $[14\\,;21[$. Quelle est la classe modale ?",
            "options": [
              "$[8\\,;13[$",
              "$[5\\,;8[$",
              "$[14\\,;21[$",
              "$[13\\,;14[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La plus grande densité est $24$, celle de $[13\\,;14[$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Le piège de l'effectif",
          "stepTheme": "Le piège de l'effectif",
          "stepBadge": "Le piège de l'effectif",
          "paragraphText": "Ce n'est pas la classe de plus grand effectif quand les amplitudes sont différentes : on compare les densités.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q2",
            "type": "mcq",
            "prompt": "Notes $[0\\,;5[$, $[5\\,;9[$, $[9\\,;12[$, $[12\\,;20[$ d'effectifs $25$, $86$, $69$, $20$. Quelle est la classe modale ?",
            "options": [
              "$[5\\,;9[$, car son effectif $86$ est le plus grand",
              "$[9\\,;12[$, car sa densité $23$ est la plus grande",
              "$[12\\,;20[$, car c'est la classe la plus large",
              "$[0\\,;5[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Densités : $5$ ; $21{,}5$ ; $23$ ; $2{,}5$. La plus grande est $23$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Même amplitude partout",
          "stepTheme": "Même amplitude partout",
          "stepBadge": "Même amplitude partout",
          "paragraphText": "Si toutes les classes ont la même amplitude, la classe modale est simplement une classe d'effectif maximal.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q3",
            "type": "mcq",
            "prompt": "Classes $[2\\,;4[$, $[4\\,;6[$, $[6\\,;8[$ d'effectifs $16$, $12$, $8$. Quelle est la classe modale ?",
            "options": [
              "$[2\\,;4[$",
              "$[4\\,;6[$",
              "$[6\\,;8[$",
              "Il n'y en a pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Même amplitude $2$ : on prend l'effectif le plus grand, $16$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La formule de la moyenne",
          "stepTheme": "La formule de la moyenne",
          "stepBadge": "La formule de la moyenne",
          "paragraphText": "On multiplie chaque CENTRE par son effectif, on additionne, puis on divise par $N$ : $\\bar{x}=\\dfrac{1}{N}(n_1c_1+\\dots+n_pc_p)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q4",
            "type": "mcq",
            "prompt": "Pour calculer la moyenne d'une série en classes, quelle valeur prend-on pour chaque classe ?",
            "options": [
              "La borne inférieure",
              "L'amplitude",
              "Le centre",
              "La densité"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque classe est représentée par son centre $c_i$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un calcul de moyenne",
          "stepTheme": "Un calcul de moyenne",
          "stepBadge": "Un calcul de moyenne",
          "paragraphText": "Anacarde : $\\bar{x}=\\dfrac{16\\times3+12\\times5+8\\times7+7\\times9+5\\times11+2\\times13}{50}=\\dfrac{308}{50}=6{,}16$ tonnes.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q5",
            "type": "mcq",
            "prompt": "Notes de centres $2{,}5$ ; $7$ ; $10{,}5$ ; $16$ et d'effectifs $25$ ; $86$ ; $69$ ; $20$ ($N=200$). Quelle est la moyenne ?",
            "options": [
              "$9$",
              "$8{,}545$",
              "$1709$",
              "$10{,}5$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$62{,}5+602+724{,}5+320=1709$, puis $\\dfrac{1709}{200}=8{,}545$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Avec les fréquences",
          "stepTheme": "Avec les fréquences",
          "stepBadge": "Avec les fréquences",
          "paragraphText": "Avec les fréquences, pas besoin de diviser : $\\bar{x}=f_1c_1+f_2c_2+\\dots+f_pc_p$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q6",
            "type": "mcq",
            "prompt": "Centres $4$ et $8$, fréquences $0{,}5$ et $0{,}5$. Quelle est la moyenne ?",
            "options": [
              "$12$",
              "$4$",
              "$8$",
              "$6$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$0{,}5\\times4+0{,}5\\times8=2+4=6$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Diviser par $N$",
          "stepTheme": "Diviser par $N$",
          "stepBadge": "Diviser par $N$",
          "paragraphText": "On divise par l'effectif total $N$, pas par le nombre de classes. Avec 5 classes et $N=104$, on divise par $104$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q7",
            "type": "mcq",
            "prompt": "La somme $n_1c_1+\\dots+n_5c_5$ vaut $1018$ et $N=104$. Quelle est la moyenne ?",
            "options": [
              "Environ $9{,}79$",
              "$203{,}6$",
              "$1018$",
              "Environ $10{,}4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{1018}{104}\\approx9{,}79$ ; diviser par $5$ (le nombre de classes) est une erreur."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q1",
          "type": "mcq",
          "prompt": "Densités : $3$ ; $9{,}33$ ; $6{,}4$ ; $24$ ; $1{,}14$ pour $[1\\,;5[$, $[5\\,;8[$, $[8\\,;13[$, $[13\\,;14[$, $[14\\,;21[$. Quelle est la classe modale ?",
          "options": [
            "$[8\\,;13[$",
            "$[5\\,;8[$",
            "$[14\\,;21[$",
            "$[13\\,;14[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La plus grande densité est $24$, celle de $[13\\,;14[$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q2",
          "type": "mcq",
          "prompt": "Notes $[0\\,;5[$, $[5\\,;9[$, $[9\\,;12[$, $[12\\,;20[$ d'effectifs $25$, $86$, $69$, $20$. Quelle est la classe modale ?",
          "options": [
            "$[5\\,;9[$, car son effectif $86$ est le plus grand",
            "$[9\\,;12[$, car sa densité $23$ est la plus grande",
            "$[12\\,;20[$, car c'est la classe la plus large",
            "$[0\\,;5[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Densités : $5$ ; $21{,}5$ ; $23$ ; $2{,}5$. La plus grande est $23$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q3",
          "type": "mcq",
          "prompt": "Classes $[2\\,;4[$, $[4\\,;6[$, $[6\\,;8[$ d'effectifs $16$, $12$, $8$. Quelle est la classe modale ?",
          "options": [
            "$[2\\,;4[$",
            "$[4\\,;6[$",
            "$[6\\,;8[$",
            "Il n'y en a pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Même amplitude $2$ : on prend l'effectif le plus grand, $16$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q4",
          "type": "mcq",
          "prompt": "Pour calculer la moyenne d'une série en classes, quelle valeur prend-on pour chaque classe ?",
          "options": [
            "La borne inférieure",
            "L'amplitude",
            "Le centre",
            "La densité"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque classe est représentée par son centre $c_i$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q5",
          "type": "mcq",
          "prompt": "Notes de centres $2{,}5$ ; $7$ ; $10{,}5$ ; $16$ et d'effectifs $25$ ; $86$ ; $69$ ; $20$ ($N=200$). Quelle est la moyenne ?",
          "options": [
            "$9$",
            "$8{,}545$",
            "$1709$",
            "$10{,}5$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$62{,}5+602+724{,}5+320=1709$, puis $\\dfrac{1709}{200}=8{,}545$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q6",
          "type": "mcq",
          "prompt": "Centres $4$ et $8$, fréquences $0{,}5$ et $0{,}5$. Quelle est la moyenne ?",
          "options": [
            "$12$",
            "$4$",
            "$8$",
            "$6$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$0{,}5\\times4+0{,}5\\times8=2+4=6$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q7",
          "type": "mcq",
          "prompt": "La somme $n_1c_1+\\dots+n_5c_5$ vaut $1018$ et $N=104$. Quelle est la moyenne ?",
          "options": [
            "Environ $9{,}79$",
            "$203{,}6$",
            "$1018$",
            "Environ $10{,}4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{1018}{104}\\approx9{,}79$ ; diviser par $5$ (le nombre de classes) est une erreur."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l06_statistiques_p03",
      "order": 3,
      "title": "La médiane",
      "summary": "Graphiquement ou par interpolation linéaire, avec les effectifs cumulés croissants.",
      "conceptExplanation": "La médiane $Me$ partage la série ordonnée en deux groupes de même effectif : au moins $50\\,\\%$ des valeurs sont inférieures ou égales à $Me$.\n\nOn la trouve :\n- graphiquement : c'est l'abscisse du point du polygone des effectifs cumulés croissants (ECC) d'ordonnée $\\dfrac{N}{2}$ ;\n- par interpolation linéaire.\n\nMéthode par interpolation :\n1. calculer les ECC et $\\dfrac{N}{2}$ ;\n2. repérer la classe $[a\\,;b[$ où l'on passe $\\dfrac{N}{2}$ (ECC de $N_a$ à $N_b$) ;\n3. écrire $\\dfrac{Me-a}{b-a}=\\dfrac{\\frac{N}{2}-N_a}{N_b-N_a}$ et résoudre.\n\nExemple : effectifs $12$, $28$, $32$, $24$, $8$ ; ECC $12$, $40$, $72$, $96$, $104$. $\\dfrac{N}{2}=52$ est entre $40$ et $72$, donc $Me\\in[8\\,;13[$ :\n$$\\dfrac{Me-8}{13-8}=\\dfrac{52-40}{72-40},\\ Me=8+5\\times\\dfrac{12}{32}=9{,}875.$$",
      "keyRule": "$\\dfrac{Me-a}{b-a}=\\dfrac{\\frac{N}{2}-N_a}{N_b-N_a}$, dans la classe où les ECC dépassent $\\dfrac{N}{2}$.",
      "formulas": [
        {
          "name": "Interpolation linéaire",
          "formula": "\\dfrac{Me-a}{b-a}=\\dfrac{\\frac{N}{2}-N_a}{N_b-N_a}"
        }
      ],
      "workedExample": {
        "title": "Le tonnage médian d'anacarde",
        "statement": "Effectifs $16$, $12$, $8$, $7$, $5$, $2$ pour $[2\\,;4[$… $[12\\,;14[$. Calcule la médiane.",
        "methodSteps": [
          "ECC : $16$, $28$, $36$, $43$, $48$, $50$. $\\dfrac{N}{2}=25$.",
          "$25$ est entre $16$ et $28$ : $Me\\in[4\\,;6[$.",
          "$Me=4+2\\times\\dfrac{25-16}{28-16}=4+1{,}5=5{,}5$."
        ],
        "conclusion": "$Me=5{,}5$ tonnes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce que mesure la médiane",
          "stepTheme": "Ce que mesure la médiane",
          "stepBadge": "Ce que mesure la médiane",
          "paragraphText": "La médiane sépare la série ordonnée en deux moitiés de même effectif.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q1",
            "type": "mcq",
            "prompt": "La médiane des notes d'une classe est $8{,}48$. Que signifie ce résultat ?",
            "options": [
              "La moyenne de la classe est $8{,}48$",
              "$50\\,\\%$ des élèves ont une note inférieure ou égale à $8{,}48$",
              "La note la plus fréquente est $8{,}48$",
              "Aucun élève n'a moins de $8{,}48$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La médiane coupe l'effectif en deux moitiés."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les effectifs cumulés",
          "stepTheme": "Les effectifs cumulés",
          "stepBadge": "Les effectifs cumulés",
          "paragraphText": "On additionne les effectifs au fur et à mesure : $12$ ; $12+28=40$ ; $40+32=72$ ; $96$ ; $104$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q2",
            "type": "mcq",
            "prompt": "Effectifs $25$, $86$, $69$, $20$. Quels sont les effectifs cumulés croissants ?",
            "options": [
              "$25$ ; $86$ ; $69$ ; $20$",
              "$25$ ; $111$ ; $155$ ; $175$",
              "$25$ ; $111$ ; $180$ ; $200$",
              "$200$ ; $175$ ; $89$ ; $20$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$25$, puis $25+86=111$, $111+69=180$, $180+20=200$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Trouver la bonne classe",
          "stepTheme": "Trouver la bonne classe",
          "stepBadge": "Trouver la bonne classe",
          "paragraphText": "On calcule $\\dfrac{N}{2}$ puis on cherche entre quels ECC il se trouve. Avec $N=104$ : $52$ est entre $40$ et $72$, donc $Me\\in[8\\,;13[$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q3",
            "type": "mcq",
            "prompt": "ECC : $25$ ; $111$ ; $180$ ; $200$ pour $[0\\,;5[$, $[5\\,;9[$, $[9\\,;12[$, $[12\\,;20[$. Dans quelle classe est la médiane ?",
            "options": [
              "$[5\\,;9[$",
              "$[0\\,;5[$",
              "$[9\\,;12[$",
              "$[12\\,;20[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{N}{2}=100$, compris entre $25$ et $111$ : classe $[5\\,;9[$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'interpolation linéaire",
          "stepTheme": "L'interpolation linéaire",
          "stepBadge": "L'interpolation linéaire",
          "paragraphText": "Dans la classe $[a\\,;b[$ où les ECC passent de $N_a$ à $N_b$ : $\\dfrac{Me-a}{b-a}=\\dfrac{\\frac{N}{2}-N_a}{N_b-N_a}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q4",
            "type": "mcq",
            "prompt": "Avec $Me\\in[8\\,;13[$, ECC $40$ et $72$, $\\dfrac{N}{2}=52$, quelle égalité écrit-on ?",
            "options": [
              "$\\dfrac{Me-8}{13-8}=\\dfrac{72-52}{72-40}$",
              "$\\dfrac{Me-13}{8-13}=\\dfrac{52-40}{72-40}$",
              "$\\dfrac{Me}{13}=\\dfrac{52}{72}$",
              "$\\dfrac{Me-8}{13-8}=\\dfrac{52-40}{72-40}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On part de la borne $8$ et de son ECC $40$ : $\\dfrac{Me-8}{5}=\\dfrac{12}{32}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le calcul",
          "stepTheme": "Le calcul",
          "stepBadge": "Le calcul",
          "paragraphText": "$\\dfrac{Me-8}{5}=\\dfrac{12}{32}$ donne $Me=8+5\\times\\dfrac{12}{32}=8+1{,}875=9{,}875$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q5",
            "type": "mcq",
            "prompt": "Anacarde : $Me\\in[4\\,;6[$, ECC $16$ et $28$, $\\dfrac{N}{2}=25$. Combien vaut $Me$ ?",
            "options": [
              "$5$",
              "$5{,}5$",
              "$4{,}75$",
              "$6$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$Me=4+2\\times\\dfrac{25-16}{28-16}=4+2\\times0{,}75=5{,}5$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Lecture graphique",
          "stepTheme": "Lecture graphique",
          "stepBadge": "Lecture graphique",
          "paragraphText": "Sur le polygone des ECC, on part de l'ordonnée $\\dfrac{N}{2}$, on rejoint la courbe, puis on descend sur l'axe des abscisses : on lit $Me$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q6",
            "type": "mcq",
            "prompt": "Sur la courbe des fréquences cumulées croissantes, à quelle ordonnée lit-on la médiane ?",
            "options": [
              "$0{,}5$",
              "$0{,}25$",
              "$1$",
              "$0{,}75$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec les fréquences, la moitié de l'effectif correspond à $0{,}5$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Interpréter pour décider",
          "stepTheme": "Interpréter pour décider",
          "stepBadge": "Interpréter pour décider",
          "paragraphText": "La banque exige une moyenne d'au moins $6$ tonnes et une médiane supérieure à $5$ tonnes. Avec $\\bar{x}=6{,}16$ et $Me=5{,}5$, les deux conditions sont remplies : le crédit est accordé.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q7",
            "type": "mcq",
            "prompt": "Si la médiane avait été $4{,}8$ tonnes (moyenne inchangée $6{,}16$), la centrale aurait-elle obtenu le crédit ?",
            "options": [
              "Oui, car la moyenne dépasse $6$",
              "Oui, car $4{,}8$ est proche de $5$",
              "On ne peut pas savoir",
              "Non, car la médiane doit dépasser $5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les DEUX conditions sont exigées ; $4{,}8<5$ fait échouer la deuxième."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q1",
          "type": "mcq",
          "prompt": "La médiane des notes d'une classe est $8{,}48$. Que signifie ce résultat ?",
          "options": [
            "La moyenne de la classe est $8{,}48$",
            "$50\\,\\%$ des élèves ont une note inférieure ou égale à $8{,}48$",
            "La note la plus fréquente est $8{,}48$",
            "Aucun élève n'a moins de $8{,}48$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La médiane coupe l'effectif en deux moitiés."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q2",
          "type": "mcq",
          "prompt": "Effectifs $25$, $86$, $69$, $20$. Quels sont les effectifs cumulés croissants ?",
          "options": [
            "$25$ ; $86$ ; $69$ ; $20$",
            "$25$ ; $111$ ; $155$ ; $175$",
            "$25$ ; $111$ ; $180$ ; $200$",
            "$200$ ; $175$ ; $89$ ; $20$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$25$, puis $25+86=111$, $111+69=180$, $180+20=200$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q3",
          "type": "mcq",
          "prompt": "ECC : $25$ ; $111$ ; $180$ ; $200$ pour $[0\\,;5[$, $[5\\,;9[$, $[9\\,;12[$, $[12\\,;20[$. Dans quelle classe est la médiane ?",
          "options": [
            "$[5\\,;9[$",
            "$[0\\,;5[$",
            "$[9\\,;12[$",
            "$[12\\,;20[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{N}{2}=100$, compris entre $25$ et $111$ : classe $[5\\,;9[$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q4",
          "type": "mcq",
          "prompt": "Avec $Me\\in[8\\,;13[$, ECC $40$ et $72$, $\\dfrac{N}{2}=52$, quelle égalité écrit-on ?",
          "options": [
            "$\\dfrac{Me-8}{13-8}=\\dfrac{72-52}{72-40}$",
            "$\\dfrac{Me-13}{8-13}=\\dfrac{52-40}{72-40}$",
            "$\\dfrac{Me}{13}=\\dfrac{52}{72}$",
            "$\\dfrac{Me-8}{13-8}=\\dfrac{52-40}{72-40}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On part de la borne $8$ et de son ECC $40$ : $\\dfrac{Me-8}{5}=\\dfrac{12}{32}$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q5",
          "type": "mcq",
          "prompt": "Anacarde : $Me\\in[4\\,;6[$, ECC $16$ et $28$, $\\dfrac{N}{2}=25$. Combien vaut $Me$ ?",
          "options": [
            "$5$",
            "$5{,}5$",
            "$4{,}75$",
            "$6$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$Me=4+2\\times\\dfrac{25-16}{28-16}=4+2\\times0{,}75=5{,}5$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q6",
          "type": "mcq",
          "prompt": "Sur la courbe des fréquences cumulées croissantes, à quelle ordonnée lit-on la médiane ?",
          "options": [
            "$0{,}5$",
            "$0{,}25$",
            "$1$",
            "$0{,}75$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec les fréquences, la moitié de l'effectif correspond à $0{,}5$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q7",
          "type": "mcq",
          "prompt": "Si la médiane avait été $4{,}8$ tonnes (moyenne inchangée $6{,}16$), la centrale aurait-elle obtenu le crédit ?",
          "options": [
            "Oui, car la moyenne dépasse $6$",
            "Oui, car $4{,}8$ est proche de $5$",
            "On ne peut pas savoir",
            "Non, car la médiane doit dépasser $5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les DEUX conditions sont exigées ; $4{,}8<5$ fait échouer la deuxième."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l06_statistiques_p04",
      "order": 4,
      "title": "Quartiles et écart interquartile",
      "summary": "$Q_1$ à $25\\,\\%$, $Q_3$ à $75\\,\\%$ de l'effectif, et $Q_3-Q_1$.",
      "conceptExplanation": "Les valeurs de la série étant ordonnées :\n- le premier quartile $Q_1$ : $25\\,\\%$ des valeurs lui sont inférieures ou égales ;\n- le deuxième quartile $Q_2$ est la médiane ;\n- le troisième quartile $Q_3$ : $75\\,\\%$ des valeurs lui sont inférieures ou égales.\n\nOn les calcule comme la médiane, par interpolation linéaire, en remplaçant $\\dfrac{N}{2}$ par $N\\times\\dfrac{25}{100}$ (pour $Q_1$) ou $N\\times\\dfrac{75}{100}$ (pour $Q_3$).\n\nL'écart interquartile est $Q_3-Q_1$ : il mesure la dispersion des $50\\,\\%$ de valeurs centrales.\n\nExemple ($N=104$, ECC $12$, $40$, $72$, $96$, $104$) :\n- $104\\times0{,}25=26$ est entre $12$ et $40$ : $Q_1=5+3\\times\\dfrac{26-12}{40-12}=6{,}5$ ;\n- $104\\times0{,}75=78$ est entre $72$ et $96$ : $Q_3=13+1\\times\\dfrac{78-72}{96-72}=13{,}25$ ;\n- écart interquartile : $13{,}25-6{,}5=6{,}75$.",
      "keyRule": "$Q_1$ : rang $\\dfrac{N}{4}$ ; $Q_3$ : rang $\\dfrac{3N}{4}$ ; écart interquartile $=Q_3-Q_1$.",
      "formulas": [
        {
          "name": "Écart interquartile",
          "formula": "Q_3-Q_1"
        }
      ],
      "workedExample": {
        "title": "Quartiles des notes",
        "statement": "Notes $[0\\,;5[$, $[5\\,;9[$, $[9\\,;12[$, $[12\\,;20[$ ; ECC $25$, $111$, $180$, $200$. Calcule $Q_1$, $Q_3$ et l'écart interquartile.",
        "methodSteps": [
          "$\\dfrac{N}{4}=50$, entre $25$ et $111$ : $Q_1=5+4\\times\\dfrac{50-25}{111-25}\\approx6{,}16$.",
          "$\\dfrac{3N}{4}=150$, entre $111$ et $180$ : $Q_3=9+3\\times\\dfrac{150-111}{180-111}\\approx10{,}70$.",
          "$Q_3-Q_1\\approx10{,}70-6{,}16=4{,}54$."
        ],
        "conclusion": "$Q_1\\approx6{,}16$, $Q_3\\approx10{,}70$, écart interquartile $\\approx4{,}54$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le premier quartile",
          "stepTheme": "Le premier quartile",
          "stepBadge": "Le premier quartile",
          "paragraphText": "$Q_1$ est la valeur telle que $25\\,\\%$ des valeurs lui sont inférieures ou égales et $75\\,\\%$ lui sont supérieures.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q1",
            "type": "mcq",
            "prompt": "Quel pourcentage des valeurs est inférieur ou égal au premier quartile $Q_1$ ?",
            "options": [
              "$50\\,\\%$",
              "$75\\,\\%$",
              "$25\\,\\%$",
              "$10\\,\\%$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Quartile » vient de « quart » : $Q_1$ marque le premier quart."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "$Q_2$ et $Q_3$",
          "stepTheme": "$Q_2$ et $Q_3$",
          "stepBadge": "$Q_2$ et $Q_3$",
          "paragraphText": "Le deuxième quartile $Q_2$ est la médiane. Le troisième quartile $Q_3$ laisse $75\\,\\%$ des valeurs en dessous.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q2",
            "type": "mcq",
            "prompt": "Quel autre nom porte le deuxième quartile $Q_2$ ?",
            "options": [
              "La médiane",
              "La moyenne",
              "Le mode",
              "L'écart type"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$Q_2$ laisse $50\\,\\%$ des valeurs en dessous : c'est la médiane."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le rang à viser",
          "stepTheme": "Le rang à viser",
          "stepBadge": "Le rang à viser",
          "paragraphText": "Pour $Q_1$, on vise le rang $N\\times\\dfrac{25}{100}$ ; pour $Q_3$, le rang $N\\times\\dfrac{75}{100}$. Avec $N=104$ : $26$ et $78$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q3",
            "type": "mcq",
            "prompt": "Avec $N=125$, quel rang vise-t-on pour calculer $Q_3$ ?",
            "options": [
              "$62{,}5$",
              "$31{,}25$",
              "$100$",
              "$93{,}75$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$125\\times\\dfrac{75}{100}=93{,}75$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Calculer $Q_1$",
          "stepTheme": "Calculer $Q_1$",
          "stepBadge": "Calculer $Q_1$",
          "paragraphText": "Rang $26$, entre les ECC $12$ et $40$ de la classe $[5\\,;8[$ : $\\dfrac{Q_1-5}{8-5}=\\dfrac{26-12}{40-12}$, donc $Q_1=5+3\\times0{,}5=6{,}5$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q4",
            "type": "mcq",
            "prompt": "Temps de sport : rang $31{,}25$, $Q_1\\in[0\\,;20[$ avec ECC $0$ puis $35$. Combien vaut $Q_1$ ?",
            "options": [
              "$31{,}25$",
              "Environ $17{,}86$",
              "$20$",
              "Environ $15{,}6$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$Q_1=0+20\\times\\dfrac{31{,}25-0}{35-0}\\approx17{,}86$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Calculer $Q_3$",
          "stepTheme": "Calculer $Q_3$",
          "stepBadge": "Calculer $Q_3$",
          "paragraphText": "Rang $78$, entre les ECC $72$ et $96$ de la classe $[13\\,;14[$ : $Q_3=13+1\\times\\dfrac{78-72}{96-72}=13{,}25$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q5",
            "type": "mcq",
            "prompt": "Temps de sport : rang $93{,}75$, $Q_3\\in[40\\,;60[$ avec ECC $76$ puis $106$. Combien vaut $Q_3$ ?",
            "options": [
              "Environ $51{,}83$",
              "$60$",
              "Environ $46{,}7$",
              "$93{,}75$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$Q_3=40+20\\times\\dfrac{93{,}75-76}{106-76}=40+20\\times\\dfrac{17{,}75}{30}\\approx51{,}83$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "L'écart interquartile",
          "stepTheme": "L'écart interquartile",
          "stepBadge": "L'écart interquartile",
          "paragraphText": "L'écart interquartile est $Q_3-Q_1$. Plus il est petit, plus les valeurs centrales sont regroupées.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q6",
            "type": "mcq",
            "prompt": "Avec $Q_1\\approx17{,}86$ et $Q_3\\approx51{,}83$, quel est l'écart interquartile ?",
            "options": [
              "$69{,}69$",
              "$34{,}85$",
              "Environ $33{,}97$",
              "$51{,}83$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$51{,}83-17{,}86=33{,}97$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Partir de la bonne borne",
          "stepTheme": "Partir de la bonne borne",
          "stepBadge": "Partir de la bonne borne",
          "paragraphText": "Dans l'interpolation, on part de la borne INFÉRIEURE de la classe et de son ECC : $Q_3=9+3\\times\\dfrac{150-111}{180-111}\\approx10{,}70$, et non $12-\\dots$",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q7",
            "type": "mcq",
            "prompt": "Notes : $Q_1\\approx6{,}16$ et $Q_3\\approx10{,}70$. Quel est l'écart interquartile ?",
            "options": [
              "$16{,}86$",
              "$4{,}54$",
              "$10{,}70$",
              "$8{,}43$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$10{,}70-6{,}16=4{,}54$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q1",
          "type": "mcq",
          "prompt": "Quel pourcentage des valeurs est inférieur ou égal au premier quartile $Q_1$ ?",
          "options": [
            "$50\\,\\%$",
            "$75\\,\\%$",
            "$25\\,\\%$",
            "$10\\,\\%$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Quartile » vient de « quart » : $Q_1$ marque le premier quart."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q2",
          "type": "mcq",
          "prompt": "Quel autre nom porte le deuxième quartile $Q_2$ ?",
          "options": [
            "La médiane",
            "La moyenne",
            "Le mode",
            "L'écart type"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$Q_2$ laisse $50\\,\\%$ des valeurs en dessous : c'est la médiane."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q3",
          "type": "mcq",
          "prompt": "Avec $N=125$, quel rang vise-t-on pour calculer $Q_3$ ?",
          "options": [
            "$62{,}5$",
            "$31{,}25$",
            "$100$",
            "$93{,}75$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$125\\times\\dfrac{75}{100}=93{,}75$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q4",
          "type": "mcq",
          "prompt": "Temps de sport : rang $31{,}25$, $Q_1\\in[0\\,;20[$ avec ECC $0$ puis $35$. Combien vaut $Q_1$ ?",
          "options": [
            "$31{,}25$",
            "Environ $17{,}86$",
            "$20$",
            "Environ $15{,}6$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$Q_1=0+20\\times\\dfrac{31{,}25-0}{35-0}\\approx17{,}86$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q5",
          "type": "mcq",
          "prompt": "Temps de sport : rang $93{,}75$, $Q_3\\in[40\\,;60[$ avec ECC $76$ puis $106$. Combien vaut $Q_3$ ?",
          "options": [
            "Environ $51{,}83$",
            "$60$",
            "Environ $46{,}7$",
            "$93{,}75$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$Q_3=40+20\\times\\dfrac{93{,}75-76}{106-76}=40+20\\times\\dfrac{17{,}75}{30}\\approx51{,}83$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q6",
          "type": "mcq",
          "prompt": "Avec $Q_1\\approx17{,}86$ et $Q_3\\approx51{,}83$, quel est l'écart interquartile ?",
          "options": [
            "$69{,}69$",
            "$34{,}85$",
            "Environ $33{,}97$",
            "$51{,}83$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$51{,}83-17{,}86=33{,}97$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q7",
          "type": "mcq",
          "prompt": "Notes : $Q_1\\approx6{,}16$ et $Q_3\\approx10{,}70$. Quel est l'écart interquartile ?",
          "options": [
            "$16{,}86$",
            "$4{,}54$",
            "$10{,}70$",
            "$8{,}43$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$10{,}70-6{,}16=4{,}54$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l06_statistiques_p05",
      "order": 5,
      "title": "Histogramme, polygone et courbe cumulative",
      "summary": "Représenter une série regroupée en classes.",
      "conceptExplanation": "Histogramme :\n- des rectangles juxtaposés, un par classe ;\n- la LARGEUR de chaque rectangle est proportionnelle à l'amplitude de la classe ;\n- la HAUTEUR est proportionnelle à la densité ;\n- l'AIRE est proportionnelle à l'effectif (ou à la fréquence).\nUne légende indique ce que représente un petit carreau (par exemple $1\\,\\%$).\n\nPolygone des effectifs (ou des fréquences) : on joint les milieux successifs des côtés supérieurs des rectangles de l'histogramme.\n\nCourbe cumulative (polygone des effectifs cumulés croissants) : on place les points (borne supérieure de chaque classe ; effectif cumulé), en partant de (première borne ; $0$), et on les relie par des segments. Elle vaut $0$ avant la première classe et $N$ (ou $1$ pour les fréquences) après la dernière. Elle sert à lire graphiquement la médiane et les quartiles.",
      "keyRule": "Histogramme : largeur = amplitude, hauteur = densité, aire = effectif. Courbe cumulative : points (borne supérieure ; ECC).",
      "formulas": [],
      "workedExample": {
        "title": "Les hauteurs d'un histogramme",
        "statement": "Classes $[2\\,;3[$, $[3\\,;4{,}5[$, $[4{,}5\\,;5{,}5[$, $[5{,}5\\,;6[$, $[6\\,;8[$ de fréquences $0{,}15$ ; $0{,}35$ ; $0{,}25$ ; $0{,}1$ ; $0{,}15$. Calcule les hauteurs.",
        "methodSteps": [
          "Amplitudes : $1$ ; $1{,}5$ ; $1$ ; $0{,}5$ ; $2$.",
          "Densités : $0{,}15$ ; $0{,}23$ ; $0{,}25$ ; $0{,}2$ ; $0{,}075$."
        ],
        "conclusion": "Le rectangle le plus haut est celui de $[4{,}5\\,;5{,}5[$, même si $[3\\,;4{,}5[$ a la plus grande fréquence."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les rectangles",
          "stepTheme": "Les rectangles",
          "stepBadge": "Les rectangles",
          "paragraphText": "L'histogramme est formé de rectangles juxtaposés : la largeur suit l'amplitude, la hauteur suit la densité.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q1",
            "type": "mcq",
            "prompt": "Dans un histogramme à classes inégales, la hauteur de chaque rectangle est proportionnelle à :",
            "options": [
              "L'effectif de la classe",
              "La densité de la classe",
              "Le centre de la classe",
              "L'effectif cumulé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'aire qui suit l'effectif ; la hauteur suit la densité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'aire des rectangles",
          "stepTheme": "L'aire des rectangles",
          "stepBadge": "L'aire des rectangles",
          "paragraphText": "L'aire d'un rectangle (largeur $\\times$ hauteur $=$ amplitude $\\times$ densité) est proportionnelle à l'effectif de la classe.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q2",
            "type": "mcq",
            "prompt": "À quoi l'AIRE d'un rectangle de l'histogramme est-elle proportionnelle ?",
            "options": [
              "À l'amplitude",
              "Au centre",
              "À la densité",
              "À l'effectif (ou à la fréquence)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "amplitude $\\times$ densité $=$ effectif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le plus haut rectangle",
          "stepTheme": "Le plus haut rectangle",
          "stepBadge": "Le plus haut rectangle",
          "paragraphText": "Pour les fréquences $0{,}15$ ; $0{,}35$ ; $0{,}25$ ; $0{,}1$ ; $0{,}15$ et les amplitudes $1$ ; $1{,}5$ ; $1$ ; $0{,}5$ ; $2$, les densités sont $0{,}15$ ; $0{,}23$ ; $0{,}25$ ; $0{,}2$ ; $0{,}075$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q3",
            "type": "mcq",
            "prompt": "Avec ces densités, quelle classe a le rectangle le plus haut ?",
            "options": [
              "$[4{,}5\\,;5{,}5[$",
              "$[3\\,;4{,}5[$",
              "$[6\\,;8[$",
              "$[2\\,;3[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La plus grande densité est $0{,}25$, celle de $[4{,}5\\,;5{,}5[$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La légende du carreau",
          "stepTheme": "La légende du carreau",
          "stepBadge": "La légende du carreau",
          "paragraphText": "Si un carreau mesure $0{,}5$ en largeur et $0{,}02$ en hauteur, son aire vaut $0{,}5\\times0{,}02=0{,}01$, soit $1\\,\\%$ de l'effectif.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q4",
            "type": "mcq",
            "prompt": "Un carreau vaut $1\\,\\%$. Combien de carreaux occupe une classe de fréquence $0{,}35$ ?",
            "options": [
              "$3{,}5$",
              "$350$",
              "$35$",
              "$0{,}35$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$0{,}35=35\\,\\%$, donc $35$ carreaux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le polygone des fréquences",
          "stepTheme": "Le polygone des fréquences",
          "stepBadge": "Le polygone des fréquences",
          "paragraphText": "On obtient le polygone des effectifs (ou des fréquences) en joignant les milieux successifs des côtés supérieurs des rectangles de l'histogramme.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q5",
            "type": "mcq",
            "prompt": "Quels points relie-t-on pour tracer le polygone des fréquences ?",
            "options": [
              "Les coins gauches des rectangles",
              "Les milieux des côtés supérieurs des rectangles",
              "Les bornes des classes sur l'axe",
              "Les effectifs cumulés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les milieux des côtés du haut, au-dessus des centres des classes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La courbe cumulative",
          "stepTheme": "La courbe cumulative",
          "stepBadge": "La courbe cumulative",
          "paragraphText": "On place les points (borne SUPÉRIEURE de la classe ; effectif cumulé), en commençant par (première borne ; $0$), puis on les relie.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q6",
            "type": "mcq",
            "prompt": "Classes $[1\\,;5[$ puis $[5\\,;8[$, ECC $12$ puis $40$. Quel point place-t-on pour la classe $[5\\,;8[$ ?",
            "options": [
              "$(5\\,;40)$",
              "$(6{,}5\\,;40)$",
              "$(8\\,;28)$",
              "$(8\\,;40)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On associe l'ECC $40$ à la borne supérieure $8$ : tous ces élèves ont moins de $8$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le point de départ",
          "stepTheme": "Le point de départ",
          "stepBadge": "Le point de départ",
          "paragraphText": "La courbe cumulative part de $0$ à la première borne et finit à $N$ (ou à $1$ pour les fréquences) à la dernière borne.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q7",
            "type": "mcq",
            "prompt": "Pour des classes de $[2\\,;3[$ à $[6\\,;8[$, quel est le premier point de la courbe des fréquences cumulées ?",
            "options": [
              "$(2\\,;0)$",
              "$(3\\,;0{,}15)$",
              "$(0\\,;0)$",
              "$(2\\,;0{,}15)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avant $2$, aucune valeur : on part de $(2\\,;0)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q1",
          "type": "mcq",
          "prompt": "Dans un histogramme à classes inégales, la hauteur de chaque rectangle est proportionnelle à :",
          "options": [
            "L'effectif de la classe",
            "La densité de la classe",
            "Le centre de la classe",
            "L'effectif cumulé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'aire qui suit l'effectif ; la hauteur suit la densité."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q2",
          "type": "mcq",
          "prompt": "À quoi l'AIRE d'un rectangle de l'histogramme est-elle proportionnelle ?",
          "options": [
            "À l'amplitude",
            "Au centre",
            "À la densité",
            "À l'effectif (ou à la fréquence)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "amplitude $\\times$ densité $=$ effectif."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q3",
          "type": "mcq",
          "prompt": "Avec ces densités, quelle classe a le rectangle le plus haut ?",
          "options": [
            "$[4{,}5\\,;5{,}5[$",
            "$[3\\,;4{,}5[$",
            "$[6\\,;8[$",
            "$[2\\,;3[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La plus grande densité est $0{,}25$, celle de $[4{,}5\\,;5{,}5[$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q4",
          "type": "mcq",
          "prompt": "Un carreau vaut $1\\,\\%$. Combien de carreaux occupe une classe de fréquence $0{,}35$ ?",
          "options": [
            "$3{,}5$",
            "$350$",
            "$35$",
            "$0{,}35$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$0{,}35=35\\,\\%$, donc $35$ carreaux."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q5",
          "type": "mcq",
          "prompt": "Quels points relie-t-on pour tracer le polygone des fréquences ?",
          "options": [
            "Les coins gauches des rectangles",
            "Les milieux des côtés supérieurs des rectangles",
            "Les bornes des classes sur l'axe",
            "Les effectifs cumulés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les milieux des côtés du haut, au-dessus des centres des classes."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q6",
          "type": "mcq",
          "prompt": "Classes $[1\\,;5[$ puis $[5\\,;8[$, ECC $12$ puis $40$. Quel point place-t-on pour la classe $[5\\,;8[$ ?",
          "options": [
            "$(5\\,;40)$",
            "$(6{,}5\\,;40)$",
            "$(8\\,;28)$",
            "$(8\\,;40)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On associe l'ECC $40$ à la borne supérieure $8$ : tous ces élèves ont moins de $8$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q7",
          "type": "mcq",
          "prompt": "Pour des classes de $[2\\,;3[$ à $[6\\,;8[$, quel est le premier point de la courbe des fréquences cumulées ?",
          "options": [
            "$(2\\,;0)$",
            "$(3\\,;0{,}15)$",
            "$(0\\,;0)$",
            "$(2\\,;0{,}15)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avant $2$, aucune valeur : on part de $(2\\,;0)$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l06_statistiques_p06",
      "order": 6,
      "title": "Variance, écart type et écart absolu moyen",
      "summary": "Mesurer la dispersion des valeurs autour de la moyenne.",
      "conceptExplanation": "Pour une série en classes de centres $c_i$, d'effectifs $n_i$, de moyenne $\\bar{x}$ :\n\nVariance :\n$$V=\\dfrac{1}{N}\\left[n_1(c_1-\\bar{x})^2+\\dots+n_p(c_p-\\bar{x})^2\\right]$$\nou, plus rapide :\n$$V=\\dfrac{1}{N}(n_1c_1^2+\\dots+n_pc_p^2)-\\bar{x}^2.$$\n\nÉcart type : $\\sigma=\\sqrt{V}$ (dans la même unité que les valeurs).\n\nÉcart absolu moyen :\n$$e_m=\\dfrac{1}{N}\\left(n_1|c_1-\\bar{x}|+\\dots+n_p|c_p-\\bar{x}|\\right).$$\n\nExemple (temps de sport de 125 élèves, centres $10$, $30$, $50$, $80$, $120$, $170$, effectifs $35$, $41$, $30$, $12$, $5$, $2$) : $\\bar{x}=39{,}84$ ; $\\sum n_ic_i^2=322\\,000$ ; $V=\\dfrac{322\\,000}{125}-39{,}84^2\\approx988{,}77$ ; $\\sigma\\approx31{,}44$ min ; $e_m=\\dfrac{2895{,}68}{125}\\approx23{,}17$ min.",
      "keyRule": "$V=\\dfrac{1}{N}\\sum n_ic_i^2-\\bar{x}^2$ ; $\\sigma=\\sqrt{V}$ ; $e_m=\\dfrac{1}{N}\\sum n_i|c_i-\\bar{x}|$.",
      "formulas": [
        {
          "name": "Variance",
          "formula": "V=\\dfrac{1}{N}(n_1c_1^2+\\dots+n_pc_p^2)-\\bar{x}^2"
        },
        {
          "name": "Écart type",
          "formula": "\\sigma=\\sqrt{V}"
        },
        {
          "name": "Écart absolu moyen",
          "formula": "e_m=\\dfrac{1}{N}\\left(n_1|c_1-\\bar{x}|+\\dots+n_p|c_p-\\bar{x}|\\right)"
        }
      ],
      "workedExample": {
        "title": "Variance et écart type des notes",
        "statement": "Centres $2{,}5$ ; $7$ ; $10{,}5$ ; $16$, effectifs $25$ ; $86$ ; $69$ ; $20$, $\\bar{x}=8{,}545$. Calcule $V$ et $\\sigma$.",
        "methodSteps": [
          "$\\sum n_ic_i^2=156{,}25+4214+7607{,}25+5120=17\\,097{,}5$.",
          "$V=\\dfrac{17\\,097{,}5}{200}-8{,}545^2\\approx85{,}49-73{,}02=12{,}47$.",
          "$\\sigma=\\sqrt{12{,}47}\\approx3{,}53$."
        ],
        "conclusion": "$V\\approx12{,}47$ et $\\sigma\\approx3{,}53$ points."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Mesurer la dispersion",
          "stepTheme": "Mesurer la dispersion",
          "stepBadge": "Mesurer la dispersion",
          "paragraphText": "Deux classes peuvent avoir la même moyenne, mais des notes plus ou moins étalées. La variance, l'écart type et l'écart absolu moyen mesurent cet étalement autour de $\\bar{x}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q1",
            "type": "mcq",
            "prompt": "Que mesure l'écart type d'une série ?",
            "options": [
              "La valeur la plus fréquente",
              "La valeur du milieu",
              "La dispersion des valeurs autour de la moyenne",
              "Le nombre de classes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Plus l'écart type est grand, plus les valeurs sont éloignées de la moyenne."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule rapide",
          "stepTheme": "La formule rapide",
          "stepBadge": "La formule rapide",
          "paragraphText": "$V=\\dfrac{1}{N}(n_1c_1^2+\\dots+n_pc_p^2)-\\bar{x}^2$ : on fait la moyenne des carrés, puis on retire le carré de la moyenne.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q2",
            "type": "mcq",
            "prompt": "Dans la formule rapide de la variance, que retire-t-on à la fin ?",
            "options": [
              "$\\bar{x}$",
              "$\\bar{x}^2$",
              "$N$",
              "$\\sqrt{\\bar{x}}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$V=\\dfrac{1}{N}\\sum n_ic_i^2-\\bar{x}^2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un calcul de variance",
          "stepTheme": "Un calcul de variance",
          "stepBadge": "Un calcul de variance",
          "paragraphText": "Temps de sport : $\\sum n_ic_i^2=322\\,000$, $N=125$, $\\bar{x}=39{,}84$. Donc $V=2576-1587{,}23\\approx988{,}77$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q3",
            "type": "mcq",
            "prompt": "Avec $\\dfrac{1}{N}\\sum n_ic_i^2=85{,}49$ et $\\bar{x}^2=73{,}02$, combien vaut $V$ ?",
            "options": [
              "$158{,}51$",
              "$73{,}02$",
              "$85{,}49$",
              "$12{,}47$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$85{,}49-73{,}02=12{,}47$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'écart type",
          "stepTheme": "L'écart type",
          "stepBadge": "L'écart type",
          "paragraphText": "L'écart type est la racine carrée de la variance : $\\sigma=\\sqrt{V}$. Il s'exprime dans la même unité que les valeurs.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q4",
            "type": "mcq",
            "prompt": "La variance vaut $988{,}77$. Quel est l'écart type ?",
            "options": [
              "Environ $31{,}44$",
              "$494{,}39$",
              "$988{,}77^2$",
              "Environ $9{,}9$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\sqrt{988{,}77}\\approx31{,}44$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'écart absolu moyen",
          "stepTheme": "L'écart absolu moyen",
          "stepBadge": "L'écart absolu moyen",
          "paragraphText": "$e_m=\\dfrac{1}{N}\\sum n_i|c_i-\\bar{x}|$ : c'est la moyenne des distances (toujours positives) entre les centres et la moyenne.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q5",
            "type": "mcq",
            "prompt": "Avec $\\bar{x}=39{,}84$, que vaut $|10-\\bar{x}|$ ?",
            "options": [
              "$-29{,}84$",
              "$49{,}84$",
              "$29{,}84$",
              "$3{,}98$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$10-39{,}84=-29{,}84$, et sa valeur absolue est $29{,}84$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un calcul d'écart absolu moyen",
          "stepTheme": "Un calcul d'écart absolu moyen",
          "stepBadge": "Un calcul d'écart absolu moyen",
          "paragraphText": "Temps de sport : $\\sum n_i|c_i-\\bar{x}|=2895{,}68$ et $N=125$, donc $e_m=\\dfrac{2895{,}68}{125}\\approx23{,}17$ minutes.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q6",
            "type": "mcq",
            "prompt": "Si $\\sum n_i|c_i-\\bar{x}|=567{,}8$ et $N=200$, combien vaut $e_m$ ?",
            "options": [
              "$567{,}8$",
              "Environ $2{,}84$",
              "$113{,}56$",
              "$0{,}35$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{567{,}8}{200}\\approx2{,}84$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Variance et écart type",
          "stepTheme": "Variance et écart type",
          "stepBadge": "Variance et écart type",
          "paragraphText": "Ne donne pas la variance quand on demande l'écart type : la variance est en « unité au carré », l'écart type dans l'unité des données.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q7",
            "type": "mcq",
            "prompt": "La variance des notes est $12{,}47$. Quel est l'écart type, en points ?",
            "options": [
              "Environ $3{,}53$",
              "$12{,}47$",
              "$155{,}5$",
              "$6{,}24$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\sigma=\\sqrt{12{,}47}\\approx3{,}53$ points."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q1",
          "type": "mcq",
          "prompt": "Que mesure l'écart type d'une série ?",
          "options": [
            "La valeur la plus fréquente",
            "La valeur du milieu",
            "La dispersion des valeurs autour de la moyenne",
            "Le nombre de classes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Plus l'écart type est grand, plus les valeurs sont éloignées de la moyenne."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q2",
          "type": "mcq",
          "prompt": "Dans la formule rapide de la variance, que retire-t-on à la fin ?",
          "options": [
            "$\\bar{x}$",
            "$\\bar{x}^2$",
            "$N$",
            "$\\sqrt{\\bar{x}}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$V=\\dfrac{1}{N}\\sum n_ic_i^2-\\bar{x}^2$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q3",
          "type": "mcq",
          "prompt": "Avec $\\dfrac{1}{N}\\sum n_ic_i^2=85{,}49$ et $\\bar{x}^2=73{,}02$, combien vaut $V$ ?",
          "options": [
            "$158{,}51$",
            "$73{,}02$",
            "$85{,}49$",
            "$12{,}47$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$85{,}49-73{,}02=12{,}47$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q4",
          "type": "mcq",
          "prompt": "La variance vaut $988{,}77$. Quel est l'écart type ?",
          "options": [
            "Environ $31{,}44$",
            "$494{,}39$",
            "$988{,}77^2$",
            "Environ $9{,}9$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\sqrt{988{,}77}\\approx31{,}44$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q5",
          "type": "mcq",
          "prompt": "Avec $\\bar{x}=39{,}84$, que vaut $|10-\\bar{x}|$ ?",
          "options": [
            "$-29{,}84$",
            "$49{,}84$",
            "$29{,}84$",
            "$3{,}98$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$10-39{,}84=-29{,}84$, et sa valeur absolue est $29{,}84$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q6",
          "type": "mcq",
          "prompt": "Si $\\sum n_i|c_i-\\bar{x}|=567{,}8$ et $N=200$, combien vaut $e_m$ ?",
          "options": [
            "$567{,}8$",
            "Environ $2{,}84$",
            "$113{,}56$",
            "$0{,}35$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{567{,}8}{200}\\approx2{,}84$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q7",
          "type": "mcq",
          "prompt": "La variance des notes est $12{,}47$. Quel est l'écart type, en points ?",
          "options": [
            "Environ $3{,}53$",
            "$12{,}47$",
            "$155{,}5$",
            "$6{,}24$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\sigma=\\sqrt{12{,}47}\\approx3{,}53$ points."
        }
      ]
    }
  ]
};
