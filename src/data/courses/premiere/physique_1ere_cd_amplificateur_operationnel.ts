import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « L'amplificateur opérationnel » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « L'amplificateur opérationnel » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const PHYSIQUE_1ERE_CD_L12_AMPLIFICATEUR_OPERATIONNEL: CurriculumChapter = {
  "id": "premiere_c_physique_l12_amplificateur_operationnel",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 12,
  "title": "Leçon 12 : L'amplificateur opérationnel",
  "summary": "La leçon décrit l'amplificateur opérationnel et ses huit bornes, sa caractéristique à deux régimes (linéaire et saturé), les propriétés de l'AO idéal en régime linéaire, puis les montages suiveur, inverseur, non inverseur, sommateur et comparateur.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « L'amplificateur opérationnel » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_physique_l12_amplificateur_operationnel_p01",
      "order": 1,
      "title": "Description de l'amplificateur opérationnel",
      "summary": "L'AO est un circuit intégré linéaire en boîtier à huit bornes : entrées inverseuse et non inverseuse, alimentation, sortie et réglage d'offset.",
      "conceptExplanation": "L'amplificateur opérationnel (AO) fait partie des circuits intégrés linéaires ; il permet de réaliser des opérations mathématiques : addition, soustraction, intégration, dérivation.\nIl se présente sous la forme d'un boîtier possédant huit (8) bornes de branchement, repérées grâce à une encoche sur le boîtier.\nLa borne 2 est l'entrée inverseuse (E-) et la borne 3 l'entrée non inverseuse (E+) ; les bornes 4 et 7 sont les bornes d'alimentation (négative A- et positive A+) ; la borne 6 est la borne de sortie (S).\nLes bornes 1 et 5 sont les bornes de réglage d'offset, et la borne 8 n'est pas connectée (NC : Non Connectée).",
      "keyRule": "Retiens les bornes utiles : 2 = E-, 3 = E+, 6 = sortie, 4 et 7 = alimentations.",
      "formulas": [],
      "workedExample": {
        "title": "Le texte complété de l'exercice 2",
        "statement": "Complète : « L'amplificateur opérationnel fait partie de la famille des ……… ; il se présente sous la forme d'un ……… possédant ……… de branchement. Si la tension différentielle est nulle, il fonctionne en ……… ; sinon, il fonctionne en ……… ».",
        "methodSteps": [
          "Famille de l'AO : les circuits intégrés ; présentation : un boîtier à huit bornes de branchement.",
          "Les courants entrant par ses deux bornes d'entrées sont extrêmement faibles.",
          "Tension différentielle nulle : régime linéaire ; tension différentielle non nulle : régime saturé."
        ],
        "conclusion": "C'est le texte complété et corrigé de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un circuit intégré linéaire",
          "stepTheme": "Un circuit intégré linéaire",
          "stepBadge": "Un circuit intégré linéaire",
          "paragraphText": "• Amplificateur opérationnel (AO) : composant de la famille des circuits intégrés linéaires.\nLa situation d'apprentissage rappelle son rôle : réaliser des opérations mathématiques comme l'addition, la soustraction, l'intégration et la dérivation.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p01_q1",
            "type": "mcq",
            "prompt": "L'amplificateur opérationnel fait partie de la famille :",
            "options": [
              "Des circuits intégrés linéaires",
              "Des résistances variables",
              "Des moteurs électriques",
              "Des piles électrochimiques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la première phrase du §1.1 et du texte de l'exercice 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un boîtier à huit bornes repérées par une encoche",
          "stepTheme": "Un boîtier à huit bornes repérées par une encoche",
          "stepBadge": "Un boîtier à huit bornes repérées par une encoche",
          "paragraphText": "L'AO se présente sous la forme d'un boîtier possédant huit bornes de branchement.\nSur le boîtier figure un repère (une encoche) qui permet de reconnaître chacune des huit bornes et de les numéroter de façon standard.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p01_q2",
            "type": "mcq",
            "prompt": "Le boîtier d'un amplificateur opérationnel possède :",
            "options": [
              "Quatre bornes",
              "Huit bornes de branchement",
              "Deux bornes seulement",
              "Douze bornes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le §1.1 : huit bornes, numérotées à partir de l'encoche du boîtier."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les deux entrées : E- (borne 2) et E+ (borne 3)",
          "stepTheme": "Les deux entrées : E- (borne 2) et E+ (borne 3)",
          "stepBadge": "Les deux entrées : E- (borne 2) et E+ (borne 3)",
          "paragraphText": "• Entrée inverseuse (E-) : borne 2 du boîtier.\n• Entrée non inverseuse (E+) : borne 3 du boîtier.\nCe sont les deux bornes où l'on applique les tensions à traiter ; leurs potentiels sont notés $U_-$ et $U_+$.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p01_q3",
            "type": "mcq",
            "prompt": "Les bornes 2 et 3 d'un AO sont respectivement :",
            "options": [
              "La sortie et l'alimentation positive",
              "L'alimentation négative et la sortie",
              "L'entrée inverseuse (E-) et l'entrée non inverseuse (E+)",
              "Les deux bornes de réglage d'offset"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la liste du §1.1 : borne 2 = E-, borne 3 = E+."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Alimentation (4 et 7) et sortie (borne 6)",
          "stepTheme": "Alimentation (4 et 7) et sortie (borne 6)",
          "stepBadge": "Alimentation (4 et 7) et sortie (borne 6)",
          "paragraphText": "Les bornes 4 et 7 sont les bornes d'alimentation : négative (A-) et positive (A+), qui reçoivent les tensions $-V_{cc}$ et $+V_{cc}$.\nLa borne 6 est la borne de sortie (S), où l'on recueille la tension de sortie $U_s$.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p01_q4",
            "type": "mcq",
            "prompt": "La borne de sortie (S) d'un AO est la borne :",
            "options": [
              "2",
              "3",
              "7",
              "6"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le §1.1 : sortie en borne 6 ; les bornes 4 et 7 servent à l'alimentation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Offset (bornes 1 et 5) et borne 8 non connectée",
          "stepTheme": "Offset (bornes 1 et 5) et borne 8 non connectée",
          "stepBadge": "Offset (bornes 1 et 5) et borne 8 non connectée",
          "paragraphText": "Les bornes 1 et 5 sont les bornes de réglage d'offset.\nLa borne 8, elle, n'est pas connectée : le document la note NC, pour Non Connectée ; elle ne joue aucun rôle dans les montages de la leçon.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p01_q5",
            "type": "mcq",
            "prompt": "La borne 8 d'un AO est :",
            "options": [
              "Non connectée (NC)",
              "La sortie",
              "L'entrée inverseuse",
              "L'alimentation positive"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le dernier point de la liste du §1.1 ; les bornes 1 et 5 servent au réglage d'offset."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre entrées et alimentation",
          "stepTheme": "Ne pas confondre entrées et alimentation",
          "stepBadge": "Ne pas confondre entrées et alimentation",
          "paragraphText": "Piège : les tensions d'alimentation ($-V_{cc}$ et $+V_{cc}$, bornes 4 et 7) ne sont pas les tensions d'entrée du signal.\nLe signal entre par E- (borne 2) ou E+ (borne 3) et ressort par S (borne 6) : mélanger ces rôles fausse tout le montage.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p01_q6",
            "type": "mcq",
            "prompt": "Dans un montage à AO, la tension à amplifier est appliquée :",
            "options": [
              "Aux bornes d'alimentation 4 et 7",
              "À l'entrée inverseuse (borne 2) ou non inverseuse (borne 3)",
              "À la borne 8 non connectée",
              "Aux bornes de réglage d'offset"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les entrées du signal sont E- et E+ (§1.1) ; l'alimentation ne fait que fournir l'énergie au composant."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p01_q1",
          "type": "mcq",
          "prompt": "L'amplificateur opérationnel fait partie de la famille :",
          "options": [
            "Des circuits intégrés linéaires",
            "Des résistances variables",
            "Des moteurs électriques",
            "Des piles électrochimiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la première phrase du §1.1 et du texte de l'exercice 2."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p01_q2",
          "type": "mcq",
          "prompt": "Le boîtier d'un amplificateur opérationnel possède :",
          "options": [
            "Quatre bornes",
            "Huit bornes de branchement",
            "Deux bornes seulement",
            "Douze bornes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le §1.1 : huit bornes, numérotées à partir de l'encoche du boîtier."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p01_q3",
          "type": "mcq",
          "prompt": "Les bornes 2 et 3 d'un AO sont respectivement :",
          "options": [
            "La sortie et l'alimentation positive",
            "L'alimentation négative et la sortie",
            "L'entrée inverseuse (E-) et l'entrée non inverseuse (E+)",
            "Les deux bornes de réglage d'offset"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la liste du §1.1 : borne 2 = E-, borne 3 = E+."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p01_q4",
          "type": "mcq",
          "prompt": "La borne de sortie (S) d'un AO est la borne :",
          "options": [
            "2",
            "3",
            "7",
            "6"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le §1.1 : sortie en borne 6 ; les bornes 4 et 7 servent à l'alimentation."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p01_q5",
          "type": "mcq",
          "prompt": "La borne 8 d'un AO est :",
          "options": [
            "Non connectée (NC)",
            "La sortie",
            "L'entrée inverseuse",
            "L'alimentation positive"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le dernier point de la liste du §1.1 ; les bornes 1 et 5 servent au réglage d'offset."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p01_q6",
          "type": "mcq",
          "prompt": "Dans un montage à AO, la tension à amplifier est appliquée :",
          "options": [
            "Aux bornes d'alimentation 4 et 7",
            "À l'entrée inverseuse (borne 2) ou non inverseuse (borne 3)",
            "À la borne 8 non connectée",
            "Aux bornes de réglage d'offset"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les entrées du signal sont E- et E+ (§1.1) ; l'alimentation ne fait que fournir l'énergie au composant."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l12_amplificateur_operationnel_p02",
      "order": 2,
      "title": "La caractéristique Us = f(Ud) : régimes linéaire et saturé",
      "summary": "La caractéristique relie la tension de sortie à la tension différentielle : proportionnalité de gain G en régime linéaire, plateau à ±Vsat en régime saturé.",
      "conceptExplanation": "La courbe $U_s = f(U_d)$ représente la caractéristique d'un AO, où $U_d = V_+ - V_-$ est la tension différentielle entre les deux entrées.\nEn régime linéaire, qui correspond à la partie centrale de la caractéristique, la tension de sortie est proportionnelle à la tension différentielle : $U_s = G \\times U_d$, où le coefficient $G$ est le gain différentiel, très grand.\nEn régime saturé, la tension de sortie est bloquée à $+V_{sat}$ ou $-V_{sat}$ ; les tensions de saturation vérifient toujours $\\lvert V_{sat} \\rvert < \\lvert V_{cc} \\rvert$, où $\\pm V_{cc}$ sont les tensions d'alimentation.\nPour un AO idéal (parfait), le gain est infini : la partie linéaire de la caractéristique est alors verticale.",
      "keyRule": "Linéaire : $U_s = G \\times U_d$ avec G très grand (infini pour l'AO idéal) ; saturé : $U_s = \\pm V_{sat}$, toujours en dessous de l'alimentation.",
      "formulas": [
        {
          "name": "Tension différentielle",
          "formula": "U_d = V_+ - V_-",
          "note": "Différence des potentiels des entrées E+ et E-."
        },
        {
          "name": "Régime linéaire",
          "formula": "U_s = G \\times U_d",
          "note": "G : gain différentiel, très grand ; infini pour l'AO idéal."
        }
      ],
      "workedExample": {
        "title": "Vrai ou faux sur la caractéristique (exercice 1)",
        "statement": "Juge les propositions : (a) en régime linéaire, la tension différentielle est différente de zéro pour un AO réel ; (b) en régime de saturation, $U_s = \\pm V_{sat}$ ; (c) en régime linéaire, $U_s > V_{sat}$.",
        "methodSteps": [
          "(a) Pour l'exercice 1, la proposition « en fonctionnement linéaire la tension différentielle est différente de zéro » est jugée fausse dans le cadre de l'AO idéal étudié ensuite : en linéaire idéal, $U_d = 0$.",
          "(b) Vrai : c'est la définition du régime saturé, proposition 5 de l'exercice 1.",
          "(c) Faux : en régime linéaire, la tension de sortie reste toujours inférieure à la tension de saturation."
        ],
        "conclusion": "Ce sont les réponses 3, 5 et 7 du corrigé de l'exercice 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La tension différentielle Ud = V+ − V-",
          "stepTheme": "La tension différentielle Ud = V+ − V-",
          "stepBadge": "La tension différentielle Ud = V+ − V-",
          "paragraphText": "• Tension différentielle : $U_d = V_+ - V_-$, différence entre les potentiels des entrées non inverseuse et inverseuse.\nLa caractéristique de l'AO est la courbe $U_s = f(U_d)$ : toute l'étude des régimes part de cette grandeur.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p02_q1",
            "type": "mcq",
            "prompt": "La tension différentielle d'un AO est définie par :",
            "options": [
              "$U_d = V_+ - V_-$",
              "$U_d = V_+ + V_-$",
              "$U_d = U_s - U_e$",
              "$U_d = V_{cc} - V_{sat}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §2 : $U_d$ compare les deux entrées E+ et E-."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le régime linéaire : Us proportionnelle à Ud",
          "stepTheme": "Le régime linéaire : Us proportionnelle à Ud",
          "stepBadge": "Le régime linéaire : Us proportionnelle à Ud",
          "paragraphText": "Le régime linéaire correspond à la partie centrale de la caractéristique.\nLa tension de sortie y est proportionnelle à la tension différentielle : $U_s = G \\times U_d$, et le coefficient $G$ est le gain différentiel.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p02_q2",
            "type": "mcq",
            "prompt": "En régime linéaire, la tension de sortie d'un AO vérifie :",
            "options": [
              "$U_s = V_{sat}$ dans tous les cas",
              "$U_s = G \\times U_d$, proportionnelle à la tension différentielle",
              "$U_s = 0$",
              "$U_s = V_{cc}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le §2.1 : proportionnalité de coefficient G dans la partie centrale de la caractéristique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le gain différentiel : très grand, infini pour l'idéal",
          "stepTheme": "Le gain différentiel : très grand, infini pour l'idéal",
          "stepBadge": "Le gain différentiel : très grand, infini pour l'idéal",
          "paragraphText": "Le gain différentiel $G$ d'un AO réel est très grand.\nPour l'AO idéal (parfait), le document précise que le gain est infini : la moindre tension différentielle non nulle fait basculer la sortie en saturation.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p02_q3",
            "type": "mcq",
            "prompt": "Le gain différentiel d'un AO idéal (parfait) est :",
            "options": [
              "Égal à 1",
              "Égal à 0",
              "Infini",
              "Toujours négatif"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le §2.2 : gain infini pour l'AO parfait, très grand pour l'AO réel."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le régime saturé : Us bloquée à ±Vsat",
          "stepTheme": "Le régime saturé : Us bloquée à ±Vsat",
          "stepBadge": "Le régime saturé : Us bloquée à ±Vsat",
          "paragraphText": "En régime saturé, la tension de sortie ne peut valoir que $+V_{sat}$ ou $-V_{sat}$.\nLes tensions de saturation sont toujours inférieures, en valeur absolue, aux tensions d'alimentation : $\\lvert V_{sat} \\rvert < \\lvert V_{cc} \\rvert$.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p02_q4",
            "type": "mcq",
            "prompt": "En régime saturé, la tension de sortie d'un AO vaut :",
            "options": [
              "Toujours $0$ V",
              "$G \\times U_d$",
              "$V_{cc}$ exactement",
              "$+V_{sat}$ ou $-V_{sat}$, avec $\\lvert V_{sat} \\rvert < \\lvert V_{cc} \\rvert$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le §2.1 : deux plateaux de saturation, toujours en dessous des tensions d'alimentation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "En linéaire, Us reste inférieure à Vsat",
          "stepTheme": "En linéaire, Us reste inférieure à Vsat",
          "stepBadge": "En linéaire, Us reste inférieure à Vsat",
          "paragraphText": "Piège de l'exercice 1 (proposition 7, fausse) : même en régime linéaire, la tension de sortie ne dépasse jamais la saturation.\nLe document l'écrit comme une propriété de l'AO idéal en linéaire : $\\lvert U_s \\rvert < V_{sat}$.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p02_q5",
            "type": "mcq",
            "prompt": "L'affirmation « En régime linéaire, $U_s > V_{sat}$ » est :",
            "options": [
              "Fausse : en linéaire, $\\lvert U_s \\rvert < V_{sat}$",
              "Vraie pour tout AO",
              "Vraie seulement pour l'AO idéal",
              "Impossible à décider"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la proposition 7 de l'exercice 1, corrigée « faux » : la saturation borne toujours la sortie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Deux régimes, deux usages (exercice 3)",
          "stepTheme": "Deux régimes, deux usages (exercice 3)",
          "stepBadge": "Deux régimes, deux usages (exercice 3)",
          "paragraphText": "L'exercice 3 résume la leçon en une phrase : un amplificateur opérationnel peut fonctionner comme un amplificateur de tension en régime linéaire et comme un comparateur de tension en régime saturé.\nChaque régime a donc son application propre, détaillée dans les montages des points suivants.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p02_q6",
            "type": "mcq",
            "prompt": "D'après l'exercice 3, un AO fonctionne comme amplificateur de tension en régime :",
            "options": [
              "Saturé uniquement",
              "Linéaire ; le régime saturé sert au comparateur de tension",
              "D'offset",
              "D'alimentation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la phrase reconstituée de l'exercice 3 : amplifier en linéaire, comparer en saturé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p02_q1",
          "type": "mcq",
          "prompt": "La tension différentielle d'un AO est définie par :",
          "options": [
            "$U_d = V_+ - V_-$",
            "$U_d = V_+ + V_-$",
            "$U_d = U_s - U_e$",
            "$U_d = V_{cc} - V_{sat}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §2 : $U_d$ compare les deux entrées E+ et E-."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p02_q2",
          "type": "mcq",
          "prompt": "En régime linéaire, la tension de sortie d'un AO vérifie :",
          "options": [
            "$U_s = V_{sat}$ dans tous les cas",
            "$U_s = G \\times U_d$, proportionnelle à la tension différentielle",
            "$U_s = 0$",
            "$U_s = V_{cc}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le §2.1 : proportionnalité de coefficient G dans la partie centrale de la caractéristique."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p02_q3",
          "type": "mcq",
          "prompt": "Le gain différentiel d'un AO idéal (parfait) est :",
          "options": [
            "Égal à 1",
            "Égal à 0",
            "Infini",
            "Toujours négatif"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le §2.2 : gain infini pour l'AO parfait, très grand pour l'AO réel."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p02_q4",
          "type": "mcq",
          "prompt": "En régime saturé, la tension de sortie d'un AO vaut :",
          "options": [
            "Toujours $0$ V",
            "$G \\times U_d$",
            "$V_{cc}$ exactement",
            "$+V_{sat}$ ou $-V_{sat}$, avec $\\lvert V_{sat} \\rvert < \\lvert V_{cc} \\rvert$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le §2.1 : deux plateaux de saturation, toujours en dessous des tensions d'alimentation."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p02_q5",
          "type": "mcq",
          "prompt": "L'affirmation « En régime linéaire, $U_s > V_{sat}$ » est :",
          "options": [
            "Fausse : en linéaire, $\\lvert U_s \\rvert < V_{sat}$",
            "Vraie pour tout AO",
            "Vraie seulement pour l'AO idéal",
            "Impossible à décider"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la proposition 7 de l'exercice 1, corrigée « faux » : la saturation borne toujours la sortie."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p02_q6",
          "type": "mcq",
          "prompt": "D'après l'exercice 3, un AO fonctionne comme amplificateur de tension en régime :",
          "options": [
            "Saturé uniquement",
            "Linéaire ; le régime saturé sert au comparateur de tension",
            "D'offset",
            "D'alimentation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la phrase reconstituée de l'exercice 3 : amplifier en linéaire, comparer en saturé."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l12_amplificateur_operationnel_p03",
      "order": 3,
      "title": "L'AO idéal en régime linéaire : les propriétés fondamentales",
      "summary": "Résistance d'entrée infinie, courants d'entrée nuls, tension différentielle nulle et sortie inférieure à la saturation : les hypothèses de tous les calculs de montages.",
      "conceptExplanation": "L'amplificateur opérationnel idéal présente une résistance d'entrée infinie.\nPar conséquent, les courants d'entrée sont négligeables : $i_- = i_+ = 0$.\nL'entrée inverseuse E- et l'entrée non inverseuse E+ sont au même potentiel : la tension différentielle est nulle, $U_d = U_+ - U_- = 0$.\nEnfin, la tension de sortie est toujours inférieure à la tension de saturation de l'AO : $\\lvert U_s \\rvert < V_{sat}$.\nCe sont ces trois propriétés, rappelées dans la situation d'évaluation et l'exercice 5, qui permettent d'établir les relations entrée-sortie de tous les montages en régime linéaire.",
      "keyRule": "AO idéal en linéaire : $i_+ = i_- = 0$, $U_d = 0$ (donc $U_+ = U_-$) et $\\lvert U_s \\rvert < V_{sat}$.",
      "formulas": [
        {
          "name": "Propriétés de l'AO idéal en régime linéaire",
          "formula": "i_+ = i_- = 0 \\quad ; \\quad U_d = U_+ - U_- = 0",
          "note": "Conséquence d'une résistance d'entrée infinie et d'un gain infini."
        }
      ],
      "workedExample": {
        "title": "Conséquence immédiate : U- = U+",
        "statement": "Un AO idéal fonctionne en régime linéaire. Le potentiel de l'entrée non inverseuse vaut $U_+ = 2$ V. Que valent le potentiel $U_-$ de l'entrée inverseuse et les courants d'entrée $i_+$ et $i_-$ ?",
        "methodSteps": [
          "En régime linéaire idéal, $U_d = U_+ - U_- = 0$, donc $U_- = U_+$.",
          "Le potentiel de l'entrée inverseuse vaut donc $U_- = 2$ V.",
          "La résistance d'entrée étant infinie, les courants d'entrée sont nuls : $i_+ = i_- = 0$."
        ],
        "conclusion": "C'est l'application directe des propriétés du §3, utilisées dans tous les montages du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Une résistance d'entrée infinie",
          "stepTheme": "Une résistance d'entrée infinie",
          "stepBadge": "Une résistance d'entrée infinie",
          "paragraphText": "L'AO idéal présente une résistance d'entrée infinie entre ses deux entrées.\nC'est le point de départ du §3 : aucune charge n'est prélevée sur les circuits branchés aux entrées.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p03_q1",
            "type": "mcq",
            "prompt": "La résistance d'entrée d'un AO idéal est :",
            "options": [
              "Nulle",
              "Égale à $1$ kΩ",
              "Infinie",
              "Égale à la résistance de sortie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la première phrase du §3 ; l'exercice 1 la reprend sous la forme « résistance entre les bornes d'entrée infinie »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les courants d'entrée sont nuls : i+ = i- = 0",
          "stepTheme": "Les courants d'entrée sont nuls : i+ = i- = 0",
          "stepBadge": "Les courants d'entrée sont nuls : i+ = i- = 0",
          "paragraphText": "Conséquence de la résistance d'entrée infinie : les courants d'entrée sont négligeables.\nLe document l'écrit $i_- = i_+ = 0$ ; la proposition 1 de l'exercice 1 (« les intensités des courants d'entrée sont élevées ») est donc fausse, et la proposition 6 est vraie.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p03_q2",
            "type": "mcq",
            "prompt": "Pour un AO idéal en régime linéaire, les courants d'entrée vérifient :",
            "options": [
              "$i_+ = i_- = 0$ : ils sont négligeables",
              "Ils sont très élevés",
              "Ils sont égaux au courant de sortie",
              "Ils dépendent de la tension d'alimentation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le §3 et la proposition 6 (vraie) de l'exercice 1 ; la proposition 1, inverse, est fausse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La tension différentielle est nulle : Ud = 0",
          "stepTheme": "La tension différentielle est nulle : Ud = 0",
          "stepBadge": "La tension différentielle est nulle : Ud = 0",
          "paragraphText": "En régime linéaire idéal, les deux entrées sont au même potentiel : $U_d = U_+ - U_- = 0$.\nC'est l'hypothèse qui, combinée aux lois des mailles, donne les relations des montages inverseur, non inverseur et sommateur.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p03_q3",
            "type": "mcq",
            "prompt": "En régime linéaire, pour un AO idéal, la tension différentielle vaut :",
            "options": [
              "$U_d = V_{sat}$",
              "$U_d = 0$, car $U_+ = U_-$",
              "$U_d = U_s$",
              "$U_d = V_{cc}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le §3 : gain infini et sortie finie imposent $U_d = 0$ en régime linéaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ud = 0 ne veut pas dire Us = 0",
          "stepTheme": "Ud = 0 ne veut pas dire Us = 0",
          "stepBadge": "Ud = 0 ne veut pas dire Us = 0",
          "paragraphText": "Piège : la tension différentielle nulle concerne les entrées, pas la sortie.\nLa sortie peut prendre n'importe quelle valeur entre $-V_{sat}$ et $+V_{sat}$ pendant que $U_+ = U_-$ : c'est le cas du montage suiveur, où $U_s = U_e$ sans être nulle.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p03_q4",
            "type": "mcq",
            "prompt": "Si $U_d = 0$ en régime linéaire, alors la tension de sortie $U_s$ :",
            "options": [
              "Vaut forcément $0$ V",
              "Est forcément saturée",
              "Ne peut pas dépasser $1$ V",
              "Peut être non nulle, tout en restant inférieure à $V_{sat}$ en valeur absolue"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le §3 impose seulement $\\lvert U_s \\rvert < V_{sat}$ : le suiveur donne par exemple $U_s = U_e$ avec $U_d = 0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les hypothèses de calcul de l'exercice 5",
          "stepTheme": "Les hypothèses de calcul de l'exercice 5",
          "stepBadge": "Les hypothèses de calcul de l'exercice 5",
          "paragraphText": "Dans l'exercice 5 (montage sommateur), le corrigé commence par poser les conditions d'étude : $i_+ = i_- = 0$ et $U_d = 0$.\nCe sont exactement les propriétés du §3, appliquées avant d'écrire les lois des mailles et la loi des nœuds.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p03_q5",
            "type": "mcq",
            "prompt": "Au début du corrigé de l'exercice 5, les conditions d'étude posées sont :",
            "options": [
              "$i_+ = i_- = 0$ et $U_d = 0$",
              "$U_s = V_{sat}$ et $U_d \\neq 0$",
              "$i_+ = i_-$ et $U_s = 0$",
              "$U_+ = 0$ et $U_- = 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la première ligne du corrigé de l'exercice 5 : les deux propriétés de l'AO idéal en régime linéaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le montage suiveur annoncé par les propriétés",
          "stepTheme": "Le montage suiveur annoncé par les propriétés",
          "stepBadge": "Le montage suiveur annoncé par les propriétés",
          "paragraphText": "Le document illustre les propriétés par le montage suiveur : la tension d'entrée est appliquée directement à l'entrée non inverseuse et la sortie est reliée à l'entrée inverseuse.\nComme $U_- = U_+$, on obtient $U_s = U_e$ : la sortie suit l'entrée, d'où l'exemple du voltmètre électronique.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p03_q6",
            "type": "mcq",
            "prompt": "Dans le montage suiveur, la relation entre la tension de sortie et la tension d'entrée est :",
            "options": [
              "$U_s = -U_e$",
              "$U_s = 2 \\times U_e$",
              "$U_s = U_e$",
              "$U_s = 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le §4.1 : $U_e = U_s$ parce que $U_- = U_+$ en régime linéaire idéal."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p03_q1",
          "type": "mcq",
          "prompt": "La résistance d'entrée d'un AO idéal est :",
          "options": [
            "Nulle",
            "Égale à $1$ kΩ",
            "Infinie",
            "Égale à la résistance de sortie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la première phrase du §3 ; l'exercice 1 la reprend sous la forme « résistance entre les bornes d'entrée infinie »."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p03_q2",
          "type": "mcq",
          "prompt": "Pour un AO idéal en régime linéaire, les courants d'entrée vérifient :",
          "options": [
            "$i_+ = i_- = 0$ : ils sont négligeables",
            "Ils sont très élevés",
            "Ils sont égaux au courant de sortie",
            "Ils dépendent de la tension d'alimentation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le §3 et la proposition 6 (vraie) de l'exercice 1 ; la proposition 1, inverse, est fausse."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p03_q3",
          "type": "mcq",
          "prompt": "En régime linéaire, pour un AO idéal, la tension différentielle vaut :",
          "options": [
            "$U_d = V_{sat}$",
            "$U_d = 0$, car $U_+ = U_-$",
            "$U_d = U_s$",
            "$U_d = V_{cc}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le §3 : gain infini et sortie finie imposent $U_d = 0$ en régime linéaire."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p03_q4",
          "type": "mcq",
          "prompt": "Si $U_d = 0$ en régime linéaire, alors la tension de sortie $U_s$ :",
          "options": [
            "Vaut forcément $0$ V",
            "Est forcément saturée",
            "Ne peut pas dépasser $1$ V",
            "Peut être non nulle, tout en restant inférieure à $V_{sat}$ en valeur absolue"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le §3 impose seulement $\\lvert U_s \\rvert < V_{sat}$ : le suiveur donne par exemple $U_s = U_e$ avec $U_d = 0$."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p03_q5",
          "type": "mcq",
          "prompt": "Au début du corrigé de l'exercice 5, les conditions d'étude posées sont :",
          "options": [
            "$i_+ = i_- = 0$ et $U_d = 0$",
            "$U_s = V_{sat}$ et $U_d \\neq 0$",
            "$i_+ = i_-$ et $U_s = 0$",
            "$U_+ = 0$ et $U_- = 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la première ligne du corrigé de l'exercice 5 : les deux propriétés de l'AO idéal en régime linéaire."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p03_q6",
          "type": "mcq",
          "prompt": "Dans le montage suiveur, la relation entre la tension de sortie et la tension d'entrée est :",
          "options": [
            "$U_s = -U_e$",
            "$U_s = 2 \\times U_e$",
            "$U_s = U_e$",
            "$U_s = 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le §4.1 : $U_e = U_s$ parce que $U_- = U_+$ en régime linéaire idéal."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l12_amplificateur_operationnel_p04",
      "order": 4,
      "title": "Montages suiveur et amplificateur inverseur",
      "summary": "Le suiveur recopie l'entrée (Us = Ue) ; l'amplificateur inverseur donne Us = -(R2/R1)·Ue, de gain en tension R2/R1.",
      "conceptExplanation": "Dans le montage suiveur, la tension d'entrée $U_e$ est appliquée directement à l'entrée non inverseuse et la sortie est rebouclée sur l'entrée inverseuse : on obtient $U_e = U_s$, la tension de sortie suit la tension d'entrée (exemple du voltmètre électronique).\nDans le montage amplificateur inverseur, l'entrée se fait par E- à travers la résistance $R_1$, avec une résistance $R_2$ entre la sortie et E-.\nAvec $U_d = 0$ et $I_1 = I_2$ (car $i_- = 0$), les lois des mailles donnent $U_s = -\\frac{R_2}{R_1} \\times U_e$.\nLe rapport $G = \\frac{\\lvert U_s \\rvert}{\\lvert U_e \\rvert} = \\frac{R_2}{R_1}$ est le gain en tension de l'amplificateur ; le signe moins traduit l'inversion du signal.",
      "keyRule": "Inverseur : $U_s = -\\frac{R_2}{R_1} \\times U_e$ ; suiveur : $U_s = U_e$ (gain 1, sans inversion).",
      "formulas": [
        {
          "name": "Montage amplificateur inverseur",
          "formula": "U_s = -\\frac{R_2}{R_1} \\times U_e",
          "note": "Gain en tension : G = R2/R1."
        },
        {
          "name": "Montage suiveur",
          "formula": "U_s = U_e",
          "note": "La sortie suit l'entrée ; exemple : le voltmètre électronique."
        }
      ],
      "workedExample": {
        "title": "L'activité de l'amplificateur inverseur",
        "statement": "Pour le montage amplificateur inverseur, on donne $U_e = 2$ V et $R_2 = 2 R_1$. Écris $U_s$ en fonction de $U_e$, puis détermine $U_s$.",
        "methodSteps": [
          "Relation du montage : $U_s = -\\frac{R_2}{R_1} \\times U_e$.",
          "Avec $R_2 = 2 R_1$, le rapport vaut $2$ : $U_s = -2 \\times U_e$.",
          "Application numérique : $U_s = -2 \\times 2 = -4$ V."
        ],
        "conclusion": "C'est la solution de l'activité d'application du §4.2 : gain 2, avec inversion du signe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le suiveur : la sortie suit l'entrée",
          "stepTheme": "Le suiveur : la sortie suit l'entrée",
          "stepBadge": "Le suiveur : la sortie suit l'entrée",
          "paragraphText": "• Montage suiveur : la tension d'entrée est appliquée directement à l'entrée non inverseuse, et la sortie est reliée à l'entrée inverseuse.\nIl sert par exemple dans le voltmètre électronique, où il transmet la tension sans la modifier.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p04_q1",
            "type": "mcq",
            "prompt": "Le montage pour lequel la tension de sortie suit exactement la tension d'entrée est :",
            "options": [
              "Le montage suiveur, avec $U_s = U_e$",
              "Le montage inverseur",
              "Le montage sommateur",
              "Le montage comparateur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le §4.1 : $U_e = U_s$, d'où le nom de suiveur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La relation de l'inverseur : Us = -(R2/R1)·Ue",
          "stepTheme": "La relation de l'inverseur : Us = -(R2/R1)·Ue",
          "stepBadge": "La relation de l'inverseur : Us = -(R2/R1)·Ue",
          "paragraphText": "Pour le montage amplificateur inverseur, les mailles donnent $U_e = R_1 I_1$ et $U_s = -R_2 I_2$, avec $I_1 = I_2$ car $i_- = 0$.\nOn obtient $U_s = -\\frac{R_2}{R_1} \\times U_e$ : le signe moins est la marque de l'inversion.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p04_q2",
            "type": "mcq",
            "prompt": "La tension de sortie du montage amplificateur inverseur s'écrit :",
            "options": [
              "$U_s = \\frac{R_2}{R_1} \\times U_e$",
              "$U_s = -\\frac{R_2}{R_1} \\times U_e$",
              "$U_s = -\\frac{R_1}{R_2} \\times U_e$",
              "$U_s = U_e$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation établie au §4.2 à partir de $U_d = 0$ et $I_1 = I_2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le gain en tension de l'inverseur : G = R2/R1",
          "stepTheme": "Le gain en tension de l'inverseur : G = R2/R1",
          "stepBadge": "Le gain en tension de l'inverseur : G = R2/R1",
          "paragraphText": "Le rapport $G = \\frac{\\lvert U_s \\rvert}{\\lvert U_e \\rvert}$ est appelé gain en tension de l'amplificateur.\nPour l'inverseur, il vaut $G = \\frac{R_2}{R_1}$ : il ne dépend que des deux résistances, pas de l'AO lui-même.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p04_q3",
            "type": "mcq",
            "prompt": "Le gain en tension du montage amplificateur inverseur vaut :",
            "options": [
              "$G = \\frac{R_1}{R_2}$",
              "$G = 1 + \\frac{R_2}{R_1}$",
              "$G = \\frac{R_2}{R_1}$",
              "$G = R_2 - R_1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le §4.2 : $G = \\frac{\\lvert U_s \\rvert}{\\lvert U_e \\rvert} = \\frac{R_2}{R_1}$, en valeur absolue pour faire disparaître le signe moins."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Ue = 2 V et R2 = 2R1 donnent Us = -4 V",
          "stepTheme": "Ue = 2 V et R2 = 2R1 donnent Us = -4 V",
          "stepBadge": "Ue = 2 V et R2 = 2R1 donnent Us = -4 V",
          "paragraphText": "Dans l'activité du §4.2 : $U_s = -\\frac{R_2}{R_1} \\times U_e = -2 \\times U_e$.\nPour $U_e = 2$ V, on obtient $U_s = -4$ V : l'amplitude est doublée et le signe est inversé.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p04_q4",
            "type": "mcq",
            "prompt": "Pour $U_e = 2$ V et $R_2 = 2 R_1$, la tension de sortie de l'inverseur vaut :",
            "options": [
              "$4$ V",
              "$1$ V",
              "$-2$ V",
              "$-4$ V"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la solution de l'activité : $U_s = -2 \\times 2 = -4$ V."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 4 : une pente de -2 pour R1 = 1 kΩ, R2 = 2 kΩ",
          "stepTheme": "L'exercice 4 : une pente de -2 pour R1 = 1 kΩ, R2 = 2 kΩ",
          "stepBadge": "L'exercice 4 : une pente de -2 pour R1 = 1 kΩ, R2 = 2 kΩ",
          "paragraphText": "Dans l'exercice 4, le tableau des mesures donne des sorties opposées aux entrées : pour $U_e = 1$ V, $U_s = -2$ V ; pour $U_e = 4$ V, $U_s = -7{,}8$ V.\nLa pente de la courbe $U_s = f(U_e)$ vaut environ $-2$, égale à $-\\frac{R_2}{R_1}$ avec $R_1 = 1$ kΩ et $R_2 = 2$ kΩ : c'est un amplificateur inverseur.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p04_q5",
            "type": "mcq",
            "prompt": "Le montage de l'exercice 4, dont la caractéristique $U_s = f(U_e)$ a une pente d'environ $-2$, est :",
            "options": [
              "Un amplificateur inverseur de gain $2$",
              "Un suiveur",
              "Un amplificateur non inverseur de gain $3$",
              "Un comparateur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé nomme le montage « amplificateur inverseur » et compare la pente à $-\\frac{R_2}{R_1} = -2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le signe moins n'est pas une erreur",
          "stepTheme": "Le signe moins n'est pas une erreur",
          "stepBadge": "Le signe moins n'est pas une erreur",
          "paragraphText": "Piège : le signe moins de $U_s = -\\frac{R_2}{R_1} \\times U_e$ fait partie de la formule de l'inverseur.\nLe gain en tension, lui, se donne en valeur absolue ($G = \\frac{R_2}{R_1}$) : confondre les deux écritures conduit à des sorties de signe faux, comme dans le départage de la situation d'évaluation.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p04_q6",
            "type": "mcq",
            "prompt": "Dans la formule de l'inverseur, le signe moins signifie que :",
            "options": [
              "Le calcul est faux",
              "La tension de sortie est inversée par rapport à l'entrée",
              "Le gain est négatif et sans valeur absolue",
              "Le montage est en saturation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le §4.2 définit le gain avec des valeurs absolues précisément parce que $U_s$ et $U_e$ sont de signes opposés."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p04_q1",
          "type": "mcq",
          "prompt": "Le montage pour lequel la tension de sortie suit exactement la tension d'entrée est :",
          "options": [
            "Le montage suiveur, avec $U_s = U_e$",
            "Le montage inverseur",
            "Le montage sommateur",
            "Le montage comparateur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le §4.1 : $U_e = U_s$, d'où le nom de suiveur."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p04_q2",
          "type": "mcq",
          "prompt": "La tension de sortie du montage amplificateur inverseur s'écrit :",
          "options": [
            "$U_s = \\frac{R_2}{R_1} \\times U_e$",
            "$U_s = -\\frac{R_2}{R_1} \\times U_e$",
            "$U_s = -\\frac{R_1}{R_2} \\times U_e$",
            "$U_s = U_e$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation établie au §4.2 à partir de $U_d = 0$ et $I_1 = I_2$."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p04_q3",
          "type": "mcq",
          "prompt": "Le gain en tension du montage amplificateur inverseur vaut :",
          "options": [
            "$G = \\frac{R_1}{R_2}$",
            "$G = 1 + \\frac{R_2}{R_1}$",
            "$G = \\frac{R_2}{R_1}$",
            "$G = R_2 - R_1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le §4.2 : $G = \\frac{\\lvert U_s \\rvert}{\\lvert U_e \\rvert} = \\frac{R_2}{R_1}$, en valeur absolue pour faire disparaître le signe moins."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p04_q4",
          "type": "mcq",
          "prompt": "Pour $U_e = 2$ V et $R_2 = 2 R_1$, la tension de sortie de l'inverseur vaut :",
          "options": [
            "$4$ V",
            "$1$ V",
            "$-2$ V",
            "$-4$ V"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la solution de l'activité : $U_s = -2 \\times 2 = -4$ V."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p04_q5",
          "type": "mcq",
          "prompt": "Le montage de l'exercice 4, dont la caractéristique $U_s = f(U_e)$ a une pente d'environ $-2$, est :",
          "options": [
            "Un amplificateur inverseur de gain $2$",
            "Un suiveur",
            "Un amplificateur non inverseur de gain $3$",
            "Un comparateur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé nomme le montage « amplificateur inverseur » et compare la pente à $-\\frac{R_2}{R_1} = -2$."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p04_q6",
          "type": "mcq",
          "prompt": "Dans la formule de l'inverseur, le signe moins signifie que :",
          "options": [
            "Le calcul est faux",
            "La tension de sortie est inversée par rapport à l'entrée",
            "Le gain est négatif et sans valeur absolue",
            "Le montage est en saturation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le §4.2 définit le gain avec des valeurs absolues précisément parce que $U_s$ et $U_e$ sont de signes opposés."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l12_amplificateur_operationnel_p05",
      "order": 5,
      "title": "Montages amplificateur non inverseur et sommateur inverseur",
      "summary": "Le non inverseur donne un gain G = 1 + R2/R1 sans inversion ; le sommateur inverseur additionne les entrées avec le signe moins.",
      "conceptExplanation": "Dans le montage amplificateur non inverseur, la tension d'entrée est appliquée à l'entrée non inverseuse ; le gain en tension vaut $G = \\frac{U_s}{U_e} = 1 + \\frac{R_2}{R_1}$, toujours supérieur à 1, et la sortie a le même signe que l'entrée.\nLa situation d'évaluation le distingue du montage inverseur : pour le non inverseur, $U_s = \\frac{R_1 + R_2}{R_1} \\times U_e$, résultat positif, alors que l'inverseur donne $U_s = -\\frac{R_2}{R_1} \\times U_e$.\nDans le montage sommateur inverseur, deux tensions $U_1$ et $U_2$ entrent par E- à travers $R_1$ et $R_2$, avec une résistance $R_3$ en contre-réaction ; la loi des nœuds en E- donne $U_s = -R_3 \\times \\left( \\frac{U_1}{R_1} + \\frac{U_2}{R_2} \\right)$.\nSi les résistances sont égales, l'exercice 5 obtient $U_s = -(U_1 + U_2)$ : la sortie est l'opposée de la somme des entrées.",
      "keyRule": "Non inverseur : $G = 1 + \\frac{R_2}{R_1}$ et pas de changement de signe ; sommateur : la sortie vaut l'opposée de la somme pondérée des entrées.",
      "formulas": [
        {
          "name": "Montage amplificateur non inverseur",
          "formula": "G = \\frac{U_s}{U_e} = 1 + \\frac{R_2}{R_1}",
          "note": "Gain toujours supérieur à 1, sans inversion de signe."
        },
        {
          "name": "Montage sommateur inverseur",
          "formula": "U_s = -R_3 \\times \\left( \\frac{U_1}{R_1} + \\frac{U_2}{R_2} \\right)",
          "note": "Si R1 = R2 = R3, alors Us = -(U1 + U2)."
        }
      ],
      "workedExample": {
        "title": "Départager les deux montages de la situation d'évaluation",
        "statement": "Deux schémas sont proposés pour réaliser un amplificateur non inverseur : le montage n°1 donne $U_s = -\\frac{R_2}{R_1} \\times U_e$ et le montage n°2 donne $U_s = \\frac{R_1 + R_2}{R_1} \\times U_e$. Lequel faut-il réaliser ?",
        "methodSteps": [
          "Gain du montage n°1 : $G = \\frac{R_2}{R_1}$, avec une sortie de signe opposé à l'entrée : c'est un inverseur.",
          "Gain du montage n°2 : $G = \\frac{R_1 + R_2}{R_1} = 1 + \\frac{R_2}{R_1}$, avec $U_s$ du même signe que $U_e$.",
          "Un amplificateur non inverseur ne doit pas changer le signe : c'est donc le montage n°2."
        ],
        "conclusion": "C'est la justification du corrigé de la situation d'évaluation : le montage à réaliser est le n°2, car $U_s > 0$ pour $U_e > 0$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le gain du non inverseur : G = 1 + R2/R1",
          "stepTheme": "Le gain du non inverseur : G = 1 + R2/R1",
          "stepBadge": "Le gain du non inverseur : G = 1 + R2/R1",
          "paragraphText": "Pour le montage amplificateur non inverseur, le document donne directement le gain en tension.\n$G = 1 + \\frac{R_2}{R_1}$ : comme le rapport des résistances est positif, le gain est toujours supérieur à $1$.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p05_q1",
            "type": "mcq",
            "prompt": "Le gain en tension du montage amplificateur non inverseur vaut :",
            "options": [
              "$G = \\frac{R_2}{R_1}$",
              "$G = 1 + \\frac{R_2}{R_1}$",
              "$G = 1 - \\frac{R_2}{R_1}$",
              "$G = \\frac{R_1}{R_2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation du §4.3 ; la forme $\\frac{R_2}{R_1}$ seule est celle du gain de l'inverseur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "R2 = 2R1 donnent un gain de 3",
          "stepTheme": "R2 = 2R1 donnent un gain de 3",
          "stepBadge": "R2 = 2R1 donnent un gain de 3",
          "paragraphText": "Dans l'activité du §4.3, $R_2 = 2 R_1$ : $G = 1 + \\frac{R_2}{R_1} = 1 + 2$.\nLe gain vaut donc $3$ : une entrée de $1$ V donnerait une sortie de $3$ V, de même signe.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p05_q2",
            "type": "mcq",
            "prompt": "Pour $R_2 = 2 R_1$, le gain du montage non inverseur vaut :",
            "options": [
              "$2$",
              "$1$",
              "$3$",
              "$-3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la solution de l'activité : $G = 1 + 2 = 3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Pas d'inversion : Us garde le signe de Ue",
          "stepTheme": "Pas d'inversion : Us garde le signe de Ue",
          "stepBadge": "Pas d'inversion : Us garde le signe de Ue",
          "paragraphText": "Dans la situation d'évaluation, le critère de choix est le signe de la sortie.\nLe montage n°2 donne $U_s = \\frac{R_1 + R_2}{R_1} \\times U_e$, positif pour une entrée positive : c'est bien le comportement d'un amplificateur non inverseur.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p05_q3",
            "type": "mcq",
            "prompt": "Un montage amplificateur non inverseur se reconnaît parce que :",
            "options": [
              "Sa sortie est toujours négative",
              "Son gain vaut exactement $1$",
              "Il fonctionne en régime saturé",
              "Sa tension de sortie a le même signe que la tension d'entrée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la justification du corrigé de la situation : le montage n°2 est choisi car $U_s > 0$ comme $U_e$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le sommateur inverseur additionne puis inverse",
          "stepTheme": "Le sommateur inverseur additionne puis inverse",
          "stepBadge": "Le sommateur inverseur additionne puis inverse",
          "paragraphText": "• Montage sommateur inverseur : deux tensions d'entrée $U_1$ et $U_2$ sont appliquées à l'entrée inverseuse à travers $R_1$ et $R_2$, avec $R_3$ entre la sortie et E-.\nLa loi des nœuds en E- ($i_3 = i_1 + i_2$) conduit à $U_s = -R_3 \\times \\left( \\frac{U_1}{R_1} + \\frac{U_2}{R_2} \\right)$ : une addition, avec inversion.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p05_q4",
            "type": "mcq",
            "prompt": "Le montage sommateur inverseur délivre une tension de sortie égale à :",
            "options": [
              "L'opposée de la somme pondérée des tensions d'entrée",
              "La somme simple des tensions d'entrée",
              "La différence des tensions d'entrée",
              "La moyenne des résistances"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la relation établie au §4.4 et retrouvée dans l'activité qui l'accompagne."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 5 : Us = -(U1 + U2) = -10 V",
          "stepTheme": "L'exercice 5 : Us = -(U1 + U2) = -10 V",
          "stepBadge": "L'exercice 5 : Us = -(U1 + U2) = -10 V",
          "paragraphText": "Dans l'exercice 5, les trois résistances sont égales ($R = 250$ Ω) et les entrées valent $U_1 = 4$ V et $U_2 = 6$ V.\nLa relation devient $U_s = -(U_1 + U_2)$, soit $U_s = -10$ V : le corrigé conclut à un montage sommateur inverseur.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p05_q5",
            "type": "mcq",
            "prompt": "Pour $U_1 = 4$ V, $U_2 = 6$ V et des résistances égales, la sortie du sommateur de l'exercice 5 vaut :",
            "options": [
              "$10$ V",
              "$-10$ V",
              "$-2$ V",
              "$2$ V"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le calcul final du corrigé : $U_s = -(4 + 6) = -10$ V."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Inverseur ou non inverseur : regarder le signe et le gain",
          "stepTheme": "Inverseur ou non inverseur : regarder le signe et le gain",
          "stepBadge": "Inverseur ou non inverseur : regarder le signe et le gain",
          "paragraphText": "Piège de la situation d'évaluation : les deux montages se ressemblent, mais leurs formules diffèrent.\nInverseur : $U_s = -\\frac{R_2}{R_1} \\times U_e$ (signe changé) ; non inverseur : $G = \\frac{R_1 + R_2}{R_1}$ (signe conservé) ; suiveur : $U_s = U_e$. Identifier la formule avant de conclure.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p05_q6",
            "type": "mcq",
            "prompt": "Le montage dont la sortie vaut $U_s = \\frac{R_1 + R_2}{R_1} \\times U_e$ est :",
            "options": [
              "Le montage inverseur",
              "Le montage suiveur",
              "Le montage amplificateur non inverseur",
              "Le montage comparateur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le montage n°2 de la situation d'évaluation, équivalent à $G = 1 + \\frac{R_2}{R_1}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p05_q1",
          "type": "mcq",
          "prompt": "Le gain en tension du montage amplificateur non inverseur vaut :",
          "options": [
            "$G = \\frac{R_2}{R_1}$",
            "$G = 1 + \\frac{R_2}{R_1}$",
            "$G = 1 - \\frac{R_2}{R_1}$",
            "$G = \\frac{R_1}{R_2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation du §4.3 ; la forme $\\frac{R_2}{R_1}$ seule est celle du gain de l'inverseur."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p05_q2",
          "type": "mcq",
          "prompt": "Pour $R_2 = 2 R_1$, le gain du montage non inverseur vaut :",
          "options": [
            "$2$",
            "$1$",
            "$3$",
            "$-3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la solution de l'activité : $G = 1 + 2 = 3$."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p05_q3",
          "type": "mcq",
          "prompt": "Un montage amplificateur non inverseur se reconnaît parce que :",
          "options": [
            "Sa sortie est toujours négative",
            "Son gain vaut exactement $1$",
            "Il fonctionne en régime saturé",
            "Sa tension de sortie a le même signe que la tension d'entrée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la justification du corrigé de la situation : le montage n°2 est choisi car $U_s > 0$ comme $U_e$."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p05_q4",
          "type": "mcq",
          "prompt": "Le montage sommateur inverseur délivre une tension de sortie égale à :",
          "options": [
            "L'opposée de la somme pondérée des tensions d'entrée",
            "La somme simple des tensions d'entrée",
            "La différence des tensions d'entrée",
            "La moyenne des résistances"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la relation établie au §4.4 et retrouvée dans l'activité qui l'accompagne."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p05_q5",
          "type": "mcq",
          "prompt": "Pour $U_1 = 4$ V, $U_2 = 6$ V et des résistances égales, la sortie du sommateur de l'exercice 5 vaut :",
          "options": [
            "$10$ V",
            "$-10$ V",
            "$-2$ V",
            "$2$ V"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le calcul final du corrigé : $U_s = -(4 + 6) = -10$ V."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p05_q6",
          "type": "mcq",
          "prompt": "Le montage dont la sortie vaut $U_s = \\frac{R_1 + R_2}{R_1} \\times U_e$ est :",
          "options": [
            "Le montage inverseur",
            "Le montage suiveur",
            "Le montage amplificateur non inverseur",
            "Le montage comparateur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le montage n°2 de la situation d'évaluation, équivalent à $G = 1 + \\frac{R_2}{R_1}$."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l12_amplificateur_operationnel_p06",
      "order": 6,
      "title": "L'AO en régime saturé et le montage comparateur",
      "summary": "En saturation, la sortie ne prend que deux états ±Vsat et Ud est non nulle : le montage comparateur bascule selon le signe de U2 − U1.",
      "conceptExplanation": "En régime saturé, quelle que soit la tension d'entrée, la tension de sortie ne peut posséder que deux états électriques : $U_s = +V_{sat}$ ou $U_s = -V_{sat}$.\nLa tension différentielle y est non nulle : $U_d \\neq 0$, donc $U_+ \\neq U_-$ ; c'est l'opposé du régime linéaire, où $U_d = 0$.\nLe montage comparateur utilise ce régime : $U_1$ est la tension de référence et $U_2$ la tension à comparer ; la loi des mailles donne $U_d = U_2 - U_1$.\nSi $U_1 > U_2$, alors $U_d < 0$ et $U_s = -V_{sat}$ ; si $U_1 < U_2$, alors $U_d > 0$ et $U_s = +V_{sat}$.",
      "keyRule": "En saturé : signe de $U_d$ = signe de la sortie ; $U_d > 0$ donne $+V_{sat}$, $U_d < 0$ donne $-V_{sat}$, sans valeur intermédiaire.",
      "formulas": [
        {
          "name": "Montage comparateur",
          "formula": "U_d = U_2 - U_1",
          "note": "Ud > 0 donne Us = +Vsat ; Ud < 0 donne Us = -Vsat."
        }
      ],
      "workedExample": {
        "title": "Comparer deux tensions",
        "statement": "Un montage comparateur reçoit la tension de référence $U_1 = 3$ V et la tension à comparer $U_2 = 5$ V. Détermine la tension différentielle et l'état de la sortie.",
        "methodSteps": [
          "Tension différentielle : $U_d = U_2 - U_1 = 5 - 3 = 2$ V.",
          "Comme $U_d > 0$, le montage est en régime saturé du côté positif.",
          "La sortie vaut donc $U_s = +V_{sat}$."
        ],
        "conclusion": "C'est l'application de la règle du §5.2 : si $U_1 < U_2$, alors $U_s = +V_{sat}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "En saturé, deux états de sortie seulement",
          "stepTheme": "En saturé, deux états de sortie seulement",
          "stepBadge": "En saturé, deux états de sortie seulement",
          "paragraphText": "En régime saturé, quelle que soit la tension d'entrée, la tension de sortie ne peut posséder que deux états électriques.\n$U_s = +V_{sat}$ ou $U_s = -V_{sat}$ : il n'y a aucune valeur intermédiaire possible, contrairement au régime linéaire.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p06_q1",
            "type": "mcq",
            "prompt": "En régime saturé, la tension de sortie d'un AO peut valoir :",
            "options": [
              "N'importe quelle valeur entre $-V_{sat}$ et $+V_{sat}$",
              "Uniquement $+V_{sat}$ ou $-V_{sat}$",
              "Uniquement $0$ V",
              "$G \\times U_d$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première propriété du §5.1 ; $G \\times U_d$ est la loi du régime linéaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "En saturé, la tension différentielle est non nulle",
          "stepTheme": "En saturé, la tension différentielle est non nulle",
          "stepBadge": "En saturé, la tension différentielle est non nulle",
          "paragraphText": "Deuxième propriété du régime saturé : la tension différentielle est non nulle, $U_d \\neq 0$, ce qui signifie $U_+ \\neq U_-$.\nC'est le critère pratique pour distinguer les régimes : $U_d = 0$ en linéaire, $U_d \\neq 0$ en saturé.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p06_q2",
            "type": "mcq",
            "prompt": "En régime saturé, la tension différentielle vérifie :",
            "options": [
              "$U_d = 0$",
              "$U_d = U_s$",
              "$U_d \\neq 0$, donc $U_+ \\neq U_-$",
              "$U_d = V_{cc}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la seconde propriété du §5.1, opposée au $U_d = 0$ du régime linéaire (§3)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le comparateur : une référence et une tension à comparer",
          "stepTheme": "Le comparateur : une référence et une tension à comparer",
          "stepBadge": "Le comparateur : une référence et une tension à comparer",
          "paragraphText": "• Montage comparateur : montage en régime saturé où $U_1$ est la tension de référence et $U_2$ la tension à comparer à $U_1$.\nLa loi des mailles donne $U_d = U_2 - U_1$ : c'est le signe de cette différence qui décide de l'état de la sortie.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p06_q3",
            "type": "mcq",
            "prompt": "Dans le montage comparateur du document, $U_d$ s'exprime par :",
            "options": [
              "$U_d = U_1 - U_2$",
              "$U_d = U_1 + U_2$",
              "$U_d = 0$ dans tous les cas",
              "$U_d = U_2 - U_1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la maille du §5.2 : $U_2 - U_1 - U_d = 0$, donc $U_d = U_2 - U_1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Si U2 dépasse U1, la sortie passe à +Vsat",
          "stepTheme": "Si U2 dépasse U1, la sortie passe à +Vsat",
          "stepBadge": "Si U2 dépasse U1, la sortie passe à +Vsat",
          "paragraphText": "Avec $U_d = U_2 - U_1$ : si $U_1 < U_2$, alors $U_d > 0$ et la sortie bascule à $U_s = +V_{sat}$.\nLe comparateur transforme donc une comparaison de tensions en un état logique de sortie.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p06_q4",
            "type": "mcq",
            "prompt": "Dans le montage comparateur, si $U_1 < U_2$, alors la tension de sortie vaut :",
            "options": [
              "$U_s = +V_{sat}$",
              "$U_s = -V_{sat}$",
              "$U_s = 0$ V",
              "$U_s = U_2 - U_1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la règle du §5.2 : $U_d > 0$ donne $U_s = +V_{sat}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Si U1 dépasse U2, la sortie passe à -Vsat",
          "stepTheme": "Si U1 dépasse U2, la sortie passe à -Vsat",
          "stepBadge": "Si U1 dépasse U2, la sortie passe à -Vsat",
          "paragraphText": "Piège : inverser la comparaison inverse la sortie. Si $U_1 > U_2$, alors $U_d = U_2 - U_1 < 0$.\nLe document conclut alors $U_s = -V_{sat}$ : il faut donc toujours calculer le signe de $U_d$ avant de donner l'état de sortie.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p06_q5",
            "type": "mcq",
            "prompt": "Dans le montage comparateur, si $U_1 > U_2$, alors la tension de sortie vaut :",
            "options": [
              "$U_s = +V_{sat}$",
              "$U_s = -V_{sat}$",
              "$U_s = U_1$",
              "$U_s$ est indéterminée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la règle du §5.2 : $U_d < 0$ donne $U_s = -V_{sat}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Amplifier en linéaire, comparer en saturé",
          "stepTheme": "Amplifier en linéaire, comparer en saturé",
          "stepBadge": "Amplifier en linéaire, comparer en saturé",
          "paragraphText": "L'exercice 3 résume les deux régimes par leurs usages : amplificateur de tension en régime linéaire, comparateur de tension en régime saturé.\nUne radio, citée à l'exercice 1, utilise d'ailleurs des amplificateurs opérationnels : la proposition est vraie.",
          "exercise": {
            "id": "premiere_c_physique_l12_amplificateur_operationnel_p06_q6",
            "type": "mcq",
            "prompt": "D'après l'exercice 3, un AO fonctionne comme comparateur de tension :",
            "options": [
              "En régime linéaire",
              "Uniquement avec un gain de $1$",
              "En régime saturé",
              "Sans alimentation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la phrase reconstituée de l'exercice 3 : comparaison en saturé, amplification en linéaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p06_q1",
          "type": "mcq",
          "prompt": "En régime saturé, la tension de sortie d'un AO peut valoir :",
          "options": [
            "N'importe quelle valeur entre $-V_{sat}$ et $+V_{sat}$",
            "Uniquement $+V_{sat}$ ou $-V_{sat}$",
            "Uniquement $0$ V",
            "$G \\times U_d$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première propriété du §5.1 ; $G \\times U_d$ est la loi du régime linéaire."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p06_q2",
          "type": "mcq",
          "prompt": "En régime saturé, la tension différentielle vérifie :",
          "options": [
            "$U_d = 0$",
            "$U_d = U_s$",
            "$U_d \\neq 0$, donc $U_+ \\neq U_-$",
            "$U_d = V_{cc}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la seconde propriété du §5.1, opposée au $U_d = 0$ du régime linéaire (§3)."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p06_q3",
          "type": "mcq",
          "prompt": "Dans le montage comparateur du document, $U_d$ s'exprime par :",
          "options": [
            "$U_d = U_1 - U_2$",
            "$U_d = U_1 + U_2$",
            "$U_d = 0$ dans tous les cas",
            "$U_d = U_2 - U_1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la maille du §5.2 : $U_2 - U_1 - U_d = 0$, donc $U_d = U_2 - U_1$."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p06_q4",
          "type": "mcq",
          "prompt": "Dans le montage comparateur, si $U_1 < U_2$, alors la tension de sortie vaut :",
          "options": [
            "$U_s = +V_{sat}$",
            "$U_s = -V_{sat}$",
            "$U_s = 0$ V",
            "$U_s = U_2 - U_1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la règle du §5.2 : $U_d > 0$ donne $U_s = +V_{sat}$."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p06_q5",
          "type": "mcq",
          "prompt": "Dans le montage comparateur, si $U_1 > U_2$, alors la tension de sortie vaut :",
          "options": [
            "$U_s = +V_{sat}$",
            "$U_s = -V_{sat}$",
            "$U_s = U_1$",
            "$U_s$ est indéterminée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la règle du §5.2 : $U_d < 0$ donne $U_s = -V_{sat}$."
        },
        {
          "id": "premiere_c_physique_l12_amplificateur_operationnel_p06_q6",
          "type": "mcq",
          "prompt": "D'après l'exercice 3, un AO fonctionne comme comparateur de tension :",
          "options": [
            "En régime linéaire",
            "Uniquement avec un gain de $1$",
            "En régime saturé",
            "Sans alimentation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la phrase reconstituée de l'exercice 3 : comparaison en saturé, amplification en linéaire."
        }
      ]
    }
  ]
};
