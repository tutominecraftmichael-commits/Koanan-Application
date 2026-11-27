import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 11 : Dosage acido-basique » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1342
export const CHIMIE_TLE_CD_L11_DOSAGE: CurriculumChapter = {
  "id": "terminale_c_chimie_l11_dosage",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 11,
  "title": "Leçon 11 : Dosage acido-basique",
  "summary": "On définit le dosage et son protocole, on réalise le dosage colorimétrique du vinaigre avec le choix de l'indicateur coloré, puis le dosage pH-métrique et les calculs de concentration à l'équivalence.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1342",
  "points": [
    {
      "id": "terminale_c_chimie_l11_dosage_p01",
      "order": 1,
      "title": "Généralités : principe et protocole du dosage",
      "summary": "Déterminer une concentration inconnue grâce à une réaction unique, rapide et totale.",
      "conceptExplanation": "Un dosage est une technique expérimentale qui permet de déterminer la concentration molaire C inconnue d'une espèce chimique dans une solution.\nOn fait réagir l'espèce A, de concentration inconnue, avec une espèce B de concentration connue, selon une réaction A + B → produits.\nCette réaction de dosage doit être unique, rapide et totale : c'est le cas des réactions acido-basiques entre acides et bases forts ou faibles.\nIl existe deux types de dosages acido-basiques : le dosage pH-métrique et le dosage colorimétrique.",
      "keyRule": "Dosage = concentration inconnue via une réaction unique, rapide et totale avec un réactif de concentration connue.",
      "formulas": [
        {
          "name": "Réactions utilisables pour un dosage",
          "formula": "\\mathrm{AH + OH^- \\rightarrow A^- + H_2O} \\quad ; \\quad \\mathrm{B + H_3O^+ \\rightarrow BH^+ + H_2O}",
          "note": "En plus de H₃O⁺ + OH⁻ → 2 H₂O pour fort/fort."
        }
      ],
      "workedExample": {
        "title": "Le protocole expérimental du résumé",
        "statement": "Décris le protocole d'un dosage colorimétrique.",
        "methodSteps": [
          "On prélève un volume Va de la solution à doser, versé dans un Erlenmeyer.",
          "On y ajoute quelques gouttes d'un indicateur coloré approprié.",
          "À l'aide d'une burette graduée, on verse progressivement la solution titrante jusqu'à l'apparition d'une nouvelle couleur.",
          "On relève alors le volume Véq de solution titrante versée."
        ],
        "conclusion": "C'est le protocole expérimental du §I.1 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un dosage",
          "stepTheme": "Définition d'un dosage",
          "stepBadge": "Définition d'un dosage",
          "paragraphText": "• Dosage : technique expérimentale qui permet de déterminer la concentration molaire inconnue d'une espèce chimique dans une solution.\nC'est aussi la réponse attendue à l'exercice 3 du résumé.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p01_q1",
            "type": "mcq",
            "prompt": "Un dosage est une technique expérimentale qui permet de déterminer :",
            "options": [
              "La concentration molaire inconnue d'une espèce chimique en solution",
              "La masse molaire d'un solide",
              "Le pH de l'eau pure",
              "La température d'une réaction"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du résumé, reprise dans l'intérêt du dosage (§7)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les qualités de la réaction de dosage",
          "stepTheme": "Les qualités de la réaction de dosage",
          "stepBadge": "Les qualités de la réaction de dosage",
          "paragraphText": "La réaction chimique entre l'espèce à doser et le réactif titrant doit être unique, rapide et totale.\nLes réactions acido-basiques étudiées dans la leçon 10 remplissent ces trois conditions.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p01_q2",
            "type": "mcq",
            "prompt": "La réaction utilisée pour un dosage doit être :",
            "options": [
              "Lente et totale",
              "Unique, rapide et totale",
              "Limitée et rapide",
              "Unique mais équilibrée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois qualités exigées par le résumé au §I.2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les deux types de dosages acido-basiques",
          "stepTheme": "Les deux types de dosages acido-basiques",
          "stepBadge": "Les deux types de dosages acido-basiques",
          "paragraphText": "Le résumé distingue deux types de dosages acido-basiques.\nLe dosage pH-métrique suit le pH au pH-mètre ; le dosage colorimétrique repère l'équivalence par le changement de couleur d'un indicateur.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p01_q3",
            "type": "mcq",
            "prompt": "Les deux types de dosages acido-basiques sont :",
            "options": [
              "Le dosage par pesée et le dosage par fusion",
              "Le dosage conductimétrique et le dosage thermique",
              "Le dosage pH-métrique et le dosage colorimétrique",
              "Le dosage direct et le dosage en retour uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les deux types listés dans les généralités du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La solution à doser est dans l'Erlenmeyer",
          "stepTheme": "La solution à doser est dans l'Erlenmeyer",
          "stepBadge": "La solution à doser est dans l'Erlenmeyer",
          "paragraphText": "Dans le protocole, le volume Va de solution à doser est versé dans un Erlenmeyer, avec quelques gouttes d'indicateur coloré.\nLa solution titrante, de concentration connue, est dans la burette graduée.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p01_q4",
            "type": "mcq",
            "prompt": "Dans le montage du dosage colorimétrique, la solution titrante se trouve :",
            "options": [
              "Dans l'Erlenmeyer",
              "Dans une pipette jaugée",
              "Dans un bécher",
              "Dans la burette graduée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le protocole du résumé verse la solution titrante progressivement à l'aide de la burette graduée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le repérage de la fin du dosage",
          "stepTheme": "Le repérage de la fin du dosage",
          "stepBadge": "Le repérage de la fin du dosage",
          "paragraphText": "On verse la solution titrante jusqu'à l'apparition d'une nouvelle couleur de l'indicateur.\nOn relève alors le volume versé : c'est le volume équivalent Véq, utilisé dans les calculs.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p01_q5",
            "type": "mcq",
            "prompt": "En dosage colorimétrique, on arrête de verser la solution titrante :",
            "options": [
              "À l'apparition d'une nouvelle couleur de l'indicateur coloré",
              "Après un volume fixé à l'avance",
              "Quand le mélange bout",
              "Quand le pH atteint 7 dans tous les cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le changement de couleur signale l'équivalence ; on relève alors Véq (protocole du résumé)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La réaction de dosage d'un acide faible",
          "stepTheme": "La réaction de dosage d'un acide faible",
          "stepBadge": "La réaction de dosage d'un acide faible",
          "paragraphText": "Les réactions de dosage listées par le résumé sont celles de la leçon 10 : pour un acide faible dosé par une base forte, AH + OH⁻ → A⁻ + H₂O.\nPour une base faible dosée par un acide fort : B + H₃O⁺ → BH⁺ + H₂O.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p01_q6",
            "type": "mcq",
            "prompt": "La réaction de dosage d'une base faible B par un acide fort s'écrit :",
            "options": [
              "B + OH⁻ → BOH⁻",
              "B + H₃O⁺ → BH⁺ + H₂O",
              "B + H₂O ⇌ BH⁺ + OH⁻",
              "BH⁺ + OH⁻ → B + H₂O"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'équation « acide fort – base faible » des généralités du résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l11_dosage_p01_q1",
          "type": "mcq",
          "prompt": "Un dosage est une technique expérimentale qui permet de déterminer :",
          "options": [
            "La concentration molaire inconnue d'une espèce chimique en solution",
            "La masse molaire d'un solide",
            "Le pH de l'eau pure",
            "La température d'une réaction"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du résumé, reprise dans l'intérêt du dosage (§7)."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p01_q2",
          "type": "mcq",
          "prompt": "La réaction utilisée pour un dosage doit être :",
          "options": [
            "Lente et totale",
            "Unique, rapide et totale",
            "Limitée et rapide",
            "Unique mais équilibrée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois qualités exigées par le résumé au §I.2."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p01_q3",
          "type": "mcq",
          "prompt": "Les deux types de dosages acido-basiques sont :",
          "options": [
            "Le dosage par pesée et le dosage par fusion",
            "Le dosage conductimétrique et le dosage thermique",
            "Le dosage pH-métrique et le dosage colorimétrique",
            "Le dosage direct et le dosage en retour uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les deux types listés dans les généralités du résumé."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p01_q4",
          "type": "mcq",
          "prompt": "Dans le montage du dosage colorimétrique, la solution titrante se trouve :",
          "options": [
            "Dans l'Erlenmeyer",
            "Dans une pipette jaugée",
            "Dans un bécher",
            "Dans la burette graduée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le protocole du résumé verse la solution titrante progressivement à l'aide de la burette graduée."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p01_q5",
          "type": "mcq",
          "prompt": "En dosage colorimétrique, on arrête de verser la solution titrante :",
          "options": [
            "À l'apparition d'une nouvelle couleur de l'indicateur coloré",
            "Après un volume fixé à l'avance",
            "Quand le mélange bout",
            "Quand le pH atteint 7 dans tous les cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le changement de couleur signale l'équivalence ; on relève alors Véq (protocole du résumé)."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p01_q6",
          "type": "mcq",
          "prompt": "La réaction de dosage d'une base faible B par un acide fort s'écrit :",
          "options": [
            "B + OH⁻ → BOH⁻",
            "B + H₃O⁺ → BH⁺ + H₂O",
            "B + H₂O ⇌ BH⁺ + OH⁻",
            "BH⁺ + OH⁻ → B + H₂O"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'équation « acide fort – base faible » des généralités du résumé."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l11_dosage_p02",
      "order": 2,
      "title": "Le dosage colorimétrique du vinaigre",
      "summary": "Vinaigre dilué 10 fois, dosé par la soude : virage au rose violacé à 13 mL, pH = 8,8.",
      "conceptExplanation": "On prélève V₀ = 10 mL de la solution commerciale de vinaigre 8° et on le dilue 10 fois avec de l'eau distillée : on obtient la solution diluée de concentration Ca inconnue (son pH vaut 2,9).\nOn dose 10 mL de cette solution diluée, additionnée de quelques gouttes de phénolphtaléine, par une solution de soude de concentration Cb = 10⁻¹ mol/L versée à la burette.\nAu fur et à mesure de l'ajout, la couleur du mélange passe brusquement de l'incolore au rose violacé et le reste, lorsque le volume versé atteint 13 mL ; le pH du mélange est alors de 8,8.\nQuand la couleur devient rose violacé, la réaction entre le vinaigre et la soude est terminée : l'équivalence acido-basique est atteinte, donc nA (vinaigre) = nB (soude).",
      "keyRule": "Le virage persistant de l'indicateur marque l'équivalence : nA = nB, soit Ca·Va = Cb·VbE.",
      "formulas": [
        {
          "name": "Équation du dosage du vinaigre",
          "formula": "\\mathrm{CH_3COOH + OH^- \\rightarrow CH_3COO^- + H_2O}",
          "note": "L'acide éthanoïque du vinaigre réagit avec les ions hydroxyde de la soude."
        }
      ],
      "workedExample": {
        "title": "Pourquoi diluer le vinaigre avant le dosage ?",
        "statement": "Le vinaigre commercial est à 8° et sa concentration C₀ est élevée. Le résumé prélève 10 mL et le dilue 10 fois avant de doser 10 mL de la solution obtenue. Quel est le lien entre C₀ et la concentration Ca mesurée par le dosage ?",
        "methodSteps": [
          "La dilution conserve la quantité de matière : C₀·V₀ = Ca·(10 × V₀) pour une dilution de facteur 10.",
          "Donc C₀ = 10 × Ca."
        ],
        "conclusion": "Une fois Ca déterminée par le dosage, on remonte à la concentration commerciale par C₀ = 10 × Ca (voir le calcul complet dans le point 4)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Préparer la solution diluée de vinaigre",
          "stepTheme": "Préparer la solution diluée de vinaigre",
          "stepBadge": "Préparer la solution diluée de vinaigre",
          "paragraphText": "On prélève V₀ = 10 mL de vinaigre commercial 8° et on le dilue 10 fois avec de l'eau distillée.\nLa solution diluée obtenue, de concentration Ca inconnue, a un pH de 2,9.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p02_q1",
            "type": "mcq",
            "prompt": "Avant le dosage, le vinaigre commercial est :",
            "options": [
              "Dilué 10 fois avec de l'eau distillée",
              "Concentré par évaporation",
              "Mélangé à la soude",
              "Chauffé à ébullition"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la préparation du §II.1 : dilution au dixième du prélèvement de 10 mL."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le montage : Erlenmeyer et burette",
          "stepTheme": "Le montage : Erlenmeyer et burette",
          "stepBadge": "Le montage : Erlenmeyer et burette",
          "paragraphText": "Le schéma du résumé place 10 mL de solution diluée de vinaigre (incolore) avec quelques gouttes de phénolphtaléine dans l'Erlenmeyer, sur agitateur magnétique.\nLa burette graduée contient la solution de soude de concentration Cb = 10⁻¹ mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p02_q2",
            "type": "mcq",
            "prompt": "La concentration de la solution de soude utilisée pour doser le vinaigre vaut :",
            "options": [
              "10⁻² mol/L",
              "10⁻¹ mol/L",
              "1 mol/L",
              "Elle est inconnue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La soude est le réactif titrant, de concentration connue Cb = 10⁻¹ mol/L (schéma du résumé)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le virage : de l'incolore au rose violacé",
          "stepTheme": "Le virage : de l'incolore au rose violacé",
          "stepBadge": "Le virage : de l'incolore au rose violacé",
          "paragraphText": "Au fur et à mesure de l'ajout de soude, la couleur passe brusquement de l'incolore au rose violacé et le reste.\nCe virage se produit lorsque le volume de soude versé atteint 13 mL, et le pH du mélange est alors égal à 8,8.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p02_q3",
            "type": "mcq",
            "prompt": "Le volume de soude versé au virage de la phénolphtaléine vaut :",
            "options": [
              "8,8 mL",
              "10 mL",
              "13 mL",
              "20 mL"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'observation du §II.3 : le mélange devient rose violacé à 13 mL de soude versée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le virage marque l'équivalence",
          "stepTheme": "Le virage marque l'équivalence",
          "stepBadge": "Le virage marque l'équivalence",
          "paragraphText": "Interprétation du résumé : quand la couleur devient rose violacée, la réaction entre le vinaigre et la soude est terminée.\nL'équivalence acido-basique est atteinte : nA (vinaigre) = nB (soude).",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p02_q4",
            "type": "mcq",
            "prompt": "Au moment du virage persistant de l'indicateur, on a atteint :",
            "options": [
              "La demi-équivalence",
              "Le début de la réaction",
              "Un excès de soude important",
              "L'équivalence acido-basique, avec nA = nB"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'interprétation du §II.4 : le virage signale que les réactifs sont en proportions stœchiométriques."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le rôle de la phénolphtaléine (situation d'évaluation)",
          "stepTheme": "Le rôle de la phénolphtaléine (situation d'évaluation)",
          "stepBadge": "Le rôle de la phénolphtaléine (situation d'évaluation)",
          "paragraphText": "Dans le dosage de l'acide benzoïque de la situation d'évaluation, la phénolphtaléine vire au rose violacé pour 20 mL de soude versée.\nLe corrigé précise son rôle : indicateur coloré dont le changement de couleur marque la fin du dosage et signale l'équivalence.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p02_q5",
            "type": "mcq",
            "prompt": "Le rôle de la phénolphtaléine dans un dosage colorimétrique est :",
            "options": [
              "De marquer, par son changement de couleur, que l'équivalence est atteinte",
              "D'accélérer la réaction",
              "De neutraliser l'acide",
              "De mesurer le pH avec précision"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la réponse du corrigé de l'exercice 2 : l'indicateur signale la fin du dosage, il ne participe pas à la réaction."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le pH au virage : 8,8",
          "stepTheme": "Le pH au virage : 8,8",
          "stepBadge": "Le pH au virage : 8,8",
          "paragraphText": "Au moment du virage, le pH du mélange vaut 8,8 : c'est le pH à l'équivalence de ce dosage d'acide faible par une base forte.\nIl est supérieur à 7, en accord avec la leçon 10 : il reste la base conjuguée CH₃COO⁻.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p02_q6",
            "type": "mcq",
            "prompt": "Le pH à l'équivalence du dosage du vinaigre (acide faible) par la soude vaut environ :",
            "options": [
              "2,9",
              "8,8",
              "7,0",
              "4,8"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé donne pH = 8,8 au virage : mélange basique, car l'équivalence contient l'ion éthanoate."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l11_dosage_p02_q1",
          "type": "mcq",
          "prompt": "Avant le dosage, le vinaigre commercial est :",
          "options": [
            "Dilué 10 fois avec de l'eau distillée",
            "Concentré par évaporation",
            "Mélangé à la soude",
            "Chauffé à ébullition"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la préparation du §II.1 : dilution au dixième du prélèvement de 10 mL."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p02_q2",
          "type": "mcq",
          "prompt": "La concentration de la solution de soude utilisée pour doser le vinaigre vaut :",
          "options": [
            "10⁻² mol/L",
            "10⁻¹ mol/L",
            "1 mol/L",
            "Elle est inconnue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La soude est le réactif titrant, de concentration connue Cb = 10⁻¹ mol/L (schéma du résumé)."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p02_q3",
          "type": "mcq",
          "prompt": "Le volume de soude versé au virage de la phénolphtaléine vaut :",
          "options": [
            "8,8 mL",
            "10 mL",
            "13 mL",
            "20 mL"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'observation du §II.3 : le mélange devient rose violacé à 13 mL de soude versée."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p02_q4",
          "type": "mcq",
          "prompt": "Au moment du virage persistant de l'indicateur, on a atteint :",
          "options": [
            "La demi-équivalence",
            "Le début de la réaction",
            "Un excès de soude important",
            "L'équivalence acido-basique, avec nA = nB"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'interprétation du §II.4 : le virage signale que les réactifs sont en proportions stœchiométriques."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p02_q5",
          "type": "mcq",
          "prompt": "Le rôle de la phénolphtaléine dans un dosage colorimétrique est :",
          "options": [
            "De marquer, par son changement de couleur, que l'équivalence est atteinte",
            "D'accélérer la réaction",
            "De neutraliser l'acide",
            "De mesurer le pH avec précision"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la réponse du corrigé de l'exercice 2 : l'indicateur signale la fin du dosage, il ne participe pas à la réaction."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p02_q6",
          "type": "mcq",
          "prompt": "Le pH à l'équivalence du dosage du vinaigre (acide faible) par la soude vaut environ :",
          "options": [
            "2,9",
            "8,8",
            "7,0",
            "4,8"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé donne pH = 8,8 au virage : mélange basique, car l'équivalence contient l'ion éthanoate."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l11_dosage_p03",
      "order": 3,
      "title": "Le choix de l'indicateur coloré",
      "summary": "L'indicateur est approprié si le pH à l'équivalence appartient à sa zone de virage.",
      "conceptExplanation": "Le pH à l'équivalence du dosage du vinaigre vaut environ 8,8, et la zone de virage de la phénolphtaléine se situe entre 8,2 et 10.\nComme 8,2 < 8,8 < 10, la phénolphtaléine est l'indicateur coloré approprié à ce dosage.\nL'activité d'application 2 généralise : pour un acide fort dosé par une base forte (pHE = 7), le BBT convient ; pour une base forte dosée par un acide fort, le BBT convient aussi ; pour un acide faible dosé par une base forte (pHE > 7), la phénolphtaléine convient ; pour une base faible dosée par un acide fort (pHE < 7), l'hélianthine convient.\nLa documentation ajoute que pour une réaction entre un acide faible et une base faible, on ne peut pas conclure a priori : un calcul avec les pKa est nécessaire.",
      "keyRule": "Choisir l'indicateur dont la zone de virage contient le pH à l'équivalence.",
      "formulas": [],
      "workedExample": {
        "title": "Justifier le choix pour le vinaigre",
        "statement": "Le pH à l'équivalence du dosage du vinaigre vaut 8,8. Les zones de virage sont : hélianthine 3,1–4,4 ; BBT 6–7,6 ; phénolphtaléine 8,2–10. Quel indicateur choisir ?",
        "methodSteps": [
          "On cherche la zone de virage qui contient 8,8.",
          "3,1–4,4 : non ; 6–7,6 : non ; 8,2–10 : oui, car 8,2 < 8,8 < 10."
        ],
        "conclusion": "La phénolphtaléine est l'indicateur approprié : c'est la démarche du §II.5 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le critère de choix",
          "stepTheme": "Le critère de choix",
          "stepBadge": "Le critère de choix",
          "paragraphText": "• Critère : un indicateur coloré est approprié à un dosage si le pH à l'équivalence appartient à sa zone de virage.\nLe virage se produit alors exactement au saut de pH, donc à l'équivalence.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p03_q1",
            "type": "mcq",
            "prompt": "Un indicateur coloré est approprié à un dosage si :",
            "options": [
              "Le pH à l'équivalence appartient à sa zone de virage",
              "Sa couleur est la plus vive",
              "Il est incolore en milieu acide",
              "Sa zone de virage contient toujours 7"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le critère appliqué au §II.5 pour la phénolphtaléine (8,2 < 8,8 < 10)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Dosage fort/fort : le BBT",
          "stepTheme": "Dosage fort/fort : le BBT",
          "stepBadge": "Dosage fort/fort : le BBT",
          "paragraphText": "Pour le dosage d'un acide fort par une base forte, le pHE vaut 7 à 25 °C.\nLa solution de l'activité 2 choisit le BBT, car 7 est compris dans sa zone de virage (6–7,6).",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p03_q2",
            "type": "mcq",
            "prompt": "Pour doser un acide fort par une base forte (pHE = 7), l'indicateur approprié est :",
            "options": [
              "L'hélianthine (3,1–4,4)",
              "Le bleu de bromothymol (6–7,6)",
              "La phénolphtaléine (8,2–10)",
              "Aucun indicateur ne convient"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Réponse 1 de l'activité 2 : la zone de virage du BBT contient le pH d'équivalence 7."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Dosage acide faible/base forte : la phénolphtaléine",
          "stepTheme": "Dosage acide faible/base forte : la phénolphtaléine",
          "stepBadge": "Dosage acide faible/base forte : la phénolphtaléine",
          "paragraphText": "Pour le dosage d'un acide faible par une base forte, le pHE est supérieur à 7 à 25 °C.\nLa solution de l'activité 2 indique que la phénolphtaléine est appropriée, comme pour le vinaigre.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p03_q3",
            "type": "mcq",
            "prompt": "Pour doser un acide faible par une base forte (pHE > 7), on choisit :",
            "options": [
              "L'hélianthine",
              "Le BBT dans tous les cas",
              "La phénolphtaléine",
              "Le rouge de méthyle uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Réponse 3 de l'activité 2 : la zone de virage basique de la phénolphtaléine (8,2–10) encadre le pHE."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Dosage base faible/acide fort : l'hélianthine",
          "stepTheme": "Dosage base faible/acide fort : l'hélianthine",
          "stepBadge": "Dosage base faible/acide fort : l'hélianthine",
          "paragraphText": "Pour le dosage d'une base faible par un acide fort, le pHE est inférieur à 7 à 25 °C.\nLa solution de l'activité 2 indique que l'hélianthine (zone 3,1–4,4) est appropriée.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p03_q4",
            "type": "mcq",
            "prompt": "Pour doser une base faible par un acide fort (pHE < 7), l'indicateur approprié parmi ceux du tableau est :",
            "options": [
              "La phénolphtaléine",
              "Le BBT",
              "Aucun",
              "L'hélianthine"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Réponse 4 de l'activité 2 : l'hélianthine vire dans la zone acide où se situe le pHE."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Dosage base forte par acide fort : encore le BBT",
          "stepTheme": "Dosage base forte par acide fort : encore le BBT",
          "stepBadge": "Dosage base forte par acide fort : encore le BBT",
          "paragraphText": "Piège : le sens du dosage ne change pas le pH d'équivalence fort/fort, qui reste 7.\nLa solution de l'activité 2 choisit donc aussi le BBT pour une base forte dosée par un acide fort.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p03_q5",
            "type": "mcq",
            "prompt": "Pour doser une base forte par un acide fort, le pH à l'équivalence et l'indicateur approprié sont :",
            "options": [
              "pHE = 7 et le BBT",
              "pHE = 5 et l'hélianthine",
              "pHE = 9 et la phénolphtaléine",
              "pHE = 7 et l'hélianthine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Réponse 2 de l'activité 2 : l'équivalence fort/fort est neutre quel que soit le sens du versement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le cas faible/faible : pas de conclusion a priori",
          "stepTheme": "Le cas faible/faible : pas de conclusion a priori",
          "stepBadge": "Le cas faible/faible : pas de conclusion a priori",
          "paragraphText": "La documentation du résumé regroupe les titrages en quatre familles selon la force des réactifs.\nPour la réaction entre un acide faible et une base faible, le pH d'équivalence ne peut pas être prévu a priori : un calcul à l'aide des pKa des couples est nécessaire.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p03_q6",
            "type": "mcq",
            "prompt": "Pour un dosage acide faible/base faible, le choix de l'indicateur exige :",
            "options": [
              "De toujours prendre le BBT",
              "Un calcul préalable à l'aide des pKa des couples mis en jeu",
              "De prendre la phénolphtaléine",
              "Aucun indicateur n'existe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la remarque de la documentation : la quatrième famille ne permet pas de conclure a priori sur la zone d'équivalence."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l11_dosage_p03_q1",
          "type": "mcq",
          "prompt": "Un indicateur coloré est approprié à un dosage si :",
          "options": [
            "Le pH à l'équivalence appartient à sa zone de virage",
            "Sa couleur est la plus vive",
            "Il est incolore en milieu acide",
            "Sa zone de virage contient toujours 7"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le critère appliqué au §II.5 pour la phénolphtaléine (8,2 < 8,8 < 10)."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p03_q2",
          "type": "mcq",
          "prompt": "Pour doser un acide fort par une base forte (pHE = 7), l'indicateur approprié est :",
          "options": [
            "L'hélianthine (3,1–4,4)",
            "Le bleu de bromothymol (6–7,6)",
            "La phénolphtaléine (8,2–10)",
            "Aucun indicateur ne convient"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Réponse 1 de l'activité 2 : la zone de virage du BBT contient le pH d'équivalence 7."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p03_q3",
          "type": "mcq",
          "prompt": "Pour doser un acide faible par une base forte (pHE > 7), on choisit :",
          "options": [
            "L'hélianthine",
            "Le BBT dans tous les cas",
            "La phénolphtaléine",
            "Le rouge de méthyle uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Réponse 3 de l'activité 2 : la zone de virage basique de la phénolphtaléine (8,2–10) encadre le pHE."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p03_q4",
          "type": "mcq",
          "prompt": "Pour doser une base faible par un acide fort (pHE < 7), l'indicateur approprié parmi ceux du tableau est :",
          "options": [
            "La phénolphtaléine",
            "Le BBT",
            "Aucun",
            "L'hélianthine"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Réponse 4 de l'activité 2 : l'hélianthine vire dans la zone acide où se situe le pHE."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p03_q5",
          "type": "mcq",
          "prompt": "Pour doser une base forte par un acide fort, le pH à l'équivalence et l'indicateur approprié sont :",
          "options": [
            "pHE = 7 et le BBT",
            "pHE = 5 et l'hélianthine",
            "pHE = 9 et la phénolphtaléine",
            "pHE = 7 et l'hélianthine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Réponse 2 de l'activité 2 : l'équivalence fort/fort est neutre quel que soit le sens du versement."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p03_q6",
          "type": "mcq",
          "prompt": "Pour un dosage acide faible/base faible, le choix de l'indicateur exige :",
          "options": [
            "De toujours prendre le BBT",
            "Un calcul préalable à l'aide des pKa des couples mis en jeu",
            "De prendre la phénolphtaléine",
            "Aucun indicateur n'existe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la remarque de la documentation : la quatrième famille ne permet pas de conclure a priori sur la zone d'équivalence."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l11_dosage_p04",
      "order": 4,
      "title": "Concentrations à l'équivalence",
      "summary": "Ca = 0,13 mol/L pour le vinaigre dilué, C₀ = 1,3 mol/L pour le commercial, et les espèces du mélange à l'équivalence.",
      "conceptExplanation": "À l'équivalence du dosage du vinaigre : Ca·Va = Cb·VbE, d'où la concentration de la solution diluée, Ca = 0,13 mol/L.\nLa solution commerciale, dix fois plus concentrée, vaut C₀ = 10 × Ca = 1,3 mol/L.\nÀ l'équivalence, les espèces du mélange sont les cations H₃O⁺ et Na⁺, les anions OH⁻ et CH₃COO⁻, et les molécules H₂O et CH₃COOH ; leurs concentrations valent [H₃O⁺] = 1,6 × 10⁻⁹ mol/L, [OH⁻] = 6,25 × 10⁻⁶ mol/L et [Na⁺] = 56 × 10⁻³ mol/L.\nPar l'électroneutralité, [CH₃COO⁻] ≈ [Na⁺], et par conservation de la matière, [CH₃COOH] ≈ [OH⁻] = 6,25 × 10⁻⁶ mol/L : presque tout l'acide a été converti.",
      "keyRule": "À l'équivalence : Ca = Cb·VbE/Va ; puis on remonte à la solution mère par le facteur de dilution.",
      "formulas": [
        {
          "name": "Concentration de la solution dosée",
          "formula": "C_a = \\frac{C_b \\times V_{bE}}{V_a}",
          "note": "VbE est le volume équivalent relevé au virage ou sur la courbe."
        },
        {
          "name": "Retour à la solution commerciale",
          "formula": "C_0 = k \\times C_a",
          "note": "k est le facteur de dilution (k = 10 pour le vinaigre du résumé)."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application 1 : doser par la potasse",
        "statement": "On dose Va = 15 mL d'une solution d'acide éthanoïque par de l'hydroxyde de potassium (Cb = 10⁻² mol/L). L'équivalence est atteinte pour Vb = 16 mL. Calcule Ca.",
        "methodSteps": [
          "À l'équivalence : n(CH₃COOH) = n(OH⁻), soit Ca·Va = Cb·VbE.",
          "Ca = Cb·VbE/Va.",
          "Le résumé obtient Ca = 1,06 × 10⁻² mol/L."
        ],
        "conclusion": "C'est la solution de l'activité d'application 1 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "La relation de calcul à l'équivalence",
          "stepTheme": "La relation de calcul à l'équivalence",
          "stepBadge": "La relation de calcul à l'équivalence",
          "paragraphText": "À l'équivalence, nA = nB s'écrit Ca·Va = Cb·VbE.\nOn en tire la concentration inconnue : Ca = Cb·VbE/Va, toutes les autres grandeurs étant connues ou mesurées.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p04_q1",
            "type": "mcq",
            "prompt": "La concentration de la solution dosée se calcule par :",
            "options": [
              "$C_a = C_b \\times V_{bE}/V_a$",
              "$C_a = C_b \\times V_a/V_{bE}$",
              "$C_a = C_b + V_{bE}$",
              "$C_a = V_{bE}/(C_b \\times V_a)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la relation du §II.6.1, issue de l'égalité des quantités de matière à l'équivalence."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le résultat pour le vinaigre dilué",
          "stepTheme": "Le résultat pour le vinaigre dilué",
          "stepBadge": "Le résultat pour le vinaigre dilué",
          "paragraphText": "Avec Cb = 10⁻¹ mol/L, VbE = 13 mL et Va = 10 mL, le résumé calcule la concentration de la solution diluée.\nIl obtient Ca = 0,13 mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p04_q2",
            "type": "mcq",
            "prompt": "La concentration de la solution diluée de vinaigre vaut :",
            "options": [
              "0,013 mol/L",
              "0,13 mol/L",
              "1,3 mol/L",
              "0,077 mol/L"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ca = Cb·VbE/Va = 0,13 mol/L d'après le calcul du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Remonter à la concentration commerciale",
          "stepTheme": "Remonter à la concentration commerciale",
          "stepBadge": "Remonter à la concentration commerciale",
          "paragraphText": "Le facteur de dilution est k = C₀/Ca = 10 pour le vinaigre étudié.\nDonc C₀ = 10 × Ca = 1,3 mol/L : c'est la concentration de la solution commerciale.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p04_q3",
            "type": "mcq",
            "prompt": "La concentration du vinaigre commercial (dilué 10 fois avant dosage) vaut :",
            "options": [
              "0,13 mol/L",
              "0,013 mol/L",
              "1,3 mol/L",
              "13 mol/L"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C₀ = 10 × Ca = 1,3 mol/L : résultat du §II.6.2 du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les espèces présentes à l'équivalence",
          "stepTheme": "Les espèces présentes à l'équivalence",
          "stepBadge": "Les espèces présentes à l'équivalence",
          "paragraphText": "L'inventaire du résumé à l'équivalence du dosage du vinaigre : cations H₃O⁺ et Na⁺ ; anions OH⁻ et CH₃COO⁻.\nEt les molécules H₂O et CH₃COOH, cette dernière en très faible quantité.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p04_q4",
            "type": "mcq",
            "prompt": "À l'équivalence du dosage du vinaigre, l'anion majoritaire du mélange est :",
            "options": [
              "OH⁻",
              "Cl⁻",
              "Na⁺",
              "CH₃COO⁻"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'électroneutralité donne [CH₃COO⁻] ≈ [Na⁺] = 56 × 10⁻³ mol/L, très supérieure à [OH⁻]."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "[CH₃COOH] à l'équivalence : presque nulle",
          "stepTheme": "[CH₃COOH] à l'équivalence : presque nulle",
          "stepBadge": "[CH₃COOH] à l'équivalence : presque nulle",
          "paragraphText": "Par conservation de la matière et électroneutralité, le résumé obtient [CH₃COOH] ≈ [OH⁻] = 6,25 × 10⁻⁶ mol/L à l'équivalence.\nPiège : à l'équivalence, l'acide n'a pas totalement disparu, mais il n'en reste qu'une trace, régénérée par la réaction de CH₃COO⁻ avec l'eau.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p04_q5",
            "type": "mcq",
            "prompt": "À l'équivalence du dosage du vinaigre, [CH₃COOH] vaut environ :",
            "options": [
              "6,25 × 10⁻⁶ mol/L, égale à [OH⁻]",
              "0,13 mol/L",
              "56 × 10⁻³ mol/L",
              "Exactement 0 mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le résultat du §II.6.3.2 : il reste une trace d'acide, égale à [OH⁻]."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "[Na⁺] à l'équivalence",
          "stepTheme": "[Na⁺] à l'équivalence",
          "stepBadge": "[Na⁺] à l'équivalence",
          "paragraphText": "L'ion sodium, spectateur, a pour concentration $[Na^+] = C_b V_{bE}/(V_a + V_{bE})$.\nLe résumé calcule [Na⁺] = 56 × 10⁻³ mol/L à l'équivalence du dosage du vinaigre.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p04_q6",
            "type": "mcq",
            "prompt": "À l'équivalence du dosage du vinaigre, la concentration des ions sodium vaut :",
            "options": [
              "10⁻¹ mol/L",
              "56 × 10⁻³ mol/L",
              "6,25 × 10⁻⁶ mol/L",
              "1,6 × 10⁻⁹ mol/L"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la valeur calculée au §II.6.3.2 ; 1,6 × 10⁻⁹ mol/L est [H₃O⁺] et 6,25 × 10⁻⁶ mol/L est [OH⁻]."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l11_dosage_p04_q1",
          "type": "mcq",
          "prompt": "La concentration de la solution dosée se calcule par :",
          "options": [
            "$C_a = C_b \\times V_{bE}/V_a$",
            "$C_a = C_b \\times V_a/V_{bE}$",
            "$C_a = C_b + V_{bE}$",
            "$C_a = V_{bE}/(C_b \\times V_a)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la relation du §II.6.1, issue de l'égalité des quantités de matière à l'équivalence."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p04_q2",
          "type": "mcq",
          "prompt": "La concentration de la solution diluée de vinaigre vaut :",
          "options": [
            "0,013 mol/L",
            "0,13 mol/L",
            "1,3 mol/L",
            "0,077 mol/L"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ca = Cb·VbE/Va = 0,13 mol/L d'après le calcul du résumé."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p04_q3",
          "type": "mcq",
          "prompt": "La concentration du vinaigre commercial (dilué 10 fois avant dosage) vaut :",
          "options": [
            "0,13 mol/L",
            "0,013 mol/L",
            "1,3 mol/L",
            "13 mol/L"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C₀ = 10 × Ca = 1,3 mol/L : résultat du §II.6.2 du résumé."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p04_q4",
          "type": "mcq",
          "prompt": "À l'équivalence du dosage du vinaigre, l'anion majoritaire du mélange est :",
          "options": [
            "OH⁻",
            "Cl⁻",
            "Na⁺",
            "CH₃COO⁻"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'électroneutralité donne [CH₃COO⁻] ≈ [Na⁺] = 56 × 10⁻³ mol/L, très supérieure à [OH⁻]."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p04_q5",
          "type": "mcq",
          "prompt": "À l'équivalence du dosage du vinaigre, [CH₃COOH] vaut environ :",
          "options": [
            "6,25 × 10⁻⁶ mol/L, égale à [OH⁻]",
            "0,13 mol/L",
            "56 × 10⁻³ mol/L",
            "Exactement 0 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le résultat du §II.6.3.2 : il reste une trace d'acide, égale à [OH⁻]."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p04_q6",
          "type": "mcq",
          "prompt": "À l'équivalence du dosage du vinaigre, la concentration des ions sodium vaut :",
          "options": [
            "10⁻¹ mol/L",
            "56 × 10⁻³ mol/L",
            "6,25 × 10⁻⁶ mol/L",
            "1,6 × 10⁻⁹ mol/L"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la valeur calculée au §II.6.3.2 ; 1,6 × 10⁻⁹ mol/L est [H₃O⁺] et 6,25 × 10⁻⁶ mol/L est [OH⁻]."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l11_dosage_p05",
      "order": 5,
      "title": "Le dosage pH-métrique et ses exercices",
      "summary": "Lire E sur la courbe par les tangentes parallèles, puis appliquer Ca·Va = Cb·VbE.",
      "conceptExplanation": "En dosage pH-métrique, on utilise le graphe pH = f(V), où V est le volume de réactif versé, lu au pH-mètre.\nOn trace la courbe pH-métrique et on détermine le point d'équivalence E par la méthode des tangentes parallèles.\nConnaissant pHE et VE, on utilise l'équation-bilan de la réaction acido-basique pour déterminer la concentration de la solution dosée.\nC'est la démarche de l'exercice 1 (acide méthanoïque : VBE ≈ 21,5 mL, CA = 4,3 × 10⁻² mol/L) et de l'exercice 3 (acide fort HA : CA = 0,11 mol/L).",
      "keyRule": "pH-métrie : courbe → tangentes parallèles → (VE, pHE) → relation d'équivalence → concentration.",
      "formulas": [
        {
          "name": "pH d'une solution d'acide fort",
          "formula": "\\mathrm{pH} = -\\log C_A",
          "note": "Avec CA = [H₃O⁺] pour un acide fort totalement ionisé (exercice 5)."
        }
      ],
      "workedExample": {
        "title": "Le dosage de l'acide iodhydrique (exercice 5)",
        "statement": "On dose VA = 10 mL d'une solution d'acide iodhydrique (acide fort) par de la soude (CB = 10⁻² mol/L) ; l'équivalence est repérée à VBE = 22 mL. Calcule CA puis le pH de la solution d'acide.",
        "methodSteps": [
          "À l'équivalence : CA·VA = CB·VBE, d'où CA = 2,2 × 10⁻² mol/L.",
          "L'acide iodhydrique est fort : pH = −log CA.",
          "On obtient pH = 1,65."
        ],
        "conclusion": "Ce sont les résultats de la solution de l'exercice 5, où l'indicateur approprié est le BBT (pHE = 7)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le principe du dosage pH-métrique",
          "stepTheme": "Le principe du dosage pH-métrique",
          "stepBadge": "Le principe du dosage pH-métrique",
          "paragraphText": "• Dosage pH-métrique : dosage où l'on suit le pH du mélange au pH-mètre et où l'on trace la courbe pH = f(V).\nLe point d'équivalence E est déterminé par la méthode des tangentes parallèles.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p05_q1",
            "type": "mcq",
            "prompt": "En dosage pH-métrique, le point d'équivalence est déterminé :",
            "options": [
              "Par la méthode des tangentes parallèles sur la courbe pH = f(V)",
              "Par un changement de couleur",
              "Par la pesée du mélange",
              "Par le pH initial seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la méthode décrite au §III du résumé (remarque : le pH se lit au pH-mètre)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Exercice 1 : le volume équivalent lu sur la courbe",
          "stepTheme": "Exercice 1 : le volume équivalent lu sur la courbe",
          "stepBadge": "Exercice 1 : le volume équivalent lu sur la courbe",
          "paragraphText": "Pour le dosage de l'acide méthanoïque (VA = 50,0 mL) par la soude (CB = 0,10 mol/L), la courbe pH-métrique est fournie.\nPar la méthode des tangentes, la solution trouve VBE ≈ 21,5 mL.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p05_q2",
            "type": "mcq",
            "prompt": "Dans l'exercice 1, le volume de soude versé à l'équivalence vaut environ :",
            "options": [
              "50 mL",
              "21,5 mL",
              "10 mL",
              "43 mL"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la valeur lue sur la courbe par la méthode des tangentes dans la solution de l'exercice 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Exercice 1 : la concentration de l'acide méthanoïque",
          "stepTheme": "Exercice 1 : la concentration de l'acide méthanoïque",
          "stepBadge": "Exercice 1 : la concentration de l'acide méthanoïque",
          "paragraphText": "L'équation du dosage est HCOOH + OH⁻ → HCOO⁻ + H₂O.\nÀ l'équivalence, CA = CB·VBE/VA : la solution obtient CA = 4,3 × 10⁻² mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p05_q3",
            "type": "mcq",
            "prompt": "La concentration de la solution d'acide méthanoïque de l'exercice 1 vaut :",
            "options": [
              "0,10 mol/L",
              "4,3 × 10⁻³ mol/L",
              "4,3 × 10⁻² mol/L",
              "2,15 × 10⁻² mol/L"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par la relation d'équivalence CA = CB·VBE/VA, la solution de l'exercice 1 obtient 4,3 × 10⁻² mol/L."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Exercice 3 : justifier l'indicateur par la courbe",
          "stepTheme": "Exercice 3 : justifier l'indicateur par la courbe",
          "stepBadge": "Exercice 3 : justifier l'indicateur par la courbe",
          "paragraphText": "Pour le dosage d'un acide fort HA par une base forte, la courbe montre un pH à l'équivalence égal à 7.\nLa solution choisit le BBT car 7 est contenu dans sa zone de virage (6–7,6), puis calcule CA = 0,11 mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p05_q4",
            "type": "mcq",
            "prompt": "Dans l'exercice 3, la concentration de l'acide fort dosé (VA = 10 mL, CB = 10⁻¹ mol/L) vaut :",
            "options": [
              "0,10 mol/L",
              "0,011 mol/L",
              "1,1 mol/L",
              "0,11 mol/L"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le volume équivalent lu sur la courbe (11 mL) donne CA = CB·VBE/VA = 0,11 mol/L."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le pH d'un acide fort se déduit de sa concentration",
          "stepTheme": "Le pH d'un acide fort se déduit de sa concentration",
          "stepBadge": "Le pH d'un acide fort se déduit de sa concentration",
          "paragraphText": "L'exercice 5 rappelle que pour une solution aqueuse d'acide fort, pH = −log CA, avec CA = [H₃O⁺].\nPour l'acide iodhydrique dosé (CA = 2,2 × 10⁻² mol/L), on obtient pH = 1,65.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p05_q5",
            "type": "mcq",
            "prompt": "Le pH de la solution d'acide iodhydrique de l'exercice 5 (CA = 2,2 × 10⁻² mol/L) vaut :",
            "options": [
              "1,65",
              "2,2",
              "0,66",
              "12,35"
            ],
            "correctAnswerIndex": 0,
            "explanation": "pH = −log(2,2 × 10⁻²) ≈ 1,65 : c'est le calcul final de la solution de l'exercice 5."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'indicateur de l'exercice 5 : le BBT",
          "stepTheme": "L'indicateur de l'exercice 5 : le BBT",
          "stepBadge": "L'indicateur de l'exercice 5 : le BBT",
          "paragraphText": "L'acide iodhydrique est un acide fort dosé par une base forte : pHE = 7.\nLa solution choisit le bleu de bromothymol car sa zone de virage (6–7,6) contient le pH à l'équivalence.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p05_q6",
            "type": "mcq",
            "prompt": "Pour le dosage de l'acide iodhydrique par la soude, l'indicateur approprié est :",
            "options": [
              "L'hélianthine",
              "Le bleu de bromothymol (BBT)",
              "La phénolphtaléine",
              "Le vert de malachite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Réponse de l'exercice 5 : 6 < pHE = 7 < 7,6, la zone de virage du BBT contient le pH d'équivalence."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l11_dosage_p05_q1",
          "type": "mcq",
          "prompt": "En dosage pH-métrique, le point d'équivalence est déterminé :",
          "options": [
            "Par la méthode des tangentes parallèles sur la courbe pH = f(V)",
            "Par un changement de couleur",
            "Par la pesée du mélange",
            "Par le pH initial seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la méthode décrite au §III du résumé (remarque : le pH se lit au pH-mètre)."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p05_q2",
          "type": "mcq",
          "prompt": "Dans l'exercice 1, le volume de soude versé à l'équivalence vaut environ :",
          "options": [
            "50 mL",
            "21,5 mL",
            "10 mL",
            "43 mL"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la valeur lue sur la courbe par la méthode des tangentes dans la solution de l'exercice 1."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p05_q3",
          "type": "mcq",
          "prompt": "La concentration de la solution d'acide méthanoïque de l'exercice 1 vaut :",
          "options": [
            "0,10 mol/L",
            "4,3 × 10⁻³ mol/L",
            "4,3 × 10⁻² mol/L",
            "2,15 × 10⁻² mol/L"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par la relation d'équivalence CA = CB·VBE/VA, la solution de l'exercice 1 obtient 4,3 × 10⁻² mol/L."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p05_q4",
          "type": "mcq",
          "prompt": "Dans l'exercice 3, la concentration de l'acide fort dosé (VA = 10 mL, CB = 10⁻¹ mol/L) vaut :",
          "options": [
            "0,10 mol/L",
            "0,011 mol/L",
            "1,1 mol/L",
            "0,11 mol/L"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le volume équivalent lu sur la courbe (11 mL) donne CA = CB·VBE/VA = 0,11 mol/L."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p05_q5",
          "type": "mcq",
          "prompt": "Le pH de la solution d'acide iodhydrique de l'exercice 5 (CA = 2,2 × 10⁻² mol/L) vaut :",
          "options": [
            "1,65",
            "2,2",
            "0,66",
            "12,35"
          ],
          "correctAnswerIndex": 0,
          "explanation": "pH = −log(2,2 × 10⁻²) ≈ 1,65 : c'est le calcul final de la solution de l'exercice 5."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p05_q6",
          "type": "mcq",
          "prompt": "Pour le dosage de l'acide iodhydrique par la soude, l'indicateur approprié est :",
          "options": [
            "L'hélianthine",
            "Le bleu de bromothymol (BBT)",
            "La phénolphtaléine",
            "Le vert de malachite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Réponse de l'exercice 5 : 6 < pHE = 7 < 7,6, la zone de virage du BBT contient le pH d'équivalence."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l11_dosage_p06",
      "order": 6,
      "title": "Applications : acide benzoïque et vinaigre du commerce",
      "summary": "La situation d'évaluation (acide benzoïque) et l'exercice 4 (concentration d'une bouteille de vinaigre).",
      "conceptExplanation": "Dans la situation d'évaluation, on dose Va = 50 mL d'une solution d'acide benzoïque par une solution de soude (Cb = 10⁻¹ mol/L) ; la phénolphtaléine vire au rose violacé pour Vb = 20 mL de soude versée.\nL'équation du dosage est C₆H₅COOH + OH⁻ → C₆H₅COO⁻ + H₂O, et la relation d'équivalence donne Ca = 4 × 10⁻² mol/L.\nÀ l'équivalence, le mélange est basique : c'est une solution de benzoate de sodium.\nDans l'exercice 4, un vinaigre est dilué, puis 10 mL de la solution diluée sont dosés par de l'hydroxyde de potassium (C₂ = 10⁻² mol/L) avec un volume équivalent VE = 11,5 mL, d'où la concentration de la solution diluée C₁ = 1,15 × 10⁻² mol/L, puis celle de la bouteille par le facteur de dilution.",
      "keyRule": "Toujours la même chaîne : virage ou courbe → Véq → Ca·Va = Cb·Véq → facteur de dilution si besoin.",
      "formulas": [
        {
          "name": "Équation du dosage de l'acide benzoïque",
          "formula": "\\mathrm{C_6H_5COOH + OH^- \\rightarrow C_6H_5COO^- + H_2O}",
          "note": "Acide faible dosé par une base forte : mélange basique à l'équivalence."
        }
      ],
      "workedExample": {
        "title": "La concentration de l'acide benzoïque (situation d'évaluation)",
        "statement": "Va = 50 mL d'acide benzoïque dosés par la soude (Cb = 10⁻¹ mol/L), virage à Vb = 20 mL. Détermine Ca et la nature du mélange à l'équivalence.",
        "methodSteps": [
          "À l'équivalence : n(C₆H₅COOH) = n(OH⁻), soit Ca·Va = Cb·VbE.",
          "Ca = Cb·VbE/Va = 4 × 10⁻² mol/L.",
          "À l'équivalence, le mélange contient le benzoate de sodium : il est basique."
        ],
        "conclusion": "Ce sont les réponses du corrigé de la situation d'évaluation (repris en exercice 2)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le résultat de la situation d'évaluation",
          "stepTheme": "Le résultat de la situation d'évaluation",
          "stepBadge": "Le résultat de la situation d'évaluation",
          "paragraphText": "Le virage de la phénolphtaléine a lieu pour 20 mL de soude (Cb = 10⁻¹ mol/L) versés dans 50 mL de solution d'acide benzoïque.\nLe corrigé en déduit Ca = 4 × 10⁻² mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p06_q1",
            "type": "mcq",
            "prompt": "La concentration de la solution d'acide benzoïque de la situation d'évaluation vaut :",
            "options": [
              "4 × 10⁻² mol/L",
              "4 × 10⁻¹ mol/L",
              "2,5 × 10⁻² mol/L",
              "10⁻¹ mol/L"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La relation Ca = Cb·VbE/Va donne 4 × 10⁻² mol/L (corrigé de l'exercice 2)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le mélange à l'équivalence est basique",
          "stepTheme": "Le mélange à l'équivalence est basique",
          "stepBadge": "Le mélange à l'équivalence est basique",
          "paragraphText": "À l'équivalence du dosage de l'acide benzoïque, tout l'acide est converti en ion benzoate.\nLe corrigé conclut : le mélange est basique, c'est une solution de benzoate de sodium.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p06_q2",
            "type": "mcq",
            "prompt": "À l'équivalence du dosage de l'acide benzoïque par la soude, le mélange est :",
            "options": [
              "Neutre",
              "Basique (solution de benzoate de sodium)",
              "Acide",
              "Une solution tampon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Réponse 5 du corrigé : la base conjuguée de l'acide faible rend le mélange basique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Exercice 4 : la démarche en deux temps",
          "stepTheme": "Exercice 4 : la démarche en deux temps",
          "stepBadge": "Exercice 4 : la démarche en deux temps",
          "paragraphText": "Dans l'exercice 4, on prélève 5 mL de vinaigre de la bouteille, on le dilue pour obtenir la solution S₁.\nOn dose ensuite 10 mL de S₁ par l'hydroxyde de potassium : on obtient d'abord C₁, puis la concentration de la bouteille par le facteur de dilution.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p06_q3",
            "type": "mcq",
            "prompt": "Dans l'exercice 4, la concentration de la bouteille de vinaigre s'obtient à partir de C₁ par :",
            "options": [
              "C₀ = C₁, sans correction",
              "C₀ = C₁ divisée par le facteur de dilution",
              "C₀ = C₁ multipliée par le facteur de dilution",
              "C₀ = C₁ + 10⁻²"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La dilution conserve la quantité de matière : C₀·V₀ = C₁·V₁, donc C₀ = k × C₁ où k est le facteur de dilution."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Exercice 4 : la concentration de la solution diluée",
          "stepTheme": "Exercice 4 : la concentration de la solution diluée",
          "stepBadge": "Exercice 4 : la concentration de la solution diluée",
          "paragraphText": "Le changement de teinte de la phénolphtaléine est obtenu pour VE = 11,5 mL d'hydroxyde de potassium (C₂ = 10⁻² mol/L) versés dans 10 mL de S₁.\nLa solution calcule C₁ = 1,15 × 10⁻² mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p06_q4",
            "type": "mcq",
            "prompt": "La concentration C₁ de la solution diluée de l'exercice 4 vaut :",
            "options": [
              "1,15 × 10⁻³ mol/L",
              "10⁻² mol/L",
              "1,15 × 10⁻¹ mol/L",
              "1,15 × 10⁻² mol/L"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La relation C₁ = C₂·VE/V donne 1,15 × 10⁻² mol/L (solution de l'exercice 4)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier le facteur de dilution",
          "stepTheme": "Ne pas oublier le facteur de dilution",
          "stepBadge": "Ne pas oublier le facteur de dilution",
          "paragraphText": "Piège classique des dosages de produits commerciaux : le résultat du dosage donne la concentration de la solution diluée.\nPour le vinaigre du cours, oublier le facteur 10 donnerait 0,13 mol/L au lieu de la concentration commerciale 1,3 mol/L.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p06_q5",
            "type": "mcq",
            "prompt": "Après un dosage sur solution diluée, la concentration du produit commercial s'obtient :",
            "options": [
              "En multipliant le résultat du dosage par le facteur de dilution",
              "Directement, sans correction",
              "En ajoutant le volume équivalent",
              "En divisant par le facteur de dilution"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la démarche du §II.6.2 (C₀ = 10 × Ca) et de l'exercice 4 : la solution mère est plus concentrée que la solution dosée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'intérêt du dosage",
          "stepTheme": "L'intérêt du dosage",
          "stepBadge": "L'intérêt du dosage",
          "paragraphText": "Le résumé conclut la leçon sur l'intérêt du dosage : déterminer la concentration molaire volumique d'une espèce chimique présente dans une solution.\nC'est ainsi que l'élève de la situation d'apprentissage peut vérifier la teneur en acide éthanoïque du vinaigre.",
          "exercise": {
            "id": "terminale_c_chimie_l11_dosage_p06_q6",
            "type": "mcq",
            "prompt": "L'intérêt pratique du dosage du vinaigre est de vérifier :",
            "options": [
              "Sa couleur",
              "Sa concentration en acide éthanoïque",
              "Sa température d'ébullition",
              "Sa masse volumique uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'objectif de la situation d'apprentissage : contrôler la teneur réelle du produit commercial."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l11_dosage_p06_q1",
          "type": "mcq",
          "prompt": "La concentration de la solution d'acide benzoïque de la situation d'évaluation vaut :",
          "options": [
            "4 × 10⁻² mol/L",
            "4 × 10⁻¹ mol/L",
            "2,5 × 10⁻² mol/L",
            "10⁻¹ mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La relation Ca = Cb·VbE/Va donne 4 × 10⁻² mol/L (corrigé de l'exercice 2)."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p06_q2",
          "type": "mcq",
          "prompt": "À l'équivalence du dosage de l'acide benzoïque par la soude, le mélange est :",
          "options": [
            "Neutre",
            "Basique (solution de benzoate de sodium)",
            "Acide",
            "Une solution tampon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Réponse 5 du corrigé : la base conjuguée de l'acide faible rend le mélange basique."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p06_q3",
          "type": "mcq",
          "prompt": "Dans l'exercice 4, la concentration de la bouteille de vinaigre s'obtient à partir de C₁ par :",
          "options": [
            "C₀ = C₁, sans correction",
            "C₀ = C₁ divisée par le facteur de dilution",
            "C₀ = C₁ multipliée par le facteur de dilution",
            "C₀ = C₁ + 10⁻²"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La dilution conserve la quantité de matière : C₀·V₀ = C₁·V₁, donc C₀ = k × C₁ où k est le facteur de dilution."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p06_q4",
          "type": "mcq",
          "prompt": "La concentration C₁ de la solution diluée de l'exercice 4 vaut :",
          "options": [
            "1,15 × 10⁻³ mol/L",
            "10⁻² mol/L",
            "1,15 × 10⁻¹ mol/L",
            "1,15 × 10⁻² mol/L"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La relation C₁ = C₂·VE/V donne 1,15 × 10⁻² mol/L (solution de l'exercice 4)."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p06_q5",
          "type": "mcq",
          "prompt": "Après un dosage sur solution diluée, la concentration du produit commercial s'obtient :",
          "options": [
            "En multipliant le résultat du dosage par le facteur de dilution",
            "Directement, sans correction",
            "En ajoutant le volume équivalent",
            "En divisant par le facteur de dilution"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la démarche du §II.6.2 (C₀ = 10 × Ca) et de l'exercice 4 : la solution mère est plus concentrée que la solution dosée."
        },
        {
          "id": "terminale_c_chimie_l11_dosage_p06_q6",
          "type": "mcq",
          "prompt": "L'intérêt pratique du dosage du vinaigre est de vérifier :",
          "options": [
            "Sa couleur",
            "Sa concentration en acide éthanoïque",
            "Sa température d'ébullition",
            "Sa masse volumique uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'objectif de la situation d'apprentissage : contrôler la teneur réelle du produit commercial."
        }
      ]
    }
  ]
};
