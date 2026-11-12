import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : Terminales C, D, E — Thème : Électricité — Titre : Circuit RLC série en régime sinusoïdal forcé
export const PHYSIQUE_TLE_CD_L10_CIRCUIT_RLC_FORCE: CurriculumChapter = {
  "id": "terminale_d_physique_l10_circuit_rlc_force",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ],
  "order": 10,
  "title": "Leçon 10 : Circuit RLC série en régime sinusoïdal forcé",
  "summary": "Étude complète et approfondie du dipôle RLC série soumis à une excitation sinusoïdale forcée : grandeurs sinusoïdales instantanées et efficaces (I = Im/√2, U = Um/√2), mesure oscilloscopique du déphasage temporel φu/i par le décalage horaire τ, équation différentielle issue de la loi des mailles, méthode graphique du diagramme de Fresnel, calcul analytique de l'impédance Z = √[(R+r)² + (Lω - 1/Cω)²], formules de la phase tan φ, cos φ, sin φ, et caractérisation du comportement physique (inductif, capacitif ou résistif).",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : Terminales C, D, E – Thème : Électricité – Circuit RLC série en régime sinusoïdal forcé)",
  "points": [
    {
      "id": "terminale_d_physique_l10_p01",
      "order": 1,
      "title": "Grandeurs sinusoïdales alternatives et valeurs efficaces",
      "summary": "Définition mathématique du courant et de la tension alternatifs sinusoïdaux, pulsation ω = 2πN = 2π/T, phase instantanée et phase à l'origine, définition énergétique de l'intensité efficace par équivalence thermique Joule, et appareils de mesure.",
      "conceptExplanation": "1. Définition d'un courant alternatif sinusoïdal :\nUn courant alternatif sinusoïdal est un courant périodique dont l'intensité instantanée i(t) est une fonction sinusoïdale du temps. On peut l'exprimer sous la forme :\ni(t) = I_m \\cos(\\omega t + \\varphi_i),\noù :\n- Im est l'amplitude (ou valeur maximale) de l'intensité en ampères (A) ;\n- ω est la pulsation en radians par seconde (rad·s⁻¹) ;\n- ω = 2πN = 2π/T, avec N la fréquence en Hertz (Hz) et T la période en secondes (s) ;\n- (ωt + φi) est la phase à l'instant t, et φi est la phase à l'origine des temps (t = 0), exprimée en radians (rad).\n\nDe même, la tension alternative sinusoïdale aux bornes d'un dipôle s'écrit :\nu(t) = U_m \\cos(\\omega t + \\varphi_u).\n\n2. Valeurs efficaces : définition physique et thermique :\nL'intensité efficace I (ou Ieff) d'un courant périodique i(t) est égale à l'intensité d'un courant continu qui dégagerait, par effet Joule, la même quantité d'énergie thermique dans le même résistor pendant une période T.\nPour un signal purement sinusoïdal, le calcul intégral de la valeur quadratique moyenne donne la relation fondamentale :\nI = \\frac{I_m}{\\sqrt{2}} \\approx 0,707\\,I_m \\quad \\text{et} \\quad U = \\frac{U_m}{\\sqrt{2}} \\approx 0,707\\,U_m.\n\n3. Appareils de mesure en alternatif :\n- Les voltmètres et ampèremètres numériques en position AC (ou analogiques ferromagnétiques) mesurent directement les valeurs efficaces U et I ;\n- L'oscilloscope permet de mesurer les valeurs maximales (crêtes) Um et Im (via la tension aux bornes d'un résistor) ainsi que la période T grâce à la sensibilité horizontale.",
      "keyRule": "Pour tout signal sinusoïdal : I = Im / √2 et U = Um / √2. Les multimètres mesurent les valeurs efficaces ; l'oscilloscope mesure les amplitudes maximales Um et la période T.",
      "formulas": [
        {
          "name": "Loi temporelle du courant et de la tension",
          "formula": "i(t) = I_m\\cos(\\omega t + \\varphi_i) \\quad ; \\quad u(t) = U_m\\cos(\\omega t + \\varphi_u)",
          "note": "Im et Um > 0, ω = 2πN = 2π/T"
        },
        {
          "name": "Valeurs efficaces sinusoïdales",
          "formula": "I = \\frac{I_m}{\\sqrt{2}} \\quad ; \\quad U = \\frac{U_m}{\\sqrt{2}}",
          "note": "Équivalence thermique Joule"
        }
      ],
      "workedExample": {
        "title": "Caractérisation complète d'une tension sinusoïdale",
        "statement": "La tension délivrée par le réseau domestique ivoirien a pour équation instantanée : u(t) = 311 \\cos(314,2 t - \\pi/3) (avec u en Volts et t en secondes).\\n1. Précise la valeur maximale Um, la pulsation ω et la phase à l'origine φu.\\n2. Calcule la valeur efficace U, la période T et la fréquence N de cette tension.\\n3. Si cette tension alimente un résistor R = 50 Ω, calcule l'intensité efficace I et l'amplitude maximale Im du courant.",
        "methodSteps": [
          "Étape 1 : Identifier les paramètres par lecture directe : Um = 311 V, ω = 314,2 rad·s⁻¹, φu = -π/3 rad.",
          "Étape 2 : Calculer la valeur efficace, la période et la fréquence :\\nU = Um / √2 = 311 / 1,414 ≈ 220 V.\\nT = 2π / ω = 2 × 3,1416 / 314,2 ≈ 0,020 s = 20 ms.\\nN = 1 / T = 1 / 0,020 = 50 Hz.",
          "Étape 3 : Calculer l'intensité dans le résistor pur :\\nI = U / R = 220 V / 50 Ω = 4,4 A.\\nIm = I × √2 = 4,4 × 1,414 ≈ 6,22 A (ou directement Im = Um / R = 311 / 50 = 6,22 A)."
        ],
        "conclusion": "La tension nominale du secteur dite '220 V - 50 Hz' atteint en réalité une tension crête de 311 V avec une période de 20 ms."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison des paramètres crêtes et efficaces d'un signal sinusoïdal",
        "tableData": {
          "headers": [
            "Grandeur",
            "Symbole",
            "Expression mathématique",
            "Instrument de mesure",
            "Rôle physique"
          ],
          "rows": [
            [
              "Amplitude maximale",
              "Um ou Im",
              "Valeur crête par rapport à 0",
              "Oscilloscope (déviation verticale)",
              "Plafond de contrainte diélectrique"
            ],
            [
              "Valeur efficace",
              "U ou I",
              "Um / √2 ou Im / √2",
              "Multimètre AC (RMS)",
              "Échauffement thermique équivalent Joule"
            ],
            [
              "Période",
              "T",
              "T = 2π / ω = 1 / N",
              "Oscilloscope (balayage horizontal)",
              "Durée d'un cycle complet en secondes"
            ],
            [
              "Fréquence",
              "N ou f",
              "N = 1 / T = ω / (2π)",
              "Fréquencemètre",
              "Nombre d'oscillations par seconde (Hz)"
            ],
            [
              "Pulsation",
              "ω",
              "ω = 2π N",
              "Calcul théorique",
              "Vitesse angulaire du vecteur tournant (rad·s⁻¹)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du courant sinusoïdal alternatif",
          "stepTheme": "Signal sinusoïdal",
          "stepBadge": "i(t) = Im cos(ωt + φ)",
          "paragraphText": "Un courant alternatif sinusoïdal change périodiquement de sens et son intensité instantanée varie selon une fonction cosinus ou sinus. Il est entièrement caractérisé par son amplitude Im, sa pulsation ω et sa phase à l'origine φ.",
          "exercise": {
            "id": "terminale_d_physique_l10_p01_q1",
            "type": "mcq",
            "prompt": "Un courant a pour expression i(t) = 0,80 cos(628 t + π/4) (en A). Quelle est la fréquence N de ce courant ?",
            "options": [
              "N = 100 Hz",
              "N = 628 Hz",
              "N = 50 Hz",
              "N = 314 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ω = 2π N = 628 rad·s⁻¹ => N = 628 / (2π) ≈ 628 / 6,2832 = 100 Hz."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Relation fondamentale valeur efficace - amplitude",
          "stepTheme": "Valeur efficace",
          "stepBadge": "I = Im / √2",
          "paragraphText": "La valeur efficace est la racine carrée de la moyenne temporelle du carré du signal sur une période. Pour une sinusoïde pure, l'intégration de cos²(ωt) donne un facteur 1/2, d'où I = Im / √2 ≈ 0,707 Im.",
          "exercise": {
            "id": "terminale_d_physique_l10_p01_q2",
            "type": "mcq",
            "prompt": "Un ampèremètre thermique branché dans un circuit RLC indique une intensité efficace I = 5,0 A. Quelle est l'amplitude maximale Im atteinte par le courant ?",
            "options": [
              "Im ≈ 7,07 A",
              "Im = 2,5 A",
              "Im = 5,0 A",
              "Im = 10,0 A"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Im = I × √2 = 5,0 × 1,4142 ≈ 7,07 A."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Signification physique de la valeur efficace",
          "stepTheme": "Équivalence thermique Joule",
          "stepBadge": "W = R I² T",
          "paragraphText": "L'intensité efficace est l'intensité d'un courant continu imaginaire qui produirait exactement le même échauffement par effet Joule dans une résistance donnée pendant le même intervalle de temps T : W = R Ieff² T = ∫₀ᵀ R i²(t) dt.",
          "exercise": {
            "id": "terminale_d_physique_l10_p01_q3",
            "type": "mcq",
            "prompt": "Sur quel principe physique repose rigoureusement la définition de la valeur efficace d'un courant alternatif ?",
            "options": [
              "L'égalité de l'énergie thermique dissipée par effet Joule avec un courant continu équivalent",
              "La vitesse moyenne des électrons dans le vide",
              "L'attraction électrostatique maximale entre les armatures d'un condensateur",
              "La quantité de lumière émise par un arc électrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La valeur efficace est définie par l'énergie thermique dissipée par effet Joule pendant une période complète : W = R Ieff² T."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Mesure de la période et calcul de la pulsation à l'oscilloscope",
          "stepTheme": "Exploitation oscilloscope",
          "stepBadge": "T = Balayage × div",
          "paragraphText": "Sur l'écran d'un oscilloscope, une période T correspond à un nombre de divisions horizontales n_div. En multipliant par le coefficient de balayage b (en s/div), on obtient T = n_div × b, puis la pulsation ω = 2π/T.",
          "exercise": {
            "id": "terminale_d_physique_l10_p01_q4",
            "type": "mcq",
            "prompt": "Sur un oscilloscope réglé à 2,5 ms/div, un motif complet sinusoïdal occupe 8 divisions horizontales. Quelle est la pulsation ω correspondante ?",
            "options": [
              "ω = 314 rad·s⁻¹",
              "ω = 100 rad·s⁻¹",
              "ω = 628 rad·s⁻¹",
              "ω = 50 rad·s⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "T = 8 div × 2,5 ms/div = 20 ms = 0,020 s. ω = 2π / T = 2π / 0,020 ≈ 314,16 rad·s⁻¹."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le piège de la tension crête-à-crête",
          "stepTheme": "Vocabulaire d'amplitude",
          "stepBadge": "Upp = 2 Um ≠ Um",
          "paragraphText": "Ne pas confondre la tension crête (amplitude maximale Um mesurée par rapport à zéro) et la tension crête-à-crête Upp mesurée entre le sommet positif et le creux négatif : Upp = 2 Um. Diviser Upp par √2 pour trouver U est une erreur grave : U = Upp / (2√2).",
          "exercise": {
            "id": "terminale_d_physique_l10_p01_q5",
            "type": "mcq",
            "prompt": "L'excursion crête-à-crête d'une tension sinusoïdale visualisée sur un oscilloscope est Upp = 28,28 V. Que vaut sa tension efficace U ?",
            "options": [
              "U = 10 V",
              "U = 20 V",
              "U = 14,14 V",
              "U = 7,07 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Um = Upp / 2 = 28,28 / 2 = 14,14 V. U = Um / √2 = 14,14 / 1,414 ≈ 10 V."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Lecture d'un multimètre numérique en mode AC",
          "stepTheme": "Usage du multimètre",
          "stepBadge": "Affichage RMS",
          "paragraphText": "Lorsqu'un technicien branche un voltmètre numérique réglé sur le calibre 'ACV' aux bornes d'un dipôle, l'appareil convertit automatiquement la tension pour afficher directement la valeur efficace (True RMS pour les appareils de qualité professionnelle).",
          "exercise": {
            "id": "terminale_d_physique_l10_p01_q6",
            "type": "mcq",
            "prompt": "Un élève lit '12,0 V' sur un voltmètre numérique commuté en alternatif. Que représente précisément cette valeur ?",
            "options": [
              "La valeur efficace U de la tension alternative",
              "La tension maximale crête Um",
              "La tension moyenne continue",
              "L'impédance globale du circuit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En position alternative (AC), les voltmètres sont calibrés pour afficher directement la valeur efficace."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Additivité des tensions instantanées vs non-additivité des tensions efficaces",
          "stepTheme": "Loi des mailles",
          "stepBadge": "u(t) = u1 + u2 MAIS U ≠ U1 + U2",
          "paragraphText": "À chaque instant t, la loi des mailles s'applique rigoureusement aux tensions instantanées : u(t) = u1(t) + u2(t). En revanche, en raison des déphasages, les valeurs efficaces ne s'additionnent JAMAIS algébriquement : en général, U ≠ U1 + U2.",
          "exercise": {
            "id": "terminale_d_physique_l10_p01_q7",
            "type": "mcq",
            "prompt": "Dans un circuit série, deux dipôles ont pour tensions efficaces respectives U1 = 6 V et U2 = 8 V. La tension efficace totale U aux bornes de l'ensemble peut-elle être égale à 10 V ?",
            "options": [
              "Oui, si les deux tensions sont en quadrature de phase (déphasage de 90°), car U² = U1² + U2² = 36 + 64 = 100",
              "Non, car la loi d'Ohm impose que la tension totale soit obligatoirement 14 V",
              "Non, car l'énergie ne serait pas conservée",
              "Oui, uniquement si la fréquence est nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les tensions sinusoïdales s'additionnent vectoriellement (Fresnel). Si elles sont à 90°, U = √(6² + 8²) = 10 V."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l10_p01_q1",
          "type": "mcq",
          "prompt": "Un courant a pour expression i(t) = 0,80 cos(628 t + π/4) (en A). Quelle est la fréquence N de ce courant ?",
          "options": [
            "N = 100 Hz",
            "N = 628 Hz",
            "N = 50 Hz",
            "N = 314 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ω = 2π N = 628 rad·s⁻¹ => N = 628 / (2π) ≈ 628 / 6,2832 = 100 Hz."
        },
        {
          "id": "terminale_d_physique_l10_p01_q2",
          "type": "mcq",
          "prompt": "Un ampèremètre thermique branché dans un circuit RLC indique une intensité efficace I = 5,0 A. Quelle est l'amplitude maximale Im atteinte par le courant ?",
          "options": [
            "Im ≈ 7,07 A",
            "Im = 2,5 A",
            "Im = 5,0 A",
            "Im = 10,0 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Im = I × √2 = 5,0 × 1,4142 ≈ 7,07 A."
        },
        {
          "id": "terminale_d_physique_l10_p01_q3",
          "type": "mcq",
          "prompt": "Sur quel principe physique repose rigoureusement la définition de la valeur efficace d'un courant alternatif ?",
          "options": [
            "L'égalité de l'énergie thermique dissipée par effet Joule avec un courant continu équivalent",
            "La vitesse moyenne des électrons dans le vide",
            "L'attraction électrostatique maximale entre les armatures d'un condensateur",
            "La quantité de lumière émise par un arc électrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La valeur efficace est définie par l'énergie thermique dissipée par effet Joule pendant une période complète : W = R Ieff² T."
        },
        {
          "id": "terminale_d_physique_l10_p01_q4",
          "type": "mcq",
          "prompt": "Sur un oscilloscope réglé à 2,5 ms/div, un motif complet sinusoïdal occupe 8 divisions horizontales. Quelle est la pulsation ω correspondante ?",
          "options": [
            "ω = 314 rad·s⁻¹",
            "ω = 100 rad·s⁻¹",
            "ω = 628 rad·s⁻¹",
            "ω = 50 rad·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "T = 8 div × 2,5 ms/div = 20 ms = 0,020 s. ω = 2π / T = 2π / 0,020 ≈ 314,16 rad·s⁻¹."
        },
        {
          "id": "terminale_d_physique_l10_p01_q5",
          "type": "mcq",
          "prompt": "L'excursion crête-à-crête d'une tension sinusoïdale visualisée sur un oscilloscope est Upp = 28,28 V. Que vaut sa tension efficace U ?",
          "options": [
            "U = 10 V",
            "U = 20 V",
            "U = 14,14 V",
            "U = 7,07 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Um = Upp / 2 = 28,28 / 2 = 14,14 V. U = Um / √2 = 14,14 / 1,414 ≈ 10 V."
        },
        {
          "id": "terminale_d_physique_l10_p01_q6",
          "type": "mcq",
          "prompt": "Un élève lit '12,0 V' sur un voltmètre numérique commuté en alternatif. Que représente précisément cette valeur ?",
          "options": [
            "La valeur efficace U de la tension alternative",
            "La tension maximale crête Um",
            "La tension moyenne continue",
            "L'impédance globale du circuit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En position alternative (AC), les voltmètres sont calibrés pour afficher directement la valeur efficace."
        },
        {
          "id": "terminale_d_physique_l10_p01_q7",
          "type": "mcq",
          "prompt": "Dans un circuit série, deux dipôles ont pour tensions efficaces respectives U1 = 6 V et U2 = 8 V. La tension efficace totale U aux bornes de l'ensemble peut-elle être égale à 10 V ?",
          "options": [
            "Oui, si les deux tensions sont en quadrature de phase (déphasage de 90°), car U² = U1² + U2² = 36 + 64 = 100",
            "Non, car la loi d'Ohm impose que la tension totale soit obligatoirement 14 V",
            "Non, car l'énergie ne serait pas conservée",
            "Oui, uniquement si la fréquence est nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les tensions sinusoïdales s'additionnent vectoriellement (Fresnel). Si elles sont à 90°, U = √(6² + 8²) = 10 V."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l10_p02",
      "order": 2,
      "title": "Visualisation à l'oscilloscope et mesure du déphasage φ",
      "summary": "Montage bicourbe pour visualiser simultanément la tension globale u(t) et le courant i(t) via la tension aux bornes d'un résistor uR(t) = R i(t), notion de régime forcé, mesure du décalage horaire τ et détermination de la valeur et du signe du déphasage φu/i.",
      "conceptExplanation": "1. Montage de visualisation bicourbe :\nPour visualiser à la fois la tension aux bornes du circuit RLC u(t) et l'intensité du courant i(t), on utilise une propriété fondamentale du conducteur ohmique :\nu_R(t) = R · i(t).\nLa tension uR(t) est rigoureusement proportionnelle à i(t) et en phase avec lui. Elle constitue donc l'image oscilloscopique exacte du courant.\n- On branche la masse de l'oscilloscope entre le conducteur ohmique R et le reste du circuit ;\n- La voie Y_A mesure la tension globale u(t) délivrée par le générateur ;\n- La voie Y_B mesure la tension uR(t), permettant de visualiser la forme et la phase de i(t).\n\n2. Le régime d'oscillations forcées :\nLe générateur basse fréquence (GBF) joue le rôle d'excitateur : il impose sa pulsation ω et sa fréquence N au dipôle RLC (le résonateur). Le courant i(t) oscille donc obligatoirement à la même fréquence N que la tension excitatrice, mais présente un décalage temporel appelé déphasage.\n\n3. Détermination du déphasage φ = φu/i :\nLe déphasage de la tension u par rapport au courant i est noté φ = φu/i = φu - φi.\nEn choisissant l'axe des intensités comme origine des phases (φi = 0), on écrit :\ni(t) = I_m \\cos(\\omega t) \\quad \\text{et} \\quad u(t) = U_m \\cos(\\omega t + \\varphi).\nSur l'oscillogramme, on mesure le décalage temporel τ (décalage horaire) séparant deux passages consécutifs par zéro dans le même sens (ou deux sommets successifs) des courbes u(t) et i(t) :\n|\\varphi| = \\frac{2\\pi\\,\\tau}{T} = \\frac{\\tau}{T} \\times 360^\\circ \\quad \\text{ou en divisions :} \\quad |\\varphi| = \\frac{\\tau_\\text{div}}{T_\\text{div}} \\times 2\\pi.\n\n4. Détermination du signe de φ :\n- Si la courbe de tension u(t) atteint son sommet avant celle de i(t) : la tension est en avance sur le courant, donc φ > 0 ;\n- Si la courbe de courant i(t) atteint son sommet avant celle de u(t) : la tension est en retard sur le courant (le courant est en avance), donc φ < 0 ;\n- Si les deux courbes atteignent leurs sommets et passent par zéro exactement au même instant : u et i sont en phase, donc φ = 0.",
      "keyRule": "L'oscilloscope visualise i(t) grâce à la tension uR(t) = R i(t). Le déphasage vaut |φ| = 2π τ / T. La courbe qui atteint son maximum en premier est en avance sur l'autre.",
      "formulas": [
        {
          "name": "Calcul du déphasage par le décalage horaire",
          "formula": "|\\varphi_{u/i}| = \\frac{2\\pi\\,\\tau}{T} = 2\\pi\\,N\\,\\tau = \\omega\\,\\tau",
          "note": "τ = décalage temporel entre u et i, T = période"
        },
        {
          "name": "Lien entre tension d'un résistor et courant",
          "formula": "u_R(t) = R\\,i(t)",
          "note": "uR est en phase avec i (φ = 0)"
        }
      ],
      "workedExample": {
        "title": "Mesure oscilloscopique du déphasage dans un dipôle RLC",
        "statement": "Sur l'écran d'un oscilloscope bicourbe, la sensibilité horizontale est réglée sur 1,0 ms/div. La voie A affiche u(t) et la voie B affiche uR(t) = R i(t). On observe que la période occupe T = 10 divisions et que le sommet de u(t) devance celui de uR(t) de 2,0 divisions.\\n1. Calcule la période T et la fréquence N du générateur.\\n2. Calcule le décalage horaire τ en millisecondes.\\n3. Calcule la valeur absolue du déphasage |φ| en radians, puis donne sa valeur algébrique φ.",
        "methodSteps": [
          "Étape 1 : Calculer T et N : T = 10 div × 1,0 ms/div = 10 ms = 0,010 s. N = 1 / 0,010 = 100 Hz.",
          "Étape 2 : Calculer le décalage temporel τ : τ = 2,0 div × 1,0 ms/div = 2,0 ms = 0,0020 s.",
          "Étape 3 : Calculer le déphasage :\\n|φ| = (2π × τ) / T = (2π × 2,0 ms) / (10 ms) = 4π / 10 = 2π / 5 rad ≈ 1,26 rad (soit 72°).\\nPuisque u(t) devance uR(t) (u atteint son maximum avant i), la tension est en avance sur le courant : φ = +2π/5 rad = +1,26 rad."
        ],
        "conclusion": "Le dipôle présente un déphasage positif φ = +1,26 rad (+72°) : la tension est en avance sur le courant, le circuit présente un caractère inductif."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Méthode de détermination de la phase à l'oscilloscope",
        "tableData": {
          "headers": [
            "Situation observée à l'écran",
            "Décalage horaire τ",
            "Signe de φu/i",
            "Avance / Retard relatif",
            "Comportement du dipôle"
          ],
          "rows": [
            [
              "u(t) atteint son pic avant i(t)",
              "τ > 0 mesuré entre sommets",
              "φ > 0 (positif)",
              "Tension u en avance sur courant i",
              "Circuit à dominante inductive"
            ],
            [
              "i(t) atteint son pic avant u(t)",
              "τ > 0 mesuré entre sommets",
              "φ < 0 (négatif)",
              "Tension u en retard sur courant i",
              "Circuit à dominante capacitive"
            ],
            [
              "u(t) et i(t) coïncident parfaitement",
              "τ = 0 div",
              "φ = 0 rad",
              "Tension et courant en phase",
              "Circuit purement résistif (résonance)"
            ],
            [
              "Signaux en opposition parfaite",
              "τ = T / 2",
              "φ = ±π rad (±180°)",
              "Opposition de phase complète",
              "Non réalisable en RLC série passif"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Comment visualiser le courant à l'oscilloscope",
          "stepTheme": "Montage de mesure",
          "stepBadge": "uR = R i",
          "paragraphText": "Un oscilloscope mesure exclusivement des différences de potentiel (tensions) et non des courants. Pour visualiser le courant i(t), on insère un conducteur ohmique pur de résistance R et on mesure la tension à ses bornes uR = R · i, qui reproduit exactement l'onde de courant à l'échelle R près.",
          "exercise": {
            "id": "terminale_d_physique_l10_p02_q1",
            "type": "mcq",
            "prompt": "Pourquoi visualise-t-on la tension aux bornes d'un conducteur ohmique R pour étudier le courant alternatif i(t) à l'oscilloscope ?",
            "options": [
              "Parce que uR(t) = R i(t) est strictement proportionnelle à i(t) et rigoureusement en phase avec lui",
              "Parce que le résistor transforme le courant alternatif en courant continu",
              "Parce que l'oscilloscope ne peut pas fonctionner sans résistance d'au moins 1000 Ω",
              "Parce que le conducteur ohmique amplifie la tension du GBF"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après la loi d'Ohm uR(t) = R i(t), la tension aux bornes de R est en phase avec i et a la même forme d'onde."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Formule du déphasage par le décalage horaire",
          "stepTheme": "Calcul de φ",
          "stepBadge": "|φ| = 2π τ / T",
          "paragraphText": "Le décalage horaire τ est le temps séparant deux états identiques consécutifs des signaux u et i (par exemple deux passages par zéro dans le sens croissant). Le déphasage s'en déduit par une règle de trois sur la période T (qui correspond à 2π radians) : |φ| = 2π τ / T.",
          "exercise": {
            "id": "terminale_d_physique_l10_p02_q2",
            "type": "mcq",
            "prompt": "Pour un signal de période T = 8 divisions, le décalage entre la tension et le courant est τ = 1 division. Quelle est la valeur de |φ| ?",
            "options": [
              "|φ| = π/4 rad (45°)",
              "|φ| = π/2 rad (90°)",
              "|φ| = π/8 rad",
              "|φ| = 2π rad"
            ],
            "correctAnswerIndex": 0,
            "explanation": "|φ| = 2π (τ / T) = 2π × (1 / 8) = π/4 rad = 45°."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Règle d'avance et signe du déphasage",
          "stepTheme": "Signe de φ",
          "stepBadge": "Premier sommet = en avance",
          "paragraphText": "Sur un oscilloscope balayant de gauche à droite, l'axe horizontal représente le temps croissant. La courbe qui présente son maximum le plus à gauche (au temps t le plus faible) est en avance chronologique sur l'autre.",
          "exercise": {
            "id": "terminale_d_physique_l10_p02_q3",
            "type": "mcq",
            "prompt": "Sur l'oscillogramme, la sinusoïde de u(t) atteint son maximum avant celle de i(t). Quel est le signe du déphasage φ = φu - φi ?",
            "options": [
              "φ > 0 (la tension est en avance sur le courant)",
              "φ < 0 (la tension est en retard)",
              "φ = 0 (les deux grandeurs sont en phase)",
              "Le signe ne peut pas être déterminé sans connaître l'inductance L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Si u atteint son maximum en premier, φu > φi, donc φ = φu - φi > 0."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le piège de la masse commune de l'oscilloscope",
          "stepTheme": "Connexion matérielle",
          "stepBadge": "Masse unique",
          "paragraphText": "Les voies Y_A et Y_B d'un oscilloscope classique ont leurs blindages reliés à une masse commune interne. Si l'on ne place pas la masse de l'oscilloscope au point commun entre le circuit RLC et le conducteur ohmique, on court-circuite involontairement une partie du montage !",
          "exercise": {
            "id": "terminale_d_physique_l10_p02_q4",
            "type": "mcq",
            "prompt": "Où doit impérativement être branchée la masse de l'oscilloscope lors de la visualisation simultanée de u(t) et de uR(t) ?",
            "options": [
              "Au point commun reliant le résistor R au reste du circuit RLC",
              "À la borne positive du générateur GBF",
              "Entre les deux armatures du condensateur",
              "Peu importe, les deux voies de l'oscilloscope sont totalement isolées"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La masse commune doit être placée au nœud entre le résistor et les autres composants pour éviter de court-circuiter des éléments."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Inversion de voie (bouton Invert)",
          "stepTheme": "Fonction Invert",
          "stepBadge": "Touche CH2 Invert",
          "paragraphText": "Si le schéma oblige à brancher le résistor de telle sorte que la flèche de tension uR pointe vers la masse, l'oscilloscope mesurerait -uR(t) = -R i(t). Pour rétablir le signal direct de i(t), il faut actionner la commande 'INVERT' de la voie correspondante.",
          "exercise": {
            "id": "terminale_d_physique_l10_p02_q5",
            "type": "mcq",
            "prompt": "Dans un montage où la sonde de la voie YB mesure -uR(t), quelle fonction de l'oscilloscope permet de rétablir la sinusoïde réelle de i(t) ?",
            "options": [
              "La touche d'inversion de polarité 'INVERT' de la voie YB",
              "Le bouton de réglage du zéro de la voie YA",
              "L'augmentation du balayage temporel",
              "Le passage en couplage AC"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fonction INVERT multiplie le signal affiché par -1, transformant -uR en +uR = R i."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Intervalle physique de variation de la phase φ",
          "stepTheme": "Bornes de la phase",
          "stepBadge": "-π/2 < φ < +π/2",
          "paragraphText": "Pour un dipôle passif linéaire RLC série comportant une résistance non nulle, le déphasage φ de la tension par rapport au courant reste strictement compris entre -π/2 (-90°) et +π/2 (+90°). Il ne peut jamais dépasser un angle droit.",
          "exercise": {
            "id": "terminale_d_physique_l10_p02_q6",
            "type": "mcq",
            "prompt": "Dans quel intervalle angulaire se situe obligatoirement le déphasage φ d'un dipôle RLC série comportant une résistance non nulle R > 0 ?",
            "options": [
              "-π/2 < φ < +π/2 (entre -90° et +90°)",
              "0 < φ < π (entre 0° et 180°)",
              "-π < φ < +π",
              "φ est obligatoirement supérieur à +90°"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Puisque cos φ = R/Z > 0 (résistance positive), la phase est confinée dans ]-π/2 ; +π/2[."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "Cas de quadrature de phase",
          "stepTheme": "Quadrature",
          "stepBadge": "|φ| = π/2",
          "paragraphText": "On dit que deux grandeurs sont en quadrature de phase lorsque leur décalage est exactement d'un quart de période : τ = T/4, soit |φ| = 2π(T/4)/T = π/2 rad (90°). C'est le cas entre la tension et le courant dans une inductance pure (+π/2) ou un condensateur pur (-π/2).",
          "exercise": {
            "id": "terminale_d_physique_l10_p02_q7",
            "type": "mcq",
            "prompt": "Quel est le déphasage entre la tension aux bornes d'un condensateur pur et le courant qui le traverse ?",
            "options": [
              "φuC/i = -π/2 rad (la tension est en retard de 90° sur le courant)",
              "φuC/i = +π/2 rad (la tension est en avance de 90°)",
              "φuC/i = 0 rad (en phase)",
              "φuC/i = π rad (en opposition)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans un condensateur pur, i(t) = C (duC/dt). La tension est en retard de phase de π/2 par rapport à l'intensité."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l10_p02_q1",
          "type": "mcq",
          "prompt": "Pourquoi visualise-t-on la tension aux bornes d'un conducteur ohmique R pour étudier le courant alternatif i(t) à l'oscilloscope ?",
          "options": [
            "Parce que uR(t) = R i(t) est strictement proportionnelle à i(t) et rigoureusement en phase avec lui",
            "Parce que le résistor transforme le courant alternatif en courant continu",
            "Parce que l'oscilloscope ne peut pas fonctionner sans résistance d'au moins 1000 Ω",
            "Parce que le conducteur ohmique amplifie la tension du GBF"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la loi d'Ohm uR(t) = R i(t), la tension aux bornes de R est en phase avec i et a la même forme d'onde."
        },
        {
          "id": "terminale_d_physique_l10_p02_q2",
          "type": "mcq",
          "prompt": "Pour un signal de période T = 8 divisions, le décalage entre la tension et le courant est τ = 1 division. Quelle est la valeur de |φ| ?",
          "options": [
            "|φ| = π/4 rad (45°)",
            "|φ| = π/2 rad (90°)",
            "|φ| = π/8 rad",
            "|φ| = 2π rad"
          ],
          "correctAnswerIndex": 0,
          "explanation": "|φ| = 2π (τ / T) = 2π × (1 / 8) = π/4 rad = 45°."
        },
        {
          "id": "terminale_d_physique_l10_p02_q3",
          "type": "mcq",
          "prompt": "Sur l'oscillogramme, la sinusoïde de u(t) atteint son maximum avant celle de i(t). Quel est le signe du déphasage φ = φu - φi ?",
          "options": [
            "φ > 0 (la tension est en avance sur le courant)",
            "φ < 0 (la tension est en retard)",
            "φ = 0 (les deux grandeurs sont en phase)",
            "Le signe ne peut pas être déterminé sans connaître l'inductance L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si u atteint son maximum en premier, φu > φi, donc φ = φu - φi > 0."
        },
        {
          "id": "terminale_d_physique_l10_p02_q4",
          "type": "mcq",
          "prompt": "Où doit impérativement être branchée la masse de l'oscilloscope lors de la visualisation simultanée de u(t) et de uR(t) ?",
          "options": [
            "Au point commun reliant le résistor R au reste du circuit RLC",
            "À la borne positive du générateur GBF",
            "Entre les deux armatures du condensateur",
            "Peu importe, les deux voies de l'oscilloscope sont totalement isolées"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La masse commune doit être placée au nœud entre le résistor et les autres composants pour éviter de court-circuiter des éléments."
        },
        {
          "id": "terminale_d_physique_l10_p02_q5",
          "type": "mcq",
          "prompt": "Dans un montage où la sonde de la voie YB mesure -uR(t), quelle fonction de l'oscilloscope permet de rétablir la sinusoïde réelle de i(t) ?",
          "options": [
            "La touche d'inversion de polarité 'INVERT' de la voie YB",
            "Le bouton de réglage du zéro de la voie YA",
            "L'augmentation du balayage temporel",
            "Le passage en couplage AC"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fonction INVERT multiplie le signal affiché par -1, transformant -uR en +uR = R i."
        },
        {
          "id": "terminale_d_physique_l10_p02_q6",
          "type": "mcq",
          "prompt": "Dans quel intervalle angulaire se situe obligatoirement le déphasage φ d'un dipôle RLC série comportant une résistance non nulle R > 0 ?",
          "options": [
            "-π/2 < φ < +π/2 (entre -90° et +90°)",
            "0 < φ < π (entre 0° et 180°)",
            "-π < φ < +π",
            "φ est obligatoirement supérieur à +90°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque cos φ = R/Z > 0 (résistance positive), la phase est confinée dans ]-π/2 ; +π/2[."
        },
        {
          "id": "terminale_d_physique_l10_p02_q7",
          "type": "mcq",
          "prompt": "Quel est le déphasage entre la tension aux bornes d'un condensateur pur et le courant qui le traverse ?",
          "options": [
            "φuC/i = -π/2 rad (la tension est en retard de 90° sur le courant)",
            "φuC/i = +π/2 rad (la tension est en avance de 90°)",
            "φuC/i = 0 rad (en phase)",
            "φuC/i = π rad (en opposition)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans un condensateur pur, i(t) = C (duC/dt). La tension est en retard de phase de π/2 par rapport à l'intensité."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l10_p03",
      "order": 3,
      "title": "Loi des mailles et équation différentielle du circuit RLC forcé",
      "summary": "Établissement de l'équation différentielle instantanée du circuit RLC série, loi d'Ohm pour chaque dipôle élémentaire, décomposition en trois termes (ohmique, inductif, capacitif) et choix de l'origine des phases.",
      "conceptExplanation": "1. Schéma du circuit RLC série et conventions d'orientation :\nOn monte en série sur un générateur de tension alternative u(t) = Um cos(ωt + φ) :\n- Un conducteur ohmique de résistance R ;\n- Une bobine d'inductance L et de résistance interne r ;\n- Un condensateur de capacité C.\nOn choisit un sens positif de circulation du courant et on flèche les tensions en convention récepteur pour chaque composant passif.\n\n2. Application de la loi des mailles instantanée :\nÀ chaque instant t, la tension totale u(t) délivrée par le générateur est égale à la somme algébrique des tensions partielles aux bornes des trois composants :\nu(t) = u_R(t) + u_L(t) + u_C(t).\nEn explicitant chaque tension en fonction de l'intensité i(t) et de la charge q(t) du condensateur :\n- uR(t) = R · i(t) ;\n- uL(t) = r · i(t) + L \\,\\frac{\\mathrm{d}i}{\\mathrm{d}t} ;\n- uC(t) = \\frac{q(t)}{C} \\implies \\frac{\\mathrm{d}u_C}{\\mathrm{d}t} = \\frac{i(t)}{C} \\iff u_C(t) = \\frac{1}{C}\\int i(t)\\,\\mathrm{d}t.\n\nEn regroupant la résistance totale du circuit R_tot = R + r, on obtient l'équation différentielle fondamentale du circuit RLC série en régime sinusoïdal forcé :\nu(t) = (R + r)\\,i(t) + L\\,\\frac{\\mathrm{d}i(t)}{\\mathrm{d}t} + \\frac{1}{C}\\int i(t)\\,\\mathrm{d}t.\n\nEn dérivant par rapport au temps, cette équation peut également s'écrire sous forme différentielle du second ordre en i(t) :\nL\\,\\frac{\\mathrm{d}^2i}{\\mathrm{d}t^2} + (R + r)\\,\\frac{\\mathrm{d}i}{\\mathrm{d}t} + \\frac{1}{C}\\,i(t) = \\frac{\\mathrm{d}u(t)}{\\mathrm{d}t}.\n\n3. Choix stratégique de l'origine des phases :\nPour résoudre cette équation en régime permanent sans manipuler d'intégrales lourdes, on choisit l'axe des intensités comme référence des phases :\ni(t) = I_m \\cos(\\omega t) \\quad (\\text{soit } \\varphi_i = 0).\nLes termes de l'équation des tensions deviennent alors :\n- Terme ohmique : u_{R,\\text{tot}}(t) = (R+r) I_m \\cos(\\omega t) ;\n- Terme inductif : u_{L,\\text{pur}}(t) = L \\,\\frac{\\mathrm{d}i}{\\mathrm{d}t} = - L\\omega I_m \\sin(\\omega t) = L\\omega I_m \\cos(\\omega t + \\pi/2) ;\n- Terme capacitif : u_C(t) = \\frac{1}{C}\\int I_m \\cos(\\omega t)\\,\\mathrm{d}t = \\frac{I_m}{C\\omega} \\sin(\\omega t) = \\frac{I_m}{C\\omega} \\cos(\\omega t - \\pi/2).\n\nLa tension u(t) = Um cos(ωt + φ) est donc la somme de trois fonctions sinusoïdales de même pulsation ω mais déphasées de 0, +π/2 et -π/2.",
      "keyRule": "Loi des mailles : u(t) = (R+r) i + L (di/dt) + q/C. En posant i = Im cos(ωt), le terme résistif est en phase, le terme inductif est en avance de π/2, et le terme capacitif est en retard de π/2.",
      "formulas": [
        {
          "name": "Équation différentielle du circuit RLC forcé",
          "formula": "u(t) = (R+r)\\,i(t) + L\\,\\frac{\\mathrm{d}i}{\\mathrm{d}t} + \\frac{1}{C}\\int i\\,\\mathrm{d}t",
          "note": "Loi des mailles instantanée"
        },
        {
          "name": "Décomposition des composantes de tension",
          "formula": "u(t) = R_\\text{tot} I_m \\cos(\\omega t) + L\\omega I_m \\cos(\\omega t + \\frac{\\pi}{2}) + \\frac{I_m}{C\\omega} \\cos(\\omega t - \\frac{\\pi}{2})",
          "note": "Avec référence φi = 0"
        }
      ],
      "workedExample": {
        "title": "Établissement des composantes de tension pour un dipôle RLC",
        "statement": "Un circuit RLC série est parcouru par un courant d'intensité instantanée i(t) = 0,20 cos(1000 t) (en A). Il comporte une résistance totale Rtot = 40 Ω, une bobine pure d'inductance L = 0,10 H et un condensateur de capacité C = 50 µF.\\n1. Calcule la tension aux bornes de la résistance uR(t).\\n2. Calcule la composante inductive uL(t).\\n3. Calcule la composante capacitive uC(t).\\n4. En déduis l'amplitude de chaque composante.",
        "methodSteps": [
          "Étape 1 : Calculer uR(t) : uR(t) = Rtot * i(t) = 40 * 0,20 cos(1000 t) = 8,0 cos(1000 t) V. Amplitude URm = 8,0 V.",
          "Étape 2 : Calculer uL(t) :\\nLω = 0,10 H × 1000 rad·s⁻¹ = 100 Ω.\\nuL(t) = Lω Im cos(1000 t + π/2) = 100 × 0,20 cos(1000 t + π/2) = 20 cos(1000 t + π/2) V. Amplitude ULm = 20 V.",
          "Étape 3 : Calculer uC(t) :\\n1 / (Cω) = 1 / (50 × 10⁻⁶ F × 1000 rad·s⁻¹) = 1 / (0,050) = 20 Ω.\\nuC(t) = [Im / (Cω)] cos(1000 t - π/2) = 20 × 0,20 cos(1000 t - π/2) = 4,0 cos(1000 t - π/2) V. Amplitude UCm = 4,0 V."
        ],
        "conclusion": "Les trois composantes de tension ont pour amplitudes respectives 8,0 V, 20 V et 4,0 V. La composante inductive devance de π/2 tandis que la composante capacitive accuse un retard de π/2 par rapport au courant."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tensions élémentaires et déphasages associés dans le circuit RLC série",
        "tableData": {
          "headers": [
            "Dipôle élémentaire",
            "Relation tension-courant",
            "Amplitude crête",
            "Phase par rapport à i(t)",
            "Effet géométrique sur Fresnel"
          ],
          "rows": [
            [
              "Résistance Rtot = R + r",
              "uR = Rtot · i",
              "URm = Rtot · Im",
              "φ = 0 rad (en phase)",
              "Vecteur horizontal colinéaire à l'axe des intensités"
            ],
            [
              "Inductance pure L",
              "uL = L · (di/dt)",
              "ULm = Lω · Im",
              "φ = +π/2 rad (+90°)",
              "Vecteur vertical orienté vers le haut (+90°)"
            ],
            [
              "Condensateur C",
              "uC = q / C",
              "UCm = Im / (Cω)",
              "φ = -π/2 rad (-90°)",
              "Vecteur vertical orienté vers le bas (-90°)"
            ],
            [
              "Tension globale u(t)",
              "u = uR + uL + uC",
              "Um = Z · Im",
              "φ = φu/i",
              "Vecteur résultant oblique d'angle φ"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Loi des mailles instantanée dans la boucle RLC",
          "stepTheme": "Loi des mailles",
          "stepBadge": "u = uR + uL + uC",
          "paragraphText": "Dans un circuit série en boucle fermée, la loi des mailles s'applique rigoureusement aux valeurs instantanées des potentiels : la tension u(t) délivrée par le générateur excitateur est la somme des tensions partielles uR(t) + uL(t) + uC(t) à chaque microseconde.",
          "exercise": {
            "id": "terminale_d_physique_l10_p03_q1",
            "type": "mcq",
            "prompt": "Dans un circuit RLC série, à un instant donné t1, on mesure uR(t1) = +4 V, uL(t1) = +9 V et uC(t1) = -3 V. Que vaut la tension instantanée u(t1) délivrée par le générateur ?",
            "options": [
              "u(t1) = +10 V",
              "u(t1) = +16 V",
              "u(t1) = +7 V",
              "u(t1) = +12 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La loi des mailles instantanée est une somme algébrique : u = uR + uL + uC = 4 + 9 + (-3) = 10 V."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Expression de l'impédance d'un condensateur pur",
          "stepTheme": "Réactance capacitive",
          "stepBadge": "ZC = 1 / (Cω)",
          "paragraphText": "En régime sinusoïdal de pulsation ω, le rapport de l'amplitude de tension à l'amplitude de courant pour un condensateur idéal définit son impédance (ou réactance capacitive) : ZC = 1 / (Cω) (en Ohms Ω). Elle diminue lorsque la fréquence augmente.",
          "exercise": {
            "id": "terminale_d_physique_l10_p03_q2",
            "type": "mcq",
            "prompt": "Quelle est l'impédance d'un condensateur de capacité C = 10 µF alimenté à une fréquence N = 50 Hz (ω ≈ 314 rad·s⁻¹) ?",
            "options": [
              "ZC ≈ 318 Ω",
              "ZC = 3,14 Ω",
              "ZC = 500 Ω",
              "ZC = 0,00318 Ω"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ZC = 1 / (Cω) = 1 / (10 × 10⁻⁶ × 314,16) = 1 / (3,1416 × 10⁻³) ≈ 318,3 Ω."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Expression de l'impédance d'une inductance pure",
          "stepTheme": "Réactance inductive",
          "stepBadge": "ZL = Lω",
          "paragraphText": "L'amplitude de tension aux bornes d'une inductance pure vaut ULm = Lω Im. Son impédance propre (ou réactance inductive) est ZL = Lω (en Ohms Ω). Elle croît proportionnellement à la fréquence.",
          "exercise": {
            "id": "terminale_d_physique_l10_p03_q3",
            "type": "mcq",
            "prompt": "Quelle est l'impédance d'une bobine d'inductance L = 0,20 H sans résistance à la fréquence N = 500 Hz ?",
            "options": [
              "ZL ≈ 628 Ω",
              "ZL = 100 Ω",
              "ZL = 314 Ω",
              "ZL = 1000 Ω"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ZL = Lω = L × 2π N = 0,20 × 2π × 500 = 200π ≈ 628,3 Ω."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Passage aux dérivées et intégrales de cosinus",
          "stepTheme": "Dérivation harmonique",
          "stepBadge": "cos(ωt + π/2) = -sin(ωt)",
          "paragraphText": "La dérivée de cos(ωt) donne -ω sin(ωt) = ω cos(ωt + π/2), traduisant une avance de phase de π/2. La primitive de cos(ωt) donne (1/ω) sin(ωt) = (1/ω) cos(ωt - π/2), traduisant un retard de phase de π/2.",
          "exercise": {
            "id": "terminale_d_physique_l10_p03_q4",
            "type": "mcq",
            "prompt": "Quelle fonction trigonométrique en cosinus est exactement égale à la dérivée temporelle de i(t) = Im cos(ωt) ?",
            "options": [
              "di/dt = ω Im cos(ωt + π/2)",
              "di/dt = ω Im cos(ωt - π/2)",
              "di/dt = - ω Im cos(ωt)",
              "di/dt = (Im / ω) cos(ωt + π/2)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "di/dt = -ω Im sin(ωt). Or -sin(θ) = cos(θ + π/2), donc di/dt = ω Im cos(ωt + π/2)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Résistance propre r de la bobine réelle",
          "stepTheme": "Résistance totale",
          "stepBadge": "Rtot = R + r",
          "paragraphText": "Dans un circuit RLC réel, la bobine n'est presque jamais pure : elle possède une résistance interne r de bobinage. Le terme ohmique global est donc (R + r) et non simplement R. Oublier r fausse l'impédance et la phase.",
          "exercise": {
            "id": "terminale_d_physique_l10_p03_q5",
            "type": "mcq",
            "prompt": "Une bobine réelle a une inductance L = 0,5 H et une résistance r = 12 Ω. Elle est associée à un résistor de R = 38 Ω. Quelle est la résistance totale ohmique à utiliser dans l'équation différentielle ?",
            "options": [
              "Rtot = 38 + 12 = 50 Ω",
              "Rtot = 38 Ω",
              "Rtot = 12 Ω",
              "Rtot = √(38² + 12²)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les résistances en série s'additionnent simplement : Rtot = R + r = 38 + 12 = 50 Ω."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Opposition géométrique des tensions de L et C",
          "stepTheme": "Opposition de phase",
          "stepBadge": "UL et UC en sens inverses",
          "paragraphText": "Comme uL est déphasée de +π/2 et uC de -π/2 par rapport à i(t), les tensions aux bornes de la bobine pure et du condensateur sont en opposition de phase complète (déphasage de π = 180° entre elles). Leurs effets s'opposent et se soustraient directement !",
          "exercise": {
            "id": "terminale_d_physique_l10_p03_q6",
            "type": "mcq",
            "prompt": "Quel est le déphasage relatif entre la tension d'une inductance pure uL(t) et celle d'un condensateur uC(t) traversés par le même courant ?",
            "options": [
              "Δφ = π rad = 180° (opposition de phase)",
              "Δφ = 0 rad (en phase)",
              "Δφ = π/2 rad = 90°",
              "Δφ = π/4 rad"
            ],
            "correctAnswerIndex": 0,
            "explanation": "φuL = +π/2 et φuC = -π/2, donc φuL - φuC = +π/2 - (-π/2) = π radians (180°)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Compensation mutuelle de L et C",
          "stepTheme": "Réactance globale",
          "stepBadge": "X = Lω - 1/(Cω)",
          "paragraphText": "La quantité X = Lω - 1/(Cω) est appelée la réactance du dipôle RLC. Si Lω = 1/(Cω), les effets inductifs et capacitifs s'annulent mutuellement à chaque instant : uL(t) + uC(t) = 0, et la tension du générateur est égale à la seule chute ohmique u(t) = (R+r) i(t).",
          "exercise": {
            "id": "terminale_d_physique_l10_p03_q7",
            "type": "mcq",
            "prompt": "Que vaut la somme des tensions instantanées uL(t) + uC(t) d'une bobine pure et d'un condensateur lorsque la pulsation vérifie Lω = 1/(Cω) ?",
            "options": [
              "uL(t) + uC(t) = 0 V à tout instant",
              "uL(t) + uC(t) = 2 Um",
              "uL(t) + uC(t) = R i(t)",
              "La somme est infinie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme les amplitudes sont égales (Lω Im = Im / Cω) et les phases en opposition de 180°, leurs valeurs s'annulent exactement à chaque instant."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l10_p03_q1",
          "type": "mcq",
          "prompt": "Dans un circuit RLC série, à un instant donné t1, on mesure uR(t1) = +4 V, uL(t1) = +9 V et uC(t1) = -3 V. Que vaut la tension instantanée u(t1) délivrée par le générateur ?",
          "options": [
            "u(t1) = +10 V",
            "u(t1) = +16 V",
            "u(t1) = +7 V",
            "u(t1) = +12 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La loi des mailles instantanée est une somme algébrique : u = uR + uL + uC = 4 + 9 + (-3) = 10 V."
        },
        {
          "id": "terminale_d_physique_l10_p03_q2",
          "type": "mcq",
          "prompt": "Quelle est l'impédance d'un condensateur de capacité C = 10 µF alimenté à une fréquence N = 50 Hz (ω ≈ 314 rad·s⁻¹) ?",
          "options": [
            "ZC ≈ 318 Ω",
            "ZC = 3,14 Ω",
            "ZC = 500 Ω",
            "ZC = 0,00318 Ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ZC = 1 / (Cω) = 1 / (10 × 10⁻⁶ × 314,16) = 1 / (3,1416 × 10⁻³) ≈ 318,3 Ω."
        },
        {
          "id": "terminale_d_physique_l10_p03_q3",
          "type": "mcq",
          "prompt": "Quelle est l'impédance d'une bobine d'inductance L = 0,20 H sans résistance à la fréquence N = 500 Hz ?",
          "options": [
            "ZL ≈ 628 Ω",
            "ZL = 100 Ω",
            "ZL = 314 Ω",
            "ZL = 1000 Ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ZL = Lω = L × 2π N = 0,20 × 2π × 500 = 200π ≈ 628,3 Ω."
        },
        {
          "id": "terminale_d_physique_l10_p03_q4",
          "type": "mcq",
          "prompt": "Quelle fonction trigonométrique en cosinus est exactement égale à la dérivée temporelle de i(t) = Im cos(ωt) ?",
          "options": [
            "di/dt = ω Im cos(ωt + π/2)",
            "di/dt = ω Im cos(ωt - π/2)",
            "di/dt = - ω Im cos(ωt)",
            "di/dt = (Im / ω) cos(ωt + π/2)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "di/dt = -ω Im sin(ωt). Or -sin(θ) = cos(θ + π/2), donc di/dt = ω Im cos(ωt + π/2)."
        },
        {
          "id": "terminale_d_physique_l10_p03_q5",
          "type": "mcq",
          "prompt": "Une bobine réelle a une inductance L = 0,5 H et une résistance r = 12 Ω. Elle est associée à un résistor de R = 38 Ω. Quelle est la résistance totale ohmique à utiliser dans l'équation différentielle ?",
          "options": [
            "Rtot = 38 + 12 = 50 Ω",
            "Rtot = 38 Ω",
            "Rtot = 12 Ω",
            "Rtot = √(38² + 12²)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les résistances en série s'additionnent simplement : Rtot = R + r = 38 + 12 = 50 Ω."
        },
        {
          "id": "terminale_d_physique_l10_p03_q6",
          "type": "mcq",
          "prompt": "Quel est le déphasage relatif entre la tension d'une inductance pure uL(t) et celle d'un condensateur uC(t) traversés par le même courant ?",
          "options": [
            "Δφ = π rad = 180° (opposition de phase)",
            "Δφ = 0 rad (en phase)",
            "Δφ = π/2 rad = 90°",
            "Δφ = π/4 rad"
          ],
          "correctAnswerIndex": 0,
          "explanation": "φuL = +π/2 et φuC = -π/2, donc φuL - φuC = +π/2 - (-π/2) = π radians (180°)."
        },
        {
          "id": "terminale_d_physique_l10_p03_q7",
          "type": "mcq",
          "prompt": "Que vaut la somme des tensions instantanées uL(t) + uC(t) d'une bobine pure et d'un condensateur lorsque la pulsation vérifie Lω = 1/(Cω) ?",
          "options": [
            "uL(t) + uC(t) = 0 V à tout instant",
            "uL(t) + uC(t) = 2 Um",
            "uL(t) + uC(t) = R i(t)",
            "La somme est infinie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme les amplitudes sont égales (Lω Im = Im / Cω) et les phases en opposition de 180°, leurs valeurs s'annulent exactement à chaque instant."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l10_p04",
      "order": 4,
      "title": "La construction vectorielle de Fresnel",
      "summary": "Principe de la méthode de Fresnel associant un vecteur à toute grandeur sinusoïdale, règles de construction à t = 0 avec l'axe des intensités comme référence, tracé de la somme vectorielle et résolution géométrique.",
      "conceptExplanation": "1. Le vecteur de Fresnel :\nÀ toute grandeur sinusoïdale x(t) = Xm cos(ωt + φ), la méthode de Fresnel associe dans un plan muni d'un repère polaire un vecteur tournant $\\vec{X}$ dont les caractéristiques à la date t = 0 sont :\n- Sa norme est égale à l'amplitude maximale Xm (ou à la valeur efficace X) : ||\\vec{X}|| = Xm ;\n- Sa direction et son sens font un angle géométrique orienté égal à la phase à l'origine φ par rapport à l'axe de référence horizontal (origine des phases).\n\n2. Intérêt de la méthode :\nEn physique, l'addition de fonctions sinusoïdales de même pulsation ω est une opération algébrique ardue. Grâce à Fresnel, cette opération se transforme en une simple addition géométrique de vecteurs :\nx(t) = x1(t) + x2(t) \\iff \\vec{X} = \\vec{X}_1 + \\vec{X}_2.\n\n3. Construction de Fresnel pour le circuit RLC série :\nOn choisit l'axe horizontal orienté vers la droite comme origine des phases (axe de l'intensité i, car le courant est commun à tous les dipôles en série) :\n- Vecteur $\\vec{V}_R$ représentant uR(t) : porté par l'axe horizontal, de norme VRm = (R + r) Im (angle 0) ;\n- Vecteur $\\vec{V}_L$ représentant uL(t) : perpendiculaire à l'axe, orienté vers le haut (+π/2), de norme VLm = Lω Im ;\n- Vecteur $\\vec{V}_C$ représentant uC(t) : perpendiculaire à l'axe, orienté vers le bas (-π/2), de norme VCm = Im / (Cω) ;\n- Vecteur résultant $\\vec{V}$ représentant la tension u(t) : somme vectorielle $\\vec{V} = \\vec{V}_R + \\vec{V}_L + \\vec{V}_C$.\nSa norme vaut Um (tension maximale du générateur) et son angle avec l'horizontale est le déphasage φ = φu/i.",
      "keyRule": "Fresnel transforme la loi des mailles en addition vectorielle : V = VR + VL + VC. L'axe horizontal porte VR = (R+r)I, le vecteur vertical montant porte VL = LωI, et le vecteur vertical descendant porte VC = I/(Cω).",
      "formulas": [
        {
          "name": "Somme vectorielle de Fresnel",
          "formula": "\\vec{V} = \\vec{V}_R + \\vec{V}_L + \\vec{V}_C",
          "note": "Norme ||V|| = Um, angle avec l'axe = φ"
        },
        {
          "name": "Normes des vecteurs de Fresnel (en valeurs efficaces)",
          "formula": "V_R = (R+r)\\,I \\quad ; \\quad V_L = L\\omega\\,I \\quad ; \\quad V_C = \\frac{I}{C\\omega}",
          "note": "Triangle rectangle de Fresnel"
        }
      ],
      "workedExample": {
        "title": "Construction du diagramme de Fresnel pour un circuit inductif",
        "statement": "Dans un circuit RLC série alimenté par un courant efficace I = 0,20 A, on a mesuré les tensions efficaces partielles :\\n- Aux bornes de la résistance totale : VR = 12 V ;\\n- Aux bornes de la bobine pure : VL = 25 V ;\\n- Aux bornes du condensateur : VC = 9 V.\\n1. Représente les trois vecteurs élémentaires sur le diagramme de Fresnel.\\n2. Calcule la composante réactive verticale (VL - VC).\\n3. Calcule la tension efficace totale U du générateur et le déphasage φ.",
        "methodSteps": [
          "Étape 1 : Tracer le vecteur horizontal VR de longueur proportionnelle à 12 V.\\nTracer le vecteur vertical montant VL de 25 V et le vecteur vertical descendant VC de 9 V.",
          "Étape 2 : La composante verticale totale est la différence : V_vert = VL - VC = 25 - 9 = 16 V (vers le haut car VL > VC).",
          "Étape 3 : Le triangle formé par VR, (VL - VC) et U est rectangle. D'après le théorème de Pythagore :\\nU² = VR² + (VL - VC)² = 12² + 16² = 144 + 256 = 400 => U = √400 = 20 V.",
          "Étape 4 : Calculer la phase φ :\\ntan φ = (VL - VC) / VR = 16 / 12 = 4/3 ≈ 1,333 => φ = arctan(1,333) ≈ +0,927 rad (+53,1°)."
        ],
        "conclusion": "La tension efficace du générateur est U = 20 V et la tension est en avance sur le courant de φ = +53,1°."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Structure géométrique du triangle rectangle de Fresnel",
        "tableData": {
          "headers": [
            "Côté du triangle",
            "Grandeur physique",
            "Formule littérale",
            "Angle avec l'axe horizontal"
          ],
          "rows": [
            [
              "Côté adjacent horizontal (AB)",
              "Tension ohmique",
              "VR = (R + r) · I",
              "0 rad (aligné sur i)"
            ],
            [
              "Côté opposé vertical (BC)",
              "Tension réactive nette",
              "VL - VC = [Lω - 1/(Cω)] · I",
              "+π/2 (si Lω > 1/Cω) ou -π/2"
            ],
            [
              "Hypoténuse (AC)",
              "Tension totale du générateur",
              "U = Z · I",
              "Angle φ = φu/i"
            ],
            [
              "Théorème de Pythagore",
              "U² = VR² + (VL - VC)²",
              "Z² = (R+r)² + (Lω - 1/Cω)²",
              "Relation liant l'hypoténuse aux côtés"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le concept du vecteur tournant de Fresnel",
          "stepTheme": "Représentation géométrique",
          "stepBadge": "||X|| = Xm, angle = φ",
          "paragraphText": "La représentation de Fresnel consiste à associer à une grandeur sinusoïdale un vecteur du plan de norme égale à l'amplitude maximale Xm (ou valeur efficace X) et dont l'angle polaire avec l'axe de référence est la phase à l'origine φ.",
          "exercise": {
            "id": "terminale_d_physique_l10_p04_q1",
            "type": "mcq",
            "prompt": "Quelles sont les deux caractéristiques polaires définissant un vecteur de Fresnel à t = 0 ?",
            "options": [
              "Sa norme (valeur maximale ou efficace) et son angle d'inclinaison (phase à l'origine φ)",
              "Sa résistance et sa réactance thermique",
              "Sa masse et son énergie cinétique",
              "Sa fréquence et sa période"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un vecteur de Fresnel est défini par sa longueur (norme égale à l'amplitude) et son orientation angulaire (phase initiale φ)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Orientation des vecteurs élémentaires",
          "stepTheme": "Axes de Fresnel",
          "stepBadge": "VR -> 0° ; VL -> +90° ; VC -> -90°",
          "paragraphText": "En prenant l'axe des intensités comme référence horizontale : le vecteur VR est horizontal dirigé vers la droite (0°), le vecteur VL est vertical dirigé vers le haut (+90°), et le vecteur VC est vertical dirigé vers le bas (-90°).",
          "exercise": {
            "id": "terminale_d_physique_l10_p04_q2",
            "type": "mcq",
            "prompt": "Vers où pointe le vecteur de Fresnel associé à la tension d'un condensateur pur uC(t) si le courant i est sur l'axe horizontal ?",
            "options": [
              "Verticalement vers le bas (angle de -π/2 par rapport à l'axe des intensités)",
              "Verticalement vers le haut (angle de +π/2)",
              "Horizontalement vers la gauche",
              "Horizontalement vers la droite dans le sens de i"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La tension du condensateur étant en retard de π/2 sur le courant, son vecteur de Fresnel pointe à -90° (vers le bas)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Résolution par le triangle rectangle de Fresnel",
          "stepTheme": "Application de Pythagore",
          "stepBadge": "U² = VR² + (VL - VC)²",
          "paragraphText": "En additionnant vectoriellement les deux composantes verticales opposées VL et VC, on forme un vecteur vertical de longueur |VL - VC|. Avec le vecteur horizontal VR, il forme un triangle rectangle dont l'hypoténuse est la tension totale U.",
          "exercise": {
            "id": "terminale_d_physique_l10_p04_q3",
            "type": "mcq",
            "prompt": "Si VR = 30 V, VL = 80 V et VC = 40 V dans un dipôle RLC série, que vaut la tension totale efficace U ?",
            "options": [
              "U = 50 V",
              "U = 150 V",
              "U = 70 V",
              "U = 90 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "VL - VC = 80 - 40 = 40 V. D'après Pythagore : U = √(VR² + (VL - VC)²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 V."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Expression de cos φ sur le diagramme de Fresnel",
          "stepTheme": "Relations trigonométriques",
          "stepBadge": "cos φ = VR / U",
          "paragraphText": "Dans le triangle rectangle de Fresnel, le cosinus de l'angle φ est le quotient du côté adjacent (VR) par l'hypoténuse (U) : cos φ = VR / U = (Rtot · I) / (Z · I) = Rtot / Z.",
          "exercise": {
            "id": "terminale_d_physique_l10_p04_q4",
            "type": "mcq",
            "prompt": "Dans un triangle de Fresnel où le côté adjacent est VR = 16 V et l'hypoténuse est U = 20 V, quelle est la valeur de cos φ ?",
            "options": [
              "cos φ = 0,80",
              "cos φ = 1,25",
              "cos φ = 0,60",
              "cos φ = 0,50"
            ],
            "correctAnswerIndex": 0,
            "explanation": "cos φ = Côté adjacent / Hypoténuse = VR / U = 16 / 20 = 0,80."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Attention à la soustraction vectorielle des composantes réactives",
          "stepTheme": "Piège classique",
          "stepBadge": "VL - VC et NON VL + VC",
          "paragraphText": "Une faute très courante consiste à additionner les valeurs de VL et VC pour le côté vertical. Puisque les deux vecteurs pointent en sens opposés (+π/2 et -π/2), la norme résultante est leur différence |VL - VC| et non leur somme !",
          "exercise": {
            "id": "terminale_d_physique_l10_p04_q5",
            "type": "mcq",
            "prompt": "Pourquoi la composante verticale du diagramme de Fresnel est-elle (VL - VC) et non (VL + VC) ?",
            "options": [
              "Parce que les vecteurs VL et VC ont la même direction verticale mais des sens rigoureusement opposés",
              "Parce que l'inductance consomme de l'énergie et le condensateur en fabrique",
              "Parce que le voltmètre inverse le signe de VC",
              "Parce que la loi d'Ohm l'interdit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les déphasages de +90° et -90° correspondent à des vecteurs antiparallèles qui se soustraient géométriquement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Construction de Fresnel avec valeurs efficaces ou amplitudes",
          "stepTheme": "Échelle de tracé",
          "stepBadge": "Facteur √2 conservé",
          "paragraphText": "Le diagramme de Fresnel peut être tracé indifféremment avec les amplitudes maximales (Um, Im) ou avec les valeurs efficaces (U, I). Tous les vecteurs étant simplement divisés par √2, les angles et les rapports trigonométriques restent rigoureusement identiques.",
          "exercise": {
            "id": "terminale_d_physique_l10_p04_q6",
            "type": "mcq",
            "prompt": "Si l'on remplace les amplitudes maximales par les valeurs efficaces sur un diagramme de Fresnel, comment est modifiée la valeur de l'angle φ ?",
            "options": [
              "L'angle φ reste strictement inchangé",
              "L'angle φ est divisé par √2",
              "L'angle φ est multiplié par 2",
              "L'angle φ s'annule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une homothétie d'échelle 1/√2 conserve tous les angles géométriques du triangle : la phase φ est rigoureusement invariable."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Expression de tan φ",
          "stepTheme": "Formule de la tangente",
          "stepBadge": "tan φ = (VL - VC) / VR",
          "paragraphText": "La tangente de l'angle φ est le rapport du côté opposé par le côté adjacent : tan φ = (VL - VC) / VR = [Lω - 1/(Cω)] / (R + r). Cette formule permet de calculer immédiatement la phase sans calculer au préalable l'hypoténuse U.",
          "exercise": {
            "id": "terminale_d_physique_l10_p04_q7",
            "type": "mcq",
            "prompt": "Quelle est l'expression de tan φ en fonction de R, r, L, C et ω ?",
            "options": [
              "tan φ = [Lω - 1/(Cω)] / (R + r)",
              "tan φ = (R + r) / [Lω - 1/(Cω)]",
              "tan φ = [Lω + 1/(Cω)] / (R + r)",
              "tan φ = (R + r) · Lω"
            ],
            "correctAnswerIndex": 0,
            "explanation": "tan φ = Côté opposé / Côté adjacent = (VL - VC) / VR = [Lω - 1/(Cω)] / (R + r)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l10_p04_q1",
          "type": "mcq",
          "prompt": "Quelles sont les deux caractéristiques polaires définissant un vecteur de Fresnel à t = 0 ?",
          "options": [
            "Sa norme (valeur maximale ou efficace) et son angle d'inclinaison (phase à l'origine φ)",
            "Sa résistance et sa réactance thermique",
            "Sa masse et son énergie cinétique",
            "Sa fréquence et sa période"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un vecteur de Fresnel est défini par sa longueur (norme égale à l'amplitude) et son orientation angulaire (phase initiale φ)."
        },
        {
          "id": "terminale_d_physique_l10_p04_q2",
          "type": "mcq",
          "prompt": "Vers où pointe le vecteur de Fresnel associé à la tension d'un condensateur pur uC(t) si le courant i est sur l'axe horizontal ?",
          "options": [
            "Verticalement vers le bas (angle de -π/2 par rapport à l'axe des intensités)",
            "Verticalement vers le haut (angle de +π/2)",
            "Horizontalement vers la gauche",
            "Horizontalement vers la droite dans le sens de i"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La tension du condensateur étant en retard de π/2 sur le courant, son vecteur de Fresnel pointe à -90° (vers le bas)."
        },
        {
          "id": "terminale_d_physique_l10_p04_q3",
          "type": "mcq",
          "prompt": "Si VR = 30 V, VL = 80 V et VC = 40 V dans un dipôle RLC série, que vaut la tension totale efficace U ?",
          "options": [
            "U = 50 V",
            "U = 150 V",
            "U = 70 V",
            "U = 90 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "VL - VC = 80 - 40 = 40 V. D'après Pythagore : U = √(VR² + (VL - VC)²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 V."
        },
        {
          "id": "terminale_d_physique_l10_p04_q4",
          "type": "mcq",
          "prompt": "Dans un triangle de Fresnel où le côté adjacent est VR = 16 V et l'hypoténuse est U = 20 V, quelle est la valeur de cos φ ?",
          "options": [
            "cos φ = 0,80",
            "cos φ = 1,25",
            "cos φ = 0,60",
            "cos φ = 0,50"
          ],
          "correctAnswerIndex": 0,
          "explanation": "cos φ = Côté adjacent / Hypoténuse = VR / U = 16 / 20 = 0,80."
        },
        {
          "id": "terminale_d_physique_l10_p04_q5",
          "type": "mcq",
          "prompt": "Pourquoi la composante verticale du diagramme de Fresnel est-elle (VL - VC) et non (VL + VC) ?",
          "options": [
            "Parce que les vecteurs VL et VC ont la même direction verticale mais des sens rigoureusement opposés",
            "Parce que l'inductance consomme de l'énergie et le condensateur en fabrique",
            "Parce que le voltmètre inverse le signe de VC",
            "Parce que la loi d'Ohm l'interdit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les déphasages de +90° et -90° correspondent à des vecteurs antiparallèles qui se soustraient géométriquement."
        },
        {
          "id": "terminale_d_physique_l10_p04_q6",
          "type": "mcq",
          "prompt": "Si l'on remplace les amplitudes maximales par les valeurs efficaces sur un diagramme de Fresnel, comment est modifiée la valeur de l'angle φ ?",
          "options": [
            "L'angle φ reste strictement inchangé",
            "L'angle φ est divisé par √2",
            "L'angle φ est multiplié par 2",
            "L'angle φ s'annule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une homothétie d'échelle 1/√2 conserve tous les angles géométriques du triangle : la phase φ est rigoureusement invariable."
        },
        {
          "id": "terminale_d_physique_l10_p04_q7",
          "type": "mcq",
          "prompt": "Quelle est l'expression de tan φ en fonction de R, r, L, C et ω ?",
          "options": [
            "tan φ = [Lω - 1/(Cω)] / (R + r)",
            "tan φ = (R + r) / [Lω - 1/(Cω)]",
            "tan φ = [Lω + 1/(Cω)] / (R + r)",
            "tan φ = (R + r) · Lω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "tan φ = Côté opposé / Côté adjacent = (VL - VC) / VR = [Lω - 1/(Cω)] / (R + r)."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l10_p05",
      "order": 5,
      "title": "Impédance Z et expressions de la phase φ",
      "summary": "Démonstration de la formule de l'impédance Z = √[(R+r)² + (Lω - 1/Cω)²], loi d'Ohm en alternatif U = Z I, expressions trigonométriques complètes de la phase (tan φ, cos φ, sin φ) et dépendance fréquentielle de Z.",
      "conceptExplanation": "1. Démonstration de l'impédance Z par le théorème de Pythagore :\nDans le triangle rectangle de Fresnel :\nU_m^2 = V_{R,m}^2 + (V_{L,m} - V_{C,m})^2 = [(R + r)\\,I_m]^2 + \\left[\\left(L\\omega - \\frac{1}{C\\omega}\\right) I_m\\right]^2.\nEn factorisant par Im² :\nU_m^2 = \\left[ (R + r)^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2 \\right] I_m^2.\nEn prenant la racine carrée, on obtient :\nU_m = \\sqrt{(R + r)^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2} \\cdot I_m.\nEn divisant les deux membres par √2, la relation est identique pour les valeurs efficaces :\nU = Z \\cdot I \\iff Z = \\frac{U}{I} = \\frac{U_m}{I_m}.\n\nL'impédance Z du dipôle RLC série s'exprime donc par la relation générale :\nZ = \\sqrt{(R + r)^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2} \\quad (\\text{en } \\Omega).\n\n2. Expressions trigonométriques du déphasage φ = φu/i :\nÀ partir des côtés du triangle de Fresnel :\n- \\tan\\varphi = \\frac{L\\omega - \\frac{1}{C\\omega}}{R + r} ;\n- \\cos\\varphi = \\frac{R + r}{Z} \\quad (\\text{toujours positif car } R+r > 0 \\text{ et } Z > 0) ;\n- \\sin\\varphi = \\frac{L\\omega - \\frac{1}{C\\omega}}{Z}.\n\n3. Analyse des cas particuliers d'impédance :\n- Résistor pur de résistance R : Z = R (indépendant de la fréquence, φ = 0) ;\n- Bobine pure (r = 0, C absent) : Z = Lω (proportionnelle à la fréquence, φ = +π/2) ;\n- Condensateur pur (R = 0, L absent) : Z = 1/(Cω) (inversement proportionnelle à la fréquence, φ = -π/2) ;\n- Dipôle RL série : Z = √[(R+r)² + L²ω²] et tan φ = Lω / (R+r) > 0 ;\n- Dipôle RC série : Z = √[R² + 1/(C²ω²)] et tan φ = -1 / (RCω) < 0.",
      "keyRule": "L'impédance du circuit RLC série est Z = √[(R+r)² + (Lω - 1/Cω)²] (en Ohms). U = Z I. La phase vérifie tan φ = [Lω - 1/(Cω)] / (R+r) et cos φ = (R+r) / Z.",
      "formulas": [
        {
          "name": "Impédance du dipôle RLC série",
          "formula": "Z = \\sqrt{(R + r)^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2}",
          "note": "Z en Ohms (Ω), R et r en Ω, L en H, C en F, ω en rad·s⁻¹"
        },
        {
          "name": "Loi d'Ohm en courant alternatif",
          "formula": "U = Z\\,I \\quad \\iff \\quad I = \\frac{U}{Z}",
          "note": "En valeurs efficaces ou maximales"
        },
        {
          "name": "Formules trigonométriques de la phase",
          "formula": "\\tan\\varphi = \\frac{L\\omega - \\frac{1}{C\\omega}}{R+r} \\quad ; \\quad \\cos\\varphi = \\frac{R+r}{Z}",
          "note": "cos φ est le facteur de puissance"
        }
      ],
      "workedExample": {
        "title": "Calcul complet de l'impédance et du courant dans un circuit RLC",
        "statement": "Un dipôle RLC série comprend un résistor R = 30 Ω, une bobine (L = 0,10 H, r = 10 Ω) et un condensateur C = 20 µF. Il est alimenté par un GBF délivrant une tension efficace U = 24 V à la fréquence N = 100 Hz.\\n1. Calcule la pulsation ω.\\n2. Calcule les réactances Lω et 1/(Cω).\\n3. Calcule l'impédance totale Z du circuit.\\n4. Détermine l'intensité efficace I du courant et le déphasage φ.",
        "methodSteps": [
          "Étape 1 : Calculer ω : ω = 2π N = 2π × 100 = 200π ≈ 628,3 rad·s⁻¹.",
          "Étape 2 : Calculer les termes réactifs :\\nLω = 0,10 × 628,3 = 62,83 Ω.\\n1 / (Cω) = 1 / (20 × 10⁻⁶ × 628,3) = 1 / 0,01257 ≈ 79,58 Ω.\\nRéactance nette : Lω - 1/(Cω) = 62,83 - 79,58 = -16,75 Ω.",
          "Étape 3 : Calculer l'impédance Z :\\nRésistance totale : Rtot = R + r = 30 + 10 = 40 Ω.\\nZ = √[Rtot² + (Lω - 1/Cω)²] = √[40² + (-16,75)²] = √[1600 + 280,56] = √1880,56 ≈ 43,37 Ω.",
          "Étape 4 : Calculer I et φ :\\nI = U / Z = 24 / 43,37 ≈ 0,553 A = 553 mA.\\ntan φ = -16,75 / 40 ≈ -0,4188 => φ = arctan(-0,4188) ≈ -0,396 rad (soit -22,7°)."
        ],
        "conclusion": "L'impédance vaut Z = 43,4 Ω, le courant efficace est I = 553 mA et la tension est en retard de 22,7° sur le courant (φ = -0,40 rad, caractère capacitif)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Expressions de l'impédance Z pour différents dipôles en alternatif",
        "tableData": {
          "headers": [
            "Dipôle considéré",
            "Composants présents",
            "Formule de l'impédance Z",
            "Déphasage φ = φu/i",
            "Comportement"
          ],
          "rows": [
            [
              "Conducteur ohmique pur",
              "R uniquement",
              "Z = R",
              "φ = 0 rad",
              "Résistif pur (en phase)"
            ],
            [
              "Inductance pure",
              "L uniquement (r = 0)",
              "Z = Lω",
              "φ = +π/2 rad (+90°)",
              "Inductif pur (tension devance)"
            ],
            [
              "Condensateur pur",
              "C uniquement",
              "Z = 1 / (Cω)",
              "φ = -π/2 rad (-90°)",
              "Capacitif pur (tension retarde)"
            ],
            [
              "Bobine réelle",
              "L et r en série",
              "Z = √(r² + L²ω²)",
              "0 < φ < +π/2 rad",
              "Inductif avec pertes Joule"
            ],
            [
              "Dipôle RC série",
              "R et C en série",
              "Z = √[R² + 1/(C²ω²)]",
              "-π/2 < φ < 0 rad",
              "Capacitif résistant"
            ],
            [
              "Dipôle RLC complet",
              "R, r, L, C en série",
              "Z = √[(R+r)² + (Lω - 1/Cω)²]",
              "-π/2 < φ < +π/2 rad",
              "Selon le signe de Lω - 1/Cω"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de l'impédance électrique Z",
          "stepTheme": "Grandeur d'impédance",
          "stepBadge": "Z = U / I en Ohms [Ω]",
          "paragraphText": "L'impédance Z d'un dipôle passif est le quotient de la tension efficace à ses bornes par l'intensité efficace du courant qui le traverse : Z = U / I = Um / Im. Elle s'exprime en Ohms (Ω) et mesure l'opposition globale du dipôle au passage du courant alternatif.",
          "exercise": {
            "id": "terminale_d_physique_l10_p05_q1",
            "type": "mcq",
            "prompt": "Sous une tension efficace U = 120 V, un dipôle RLC est traversé par un courant efficace I = 2,4 A. Que vaut son impédance Z ?",
            "options": [
              "Z = 50 Ω",
              "Z = 288 Ω",
              "Z = 0,020 Ω",
              "Z = 122,4 Ω"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Z = U / I = 120 V / 2,4 A = 50 Ω."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Dépendance de l'impédance vis-à-vis de la fréquence",
          "stepTheme": "Variation fréquentielle",
          "stepBadge": "Z dépend de ω",
          "paragraphText": "Contrairement à la résistance d'un conducteur ohmique qui est indépendante de la fréquence en basse fréquence, l'impédance Z d'un circuit RLC varie continuellement avec la pulsation ω en raison des termes antagonistes Lω et 1/(Cω).",
          "exercise": {
            "id": "terminale_d_physique_l10_p05_q2",
            "type": "mcq",
            "prompt": "Pourquoi l'impédance Z d'un circuit RLC ne peut-elle pas être mesurée directement avec un ohmmètre classique hors tension ?",
            "options": [
              "Parce qu'un ohmmètre utilise un courant continu (ω = 0) et ne peut pas révéler les termes réactifs Lω et 1/(Cω) qui dépendent de la fréquence alternative",
              "Parce que le condensateur détruirait l'ohmmètre",
              "Parce que l'impédance est une grandeur vectorielle sans unité",
              "Parce que la bobine s'oppose à la mesure par effet photoélectrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ohmmètre applique une tension continue pour laquelle Lω = 0 et 1/(Cω) = ∞ (circuit ouvert). Il ne mesure que la résistance pure en continu."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul pas à pas de l'impédance",
          "stepTheme": "Méthode de calcul",
          "stepBadge": "Rtot² + (Lω - 1/Cω)²",
          "paragraphText": "Pour calculer Z sans erreur : 1. Additionner toutes les résistances Rtot = R + r ; 2. Calculer Lω ; 3. Calculer 1/(Cω) ; 4. Faire la soustraction (Lω - 1/Cω) ; 5. Élever au carré, additionner à Rtot² et prendre la racine carrée.",
          "exercise": {
            "id": "terminale_d_physique_l10_p05_q3",
            "type": "mcq",
            "prompt": "Dans un circuit RLC série, on a Rtot = 24 Ω, Lω = 50 Ω et 1/(Cω) = 43 Ω. Que vaut l'impédance Z ?",
            "options": [
              "Z = 25 Ω",
              "Z = 31 Ω",
              "Z = 117 Ω",
              "Z = 17 Ω"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lω - 1/(Cω) = 50 - 43 = 7 Ω. Z = √(24² + 7²) = √(576 + 49) = √625 = 25 Ω."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le facteur de puissance cos φ",
          "stepTheme": "Facteur de puissance",
          "stepBadge": "cos φ = Rtot / Z",
          "paragraphText": "Le rapport cos φ = Rtot / Z est appelé le facteur de puissance du circuit. Puisque l'hypoténuse Z est toujours supérieure ou égale au côté adjacent Rtot, on a toujours 0 ≤ cos φ ≤ 1.",
          "exercise": {
            "id": "terminale_d_physique_l10_p05_q4",
            "type": "mcq",
            "prompt": "Un circuit RLC a une résistance totale Rtot = 60 Ω et une impédance Z = 100 Ω. Que vaut son facteur de puissance cos φ ?",
            "options": [
              "cos φ = 0,60",
              "cos φ = 1,67",
              "cos φ = 0,80",
              "cos φ = 0,36"
            ],
            "correctAnswerIndex": 0,
            "explanation": "cos φ = Rtot / Z = 60 / 100 = 0,60."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Erreur de signe sur le calcul de la phase via tan φ",
          "stepTheme": "Signe de l'angle",
          "stepBadge": "Attention au numérateur",
          "paragraphText": "Le signe de tan φ est fixé par le numérateur Lω - 1/(Cω). Si 1/(Cω) > Lω, tan φ est négative et la phase φ est négative. Ne mettez jamais de valeur absolue sur la phase sans préciser le signe déduit du comportement du circuit.",
          "exercise": {
            "id": "terminale_d_physique_l10_p05_q5",
            "type": "mcq",
            "prompt": "Si Lω = 20 Ω et 1/(Cω) = 50 Ω avec Rtot = 30 Ω, quelle est la valeur exacte de tan φ ?",
            "options": [
              "tan φ = -1,0 (donc φ = -π/4 rad = -45°)",
              "tan φ = +1,0",
              "tan φ = -2,33",
              "tan φ = +0,43"
            ],
            "correctAnswerIndex": 0,
            "explanation": "tan φ = [Lω - 1/(Cω)] / Rtot = (20 - 50) / 30 = -30 / 30 = -1,0. D'où φ = arctan(-1) = -π/4 rad."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Minimum absolu de l'impédance",
          "stepTheme": "Valeur minimale",
          "stepBadge": "Zmin = Rtot",
          "paragraphText": "Puisque le terme au carré (Lω - 1/Cω)² est toujours positif ou nul, l'impédance Z est minimale lorsque ce terme s'annule : Zmin = √(Rtot² + 0) = Rtot. À ce point précis, l'impédance est purement ohmique et le courant atteint sa valeur maximale possible.",
          "exercise": {
            "id": "terminale_d_physique_l10_p05_q6",
            "type": "mcq",
            "prompt": "Quelle est la valeur minimale théorique que peut prendre l'impédance Z d'un circuit RLC série de résistance totale Rtot = 15 Ω lorsque l'on fait varier la fréquence ?",
            "options": [
              "Zmin = 15 Ω",
              "Zmin = 0 Ω",
              "Zmin = 15 / √2 ≈ 10,6 Ω",
              "Zmin dépend de la valeur de la tension U"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le terme réactif s'annule à la résonance, ce qui laisse Zmin = Rtot = 15 Ω."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Calcul du courant efficace maximal",
          "stepTheme": "Courant sous Zmin",
          "stepBadge": "Imax = U / Rtot",
          "paragraphText": "Lorsque l'impédance atteint son minimum Z = Rtot, pour une tension efficace U maintenue constante par le GBF, l'intensité efficace I = U / Z atteint son maximum absolu I0 = U / Rtot.",
          "exercise": {
            "id": "terminale_d_physique_l10_p05_q7",
            "type": "mcq",
            "prompt": "Un circuit RLC (Rtot = 20 Ω) est alimenté sous une tension efficace constante U = 10 V. Que vaut l'intensité efficace maximale que l'on peut espérer observer en ajustant la fréquence ?",
            "options": [
              "I0 = 0,50 A = 500 mA",
              "I0 = 2,0 A",
              "I0 = 200 A",
              "I0 = 0,25 A"
            ],
            "correctAnswerIndex": 0,
            "explanation": "I0 = U / Zmin = U / Rtot = 10 V / 20 Ω = 0,50 A = 500 mA."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l10_p05_q1",
          "type": "mcq",
          "prompt": "Sous une tension efficace U = 120 V, un dipôle RLC est traversé par un courant efficace I = 2,4 A. Que vaut son impédance Z ?",
          "options": [
            "Z = 50 Ω",
            "Z = 288 Ω",
            "Z = 0,020 Ω",
            "Z = 122,4 Ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Z = U / I = 120 V / 2,4 A = 50 Ω."
        },
        {
          "id": "terminale_d_physique_l10_p05_q2",
          "type": "mcq",
          "prompt": "Pourquoi l'impédance Z d'un circuit RLC ne peut-elle pas être mesurée directement avec un ohmmètre classique hors tension ?",
          "options": [
            "Parce qu'un ohmmètre utilise un courant continu (ω = 0) et ne peut pas révéler les termes réactifs Lω et 1/(Cω) qui dépendent de la fréquence alternative",
            "Parce que le condensateur détruirait l'ohmmètre",
            "Parce que l'impédance est une grandeur vectorielle sans unité",
            "Parce que la bobine s'oppose à la mesure par effet photoélectrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ohmmètre applique une tension continue pour laquelle Lω = 0 et 1/(Cω) = ∞ (circuit ouvert). Il ne mesure que la résistance pure en continu."
        },
        {
          "id": "terminale_d_physique_l10_p05_q3",
          "type": "mcq",
          "prompt": "Dans un circuit RLC série, on a Rtot = 24 Ω, Lω = 50 Ω et 1/(Cω) = 43 Ω. Que vaut l'impédance Z ?",
          "options": [
            "Z = 25 Ω",
            "Z = 31 Ω",
            "Z = 117 Ω",
            "Z = 17 Ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lω - 1/(Cω) = 50 - 43 = 7 Ω. Z = √(24² + 7²) = √(576 + 49) = √625 = 25 Ω."
        },
        {
          "id": "terminale_d_physique_l10_p05_q4",
          "type": "mcq",
          "prompt": "Un circuit RLC a une résistance totale Rtot = 60 Ω et une impédance Z = 100 Ω. Que vaut son facteur de puissance cos φ ?",
          "options": [
            "cos φ = 0,60",
            "cos φ = 1,67",
            "cos φ = 0,80",
            "cos φ = 0,36"
          ],
          "correctAnswerIndex": 0,
          "explanation": "cos φ = Rtot / Z = 60 / 100 = 0,60."
        },
        {
          "id": "terminale_d_physique_l10_p05_q5",
          "type": "mcq",
          "prompt": "Si Lω = 20 Ω et 1/(Cω) = 50 Ω avec Rtot = 30 Ω, quelle est la valeur exacte de tan φ ?",
          "options": [
            "tan φ = -1,0 (donc φ = -π/4 rad = -45°)",
            "tan φ = +1,0",
            "tan φ = -2,33",
            "tan φ = +0,43"
          ],
          "correctAnswerIndex": 0,
          "explanation": "tan φ = [Lω - 1/(Cω)] / Rtot = (20 - 50) / 30 = -30 / 30 = -1,0. D'où φ = arctan(-1) = -π/4 rad."
        },
        {
          "id": "terminale_d_physique_l10_p05_q6",
          "type": "mcq",
          "prompt": "Quelle est la valeur minimale théorique que peut prendre l'impédance Z d'un circuit RLC série de résistance totale Rtot = 15 Ω lorsque l'on fait varier la fréquence ?",
          "options": [
            "Zmin = 15 Ω",
            "Zmin = 0 Ω",
            "Zmin = 15 / √2 ≈ 10,6 Ω",
            "Zmin dépend de la valeur de la tension U"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le terme réactif s'annule à la résonance, ce qui laisse Zmin = Rtot = 15 Ω."
        },
        {
          "id": "terminale_d_physique_l10_p05_q7",
          "type": "mcq",
          "prompt": "Un circuit RLC (Rtot = 20 Ω) est alimenté sous une tension efficace constante U = 10 V. Que vaut l'intensité efficace maximale que l'on peut espérer observer en ajustant la fréquence ?",
          "options": [
            "I0 = 0,50 A = 500 mA",
            "I0 = 2,0 A",
            "I0 = 200 A",
            "I0 = 0,25 A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "I0 = U / Zmin = U / Rtot = 10 V / 20 Ω = 0,50 A = 500 mA."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l10_p06",
      "order": 6,
      "title": "Nature du circuit RLC selon le signe du déphasage φ",
      "summary": "Classification physique des trois régimes possibles : inductif (φ > 0), capacitif (φ < 0) et résistif (φ = 0), comparaison des énergies magnétiques et électrostatiques moyennes, et allure correspondante des oscillogrammes.",
      "conceptExplanation": "1. Les trois états physiques fondamentaux d'un dipôle RLC série :\nLe signe du déphasage φ = φu/i (tension par rapport au courant) détermine la nature physique dominante du comportement du dipôle RLC à la fréquence imposée par l'excitateur :\n\n- Cas 1 : Circuit à caractère INDUCTIF (Lω > 1/(Cω)) :\n  * La réactance inductive l'emporte sur la réactance capacitive : VL > VC ;\n  * Le déphasage est positif : φ > 0 (ou 0 < φ < +π/2) ;\n  * La tension aux bornes du dipôle est en avance sur le courant (u atteint son sommet avant i) ;\n  * Ce régime apparaît aux fréquences supérieures à la fréquence propre (N > N0 ou ω > ω0) ;\n  * L'énergie magnétique moyenne emmagasinée dans la bobine est prépondérante sur l'énergie électrostatique du condensateur.\n\n- Cas 2 : Circuit à caractère CAPACITIF (Lω < 1/(Cω)) :\n  * La réactance capacitive l'emporte sur la réactance inductive : VC > VL ;\n  * Le déphasage est négatif : φ < 0 (ou -π/2 < φ < 0) ;\n  * La tension aux bornes du dipôle est en retard sur le courant (i atteint son sommet avant u) ;\n  * Ce régime apparaît aux basses fréquences, inférieures à la fréquence propre (N < N0 ou ω < ω0) ;\n  * L'énergie électrostatique moyenne du condensateur est prépondérante.\n\n- Cas 3 : Circuit à caractère RÉSISTIF (Lω = 1/(Cω)) :\n  * Compensation exacte des effets inductifs et capacitifs : VL = VC ;\n  * Le déphasage est nul : φ = 0 rad ;\n  * La tension et le courant oscillent parfaitement en phase (passage par zéro et sommets simultanés) ;\n  * Ce cas exceptionnel définit la résonance d'intensité, obtenue à la pulsation propre ω0 = 1/√(LC) ;\n  * L'impédance se réduit à la seule résistance : Z = Rtot = R + r.",
      "keyRule": "Si Lω > 1/(Cω) (hautes fréquences) : φ > 0, circuit INDUCTIF (u en avance). Si Lω < 1/(Cω) (basses fréquences) : φ < 0, circuit CAPACITIF (u en retard). Si Lω = 1/(Cω) : φ = 0, circuit RÉSISTIF (résonance).",
      "formulas": [
        {
          "name": "Condition du circuit inductif",
          "formula": "L\\omega > \\frac{1}{C\\omega} \\iff \\omega > \\omega_0 \\implies \\varphi > 0 \\quad (\\text{u en avance sur i})",
          "note": "Dominante de la bobine"
        },
        {
          "name": "Condition du circuit capacitif",
          "formula": "L\\omega < \\frac{1}{C\\omega} \\iff \\omega < \\omega_0 \\implies \\varphi < 0 \\quad (\\text{u en retard sur i})",
          "note": "Dominante du condensateur"
        },
        {
          "name": "Condition du circuit résistif (résonance)",
          "formula": "L\\omega_0 = \\frac{1}{C\\omega_0} \\iff \\omega_0 = \\frac{1}{\\sqrt{LC}} \\implies \\varphi = 0 \\quad (\\text{u et i en phase})",
          "note": "Z = Rtot"
        }
      ],
      "workedExample": {
        "title": "Diagnostic de la nature d'un circuit RLC à deux fréquences distinctes",
        "statement": "Un circuit RLC série comprend une résistance Rtot = 50 Ω, une bobine pure L = 0,25 H et un condensateur C = 4,0 µF.\\n1. Calcule la pulsation propre ω0 et la fréquence propre N0 de ce circuit.\\n2. On règle le générateur sur N1 = 100 Hz. Détermine la nature du circuit (inductif, capacitif ou résistif) et calcule le déphasage φ1.\\n3. On règle ensuite le générateur sur N2 = 250 Hz. Détermine la nouvelle nature du circuit et le déphasage φ2.",
        "methodSteps": [
          "Étape 1 : Calculer ω0 et N0 :\\nω0 = 1 / √(LC) = 1 / √(0,25 × 4,0 × 10⁻⁶) = 1 / √(10⁻⁶) = 1 / 10⁻³ = 1000 rad·s⁻¹.\\nN0 = ω0 / (2π) = 1000 / (2 × 3,1416) ≈ 159,2 Hz.",
          "Étape 2 : À la fréquence N1 = 100 Hz :\\nComme N1 = 100 Hz < N0 (159,2 Hz), le circuit doit être capacitif.\\nVérification par le calcul : ω1 = 2π × 100 = 628,3 rad·s⁻¹.\\nLω1 = 0,25 × 628,3 = 157,1 Ω.\\n1 / (Cω1) = 1 / (4,0 × 10⁻⁶ × 628,3) ≈ 397,9 Ω.\\nComme Lω1 < 1/(Cω1), le terme réactif est négatif : Lω1 - 1/(Cω1) = 157,1 - 397,9 = -240,8 Ω.\\ntan φ1 = -240,8 / 50 = -4,816 => φ1 = arctan(-4,816) ≈ -1,37 rad (-78,3°). Le circuit est CAPACITIF.",
          "Étape 3 : À la fréquence N2 = 250 Hz :\\nComme N2 = 250 Hz > N0 (159,2 Hz), le circuit doit être inductif.\\nω2 = 2π × 250 = 1570,8 rad·s⁻¹.\\nLω2 = 0,25 × 1570,8 = 392,7 Ω.\\n1 / (Cω2) = 1 / (4,0 × 10⁻⁶ × 1570,8) ≈ 159,2 Ω.\\nLω2 - 1/(Cω2) = 392,7 - 159,2 = +233,5 Ω > 0.\\ntan φ2 = +233,5 / 50 = +4,67 => φ2 = arctan(4,67) ≈ +1,36 rad (+77,9°). Le circuit est INDUCTIF."
        ],
        "conclusion": "À 100 Hz (en dessous de N0), le circuit est capacitif (φ = -78°). À 250 Hz (au-dessus de N0), le circuit devient inductif (φ = +78°). La transition à φ = 0 se produit exactement à N0 = 159,2 Hz."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Synthèse comparative des trois régimes d'un dipôle RLC série",
        "tableData": {
          "headers": [
            "Propriété",
            "Régime Capacitif",
            "Régime Résistif (Résonance)",
            "Régime Inductif"
          ],
          "rows": [
            [
              "Domaine de fréquence",
              "N < N0 (ou ω < ω0)",
              "N = N0 (ou ω = ω0)",
              "N > N0 (ou ω > ω0)"
            ],
            [
              "Comparaison réactive",
              "Lω < 1 / (Cω)",
              "Lω = 1 / (Cω)",
              "Lω > 1 / (Cω)"
            ],
            [
              "Signe du déphasage φ",
              "φ < 0 (négatif)",
              "φ = 0 rad",
              "φ > 0 (positif)"
            ],
            [
              "Position temporelle",
              "u en retard sur i",
              "u et i en phase parfaite",
              "u en avance sur i"
            ],
            [
              "Vecteur résultant Fresnel",
              "Pointe vers le bas",
              "Parfaitement horizontal",
              "Pointe vers le haut"
            ],
            [
              "Impédance Z",
              "Z > Rtot",
              "Z = Zmin = Rtot",
              "Z > Rtot"
            ],
            [
              "Intensité efficace I",
              "I < I0",
              "I = I0 = U / Rtot (maximale)",
              "I < I0"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Caractérisation du circuit inductif",
          "stepTheme": "Régime inductif",
          "stepBadge": "φ > 0 (Lω > 1/Cω)",
          "paragraphText": "Un circuit RLC série est dit inductif lorsque la réactance de l'inductance est supérieure à celle du condensateur (Lω > 1/Cω). La tension globale u(t) est en avance temporelle sur l'intensité i(t) : le déphasage φ = φu/i est strictement positif.",
          "exercise": {
            "id": "terminale_d_physique_l10_p06_q1",
            "type": "mcq",
            "prompt": "Un circuit RLC série présente un déphasage φ = +0,65 rad. Quelle est la nature de ce circuit ?",
            "options": [
              "Le circuit est inductif",
              "Le circuit est capacitif",
              "Le circuit est à la résonance",
              "Le circuit est en court-circuit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un déphasage φ > 0 signifie que la tension est en avance sur le courant, caractéristique du comportement inductif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Caractérisation du circuit capacitif",
          "stepTheme": "Régime capacitif",
          "stepBadge": "φ < 0 (Lω < 1/Cω)",
          "paragraphText": "Un circuit RLC série est dit capacitif lorsque la réactance du condensateur l'emporte sur celle de la bobine (1/Cω > Lω). La tension globale u(t) est en retard temporel sur l'intensité i(t) : le déphasage φ = φu/i est strictement négatif.",
          "exercise": {
            "id": "terminale_d_physique_l10_p06_q2",
            "type": "mcq",
            "prompt": "À basse fréquence (par exemple N = 20 Hz pour un circuit où N0 = 200 Hz), quel est le comportement dominant d'un circuit RLC série ?",
            "options": [
              "Capacitif car 1/(Cω) devient très grand devant Lω",
              "Inductif car la bobine s'oppose au passage du courant continu",
              "Purement résistif",
              "Supraconducteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Quand ω tend vers zéro, 1/(Cω) tend vers l'infini tandis que Lω tend vers zéro : le condensateur domine largement (circuit capacitif)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Caractérisation du circuit résistif (résonance)",
          "stepTheme": "Régime résistif",
          "stepBadge": "φ = 0 (Lω = 1/Cω)",
          "paragraphText": "Lorsque la fréquence de l'excitateur est ajustée précisément à la fréquence propre du circuit (N = N0), on a Lω = 1/(Cω). Les réactances s'annulent mutuellement, le déphasage s'annule (φ = 0) et le circuit se comporte comme un conducteur ohmique pur de résistance Rtot.",
          "exercise": {
            "id": "terminale_d_physique_l10_p06_q3",
            "type": "mcq",
            "prompt": "Quelle égalité caractérise le passage d'un circuit RLC série par son état purement résistif ?",
            "options": [
              "L · C · ω² = 1",
              "L · ω = R",
              "C · ω = R",
              "L · C = R²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lω = 1/(Cω) <=> LCω² = 1, condition fondamentale de la résonance d'intensité."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Déduction de la nature du circuit à partir de l'oscillogramme",
          "stepTheme": "Diagnostic oscillogramme",
          "stepBadge": "Qui est en avance ?",
          "paragraphText": "Pour déterminer la nature d'un dipôle RLC sur un oscillogramme : on repère la courbe u(t) (voie du générateur) et la courbe i(t) (voie du résistor). Si le pic de u est à gauche du pic de i, u est en avance => circuit INDUCTIF. Si le pic de u est à droite de celui de i, u est en retard => circuit CAPACITIF.",
          "exercise": {
            "id": "terminale_d_physique_l10_p06_q4",
            "type": "mcq",
            "prompt": "Sur un écran d'oscilloscope, le zéro montant de la tension u(t) apparaît 1,5 ms APRÈS le zéro montant de l'intensité i(t). Quelle est la nature du dipôle ?",
            "options": [
              "Capacitif car la tension u(t) est en retard temporel sur le courant i(t)",
              "Inductif car la bobine retarde le courant",
              "Résistif pur car l'amplitude est constante",
              "Oscillant amorti"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Si u apparaît après i, u est en retard par rapport à i (φ < 0) : le circuit est capacitif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confusion entre fréquence d'excitation et fréquence propre",
          "stepTheme": "Régime forcé",
          "stepBadge": "N imposée par le GBF",
          "paragraphText": "En régime forcé, la fréquence des oscillations n'est PAS la fréquence propre N0 du circuit ! La fréquence observée est IMPOSÉE par le générateur. La fréquence propre N0 n'est que la valeur particulière pour laquelle se produit la résonance.",
          "exercise": {
            "id": "terminale_d_physique_l10_p06_q5",
            "type": "mcq",
            "prompt": "Un circuit RLC dont la fréquence propre est N0 = 500 Hz est branché sur un GBF réglé à N = 120 Hz. À quelle fréquence oscillent la tension et le courant dans le circuit ?",
            "options": [
              "À N = 120 Hz (la fréquence imposée par l'excitateur)",
              "À N0 = 500 Hz (la fréquence propre du circuit)",
              "À la moyenne N = 310 Hz",
              "À la différence N = 380 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En régime forcé permanent, le système oscille rigoureusement à la fréquence imposée par le générateur excitateur (120 Hz)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Influence de l'augmentation de la capacité C sur la nature du circuit",
          "stepTheme": "Variation d'un paramètre",
          "stepBadge": "C augmente => 1/Cω diminue",
          "paragraphText": "Si un circuit RLC est initialement capacitif (1/Cω > Lω), pour le ramener à la résonance ou le rendre inductif, on peut augmenter la capacité C (ce qui diminue 1/Cω) ou augmenter la fréquence N (ce qui augmente Lω et diminue 1/Cω).",
          "exercise": {
            "id": "terminale_d_physique_l10_p06_q6",
            "type": "mcq",
            "prompt": "Pour un circuit RLC fonctionnant à une fréquence fixe où 1/(Cω) > Lω (capacitif), quelle action permet de rapprocher le circuit de la résonance ?",
            "options": [
              "Augmenter la capacité C du condensateur",
              "Diminuer la capacité C",
              "Diminuer l'inductance L",
              "Augmenter la résistance R"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Augmenter C diminue la réactance capacitive 1/(Cω) pour la faire converger vers Lω."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Bilan des puissances réactives",
          "stepTheme": "Échange d'énergie",
          "stepBadge": "Puissance réactive Qr",
          "paragraphText": "En régime inductif, la bobine absorbe de la puissance réactive fournie par le réseau électrique. En régime capacitif, c'est le condensateur qui fournit de la puissance réactive au circuit : il agit comme un générateur d'énergie réactive.",
          "exercise": {
            "id": "terminale_d_physique_l10_p06_q7",
            "type": "mcq",
            "prompt": "Quel composant électrique fournit naturellement de la puissance réactive dans une installation industrielle alimentée en courant alternatif ?",
            "options": [
              "Une batterie de condensateurs (composant capacitif)",
              "Un moteur asynchrone à forte inductance",
              "Un conducteur ohmique de chauffage",
              "Une bobine de lissage ferromagnétique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les condensateurs ont un déphasage courant-tension de +90°, ce qui leur permet de fournir de la puissance réactive compensant l'inductance des moteurs."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l10_p06_q1",
          "type": "mcq",
          "prompt": "Un circuit RLC série présente un déphasage φ = +0,65 rad. Quelle est la nature de ce circuit ?",
          "options": [
            "Le circuit est inductif",
            "Le circuit est capacitif",
            "Le circuit est à la résonance",
            "Le circuit est en court-circuit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un déphasage φ > 0 signifie que la tension est en avance sur le courant, caractéristique du comportement inductif."
        },
        {
          "id": "terminale_d_physique_l10_p06_q2",
          "type": "mcq",
          "prompt": "À basse fréquence (par exemple N = 20 Hz pour un circuit où N0 = 200 Hz), quel est le comportement dominant d'un circuit RLC série ?",
          "options": [
            "Capacitif car 1/(Cω) devient très grand devant Lω",
            "Inductif car la bobine s'oppose au passage du courant continu",
            "Purement résistif",
            "Supraconducteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Quand ω tend vers zéro, 1/(Cω) tend vers l'infini tandis que Lω tend vers zéro : le condensateur domine largement (circuit capacitif)."
        },
        {
          "id": "terminale_d_physique_l10_p06_q3",
          "type": "mcq",
          "prompt": "Quelle égalité caractérise le passage d'un circuit RLC série par son état purement résistif ?",
          "options": [
            "L · C · ω² = 1",
            "L · ω = R",
            "C · ω = R",
            "L · C = R²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lω = 1/(Cω) <=> LCω² = 1, condition fondamentale de la résonance d'intensité."
        },
        {
          "id": "terminale_d_physique_l10_p06_q4",
          "type": "mcq",
          "prompt": "Sur un écran d'oscilloscope, le zéro montant de la tension u(t) apparaît 1,5 ms APRÈS le zéro montant de l'intensité i(t). Quelle est la nature du dipôle ?",
          "options": [
            "Capacitif car la tension u(t) est en retard temporel sur le courant i(t)",
            "Inductif car la bobine retarde le courant",
            "Résistif pur car l'amplitude est constante",
            "Oscillant amorti"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si u apparaît après i, u est en retard par rapport à i (φ < 0) : le circuit est capacitif."
        },
        {
          "id": "terminale_d_physique_l10_p06_q5",
          "type": "mcq",
          "prompt": "Un circuit RLC dont la fréquence propre est N0 = 500 Hz est branché sur un GBF réglé à N = 120 Hz. À quelle fréquence oscillent la tension et le courant dans le circuit ?",
          "options": [
            "À N = 120 Hz (la fréquence imposée par l'excitateur)",
            "À N0 = 500 Hz (la fréquence propre du circuit)",
            "À la moyenne N = 310 Hz",
            "À la différence N = 380 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En régime forcé permanent, le système oscille rigoureusement à la fréquence imposée par le générateur excitateur (120 Hz)."
        },
        {
          "id": "terminale_d_physique_l10_p06_q6",
          "type": "mcq",
          "prompt": "Pour un circuit RLC fonctionnant à une fréquence fixe où 1/(Cω) > Lω (capacitif), quelle action permet de rapprocher le circuit de la résonance ?",
          "options": [
            "Augmenter la capacité C du condensateur",
            "Diminuer la capacité C",
            "Diminuer l'inductance L",
            "Augmenter la résistance R"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Augmenter C diminue la réactance capacitive 1/(Cω) pour la faire converger vers Lω."
        },
        {
          "id": "terminale_d_physique_l10_p06_q7",
          "type": "mcq",
          "prompt": "Quel composant électrique fournit naturellement de la puissance réactive dans une installation industrielle alimentée en courant alternatif ?",
          "options": [
            "Une batterie de condensateurs (composant capacitif)",
            "Un moteur asynchrone à forte inductance",
            "Un conducteur ohmique de chauffage",
            "Une bobine de lissage ferromagnétique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les condensateurs ont un déphasage courant-tension de +90°, ce qui leur permet de fournir de la puissance réactive compensant l'inductance des moteurs."
        }
      ]
    }
  ]
};
