import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : Terminales C, D, E — Thème : Électricité — Titre : Résonance d'intensité d'un circuit RLC série
export const PHYSIQUE_TLE_CD_L11_RESONANCE_INTENSITE: CurriculumChapter = {
  "id": "terminale_d_physique_l11_resonance_intensite",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ],
  "order": 11,
  "title": "Leçon 11 : Résonance d'intensité d'un circuit RLC série",
  "summary": "Étude expérimentale et théorique approfondie de la résonance d'intensité dans un circuit RLC série : tracé de la courbe I = f(N), condition d'accord LCω0² = 1, fréquence propre N0 = 1/(2π√LC) indépendante de la résistance R, impédance minimale Z0 = Rtot, bande passante à -3 dB ΔN = Rtot/(2πL), facteur de qualité Q = N0/ΔN = (1/Rtot)√(L/C), acuité et sélectivité du dipôle, phénomène de surtension UC = UL = Q·U et applications technologiques (accord des récepteurs radio FM, filtres et acoustique).",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : Terminales C, D, E – Thème : Électricité – Résonance d'intensité d'un circuit RLC série)",
  "points": [
    {
      "id": "terminale_d_physique_l11_p01",
      "order": 1,
      "title": "Mise en évidence expérimentale et tracé de la courbe I = f(N)",
      "summary": "Montage expérimental sous tension efficace constante, relevé des mesures d'intensité en fonction de la fréquence, allure en cloche de la courbe de résonance, influence de la résistance sur l'amplitude du pic et l'acuité.",
      "conceptExplanation": "1. Montage expérimental :\nOn associe en série un conducteur ohmique de résistance R, une bobine d'inductance L et de résistance r, un condensateur de capacité C et un ampèremètre de résistance négligeable. L'ensemble est alimenté par un générateur basse fréquence (GBF) dont la tension efficace U est maintenue rigoureusement constante.\n\n2. Protocole de mesure :\nTout en conservant la tension efficace U fixe, on fait varier la fréquence N de la tension délivrée par le GBF et on note pour chaque fréquence la valeur de l'intensité efficace I indiquée par l'ampèremètre. L'expérience est répétée pour deux valeurs distinctes de la résistance (par exemple R1 = 36 Ω et R2 = 200 Ω).\n\n3. Allure de la courbe de résonance I = f(N) :\nLe tracé de I en fonction de N met en évidence une courbe en forme de cloche caractéristique :\n- Aux très basses fréquences (N → 0) : l'intensité efficace I est quasi nulle car le condensateur s'oppose au passage du courant (ZC = 1/Cω → ∞) ;\n- Lorsque la fréquence N augmente, l'intensité efficace I s'élève progressivement, passe par un maximum absolu I0 pour une fréquence particulière notée N0, puis redécroît ;\n- Aux très hautes fréquences (N → ∞) : l'intensité efficace I tend à nouveau vers zéro car la bobine oppose une impédance immense (ZL = Lω → ∞).\n\n4. Définition de la résonance d'intensité :\nLe phénomène par lequel l'intensité efficace du courant dans un circuit oscillant forcé passe par un maximum sous une tension excitatrice constante est appelé la résonance d'intensité. La fréquence N0 à laquelle ce maximum est atteint est la fréquence de résonance.\n\n5. Influence fondamentale de la résistance R :\n- Le maximum d'intensité I0 diminue lorsque la résistance R augmente (par exemple I0 = 54,4 mA pour R = 36 Ω contre I'0 = 20 mA pour R = 200 Ω) ;\n- Pour une faible résistance, la courbe présente un pic très pointu et étroit : la résonance est dite aiguë ;\n- Pour une forte résistance, la courbe est aplatie et évasée : la résonance est dite floue.",
      "keyRule": "À la résonance d'intensité, l'intensité efficace I atteint son maximum I0 sous tension U constante. Ce maximum I0 = U/Rtot diminue quand R augmente, et la courbe devient plus aplatie (résonance floue).",
      "formulas": [
        {
          "name": "Intensité maximale de résonance",
          "formula": "I_0 = \\frac{U}{R_\\text{tot}} = \\frac{U}{R + r}",
          "note": "U = tension efficace constante, Rtot = résistance totale"
        }
      ],
      "workedExample": {
        "title": "Analyse d'un tableau de mesures de résonance d'intensité",
        "statement": "On alimente un dipôle RLC sous une tension efficace constante U = 6,0 V. On relève les valeurs suivantes de l'intensité efficace I en fonction de la fréquence N :\\nN = 100 Hz : I = 85 mA ; N = 180 Hz : I = 220 mA ; N = 200 Hz : I = 300 mA ; N = 220 Hz : I = 215 mA ; N = 300 Hz : I = 92 mA.\\n1. Quelle est la fréquence de résonance N0 et quelle est la valeur de l'intensité maximale I0 ?\\n2. Détermine la résistance totale Rtot du circuit.\\n3. Si l'on remplace le résistor par un autre de résistance trois fois plus grande, que devient la valeur de l'intensité au pic I0 ?",
        "methodSteps": [
          "Étape 1 : Repérer le sommet de la courbe : L'intensité maximale I0 = 300 mA = 0,30 A est observée pour la fréquence N0 = 200 Hz. La fréquence de résonance est donc N0 = 200 Hz.",
          "Étape 2 : Calculer la résistance totale : À la résonance, l'impédance se réduit à la résistance totale : Rtot = U / I0 = 6,0 V / 0,30 A = 20 Ω.",
          "Étape 3 : Examiner l'effet de l'augmentation de résistance : Si Rtot passe à 3 × 20 = 60 Ω, la nouvelle intensité maximale de résonance sera I'0 = U / R'tot = 6,0 / 60 = 0,10 A = 100 mA (intensité divisée par 3, résonance plus floue)."
        ],
        "conclusion": "La résonance a lieu à N0 = 200 Hz avec un pic à 300 mA fixé par la résistance Rtot = 20 Ω. Une résistance plus grande abaisse le pic sans modifier la fréquence centrale."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison des courbes de résonance pour faible et forte résistance",
        "tableData": {
          "headers": [
            "Caractéristique",
            "Faible résistance (R = 36 Ω)",
            "Forte résistance (R = 200 Ω)",
            "Interprétation physique"
          ],
          "rows": [
            [
              "Fréquence de résonance N0",
              "N0 = 211 Hz",
              "N0 = 211 Hz",
              "Strictement invariable (indépendante de R)"
            ],
            [
              "Intensité maximale I0",
              "I0 = 54,4 mA (élevée)",
              "I'0 = 20,0 mA (faible)",
              "I0 inversement proportionnelle à Rtot"
            ],
            [
              "Forme de la cloche",
              "Pic pointu et resserré",
              "Courbe aplatie et évasée",
              "L'amortissement élargit la courbe"
            ],
            [
              "Type de résonance",
              "Résonance aiguë (très sélective)",
              "Résonance floue (peu sélective)",
              "Capacité de filtrage d'une station radio"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du phénomène de résonance d'intensité",
          "stepTheme": "Phénomène de résonance",
          "stepBadge": "I = Imax sous U fixe",
          "paragraphText": "La résonance d'intensité est le phénomène physique qui se produit dans un circuit oscillant forcé lorsqu'en faisant varier la fréquence de la tension d'alimentation à valeur efficace constante, l'intensité efficace du courant atteint un maximum absolu I0.",
          "exercise": {
            "id": "terminale_d_physique_l11_p01_q1",
            "type": "mcq",
            "prompt": "À quelle condition observe-t-on la résonance d'intensité dans un circuit RLC série ?",
            "options": [
              "Lorsque la fréquence du GBF est égale à la fréquence propre du circuit (l'intensité efficace passe par un maximum)",
              "Lorsque la résistance du circuit devient infinie",
              "Lorsque la tension efficace du GBF s'annule",
              "Uniquement lorsque le courant est continu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La résonance d'intensité se produit lorsque la fréquence excitatrice coïncide avec la fréquence propre, rendant l'intensité maximale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Comportement asymptotique en très basse et très haute fréquence",
          "stepTheme": "Allure de cloche",
          "stepBadge": "I -> 0 aux extrêmes",
          "paragraphText": "La courbe I = f(N) s'annule aux deux extrémités : en très basse fréquence, le condensateur bloque le courant continu (ZC → ∞) ; en très haute fréquence, la bobine s'oppose aux variations ultrarapides (ZL → ∞). Le courant ne peut circuler de façon significative qu'autour de N0.",
          "exercise": {
            "id": "terminale_d_physique_l11_p01_q2",
            "type": "mcq",
            "prompt": "Pourquoi l'intensité efficace I tend-elle vers zéro lorsque la fréquence du générateur devient extrêmement élevée (N → ∞) dans un circuit RLC série ?",
            "options": [
              "Parce que l'impédance de la bobine ZL = Lω devient gigantesque et bloque le courant",
              "Parce que le condensateur entre en court-circuit",
              "Parce que la résistance ohmique s'évapore",
              "Parce que la vitesse de la lumière est dépassée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À très haute fréquence, la réactance inductive Lω tend vers l'infini, bloquant le passage du courant."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Influence de la résistance sur l'amplitude maximale I0",
          "stepTheme": "Hauteur du pic",
          "stepBadge": "I0 ∝ 1 / Rtot",
          "paragraphText": "À la résonance, l'impédance se réduisant à la résistance totale (Z = Rtot), l'intensité maximale I0 = U / Rtot est inversement proportionnelle à la résistance. Diminuer la résistance augmente considérablement l'amplitude du courant au pic.",
          "exercise": {
            "id": "terminale_d_physique_l11_p01_q3",
            "type": "mcq",
            "prompt": "Sous une tension fixe U = 12 V, un circuit RLC présente une résonance d'intensité à I0 = 400 mA. Si l'on double la résistance totale du circuit sans rien changer d'autre, que vaut le nouveau pic d'intensité I'0 ?",
            "options": [
              "I'0 = 200 mA (intensité divisée par 2)",
              "I'0 = 800 mA",
              "I'0 = 400 mA",
              "I'0 = 282 mA"
            ],
            "correctAnswerIndex": 0,
            "explanation": "I0 = U / Rtot. Doubler Rtot divise l'intensité maximale par 2 : 400 / 2 = 200 mA."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Lecture de N0 sur un graphique expérimental",
          "stepTheme": "Lecture graphique",
          "stepBadge": "Abscisse du sommet",
          "paragraphText": "Pour déterminer la fréquence de résonance N0 à partir d'un relevé expérimental ou d'une courbe tracée, on repère le point culminant (le sommet de la cloche) et on lit son abscisse sur l'axe horizontal des fréquences.",
          "exercise": {
            "id": "terminale_d_physique_l11_p01_q4",
            "type": "mcq",
            "prompt": "Sur une courbe expérimentale I = f(N), le sommet de la cloche a pour coordonnées (250 Hz ; 60 mA). Que vaut la fréquence de résonance ?",
            "options": [
              "N0 = 250 Hz",
              "N0 = 60 Hz",
              "N0 = 125 Hz",
              "N0 = 500 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'abscisse du maximum de la courbe d'intensité donne directement la fréquence de résonance N0 = 250 Hz."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Attention à la stabilité de la tension d'alimentation U",
          "stepTheme": "Condition expérimentale",
          "stepBadge": "U = Cte indispensable",
          "paragraphText": "Lors du tracé de la courbe I = f(N), il est capital de vérifier au voltmètre que la tension efficace U du GBF reste rigoureusement constante à chaque changement de fréquence. De nombreux générateurs ont une tension qui s'effondre lorsque le courant augmente en raison de leur impédance interne de sortie (souvent 50 Ω).",
          "exercise": {
            "id": "terminale_d_physique_l11_p01_q5",
            "type": "mcq",
            "prompt": "Quelle précaution expérimentale doit-on impérativement respecter lors du tracé de la courbe I = f(N) pour que la courbe soit valide ?",
            "options": [
              "Réajuster le bouton d'amplitude du GBF à chaque fréquence pour maintenir la tension efficace U rigoureusement constante",
              "Changer de bobine à chaque mesure",
              "Maintenir la température de la pièce à 0 °C",
              "Remplacer le condensateur par une résistance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La courbe I = f(N) n'a de sens que si la tension excitatrice U reste parfaitement constante tout au long du balayage en fréquence."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Résonance aiguë versus résonance floue",
          "stepTheme": "Acuité de résonance",
          "stepBadge": "Aiguë = sélectif",
          "paragraphText": "Un circuit à faible amortissement (petite résistance R) donne une résonance aiguë : le courant s'effondre dès qu'on s'écarte de quelques Hertz de N0. À l'inverse, une forte résistance amortit le dipôle et élargit le sommet en une résonance floue qui réagit à une vaste plage de fréquences.",
          "exercise": {
            "id": "terminale_d_physique_l11_p01_q6",
            "type": "mcq",
            "prompt": "Pour sélectionner avec précision une unique fréquence radio sans interférences avec les canaux adjacents, quel type de résonance doit présenter le circuit d'accord ?",
            "options": [
              "Une résonance aiguë (faible résistance, pic très pointu)",
              "Une résonance floue (forte résistance, pic très large)",
              "Un circuit apériodique sans résonance",
              "Un circuit sans condensateur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une résonance aiguë et étroite garantit une haute sélectivité en ne laissant passer que l'onde de la station sélectionnée."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Invariance de la fréquence de résonance vis-à-vis de la résistance",
          "stepTheme": "Indépendance de N0",
          "stepBadge": "N0 indépendant de R",
          "paragraphText": "L'expérience montre de façon éclatante que les courbes de résonance obtenues pour R = 36 Ω et pour R = 200 Ω atteignent leur maximum à la MÊME fréquence exacte N0 = 211 Hz. La résistance modifie la hauteur et la largeur du pic, mais ne déplace aucunement son abscisse !",
          "exercise": {
            "id": "terminale_d_physique_l11_p01_q7",
            "type": "mcq",
            "prompt": "Comment varie la fréquence de résonance N0 d'un dipôle RLC série lorsque l'on remplace le résistor de 36 Ω par un résistor de 200 Ω ?",
            "options": [
              "N0 reste rigoureusement identique car elle ne dépend que de L et C",
              "N0 augmente proportionnellement à la résistance",
              "N0 diminue de moitié",
              "N0 est multipliée par √(200/36)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fréquence de résonance d'un circuit RLC série est une grandeur propre qui dépend uniquement de L et C : N0 = 1/(2π√LC)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l11_p01_q1",
          "type": "mcq",
          "prompt": "À quelle condition observe-t-on la résonance d'intensité dans un circuit RLC série ?",
          "options": [
            "Lorsque la fréquence du GBF est égale à la fréquence propre du circuit (l'intensité efficace passe par un maximum)",
            "Lorsque la résistance du circuit devient infinie",
            "Lorsque la tension efficace du GBF s'annule",
            "Uniquement lorsque le courant est continu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La résonance d'intensité se produit lorsque la fréquence excitatrice coïncide avec la fréquence propre, rendant l'intensité maximale."
        },
        {
          "id": "terminale_d_physique_l11_p01_q2",
          "type": "mcq",
          "prompt": "Pourquoi l'intensité efficace I tend-elle vers zéro lorsque la fréquence du générateur devient extrêmement élevée (N → ∞) dans un circuit RLC série ?",
          "options": [
            "Parce que l'impédance de la bobine ZL = Lω devient gigantesque et bloque le courant",
            "Parce que le condensateur entre en court-circuit",
            "Parce que la résistance ohmique s'évapore",
            "Parce que la vitesse de la lumière est dépassée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À très haute fréquence, la réactance inductive Lω tend vers l'infini, bloquant le passage du courant."
        },
        {
          "id": "terminale_d_physique_l11_p01_q3",
          "type": "mcq",
          "prompt": "Sous une tension fixe U = 12 V, un circuit RLC présente une résonance d'intensité à I0 = 400 mA. Si l'on double la résistance totale du circuit sans rien changer d'autre, que vaut le nouveau pic d'intensité I'0 ?",
          "options": [
            "I'0 = 200 mA (intensité divisée par 2)",
            "I'0 = 800 mA",
            "I'0 = 400 mA",
            "I'0 = 282 mA"
          ],
          "correctAnswerIndex": 0,
          "explanation": "I0 = U / Rtot. Doubler Rtot divise l'intensité maximale par 2 : 400 / 2 = 200 mA."
        },
        {
          "id": "terminale_d_physique_l11_p01_q4",
          "type": "mcq",
          "prompt": "Sur une courbe expérimentale I = f(N), le sommet de la cloche a pour coordonnées (250 Hz ; 60 mA). Que vaut la fréquence de résonance ?",
          "options": [
            "N0 = 250 Hz",
            "N0 = 60 Hz",
            "N0 = 125 Hz",
            "N0 = 500 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'abscisse du maximum de la courbe d'intensité donne directement la fréquence de résonance N0 = 250 Hz."
        },
        {
          "id": "terminale_d_physique_l11_p01_q5",
          "type": "mcq",
          "prompt": "Quelle précaution expérimentale doit-on impérativement respecter lors du tracé de la courbe I = f(N) pour que la courbe soit valide ?",
          "options": [
            "Réajuster le bouton d'amplitude du GBF à chaque fréquence pour maintenir la tension efficace U rigoureusement constante",
            "Changer de bobine à chaque mesure",
            "Maintenir la température de la pièce à 0 °C",
            "Remplacer le condensateur par une résistance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La courbe I = f(N) n'a de sens que si la tension excitatrice U reste parfaitement constante tout au long du balayage en fréquence."
        },
        {
          "id": "terminale_d_physique_l11_p01_q6",
          "type": "mcq",
          "prompt": "Pour sélectionner avec précision une unique fréquence radio sans interférences avec les canaux adjacents, quel type de résonance doit présenter le circuit d'accord ?",
          "options": [
            "Une résonance aiguë (faible résistance, pic très pointu)",
            "Une résonance floue (forte résistance, pic très large)",
            "Un circuit apériodique sans résonance",
            "Un circuit sans condensateur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une résonance aiguë et étroite garantit une haute sélectivité en ne laissant passer que l'onde de la station sélectionnée."
        },
        {
          "id": "terminale_d_physique_l11_p01_q7",
          "type": "mcq",
          "prompt": "Comment varie la fréquence de résonance N0 d'un dipôle RLC série lorsque l'on remplace le résistor de 36 Ω par un résistor de 200 Ω ?",
          "options": [
            "N0 reste rigoureusement identique car elle ne dépend que de L et C",
            "N0 augmente proportionnellement à la résistance",
            "N0 diminue de moitié",
            "N0 est multipliée par √(200/36)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fréquence de résonance d'un circuit RLC série est une grandeur propre qui dépend uniquement de L et C : N0 = 1/(2π√LC)."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l11_p02",
      "order": 2,
      "title": "Fréquence propre et condition fondamentale de résonance",
      "summary": "Condition mathématique d'annulation de la réactance LCω0² = 1, expression de la pulsation propre ω0 = 1/√(LC) et de la fréquence de résonance N0 = 1/(2π√LC), impédance minimale Z0 = Rtot, phase nulle φ = 0 et identité avec les oscillations libres.",
      "conceptExplanation": "1. Condition mathématique de la résonance d'intensité :\nL'impédance générale du circuit RLC série est donnée par :\nZ = \\sqrt{(R + r)^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2}.\nPuisque le terme au carré (Lω - 1/Cω)² est toujours positif ou nul, Z est minimale lorsque ce terme s'annule exactement :\nL\\omega_0 - \\frac{1}{C\\omega_0} = 0 \\iff L\\omega_0 = \\frac{1}{C\\omega_0} \\iff L\\,C\\,\\omega_0^2 = 1.\n\n2. Expressions de la pulsation et de la fréquence de résonance :\nDe la condition LCω0² = 1, on déduit immédiatement la pulsation propre du circuit :\n\\omega_0 = \\frac{1}{\\sqrt{L\\,C}} \\quad (\\text{en rad}\\cdot\\text{s}^{-1}).\nPuisque ω0 = 2π N0, la fréquence de résonance s'écrit :\nN_0 = \\frac{1}{2\\pi\\,\\sqrt{L\\,C}} \\quad (\\text{en Hertz, Hz}).\nCette fréquence est rigoureusement identique à la fréquence propre des oscillations libres non amorties du même circuit LC !\n\n3. Propriétés remarquables à la résonance d'intensité :\n- Impédance minimale : Z = Z0 = R_tot = R + r (le circuit se comporte comme un conducteur ohmique ordinaire) ;\n- Intensité efficace maximale : I0 = U / Z0 = U / (R + r) ;\n- Déphasage nul : tan φ = [Lω0 - 1/(Cω0)] / Rtot = 0 => φ = 0 rad. La tension délivrée par le générateur et l'intensité du courant sont rigoureusement en phase ;\n- Facteur de puissance unitaire : cos φ = Rtot / Z0 = Rtot / Rtot = 1.",
      "keyRule": "À la résonance d'intensité : LCω0² = 1, N0 = 1/(2π√LC), Zmin = Rtot = R+r, I0 = U/(R+r), φ = 0 (u et i en phase) et cos φ = 1.",
      "formulas": [
        {
          "name": "Condition de résonance d'intensité",
          "formula": "L\\,C\\,\\omega_0^2 = 1 \\iff L\\omega_0 = \\frac{1}{C\\omega_0}",
          "note": "Annulation de la réactance"
        },
        {
          "name": "Fréquence propre de résonance",
          "formula": "N_0 = \\frac{1}{2\\pi\\,\\sqrt{L\\,C}}",
          "note": "N0 en Hz, L en H, C en F"
        },
        {
          "name": "Impédance et déphasage à la résonance",
          "formula": "Z_0 = R_\\text{tot} = R + r \\quad ; \\quad \\varphi = 0 \\quad ; \\quad \\cos\\varphi = 1",
          "note": "Comportement purement résistif"
        }
      ],
      "workedExample": {
        "title": "Calcul des grandeurs caractéristiques à la résonance",
        "statement": "Un circuit RLC série comporte une bobine d'inductance L = 0,20 H et de résistance interne r = 5,0 Ω, un conducteur ohmique R = 25 Ω et un condensateur de capacité C = 5,0 µF. Il est alimenté par un GBF de tension efficace U = 12 V.\\n1. Calcule la pulsation propre ω0 et la fréquence de résonance N0.\\n2. Calcule l'impédance du circuit et l'intensité efficace I0 à la résonance.\\n3. Que valent les tensions efficaces UR aux bornes du résistor, UL aux bornes de la bobine et UC aux bornes du condensateur à la résonance ?",
        "methodSteps": [
          "Étape 1 : Calculer ω0 et N0 :\\nω0 = 1 / √(LC) = 1 / √(0,20 × 5,0 × 10⁻⁶) = 1 / √(1,0 × 10⁻⁶) = 1 / 10⁻³ = 1000 rad·s⁻¹.\\nN0 = ω0 / (2π) = 1000 / (2 × 3,1416) ≈ 159,2 Hz.",
          "Étape 2 : Calculer l'impédance et l'intensité :\\nRtot = R + r = 25 + 5,0 = 30 Ω.\\nÀ la résonance, Z = Rtot = 30 Ω.\\nI0 = U / Rtot = 12 V / 30 Ω = 0,40 A = 400 mA.",
          "Étape 3 : Calculer les tensions partielles :\\nUR = R × I0 = 25 × 0,40 = 10,0 V.\\nUL_pure = Lω0 × I0 = (0,20 × 1000) × 0,40 = 200 × 0,40 = 80 V.\\nUC = I0 / (Cω0) = 0,40 / (5,0 × 10⁻⁶ × 1000) = 0,40 / (5,0 × 10⁻³) = 80 V.\\nTension aux bornes de la bobine réelle : UL = Z_bobine × I0 = √(r² + L²ω0²) × I0 = √(5² + 200²) × 0,40 ≈ 200,06 × 0,40 ≈ 80,0 V."
        ],
        "conclusion": "À la résonance (159,2 Hz), l'intensité atteint 400 mA. Les tensions partielles aux bornes de L et C atteignent chacune 80 V, soit près de 7 fois la tension totale délivrée par le générateur (12 V) !"
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Diagramme de Fresnel à la résonance d'intensité",
        "tableData": {
          "headers": [
            "Composant",
            "Vecteur de Fresnel",
            "Norme à la résonance",
            "Angle de phase",
            "Résultat vectoriel"
          ],
          "rows": [
            [
              "Résistance Rtot",
              "V_R",
              "VR = Rtot · I0 = U",
              "0 rad (horizontal)",
              "Confondue avec la tension totale U"
            ],
            [
              "Inductance pure L",
              "V_L",
              "VL = Lω0 · I0",
              "+π/2 (+90° vers le haut)",
              "Compense exactement VC"
            ],
            [
              "Condensateur C",
              "V_C",
              "VC = I0 / (Cω0)",
              "-π/2 (-90° vers le bas)",
              "Compense exactement VL (VL = VC)"
            ],
            [
              "Tension totale U",
              "V = VR + VL + VC",
              "U = VR = Rtot · I0",
              "φ = 0 rad (en phase)",
              "Le triangle se réduit à un segment horizontal"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Annulation de la réactance à la résonance",
          "stepTheme": "Condition algébrique",
          "stepBadge": "Lω0 - 1/(Cω0) = 0",
          "paragraphText": "La résonance d'intensité correspond au cas mathématique où la réactance inductive Lω0 et la réactance capacitive 1/(Cω0) ont exactement la même valeur absolue : Lω0 = 1/(Cω0). Le terme sous la racine s'annule.",
          "exercise": {
            "id": "terminale_d_physique_l11_p02_q1",
            "type": "mcq",
            "prompt": "Pour une bobine d'inductance L = 0,10 H, quelle doit être la pulsation ω0 pour être en résonance avec un condensateur C = 10 µF ?",
            "options": [
              "ω0 = 1000 rad·s⁻¹",
              "ω0 = 100 rad·s⁻¹",
              "ω0 = 314 rad·s⁻¹",
              "ω0 = 10 000 rad·s⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ω0 = 1 / √(LC) = 1 / √(0,10 × 10 × 10⁻⁶) = 1 / √(10⁻⁶) = 1 / 10⁻³ = 1000 rad·s⁻¹."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Impédance purement résistive Z = Rtot",
          "stepTheme": "Impédance à résonance",
          "stepBadge": "Z = Rtot",
          "paragraphText": "À la résonance d'intensité, le dipôle RLC série perd tout caractère inductif ou capacitif. L'impédance globale est minimale et se réduit à la seule résistance ohmique du circuit : Z = Rtot = R + r.",
          "exercise": {
            "id": "terminale_d_physique_l11_p02_q2",
            "type": "mcq",
            "prompt": "Un circuit RLC en résonance est alimenté sous U = 20 V et parcouru par I0 = 0,50 A. Que vaut la résistance totale Rtot du circuit ?",
            "options": [
              "Rtot = 40 Ω",
              "Rtot = 10 Ω",
              "Rtot = 0,025 Ω",
              "Rtot = 20 Ω"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À la résonance, Z = Rtot = U / I0 = 20 / 0,50 = 40 Ω."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Déphasage nul entre tension et courant",
          "stepTheme": "Phase à résonance",
          "stepBadge": "φ = 0 rad",
          "paragraphText": "À la résonance, tan φ = 0 => φ = 0 rad. La tension appliquée par le générateur et l'intensité du courant oscillent rigoureusement en phase : elles passent par zéro et franchissent leurs valeurs maximales exactement aux mêmes instants.",
          "exercise": {
            "id": "terminale_d_physique_l11_p02_q3",
            "type": "mcq",
            "prompt": "Que visualise-t-on sur un oscilloscope bicourbe lorsque le circuit RLC atteint la résonance d'intensité ?",
            "options": [
              "Les deux sinusoïdes de tension u(t) et de courant i(t) sont parfaitement en phase (aucun décalage horizontal)",
              "Les deux sinusoïdes sont en opposition de phase à 180°",
              "La tension du générateur s'annule complètement",
              "Les deux courbes se décalent d'un quart de période"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À la résonance, le déphasage s'annule (φ = 0) : les deux sinusoïdes sont rigoureusement en phase."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calcul de la fréquence propre N0",
          "stepTheme": "Formule de Thomson",
          "stepBadge": "N0 = 1 / (2π√LC)",
          "paragraphText": "La formule de Thomson N0 = 1 / (2π√LC) permet de calculer la fréquence de résonance. Si l'on connaît deux grandeurs parmi N0, L et C, on en déduit la troisième : C = 1 / (4π² N0² L) ou L = 1 / (4π² N0² C).",
          "exercise": {
            "id": "terminale_d_physique_l11_p02_q4",
            "type": "mcq",
            "prompt": "On souhaite obtenir une résonance à la fréquence N0 = 1000 Hz avec une bobine d'inductance L = 25 mH (0,025 H). Quelle capacité C doit avoir le condensateur ?",
            "options": [
              "C ≈ 1,01 µF",
              "C ≈ 10,1 µF",
              "C ≈ 0,10 µF",
              "C ≈ 100 µF"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C = 1 / [4π² N0² L] = 1 / [4π² × 10⁶ × 0,025] = 1 / [π² × 10⁵] ≈ 1 / (9,8696 × 10⁵) ≈ 1,013 × 10⁻⁶ F ≈ 1,01 µF."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confusion entre résonance d'intensité et résonance de charge/tension",
          "stepTheme": "Nuance théorique",
          "stepBadge": "Résonance de I ≠ résonance de UC",
          "paragraphText": "En Terminale, la résonance étudiée est rigoureusement la résonance d'INTENSITÉ (I maximal à ω0 = 1/√LC). La résonance de tension aux bornes du condensateur (UC maximal) a lieu à une pulsation légèrement inférieure : ω = ω0 √(1 - 1/(2Q²)). Ne pas confondre les deux concepts.",
          "exercise": {
            "id": "terminale_d_physique_l11_p02_q5",
            "type": "mcq",
            "prompt": "À quelle pulsation précise l'intensité efficace I(ω) atteint-elle son maximum absolu dans un dipôle RLC série ?",
            "options": [
              "À la pulsation propre exacte ω0 = 1 / √(LC), quelle que soit la valeur de la résistance R",
              "À une pulsation qui dépend de la résistance R",
              "À la pulsation ω = 0 rad·s⁻¹",
              "À la pulsation ω = R / L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour l'intensité, le maximum a lieu lorsque l'impédance Z est minimale, ce qui se produit toujours à ω0 = 1/√(LC), indépendamment de R."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Égalité des tensions de réactance VL = VC",
          "stepTheme": "Compensation",
          "stepBadge": "VL = VC = Q U",
          "paragraphText": "À la résonance, la tension efficace aux bornes de l'inductance pure VL = Lω0 I0 et celle aux bornes du condensateur VC = I0 / (Cω0) sont rigoureusement égales en valeur efficace. Comme elles sont en opposition de phase dans la maille, leur somme vectorielle s'annule.",
          "exercise": {
            "id": "terminale_d_physique_l11_p02_q6",
            "type": "mcq",
            "prompt": "Dans un circuit RLC série en résonance alimenté sous 15 V, un voltmètre branché aux bornes de la bobine pure indique 90 V. Que mesurera le voltmètre branché aux bornes du condensateur ?",
            "options": [
              "Exactement 90 V",
              "15 V",
              "105 V",
              "0 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À la résonance, VL = VC = Q U. Les deux tensions efficaces sont rigoureusement identiques : 90 V."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Facteur de puissance unitaire à la résonance",
          "stepTheme": "Rendement énergétique",
          "stepBadge": "cos φ = 1",
          "paragraphText": "Puisque φ = 0 rad, le facteur de puissance cos φ est égal à 1. Toute la puissance apparente fournie par le générateur est intégralement convertie en puissance active consommée par effet Joule dans les résistances : P = U · I0.",
          "exercise": {
            "id": "terminale_d_physique_l11_p02_q7",
            "type": "mcq",
            "prompt": "Que vaut le facteur de puissance cos φ d'un dipôle RLC série lorsque le circuit est à la résonance d'intensité ?",
            "options": [
              "cos φ = 1 (valeur maximale possible)",
              "cos φ = 0",
              "cos φ = 0,707",
              "cos φ = -1"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À la résonance, φ = 0 rad, donc cos φ = cos(0) = 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l11_p02_q1",
          "type": "mcq",
          "prompt": "Pour une bobine d'inductance L = 0,10 H, quelle doit être la pulsation ω0 pour être en résonance avec un condensateur C = 10 µF ?",
          "options": [
            "ω0 = 1000 rad·s⁻¹",
            "ω0 = 100 rad·s⁻¹",
            "ω0 = 314 rad·s⁻¹",
            "ω0 = 10 000 rad·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ω0 = 1 / √(LC) = 1 / √(0,10 × 10 × 10⁻⁶) = 1 / √(10⁻⁶) = 1 / 10⁻³ = 1000 rad·s⁻¹."
        },
        {
          "id": "terminale_d_physique_l11_p02_q2",
          "type": "mcq",
          "prompt": "Un circuit RLC en résonance est alimenté sous U = 20 V et parcouru par I0 = 0,50 A. Que vaut la résistance totale Rtot du circuit ?",
          "options": [
            "Rtot = 40 Ω",
            "Rtot = 10 Ω",
            "Rtot = 0,025 Ω",
            "Rtot = 20 Ω"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À la résonance, Z = Rtot = U / I0 = 20 / 0,50 = 40 Ω."
        },
        {
          "id": "terminale_d_physique_l11_p02_q3",
          "type": "mcq",
          "prompt": "Que visualise-t-on sur un oscilloscope bicourbe lorsque le circuit RLC atteint la résonance d'intensité ?",
          "options": [
            "Les deux sinusoïdes de tension u(t) et de courant i(t) sont parfaitement en phase (aucun décalage horizontal)",
            "Les deux sinusoïdes sont en opposition de phase à 180°",
            "La tension du générateur s'annule complètement",
            "Les deux courbes se décalent d'un quart de période"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À la résonance, le déphasage s'annule (φ = 0) : les deux sinusoïdes sont rigoureusement en phase."
        },
        {
          "id": "terminale_d_physique_l11_p02_q4",
          "type": "mcq",
          "prompt": "On souhaite obtenir une résonance à la fréquence N0 = 1000 Hz avec une bobine d'inductance L = 25 mH (0,025 H). Quelle capacité C doit avoir le condensateur ?",
          "options": [
            "C ≈ 1,01 µF",
            "C ≈ 10,1 µF",
            "C ≈ 0,10 µF",
            "C ≈ 100 µF"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C = 1 / [4π² N0² L] = 1 / [4π² × 10⁶ × 0,025] = 1 / [π² × 10⁵] ≈ 1 / (9,8696 × 10⁵) ≈ 1,013 × 10⁻⁶ F ≈ 1,01 µF."
        },
        {
          "id": "terminale_d_physique_l11_p02_q5",
          "type": "mcq",
          "prompt": "À quelle pulsation précise l'intensité efficace I(ω) atteint-elle son maximum absolu dans un dipôle RLC série ?",
          "options": [
            "À la pulsation propre exacte ω0 = 1 / √(LC), quelle que soit la valeur de la résistance R",
            "À une pulsation qui dépend de la résistance R",
            "À la pulsation ω = 0 rad·s⁻¹",
            "À la pulsation ω = R / L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour l'intensité, le maximum a lieu lorsque l'impédance Z est minimale, ce qui se produit toujours à ω0 = 1/√(LC), indépendamment de R."
        },
        {
          "id": "terminale_d_physique_l11_p02_q6",
          "type": "mcq",
          "prompt": "Dans un circuit RLC série en résonance alimenté sous 15 V, un voltmètre branché aux bornes de la bobine pure indique 90 V. Que mesurera le voltmètre branché aux bornes du condensateur ?",
          "options": [
            "Exactement 90 V",
            "15 V",
            "105 V",
            "0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À la résonance, VL = VC = Q U. Les deux tensions efficaces sont rigoureusement identiques : 90 V."
        },
        {
          "id": "terminale_d_physique_l11_p02_q7",
          "type": "mcq",
          "prompt": "Que vaut le facteur de puissance cos φ d'un dipôle RLC série lorsque le circuit est à la résonance d'intensité ?",
          "options": [
            "cos φ = 1 (valeur maximale possible)",
            "cos φ = 0",
            "cos φ = 0,707",
            "cos φ = -1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À la résonance, φ = 0 rad, donc cos φ = cos(0) = 1."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l11_p03",
      "order": 3,
      "title": "Bande passante à 3 décibels (3 dB)",
      "summary": "Définition de la bande passante I ≥ I0/√2, fréquences de coupure N1 et N2, largeur de bande passante ΔN = N2 - N1 = Rtot/(2πL) et Δω = Rtot/L, proportionnalité avec la résistance et mesure expérimentale.",
      "conceptExplanation": "1. Définition de la bande passante à 3 dB :\nLa bande passante à 3 décibels (notée BP à -3 dB) d'un circuit RLC série est l'intervalle de fréquences [N1 ; N2] (ou de pulsations [ω1 ; ω2]) pour lesquelles l'intensité efficace I du courant est supérieure ou égale à l'intensité maximale I0 divisée par √2 :\nI \\ge \\frac{I_0}{\\sqrt{2}} \\approx 0,707\\,I_0.\n\n2. Fréquences et pulsations de coupure :\nLes bornes N1 et N2 sont appelées les fréquences de coupure à -3 dB :\n- Pour ces fréquences, I = I0 / √2 ;\n- Comme la puissance active dissipée par effet Joule est P = Rtot · I², à ces fréquences la puissance vaut :\nP = R_\\text{tot} \\cdot \\left(\\frac{I_0}{\\sqrt{2}}\\right)^2 = \\frac{1}{2}\\,R_\\text{tot}\\,I_0^2 = \\frac{P_0}{2}.\nLa bande passante à -3 dB est donc rigoureusement la bande passante à mi-puissance !\n\n3. Expression théorique de la largeur de la bande passante :\nLa condition I = I0 / √2 équivaut à une impédance Z = √2 · Z0 = √2 · Rtot.\nEn injectant dans l'expression de Z :\n(R_\\text{tot})^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2 = 2\\,(R_\\text{tot})^2 \\iff \\left|L\\omega - \\frac{1}{C\\omega}\\right| = R_\\text{tot}.\nLa résolution des deux équations du second degré pour les pulsations positives ω1 et ω2 donne :\n\\Delta\\omega = \\omega_2 - \\omega_1 = \\frac{R_\\text{tot}}{L} \\quad (\\text{en rad}\\cdot\\text{s}^{-1}).\nEn divisant par 2π, la largeur de la bande passante en Hertz s'écrit :\n\\Delta N = N_2 - N_1 = \\frac{R_\\text{tot}}{2\\pi\\,L} = \\frac{R + r}{2\\pi\\,L} \\quad (\\text{en Hz}).\n\n4. Propriétés clés de la bande passante :\n- La largeur ΔN est directement proportionnelle à la résistance totale Rtot : plus un circuit est résistant, plus sa bande passante est large (moins il est sélectif) ;\n- La largeur ΔN est inversement proportionnelle à l'inductance L : une grande inductance resserre la bande passante ;\n- La largeur ΔN est totalement indépendante de la capacité C !",
      "keyRule": "Bande passante à -3 dB : I ≥ I0/√2 (soit P ≥ P0/2). Sa largeur vaut ΔN = N2 - N1 = Rtot / (2πL) en Hz, et Δω = Rtot / L en rad/s. Elle est proportionnelle à Rtot.",
      "formulas": [
        {
          "name": "Condition de la bande passante à 3 dB",
          "formula": "I \\ge \\frac{I_0}{\\sqrt{2}} \\iff P \\ge \\frac{P_0}{2}",
          "note": "I0 / √2 ≈ 0,707 I0"
        },
        {
          "name": "Largeur de bande passante en fréquence (Hz)",
          "formula": "\\Delta N = N_2 - N_1 = \\frac{R_\\text{tot}}{2\\pi\\,L} = \\frac{R + r}{2\\pi\\,L}",
          "note": "ΔN en Hz, Rtot en Ω, L en H"
        },
        {
          "name": "Largeur de bande passante en pulsation (rad/s)",
          "formula": "\\Delta\\omega = \\omega_2 - \\omega_1 = \\frac{R_\\text{tot}}{L}",
          "note": "Δω en rad·s⁻¹"
        }
      ],
      "workedExample": {
        "title": "Calcul de la bande passante d'un circuit RLC",
        "statement": "Un circuit RLC série comprend une bobine d'inductance L = 0,10 H et de résistance r = 6 Ω, un conducteur ohmique R = 30 Ω et un condensateur C = 5,7 µF. À la résonance, l'intensité maximale mesurée est I0 = 54,4 mA.\\n1. Calcule la valeur de l'intensité efficace I aux limites de la bande passante à 3 dB.\\n2. Calcule la largeur théorique de la bande passante ΔN en Hertz et Δω en rad/s.\\n3. Si les mesures graphiques donnent N1 = 181 Hz et N2 = 239 Hz, compare la largeur mesurée à la théorie.",
        "methodSteps": [
          "Étape 1 : Calculer le seuil d'intensité : I_seuil = I0 / √2 = 54,4 mA / 1,4142 ≈ 38,47 mA.",
          "Étape 2 : Calculer la largeur théorique :\\nRésistance totale : Rtot = R + r = 30 + 6 = 36 Ω.\\nΔN = Rtot / (2π L) = 36 / (2 × 3,1416 × 0,10) = 36 / 0,6283 ≈ 57,3 Hz.\\nΔω = Rtot / L = 36 / 0,10 = 360 rad·s⁻¹.",
          "Étape 3 : Comparer avec les mesures graphiques :\\nΔN_mesuré = N2 - N1 = 239 - 181 = 58 Hz.\\nL'écart relatif est inférieur à 1 %, confirmant la précision de la formule théorique."
        ],
        "conclusion": "La bande passante s'étend sur 57,3 Hz autour de la fréquence centrale. Pour toute fréquence comprise entre 181 Hz et 239 Hz, l'intensité efficace reste supérieure à 38,5 mA."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Repères de la bande passante à 3 dB sur la courbe de résonance",
        "tableData": {
          "headers": [
            "Point remarquable",
            "Fréquence / Pulsation",
            "Intensité efficace I",
            "Puissance dissipée P",
            "Déphasage φ"
          ],
          "rows": [
            [
              "Coupure basse",
              "N1 (ou ω1)",
              "I = I0 / √2 ≈ 0,707 I0",
              "P = P0 / 2 (mi-puissance)",
              "φ = -π/4 rad (-45°, capacitif)"
            ],
            [
              "Pic de résonance",
              "N0 (ou ω0)",
              "I = I0 (maximum absolu)",
              "P = P0 (puissance maximale)",
              "φ = 0 rad (en phase, résistif)"
            ],
            [
              "Coupure haute",
              "N2 (ou ω2)",
              "I = I0 / √2 ≈ 0,707 I0",
              "P = P0 / 2 (mi-puissance)",
              "φ = +π/4 rad (+45°, inductif)"
            ],
            [
              "Largeur de bande",
              "ΔN = N2 - N1",
              "I ≥ I0 / √2 sur tout l'intervalle",
              "P ≥ P0 / 2",
              "Intervalle de transmission utile"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du seuil I0 / √2",
          "stepTheme": "Seuil à -3 dB",
          "stepBadge": "I = I0 / √2 ≈ 0,707 I0",
          "paragraphText": "La bande passante à 3 dB est délimitée par les deux fréquences de coupure N1 et N2 pour lesquelles l'intensité efficace du courant chute à 1/√2 (environ 70,7 %) de sa valeur maximale I0.",
          "exercise": {
            "id": "terminale_d_physique_l11_p03_q1",
            "type": "mcq",
            "prompt": "Dans un circuit RLC où l'intensité maximale de résonance est I0 = 80 mA, quelle est la valeur du courant aux bornes de la bande passante à 3 dB ?",
            "options": [
              "I ≈ 56,6 mA",
              "I = 40,0 mA",
              "I = 70,0 mA",
              "I = 26,7 mA"
            ],
            "correctAnswerIndex": 0,
            "explanation": "I = I0 / √2 = 80 / 1,4142 ≈ 56,57 mA."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Équivalence avec la bande passante à mi-puissance",
          "stepTheme": "Mi-puissance",
          "stepBadge": "P = P0 / 2",
          "paragraphText": "Comme la puissance thermique dissipée dans le circuit est P = Rtot I², lorsque le courant vaut I0 / √2, la puissance vaut P = Rtot (I0/√2)² = (1/2) Rtot I0² = P0 / 2. La bande passante à -3 dB correspond exactement à l'intervalle de fréquences où le circuit dissipe au moins la moitié de sa puissance maximale.",
          "exercise": {
            "id": "terminale_d_physique_l11_p03_q2",
            "type": "mcq",
            "prompt": "À la résonance, un circuit dissipe une puissance maximale P0 = 100 W. Quelle puissance dissipe-t-il aux fréquences de coupure N1 et N2 délimitant la bande passante à 3 dB ?",
            "options": [
              "P = 50 W (la moitié exacte de la puissance maximale)",
              "P = 70,7 W",
              "P = 25 W",
              "P = 0 W"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P = R I² = R (I0/√2)² = R I0² / 2 = P0 / 2 = 100 / 2 = 50 W."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Formule théorique de la largeur ΔN = Rtot / (2πL)",
          "stepTheme": "Formule de largeur",
          "stepBadge": "ΔN = Rtot / (2πL)",
          "paragraphText": "La largeur de la bande passante en Hertz s'exprime par le quotient de la résistance totale par 2πL : ΔN = Rtot / (2πL). En pulsation, elle s'écrit simplement Δω = Rtot / L.",
          "exercise": {
            "id": "terminale_d_physique_l11_p03_q3",
            "type": "mcq",
            "prompt": "Un circuit RLC possède une inductance L = 0,50 H et une résistance totale Rtot = 50 Ω. Quelle est la largeur de sa bande passante ΔN en Hertz ?",
            "options": [
              "ΔN ≈ 15,9 Hz",
              "ΔN = 100 Hz",
              "ΔN = 50 Hz",
              "ΔN = 31,8 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ΔN = Rtot / (2πL) = 50 / (2π × 0,50) = 50 / π ≈ 15,92 Hz."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Détermination graphique de ΔN sur la courbe I = f(N)",
          "stepTheme": "Méthode graphique",
          "stepBadge": "Tracé de la droite I0/√2",
          "paragraphText": "Pour déterminer graphiquement la bande passante : 1. Relever la valeur maximale I0 au sommet ; 2. Calculer I0 / √2 ; 3. Tracer la droite horizontale d'ordonnée I0 / √2 ; 4. Noter les deux points d'intersection avec la courbe, dont les abscisses sont N1 et N2 ; 5. Calculer ΔN = N2 - N1.",
          "exercise": {
            "id": "terminale_d_physique_l11_p03_q4",
            "type": "mcq",
            "prompt": "La droite d'ordonnée I0/√2 coupe la courbe de résonance aux fréquences N1 = 475 Hz et N2 = 525 Hz. Quelle est la largeur de la bande passante ΔN ?",
            "options": [
              "ΔN = 50 Hz",
              "ΔN = 500 Hz",
              "ΔN = 25 Hz",
              "ΔN = 1000 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ΔN = N2 - N1 = 525 - 475 = 50 Hz."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confusion sur l'indépendance de ΔN vis-à-vis de la capacité C",
          "stepTheme": "Rôle de C",
          "stepBadge": "C n'intervient pas dans ΔN",
          "paragraphText": "Remarquez bien : la formule ΔN = Rtot / (2πL) ne contient PAS la capacité C ! Modifier la valeur de C déplace le centre de la courbe N0 sans changer d'un seul Hertz la largeur de la bande passante ΔN.",
          "exercise": {
            "id": "terminale_d_physique_l11_p03_q5",
            "type": "mcq",
            "prompt": "Si l'on quadruple la capacité C du condensateur d'un circuit RLC sans modifier R ni L, comment évolue la largeur de la bande passante ΔN ?",
            "options": [
              "ΔN reste rigoureusement inchangée",
              "ΔN est divisée par 2",
              "ΔN est multipliée par 4",
              "ΔN est divisée par 4"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Puisque ΔN = Rtot / (2πL), elle ne dépend pas de C. Modifier C ne fait que décaler la fréquence centrale N0."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Valeur du déphasage aux fréquences de coupure",
          "stepTheme": "Phase aux coupures",
          "stepBadge": "φ = ±π/4 rad (±45°)",
          "paragraphText": "Aux fréquences de coupure, la réactance nette vérifie |Lω - 1/(Cω)| = Rtot. Par conséquent, tan φ = ±Rtot / Rtot = ±1, ce qui impose φ = -π/4 (-45°) pour la coupure basse N1 et φ = +π/4 (+45°) pour la coupure haute N2.",
          "exercise": {
            "id": "terminale_d_physique_l11_p03_q6",
            "type": "mcq",
            "prompt": "Que vaut le déphasage φ entre la tension et le courant à la fréquence de coupure haute N2 d'un dipôle RLC série ?",
            "options": [
              "φ = +π/4 rad (+45°)",
              "φ = -π/4 rad (-45°)",
              "φ = 0 rad",
              "φ = +π/2 rad (+90°)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À N2, Lω > 1/(Cω) et Lω - 1/(Cω) = Rtot, donc tan φ = +1 => φ = +π/4 rad."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Influence de l'inductance L sur la finesse de la bande passante",
          "stepTheme": "Rôle de L",
          "stepBadge": "Grand L => bande étroite",
          "paragraphText": "Pour rendre un circuit d'accord radio extrêmement sélectif (bande passante très étroite pour séparer deux canaux proches), on a intérêt à choisir une inductance L la plus grande possible et une résistance R la plus faible possible.",
          "exercise": {
            "id": "terminale_d_physique_l11_p03_q7",
            "type": "mcq",
            "prompt": "Quelle modification permet de rétrécir la bande passante ΔN d'un circuit résonant ?",
            "options": [
              "Augmenter l'inductance L de la bobine et diminuer la résistance totale",
              "Diminuer l'inductance L et augmenter la résistance",
              "Augmenter la tension du générateur",
              "Changer la couleur des fils de connexion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ΔN = Rtot / (2πL). Diminuer Rtot et augmenter L diminue le quotient, rétrécissant la bande passante."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l11_p03_q1",
          "type": "mcq",
          "prompt": "Dans un circuit RLC où l'intensité maximale de résonance est I0 = 80 mA, quelle est la valeur du courant aux bornes de la bande passante à 3 dB ?",
          "options": [
            "I ≈ 56,6 mA",
            "I = 40,0 mA",
            "I = 70,0 mA",
            "I = 26,7 mA"
          ],
          "correctAnswerIndex": 0,
          "explanation": "I = I0 / √2 = 80 / 1,4142 ≈ 56,57 mA."
        },
        {
          "id": "terminale_d_physique_l11_p03_q2",
          "type": "mcq",
          "prompt": "À la résonance, un circuit dissipe une puissance maximale P0 = 100 W. Quelle puissance dissipe-t-il aux fréquences de coupure N1 et N2 délimitant la bande passante à 3 dB ?",
          "options": [
            "P = 50 W (la moitié exacte de la puissance maximale)",
            "P = 70,7 W",
            "P = 25 W",
            "P = 0 W"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P = R I² = R (I0/√2)² = R I0² / 2 = P0 / 2 = 100 / 2 = 50 W."
        },
        {
          "id": "terminale_d_physique_l11_p03_q3",
          "type": "mcq",
          "prompt": "Un circuit RLC possède une inductance L = 0,50 H et une résistance totale Rtot = 50 Ω. Quelle est la largeur de sa bande passante ΔN en Hertz ?",
          "options": [
            "ΔN ≈ 15,9 Hz",
            "ΔN = 100 Hz",
            "ΔN = 50 Hz",
            "ΔN = 31,8 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ΔN = Rtot / (2πL) = 50 / (2π × 0,50) = 50 / π ≈ 15,92 Hz."
        },
        {
          "id": "terminale_d_physique_l11_p03_q4",
          "type": "mcq",
          "prompt": "La droite d'ordonnée I0/√2 coupe la courbe de résonance aux fréquences N1 = 475 Hz et N2 = 525 Hz. Quelle est la largeur de la bande passante ΔN ?",
          "options": [
            "ΔN = 50 Hz",
            "ΔN = 500 Hz",
            "ΔN = 25 Hz",
            "ΔN = 1000 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ΔN = N2 - N1 = 525 - 475 = 50 Hz."
        },
        {
          "id": "terminale_d_physique_l11_p03_q5",
          "type": "mcq",
          "prompt": "Si l'on quadruple la capacité C du condensateur d'un circuit RLC sans modifier R ni L, comment évolue la largeur de la bande passante ΔN ?",
          "options": [
            "ΔN reste rigoureusement inchangée",
            "ΔN est divisée par 2",
            "ΔN est multipliée par 4",
            "ΔN est divisée par 4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque ΔN = Rtot / (2πL), elle ne dépend pas de C. Modifier C ne fait que décaler la fréquence centrale N0."
        },
        {
          "id": "terminale_d_physique_l11_p03_q6",
          "type": "mcq",
          "prompt": "Que vaut le déphasage φ entre la tension et le courant à la fréquence de coupure haute N2 d'un dipôle RLC série ?",
          "options": [
            "φ = +π/4 rad (+45°)",
            "φ = -π/4 rad (-45°)",
            "φ = 0 rad",
            "φ = +π/2 rad (+90°)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À N2, Lω > 1/(Cω) et Lω - 1/(Cω) = Rtot, donc tan φ = +1 => φ = +π/4 rad."
        },
        {
          "id": "terminale_d_physique_l11_p03_q7",
          "type": "mcq",
          "prompt": "Quelle modification permet de rétrécir la bande passante ΔN d'un circuit résonant ?",
          "options": [
            "Augmenter l'inductance L de la bobine et diminuer la résistance totale",
            "Diminuer l'inductance L et augmenter la résistance",
            "Augmenter la tension du générateur",
            "Changer la couleur des fils de connexion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ΔN = Rtot / (2πL). Diminuer Rtot et augmenter L diminue le quotient, rétrécissant la bande passante."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l11_p04",
      "order": 4,
      "title": "Facteur de qualité Q et sélectivité du circuit",
      "summary": "Définition adimensionnelle du facteur de qualité Q = N0/ΔN = ω0/Δω, expressions analytiques Q = Lω0/Rtot = 1/(Rtot C ω0) = (1/Rtot)√(L/C), acuité de la résonance et critère de sélectivité.",
      "conceptExplanation": "1. Définition du facteur de qualité Q :\nLe facteur de qualité (noté Q, sans unité) caractérise la finesse et la pureté énergétique d'un circuit résonant. Il est défini par le rapport entre la fréquence de résonance N0 et la largeur de la bande passante ΔN :\nQ = \\frac{N_0}{\\Delta N} = \\frac{\\omega_0}{\\Delta\\omega}.\n\n2. Expressions littérales équivalentes de Q :\nEn remplaçant Δω = Rtot / L et en utilisant la relation de résonance LCω0² = 1, on obtient les formules fondamentales indispensables :\nQ = \\frac{\\omega_0}{\\Delta\\omega} = \\frac{\\omega_0}{R_\\text{tot} / L} = \\frac{L\\,\\omega_0}{R_\\text{tot}}.\nPuisque Lω0 = 1 / (Cω0) à la résonance, on a également :\nQ = \\frac{1}{R_\\text{tot}\\,C\\,\\omega_0}.\nEnfin, en remplaçant ω0 = 1 / √(LC), on obtient l'expression purement paramétrique en fonction des seuls composants du circuit :\nQ = \\frac{1}{R_\\text{tot}}\\,\\sqrt{\\frac{L}{C}} = \\frac{1}{R + r}\\,\\sqrt{\\frac{L}{C}}.\n\n3. Signification physique : mesure de l'acuité et de la sélectivité :\n- Le facteur de qualité mesure l'acuité de la résonance :\n  * Plus Q est grand (Q > 10 à 100), plus la bande passante ΔN = N0 / Q est étroite : la résonance est aiguë et le circuit est très sélectif (il sélectionne une fréquence précise en rejetant toutes les autres) ;\n  * Plus Q est petit (Q < 2), plus la bande passante est large : la résonance est floue et le circuit est peu sélectif ;\n- Q diminue quand la résistance R augmente : le circuit le plus sélectif est toujours celui qui possède la plus petite résistance totale.",
      "keyRule": "Le facteur de qualité vaut Q = N0 / ΔN = Lω0 / Rtot = (1/Rtot)√(L/C). Plus Q est grand, plus la bande passante est étroite et le circuit sélectif.",
      "formulas": [
        {
          "name": "Définition du facteur de qualité",
          "formula": "Q = \\frac{N_0}{\\Delta N} = \\frac{\\omega_0}{\\Delta\\omega}",
          "note": "Q est sans dimension (sans unité)"
        },
        {
          "name": "Formule en fonction de L et ω0",
          "formula": "Q = \\frac{L\\,\\omega_0}{R_\\text{tot}} = \\frac{L\\,\\omega_0}{R + r}",
          "note": "Rapport entre réactance inductive et résistance"
        },
        {
          "name": "Formule paramétrique en fonction de R, L, C",
          "formula": "Q = \\frac{1}{R_\\text{tot}}\\,\\sqrt{\\frac{L}{C}} = \\frac{1}{R+r}\\,\\sqrt{\\frac{L}{C}}",
          "note": "Dépendance globale des composants"
        }
      ],
      "workedExample": {
        "title": "Calcul du facteur de qualité et de la sélectivité d'un filtre RLC",
        "statement": "On dispose d'un circuit RLC série comprenant une bobine d'inductance L = 250 mH et de résistance r = 7,0 Ω, un résistor R = 30 Ω et un condensateur C = 3,2 µF.\\n1. Calcule la fréquence de résonance N0.\\n2. Calcule le facteur de qualité Q du circuit par deux méthodes différentes.\\n3. En déduis la largeur de la bande passante ΔN.\\n4. Que deviendrait la sélectivité si l'on court-circuitait le résistor R (R = 0 Ω) ?",
        "methodSteps": [
          "Étape 1 : Calculer N0 :\\nLC = (250 × 10⁻³ H) × (3,2 × 10⁻⁶ F) = 8,0 × 10⁻⁷ s².\\n√(LC) = √(8,0 × 10⁻⁷) = √(80 × 10⁻⁸) ≈ 8,944 × 10⁻⁴ s.\\nω0 = 1 / √(LC) ≈ 1118 rad·s⁻¹.\\nN0 = ω0 / (2π) = 1118 / (2 × 3,1416) ≈ 178 Hz.",
          "Étape 2 : Calculer Q :\\nRésistance totale : Rtot = R + r = 30 + 7,0 = 37 Ω.\\nMéthode 1 : Q = Lω0 / Rtot = (0,250 × 1118) / 37 = 279,5 / 37 ≈ 7,55.\\nMéthode 2 : Q = (1 / Rtot) × √(L / C) = (1 / 37) × √(0,250 / (3,2 × 10⁻⁶)) = (1 / 37) × √(78 125) = 279,5 / 37 ≈ 7,55.",
          "Étape 3 : Calculer la bande passante ΔN :\\nΔN = N0 / Q = 178 Hz / 7,55 ≈ 23,6 Hz (ou ΔN = Rtot / (2πL) = 37 / (2π × 0,25) = 37 / 1,5708 ≈ 23,6 Hz).",
          "Étape 4 : Si R = 0 (il ne reste que r = 7,0 Ω) :\\nQ' = (1 / 7,0) × 279,5 ≈ 39,9.\\nΔN' = 178 / 39,9 ≈ 4,46 Hz. Le circuit devient 5 fois plus sélectif !"
        ],
        "conclusion": "Le facteur de qualité vaut Q = 7,55 et la bande passante est de 23,6 Hz. Réduire la résistance à sa seule valeur interne r décuple la sélectivité en resserrant la bande à 4,5 Hz."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Influence du facteur de qualité Q sur la sélectivité",
        "tableData": {
          "headers": [
            "Valeur de Q",
            "Largeur de bande passante ΔN",
            "Acuité de la résonance",
            "Comportement du circuit",
            "Exemple d'application"
          ],
          "rows": [
            [
              "Q élevé (Q > 50)",
              "Très étroite (ΔN << N0)",
              "Résonance ultra-aiguë",
              "Hautement sélectif (isole 1 fréquence)",
              "Récepteur radio FM, quartz d'horloge"
            ],
            [
              "Q moyen (5 < Q < 20)",
              "Modérée (ΔN ≈ quelques % de N0)",
              "Résonance bien marquée",
              "Filtre passe-bande standard",
              "Égaliseurs audio, instruments"
            ],
            [
              "Q faible (Q < 2)",
              "Très large (ΔN comparable à N0)",
              "Résonance floue et aplatie",
              "Faible sélectivité",
              "Ligne de transmission avec pertes"
            ],
            [
              "Q < 0,5",
              "Pas de pic perceptible",
              "Régime apériodique sans résonance",
              "Non résonant",
              "Circuit fortement amorti"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition adimensionnelle de Q = N0 / ΔN",
          "stepTheme": "Définition de Q",
          "stepBadge": "Q = N0 / ΔN [sans unité]",
          "paragraphText": "Le facteur de qualité Q d'un circuit résonant est une grandeur sans dimension définie par le rapport entre la fréquence de résonance N0 et la largeur de sa bande passante à -3 dB ΔN. Plus ce rapport est grand, plus le pic est pointu.",
          "exercise": {
            "id": "terminale_d_physique_l11_p04_q1",
            "type": "mcq",
            "prompt": "Un circuit résonne à N0 = 210 Hz avec une bande passante ΔN = 60 Hz. Que vaut son facteur de qualité Q ?",
            "options": [
              "Q = 3,5",
              "Q = 12 600",
              "Q = 0,286",
              "Q = 2,5"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Q = N0 / ΔN = 210 / 60 = 3,5."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Formule paramétrique Q = (1/Rtot) √(L/C)",
          "stepTheme": "Formule des composants",
          "stepBadge": "Q = (1/R) √(L/C)",
          "paragraphText": "Le facteur de qualité peut être calculé directement à partir des caractéristiques physiques des composants sans connaître la fréquence : Q = (1 / Rtot) √(L / C). Pour maximiser Q, il faut maximiser L et minimiser R et C.",
          "exercise": {
            "id": "terminale_d_physique_l11_p04_q2",
            "type": "mcq",
            "prompt": "Pour un circuit où L = 0,16 H, C = 1,0 µF et Rtot = 20 Ω, quelle est la valeur du facteur de qualité Q ?",
            "options": [
              "Q = 20",
              "Q = 400",
              "Q = 2,0",
              "Q = 80"
            ],
            "correctAnswerIndex": 0,
            "explanation": "√(L/C) = √(0,16 / 10⁻⁶) = √(160 000) = 400 Ω. Q = 400 / 20 = 20."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Relation de dualité Q = Lω0 / R = 1 / (RCω0)",
          "stepTheme": "Dualité inductive-capacitive",
          "stepBadge": "Lω0/R = 1/(RCω0)",
          "paragraphText": "Le facteur de qualité représente le rapport entre l'impédance de réactance à la résonance (Lω0 ou 1/Cω0) et la résistance dissipative Rtot. Il mesure combien de fois la réactance dépasse la résistance.",
          "exercise": {
            "id": "terminale_d_physique_l11_p04_q3",
            "type": "mcq",
            "prompt": "À la résonance, la réactance de la bobine vaut Lω0 = 150 Ω et la résistance totale vaut Rtot = 15 Ω. Que vaut le facteur de qualité Q ?",
            "options": [
              "Q = 10",
              "Q = 2250",
              "Q = 0,10",
              "Q = 15"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Q = Lω0 / Rtot = 150 / 15 = 10."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Évaluation de la sélectivité",
          "stepTheme": "Sélectivité",
          "stepBadge": "Sélectivité ∝ Q",
          "paragraphText": "La sélectivité est la capacité du circuit à laisser passer un signal utile de fréquence N0 tout en rejetant les signaux parasites voisins. Deux circuits ayant la même fréquence de résonance N0 n'ont pas la même sélectivité : celui qui a le plus grand Q est le plus sélectif.",
          "exercise": {
            "id": "terminale_d_physique_l11_p04_q4",
            "type": "mcq",
            "prompt": "Deux circuits 1 et 2 résonnent à la même fréquence de 100 kHz. Le circuit 1 a une bande passante de 2 kHz, et le circuit 2 a une bande passante de 10 kHz. Lequel est le plus sélectif ?",
            "options": [
              "Le circuit 1 car sa bande passante est plus étroite (Q1 = 50 > Q2 = 10)",
              "Le circuit 2 car il absorbe plus de fréquences",
              "Ils ont exactement la même sélectivité",
              "La sélectivité ne dépend pas de la bande passante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Q1 = 100/2 = 50 alors que Q2 = 100/10 = 10. Le circuit 1 est 5 fois plus sélectif car sa bande passante est 5 fois plus étroite."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Attention aux unités dans le calcul de √(L/C)",
          "stepTheme": "Unités physiques",
          "stepBadge": "L en H et C en Farads",
          "paragraphText": "Dans la formule Q = (1/R) √(L/C), l'inductance doit obligatoirement être en Henrys (1 mH = 10⁻³ H) et la capacité en Farads (1 µF = 10⁻⁶ F, 1 nF = 10⁻⁹ F). La quantité √(L/C) s'exprime en Ohms (impédance caractéristique).",
          "exercise": {
            "id": "terminale_d_physique_l11_p04_q5",
            "type": "mcq",
            "prompt": "Quelle est l'unité de la grandeur physique √(L/C) dans le Système International ?",
            "options": [
              "L'Ohm (Ω) car c'est une impédance caractéristique",
              "Le Henry-Farad",
              "La seconde",
              "Le Hertz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme Q = (1/R) √(L/C) est sans unité, √(L/C) a obligatoirement la dimension d'une résistance (l'Ohm Ω)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Facteur de qualité d'un résonateur à quartz",
          "stepTheme": "Technologie de pointe",
          "stepBadge": "Q > 100 000",
          "paragraphText": "Alors qu'un circuit RLC électronique ordinaire atteint des facteurs de qualité Q de l'ordre de 10 à 100, un résonateur piézoélectrique à quartz (utilisé dans les montres et ordinateurs) possède un Q dépassant 100 000, garantissant une fréquence d'oscillation d'une stabilité absolue.",
          "exercise": {
            "id": "terminale_d_physique_l11_p04_q6",
            "type": "mcq",
            "prompt": "Pourquoi utilise-t-on un quartz piézoélectrique plutôt qu'un circuit RLC classique pour fabriquer l'horloge d'un microprocesseur ?",
            "options": [
              "Parce que le quartz présente un facteur de qualité Q extrêmement élevé (> 100 000), garantissant une fréquence ultra-stable",
              "Parce que le quartz fonctionne sans alimentation électrique",
              "Parce que le quartz ne chauffe jamais",
              "Parce que le circuit RLC n'existe pas en électronique numérique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un facteur de qualité très élevé garantit une bande passante infinitésimale et empêche toute dérive de la fréquence d'horloge."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Bilan énergétique : rapport d'énergie emmagasinée / dissipée",
          "stepTheme": "Définition énergétique de Q",
          "stepBadge": "Q = 2π (E_stockée / E_perdue)",
          "paragraphText": "Sur le plan énergétique, le facteur de qualité est proportionnel au rapport entre l'énergie maximale emmagasinée dans le dipôle et l'énergie dissipée par effet Joule pendant une période d'oscillation : Q = 2π × (E_emmagasinée / E_dissipée_par_période).",
          "exercise": {
            "id": "terminale_d_physique_l11_p04_q7",
            "type": "mcq",
            "prompt": "Que signifie physiquement un facteur de qualité Q très élevé pour un oscillateur ?",
            "options": [
              "L'oscillateur conserve très bien son énergie et ne dissipe qu'une infime fraction par période",
              "L'oscillateur chauffe intensément et perd toute son énergie en une période",
              "La tension appliquée au circuit est nulle",
              "La bobine annule la gravitation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Q élevé traduit un amortissement minime : l'énergie oscille entre L et C sans fuite thermique notable."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l11_p04_q1",
          "type": "mcq",
          "prompt": "Un circuit résonne à N0 = 210 Hz avec une bande passante ΔN = 60 Hz. Que vaut son facteur de qualité Q ?",
          "options": [
            "Q = 3,5",
            "Q = 12 600",
            "Q = 0,286",
            "Q = 2,5"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Q = N0 / ΔN = 210 / 60 = 3,5."
        },
        {
          "id": "terminale_d_physique_l11_p04_q2",
          "type": "mcq",
          "prompt": "Pour un circuit où L = 0,16 H, C = 1,0 µF et Rtot = 20 Ω, quelle est la valeur du facteur de qualité Q ?",
          "options": [
            "Q = 20",
            "Q = 400",
            "Q = 2,0",
            "Q = 80"
          ],
          "correctAnswerIndex": 0,
          "explanation": "√(L/C) = √(0,16 / 10⁻⁶) = √(160 000) = 400 Ω. Q = 400 / 20 = 20."
        },
        {
          "id": "terminale_d_physique_l11_p04_q3",
          "type": "mcq",
          "prompt": "À la résonance, la réactance de la bobine vaut Lω0 = 150 Ω et la résistance totale vaut Rtot = 15 Ω. Que vaut le facteur de qualité Q ?",
          "options": [
            "Q = 10",
            "Q = 2250",
            "Q = 0,10",
            "Q = 15"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Q = Lω0 / Rtot = 150 / 15 = 10."
        },
        {
          "id": "terminale_d_physique_l11_p04_q4",
          "type": "mcq",
          "prompt": "Deux circuits 1 et 2 résonnent à la même fréquence de 100 kHz. Le circuit 1 a une bande passante de 2 kHz, et le circuit 2 a une bande passante de 10 kHz. Lequel est le plus sélectif ?",
          "options": [
            "Le circuit 1 car sa bande passante est plus étroite (Q1 = 50 > Q2 = 10)",
            "Le circuit 2 car il absorbe plus de fréquences",
            "Ils ont exactement la même sélectivité",
            "La sélectivité ne dépend pas de la bande passante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Q1 = 100/2 = 50 alors que Q2 = 100/10 = 10. Le circuit 1 est 5 fois plus sélectif car sa bande passante est 5 fois plus étroite."
        },
        {
          "id": "terminale_d_physique_l11_p04_q5",
          "type": "mcq",
          "prompt": "Quelle est l'unité de la grandeur physique √(L/C) dans le Système International ?",
          "options": [
            "L'Ohm (Ω) car c'est une impédance caractéristique",
            "Le Henry-Farad",
            "La seconde",
            "Le Hertz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme Q = (1/R) √(L/C) est sans unité, √(L/C) a obligatoirement la dimension d'une résistance (l'Ohm Ω)."
        },
        {
          "id": "terminale_d_physique_l11_p04_q6",
          "type": "mcq",
          "prompt": "Pourquoi utilise-t-on un quartz piézoélectrique plutôt qu'un circuit RLC classique pour fabriquer l'horloge d'un microprocesseur ?",
          "options": [
            "Parce que le quartz présente un facteur de qualité Q extrêmement élevé (> 100 000), garantissant une fréquence ultra-stable",
            "Parce que le quartz fonctionne sans alimentation électrique",
            "Parce que le quartz ne chauffe jamais",
            "Parce que le circuit RLC n'existe pas en électronique numérique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un facteur de qualité très élevé garantit une bande passante infinitésimale et empêche toute dérive de la fréquence d'horloge."
        },
        {
          "id": "terminale_d_physique_l11_p04_q7",
          "type": "mcq",
          "prompt": "Que signifie physiquement un facteur de qualité Q très élevé pour un oscillateur ?",
          "options": [
            "L'oscillateur conserve très bien son énergie et ne dissipe qu'une infime fraction par période",
            "L'oscillateur chauffe intensément et perd toute son énergie en une période",
            "La tension appliquée au circuit est nulle",
            "La bobine annule la gravitation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Q élevé traduit un amortissement minime : l'énergie oscille entre L et C sans fuite thermique notable."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l11_p05",
      "order": 5,
      "title": "Le phénomène de surtension à la résonance",
      "summary": "Tensions efficaces partielles UL et UC à la résonance, formule de surtension UC = UL = Q · U, coefficient de surtension égal à Q, risques majeurs de claquage diélectrique et précautions expérimentales.",
      "conceptExplanation": "1. Calcul des tensions partielles à la résonance :\nÀ la résonance d'intensité, le courant efficace atteint sa valeur maximale I0 = U / Rtot.\nCalculons la tension efficace UC aux bornes du condensateur :\nU_C = \\frac{I_0}{C\\,\\omega_0} = \\frac{U / R_\\text{tot}}{C\\,\\omega_0} = \\frac{1}{R_\\text{tot}\\,C\\,\\omega_0} \\cdot U.\nEn reconnaissant l'expression du facteur de qualité Q = 1 / (Rtot C ω0), on obtient la relation remarquable :\nU_C = Q \\cdot U.\n\nDe même, pour la composante inductive pure UL de la bobine :\nU_L = L\\,\\omega_0\\,I_0 = L\\,\\omega_0 \\cdot \\frac{U}{R_\\text{tot}} = \\frac{L\\,\\omega_0}{R_\\text{tot}} \\cdot U = Q \\cdot U.\n\n2. Le phénomène physique de surtension :\nSi le circuit RLC possède un facteur de qualité supérieur à 1 (Q > 1), ce qui est le cas de la grande majorité des circuits de laboratoire et de radiocommunication :\nU_C = U_L = Q \\cdot U > U.\nLa tension efficace mesurée aux bornes du condensateur et aux bornes de la bobine est strictement supérieure à la tension totale U délivrée par le générateur d'alimentation !\nLe facteur de qualité Q s'identifie donc au coefficient de surtension du circuit RLC série.\n\n3. Conséquences pratiques et danger de claquage :\nCe phénomène de surtension peut avoir des conséquences néfastes spectaculaires :\n- Si un GBF alimente un circuit sous une tension modeste U = 10 V avec un circuit ayant Q = 25, la tension aux bornes du condensateur grimpe instantanément à UC = 25 × 10 = 250 V !\n- Si la tension de service maximale admissible du condensateur (tension d'isolement inscrite sur le boîtier, ex: 63 V ou 100 V) est inférieure à UC, le diélectrique est perforé par un arc interne : le condensateur est détruit (claquage du condensateur) ;\n- Il est donc impératif de dimensionner les composants en prévoyant une marge d'isolement d'au moins Q fois la tension du générateur.",
      "keyRule": "À la résonance : UC = UL = Q · U. Si Q > 1, il apparaît une surtension aux bornes de L et de C qui peut dépasser de plusieurs dizaines de fois la tension du générateur et claquer le condensateur.",
      "formulas": [
        {
          "name": "Tension aux bornes du condensateur à la résonance",
          "formula": "U_C = Q\\,U",
          "note": "Q = facteur de qualité (coefficient de surtension)"
        },
        {
          "name": "Tension aux bornes de l'inductance pure à la résonance",
          "formula": "U_L = Q\\,U",
          "note": "UL = UC à la résonance"
        }
      ],
      "workedExample": {
        "title": "Vérification de la tension de claquage d'un condensateur",
        "statement": "On monte en série un conducteur ohmique R = 20 Ω, une bobine pure L = 0,20 H et un condensateur C = 2,0 µF dont la tension de claquage maximale garantie par le constructeur est U_max_admissible = 150 V. Le circuit est alimenté par un GBF délivrant une tension efficace U = 15 V réglée à la fréquence de résonance N0.\\n1. Calcule la pulsation propre ω0 et le facteur de qualité Q du montage.\\n2. Calcule la tension efficace UC apparaissant aux bornes du condensateur à la résonance.\\n3. Le condensateur risque-t-il de claquer ?",
        "methodSteps": [
          "Étape 1 : Calculer ω0 et Q :\\nω0 = 1 / √(LC) = 1 / √(0,20 × 2,0 × 10⁻⁶) = 1 / √(4,0 × 10⁻⁷) = 1 / (6,3245 × 10⁻⁴) ≈ 1581 rad·s⁻¹.\\nQ = Lω0 / R = (0,20 × 1581) / 20 = 316,2 / 20 = 15,81.",
          "Étape 2 : Calculer la tension efficace aux bornes de C :\\nUC = Q × U = 15,81 × 15 V ≈ 237,2 V.",
          "Étape 3 : Calculer la tension crête maximale subie par le diélectrique :\\nUC_crête = UC × √2 = 237,2 × 1,414 ≈ 335,4 V.",
          "Étape 4 : Conclure sur le risque de destruction :\\nLa tension crête (335 V) et même la tension efficace (237 V) dépassent largement la limite d'isolement de 150 V. Le condensateur va immédiatement subir un claquage diélectrique et être détruit."
        ],
        "conclusion": "Sous seulement 15 V en entrée, la surtension propulse UC à 237 V efficaces (335 V crête). Le condensateur claque instantanément. Il faut choisir un condensateur isolé à 400 V minimum."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Bilan des tensions efficaces à la résonance selon le facteur Q",
        "tableData": {
          "headers": [
            "Tension du GBF (U)",
            "Facteur de qualité Q",
            "Tension condensateur UC = Q·U",
            "Tension inductance UL = Q·U",
            "Diagnostic sécurité"
          ],
          "rows": [
            [
              "U = 5,0 V",
              "Q = 0,5 (faible)",
              "UC = 2,5 V < U",
              "UL = 2,5 V < U",
              "Aucune surtension (pas de risque)"
            ],
            [
              "U = 10 V",
              "Q = 1,0 (critique)",
              "UC = 10 V = U",
              "UL = 10 V = U",
              "Seuil de surtension"
            ],
            [
              "U = 12 V",
              "Q = 8,0 (standard)",
              "UC = 96 V >> U",
              "UL = 96 V >> U",
              "Surtension modérée (vérifier l'isolement)"
            ],
            [
              "U = 24 V",
              "Q = 25 (élevé)",
              "UC = 600 V >>> U",
              "UL = 600 V >>> U",
              "Surtension violente (risque d'électrocution et claquage)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Formule de la surtension aux bornes du condensateur",
          "stepTheme": "Surtension",
          "stepBadge": "UC = Q · U",
          "paragraphText": "À la résonance d'intensité, la tension efficace aux bornes du condensateur est égale au produit du facteur de qualité Q par la tension efficace U du générateur : UC = Q · U. Dès que Q > 1, la tension aux bornes du condensateur est supérieure à celle du générateur.",
          "exercise": {
            "id": "terminale_d_physique_l11_p05_q1",
            "type": "mcq",
            "prompt": "Un dipôle RLC de facteur de qualité Q = 12 est alimenté à sa fréquence de résonance sous une tension efficace U = 6,0 V. Que vaut la tension efficace UC mesurée aux bornes du condensateur ?",
            "options": [
              "UC = 72 V",
              "UC = 6,0 V",
              "UC = 0,50 V",
              "UC = 2,0 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "UC = Q × U = 12 × 6,0 V = 72 V."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Surtension identique aux bornes de la bobine pure",
          "stepTheme": "Égalité des surtensions",
          "stepBadge": "UL = Q · U",
          "paragraphText": "La surtension s'exerce de façon symétrique aux bornes de l'inductance pure de la bobine : UL = Lω0 I0 = Q · U. À la résonance, la bobine et le condensateur supportent exactement la même tension survoltée.",
          "exercise": {
            "id": "terminale_d_physique_l11_p05_q2",
            "type": "mcq",
            "prompt": "Si la tension du générateur est U = 10 V et que Q = 15, que vaut la tension efficace aux bornes de l'inductance pure à la résonance ?",
            "options": [
              "UL = 150 V",
              "UL = 10 V",
              "UL = 1,5 V",
              "UL = 0 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "UL = Q × U = 15 × 10 V = 150 V."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le paradoxe apparent de la loi des mailles résolu",
          "stepTheme": "Cohérence physique",
          "stepBadge": "Opposition vectorielle",
          "paragraphText": "Comment UC et UL peuvent-elles valoir chacune 150 V alors que le générateur ne délivre que 10 V ? Parce que les deux tensions sont en opposition de phase complète (180°) : leurs vecteurs de Fresnel se détruisent exactement (VL + VC = 0), ne laissant subsister dans la maille que la tension du résistor VR = U = 10 V !",
          "exercise": {
            "id": "terminale_d_physique_l11_p05_q3",
            "type": "mcq",
            "prompt": "Pourquoi la surtension UC = UL = 150 V ne viole-t-elle pas la loi des mailles dans un circuit alimenté sous 10 V ?",
            "options": [
              "Parce que les tensions instantanées uL(t) et uC(t) sont en opposition de phase (déphasées de 180°) et s'annulent à chaque instant",
              "Parce que la loi des mailles n'est pas valable en courant alternatif",
              "Parce que l'énergie est créée spontanément par la résonance",
              "Parce que le voltmètre commet une erreur de mesure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À la résonance, uL(t) + uC(t) = 0 à chaque instant : la somme algébrique des tensions instantanées reste rigoureusement égale à u(t) = uR(t)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Mesure expérimentale du facteur Q par surtension",
          "stepTheme": "Mesure de Q",
          "stepBadge": "Q = UC / U",
          "paragraphText": "En travaux pratiques, une méthode très rapide et précise pour mesurer le facteur de qualité Q consiste à régler le générateur à la résonance (I maximal), puis à mesurer avec un voltmètre alternatif la tension UC aux bornes du condensateur et la tension U du générateur : Q = UC / U.",
          "exercise": {
            "id": "terminale_d_physique_l11_p05_q4",
            "type": "mcq",
            "prompt": "À la résonance d'intensité, un élève mesure U = 2,0 V aux bornes du GBF et UC = 15,4 V aux bornes du condensateur. Quelle est la valeur expérimentale du facteur de qualité Q ?",
            "options": [
              "Q = 7,7",
              "Q = 0,13",
              "Q = 30,8",
              "Q = 17,4"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Q = UC / U = 15,4 V / 2,0 V = 7,7."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le danger de claquage diélectrique du condensateur",
          "stepTheme": "Sécurité des composants",
          "stepBadge": "U_crête < U_isolement",
          "paragraphText": "Le danger le plus grave en TP d'électricité est d'omettre le facteur √2 dans la tension crête supportée par le condensateur. Si UC efficace vaut 100 V, la tension crête atteint 141 V. Un condensateur marqué '100 V DC' claquera à coup sûr.",
          "exercise": {
            "id": "terminale_d_physique_l11_p05_q5",
            "type": "mcq",
            "prompt": "Un condensateur marqué 'Tension maximale : 63 V' est utilisé dans un montage RLC où U = 10 V et Q = 8. Que va-t-il se passer à la résonance ?",
            "options": [
              "Le condensateur va claquer car la tension efficace de 80 V (113 V crête) dépasse sa limite de 63 V",
              "Le condensateur va fonctionner normalement sans échauffement",
              "Le circuit va s'éteindre tout seul",
              "La tension va chuter à 63 V sans dommage"
            ],
            "correctAnswerIndex": 0,
            "explanation": "UC = Q × U = 8 × 10 = 80 V efficaces, soit 113 V crête. C'est nettement supérieur à la limite de 63 V : le diélectrique est perforé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Bobine de Tesla et surtensions géantes",
          "stepTheme": "Applications spectaculaires",
          "stepBadge": "Surtension résonante",
          "paragraphText": "Le célèbre transformateur résonant de Nikola Tesla (la bobine de Tesla) utilise un double circuit LC accordé à la résonance avec un très grand facteur de qualité Q pour générer des tensions de plusieurs centaines de milliers de volts à partir d'une source basse tension, créant des éclairs spectaculaires.",
          "exercise": {
            "id": "terminale_d_physique_l11_p05_q6",
            "type": "mcq",
            "prompt": "Quel phénomène physique fondamental exploite une bobine de Tesla pour produire des arcs électriques géants sans fer ?",
            "options": [
              "La résonance d'un circuit LC avec un très fort coefficient de surtension Q",
              "La fusion thermonucléaire des atomes d'hélium",
              "L'effet photoélectrique externe",
              "La réaction d'oxydoréduction des fils de cuivre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La bobine de Tesla est un circuit résonant accordé qui démultiplie la tension par résonance haute fréquence (surtension Q·U)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Tension aux bornes de la bobine réelle (L, r)",
          "stepTheme": "Bobine réelle",
          "stepBadge": "Ub = √(r² + Q²Rtot²) · I0",
          "paragraphText": "Aux bornes d'une bobine réelle qui comporte une résistance interne r, la tension totale à la résonance est la somme vectorielle de la chute ohmique r I0 et de la surtension inductive Q U : Ub = I0 √(r² + L²ω0²). Comme Lω0 = Q Rtot >> r, on a pratiquement Ub ≈ Q U.",
          "exercise": {
            "id": "terminale_d_physique_l11_p05_q7",
            "type": "mcq",
            "prompt": "Dans une bobine réelle où r = 2 Ω et Lω0 = 100 Ω, quelle composante domine quasi totalement la tension aux bornes de la bobine à la résonance ?",
            "options": [
              "La composante inductive pure Lω0 (100 Ω devant 2 Ω)",
              "La composante résistive r",
              "Les deux composantes sont rigoureusement égales",
              "Aucune, la tension est nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Z_bobine = √(2² + 100²) = √(4 + 10000) = √10004 ≈ 100,02 Ω : le terme inductif est ultra-dominant (99,98 %)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l11_p05_q1",
          "type": "mcq",
          "prompt": "Un dipôle RLC de facteur de qualité Q = 12 est alimenté à sa fréquence de résonance sous une tension efficace U = 6,0 V. Que vaut la tension efficace UC mesurée aux bornes du condensateur ?",
          "options": [
            "UC = 72 V",
            "UC = 6,0 V",
            "UC = 0,50 V",
            "UC = 2,0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "UC = Q × U = 12 × 6,0 V = 72 V."
        },
        {
          "id": "terminale_d_physique_l11_p05_q2",
          "type": "mcq",
          "prompt": "Si la tension du générateur est U = 10 V et que Q = 15, que vaut la tension efficace aux bornes de l'inductance pure à la résonance ?",
          "options": [
            "UL = 150 V",
            "UL = 10 V",
            "UL = 1,5 V",
            "UL = 0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "UL = Q × U = 15 × 10 V = 150 V."
        },
        {
          "id": "terminale_d_physique_l11_p05_q3",
          "type": "mcq",
          "prompt": "Pourquoi la surtension UC = UL = 150 V ne viole-t-elle pas la loi des mailles dans un circuit alimenté sous 10 V ?",
          "options": [
            "Parce que les tensions instantanées uL(t) et uC(t) sont en opposition de phase (déphasées de 180°) et s'annulent à chaque instant",
            "Parce que la loi des mailles n'est pas valable en courant alternatif",
            "Parce que l'énergie est créée spontanément par la résonance",
            "Parce que le voltmètre commet une erreur de mesure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À la résonance, uL(t) + uC(t) = 0 à chaque instant : la somme algébrique des tensions instantanées reste rigoureusement égale à u(t) = uR(t)."
        },
        {
          "id": "terminale_d_physique_l11_p05_q4",
          "type": "mcq",
          "prompt": "À la résonance d'intensité, un élève mesure U = 2,0 V aux bornes du GBF et UC = 15,4 V aux bornes du condensateur. Quelle est la valeur expérimentale du facteur de qualité Q ?",
          "options": [
            "Q = 7,7",
            "Q = 0,13",
            "Q = 30,8",
            "Q = 17,4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Q = UC / U = 15,4 V / 2,0 V = 7,7."
        },
        {
          "id": "terminale_d_physique_l11_p05_q5",
          "type": "mcq",
          "prompt": "Un condensateur marqué 'Tension maximale : 63 V' est utilisé dans un montage RLC où U = 10 V et Q = 8. Que va-t-il se passer à la résonance ?",
          "options": [
            "Le condensateur va claquer car la tension efficace de 80 V (113 V crête) dépasse sa limite de 63 V",
            "Le condensateur va fonctionner normalement sans échauffement",
            "Le circuit va s'éteindre tout seul",
            "La tension va chuter à 63 V sans dommage"
          ],
          "correctAnswerIndex": 0,
          "explanation": "UC = Q × U = 8 × 10 = 80 V efficaces, soit 113 V crête. C'est nettement supérieur à la limite de 63 V : le diélectrique est perforé."
        },
        {
          "id": "terminale_d_physique_l11_p05_q6",
          "type": "mcq",
          "prompt": "Quel phénomène physique fondamental exploite une bobine de Tesla pour produire des arcs électriques géants sans fer ?",
          "options": [
            "La résonance d'un circuit LC avec un très fort coefficient de surtension Q",
            "La fusion thermonucléaire des atomes d'hélium",
            "L'effet photoélectrique externe",
            "La réaction d'oxydoréduction des fils de cuivre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La bobine de Tesla est un circuit résonant accordé qui démultiplie la tension par résonance haute fréquence (surtension Q·U)."
        },
        {
          "id": "terminale_d_physique_l11_p05_q7",
          "type": "mcq",
          "prompt": "Dans une bobine réelle où r = 2 Ω et Lω0 = 100 Ω, quelle composante domine quasi totalement la tension aux bornes de la bobine à la résonance ?",
          "options": [
            "La composante inductive pure Lω0 (100 Ω devant 2 Ω)",
            "La composante résistive r",
            "Les deux composantes sont rigoureusement égales",
            "Aucune, la tension est nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Z_bobine = √(2² + 100²) = √(4 + 10000) = √10004 ≈ 100,02 Ω : le terme inductif est ultra-dominant (99,98 %)."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l11_p06",
      "order": 6,
      "title": "Applications technologiques et accord radioélectrique",
      "summary": "Principe du récepteur radio (sélection de station par circuit RLC d'accord et condensateur variable), bande FM (87,5 - 108 MHz), filtres réjecteurs (circuits bouchons), résonance acoustique et analogie mécanique.",
      "conceptExplanation": "1. Sélection d'une station radio (tuner radioélectrique) :\nL'antenne d'un récepteur radio capte simultanément des centaines d'ondes électromagnétiques émises par différentes stations émettrices (Radio Côte d'Ivoire, Fréquence 2, RFI, etc.), chacune émettant à une fréquence porteuse distincte. Pour écouter une seule station sans entendre un brouhaha cacophonique, on relie l'antenne à un circuit résonant RLC série :\n- Le circuit est doté d'un condensateur variable (ou diode varicap) dont on peut ajuster la capacité C en tournant le bouton d'accord (tuning) ;\n- En faisant varier C, on déplace la fréquence de résonance N0 = 1 / (2π√(LC)) jusqu'à la faire coïncider avec la fréquence de la station souhaitée (par exemple 92,0 MHz pour Fréquence 2) ;\n- À cette fréquence précise, l'impédance du circuit est minimale (Z = R) et l'intensité du courant induit est maximale ;\n- Toutes les autres stations, situées à des fréquences différentes hors de la bande passante étroite ΔN, rencontrent une impédance immense et sont totalement éliminées.\n\n2. La bande FM (Bande II VHF) :\nDans la plupart des pays (dont la Côte d'Ivoire), la radiodiffusion FM grand public s'effectue dans la bande métrique VHF de 87,5 MHz à 108 MHz. Les canaux sont généralement espacés de 100 kHz (0,1 MHz). Pour éviter que deux stations voisines ne se chevauchent, le facteur de qualité Q du circuit d'accord doit être suffisamment grand pour que la bande passante ΔN ne dépasse pas l'espacement inter-canaux.\n\n3. Les circuits bouchons (filtres réjecteurs de bande) :\nEn associant en parallèle une bobine et un condensateur (circuit antirésonant LC parallèle), on obtient l'effet inverse : l'impédance devient quasi infinie à la fréquence de résonance. Un tel dipôle, appelé 'circuit bouchon', est intercalé sur une ligne pour bloquer et éliminer une fréquence parasite indésirable (par exemple le ronflement résiduel à 50 Hz ou 100 Hz de l'alimentation secteur).\n\n4. Analogies mécanique et acoustique :\n- En acoustique : les instruments de musique (guitare, violon, djembé) possèdent une caisse de résonance d'air dont la fréquence propre est accordée pour amplifier l'onde sonore émise par la corde ou la peau vibrante ;\n- En mécanique : une balançoire ne prend une grande amplitude que si l'adulte pousse en synchronisme exact avec la fréquence propre de balancement. À l'inverse, la résonance mécanique peut être dévastatrice (écroulement du pont de Tacoma Narrows sous les rafales de vent).",
      "keyRule": "Un récepteur radio sélectionne une station en ajustant la capacité C pour que N0 = 1/(2π√LC) corresponde à la fréquence de l'émetteur. Un Q élevé garantit de n'écouter qu'une seule station sans interférence.",
      "formulas": [
        {
          "name": "Accord de fréquence pour un récepteur radio",
          "formula": "N_0 = \\frac{1}{2\\pi\\,\\sqrt{L\\,C}} = N_\\text{station}",
          "note": "Ajustement par condensateur variable C"
        },
        {
          "name": "Valeur de capacité d'accord requise",
          "formula": "C = \\frac{1}{4\\pi^2\\,N_\\text{station}^2\\,L}",
          "note": "Capacité pour capter une onde donnée"
        }
      ],
      "workedExample": {
        "title": "Calcul de la capacité d'accord pour capter Radio Côte d'Ivoire Fréquence 2",
        "statement": "Une auditrice souhaite capter à Abidjan la station 'Radio Fréquence 2' qui émet sur la fréquence porteuse N = 92,0 MHz sur la bande FM. Le circuit d'accord de son poste radio comporte une micro-bobine fixe d'inductance L = 1,5 µH (1,5 × 10⁻⁶ H) en série avec un condensateur à capacité variable C.\\n1. Rappelle la valeur de la fréquence en Hertz.\\n2. Calcule la valeur exacte de la capacité C sur laquelle le condensateur variable doit être réglé pour capter cette radio à la résonance.\\n3. Si la résistance totale du circuit est R = 2,5 Ω, calcule la largeur de la bande passante ΔN et le facteur de qualité Q du récepteur.",
        "methodSteps": [
          "Étape 1 : Convertir la fréquence en Hertz : N = 92,0 MHz = 92,0 × 10⁶ Hz = 9,20 × 10⁷ Hz.",
          "Étape 2 : Calculer la capacité d'accord C :\\nÀ la résonance : LCω0² = 1 => C = 1 / [4π² N² L].\\nC = 1 / [4 × 3,1416² × (9,20 × 10⁷)² × 1,5 × 10⁻⁶]\\nC = 1 / [39,478 × (8,464 × 10¹⁵) × 1,5 × 10⁻⁶] = 1 / [5,012 × 10¹¹] ≈ 1,995 × 10⁻¹² F ≈ 2,0 pF (picofarads).",
          "Étape 3 : Calculer la bande passante et Q :\\nΔN = R / (2πL) = 2,5 / (2 × 3,1416 × 1,5 × 10⁻⁶) = 2,5 / (9,425 × 10⁻⁶) ≈ 265 000 Hz = 265 kHz.\\nQ = N / ΔN = 92,0 × 10⁶ / 265 × 10³ ≈ 347."
        ],
        "conclusion": "Il faut régler le condensateur d'accord sur C ≈ 2,0 pF. Le facteur de qualité très élevé (Q = 347) assure une excellente sélectivité pour isoler la station sans interférence."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Domaines d'application technologique de la résonance",
        "tableData": {
          "headers": [
            "Domaine d'application",
            "Système résonant",
            "Paramètre accordé",
            "Rôle physique et technologique"
          ],
          "rows": [
            [
              "Radiodiffusion (FM / AM)",
              "Circuit d'accord RLC",
              "Condensateur variable C",
              "Sélection d'une station précise par résonance d'intensité"
            ],
            [
              "Téléphonie 4G / 5G / Wi-Fi",
              "Résonateurs diélectriques / SAW",
              "Géométrie micrométrique",
              "Filtrage des canaux de données haute fréquence"
            ],
            [
              "Filtrage industriel",
              "Circuit bouchon LC parallèle",
              "Accord à 50 Hz ou 100 Hz",
              "Élimination des harmoniques parasites et bruits de secteur"
            ],
            [
              "Acoustique musicale",
              "Caisse de résonance (guitare, violon)",
              "Volume d'air et ouïes",
              "Amplification naturelle des vibrations mécaniques des cordes"
            ],
            [
              "Imagerie Médicale (IRM)",
              "Résonance Magnétique Nucléaire",
              "Champ magnétique B0 et onde RF",
              "Basculement des spins nucléaires pour cartographie des tissus"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Principe du tuner radio RLC",
          "stepTheme": "Récepteur radio",
          "stepBadge": "Sélection d'une station",
          "paragraphText": "Le circuit d'accord d'un récepteur radio est un dipôle RLC résonant connecté à l'antenne. En ajustant la capacité C du condensateur variable, on fait coïncider la fréquence de résonance N0 avec la fréquence porteuse de la station désirée, qui est alors la seule à créer un courant d'intensité maximale.",
          "exercise": {
            "id": "terminale_d_physique_l11_p06_q1",
            "type": "mcq",
            "prompt": "Dans un récepteur radio classique, quel composant ajuste l'utilisateur lorsqu'il tourne le bouton pour changer de station ?",
            "options": [
              "Un condensateur variable dont la capacité C modifie la fréquence de résonance N0 = 1/(2π√LC)",
              "Une résistance variable pour modifier le volume sonore uniquement",
              "La longueur de l'antenne métallique télescopique",
              "La tension de la pile d'alimentation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le bouton de réglage modifie la capacité C du condensateur d'accord, déplaçant la fréquence de résonance sur la station voulue."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La bande FM internationale (87,5 - 108 MHz)",
          "stepTheme": "Bande II VHF",
          "stepBadge": "FM 87,5 à 108 MHz",
          "paragraphText": "La modulation de fréquence commerciale utilise la bande VHF II s'étendant de 87,5 MHz à 108 MHz, avec une largeur totale de 20,5 MHz. En Côte d'Ivoire, les fréquences des stations (ex: 92,0 MHz, 88,0 MHz, etc.) sont attribuées par la HACA pour éviter tout chevauchement spectral.",
          "exercise": {
            "id": "terminale_d_physique_l11_p06_q2",
            "type": "mcq",
            "prompt": "Dans quelle gamme de fréquences opèrent les stations de radiodiffusion de la bande FM grand public ?",
            "options": [
              "Entre 87,5 MHz et 108 MHz (bande VHF)",
              "Entre 500 kHz et 1600 kHz (grandes ondes)",
              "Entre 2,4 GHz et 5 GHz (bande Wi-Fi)",
              "Entre 10 Hz et 20 000 Hz (gamme audible)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La bande FM standard s'étend de 87,5 MHz à 108 MHz dans la gamme des très hautes fréquences (VHF)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul de la capacité d'accord pour une fréquence donnée",
          "stepTheme": "Dimensionnement",
          "stepBadge": "C = 1 / (4π² N² L)",
          "paragraphText": "Pour capter une station de fréquence Nstation avec une bobine d'inductance L fixée, la capacité d'accord requise se calcule par inversion de la formule de Thomson : C = 1 / [4π² · Nstation² · L].",
          "exercise": {
            "id": "terminale_d_physique_l11_p06_q3",
            "type": "mcq",
            "prompt": "Pour capter une onde de fréquence 10 MHz avec une bobine d'inductance L = 10 µH, quelle capacité C doit avoir le condensateur ?",
            "options": [
              "C ≈ 25,3 pF = 2,53 × 10⁻¹¹ F",
              "C ≈ 2,53 µF",
              "C ≈ 100 nF",
              "C ≈ 1,0 pF"
            ],
            "correctAnswerIndex": 0,
            "explanation": "4π² ≈ 39,48. N² = 10¹⁴ Hz². L = 10⁻⁵ H. Dénominateur = 39,48 × 10⁹ ≈ 3,95 × 10¹⁰. C = 1 / (3,95 × 10¹⁰) ≈ 25,3 × 10⁻¹² F = 25,3 pF."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les circuits bouchons et réjection d'interférences",
          "stepTheme": "Circuit réjecteur",
          "stepBadge": "LC parallèle = impédance infinie",
          "paragraphText": "Un circuit LC en dérivation (parallèle) présente une impédance théoriquement infinie à sa pulsation de résonance ω0. Placé en série dans une ligne, il 'bouche' et bloque intégralement cette fréquence précise : on l'appelle circuit bouchon.",
          "exercise": {
            "id": "terminale_d_physique_l11_p06_q4",
            "type": "mcq",
            "prompt": "Quel est le comportement d'un circuit bouchon (L et C en parallèle) pour la fréquence correspondant à sa résonance propre ?",
            "options": [
              "Il présente une impédance maximale et bloque le passage de cette fréquence (filtre coupe-bande)",
              "Il présente une impédance nulle et court-circuite tout le circuit",
              "Il amplifie le signal de 1000 fois",
              "Il transforme la fréquence en tension continue"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En parallèle (antirésonance), l'admittance s'annule et l'impédance tend vers l'infini, bloquant sélectivement la fréquence propre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Résonance acoustique des instruments de musique",
          "stepTheme": "Acoustique",
          "stepBadge": "Caisse de résonance",
          "paragraphText": "Une corde de guitare vibrant seule dans l'air ne produit qu'un son quasi inaudible. Lorsqu'elle est montée sur la guitare, ses vibrations forcent la caisse en bois et la cavité d'air à osciller. Par résonance acoustique, l'air absorbe l'énergie mécanique et émet une onde sonore puissante.",
          "exercise": {
            "id": "terminale_d_physique_l11_p06_q5",
            "type": "mcq",
            "prompt": "Quel est le rôle acoustique de la caisse en bois d'une guitare ou d'un violon ?",
            "options": [
              "Agir comme un résonateur acoustique pour amplifier l'énergie vibratoire des cordes",
              "Empêcher les cordes de chauffer par frottement",
              "Isoler électriquement le musicien",
              "Créer un champ magnétique statique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La caisse de résonance capte les vibrations des cordes et les amplifie considérablement par résonance acoustique de sa cavité d'air."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Analogie mécanique : le balancement accordé",
          "stepTheme": "Mécanique résonante",
          "stepBadge": "Poussée en phase",
          "paragraphText": "Pour amplifier le mouvement d'une balançoire (pendule pesant de période propre T0), l'opérateur doit exercer des impulsions périodiques répétées à la période T égale à T0. Si les impulsions sont appliquées à contre-temps ou à une fréquence quelconque, le mouvement ne s'amplifie pas.",
          "exercise": {
            "id": "terminale_d_physique_l11_p06_q6",
            "type": "mcq",
            "prompt": "À quelle condition des poussées successives de faible force permettent-elles de donner une grande amplitude à une balançoire d'enfant ?",
            "options": [
              "Si la fréquence des poussées est rigoureusement accordée sur la fréquence propre de la balançoire",
              "Si les poussées sont exercées le plus vite possible sans tenir compte du mouvement",
              "Si la masse de l'enfant est nulle",
              "Si l'air ambiant est parfaitement immobile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'archétype de la résonance mécanique : une excitation périodique en phase avec la fréquence propre accumule l'énergie à chaque cycle."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Dangers de la résonance en génie civil et mécanique",
          "stepTheme": "Catastrophes résonantes",
          "stepBadge": "Amortissement indispensable",
          "paragraphText": "Si la résonance est bénéfique en radiocommunication, elle est destructrice en génie civil : les ponts suspendus, ailes d'avions et gratte-ciels doivent être équipés d'amortisseurs massiques pour éviter que le vent ou les séismes n'excitent leurs fréquences propres de résonance.",
          "exercise": {
            "id": "terminale_d_physique_l11_p06_q7",
            "type": "mcq",
            "prompt": "Pourquoi impose-t-on aux troupes militaires de rompre le pas lorsqu'elles traversent un pont suspendu ?",
            "options": [
              "Pour éviter que la cadence régulière des pas ne coïncide avec la fréquence propre du pont et ne provoque sa destruction par résonance mécanique",
              "Pour réduire l'usure de leurs chaussures de marche",
              "Pour aller plus vite",
              "Pour des raisons de discrétion sonore"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le pas cadencé régulier d'un bataillon pourrait exciter la fréquence propre du tablier du pont et entraîner son effondrement par résonance mécanique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l11_p06_q1",
          "type": "mcq",
          "prompt": "Dans un récepteur radio classique, quel composant ajuste l'utilisateur lorsqu'il tourne le bouton pour changer de station ?",
          "options": [
            "Un condensateur variable dont la capacité C modifie la fréquence de résonance N0 = 1/(2π√LC)",
            "Une résistance variable pour modifier le volume sonore uniquement",
            "La longueur de l'antenne métallique télescopique",
            "La tension de la pile d'alimentation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bouton de réglage modifie la capacité C du condensateur d'accord, déplaçant la fréquence de résonance sur la station voulue."
        },
        {
          "id": "terminale_d_physique_l11_p06_q2",
          "type": "mcq",
          "prompt": "Dans quelle gamme de fréquences opèrent les stations de radiodiffusion de la bande FM grand public ?",
          "options": [
            "Entre 87,5 MHz et 108 MHz (bande VHF)",
            "Entre 500 kHz et 1600 kHz (grandes ondes)",
            "Entre 2,4 GHz et 5 GHz (bande Wi-Fi)",
            "Entre 10 Hz et 20 000 Hz (gamme audible)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La bande FM standard s'étend de 87,5 MHz à 108 MHz dans la gamme des très hautes fréquences (VHF)."
        },
        {
          "id": "terminale_d_physique_l11_p06_q3",
          "type": "mcq",
          "prompt": "Pour capter une onde de fréquence 10 MHz avec une bobine d'inductance L = 10 µH, quelle capacité C doit avoir le condensateur ?",
          "options": [
            "C ≈ 25,3 pF = 2,53 × 10⁻¹¹ F",
            "C ≈ 2,53 µF",
            "C ≈ 100 nF",
            "C ≈ 1,0 pF"
          ],
          "correctAnswerIndex": 0,
          "explanation": "4π² ≈ 39,48. N² = 10¹⁴ Hz². L = 10⁻⁵ H. Dénominateur = 39,48 × 10⁹ ≈ 3,95 × 10¹⁰. C = 1 / (3,95 × 10¹⁰) ≈ 25,3 × 10⁻¹² F = 25,3 pF."
        },
        {
          "id": "terminale_d_physique_l11_p06_q4",
          "type": "mcq",
          "prompt": "Quel est le comportement d'un circuit bouchon (L et C en parallèle) pour la fréquence correspondant à sa résonance propre ?",
          "options": [
            "Il présente une impédance maximale et bloque le passage de cette fréquence (filtre coupe-bande)",
            "Il présente une impédance nulle et court-circuite tout le circuit",
            "Il amplifie le signal de 1000 fois",
            "Il transforme la fréquence en tension continue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En parallèle (antirésonance), l'admittance s'annule et l'impédance tend vers l'infini, bloquant sélectivement la fréquence propre."
        },
        {
          "id": "terminale_d_physique_l11_p06_q5",
          "type": "mcq",
          "prompt": "Quel est le rôle acoustique de la caisse en bois d'une guitare ou d'un violon ?",
          "options": [
            "Agir comme un résonateur acoustique pour amplifier l'énergie vibratoire des cordes",
            "Empêcher les cordes de chauffer par frottement",
            "Isoler électriquement le musicien",
            "Créer un champ magnétique statique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La caisse de résonance capte les vibrations des cordes et les amplifie considérablement par résonance acoustique de sa cavité d'air."
        },
        {
          "id": "terminale_d_physique_l11_p06_q6",
          "type": "mcq",
          "prompt": "À quelle condition des poussées successives de faible force permettent-elles de donner une grande amplitude à une balançoire d'enfant ?",
          "options": [
            "Si la fréquence des poussées est rigoureusement accordée sur la fréquence propre de la balançoire",
            "Si les poussées sont exercées le plus vite possible sans tenir compte du mouvement",
            "Si la masse de l'enfant est nulle",
            "Si l'air ambiant est parfaitement immobile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'archétype de la résonance mécanique : une excitation périodique en phase avec la fréquence propre accumule l'énergie à chaque cycle."
        },
        {
          "id": "terminale_d_physique_l11_p06_q7",
          "type": "mcq",
          "prompt": "Pourquoi impose-t-on aux troupes militaires de rompre le pas lorsqu'elles traversent un pont suspendu ?",
          "options": [
            "Pour éviter que la cadence régulière des pas ne coïncide avec la fréquence propre du pont et ne provoque sa destruction par résonance mécanique",
            "Pour réduire l'usure de leurs chaussures de marche",
            "Pour aller plus vite",
            "Pour des raisons de discrétion sonore"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pas cadencé régulier d'un bataillon pourrait exciter la fréquence propre du tablier du pont et entraîner son effondrement par résonance mécanique."
        }
      ]
    }
  ]
};
