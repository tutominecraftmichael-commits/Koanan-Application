import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 15 : Puissance en régime sinusoïdal » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1337
export const PHYSIQUE_TLE_CD_L15_PUISSANCE: CurriculumChapter = {
  "id": "terminale_c_physique_l15_puissance",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 15,
  "title": "Leçon 15 : Puissance en régime sinusoïdal",
  "summary": "La puissance moyenne d'un dipôle vaut P = U·I·cos φ : le produit U·I est la puissance apparente, cos φ le facteur de puissance, et toute la puissance est dissipée en chaleur dans la résistance — d'où le transport sous haute tension.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1337",
  "points": [
    {
      "id": "terminale_c_physique_l15_puissance_p01",
      "order": 1,
      "title": "La puissance instantanée p(t) = u(t)·i(t)",
      "summary": "À chaque instant, la puissance reçue par un dipôle est le produit de la tension par l'intensité ; elle oscille au cours du temps.",
      "conceptExplanation": "La puissance instantanée reçue par un dipôle RLC est p = u × i.\nAvec i(t) = Im·cos(ωt) et u(t) = Um·cos(ωt + φu/i), elle devient p = Um·Im·cos(ωt)·cos(ωt + φu/i) : un produit de deux fonctions sinusoïdales de même pulsation.\nCette puissance n'est pas constante : elle fluctue au cours du temps, et peut même devenir négative pendant certaines fractions de période, lorsque le dipôle restitue au générateur l'énergie stockée dans la bobine ou le condensateur.\nCe qui compte pour la consommation, ce n'est donc pas la valeur instantanée mais sa moyenne sur une période.",
      "keyRule": "p(t) = u(t)·i(t) : instantanée et fluctuante ; la consommation se lit sur la moyenne.",
      "formulas": [
        {
          "name": "Puissance instantanée",
          "formula": "p(t) = u(t) \\times i(t)",
          "note": "En watts, à chaque instant t."
        }
      ],
      "workedExample": {
        "title": "Développer p(t) avec les expressions du résumé",
        "statement": "On pose i(t) = Im·cos(ωt) et u(t) = Um·cos(ωt + φ). Écris la puissance instantanée reçue par le dipôle.",
        "methodSteps": [
          "On applique la définition : p = u × i.",
          "On remplace u et i par leurs expressions instantanées.",
          "On obtient p = Um·Im·cos(ωt)·cos(ωt + φ), produit de deux cosinus déphasés."
        ],
        "conclusion": "C'est l'expression établie au §1 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition : p = u × i",
          "stepTheme": "La définition : p = u × i",
          "stepBadge": "La définition : p = u × i",
          "paragraphText": "• Puissance instantanée : à chaque instant, la puissance électrique reçue par un dipôle est le produit de la tension à ses bornes par l'intensité qui le traverse.\nC'est la définition du §1, valable pour tout dipôle et tout régime.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p01_q1",
            "type": "mcq",
            "prompt": "La puissance instantanée reçue par un dipôle est définie par :",
            "options": [
              "p = u × i",
              "p = u + i",
              "p = u divisée par i",
              "p = u au carré"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Avec des grandeurs sinusoïdales",
          "stepTheme": "Avec des grandeurs sinusoïdales",
          "stepBadge": "Avec des grandeurs sinusoïdales",
          "paragraphText": "En régime sinusoïdal forcé, u et i ont la même pulsation ω mais un déphasage φu/i.\nLa puissance instantanée est alors le produit de deux cosinus, dont la valeur dépend de l'instant choisi.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p01_q2",
            "type": "mcq",
            "prompt": "En régime sinusoïdal, avec i(t) = Im·cos(ωt) et u(t) = Um·cos(ωt + φ), la puissance instantanée vaut :",
            "options": [
              "Um·Im, constante",
              "Um·Im·cos(ωt)·cos(ωt + φ)",
              "U·I·cos φ à chaque instant",
              "Zéro"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'expression du §1 ; U·I·cos φ est la valeur moyenne, pas l'instantanée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "p(t) fluctue et peut devenir négative",
          "stepTheme": "p(t) fluctue et peut devenir négative",
          "stepBadge": "p(t) fluctue et peut devenir négative",
          "paragraphText": "Le produit de deux cosinus déphasés change de valeur et parfois de signe au cours d'une période.\nQuand p est négative, le dipôle rend au générateur une partie de l'énergie qu'il avait emmagasinée : c'est le va-et-vient d'énergie entre le générateur, la bobine et le condensateur.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p01_q3",
            "type": "mcq",
            "prompt": "Au cours d'une période, la puissance instantanée d'un dipôle RLC :",
            "options": [
              "Reste constante",
              "Est toujours positive",
              "Fluctue et peut devenir négative par moments",
              "Est toujours nulle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conséquence du produit de deux cosinus déphasés du §1 : le dipôle restitue parfois de l'énergie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Seule la moyenne compte pour la consommation",
          "stepTheme": "Seule la moyenne compte pour la consommation",
          "stepBadge": "Seule la moyenne compte pour la consommation",
          "paragraphText": "Un wattmètre, une facture d'électricité ou un échauffement ne dépendent pas des fluctuations instantanées.\nIls dépendent de la puissance moyenne sur une période, qui fait l'objet du point suivant.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p01_q4",
            "type": "mcq",
            "prompt": "Pour évaluer la consommation d'un dipôle en régime sinusoïdal, la grandeur pertinente est :",
            "options": [
              "La puissance instantanée maximale",
              "La puissance instantanée à un instant donné",
              "Le produit Um × Im",
              "La puissance moyenne sur une période"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'objet du §2 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre valeurs maximales et efficaces",
          "stepTheme": "Ne pas confondre valeurs maximales et efficaces",
          "stepBadge": "Ne pas confondre valeurs maximales et efficaces",
          "paragraphText": "Piège : dans p(t), on utilise les amplitudes Um et Im ; dans la puissance moyenne, ce sont les valeurs efficaces U et I qui interviennent.\nLes deux descriptions sont liées par U = Um/√2 et I = Im/√2.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p01_q5",
            "type": "mcq",
            "prompt": "Dans l'expression de la puissance instantanée p(t) = Um·Im·cos(ωt)·cos(ωt + φ), Um et Im sont :",
            "options": [
              "Les valeurs maximales (amplitudes) de u et de i",
              "Les valeurs efficaces",
              "Les valeurs moyennes",
              "Des puissances"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les amplitudes des expressions instantanées du §1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Le rôle du déphasage φ",
          "stepTheme": "Le rôle du déphasage φ",
          "stepBadge": "Le rôle du déphasage φ",
          "paragraphText": "Le déphasage φu/i entre la tension et le courant pilote les échanges d'énergie.\nC'est lui qui, par son cosinus, fixera la fraction de la puissance apparente réellement consommée en moyenne.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p01_q6",
            "type": "mcq",
            "prompt": "Dans l'expression de p(t), le déphasage φu/i représente :",
            "options": [
              "La fréquence du circuit",
              "Le déphasage de la tension par rapport à l'intensité",
              "La résistance du circuit",
              "La pulsation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "φu/i est l'indice de phase utilisé dans tout le résumé (§1 et §2)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l15_puissance_p01_q1",
          "type": "mcq",
          "prompt": "La puissance instantanée reçue par un dipôle est définie par :",
          "options": [
            "p = u × i",
            "p = u + i",
            "p = u divisée par i",
            "p = u au carré"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §1 du résumé."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p01_q2",
          "type": "mcq",
          "prompt": "En régime sinusoïdal, avec i(t) = Im·cos(ωt) et u(t) = Um·cos(ωt + φ), la puissance instantanée vaut :",
          "options": [
            "Um·Im, constante",
            "Um·Im·cos(ωt)·cos(ωt + φ)",
            "U·I·cos φ à chaque instant",
            "Zéro"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'expression du §1 ; U·I·cos φ est la valeur moyenne, pas l'instantanée."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p01_q3",
          "type": "mcq",
          "prompt": "Au cours d'une période, la puissance instantanée d'un dipôle RLC :",
          "options": [
            "Reste constante",
            "Est toujours positive",
            "Fluctue et peut devenir négative par moments",
            "Est toujours nulle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conséquence du produit de deux cosinus déphasés du §1 : le dipôle restitue parfois de l'énergie."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p01_q4",
          "type": "mcq",
          "prompt": "Pour évaluer la consommation d'un dipôle en régime sinusoïdal, la grandeur pertinente est :",
          "options": [
            "La puissance instantanée maximale",
            "La puissance instantanée à un instant donné",
            "Le produit Um × Im",
            "La puissance moyenne sur une période"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'objet du §2 du résumé."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p01_q5",
          "type": "mcq",
          "prompt": "Dans l'expression de la puissance instantanée p(t) = Um·Im·cos(ωt)·cos(ωt + φ), Um et Im sont :",
          "options": [
            "Les valeurs maximales (amplitudes) de u et de i",
            "Les valeurs efficaces",
            "Les valeurs moyennes",
            "Des puissances"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les amplitudes des expressions instantanées du §1."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p01_q6",
          "type": "mcq",
          "prompt": "Dans l'expression de p(t), le déphasage φu/i représente :",
          "options": [
            "La fréquence du circuit",
            "Le déphasage de la tension par rapport à l'intensité",
            "La résistance du circuit",
            "La pulsation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "φu/i est l'indice de phase utilisé dans tout le résumé (§1 et §2)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l15_puissance_p02",
      "order": 2,
      "title": "La puissance moyenne P = U·I·cos φ",
      "summary": "P est le produit de la puissance apparente U·I (en volt-ampères) par le facteur de puissance cos φ.",
      "conceptExplanation": "La puissance moyenne consommée par un dipôle RLC est P = U·I·cos φu/i, avec U et I efficaces.\nLe produit U × I est la puissance apparente, notée S, exprimée en volt-ampère (V.A) — c'est ce que l'activité d'application demande d'identifier.\nLe terme cos φu/i s'appelle le facteur de puissance du circuit RLC : sans dimension, il est compris entre 0 et 1.\nDans l'exercice 1, une installation sous 110 V consommant 4,4 kW avec 50 A présente une puissance apparente de 5500 V.A et un facteur de puissance de 0,8.",
      "keyRule": "P = S × cos φ, avec S = U·I en volt-ampères et cos φ le facteur de puissance.",
      "formulas": [
        {
          "name": "Puissance moyenne (active)",
          "formula": "P = U I \\cos\\varphi",
          "note": "En watts (W), avec U et I efficaces."
        },
        {
          "name": "Puissance apparente",
          "formula": "S = U I",
          "note": "En volt-ampères (V.A) ; donc P = S·cos φ."
        }
      ],
      "workedExample": {
        "title": "L'exercice 1 : puissance apparente et facteur de puissance",
        "statement": "La tension efficace aux bornes d'une installation est 110 V ; la puissance consommée est 4,4 kW pour une intensité de 50 A. Calcule la puissance apparente et le facteur de puissance.",
        "methodSteps": [
          "Puissance apparente : S = U × I = 110 × 50 = 5500 V.A.",
          "De P = U·I·cos φ, on tire cos φ = P divisé par le produit U·I.",
          "La solution obtient cos φ = 0,8."
        ],
        "conclusion": "Ce sont les deux réponses de l'exercice 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule de la puissance moyenne",
          "stepTheme": "La formule de la puissance moyenne",
          "stepBadge": "La formule de la puissance moyenne",
          "paragraphText": "• Puissance moyenne : P = U·I·cos φu/i, où U et I sont les valeurs efficaces de la tension et de l'intensité.\nElle s'exprime en watts et représente la puissance réellement consommée par le dipôle.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p02_q1",
            "type": "mcq",
            "prompt": "La puissance moyenne consommée par un dipôle en régime sinusoïdal est :",
            "options": [
              "P = U·I·cos φ",
              "P = U·I dans tous les cas",
              "P = Um·Im",
              "P = U·I·sin φ"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la relation du §2 ; P = U·I n'est vrai que si cos φ = 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La puissance apparente S = U·I, en volt-ampères",
          "stepTheme": "La puissance apparente S = U·I, en volt-ampères",
          "stepBadge": "La puissance apparente S = U·I, en volt-ampères",
          "paragraphText": "Le produit U × I est la puissance apparente, exprimée en volt-ampère (V.A) et non en watts.\nC'est la puissance que le générateur doit être capable de fournir, avant de tenir compte du déphasage.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p02_q2",
            "type": "mcq",
            "prompt": "Le produit U × I représente la puissance apparente, qui s'exprime en :",
            "options": [
              "Watts",
              "Volt-ampères (V.A)",
              "Joules",
              "Ohms"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la précision d'unité du §2, confirmée par l'activité d'application."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le facteur de puissance cos φ",
          "stepTheme": "Le facteur de puissance cos φ",
          "stepBadge": "Le facteur de puissance cos φ",
          "paragraphText": "• Facteur de puissance : le terme cos φu/i de la relation P = U·I·cos φ.\nSans unité, il vaut 1 quand u et i sont en phase, et il diminue quand le circuit devient plus réactif.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p02_q3",
            "type": "mcq",
            "prompt": "Dans la relation P = U·I·cos φ, le terme cos φ s'appelle :",
            "options": [
              "La puissance apparente",
              "L'impédance",
              "Le facteur de puissance",
              "Le rendement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la réponse de l'activité d'application du §2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 1 : S = 5500 V.A et cos φ = 0,8",
          "stepTheme": "L'exercice 1 : S = 5500 V.A et cos φ = 0,8",
          "stepBadge": "L'exercice 1 : S = 5500 V.A et cos φ = 0,8",
          "paragraphText": "Pour l'installation de l'exercice 1 (110 V, 50 A, 4,4 kW), la puissance apparente dépasse la puissance consommée.\nLe rapport des deux donne directement le facteur de puissance : 0,8.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p02_q4",
            "type": "mcq",
            "prompt": "L'installation de l'exercice 1 (U = 110 V ; I = 50 A ; P = 4,4 kW) a pour puissance apparente et facteur de puissance :",
            "options": [
              "S = 4,4 kV.A et cos φ = 1",
              "S = 5500 V.A et cos φ = 0,5",
              "S = 110 V.A et cos φ = 0,8",
              "S = 5500 V.A et cos φ = 0,8"
            ],
            "correctAnswerIndex": 3,
            "explanation": "S = 110 × 50 = 5500 V.A et cos φ = P/S = 0,8 dans la solution."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Cas limite : cos φ = 1",
          "stepTheme": "Cas limite : cos φ = 1",
          "stepBadge": "Cas limite : cos φ = 1",
          "paragraphText": "Quand le circuit est purement résistif (ou à la résonance), φ = 0 et cos φ = 1.\nLa puissance moyenne est alors maximale pour U et I donnés : P = U·I.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p02_q5",
            "type": "mcq",
            "prompt": "Le facteur de puissance vaut 1 lorsque :",
            "options": [
              "La tension et le courant sont en phase (φ = 0)",
              "Le courant est nul",
              "Le circuit est purement inductif",
              "La fréquence est nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "cos φ = 1 pour φ = 0 : cas du conducteur ohmique et de la résonance (leçon 14)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "P n'est pas toujours égale à U·I",
          "stepTheme": "P n'est pas toujours égale à U·I",
          "stepBadge": "P n'est pas toujours égale à U·I",
          "paragraphText": "Piège classique : oublier le facteur cos φ revient à confondre puissance moyenne et puissance apparente.\nDans l'exercice 1, U·I vaut 5500 V.A alors que la puissance réellement consommée n'est que de 4400 W.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p02_q6",
            "type": "mcq",
            "prompt": "Si cos φ = 0,6, la puissance moyenne consommée vaut :",
            "options": [
              "U·I",
              "60 % de la puissance apparente U·I",
              "Zéro dans tous les cas",
              "Le double de U·I"
            ],
            "correctAnswerIndex": 1,
            "explanation": "P = U·I·cos φ : avec cos φ = 0,6, P représente 60 % de S."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l15_puissance_p02_q1",
          "type": "mcq",
          "prompt": "La puissance moyenne consommée par un dipôle en régime sinusoïdal est :",
          "options": [
            "P = U·I·cos φ",
            "P = U·I dans tous les cas",
            "P = Um·Im",
            "P = U·I·sin φ"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la relation du §2 ; P = U·I n'est vrai que si cos φ = 1."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p02_q2",
          "type": "mcq",
          "prompt": "Le produit U × I représente la puissance apparente, qui s'exprime en :",
          "options": [
            "Watts",
            "Volt-ampères (V.A)",
            "Joules",
            "Ohms"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la précision d'unité du §2, confirmée par l'activité d'application."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p02_q3",
          "type": "mcq",
          "prompt": "Dans la relation P = U·I·cos φ, le terme cos φ s'appelle :",
          "options": [
            "La puissance apparente",
            "L'impédance",
            "Le facteur de puissance",
            "Le rendement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la réponse de l'activité d'application du §2."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p02_q4",
          "type": "mcq",
          "prompt": "L'installation de l'exercice 1 (U = 110 V ; I = 50 A ; P = 4,4 kW) a pour puissance apparente et facteur de puissance :",
          "options": [
            "S = 4,4 kV.A et cos φ = 1",
            "S = 5500 V.A et cos φ = 0,5",
            "S = 110 V.A et cos φ = 0,8",
            "S = 5500 V.A et cos φ = 0,8"
          ],
          "correctAnswerIndex": 3,
          "explanation": "S = 110 × 50 = 5500 V.A et cos φ = P/S = 0,8 dans la solution."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p02_q5",
          "type": "mcq",
          "prompt": "Le facteur de puissance vaut 1 lorsque :",
          "options": [
            "La tension et le courant sont en phase (φ = 0)",
            "Le courant est nul",
            "Le circuit est purement inductif",
            "La fréquence est nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "cos φ = 1 pour φ = 0 : cas du conducteur ohmique et de la résonance (leçon 14)."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p02_q6",
          "type": "mcq",
          "prompt": "Si cos φ = 0,6, la puissance moyenne consommée vaut :",
          "options": [
            "U·I",
            "60 % de la puissance apparente U·I",
            "Zéro dans tous les cas",
            "Le double de U·I"
          ],
          "correctAnswerIndex": 1,
          "explanation": "P = U·I·cos φ : avec cos φ = 0,6, P représente 60 % de S."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l15_puissance_p03",
      "order": 3,
      "title": "Toute la puissance moyenne est dissipée dans la résistance : P = R·I²",
      "summary": "Comme cos φ = R/Z, on obtient P = R·I² : bobine et condensateur parfaits ne consomment aucune puissance moyenne ; l'énergie part en chaleur.",
      "conceptExplanation": "La puissance moyenne reçue par un dipôle RLC s'écrit P = U·I·cos φ, et comme cos φ = R/Z avec U = Z·I, elle devient P = R·I².\nToute la puissance moyenne apparaît donc sous forme thermique dans la résistance : c'est l'effet Joule.\nConséquence du résumé : un condensateur parfait et une bobine parfaite ne consomment pas de puissance — ils stockent et restituent l'énergie sans la dissiper.\nL'énergie consommée pendant une durée Δt est E = P × Δt = U·I·Δt·cos φ, et elle est transformée en chaleur (énergie thermique).",
      "keyRule": "P = R·I² : seule la partie résistive consomme ; L et C parfaits échangent sans consommer.",
      "formulas": [
        {
          "name": "Puissance moyenne et résistance",
          "formula": "P = R I^2",
          "note": "Car cos φ = R/Z et U = Z·I ; R est la résistance totale du circuit."
        },
        {
          "name": "Énergie consommée",
          "formula": "E = P \\times \\Delta t",
          "note": "En joules ; intégralement transformée en chaleur dans le circuit."
        }
      ],
      "workedExample": {
        "title": "L'exercice 3 : puissances à la résonance",
        "statement": "Un circuit RLC série (R = 10 Ω, bobine de r = 2 Ω et L = 0,1 H, C = 1 µF) est alimenté sous U = 24 V. À la résonance, détermine l'intensité et la puissance moyenne consommée.",
        "methodSteps": [
          "À la résonance, Z = R + r = 12 Ω, donc I = U/Z = 2 A.",
          "La puissance moyenne est dissipée dans les deux résistances : P = (R + r)·I².",
          "La solution obtient P = 48 W."
        ],
        "conclusion": "Ce sont les réponses aux questions 1 et 3 de l'exercice 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "De P = U·I·cos φ à P = R·I²",
          "stepTheme": "De P = U·I·cos φ à P = R·I²",
          "stepBadge": "De P = U·I·cos φ à P = R·I²",
          "paragraphText": "Le facteur de puissance d'un circuit RLC série vaut cos φ = R/Z, et la loi d'Ohm donne U = Z·I.\nEn combinant, les Z se simplifient et il reste P = R·I² : la démonstration du §3.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p03_q1",
            "type": "mcq",
            "prompt": "La puissance moyenne consommée par un circuit RLC série peut aussi s'écrire :",
            "options": [
              "P = R·I²",
              "P = L·I²",
              "P = U²/R dans tous les cas",
              "P = Z·I²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le résultat du §3 : P = U·I·cos φ avec cos φ = R/Z donne R·I²."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Bobine et condensateur parfaits ne consomment pas",
          "stepTheme": "Bobine et condensateur parfaits ne consomment pas",
          "stepBadge": "Bobine et condensateur parfaits ne consomment pas",
          "paragraphText": "Puisque toute la puissance moyenne est dans le terme R·I², les éléments sans résistance ne dissipent rien en moyenne.\nLe résumé le dit : un condensateur parfait et une bobine parfaite ne consomment donc pas de puissance.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p03_q2",
            "type": "mcq",
            "prompt": "Une bobine parfaite et un condensateur parfait, en régime sinusoïdal, consomment en moyenne :",
            "options": [
              "Autant que la résistance",
              "Aucune puissance : ils stockent et restituent l'énergie",
              "Une puissance infinie",
              "Uniquement à la résonance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la remarque du §3, conséquence de P = R·I²."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La puissance moyenne devient de la chaleur",
          "stepTheme": "La puissance moyenne devient de la chaleur",
          "stepBadge": "La puissance moyenne devient de la chaleur",
          "paragraphText": "La puissance P = R·I² apparaît sous forme thermique dans la résistance : c'est l'effet Joule.\nC'est cette chaleur qui échauffe les lignes de transport — et qu'on cherche à minimiser.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p03_q3",
            "type": "mcq",
            "prompt": "Dans un circuit RLC, la puissance moyenne consommée apparaît :",
            "options": [
              "Sous forme d'énergie magnétique stockée définitivement",
              "Sous forme de charge du condensateur",
              "Sous forme thermique (chaleur) dans la résistance",
              "Sous forme de lumière uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la phrase du §3 : elle apparaît sous forme thermique dans la résistance."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'énergie consommée E = P × Δt",
          "stepTheme": "L'énergie consommée E = P × Δt",
          "stepBadge": "L'énergie consommée E = P × Δt",
          "paragraphText": "• Énergie consommée : pendant une durée Δt, un dipôle consomme E = P × Δt = U·I·Δt·cos φ.\nLe §4 précise que cette énergie est transformée en chaleur (énergie thermique).",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p03_q4",
            "type": "mcq",
            "prompt": "L'énergie consommée par un dipôle RLC pendant une durée Δt vaut :",
            "options": [
              "E = P divisée par Δt",
              "E = U·I seulement",
              "E = R·Δt",
              "E = P × Δt, transformée en chaleur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la relation du §4 du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 3 : P = 48 W à la résonance",
          "stepTheme": "L'exercice 3 : P = 48 W à la résonance",
          "stepBadge": "L'exercice 3 : P = 48 W à la résonance",
          "paragraphText": "À la résonance de l'exercice 3, le courant vaut 2 A et traverse les deux résistances (10 Ω et 2 Ω).\nLa puissance moyenne vaut donc le produit de 12 Ω par le carré de 2 A : 48 W.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p03_q5",
            "type": "mcq",
            "prompt": "La puissance moyenne consommée dans l'exercice 3 à la résonance (I = 2 A ; résistances 10 Ω et 2 Ω) vaut :",
            "options": [
              "48 W",
              "24 W",
              "12 W",
              "96 W"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P = (R + r)·I² = 48 W dans la solution de l'exercice 3."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 5 : P = R·I² en continu et en alternatif",
          "stepTheme": "L'exercice 5 : P = R·I² en continu et en alternatif",
          "stepBadge": "L'exercice 5 : P = R·I² en continu et en alternatif",
          "paragraphText": "L'exercice 5 mesure R = 30 Ω en courant continu (6 V, 0,2 A), où la puissance vaut 1,2 W.\nEn alternatif (I efficace = 0,1 A), la même formule P = R·I² donne 0,3 W.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p03_q6",
            "type": "mcq",
            "prompt": "Les puissances consommées dans l'exercice 5 valent, en continu puis en alternatif :",
            "options": [
              "1,2 W et 1,2 W",
              "1,2 W et 0,3 W",
              "0,3 W et 1,2 W",
              "30 W et 30 W"
            ],
            "correctAnswerIndex": 1,
            "explanation": "P = R·I² avec R = 30 Ω : 30 × 0,2² = 1,2 W en continu et 30 × 0,1² = 0,3 W en alternatif."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l15_puissance_p03_q1",
          "type": "mcq",
          "prompt": "La puissance moyenne consommée par un circuit RLC série peut aussi s'écrire :",
          "options": [
            "P = R·I²",
            "P = L·I²",
            "P = U²/R dans tous les cas",
            "P = Z·I²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le résultat du §3 : P = U·I·cos φ avec cos φ = R/Z donne R·I²."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p03_q2",
          "type": "mcq",
          "prompt": "Une bobine parfaite et un condensateur parfait, en régime sinusoïdal, consomment en moyenne :",
          "options": [
            "Autant que la résistance",
            "Aucune puissance : ils stockent et restituent l'énergie",
            "Une puissance infinie",
            "Uniquement à la résonance"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la remarque du §3, conséquence de P = R·I²."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p03_q3",
          "type": "mcq",
          "prompt": "Dans un circuit RLC, la puissance moyenne consommée apparaît :",
          "options": [
            "Sous forme d'énergie magnétique stockée définitivement",
            "Sous forme de charge du condensateur",
            "Sous forme thermique (chaleur) dans la résistance",
            "Sous forme de lumière uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la phrase du §3 : elle apparaît sous forme thermique dans la résistance."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p03_q4",
          "type": "mcq",
          "prompt": "L'énergie consommée par un dipôle RLC pendant une durée Δt vaut :",
          "options": [
            "E = P divisée par Δt",
            "E = U·I seulement",
            "E = R·Δt",
            "E = P × Δt, transformée en chaleur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la relation du §4 du résumé."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p03_q5",
          "type": "mcq",
          "prompt": "La puissance moyenne consommée dans l'exercice 3 à la résonance (I = 2 A ; résistances 10 Ω et 2 Ω) vaut :",
          "options": [
            "48 W",
            "24 W",
            "12 W",
            "96 W"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P = (R + r)·I² = 48 W dans la solution de l'exercice 3."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p03_q6",
          "type": "mcq",
          "prompt": "Les puissances consommées dans l'exercice 5 valent, en continu puis en alternatif :",
          "options": [
            "1,2 W et 1,2 W",
            "1,2 W et 0,3 W",
            "0,3 W et 1,2 W",
            "30 W et 30 W"
          ],
          "correctAnswerIndex": 1,
          "explanation": "P = R·I² avec R = 30 Ω : 30 × 0,2² = 1,2 W en continu et 30 × 0,1² = 0,3 W en alternatif."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l15_puissance_p04",
      "order": 4,
      "title": "Le facteur de puissance : relever cos φ pour limiter les pertes",
      "summary": "À puissance utile fixée, un cos φ faible impose un courant plus fort, donc des pertes Joule en I² plus élevées (×2,25 entre 0,6 et 0,9 dans l'activité).",
      "conceptExplanation": "Le §5 pose la règle : le facteur de puissance cos φ doit être proche de 1 pour réduire ou minimiser les pertes par effet Joule dans les lignes.\nL'activité d'application le chiffre : pour fournir 10 kW sous 220 V, il faut 50,50 A si cos φ = 0,9, mais 75,76 A si cos φ = 0,6.\nLes pertes dans les lignes valent R·I² : elles sont donc proportionnelles au carré du courant, et le rapport des pertes entre les deux cas vaut 2,25.\nConclusion de l'activité : un facteur de puissance élevé permet de réduire les pertes de puissance par effet Joule — c'est pourquoi on relève le facteur de puissance des installations, par exemple en ajoutant un condensateur (exercice 2).",
      "keyRule": "À P et U fixés, I = P/(U·cos φ) : relever cos φ fait baisser I, et les pertes en R·I² chutent.",
      "formulas": [
        {
          "name": "Intensité pour une puissance donnée",
          "formula": "I = \\frac{P}{U \\cos\\varphi}",
          "note": "I augmente quand cos φ diminue, à P et U fixés."
        },
        {
          "name": "Pertes par effet Joule dans une ligne",
          "formula": "P_J = R_{ligne} \\times I^2",
          "note": "Proportionnelles au carré de l'intensité transportée."
        }
      ],
      "workedExample": {
        "title": "L'exercice 2 : relever cos φ jusqu'à 1",
        "statement": "Un circuit (R = 20 Ω, bobine L) alimenté à 50 Hz a un facteur de puissance de 0,8. Détermine L, puis la capacité C qui ramènerait le facteur de puissance à 1.",
        "methodSteps": [
          "De cos φ = R/Z = 0,8 et Z² = R² + (Lω)², on tire l'inductance.",
          "La solution obtient L = 0,048 H.",
          "Un facteur de puissance de 1 signifie la résonance : LC·ω² = 1, d'où C = 2,1 × 10⁻⁴ F."
        ],
        "conclusion": "Ce sont les réponses des questions 1 et 2 de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "cos φ doit être proche de 1",
          "stepTheme": "cos φ doit être proche de 1",
          "stepBadge": "cos φ doit être proche de 1",
          "paragraphText": "Le §5 est une règle d'ingénierie : le facteur de puissance doit être proche de 1.\nL'enjeu n'est pas la puissance utile — fixée par l'installation — mais tout ce qui est perdu en route.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p04_q1",
            "type": "mcq",
            "prompt": "Le facteur de puissance d'une installation doit être proche de 1 afin de :",
            "options": [
              "Réduire les pertes par effet Joule dans les lignes",
              "Augmenter la tension du réseau",
              "Supprimer la résistance des lignes",
              "Augmenter l'intensité transportée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la phrase du §5 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'activité : 50,50 A contre 75,76 A pour 10 kW",
          "stepTheme": "L'activité : 50,50 A contre 75,76 A pour 10 kW",
          "stepBadge": "L'activité : 50,50 A contre 75,76 A pour 10 kW",
          "paragraphText": "Pour fournir la même puissance de 10 kW sous 220 V, le courant dépend du facteur de puissance.\nIl passe de 50,50 A (cos φ = 0,9) à 75,76 A (cos φ = 0,6) : un courant moitié plus fort pour la même puissance utile.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p04_q2",
            "type": "mcq",
            "prompt": "Pour fournir 10 kW sous 220 V, les intensités nécessaires pour cos φ = 0,9 et cos φ = 0,6 sont :",
            "options": [
              "50,50 A dans les deux cas",
              "50,50 A et 75,76 A",
              "75,76 A et 50,50 A",
              "10 A et 22 A"
            ],
            "correctAnswerIndex": 1,
            "explanation": "I = P/(U·cos φ) : ce sont les deux calculs de la question 1 de l'activité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Des pertes 2,25 fois plus grandes",
          "stepTheme": "Des pertes 2,25 fois plus grandes",
          "stepBadge": "Des pertes 2,25 fois plus grandes",
          "paragraphText": "Les pertes dans les lignes étant proportionnelles au carré de l'intensité, le rapport des pertes entre les deux cas est le carré du rapport des courants.\nLa solution de l'activité obtient un rapport de 2,25 : la perte est plus importante quand le facteur de puissance vaut 0,6.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p04_q3",
            "type": "mcq",
            "prompt": "Le rapport des pertes par effet Joule entre cos φ = 0,6 et cos φ = 0,9 (même puissance fournie) vaut :",
            "options": [
              "1,5",
              "0,44",
              "2,25",
              "1"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les pertes varient comme le carré du courant : la solution de l'activité trouve 2,25."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Relever cos φ avec un condensateur (exercice 2)",
          "stepTheme": "Relever cos φ avec un condensateur (exercice 2)",
          "stepBadge": "Relever cos φ avec un condensateur (exercice 2)",
          "paragraphText": "Un circuit inductif (R, L) voit son déphasage compensé par un condensateur choisi pour atteindre la résonance.\nDans l'exercice 2, ramener cos φ de 0,8 à 1 demande C = 2,1 × 10⁻⁴ F, avec L = 0,048 H.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p04_q4",
            "type": "mcq",
            "prompt": "La capacité qui ramène le facteur de puissance à 1 dans l'exercice 2 (L = 0,048 H, 50 Hz) vaut environ :",
            "options": [
              "1 µF",
              "5 µF",
              "0,048 F",
              "2,1 × 10⁻⁴ F"
            ],
            "correctAnswerIndex": 3,
            "explanation": "cos φ = 1 correspond à la résonance LC·ω² = 1 (question 2 de l'exercice 2)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 5 : un facteur de puissance de 0,5",
          "stepTheme": "L'exercice 5 : un facteur de puissance de 0,5",
          "stepBadge": "L'exercice 5 : un facteur de puissance de 0,5",
          "paragraphText": "Pour le circuit (R, bobine pure) de l'exercice 5 en alternatif : P = 0,3 W, U = 6 V, I = 0,1 A.\nLe facteur de puissance, rapport de P à la puissance apparente, vaut 0,5 : la moitié seulement de la puissance apparente est consommée.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p04_q5",
            "type": "mcq",
            "prompt": "Le facteur de puissance du circuit de l'exercice 5 en régime sinusoïdal (P = 0,3 W ; U = 6 V ; I = 0,1 A) vaut :",
            "options": [
              "0,5",
              "1",
              "0,8",
              "0,3"
            ],
            "correctAnswerIndex": 0,
            "explanation": "cos φ = P/(U·I) = 0,5 dans la solution de l'exercice 5."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "cos φ faible ≠ installation moins puissante",
          "stepTheme": "cos φ faible ≠ installation moins puissante",
          "stepBadge": "cos φ faible ≠ installation moins puissante",
          "paragraphText": "Piège : dans l'activité, l'installation reçoit 10 kW dans les deux cas ; ce qui change, c'est le courant et donc les pertes.\nUn mauvais facteur de puissance ne réduit pas la puissance utile, il gaspille en amont.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p04_q6",
            "type": "mcq",
            "prompt": "Quand le facteur de puissance passe de 0,9 à 0,6 à puissance utile constante, ce qui augmente est :",
            "options": [
              "La puissance utile reçue",
              "L'intensité du courant et les pertes par effet Joule",
              "La tension du réseau",
              "La fréquence"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion de la question 3 de l'activité d'application."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l15_puissance_p04_q1",
          "type": "mcq",
          "prompt": "Le facteur de puissance d'une installation doit être proche de 1 afin de :",
          "options": [
            "Réduire les pertes par effet Joule dans les lignes",
            "Augmenter la tension du réseau",
            "Supprimer la résistance des lignes",
            "Augmenter l'intensité transportée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la phrase du §5 du résumé."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p04_q2",
          "type": "mcq",
          "prompt": "Pour fournir 10 kW sous 220 V, les intensités nécessaires pour cos φ = 0,9 et cos φ = 0,6 sont :",
          "options": [
            "50,50 A dans les deux cas",
            "50,50 A et 75,76 A",
            "75,76 A et 50,50 A",
            "10 A et 22 A"
          ],
          "correctAnswerIndex": 1,
          "explanation": "I = P/(U·cos φ) : ce sont les deux calculs de la question 1 de l'activité."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p04_q3",
          "type": "mcq",
          "prompt": "Le rapport des pertes par effet Joule entre cos φ = 0,6 et cos φ = 0,9 (même puissance fournie) vaut :",
          "options": [
            "1,5",
            "0,44",
            "2,25",
            "1"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les pertes varient comme le carré du courant : la solution de l'activité trouve 2,25."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p04_q4",
          "type": "mcq",
          "prompt": "La capacité qui ramène le facteur de puissance à 1 dans l'exercice 2 (L = 0,048 H, 50 Hz) vaut environ :",
          "options": [
            "1 µF",
            "5 µF",
            "0,048 F",
            "2,1 × 10⁻⁴ F"
          ],
          "correctAnswerIndex": 3,
          "explanation": "cos φ = 1 correspond à la résonance LC·ω² = 1 (question 2 de l'exercice 2)."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p04_q5",
          "type": "mcq",
          "prompt": "Le facteur de puissance du circuit de l'exercice 5 en régime sinusoïdal (P = 0,3 W ; U = 6 V ; I = 0,1 A) vaut :",
          "options": [
            "0,5",
            "1",
            "0,8",
            "0,3"
          ],
          "correctAnswerIndex": 0,
          "explanation": "cos φ = P/(U·I) = 0,5 dans la solution de l'exercice 5."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p04_q6",
          "type": "mcq",
          "prompt": "Quand le facteur de puissance passe de 0,9 à 0,6 à puissance utile constante, ce qui augmente est :",
          "options": [
            "La puissance utile reçue",
            "L'intensité du courant et les pertes par effet Joule",
            "La tension du réseau",
            "La fréquence"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion de la question 3 de l'activité d'application."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l15_puissance_p05",
      "order": 5,
      "title": "Le transport du courant sous haute tension",
      "summary": "Pour une même puissance transportée, élever la tension fait chuter l'intensité, donc les pertes Joule en R·I² : les lignes de transport sont à haute et très haute tension.",
      "conceptExplanation": "L'expérience du §6 monte un conducteur de 470 Ω — qui représente la résistance des lignes — entre deux transformateurs : l'énergie fournie sous 12 V arrive très affaiblie, alors que transportée sous 220 V elle parvient presque intacte.\nInterprétation du résumé : pour la même puissance fournie par le générateur, les pertes par effet Joule sont plus faibles sous 220 V que sous 12 V ; c'est pour cela que le transport du courant s'effectue sous haute tension.\nLe mécanisme est le même qu'au point précédent : P fixée ⇒ I = P/U diminue quand U augmente, et les pertes R·I² s'effondrent.\nLa documentation précise l'organisation du réseau : le grand transport utilise la très haute tension (225 000 à 400 000 V) et la haute tension (63 000 à 90 000 V), la distribution la moyenne tension (20 000 V) puis la basse tension (230 à 400 V).",
      "keyRule": "Transporter sous haute tension : I petit ⇒ pertes Joule R·I² petites, sur de très longues distances.",
      "formulas": [
        {
          "name": "Intensité transportée",
          "formula": "I = \\frac{P}{U}",
          "note": "Pour un facteur de puissance voisin de 1 : doubler U divise I par deux et les pertes par quatre."
        }
      ],
      "workedExample": {
        "title": "L'expérience du §6 : 12 V contre 220 V",
        "statement": "Un générateur de 12 V alimente, à travers une ligne représentée par un résistor de 470 Ω, une charge ; on recommence en élevant la tension à 220 V grâce à un transformateur, puis en l'abaissant à l'arrivée. Compare les pertes dans la ligne.",
        "methodSteps": [
          "La ligne est la même dans les deux cas : 470 Ω.",
          "À puissance transportée égale, le courant sous 220 V est beaucoup plus faible que sous 12 V.",
          "Les pertes R·I² sont donc nettement plus faibles sous 220 V : c'est l'interprétation du §6.2."
        ],
        "conclusion": "L'expérience justifie le transport sous haute tension."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Le montage de l'expérience : une ligne de 470 Ω",
          "stepTheme": "Le montage de l'expérience : une ligne de 470 Ω",
          "stepBadge": "Le montage de l'expérience : une ligne de 470 Ω",
          "paragraphText": "Le conducteur ohmique de 470 Ω du montage représente les résistances des lignes électriques.\nDeux transformateurs (12 V/220 V puis 220 V/12 V) permettent de transporter la même énergie sous une tension plus élevée.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p05_q1",
            "type": "mcq",
            "prompt": "Dans l'expérience du §6, le conducteur ohmique de 470 Ω représente :",
            "options": [
              "La charge à alimenter",
              "La résistance des lignes électriques",
              "Le générateur",
              "Un condensateur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'interprétation du §6.2 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les pertes sont plus faibles sous 220 V que sous 12 V",
          "stepTheme": "Les pertes sont plus faibles sous 220 V que sous 12 V",
          "stepBadge": "Les pertes sont plus faibles sous 220 V que sous 12 V",
          "paragraphText": "L'observation est nette : à puissance fournie égale, la charge reçoit bien plus d'énergie quand le transport se fait sous 220 V.\nLa différence s'est perdue en chaleur dans la ligne de 470 Ω dans le cas 12 V.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p05_q2",
            "type": "mcq",
            "prompt": "Pour la même puissance fournie par le générateur, les pertes par effet Joule dans la ligne sont :",
            "options": [
              "Plus fortes sous 220 V",
              "Plus faibles sous 220 V que sous 12 V",
              "Identiques dans les deux cas",
              "Nulles sous 12 V"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion de l'expérience du §6.2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Pourquoi : I diminue quand U augmente",
          "stepTheme": "Pourquoi : I diminue quand U augmente",
          "stepBadge": "Pourquoi : I diminue quand U augmente",
          "paragraphText": "À puissance transportée fixée, I = P/U : élever la tension divise le courant d'autant.\nComme les pertes valent R·I², elles diminuent comme le carré de cette réduction — l'effet est spectaculaire.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p05_q3",
            "type": "mcq",
            "prompt": "Le transport sous haute tension réduit les pertes parce que, à puissance égale :",
            "options": [
              "La résistance des lignes diminue",
              "La fréquence augmente",
              "L'intensité diminue, et les pertes varient comme son carré",
              "La puissance apparente augmente"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le mécanisme de l'effet Joule (P = R·I²) appliqué au transport, §6.2 et documentation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les transformateurs rendent l'opération possible",
          "stepTheme": "Les transformateurs rendent l'opération possible",
          "stepBadge": "Les transformateurs rendent l'opération possible",
          "paragraphText": "Élever puis abaisser la tension n'est possible qu'en courant alternatif, grâce aux transformateurs (leçon 9).\nC'est une des raisons historiques du choix du courant alternatif pour les réseaux de distribution.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p05_q4",
            "type": "mcq",
            "prompt": "L'élévation de la tension pour le transport, puis son abaissement à l'arrivée, sont réalisés par :",
            "options": [
              "Des résistors",
              "Des condensateurs",
              "Des piles",
              "Des transformateurs, qui exigent le courant alternatif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont les deux transformateurs du schéma du §6.1 (12 V/220 V et 220 V/12 V)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le réseau : THT, HT, MT, BT (documentation)",
          "stepTheme": "Le réseau : THT, HT, MT, BT (documentation)",
          "stepBadge": "Le réseau : THT, HT, MT, BT (documentation)",
          "paragraphText": "La documentation ENGIE décrit le réseau de grand transport : très haute tension entre 225 000 et 400 000 V, haute tension entre 63 000 et 90 000 V.\nLa distribution descend ensuite à la moyenne tension (20 000 V) puis à la basse tension (230 à 400 V) chez l'usager.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p05_q5",
            "type": "mcq",
            "prompt": "D'après la documentation, le réseau de grand transport utilise des tensions de :",
            "options": [
              "225 000 à 400 000 V (très haute tension)",
              "230 à 400 V",
              "12 à 220 V",
              "20 000 V exactement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les ordres de grandeur de la documentation ; 20 000 V est la moyenne tension de distribution."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Transporter loin grâce à la haute tension",
          "stepTheme": "Transporter loin grâce à la haute tension",
          "stepBadge": "Transporter loin grâce à la haute tension",
          "paragraphText": "La documentation conclut : la haute et la très haute tension permettent de transporter l'énergie sur de très longues distances.\nLe réseau de grand transport français représente environ 100 000 kilomètres de câbles.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p05_q6",
            "type": "mcq",
            "prompt": "L'intérêt principal des lignes à haute et très haute tension est de :",
            "options": [
              "Produire plus d'électricité",
              "Transporter l'énergie sur de très longues distances en limitant les pertes",
              "Supprimer les transformateurs",
              "Rendre le courant continu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la réponse de la documentation à la question « Pourquoi sont-elles utilisées ? »."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l15_puissance_p05_q1",
          "type": "mcq",
          "prompt": "Dans l'expérience du §6, le conducteur ohmique de 470 Ω représente :",
          "options": [
            "La charge à alimenter",
            "La résistance des lignes électriques",
            "Le générateur",
            "Un condensateur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'interprétation du §6.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p05_q2",
          "type": "mcq",
          "prompt": "Pour la même puissance fournie par le générateur, les pertes par effet Joule dans la ligne sont :",
          "options": [
            "Plus fortes sous 220 V",
            "Plus faibles sous 220 V que sous 12 V",
            "Identiques dans les deux cas",
            "Nulles sous 12 V"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion de l'expérience du §6.2."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p05_q3",
          "type": "mcq",
          "prompt": "Le transport sous haute tension réduit les pertes parce que, à puissance égale :",
          "options": [
            "La résistance des lignes diminue",
            "La fréquence augmente",
            "L'intensité diminue, et les pertes varient comme son carré",
            "La puissance apparente augmente"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le mécanisme de l'effet Joule (P = R·I²) appliqué au transport, §6.2 et documentation."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p05_q4",
          "type": "mcq",
          "prompt": "L'élévation de la tension pour le transport, puis son abaissement à l'arrivée, sont réalisés par :",
          "options": [
            "Des résistors",
            "Des condensateurs",
            "Des piles",
            "Des transformateurs, qui exigent le courant alternatif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont les deux transformateurs du schéma du §6.1 (12 V/220 V et 220 V/12 V)."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p05_q5",
          "type": "mcq",
          "prompt": "D'après la documentation, le réseau de grand transport utilise des tensions de :",
          "options": [
            "225 000 à 400 000 V (très haute tension)",
            "230 à 400 V",
            "12 à 220 V",
            "20 000 V exactement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les ordres de grandeur de la documentation ; 20 000 V est la moyenne tension de distribution."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p05_q6",
          "type": "mcq",
          "prompt": "L'intérêt principal des lignes à haute et très haute tension est de :",
          "options": [
            "Produire plus d'électricité",
            "Transporter l'énergie sur de très longues distances en limitant les pertes",
            "Supprimer les transformateurs",
            "Rendre le courant continu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la réponse de la documentation à la question « Pourquoi sont-elles utilisées ? »."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l15_puissance_p06",
      "order": 6,
      "title": "Puissance maximale à la résonance et bande passante",
      "summary": "À la résonance, P₀ = U²/R est maximale (φ = 0) ; les fréquences où P = P₀/2 redonnent exactement la bande passante Δf = R/(2πL).",
      "conceptExplanation": "La situation d'évaluation écrit la puissance sous la forme P = R·U²/(R² + (Lω − 1/(Cω))²), pour un circuit de R = 500 Ω, L = 1 H et C = 4 µF sous U = 220 V.\nP est maximale quand le dénominateur est minimal, c'est-à-dire à la résonance : ω₀ = 500 rad/s, soit f₀ = 79,6 Hz, avec φ = 0 et P₀ = U²/R = 96,8 W.\nLes fréquences où la puissance tombe à la moitié de ce maximum vérifient R = ±(Lω − 1/(Cω)) : on trouve f₁ = 129 Hz et f₂ = 49,2 Hz.\nLeur écart, 79,8 Hz, coïncide avec la bande passante Δf = R/(2πL) = 79,6 Hz : conclusion de la situation, la bande passante d'un circuit RLC série est l'intervalle des fréquences où la puissance consommée est la moitié de la puissance maximale à la résonance.",
      "keyRule": "P maximale à la résonance : P₀ = U²/R ; la bande passante se lit aussi à mi-puissance.",
      "formulas": [
        {
          "name": "Puissance en fonction de ω",
          "formula": "P = \\frac{R U^2}{R^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2}",
          "note": "Maximale quand le terme réactif s'annule."
        },
        {
          "name": "Puissance maximale à la résonance",
          "formula": "P_0 = \\frac{U^2}{R}",
          "note": "Obtenue pour φ = 0 à la fréquence propre."
        }
      ],
      "workedExample": {
        "title": "La situation d'évaluation : P₀ et les fréquences à mi-puissance",
        "statement": "Un circuit (R = 500 Ω, L = 1 H, C = 4 µF) est alimenté sous U = 220 V à fréquence variable. Détermine la puissance maximale et les fréquences où elle est réduite de moitié.",
        "methodSteps": [
          "La puissance est maximale à la résonance : ω₀ = 1/√(LC) = 500 rad/s, soit f₀ = 79,6 Hz, et P₀ = U²/R = 96,8 W, avec φ = 0.",
          "La condition P = P₀/2 donne deux pulsations : 809 rad/s et 309 rad/s.",
          "Les fréquences correspondantes sont 129 Hz et 49,2 Hz, d'écart 79,8 Hz, égal à la bande passante."
        ],
        "conclusion": "Ce sont les résultats des questions 2 et 3 de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "P est maximale à la résonance",
          "stepTheme": "P est maximale à la résonance",
          "stepBadge": "P est maximale à la résonance",
          "paragraphText": "Dans l'expression P(ω), seul le dénominateur varie : il est minimal quand Lω = 1/(Cω).\nLa puissance moyenne consommée est donc maximale exactement à la résonance d'intensité.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p06_q1",
            "type": "mcq",
            "prompt": "La puissance moyenne consommée par un circuit RLC série (à U constant) est maximale :",
            "options": [
              "À la résonance d'intensité",
              "À fréquence nulle",
              "À fréquence infinie",
              "Quand cos φ = 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le raisonnement de la question 2.1 de la situation : Z minimale ⇒ P maximale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La situation : f₀ = 79,6 Hz et P₀ = 96,8 W",
          "stepTheme": "La situation : f₀ = 79,6 Hz et P₀ = 96,8 W",
          "stepBadge": "La situation : f₀ = 79,6 Hz et P₀ = 96,8 W",
          "paragraphText": "Pour L = 1 H et C = 4 µF, la pulsation propre vaut 500 rad/s, soit une fréquence de 79,6 Hz.\nLa puissance maximale, pour U = 220 V et R = 500 Ω, vaut 96,8 W, et la phase y est nulle.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p06_q2",
            "type": "mcq",
            "prompt": "La puissance maximale du circuit de la situation (U = 220 V ; R = 500 Ω) et sa fréquence valent :",
            "options": [
              "P₀ = 96,8 W à 50 Hz",
              "P₀ = 96,8 W à 79,6 Hz, avec φ = 0",
              "P₀ = 220 W à 79,6 Hz",
              "P₀ = 48 W à 129 Hz"
            ],
            "correctAnswerIndex": 1,
            "explanation": "P₀ = U²/R = 96,8 W à la résonance f₀ = 79,6 Hz (question 2.1 de la situation)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les fréquences à mi-puissance : 129 Hz et 49,2 Hz",
          "stepTheme": "Les fréquences à mi-puissance : 129 Hz et 49,2 Hz",
          "stepBadge": "Les fréquences à mi-puissance : 129 Hz et 49,2 Hz",
          "paragraphText": "La condition P = P₀/2 équivaut à R² = (Lω − 1/(Cω))², une équation à deux cas de signe.\nSes deux solutions positives donnent f₁ = 129 Hz et f₂ = 49,2 Hz, de part et d'autre de la résonance.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p06_q3",
            "type": "mcq",
            "prompt": "Les fréquences où la puissance vaut la moitié de son maximum, dans la situation, sont :",
            "options": [
              "79,6 Hz et 79,6 Hz",
              "500 Hz et 309 Hz",
              "129 Hz et 49,2 Hz",
              "180 Hz et 240 Hz"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les réponses de la question 2.2 de la situation ; 180 et 240 Hz étaient les coupures de la leçon 14."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le pont avec la bande passante de la leçon 14",
          "stepTheme": "Le pont avec la bande passante de la leçon 14",
          "stepBadge": "Le pont avec la bande passante de la leçon 14",
          "paragraphText": "L'écart entre les deux fréquences à mi-puissance (79,8 Hz) égale la bande passante Δf = R/(2πL) = 79,6 Hz, aux arrondis près.\nConclusion : la bande passante est l'intervalle des fréquences où la puissance consommée est la moitié de la puissance maximale — cohérent avec le seuil I₀/√2 de la leçon 14, puisque P varie comme I².",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p06_q4",
            "type": "mcq",
            "prompt": "La conclusion de la situation d'évaluation est que la bande passante d'un circuit RLC série correspond aux fréquences où :",
            "options": [
              "La puissance est maximale",
              "Le courant est nul",
              "La phase vaut π/2",
              "La puissance consommée est la moitié de la puissance maximale à la résonance"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la conclusion écrite de la situation, Δf = f₁ − f₂ = 79,6 Hz."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "À mi-puissance ne correspond pas I₀/2",
          "stepTheme": "À mi-puissance ne correspond pas I₀/2",
          "stepBadge": "À mi-puissance ne correspond pas I₀/2",
          "paragraphText": "Piège : la puissance variant comme le carré du courant, P = P₀/2 correspond à I = I₀/√2, pas à I₀/2.\nC'est exactement le seuil utilisé pour définir la bande passante dans la leçon sur la résonance.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p06_q5",
            "type": "mcq",
            "prompt": "Aux fréquences limites de la bande passante, l'intensité vaut :",
            "options": [
              "I₀/√2, car la puissance varie comme le carré du courant",
              "I₀/2 exactement",
              "I₀",
              "Zéro"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P = R·I² : diviser P par 2 revient à diviser I par √2 — le seuil à 3 dB de la leçon 14."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 4 : l'impédance et le courant du TP",
          "stepTheme": "L'exercice 4 : l'impédance et le courant du TP",
          "stepBadge": "L'exercice 4 : l'impédance et le courant du TP",
          "paragraphText": "Dans l'exercice 4 (L = 20 mH, C = 5 µF, f = 400 Hz, R = 6 Ω, Um = 24√2 V), l'impédance vaut 8,48 Ω.\nL'amplitude du courant vaut donc Um/Z = 4 A, avec une tangente de phase de −1 pour φu/i.",
          "exercise": {
            "id": "terminale_c_physique_l15_puissance_p06_q6",
            "type": "mcq",
            "prompt": "L'impédance et l'amplitude du courant dans l'exercice 4 (R = 6 Ω ; Um = 24√2 V) valent :",
            "options": [
              "Z = 6 Ω et Im = 4 A",
              "Z = 8,48 Ω et Im = 4 A",
              "Z = 8,48 Ω et Im = 2 A",
              "Z = 24 Ω et Im = 1 A"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Z = 8,48 Ω (question 2.1) et Im = Um/Z = 4 A (question 3) de l'exercice 4."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l15_puissance_p06_q1",
          "type": "mcq",
          "prompt": "La puissance moyenne consommée par un circuit RLC série (à U constant) est maximale :",
          "options": [
            "À la résonance d'intensité",
            "À fréquence nulle",
            "À fréquence infinie",
            "Quand cos φ = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le raisonnement de la question 2.1 de la situation : Z minimale ⇒ P maximale."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p06_q2",
          "type": "mcq",
          "prompt": "La puissance maximale du circuit de la situation (U = 220 V ; R = 500 Ω) et sa fréquence valent :",
          "options": [
            "P₀ = 96,8 W à 50 Hz",
            "P₀ = 96,8 W à 79,6 Hz, avec φ = 0",
            "P₀ = 220 W à 79,6 Hz",
            "P₀ = 48 W à 129 Hz"
          ],
          "correctAnswerIndex": 1,
          "explanation": "P₀ = U²/R = 96,8 W à la résonance f₀ = 79,6 Hz (question 2.1 de la situation)."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p06_q3",
          "type": "mcq",
          "prompt": "Les fréquences où la puissance vaut la moitié de son maximum, dans la situation, sont :",
          "options": [
            "79,6 Hz et 79,6 Hz",
            "500 Hz et 309 Hz",
            "129 Hz et 49,2 Hz",
            "180 Hz et 240 Hz"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les réponses de la question 2.2 de la situation ; 180 et 240 Hz étaient les coupures de la leçon 14."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p06_q4",
          "type": "mcq",
          "prompt": "La conclusion de la situation d'évaluation est que la bande passante d'un circuit RLC série correspond aux fréquences où :",
          "options": [
            "La puissance est maximale",
            "Le courant est nul",
            "La phase vaut π/2",
            "La puissance consommée est la moitié de la puissance maximale à la résonance"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la conclusion écrite de la situation, Δf = f₁ − f₂ = 79,6 Hz."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p06_q5",
          "type": "mcq",
          "prompt": "Aux fréquences limites de la bande passante, l'intensité vaut :",
          "options": [
            "I₀/√2, car la puissance varie comme le carré du courant",
            "I₀/2 exactement",
            "I₀",
            "Zéro"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P = R·I² : diviser P par 2 revient à diviser I par √2 — le seuil à 3 dB de la leçon 14."
        },
        {
          "id": "terminale_c_physique_l15_puissance_p06_q6",
          "type": "mcq",
          "prompt": "L'impédance et l'amplitude du courant dans l'exercice 4 (R = 6 Ω ; Um = 24√2 V) valent :",
          "options": [
            "Z = 6 Ω et Im = 4 A",
            "Z = 8,48 Ω et Im = 4 A",
            "Z = 8,48 Ω et Im = 2 A",
            "Z = 24 Ω et Im = 1 A"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Z = 8,48 Ω (question 2.1) et Im = Um/Z = 4 A (question 3) de l'exercice 4."
        }
      ]
    }
  ]
};
