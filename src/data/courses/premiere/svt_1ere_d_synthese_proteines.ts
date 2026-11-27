import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 5 : La synthèse des protéines » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2789
export const SVT_1ERE_D_L05_SYNTHESE_PROTEINES: CurriculumChapter = {
  "id": "premiere_d_svt_l05_synthese_proteines",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 5,
  "title": "Leçon 5 : La synthèse des protéines",
  "summary": "On identifie les acteurs de la synthèse des protéines, on décrit le code génétique, puis le mécanisme en deux étapes : la transcription dans le noyau et la traduction au ribosome.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2789",
  "points": [
    {
      "id": "premiere_d_svt_l05_synthese_proteines_p01",
      "order": 1,
      "title": "Les acteurs de la synthèse des protéines : ADN, ARN et ribosome",
      "summary": "Présenter les acteurs de la biosynthèse des protéines et leurs structures.",
      "conceptExplanation": "Divers acteurs interviennent dans la biosynthèse des protéines : l’ADN, l’ARN et le ribosome.\nL’ADN, acide désoxyribonucléique, est constitué par deux brins complémentaires : il est bicaténaire et localisé dans le noyau.\nL’ARN, acide ribonucléique, est constitué par un seul brin : il est monocaténaire, et on en distingue trois types — l’ARN messager, l’ARN de transfert, qui diffère des autres par sa structure et sa forme, et l’ARN ribosomial.\nLe ribosome est composé de deux sous-unités, une petite et une grande.\nLa cellule synthétise donc les protéines grâce à l’ADN, à l’ARN et aux ribosomes.",
      "keyRule": "ADN bicaténaire dans le noyau, ARN monocaténaire en trois types, ribosome à deux sous-unités.",
      "formulas": [],
      "workedExample": {
        "title": "Associer les notions du code génétique à leurs définitions",
        "statement": "L’activité d’application associe codon, codon initiateur, codon stop, anti-codon et code redondant à leurs définitions. Avant cela, rappelle les acteurs matériels de la synthèse.",
        "methodSteps": [
          "L’ADN fournit l’information, dans le noyau, sous forme de deux brins complémentaires.",
          "L’ARN messager transporte l’information, l’ARN de transfert apporte les acides aminés, l’ARN ribosomial compose le ribosome.",
          "Le ribosome, à deux sous-unités, est le siège de l’assemblage de la protéine."
        ],
        "conclusion": "Les acteurs sont l’ADN, les trois types d’ARN et le ribosome."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’ADN, bicaténaire et nucléaire",
          "stepTheme": "L’ADN, bicaténaire et nucléaire",
          "stepBadge": "L’ADN, bicaténaire et nucléaire",
          "paragraphText": "• ADN : acide désoxyribonucléique, constitué par deux brins complémentaires.\nIl est localisé dans le noyau de la cellule.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p01_q1",
            "type": "mcq",
            "prompt": "L’ADN est :",
            "options": [
              "Monocaténaire, dans le cytoplasme",
              "Bicaténaire, constitué de deux brins complémentaires, localisé dans le noyau",
              "Composé d’acides aminés",
              "Un type de ribosome"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats de la leçon : l’ADN a deux brins complémentaires et se trouve dans le noyau."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’ARN, monocaténaire en trois types",
          "stepTheme": "L’ARN, monocaténaire en trois types",
          "stepBadge": "L’ARN, monocaténaire en trois types",
          "paragraphText": "• ARN : acide ribonucléique, constitué par un seul brin.\nOn distingue l’ARN messager, l’ARN de transfert et l’ARN ribosomial.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p01_q2",
            "type": "mcq",
            "prompt": "L’ARN est constitué :",
            "options": [
              "De deux brins complémentaires",
              "D’un seul brin, et il existe en trois types : messager, de transfert et ribosomial",
              "Uniquement d’uracile",
              "De protéines"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon décrit l’ARN comme monocaténaire, en trois types."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rôle particulier de l’ARN de transfert",
          "stepTheme": "Le rôle particulier de l’ARN de transfert",
          "stepBadge": "Le rôle particulier de l’ARN de transfert",
          "paragraphText": "L’ARN de transfert diffère des autres ARN par sa structure et sa forme.\nIl porte un anticodon et transporte l’acide aminé correspondant pendant la traduction.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p01_q3",
            "type": "mcq",
            "prompt": "L’ARN de transfert se distingue des autres ARN par :",
            "options": [
              "Sa localisation dans le noyau",
              "Sa structure et sa forme, avec un anticodon",
              "Ses deux brins",
              "Son absence de nucléotides"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon souligne que l’ARNt diffère des autres par sa structure et sa forme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le ribosome à deux sous-unités",
          "stepTheme": "Le ribosome à deux sous-unités",
          "stepBadge": "Le ribosome à deux sous-unités",
          "paragraphText": "• Ribosome : acteur de la synthèse, composé de deux sous-unités, une petite et une grande.\nC’est au niveau du ribosome, dans le cytoplasme, que la protéine est synthétisée.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p01_q4",
            "type": "mcq",
            "prompt": "Le ribosome est composé :",
            "options": [
              "D’un seul brin d’ARN",
              "De deux sous-unités, une petite et une grande",
              "De deux chromosomes",
              "D’ADN uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultat de la leçon : le ribosome a une petite et une grande sous-unité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Conclusion sur les acteurs",
          "stepTheme": "Conclusion sur les acteurs",
          "stepBadge": "Conclusion sur les acteurs",
          "paragraphText": "La cellule synthétise les protéines grâce à certains acteurs.\nCe sont principalement l’ADN, l’ARN sous ses trois formes et le ribosome.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p01_q5",
            "type": "mcq",
            "prompt": "Les acteurs de la biosynthèse des protéines sont principalement :",
            "options": [
              "Les chromosomes sexuels seuls",
              "L’ADN, l’ARN et le ribosome",
              "Les enzymes digestives",
              "Les globules polaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse et conclusion de la leçon sur les acteurs de la synthèse."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p01_q1",
          "type": "mcq",
          "prompt": "L’ADN est :",
          "options": [
            "Monocaténaire, dans le cytoplasme",
            "Bicaténaire, constitué de deux brins complémentaires, localisé dans le noyau",
            "Composé d’acides aminés",
            "Un type de ribosome"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats de la leçon : l’ADN a deux brins complémentaires et se trouve dans le noyau."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p01_q2",
          "type": "mcq",
          "prompt": "L’ARN est constitué :",
          "options": [
            "De deux brins complémentaires",
            "D’un seul brin, et il existe en trois types : messager, de transfert et ribosomial",
            "Uniquement d’uracile",
            "De protéines"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon décrit l’ARN comme monocaténaire, en trois types."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p01_q3",
          "type": "mcq",
          "prompt": "L’ARN de transfert se distingue des autres ARN par :",
          "options": [
            "Sa localisation dans le noyau",
            "Sa structure et sa forme, avec un anticodon",
            "Ses deux brins",
            "Son absence de nucléotides"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon souligne que l’ARNt diffère des autres par sa structure et sa forme."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p01_q4",
          "type": "mcq",
          "prompt": "Le ribosome est composé :",
          "options": [
            "D’un seul brin d’ARN",
            "De deux sous-unités, une petite et une grande",
            "De deux chromosomes",
            "D’ADN uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultat de la leçon : le ribosome a une petite et une grande sous-unité."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p01_q5",
          "type": "mcq",
          "prompt": "Les acteurs de la biosynthèse des protéines sont principalement :",
          "options": [
            "Les chromosomes sexuels seuls",
            "L’ADN, l’ARN et le ribosome",
            "Les enzymes digestives",
            "Les globules polaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse et conclusion de la leçon sur les acteurs de la synthèse."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l05_synthese_proteines_p02",
      "order": 2,
      "title": "Le code génétique : codons, redondance et universalité",
      "summary": "Décrire le code génétique : ses codons, ses codons stop, son codon initiateur, sa redondance et son universalité.",
      "conceptExplanation": "Le code génétique est le système de correspondance entre les codons de l’ARN messager et les vingt acides aminés spécifiques nécessaires à la synthèse protéique ; il établit la correspondance entre les codons et les acides aminés.\nUn codon correspond à un triplet de nucléotides, formé de trois des quatre bases représentées par les lettres U, C, G et A.\nLe code génétique comporte soixante-quatre codons, dont soixante et un désignent un acide aminé défini ; les trois autres, UAA, UAG et UGA, ne codent aucun acide aminé : ce sont des codons stop ou codons non-sens.\nLa synthèse d’une protéine commence toujours par le codon AUG, qui correspond à la méthionine : c’est le codon initiateur.\nPlusieurs codons peuvent coder pour un même acide aminé : le code génétique est dit redondant, ou dégénéré ; en revanche, un codon ne correspond qu’à un seul et unique acide aminé, le code est non ambigu.\nLe code génétique est le même pour tous les organismes vivants : il est universel.",
      "keyRule": "Soixante-quatre codons, trois stop, un initiateur AUG ; redondant, non ambigu et universel.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte sur le tableau du code génétique",
        "statement": "Complète le texte de l’exercice : le tableau contient des codons et des bases azotées ; chaque codon est un triplet de bases ; trois codons sont des codons non-sens ; plusieurs codons pour un même acide aminé signifient que le code est redondant ; toutes les synthèses commencent par le codon initiateur. Retrouve chaque notion.",
        "methodSteps": [
          "Les codons stop sont UAA, UAG et UGA : ils ne sont associés à aucun acide aminé.",
          "Vingt acides aminés correspondent aux soixante et un codons restants : le code est dégénéré ou redondant.",
          "Un codon ne correspond qu’à un seul acide aminé : le code est non ambigu, et il est universel."
        ],
        "conclusion": "Ce sont les réponses attendues dans le texte lacunaire de l’exercice de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le codon, triplet de nucléotides",
          "stepTheme": "Le codon, triplet de nucléotides",
          "stepBadge": "Le codon, triplet de nucléotides",
          "paragraphText": "• Codon : triplet de bases de l’ARN messager, formé de trois des quatre lettres U, C, G et A.\nLe code génétique établit la correspondance entre ces codons et les acides aminés.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p02_q1",
            "type": "mcq",
            "prompt": "Un codon est :",
            "options": [
              "Une protéine entière",
              "Un triplet de nucléotides de l’ARN messager",
              "Un chromosome",
              "Un acide aminé seul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définitions de la leçon : le codon est un triplet de bases de l’ARNm."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Soixante-quatre codons, soixante et un sens",
          "stepTheme": "Soixante-quatre codons, soixante et un sens",
          "stepBadge": "Soixante-quatre codons, soixante et un sens",
          "paragraphText": "Le code génétique comporte soixante-quatre codons, dont soixante et un désignent un acide aminé défini.\nLes trois autres ne correspondent à aucun acide aminé.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p02_q2",
            "type": "mcq",
            "prompt": "Sur les soixante-quatre codons du code génétique, ceux qui désignent un acide aminé sont au nombre de :",
            "options": [
              "Trois",
              "Vingt",
              "Soixante et un",
              "Soixante-quatre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation de la leçon : soixante et un codons désignent un acide aminé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les codons stop ou non-sens",
          "stepTheme": "Les codons stop ou non-sens",
          "stepBadge": "Les codons stop ou non-sens",
          "paragraphText": "• Codons stop ou codons non-sens : triplets de bases n’ayant aucune correspondance en acide aminé.\nCe sont les codons UAA, UAG et UGA ; ils permettent d’arrêter la synthèse de la protéine.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p02_q3",
            "type": "mcq",
            "prompt": "Les codons stop sont :",
            "options": [
              "AUG, UAA et UGA",
              "UAA, UAG et UGA",
              "UUU, CCC et GGG",
              "AUG uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon liste UAA, UAG et UGA comme codons non-sens."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le codon initiateur AUG",
          "stepTheme": "Le codon initiateur AUG",
          "stepBadge": "Le codon initiateur AUG",
          "paragraphText": "• Codon initiateur : triplet de bases qui débute la synthèse protéique.\nLa synthèse d’une protéine commence toujours par le codon AUG, qui correspond à la méthionine.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p02_q4",
            "type": "mcq",
            "prompt": "Le codon initiateur, qui correspond à la méthionine, est :",
            "options": [
              "UAA",
              "UAG",
              "AUG",
              "UGA"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La synthèse commence toujours par le codon AUG, codon initiateur de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Redondant, non ambigu et universel",
          "stepTheme": "Redondant, non ambigu et universel",
          "stepBadge": "Redondant, non ambigu et universel",
          "paragraphText": "Plusieurs codons peuvent coder pour un même acide aminé : le code est redondant.\nUn codon ne correspond qu’à un seul acide aminé : il est non ambigu, et il est le même pour tous les organismes vivants : il est universel.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p02_q5",
            "type": "mcq",
            "prompt": "Le code génétique est dit redondant parce que :",
            "options": [
              "Chaque acide aminé n’a qu’un seul codon",
              "Plusieurs codons peuvent coder pour un même acide aminé",
              "Il change selon les espèces",
              "Il contient des codons stop"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit la redondance par la pluralité des codons pour un même acide aminé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p02_q1",
          "type": "mcq",
          "prompt": "Un codon est :",
          "options": [
            "Une protéine entière",
            "Un triplet de nucléotides de l’ARN messager",
            "Un chromosome",
            "Un acide aminé seul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définitions de la leçon : le codon est un triplet de bases de l’ARNm."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p02_q2",
          "type": "mcq",
          "prompt": "Sur les soixante-quatre codons du code génétique, ceux qui désignent un acide aminé sont au nombre de :",
          "options": [
            "Trois",
            "Vingt",
            "Soixante et un",
            "Soixante-quatre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation de la leçon : soixante et un codons désignent un acide aminé."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p02_q3",
          "type": "mcq",
          "prompt": "Les codons stop sont :",
          "options": [
            "AUG, UAA et UGA",
            "UAA, UAG et UGA",
            "UUU, CCC et GGG",
            "AUG uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon liste UAA, UAG et UGA comme codons non-sens."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p02_q4",
          "type": "mcq",
          "prompt": "Le codon initiateur, qui correspond à la méthionine, est :",
          "options": [
            "UAA",
            "UAG",
            "AUG",
            "UGA"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La synthèse commence toujours par le codon AUG, codon initiateur de la leçon."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p02_q5",
          "type": "mcq",
          "prompt": "Le code génétique est dit redondant parce que :",
          "options": [
            "Chaque acide aminé n’a qu’un seul codon",
            "Plusieurs codons peuvent coder pour un même acide aminé",
            "Il change selon les espèces",
            "Il contient des codons stop"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit la redondance par la pluralité des codons pour un même acide aminé."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l05_synthese_proteines_p03",
      "order": 3,
      "title": "La transcription : de l’ADN à l’ARN messager dans le noyau",
      "summary": "Expliquer la fabrication de l’ARN messager à partir du brin transcrit de l’ADN, dans le noyau.",
      "conceptExplanation": "La biosynthèse des protéines se déroule en deux grandes étapes : la transcription et la traduction.\nLa transcription se déroule dans le noyau : il y a formation de l’ARN messager à partir de l’ADN, sous l’action d’une enzyme, l’ARN polymérase, qui se déplace le long de la portion du brin d’ADN portant l’information génétique en incorporant les nucléotides libres par complémentarité avec le brin d’ADN qui sert de matrice.\nLa molécule d’ADN s’ouvre localement au niveau de la portion de l’information dont la cellule a besoin ; ce morceau d’ADN qui correspond à une information génétique particulière, codant pour une protéine unique, est appelé le gène, très petite portion de chromosome.\nAu niveau du brin d’ARN formé, l’uracile remplace la thymine ; on dit alors que l’ADN est transcrit en ARN messager.\nLe brin d’ADN servant de matrice est appelé brin codant ou brin transcrit ou brin informatif ; l’autre brin est le brin non transcrit.\nL’ARN messager formé sort ensuite du noyau vers le cytoplasme.",
      "keyRule": "Transcription dans le noyau : ouverture locale de l’ADN, copie complémentaire du brin transcrit, uracile à la place de la thymine.",
      "formulas": [],
      "workedExample": {
        "title": "Reconstituer les brins et les chaînes de deux hormones proches",
        "statement": "La situation d’évaluation donne des portions du brin non codant de l’ADN de l’ocytocine et de la vasopressine et demande d’élaborer le brin codant de chaque ADN, puis de déterminer les deux chaînes polypeptidiques à l’aide du code génétique. Quelle démarche suivre ?",
        "methodSteps": [
          "Élaborer d’abord le brin codant, complémentaire du brin non codant donné.",
          "Transcrire ce brin en ARN messager, en remplaçant la thymine par l’uracile.",
          "Traduire l’ARN messager codon par codon avec le tableau du code génétique.",
          "Comparer les deux chaînes : la différence vient des codons différents entre les deux portions d’ADN."
        ],
        "conclusion": "La démarche enchaîne complémentarité, transcription puis traduction par le code génétique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La transcription a lieu dans le noyau",
          "stepTheme": "La transcription a lieu dans le noyau",
          "stepBadge": "La transcription a lieu dans le noyau",
          "paragraphText": "La transcription se déroule dans le noyau de la cellule.\nIl y a formation de l’ARN messager à partir de l’ADN, avant la sortie de l’ARN messager du noyau.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p03_q1",
            "type": "mcq",
            "prompt": "La transcription est l’étape qui :",
            "options": [
              "Se déroule au ribosome",
              "Forme l’ARN messager à partir de l’ADN, dans le noyau",
              "Assemble les acides aminés",
              "Arrête la synthèse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse de la leçon : la transcription, dans le noyau, forme l’ARNm à partir de l’ADN."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le gène, portion d’ADN codant une protéine",
          "stepTheme": "Le gène, portion d’ADN codant une protéine",
          "stepBadge": "Le gène, portion d’ADN codant une protéine",
          "paragraphText": "• Gène : morceau de l’ADN qui correspond à une information génétique particulière et qui code pour une protéine unique.\nC’est une très petite portion de chromosome ; un gène est un segment d’ADN programmant un caractère phénotypique.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p03_q2",
            "type": "mcq",
            "prompt": "Un gène est :",
            "options": [
              "Une protéine complète",
              "Un segment d’ADN codant pour une protéine unique, programmant un caractère",
              "Un ribosome spécialisé",
              "Un codon stop"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit le gène comme la portion d’ADN codant une protéine unique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La complémentarité et le rôle de l’uracile",
          "stepTheme": "La complémentarité et le rôle de l’uracile",
          "stepBadge": "La complémentarité et le rôle de l’uracile",
          "paragraphText": "L’enzyme de transcription incorpore les nucléotides libres par complémentarité avec le brin d’ADN qui sert de matrice.\nAu niveau du brin d’ARN, l’uracile remplace la thymine.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p03_q3",
            "type": "mcq",
            "prompt": "Dans l’ARN messager formé par transcription, la base qui remplace la thymine est :",
            "options": [
              "L’adénine",
              "La guanine",
              "L’uracile",
              "La cytosine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon précise qu’au niveau du brin d’ARN, l’uracile remplace la thymine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Brin transcrit et brin non transcrit",
          "stepTheme": "Brin transcrit et brin non transcrit",
          "stepBadge": "Brin transcrit et brin non transcrit",
          "paragraphText": "Le brin d’ADN servant de matrice est appelé brin codant, brin transcrit ou brin informatif.\nL’autre brin de l’ADN est le brin non transcrit.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p03_q4",
            "type": "mcq",
            "prompt": "Le brin d’ADN qui sert de matrice à la transcription est appelé :",
            "options": [
              "Brin non transcrit",
              "Brin codant, brin transcrit ou brin informatif",
              "Anticodon",
              "Brin d’ARNt"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Terminologie de la leçon pour le brin matrice de la transcription."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Transcription avant traduction",
          "stepTheme": "Transcription avant traduction",
          "stepBadge": "Transcription avant traduction",
          "paragraphText": "Dans la synthèse des protéines, la transcription précède la traduction.\nL’ARN messager doit d’abord être formé dans le noyau, puis sortir vers le cytoplasme où il sera traduit.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p03_q5",
            "type": "mcq",
            "prompt": "Dans la synthèse des protéines, l’ordre correct est :",
            "options": [
              "Traduction puis transcription",
              "Transcription dans le noyau, puis traduction dans le cytoplasme",
              "Traduction dans le noyau, puis transcription au ribosome",
              "Transcription au ribosome directement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’exercice de la leçon retient que la transcription précède la traduction."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p03_q1",
          "type": "mcq",
          "prompt": "La transcription est l’étape qui :",
          "options": [
            "Se déroule au ribosome",
            "Forme l’ARN messager à partir de l’ADN, dans le noyau",
            "Assemble les acides aminés",
            "Arrête la synthèse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse de la leçon : la transcription, dans le noyau, forme l’ARNm à partir de l’ADN."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p03_q2",
          "type": "mcq",
          "prompt": "Un gène est :",
          "options": [
            "Une protéine complète",
            "Un segment d’ADN codant pour une protéine unique, programmant un caractère",
            "Un ribosome spécialisé",
            "Un codon stop"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit le gène comme la portion d’ADN codant une protéine unique."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p03_q3",
          "type": "mcq",
          "prompt": "Dans l’ARN messager formé par transcription, la base qui remplace la thymine est :",
          "options": [
            "L’adénine",
            "La guanine",
            "L’uracile",
            "La cytosine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon précise qu’au niveau du brin d’ARN, l’uracile remplace la thymine."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p03_q4",
          "type": "mcq",
          "prompt": "Le brin d’ADN qui sert de matrice à la transcription est appelé :",
          "options": [
            "Brin non transcrit",
            "Brin codant, brin transcrit ou brin informatif",
            "Anticodon",
            "Brin d’ARNt"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Terminologie de la leçon pour le brin matrice de la transcription."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p03_q5",
          "type": "mcq",
          "prompt": "Dans la synthèse des protéines, l’ordre correct est :",
          "options": [
            "Traduction puis transcription",
            "Transcription dans le noyau, puis traduction dans le cytoplasme",
            "Traduction dans le noyau, puis transcription au ribosome",
            "Transcription au ribosome directement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’exercice de la leçon retient que la transcription précède la traduction."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l05_synthese_proteines_p04",
      "order": 4,
      "title": "La traduction : initiation, élongation et terminaison au ribosome",
      "summary": "Décrire les trois étapes de la traduction de l’ARN messager en chaîne polypeptidique, dans le cytoplasme.",
      "conceptExplanation": "La traduction se fait dans le cytoplasme à partir de l’ARN messager et fait intervenir les ARN de transfert et les ribosomes ; elle se déroule en trois étapes : initiation, élongation et terminaison.\nÀ l’initiation, le premier codon est toujours AUG, le codon initiateur, qui correspond à la méthionine : la petite sous-unité du ribosome et un ARN de transfert se lient à une extrémité de l’ARN messager portant le codon initiateur ; cet ARN de transfert porte la méthionine et un anticodon complémentaire au codon initiateur, et il se positionne sur le site P du ribosome.\nÀ l’élongation, un nouvel ARN de transfert se place au site A du ribosome, en face du deuxième codon, avec un anticodon complémentaire et l’acide aminé correspondant selon le code génétique ; une liaison peptidique s’établit entre les deux acides aminés, le premier ARN de transfert déchargé est libéré, le ribosome se déplace, et une nouvelle molécule d’ARN de transfert vient se placer, et ainsi de suite.\nÀ la terminaison, la traduction s’arrête lorsque le ribosome rencontre un codon non-sens ou codon stop, ne correspondant à aucun acide aminé : il se produit une dissociation entre l’ARN messager et la chaîne polypeptidique.\nL’anticodon est le triplet de bases complémentaires aux codons, porté par l’ARN de transfert.",
      "keyRule": "Initiation au codon AUG sur le site P, élongation par ajouts successifs au site A, terminaison au codon stop.",
      "formulas": [],
      "workedExample": {
        "title": "Traduire une séquence d’ADN en protéine",
        "statement": "La situation d’évaluation donne la séquence d’un brin codant d’ADN et demande la séquence complémentaire, la séquence transcrite en ARN messager, puis la séquence des acides aminés de la protéine traduite. Dans quel ordre procéder ?",
        "methodSteps": [
          "Représenter d’abord la séquence du brin d’ADN complémentaire, par complémentarité des bases.",
          "Transcrire ensuite en ARN messager, avec l’uracile à la place de la thymine.",
          "Traduire enfin l’ARN messager en acides aminés grâce au tableau du code génétique, codon par codon."
        ],
        "conclusion": "L’ordre transcription puis traduction, avec le code génétique, donne la chaîne d’acides aminés."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La traduction a lieu dans le cytoplasme",
          "stepTheme": "La traduction a lieu dans le cytoplasme",
          "stepBadge": "La traduction a lieu dans le cytoplasme",
          "paragraphText": "La traduction se fait dans le cytoplasme à partir de l’ARN messager.\nElle fait intervenir les ARN de transfert et les ribosomes, en trois étapes : initiation, élongation et terminaison.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p04_q1",
            "type": "mcq",
            "prompt": "La traduction se déroule :",
            "options": [
              "Dans le noyau uniquement",
              "Dans le cytoplasme, au niveau du ribosome, à partir de l’ARN messager",
              "Dans le brin d’ADN",
              "Sans aucun acteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse de la leçon : la synthèse de la protéine se fait dans le cytoplasme au niveau du ribosome."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’initiation : le codon AUG et le site P",
          "stepTheme": "L’initiation : le codon AUG et le site P",
          "stepBadge": "L’initiation : le codon AUG et le site P",
          "paragraphText": "Le premier codon est toujours AUG, codon initiateur correspondant à la méthionine.\nL’ARN de transfert qui le reconnaît porte la méthionine et un anticodon complémentaire ; il se positionne sur le site P du ribosome.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p04_q2",
            "type": "mcq",
            "prompt": "À l’initiation, le premier ARN de transfert se positionne :",
            "options": [
              "Au site A, avec un codon stop",
              "Sur le site P du ribosome, avec la méthionine et un anticodon complémentaire de AUG",
              "Dans le noyau",
              "Sur l’ADN directement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Description de l’initiation dans la leçon : site P, méthionine, anticodon complémentaire de AUG."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L’anticodon de l’ARN de transfert",
          "stepTheme": "L’anticodon de l’ARN de transfert",
          "stepBadge": "L’anticodon de l’ARN de transfert",
          "paragraphText": "• Anticodon : triplet de bases complémentaires aux codons, porté par l’ARN de transfert.\nC’est lui qui reconnaît le codon de l’ARN messager pendant la traduction.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p04_q3",
            "type": "mcq",
            "prompt": "L’anticodon est une séquence de trois nucléotides portée par :",
            "options": [
              "L’ARN ribosomial",
              "L’ARN messager",
              "L’ARN de transfert",
              "Le brin transcrit de l’ADN"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’exercice de la leçon attribue l’anticodon à l’ARN de transfert."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’élongation : liaisons peptidiques et déplacement",
          "stepTheme": "L’élongation : liaisons peptidiques et déplacement",
          "stepBadge": "L’élongation : liaisons peptidiques et déplacement",
          "paragraphText": "Un nouvel ARN de transfert se place au site A, en face du deuxième codon, et une liaison peptidique s’établit entre les deux acides aminés.\nLe ribosome se déplace ensuite, le premier ARN de transfert déchargé est libéré, et le cycle se répète.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p04_q4",
            "type": "mcq",
            "prompt": "Pendant l’élongation, les acides aminés sont reliés entre eux par :",
            "options": [
              "Des liaisons peptidiques",
              "Des codons stop",
              "Des anticodons libres",
              "Des brins d’ADN"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon indique qu’une liaison peptidique s’établit entre les deux acides aminés."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La terminaison au codon stop",
          "stepTheme": "La terminaison au codon stop",
          "stepBadge": "La terminaison au codon stop",
          "paragraphText": "La traduction s’arrête lorsque le ribosome rencontre un codon non-sens ou codon stop, ne correspondant à aucun acide aminé.\nIl se produit alors une dissociation entre l’ARN messager et la chaîne polypeptidique.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p04_q5",
            "type": "mcq",
            "prompt": "La traduction s’arrête quand le ribosome rencontre :",
            "options": [
              "Un nouveau codon AUG",
              "Un codon non-sens ou codon stop",
              "Un deuxième ribosome",
              "Un ARN ribosomial"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Description de la terminaison dans la leçon : arrêt au codon stop et dissociation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p04_q1",
          "type": "mcq",
          "prompt": "La traduction se déroule :",
          "options": [
            "Dans le noyau uniquement",
            "Dans le cytoplasme, au niveau du ribosome, à partir de l’ARN messager",
            "Dans le brin d’ADN",
            "Sans aucun acteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse de la leçon : la synthèse de la protéine se fait dans le cytoplasme au niveau du ribosome."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p04_q2",
          "type": "mcq",
          "prompt": "À l’initiation, le premier ARN de transfert se positionne :",
          "options": [
            "Au site A, avec un codon stop",
            "Sur le site P du ribosome, avec la méthionine et un anticodon complémentaire de AUG",
            "Dans le noyau",
            "Sur l’ADN directement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Description de l’initiation dans la leçon : site P, méthionine, anticodon complémentaire de AUG."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p04_q3",
          "type": "mcq",
          "prompt": "L’anticodon est une séquence de trois nucléotides portée par :",
          "options": [
            "L’ARN ribosomial",
            "L’ARN messager",
            "L’ARN de transfert",
            "Le brin transcrit de l’ADN"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’exercice de la leçon attribue l’anticodon à l’ARN de transfert."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p04_q4",
          "type": "mcq",
          "prompt": "Pendant l’élongation, les acides aminés sont reliés entre eux par :",
          "options": [
            "Des liaisons peptidiques",
            "Des codons stop",
            "Des anticodons libres",
            "Des brins d’ADN"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon indique qu’une liaison peptidique s’établit entre les deux acides aminés."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p04_q5",
          "type": "mcq",
          "prompt": "La traduction s’arrête quand le ribosome rencontre :",
          "options": [
            "Un nouveau codon AUG",
            "Un codon non-sens ou codon stop",
            "Un deuxième ribosome",
            "Un ARN ribosomial"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Description de la terminaison dans la leçon : arrêt au codon stop et dissociation."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l05_synthese_proteines_p05",
      "order": 5,
      "title": "De la protéine aux caractères : le mécanisme complet de la synthèse",
      "summary": "Enchaîner transcription et traduction et relier les protéines synthétisées à l’expression des caractères déterminés par les gènes.",
      "conceptExplanation": "La synthèse des protéines se fait selon un mécanisme particulier comprenant deux grandes étapes : la transcription et la traduction.\nLa cellule synthétise ses protéines à partir des acides aminés grâce à des acteurs et selon un mécanisme qui s’appuie sur un code génétique universel.\nUne protéine est une grosse molécule dont les sous-unités sont des acides aminés.\nLes protéines synthétisées contribuent à l’expression des caractères déterminés par les gènes, portions d’ADN.\nAinsi, quand les cellules de la peau ne peuvent pas fabriquer une protéine qui donne la couleur noire de la peau, le caractère correspondant ne s’exprime pas : c’est le type de situation analysé dans les évaluations de la leçon, où l’on passe d’une séquence d’ADN à la séquence d’acides aminés de la protéine.",
      "keyRule": "ADN transcrit, ARN traduit, protéine formée : c’est la protéine qui fait s’exprimer le caractère déterminé par le gène.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l’absence d’une protéine de pigmentation",
        "statement": "Un professeur explique que les cellules de la peau d’un enfant albinos ne peuvent pas fabriquer une protéine qui donne la couleur noire de la peau. On donne la séquence d’un brin codant d’ADN pour retrouver la protéine. Quel enchaînement la leçon demande-t-elle ?",
        "methodSteps": [
          "Représenter la séquence du brin d’ADN complémentaire.",
          "Représenter la séquence transcrite en ARN messager.",
          "Représenter la séquence des acides aminés de la protéine traduite à partir de l’ARN messager.",
          "Comparer ensuite l’effet d’un remplacement de base sur la séquence des acides aminés."
        ],
        "conclusion": "Le passage ADN, ARN messager, protéine explique l’expression ou la non-expression du caractère."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les deux grandes étapes du mécanisme",
          "stepTheme": "Les deux grandes étapes du mécanisme",
          "stepBadge": "Les deux grandes étapes du mécanisme",
          "paragraphText": "La biosynthèse des protéines se déroule en deux grandes étapes : la transcription et la traduction.\nLa transcription a lieu dans le noyau, la traduction dans le cytoplasme.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p05_q1",
            "type": "mcq",
            "prompt": "Le mécanisme de la synthèse des protéines comprend :",
            "options": [
              "La méiose et la mitose",
              "La transcription puis la traduction",
              "La duplication et la fécondation",
              "L’initiation seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse de la leçon : deux grandes étapes, transcription et traduction."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La protéine, assemblage d’acides aminés",
          "stepTheme": "La protéine, assemblage d’acides aminés",
          "stepBadge": "La protéine, assemblage d’acides aminés",
          "paragraphText": "• Protéine : grosse molécule dont les sous-unités sont des acides aminés.\nElle est assemblée au ribosome selon l’ordre des codons de l’ARN messager.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p05_q2",
            "type": "mcq",
            "prompt": "Une protéine est une grosse molécule dont les sous-unités sont :",
            "options": [
              "Des glucoses",
              "Des acides gras",
              "Des acides aminés",
              "Des nucléotides"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’exercice de la leçon retient les acides aminés comme sous-unités des protéines."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un codon, un seul acide aminé",
          "stepTheme": "Un codon, un seul acide aminé",
          "stepBadge": "Un codon, un seul acide aminé",
          "paragraphText": "Pendant la traduction, un codon code pour un acide aminé et un seul.\nEn revanche, plusieurs codons peuvent coder pour un même acide aminé : c’est la redondance du code.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p05_q3",
            "type": "mcq",
            "prompt": "Pendant la traduction, la proposition juste est :",
            "options": [
              "Chaque acide aminé est codé par un codon et un seul, sans exception",
              "Un codon code pour un acide aminé et un seul, mais plusieurs codons peuvent coder le même acide aminé",
              "La traduction précède la transcription",
              "Un codon code plusieurs acides aminés à la fois"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’exercice de la leçon distingue : un codon, un seul acide aminé ; plusieurs codons possibles pour un acide aminé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les bases de l’ARN",
          "stepTheme": "Les bases de l’ARN",
          "stepBadge": "Les bases de l’ARN",
          "paragraphText": "L’ARN est constitué des bases adénine, uracile, cytosine et guanine.\nLa thymine est la base de l’ADN qui est remplacée par l’uracile dans l’ARN.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p05_q4",
            "type": "mcq",
            "prompt": "Parmi les bases suivantes, celle qui n’appartient pas à l’ARN est :",
            "options": [
              "Adénine",
              "Uracile",
              "Thymine",
              "Guanine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’ARN contient l’uracile et non la thymine, d’après l’exercice de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Conclusion générale de la leçon",
          "stepTheme": "Conclusion générale de la leçon",
          "stepBadge": "Conclusion générale de la leçon",
          "paragraphText": "Conclusion générale : la cellule synthétise ses protéines à partir des acides aminés grâce à des acteurs et selon un mécanisme qui s’appuie sur un code génétique universel.\nLes protéines synthétisées contribuent à l’expression des caractères déterminés par les gènes.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p05_q5",
            "type": "mcq",
            "prompt": "Les protéines synthétisées contribuent à :",
            "options": [
              "La disparition des gènes",
              "L’expression des caractères déterminés par les gènes",
              "La formation des chromosomes sexuels",
              "L’arrêt de toute synthèse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion générale de la leçon : les protéines expriment les caractères déterminés par les gènes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p05_q1",
          "type": "mcq",
          "prompt": "Le mécanisme de la synthèse des protéines comprend :",
          "options": [
            "La méiose et la mitose",
            "La transcription puis la traduction",
            "La duplication et la fécondation",
            "L’initiation seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse de la leçon : deux grandes étapes, transcription et traduction."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p05_q2",
          "type": "mcq",
          "prompt": "Une protéine est une grosse molécule dont les sous-unités sont :",
          "options": [
            "Des glucoses",
            "Des acides gras",
            "Des acides aminés",
            "Des nucléotides"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’exercice de la leçon retient les acides aminés comme sous-unités des protéines."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p05_q3",
          "type": "mcq",
          "prompt": "Pendant la traduction, la proposition juste est :",
          "options": [
            "Chaque acide aminé est codé par un codon et un seul, sans exception",
            "Un codon code pour un acide aminé et un seul, mais plusieurs codons peuvent coder le même acide aminé",
            "La traduction précède la transcription",
            "Un codon code plusieurs acides aminés à la fois"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’exercice de la leçon distingue : un codon, un seul acide aminé ; plusieurs codons possibles pour un acide aminé."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p05_q4",
          "type": "mcq",
          "prompt": "Parmi les bases suivantes, celle qui n’appartient pas à l’ARN est :",
          "options": [
            "Adénine",
            "Uracile",
            "Thymine",
            "Guanine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’ARN contient l’uracile et non la thymine, d’après l’exercice de la leçon."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p05_q5",
          "type": "mcq",
          "prompt": "Les protéines synthétisées contribuent à :",
          "options": [
            "La disparition des gènes",
            "L’expression des caractères déterminés par les gènes",
            "La formation des chromosomes sexuels",
            "L’arrêt de toute synthèse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion générale de la leçon : les protéines expriment les caractères déterminés par les gènes."
        }
      ]
    }
  ]
};
