import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 5 : Oscillations mécaniques libres » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1323
export const PHYSIQUE_TLE_CD_L05_OSCILLATIONS: CurriculumChapter = {
  "id": "terminale_c_physique_l05_oscillations",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 5,
  "title": "Leçon 5 : Oscillations mécaniques libres",
  "summary": "On définit un oscillateur mécanique libre, puis on étudie le pendule élastique horizontal : équation différentielle, solution sinusoïdale de pulsation propre √(k/m), et conservation de l'énergie mécanique de l'oscillateur non amorti.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1323",
  "points": [
    {
      "id": "terminale_c_physique_l05_oscillations_p01",
      "order": 1,
      "title": "Définitions : oscillateur, période et fréquence",
      "summary": "Un oscillateur effectue un mouvement périodique autour de sa position d'équilibre stable ; on le caractérise par sa période et sa fréquence.",
      "conceptExplanation": "Un mouvement oscillatoire libre d'un solide est un mouvement périodique autour de la position d'équilibre stable de ce solide lorsqu'il est abandonné à lui-même.\nUn oscillateur mécanique est un système mécanique qui effectue un mouvement périodique autour de sa position d'équilibre ; il est dit libre lorsqu'écarté de sa position d'équilibre et abandonné à lui-même, il effectue des oscillations (exercice 3).\nLa période T est la durée d'une oscillation complète, c'est-à-dire d'un aller-retour.\nLa fréquence N (ou f) est le nombre d'oscillations complètes par seconde ; on a T = 1/N et la pulsation ω = 2πN = 2π/T.",
      "keyRule": "T = 1/N et ω = 2π/T : période en secondes, fréquence en hertz, pulsation en rad/s.",
      "formulas": [
        {
          "name": "Période et fréquence",
          "formula": "T = \\frac{1}{N}",
          "note": "N est le nombre d'oscillations complètes par seconde (en hertz)."
        },
        {
          "name": "Pulsation",
          "formula": "\\omega = 2\\pi N = \\frac{2\\pi}{T}",
          "note": "En radians par seconde."
        }
      ],
      "workedExample": {
        "title": "Vrai ou faux ? (exercice 3)",
        "statement": "« La durée d'une oscillation complète est une période » et « la fréquence correspond au nombre d'oscillations par unité de temps » : vrai ou faux ?",
        "methodSteps": [
          "La première affirmation reprend la définition de la période : vraie.",
          "La seconde reprend la définition de la fréquence : vraie.",
          "De même, un oscillateur sans aucune force dissipative est dit non amorti : vrai."
        ],
        "conclusion": "Ce sont les réponses aux affirmations 3, 4 et 5 de l'exercice 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'oscillateur mécanique libre",
          "stepTheme": "L'oscillateur mécanique libre",
          "stepBadge": "L'oscillateur mécanique libre",
          "paragraphText": "• Oscillateur mécanique : système mécanique qui effectue un mouvement périodique autour de sa position d'équilibre.\nIl est libre lorsqu'écarté de sa position d'équilibre et abandonné à lui-même, il effectue des oscillations, sans apport d'énergie extérieur.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p01_q1",
            "type": "mcq",
            "prompt": "Un oscillateur mécanique est dit libre lorsque :",
            "options": [
              "Il est écarté de sa position d'équilibre puis abandonné à lui-même",
              "Un moteur entretient ses oscillations",
              "Il ne possède aucune position d'équilibre",
              "Ses oscillations sont amorties par des frottements"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §1, confirmée Vrai à l'affirmation 2 de l'exercice 3."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La période d'oscillation",
          "stepTheme": "La période d'oscillation",
          "stepBadge": "La période d'oscillation",
          "paragraphText": "• Période T : durée d'une oscillation complète, c'est-à-dire d'un va-et-vient complet du mobile.\nElle s'exprime en secondes ; l'exercice 2 rappelle qu'un va-et-vient représente une oscillation.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p01_q2",
            "type": "mcq",
            "prompt": "La période d'un oscillateur est :",
            "options": [
              "Le nombre d'oscillations par seconde",
              "La durée d'une oscillation complète (un aller-retour)",
              "La distance maximale à l'équilibre",
              "La moitié de la fréquence"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §1, classée Vrai à l'affirmation 4 de l'exercice 3."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La fréquence",
          "stepTheme": "La fréquence",
          "stepBadge": "La fréquence",
          "paragraphText": "• Fréquence N : nombre d'oscillations complètes effectuées par seconde.\nElle s'exprime en hertz (Hz) et c'est l'inverse de la période : N = 1/T.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p01_q3",
            "type": "mcq",
            "prompt": "La fréquence d'un oscillateur est :",
            "options": [
              "La durée d'un aller-retour",
              "L'amplitude des oscillations",
              "Le nombre d'oscillations complètes par seconde",
              "La pulsation multipliée par 2π"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Définition du §1 (affirmation 5 de l'exercice 3 : Vrai). La liste de mots de l'exercice 2 précise « périodes par seconde »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La pulsation ω",
          "stepTheme": "La pulsation ω",
          "stepBadge": "La pulsation ω",
          "paragraphText": "La pulsation relie la fréquence et la période : ω = 2πN = 2π/T.\nElle s'exprime en radians par seconde et apparaîtra dans l'équation horaire du pendule élastique.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p01_q4",
            "type": "mcq",
            "prompt": "La pulsation d'un oscillateur de période T vaut :",
            "options": [
              "ω = T/(2π)",
              "ω = 2π × T",
              "ω = 1/T seulement",
              "ω = 2π/T"
            ],
            "correctAnswerIndex": 3,
            "explanation": "ω = 2πN et N = 1/T donnent ω = 2π/T (§1 du résumé)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'oscillateur non amorti",
          "stepTheme": "L'oscillateur non amorti",
          "stepBadge": "L'oscillateur non amorti",
          "paragraphText": "Lorsqu'un oscillateur n'est soumis à aucune force dissipative (pas de frottements), il est non amorti.\nL'exercice 3 classe cette affirmation Vrai : ses oscillations gardent alors la même amplitude.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p01_q5",
            "type": "mcq",
            "prompt": "Un oscillateur est dit non amorti lorsqu'il :",
            "options": [
              "N'est soumis à aucune force dissipative",
              "Est soumis à de forts frottements",
              "Reçoit de l'énergie en permanence",
              "Oscille de plus en plus fort"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Affirmation 3 de l'exercice 3 : Vrai. Sans dissipation, l'énergie mécanique se conserve."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre période et fréquence",
          "stepTheme": "Ne pas confondre période et fréquence",
          "stepBadge": "Ne pas confondre période et fréquence",
          "paragraphText": "Piège classique : la période est une durée (en secondes), la fréquence un nombre d'oscillations par seconde (en hertz).\nElles sont inverses l'une de l'autre : si la période double, la fréquence est divisée par deux.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p01_q6",
            "type": "mcq",
            "prompt": "Un oscillateur de période T = 0,05 s a une fréquence de :",
            "options": [
              "0,05 Hz",
              "20 Hz",
              "5 Hz",
              "200 Hz"
            ],
            "correctAnswerIndex": 1,
            "explanation": "N = 1/T = 20 Hz : c'est le calcul de l'exercice 1 du résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l05_oscillations_p01_q1",
          "type": "mcq",
          "prompt": "Un oscillateur mécanique est dit libre lorsque :",
          "options": [
            "Il est écarté de sa position d'équilibre puis abandonné à lui-même",
            "Un moteur entretient ses oscillations",
            "Il ne possède aucune position d'équilibre",
            "Ses oscillations sont amorties par des frottements"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §1, confirmée Vrai à l'affirmation 2 de l'exercice 3."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p01_q2",
          "type": "mcq",
          "prompt": "La période d'un oscillateur est :",
          "options": [
            "Le nombre d'oscillations par seconde",
            "La durée d'une oscillation complète (un aller-retour)",
            "La distance maximale à l'équilibre",
            "La moitié de la fréquence"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §1, classée Vrai à l'affirmation 4 de l'exercice 3."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p01_q3",
          "type": "mcq",
          "prompt": "La fréquence d'un oscillateur est :",
          "options": [
            "La durée d'un aller-retour",
            "L'amplitude des oscillations",
            "Le nombre d'oscillations complètes par seconde",
            "La pulsation multipliée par 2π"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Définition du §1 (affirmation 5 de l'exercice 3 : Vrai). La liste de mots de l'exercice 2 précise « périodes par seconde »."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p01_q4",
          "type": "mcq",
          "prompt": "La pulsation d'un oscillateur de période T vaut :",
          "options": [
            "ω = T/(2π)",
            "ω = 2π × T",
            "ω = 1/T seulement",
            "ω = 2π/T"
          ],
          "correctAnswerIndex": 3,
          "explanation": "ω = 2πN et N = 1/T donnent ω = 2π/T (§1 du résumé)."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p01_q5",
          "type": "mcq",
          "prompt": "Un oscillateur est dit non amorti lorsqu'il :",
          "options": [
            "N'est soumis à aucune force dissipative",
            "Est soumis à de forts frottements",
            "Reçoit de l'énergie en permanence",
            "Oscille de plus en plus fort"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Affirmation 3 de l'exercice 3 : Vrai. Sans dissipation, l'énergie mécanique se conserve."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p01_q6",
          "type": "mcq",
          "prompt": "Un oscillateur de période T = 0,05 s a une fréquence de :",
          "options": [
            "0,05 Hz",
            "20 Hz",
            "5 Hz",
            "200 Hz"
          ],
          "correctAnswerIndex": 1,
          "explanation": "N = 1/T = 20 Hz : c'est le calcul de l'exercice 1 du résumé."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l05_oscillations_p02",
      "order": 2,
      "title": "Le pendule élastique horizontal et son équation différentielle",
      "summary": "La projection du théorème du centre d'inertie donne m·ẍ + k·x = 0 : l'équation différentielle des oscillations libres non amorties.",
      "conceptExplanation": "Le pendule élastique horizontal est constitué d'un solide de masse m accroché à un ressort de raideur k, glissant sans frottement sur un support horizontal ; l'abscisse x de son centre d'inertie est repérée par rapport à la position d'équilibre O.\nLe solide est soumis à son poids P, à la réaction normale R du support et à la tension T du ressort, de valeur T = −k·x : la force de rappel est proportionnelle à l'élongation et toujours dirigée vers la position d'équilibre.\nLa projection du théorème du centre d'inertie sur l'axe horizontal donne −k·x = m·ẍ, soit l'équation différentielle m·ẍ + k·x = 0, ou encore ẍ + (k/m)·x = 0.\nC'est la même équation obtenue dans la situation d'évaluation et dans les exercices 4 et 5.",
      "keyRule": "Pendule élastique : ẍ + (k/m)·x = 0 — la force de rappel −k·x ramène toujours le solide vers l'équilibre.",
      "formulas": [
        {
          "name": "Équation différentielle",
          "formula": "m\\ddot{x} + kx = 0 \\quad \\text{soit} \\quad \\ddot{x} + \\frac{k}{m}x = 0",
          "note": "Valable pour les oscillations libres non amorties (frottements négligés)."
        },
        {
          "name": "Tension du ressort",
          "formula": "T = -kx",
          "note": "x est l'élongation comptée depuis la position d'équilibre."
        }
      ],
      "workedExample": {
        "title": "Établir l'équation (situation d'évaluation)",
        "statement": "Un cylindre de masse m = 0,1 kg est relié à un ressort de raideur k = 10 N/m sur une tige horizontale, sans frottement. Établis l'équation différentielle de son mouvement.",
        "methodSteps": [
          "Système : le cylindre ; forces : le poids, la tension du ressort et la réaction normale de la tige.",
          "Poids et réaction se compensent ; la projection sur l'axe donne −T = m·a, avec T = k·x.",
          "On obtient m·ẍ + k·x = 0, soit ẍ + (k/m)·x = 0."
        ],
        "conclusion": "C'est l'équation établie à la question 3.1 de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La constitution du pendule élastique",
          "stepTheme": "La constitution du pendule élastique",
          "stepBadge": "La constitution du pendule élastique",
          "paragraphText": "Le pendule élastique horizontal associe un ressort à spires non jointives, de masse négligeable et de raideur k, à un solide de masse m.\nLe solide glisse sans frottement ; son centre d'inertie G est repéré par l'abscisse x comptée depuis la position d'équilibre.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p02_q1",
            "type": "mcq",
            "prompt": "Dans un pendule élastique horizontal, l'abscisse x du solide est comptée à partir :",
            "options": [
              "De l'extrémité fixe du ressort",
              "De la position d'équilibre du centre d'inertie",
              "De l'extrémité libre au repos allongé",
              "Du bord du support"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'origine O est la position de G à l'équilibre, comme dans la situation d'évaluation et l'exercice 4."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les forces appliquées au solide",
          "stepTheme": "Les forces appliquées au solide",
          "stepBadge": "Les forces appliquées au solide",
          "paragraphText": "Le bilan des forces de l'exercice 4 et de la situation d'évaluation comporte trois forces.\nLe poids et la réaction du support se compensent verticalement ; seule la tension du ressort intervient dans le mouvement horizontal.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p02_q2",
            "type": "mcq",
            "prompt": "Les forces extérieures exercées sur le solide d'un pendule élastique horizontal sont :",
            "options": [
              "Le poids seul",
              "La tension du ressort seule",
              "Le poids, la réaction du support et la tension du ressort",
              "Le poids et les frottements uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le bilan des forces des exercices 4 et 5 et de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La force de rappel du ressort",
          "stepTheme": "La force de rappel du ressort",
          "stepBadge": "La force de rappel du ressort",
          "paragraphText": "La tension du ressort vaut T = −k·x : proportionnelle à l'élongation, elle change de signe avec x.\nLe ressort étiré attire le solide, le ressort comprimé le repousse : dans les deux cas, la force ramène vers la position d'équilibre.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p02_q3",
            "type": "mcq",
            "prompt": "La tension d'un ressort d'élongation x s'écrit T = −k·x : le signe moins signifie que la force :",
            "options": [
              "Est toujours négative",
              "Diminue avec le temps",
              "S'annule à l'équilibre seulement après un moment",
              "Est toujours dirigée vers la position d'équilibre (force de rappel)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le sens physique du signe dans la projection −k·x = m·ẍ des exercices 4 et 5."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'équation différentielle des oscillations libres",
          "stepTheme": "L'équation différentielle des oscillations libres",
          "stepBadge": "L'équation différentielle des oscillations libres",
          "paragraphText": "La projection du théorème du centre d'inertie donne −k·x = m·ẍ.\nOn la réécrit m·ẍ + k·x = 0, ou, sous forme réduite, ẍ + (k/m)·x = 0 : c'est l'équation différentielle caractéristique des oscillations libres non amorties.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p02_q4",
            "type": "mcq",
            "prompt": "L'équation différentielle du pendule élastique horizontal non amorti est :",
            "options": [
              "ẍ + (k/m)·x = 0",
              "ẍ + (m/k)·x = 0",
              "ẍ = k·x/m avec le signe plus",
              "ẋ + (k/m)·x = 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle vient de m·ẍ + k·x = 0 (§2.2) ; le signe moins de la force de rappel conduit au signe plus devant (k/m)·x."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le rôle des frottements négligés",
          "stepTheme": "Le rôle des frottements négligés",
          "stepBadge": "Le rôle des frottements négligés",
          "paragraphText": "Piège : l'équation ẍ + (k/m)·x = 0 suppose les frottements négligés, comme indiqué dans les énoncés.\nAvec des frottements, un terme dissipatif apparaît et les oscillations sont amorties : l'amplitude diminue.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p02_q5",
            "type": "mcq",
            "prompt": "L'équation différentielle ẍ + (k/m)·x = 0 n'est valable que si :",
            "options": [
              "Le ressort est vertical",
              "Les frottements sont négligés (oscillateur non amorti)",
              "La masse est négligeable",
              "L'amplitude est très grande"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le §2.2 vise les « oscillations libres non amorties » ; c'est aussi l'hypothèse de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La démarche d'établissement",
          "stepTheme": "La démarche d'établissement",
          "stepBadge": "La démarche d'établissement",
          "paragraphText": "La démarche, identique dans la situation et les exercices 4 et 5, comporte trois temps.\nChoisir le système et faire le bilan des forces, appliquer le théorème du centre d'inertie, puis projeter sur l'axe du mouvement.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p02_q6",
            "type": "mcq",
            "prompt": "Pour établir l'équation différentielle, on projette le théorème du centre d'inertie sur :",
            "options": [
              "La verticale",
              "Un axe tournant",
              "L'axe horizontal du mouvement, où ne subsiste que la tension du ressort",
              "L'axe du ressort uniquement s'il est vertical"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Poids et réaction se compensent : la projection sur (x'x) donne directement −k·x = m·ẍ."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l05_oscillations_p02_q1",
          "type": "mcq",
          "prompt": "Dans un pendule élastique horizontal, l'abscisse x du solide est comptée à partir :",
          "options": [
            "De l'extrémité fixe du ressort",
            "De la position d'équilibre du centre d'inertie",
            "De l'extrémité libre au repos allongé",
            "Du bord du support"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'origine O est la position de G à l'équilibre, comme dans la situation d'évaluation et l'exercice 4."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p02_q2",
          "type": "mcq",
          "prompt": "Les forces extérieures exercées sur le solide d'un pendule élastique horizontal sont :",
          "options": [
            "Le poids seul",
            "La tension du ressort seule",
            "Le poids, la réaction du support et la tension du ressort",
            "Le poids et les frottements uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le bilan des forces des exercices 4 et 5 et de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p02_q3",
          "type": "mcq",
          "prompt": "La tension d'un ressort d'élongation x s'écrit T = −k·x : le signe moins signifie que la force :",
          "options": [
            "Est toujours négative",
            "Diminue avec le temps",
            "S'annule à l'équilibre seulement après un moment",
            "Est toujours dirigée vers la position d'équilibre (force de rappel)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le sens physique du signe dans la projection −k·x = m·ẍ des exercices 4 et 5."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p02_q4",
          "type": "mcq",
          "prompt": "L'équation différentielle du pendule élastique horizontal non amorti est :",
          "options": [
            "ẍ + (k/m)·x = 0",
            "ẍ + (m/k)·x = 0",
            "ẍ = k·x/m avec le signe plus",
            "ẋ + (k/m)·x = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle vient de m·ẍ + k·x = 0 (§2.2) ; le signe moins de la force de rappel conduit au signe plus devant (k/m)·x."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p02_q5",
          "type": "mcq",
          "prompt": "L'équation différentielle ẍ + (k/m)·x = 0 n'est valable que si :",
          "options": [
            "Le ressort est vertical",
            "Les frottements sont négligés (oscillateur non amorti)",
            "La masse est négligeable",
            "L'amplitude est très grande"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le §2.2 vise les « oscillations libres non amorties » ; c'est aussi l'hypothèse de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p02_q6",
          "type": "mcq",
          "prompt": "Pour établir l'équation différentielle, on projette le théorème du centre d'inertie sur :",
          "options": [
            "La verticale",
            "Un axe tournant",
            "L'axe horizontal du mouvement, où ne subsiste que la tension du ressort",
            "L'axe du ressort uniquement s'il est vertical"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Poids et réaction se compensent : la projection sur (x'x) donne directement −k·x = m·ẍ."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l05_oscillations_p03",
      "order": 3,
      "title": "La solution sinusoïdale et ses caractéristiques",
      "summary": "x(t) = Xm·cos(ω₀t + φ) avec ω₀ = √(k/m), T₀ = 2π√(m/k) et N₀ = 1/T₀.",
      "conceptExplanation": "La solution de l'équation différentielle est sinusoïdale : x(t) = Xm·cos(ω₀t + φ), où Xm est l'élongation maximale (l'amplitude, en mètres) et φ la phase à l'origine des dates (en radians).\nLa pulsation propre de l'oscillateur est ω₀ = √(k/m), en rad/s.\nLa période propre vaut T₀ = 2π/ω₀ = 2π√(m/k), en secondes, et la fréquence propre N₀ = 1/T₀, en hertz.\nAmplitude et phase initiale se déterminent à partir des conditions initiales (position et vitesse à t = 0), par identification comme dans l'exercice 1.",
      "keyRule": "ω₀ = √(k/m) : ressort plus raide ⇒ oscillations plus rapides ; masse plus lourde ⇒ oscillations plus lentes.",
      "formulas": [
        {
          "name": "Équation horaire",
          "formula": "x(t) = X_m \\cos(\\omega_0 t + \\varphi)",
          "note": "Xm amplitude (m), φ phase à l'origine (rad)."
        },
        {
          "name": "Pulsation et période propres",
          "formula": "\\omega_0 = \\sqrt{\\frac{k}{m}} \\quad ; \\quad T_0 = 2\\pi\\sqrt{\\frac{m}{k}}",
          "note": "T₀ ne dépend que de m et k, pas de l'amplitude."
        }
      ],
      "workedExample": {
        "title": "Identifier les caractéristiques (exercice 1)",
        "statement": "L'équation horaire d'un mobile est x = 2 × 10⁻²·cos(40πt − π/6) en unités SI. Précise l'amplitude, la période, la fréquence et la phase initiale.",
        "methodSteps": [
          "Par identification avec Xm·cos(ω₀t + φ) : Xm = 2 × 10⁻² m et ω₀ = 40π rad/s.",
          "T₀ = 2π/ω₀ = 0,05 s, puis N₀ = 1/T₀ = 20 Hz.",
          "La phase initiale est φ = −π/6 rad."
        ],
        "conclusion": "Ce sont les identifications de la solution de l'exercice 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La pulsation propre ω₀ = √(k/m)",
          "stepTheme": "La pulsation propre ω₀ = √(k/m)",
          "stepBadge": "La pulsation propre ω₀ = √(k/m)",
          "paragraphText": "En comparant ẍ + (k/m)·x = 0 à la forme ẍ + ω₀²·x = 0, on obtient ω₀² = k/m.\nLa pulsation propre ne dépend que des caractéristiques de l'oscillateur : la raideur k et la masse m.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p03_q1",
            "type": "mcq",
            "prompt": "La pulsation propre d'un pendule élastique vaut :",
            "options": [
              "$\\omega_0 = \\sqrt{k/m}$",
              "$\\omega_0 = \\sqrt{m/k}$",
              "$\\omega_0 = k/m$",
              "$\\omega_0 = 2\\pi k/m$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'expression du §2.3 : ω₀² = k/m identifié dans l'équation différentielle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La période propre T₀ = 2π√(m/k)",
          "stepTheme": "La période propre T₀ = 2π√(m/k)",
          "stepBadge": "La période propre T₀ = 2π√(m/k)",
          "paragraphText": "De T₀ = 2π/ω₀, on tire T₀ = 2π√(m/k).\nLa période augmente avec la masse et diminue quand le ressort est plus raide ; elle ne dépend pas de l'amplitude des oscillations.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p03_q2",
            "type": "mcq",
            "prompt": "Si on remplace le solide par un solide de masse 4 fois plus grande (même ressort), la période propre devient :",
            "options": [
              "4 fois plus grande",
              "2 fois plus grande",
              "Inchangée",
              "2 fois plus petite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "T₀ varie en √m : multiplier m par 4 multiplie T₀ par 2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'amplitude Xm et la phase φ",
          "stepTheme": "L'amplitude Xm et la phase φ",
          "stepBadge": "L'amplitude Xm et la phase φ",
          "paragraphText": "Dans x(t) = Xm·cos(ω₀t + φ), Xm est l'élongation maximale, toujours positive et exprimée en mètres.\nφ est la phase du mouvement à l'origine des dates, en radians ; la quantité (ω₀t + φ) est la phase à la date t.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p03_q3",
            "type": "mcq",
            "prompt": "Dans l'équation x(t) = Xm·cos(ω₀t + φ), la grandeur φ représente :",
            "options": [
              "L'amplitude",
              "La période",
              "La phase du mouvement à l'origine des dates",
              "La fréquence"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du §2.3 ; Xm est l'amplitude et (ω₀t + φ) la phase à la date t."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 1 : lecture des caractéristiques",
          "stepTheme": "L'exercice 1 : lecture des caractéristiques",
          "stepBadge": "L'exercice 1 : lecture des caractéristiques",
          "paragraphText": "Pour x = 2 × 10⁻²·cos(40πt − π/6), l'identification donne une amplitude de 2 cm et une pulsation de 40π rad/s.\nLa solution en déduit T₀ = 0,05 s, N₀ = 20 Hz et φ = −π/6 rad.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p03_q4",
            "type": "mcq",
            "prompt": "Pour x = 2 × 10⁻²·cos(40πt − π/6), l'amplitude et la fréquence propre valent :",
            "options": [
              "Xm = 40π m et N₀ = 0,05 Hz",
              "Xm = 2 m et N₀ = 20 Hz",
              "Xm = π/6 m et N₀ = 40 Hz",
              "Xm = 2 × 10⁻² m et N₀ = 20 Hz"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Xm est le coefficient devant le cosinus ; N₀ = ω₀/(2π) = 20 Hz (exercice 1)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Déterminer φ par les conditions initiales",
          "stepTheme": "Déterminer φ par les conditions initiales",
          "stepBadge": "Déterminer φ par les conditions initiales",
          "paragraphText": "À t = 0 : x₀ = Xm·cos φ et v₀ = −ω₀·Xm·sin φ.\nLe rapport des deux donne tan φ, et le signe de cos φ (celui de x₀) permet de choisir la bonne valeur de φ, comme dans les exercices 4 et 5.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p03_q5",
            "type": "mcq",
            "prompt": "L'amplitude et la phase initiale d'un oscillateur se déterminent à partir :",
            "options": [
              "Des conditions initiales : position x₀ et vitesse v₀ à t = 0",
              "De la seule raideur k",
              "De la période uniquement",
              "Du schéma du dispositif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la méthode des exercices 4 et 5 et de la question 3.2 de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La situation d'évaluation : ω₀ = 10 rad/s",
          "stepTheme": "La situation d'évaluation : ω₀ = 10 rad/s",
          "stepBadge": "La situation d'évaluation : ω₀ = 10 rad/s",
          "paragraphText": "Avec k = 10 N/m et m = 0,1 kg, la pulsation propre vaut ω₀ = √(k/m) = 10 rad/s.\nLa solution de la situation obtient alors φ = π/4 rad et Xm = 2,82 cm, d'où x(t) = 2,82 × 10⁻²·cos(10t + π/4).",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p03_q6",
            "type": "mcq",
            "prompt": "Pour k = 10 N/m et m = 0,1 kg, la pulsation propre et l'équation horaire (situation d'évaluation) sont :",
            "options": [
              "ω₀ = 1 rad/s ; x(t) = 2 × 10⁻²·cos(t)",
              "ω₀ = 10 rad/s ; x(t) = 2,82 × 10⁻²·cos(10t + π/4)",
              "ω₀ = 100 rad/s ; x(t) = 2,82·cos(100t)",
              "ω₀ = 10 rad/s ; x(t) = 2,82 × 10⁻²·sin(10t)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "ω₀ = √(10/0,1) = 10 rad/s ; Xm = 2,82 cm et φ = π/4 viennent des conditions initiales x₀ = 2 cm, v₀ = −0,2 m/s."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l05_oscillations_p03_q1",
          "type": "mcq",
          "prompt": "La pulsation propre d'un pendule élastique vaut :",
          "options": [
            "$\\omega_0 = \\sqrt{k/m}$",
            "$\\omega_0 = \\sqrt{m/k}$",
            "$\\omega_0 = k/m$",
            "$\\omega_0 = 2\\pi k/m$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'expression du §2.3 : ω₀² = k/m identifié dans l'équation différentielle."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p03_q2",
          "type": "mcq",
          "prompt": "Si on remplace le solide par un solide de masse 4 fois plus grande (même ressort), la période propre devient :",
          "options": [
            "4 fois plus grande",
            "2 fois plus grande",
            "Inchangée",
            "2 fois plus petite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "T₀ varie en √m : multiplier m par 4 multiplie T₀ par 2."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p03_q3",
          "type": "mcq",
          "prompt": "Dans l'équation x(t) = Xm·cos(ω₀t + φ), la grandeur φ représente :",
          "options": [
            "L'amplitude",
            "La période",
            "La phase du mouvement à l'origine des dates",
            "La fréquence"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du §2.3 ; Xm est l'amplitude et (ω₀t + φ) la phase à la date t."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p03_q4",
          "type": "mcq",
          "prompt": "Pour x = 2 × 10⁻²·cos(40πt − π/6), l'amplitude et la fréquence propre valent :",
          "options": [
            "Xm = 40π m et N₀ = 0,05 Hz",
            "Xm = 2 m et N₀ = 20 Hz",
            "Xm = π/6 m et N₀ = 40 Hz",
            "Xm = 2 × 10⁻² m et N₀ = 20 Hz"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Xm est le coefficient devant le cosinus ; N₀ = ω₀/(2π) = 20 Hz (exercice 1)."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p03_q5",
          "type": "mcq",
          "prompt": "L'amplitude et la phase initiale d'un oscillateur se déterminent à partir :",
          "options": [
            "Des conditions initiales : position x₀ et vitesse v₀ à t = 0",
            "De la seule raideur k",
            "De la période uniquement",
            "Du schéma du dispositif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la méthode des exercices 4 et 5 et de la question 3.2 de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p03_q6",
          "type": "mcq",
          "prompt": "Pour k = 10 N/m et m = 0,1 kg, la pulsation propre et l'équation horaire (situation d'évaluation) sont :",
          "options": [
            "ω₀ = 1 rad/s ; x(t) = 2 × 10⁻²·cos(t)",
            "ω₀ = 10 rad/s ; x(t) = 2,82 × 10⁻²·cos(10t + π/4)",
            "ω₀ = 100 rad/s ; x(t) = 2,82·cos(100t)",
            "ω₀ = 10 rad/s ; x(t) = 2,82 × 10⁻²·sin(10t)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "ω₀ = √(10/0,1) = 10 rad/s ; Xm = 2,82 cm et φ = π/4 viennent des conditions initiales x₀ = 2 cm, v₀ = −0,2 m/s."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l05_oscillations_p04",
      "order": 4,
      "title": "La vitesse de l'oscillateur",
      "summary": "v(t) = −ω₀·Xm·sin(ω₀t + φ) : la vitesse est maximale au passage par l'équilibre et nulle aux élongations extrêmes.",
      "conceptExplanation": "La vitesse s'obtient en dérivant l'équation horaire : v(t) = ẋ = −ω₀·Xm·sin(ω₀t + φ).\nSon amplitude (vitesse maximale) est Vm = ω₀·Xm, atteinte au passage par la position d'équilibre, où sin vaut ±1.\nAux positions extrêmes x = ±Xm, le cosinus vaut ±1 et le sinus 0 : la vitesse s'annule, le solide rebrousse chemin.\nLe résumé représente x(t) et v(t) sur deux périodes pour φ = 0 : quand x est maximale, v est nulle ; quand x passe par zéro, |v| est maximale.",
      "keyRule": "v est en quadrature avec x : |v| maximal à l'équilibre, v = 0 aux extrémités ±Xm.",
      "formulas": [
        {
          "name": "Vitesse de l'oscillateur",
          "formula": "v(t) = -\\omega_0 X_m \\sin(\\omega_0 t + \\varphi)",
          "note": "Dérivée de l'équation horaire."
        },
        {
          "name": "Vitesse maximale",
          "formula": "V_m = \\omega_0 X_m",
          "note": "Atteinte au passage par la position d'équilibre."
        }
      ],
      "workedExample": {
        "title": "La voiturette de l'exercice 4 (lâchée depuis x₀ = −15 cm)",
        "statement": "Une voiturette de masse m = 250 g, accrochée à un ressort de raideur k = 100 N/m, est déplacée jusqu'à x₀ = −15 cm puis libérée sans vitesse initiale à t = 0. Détermine x(t) et v(t).",
        "methodSteps": [
          "Pulsation propre : ω₀ = √(k/m) = 20 rad/s.",
          "Conditions initiales : Xm = 0,15 m et, le cosinus devant être négatif, φ = π rad.",
          "D'où x(t) = 0,15·cos(20t + π) et v(t) = −3·sin(20t + π)."
        ],
        "conclusion": "Ce sont les expressions finales de la solution de l'exercice 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'expression de la vitesse",
          "stepTheme": "L'expression de la vitesse",
          "stepBadge": "L'expression de la vitesse",
          "paragraphText": "La dérivation de x(t) = Xm·cos(ω₀t + φ) donne v(t) = −ω₀·Xm·sin(ω₀t + φ).\nLa vitesse oscille donc avec la même pulsation ω₀, mais en sinus : elle est déphasée par rapport à l'élongation.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p04_q1",
            "type": "mcq",
            "prompt": "Si x(t) = Xm·cos(ω₀t + φ), la vitesse du solide vaut :",
            "options": [
              "v = −ω₀·Xm·sin(ω₀t + φ)",
              "v = Xm·cos(ω₀t + φ)",
              "v = ω₀·Xm·cos(ω₀t + φ)",
              "v = −Xm·sin(ω₀t + φ)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la dérivée de l'équation horaire (§2.3 et §2.4) : le facteur ω₀ apparaît par dérivation de la phase."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La vitesse maximale : Vm = ω₀·Xm",
          "stepTheme": "La vitesse maximale : Vm = ω₀·Xm",
          "stepBadge": "La vitesse maximale : Vm = ω₀·Xm",
          "paragraphText": "L'amplitude de la vitesse est Vm = ω₀·Xm, comme le montre la représentation du §2.4.\nElle est atteinte à chaque passage par la position d'équilibre, là où l'élongation est nulle.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p04_q2",
            "type": "mcq",
            "prompt": "La vitesse d'un oscillateur est maximale lorsque le solide :",
            "options": [
              "Est à l'élongation maximale +Xm",
              "Passe par la position d'équilibre",
              "Est à l'élongation minimale −Xm",
              "S'arrête de bouger"
            ],
            "correctAnswerIndex": 1,
            "explanation": "À l'équilibre, sin(ω₀t + φ) = ±1 : |v| = Vm = ω₀·Xm ; aux extrémités, v = 0."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Aux extrémités, la vitesse s'annule mais pas l'accélération",
          "stepTheme": "Aux extrémités, la vitesse s'annule mais pas l'accélération",
          "stepBadge": "Aux extrémités, la vitesse s'annule mais pas l'accélération",
          "paragraphText": "Piège : aux positions x = ±Xm, le solide s'arrête un instant (v = 0) avant de repartir.\nMais la force de rappel y est maximale : l'accélération y vaut ∓(k/m)·Xm, elle n'est donc pas nulle.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p04_q3",
            "type": "mcq",
            "prompt": "Aux élongations extrêmes x = ±Xm, on a :",
            "options": [
              "v = 0 et a = 0",
              "v = Vm et a = 0",
              "v = 0 et l'accélération est maximale en valeur absolue",
              "v = Vm et a maximale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "a = −(k/m)·x est proportionnelle à x : maximale aux extrémités où v s'annule."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 4 : une phase de π rad",
          "stepTheme": "L'exercice 4 : une phase de π rad",
          "stepBadge": "L'exercice 4 : une phase de π rad",
          "paragraphText": "Lâchée sans vitesse depuis x₀ = −0,15 m, la voiturette impose sin φ = 0 et cos φ < 0.\nLa solution retient donc φ = π rad (et non 0), avec Xm = 0,15 m et ω₀ = 20 rad/s.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p04_q4",
            "type": "mcq",
            "prompt": "Pour un oscillateur lâché sans vitesse depuis une élongation négative, la phase initiale vaut :",
            "options": [
              "φ = 0 rad",
              "φ = π/2 rad",
              "φ = −π/2 rad",
              "φ = π rad"
            ],
            "correctAnswerIndex": 3,
            "explanation": "v₀ = 0 donne sin φ = 0 ; x₀ < 0 impose cos φ = −1, donc φ = π (exercice 4)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 5 : un départ à l'équilibre avec vitesse",
          "stepTheme": "L'exercice 5 : un départ à l'équilibre avec vitesse",
          "stepBadge": "L'exercice 5 : un départ à l'équilibre avec vitesse",
          "paragraphText": "Dans l'exercice 5, le solide passe en x₀ = 0 avec la vitesse v₀ = 0,5 m/s et ω₀ = 7,85 rad/s.\nLa solution obtient φ = +π/2 rad, Xm = 0,064 m et T₀ = 0,8 s, d'où x(t) = 6,4 × 10⁻²·cos(7,85t + π/2).",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p04_q5",
            "type": "mcq",
            "prompt": "Dans l'exercice 5 (x₀ = 0, v₀ = 0,5 m/s, ω₀ = 7,85 rad/s), l'amplitude des oscillations vaut :",
            "options": [
              "Xm = 0,064 m",
              "Xm = 0,5 m",
              "Xm = 7,85 m",
              "Xm = 0,8 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Xm = v₀/ω₀ (avec sin φ = 1) donne 0,064 m dans la solution ; 0,8 s est la période propre T₀."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'accélération est proportionnelle à −x",
          "stepTheme": "L'accélération est proportionnelle à −x",
          "stepBadge": "L'accélération est proportionnelle à −x",
          "paragraphText": "L'équation différentielle s'écrit a = ẍ = −(k/m)·x = −ω₀²·x.\nL'accélération est donc toujours opposée à l'élongation : c'est la signature d'un mouvement oscillatoire harmonique.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p04_q6",
            "type": "mcq",
            "prompt": "Pour l'oscillateur harmonique, l'accélération vérifie :",
            "options": [
              "a = ω₀²·x",
              "a = −ω₀²·x",
              "a = −ω₀·x",
              "a = x/ω₀²"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'équation différentielle ẍ + ω₀²x = 0 réécrite : a est opposée et proportionnelle à x."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l05_oscillations_p04_q1",
          "type": "mcq",
          "prompt": "Si x(t) = Xm·cos(ω₀t + φ), la vitesse du solide vaut :",
          "options": [
            "v = −ω₀·Xm·sin(ω₀t + φ)",
            "v = Xm·cos(ω₀t + φ)",
            "v = ω₀·Xm·cos(ω₀t + φ)",
            "v = −Xm·sin(ω₀t + φ)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la dérivée de l'équation horaire (§2.3 et §2.4) : le facteur ω₀ apparaît par dérivation de la phase."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p04_q2",
          "type": "mcq",
          "prompt": "La vitesse d'un oscillateur est maximale lorsque le solide :",
          "options": [
            "Est à l'élongation maximale +Xm",
            "Passe par la position d'équilibre",
            "Est à l'élongation minimale −Xm",
            "S'arrête de bouger"
          ],
          "correctAnswerIndex": 1,
          "explanation": "À l'équilibre, sin(ω₀t + φ) = ±1 : |v| = Vm = ω₀·Xm ; aux extrémités, v = 0."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p04_q3",
          "type": "mcq",
          "prompt": "Aux élongations extrêmes x = ±Xm, on a :",
          "options": [
            "v = 0 et a = 0",
            "v = Vm et a = 0",
            "v = 0 et l'accélération est maximale en valeur absolue",
            "v = Vm et a maximale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "a = −(k/m)·x est proportionnelle à x : maximale aux extrémités où v s'annule."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p04_q4",
          "type": "mcq",
          "prompt": "Pour un oscillateur lâché sans vitesse depuis une élongation négative, la phase initiale vaut :",
          "options": [
            "φ = 0 rad",
            "φ = π/2 rad",
            "φ = −π/2 rad",
            "φ = π rad"
          ],
          "correctAnswerIndex": 3,
          "explanation": "v₀ = 0 donne sin φ = 0 ; x₀ < 0 impose cos φ = −1, donc φ = π (exercice 4)."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p04_q5",
          "type": "mcq",
          "prompt": "Dans l'exercice 5 (x₀ = 0, v₀ = 0,5 m/s, ω₀ = 7,85 rad/s), l'amplitude des oscillations vaut :",
          "options": [
            "Xm = 0,064 m",
            "Xm = 0,5 m",
            "Xm = 7,85 m",
            "Xm = 0,8 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Xm = v₀/ω₀ (avec sin φ = 1) donne 0,064 m dans la solution ; 0,8 s est la période propre T₀."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p04_q6",
          "type": "mcq",
          "prompt": "Pour l'oscillateur harmonique, l'accélération vérifie :",
          "options": [
            "a = ω₀²·x",
            "a = −ω₀²·x",
            "a = −ω₀·x",
            "a = x/ω₀²"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'équation différentielle ẍ + ω₀²x = 0 réécrite : a est opposée et proportionnelle à x."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l05_oscillations_p05",
      "order": 5,
      "title": "Étude énergétique : la conservation de l'énergie mécanique",
      "summary": "Em = ½k·Xm² = constante pour l'oscillateur non amorti : l'énergie passe sans cesse de la forme potentielle élastique à la forme cinétique.",
      "conceptExplanation": "L'énergie potentielle élastique du pendule vaut Epe = ½·k·x².\nL'énergie cinétique du solide vaut Ec = ½·m·v² ; avec ω₀² = k/m, le résumé les écrit Epe = ½·k·Xm²·cos²(ω₀t + φ) et Ec = ½·k·Xm²·sin²(ω₀t + φ).\nLeur somme, l'énergie mécanique, est donc constante : Em = ½·k·Xm² = ½·m·Vm².\nCette conservation permet de calculer une vitesse en un point sans passer par l'équation horaire, comme dans la situation d'évaluation : Em = 4 × 10⁻³ J donne la vitesse au passage par l'équilibre, 0,28 m/s, et les positions d'arrêt, ±0,028 m.",
      "keyRule": "Non amorti : Em = ½k·Xm² = ½m·Vm² = constante — tout le calcul d'une vitesse peut passer par l'énergie.",
      "formulas": [
        {
          "name": "Énergie potentielle élastique",
          "formula": "E_{pe} = \\frac{1}{2} k x^2",
          "note": "Maximale aux élongations extrêmes, nulle à l'équilibre."
        },
        {
          "name": "Énergie mécanique de l'oscillateur",
          "formula": "E_m = \\frac{1}{2} k X_m^2 = \\frac{1}{2} m V_m^2 = \\text{constante}",
          "note": "Pour un oscillateur harmonique non amorti (§3.3)."
        }
      ],
      "workedExample": {
        "title": "La situation d'évaluation par l'énergie (k = 10 N/m, m = 0,1 kg)",
        "statement": "À t = 0, le cylindre est en x₀ = 2 cm avec la vitesse v₀ = −0,2 m/s. Calcule son énergie mécanique, sa vitesse au passage par l'équilibre et les positions où sa vitesse s'annule.",
        "methodSteps": [
          "Em = ½·m·v₀² + ½·k·x₀² = 4 × 10⁻³ J.",
          "À l'équilibre, Epe = 0 : ½·m·V² = Em donne V = 0,28 m/s.",
          "Quand la vitesse s'annule, Ec = 0 : ½·k·X² = Em donne X = ±0,028 m, soit ±2,8 cm : c'est l'amplitude."
        ],
        "conclusion": "Ce sont les résultats des questions 1, 2.1 et 2.2 de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'énergie potentielle élastique",
          "stepTheme": "L'énergie potentielle élastique",
          "stepBadge": "L'énergie potentielle élastique",
          "paragraphText": "• Énergie potentielle élastique : énergie emmagasinée par le ressort déformé, Epe = ½·k·x².\nElle est nulle à la position d'équilibre (référence choisie dans la leçon) et maximale aux élongations extrêmes.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p05_q1",
            "type": "mcq",
            "prompt": "L'énergie potentielle élastique d'un ressort d'élongation x vaut :",
            "options": [
              "$E_{pe} = k \\times x$",
              "$E_{pe} = \\frac{1}{2} k x^2$",
              "$E_{pe} = \\frac{1}{2} m x^2$",
              "$E_{pe} = k x^2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'expression du §3.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les échanges entre Ec et Epe",
          "stepTheme": "Les échanges entre Ec et Epe",
          "stepBadge": "Les échanges entre Ec et Epe",
          "paragraphText": "Au cours d'une oscillation, l'énergie passe continûment d'une forme à l'autre.\nÀ l'équilibre, tout est cinétique (Ec = ½·m·Vm²) ; aux extrémités, tout est potentiel élastique (Epe = ½·k·Xm²).",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p05_q2",
            "type": "mcq",
            "prompt": "Au passage par la position d'équilibre, l'énergie de l'oscillateur est :",
            "options": [
              "Entièrement potentielle élastique",
              "Nulle",
              "Entièrement cinétique",
              "Pour moitié gravitationnelle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En x = 0, Epe = 0 et la vitesse est maximale : Ec = Em (§3.2 et §3.3)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'énergie mécanique est constante",
          "stepTheme": "L'énergie mécanique est constante",
          "stepBadge": "L'énergie mécanique est constante",
          "paragraphText": "Pour l'oscillateur harmonique non amorti, Em = Ec + Epe = ½·k·Xm² ne varie pas au cours du temps.\nLe résumé le montre en additionnant les expressions en cos² et sin², dont la somme vaut 1.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p05_q3",
            "type": "mcq",
            "prompt": "L'énergie mécanique d'un oscillateur harmonique non amorti vaut :",
            "options": [
              "Em = k·Xm",
              "Em = ½·m·Xm²",
              "Em = ½·k·Xm, sans le carré",
              "Em = ½·k·Xm², constante au cours du temps"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le résultat du §3.3 : Em = ½k·Xm² = ½m·Vm² = constante."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La situation : Em = 4 × 10⁻³ J",
          "stepTheme": "La situation : Em = 4 × 10⁻³ J",
          "stepBadge": "La situation : Em = 4 × 10⁻³ J",
          "paragraphText": "À t = 0, l'énergie mécanique combine les deux termes : ½·m·v₀² avec v₀ = 0,2 m/s et ½·k·x₀² avec x₀ = 2 cm.\nLa solution de la situation obtient Em = 4 × 10⁻³ J.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p05_q4",
            "type": "mcq",
            "prompt": "L'énergie mécanique de l'oscillateur de la situation d'évaluation vaut :",
            "options": [
              "4 × 10⁻³ J",
              "4 J",
              "2 × 10⁻³ J",
              "0,28 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "E₀ = ½·m·v₀² + ½·k·x₀² = 4 × 10⁻³ J (question 1 de la situation) ; 0,28 est la vitesse à l'équilibre, en m/s."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La vitesse à l'équilibre par l'énergie",
          "stepTheme": "La vitesse à l'équilibre par l'énergie",
          "stepBadge": "La vitesse à l'équilibre par l'énergie",
          "paragraphText": "À la position d'équilibre, toute l'énergie est cinétique : ½·m·V² = Em.\nLa conservation donne V = 0,28 m/s pour l'oscillateur de la situation — sans utiliser l'équation horaire.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p05_q5",
            "type": "mcq",
            "prompt": "La vitesse du cylindre au passage par l'équilibre (situation d'évaluation) vaut :",
            "options": [
              "0,20 m/s",
              "0,28 m/s",
              "2,8 m/s",
              "0,028 m/s"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la question 2.1 de la situation, résolue par la conservation de l'énergie mécanique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Retrouver l'amplitude par l'énergie",
          "stepTheme": "Retrouver l'amplitude par l'énergie",
          "stepBadge": "Retrouver l'amplitude par l'énergie",
          "paragraphText": "Quand la vitesse s'annule, toute l'énergie est potentielle : ½·k·X² = Em.\nLa situation donne X = ±0,028 m : on retrouve ainsi l'amplitude Xm = 2,8 cm à partir de la seule énergie.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p05_q6",
            "type": "mcq",
            "prompt": "Les positions où la vitesse de l'oscillateur s'annule sont, dans la situation d'évaluation :",
            "options": [
              "x = 0 uniquement",
              "x = ±2 cm",
              "x = ±0,028 m, c'est-à-dire les élongations extrêmes ±Xm",
              "x = ±0,28 m"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Question 2.2 de la situation : X = ±√(2Em/k) = ±0,028 m, cohérent avec Xm = 2,82 cm de l'équation horaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l05_oscillations_p05_q1",
          "type": "mcq",
          "prompt": "L'énergie potentielle élastique d'un ressort d'élongation x vaut :",
          "options": [
            "$E_{pe} = k \\times x$",
            "$E_{pe} = \\frac{1}{2} k x^2$",
            "$E_{pe} = \\frac{1}{2} m x^2$",
            "$E_{pe} = k x^2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'expression du §3.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p05_q2",
          "type": "mcq",
          "prompt": "Au passage par la position d'équilibre, l'énergie de l'oscillateur est :",
          "options": [
            "Entièrement potentielle élastique",
            "Nulle",
            "Entièrement cinétique",
            "Pour moitié gravitationnelle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "En x = 0, Epe = 0 et la vitesse est maximale : Ec = Em (§3.2 et §3.3)."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p05_q3",
          "type": "mcq",
          "prompt": "L'énergie mécanique d'un oscillateur harmonique non amorti vaut :",
          "options": [
            "Em = k·Xm",
            "Em = ½·m·Xm²",
            "Em = ½·k·Xm, sans le carré",
            "Em = ½·k·Xm², constante au cours du temps"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le résultat du §3.3 : Em = ½k·Xm² = ½m·Vm² = constante."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p05_q4",
          "type": "mcq",
          "prompt": "L'énergie mécanique de l'oscillateur de la situation d'évaluation vaut :",
          "options": [
            "4 × 10⁻³ J",
            "4 J",
            "2 × 10⁻³ J",
            "0,28 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "E₀ = ½·m·v₀² + ½·k·x₀² = 4 × 10⁻³ J (question 1 de la situation) ; 0,28 est la vitesse à l'équilibre, en m/s."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p05_q5",
          "type": "mcq",
          "prompt": "La vitesse du cylindre au passage par l'équilibre (situation d'évaluation) vaut :",
          "options": [
            "0,20 m/s",
            "0,28 m/s",
            "2,8 m/s",
            "0,028 m/s"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la question 2.1 de la situation, résolue par la conservation de l'énergie mécanique."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p05_q6",
          "type": "mcq",
          "prompt": "Les positions où la vitesse de l'oscillateur s'annule sont, dans la situation d'évaluation :",
          "options": [
            "x = 0 uniquement",
            "x = ±2 cm",
            "x = ±0,028 m, c'est-à-dire les élongations extrêmes ±Xm",
            "x = ±0,28 m"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Question 2.2 de la situation : X = ±√(2Em/k) = ±0,028 m, cohérent avec Xm = 2,82 cm de l'équation horaire."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l05_oscillations_p06",
      "order": 6,
      "title": "Amortissement et application : la suspension automobile",
      "summary": "Avec des forces dissipatives, l'énergie et l'amplitude diminuent ; la documentation montre le rôle conjoint du ressort et de l'amortisseur dans une suspension.",
      "conceptExplanation": "Le texte à compléter de l'exercice 2 résume le cas amorti : lorsque l'oscillateur mécanique n'est pas amorti, son énergie totale est constante ; si les oscillations sont amorties, cette énergie diminue.\nDans ce cas, l'amplitude des oscillations diminue à cause des pertes d'énergie, et pour compenser ces pertes, un apport extérieur d'énergie est nécessaire (oscillations entretenues).\nLa documentation sur le ressort de suspension illustre le compromis réel : le ressort absorbe les irrégularités de la route pour maintenir les roues en contact avec le sol et filtrer les chocs, tandis que l'amortisseur, qui travaille de concert avec lui, limite ses oscillations en dissipant l'énergie.",
      "keyRule": "Amorti : Em et amplitude décroissent ; entretenu : un apport extérieur compense les pertes.",
      "formulas": [
        {
          "name": "Cas amorti",
          "formula": "E_m \\text{ diminue au cours du temps, donc } X_m \\text{ diminue}",
          "note": "Les pertes sont dues aux forces dissipatives (frottements)."
        }
      ],
      "workedExample": {
        "title": "Le texte de l'exercice 2, complété",
        "statement": "Complète : « Lorsque l'oscillateur mécanique n'est pas amorti, son énergie totale … . Cependant cette énergie … si les oscillations sont amorties. Dans ce cas, … diminue à cause des pertes d'énergie. »",
        "methodSteps": [
          "Non amorti : l'énergie totale est constante.",
          "Amorti : cette énergie diminue.",
          "C'est l'amplitude des oscillations qui diminue ; un apport extérieur d'énergie est nécessaire pour compenser."
        ],
        "conclusion": "Ce sont les mots de la liste (est constante ; diminue ; l'amplitude des oscillations) placés dans la solution de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'effet de l'amortissement sur l'énergie",
          "stepTheme": "L'effet de l'amortissement sur l'énergie",
          "stepBadge": "L'effet de l'amortissement sur l'énergie",
          "paragraphText": "En présence de forces dissipatives, l'oscillateur perd de l'énergie à chaque oscillation.\nSon énergie mécanique diminue donc progressivement, contrairement au cas idéal non amorti étudié dans les points précédents.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p06_q1",
            "type": "mcq",
            "prompt": "Si les oscillations sont amorties, l'énergie mécanique de l'oscillateur :",
            "options": [
              "Diminue au cours du temps",
              "Est constante",
              "Augmente",
              "Devient négative"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le texte complété de l'exercice 2 : les pertes d'énergie sont dues aux forces dissipatives."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'amplitude diminue avec l'énergie",
          "stepTheme": "L'amplitude diminue avec l'énergie",
          "stepBadge": "L'amplitude diminue avec l'énergie",
          "paragraphText": "Comme Em = ½·k·Xm², la diminution de l'énergie se traduit par une diminution de l'amplitude.\nLes oscillations amorties finissent par s'éteindre autour de la position d'équilibre.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p06_q2",
            "type": "mcq",
            "prompt": "Dans le cas amorti, la grandeur qui diminue à cause des pertes d'énergie est :",
            "options": [
              "La raideur du ressort",
              "L'amplitude des oscillations",
              "La masse du solide",
              "La période propre uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le dernier mot à placer dans le texte de l'exercice 2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Compenser les pertes : les oscillations entretenues",
          "stepTheme": "Compenser les pertes : les oscillations entretenues",
          "stepBadge": "Compenser les pertes : les oscillations entretenues",
          "paragraphText": "Pour maintenir des oscillations d'amplitude constante malgré l'amortissement, il faut fournir de l'énergie.\nLe texte de l'exercice 2 conclut qu'un apport extérieur d'énergie est nécessaire pour compenser les pertes.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p06_q3",
            "type": "mcq",
            "prompt": "Pour compenser les pertes d'énergie d'un oscillateur amorti, il faut :",
            "options": [
              "Augmenter sa masse",
              "Supprimer le ressort",
              "Lui fournir un apport extérieur d'énergie",
              "Réduire sa période"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la dernière phrase du texte de l'exercice 2 : on parle alors d'oscillations entretenues."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rôle du ressort de suspension",
          "stepTheme": "Le rôle du ressort de suspension",
          "stepBadge": "Le rôle du ressort de suspension",
          "paragraphText": "La documentation précise que le ressort de suspension absorbe les irrégularités de la route.\nIl maintient ainsi les roues en contact avec le sol, pour une bonne tenue de route, et filtre les chocs pour le confort des passagers.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p06_q4",
            "type": "mcq",
            "prompt": "D'après la documentation, le ressort de suspension d'une automobile sert à :",
            "options": [
              "Faire avancer le véhicule",
              "Freiner les roues",
              "Mesurer la vitesse",
              "Absorber les irrégularités de la route et maintenir les roues en contact avec le sol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la fonction décrite dans la documentation qui clôt le résumé, en écho à la situation d'apprentissage."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de l'amortisseur",
          "stepTheme": "Le rôle de l'amortisseur",
          "stepBadge": "Le rôle de l'amortisseur",
          "paragraphText": "Le ressort seul oscillerait longuement après chaque choc ; la documentation indique qu'il travaille de concert avec l'amortisseur.\nL'énergie accumulée dans les roues est progressivement dissipée dans les oscillations : l'amortisseur limite les oscillations du ressort.",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p06_q5",
            "type": "mcq",
            "prompt": "Dans une suspension automobile, l'amortisseur a pour rôle de :",
            "options": [
              "Limiter les oscillations du ressort en dissipant l'énergie",
              "Augmenter l'amplitude des oscillations",
              "Remplacer le ressort",
              "Entretenir les oscillations sans perte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la conclusion de la documentation : ressort et amortisseur travaillent de concert."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La fréquence se compte par seconde",
          "stepTheme": "La fréquence se compte par seconde",
          "stepBadge": "La fréquence se compte par seconde",
          "paragraphText": "Attention à l'unité : la fréquence est le nombre d'oscillations (de périodes) par seconde, et elle s'exprime en hertz.\nLa liste de mots de l'exercice 2 propose d'ailleurs le groupe « période par seconde ».",
          "exercise": {
            "id": "terminale_c_physique_l05_oscillations_p06_q6",
            "type": "mcq",
            "prompt": "La fréquence des oscillations est le nombre de périodes :",
            "options": [
              "Par minute",
              "Par seconde",
              "Par heure",
              "Par mètre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §1, et le groupe de mots fourni dans la liste de l'exercice 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l05_oscillations_p06_q1",
          "type": "mcq",
          "prompt": "Si les oscillations sont amorties, l'énergie mécanique de l'oscillateur :",
          "options": [
            "Diminue au cours du temps",
            "Est constante",
            "Augmente",
            "Devient négative"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le texte complété de l'exercice 2 : les pertes d'énergie sont dues aux forces dissipatives."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p06_q2",
          "type": "mcq",
          "prompt": "Dans le cas amorti, la grandeur qui diminue à cause des pertes d'énergie est :",
          "options": [
            "La raideur du ressort",
            "L'amplitude des oscillations",
            "La masse du solide",
            "La période propre uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le dernier mot à placer dans le texte de l'exercice 2."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p06_q3",
          "type": "mcq",
          "prompt": "Pour compenser les pertes d'énergie d'un oscillateur amorti, il faut :",
          "options": [
            "Augmenter sa masse",
            "Supprimer le ressort",
            "Lui fournir un apport extérieur d'énergie",
            "Réduire sa période"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la dernière phrase du texte de l'exercice 2 : on parle alors d'oscillations entretenues."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p06_q4",
          "type": "mcq",
          "prompt": "D'après la documentation, le ressort de suspension d'une automobile sert à :",
          "options": [
            "Faire avancer le véhicule",
            "Freiner les roues",
            "Mesurer la vitesse",
            "Absorber les irrégularités de la route et maintenir les roues en contact avec le sol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la fonction décrite dans la documentation qui clôt le résumé, en écho à la situation d'apprentissage."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p06_q5",
          "type": "mcq",
          "prompt": "Dans une suspension automobile, l'amortisseur a pour rôle de :",
          "options": [
            "Limiter les oscillations du ressort en dissipant l'énergie",
            "Augmenter l'amplitude des oscillations",
            "Remplacer le ressort",
            "Entretenir les oscillations sans perte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la conclusion de la documentation : ressort et amortisseur travaillent de concert."
        },
        {
          "id": "terminale_c_physique_l05_oscillations_p06_q6",
          "type": "mcq",
          "prompt": "La fréquence des oscillations est le nombre de périodes :",
          "options": [
            "Par minute",
            "Par seconde",
            "Par heure",
            "Par mètre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §1, et le groupe de mots fourni dans la liste de l'exercice 2."
        }
      ]
    }
  ]
};
