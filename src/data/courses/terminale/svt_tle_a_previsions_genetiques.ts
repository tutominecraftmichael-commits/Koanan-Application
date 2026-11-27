import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 6 : Les prévisions génétiques » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1756
export const SVT_TLE_A_L06_PREVISIONS_GENETIQUES: CurriculumChapter = {
  "id": "terminale_a1_svt_l06_previsions_genetiques",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 6,
  "title": "Leçon 6 : Les prévisions génétiques",
  "summary": "L'Homme peut prévoir les maladies héréditaires en connaissant leur mode de transmission, autosomal codominant pour la drépanocytose et lié au chromosome X récessif pour l'hémophilie, et par des moyens comme la consultation génétique et le diagnostic prénatal.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1756",
  "points": [
    {
      "id": "terminale_a1_svt_l06_previsions_genetiques_p01",
      "order": 1,
      "title": "La drépanocytose : une électrophorèse qui révèle les génotypes",
      "summary": "Lire l'électrophorèse des hémoglobines A et S d'un couple et de ses enfants.",
      "conceptExplanation": "Le document 1 présente une électrophorèse, qui consiste à faire migrer des substances ionisées sous l'action d'un champ électrique. Elle permet notamment le dosage de protéines du sérum. Ici, l'on dose les hémoglobines A et S, responsables de la drépanocytose.\nRésultats : le père et la mère possèdent les deux types d'hémoglobine, HbA et HbS ; le premier enfant possède uniquement l'hémoglobine A ; le fœtus possède uniquement l'hémoglobine S.\nLe père et la mère ont les deux types d'hémoglobine : la maladie se rencontre chez l'Homme et la femme, et sa transmission se fait par des autosomes et non par les chromosomes sexuels.\nChoix des symboles de la leçon : normal HbA, malade HbS, le couple d'allèles est donc HbA et HbS. Le génotype des deux parents est HbA double barre HbS ; le génotype du premier enfant est HbA double barre HbA ; le génotype de l'enfant à naître est HbS double barre HbS.",
      "keyRule": "Sur l'électrophorèse, deux bandes (A et S) chez chaque parent, une seule bande A chez l'enfant sain, une seule bande S chez le fœtus malade : les génotypes se lisent directement.",
      "formulas": [],
      "workedExample": {
        "title": "Lire l'électrophorèse du document 1",
        "statement": "Un couple et ses enfants passent une électrophorèse des hémoglobines. Comment écrit-on leurs génotypes ?",
        "methodSteps": [
          "Les deux parents présentent HbA et HbS : leur génotype est HbA double barre HbS.",
          "Le premier enfant ne présente que HbA : son génotype est HbA double barre HbA.",
          "Le fœtus ne présente que HbS : son génotype est HbS double barre HbS.",
          "La présence des deux sexes atteints et de parents porteurs des deux hémoglobines oriente vers une transmission autosomale."
        ],
        "conclusion": "Parents HbA double barre HbS, premier enfant HbA double barre HbA, fœtus HbS double barre HbS, selon le document 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'électrophorèse",
          "stepTheme": "L'électrophorèse",
          "stepBadge": "L'électrophorèse",
          "paragraphText": "• Électrophorèse : technique qui consiste à faire migrer des substances ionisées sous l'action d'un champ électrique.\nElle permet notamment le dosage de protéines du sérum, ici les hémoglobines A et S.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p01_q1",
            "type": "mcq",
            "prompt": "L'électrophorèse consiste à :",
            "options": [
              "Faire migrer des substances ionisées sous l'action d'un champ électrique",
              "Prendre une photographie des chromosomes",
              "Prélever du liquide amniotique",
              "Mesurer uniquement le groupe sanguin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition donnée à la présentation du document 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les deux hémoglobines chez les parents",
          "stepTheme": "Les deux hémoglobines chez les parents",
          "stepBadge": "Les deux hémoglobines chez les parents",
          "paragraphText": "Le père et la mère possèdent les deux types d'hémoglobine, HbA et HbS.\nLe premier enfant n'a que HbA, tandis que le fœtus n'a que HbS.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p01_q2",
            "type": "mcq",
            "prompt": "Sur le document 1, le fœtus possède :",
            "options": [
              "Les deux hémoglobines A et S",
              "Uniquement l'hémoglobine A",
              "Uniquement l'hémoglobine S",
              "Aucune hémoglobine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultats du document 1 : fœtus HbS uniquement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Écrire les génotypes à partir des bandes",
          "stepTheme": "Écrire les génotypes à partir des bandes",
          "stepBadge": "Écrire les génotypes à partir des bandes",
          "paragraphText": "Méthode : traduire chaque profil en génotype avec les symboles HbA (normal) et HbS (malade).\nDeux bandes donnent HbA double barre HbS ; une bande A donne HbA double barre HbA ; une bande S donne HbS double barre HbS.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p01_q3",
            "type": "mcq",
            "prompt": "Le génotype des deux parents du document 1 est :",
            "options": [
              "HbA double barre HbA",
              "HbS double barre HbS",
              "HbA double barre HbS",
              "Un génotype lié au chromosome X selon la leçon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux parents possèdent les deux types d'hémoglobine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Une maladie chez l'Homme et la femme",
          "stepTheme": "Une maladie chez l'Homme et la femme",
          "stepBadge": "Une maladie chez l'Homme et la femme",
          "paragraphText": "Les deux types d'hémoglobine existent chez le père comme chez la mère.\nLa leçon en déduit que la maladie se rencontre chez l'Homme et la femme, et que sa transmission se fait par des autosomes.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p01_q4",
            "type": "mcq",
            "prompt": "La drépanocytose se rencontre :",
            "options": [
              "Uniquement chez les hommes",
              "Chez l'Homme et la femme",
              "Uniquement chez les fœtus",
              "Uniquement chez les parents"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation du document 1."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre A et S dans les symboles",
          "stepTheme": "Ne pas confondre A et S dans les symboles",
          "stepBadge": "Ne pas confondre A et S dans les symboles",
          "paragraphText": "Piège : inverser les symboles choisis par la leçon.\nNormal correspond à HbA et malade à HbS ; le couple d'allèles est donc formé de HbA et de HbS.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p01_q5",
            "type": "mcq",
            "prompt": "Dans le choix des symboles de la leçon, HbS désigne :",
            "options": [
              "L'hémoglobine normale",
              "L'hémoglobine de la maladie",
              "Un chromosome sexuel",
              "Un groupe sanguin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Choix des symboles : normal HbA, malade HbS."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le premier enfant uniquement HbA",
          "stepTheme": "Le premier enfant uniquement HbA",
          "stepBadge": "Le premier enfant uniquement HbA",
          "paragraphText": "Le premier enfant du couple ne possède que l'hémoglobine A sur son électrophorèse.\nSon génotype s'écrit donc HbA double barre HbA : il n'a reçu que l'allèle normal de chaque parent.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p01_q6",
            "type": "mcq",
            "prompt": "Le génotype du premier enfant est :",
            "options": [
              "HbS double barre HbS",
              "HbA double barre HbS",
              "HbA double barre HbA",
              "Impossible à déterminer selon la leçon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation du document 1 pour le premier enfant."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p01_q1",
          "type": "mcq",
          "prompt": "L'électrophorèse consiste à :",
          "options": [
            "Faire migrer des substances ionisées sous l'action d'un champ électrique",
            "Prendre une photographie des chromosomes",
            "Prélever du liquide amniotique",
            "Mesurer uniquement le groupe sanguin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition donnée à la présentation du document 1."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p01_q2",
          "type": "mcq",
          "prompt": "Sur le document 1, le fœtus possède :",
          "options": [
            "Les deux hémoglobines A et S",
            "Uniquement l'hémoglobine A",
            "Uniquement l'hémoglobine S",
            "Aucune hémoglobine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultats du document 1 : fœtus HbS uniquement."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p01_q3",
          "type": "mcq",
          "prompt": "Le génotype des deux parents du document 1 est :",
          "options": [
            "HbA double barre HbA",
            "HbS double barre HbS",
            "HbA double barre HbS",
            "Un génotype lié au chromosome X selon la leçon"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux parents possèdent les deux types d'hémoglobine."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p01_q4",
          "type": "mcq",
          "prompt": "La drépanocytose se rencontre :",
          "options": [
            "Uniquement chez les hommes",
            "Chez l'Homme et la femme",
            "Uniquement chez les fœtus",
            "Uniquement chez les parents"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation du document 1."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p01_q5",
          "type": "mcq",
          "prompt": "Dans le choix des symboles de la leçon, HbS désigne :",
          "options": [
            "L'hémoglobine normale",
            "L'hémoglobine de la maladie",
            "Un chromosome sexuel",
            "Un groupe sanguin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Choix des symboles : normal HbA, malade HbS."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p01_q6",
          "type": "mcq",
          "prompt": "Le génotype du premier enfant est :",
          "options": [
            "HbS double barre HbS",
            "HbA double barre HbS",
            "HbA double barre HbA",
            "Impossible à déterminer selon la leçon"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation du document 1 pour le premier enfant."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l06_previsions_genetiques_p02",
      "order": 2,
      "title": "Codominance et risque d'un enfant drépanocytaire",
      "summary": "Conclure que les allèles de la drépanocytose sont codominants et calculer le bilan d'un couple HbA double barre HbS.",
      "conceptExplanation": "Les deux types d'hémoglobine existent en même temps chez les parents. Cela veut dire que les deux allèles responsables de ces protéines s'expriment en même temps : l'allèle de l'hémoglobine A ne domine pas celui de l'allèle S. Les deux allèles sont donc codominants.\nLe gène responsable de la drépanocytose est porté par un autosome.\nDans l'exercice 3, deux parents C1 et C2 possèdent chacun les deux allèles S et A, et le fœtus F uniquement l'allèle S. Leurs génotypes s'écrivent : C1 A double barre S, C2 A double barre S, F S double barre S.\nL'échiquier de croisement de deux parents A double barre S donne le bilan : un quart [A], une moitié [AS], un quart [S]. La conclusion de l'exercice est que ce couple a 25 pour cent de chances d'avoir un enfant drépanocytaire.",
      "keyRule": "Deux parents porteurs A double barre S : un quart d'enfants [A], une moitié [AS], un quart [S], soit 25 pour cent de risques d'un enfant drépanocytaire à chaque naissance.",
      "formulas": [],
      "workedExample": {
        "title": "Justifier le génotype du fœtus par un échiquier (exercice 3)",
        "statement": "Deux parents C1 et C2 sont A double barre S et leur fœtus est S double barre S. Justifie ce génotype et donne le bilan du croisement.",
        "methodSteps": [
          "Chaque parent A double barre S produit deux types de gamètes, porteurs de A ou de S.",
          "L'échiquier combine ces gamètes deux à deux : AA, AS, AS et SS.",
          "Le fœtus S double barre S correspond à la rencontre de deux gamètes porteurs de S.",
          "Bilan : un quart [A], une moitié [AS], un quart [S]."
        ],
        "conclusion": "Corrigé de l'exercice 3 : ce couple a 25 pour cent de chances d'avoir un enfant drépanocytaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Des allèles codominants",
          "stepTheme": "Des allèles codominants",
          "stepBadge": "Des allèles codominants",
          "paragraphText": "Les allèles HbA et HbS s'expriment en même temps chez les parents qui les portent tous les deux.\nL'allèle A ne domine pas l'allèle S : les deux allèles de la drépanocytose sont codominants.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p02_q1",
            "type": "mcq",
            "prompt": "Les allèles de la drépanocytose sont codominants parce que :",
            "options": [
              "L'allèle A écrase toujours l'allèle S",
              "Les deux allèles s'expriment en même temps chez les parents",
              "L'allèle S est toujours récessif et invisible",
              "Ils sont portés par le chromosome X"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation du document 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un gène porté par un autosome",
          "stepTheme": "Un gène porté par un autosome",
          "stepBadge": "Un gène porté par un autosome",
          "paragraphText": "La conclusion de la première partie est nette sur la localisation du gène.\nLe gène responsable de la drépanocytose est porté par un autosome, et ses deux allèles sont codominants.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p02_q2",
            "type": "mcq",
            "prompt": "Le gène de la drépanocytose est porté par :",
            "options": [
              "Le chromosome X",
              "Le chromosome Y",
              "Un autosome",
              "Aucun chromosome"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conclusion de la partie I pour la drépanocytose."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le bilan un quart, une moitié, un quart",
          "stepTheme": "Le bilan un quart, une moitié, un quart",
          "stepBadge": "Le bilan un quart, une moitié, un quart",
          "paragraphText": "L'échiquier de deux parents A double barre S donne trois catégories d'enfants.\nUn quart [A], une moitié [AS] et un quart [S] : c'est le bilan écrit dans le corrigé de l'exercice 3.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p02_q3",
            "type": "mcq",
            "prompt": "Le bilan du croisement de deux parents A double barre S est :",
            "options": [
              "Un quart [A], une moitié [AS], un quart [S]",
              "Moitié [A], moitié [S]",
              "Trois quarts [S], un quart [A]",
              "Uniquement des enfants [AS]"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Bilan du corrigé de l'exercice 3."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Convertir le bilan en risque",
          "stepTheme": "Convertir le bilan en risque",
          "stepBadge": "Convertir le bilan en risque",
          "paragraphText": "Méthode : le risque d'un enfant malade [S] est la proportion correspondante dans le bilan de l'échiquier.\nUn quart des enfants sont [S], soit 25 pour cent de chances d'avoir un enfant drépanocytaire pour ce couple.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p02_q4",
            "type": "mcq",
            "prompt": "Un couple de deux porteurs A double barre S a, à chaque naissance, un risque d'enfant drépanocytaire de :",
            "options": [
              "0 pour cent",
              "25 pour cent",
              "50 pour cent",
              "100 pour cent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion chiffrée du corrigé de l'exercice 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un allèle hétérosomal n'est pas un autosome",
          "stepTheme": "Un allèle hétérosomal n'est pas un autosome",
          "stepBadge": "Un allèle hétérosomal n'est pas un autosome",
          "paragraphText": "Piège de l'exercice 1 : « un allèle est dit hétérosomal lorsqu'il est porté par un autosome » est faux.\nHétérosomal renvoie aux chromosomes sexuels (hétérochromosomes), tandis que le gène de la drépanocytose, lui, est bien autosomal.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p02_q5",
            "type": "mcq",
            "prompt": "L'affirmation « un allèle est hétérosomal lorsqu'il est porté par un autosome » est jugée :",
            "options": [
              "Vraie",
              "Fausse",
              "Vraie pour la drépanocytose uniquement",
              "Non corrigée dans la leçon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de l'exercice 1 : a faux, b faux, c vrai."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le fœtus F de l'exercice 3",
          "stepTheme": "Le fœtus F de l'exercice 3",
          "stepBadge": "Le fœtus F de l'exercice 3",
          "paragraphText": "Dans l'exercice 3, le fœtus F ne possède qu'un seul type d'allèle visible sur l'électrophorèse : l'allèle S.\nSon génotype s'écrit donc S double barre S, alors que ses deux parents sont A double barre S.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p02_q6",
            "type": "mcq",
            "prompt": "Le génotype du fœtus F de l'exercice 3 est :",
            "options": [
              "A double barre A",
              "A double barre S",
              "S double barre S",
              "Impossible à écrire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Corrigé de l'exercice 3, question 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p02_q1",
          "type": "mcq",
          "prompt": "Les allèles de la drépanocytose sont codominants parce que :",
          "options": [
            "L'allèle A écrase toujours l'allèle S",
            "Les deux allèles s'expriment en même temps chez les parents",
            "L'allèle S est toujours récessif et invisible",
            "Ils sont portés par le chromosome X"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation du document 1."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p02_q2",
          "type": "mcq",
          "prompt": "Le gène de la drépanocytose est porté par :",
          "options": [
            "Le chromosome X",
            "Le chromosome Y",
            "Un autosome",
            "Aucun chromosome"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conclusion de la partie I pour la drépanocytose."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p02_q3",
          "type": "mcq",
          "prompt": "Le bilan du croisement de deux parents A double barre S est :",
          "options": [
            "Un quart [A], une moitié [AS], un quart [S]",
            "Moitié [A], moitié [S]",
            "Trois quarts [S], un quart [A]",
            "Uniquement des enfants [AS]"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Bilan du corrigé de l'exercice 3."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p02_q4",
          "type": "mcq",
          "prompt": "Un couple de deux porteurs A double barre S a, à chaque naissance, un risque d'enfant drépanocytaire de :",
          "options": [
            "0 pour cent",
            "25 pour cent",
            "50 pour cent",
            "100 pour cent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion chiffrée du corrigé de l'exercice 3."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p02_q5",
          "type": "mcq",
          "prompt": "L'affirmation « un allèle est hétérosomal lorsqu'il est porté par un autosome » est jugée :",
          "options": [
            "Vraie",
            "Fausse",
            "Vraie pour la drépanocytose uniquement",
            "Non corrigée dans la leçon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de l'exercice 1 : a faux, b faux, c vrai."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p02_q6",
          "type": "mcq",
          "prompt": "Le génotype du fœtus F de l'exercice 3 est :",
          "options": [
            "A double barre A",
            "A double barre S",
            "S double barre S",
            "Impossible à écrire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Corrigé de l'exercice 3, question 2."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l06_previsions_genetiques_p03",
      "order": 3,
      "title": "L'hémophilie : une maladie récessive qui n'atteint que les hommes",
      "summary": "Lire le pédigrée de l'hémophilie et déduire un allèle récessif porté par le chromosome X.",
      "conceptExplanation": "Le document 2 présente l'hémophilie, une anomalie héréditaire caractérisée par un sang incoagulable, et le pédigrée d'une famille dont certains membres sont hémophiles.\nRésultats : la maladie n'est pas présente dans toutes les générations et elle n'affecte que les hommes.\nLes parents I1 et I2, apparemment sains, ont dans leur descendance un enfant malade. Les parents portent donc l'allèle de l'anomalie, mais sous forme masquée : l'allèle de la maladie est récessif et l'allèle normal est dominant.\nChoix des symboles : normal H, maladie h, le couple d'allèles est donc H et h.\nLa maladie atteignant seulement les hommes, on peut supposer que le gène est porté par le chromosome sexuel X. La conclusion de la partie précise que le gène responsable de l'hémophilie est porté par un hétérochromosome.",
      "keyRule": "Parents sains avec un enfant malade et seuls des hommes atteints : l'allèle de l'hémophilie est récessif et porté par le chromosome X.",
      "formulas": [],
      "workedExample": {
        "title": "Déduire le mode de transmission du pédigrée (document 2)",
        "statement": "À partir du pédigrée d'une famille d'hémophiles, déduis deux propriétés de l'allèle de la maladie.",
        "methodSteps": [
          "La maladie n'est pas présente dans toutes les générations et des parents apparemment sains ont un enfant malade.",
          "Les parents portent donc l'allèle sous forme masquée : l'allèle de la maladie est récessif, l'allèle normal est dominant.",
          "La maladie n'affecte que les hommes.",
          "On suppose donc que le gène est porté par le chromosome sexuel X."
        ],
        "conclusion": "Allèle récessif, gène porté par le chromosome X : c'est le mode de transmission de l'hémophilie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'hémophilie",
          "stepTheme": "L'hémophilie",
          "stepBadge": "L'hémophilie",
          "paragraphText": "• Hémophilie : anomalie héréditaire caractérisée par un sang incoagulable.\nSon pédigrée montre une maladie absente de certaines générations et limitée aux hommes.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p03_q1",
            "type": "mcq",
            "prompt": "L'hémophilie est caractérisée par :",
            "options": [
              "Une hémoglobine anormale S",
              "Un sang incoagulable",
              "Un groupe sanguin AB",
              "Une absence de chromosomes X"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition donnée à la présentation du document 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Absente de certaines générations",
          "stepTheme": "Absente de certaines générations",
          "stepBadge": "Absente de certaines générations",
          "paragraphText": "Sur le pédigrée, la maladie n'est pas présente dans toutes les générations.\nDes parents apparemment sains, I1 et I2, ont pourtant un enfant malade dans leur descendance.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p03_q2",
            "type": "mcq",
            "prompt": "Le pédigrée de l'hémophilie montre que la maladie :",
            "options": [
              "Est présente dans toutes les générations",
              "N'est pas présente dans toutes les générations",
              "N'atteint que les femmes",
              "Disparaît définitivement après une génération"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats et analyse du document 2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un allèle récessif, un allèle normal dominant",
          "stepTheme": "Un allèle récessif, un allèle normal dominant",
          "stepBadge": "Un allèle récessif, un allèle normal dominant",
          "paragraphText": "Les parents sains portent l'allèle de l'anomalie sous forme masquée.\nL'allèle de la maladie est donc récessif (h) et l'allèle normal est dominant (H).",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p03_q3",
            "type": "mcq",
            "prompt": "Pour l'hémophilie, le choix des symboles de la leçon est :",
            "options": [
              "Normal HbA, malade HbS",
              "Normal H, maladie h",
              "Normal S, maladie A",
              "Normal X, maladie Y"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Choix des symboles du document 2 : normal H, maladie h."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Supposer le chromosome X",
          "stepTheme": "Supposer le chromosome X",
          "stepBadge": "Supposer le chromosome X",
          "paragraphText": "Méthode : croiser les deux indices du pédigrée, récessivité et atteinte des seuls hommes.\nLa leçon en déduit la supposition que le gène est porté par le chromosome sexuel X, à vérifier par l'interprétation chromosomique.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p03_q4",
            "type": "mcq",
            "prompt": "La maladie n'atteignant que les hommes, la leçon suppose que le gène est porté par :",
            "options": [
              "Un autosome",
              "Le chromosome sexuel X",
              "Le chromosome Y uniquement",
              "Les deux chromosomes sexuels également"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse du document 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Des parents sains peuvent transmettre",
          "stepTheme": "Des parents sains peuvent transmettre",
          "stepBadge": "Des parents sains peuvent transmettre",
          "paragraphText": "Piège : croire que deux parents apparemment sains ne peuvent pas avoir un enfant hémophile.\nLe pédigrée montre le contraire : ils portent l'allèle récessif masqué et peuvent le transmettre.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p03_q5",
            "type": "mcq",
            "prompt": "Deux parents apparemment sains peuvent-ils avoir un enfant hémophile, selon le pédigrée ?",
            "options": [
              "Non, c'est impossible",
              "Oui, car ils portent l'allèle de l'anomalie sous forme masquée",
              "Seulement si le père est malade",
              "Seulement pour la drépanocytose"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse du document 2 pour les parents I1 et I2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Que des hommes atteints",
          "stepTheme": "Que des hommes atteints",
          "stepBadge": "Que des hommes atteints",
          "paragraphText": "Dans toute la famille du document 2, seuls des hommes sont hémophiles.\nC'est l'indice visuel le plus frappant du pédigrée, avant même l'analyse des générations.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p03_q6",
            "type": "mcq",
            "prompt": "Sur le pédigrée du document 2, la maladie affecte :",
            "options": [
              "Les hommes et les femmes également",
              "Uniquement les femmes",
              "Que les hommes",
              "Uniquement les grands-parents"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultats du document 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p03_q1",
          "type": "mcq",
          "prompt": "L'hémophilie est caractérisée par :",
          "options": [
            "Une hémoglobine anormale S",
            "Un sang incoagulable",
            "Un groupe sanguin AB",
            "Une absence de chromosomes X"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition donnée à la présentation du document 2."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p03_q2",
          "type": "mcq",
          "prompt": "Le pédigrée de l'hémophilie montre que la maladie :",
          "options": [
            "Est présente dans toutes les générations",
            "N'est pas présente dans toutes les générations",
            "N'atteint que les femmes",
            "Disparaît définitivement après une génération"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats et analyse du document 2."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p03_q3",
          "type": "mcq",
          "prompt": "Pour l'hémophilie, le choix des symboles de la leçon est :",
          "options": [
            "Normal HbA, malade HbS",
            "Normal H, maladie h",
            "Normal S, maladie A",
            "Normal X, maladie Y"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Choix des symboles du document 2 : normal H, maladie h."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p03_q4",
          "type": "mcq",
          "prompt": "La maladie n'atteignant que les hommes, la leçon suppose que le gène est porté par :",
          "options": [
            "Un autosome",
            "Le chromosome sexuel X",
            "Le chromosome Y uniquement",
            "Les deux chromosomes sexuels également"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse du document 2."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p03_q5",
          "type": "mcq",
          "prompt": "Deux parents apparemment sains peuvent-ils avoir un enfant hémophile, selon le pédigrée ?",
          "options": [
            "Non, c'est impossible",
            "Oui, car ils portent l'allèle de l'anomalie sous forme masquée",
            "Seulement si le père est malade",
            "Seulement pour la drépanocytose"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse du document 2 pour les parents I1 et I2."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p03_q6",
          "type": "mcq",
          "prompt": "Sur le pédigrée du document 2, la maladie affecte :",
          "options": [
            "Les hommes et les femmes également",
            "Uniquement les femmes",
            "Que les hommes",
            "Uniquement les grands-parents"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultats du document 2."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l06_previsions_genetiques_p04",
      "order": 4,
      "title": "Le bilan chromosomique de l'hémophilie",
      "summary": "Vérifier par l'interprétation chromosomique qu'aucune fille n'est hémophile et que la moitié des garçons l'est.",
      "conceptExplanation": "La vérification chromosomique croise les gamètes des deux parents en tenant compte du chromosome X porteur de l'allèle.\nLe bilan de la leçon est le suivant : une moitié de filles [H], un quart de garçons [H], un quart de garçons [h].\nConclusion du bilan : aucune fille n'est hémophile ; la moitié des garçons est normale, tandis que l'autre moitié est hémophile.\nLes résultats théoriques sont conformes aux résultats observés sur le pédigrée.\nL'allèle de l'hémophilie est donc bien porté par un chromosome sexuel X, et le gène responsable de l'hémophilie est porté par un hétérochromosome, contrairement à celui de la drépanocytose, porté par un autosome.",
      "keyRule": "Bilan à retenir : moitié de filles [H], quart de garçons [H], quart de garçons [h] ; aucune fille hémophile, un garçon sur deux hémophile.",
      "formulas": [],
      "workedExample": {
        "title": "Vérifier le pédigrée par le bilan théorique (document 2, suite)",
        "statement": "Donne le bilan de l'interprétation chromosomique et sa conclusion pour l'hémophilie.",
        "methodSteps": [
          "On croise les gamètes en suivant l'allèle porté par le chromosome X.",
          "Bilan : une moitié de filles [H], un quart de garçons [H], un quart de garçons [h].",
          "Aucune fille n'est hémophile ; la moitié des garçons est normale et l'autre moitié hémophile.",
          "Ces résultats théoriques sont conformes aux résultats observés : l'allèle est bien porté par le chromosome X."
        ],
        "conclusion": "La conformité entre théorie et pédigrée confirme la localisation sur le chromosome X."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un hétérochromosome",
          "stepTheme": "Un hétérochromosome",
          "stepBadge": "Un hétérochromosome",
          "paragraphText": "La conclusion de la partie I oppose les deux maladies par la localisation de leur gène.\nLe gène de l'hémophilie est porté par un hétérochromosome, c'est-à-dire un chromosome sexuel, ici le X.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p04_q1",
            "type": "mcq",
            "prompt": "Le gène responsable de l'hémophilie est porté par :",
            "options": [
              "Un autosome",
              "Un hétérochromosome",
              "Aucun chromosome",
              "Le chromosome Y uniquement selon la conclusion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la partie I : gène porté par un hétérochromosome."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Aucune fille hémophile dans ce bilan",
          "stepTheme": "Aucune fille hémophile dans ce bilan",
          "stepBadge": "Aucune fille hémophile dans ce bilan",
          "paragraphText": "Le bilan chromosomique donne une moitié de filles, toutes de phénotype [H].\nLa conclusion est formelle : aucune fille n'est hémophile dans ce croisement.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p04_q2",
            "type": "mcq",
            "prompt": "Dans le bilan de la leçon, les filles sont :",
            "options": [
              "Toutes hémophiles",
              "Pour moitié hémophiles",
              "Aucune hémophile, toutes [H]",
              "Absentes du bilan"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Bilan et conclusion de l'interprétation chromosomique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La moitié des garçons hémophiles",
          "stepTheme": "La moitié des garçons hémophiles",
          "stepBadge": "La moitié des garçons hémophiles",
          "paragraphText": "Les garçons se partagent en deux quarts : un quart [H] et un quart [h].\nAutrement dit, la moitié des garçons est normale et l'autre moitié est hémophile.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p04_q3",
            "type": "mcq",
            "prompt": "Parmi les garçons du bilan, la proportion d'hémophiles est de :",
            "options": [
              "Aucun garçon",
              "Un quart des garçons",
              "La moitié des garçons",
              "Tous les garçons"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un quart de garçons [h] sur un demi total de garçons : la moitié des garçons."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Confronter théorie et observation",
          "stepTheme": "Confronter théorie et observation",
          "stepBadge": "Confronter théorie et observation",
          "paragraphText": "Méthode de vérification de la leçon : comparer les résultats théoriques de l'échiquier chromosomique aux résultats observés sur le pédigrée.\nLeur conformité valide la supposition d'un gène porté par le chromosome X.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p04_q4",
            "type": "mcq",
            "prompt": "La vérification est concluante parce que :",
            "options": [
              "Les résultats théoriques sont conformes aux résultats observés",
              "Le pédigrée a été modifié",
              "Toutes les filles sont malades",
              "Le gène est finalement autosomal"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Phrase de conclusion du bilan du document 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas échanger les deux maladies",
          "stepTheme": "Ne pas échanger les deux maladies",
          "stepBadge": "Ne pas échanger les deux maladies",
          "paragraphText": "Piège de synthèse : attribuer l'autosome à l'hémophilie et le chromosome X à la drépanocytose.\nC'est l'inverse : drépanocytose autosomale codominante, hémophilie récessive portée par un hétérochromosome.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p04_q5",
            "type": "mcq",
            "prompt": "La bonne association est :",
            "options": [
              "Drépanocytose liée à X, hémophilie autosomale",
              "Drépanocytose autosomale codominante, hémophilie récessive portée par un hétérochromosome",
              "Les deux maladies autosomales récessives",
              "Les deux maladies liées au chromosome Y"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la partie I, qui oppose les deux modes de transmission."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un quart de garçons [h]",
          "stepTheme": "Un quart de garçons [h]",
          "stepBadge": "Un quart de garçons [h]",
          "paragraphText": "Le quart de garçons [h] du bilan correspond aux garçons hémophiles attendus.\nIl explique les cas masculins observés dans la descendance des parents I1 et I2 du pédigrée.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p04_q6",
            "type": "mcq",
            "prompt": "Dans le bilan, les garçons hémophiles représentent :",
            "options": [
              "Une moitié de l'ensemble des enfants",
              "Un quart de l'ensemble des enfants",
              "Toutes les filles",
              "Trois quarts des enfants"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Bilan : un quart de garçons [h] sur l'ensemble de la descendance."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p04_q1",
          "type": "mcq",
          "prompt": "Le gène responsable de l'hémophilie est porté par :",
          "options": [
            "Un autosome",
            "Un hétérochromosome",
            "Aucun chromosome",
            "Le chromosome Y uniquement selon la conclusion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la partie I : gène porté par un hétérochromosome."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p04_q2",
          "type": "mcq",
          "prompt": "Dans le bilan de la leçon, les filles sont :",
          "options": [
            "Toutes hémophiles",
            "Pour moitié hémophiles",
            "Aucune hémophile, toutes [H]",
            "Absentes du bilan"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Bilan et conclusion de l'interprétation chromosomique."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p04_q3",
          "type": "mcq",
          "prompt": "Parmi les garçons du bilan, la proportion d'hémophiles est de :",
          "options": [
            "Aucun garçon",
            "Un quart des garçons",
            "La moitié des garçons",
            "Tous les garçons"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un quart de garçons [h] sur un demi total de garçons : la moitié des garçons."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p04_q4",
          "type": "mcq",
          "prompt": "La vérification est concluante parce que :",
          "options": [
            "Les résultats théoriques sont conformes aux résultats observés",
            "Le pédigrée a été modifié",
            "Toutes les filles sont malades",
            "Le gène est finalement autosomal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Phrase de conclusion du bilan du document 2."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p04_q5",
          "type": "mcq",
          "prompt": "La bonne association est :",
          "options": [
            "Drépanocytose liée à X, hémophilie autosomale",
            "Drépanocytose autosomale codominante, hémophilie récessive portée par un hétérochromosome",
            "Les deux maladies autosomales récessives",
            "Les deux maladies liées au chromosome Y"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la partie I, qui oppose les deux modes de transmission."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p04_q6",
          "type": "mcq",
          "prompt": "Dans le bilan, les garçons hémophiles représentent :",
          "options": [
            "Une moitié de l'ensemble des enfants",
            "Un quart de l'ensemble des enfants",
            "Toutes les filles",
            "Trois quarts des enfants"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Bilan : un quart de garçons [h] sur l'ensemble de la descendance."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l06_previsions_genetiques_p05",
      "order": 5,
      "title": "La consultation génétique et le conseil génétique",
      "summary": "Présenter la consultation prénuptiale et les examens des parents : hémophilie, facteur rhésus et drépanocytose.",
      "conceptExplanation": "Le document 1 présente des moyens pour éviter d'avoir des enfants malades : la consultation génétique, qui apporte l'information aux parents et respecte leur choix, et le conseil génétique, où des couples demandent l'avis du corps médical pour des raisons très variables, par exemple la crainte dans le cas de certains antécédents familiaux.\nLa consultation peut se faire chez les parents : on parle de consultation prénuptiale. Elle permet par exemple de rechercher l'hémophilie en mesurant le taux sanguin, le facteur rhésus par groupage sanguin à partir du sérum test, et la drépanocytose par l'électrophorèse.\nLa consultation peut aussi se faire chez le fœtus : on parle alors d'examens prénataux.\nLa situation d'évaluation oppose ainsi le groupe d'examens faits par les parents, qualifié dans le corrigé de consolidation prénuptiale (pour consultation prénuptiale), et celui des examens faits sur l'enfant à naître, l'examen prénatal. Le bien-fondé de ces examens est d'éviter les maladies héréditaires graves.",
      "keyRule": "Avant le mariage ou la conception : consultation et conseil génétiques, avec trois recherches citées, taux sanguin pour l'hémophilie, groupage pour le rhésus, électrophorèse pour la drépanocytose.",
      "formulas": [],
      "workedExample": {
        "title": "Qualifier les deux groupes d'examens (situation d'évaluation)",
        "statement": "Le père et la mère font des examens portant sur l'hémoglobine, et la mère suit pendant sa grossesse des examens de dépistage sur l'enfant à naître. Comment qualifier ces deux groupes d'examens ?",
        "methodSteps": [
          "L'examen portant sur les types d'hémoglobine recherche la drépanocytose.",
          "Les examens faits par les parents relèvent de la consultation prénuptiale (le corrigé écrit consolidation prénuptiale).",
          "Les examens faits sur l'enfant à naître relèvent de l'examen prénatal.",
          "Leur bien-fondé : éviter les maladies héréditaires graves."
        ],
        "conclusion": "Corrigé de la situation d'évaluation : consultation des parents d'un côté, examens prénataux de l'autre, pour prévenir les maladies graves."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La consultation génétique",
          "stepTheme": "La consultation génétique",
          "stepBadge": "La consultation génétique",
          "paragraphText": "• Consultation génétique : démarche qui apporte l'information aux parents et respecte leur choix.\nLe texte la distingue du conseil génétique, où le corps médical donne un avis à la demande des couples.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p05_q1",
            "type": "mcq",
            "prompt": "La consultation génétique apporte aux parents :",
            "options": [
              "Une obligation de ne pas avoir d'enfants",
              "L'information, en respectant leur choix",
              "Uniquement un diagnostic du fœtus",
              "Un traitement de l'hémophilie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Texte du document 1 de la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La consultation prénuptiale",
          "stepTheme": "La consultation prénuptiale",
          "stepBadge": "La consultation prénuptiale",
          "paragraphText": "La consultation chez les parents, avant l'union ou la conception, est appelée consultation prénuptiale dans l'analyse.\nElle recherche notamment l'hémophilie, le facteur rhésus et la drépanocytose.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p05_q2",
            "type": "mcq",
            "prompt": "La consultation des parents est appelée :",
            "options": [
              "Amniocentèse",
              "Biopsie fœtale",
              "Consultation prénuptiale",
              "Échographie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse du document 1 de la partie II."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Trois recherches chez les parents",
          "stepTheme": "Trois recherches chez les parents",
          "stepBadge": "Trois recherches chez les parents",
          "paragraphText": "L'analyse liste trois recherches possibles en consultation prénuptiale.\nL'hémophilie en mesurant le taux sanguin, le facteur rhésus par groupage sanguin à partir du sérum test, et la drépanocytose par l'électrophorèse.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p05_q3",
            "type": "mcq",
            "prompt": "La drépanocytose est recherchée chez les parents par :",
            "options": [
              "Le groupage sanguin",
              "L'électrophorèse",
              "La mesure du taux sanguin",
              "L'échographie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le troisième examen listé dans l'analyse."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Quel examen pour quelle recherche",
          "stepTheme": "Quel examen pour quelle recherche",
          "stepBadge": "Quel examen pour quelle recherche",
          "paragraphText": "Méthode : associer chaque recherche à sa technique.\nTaux sanguin pour l'hémophilie, groupage sanguin à partir du sérum test pour le facteur rhésus, électrophorèse pour la drépanocytose.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p05_q4",
            "type": "mcq",
            "prompt": "Le facteur rhésus est recherché par :",
            "options": [
              "L'électrophorèse",
              "La biopsie des villosités choriales",
              "Le groupage sanguin à partir du sérum test",
              "L'embryoscopie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse du document 1 : groupage sanguin à partir du sérum test."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le dépistage ne se fait pas uniquement chez les parents",
          "stepTheme": "Le dépistage ne se fait pas uniquement chez les parents",
          "stepBadge": "Le dépistage ne se fait pas uniquement chez les parents",
          "paragraphText": "Piège de l'exercice 1 : « la prévision des anomalies héréditaires se fait par un dépistage uniquement chez les parents » est faux.\nLe dépistage concerne aussi le fœtus, par les examens prénataux de la partie suivante.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p05_q5",
            "type": "mcq",
            "prompt": "L'affirmation « le dépistage se fait uniquement chez les parents » est jugée :",
            "options": [
              "Vraie",
              "Vraie pour l'hémophilie seulement",
              "Fausse",
              "Non corrigée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Corrigé de l'exercice 1 : a faux, b faux, c vrai (l'Homme peut prévoir l'apparition des maladies héréditaires)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La crainte liée aux antécédents familiaux",
          "stepTheme": "La crainte liée aux antécédents familiaux",
          "stepBadge": "La crainte liée aux antécédents familiaux",
          "paragraphText": "Le conseil génétique est illustré par des couples qui demandent l'avis du corps médical.\nLa leçon donne comme exemple de raison la crainte dans le cas de certains antécédents familiaux, comme une famille touchée par la drépanocytose.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p05_q6",
            "type": "mcq",
            "prompt": "Un motif de demande de conseil génétique cité par le texte est :",
            "options": [
              "Le choix du sexe de l'enfant",
              "La crainte liée à certains antécédents familiaux",
              "La préparation d'un concours",
              "Le groupage sanguin des voisins"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Texte du document 1 : raisons très variables, par exemple la crainte en cas d'antécédents familiaux."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p05_q1",
          "type": "mcq",
          "prompt": "La consultation génétique apporte aux parents :",
          "options": [
            "Une obligation de ne pas avoir d'enfants",
            "L'information, en respectant leur choix",
            "Uniquement un diagnostic du fœtus",
            "Un traitement de l'hémophilie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Texte du document 1 de la partie II."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p05_q2",
          "type": "mcq",
          "prompt": "La consultation des parents est appelée :",
          "options": [
            "Amniocentèse",
            "Biopsie fœtale",
            "Consultation prénuptiale",
            "Échographie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse du document 1 de la partie II."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p05_q3",
          "type": "mcq",
          "prompt": "La drépanocytose est recherchée chez les parents par :",
          "options": [
            "Le groupage sanguin",
            "L'électrophorèse",
            "La mesure du taux sanguin",
            "L'échographie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le troisième examen listé dans l'analyse."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p05_q4",
          "type": "mcq",
          "prompt": "Le facteur rhésus est recherché par :",
          "options": [
            "L'électrophorèse",
            "La biopsie des villosités choriales",
            "Le groupage sanguin à partir du sérum test",
            "L'embryoscopie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse du document 1 : groupage sanguin à partir du sérum test."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p05_q5",
          "type": "mcq",
          "prompt": "L'affirmation « le dépistage se fait uniquement chez les parents » est jugée :",
          "options": [
            "Vraie",
            "Vraie pour l'hémophilie seulement",
            "Fausse",
            "Non corrigée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Corrigé de l'exercice 1 : a faux, b faux, c vrai (l'Homme peut prévoir l'apparition des maladies héréditaires)."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p05_q6",
          "type": "mcq",
          "prompt": "Un motif de demande de conseil génétique cité par le texte est :",
          "options": [
            "Le choix du sexe de l'enfant",
            "La crainte liée à certains antécédents familiaux",
            "La préparation d'un concours",
            "Le groupage sanguin des voisins"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Texte du document 1 : raisons très variables, par exemple la crainte en cas d'antécédents familiaux."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l06_previsions_genetiques_p06",
      "order": 6,
      "title": "Le diagnostic prénatal : biopsie, amniocentèse et autres techniques",
      "summary": "Décrire les prélèvements sur le fœtus, leurs dates et les techniques de dépistage prénatal.",
      "conceptExplanation": "Le document 2 présente le dépistage de certaines maladies chez le fœtus à partir des villosités choriales ou du liquide amniotique.\nLa biopsie fœtale : à l'aide d'une pince à biopsie introduite dans l'utérus, on prélève des cellules d'origine fœtale du placenta. Ce prélèvement se fait à partir de la 9e semaine, sous contrôle échographique. C'est la biopsie des villosités choriales.\nL'amniocentèse : à l'aide d'une seringue introduite dans l'abdomen, on prélève le liquide amniotique contenant des cellules fœtales ou du sang fœtal. Ce prélèvement se fait à partir de la 17e semaine, sous contrôle échographique.\nDans les deux cas, les cellules prélevées sont mises en culture et le diagnostic se fait soit par analyse chromosomique, soit par une analyse biochimique, à partir de la 20e semaine.\nLes techniques de dépistage prénatal citées sont l'échographie, la biopsie des villosités choriales, l'amniocentèse et l'embryoscopie. Il est donc possible de prévoir la transmission des maladies héréditaires.",
      "keyRule": "Deux prélèvements à dater sans les inverser : biopsie des villosités choriales dès la 9e semaine, amniocentèse dès la 17e semaine, diagnostic à partir de la 20e semaine.",
      "formulas": [],
      "workedExample": {
        "title": "Les examens de la mère à la PMI (situation d'évaluation, suite)",
        "statement": "Pendant sa grossesse, une mère fait des examens dont les techniques sont l'échographie, la biopsie des villosités choriales, l'amniocentèse et l'embryoscopie. À quel groupe d'examens appartiennent-ils ?",
        "methodSteps": [
          "Ces techniques portent sur l'enfant à naître, le fœtus, et non sur les parents avant conception.",
          "Elles constituent donc les examens prénataux, à distinguer de la consultation prénuptiale des parents.",
          "Leur but commun avec les examens des parents est d'éviter les maladies héréditaires graves."
        ],
        "conclusion": "Ce sont les examens prénataux, second volet des moyens de prévision de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La biopsie fœtale",
          "stepTheme": "La biopsie fœtale",
          "stepBadge": "La biopsie fœtale",
          "paragraphText": "• Biopsie fœtale (biopsie des villosités choriales) : prélèvement de cellules d'origine fœtale du placenta, à l'aide d'une pince à biopsie introduite dans l'utérus.\nElle se fait à partir de la 9e semaine, sous contrôle échographique.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p06_q1",
            "type": "mcq",
            "prompt": "La biopsie fœtale se fait à partir de :",
            "options": [
              "La 17e semaine",
              "La 20e semaine",
              "La 9e semaine",
              "La naissance"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse du document 2 : prélèvement à partir de la 9e semaine."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'amniocentèse",
          "stepTheme": "L'amniocentèse",
          "stepBadge": "L'amniocentèse",
          "paragraphText": "• Amniocentèse : prélèvement du liquide amniotique contenant des cellules fœtales ou du sang fœtal, à l'aide d'une seringue introduite dans l'abdomen.\nElle se fait à partir de la 17e semaine, sous contrôle échographique.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p06_q2",
            "type": "mcq",
            "prompt": "L'amniocentèse prélève :",
            "options": [
              "Des cellules du placenta avec une pince",
              "Le liquide amniotique, avec une seringue introduite dans l'abdomen",
              "Uniquement du sang maternel",
              "Des cellules de la peau du fœtus"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse du document 2 pour l'amniocentèse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un diagnostic à partir de la 20e semaine",
          "stepTheme": "Un diagnostic à partir de la 20e semaine",
          "stepBadge": "Un diagnostic à partir de la 20e semaine",
          "paragraphText": "Dans les deux techniques, les cellules prélevées sont mises en culture.\nLe diagnostic se fait ensuite soit par analyse chromosomique, soit par une analyse biochimique, à partir de la 20e semaine.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p06_q3",
            "type": "mcq",
            "prompt": "Après mise en culture des cellules, le diagnostic se fait à partir de :",
            "options": [
              "La 9e semaine",
              "La 17e semaine",
              "La 20e semaine",
              "La 40e semaine uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse du document 2 : diagnostic à partir de la 20e semaine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Quatre techniques de dépistage prénatal",
          "stepTheme": "Quatre techniques de dépistage prénatal",
          "stepBadge": "Quatre techniques de dépistage prénatal",
          "paragraphText": "La leçon énumère les techniques de dépistage chez le fœtus.\nCe sont l'échographie, la biopsie des villosités choriales, l'amniocentèse et l'embryoscopie.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p06_q4",
            "type": "mcq",
            "prompt": "Laquelle de ces techniques fait partie du dépistage prénatal cité ?",
            "options": [
              "L'embryoscopie",
              "Le groupage sanguin des parents",
              "La mesure du taux sanguin paternel",
              "La consultation prénuptiale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'embryoscopie figure dans la liste des techniques de dépistage sur l'enfant à naître."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser 9e et 17e semaines",
          "stepTheme": "Ne pas inverser 9e et 17e semaines",
          "stepBadge": "Ne pas inverser 9e et 17e semaines",
          "paragraphText": "Piège fréquent : attribuer la 9e semaine à l'amniocentèse et la 17e à la biopsie.\nC'est l'inverse : biopsie des villosités choriales dès la 9e semaine, amniocentèse dès la 17e semaine, toutes deux sous contrôle échographique.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p06_q5",
            "type": "mcq",
            "prompt": "Le prélèvement le plus précoce, dès la 9e semaine, est :",
            "options": [
              "L'amniocentèse",
              "La biopsie fœtale des villosités choriales",
              "L'analyse biochimique",
              "L'embryoscopie selon la leçon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse du document 2 : la biopsie se fait à partir de la 9e semaine, l'amniocentèse à partir de la 17e."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Prélever à partir des villosités choriales ou du liquide amniotique",
          "stepTheme": "Prélever à partir des villosités choriales ou du liquide amniotique",
          "stepBadge": "Prélever à partir des villosités choriales ou du liquide amniotique",
          "paragraphText": "Le document 2 est présenté comme le dépistage de certaines maladies chez le fœtus.\nLes deux matériaux de départ sont les villosités choriales, pour la biopsie, et le liquide amniotique, pour l'amniocentèse.",
          "exercise": {
            "id": "terminale_a1_svt_l06_previsions_genetiques_p06_q6",
            "type": "mcq",
            "prompt": "Le dépistage du document 2 se fait à partir :",
            "options": [
              "Du sang des deux parents uniquement",
              "Des villosités choriales ou du liquide amniotique",
              "Du sérum test uniquement",
              "Des hémoglobines A et S uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Présentation du document 2 de la partie II."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p06_q1",
          "type": "mcq",
          "prompt": "La biopsie fœtale se fait à partir de :",
          "options": [
            "La 17e semaine",
            "La 20e semaine",
            "La 9e semaine",
            "La naissance"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse du document 2 : prélèvement à partir de la 9e semaine."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p06_q2",
          "type": "mcq",
          "prompt": "L'amniocentèse prélève :",
          "options": [
            "Des cellules du placenta avec une pince",
            "Le liquide amniotique, avec une seringue introduite dans l'abdomen",
            "Uniquement du sang maternel",
            "Des cellules de la peau du fœtus"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse du document 2 pour l'amniocentèse."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p06_q3",
          "type": "mcq",
          "prompt": "Après mise en culture des cellules, le diagnostic se fait à partir de :",
          "options": [
            "La 9e semaine",
            "La 17e semaine",
            "La 20e semaine",
            "La 40e semaine uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse du document 2 : diagnostic à partir de la 20e semaine."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p06_q4",
          "type": "mcq",
          "prompt": "Laquelle de ces techniques fait partie du dépistage prénatal cité ?",
          "options": [
            "L'embryoscopie",
            "Le groupage sanguin des parents",
            "La mesure du taux sanguin paternel",
            "La consultation prénuptiale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'embryoscopie figure dans la liste des techniques de dépistage sur l'enfant à naître."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p06_q5",
          "type": "mcq",
          "prompt": "Le prélèvement le plus précoce, dès la 9e semaine, est :",
          "options": [
            "L'amniocentèse",
            "La biopsie fœtale des villosités choriales",
            "L'analyse biochimique",
            "L'embryoscopie selon la leçon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse du document 2 : la biopsie se fait à partir de la 9e semaine, l'amniocentèse à partir de la 17e."
        },
        {
          "id": "terminale_a1_svt_l06_previsions_genetiques_p06_q6",
          "type": "mcq",
          "prompt": "Le dépistage du document 2 se fait à partir :",
          "options": [
            "Du sang des deux parents uniquement",
            "Des villosités choriales ou du liquide amniotique",
            "Du sérum test uniquement",
            "Des hémoglobines A et S uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Présentation du document 2 de la partie II."
        }
      ]
    }
  ]
};
