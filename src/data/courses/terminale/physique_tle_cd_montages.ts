import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 11 : Montages dérivateur et intégrateur » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=168
export const PHYSIQUE_TLE_CD_L11_MONTAGES: CurriculumChapter = {
  "id": "terminale_c_physique_l11_montages",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 11,
  "title": "Leçon 11 : Montages dérivateur et intégrateur",
  "summary": "Avec un amplificateur opérationnel idéal, deux montages à un condensateur et un résistor réalisent les opérations mathématiques : le dérivateur (uS = −RC·duₑ/dt) et l'intégrateur (uS = −(1/RC)∫uₑ dt).",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=168",
  "points": [
    {
      "id": "terminale_c_physique_l11_montages_p01",
      "order": 1,
      "title": "Rappels : l'amplificateur opérationnel idéal",
      "summary": "Un AOP a deux entrées (inverseuse et non inverseuse), une sortie et deux alimentations ; en régime linéaire idéal, i₊ = i₋ = 0 et Ud ≈ 0.",
      "conceptExplanation": "L'amplificateur opérationnel est un circuit intégré linéaire comportant 8 bornes, dont une entrée inverseuse E−, une entrée non inverseuse E+, une sortie S et deux bornes d'alimentation −Vcc et +Vcc.\nIl fonctionne soit en régime linéaire (en amplificateur), soit en régime saturé (en comparateur), où la sortie vaut US = ±Vsat.\nPour un AOP idéal en régime linéaire, les courants d'entrée sont négligeables : i− = i+ = 0.\nDe plus, les deux entrées sont pratiquement au même potentiel : la tension différentielle Ud = VE+ − VE− vaut environ 0, et la tension de sortie reste toujours inférieure à la tension de saturation Vsat.",
      "keyRule": "AOP idéal en régime linéaire : i₊ = i₋ = 0 et Ud ≈ 0 — les deux hypothèses de tous les calculs de la leçon.",
      "formulas": [
        {
          "name": "Propriétés de l'AOP idéal (régime linéaire)",
          "formula": "i_+ = i_- = 0 \\quad ; \\quad U_d = V_{E+} - V_{E-} \\approx 0",
          "note": "Et US < Vsat ; en régime saturé, US = ±Vsat."
        }
      ],
      "workedExample": {
        "title": "Vrai ou faux ? (exercice 1, items 1 et 2)",
        "statement": "« La tension de sortie d'un A.O. idéal est toujours inférieure à sa tension de saturation » et « en régime saturé, la tension différentielle est nulle » : vrai ou faux ?",
        "methodSteps": [
          "La première affirmation décrit le régime linéaire : elle est vraie.",
          "La tension différentielle nulle caractérise le régime linéaire, pas le régime saturé.",
          "La seconde affirmation est donc fausse."
        ],
        "conclusion": "Ce sont les réponses 1 (Vrai) et 2 (Faux) de l'exercice 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les bornes d'un AOP",
          "stepTheme": "Les bornes d'un AOP",
          "stepBadge": "Les bornes d'un AOP",
          "paragraphText": "L'amplificateur opérationnel est un circuit intégré linéaire comportant 8 bornes.\nOn y distingue l'entrée inverseuse E−, l'entrée non inverseuse E+, la sortie S et les deux bornes d'alimentation +Vcc et −Vcc.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p01_q1",
            "type": "mcq",
            "prompt": "Les bornes fonctionnelles d'un amplificateur opérationnel sont :",
            "options": [
              "Une entrée inverseuse E−, une entrée non inverseuse E+, une sortie S et deux alimentations ±Vcc",
              "Trois entrées et une masse",
              "Une entrée et trois sorties",
              "Uniquement une entrée et une sortie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la description du §I.1 des rappels du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les deux régimes de fonctionnement",
          "stepTheme": "Les deux régimes de fonctionnement",
          "stepBadge": "Les deux régimes de fonctionnement",
          "paragraphText": "Un AOP fonctionne en régime linéaire lorsqu'il joue un rôle d'amplificateur : c'est le cas des deux montages de la leçon.\nEn régime saturé, il joue un rôle de comparateur et sa sortie est bloquée à US = ±Vsat.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p01_q2",
            "type": "mcq",
            "prompt": "En régime saturé, la tension de sortie d'un AOP vaut :",
            "options": [
              "0 V",
              "±Vsat, la tension de saturation",
              "La tension d'entrée",
              "Elle est proportionnelle à la tension différentielle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le régime « comparateur » du §I.2 ; les montages dérivateur et intégrateur travaillent eux en régime linéaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les courants d'entrée sont nuls",
          "stepTheme": "Les courants d'entrée sont nuls",
          "stepBadge": "Les courants d'entrée sont nuls",
          "paragraphText": "Première propriété de l'AOP idéal en régime linéaire : les courants d'entrée sont négligeables, i− = i+ = 0.\nConséquence essentielle : tout le courant qui arrive sur l'entrée inverseuse par la branche d'entrée repart dans la branche de contre-réaction.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p01_q3",
            "type": "mcq",
            "prompt": "Pour un AOP idéal en régime linéaire, les courants d'entrée vérifient :",
            "options": [
              "i− = i+ = 1 A",
              "i− = −i+",
              "i− = i+ = 0",
              "i− = i+ = le courant de sortie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la première propriété caractéristique du §I.2, notée i− = 0 et i+ = 0 sur les schémas de la situation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La tension différentielle est nulle en régime linéaire",
          "stepTheme": "La tension différentielle est nulle en régime linéaire",
          "stepBadge": "La tension différentielle est nulle en régime linéaire",
          "paragraphText": "Deuxième propriété : en régime linéaire, E− et E+ sont pratiquement au même potentiel, Ud = VE+ − VE− ≈ 0.\nL'entrée non inverseuse étant à la masse dans les deux montages, l'entrée inverseuse est elle aussi à un potentiel quasi nul : c'est la « masse virtuelle ».",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p01_q4",
            "type": "mcq",
            "prompt": "En régime linéaire, la tension différentielle d'un AOP idéal est :",
            "options": [
              "Égale à Vsat",
              "Égale à la tension d'entrée",
              "Infinie",
              "Pratiquement nulle : Ud ≈ 0"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la deuxième propriété du §I.2 ; l'affirmation contraire pour le régime saturé est classée Faux à l'exercice 1."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La sortie reste sous la saturation",
          "stepTheme": "La sortie reste sous la saturation",
          "stepBadge": "La sortie reste sous la saturation",
          "paragraphText": "En régime linéaire, la tension de sortie est toujours inférieure à la tension de saturation de l'AOP.\nL'exercice 1 classe cette affirmation Vrai : si le calcul donnait davantage, l'AOP saturerait et le montage ne réaliserait plus l'opération voulue.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p01_q5",
            "type": "mcq",
            "prompt": "En régime linéaire, la tension de sortie d'un AOP idéal est :",
            "options": [
              "Toujours inférieure à la tension de saturation Vsat",
              "Toujours égale à Vsat",
              "Toujours nulle",
              "Limitée à la tension d'entrée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Réponse 1 (Vrai) de l'exercice 1 : US < Vsat est la troisième propriété du §I.2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le condensateur ne laisse pas passer les électrons",
          "stepTheme": "Le condensateur ne laisse pas passer les électrons",
          "stepBadge": "Le condensateur ne laisse pas passer les électrons",
          "paragraphText": "L'exercice 1 classe Faux l'affirmation « entre les armatures d'un condensateur, les électrons traversent le diélectrique ».\nLe « courant » à travers un condensateur correspond à la charge et à la décharge de ses armatures, pas à une traversée du diélectrique isolant.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p01_q6",
            "type": "mcq",
            "prompt": "Entre les armatures d'un condensateur, les électrons traversent le diélectrique :",
            "options": [
              "Vrai, c'est le courant de charge",
              "Faux : le diélectrique est isolant, les armatures se chargent et se déchargent sans traversée",
              "Vrai seulement en courant alternatif",
              "Vrai seulement si la tension est élevée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Réponse 3 (Faux) de l'exercice 1 : i = dq/dt décrit l'évolution de la charge des armatures."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l11_montages_p01_q1",
          "type": "mcq",
          "prompt": "Les bornes fonctionnelles d'un amplificateur opérationnel sont :",
          "options": [
            "Une entrée inverseuse E−, une entrée non inverseuse E+, une sortie S et deux alimentations ±Vcc",
            "Trois entrées et une masse",
            "Une entrée et trois sorties",
            "Uniquement une entrée et une sortie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la description du §I.1 des rappels du résumé."
        },
        {
          "id": "terminale_c_physique_l11_montages_p01_q2",
          "type": "mcq",
          "prompt": "En régime saturé, la tension de sortie d'un AOP vaut :",
          "options": [
            "0 V",
            "±Vsat, la tension de saturation",
            "La tension d'entrée",
            "Elle est proportionnelle à la tension différentielle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le régime « comparateur » du §I.2 ; les montages dérivateur et intégrateur travaillent eux en régime linéaire."
        },
        {
          "id": "terminale_c_physique_l11_montages_p01_q3",
          "type": "mcq",
          "prompt": "Pour un AOP idéal en régime linéaire, les courants d'entrée vérifient :",
          "options": [
            "i− = i+ = 1 A",
            "i− = −i+",
            "i− = i+ = 0",
            "i− = i+ = le courant de sortie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la première propriété caractéristique du §I.2, notée i− = 0 et i+ = 0 sur les schémas de la situation."
        },
        {
          "id": "terminale_c_physique_l11_montages_p01_q4",
          "type": "mcq",
          "prompt": "En régime linéaire, la tension différentielle d'un AOP idéal est :",
          "options": [
            "Égale à Vsat",
            "Égale à la tension d'entrée",
            "Infinie",
            "Pratiquement nulle : Ud ≈ 0"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la deuxième propriété du §I.2 ; l'affirmation contraire pour le régime saturé est classée Faux à l'exercice 1."
        },
        {
          "id": "terminale_c_physique_l11_montages_p01_q5",
          "type": "mcq",
          "prompt": "En régime linéaire, la tension de sortie d'un AOP idéal est :",
          "options": [
            "Toujours inférieure à la tension de saturation Vsat",
            "Toujours égale à Vsat",
            "Toujours nulle",
            "Limitée à la tension d'entrée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Réponse 1 (Vrai) de l'exercice 1 : US < Vsat est la troisième propriété du §I.2."
        },
        {
          "id": "terminale_c_physique_l11_montages_p01_q6",
          "type": "mcq",
          "prompt": "Entre les armatures d'un condensateur, les électrons traversent le diélectrique :",
          "options": [
            "Vrai, c'est le courant de charge",
            "Faux : le diélectrique est isolant, les armatures se chargent et se déchargent sans traversée",
            "Vrai seulement en courant alternatif",
            "Vrai seulement si la tension est élevée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Réponse 3 (Faux) de l'exercice 1 : i = dq/dt décrit l'évolution de la charge des armatures."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l11_montages_p02",
      "order": 2,
      "title": "Le montage dérivateur : schéma et relation",
      "summary": "Condensateur en entrée, résistor en contre-réaction : uS = −RC·duₑ/dt, obtenue par deux lois des mailles.",
      "conceptExplanation": "Dans le montage dérivateur, le condensateur C est placé dans la branche d'entrée (sur E−) et le résistor R dans la branche de contre-réaction, entre la sortie et E− ; l'entrée E+ est à la masse.\nLa loi des mailles à l'entrée, avec Ud = 0, donne q = C·ue pour la charge du condensateur, donc un courant d'entrée i = C·(due/dt).\nComme i− = 0, ce même courant traverse R ; la maille de sortie donne alors uS = −R·i, soit uS = −RC·(due/dt).\nLa tension de sortie est donc proportionnelle à la dérivée de la tension d'entrée, avec un signe moins et le coefficient RC.",
      "keyRule": "Dérivateur : C devant, R en réaction ; uS = −RC·duₑ/dt — la sortie est la dérivée de l'entrée, au signe près.",
      "formulas": [
        {
          "name": "Relation du montage dérivateur",
          "formula": "u_S = -RC \\frac{du_e}{dt}",
          "note": "C en branche d'entrée, R en contre-réaction."
        },
        {
          "name": "Courant dans le condensateur",
          "formula": "i = C \\frac{du_e}{dt}",
          "note": "De q = C·ue et i = dq/dt (maille d'entrée)."
        }
      ],
      "workedExample": {
        "title": "Retrouver la relation par les mailles",
        "statement": "Établis la relation entre ue et uS pour le montage dérivateur.",
        "methodSteps": [
          "Maille d'entrée MDABM : −ue + q/C = 0 (car Ud = 0), donc q = C·ue et i = C·due/dt.",
          "L'AOP idéal ne consomme aucun courant d'entrée : le courant i traverse intégralement le résistor R.",
          "Maille de sortie : R·i + uS = 0, donc uS = −R·i = −RC·due/dt."
        ],
        "conclusion": "C'est la démonstration du §II.2 du résumé, reprise à l'exercice 5."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Reconnaître le montage dérivateur",
          "stepTheme": "Reconnaître le montage dérivateur",
          "stepBadge": "Reconnaître le montage dérivateur",
          "paragraphText": "Le montage dérivateur se reconnaît à la place des composants : le condensateur est dans la branche d'entrée.\nLe résistor occupe la branche de contre-réaction, entre la sortie et l'entrée inverseuse.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p02_q1",
            "type": "mcq",
            "prompt": "Dans un montage dérivateur à AOP, le condensateur est placé :",
            "options": [
              "Dans la branche d'entrée, le résistor étant en contre-réaction",
              "En contre-réaction, le résistor étant à l'entrée",
              "Sur l'entrée non inverseuse",
              "En parallèle de l'alimentation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le schéma du §II.1 ; échanger C et R donne le montage intégrateur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La maille d'entrée : q = C·ue",
          "stepTheme": "La maille d'entrée : q = C·ue",
          "stepBadge": "La maille d'entrée : q = C·ue",
          "paragraphText": "La loi des mailles MDABM fait apparaître la tension du condensateur uC = q/C et la tension différentielle, nulle.\nIl reste −ue + q/C = 0 : la charge du condensateur suit directement la tension d'entrée.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p02_q2",
            "type": "mcq",
            "prompt": "La maille d'entrée du dérivateur donne la relation :",
            "options": [
              "q = ue/R",
              "q = C·ue",
              "q = 0",
              "q = RC·ue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première étape de la démonstration du §II.2 : uC = ue car Ud = 0."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le courant d'entrée : i = C·due/dt",
          "stepTheme": "Le courant d'entrée : i = C·due/dt",
          "stepBadge": "Le courant d'entrée : i = C·due/dt",
          "paragraphText": "Le courant dans la branche d'entrée est celui du condensateur : i = dq/dt.\nEn dérivant q = C·ue, on obtient i = C·(due/dt) : le courant est proportionnel à la pente de la tension d'entrée.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p02_q3",
            "type": "mcq",
            "prompt": "Le courant qui traverse le condensateur d'entrée du dérivateur vaut :",
            "options": [
              "i = ue/R",
              "i = C·ue",
              "i = C·due/dt",
              "i = 0 car l'AOP est idéal"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la dérivation de q = C·ue (§II.2) ; le courant i n'est pas nul, seuls les courants d'entrée de l'AOP le sont."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La relation finale : uS = −RC·due/dt",
          "stepTheme": "La relation finale : uS = −RC·due/dt",
          "stepBadge": "La relation finale : uS = −RC·due/dt",
          "paragraphText": "La maille de sortie donne uS = −R·i, car le courant i traverse R sans entrer dans l'AOP.\nEn reportant i, on obtient uS = −RC·(due/dt) : la sortie est proportionnelle à l'opposé de la dérivée de l'entrée, ce que l'exercice 1 classe Vrai.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p02_q4",
            "type": "mcq",
            "prompt": "La tension de sortie du montage dérivateur est :",
            "options": [
              "$u_S = RC \\times u_e$",
              "$u_S = -\\frac{1}{RC} \\int u_e dt$",
              "$u_S = -du_e/dt$ sans coefficient",
              "$u_S = -RC \\times du_e/dt$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la relation encadrée du §II.2 ; la deuxième expression est celle de l'intégrateur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le rôle du signe moins",
          "stepTheme": "Le rôle du signe moins",
          "stepBadge": "Le rôle du signe moins",
          "paragraphText": "Piège : la sortie n'est pas la dérivée de l'entrée, mais son opposée, à cause du montage inverseur (entrée sur E−).\nQuand ue croît (pente positive), uS est donc négative ; quand ue décroît, uS est positive.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p02_q5",
            "type": "mcq",
            "prompt": "Quand la tension d'entrée d'un dérivateur croît linéairement (pente positive), la tension de sortie est :",
            "options": [
              "Négative et constante",
              "Positive et constante",
              "Croissante",
              "Nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "uS = −RC × (pente positive) : c'est le signe moins du montage inverseur, visible dans l'exercice 5."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Une entrée constante donne une sortie nulle",
          "stepTheme": "Une entrée constante donne une sortie nulle",
          "stepBadge": "Une entrée constante donne une sortie nulle",
          "paragraphText": "Si ue est constante, sa dérivée est nulle : la sortie du dérivateur vaut 0.\nLe dérivateur ne « voit » que les variations de la tension d'entrée, jamais son niveau.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p02_q6",
            "type": "mcq",
            "prompt": "On applique une tension d'entrée constante ue = 5 V à un montage dérivateur : sa sortie vaut :",
            "options": [
              "5 V",
              "0 V",
              "−5 V",
              "−RC × 5 V"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La dérivée d'une constante est nulle : uS = −RC × 0 = 0."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l11_montages_p02_q1",
          "type": "mcq",
          "prompt": "Dans un montage dérivateur à AOP, le condensateur est placé :",
          "options": [
            "Dans la branche d'entrée, le résistor étant en contre-réaction",
            "En contre-réaction, le résistor étant à l'entrée",
            "Sur l'entrée non inverseuse",
            "En parallèle de l'alimentation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le schéma du §II.1 ; échanger C et R donne le montage intégrateur."
        },
        {
          "id": "terminale_c_physique_l11_montages_p02_q2",
          "type": "mcq",
          "prompt": "La maille d'entrée du dérivateur donne la relation :",
          "options": [
            "q = ue/R",
            "q = C·ue",
            "q = 0",
            "q = RC·ue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première étape de la démonstration du §II.2 : uC = ue car Ud = 0."
        },
        {
          "id": "terminale_c_physique_l11_montages_p02_q3",
          "type": "mcq",
          "prompt": "Le courant qui traverse le condensateur d'entrée du dérivateur vaut :",
          "options": [
            "i = ue/R",
            "i = C·ue",
            "i = C·due/dt",
            "i = 0 car l'AOP est idéal"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la dérivation de q = C·ue (§II.2) ; le courant i n'est pas nul, seuls les courants d'entrée de l'AOP le sont."
        },
        {
          "id": "terminale_c_physique_l11_montages_p02_q4",
          "type": "mcq",
          "prompt": "La tension de sortie du montage dérivateur est :",
          "options": [
            "$u_S = RC \\times u_e$",
            "$u_S = -\\frac{1}{RC} \\int u_e dt$",
            "$u_S = -du_e/dt$ sans coefficient",
            "$u_S = -RC \\times du_e/dt$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la relation encadrée du §II.2 ; la deuxième expression est celle de l'intégrateur."
        },
        {
          "id": "terminale_c_physique_l11_montages_p02_q5",
          "type": "mcq",
          "prompt": "Quand la tension d'entrée d'un dérivateur croît linéairement (pente positive), la tension de sortie est :",
          "options": [
            "Négative et constante",
            "Positive et constante",
            "Croissante",
            "Nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "uS = −RC × (pente positive) : c'est le signe moins du montage inverseur, visible dans l'exercice 5."
        },
        {
          "id": "terminale_c_physique_l11_montages_p02_q6",
          "type": "mcq",
          "prompt": "On applique une tension d'entrée constante ue = 5 V à un montage dérivateur : sa sortie vaut :",
          "options": [
            "5 V",
            "0 V",
            "−5 V",
            "−RC × 5 V"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La dérivée d'une constante est nulle : uS = −RC × 0 = 0."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l11_montages_p03",
      "order": 3,
      "title": "Le dérivateur en pratique : du triangle aux créneaux",
      "summary": "La dérivée d'un signal triangulaire est un signal en créneaux : c'est la transformation signature du dérivateur.",
      "conceptExplanation": "Le cas pratique du résumé est net : si la tension d'entrée ue est un signal triangulaire, la tension de sortie uS est un signal carré (en créneaux).\nEn effet, un triangle est fait de rampes de pentes constantes et alternées ; sa dérivée est donc constante par morceaux, positive puis négative.\nDans l'exercice 5 (R = 2 kΩ, C = 0,5 µF, donc RC = 10⁻³ s), une entrée triangulaire de ±2 V sur des intervalles de 2 ms donne des pentes de ∓2 × 10³ V/s et une sortie en créneaux de +2 V puis −2 V.\nL'exercice 1 permet de ne pas confondre : l'affirmation « un dérivateur convertit une tension rectangulaire en tension triangulaire » est fausse — c'est le travail de l'intégrateur.",
      "keyRule": "Dérivateur : triangle → créneaux ; la valeur du créneau vaut −RC × pente de la rampe.",
      "formulas": [
        {
          "name": "Sortie sur une rampe",
          "formula": "u_S = -RC \\times \\frac{\\Delta u_e}{\\Delta t} = \\text{constante}",
          "note": "D'où des créneaux pour une entrée triangulaire."
        }
      ],
      "workedExample": {
        "title": "L'exercice 5 : les créneaux de ±2 V",
        "statement": "Un montage dérivateur (R = 2 kΩ, C = 0,5 µF) reçoit une tension triangulaire passant de +2 V à −2 V entre 0 et 2 ms, puis de −2 V à +2 V entre 2 et 4 ms. Détermine la tension de sortie sur chaque intervalle et sa nature.",
        "methodSteps": [
          "Le produit RC vaut 10⁻³ s.",
          "Premier intervalle : pente −2 × 10³ V/s, donc uS = +2 V ; second intervalle : pente +2 × 10³ V/s, donc uS = −2 V.",
          "La tension de sortie est donc une tension en créneaux (rectangulaire)."
        ],
        "conclusion": "Ce sont les résultats et la conclusion (question 5) de l'exercice 5."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Triangle en entrée, créneaux en sortie",
          "stepTheme": "Triangle en entrée, créneaux en sortie",
          "stepBadge": "Triangle en entrée, créneaux en sortie",
          "paragraphText": "Le §II.3 du résumé donne la visualisation à l'oscilloscope : entrée triangulaire, sortie carrée.\nChaque rampe du triangle correspond à un palier du créneau, de signe opposé à celui de la pente.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p03_q1",
            "type": "mcq",
            "prompt": "La tension de sortie d'un dérivateur alimenté par un signal triangulaire est :",
            "options": [
              "Triangulaire également",
              "Sinusoïdale",
              "Un signal en créneaux (carré)",
              "Constante nulle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le cas pratique du §II.3 : la dérivée de rampes alternées est un créneau."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Ne pas attribuer à l'intégrateur le travail du dérivateur",
          "stepTheme": "Ne pas attribuer à l'intégrateur le travail du dérivateur",
          "stepBadge": "Ne pas attribuer à l'intégrateur le travail du dérivateur",
          "paragraphText": "L'affirmation 6 de l'exercice 1, « un montage dérivateur convertit une tension rectangulaire en tension triangulaire », est classée Faux.\nRectangulaire → triangulaire est la signature de l'intégrateur ; le dérivateur fait l'opération inverse sur les formes d'onde.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p03_q2",
            "type": "mcq",
            "prompt": "Le montage qui convertit une tension rectangulaire en tension triangulaire est :",
            "options": [
              "Le dérivateur",
              "L'intégrateur",
              "Le comparateur",
              "Aucun des trois"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Réponse 6 (Faux) de l'exercice 1 : cette conversion appartient à l'intégrateur (§III.3)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 5 : la valeur des créneaux",
          "stepTheme": "L'exercice 5 : la valeur des créneaux",
          "stepBadge": "L'exercice 5 : la valeur des créneaux",
          "paragraphText": "Avec RC = 10⁻³ s et des pentes de ±2 × 10³ V/s, la sortie vaut exactement l'opposé de la pente multipliée par RC.\nLa solution donne uS = +2 V sur le premier intervalle, puis uS = −2 V sur le second.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p03_q3",
            "type": "mcq",
            "prompt": "Dans l'exercice 5, quand l'entrée décroît de +2 V à −2 V en 2 ms, la sortie du dérivateur vaut :",
            "options": [
              "−2 V",
              "0 V",
              "+2 V",
              "+4 V"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pente négative ⇒ sortie positive : uS = −RC × (−2 × 10³) = +2 V (solution de l'exercice 5)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La hauteur des créneaux dépend de RC et de la pente",
          "stepTheme": "La hauteur des créneaux dépend de RC et de la pente",
          "stepBadge": "La hauteur des créneaux dépend de RC et de la pente",
          "paragraphText": "Pour une même entrée triangulaire, des rampes plus rapides ou un produit RC plus grand donnent des créneaux plus hauts.\nLe produit RC, homogène à un temps, règle donc l'échelle de la dérivation réalisée par le montage.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p03_q4",
            "type": "mcq",
            "prompt": "Si on double la fréquence du signal triangulaire d'entrée (même amplitude), les créneaux de sortie du dérivateur deviennent :",
            "options": [
              "Deux fois plus hauts, car les pentes doublent",
              "Deux fois plus bas",
              "Inchangés",
              "Nuls"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À amplitude égale, doubler la fréquence double les pentes, donc double uS = −RC × pente."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Identifier le montage par les formes d'onde",
          "stepTheme": "Identifier le montage par les formes d'onde",
          "stepBadge": "Identifier le montage par les formes d'onde",
          "paragraphText": "À l'oscilloscope, la paire de formes d'onde identifie le montage : triangle → créneaux signe un dérivateur.\nDans la situation d'évaluation, c'est d'ailleurs le composant d'entrée qui tranche : C en entrée pour le montage 1, identifié comme dérivateur.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p03_q5",
            "type": "mcq",
            "prompt": "Dans la situation d'évaluation, le montage 1, dont le condensateur est en entrée, est nommé :",
            "options": [
              "Montage intégrateur",
              "Montage dérivateur",
              "Montage suiveur",
              "Comparateur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la réponse à la question 1 de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'intérêt du dérivateur",
          "stepTheme": "L'intérêt du dérivateur",
          "stepBadge": "L'intérêt du dérivateur",
          "paragraphText": "Le §IV résume l'intérêt du montage : un dérivateur permet de transformer une tension d'entrée en sa dérivée.\nOn s'en sert par exemple pour détecter des variations rapides ou transformer des formes de signaux, comme dans les circuits intégrés des TIC évoqués en situation d'apprentissage.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p03_q6",
            "type": "mcq",
            "prompt": "L'intérêt d'un montage dérivateur est de transformer une tension d'entrée en :",
            "options": [
              "Sa primitive",
              "Son double",
              "Sa dérivée",
              "Sa valeur absolue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la première phrase du §IV « Intérêt des montages »."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l11_montages_p03_q1",
          "type": "mcq",
          "prompt": "La tension de sortie d'un dérivateur alimenté par un signal triangulaire est :",
          "options": [
            "Triangulaire également",
            "Sinusoïdale",
            "Un signal en créneaux (carré)",
            "Constante nulle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le cas pratique du §II.3 : la dérivée de rampes alternées est un créneau."
        },
        {
          "id": "terminale_c_physique_l11_montages_p03_q2",
          "type": "mcq",
          "prompt": "Le montage qui convertit une tension rectangulaire en tension triangulaire est :",
          "options": [
            "Le dérivateur",
            "L'intégrateur",
            "Le comparateur",
            "Aucun des trois"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Réponse 6 (Faux) de l'exercice 1 : cette conversion appartient à l'intégrateur (§III.3)."
        },
        {
          "id": "terminale_c_physique_l11_montages_p03_q3",
          "type": "mcq",
          "prompt": "Dans l'exercice 5, quand l'entrée décroît de +2 V à −2 V en 2 ms, la sortie du dérivateur vaut :",
          "options": [
            "−2 V",
            "0 V",
            "+2 V",
            "+4 V"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pente négative ⇒ sortie positive : uS = −RC × (−2 × 10³) = +2 V (solution de l'exercice 5)."
        },
        {
          "id": "terminale_c_physique_l11_montages_p03_q4",
          "type": "mcq",
          "prompt": "Si on double la fréquence du signal triangulaire d'entrée (même amplitude), les créneaux de sortie du dérivateur deviennent :",
          "options": [
            "Deux fois plus hauts, car les pentes doublent",
            "Deux fois plus bas",
            "Inchangés",
            "Nuls"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À amplitude égale, doubler la fréquence double les pentes, donc double uS = −RC × pente."
        },
        {
          "id": "terminale_c_physique_l11_montages_p03_q5",
          "type": "mcq",
          "prompt": "Dans la situation d'évaluation, le montage 1, dont le condensateur est en entrée, est nommé :",
          "options": [
            "Montage intégrateur",
            "Montage dérivateur",
            "Montage suiveur",
            "Comparateur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la réponse à la question 1 de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l11_montages_p03_q6",
          "type": "mcq",
          "prompt": "L'intérêt d'un montage dérivateur est de transformer une tension d'entrée en :",
          "options": [
            "Sa primitive",
            "Son double",
            "Sa dérivée",
            "Sa valeur absolue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la première phrase du §IV « Intérêt des montages »."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l11_montages_p04",
      "order": 4,
      "title": "Le montage intégrateur : schéma et relation",
      "summary": "Résistor en entrée, condensateur en contre-réaction : uS = −(1/RC)∫ue dt — la sortie est une primitive de l'entrée.",
      "conceptExplanation": "Dans le montage intégrateur, les composants sont échangés par rapport au dérivateur : le résistor R est dans la branche d'entrée et le condensateur C en contre-réaction.\nLa maille d'entrée, avec Ud = 0, donne ue = R·i, donc i = ue/R.\nCe courant charge le condensateur de la contre-réaction : la maille de sortie donne uS = −q/C, et en dérivant, duS/dt = −ue/(RC).\nLa tension de sortie est donc proportionnelle à une primitive (l'opposé de l'intégrale) de la tension d'entrée : uS = −(1/RC)·∫ue dt, comme le formule la phrase reconstituée de l'exercice 2.",
      "keyRule": "Intégrateur : R devant, C en réaction ; uS = −(1/RC)∫uₑ dt — la sortie est la primitive de l'entrée, au signe près.",
      "formulas": [
        {
          "name": "Relation du montage intégrateur",
          "formula": "u_S = -\\frac{1}{RC} \\int_0^t u_e \\, dt",
          "note": "R en branche d'entrée, C en contre-réaction."
        },
        {
          "name": "Forme différentielle",
          "formula": "\\frac{du_S}{dt} = -\\frac{u_e}{RC}",
          "note": "La dérivée de la sortie est proportionnelle à l'entrée."
        }
      ],
      "workedExample": {
        "title": "La phrase de l'exercice 2, remise en ordre",
        "statement": "Recopie les groupes de mots dans l'ordre pour obtenir la phrase correcte sur le montage intégrateur.",
        "methodSteps": [
          "On assemble : « Dans un circuit intégrateur, la tension de sortie est proportionnelle… »",
          "La relation établie par les mailles précise : « …à l'opposé de l'intégrale… »",
          "La phrase se termine par : « …de la tension d'entrée. »"
        ],
        "conclusion": "C'est la phrase complète de la solution de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Reconnaître le montage intégrateur",
          "stepTheme": "Reconnaître le montage intégrateur",
          "stepBadge": "Reconnaître le montage intégrateur",
          "paragraphText": "Le montage intégrateur se reconnaît au condensateur placé en contre-réaction, entre la sortie et l'entrée inverseuse.\nLe résistor est alors dans la branche d'entrée : c'est l'exact échange du dérivateur.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p04_q1",
            "type": "mcq",
            "prompt": "Dans un montage intégrateur à AOP, le condensateur est placé :",
            "options": [
              "Dans la branche d'entrée",
              "En contre-réaction, le résistor étant à l'entrée",
              "Entre les deux alimentations",
              "Sur la sortie, en série"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le schéma du §III.1 ; dans la situation d'évaluation, c'est le montage 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La maille d'entrée : i = ue/R",
          "stepTheme": "La maille d'entrée : i = ue/R",
          "stepBadge": "La maille d'entrée : i = ue/R",
          "paragraphText": "La loi des mailles d'entrée donne −ue + R·i = 0, grâce à Ud = 0.\nLe courant d'entrée est donc simplement fixé par la tension d'entrée et le résistor : i = ue/R.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p04_q2",
            "type": "mcq",
            "prompt": "Le courant d'entrée du montage intégrateur vaut :",
            "options": [
              "i = C·due/dt",
              "i = 0",
              "i = ue/R",
              "i = R·ue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la première étape de la démonstration du §III.2, reprise à l'exercice 4."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La sortie : uS = −q/C",
          "stepTheme": "La sortie : uS = −q/C",
          "stepBadge": "La sortie : uS = −q/C",
          "paragraphText": "Le courant i, ne pouvant entrer dans l'AOP, charge le condensateur de contre-réaction.\nLa maille de sortie donne uS = −uC = −q/C : la tension de sortie reflète la charge accumulée, donc l'intégrale du courant.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p04_q3",
            "type": "mcq",
            "prompt": "Dans le montage intégrateur, la tension de sortie est liée à la charge du condensateur par :",
            "options": [
              "uS = q/C",
              "uS = R·q",
              "uS = q·C",
              "uS = −q/C"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la maille de sortie du §III.2 : le signe moins vient du montage inverseur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La relation finale : une primitive de l'entrée",
          "stepTheme": "La relation finale : une primitive de l'entrée",
          "stepBadge": "La relation finale : une primitive de l'entrée",
          "paragraphText": "En combinant i = ue/R et i = dq/dt, on obtient duS/dt = −ue/(RC).\nLe résumé conclut des deux façons : la dérivée de la sortie est proportionnelle à l'entrée, et la sortie est proportionnelle à une primitive de l'entrée.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p04_q4",
            "type": "mcq",
            "prompt": "La tension de sortie du montage intégrateur est proportionnelle à :",
            "options": [
              "Une primitive (l'opposé de l'intégrale) de la tension d'entrée",
              "La dérivée de la tension d'entrée",
              "La tension d'entrée elle-même",
              "L'inverse de la tension d'entrée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la conclusion du §III.2 et la phrase de l'exercice 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Une entrée constante donne une rampe en sortie",
          "stepTheme": "Une entrée constante donne une rampe en sortie",
          "stepBadge": "Une entrée constante donne une rampe en sortie",
          "paragraphText": "Si ue est constante, son intégrale est une fonction affine du temps : la sortie est une rampe de pente −ue/(RC).\nC'est exactement ce qui produit un triangle à partir de créneaux, dans le point suivant.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p04_q5",
            "type": "mcq",
            "prompt": "On applique une tension constante positive à un intégrateur : sa sortie est :",
            "options": [
              "Constante positive",
              "Une rampe décroissante (pente −ue/(RC))",
              "Nulle",
              "Un créneau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'intégrale d'une constante est affine ; le signe moins du montage inverseur rend la rampe décroissante."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Sortie proportionnelle à la primitive, pas à la dérivée",
          "stepTheme": "Sortie proportionnelle à la primitive, pas à la dérivée",
          "stepBadge": "Sortie proportionnelle à la primitive, pas à la dérivée",
          "paragraphText": "L'exercice 3 fixe le vocabulaire : pour un dérivateur, la sortie est proportionnelle à la dérivée de l'entrée.\nPour un intégrateur, elle est proportionnelle à la primitive de l'entrée : les deux mots ne doivent pas être échangés.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p04_q6",
            "type": "mcq",
            "prompt": "Complète : dans un circuit intégrateur, la tension de sortie est proportionnelle à la … de la tension d'entrée.",
            "options": [
              "Dérivée",
              "Valeur moyenne nulle",
              "Primitive",
              "Fréquence"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le mot attendu à la phrase 3 de l'exercice 3 (la phrase 2, pour le dérivateur, attend « dérivée »)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l11_montages_p04_q1",
          "type": "mcq",
          "prompt": "Dans un montage intégrateur à AOP, le condensateur est placé :",
          "options": [
            "Dans la branche d'entrée",
            "En contre-réaction, le résistor étant à l'entrée",
            "Entre les deux alimentations",
            "Sur la sortie, en série"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le schéma du §III.1 ; dans la situation d'évaluation, c'est le montage 2."
        },
        {
          "id": "terminale_c_physique_l11_montages_p04_q2",
          "type": "mcq",
          "prompt": "Le courant d'entrée du montage intégrateur vaut :",
          "options": [
            "i = C·due/dt",
            "i = 0",
            "i = ue/R",
            "i = R·ue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la première étape de la démonstration du §III.2, reprise à l'exercice 4."
        },
        {
          "id": "terminale_c_physique_l11_montages_p04_q3",
          "type": "mcq",
          "prompt": "Dans le montage intégrateur, la tension de sortie est liée à la charge du condensateur par :",
          "options": [
            "uS = q/C",
            "uS = R·q",
            "uS = q·C",
            "uS = −q/C"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la maille de sortie du §III.2 : le signe moins vient du montage inverseur."
        },
        {
          "id": "terminale_c_physique_l11_montages_p04_q4",
          "type": "mcq",
          "prompt": "La tension de sortie du montage intégrateur est proportionnelle à :",
          "options": [
            "Une primitive (l'opposé de l'intégrale) de la tension d'entrée",
            "La dérivée de la tension d'entrée",
            "La tension d'entrée elle-même",
            "L'inverse de la tension d'entrée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la conclusion du §III.2 et la phrase de l'exercice 2."
        },
        {
          "id": "terminale_c_physique_l11_montages_p04_q5",
          "type": "mcq",
          "prompt": "On applique une tension constante positive à un intégrateur : sa sortie est :",
          "options": [
            "Constante positive",
            "Une rampe décroissante (pente −ue/(RC))",
            "Nulle",
            "Un créneau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'intégrale d'une constante est affine ; le signe moins du montage inverseur rend la rampe décroissante."
        },
        {
          "id": "terminale_c_physique_l11_montages_p04_q6",
          "type": "mcq",
          "prompt": "Complète : dans un circuit intégrateur, la tension de sortie est proportionnelle à la … de la tension d'entrée.",
          "options": [
            "Dérivée",
            "Valeur moyenne nulle",
            "Primitive",
            "Fréquence"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le mot attendu à la phrase 3 de l'exercice 3 (la phrase 2, pour le dérivateur, attend « dérivée »)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l11_montages_p05",
      "order": 5,
      "title": "L'intégrateur en pratique : des créneaux au triangle",
      "summary": "L'intégrale d'un signal rectangulaire est un signal triangulaire ; l'exercice 4 en tire même la valeur d'une capacité inconnue.",
      "conceptExplanation": "Le cas pratique du résumé : la réponse d'un intégrateur à une tension d'entrée rectangulaire est une tension de sortie triangulaire.\nChaque palier de l'entrée produit une rampe de sortie, de pente −ue/(RC), alternativement croissante et décroissante.\nDans l'exercice 4, on reconnaît le montage intégrateur à cette transformation (créneaux → triangle) ; avec R = 5 kΩ, une entrée de −0,1 V et une pente de sortie de 400 V/s, la capacité inconnue vaut C = 5 × 10⁻⁸ F.\nDans la situation d'évaluation (R = 20 kΩ, C = 50 nF, RC = 10⁻³ s), le signal a une période T = 2 ms, soit une fréquence N = 500 Hz, et l'intégrateur produit des rampes de pente ±2000 V/s pour une entrée en créneaux de ±2 V.",
      "keyRule": "Intégrateur : créneaux → triangle ; pente de la rampe = −uₑ/(RC), d'où un moyen de mesurer C.",
      "formulas": [
        {
          "name": "Pente de la sortie de l'intégrateur",
          "formula": "\\frac{du_S}{dt} = -\\frac{u_e}{RC}",
          "note": "Pour ue constante par paliers : rampes alternées, donc un triangle."
        }
      ],
      "workedExample": {
        "title": "L'exercice 4 : déterminer une capacité inconnue",
        "statement": "Un montage inconnu transforme des créneaux en triangles (R = 5 kΩ). Sur un intervalle, ue = −0,1 V et la pente de uS vaut 400 V/s. Détermine la capacité C du condensateur.",
        "methodSteps": [
          "La transformation créneaux → triangle identifie un montage intégrateur.",
          "La relation s'inverse en ue = −RC·(duS/dt) : on en tire C = 0,1/(400 × R).",
          "La solution obtient C = 5 × 10⁻⁸ F."
        ],
        "conclusion": "Ce sont l'identification (question 1) et le résultat (question 4) de l'exercice 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Créneaux en entrée, triangle en sortie",
          "stepTheme": "Créneaux en entrée, triangle en sortie",
          "stepBadge": "Créneaux en entrée, triangle en sortie",
          "paragraphText": "Le §III.3 du résumé donne la visualisation : entrée rectangulaire, sortie triangulaire.\nC'est la transformation utilisée pour identifier le montage dans l'exercice 4.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p05_q1",
            "type": "mcq",
            "prompt": "La tension de sortie d'un intégrateur alimenté par un signal rectangulaire est :",
            "options": [
              "Rectangulaire également",
              "Triangulaire",
              "Sinusoïdale",
              "Constante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le cas pratique du §III.3 : l'intégrale de paliers alternés forme un triangle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 4 : reconnaître l'intégrateur aux oscillogrammes",
          "stepTheme": "L'exercice 4 : reconnaître l'intégrateur aux oscillogrammes",
          "stepBadge": "L'exercice 4 : reconnaître l'intégrateur aux oscillogrammes",
          "paragraphText": "L'énoncé de l'exercice 4 montre des créneaux en entrée et des triangles en sortie sur l'oscillographe bicourbe.\nLa solution nomme immédiatement le montage : c'est un intégrateur, avant même tout calcul.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p05_q2",
            "type": "mcq",
            "prompt": "Un montage transforme des signaux en créneaux en signaux triangulaires : c'est un montage :",
            "options": [
              "Dérivateur",
              "Comparateur",
              "Intégrateur",
              "Amplificateur simple"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la réponse à la question 1 de l'exercice 4."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La capacité de l'exercice 4 : 5 × 10⁻⁸ F",
          "stepTheme": "La capacité de l'exercice 4 : 5 × 10⁻⁸ F",
          "stepBadge": "La capacité de l'exercice 4 : 5 × 10⁻⁸ F",
          "paragraphText": "En inversant la relation de l'intégrateur avec la pente mesurée de uS (400 V/s) et ue = −0,1 V, on isole C.\nLa solution obtient C = 5 × 10⁻⁸ F pour R = 5 kΩ.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p05_q3",
            "type": "mcq",
            "prompt": "La capacité déterminée dans l'exercice 4 (R = 5 kΩ) vaut :",
            "options": [
              "5 × 10⁻⁸ F",
              "5 × 10⁻⁶ F",
              "50 µF",
              "5 × 10⁻³ F"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C = 0,1/(400 × 5000) : c'est le résultat de la question 4 de l'exercice 4."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La situation : T = 2 ms et N = 500 Hz",
          "stepTheme": "La situation : T = 2 ms et N = 500 Hz",
          "stepBadge": "La situation : T = 2 ms et N = 500 Hz",
          "paragraphText": "Les signaux de la situation d'évaluation se répètent toutes les 2 ms : la période vaut T = 2 ms.\nLa fréquence du signal est donc N = 1/T = 500 Hz.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p05_q4",
            "type": "mcq",
            "prompt": "La période et la fréquence du signal de la situation d'évaluation valent :",
            "options": [
              "T = 2 s et N = 0,5 Hz",
              "T = 2 ms et N = 500 Hz",
              "T = 0,5 ms et N = 2000 Hz",
              "T = 2 ms et N = 50 Hz"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les réponses aux questions 2.1 et 2.2 de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les rampes de la situation : 2000 V/s",
          "stepTheme": "Les rampes de la situation : 2000 V/s",
          "stepBadge": "Les rampes de la situation : 2000 V/s",
          "paragraphText": "Pour le montage intégrateur de la situation (RC = 10⁻³ s), une entrée en créneaux de ±2 V produit des rampes de pente ±2000 V/s.\nLa solution écrit uS = 2000·t sur le premier intervalle (entrée à −2 V), puis uS = −2000·t sur le suivant.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p05_q5",
            "type": "mcq",
            "prompt": "Pour une entrée de −2 V, la pente de la sortie de l'intégrateur de la situation (RC = 10⁻³ s) vaut :",
            "options": [
              "−2000 V/s",
              "0 V/s",
              "+2000 V/s",
              "+2 V/s"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pente = −ue/(RC) = +2000 V/s : la solution écrit uS = 2000t sur cet intervalle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Attention à la saturation de l'AOP",
          "stepTheme": "Attention à la saturation de l'AOP",
          "stepBadge": "Attention à la saturation de l'AOP",
          "paragraphText": "Piège pratique : la rampe de sortie d'un intégrateur alimenté en continu croît indéfiniment en théorie.\nEn réalité, elle se bloque à la tension de saturation ±Vsat : le régime linéaire, donc la relation d'intégration, cesse alors d'être valable.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p05_q6",
            "type": "mcq",
            "prompt": "Si la rampe de sortie d'un intégrateur atteint la tension de saturation de l'AOP :",
            "options": [
              "L'intégration continue indéfiniment",
              "La sortie continue de croître lentement",
              "Le montage passe en régime permanent",
              "La sortie se bloque à ±Vsat et la relation d'intégration n'est plus valable"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la limite imposée par la propriété US < Vsat du régime linéaire (§I.2)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l11_montages_p05_q1",
          "type": "mcq",
          "prompt": "La tension de sortie d'un intégrateur alimenté par un signal rectangulaire est :",
          "options": [
            "Rectangulaire également",
            "Triangulaire",
            "Sinusoïdale",
            "Constante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le cas pratique du §III.3 : l'intégrale de paliers alternés forme un triangle."
        },
        {
          "id": "terminale_c_physique_l11_montages_p05_q2",
          "type": "mcq",
          "prompt": "Un montage transforme des signaux en créneaux en signaux triangulaires : c'est un montage :",
          "options": [
            "Dérivateur",
            "Comparateur",
            "Intégrateur",
            "Amplificateur simple"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la réponse à la question 1 de l'exercice 4."
        },
        {
          "id": "terminale_c_physique_l11_montages_p05_q3",
          "type": "mcq",
          "prompt": "La capacité déterminée dans l'exercice 4 (R = 5 kΩ) vaut :",
          "options": [
            "5 × 10⁻⁸ F",
            "5 × 10⁻⁶ F",
            "50 µF",
            "5 × 10⁻³ F"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C = 0,1/(400 × 5000) : c'est le résultat de la question 4 de l'exercice 4."
        },
        {
          "id": "terminale_c_physique_l11_montages_p05_q4",
          "type": "mcq",
          "prompt": "La période et la fréquence du signal de la situation d'évaluation valent :",
          "options": [
            "T = 2 s et N = 0,5 Hz",
            "T = 2 ms et N = 500 Hz",
            "T = 0,5 ms et N = 2000 Hz",
            "T = 2 ms et N = 50 Hz"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les réponses aux questions 2.1 et 2.2 de la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l11_montages_p05_q5",
          "type": "mcq",
          "prompt": "Pour une entrée de −2 V, la pente de la sortie de l'intégrateur de la situation (RC = 10⁻³ s) vaut :",
          "options": [
            "−2000 V/s",
            "0 V/s",
            "+2000 V/s",
            "+2 V/s"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pente = −ue/(RC) = +2000 V/s : la solution écrit uS = 2000t sur cet intervalle."
        },
        {
          "id": "terminale_c_physique_l11_montages_p05_q6",
          "type": "mcq",
          "prompt": "Si la rampe de sortie d'un intégrateur atteint la tension de saturation de l'AOP :",
          "options": [
            "L'intégration continue indéfiniment",
            "La sortie continue de croître lentement",
            "Le montage passe en régime permanent",
            "La sortie se bloque à ±Vsat et la relation d'intégration n'est plus valable"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la limite imposée par la propriété US < Vsat du régime linéaire (§I.2)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l11_montages_p06",
      "order": 6,
      "title": "Comparer les deux montages et choisir",
      "summary": "Même AOP, composants échangés : le dérivateur répond aux variations rapides, l'intégrateur lisse et accumule ; les deux réalisent des opérations mathématiques sur les signaux.",
      "conceptExplanation": "Les deux montages partagent la même structure : un AOP idéal en régime linéaire, un résistor et un condensateur, l'entrée sur E− et E+ à la masse.\nTout tient à la place des composants : C en entrée et R en réaction donnent le dérivateur ; R en entrée et C en réaction donnent l'intégrateur.\nLeurs transformations de formes d'onde sont inverses : triangle → créneaux pour le dérivateur, créneaux → triangle pour l'intégrateur, et l'affirmation 7 de l'exercice 1 (l'intégrateur convertirait un triangle en créneaux) est fausse.\nLe résumé conclut sur l'intérêt des montages : le dérivateur transforme une tension en sa dérivée, l'intégrateur en sa primitive — des opérations réalisées par les circuits intégrés au cœur des TIC.",
      "keyRule": "C devant = dérivateur ; C en réaction = intégrateur. Formes : triangle→carré (dérivation), carré→triangle (intégration).",
      "formulas": [
        {
          "name": "Les deux relations côte à côte",
          "formula": "\\text{Dérivateur : } u_S = -RC \\frac{du_e}{dt} \\quad ; \\quad \\text{Intégrateur : } u_S = -\\frac{1}{RC} \\int u_e dt",
          "note": "Même coefficient RC, opérations inverses."
        }
      ],
      "workedExample": {
        "title": "Vrai ou faux ? (exercice 1, items 5, 6 et 7)",
        "statement": "« Dans un circuit dérivateur, la sortie est proportionnelle à l'opposé de la dérivée de l'entrée » ; « un dérivateur convertit un rectangulaire en triangulaire » ; « un intégrateur convertit un triangulaire en créneaux » : vrai ou faux ?",
        "methodSteps": [
          "La première affirmation est la relation même du dérivateur : vraie.",
          "Rectangulaire → triangulaire est la conversion de l'intégrateur, pas du dérivateur : fausse.",
          "Triangulaire → créneaux est la conversion du dérivateur, pas de l'intégrateur : fausse."
        ],
        "conclusion": "Ce sont les réponses 5 (Vrai), 6 (Faux) et 7 (Faux) de l'exercice 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "La place des composants décide de l'opération",
          "stepTheme": "La place des composants décide de l'opération",
          "stepBadge": "La place des composants décide de l'opération",
          "paragraphText": "Sur un schéma, inutile de refaire les calculs pour nommer le montage : regarde la branche d'entrée.\nCondensateur en entrée : dérivateur ; résistor en entrée (et condensateur en réaction) : intégrateur.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p06_q1",
            "type": "mcq",
            "prompt": "Un montage à AOP a un résistor en entrée et un condensateur en contre-réaction : c'est un :",
            "options": [
              "Intégrateur",
              "Dérivateur",
              "Comparateur",
              "Suiveur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le critère visuel utilisé dans la situation d'évaluation et l'exercice 4."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des opérations inverses sur les formes d'onde",
          "stepTheme": "Des opérations inverses sur les formes d'onde",
          "stepBadge": "Des opérations inverses sur les formes d'onde",
          "paragraphText": "Le dérivateur transforme un triangle en créneaux ; l'intégrateur transforme des créneaux en triangle.\nEnchaîner les deux montages redonnerait donc (au signe et à l'échelle près) le signal de départ.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p06_q2",
            "type": "mcq",
            "prompt": "Les transformations triangle → créneaux et créneaux → triangle sont réalisées respectivement par :",
            "options": [
              "L'intégrateur puis le dérivateur",
              "Le dérivateur puis l'intégrateur",
              "Deux dérivateurs",
              "Deux intégrateurs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les cas pratiques des §II.3 et III.3 ; l'affirmation inverse de l'exercice 1 (item 7) est fausse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le même coefficient RC, deux rôles opposés",
          "stepTheme": "Le même coefficient RC, deux rôles opposés",
          "stepBadge": "Le même coefficient RC, deux rôles opposés",
          "paragraphText": "Dans le dérivateur, RC multiplie la dérivée ; dans l'intégrateur, il divise l'intégrale.\nAugmenter RC amplifie donc la sortie du dérivateur mais réduit les pentes de sortie de l'intégrateur.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p06_q3",
            "type": "mcq",
            "prompt": "Si on augmente le produit RC, la sortie du dérivateur (à entrée égale) devient plus grande, tandis que les rampes de l'intégrateur deviennent :",
            "options": [
              "Plus raides",
              "Inchangées",
              "Plus douces (pente réduite)",
              "Des créneaux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "uS dérivateur est en RC × pente ; la pente de l'intégrateur est en ue/(RC) : effets opposés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'intérêt des deux montages (§IV)",
          "stepTheme": "L'intérêt des deux montages (§IV)",
          "stepBadge": "L'intérêt des deux montages (§IV)",
          "paragraphText": "Le résumé conclut : un montage dérivateur permet de transformer une tension d'entrée en sa dérivée.\nUn montage intégrateur permet de transformer une tension d'entrée en sa primitive : ce sont des calculateurs analogiques élémentaires.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p06_q4",
            "type": "mcq",
            "prompt": "D'après le §IV du résumé, un montage intégrateur permet de transformer une tension d'entrée en :",
            "options": [
              "Sa dérivée",
              "Son carré",
              "Son inverse",
              "Sa primitive"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la seconde phrase du §IV « Intérêt des montages »."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les deux montages exigent le régime linéaire",
          "stepTheme": "Les deux montages exigent le régime linéaire",
          "stepBadge": "Les deux montages exigent le régime linéaire",
          "paragraphText": "Toutes les démonstrations supposent Ud = 0 et i− = i+ = 0, c'est-à-dire un AOP idéal en régime linéaire.\nSi le signal d'entrée est trop ample et fait saturer l'AOP, les relations de dérivation et d'intégration ne sont plus vérifiées.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p06_q5",
            "type": "mcq",
            "prompt": "Les relations uS = −RC·due/dt et uS = −(1/RC)∫ue dt supposent que l'AOP fonctionne :",
            "options": [
              "En régime linéaire (idéal : Ud ≈ 0, courants d'entrée nuls)",
              "En régime saturé",
              "Sans alimentation",
              "En comparateur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'hypothèse de toutes les lois des mailles du résumé (§I.2)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le lien avec les circuits intégrés des TIC",
          "stepTheme": "Le lien avec les circuits intégrés des TIC",
          "stepBadge": "Le lien avec les circuits intégrés des TIC",
          "paragraphText": "La situation d'apprentissage rappelle que des circuits intégrés réalisent toutes sortes d'opérations, en particulier des dérivations et des intégrations.\nLes deux montages de la leçon sont les briques élémentaires de ce calcul analogique sur les signaux.",
          "exercise": {
            "id": "terminale_c_physique_l11_montages_p06_q6",
            "type": "mcq",
            "prompt": "Les montages dérivateur et intégrateur illustrent le rôle des circuits intégrés, qui réalisent sur les signaux :",
            "options": [
              "Uniquement des amplifications",
              "Des opérations mathématiques comme la dérivation et l'intégration",
              "Des conversions de devises",
              "Des mesures de température uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le cadre donné par la situation d'apprentissage (conférence sur les TIC)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l11_montages_p06_q1",
          "type": "mcq",
          "prompt": "Un montage à AOP a un résistor en entrée et un condensateur en contre-réaction : c'est un :",
          "options": [
            "Intégrateur",
            "Dérivateur",
            "Comparateur",
            "Suiveur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le critère visuel utilisé dans la situation d'évaluation et l'exercice 4."
        },
        {
          "id": "terminale_c_physique_l11_montages_p06_q2",
          "type": "mcq",
          "prompt": "Les transformations triangle → créneaux et créneaux → triangle sont réalisées respectivement par :",
          "options": [
            "L'intégrateur puis le dérivateur",
            "Le dérivateur puis l'intégrateur",
            "Deux dérivateurs",
            "Deux intégrateurs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les cas pratiques des §II.3 et III.3 ; l'affirmation inverse de l'exercice 1 (item 7) est fausse."
        },
        {
          "id": "terminale_c_physique_l11_montages_p06_q3",
          "type": "mcq",
          "prompt": "Si on augmente le produit RC, la sortie du dérivateur (à entrée égale) devient plus grande, tandis que les rampes de l'intégrateur deviennent :",
          "options": [
            "Plus raides",
            "Inchangées",
            "Plus douces (pente réduite)",
            "Des créneaux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "uS dérivateur est en RC × pente ; la pente de l'intégrateur est en ue/(RC) : effets opposés."
        },
        {
          "id": "terminale_c_physique_l11_montages_p06_q4",
          "type": "mcq",
          "prompt": "D'après le §IV du résumé, un montage intégrateur permet de transformer une tension d'entrée en :",
          "options": [
            "Sa dérivée",
            "Son carré",
            "Son inverse",
            "Sa primitive"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la seconde phrase du §IV « Intérêt des montages »."
        },
        {
          "id": "terminale_c_physique_l11_montages_p06_q5",
          "type": "mcq",
          "prompt": "Les relations uS = −RC·due/dt et uS = −(1/RC)∫ue dt supposent que l'AOP fonctionne :",
          "options": [
            "En régime linéaire (idéal : Ud ≈ 0, courants d'entrée nuls)",
            "En régime saturé",
            "Sans alimentation",
            "En comparateur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'hypothèse de toutes les lois des mailles du résumé (§I.2)."
        },
        {
          "id": "terminale_c_physique_l11_montages_p06_q6",
          "type": "mcq",
          "prompt": "Les montages dérivateur et intégrateur illustrent le rôle des circuits intégrés, qui réalisent sur les signaux :",
          "options": [
            "Uniquement des amplifications",
            "Des opérations mathématiques comme la dérivation et l'intégration",
            "Des conversions de devises",
            "Des mesures de température uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le cadre donné par la situation d'apprentissage (conférence sur les TIC)."
        }
      ]
    }
  ]
};
