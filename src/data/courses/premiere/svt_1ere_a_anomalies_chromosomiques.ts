import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 3 : Les anomalies chromosomiques » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=897
export const SVT_1ERE_A_L03_ANOMALIES_CHROMOSOMIQUES: CurriculumChapter = {
  "id": "premiere_a1_svt_l03_anomalies_chromosomiques",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 3,
  "title": "Leçon 3 : Les anomalies chromosomiques",
  "summary": "Trois chromosomes 21 au lieu de deux provoquent le syndrome de Down : les anomalies chromosomiques, de nombre ou de structure, naissent d'accidents de la méiose et se transmettent à l'œuf lors de la fécondation.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=897",
  "points": [
    {
      "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01",
      "order": 1,
      "title": "Le caryotype normal : 46 chromosomes, autosomes et gonosomes",
      "summary": "Définir le caryotype, distinguer les 22 paires d'autosomes de la paire de gonosomes et écrire les formules chromosomiques de l'homme et de la femme.",
      "conceptExplanation": "Le caryotype est l'ensemble des chromosomes d'un individu disposés sur une surface plane par paire et par ordre décroissant.\nOn compte au total 46 chromosomes chez l'Homme, présents par paire. La comparaison des caryotypes montre que 22 paires sont identiques dans les deux sexes : ce sont les autosomes. La différence réside au niveau de la 23e paire, qui différencie le sexe : XY chez l'homme et XX chez la femme ; ce sont les chromosomes sexuels, gonosomes ou hétérochromosomes.\nLa formule chromosomique chez l'homme est donc 44 autosomes + XY et chez la femme 44 autosomes + XX.\nTout changement dans ces nombres (augmentation ou baisse) ou dans la structure (perte d'un fragment de chromosome) engendre une maladie plus ou moins grave chez le sujet.",
      "keyRule": "46 chromosomes = 44 autosomes + 2 gonosomes : XX chez la femme, XY chez l'homme.",
      "formulas": [],
      "workedExample": {
        "title": "Répondre vrai ou faux (activité d'application)",
        "statement": "Juge : le caryotype est l'ensemble des chromosomes représentés sur une surface ; le mongolisme est dû à 3 chromosomes 21 ; le syndrome de Turner serait dû à l'absence d'un chromosome Y ; les gonosomes seraient les chromosomes identiques dans les deux sexes ; la formule d'un homme sain serait 44 + XYY.",
        "methodSteps": [
          "Vrai pour la définition du caryotype et pour les 3 chromosomes 21 du mongolisme.",
          "Faux pour Turner (c'est la présence d'un seul X, XO), faux pour les gonosomes (ce sont les chromosomes sexuels, différents chez l'homme), faux pour 44 + XYY."
        ],
        "conclusion": "Corrigé de l'activité : 1 vrai, 2 vrai, 3 faux, 4 faux, 5 faux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le caryotype",
          "stepTheme": "Le caryotype",
          "stepBadge": "Le caryotype",
          "paragraphText": "• Caryotype : ensemble des chromosomes d'un individu disposés sur une surface plane par paire et par ordre décroissant.\nLe document 1 présente les caryotypes de deux sujets sains, un homme et une femme.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q1",
            "type": "mcq",
            "prompt": "Le caryotype est :",
            "options": [
              "L'ensemble des gènes d'un individu",
              "Uniquement la 23e paire de chromosomes",
              "L'ensemble des chromosomes d'un individu disposés par paire et par ordre décroissant",
              "Le nombre de gamètes produits"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse du document 1 de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "46 chromosomes en 23 paires",
          "stepTheme": "46 chromosomes en 23 paires",
          "stepBadge": "46 chromosomes en 23 paires",
          "paragraphText": "On compte au total 46 chromosomes chez l'Homme, présents par paire.\nCela fait 23 paires, comme le rappelle le texte lacunaire de la partie II (1 : 23 paires).",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q2",
            "type": "mcq",
            "prompt": "Le caryotype humain normal contient :",
            "options": [
              "46 chromosomes, soit 23 paires",
              "23 chromosomes au total",
              "44 chromosomes au total",
              "47 chromosomes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Analyse du document 1 et corrigé du texte lacunaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les autosomes",
          "stepTheme": "Les autosomes",
          "stepBadge": "Les autosomes",
          "paragraphText": "Les 22 paires identiques dans les deux sexes sont appelées les autosomes.\nCe sont les chromosomes non sexuels, au nombre de 44.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q3",
            "type": "mcq",
            "prompt": "Les autosomes sont :",
            "options": [
              "La 23e paire qui différencie le sexe",
              "Uniquement les chromosomes 21",
              "Les chromosomes des gamètes uniquement",
              "Les 22 paires identiques dans les deux sexes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Explication de la partie I."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les gonosomes ou hétérochromosomes",
          "stepTheme": "Les gonosomes ou hétérochromosomes",
          "stepBadge": "Les gonosomes ou hétérochromosomes",
          "paragraphText": "La 23e paire permet de différencier le sexe.\nElle est appelée paire de chromosomes sexuels, de gonosomes ou d'hétérochromosomes : XY chez l'homme, XX chez la femme.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q4",
            "type": "mcq",
            "prompt": "La 23e paire de chromosomes est appelée :",
            "options": [
              "Autosomes",
              "Gonosomes ou hétérochromosomes",
              "Bivalent",
              "Chromatides"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Explication de la partie I."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les formules chromosomiques normales",
          "stepTheme": "Les formules chromosomiques normales",
          "stepBadge": "Les formules chromosomiques normales",
          "paragraphText": "La formule chromosomique chez l'homme est 44 autosomes + XY.\nChez la femme, elle est 44 autosomes + XX.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q5",
            "type": "mcq",
            "prompt": "La formule chromosomique d'une femme saine est :",
            "options": [
              "44 autosomes + XY",
              "44 autosomes + XX",
              "45 autosomes + X",
              "44 autosomes + XYY"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Explication de la partie I de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un homme sain n'est pas XYY",
          "stepTheme": "Un homme sain n'est pas XYY",
          "stepBadge": "Un homme sain n'est pas XYY",
          "paragraphText": "Piège de l'activité d'application : proposer 44 + XYY comme formule d'un homme sain est faux.\nLe tableau de la leçon associe au contraire la garniture 44 ; XYY à une anomalie, surnommée dans le tableau chromosomes de crime.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q6",
            "type": "mcq",
            "prompt": "La garniture 44 + XYY correspond, dans le tableau de la leçon, à :",
            "options": [
              "Un homme sain",
              "Une femme saine",
              "Un gamète normal",
              "Une anomalie chromosomique (2 chromosomes Y)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Tableau des anomalies de la partie I et corrigé de l'activité (affirmation 5 fausse)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q1",
          "type": "mcq",
          "prompt": "Le caryotype est :",
          "options": [
            "L'ensemble des gènes d'un individu",
            "Uniquement la 23e paire de chromosomes",
            "L'ensemble des chromosomes d'un individu disposés par paire et par ordre décroissant",
            "Le nombre de gamètes produits"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse du document 1 de la leçon."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q2",
          "type": "mcq",
          "prompt": "Le caryotype humain normal contient :",
          "options": [
            "46 chromosomes, soit 23 paires",
            "23 chromosomes au total",
            "44 chromosomes au total",
            "47 chromosomes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Analyse du document 1 et corrigé du texte lacunaire."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q3",
          "type": "mcq",
          "prompt": "Les autosomes sont :",
          "options": [
            "La 23e paire qui différencie le sexe",
            "Uniquement les chromosomes 21",
            "Les chromosomes des gamètes uniquement",
            "Les 22 paires identiques dans les deux sexes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Explication de la partie I."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q4",
          "type": "mcq",
          "prompt": "La 23e paire de chromosomes est appelée :",
          "options": [
            "Autosomes",
            "Gonosomes ou hétérochromosomes",
            "Bivalent",
            "Chromatides"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Explication de la partie I."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q5",
          "type": "mcq",
          "prompt": "La formule chromosomique d'une femme saine est :",
          "options": [
            "44 autosomes + XY",
            "44 autosomes + XX",
            "45 autosomes + X",
            "44 autosomes + XYY"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Explication de la partie I de la leçon."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p01_q6",
          "type": "mcq",
          "prompt": "La garniture 44 + XYY correspond, dans le tableau de la leçon, à :",
          "options": [
            "Un homme sain",
            "Une femme saine",
            "Un gamète normal",
            "Une anomalie chromosomique (2 chromosomes Y)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Tableau des anomalies de la partie I et corrigé de l'activité (affirmation 5 fausse)."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02",
      "order": 2,
      "title": "Le tableau des maladies liées aux anomalies chromosomiques",
      "summary": "Associer chaque anomalie à sa garniture chromosomique et à sa maladie : Down, Turner, XYY et cri du chat, sans oublier Klinefelter.",
      "conceptExplanation": "Le tableau de la leçon relie chaque anomalie à la garniture chromosomique et au nom de la maladie.\nTrois chromosomes 21 donnent une garniture de 47 chromosomes dont 3 chromosomes 21 : c'est le syndrome de Down, ou mongolisme. Un seul chromosome X donne la garniture notée 44 ; XO : c'est le syndrome de Turner. Deux chromosomes Y donnent la garniture 44 ; XYY, surnommée chromosomes de crime dans le tableau. La délétion du bras court du chromosome 5 donne 46 chromosomes dont le chromosome 5 amputé : c'est la maladie du cri du chat.\nL'exercice 1 de consolidation ajoute le syndrome de Klinefelter, dû à la présence de trois chromosomes sexuels XXY chez un individu.\nCes anomalies portent sur le nombre des chromosomes ou sur leur structure, comme la perte d'un fragment.",
      "keyRule": "Down = 47 dont 3 chromosomes 21 ; Turner = un seul X (XO) ; cri du chat = chromosome 5 amputé ; Klinefelter = XXY.",
      "formulas": [],
      "workedExample": {
        "title": "Relever les définitions exactes (exercice 1 de consolidation)",
        "statement": "Pour Turner, la trisomie 21 et Klinefelter, choisis la définition exacte parmi trois propositions.",
        "methodSteps": [
          "Turner : présence d'un seul chromosome sexuel X dans le caryotype (proposition A).",
          "Trisomie 21 : présence de trois chromosomes 21 chez un individu (proposition B).",
          "Klinefelter : présence de trois chromosomes sexuels XXY chez un individu (proposition A)."
        ],
        "conclusion": "Corrigé de l'exercice 1 : 1-A, 2-B, 3-A."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le syndrome de Down ou mongolisme",
          "stepTheme": "Le syndrome de Down ou mongolisme",
          "stepBadge": "Le syndrome de Down ou mongolisme",
          "paragraphText": "Le mongolisme ou syndrome de Down est la maladie de la situation d'apprentissage, révélée par amniocentèse et caryotype du fœtus.\nElle se caractérise par la présence de trois chromosomes de la paire 21 au lieu de deux.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q1",
            "type": "mcq",
            "prompt": "Le syndrome de Down est dû à :",
            "options": [
              "La présence de trois chromosomes 21",
              "La perte du chromosome 5",
              "Un seul chromosome X",
              "Deux chromosomes Y"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Situation d'apprentissage et tableau de la partie I."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La garniture du syndrome de Down",
          "stepTheme": "La garniture du syndrome de Down",
          "stepBadge": "La garniture du syndrome de Down",
          "paragraphText": "L'individu atteint du syndrome de Down possède 47 chromosomes au total.\nParmi eux, 3 chromosomes 21 : la formule est donc 47 chromosomes dont 3 chromosomes 21.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q2",
            "type": "mcq",
            "prompt": "La garniture chromosomique du syndrome de Down est :",
            "options": [
              "46 chromosomes normaux",
              "44 chromosomes + XO",
              "47 chromosomes dont 3 chromosomes 21",
              "46 chromosomes dont le 5 amputé"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Tableau de la partie I et corrigé de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le syndrome de Turner",
          "stepTheme": "Le syndrome de Turner",
          "stepBadge": "Le syndrome de Turner",
          "paragraphText": "Le syndrome de Turner correspond à la présence d'un seul chromosome X dans le caryotype.\nLe tableau note sa garniture 44 ; XO.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q3",
            "type": "mcq",
            "prompt": "Le syndrome de Turner est dû à :",
            "options": [
              "Trois chromosomes 21",
              "Trois chromosomes sexuels XXY",
              "La délétion du chromosome 5",
              "La présence d'un seul chromosome sexuel X (XO)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Tableau de la partie I et définition A de l'exercice 1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La maladie du cri du chat",
          "stepTheme": "La maladie du cri du chat",
          "stepBadge": "La maladie du cri du chat",
          "paragraphText": "La maladie du cri du chat résulte d'une délétion, c'est-à-dire la perte d'un fragment de chromosome.\nIl s'agit ici de la délétion du bras court du chromosome 5, qui reste présent mais amputé, pour un total de 46 chromosomes.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q4",
            "type": "mcq",
            "prompt": "La maladie du cri du chat est due à :",
            "options": [
              "Un chromosome 21 supplémentaire",
              "La délétion du bras court du chromosome 5",
              "Un seul chromosome X",
              "Deux chromosomes Y"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Tableau de la partie I."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le syndrome de Klinefelter",
          "stepTheme": "Le syndrome de Klinefelter",
          "stepBadge": "Le syndrome de Klinefelter",
          "paragraphText": "L'exercice 1 de consolidation définit le syndrome de Klinefelter.\nIl est dû à la présence de trois chromosomes sexuels XXY chez un individu.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q5",
            "type": "mcq",
            "prompt": "Le syndrome de Klinefelter est dû à :",
            "options": [
              "Un seul chromosome Y",
              "Un seul chromosome X",
              "La présence de trois chromosomes sexuels XXY",
              "La perte d'un chromosome 21"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Définition A de la question 3 de l'exercice 1, retenue au corrigé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Anomalie de nombre ou anomalie de structure",
          "stepTheme": "Anomalie de nombre ou anomalie de structure",
          "stepBadge": "Anomalie de nombre ou anomalie de structure",
          "paragraphText": "Piège : toutes les anomalies ne changent pas le nombre total de chromosomes.\nLa délétion du chromosome 5 laisse 46 chromosomes : c'est une anomalie de structure, alors que Down (47) et Turner sont des anomalies de nombre.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q6",
            "type": "mcq",
            "prompt": "La délétion du bras court du chromosome 5 est une anomalie :",
            "options": [
              "De structure, le total restant de 46 chromosomes amputés",
              "De nombre, avec 47 chromosomes",
              "Sans aucun effet",
              "Des seuls gamètes mâles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tableau de la partie I : 46 dont le chromosome 5 amputé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q1",
          "type": "mcq",
          "prompt": "Le syndrome de Down est dû à :",
          "options": [
            "La présence de trois chromosomes 21",
            "La perte du chromosome 5",
            "Un seul chromosome X",
            "Deux chromosomes Y"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Situation d'apprentissage et tableau de la partie I."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q2",
          "type": "mcq",
          "prompt": "La garniture chromosomique du syndrome de Down est :",
          "options": [
            "46 chromosomes normaux",
            "44 chromosomes + XO",
            "47 chromosomes dont 3 chromosomes 21",
            "46 chromosomes dont le 5 amputé"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Tableau de la partie I et corrigé de la situation d'évaluation."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q3",
          "type": "mcq",
          "prompt": "Le syndrome de Turner est dû à :",
          "options": [
            "Trois chromosomes 21",
            "Trois chromosomes sexuels XXY",
            "La délétion du chromosome 5",
            "La présence d'un seul chromosome sexuel X (XO)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Tableau de la partie I et définition A de l'exercice 1."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q4",
          "type": "mcq",
          "prompt": "La maladie du cri du chat est due à :",
          "options": [
            "Un chromosome 21 supplémentaire",
            "La délétion du bras court du chromosome 5",
            "Un seul chromosome X",
            "Deux chromosomes Y"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tableau de la partie I."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q5",
          "type": "mcq",
          "prompt": "Le syndrome de Klinefelter est dû à :",
          "options": [
            "Un seul chromosome Y",
            "Un seul chromosome X",
            "La présence de trois chromosomes sexuels XXY",
            "La perte d'un chromosome 21"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Définition A de la question 3 de l'exercice 1, retenue au corrigé."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p02_q6",
          "type": "mcq",
          "prompt": "La délétion du bras court du chromosome 5 est une anomalie :",
          "options": [
            "De structure, le total restant de 46 chromosomes amputés",
            "De nombre, avec 47 chromosomes",
            "Sans aucun effet",
            "Des seuls gamètes mâles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tableau de la partie I : 46 dont le chromosome 5 amputé."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03",
      "order": 3,
      "title": "L'origine méiotique : non-disjonction et cassures",
      "summary": "Expliquer comment la méiose produit des gamètes anormaux, par migration entière d'un bivalent ou par cassure et perte de fragments.",
      "conceptExplanation": "Le document 2 présente des étapes de la méiose dans l'ordre : Métaphase I, Anaphase I, Télophase I, Télophase II.\nAu cours du processus, un bivalent (ensemble formé par une paire de chromosomes homologues) migre entièrement vers un pôle cellulaire à l'Anaphase au lieu de se séparer. À la Télophase I et II, les cellules résultantes contiennent un nombre différent de chromosomes autre que le nombre haploïde de l'espèce.\nLe document 3 désigne un bivalent avec des chromatides formant des chiasmas (zones de contact entre chromatides non sœurs, siège possible d'un brassage intrachromosomique) à la Métaphase. Au cours de l'Anaphase, la séparation des bivalents peut s'accompagner de cassure et perte de certains fragments de chromatides, amputant les chromosomes de certains de leurs composants (gènes).\nLes cellules résultantes sont des gamètes anormaux. La méiose est la division qui, à partir d'une cellule diploïde, permet d'obtenir des cellules haploïdes appelées gamètes.",
      "keyRule": "Un bivalent qui migre en entier ou une chromatide qui se casse pendant la méiose donne des gamètes anormaux, en nombre ou en structure.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l'apparition d'un enfant mongolien (situation d'évaluation)",
        "statement": "Explique comment la méiose puis la fécondation peuvent donner un œuf trisomique 21.",
        "methodSteps": [
          "Au cours de la méiose, la paire de chromosomes 21 migre entièrement vers un pôle, donnant des gamètes anormaux à 24 et 22 chromosomes.",
          "À la fécondation, la rencontre d'un ovule à 24 chromosomes et d'un spermatozoïde à 23 chromosomes donne un œuf fécondé trisomique 21."
        ],
        "conclusion": "Corrigé de la situation d'évaluation, question 3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un bivalent",
          "stepTheme": "Un bivalent",
          "stepBadge": "Un bivalent",
          "paragraphText": "• Bivalent : ensemble formé par une paire de chromosomes homologues pendant la méiose.\nLe document 3 montre un bivalent dont les chromatides forment des chiasmas.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q1",
            "type": "mcq",
            "prompt": "Un bivalent est :",
            "options": [
              "L'ensemble formé par une paire de chromosomes homologues",
              "Un seul chromosome dédoublé",
              "Un gamète anormal",
              "Une paire de gamètes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Analyse du document 2 de la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La migration entière du bivalent",
          "stepTheme": "La migration entière du bivalent",
          "stepBadge": "La migration entière du bivalent",
          "paragraphText": "À l'Anaphase, un bivalent peut migrer entièrement vers un pôle cellulaire au lieu de se séparer.\nLes cellules résultantes contiennent alors un nombre de chromosomes différent du nombre haploïde de l'espèce.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q2",
            "type": "mcq",
            "prompt": "Quand un bivalent migre entièrement vers un pôle à l'Anaphase, les gamètes obtenus ont :",
            "options": [
              "Toujours le nombre haploïde normal",
              "Toujours 46 chromosomes",
              "Un nombre de chromosomes différent du nombre haploïde",
              "Aucun chromosome"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse du document 2 de la partie II."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les chiasmas",
          "stepTheme": "Les chiasmas",
          "stepBadge": "Les chiasmas",
          "paragraphText": "Les chiasmas sont des zones de contact entre chromatides non sœurs.\nIls sont le siège possible d'un brassage intrachromosomique et apparaissent à la Métaphase sur le document 3.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q3",
            "type": "mcq",
            "prompt": "Les chiasmas sont :",
            "options": [
              "Des fragments perdus de chromosomes",
              "Des zones de contact entre chromatides non sœurs, siège possible d'un brassage intrachromosomique",
              "Des gamètes anormaux",
              "Les pôles de la cellule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse du document 3 de la partie II."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Cassure et perte de fragments",
          "stepTheme": "Cassure et perte de fragments",
          "stepBadge": "Cassure et perte de fragments",
          "paragraphText": "Au cours de l'Anaphase, la séparation des bivalents peut s'accompagner de cassure et de perte de fragments de chromatides.\nLes chromosomes sont ainsi amputés de certains de leurs composants, les gènes, et les cellules résultantes sont des gamètes anormaux.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q4",
            "type": "mcq",
            "prompt": "La cassure de chromatides pendant la méiose produit :",
            "options": [
              "Des chromosomes plus complets",
              "Uniquement des gamètes normaux",
              "Des cellules diploïdes supplémentaires",
              "Des chromosomes amputés de certains gènes et des gamètes anormaux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Analyse du document 3 de la partie II."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "De la cellule diploïde aux gamètes haploïdes",
          "stepTheme": "De la cellule diploïde aux gamètes haploïdes",
          "stepBadge": "De la cellule diploïde aux gamètes haploïdes",
          "paragraphText": "La méiose est la division cellulaire qui, à partir d'une cellule diploïde, permet d'obtenir des cellules haploïdes appelées gamètes.\nC'est pendant cette division que surviennent les accidents de ségrégation à l'origine des anomalies.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q5",
            "type": "mcq",
            "prompt": "La méiose permet d'obtenir, à partir d'une cellule diploïde :",
            "options": [
              "Des cellules diploïdes identiques",
              "Uniquement des cellules à 47 chromosomes",
              "Des cellules haploïdes appelées gamètes",
              "Des œufs fécondés"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Corrigé du texte lacunaire de la partie II (mots 4 et 5)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'ordre des étapes du document 2",
          "stepTheme": "L'ordre des étapes du document 2",
          "stepBadge": "L'ordre des étapes du document 2",
          "paragraphText": "Le document 2 présente les étapes de la méiose dans un ordre précis.\nCet ordre est : Métaphase I, Anaphase I, Télophase I, Télophase II.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q6",
            "type": "mcq",
            "prompt": "L'ordre des étapes du document 2 est :",
            "options": [
              "Métaphase I, Anaphase I, Télophase I, Télophase II",
              "Anaphase I, Métaphase I, Télophase II",
              "Télophase I, Métaphase I, Anaphase I",
              "Métaphase II d'abord, puis Métaphase I"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Analyse du document 2 de la partie II."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q1",
          "type": "mcq",
          "prompt": "Un bivalent est :",
          "options": [
            "L'ensemble formé par une paire de chromosomes homologues",
            "Un seul chromosome dédoublé",
            "Un gamète anormal",
            "Une paire de gamètes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Analyse du document 2 de la partie II."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q2",
          "type": "mcq",
          "prompt": "Quand un bivalent migre entièrement vers un pôle à l'Anaphase, les gamètes obtenus ont :",
          "options": [
            "Toujours le nombre haploïde normal",
            "Toujours 46 chromosomes",
            "Un nombre de chromosomes différent du nombre haploïde",
            "Aucun chromosome"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse du document 2 de la partie II."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q3",
          "type": "mcq",
          "prompt": "Les chiasmas sont :",
          "options": [
            "Des fragments perdus de chromosomes",
            "Des zones de contact entre chromatides non sœurs, siège possible d'un brassage intrachromosomique",
            "Des gamètes anormaux",
            "Les pôles de la cellule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse du document 3 de la partie II."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q4",
          "type": "mcq",
          "prompt": "La cassure de chromatides pendant la méiose produit :",
          "options": [
            "Des chromosomes plus complets",
            "Uniquement des gamètes normaux",
            "Des cellules diploïdes supplémentaires",
            "Des chromosomes amputés de certains gènes et des gamètes anormaux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Analyse du document 3 de la partie II."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q5",
          "type": "mcq",
          "prompt": "La méiose permet d'obtenir, à partir d'une cellule diploïde :",
          "options": [
            "Des cellules diploïdes identiques",
            "Uniquement des cellules à 47 chromosomes",
            "Des cellules haploïdes appelées gamètes",
            "Des œufs fécondés"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Corrigé du texte lacunaire de la partie II (mots 4 et 5)."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p03_q6",
          "type": "mcq",
          "prompt": "L'ordre des étapes du document 2 est :",
          "options": [
            "Métaphase I, Anaphase I, Télophase I, Télophase II",
            "Anaphase I, Métaphase I, Télophase II",
            "Télophase I, Métaphase I, Anaphase I",
            "Métaphase II d'abord, puis Métaphase I"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Analyse du document 2 de la partie II."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04",
      "order": 4,
      "title": "La fécondation avec un gamète anormal et le rôle de l'âge de la mère",
      "summary": "Montrer que dès qu'un gamète anormal participe à la fécondation, le sujet résultant est malade, et que le risque de mongolisme augmente avec l'âge de la mère.",
      "conceptExplanation": "La reproduction est la conséquence d'une rencontre entre les gamètes.\nSi un spermatozoïde normal et un ovule normal fusionnent, le sujet est sain. Si un spermatozoïde anormal fusionne avec un ovule normal, le sujet est malade ; si un spermatozoïde normal fusionne avec un ovule anormal, le sujet est malade ; si les deux gamètes sont anormaux, le sujet est malade.\nCertaines anomalies sont incompatibles avec la vie et l'œuf résultant est avorté de manière spontanée.\nPour la trisomie 21, la méiose produit des gamètes à 24 et 22 chromosomes ; la rencontre d'un ovule à 24 chromosomes et d'un spermatozoïde à 23 chromosomes donne un œuf trisomique 21. Le tableau de la situation d'évaluation montre que le pourcentage de naissances de mongoliens augmente au fur et à mesure que l'âge de la mère augmente, la mère de l'enfant de la situation ayant 48 ans.",
      "keyRule": "Un seul gamète anormal suffit pour un enfant malade ; pour le mongolisme, le risque croît avec l'âge de la mère, sans aucun ensorcellement.",
      "formulas": [],
      "workedExample": {
        "title": "Conclure sur les accusations de sorcellerie (situation d'évaluation)",
        "statement": "Une tante accuse sa coépouse d'avoir ensorcelé son fils mongolien, dont la mère a 48 ans. Conclus à l'aide du tableau des pourcentages.",
        "methodSteps": [
          "Le pourcentage de naissances de mongoliens augmente avec l'âge de la mère : il atteint la valeur du tableau correspondant à 48 ans, bien supérieure à celle des mères jeunes.",
          "L'enfant souffre d'une anomalie chromosomique, le syndrome de Down, dont la survenue est favorisée par l'âge de la mère."
        ],
        "conclusion": "Corrigé de la situation d'évaluation : l'enfant n'a pas été ensorcelé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Un gamète anormal suffit",
          "stepTheme": "Un gamète anormal suffit",
          "stepBadge": "Un gamète anormal suffit",
          "paragraphText": "Dès qu'un gamète anormal participe à la fécondation, le sujet résultant est malade.\nCela vaut pour un spermatozoïde anormal avec un ovule normal, comme pour un ovule anormal avec un spermatozoïde normal.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q1",
            "type": "mcq",
            "prompt": "Si un ovule anormal fusionne avec un spermatozoïde normal, le sujet résultant est :",
            "options": [
              "Toujours sain",
              "Sain une fois sur deux selon la leçon",
              "Avorté dans tous les cas",
              "Malade"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Explication de la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deux gamètes normaux, un sujet sain",
          "stepTheme": "Deux gamètes normaux, un sujet sain",
          "stepBadge": "Deux gamètes normaux, un sujet sain",
          "paragraphText": "Le seul cas donnant un sujet sain est la fusion de deux gamètes normaux.\nToutes les autres combinaisons comportant au moins un gamète anormal donnent un sujet malade.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q2",
            "type": "mcq",
            "prompt": "Un sujet sain résulte de la fusion :",
            "options": [
              "De deux gamètes anormaux",
              "D'un spermatozoïde et d'un ovule normaux",
              "D'un gamète anormal et d'un gamète normal",
              "De deux ovules"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Explication de la partie II."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Certaines anomalies sont incompatibles avec la vie",
          "stepTheme": "Certaines anomalies sont incompatibles avec la vie",
          "stepBadge": "Certaines anomalies sont incompatibles avec la vie",
          "paragraphText": "Toutes les anomalies ne donnent pas un enfant viable.\nLa leçon précise que certaines anomalies sont incompatibles avec la vie et que l'œuf résultant est avorté de manière spontanée.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q3",
            "type": "mcq",
            "prompt": "Pour certaines anomalies incompatibles avec la vie, l'œuf résultant :",
            "options": [
              "Donne toujours un enfant viable",
              "Est avorté de manière spontanée",
              "Devient un gamète anormal",
              "Se corrige à la naissance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Fin de l'explication de la partie II."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le calcul de l'œuf trisomique 21",
          "stepTheme": "Le calcul de l'œuf trisomique 21",
          "stepBadge": "Le calcul de l'œuf trisomique 21",
          "paragraphText": "La non-disjonction de la paire 21 donne des gamètes anormaux à 24 et 22 chromosomes.\nLa rencontre d'un ovule à 24 chromosomes et d'un spermatozoïde normal à 23 chromosomes donne un œuf à 47 chromosomes, trisomique 21.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q4",
            "type": "mcq",
            "prompt": "Un œuf trisomique 21 résulte de la rencontre :",
            "options": [
              "D'un ovule à 23 et d'un spermatozoïde à 23 chromosomes",
              "De deux gamètes à 22 chromosomes",
              "D'un ovule à 22 et d'un spermatozoïde à 22 chromosomes",
              "D'un ovule à 24 chromosomes et d'un spermatozoïde à 23 chromosomes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Corrigé de la situation d'évaluation, question 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le risque augmente avec l'âge de la mère",
          "stepTheme": "Le risque augmente avec l'âge de la mère",
          "stepBadge": "Le risque augmente avec l'âge de la mère",
          "paragraphText": "Le tableau de la situation d'évaluation donne le pourcentage de naissances de mongoliens selon l'âge de la mère.\nL'analyse du corrigé conclut que ce pourcentage augmente au fur et à mesure que l'âge de la mère augmente.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q5",
            "type": "mcq",
            "prompt": "D'après le tableau, le pourcentage de naissances de mongoliens :",
            "options": [
              "Augmente au fur et à mesure que l'âge de la mère augmente",
              "Diminue quand l'âge de la mère augmente",
              "Reste constant à tout âge",
              "Est nul après 40 ans"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Analyse du tableau dans le corrigé de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La formule de l'enfant de l'exercice 3 de consolidation",
          "stepTheme": "La formule de l'enfant de l'exercice 3 de consolidation",
          "stepBadge": "La formule de l'enfant de l'exercice 3 de consolidation",
          "paragraphText": "Dans l'exercice 3, le gamète A possède 2 chromosomes à la position 21 et un chromosome X, le gamète B est normal avec un chromosome Y.\nLeur union donne un enfant avec trois autosomes 21, soit la formule 45 autosomes + XY déduite au corrigé.",
          "exercise": {
            "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q6",
            "type": "mcq",
            "prompt": "Selon le corrigé de l'exercice 3, la formule de la cellule-œuf issue de ces deux gamètes est :",
            "options": [
              "44 autosomes + XX",
              "44 autosomes + XY",
              "45 autosomes + XY",
              "46 autosomes + XY"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Déduction du corrigé de l'exercice 3 de consolidation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q1",
          "type": "mcq",
          "prompt": "Si un ovule anormal fusionne avec un spermatozoïde normal, le sujet résultant est :",
          "options": [
            "Toujours sain",
            "Sain une fois sur deux selon la leçon",
            "Avorté dans tous les cas",
            "Malade"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Explication de la partie II."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q2",
          "type": "mcq",
          "prompt": "Un sujet sain résulte de la fusion :",
          "options": [
            "De deux gamètes anormaux",
            "D'un spermatozoïde et d'un ovule normaux",
            "D'un gamète anormal et d'un gamète normal",
            "De deux ovules"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Explication de la partie II."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q3",
          "type": "mcq",
          "prompt": "Pour certaines anomalies incompatibles avec la vie, l'œuf résultant :",
          "options": [
            "Donne toujours un enfant viable",
            "Est avorté de manière spontanée",
            "Devient un gamète anormal",
            "Se corrige à la naissance"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Fin de l'explication de la partie II."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q4",
          "type": "mcq",
          "prompt": "Un œuf trisomique 21 résulte de la rencontre :",
          "options": [
            "D'un ovule à 23 et d'un spermatozoïde à 23 chromosomes",
            "De deux gamètes à 22 chromosomes",
            "D'un ovule à 22 et d'un spermatozoïde à 22 chromosomes",
            "D'un ovule à 24 chromosomes et d'un spermatozoïde à 23 chromosomes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Corrigé de la situation d'évaluation, question 3."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q5",
          "type": "mcq",
          "prompt": "D'après le tableau, le pourcentage de naissances de mongoliens :",
          "options": [
            "Augmente au fur et à mesure que l'âge de la mère augmente",
            "Diminue quand l'âge de la mère augmente",
            "Reste constant à tout âge",
            "Est nul après 40 ans"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Analyse du tableau dans le corrigé de la situation d'évaluation."
        },
        {
          "id": "premiere_a1_svt_l03_anomalies_chromosomiques_p04_q6",
          "type": "mcq",
          "prompt": "Selon le corrigé de l'exercice 3, la formule de la cellule-œuf issue de ces deux gamètes est :",
          "options": [
            "44 autosomes + XX",
            "44 autosomes + XY",
            "45 autosomes + XY",
            "46 autosomes + XY"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Déduction du corrigé de l'exercice 3 de consolidation."
        }
      ]
    }
  ]
};
