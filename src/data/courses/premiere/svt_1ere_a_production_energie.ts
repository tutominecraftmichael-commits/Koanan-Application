import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 8 : La production d'énergie par la cellule » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=902
export const SVT_1ERE_A_L08_PRODUCTION_ENERGIE: CurriculumChapter = {
  "id": "premiere_a1_svt_l08_production_energie_cellule",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 8,
  "title": "Leçon 8 : La production d'énergie par la cellule",
  "summary": "L'énergie des cellules qui ont permis un très bon match vient de la dégradation des nutriments : respiration en présence de dioxygène et fermentation en son absence, dans le hyaloplasme et la mitochondrie.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=902",
  "points": [
    {
      "id": "premiere_a1_svt_l08_production_energie_cellule_p01",
      "order": 1,
      "title": "Deux voies de production d'énergie : respiration et fermentation",
      "summary": "Comparer l'expérience des levures en milieu oxygéné et non oxygéné et citer les sources organiques d'énergie de la cellule.",
      "conceptExplanation": "Dans deux milieux de culture identiques contenant de l'eau et du glucose, on cultive la même quantité de levures de bière ; certaines sont ensuite placées en milieu oxygéné et les autres en milieu non oxygéné.\nEn milieu oxygéné, les levures se développent très bien : elles oxydent le glucose, dont la dégradation est totale, avec une production d'énergie importante (le document indique 2815 KJ pour le glucose dégradé), une baisse de la quantité de dioxygène du milieu et un dégagement de dioxyde de carbone. La voie de production d'énergie en présence de dioxygène est la voie aérobie : la respiration.\nEn milieu privé d'oxygène, les levures se développent très peu car elles disposent de moins d'énergie ; le glucose est partiellement dégradé, ce qui produit de l'alcool éthylique (éthanol) et du dioxyde de carbone, avec une faible production d'énergie (167 KJ selon le document). La voie en absence de dioxygène est la voie anaérobie : la fermentation, ici la fermentation alcoolique.\nLes sources de production d'énergie sont les composés organiques : les glucides, dont la dégradation produit du glucose (1 gramme de glucide fournit 17 KJ) ; les protides (1 gramme fournit 17 KJ) ; les lipides, dont la dégradation produit des acides gras et du glycérol (1 gramme fournit 38 KJ). La dégradation du glucose, des acides gras et des acides aminés libère de l'énergie stockée sous forme chimique appelée ATP (adénosine triphosphate).",
      "keyRule": "Avec dioxygène : respiration, dégradation totale et beaucoup d'énergie ; sans dioxygène : fermentation alcoolique, dégradation partielle, éthanol et peu d'énergie.",
      "formulas": [],
      "workedExample": {
        "title": "Lire le document 1 de l'expérience des levures",
        "statement": "Compare les deux milieux de culture à la fin de l'expérience : développement des levures, énergie produite et produits formés.",
        "methodSteps": [
          "En milieu oxygéné, les levures se développent très bien, la production d'énergie est importante, le dioxygène du milieu baisse et du dioxyde de carbone se dégage.",
          "En milieu non oxygéné, les levures se développent peu, la production d'énergie est faible, de l'alcool éthylique apparaît et du dioxyde de carbone se dégage."
        ],
        "conclusion": "Analyse et interprétation du document 1 : respiration en milieu oxygéné, fermentation en milieu non oxygéné."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La voie aérobie : la respiration",
          "stepTheme": "La voie aérobie : la respiration",
          "stepBadge": "La voie aérobie : la respiration",
          "paragraphText": "• Voie aérobie : voie de production d'énergie par la cellule en présence de dioxygène.\nEn milieu oxygéné, la levure respire normalement et oxyde le glucose prélevé dans le milieu.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q1",
            "type": "mcq",
            "prompt": "La voie de production d'énergie en présence de dioxygène est :",
            "options": [
              "La fermentation alcoolique",
              "La voie anaérobie",
              "La voie aérobie, c'est-à-dire la respiration",
              "La mise en réserve"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation du document 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La voie anaérobie : la fermentation",
          "stepTheme": "La voie anaérobie : la fermentation",
          "stepBadge": "La voie anaérobie : la fermentation",
          "paragraphText": "• Voie anaérobie : voie de production d'énergie par la cellule en absence de dioxygène.\nC'est la fermentation ; celle qui produit de l'éthanol est la fermentation alcoolique.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q2",
            "type": "mcq",
            "prompt": "En absence de dioxygène, la cellule produit de l'énergie par :",
            "options": [
              "La voie anaérobie, c'est-à-dire la fermentation",
              "La respiration uniquement",
              "La photosynthèse",
              "Aucune voie, elle meurt toujours"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Interprétation du document 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Dégradation totale ou partielle du glucose",
          "stepTheme": "Dégradation totale ou partielle du glucose",
          "stepBadge": "Dégradation totale ou partielle du glucose",
          "paragraphText": "En milieu oxygéné, la dégradation du glucose est totale et produit beaucoup d'énergie, utilisée pour les synthèses, d'où le développement des levures.\nEn milieu non oxygéné, le glucose est partiellement dégradé, ce qui produit de l'éthanol et du dioxyde de carbone.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q3",
            "type": "mcq",
            "prompt": "En milieu non oxygéné, le glucose est :",
            "options": [
              "Totalement dégradé en eau uniquement",
              "Non dégradé",
              "Transformé en glycogène",
              "Partiellement dégradé, avec production d'éthanol et de dioxyde de carbone"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Interprétation du document 1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le développement des levures selon le milieu",
          "stepTheme": "Le développement des levures selon le milieu",
          "stepBadge": "Le développement des levures selon le milieu",
          "paragraphText": "Les levures se développent très bien à la surface de la solution de glucose en milieu oxygéné.\nEn milieu non oxygéné, elles se développent très peu car elles disposent de moins d'énergie pour leur croissance et leur multiplication, mais elles demeurent en vie.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q4",
            "type": "mcq",
            "prompt": "En milieu non oxygéné, les levures :",
            "options": [
              "Se développent mieux qu'en milieu oxygéné",
              "Se développent très peu, faute d'énergie, mais demeurent en vie",
              "Meurent immédiatement toutes",
              "Produisent plus d'énergie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse et interprétation du document 1."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les sources organiques d'énergie",
          "stepTheme": "Les sources organiques d'énergie",
          "stepBadge": "Les sources organiques d'énergie",
          "paragraphText": "Les sources de production d'énergie utilisées par la cellule sont les composés organiques.\nCe sont les glucides, les protides et les lipides, dont la dégradation libère l'énergie stockée sous forme d'ATP.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q5",
            "type": "mcq",
            "prompt": "Les sources d'énergie de la cellule sont :",
            "options": [
              "Uniquement l'eau et les sels minéraux",
              "Les composés organiques : glucides, protides et lipides",
              "Uniquement le dioxygène",
              "La lumière uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation du document 1, fin de la partie I-A."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le lipide est le composé le plus énergétique au gramme",
          "stepTheme": "Le lipide est le composé le plus énergétique au gramme",
          "stepBadge": "Le lipide est le composé le plus énergétique au gramme",
          "paragraphText": "La leçon donne la valeur énergétique de chaque catégorie de composés.\n1 gramme de glucide fournit 17 KJ, 1 gramme de protide fournit 17 KJ, mais 1 gramme de lipide fournit 38 KJ.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q6",
            "type": "mcq",
            "prompt": "Le composé qui fournit le plus d'énergie pour 1 gramme est :",
            "options": [
              "Le glucide, avec 17 KJ",
              "Le protide, avec 17 KJ",
              "Le glucose pur, selon la leçon",
              "Le lipide, avec 38 KJ"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Valeurs données dans l'interprétation du document 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q1",
          "type": "mcq",
          "prompt": "La voie de production d'énergie en présence de dioxygène est :",
          "options": [
            "La fermentation alcoolique",
            "La voie anaérobie",
            "La voie aérobie, c'est-à-dire la respiration",
            "La mise en réserve"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation du document 1."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q2",
          "type": "mcq",
          "prompt": "En absence de dioxygène, la cellule produit de l'énergie par :",
          "options": [
            "La voie anaérobie, c'est-à-dire la fermentation",
            "La respiration uniquement",
            "La photosynthèse",
            "Aucune voie, elle meurt toujours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Interprétation du document 1."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q3",
          "type": "mcq",
          "prompt": "En milieu non oxygéné, le glucose est :",
          "options": [
            "Totalement dégradé en eau uniquement",
            "Non dégradé",
            "Transformé en glycogène",
            "Partiellement dégradé, avec production d'éthanol et de dioxyde de carbone"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Interprétation du document 1."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q4",
          "type": "mcq",
          "prompt": "En milieu non oxygéné, les levures :",
          "options": [
            "Se développent mieux qu'en milieu oxygéné",
            "Se développent très peu, faute d'énergie, mais demeurent en vie",
            "Meurent immédiatement toutes",
            "Produisent plus d'énergie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse et interprétation du document 1."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q5",
          "type": "mcq",
          "prompt": "Les sources d'énergie de la cellule sont :",
          "options": [
            "Uniquement l'eau et les sels minéraux",
            "Les composés organiques : glucides, protides et lipides",
            "Uniquement le dioxygène",
            "La lumière uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation du document 1, fin de la partie I-A."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p01_q6",
          "type": "mcq",
          "prompt": "Le composé qui fournit le plus d'énergie pour 1 gramme est :",
          "options": [
            "Le glucide, avec 17 KJ",
            "Le protide, avec 17 KJ",
            "Le glucose pur, selon la leçon",
            "Le lipide, avec 38 KJ"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Valeurs données dans l'interprétation du document 1."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l08_production_energie_cellule_p02",
      "order": 2,
      "title": "Les zones de production d'énergie : hyaloplasme et mitochondrie",
      "summary": "Localiser la production d'énergie dans la cellule : première dégradation du glucose dans le cytoplasme, dégradations dans la mitochondrie.",
      "conceptExplanation": "Les lipides, glucides et protides provenant des aliments subissent la digestion et sont transformés en acides gras, en glucose et en acides aminés ; ces nutriments passent ensuite dans la cellule.\nUne fois dans la cellule, le glucose subit une première dégradation dans le cytoplasme et se transforme en acide pyruvique. L'acide pyruvique pénètre ensuite dans la mitochondrie et y est dégradé ; la dégradation du glucose fournit de l'énergie à la cellule sous forme d'ATP.\nLes acides gras et les acides aminés, quant à eux, sont dégradés dans la mitochondrie, et cette dégradation fournit aussi de l'énergie sous forme d'ATP.\nLa production d'énergie dans la cellule se déroule donc dans le cytoplasme (ou hyaloplasme) et la mitochondrie.",
      "keyRule": "Le glucose commence dans le hyaloplasme (acide pyruvique) et finit dans la mitochondrie ; acides gras et acides aminés sont dégradés dans la mitochondrie.",
      "formulas": [],
      "workedExample": {
        "title": "Associer processus, voie et lieu (activité d'application)",
        "statement": "Associe la fermentation et la respiration à leur voie et à leurs lieux de production parmi : voie aérobie, voie anaérobie, hyaloplasme, mitochondrie.",
        "methodSteps": [
          "La fermentation est la voie anaérobie et se déroule dans le hyaloplasme.",
          "La respiration est la voie aérobie : elle débute dans le hyaloplasme et s'achève dans la mitochondrie."
        ],
        "conclusion": "Schéma du corrigé de l'activité d'application de la partie I."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La première dégradation du glucose",
          "stepTheme": "La première dégradation du glucose",
          "stepBadge": "La première dégradation du glucose",
          "paragraphText": "Dans la cellule, le glucose subit une première dégradation dans le cytoplasme.\nIl se transforme alors en acide pyruvique, qui pénètre ensuite dans la mitochondrie.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q1",
            "type": "mcq",
            "prompt": "La première dégradation du glucose a lieu :",
            "options": [
              "Dans le cytoplasme, où le glucose devient acide pyruvique",
              "Dans la mitochondrie uniquement",
              "Dans le sang",
              "Dans l'intestin uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Analyse du document 2, partie I-B."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de la mitochondrie",
          "stepTheme": "Le rôle de la mitochondrie",
          "stepBadge": "Le rôle de la mitochondrie",
          "paragraphText": "L'acide pyruvique pénètre dans la mitochondrie et y est dégradé.\nLes acides gras et les acides aminés sont eux aussi dégradés dans la mitochondrie, avec production d'ATP.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q2",
            "type": "mcq",
            "prompt": "Les acides gras et les acides aminés sont dégradés :",
            "options": [
              "Dans le hyaloplasme uniquement",
              "Dans le noyau uniquement",
              "Dans la mitochondrie",
              "Hors de la cellule"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse du document 2, partie I-B."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'ATP, forme de stockage de l'énergie",
          "stepTheme": "L'ATP, forme de stockage de l'énergie",
          "stepBadge": "L'ATP, forme de stockage de l'énergie",
          "paragraphText": "• ATP (adénosine triphosphate) : forme chimique sous laquelle l'énergie libérée par la dégradation des nutriments est stockée.\nLa dégradation du glucose, des acides gras et des acides aminés libère de l'énergie stockée sous forme d'ATP.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q3",
            "type": "mcq",
            "prompt": "L'énergie libérée par la dégradation des nutriments est stockée sous forme :",
            "options": [
              "De glycogène uniquement",
              "D'éthanol",
              "De dioxyde de carbone",
              "D'ATP (adénosine triphosphate)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Fin de l'interprétation du document 1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "La production d'énergie ne se fait pas que dans la mitochondrie",
          "stepTheme": "La production d'énergie ne se fait pas que dans la mitochondrie",
          "stepBadge": "La production d'énergie ne se fait pas que dans la mitochondrie",
          "paragraphText": "Piège corrigé par l'exercice 1 de consolidation : affirmer que la production d'énergie se déroule uniquement dans la mitochondrie est faux.\nElle se déroule dans le cytoplasme (hyaloplasme) et dans la mitochondrie.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q4",
            "type": "mcq",
            "prompt": "La production d'énergie dans la cellule se déroule :",
            "options": [
              "Uniquement dans la mitochondrie",
              "Dans le cytoplasme (hyaloplasme) et la mitochondrie",
              "Uniquement dans le noyau",
              "Uniquement dans le sang"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la partie I-B et exercice 1 (affirmation 1 fausse)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le trajet d'un nutriment jusqu'à l'ATP",
          "stepTheme": "Le trajet d'un nutriment jusqu'à l'ATP",
          "stepBadge": "Le trajet d'un nutriment jusqu'à l'ATP",
          "paragraphText": "Méthode : suivre le nutriment depuis l'aliment.\nDigestion, passage dans la cellule, première dégradation du glucose dans le cytoplasme, puis dégradation dans la mitochondrie avec production d'ATP.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q5",
            "type": "mcq",
            "prompt": "Après la digestion, les nutriments qui passent dans la cellule sont :",
            "options": [
              "Les aliments entiers non transformés",
              "Uniquement l'ATP",
              "Le glucose, les acides gras et les acides aminés",
              "Uniquement l'eau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse du document 2 : les aliments sont transformés en glucose, acides gras et acides aminés."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Affirmations vraies de l'exercice 1",
          "stepTheme": "Affirmations vraies de l'exercice 1",
          "stepBadge": "Affirmations vraies de l'exercice 1",
          "paragraphText": "L'exercice 1 de consolidation juge des affirmations sur les zones et les voies de production d'énergie.\nSon corrigé retient comme vraies : la dégradation du glucose débute dans le hyaloplasme, et la fermentation du glucose produit de l'éthanol.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q6",
            "type": "mcq",
            "prompt": "Selon le corrigé de l'exercice 1, la fermentation du glucose :",
            "options": [
              "Produit de l'éthanol : affirmation vraie",
              "Est une dégradation totale en présence de dioxygène",
              "Ne produit aucune énergie",
              "Se déroule uniquement dans la mitochondrie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé des évaluations : exercice 1, affirmations 2 et 5 vraies."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q1",
          "type": "mcq",
          "prompt": "La première dégradation du glucose a lieu :",
          "options": [
            "Dans le cytoplasme, où le glucose devient acide pyruvique",
            "Dans la mitochondrie uniquement",
            "Dans le sang",
            "Dans l'intestin uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Analyse du document 2, partie I-B."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q2",
          "type": "mcq",
          "prompt": "Les acides gras et les acides aminés sont dégradés :",
          "options": [
            "Dans le hyaloplasme uniquement",
            "Dans le noyau uniquement",
            "Dans la mitochondrie",
            "Hors de la cellule"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse du document 2, partie I-B."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q3",
          "type": "mcq",
          "prompt": "L'énergie libérée par la dégradation des nutriments est stockée sous forme :",
          "options": [
            "De glycogène uniquement",
            "D'éthanol",
            "De dioxyde de carbone",
            "D'ATP (adénosine triphosphate)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Fin de l'interprétation du document 1."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q4",
          "type": "mcq",
          "prompt": "La production d'énergie dans la cellule se déroule :",
          "options": [
            "Uniquement dans la mitochondrie",
            "Dans le cytoplasme (hyaloplasme) et la mitochondrie",
            "Uniquement dans le noyau",
            "Uniquement dans le sang"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la partie I-B et exercice 1 (affirmation 1 fausse)."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q5",
          "type": "mcq",
          "prompt": "Après la digestion, les nutriments qui passent dans la cellule sont :",
          "options": [
            "Les aliments entiers non transformés",
            "Uniquement l'ATP",
            "Le glucose, les acides gras et les acides aminés",
            "Uniquement l'eau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse du document 2 : les aliments sont transformés en glucose, acides gras et acides aminés."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p02_q6",
          "type": "mcq",
          "prompt": "Selon le corrigé de l'exercice 1, la fermentation du glucose :",
          "options": [
            "Produit de l'éthanol : affirmation vraie",
            "Est une dégradation totale en présence de dioxygène",
            "Ne produit aucune énergie",
            "Se déroule uniquement dans la mitochondrie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé des évaluations : exercice 1, affirmations 2 et 5 vraies."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l08_production_energie_cellule_p03",
      "order": 3,
      "title": "Le mécanisme de la respiration : glycolyse, cycle de Krebs et phosphorylation oxydative",
      "summary": "Décrire les trois étapes de la respiration cellulaire et son bilan de 38 ATP par mole de glucose.",
      "conceptExplanation": "La respiration débute par la glycolyse, qui se déroule dans le hyaloplasme : la molécule de glucose est dégradée en deux molécules d'acide pyruvique, avec production de 2 ATP.\nAu niveau de la mitochondrie, dans la matrice mitochondriale, l'acide pyruvique subit une suite de décarboxylations oxydatives sous l'action d'enzymes, avec production d'ATP et de composés réduits et libération de dioxyde de carbone : c'est le cycle de Krebs. L'activité d'application précise que l'acide pyruvique est d'abord transformé en acétylcoenzyme A, qui entre dans le cycle de Krebs.\nDans la membrane interne de la mitochondrie, les composés réduits sont oxydés par le dioxygène, accepteur final des électrons et des protons : ces oxydations, couplées à une production importante d'ATP, constituent la phosphorylation oxydative. L'ensemble de ces phénomènes au niveau de la mitochondrie est appelé oxydations respiratoires.\nBilan de la leçon : la respiration cellulaire conduit à la formation de 38 molécules d'ATP par mole de glucose, dont 2 ATP issus de la glycolyse et 36 ATP issus des oxydations respiratoires ; il y a consommation de dioxygène et rejet de dioxyde de carbone.",
      "keyRule": "Glycolyse dans le hyaloplasme (2 ATP), cycle de Krebs dans la matrice, phosphorylation oxydative dans la membrane interne : bilan 38 ATP par glucose.",
      "formulas": [
        {
          "name": "Équation bilan de la respiration cellulaire",
          "formula": "C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + 38\\,ATP",
          "note": "Équation bilan donnée par la leçon, avec le bilan de 38 ATP par mole de glucose."
        }
      ],
      "workedExample": {
        "title": "Compléter le texte de la respiration cellulaire (activité d'application)",
        "statement": "Complète le texte : le processus commence par la … au cours de laquelle le glucose est transformé en deux molécules … ; elle produit … d'ATP ; dans la mitochondrie se déroulent les … qui commencent par la transformation de l'acide pyruvique en … qui entre dans le …",
        "methodSteps": [
          "Le processus commence par la glycolyse, qui transforme le glucose en deux molécules d'acide pyruvique et produit 2 molécules d'ATP.",
          "Dans la mitochondrie se déroulent les oxydations respiratoires, qui commencent par la transformation de l'acide pyruvique en acétylcoenzyme A, qui entre dans le cycle de Krebs."
        ],
        "conclusion": "Corrigé de l'activité d'application de la partie II."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La glycolyse",
          "stepTheme": "La glycolyse",
          "stepBadge": "La glycolyse",
          "paragraphText": "• Glycolyse : dégradation du glucose en deux molécules d'acide pyruvique, dans le hyaloplasme.\nElle s'accompagne de phénomènes d'oxydoréduction et produit 2 ATP ; la respiration et la fermentation débutent toutes deux par la glycolyse.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q1",
            "type": "mcq",
            "prompt": "La glycolyse est :",
            "options": [
              "La dégradation du glucose en deux molécules d'acide pyruvique, dans le hyaloplasme",
              "La formation du glucose à partir de l'acide pyruvique",
              "Une étape propre à la mitochondrie uniquement",
              "La production d'éthanol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Interprétation de la partie II, étape du hyaloplasme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cycle de Krebs dans la matrice",
          "stepTheme": "Le cycle de Krebs dans la matrice",
          "stepBadge": "Le cycle de Krebs dans la matrice",
          "paragraphText": "Dans la matrice mitochondriale, l'acide pyruvique subit des décarboxylations oxydatives sous l'action d'enzymes.\nCes réactions produisent de l'ATP et des composés réduits et libèrent du dioxyde de carbone : c'est le cycle de Krebs.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q2",
            "type": "mcq",
            "prompt": "Le cycle de Krebs se déroule :",
            "options": [
              "Dans le hyaloplasme",
              "Dans le sang",
              "Dans la matrice mitochondriale, par décarboxylations oxydatives de l'acide pyruvique",
              "Uniquement en absence d'oxygène"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation de la partie II, étape de la matrice."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La phosphorylation oxydative",
          "stepTheme": "La phosphorylation oxydative",
          "stepBadge": "La phosphorylation oxydative",
          "paragraphText": "• Phosphorylation oxydative : dernière étape de la respiration, dans les crêtes de la membrane interne des mitochondries.\nLes composés réduits y sont oxydés par le dioxygène, accepteur final des électrons et des protons, avec une production importante d'ATP.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q3",
            "type": "mcq",
            "prompt": "Le dioxygène intervient dans la phosphorylation oxydative comme :",
            "options": [
              "Produit final rejeté",
              "Accepteur final des électrons et des protons",
              "Source de glucose",
              "Enzyme de la glycolyse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie II, étape de la membrane interne."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le bilan de 38 ATP",
          "stepTheme": "Le bilan de 38 ATP",
          "stepBadge": "Le bilan de 38 ATP",
          "paragraphText": "La respiration cellulaire conduit à la formation de 38 molécules d'ATP par mole de glucose.\nCe bilan se décompose en 2 ATP issus de la glycolyse et 36 ATP issus des oxydations respiratoires.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q4",
            "type": "mcq",
            "prompt": "Le bilan en ATP de la respiration d'une mole de glucose est de :",
            "options": [
              "2 ATP au total",
              "36 ATP, sans aucun ATP de glycolyse",
              "167 ATP",
              "38 ATP, dont 2 de la glycolyse et 36 des oxydations respiratoires"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Bilan énergétique donné dans l'interprétation de la partie II."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "L'ordre des étapes de la respiration",
          "stepTheme": "L'ordre des étapes de la respiration",
          "stepBadge": "L'ordre des étapes de la respiration",
          "paragraphText": "Méthode : retenir l'ordre et le lieu de chaque étape.\nGlycolyse dans le hyaloplasme, cycle de Krebs dans la matrice mitochondriale, phosphorylation oxydative dans la membrane interne.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q5",
            "type": "mcq",
            "prompt": "L'ordre correct des étapes de la respiration est :",
            "options": [
              "Cycle de Krebs, glycolyse, phosphorylation oxydative",
              "Phosphorylation oxydative, glycolyse, cycle de Krebs",
              "Glycolyse, cycle de Krebs, phosphorylation oxydative",
              "Glycolyse uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Enchaînement décrit dans l'interprétation de la partie II."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'équation bilan comporte 6 molécules d'eau",
          "stepTheme": "L'équation bilan comporte 6 molécules d'eau",
          "stepBadge": "L'équation bilan comporte 6 molécules d'eau",
          "paragraphText": "L'exercice 2 de consolidation propose une équation avec seulement 2 molécules d'eau et la juge fausse.\nL'équation bilan de la leçon comporte 6 molécules d'eau produites, pour 6 molécules de dioxyde de carbone.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q6",
            "type": "mcq",
            "prompt": "Dans l'équation bilan de la respiration de la leçon, l'eau produite représente :",
            "options": [
              "6 molécules d'eau, comme le dioxyde de carbone",
              "2 molécules, comme dans la proposition jugée fausse",
              "Aucune molécule",
              "38 molécules"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Équation bilan de la leçon et exercice 2 (affirmation 4 fausse)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q1",
          "type": "mcq",
          "prompt": "La glycolyse est :",
          "options": [
            "La dégradation du glucose en deux molécules d'acide pyruvique, dans le hyaloplasme",
            "La formation du glucose à partir de l'acide pyruvique",
            "Une étape propre à la mitochondrie uniquement",
            "La production d'éthanol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Interprétation de la partie II, étape du hyaloplasme."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q2",
          "type": "mcq",
          "prompt": "Le cycle de Krebs se déroule :",
          "options": [
            "Dans le hyaloplasme",
            "Dans le sang",
            "Dans la matrice mitochondriale, par décarboxylations oxydatives de l'acide pyruvique",
            "Uniquement en absence d'oxygène"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation de la partie II, étape de la matrice."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q3",
          "type": "mcq",
          "prompt": "Le dioxygène intervient dans la phosphorylation oxydative comme :",
          "options": [
            "Produit final rejeté",
            "Accepteur final des électrons et des protons",
            "Source de glucose",
            "Enzyme de la glycolyse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie II, étape de la membrane interne."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q4",
          "type": "mcq",
          "prompt": "Le bilan en ATP de la respiration d'une mole de glucose est de :",
          "options": [
            "2 ATP au total",
            "36 ATP, sans aucun ATP de glycolyse",
            "167 ATP",
            "38 ATP, dont 2 de la glycolyse et 36 des oxydations respiratoires"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Bilan énergétique donné dans l'interprétation de la partie II."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q5",
          "type": "mcq",
          "prompt": "L'ordre correct des étapes de la respiration est :",
          "options": [
            "Cycle de Krebs, glycolyse, phosphorylation oxydative",
            "Phosphorylation oxydative, glycolyse, cycle de Krebs",
            "Glycolyse, cycle de Krebs, phosphorylation oxydative",
            "Glycolyse uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Enchaînement décrit dans l'interprétation de la partie II."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p03_q6",
          "type": "mcq",
          "prompt": "Dans l'équation bilan de la respiration de la leçon, l'eau produite représente :",
          "options": [
            "6 molécules d'eau, comme le dioxyde de carbone",
            "2 molécules, comme dans la proposition jugée fausse",
            "Aucune molécule",
            "38 molécules"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Équation bilan de la leçon et exercice 2 (affirmation 4 fausse)."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l08_production_energie_cellule_p04",
      "order": 4,
      "title": "La fermentation alcoolique et la comparaison des deux voies",
      "summary": "Décrire la fermentation alcoolique, son bilan de 2 ATP, et comparer respiration et fermentation dans un tableau.",
      "conceptExplanation": "La fermentation débute, comme la respiration, par la glycolyse dans le hyaloplasme, mais elle s'y achève : la respiration débute dans le hyaloplasme et s'achève dans la mitochondrie, alors que la fermentation débute et s'achève dans le hyaloplasme.\nDans la fermentation alcoolique, l'acide pyruvique issu de la glycolyse se transforme en éthanol (alcool éthylique) en absence d'oxygène. Une molécule de glucose produit au total, au cours de la fermentation, 2 ATP seulement.\nLa conclusion compare les deux phénomènes : la respiration est une réaction complète se déroulant en milieu aérobie, dont les produits sont l'eau, le dioxyde de carbone et 38 ATP ; la fermentation est une réaction incomplète se déroulant en milieu anaérobie, dont les produits sont le dioxyde de carbone et 2 ATP (avec l'éthanol pour la fermentation alcoolique).\nLe tableau comparatif de la situation d'évaluation ajoute : respiration avec diminution du dioxygène et pas d'éthanol ; fermentation sans dioxygène, avec production d'une grande quantité d'éthanol et de dioxyde de carbone. Les levures cultivées en milieu aérobie contiennent de nombreuses mitochondries de grande taille avec crêtes développées, contre peu de mitochondries à crêtes très petites ou absentes en milieu anaérobie.",
      "keyRule": "Même départ (glycolyse), deux fins : respiration complète et rentable (38 ATP), fermentation incomplète et peu rentable (2 ATP) mais possible sans oxygène.",
      "formulas": [
        {
          "name": "Équation bilan simplifiée de la fermentation alcoolique",
          "formula": "C_6H_{12}O_6 \\rightarrow 2CH_3CH_2OH + 2CO_2 + 2\\,ATP",
          "note": "Équation retenue au corrigé de l'exercice 2 de consolidation de la leçon."
        }
      ],
      "workedExample": {
        "title": "Comparer les deux voies métaboliques des levures",
        "statement": "Dresse le tableau comparatif de la respiration cellulaire et de la fermentation alcoolique chez les levures : oxygène, éthanol et quantité d'ATP.",
        "methodSteps": [
          "Respiration : diminution progressive du dioxygène, pas de production d'éthanol, production d'une grande quantité d'ATP (38 ATP).",
          "Fermentation alcoolique : absence de dioxygène, production d'une grande quantité d'éthanol et de dioxyde de carbone, production d'une faible quantité d'ATP (2 ATP)."
        ],
        "conclusion": "Corrigé de la situation d'évaluation, question 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fermentation alcoolique",
          "stepTheme": "La fermentation alcoolique",
          "stepBadge": "La fermentation alcoolique",
          "paragraphText": "• Fermentation alcoolique : fermentation dont le résidu organique est l'éthanol.\nL'acide pyruvique issu de la glycolyse se transforme en éthanol en absence d'oxygène, avec dégagement de dioxyde de carbone.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q1",
            "type": "mcq",
            "prompt": "Dans la fermentation alcoolique, l'acide pyruvique se transforme en :",
            "options": [
              "Acide lactique uniquement selon la leçon",
              "Glucose",
              "Eau uniquement",
              "Éthanol (alcool éthylique), en absence d'oxygène"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Interprétation de la partie II, cas de la fermentation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le bilan de 2 ATP de la fermentation",
          "stepTheme": "Le bilan de 2 ATP de la fermentation",
          "stepBadge": "Le bilan de 2 ATP de la fermentation",
          "paragraphText": "Une molécule de glucose ne produit au total que 2 ATP au cours de la fermentation.\nCe sont les 2 ATP de la glycolyse, puisque la fermentation s'achève dans le hyaloplasme.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q2",
            "type": "mcq",
            "prompt": "Le bilan en ATP de la fermentation d'une molécule de glucose est de :",
            "options": [
              "38 ATP",
              "2 ATP",
              "36 ATP",
              "Aucun ATP"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Fin de l'interprétation sur la fermentation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Une phase initiale commune",
          "stepTheme": "Une phase initiale commune",
          "stepBadge": "Une phase initiale commune",
          "paragraphText": "La respiration et la fermentation débutent toutes deux par la glycolyse dans le hyaloplasme.\nL'exercice 2 juge donc fausse l'affirmation qui fait de la dégradation du pyruvate leur phase initiale commune : la phase commune est la glycolyse, qui produit le pyruvate.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q3",
            "type": "mcq",
            "prompt": "La phase initiale commune à la respiration et à la fermentation est :",
            "options": [
              "Le cycle de Krebs",
              "La glycolyse, qui transforme le glucose en acide pyruvique",
              "La phosphorylation oxydative",
              "La formation d'éthanol"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse du document 5 et exercice 2 (affirmation 2 fausse)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "La fermentation n'est pas plus rentable que la respiration",
          "stepTheme": "La fermentation n'est pas plus rentable que la respiration",
          "stepBadge": "La fermentation n'est pas plus rentable que la respiration",
          "paragraphText": "Piège de l'exercice 2 : affirmer que la fermentation est plus rentable que la respiration est faux.\nAvec 2 ATP contre 38 ATP par glucose, la respiration est beaucoup plus rentable.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q4",
            "type": "mcq",
            "prompt": "La comparaison des rendements donne :",
            "options": [
              "La fermentation plus rentable, avec 38 ATP",
              "Des rendements rigoureusement égaux",
              "Aucun ATP dans les deux cas",
              "La respiration plus rentable, avec 38 ATP contre 2 ATP pour la fermentation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Exercice 2 de consolidation (affirmations 3 vraie et 6 fausse) et conclusion de la partie II."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les mitochondries des levures selon le milieu",
          "stepTheme": "Les mitochondries des levures selon le milieu",
          "stepBadge": "Les mitochondries des levures selon le milieu",
          "paragraphText": "Les levures cultivées en milieu aérobie contiennent de nombreuses mitochondries de grande taille, avec des crêtes développées.\nCelles du milieu anaérobie présentent peu de mitochondries, avec des crêtes très petites ou absentes.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q5",
            "type": "mcq",
            "prompt": "Les levures cultivées en milieu anaérobie présentent :",
            "options": [
              "Peu de mitochondries, avec des crêtes très petites ou absentes",
              "De nombreuses mitochondries à crêtes développées",
              "Aucune cellule vivante",
              "Des mitochondries plus grandes qu'en milieu aérobie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé de la situation d'évaluation, question 4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Réaction complète contre réaction incomplète",
          "stepTheme": "Réaction complète contre réaction incomplète",
          "stepBadge": "Réaction complète contre réaction incomplète",
          "paragraphText": "La respiration est une réaction complète, en milieu aérobie.\nLa fermentation est une réaction incomplète, en milieu anaérobie, car le glucose n'y est que partiellement dégradé et l'éthanol conserve une partie de l'énergie.",
          "exercise": {
            "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q6",
            "type": "mcq",
            "prompt": "La fermentation est qualifiée de réaction incomplète parce qu'elle :",
            "options": [
              "Ne commence jamais",
              "Produit plus d'ATP que la respiration",
              "Ne dégrade que partiellement le glucose, en milieu anaérobie",
              "Consomme du dioxygène"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conclusion de la partie II."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q1",
          "type": "mcq",
          "prompt": "Dans la fermentation alcoolique, l'acide pyruvique se transforme en :",
          "options": [
            "Acide lactique uniquement selon la leçon",
            "Glucose",
            "Eau uniquement",
            "Éthanol (alcool éthylique), en absence d'oxygène"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Interprétation de la partie II, cas de la fermentation."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q2",
          "type": "mcq",
          "prompt": "Le bilan en ATP de la fermentation d'une molécule de glucose est de :",
          "options": [
            "38 ATP",
            "2 ATP",
            "36 ATP",
            "Aucun ATP"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Fin de l'interprétation sur la fermentation."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q3",
          "type": "mcq",
          "prompt": "La phase initiale commune à la respiration et à la fermentation est :",
          "options": [
            "Le cycle de Krebs",
            "La glycolyse, qui transforme le glucose en acide pyruvique",
            "La phosphorylation oxydative",
            "La formation d'éthanol"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse du document 5 et exercice 2 (affirmation 2 fausse)."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q4",
          "type": "mcq",
          "prompt": "La comparaison des rendements donne :",
          "options": [
            "La fermentation plus rentable, avec 38 ATP",
            "Des rendements rigoureusement égaux",
            "Aucun ATP dans les deux cas",
            "La respiration plus rentable, avec 38 ATP contre 2 ATP pour la fermentation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Exercice 2 de consolidation (affirmations 3 vraie et 6 fausse) et conclusion de la partie II."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q5",
          "type": "mcq",
          "prompt": "Les levures cultivées en milieu anaérobie présentent :",
          "options": [
            "Peu de mitochondries, avec des crêtes très petites ou absentes",
            "De nombreuses mitochondries à crêtes développées",
            "Aucune cellule vivante",
            "Des mitochondries plus grandes qu'en milieu aérobie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé de la situation d'évaluation, question 4."
        },
        {
          "id": "premiere_a1_svt_l08_production_energie_cellule_p04_q6",
          "type": "mcq",
          "prompt": "La fermentation est qualifiée de réaction incomplète parce qu'elle :",
          "options": [
            "Ne commence jamais",
            "Produit plus d'ATP que la respiration",
            "Ne dégrade que partiellement le glucose, en milieu anaérobie",
            "Consomme du dioxygène"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conclusion de la partie II."
        }
      ]
    }
  ]
};
