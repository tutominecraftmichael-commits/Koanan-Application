import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Champ électrostatique » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Champ électrostatique » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const PHYSIQUE_1ERE_CD_L10_CHAMP_ELECTROSTATIQUE: CurriculumChapter = {
  "id": "premiere_c_physique_l10_champ_electrostatique",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 10,
  "title": "Leçon 10 : Champ électrostatique",
  "summary": "Au voisinage d’un corps électrisé, il existe un vecteur champ électrostatique $\\vec{E}$ indépendant de la charge d’épreuve : une charge q placée en un point y subit la force $\\vec{F} = q \\vec{E}$. Entre deux plaques parallèles chargées, ce champ est uniforme et vaut $E = \\frac{U}{d}$.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Champ électrostatique » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_physique_l10_champ_electrostatique_p01",
      "order": 1,
      "title": "La force électrostatique",
      "summary": "Deux corps électrisés exercent l’un sur l’autre des forces à distance : répulsives entre charges de même signe, attractives entre charges de signes opposés.",
      "conceptExplanation": "La situation d’apprentissage part des éclairs pendant la saison des pluies : des décharges entre des nuages chargés, entre lesquels il existe des champs électrostatiques.\nLe document commence par les interactions : deux corps électrisés exercent l’un sur l’autre des forces à distance appelées forces électrostatiques.\nDeux charges électriques de même signe se repoussent : les forces sont alors répulsives.\nDeux charges électriques de signes opposés s’attirent : les forces sont alors attractives.",
      "keyRule": "Même signe : répulsion ; signes opposés : attraction — ce sont des forces à distance, sans contact.",
      "formulas": [],
      "workedExample": {
        "title": "Lire les schémas d’interaction du document",
        "statement": "Le document schématise deux situations : deux charges positives placées face à face, puis une charge négative face à une charge positive. Indique dans chaque cas la nature de l’interaction.",
        "methodSteps": [
          "Premier schéma : les deux charges sont positives, donc de même signe ; les forces représentées s’éloignent l’une de l’autre.",
          "Second schéma : les charges sont de signes opposés ; les forces représentées se dirigent l’une vers l’autre.",
          "Conclusion du document : le premier cas est répulsif, le second est attractif."
        ],
        "conclusion": "Charges de même signe : forces répulsives ; charges de signes opposés : forces attractives."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Des forces à distance",
          "stepTheme": "Des forces à distance",
          "stepBadge": "Des forces à distance",
          "paragraphText": "• Forces électrostatiques : forces à distance que deux corps électrisés exercent l’un sur l’autre.\nElles n’exigent aucun contact matériel entre les corps chargés, comme le montre la décharge entre nuages de la situation d’apprentissage.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p01_q1",
            "type": "mcq",
            "prompt": "Les forces électrostatiques entre deux corps électrisés sont des forces :",
            "options": [
              "De contact uniquement",
              "À distance",
              "Toujours nulles",
              "Qui exigent un fil de liaison"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le §1 du document les définit comme des forces à distance exercées par des corps électrisés l’un sur l’autre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Charges de même signe : répulsion",
          "stepTheme": "Charges de même signe : répulsion",
          "stepBadge": "Charges de même signe : répulsion",
          "paragraphText": "Le document énonce la première règle d’interaction.\nDeux charges électriques de même signe se repoussent : les forces électrostatiques sont répulsives.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p01_q2",
            "type": "mcq",
            "prompt": "Deux charges électriques de même signe :",
            "options": [
              "S’attirent",
              "N’interagissent pas",
              "Se repoussent",
              "Se neutralisent toujours"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la première règle du §1 : même signe, forces répulsives."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Charges de signes opposés : attraction",
          "stepTheme": "Charges de signes opposés : attraction",
          "stepBadge": "Charges de signes opposés : attraction",
          "paragraphText": "La seconde règle d’interaction concerne les charges de signes contraires.\nDeux charges électriques de signes opposés s’attirent : les forces électrostatiques sont attractives.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p01_q3",
            "type": "mcq",
            "prompt": "Une charge positive et une charge négative placées face à face :",
            "options": [
              "Se repoussent",
              "S’attirent",
              "N’exercent aucune force",
              "Tournent l’une autour de l’autre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Signes opposés : les forces sont attractives, comme sur le second schéma du document."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les éclairs de la situation d’apprentissage",
          "stepTheme": "Les éclairs de la situation d’apprentissage",
          "stepBadge": "Les éclairs de la situation d’apprentissage",
          "paragraphText": "Pendant la saison des pluies à Dabou, les éclairs qui illuminent le ciel sont attribués, dans la situation, à une décharge entre des nuages chargés.\nL’aîné d’Essoh explique qu’il existe des champs électrostatiques entre ces nuages : c’est la notion que la leçon va définir.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p01_q4",
            "type": "mcq",
            "prompt": "Dans la situation d’apprentissage, les éclairs sont dus, d’après l’aîné d’Essoh, à :",
            "options": [
              "Une décharge entre des nuages chargés, entre lesquels existent des champs électrostatiques",
              "La rotation de la Terre",
              "Le vent dans les nuages",
              "La chaleur du Soleil"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’explication rapportée dans la situation d’apprentissage, qui motive toute la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège : inverser les deux règles",
          "stepTheme": "Piège : inverser les deux règles",
          "stepBadge": "Piège : inverser les deux règles",
          "paragraphText": "L’erreur fréquente consiste à inverser les deux interactions sur un schéma.\nIl faut regarder les signes avant de conclure : deux signes identiques donnent des forces qui s’écartent, deux signes opposés donnent des forces qui se rapprochent.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p01_q5",
            "type": "mcq",
            "prompt": "Sur un schéma, deux charges négatives exercent l’une sur l’autre des forces :",
            "options": [
              "Attractives",
              "Répulsives, car elles sont de même signe",
              "Nulles car elles sont négatives",
              "Perpendiculaires à la droite qui les joint"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux charges négatives sont de même signe : la règle du document donne des forces répulsives."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Une action réciproque",
          "stepTheme": "Une action réciproque",
          "stepBadge": "Une action réciproque",
          "paragraphText": "Le document insiste sur la réciprocité : les deux corps électrisés exercent des forces l’un sur l’autre.\nSur les schémas, chaque charge porte donc sa propre flèche de force, dirigée selon la nature de l’interaction.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p01_q6",
            "type": "mcq",
            "prompt": "Dans l’interaction entre deux corps électrisés, les forces sont exercées :",
            "options": [
              "Par le seul corps positif",
              "Par le seul corps le plus chargé",
              "Par chaque corps sur l’autre",
              "Par aucun des deux corps"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document écrit que deux corps électrisés « exercent l’un sur l’autre » ces forces : l’action est réciproque."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p01_q1",
          "type": "mcq",
          "prompt": "Les forces électrostatiques entre deux corps électrisés sont des forces :",
          "options": [
            "De contact uniquement",
            "À distance",
            "Toujours nulles",
            "Qui exigent un fil de liaison"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le §1 du document les définit comme des forces à distance exercées par des corps électrisés l’un sur l’autre."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p01_q2",
          "type": "mcq",
          "prompt": "Deux charges électriques de même signe :",
          "options": [
            "S’attirent",
            "N’interagissent pas",
            "Se repoussent",
            "Se neutralisent toujours"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la première règle du §1 : même signe, forces répulsives."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p01_q3",
          "type": "mcq",
          "prompt": "Une charge positive et une charge négative placées face à face :",
          "options": [
            "Se repoussent",
            "S’attirent",
            "N’exercent aucune force",
            "Tournent l’une autour de l’autre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Signes opposés : les forces sont attractives, comme sur le second schéma du document."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p01_q4",
          "type": "mcq",
          "prompt": "Dans la situation d’apprentissage, les éclairs sont dus, d’après l’aîné d’Essoh, à :",
          "options": [
            "Une décharge entre des nuages chargés, entre lesquels existent des champs électrostatiques",
            "La rotation de la Terre",
            "Le vent dans les nuages",
            "La chaleur du Soleil"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’explication rapportée dans la situation d’apprentissage, qui motive toute la leçon."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p01_q5",
          "type": "mcq",
          "prompt": "Sur un schéma, deux charges négatives exercent l’une sur l’autre des forces :",
          "options": [
            "Attractives",
            "Répulsives, car elles sont de même signe",
            "Nulles car elles sont négatives",
            "Perpendiculaires à la droite qui les joint"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux charges négatives sont de même signe : la règle du document donne des forces répulsives."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p01_q6",
          "type": "mcq",
          "prompt": "Dans l’interaction entre deux corps électrisés, les forces sont exercées :",
          "options": [
            "Par le seul corps positif",
            "Par le seul corps le plus chargé",
            "Par chaque corps sur l’autre",
            "Par aucun des deux corps"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document écrit que deux corps électrisés « exercent l’un sur l’autre » ces forces : l’action est réciproque."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l10_champ_electrostatique_p02",
      "order": 2,
      "title": "Mise en évidence et définition du champ électrostatique",
      "summary": "En un point M au voisinage d’un corps électrisé, les rapports entre la force subie et la charge sont tous égaux à un même vecteur, le champ électrostatique en M.",
      "conceptExplanation": "On place en un point M, au voisinage d’un corps électrisé, différentes particules chargées $q_1$, $q_2$ et $q_3$, qui subissent des forces électriques différentes.\nPour une charge positive, la force subie a le même sens que le rapport de la force par la charge ; pour une charge négative, la force est de sens opposé à la charge, de sorte que les vecteurs obtenus en divisant chaque force par sa charge ont tous la même direction et le même sens, et on montre par ailleurs qu’ils ont la même valeur.\nCe vecteur commun, lié au point M et indépendant des charges électriques placées en M, est appelé vecteur champ électrostatique au point M, noté $\\vec{E}(M)$.\nDéfinition du document : en tout point M au voisinage d’un corps électrisé, il existe un vecteur champ électrostatique $\\vec{E}(M)$, et une particule de charge q placée en M subit la force $\\vec{F} = q \\times \\vec{E}(M)$.",
      "keyRule": "$\\vec{E}(M)$ ne dépend pas de la charge d’épreuve : c’est le même vecteur pour toutes les charges placées en M.",
      "formulas": [
        {
          "name": "Définition du champ au point M",
          "formula": "\\vec{E}(M) = \\frac{\\vec{F}}{q}",
          "note": "Le rapport est le même pour toutes les charges placées en M."
        },
        {
          "name": "Force subie par une charge",
          "formula": "\\vec{F} = q \\times \\vec{E}(M)",
          "note": "Relation centrale de la leçon."
        }
      ],
      "workedExample": {
        "title": "Retrouver une charge dans un champ (activité d’application)",
        "statement": "Une charge électrique q est placée dans un champ électrostatique de valeur E = $2 \\times 10^{3}$ V/m. Elle est soumise à une force de même sens que le champ et de valeur F = $6 \\times 10^{-3}$ N. Détermine la valeur de q.",
        "methodSteps": [
          "La force et le champ ont le même sens : la charge est donc positive.",
          "De $\\vec{F} = q \\times \\vec{E}$, on tire la valeur de la charge à partir de F et de E.",
          "Application numérique : le quotient de $6 \\times 10^{-3}$ par $2 \\times 10^{3}$ donne $3 \\times 10^{-6}$, donc q = $3 \\times 10^{-6}$ C."
        ],
        "conclusion": "La charge vaut $3 \\times 10^{-6}$ C : c’est la réponse a) de l’activité d’application du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le vecteur champ au point M",
          "stepTheme": "Le vecteur champ au point M",
          "stepBadge": "Le vecteur champ au point M",
          "paragraphText": "• Vecteur champ électrostatique : vecteur lié à un point M de l’espace, au voisinage d’un corps électrisé, et indépendant des charges électriques placées en M.\nIl est noté $\\vec{E}(M)$ et caractérise l’espace autour du corps électrisé.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p02_q1",
            "type": "mcq",
            "prompt": "Le vecteur champ électrostatique au point M est :",
            "options": [
              "Un vecteur lié au point M et indépendant des charges placées en M",
              "Un vecteur qui dépend de chaque charge placée en M",
              "La force subie par toute charge en M",
              "Un vecteur toujours nul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la conclusion de la mise en évidence du §2.1 : $\\vec{E}(M)$ est lié au point et indépendant des charges d’épreuve."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le même rapport pour toutes les charges",
          "stepTheme": "Le même rapport pour toutes les charges",
          "stepBadge": "Le même rapport pour toutes les charges",
          "paragraphText": "En divisant chaque force subie par la charge correspondante, on obtient des vecteurs de même direction et de même sens.\nLe document ajoute qu’ils ont aussi la même valeur : les trois rapports sont donc égaux entre eux et égaux à $\\vec{E}(M)$.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p02_q2",
            "type": "mcq",
            "prompt": "Pour différentes charges placées au même point M, les rapports entre force subie et charge sont :",
            "options": [
              "Tous différents",
              "Égaux entre eux et égaux au vecteur champ en M",
              "Toujours nuls",
              "Égaux aux charges elles-mêmes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le résultat de la mise en évidence : un seul vecteur $\\vec{E}(M)$ pour toutes les charges en M."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La relation $\\vec{F} = q \\times \\vec{E}$",
          "stepTheme": "La relation $\\vec{F} = q \\times \\vec{E}$",
          "stepBadge": "La relation $\\vec{F} = q \\times \\vec{E}$",
          "paragraphText": "La définition donne immédiatement la force subie par n’importe quelle charge placée au point M.\nUne particule de charge électrique q placée en M subit la force électrostatique $\\vec{F} = q \\times \\vec{E}(M)$.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p02_q3",
            "type": "mcq",
            "prompt": "La force subie par une particule de charge q placée dans un champ $\\vec{E}$ vaut :",
            "options": [
              "$\\vec{F} = \\frac{\\vec{E}}{q}$",
              "$\\vec{F} = q + \\vec{E}$",
              "$\\vec{F} = q \\times \\vec{E}$",
              "$\\vec{F} = \\frac{q}{\\vec{E}}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la relation de la définition du §2.2 du document."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une charge de $3 \\times 10^{-6}$ C",
          "stepTheme": "Une charge de $3 \\times 10^{-6}$ C",
          "stepBadge": "Une charge de $3 \\times 10^{-6}$ C",
          "paragraphText": "Dans l’activité d’application, une charge subit une force de $6 \\times 10^{-3}$ N dans un champ de $2 \\times 10^{3}$ V/m, dans le même sens que le champ.\nLa solution choisit la proposition a) : la charge vaut $3 \\times 10^{-6}$ C.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p02_q4",
            "type": "mcq",
            "prompt": "La charge de l’activité d’application (force de même sens que le champ) vaut :",
            "options": [
              "$-3 \\times 10^{-5}$ C",
              "$30 \\times 10^{-6}$ C",
              "$-3 \\times 10^{-6}$ C",
              "$3 \\times 10^{-6}$ C"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le quotient de la force par le champ donne $3 \\times 10^{-6}$ C, positif car la force a le même sens que le champ : réponse a)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une force de sens contraire : charge négative",
          "stepTheme": "Une force de sens contraire : charge négative",
          "stepBadge": "Une force de sens contraire : charge négative",
          "paragraphText": "La seconde question de l’activité donne une force de $2 \\times 10^{-3}$ N de sens contraire au champ, dans le même champ de $2 \\times 10^{3}$ V/m.\nLa solution choisit la proposition c) : la charge est négative et vaut $-10 \\times 10^{-7}$ C, soit $-1 \\times 10^{-6}$ C.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p02_q5",
            "type": "mcq",
            "prompt": "Si la force subie est de sens contraire au champ, la charge placée dans le champ est :",
            "options": [
              "Négative",
              "Positive",
              "Nulle",
              "Toujours égale à la charge élémentaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $\\vec{F} = q \\times \\vec{E}$, une force opposée au champ impose un signe négatif à q : c’est le cas de la question 2 de l’activité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : confondre le champ et la force",
          "stepTheme": "Piège : confondre le champ et la force",
          "stepBadge": "Piège : confondre le champ et la force",
          "paragraphText": "Le champ existe au point M même si on retire la charge d’épreuve, car il est créé par le corps électrisé.\nLa force, elle, n’apparaît que si une charge est effectivement placée en M, et elle dépend de cette charge.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p02_q6",
            "type": "mcq",
            "prompt": "Si on retire la charge d’épreuve placée au point M, le vecteur champ $\\vec{E}(M)$ :",
            "options": [
              "Disparaît avec elle",
              "Existe toujours, car il est créé par le corps électrisé",
              "Devient nul",
              "Change de valeur selon la charge retirée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document définit $\\vec{E}(M)$ comme indépendant des charges placées en M : il caractérise l’espace autour du corps électrisé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p02_q1",
          "type": "mcq",
          "prompt": "Le vecteur champ électrostatique au point M est :",
          "options": [
            "Un vecteur lié au point M et indépendant des charges placées en M",
            "Un vecteur qui dépend de chaque charge placée en M",
            "La force subie par toute charge en M",
            "Un vecteur toujours nul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la conclusion de la mise en évidence du §2.1 : $\\vec{E}(M)$ est lié au point et indépendant des charges d’épreuve."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p02_q2",
          "type": "mcq",
          "prompt": "Pour différentes charges placées au même point M, les rapports entre force subie et charge sont :",
          "options": [
            "Tous différents",
            "Égaux entre eux et égaux au vecteur champ en M",
            "Toujours nuls",
            "Égaux aux charges elles-mêmes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le résultat de la mise en évidence : un seul vecteur $\\vec{E}(M)$ pour toutes les charges en M."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p02_q3",
          "type": "mcq",
          "prompt": "La force subie par une particule de charge q placée dans un champ $\\vec{E}$ vaut :",
          "options": [
            "$\\vec{F} = \\frac{\\vec{E}}{q}$",
            "$\\vec{F} = q + \\vec{E}$",
            "$\\vec{F} = q \\times \\vec{E}$",
            "$\\vec{F} = \\frac{q}{\\vec{E}}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la relation de la définition du §2.2 du document."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p02_q4",
          "type": "mcq",
          "prompt": "La charge de l’activité d’application (force de même sens que le champ) vaut :",
          "options": [
            "$-3 \\times 10^{-5}$ C",
            "$30 \\times 10^{-6}$ C",
            "$-3 \\times 10^{-6}$ C",
            "$3 \\times 10^{-6}$ C"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le quotient de la force par le champ donne $3 \\times 10^{-6}$ C, positif car la force a le même sens que le champ : réponse a)."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p02_q5",
          "type": "mcq",
          "prompt": "Si la force subie est de sens contraire au champ, la charge placée dans le champ est :",
          "options": [
            "Négative",
            "Positive",
            "Nulle",
            "Toujours égale à la charge élémentaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $\\vec{F} = q \\times \\vec{E}$, une force opposée au champ impose un signe négatif à q : c’est le cas de la question 2 de l’activité."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p02_q6",
          "type": "mcq",
          "prompt": "Si on retire la charge d’épreuve placée au point M, le vecteur champ $\\vec{E}(M)$ :",
          "options": [
            "Disparaît avec elle",
            "Existe toujours, car il est créé par le corps électrisé",
            "Devient nul",
            "Change de valeur selon la charge retirée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document définit $\\vec{E}(M)$ comme indépendant des charges placées en M : il caractérise l’espace autour du corps électrisé."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l10_champ_electrostatique_p03",
      "order": 3,
      "title": "Caractéristiques du vecteur champ électrostatique",
      "summary": "Le vecteur champ en M a pour point d’application M, une direction colinéaire à la force, un sens qui dépend du signe de la charge, et une valeur égale au quotient de la force par la valeur absolue de la charge.",
      "conceptExplanation": "Le document donne les caractéristiques de $\\vec{E}(M)$.\n• Point d’application : le point M.\n• Direction : colinéaire à la force $\\vec{F}$ subie par une charge placée en M.\n• Sens : si la charge est positive, le champ a le même sens que la force ; si la charge est négative, le champ est de sens opposé à la force.\n• Valeur : $E(M) = \\frac{F}{|q|}$, où F est la valeur de la force et q la charge.\nLe champ s’exprime en newtons par coulomb (N/C), unité équivalente au volt par mètre (V/m).",
      "keyRule": "Caractériser $\\vec{E}$ : point M, direction de la force, sens selon le signe de q, valeur $E = \\frac{F}{|q|}$ en N/C ou en V/m.",
      "formulas": [
        {
          "name": "Valeur du champ électrostatique",
          "formula": "E = \\frac{F}{|q|}",
          "note": "F en newtons, q en coulombs : E en N/C, équivalent au V/m."
        }
      ],
      "workedExample": {
        "title": "La force exercée sur l’électron (exercice 2)",
        "statement": "Calcule la valeur de la force électrostatique subie par un électron placé dans un champ électrostatique de valeur E = 100 V/m, puis compare-la à son poids (charge de l’électron : $-1{,}6 \\times 10^{-19}$ C ; masse : $9{,}1 \\times 10^{-31}$ kg ; g = 10 N/kg).",
        "methodSteps": [
          "Force : $F = |q| \\times E = 1{,}6 \\times 10^{-19} \\times 100 = 1{,}6 \\times 10^{-17}$ N.",
          "Poids : $P = m g = 9{,}1 \\times 10^{-30}$ N.",
          "Le rapport des deux valeurs montre que la force électrostatique est immensément plus grande que le poids."
        ],
        "conclusion": "Le corrigé de l’exercice 2 conclut que le poids de l’électron est négligeable devant la force électrostatique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les quatre caractéristiques du vecteur champ",
          "stepTheme": "Les quatre caractéristiques du vecteur champ",
          "stepBadge": "Les quatre caractéristiques du vecteur champ",
          "paragraphText": "• Caractéristiques de $\\vec{E}(M)$ : point d’application, direction, sens et valeur.\nLe document les donne une à une au §2.3 : ce sont les éléments à citer quand on demande de déterminer les caractéristiques du champ.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p03_q1",
            "type": "mcq",
            "prompt": "Le point d’application du vecteur champ électrostatique $\\vec{E}(M)$ est :",
            "options": [
              "Le centre du corps électrisé",
              "Le point M",
              "Le centre de la charge d’épreuve",
              "L’origine du repère"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la première caractéristique du §2.3 : le point d’application est le point M où le champ est défini."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une direction colinéaire à la force",
          "stepTheme": "Une direction colinéaire à la force",
          "stepBadge": "Une direction colinéaire à la force",
          "paragraphText": "La direction du vecteur champ est celle de la force électrostatique subie en M : les deux vecteurs sont colinéaires.\nC’est une conséquence directe de la relation $\\vec{F} = q \\times \\vec{E}$, où q est un nombre.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p03_q2",
            "type": "mcq",
            "prompt": "La direction du vecteur champ $\\vec{E}(M)$ est :",
            "options": [
              "Perpendiculaire à la force subie en M",
              "Colinéaire à la force subie en M",
              "Toujours verticale",
              "Toujours horizontale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document indique une direction colinéaire à celle de $\\vec{F}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le sens dépend du signe de la charge",
          "stepTheme": "Le sens dépend du signe de la charge",
          "stepBadge": "Le sens dépend du signe de la charge",
          "paragraphText": "Le document distingue deux cas pour le sens.\n• Si la charge est positive : le champ a le même sens que la force.\n• Si la charge est négative : le champ est de sens opposé à la force.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p03_q3",
            "type": "mcq",
            "prompt": "Pour une charge négative placée en M, le vecteur champ $\\vec{E}(M)$ est, par rapport à la force subie :",
            "options": [
              "De même sens",
              "Perpendiculaire",
              "De sens opposé",
              "Toujours nul"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le second cas du §2.3 : pour q négative, $\\vec{E}$ et $\\vec{F}$ sont de sens opposés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La valeur $E = \\frac{F}{|q|}$",
          "stepTheme": "La valeur $E = \\frac{F}{|q|}$",
          "stepBadge": "La valeur $E = \\frac{F}{|q|}$",
          "paragraphText": "La valeur du champ se calcule en divisant la valeur de la force par la valeur absolue de la charge qui la subit.\nLe champ s’exprime en newtons par coulomb (N/C) ; le document rappelle l’équivalence avec le volt par mètre (V/m).",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p03_q4",
            "type": "mcq",
            "prompt": "La valeur du champ électrostatique en un point s’exprime en :",
            "options": [
              "Coulombs (C)",
              "Newtons (N)",
              "Newtons par coulomb (N/C), soit des volts par mètre (V/m)",
              "Joules (J)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document donne les deux unités équivalentes N/C et V/m pour le champ électrostatique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La force sur l’électron : $1{,}6 \\times 10^{-17}$ N",
          "stepTheme": "La force sur l’électron : $1{,}6 \\times 10^{-17}$ N",
          "stepBadge": "La force sur l’électron : $1{,}6 \\times 10^{-17}$ N",
          "paragraphText": "L’exercice 2 place un électron, de charge $-1{,}6 \\times 10^{-19}$ C, dans un champ de 100 V/m.\nLe corrigé calcule une force de $1{,}6 \\times 10^{-17}$ N, très supérieure à son poids de $9{,}1 \\times 10^{-30}$ N.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p03_q5",
            "type": "mcq",
            "prompt": "La force électrostatique subie par l’électron de l’exercice 2 (champ de 100 V/m) vaut :",
            "options": [
              "$1{,}6 \\times 10^{-19}$ N",
              "$1{,}6 \\times 10^{-21}$ N",
              "$1{,}6 \\times 10^{-15}$ N",
              "$1{,}6 \\times 10^{-17}$ N"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$F = |q| \\times E = 1{,}6 \\times 10^{-19} \\times 100 = 1{,}6 \\times 10^{-17}$ N : c’est le corrigé de l’exercice 2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : utiliser la valeur absolue de la charge",
          "stepTheme": "Piège : utiliser la valeur absolue de la charge",
          "stepBadge": "Piège : utiliser la valeur absolue de la charge",
          "paragraphText": "La valeur d’un champ est toujours positive : le document écrit la relation avec la valeur absolue de la charge.\nLe signe de la charge ne sert qu’à déterminer le sens relatif de la force et du champ, jamais à donner un champ négatif.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p03_q6",
            "type": "mcq",
            "prompt": "Dans le calcul de la valeur du champ à partir d’une force subie par une charge négative, on utilise :",
            "options": [
              "La valeur absolue de la charge",
              "La charge avec son signe négatif",
              "Le double de la charge",
              "La masse de la particule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La remarque du document écrit la force sous la forme valeur absolue de q multipliée par E : la valeur du champ est positive."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p03_q1",
          "type": "mcq",
          "prompt": "Le point d’application du vecteur champ électrostatique $\\vec{E}(M)$ est :",
          "options": [
            "Le centre du corps électrisé",
            "Le point M",
            "Le centre de la charge d’épreuve",
            "L’origine du repère"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la première caractéristique du §2.3 : le point d’application est le point M où le champ est défini."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p03_q2",
          "type": "mcq",
          "prompt": "La direction du vecteur champ $\\vec{E}(M)$ est :",
          "options": [
            "Perpendiculaire à la force subie en M",
            "Colinéaire à la force subie en M",
            "Toujours verticale",
            "Toujours horizontale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document indique une direction colinéaire à celle de $\\vec{F}$."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p03_q3",
          "type": "mcq",
          "prompt": "Pour une charge négative placée en M, le vecteur champ $\\vec{E}(M)$ est, par rapport à la force subie :",
          "options": [
            "De même sens",
            "Perpendiculaire",
            "De sens opposé",
            "Toujours nul"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le second cas du §2.3 : pour q négative, $\\vec{E}$ et $\\vec{F}$ sont de sens opposés."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p03_q4",
          "type": "mcq",
          "prompt": "La valeur du champ électrostatique en un point s’exprime en :",
          "options": [
            "Coulombs (C)",
            "Newtons (N)",
            "Newtons par coulomb (N/C), soit des volts par mètre (V/m)",
            "Joules (J)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document donne les deux unités équivalentes N/C et V/m pour le champ électrostatique."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p03_q5",
          "type": "mcq",
          "prompt": "La force électrostatique subie par l’électron de l’exercice 2 (champ de 100 V/m) vaut :",
          "options": [
            "$1{,}6 \\times 10^{-19}$ N",
            "$1{,}6 \\times 10^{-21}$ N",
            "$1{,}6 \\times 10^{-15}$ N",
            "$1{,}6 \\times 10^{-17}$ N"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$F = |q| \\times E = 1{,}6 \\times 10^{-19} \\times 100 = 1{,}6 \\times 10^{-17}$ N : c’est le corrigé de l’exercice 2."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p03_q6",
          "type": "mcq",
          "prompt": "Dans le calcul de la valeur du champ à partir d’une force subie par une charge négative, on utilise :",
          "options": [
            "La valeur absolue de la charge",
            "La charge avec son signe négatif",
            "Le double de la charge",
            "La masse de la particule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La remarque du document écrit la force sous la forme valeur absolue de q multipliée par E : la valeur du champ est positive."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l10_champ_electrostatique_p04",
      "order": 4,
      "title": "Lignes de champ et spectres électrostatiques",
      "summary": "Les lignes de champ sont les lignes tangentes aux vecteurs champ, orientées dans leur sens : radiales divergentes pour une charge positive, convergentes pour une charge négative.",
      "conceptExplanation": "Les lignes de champ électrostatique, qui forment le spectre électrostatique, sont l’ensemble des lignes tangentes aux vecteurs champ électrostatiques.\nEn chaque point de l’espace, ces lignes sont orientées dans le sens des vecteurs champ électrostatiques.\nLe document présente trois exemples décrits en mots : le spectre radial divergent, dont les lignes s’éloignent en rayons dans toutes les directions ; le spectre radial convergent, dont les lignes se dirigent vers un centre ; et le spectre de deux charges ponctuelles.\nPour une charge ponctuelle positive, le champ est dirigé vers l’extérieur : le spectre est divergent ; pour une charge négative, il est dirigé vers la charge : le spectre est convergent.",
      "keyRule": "Une ligne de champ est tangente au vecteur champ en chaque point et orientée dans le sens de ce vecteur.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier un spectre radial",
        "statement": "On observe autour d’un corps électrisé des lignes de champ droites qui partent du corps et s’en éloignent dans toutes les directions, les flèches pointant vers l’extérieur. Identifie ce spectre et le signe de la charge.",
        "methodSteps": [
          "Les lignes sont des droites passant par le corps : le spectre est radial.",
          "Les flèches s’éloignent du corps : le spectre est divergent.",
          "Un spectre radial divergent correspond à une charge positive, dont le champ est dirigé vers l’extérieur."
        ],
        "conclusion": "C’est le premier spectre présenté au §3.2 du document : le spectre radial divergent d’une charge positive."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les lignes tangentes aux vecteurs champ",
          "stepTheme": "Les lignes tangentes aux vecteurs champ",
          "stepBadge": "Les lignes tangentes aux vecteurs champ",
          "paragraphText": "• Lignes de champ : ensemble des lignes tangentes aux vecteurs champ électrostatiques.\nElles forment le spectre électrostatique et permettent de visualiser le champ dans tout l’espace.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p04_q1",
            "type": "mcq",
            "prompt": "Les lignes de champ électrostatique sont les lignes :",
            "options": [
              "Tangentes aux vecteurs champ électrostatiques",
              "Perpendiculaires aux vecteurs champ",
              "Qui joignent les plaques entre elles",
              "Suivies par les charges en mouvement dans tous les cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition du §3.1 du document."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des lignes orientées dans le sens du champ",
          "stepTheme": "Des lignes orientées dans le sens du champ",
          "stepBadge": "Des lignes orientées dans le sens du champ",
          "paragraphText": "En chaque point de l’espace, les lignes de champ sont orientées dans le sens des vecteurs champ électrostatiques.\nLa flèche d’une ligne de champ indique donc le sens du champ en tout point de cette ligne.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p04_q2",
            "type": "mcq",
            "prompt": "Les lignes de champ sont orientées :",
            "options": [
              "Dans le sens opposé aux vecteurs champ",
              "Sans orientation particulière",
              "Dans le sens des vecteurs champ électrostatiques",
              "Toujours vers le bas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le §3.1 précise que les lignes sont orientées dans le sens des vecteurs champ."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le spectre radial divergent",
          "stepTheme": "Le spectre radial divergent",
          "stepBadge": "Le spectre radial divergent",
          "paragraphText": "Premier exemple du document : le spectre radial divergent.\nSes lignes sont des demi-droites qui s’éloignent d’une charge dans toutes les directions, comme les rayons d’un cercle, car le champ d’une charge positive pointe vers l’extérieur.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p04_q3",
            "type": "mcq",
            "prompt": "Le spectre radial divergent, dont les lignes s’éloignent dans toutes les directions, est celui :",
            "options": [
              "D’une charge négative",
              "D’une charge positive",
              "D’un corps non chargé",
              "De deux plaques parallèles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le champ d’une charge positive est dirigé vers l’extérieur : ses lignes de champ divergent. C’est le premier spectre du §3.2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le spectre radial convergent",
          "stepTheme": "Le spectre radial convergent",
          "stepBadge": "Le spectre radial convergent",
          "paragraphText": "Second exemple du document : le spectre radial convergent.\nSes lignes se dirigent toutes vers la charge centrale, car le champ d’une charge négative pointe vers cette charge.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p04_q4",
            "type": "mcq",
            "prompt": "Le spectre radial convergent est celui :",
            "options": [
              "D’une charge positive",
              "D’un champ uniforme",
              "D’une charge négative",
              "D’un aimant"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le champ d’une charge négative est dirigé vers la charge : ses lignes de champ convergent. C’est le second spectre du §3.2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le spectre de deux charges ponctuelles",
          "stepTheme": "Le spectre de deux charges ponctuelles",
          "stepBadge": "Le spectre de deux charges ponctuelles",
          "paragraphText": "Troisième exemple du document : le spectre de deux charges ponctuelles.\nSes lignes, courbes, relient l’espace entre les deux charges et restent en chaque point tangentes au vecteur champ résultant.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p04_q5",
            "type": "mcq",
            "prompt": "Le troisième spectre présenté par le document est celui :",
            "options": [
              "D’un condensateur plan",
              "D’une seule charge positive",
              "D’une bobine",
              "De deux charges ponctuelles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Après les spectres radiaux divergent et convergent, le §3.2 présente le spectre de deux charges ponctuelles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : une ligne de champ n’est pas une trajectoire quelconque",
          "stepTheme": "Piège : une ligne de champ n’est pas une trajectoire quelconque",
          "stepBadge": "Piège : une ligne de champ n’est pas une trajectoire quelconque",
          "paragraphText": "Une ligne de champ est définie uniquement par sa tangence au vecteur champ en chaque point et par son orientation.\nLa dessiner dans le mauvais sens, ou la faire couper le vecteur champ au lieu de lui être tangente, contredit la définition du document.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p04_q6",
            "type": "mcq",
            "prompt": "En un point d’une ligne de champ, le vecteur champ est :",
            "options": [
              "Tangent à la ligne en ce point",
              "Perpendiculaire à la ligne",
              "Nul",
              "Toujours vertical"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition même des lignes de champ au §3.1 : elles sont tangentes aux vecteurs champ."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p04_q1",
          "type": "mcq",
          "prompt": "Les lignes de champ électrostatique sont les lignes :",
          "options": [
            "Tangentes aux vecteurs champ électrostatiques",
            "Perpendiculaires aux vecteurs champ",
            "Qui joignent les plaques entre elles",
            "Suivies par les charges en mouvement dans tous les cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition du §3.1 du document."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p04_q2",
          "type": "mcq",
          "prompt": "Les lignes de champ sont orientées :",
          "options": [
            "Dans le sens opposé aux vecteurs champ",
            "Sans orientation particulière",
            "Dans le sens des vecteurs champ électrostatiques",
            "Toujours vers le bas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le §3.1 précise que les lignes sont orientées dans le sens des vecteurs champ."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p04_q3",
          "type": "mcq",
          "prompt": "Le spectre radial divergent, dont les lignes s’éloignent dans toutes les directions, est celui :",
          "options": [
            "D’une charge négative",
            "D’une charge positive",
            "D’un corps non chargé",
            "De deux plaques parallèles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le champ d’une charge positive est dirigé vers l’extérieur : ses lignes de champ divergent. C’est le premier spectre du §3.2."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p04_q4",
          "type": "mcq",
          "prompt": "Le spectre radial convergent est celui :",
          "options": [
            "D’une charge positive",
            "D’un champ uniforme",
            "D’une charge négative",
            "D’un aimant"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le champ d’une charge négative est dirigé vers la charge : ses lignes de champ convergent. C’est le second spectre du §3.2."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p04_q5",
          "type": "mcq",
          "prompt": "Le troisième spectre présenté par le document est celui :",
          "options": [
            "D’un condensateur plan",
            "D’une seule charge positive",
            "D’une bobine",
            "De deux charges ponctuelles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Après les spectres radiaux divergent et convergent, le §3.2 présente le spectre de deux charges ponctuelles."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p04_q6",
          "type": "mcq",
          "prompt": "En un point d’une ligne de champ, le vecteur champ est :",
          "options": [
            "Tangent à la ligne en ce point",
            "Perpendiculaire à la ligne",
            "Nul",
            "Toujours vertical"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition même des lignes de champ au §3.1 : elles sont tangentes aux vecteurs champ."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l10_champ_electrostatique_p05",
      "order": 5,
      "title": "Le champ électrostatique uniforme entre deux plaques",
      "summary": "Entre deux plaques métalliques parallèles chargées, le champ est uniforme : lignes parallèles, perpendiculaires aux plaques, de la plaque positive vers la négative, et valeur $E = \\frac{U}{d}$.",
      "conceptExplanation": "On applique une tension électrique entre deux plaques métalliques parallèles : les charges électriques accumulées sur les plaques créent un espace champ électrostatique uniforme.\nSes lignes de champ sont parallèles entre elles, perpendiculaires aux plaques, et dirigées de la plaque positive vers la plaque négative.\nEn tout point, le vecteur champ électrostatique est le même : sa direction est perpendiculaire aux plaques, son sens va de la plaque positive vers la plaque négative, et sa valeur vaut $E = \\frac{U}{d}$, où U est la tension appliquée entre les plaques et d la distance entre les plaques.\nDans un tel champ uniforme, la force subie par une charge ne dépend pas de sa position : sa valeur est constante, et pour une charge positive elle est dirigée de la plaque positive vers la plaque négative.",
      "keyRule": "Champ uniforme entre plaques : $E = \\frac{U}{d}$ en V/m, avec U en volts et d en mètres, de la plaque positive vers la plaque négative.",
      "formulas": [
        {
          "name": "Valeur du champ uniforme",
          "formula": "E = \\frac{U}{d}",
          "note": "U tension entre les plaques en volts, d distance entre les plaques en mètres, E en V/m."
        }
      ],
      "workedExample": {
        "title": "Le pendule électrostatique de la situation d’évaluation",
        "statement": "Un pendule porte une boule de masse m = 2,5 g, chargée positivement avec q = 1,44 µC, placée dans un champ électrostatique uniforme horizontal de valeur $10^{4}$ V/m. Le fil s’écarte d’un angle de 30° de la verticale (g = 10 N/kg). Détermine la valeur de la force électrostatique exercée sur la boule, puis celle de la tension du fil.",
        "methodSteps": [
          "Force électrostatique : $F = |q| \\times E = 1{,}44 \\times 10^{-6} \\times 10^{4} = 1{,}44 \\times 10^{-2}$ N.",
          "À l’équilibre, le poids, la tension du fil et la force électrostatique se compensent : la projection donne la tension à partir de F et de l’angle de 30°.",
          "Tension du fil : $T = \\frac{F}{\\sin 30°} = 0{,}0288$ N.",
          "Le champ est horizontal, dans le même sens que la force puisque la charge est positive, et sa valeur est $10^{4}$ V/m."
        ],
        "conclusion": "La force vaut $1{,}44 \\times 10^{-2}$ N et la tension du fil 0,0288 N : ce sont les résultats de la situation d’évaluation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Obtenir un champ uniforme",
          "stepTheme": "Obtenir un champ uniforme",
          "stepBadge": "Obtenir un champ uniforme",
          "paragraphText": "• Champ uniforme entre plaques : champ créé entre deux plaques métalliques parallèles auxquelles on applique une tension électrique.\nLes charges accumulées sur les plaques créent cet espace champ électrostatique uniforme, où le vecteur champ est le même en tout point.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p05_q1",
            "type": "mcq",
            "prompt": "Un champ électrostatique uniforme s’obtient :",
            "options": [
              "Entre deux plaques métalliques parallèles soumises à une tension",
              "Autour d’une charge ponctuelle isolée",
              "Dans un fil parcouru par un courant",
              "Uniquement dans le vide absolu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le mode d’obtention du §3.3 du document : une tension entre deux plaques métalliques parallèles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les lignes de champ entre les plaques",
          "stepTheme": "Les lignes de champ entre les plaques",
          "stepBadge": "Les lignes de champ entre les plaques",
          "paragraphText": "Le document donne les trois propriétés des lignes de champ dans un champ uniforme.\n• Elles sont parallèles entre elles.\n• Elles sont perpendiculaires aux plaques.\n• Elles sont dirigées de la plaque positive vers la plaque négative.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p05_q2",
            "type": "mcq",
            "prompt": "Entre les plaques, les lignes de champ sont :",
            "options": [
              "Parallèles aux plaques",
              "Parallèles entre elles, perpendiculaires aux plaques, de la plaque positive vers la négative",
              "Dirigées de la plaque négative vers la positive",
              "Radiales et divergentes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois caractéristiques listées au §3.3 du document."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La valeur $E = \\frac{U}{d}$",
          "stepTheme": "La valeur $E = \\frac{U}{d}$",
          "stepBadge": "La valeur $E = \\frac{U}{d}$",
          "paragraphText": "Dans un champ uniforme entre plaques, la valeur du champ se calcule à partir de la tension et de la distance.\nElle vaut $E = \\frac{U}{d}$, avec U en volts et d en mètres, pour un résultat en volts par mètre.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p05_q3",
            "type": "mcq",
            "prompt": "La valeur du champ uniforme entre deux plaques distantes de d et soumises à la tension U vaut :",
            "options": [
              "$E = U \\times d$",
              "$E = \\frac{d}{U}$",
              "$E = \\frac{U}{d}$",
              "$E = U^2 \\times d$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la relation du §3.3, utilisée aussi dans l’exercice 4 avec une tension de 100 V et une distance de 5 cm."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "2000 V/m dans l’exercice 4",
          "stepTheme": "2000 V/m dans l’exercice 4",
          "stepBadge": "2000 V/m dans l’exercice 4",
          "paragraphText": "L’exercice 4 place une sphère électrisée entre deux plaques distantes de 5 cm, soumises à une différence de potentiel de 100 V.\nLe corrigé calcule la valeur du champ entre ces plaques : 2000 V/m.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p05_q4",
            "type": "mcq",
            "prompt": "Pour une tension de 100 V entre des plaques distantes de 5 cm, la valeur du champ vaut :",
            "options": [
              "20 V/m",
              "500 V/m",
              "5 000 V/m",
              "2 000 V/m"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$E = \\frac{U}{d}$ avec d converti en mètres ($0{,}05$ m) donne 2 000 V/m : c’est le corrigé de l’exercice 4."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Une force constante dans un champ uniforme",
          "stepTheme": "Une force constante dans un champ uniforme",
          "stepBadge": "Une force constante dans un champ uniforme",
          "paragraphText": "L’activité d’application sur le champ uniforme fait juger plusieurs propositions.\nLe document retient comme vraies : la valeur de la force subie par une charge positive est constante dans le champ, et cette force est dirigée de la plaque positive vers la plaque négative ; la proposition disant que la force dépend de la position de la charge est fausse.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p05_q5",
            "type": "mcq",
            "prompt": "Pour une charge positive placée dans un champ uniforme entre plaques, la force subie :",
            "options": [
              "A une valeur constante et est dirigée de la plaque positive vers la plaque négative",
              "Dépend de sa position entre les plaques",
              "Est parallèle aux plaques",
              "Change de direction selon sa position"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les propositions 2 et 5, jugées vraies dans la résolution ; les propositions 1 et 4, sur la dépendance à la position, sont fausses car le champ est le même en tout point."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : convertir la distance en mètres",
          "stepTheme": "Piège : convertir la distance en mètres",
          "stepBadge": "Piège : convertir la distance en mètres",
          "paragraphText": "Dans l’exercice 4, la distance entre les plaques est donnée en centimètres : 5 cm.\nLa saisir sans conversion dans la relation du champ donnerait une valeur cent fois trop faible ; il faut la convertir en $0{,}05$ m.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p05_q6",
            "type": "mcq",
            "prompt": "Dans le calcul du champ de l’exercice 4, la distance de 5 cm entre les plaques doit être saisie comme :",
            "options": [
              "5 m",
              "$0{,}05$ m",
              "$0{,}5$ m",
              "50 m"
            ],
            "correctAnswerIndex": 1,
            "explanation": "5 cm = $0{,}05$ m : c’est la conversion qui donne le champ de 2 000 V/m du corrigé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p05_q1",
          "type": "mcq",
          "prompt": "Un champ électrostatique uniforme s’obtient :",
          "options": [
            "Entre deux plaques métalliques parallèles soumises à une tension",
            "Autour d’une charge ponctuelle isolée",
            "Dans un fil parcouru par un courant",
            "Uniquement dans le vide absolu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le mode d’obtention du §3.3 du document : une tension entre deux plaques métalliques parallèles."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p05_q2",
          "type": "mcq",
          "prompt": "Entre les plaques, les lignes de champ sont :",
          "options": [
            "Parallèles aux plaques",
            "Parallèles entre elles, perpendiculaires aux plaques, de la plaque positive vers la négative",
            "Dirigées de la plaque négative vers la positive",
            "Radiales et divergentes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois caractéristiques listées au §3.3 du document."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p05_q3",
          "type": "mcq",
          "prompt": "La valeur du champ uniforme entre deux plaques distantes de d et soumises à la tension U vaut :",
          "options": [
            "$E = U \\times d$",
            "$E = \\frac{d}{U}$",
            "$E = \\frac{U}{d}$",
            "$E = U^2 \\times d$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la relation du §3.3, utilisée aussi dans l’exercice 4 avec une tension de 100 V et une distance de 5 cm."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p05_q4",
          "type": "mcq",
          "prompt": "Pour une tension de 100 V entre des plaques distantes de 5 cm, la valeur du champ vaut :",
          "options": [
            "20 V/m",
            "500 V/m",
            "5 000 V/m",
            "2 000 V/m"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$E = \\frac{U}{d}$ avec d converti en mètres ($0{,}05$ m) donne 2 000 V/m : c’est le corrigé de l’exercice 4."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p05_q5",
          "type": "mcq",
          "prompt": "Pour une charge positive placée dans un champ uniforme entre plaques, la force subie :",
          "options": [
            "A une valeur constante et est dirigée de la plaque positive vers la plaque négative",
            "Dépend de sa position entre les plaques",
            "Est parallèle aux plaques",
            "Change de direction selon sa position"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les propositions 2 et 5, jugées vraies dans la résolution ; les propositions 1 et 4, sur la dépendance à la position, sont fausses car le champ est le même en tout point."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p05_q6",
          "type": "mcq",
          "prompt": "Dans le calcul du champ de l’exercice 4, la distance de 5 cm entre les plaques doit être saisie comme :",
          "options": [
            "5 m",
            "$0{,}05$ m",
            "$0{,}5$ m",
            "50 m"
          ],
          "correctAnswerIndex": 1,
          "explanation": "5 cm = $0{,}05$ m : c’est la conversion qui donne le champ de 2 000 V/m du corrigé."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l10_champ_electrostatique_p06",
      "order": 6,
      "title": "Applications : pendules électrostatiques et électron",
      "summary": "Les exercices du document déterminent forces, charges et angles d’équilibre de pendules placés dans un champ uniforme, et montrent que le poids d’un électron est négligeable devant la force électrostatique.",
      "conceptExplanation": "Dans l’exercice 4, une sphère métallique électrisée de masse 0,1 g, suspendue à un fil de soie entre deux plaques distantes de 5 cm sous 100 V, voit son fil s’incliner de 30° : l’équilibre donne la force électrostatique à partir du poids et de l’angle, le champ à partir de la tension et de la distance, puis la charge à partir de la force et du champ.\nDans l’exercice 5, un pendule portant une boule de masse 5 g et de charge $-5$ µC est placé dans un champ uniforme horizontal de $2 \\times 10^{3}$ V/m : la force vaut 0,01 N et l’angle d’équilibre vaut 11,31°.\nEnfin, les exercices sur l’oscillographe comparent, pour un électron dans un champ de 2000 V/m, la force électrostatique et le poids : le poids est négligeable devant la force électrostatique.",
      "keyRule": "Pendule en équilibre dans un champ : $F = m g \\tan\\alpha$, puis $E = \\frac{U}{d}$ et la charge par le quotient de F par E.",
      "formulas": [
        {
          "name": "Force à l’équilibre du pendule",
          "formula": "F = m g \\tan\\alpha",
          "note": "Obtenue par la condition d’équilibre du pendule électrostatique."
        },
        {
          "name": "Charge de la sphère (exercice 4)",
          "formula": "|q| = \\frac{F}{E}",
          "note": "Le signe se déduit de la plaque vers laquelle la sphère est attirée."
        }
      ],
      "workedExample": {
        "title": "La sphère entre les plaques (exercice 4)",
        "statement": "Une sphère métallique électrisée de masse m = 0,1 g est suspendue à un fil de soie entre deux plaques parallèles distantes de 5 cm, soumises à une différence de potentiel de 100 V ; le fil s’incline de 30° par rapport à la verticale (g = 10 N/kg). Détermine la force électrostatique, le champ entre les plaques et la charge de la sphère.",
        "methodSteps": [
          "L’espace champ électrostatique est la région de l’espace où tout corps chargé est soumis à une force électrostatique.",
          "À l’équilibre, la force vaut $F = m g \\tan 30° = 5{,}77 \\times 10^{-4}$ N.",
          "Champ entre les plaques : $E = \\frac{U}{d} = 2 000$ V/m.",
          "Charge : le quotient de F par E donne une valeur absolue de $2{,}88 \\times 10^{-7}$ C ; la sphère étant attirée par la plaque positive, sa charge est négative."
        ],
        "conclusion": "La charge de la sphère vaut $-2{,}88 \\times 10^{-7}$ C : c’est la conclusion du corrigé de l’exercice 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’espace champ électrostatique",
          "stepTheme": "L’espace champ électrostatique",
          "stepBadge": "L’espace champ électrostatique",
          "paragraphText": "• Espace champ électrostatique : région de l’espace où tout corps chargé est soumis à une force électrostatique.\nC’est la définition demandée au début de l’exercice 4 et reprise dans la situation d’évaluation.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p06_q1",
            "type": "mcq",
            "prompt": "L’espace champ électrostatique est la région de l’espace où :",
            "options": [
              "Tout corps chargé est soumis à une force électrostatique",
              "Aucune force ne s’exerce",
              "Seuls les corps neutres peuvent entrer",
              "Le champ est toujours nul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition donnée dans le corrigé de l’exercice 4."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La force sur la sphère : $5{,}77 \\times 10^{-4}$ N",
          "stepTheme": "La force sur la sphère : $5{,}77 \\times 10^{-4}$ N",
          "stepBadge": "La force sur la sphère : $5{,}77 \\times 10^{-4}$ N",
          "paragraphText": "La sphère de l’exercice 4 a une masse de 0,1 g et son fil s’incline de 30° à l’équilibre.\nLe corrigé obtient la force électrostatique à partir du poids et de la tangente de l’angle : $5{,}77 \\times 10^{-4}$ N.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p06_q2",
            "type": "mcq",
            "prompt": "La force électrostatique exercée sur la sphère de l’exercice 4 vaut :",
            "options": [
              "$5{,}77 \\times 10^{-3}$ N",
              "$5{,}77 \\times 10^{-4}$ N",
              "$1 \\times 10^{-3}$ N",
              "$2{,}88 \\times 10^{-7}$ N"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$F = m g \\tan 30°$ avec m = $0{,}1$ g converti en kilogrammes donne $5{,}77 \\times 10^{-4}$ N ; la dernière valeur est celle de la charge."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une charge négative de $-2{,}88 \\times 10^{-7}$ C",
          "stepTheme": "Une charge négative de $-2{,}88 \\times 10^{-7}$ C",
          "stepBadge": "Une charge négative de $-2{,}88 \\times 10^{-7}$ C",
          "paragraphText": "Le corrigé calcule d’abord la valeur absolue de la charge de la sphère à partir de la force et du champ de 2 000 V/m.\nIl déduit ensuite son signe : la sphère est attirée par la plaque chargée positivement, donc sa charge est négative.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p06_q3",
            "type": "mcq",
            "prompt": "La charge électrique de la sphère de l’exercice 4 vaut :",
            "options": [
              "$2{,}88 \\times 10^{-7}$ C",
              "$-2{,}88 \\times 10^{-4}$ C",
              "$-2{,}88 \\times 10^{-7}$ C",
              "$5{,}77 \\times 10^{-7}$ C"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La valeur absolue est le quotient de la force par le champ, et le signe est négatif car la sphère est attirée par la plaque positive."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le pendule de l’exercice 5 : un angle de 11,31°",
          "stepTheme": "Le pendule de l’exercice 5 : un angle de 11,31°",
          "stepBadge": "Le pendule de l’exercice 5 : un angle de 11,31°",
          "paragraphText": "L’exercice 5 place une boule de masse 5 g et de charge $-5$ µC dans un champ uniforme horizontal de $2 \\times 10^{3}$ V/m.\nLa force subie vaut 0,01 N, et la résolution obtient un angle d’écart du fil de 11,31° par rapport à la verticale.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p06_q4",
            "type": "mcq",
            "prompt": "L’angle que fait le fil du pendule de l’exercice 5 avec la verticale vaut :",
            "options": [
              "30°",
              "45°",
              "5,7°",
              "11,31°"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La tangente de l’angle est le quotient de la force (0,01 N) par le poids (0,05 N), soit 0,2 : l’angle vaut 11,31°."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Doubler le champ double la force",
          "stepTheme": "Doubler le champ double la force",
          "stepBadge": "Doubler le champ double la force",
          "paragraphText": "Dans la situation d’évaluation, la boule chargée positivement est en équilibre sous un champ de $10^{4}$ V/m, avec un écart de 30°.\nSi la valeur du champ est doublée, la force double aussi et la nouvelle tangente de l’angle double : la résolution obtient un angle de 49,10° et une tension de 0,038 N.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p06_q5",
            "type": "mcq",
            "prompt": "Si la valeur du champ de la situation d’évaluation est doublée, le fil du pendule s’écarte d’un angle de :",
            "options": [
              "49,10°",
              "30°",
              "60°",
              "15°"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La force double, donc la tangente de l’angle double aussi : la résolution obtient 49,10°."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : négliger le poids de l’électron sans le vérifier",
          "stepTheme": "Piège : négliger le poids de l’électron sans le vérifier",
          "stepBadge": "Piège : négliger le poids de l’électron sans le vérifier",
          "paragraphText": "Les exercices sur l’oscillographe ne négligent pas le poids de l’électron par habitude : ils le calculent et le comparent à la force électrostatique.\nDans un champ de 2 000 V/m, le rapport des deux forces montre que le poids est négligeable devant la force électrostatique : c’est une conclusion chiffrée, pas une affirmation gratuite.",
          "exercise": {
            "id": "premiere_c_physique_l10_champ_electrostatique_p06_q6",
            "type": "mcq",
            "prompt": "Dans les exercices sur l’oscillographe, on conclut que le poids de l’électron est :",
            "options": [
              "Égal à la force électrostatique",
              "Négligeable devant la force électrostatique",
              "Supérieur à la force électrostatique",
              "Toujours nul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Après comparaison chiffrée des deux forces, les corrigés concluent que le poids de l’électron est négligeable devant la force électrostatique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p06_q1",
          "type": "mcq",
          "prompt": "L’espace champ électrostatique est la région de l’espace où :",
          "options": [
            "Tout corps chargé est soumis à une force électrostatique",
            "Aucune force ne s’exerce",
            "Seuls les corps neutres peuvent entrer",
            "Le champ est toujours nul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition donnée dans le corrigé de l’exercice 4."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p06_q2",
          "type": "mcq",
          "prompt": "La force électrostatique exercée sur la sphère de l’exercice 4 vaut :",
          "options": [
            "$5{,}77 \\times 10^{-3}$ N",
            "$5{,}77 \\times 10^{-4}$ N",
            "$1 \\times 10^{-3}$ N",
            "$2{,}88 \\times 10^{-7}$ N"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$F = m g \\tan 30°$ avec m = $0{,}1$ g converti en kilogrammes donne $5{,}77 \\times 10^{-4}$ N ; la dernière valeur est celle de la charge."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p06_q3",
          "type": "mcq",
          "prompt": "La charge électrique de la sphère de l’exercice 4 vaut :",
          "options": [
            "$2{,}88 \\times 10^{-7}$ C",
            "$-2{,}88 \\times 10^{-4}$ C",
            "$-2{,}88 \\times 10^{-7}$ C",
            "$5{,}77 \\times 10^{-7}$ C"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La valeur absolue est le quotient de la force par le champ, et le signe est négatif car la sphère est attirée par la plaque positive."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p06_q4",
          "type": "mcq",
          "prompt": "L’angle que fait le fil du pendule de l’exercice 5 avec la verticale vaut :",
          "options": [
            "30°",
            "45°",
            "5,7°",
            "11,31°"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La tangente de l’angle est le quotient de la force (0,01 N) par le poids (0,05 N), soit 0,2 : l’angle vaut 11,31°."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p06_q5",
          "type": "mcq",
          "prompt": "Si la valeur du champ de la situation d’évaluation est doublée, le fil du pendule s’écarte d’un angle de :",
          "options": [
            "49,10°",
            "30°",
            "60°",
            "15°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La force double, donc la tangente de l’angle double aussi : la résolution obtient 49,10°."
        },
        {
          "id": "premiere_c_physique_l10_champ_electrostatique_p06_q6",
          "type": "mcq",
          "prompt": "Dans les exercices sur l’oscillographe, on conclut que le poids de l’électron est :",
          "options": [
            "Égal à la force électrostatique",
            "Négligeable devant la force électrostatique",
            "Supérieur à la force électrostatique",
            "Toujours nul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Après comparaison chiffrée des deux forces, les corrigés concluent que le poids de l’électron est négligeable devant la force électrostatique."
        }
      ]
    }
  ]
};
