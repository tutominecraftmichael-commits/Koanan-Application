import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère A_L3_Les Anomalies chromosomiques.pdf (Mon école à la maison ; le document l’intitule « Leçon 1 » du thème « Problèmes liés à la reproduction humaine ») ». Première A1 et A2.
// Fichier généré (scratchpad build_1re_a_svt.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_A_L03_ANOMALIES_CHROMOSOMIQUES: CurriculumChapter = {
  "id": "premiere_a1_svt_l03_anomalies_chromosomiques",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 3,
  "title": "Leçon 3 : Les anomalies chromosomiques",
  "summary": "Caryotype et formule chromosomique, trisomie 21, syndromes de Turner et de Klinefelter, cri du chat ; méiose, gamètes anormaux, fécondation et rôle de l’âge de la mère.",
  "officialVolumeHours": 5,
  "contentVersion": 2,
  "source": "SVT 1ère A_L3_Les Anomalies chromosomiques.pdf (Mon école à la maison ; le document l’intitule « Leçon 1 » du thème « Problèmes liés à la reproduction humaine »)",
  "points": [
    {
      "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01",
      "order": 1,
      "title": "Le caryotype humain",
      "summary": "46 chromosomes : 22 paires d’autosomes et une paire de chromosomes sexuels.",
      "conceptExplanation": "Situation : inquiète du manque de réactivité de son fœtus de six mois, une mère consulte son gynécologue. Après une amniocentèse, le caryotype du fœtus révèle trois chromosomes 21. Les élèves veulent identifier les maladies liées aux anomalies chromosomiques et leur origine.\n- Le caryotype est l’ensemble des chromosomes d’une cellule, photographiés puis classés par paires et par taille décroissante.\n- Pour le réaliser : on cultive des cellules, on arrête leur division avec de la colchicine, on prélève, on monte la préparation, on observe et on photographie, puis on découpe et on classe les chromosomes.\n- L’être humain possède 46 chromosomes, soit 23 paires. 22 paires sont identiques dans les deux sexes : ce sont les autosomes. La 23e paire, qui détermine le sexe, est celle des chromosomes sexuels (gonosomes ou hétérochromosomes) : XX chez la femme, XY chez l’homme.\n- Formule chromosomique : homme = 44 autosomes + XY ; femme = 44 autosomes + XX.",
      "keyRule": "46 chromosomes = 44 autosomes + 2 chromosomes sexuels. Homme : 44 + XY. Femme : 44 + XX.",
      "formulas": [],
      "workedExample": {
        "title": "Écrire une formule chromosomique",
        "statement": "Un caryotype montre 22 paires d’autosomes et une paire XX. Écrivez la formule et le sexe.",
        "methodSteps": [
          "22 paires d’autosomes = 44 autosomes.",
          "Chromosomes sexuels XX : c’est une femme."
        ],
        "conclusion": "Formule : 44 autosomes + XX (46 chromosomes), femme saine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Caryotype",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce qu’un caryotype ?",
          "paragraphText": "Le **caryotype** est l’ensemble des **chromosomes** d’une cellule, **classés par paires** et par **taille décroissante**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’un caryotype ?",
            "options": [
              "L’ensemble des chromosomes d’une cellule, classés par paires et par taille décroissante",
              "Une maladie du sang",
              "Un type de cellule sexuelle",
              "Le nombre total de cellules du corps"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le caryotype permet de compter et d’examiner les chromosomes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "46",
          "stepTheme": "Nombre",
          "stepTitle": "Combien de chromosomes ?",
          "paragraphText": "Une personne saine possède **46 chromosomes**, soit **23 paires**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q2",
            "type": "mcq",
            "prompt": "Combien de chromosomes compte le caryotype d’un être humain sain ?",
            "options": [
              "46, soit 23 paires",
              "23, soit 46 paires",
              "47",
              "44"
            ],
            "correctAnswerIndex": 0,
            "explanation": "23 paires × 2 = 46 chromosomes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Autosomes",
          "stepTheme": "22 paires",
          "stepTitle": "Les autosomes",
          "paragraphText": "Les **22 paires** identiques chez l’homme et chez la femme sont les **autosomes**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q3",
            "type": "mcq",
            "prompt": "Comment appelle-t-on les 22 paires de chromosomes identiques chez l’homme et chez la femme ?",
            "options": [
              "Les autosomes",
              "Les gonosomes",
              "Les gamètes",
              "Les chiasmas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Auto- : ils sont les mêmes dans les deux sexes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Gonosomes",
          "stepTheme": "23e paire",
          "stepTitle": "Les chromosomes sexuels",
          "paragraphText": "La **23e paire** détermine le sexe : ce sont les **chromosomes sexuels** (gonosomes ou hétérochromosomes), **XX** chez la femme, **XY** chez l’homme.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q4",
            "type": "mcq",
            "prompt": "Quelle paire de chromosomes distingue l’homme de la femme ?",
            "options": [
              "La 23e paire, celle des chromosomes sexuels (XX ou XY)",
              "La paire 21",
              "La paire 1",
              "Aucune paire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "XX : femme ; XY : homme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Formule",
          "stepTheme": "À retenir",
          "stepTitle": "La formule chromosomique",
          "paragraphText": "Homme : **44 autosomes + XY**. Femme : **44 autosomes + XX**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q5",
            "type": "mcq",
            "prompt": "Quelle est la formule chromosomique d’un homme sain ?",
            "options": [
              "44 autosomes + XY",
              "44 autosomes + XX",
              "44 autosomes + XYY",
              "45 autosomes + XY"
            ],
            "correctAnswerIndex": 0,
            "explanation": "44 autosomes et les chromosomes sexuels X et Y."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Formules chromosomiques",
            "caption": "Une personne saine a 46 chromosomes : 44 autosomes et 2 chromosomes sexuels.",
            "tableData": {
              "headers": [
                "Personne",
                "Formule",
                "Nombre total"
              ],
              "rows": [
                [
                  "Homme sain",
                  "44 autosomes + XY",
                  46
                ],
                [
                  "Femme saine",
                  "44 autosomes + XX",
                  46
                ],
                [
                  "Trisomie 21",
                  "45 autosomes + XX ou XY",
                  47
                ],
                [
                  "Syndrome de Turner",
                  "44 autosomes + X",
                  45
                ],
                [
                  "Syndrome de Klinefelter",
                  "44 autosomes + XXY",
                  47
                ],
                [
                  "Syndrome XYY",
                  "44 autosomes + XYY",
                  47
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Colchicine",
          "stepTheme": "Technique",
          "stepTitle": "Réaliser un caryotype",
          "paragraphText": "On cultive des cellules, on **arrête leur division avec la colchicine**, on photographie les chromosomes, puis on les **découpe** et on les **classe**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q6",
            "type": "mcq",
            "prompt": "Lors de la réalisation d’un caryotype, à quoi sert la colchicine ?",
            "options": [
              "À arrêter la division cellulaire pour observer les chromosomes",
              "À colorer le sang",
              "À tuer les microbes",
              "À séparer les gamètes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les chromosomes sont bien visibles pendant la division : on la bloque."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Activité",
          "stepTitle": "Autosomes ou gonosomes ?",
          "paragraphText": "Ce sont les **autosomes** qui sont identiques dans les deux sexes ; les **gonosomes** (XX ou XY) **diffèrent**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q7",
            "type": "mcq",
            "prompt": "Un élève affirme : « Les gonosomes sont les chromosomes identiques chez l’homme et chez la femme. » Est-ce exact ?",
            "options": [
              "Non : ce sont les autosomes ; les gonosomes (XX ou XY) diffèrent selon le sexe",
              "Oui, c’est exact",
              "Non : les gonosomes n’existent que chez la femme",
              "Oui, mais seulement chez l’enfant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Gonosomes = chromosomes sexuels, différents selon le sexe."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’un caryotype ?",
          "options": [
            "L’ensemble des chromosomes d’une cellule, classés par paires et par taille décroissante",
            "Une maladie du sang",
            "Un type de cellule sexuelle",
            "Le nombre total de cellules du corps"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le caryotype permet de compter et d’examiner les chromosomes."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q2",
          "type": "mcq",
          "prompt": "Combien de chromosomes compte le caryotype d’un être humain sain ?",
          "options": [
            "46, soit 23 paires",
            "23, soit 46 paires",
            "47",
            "44"
          ],
          "correctAnswerIndex": 0,
          "explanation": "23 paires × 2 = 46 chromosomes."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les 22 paires de chromosomes identiques chez l’homme et chez la femme ?",
          "options": [
            "Les autosomes",
            "Les gonosomes",
            "Les gamètes",
            "Les chiasmas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Auto- : ils sont les mêmes dans les deux sexes."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q4",
          "type": "mcq",
          "prompt": "Quelle paire de chromosomes distingue l’homme de la femme ?",
          "options": [
            "La 23e paire, celle des chromosomes sexuels (XX ou XY)",
            "La paire 21",
            "La paire 1",
            "Aucune paire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "XX : femme ; XY : homme."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q5",
          "type": "mcq",
          "prompt": "Quelle est la formule chromosomique d’un homme sain ?",
          "options": [
            "44 autosomes + XY",
            "44 autosomes + XX",
            "44 autosomes + XYY",
            "45 autosomes + XY"
          ],
          "correctAnswerIndex": 0,
          "explanation": "44 autosomes et les chromosomes sexuels X et Y."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q6",
          "type": "mcq",
          "prompt": "Lors de la réalisation d’un caryotype, à quoi sert la colchicine ?",
          "options": [
            "À arrêter la division cellulaire pour observer les chromosomes",
            "À colorer le sang",
            "À tuer les microbes",
            "À séparer les gamètes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les chromosomes sont bien visibles pendant la division : on la bloque."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q7",
          "type": "mcq",
          "prompt": "Un élève affirme : « Les gonosomes sont les chromosomes identiques chez l’homme et chez la femme. » Est-ce exact ?",
          "options": [
            "Non : ce sont les autosomes ; les gonosomes (XX ou XY) diffèrent selon le sexe",
            "Oui, c’est exact",
            "Non : les gonosomes n’existent que chez la femme",
            "Oui, mais seulement chez l’enfant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Gonosomes = chromosomes sexuels, différents selon le sexe."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02",
      "order": 2,
      "title": "Les maladies chromosomiques",
      "summary": "Trisomie 21, Turner, Klinefelter, XYY, cri du chat : anomalies de nombre et de structure.",
      "conceptExplanation": "- Une anomalie chromosomique est un changement du nombre des chromosomes (un en plus ou en moins) ou de leur structure (perte d’un fragment). Elle entraîne une maladie plus ou moins grave.\n- Trisomie 21 (syndrome de Down) : trois chromosomes 21, soit 47 chromosomes. Le mot « mongolisme », employé par le document, est ancien et aujourd’hui évité : on dit trisomie 21.\n- Syndrome de Turner : un seul chromosome sexuel X (44 autosomes + X, 45 chromosomes) ; il touche les filles.\n- Syndrome de Klinefelter : trois chromosomes sexuels XXY (47 chromosomes) ; il touche les garçons.\n- Syndrome XYY : deux chromosomes Y (44 autosomes + XYY, 47 chromosomes).\n- Maladie du cri du chat : perte (délétion) du bras court du chromosome 5 ; 46 chromosomes, mais un chromosome 5 amputé : c’est une anomalie de structure.\n- Conclusion : les anomalies chromosomiques entraînent des maladies génétiques.\n- Correction du document : il appelle le syndrome XYY « chromosomes de crime ». Cette vieille idée, qui associait le chromosome Y supplémentaire à la criminalité, a été abandonnée : on parle du syndrome XYY, et la plupart des personnes concernées vivent normalement.",
      "keyRule": "Nombre : trisomie 21 (47), Turner (45, X), Klinefelter (47, XXY), XYY (47). Structure : cri du chat (chromosome 5 amputé).",
      "formulas": [],
      "workedExample": {
        "title": "Identifier une anomalie sur un caryotype",
        "statement": "Un caryotype compte 47 chromosomes, avec trois chromosomes 21 et deux X. Identifiez l’anomalie.",
        "methodSteps": [
          "47 chromosomes : un chromosome en trop.",
          "Trois chromosomes 21 : trisomie 21 ; XX : c’est une fille."
        ],
        "conclusion": "Fille atteinte de trisomie 21 (45 autosomes + XX)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Anomalie",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce qu’une anomalie chromosomique ?",
          "paragraphText": "Une **anomalie chromosomique** est un changement du **nombre** (un chromosome en plus ou en moins) ou de la **structure** (fragment perdu) des chromosomes.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q1",
            "type": "mcq",
            "prompt": "Qu’appelle-t-on une anomalie chromosomique ?",
            "options": [
              "Un changement du nombre ou de la structure des chromosomes",
              "Une fracture d’un os",
              "Une infection par un microbe",
              "Un manque de vitamines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Nombre ou structure : deux sortes d’anomalies."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Quelques anomalies chromosomiques",
            "caption": "Anomalie de nombre (un chromosome en plus ou en moins) ou de structure (fragment perdu).",
            "tableData": {
              "headers": [
                "Anomalie",
                "Garniture chromosomique",
                "Maladie"
              ],
              "rows": [
                [
                  "3 chromosomes 21",
                  "47 dont 3 chromosomes 21",
                  "Trisomie 21 (syndrome de Down)"
                ],
                [
                  "Un seul chromosome X",
                  "44 autosomes + X (45)",
                  "Syndrome de Turner (fille)"
                ],
                [
                  "XXY",
                  "44 autosomes + XXY (47)",
                  "Syndrome de Klinefelter (garçon)"
                ],
                [
                  "Deux chromosomes Y",
                  "44 autosomes + XYY (47)",
                  "Syndrome XYY"
                ],
                [
                  "Bras court du chromosome 5 perdu",
                  "46 dont un chromosome 5 amputé",
                  "Maladie du cri du chat"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Trisomie 21",
          "stepTheme": "Syndrome de Down",
          "stepTitle": "La trisomie 21",
          "paragraphText": "La **trisomie 21** (syndrome de Down) est due à la présence de **trois chromosomes 21** : la personne a **47 chromosomes**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q2",
            "type": "mcq",
            "prompt": "Quelle anomalie provoque la trisomie 21 (syndrome de Down) ?",
            "options": [
              "La présence de trois chromosomes 21, soit 47 chromosomes",
              "L’absence d’un chromosome X",
              "La perte d’un fragment du chromosome 5",
              "La présence de deux chromosomes Y"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tri- = trois chromosomes 21."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Turner",
          "stepTheme": "Un seul X",
          "stepTitle": "Le syndrome de Turner",
          "paragraphText": "Le **syndrome de Turner** touche les filles : elles n’ont **qu’un seul chromosome sexuel X** (44 autosomes + X, **45** chromosomes).",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q3",
            "type": "mcq",
            "prompt": "Quelle est la garniture chromosomique d’une personne atteinte du syndrome de Turner ?",
            "options": [
              "44 autosomes + X (un seul chromosome sexuel, 45 chromosomes)",
              "44 autosomes + XXY",
              "45 autosomes + XY",
              "44 autosomes + XYY"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il manque un chromosome sexuel."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Klinefelter",
          "stepTheme": "XXY",
          "stepTitle": "Le syndrome de Klinefelter",
          "paragraphText": "Le **syndrome de Klinefelter** touche les garçons : ils ont **trois chromosomes sexuels XXY** (**47** chromosomes).",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q4",
            "type": "mcq",
            "prompt": "À quoi est dû le syndrome de Klinefelter ?",
            "options": [
              "À la présence de trois chromosomes sexuels XXY",
              "À la présence d’un seul chromosome X",
              "À la présence de trois chromosomes 21",
              "À la perte d’un bras du chromosome 5"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un X en plus chez un garçon : XXY."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Cri du chat",
          "stepTheme": "Structure",
          "stepTitle": "La maladie du cri du chat",
          "paragraphText": "Dans la **maladie du cri du chat**, le **bras court du chromosome 5** est perdu (délétion). Le nombre reste **46**, mais un chromosome est **amputé**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q5",
            "type": "mcq",
            "prompt": "La maladie du cri du chat est due à la perte (délétion) du bras court d’un chromosome 5. Combien de chromosomes compte le malade ?",
            "options": [
              "46, mais un chromosome 5 est amputé",
              "47",
              "45",
              "44"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Rien en plus ni en moins : un chromosome est abîmé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Nombre ou structure",
          "stepTheme": "Classer",
          "stepTitle": "Anomalie de structure",
          "paragraphText": "Trisomie 21, Turner, Klinefelter, XYY : anomalies de **nombre**. Cri du chat : anomalie de **structure**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces maladies est due à une anomalie de structure, et non de nombre, des chromosomes ?",
            "options": [
              "La maladie du cri du chat",
              "La trisomie 21",
              "Le syndrome de Turner",
              "Le syndrome de Klinefelter"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seul le cri du chat garde 46 chromosomes avec un chromosome amputé."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Syndrome XYY",
          "stepTheme": "Erreur du document",
          "stepTitle": "Le « chromosome du crime » n’existe pas",
          "paragraphText": "Le document parle de « **chromosomes de crime** » pour la formule 44 + XYY. Cette vieille idée a été **abandonnée** : on parle du **syndrome XYY**, et la plupart des personnes concernées vivent normalement.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q7",
            "type": "mcq",
            "prompt": "Une personne de formule 44 autosomes + XYY est-elle destinée à devenir criminelle ?",
            "options": [
              "Non : on parle du syndrome XYY ; l’idée d’un « chromosome du crime » a été abandonnée",
              "Oui : c’est le chromosome du crime",
              "Oui : dans tous les cas",
              "Non : car c’est forcément une femme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un chromosome ne décide pas d’une conduite criminelle."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q1",
          "type": "mcq",
          "prompt": "Qu’appelle-t-on une anomalie chromosomique ?",
          "options": [
            "Un changement du nombre ou de la structure des chromosomes",
            "Une fracture d’un os",
            "Une infection par un microbe",
            "Un manque de vitamines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Nombre ou structure : deux sortes d’anomalies."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q2",
          "type": "mcq",
          "prompt": "Quelle anomalie provoque la trisomie 21 (syndrome de Down) ?",
          "options": [
            "La présence de trois chromosomes 21, soit 47 chromosomes",
            "L’absence d’un chromosome X",
            "La perte d’un fragment du chromosome 5",
            "La présence de deux chromosomes Y"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tri- = trois chromosomes 21."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q3",
          "type": "mcq",
          "prompt": "Quelle est la garniture chromosomique d’une personne atteinte du syndrome de Turner ?",
          "options": [
            "44 autosomes + X (un seul chromosome sexuel, 45 chromosomes)",
            "44 autosomes + XXY",
            "45 autosomes + XY",
            "44 autosomes + XYY"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il manque un chromosome sexuel."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q4",
          "type": "mcq",
          "prompt": "À quoi est dû le syndrome de Klinefelter ?",
          "options": [
            "À la présence de trois chromosomes sexuels XXY",
            "À la présence d’un seul chromosome X",
            "À la présence de trois chromosomes 21",
            "À la perte d’un bras du chromosome 5"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un X en plus chez un garçon : XXY."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q5",
          "type": "mcq",
          "prompt": "La maladie du cri du chat est due à la perte (délétion) du bras court d’un chromosome 5. Combien de chromosomes compte le malade ?",
          "options": [
            "46, mais un chromosome 5 est amputé",
            "47",
            "45",
            "44"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Rien en plus ni en moins : un chromosome est abîmé."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces maladies est due à une anomalie de structure, et non de nombre, des chromosomes ?",
          "options": [
            "La maladie du cri du chat",
            "La trisomie 21",
            "Le syndrome de Turner",
            "Le syndrome de Klinefelter"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seul le cri du chat garde 46 chromosomes avec un chromosome amputé."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q7",
          "type": "mcq",
          "prompt": "Une personne de formule 44 autosomes + XYY est-elle destinée à devenir criminelle ?",
          "options": [
            "Non : on parle du syndrome XYY ; l’idée d’un « chromosome du crime » a été abandonnée",
            "Oui : c’est le chromosome du crime",
            "Oui : dans tous les cas",
            "Non : car c’est forcément une femme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un chromosome ne décide pas d’une conduite criminelle."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03",
      "order": 3,
      "title": "La méiose et les gamètes anormaux",
      "summary": "Méiose normale ; paire qui ne se sépare pas ; chromosome cassé.",
      "conceptExplanation": "- La méiose est la division cellulaire qui, à partir d’une cellule diploïde (2n chromosomes, par paires), produit des cellules haploïdes (n chromosomes) : les gamètes. Chez l’Homme, 2n = 46 et n = 23.\n- À l’anaphase I, les deux chromosomes homologues de chaque paire (le bivalent) se séparent normalement et partent chacun vers un pôle.\n- Accident 1 : une paire ne se sépare pas et migre entière vers un pôle. Dans une cellule où 2n = 4, on obtient des cellules à n = 3 et à n = 1 au lieu de n = 2 : des gamètes anormaux, avec un chromosome en trop ou en moins.\n- Accident 2 : à la métaphase I, les chromatides non sœurs d’un bivalent se touchent en des points appelés chiasmas. Lors de la séparation, une cassure peut faire perdre un fragment de chromatide : le chromosome est amputé de certains gènes et le gamète est anormal.\n- Ces accidents peuvent se produire pendant la formation des spermatozoïdes comme pendant celle des ovules.",
      "keyRule": "Méiose : 2n → n. Paire non séparée → gamètes à n + 1 ou n − 1. Cassure → chromosome amputé.",
      "formulas": [],
      "workedExample": {
        "title": "Prévoir les gamètes après un accident",
        "statement": "Chez l’Homme (2n = 46), la paire 21 ne se sépare pas à l’anaphase I. Quels gamètes obtient-on ?",
        "methodSteps": [
          "Normalement, chaque gamète reçoit un chromosome 21 et compte 23 chromosomes.",
          "La paire 21 part entière d’un côté : un côté a deux chromosomes 21, l’autre aucun."
        ],
        "conclusion": "Des gamètes à 24 chromosomes (deux 21) et à 22 chromosomes (aucun 21)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Méiose",
          "stepTheme": "Gamètes",
          "stepTitle": "La méiose",
          "paragraphText": "La **méiose** produit des **gamètes haploïdes** (n = **23** chez l’Homme) à partir de cellules **diploïdes** (2n = **46**).",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q1",
            "type": "mcq",
            "prompt": "Que produit la méiose chez l’être humain ?",
            "options": [
              "Des gamètes à 23 chromosomes, à partir de cellules à 46 chromosomes",
              "Des cellules à 92 chromosomes",
              "Des cellules à 46 chromosomes identiques à la cellule mère",
              "Des globules rouges"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La méiose divise par deux le nombre de chromosomes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Diploïde",
          "stepTheme": "Vocabulaire",
          "stepTitle": "Diploïde et haploïde",
          "paragraphText": "Une cellule dont les chromosomes vont **par paires** (2n) est **diploïde** ; une cellule qui n’en a qu’**un de chaque paire** (n) est **haploïde**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q2",
            "type": "mcq",
            "prompt": "Une cellule possède ses chromosomes par paires (2n). Comment la qualifie-t-on ?",
            "options": [
              "Diploïde",
              "Haploïde",
              "Trisomique",
              "Monosomique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Di- = deux exemplaires de chaque chromosome."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Anaphase I",
          "stepTheme": "Méiose normale",
          "stepTitle": "La séparation des paires",
          "paragraphText": "À l’**anaphase I**, les deux chromosomes de chaque paire se **séparent** et partent **chacun vers un pôle**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q3",
            "type": "mcq",
            "prompt": "Lors de l’anaphase I d’une méiose normale, que deviennent les deux chromosomes d’une même paire ?",
            "options": [
              "Ils se séparent et partent chacun vers un pôle de la cellule",
              "Ils restent ensemble au même pôle",
              "Ils fusionnent en un seul chromosome",
              "Ils disparaissent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque gamète reçoit ainsi un chromosome de chaque paire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Non-séparation",
          "stepTheme": "Document 2",
          "stepTitle": "Une paire qui ne se sépare pas",
          "paragraphText": "Si une paire **migre entière** vers un pôle, une cellule reçoit **un chromosome en trop**, l’autre **un en moins** : avec 2n = 4, on obtient **n = 3** et **n = 1** au lieu de 2.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q4",
            "type": "mcq",
            "prompt": "Dans une cellule où 2n = 4, une paire de chromosomes ne se sépare pas à l’anaphase I et migre entière vers un pôle. Combien de chromosomes auront les gamètes formés ?",
            "options": [
              "3 pour les uns, 1 pour les autres, au lieu de 2",
              "2 pour tous",
              "4 pour tous",
              "Aucun chromosome"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La paire entière va d’un côté : 2 + 1 = 3 et 1 + 0 = 1."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Une paire qui ne se sépare pas",
            "caption": "Dans une cellule où 2n = 4, une paire migre entière vers un pôle à l’anaphase I : les gamètes ont 3 ou 1 chromosome au lieu de 2.",
            "svgContent": "<svg viewBox=\"0 0 560 220\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Cellule 2n = 4 ; non-séparation d’une paire ; cellules n = 3 et n = 1 ; gamètes anormaux\"><rect x=\"15\" y=\"80\" width=\"130\" height=\"62\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"80\" y=\"107.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Cellule mère</text><text x=\"80\" y=\"122.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">2n = 4</text><text x=\"80\" y=\"42\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#EF4444\">anaphase I :</text><text x=\"80\" y=\"55\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#EF4444\">une paire ne</text><text x=\"80\" y=\"68\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#EF4444\">se sépare pas</text><line x1=\"147\" y1=\"100\" x2=\"207.7\" y2=\"55.3\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"215,50 204.8,51.3 210.7,59.4\" fill=\"#94A3B8\"/><line x1=\"147\" y1=\"122\" x2=\"207.7\" y2=\"166.7\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"215,172 210.7,162.6 204.8,170.7\" fill=\"#94A3B8\"/><rect x=\"220\" y=\"20\" width=\"130\" height=\"58\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"285\" y=\"45.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Cellule n = 3</text><text x=\"285\" y=\"60.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">1 chromosome en trop</text><rect x=\"220\" y=\"144\" width=\"130\" height=\"58\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"285\" y=\"169.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Cellule n = 1</text><text x=\"285\" y=\"184.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">1 chromosome en moins</text><line x1=\"352\" y1=\"49\" x2=\"401.0\" y2=\"49.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"410,49 401.0,44.0 401.0,54.0\" fill=\"#94A3B8\"/><line x1=\"352\" y1=\"173\" x2=\"401.0\" y2=\"173.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"410,173 401.0,168.0 401.0,178.0\" fill=\"#94A3B8\"/><rect x=\"415\" y=\"20\" width=\"135\" height=\"58\" rx=\"10\" fill=\"#EF4444\" fill-opacity=\"0.14\" stroke=\"#EF4444\" stroke-width=\"2\"/><text x=\"482.5\" y=\"45.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">2 gamètes</text><text x=\"482.5\" y=\"60.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">à 3 chromosomes</text><rect x=\"415\" y=\"144\" width=\"135\" height=\"58\" rx=\"10\" fill=\"#EF4444\" fill-opacity=\"0.14\" stroke=\"#EF4444\" stroke-width=\"2\"/><text x=\"482.5\" y=\"169.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">2 gamètes</text><text x=\"482.5\" y=\"184.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">à 1 chromosome</text><text x=\"482\" y=\"110\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">Normal : n = 2</text></svg>"
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Chiasma",
          "stepTheme": "Document 3",
          "stepTitle": "Bivalent et chiasmas",
          "paragraphText": "Un **bivalent** est une paire de chromosomes homologues appariés. Les **chiasmas** sont les zones de contact entre **chromatides non sœurs**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q5",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la zone de contact entre deux chromatides non sœurs d’un bivalent pendant la méiose ?",
            "options": [
              "Un chiasma",
              "Un centromère",
              "Une synapse",
              "Un caryotype"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les chiasmas sont visibles à la métaphase I."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Cassure",
          "stepTheme": "Fragment perdu",
          "stepTitle": "Un chromosome amputé",
          "paragraphText": "Lors de la séparation, une **cassure** peut faire **perdre un fragment** : le chromosome est **amputé de gènes**, le gamète est **anormal**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q6",
            "type": "mcq",
            "prompt": "Pendant la méiose, un chromosome se casse et perd un fragment. Quelle conséquence cela a-t-il pour le gamète formé ?",
            "options": [
              "Il porte un chromosome amputé de certains gènes : c’est un gamète anormal",
              "Il devient diploïde",
              "Il devient plus fertile",
              "Aucune conséquence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les gènes du fragment perdu manquent."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Texte lacunaire",
          "stepTheme": "Activité",
          "stepTitle": "Compléter la définition de la méiose",
          "paragraphText": "La méiose est la division qui, à partir d’une cellule **diploïde**, permet d’obtenir des cellules **haploïdes** appelées gamètes.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q7",
            "type": "mcq",
            "prompt": "Complète : « La méiose est la division cellulaire qui, à partir d’une cellule …, permet d’obtenir des cellules … appelées gamètes. »",
            "options": [
              "diploïde ; haploïdes",
              "haploïde ; diploïdes",
              "trisomique ; normales",
              "sexuelle ; musculaires"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On passe de 2n (diploïde) à n (haploïde)."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepBadge": "Père ou mère ?",
          "stepTheme": "À savoir",
          "stepTitle": "L’accident peut venir des deux parents",
          "paragraphText": "Une paire qui ne se sépare pas peut se produire lors de la formation des **spermatozoïdes** comme des **ovules**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q8",
            "type": "mcq",
            "prompt": "La non-séparation d’une paire de chromosomes pendant la méiose peut-elle se produire chez le père comme chez la mère ?",
            "options": [
              "Oui, chez l’un ou l’autre des parents",
              "Non, seulement chez le père",
              "Non, seulement chez la mère",
              "Non, jamais chez l’être humain"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux parents font une méiose pour produire leurs gamètes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q1",
          "type": "mcq",
          "prompt": "Que produit la méiose chez l’être humain ?",
          "options": [
            "Des gamètes à 23 chromosomes, à partir de cellules à 46 chromosomes",
            "Des cellules à 92 chromosomes",
            "Des cellules à 46 chromosomes identiques à la cellule mère",
            "Des globules rouges"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La méiose divise par deux le nombre de chromosomes."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q2",
          "type": "mcq",
          "prompt": "Une cellule possède ses chromosomes par paires (2n). Comment la qualifie-t-on ?",
          "options": [
            "Diploïde",
            "Haploïde",
            "Trisomique",
            "Monosomique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Di- = deux exemplaires de chaque chromosome."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q3",
          "type": "mcq",
          "prompt": "Lors de l’anaphase I d’une méiose normale, que deviennent les deux chromosomes d’une même paire ?",
          "options": [
            "Ils se séparent et partent chacun vers un pôle de la cellule",
            "Ils restent ensemble au même pôle",
            "Ils fusionnent en un seul chromosome",
            "Ils disparaissent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque gamète reçoit ainsi un chromosome de chaque paire."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q4",
          "type": "mcq",
          "prompt": "Dans une cellule où 2n = 4, une paire de chromosomes ne se sépare pas à l’anaphase I et migre entière vers un pôle. Combien de chromosomes auront les gamètes formés ?",
          "options": [
            "3 pour les uns, 1 pour les autres, au lieu de 2",
            "2 pour tous",
            "4 pour tous",
            "Aucun chromosome"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La paire entière va d’un côté : 2 + 1 = 3 et 1 + 0 = 1."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la zone de contact entre deux chromatides non sœurs d’un bivalent pendant la méiose ?",
          "options": [
            "Un chiasma",
            "Un centromère",
            "Une synapse",
            "Un caryotype"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les chiasmas sont visibles à la métaphase I."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q6",
          "type": "mcq",
          "prompt": "Pendant la méiose, un chromosome se casse et perd un fragment. Quelle conséquence cela a-t-il pour le gamète formé ?",
          "options": [
            "Il porte un chromosome amputé de certains gènes : c’est un gamète anormal",
            "Il devient diploïde",
            "Il devient plus fertile",
            "Aucune conséquence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les gènes du fragment perdu manquent."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q7",
          "type": "mcq",
          "prompt": "Complète : « La méiose est la division cellulaire qui, à partir d’une cellule …, permet d’obtenir des cellules … appelées gamètes. »",
          "options": [
            "diploïde ; haploïdes",
            "haploïde ; diploïdes",
            "trisomique ; normales",
            "sexuelle ; musculaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On passe de 2n (diploïde) à n (haploïde)."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q8",
          "type": "mcq",
          "prompt": "La non-séparation d’une paire de chromosomes pendant la méiose peut-elle se produire chez le père comme chez la mère ?",
          "options": [
            "Oui, chez l’un ou l’autre des parents",
            "Non, seulement chez le père",
            "Non, seulement chez la mère",
            "Non, jamais chez l’être humain"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux parents font une méiose pour produire leurs gamètes."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04",
      "order": 4,
      "title": "La fécondation et l’âge de la mère",
      "summary": "Gamète anormal + gamète normal ; origine de la trisomie 21, de Turner et de Klinefelter ; risque selon l’âge de la mère.",
      "conceptExplanation": "- La reproduction résulte de la rencontre de deux gamètes. Spermatozoïde normal + ovule normal : cellule-œuf normale à 46 chromosomes. Si l’un des gamètes est anormal, l’enfant peut être malade.\n- Trisomie 21 : un ovule à 24 chromosomes (deux chromosomes 21), fécondé par un spermatozoïde normal à 23 chromosomes, donne une cellule-œuf à 47 chromosomes, trisomique 21.\n- Un gamète à 22 chromosomes (sans chromosome 21) donne une cellule-œuf à un seul chromosome 21 (monosomie) : l’embryon n’est pas viable. Certaines anomalies, incompatibles avec la vie, provoquent un avortement spontané.\n- Syndrome de Klinefelter : spermatozoïde anormal portant X et Y + ovule normal X → XXY. Syndrome de Turner : spermatozoïde sans chromosome sexuel + ovule normal X → X seul.\n- Évaluation : une mère de 48 ans a un enfant de deux ans qui ne marche pas à quatre pattes et présente les traits de la trisomie 21 ; une coépouse est accusée de sorcellerie. Le tableau montre que le pourcentage de naissances d’enfants trisomiques augmente avec l’âge de la mère (0,01 % à 18 ans, 0,35 % à 48 ans, 0,4 % à 53 ans). L’enfant n’a pas été ensorcelé : il souffre d’une anomalie chromosomique dont le risque augmente avec l’âge de la mère.\n- Formule de l’enfant trisomique 21 : 47 chromosomes, soit 45 autosomes + XX (fille) ou 45 autosomes + XY (garçon).",
      "keyRule": "Gamète à 24 (deux 21) + gamète normal à 23 → œuf à 47 : trisomie 21. Le risque augmente avec l’âge de la mère.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la naissance d’un enfant trisomique 21",
        "statement": "Expliquez comment une mère de 48 ans peut avoir un enfant trisomique 21.",
        "methodSteps": [
          "Pendant la méiose de la mère, la paire 21 ne s’est pas séparée : ovule à 24 chromosomes (deux 21).",
          "Fécondé par un spermatozoïde normal (23 chromosomes, un 21), il donne un œuf à 47 chromosomes (trois 21)."
        ],
        "conclusion": "L’enfant est trisomique 21 ; ce risque augmente avec l’âge de la mère. Il n’y a pas d’ensorcellement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepBadge": "Fécondation",
          "stepTheme": "Gamètes normaux",
          "stepTitle": "Deux gamètes normaux",
          "paragraphText": "Ovule normal (**23**) + spermatozoïde normal (**23**) → cellule-œuf normale à **46** chromosomes.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q1",
            "type": "mcq",
            "prompt": "Que donne la fécondation d’un ovule normal (23 chromosomes) par un spermatozoïde normal (23 chromosomes) ?",
            "options": [
              "Une cellule-œuf normale à 46 chromosomes",
              "Une cellule-œuf à 23 chromosomes",
              "Une cellule-œuf trisomique",
              "Un nouveau gamète"
            ],
            "correctAnswerIndex": 0,
            "explanation": "23 + 23 = 46."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Trisomie 21",
          "stepTheme": "Origine",
          "stepTitle": "Un ovule à 24 chromosomes",
          "paragraphText": "Un **ovule à 24** chromosomes (deux 21) fécondé par un **spermatozoïde normal** (23) donne une cellule-œuf à **47** chromosomes, avec **trois chromosomes 21**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q2",
            "type": "mcq",
            "prompt": "Un ovule possède 24 chromosomes, dont deux chromosomes 21. Il est fécondé par un spermatozoïde normal à 23 chromosomes. Quelle cellule-œuf obtient-on ?",
            "options": [
              "Une cellule-œuf à 47 chromosomes, trisomique 21",
              "Une cellule-œuf normale à 46 chromosomes",
              "Une cellule-œuf à 45 chromosomes",
              "Une cellule-œuf à 48 chromosomes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "24 + 23 = 47, avec trois chromosomes 21."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Origine d’une trisomie 21",
            "caption": "Un ovule à 24 chromosomes (deux chromosomes 21) fécondé par un spermatozoïde normal donne une cellule-œuf à 47 chromosomes.",
            "svgContent": "<svg viewBox=\"0 0 560 200\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Ovule à 24 chromosomes dont deux 21, spermatozoïde normal à 23, cellule-œuf à 47 chromosomes trisomique 21\"><rect x=\"15\" y=\"20\" width=\"200\" height=\"62\" rx=\"10\" fill=\"#EC4899\" fill-opacity=\"0.14\" stroke=\"#EC4899\" stroke-width=\"2\"/><text x=\"115\" y=\"47.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Ovule anormal</text><text x=\"115\" y=\"62.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">24 chromosomes, deux 21</text><rect x=\"15\" y=\"118\" width=\"200\" height=\"62\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"115\" y=\"145.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Spermatozoïde normal</text><text x=\"115\" y=\"160.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">23 chromosomes, un 21</text><line x1=\"217\" y1=\"51\" x2=\"309.7\" y2=\"88.6\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"318,92 311.5,84.0 307.8,93.2\" fill=\"#94A3B8\"/><line x1=\"217\" y1=\"149\" x2=\"309.7\" y2=\"111.4\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"318,108 307.8,106.8 311.5,116.0\" fill=\"#94A3B8\"/><text x=\"262\" y=\"104\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">fécondation</text><rect x=\"322\" y=\"66\" width=\"223\" height=\"68\" rx=\"10\" fill=\"#EF4444\" fill-opacity=\"0.14\" stroke=\"#EF4444\" stroke-width=\"2\"/><text x=\"433.5\" y=\"89\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Cellule-œuf</text><text x=\"433.5\" y=\"104\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">47 chromosomes, trois 21</text><text x=\"433.5\" y=\"119\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">trisomie 21</text></svg>"
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Monosomie",
          "stepTheme": "Non viable",
          "stepTitle": "Un gamète sans chromosome 21",
          "paragraphText": "Un gamète à **22** chromosomes (sans 21) + un gamète normal → œuf avec **un seul chromosome 21** (**monosomie**) : l’embryon **n’est pas viable**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q3",
            "type": "mcq",
            "prompt": "Un gamète à 22 chromosomes, sans chromosome 21, s’unit à un gamète normal. Que devient en général l’embryon ?",
            "options": [
              "Il n’a qu’un chromosome 21 (monosomie) et n’est pas viable",
              "Il est parfaitement normal",
              "Il est trisomique 21",
              "Il possède 48 chromosomes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Certaines anomalies sont incompatibles avec la vie : avortement spontané."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Âge de la mère",
          "stepTheme": "Tableau",
          "stepTitle": "Lire le tableau des âges",
          "paragraphText": "Le pourcentage de naissances trisomiques **augmente avec l’âge** de la mère : 0,01 % à 18 ans, 0,35 % à 48 ans.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q4",
            "type": "mcq",
            "prompt": "Pourcentage de naissances d’enfants trisomiques 21 selon l’âge de la mère : 18 ans : 0,01 ; 28 ans : 0,017 ; 38 ans : 0,15 ; 48 ans : 0,35 ; 53 ans : 0,4. Que montre ce tableau ?",
            "options": [
              "Le risque augmente avec l’âge de la mère",
              "Le risque diminue avec l’âge de la mère",
              "Le risque est le même à tout âge",
              "Seules les mères très jeunes ont des enfants trisomiques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Plus la mère est âgée, plus le pourcentage est élevé."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Trisomie 21 et âge de la mère",
            "caption": "Pourcentage de naissances d’enfants trisomiques 21 selon l’âge de la mère.",
            "tableData": {
              "headers": [
                "Âge de la mère (ans)",
                "18",
                "23",
                "28",
                "33",
                "38",
                "43",
                "48",
                "53"
              ],
              "rows": [
                [
                  "Naissances trisomiques (%)",
                  "0,01",
                  "0,015",
                  "0,017",
                  "0,02",
                  "0,15",
                  "0,20",
                  "0,35",
                  "0,4"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Sorcellerie",
          "stepTheme": "Évaluation",
          "stepTitle": "Ni sort ni sorcellerie",
          "paragraphText": "L’enfant n’a **pas été ensorcelé** : il souffre d’une **anomalie chromosomique**, dont le risque **augmente avec l’âge** de la mère.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q5",
            "type": "mcq",
            "prompt": "Une femme de 48 ans a un enfant trisomique 21. Sa coépouse est accusée de l’avoir ensorcelé. Que répond la science ?",
            "options": [
              "L’enfant souffre d’une anomalie chromosomique dont le risque augmente avec l’âge de la mère : ce n’est pas un ensorcellement",
              "C’est bien un ensorcellement",
              "La maladie est contagieuse",
              "L’enfant a attrapé un microbe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La trisomie 21 vient d’un accident de la méiose."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Formule",
          "stepTheme": "Trisomie 21",
          "stepTitle": "La formule d’un garçon trisomique",
          "paragraphText": "Un enfant trisomique 21 a **47** chromosomes : **45 autosomes + XY** pour un garçon, **45 autosomes + XX** pour une fille.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est la formule chromosomique d’un garçon trisomique 21 ?",
            "options": [
              "45 autosomes + XY (47 chromosomes)",
              "44 autosomes + XY",
              "44 autosomes + XXY",
              "45 autosomes + X"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un autosome en plus (le troisième 21) : 45 autosomes."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Klinefelter",
          "stepTheme": "Exercice 2",
          "stepTitle": "Un spermatozoïde XY",
          "paragraphText": "Spermatozoïde anormal **XY** + ovule normal **X** → **XXY** : syndrome de **Klinefelter**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q7",
            "type": "mcq",
            "prompt": "Un spermatozoïde anormal contenant les deux chromosomes sexuels X et Y féconde un ovule normal portant un X. Quelle maladie aura l’enfant ?",
            "options": [
              "Le syndrome de Klinefelter (XXY)",
              "Le syndrome de Turner (X seul)",
              "La trisomie 21",
              "La maladie du cri du chat"
            ],
            "correctAnswerIndex": 0,
            "explanation": "XY + X = XXY."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepBadge": "Turner",
          "stepTheme": "Exercice 2",
          "stepTitle": "Un spermatozoïde sans chromosome sexuel",
          "paragraphText": "Spermatozoïde **sans chromosome sexuel** + ovule normal **X** → **X seul** : syndrome de **Turner**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q8",
            "type": "mcq",
            "prompt": "Un spermatozoïde anormal sans chromosome sexuel féconde un ovule normal portant un X. Quelle maladie aura l’enfant ?",
            "options": [
              "Le syndrome de Turner (44 autosomes + X)",
              "Le syndrome de Klinefelter",
              "La trisomie 21",
              "Le syndrome XYY"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Aucun chromosome sexuel + X = un seul X."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q1",
          "type": "mcq",
          "prompt": "Que donne la fécondation d’un ovule normal (23 chromosomes) par un spermatozoïde normal (23 chromosomes) ?",
          "options": [
            "Une cellule-œuf normale à 46 chromosomes",
            "Une cellule-œuf à 23 chromosomes",
            "Une cellule-œuf trisomique",
            "Un nouveau gamète"
          ],
          "correctAnswerIndex": 0,
          "explanation": "23 + 23 = 46."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q2",
          "type": "mcq",
          "prompt": "Un ovule possède 24 chromosomes, dont deux chromosomes 21. Il est fécondé par un spermatozoïde normal à 23 chromosomes. Quelle cellule-œuf obtient-on ?",
          "options": [
            "Une cellule-œuf à 47 chromosomes, trisomique 21",
            "Une cellule-œuf normale à 46 chromosomes",
            "Une cellule-œuf à 45 chromosomes",
            "Une cellule-œuf à 48 chromosomes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "24 + 23 = 47, avec trois chromosomes 21."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q3",
          "type": "mcq",
          "prompt": "Un gamète à 22 chromosomes, sans chromosome 21, s’unit à un gamète normal. Que devient en général l’embryon ?",
          "options": [
            "Il n’a qu’un chromosome 21 (monosomie) et n’est pas viable",
            "Il est parfaitement normal",
            "Il est trisomique 21",
            "Il possède 48 chromosomes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Certaines anomalies sont incompatibles avec la vie : avortement spontané."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q4",
          "type": "mcq",
          "prompt": "Pourcentage de naissances d’enfants trisomiques 21 selon l’âge de la mère : 18 ans : 0,01 ; 28 ans : 0,017 ; 38 ans : 0,15 ; 48 ans : 0,35 ; 53 ans : 0,4. Que montre ce tableau ?",
          "options": [
            "Le risque augmente avec l’âge de la mère",
            "Le risque diminue avec l’âge de la mère",
            "Le risque est le même à tout âge",
            "Seules les mères très jeunes ont des enfants trisomiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Plus la mère est âgée, plus le pourcentage est élevé."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q5",
          "type": "mcq",
          "prompt": "Une femme de 48 ans a un enfant trisomique 21. Sa coépouse est accusée de l’avoir ensorcelé. Que répond la science ?",
          "options": [
            "L’enfant souffre d’une anomalie chromosomique dont le risque augmente avec l’âge de la mère : ce n’est pas un ensorcellement",
            "C’est bien un ensorcellement",
            "La maladie est contagieuse",
            "L’enfant a attrapé un microbe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La trisomie 21 vient d’un accident de la méiose."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est la formule chromosomique d’un garçon trisomique 21 ?",
          "options": [
            "45 autosomes + XY (47 chromosomes)",
            "44 autosomes + XY",
            "44 autosomes + XXY",
            "45 autosomes + X"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un autosome en plus (le troisième 21) : 45 autosomes."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q7",
          "type": "mcq",
          "prompt": "Un spermatozoïde anormal contenant les deux chromosomes sexuels X et Y féconde un ovule normal portant un X. Quelle maladie aura l’enfant ?",
          "options": [
            "Le syndrome de Klinefelter (XXY)",
            "Le syndrome de Turner (X seul)",
            "La trisomie 21",
            "La maladie du cri du chat"
          ],
          "correctAnswerIndex": 0,
          "explanation": "XY + X = XXY."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q8",
          "type": "mcq",
          "prompt": "Un spermatozoïde anormal sans chromosome sexuel féconde un ovule normal portant un X. Quelle maladie aura l’enfant ?",
          "options": [
            "Le syndrome de Turner (44 autosomes + X)",
            "Le syndrome de Klinefelter",
            "La trisomie 21",
            "Le syndrome XYY"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Aucun chromosome sexuel + X = un seul X."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05",
      "order": 5,
      "title": "Exercice : deux caryotypes de gamètes",
      "summary": "Analyser deux caryotypes de gamètes et déduire la formule de la cellule-œuf.",
      "conceptExplanation": "Situation : un camarade affirme qu’un nouvel individu résulte de l’union des chromosomes du père et de la mère à la fécondation, et que des accidents de la méiose donnent des gamètes anormaux dont l’union provoque des maladies graves. Il présente les caryotypes A et B de deux gamètes qui s’unissent.\n- Analyse : le caryotype A compte 23 autosomes, dont deux chromosomes 21, et un chromosome X, soit 24 chromosomes : c’est un ovule anormal. Le caryotype B compte 22 autosomes et un chromosome Y, soit 23 chromosomes : c’est un spermatozoïde normal.\n- Explication : après la fécondation, la cellule-œuf possède trois chromosomes 21 ; le nombre de chromosomes passe de 46 à 47.\n- Déduction : formule de la cellule-œuf = 45 autosomes + XY. L’enfant sera un garçon atteint de trisomie 21.\n- Vrai ou faux de l’activité : le caryotype est l’ensemble des chromosomes d’un sujet, représentés et classés (vrai) ; la trisomie 21 est due à trois chromosomes 21 (vrai) ; le syndrome de Turner n’est pas dû à « l’absence d’un chromosome Y » : la personne n’a qu’un seul chromosome sexuel, un X (faux) ; les gonosomes ne sont pas identiques dans les deux sexes (faux) ; la formule d’un homme sain n’est pas 44 + XYY mais 44 + XY (faux).\n- Conclusion générale : les anomalies chromosomiques provoquent des maladies et se produisent au cours de la reproduction (méiose, puis fécondation).",
      "keyRule": "Compter autosomes et chromosomes sexuels de chaque gamète, puis additionner : 24 + 23 = 47 → 45 autosomes + XY.",
      "formulas": [],
      "workedExample": {
        "title": "Déduire la formule de la cellule-œuf",
        "statement": "Gamète A : 23 autosomes (dont deux 21) + X. Gamète B : 22 autosomes + Y. Formule de l’œuf ?",
        "methodSteps": [
          "Autosomes : 23 + 22 = 45.",
          "Chromosomes sexuels : X + Y = XY."
        ],
        "conclusion": "Cellule-œuf : 45 autosomes + XY (47 chromosomes) : garçon trisomique 21."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Caryotype A",
          "stepTheme": "Compter",
          "stepTitle": "Analyser le gamète A",
          "paragraphText": "Gamète A : **23 autosomes** (dont **deux chromosomes 21**) + **X** = **24 chromosomes** : un chromosome en trop.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q1",
            "type": "mcq",
            "prompt": "Le caryotype d’un gamète A montre 23 autosomes, dont deux chromosomes 21, et un chromosome X. Combien de chromosomes ce gamète possède-t-il ?",
            "options": [
              "24",
              "23",
              "22",
              "46"
            ],
            "correctAnswerIndex": 0,
            "explanation": "23 autosomes + 1 chromosome sexuel = 24."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Caryotype B",
          "stepTheme": "Compter",
          "stepTitle": "Analyser le gamète B",
          "paragraphText": "Gamète B : **22 autosomes + Y** = **23 chromosomes** : c’est un **spermatozoïde normal**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q2",
            "type": "mcq",
            "prompt": "Le caryotype d’un gamète B montre 22 autosomes et un chromosome Y. Ce gamète est-il normal ?",
            "options": [
              "Oui : c’est un spermatozoïde normal à 23 chromosomes",
              "Non : il lui manque un chromosome 21",
              "Non : il a un chromosome en trop",
              "Non : un gamète doit avoir 46 chromosomes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "22 autosomes + 1 chromosome sexuel = 23, le nombre normal."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Chromosomes 21",
          "stepTheme": "Fécondation",
          "stepTitle": "Combien de chromosomes 21 ?",
          "paragraphText": "Le gamète A apporte **deux** chromosomes 21, le gamète B **un** : la cellule-œuf en a **trois**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q3",
            "type": "mcq",
            "prompt": "Un ovule A (23 autosomes, dont deux chromosomes 21, et un X) est fécondé par un spermatozoïde B (22 autosomes, dont un chromosome 21, et un Y). Combien de chromosomes 21 aura la cellule-œuf ?",
            "options": [
              "3",
              "2",
              "1",
              "4"
            ],
            "correctAnswerIndex": 0,
            "explanation": "2 + 1 = 3 chromosomes 21 : trisomie 21."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Formule",
          "stepTheme": "Déduction",
          "stepTitle": "La formule de la cellule-œuf",
          "paragraphText": "Autosomes : 23 + 22 = **45** ; chromosomes sexuels : X + Y. Formule : **45 autosomes + XY** (47 chromosomes).",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q4",
            "type": "mcq",
            "prompt": "Ovule A : 23 autosomes (dont deux chromosomes 21) + X. Spermatozoïde B : 22 autosomes + Y. Quelle est la formule chromosomique de la cellule-œuf ?",
            "options": [
              "45 autosomes + XY",
              "44 autosomes + XY",
              "45 autosomes + XX",
              "46 autosomes + XY"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On additionne les autosomes, puis les chromosomes sexuels."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Sexe et maladie",
          "stepTheme": "Conclure",
          "stepTitle": "Garçon ou fille ?",
          "paragraphText": "La cellule-œuf porte **XY** : c’est un **garçon** ; avec trois chromosomes 21, il est **trisomique 21**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q5",
            "type": "mcq",
            "prompt": "Ovule A : 23 autosomes (dont deux chromosomes 21) + X. Spermatozoïde B : 22 autosomes + Y. Quels seront le sexe et la maladie de l’enfant ?",
            "options": [
              "Un garçon trisomique 21",
              "Une fille trisomique 21",
              "Un garçon atteint du syndrome de Turner",
              "Une fille atteinte du syndrome de Klinefelter"
            ],
            "correctAnswerIndex": 0,
            "explanation": "XY : garçon ; trois chromosomes 21 : trisomie 21."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Activité",
          "stepTitle": "Le syndrome de Turner",
          "paragraphText": "« Le syndrome de Turner est dû à l’absence d’un chromosome Y » : **faux**. La personne (une fille) n’a **qu’un seul chromosome sexuel, un X**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q6",
            "type": "mcq",
            "prompt": "« Le syndrome de Turner est dû à l’absence d’un chromosome Y dans le caryotype. » Vrai ou faux ?",
            "options": [
              "Faux : la personne n’a qu’un seul chromosome sexuel, un X (44 autosomes + X)",
              "Vrai",
              "Faux : elle a trois chromosomes X",
              "Faux : elle a deux chromosomes Y"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une femme n’a normalement pas de Y : il lui manque un second X."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepBadge": "Bilan",
          "stepTheme": "Conclusion générale",
          "stepTitle": "Ce qu’il faut retenir",
          "paragraphText": "Les anomalies chromosomiques naissent d’**accidents de la méiose** ; l’union d’un gamète anormal à la **fécondation** provoque des **maladies génétiques**.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q7",
            "type": "mcq",
            "prompt": "Que faut-il retenir de cette leçon sur les anomalies chromosomiques ?",
            "options": [
              "Elles naissent d’accidents de la méiose et provoquent des maladies génétiques",
              "Elles sont causées par la sorcellerie",
              "Elles s’attrapent par simple contact",
              "Elles ne touchent que les animaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Méiose anormale, puis fécondation : la maladie est d’origine chromosomique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q1",
          "type": "mcq",
          "prompt": "Le caryotype d’un gamète A montre 23 autosomes, dont deux chromosomes 21, et un chromosome X. Combien de chromosomes ce gamète possède-t-il ?",
          "options": [
            "24",
            "23",
            "22",
            "46"
          ],
          "correctAnswerIndex": 0,
          "explanation": "23 autosomes + 1 chromosome sexuel = 24."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q2",
          "type": "mcq",
          "prompt": "Le caryotype d’un gamète B montre 22 autosomes et un chromosome Y. Ce gamète est-il normal ?",
          "options": [
            "Oui : c’est un spermatozoïde normal à 23 chromosomes",
            "Non : il lui manque un chromosome 21",
            "Non : il a un chromosome en trop",
            "Non : un gamète doit avoir 46 chromosomes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "22 autosomes + 1 chromosome sexuel = 23, le nombre normal."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q3",
          "type": "mcq",
          "prompt": "Un ovule A (23 autosomes, dont deux chromosomes 21, et un X) est fécondé par un spermatozoïde B (22 autosomes, dont un chromosome 21, et un Y). Combien de chromosomes 21 aura la cellule-œuf ?",
          "options": [
            "3",
            "2",
            "1",
            "4"
          ],
          "correctAnswerIndex": 0,
          "explanation": "2 + 1 = 3 chromosomes 21 : trisomie 21."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q4",
          "type": "mcq",
          "prompt": "Ovule A : 23 autosomes (dont deux chromosomes 21) + X. Spermatozoïde B : 22 autosomes + Y. Quelle est la formule chromosomique de la cellule-œuf ?",
          "options": [
            "45 autosomes + XY",
            "44 autosomes + XY",
            "45 autosomes + XX",
            "46 autosomes + XY"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On additionne les autosomes, puis les chromosomes sexuels."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q5",
          "type": "mcq",
          "prompt": "Ovule A : 23 autosomes (dont deux chromosomes 21) + X. Spermatozoïde B : 22 autosomes + Y. Quels seront le sexe et la maladie de l’enfant ?",
          "options": [
            "Un garçon trisomique 21",
            "Une fille trisomique 21",
            "Un garçon atteint du syndrome de Turner",
            "Une fille atteinte du syndrome de Klinefelter"
          ],
          "correctAnswerIndex": 0,
          "explanation": "XY : garçon ; trois chromosomes 21 : trisomie 21."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q6",
          "type": "mcq",
          "prompt": "« Le syndrome de Turner est dû à l’absence d’un chromosome Y dans le caryotype. » Vrai ou faux ?",
          "options": [
            "Faux : la personne n’a qu’un seul chromosome sexuel, un X (44 autosomes + X)",
            "Vrai",
            "Faux : elle a trois chromosomes X",
            "Faux : elle a deux chromosomes Y"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une femme n’a normalement pas de Y : il lui manque un second X."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p05_q7",
          "type": "mcq",
          "prompt": "Que faut-il retenir de cette leçon sur les anomalies chromosomiques ?",
          "options": [
            "Elles naissent d’accidents de la méiose et provoquent des maladies génétiques",
            "Elles sont causées par la sorcellerie",
            "Elles s’attrapent par simple contact",
            "Elles ne touchent que les animaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Méiose anormale, puis fécondation : la maladie est d’origine chromosomique."
        }
      ]
    }
  ]
};
