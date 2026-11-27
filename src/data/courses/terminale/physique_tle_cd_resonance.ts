import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 14 : Résonance d'intensité d'un circuit RLC série » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1330
export const PHYSIQUE_TLE_CD_L14_RESONANCE: CurriculumChapter = {
  "id": "terminale_c_physique_l14_resonance",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 14,
  "title": "Leçon 14 : Résonance d'intensité d'un circuit RLC série",
  "summary": "Quand la fréquence du générateur égale la fréquence propre N₀ = 1/(2π√(LC)), l'intensité est maximale : Z = R, φ = 0, avec une bande passante ΔN et un facteur de qualité Q = N₀/ΔN qui mesurent la sélectivité.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1330",
  "points": [
    {
      "id": "terminale_c_physique_l14_resonance_p01",
      "order": 1,
      "title": "La courbe de résonance d'intensité I = f(N)",
      "summary": "En balayant la fréquence à U constant, I croît, passe par un maximum I₀ à N₀, puis décroît ; I₀ diminue quand R augmente.",
      "conceptExplanation": "Le montage série (GBF, bobine L = 0,1 H, condensateur C = 5700 nF, résistor R) est alimenté à tension efficace U constante pendant qu'on fait varier la fréquence N du GBF.\nL'intensité efficace I croît d'abord, atteint un maximum, puis décroît : la courbe I = f(N) a la forme d'une cloche centrée sur la fréquence de résonance.\nPour R = 36 Ω, le maximum vaut I₀ = 54,4 mA ; pour R = 200 Ω, il ne vaut plus que I'₀ = 20 mA.\nConclusion du résumé : l'intensité efficace du courant à la résonance diminue lorsque R augmente — la résistance est le seul élément qui limite le courant à la résonance.",
      "keyRule": "Courbe en cloche : le sommet donne (N₀, I₀) ; augmenter R abaisse le sommet sans le déplacer.",
      "formulas": [
        {
          "name": "Intensité à la résonance",
          "formula": "I_0 = \\frac{U}{R}",
          "note": "Car à la résonance Z = R (voir le point 3)."
        }
      ],
      "workedExample": {
        "title": "Lire les deux courbes du résumé",
        "statement": "Le circuit (L = 0,1 H, C = 5700 nF) est testé avec R = 36 Ω puis R = 200 Ω. Compare les maxima des deux courbes I = f(N).",
        "methodSteps": [
          "Pour R = 36 Ω, le tableau donne un maximum de 54,4 mA à 210 Hz.",
          "Pour R = 200 Ω, le maximum n'est que de 20 mA, au même endroit de l'axe des fréquences.",
          "La résistance plus grande écrête donc la courbe sans changer sa position."
        ],
        "conclusion": "Ce sont les valeurs des §2.1.1 des deux séries de mesures."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Le protocole : balayer la fréquence à U constant",
          "stepTheme": "Le protocole : balayer la fréquence à U constant",
          "stepBadge": "Le protocole : balayer la fréquence à U constant",
          "paragraphText": "La tension efficace du GBF étant fixée, on fait varier sa fréquence N et on note l'intensité efficace I.\nC'est la démarche des deux tableaux de mesures du §1.3, de 60 Hz à 300 Hz.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p01_q1",
            "type": "mcq",
            "prompt": "Pour tracer la courbe de résonance d'intensité, on fait varier :",
            "options": [
              "La fréquence du GBF, à tension efficace constante, en relevant I",
              "La tension, à fréquence constante",
              "La résistance seulement",
              "La capacité seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le protocole du §1.2 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La résonance d'intensité : I maximale",
          "stepTheme": "La résonance d'intensité : I maximale",
          "stepBadge": "La résonance d'intensité : I maximale",
          "paragraphText": "• Résonance d'intensité : lorsque la fréquence du GBF est égale à la fréquence propre du circuit, l'intensité efficace I atteint sa valeur maximale, notée I₀.\nLa courbe I = f(N) passe alors par son sommet.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p01_q2",
            "type": "mcq",
            "prompt": "La résonance d'intensité d'un circuit RLC série est le régime où :",
            "options": [
              "L'intensité efficace est minimale",
              "L'intensité efficace est maximale, égale à I₀",
              "La tension est maximale",
              "Le courant est nul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §2.1.1 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "I₀ = 54,4 mA pour R = 36 Ω, 20 mA pour R = 200 Ω",
          "stepTheme": "I₀ = 54,4 mA pour R = 36 Ω, 20 mA pour R = 200 Ω",
          "stepBadge": "I₀ = 54,4 mA pour R = 36 Ω, 20 mA pour R = 200 Ω",
          "paragraphText": "Les deux tableaux de mesures donnent des maxima très différents selon la résistance.\nPasser de 36 Ω à 200 Ω fait chuter le maximum de 54,4 mA à 20 mA.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p01_q3",
            "type": "mcq",
            "prompt": "Les intensités maximales relevées pour R = 36 Ω et R = 200 Ω valent respectivement :",
            "options": [
              "20 mA et 54,4 mA",
              "54,4 mA dans les deux cas",
              "54,4 mA et 20 mA",
              "211 mA et 90 mA"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les lectures des deux tableaux du §1.3, exploitées au §2.1.1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "I₀ diminue quand R augmente",
          "stepTheme": "I₀ diminue quand R augmente",
          "stepBadge": "I₀ diminue quand R augmente",
          "paragraphText": "La conclusion du §2.1.1 est générale : à tension d'alimentation égale, l'intensité de résonance décroît avec la résistance.\nÀ la résonance, en effet, I₀ = U/R : la résistance seule fixe le courant maximal.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p01_q4",
            "type": "mcq",
            "prompt": "Si on augmente la résistance totale d'un circuit RLC alimenté à U constant, l'intensité à la résonance :",
            "options": [
              "Augmente",
              "Ne change pas",
              "Devient infinie",
              "Diminue"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la conclusion du §2.1.1, cohérente avec I₀ = U/R."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La forme de la courbe : une cloche",
          "stepTheme": "La forme de la courbe : une cloche",
          "stepBadge": "La forme de la courbe : une cloche",
          "paragraphText": "Loin de la résonance, vers les basses comme vers les hautes fréquences, l'impédance augmente et le courant s'effondre (quelques mA à 60 Hz et à 300 Hz).\nLa courbe I = f(N) a donc un seul maximum, d'autant plus pointu que R est faible.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p01_q5",
            "type": "mcq",
            "prompt": "La courbe I = f(N) d'un circuit RLC série présente :",
            "options": [
              "Un maximum unique à la fréquence de résonance",
              "Deux maxima",
              "Une croissance monotone",
              "Un minimum à la résonance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la forme des courbes tracées au §1.4 à partir des tableaux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La fréquence se lit à l'ampèremètre... non, au GBF",
          "stepTheme": "La fréquence se lit à l'ampèremètre... non, au GBF",
          "stepBadge": "La fréquence se lit à l'ampèremètre... non, au GBF",
          "paragraphText": "Piège de lecture du tableau : la première ligne donne la fréquence imposée par le GBF, la seconde l'intensité mesurée à l'ampèremètre.\nLa fréquence de résonance est celle du générateur au sommet de la courbe, pas une grandeur mesurée dans le circuit.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p01_q6",
            "type": "mcq",
            "prompt": "Dans le montage de la courbe de résonance, la fréquence N est :",
            "options": [
              "Mesurée à l'ampèremètre",
              "Imposée et réglée par le GBF",
              "Calculée à partir de I",
              "Toujours égale à 50 Hz"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le GBF impose la fréquence (oscillations forcées) ; l'ampèremètre ne donne que I."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l14_resonance_p01_q1",
          "type": "mcq",
          "prompt": "Pour tracer la courbe de résonance d'intensité, on fait varier :",
          "options": [
            "La fréquence du GBF, à tension efficace constante, en relevant I",
            "La tension, à fréquence constante",
            "La résistance seulement",
            "La capacité seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le protocole du §1.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p01_q2",
          "type": "mcq",
          "prompt": "La résonance d'intensité d'un circuit RLC série est le régime où :",
          "options": [
            "L'intensité efficace est minimale",
            "L'intensité efficace est maximale, égale à I₀",
            "La tension est maximale",
            "Le courant est nul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §2.1.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p01_q3",
          "type": "mcq",
          "prompt": "Les intensités maximales relevées pour R = 36 Ω et R = 200 Ω valent respectivement :",
          "options": [
            "20 mA et 54,4 mA",
            "54,4 mA dans les deux cas",
            "54,4 mA et 20 mA",
            "211 mA et 90 mA"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les lectures des deux tableaux du §1.3, exploitées au §2.1.1."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p01_q4",
          "type": "mcq",
          "prompt": "Si on augmente la résistance totale d'un circuit RLC alimenté à U constant, l'intensité à la résonance :",
          "options": [
            "Augmente",
            "Ne change pas",
            "Devient infinie",
            "Diminue"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la conclusion du §2.1.1, cohérente avec I₀ = U/R."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p01_q5",
          "type": "mcq",
          "prompt": "La courbe I = f(N) d'un circuit RLC série présente :",
          "options": [
            "Un maximum unique à la fréquence de résonance",
            "Deux maxima",
            "Une croissance monotone",
            "Un minimum à la résonance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la forme des courbes tracées au §1.4 à partir des tableaux."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p01_q6",
          "type": "mcq",
          "prompt": "Dans le montage de la courbe de résonance, la fréquence N est :",
          "options": [
            "Mesurée à l'ampèremètre",
            "Imposée et réglée par le GBF",
            "Calculée à partir de I",
            "Toujours égale à 50 Hz"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le GBF impose la fréquence (oscillations forcées) ; l'ampèremètre ne donne que I."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l14_resonance_p02",
      "order": 2,
      "title": "La fréquence de résonance N₀ = 1/(2π√(LC))",
      "summary": "La condition Lω₀ = 1/(Cω₀) donne la fréquence propre du circuit ; elle ne dépend ni de R ni de U.",
      "conceptExplanation": "I est maximale quand l'impédance est minimale, c'est-à-dire quand le terme réactif s'annule : Lω₀ = 1/(Cω₀), soit LC·ω₀² = 1.\nOn en tire la pulsation propre ω₀ = 1/√(LC) et la fréquence propre N₀ = 1/(2π√(LC)).\nPour le circuit du résumé (L = 0,1 H, C = 5700 nF), le calcul donne N₀ = 210,9 Hz, et l'exploitation graphique des deux courbes donne la même valeur, N₀ = 211 Hz, pour R = 36 Ω comme pour R = 200 Ω.\nConclusion : la fréquence de résonance d'un circuit RLC est indépendante de la résistance R — c'est la fréquence propre du circuit LC.",
      "keyRule": "N₀ = 1/(2π√(LC)) : seuls L et C comptent ; R et U n'y changent rien.",
      "formulas": [
        {
          "name": "Condition de résonance",
          "formula": "L\\omega_0 = \\frac{1}{C\\omega_0} \\quad \\text{soit} \\quad L C \\omega_0^2 = 1",
          "note": "Les effets de la bobine et du condensateur se compensent."
        },
        {
          "name": "Fréquence de résonance",
          "formula": "N_0 = \\frac{1}{2\\pi\\sqrt{LC}}",
          "note": "En hertz ; ω₀ = 1/√(LC) en rad/s."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application 1 : L = 1 H, C = 10 µF",
        "statement": "Un circuit RLC série comporte un condensateur de capacité C = 10 µF et une bobine d'inductance L = 1 H. Détermine sa fréquence propre N₀.",
        "methodSteps": [
          "On applique N₀ = 1/(2π√(LC)).",
          "Le produit LC vaut 10⁻⁵ s², dont la racine est environ 3,16 × 10⁻³ s.",
          "La solution obtient N₀ = 50,32 Hz."
        ],
        "conclusion": "C'est le résultat de l'activité d'application 1 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La condition de résonance : Lω₀ = 1/(Cω₀)",
          "stepTheme": "La condition de résonance : Lω₀ = 1/(Cω₀)",
          "stepBadge": "La condition de résonance : Lω₀ = 1/(Cω₀)",
          "paragraphText": "À la résonance, l'impédance Z = √(R² + (Lω − 1/(Cω))²) est minimale : le terme entre parenthèses doit être nul.\nC'est la compensation exacte des effets de la bobine et du condensateur.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p02_q1",
            "type": "mcq",
            "prompt": "La condition de résonance d'intensité d'un circuit RLC série est :",
            "options": [
              "$L\\omega_0 = 1/(C\\omega_0)$",
              "$L\\omega_0 = R$",
              "$C\\omega_0 = R$",
              "$L = C$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la condition du §III.1, équivalente à LC·ω₀² = 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule de la fréquence propre",
          "stepTheme": "La formule de la fréquence propre",
          "stepBadge": "La formule de la fréquence propre",
          "paragraphText": "De LC·ω₀² = 1 et ω₀ = 2πN₀, on tire N₀ = 1/(2π√(LC)).\nAugmenter L ou C abaisse la fréquence propre ; ce sont les deux seuls paramètres de la formule.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p02_q2",
            "type": "mcq",
            "prompt": "La fréquence de résonance d'un circuit RLC série est :",
            "options": [
              "$N_0 = 2\\pi\\sqrt{LC}$",
              "$N_0 = 1/(2\\pi\\sqrt{LC})$",
              "$N_0 = \\sqrt{LC}/(2\\pi)$",
              "$N_0 = 1/(2\\pi R C)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation du §2.1.2 ; la dernière expression serait celle d'un circuit RC, sans bobine."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "N₀ = 211 Hz pour le circuit du résumé",
          "stepTheme": "N₀ = 211 Hz pour le circuit du résumé",
          "stepBadge": "N₀ = 211 Hz pour le circuit du résumé",
          "paragraphText": "Avec L = 0,1 H et C = 5700 nF, le calcul donne N₀ = 210,9 Hz.\nGraphiquement, les deux courbes (R = 36 Ω et R = 200 Ω) culminent à la même abscisse : N₀ = 211 Hz.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p02_q3",
            "type": "mcq",
            "prompt": "La fréquence de résonance du circuit étudié (L = 0,1 H ; C = 5700 nF) vaut environ :",
            "options": [
              "50 Hz",
              "100 Hz",
              "211 Hz",
              "500 Hz"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la valeur calculée au §2.1.2 et confirmée graphiquement pour les deux résistances."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "N₀ est indépendante de R",
          "stepTheme": "N₀ est indépendante de R",
          "stepBadge": "N₀ est indépendante de R",
          "paragraphText": "La conclusion du §2.1.2 est explicite : la fréquence de résonance est indépendante de la résistance R.\nR règle la hauteur et la largeur de la courbe, mais pas la position de son sommet.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p02_q4",
            "type": "mcq",
            "prompt": "Si on double la résistance d'un circuit RLC sans changer L et C, sa fréquence de résonance :",
            "options": [
              "Double",
              "Est divisée par deux",
              "Augmente légèrement",
              "Ne change pas"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La formule N₀ = 1/(2π√(LC)) ne contient pas R : vérifié par les deux courbes du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'activité 1 : N₀ = 50,32 Hz",
          "stepTheme": "L'activité 1 : N₀ = 50,32 Hz",
          "stepBadge": "L'activité 1 : N₀ = 50,32 Hz",
          "paragraphText": "Pour une bobine de 1 H associée à un condensateur de 10 µF, la fréquence propre tombe près de celle du secteur.\nLa solution de l'activité d'application 1 obtient N₀ = 50,32 Hz.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p02_q5",
            "type": "mcq",
            "prompt": "La fréquence propre du circuit de l'activité 1 (L = 1 H ; C = 10 µF) vaut environ :",
            "options": [
              "50,32 Hz",
              "211 Hz",
              "5,03 Hz",
              "503 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le résultat de l'activité d'application 1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Choisir C pour résonner à 50 Hz (exercice 3)",
          "stepTheme": "Choisir C pour résonner à 50 Hz (exercice 3)",
          "stepBadge": "Choisir C pour résonner à 50 Hz (exercice 3)",
          "paragraphText": "Dans l'exercice 3, le circuit (R = 10 Ω, L = 0,1 H) est alimenté à la fréquence N = 50 Hz.\nLa capacité qui met le circuit en résonance à cette fréquence, tirée de LC·ω² = 1, vaut C = 101 µF.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p02_q6",
            "type": "mcq",
            "prompt": "La capacité qui accorde le circuit de l'exercice 3 (L = 0,1 H) sur 50 Hz vaut environ :",
            "options": [
              "10 µF",
              "101 µF",
              "1 µF",
              "5700 nF"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C = 1/(L·4π²N²) donne 101 µF dans la solution de l'exercice 3."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l14_resonance_p02_q1",
          "type": "mcq",
          "prompt": "La condition de résonance d'intensité d'un circuit RLC série est :",
          "options": [
            "$L\\omega_0 = 1/(C\\omega_0)$",
            "$L\\omega_0 = R$",
            "$C\\omega_0 = R$",
            "$L = C$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la condition du §III.1, équivalente à LC·ω₀² = 1."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p02_q2",
          "type": "mcq",
          "prompt": "La fréquence de résonance d'un circuit RLC série est :",
          "options": [
            "$N_0 = 2\\pi\\sqrt{LC}$",
            "$N_0 = 1/(2\\pi\\sqrt{LC})$",
            "$N_0 = \\sqrt{LC}/(2\\pi)$",
            "$N_0 = 1/(2\\pi R C)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation du §2.1.2 ; la dernière expression serait celle d'un circuit RC, sans bobine."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p02_q3",
          "type": "mcq",
          "prompt": "La fréquence de résonance du circuit étudié (L = 0,1 H ; C = 5700 nF) vaut environ :",
          "options": [
            "50 Hz",
            "100 Hz",
            "211 Hz",
            "500 Hz"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la valeur calculée au §2.1.2 et confirmée graphiquement pour les deux résistances."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p02_q4",
          "type": "mcq",
          "prompt": "Si on double la résistance d'un circuit RLC sans changer L et C, sa fréquence de résonance :",
          "options": [
            "Double",
            "Est divisée par deux",
            "Augmente légèrement",
            "Ne change pas"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La formule N₀ = 1/(2π√(LC)) ne contient pas R : vérifié par les deux courbes du résumé."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p02_q5",
          "type": "mcq",
          "prompt": "La fréquence propre du circuit de l'activité 1 (L = 1 H ; C = 10 µF) vaut environ :",
          "options": [
            "50,32 Hz",
            "211 Hz",
            "5,03 Hz",
            "503 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le résultat de l'activité d'application 1."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p02_q6",
          "type": "mcq",
          "prompt": "La capacité qui accorde le circuit de l'exercice 3 (L = 0,1 H) sur 50 Hz vaut environ :",
          "options": [
            "10 µF",
            "101 µF",
            "1 µF",
            "5700 nF"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C = 1/(L·4π²N²) donne 101 µF dans la solution de l'exercice 3."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l14_resonance_p03",
      "order": 3,
      "title": "À la résonance : Z = R et φ = 0",
      "summary": "Le circuit se comporte comme un conducteur ohmique : impédance minimale égale à R, tension et courant en phase, I₀ = U/R.",
      "conceptExplanation": "La remarque du §2.2 le résume : à la résonance d'intensité, Lω = 1/(Cω), donc l'expression de l'impédance se réduit à Z = R.\nLe circuit RLC se comporte alors comme un conducteur ohmique : Z = R et φ = 0, la tension et le courant sont en phase.\nC'est ce critère — deux sinusoïdes en phase à l'oscilloscope — qui permet de repérer la résonance sans même mesurer le maximum de courant, comme dans la situation d'évaluation et l'exercice 5.\nDans l'exercice 2, une bobine de résistance r = 10 Ω (L = 0,25 H, C = 1,5 µF) à la résonance présente donc une impédance Z = 10 Ω, avec une fréquence propre de 260,4 Hz.",
      "keyRule": "Résonance ⇔ u et i en phase ⇔ Z minimale = résistance totale du circuit.",
      "formulas": [
        {
          "name": "Impédance à la résonance",
          "formula": "Z = R_{totale}",
          "note": "R totale inclut la résistance interne de la bobine si elle existe."
        },
        {
          "name": "Phase à la résonance",
          "formula": "\\varphi = 0",
          "note": "u et i sont en phase : le circuit est purement résistif."
        }
      ],
      "workedExample": {
        "title": "L'exercice 2 : Z et N₀ à la résonance",
        "statement": "Une bobine de résistance r = 10 Ω et d'inductance L = 0,25 H est en série avec un condensateur de 1,5 µF, à la résonance d'intensité. Détermine l'impédance du circuit et la fréquence du courant.",
        "methodSteps": [
          "À la résonance, l'impédance se réduit à la résistance totale : Z = r = 10 Ω.",
          "La fréquence est la fréquence propre : N₀ = 1/(2π√(LC)).",
          "La solution obtient N₀ = 260,4 Hz."
        ],
        "conclusion": "Ce sont les réponses aux questions 1.1 et 1.2 de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'impédance est minimale et vaut R",
          "stepTheme": "L'impédance est minimale et vaut R",
          "stepBadge": "L'impédance est minimale et vaut R",
          "paragraphText": "À la résonance, le terme réactif de Z s'annule : il ne reste que la résistance.\nC'est la plus petite valeur possible de l'impédance, ce qui explique le maximum du courant.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p03_q1",
            "type": "mcq",
            "prompt": "À la résonance d'intensité, l'impédance d'un circuit RLC série vaut :",
            "options": [
              "Z = R, sa valeur minimale",
              "Z = Lω + 1/(Cω)",
              "Z = 0",
              "Z est maximale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la remarque du §2.2 ; Z = 0 serait un court-circuit, impossible avec R présente."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le circuit se comporte comme un conducteur ohmique",
          "stepTheme": "Le circuit se comporte comme un conducteur ohmique",
          "stepBadge": "Le circuit se comporte comme un conducteur ohmique",
          "paragraphText": "Avec Z = R et φ = 0, tout se passe comme si la bobine et le condensateur avaient disparu.\nLe résumé le dit : à la résonance, le circuit RLC se comporte comme un conducteur ohmique.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p03_q2",
            "type": "mcq",
            "prompt": "À la résonance, le circuit RLC série se comporte comme :",
            "options": [
              "Un condensateur seul",
              "Un conducteur ohmique de résistance R",
              "Une bobine seule",
              "Un circuit ouvert"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la seconde phrase de la remarque du §2.2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "u et i en phase : le critère visuel",
          "stepTheme": "u et i en phase : le critère visuel",
          "stepBadge": "u et i en phase : le critère visuel",
          "paragraphText": "Sur l'oscilloscope bicourbe, la résonance se reconnaît à la superposition des passages par zéro des deux sinusoïdes.\nC'est le critère utilisé dans la situation d'évaluation (en phase à 148 Hz) et dans l'exercice 5.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p03_q3",
            "type": "mcq",
            "prompt": "À l'oscilloscope, on reconnaît la résonance d'intensité au fait que les sinusoïdes de u et de i sont :",
            "options": [
              "En opposition de phase",
              "Décalées d'un quart de période",
              "En phase",
              "D'amplitudes égales"
            ],
            "correctAnswerIndex": 2,
            "explanation": "φ = 0 à la résonance : c'est la justification de l'exercice 5, question 2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 2 : Z = 10 Ω et N₀ = 260,4 Hz",
          "stepTheme": "L'exercice 2 : Z = 10 Ω et N₀ = 260,4 Hz",
          "stepBadge": "L'exercice 2 : Z = 10 Ω et N₀ = 260,4 Hz",
          "paragraphText": "La bobine de l'exercice 2 n'a pas de résistor séparé : sa résistance interne r = 10 Ω est la résistance totale du circuit.\nÀ la résonance, Z = 10 Ω et la fréquence propre vaut 260,4 Hz.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p03_q4",
            "type": "mcq",
            "prompt": "Pour le circuit de l'exercice 2 (r = 10 Ω ; L = 0,25 H ; C = 1,5 µF) à la résonance :",
            "options": [
              "Z = 260 Ω et N₀ = 10 Hz",
              "Z = 0 Ω et N₀ = 260,4 Hz",
              "Z = 10 Ω et N₀ = 50 Hz",
              "Z = 10 Ω et N₀ = 260,4 Hz"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont les réponses 1.1 et 1.2 de l'exercice 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La résistance totale inclut celle de la bobine",
          "stepTheme": "La résistance totale inclut celle de la bobine",
          "stepBadge": "La résistance totale inclut celle de la bobine",
          "paragraphText": "Piège : si la bobine a une résistance interne r, l'impédance à la résonance est Z = R + r, pas R.\nDans la situation d'évaluation, c'est (R + r) = 407,5 Ω qui limite le courant, d'où I = 4,9 mA pour U = 2,0 V.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p03_q5",
            "type": "mcq",
            "prompt": "À la résonance, si la bobine a une résistance interne r en plus du résistor R, l'impédance vaut :",
            "options": [
              "Z = R + r",
              "Z = R, la résistance externe seule",
              "Z = r, la résistance interne seule",
              "Z = R − r"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le calcul de la question 3.2.2 de la situation d'évaluation : I = U/(R + r)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Retrouver L à partir de la fréquence de résonance",
          "stepTheme": "Retrouver L à partir de la fréquence de résonance",
          "stepBadge": "Retrouver L à partir de la fréquence de résonance",
          "paragraphText": "La relation LC·ω₀² = 1 s'inverse : connaissant C et la fréquence où u et i sont en phase, on calcule L.\nLa situation d'évaluation obtient ainsi L = 0,19 H pour C = 6,1 µF et N₀ = 148 Hz.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p03_q6",
            "type": "mcq",
            "prompt": "L'inductance déterminée dans la situation d'évaluation (C = 6,1 µF ; résonance à 148 Hz) vaut environ :",
            "options": [
              "0,019 H",
              "0,19 H",
              "1,9 H",
              "0,1 H"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L = 1/(C·4π²N₀²) donne 0,19 H (question 3.2.1) ; 0,1 H est l'inductance de l'exercice 5."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l14_resonance_p03_q1",
          "type": "mcq",
          "prompt": "À la résonance d'intensité, l'impédance d'un circuit RLC série vaut :",
          "options": [
            "Z = R, sa valeur minimale",
            "Z = Lω + 1/(Cω)",
            "Z = 0",
            "Z est maximale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la remarque du §2.2 ; Z = 0 serait un court-circuit, impossible avec R présente."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p03_q2",
          "type": "mcq",
          "prompt": "À la résonance, le circuit RLC série se comporte comme :",
          "options": [
            "Un condensateur seul",
            "Un conducteur ohmique de résistance R",
            "Une bobine seule",
            "Un circuit ouvert"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la seconde phrase de la remarque du §2.2."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p03_q3",
          "type": "mcq",
          "prompt": "À l'oscilloscope, on reconnaît la résonance d'intensité au fait que les sinusoïdes de u et de i sont :",
          "options": [
            "En opposition de phase",
            "Décalées d'un quart de période",
            "En phase",
            "D'amplitudes égales"
          ],
          "correctAnswerIndex": 2,
          "explanation": "φ = 0 à la résonance : c'est la justification de l'exercice 5, question 2."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p03_q4",
          "type": "mcq",
          "prompt": "Pour le circuit de l'exercice 2 (r = 10 Ω ; L = 0,25 H ; C = 1,5 µF) à la résonance :",
          "options": [
            "Z = 260 Ω et N₀ = 10 Hz",
            "Z = 0 Ω et N₀ = 260,4 Hz",
            "Z = 10 Ω et N₀ = 50 Hz",
            "Z = 10 Ω et N₀ = 260,4 Hz"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont les réponses 1.1 et 1.2 de l'exercice 2."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p03_q5",
          "type": "mcq",
          "prompt": "À la résonance, si la bobine a une résistance interne r en plus du résistor R, l'impédance vaut :",
          "options": [
            "Z = R + r",
            "Z = R, la résistance externe seule",
            "Z = r, la résistance interne seule",
            "Z = R − r"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le calcul de la question 3.2.2 de la situation d'évaluation : I = U/(R + r)."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p03_q6",
          "type": "mcq",
          "prompt": "L'inductance déterminée dans la situation d'évaluation (C = 6,1 µF ; résonance à 148 Hz) vaut environ :",
          "options": [
            "0,019 H",
            "0,19 H",
            "1,9 H",
            "0,1 H"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L = 1/(C·4π²N₀²) donne 0,19 H (question 3.2.1) ; 0,1 H est l'inductance de l'exercice 5."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l14_resonance_p04",
      "order": 4,
      "title": "La bande passante à 3 décibels",
      "summary": "Intervalle des fréquences où I ≥ I₀/√2 ; sa largeur ΔN = N₂ − N₁ = R/(2πL) augmente avec R.",
      "conceptExplanation": "La bande passante à 3 décibels (3 dB) d'un circuit RLC série est l'intervalle des fréquences pour lesquelles l'intensité reste au moins égale à I₀/√2.\nSa largeur est ΔN = N₂ − N₁, où N₁ et N₂ sont les fréquences de coupure où I vaut exactement I₀/√2.\nPour R = 36 Ω : I₀/√2 = 38,47 mA, atteint à N₁ = 180 Hz et N₂ = 240 Hz, d'où ΔN = 60 Hz ; pour R = 200 Ω : I'₀/√2 = 14,14 mA, N'₁ = 160 Hz et N'₂ = 250 Hz, d'où ΔN' = 90 Hz.\nLa largeur de bande est aussi donnée par Δω = R/L, soit ΔN = R/(2πL) : elle augmente avec la résistance R.",
      "keyRule": "Bande passante : I ≥ I₀/√2 entre N₁ et N₂ ; ΔN = R/(2πL) — plus R est grand, plus la bande est large.",
      "formulas": [
        {
          "name": "Largeur de la bande passante",
          "formula": "\\Delta N = N_2 - N_1 = \\frac{R}{2\\pi L}",
          "note": "En Hz ; en pulsations : Δω = R/L."
        },
        {
          "name": "Fréquences de coupure",
          "formula": "I(N_1) = I(N_2) = \\frac{I_0}{\\sqrt{2}}",
          "note": "Définition de la bande passante à 3 dB."
        }
      ],
      "workedExample": {
        "title": "La bande passante de l'exercice 4 : 21 Hz",
        "statement": "La courbe I = f(N) d'un circuit culmine à I₀ = 500 mA pour N₀ = 260 Hz. La droite horizontale à I₀/√2 = 354 mA coupe la courbe en N₁ = 250 Hz et N₂ = 271 Hz. Détermine la bande passante.",
        "methodSteps": [
          "Les fréquences de coupure sont lues aux intersections de la courbe avec le niveau I₀/√2.",
          "La largeur vaut ΔN = N₂ − N₁ = 271 − 250.",
          "La solution obtient ΔN = 21 Hz, une bande étroite."
        ],
        "conclusion": "C'est la détermination graphique de la question (d) de l'exercice 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de la bande passante à 3 dB",
          "stepTheme": "La définition de la bande passante à 3 dB",
          "stepBadge": "La définition de la bande passante à 3 dB",
          "paragraphText": "• Bande passante à 3 dB : intervalle des fréquences pour lesquelles l'intensité efficace vérifie I ≥ I₀/√2.\nEn dessous de ce seuil (environ 71 % du maximum), le circuit est considéré comme ne répondant plus assez.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p04_q1",
            "type": "mcq",
            "prompt": "La bande passante à 3 dB d'un circuit RLC série est l'intervalle des fréquences où :",
            "options": [
              "I ≥ I₀/√2",
              "I ≥ I₀/2",
              "I = I₀ exactement",
              "I ≤ I₀/√2"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §2.2 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Pour R = 36 Ω : ΔN = 60 Hz",
          "stepTheme": "Pour R = 36 Ω : ΔN = 60 Hz",
          "stepBadge": "Pour R = 36 Ω : ΔN = 60 Hz",
          "paragraphText": "Le niveau I₀/√2 vaut 38,47 mA pour la courbe à R = 36 Ω.\nIl est atteint pour N₁ = 180 Hz et N₂ = 240 Hz : la bande passante vaut donc 60 Hz.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p04_q2",
            "type": "mcq",
            "prompt": "La bande passante du circuit pour R = 36 Ω (coupures à 180 et 240 Hz) vaut :",
            "options": [
              "30 Hz",
              "60 Hz",
              "90 Hz",
              "211 Hz"
            ],
            "correctAnswerIndex": 1,
            "explanation": "ΔN = 240 − 180 = 60 Hz (§2.2) ; 90 Hz est la bande pour R = 200 Ω."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La bande s'élargit quand R augmente",
          "stepTheme": "La bande s'élargit quand R augmente",
          "stepBadge": "La bande s'élargit quand R augmente",
          "paragraphText": "Pour R = 200 Ω, la bande passante passe à 90 Hz : la courbe, plus basse, est aussi plus étalée.\nLa relation ΔN = R/(2πL) le confirme : la largeur de bande est proportionnelle à la résistance.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p04_q3",
            "type": "mcq",
            "prompt": "La largeur de la bande passante d'un circuit RLC série, quand la résistance R augmente :",
            "options": [
              "Diminue",
              "Ne change pas",
              "Augmente (ΔN = R/(2πL))",
              "Devient nulle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la conclusion du §2.2, illustrée par 60 Hz (36 Ω) contre 90 Hz (200 Ω)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "N₀ est (à peu près) centré dans la bande",
          "stepTheme": "N₀ est (à peu près) centré dans la bande",
          "stepBadge": "N₀ est (à peu près) centré dans la bande",
          "paragraphText": "Pour R = 36 Ω, les coupures 180 Hz et 240 Hz encadrent la résonance à 211 Hz.\nLa courbe n'est pas parfaitement symétrique en fréquence, mais N₀ se situe entre N₁ et N₂, près du milieu de la bande.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p04_q4",
            "type": "mcq",
            "prompt": "Les fréquences de coupure N₁ et N₂ de la bande passante sont situées :",
            "options": [
              "Toutes deux au-dessus de N₀",
              "Toutes deux au-dessous de N₀",
              "Exactement égales à N₀",
              "De part et d'autre de la fréquence de résonance N₀"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par construction, la bande [N₁ ; N₂] contient N₀ : exemples 180–240 Hz autour de 211 Hz."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La détermination graphique de ΔN",
          "stepTheme": "La détermination graphique de ΔN",
          "stepBadge": "La détermination graphique de ΔN",
          "paragraphText": "La méthode de l'exercice 4 : tracer la droite horizontale d'ordonnée I₀/√2 (ici 354 mA pour I₀ = 500 mA).\nSes intersections avec la courbe donnent N₁ et N₂ par lecture des abscisses, puis ΔN par différence.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p04_q5",
            "type": "mcq",
            "prompt": "Pour déterminer graphiquement la bande passante, on trace la droite horizontale au niveau :",
            "options": [
              "I₀/√2, dont les intersections avec la courbe donnent N₁ et N₂",
              "I₀, qui ne touche la courbe qu'au sommet",
              "I₀/2 exactement",
              "0 mA"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la construction décrite dans la solution de l'exercice 4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "ΔN n'est pas la fréquence de résonance",
          "stepTheme": "ΔN n'est pas la fréquence de résonance",
          "stepBadge": "ΔN n'est pas la fréquence de résonance",
          "paragraphText": "Piège : ΔN est une largeur, exprimée en hertz comme N₀, mais ce n'est pas une fréquence du circuit.\nDans la situation d'évaluation, on trouve ΔN = 344 Hz pour N₀ = 148 Hz : la bande est plus large que la fréquence centrale, signe d'une résonance très floue.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p04_q6",
            "type": "mcq",
            "prompt": "La largeur de bande ΔN = 344 Hz de la situation d'évaluation, pour N₀ = 148 Hz, indique :",
            "options": [
              "Une erreur de mesure",
              "Une résonance très floue (bande plus large que la fréquence centrale)",
              "Une résonance très aiguë",
              "Que le circuit est en court-circuit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "ΔN se compare à N₀ par le facteur de qualité : Q = N₀/ΔN = 0,43, très faible (question 3.4.2)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l14_resonance_p04_q1",
          "type": "mcq",
          "prompt": "La bande passante à 3 dB d'un circuit RLC série est l'intervalle des fréquences où :",
          "options": [
            "I ≥ I₀/√2",
            "I ≥ I₀/2",
            "I = I₀ exactement",
            "I ≤ I₀/√2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §2.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p04_q2",
          "type": "mcq",
          "prompt": "La bande passante du circuit pour R = 36 Ω (coupures à 180 et 240 Hz) vaut :",
          "options": [
            "30 Hz",
            "60 Hz",
            "90 Hz",
            "211 Hz"
          ],
          "correctAnswerIndex": 1,
          "explanation": "ΔN = 240 − 180 = 60 Hz (§2.2) ; 90 Hz est la bande pour R = 200 Ω."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p04_q3",
          "type": "mcq",
          "prompt": "La largeur de la bande passante d'un circuit RLC série, quand la résistance R augmente :",
          "options": [
            "Diminue",
            "Ne change pas",
            "Augmente (ΔN = R/(2πL))",
            "Devient nulle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la conclusion du §2.2, illustrée par 60 Hz (36 Ω) contre 90 Hz (200 Ω)."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p04_q4",
          "type": "mcq",
          "prompt": "Les fréquences de coupure N₁ et N₂ de la bande passante sont situées :",
          "options": [
            "Toutes deux au-dessus de N₀",
            "Toutes deux au-dessous de N₀",
            "Exactement égales à N₀",
            "De part et d'autre de la fréquence de résonance N₀"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par construction, la bande [N₁ ; N₂] contient N₀ : exemples 180–240 Hz autour de 211 Hz."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p04_q5",
          "type": "mcq",
          "prompt": "Pour déterminer graphiquement la bande passante, on trace la droite horizontale au niveau :",
          "options": [
            "I₀/√2, dont les intersections avec la courbe donnent N₁ et N₂",
            "I₀, qui ne touche la courbe qu'au sommet",
            "I₀/2 exactement",
            "0 mA"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la construction décrite dans la solution de l'exercice 4."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p04_q6",
          "type": "mcq",
          "prompt": "La largeur de bande ΔN = 344 Hz de la situation d'évaluation, pour N₀ = 148 Hz, indique :",
          "options": [
            "Une erreur de mesure",
            "Une résonance très floue (bande plus large que la fréquence centrale)",
            "Une résonance très aiguë",
            "Que le circuit est en court-circuit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "ΔN se compare à N₀ par le facteur de qualité : Q = N₀/ΔN = 0,43, très faible (question 3.4.2)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l14_resonance_p05",
      "order": 5,
      "title": "Le facteur de qualité et la sélectivité",
      "summary": "Q = N₀/ΔN = Lω₀/R : il mesure l'acuité de la résonance ; un circuit est d'autant plus sélectif que R est faible.",
      "conceptExplanation": "Le facteur de qualité d'un dipôle RLC est défini par Q = N₀/ΔN = ω₀/Δω, que l'on écrit aussi Q = Lω₀/R = 1/(R·C·ω₀) = (1/R)·√(L/C).\nPour le circuit du résumé : Q = 211/60 = 3,52 avec R = 36 Ω, et seulement Q = 2,3 avec R = 200 Ω.\nConclusion du résumé : le facteur de qualité diminue lorsque la résistance augmente ; il mesure l'acuité de la résonance — plus Q est grand, plus la bande passante est étroite, la résonance aiguë et le circuit sélectif.\nLe circuit le plus sélectif est donc celui qui a la résistance la plus petite ; dans l'activité 2 (L = 250 mH, R = 37 Ω, C = 3,2 µF), on obtient N₀ = 178 Hz, Q = 7,6 et ΔN = 23,42 Hz.",
      "keyRule": "Q = N₀/ΔN = Lω₀/R : Q grand ⇔ résonance aiguë ⇔ circuit sélectif ⇔ petite résistance.",
      "formulas": [
        {
          "name": "Facteur de qualité",
          "formula": "Q = \\frac{N_0}{\\Delta N} = \\frac{L\\omega_0}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}",
          "note": "Sans unité ; diminue quand R augmente."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application 2 : un circuit plus sélectif",
        "statement": "Une bobine de L = 250 mH et R = 37 Ω est en série avec un condensateur de 3,2 µF. Calcule la fréquence de résonance, le facteur de qualité et la bande passante.",
        "methodSteps": [
          "Fréquence propre : N₀ = 1/(2π√(LC)) = 178 Hz.",
          "Facteur de qualité : Q = L·ω₀/R = 7,6.",
          "Bande passante : ΔN = N₀/Q = 23,42 Hz — étroite, le circuit est sélectif."
        ],
        "conclusion": "Ce sont les trois résultats de l'activité d'application 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition du facteur de qualité",
          "stepTheme": "La définition du facteur de qualité",
          "stepBadge": "La définition du facteur de qualité",
          "paragraphText": "• Facteur de qualité : rapport de la fréquence de résonance à la largeur de la bande passante, Q = N₀/ΔN.\nC'est un nombre sans unité, d'autant plus grand que la courbe de résonance est pointue.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p05_q1",
            "type": "mcq",
            "prompt": "Le facteur de qualité d'un circuit RLC série est défini par :",
            "options": [
              "Q = N₀/ΔN",
              "Q = ΔN/N₀",
              "Q = N₀ × ΔN",
              "Q = R/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §III.3, avec les formes équivalentes Lω₀/R et 1/(RCω₀)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Q = 3,52 pour R = 36 Ω, 2,3 pour R = 200 Ω",
          "stepTheme": "Q = 3,52 pour R = 36 Ω, 2,3 pour R = 200 Ω",
          "stepBadge": "Q = 3,52 pour R = 36 Ω, 2,3 pour R = 200 Ω",
          "paragraphText": "Le calcul Q = N₀/ΔN donne 211/60 pour la petite résistance et 211/90 pour la grande.\nLe facteur de qualité diminue donc lorsque la résistance augmente, comme le conclut le résumé.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p05_q2",
            "type": "mcq",
            "prompt": "Les facteurs de qualité pour R = 36 Ω (ΔN = 60 Hz) et R = 200 Ω (ΔN = 90 Hz) valent :",
            "options": [
              "Q = 60 et Q = 90",
              "Q = 3,52 et Q = 2,3",
              "Q = 2,3 et Q = 3,52",
              "Q = 211 dans les deux cas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Q = 211/60 = 3,52 et Q = 211/90 = 2,3 (§III.3)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Q mesure l'acuité de la résonance",
          "stepTheme": "Q mesure l'acuité de la résonance",
          "stepBadge": "Q mesure l'acuité de la résonance",
          "paragraphText": "Plus Q est grand, plus la bande passante est étroite et la résonance aiguë : le circuit est plus sélectif.\nPlus Q est petit, plus la bande est large et la résonance floue : le circuit est peu sélectif.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p05_q3",
            "type": "mcq",
            "prompt": "Un circuit de facteur de qualité élevé possède :",
            "options": [
              "Une bande passante très large",
              "Une résonance floue",
              "Une bande passante étroite et une résonance aiguë : il est sélectif",
              "Une fréquence de résonance nulle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la conclusion du §III.3 du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le circuit le plus sélectif a la plus petite résistance",
          "stepTheme": "Le circuit le plus sélectif a la plus petite résistance",
          "stepBadge": "Le circuit le plus sélectif a la plus petite résistance",
          "paragraphText": "Comme Q = Lω₀/R, la sélectivité se gagne en réduisant les pertes résistives du circuit.\nLe résumé le formule : le circuit le plus sélectif est celui qui a la résistance la plus petite.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p05_q4",
            "type": "mcq",
            "prompt": "Pour rendre un circuit RLC plus sélectif (à L et C fixés), il faut :",
            "options": [
              "Augmenter sa résistance",
              "Supprimer la bobine",
              "Ajouter un résistor en série",
              "Diminuer sa résistance totale"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Q varie en 1/R : c'est la dernière phrase du §III.3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'activité 2 : Q = 7,6 et ΔN = 23,42 Hz",
          "stepTheme": "L'activité 2 : Q = 7,6 et ΔN = 23,42 Hz",
          "stepBadge": "L'activité 2 : Q = 7,6 et ΔN = 23,42 Hz",
          "paragraphText": "Le circuit de l'activité 2 (L = 250 mH, R = 37 Ω, C = 3,2 µF) résonne à 178 Hz.\nSon facteur de qualité, 7,6, est nettement supérieur aux 3,52 et 2,3 du circuit d'étude : sa bande passante n'est que de 23,42 Hz.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p05_q5",
            "type": "mcq",
            "prompt": "Le facteur de qualité et la bande passante du circuit de l'activité 2 (N₀ = 178 Hz) valent :",
            "options": [
              "Q = 7,6 et ΔN = 23,42 Hz",
              "Q = 23,42 et ΔN = 7,6 Hz",
              "Q = 3,52 et ΔN = 60 Hz",
              "Q = 0,43 et ΔN = 344 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les résultats des questions 2 et 3 de l'activité 2 ; Q = 0,43 appartient à la situation d'évaluation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 4 : Q = 12,38, le plus sélectif",
          "stepTheme": "L'exercice 4 : Q = 12,38, le plus sélectif",
          "stepBadge": "L'exercice 4 : Q = 12,38, le plus sélectif",
          "paragraphText": "Avec N₀ = 260 Hz et une bande de 21 Hz seulement, le circuit de l'exercice 4 atteint Q = 260/21.\nLa solution donne Q = 12,38 : c'est le circuit le plus sélectif de toute la leçon.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p05_q6",
            "type": "mcq",
            "prompt": "Le facteur de qualité du circuit de l'exercice 4 (N₀ = 260 Hz ; ΔN = 21 Hz) vaut environ :",
            "options": [
              "0,43",
              "12,38",
              "3,52",
              "7,6"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Q = N₀/ΔN = 12,38 dans la solution de l'exercice 4."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l14_resonance_p05_q1",
          "type": "mcq",
          "prompt": "Le facteur de qualité d'un circuit RLC série est défini par :",
          "options": [
            "Q = N₀/ΔN",
            "Q = ΔN/N₀",
            "Q = N₀ × ΔN",
            "Q = R/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §III.3, avec les formes équivalentes Lω₀/R et 1/(RCω₀)."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p05_q2",
          "type": "mcq",
          "prompt": "Les facteurs de qualité pour R = 36 Ω (ΔN = 60 Hz) et R = 200 Ω (ΔN = 90 Hz) valent :",
          "options": [
            "Q = 60 et Q = 90",
            "Q = 3,52 et Q = 2,3",
            "Q = 2,3 et Q = 3,52",
            "Q = 211 dans les deux cas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Q = 211/60 = 3,52 et Q = 211/90 = 2,3 (§III.3)."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p05_q3",
          "type": "mcq",
          "prompt": "Un circuit de facteur de qualité élevé possède :",
          "options": [
            "Une bande passante très large",
            "Une résonance floue",
            "Une bande passante étroite et une résonance aiguë : il est sélectif",
            "Une fréquence de résonance nulle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la conclusion du §III.3 du résumé."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p05_q4",
          "type": "mcq",
          "prompt": "Pour rendre un circuit RLC plus sélectif (à L et C fixés), il faut :",
          "options": [
            "Augmenter sa résistance",
            "Supprimer la bobine",
            "Ajouter un résistor en série",
            "Diminuer sa résistance totale"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Q varie en 1/R : c'est la dernière phrase du §III.3."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p05_q5",
          "type": "mcq",
          "prompt": "Le facteur de qualité et la bande passante du circuit de l'activité 2 (N₀ = 178 Hz) valent :",
          "options": [
            "Q = 7,6 et ΔN = 23,42 Hz",
            "Q = 23,42 et ΔN = 7,6 Hz",
            "Q = 3,52 et ΔN = 60 Hz",
            "Q = 0,43 et ΔN = 344 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les résultats des questions 2 et 3 de l'activité 2 ; Q = 0,43 appartient à la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p05_q6",
          "type": "mcq",
          "prompt": "Le facteur de qualité du circuit de l'exercice 4 (N₀ = 260 Hz ; ΔN = 21 Hz) vaut environ :",
          "options": [
            "0,43",
            "12,38",
            "3,52",
            "7,6"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Q = N₀/ΔN = 12,38 dans la solution de l'exercice 4."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l14_resonance_p06",
      "order": 6,
      "title": "Surtension à la résonance et applications",
      "summary": "UC = UL = Q·U : si Q est grand, la tension aux bornes du condensateur dépasse largement celle du générateur — utile pour la radio, dangereuse pour le composant.",
      "conceptExplanation": "À la résonance, la tension aux bornes du condensateur vaut UC = I₀/(C·ω₀) ; en la rapportant à U = R·I₀, on obtient UC = Q·U.\nIl en va de même pour la bobine : UL = Q·U ; si Q est très grand, UC >> U : il y a surtension aux bornes du condensateur.\nCette surtension peut avoir des conséquences néfastes : elle peut détériorer (claquer) le condensateur — dans l'exercice 3, UL = UC = 38 V pour une alimentation de 12 V seulement.\nLa situation d'évaluation l'observe directement : UC = 15,4 V mesurés pour un générateur de 2,0 V ; en revanche son facteur de qualité faible (Q = 0,43, avec une bobine de r = 7,5 Ω mesurée en courant continu) donne une résonance floue, de bande 344 Hz.",
      "keyRule": "Surtension : UC = UL = Q × U à la résonance — la radio l'exploite, le condensateur la redoute.",
      "formulas": [
        {
          "name": "Surtension à la résonance",
          "formula": "U_C = U_L = Q \\times U",
          "note": "U est la tension efficace du générateur ; valable à la résonance."
        }
      ],
      "workedExample": {
        "title": "L'exercice 3 : 38 V aux bornes pour 12 V d'alimentation",
        "statement": "Un circuit (R = 10 Ω, L = 0,1 H) est en résonance à 50 Hz sous U = 12 V, avec C = 101 µF. Calcule les tensions aux bornes de la bobine et du condensateur.",
        "methodSteps": [
          "Le facteur de qualité vaut Q = L·ω/R, soit environ 3,14.",
          "À la résonance, UL = UC = Q·U.",
          "La solution obtient UL = UC ≈ 38 V, plus de trois fois la tension d'alimentation."
        ],
        "conclusion": "C'est le résultat de la question 2 de l'exercice 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La relation UC = Q·U",
          "stepTheme": "La relation UC = Q·U",
          "stepBadge": "La relation UC = Q·U",
          "paragraphText": "La démonstration du §III.4 rapporte UC = I₀/(Cω₀) à U = R·I₀ : le rapport est exactement le facteur de qualité.\nLa tension du condensateur est donc la tension d'alimentation amplifiée par Q.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p06_q1",
            "type": "mcq",
            "prompt": "À la résonance d'intensité, la tension efficace aux bornes du condensateur vaut :",
            "options": [
              "UC = U toujours",
              "UC = Q·U",
              "UC = U/Q",
              "UC = 0"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le résultat du §III.4 ; la même relation vaut pour la bobine : UL = Q·U."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le risque : claquer le condensateur",
          "stepTheme": "Le risque : claquer le condensateur",
          "stepBadge": "Le risque : claquer le condensateur",
          "paragraphText": "Quand Q est très grand, UC devient très supérieure à U : c'est la surtension.\nLe résumé avertit qu'elle peut détériorer le condensateur, qui « claque » si sa tension maximale admissible est dépassée.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p06_q2",
            "type": "mcq",
            "prompt": "La surtension à la résonance peut avoir pour conséquence néfaste de :",
            "options": [
              "Diminuer la fréquence propre",
              "Augmenter la résistance",
              "Détériorer (claquer) le condensateur",
              "Arrêter le générateur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la mise en garde qui termine le §III.4 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La situation : UC = 15,4 V pour U = 2,0 V",
          "stepTheme": "La situation : UC = 15,4 V pour U = 2,0 V",
          "stepBadge": "La situation : UC = 15,4 V pour U = 2,0 V",
          "paragraphText": "Dans la situation d'évaluation, la tension mesurée aux bornes du condensateur à la résonance (148 Hz) atteint 15,4 V.\nLe générateur ne délivre pourtant que 2,0 V efficaces : la comparaison demandée conclut UC > U₀, signature de la surtension.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p06_q3",
            "type": "mcq",
            "prompt": "La comparaison des tensions dans la situation d'évaluation (UC = 15,4 V ; U₀ = 2,0 V) montre que :",
            "options": [
              "UC < U₀",
              "UC = U₀",
              "Les mesures sont impossibles",
              "UC est très supérieure à U₀ : c'est la surtension à la résonance"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la réponse à la question 3.3 de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Mesurer r en courant continu (situation, expérience 1)",
          "stepTheme": "Mesurer r en courant continu (situation, expérience 1)",
          "stepBadge": "Mesurer r en courant continu (situation, expérience 1)",
          "paragraphText": "En courant continu, la bobine se comporte comme sa seule résistance interne : U = r·I.\nAvec U = 15 V et I = 2,0 A, la première expérience de la situation donne r = 7,5 Ω.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p06_q4",
            "type": "mcq",
            "prompt": "La résistance interne de la bobine de la situation, mesurée en courant continu (15 V ; 2,0 A), vaut :",
            "options": [
              "7,5 Ω",
              "0,19 Ω",
              "400 Ω",
              "30 Ω"
            ],
            "correctAnswerIndex": 0,
            "explanation": "r = U/I = 7,5 Ω (question 1 de la situation) ; c'est aussi la méthode du montage (a) de l'exercice 4."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'exercice 5 : résonance lue sur l'oscillogramme",
          "stepTheme": "L'exercice 5 : résonance lue sur l'oscillogramme",
          "stepBadge": "L'exercice 5 : résonance lue sur l'oscillogramme",
          "paragraphText": "Dans l'exercice 5, les deux sinusoïdes visualisées sont en phase : le phénomène est la résonance d'intensité.\nL'exploitation donne N = 500 Hz, Im = 0,2 A, puis r = 10 Ω et L = 0,1 H pour C = 1 µF.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p06_q5",
            "type": "mcq",
            "prompt": "Les valeurs trouvées dans l'exercice 5 (résonance, C = 1 µF, N = 500 Hz) sont :",
            "options": [
              "r = 20 Ω et L = 1 H",
              "r = 10 Ω et L = 0,1 H",
              "r = 7,5 Ω et L = 0,19 H",
              "r = 0 Ω et L = 0,25 H"
            ],
            "correctAnswerIndex": 1,
            "explanation": "r = U2m/Im − R = 10 Ω et L = 0,1 H dans la solution de l'exercice 5 ; 7,5 Ω et 0,19 H appartiennent à la situation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les applications de la résonance",
          "stepTheme": "Les applications de la résonance",
          "stepBadge": "Les applications de la résonance",
          "paragraphText": "Le résumé cite trois domaines : en électronique, une résonance aiguë permet de ne pas entendre plusieurs fréquences à la fois — c'est la sélection d'une station de radio.\nEn acoustique, elle sert à fabriquer des instruments de musique ; en mécanique, la balançoire n'amplifie que les impulsions accordées sur ses propres oscillations.",
          "exercise": {
            "id": "terminale_c_physique_l14_resonance_p06_q6",
            "type": "mcq",
            "prompt": "En électronique, la résonance aiguë d'un circuit RLC sert notamment à :",
            "options": [
              "Produire du courant continu",
              "Chauffer les composants",
              "Sélectionner une fréquence parmi d'autres (par exemple une station de radio)",
              "Supprimer toute résistance"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'application du §IV, en écho à la visite de la RTI de la situation d'apprentissage."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l14_resonance_p06_q1",
          "type": "mcq",
          "prompt": "À la résonance d'intensité, la tension efficace aux bornes du condensateur vaut :",
          "options": [
            "UC = U toujours",
            "UC = Q·U",
            "UC = U/Q",
            "UC = 0"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le résultat du §III.4 ; la même relation vaut pour la bobine : UL = Q·U."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p06_q2",
          "type": "mcq",
          "prompt": "La surtension à la résonance peut avoir pour conséquence néfaste de :",
          "options": [
            "Diminuer la fréquence propre",
            "Augmenter la résistance",
            "Détériorer (claquer) le condensateur",
            "Arrêter le générateur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la mise en garde qui termine le §III.4 du résumé."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p06_q3",
          "type": "mcq",
          "prompt": "La comparaison des tensions dans la situation d'évaluation (UC = 15,4 V ; U₀ = 2,0 V) montre que :",
          "options": [
            "UC < U₀",
            "UC = U₀",
            "Les mesures sont impossibles",
            "UC est très supérieure à U₀ : c'est la surtension à la résonance"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la réponse à la question 3.3 de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p06_q4",
          "type": "mcq",
          "prompt": "La résistance interne de la bobine de la situation, mesurée en courant continu (15 V ; 2,0 A), vaut :",
          "options": [
            "7,5 Ω",
            "0,19 Ω",
            "400 Ω",
            "30 Ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "r = U/I = 7,5 Ω (question 1 de la situation) ; c'est aussi la méthode du montage (a) de l'exercice 4."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p06_q5",
          "type": "mcq",
          "prompt": "Les valeurs trouvées dans l'exercice 5 (résonance, C = 1 µF, N = 500 Hz) sont :",
          "options": [
            "r = 20 Ω et L = 1 H",
            "r = 10 Ω et L = 0,1 H",
            "r = 7,5 Ω et L = 0,19 H",
            "r = 0 Ω et L = 0,25 H"
          ],
          "correctAnswerIndex": 1,
          "explanation": "r = U2m/Im − R = 10 Ω et L = 0,1 H dans la solution de l'exercice 5 ; 7,5 Ω et 0,19 H appartiennent à la situation."
        },
        {
          "id": "terminale_c_physique_l14_resonance_p06_q6",
          "type": "mcq",
          "prompt": "En électronique, la résonance aiguë d'un circuit RLC sert notamment à :",
          "options": [
            "Produire du courant continu",
            "Chauffer les composants",
            "Sélectionner une fréquence parmi d'autres (par exemple une station de radio)",
            "Supprimer toute résistance"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'application du §IV, en écho à la visite de la RTI de la situation d'apprentissage."
        }
      ]
    }
  ]
};
