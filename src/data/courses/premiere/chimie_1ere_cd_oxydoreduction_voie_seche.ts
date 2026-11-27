import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Oxydoréduction par voie sèche » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Oxydoréduction par voie sèche » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const CHIMIE_1ERE_CD_L10_OXYDOREDUCTION_VOIE_SECHE: CurriculumChapter = {
  "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 10,
  "title": "Leçon 10 : Oxydoréduction par voie sèche",
  "summary": "On découvre les réactions d'oxydoréduction hors du milieu aqueux, par voie sèche, à travers la combustion du magnésium, la réduction des oxydes métalliques, puis on définit et on calcule le nombre d'oxydation.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Oxydoréduction par voie sèche » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p01",
      "order": 1,
      "title": "Oxydation du magnésium par le dioxygène",
      "summary": "La combustion vive du magnésium dans le dioxygène est une oxydoréduction par voie sèche.",
      "conceptExplanation": "La combustion du magnésium dans le dioxygène est très vive : elle se traduit par une lumière blanche intense et un dégagement de fumée blanche d'oxyde de magnésium $MgO$.\nL'oxyde de magnésium a une structure ionique, formée d'ions magnésium $Mg^{2+}$ et d'ions oxygène $O^{2-}$ : chaque atome de magnésium cède 2 électrons et chaque atome d'oxygène en capte 2.\nCette réaction se déroule en dehors du milieu aqueux : c'est une réaction d'oxydoréduction par voie sèche, entre le couple du magnésium et le couple du dioxygène.",
      "keyRule": "Voie sèche : oxydoréduction hors du milieu aqueux, avec transfert d'électrons entre solides et gaz.",
      "formulas": [
        {
          "name": "Oxydation du magnésium",
          "formula": "Mg \\rightarrow Mg^{2+} + 2e^-"
        },
        {
          "name": "Réduction du dioxygène",
          "formula": "O_2 + 4e^- \\rightarrow 2O^{2-}"
        },
        {
          "name": "Équation-bilan",
          "formula": "2Mg + O_2 \\rightarrow 2Mg^{2+} + 2O^{2-}"
        }
      ],
      "workedExample": {
        "title": "Interpréter la combustion du magnésium",
        "statement": "Explique, avec les demi-équations, pourquoi la combustion du magnésium dans le dioxygène est une oxydoréduction par voie sèche.",
        "methodSteps": [
          "Chaque atome de magnésium se transforme en cation $Mg^{2+}$ en cédant 2 électrons : il est oxydé.",
          "Chaque molécule de dioxygène se transforme en ions $O^{2-}$ en captant 4 électrons : elle est réduite.",
          "Il y a transfert d'électrons, sans solution aqueuse : c'est une oxydoréduction par voie sèche."
        ],
        "conclusion": "Le bilan s'écrit $2Mg + O_2 \\rightarrow 2Mg^{2+} + 2O^{2-}$, soit la formation d'oxyde de magnésium."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une oxydoréduction par voie sèche",
          "stepTheme": "Une oxydoréduction par voie sèche",
          "stepBadge": "Une oxydoréduction par voie sèche",
          "paragraphText": "• Oxydoréduction par voie sèche : réaction d'oxydoréduction qui se déroule en dehors du milieu aqueux.\nLa combustion du magnésium en est l'exemple de la leçon, comme les feux d'artifice de la situation d'apprentissage.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p01_q1",
            "type": "mcq",
            "prompt": "Une réaction d'oxydoréduction par voie sèche se déroule :",
            "options": [
              "En solution aqueuse",
              "En dehors du milieu aqueux",
              "Uniquement dans l'eau de chaux",
              "Sans transfert d'électrons"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion du §1.4 : la réaction a lieu entre un solide et un gaz, hors de toute solution."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les observations de la combustion",
          "stepTheme": "Les observations de la combustion",
          "stepBadge": "Les observations de la combustion",
          "paragraphText": "La combustion du magnésium est très vive.\nElle produit une lumière blanche intense et une fumée blanche d'oxyde de magnésium qui se dépose.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p01_q2",
            "type": "mcq",
            "prompt": "Le produit formé lors de la combustion du magnésium est :",
            "options": [
              "Du dioxyde de carbone",
              "De l'oxyde de magnésium $MgO$",
              "Du cuivre métallique",
              "De l'alumine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La fumée blanche observée est constituée de particules solides d'oxyde de magnésium."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'oxydation du magnésium",
          "stepTheme": "L'oxydation du magnésium",
          "stepBadge": "L'oxydation du magnésium",
          "paragraphText": "Chaque atome de magnésium se transforme en cation en cédant 2 électrons.\nCéder des électrons est une oxydation : le magnésium est le réducteur de cette réaction.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p01_q3",
            "type": "mcq",
            "prompt": "Dans la demi-équation du magnésium, le nombre d'électrons cédés par atome est :",
            "options": [
              "1",
              "4",
              "2",
              "0"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'atome $Mg$ devient l'ion $Mg^{2+}$ : il a perdu exactement 2 électrons."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La réduction du dioxygène",
          "stepTheme": "La réduction du dioxygène",
          "stepBadge": "La réduction du dioxygène",
          "paragraphText": "Chaque molécule de dioxygène capte 2 électrons par atome d'oxygène, soit 4 électrons en tout.\nElle se transforme ainsi en deux ions oxygène $O^{2-}$.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p01_q4",
            "type": "mcq",
            "prompt": "Une molécule de dioxygène capte au total :",
            "options": [
              "2 électrons",
              "1 électron",
              "8 électrons",
              "4 électrons"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Deux atomes d'oxygène captant chacun 2 électrons : le total est de 4 électrons par molécule."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le bilan de la combustion",
          "stepTheme": "Le bilan de la combustion",
          "stepBadge": "Le bilan de la combustion",
          "paragraphText": "On multiplie la demi-équation du magnésium par 2 pour égaler les 4 électrons captés par le dioxygène.\nLes ions formés s'associent en oxyde de magnésium $MgO$.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p01_q5",
            "type": "mcq",
            "prompt": "Le coefficient devant $Mg$ dans l'équation-bilan est :",
            "options": [
              "2",
              "1",
              "4",
              "3"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il faut 2 atomes de magnésium pour fournir les 4 électrons captés par une molécule de dioxygène."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La structure ionique de l'oxyde formé",
          "stepTheme": "La structure ionique de l'oxyde formé",
          "stepBadge": "La structure ionique de l'oxyde formé",
          "paragraphText": "Piège : l'oxyde de magnésium n'est pas une molécule neutre isolée.\nSon analyse montre un empilement régulier d'ions $Mg^{2+}$ et $O^{2-}$ : c'est un composé ionique.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p01_q6",
            "type": "mcq",
            "prompt": "L'oxyde de magnésium est constitué d'ions :",
            "options": [
              "$Mg^+$ et $O^-$",
              "$Mg^{2+}$ et $O^{2-}$",
              "$Mg^{2+}$ et $O^-$",
              "Aucun ion, seulement des atomes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les ions produits par les deux demi-équations de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p01_q1",
          "type": "mcq",
          "prompt": "Une réaction d'oxydoréduction par voie sèche se déroule :",
          "options": [
            "En solution aqueuse",
            "En dehors du milieu aqueux",
            "Uniquement dans l'eau de chaux",
            "Sans transfert d'électrons"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion du §1.4 : la réaction a lieu entre un solide et un gaz, hors de toute solution."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p01_q2",
          "type": "mcq",
          "prompt": "Le produit formé lors de la combustion du magnésium est :",
          "options": [
            "Du dioxyde de carbone",
            "De l'oxyde de magnésium $MgO$",
            "Du cuivre métallique",
            "De l'alumine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La fumée blanche observée est constituée de particules solides d'oxyde de magnésium."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p01_q3",
          "type": "mcq",
          "prompt": "Dans la demi-équation du magnésium, le nombre d'électrons cédés par atome est :",
          "options": [
            "1",
            "4",
            "2",
            "0"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'atome $Mg$ devient l'ion $Mg^{2+}$ : il a perdu exactement 2 électrons."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p01_q4",
          "type": "mcq",
          "prompt": "Une molécule de dioxygène capte au total :",
          "options": [
            "2 électrons",
            "1 électron",
            "8 électrons",
            "4 électrons"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Deux atomes d'oxygène captant chacun 2 électrons : le total est de 4 électrons par molécule."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p01_q5",
          "type": "mcq",
          "prompt": "Le coefficient devant $Mg$ dans l'équation-bilan est :",
          "options": [
            "2",
            "1",
            "4",
            "3"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il faut 2 atomes de magnésium pour fournir les 4 électrons captés par une molécule de dioxygène."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p01_q6",
          "type": "mcq",
          "prompt": "L'oxyde de magnésium est constitué d'ions :",
          "options": [
            "$Mg^+$ et $O^-$",
            "$Mg^{2+}$ et $O^{2-}$",
            "$Mg^{2+}$ et $O^-$",
            "Aucun ion, seulement des atomes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les ions produits par les deux demi-équations de la leçon."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p02",
      "order": 2,
      "title": "Réduction de l'oxyde de cuivre II par le carbone",
      "summary": "Le carbone réduit l'oxyde de cuivre II en cuivre métallique et s'oxyde en dioxyde de carbone.",
      "conceptExplanation": "Le dépôt rouge visible dans le tube à essais est du cuivre : l'oxyde de cuivre II est réduit à l'état de cuivre métallique.\nLe carbone, lui, a été oxydé en dioxyde de carbone, qui trouble l'eau de chaux.\nCette réduction de l'oxyde de cuivre par le carbone est une réaction d'oxydoréduction par voie sèche : les réactifs sont des solides chauffés, sans solution aqueuse.",
      "keyRule": "Dans cette réaction, $CuO$ est l'oxydant et le carbone est le réducteur.",
      "formulas": [
        {
          "name": "Équation-bilan",
          "formula": "2CuO + C \\rightarrow 2Cu + CO_2"
        }
      ],
      "workedExample": {
        "title": "Identifier les produits de la réaction cuivre et carbone",
        "statement": "On chauffe un mélange d'oxyde de cuivre II et de carbone. Comment reconnaît-on chacun des deux produits formés ?",
        "methodSteps": [
          "Le dépôt rouge qui apparaît dans le tube est le cuivre métallique : l'oxyde de cuivre a été réduit.",
          "Le gaz dégagé trouble l'eau de chaux : c'est du dioxyde de carbone, produit de l'oxydation du carbone."
        ],
        "conclusion": "Le bilan est $2CuO + C \\rightarrow 2Cu + CO_2$, une oxydoréduction par voie sèche."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le dépôt rouge dans le tube",
          "stepTheme": "Le dépôt rouge dans le tube",
          "stepBadge": "Le dépôt rouge dans le tube",
          "paragraphText": "L'expérience montre un dépôt rouge sur les parois du tube à essais.\nCette couleur caractéristique est celle du cuivre métallique formé.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p02_q1",
            "type": "mcq",
            "prompt": "Le dépôt rouge formé dans le tube est :",
            "options": [
              "De l'oxyde de cuivre",
              "Du carbone",
              "Du cuivre métallique",
              "De l'alumine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'oxyde de cuivre, noir au départ, est réduit en cuivre de couleur rouge brique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le gaz qui trouble l'eau de chaux",
          "stepTheme": "Le gaz qui trouble l'eau de chaux",
          "stepBadge": "Le gaz qui trouble l'eau de chaux",
          "paragraphText": "Le carbone est oxydé pendant la réaction.\nLe gaz produit est mis en évidence par l'eau de chaux, qu'il trouble.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p02_q2",
            "type": "mcq",
            "prompt": "Le gaz formé, qui trouble l'eau de chaux, est :",
            "options": [
              "Le dioxygène",
              "Le dihydrogène",
              "Le monoxyde de carbone",
              "Le dioxyde de carbone"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le trouble de l'eau de chaux est le test caractéristique du dioxyde de carbone."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les rôles des réactifs",
          "stepTheme": "Les rôles des réactifs",
          "stepBadge": "Les rôles des réactifs",
          "paragraphText": "L'oxyde de cuivre II perd son oxygène et donne le métal : il est réduit, donc il joue le rôle d'oxydant.\nLe carbone gagne cet oxygène et se transforme en dioxyde de carbone : il est oxydé, donc réducteur.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p02_q3",
            "type": "mcq",
            "prompt": "Dans cette réaction, le réducteur est :",
            "options": [
              "Le carbone",
              "L'oxyde de cuivre II",
              "Le cuivre formé",
              "Le dioxyde de carbone formé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le carbone est oxydé de l'état 0 à l'état +IV : c'est lui le réducteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les coefficients du bilan",
          "stepTheme": "Les coefficients du bilan",
          "stepBadge": "Les coefficients du bilan",
          "paragraphText": "Le bilan doit conserver le cuivre, le carbone et l'oxygène.\nIl faut 2 formules $CuO$ pour fournir les 2 atomes d'oxygène du $CO_2$.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p02_q4",
            "type": "mcq",
            "prompt": "Le coefficient devant $CuO$ dans l'équation-bilan est :",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec 2 $CuO$, on obtient 2 atomes de cuivre et les 2 atomes d'oxygène nécessaires à un $CO_2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre produit et réactif oxydé",
          "stepTheme": "Ne pas confondre produit et réactif oxydé",
          "stepBadge": "Ne pas confondre produit et réactif oxydé",
          "paragraphText": "Piège : le cuivre métallique est le produit de la réduction, il n'est ni oxydant ni réducteur dans cette réaction.\nL'espèce réduite est l'oxyde de cuivre, et l'espèce oxydée est le carbone.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p02_q5",
            "type": "mcq",
            "prompt": "L'espèce qui subit l'oxydation dans cette réaction est :",
            "options": [
              "Le cuivre formé",
              "L'oxyde de cuivre II",
              "Le carbone",
              "L'eau de chaux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le carbone passe du nombre d'oxydation 0 à +IV : son nombre d'oxydation augmente, il est oxydé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Pourquoi parle-t-on de voie sèche ?",
          "stepTheme": "Pourquoi parle-t-on de voie sèche ?",
          "stepBadge": "Pourquoi parle-t-on de voie sèche ?",
          "paragraphText": "Les réactifs sont l'oxyde de cuivre solide et le carbone solide, chauffés ensemble.\nAucune solution aqueuse n'intervient : la réaction relève de la voie sèche.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p02_q6",
            "type": "mcq",
            "prompt": "Cette réaction est classée par voie sèche parce que :",
            "options": [
              "Elle produit de l'eau",
              "Elle se fait en solution",
              "Elle est très lente",
              "Elle oppose des solides chauffés, hors milieu aqueux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la conclusion du §2.3 de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p02_q1",
          "type": "mcq",
          "prompt": "Le dépôt rouge formé dans le tube est :",
          "options": [
            "De l'oxyde de cuivre",
            "Du carbone",
            "Du cuivre métallique",
            "De l'alumine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'oxyde de cuivre, noir au départ, est réduit en cuivre de couleur rouge brique."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p02_q2",
          "type": "mcq",
          "prompt": "Le gaz formé, qui trouble l'eau de chaux, est :",
          "options": [
            "Le dioxygène",
            "Le dihydrogène",
            "Le monoxyde de carbone",
            "Le dioxyde de carbone"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le trouble de l'eau de chaux est le test caractéristique du dioxyde de carbone."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p02_q3",
          "type": "mcq",
          "prompt": "Dans cette réaction, le réducteur est :",
          "options": [
            "Le carbone",
            "L'oxyde de cuivre II",
            "Le cuivre formé",
            "Le dioxyde de carbone formé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le carbone est oxydé de l'état 0 à l'état +IV : c'est lui le réducteur."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p02_q4",
          "type": "mcq",
          "prompt": "Le coefficient devant $CuO$ dans l'équation-bilan est :",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec 2 $CuO$, on obtient 2 atomes de cuivre et les 2 atomes d'oxygène nécessaires à un $CO_2$."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p02_q5",
          "type": "mcq",
          "prompt": "L'espèce qui subit l'oxydation dans cette réaction est :",
          "options": [
            "Le cuivre formé",
            "L'oxyde de cuivre II",
            "Le carbone",
            "L'eau de chaux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le carbone passe du nombre d'oxydation 0 à +IV : son nombre d'oxydation augmente, il est oxydé."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p02_q6",
          "type": "mcq",
          "prompt": "Cette réaction est classée par voie sèche parce que :",
          "options": [
            "Elle produit de l'eau",
            "Elle se fait en solution",
            "Elle est très lente",
            "Elle oppose des solides chauffés, hors milieu aqueux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la conclusion du §2.3 de la leçon."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p03",
      "order": 3,
      "title": "L'aluminothermie : réduction de l'oxyde ferrique par l'aluminium",
      "summary": "L'aluminium réduit l'oxyde ferrique en fer, en formant de l'alumine : c'est l'aluminothermie.",
      "conceptExplanation": "La poudre blanche formée après la combustion est l'alumine $Al_2O_3$. Les oxydes $Fe_2O_3$ et $Al_2O_3$ sont des oxydes ioniques, formés respectivement des ions $Fe^{3+}$ et $O^{2-}$, puis $Al^{3+}$ et $O^{2-}$.\nL'ion $Fe^{3+}$ est réduit en fer métallique en captant 3 électrons, et l'aluminium est oxydé en ion $Al^{3+}$ en cédant 3 électrons.\nCette réaction, appelée aluminothermie, sert industriellement, par exemple pour préparer le chrome à partir de son oxyde.",
      "keyRule": "Aluminothermie : l'aluminium, réducteur fort, arrache l'oxygène d'un oxyde métallique.",
      "formulas": [
        {
          "name": "Réduction de l'ion fer III",
          "formula": "Fe^{3+} + 3e^- \\rightarrow Fe"
        },
        {
          "name": "Oxydation de l'aluminium",
          "formula": "Al \\rightarrow Al^{3+} + 3e^-"
        },
        {
          "name": "Équation-bilan de l'aluminothermie",
          "formula": "Fe_2O_3 + 2Al \\rightarrow 2Fe + Al_2O_3"
        }
      ],
      "workedExample": {
        "title": "Préparer le chrome par aluminothermie",
        "statement": "Le chrome est préparé industriellement par aluminothermie à partir de l'oxyde de chrome III et de l'aluminium. Écris l'équation de la réaction, précise oxydant et réducteur, puis calcule la masse de chrome obtenue à partir de $5{,}0$ g d'oxyde de chrome III, avec $M(Cr) = 52$ g par mol et $M(O) = 16$ g par mol.",
        "methodSteps": [
          "L'équation est $Cr_2O_3 + 2Al \\rightarrow 2Cr + Al_2O_3$ : le nombre d'oxydation du chrome passe de +III à 0 et celui de l'aluminium de 0 à +III, c'est bien une réaction redox.",
          "L'oxyde de chrome est l'oxydant et l'aluminium le réducteur ; l'aluminium présent est en excès par rapport aux $5{,}0$ g d'oxyde.",
          "La quantité de chrome vaut 2 fois celle de l'oxyde, de masse molaire 152 g par mol : on obtient $3{,}42$ g de chrome."
        ],
        "conclusion": "On obtient $3{,}42$ g de chrome métallique, comme dans le corrigé de la situation d'évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu'est l'aluminothermie",
          "stepTheme": "Ce qu'est l'aluminothermie",
          "stepBadge": "Ce qu'est l'aluminothermie",
          "paragraphText": "• Aluminothermie : réduction d'un oxyde métallique par l'aluminium métallique.\nIci, l'oxyde ferrique est réduit et il se forme de l'alumine, une poudre blanche.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p03_q1",
            "type": "mcq",
            "prompt": "Le produit oxyde formé lors de l'aluminothermie de l'oxyde ferrique est :",
            "options": [
              "L'oxyde de magnésium",
              "L'alumine $Al_2O_3$",
              "L'oxyde de cuivre",
              "Le dioxyde de carbone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La poudre blanche observée après la combustion est l'alumine."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La demi-équation de l'aluminium",
          "stepTheme": "La demi-équation de l'aluminium",
          "stepBadge": "La demi-équation de l'aluminium",
          "paragraphText": "L'aluminium métallique se transforme en ion $Al^{3+}$.\nPour respecter la charge, il cède exactement 3 électrons.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p03_q2",
            "type": "mcq",
            "prompt": "L'aluminium cède, par atome :",
            "options": [
              "1 électron",
              "2 électrons",
              "3 électrons",
              "6 électrons"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'ion formé est $Al^{3+}$ : la perte est de 3 électrons, compensée par les 3 électrons captés par $Fe^{3+}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le bilan complet avec les oxydes",
          "stepTheme": "Le bilan complet avec les oxydes",
          "stepBadge": "Le bilan complet avec les oxydes",
          "paragraphText": "Le bilan ionique simplifié oppose $Fe^{3+}$ et $Al$.\nEn réintroduisant les ions oxygène des deux oxydes, on obtient le bilan entre $Fe_2O_3$ et $Al$.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p03_q3",
            "type": "mcq",
            "prompt": "L'équation-bilan complète de l'aluminothermie de l'oxyde ferrique est :",
            "options": [
              "$Fe_2O_3 + Al \\rightarrow Fe + Al_2O_3$",
              "$Fe_2O_3 + 2Al \\rightarrow 2Fe + Al_2O_3$",
              "$Fe + Al_2O_3 \\rightarrow Fe_2O_3 + 2Al$",
              "$2Fe_2O_3 + Al \\rightarrow 4Fe + Al_2O_3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle conserve le fer (2), l'aluminium (2) et l'oxygène (3) des deux côtés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une application industrielle",
          "stepTheme": "Une application industrielle",
          "stepBadge": "Une application industrielle",
          "paragraphText": "La situation d'évaluation indique que le chrome métallique est préparé industriellement par aluminothermie.\nOn part de l'oxyde de chrome III et de l'aluminium, et on obtient le chrome et l'alumine.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p03_q4",
            "type": "mcq",
            "prompt": "Par aluminothermie, on prépare industriellement, d'après la leçon :",
            "options": [
              "Le magnésium",
              "Le cuivre",
              "Le chrome",
              "Le carbone"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'exemple traité dans la situation d'évaluation, avec $3{,}42$ g de chrome obtenus pour $5{,}0$ g d'oxyde."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Qui est l'oxydant dans une aluminothermie ?",
          "stepTheme": "Qui est l'oxydant dans une aluminothermie ?",
          "stepBadge": "Qui est l'oxydant dans une aluminothermie ?",
          "paragraphText": "Piège : l'aluminium est le métal « actif » de la réaction, mais il est oxydé.\nL'oxydant est donc l'oxyde métallique, qui est réduit en métal.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p03_q5",
            "type": "mcq",
            "prompt": "Dans une aluminothermie, l'oxydant est :",
            "options": [
              "L'aluminium",
              "L'alumine formée",
              "Le métal obtenu",
              "L'oxyde métallique de départ"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'oxyde est réduit en métal : il joue le rôle d'oxydant, et l'aluminium celui de réducteur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La masse de chrome obtenue",
          "stepTheme": "La masse de chrome obtenue",
          "stepBadge": "La masse de chrome obtenue",
          "paragraphText": "La quantité de chrome formé vaut 2 fois celle de l'oxyde de chrome engagé.\nLe corrigé de la situation d'évaluation donne le résultat pour $5{,}0$ g d'oxyde et un excès d'aluminium.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p03_q6",
            "type": "mcq",
            "prompt": "La masse de chrome obtenue à partir de $5{,}0$ g d'oxyde de chrome III vaut :",
            "options": [
              "$3{,}42$ g",
              "$5{,}0$ g",
              "$10{,}4$ g",
              "$1{,}71$ g"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le calcul du corrigé donne $3{,}42$ g : deux moles de chrome de 52 g par mole pour une mole d'oxyde de 152 g."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p03_q1",
          "type": "mcq",
          "prompt": "Le produit oxyde formé lors de l'aluminothermie de l'oxyde ferrique est :",
          "options": [
            "L'oxyde de magnésium",
            "L'alumine $Al_2O_3$",
            "L'oxyde de cuivre",
            "Le dioxyde de carbone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La poudre blanche observée après la combustion est l'alumine."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p03_q2",
          "type": "mcq",
          "prompt": "L'aluminium cède, par atome :",
          "options": [
            "1 électron",
            "2 électrons",
            "3 électrons",
            "6 électrons"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'ion formé est $Al^{3+}$ : la perte est de 3 électrons, compensée par les 3 électrons captés par $Fe^{3+}$."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p03_q3",
          "type": "mcq",
          "prompt": "L'équation-bilan complète de l'aluminothermie de l'oxyde ferrique est :",
          "options": [
            "$Fe_2O_3 + Al \\rightarrow Fe + Al_2O_3$",
            "$Fe_2O_3 + 2Al \\rightarrow 2Fe + Al_2O_3$",
            "$Fe + Al_2O_3 \\rightarrow Fe_2O_3 + 2Al$",
            "$2Fe_2O_3 + Al \\rightarrow 4Fe + Al_2O_3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle conserve le fer (2), l'aluminium (2) et l'oxygène (3) des deux côtés."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p03_q4",
          "type": "mcq",
          "prompt": "Par aluminothermie, on prépare industriellement, d'après la leçon :",
          "options": [
            "Le magnésium",
            "Le cuivre",
            "Le chrome",
            "Le carbone"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'exemple traité dans la situation d'évaluation, avec $3{,}42$ g de chrome obtenus pour $5{,}0$ g d'oxyde."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p03_q5",
          "type": "mcq",
          "prompt": "Dans une aluminothermie, l'oxydant est :",
          "options": [
            "L'aluminium",
            "L'alumine formée",
            "Le métal obtenu",
            "L'oxyde métallique de départ"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'oxyde est réduit en métal : il joue le rôle d'oxydant, et l'aluminium celui de réducteur."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p03_q6",
          "type": "mcq",
          "prompt": "La masse de chrome obtenue à partir de $5{,}0$ g d'oxyde de chrome III vaut :",
          "options": [
            "$3{,}42$ g",
            "$5{,}0$ g",
            "$10{,}4$ g",
            "$1{,}71$ g"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calcul du corrigé donne $3{,}42$ g : deux moles de chrome de 52 g par mole pour une mole d'oxyde de 152 g."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p04",
      "order": 4,
      "title": "Le nombre d'oxydation : définition et règles de calcul",
      "summary": "Le nombre d'oxydation indique l'état d'oxydation d'un élément dans une espèce chimique.",
      "conceptExplanation": "Le nombre d'oxydation, ou degré d'oxydation, d'un élément dans un composé est un nombre algébrique qui indique l'état d'oxydation de cet élément pour l'espèce chimique considérée. Il s'écrit en chiffres romains, précédé du signe plus ou du signe moins.\nDans un corps pur simple, il est nul ; dans un ion monoatomique, il est égal à la charge de l'ion ; dans un ion polyatomique, la somme algébrique des nombres d'oxydation est égale à la charge globale ; dans une molécule, cette somme est égale à zéro.\nSauf cas particuliers signalés par la leçon, l'oxygène a le nombre d'oxydation -II et l'hydrogène le nombre d'oxydation +I.",
      "keyRule": "Somme des nombres d'oxydation : zéro pour une molécule, égale à la charge pour un ion.",
      "formulas": [
        {
          "name": "Molécule",
          "formula": "2 \\times n.o(H) + n.o(O) = 0 \\quad \\mathrm{dans}\\ H_2O"
        },
        {
          "name": "Ion polyatomique",
          "formula": "n.o(S) + 4 \\times n.o(O) = -II \\quad \\mathrm{dans}\\ SO_4^{2-}"
        },
        {
          "name": "Nombre d'oxydation du soufre dans l'acide sulfurique",
          "formula": "n.o(S) = +VI \\quad \\mathrm{dans}\\ H_2SO_4"
        }
      ],
      "workedExample": {
        "title": "Calculer des nombres d'oxydation (activité d'application)",
        "statement": "Calcule le nombre d'oxydation des éléments dans $Cu$, $Al^{3+}$, $CO_2$, $Al_2O_3$ et $H_2SO_4$.",
        "methodSteps": [
          "Corps pur simple : le nombre d'oxydation du cuivre vaut 0 ; ion monoatomique : celui de $Al^{3+}$ vaut +III.",
          "Dans $CO_2$ : la somme est nulle et l'oxygène vaut -II, donc le carbone vaut +IV.",
          "Dans $Al_2O_3$ : deux nombres d'oxydation de l'aluminium compensent trois fois -II, donc l'aluminium vaut +III.",
          "Dans $H_2SO_4$ : avec l'hydrogène à +I et l'oxygène à -II, le soufre vaut +VI."
        ],
        "conclusion": "On obtient 0, +III, +IV, +III et +VI : ce sont les résultats de l'activité d'application de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du nombre d'oxydation",
          "stepTheme": "Définition du nombre d'oxydation",
          "stepBadge": "Définition du nombre d'oxydation",
          "paragraphText": "• Nombre d'oxydation : nombre algébrique qui indique l'état d'oxydation d'un élément dans l'espèce chimique considérée.\nIl s'écrit en chiffres romains, avec un signe plus ou moins.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p04_q1",
            "type": "mcq",
            "prompt": "Le nombre d'oxydation s'écrit :",
            "options": [
              "En chiffres arabes sans signe",
              "En chiffres romains précédés d'un signe + ou -",
              "Toujours sans signe",
              "En lettres uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la remarque qui suit la définition dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Dans un corps pur simple",
          "stepTheme": "Dans un corps pur simple",
          "stepBadge": "Dans un corps pur simple",
          "paragraphText": "Un élément à l'état de corps pur simple n'a ni gagné ni perdu d'électrons.\nLa leçon donne en exemples le sodium et le fer, de nombre d'oxydation nul.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p04_q2",
            "type": "mcq",
            "prompt": "Le nombre d'oxydation d'un élément dans un corps pur simple est :",
            "options": [
              "+I",
              "-II",
              "Égal à sa charge",
              "Nul"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Exemples du document : le sodium et le fer ont un nombre d'oxydation de 0."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Dans un ion monoatomique",
          "stepTheme": "Dans un ion monoatomique",
          "stepBadge": "Dans un ion monoatomique",
          "paragraphText": "Pour un ion formé d'un seul atome, le nombre d'oxydation se lit directement.\nLa leçon donne +II pour $Fe^{2+}$, +III pour $Cr^{3+}$ et -II pour $O^{2-}$.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p04_q3",
            "type": "mcq",
            "prompt": "Le nombre d'oxydation d'un ion monoatomique est égal à :",
            "options": [
              "Zéro",
              "Sa charge",
              "La valeur absolue de sa charge",
              "Au nombre de ses atomes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la règle du §4.2.2 : par exemple $Fe^{2+}$ a le nombre d'oxydation +II."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Dans une molécule",
          "stepTheme": "Dans une molécule",
          "stepBadge": "Dans une molécule",
          "paragraphText": "Dans une molécule, on écrit que la somme algébrique des nombres d'oxydation de tous les éléments est égale à zéro.\nOn résout ensuite pour l'élément cherché, en utilisant les valeurs connues de l'oxygène et de l'hydrogène.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p04_q4",
            "type": "mcq",
            "prompt": "Dans une molécule, la somme algébrique des nombres d'oxydation est égale à :",
            "options": [
              "+I",
              "-II",
              "Zéro",
              "À la charge de la molécule, toujours différente de zéro"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une molécule est électriquement neutre : la somme est nulle, comme pour l'eau."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le carbone dans le dioxyde de carbone",
          "stepTheme": "Le carbone dans le dioxyde de carbone",
          "stepBadge": "Le carbone dans le dioxyde de carbone",
          "paragraphText": "On pose l'équation de neutralité pour $CO_2$, avec l'oxygène à -II.\nLe carbone compense à lui seul deux fois -II.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p04_q5",
            "type": "mcq",
            "prompt": "Le nombre d'oxydation du carbone dans $CO_2$ est :",
            "options": [
              "+II",
              "+VI",
              "0",
              "+IV"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il vaut l'opposé de deux fois -II, soit +IV : c'est le calcul de l'activité d'application."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les valeurs de référence de l'oxygène et de l'hydrogène",
          "stepTheme": "Les valeurs de référence de l'oxygène et de l'hydrogène",
          "stepBadge": "Les valeurs de référence de l'oxygène et de l'hydrogène",
          "paragraphText": "Piège : ces valeurs ont des exceptions signalées par la leçon.\nSauf dans la molécule $O_2$, l'oxygène vaut -II, et sauf dans la molécule $H_2$, l'hydrogène vaut +I ; dans $O_2$ et $H_2$, corps purs simples, ils valent 0.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p04_q6",
            "type": "mcq",
            "prompt": "Sauf exceptions de la leçon, les nombres d'oxydation de l'oxygène et de l'hydrogène sont :",
            "options": [
              "-II et +I",
              "+I et -II",
              "0 et 0 dans tous les composés",
              "-I et +II"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les deux règles du §4.2.4, utilisées dans tous les calculs de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p04_q1",
          "type": "mcq",
          "prompt": "Le nombre d'oxydation s'écrit :",
          "options": [
            "En chiffres arabes sans signe",
            "En chiffres romains précédés d'un signe + ou -",
            "Toujours sans signe",
            "En lettres uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la remarque qui suit la définition dans la leçon."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p04_q2",
          "type": "mcq",
          "prompt": "Le nombre d'oxydation d'un élément dans un corps pur simple est :",
          "options": [
            "+I",
            "-II",
            "Égal à sa charge",
            "Nul"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Exemples du document : le sodium et le fer ont un nombre d'oxydation de 0."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p04_q3",
          "type": "mcq",
          "prompt": "Le nombre d'oxydation d'un ion monoatomique est égal à :",
          "options": [
            "Zéro",
            "Sa charge",
            "La valeur absolue de sa charge",
            "Au nombre de ses atomes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la règle du §4.2.2 : par exemple $Fe^{2+}$ a le nombre d'oxydation +II."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p04_q4",
          "type": "mcq",
          "prompt": "Dans une molécule, la somme algébrique des nombres d'oxydation est égale à :",
          "options": [
            "+I",
            "-II",
            "Zéro",
            "À la charge de la molécule, toujours différente de zéro"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une molécule est électriquement neutre : la somme est nulle, comme pour l'eau."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p04_q5",
          "type": "mcq",
          "prompt": "Le nombre d'oxydation du carbone dans $CO_2$ est :",
          "options": [
            "+II",
            "+VI",
            "0",
            "+IV"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il vaut l'opposé de deux fois -II, soit +IV : c'est le calcul de l'activité d'application."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p04_q6",
          "type": "mcq",
          "prompt": "Sauf exceptions de la leçon, les nombres d'oxydation de l'oxygène et de l'hydrogène sont :",
          "options": [
            "-II et +I",
            "+I et -II",
            "0 et 0 dans tous les composés",
            "-I et +II"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les deux règles du §4.2.4, utilisées dans tous les calculs de la leçon."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p05",
      "order": 5,
      "title": "Utiliser le nombre d'oxydation pour repérer oxydation et réduction",
      "summary": "Si le nombre d'oxydation augmente, il y a oxydation ; s'il diminue, il y a réduction.",
      "conceptExplanation": "Dans une réaction chimique, si le nombre d'oxydation d'un élément augmente, cet élément a subi une oxydation, et le corps qui le contient est le réducteur.\nSi le nombre d'oxydation d'un élément diminue, cet élément a subi une réduction, et le corps qui le contient est l'oxydant.\nExemple de la leçon : dans la combustion du magnésium, le magnésium passe de 0 à +II, il est oxydé, tandis que l'oxygène passe de 0 à -II, il est réduit.",
      "keyRule": "Augmentation du nombre d'oxydation égale oxydation et réducteur ; diminution égale réduction et oxydant.",
      "formulas": [
        {
          "name": "Oxydation du magnésium lue sur les nombres d'oxydation",
          "formula": "Mg\\ (0) \\rightarrow Mg^{2+}\\ (+II)"
        },
        {
          "name": "Réduction de l'oxygène lue sur les nombres d'oxydation",
          "formula": "O_2\\ (0) \\rightarrow 2O^{2-}\\ (-II)"
        }
      ],
      "workedExample": {
        "title": "Lire l'oxydation et la réduction sur les nombres d'oxydation",
        "statement": "Pour les deux demi-équations de la combustion du magnésium, détermine la variation du nombre d'oxydation et conclus.",
        "methodSteps": [
          "Magnésium : le nombre d'oxydation passe de 0 à +II, il augmente.",
          "Oxygène : le nombre d'oxydation passe de 0 à -II, il diminue."
        ],
        "conclusion": "Le magnésium est oxydé et l'oxygène est réduit : ce sont les conclusions de l'activité d'application de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Quand le nombre d'oxydation augmente",
          "stepTheme": "Quand le nombre d'oxydation augmente",
          "stepBadge": "Quand le nombre d'oxydation augmente",
          "paragraphText": "Une augmentation du nombre d'oxydation traduit une perte d'électrons.\nLe corps qui contient cet élément est alors le réducteur de la réaction.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p05_q1",
            "type": "mcq",
            "prompt": "Si le nombre d'oxydation d'un élément augmente, cet élément subit :",
            "options": [
              "Une réduction",
              "Une oxydation",
              "Aucune transformation",
              "Une simple dilution"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première règle du §4.3 de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Quand le nombre d'oxydation diminue",
          "stepTheme": "Quand le nombre d'oxydation diminue",
          "stepBadge": "Quand le nombre d'oxydation diminue",
          "paragraphText": "Une diminution du nombre d'oxydation traduit un gain d'électrons.\nLe corps qui contient cet élément est alors l'oxydant de la réaction.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p05_q2",
            "type": "mcq",
            "prompt": "Si le nombre d'oxydation d'un élément diminue, le corps qui le contient est :",
            "options": [
              "Le réducteur",
              "Un produit neutre",
              "L'oxydant",
              "Le solvant"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la seconde règle du §4.3 : diminution, réduction, oxydant."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le magnésium dans sa combustion",
          "stepTheme": "Le magnésium dans sa combustion",
          "stepBadge": "Le magnésium dans sa combustion",
          "paragraphText": "Le magnésium part de l'état de corps pur simple, de nombre d'oxydation 0.\nIl finit en ion $Mg^{2+}$, de nombre d'oxydation +II.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p05_q3",
            "type": "mcq",
            "prompt": "Dans la combustion du magnésium, son nombre d'oxydation passe de :",
            "options": [
              "+II à 0",
              "0 à -II",
              "+II à +IV",
              "0 à +II"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il augmente de 0 à +II : le magnésium a été oxydé, conformément à l'activité d'application."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'oxygène dans la combustion du magnésium",
          "stepTheme": "L'oxygène dans la combustion du magnésium",
          "stepBadge": "L'oxygène dans la combustion du magnésium",
          "paragraphText": "Le dioxygène part lui aussi d'un nombre d'oxydation nul.\nIl finit en ions $O^{2-}$, de nombre d'oxydation -II.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p05_q4",
            "type": "mcq",
            "prompt": "Dans cette même réaction, le nombre d'oxydation de l'oxygène passe de :",
            "options": [
              "0 à -II",
              "0 à +II",
              "-II à 0",
              "+IV à 0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il diminue de 0 à -II : l'oxygène a été réduit."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La démarche complète d'analyse",
          "stepTheme": "La démarche complète d'analyse",
          "stepBadge": "La démarche complète d'analyse",
          "paragraphText": "• Calculer les nombres d'oxydation avant et après la réaction.\n• Repérer celui qui augmente et celui qui diminue.\n• En déduire l'espèce oxydée, l'espèce réduite, l'oxydant et le réducteur.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p05_q5",
            "type": "mcq",
            "prompt": "Pour analyser une réaction avec les nombres d'oxydation, on commence par :",
            "options": [
              "Doser les produits",
              "Calculer les nombres d'oxydation des éléments avant et après réaction",
              "Ajouter de l'eau de chaux",
              "Mesurer une masse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans ces valeurs, aucune variation ne peut être constatée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Oxydant ne veut pas dire oxydé",
          "stepTheme": "Oxydant ne veut pas dire oxydé",
          "stepBadge": "Oxydant ne veut pas dire oxydé",
          "paragraphText": "Piège de vocabulaire : l'oxydant est le corps qui contient l'élément dont le nombre d'oxydation diminue.\nC'est l'autre corps, le réducteur, qui est oxydé.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p05_q6",
            "type": "mcq",
            "prompt": "Le corps oxydé dans une réaction est :",
            "options": [
              "L'oxydant",
              "Celui dont un élément voit son nombre d'oxydation diminuer",
              "Le réducteur",
              "Toujours un produit"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le réducteur est oxydé : son nombre d'oxydation augmente pendant qu'il fait réduire l'oxydant."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p05_q1",
          "type": "mcq",
          "prompt": "Si le nombre d'oxydation d'un élément augmente, cet élément subit :",
          "options": [
            "Une réduction",
            "Une oxydation",
            "Aucune transformation",
            "Une simple dilution"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première règle du §4.3 de la leçon."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p05_q2",
          "type": "mcq",
          "prompt": "Si le nombre d'oxydation d'un élément diminue, le corps qui le contient est :",
          "options": [
            "Le réducteur",
            "Un produit neutre",
            "L'oxydant",
            "Le solvant"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la seconde règle du §4.3 : diminution, réduction, oxydant."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p05_q3",
          "type": "mcq",
          "prompt": "Dans la combustion du magnésium, son nombre d'oxydation passe de :",
          "options": [
            "+II à 0",
            "0 à -II",
            "+II à +IV",
            "0 à +II"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il augmente de 0 à +II : le magnésium a été oxydé, conformément à l'activité d'application."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p05_q4",
          "type": "mcq",
          "prompt": "Dans cette même réaction, le nombre d'oxydation de l'oxygène passe de :",
          "options": [
            "0 à -II",
            "0 à +II",
            "-II à 0",
            "+IV à 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il diminue de 0 à -II : l'oxygène a été réduit."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p05_q5",
          "type": "mcq",
          "prompt": "Pour analyser une réaction avec les nombres d'oxydation, on commence par :",
          "options": [
            "Doser les produits",
            "Calculer les nombres d'oxydation des éléments avant et après réaction",
            "Ajouter de l'eau de chaux",
            "Mesurer une masse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans ces valeurs, aucune variation ne peut être constatée."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p05_q6",
          "type": "mcq",
          "prompt": "Le corps oxydé dans une réaction est :",
          "options": [
            "L'oxydant",
            "Celui dont un élément voit son nombre d'oxydation diminuer",
            "Le réducteur",
            "Toujours un produit"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le réducteur est oxydé : son nombre d'oxydation augmente pendant qu'il fait réduire l'oxydant."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p06",
      "order": 6,
      "title": "Applications : carbone et acide sulfurique, fer et haut fourneau",
      "summary": "Les nombres d'oxydation permettent d'équilibrer et d'interpréter des réactions industrielles.",
      "conceptExplanation": "Avec l'acide sulfurique concentré à chaud, le carbone donne du dioxyde de soufre, du dioxyde de carbone et de l'eau : le soufre passe de +VI à +IV et le carbone de 0 à +IV, les nombres d'oxydation varient, c'est donc une oxydoréduction.\nLa documentation de la leçon décrit le haut fourneau : l'oxyde de fer III y est réduit par le monoxyde de carbone en fer, selon $Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2$.\nDans cette réaction, l'oxyde de fer est l'oxydant, qui capte des électrons, et le monoxyde de carbone est le réducteur, qui en cède.",
      "keyRule": "Comparer les variations de nombres d'oxydation pour fixer les coefficients : ici, un carbone pour deux acides sulfuriques, et un oxyde de fer pour trois monoxyde de carbone.",
      "formulas": [
        {
          "name": "Carbone et acide sulfurique",
          "formula": "C + 2H_2SO_4 \\rightarrow 2SO_2 + CO_2 + 2H_2O"
        },
        {
          "name": "Haut fourneau",
          "formula": "Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2"
        }
      ],
      "workedExample": {
        "title": "Le volume de dioxyde de carbone (exercice 5 de la leçon)",
        "statement": "On fait réagir de l'acide sulfurique concentré à chaud avec 18 g de carbone. Calcule le volume de dioxyde de carbone formé, avec $M(C) = 12$ g par mol et un volume molaire de 28 L par mol.",
        "methodSteps": [
          "D'après le bilan, la quantité de dioxyde de carbone égale celle du carbone engagé.",
          "La quantité de carbone vaut $1{,}5$ mol pour 18 g.",
          "Le volume vaut donc $1{,}5$ fois 28 L, soit 42 L."
        ],
        "conclusion": "Le volume de dioxyde de carbone formé est de 42 L, comme dans le corrigé de l'exercice 5."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Pourquoi la réaction carbone et acide est redox",
          "stepTheme": "Pourquoi la réaction carbone et acide est redox",
          "stepBadge": "Pourquoi la réaction carbone et acide est redox",
          "paragraphText": "Le soufre passe de +VI dans l'acide sulfurique à +IV dans le dioxyde de soufre.\nLe carbone passe de 0 à +IV dans le dioxyde de carbone.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p06_q1",
            "type": "mcq",
            "prompt": "La réaction entre le carbone et l'acide sulfurique concentré est une oxydoréduction car :",
            "options": [
              "Elle dégage de la chaleur seulement",
              "Les nombres d'oxydation du soufre et du carbone varient",
              "Elle produit de l'eau",
              "Elle se fait à chaud"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les variations +VI vers +IV et 0 vers +IV qui prouvent le caractère redox, selon le corrigé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les coefficients donnés par les variations",
          "stepTheme": "Les coefficients donnés par les variations",
          "stepBadge": "Les coefficients donnés par les variations",
          "paragraphText": "La variation du soufre est de 2 unités et celle du carbone de 4 unités.\nPour compenser, il faut deux fois plus d'acide sulfurique que de carbone dans le bilan.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p06_q2",
            "type": "mcq",
            "prompt": "Dans le bilan carbone et acide sulfurique, le coefficient devant $H_2SO_4$ est :",
            "options": [
              "1",
              "3",
              "2",
              "4"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le bilan équilibré est $C + 2H_2SO_4 \\rightarrow 2SO_2 + CO_2 + 2H_2O$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le volume de dioxyde de carbone formé",
          "stepTheme": "Le volume de dioxyde de carbone formé",
          "stepBadge": "Le volume de dioxyde de carbone formé",
          "paragraphText": "Chaque mole de carbone donne une mole de dioxyde de carbone.\nAvec 18 g de carbone et un volume molaire de 28 L par mol, le corrigé obtient un volume précis.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p06_q3",
            "type": "mcq",
            "prompt": "Le volume de dioxyde de carbone formé à partir de 18 g de carbone vaut :",
            "options": [
              "28 L",
              "14 L",
              "84 L",
              "42 L"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une quantité de $1{,}5$ mol multipliée par 28 L par mol donne 42 L."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La réaction du haut fourneau",
          "stepTheme": "La réaction du haut fourneau",
          "stepBadge": "La réaction du haut fourneau",
          "paragraphText": "La documentation explique que le minerai de fer contient de l'oxyde de fer III mélangé à de la gangue.\nLe réducteur utilisé dans le haut fourneau est le monoxyde de carbone, produit par la combustion du coke.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p06_q4",
            "type": "mcq",
            "prompt": "Dans le haut fourneau, l'oxyde de fer III est réduit par :",
            "options": [
              "Le monoxyde de carbone",
              "L'aluminium",
              "Le magnésium",
              "La soude"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le bilan donné dans la documentation : $Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les rôles dans la réduction du minerai",
          "stepTheme": "Les rôles dans la réduction du minerai",
          "stepBadge": "Les rôles dans la réduction du minerai",
          "paragraphText": "Le fer passe de +III à 0 : son nombre d'oxydation diminue.\nLe carbone du monoxyde de carbone passe de +II à +IV : son nombre d'oxydation augmente.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p06_q5",
            "type": "mcq",
            "prompt": "Dans la réaction du haut fourneau, l'espèce qui capte des électrons est :",
            "options": [
              "Le monoxyde de carbone",
              "L'oxyde de fer III",
              "Le fer formé",
              "Le dioxyde de carbone formé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'oxyde de fer est l'oxydant : il est réduit en fer métallique, donc il capte des électrons."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le coefficient du monoxyde de carbone",
          "stepTheme": "Le coefficient du monoxyde de carbone",
          "stepBadge": "Le coefficient du monoxyde de carbone",
          "paragraphText": "Piège : chaque fer gagne 3 électrons, mais chaque carbone n'en perd que 2.\nIl faut donc 3 molécules de monoxyde de carbone pour réduire un $Fe_2O_3$ complet, qui contient 2 fers.",
          "exercise": {
            "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p06_q6",
            "type": "mcq",
            "prompt": "Le coefficient devant $CO$ dans le bilan du haut fourneau est :",
            "options": [
              "1",
              "2",
              "3",
              "6"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le bilan équilibré est $Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p06_q1",
          "type": "mcq",
          "prompt": "La réaction entre le carbone et l'acide sulfurique concentré est une oxydoréduction car :",
          "options": [
            "Elle dégage de la chaleur seulement",
            "Les nombres d'oxydation du soufre et du carbone varient",
            "Elle produit de l'eau",
            "Elle se fait à chaud"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les variations +VI vers +IV et 0 vers +IV qui prouvent le caractère redox, selon le corrigé."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p06_q2",
          "type": "mcq",
          "prompt": "Dans le bilan carbone et acide sulfurique, le coefficient devant $H_2SO_4$ est :",
          "options": [
            "1",
            "3",
            "2",
            "4"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le bilan équilibré est $C + 2H_2SO_4 \\rightarrow 2SO_2 + CO_2 + 2H_2O$."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p06_q3",
          "type": "mcq",
          "prompt": "Le volume de dioxyde de carbone formé à partir de 18 g de carbone vaut :",
          "options": [
            "28 L",
            "14 L",
            "84 L",
            "42 L"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une quantité de $1{,}5$ mol multipliée par 28 L par mol donne 42 L."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p06_q4",
          "type": "mcq",
          "prompt": "Dans le haut fourneau, l'oxyde de fer III est réduit par :",
          "options": [
            "Le monoxyde de carbone",
            "L'aluminium",
            "Le magnésium",
            "La soude"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le bilan donné dans la documentation : $Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2$."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p06_q5",
          "type": "mcq",
          "prompt": "Dans la réaction du haut fourneau, l'espèce qui capte des électrons est :",
          "options": [
            "Le monoxyde de carbone",
            "L'oxyde de fer III",
            "Le fer formé",
            "Le dioxyde de carbone formé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'oxyde de fer est l'oxydant : il est réduit en fer métallique, donc il capte des électrons."
        },
        {
          "id": "premiere_c_chimie_l10_oxydoreduction_voie_seche_p06_q6",
          "type": "mcq",
          "prompt": "Le coefficient devant $CO$ dans le bilan du haut fourneau est :",
          "options": [
            "1",
            "2",
            "3",
            "6"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le bilan équilibré est $Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2$."
        }
      ]
    }
  ]
};
