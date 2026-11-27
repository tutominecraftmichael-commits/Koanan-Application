import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 13 : Circuit RLC série en régime sinusoïdal forcé » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1320
export const PHYSIQUE_TLE_CD_L13_RLC: CurriculumChapter = {
  "id": "terminale_c_physique_l13_rlc",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 13,
  "title": "Leçon 13 : Circuit RLC série en régime sinusoïdal forcé",
  "summary": "Un dipôle RLC série alimenté en sinusoïdal répond à la même pulsation, avec une impédance Z = √(R² + (Lω − 1/(Cω))²) et un déphasage φ donnés par le diagramme de Fresnel.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1320",
  "points": [
    {
      "id": "terminale_c_physique_l13_rlc_p01",
      "order": 1,
      "title": "Le courant alternatif sinusoïdal et les valeurs efficaces",
      "summary": "i(t) = Im·cos(ωt + φi) ; valeurs efficaces I = Im/√2 et U = Um/√2, celles que mesurent les multimètres.",
      "conceptExplanation": "Un courant alternatif sinusoïdal est un courant dont l'intensité est une fonction sinusoïdale du temps : i(t) = Im·cos(ωt + φi), et de même u(t) = Um·cos(ωt + φu) pour la tension.\nIm et Um sont les amplitudes (valeurs maximales), ω la pulsation (ω = 2πN = 2π/T), et φ la phase à l'origine.\nL'intensité efficace I d'un courant périodique est l'intensité du courant continu qui dissiperait, par effet Joule, la même énergie dans le même conducteur ohmique pendant une période ; pour un signal sinusoïdal, I = Im/√2 et U = Um/√2.\nLes valeurs efficaces se mesurent à l'ampèremètre ou au voltmètre (multimètre), tandis que la valeur maximale se mesure à l'oscilloscope ; ainsi, la tension du secteur « 220 V » est une valeur efficace (activité : 311 V d'amplitude donnent 220 V efficaces, à 50 Hz).",
      "keyRule": "Efficace = maximale/√2 ; l'oscilloscope donne les maximales, le multimètre les efficaces.",
      "formulas": [
        {
          "name": "Valeurs efficaces",
          "formula": "I = \\frac{I_m}{\\sqrt{2}} \\quad ; \\quad U = \\frac{U_m}{\\sqrt{2}}",
          "note": "Valables pour des signaux sinusoïdaux."
        },
        {
          "name": "Pulsation",
          "formula": "\\omega = 2\\pi N = \\frac{2\\pi}{T}",
          "note": "N fréquence (Hz), T période (s)."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application : la tension du secteur",
        "statement": "Soit la tension uAB = 311·cos(314,2t − π/2) (volts, secondes). Donne sa valeur maximale, sa pulsation, sa phase à l'origine, puis sa valeur efficace, sa période et sa fréquence.",
        "methodSteps": [
          "Par identification : Um = 311 V, ω = 314,2 rad/s et φ = −π/2 rad.",
          "Valeur efficace : U = 311/√2 = 220 V.",
          "Période T = 2π/ω = 0,02 s, donc fréquence N = 50 Hz."
        ],
        "conclusion": "Ce sont les six résultats de la solution de l'activité d'application."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'expression d'un courant sinusoïdal",
          "stepTheme": "L'expression d'un courant sinusoïdal",
          "stepBadge": "L'expression d'un courant sinusoïdal",
          "paragraphText": "Un courant alternatif sinusoïdal s'écrit i(t) = Im·cos(ωt + φi).\nIm est l'amplitude (en ampères), ωt + φi la phase à l'instant t, et φi la phase à l'origine des dates.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p01_q1",
            "type": "mcq",
            "prompt": "Dans l'expression i(t) = Im·cos(ωt + φi), la grandeur Im représente :",
            "options": [
              "L'amplitude, ou valeur maximale, du courant",
              "La valeur efficace",
              "La période",
              "La phase à l'origine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §1.2 : la valeur efficace vaudrait Im/√2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La définition de la valeur efficace",
          "stepTheme": "La définition de la valeur efficace",
          "stepBadge": "La définition de la valeur efficace",
          "paragraphText": "• Valeur efficace : intensité du courant continu qui dissiperait par effet Joule la même énergie, dans le même conducteur ohmique, pendant une période.\nC'est donc une définition énergétique, pas une moyenne du courant.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p01_q2",
            "type": "mcq",
            "prompt": "L'intensité efficace d'un courant périodique est définie comme l'intensité du courant continu qui :",
            "options": [
              "A la même valeur maximale",
              "Dissiperait par effet Joule la même énergie dans le même conducteur pendant une période",
              "A la même moyenne",
              "Circule dans le même sens"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §1.3 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rapport √2 entre maximale et efficace",
          "stepTheme": "Le rapport √2 entre maximale et efficace",
          "stepBadge": "Le rapport √2 entre maximale et efficace",
          "paragraphText": "Pour un signal sinusoïdal, la valeur efficace est la valeur maximale divisée par √2.\nAinsi 311 V d'amplitude correspondent à 220 V efficaces : c'est le couple de valeurs du secteur.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p01_q3",
            "type": "mcq",
            "prompt": "Une tension sinusoïdale d'amplitude 311 V a une valeur efficace de :",
            "options": [
              "311 V",
              "622 V",
              "220 V",
              "110 V"
            ],
            "correctAnswerIndex": 2,
            "explanation": "U = Um/√2 = 220 V : c'est le calcul de l'activité d'application."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Qui mesure quoi : multimètre et oscilloscope",
          "stepTheme": "Qui mesure quoi : multimètre et oscilloscope",
          "stepBadge": "Qui mesure quoi : multimètre et oscilloscope",
          "paragraphText": "Les valeurs efficaces I et U se mesurent respectivement à l'ampèremètre et au voltmètre (ou au multimètre).\nLa valeur maximale d'une tension, elle, se mesure à l'oscilloscope, en lisant l'amplitude de la courbe.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p01_q4",
            "type": "mcq",
            "prompt": "La valeur maximale d'une tension alternative se mesure à l'aide :",
            "options": [
              "D'un ampèremètre",
              "D'un voltmètre seul",
              "D'un ohmmètre",
              "D'un oscilloscope"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la seconde remarque du §1.3 ; le multimètre donne la valeur efficace."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les caractéristiques de l'activité : 50 Hz",
          "stepTheme": "Les caractéristiques de l'activité : 50 Hz",
          "stepBadge": "Les caractéristiques de l'activité : 50 Hz",
          "paragraphText": "Pour uAB = 311·cos(314,2t − π/2), la pulsation vaut ω = 314,2 rad/s et la phase à l'origine φ = −π/2 rad.\nLa solution en déduit T = 0,02 s et N = 50 Hz : ce sont les caractéristiques du courant du secteur.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p01_q5",
            "type": "mcq",
            "prompt": "La pulsation et la fréquence de la tension uAB = 311·cos(314,2t − π/2) valent :",
            "options": [
              "ω = 314,2 rad/s et N = 50 Hz",
              "ω = 311 rad/s et N = 220 Hz",
              "ω = 50 rad/s et N = 314,2 Hz",
              "ω = 628 rad/s et N = 100 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ω se lit devant t ; N = ω/(2π) = 50 Hz (activité d'application ; l'exercice 1, avec 628 rad/s, donne 100 Hz)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "« 220 V » du secteur : une valeur efficace",
          "stepTheme": "« 220 V » du secteur : une valeur efficace",
          "stepBadge": "« 220 V » du secteur : une valeur efficace",
          "paragraphText": "L'exercice 3 classe Vrai l'affirmation : lorsqu'on dit que la tension du secteur est de 220 V, c'est d'une grandeur efficace qu'il s'agit.\nLa tension réelle oscille en fait entre −311 V et +311 V, cent fois par seconde... cinquante fois par seconde en valeur de fréquence : 50 Hz.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p01_q6",
            "type": "mcq",
            "prompt": "La tension du secteur annoncée à 220 V est une valeur :",
            "options": [
              "Maximale",
              "Efficace",
              "Moyenne",
              "Instantanée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Réponse 4 (Vrai) de l'exercice 3 : la valeur maximale correspondante est 311 V."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l13_rlc_p01_q1",
          "type": "mcq",
          "prompt": "Dans l'expression i(t) = Im·cos(ωt + φi), la grandeur Im représente :",
          "options": [
            "L'amplitude, ou valeur maximale, du courant",
            "La valeur efficace",
            "La période",
            "La phase à l'origine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §1.2 : la valeur efficace vaudrait Im/√2."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p01_q2",
          "type": "mcq",
          "prompt": "L'intensité efficace d'un courant périodique est définie comme l'intensité du courant continu qui :",
          "options": [
            "A la même valeur maximale",
            "Dissiperait par effet Joule la même énergie dans le même conducteur pendant une période",
            "A la même moyenne",
            "Circule dans le même sens"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §1.3 du résumé."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p01_q3",
          "type": "mcq",
          "prompt": "Une tension sinusoïdale d'amplitude 311 V a une valeur efficace de :",
          "options": [
            "311 V",
            "622 V",
            "220 V",
            "110 V"
          ],
          "correctAnswerIndex": 2,
          "explanation": "U = Um/√2 = 220 V : c'est le calcul de l'activité d'application."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p01_q4",
          "type": "mcq",
          "prompt": "La valeur maximale d'une tension alternative se mesure à l'aide :",
          "options": [
            "D'un ampèremètre",
            "D'un voltmètre seul",
            "D'un ohmmètre",
            "D'un oscilloscope"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la seconde remarque du §1.3 ; le multimètre donne la valeur efficace."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p01_q5",
          "type": "mcq",
          "prompt": "La pulsation et la fréquence de la tension uAB = 311·cos(314,2t − π/2) valent :",
          "options": [
            "ω = 314,2 rad/s et N = 50 Hz",
            "ω = 311 rad/s et N = 220 Hz",
            "ω = 50 rad/s et N = 314,2 Hz",
            "ω = 628 rad/s et N = 100 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ω se lit devant t ; N = ω/(2π) = 50 Hz (activité d'application ; l'exercice 1, avec 628 rad/s, donne 100 Hz)."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p01_q6",
          "type": "mcq",
          "prompt": "La tension du secteur annoncée à 220 V est une valeur :",
          "options": [
            "Maximale",
            "Efficace",
            "Moyenne",
            "Instantanée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Réponse 4 (Vrai) de l'exercice 3 : la valeur maximale correspondante est 311 V."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l13_rlc_p02",
      "order": 2,
      "title": "Impédance expérimentale et oscillations forcées",
      "summary": "U est proportionnelle à I : Z = U/I, mais Z dépend de la fréquence ; le générateur impose sa pulsation au circuit (oscillations forcées).",
      "conceptExplanation": "En relevant U et I pour différentes valeurs, on obtient pour chaque fréquence une droite U = f(I) passant par l'origine : la tension efficace est proportionnelle à l'intensité efficace.\nLe coefficient de proportionnalité est l'impédance du circuit RLC : Z = U/I, en ohms (Ω) ; mais l'expérience, menée à 100 Hz puis à 700 Hz, donne deux droites de pentes différentes : Z dépend de la fréquence.\nÀ l'oscilloscope, u(t) et i(t) sont des fonctions sinusoïdales de même période mais décalées : le circuit RLC est le siège d'oscillations forcées, car le générateur impose sa fréquence.\nLe déphasage se mesure au décalage horaire τ entre les deux courbes : |φ| = 2π·τ/T — dans l'exemple du résumé, T occupe 8 divisions et τ 2 divisions, d'où |φ| = π/2 rad.",
      "keyRule": "Z = U/I se mesure comme une pente ; Z dépend de ω — on ne la mesure pas à l'ohmmètre.",
      "formulas": [
        {
          "name": "Impédance (définition expérimentale)",
          "formula": "Z = \\frac{U}{I}",
          "note": "U et I en valeurs efficaces ; Z en ohms."
        },
        {
          "name": "Phase par le décalage horaire",
          "formula": "|\\varphi| = \\frac{2\\pi \\tau}{T}",
          "note": "τ est le décalage temporel entre u et i sur l'oscillogramme."
        }
      ],
      "workedExample": {
        "title": "Le déphasage de l'exemple : π/2 rad",
        "statement": "Sur l'oscillogramme du résumé, la période occupe 8 divisions et le décalage entre u et i en occupe 2. Détermine la valeur absolue du déphasage, sachant que i atteint son maximum en premier.",
        "methodSteps": [
          "Le rapport τ/T vaut 2 divisions sur 8, soit un quart de période.",
          "|φ| = 2π × (1/4) = π/2 rad.",
          "i est en avance sur u : la phase de u par rapport à i est donc φu/i = −π/2 rad."
        ],
        "conclusion": "C'est l'exemple traité au §2.2.3 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition expérimentale de l'impédance",
          "stepTheme": "La définition expérimentale de l'impédance",
          "stepBadge": "La définition expérimentale de l'impédance",
          "paragraphText": "• Impédance Z : coefficient de proportionnalité entre la tension efficace et l'intensité efficace d'un dipôle en régime sinusoïdal, Z = U/I.\nElle généralise la notion de résistance au courant alternatif et s'exprime en ohms.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p02_q1",
            "type": "mcq",
            "prompt": "L'impédance d'un dipôle en régime sinusoïdal est définie par :",
            "options": [
              "Z = U/I, rapport des valeurs efficaces",
              "Z = U × I",
              "Z = I/U",
              "Z = Um − Im"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §2.1.2, lue comme la pente de la droite U = f(I)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Z dépend de la pulsation",
          "stepTheme": "Z dépend de la pulsation",
          "stepBadge": "Z dépend de la pulsation",
          "paragraphText": "Les mesures à 100 Hz et à 700 Hz donnent deux droites de pentes différentes pour le même circuit.\nL'exercice 3 le confirme (Vrai) : en courant alternatif sinusoïdal, l'impédance du dipôle dépend de la pulsation du courant.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p02_q2",
            "type": "mcq",
            "prompt": "Pour un même circuit RLC, l'impédance mesurée à 100 Hz puis à 700 Hz est :",
            "options": [
              "Toujours identique",
              "Différente : Z dépend de la fréquence (de la pulsation)",
              "Nulle à 700 Hz",
              "Infinie à 100 Hz"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les deux séries de mesures du tableau du §2.1.1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "L'impédance ne se mesure pas à l'ohmmètre",
          "stepTheme": "L'impédance ne se mesure pas à l'ohmmètre",
          "stepBadge": "L'impédance ne se mesure pas à l'ohmmètre",
          "paragraphText": "L'exercice 3 classe Faux l'affirmation « l'impédance d'un circuit RLC se mesure à l'aide d'un ohmmètre ».\nUn ohmmètre travaille en courant continu, où la bobine et le condensateur n'ont pas le comportement étudié ici : Z se détermine par le rapport U/I en alternatif.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p02_q3",
            "type": "mcq",
            "prompt": "L'impédance d'un circuit RLC se détermine :",
            "options": [
              "À l'ohmmètre, en courant continu",
              "Au teslamètre",
              "Par le rapport U/I des valeurs efficaces en régime sinusoïdal",
              "En comptant les spires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Réponse 2 (Faux) de l'exercice 3 : l'ohmmètre ne convient pas."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les oscillations forcées",
          "stepTheme": "Les oscillations forcées",
          "stepBadge": "Les oscillations forcées",
          "paragraphText": "En régime établi, le courant dans le circuit RLC a la même période que la tension du générateur.\nLe résumé conclut que le circuit est le siège d'oscillations forcées : le générateur impose sa fréquence, différente en général de la fréquence propre du circuit.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p02_q4",
            "type": "mcq",
            "prompt": "On parle d'oscillations forcées pour un circuit RLC série parce que :",
            "options": [
              "Le condensateur force la charge",
              "La résistance impose sa valeur",
              "Le courant est continu",
              "Le générateur impose sa fréquence au circuit"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la conclusion du §2.2.2 : u et i ont la période du GBF."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "u et i : même période, un déphasage",
          "stepTheme": "u et i : même période, un déphasage",
          "stepBadge": "u et i : même période, un déphasage",
          "paragraphText": "À l'oscilloscope, la tension aux bornes du circuit et la tension aux bornes de R (image du courant, UR = R·i) sont deux sinusoïdes de même période.\nElles sont en général décalées l'une par rapport à l'autre : c'est le déphasage φ.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p02_q5",
            "type": "mcq",
            "prompt": "Sur l'oscillogramme d'un circuit RLC, u(t) et i(t) sont :",
            "options": [
              "Des sinusoïdes de même période mais en général déphasées",
              "Toujours rigoureusement en phase",
              "De périodes différentes",
              "Des signaux en créneaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la première conclusion du §2.2.2 du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Mesurer φ par le décalage horaire",
          "stepTheme": "Mesurer φ par le décalage horaire",
          "stepBadge": "Mesurer φ par le décalage horaire",
          "paragraphText": "La phase se déduit du décalage horaire τ entre les deux sinusoïdes : |φ| = 2π·τ/T.\nLe signe dépend de celle qui atteint son maximum en premier : si i est en avance sur u, alors φu/i est négatif.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p02_q6",
            "type": "mcq",
            "prompt": "Le déphasage entre u et i se calcule à partir du décalage horaire τ par :",
            "options": [
              "|φ| = τ × T",
              "|φ| = 2π·τ/T",
              "|φ| = τ/T seulement, sans 2π",
              "|φ| = 2π·T/τ"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation du §2.2.3 : une période complète correspond à 2π radians."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l13_rlc_p02_q1",
          "type": "mcq",
          "prompt": "L'impédance d'un dipôle en régime sinusoïdal est définie par :",
          "options": [
            "Z = U/I, rapport des valeurs efficaces",
            "Z = U × I",
            "Z = I/U",
            "Z = Um − Im"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §2.1.2, lue comme la pente de la droite U = f(I)."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p02_q2",
          "type": "mcq",
          "prompt": "Pour un même circuit RLC, l'impédance mesurée à 100 Hz puis à 700 Hz est :",
          "options": [
            "Toujours identique",
            "Différente : Z dépend de la fréquence (de la pulsation)",
            "Nulle à 700 Hz",
            "Infinie à 100 Hz"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les deux séries de mesures du tableau du §2.1.1."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p02_q3",
          "type": "mcq",
          "prompt": "L'impédance d'un circuit RLC se détermine :",
          "options": [
            "À l'ohmmètre, en courant continu",
            "Au teslamètre",
            "Par le rapport U/I des valeurs efficaces en régime sinusoïdal",
            "En comptant les spires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Réponse 2 (Faux) de l'exercice 3 : l'ohmmètre ne convient pas."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p02_q4",
          "type": "mcq",
          "prompt": "On parle d'oscillations forcées pour un circuit RLC série parce que :",
          "options": [
            "Le condensateur force la charge",
            "La résistance impose sa valeur",
            "Le courant est continu",
            "Le générateur impose sa fréquence au circuit"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la conclusion du §2.2.2 : u et i ont la période du GBF."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p02_q5",
          "type": "mcq",
          "prompt": "Sur l'oscillogramme d'un circuit RLC, u(t) et i(t) sont :",
          "options": [
            "Des sinusoïdes de même période mais en général déphasées",
            "Toujours rigoureusement en phase",
            "De périodes différentes",
            "Des signaux en créneaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la première conclusion du §2.2.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p02_q6",
          "type": "mcq",
          "prompt": "Le déphasage entre u et i se calcule à partir du décalage horaire τ par :",
          "options": [
            "|φ| = τ × T",
            "|φ| = 2π·τ/T",
            "|φ| = τ/T seulement, sans 2π",
            "|φ| = 2π·T/τ"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation du §2.2.3 : une période complète correspond à 2π radians."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l13_rlc_p03",
      "order": 3,
      "title": "Équation différentielle et construction de Fresnel",
      "summary": "u = uR + uL + uC ; à chaque tension, un vecteur de Fresnel : uR en phase avec i, uL en avance de π/2, uC en retard de π/2.",
      "conceptExplanation": "La loi des mailles donne u = uR + uL + uC, soit l'équation différentielle u(t) = R·i + L·(di/dt) + (1/C)·∫i·dt.\nÀ toute grandeur sinusoïdale x(t) = Xm·cos(ωt + φ), on associe un vecteur de Fresnel dont la norme est Xm et dont la direction est inclinée de l'angle φ par rapport à l'origine des phases, prise ici sur l'axe des intensités.\nPour i(t) = Im·cos(ωt) : la tension aux bornes de R, uR = R·I·cos(ωt), est en phase avec i ; celle de la bobine, uL = L·ω·I·cos(ωt + π/2), est en avance de π/2 sur i ; celle du condensateur, uC = (I/(C·ω))·cos(ωt − π/2), est en retard de π/2 sur i.\nLe vecteur tension totale est la somme vectorielle des trois : c'est la construction de Fresnel, qui transforme une somme de sinusoïdes en une addition de vecteurs.",
      "keyRule": "Fresnel : R en phase, L en avance de π/2, C en retard de π/2 — les vecteurs L et C sont opposés et se compensent partiellement.",
      "formulas": [
        {
          "name": "Équation du circuit RLC série",
          "formula": "u = Ri + L\\frac{di}{dt} + \\frac{1}{C} \\int i \\, dt",
          "note": "Loi des mailles : u = uR + uL + uC (§3.1)."
        },
        {
          "name": "Déphasages élémentaires",
          "formula": "u_R : 0 \\quad ; \\quad u_L : +\\frac{\\pi}{2} \\quad ; \\quad u_C : -\\frac{\\pi}{2}",
          "note": "Angles des vecteurs de Fresnel par rapport au vecteur intensité."
        }
      ],
      "workedExample": {
        "title": "Construire le diagramme de Fresnel",
        "statement": "Pour un circuit RLC série parcouru par i(t) = Im·cos(ωt), place les vecteurs de Fresnel des trois tensions élémentaires.",
        "methodSteps": [
          "On prend l'axe des intensités comme origine des phases : le vecteur de uR, de norme R·I, est porté par cet axe.",
          "Le vecteur de uL, de norme L·ω·I, est tourné de +π/2 ; celui de uC, de norme I/(C·ω), de −π/2 : ils sont sur le même axe vertical, en sens opposés.",
          "La somme des trois vecteurs donne le vecteur de la tension totale, de norme Um, incliné de φ par rapport à l'axe des intensités."
        ],
        "conclusion": "C'est la construction du §3.2.2, dont le triangle rectangle donne Z et φ au point suivant."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La loi des mailles du circuit série",
          "stepTheme": "La loi des mailles du circuit série",
          "stepBadge": "La loi des mailles du circuit série",
          "paragraphText": "Les trois dipôles sont en série : la tension du générateur se répartit entre eux à chaque instant.\nOn écrit u = uR + uL + uC, puis chaque terme en fonction du même courant i.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p03_q1",
            "type": "mcq",
            "prompt": "La loi des mailles dans un circuit RLC série s'écrit :",
            "options": [
              "u = uR + uL + uC",
              "u = uR × uL × uC",
              "u = uR − uL − uC",
              "u = (uR + uL)/uC"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le point de départ du §3.1 : les tensions des dipôles en série s'ajoutent."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le vecteur de Fresnel d'une grandeur sinusoïdale",
          "stepTheme": "Le vecteur de Fresnel d'une grandeur sinusoïdale",
          "stepBadge": "Le vecteur de Fresnel d'une grandeur sinusoïdale",
          "paragraphText": "• Vecteur de Fresnel : vecteur associé à x(t) = Xm·cos(ωt + φ), de norme Xm.\nSa direction est inclinée de l'angle φ — la phase à l'origine — par rapport à l'axe pris comme origine des phases.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p03_q2",
            "type": "mcq",
            "prompt": "Le vecteur de Fresnel associé à x(t) = Xm·cos(ωt + φ) a pour norme et pour angle :",
            "options": [
              "Xm et ω",
              "Xm (l'amplitude) et φ (la phase à l'origine)",
              "Xeff et φ",
              "φ et Xm, échangés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois caractéristiques du §3.2.1 (on peut aussi travailler en valeurs efficaces, à condition d'être cohérent)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "uR est en phase avec i",
          "stepTheme": "uR est en phase avec i",
          "stepBadge": "uR est en phase avec i",
          "paragraphText": "Pour un conducteur ohmique, uR = R·i à chaque instant : les deux grandeurs varient ensemble.\nLe vecteur de Fresnel de uR, de norme R·I, fait donc un angle de 0° avec le vecteur intensité.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p03_q3",
            "type": "mcq",
            "prompt": "Le déphasage de la tension aux bornes d'un résistor par rapport au courant est :",
            "options": [
              "+π/2 rad",
              "−π/2 rad",
              "0 : uR et i sont en phase",
              "π rad"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la première ligne du tableau de construction du §3.2.2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "uL est en avance de π/2 sur i",
          "stepTheme": "uL est en avance de π/2 sur i",
          "stepBadge": "uL est en avance de π/2 sur i",
          "paragraphText": "Pour une bobine pure, uL = L·di/dt : la dérivation avance la phase d'un quart de période.\nLe vecteur de uL, de norme L·ω·I, est donc tourné de +π/2 par rapport au vecteur intensité.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p03_q4",
            "type": "mcq",
            "prompt": "La tension aux bornes d'une bobine pure est, par rapport au courant :",
            "options": [
              "En retard de π/2",
              "En phase",
              "En opposition de phase",
              "En avance de π/2"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Deuxième ligne du §3.2.2 : uL = LωI·cos(ωt + π/2)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "uC est en retard de π/2 sur i",
          "stepTheme": "uC est en retard de π/2 sur i",
          "stepBadge": "uC est en retard de π/2 sur i",
          "paragraphText": "Pour un condensateur, uC = q/C avec i = dq/dt : la tension est l'intégrale du courant, en retard d'un quart de période.\nSon vecteur de Fresnel, de norme I/(C·ω), est tourné de −π/2 par rapport au vecteur intensité.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p03_q5",
            "type": "mcq",
            "prompt": "La tension aux bornes d'un condensateur est, par rapport au courant :",
            "options": [
              "En retard de π/2",
              "En avance de π/2",
              "En phase",
              "En avance de π"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Troisième ligne du §3.2.2 : uC = (I/(Cω))·cos(ωt − π/2)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "L'origine des phases : l'axe des intensités",
          "stepTheme": "L'origine des phases : l'axe des intensités",
          "stepBadge": "L'origine des phases : l'axe des intensités",
          "paragraphText": "La remarque du résumé fixe la convention : dans tout circuit RLC, on prend comme origine des phases l'axe des intensités.\nTous les déphasages sont alors mesurés par rapport au courant, unique dans un circuit série.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p03_q6",
            "type": "mcq",
            "prompt": "Dans la construction de Fresnel d'un circuit RLC, l'origine des phases est prise sur :",
            "options": [
              "L'axe de la tension totale",
              "L'axe des intensités",
              "Le vecteur de uL",
              "Un axe vertical quelconque"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la remarque qui suit le tableau du §3.2.2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l13_rlc_p03_q1",
          "type": "mcq",
          "prompt": "La loi des mailles dans un circuit RLC série s'écrit :",
          "options": [
            "u = uR + uL + uC",
            "u = uR × uL × uC",
            "u = uR − uL − uC",
            "u = (uR + uL)/uC"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le point de départ du §3.1 : les tensions des dipôles en série s'ajoutent."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p03_q2",
          "type": "mcq",
          "prompt": "Le vecteur de Fresnel associé à x(t) = Xm·cos(ωt + φ) a pour norme et pour angle :",
          "options": [
            "Xm et ω",
            "Xm (l'amplitude) et φ (la phase à l'origine)",
            "Xeff et φ",
            "φ et Xm, échangés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois caractéristiques du §3.2.1 (on peut aussi travailler en valeurs efficaces, à condition d'être cohérent)."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p03_q3",
          "type": "mcq",
          "prompt": "Le déphasage de la tension aux bornes d'un résistor par rapport au courant est :",
          "options": [
            "+π/2 rad",
            "−π/2 rad",
            "0 : uR et i sont en phase",
            "π rad"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la première ligne du tableau de construction du §3.2.2."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p03_q4",
          "type": "mcq",
          "prompt": "La tension aux bornes d'une bobine pure est, par rapport au courant :",
          "options": [
            "En retard de π/2",
            "En phase",
            "En opposition de phase",
            "En avance de π/2"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Deuxième ligne du §3.2.2 : uL = LωI·cos(ωt + π/2)."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p03_q5",
          "type": "mcq",
          "prompt": "La tension aux bornes d'un condensateur est, par rapport au courant :",
          "options": [
            "En retard de π/2",
            "En avance de π/2",
            "En phase",
            "En avance de π"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Troisième ligne du §3.2.2 : uC = (I/(Cω))·cos(ωt − π/2)."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p03_q6",
          "type": "mcq",
          "prompt": "Dans la construction de Fresnel d'un circuit RLC, l'origine des phases est prise sur :",
          "options": [
            "L'axe de la tension totale",
            "L'axe des intensités",
            "Le vecteur de uL",
            "Un axe vertical quelconque"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la remarque qui suit le tableau du §3.2.2."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l13_rlc_p04",
      "order": 4,
      "title": "Impédance et phase du dipôle RLC",
      "summary": "Pythagore dans le diagramme de Fresnel : Z = √(R² + (Lω − 1/(Cω))²), tan φ = (Lω − 1/(Cω))/R, cos φ = R/Z.",
      "conceptExplanation": "Dans le diagramme de Fresnel, les vecteurs de uL et uC, opposés, se réduisent à leur différence (Lω − 1/(Cω))·I, perpendiculaire au vecteur R·I.\nLe théorème de Pythagore dans ce triangle rectangle donne Um² = R²I² + (Lω − 1/(Cω))²I², d'où l'impédance Z = √(R² + (Lω − 1/(Cω))²).\nLa phase de u par rapport à i vérifie tan φ = (Lω − 1/(Cω))/R, cos φ = R/Z et sin φ = (Lω − 1/(Cω))/Z.\nSi la résistance interne r de la bobine n'est pas négligeable, R est remplacé par (R + r) ; pour les dipôles seuls (exercice 2), on retrouve Z = R pour le résistor, Z = Lω pour la bobine pure (0,63 Ω pour 2 mH à 100π rad/s) et Z = 1/(Cω) pour le condensateur (3183 Ω pour 1 µF à la même pulsation).",
      "keyRule": "Z = √(R² + X²) avec X = Lω − 1/(Cω) ; le signe de X donne le signe de φ.",
      "formulas": [
        {
          "name": "Impédance du dipôle RLC série",
          "formula": "Z = \\sqrt{R^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2}",
          "note": "Avec (R + r) si la bobine a une résistance interne r non négligeable."
        },
        {
          "name": "Phase de u par rapport à i",
          "formula": "\\tan\\varphi = \\frac{L\\omega - \\frac{1}{C\\omega}}{R} \\quad ; \\quad \\cos\\varphi = \\frac{R}{Z}",
          "note": "φ est l'angle du vecteur tension totale dans le diagramme de Fresnel."
        }
      ],
      "workedExample": {
        "title": "L'exercice 2 : les impédances des dipôles seuls",
        "statement": "Avec ω = 100π rad/s, calcule l'impédance d'un résistor de 50 Ω, d'un condensateur de 1 µF et d'une bobine pure de 2 mH.",
        "methodSteps": [
          "Résistor : Z = R = 50 Ω, indépendante de la pulsation.",
          "Condensateur : Z = 1/(C·ω) = 3183 Ω.",
          "Bobine pure : Z = L·ω = 0,63 Ω."
        ],
        "conclusion": "Ce sont les trois valeurs de la solution de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La formule de l'impédance RLC",
          "stepTheme": "La formule de l'impédance RLC",
          "stepBadge": "La formule de l'impédance RLC",
          "paragraphText": "L'impédance combine la résistance et l'écart entre les effets de la bobine et du condensateur.\nParce que ces effets sont en quadrature avec R, ils se composent par Pythagore, pas par addition directe.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p04_q1",
            "type": "mcq",
            "prompt": "L'impédance d'un dipôle RLC série vaut :",
            "options": [
              "$Z = \\sqrt{R^2 + (L\\omega - 1/(C\\omega))^2}$",
              "$Z = R + L\\omega + 1/(C\\omega)$",
              "$Z = R \\times L\\omega \\times C\\omega$",
              "$Z = (L\\omega - 1/(C\\omega))/R$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la formule du §3.3.1, issue du triangle de Fresnel."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La phase par tan φ et cos φ",
          "stepTheme": "La phase par tan φ et cos φ",
          "stepBadge": "La phase par tan φ et cos φ",
          "paragraphText": "Dans le triangle de Fresnel, le côté adjacent à φ est R·I et le côté opposé (Lω − 1/(Cω))·I.\nOn en tire tan φ = (Lω − 1/(Cω))/R et cos φ = R/Z, ce dernier rapport jouera le rôle de facteur de puissance dans la leçon suivante.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p04_q2",
            "type": "mcq",
            "prompt": "La tangente du déphasage φ de u par rapport à i vaut :",
            "options": [
              "tan φ = R/Z",
              "tan φ = (Lω − 1/(Cω))/R",
              "tan φ = R/(Lω)",
              "tan φ = Lω × Cω"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première relation du §3.3.2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La résistance interne de la bobine s'ajoute à R",
          "stepTheme": "La résistance interne de la bobine s'ajoute à R",
          "stepBadge": "La résistance interne de la bobine s'ajoute à R",
          "paragraphText": "La remarque du §3.3.1 traite le cas réaliste d'une bobine de résistance interne r non négligeable.\nL'impédance devient Z = √((R + r)² + (Lω − 1/(Cω))²) : seule la partie résistive est modifiée.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p04_q3",
            "type": "mcq",
            "prompt": "Si la bobine a une résistance interne r non négligeable, l'impédance du circuit devient :",
            "options": [
              "Z = √(R² + (Lω − 1/(Cω))²) + r",
              "Z = √((R × r)² + (Lω − 1/(Cω))²)",
              "Z = √((R + r)² + (Lω − 1/(Cω))²)",
              "Elle ne change pas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la remarque du §3.3.1 : les résistances en série s'ajoutent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'impédance d'un condensateur seul décroît avec ω",
          "stepTheme": "L'impédance d'un condensateur seul décroît avec ω",
          "stepBadge": "L'impédance d'un condensateur seul décroît avec ω",
          "paragraphText": "Pour un condensateur seul, Z = 1/(Cω) : elle vaut 3183 Ω à 100π rad/s pour 1 µF (exercice 2).\nÀ pulsation double, elle serait deux fois plus faible : le condensateur « laisse passer » d'autant mieux que la fréquence est élevée.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p04_q4",
            "type": "mcq",
            "prompt": "L'impédance d'un condensateur de capacité C à la pulsation ω est :",
            "options": [
              "Z = C·ω",
              "Z = C/ω",
              "Z = ω/C",
              "Z = 1/(C·ω)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'expression de l'exercice 2 (cas b), norme du vecteur de uC divisée par I."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'impédance d'une bobine pure croît avec ω",
          "stepTheme": "L'impédance d'une bobine pure croît avec ω",
          "stepBadge": "L'impédance d'une bobine pure croît avec ω",
          "paragraphText": "Pour une bobine pure, Z = L·ω : elle vaut seulement 0,63 Ω pour 2 mH à 100π rad/s (exercice 2).\nÀ l'inverse du condensateur, la bobine s'oppose d'autant plus que la fréquence est élevée.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p04_q5",
            "type": "mcq",
            "prompt": "L'impédance d'une bobine pure d'inductance L à la pulsation ω est :",
            "options": [
              "Z = L·ω",
              "Z = 1/(L·ω)",
              "Z = L/ω",
              "Z = L²·ω"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'expression de l'exercice 2 (cas c) : norme du vecteur de uL divisée par I."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Z n'est jamais inférieure à R",
          "stepTheme": "Z n'est jamais inférieure à R",
          "stepBadge": "Z n'est jamais inférieure à R",
          "paragraphText": "Piège : le terme sous la racine est une somme de carrés, donc Z ≥ R dans tous les cas.\nL'impédance ne peut pas être réduite par la bobine ou le condensateur en dessous de la résistance du circuit.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p04_q6",
            "type": "mcq",
            "prompt": "L'impédance d'un dipôle RLC série, comparée à sa résistance R, est :",
            "options": [
              "Toujours inférieure à R",
              "Toujours supérieure ou égale à R",
              "Toujours égale à R",
              "Parfois négative"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Z = √(R² + X²) ≥ R ; l'égalité a lieu quand X = 0, c'est-à-dire à la résonance (leçon suivante)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l13_rlc_p04_q1",
          "type": "mcq",
          "prompt": "L'impédance d'un dipôle RLC série vaut :",
          "options": [
            "$Z = \\sqrt{R^2 + (L\\omega - 1/(C\\omega))^2}$",
            "$Z = R + L\\omega + 1/(C\\omega)$",
            "$Z = R \\times L\\omega \\times C\\omega$",
            "$Z = (L\\omega - 1/(C\\omega))/R$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la formule du §3.3.1, issue du triangle de Fresnel."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p04_q2",
          "type": "mcq",
          "prompt": "La tangente du déphasage φ de u par rapport à i vaut :",
          "options": [
            "tan φ = R/Z",
            "tan φ = (Lω − 1/(Cω))/R",
            "tan φ = R/(Lω)",
            "tan φ = Lω × Cω"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première relation du §3.3.2."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p04_q3",
          "type": "mcq",
          "prompt": "Si la bobine a une résistance interne r non négligeable, l'impédance du circuit devient :",
          "options": [
            "Z = √(R² + (Lω − 1/(Cω))²) + r",
            "Z = √((R × r)² + (Lω − 1/(Cω))²)",
            "Z = √((R + r)² + (Lω − 1/(Cω))²)",
            "Elle ne change pas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la remarque du §3.3.1 : les résistances en série s'ajoutent."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p04_q4",
          "type": "mcq",
          "prompt": "L'impédance d'un condensateur de capacité C à la pulsation ω est :",
          "options": [
            "Z = C·ω",
            "Z = C/ω",
            "Z = ω/C",
            "Z = 1/(C·ω)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'expression de l'exercice 2 (cas b), norme du vecteur de uC divisée par I."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p04_q5",
          "type": "mcq",
          "prompt": "L'impédance d'une bobine pure d'inductance L à la pulsation ω est :",
          "options": [
            "Z = L·ω",
            "Z = 1/(L·ω)",
            "Z = L/ω",
            "Z = L²·ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'expression de l'exercice 2 (cas c) : norme du vecteur de uL divisée par I."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p04_q6",
          "type": "mcq",
          "prompt": "L'impédance d'un dipôle RLC série, comparée à sa résistance R, est :",
          "options": [
            "Toujours inférieure à R",
            "Toujours supérieure ou égale à R",
            "Toujours égale à R",
            "Parfois négative"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Z = √(R² + X²) ≥ R ; l'égalité a lieu quand X = 0, c'est-à-dire à la résonance (leçon suivante)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l13_rlc_p05",
      "order": 5,
      "title": "La nature du circuit selon le signe de φ",
      "summary": "φ > 0 : circuit inductif (u en avance) ; φ < 0 : capacitif (u en retard) ; φ = 0 : résonance d'intensité, circuit résistif.",
      "conceptExplanation": "Le signe de φ est celui de (Lω − 1/(Cω)) et classe le circuit en trois natures.\nSi φ > 0, c'est-à-dire Lω > 1/(Cω), u est en avance sur i : le circuit est inductif, la bobine « domine ».\nSi φ < 0, c'est-à-dire Lω < 1/(Cω), u est en retard sur i : le circuit est capacitif.\nSi φ = 0, c'est-à-dire Lω₀ = 1/(Cω₀), u et i sont en phase : on est à la résonance d'intensité et le circuit est dit résistif — cas étudié en détail dans la leçon suivante.\nDans la situation d'évaluation (R = 1000 Ω, L = 0,5 H, C = 2 µF, ω = 1000π rad/s), Lω = 1570 Ω dépasse nettement 1/(Cω) = 159 Ω : Z = 1729 Ω, I = 5,8 mA, UR = 5,8 V, UL = 9 V, UC = 0,9 V, et le diagramme de Fresnel montre un circuit inductif.",
      "keyRule": "Comparer Lω et 1/(Cω) suffit à conclure : plus grand ⇒ inductif ; plus petit ⇒ capacitif ; égaux ⇒ résonance.",
      "formulas": [
        {
          "name": "Critère de nature du circuit",
          "formula": "L\\omega > \\frac{1}{C\\omega} \\Rightarrow \\varphi > 0 \\text{ (inductif)} \\quad ; \\quad L\\omega < \\frac{1}{C\\omega} \\Rightarrow \\varphi < 0 \\text{ (capacitif)}",
          "note": "L'égalité définit la pulsation de résonance ω₀."
        }
      ],
      "workedExample": {
        "title": "La situation d'évaluation : un circuit inductif",
        "statement": "Un GBF délivre u(t) = 10√2·cos(10³πt) à un circuit série R = 1000 Ω, C = 2 µF, L = 0,5 H (bobine de résistance négligeable). Calcule Z, I, les tensions efficaces aux bornes de chaque dipôle, et conclus sur la nature du circuit.",
        "methodSteps": [
          "À ω = 1000π rad/s : Lω = 1570 Ω et 1/(Cω) = 159 Ω, d'où Z = 1729 Ω.",
          "Intensité efficace : I = U/Z = 5,8 mA, avec U = 10 V.",
          "UR = 5,8 V, UL = 9 V, UC = 0,9 V ; comme Lω > 1/(Cω), φ > 0 : le circuit est inductif."
        ],
        "conclusion": "Ce sont les résultats des questions 1, 2 et 4 de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Circuit inductif : φ > 0",
          "stepTheme": "Circuit inductif : φ > 0",
          "stepBadge": "Circuit inductif : φ > 0",
          "paragraphText": "Quand Lω dépasse 1/(Cω), le vecteur résultant des tensions réactives pointe vers le haut du diagramme.\nLa tension totale est alors en avance sur le courant : φ > 0 et le circuit est dit inductif.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p05_q1",
            "type": "mcq",
            "prompt": "Un circuit RLC série est inductif lorsque :",
            "options": [
              "Lω > 1/(Cω), u en avance sur i (φ > 0)",
              "Lω < 1/(Cω), u en retard",
              "R = 0",
              "Lω = 1/(Cω)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le premier cas du §3.3.3 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Circuit capacitif : φ < 0",
          "stepTheme": "Circuit capacitif : φ < 0",
          "stepBadge": "Circuit capacitif : φ < 0",
          "paragraphText": "Quand 1/(Cω) dépasse Lω, le vecteur résultant pointe vers le bas du diagramme de Fresnel.\nLa tension est en retard sur le courant : φ < 0 et le circuit est dit capacitif.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p05_q2",
            "type": "mcq",
            "prompt": "Un circuit RLC série est capacitif lorsque :",
            "options": [
              "φ > 0",
              "Lω < 1/(Cω), u en retard sur i (φ < 0)",
              "C = 0",
              "Lω = 1/(Cω)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le troisième cas du §3.3.3 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "φ = 0 : la résonance d'intensité",
          "stepTheme": "φ = 0 : la résonance d'intensité",
          "stepBadge": "φ = 0 : la résonance d'intensité",
          "paragraphText": "Lorsque Lω₀ = 1/(Cω₀), les effets de la bobine et du condensateur se compensent exactement : u et i sont en phase.\nLe résumé nomme ce cas la résonance d'intensité : le circuit est dit résistif, et Z se réduit à R.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p05_q3",
            "type": "mcq",
            "prompt": "À la résonance d'intensité d'un circuit RLC série :",
            "options": [
              "Le courant est nul",
              "Z est infinie",
              "u et i sont en phase (φ = 0) et Z = R",
              "Le circuit est toujours capacitif"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le deuxième cas du §3.3.3, développé dans la leçon sur la résonance."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La situation : Z = 1729 Ω et I = 5,8 mA",
          "stepTheme": "La situation : Z = 1729 Ω et I = 5,8 mA",
          "stepBadge": "La situation : Z = 1729 Ω et I = 5,8 mA",
          "paragraphText": "Avec R = 1000 Ω et un écart réactif de 1411 Ω, l'impédance de la situation dépasse largement R.\nLa solution obtient Z = 1729 Ω, puis I = U/Z = 5,8 mA pour U = 10 V.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p05_q4",
            "type": "mcq",
            "prompt": "L'impédance et l'intensité efficace dans la situation d'évaluation valent :",
            "options": [
              "Z = 1000 Ω et I = 10 mA",
              "Z = 1411 Ω et I = 7,1 mA",
              "Z = 2570 Ω et I = 3,9 mA",
              "Z = 1729 Ω et I = 5,8 mA"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Z = √(1000² + 1411²) = 1729 Ω et I = 10/1729 ≈ 5,8 mA (questions 1.1 et 1.2)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Des tensions partielles supérieures à la tension totale",
          "stepTheme": "Des tensions partielles supérieures à la tension totale",
          "stepBadge": "Des tensions partielles supérieures à la tension totale",
          "paragraphText": "Dans la situation, UL = 9 V et UC = 0,9 V : la tension aux bornes de la bobine approche la tension totale (10 V).\nPrès de la résonance, UL et UC peuvent même dépasser U : elles se compensent vectoriellement, sans violer la loi des mailles.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p05_q5",
            "type": "mcq",
            "prompt": "Dans la situation d'évaluation, les tensions efficaces aux bornes de la bobine et du condensateur valent :",
            "options": [
              "UL = 9 V et UC = 0,9 V",
              "UL = 0,9 V et UC = 9 V",
              "UL = UC = 5,8 V",
              "UL = UC = 10 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "UL = Lω·I = 9 V et UC = I/(Cω) = 0,9 V (questions 2.1 et 2.2) ; UR vaut 5,8 V."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les tensions efficaces ne s'ajoutent pas arithmétiquement",
          "stepTheme": "Les tensions efficaces ne s'ajoutent pas arithmétiquement",
          "stepBadge": "Les tensions efficaces ne s'ajoutent pas arithmétiquement",
          "paragraphText": "Piège : dans la situation, 5,8 + 9 + 0,9 ne donne pas 10 V.\nLes tensions sont déphasées : elles s'ajoutent vectoriellement (Fresnel), et U² = UR² + (UL − UC)², relation bien vérifiée par les valeurs obtenues.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p05_q6",
            "type": "mcq",
            "prompt": "Pour les tensions efficaces d'un circuit RLC série, la relation correcte est :",
            "options": [
              "U = UR + UL + UC",
              "U² = UR² + (UL − UC)²",
              "U = UR + (UL + UC)",
              "U = UL − UC seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est Pythagore dans le diagramme de Fresnel (§3.3.1) : 5,8² + (9 − 0,9)² ≈ 10²."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l13_rlc_p05_q1",
          "type": "mcq",
          "prompt": "Un circuit RLC série est inductif lorsque :",
          "options": [
            "Lω > 1/(Cω), u en avance sur i (φ > 0)",
            "Lω < 1/(Cω), u en retard",
            "R = 0",
            "Lω = 1/(Cω)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le premier cas du §3.3.3 du résumé."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p05_q2",
          "type": "mcq",
          "prompt": "Un circuit RLC série est capacitif lorsque :",
          "options": [
            "φ > 0",
            "Lω < 1/(Cω), u en retard sur i (φ < 0)",
            "C = 0",
            "Lω = 1/(Cω)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le troisième cas du §3.3.3 du résumé."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p05_q3",
          "type": "mcq",
          "prompt": "À la résonance d'intensité d'un circuit RLC série :",
          "options": [
            "Le courant est nul",
            "Z est infinie",
            "u et i sont en phase (φ = 0) et Z = R",
            "Le circuit est toujours capacitif"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le deuxième cas du §3.3.3, développé dans la leçon sur la résonance."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p05_q4",
          "type": "mcq",
          "prompt": "L'impédance et l'intensité efficace dans la situation d'évaluation valent :",
          "options": [
            "Z = 1000 Ω et I = 10 mA",
            "Z = 1411 Ω et I = 7,1 mA",
            "Z = 2570 Ω et I = 3,9 mA",
            "Z = 1729 Ω et I = 5,8 mA"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Z = √(1000² + 1411²) = 1729 Ω et I = 10/1729 ≈ 5,8 mA (questions 1.1 et 1.2)."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p05_q5",
          "type": "mcq",
          "prompt": "Dans la situation d'évaluation, les tensions efficaces aux bornes de la bobine et du condensateur valent :",
          "options": [
            "UL = 9 V et UC = 0,9 V",
            "UL = 0,9 V et UC = 9 V",
            "UL = UC = 5,8 V",
            "UL = UC = 10 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "UL = Lω·I = 9 V et UC = I/(Cω) = 0,9 V (questions 2.1 et 2.2) ; UR vaut 5,8 V."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p05_q6",
          "type": "mcq",
          "prompt": "Pour les tensions efficaces d'un circuit RLC série, la relation correcte est :",
          "options": [
            "U = UR + UL + UC",
            "U² = UR² + (UL − UC)²",
            "U = UR + (UL + UC)",
            "U = UL − UC seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est Pythagore dans le diagramme de Fresnel (§3.3.1) : 5,8² + (9 − 0,9)² ≈ 10²."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l13_rlc_p06",
      "order": 6,
      "title": "Exploiter un oscillogramme ; applications des circuits RLC",
      "summary": "De deux sinusoïdes on tire T, ω, Um, Im et φ ; les circuits RLC servent de filtres de fréquence et de transformateurs d'impédance.",
      "conceptExplanation": "L'exercice 4 montre la méthode complète : sur l'oscillogramme d'un dipôle série (R1 = 40 Ω pour lire le courant), la période occupe 10 divisions à 1 ms/div, soit T = 10 ms et ω = 628,3 rad/s.\nLes amplitudes se lisent en divisions : Um = 3 V pour la tension, U1m = 2 V pour la tension image du courant, d'où Im = 2/40 = 0,05 A.\nLe décalage d'une division donne |φ| = π/5 ; la tension atteignant son maximum avant le courant, u est en avance : φ = +π/5, et i = 0,05·cos(628,3t − π/5).\nLa même démarche, appliquée à un dipôle RC dans l'exercice 5, donne Z = 100 Ω et une capacité C = 2,73 × 10⁻⁵ F ; la documentation rappelle enfin que les circuits RLC sont utilisés comme filtres de fréquence et transformateurs d'impédance, le circuit parallèle étant le « circuit bouchon » des récepteurs.",
      "keyRule": "Oscillogramme : T en divisions × balayage, amplitudes en divisions × sensibilité, φ = 2π × décalage/période.",
      "formulas": [
        {
          "name": "Intensité maximale par la tension image",
          "formula": "I_m = \\frac{U_{1m}}{R_1}",
          "note": "La tension aux bornes d'un résistor connu donne le courant (exercice 4)."
        },
        {
          "name": "Capacité tirée de l'impédance (dipôle RC)",
          "formula": "C = \\frac{1}{\\omega \\sqrt{Z^2 - R^2}}",
          "note": "Application de l'exercice 5 : C = 2,73 × 10⁻⁵ F."
        }
      ],
      "workedExample": {
        "title": "L'exercice 4 : écrire i(t) à partir de l'oscillogramme",
        "statement": "Un dipôle série contenant R1 = 40 Ω est alimenté par u = Um·cos(ωt). L'oscillogramme (1 ms/div ; 1 V/div) montre une période de 10 div, Um = 3 div, U1m = 2 div et un décalage de 1 div, u atteignant son maximum avant i. Établis l'expression de i(t).",
        "methodSteps": [
          "T = 10 ms donne ω = 2π/T = 628,3 rad/s.",
          "Im = U1m/R1 = 2/40 = 0,05 A.",
          "Décalage d'un dixième de période : |φ| = π/5, et u est en avance, donc i = 0,05·cos(628,3t − π/5)."
        ],
        "conclusion": "C'est l'expression finale de la solution de l'exercice 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Lire la période et la pulsation",
          "stepTheme": "Lire la période et la pulsation",
          "stepBadge": "Lire la période et la pulsation",
          "paragraphText": "La période se lit en nombre de divisions multiplié par le balayage (vitesse de balayage horizontal).\nDans l'exercice 4 : 10 divisions à 1,0 ms/div donnent T = 10 ms, d'où ω = 628,3 rad/s.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p06_q1",
            "type": "mcq",
            "prompt": "Une sinusoïde occupe 10 divisions avec un balayage de 1,0 ms/div : sa période et sa pulsation valent :",
            "options": [
              "T = 10 ms et ω = 628,3 rad/s",
              "T = 10 s et ω = 0,628 rad/s",
              "T = 1 ms et ω = 6283 rad/s",
              "T = 10 ms et ω = 100 rad/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Questions 1.1 et 1.2 de l'exercice 4 : ω = 2π/T."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Lire les valeurs maximales",
          "stepTheme": "Lire les valeurs maximales",
          "stepBadge": "Lire les valeurs maximales",
          "paragraphText": "Les amplitudes se lisent en divisions verticales multipliées par la sensibilité de chaque voie.\nDans l'exercice 4 : Um = 3 div × 1 V/div = 3 V, et la tension aux bornes de R1 atteint U1m = 2 V.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p06_q2",
            "type": "mcq",
            "prompt": "Une courbe culmine à 3 divisions avec une sensibilité de 1,0 V/div : sa valeur maximale est :",
            "options": [
              "0,33 V",
              "3 V",
              "30 V",
              "1 V"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Question 2.1 de l'exercice 4 : amplitude = nombre de divisions × sensibilité verticale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le courant par la tension aux bornes d'un résistor",
          "stepTheme": "Le courant par la tension aux bornes d'un résistor",
          "stepBadge": "Le courant par la tension aux bornes d'un résistor",
          "paragraphText": "On ne visualise pas directement un courant : on utilise la tension aux bornes d'un résistor connu du circuit série.\nComme u1 = R1·i, on en déduit Im = U1m/R1 = 0,05 A dans l'exercice 4.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p06_q3",
            "type": "mcq",
            "prompt": "La tension maximale aux bornes de R1 = 40 Ω vaut 2 V : l'intensité maximale du courant série est :",
            "options": [
              "80 A",
              "0,5 A",
              "0,05 A",
              "20 A"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Im = U1m/R1 : question 2.2 de l'exercice 4."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le signe de φ : qui atteint son maximum en premier ?",
          "stepTheme": "Le signe de φ : qui atteint son maximum en premier ?",
          "stepBadge": "Le signe de φ : qui atteint son maximum en premier ?",
          "paragraphText": "Dans l'exercice 4, la sinusoïde de la tension atteint son maximum avant celle du courant : u est en avance sur i.\nLe déphasage est donc positif, φ = +π/5, et le courant s'écrit avec un retard : i = Im·cos(ωt − φ).",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p06_q4",
            "type": "mcq",
            "prompt": "Si la tension u atteint son maximum avant le courant i, alors :",
            "options": [
              "φ < 0 : u est en retard",
              "φ = 0",
              "Le circuit est capacitif",
              "φ > 0 : u est en avance sur i"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le raisonnement de la question 3 de l'exercice 4, donnant φ = +π/5."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 5 : retrouver une capacité par l'impédance",
          "stepTheme": "L'exercice 5 : retrouver une capacité par l'impédance",
          "stepBadge": "L'exercice 5 : retrouver une capacité par l'impédance",
          "paragraphText": "Pour le dipôle RC de l'exercice 5 (R = 40 Ω), les mesures donnent U = 7,1 V et I = 0,071 A, soit Z = 100 Ω.\nEn isolant le terme capacitif dans Z² = R² + (1/(Cω))², la solution obtient C = 2,73 × 10⁻⁵ F.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p06_q5",
            "type": "mcq",
            "prompt": "La capacité du condensateur déterminée dans l'exercice 5 vaut environ :",
            "options": [
              "2,73 × 10⁻⁵ F",
              "5,0 µF",
              "2,73 × 10⁻³ F",
              "100 µF"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le résultat de la question 4 de l'exercice 5 ; 5,0 µF est la capacité de l'exercice 4, déjà connue."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les circuits RLC comme filtres (documentation)",
          "stepTheme": "Les circuits RLC comme filtres (documentation)",
          "stepBadge": "Les circuits RLC comme filtres (documentation)",
          "paragraphText": "La documentation indique que les circuits RLC sont généralement utilisés pour réaliser des filtres de fréquence ou des transformateurs d'impédance.\nLe circuit RLC parallèle, appelé « circuit bouchon », réduit à zéro certaines fréquences indésirables, par exemple pour éliminer les parasites dans un récepteur.",
          "exercise": {
            "id": "terminale_c_physique_l13_rlc_p06_q6",
            "type": "mcq",
            "prompt": "D'après la documentation, le circuit RLC parallèle est appelé « circuit bouchon » car il :",
            "options": [
              "Amplifie toutes les fréquences",
              "Réduit à zéro certaines fréquences souvent indésirables",
              "Bloque le courant continu uniquement",
              "Transforme le courant en chaleur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'application citée dans la documentation (Wikipédia, circuit RLC)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l13_rlc_p06_q1",
          "type": "mcq",
          "prompt": "Une sinusoïde occupe 10 divisions avec un balayage de 1,0 ms/div : sa période et sa pulsation valent :",
          "options": [
            "T = 10 ms et ω = 628,3 rad/s",
            "T = 10 s et ω = 0,628 rad/s",
            "T = 1 ms et ω = 6283 rad/s",
            "T = 10 ms et ω = 100 rad/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Questions 1.1 et 1.2 de l'exercice 4 : ω = 2π/T."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p06_q2",
          "type": "mcq",
          "prompt": "Une courbe culmine à 3 divisions avec une sensibilité de 1,0 V/div : sa valeur maximale est :",
          "options": [
            "0,33 V",
            "3 V",
            "30 V",
            "1 V"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Question 2.1 de l'exercice 4 : amplitude = nombre de divisions × sensibilité verticale."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p06_q3",
          "type": "mcq",
          "prompt": "La tension maximale aux bornes de R1 = 40 Ω vaut 2 V : l'intensité maximale du courant série est :",
          "options": [
            "80 A",
            "0,5 A",
            "0,05 A",
            "20 A"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Im = U1m/R1 : question 2.2 de l'exercice 4."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p06_q4",
          "type": "mcq",
          "prompt": "Si la tension u atteint son maximum avant le courant i, alors :",
          "options": [
            "φ < 0 : u est en retard",
            "φ = 0",
            "Le circuit est capacitif",
            "φ > 0 : u est en avance sur i"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le raisonnement de la question 3 de l'exercice 4, donnant φ = +π/5."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p06_q5",
          "type": "mcq",
          "prompt": "La capacité du condensateur déterminée dans l'exercice 5 vaut environ :",
          "options": [
            "2,73 × 10⁻⁵ F",
            "5,0 µF",
            "2,73 × 10⁻³ F",
            "100 µF"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le résultat de la question 4 de l'exercice 5 ; 5,0 µF est la capacité de l'exercice 4, déjà connue."
        },
        {
          "id": "terminale_c_physique_l13_rlc_p06_q6",
          "type": "mcq",
          "prompt": "D'après la documentation, le circuit RLC parallèle est appelé « circuit bouchon » car il :",
          "options": [
            "Amplifie toutes les fréquences",
            "Réduit à zéro certaines fréquences souvent indésirables",
            "Bloque le courant continu uniquement",
            "Transforme le courant en chaleur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'application citée dans la documentation (Wikipédia, circuit RLC)."
        }
      ]
    }
  ]
};
