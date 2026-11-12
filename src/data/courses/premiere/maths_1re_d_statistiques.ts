import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1D Maths leçon 15 STATISTIQUE.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_1RE_D_L15_STATISTIQUES: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l15_statistiques",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 15,
  "title": "Leçon 15 : Statistiques",
  "summary": "Séries regroupées en classes, densité et classe modale, moyenne, médiane et quartiles par interpolation, histogramme et courbes cumulatives, variance, écart type, écart absolu moyen et écart interquartile, choix d'une machine.",
  "officialVolumeHours": 7,
  "contentVersion": 2,
  "source": "1D Maths leçon 15 STATISTIQUE.pdf",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p01",
      "order": 1,
      "title": "Séries regroupées en classes",
      "summary": "Classe, effectif, amplitude et centre d'une classe.",
      "conceptExplanation": "Quand les valeurs sont nombreuses, on les regroupe en classes $[x_i;x_{i+1}[$ :\n- l'effectif $n_i$ est le nombre de valeurs dans la classe, et $N$ l'effectif total ;\n- l'amplitude de la classe est $x_{i+1}-x_i$ ;\n- le centre de la classe est $c_i=\\dfrac{x_i+x_{i+1}}{2}$ ;\n- la fréquence est $f_i=\\dfrac{n_i}{N}$.\n\nExemple : une agence bancaire relève les montants (en milliers de F) des 49 premiers versements de la journée. Regroupés en classes d'amplitude 300 :\n- $[0;300[$ : 19 versements, centre 150 ;\n- $[300;600[$ : 14, centre 450 ;\n- $[600;900[$ : 6, centre 750 ;\n- $[900;1200[$ : 8, centre 1050 ;\n- $[1200;1500[$ : 2, centre 1350.\nTotal : $N=19+14+6+8+2=49$.\n\nAttention aux crochets : $[300;600[$ contient 300 mais pas 600. Un versement de 600 va dans la classe $[600;900[$.",
      "keyRule": "Amplitude $=x_{i+1}-x_i$ ; centre $=\\dfrac{x_i+x_{i+1}}{2}$ ; une valeur égale à la borne droite va dans la classe suivante.",
      "formulas": [
        {
          "name": "Centre d'une classe",
          "formula": "c_i=\\dfrac{x_i+x_{i+1}}{2}"
        },
        {
          "name": "Fréquence",
          "formula": "f_i=\\dfrac{n_i}{N}"
        }
      ],
      "workedExample": {
        "title": "Les versements bancaires",
        "statement": "Les 49 versements sont répartis en $[0;300[$ : 19 ; $[300;600[$ : 14 ; $[600;900[$ : 6 ; $[900;1200[$ : 8 ; $[1200;1500[$ : 2. Donne la fréquence et le centre de la classe $[300;600[$.",
        "methodSteps": [
          "Fréquence : $\\dfrac{14}{49}\\approx0{,}29$, soit environ 29 %.",
          "Centre : $\\dfrac{300+600}{2}=450$."
        ],
        "conclusion": "La classe $[300;600[$ a une fréquence d'environ 29 % et pour centre 450."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'amplitude",
          "stepTheme": "L'amplitude",
          "stepBadge": "L'amplitude",
          "paragraphText": "L'amplitude d'une classe $[x_i;x_{i+1}[$ est la différence de ses bornes : $x_{i+1}-x_i$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p01_q1",
            "type": "mcq",
            "prompt": "Quelle est l'amplitude de la classe $[45;70[$ ?",
            "options": [
              "$57{,}5$",
              "$115$",
              "$25$",
              "$70$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$70-45=25$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le centre",
          "stepTheme": "Le centre",
          "stepBadge": "Le centre",
          "paragraphText": "Le centre d'une classe est la moyenne de ses deux bornes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p01_q2",
            "type": "mcq",
            "prompt": "Quel est le centre de la classe $[30;45[$ ?",
            "options": [
              "$15$",
              "$37{,}5$",
              "$75$",
              "$40$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{30+45}{2}=37{,}5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Ranger une valeur",
          "stepTheme": "Ranger une valeur",
          "stepBadge": "Ranger une valeur",
          "paragraphText": "Le crochet ouvert $[$ à droite exclut la borne : 600 n'est pas dans $[300;600[$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p01_q3",
            "type": "mcq",
            "prompt": "Des versements sont regroupés en classes $[0;300[$, $[300;600[$, $[600;900[$… Dans quelle classe range-t-on un versement de 600 ?",
            "options": [
              "$[300;600[$",
              "Dans les deux",
              "$[0;300[$",
              "$[600;900[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$600$ n'appartient pas à $[300;600[$ (crochet ouvert), mais appartient à $[600;900[$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'effectif total",
          "stepTheme": "L'effectif total",
          "stepBadge": "L'effectif total",
          "paragraphText": "L'effectif total $N$ est la somme des effectifs de toutes les classes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p01_q4",
            "type": "mcq",
            "prompt": "Des versements sont répartis ainsi : $[0;300[$ : 19 ; $[300;600[$ : 14 ; $[600;900[$ : 6 ; $[900;1200[$ : 8 ; $[1200;1500[$ : 2. Quel est l'effectif total ?",
            "options": [
              "$49$",
              "$47$",
              "$50$",
              "$5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$19+14+6+8+2=49$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La fréquence",
          "stepTheme": "La fréquence",
          "stepBadge": "La fréquence",
          "paragraphText": "La fréquence d'une classe est $\\dfrac{n_i}{N}$ ; la somme des fréquences vaut $1$ (ou 100 %).",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p01_q5",
            "type": "mcq",
            "prompt": "Une série de $N=50$ valeurs a une classe d'effectif $15$. Quelle est la fréquence de cette classe ?",
            "options": [
              "$0{,}15$",
              "$15$",
              "$0{,}3$",
              "$3{,}3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{15}{50}=0{,}3$, soit 30 %."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Compléter un tableau",
          "stepTheme": "Compléter un tableau",
          "stepBadge": "Compléter un tableau",
          "paragraphText": "Pour la classe $[1200;1500[$ : amplitude $300$ et centre $1350$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p01_q6",
            "type": "mcq",
            "prompt": "Quels sont l'amplitude et le centre de la classe $[900;1200[$ ?",
            "options": [
              "Amplitude $300$, centre $1050$",
              "Amplitude $1050$, centre $300$",
              "Amplitude $300$, centre $1000$",
              "Amplitude $2100$, centre $1050$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$1200-900=300$ et $\\dfrac{900+1200}{2}=1050$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Des amplitudes différentes",
          "stepTheme": "Des amplitudes différentes",
          "stepBadge": "Des amplitudes différentes",
          "paragraphText": "Les classes n'ont pas toujours la même amplitude. On ne peut alors pas comparer les classes avec leurs seuls effectifs.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p01_q7",
            "type": "mcq",
            "prompt": "Une série a les classes $[0;30[$, $[30;45[$, $[45;70[$, $[70;80[$ et $[80;100[$. Laquelle a la plus petite amplitude ?",
            "options": [
              "$[0;30[$",
              "$[30;45[$",
              "$[80;100[$",
              "$[70;80[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Amplitudes : 30 ; 15 ; 25 ; 10 ; 20. La plus petite est 10."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p01_q1",
          "type": "mcq",
          "prompt": "Quelle est l'amplitude de la classe $[45;70[$ ?",
          "options": [
            "$57{,}5$",
            "$115$",
            "$25$",
            "$70$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$70-45=25$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p01_q2",
          "type": "mcq",
          "prompt": "Quel est le centre de la classe $[30;45[$ ?",
          "options": [
            "$15$",
            "$37{,}5$",
            "$75$",
            "$40$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{30+45}{2}=37{,}5$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p01_q3",
          "type": "mcq",
          "prompt": "Des versements sont regroupés en classes $[0;300[$, $[300;600[$, $[600;900[$… Dans quelle classe range-t-on un versement de 600 ?",
          "options": [
            "$[300;600[$",
            "Dans les deux",
            "$[0;300[$",
            "$[600;900[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$600$ n'appartient pas à $[300;600[$ (crochet ouvert), mais appartient à $[600;900[$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p01_q4",
          "type": "mcq",
          "prompt": "Des versements sont répartis ainsi : $[0;300[$ : 19 ; $[300;600[$ : 14 ; $[600;900[$ : 6 ; $[900;1200[$ : 8 ; $[1200;1500[$ : 2. Quel est l'effectif total ?",
          "options": [
            "$49$",
            "$47$",
            "$50$",
            "$5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$19+14+6+8+2=49$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p01_q5",
          "type": "mcq",
          "prompt": "Une série de $N=50$ valeurs a une classe d'effectif $15$. Quelle est la fréquence de cette classe ?",
          "options": [
            "$0{,}15$",
            "$15$",
            "$0{,}3$",
            "$3{,}3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{15}{50}=0{,}3$, soit 30 %."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p01_q6",
          "type": "mcq",
          "prompt": "Quels sont l'amplitude et le centre de la classe $[900;1200[$ ?",
          "options": [
            "Amplitude $300$, centre $1050$",
            "Amplitude $1050$, centre $300$",
            "Amplitude $300$, centre $1000$",
            "Amplitude $2100$, centre $1050$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$1200-900=300$ et $\\dfrac{900+1200}{2}=1050$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p01_q7",
          "type": "mcq",
          "prompt": "Une série a les classes $[0;30[$, $[30;45[$, $[45;70[$, $[70;80[$ et $[80;100[$. Laquelle a la plus petite amplitude ?",
          "options": [
            "$[0;30[$",
            "$[30;45[$",
            "$[80;100[$",
            "$[70;80[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Amplitudes : 30 ; 15 ; 25 ; 10 ; 20. La plus petite est 10."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p02",
      "order": 2,
      "title": "Densité et classe modale",
      "summary": "La densité compare des classes d'amplitudes différentes ; la classe modale a la plus grande densité.",
      "conceptExplanation": "Définition : la densité d'une classe est le quotient de son effectif par son amplitude :\n$$d_i=\\dfrac{n_i}{\\text{amplitude}}.$$\n\nDéfinition : une classe modale est une classe de densité maximale.\nCas particulier : si toutes les classes ont la même amplitude, la classe modale est celle de plus grand effectif.\n\nExemple : production (en tonnes) de 90 coopératives de cacao.\n- $[0;30[$ : 13 coopératives, amplitude 30, densité $\\dfrac{13}{30}\\approx0{,}43$ ;\n- $[30;45[$ : 20, amplitude 15, densité $\\approx1{,}33$ ;\n- $[45;70[$ : 25, amplitude 25, densité $1$ ;\n- $[70;80[$ : 15, amplitude 10, densité $1{,}5$ ;\n- $[80;100[$ : 17, amplitude 20, densité $0{,}85$.\nLa classe modale est $[70;80[$ : c'est là que les coopératives sont le plus concentrées. Pourtant, ce n'est pas la classe de plus grand effectif, $[45;70[$.\n\nAutre exemple : surfaces $[0;10[$ : 20 ; $[10;15[$ : 10 ; $[15;17[$ : 15 ; $[17;20[$ : 5. Densités : 2 ; 2 ; 7,5 ; 1,67. Classe modale : $[15;17[$.",
      "keyRule": "Densité $=\\dfrac{\\text{effectif}}{\\text{amplitude}}$. Classe modale = densité maximale (effectif maximal seulement si les amplitudes sont égales).",
      "formulas": [
        {
          "name": "Densité",
          "formula": "d_i=\\dfrac{n_i}{x_{i+1}-x_i}"
        }
      ],
      "workedExample": {
        "title": "Les coopératives de cacao",
        "statement": "Classes et effectifs : $[0;30[$ : 13 ; $[30;45[$ : 20 ; $[45;70[$ : 25 ; $[70;80[$ : 15 ; $[80;100[$ : 17. Quelle est la classe modale ?",
        "methodSteps": [
          "Amplitudes : 30 ; 15 ; 25 ; 10 ; 20.",
          "Densités : 0,43 ; 1,33 ; 1 ; 1,5 ; 0,85."
        ],
        "conclusion": "La densité maximale est 1,5 : la classe modale est $[70;80[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Calculer une densité",
          "stepTheme": "Calculer une densité",
          "stepBadge": "Calculer une densité",
          "paragraphText": "Densité = effectif ÷ amplitude : c'est le nombre de valeurs par unité.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p02_q1",
            "type": "mcq",
            "prompt": "La classe $[0;30[$ contient 13 coopératives. Quelle est sa densité, environ ?",
            "options": [
              "$13$",
              "$0{,}43$",
              "$2{,}3$",
              "$390$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{13}{30}\\approx0{,}43$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une classe étroite",
          "stepTheme": "Une classe étroite",
          "stepBadge": "Une classe étroite",
          "paragraphText": "Une classe étroite avec un effectif moyen peut avoir une grande densité.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p02_q2",
            "type": "mcq",
            "prompt": "La classe $[70;80[$ contient 15 coopératives. Quelle est sa densité ?",
            "options": [
              "$1{,}5$",
              "$15$",
              "$0{,}15$",
              "$150$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Amplitude $10$ : $\\dfrac{15}{10}=1{,}5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La classe modale",
          "stepTheme": "La classe modale",
          "stepBadge": "La classe modale",
          "paragraphText": "La classe modale est la classe de densité maximale.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p02_q3",
            "type": "mcq",
            "prompt": "Production de coopératives : $[0;30[$ : 13 ; $[30;45[$ : 20 ; $[45;70[$ : 25 ; $[70;80[$ : 15 ; $[80;100[$ : 17. Quelle est la classe modale ?",
            "options": [
              "$[45;70[$",
              "$[30;45[$",
              "$[70;80[$",
              "$[80;100[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Densités : 0,43 ; 1,33 ; 1 ; 1,5 ; 0,85. La plus grande est 1,5."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Pas le plus grand effectif",
          "stepTheme": "Pas le plus grand effectif",
          "stepBadge": "Pas le plus grand effectif",
          "paragraphText": "Avec des amplitudes différentes, la classe de plus grand effectif n'est pas forcément la classe modale.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p02_q4",
            "type": "mcq",
            "prompt": "Dans la série $[0;30[$ : 13 ; $[30;45[$ : 20 ; $[45;70[$ : 25 ; $[70;80[$ : 15 ; $[80;100[$ : 17, pourquoi $[45;70[$ n'est-elle pas la classe modale ?",
            "options": [
              "Car son effectif est trop petit",
              "Car sa densité (1) est inférieure à celle de $[70;80[$ (1,5)",
              "Car elle est au milieu",
              "Elle est la classe modale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On compare les densités, pas les effectifs, quand les amplitudes diffèrent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Amplitudes égales",
          "stepTheme": "Amplitudes égales",
          "stepBadge": "Amplitudes égales",
          "paragraphText": "Si toutes les classes ont la même amplitude, la classe modale est simplement celle de plus grand effectif.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p02_q5",
            "type": "mcq",
            "prompt": "Versements : $[0;300[$ : 19 ; $[300;600[$ : 14 ; $[600;900[$ : 6 ; $[900;1200[$ : 8 ; $[1200;1500[$ : 2. Quelle est la classe modale ?",
            "options": [
              "$[300;600[$",
              "$[900;1200[$",
              "$[1200;1500[$",
              "$[0;300[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Toutes les amplitudes valent 300 : on prend le plus grand effectif, 19."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un autre exemple",
          "stepTheme": "Un autre exemple",
          "stepBadge": "Un autre exemple",
          "paragraphText": "Surfaces (m²) : $[0;10[$ : 20 ; $[10;15[$ : 10 ; $[15;17[$ : 15 ; $[17;20[$ : 5. Densités : 2 ; 2 ; 7,5 ; 1,67.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p02_q6",
            "type": "mcq",
            "prompt": "Surfaces (m²) : $[0;10[$ : 20 ; $[10;15[$ : 10 ; $[15;17[$ : 15 ; $[17;20[$ : 5. Quelle est la classe modale ?",
            "options": [
              "$[0;10[$",
              "$[15;17[$",
              "$[10;15[$",
              "$[17;20[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$[15;17[$ a une densité de $\\dfrac{15}{2}=7{,}5$, la plus grande."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Interpréter",
          "stepTheme": "Interpréter",
          "stepBadge": "Interpréter",
          "paragraphText": "La classe modale est la zone où les valeurs sont le plus concentrées.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p02_q7",
            "type": "mcq",
            "prompt": "Pour la production de 90 coopératives de cacao, la classe modale est $[70;80[$ tonnes. Que signifie ce résultat ?",
            "options": [
              "La moyenne est 75 tonnes",
              "La moitié des coopératives produit plus de 70 tonnes",
              "C'est entre 70 et 80 tonnes que les coopératives sont le plus concentrées",
              "Aucune coopérative ne produit plus de 80 tonnes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La classe modale indique la plus forte concentration, pas la moyenne ni la médiane."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p02_q1",
          "type": "mcq",
          "prompt": "La classe $[0;30[$ contient 13 coopératives. Quelle est sa densité, environ ?",
          "options": [
            "$13$",
            "$0{,}43$",
            "$2{,}3$",
            "$390$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{13}{30}\\approx0{,}43$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p02_q2",
          "type": "mcq",
          "prompt": "La classe $[70;80[$ contient 15 coopératives. Quelle est sa densité ?",
          "options": [
            "$1{,}5$",
            "$15$",
            "$0{,}15$",
            "$150$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Amplitude $10$ : $\\dfrac{15}{10}=1{,}5$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p02_q3",
          "type": "mcq",
          "prompt": "Production de coopératives : $[0;30[$ : 13 ; $[30;45[$ : 20 ; $[45;70[$ : 25 ; $[70;80[$ : 15 ; $[80;100[$ : 17. Quelle est la classe modale ?",
          "options": [
            "$[45;70[$",
            "$[30;45[$",
            "$[70;80[$",
            "$[80;100[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Densités : 0,43 ; 1,33 ; 1 ; 1,5 ; 0,85. La plus grande est 1,5."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p02_q4",
          "type": "mcq",
          "prompt": "Dans la série $[0;30[$ : 13 ; $[30;45[$ : 20 ; $[45;70[$ : 25 ; $[70;80[$ : 15 ; $[80;100[$ : 17, pourquoi $[45;70[$ n'est-elle pas la classe modale ?",
          "options": [
            "Car son effectif est trop petit",
            "Car sa densité (1) est inférieure à celle de $[70;80[$ (1,5)",
            "Car elle est au milieu",
            "Elle est la classe modale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On compare les densités, pas les effectifs, quand les amplitudes diffèrent."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p02_q5",
          "type": "mcq",
          "prompt": "Versements : $[0;300[$ : 19 ; $[300;600[$ : 14 ; $[600;900[$ : 6 ; $[900;1200[$ : 8 ; $[1200;1500[$ : 2. Quelle est la classe modale ?",
          "options": [
            "$[300;600[$",
            "$[900;1200[$",
            "$[1200;1500[$",
            "$[0;300[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Toutes les amplitudes valent 300 : on prend le plus grand effectif, 19."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p02_q6",
          "type": "mcq",
          "prompt": "Surfaces (m²) : $[0;10[$ : 20 ; $[10;15[$ : 10 ; $[15;17[$ : 15 ; $[17;20[$ : 5. Quelle est la classe modale ?",
          "options": [
            "$[0;10[$",
            "$[15;17[$",
            "$[10;15[$",
            "$[17;20[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$[15;17[$ a une densité de $\\dfrac{15}{2}=7{,}5$, la plus grande."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p02_q7",
          "type": "mcq",
          "prompt": "Pour la production de 90 coopératives de cacao, la classe modale est $[70;80[$ tonnes. Que signifie ce résultat ?",
          "options": [
            "La moyenne est 75 tonnes",
            "La moitié des coopératives produit plus de 70 tonnes",
            "C'est entre 70 et 80 tonnes que les coopératives sont le plus concentrées",
            "Aucune coopérative ne produit plus de 80 tonnes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La classe modale indique la plus forte concentration, pas la moyenne ni la médiane."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p03",
      "order": 3,
      "title": "La moyenne",
      "summary": "On remplace chaque classe par son centre : $\\bar x=\\dfrac{\\sum n_ic_i}{N}$.",
      "conceptExplanation": "Pour une série regroupée en classes, on remplace chaque valeur par le centre $c_i$ de sa classe :\n$$\\bar x=\\dfrac{n_1c_1+n_2c_2+\\dots+n_pc_p}{N}=f_1c_1+f_2c_2+\\dots+f_pc_p.$$\n\nExemple : production (en tonnes) de 90 coopératives de cacao.\n- $[0;30[$ : 13, centre 15, $n_ic_i=195$ ;\n- $[30;45[$ : 20, centre 37,5, $n_ic_i=750$ ;\n- $[45;70[$ : 25, centre 57,5, $n_ic_i=1437{,}5$ ;\n- $[70;80[$ : 15, centre 75, $n_ic_i=1125$ ;\n- $[80;100[$ : 17, centre 90, $n_ic_i=1530$.\nSomme : $5037{,}5$. Moyenne : $\\bar x=\\dfrac{5037{,}5}{90}\\approx55{,}97$ tonnes.\n\nExemple : temps de sport par semaine de 125 élèves, $[0;20[$ : 35 ; $[20;40[$ : 41 ; $[40;60[$ : 30 ; $[60;100[$ : 12 ; $[100;140[$ : 5 ; $[140;200[$ : 2. $\\sum n_ic_i=4980$, donc $\\bar x=\\dfrac{4980}{125}=39{,}84$ min.\n\nLa moyenne obtenue est une valeur approchée : on suppose les valeurs réparties autour du centre de chaque classe.",
      "keyRule": "$\\bar x=\\dfrac{\\sum n_ic_i}{N}$ avec les CENTRES des classes ; on divise par l'effectif total, pas par le nombre de classes.",
      "formulas": [
        {
          "name": "Moyenne",
          "formula": "\\bar x=\\dfrac{1}{N}\\sum_{i=1}^{p}n_ic_i=\\sum_{i=1}^{p}f_ic_i"
        }
      ],
      "workedExample": {
        "title": "Le temps de sport",
        "statement": "125 élèves : $[0;20[$ : 35 ; $[20;40[$ : 41 ; $[40;60[$ : 30 ; $[60;100[$ : 12 ; $[100;140[$ : 5 ; $[140;200[$ : 2. Calcule la moyenne.",
        "methodSteps": [
          "Centres : 10 ; 30 ; 50 ; 80 ; 120 ; 170.",
          "$\\sum n_ic_i=350+1230+1500+960+600+340=4980$."
        ],
        "conclusion": "$\\bar x=\\dfrac{4980}{125}=39{,}84$ minutes par semaine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "On utilise les centres",
          "stepTheme": "On utilise les centres",
          "stepBadge": "On utilise les centres",
          "paragraphText": "Chaque classe est représentée par son centre, multiplié par son effectif.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p03_q1",
            "type": "mcq",
            "prompt": "La classe $[0;30[$ contient 13 coopératives. Que vaut $n_ic_i$ pour cette classe ?",
            "options": [
              "$390$",
              "$13$",
              "$195$",
              "$43$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Centre $15$ : $13\\times15=195$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La moyenne des coopératives",
          "stepTheme": "La moyenne des coopératives",
          "stepBadge": "La moyenne des coopératives",
          "paragraphText": "$\\sum n_ic_i=195+750+1437{,}5+1125+1530=5037{,}5$ pour $N=90$ coopératives.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p03_q2",
            "type": "mcq",
            "prompt": "Pour 90 coopératives, $\\sum n_ic_i=5037{,}5$. Quelle est la production moyenne, environ ?",
            "options": [
              "$55{,}97$ t",
              "$1007{,}5$ t",
              "$50$ t",
              "$5037{,}5$ t"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{5037{,}5}{90}\\approx55{,}97$ tonnes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Diviser par N",
          "stepTheme": "Diviser par N",
          "stepBadge": "Diviser par N",
          "paragraphText": "On divise par l'effectif total $N$, pas par le nombre de classes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p03_q3",
            "type": "mcq",
            "prompt": "Une série a 5 classes, un effectif total $N=90$ et $\\sum n_ic_i=5037{,}5$. Par quel nombre divise-t-on $5037{,}5$ pour obtenir la moyenne ?",
            "options": [
              "$5$",
              "$100$",
              "$45$",
              "$90$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La moyenne est $\\dfrac{\\sum n_ic_i}{N}$, avec $N=90$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le temps de sport",
          "stepTheme": "Le temps de sport",
          "stepBadge": "Le temps de sport",
          "paragraphText": "125 élèves, centres 10 ; 30 ; 50 ; 80 ; 120 ; 170, effectifs 35 ; 41 ; 30 ; 12 ; 5 ; 2 : $\\sum n_ic_i=4980$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p03_q4",
            "type": "mcq",
            "prompt": "Pour 125 élèves, la somme $\\sum n_ic_i$ des temps de sport (en min) vaut $4980$. Quel est le temps moyen ?",
            "options": [
              "$41{,}5$ min",
              "$39{,}84$ min",
              "$830$ min",
              "$49{,}8$ min"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{4980}{125}=39{,}84$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Avec les fréquences",
          "stepTheme": "Avec les fréquences",
          "stepBadge": "Avec les fréquences",
          "paragraphText": "On peut aussi écrire $\\bar x=\\sum f_ic_i$ : on multiplie chaque centre par sa fréquence.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p03_q5",
            "type": "mcq",
            "prompt": "Une série a deux classes : $[0;10[$ de fréquence $0{,}4$ et $[10;20[$ de fréquence $0{,}6$. Quelle est la moyenne ?",
            "options": [
              "$11$",
              "$10$",
              "$5$",
              "$15$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$0{,}4\\times5+0{,}6\\times15=2+9=11$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les surfaces",
          "stepTheme": "Les surfaces",
          "stepBadge": "Les surfaces",
          "paragraphText": "Surfaces : $[0;10[$ : 20 ; $[10;15[$ : 10 ; $[15;17[$ : 15 ; $[17;20[$ : 5. Centres 5 ; 12,5 ; 16 ; 18,5.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p03_q6",
            "type": "mcq",
            "prompt": "Surfaces (m²) : $[0;10[$ : 20 ; $[10;15[$ : 10 ; $[15;17[$ : 15 ; $[17;20[$ : 5. Sachant que $\\sum n_ic_i=557{,}5$, quelle est la surface moyenne ?",
            "options": [
              "$13{,}9$ m²",
              "$11{,}15$ m²",
              "$139{,}4$ m²",
              "$10$ m²"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$N=50$ et $\\dfrac{557{,}5}{50}=11{,}15$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une valeur approchée",
          "stepTheme": "Une valeur approchée",
          "stepBadge": "Une valeur approchée",
          "paragraphText": "En prenant les centres, on suppose les valeurs bien réparties dans chaque classe : la moyenne obtenue est approchée.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p03_q7",
            "type": "mcq",
            "prompt": "Pourquoi la moyenne calculée avec les centres des classes est-elle une valeur approchée ?",
            "options": [
              "Car on oublie une classe",
              "Car on remplace chaque valeur par le centre de sa classe",
              "Car on divise par le nombre de classes",
              "Elle est toujours exacte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les vraies valeurs d'une classe ne sont pas toutes égales à son centre."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p03_q1",
          "type": "mcq",
          "prompt": "La classe $[0;30[$ contient 13 coopératives. Que vaut $n_ic_i$ pour cette classe ?",
          "options": [
            "$390$",
            "$13$",
            "$195$",
            "$43$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Centre $15$ : $13\\times15=195$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p03_q2",
          "type": "mcq",
          "prompt": "Pour 90 coopératives, $\\sum n_ic_i=5037{,}5$. Quelle est la production moyenne, environ ?",
          "options": [
            "$55{,}97$ t",
            "$1007{,}5$ t",
            "$50$ t",
            "$5037{,}5$ t"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{5037{,}5}{90}\\approx55{,}97$ tonnes."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p03_q3",
          "type": "mcq",
          "prompt": "Une série a 5 classes, un effectif total $N=90$ et $\\sum n_ic_i=5037{,}5$. Par quel nombre divise-t-on $5037{,}5$ pour obtenir la moyenne ?",
          "options": [
            "$5$",
            "$100$",
            "$45$",
            "$90$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La moyenne est $\\dfrac{\\sum n_ic_i}{N}$, avec $N=90$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p03_q4",
          "type": "mcq",
          "prompt": "Pour 125 élèves, la somme $\\sum n_ic_i$ des temps de sport (en min) vaut $4980$. Quel est le temps moyen ?",
          "options": [
            "$41{,}5$ min",
            "$39{,}84$ min",
            "$830$ min",
            "$49{,}8$ min"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{4980}{125}=39{,}84$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p03_q5",
          "type": "mcq",
          "prompt": "Une série a deux classes : $[0;10[$ de fréquence $0{,}4$ et $[10;20[$ de fréquence $0{,}6$. Quelle est la moyenne ?",
          "options": [
            "$11$",
            "$10$",
            "$5$",
            "$15$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$0{,}4\\times5+0{,}6\\times15=2+9=11$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p03_q6",
          "type": "mcq",
          "prompt": "Surfaces (m²) : $[0;10[$ : 20 ; $[10;15[$ : 10 ; $[15;17[$ : 15 ; $[17;20[$ : 5. Sachant que $\\sum n_ic_i=557{,}5$, quelle est la surface moyenne ?",
          "options": [
            "$13{,}9$ m²",
            "$11{,}15$ m²",
            "$139{,}4$ m²",
            "$10$ m²"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$N=50$ et $\\dfrac{557{,}5}{50}=11{,}15$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p03_q7",
          "type": "mcq",
          "prompt": "Pourquoi la moyenne calculée avec les centres des classes est-elle une valeur approchée ?",
          "options": [
            "Car on oublie une classe",
            "Car on remplace chaque valeur par le centre de sa classe",
            "Car on divise par le nombre de classes",
            "Elle est toujours exacte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les vraies valeurs d'une classe ne sont pas toutes égales à son centre."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p04",
      "order": 4,
      "title": "Médiane et quartiles par interpolation",
      "summary": "On repère la classe, puis on calcule par proportionnalité (interpolation linéaire).",
      "conceptExplanation": "Définitions :\n- la médiane $Me$ partage la série ordonnée en deux moitiés de même effectif ;\n- le premier quartile $Q_1$ : 25 % des valeurs lui sont inférieures ou égales ;\n- le troisième quartile $Q_3$ : 75 % des valeurs lui sont inférieures ou égales.\nGraphiquement, ce sont les abscisses des points de la courbe des effectifs cumulés croissants (ECC) d'ordonnées $\\dfrac N2$, $\\dfrac N4$ et $\\dfrac{3N}{4}$.\n\nPar le calcul (interpolation linéaire) : on repère la classe $[a;b[$ où l'ECC passe de $N_a$ à $N_b$, puis\n$$\\dfrac{Me-a}{b-a}=\\dfrac{\\frac N2-N_a}{N_b-N_a}.$$\n\nExemple : heures d'absence de 104 élèves. $[1;5[$ : 12 ; $[5;8[$ : 28 ; $[8;13[$ : 32 ; $[13;14[$ : 24 ; $[14;21[$ : 8. ECC : 12 ; 40 ; 72 ; 96 ; 104.\n- Médiane : $\\dfrac N2=52$, entre 40 et 72, donc dans $[8;13[$ : $\\dfrac{Me-8}{5}=\\dfrac{12}{32}$, $Me\\approx9{,}88$ h.\n- $Q_1$ : $\\dfrac N4=26$, entre 12 et 40, dans $[5;8[$ : $\\dfrac{Q_1-5}{3}=\\dfrac{14}{28}$, $Q_1=6{,}5$ h.\n- $Q_3$ : $\\dfrac{3N}{4}=78$, entre 72 et 96, dans $[13;14[$ : $\\dfrac{Q_3-13}{1}=\\dfrac{6}{24}$, $Q_3=13{,}25$ h.\nInterprétation : 26 élèves ont au plus 6,5 h d'absence, et 78 élèves au plus 13,25 h.",
      "keyRule": "Repérer la classe grâce aux effectifs cumulés, puis $\\dfrac{x-a}{b-a}=\\dfrac{\\text{rang}-N_a}{N_b-N_a}$.",
      "formulas": [
        {
          "name": "Interpolation linéaire",
          "formula": "\\dfrac{Me-a}{b-a}=\\dfrac{\\frac N2-N_a}{N_b-N_a}"
        }
      ],
      "workedExample": {
        "title": "La médiane des absences",
        "statement": "104 élèves ; ECC : 12 (à 5 h) ; 40 (à 8 h) ; 72 (à 13 h) ; 96 (à 14 h) ; 104 (à 21 h). Calcule la médiane.",
        "methodSteps": [
          "$\\dfrac N2=52$ est entre 40 et 72 : la médiane est dans $[8;13[$.",
          "$\\dfrac{Me-8}{13-8}=\\dfrac{52-40}{72-40}=\\dfrac{12}{32}=0{,}375$.",
          "$Me=8+5\\times0{,}375=9{,}875$."
        ],
        "conclusion": "$Me\\approx9{,}88$ h : la moitié des élèves a au moins 9,88 h d'absence."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Trouver la classe",
          "stepTheme": "Trouver la classe",
          "stepBadge": "Trouver la classe",
          "paragraphText": "On calcule $\\dfrac N2$, puis on cherche entre quels effectifs cumulés il se trouve.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p04_q1",
            "type": "mcq",
            "prompt": "104 élèves ; classes d'heures d'absence $[1;5[$, $[5;8[$, $[8;13[$, $[13;14[$, $[14;21[$ ; effectifs cumulés croissants 12 ; 40 ; 72 ; 96 ; 104. Dans quelle classe est la médiane ?",
            "options": [
              "$[5;8[$",
              "$[13;14[$",
              "$[8;13[$",
              "$[1;5[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{104}{2}=52$, compris entre 40 et 72 : classe $[8;13[$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Calculer la médiane",
          "stepTheme": "Calculer la médiane",
          "stepBadge": "Calculer la médiane",
          "paragraphText": "$\\dfrac{Me-8}{13-8}=\\dfrac{52-40}{72-40}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p04_q2",
            "type": "mcq",
            "prompt": "La médiane est dans $[8;13[$ ; les effectifs cumulés passent de 40 (à 8) à 72 (à 13), et $\\dfrac N2=52$. Que vaut la médiane, environ ?",
            "options": [
              "$9{,}88$",
              "$10{,}5$",
              "$12$",
              "$8{,}5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$Me=8+5\\times\\dfrac{12}{32}=8+1{,}875=9{,}875$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les quartiles",
          "stepTheme": "Les quartiles",
          "stepBadge": "Les quartiles",
          "paragraphText": "$Q_1$ correspond au rang $\\dfrac N4$ et $Q_3$ au rang $\\dfrac{3N}{4}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p04_q3",
            "type": "mcq",
            "prompt": "Pour une série d'effectif total $N=104$, à quel rang correspond le premier quartile $Q_1$ ?",
            "options": [
              "$52$",
              "$78$",
              "$25$",
              "$26$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$104\\times\\dfrac{25}{100}=26$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Calculer Q₁",
          "stepTheme": "Calculer Q₁",
          "stepBadge": "Calculer Q₁",
          "paragraphText": "26 est entre 12 (à 5 h) et 40 (à 8 h) : $\\dfrac{Q_1-5}{3}=\\dfrac{26-12}{40-12}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p04_q4",
            "type": "mcq",
            "prompt": "Les effectifs cumulés passent de 12 (à 5 h) à 40 (à 8 h), et le rang de $Q_1$ est 26. Que vaut $Q_1$ ?",
            "options": [
              "$7$",
              "$6{,}5$",
              "$6$",
              "$5{,}5$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$Q_1=5+3\\times\\dfrac{14}{28}=5+1{,}5=6{,}5$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Calculer Q₃",
          "stepTheme": "Calculer Q₃",
          "stepBadge": "Calculer Q₃",
          "paragraphText": "78 est entre 72 (à 13 h) et 96 (à 14 h) : $\\dfrac{Q_3-13}{14-13}=\\dfrac{78-72}{96-72}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p04_q5",
            "type": "mcq",
            "prompt": "Les effectifs cumulés passent de 72 (à 13 h) à 96 (à 14 h), et le rang de $Q_3$ est 78. Que vaut $Q_3$ ?",
            "options": [
              "$13{,}5$",
              "$13{,}75$",
              "$13{,}25$",
              "$14$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$Q_3=13+1\\times\\dfrac{6}{24}=13{,}25$ (et non 13,5)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Interpréter",
          "stepTheme": "Interpréter",
          "stepBadge": "Interpréter",
          "paragraphText": "$Q_1=6{,}5$ h pour 104 élèves : 26 élèves (25 %) ont au plus 6,5 h d'absence.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p04_q6",
            "type": "mcq",
            "prompt": "Pour 104 élèves, le troisième quartile des heures d'absence vaut $Q_3=13{,}25$ h. Que signifie ce résultat ?",
            "options": [
              "78 élèves ont au plus 13,25 h d'absence",
              "26 élèves ont au plus 13,25 h d'absence",
              "La moyenne est 13,25 h",
              "Tous les élèves ont plus de 13,25 h"
            ],
            "correctAnswerIndex": 0,
            "explanation": "75 % de 104, soit 78 élèves, ont au plus $Q_3$ heures d'absence."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le rang avant la classe",
          "stepTheme": "Le rang avant la classe",
          "stepBadge": "Le rang avant la classe",
          "paragraphText": "Si le rang est inférieur au premier effectif cumulé, le quartile est dans la PREMIÈRE classe, en partant de 0.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p04_q7",
            "type": "mcq",
            "prompt": "125 élèves ; temps de sport $[0;20[$ : 35 élèves (effectif cumulé 35). Le rang de $Q_1$ est $31{,}25$. Que vaut $Q_1$, environ ?",
            "options": [
              "$31{,}25$",
              "$20$",
              "$17{,}86$",
              "$8{,}9$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{Q_1-0}{20-0}=\\dfrac{31{,}25-0}{35-0}$, donc $Q_1=20\\times\\dfrac{31{,}25}{35}\\approx17{,}86$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p04_q1",
          "type": "mcq",
          "prompt": "104 élèves ; classes d'heures d'absence $[1;5[$, $[5;8[$, $[8;13[$, $[13;14[$, $[14;21[$ ; effectifs cumulés croissants 12 ; 40 ; 72 ; 96 ; 104. Dans quelle classe est la médiane ?",
          "options": [
            "$[5;8[$",
            "$[13;14[$",
            "$[8;13[$",
            "$[1;5[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{104}{2}=52$, compris entre 40 et 72 : classe $[8;13[$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p04_q2",
          "type": "mcq",
          "prompt": "La médiane est dans $[8;13[$ ; les effectifs cumulés passent de 40 (à 8) à 72 (à 13), et $\\dfrac N2=52$. Que vaut la médiane, environ ?",
          "options": [
            "$9{,}88$",
            "$10{,}5$",
            "$12$",
            "$8{,}5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$Me=8+5\\times\\dfrac{12}{32}=8+1{,}875=9{,}875$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p04_q3",
          "type": "mcq",
          "prompt": "Pour une série d'effectif total $N=104$, à quel rang correspond le premier quartile $Q_1$ ?",
          "options": [
            "$52$",
            "$78$",
            "$25$",
            "$26$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$104\\times\\dfrac{25}{100}=26$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p04_q4",
          "type": "mcq",
          "prompt": "Les effectifs cumulés passent de 12 (à 5 h) à 40 (à 8 h), et le rang de $Q_1$ est 26. Que vaut $Q_1$ ?",
          "options": [
            "$7$",
            "$6{,}5$",
            "$6$",
            "$5{,}5$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$Q_1=5+3\\times\\dfrac{14}{28}=5+1{,}5=6{,}5$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p04_q5",
          "type": "mcq",
          "prompt": "Les effectifs cumulés passent de 72 (à 13 h) à 96 (à 14 h), et le rang de $Q_3$ est 78. Que vaut $Q_3$ ?",
          "options": [
            "$13{,}5$",
            "$13{,}75$",
            "$13{,}25$",
            "$14$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$Q_3=13+1\\times\\dfrac{6}{24}=13{,}25$ (et non 13,5)."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p04_q6",
          "type": "mcq",
          "prompt": "Pour 104 élèves, le troisième quartile des heures d'absence vaut $Q_3=13{,}25$ h. Que signifie ce résultat ?",
          "options": [
            "78 élèves ont au plus 13,25 h d'absence",
            "26 élèves ont au plus 13,25 h d'absence",
            "La moyenne est 13,25 h",
            "Tous les élèves ont plus de 13,25 h"
          ],
          "correctAnswerIndex": 0,
          "explanation": "75 % de 104, soit 78 élèves, ont au plus $Q_3$ heures d'absence."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p04_q7",
          "type": "mcq",
          "prompt": "125 élèves ; temps de sport $[0;20[$ : 35 élèves (effectif cumulé 35). Le rang de $Q_1$ est $31{,}25$. Que vaut $Q_1$, environ ?",
          "options": [
            "$31{,}25$",
            "$20$",
            "$17{,}86$",
            "$8{,}9$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{Q_1-0}{20-0}=\\dfrac{31{,}25-0}{35-0}$, donc $Q_1=20\\times\\dfrac{31{,}25}{35}\\approx17{,}86$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p05",
      "order": 5,
      "title": "Histogramme et courbes cumulatives",
      "summary": "Dans un histogramme, la hauteur suit la densité et l'aire suit l'effectif.",
      "conceptExplanation": "Histogramme d'une série regroupée en classes :\n- des rectangles juxtaposés, un par classe ;\n- la LARGEUR est proportionnelle à l'amplitude ;\n- la HAUTEUR est proportionnelle à la densité ;\n- l'AIRE est proportionnelle à l'effectif (ou à la fréquence).\n\nExemple : fréquences $[2;3[$ : 0,15 ; $[3;4{,}5[$ : 0,35 ; $[4{,}5;5{,}5[$ : 0,25 ; $[5{,}5;6[$ : 0,1 ; $[6;8[$ : 0,15.\nAmplitudes : 1 ; 1,5 ; 1 ; 0,5 ; 2. Densités (hauteurs) : 0,15 ; 0,23 ; 0,25 ; 0,2 ; 0,075.\nUn carreau de $0{,}5$ en largeur et $0{,}02$ en hauteur a une aire de $0{,}01$, soit 1 %.\n\nPolygone des fréquences : on joint les milieux des côtés supérieurs des rectangles.\n\nCourbe cumulative (polygone des fréquences cumulées croissantes) : on place les points (borne SUPÉRIEURE de la classe ; fréquence cumulée), en partant de (première borne ; 0), et on les relie par des SEGMENTS.\nExemple : points $(2;0)$, $(3;0{,}15)$, $(4{,}5;0{,}5)$, $(5{,}5;0{,}75)$, $(6;0{,}85)$, $(8;1)$. La courbe vaut 0 avant 2 et 1 après 8. On y lit la médiane à l'ordonnée 0,5 : ici $Me=4{,}5$.\n\nRemarque : la courbe cumulative est une ligne brisée continue, pas une suite de « marches » horizontales.\n\nLecture : salaires de 200 ouvriers (en milliers de F), $[1;2[$ : 34 ; $[2;3[$ : 76 ; $[3;5[$ : 51 ; $[5;8[$ : 39. Densités : 34 ; 76 ; 25,5 ; 13 : le rectangle le plus haut est celui de $[2;3[$.",
      "keyRule": "Histogramme : hauteur = densité, aire = effectif. Courbe cumulative : points (borne supérieure ; cumul) reliés par des segments.",
      "formulas": [],
      "workedExample": {
        "title": "Hauteurs de l'histogramme",
        "statement": "Fréquences : $[2;3[$ : 0,15 ; $[3;4{,}5[$ : 0,35 ; $[4{,}5;5{,}5[$ : 0,25 ; $[5{,}5;6[$ : 0,1 ; $[6;8[$ : 0,15. Calcule la hauteur de chaque rectangle.",
        "methodSteps": [
          "Amplitudes : 1 ; 1,5 ; 1 ; 0,5 ; 2.",
          "Hauteurs = fréquence ÷ amplitude : 0,15 ; 0,23 ; 0,25 ; 0,2 ; 0,075."
        ],
        "conclusion": "Le rectangle le plus haut est celui de $[4{,}5;5{,}5[$, bien que $[3;4{,}5[$ ait la plus grande fréquence."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La hauteur",
          "stepTheme": "La hauteur",
          "stepBadge": "La hauteur",
          "paragraphText": "Dans un histogramme, la hauteur de chaque rectangle est proportionnelle à la densité de la classe.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p05_q1",
            "type": "mcq",
            "prompt": "Dans l'histogramme d'une série regroupée en classes, à quoi la hauteur des rectangles est-elle proportionnelle ?",
            "options": [
              "À l'effectif",
              "À la densité",
              "Au centre",
              "À l'amplitude"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'aire qui suit l'effectif ; la hauteur suit la densité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Calculer une hauteur",
          "stepTheme": "Calculer une hauteur",
          "stepBadge": "Calculer une hauteur",
          "paragraphText": "Hauteur = fréquence (ou effectif) ÷ amplitude.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p05_q2",
            "type": "mcq",
            "prompt": "La classe $[6;8[$ a une fréquence de $0{,}15$. Quelle est la hauteur de son rectangle dans l'histogramme des fréquences ?",
            "options": [
              "$0{,}3$",
              "$0{,}15$",
              "$0{,}075$",
              "$7$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Amplitude 2 : $\\dfrac{0{,}15}{2}=0{,}075$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Le rectangle le plus haut",
          "stepTheme": "Le rectangle le plus haut",
          "stepBadge": "Le rectangle le plus haut",
          "paragraphText": "Le rectangle le plus haut n'est pas forcément celui de la plus grande fréquence : il faut tenir compte de l'amplitude.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p05_q3",
            "type": "mcq",
            "prompt": "Fréquences : $[2;3[$ : 0,15 ; $[3;4{,}5[$ : 0,35 ; $[4{,}5;5{,}5[$ : 0,25 ; $[5{,}5;6[$ : 0,1 ; $[6;8[$ : 0,15. Quelle classe a le rectangle le plus haut ?",
            "options": [
              "$[3;4{,}5[$",
              "$[2;3[$",
              "$[5{,}5;6[$",
              "$[4{,}5;5{,}5[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Densités : 0,15 ; 0,23 ; 0,25 ; 0,2 ; 0,075. La plus grande est 0,25."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'aire d'un carreau",
          "stepTheme": "L'aire d'un carreau",
          "stepBadge": "L'aire d'un carreau",
          "paragraphText": "L'aire d'un rectangle (largeur × hauteur) donne la fréquence. On indique ce que vaut un carreau.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p05_q4",
            "type": "mcq",
            "prompt": "Dans un histogramme des fréquences, un carreau mesure $0{,}5$ en largeur et $0{,}02$ en hauteur. Quelle fréquence représente-t-il ?",
            "options": [
              "1 %",
              "2 %",
              "10 %",
              "0,52 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$0{,}5\\times0{,}02=0{,}01$, soit 1 %."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Placer la courbe cumulative",
          "stepTheme": "Placer la courbe cumulative",
          "stepBadge": "Placer la courbe cumulative",
          "paragraphText": "On place les points (borne SUPÉRIEURE ; cumul), en commençant par (première borne ; 0), puis on les relie par des segments.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p05_q5",
            "type": "mcq",
            "prompt": "Classes $[2;3[$, $[3;4{,}5[$, $[4{,}5;5{,}5[$… avec fréquences cumulées croissantes 0,15 ; 0,5 ; 0,75… Quel point de la courbe cumulative correspond à la classe $[3;4{,}5[$ ?",
            "options": [
              "$(3;0{,}5)$",
              "$(4{,}5;0{,}5)$",
              "$(3{,}75;0{,}5)$",
              "$(4{,}5;0{,}35)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On utilise la borne supérieure, 4,5, et la fréquence cumulée, 0,5."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Lire la médiane",
          "stepTheme": "Lire la médiane",
          "stepBadge": "Lire la médiane",
          "paragraphText": "La médiane est l'abscisse du point de la courbe des fréquences cumulées d'ordonnée 0,5.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p05_q6",
            "type": "mcq",
            "prompt": "La courbe des fréquences cumulées passe par les points $(2;0)$, $(3;0{,}15)$, $(4{,}5;0{,}5)$, $(5{,}5;0{,}75)$, $(6;0{,}85)$ et $(8;1)$. Quelle est la médiane ?",
            "options": [
              "$5{,}5$",
              "$3$",
              "$4{,}5$",
              "$5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le point d'ordonnée 0,5 a pour abscisse 4,5."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas des marches",
          "stepTheme": "Pas des marches",
          "stepBadge": "Pas des marches",
          "paragraphText": "Pour une série regroupée en classes, la courbe cumulative est une ligne brisée continue (segments obliques), et non une succession de marches horizontales.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p05_q7",
            "type": "mcq",
            "prompt": "Pour une série regroupée en classes, comment relie-t-on les points de la courbe des fréquences cumulées croissantes ?",
            "options": [
              "Par des segments de droite",
              "Par des marches horizontales",
              "On ne les relie pas",
              "Par une courbe arrondie quelconque"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On suppose les valeurs réparties uniformément dans chaque classe : le cumul augmente régulièrement."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p05_q1",
          "type": "mcq",
          "prompt": "Dans l'histogramme d'une série regroupée en classes, à quoi la hauteur des rectangles est-elle proportionnelle ?",
          "options": [
            "À l'effectif",
            "À la densité",
            "Au centre",
            "À l'amplitude"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'aire qui suit l'effectif ; la hauteur suit la densité."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p05_q2",
          "type": "mcq",
          "prompt": "La classe $[6;8[$ a une fréquence de $0{,}15$. Quelle est la hauteur de son rectangle dans l'histogramme des fréquences ?",
          "options": [
            "$0{,}3$",
            "$0{,}15$",
            "$0{,}075$",
            "$7$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Amplitude 2 : $\\dfrac{0{,}15}{2}=0{,}075$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p05_q3",
          "type": "mcq",
          "prompt": "Fréquences : $[2;3[$ : 0,15 ; $[3;4{,}5[$ : 0,35 ; $[4{,}5;5{,}5[$ : 0,25 ; $[5{,}5;6[$ : 0,1 ; $[6;8[$ : 0,15. Quelle classe a le rectangle le plus haut ?",
          "options": [
            "$[3;4{,}5[$",
            "$[2;3[$",
            "$[5{,}5;6[$",
            "$[4{,}5;5{,}5[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Densités : 0,15 ; 0,23 ; 0,25 ; 0,2 ; 0,075. La plus grande est 0,25."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p05_q4",
          "type": "mcq",
          "prompt": "Dans un histogramme des fréquences, un carreau mesure $0{,}5$ en largeur et $0{,}02$ en hauteur. Quelle fréquence représente-t-il ?",
          "options": [
            "1 %",
            "2 %",
            "10 %",
            "0,52 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$0{,}5\\times0{,}02=0{,}01$, soit 1 %."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p05_q5",
          "type": "mcq",
          "prompt": "Classes $[2;3[$, $[3;4{,}5[$, $[4{,}5;5{,}5[$… avec fréquences cumulées croissantes 0,15 ; 0,5 ; 0,75… Quel point de la courbe cumulative correspond à la classe $[3;4{,}5[$ ?",
          "options": [
            "$(3;0{,}5)$",
            "$(4{,}5;0{,}5)$",
            "$(3{,}75;0{,}5)$",
            "$(4{,}5;0{,}35)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On utilise la borne supérieure, 4,5, et la fréquence cumulée, 0,5."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p05_q6",
          "type": "mcq",
          "prompt": "La courbe des fréquences cumulées passe par les points $(2;0)$, $(3;0{,}15)$, $(4{,}5;0{,}5)$, $(5{,}5;0{,}75)$, $(6;0{,}85)$ et $(8;1)$. Quelle est la médiane ?",
          "options": [
            "$5{,}5$",
            "$3$",
            "$4{,}5$",
            "$5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le point d'ordonnée 0,5 a pour abscisse 4,5."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p05_q7",
          "type": "mcq",
          "prompt": "Pour une série regroupée en classes, comment relie-t-on les points de la courbe des fréquences cumulées croissantes ?",
          "options": [
            "Par des segments de droite",
            "Par des marches horizontales",
            "On ne les relie pas",
            "Par une courbe arrondie quelconque"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On suppose les valeurs réparties uniformément dans chaque classe : le cumul augmente régulièrement."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p06",
      "order": 6,
      "title": "Variance, écart type et autres écarts",
      "summary": "Mesurer la dispersion des valeurs autour de la moyenne.",
      "conceptExplanation": "Variance :\n$$V=\\dfrac1N\\sum n_i(c_i-\\bar x)^2=\\dfrac1N\\sum n_ic_i^2-\\bar x^2.$$\nÉcart type : $\\sigma=\\sqrt V$. Plus $\\sigma$ est grand, plus les valeurs sont dispersées autour de la moyenne.\n\nÉcart absolu moyen : $e_m=\\dfrac1N\\sum n_i|c_i-\\bar x|$ : la distance moyenne des valeurs à la moyenne.\n\nÉcart interquartile : $Q_3-Q_1$ ; 50 % des valeurs sont entre $Q_1$ et $Q_3$.\n\nExemple : temps de sport par semaine de 125 élèves.\n- $[0;20[$ : 35 ; $[20;40[$ : 41 ; $[40;60[$ : 30 ; $[60;100[$ : 12 ; $[100;140[$ : 5 ; $[140;200[$ : 2.\n- $\\bar x=\\dfrac{4980}{125}=39{,}84$ min ;\n- $\\sum n_ic_i^2=322\\,000$, donc $V=\\dfrac{322\\,000}{125}-39{,}84^2=2576-1587{,}23\\approx988{,}77$ ;\n- $\\sigma=\\sqrt{988{,}77}\\approx31{,}44$ min : les temps sont très dispersés ;\n- $\\sum n_i|c_i-\\bar x|=2895{,}68$, donc $e_m\\approx23{,}17$ min ;\n- $Q_1\\approx17{,}86$ et $Q_3\\approx51{,}83$, donc $Q_3-Q_1\\approx33{,}97$ min.",
      "keyRule": "$V=\\dfrac1N\\sum n_ic_i^2-\\bar x^2$, $\\sigma=\\sqrt V$ ; $e_m=\\dfrac1N\\sum n_i|c_i-\\bar x|$ ; écart interquartile $=Q_3-Q_1$.",
      "formulas": [
        {
          "name": "Variance",
          "formula": "V=\\dfrac1N\\sum n_ic_i^2-\\bar x^2"
        },
        {
          "name": "Écart type",
          "formula": "\\sigma=\\sqrt V"
        },
        {
          "name": "Écart absolu moyen",
          "formula": "e_m=\\dfrac1N\\sum n_i|c_i-\\bar x|"
        }
      ],
      "workedExample": {
        "title": "Le temps de sport",
        "statement": "125 élèves, $\\bar x=39{,}84$ min et $\\sum n_ic_i^2=322\\,000$. Calcule la variance et l'écart type.",
        "methodSteps": [
          "$V=\\dfrac{322\\,000}{125}-39{,}84^2=2576-1587{,}23$.",
          "$V\\approx988{,}77$."
        ],
        "conclusion": "$\\sigma=\\sqrt{988{,}77}\\approx31{,}44$ min : les temps de sport sont très dispersés autour de 39,84 min."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La formule pratique",
          "stepTheme": "La formule pratique",
          "stepBadge": "La formule pratique",
          "paragraphText": "$V=\\dfrac1N\\sum n_ic_i^2-\\bar x^2$ : moyenne des carrés moins carré de la moyenne.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p06_q1",
            "type": "mcq",
            "prompt": "Pour 125 élèves, $\\sum n_ic_i^2=322\\,000$ et la moyenne vaut $\\bar x=39{,}84$. Que vaut la variance, environ ?",
            "options": [
              "$2576$",
              "$988{,}77$",
              "$1587{,}23$",
              "$31{,}44$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{322\\,000}{125}-39{,}84^2=2576-1587{,}23\\approx988{,}77$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'écart type",
          "stepTheme": "L'écart type",
          "stepBadge": "L'écart type",
          "paragraphText": "L'écart type est la racine carrée de la variance ; il s'exprime dans l'unité des données.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p06_q2",
            "type": "mcq",
            "prompt": "Le temps de sport de 125 élèves a une variance $V=988{,}77$. Quel est son écart type, environ ?",
            "options": [
              "$494$",
              "$988{,}77$",
              "$99$",
              "$31{,}44$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\sqrt{988{,}77}\\approx31{,}44$ min."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Interpréter σ",
          "stepTheme": "Interpréter σ",
          "stepBadge": "Interpréter σ",
          "paragraphText": "On compare $\\sigma$ à la moyenne : un écart type proche de la moyenne signale une forte dispersion.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p06_q3",
            "type": "mcq",
            "prompt": "Deux classes ont la même moyenne de 12/20, avec des écarts types de 1,5 (classe A) et 4,2 (classe B). Quelle classe est la plus homogène ?",
            "options": [
              "La classe B",
              "Les deux",
              "La classe A",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le plus petit écart type indique des notes plus regroupées autour de la moyenne."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'écart absolu moyen",
          "stepTheme": "L'écart absolu moyen",
          "stepBadge": "L'écart absolu moyen",
          "paragraphText": "$e_m=\\dfrac1N\\sum n_i|c_i-\\bar x|$ : la distance moyenne à la moyenne.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p06_q4",
            "type": "mcq",
            "prompt": "Pour 125 élèves, $\\sum n_i|c_i-\\bar x|=2895{,}68$. Que vaut l'écart absolu moyen, environ ?",
            "options": [
              "$23{,}17$",
              "$2895{,}68$",
              "$39{,}84$",
              "$11{,}6$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{2895{,}68}{125}\\approx23{,}17$ min."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'écart interquartile",
          "stepTheme": "L'écart interquartile",
          "stepBadge": "L'écart interquartile",
          "paragraphText": "L'écart interquartile $Q_3-Q_1$ est la largeur de l'intervalle qui contient les 50 % de valeurs « du milieu ».",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p06_q5",
            "type": "mcq",
            "prompt": "Pour le temps de sport de 125 élèves, $Q_1\\approx17{,}86$ min et $Q_3\\approx51{,}83$ min. Que vaut l'écart interquartile ?",
            "options": [
              "$69{,}69$",
              "$34{,}85$",
              "$51{,}83$",
              "$33{,}97$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$51{,}83-17{,}86=33{,}97$ min."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une série de surfaces",
          "stepTheme": "Une série de surfaces",
          "stepBadge": "Une série de surfaces",
          "paragraphText": "Surfaces (m²) de 50 parcelles : $\\bar x=11{,}15$ et $\\sum n_ic_i^2=7613{,}75$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p06_q6",
            "type": "mcq",
            "prompt": "Pour 50 surfaces, $\\bar x=11{,}15$ m² et $\\sum n_ic_i^2=7613{,}75$. Que vaut l'écart type, environ ?",
            "options": [
              "$27{,}95$",
              "$5{,}29$",
              "$152{,}3$",
              "$11{,}15$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$V=\\dfrac{7613{,}75}{50}-11{,}15^2=152{,}28-124{,}32=27{,}95$, et $\\sqrt{27{,}95}\\approx5{,}29$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier le carré",
          "stepTheme": "Ne pas oublier le carré",
          "stepBadge": "Ne pas oublier le carré",
          "paragraphText": "Dans $V=\\dfrac1N\\sum n_ic_i^2-\\bar x^2$, on retranche le CARRÉ de la moyenne, et l'écart type est la RACINE de la variance.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p06_q7",
            "type": "mcq",
            "prompt": "Dans une classe, tous les élèves ont exactement la note 12/20 ; la moyenne vaut donc 12. Que vaut l'écart type des notes ?",
            "options": [
              "$12$",
              "$0$",
              "$1$",
              "$144$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Toutes les valeurs sont égales à la moyenne : aucune dispersion."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p06_q1",
          "type": "mcq",
          "prompt": "Pour 125 élèves, $\\sum n_ic_i^2=322\\,000$ et la moyenne vaut $\\bar x=39{,}84$. Que vaut la variance, environ ?",
          "options": [
            "$2576$",
            "$988{,}77$",
            "$1587{,}23$",
            "$31{,}44$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{322\\,000}{125}-39{,}84^2=2576-1587{,}23\\approx988{,}77$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p06_q2",
          "type": "mcq",
          "prompt": "Le temps de sport de 125 élèves a une variance $V=988{,}77$. Quel est son écart type, environ ?",
          "options": [
            "$494$",
            "$988{,}77$",
            "$99$",
            "$31{,}44$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\sqrt{988{,}77}\\approx31{,}44$ min."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p06_q3",
          "type": "mcq",
          "prompt": "Deux classes ont la même moyenne de 12/20, avec des écarts types de 1,5 (classe A) et 4,2 (classe B). Quelle classe est la plus homogène ?",
          "options": [
            "La classe B",
            "Les deux",
            "La classe A",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le plus petit écart type indique des notes plus regroupées autour de la moyenne."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p06_q4",
          "type": "mcq",
          "prompt": "Pour 125 élèves, $\\sum n_i|c_i-\\bar x|=2895{,}68$. Que vaut l'écart absolu moyen, environ ?",
          "options": [
            "$23{,}17$",
            "$2895{,}68$",
            "$39{,}84$",
            "$11{,}6$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{2895{,}68}{125}\\approx23{,}17$ min."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p06_q5",
          "type": "mcq",
          "prompt": "Pour le temps de sport de 125 élèves, $Q_1\\approx17{,}86$ min et $Q_3\\approx51{,}83$ min. Que vaut l'écart interquartile ?",
          "options": [
            "$69{,}69$",
            "$34{,}85$",
            "$51{,}83$",
            "$33{,}97$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$51{,}83-17{,}86=33{,}97$ min."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p06_q6",
          "type": "mcq",
          "prompt": "Pour 50 surfaces, $\\bar x=11{,}15$ m² et $\\sum n_ic_i^2=7613{,}75$. Que vaut l'écart type, environ ?",
          "options": [
            "$27{,}95$",
            "$5{,}29$",
            "$152{,}3$",
            "$11{,}15$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$V=\\dfrac{7613{,}75}{50}-11{,}15^2=152{,}28-124{,}32=27{,}95$, et $\\sqrt{27{,}95}\\approx5{,}29$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p06_q7",
          "type": "mcq",
          "prompt": "Dans une classe, tous les élèves ont exactement la note 12/20 ; la moyenne vaut donc 12. Que vaut l'écart type des notes ?",
          "options": [
            "$12$",
            "$0$",
            "$1$",
            "$144$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Toutes les valeurs sont égales à la moyenne : aucune dispersion."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p07",
      "order": 7,
      "title": "Situation : choisir la meilleure machine",
      "summary": "Comparer deux séries avec la moyenne, l'écart type et une proportion.",
      "conceptExplanation": "Situation : le président du COGES d'un lycée veut une machine pour remplir des sacs de 50 kg. Deux machines, A et B, sont testées sur 80 sacs (masses en kg) :\n- $[49;49{,}2[$ : A 7, B 4 ;\n- $[49{,}2;49{,}4[$ : A 6, B 6 ;\n- $[49{,}4;49{,}6[$ : A 14, B 9 ;\n- $[49{,}6;49{,}8[$ : A 14, B 11 ;\n- $[49{,}8;50[$ : A 11, B 14 ;\n- $[50;50{,}2[$ : A 14, B 16 ;\n- $[50{,}2;50{,}4[$ : A 9, B 17 ;\n- $[50{,}4;50{,}6[$ : A 5, B 3.\n\nUne machine est bonne si, à la fois : la moyenne est entre 49,7 et 50,3 kg ; l'écart type est inférieur à 0,5 kg ; l'intervalle $[49{,}3;50{,}5]$ contient au moins 85 % des sacs.\n\n1. Moyennes : A : $\\dfrac{3983{,}8}{80}\\approx49{,}80$ kg ; B : $\\dfrac{3991{,}2}{80}=49{,}89$ kg. Les deux conviennent.\n2. Écarts types : A : $V\\approx0{,}155$, $\\sigma\\approx0{,}39$ kg ; B : $V\\approx0{,}138$, $\\sigma\\approx0{,}37$ kg. Les deux conviennent.\n3. Proportion dans $[49{,}3;50{,}5]$ (interpolation sur les fréquences cumulées) :\n- A : cumul 12,5 % à 49,3 et 96,9 % à 50,5, soit environ 84,4 % : moins de 85 %, cela ne convient pas ;\n- B : cumul 8,75 % à 49,3 et 98,1 % à 50,5, soit environ 89,4 % : cela convient.\n\nConclusion : le COGES doit choisir la machine B.",
      "keyRule": "Vérifier chaque condition une par une ; une seule condition non remplie suffit à rejeter la machine.",
      "formulas": [],
      "workedExample": {
        "title": "La proportion pour la machine B",
        "statement": "Machine B : fréquences cumulées 5 % à 49,2 et 12,5 % à 49,4 ; 96,3 % à 50,4 et 100 % à 50,6. Estime la proportion de sacs entre 49,3 et 50,5 kg.",
        "methodSteps": [
          "49,3 est au milieu de [49,2 ; 49,4] : cumul $\\dfrac{5+12{,}5}{2}=8{,}75$ %.",
          "50,5 est au milieu de [50,4 ; 50,6] : cumul $\\dfrac{96{,}3+100}{2}\\approx98{,}15$ %.",
          "$98{,}15-8{,}75=89{,}4$ %."
        ],
        "conclusion": "Environ 89,4 % des sacs, plus que 85 % : la condition est remplie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "La moyenne de A",
          "stepTheme": "La moyenne de A",
          "stepBadge": "La moyenne de A",
          "paragraphText": "Machine A : 80 sacs, $\\sum n_ic_i=3983{,}8$ kg.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p07_q1",
            "type": "mcq",
            "prompt": "La machine A remplit 80 sacs ; la somme $\\sum n_ic_i$ des masses vaut $3983{,}8$ kg. Quelle est la masse moyenne d'un sac, environ ?",
            "options": [
              "$49{,}5$ kg",
              "$50$ kg",
              "$49{,}80$ kg",
              "$49{,}89$ kg"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{3983{,}8}{80}\\approx49{,}80$ kg."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Première condition",
          "stepTheme": "Première condition",
          "stepBadge": "Première condition",
          "paragraphText": "Condition : moyenne entre 49,7 et 50,3 kg. A : 49,80 ; B : 49,89.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p07_q2",
            "type": "mcq",
            "prompt": "Une machine est acceptée si la moyenne de ses sacs est entre 49,7 et 50,3 kg. La machine A donne 49,80 kg et la machine B 49,89 kg. Laquelle remplit cette condition ?",
            "options": [
              "A seulement",
              "B seulement",
              "Aucune",
              "Les deux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "49,80 et 49,89 sont tous deux entre 49,7 et 50,3."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Deuxième condition",
          "stepTheme": "Deuxième condition",
          "stepBadge": "Deuxième condition",
          "paragraphText": "Écart type de A : $\\sigma\\approx0{,}39$ kg ; de B : $\\sigma\\approx0{,}37$ kg. La limite est 0,5 kg.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p07_q3",
            "type": "mcq",
            "prompt": "La variance des masses de la machine B vaut environ $0{,}138$. Son écart type est-il inférieur à 0,5 kg ?",
            "options": [
              "Oui : $\\sigma\\approx0{,}37$ kg",
              "Non : $\\sigma\\approx0{,}69$ kg",
              "Oui : $\\sigma=0{,}138$ kg",
              "Non : $\\sigma\\approx1{,}38$ kg"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\sqrt{0{,}138}\\approx0{,}37<0{,}5$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Interpoler un cumul",
          "stepTheme": "Interpoler un cumul",
          "stepBadge": "Interpoler un cumul",
          "paragraphText": "Pour estimer le cumul en 49,3, on interpole entre les cumuls en 49,2 et 49,4.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p07_q4",
            "type": "mcq",
            "prompt": "Machine A : les fréquences cumulées valent 8,8 % à 49,2 kg et 16,3 % à 49,4 kg. Quelle est la fréquence cumulée estimée à 49,3 kg ?",
            "options": [
              "$12{,}55$ %",
              "$8{,}8$ %",
              "$16{,}3$ %",
              "$25{,}1$ %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "49,3 est au milieu : $\\dfrac{8{,}8+16{,}3}{2}=12{,}55$ %."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Troisième condition pour A",
          "stepTheme": "Troisième condition pour A",
          "stepBadge": "Troisième condition pour A",
          "paragraphText": "Machine A : cumul 12,55 % à 49,3 kg et 96,9 % à 50,5 kg.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p07_q5",
            "type": "mcq",
            "prompt": "Machine A : fréquence cumulée 12,55 % à 49,3 kg et 96,9 % à 50,5 kg. L'intervalle $[49{,}3;50{,}5]$ contient-il au moins 85 % des sacs ?",
            "options": [
              "Oui, 96,9 %",
              "Oui, exactement 85 %",
              "Non, environ 84,35 %",
              "Non, 12,55 %"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$96{,}9-12{,}55=84{,}35$ %, un peu moins que 85 %."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La décision",
          "stepTheme": "La décision",
          "stepBadge": "La décision",
          "paragraphText": "Une machine doit remplir les trois conditions à la fois.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p07_q6",
            "type": "mcq",
            "prompt": "La machine A remplit 2 conditions sur 3 (84,35 % des sacs dans l'intervalle) et la machine B les 3 (89,4 %). Quelle machine le COGES doit-il choisir ?",
            "options": [
              "La machine A",
              "Les deux",
              "Aucune",
              "La machine B"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Seule la machine B remplit toutes les conditions."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Toutes les conditions",
          "stepTheme": "Toutes les conditions",
          "stepBadge": "Toutes les conditions",
          "paragraphText": "Une bonne moyenne ne suffit pas : une machine dont les sacs sont trop dispersés est mauvaise, même si la moyenne est 50 kg.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p07_q7",
            "type": "mcq",
            "prompt": "Une machine C donne une moyenne de 50,0 kg exactement, mais un écart type de 0,8 kg. Avec les conditions du COGES (moyenne entre 49,7 et 50,3 kg, écart type inférieur à 0,5 kg), est-elle bonne ?",
            "options": [
              "Oui, sa moyenne est parfaite",
              "Non, ses sacs sont trop dispersés",
              "Oui, car 0,8 est petit",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$0{,}8>0{,}5$ : la condition sur l'écart type n'est pas remplie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p07_q1",
          "type": "mcq",
          "prompt": "La machine A remplit 80 sacs ; la somme $\\sum n_ic_i$ des masses vaut $3983{,}8$ kg. Quelle est la masse moyenne d'un sac, environ ?",
          "options": [
            "$49{,}5$ kg",
            "$50$ kg",
            "$49{,}80$ kg",
            "$49{,}89$ kg"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{3983{,}8}{80}\\approx49{,}80$ kg."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p07_q2",
          "type": "mcq",
          "prompt": "Une machine est acceptée si la moyenne de ses sacs est entre 49,7 et 50,3 kg. La machine A donne 49,80 kg et la machine B 49,89 kg. Laquelle remplit cette condition ?",
          "options": [
            "A seulement",
            "B seulement",
            "Aucune",
            "Les deux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "49,80 et 49,89 sont tous deux entre 49,7 et 50,3."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p07_q3",
          "type": "mcq",
          "prompt": "La variance des masses de la machine B vaut environ $0{,}138$. Son écart type est-il inférieur à 0,5 kg ?",
          "options": [
            "Oui : $\\sigma\\approx0{,}37$ kg",
            "Non : $\\sigma\\approx0{,}69$ kg",
            "Oui : $\\sigma=0{,}138$ kg",
            "Non : $\\sigma\\approx1{,}38$ kg"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\sqrt{0{,}138}\\approx0{,}37<0{,}5$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p07_q4",
          "type": "mcq",
          "prompt": "Machine A : les fréquences cumulées valent 8,8 % à 49,2 kg et 16,3 % à 49,4 kg. Quelle est la fréquence cumulée estimée à 49,3 kg ?",
          "options": [
            "$12{,}55$ %",
            "$8{,}8$ %",
            "$16{,}3$ %",
            "$25{,}1$ %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "49,3 est au milieu : $\\dfrac{8{,}8+16{,}3}{2}=12{,}55$ %."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p07_q5",
          "type": "mcq",
          "prompt": "Machine A : fréquence cumulée 12,55 % à 49,3 kg et 96,9 % à 50,5 kg. L'intervalle $[49{,}3;50{,}5]$ contient-il au moins 85 % des sacs ?",
          "options": [
            "Oui, 96,9 %",
            "Oui, exactement 85 %",
            "Non, environ 84,35 %",
            "Non, 12,55 %"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$96{,}9-12{,}55=84{,}35$ %, un peu moins que 85 %."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p07_q6",
          "type": "mcq",
          "prompt": "La machine A remplit 2 conditions sur 3 (84,35 % des sacs dans l'intervalle) et la machine B les 3 (89,4 %). Quelle machine le COGES doit-il choisir ?",
          "options": [
            "La machine A",
            "Les deux",
            "Aucune",
            "La machine B"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Seule la machine B remplit toutes les conditions."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p07_q7",
          "type": "mcq",
          "prompt": "Une machine C donne une moyenne de 50,0 kg exactement, mais un écart type de 0,8 kg. Avec les conditions du COGES (moyenne entre 49,7 et 50,3 kg, écart type inférieur à 0,5 kg), est-elle bonne ?",
          "options": [
            "Oui, sa moyenne est parfaite",
            "Non, ses sacs sont trop dispersés",
            "Oui, car 0,8 est petit",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$0{,}8>0{,}5$ : la condition sur l'écart type n'est pas remplie."
        }
      ]
    }
  ]
};
