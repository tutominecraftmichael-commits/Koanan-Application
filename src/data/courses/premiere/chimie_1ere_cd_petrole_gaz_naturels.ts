import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Pétrole et gaz naturels » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Pétrole et gaz naturels » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const CHIMIE_1ERE_CD_L04_PETROLE_GAZ_NATURELS: CurriculumChapter = {
  "id": "premiere_c_chimie_l04_petrole_gaz_naturels",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 4,
  "title": "Leçon 4 : Pétrole et gaz naturels",
  "summary": "Le pétrole et les gaz naturels naissent de la décomposition lente de matières organiques : on étudie leur composition, les opérations du raffinage (fractionnement, craquage, reformage), l'utilité de leurs produits dérivés et leur impact sur l'environnement.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Pétrole et gaz naturels » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p01",
      "order": 1,
      "title": "Origine et composition du pétrole et des gaz naturels",
      "summary": "Formation à partir de matières organiques décomposées et composition en hydrocarbures.",
      "conceptExplanation": "Le pétrole et les gaz naturels sont formés par la décomposition des matières organiques animales ou végétales.\nCes débris se déposent au fond des océans, des mers et des lacs. Ils constituent les sédiments organiques et s'enfouissent progressivement lors des plissements de l'écorce terrestre.\nÀ l'abri de l'oxygène de l'air et sous l'action des bactéries, ces sédiments se décomposent très lentement et se transforment en hydrocarbures : soit à l'état gazeux, les gaz naturels, soit à l'état liquide, le pétrole.\nLe pétrole formé est un mélange essentiellement composé d'hydrocarbures saturés, les alcanes, souvent d'hydrocarbures aromatiques, mais rarement d'hydrocarbures insaturés. Les gaz naturels, quant à eux, sont à 90 % constitués de méthane.",
      "keyRule": "Matières organiques enfouies, décomposition lente à l'abri de l'air sous l'action des bactéries : gaz naturels surtout méthane, pétrole surtout alcanes.",
      "formulas": [
        {
          "name": "Constituant principal des gaz naturels",
          "formula": "\\mathrm{CH_4}",
          "note": "Le méthane représente 90 % des gaz naturels."
        }
      ],
      "workedExample": {
        "title": "De la matière organique au pétrole",
        "statement": "Résume, dans l'ordre, les étapes de formation du pétrole décrites dans le document.",
        "methodSteps": [
          "Des débris de matières organiques animales ou végétales se déposent au fond des océans, des mers et des lacs.",
          "Ces sédiments organiques s'enfouissent progressivement lors des plissements de l'écorce terrestre.",
          "À l'abri de l'oxygène de l'air, sous l'action des bactéries, ils se décomposent très lentement en hydrocarbures."
        ],
        "conclusion": "On obtient des hydrocarbures gazeux, les gaz naturels, ou liquides, le pétrole."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'origine organique du pétrole",
          "stepTheme": "L'origine organique du pétrole",
          "stepBadge": "L'origine organique du pétrole",
          "paragraphText": "• Origine du pétrole et des gaz naturels : la décomposition des matières organiques animales ou végétales.\nCes débris forment les sédiments organiques au fond des océans, des mers et des lacs.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p01_q1",
            "type": "mcq",
            "prompt": "Le pétrole et les gaz naturels proviennent de :",
            "options": [
              "La décomposition de matières organiques animales ou végétales",
              "La fusion de roches volcaniques",
              "La solidification du magma uniquement",
              "La synthèse en laboratoire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document attribue leur formation à la décomposition lente de matières organiques enfouies."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les conditions de la transformation",
          "stepTheme": "Les conditions de la transformation",
          "stepBadge": "Les conditions de la transformation",
          "paragraphText": "Les sédiments organiques s'enfouissent lors des plissements de l'écorce terrestre.\nÀ l'abri de l'oxygène de l'air et sous l'action des bactéries, ils se décomposent très lentement en hydrocarbures.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p01_q2",
            "type": "mcq",
            "prompt": "La transformation des sédiments organiques en hydrocarbures se fait :",
            "options": [
              "Rapidement, au contact de l'air",
              "Sous l'action de la lumière du soleil",
              "Très lentement, à l'abri de l'oxygène de l'air et sous l'action des bactéries",
              "Par combustion dans les profondeurs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux conditions du document sont l'absence d'oxygène de l'air et l'action des bactéries, sur une très longue durée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La composition du pétrole",
          "stepTheme": "La composition du pétrole",
          "stepBadge": "La composition du pétrole",
          "paragraphText": "Le pétrole est un mélange essentiellement composé d'hydrocarbures saturés, les alcanes.\nIl contient souvent des hydrocarbures aromatiques, mais rarement des hydrocarbures insaturés.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p01_q3",
            "type": "mcq",
            "prompt": "Le pétrole est essentiellement composé :",
            "options": [
              "D'hydrocarbures insaturés",
              "D'hydrocarbures saturés, les alcanes",
              "De composés oxygénés",
              "D'eau et de sels minéraux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document précise : surtout des alcanes, souvent des aromatiques, rarement des insaturés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La composition des gaz naturels",
          "stepTheme": "La composition des gaz naturels",
          "stepBadge": "La composition des gaz naturels",
          "paragraphText": "Les gaz naturels sont les hydrocarbures à l'état gazeux issus de la même décomposition.\nIls sont à 90 % constitués de méthane, $\\mathrm{CH_4}$.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p01_q4",
            "type": "mcq",
            "prompt": "Les gaz naturels sont constitués à 90 % de :",
            "options": [
              "Propane",
              "Butane",
              "Dioxyde de carbone",
              "Méthane"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le chiffre du document : 90 % de méthane dans les gaz naturels."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Pétrole liquide, gaz naturels gazeux",
          "stepTheme": "Pétrole liquide, gaz naturels gazeux",
          "stepBadge": "Pétrole liquide, gaz naturels gazeux",
          "paragraphText": "Piège : pétrole et gaz naturels ont la même origine, mais pas le même état.\nLe document distingue les hydrocarbures à l'état gazeux, les gaz naturels, de ceux à l'état liquide, le pétrole.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p01_q5",
            "type": "mcq",
            "prompt": "Dans le document, le pétrole correspond aux hydrocarbures à l'état :",
            "options": [
              "Gazeux",
              "Liquide",
              "Solide",
              "Plasma"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le pétrole est la fraction liquide ; les gaz naturels sont la fraction gazeuse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les sédiments organiques",
          "stepTheme": "Les sédiments organiques",
          "stepBadge": "Les sédiments organiques",
          "paragraphText": "Les débris organiques se déposent au fond des océans, des mers et des lacs.\nIls y constituent ce que le document appelle les sédiments organiques, point de départ de la formation.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p01_q6",
            "type": "mcq",
            "prompt": "On appelle sédiments organiques :",
            "options": [
              "Les débris de matières organiques déposés au fond des océans, mers et lacs",
              "Les roches rejetées par les volcans",
              "Les résidus du raffinage",
              "Les produits dérivés du pétrole"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition donnée au début du document."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p01_q1",
          "type": "mcq",
          "prompt": "Le pétrole et les gaz naturels proviennent de :",
          "options": [
            "La décomposition de matières organiques animales ou végétales",
            "La fusion de roches volcaniques",
            "La solidification du magma uniquement",
            "La synthèse en laboratoire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document attribue leur formation à la décomposition lente de matières organiques enfouies."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p01_q2",
          "type": "mcq",
          "prompt": "La transformation des sédiments organiques en hydrocarbures se fait :",
          "options": [
            "Rapidement, au contact de l'air",
            "Sous l'action de la lumière du soleil",
            "Très lentement, à l'abri de l'oxygène de l'air et sous l'action des bactéries",
            "Par combustion dans les profondeurs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux conditions du document sont l'absence d'oxygène de l'air et l'action des bactéries, sur une très longue durée."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p01_q3",
          "type": "mcq",
          "prompt": "Le pétrole est essentiellement composé :",
          "options": [
            "D'hydrocarbures insaturés",
            "D'hydrocarbures saturés, les alcanes",
            "De composés oxygénés",
            "D'eau et de sels minéraux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document précise : surtout des alcanes, souvent des aromatiques, rarement des insaturés."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p01_q4",
          "type": "mcq",
          "prompt": "Les gaz naturels sont constitués à 90 % de :",
          "options": [
            "Propane",
            "Butane",
            "Dioxyde de carbone",
            "Méthane"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le chiffre du document : 90 % de méthane dans les gaz naturels."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p01_q5",
          "type": "mcq",
          "prompt": "Dans le document, le pétrole correspond aux hydrocarbures à l'état :",
          "options": [
            "Gazeux",
            "Liquide",
            "Solide",
            "Plasma"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le pétrole est la fraction liquide ; les gaz naturels sont la fraction gazeuse."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p01_q6",
          "type": "mcq",
          "prompt": "On appelle sédiments organiques :",
          "options": [
            "Les débris de matières organiques déposés au fond des océans, mers et lacs",
            "Les roches rejetées par les volcans",
            "Les résidus du raffinage",
            "Les produits dérivés du pétrole"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition donnée au début du document."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p02",
      "order": 2,
      "title": "Le raffinage et le fractionnement du pétrole",
      "summary": "Le pétrole brut, inutilisable tel quel, est séparé par distillation fractionnée dans une colonne à plateaux.",
      "conceptExplanation": "Le pétrole est un mélange inutilisable à l'état brut. Il faut donc le fractionner par distillation et traiter chimiquement les fractions obtenues par les opérations de craquage et de reformage pour obtenir les produits recherchés.\nL'ensemble de ces opérations est appelé raffinage.\nLe fractionnement du pétrole, ou distillation fractionnée, consiste à séparer les différents constituants du pétrole selon leurs températures d'ébullition, dans une tour appelée colonne à plateaux.\nC'est l'exercice 1 du document qui le rappelle : le fractionnement a pour but de transformer le pétrole brut en produits utilisables.",
      "keyRule": "Raffinage = fractionnement + craquage + reformage ; le fractionnement trie les constituants selon leur température d'ébullition dans une colonne à plateaux.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le fractionnement (exercice 1)",
        "statement": "Explique le fractionnement du pétrole brut et dis pourquoi cette opération doit avoir lieu, comme dans l'exercice 1 du document.",
        "methodSteps": [
          "Le pétrole brut est chauffé et introduit dans une colonne à plateaux.",
          "Ses constituants se séparent selon leurs températures d'ébullition.",
          "Cette séparation est nécessaire parce que le pétrole est un mélange inutilisable à l'état brut."
        ],
        "conclusion": "Le fractionnement transforme le pétrole brut en fractions, donc en produits utilisables."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le raffinage",
          "stepTheme": "Le raffinage",
          "stepBadge": "Le raffinage",
          "paragraphText": "• Raffinage : ensemble des opérations qui traitent le pétrole brut, c'est-à-dire le fractionnement et les traitements chimiques des fractions, craquage et reformage.\nIl permet d'obtenir les produits recherchés à partir du pétrole brut.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p02_q1",
            "type": "mcq",
            "prompt": "Le raffinage du pétrole désigne :",
            "options": [
              "L'extraction du pétrole du sous-sol",
              "La vente des produits dérivés",
              "Le transport du pétrole par bateau",
              "L'ensemble des opérations de fractionnement et de traitement chimique du pétrole brut"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le document définit le raffinage comme l'ensemble fractionnement, craquage et reformage."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le fractionnement",
          "stepTheme": "Le fractionnement",
          "stepBadge": "Le fractionnement",
          "paragraphText": "• Fractionnement (ou distillation fractionnée) : séparation des différents constituants du pétrole selon leurs températures d'ébullition.\nCette opération se fait dans une tour appelée colonne à plateaux.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p02_q2",
            "type": "mcq",
            "prompt": "Le fractionnement du pétrole consiste à séparer ses constituants selon :",
            "options": [
              "Leur masse",
              "Leur couleur",
              "Leurs températures d'ébullition",
              "Leur odeur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque constituant se condense à un niveau de la colonne correspondant à sa température d'ébullition."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La colonne à plateaux",
          "stepTheme": "La colonne à plateaux",
          "stepBadge": "La colonne à plateaux",
          "paragraphText": "Le fractionnement se réalise dans une tour appelée colonne à plateaux.\nC'est dans cette colonne que les différentes fractions du pétrole sont recueillies séparément.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p02_q3",
            "type": "mcq",
            "prompt": "Le fractionnement du pétrole a lieu dans :",
            "options": [
              "Un chalumeau",
              "Une colonne à plateaux",
              "Un ballon de laboratoire uniquement",
              "Une cuve de fermentation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document nomme la tour de distillation « colonne à plateaux »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Pourquoi fractionner ?",
          "stepTheme": "Pourquoi fractionner ?",
          "stepBadge": "Pourquoi fractionner ?",
          "paragraphText": "Le pétrole est un mélange inutilisable à l'état brut.\nLe fractionnement a pour but de le transformer en produits utilisables, comme le demande l'exercice 1 du document.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p02_q4",
            "type": "mcq",
            "prompt": "Le fractionnement du pétrole brut est nécessaire parce que :",
            "options": [
              "Le pétrole brut est trop pur",
              "Le pétrole est un mélange inutilisable à l'état brut",
              "Le pétrole contient trop d'eau uniquement",
              "Les alcanes sont absents du pétrole"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la réponse de l'exercice 1 : à l'état brut, le mélange ne peut pas être utilisé tel quel."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Fractionnement ou traitement chimique ?",
          "stepTheme": "Fractionnement ou traitement chimique ?",
          "stepBadge": "Fractionnement ou traitement chimique ?",
          "paragraphText": "Piège : le fractionnement seul ne change pas la nature chimique des molécules, il les trie.\nLes transformations chimiques des fractions relèvent des autres opérations du raffinage, le craquage et le reformage.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p02_q5",
            "type": "mcq",
            "prompt": "Le fractionnement du pétrole est une opération qui, avant tout :",
            "options": [
              "Transforme les grosses molécules en petites",
              "Modifie la structure des hydrocarbures",
              "Sépare les constituants selon leur température d'ébullition",
              "Améliore l'indice d'octane"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le fractionnement est une séparation physique par distillation ; craquage et reformage sont les traitements chimiques."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les trois opérations de la situation d'évaluation",
          "stepTheme": "Les trois opérations de la situation d'évaluation",
          "stepBadge": "Les trois opérations de la situation d'évaluation",
          "paragraphText": "La situation d'évaluation du document demande trois opérations effectuées au cours du raffinage du pétrole brut.\nSon corrigé cite le fractionnement, le craquage et le reformage.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p02_q6",
            "type": "mcq",
            "prompt": "D'après le corrigé de la situation d'évaluation, les trois opérations du raffinage sont :",
            "options": [
              "Le fractionnement, le craquage et le reformage",
              "Le forage, le transport et la vente",
              "La combustion, la chloration et l'hydratation",
              "La polymérisation, la distillation et la fermentation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les trois opérations étudiées dans la leçon et reprises par le corrigé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p02_q1",
          "type": "mcq",
          "prompt": "Le raffinage du pétrole désigne :",
          "options": [
            "L'extraction du pétrole du sous-sol",
            "La vente des produits dérivés",
            "Le transport du pétrole par bateau",
            "L'ensemble des opérations de fractionnement et de traitement chimique du pétrole brut"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le document définit le raffinage comme l'ensemble fractionnement, craquage et reformage."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p02_q2",
          "type": "mcq",
          "prompt": "Le fractionnement du pétrole consiste à séparer ses constituants selon :",
          "options": [
            "Leur masse",
            "Leur couleur",
            "Leurs températures d'ébullition",
            "Leur odeur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque constituant se condense à un niveau de la colonne correspondant à sa température d'ébullition."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p02_q3",
          "type": "mcq",
          "prompt": "Le fractionnement du pétrole a lieu dans :",
          "options": [
            "Un chalumeau",
            "Une colonne à plateaux",
            "Un ballon de laboratoire uniquement",
            "Une cuve de fermentation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document nomme la tour de distillation « colonne à plateaux »."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p02_q4",
          "type": "mcq",
          "prompt": "Le fractionnement du pétrole brut est nécessaire parce que :",
          "options": [
            "Le pétrole brut est trop pur",
            "Le pétrole est un mélange inutilisable à l'état brut",
            "Le pétrole contient trop d'eau uniquement",
            "Les alcanes sont absents du pétrole"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la réponse de l'exercice 1 : à l'état brut, le mélange ne peut pas être utilisé tel quel."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p02_q5",
          "type": "mcq",
          "prompt": "Le fractionnement du pétrole est une opération qui, avant tout :",
          "options": [
            "Transforme les grosses molécules en petites",
            "Modifie la structure des hydrocarbures",
            "Sépare les constituants selon leur température d'ébullition",
            "Améliore l'indice d'octane"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le fractionnement est une séparation physique par distillation ; craquage et reformage sont les traitements chimiques."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p02_q6",
          "type": "mcq",
          "prompt": "D'après le corrigé de la situation d'évaluation, les trois opérations du raffinage sont :",
          "options": [
            "Le fractionnement, le craquage et le reformage",
            "Le forage, le transport et la vente",
            "La combustion, la chloration et l'hydratation",
            "La polymérisation, la distillation et la fermentation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les trois opérations étudiées dans la leçon et reprises par le corrigé."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p03",
      "order": 3,
      "title": "Le craquage et le reformage",
      "summary": "Transformer les hydrocarbures lourds en légers, ou modifier une structure sans changer le nombre de carbones.",
      "conceptExplanation": "Le craquage permet de transformer des hydrocarbures lourds en hydrocarbures légers.\nLe reformage consiste à modifier la structure d'un hydrocarbure sans modifier son nombre d'atomes de carbone. Cette opération se pratique sur les alcanes des essences légères afin d'améliorer leur indice d'octane.\nL'indice d'octane mesure la résistance à l'auto-allumage d'un carburant, c'est-à-dire l'allumage sans l'intervention de la bougie.\nL'exercice 4 du document applique le craquage au butane : une première réaction, pour 60 %, donne le méthylpropène et le dihydrogène ; une seconde, pour 40 %, donne le propène et le méthane.",
      "keyRule": "Craquage : lourds deviennent légers, le nombre de carbones diminue ; reformage : la structure change, mais le nombre de carbones reste le même.",
      "formulas": [
        {
          "name": "Craquage du butane, première réaction",
          "formula": "\\mathrm{C_4H_{10} \\longrightarrow C_4H_8 + H_2}",
          "note": "Produit principal : le méthylpropène, pour 60 %."
        },
        {
          "name": "Craquage du butane, seconde réaction",
          "formula": "\\mathrm{C_4H_{10} \\longrightarrow C_3H_6 + CH_4}",
          "note": "Produits : le propène et le méthane, pour 40 %."
        }
      ],
      "workedExample": {
        "title": "Pourcentages en masse des produits du craquage du butane (exercice 4)",
        "statement": "Le craquage du butane donne, pour 60 %, du méthylpropène et du dihydrogène, et pour 40 %, du propène et du méthane. Détermine le pourcentage en masse du méthylpropène parmi les produits, comme dans la solution du document.",
        "methodSteps": [
          "La masse molaire du butane $\\mathrm{C_4H_{10}}$ vaut $58\\ \\mathrm{g/mol}$ et celle du méthylpropène $\\mathrm{C_4H_8}$ vaut $56\\ \\mathrm{g/mol}$.",
          "Pour la première réaction, la masse de méthylpropène rapportée à la masse de butane transformé selon cette voie fait intervenir la proportion de 60 %.",
          "Le calcul de la solution donne $57{,}93\\ \\%$."
        ],
        "conclusion": "Le méthylpropène représente $57{,}93\\ \\%$ en masse des produits ; la solution complète donne aussi $2{,}07\\ \\%$ de dihydrogène, $28{,}96\\ \\%$ de propène et $11{,}03\\ \\%$ de méthane."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le craquage",
          "stepTheme": "Le craquage",
          "stepBadge": "Le craquage",
          "paragraphText": "• Craquage : opération qui permet de transformer des hydrocarbures lourds en hydrocarbures légers.\nElle casse les grosses molécules en molécules plus petites, plus demandées.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p03_q1",
            "type": "mcq",
            "prompt": "Le craquage permet de transformer :",
            "options": [
              "Des hydrocarbures lourds en hydrocarbures légers",
              "Des hydrocarbures légers en hydrocarbures lourds",
              "Des alcanes en eau",
              "Du pétrole en gaz naturels uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du document, reprise dans la solution de l'exercice 4."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le reformage",
          "stepTheme": "Le reformage",
          "stepBadge": "Le reformage",
          "paragraphText": "• Reformage : opération qui consiste à modifier la structure d'un hydrocarbure sans modifier son nombre d'atomes de carbone.\nIl se pratique sur les alcanes des essences légères.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p03_q2",
            "type": "mcq",
            "prompt": "Le reformage consiste à :",
            "options": [
              "Casser un hydrocarbure en deux",
              "Ajouter des atomes de carbone à un hydrocarbure",
              "Modifier la structure d'un hydrocarbure sans changer son nombre d'atomes de carbone",
              "Séparer les constituants du pétrole"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le point clé du reformage est la conservation du nombre d'atomes de carbone."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Améliorer l'indice d'octane",
          "stepTheme": "Améliorer l'indice d'octane",
          "stepBadge": "Améliorer l'indice d'octane",
          "paragraphText": "Le reformage se pratique sur les alcanes des essences légères afin d'améliorer leur indice d'octane.\nCet indice mesure la résistance à l'auto-allumage d'un carburant.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p03_q3",
            "type": "mcq",
            "prompt": "L'indice d'octane d'un carburant mesure :",
            "options": [
              "Sa température d'ébullition",
              "Sa résistance à l'auto-allumage",
              "Sa proportion de méthane",
              "Sa masse volumique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document définit l'auto-allumage comme l'allumage sans l'intervention de la bougie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les deux réactions de craquage du butane",
          "stepTheme": "Les deux réactions de craquage du butane",
          "stepBadge": "Les deux réactions de craquage du butane",
          "paragraphText": "Dans l'exercice 4, le craquage du butane donne lieu à deux réactions.\nLa première, pour 60 %, conduit au méthylpropène et au dihydrogène ; la seconde, pour 40 %, au propène et au méthane.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p03_q4",
            "type": "mcq",
            "prompt": "La seconde réaction de craquage du butane de l'exercice 4 donne :",
            "options": [
              "Du méthylpropène et du dihydrogène",
              "De l'éthylène et de l'éthane",
              "Du propène et du méthane",
              "Du butène et de l'eau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Son équation est $\\mathrm{C_4H_{10} \\longrightarrow C_3H_6 + CH_4}$ : propène et méthane."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Craquage ou reformage ?",
          "stepTheme": "Craquage ou reformage ?",
          "stepBadge": "Craquage ou reformage ?",
          "paragraphText": "Piège : obtenir un hydrocarbure plus léger n'est pas un reformage, car le nombre de carbones a diminué.\nLe reformage conserve le nombre d'atomes de carbone ; le craquage le réduit.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p03_q5",
            "type": "mcq",
            "prompt": "Une opération transforme un hydrocarbure lourd en hydrocarbures plus légers. C'est :",
            "options": [
              "Un reformage",
              "Un craquage",
              "Un fractionnement",
              "Une distillation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Passer de lourds à légers, c'est exactement la définition du craquage."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le résultat chiffré de l'exercice 4",
          "stepTheme": "Le résultat chiffré de l'exercice 4",
          "stepBadge": "Le résultat chiffré de l'exercice 4",
          "paragraphText": "La solution de l'exercice 4 donne les pourcentages en masse des quatre produits du craquage du butane.\nLe produit majoritaire est le méthylpropène, avec $57{,}93\\ \\%$.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p03_q6",
            "type": "mcq",
            "prompt": "D'après la solution de l'exercice 4, le pourcentage en masse du méthylpropène est de :",
            "options": [
              "$11{,}03\\ \\%$",
              "$28{,}96\\ \\%$",
              "$2{,}07\\ \\%$",
              "$57{,}93\\ \\%$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le méthylpropène, produit de la voie à 60 %, est majoritaire ; $2{,}07\\ \\%$ est le dihydrogène, $28{,}96\\ \\%$ le propène et $11{,}03\\ \\%$ le méthane."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p03_q1",
          "type": "mcq",
          "prompt": "Le craquage permet de transformer :",
          "options": [
            "Des hydrocarbures lourds en hydrocarbures légers",
            "Des hydrocarbures légers en hydrocarbures lourds",
            "Des alcanes en eau",
            "Du pétrole en gaz naturels uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du document, reprise dans la solution de l'exercice 4."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p03_q2",
          "type": "mcq",
          "prompt": "Le reformage consiste à :",
          "options": [
            "Casser un hydrocarbure en deux",
            "Ajouter des atomes de carbone à un hydrocarbure",
            "Modifier la structure d'un hydrocarbure sans changer son nombre d'atomes de carbone",
            "Séparer les constituants du pétrole"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le point clé du reformage est la conservation du nombre d'atomes de carbone."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p03_q3",
          "type": "mcq",
          "prompt": "L'indice d'octane d'un carburant mesure :",
          "options": [
            "Sa température d'ébullition",
            "Sa résistance à l'auto-allumage",
            "Sa proportion de méthane",
            "Sa masse volumique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document définit l'auto-allumage comme l'allumage sans l'intervention de la bougie."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p03_q4",
          "type": "mcq",
          "prompt": "La seconde réaction de craquage du butane de l'exercice 4 donne :",
          "options": [
            "Du méthylpropène et du dihydrogène",
            "De l'éthylène et de l'éthane",
            "Du propène et du méthane",
            "Du butène et de l'eau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Son équation est $\\mathrm{C_4H_{10} \\longrightarrow C_3H_6 + CH_4}$ : propène et méthane."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p03_q5",
          "type": "mcq",
          "prompt": "Une opération transforme un hydrocarbure lourd en hydrocarbures plus légers. C'est :",
          "options": [
            "Un reformage",
            "Un craquage",
            "Un fractionnement",
            "Une distillation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Passer de lourds à légers, c'est exactement la définition du craquage."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p03_q6",
          "type": "mcq",
          "prompt": "D'après la solution de l'exercice 4, le pourcentage en masse du méthylpropène est de :",
          "options": [
            "$11{,}03\\ \\%$",
            "$28{,}96\\ \\%$",
            "$2{,}07\\ \\%$",
            "$57{,}93\\ \\%$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le méthylpropène, produit de la voie à 60 %, est majoritaire ; $2{,}07\\ \\%$ est le dihydrogène, $28{,}96\\ \\%$ le propène et $11{,}03\\ \\%$ le méthane."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p04",
      "order": 4,
      "title": "L'utilité de quelques produits dérivés du pétrole",
      "summary": "Carburants, solvants, bitumes et huiles à la base de médicaments, plastiques, détergents et fibres synthétiques.",
      "conceptExplanation": "Des produits tels que les carburants, les solvants, les bitumes et les huiles de graissage sont utilisés pour le fonctionnement des moteurs, la fabrication de médicaments, de produits agrochimiques, de matières plastiques, de détergents et de fibres synthétiques.\nLa situation d'évaluation précise l'importance de quelques produits : les carburants fournissent l'énergie nécessaire au fonctionnement des moteurs, les produits de dégraissage des métaux permettent d'éliminer les graisses, et les matières plastiques sont largement utilisées comme mobilier domestique, emballages et tuyauteries.\nLa partie documentation ajoute que les gaz de pétrole liquéfiés, butane et propane, servent à la cuisson et au chauffage domestique, que le bitume sert surtout à la construction routière et que la pétrochimie fournit plastiques, détergents, caoutchoucs, adhésifs et médicaments.",
      "keyRule": "Un produit dérivé ne sert pas qu'à brûler : carburants pour les moteurs, mais aussi plastiques, médicaments, détergents, fibres synthétiques et bitumes pour les routes.",
      "formulas": [],
      "workedExample": {
        "title": "Importance de trois produits dérivés (situation d'évaluation)",
        "statement": "Cite trois produits dérivés du pétrole et montre l'importance de chacun pour les consommateurs, comme dans le corrigé de la situation d'évaluation.",
        "methodSteps": [
          "Premier produit : les carburants, qui fournissent l'énergie nécessaire au fonctionnement des moteurs.",
          "Deuxième produit : les produits de dégraissage des métaux, qui permettent d'éliminer les graisses.",
          "Troisième produit : les matières plastiques, utilisées comme mobilier domestique, emballages et tuyauteries."
        ],
        "conclusion": "Chaque produit dérivé répond à un besoin précis des consommateurs : énergie, nettoyage des métaux ou objets du quotidien."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les produits dérivés du pétrole",
          "stepTheme": "Les produits dérivés du pétrole",
          "stepBadge": "Les produits dérivés du pétrole",
          "paragraphText": "• Produits dérivés du pétrole : produits obtenus à partir du pétrole brut après raffinage.\nLe document cite les carburants, les solvants, les bitumes et les huiles de graissage.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p04_q1",
            "type": "mcq",
            "prompt": "Parmi les produits suivants, lequel est cité dans le document comme dérivé du pétrole ?",
            "options": [
              "Les bitumes",
              "Le sucre de canne",
              "Le ciment uniquement",
              "Le verre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les bitumes figurent dans la liste du document, avec les carburants, les solvants et les huiles de graissage."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "À quoi servent ces produits ?",
          "stepTheme": "À quoi servent ces produits ?",
          "stepBadge": "À quoi servent ces produits ?",
          "paragraphText": "Les produits dérivés servent au fonctionnement des moteurs et à la fabrication de nombreux objets.\nLe document cite les médicaments, les produits agrochimiques, les matières plastiques, les détergents et les fibres synthétiques.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p04_q2",
            "type": "mcq",
            "prompt": "D'après le document, les produits dérivés du pétrole servent notamment à fabriquer :",
            "options": [
              "Uniquement des carburants",
              "Des médicaments, des matières plastiques et des détergents",
              "Seulement des routes",
              "Aucun produit du quotidien"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon insiste sur la diversité des fabrications issues des produits dérivés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rôle des carburants",
          "stepTheme": "Le rôle des carburants",
          "stepBadge": "Le rôle des carburants",
          "paragraphText": "Les carburants fournissent l'énergie nécessaire au fonctionnement des moteurs.\nC'est l'importance retenue par le corrigé de la situation d'évaluation.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p04_q3",
            "type": "mcq",
            "prompt": "D'après le corrigé de la situation d'évaluation, les carburants sont importants parce qu'ils :",
            "options": [
              "Éliminent les graisses des métaux",
              "Servent d'emballages",
              "Fournissent l'énergie nécessaire au fonctionnement des moteurs",
              "Remplacent les médicaments"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque produit a son rôle : l'énergie des moteurs revient aux carburants."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les matières plastiques au quotidien",
          "stepTheme": "Les matières plastiques au quotidien",
          "stepBadge": "Les matières plastiques au quotidien",
          "paragraphText": "Les matières plastiques sont largement utilisées comme mobilier domestique, emballages et tuyauteries.\nLa documentation ajoute que le plastique est omniprésent, par exemple dans les emballages, le numérique et les jouets.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p04_q4",
            "type": "mcq",
            "prompt": "Les matières plastiques issues du pétrole sont utilisées, d'après le document, comme :",
            "options": [
              "Carburants pour avions uniquement",
              "Engrais uniquement",
              "Produits de dégraissage uniquement",
              "Mobilier domestique, emballages et tuyauteries"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont les trois usages cités dans le corrigé de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Reconnaître les dérivés dans l'exercice 3",
          "stepTheme": "Reconnaître les dérivés dans l'exercice 3",
          "stepBadge": "Reconnaître les dérivés dans l'exercice 3",
          "paragraphText": "Piège : tous les produits chimiques ne sont pas des dérivés du pétrole.\nDans l'exercice 3, le corrigé range le bitume, le gasoil et l'essence parmi les dérivés, mais l'acide sulfurique, l'acide nitrique et l'alcool éthylique parmi les autres produits.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p04_q5",
            "type": "mcq",
            "prompt": "D'après le corrigé de l'exercice 3, lequel de ces produits n'est pas un dérivé du pétrole ?",
            "options": [
              "Le gasoil",
              "L'acide sulfurique",
              "L'essence",
              "Le bitume"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'acide sulfurique est rangé dans les « autres produits » ; gasoil, essence et bitume sont des dérivés du pétrole."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les gaz de pétrole liquéfiés",
          "stepTheme": "Les gaz de pétrole liquéfiés",
          "stepBadge": "Les gaz de pétrole liquéfiés",
          "paragraphText": "La documentation explique que les GPL, gaz de pétrole liquéfiés comme le butane et le propane, sont issus du raffinage.\nIls sont utilisés en bouteilles pour la cuisson des aliments et le chauffage domestique.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p04_q6",
            "type": "mcq",
            "prompt": "Les gaz de pétrole liquéfiés, butane et propane, sont utilisés d'après la documentation pour :",
            "options": [
              "La cuisson des aliments et le chauffage domestique",
              "La fabrication du verre",
              "Le dégraissage des métaux uniquement",
              "La soudure au chalumeau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les usages domestiques cités dans la partie documentation du document."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p04_q1",
          "type": "mcq",
          "prompt": "Parmi les produits suivants, lequel est cité dans le document comme dérivé du pétrole ?",
          "options": [
            "Les bitumes",
            "Le sucre de canne",
            "Le ciment uniquement",
            "Le verre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les bitumes figurent dans la liste du document, avec les carburants, les solvants et les huiles de graissage."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p04_q2",
          "type": "mcq",
          "prompt": "D'après le document, les produits dérivés du pétrole servent notamment à fabriquer :",
          "options": [
            "Uniquement des carburants",
            "Des médicaments, des matières plastiques et des détergents",
            "Seulement des routes",
            "Aucun produit du quotidien"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon insiste sur la diversité des fabrications issues des produits dérivés."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p04_q3",
          "type": "mcq",
          "prompt": "D'après le corrigé de la situation d'évaluation, les carburants sont importants parce qu'ils :",
          "options": [
            "Éliminent les graisses des métaux",
            "Servent d'emballages",
            "Fournissent l'énergie nécessaire au fonctionnement des moteurs",
            "Remplacent les médicaments"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque produit a son rôle : l'énergie des moteurs revient aux carburants."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p04_q4",
          "type": "mcq",
          "prompt": "Les matières plastiques issues du pétrole sont utilisées, d'après le document, comme :",
          "options": [
            "Carburants pour avions uniquement",
            "Engrais uniquement",
            "Produits de dégraissage uniquement",
            "Mobilier domestique, emballages et tuyauteries"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont les trois usages cités dans le corrigé de la situation d'évaluation."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p04_q5",
          "type": "mcq",
          "prompt": "D'après le corrigé de l'exercice 3, lequel de ces produits n'est pas un dérivé du pétrole ?",
          "options": [
            "Le gasoil",
            "L'acide sulfurique",
            "L'essence",
            "Le bitume"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'acide sulfurique est rangé dans les « autres produits » ; gasoil, essence et bitume sont des dérivés du pétrole."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p04_q6",
          "type": "mcq",
          "prompt": "Les gaz de pétrole liquéfiés, butane et propane, sont utilisés d'après la documentation pour :",
          "options": [
            "La cuisson des aliments et le chauffage domestique",
            "La fabrication du verre",
            "Le dégraissage des métaux uniquement",
            "La soudure au chalumeau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les usages domestiques cités dans la partie documentation du document."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p05",
      "order": 5,
      "title": "L'impact environnemental des produits pétroliers",
      "summary": "Marées noires, pollutions liées aux combustibles et caractère non renouvelable du pétrole.",
      "conceptExplanation": "Le mauvais transport des produits pétroliers entraîne souvent des pollutions écologiques telles que des marées noires.\nL'exercice 2 du document ajoute un impact des produits dérivés : les combustibles produisent du dioxyde de carbone, tandis que les insecticides et les produits phytosanitaires polluent l'environnement et appauvrissent les sols.\nLa partie documentation rappelle enfin que le pétrole est une ressource non renouvelable : il met plusieurs millions d'années à se former, alors que sa consommation actuelle est supérieure à sa production et que les réserves mondiales ne sont pas illimitées.",
      "keyRule": "Le pétrole pollue quand il se répand (marées noires), quand il brûle (dioxyde de carbone) et il s'épuise : c'est une ressource non renouvelable.",
      "formulas": [],
      "workedExample": {
        "title": "Impact de quelques produits dérivés (exercice 2)",
        "statement": "Indique l'impact sur l'environnement de quelques produits dérivés du pétrole, comme dans l'exercice 2 du document.",
        "methodSteps": [
          "On cite d'abord un produit transporté : un accident de transport peut provoquer une marée noire.",
          "On cite ensuite les combustibles, dont l'utilisation produit du dioxyde de carbone.",
          "On cite enfin les insecticides et les produits phytosanitaires, qui polluent l'environnement et appauvrissent les sols."
        ],
        "conclusion": "Les impacts sont variés : pollutions écologiques accidentelles, émissions des combustibles et pollution des sols."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les marées noires",
          "stepTheme": "Les marées noires",
          "stepBadge": "Les marées noires",
          "paragraphText": "• Marée noire : pollution écologique provoquée par le déversement de produits pétroliers, souvent lors de leur mauvais transport.\nC'est l'impact environnemental cité dans le cours.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p05_q1",
            "type": "mcq",
            "prompt": "D'après le document, le mauvais transport des produits pétroliers entraîne souvent :",
            "options": [
              "Des pluies acides uniquement",
              "La formation de nouveau pétrole",
              "Une amélioration des sols",
              "Des marées noires"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le texte du cours nomme explicitement les marées noires comme pollution écologique liée au transport."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'impact des produits phytosanitaires",
          "stepTheme": "L'impact des produits phytosanitaires",
          "stepBadge": "L'impact des produits phytosanitaires",
          "paragraphText": "L'exercice 2 attribue un impact précis aux insecticides et aux produits phytosanitaires.\nD'après sa solution, ils polluent l'environnement et appauvrissent les sols.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p05_q2",
            "type": "mcq",
            "prompt": "D'après la solution de l'exercice 2, les insecticides et les produits phytosanitaires :",
            "options": [
              "Enrichissent durablement les sols",
              "Ne polluent pas",
              "Polluent l'environnement et appauvrissent les sols",
              "Provoquent des marées noires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'impact retenu par le corrigé de l'exercice 2 pour ces produits dérivés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une ressource non renouvelable",
          "stepTheme": "Une ressource non renouvelable",
          "stepBadge": "Une ressource non renouvelable",
          "paragraphText": "La documentation rappelle que le pétrole met plusieurs millions d'années à se former.\nC'est pour cela qu'elle le présente comme une ressource non renouvelable.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p05_q3",
            "type": "mcq",
            "prompt": "Le pétrole est qualifié de ressource non renouvelable dans la documentation parce que :",
            "options": [
              "Il ne peut pas être transporté",
              "Il met plusieurs millions d'années à se former",
              "Il ne contient pas d'alcanes",
              "Il n'est plus utilisé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Son temps de formation, des millions d'années, est sans commune mesure avec le rythme de sa consommation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Consommation et réserves",
          "stepTheme": "Consommation et réserves",
          "stepBadge": "Consommation et réserves",
          "paragraphText": "Toujours d'après la documentation, la consommation de pétrole est aujourd'hui supérieure à la production.\nLes hommes puisent dans les réserves mondiales, qui ne sont pas illimitées et se vident progressivement.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p05_q4",
            "type": "mcq",
            "prompt": "D'après la documentation, les réserves mondiales de pétrole :",
            "options": [
              "Sont illimitées",
              "Augmentent chaque année",
              "Ne sont pas illimitées et se vident progressivement",
              "Ont déjà disparu depuis longtemps"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document insiste sur des réserves limitées, compensant un déficit de production, mais en voie d'épuisement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Brûler un combustible a aussi un impact",
          "stepTheme": "Brûler un combustible a aussi un impact",
          "stepBadge": "Brûler un combustible a aussi un impact",
          "paragraphText": "Piège : limiter l'impact du pétrole aux accidents de transport oublie l'usage normal des produits.\nL'exercice 2 signale aussi la production de dioxyde de carbone par les combustibles.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p05_q5",
            "type": "mcq",
            "prompt": "D'après l'exercice 2, les combustibles ont pour impact la production de :",
            "options": [
              "Dioxygène",
              "Dioxyde de carbone",
              "Méthane uniquement",
              "Vapeur d'eau uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La solution de l'exercice 2 cite la production de dioxyde de carbone par les combustibles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le pétrole omniprésent au quotidien",
          "stepTheme": "Le pétrole omniprésent au quotidien",
          "stepBadge": "Le pétrole omniprésent au quotidien",
          "paragraphText": "La documentation conclut que le pétrole est omniprésent dans nos vies, souvent sous forme transformée.\nElle cite les transports, les plastiques, le chauffage, l'électricité au fioul et la construction routière au bitume.",
          "exercise": {
            "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p05_q6",
            "type": "mcq",
            "prompt": "D'après la documentation, quel secteur utilise le bitume issu du pétrole ?",
            "options": [
              "La construction routière",
              "La médecine uniquement",
              "La parfumerie uniquement",
              "L'alimentation humaine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La documentation précise que le secteur de la construction routière utilise l'essentiel de la production mondiale de bitume."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p05_q1",
          "type": "mcq",
          "prompt": "D'après le document, le mauvais transport des produits pétroliers entraîne souvent :",
          "options": [
            "Des pluies acides uniquement",
            "La formation de nouveau pétrole",
            "Une amélioration des sols",
            "Des marées noires"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le texte du cours nomme explicitement les marées noires comme pollution écologique liée au transport."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p05_q2",
          "type": "mcq",
          "prompt": "D'après la solution de l'exercice 2, les insecticides et les produits phytosanitaires :",
          "options": [
            "Enrichissent durablement les sols",
            "Ne polluent pas",
            "Polluent l'environnement et appauvrissent les sols",
            "Provoquent des marées noires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'impact retenu par le corrigé de l'exercice 2 pour ces produits dérivés."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p05_q3",
          "type": "mcq",
          "prompt": "Le pétrole est qualifié de ressource non renouvelable dans la documentation parce que :",
          "options": [
            "Il ne peut pas être transporté",
            "Il met plusieurs millions d'années à se former",
            "Il ne contient pas d'alcanes",
            "Il n'est plus utilisé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Son temps de formation, des millions d'années, est sans commune mesure avec le rythme de sa consommation."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p05_q4",
          "type": "mcq",
          "prompt": "D'après la documentation, les réserves mondiales de pétrole :",
          "options": [
            "Sont illimitées",
            "Augmentent chaque année",
            "Ne sont pas illimitées et se vident progressivement",
            "Ont déjà disparu depuis longtemps"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document insiste sur des réserves limitées, compensant un déficit de production, mais en voie d'épuisement."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p05_q5",
          "type": "mcq",
          "prompt": "D'après l'exercice 2, les combustibles ont pour impact la production de :",
          "options": [
            "Dioxygène",
            "Dioxyde de carbone",
            "Méthane uniquement",
            "Vapeur d'eau uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La solution de l'exercice 2 cite la production de dioxyde de carbone par les combustibles."
        },
        {
          "id": "premiere_c_chimie_l04_petrole_gaz_naturels_p05_q6",
          "type": "mcq",
          "prompt": "D'après la documentation, quel secteur utilise le bitume issu du pétrole ?",
          "options": [
            "La construction routière",
            "La médecine uniquement",
            "La parfumerie uniquement",
            "L'alimentation humaine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La documentation précise que le secteur de la construction routière utilise l'essentiel de la production mondiale de bitume."
        }
      ]
    }
  ]
};
