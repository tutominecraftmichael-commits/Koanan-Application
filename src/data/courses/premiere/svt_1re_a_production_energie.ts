import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère A_L8_LA PRODUCTION DENERGIE PAR LA CELLULE.pdf (Mon école à la maison) ». Première A1 et A2.
// Fichier généré (scratchpad build_1re_a_svt_c.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_A_L08_PRODUCTION_ENERGIE_CELLULE: CurriculumChapter = {
  "id": "premiere_a1_svt_l08_production_energie_cellule",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 8,
  "title": "Leçon 8 : La production d’énergie par la cellule",
  "summary": "Respiration et fermentation chez la levure, nutriments sources d’énergie et ATP, hyaloplasme et mitochondrie, glycolyse, cycle de Krebs, chaîne respiratoire et bilans énergétiques.",
  "officialVolumeHours": 5,
  "contentVersion": 2,
  "source": "SVT 1ère A_L8_LA PRODUCTION DENERGIE PAR LA CELLULE.pdf (Mon école à la maison)",
  "points": [
    {
      "id": "premiere_a1_svt_l08_production_energie_cellule_p01",
      "order": 1,
      "title": "Respiration et fermentation chez la levure",
      "summary": "Avec dioxygène, la levure respire ; sans dioxygène, elle fermente.",
      "conceptExplanation": "Situation : lors d’un match du tournoi OISSU, des élèves de 1re A de Ferkessédougou sont pleins d’énergie. Le médecin explique que cette énergie est produite par les cellules de leur organisme bien alimenté.\n- Expérience : on cultive la même quantité de levures de bière dans deux milieux identiques (eau + glucose, bonne température). Puis certaines levures sont placées en milieu avec dioxygène, les autres sans dioxygène.\n- Avec dioxygène : les levures se multiplient beaucoup, le dioxygène diminue, du CO₂ se dégage ; le glucose est dégradé totalement et libère beaucoup d’énergie (environ 2 860 kJ par mole de glucose) : c’est la respiration, voie aérobie.\n- Sans dioxygène : les levures se multiplient peu mais restent en vie ; le glucose est dégradé partiellement en éthanol (alcool) et CO₂ ; peu d’énergie est libérée (environ 167 kJ par mole) : c’est la fermentation alcoolique, voie anaérobie.\n- Correction du document : il écrit « 2 815 kJ pour 1 g de glucose » et « 167 kJ pour 1 g » ; ces valeurs correspondent à une mole de glucose (180 g), pas à un gramme. Un gramme de glucose fournit environ 17 kJ.",
      "keyRule": "Avec O₂ : respiration (aérobie), dégradation totale, beaucoup d’énergie. Sans O₂ : fermentation (anaérobie), éthanol + CO₂, peu d’énergie.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la croissance des levures",
        "statement": "Pourquoi les levures se multiplient-elles beaucoup plus avec du dioxygène ?",
        "methodSteps": [
          "Avec O₂, le glucose est dégradé totalement par la respiration.",
          "Il libère environ 17 fois plus d’énergie, utilisée pour fabriquer de nouvelles cellules."
        ],
        "conclusion": "Plus d’énergie disponible = plus de synthèses = plus de levures."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Expérience",
          "stepTheme": "Levures",
          "stepTitle": "Deux milieux, une seule différence",
          "paragraphText": "Même quantité de **levures**, même milieu **eau + glucose**, même température. Seule différence : un milieu **avec dioxygène**, l’autre **sans**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q1",
            "type": "mcq",
            "prompt": "Dans l’expérience des levures de bière, quelle est la seule différence entre les deux milieux de culture ?",
            "options": [
              "La présence ou l’absence de dioxygène",
              "La quantité de glucose",
              "La température",
              "L’espèce de levure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On ne change qu’un facteur à la fois."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Levures de bière avec ou sans dioxygène",
            "caption": "Même quantité de levures, même milieu (eau + glucose), même température ; seule la présence de dioxygène change.",
            "tableData": {
              "headers": [
                "Milieu",
                "Levures à la fin",
                "Énergie libérée",
                "Autres observations"
              ],
              "rows": [
                [
                  "Avec dioxygène",
                  "Beaucoup plus nombreuses",
                  "Environ 2 860 kJ par mole de glucose",
                  "Le dioxygène diminue, CO₂ dégagé"
                ],
                [
                  "Sans dioxygène",
                  "Peu nombreuses",
                  "Environ 167 kJ par mole de glucose",
                  "Éthanol (alcool) produit, CO₂ dégagé"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Respiration",
          "stepTheme": "Voie aérobie",
          "stepTitle": "Avec dioxygène : la respiration",
          "paragraphText": "Avec **dioxygène**, la levure dégrade **totalement** le glucose : le dioxygène diminue, du **CO₂** se dégage, l’énergie est **importante**. C’est la **respiration** (voie **aérobie**).",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q2",
            "type": "mcq",
            "prompt": "Des levures cultivées avec du dioxygène consomment ce dioxygène, dégagent du CO₂ et se multiplient beaucoup. Comment s’appelle cette voie de production d’énergie ?",
            "options": [
              "La respiration (voie aérobie)",
              "La fermentation (voie anaérobie)",
              "La photosynthèse",
              "La digestion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Aérobie : en présence d’air (de dioxygène)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Fermentation",
          "stepTheme": "Voie anaérobie",
          "stepTitle": "Sans dioxygène : la fermentation",
          "paragraphText": "Sans dioxygène, le glucose est dégradé **partiellement** en **éthanol** et **CO₂** : c’est la **fermentation alcoolique** (voie **anaérobie**).",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q3",
            "type": "mcq",
            "prompt": "Des levures privées de dioxygène produisent de l’alcool (éthanol) et du CO₂. Comment s’appelle cette voie de production d’énergie ?",
            "options": [
              "La fermentation alcoolique (voie anaérobie)",
              "La respiration (voie aérobie)",
              "La photosynthèse",
              "La glycogénogenèse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Anaérobie : sans dioxygène."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Croissance",
          "stepTheme": "Analyse",
          "stepTitle": "Pourquoi les levures poussent moins sans dioxygène",
          "paragraphText": "Sans dioxygène, les levures disposent de **beaucoup moins d’énergie** : elles se multiplient **peu**, mais restent **en vie**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q4",
            "type": "mcq",
            "prompt": "Pourquoi des levures privées de dioxygène se multiplient-elles peu, tout en restant en vie ?",
            "options": [
              "Elles produisent beaucoup moins d’énergie par la fermentation",
              "Elles n’ont plus de glucose",
              "Elles produisent trop d’énergie",
              "Elles respirent davantage"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Peu d’énergie = peu de synthèses = peu de nouvelles cellules."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Unités",
          "stepTheme": "Erreur du document",
          "stepTitle": "Par gramme ou par mole ?",
          "paragraphText": "Le document écrit « 2 815 kJ pour **1 g** de glucose » : c’est l’énergie d’**une mole** de glucose (**180 g**). Un gramme de glucose fournit environ **17 kJ**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q5",
            "type": "mcq",
            "prompt": "La respiration de 180 g de glucose (une mole) libère environ 2 860 kJ. Combien d’énergie libère environ la respiration de 1 g de glucose ?",
            "options": [
              "Environ 16 à 17 kJ",
              "Environ 2 860 kJ",
              "Environ 180 kJ",
              "Environ 0,5 kJ"
            ],
            "correctAnswerIndex": 0,
            "explanation": "2 860 ÷ 180 ≈ 16 kJ par gramme."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Comparer",
          "stepTheme": "Rendement",
          "stepTitle": "Combien de fois plus d’énergie ?",
          "paragraphText": "Respiration : environ **2 860 kJ** par mole de glucose ; fermentation : environ **167 kJ**. La respiration libère environ **17 fois plus** d’énergie.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q6",
            "type": "mcq",
            "prompt": "Par mole de glucose, la respiration libère environ 2 860 kJ et la fermentation environ 167 kJ. Laquelle est la plus rentable ?",
            "options": [
              "La respiration, environ 17 fois plus",
              "La fermentation, environ 17 fois plus",
              "Les deux libèrent autant",
              "Aucune ne libère d’énergie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "2 860 ÷ 167 ≈ 17."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q1",
          "type": "mcq",
          "prompt": "Dans l’expérience des levures de bière, quelle est la seule différence entre les deux milieux de culture ?",
          "options": [
            "La présence ou l’absence de dioxygène",
            "La quantité de glucose",
            "La température",
            "L’espèce de levure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On ne change qu’un facteur à la fois."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q2",
          "type": "mcq",
          "prompt": "Des levures cultivées avec du dioxygène consomment ce dioxygène, dégagent du CO₂ et se multiplient beaucoup. Comment s’appelle cette voie de production d’énergie ?",
          "options": [
            "La respiration (voie aérobie)",
            "La fermentation (voie anaérobie)",
            "La photosynthèse",
            "La digestion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Aérobie : en présence d’air (de dioxygène)."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q3",
          "type": "mcq",
          "prompt": "Des levures privées de dioxygène produisent de l’alcool (éthanol) et du CO₂. Comment s’appelle cette voie de production d’énergie ?",
          "options": [
            "La fermentation alcoolique (voie anaérobie)",
            "La respiration (voie aérobie)",
            "La photosynthèse",
            "La glycogénogenèse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Anaérobie : sans dioxygène."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q4",
          "type": "mcq",
          "prompt": "Pourquoi des levures privées de dioxygène se multiplient-elles peu, tout en restant en vie ?",
          "options": [
            "Elles produisent beaucoup moins d’énergie par la fermentation",
            "Elles n’ont plus de glucose",
            "Elles produisent trop d’énergie",
            "Elles respirent davantage"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Peu d’énergie = peu de synthèses = peu de nouvelles cellules."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q5",
          "type": "mcq",
          "prompt": "La respiration de 180 g de glucose (une mole) libère environ 2 860 kJ. Combien d’énergie libère environ la respiration de 1 g de glucose ?",
          "options": [
            "Environ 16 à 17 kJ",
            "Environ 2 860 kJ",
            "Environ 180 kJ",
            "Environ 0,5 kJ"
          ],
          "correctAnswerIndex": 0,
          "explanation": "2 860 ÷ 180 ≈ 16 kJ par gramme."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q6",
          "type": "mcq",
          "prompt": "Par mole de glucose, la respiration libère environ 2 860 kJ et la fermentation environ 167 kJ. Laquelle est la plus rentable ?",
          "options": [
            "La respiration, environ 17 fois plus",
            "La fermentation, environ 17 fois plus",
            "Les deux libèrent autant",
            "Aucune ne libère d’énergie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "2 860 ÷ 167 ≈ 17."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l08_production_energie_cellule_p02",
      "order": 2,
      "title": "Les nutriments et l’ATP",
      "summary": "Glucides, protides, lipides : nutriments, valeurs énergétiques ; l’ATP.",
      "conceptExplanation": "- Les sources d’énergie de la cellule sont les composés organiques des aliments, transformés par la digestion en nutriments :\n- les glucides donnent du glucose ; 1 g de glucides fournit 17 kJ (4 kcal) ;\n- les protides donnent des acides aminés ; 1 g de protides fournit 17 kJ (4 kcal) ;\n- les lipides donnent des acides gras et du glycérol ; 1 g de lipides fournit 38 kJ (9 kcal).\n- La dégradation du glucose, des acides gras et des acides aminés libère une énergie stockée sous une forme chimique utilisable par la cellule : l’ATP (adénosine triphosphate).\n- Correction du document : il écrit que la dégradation des protides « produit des acides gras » ; elle produit des acides aminés.",
      "keyRule": "Glucides → glucose (17 kJ/g) ; protides → acides aminés (17 kJ/g) ; lipides → acides gras + glycérol (38 kJ/g). Énergie utilisable : ATP.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer l’énergie d’un aliment",
        "statement": "Un aliment contient 10 g de glucides et 5 g de lipides. Quelle énergie fournit-il ?",
        "methodSteps": [
          "Glucides : 10 × 17 = 170 kJ.",
          "Lipides : 5 × 38 = 190 kJ."
        ],
        "conclusion": "Total : 170 + 190 = 360 kJ."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Nutriments",
          "stepTheme": "Digestion",
          "stepTitle": "Des aliments aux nutriments",
          "paragraphText": "La digestion transforme les **glucides** en **glucose**, les **protides** en **acides aminés**, les **lipides** en **acides gras** et **glycérol**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q1",
            "type": "mcq",
            "prompt": "En quoi la digestion transforme-t-elle les protides ?",
            "options": [
              "En acides aminés",
              "En glucose",
              "En acides gras",
              "En glycogène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Protides (protéines) → acides aminés."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les nutriments, sources d’énergie",
            "caption": "La cellule tire son énergie de la dégradation des nutriments issus de la digestion.",
            "tableData": {
              "headers": [
                "Aliment",
                "Nutriments issus de la digestion",
                "Énergie fournie par gramme"
              ],
              "rows": [
                [
                  "Glucides",
                  "Glucose",
                  "17 kJ (4 kcal)"
                ],
                [
                  "Protides",
                  "Acides aminés",
                  "17 kJ (4 kcal)"
                ],
                [
                  "Lipides",
                  "Acides gras et glycérol",
                  "38 kJ (9 kcal)"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepBadge": "Protides",
          "stepTheme": "Erreur du document",
          "stepTitle": "Protides et acides aminés",
          "paragraphText": "Le document écrit que la dégradation des protides produit « des **acides gras** » : c’est **faux**, elle produit des **acides aminés**. Les acides gras viennent des **lipides**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q2",
            "type": "mcq",
            "prompt": "Un élève affirme : « La dégradation des protides produit des acides gras. » A-t-il raison ?",
            "options": [
              "Non : les protides donnent des acides aminés ; les acides gras viennent des lipides",
              "Oui, c’est exact",
              "Non : les protides donnent du glucose uniquement",
              "Oui, et aussi du glycérol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque famille d’aliments a ses nutriments."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Lipides",
          "stepTheme": "Valeurs",
          "stepTitle": "Les lipides, les plus énergétiques",
          "paragraphText": "1 g de **lipides** fournit **38 kJ** (9 kcal) ; 1 g de **glucides** ou de **protides** fournit **17 kJ** (4 kcal).",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q3",
            "type": "mcq",
            "prompt": "Quel nutriment fournit le plus d’énergie par gramme ?",
            "options": [
              "Les lipides : 38 kJ par gramme",
              "Les glucides : 38 kJ par gramme",
              "Les protides : 38 kJ par gramme",
              "Ils fournissent tous la même énergie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "38 kJ contre 17 kJ."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Calcul",
          "stepTheme": "Application",
          "stepTitle": "Calculer l’énergie d’un aliment",
          "paragraphText": "Énergie = masse × valeur par gramme. 10 g de glucides : 10 × 17 = **170 kJ** ; 5 g de lipides : 5 × 38 = **190 kJ** ; total **360 kJ**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q4",
            "type": "mcq",
            "prompt": "Un aliment contient 10 g de glucides (17 kJ par gramme) et 5 g de lipides (38 kJ par gramme). Quelle énergie fournit-il ?",
            "options": [
              "360 kJ",
              "170 kJ",
              "275 kJ",
              "550 kJ"
            ],
            "correctAnswerIndex": 0,
            "explanation": "10 × 17 + 5 × 38 = 170 + 190 = 360."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "ATP",
          "stepTheme": "Monnaie énergétique",
          "stepTitle": "L’ATP",
          "paragraphText": "L’énergie libérée par la dégradation des nutriments est stockée sous une forme chimique utilisable par la cellule : l’**ATP** (adénosine triphosphate).",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q5",
            "type": "mcq",
            "prompt": "Sous quelle forme l’énergie libérée par la dégradation des nutriments est-elle utilisable par la cellule ?",
            "options": [
              "L’ATP (adénosine triphosphate)",
              "Le glycogène",
              "L’ADN",
              "Le dioxygène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’ATP est la « monnaie énergétique » de la cellule."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Situation",
          "stepTheme": "Le match",
          "stepTitle": "L’énergie des joueurs",
          "paragraphText": "Les élèves bien nourris ont des cellules qui dégradent les **nutriments** pour produire de l’**ATP**, utilisé par leurs muscles pendant le match.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q6",
            "type": "mcq",
            "prompt": "Pendant un match, d’où vient l’énergie utilisée par les muscles des joueurs ?",
            "options": [
              "De la dégradation des nutriments par leurs cellules, qui produit de l’ATP",
              "Directement de l’air respiré, sans nutriments",
              "Du soleil absorbé par la peau",
              "De l’eau bue seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les cellules qui transforment l’énergie des nutriments."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q1",
          "type": "mcq",
          "prompt": "En quoi la digestion transforme-t-elle les protides ?",
          "options": [
            "En acides aminés",
            "En glucose",
            "En acides gras",
            "En glycogène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Protides (protéines) → acides aminés."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q2",
          "type": "mcq",
          "prompt": "Un élève affirme : « La dégradation des protides produit des acides gras. » A-t-il raison ?",
          "options": [
            "Non : les protides donnent des acides aminés ; les acides gras viennent des lipides",
            "Oui, c’est exact",
            "Non : les protides donnent du glucose uniquement",
            "Oui, et aussi du glycérol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque famille d’aliments a ses nutriments."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q3",
          "type": "mcq",
          "prompt": "Quel nutriment fournit le plus d’énergie par gramme ?",
          "options": [
            "Les lipides : 38 kJ par gramme",
            "Les glucides : 38 kJ par gramme",
            "Les protides : 38 kJ par gramme",
            "Ils fournissent tous la même énergie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "38 kJ contre 17 kJ."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q4",
          "type": "mcq",
          "prompt": "Un aliment contient 10 g de glucides (17 kJ par gramme) et 5 g de lipides (38 kJ par gramme). Quelle énergie fournit-il ?",
          "options": [
            "360 kJ",
            "170 kJ",
            "275 kJ",
            "550 kJ"
          ],
          "correctAnswerIndex": 0,
          "explanation": "10 × 17 + 5 × 38 = 170 + 190 = 360."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q5",
          "type": "mcq",
          "prompt": "Sous quelle forme l’énergie libérée par la dégradation des nutriments est-elle utilisable par la cellule ?",
          "options": [
            "L’ATP (adénosine triphosphate)",
            "Le glycogène",
            "L’ADN",
            "Le dioxygène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’ATP est la « monnaie énergétique » de la cellule."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q6",
          "type": "mcq",
          "prompt": "Pendant un match, d’où vient l’énergie utilisée par les muscles des joueurs ?",
          "options": [
            "De la dégradation des nutriments par leurs cellules, qui produit de l’ATP",
            "Directement de l’air respiré, sans nutriments",
            "Du soleil absorbé par la peau",
            "De l’eau bue seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les cellules qui transforment l’énergie des nutriments."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l08_production_energie_cellule_p03",
      "order": 3,
      "title": "Où l’énergie est-elle produite ?",
      "summary": "Hyaloplasme et mitochondrie ; structure de la mitochondrie.",
      "conceptExplanation": "- Le glucose entre dans la cellule et subit une première dégradation dans le cytoplasme (hyaloplasme) : il devient de l’acide pyruvique. Cette étape fournit un peu d’ATP.\n- L’acide pyruvique entre ensuite dans la mitochondrie, où il est dégradé : cela fournit beaucoup d’ATP.\n- Les acides gras et les acides aminés sont dégradés dans la mitochondrie.\n- La mitochondrie a deux membranes : une membrane externe lisse et une membrane interne repliée en crêtes ; entre les deux, l’espace intermembranaire ; à l’intérieur, la matrice.\n- La fermentation se déroule entièrement dans le hyaloplasme ; la respiration commence dans le hyaloplasme et s’achève dans la mitochondrie.\n- Les levures cultivées avec du dioxygène ont de nombreuses mitochondries, grandes, aux crêtes développées ; sans dioxygène, elles en ont peu, aux crêtes réduites.",
      "keyRule": "Fermentation : hyaloplasme. Respiration : hyaloplasme (glycolyse) puis mitochondrie.",
      "formulas": [],
      "workedExample": {
        "title": "Situer chaque étape",
        "statement": "Où se déroulent la glycolyse et le cycle de Krebs ?",
        "methodSteps": [
          "La glycolyse (glucose → acide pyruvique) se déroule dans le hyaloplasme.",
          "Le cycle de Krebs se déroule dans la matrice de la mitochondrie."
        ],
        "conclusion": "La respiration utilise les deux compartiments ; la fermentation seulement le hyaloplasme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Hyaloplasme",
          "stepTheme": "Première étape",
          "stepTitle": "Le glucose est d’abord dégradé dans le hyaloplasme",
          "paragraphText": "Dans la cellule, le **glucose** subit une première dégradation dans le **hyaloplasme** (cytoplasme) : il devient de l’**acide pyruvique**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q1",
            "type": "mcq",
            "prompt": "Où se déroule la première dégradation du glucose dans la cellule ?",
            "options": [
              "Dans le hyaloplasme (cytoplasme)",
              "Dans le noyau",
              "Dans la matrice de la mitochondrie",
              "Dans la membrane plasmique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la glycolyse."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Respiration et fermentation dans la cellule",
            "caption": "Les deux voies commencent par la glycolyse dans le hyaloplasme ; seule la respiration continue dans la mitochondrie, grâce au dioxygène.",
            "svgContent": "<svg viewBox=\"0 0 560 300\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Glucose, glycolyse dans le hyaloplasme, acide pyruvique ; avec dioxygène mitochondrie, CO2, eau, 36 ATP ; sans dioxygène éthanol et CO2\"><rect x=\"8\" y=\"8\" width=\"544\" height=\"284\" rx=\"14\" fill=\"#94A3B8\" fill-opacity=\"0.06\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-dasharray=\"6 5\"/><text x=\"22\" y=\"28\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#94A3B8\">HYALOPLASME</text><rect x=\"200\" y=\"20\" width=\"160\" height=\"44\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"280\" y=\"38.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Glucose</text><text x=\"280\" y=\"53.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">1 molécule</text><line x1=\"280\" y1=\"66\" x2=\"280.0\" y2=\"89.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"280,98 285.0,89.0 275.0,89.0\" fill=\"#94A3B8\"/><text x=\"290\" y=\"87\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"#10B981\">glycolyse : + 2 ATP</text><rect x=\"180\" y=\"102\" width=\"200\" height=\"44\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"280\" y=\"128\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">2 acides pyruviques</text><line x1=\"240\" y1=\"148\" x2=\"128.4\" y2=\"188.9\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"120,192 130.2,193.6 126.7,184.2\" fill=\"#EF4444\"/><text x=\"150\" y=\"166\" font-size=\"11\" text-anchor=\"end\" font-weight=\"800\" fill=\"#EF4444\">sans O₂</text><line x1=\"320\" y1=\"148\" x2=\"411.5\" y2=\"179.1\" stroke=\"#3B82F6\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"420,182 413.1,174.4 409.9,183.8\" fill=\"#3B82F6\"/><text x=\"398\" y=\"158\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"#3B82F6\">avec O₂</text><rect x=\"30\" y=\"196\" width=\"180\" height=\"62\" rx=\"10\" fill=\"#EF4444\" fill-opacity=\"0.14\" stroke=\"#EF4444\" stroke-width=\"2\"/><text x=\"120\" y=\"216\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Fermentation</text><text x=\"120\" y=\"231\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">éthanol + CO₂</text><text x=\"120\" y=\"246\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">total : 2 ATP</text><rect x=\"300\" y=\"182\" width=\"240\" height=\"96\" rx=\"40\" fill=\"#3B82F6\" fill-opacity=\"0.12\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"420\" y=\"204\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">MITOCHONDRIE</text><text x=\"420\" y=\"224\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">cycle de Krebs + chaîne respiratoire</text><text x=\"420\" y=\"244\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">CO₂ + H₂O + 36 ATP</text><text x=\"420\" y=\"264\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">total respiration : 38 ATP</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Mitochondrie",
          "stepTheme": "Suite",
          "stepTitle": "L’acide pyruvique entre dans la mitochondrie",
          "paragraphText": "En présence de dioxygène, l’**acide pyruvique** entre dans la **mitochondrie**, où sa dégradation fournit **beaucoup d’ATP**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q2",
            "type": "mcq",
            "prompt": "En présence de dioxygène, où est dégradé l’acide pyruvique issu du glucose ?",
            "options": [
              "Dans la mitochondrie",
              "Dans le noyau",
              "Dans le hyaloplasme seulement",
              "Hors de la cellule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La mitochondrie est la centrale de la respiration."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Crêtes",
          "stepTheme": "Structure",
          "stepTitle": "La structure de la mitochondrie",
          "paragraphText": "La mitochondrie a une **membrane externe** lisse et une **membrane interne** repliée en **crêtes** ; entre elles, l’**espace intermembranaire** ; au centre, la **matrice**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q3",
            "type": "mcq",
            "prompt": "Comment s’appellent les replis de la membrane interne de la mitochondrie ?",
            "options": [
              "Les crêtes",
              "La matrice",
              "L’espace intermembranaire",
              "Les chiasmas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les crêtes augmentent la surface de production d’ATP."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "La mitochondrie",
            "caption": "Deux membranes : l’externe est lisse, l’interne forme des replis appelés crêtes. L’intérieur est la matrice.",
            "svgContent": "<svg viewBox=\"0 0 560 220\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Mitochondrie : membrane externe, espace intermembranaire, crêtes de la membrane interne, matrice\"><rect x=\"20\" y=\"40\" width=\"300\" height=\"140\" rx=\"70\" fill=\"#F59E0B\" fill-opacity=\"0.12\" stroke=\"#F59E0B\" stroke-width=\"3\"/><rect x=\"32\" y=\"52\" width=\"276\" height=\"116\" rx=\"58\" fill=\"#EC4899\" fill-opacity=\"0.10\" stroke=\"#EC4899\" stroke-width=\"2.4\"/><path d=\"M67 52 L67 128 Q75 138 83 128 L83 52\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"2.4\"/><path d=\"M112 168 L112 92 Q120 82 128 92 L128 168\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"2.4\"/><path d=\"M157 52 L157 128 Q165 138 173 128 L173 52\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"2.4\"/><path d=\"M202 168 L202 92 Q210 82 218 92 L218 168\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"2.4\"/><path d=\"M247 52 L247 128 Q255 138 263 128 L263 52\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"2.4\"/><line x1=\"260\" y1=\"42\" x2=\"350\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"356\" y=\"30\" font-size=\"11\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">1. membrane externe</text><line x1=\"312\" y1=\"72\" x2=\"350\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"356\" y=\"74\" font-size=\"11\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">2. espace intermembranaire</text><line x1=\"263\" y1=\"110\" x2=\"350\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"356\" y=\"120\" font-size=\"11\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">3. crête (membrane interne)</text><line x1=\"190\" y1=\"150\" x2=\"350\" y2=\"162\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"356\" y=\"166\" font-size=\"11\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">4. matrice</text></svg>"
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Lieux",
          "stepTheme": "Activité",
          "stepTitle": "Les lieux de chaque voie",
          "paragraphText": "Fermentation : **voie anaérobie**, dans le **hyaloplasme**. Respiration : **voie aérobie**, dans le **hyaloplasme puis la mitochondrie**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q4",
            "type": "mcq",
            "prompt": "Où se déroule la fermentation alcoolique dans la cellule ?",
            "options": [
              "Entièrement dans le hyaloplasme",
              "Entièrement dans la mitochondrie",
              "Dans le noyau",
              "Dans le hyaloplasme puis la mitochondrie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans dioxygène, la mitochondrie ne sert pas."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Acides gras",
          "stepTheme": "Autres nutriments",
          "stepTitle": "Les autres nutriments",
          "paragraphText": "Les **acides gras** et les **acides aminés** sont dégradés directement dans la **mitochondrie**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q5",
            "type": "mcq",
            "prompt": "Où sont dégradés les acides gras pour produire de l’ATP ?",
            "options": [
              "Dans la mitochondrie",
              "Dans le noyau",
              "Dans l’estomac",
              "Dans le hyaloplasme uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ils rejoignent la voie de la respiration."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Ultrastructure",
          "stepTheme": "Évaluation",
          "stepTitle": "Levures avec ou sans dioxygène",
          "paragraphText": "Avec dioxygène : **nombreuses** mitochondries, **grandes**, aux **crêtes développées**. Sans dioxygène : **peu** de mitochondries, aux crêtes **réduites ou absentes**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q6",
            "type": "mcq",
            "prompt": "On compare des levures cultivées avec dioxygène (milieu M1) et sans dioxygène (milieu M2). Lesquelles ont de nombreuses mitochondries aux crêtes développées ?",
            "options": [
              "Celles du milieu M1, avec dioxygène",
              "Celles du milieu M2, sans dioxygène",
              "Les deux de la même façon",
              "Aucune : les levures n’ont pas de mitochondries"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La respiration a besoin des mitochondries ; la fermentation non."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q1",
          "type": "mcq",
          "prompt": "Où se déroule la première dégradation du glucose dans la cellule ?",
          "options": [
            "Dans le hyaloplasme (cytoplasme)",
            "Dans le noyau",
            "Dans la matrice de la mitochondrie",
            "Dans la membrane plasmique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la glycolyse."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q2",
          "type": "mcq",
          "prompt": "En présence de dioxygène, où est dégradé l’acide pyruvique issu du glucose ?",
          "options": [
            "Dans la mitochondrie",
            "Dans le noyau",
            "Dans le hyaloplasme seulement",
            "Hors de la cellule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La mitochondrie est la centrale de la respiration."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q3",
          "type": "mcq",
          "prompt": "Comment s’appellent les replis de la membrane interne de la mitochondrie ?",
          "options": [
            "Les crêtes",
            "La matrice",
            "L’espace intermembranaire",
            "Les chiasmas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les crêtes augmentent la surface de production d’ATP."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q4",
          "type": "mcq",
          "prompt": "Où se déroule la fermentation alcoolique dans la cellule ?",
          "options": [
            "Entièrement dans le hyaloplasme",
            "Entièrement dans la mitochondrie",
            "Dans le noyau",
            "Dans le hyaloplasme puis la mitochondrie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans dioxygène, la mitochondrie ne sert pas."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q5",
          "type": "mcq",
          "prompt": "Où sont dégradés les acides gras pour produire de l’ATP ?",
          "options": [
            "Dans la mitochondrie",
            "Dans le noyau",
            "Dans l’estomac",
            "Dans le hyaloplasme uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ils rejoignent la voie de la respiration."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q6",
          "type": "mcq",
          "prompt": "On compare des levures cultivées avec dioxygène (milieu M1) et sans dioxygène (milieu M2). Lesquelles ont de nombreuses mitochondries aux crêtes développées ?",
          "options": [
            "Celles du milieu M1, avec dioxygène",
            "Celles du milieu M2, sans dioxygène",
            "Les deux de la même façon",
            "Aucune : les levures n’ont pas de mitochondries"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La respiration a besoin des mitochondries ; la fermentation non."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l08_production_energie_cellule_p04",
      "order": 4,
      "title": "Le mécanisme : glycolyse, cycle de Krebs, chaîne respiratoire",
      "summary": "Les étapes de la respiration et de la fermentation, et leurs bilans.",
      "conceptExplanation": "- Glycolyse (hyaloplasme), commune à la respiration et à la fermentation : une molécule de glucose (C₆H₁₂O₆) donne 2 molécules d’acide pyruvique et 2 ATP.\n- Respiration, dans la mitochondrie :\n- dans la matrice, l’acide pyruvique est transformé en acétylcoenzyme A, qui entre dans le cycle de Krebs : une suite de décarboxylations et de déshydrogénations qui libère du CO₂ et forme des composés réduits et un peu d’ATP ;\n- dans les crêtes de la membrane interne, les composés réduits sont oxydés par le dioxygène, accepteur final des électrons (chaîne respiratoire) : c’est la phosphorylation oxydative, qui forme beaucoup d’ATP et de l’eau.\n- Bilan de la respiration : C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + 38 ATP (2 ATP de la glycolyse et 36 des oxydations respiratoires). 38 ATP × 30,5 kJ ≈ 1 159 kJ, soit environ 40 % des 2 860 kJ du glucose ; le reste est perdu en chaleur.\n- Fermentation alcoolique : l’acide pyruvique est transformé en éthanol (CH₃CH₂OH) dans le hyaloplasme. Bilan : C₆H₁₂O₆ → 2 CH₃CH₂OH + 2 CO₂ + 2 ATP.\n- Corrections du document : il écrit qu’« au cours du cycle de Krebs, il y a consommation d’oxygène » ; le cycle de Krebs libère du CO₂, c’est la chaîne respiratoire des crêtes qui consomme le dioxygène. Il écrit aussi l’éthanol « C₂H₅O₆ » : sa formule est C₂H₅OH (CH₃CH₂OH). Enfin, dans l’exercice 2, son corrigé dit vrai à « la mitochondrie est l’unique centrale énergétique des cellules hétérotrophes » : c’est faux, la glycolyse du hyaloplasme produit déjà de l’ATP, et la fermentation se passe entièrement de mitochondrie.",
      "keyRule": "Glycolyse : glucose → 2 pyruvates + 2 ATP. Respiration : C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + 38 ATP. Fermentation : C₆H₁₂O₆ → 2 éthanol + 2 CO₂ + 2 ATP.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer l’énergie de 38 ATP",
        "statement": "Une mole d’ATP fournit 30,5 kJ. Quelle énergie représentent les 38 moles d’ATP de la respiration ?",
        "methodSteps": [
          "38 × 30,5 = 1 159 kJ.",
          "Le glucose contient 2 860 kJ : 1 159 ÷ 2 860 ≈ 0,40."
        ],
        "conclusion": "1 159 kJ, soit environ 40 % de l’énergie du glucose ; le reste part en chaleur."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Glycolyse",
          "stepTheme": "Étape commune",
          "stepTitle": "La glycolyse",
          "paragraphText": "La **glycolyse**, dans le hyaloplasme, transforme **1 glucose** en **2 acides pyruviques** et produit **2 ATP**. Elle est **commune** à la respiration et à la fermentation.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q1",
            "type": "mcq",
            "prompt": "Que produit la glycolyse à partir d’une molécule de glucose ?",
            "options": [
              "2 molécules d’acide pyruvique et 2 ATP",
              "6 CO₂ et 6 H₂O",
              "38 ATP",
              "2 molécules d’éthanol seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la première étape, sans dioxygène."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Respiration et fermentation dans la cellule",
            "caption": "Les deux voies commencent par la glycolyse dans le hyaloplasme ; seule la respiration continue dans la mitochondrie, grâce au dioxygène.",
            "svgContent": "<svg viewBox=\"0 0 560 300\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Glucose, glycolyse dans le hyaloplasme, acide pyruvique ; avec dioxygène mitochondrie, CO2, eau, 36 ATP ; sans dioxygène éthanol et CO2\"><rect x=\"8\" y=\"8\" width=\"544\" height=\"284\" rx=\"14\" fill=\"#94A3B8\" fill-opacity=\"0.06\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-dasharray=\"6 5\"/><text x=\"22\" y=\"28\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#94A3B8\">HYALOPLASME</text><rect x=\"200\" y=\"20\" width=\"160\" height=\"44\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"280\" y=\"38.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Glucose</text><text x=\"280\" y=\"53.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">1 molécule</text><line x1=\"280\" y1=\"66\" x2=\"280.0\" y2=\"89.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"280,98 285.0,89.0 275.0,89.0\" fill=\"#94A3B8\"/><text x=\"290\" y=\"87\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"#10B981\">glycolyse : + 2 ATP</text><rect x=\"180\" y=\"102\" width=\"200\" height=\"44\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"280\" y=\"128\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">2 acides pyruviques</text><line x1=\"240\" y1=\"148\" x2=\"128.4\" y2=\"188.9\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"120,192 130.2,193.6 126.7,184.2\" fill=\"#EF4444\"/><text x=\"150\" y=\"166\" font-size=\"11\" text-anchor=\"end\" font-weight=\"800\" fill=\"#EF4444\">sans O₂</text><line x1=\"320\" y1=\"148\" x2=\"411.5\" y2=\"179.1\" stroke=\"#3B82F6\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"420,182 413.1,174.4 409.9,183.8\" fill=\"#3B82F6\"/><text x=\"398\" y=\"158\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"#3B82F6\">avec O₂</text><rect x=\"30\" y=\"196\" width=\"180\" height=\"62\" rx=\"10\" fill=\"#EF4444\" fill-opacity=\"0.14\" stroke=\"#EF4444\" stroke-width=\"2\"/><text x=\"120\" y=\"216\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Fermentation</text><text x=\"120\" y=\"231\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">éthanol + CO₂</text><text x=\"120\" y=\"246\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">total : 2 ATP</text><rect x=\"300\" y=\"182\" width=\"240\" height=\"96\" rx=\"40\" fill=\"#3B82F6\" fill-opacity=\"0.12\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"420\" y=\"204\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">MITOCHONDRIE</text><text x=\"420\" y=\"224\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">cycle de Krebs + chaîne respiratoire</text><text x=\"420\" y=\"244\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">CO₂ + H₂O + 36 ATP</text><text x=\"420\" y=\"264\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">total respiration : 38 ATP</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepBadge": "Phase commune",
          "stepTheme": "Exercice 2",
          "stepTitle": "Quelle est l’étape commune ?",
          "paragraphText": "La phase commune à la respiration et à la fermentation est la **glycolyse** (dégradation du **glucose**), pas la dégradation du pyruvate.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q2",
            "type": "mcq",
            "prompt": "« La fermentation et la respiration ont une phase initiale commune : la dégradation du pyruvate. » Vrai ou faux ?",
            "options": [
              "Faux : la phase commune est la glycolyse, la dégradation du glucose en pyruvate",
              "Vrai",
              "Faux : elles n’ont aucune phase commune",
              "Vrai, et elle a lieu dans la mitochondrie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le pyruvate suit ensuite deux chemins différents."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Cycle de Krebs",
          "stepTheme": "Matrice",
          "stepTitle": "Le cycle de Krebs",
          "paragraphText": "Dans la **matrice**, l’acide pyruvique devient de l’**acétylcoenzyme A**, qui entre dans le **cycle de Krebs** : il libère du **CO₂** et forme des composés réduits.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q3",
            "type": "mcq",
            "prompt": "Dans la mitochondrie, en quoi l’acide pyruvique est-il transformé avant d’entrer dans le cycle de Krebs ?",
            "options": [
              "En acétylcoenzyme A",
              "En éthanol",
              "En glucose",
              "En glycogène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Acide pyruvique → acétylcoenzyme A → cycle de Krebs."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Dioxygène",
          "stepTheme": "Erreur du document",
          "stepTitle": "Où le dioxygène est-il consommé ?",
          "paragraphText": "Le document dit que le dioxygène est consommé « au cours du cycle de Krebs » : en fait, le cycle de Krebs **libère du CO₂** ; le **dioxygène** est consommé dans les **crêtes**, par la **chaîne respiratoire**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q4",
            "type": "mcq",
            "prompt": "Dans la mitochondrie, où le dioxygène est-il utilisé ?",
            "options": [
              "Dans la chaîne respiratoire des crêtes, comme accepteur final des électrons",
              "Dans le cycle de Krebs de la matrice",
              "Dans la glycolyse",
              "Dans le noyau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le dioxygène finit en eau (H₂O)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Bilan",
          "stepTheme": "Respiration",
          "stepTitle": "L’équation de la respiration",
          "paragraphText": "Respiration : **C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + 38 ATP** (2 ATP de la glycolyse + 36 des oxydations respiratoires).",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q5",
            "type": "mcq",
            "prompt": "Quelle est l’équation bilan de la respiration d’une molécule de glucose ?",
            "options": [
              "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + 38 ATP",
              "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 2 H₂O + 38 ATP",
              "C₆H₁₂O₆ → 2 CH₃CH₂OH + 2 CO₂ + 2 ATP",
              "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + 2 ATP"
            ],
            "correctAnswerIndex": 0,
            "explanation": "6 O₂ consommés, 6 CO₂ et 6 H₂O rejetés."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Bilan",
          "stepTheme": "Fermentation",
          "stepTitle": "L’équation de la fermentation",
          "paragraphText": "Fermentation alcoolique : **C₆H₁₂O₆ → 2 CH₃CH₂OH + 2 CO₂ + 2 ATP**. Le document écrit l’éthanol « C₂H₅O₆ » : sa formule est **C₂H₅OH**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est l’équation bilan de la fermentation alcoolique d’une molécule de glucose ?",
            "options": [
              "C₆H₁₂O₆ → 2 CH₃CH₂OH + 2 CO₂ + 2 ATP",
              "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + 38 ATP",
              "C₆H₁₂O₆ → 2 C₂H₅O₆ + 2 CO₂ + 2 ATP",
              "C₆H₁₂O₆ → 6 CO₂ + 2 ATP"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Éthanol = CH₃CH₂OH (ou C₂H₅OH)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Calcul",
          "stepTheme": "Rendement",
          "stepTitle": "L’énergie des 38 ATP",
          "paragraphText": "38 ATP × **30,5 kJ** = **1 159 kJ**, soit environ **40 %** des 2 860 kJ du glucose ; le reste est perdu en **chaleur**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q7",
            "type": "mcq",
            "prompt": "Une mole d’ATP fournit 30,5 kJ. Quelle énergie représentent les 38 moles d’ATP produites par la respiration d’une mole de glucose ?",
            "options": [
              "1 159 kJ",
              "61 kJ",
              "2 860 kJ",
              "305 kJ"
            ],
            "correctAnswerIndex": 0,
            "explanation": "38 × 30,5 = 1 159."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepBadge": "Mitochondrie",
          "stepTheme": "Erreur du document",
          "stepTitle": "La mitochondrie, unique centrale ?",
          "paragraphText": "Le corrigé dit vrai à « la mitochondrie est l’**unique** centrale énergétique » : c’est **faux**. La **glycolyse** du hyaloplasme produit déjà de l’ATP, et la **fermentation** se passe de mitochondrie.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q8",
            "type": "mcq",
            "prompt": "« La mitochondrie est l’unique centrale énergétique des cellules hétérotrophes. » Que faut-il répondre ?",
            "options": [
              "Faux : le hyaloplasme produit aussi de l’ATP par la glycolyse et par la fermentation",
              "Vrai",
              "Faux : c’est le noyau qui produit l’ATP",
              "Vrai, sauf chez les levures"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La mitochondrie produit la plus grande part de l’ATP, pas la totalité."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q1",
          "type": "mcq",
          "prompt": "Que produit la glycolyse à partir d’une molécule de glucose ?",
          "options": [
            "2 molécules d’acide pyruvique et 2 ATP",
            "6 CO₂ et 6 H₂O",
            "38 ATP",
            "2 molécules d’éthanol seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la première étape, sans dioxygène."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q2",
          "type": "mcq",
          "prompt": "« La fermentation et la respiration ont une phase initiale commune : la dégradation du pyruvate. » Vrai ou faux ?",
          "options": [
            "Faux : la phase commune est la glycolyse, la dégradation du glucose en pyruvate",
            "Vrai",
            "Faux : elles n’ont aucune phase commune",
            "Vrai, et elle a lieu dans la mitochondrie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pyruvate suit ensuite deux chemins différents."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q3",
          "type": "mcq",
          "prompt": "Dans la mitochondrie, en quoi l’acide pyruvique est-il transformé avant d’entrer dans le cycle de Krebs ?",
          "options": [
            "En acétylcoenzyme A",
            "En éthanol",
            "En glucose",
            "En glycogène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Acide pyruvique → acétylcoenzyme A → cycle de Krebs."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q4",
          "type": "mcq",
          "prompt": "Dans la mitochondrie, où le dioxygène est-il utilisé ?",
          "options": [
            "Dans la chaîne respiratoire des crêtes, comme accepteur final des électrons",
            "Dans le cycle de Krebs de la matrice",
            "Dans la glycolyse",
            "Dans le noyau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le dioxygène finit en eau (H₂O)."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q5",
          "type": "mcq",
          "prompt": "Quelle est l’équation bilan de la respiration d’une molécule de glucose ?",
          "options": [
            "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + 38 ATP",
            "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 2 H₂O + 38 ATP",
            "C₆H₁₂O₆ → 2 CH₃CH₂OH + 2 CO₂ + 2 ATP",
            "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + 2 ATP"
          ],
          "correctAnswerIndex": 0,
          "explanation": "6 O₂ consommés, 6 CO₂ et 6 H₂O rejetés."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est l’équation bilan de la fermentation alcoolique d’une molécule de glucose ?",
          "options": [
            "C₆H₁₂O₆ → 2 CH₃CH₂OH + 2 CO₂ + 2 ATP",
            "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + 38 ATP",
            "C₆H₁₂O₆ → 2 C₂H₅O₆ + 2 CO₂ + 2 ATP",
            "C₆H₁₂O₆ → 6 CO₂ + 2 ATP"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Éthanol = CH₃CH₂OH (ou C₂H₅OH)."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q7",
          "type": "mcq",
          "prompt": "Une mole d’ATP fournit 30,5 kJ. Quelle énergie représentent les 38 moles d’ATP produites par la respiration d’une mole de glucose ?",
          "options": [
            "1 159 kJ",
            "61 kJ",
            "2 860 kJ",
            "305 kJ"
          ],
          "correctAnswerIndex": 0,
          "explanation": "38 × 30,5 = 1 159."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q8",
          "type": "mcq",
          "prompt": "« La mitochondrie est l’unique centrale énergétique des cellules hétérotrophes. » Que faut-il répondre ?",
          "options": [
            "Faux : le hyaloplasme produit aussi de l’ATP par la glycolyse et par la fermentation",
            "Vrai",
            "Faux : c’est le noyau qui produit l’ATP",
            "Vrai, sauf chez les levures"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La mitochondrie produit la plus grande part de l’ATP, pas la totalité."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l08_production_energie_cellule_p05",
      "order": 5,
      "title": "Évaluation : levures, glucose et éthanol",
      "summary": "Lire l’évolution du milieu, comparer les deux voies.",
      "conceptExplanation": "Situation : des levures sont placées dans un milieu contenant du glucose et du dioxygène, à 30 °C. On suit les concentrations de glucose, d’éthanol, de dioxygène et de CO₂.\n- De 0 à 200 s : le dioxygène diminue jusqu’à zéro, le glucose diminue, le CO₂ augmente un peu, l’éthanol est presque nul : les levures respirent.\n- De 200 à 700 s (plus de dioxygène) : le glucose continue de diminuer, l’éthanol et le CO₂ augmentent nettement : les levures fermentent.\n- Respiration : consommation de glucose et de dioxygène, rejet de CO₂, beaucoup d’énergie (38 ATP). Fermentation : dégradation du glucose sans dioxygène, production d’éthanol et de CO₂, peu d’énergie (2 ATP).\n- Pour une même quantité de glucose, la respiration libère 6 CO₂ par glucose et la fermentation 2 CO₂. Dans l’expérience, le CO₂ s’accumule pourtant plus vite pendant la fermentation, parce que les levures dégradent beaucoup plus de glucose pour obtenir assez d’énergie.\n- Correction du document : son tableau comparatif dit « respiration : faible quantité de CO₂ ; fermentation : grande quantité de CO₂ » et « fermentation : faible diminution du glucose ». C’est une lecture de la courbe, pas une règle : par molécule de glucose, c’est la respiration qui libère le plus de CO₂ (6 contre 2), et la fermentation consomme le glucose plus vite.",
      "keyRule": "O₂ présent : respiration (O₂ ↓, CO₂ ↑, pas d’éthanol). O₂ épuisé : fermentation (éthanol ↑, CO₂ ↑).",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître le passage à la fermentation",
        "statement": "À partir de 200 s, le dioxygène est épuisé et l’éthanol apparaît. Que se passe-t-il ?",
        "methodSteps": [
          "Sans dioxygène, la respiration s’arrête.",
          "Les levures dégradent le glucose en éthanol et CO₂."
        ],
        "conclusion": "Les levures passent de la respiration à la fermentation alcoolique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Début",
          "stepTheme": "Analyse",
          "stepTitle": "De 0 à 200 secondes",
          "paragraphText": "De 0 à 200 s : le **dioxygène diminue** jusqu’à zéro, le glucose diminue, le CO₂ augmente un peu, **pas d’éthanol** : les levures **respirent**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p05_q1",
            "type": "mcq",
            "prompt": "Des levures sont placées dans un milieu avec glucose et dioxygène. De 0 à 200 s, le dioxygène diminue jusqu’à zéro, le glucose diminue, le CO₂ augmente un peu et il n’y a presque pas d’éthanol. Que font les levures ?",
            "options": [
              "Elles respirent",
              "Elles fermentent",
              "Elles font la photosynthèse",
              "Elles ne font rien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Consommation de dioxygène = respiration."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Respiration ou fermentation : le bilan",
            "caption": "Pour une molécule de glucose dégradée.",
            "tableData": {
              "headers": [
                "",
                "Respiration",
                "Fermentation alcoolique"
              ],
              "rows": [
                [
                  "Dioxygène",
                  "Nécessaire",
                  "Absent"
                ],
                [
                  "Lieu",
                  "Hyaloplasme puis mitochondrie",
                  "Hyaloplasme seulement"
                ],
                [
                  "Dégradation du glucose",
                  "Totale",
                  "Partielle"
                ],
                [
                  "Produits",
                  "6 CO₂ + 6 H₂O",
                  "2 éthanol + 2 CO₂"
                ],
                [
                  "ATP formés",
                  "38",
                  "2"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Suite",
          "stepTheme": "Analyse",
          "stepTitle": "De 200 à 700 secondes",
          "paragraphText": "Après 200 s, il n’y a **plus de dioxygène** : l’**éthanol** et le **CO₂** augmentent, le glucose diminue : les levures **fermentent**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p05_q2",
            "type": "mcq",
            "prompt": "Dans un milieu de levures, après 200 s, le dioxygène est épuisé ; l’éthanol et le CO₂ augmentent nettement et le glucose continue de diminuer. Que se passe-t-il ?",
            "options": [
              "Les levures sont passées à la fermentation alcoolique",
              "Les levures respirent davantage",
              "Les levures sont mortes",
              "Les levures fabriquent du glucose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’éthanol est la signature de la fermentation alcoolique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Respiration",
          "stepTheme": "Déduire",
          "stepTitle": "En quoi consiste la respiration ?",
          "paragraphText": "La **respiration** est la dégradation **totale** du glucose **en présence de dioxygène**, avec rejet de **CO₂** et d’**eau** et production de beaucoup d’énergie.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p05_q3",
            "type": "mcq",
            "prompt": "En quoi consiste la respiration cellulaire ?",
            "options": [
              "La dégradation totale du glucose en présence de dioxygène, avec rejet de CO₂ et d’eau",
              "La dégradation du glucose sans dioxygène en éthanol",
              "La fabrication de glucose à partir de CO₂",
              "Le stockage du glucose en glycogène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Totale : jusqu’au CO₂ et à l’eau."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Exercice 1",
          "stepTitle": "Respiration ou fermentation ?",
          "paragraphText": "« La dégradation **totale** d’un composé organique par oxydation en présence de **dioxygène** est la fermentation » : **faux**, c’est la **respiration**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p05_q4",
            "type": "mcq",
            "prompt": "« La dégradation totale d’un composé organique par oxydation en présence de dioxygène est la fermentation. » Vrai ou faux ?",
            "options": [
              "Faux : c’est la respiration",
              "Vrai",
              "Faux : c’est la photosynthèse",
              "Vrai, chez les levures seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fermentation est partielle et sans dioxygène."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "CO₂",
          "stepTheme": "Erreur du document",
          "stepTitle": "Qui libère le plus de CO₂ ?",
          "paragraphText": "Par **molécule de glucose**, la respiration libère **6 CO₂**, la fermentation **2 CO₂**. Si le CO₂ s’accumule plus vite pendant la fermentation, c’est que les levures dégradent **beaucoup plus de glucose**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p05_q5",
            "type": "mcq",
            "prompt": "Par molécule de glucose dégradée, quelle voie libère le plus de CO₂ ?",
            "options": [
              "La respiration : 6 CO₂ contre 2 pour la fermentation",
              "La fermentation : 6 CO₂ contre 2 pour la respiration",
              "Elles libèrent autant de CO₂",
              "Aucune ne libère de CO₂"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il suffit de lire les équations bilans."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Annoter",
          "stepTheme": "Question 1",
          "stepTitle": "Annoter la mitochondrie",
          "paragraphText": "1 = **membrane externe** ; 2 = **espace intermembranaire** ; 3 = **crête** (repli de la membrane interne) ; 4 = **matrice**.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p05_q6",
            "type": "mcq",
            "prompt": "Sur le schéma d’une mitochondrie, comment s’appelle l’intérieur, entouré par la membrane interne et ses crêtes ?",
            "options": [
              "La matrice",
              "L’espace intermembranaire",
              "La membrane externe",
              "Le hyaloplasme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cycle de Krebs se déroule dans la matrice."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "La mitochondrie",
            "caption": "Deux membranes : l’externe est lisse, l’interne forme des replis appelés crêtes. L’intérieur est la matrice.",
            "svgContent": "<svg viewBox=\"0 0 560 220\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Mitochondrie : membrane externe, espace intermembranaire, crêtes de la membrane interne, matrice\"><rect x=\"20\" y=\"40\" width=\"300\" height=\"140\" rx=\"70\" fill=\"#F59E0B\" fill-opacity=\"0.12\" stroke=\"#F59E0B\" stroke-width=\"3\"/><rect x=\"32\" y=\"52\" width=\"276\" height=\"116\" rx=\"58\" fill=\"#EC4899\" fill-opacity=\"0.10\" stroke=\"#EC4899\" stroke-width=\"2.4\"/><path d=\"M67 52 L67 128 Q75 138 83 128 L83 52\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"2.4\"/><path d=\"M112 168 L112 92 Q120 82 128 92 L128 168\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"2.4\"/><path d=\"M157 52 L157 128 Q165 138 173 128 L173 52\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"2.4\"/><path d=\"M202 168 L202 92 Q210 82 218 92 L218 168\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"2.4\"/><path d=\"M247 52 L247 128 Q255 138 263 128 L263 52\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"2.4\"/><line x1=\"260\" y1=\"42\" x2=\"350\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"356\" y=\"30\" font-size=\"11\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">1. membrane externe</text><line x1=\"312\" y1=\"72\" x2=\"350\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"356\" y=\"74\" font-size=\"11\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">2. espace intermembranaire</text><line x1=\"263\" y1=\"110\" x2=\"350\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"356\" y=\"120\" font-size=\"11\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">3. crête (membrane interne)</text><line x1=\"190\" y1=\"150\" x2=\"350\" y2=\"162\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"356\" y=\"166\" font-size=\"11\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">4. matrice</text></svg>"
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p05_q1",
          "type": "mcq",
          "prompt": "Des levures sont placées dans un milieu avec glucose et dioxygène. De 0 à 200 s, le dioxygène diminue jusqu’à zéro, le glucose diminue, le CO₂ augmente un peu et il n’y a presque pas d’éthanol. Que font les levures ?",
          "options": [
            "Elles respirent",
            "Elles fermentent",
            "Elles font la photosynthèse",
            "Elles ne font rien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Consommation de dioxygène = respiration."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p05_q2",
          "type": "mcq",
          "prompt": "Dans un milieu de levures, après 200 s, le dioxygène est épuisé ; l’éthanol et le CO₂ augmentent nettement et le glucose continue de diminuer. Que se passe-t-il ?",
          "options": [
            "Les levures sont passées à la fermentation alcoolique",
            "Les levures respirent davantage",
            "Les levures sont mortes",
            "Les levures fabriquent du glucose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’éthanol est la signature de la fermentation alcoolique."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p05_q3",
          "type": "mcq",
          "prompt": "En quoi consiste la respiration cellulaire ?",
          "options": [
            "La dégradation totale du glucose en présence de dioxygène, avec rejet de CO₂ et d’eau",
            "La dégradation du glucose sans dioxygène en éthanol",
            "La fabrication de glucose à partir de CO₂",
            "Le stockage du glucose en glycogène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Totale : jusqu’au CO₂ et à l’eau."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p05_q4",
          "type": "mcq",
          "prompt": "« La dégradation totale d’un composé organique par oxydation en présence de dioxygène est la fermentation. » Vrai ou faux ?",
          "options": [
            "Faux : c’est la respiration",
            "Vrai",
            "Faux : c’est la photosynthèse",
            "Vrai, chez les levures seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fermentation est partielle et sans dioxygène."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p05_q5",
          "type": "mcq",
          "prompt": "Par molécule de glucose dégradée, quelle voie libère le plus de CO₂ ?",
          "options": [
            "La respiration : 6 CO₂ contre 2 pour la fermentation",
            "La fermentation : 6 CO₂ contre 2 pour la respiration",
            "Elles libèrent autant de CO₂",
            "Aucune ne libère de CO₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il suffit de lire les équations bilans."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p05_q6",
          "type": "mcq",
          "prompt": "Sur le schéma d’une mitochondrie, comment s’appelle l’intérieur, entouré par la membrane interne et ses crêtes ?",
          "options": [
            "La matrice",
            "L’espace intermembranaire",
            "La membrane externe",
            "Le hyaloplasme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cycle de Krebs se déroule dans la matrice."
        }
      ]
    }
  ]
};
