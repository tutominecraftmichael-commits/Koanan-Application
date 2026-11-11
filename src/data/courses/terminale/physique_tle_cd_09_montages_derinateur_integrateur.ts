import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : Terminales C, D, E — Thème : Électricité — Titre : Montages dérivateur et intégrateur
export const PHYSIQUE_TLE_CD_L09_MONTAGES_DERINATEUR_INTEGRATEUR: CurriculumChapter = {
  "id": "terminale_d_physique_l09_montages_derinateur_integrateur",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [
    "terminale_c"
  ],
  "order": 9,
  "title": "Leçon 9 : Montages dérivateur et intégrateur",
  "summary": "Étude théorique et expérimentale des opérations mathématiques analogiques par amplificateur opérationnel (A.O.) : caractéristiques de l'A.O. idéal en régime linéaire (courants d'entrée nuls i⁺ = i⁻ = 0, tension différentielle nulle ε = 0, masse virtuelle), constitution et loi entrée-sortie du montage dérivateur us = -RC (due/dt), constitution et loi entrée-sortie du montage intégrateur us = -1/(RC) ∫ ue dt, réponses respectives aux signaux triangulaires et rectangulaires en créneaux, conditions impératives de non-saturation (|us| < Vsat), détermination graphique des composants R et C, réciprocité et filtrage actif.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : Terminales C, D, E – Thème : Électricité – Montages dérivateur et intégrateur)",
  "points": [
    {
      "id": "terminale_d_physique_l09_p01",
      "order": 1,
      "title": "L'amplificateur opérationnel (A.O.) idéal et le régime linéaire",
      "summary": "Brochage de l'A.O. (entrées inverseuse E⁻, non-inverseuse E⁺, sortie S, alimentations ±Vcc), hypothèses du composant idéal (i⁺ = i⁻ = 0, gain infini), rétroaction négative vers E⁻, tension différentielle nulle ε = 0, principe de la masse virtuelle et limites de saturation ±Vsat.",
      "conceptExplanation": "1. Présentation et brochage d'un amplificateur opérationnel (A.O.) :\nL'amplificateur opérationnel (souvent un circuit intégré de type µA741 ou TL081) comporte cinq bornes principales indispensables à son fonctionnement :\n- L'entrée non-inverseuse, notée E⁺ (potentiel V⁺) ;\n- L'entrée inverseuse, notée E⁻ (potentiel V⁻) ;\n- La sortie, notée S (potentiel Vs ou tension de sortie us) ;\n- Deux bornes d'alimentation symétrique continue : +Vcc (ex: +15 V) et -Vcc (ex: -15 V).\n\n2. Caractéristiques fondamentales de l'A.O. idéal (ou parfait) :\n- Impédance d'entrée infinie (Re → ∞) : aucun courant n'entre dans les bornes d'entrée de l'A.O. : i⁺ = 0 et i⁻ = 0 ;\n- Gain différentiel en boucle ouverte infini (Ad → ∞) ;\n- Impédance de sortie nulle (Rs ≈ 0) : la tension délivrée en sortie us ne dépend pas de la charge branchée en aval.\n\n3. Fonctionnement en régime linéaire et contre-réaction :\nPour fonctionner en régime linéaire (amplification sans distorsion ni saturation), l'A.O. doit obligatoirement comporter une boucle de rétroaction négative reliant la sortie S à l'entrée inverseuse E⁻ (contre-réaction). En régime linéaire, la tension différentielle d'entrée est rigoureusement nulle :\nε = V⁺ - V⁻ = 0 \\iff V⁺ = V⁻.\n\n4. Le principe fondamental de la masse virtuelle :\nDans les montages où l'entrée non-inverseuse E⁺ est reliée à la masse du circuit (V⁺ = 0 V), la condition du régime linéaire impose immédiatement :\nV⁻ = V⁺ = 0 V.\nBien que l'entrée E⁻ ne soit pas reliée matériellement à la masse, son potentiel électrique est strictement nul : on dit que l'entrée E⁻ est une masse virtuelle.\n\n5. Limites de fonctionnement et tension de saturation :\nLa tension de sortie us ne peut jamais dépasser la tension d'alimentation. Dès que la formule théorique donne une valeur supérieure en valeur absolue à Vsat (où Vsat ≈ Vcc - 1,5 V, soit environ ±13,5 V pour Vcc = ±15 V), la sortie s'écrête et plafonne à +Vsat ou -Vsat (régime saturé).",
      "keyRule": "En régime linéaire (présence d'une contre-réaction sur E⁻) : i⁺ = i⁻ = 0 et V⁺ = V⁻. Si E⁺ est à la masse, alors V⁻ = 0 V (masse virtuelle). La sortie doit vérifier |us| < Vsat.",
      "formulas": [
        {
          "name": "Courants d'entrée nuls de l'A.O. idéal",
          "formula": "i^+ = i^- = 0",
          "note": "Impédance d'entrée infinie"
        },
        {
          "name": "Égalité des potentiels d'entrée en régime linéaire",
          "formula": "\\varepsilon = V^+ - V^- = 0 \\implies V^- = V^+",
          "note": "Tension différentielle nulle"
        },
        {
          "name": "Masse virtuelle (quand E⁺ est à la masse)",
          "formula": "V^- = 0\\text{ V}",
          "note": "Car V⁺ = 0 V"
        }
      ],
      "workedExample": {
        "title": "Vérification des conditions de régime linéaire sur un A.O.",
        "statement": "Un montage à A.O. idéal est alimenté sous une tension symétrique ±15 V (avec Vsat = 14 V). L'entrée non-inverseuse E⁺ est reliée à la masse. Une résistance de contre-réaction relie la sortie S à l'entrée inverseuse E⁻.\\n1. Que valent les courants i⁺ et i⁻ entrant dans l'A.O. ?\\n2. Que vaut le potentiel V⁻ de l'entrée inverseuse ?\\n3. Si un calcul théorique donne us = 11,2 V, l'A.O. fonctionne-t-il bien en régime linéaire ? Que se passe-t-il si le calcul donne us = 18,5 V ?",
        "methodSteps": [
          "Étape 1 : Pour un A.O. idéal, l'impédance d'entrée est infinie, par conséquent : i⁺ = 0 A et i⁻ = 0 A.",
          "Étape 2 : Comme la sortie est reliée à l'entrée inverseuse E⁻, l'A.O. fonctionne en régime linéaire tant que la sortie ne sature pas, d'où ε = V⁺ - V⁻ = 0 => V⁻ = V⁺. Puisque E⁺ est à la masse (V⁺ = 0 V), on a V⁻ = 0 V (masse virtuelle).",
          "Étape 3 : Examiner les valeurs de us par rapport à Vsat = 14 V :\\n- Pour us = 11,2 V : |11,2 V| < 14 V, l'A.O. opère parfaitement en régime linéaire sans écrêtage.\\n- Pour un calcul théorique donnant us = 18,5 V : |18,5 V| > Vsat, la sortie ne peut pas atteindre cette valeur et sature à us = +Vsat = +14 V."
        ],
        "conclusion": "L'A.O. idéal impose V⁻ = 0 V et i⁻ = 0 sous réserve stricte que la tension de sortie calculée reste confinée dans l'intervalle [-Vsat ; +Vsat]."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison des régimes de fonctionnement d'un A.O.",
        "tableData": {
          "headers": [
            "Régime de fonctionnement",
            "Boucle de rétroaction",
            "Relation entre V⁺ et V⁻",
            "Tension différentielle ε",
            "Tension de sortie us"
          ],
          "rows": [
            [
              "Régime linéaire (amplificateur)",
              "Contre-réaction sur l'entrée inverseuse E⁻",
              "V⁺ = V⁻ (potentiels égaux)",
              "ε = V⁺ - V⁻ = 0 V",
              "-Vsat < us < +Vsat (signal continu/variable)"
            ],
            [
              "Saturation positive",
              "Absente (boucle ouverte) ou réaction sur E⁺",
              "V⁺ > V⁻",
              "ε > 0",
              "us = +Vsat (valeur fixe de saturation)"
            ],
            [
              "Saturation négative",
              "Absente (boucle ouverte) ou réaction sur E⁺",
              "V⁺ < V⁻",
              "ε < 0",
              "us = -Vsat (valeur fixe de saturation)"
            ],
            [
              "Masse virtuelle",
              "Contre-réaction sur E⁻ avec E⁺ à la masse",
              "V⁻ = V⁺ = 0 V",
              "ε = 0 V",
              "Point E⁻ au potentiel zéro sans contact de masse"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Brochage et alimentation symétrique de l'A.O.",
          "stepTheme": "Composant A.O.",
          "stepBadge": "E⁺, E⁻, S, ±Vcc",
          "paragraphText": "L'amplificateur opérationnel est un circuit intégré linéaire actif comprenant deux entrées de commande (l'entrée inverseuse E⁻ et l'entrée non-inverseuse E⁺), une sortie S et deux bornes d'alimentation symétrique continue (+Vcc et -Vcc par rapport à la masse).",
          "exercise": {
            "id": "terminale_d_physique_l09_p01_q1",
            "type": "mcq",
            "prompt": "Quelles sont les deux entrées de commande d'un amplificateur opérationnel (A.O.) ?",
            "options": [
              "L'entrée inverseuse E⁻ et l'entrée non-inverseuse E⁺",
              "L'entrée positive +Vcc et l'entrée négative -Vcc",
              "L'entrée primaire et l'entrée secondaire",
              "L'entrée anode et l'entrée cathode"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'A.O. dispose de deux entrées différentielles : l'entrée inverseuse E⁻ (qui inverse la phase de 180°) et l'entrée non-inverseuse E⁺."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Hypothèses de l'A.O. idéal : i⁺ = 0 et i⁻ = 0",
          "stepTheme": "A.O. idéal",
          "stepBadge": "Re → ∞ => i⁺ = i⁻ = 0",
          "paragraphText": "Dans le modèle de l'A.O. idéal (ou parfait), la résistance d'entrée différentielle est considérée comme infinie (Re → ∞). Il en résulte qu'aucun courant électrique ne peut pénétrer ni sortir des bornes d'entrée : i⁺ = 0 et i⁻ = 0.",
          "exercise": {
            "id": "terminale_d_physique_l09_p01_q2",
            "type": "mcq",
            "prompt": "Que valent les courants i⁺ et i⁻ entrant respectivement par les bornes E⁺ et E⁻ d'un A.O. considéré comme idéal ?",
            "options": [
              "i⁺ = 0 A et i⁻ = 0 A",
              "i⁺ = +1 A et i⁻ = -1 A",
              "i⁺ = i⁻ = Vcc / 1000",
              "Leur somme est toujours égale au courant de sortie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'impédance d'entrée d'un A.O. idéal étant infinie, aucun courant ne franchit ses entrées : i⁺ = 0 et i⁻ = 0."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Régime linéaire assuré par la contre-réaction",
          "stepTheme": "Régime linéaire",
          "stepBadge": "Boucle S vers E⁻",
          "paragraphText": "Un A.O. fonctionne en régime linéaire si et seulement si sa sortie S est reliée à son entrée inverseuse E⁻ par un dipôle passif (résistor, condensateur). Cette contre-réaction stabilise le système et force la tension différentielle à s'annuler : ε = V⁺ - V⁻ = 0, d'où V⁺ = V⁻.",
          "exercise": {
            "id": "terminale_d_physique_l09_p01_q3",
            "type": "mcq",
            "prompt": "À quelle condition structurelle un montage à A.O. fonctionne-t-il en régime linéaire ?",
            "options": [
              "La sortie S doit être reliée à l'entrée inverseuse E⁻ par un composant passif (contre-réaction négative)",
              "La sortie S doit être reliée à l'entrée non-inverseuse E⁺",
              "Aucune boucle ne doit relier la sortie aux entrées (boucle ouverte)",
              "L'A.O. doit être alimenté par une pile de 1,5 V seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La contre-réaction négative (liaison S vers E⁻) assure la stabilité et impose le régime linéaire où ε = V⁺ - V⁻ = 0."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le concept fondamental de masse virtuelle",
          "stepTheme": "Masse virtuelle",
          "stepBadge": "V⁺ = 0 => V⁻ = 0 V",
          "paragraphText": "Lorsque l'entrée non-inverseuse E⁺ est connectée à la masse de référence (V⁺ = 0 V), la condition de régime linéaire V⁻ = V⁺ impose immédiatement V⁻ = 0 V. Le nœud E⁻ se comporte électriquement comme la masse (potentiel nul) sans être relié au conducteur de terre : c'est la masse virtuelle.",
          "exercise": {
            "id": "terminale_d_physique_l09_p01_q4",
            "type": "mcq",
            "prompt": "Dans un montage en régime linéaire où la borne E⁺ est reliée à la masse (V⁺ = 0 V), que vaut le potentiel électrique V⁻ du point E⁻ ?",
            "options": [
              "V⁻ = 0 V (masse virtuelle)",
              "V⁻ = +Vcc",
              "V⁻ = -Vcc",
              "V⁻ dépend de la valeur de la résistance de charge"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Puisque ε = V⁺ - V⁻ = 0, on a V⁻ = V⁺. Si E⁺ est reliée à la masse (V⁺ = 0 V), alors V⁻ = 0 V (masse virtuelle)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confusion entre régime linéaire et saturation",
          "stepTheme": "Saturation ±Vsat",
          "stepBadge": "|us| ≤ Vsat",
          "paragraphText": "En régime linéaire, la tension de sortie us est proportionnelle ou reliée par une opération mathématique au signal d'entrée. Si le calcul théorique prédit une tension supérieure en valeur absolue à Vsat, le signal réel est tronqué (écrêté) à +Vsat ou -Vsat et la linéarité est rompue.",
          "exercise": {
            "id": "terminale_d_physique_l09_p01_q5",
            "type": "mcq",
            "prompt": "Un montage amplificateur alimenté en ±12 V (Vsat = 11 V) devrait théoriquement délivrer us = 14,5 V. Que mesure-t-on réellement en sortie ?",
            "options": [
              "us = +11 V car l'amplificateur est saturé",
              "us = +14,5 V sans distorsion",
              "us = 0 V car l'appareil s'éteint",
              "us = -11 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La tension de sortie est physiquement plafonnée à la tension de saturation Vsat. Elle ne peut jamais dépasser ±11 V."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Ordre de grandeur de la tension de saturation",
          "stepTheme": "Tension Vsat",
          "stepBadge": "Vsat ≈ Vcc - 1,5 V",
          "paragraphText": "Pour la plupart des A.O. standards (sauf technologie rail-to-rail), la tension de saturation maximale est légèrement inférieure à la tension d'alimentation de l'étage de sortie des transistors internes : Vsat ≈ Vcc - 1,5 V (par exemple pour Vcc = ±15 V, Vsat ≈ 13,5 V à 14 V).",
          "exercise": {
            "id": "terminale_d_physique_l09_p01_q6",
            "type": "mcq",
            "prompt": "Si un A.O. classique est alimenté sous une tension symétrique de ±15 V, dans quelle plage de tension peut évoluer son signal de sortie en régime linéaire ?",
            "options": [
              "Entre environ -13,5 V et +13,5 V",
              "Entre -150 V et +150 V",
              "Entre 0 V et +5 V uniquement",
              "Entre -1 V et +1 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La tension de sortie en régime linéaire est strictement confinée dans l'intervalle [-Vsat ; +Vsat], soit environ ±13,5 V pour Vcc = ±15 V."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Impédance de sortie nulle de l'A.O. idéal",
          "stepTheme": "Impédance de sortie",
          "stepBadge": "Rs ≈ 0 Ω",
          "paragraphText": "L'A.O. idéal possède une impédance de sortie nulle (Rs ≈ 0). Cela signifie que la tension de sortie us ne s'effondre pas lorsqu'on y branche une charge résistive Ru : l'A.O. se comporte comme un générateur de tension parfait vis-à-vis du circuit aval.",
          "exercise": {
            "id": "terminale_d_physique_l09_p01_q7",
            "type": "mcq",
            "prompt": "Quelle est la conséquence pratique d'une impédance de sortie nulle (Rs ≈ 0) pour un amplificateur opérationnel idéal ?",
            "options": [
              "La tension de sortie us reste constante et indépendante de la charge connectée en sortie",
              "L'A.O. ne consomme aucune puissance sur ses alimentations",
              "La tension de sortie devient toujours égale à zéro volt",
              "Le courant d'entrée i⁺ devient infini"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une impédance de sortie nulle garantit que la tension us reste invariable quelle que soit la résistance de la charge connectée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l09_p01_q1",
          "type": "mcq",
          "prompt": "Quelles sont les deux entrées de commande d'un amplificateur opérationnel (A.O.) ?",
          "options": [
            "L'entrée inverseuse E⁻ et l'entrée non-inverseuse E⁺",
            "L'entrée positive +Vcc et l'entrée négative -Vcc",
            "L'entrée primaire et l'entrée secondaire",
            "L'entrée anode et l'entrée cathode"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'A.O. dispose de deux entrées différentielles : l'entrée inverseuse E⁻ (qui inverse la phase de 180°) et l'entrée non-inverseuse E⁺."
        },
        {
          "id": "terminale_d_physique_l09_p01_q2",
          "type": "mcq",
          "prompt": "Que valent les courants i⁺ et i⁻ entrant respectivement par les bornes E⁺ et E⁻ d'un A.O. considéré comme idéal ?",
          "options": [
            "i⁺ = 0 A et i⁻ = 0 A",
            "i⁺ = +1 A et i⁻ = -1 A",
            "i⁺ = i⁻ = Vcc / 1000",
            "Leur somme est toujours égale au courant de sortie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'impédance d'entrée d'un A.O. idéal étant infinie, aucun courant ne franchit ses entrées : i⁺ = 0 et i⁻ = 0."
        },
        {
          "id": "terminale_d_physique_l09_p01_q3",
          "type": "mcq",
          "prompt": "À quelle condition structurelle un montage à A.O. fonctionne-t-il en régime linéaire ?",
          "options": [
            "La sortie S doit être reliée à l'entrée inverseuse E⁻ par un composant passif (contre-réaction négative)",
            "La sortie S doit être reliée à l'entrée non-inverseuse E⁺",
            "Aucune boucle ne doit relier la sortie aux entrées (boucle ouverte)",
            "L'A.O. doit être alimenté par une pile de 1,5 V seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La contre-réaction négative (liaison S vers E⁻) assure la stabilité et impose le régime linéaire où ε = V⁺ - V⁻ = 0."
        },
        {
          "id": "terminale_d_physique_l09_p01_q4",
          "type": "mcq",
          "prompt": "Dans un montage en régime linéaire où la borne E⁺ est reliée à la masse (V⁺ = 0 V), que vaut le potentiel électrique V⁻ du point E⁻ ?",
          "options": [
            "V⁻ = 0 V (masse virtuelle)",
            "V⁻ = +Vcc",
            "V⁻ = -Vcc",
            "V⁻ dépend de la valeur de la résistance de charge"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque ε = V⁺ - V⁻ = 0, on a V⁻ = V⁺. Si E⁺ est reliée à la masse (V⁺ = 0 V), alors V⁻ = 0 V (masse virtuelle)."
        },
        {
          "id": "terminale_d_physique_l09_p01_q5",
          "type": "mcq",
          "prompt": "Un montage amplificateur alimenté en ±12 V (Vsat = 11 V) devrait théoriquement délivrer us = 14,5 V. Que mesure-t-on réellement en sortie ?",
          "options": [
            "us = +11 V car l'amplificateur est saturé",
            "us = +14,5 V sans distorsion",
            "us = 0 V car l'appareil s'éteint",
            "us = -11 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La tension de sortie est physiquement plafonnée à la tension de saturation Vsat. Elle ne peut jamais dépasser ±11 V."
        },
        {
          "id": "terminale_d_physique_l09_p01_q6",
          "type": "mcq",
          "prompt": "Si un A.O. classique est alimenté sous une tension symétrique de ±15 V, dans quelle plage de tension peut évoluer son signal de sortie en régime linéaire ?",
          "options": [
            "Entre environ -13,5 V et +13,5 V",
            "Entre -150 V et +150 V",
            "Entre 0 V et +5 V uniquement",
            "Entre -1 V et +1 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La tension de sortie en régime linéaire est strictement confinée dans l'intervalle [-Vsat ; +Vsat], soit environ ±13,5 V pour Vcc = ±15 V."
        },
        {
          "id": "terminale_d_physique_l09_p01_q7",
          "type": "mcq",
          "prompt": "Quelle est la conséquence pratique d'une impédance de sortie nulle (Rs ≈ 0) pour un amplificateur opérationnel idéal ?",
          "options": [
            "La tension de sortie us reste constante et indépendante de la charge connectée en sortie",
            "L'A.O. ne consomme aucune puissance sur ses alimentations",
            "La tension de sortie devient toujours égale à zéro volt",
            "Le courant d'entrée i⁺ devient infini"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une impédance de sortie nulle garantit que la tension us reste invariable quelle que soit la résistance de la charge connectée."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l09_p02",
      "order": 2,
      "title": "Constitution et relation entrée-sortie du montage dérivateur",
      "summary": "Schéma structurel du dérivateur (condensateur C en entrée, résistor R en boucle de contre-réaction, E⁺ à la masse), application de la masse virtuelle V⁻ = 0 V, loi des nœuds en E⁻ et démonstration rigoureuse de la loi us = -RC (due/dt).",
      "conceptExplanation": "1. Schéma structural du montage dérivateur :\nLe montage dérivateur est constitué de :\n- Un condensateur de capacité C placé en série entre la tension d'entrée ue(t) et l'entrée inverseuse E⁻ ;\n- Un résistor de résistance R placé dans la boucle de contre-réaction entre l'entrée inverseuse E⁻ et la borne de sortie S ;\n- L'entrée non-inverseuse E⁺ reliée directement à la masse du montage (V⁺ = 0 V).\n\n2. Établissement rigoureux de la relation entrée-sortie :\n- L'A.O. fonctionnant en régime linéaire avec E⁺ à la masse, le point E⁻ est une masse virtuelle : V⁻ = V⁺ = 0 V ;\n- Le courant d'entrée i(t) traversant le condensateur s'écrit en fonction de sa charge q(t) = C · uC(t) :\nuC(t) = ue(t) - V⁻ = ue(t) - 0 = ue(t) \\implies i(t) = \\frac{\\mathrm{d}q}{\\mathrm{d}t} = C \\,\\frac{\\mathrm{d}u_e}{\\mathrm{d}t} ;\n- D'après l'hypothèse de l'A.O. idéal, le courant pénétrant dans l'entrée inverseuse est nul (i⁻ = 0). D'après la loi des nœuds en E⁻, tout le courant i(t) s'écoule intégralement à travers le résistor de contre-réaction R de E⁻ vers S ;\n- La tension aux bornes du résistor R (orientée de E⁻ vers S) s'écrit par la loi d'Ohm :\nV⁻ - u_s(t) = R · i(t) \\iff 0 - u_s(t) = R · i(t) \\iff u_s(t) = - R · i(t) ;\n- En substituant l'expression de i(t), on obtient la relation fondamentale du dérivateur :\nu_s(t) = - R\\,C\\,\\frac{\\mathrm{d}u_e(t)}{\\mathrm{d}t}.\n\n3. Analyse physique de la relation :\n- La tension de sortie us(t) est rigoureusement proportionnelle à la dérivée temporelle de la tension d'entrée due/dt ;\n- Le facteur de proportionnalité est le produit -RC, où τ = RC est la constante de temps du montage (homogène à une durée, en secondes) ;\n- Le signe '-' traduit le fait que le signal dérivé est inversé (déphasage de 180°).",
      "keyRule": "Pour le montage dérivateur (C à l'entrée, R en contre-réaction) : us(t) = -RC (due/dt). La sortie est proportionnelle à la dérivée temporelle de l'entrée avec inversion de polarité.",
      "formulas": [
        {
          "name": "Loi entrée-sortie du montage dérivateur",
          "formula": "u_s(t) = -R\\,C\\,\\frac{\\mathrm{d}u_e(t)}{\\mathrm{d}t}",
          "note": "R en Ω, C en F, us et ue en V, t en s"
        },
        {
          "name": "Courant traversant le condensateur d'entrée",
          "formula": "i(t) = C\\,\\frac{\\mathrm{d}u_e}{\\mathrm{d}t}",
          "note": "Car V⁻ = 0 V (masse virtuelle)"
        }
      ],
      "workedExample": {
        "title": "Calcul de la tension de sortie d'un dérivateur pour une rampe de tension",
        "statement": "On réalise un montage dérivateur avec une résistance R = 10 kΩ (10⁴ Ω) et un condensateur de capacité C = 100 nF (10⁻⁷ F). L'A.O. est alimenté sous ±15 V (Vsat = 14 V).\\nLa tension d'entrée ue(t) est une rampe linéaire qui croît de 0 V à 6,0 V en une durée Δt = 5,0 ms.\\n1. Calcule la constante de temps τ = RC du montage.\\n2. Calcule la vitesse de variation (la dérivée) due/dt de la tension d'entrée.\\n3. Détermine la tension de sortie us pendant cette rampe et vérifie que l'A.O. ne sature pas.",
        "methodSteps": [
          "Étape 1 : Calculer la constante de temps : τ = R * C = 10⁴ Ω * (100 * 10⁻⁹ F) = 10⁴ * 10⁻⁷ = 1,0 * 10⁻³ s = 1,0 ms.",
          "Étape 2 : Calculer la dérivée temporelle due/dt : La rampe étant linéaire, la dérivée est constante : due/dt = Δue / Δt = (6,0 - 0) / (5,0 * 10⁻³ s) = 6,0 / 0,005 = +1200 V·s⁻¹.",
          "Étape 3 : Appliquer la formule du dérivateur : us(t) = -RC * (due/dt) = - (1,0 * 10⁻³ s) * (+1200 V·s⁻¹) = -1,2 V.",
          "Étape 4 : Vérifier la condition de non-saturation : |-1,2 V| = 1,2 V < Vsat = 14 V. L'A.O. fonctionne bien en régime linéaire : la sortie délivre un palier continu constant us = -1,2 V pendant toute la durée de la rampe."
        ],
        "conclusion": "Une rampe d'entrée à croissance linéaire produit en sortie du dérivateur un palier de tension constant et négatif de -1,2 V."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Constitution et équations du montage dérivateur",
        "tableData": {
          "headers": [
            "Composant / Branche",
            "Emplacement dans le montage",
            "Expression électrique associée",
            "Rôle physique"
          ],
          "rows": [
            [
              "Condensateur C",
              "En série sur l'entrée (entre ue et E⁻)",
              "i = C · d(ue - V⁻)/dt = C · due/dt",
              "Transforme les variations de tension en courant"
            ],
            [
              "Résistor R",
              "En contre-réaction (entre E⁻ et S)",
              "V⁻ - us = R · i => us = - R · i",
              "Convertit le courant d'entrée en tension de sortie"
            ],
            [
              "Borne E⁺",
              "Reliée à la masse de référence (0 V)",
              "V⁺ = 0 V => V⁻ = 0 V",
              "Crée la masse virtuelle à l'entrée inverseuse"
            ],
            [
              "Sortie globale us",
              "Borne de sortie S",
              "us = - R C · (due/dt)",
              "Signal analogique dérivé inversé"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Schéma structurel du montage dérivateur",
          "stepTheme": "Schéma électronique",
          "stepBadge": "C en entrée, R en boucle",
          "paragraphText": "Le montage dérivateur inverseur à A.O. est caractérisé par un condensateur C connecté entre la borne d'entrée de tension ue et l'entrée inverseuse E⁻, et un résistor de résistance R reliant cette entrée inverseuse E⁻ à la sortie S, l'entrée E⁺ étant à la masse.",
          "exercise": {
            "id": "terminale_d_physique_l09_p02_q1",
            "type": "mcq",
            "prompt": "Dans un montage dérivateur à amplificateur opérationnel, où se placent respectivement le condensateur C et le conducteur ohmique R ?",
            "options": [
              "C est placé en entrée (vers E⁻) et R est placé dans la boucle de contre-réaction (entre E⁻ et S)",
              "R est placé en entrée (vers E⁻) et C est placé dans la boucle de contre-réaction",
              "C et R sont tous deux placés en parallèle à l'entrée",
              "C et R sont placés en série à la sortie de l'A.O."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans le montage dérivateur, le condensateur C est obligatoirement à l'entrée et le résistor R est dans la boucle de contre-réaction."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Démonstration de la relation us = -RC (due/dt)",
          "stepTheme": "Démonstration mathématique",
          "stepBadge": "Loi des nœuds en E⁻",
          "paragraphText": "Puisque V⁻ = 0 V (masse virtuelle) et i⁻ = 0, le courant traversant le condensateur vaut i = C (due/dt). Ce courant traverse intégralement le résistor R vers la sortie, créant la différence de potentiel V⁻ - us = 0 - us = R · i, d'où us = -RC (due/dt).",
          "exercise": {
            "id": "terminale_d_physique_l09_p02_q2",
            "type": "mcq",
            "prompt": "Quelle est la relation reliant la tension de sortie us(t) et la tension d'entrée ue(t) pour un montage dérivateur idéal ?",
            "options": [
              "us(t) = - R · C · (due / dt)",
              "us(t) = - (1 / RC) · (due / dt)",
              "us(t) = + R · C · (due / dt)",
              "us(t) = - (R / C) · ue(t)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La relation fondamentale du montage dérivateur est us(t) = -RC (due/dt)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le signe négatif et inversion de polarité",
          "stepTheme": "Comportement du signe",
          "stepBadge": "Signe '-' obligatoire",
          "paragraphText": "Le signe moins dans us = -RC (due/dt) provient de l'utilisation de l'entrée inverseuse E⁻. Lorsque la tension d'entrée augmente (due/dt > 0), la tension de sortie est négative (us < 0) ; lorsque l'entrée diminue (due/dt < 0), la tension de sortie devient positive (us > 0).",
          "exercise": {
            "id": "terminale_d_physique_l09_p02_q3",
            "type": "mcq",
            "prompt": "À l'entrée d'un montage dérivateur de constante RC = 2,0 ms, la tension augmente de façon constante à raison de due/dt = +500 V·s⁻¹. Que vaut la tension de sortie us ?",
            "options": [
              "us = -1,0 V",
              "us = +1,0 V",
              "us = -250 V",
              "us = +1000 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "us = -RC (due/dt) = - (2,0 * 10⁻³ s) * (+500 V·s⁻¹) = -1,0 V."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La constante de temps τ = RC comme facteur d'échelle",
          "stepTheme": "Dimensionnement",
          "stepBadge": "τ = R C en secondes",
          "paragraphText": "Le produit R · C a la dimension d'un temps (exprimé en secondes). Il calibre le gain d'amplitude du dérivateur. Pour éviter de saturer l'A.O. sous des variations rapides, on choisit généralement une constante RC comprise entre 0,1 ms et 10 ms.",
          "exercise": {
            "id": "terminale_d_physique_l09_p02_q4",
            "type": "mcq",
            "prompt": "Quelle est la valeur de la constante de temps d'un dérivateur conçu avec R = 47 kΩ et C = 22 nF ?",
            "options": [
              "τ ≈ 1,03 ms = 1,03 × 10⁻³ s",
              "τ ≈ 1,03 s",
              "τ ≈ 1,03 µs",
              "τ ≈ 10,3 ms"
            ],
            "correctAnswerIndex": 0,
            "explanation": "τ = R * C = (47 * 10³ Ω) * (22 * 10⁻⁹ F) = 1034 * 10⁻⁶ s ≈ 1,03 × 10⁻³ s = 1,03 ms."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le piège de l'inversion des composants R et C",
          "stepTheme": "Confusion d'architecture",
          "stepBadge": "Attention R <-> C",
          "paragraphText": "Attention à ne jamais confondre le dérivateur et l'intégrateur ! Si l'on permute les deux composants (résistance R à l'entrée et condensateur C en contre-réaction), le circuit n'est plus du tout un dérivateur, mais devient un montage intégrateur.",
          "exercise": {
            "id": "terminale_d_physique_l09_p02_q5",
            "type": "mcq",
            "prompt": "Quelle opération mathématique réalise un montage où le conducteur ohmique R est placé en entrée et le condensateur C dans la boucle de contre-réaction ?",
            "options": [
              "Une intégration mathématique (montage intégrateur us = -1/RC ∫ ue dt)",
              "Une dérivation mathématique (montage dérivateur)",
              "Une simple addition algébrique de deux tensions",
              "Une multiplication analogique de deux fréquences"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Placer R en entrée et C en contre-réaction donne la relation dus/dt = -(1/RC) ue, soit un montage intégrateur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Réponse du dérivateur à une tension constante",
          "stepTheme": "Entrée constante",
          "stepBadge": "due/dt = 0 => us = 0 V",
          "paragraphText": "Si la tension d'entrée est constante au cours du temps (ue(t) = U0 = constante), sa dérivée temporelle est rigoureusement nulle (due/dt = 0). La tension de sortie d'un dérivateur idéal est alors rigoureusement égale à 0 V, quelle que soit la valeur de U0.",
          "exercise": {
            "id": "terminale_d_physique_l09_p02_q6",
            "type": "mcq",
            "prompt": "On applique une tension continue constante ue = +8,0 V à l'entrée d'un montage dérivateur parfait. Que vaut la tension mesurée en sortie ?",
            "options": [
              "us = 0 V car la dérivée d'une constante est nulle",
              "us = -8,0 V",
              "us = +8,0 V",
              "us = -Vsat"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée d'une constante est nulle : due/dt = 0 => us = -RC * 0 = 0 V."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Dimension de l'unité Ohm-Farad",
          "stepTheme": "Analyse dimensionnelle",
          "stepBadge": "1 Ω · 1 F = 1 s",
          "paragraphText": "Le produit d'une résistance par une capacité est rigoureusement homogène à une durée dans le Système International : [R] · [C] = ([U] / [I]) · ([Q] / [U]) = [Q] / [I] = ([I] · [T]) / [I] = [T] (seconde).",
          "exercise": {
            "id": "terminale_d_physique_l09_p02_q7",
            "type": "mcq",
            "prompt": "Quelle est la dimension physique du produit d'une résistance électrique par une capacité dans le Système International ?",
            "options": [
              "Un temps [T], exprimé en secondes (s)",
              "Une fréquence [T]⁻¹, exprimée en Hertz (Hz)",
              "Une tension [U], exprimée en Volts (V)",
              "Une charge électrique [Q], exprimée en Coulombs (C)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le produit R·C s'exprime en secondes (1 Ohm × 1 Farad = 1 seconde)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l09_p02_q1",
          "type": "mcq",
          "prompt": "Dans un montage dérivateur à amplificateur opérationnel, où se placent respectivement le condensateur C et le conducteur ohmique R ?",
          "options": [
            "C est placé en entrée (vers E⁻) et R est placé dans la boucle de contre-réaction (entre E⁻ et S)",
            "R est placé en entrée (vers E⁻) et C est placé dans la boucle de contre-réaction",
            "C et R sont tous deux placés en parallèle à l'entrée",
            "C et R sont placés en série à la sortie de l'A.O."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le montage dérivateur, le condensateur C est obligatoirement à l'entrée et le résistor R est dans la boucle de contre-réaction."
        },
        {
          "id": "terminale_d_physique_l09_p02_q2",
          "type": "mcq",
          "prompt": "Quelle est la relation reliant la tension de sortie us(t) et la tension d'entrée ue(t) pour un montage dérivateur idéal ?",
          "options": [
            "us(t) = - R · C · (due / dt)",
            "us(t) = - (1 / RC) · (due / dt)",
            "us(t) = + R · C · (due / dt)",
            "us(t) = - (R / C) · ue(t)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La relation fondamentale du montage dérivateur est us(t) = -RC (due/dt)."
        },
        {
          "id": "terminale_d_physique_l09_p02_q3",
          "type": "mcq",
          "prompt": "À l'entrée d'un montage dérivateur de constante RC = 2,0 ms, la tension augmente de façon constante à raison de due/dt = +500 V·s⁻¹. Que vaut la tension de sortie us ?",
          "options": [
            "us = -1,0 V",
            "us = +1,0 V",
            "us = -250 V",
            "us = +1000 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "us = -RC (due/dt) = - (2,0 * 10⁻³ s) * (+500 V·s⁻¹) = -1,0 V."
        },
        {
          "id": "terminale_d_physique_l09_p02_q4",
          "type": "mcq",
          "prompt": "Quelle est la valeur de la constante de temps d'un dérivateur conçu avec R = 47 kΩ et C = 22 nF ?",
          "options": [
            "τ ≈ 1,03 ms = 1,03 × 10⁻³ s",
            "τ ≈ 1,03 s",
            "τ ≈ 1,03 µs",
            "τ ≈ 10,3 ms"
          ],
          "correctAnswerIndex": 0,
          "explanation": "τ = R * C = (47 * 10³ Ω) * (22 * 10⁻⁹ F) = 1034 * 10⁻⁶ s ≈ 1,03 × 10⁻³ s = 1,03 ms."
        },
        {
          "id": "terminale_d_physique_l09_p02_q5",
          "type": "mcq",
          "prompt": "Quelle opération mathématique réalise un montage où le conducteur ohmique R est placé en entrée et le condensateur C dans la boucle de contre-réaction ?",
          "options": [
            "Une intégration mathématique (montage intégrateur us = -1/RC ∫ ue dt)",
            "Une dérivation mathématique (montage dérivateur)",
            "Une simple addition algébrique de deux tensions",
            "Une multiplication analogique de deux fréquences"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Placer R en entrée et C en contre-réaction donne la relation dus/dt = -(1/RC) ue, soit un montage intégrateur."
        },
        {
          "id": "terminale_d_physique_l09_p02_q6",
          "type": "mcq",
          "prompt": "On applique une tension continue constante ue = +8,0 V à l'entrée d'un montage dérivateur parfait. Que vaut la tension mesurée en sortie ?",
          "options": [
            "us = 0 V car la dérivée d'une constante est nulle",
            "us = -8,0 V",
            "us = +8,0 V",
            "us = -Vsat"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée d'une constante est nulle : due/dt = 0 => us = -RC * 0 = 0 V."
        },
        {
          "id": "terminale_d_physique_l09_p02_q7",
          "type": "mcq",
          "prompt": "Quelle est la dimension physique du produit d'une résistance électrique par une capacité dans le Système International ?",
          "options": [
            "Un temps [T], exprimé en secondes (s)",
            "Une fréquence [T]⁻¹, exprimée en Hertz (Hz)",
            "Une tension [U], exprimée en Volts (V)",
            "Une charge électrique [Q], exprimée en Coulombs (C)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le produit R·C s'exprime en secondes (1 Ohm × 1 Farad = 1 seconde)."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l09_p03",
      "order": 3,
      "title": "Réponse du dérivateur aux signaux triangulaires et limitations",
      "summary": "Transformation d'un signal triangulaire symétrique en créneau rectangulaire, calcul de la pente de la rampe en fonction de l'amplitude Umax et de la fréquence f, condition impérative de non-saturation 4 RC Umax f < Vsat, et sensibilité extrême aux bruits haute fréquence.",
      "conceptExplanation": "1. Réponse à une tension d'entrée triangulaire symétrique :\nSoit une tension d'entrée triangulaire périodique, alternative et symétrique, de période T (fréquence f = 1/T), variant entre -Umax et +Umax :\n- Sur la première demi-période (de t = 0 à T/2) : la tension croît linéairement de -Umax à +Umax en une durée Δt = T/2. Sa pente vaut :\n\\frac{\\mathrm{d}u_e}{\\mathrm{d}t} = \\frac{+U_\\text{max} - (-U_\\text{max})}{T/2} = \\frac{2\\,U_\\text{max}}{T/2} = \\frac{4\\,U_\\text{max}}{T} = +4\\,U_\\text{max}\\,f.\nLa tension de sortie us est alors constante et négative :\nu_s = - R\\,C \\cdot (+4\\,U_\\text{max}\\,f) = - 4\\,R\\,C\\,U_\\text{max}\\,f.\n- Sur la seconde demi-période (de T/2 à T) : la tension décroît linéairement de +Umax à -Umax avec une pente opposée due/dt = -4 Umax f. La tension de sortie est alors constante et positive :\nu_s = - R\\,C \\cdot (-4\\,U_\\text{max}\\,f) = + 4\\,R\\,C\\,U_\\text{max}\\,f.\nLe signal de sortie obtenu est une tension en créneaux rectangulaires (alternative symétrique) de même période T.\n\n2. Condition impérative de non-saturation (régime linéaire) :\nPour que le signal en créneau ne soit pas écrêté par la saturation de l'A.O., il faut impérativement que l'amplitude de la tension de sortie reste inférieure à Vsat :\n|u_s| = 4\\,R\\,C\\,U_\\text{max}\\,f \\le V_\\text{sat}.\nCette condition impose une fréquence maximale admissible pour le signal d'entrée :\nf \\le f_\\text{max} = \\frac{V_\\text{sat}}{4\\,R\\,C\\,U_\\text{max}}.\nSi f > f_max, la sortie sature à ±Vsat et le signal carré subit un écrêtage sévère.\n\n3. Limitation technologique du dérivateur pur (amplification du bruit) :\nSi le signal d'entrée contient un parasite haute fréquence sinusoïdal de pulsation ω élevée : u_bruit = Ab sin(ωt), sa dérivée vaut ω Ab cos(ωt). Le facteur ω multiplie l'amplitude du bruit par la fréquence : le dérivateur amplifie considérablement les bruits parasites haute fréquence, ce qui rend son utilisation délicate sans filtrage.",
      "keyRule": "Un dérivateur transforme un signal triangulaire en un signal créneau d'amplitude Us = 4 RC Umax f. Pour éviter la saturation, il faut 4 RC Umax f < Vsat.",
      "formulas": [
        {
          "name": "Tension de sortie pour une entrée triangulaire symétrique",
          "formula": "u_s = \\pm 4\\,R\\,C\\,U_\\text{max}\\,f",
          "note": "Umax = amplitude crête, f = 1/T = fréquence"
        },
        {
          "name": "Condition de non-saturation du dérivateur",
          "formula": "4\\,R\\,C\\,U_\\text{max}\\,f \\le V_\\text{sat}",
          "note": "Limite de fréquence fmax = Vsat / (4 RC Umax)"
        }
      ],
      "workedExample": {
        "title": "Dimensionnement d'un dérivateur soumis à une tension triangulaire",
        "statement": "On injecte à l'entrée d'un montage dérivateur (R = 22 kΩ, C = 47 nF) une tension triangulaire symétrique d'amplitude crête Umax = 2,5 V. L'A.O. est alimenté sous ±15 V (Vsat = 14 V).\\n1. Calcule la valeur de la tension de sortie us lorsque la fréquence du signal est f = 500 Hz.\\n2. Calcule la fréquence maximale fmax au-delà de laquelle l'A.O. sature.",
        "methodSteps": [
          "Étape 1 : Calculer le produit RC : RC = (22 * 10³ Ω) * (47 * 10⁻⁹ F) = 1,034 * 10⁻³ s = 1,034 ms.",
          "Étape 2 : Calculer la tension de sortie us à f = 500 Hz :\\nPendant la rampe montante, la pente vaut : due/dt = 4 * Umax * f = 4 * 2,5 * 500 = 5000 V·s⁻¹.\\nus = - RC * (due/dt) = - (1,034 * 10⁻³ s) * 5000 V·s⁻¹ ≈ -5,17 V.\\nPendant la rampe descendante, us = +5,17 V.\\nLa sortie est un signal en créneaux rectangulaires alternant entre -5,17 V et +5,17 V.",
          "Étape 3 : Calculer la fréquence maximale de non-saturation fmax :\\nCondition |us| ≤ Vsat => 4 * RC * Umax * fmax = Vsat\\nfmax = Vsat / (4 * RC * Umax) = 14 / (4 * 1,034 * 10⁻³ * 2,5) = 14 / (10,34 * 10⁻³) ≈ 1354 Hz."
        ],
        "conclusion": "À 500 Hz, la sortie délivre des créneaux de ±5,17 V sans saturation. Si la fréquence dépasse 1354 Hz, l'amplitude dépassera 14 V et le signal sera saturé à ±Vsat."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Chronogrammes comparés entrée triangulaire et sortie créneaux",
        "tableData": {
          "headers": [
            "Intervalle de temps",
            "Tension d'entrée ue(t)",
            "Pente due/dt",
            "Tension de sortie us(t)",
            "Forme d'onde"
          ],
          "rows": [
            [
              "0 ≤ t < T/2",
              "Croissance de -Umax à +Umax",
              "+4 Umax / T > 0",
              "- 4 RC Umax f < 0",
              "Palier constant négatif"
            ],
            [
              "T/2 ≤ t < T",
              "Décroissance de +Umax à -Umax",
              "-4 Umax / T < 0",
              "+ 4 RC Umax f > 0",
              "Palier constant positif"
            ],
            [
              "Aux sommets (t = 0, T/2)",
              "Inversion brutale de pente",
              "Discontinuité de dérivée",
              "Transition instantanée",
              "Front raide montant/descendant"
            ],
            [
              "Si f > fmax",
              "Triangulaire rapide",
              "Pente trop raide",
              "us écrêté à ±Vsat",
              "Créneau déformé par saturation"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Transformation de forme d'onde par le dérivateur",
          "stepTheme": "Opération analogique",
          "stepBadge": "Triangle -> Créneau",
          "paragraphText": "Le montage dérivateur transforme un signal triangulaire en un signal rectangulaire en créneaux. En effet, la dérivée d'une fonction affine (pente constante) est une constante, ce qui engendre des paliers de tension horizontaux en sortie.",
          "exercise": {
            "id": "terminale_d_physique_l09_p03_q1",
            "type": "mcq",
            "prompt": "Quelle est la forme du signal de sortie d'un dérivateur idéal alimenté par une tension triangulaire périodique symétrique ?",
            "options": [
              "Un signal en créneaux rectangulaires alternatifs",
              "Un signal triangulaire en phase",
              "Un signal sinusoïdal pur",
              "Une constante rigoureusement nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée d'une fonction triangulaire (succession de segments de droite) est un signal en créneau rectangulaire (succession de constantes positives et négatives)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Calcul de la pente d'un signal triangulaire symétrique",
          "stepTheme": "Calcul différentiel",
          "stepBadge": "Pente = 4 Umax f",
          "paragraphText": "Pour un signal triangulaire symétrique d'amplitude crête Umax et de période T, la tension varie de -Umax à +Umax (soit une variation Δue = 2 Umax) en une demi-période Δt = T/2. La pente vaut donc due/dt = (2 Umax) / (T/2) = 4 Umax / T = 4 Umax f.",
          "exercise": {
            "id": "terminale_d_physique_l09_p03_q2",
            "type": "mcq",
            "prompt": "Une tension triangulaire symétrique a une amplitude crête Umax = 3,0 V et une fréquence f = 200 Hz. Que vaut la pente due/dt lors de sa phase montante ?",
            "options": [
              "+2400 V·s⁻¹",
              "+600 V·s⁻¹",
              "+1200 V·s⁻¹",
              "+4800 V·s⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pente = 4 * Umax * f = 4 * 3,0 * 200 = 2400 V·s⁻¹."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calcul de l'amplitude crête de sortie",
          "stepTheme": "Amplitude de sortie",
          "stepBadge": "Us = 4 RC Umax f",
          "paragraphText": "En multipliant la pente due/dt = 4 Umax f par la constante RC, l'amplitude crête du créneau rectangulaire de sortie vaut Us = 4 RC Umax f. La tension alterne ainsi entre -Us et +Us.",
          "exercise": {
            "id": "terminale_d_physique_l09_p03_q3",
            "type": "mcq",
            "prompt": "Un dérivateur avec RC = 1,0 ms reçoit un signal triangulaire de Umax = 2,0 V à f = 250 Hz. Quelle est l'amplitude du créneau de sortie Us ?",
            "options": [
              "Us = 2,0 V",
              "Us = 4,0 V",
              "Us = 0,50 V",
              "Us = 8,0 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Us = 4 * RC * Umax * f = 4 * (1,0 * 10⁻³) * 2,0 * 250 = 2,0 V."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Condition stricte de non-saturation",
          "stepTheme": "Régime linéaire",
          "stepBadge": "Us < Vsat",
          "paragraphText": "Pour que le montage dérivateur fonctionne en régime linéaire sans déformer le signal, l'amplitude du créneau de sortie doit impérativement respecter la condition de non-saturation : Us = 4 RC Umax f < Vsat.",
          "exercise": {
            "id": "terminale_d_physique_l09_p03_q4",
            "type": "mcq",
            "prompt": "Quelle inégalité doit être respectée pour qu'un dérivateur traitant un signal triangulaire symétrique ne sature pas ?",
            "options": [
              "4 · R · C · Umax · f < Vsat",
              "R · C · f > Vsat",
              "Umax / (4 RC f) < Vsat",
              "4 · R · C · Umax · f > Vsat"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'amplitude de sortie crête Us = 4 RC Umax f doit rester inférieure à la tension de saturation Vsat pour conserver le régime linéaire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Conséquence de la saturation : l'écrêtage",
          "stepTheme": "Distorsion de signal",
          "stepBadge": "Plafonnement à ±Vsat",
          "paragraphText": "Si la fréquence d'entrée f dépasse fmax = Vsat / (4 RC Umax), la tension de sortie tente de dépasser Vsat mais se retrouve plafonnée à ±Vsat. Le signal obtenu présente alors des fronts adoucis ou des oscillations parasites.",
          "exercise": {
            "id": "terminale_d_physique_l09_p03_q5",
            "type": "mcq",
            "prompt": "Que se produit-il sur le signal de sortie d'un dérivateur si l'on augmente excessivement la fréquence du signal triangulaire d'entrée ?",
            "options": [
              "Le créneau s'écrête et sature à ±Vsat, détruisant la proportionnalité linéaire",
              "Le signal s'annule immédiatement",
              "La tension de sortie double sans aucune limite",
              "La forme d'onde se transforme spontanément en exponentielle pure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'amplitude théorique Us = 4 RC Umax f augmente avec la fréquence et finit par heurter le plafond physique ±Vsat."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Calcul de la fréquence maximale admissible fmax",
          "stepTheme": "Calcul de limite",
          "stepBadge": "fmax = Vsat / (4 RC Umax)",
          "paragraphText": "Pour un montage ayant RC = 0,50 ms, Umax = 1,0 V et alimenté sous Vsat = 12 V, la fréquence maximale d'utilisation sans saturation se calcule par fmax = 12 / (4 × 0,50 × 10⁻³ × 1,0) = 12 / (2,0 × 10⁻³) = 6000 Hz = 6,0 kHz.",
          "exercise": {
            "id": "terminale_d_physique_l09_p03_q6",
            "type": "mcq",
            "prompt": "Avec RC = 0,50 ms, Umax = 1,0 V et Vsat = 12 V, quelle est la fréquence limite au-delà de laquelle l'A.O. sature ?",
            "options": [
              "fmax = 6,0 kHz",
              "fmax = 1,5 kHz",
              "fmax = 24 kHz",
              "fmax = 500 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "fmax = Vsat / (4 RC Umax) = 12 / (4 * 0,50 * 10⁻³ * 1) = 6000 Hz = 6 kHz."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Amplification parasite du bruit haute fréquence",
          "stepTheme": "Défaut majeur du dérivateur",
          "stepBadge": "Amplification en ω",
          "paragraphText": "En régime sinusoïdal, le gain en tension du dérivateur est G = us/ue = RC ω = 2π RC f. Ce gain croît proportionnellement à la fréquence : le dérivateur amplifie donc intensément les micro-parasites et bruits de fond haute fréquence, ce qui nécessite en pratique l'ajout d'une petite résistance de protection en série avec C.",
          "exercise": {
            "id": "terminale_d_physique_l09_p03_q7",
            "type": "mcq",
            "prompt": "Pourquoi le montage dérivateur pur est-il délicat à utiliser en électronique industrielle sans filtre additionnel ?",
            "options": [
              "Parce que son gain augmente avec la fréquence, amplifiant démesurément les parasites haute fréquence",
              "Parce qu'il chauffe excessivement par effet Joule à basse fréquence",
              "Parce qu'il détruit systématiquement le condensateur d'entrée",
              "Parce qu'il ne fonctionne qu'avec des signaux d'amplitude supérieure à 100 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivation multiplie l'amplitude des signaux sinusoïdaux par leur pulsation ω (d/dt [sin ωt] = ω cos ωt), ce qui amplifie le bruit à haute fréquence."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l09_p03_q1",
          "type": "mcq",
          "prompt": "Quelle est la forme du signal de sortie d'un dérivateur idéal alimenté par une tension triangulaire périodique symétrique ?",
          "options": [
            "Un signal en créneaux rectangulaires alternatifs",
            "Un signal triangulaire en phase",
            "Un signal sinusoïdal pur",
            "Une constante rigoureusement nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée d'une fonction triangulaire (succession de segments de droite) est un signal en créneau rectangulaire (succession de constantes positives et négatives)."
        },
        {
          "id": "terminale_d_physique_l09_p03_q2",
          "type": "mcq",
          "prompt": "Une tension triangulaire symétrique a une amplitude crête Umax = 3,0 V et une fréquence f = 200 Hz. Que vaut la pente due/dt lors de sa phase montante ?",
          "options": [
            "+2400 V·s⁻¹",
            "+600 V·s⁻¹",
            "+1200 V·s⁻¹",
            "+4800 V·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pente = 4 * Umax * f = 4 * 3,0 * 200 = 2400 V·s⁻¹."
        },
        {
          "id": "terminale_d_physique_l09_p03_q3",
          "type": "mcq",
          "prompt": "Un dérivateur avec RC = 1,0 ms reçoit un signal triangulaire de Umax = 2,0 V à f = 250 Hz. Quelle est l'amplitude du créneau de sortie Us ?",
          "options": [
            "Us = 2,0 V",
            "Us = 4,0 V",
            "Us = 0,50 V",
            "Us = 8,0 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Us = 4 * RC * Umax * f = 4 * (1,0 * 10⁻³) * 2,0 * 250 = 2,0 V."
        },
        {
          "id": "terminale_d_physique_l09_p03_q4",
          "type": "mcq",
          "prompt": "Quelle inégalité doit être respectée pour qu'un dérivateur traitant un signal triangulaire symétrique ne sature pas ?",
          "options": [
            "4 · R · C · Umax · f < Vsat",
            "R · C · f > Vsat",
            "Umax / (4 RC f) < Vsat",
            "4 · R · C · Umax · f > Vsat"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'amplitude de sortie crête Us = 4 RC Umax f doit rester inférieure à la tension de saturation Vsat pour conserver le régime linéaire."
        },
        {
          "id": "terminale_d_physique_l09_p03_q5",
          "type": "mcq",
          "prompt": "Que se produit-il sur le signal de sortie d'un dérivateur si l'on augmente excessivement la fréquence du signal triangulaire d'entrée ?",
          "options": [
            "Le créneau s'écrête et sature à ±Vsat, détruisant la proportionnalité linéaire",
            "Le signal s'annule immédiatement",
            "La tension de sortie double sans aucune limite",
            "La forme d'onde se transforme spontanément en exponentielle pure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'amplitude théorique Us = 4 RC Umax f augmente avec la fréquence et finit par heurter le plafond physique ±Vsat."
        },
        {
          "id": "terminale_d_physique_l09_p03_q6",
          "type": "mcq",
          "prompt": "Avec RC = 0,50 ms, Umax = 1,0 V et Vsat = 12 V, quelle est la fréquence limite au-delà de laquelle l'A.O. sature ?",
          "options": [
            "fmax = 6,0 kHz",
            "fmax = 1,5 kHz",
            "fmax = 24 kHz",
            "fmax = 500 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "fmax = Vsat / (4 RC Umax) = 12 / (4 * 0,50 * 10⁻³ * 1) = 6000 Hz = 6 kHz."
        },
        {
          "id": "terminale_d_physique_l09_p03_q7",
          "type": "mcq",
          "prompt": "Pourquoi le montage dérivateur pur est-il délicat à utiliser en électronique industrielle sans filtre additionnel ?",
          "options": [
            "Parce que son gain augmente avec la fréquence, amplifiant démesurément les parasites haute fréquence",
            "Parce qu'il chauffe excessivement par effet Joule à basse fréquence",
            "Parce qu'il détruit systématiquement le condensateur d'entrée",
            "Parce qu'il ne fonctionne qu'avec des signaux d'amplitude supérieure à 100 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivation multiplie l'amplitude des signaux sinusoïdaux par leur pulsation ω (d/dt [sin ωt] = ω cos ωt), ce qui amplifie le bruit à haute fréquence."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l09_p04",
      "order": 4,
      "title": "Constitution et relation entrée-sortie du montage intégrateur",
      "summary": "Schéma structurel de l'intégrateur (résistor R en entrée, condensateur C en contre-réaction, E⁺ à la masse), application de la masse virtuelle V⁻ = 0 V, loi des mailles et relation intégrale us(t) = -1/(RC) ∫ ue dt + us(0).",
      "conceptExplanation": "1. Schéma structural du montage intégrateur :\nLe montage intégrateur est obtenu en permutant les positions respectives du conducteur ohmique et du condensateur par rapport au dérivateur :\n- Un conducteur ohmique de résistance R placé en série entre la tension d'entrée ue(t) et l'entrée inverseuse E⁻ ;\n- Un condensateur de capacité C placé dans la boucle de contre-réaction reliant l'entrée inverseuse E⁻ à la sortie S ;\n- L'entrée non-inverseuse E⁺ reliée directement à la masse du montage (V⁺ = 0 V).\n\n2. Établissement rigoureux de la relation entrée-sortie :\n- L'A.O. étant en régime linéaire avec E⁺ à la masse, on a la masse virtuelle : V⁻ = V⁺ = 0 V ;\n- Le courant i(t) arrivant par la résistance d'entrée s'exprime d'après la loi d'Ohm :\nue(t) - V⁻ = R · i(t) \\iff ue(t) - 0 = R · i(t) \\iff i(t) = \\frac{u_e(t)}{R} ;\n- Le courant d'entrée dans l'A.O. étant nul (i⁻ = 0), tout le courant i(t) traverse le condensateur C de E⁻ vers S pour charger son armature gauche :\ni(t) = \\frac{\\mathrm{d}q_C}{\\mathrm{d}t} = C \\,\\frac{\\mathrm{d}(V⁻ - u_s)}{\\mathrm{d}t} = C \\,\\frac{\\mathrm{d}(0 - u_s)}{\\mathrm{d}t} = - C \\,\\frac{\\mathrm{d}u_s(t)}{\\mathrm{d}t} ;\n- En égalant les deux expressions de i(t), on obtient l'équation différentielle instantanée reliant l'entrée et la sortie :\n\\frac{u_e(t)}{R} = - C \\,\\frac{\\mathrm{d}u_s(t)}{\\mathrm{d}t} \\iff \\frac{\\mathrm{d}u_s(t)}{\\mathrm{d}t} = - \\frac{1}{R\\,C}\\,u_e(t) ;\n- En intégrant les deux membres par rapport au temps entre t = 0 et un instant t quelconque, on obtient la formule intégrale fondamentale :\nu_s(t) = - \\frac{1}{R\\,C} \\int_0^t u_e(t')\\,\\mathrm{d}t' + u_s(0),\noù us(0) est la tension de sortie à l'instant initial (liée à la charge initiale éventuelle du condensateur, souvent nulle si C est initialement déchargé).\n\n3. Analyse physique de la relation :\n- La dérivée temporelle de la sortie dus/dt est directement proportionnelle à l'opposé de la tension d'entrée ue(t) ;\n- Le facteur de proportionnalité vaut -1/(RC) (exprimé en s⁻¹) ;\n- La tension de sortie us(t) représente l'intégrale temporelle (la primitive) de la tension d'entrée, inversée et pondérée par le coefficient 1/(RC).",
      "keyRule": "Pour le montage intégrateur (R en entrée, C en contre-réaction) : dus/dt = - (1/RC) ue(t) et us(t) = - 1/(RC) ∫ ue(t') dt' + us(0). La sortie est l'intégrale de l'entrée avec inversion.",
      "formulas": [
        {
          "name": "Loi entrée-sortie du montage intégrateur (forme différentielle)",
          "formula": "\\frac{\\mathrm{d}u_s(t)}{\\mathrm{d}t} = -\\frac{1}{R\\,C}\\,u_e(t)",
          "note": "La pente de la sortie est proportionnelle à l'entrée"
        },
        {
          "name": "Loi entrée-sortie du montage intégrateur (forme intégrale)",
          "formula": "u_s(t) = -\\frac{1}{R\\,C}\\int_0^t u_e(t')\\,\\mathrm{d}t' + u_s(0)",
          "note": "us(0) = tension initiale aux bornes de C"
        }
      ],
      "workedExample": {
        "title": "Intégration d'un échelon de tension continue",
        "statement": "On réalise un montage intégrateur avec R = 50 kΩ et C = 200 nF. Le condensateur est initialement déchargé : us(0) = 0 V. À t = 0, on applique à l'entrée un échelon de tension continue constante ue = +2,0 V. L'A.O. est alimenté sous ±15 V (Vsat = 14 V).\\n1. Calcule la constante de temps τ = RC.\\n2. Écris l'équation horaire de la tension de sortie us(t).\\n3. Au bout de combien de temps l'A.O. atteindra-t-il sa saturation négative -Vsat ?",
        "methodSteps": [
          "Étape 1 : Calculer la constante de temps : τ = R * C = (50 * 10³ Ω) * (200 * 10⁻⁹ F) = 10 000 * 10⁻⁶ s = 10⁻² s = 10 ms = 0,010 s.",
          "Étape 2 : Établir l'expression horaire de us(t) :\\nComme ue = U0 = constante = +2,0 V, l'intégrale donne :\\nus(t) = - (1 / RC) * ∫₀ᵗ U0 dt' + us(0) = - (U0 / RC) * t + 0 = - (2,0 / 0,010) * t = - 200 * t (avec t en secondes et us en Volts).\\nLa tension de sortie décroît de façon strictement linéaire (rampe négative de pente -200 V·s⁻¹).",
          "Étape 3 : Calculer la date de saturation tsat :\\nL'A.O. sature lorsque us atteint -Vsat = -14 V :\\n-200 * tsat = -14 => tsat = 14 / 200 = 0,070 s = 70 ms."
        ],
        "conclusion": "Sous un échelon de tension continue constante de +2,0 V, la tension de sortie est une rampe linéaire décroissante de pente -200 V·s⁻¹ qui atteint la saturation négative de -14 V au bout de 70 ms."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Constitution et équations du montage intégrateur",
        "tableData": {
          "headers": [
            "Composant / Branche",
            "Emplacement dans le montage",
            "Expression électrique associée",
            "Rôle physique"
          ],
          "rows": [
            [
              "Résistor R",
              "En série sur l'entrée (entre ue et E⁻)",
              "i = (ue - V⁻)/R = ue / R",
              "Convertit la tension d'entrée en courant de charge"
            ],
            [
              "Condensateur C",
              "En contre-réaction (entre E⁻ et S)",
              "i = - C · (dus/dt)",
              "Accumule les charges et intègre le courant"
            ],
            [
              "Borne E⁺",
              "Reliée à la masse de référence (0 V)",
              "V⁺ = 0 V => V⁻ = 0 V",
              "Assure la masse virtuelle en E⁻"
            ],
            [
              "Sortie globale us",
              "Borne de sortie S",
              "us = - 1/(RC) ∫ ue dt",
              "Délivre la primitive temporelle inversée"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Schéma structurel du montage intégrateur",
          "stepTheme": "Schéma électronique",
          "stepBadge": "R en entrée, C en boucle",
          "paragraphText": "Le montage intégrateur inverseur comprend un résistor de résistance R reliant la tension d'entrée ue à l'entrée inverseuse E⁻ de l'A.O., et un condensateur de capacité C reliant cette même entrée inverseuse E⁻ à la sortie S, la borne E⁺ étant reliée à la masse.",
          "exercise": {
            "id": "terminale_d_physique_l09_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est la configuration des composants pour réaliser un montage intégrateur à amplificateur opérationnel ?",
            "options": [
              "Le résistor R est à l'entrée inverseuse et le condensateur C est dans la boucle de contre-réaction",
              "Le condensateur C est à l'entrée inverseuse et le résistor R est dans la boucle de contre-réaction",
              "R et C sont montés en série dans la boucle de contre-réaction",
              "R et C sont montés en parallèle à l'entrée non-inverseuse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le montage intégrateur possède la résistance R en entrée et le condensateur C en boucle de contre-réaction."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Démonstration de la relation dus/dt = - ue / (RC)",
          "stepTheme": "Démonstration",
          "stepBadge": "iR = iC => dus/dt = -ue/RC",
          "paragraphText": "Grâce à la masse virtuelle V⁻ = 0 V, le courant d'entrée vaut i = ue / R. Comme i⁻ = 0, ce courant charge le condensateur : i = C d(V⁻ - us)/dt = - C (dus/dt). L'égalité des deux expressions donne immédiatement dus/dt = - (1/RC) ue(t).",
          "exercise": {
            "id": "terminale_d_physique_l09_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est la dérivée temporelle de la tension de sortie d'un montage intégrateur en fonction de la tension d'entrée ue(t) ?",
            "options": [
              "dus / dt = - (1 / RC) · ue(t)",
              "dus / dt = - RC · ue(t)",
              "dus / dt = + (1 / RC) · ue(t)",
              "dus / dt = - RC · (due / dt)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée de la sortie d'un intégrateur est proportionnelle à l'opposé de la tension d'entrée : dus/dt = - ue / (RC)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Formule intégrale de la tension de sortie",
          "stepTheme": "Intégration temporelle",
          "stepBadge": "us(t) = - 1/RC ∫ ue dt",
          "paragraphText": "En intégrant l'équation différentielle entre 0 et t, la tension de sortie s'exprime par us(t) = - (1/RC) ∫₀ᵗ ue(t') dt' + us(0). La tension de sortie est proportionnelle à la surface algébrique délimitée par la courbe de la tension d'entrée.",
          "exercise": {
            "id": "terminale_d_physique_l09_p04_q3",
            "type": "mcq",
            "prompt": "Dans la formule intégrale us(t) = - 1/(RC) ∫ ue dt + us(0), que représente le terme us(0) ?",
            "options": [
              "La tension initiale présente aux bornes du condensateur à t = 0",
              "La tension de saturation de l'A.O.",
              "La tension d'alimentation du générateur",
              "La tension de seuil de la diode de protection"
            ],
            "correctAnswerIndex": 0,
            "explanation": "us(0) est la valeur initiale de la tension de sortie à t = 0, fixée par la charge électrique initialement accumulée dans le condensateur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Réponse à un échelon de tension continue : rampe linéaire",
          "stepTheme": "Réponse à une constante",
          "stepBadge": "ue = Cte => us = rampe",
          "paragraphText": "Si ue(t) = U0 = constante positive, l'intégrale d'une constante donne une droite : us(t) = - (U0 / RC) t. La tension de sortie décroît de façon strictement linéaire : c'est un générateur de rampe linéaire de tension.",
          "exercise": {
            "id": "terminale_d_physique_l09_p04_q4",
            "type": "mcq",
            "prompt": "On applique une tension continue constante positive ue = +5,0 V à l'entrée d'un intégrateur initialement déchargé. Quelle est l'allure de la tension de sortie us(t) ?",
            "options": [
              "Une droite de pente négative (rampe décroissante)",
              "Une droite de pente positive (rampe croissante)",
              "Une onde sinusoïdale d'amplitude 5 V",
              "Une constante fixe à +5 V"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'intégrale d'une constante positive U0 avec le coefficient négatif -1/RC donne une fonction affine décroissante us(t) = -(U0/RC) t."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Dérive d'offset et saturation en continu",
          "stepTheme": "Limitation pratique",
          "stepBadge": "Dérive vers ±Vsat",
          "paragraphText": "En régime continu (ue = constante), l'intégrale de ue s'accumule sans fin dans le condensateur C. Au bout d'un temps fini, la tension us heurte nécessairement la tension de saturation +Vsat ou -Vsat et s'y bloque indéfiniment.",
          "exercise": {
            "id": "terminale_d_physique_l09_p04_q5",
            "type": "mcq",
            "prompt": "Que se produit-il inévitablement si l'on applique une tension continue constante non nulle à l'entrée d'un intégrateur pur pendant une longue durée ?",
            "options": [
              "La sortie sature au niveau de la tension d'alimentation (±Vsat) et s'y bloque",
              "Le condensateur explose par décharge thermique",
              "La tension de sortie s'annule spontanément par décharge",
              "Le montage commence à osciller à très haute fréquence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'intégration continue d'une valeur non nulle produit une rampe qui finit nécessairement par atteindre et heurter la butée de saturation ±Vsat."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Calcul de la pente de la rampe de sortie",
          "stepTheme": "Calcul de pente",
          "stepBadge": "Pente = |U0 / RC|",
          "paragraphText": "Pour R = 100 kΩ, C = 100 nF (RC = 10 ms = 0,01 s) et ue = +1,5 V, la pente de la tension de sortie vaut : dus/dt = - U0 / RC = - 1,5 / 0,01 = -150 V·s⁻¹.",
          "exercise": {
            "id": "terminale_d_physique_l09_p04_q6",
            "type": "mcq",
            "prompt": "Avec R = 100 kΩ, C = 100 nF et ue = +1,5 V, quelle est la vitesse de variation temporelle dus/dt de la tension de sortie ?",
            "options": [
              "-150 V·s⁻¹",
              "+150 V·s⁻¹",
              "-15 V·s⁻¹",
              "-1,5 V·s⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "RC = 10⁵ * 10⁻⁷ = 0,01 s. dus/dt = - ue / RC = - 1,5 / 0,01 = -150 V·s⁻¹."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Rôle de mémoire de l'intégrateur",
          "stepTheme": "Calcul analogique",
          "stepBadge": "Mémorisation de la charge",
          "paragraphText": "Si la tension d'entrée s'annule (ue = 0 V), le courant s'arrête (i = 0 A). Le condensateur cesse de se charger et conserve sa charge accumulée q : la tension de sortie us reste rigoureusement figée à sa dernière valeur. L'intégrateur analogique fonctionne comme une mémoire de tension.",
          "exercise": {
            "id": "terminale_d_physique_l09_p04_q7",
            "type": "mcq",
            "prompt": "Que devient la tension de sortie d'un intégrateur idéal si l'on ramène brusquement la tension d'entrée ue à 0 V ?",
            "options": [
              "Elle reste figée et mémorisée à sa dernière valeur atteinte (dus/dt = 0)",
              "Elle retombe instantanément à 0 V",
              "Elle monte immédiatement à +Vsat",
              "Elle s'inverse instantanément de polarité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Quand ue = 0, dus/dt = 0 : la tension de sortie reste constante, mémorisant l'intégrale passée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l09_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est la configuration des composants pour réaliser un montage intégrateur à amplificateur opérationnel ?",
          "options": [
            "Le résistor R est à l'entrée inverseuse et le condensateur C est dans la boucle de contre-réaction",
            "Le condensateur C est à l'entrée inverseuse et le résistor R est dans la boucle de contre-réaction",
            "R et C sont montés en série dans la boucle de contre-réaction",
            "R et C sont montés en parallèle à l'entrée non-inverseuse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le montage intégrateur possède la résistance R en entrée et le condensateur C en boucle de contre-réaction."
        },
        {
          "id": "terminale_d_physique_l09_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est la dérivée temporelle de la tension de sortie d'un montage intégrateur en fonction de la tension d'entrée ue(t) ?",
          "options": [
            "dus / dt = - (1 / RC) · ue(t)",
            "dus / dt = - RC · ue(t)",
            "dus / dt = + (1 / RC) · ue(t)",
            "dus / dt = - RC · (due / dt)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée de la sortie d'un intégrateur est proportionnelle à l'opposé de la tension d'entrée : dus/dt = - ue / (RC)."
        },
        {
          "id": "terminale_d_physique_l09_p04_q3",
          "type": "mcq",
          "prompt": "Dans la formule intégrale us(t) = - 1/(RC) ∫ ue dt + us(0), que représente le terme us(0) ?",
          "options": [
            "La tension initiale présente aux bornes du condensateur à t = 0",
            "La tension de saturation de l'A.O.",
            "La tension d'alimentation du générateur",
            "La tension de seuil de la diode de protection"
          ],
          "correctAnswerIndex": 0,
          "explanation": "us(0) est la valeur initiale de la tension de sortie à t = 0, fixée par la charge électrique initialement accumulée dans le condensateur."
        },
        {
          "id": "terminale_d_physique_l09_p04_q4",
          "type": "mcq",
          "prompt": "On applique une tension continue constante positive ue = +5,0 V à l'entrée d'un intégrateur initialement déchargé. Quelle est l'allure de la tension de sortie us(t) ?",
          "options": [
            "Une droite de pente négative (rampe décroissante)",
            "Une droite de pente positive (rampe croissante)",
            "Une onde sinusoïdale d'amplitude 5 V",
            "Une constante fixe à +5 V"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'intégrale d'une constante positive U0 avec le coefficient négatif -1/RC donne une fonction affine décroissante us(t) = -(U0/RC) t."
        },
        {
          "id": "terminale_d_physique_l09_p04_q5",
          "type": "mcq",
          "prompt": "Que se produit-il inévitablement si l'on applique une tension continue constante non nulle à l'entrée d'un intégrateur pur pendant une longue durée ?",
          "options": [
            "La sortie sature au niveau de la tension d'alimentation (±Vsat) et s'y bloque",
            "Le condensateur explose par décharge thermique",
            "La tension de sortie s'annule spontanément par décharge",
            "Le montage commence à osciller à très haute fréquence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'intégration continue d'une valeur non nulle produit une rampe qui finit nécessairement par atteindre et heurter la butée de saturation ±Vsat."
        },
        {
          "id": "terminale_d_physique_l09_p04_q6",
          "type": "mcq",
          "prompt": "Avec R = 100 kΩ, C = 100 nF et ue = +1,5 V, quelle est la vitesse de variation temporelle dus/dt de la tension de sortie ?",
          "options": [
            "-150 V·s⁻¹",
            "+150 V·s⁻¹",
            "-15 V·s⁻¹",
            "-1,5 V·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "RC = 10⁵ * 10⁻⁷ = 0,01 s. dus/dt = - ue / RC = - 1,5 / 0,01 = -150 V·s⁻¹."
        },
        {
          "id": "terminale_d_physique_l09_p04_q7",
          "type": "mcq",
          "prompt": "Que devient la tension de sortie d'un intégrateur idéal si l'on ramène brusquement la tension d'entrée ue à 0 V ?",
          "options": [
            "Elle reste figée et mémorisée à sa dernière valeur atteinte (dus/dt = 0)",
            "Elle retombe instantanément à 0 V",
            "Elle monte immédiatement à +Vsat",
            "Elle s'inverse instantanément de polarité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Quand ue = 0, dus/dt = 0 : la tension de sortie reste constante, mémorisant l'intégrale passée."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l09_p05",
      "order": 5,
      "title": "Réponse de l'intégrateur aux signaux carrés et exploitation graphique",
      "summary": "Transformation d'un signal en créneaux rectangulaires symétriques en tension triangulaire, calcul des pentes montante et descendante p = Umax / (RC), exploitation graphique pour la détermination de la capacité C ou de la résistance R, et condition de non-saturation en basse fréquence.",
      "conceptExplanation": "1. Réponse à une tension en créneaux rectangulaires symétriques :\nSoit une tension d'entrée périodique en créneaux symétriques, de période T (fréquence f = 1/T), alternant entre +Umax et -Umax avec un rapport cyclique de 50 % :\n- Pendant la première demi-période (ue = +Umax de 0 à T/2) :\n\\frac{\\mathrm{d}u_s}{\\mathrm{d}t} = - \\frac{U_\\text{max}}{R\\,C} < 0.\nLa tension de sortie est une rampe linéaire décroissante de pente négative constante p = - Umax / (RC).\n- Pendant la seconde demi-période (ue = -Umax de T/2 à T) :\n\\frac{\\mathrm{d}u_s}{\\mathrm{d}t} = - \\frac{-U_\\text{max}}{R\\,C} = + \\frac{U_\\text{max}}{R\\,C} > 0.\nLa tension de sortie est une rampe linéaire croissante de pente positive constante p = + Umax / (RC).\nLe signal de sortie obtenu us(t) est un signal triangulaire symétrique d'amplitude crête à crête ΔUs, de même période T que le créneau d'entrée.\n\n2. Amplitude crête à crête et amplitude crête du signal triangulaire :\nLa variation totale de tension pendant une demi-période Δt = T/2 vaut :\n\\Delta U_s = \\left|\\frac{\\mathrm{d}u_s}{\\mathrm{d}t}\\right| \\cdot \\frac{T}{2} = \\frac{U_\\text{max}}{R\\,C} \\cdot \\frac{T}{2} = \\frac{U_\\text{max}}{2\\,R\\,C\\,f}.\nL'amplitude crête Us_max (valeur maximale par rapport à zéro) pour un signal symétrique vaut la moitié de l'excursion crête à crête :\nU_{s,\\text{max}} = \\frac{\\Delta U_s}{2} = \\frac{U_\\text{max}}{4\\,R\\,C\\,f}.\n\n3. Détermination graphique de la capacité C d'un condensateur inconnu :\nSur un oscillogramme mesurant simultanément le créneau d'entrée ue et le triangle de sortie us :\n- On relève l'amplitude Umax du créneau d'entrée ;\n- On mesure la pente de la rampe triangulaire de sortie : p = |Δus / Δt| ;\n- Sachant que p = Umax / (RC), on en déduit immédiatement la capacité inconnue C :\nC = \\frac{U_\\text{max}}{R \\cdot p}.\n\n4. Condition de non-saturation de l'intégrateur (limite basse fréquence) :\nPour que le signal triangulaire ne soit pas tronqué par la saturation, il faut que son amplitude crête reste inférieure à Vsat :\nU_{s,\\text{max}} = \\frac{U_\\text{max}}{4\\,R\\,C\\,f} \\le V_\\text{sat} \\iff f \\ge f_\\text{min} = \\frac{U_\\text{max}}{4\\,R\\,C\\,V_\\text{sat}}.\nContrairement au dérivateur qui sature aux hautes fréquences, l'intégrateur sature aux basses fréquences (f < fmin) !",
      "keyRule": "L'intégrateur transforme un signal créneau en signal triangulaire. La pente de la rampe vaut |dus/dt| = Umax / (RC). La capacité s'en déduit par C = Umax / (R · pente).",
      "formulas": [
        {
          "name": "Pente des rampes de la tension triangulaire de sortie",
          "formula": "p = \\left|\\frac{\\Delta u_s}{\\Delta t}\\right| = \\frac{U_\\text{max}}{R\\,C}",
          "note": "p en V·s⁻¹, Umax en V, R en Ω, C en F"
        },
        {
          "name": "Détermination expérimentale de la capacité C",
          "formula": "C = \\frac{U_\\text{max}}{R \\cdot p}",
          "note": "Méthode oscilloscopique officielle au Bac"
        },
        {
          "name": "Condition de non-saturation en basse fréquence",
          "formula": "f \\ge f_\\text{min} = \\frac{U_\\text{max}}{4\\,R\\,C\\,V_\\text{sat}}",
          "note": "L'intégrateur sature si la fréquence est trop faible"
        }
      ],
      "workedExample": {
        "title": "Détermination expérimentale de la capacité d'un condensateur par intégrateur",
        "statement": "On alimente un montage intégrateur comportant un résistor de résistance étalon R = 20 kΩ et un condensateur de capacité C inconnue par une tension en créneaux rectangulaires symétriques d'amplitude crête Umax = 4,0 V et de fréquence f = 500 Hz (période T = 2,0 ms). L'A.O. a une tension de saturation Vsat = 14 V.\\nSur l'écran de l'oscilloscope, on observe une tension de sortie triangulaire dont l'excursion crête à crête est ΔUs = 2,0 V.\\n1. Calcule la pente p = |Δus/Δt| des rampes du signal de sortie.\\n2. Déduis-en la valeur de la capacité C du condensateur.\\n3. Calcule la fréquence minimale fmin en dessous de laquelle la sortie de l'intégrateur saturerait.",
        "methodSteps": [
          "Étape 1 : Calculer la pente p de la rampe de sortie :\\nLa tension de sortie passe de sa valeur minimale à sa valeur maximale (soit ΔUs = 2,0 V) pendant une demi-période Δt = T/2 = 2,0 ms / 2 = 1,0 ms = 1,0 × 10⁻³ s.\\np = ΔUs / Δt = 2,0 V / (1,0 × 10⁻³ s) = 2000 V·s⁻¹.",
          "Étape 2 : Déterminer la capacité C :\\nD'après la formule de l'intégrateur : p = Umax / (RC) => C = Umax / (R * p).\\nC = 4,0 / (20 × 10³ Ω * 2000 V·s⁻¹) = 4,0 / (40 × 10⁶) = 1,0 × 10⁻⁷ F = 100 nF = 0,10 µF.",
          "Étape 3 : Calculer la fréquence minimale sans saturation :\\nL'amplitude crête vaut Us_max = ΔUs / 2 = 1,0 V (bien inférieure à Vsat = 14 V).\\nLa saturation survient si Us_max = Umax / (4 RC f) = Vsat :\\nfmin = Umax / (4 * RC * Vsat).\\nComme RC = 20 × 10³ * 100 × 10⁻⁹ = 2,0 × 10⁻³ s, on a :\\nfmin = 4,0 / (4 * 2,0 × 10⁻³ * 14) = 4,0 / (0,112) ≈ 35,7 Hz."
        ],
        "conclusion": "La capacité du condensateur vaut exactement C = 100 nF. Le montage fonctionne sans aucune saturation pour toute fréquence supérieure à 35,7 Hz."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Chronogrammes comparés entrée créneaux et sortie triangulaire",
        "tableData": {
          "headers": [
            "Phase du signal",
            "Tension d'entrée ue(t)",
            "Pente dus/dt = -ue/RC",
            "Tension de sortie us(t)",
            "Forme d'onde"
          ],
          "rows": [
            [
              "0 ≤ t < T/2",
              "ue = +Umax (palier haut)",
              "- Umax / RC < 0",
              "Décroissance linéaire régulière",
              "Rampe descendante"
            ],
            [
              "T/2 ≤ t < T",
              "ue = -Umax (palier bas)",
              "+ Umax / RC > 0",
              "Croissance linéaire régulière",
              "Rampe montante"
            ],
            [
              "Aux transitions (t = 0, T/2)",
              "Front raide instantané",
              "Changement de signe de la pente",
              "Point d'inflexion / sommet",
              "Sommet pointu triangulaire"
            ],
            [
              "Si f < fmin",
              "Créneau trop lent (T très long)",
              "La rampe a le temps de monter trop haut",
              "Plafonnement à ±Vsat",
              "Triangle tronqué / trapézoïdal"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Transformation d'un signal créneau en signal triangulaire",
          "stepTheme": "Intégration d'onde",
          "stepBadge": "Créneau -> Triangle",
          "paragraphText": "Lorsqu'on alimente un montage intégrateur par une tension en créneaux rectangulaires symétriques alternant entre +Umax et -Umax, la tension de sortie obtenue est un signal triangulaire périodique régulier de même fréquence.",
          "exercise": {
            "id": "terminale_d_physique_l09_p05_q1",
            "type": "mcq",
            "prompt": "Quelle est la forme du signal de sortie d'un montage intégrateur alimenté par une tension en créneaux rectangulaires symétriques alternatifs ?",
            "options": [
              "Un signal triangulaire périodique symétrique",
              "Un signal carré amplifié",
              "Une suite d'impulsions de Dirac",
              "Une tension continue constante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'intégrale d'un palier positif est une rampe descendante, et l'intégrale d'un palier négatif est une rampe montante : l'ensemble forme une onde triangulaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Pente des rampes triangulaires : p = Umax / (RC)",
          "stepTheme": "Calcul de pente",
          "stepBadge": "p = |dus/dt| = Umax/RC",
          "paragraphText": "La valeur absolue de la pente de chaque rampe triangulaire de sortie est égale au quotient de l'amplitude du créneau d'entrée par la constante de temps du montage : p = |dus/dt| = Umax / (R · C) (en Volts par seconde, V·s⁻¹).",
          "exercise": {
            "id": "terminale_d_physique_l09_p05_q2",
            "type": "mcq",
            "prompt": "Un intégrateur avec R = 10 kΩ et C = 50 nF est attaqué par un créneau d'amplitude Umax = 5,0 V. Quelle est la pente p de la rampe triangulaire de sortie ?",
            "options": [
              "p = 10 000 V·s⁻¹ = 10 kV·s⁻¹",
              "p = 2500 V·s⁻¹",
              "p = 100 V·s⁻¹",
              "p = 50 000 V·s⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "RC = (10 * 10³ Ω) * (50 * 10⁻⁹ F) = 5,0 * 10⁻⁴ s. Pente p = Umax / RC = 5,0 / (5,0 * 10⁻⁴) = 10 000 V·s⁻¹."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Détermination expérimentale de la capacité C",
          "stepTheme": "Méthode expérimentale",
          "stepBadge": "C = Umax / (R · p)",
          "paragraphText": "C'est une méthode classique d'examen au Bac : en mesurant la pente expérimentale p = Δus / Δt sur l'oscilloscope et l'amplitude Umax du créneau d'entrée, on déduit immédiatement la capacité inconnue du condensateur par la relation C = Umax / (R · p).",
          "exercise": {
            "id": "terminale_d_physique_l09_p05_q3",
            "type": "mcq",
            "prompt": "Pour R = 25 kΩ et Umax = 3,0 V, la pente mesurée sur l'oscilloscope est p = 600 V·s⁻¹. Que vaut la capacité C du condensateur ?",
            "options": [
              "C = 200 nF = 0,20 µF",
              "C = 50 nF",
              "C = 2,0 µF",
              "C = 10 nF"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C = Umax / (R * p) = 3,0 / (25 000 * 600) = 3,0 / (1,5 * 10⁷) = 2,0 * 10⁻⁷ F = 200 nF."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Amplitude crête à crête de la sortie triangulaire",
          "stepTheme": "Excursion de tension",
          "stepBadge": "ΔUs = Umax / (2 RC f)",
          "paragraphText": "L'excursion crête à crête de la tension triangulaire de sortie s'exprime par ΔUs = p · (T/2) = (Umax / RC) · (1 / 2f) = Umax / (2 RC f). L'amplitude de sortie est inversement proportionnelle à la fréquence f.",
          "exercise": {
            "id": "terminale_d_physique_l09_p05_q4",
            "type": "mcq",
            "prompt": "Si l'on divise par deux la fréquence f du signal en créneaux à l'entrée d'un intégrateur, que devient l'amplitude crête à crête ΔUs du signal triangulaire de sortie ?",
            "options": [
              "Elle est multipliée par 2",
              "Elle est divisée par 2",
              "Elle reste invariable",
              "Elle est multipliée par 4"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme ΔUs = Umax / (2 RC f), l'amplitude est inversement proportionnelle à f. Diviser f par 2 double la durée de chaque rampe, donc double l'amplitude."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Saturation en basse fréquence : f < fmin",
          "stepTheme": "Piège de basse fréquence",
          "stepBadge": "f trop faible => saturation",
          "paragraphText": "Attention au piège de symétrie avec le dérivateur ! Alors que le dérivateur sature à haute fréquence, l'intégrateur sature en BASSE fréquence. Si la fréquence est trop faible, chaque demi-période dure trop longtemps et la tension triangulaire heurte le plafond ±Vsat.",
          "exercise": {
            "id": "terminale_d_physique_l09_p05_q5",
            "type": "mcq",
            "prompt": "Dans quel domaine de fréquences un montage intégrateur risque-t-il de saturer à ±Vsat sous un signal d'entrée périodique ?",
            "options": [
              "Aux basses fréquences (f < fmin)",
              "Aux très hautes fréquences (f > 100 kHz)",
              "Uniquement à la fréquence de résonance",
              "Un intégrateur ne peut jamais saturer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En basse fréquence, la durée T/2 est grande : la rampe a le temps d'atteindre des tensions très élevées dépassant Vsat."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Calcul de la fréquence minimale fmin",
          "stepTheme": "Calcul de seuil",
          "stepBadge": "fmin = Umax / (4 RC Vsat)",
          "paragraphText": "Pour un intégrateur avec RC = 2,5 ms, Umax = 5,0 V et Vsat = 15 V, la fréquence minimale assurant le régime linéaire vaut fmin = 5,0 / (4 × 2,5 × 10⁻³ × 15) = 5,0 / 0,15 ≈ 33,3 Hz. En dessous de 33,3 Hz, le triangle est écrêté en trapèze.",
          "exercise": {
            "id": "terminale_d_physique_l09_p05_q6",
            "type": "mcq",
            "prompt": "Avec RC = 2,5 ms, Umax = 5,0 V et Vsat = 15 V, quelle est la fréquence minimale admissible sans saturation ?",
            "options": [
              "fmin ≈ 33,3 Hz",
              "fmin ≈ 150 Hz",
              "fmin ≈ 3,33 Hz",
              "fmin ≈ 333 Hz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "fmin = Umax / (4 RC Vsat) = 5,0 / (4 * 0,0025 * 15) = 5,0 / 0,15 ≈ 33,3 Hz."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Effet d'une composante continue sur l'entrée",
          "stepTheme": "Dérive d'intégration",
          "stepBadge": "Asymétrie => saturation",
          "paragraphText": "Si le créneau d'entrée n'est pas rigoureusement centré sur 0 V (valeur moyenne non nulle <ue> ≠ 0), l'intégrateur intègre cette composante continue : le triangle 'glisse' verticalement au cours du temps (dérive) jusqu'à saturer irrémédiablement à l'une des bornes ±Vsat.",
          "exercise": {
            "id": "terminale_d_physique_l09_p05_q7",
            "type": "mcq",
            "prompt": "Que se passe-t-il si le signal en créneau appliqué à l'intégrateur présente une légère valeur moyenne non nulle (ex: +0,1 V) ?",
            "options": [
              "Le signal de sortie dérive verticalement au fur et à mesure des périodes jusqu'à saturer à -Vsat",
              "Le signal triangulaire reste parfaitement centré sur 0 V",
              "L'A.O. élimine automatiquement la composante continue",
              "La fréquence du signal double instantanément"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'intégrale de la composante continue constante s'additionne cycle après cycle, provoquant une rampe moyenne qui déplace le triangle vers la saturation."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l09_p05_q1",
          "type": "mcq",
          "prompt": "Quelle est la forme du signal de sortie d'un montage intégrateur alimenté par une tension en créneaux rectangulaires symétriques alternatifs ?",
          "options": [
            "Un signal triangulaire périodique symétrique",
            "Un signal carré amplifié",
            "Une suite d'impulsions de Dirac",
            "Une tension continue constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'intégrale d'un palier positif est une rampe descendante, et l'intégrale d'un palier négatif est une rampe montante : l'ensemble forme une onde triangulaire."
        },
        {
          "id": "terminale_d_physique_l09_p05_q2",
          "type": "mcq",
          "prompt": "Un intégrateur avec R = 10 kΩ et C = 50 nF est attaqué par un créneau d'amplitude Umax = 5,0 V. Quelle est la pente p de la rampe triangulaire de sortie ?",
          "options": [
            "p = 10 000 V·s⁻¹ = 10 kV·s⁻¹",
            "p = 2500 V·s⁻¹",
            "p = 100 V·s⁻¹",
            "p = 50 000 V·s⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "RC = (10 * 10³ Ω) * (50 * 10⁻⁹ F) = 5,0 * 10⁻⁴ s. Pente p = Umax / RC = 5,0 / (5,0 * 10⁻⁴) = 10 000 V·s⁻¹."
        },
        {
          "id": "terminale_d_physique_l09_p05_q3",
          "type": "mcq",
          "prompt": "Pour R = 25 kΩ et Umax = 3,0 V, la pente mesurée sur l'oscilloscope est p = 600 V·s⁻¹. Que vaut la capacité C du condensateur ?",
          "options": [
            "C = 200 nF = 0,20 µF",
            "C = 50 nF",
            "C = 2,0 µF",
            "C = 10 nF"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C = Umax / (R * p) = 3,0 / (25 000 * 600) = 3,0 / (1,5 * 10⁷) = 2,0 * 10⁻⁷ F = 200 nF."
        },
        {
          "id": "terminale_d_physique_l09_p05_q4",
          "type": "mcq",
          "prompt": "Si l'on divise par deux la fréquence f du signal en créneaux à l'entrée d'un intégrateur, que devient l'amplitude crête à crête ΔUs du signal triangulaire de sortie ?",
          "options": [
            "Elle est multipliée par 2",
            "Elle est divisée par 2",
            "Elle reste invariable",
            "Elle est multipliée par 4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme ΔUs = Umax / (2 RC f), l'amplitude est inversement proportionnelle à f. Diviser f par 2 double la durée de chaque rampe, donc double l'amplitude."
        },
        {
          "id": "terminale_d_physique_l09_p05_q5",
          "type": "mcq",
          "prompt": "Dans quel domaine de fréquences un montage intégrateur risque-t-il de saturer à ±Vsat sous un signal d'entrée périodique ?",
          "options": [
            "Aux basses fréquences (f < fmin)",
            "Aux très hautes fréquences (f > 100 kHz)",
            "Uniquement à la fréquence de résonance",
            "Un intégrateur ne peut jamais saturer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En basse fréquence, la durée T/2 est grande : la rampe a le temps d'atteindre des tensions très élevées dépassant Vsat."
        },
        {
          "id": "terminale_d_physique_l09_p05_q6",
          "type": "mcq",
          "prompt": "Avec RC = 2,5 ms, Umax = 5,0 V et Vsat = 15 V, quelle est la fréquence minimale admissible sans saturation ?",
          "options": [
            "fmin ≈ 33,3 Hz",
            "fmin ≈ 150 Hz",
            "fmin ≈ 3,33 Hz",
            "fmin ≈ 333 Hz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "fmin = Umax / (4 RC Vsat) = 5,0 / (4 * 0,0025 * 15) = 5,0 / 0,15 ≈ 33,3 Hz."
        },
        {
          "id": "terminale_d_physique_l09_p05_q7",
          "type": "mcq",
          "prompt": "Que se passe-t-il si le signal en créneau appliqué à l'intégrateur présente une légère valeur moyenne non nulle (ex: +0,1 V) ?",
          "options": [
            "Le signal de sortie dérive verticalement au fur et à mesure des périodes jusqu'à saturer à -Vsat",
            "Le signal triangulaire reste parfaitement centré sur 0 V",
            "L'A.O. élimine automatiquement la composante continue",
            "La fréquence du signal double instantanément"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'intégrale de la composante continue constante s'additionne cycle après cycle, provoquant une rampe moyenne qui déplace le triangle vers la saturation."
        }
      ]
    },
    {
      "id": "terminale_d_physique_l09_p06",
      "order": 6,
      "title": "Réciprocité, filtrage actif et applications industrielles",
      "summary": "Principe de réciprocité Dérivateur <-> Intégrateur, rôle de filtre passe-bas actif de l'intégrateur (lissage du bruit), stabilisation par résistance de fuite R' en parallèle sur C, convertisseurs analogique-numérique double rampe, et régulateurs PID.",
      "conceptExplanation": "1. Le principe de réciprocité des montages dérivateur et intégrateur :\nLes montages dérivateur et intégrateur sont rigoureusement réciproques l'un de l'autre au sens mathématique et électronique :\n- Si l'on injecte un signal triangulaire dans un DÉRINATEUR, on recueille en sortie un signal en CRÉNEAUX rectangulaires ;\n- Si l'on injecte un signal en créneaux rectangulaires dans un INTÉGRATEUR, on recueille en sortie un signal TRIANGULAIRE.\nCette réciprocité permet de concevoir des générateurs de signaux de laboratoire (GBF) produisant simultanément des ondes carrées, triangulaires et sinusoïdales.\n\n2. L'intégrateur comme filtre passe-bas actif :\nEn régime harmonique sinusoïdal (ue = Ue sin ωt), la fonction de transfert de l'intégrateur s'écrit :\n\\underline{H}(j\\omega) = \\frac{\\underline{u}_s}{\\underline{u}_e} = - \\frac{1}{j\\,R\\,C\\,\\omega} \\implies |H(\\omega)| = \\frac{1}{R\\,C\\,\\omega} = \\frac{1}{2\\pi\\,R\\,C\\,f}.\nLe gain en tension est inversement proportionnel à la fréquence f :\n- Aux très basses fréquences, le gain est très élevé ;\n- Aux hautes fréquences (bruits parasites, harmoniques indésirables), le gain tend vers zéro : l'intégrateur atténue fortement et lisse les variations rapides (comportement de filtre passe-bas actif).\n\n3. Stabilisation de l'intégrateur pratique par résistance de fuite R' :\nPour empêcher la dérive continue et la saturation dues aux tensions de décalage résiduelles (offset) de l'A.O., on connecte en pratique un résistor de très forte résistance R' (ex: R' = 10 R) en parallèle sur le condensateur C. À très basse fréquence, le gain continu est alors borné à -R'/R au lieu d'être infini.\n\n4. Applications technologiques majeures :\n- Générateurs de signaux BF (GBF) : un comparateur à hystérésis (trigger de Schmitt) générant un créneau est rebouclé sur un intégrateur pour produire une onde triangulaire stable ;\n- Convertisseurs Analogique-Numérique (CAN) à double rampe : utilisés dans les multimètres numériques de haute précision pour mesurer une tension continue indépendamment de la valeur exacte de R et C ;\n- Régulateurs industriels PID (Proportionnel - Intégral - Dérivé) : le terme Dérivateur anticipe les perturbations rapides pour stabiliser le système, tandis que le terme Intégrateur annule l'erreur statique en régime permanent.",
      "keyRule": "Dérivateur et Intégrateur sont réciproques (Triangle <-> Créneau). L'intégrateur est un filtre passe-bas (lisseur). En régulation industrielle, l'action Dérivée anticipe et l'action Intégrale annule l'erreur permanente.",
      "formulas": [
        {
          "name": "Réciprocité d'onde",
          "formula": "\\text{Dérivateur}(\\text{Triangle}) = \\text{Créneau} \\quad \\Longleftrightarrow \\quad \\text{Intégrateur}(\\text{Créneau}) = \\text{Triangle}",
          "note": "Transformation réciproque de signaux"
        },
        {
          "name": "Gain harmonique de l'intégrateur (filtre passe-bas)",
          "formula": "|H(f)| = \\frac{1}{2\\pi\\,R\\,C\\,f}",
          "note": "Atténuation des hautes fréquences parasites"
        }
      ],
      "workedExample": {
        "title": "Analyse d'une chaîne de mise en forme d'onde GBF",
        "statement": "Un générateur de laboratoire utilise un premier bloc oscillateur qui produit une tension carrée en créneaux symétriques d'amplitude U1 = 5,0 V et de fréquence f = 1000 Hz. Ce signal attaque un intégrateur (R1 = 10 kΩ, C1 = 25 nF). Le signal triangulaire obtenu à la sortie de cet intégrateur attaque ensuite un montage dérivateur (R2 = 15 kΩ, C2 = 10 nF).\\n1. Quelle est la forme du signal à la sortie de l'intégrateur et quelle est son amplitude crête à crête ΔUs1 ?\\n2. Quelle est la forme et l'amplitude crête Us2 du signal recueilli à la sortie finale du dérivateur ?",
        "methodSteps": [
          "Étape 1 : Analyser le signal à la sortie de l'intégrateur :\\nL'intégrateur transforme le créneau rectangulaire en un signal triangulaire symétrique.\\nCalcul de la constante R1C1 : R1C1 = (10 * 10³ Ω) * (25 * 10⁻⁹ F) = 2,5 * 10⁻⁴ s = 0,25 ms.\\nExcursion crête à crête : ΔUs1 = U1 / (2 * R1C1 * f) = 5,0 / (2 * 2,5 * 10⁻⁴ * 1000) = 5,0 / 0,50 = 10,0 V.\\nL'amplitude crête du triangle vaut Umax1 = ΔUs1 / 2 = 5,0 V.",
          "Étape 2 : Analyser le signal à la sortie du dérivateur :\\nLe dérivateur reçoit le signal triangulaire de période T = 1/f = 1,0 ms et d'amplitude Umax1 = 5,0 V. Il le retransforme en créneaux rectangulaires.\\nCalcul de la constante R2C2 : R2C2 = (15 * 10³ Ω) * (10 * 10⁻⁹ F) = 1,5 * 10⁻⁴ s = 0,15 ms.\\nL'amplitude crête du créneau final vaut :\\nUs2 = 4 * R2C2 * Umax1 * f = 4 * (1,5 * 10⁻⁴) * 5,0 * 1000 = 3,0 V."
        ],
        "conclusion": "La chaîne reconstitue un signal en créneau de même fréquence (1000 Hz) et d'amplitude 3,0 V, illustrant parfaitement la réciprocité des deux montages analogiques."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Synthèse comparée Dérivateur versus Intégrateur",
        "tableData": {
          "headers": [
            "Caractéristique",
            "Montage Dérivateur",
            "Montage Intégrateur"
          ],
          "rows": [
            [
              "Composant à l'entrée inverseuse",
              "Condensateur C",
              "Résistor R"
            ],
            [
              "Composant en contre-réaction",
              "Résistor R",
              "Condensateur C"
            ],
            [
              "Loi entrée-sortie temporelle",
              "us = - RC (due/dt)",
              "us = - 1/(RC) ∫ ue dt"
            ],
            [
              "Effet sur un signal triangulaire",
              "Donne un signal en créneaux rectangulaires",
              "Donne un signal parabolique lisse"
            ],
            [
              "Effet sur un signal en créneaux",
              "Donne des pics d'impulsions (dérivée)",
              "Donne un signal triangulaire régulier"
            ],
            [
              "Comportement fréquentiel",
              "Filtre passe-haut (amplifie le bruit HF)",
              "Filtre passe-bas (lisse et élimine le bruit HF)"
            ],
            [
              "Risque de saturation physique",
              "Aux très hautes fréquences (f > fmax)",
              "Aux très basses fréquences (f < fmin) ou en continu"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Réciprocité fondamentale des deux montages",
          "stepTheme": "Réciprocité analogique",
          "stepBadge": "Dérivation <-> Intégration",
          "paragraphText": "Les opérations de dérivation et d'intégration étant réciproques en mathématiques (d/dt [∫ f(t) dt] = f(t)), le montage dérivateur et le montage intégrateur constituent deux systèmes analogiques inverses l'un de l'autre.",
          "exercise": {
            "id": "terminale_d_physique_l09_p06_q1",
            "type": "mcq",
            "prompt": "Si l'on injecte la tension de sortie d'un intégrateur parfait dans un montage dérivateur de même constante de temps RC, que récupère-t-on en sortie finale ?",
            "options": [
              "Le signal d'entrée initial (au signe près)",
              "Un signal continu strictement nul",
              "Une tension infinie qui détruit le second A.O.",
              "Un signal de fréquence double"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivation annule l'effet de l'intégration : on retrouve la forme d'onde initiale d'entrée (au signe près en raison des doubles inversions)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'intégrateur comme filtre passe-bas actif",
          "stepTheme": "Filtrage actif",
          "stepBadge": "Gain ∝ 1/f",
          "paragraphText": "Le gain de l'intégrateur |H(f)| = 1 / (2π RC f) décroît lorsque la fréquence augmente. Il laisse passer les signaux lents et atténue très fortement les oscillations rapides : c'est un excellent filtre passe-bas actif lisseur de parasites.",
          "exercise": {
            "id": "terminale_d_physique_l09_p06_q2",
            "type": "mcq",
            "prompt": "Quel est l'effet d'un montage intégrateur vis-à-vis des bruits parasites à très haute fréquence superposés à un signal utile ?",
            "options": [
              "Il les atténue considérablement et les lisse grâce à son comportement passe-bas",
              "Il les amplifie de façon explosive",
              "Il les transforme en impulsions de saturation",
              "Il n'a strictement aucun effet sur le bruit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le gain de l'intégrateur diminuant en 1/f, les composantes de haute fréquence sont fortement écrasées."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Stabilisation par résistance de fuite R' en parallèle sur C",
          "stepTheme": "Amélioration pratique",
          "stepBadge": "R' // C",
          "paragraphText": "En pratique industrielle, pour éviter que les micro-tensions parasites de décalage (offset) ne saturent l'intégrateur en continu, on place un résistor de fuite R' (de forte valeur, ex: 100 kΩ à 1 MΩ) en parallèle avec le condensateur C pour fixer le gain statique à -R'/R.",
          "exercise": {
            "id": "terminale_d_physique_l09_p06_q3",
            "type": "mcq",
            "prompt": "Pourquoi ajoute-t-on souvent une résistance de forte valeur R' en parallèle sur le condensateur d'un intégrateur réel ?",
            "options": [
              "Pour limiter le gain en continu et éviter la saturation spontanée due aux tensions de décalage d'offset",
              "Pour augmenter la vitesse de décharge de l'alimentation secteur",
              "Pour transformer l'A.O. en amplificateur de puissance audio",
              "Pour empêcher le courant d'entrer dans l'A.O."
            ],
            "correctAnswerIndex": 0,
            "explanation": "La résistance de fuite en continu borne le gain à basse fréquence à la valeur finie -R'/R, empêchant la dérive vers ±Vsat."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Pourquoi le dérivateur pur est-il proscrit seul en industrie ?",
          "stepTheme": "Sensibilité au bruit",
          "stepBadge": "Instabilité en HF",
          "paragraphText": "Un dérivateur pur présente un gain qui tend vers l'infini avec la fréquence (Gain = 2π RC f). Le moindre parasite radioélectrique ou bruit thermique d'un capteur est amplifié au point de saturer complètement la sortie et de noyer le signal utile.",
          "exercise": {
            "id": "terminale_d_physique_l09_p06_q4",
            "type": "mcq",
            "prompt": "Pour quelle raison fondamentale évite-t-on d'utiliser un montage dérivateur pur sans filtrage dans les chaînes de mesure industrielles ?",
            "options": [
              "Parce que son gain croît indéfiniment avec la fréquence, noyant le signal utile sous le bruit de mesure amplifié",
              "Parce qu'il consomme trop de courant sur la batterie",
              "Parce qu'il ne peut fonctionner qu'à température négative",
              "Parce que sa résistance d'entrée est trop élevée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le gain proportionnel à la fréquence amplifie démesurément les bruits parasites à haute fréquence."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Application aux générateurs de signaux de laboratoire (GBF)",
          "stepTheme": "Générateur GBF",
          "stepBadge": "Carré -> Triangle -> Sinus",
          "paragraphText": "Dans un générateur de fonctions de laboratoire (GBF analogique), un trigger de Schmitt produit une tension carrée. Cette onde carrée est injectée dans un intégrateur pour fabriquer une onde triangulaire, qui est ensuite mise en forme par un conformateur à diodes pour donner une onde sinusoïdale pure.",
          "exercise": {
            "id": "terminale_d_physique_l09_p06_q5",
            "type": "mcq",
            "prompt": "Dans un générateur basse fréquence (GBF), quel composant transforme l'onde carrée initiale en onde triangulaire ?",
            "options": [
              "Un montage intégrateur à amplificateur opérationnel",
              "Un montage dérivateur à bobine",
              "Un transformateur élévateur de tension",
              "Un pont de diodes redresseur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'intégrateur transforme le signal carré en signal triangulaire par intégration des paliers constants."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Application aux multimètres numériques (CAN double rampe)",
          "stepTheme": "Voltmètre numérique",
          "stepBadge": "CAN double rampe",
          "paragraphText": "Les voltmètres numériques de laboratoire utilisent un convertisseur analogique-numérique à double rampe : la tension à mesurer est intégrée pendant une durée fixe T1, puis une tension de référence de signe opposé est intégrée jusqu'à retour à zéro. La durée mesurée donne la tension exacte avec une précision immunisée contre la dérive de R et C.",
          "exercise": {
            "id": "terminale_d_physique_l09_p06_q6",
            "type": "mcq",
            "prompt": "Quel montage à A.O. est le cœur de mesure des convertisseurs analogique-numérique double rampe des multimètres de précision ?",
            "options": [
              "Le montage intégrateur",
              "Le montage dérivateur",
              "Le montage suiveur de tension simple",
              "Le redresseur mono-alternance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le CAN double rampe repose sur les rampes linéaires de charge et décharge d'un montage intégrateur."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Régulation industrielle et correcteurs PID",
          "stepTheme": "Automatique industrielle",
          "stepBadge": "PID (Proportionnel-Intégral-Dérivé)",
          "paragraphText": "Dans les asservissements et régulations automatiques (température, vitesse de moteur, pilotage de drone), le régulateur PID combine l'action proportionnelle (P), l'action intégrale (I) qui élimine l'erreur résiduelle en sommant les écarts passés, et l'action dérivée (D) qui anticipe les variations futures pour stabiliser la commande.",
          "exercise": {
            "id": "terminale_d_physique_l09_p06_q7",
            "type": "mcq",
            "prompt": "Dans un régulateur industriel PID, quel est le rôle spécifique de l'action Intégrale (I) issue d'un montage intégrateur ?",
            "options": [
              "Éliminer totalement l'erreur statique en régime permanent en accumulant les écarts dans le temps",
              "Augmenter l'amplitude du bruit pour alerter l'opérateur",
              "Bloquer immédiatement l'alimentation en cas d'urgence",
              "Refroidir le moteur par inversion de phase"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'action intégrale accumule l'erreur au cours du temps et augmente la commande jusqu'à ce que l'erreur s'annule rigoureusement en régime permanent."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_physique_l09_p06_q1",
          "type": "mcq",
          "prompt": "Si l'on injecte la tension de sortie d'un intégrateur parfait dans un montage dérivateur de même constante de temps RC, que récupère-t-on en sortie finale ?",
          "options": [
            "Le signal d'entrée initial (au signe près)",
            "Un signal continu strictement nul",
            "Une tension infinie qui détruit le second A.O.",
            "Un signal de fréquence double"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivation annule l'effet de l'intégration : on retrouve la forme d'onde initiale d'entrée (au signe près en raison des doubles inversions)."
        },
        {
          "id": "terminale_d_physique_l09_p06_q2",
          "type": "mcq",
          "prompt": "Quel est l'effet d'un montage intégrateur vis-à-vis des bruits parasites à très haute fréquence superposés à un signal utile ?",
          "options": [
            "Il les atténue considérablement et les lisse grâce à son comportement passe-bas",
            "Il les amplifie de façon explosive",
            "Il les transforme en impulsions de saturation",
            "Il n'a strictement aucun effet sur le bruit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le gain de l'intégrateur diminuant en 1/f, les composantes de haute fréquence sont fortement écrasées."
        },
        {
          "id": "terminale_d_physique_l09_p06_q3",
          "type": "mcq",
          "prompt": "Pourquoi ajoute-t-on souvent une résistance de forte valeur R' en parallèle sur le condensateur d'un intégrateur réel ?",
          "options": [
            "Pour limiter le gain en continu et éviter la saturation spontanée due aux tensions de décalage d'offset",
            "Pour augmenter la vitesse de décharge de l'alimentation secteur",
            "Pour transformer l'A.O. en amplificateur de puissance audio",
            "Pour empêcher le courant d'entrer dans l'A.O."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La résistance de fuite en continu borne le gain à basse fréquence à la valeur finie -R'/R, empêchant la dérive vers ±Vsat."
        },
        {
          "id": "terminale_d_physique_l09_p06_q4",
          "type": "mcq",
          "prompt": "Pour quelle raison fondamentale évite-t-on d'utiliser un montage dérivateur pur sans filtrage dans les chaînes de mesure industrielles ?",
          "options": [
            "Parce que son gain croît indéfiniment avec la fréquence, noyant le signal utile sous le bruit de mesure amplifié",
            "Parce qu'il consomme trop de courant sur la batterie",
            "Parce qu'il ne peut fonctionner qu'à température négative",
            "Parce que sa résistance d'entrée est trop élevée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le gain proportionnel à la fréquence amplifie démesurément les bruits parasites à haute fréquence."
        },
        {
          "id": "terminale_d_physique_l09_p06_q5",
          "type": "mcq",
          "prompt": "Dans un générateur basse fréquence (GBF), quel composant transforme l'onde carrée initiale en onde triangulaire ?",
          "options": [
            "Un montage intégrateur à amplificateur opérationnel",
            "Un montage dérivateur à bobine",
            "Un transformateur élévateur de tension",
            "Un pont de diodes redresseur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'intégrateur transforme le signal carré en signal triangulaire par intégration des paliers constants."
        },
        {
          "id": "terminale_d_physique_l09_p06_q6",
          "type": "mcq",
          "prompt": "Quel montage à A.O. est le cœur de mesure des convertisseurs analogique-numérique double rampe des multimètres de précision ?",
          "options": [
            "Le montage intégrateur",
            "Le montage dérivateur",
            "Le montage suiveur de tension simple",
            "Le redresseur mono-alternance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le CAN double rampe repose sur les rampes linéaires de charge et décharge d'un montage intégrateur."
        },
        {
          "id": "terminale_d_physique_l09_p06_q7",
          "type": "mcq",
          "prompt": "Dans un régulateur industriel PID, quel est le rôle spécifique de l'action Intégrale (I) issue d'un montage intégrateur ?",
          "options": [
            "Éliminer totalement l'erreur statique en régime permanent en accumulant les écarts dans le temps",
            "Augmenter l'amplitude du bruit pour alerter l'opérateur",
            "Bloquer immédiatement l'alimentation en cas d'urgence",
            "Refroidir le moteur par inversion de phase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'action intégrale accumule l'erreur au cours du temps et augmente la commande jusqu'à ce que l'erreur s'annule rigoureusement en régime permanent."
        }
      ]
    }
  ]
};
