import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 8 : La photosynthèse » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=826
export const SVT_1ERE_C_L08_PHOTOSYNTHESE: CurriculumChapter = {
  "id": "premiere_c_svt_l08_photosynthese",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 8,
  "title": "Leçon 8 : La photosynthèse",
  "summary": "On détermine les conditions de production de la matière organique, lumière, dioxyde de carbone et température, puis on explique le mécanisme de la photosynthèse en deux phases pour en dégager l’importance dans la biosphère.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=826",
  "points": [
    {
      "id": "premiere_c_svt_l08_photosynthese_p01",
      "order": 1,
      "title": "L’influence de la lumière : point de compensation, plantes sciaphiles et héliophiles",
      "summary": "L’intensité photosynthétique augmente avec l’éclairement jusqu’à un maximum atteint à 20 pour cent pour la fougère sciaphile et à 70 pour cent pour la tomate héliophile ; au point de compensation, production et respiration s’équilibrent.",
      "conceptExplanation": "On place un plant de tomate et un plant de fougère à des éclairements de plus en plus intenses, température et teneur en dioxyde de carbone constantes, et on mesure le dégagement de dioxygène, qui traduit l’intensité photosynthétique.\nEn absence d’éclairement et pour de faibles intensités lumineuses, l’intensité de la photosynthèse est négative car il y a consommation de dioxygène due à la respiration de la plante ; elle est nulle quand la quantité de dioxygène produite pendant la photosynthèse égale celle consommée pendant la respiration : c’est le point de compensation lumineux.\nL’intensité augmente ensuite progressivement pour atteindre son maximum à 20 pour cent d’éclairement pour la fougère et à 70 pour cent pour la tomate. Au-delà, elle reste constante pour la tomate et baisse légèrement pour la fougère, car les activités photosynthétiques ont atteint leur maximum : ce maximum est atteint à un éclairement plus faible chez la fougère, plante d’ombre ou plante sciaphile, et à un éclairement plus important chez la tomate, plante de lumière ou plante héliophile. Chez les plantes sciaphiles, l’intensité baisse après le maximum car les structures responsables de la photosynthèse se détériorent.",
      "keyRule": "Point de compensation : autant d’oxygène produit que consommé par la respiration.",
      "formulas": [],
      "workedExample": {
        "title": "La sortie au jardin botanique",
        "statement": "À l’ombre des gros arbres, les jeunes plantes sont chétives ; dans la clairière, celles de la même espèce sont robustes. Explique cette différence par l’expérience sur la lumière.",
        "methodSteps": [
          "Sans lumière suffisante, la photosynthèse ne compense pas la respiration.",
          "À la lumière de la clairière, l’intensité photosynthétique augmente et la plante produit plus de matière organique.",
          "Les plantes de la clairière se développent donc mieux."
        ],
        "conclusion": "La lumière conditionne la production de matière organique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le point de compensation lumineux",
          "stepTheme": "Le point de compensation lumineux",
          "stepBadge": "Le point de compensation lumineux",
          "paragraphText": "• Point de compensation lumineux : point où la quantité de dioxygène produite pendant la photosynthèse égale celle consommée pendant la respiration.\nL’intensité photosynthétique mesurée y est nulle.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p01_q1",
            "type": "mcq",
            "prompt": "Au point de compensation, l’intensité photosynthétique est :",
            "options": [
              "Nulle, production et respiration s’équilibrant",
              "Maximale",
              "Négative et croissante",
              "Infinie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’interprétation définit le point de compensation par cette égalité et une intensité nulle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une intensité négative à faible lumière",
          "stepTheme": "Une intensité négative à faible lumière",
          "stepBadge": "Une intensité négative à faible lumière",
          "paragraphText": "En absence d’éclairement et pour de faibles intensités, l’intensité est négative.\nCela vient de la consommation de dioxygène due à la respiration de la plante.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p01_q2",
            "type": "mcq",
            "prompt": "Une intensité photosynthétique négative signifie que :",
            "options": [
              "La photosynthèse est maximale",
              "La plante est morte",
              "La respiration consomme du dioxygène sans compensation suffisante",
              "La plante produit plus d’oxygène qu’elle n’en consomme"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’interprétation attribue la valeur négative à la consommation de dioxygène par la respiration."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le maximum de la fougère et de la tomate",
          "stepTheme": "Le maximum de la fougère et de la tomate",
          "stepBadge": "Le maximum de la fougère et de la tomate",
          "paragraphText": "L’intensité atteint son maximum à 20 pour cent d’éclairement pour la fougère.\nPour la tomate, le maximum est atteint à 70 pour cent d’éclairement.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p01_q3",
            "type": "mcq",
            "prompt": "Le maximum est atteint le plus tôt chez :",
            "options": [
              "Aucune des deux",
              "La fougère, à 20 pour cent",
              "La tomate, à 70 pour cent",
              "Les deux à 100 pour cent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les valeurs d’éclairement du maximum sont données dans l’analyse des courbes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Plante sciaphile et plante héliophile",
          "stepTheme": "Plante sciaphile et plante héliophile",
          "stepBadge": "Plante sciaphile et plante héliophile",
          "paragraphText": "• Plante sciaphile : plante d’ombre, comme la fougère, dont le maximum est atteint à faible éclairement.\n• Plante héliophile : plante de lumière, comme la tomate, dont le maximum exige un fort éclairement.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p01_q4",
            "type": "mcq",
            "prompt": "La tomate est une plante :",
            "options": [
              "Sciaphile, plante d’ombre",
              "Sans chlorophylle",
              "Aquatique obligatoire",
              "Héliophile, plante de lumière"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé qualifie la tomate de plante de lumière ou héliophile."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La baisse chez les sciaphiles",
          "stepTheme": "La baisse chez les sciaphiles",
          "stepBadge": "La baisse chez les sciaphiles",
          "paragraphText": "Piège : après le maximum, la fougère ne reste pas constante comme la tomate.\nChez les plantes sciaphiles, l’intensité baisse après le maximum car les structures responsables de la photosynthèse se détériorent.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p01_q5",
            "type": "mcq",
            "prompt": "Après son maximum, l’intensité chez la fougère :",
            "options": [
              "Devient négative immédiatement",
              "Double",
              "Baisse légèrement car les structures photosynthétiques se détériorent",
              "Reste constante comme la tomate"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé explique cette légère baisse par la détérioration des structures chez les sciaphiles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Vrai ou faux sur les facteurs",
          "stepTheme": "Vrai ou faux sur les facteurs",
          "stepBadge": "Vrai ou faux sur les facteurs",
          "paragraphText": "Exemple d’affirmations corrigées : la photosynthèse ne se déroule pas à l’obscurité, et la nature de la lumière influence l’intensité photosynthétique.\nL’intensité est très faible, voire nulle, à basse température.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p01_q6",
            "type": "mcq",
            "prompt": "L’affirmation « la photosynthèse se déroule à l’obscurité » est :",
            "options": [
              "Fausse",
              "Sans rapport avec la lumière",
              "Vraie",
              "Vraie seulement chez la fougère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé de l’activité sur les facteurs donne faux à cette affirmation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l08_photosynthese_p01_q1",
          "type": "mcq",
          "prompt": "Au point de compensation, l’intensité photosynthétique est :",
          "options": [
            "Nulle, production et respiration s’équilibrant",
            "Maximale",
            "Négative et croissante",
            "Infinie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’interprétation définit le point de compensation par cette égalité et une intensité nulle."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p01_q2",
          "type": "mcq",
          "prompt": "Une intensité photosynthétique négative signifie que :",
          "options": [
            "La photosynthèse est maximale",
            "La plante est morte",
            "La respiration consomme du dioxygène sans compensation suffisante",
            "La plante produit plus d’oxygène qu’elle n’en consomme"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’interprétation attribue la valeur négative à la consommation de dioxygène par la respiration."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p01_q3",
          "type": "mcq",
          "prompt": "Le maximum est atteint le plus tôt chez :",
          "options": [
            "Aucune des deux",
            "La fougère, à 20 pour cent",
            "La tomate, à 70 pour cent",
            "Les deux à 100 pour cent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les valeurs d’éclairement du maximum sont données dans l’analyse des courbes."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p01_q4",
          "type": "mcq",
          "prompt": "La tomate est une plante :",
          "options": [
            "Sciaphile, plante d’ombre",
            "Sans chlorophylle",
            "Aquatique obligatoire",
            "Héliophile, plante de lumière"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé qualifie la tomate de plante de lumière ou héliophile."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p01_q5",
          "type": "mcq",
          "prompt": "Après son maximum, l’intensité chez la fougère :",
          "options": [
            "Devient négative immédiatement",
            "Double",
            "Baisse légèrement car les structures photosynthétiques se détériorent",
            "Reste constante comme la tomate"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé explique cette légère baisse par la détérioration des structures chez les sciaphiles."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p01_q6",
          "type": "mcq",
          "prompt": "L’affirmation « la photosynthèse se déroule à l’obscurité » est :",
          "options": [
            "Fausse",
            "Sans rapport avec la lumière",
            "Vraie",
            "Vraie seulement chez la fougère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé de l’activité sur les facteurs donne faux à cette affirmation."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l08_photosynthese_p02",
      "order": 2,
      "title": "L’influence du dioxyde de carbone et de la température",
      "summary": "Sans dioxyde de carbone, pas de photosynthèse mesurable ; l’intensité croît avec la teneur jusqu’à saturation, et la température agit par les enzymes, inhibées à 0 degré et dénaturées vers 45 degrés.",
      "conceptExplanation": "En absence de dioxyde de carbone et pour de faibles concentrations, l’intensité de la photosynthèse est négative, car il y a consommation de dioxygène due à la respiration ; elle est nulle au point de compensation.\nQuand la teneur en dioxyde de carbone augmente, le dégagement de dioxygène croît rapidement parce que ces teneurs favorisent de plus en plus l’activité photosynthétique, puis le dégagement ralentit par saturation des structures responsables de la photosynthèse. La teneur en dioxyde de carbone de l’air, très faible, peut devenir, avec les autres facteurs, un facteur limitant pour l’activité photosynthétique.\nPour la température : l’intensité photosynthétique est nulle à 0 degré car les enzymes permettant la photosynthèse sont inhibées ; elle croît ensuite quand la température augmente, car les enzymes sont de plus en plus stimulées ; elle diminue jusqu’à s’annuler autour de 45 degrés car les enzymes sont dénaturées par la chaleur.",
      "keyRule": "Le dioxyde de carbone peut être facteur limitant ; la température agit sur les enzymes.",
      "formulas": [],
      "workedExample": {
        "title": "La courbe des chlorelles selon le dioxyde de carbone",
        "statement": "Des algues vertes, les chlorelles, sont cultivées à la lumière avec des concentrations variables de dioxyde de carbone et leur biomasse est mesurée. À quoi sert cette expérience ?",
        "methodSteps": [
          "Elle relie la biomasse produite à la teneur en dioxyde de carbone du milieu.",
          "Elle illustre l’influence du dioxyde de carbone sur la production de matière organique.",
          "Elle se conclut par l’équation bilan de la réaction qui s’est produite, la photosynthèse."
        ],
        "conclusion": "C’est la situation d’évaluation 1 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un facteur limitant",
          "stepTheme": "Un facteur limitant",
          "stepBadge": "Un facteur limitant",
          "paragraphText": "• Facteur limitant : facteur dont la faible valeur limite l’activité photosynthétique alors que les autres sont présents.\nLe résumé applique cette idée à la teneur en dioxyde de carbone de l’air.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p02_q1",
            "type": "mcq",
            "prompt": "La teneur en dioxyde de carbone de l’air peut devenir, avec les autres facteurs :",
            "options": [
              "Un facteur sans aucun effet",
              "Un produit de la photosynthèse",
              "Une enzyme",
              "Un facteur limitant pour l’activité photosynthétique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le texte sur la courbe du dioxyde de carbone conclut en ce sens, et le corrigé juge fausse l’affirmation d’absence d’effet."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La saturation des structures",
          "stepTheme": "La saturation des structures",
          "stepBadge": "La saturation des structures",
          "paragraphText": "Quand la teneur en dioxyde de carbone augmente, le dégagement de dioxygène croît d’abord rapidement.\nLe ralentissement observé ensuite est dû à une saturation des structures responsables de la photosynthèse.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p02_q2",
            "type": "mcq",
            "prompt": "Le ralentissement du dégagement de dioxygène à forte teneur est dû à :",
            "options": [
              "La fin de la respiration",
              "La saturation des structures responsables de la photosynthèse",
              "L’absence totale de dioxyde de carbone",
              "La disparition de la lumière"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’interprétation donnée pour la courbe du dioxyde de carbone."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les enzymes inhibées à basse température",
          "stepTheme": "Les enzymes inhibées à basse température",
          "stepBadge": "Les enzymes inhibées à basse température",
          "paragraphText": "L’intensité photosynthétique est nulle à 0 degré.\nÀ cette température, les enzymes permettant la photosynthèse sont inhibées.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p02_q3",
            "type": "mcq",
            "prompt": "À 0 degré, l’intensité est nulle car les enzymes sont :",
            "options": [
              "Inhibées",
              "Transformées en chlorophylle",
              "Dénaturées",
              "Multipliées"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte de la courbe de température emploie le terme inhibées pour 0 degré."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le maximum puis la dénaturation",
          "stepTheme": "Le maximum puis la dénaturation",
          "stepBadge": "Le maximum puis la dénaturation",
          "paragraphText": "L’intensité croît quand la température augmente, car les enzymes sont de plus en plus stimulées.\nElle diminue ensuite jusqu’à s’annuler autour de 45 degrés, car les enzymes sont dénaturées par la chaleur.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p02_q4",
            "type": "mcq",
            "prompt": "Autour de 45 degrés, l’intensité s’annule car les enzymes sont :",
            "options": [
              "Inhibées par le froid",
              "Saturées de dioxyde de carbone",
              "Dénaturées par la chaleur",
              "Transformées en amidon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé attribue l’annulation vers 45 degrés à la dénaturation des enzymes par la chaleur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le dioxyde de carbone a bien un effet",
          "stepTheme": "Le dioxyde de carbone a bien un effet",
          "stepBadge": "Le dioxyde de carbone a bien un effet",
          "paragraphText": "Piège corrigé dans l’activité : affirmer que la teneur du milieu en dioxyde de carbone n’a aucun effet sur l’intensité photosynthétique est faux.\nLa courbe montre au contraire une croissance puis une saturation.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p02_q5",
            "type": "mcq",
            "prompt": "L’affirmation « la teneur en dioxyde de carbone n’a aucun effet » est :",
            "options": [
              "Vraie uniquement à 0 degré",
              "Fausse",
              "Vraie chez les sciaphiles",
              "Vraie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé des affirmations sur les facteurs donne faux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les trois facteurs de la conclusion",
          "stepTheme": "Les trois facteurs de la conclusion",
          "stepBadge": "Les trois facteurs de la conclusion",
          "paragraphText": "Exemple de conclusion à retenir : la plante verte produit la matière organique sous l’influence de la lumière, de la teneur en dioxyde de carbone et de la température.\nCe sont les trois facteurs étudiés dans la partie I.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p02_q6",
            "type": "mcq",
            "prompt": "Les facteurs étudiés dans la partie I sont :",
            "options": [
              "La lumière et la nuit",
              "Uniquement la lumière",
              "L’eau, le sol et le vent",
              "La lumière, la teneur en dioxyde de carbone et la température"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la conclusion exacte de la partie I du résumé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l08_photosynthese_p02_q1",
          "type": "mcq",
          "prompt": "La teneur en dioxyde de carbone de l’air peut devenir, avec les autres facteurs :",
          "options": [
            "Un facteur sans aucun effet",
            "Un produit de la photosynthèse",
            "Une enzyme",
            "Un facteur limitant pour l’activité photosynthétique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le texte sur la courbe du dioxyde de carbone conclut en ce sens, et le corrigé juge fausse l’affirmation d’absence d’effet."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p02_q2",
          "type": "mcq",
          "prompt": "Le ralentissement du dégagement de dioxygène à forte teneur est dû à :",
          "options": [
            "La fin de la respiration",
            "La saturation des structures responsables de la photosynthèse",
            "L’absence totale de dioxyde de carbone",
            "La disparition de la lumière"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’interprétation donnée pour la courbe du dioxyde de carbone."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p02_q3",
          "type": "mcq",
          "prompt": "À 0 degré, l’intensité est nulle car les enzymes sont :",
          "options": [
            "Inhibées",
            "Transformées en chlorophylle",
            "Dénaturées",
            "Multipliées"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte de la courbe de température emploie le terme inhibées pour 0 degré."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p02_q4",
          "type": "mcq",
          "prompt": "Autour de 45 degrés, l’intensité s’annule car les enzymes sont :",
          "options": [
            "Inhibées par le froid",
            "Saturées de dioxyde de carbone",
            "Dénaturées par la chaleur",
            "Transformées en amidon"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé attribue l’annulation vers 45 degrés à la dénaturation des enzymes par la chaleur."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p02_q5",
          "type": "mcq",
          "prompt": "L’affirmation « la teneur en dioxyde de carbone n’a aucun effet » est :",
          "options": [
            "Vraie uniquement à 0 degré",
            "Fausse",
            "Vraie chez les sciaphiles",
            "Vraie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé des affirmations sur les facteurs donne faux."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p02_q6",
          "type": "mcq",
          "prompt": "Les facteurs étudiés dans la partie I sont :",
          "options": [
            "La lumière et la nuit",
            "Uniquement la lumière",
            "L’eau, le sol et le vent",
            "La lumière, la teneur en dioxyde de carbone et la température"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la conclusion exacte de la partie I du résumé."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l08_photosynthese_p03",
      "order": 3,
      "title": "Les structures de la photosynthèse : chloroplaste, chlorophylle et pigments",
      "summary": "La feuille panachée ne produit de l’amidon que dans sa partie verte : la chlorophylle, contenue dans les chloroplastes au niveau des thylakoïdes, capte la lumière ; elle réunit les chlorophylles a et b, les xanthophylles et le carotène.",
      "conceptExplanation": "Une plante à feuilles panachées est éclairée en présence de dioxyde de carbone pendant une journée ; après ébullition et décoloration à l’alcool bouillant, on teste l’amidon avec l’eau iodée : la partie verte de la feuille se colore en bleu violacé, alors que la partie non verte ne se colore pas.\nLes feuilles vertes contiennent des structures appelées chloroplastes, renfermant la chlorophylle au niveau de ses thylakoïdes. La chlorophylle présente dans la partie verte capte la lumière et permet la production de l’amidon, matière organique, d’où la coloration bleu violacé.\nLa chromatographie permet de séparer les différents pigments de la chlorophylle brute contenue dans les chloroplastes : la chlorophylle a et la chlorophylle b, de couleur verte, les xanthophylles, de couleur jaune, et le carotène, de couleur jaune orangé.",
      "keyRule": "Coloration bleu violacé à l’eau iodée égale amidon produit dans la partie verte seulement.",
      "formulas": [],
      "workedExample": {
        "title": "La feuille de haricot à l’eau iodée",
        "statement": "Une feuille exposée à la lumière, bouillie, décolorée à l’alcool puis rincée, se colore en bleu violacé à l’eau iodée. Interprète cette coloration.",
        "methodSteps": [
          "La coloration bleu violacé signale la présence d’amidon.",
          "La feuille verte a donc produit de l’amidon après avoir capté la lumière.",
          "Le phénomène de production de matière organique est la photosynthèse."
        ],
        "conclusion": "C’est le corrigé de la situation d’évaluation du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le chloroplaste et les thylakoïdes",
          "stepTheme": "Le chloroplaste et les thylakoïdes",
          "stepBadge": "Le chloroplaste et les thylakoïdes",
          "paragraphText": "• Chloroplaste : structure des feuilles vertes renfermant la chlorophylle au niveau de ses thylakoïdes.\nC’est dans le chloroplaste que se déroule la photosynthèse.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p03_q1",
            "type": "mcq",
            "prompt": "La chlorophylle est contenue dans :",
            "options": [
              "Le noyau seul",
              "Les racines",
              "Les chloroplastes, au niveau des thylakoïdes",
              "La membrane de la cellule animale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’interprétation de l’expérience de la feuille panachée situe la chlorophylle dans les chloroplastes, aux thylakoïdes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le test à l’eau iodée",
          "stepTheme": "Le test à l’eau iodée",
          "stepBadge": "Le test à l’eau iodée",
          "paragraphText": "Après décoloration, seule la partie verte de la feuille panachée se colore en bleu violacé à l’eau iodée.\nCette coloration révèle la production d’amidon, matière organique.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p03_q2",
            "type": "mcq",
            "prompt": "La coloration bleu violacé à l’eau iodée indique la présence :",
            "options": [
              "D’amidon",
              "De carotène seul",
              "D’oxygène",
              "De dioxyde de carbone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé des situations relie la coloration bleu violacé à la production d’amidon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les pigments de la chlorophylle brute",
          "stepTheme": "Les pigments de la chlorophylle brute",
          "stepBadge": "Les pigments de la chlorophylle brute",
          "paragraphText": "La chromatographie sépare les pigments de la chlorophylle brute : chlorophylles a et b vertes, xanthophylles jaunes et carotène jaune orangé.\nLa mélanine et l’anthocyane ne font pas partie de cette liste corrigée.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p03_q3",
            "type": "mcq",
            "prompt": "Les pigments de la chlorophylle brute sont :",
            "options": [
              "Cinq pigments dont la mélanine",
              "La mélanine et l’anthocyane",
              "Uniquement la chlorophylle a",
              "Les chlorophylles a et b, les xanthophylles et le carotène"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le corrigé de l’activité relève les chiffres correspondant à ces quatre pigments."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Les thylakoïdes ne sont pas des pigments",
          "stepTheme": "Les thylakoïdes ne sont pas des pigments",
          "stepBadge": "Les thylakoïdes ne sont pas des pigments",
          "paragraphText": "Piège corrigé : affirmer que les thylakoïdes sont des pigments chlorophylliens est faux.\nLes thylakoïdes sont les membranes du chloroplaste où se trouve la chlorophylle, et on ne distingue pas cinq pigments dans la liste du cours.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p03_q4",
            "type": "mcq",
            "prompt": "L’affirmation « les thylakoïdes sont des pigments chlorophylliens » est :",
            "options": [
              "Vraie",
              "Fausse",
              "Vraie après chromatographie",
              "Vraie chez la fougère"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé de l’activité 2 sur la chlorophylle donne faux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La partie non verte ne produit pas d’amidon",
          "stepTheme": "La partie non verte ne produit pas d’amidon",
          "stepBadge": "La partie non verte ne produit pas d’amidon",
          "paragraphText": "Exemple de comparaison dans la même feuille : la partie non verte ne se colore pas en bleu violacé.\nSans chlorophylle, pas de captation de lumière ni de production d’amidon.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p03_q5",
            "type": "mcq",
            "prompt": "La partie non verte de la feuille panachée ne se colore pas car elle :",
            "options": [
              "Manque de chlorophylle pour capter la lumière",
              "Est à l’obscurité forcée",
              "A perdu son eau iodée",
              "Contient trop d’amidon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’analyse oppose partie verte colorée et partie non verte non colorée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le rôle capteur de la chlorophylle",
          "stepTheme": "Le rôle capteur de la chlorophylle",
          "stepBadge": "Le rôle capteur de la chlorophylle",
          "paragraphText": "La conclusion de la partie II dit que la plante produit de la matière organique grâce à la chlorophylle qui capte l’énergie lumineuse.\nC’est ce captage qui lance la production.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p03_q6",
            "type": "mcq",
            "prompt": "La chlorophylle permet la production de matière organique car elle :",
            "options": [
              "Remplace le dioxyde de carbone",
              "Produit la nuit",
              "Capte l’énergie lumineuse",
              "Détruit l’amidon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la conclusion exacte de la partie II."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l08_photosynthese_p03_q1",
          "type": "mcq",
          "prompt": "La chlorophylle est contenue dans :",
          "options": [
            "Le noyau seul",
            "Les racines",
            "Les chloroplastes, au niveau des thylakoïdes",
            "La membrane de la cellule animale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’interprétation de l’expérience de la feuille panachée situe la chlorophylle dans les chloroplastes, aux thylakoïdes."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p03_q2",
          "type": "mcq",
          "prompt": "La coloration bleu violacé à l’eau iodée indique la présence :",
          "options": [
            "D’amidon",
            "De carotène seul",
            "D’oxygène",
            "De dioxyde de carbone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé des situations relie la coloration bleu violacé à la production d’amidon."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p03_q3",
          "type": "mcq",
          "prompt": "Les pigments de la chlorophylle brute sont :",
          "options": [
            "Cinq pigments dont la mélanine",
            "La mélanine et l’anthocyane",
            "Uniquement la chlorophylle a",
            "Les chlorophylles a et b, les xanthophylles et le carotène"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le corrigé de l’activité relève les chiffres correspondant à ces quatre pigments."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p03_q4",
          "type": "mcq",
          "prompt": "L’affirmation « les thylakoïdes sont des pigments chlorophylliens » est :",
          "options": [
            "Vraie",
            "Fausse",
            "Vraie après chromatographie",
            "Vraie chez la fougère"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé de l’activité 2 sur la chlorophylle donne faux."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p03_q5",
          "type": "mcq",
          "prompt": "La partie non verte de la feuille panachée ne se colore pas car elle :",
          "options": [
            "Manque de chlorophylle pour capter la lumière",
            "Est à l’obscurité forcée",
            "A perdu son eau iodée",
            "Contient trop d’amidon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’analyse oppose partie verte colorée et partie non verte non colorée."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p03_q6",
          "type": "mcq",
          "prompt": "La chlorophylle permet la production de matière organique car elle :",
          "options": [
            "Remplace le dioxyde de carbone",
            "Produit la nuit",
            "Capte l’énergie lumineuse",
            "Détruit l’amidon"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la conclusion exacte de la partie II."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l08_photosynthese_p04",
      "order": 4,
      "title": "La phase lumineuse : photolyse de l’eau, ATP et réduction du transporteur",
      "summary": "Dans les membranes des thylakoïdes, la lumière excite la chlorophylle, la photolyse de l’eau libère du dioxygène, la chaîne photosynthétique produit de l’ATP et réduit le transporteur final.",
      "conceptExplanation": "La phase lumineuse ou phase claire se déroule à la lumière, dans les membranes des thylakoïdes ; elle commence par la capture de l’énergie lumineuse par la chlorophylle et aboutit à la production d’énergie chimique avec libération de dioxygène.\nÉtape 1 : en présence d’énergie lumineuse, la chlorophylle est excitée ; on obtient une chlorophylle oxydée et des électrons, pris en charge dans la chaîne photosynthétique, chaîne d’oxydoréduction. La chlorophylle oxydée capte des électrons provenant de la décomposition de l’eau, ou photolyse de l’eau, pour devenir la chlorophylle réduite ; au cours de la photolyse, il y a libération d’oxygène.\nÉtape 2 : la chaîne transporte les électrons jusqu’à la sphère pédonculée, où il y a transformation de l’ADP en ATP : c’est la production d’ATP. Étape 3 : les électrons transférés et les protons issus de la photolyse réduisent le transporteur final, qui passe de sa forme oxydée à sa forme réduite.",
      "keyRule": "Phase lumineuse égale thylakoïdes, photolyse, oxygène libéré, ATP et transporteur réduit.",
      "formulas": [
        {
          "name": "Photolyse de l’eau",
          "formula": "H_2O \\rightarrow 2H^+ + \\frac{1}{2}O_2 + 2e^-",
          "note": "Équation donnée dans le résumé pour l’étape 1 de la phase lumineuse."
        }
      ],
      "workedExample": {
        "title": "Compléter le texte de la phase lumineuse",
        "statement": "Complète : la phase lumineuse se déroule dans les membranes des … ; en présence d’énergie lumineuse, la chlorophylle est excitée ; les électrons de la photolyse rendent la chlorophylle …",
        "methodSteps": [
          "Les membranes sont celles des thylakoïdes.",
          "La chlorophylle excitée devient oxydée après perte d’électrons.",
          "La photolyse de l’eau libère de l’oxygène et fournit les électrons."
        ],
        "conclusion": "Le corrigé du texte lacunaire donne les six mots dans l’ordre du mécanisme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le lieu de la phase lumineuse",
          "stepTheme": "Le lieu de la phase lumineuse",
          "stepBadge": "Le lieu de la phase lumineuse",
          "paragraphText": "• Phase lumineuse : première phase de la photosynthèse, qui se déroule à la lumière dans les membranes des thylakoïdes.\nElle produit de l’énergie chimique avec libération de dioxygène.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p04_q1",
            "type": "mcq",
            "prompt": "La phase lumineuse se déroule dans :",
            "options": [
              "Le stroma",
              "Les membranes des thylakoïdes",
              "Le noyau",
              "La racine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte lacunaire corrigé et l’étape 1 situent la phase dans les membranes des thylakoïdes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La photolyse de l’eau",
          "stepTheme": "La photolyse de l’eau",
          "stepBadge": "La photolyse de l’eau",
          "paragraphText": "La décomposition de l’eau, ou photolyse, fournit des électrons à la chlorophylle oxydée.\nElle s’accompagne d’une libération d’oxygène.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p04_q2",
            "type": "mcq",
            "prompt": "Au cours de la photolyse de l’eau, il y a :",
            "options": [
              "Formation d’amidon directe",
              "Production de chaleur seule",
              "Absorption de dioxyde de carbone",
              "Libération d’oxygène"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé et le texte lacunaire retiennent la libération d’oxygène."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La production d’ATP",
          "stepTheme": "La production d’ATP",
          "stepBadge": "La production d’ATP",
          "paragraphText": "La chaîne photosynthétique transporte les électrons jusqu’à la sphère pédonculée.\nIl y a alors transformation de l’ADP en ATP, avec sortie des protons dans le stroma.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p04_q3",
            "type": "mcq",
            "prompt": "L’étape 2 de la phase lumineuse correspond à :",
            "options": [
              "La respiration",
              "La fixation du dioxyde de carbone",
              "La production d’ATP à partir de l’ADP",
              "La formation du glucose"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé nomme cette étape production d’ATP."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La chaîne photosynthétique",
          "stepTheme": "La chaîne photosynthétique",
          "stepBadge": "La chaîne photosynthétique",
          "paragraphText": "• Chaîne photosynthétique : chaîne d’oxydoréduction qui prend en charge les électrons libérés par la chlorophylle excitée.\nElle les transporte jusqu’à la sphère pédonculée puis vers le transporteur final.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p04_q4",
            "type": "mcq",
            "prompt": "La chaîne photosynthétique est une chaîne :",
            "options": [
              "D’oxydoréduction transportant les électrons",
              "De fabrication d’amidon",
              "De décomposition du glucose",
              "Respiratoire mitochondriale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’étape 1 la définit comme une chaîne d’oxydoréduction."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La réduction du transporteur final",
          "stepTheme": "La réduction du transporteur final",
          "stepBadge": "La réduction du transporteur final",
          "paragraphText": "Piège : l’étape 3 ne produit ni oxygène ni amidon.\nLes électrons et les protons réduisent le transporteur final, qui passe à sa forme réduite.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p04_q5",
            "type": "mcq",
            "prompt": "L’étape 3 de la phase lumineuse correspond à :",
            "options": [
              "La production d’ATP seule",
              "Le cycle de Calvin",
              "La photolyse de l’eau",
              "La réduction du transporteur final"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé nomme l’étape 3 réduction du transporteur final."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La chlorophylle oxydée puis réduite",
          "stepTheme": "La chlorophylle oxydée puis réduite",
          "stepBadge": "La chlorophylle oxydée puis réduite",
          "paragraphText": "Exemple d’enchaînement : excitée par la lumière, la chlorophylle perd des électrons et devient oxydée.\nElle capte ensuite les électrons de la photolyse pour devenir réduite.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p04_q6",
            "type": "mcq",
            "prompt": "Après excitation par la lumière, la chlorophylle devient d’abord :",
            "options": [
              "Un pigment jaune",
              "Oxydée, avec libération d’électrons",
              "Réduite",
              "Inactive définitivement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’étape 1 dit : on obtient une chlorophylle oxydée et des électrons."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l08_photosynthese_p04_q1",
          "type": "mcq",
          "prompt": "La phase lumineuse se déroule dans :",
          "options": [
            "Le stroma",
            "Les membranes des thylakoïdes",
            "Le noyau",
            "La racine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte lacunaire corrigé et l’étape 1 situent la phase dans les membranes des thylakoïdes."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p04_q2",
          "type": "mcq",
          "prompt": "Au cours de la photolyse de l’eau, il y a :",
          "options": [
            "Formation d’amidon directe",
            "Production de chaleur seule",
            "Absorption de dioxyde de carbone",
            "Libération d’oxygène"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé et le texte lacunaire retiennent la libération d’oxygène."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p04_q3",
          "type": "mcq",
          "prompt": "L’étape 2 de la phase lumineuse correspond à :",
          "options": [
            "La respiration",
            "La fixation du dioxyde de carbone",
            "La production d’ATP à partir de l’ADP",
            "La formation du glucose"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé nomme cette étape production d’ATP."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p04_q4",
          "type": "mcq",
          "prompt": "La chaîne photosynthétique est une chaîne :",
          "options": [
            "D’oxydoréduction transportant les électrons",
            "De fabrication d’amidon",
            "De décomposition du glucose",
            "Respiratoire mitochondriale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’étape 1 la définit comme une chaîne d’oxydoréduction."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p04_q5",
          "type": "mcq",
          "prompt": "L’étape 3 de la phase lumineuse correspond à :",
          "options": [
            "La production d’ATP seule",
            "Le cycle de Calvin",
            "La photolyse de l’eau",
            "La réduction du transporteur final"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé nomme l’étape 3 réduction du transporteur final."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p04_q6",
          "type": "mcq",
          "prompt": "Après excitation par la lumière, la chlorophylle devient d’abord :",
          "options": [
            "Un pigment jaune",
            "Oxydée, avec libération d’électrons",
            "Réduite",
            "Inactive définitivement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’étape 1 dit : on obtient une chlorophylle oxydée et des électrons."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l08_photosynthese_p05",
      "order": 5,
      "title": "La phase sombre, le cycle de Calvin, l’équation globale et l’importance de la photosynthèse",
      "summary": "La phase sombre, dans le stroma, fixe le dioxyde de carbone sur le ribulose diphosphate pour former des trioses par le cycle de Calvin ; l’équation globale produit un glucose et six dioxygènes, au bénéfice de toute la biosphère.",
      "conceptExplanation": "La phase sombre ne nécessite pas de lumière mais la présence de dioxyde de carbone ; elle utilise l’énergie chimique pour produire la matière organique grâce au cycle de Calvin. Le dioxyde de carbone absorbé, en arrivant au niveau du stroma, se fixe sur un corps endogène qui est un sucre en cinq carbones, le ribulose diphosphate, grâce à une enzyme appelée carboxylase, pour donner un sucre en six carbones très instable, rapidement hydrolysé en deux molécules de trioses, sucres en trois carbones : l’acide phosphoglycérique.\nLes trioses formés servent d’une part à régénérer le ribulose diphosphate et d’autre part à la fabrication des glucides, lipides et protides : la phase sombre est aussi appelée phase d’assimilation, et l’ensemble de ses réactions constitue le cycle de Calvin.\nLa photosynthèse est très importante pour la biosphère : la matière organique produite sert de nourriture aux êtres vivants, l’oxygène dégagé sert à la respiration des êtres vivants et l’absorption du dioxyde de carbone par les plantes vertes purifie l’air.",
      "keyRule": "Phase sombre égale stroma, fixation du dioxyde de carbone, cycle de Calvin, matière organique.",
      "formulas": [
        {
          "name": "Équation globale de la photosynthèse",
          "formula": "6CO_2 + 6H_2O \\rightarrow C_6H_{12}O_6 + 6O_2",
          "note": "Équation globale donnée dans le résumé, avec l’énergie lumineuse et la chlorophylle."
        }
      ],
      "workedExample": {
        "title": "Dégager trois importances de la photosynthèse",
        "statement": "À partir de la conclusion générale, dégage trois importances de la photosynthèse dans la biosphère.",
        "methodSteps": [
          "La matière organique produite sert de nourriture aux êtres vivants.",
          "L’oxygène dégagé sert à la respiration des êtres vivants.",
          "L’absorption du dioxyde de carbone par les plantes vertes purifie l’air."
        ],
        "conclusion": "Ce sont les trois importances du corrigé de la situation d’évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La phase sombre",
          "stepTheme": "La phase sombre",
          "stepBadge": "La phase sombre",
          "paragraphText": "• Phase sombre ou phase d’assimilation : phase indépendante de la lumière, qui utilise l’énergie chimique et le dioxyde de carbone pour produire la matière organique.\nElle se déroule au niveau du stroma.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p05_q1",
            "type": "mcq",
            "prompt": "La phase sombre se déroule :",
            "options": [
              "Au niveau du stroma",
              "Dans les membranes des thylakoïdes",
              "Dans le noyau",
              "Uniquement la nuit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé situe l’arrivée du dioxyde de carbone et ses réactions au niveau du stroma."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La fixation du dioxyde de carbone",
          "stepTheme": "La fixation du dioxyde de carbone",
          "stepBadge": "La fixation du dioxyde de carbone",
          "paragraphText": "Le dioxyde de carbone se fixe sur le ribulose diphosphate, sucre en cinq carbones, grâce à l’enzyme carboxylase.\nLe produit est un sucre en six carbones très instable.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p05_q2",
            "type": "mcq",
            "prompt": "Le dioxyde de carbone se fixe sur :",
            "options": [
              "Un triose",
              "L’ATP",
              "Le ribulose diphosphate, sucre en cinq carbones",
              "L’acide phosphoglycérique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la première réaction de la phase sombre décrite dans le résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La formation des trioses",
          "stepTheme": "La formation des trioses",
          "stepBadge": "La formation des trioses",
          "paragraphText": "Le sucre en six carbones, très instable, est rapidement hydrolysé.\nIl donne deux molécules de trioses, l’acide phosphoglycérique.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p05_q3",
            "type": "mcq",
            "prompt": "L’hydrolyse du sucre en six carbones donne :",
            "options": [
              "Du ribulose diphosphate seul",
              "Deux molécules de trioses, l’acide phosphoglycérique",
              "Un seul glucose",
              "Du dioxygène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé nomme l’acide phosphoglycérique comme triose formé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le cycle de Calvin",
          "stepTheme": "Le cycle de Calvin",
          "stepBadge": "Le cycle de Calvin",
          "paragraphText": "• Cycle de Calvin : ensemble de toutes les réactions qui se déroulent pendant la phase sombre.\nLes trioses y régénèrent le ribulose diphosphate et fabriquent glucides, lipides et protides.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p05_q4",
            "type": "mcq",
            "prompt": "Le cycle de Calvin désigne :",
            "options": [
              "La phase lumineuse entière",
              "La photolyse de l’eau",
              "La chaîne photosynthétique",
              "L’ensemble des réactions de la phase sombre"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la définition donnée dans l’interprétation de la phase sombre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La phase sombre n’exige pas l’obscurité totale",
          "stepTheme": "La phase sombre n’exige pas l’obscurité totale",
          "stepBadge": "La phase sombre n’exige pas l’obscurité totale",
          "paragraphText": "Piège de vocabulaire : sombre signifie indépendante de la lumière, pas obligatoirement nocturne.\nLe résumé dit qu’elle ne nécessite pas de lumière mais la présence de dioxyde de carbone.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p05_q5",
            "type": "mcq",
            "prompt": "La phase sombre nécessite :",
            "options": [
              "Uniquement la nuit",
              "L’absence de dioxyde de carbone",
              "La présence de dioxyde de carbone, sans exiger de lumière",
              "L’obscurité totale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé formule exactement cette condition."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’équation globale",
          "stepTheme": "L’équation globale",
          "stepBadge": "L’équation globale",
          "paragraphText": "Exemple d’équation à retenir : six dioxydes de carbone et six eaux donnent un glucose et six dioxygènes, sous énergie lumineuse et chlorophylle.\nC’est l’équation globale de la photosynthèse du résumé.",
          "exercise": {
            "id": "premiere_c_svt_l08_photosynthese_p05_q6",
            "type": "mcq",
            "prompt": "Dans l’équation globale, le sucre produit est :",
            "options": [
              "Le glucose, de formule donnée dans l’équation",
              "Un triose seul",
              "L’amidon directement nommé",
              "Le ribulose diphosphate"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’équation globale du résumé produit le glucose comme matière organique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l08_photosynthese_p05_q1",
          "type": "mcq",
          "prompt": "La phase sombre se déroule :",
          "options": [
            "Au niveau du stroma",
            "Dans les membranes des thylakoïdes",
            "Dans le noyau",
            "Uniquement la nuit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé situe l’arrivée du dioxyde de carbone et ses réactions au niveau du stroma."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p05_q2",
          "type": "mcq",
          "prompt": "Le dioxyde de carbone se fixe sur :",
          "options": [
            "Un triose",
            "L’ATP",
            "Le ribulose diphosphate, sucre en cinq carbones",
            "L’acide phosphoglycérique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la première réaction de la phase sombre décrite dans le résumé."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p05_q3",
          "type": "mcq",
          "prompt": "L’hydrolyse du sucre en six carbones donne :",
          "options": [
            "Du ribulose diphosphate seul",
            "Deux molécules de trioses, l’acide phosphoglycérique",
            "Un seul glucose",
            "Du dioxygène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé nomme l’acide phosphoglycérique comme triose formé."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p05_q4",
          "type": "mcq",
          "prompt": "Le cycle de Calvin désigne :",
          "options": [
            "La phase lumineuse entière",
            "La photolyse de l’eau",
            "La chaîne photosynthétique",
            "L’ensemble des réactions de la phase sombre"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la définition donnée dans l’interprétation de la phase sombre."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p05_q5",
          "type": "mcq",
          "prompt": "La phase sombre nécessite :",
          "options": [
            "Uniquement la nuit",
            "L’absence de dioxyde de carbone",
            "La présence de dioxyde de carbone, sans exiger de lumière",
            "L’obscurité totale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé formule exactement cette condition."
        },
        {
          "id": "premiere_c_svt_l08_photosynthese_p05_q6",
          "type": "mcq",
          "prompt": "Dans l’équation globale, le sucre produit est :",
          "options": [
            "Le glucose, de formule donnée dans l’équation",
            "Un triose seul",
            "L’amidon directement nommé",
            "Le ribulose diphosphate"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’équation globale du résumé produit le glucose comme matière organique."
        }
      ]
    }
  ]
};
