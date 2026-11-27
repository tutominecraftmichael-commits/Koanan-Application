import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Électrolyse » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Électrolyse » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const CHIMIE_1ERE_CD_L11_ELECTROLYSE: CurriculumChapter = {
  "id": "premiere_c_chimie_l11_electrolyse",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 11,
  "title": "Leçon 11 : Électrolyse",
  "summary": "On définit l'électrolyse comme une oxydoréduction forcée par le courant électrique, on l'interprète pour l'acide sulfurique, le chlorure d'étain et le chlorure de sodium, puis on présente ses applications, dont les dépôts métalliques.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Électrolyse » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_chimie_l11_electrolyse_p01",
      "order": 1,
      "title": "Qu'est-ce qu'une électrolyse ?",
      "summary": "L'électrolyse est l'ensemble des réactions provoquées par le passage du courant dans une solution.",
      "conceptExplanation": "L'électrolyse est l'ensemble des réactions chimiques qui se produisent lors du passage du courant électrique dans une solution. La solution utilisée est appelée un électrolyte.\nÀ la cathode, il se produit toujours une réduction : les cations, attirés vers cette électrode, y captent des électrons. À l'anode, il se produit toujours une oxydation : des espèces y cèdent des électrons.\nPour les espèces présentes dans l'électrolyte, c'est le réducteur le plus fort qui est oxydé et l'oxydant le plus fort qui est réduit.",
      "keyRule": "Cathode égale réduction et anode égale oxydation, toujours, au cours d'une électrolyse.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte de l'exercice 1",
        "statement": "Complète : l'électrolyse est l'inverse de la réaction d'oxydoréduction spontanée ; il se produit une … à la cathode et une … à l'anode ; c'est le réducteur le plus fort qui est … et l'oxydant le plus fort qui est … .",
        "methodSteps": [
          "À la cathode, les cations captent des électrons : c'est une réduction.",
          "À l'anode, les espèces cèdent des électrons : c'est une oxydation.",
          "L'espèce oxydée est le réducteur le plus fort, et l'espèce réduite est l'oxydant le plus fort."
        ],
        "conclusion": "Réduction à la cathode, oxydation à l'anode, réducteur le plus fort oxydé et oxydant le plus fort réduit."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de l'électrolyse",
          "stepTheme": "Définition de l'électrolyse",
          "stepBadge": "Définition de l'électrolyse",
          "paragraphText": "• Électrolyse : ensemble des réactions chimiques qui se produisent lors du passage du courant électrique dans une solution.\nLa solution dans laquelle plongent les électrodes est appelée un électrolyte.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p01_q1",
            "type": "mcq",
            "prompt": "La solution utilisée au cours d'une électrolyse est appelée :",
            "options": [
              "Un électrolyte",
              "Un indicateur",
              "Un catalyseur",
              "Un précipité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §1 de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Ce qui se passe à la cathode",
          "stepTheme": "Ce qui se passe à la cathode",
          "stepBadge": "Ce qui se passe à la cathode",
          "paragraphText": "À la cathode, les cations captent des électrons.\nCapter des électrons est une réduction : il se produit toujours une réduction à la cathode.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p01_q2",
            "type": "mcq",
            "prompt": "Au cours d'une électrolyse, il se produit à la cathode :",
            "options": [
              "Une oxydation",
              "Une réduction",
              "Une dissolution sans électrons",
              "Une combustion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la règle rappelée dans les exercices 1 et 2 de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Ce qui se passe à l'anode",
          "stepTheme": "Ce qui se passe à l'anode",
          "stepBadge": "Ce qui se passe à l'anode",
          "paragraphText": "À l'anode, des espèces chimiques cèdent des électrons au circuit.\nCéder des électrons est une oxydation : il se produit toujours une oxydation à l'anode.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p01_q3",
            "type": "mcq",
            "prompt": "Au cours d'une électrolyse, il se produit à l'anode :",
            "options": [
              "Une réduction",
              "Un dépôt métallique toujours",
              "Une oxydation",
              "Aucune réaction"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'anode est le lieu de l'oxydation, en miroir de la cathode."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Où migrent les cations ?",
          "stepTheme": "Où migrent les cations ?",
          "stepBadge": "Où migrent les cations ?",
          "paragraphText": "Les cations sont des ions positifs : ils sont attirés par l'électrode négative du montage.\nCette électrode est la cathode, où ils seront réduits.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p01_q4",
            "type": "mcq",
            "prompt": "Au cours de l'électrolyse, les cations migrent vers :",
            "options": [
              "L'anode uniquement",
              "Le haut du tube",
              "L'agitateur",
              "La cathode"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la réponse de l'exercice 2 : les cations vont vers la cathode."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Quelles espèces réagissent en priorité ?",
          "stepTheme": "Quelles espèces réagissent en priorité ?",
          "stepBadge": "Quelles espèces réagissent en priorité ?",
          "paragraphText": "D'après le texte à compléter de l'exercice 1, toutes les espèces présentes ne réagissent pas.\nCe sont les plus fortes de chaque famille qui sont transformées.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p01_q5",
            "type": "mcq",
            "prompt": "Au cours d'une électrolyse, l'espèce qui est oxydée est :",
            "options": [
              "Le réducteur le plus fort",
              "Le réducteur le plus faible",
              "L'oxydant le plus fort",
              "L'espèce la moins concentrée dans tous les cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Et symétriquement, c'est l'oxydant le plus fort qui est réduit à la cathode."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une réaction non naturelle",
          "stepTheme": "Une réaction non naturelle",
          "stepBadge": "Une réaction non naturelle",
          "paragraphText": "Piège : l'électrolyse ne se produit pas toute seule.\nLa réaction chimique qui a lieu au cours d'une électrolyse est non naturelle : elle est provoquée par le courant électrique.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p01_q6",
            "type": "mcq",
            "prompt": "La réaction d'une électrolyse est qualifiée, dans l'exercice 2, de :",
            "options": [
              "Naturelle",
              "Non naturelle",
              "Spontanée",
              "Instantanée et sans énergie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle exige un apport d'énergie électrique : c'est le §5 de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l11_electrolyse_p01_q1",
          "type": "mcq",
          "prompt": "La solution utilisée au cours d'une électrolyse est appelée :",
          "options": [
            "Un électrolyte",
            "Un indicateur",
            "Un catalyseur",
            "Un précipité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §1 de la leçon."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p01_q2",
          "type": "mcq",
          "prompt": "Au cours d'une électrolyse, il se produit à la cathode :",
          "options": [
            "Une oxydation",
            "Une réduction",
            "Une dissolution sans électrons",
            "Une combustion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la règle rappelée dans les exercices 1 et 2 de la leçon."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p01_q3",
          "type": "mcq",
          "prompt": "Au cours d'une électrolyse, il se produit à l'anode :",
          "options": [
            "Une réduction",
            "Un dépôt métallique toujours",
            "Une oxydation",
            "Aucune réaction"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'anode est le lieu de l'oxydation, en miroir de la cathode."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p01_q4",
          "type": "mcq",
          "prompt": "Au cours de l'électrolyse, les cations migrent vers :",
          "options": [
            "L'anode uniquement",
            "Le haut du tube",
            "L'agitateur",
            "La cathode"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la réponse de l'exercice 2 : les cations vont vers la cathode."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p01_q5",
          "type": "mcq",
          "prompt": "Au cours d'une électrolyse, l'espèce qui est oxydée est :",
          "options": [
            "Le réducteur le plus fort",
            "Le réducteur le plus faible",
            "L'oxydant le plus fort",
            "L'espèce la moins concentrée dans tous les cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Et symétriquement, c'est l'oxydant le plus fort qui est réduit à la cathode."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p01_q6",
          "type": "mcq",
          "prompt": "La réaction d'une électrolyse est qualifiée, dans l'exercice 2, de :",
          "options": [
            "Naturelle",
            "Non naturelle",
            "Spontanée",
            "Instantanée et sans énergie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle exige un apport d'énergie électrique : c'est le §5 de la leçon."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l11_electrolyse_p02",
      "order": 2,
      "title": "Électrolyse de la solution d'acide sulfurique",
      "summary": "L'électrolyse de l'acide sulfurique dégage du dioxygène à l'anode et du dihydrogène à la cathode.",
      "conceptExplanation": "Dans un électrolyseur à électrodes de platine contenant une solution d'acide sulfurique, le passage du courant produit un dégagement gazeux à chaque électrode.\nÀ l'anode, le gaz recueilli rallume une bûchette présentant un point incandescent : c'est du dioxygène, obtenu par l'oxydation de l'eau. À la cathode, le gaz dégagé brûle avec une petite détonation : c'est du dihydrogène, obtenu par la réduction des ions hydronium.\nAu total, cette électrolyse décompose l'eau en dihydrogène et dioxygène.",
      "keyRule": "Anode égale dioxygène qui rallume la bûchette ; cathode égale dihydrogène qui détone.",
      "formulas": [
        {
          "name": "Oxydation de l'eau à l'anode",
          "formula": "2H_2O \\rightarrow O_2 + 4H^+ + 4e^-"
        },
        {
          "name": "Réduction à la cathode",
          "formula": "4H^+ + 4e^- \\rightarrow 2H_2"
        },
        {
          "name": "Équation-bilan",
          "formula": "2H_2O \\rightarrow 2H_2 + O_2"
        }
      ],
      "workedExample": {
        "title": "Identifier les deux gaz formés",
        "statement": "Lors de l'électrolyse de l'acide sulfurique, comment identifie-t-on le gaz formé à chaque électrode ?",
        "methodSteps": [
          "À l'anode, le gaz rallume une bûchette présentant un point incandescent : c'est le dioxygène.",
          "À la cathode, le gaz brûle avec une petite détonation : c'est le dihydrogène."
        ],
        "conclusion": "Les deux tests conduisent au bilan de décomposition de l'eau : $2H_2O \\rightarrow 2H_2 + O_2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le gaz de l'anode",
          "stepTheme": "Le gaz de l'anode",
          "stepBadge": "Le gaz de l'anode",
          "paragraphText": "Le gaz recueilli à l'anode a une propriété caractéristique sur une bûchette incandescente.\nC'est le test du dioxygène décrit dans les observations.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p02_q1",
            "type": "mcq",
            "prompt": "Le gaz formé à l'anode rallume une bûchette incandescente : c'est :",
            "options": [
              "Le dihydrogène",
              "Le dioxygène",
              "Le dichlore",
              "Le dioxyde de carbone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le dioxygène entretient la combustion : il rallume la bûchette."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le gaz de la cathode",
          "stepTheme": "Le gaz de la cathode",
          "stepBadge": "Le gaz de la cathode",
          "paragraphText": "Le gaz formé à la cathode brûle avec une petite détonation.\nC'est le test caractéristique du dihydrogène.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p02_q2",
            "type": "mcq",
            "prompt": "Le gaz formé à la cathode, qui brûle avec une petite détonation, est :",
            "options": [
              "Le dioxygène",
              "Le dichlore",
              "Le dihydrogène",
              "La vapeur d'eau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La petite détonation est la signature du dihydrogène dans les observations de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La réaction à l'anode",
          "stepTheme": "La réaction à l'anode",
          "stepBadge": "La réaction à l'anode",
          "paragraphText": "Le dioxygène de l'anode provient de l'eau elle-même.\nL'eau y cède des électrons : elle est oxydée, comme l'exige l'anode.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p02_q3",
            "type": "mcq",
            "prompt": "À l'anode, le dioxygène est obtenu par :",
            "options": [
              "La réduction de l'eau",
              "La réduction des ions sulfate",
              "L'oxydation des électrodes de platine",
              "L'oxydation de l'eau"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La demi-équation est $2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$ : l'eau perd des électrons."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le bilan de cette électrolyse",
          "stepTheme": "Le bilan de cette électrolyse",
          "stepBadge": "Le bilan de cette électrolyse",
          "paragraphText": "On additionne les deux demi-équations après avoir égalé les électrons à 4.\nLes ions $H^+$ produits à l'anode sont exactement ceux consommés à la cathode.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p02_q4",
            "type": "mcq",
            "prompt": "L'équation-bilan de l'électrolyse de l'acide sulfurique est :",
            "options": [
              "$2H_2O \\rightarrow 2H_2 + O_2$",
              "$H_2SO_4 \\rightarrow H_2 + SO_2$",
              "$2H_2O \\rightarrow H_2 + 2O_2$",
              "$H_2O \\rightarrow H_2O_2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seule l'eau est transformée : 2 molécules donnent 2 molécules de dihydrogène et 1 de dioxygène."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les électrodes de platine ne réagissent pas",
          "stepTheme": "Les électrodes de platine ne réagissent pas",
          "stepBadge": "Les électrodes de platine ne réagissent pas",
          "paragraphText": "Piège : les électrodes de platine servent seulement à conduire le courant dans cette expérience.\nLes espèces transformées sont l'eau et les ions hydronium de la solution.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p02_q5",
            "type": "mcq",
            "prompt": "Dans cette électrolyse, les électrodes utilisées sont en :",
            "options": [
              "Cuivre",
              "Platine",
              "Zinc",
              "Étain"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le platine, inattaquable, est précisé dans le protocole du §2.1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le rapport des volumes gazeux",
          "stepTheme": "Le rapport des volumes gazeux",
          "stepBadge": "Le rapport des volumes gazeux",
          "paragraphText": "D'après le bilan, il se forme 2 molécules de dihydrogène pour 1 molécule de dioxygène.\nLe volume de dihydrogène recueilli est donc le double de celui du dioxygène.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p02_q6",
            "type": "mcq",
            "prompt": "D'après le bilan, le volume de dihydrogène formé est, par rapport à celui de dioxygène :",
            "options": [
              "Égal",
              "Trois fois plus grand",
              "Le double",
              "La moitié"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les coefficients du bilan sont 2 pour $H_2$ et 1 pour $O_2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l11_electrolyse_p02_q1",
          "type": "mcq",
          "prompt": "Le gaz formé à l'anode rallume une bûchette incandescente : c'est :",
          "options": [
            "Le dihydrogène",
            "Le dioxygène",
            "Le dichlore",
            "Le dioxyde de carbone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le dioxygène entretient la combustion : il rallume la bûchette."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p02_q2",
          "type": "mcq",
          "prompt": "Le gaz formé à la cathode, qui brûle avec une petite détonation, est :",
          "options": [
            "Le dioxygène",
            "Le dichlore",
            "Le dihydrogène",
            "La vapeur d'eau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La petite détonation est la signature du dihydrogène dans les observations de la leçon."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p02_q3",
          "type": "mcq",
          "prompt": "À l'anode, le dioxygène est obtenu par :",
          "options": [
            "La réduction de l'eau",
            "La réduction des ions sulfate",
            "L'oxydation des électrodes de platine",
            "L'oxydation de l'eau"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La demi-équation est $2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$ : l'eau perd des électrons."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p02_q4",
          "type": "mcq",
          "prompt": "L'équation-bilan de l'électrolyse de l'acide sulfurique est :",
          "options": [
            "$2H_2O \\rightarrow 2H_2 + O_2$",
            "$H_2SO_4 \\rightarrow H_2 + SO_2$",
            "$2H_2O \\rightarrow H_2 + 2O_2$",
            "$H_2O \\rightarrow H_2O_2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seule l'eau est transformée : 2 molécules donnent 2 molécules de dihydrogène et 1 de dioxygène."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p02_q5",
          "type": "mcq",
          "prompt": "Dans cette électrolyse, les électrodes utilisées sont en :",
          "options": [
            "Cuivre",
            "Platine",
            "Zinc",
            "Étain"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le platine, inattaquable, est précisé dans le protocole du §2.1."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p02_q6",
          "type": "mcq",
          "prompt": "D'après le bilan, le volume de dihydrogène formé est, par rapport à celui de dioxygène :",
          "options": [
            "Égal",
            "Trois fois plus grand",
            "Le double",
            "La moitié"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les coefficients du bilan sont 2 pour $H_2$ et 1 pour $O_2$."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l11_electrolyse_p03",
      "order": 3,
      "title": "Électrolyse de la solution de chlorure d'étain",
      "summary": "L'électrolyse du chlorure d'étain dépose de l'étain à la cathode et dégage du dichlore à l'anode.",
      "conceptExplanation": "Dans un électrolyseur à électrodes de graphite contenant une solution acidifiée de chlorure d'étain, on observe des bulles gazeuses à l'anode et un dépôt métallique arborescent à la cathode. Une goutte d'indigo versée près de l'anode se décolore, ce qui révèle le dichlore.\nÀ l'anode, les ions chlorure sont oxydés en dichlore en cédant des électrons. À la cathode, l'arborescence métallique est l'étain : les ions étain $Sn^{2+}$ sont réduits en captant des électrons.\nC'est le principe de l'étamage des couverts présenté dans la situation d'apprentissage.",
      "keyRule": "À retenir : le métal se dépose toujours à la cathode, où ses cations sont réduits.",
      "formulas": [
        {
          "name": "Oxydation des chlorure à l'anode",
          "formula": "2Cl^- \\rightarrow Cl_2 + 2e^-"
        },
        {
          "name": "Réduction des ions étain à la cathode",
          "formula": "Sn^{2+} + 2e^- \\rightarrow Sn"
        },
        {
          "name": "Équation-bilan",
          "formula": "Sn^{2+} + 2Cl^- \\rightarrow Sn + Cl_2"
        }
      ],
      "workedExample": {
        "title": "Interpréter l'électrolyse du chlorure d'étain (exercice 3)",
        "statement": "On observe un dépôt métallique brillant sur la cathode et des bulles de gaz du côté de l'anode. Interprète ces observations et écris le bilan.",
        "methodSteps": [
          "À l'anode, le gaz est du dichlore, obtenu par l'oxydation des ions chlorure.",
          "À la cathode, le dépôt métallique est de l'étain, obtenu par la réduction des ions étain II.",
          "Les deux demi-équations échangent 2 électrons : on les additionne directement."
        ],
        "conclusion": "Le bilan est $Sn^{2+} + 2Cl^- \\rightarrow Sn + Cl_2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le dépôt sur la cathode",
          "stepTheme": "Le dépôt sur la cathode",
          "stepBadge": "Le dépôt sur la cathode",
          "paragraphText": "Un dépôt métallique arborescent apparaît sur la cathode.\nIl correspond au métal contenu dans la solution sous forme d'ions.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p03_q1",
            "type": "mcq",
            "prompt": "Le dépôt arborescent formé à la cathode est :",
            "options": [
              "Du dichlore",
              "De l'étain métallique",
              "Du graphite",
              "Du chlorure d'étain solide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les ions $Sn^{2+}$ réduits donnent l'étain métallique qui se dépose en arborescence."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le gaz de l'anode",
          "stepTheme": "Le gaz de l'anode",
          "stepBadge": "Le gaz de l'anode",
          "paragraphText": "Des bulles gazeuses apparaissent à l'anode.\nUne goutte d'indigo versée à proximité se décolore, ce qui caractérise le dichlore.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p03_q2",
            "type": "mcq",
            "prompt": "Le gaz formé à l'anode, qui décolore l'indigo, est :",
            "options": [
              "Le dioxygène",
              "Le dihydrogène",
              "Le dichlore",
              "Le dioxyde de carbone"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le dichlore est un décolorant : c'est le test utilisé dans l'expérience."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La demi-équation de l'anode",
          "stepTheme": "La demi-équation de l'anode",
          "stepBadge": "La demi-équation de l'anode",
          "paragraphText": "Les ions chlorure cèdent chacun un électron.\nIl faut deux ions chlorure pour former une molécule de dichlore et libérer deux électrons.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p03_q3",
            "type": "mcq",
            "prompt": "À l'anode, la réaction qui se produit est :",
            "options": [
              "$Cl_2 + 2e^- \\rightarrow 2Cl^-$",
              "$Sn^{2+} + 2e^- \\rightarrow Sn$",
              "$2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$",
              "$2Cl^- \\rightarrow Cl_2 + 2e^-$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est une oxydation : les électrons sont du côté des produits."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Construire le bilan",
          "stepTheme": "Construire le bilan",
          "stepBadge": "Construire le bilan",
          "paragraphText": "Les deux demi-équations échangent le même nombre d'électrons, égal à 2.\nOn peut donc les additionner sans coefficient supplémentaire, en supprimant les électrons.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p03_q4",
            "type": "mcq",
            "prompt": "Le nombre d'électrons échangés dans chaque demi-équation de cette électrolyse est :",
            "options": [
              "2",
              "4",
              "1",
              "6"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux électrons cédés par les chlorure et deux électrons captés par l'ion étain."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'application : l'étamage",
          "stepTheme": "L'application : l'étamage",
          "stepBadge": "L'application : l'étamage",
          "paragraphText": "La situation d'apprentissage explique que certains couverts de table sont étamés par électrolyse.\nUne solution contenant des ions étain $Sn^{2+}$ recouvre ainsi les couverts d'une couche d'étain.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p03_q5",
            "type": "mcq",
            "prompt": "L'étamage des couverts consiste à déposer, par électrolyse, une couche de :",
            "options": [
              "Dichlore",
              "D'étain sur les couverts",
              "De graphite",
              "D'argent obligatoirement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les couverts jouent le rôle de cathode et se recouvrent d'étain métallique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les électrodes sont en graphite",
          "stepTheme": "Les électrodes sont en graphite",
          "stepBadge": "Les électrodes sont en graphite",
          "paragraphText": "Piège : dans cette expérience, les électrodes sont en graphite, et non en étain.\nL'étain déposé provient uniquement des ions de la solution.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p03_q6",
            "type": "mcq",
            "prompt": "Les électrodes de l'électrolyse du chlorure d'étain sont en :",
            "options": [
              "Étain",
              "Platine",
              "Graphite",
              "Cuivre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le protocole du §3.1 de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l11_electrolyse_p03_q1",
          "type": "mcq",
          "prompt": "Le dépôt arborescent formé à la cathode est :",
          "options": [
            "Du dichlore",
            "De l'étain métallique",
            "Du graphite",
            "Du chlorure d'étain solide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les ions $Sn^{2+}$ réduits donnent l'étain métallique qui se dépose en arborescence."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p03_q2",
          "type": "mcq",
          "prompt": "Le gaz formé à l'anode, qui décolore l'indigo, est :",
          "options": [
            "Le dioxygène",
            "Le dihydrogène",
            "Le dichlore",
            "Le dioxyde de carbone"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le dichlore est un décolorant : c'est le test utilisé dans l'expérience."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p03_q3",
          "type": "mcq",
          "prompt": "À l'anode, la réaction qui se produit est :",
          "options": [
            "$Cl_2 + 2e^- \\rightarrow 2Cl^-$",
            "$Sn^{2+} + 2e^- \\rightarrow Sn$",
            "$2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$",
            "$2Cl^- \\rightarrow Cl_2 + 2e^-$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est une oxydation : les électrons sont du côté des produits."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p03_q4",
          "type": "mcq",
          "prompt": "Le nombre d'électrons échangés dans chaque demi-équation de cette électrolyse est :",
          "options": [
            "2",
            "4",
            "1",
            "6"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux électrons cédés par les chlorure et deux électrons captés par l'ion étain."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p03_q5",
          "type": "mcq",
          "prompt": "L'étamage des couverts consiste à déposer, par électrolyse, une couche de :",
          "options": [
            "Dichlore",
            "D'étain sur les couverts",
            "De graphite",
            "D'argent obligatoirement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les couverts jouent le rôle de cathode et se recouvrent d'étain métallique."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p03_q6",
          "type": "mcq",
          "prompt": "Les électrodes de l'électrolyse du chlorure d'étain sont en :",
          "options": [
            "Étain",
            "Platine",
            "Graphite",
            "Cuivre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le protocole du §3.1 de la leçon."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l11_electrolyse_p04",
      "order": 4,
      "title": "Électrolyse de la solution de chlorure de sodium",
      "summary": "L'électrolyse de l'eau salée donne du dichlore à l'anode et du dihydrogène avec des ions hydroxyde à la cathode.",
      "conceptExplanation": "On verse une solution aqueuse de chlorure de sodium dans un tube en U, avec des électrodes de graphite. À l'anode, on observe une décoloration de l'indigo, qui indique la présence de dichlore : les ions chlorure sont oxydés.\nÀ la cathode, il y a un dégagement gazeux et quelques gouttes de phénolphtaléine virent au rose : le compartiment cathodique est devenu basique. L'eau s'y est réduite en dihydrogène et en ions hydroxyde.\nCette électrolyse produit donc les corps simples $H_2$ et $Cl_2$, avec une solution basique à la cathode.",
      "keyRule": "Avec le chlorure de sodium, ce n'est pas l'ion sodium qui est réduit : c'est l'eau, qui donne $H_2$ et des ions $OH^-$.",
      "formulas": [
        {
          "name": "Oxydation des chlorure à l'anode",
          "formula": "2Cl^- \\rightarrow Cl_2 + 2e^-"
        },
        {
          "name": "Réduction de l'eau à la cathode",
          "formula": "2H_2O + 2e^- \\rightarrow H_2 + 2OH^-"
        },
        {
          "name": "Équation-bilan",
          "formula": "2H_2O + 2Cl^- \\rightarrow H_2 + Cl_2 + 2OH^-"
        }
      ],
      "workedExample": {
        "title": "Pourquoi la cathode devient-elle basique ?",
        "statement": "Explique le virage au rose de la phénolphtaléine du côté de la cathode lors de l'électrolyse du chlorure de sodium.",
        "methodSteps": [
          "À la cathode, c'est l'eau qui est réduite, selon $2H_2O + 2e^- \\rightarrow H_2 + 2OH^-$.",
          "Cette réduction libère des ions hydroxyde $OH^-$ dans le compartiment cathodique.",
          "Le milieu devient basique : la phénolphtaléine y vire au rose."
        ],
        "conclusion": "Le caractère basique de la cathode vient des ions hydroxyde produits par la réduction de l'eau."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "L'observation à la cathode",
          "stepTheme": "L'observation à la cathode",
          "stepBadge": "L'observation à la cathode",
          "paragraphText": "Du côté de la cathode, un gaz se dégage.\nLa phénolphtaléine ajoutée vire au rose, signe d'un milieu devenu basique.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p04_q1",
            "type": "mcq",
            "prompt": "À la cathode de l'électrolyse du chlorure de sodium, la phénolphtaléine vire au rose car :",
            "options": [
              "Le milieu est devenu acide",
              "Le milieu est devenu basique",
              "Du sodium métallique se dépose",
              "L'indigo se décolore"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le rose de la phénolphtaléine indique un pH basique, dû aux ions hydroxyde formés."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'espèce réduite à la cathode",
          "stepTheme": "L'espèce réduite à la cathode",
          "stepBadge": "L'espèce réduite à la cathode",
          "paragraphText": "Contrairement au cas du chlorure d'étain, aucun dépôt de sodium n'apparaît.\nC'est l'eau qui capte les électrons à la cathode.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p04_q2",
            "type": "mcq",
            "prompt": "À la cathode, l'espèce réduite est :",
            "options": [
              "L'ion sodium $Na^+$",
              "L'ion chlorure",
              "L'eau $H_2O$",
              "Le dichlore"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sa réduction produit le dihydrogène et les ions hydroxyde observés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les produits de cette électrolyse",
          "stepTheme": "Les produits de cette électrolyse",
          "stepBadge": "Les produits de cette électrolyse",
          "paragraphText": "Le bilan fait apparaître deux gaz et des ions hydroxyde.\nLes corps simples produits sont le dihydrogène et le dichlore.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p04_q3",
            "type": "mcq",
            "prompt": "L'électrolyse du chlorure de sodium produit les corps simples :",
            "options": [
              "$O_2$ et $Na$",
              "$Sn$ et $Cl_2$",
              "$H_2$ et $O_2$",
              "$H_2$ et $Cl_2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la conclusion du §4.2 : dihydrogène à la cathode et dichlore à l'anode."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Pas de dépôt de sodium",
          "stepTheme": "Pas de dépôt de sodium",
          "stepBadge": "Pas de dépôt de sodium",
          "paragraphText": "Piège : la présence d'ions sodium dans la solution ne signifie pas qu'ils seront réduits.\nL'oxydant le plus fort présent est réduit en priorité, et ici la réduction observée est celle de l'eau.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p04_q4",
            "type": "mcq",
            "prompt": "À la cathode de cette électrolyse, on observe :",
            "options": [
              "Un dégagement de dihydrogène et un milieu basique",
              "Un dépôt de sodium métallique",
              "Un dépôt de chlore solide",
              "Aucun changement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les observations du §4.1 sont un gaz et le virage au rose de la phénolphtaléine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le montage utilisé",
          "stepTheme": "Le montage utilisé",
          "stepBadge": "Le montage utilisé",
          "paragraphText": "L'expérience est réalisée dans un tube en U.\nCe montage permet d'observer séparément ce qui se passe autour de chaque électrode en graphite.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p04_q5",
            "type": "mcq",
            "prompt": "Le montage de l'électrolyse du chlorure de sodium utilise :",
            "options": [
              "Un électrolyseur à platine",
              "Un tube en U avec des électrodes de graphite",
              "Une burette graduée",
              "Un bécher avec agitateur magnétique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le protocole du §4.1 de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le point commun avec le chlorure d'étain",
          "stepTheme": "Le point commun avec le chlorure d'étain",
          "stepBadge": "Le point commun avec le chlorure d'étain",
          "paragraphText": "Dans les deux électrolyses de solutions de chlorures, l'anode donne le même gaz.\nLes ions chlorure sont en effet oxydés de la même façon.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p04_q6",
            "type": "mcq",
            "prompt": "Le gaz formé à l'anode est le même pour le chlorure d'étain et le chlorure de sodium : c'est :",
            "options": [
              "Le dioxygène",
              "Le dihydrogène",
              "Le dichlore",
              "Le dioxyde de soufre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Dans les deux cas, $2Cl^- \\rightarrow Cl_2 + 2e^-$ à l'anode."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l11_electrolyse_p04_q1",
          "type": "mcq",
          "prompt": "À la cathode de l'électrolyse du chlorure de sodium, la phénolphtaléine vire au rose car :",
          "options": [
            "Le milieu est devenu acide",
            "Le milieu est devenu basique",
            "Du sodium métallique se dépose",
            "L'indigo se décolore"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le rose de la phénolphtaléine indique un pH basique, dû aux ions hydroxyde formés."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p04_q2",
          "type": "mcq",
          "prompt": "À la cathode, l'espèce réduite est :",
          "options": [
            "L'ion sodium $Na^+$",
            "L'ion chlorure",
            "L'eau $H_2O$",
            "Le dichlore"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sa réduction produit le dihydrogène et les ions hydroxyde observés."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p04_q3",
          "type": "mcq",
          "prompt": "L'électrolyse du chlorure de sodium produit les corps simples :",
          "options": [
            "$O_2$ et $Na$",
            "$Sn$ et $Cl_2$",
            "$H_2$ et $O_2$",
            "$H_2$ et $Cl_2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la conclusion du §4.2 : dihydrogène à la cathode et dichlore à l'anode."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p04_q4",
          "type": "mcq",
          "prompt": "À la cathode de cette électrolyse, on observe :",
          "options": [
            "Un dégagement de dihydrogène et un milieu basique",
            "Un dépôt de sodium métallique",
            "Un dépôt de chlore solide",
            "Aucun changement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les observations du §4.1 sont un gaz et le virage au rose de la phénolphtaléine."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p04_q5",
          "type": "mcq",
          "prompt": "Le montage de l'électrolyse du chlorure de sodium utilise :",
          "options": [
            "Un électrolyseur à platine",
            "Un tube en U avec des électrodes de graphite",
            "Une burette graduée",
            "Un bécher avec agitateur magnétique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le protocole du §4.1 de la leçon."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p04_q6",
          "type": "mcq",
          "prompt": "Le gaz formé à l'anode est le même pour le chlorure d'étain et le chlorure de sodium : c'est :",
          "options": [
            "Le dioxygène",
            "Le dihydrogène",
            "Le dichlore",
            "Le dioxyde de soufre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Dans les deux cas, $2Cl^- \\rightarrow Cl_2 + 2e^-$ à l'anode."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l11_electrolyse_p05",
      "order": 5,
      "title": "Électrolyse et réaction d'oxydoréduction spontanée",
      "summary": "L'électrolyse est l'inverse forcé d'une oxydoréduction spontanée.",
      "conceptExplanation": "La réaction d'oxydoréduction est spontanée, alors que celle de l'électrolyse ne l'est pas : elle est provoquée, ou forcée.\nL'énergie électrique absorbée permet d'inverser le sens des transformations naturelles du système formé par les couples oxydant et réducteur.\nAutrement dit, l'électrolyse réalise, grâce au générateur, la réaction inverse de celle qui se produirait naturellement entre l'oxydant le plus fort et le réducteur le plus fort.",
      "keyRule": "Spontanée pour l'oxydoréduction naturelle, forcée et consommatrice d'énergie pour l'électrolyse.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer les deux sens de transformation",
        "statement": "Une pile réalise spontanément une oxydoréduction. Que faut-il pour faire fonctionner le même système en électrolyse ?",
        "methodSteps": [
          "La réaction naturelle est spontanée : elle se produit sans apport extérieur.",
          "Pour inverser son sens, il faut imposer un courant électrique au système.",
          "L'énergie électrique absorbée force alors les transformations inverses aux électrodes."
        ],
        "conclusion": "L'électrolyse est une oxydoréduction forcée, inverse de la réaction spontanée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le caractère de la réaction d'électrolyse",
          "stepTheme": "Le caractère de la réaction d'électrolyse",
          "stepBadge": "Le caractère de la réaction d'électrolyse",
          "paragraphText": "Le §5 oppose nettement les deux types de réactions.\nL'une est spontanée, l'autre est provoquée.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p05_q1",
            "type": "mcq",
            "prompt": "La réaction d'électrolyse est :",
            "options": [
              "Spontanée",
              "Provoquée ou forcée",
              "Impossible",
              "Toujours explosive"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle n'a lieu que si le générateur impose le passage du courant."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de l'énergie électrique",
          "stepTheme": "Le rôle de l'énergie électrique",
          "stepBadge": "Le rôle de l'énergie électrique",
          "paragraphText": "L'énergie électrique n'est pas un produit de l'électrolyse : elle est consommée.\nC'est elle qui rend possible l'inversion des transformations naturelles.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p05_q2",
            "type": "mcq",
            "prompt": "Dans une électrolyse, l'énergie électrique est :",
            "options": [
              "Produite par la solution",
              "Inutile",
              "Absorbée pour inverser les transformations naturelles",
              "Transformée en précipité"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le mécanisme décrit au §5 de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le sens par rapport à la réaction naturelle",
          "stepTheme": "Le sens par rapport à la réaction naturelle",
          "stepBadge": "Le sens par rapport à la réaction naturelle",
          "paragraphText": "L'électrolyse ne crée pas une réaction nouvelle sans rapport avec les couples présents.\nElle inverse le sens de la transformation naturelle du système de couples.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p05_q3",
            "type": "mcq",
            "prompt": "L'électrolyse réalise, par rapport à l'oxydoréduction spontanée des mêmes couples :",
            "options": [
              "Exactement la même réaction dans le même sens",
              "Une dissolution",
              "Une réaction sans électrons",
              "La réaction inverse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la première phrase du texte de l'exercice 1 : l'électrolyse est l'inverse de la réaction spontanée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Retrouver l'électrolyse du chlorure d'étain",
          "stepTheme": "Retrouver l'électrolyse du chlorure d'étain",
          "stepBadge": "Retrouver l'électrolyse du chlorure d'étain",
          "paragraphText": "Spontanément, l'étain métallique réagirait avec le dichlore pour redonner des ions.\nL'électrolyse fait exactement l'inverse : elle produit l'étain et le dichlore à partir des ions.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p05_q4",
            "type": "mcq",
            "prompt": "Pour le chlorure d'étain, l'électrolyse produit, à partir des ions :",
            "options": [
              "L'étain et le dichlore",
              "L'eau et le sel",
              "Le dioxygène et le dihydrogène uniquement",
              "Aucun produit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le bilan du point précédent, obtenu en forçant le sens inverse de la réaction naturelle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre pile et électrolyse",
          "stepTheme": "Ne pas confondre pile et électrolyse",
          "stepBadge": "Ne pas confondre pile et électrolyse",
          "paragraphText": "Piège : une oxydoréduction spontanée peut fournir de l'énergie électrique, comme dans une pile.\nL'électrolyse, elle, en consomme : les deux fonctionnements sont opposés.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p05_q5",
            "type": "mcq",
            "prompt": "La réaction d'oxydoréduction naturelle, par opposition à l'électrolyse, est :",
            "options": [
              "Forcée",
              "Spontanée",
              "Interdite",
              "Toujours une combustion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première phrase du §5 de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Prévoir les produits d'une électrolyse",
          "stepTheme": "Prévoir les produits d'une électrolyse",
          "stepBadge": "Prévoir les produits d'une électrolyse",
          "paragraphText": "• Identifier les espèces présentes dans l'électrolyte.\n• Le réducteur le plus fort est oxydé à l'anode et l'oxydant le plus fort est réduit à la cathode.\n• Écrire les demi-équations, puis le bilan.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p05_q6",
            "type": "mcq",
            "prompt": "Pour prévoir les produits d'une électrolyse, on identifie d'abord :",
            "options": [
              "La couleur de la solution",
              "La masse des électrodes",
              "Les espèces présentes et les plus fortes de chaque famille",
              "Le volume du tube"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la règle de l'exercice 1 appliquée aux trois électrolyses de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l11_electrolyse_p05_q1",
          "type": "mcq",
          "prompt": "La réaction d'électrolyse est :",
          "options": [
            "Spontanée",
            "Provoquée ou forcée",
            "Impossible",
            "Toujours explosive"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle n'a lieu que si le générateur impose le passage du courant."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p05_q2",
          "type": "mcq",
          "prompt": "Dans une électrolyse, l'énergie électrique est :",
          "options": [
            "Produite par la solution",
            "Inutile",
            "Absorbée pour inverser les transformations naturelles",
            "Transformée en précipité"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le mécanisme décrit au §5 de la leçon."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p05_q3",
          "type": "mcq",
          "prompt": "L'électrolyse réalise, par rapport à l'oxydoréduction spontanée des mêmes couples :",
          "options": [
            "Exactement la même réaction dans le même sens",
            "Une dissolution",
            "Une réaction sans électrons",
            "La réaction inverse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la première phrase du texte de l'exercice 1 : l'électrolyse est l'inverse de la réaction spontanée."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p05_q4",
          "type": "mcq",
          "prompt": "Pour le chlorure d'étain, l'électrolyse produit, à partir des ions :",
          "options": [
            "L'étain et le dichlore",
            "L'eau et le sel",
            "Le dioxygène et le dihydrogène uniquement",
            "Aucun produit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le bilan du point précédent, obtenu en forçant le sens inverse de la réaction naturelle."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p05_q5",
          "type": "mcq",
          "prompt": "La réaction d'oxydoréduction naturelle, par opposition à l'électrolyse, est :",
          "options": [
            "Forcée",
            "Spontanée",
            "Interdite",
            "Toujours une combustion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première phrase du §5 de la leçon."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p05_q6",
          "type": "mcq",
          "prompt": "Pour prévoir les produits d'une électrolyse, on identifie d'abord :",
          "options": [
            "La couleur de la solution",
            "La masse des électrodes",
            "Les espèces présentes et les plus fortes de chaque famille",
            "Le volume du tube"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la règle de l'exercice 1 appliquée aux trois électrolyses de la leçon."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l11_electrolyse_p06",
      "order": 6,
      "title": "Importance et applications : dépôts métalliques et quantité d'électricité",
      "summary": "L'électrolyse protège et purifie les métaux, et la quantité déposée se calcule avec le courant.",
      "conceptExplanation": "L'électrolyse a un intérêt économique et on la rencontre dans les industries chimiques : elle sert à préparer certains produits peu abondants dans la nature, à protéger les métaux par dépôt d'une couche métallique (galvanoplastie) et à purifier certains métaux précieux comme l'or, par électrolyse à anode soluble.\nPour protéger un objet, on le place en cathode dans une solution contenant les ions du métal protecteur : ces ions sont réduits et le métal formé recouvre l'objet, comme l'argent sur la bague de la situation d'évaluation.\nLa quantité de métal déposé se relie à la quantité d'électricité traversée : elle vaut le produit de l'intensité par la durée, et chaque mole d'électrons correspond à la constante $F = N \\times e$.",
      "keyRule": "Pièce à recouvrir égale cathode ; quantité d'électricité $Q = I \\times t = n(e^-) \\times F$.",
      "formulas": [
        {
          "name": "Quantité d'électricité",
          "formula": "Q = I \\times t"
        },
        {
          "name": "Lien avec les électrons échangés",
          "formula": "Q = n(e^-) \\times F \\quad ; \\quad F = N \\times e"
        }
      ],
      "workedExample": {
        "title": "Dépôts successifs de cuivre puis de nickel (exercice 4)",
        "statement": "Une pièce métallique, cathode d'un électrolyseur, reçoit d'abord un dépôt de $0{,}32$ g de cuivre provenant de 100 mL de solution, puis un dépôt de $0{,}20$ g de nickel provenant de 250 mL de solution. Détermine les concentrations des deux solutions, puis explique pourquoi le cuivre se dépose avant le nickel, avec $E^\\circ$ du couple du cuivre égal à $0{,}34$ V et celui du couple du nickel égal à $-0{,}25$ V.",
        "methodSteps": [
          "À la cathode : $Cu^{2+} + 2e^- \\rightarrow Cu$, puis $Ni^{2+} + 2e^- \\rightarrow Ni$.",
          "Quantités déposées : le cuivre vaut environ $5 \\times 10^{-3}$ mol et le nickel environ $3{,}4 \\times 10^{-3}$ mol.",
          "Concentrations : celle du cuivre vaut $5 \\times 10^{-2}$ mol par litre et celle du nickel $1{,}36 \\times 10^{-2}$ mol par litre.",
          "Le cuivre se dépose d'abord car son potentiel normal est le plus élevé : son ion est l'oxydant le plus fort, réduit en priorité dès une tension plus faible."
        ],
        "conclusion": "Les concentrations valent $5 \\times 10^{-2}$ et $1{,}36 \\times 10^{-2}$ mol par litre, et l'ordre des dépôts suit celui des potentiels."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La galvanoplastie",
          "stepTheme": "La galvanoplastie",
          "stepBadge": "La galvanoplastie",
          "paragraphText": "• Galvanoplastie : protection des métaux par dépôt d'une couche métallique obtenue par électrolyse.\nC'est l'une des applications citées au §6 de la leçon.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p06_q1",
            "type": "mcq",
            "prompt": "La protection d'un métal par dépôt d'une couche métallique par électrolyse s'appelle :",
            "options": [
              "L'aluminothermie",
              "La galvanoplastie",
              "Le dosage",
              "La combustion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le terme donné entre parenthèses au §6 de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Où placer la bague à argenter ?",
          "stepTheme": "Où placer la bague à argenter ?",
          "stepBadge": "Où placer la bague à argenter ?",
          "paragraphText": "Dans la situation d'évaluation, le bijoutier argente une bague en cuivre avec une solution de chlorure d'argent.\nPour recevoir le dépôt d'argent, la bague doit être le siège de la réduction des ions $Ag^+$.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p06_q2",
            "type": "mcq",
            "prompt": "Pour argenter une bague par électrolyse, la bague doit être :",
            "options": [
              "L'anode",
              "Hors de la solution",
              "La cathode",
              "Le générateur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "À la cathode, $Ag^+ + e^- \\rightarrow Ag$ : l'argent formé recouvre la bague et la protège de la corrosion."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le bilan de l'argenture au chlorure d'argent",
          "stepTheme": "Le bilan de l'argenture au chlorure d'argent",
          "stepBadge": "Le bilan de l'argenture au chlorure d'argent",
          "paragraphText": "À l'anode de graphite, les ions chlorure donnent du dichlore.\nÀ la cathode, les ions argent donnent l'argent métallique, avec un électron par ion.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p06_q3",
            "type": "mcq",
            "prompt": "L'équation-bilan de l'argenture avec le chlorure d'argent est :",
            "options": [
              "$Ag^+ + Cl^- \\rightarrow AgCl$",
              "$2Ag + Cl_2 \\rightarrow 2Ag^+ + 2Cl^-$",
              "$Sn^{2+} + 2Cl^- \\rightarrow Sn + Cl_2$",
              "$2Ag^+ + 2Cl^- \\rightarrow Cl_2 + 2Ag$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On additionne deux fois la réduction de $Ag^+$ et l'oxydation de deux ions chlorure."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Purifier un métal précieux",
          "stepTheme": "Purifier un métal précieux",
          "stepBadge": "Purifier un métal précieux",
          "paragraphText": "La leçon cite la purification de certains métaux précieux.\nElle se fait par électrolyse à anode soluble.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p06_q4",
            "type": "mcq",
            "prompt": "D'après le §6, l'électrolyse sert à purifier, par anode soluble :",
            "options": [
              "L'or",
              "Le carbone",
              "Le sel de cuisine",
              "L'eau uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'or est l'exemple de métal précieux donné dans la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Relier le dépôt à la quantité d'électricité",
          "stepTheme": "Relier le dépôt à la quantité d'électricité",
          "stepBadge": "Relier le dépôt à la quantité d'électricité",
          "paragraphText": "La demi-équation de cathode donne la quantité d'électrons nécessaire pour déposer une quantité de métal donnée.\nLa quantité d'électricité traversée vaut le produit de l'intensité par la durée de l'électrolyse.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p06_q5",
            "type": "mcq",
            "prompt": "La quantité d'électricité qui traverse le circuit pendant une électrolyse vaut :",
            "options": [
              "$Q = \\frac{I}{t}$",
              "$Q = I \\times t$",
              "$Q = I + t$",
              "$Q = \\frac{t}{I}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation utilisée dans l'exercice 5 de la leçon pour trouver la durée d'un dépôt d'argent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'ordre des dépôts suit les potentiels",
          "stepTheme": "L'ordre des dépôts suit les potentiels",
          "stepBadge": "L'ordre des dépôts suit les potentiels",
          "paragraphText": "Piège de l'exercice 4 : le nickel ne se dépose pas en premier, même mélangé au cuivre dans l'électrolyseur.\nL'ion de l'oxydant le plus fort, de potentiel le plus élevé, est réduit en priorité, avec la tension la plus faible.",
          "exercise": {
            "id": "premiere_c_chimie_l11_electrolyse_p06_q6",
            "type": "mcq",
            "prompt": "Le cuivre se dépose avant le nickel parce que :",
            "options": [
              "Il est plus léger",
              "Sa solution est la plus colorée",
              "Le potentiel de son couple, $0{,}34$ V, dépasse celui du nickel, $-0{,}25$ V",
              "Le nickel ne peut jamais se déposer"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une tension comprise entre les deux seuils ne dépose que le cuivre ; le nickel exige une tension plus élevée."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l11_electrolyse_p06_q1",
          "type": "mcq",
          "prompt": "La protection d'un métal par dépôt d'une couche métallique par électrolyse s'appelle :",
          "options": [
            "L'aluminothermie",
            "La galvanoplastie",
            "Le dosage",
            "La combustion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le terme donné entre parenthèses au §6 de la leçon."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p06_q2",
          "type": "mcq",
          "prompt": "Pour argenter une bague par électrolyse, la bague doit être :",
          "options": [
            "L'anode",
            "Hors de la solution",
            "La cathode",
            "Le générateur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "À la cathode, $Ag^+ + e^- \\rightarrow Ag$ : l'argent formé recouvre la bague et la protège de la corrosion."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p06_q3",
          "type": "mcq",
          "prompt": "L'équation-bilan de l'argenture avec le chlorure d'argent est :",
          "options": [
            "$Ag^+ + Cl^- \\rightarrow AgCl$",
            "$2Ag + Cl_2 \\rightarrow 2Ag^+ + 2Cl^-$",
            "$Sn^{2+} + 2Cl^- \\rightarrow Sn + Cl_2$",
            "$2Ag^+ + 2Cl^- \\rightarrow Cl_2 + 2Ag$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On additionne deux fois la réduction de $Ag^+$ et l'oxydation de deux ions chlorure."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p06_q4",
          "type": "mcq",
          "prompt": "D'après le §6, l'électrolyse sert à purifier, par anode soluble :",
          "options": [
            "L'or",
            "Le carbone",
            "Le sel de cuisine",
            "L'eau uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'or est l'exemple de métal précieux donné dans la leçon."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p06_q5",
          "type": "mcq",
          "prompt": "La quantité d'électricité qui traverse le circuit pendant une électrolyse vaut :",
          "options": [
            "$Q = \\frac{I}{t}$",
            "$Q = I \\times t$",
            "$Q = I + t$",
            "$Q = \\frac{t}{I}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation utilisée dans l'exercice 5 de la leçon pour trouver la durée d'un dépôt d'argent."
        },
        {
          "id": "premiere_c_chimie_l11_electrolyse_p06_q6",
          "type": "mcq",
          "prompt": "Le cuivre se dépose avant le nickel parce que :",
          "options": [
            "Il est plus léger",
            "Sa solution est la plus colorée",
            "Le potentiel de son couple, $0{,}34$ V, dépasse celui du nickel, $-0{,}25$ V",
            "Le nickel ne peut jamais se déposer"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une tension comprise entre les deux seuils ne dépose que le cuivre ; le nickel exige une tension plus élevée."
        }
      ]
    }
  ]
};
