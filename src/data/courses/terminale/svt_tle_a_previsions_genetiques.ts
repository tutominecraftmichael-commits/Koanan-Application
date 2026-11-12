import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT TA_L6_Les prévisions génétiques.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const SVT_TLE_A_L06_PREVISIONS_GENETIQUES: CurriculumChapter = {
  "id": "terminale_a_svt_l06_previsions_genetiques",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 6,
  "title": "Leçon 6 : Les prévisions génétiques",
  "summary": "Drépanocytose (électrophorèse, allèles codominants, risque de 25 %), hémophilie (allèle récessif lié au chromosome X, conductrices), consultation génétique, examens prénuptiaux et prénataux.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT TA_L6_Les prévisions génétiques.pdf",
  "points": [
    {
      "id": "terminale_a_svt_l06_previsions_genetiques_p01",
      "order": 1,
      "title": "La drépanocytose et l'électrophorèse",
      "summary": "Hémoglobine A et S : un gène autosomal à allèles codominants.",
      "conceptExplanation": "Situation : un élève a deux frères drépanocytaires, alors que ses parents semblent en bonne santé ; ses parents attendent un quatrième enfant.\n\nLa drépanocytose (anémie falciforme) est une maladie héréditaire due à une hémoglobine anormale, l'hémoglobine S (HbS), dans les globules rouges ; l'hémoglobine normale est l'hémoglobine A (HbA). Les globules rouges prennent une forme de faucille.\n\nL'électrophorèse fait migrer des substances chargées électriquement dans un champ électrique. L'hémoglobine A, plus électronégative que l'hémoglobine S, migre plus vite vers le pôle + : on sépare ainsi HbA et HbS.\n\nDocument 1 (électrophorèse) :\n- le père et la mère : HbA et HbS ;\n- le premier enfant : HbA seulement ;\n- le fœtus (10 semaines) : HbS seulement.\n\nInterprétation :\n- l'homme comme la femme peuvent porter HbS : le gène est porté par un AUTOSOME (le chromosome 11) ;\n- chez les parents, les deux hémoglobines sont présentes en même temps : les deux allèles s'expriment ensemble, ils sont CODOMINANTS (au niveau des protéines).\n- Symboles : allèle normal A (HbA), allèle malade S (HbS).\n- Génotypes : chaque parent A//S ; premier enfant A//A ; fœtus S//S (drépanocytaire).\n\nPrécision importante : les personnes A//S fabriquent les deux hémoglobines mais sont en général en bonne santé : ce sont des PORTEURS SAINS (on parle de « trait drépanocytaire »). La maladie grave touche les personnes S//S. C'est pourquoi des parents apparemment sains peuvent avoir des enfants drépanocytaires.",
      "keyRule": "Drépanocytose : gène autosomal (chromosome 11), allèles A et S codominants. A//S = porteur sain ; S//S = drépanocytaire.",
      "formulas": [],
      "workedExample": {
        "title": "Lire une électrophorèse",
        "statement": "À l'électrophorèse, le père et la mère ont deux bandes (HbA et HbS), le premier enfant une bande HbA, le fœtus une bande HbS. Donne les génotypes.",
        "methodSteps": [
          "Deux hémoglobines = deux allèles différents : A//S.",
          "HbA seule : A//A ; HbS seule : S//S."
        ],
        "conclusion": "Parents A//S (porteurs sains), premier enfant A//A, fœtus S//S (drépanocytaire)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La drépanocytose",
          "stepTheme": "La drépanocytose",
          "stepBadge": "La drépanocytose",
          "paragraphText": "La drépanocytose est une maladie héréditaire due à une hémoglobine anormale, l'hémoglobine S, dans les globules rouges.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p01_q1",
            "type": "mcq",
            "prompt": "À quoi est due la drépanocytose (anémie falciforme) ?",
            "options": [
              "À un microbe transmis par les moustiques",
              "À la présence d'une hémoglobine anormale, l'hémoglobine S, dans les globules rouges",
              "À un manque de vitamines",
              "À une blessure"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est une maladie génétique, pas une maladie contagieuse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'électrophorèse",
          "stepTheme": "L'électrophorèse",
          "stepBadge": "L'électrophorèse",
          "paragraphText": "L'électrophorèse fait migrer des substances chargées dans un champ électrique ; l'hémoglobine A, plus électronégative, migre plus vite que l'hémoglobine S.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p01_q2",
            "type": "mcq",
            "prompt": "Quelle technique permet de séparer l'hémoglobine A et l'hémoglobine S dans le sang d'une personne, grâce à un champ électrique ?",
            "options": [
              "L'échographie",
              "L'électrophorèse",
              "La radiographie",
              "L'amniocentèse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "HbA, plus électronégative, migre plus vite vers le pôle +."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Lire les résultats",
          "stepTheme": "Lire les résultats",
          "stepBadge": "Lire les résultats",
          "paragraphText": "À l'électrophorèse : père et mère HbA et HbS ; premier enfant HbA seule ; fœtus HbS seule.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p01_q3",
            "type": "mcq",
            "prompt": "À l'électrophorèse de l'hémoglobine, le père et la mère présentent chacun deux bandes, HbA et HbS. Quel est leur génotype ?",
            "options": [
              "A//A",
              "S//S",
              "A//S",
              "A//O"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Deux hémoglobines différentes = deux allèles différents."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le fœtus",
          "stepTheme": "Le fœtus",
          "stepBadge": "Le fœtus",
          "paragraphText": "Le fœtus ne possède que l'hémoglobine S : son génotype est S//S, il est drépanocytaire.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p01_q4",
            "type": "mcq",
            "prompt": "À l'électrophorèse, le fœtus de 10 semaines ne présente qu'une bande d'hémoglobine S. Quel est son génotype et son état ?",
            "options": [
              "A//A, sain",
              "A//S, porteur sain",
              "S//S, drépanocytaire",
              "On ne peut rien dire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il a reçu un allèle S de chacun de ses parents."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Un gène autosomal",
          "stepTheme": "Un gène autosomal",
          "stepBadge": "Un gène autosomal",
          "paragraphText": "Le père et la mère portent tous deux HbS : le gène de la drépanocytose est porté par un autosome (le chromosome 11).",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p01_q5",
            "type": "mcq",
            "prompt": "Le père comme la mère portent l'allèle de l'hémoglobine S, et la drépanocytose touche aussi bien les filles que les garçons. Où se trouve le gène de cette maladie ?",
            "options": [
              "Sur le chromosome Y",
              "Sur un autosome",
              "Sur le chromosome X seulement",
              "Dans les mitochondries"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une transmission identique dans les deux sexes indique un autosome."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Codominance",
          "stepTheme": "Codominance",
          "stepBadge": "Codominance",
          "paragraphText": "Chez les parents A//S, les deux hémoglobines existent en même temps : les allèles A et S s'expriment ensemble, ils sont codominants.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p01_q6",
            "type": "mcq",
            "prompt": "Chez les parents A//S, on trouve à la fois de l'hémoglobine A et de l'hémoglobine S. Que peut-on dire des allèles A et S ?",
            "options": [
              "A domine S",
              "S domine A",
              "Ils sont codominants : ils s'expriment en même temps",
              "Ils ne s'expriment pas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux protéines sont fabriquées."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Porteurs sains",
          "stepTheme": "Porteurs sains",
          "stepBadge": "Porteurs sains",
          "paragraphText": "Les personnes A//S sont en général en bonne santé : ce sont des porteurs sains. Des parents apparemment sains peuvent donc avoir des enfants S//S malades.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p01_q7",
            "type": "mcq",
            "prompt": "Des parents en bonne santé ont deux enfants drépanocytaires. Comment est-ce possible ?",
            "options": [
              "Les enfants ont attrapé la maladie à l'école",
              "Les deux parents sont porteurs sains (A//S) et ont chacun transmis l'allèle S",
              "C'est impossible",
              "Seule la mère a transmis la maladie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un enfant S//S reçoit un allèle S de chaque parent."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p01_q1",
          "type": "mcq",
          "prompt": "À quoi est due la drépanocytose (anémie falciforme) ?",
          "options": [
            "À un microbe transmis par les moustiques",
            "À la présence d'une hémoglobine anormale, l'hémoglobine S, dans les globules rouges",
            "À un manque de vitamines",
            "À une blessure"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est une maladie génétique, pas une maladie contagieuse."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p01_q2",
          "type": "mcq",
          "prompt": "Quelle technique permet de séparer l'hémoglobine A et l'hémoglobine S dans le sang d'une personne, grâce à un champ électrique ?",
          "options": [
            "L'échographie",
            "L'électrophorèse",
            "La radiographie",
            "L'amniocentèse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "HbA, plus électronégative, migre plus vite vers le pôle +."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p01_q3",
          "type": "mcq",
          "prompt": "À l'électrophorèse de l'hémoglobine, le père et la mère présentent chacun deux bandes, HbA et HbS. Quel est leur génotype ?",
          "options": [
            "A//A",
            "S//S",
            "A//S",
            "A//O"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Deux hémoglobines différentes = deux allèles différents."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p01_q4",
          "type": "mcq",
          "prompt": "À l'électrophorèse, le fœtus de 10 semaines ne présente qu'une bande d'hémoglobine S. Quel est son génotype et son état ?",
          "options": [
            "A//A, sain",
            "A//S, porteur sain",
            "S//S, drépanocytaire",
            "On ne peut rien dire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il a reçu un allèle S de chacun de ses parents."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p01_q5",
          "type": "mcq",
          "prompt": "Le père comme la mère portent l'allèle de l'hémoglobine S, et la drépanocytose touche aussi bien les filles que les garçons. Où se trouve le gène de cette maladie ?",
          "options": [
            "Sur le chromosome Y",
            "Sur un autosome",
            "Sur le chromosome X seulement",
            "Dans les mitochondries"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une transmission identique dans les deux sexes indique un autosome."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p01_q6",
          "type": "mcq",
          "prompt": "Chez les parents A//S, on trouve à la fois de l'hémoglobine A et de l'hémoglobine S. Que peut-on dire des allèles A et S ?",
          "options": [
            "A domine S",
            "S domine A",
            "Ils sont codominants : ils s'expriment en même temps",
            "Ils ne s'expriment pas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux protéines sont fabriquées."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p01_q7",
          "type": "mcq",
          "prompt": "Des parents en bonne santé ont deux enfants drépanocytaires. Comment est-ce possible ?",
          "options": [
            "Les enfants ont attrapé la maladie à l'école",
            "Les deux parents sont porteurs sains (A//S) et ont chacun transmis l'allèle S",
            "C'est impossible",
            "Seule la mère a transmis la maladie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un enfant S//S reçoit un allèle S de chaque parent."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l06_previsions_genetiques_p02",
      "order": 2,
      "title": "Calculer le risque pour la drépanocytose",
      "summary": "A//S × A//S : un risque de 25 % à chaque grossesse.",
      "conceptExplanation": "Couple C1 × C2, tous deux A//S (porteurs sains).\n- Gamètes de chaque parent : 50 % A, 50 % S.\n- Échiquier de croisement :\n  A × A → A//A [A] (1/4) ;\n  A × S → A//S [AS] (1/4) ;\n  S × A → A//S [AS] (1/4) ;\n  S × S → S//S [S] (1/4).\n- Bilan : 1/4 [A] (sains, non porteurs), 1/2 [AS] (porteurs sains), 1/4 [S] (drépanocytaires).\n\nConclusion : ce couple a 25 % de risque d'avoir un enfant drépanocytaire, à CHAQUE grossesse.\n\nAttention : le hasard n'a pas de mémoire. Même si un couple A//S × A//S a déjà eu deux enfants malades, le risque pour le quatrième reste 1/4 (25 %) ; il n'est ni plus grand ni plus petit.\n\nAutre technique (exercice) : on peut aussi séparer les fragments d'ADN des allèles : l'allèle S donne un fragment de 1,4 kb (kilobase), l'allèle A un fragment de 1,2 kb. C1 et C2 ont les deux fragments (A//S) ; le fœtus F n'a que le fragment de 1,4 kb (S//S).\n\nExercice d'arbre : Sylvie et Charles, sains, ont Franck (malade), Marthe (saine), Romaric (sain) et Odette (malade). Sylvie et Charles sont A//S ; Franck et Odette sont S//S ; Marthe et Romaric sont A//A ou A//S (on ne peut pas trancher sans analyse).",
      "keyRule": "A//S × A//S → 1/4 A//A, 1/2 A//S, 1/4 S//S. Risque d'enfant drépanocytaire : 25 % à chaque grossesse, quels que soient les enfants précédents.",
      "formulas": [],
      "workedExample": {
        "title": "Le quatrième enfant",
        "statement": "Des parents A//S ont déjà deux garçons drépanocytaires. Quel est le risque que le quatrième enfant soit drépanocytaire ?",
        "methodSteps": [
          "Chaque parent transmet S avec la probabilité 1/2.",
          "Risque S//S : 1/2 × 1/2 = 1/4, à chaque grossesse, indépendamment des précédentes."
        ],
        "conclusion": "Le risque est de 25 %."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Les gamètes",
          "stepTheme": "Les gamètes",
          "stepBadge": "Les gamètes",
          "paragraphText": "Un parent A//S produit 50 % de gamètes portant A et 50 % portant S.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p02_q1",
            "type": "mcq",
            "prompt": "Un parent porteur sain de la drépanocytose a le génotype A//S. Quels gamètes produit-il, et en quelles proportions ?",
            "options": [
              "100 % A",
              "100 % S",
              "50 % A et 50 % S",
              "25 % A et 75 % S"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La méiose sépare les deux allèles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "L'échiquier",
          "stepTheme": "L'échiquier",
          "stepBadge": "L'échiquier",
          "paragraphText": "A//S × A//S donne 1/4 A//A, 1/2 A//S et 1/4 S//S.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p02_q2",
            "type": "mcq",
            "prompt": "Deux parents de génotype A//S ont un enfant. D'après l'échiquier de croisement, quelle est la probabilité que cet enfant soit drépanocytaire (S//S) ?",
            "options": [
              "0 %",
              "25 %",
              "50 %",
              "100 %"
            ],
            "correctAnswerIndex": 1,
            "explanation": "1/2 × 1/2 = 1/4."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Les porteurs sains",
          "stepTheme": "Les porteurs sains",
          "stepBadge": "Les porteurs sains",
          "paragraphText": "Dans la descendance de A//S × A//S, la moitié des enfants (1/2) sont porteurs sains A//S.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p02_q3",
            "type": "mcq",
            "prompt": "Deux parents A//S ont un enfant. Quelle est la probabilité qu'il soit porteur sain (A//S), comme ses parents ?",
            "options": [
              "1/4",
              "1/2",
              "3/4",
              "1"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux cases sur quatre de l'échiquier : A//S et S//A."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le hasard n'a pas de mémoire",
          "stepTheme": "Le hasard n'a pas de mémoire",
          "stepBadge": "Le hasard n'a pas de mémoire",
          "paragraphText": "Le risque de 25 % s'applique à chaque grossesse, quels que soient les enfants déjà nés.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p02_q4",
            "type": "mcq",
            "prompt": "Deux parents A//S ont déjà deux garçons drépanocytaires et attendent un quatrième enfant. Quel est le risque que ce bébé soit drépanocytaire ?",
            "options": [
              "0 %, car ils ont déjà eu leurs deux malades",
              "25 %",
              "50 %",
              "100 %"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque fécondation est indépendante des précédentes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'analyse de l'ADN",
          "stepTheme": "L'analyse de l'ADN",
          "stepBadge": "L'analyse de l'ADN",
          "paragraphText": "L'allèle S donne un fragment d'ADN de 1,4 kb, l'allèle A un fragment de 1,2 kb. Un fœtus qui n'a que le fragment de 1,4 kb est S//S.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p02_q5",
            "type": "mcq",
            "prompt": "Dans une analyse d'ADN, l'allèle S donne un fragment de 1,4 kb et l'allèle A un fragment de 1,2 kb. Les parents C1 et C2 ont les deux fragments ; le fœtus F n'a que celui de 1,4 kb. Quel est le génotype du fœtus ?",
            "options": [
              "A//A",
              "A//S",
              "S//S",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un seul type de fragment, celui de S : il a deux allèles S."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un arbre familial",
          "stepTheme": "Un arbre familial",
          "stepBadge": "Un arbre familial",
          "paragraphText": "Sylvie et Charles, sains, ont deux enfants malades (Franck et Odette) : ils sont tous deux A//S.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p02_q6",
            "type": "mcq",
            "prompt": "Sylvie et Charles, en bonne santé, ont quatre enfants : Franck et Odette sont drépanocytaires, Marthe et Romaric sont sains. Quel est le génotype de Sylvie et de Charles ?",
            "options": [
              "A//A tous les deux",
              "A//S tous les deux",
              "S//S tous les deux",
              "Sylvie A//A et Charles S//S"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque enfant malade S//S a reçu un S de chacun de ses parents sains."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Sain mais peut-être porteur",
          "stepTheme": "Sain mais peut-être porteur",
          "stepBadge": "Sain mais peut-être porteur",
          "paragraphText": "Marthe et Romaric, sains, peuvent être A//A ou A//S : seule une analyse (électrophorèse) permet de le savoir.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p02_q7",
            "type": "mcq",
            "prompt": "Marthe, en bonne santé, est la fille de deux parents A//S. Peut-on affirmer, sans analyse, qu'elle ne porte pas l'allèle S ?",
            "options": [
              "Oui, puisqu'elle est en bonne santé",
              "Non : elle peut être A//A ou porteuse saine A//S ; il faut une électrophorèse",
              "Oui, les filles ne portent jamais S",
              "Non, elle est forcément S//S"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Parmi les enfants sains de ce couple, 2 sur 3 en moyenne sont porteurs."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p02_q1",
          "type": "mcq",
          "prompt": "Un parent porteur sain de la drépanocytose a le génotype A//S. Quels gamètes produit-il, et en quelles proportions ?",
          "options": [
            "100 % A",
            "100 % S",
            "50 % A et 50 % S",
            "25 % A et 75 % S"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La méiose sépare les deux allèles."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p02_q2",
          "type": "mcq",
          "prompt": "Deux parents de génotype A//S ont un enfant. D'après l'échiquier de croisement, quelle est la probabilité que cet enfant soit drépanocytaire (S//S) ?",
          "options": [
            "0 %",
            "25 %",
            "50 %",
            "100 %"
          ],
          "correctAnswerIndex": 1,
          "explanation": "1/2 × 1/2 = 1/4."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p02_q3",
          "type": "mcq",
          "prompt": "Deux parents A//S ont un enfant. Quelle est la probabilité qu'il soit porteur sain (A//S), comme ses parents ?",
          "options": [
            "1/4",
            "1/2",
            "3/4",
            "1"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux cases sur quatre de l'échiquier : A//S et S//A."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p02_q4",
          "type": "mcq",
          "prompt": "Deux parents A//S ont déjà deux garçons drépanocytaires et attendent un quatrième enfant. Quel est le risque que ce bébé soit drépanocytaire ?",
          "options": [
            "0 %, car ils ont déjà eu leurs deux malades",
            "25 %",
            "50 %",
            "100 %"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque fécondation est indépendante des précédentes."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p02_q5",
          "type": "mcq",
          "prompt": "Dans une analyse d'ADN, l'allèle S donne un fragment de 1,4 kb et l'allèle A un fragment de 1,2 kb. Les parents C1 et C2 ont les deux fragments ; le fœtus F n'a que celui de 1,4 kb. Quel est le génotype du fœtus ?",
          "options": [
            "A//A",
            "A//S",
            "S//S",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un seul type de fragment, celui de S : il a deux allèles S."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p02_q6",
          "type": "mcq",
          "prompt": "Sylvie et Charles, en bonne santé, ont quatre enfants : Franck et Odette sont drépanocytaires, Marthe et Romaric sont sains. Quel est le génotype de Sylvie et de Charles ?",
          "options": [
            "A//A tous les deux",
            "A//S tous les deux",
            "S//S tous les deux",
            "Sylvie A//A et Charles S//S"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque enfant malade S//S a reçu un S de chacun de ses parents sains."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p02_q7",
          "type": "mcq",
          "prompt": "Marthe, en bonne santé, est la fille de deux parents A//S. Peut-on affirmer, sans analyse, qu'elle ne porte pas l'allèle S ?",
          "options": [
            "Oui, puisqu'elle est en bonne santé",
            "Non : elle peut être A//A ou porteuse saine A//S ; il faut une électrophorèse",
            "Oui, les filles ne portent jamais S",
            "Non, elle est forcément S//S"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Parmi les enfants sains de ce couple, 2 sur 3 en moyenne sont porteurs."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l06_previsions_genetiques_p03",
      "order": 3,
      "title": "L'hémophilie : une maladie liée au chromosome X",
      "summary": "Un allèle récessif porté par le X ; surtout des garçons malades.",
      "conceptExplanation": "L'hémophilie est une maladie héréditaire où le sang coagule très mal (sang « incoagulable ») : la moindre blessure saigne longtemps.\n\nDocument 2 (arbre d'une famille) :\n- génération I : I1 (homme sain) et I2 (femme saine) ;\n- génération II : leur fille 4 (saine), mariée à 3 (homme sain) ; leur fils 6 (malade), marié à 7 (femme saine) ;\n- génération III : enfants de 3 et 4 : 8 (garçon malade), 9 (fille saine) ; enfants de 6 et 7 : 10 et 11 (garçons malades), 12 (garçon sain), 13 (fille saine).\n\nAnalyse : la maladie n'est pas présente à toutes les générations ; des parents sains (I1, I2) ont un enfant malade ; seuls des hommes sont malades.\n\nInterprétation :\n- des parents sains ont un enfant malade : ils portaient l'allèle de la maladie sous forme masquée : l'allèle de l'hémophilie est RÉCESSIF, l'allèle normal est dominant. Symboles : H (normal), h (hémophilie).\n- la maladie touche seulement les hommes : le gène est porté par le chromosome sexuel X (et n'a pas d'équivalent sur le Y).\n\nGénotypes :\n- homme sain : $X^H$ Y ; homme hémophile : $X^h$ Y (un seul allèle h suffit, car il n'a qu'un X) ;\n- femme saine : $X^H$ $X^H$ ; femme conductrice (porteuse saine) : $X^H$ $X^h$ ; femme hémophile : $X^h$ $X^h$ (très rare).\n- I2 est conductrice ($X^H$ $X^h$), puisqu'elle a un fils malade avec un mari sain.\n- La femme 7 est aussi conductrice : ses fils 10 et 11 sont malades, et un fils reçoit son X de sa mère (le père 6 lui donne un Y).",
      "keyRule": "Hémophilie : allèle récessif h porté par le X. Homme $X^h$ Y malade ; femme $X^H$ $X^h$ conductrice (saine). Un fils reçoit son X de sa mère.",
      "formulas": [],
      "workedExample": {
        "title": "Qui a transmis ?",
        "statement": "Un homme sain (I1) et une femme saine (I2) ont un fils hémophile (6). Qui lui a transmis l'allèle h ?",
        "methodSteps": [
          "Un fils reçoit le Y de son père et le X de sa mère.",
          "Son X porte h : il vient de la mère, qui est saine, donc conductrice $X^H$ $X^h$."
        ],
        "conclusion": "C'est la mère, conductrice, qui a transmis l'allèle h."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'hémophilie",
          "stepTheme": "L'hémophilie",
          "stepBadge": "L'hémophilie",
          "paragraphText": "L'hémophilie est une anomalie héréditaire caractérisée par un sang qui coagule très mal.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p03_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qui caractérise l'hémophilie ?",
            "options": [
              "Un sang qui coagule très mal (sang incoagulable)",
              "Des globules rouges en forme de faucille",
              "Une perte de mémoire",
              "Une absence de groupe sanguin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La forme en faucille, c'est la drépanocytose."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un allèle récessif",
          "stepTheme": "Un allèle récessif",
          "stepBadge": "Un allèle récessif",
          "paragraphText": "Des parents sains (I1, I2) ont un fils hémophile : l'allèle de la maladie était masqué, il est récessif.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p03_q2",
            "type": "mcq",
            "prompt": "Dans l'arbre d'une famille, un homme sain et une femme saine ont un fils hémophile. Que peut-on en déduire sur l'allèle de l'hémophilie ?",
            "options": [
              "Il est dominant",
              "Il est récessif : il était présent mais masqué",
              "Il est codominant",
              "Il n'est pas héréditaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un allèle masqué chez un parent sain est récessif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Porté par le X",
          "stepTheme": "Porté par le X",
          "stepBadge": "Porté par le X",
          "paragraphText": "Dans cette famille, seuls des hommes sont malades : le gène est porté par le chromosome sexuel X.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p03_q3",
            "type": "mcq",
            "prompt": "Dans l'arbre de la famille étudiée, tous les hémophiles sont des hommes (6, 8, 10, 11). Quel chromosome porte probablement le gène de l'hémophilie ?",
            "options": [
              "Un autosome",
              "Le chromosome X",
              "Le chromosome Y",
              "Le chromosome 11"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un seul allèle h suffit chez l'homme, qui n'a qu'un X."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le génotype d'un hémophile",
          "stepTheme": "Le génotype d'un hémophile",
          "stepBadge": "Le génotype d'un hémophile",
          "paragraphText": "Un homme hémophile a le génotype $X^h$ Y : comme il n'a qu'un chromosome X, un seul allèle h suffit.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p03_q4",
            "type": "mcq",
            "prompt": "Avec H pour l'allèle normal et h pour l'allèle de l'hémophilie (porté par le X), quel est le génotype d'un homme hémophile ?",
            "options": [
              "$X^H$ Y (allèle normal sur le X)",
              "$X^h$ Y (allèle de la maladie sur le X)",
              "$X^H$ $X^h$ (deux chromosomes X différents)",
              "$X^h$ $X^h$ (deux X portant la maladie)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le Y ne porte pas ce gène : rien ne masque l'allèle h."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La conductrice",
          "stepTheme": "La conductrice",
          "stepBadge": "La conductrice",
          "paragraphText": "Une femme $X^H$ $X^h$ est saine mais porte l'allèle h : on l'appelle conductrice.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p03_q5",
            "type": "mcq",
            "prompt": "Une femme saine a le génotype $X^H$ $X^h$ pour le gène de l'hémophilie. Comment l'appelle-t-on ?",
            "options": [
              "Une hémophile",
              "Une conductrice (porteuse saine)",
              "Une femme homozygote",
              "Une donneuse universelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle peut transmettre l'allèle h à ses enfants."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Trouver la conductrice",
          "stepTheme": "Trouver la conductrice",
          "stepBadge": "Trouver la conductrice",
          "paragraphText": "Un fils reçoit son X de sa mère : si un fils est hémophile et que sa mère est saine, la mère est conductrice.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p03_q6",
            "type": "mcq",
            "prompt": "L'homme sain I1 et la femme saine I2 ont un fils hémophile. Qui lui a transmis l'allèle h, et pourquoi ?",
            "options": [
              "Le père I1, par son chromosome Y",
              "La mère I2, conductrice, car un fils reçoit son chromosome X de sa mère",
              "Le père I1, par son chromosome X",
              "Personne : c'est une maladie contagieuse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le père donne un Y à ses fils ; le X vient toujours de la mère."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Un père hémophile",
          "stepTheme": "Un père hémophile",
          "stepBadge": "Un père hémophile",
          "paragraphText": "Un père hémophile ($X^h$ Y) ne transmet pas l'hémophilie à ses fils (il leur donne son Y) ; toutes ses filles reçoivent son $X^h$ et sont au moins conductrices.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p03_q7",
            "type": "mcq",
            "prompt": "L'homme 6, hémophile ($X^h$ Y), a des fils hémophiles (10 et 11) avec sa femme 7, qui est saine. Qui a transmis l'allèle h à ces fils ?",
            "options": [
              "Leur père 6, par son chromosome Y",
              "Leur mère 7, qui est donc conductrice ($X^H$ $X^h$)",
              "Leur grand-père I1",
              "Personne"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le père donne son Y aux fils ; leur X vient de la mère 7."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p03_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qui caractérise l'hémophilie ?",
          "options": [
            "Un sang qui coagule très mal (sang incoagulable)",
            "Des globules rouges en forme de faucille",
            "Une perte de mémoire",
            "Une absence de groupe sanguin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La forme en faucille, c'est la drépanocytose."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p03_q2",
          "type": "mcq",
          "prompt": "Dans l'arbre d'une famille, un homme sain et une femme saine ont un fils hémophile. Que peut-on en déduire sur l'allèle de l'hémophilie ?",
          "options": [
            "Il est dominant",
            "Il est récessif : il était présent mais masqué",
            "Il est codominant",
            "Il n'est pas héréditaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un allèle masqué chez un parent sain est récessif."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p03_q3",
          "type": "mcq",
          "prompt": "Dans l'arbre de la famille étudiée, tous les hémophiles sont des hommes (6, 8, 10, 11). Quel chromosome porte probablement le gène de l'hémophilie ?",
          "options": [
            "Un autosome",
            "Le chromosome X",
            "Le chromosome Y",
            "Le chromosome 11"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un seul allèle h suffit chez l'homme, qui n'a qu'un X."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p03_q4",
          "type": "mcq",
          "prompt": "Avec H pour l'allèle normal et h pour l'allèle de l'hémophilie (porté par le X), quel est le génotype d'un homme hémophile ?",
          "options": [
            "$X^H$ Y (allèle normal sur le X)",
            "$X^h$ Y (allèle de la maladie sur le X)",
            "$X^H$ $X^h$ (deux chromosomes X différents)",
            "$X^h$ $X^h$ (deux X portant la maladie)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le Y ne porte pas ce gène : rien ne masque l'allèle h."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p03_q5",
          "type": "mcq",
          "prompt": "Une femme saine a le génotype $X^H$ $X^h$ pour le gène de l'hémophilie. Comment l'appelle-t-on ?",
          "options": [
            "Une hémophile",
            "Une conductrice (porteuse saine)",
            "Une femme homozygote",
            "Une donneuse universelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle peut transmettre l'allèle h à ses enfants."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p03_q6",
          "type": "mcq",
          "prompt": "L'homme sain I1 et la femme saine I2 ont un fils hémophile. Qui lui a transmis l'allèle h, et pourquoi ?",
          "options": [
            "Le père I1, par son chromosome Y",
            "La mère I2, conductrice, car un fils reçoit son chromosome X de sa mère",
            "Le père I1, par son chromosome X",
            "Personne : c'est une maladie contagieuse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le père donne un Y à ses fils ; le X vient toujours de la mère."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p03_q7",
          "type": "mcq",
          "prompt": "L'homme 6, hémophile ($X^h$ Y), a des fils hémophiles (10 et 11) avec sa femme 7, qui est saine. Qui a transmis l'allèle h à ces fils ?",
          "options": [
            "Leur père 6, par son chromosome Y",
            "Leur mère 7, qui est donc conductrice ($X^H$ $X^h$)",
            "Leur grand-père I1",
            "Personne"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le père donne son Y aux fils ; leur X vient de la mère 7."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l06_previsions_genetiques_p04",
      "order": 4,
      "title": "L'échiquier de l'hémophilie",
      "summary": "Père sain × mère conductrice : aucune fille malade, un garçon sur deux malade.",
      "conceptExplanation": "Vérification : interprétation chromosomique du couple I1 × I2.\n- I1 (homme sain) : phénotype [H], génotype $X^H$ Y. Gamètes : 50 % $X^H$, 50 % Y.\n- I2 (femme saine conductrice) : phénotype [H], génotype $X^H$ $X^h$. Gamètes : 50 % $X^H$, 50 % $X^h$.\n\nÉchiquier de croisement :\n- $X^H$ (mère) × $X^H$ (père) → $X^H$ $X^H$ : fille saine [H] (1/4) ;\n- $X^H$ (mère) × Y (père) → $X^H$ Y : garçon sain [H] (1/4) ;\n- $X^h$ (mère) × $X^H$ (père) → $X^H$ $X^h$ : fille saine conductrice [H] (1/4) ;\n- $X^h$ (mère) × Y (père) → $X^h$ Y : garçon hémophile [h] (1/4).\n\nBilan : 1/2 de filles [H] (dont la moitié conductrices), 1/4 de garçons [H], 1/4 de garçons [h].\nAucune fille n'est hémophile ; la moitié des garçons est saine, l'autre moitié hémophile. Les résultats théoriques sont conformes aux résultats observés : l'allèle de l'hémophilie est porté par le chromosome X.\n\nConclusion de la partie I :\n- le gène de la drépanocytose est porté par un autosome ; ses allèles sont codominants ;\n- le gène de l'hémophilie est porté par un chromosome sexuel (hétérochromosome X) ; son allèle est récessif.",
      "keyRule": "$X^H$ Y × $X^H$ $X^h$ → filles : toutes saines (1/2 conductrices) ; garçons : 1/2 sains, 1/2 hémophiles. Risque pour un garçon : 50 %.",
      "formulas": [],
      "workedExample": {
        "title": "Le risque pour un garçon",
        "statement": "Un homme sain et une femme conductrice attendent un garçon. Quel est le risque qu'il soit hémophile ?",
        "methodSteps": [
          "Un garçon reçoit le Y du père et un X de la mère.",
          "La mère donne $X^H$ ou $X^h$ avec la même probabilité."
        ],
        "conclusion": "Le risque est de 1/2, soit 50 %."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Les gamètes du père",
          "stepTheme": "Les gamètes du père",
          "stepBadge": "Les gamètes du père",
          "paragraphText": "Un homme sain $X^H$ Y produit 50 % de spermatozoïdes $X^H$ et 50 % de spermatozoïdes Y.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p04_q1",
            "type": "mcq",
            "prompt": "Un homme sain a le génotype $X^H$ Y pour le gène de l'hémophilie. Quels spermatozoïdes produit-il ?",
            "options": [
              "100 % $X^H$ (allèle normal)",
              "50 % $X^H$ (allèle normal) et 50 % Y",
              "50 % $X^h$ (allèle de la maladie) et 50 % Y",
              "100 % Y"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La méiose sépare le X et le Y."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les gamètes de la mère",
          "stepTheme": "Les gamètes de la mère",
          "stepBadge": "Les gamètes de la mère",
          "paragraphText": "Une femme conductrice $X^H$ $X^h$ produit 50 % d'ovules $X^H$ et 50 % d'ovules $X^h$.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p04_q2",
            "type": "mcq",
            "prompt": "Une femme conductrice a le génotype $X^H$ $X^h$. Quels ovules produit-elle ?",
            "options": [
              "Tous des ovules $X^H$ (allèle normal)",
              "50 % $X^H$ (allèle normal) et 50 % $X^h$ (allèle de la maladie)",
              "50 % $X^H$ et 50 % Y",
              "Tous des ovules $X^h$ (allèle de la maladie)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque ovule reçoit un seul de ses deux X."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Aucune fille malade",
          "stepTheme": "Aucune fille malade",
          "stepBadge": "Aucune fille malade",
          "paragraphText": "Les filles reçoivent le $X^H$ de leur père : avec un père sain, aucune fille n'est hémophile.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p04_q3",
            "type": "mcq",
            "prompt": "Un homme sain ($X^H$ Y) et une femme conductrice ($X^H$ $X^h$) ont des filles. D'après l'échiquier, combien de ces filles peuvent être hémophiles ?",
            "options": [
              "Aucune",
              "La moitié",
              "Toutes",
              "Un quart"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque fille reçoit $X^H$ de son père : l'allèle H masque h."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un garçon sur deux",
          "stepTheme": "Un garçon sur deux",
          "stepBadge": "Un garçon sur deux",
          "paragraphText": "Parmi les garçons du couple $X^H$ Y × $X^H$ $X^h$, la moitié sont sains ($X^H$ Y), l'autre moitié hémophiles ($X^h$ Y).",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p04_q4",
            "type": "mcq",
            "prompt": "Un homme sain ($X^H$ Y) et une femme conductrice ($X^H$ $X^h$) attendent un garçon. Quel est le risque que ce garçon soit hémophile ?",
            "options": [
              "0 %",
              "25 %",
              "50 %",
              "100 %"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le garçon reçoit $X^H$ ou $X^h$ de sa mère, avec la même probabilité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le bilan global",
          "stepTheme": "Le bilan global",
          "stepBadge": "Le bilan global",
          "paragraphText": "Bilan de $X^H$ Y × $X^H$ $X^h$ : 1/2 de filles saines, 1/4 de garçons sains, 1/4 de garçons hémophiles.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p04_q5",
            "type": "mcq",
            "prompt": "Avant de connaître le sexe du bébé, quel est le risque qu'un enfant du couple homme sain ($X^H$ Y) × femme conductrice ($X^H$ $X^h$) soit hémophile ?",
            "options": [
              "1/4 (25 %)",
              "1/2 (50 %)",
              "3/4 (75 %)",
              "0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une seule case sur quatre : $X^h$ Y."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les filles conductrices",
          "stepTheme": "Les filles conductrices",
          "stepBadge": "Les filles conductrices",
          "paragraphText": "La moitié des filles de ce couple sont conductrices ($X^H$ $X^h$) : saines, mais elles peuvent transmettre h.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p04_q6",
            "type": "mcq",
            "prompt": "Parmi les filles d'un homme sain ($X^H$ Y) et d'une femme conductrice ($X^H$ $X^h$), quelle proportion est conductrice ?",
            "options": [
              "Aucune",
              "La moitié",
              "Toutes",
              "Un quart"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elles reçoivent $X^H$ du père et $X^H$ ou $X^h$ de la mère."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Deux modes de transmission",
          "stepTheme": "Deux modes de transmission",
          "stepBadge": "Deux modes de transmission",
          "paragraphText": "Drépanocytose : gène autosomal, allèles codominants. Hémophilie : gène porté par le chromosome X, allèle récessif.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p04_q7",
            "type": "mcq",
            "prompt": "Comparez la drépanocytose et l'hémophilie : où est porté chaque gène ?",
            "options": [
              "Les deux sur le chromosome X",
              "Drépanocytose sur un autosome ; hémophilie sur le chromosome X",
              "Drépanocytose sur le X ; hémophilie sur un autosome",
              "Les deux sur le chromosome Y"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est pourquoi l'hémophilie touche surtout les garçons, et la drépanocytose les deux sexes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p04_q1",
          "type": "mcq",
          "prompt": "Un homme sain a le génotype $X^H$ Y pour le gène de l'hémophilie. Quels spermatozoïdes produit-il ?",
          "options": [
            "100 % $X^H$ (allèle normal)",
            "50 % $X^H$ (allèle normal) et 50 % Y",
            "50 % $X^h$ (allèle de la maladie) et 50 % Y",
            "100 % Y"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La méiose sépare le X et le Y."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p04_q2",
          "type": "mcq",
          "prompt": "Une femme conductrice a le génotype $X^H$ $X^h$. Quels ovules produit-elle ?",
          "options": [
            "Tous des ovules $X^H$ (allèle normal)",
            "50 % $X^H$ (allèle normal) et 50 % $X^h$ (allèle de la maladie)",
            "50 % $X^H$ et 50 % Y",
            "Tous des ovules $X^h$ (allèle de la maladie)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque ovule reçoit un seul de ses deux X."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p04_q3",
          "type": "mcq",
          "prompt": "Un homme sain ($X^H$ Y) et une femme conductrice ($X^H$ $X^h$) ont des filles. D'après l'échiquier, combien de ces filles peuvent être hémophiles ?",
          "options": [
            "Aucune",
            "La moitié",
            "Toutes",
            "Un quart"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque fille reçoit $X^H$ de son père : l'allèle H masque h."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p04_q4",
          "type": "mcq",
          "prompt": "Un homme sain ($X^H$ Y) et une femme conductrice ($X^H$ $X^h$) attendent un garçon. Quel est le risque que ce garçon soit hémophile ?",
          "options": [
            "0 %",
            "25 %",
            "50 %",
            "100 %"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le garçon reçoit $X^H$ ou $X^h$ de sa mère, avec la même probabilité."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p04_q5",
          "type": "mcq",
          "prompt": "Avant de connaître le sexe du bébé, quel est le risque qu'un enfant du couple homme sain ($X^H$ Y) × femme conductrice ($X^H$ $X^h$) soit hémophile ?",
          "options": [
            "1/4 (25 %)",
            "1/2 (50 %)",
            "3/4 (75 %)",
            "0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une seule case sur quatre : $X^h$ Y."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p04_q6",
          "type": "mcq",
          "prompt": "Parmi les filles d'un homme sain ($X^H$ Y) et d'une femme conductrice ($X^H$ $X^h$), quelle proportion est conductrice ?",
          "options": [
            "Aucune",
            "La moitié",
            "Toutes",
            "Un quart"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elles reçoivent $X^H$ du père et $X^H$ ou $X^h$ de la mère."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p04_q7",
          "type": "mcq",
          "prompt": "Comparez la drépanocytose et l'hémophilie : où est porté chaque gène ?",
          "options": [
            "Les deux sur le chromosome X",
            "Drépanocytose sur un autosome ; hémophilie sur le chromosome X",
            "Drépanocytose sur le X ; hémophilie sur un autosome",
            "Les deux sur le chromosome Y"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est pourquoi l'hémophilie touche surtout les garçons, et la drépanocytose les deux sexes."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l06_previsions_genetiques_p05",
      "order": 5,
      "title": "Les moyens de prévoir : conseil génétique et diagnostic prénatal",
      "summary": "Examens prénuptiaux des parents, examens prénataux du fœtus.",
      "conceptExplanation": "1. La consultation et le conseil génétiques : des couples demandent l'avis de médecins (par exemple en cas d'antécédents familiaux). Le médecin informe les parents et respecte leur choix.\n\n2. Les examens PRÉNUPTIAUX (chez les futurs parents, avant le mariage ou la grossesse) :\n- la drépanocytose, par l'électrophorèse de l'hémoglobine ;\n- l'hémophilie, par le dosage des facteurs de coagulation dans le sang ;\n- le facteur Rhésus, par le groupage sanguin.\n\n3. Les examens PRÉNATAUX (chez le fœtus, pendant la grossesse) :\n- l'échographie (images par ultrasons) ;\n- la biopsie des villosités choriales (biopsie fœtale) : avec une pince introduite dans l'utérus, on prélève des cellules d'origine fœtale du placenta, à partir de la 9e semaine environ, sous contrôle échographique ;\n- l'amniocentèse : avec une seringue introduite à travers la paroi de l'abdomen, on prélève du liquide amniotique contenant des cellules fœtales, à partir de la 17e semaine environ, sous contrôle échographique ;\n- l'embryoscopie (observation directe de l'embryon).\nLes cellules prélevées sont mises en culture, puis on fait une analyse chromosomique (caryotype : trisomie 21, etc.) ou une analyse biochimique ou de l'ADN (drépanocytose, hémophilie…).\n\nCorrection du corrigé du document : il faut lire « consultation prénuptiale », et non « consolidation prénuptiale ».\n\nConclusion générale : les maladies héréditaires se transmettent par les autosomes ou par les chromosomes sexuels. Ce sont des maladies graves que l'on peut prévoir en connaissant leur mode de transmission et en consultant un médecin généticien, surtout si l'un des parents est malade ou porteur.",
      "keyRule": "Prévoir : consultation et conseil génétiques ; examens prénuptiaux (électrophorèse, coagulation, groupage) ; examens prénataux (échographie, biopsie des villosités choriales, amniocentèse, embryoscopie).",
      "formulas": [],
      "workedExample": {
        "title": "Classer des examens",
        "statement": "Le père et la mère font des examens de l'hémoglobine ; pendant la grossesse, la mère fait une échographie et une amniocentèse. Comment appelle-t-on chaque groupe d'examens ?",
        "methodSteps": [
          "Les examens des futurs parents se font avant la grossesse : examens prénuptiaux.",
          "Les examens sur l'enfant à naître se font pendant la grossesse : examens prénataux."
        ],
        "conclusion": "Parents : consultation prénuptiale ; enfant à naître : examens prénataux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le conseil génétique",
          "stepTheme": "Le conseil génétique",
          "stepBadge": "Le conseil génétique",
          "paragraphText": "Lors d'une consultation génétique, des médecins informent un couple sur les risques de maladie héréditaire et respectent son choix.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p05_q1",
            "type": "mcq",
            "prompt": "Un couple dont un frère est hémophile s'inquiète pour ses futurs enfants. Que peut-il demander ?",
            "options": [
              "Une consultation et un conseil génétiques auprès d'un médecin",
              "Un vaccin contre l'hémophilie",
              "Un changement de groupe sanguin",
              "Rien, on ne peut rien prévoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le médecin évalue le risque et informe le couple."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'examen prénuptial",
          "stepTheme": "L'examen prénuptial",
          "stepBadge": "L'examen prénuptial",
          "paragraphText": "Les examens prénuptiaux se font chez les futurs parents : électrophorèse (drépanocytose), dosage de la coagulation (hémophilie), groupage sanguin (Rhésus).",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p05_q2",
            "type": "mcq",
            "prompt": "Avant de se marier, un homme et une femme font chacun une électrophorèse de leur hémoglobine. Quelle maladie recherche-t-on ainsi ?",
            "options": [
              "L'hémophilie",
              "La drépanocytose",
              "Le paludisme",
              "La trisomie 21"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'électrophorèse distingue HbA et HbS."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La biopsie des villosités choriales",
          "stepTheme": "La biopsie des villosités choriales",
          "stepBadge": "La biopsie des villosités choriales",
          "paragraphText": "Avec une pince introduite dans l'utérus, on prélève des cellules fœtales du placenta, à partir de la 9e semaine environ, sous échographie.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p05_q3",
            "type": "mcq",
            "prompt": "On prélève, à l'aide d'une pince introduite dans l'utérus et sous contrôle échographique, des cellules d'origine fœtale du placenta, à partir de la 9e semaine. Comment s'appelle cet examen ?",
            "options": [
              "L'amniocentèse",
              "La biopsie des villosités choriales (biopsie fœtale)",
              "L'électrophorèse",
              "La radiographie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'examen le plus précoce."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'amniocentèse",
          "stepTheme": "L'amniocentèse",
          "stepBadge": "L'amniocentèse",
          "paragraphText": "Avec une seringue introduite à travers l'abdomen, on prélève du liquide amniotique contenant des cellules fœtales, à partir de la 17e semaine environ.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p05_q4",
            "type": "mcq",
            "prompt": "À l'aide d'une seringue introduite à travers la paroi de l'abdomen, sous échographie, on prélève du liquide amniotique contenant des cellules du fœtus, vers la 17e semaine. Comment s'appelle cet examen ?",
            "options": [
              "La biopsie des villosités choriales",
              "L'amniocentèse",
              "L'embryoscopie",
              "Le groupage sanguin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Amnio » : le liquide amniotique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'analyse des cellules",
          "stepTheme": "L'analyse des cellules",
          "stepBadge": "L'analyse des cellules",
          "paragraphText": "Les cellules prélevées sont mises en culture, puis analysées : caryotype (anomalies des chromosomes) ou analyse biochimique et de l'ADN (maladies des gènes).",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p05_q5",
            "type": "mcq",
            "prompt": "Après une amniocentèse, que fait-on des cellules fœtales prélevées pour établir un diagnostic ?",
            "options": [
              "On les jette",
              "On les met en culture, puis on fait une analyse chromosomique ou biochimique (ADN)",
              "On les injecte à la mère",
              "On les fait congeler sans analyse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le caryotype détecte par exemple la trisomie 21."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Prénuptial ou prénatal ?",
          "stepTheme": "Prénuptial ou prénatal ?",
          "stepBadge": "Prénuptial ou prénatal ?",
          "paragraphText": "Examens des futurs parents : consultation prénuptiale. Examens de l'enfant à naître : examens prénataux.",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p05_q6",
            "type": "mcq",
            "prompt": "Pendant sa grossesse, une femme fait une échographie, une biopsie des villosités choriales et une amniocentèse. Comment appelle-t-on ces examens faits sur l'enfant à naître ?",
            "options": [
              "Des examens prénuptiaux",
              "Des examens prénataux",
              "Des examens post-mortem",
              "Des examens sportifs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Pré-natal » : avant la naissance."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas seulement chez les parents",
          "stepTheme": "Pas seulement chez les parents",
          "stepBadge": "Pas seulement chez les parents",
          "paragraphText": "La prévision des maladies héréditaires se fait chez les parents (prénuptial) ET chez le fœtus (prénatal).",
          "exercise": {
            "id": "terminale_a_svt_l06_previsions_genetiques_p05_q7",
            "type": "mcq",
            "prompt": "Vrai ou faux : « La prévision des anomalies héréditaires se fait par un dépistage uniquement chez les parents. »",
            "options": [
              "Vrai",
              "Faux : elle se fait aussi chez le fœtus, par des examens prénataux",
              "Vrai, seulement pour la drépanocytose",
              "Faux : elle se fait seulement après la naissance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Biopsie des villosités choriales et amniocentèse concernent le fœtus."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p05_q1",
          "type": "mcq",
          "prompt": "Un couple dont un frère est hémophile s'inquiète pour ses futurs enfants. Que peut-il demander ?",
          "options": [
            "Une consultation et un conseil génétiques auprès d'un médecin",
            "Un vaccin contre l'hémophilie",
            "Un changement de groupe sanguin",
            "Rien, on ne peut rien prévoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le médecin évalue le risque et informe le couple."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p05_q2",
          "type": "mcq",
          "prompt": "Avant de se marier, un homme et une femme font chacun une électrophorèse de leur hémoglobine. Quelle maladie recherche-t-on ainsi ?",
          "options": [
            "L'hémophilie",
            "La drépanocytose",
            "Le paludisme",
            "La trisomie 21"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'électrophorèse distingue HbA et HbS."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p05_q3",
          "type": "mcq",
          "prompt": "On prélève, à l'aide d'une pince introduite dans l'utérus et sous contrôle échographique, des cellules d'origine fœtale du placenta, à partir de la 9e semaine. Comment s'appelle cet examen ?",
          "options": [
            "L'amniocentèse",
            "La biopsie des villosités choriales (biopsie fœtale)",
            "L'électrophorèse",
            "La radiographie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'examen le plus précoce."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p05_q4",
          "type": "mcq",
          "prompt": "À l'aide d'une seringue introduite à travers la paroi de l'abdomen, sous échographie, on prélève du liquide amniotique contenant des cellules du fœtus, vers la 17e semaine. Comment s'appelle cet examen ?",
          "options": [
            "La biopsie des villosités choriales",
            "L'amniocentèse",
            "L'embryoscopie",
            "Le groupage sanguin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Amnio » : le liquide amniotique."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p05_q5",
          "type": "mcq",
          "prompt": "Après une amniocentèse, que fait-on des cellules fœtales prélevées pour établir un diagnostic ?",
          "options": [
            "On les jette",
            "On les met en culture, puis on fait une analyse chromosomique ou biochimique (ADN)",
            "On les injecte à la mère",
            "On les fait congeler sans analyse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le caryotype détecte par exemple la trisomie 21."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p05_q6",
          "type": "mcq",
          "prompt": "Pendant sa grossesse, une femme fait une échographie, une biopsie des villosités choriales et une amniocentèse. Comment appelle-t-on ces examens faits sur l'enfant à naître ?",
          "options": [
            "Des examens prénuptiaux",
            "Des examens prénataux",
            "Des examens post-mortem",
            "Des examens sportifs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Pré-natal » : avant la naissance."
        },
        {
          "id": "terminale_a_svt_l06_previsions_genetiques_p05_q7",
          "type": "mcq",
          "prompt": "Vrai ou faux : « La prévision des anomalies héréditaires se fait par un dépistage uniquement chez les parents. »",
          "options": [
            "Vrai",
            "Faux : elle se fait aussi chez le fœtus, par des examens prénataux",
            "Vrai, seulement pour la drépanocytose",
            "Faux : elle se fait seulement après la naissance"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Biopsie des villosités choriales et amniocentèse concernent le fœtus."
        }
      ]
    }
  ]
};
