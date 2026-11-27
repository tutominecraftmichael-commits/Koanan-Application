import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 10 : La reproduction chez les spermaphytes » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2882
export const SVT_TLE_D_L10_REPRODUCTION_SPERMAPHYTES: CurriculumChapter = {
  "id": "terminale_d_svt_l10_reproduction_spermaphytes",
  "subjectId": "svt",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 10,
  "title": "Leçon 10 : La reproduction chez les spermaphytes",
  "summary": "Le grain de pollen, formé dans l’anthère, et le sac embryonnaire, formé dans l’ovule, participent à une double fécondation caractéristique des spermaphytes : l’ovule devient une graine et l’ovaire devient un fruit.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2882",
  "points": [
    {
      "id": "terminale_d_svt_l10_reproduction_spermaphytes_p01",
      "order": 1,
      "title": "L’anthère et la formation du grain de pollen",
      "summary": "Décrire l’anthère et les étapes qui conduisent de la cellule mère du pollen à la tétrade puis aux grains de pollen.",
      "conceptExplanation": "Une anthère jeune comporte deux types de tissus : les tissus foliaires, constitués d’un épiderme, d’un parenchyme et d’un faisceau conducteur, et les tissus du sac pollinique, qui sont l’assise mécanique, les assises nourricières et les cellules mères du pollen.\nAu sein du sac pollinique (microsporange), chaque cellule mère des grains de pollen, diploïde (2n), subit une première division de méiose donnant deux cellules filles haploïdes, qui subissent immédiatement la deuxième division de méiose.\nOn obtient quatre cellules haploïdes ou microspores, enfermées dans la paroi cellulosique de la cellule mère : on parle alors de tétrade.\nChaque microspore subit ensuite une mitose donnant deux cellules inégales, emboîtées, dont l’ensemble constitue le grain de pollen.\nÀ maturité, l’assise mécanique de l’anthère se rompt suivant la fente de déhiscence et libère les grains de pollen.",
      "keyRule": "Cellule mère diploïde, méiose, tétrade de microspores haploïdes, puis une mitose par microspore : voilà la formation du grain de pollen.",
      "formulas": [],
      "workedExample": {
        "title": "Les étapes de la formation du grain de pollen (exercice 2 de la leçon)",
        "statement": "Range dans l’ordre chronologique les étapes suivantes : grains de pollen, cellule mère des grains de pollen, tétraspores, stade deux cellules.",
        "methodSteps": [
          "On part de la cellule mère des grains de pollen, diploïde, située dans le sac pollinique.",
          "La méiose donne quatre cellules haploïdes regroupées en tétrade, ou tétraspores.",
          "Chaque microspore subit une mitose : c’est le stade deux cellules, de tailles très inégales.",
          "L’ensemble des deux cellules constitue le grain de pollen, libéré à maturité de l’anthère."
        ],
        "conclusion": "L’ordre est : cellule mère, tétraspores, stade deux cellules, grains de pollen."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les tissus d’une anthère jeune",
          "stepTheme": "Les tissus d’une anthère jeune",
          "stepBadge": "Les tissus d’une anthère jeune",
          "paragraphText": "Une anthère jeune comporte les tissus foliaires : épiderme, parenchyme et faisceau conducteur.\nElle comporte aussi les tissus du sac pollinique : assise mécanique, assises nourricières et cellules mères du pollen.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p01_q1",
            "type": "mcq",
            "prompt": "Les cellules mères du pollen appartiennent :",
            "options": [
              "Aux tissus du sac pollinique",
              "Aux tissus foliaires",
              "Au faisceau conducteur",
              "À l’épiderme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après la leçon, les cellules mères du pollen font partie des tissus du sac pollinique, avec l’assise mécanique et les assises nourricières."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La méiose de la cellule mère du pollen",
          "stepTheme": "La méiose de la cellule mère du pollen",
          "stepBadge": "La méiose de la cellule mère du pollen",
          "paragraphText": "Chaque cellule mère des grains de pollen, diploïde (2n), subit une première division de méiose pour donner deux cellules filles haploïdes.\nCelles-ci subissent immédiatement la deuxième division de méiose.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p01_q2",
            "type": "mcq",
            "prompt": "La cellule mère des grains de pollen est :",
            "options": [
              "Haploïde (n)",
              "Triploïde (3n)",
              "Diploïde (2n)",
              "Sans noyau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon précise que chaque cellule mère des grains de pollen est diploïde (2n) avant de subir la méiose."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La tétrade",
          "stepTheme": "La tétrade",
          "stepBadge": "La tétrade",
          "paragraphText": "• Tétrade : ensemble des quatre cellules haploïdes, ou microspores, issues de la méiose d’une cellule mère du pollen.\nCes quatre cellules restent enfermées dans la paroi cellulosique de la cellule mère.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p01_q3",
            "type": "mcq",
            "prompt": "La tétrade est formée de :",
            "options": [
              "Deux cellules diploïdes",
              "Quatre cellules haploïdes enfermées dans la paroi de la cellule mère",
              "Deux cellules inégales emboîtées",
              "Huit noyaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon le texte, la méiose donne quatre cellules haploïdes ou microspores enfermées dans la paroi de la cellule mère : c’est la tétrade."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "De la microspore au grain de pollen",
          "stepTheme": "De la microspore au grain de pollen",
          "stepBadge": "De la microspore au grain de pollen",
          "paragraphText": "Chaque microspore subit une mitose donnant deux cellules inégales, emboîtées.\nL’ensemble de ces deux cellules constitue le grain de pollen.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p01_q4",
            "type": "mcq",
            "prompt": "Chaque microspore devient un grain de pollen après :",
            "options": [
              "Une deuxième méiose",
              "La fécondation",
              "La germination",
              "Une mitose donnant deux cellules inégales"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon indique que chaque microspore subit une mitose donnant deux cellules inégales dont l’ensemble constitue le grain de pollen."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Méiose puis mitose, dans cet ordre",
          "stepTheme": "Méiose puis mitose, dans cet ordre",
          "stepBadge": "Méiose puis mitose, dans cet ordre",
          "paragraphText": "Piège : inverser les deux divisions de la formation du pollen.\nC’est d’abord la méiose qui réduit le nombre de chromosomes (2n devient n) et forme la tétrade ; la mitose intervient ensuite, dans chaque microspore.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p01_q5",
            "type": "mcq",
            "prompt": "La première division subie par la cellule mère du pollen est :",
            "options": [
              "Une méiose, qui donne des cellules haploïdes",
              "Une mitose, qui donne deux cellules inégales",
              "Une fécondation",
              "Une germination"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte décrit d’abord la méiose de la cellule mère diploïde, puis la mitose de chaque microspore."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La libération des grains de pollen",
          "stepTheme": "La libération des grains de pollen",
          "stepBadge": "La libération des grains de pollen",
          "paragraphText": "Quand l’anthère devient mûre, elle s’ouvre et laisse échapper de nombreux grains de pollen.\nC’est l’assise mécanique qui se rompt suivant la fente de déhiscence.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p01_q6",
            "type": "mcq",
            "prompt": "À maturité, les grains de pollen sont libérés par rupture :",
            "options": [
              "Du nucelle",
              "De l’assise mécanique, suivant la fente de déhiscence",
              "Des téguments de l’ovule",
              "Du micropyle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise qu’à maturité, l’assise mécanique de l’anthère se rompt suivant la fente de déhiscence et libère les grains de pollen."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p01_q1",
          "type": "mcq",
          "prompt": "Les cellules mères du pollen appartiennent :",
          "options": [
            "Aux tissus du sac pollinique",
            "Aux tissus foliaires",
            "Au faisceau conducteur",
            "À l’épiderme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après la leçon, les cellules mères du pollen font partie des tissus du sac pollinique, avec l’assise mécanique et les assises nourricières."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p01_q2",
          "type": "mcq",
          "prompt": "La cellule mère des grains de pollen est :",
          "options": [
            "Haploïde (n)",
            "Triploïde (3n)",
            "Diploïde (2n)",
            "Sans noyau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon précise que chaque cellule mère des grains de pollen est diploïde (2n) avant de subir la méiose."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p01_q3",
          "type": "mcq",
          "prompt": "La tétrade est formée de :",
          "options": [
            "Deux cellules diploïdes",
            "Quatre cellules haploïdes enfermées dans la paroi de la cellule mère",
            "Deux cellules inégales emboîtées",
            "Huit noyaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon le texte, la méiose donne quatre cellules haploïdes ou microspores enfermées dans la paroi de la cellule mère : c’est la tétrade."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p01_q4",
          "type": "mcq",
          "prompt": "Chaque microspore devient un grain de pollen après :",
          "options": [
            "Une deuxième méiose",
            "La fécondation",
            "La germination",
            "Une mitose donnant deux cellules inégales"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon indique que chaque microspore subit une mitose donnant deux cellules inégales dont l’ensemble constitue le grain de pollen."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p01_q5",
          "type": "mcq",
          "prompt": "La première division subie par la cellule mère du pollen est :",
          "options": [
            "Une méiose, qui donne des cellules haploïdes",
            "Une mitose, qui donne deux cellules inégales",
            "Une fécondation",
            "Une germination"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte décrit d’abord la méiose de la cellule mère diploïde, puis la mitose de chaque microspore."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p01_q6",
          "type": "mcq",
          "prompt": "À maturité, les grains de pollen sont libérés par rupture :",
          "options": [
            "Du nucelle",
            "De l’assise mécanique, suivant la fente de déhiscence",
            "Des téguments de l’ovule",
            "Du micropyle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise qu’à maturité, l’assise mécanique de l’anthère se rompt suivant la fente de déhiscence et libère les grains de pollen."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l10_reproduction_spermaphytes_p02",
      "order": 2,
      "title": "La structure du grain de pollen",
      "summary": "Décrire les deux cellules du grain de pollen et ses deux enveloppes, l’exine et l’intine.",
      "conceptExplanation": "Un grain de pollen est constitué de deux cellules de tailles très inégales.\nLa grosse cellule est la cellule végétative, qui comporte un noyau végétatif.\nLa petite cellule est la cellule reproductrice, qui comporte un noyau reproducteur.\nCes deux cellules sont enveloppées par deux membranes : l’une externe, épaisse, garnie d’épines et percée de pores, l’exine ; l’autre interne, mince, l’intine.\nLe grain de pollen, qui se forme au sein de l’anthère, a donc une structure particulière : il renferme un noyau reproducteur et un noyau végétatif.",
      "keyRule": "Deux cellules inégales (végétative et reproductrice) protégées par l’exine épaisse et épineuse à l’extérieur et l’intine mince à l’intérieur.",
      "formulas": [],
      "workedExample": {
        "title": "Annoter le schéma d’un grain de pollen",
        "statement": "Sur le schéma de la structure d’un grain de pollen (document 1 de la leçon), identifie les éléments numérotés 5 à 8.",
        "methodSteps": [
          "L’élément 5 est l’exine, la membrane externe, épaisse et garnie d’épines.",
          "L’élément 6 est le noyau reproducteur, porté par la petite cellule reproductrice.",
          "L’élément 7 est le noyau végétatif, porté par la grosse cellule végétative.",
          "L’élément 8 est l’intine, la membrane interne et mince."
        ],
        "conclusion": "Exine et intine enveloppent les deux noyaux : le noyau reproducteur et le noyau végétatif."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les deux cellules du grain de pollen",
          "stepTheme": "Les deux cellules du grain de pollen",
          "stepBadge": "Les deux cellules du grain de pollen",
          "paragraphText": "Un grain de pollen est constitué de deux cellules de tailles très inégales.\nLa grosse cellule est la cellule végétative ; la petite cellule est la cellule reproductrice.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p02_q1",
            "type": "mcq",
            "prompt": "La grosse cellule du grain de pollen est :",
            "options": [
              "La cellule végétative",
              "La cellule reproductrice",
              "L’oosphère",
              "La microspore"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après la leçon, la grosse cellule est la cellule végétative et la petite cellule est la cellule reproductrice."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’exine",
          "stepTheme": "L’exine",
          "stepBadge": "L’exine",
          "paragraphText": "• Exine : membrane externe du grain de pollen.\nElle est épaisse, garnie d’épines et percée de pores.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p02_q2",
            "type": "mcq",
            "prompt": "L’exine est la membrane :",
            "options": [
              "Interne et mince",
              "Externe, épaisse, garnie d’épines et percée de pores",
              "Qui entoure le sac embryonnaire",
              "De la cellule mère du pollen"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte décrit l’exine comme la membrane externe, épaisse, garnie d’épines et percée de pores."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L’intine",
          "stepTheme": "L’intine",
          "stepBadge": "L’intine",
          "paragraphText": "• Intine : membrane interne du grain de pollen.\nContrairement à l’exine, elle est mince.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p02_q3",
            "type": "mcq",
            "prompt": "L’intine est :",
            "options": [
              "La membrane externe épaisse",
              "La membrane garnie d’épines",
              "La membrane interne, mince",
              "La paroi de la cellule mère"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Selon la leçon, l’intine est la membrane interne et mince du grain de pollen."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le noyau reproducteur et le noyau végétatif",
          "stepTheme": "Le noyau reproducteur et le noyau végétatif",
          "stepBadge": "Le noyau reproducteur et le noyau végétatif",
          "paragraphText": "La cellule reproductrice comporte le noyau reproducteur, qui donnera les gamètes mâles.\nLa cellule végétative comporte le noyau végétatif.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p02_q4",
            "type": "mcq",
            "prompt": "Le noyau reproducteur est porté par :",
            "options": [
              "La cellule végétative",
              "L’exine",
              "L’intine",
              "La cellule reproductrice"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon attribue le noyau reproducteur à la petite cellule reproductrice, et le noyau végétatif à la grosse cellule végétative."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser exine et intine",
          "stepTheme": "Ne pas inverser exine et intine",
          "stepBadge": "Ne pas inverser exine et intine",
          "paragraphText": "Piège : confondre les deux enveloppes du grain de pollen.\nL’exine est externe, épaisse et épineuse ; l’intine est interne et mince.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p02_q5",
            "type": "mcq",
            "prompt": "Quelle membrane du grain de pollen est percée de pores ?",
            "options": [
              "L’exine",
              "L’intine",
              "La membrane de fécondation",
              "La paroi cellulosique de la tétrade"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après le texte, c’est l’exine, membrane externe, qui est épaisse, garnie d’épines et percée de pores."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le contenu du grain de pollen en résumé",
          "stepTheme": "Le contenu du grain de pollen en résumé",
          "stepBadge": "Le contenu du grain de pollen en résumé",
          "paragraphText": "La conclusion de la première étude de la leçon le résume : le grain de pollen renferme un noyau reproducteur et un noyau végétatif.\nC’est ce qui fait sa structure particulière, au sein de l’anthère où il se forme.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p02_q6",
            "type": "mcq",
            "prompt": "Le grain de pollen renferme :",
            "options": [
              "Une oosphère et des antipodes",
              "Un noyau reproducteur et un noyau végétatif",
              "Huit noyaux en sept cellules",
              "Un seul noyau diploïde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion partielle de la leçon énonce que le grain de pollen renferme un noyau reproducteur et un noyau végétatif."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p02_q1",
          "type": "mcq",
          "prompt": "La grosse cellule du grain de pollen est :",
          "options": [
            "La cellule végétative",
            "La cellule reproductrice",
            "L’oosphère",
            "La microspore"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après la leçon, la grosse cellule est la cellule végétative et la petite cellule est la cellule reproductrice."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p02_q2",
          "type": "mcq",
          "prompt": "L’exine est la membrane :",
          "options": [
            "Interne et mince",
            "Externe, épaisse, garnie d’épines et percée de pores",
            "Qui entoure le sac embryonnaire",
            "De la cellule mère du pollen"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte décrit l’exine comme la membrane externe, épaisse, garnie d’épines et percée de pores."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p02_q3",
          "type": "mcq",
          "prompt": "L’intine est :",
          "options": [
            "La membrane externe épaisse",
            "La membrane garnie d’épines",
            "La membrane interne, mince",
            "La paroi de la cellule mère"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Selon la leçon, l’intine est la membrane interne et mince du grain de pollen."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p02_q4",
          "type": "mcq",
          "prompt": "Le noyau reproducteur est porté par :",
          "options": [
            "La cellule végétative",
            "L’exine",
            "L’intine",
            "La cellule reproductrice"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon attribue le noyau reproducteur à la petite cellule reproductrice, et le noyau végétatif à la grosse cellule végétative."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p02_q5",
          "type": "mcq",
          "prompt": "Quelle membrane du grain de pollen est percée de pores ?",
          "options": [
            "L’exine",
            "L’intine",
            "La membrane de fécondation",
            "La paroi cellulosique de la tétrade"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après le texte, c’est l’exine, membrane externe, qui est épaisse, garnie d’épines et percée de pores."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p02_q6",
          "type": "mcq",
          "prompt": "Le grain de pollen renferme :",
          "options": [
            "Une oosphère et des antipodes",
            "Un noyau reproducteur et un noyau végétatif",
            "Huit noyaux en sept cellules",
            "Un seul noyau diploïde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion partielle de la leçon énonce que le grain de pollen renferme un noyau reproducteur et un noyau végétatif."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l10_reproduction_spermaphytes_p03",
      "order": 3,
      "title": "L’ovaire et la structure de l’ovule",
      "summary": "Décrire l’ovaire formé de carpelles et les éléments constitutifs d’un ovule.",
      "conceptExplanation": "L’ovaire est formé de carpelles soudés ; chaque carpelle comporte une cavité ou loge carpellaire, et des placentas qui portent des ovules.\nUn ovule est constitué d’un funicule (ou pédicelle), d’un hile, de la chalaze et des téguments.\nLes téguments, primine et secondine, entourent le nucelle et sont interrompus au niveau du micropyle.\nL’ovule comporte aussi le raphé, qui n’existe qu’au niveau de l’ovule anatrope.\nC’est dans le nucelle de l’ovule que se trouve la cellule mère du sac embryonnaire.",
      "keyRule": "Carpelles soudés et loges dans l’ovaire ; funicule, hile, chalaze, téguments, micropyle et nucelle dans l’ovule.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte sur les organes de la fleur (exercice 1 de la leçon)",
        "statement": "Complète : les grains de pollen se forment dans les anthères et les ovules se trouvent dans l’ovaire du pistil ; le sac embryonnaire se forme dans l’ovule, à partir d’une cellule mère.",
        "methodSteps": [
          "Les grains de pollen se forment dans les anthères et sont stockés dans les sacs polliniques des anthères mûres.",
          "Les ovules se trouvent dans l’ovaire du pistil, portés par les placentas des carpelles.",
          "Le sac embryonnaire se forme dans l’ovule, à partir d’une cellule mère du sac."
        ],
        "conclusion": "Pollen dans l’anthère, ovules dans l’ovaire : les deux organes de la fleur qui portent les futurs gamètes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’ovaire et ses carpelles",
          "stepTheme": "L’ovaire et ses carpelles",
          "stepBadge": "L’ovaire et ses carpelles",
          "paragraphText": "L’ovaire est formé de carpelles soudés.\nChaque carpelle comporte une cavité, la loge carpellaire, et des placentas qui portent des ovules.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p03_q1",
            "type": "mcq",
            "prompt": "Dans l’ovaire, les ovules sont portés par :",
            "options": [
              "Les placentas des carpelles",
              "Les anthères",
              "Le funicule du pollen",
              "Le micropyle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après la leçon, chaque carpelle comporte une loge carpellaire et des placentas qui portent des ovules."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le funicule et le hile",
          "stepTheme": "Le funicule et le hile",
          "stepBadge": "Le funicule et le hile",
          "paragraphText": "• Funicule (ou pédicelle) : petit pied qui relie l’ovule au placenta.\nL’ovule comporte aussi un hile et la chalaze.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p03_q2",
            "type": "mcq",
            "prompt": "Le funicule de l’ovule est aussi appelé :",
            "options": [
              "Le raphé",
              "Le pédicelle",
              "Le micropyle",
              "La primine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte présente le funicule comme le pédicelle de l’ovule."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les téguments et le micropyle",
          "stepTheme": "Les téguments et le micropyle",
          "stepBadge": "Les téguments et le micropyle",
          "paragraphText": "Les téguments de l’ovule sont la primine et la secondine.\nIls entourent le nucelle et sont interrompus au niveau du micropyle.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p03_q3",
            "type": "mcq",
            "prompt": "Les téguments entourent le nucelle et sont interrompus au niveau :",
            "options": [
              "De la chalaze",
              "Du hile",
              "Du micropyle",
              "Du raphé"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Selon la leçon, les téguments (primine et secondine) entourent le nucelle et sont interrompus au niveau du micropyle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le raphé, propre à l’ovule anatrope",
          "stepTheme": "Le raphé, propre à l’ovule anatrope",
          "stepBadge": "Le raphé, propre à l’ovule anatrope",
          "paragraphText": "Le raphé est un élément de l’ovule décrit dans la leçon.\nIl n’existe qu’au niveau de l’ovule anatrope.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p03_q4",
            "type": "mcq",
            "prompt": "Le raphé n’existe :",
            "options": [
              "Que dans le grain de pollen",
              "Que dans l’anthère",
              "Dans tous les ovules sans exception",
              "Qu’au niveau de l’ovule anatrope"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le texte précise que le raphé n’existe qu’au niveau de l’ovule anatrope."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le nucelle abrite la cellule mère du sac",
          "stepTheme": "Le nucelle abrite la cellule mère du sac",
          "stepBadge": "Le nucelle abrite la cellule mère du sac",
          "paragraphText": "Piège : situer la cellule mère du sac embryonnaire dans les téguments ou dans le micropyle.\nElle se trouve dans le nucelle de l’ovule, que les téguments entourent.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p03_q5",
            "type": "mcq",
            "prompt": "La cellule mère du sac embryonnaire se trouve :",
            "options": [
              "Dans le nucelle de l’ovule",
              "Dans le sac pollinique",
              "Dans le placenta",
              "Dans le micropyle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon situe la cellule mère du sac dans le nucelle de l’ovule."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les ovules dans l’ovaire du pistil",
          "stepTheme": "Les ovules dans l’ovaire du pistil",
          "stepBadge": "Les ovules dans l’ovaire du pistil",
          "paragraphText": "L’exercice 1 de la leçon le rappelle : les ovules se trouvent dans l’ovaire du pistil.\nLe sac embryonnaire se forme ensuite dans l’ovule, à partir d’une cellule mère.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p03_q6",
            "type": "mcq",
            "prompt": "Les ovules se trouvent :",
            "options": [
              "Dans les sacs polliniques",
              "Dans l’ovaire du pistil",
              "Dans le tube pollinique",
              "Dans la graine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D’après l’exercice 1 et l’analyse du document 3, les ovules sont dans l’ovaire, portés par les placentas des carpelles."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p03_q1",
          "type": "mcq",
          "prompt": "Dans l’ovaire, les ovules sont portés par :",
          "options": [
            "Les placentas des carpelles",
            "Les anthères",
            "Le funicule du pollen",
            "Le micropyle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après la leçon, chaque carpelle comporte une loge carpellaire et des placentas qui portent des ovules."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p03_q2",
          "type": "mcq",
          "prompt": "Le funicule de l’ovule est aussi appelé :",
          "options": [
            "Le raphé",
            "Le pédicelle",
            "Le micropyle",
            "La primine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte présente le funicule comme le pédicelle de l’ovule."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p03_q3",
          "type": "mcq",
          "prompt": "Les téguments entourent le nucelle et sont interrompus au niveau :",
          "options": [
            "De la chalaze",
            "Du hile",
            "Du micropyle",
            "Du raphé"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Selon la leçon, les téguments (primine et secondine) entourent le nucelle et sont interrompus au niveau du micropyle."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p03_q4",
          "type": "mcq",
          "prompt": "Le raphé n’existe :",
          "options": [
            "Que dans le grain de pollen",
            "Que dans l’anthère",
            "Dans tous les ovules sans exception",
            "Qu’au niveau de l’ovule anatrope"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le texte précise que le raphé n’existe qu’au niveau de l’ovule anatrope."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p03_q5",
          "type": "mcq",
          "prompt": "La cellule mère du sac embryonnaire se trouve :",
          "options": [
            "Dans le nucelle de l’ovule",
            "Dans le sac pollinique",
            "Dans le placenta",
            "Dans le micropyle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon situe la cellule mère du sac dans le nucelle de l’ovule."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p03_q6",
          "type": "mcq",
          "prompt": "Les ovules se trouvent :",
          "options": [
            "Dans les sacs polliniques",
            "Dans l’ovaire du pistil",
            "Dans le tube pollinique",
            "Dans la graine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D’après l’exercice 1 et l’analyse du document 3, les ovules sont dans l’ovaire, portés par les placentas des carpelles."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04",
      "order": 4,
      "title": "La formation du sac embryonnaire",
      "summary": "Expliquer comment une cellule mère diploïde donne un sac embryonnaire de huit noyaux répartis en sept cellules.",
      "conceptExplanation": "Dans le nucelle de l’ovule se trouve la cellule mère du sac, diploïde (2n).\nElle subit une division de méiose et donne quatre cellules haploïdes ; trois de ces quatre cellules dégénèrent.\nLa cellule restante, devenue mégaspore, subit trois mitoses successives pour donner huit noyaux fils, répartis en sept cellules dont l’ensemble constitue le sac embryonnaire.\nAu pôle micropylaire se trouvent trois cellules haploïdes : la plus grosse, au centre, est l’oosphère, et les deux plus petites sont les synergides.\nAu pôle chalazien se trouvent trois cellules haploïdes de même taille, les antipodes.\nAu centre, la cellule principale contient deux noyaux haploïdes, appelés noyaux centraux ou noyaux du sac.",
      "keyRule": "Méiose, trois cellules qui dégénèrent, une mégaspore, trois mitoses : huit noyaux en sept cellules, dont l’oosphère au pôle micropylaire.",
      "formulas": [],
      "workedExample": {
        "title": "Compter les cellules du sac embryonnaire",
        "statement": "À partir de la description de la leçon, vérifie que le sac embryonnaire comporte sept cellules et indique la répartition de ses huit noyaux.",
        "methodSteps": [
          "Au pôle micropylaire : l’oosphère et les deux synergides, soit trois cellules à un noyau chacune.",
          "Au pôle chalazien : les trois antipodes, soit trois cellules à un noyau chacune.",
          "Au centre : une seule cellule principale, mais avec deux noyaux, les noyaux du sac.",
          "Total : sept cellules et huit noyaux haploïdes."
        ],
        "conclusion": "Le sac embryonnaire compte sept cellules pour huit noyaux, car la cellule centrale est binucléée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La cellule mère du sac",
          "stepTheme": "La cellule mère du sac",
          "stepBadge": "La cellule mère du sac",
          "paragraphText": "• Cellule mère du sac embryonnaire : cellule diploïde (2n) située dans le nucelle de l’ovule.\nElle est à l’origine du sac embryonnaire, comme la cellule mère du pollen est à l’origine des grains de pollen.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q1",
            "type": "mcq",
            "prompt": "La cellule mère du sac embryonnaire est :",
            "options": [
              "Diploïde (2n), située dans le nucelle",
              "Haploïde, située dans l’anthère",
              "Triploïde, située au centre du sac",
              "La même que l’oosphère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon précise que la cellule mère du sac, située dans le nucelle, est diploïde (2n)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Trois cellules dégénèrent",
          "stepTheme": "Trois cellules dégénèrent",
          "stepBadge": "Trois cellules dégénèrent",
          "paragraphText": "La méiose de la cellule mère du sac donne quatre cellules haploïdes.\nTrois de ces quatre cellules dégénèrent ; la cellule restante devient la mégaspore.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q2",
            "type": "mcq",
            "prompt": "Après la méiose de la cellule mère du sac :",
            "options": [
              "Les quatre cellules deviennent des synergides",
              "Trois cellules dégénèrent et la restante devient la mégaspore",
              "Les quatre cellules fusionnent",
              "Chaque cellule donne un sac embryonnaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D’après le texte, les trois des quatre cellules haploïdes dégénèrent et la restante devient la mégaspore."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La mégaspore et les trois mitoses",
          "stepTheme": "La mégaspore et les trois mitoses",
          "stepBadge": "La mégaspore et les trois mitoses",
          "paragraphText": "• Mégaspore (ou macrospore) : cellule haploïde restante après dégénérescence des trois autres.\nElle subit trois mitoses successives, ce qui donne huit noyaux fils.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q3",
            "type": "mcq",
            "prompt": "La mégaspore donne huit noyaux par :",
            "options": [
              "Une méiose supplémentaire",
              "La fécondation",
              "Trois mitoses successives",
              "La germination"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon indique que la mégaspore subit trois mitoses successives pour donner huit noyaux fils."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L’oosphère et les synergides",
          "stepTheme": "L’oosphère et les synergides",
          "stepBadge": "L’oosphère et les synergides",
          "paragraphText": "Au pôle micropylaire se trouvent trois cellules haploïdes.\nLa plus grosse, au centre, est l’oosphère, la cellule reproductrice femelle ; les deux plus petites sont les synergides.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q4",
            "type": "mcq",
            "prompt": "Au pôle micropylaire, la plus grosse des trois cellules est :",
            "options": [
              "Une antipode",
              "Un noyau du sac",
              "Une synergide",
              "L’oosphère"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Selon la leçon, au pôle micropylaire, la plus grosse cellule au centre est l’oosphère, accompagnée des deux synergides plus petites."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les antipodes et les noyaux du sac",
          "stepTheme": "Les antipodes et les noyaux du sac",
          "stepBadge": "Les antipodes et les noyaux du sac",
          "paragraphText": "Au pôle chalazien se trouvent trois cellules haploïdes de même taille : les antipodes.\nAu centre du sac, la cellule principale contient deux noyaux haploïdes : les noyaux centraux ou noyaux du sac.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q5",
            "type": "mcq",
            "prompt": "Les antipodes sont situées :",
            "options": [
              "Au pôle chalazien",
              "Au pôle micropylaire",
              "Au centre du sac",
              "Dans l’anthère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte place les trois antipodes au pôle chalazien, à l’opposé de l’oosphère située au pôle micropylaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Sept cellules mais huit noyaux",
          "stepTheme": "Sept cellules mais huit noyaux",
          "stepBadge": "Sept cellules mais huit noyaux",
          "paragraphText": "Piège : annoncer huit cellules dans le sac embryonnaire.\nIl y a bien huit noyaux, mais ils sont répartis en sept cellules, car la cellule centrale renferme à elle seule les deux noyaux du sac.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q6",
            "type": "mcq",
            "prompt": "Le sac embryonnaire comporte :",
            "options": [
              "Huit cellules et huit noyaux",
              "Huit noyaux répartis en sept cellules",
              "Sept noyaux en huit cellules",
              "Quatre cellules haploïdes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion de la leçon énonce que le sac embryonnaire comporte huit noyaux répartis en sept cellules."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le contenu du sac en résumé",
          "stepTheme": "Le contenu du sac en résumé",
          "stepBadge": "Le contenu du sac en résumé",
          "paragraphText": "La conclusion de la leçon résume : l’ovule renferme le sac embryonnaire contenant l’oosphère et les noyaux du sac.\nL’oosphère y est accompagnée de six autres cellules : deux synergides, trois antipodes et la cellule centrale.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q7",
            "type": "mcq",
            "prompt": "La cellule reproductrice femelle du sac embryonnaire est :",
            "options": [
              "Une synergide",
              "Une antipode",
              "L’oosphère",
              "La cellule centrale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La conclusion de la première partie désigne l’oosphère comme la cellule reproductrice contenue dans le sac embryonnaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q1",
          "type": "mcq",
          "prompt": "La cellule mère du sac embryonnaire est :",
          "options": [
            "Diploïde (2n), située dans le nucelle",
            "Haploïde, située dans l’anthère",
            "Triploïde, située au centre du sac",
            "La même que l’oosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon précise que la cellule mère du sac, située dans le nucelle, est diploïde (2n)."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q2",
          "type": "mcq",
          "prompt": "Après la méiose de la cellule mère du sac :",
          "options": [
            "Les quatre cellules deviennent des synergides",
            "Trois cellules dégénèrent et la restante devient la mégaspore",
            "Les quatre cellules fusionnent",
            "Chaque cellule donne un sac embryonnaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D’après le texte, les trois des quatre cellules haploïdes dégénèrent et la restante devient la mégaspore."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q3",
          "type": "mcq",
          "prompt": "La mégaspore donne huit noyaux par :",
          "options": [
            "Une méiose supplémentaire",
            "La fécondation",
            "Trois mitoses successives",
            "La germination"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon indique que la mégaspore subit trois mitoses successives pour donner huit noyaux fils."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q4",
          "type": "mcq",
          "prompt": "Au pôle micropylaire, la plus grosse des trois cellules est :",
          "options": [
            "Une antipode",
            "Un noyau du sac",
            "Une synergide",
            "L’oosphère"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Selon la leçon, au pôle micropylaire, la plus grosse cellule au centre est l’oosphère, accompagnée des deux synergides plus petites."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q5",
          "type": "mcq",
          "prompt": "Les antipodes sont situées :",
          "options": [
            "Au pôle chalazien",
            "Au pôle micropylaire",
            "Au centre du sac",
            "Dans l’anthère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte place les trois antipodes au pôle chalazien, à l’opposé de l’oosphère située au pôle micropylaire."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q6",
          "type": "mcq",
          "prompt": "Le sac embryonnaire comporte :",
          "options": [
            "Huit cellules et huit noyaux",
            "Huit noyaux répartis en sept cellules",
            "Sept noyaux en huit cellules",
            "Quatre cellules haploïdes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion de la leçon énonce que le sac embryonnaire comporte huit noyaux répartis en sept cellules."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p04_q7",
          "type": "mcq",
          "prompt": "La cellule reproductrice femelle du sac embryonnaire est :",
          "options": [
            "Une synergide",
            "Une antipode",
            "L’oosphère",
            "La cellule centrale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La conclusion de la première partie désigne l’oosphère comme la cellule reproductrice contenue dans le sac embryonnaire."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05",
      "order": 5,
      "title": "La germination du grain de pollen et la double fécondation",
      "summary": "Décrire la croissance du tube pollinique et l’union des deux anthérozoïdes avec l’oosphère et les noyaux du sac.",
      "conceptExplanation": "La germination du grain de pollen débute par la sortie d’un petit tube pollinique, avec le noyau végétatif à son extrémité et le noyau reproducteur en arrière de celui-ci.\nLe tube pollinique s’allonge ensuite, avec le noyau végétatif et deux anthérozoïdes provenant de la division du noyau reproducteur.\nÀ la fin de la croissance du tube pollinique, le noyau végétatif dégénère.\nL’un des anthérozoïdes s’unit avec l’oosphère pour donner l’œuf principal, qui est diploïde.\nL’autre anthérozoïde s’unit avec les deux noyaux du sac pour former l’œuf accessoire ou œuf albumen, qui est triploïde.\nCette double union est la double fécondation, caractéristique de la reproduction chez les spermaphytes.",
      "keyRule": "Tube pollinique, deux anthérozoïdes : l’un fait l’œuf principal diploïde avec l’oosphère, l’autre l’œuf albumen triploïde avec les noyaux du sac.",
      "formulas": [],
      "workedExample": {
        "title": "Les deux unions de la double fécondation",
        "statement": "Sur le schéma de la double fécondation (document 6 de la leçon), explique ce que devient chacun des deux anthérozoïdes.",
        "methodSteps": [
          "Le tube pollinique amène les deux anthérozoïdes, issus de la division du noyau reproducteur, jusqu’au sac embryonnaire.",
          "L’anthérozoïde n°1 s’unit à l’oosphère : il se forme l’œuf principal, ou œuf embryon, diploïde.",
          "L’anthérozoïde n°2 s’unit aux deux noyaux du sac : il se forme l’œuf accessoire, ou œuf albumen, triploïde."
        ],
        "conclusion": "Deux fécondations en une : œuf principal diploïde et œuf accessoire triploïde."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le début de la germination du pollen",
          "stepTheme": "Le début de la germination du pollen",
          "stepBadge": "Le début de la germination du pollen",
          "paragraphText": "Le début de la germination est caractérisé par la sortie d’un petit tube pollinique.\nLe noyau végétatif se place à l’extrémité du tube, et le noyau reproducteur en arrière de celui-ci.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q1",
            "type": "mcq",
            "prompt": "Au début de la germination, le grain de pollen émet :",
            "options": [
              "Un petit tube pollinique",
              "Une tétrade",
              "Un sac embryonnaire",
              "Des antipodes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après le document 5 de la leçon, la germination débute par la sortie d’un petit tube pollinique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La naissance des deux anthérozoïdes",
          "stepTheme": "La naissance des deux anthérozoïdes",
          "stepBadge": "La naissance des deux anthérozoïdes",
          "paragraphText": "Pendant l’allongement du tube pollinique, le noyau reproducteur se divise.\nCette division produit les deux anthérozoïdes, les gamètes mâles qui participeront à la double fécondation.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q2",
            "type": "mcq",
            "prompt": "Les deux anthérozoïdes proviennent :",
            "options": [
              "Du noyau végétatif",
              "De la division du noyau reproducteur",
              "Des noyaux du sac",
              "De la cellule mère du pollen"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon indique que les deux anthérozoïdes proviennent de la division du noyau reproducteur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le sort du noyau végétatif",
          "stepTheme": "Le sort du noyau végétatif",
          "stepBadge": "Le sort du noyau végétatif",
          "paragraphText": "À la fin de la croissance du tube pollinique, le noyau végétatif dégénère.\nSeuls les deux anthérozoïdes assurent alors la fécondation.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q3",
            "type": "mcq",
            "prompt": "À la fin de la croissance du tube pollinique, le noyau végétatif :",
            "options": [
              "Féconde l’oosphère",
              "Forme l’albumen",
              "Dégénère",
              "Devient un anthérozoïde"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Selon l’analyse du document 5, à la fin de la croissance du tube pollinique, le noyau végétatif dégénère."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L’œuf principal",
          "stepTheme": "L’œuf principal",
          "stepBadge": "L’œuf principal",
          "paragraphText": "• Œuf principal (ou œuf embryon) : œuf diploïde formé par l’union d’un anthérozoïde avec l’oosphère.\nC’est la première des deux unions de la double fécondation.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q4",
            "type": "mcq",
            "prompt": "L’œuf principal est formé par l’union :",
            "options": [
              "D’un anthérozoïde avec les noyaux du sac",
              "Du noyau végétatif avec l’oosphère",
              "De deux anthérozoïdes entre eux",
              "D’un anthérozoïde avec l’oosphère"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D’après la leçon, l’un des anthérozoïdes s’unit avec l’oosphère pour donner l’œuf principal, diploïde."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L’œuf accessoire ou œuf albumen",
          "stepTheme": "L’œuf accessoire ou œuf albumen",
          "stepBadge": "L’œuf accessoire ou œuf albumen",
          "paragraphText": "• Œuf accessoire (ou œuf albumen) : œuf triploïde formé par l’union du second anthérozoïde avec les deux noyaux du sac.\nIl complète la double fécondation.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q5",
            "type": "mcq",
            "prompt": "L’œuf accessoire est triploïde car il résulte de l’union :",
            "options": [
              "D’un anthérozoïde avec les deux noyaux du sac",
              "De l’oosphère avec une synergide",
              "De trois anthérozoïdes",
              "Du noyau végétatif avec l’oosphère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte explique que l’autre anthérozoïde s’unit avec les deux noyaux du sac pour former l’œuf accessoire, triploïde."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Double fécondation ne veut pas dire deux oosphères",
          "stepTheme": "Double fécondation ne veut pas dire deux oosphères",
          "stepBadge": "Double fécondation ne veut pas dire deux oosphères",
          "paragraphText": "Piège : imaginer deux fécondations de l’oosphère.\nIl y a un seul anthérozoïde pour l’oosphère (œuf principal) et un seul pour les deux noyaux du sac (œuf accessoire) : les deux unions sont différentes.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q6",
            "type": "mcq",
            "prompt": "Dans la double fécondation, le second anthérozoïde féconde :",
            "options": [
              "Une deuxième oosphère",
              "Les deux noyaux du sac",
              "Une synergide",
              "Une antipode"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Selon la leçon, le second anthérozoïde s’unit avec les deux noyaux du sac pour former l’œuf albumen."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un caractère des spermaphytes",
          "stepTheme": "Un caractère des spermaphytes",
          "stepBadge": "Un caractère des spermaphytes",
          "paragraphText": "La conclusion générale de la leçon le souligne : la double fécondation est caractéristique de la reproduction chez les spermaphytes.\nL’expérience de la situation d’apprentissage le montre : seule la fleur dont le pistil a été saupoudré de pollen devient un fruit contenant des graines.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q7",
            "type": "mcq",
            "prompt": "La double fécondation est caractéristique :",
            "options": [
              "Des mammifères",
              "Des plantes sans fleurs",
              "De la reproduction chez les spermaphytes",
              "De la formation de la tétrade"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La conclusion générale énonce que la double fécondation est caractéristique de la reproduction chez les spermaphytes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q1",
          "type": "mcq",
          "prompt": "Au début de la germination, le grain de pollen émet :",
          "options": [
            "Un petit tube pollinique",
            "Une tétrade",
            "Un sac embryonnaire",
            "Des antipodes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après le document 5 de la leçon, la germination débute par la sortie d’un petit tube pollinique."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q2",
          "type": "mcq",
          "prompt": "Les deux anthérozoïdes proviennent :",
          "options": [
            "Du noyau végétatif",
            "De la division du noyau reproducteur",
            "Des noyaux du sac",
            "De la cellule mère du pollen"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon indique que les deux anthérozoïdes proviennent de la division du noyau reproducteur."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q3",
          "type": "mcq",
          "prompt": "À la fin de la croissance du tube pollinique, le noyau végétatif :",
          "options": [
            "Féconde l’oosphère",
            "Forme l’albumen",
            "Dégénère",
            "Devient un anthérozoïde"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Selon l’analyse du document 5, à la fin de la croissance du tube pollinique, le noyau végétatif dégénère."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q4",
          "type": "mcq",
          "prompt": "L’œuf principal est formé par l’union :",
          "options": [
            "D’un anthérozoïde avec les noyaux du sac",
            "Du noyau végétatif avec l’oosphère",
            "De deux anthérozoïdes entre eux",
            "D’un anthérozoïde avec l’oosphère"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D’après la leçon, l’un des anthérozoïdes s’unit avec l’oosphère pour donner l’œuf principal, diploïde."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q5",
          "type": "mcq",
          "prompt": "L’œuf accessoire est triploïde car il résulte de l’union :",
          "options": [
            "D’un anthérozoïde avec les deux noyaux du sac",
            "De l’oosphère avec une synergide",
            "De trois anthérozoïdes",
            "Du noyau végétatif avec l’oosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte explique que l’autre anthérozoïde s’unit avec les deux noyaux du sac pour former l’œuf accessoire, triploïde."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q6",
          "type": "mcq",
          "prompt": "Dans la double fécondation, le second anthérozoïde féconde :",
          "options": [
            "Une deuxième oosphère",
            "Les deux noyaux du sac",
            "Une synergide",
            "Une antipode"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Selon la leçon, le second anthérozoïde s’unit avec les deux noyaux du sac pour former l’œuf albumen."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p05_q7",
          "type": "mcq",
          "prompt": "La double fécondation est caractéristique :",
          "options": [
            "Des mammifères",
            "Des plantes sans fleurs",
            "De la reproduction chez les spermaphytes",
            "De la formation de la tétrade"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La conclusion générale énonce que la double fécondation est caractéristique de la reproduction chez les spermaphytes."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l10_reproduction_spermaphytes_p06",
      "order": 6,
      "title": "Le devenir de l’ovule et de l’ovaire : la graine et le fruit",
      "summary": "Relier chaque produit de la double fécondation à son devenir : embryon, albumen, graine et fruit.",
      "conceptExplanation": "À l’issue de la double fécondation, l’œuf principal se transforme en embryon ou plantule.\nQuant à l’œuf accessoire, il se transforme en albumen, tissu de réserves de la graine.\nL’ovule, qui contient l’œuf principal et l’œuf accessoire, se transforme en une graine.\nL’ovaire s’hypertrophie en emmagasinant des réserves pour devenir un fruit.\nLa graine et le fruit se forment donc à l’issue d’une double fécondation, après la pollinisation qui a déposé le pollen sur le pistil.",
      "keyRule": "Œuf principal vers l’embryon, œuf accessoire vers l’albumen, ovule vers la graine, ovaire vers le fruit.",
      "formulas": [],
      "workedExample": {
        "title": "De la fleur au fruit garni de graines",
        "statement": "Une fleur dont le pistil a été saupoudré de pollen devient un fruit contenant des graines, tandis que la fleur au pistil protégé par une gaze ne donne rien. Explique cette différence.",
        "methodSteps": [
          "Le pollen déposé sur le pistil germe et le tube pollinique conduit les anthérozoïdes jusqu’au sac embryonnaire.",
          "La double fécondation forme l’œuf principal et l’œuf accessoire dans l’ovule.",
          "L’ovule fécondé devient une graine, contenant l’embryon et l’albumen.",
          "L’ovaire s’hypertrophie et devient le fruit qui contient les graines ; sans pollen, aucune fécondation n’a lieu."
        ],
        "conclusion": "Sans pollinisation, pas de double fécondation, donc ni graines ni fruit."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le devenir de l’œuf principal",
          "stepTheme": "Le devenir de l’œuf principal",
          "stepBadge": "Le devenir de l’œuf principal",
          "paragraphText": "À l’issue de la double fécondation, l’œuf principal se transforme en embryon ou plantule.\nC’est lui qui donnera la future plante contenue dans la graine.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p06_q1",
            "type": "mcq",
            "prompt": "L’œuf principal se transforme en :",
            "options": [
              "Embryon ou plantule",
              "Albumen",
              "Fruit",
              "Tube pollinique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après l’interprétation de la leçon, l’œuf principal se transforme en embryon ou plantule."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le devenir de l’œuf accessoire",
          "stepTheme": "Le devenir de l’œuf accessoire",
          "stepBadge": "Le devenir de l’œuf accessoire",
          "paragraphText": "L’œuf accessoire, issu de l’union du second anthérozoïde avec les noyaux du sac, se transforme en albumen.\nL’albumen constitue les réserves de la graine.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p06_q2",
            "type": "mcq",
            "prompt": "L’œuf accessoire se transforme en :",
            "options": [
              "Embryon",
              "Albumen",
              "Ovaire",
              "Funicule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte indique que l’œuf accessoire se transforme en albumen."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La graine vient de l’ovule",
          "stepTheme": "La graine vient de l’ovule",
          "stepBadge": "La graine vient de l’ovule",
          "paragraphText": "L’ovule contenant l’œuf principal et l’œuf accessoire se transforme en une graine.\nLa graine renferme donc l’embryon et l’albumen.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p06_q3",
            "type": "mcq",
            "prompt": "La graine provient de la transformation :",
            "options": [
              "De l’ovaire",
              "De l’anthère",
              "De l’ovule fécondé",
              "Du grain de pollen"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Selon la leçon, c’est l’ovule contenant les deux œufs qui se transforme en graine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le fruit vient de l’ovaire",
          "stepTheme": "Le fruit vient de l’ovaire",
          "stepBadge": "Le fruit vient de l’ovaire",
          "paragraphText": "L’ovaire s’hypertrophie en emmagasinant des réserves pour devenir un fruit.\nLe fruit contient les graines issues des ovules fécondés.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p06_q4",
            "type": "mcq",
            "prompt": "Le fruit provient :",
            "options": [
              "Du sac embryonnaire",
              "Du tube pollinique",
              "Des téguments seuls",
              "De l’ovaire qui s’hypertrophie en emmagasinant des réserves"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D’après la leçon, l’ovaire s’hypertrophie en emmagasinant des réserves pour devenir un fruit."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser graine et fruit",
          "stepTheme": "Ne pas inverser graine et fruit",
          "stepBadge": "Ne pas inverser graine et fruit",
          "paragraphText": "Piège classique : dire que l’ovaire devient la graine.\nL’ovule devient la graine, et c’est l’ovaire tout entier qui devient le fruit.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p06_q5",
            "type": "mcq",
            "prompt": "Après la fécondation, l’ovaire devient :",
            "options": [
              "Le fruit",
              "La graine",
              "L’albumen",
              "L’embryon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conclusion de la leçon est claire : l’ovule devient une graine et l’ovaire devient un fruit."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le rôle préalable du pollen",
          "stepTheme": "Le rôle préalable du pollen",
          "stepBadge": "Le rôle préalable du pollen",
          "paragraphText": "Dans la situation d’apprentissage, la fleur dont le pistil a été saupoudré de pollen est devenue un fruit contenant des graines.\nSans dépôt de pollen, il n’y a ni germination, ni double fécondation, ni graines.",
          "exercise": {
            "id": "terminale_d_svt_l10_reproduction_spermaphytes_p06_q6",
            "type": "mcq",
            "prompt": "La fleur devenue un fruit contenant des graines est celle dont le pistil :",
            "options": [
              "A été entouré d’une gaze",
              "A été saupoudré de pollen",
              "A été privé d’ovules",
              "A perdu ses anthères"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D’après la situation d’apprentissage, seule la fleur dont le pistil a été saupoudré de pollen est devenue un fruit contenant des graines."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p06_q1",
          "type": "mcq",
          "prompt": "L’œuf principal se transforme en :",
          "options": [
            "Embryon ou plantule",
            "Albumen",
            "Fruit",
            "Tube pollinique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après l’interprétation de la leçon, l’œuf principal se transforme en embryon ou plantule."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p06_q2",
          "type": "mcq",
          "prompt": "L’œuf accessoire se transforme en :",
          "options": [
            "Embryon",
            "Albumen",
            "Ovaire",
            "Funicule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte indique que l’œuf accessoire se transforme en albumen."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p06_q3",
          "type": "mcq",
          "prompt": "La graine provient de la transformation :",
          "options": [
            "De l’ovaire",
            "De l’anthère",
            "De l’ovule fécondé",
            "Du grain de pollen"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Selon la leçon, c’est l’ovule contenant les deux œufs qui se transforme en graine."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p06_q4",
          "type": "mcq",
          "prompt": "Le fruit provient :",
          "options": [
            "Du sac embryonnaire",
            "Du tube pollinique",
            "Des téguments seuls",
            "De l’ovaire qui s’hypertrophie en emmagasinant des réserves"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D’après la leçon, l’ovaire s’hypertrophie en emmagasinant des réserves pour devenir un fruit."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p06_q5",
          "type": "mcq",
          "prompt": "Après la fécondation, l’ovaire devient :",
          "options": [
            "Le fruit",
            "La graine",
            "L’albumen",
            "L’embryon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conclusion de la leçon est claire : l’ovule devient une graine et l’ovaire devient un fruit."
        },
        {
          "id": "terminale_d_svt_l10_reproduction_spermaphytes_p06_q6",
          "type": "mcq",
          "prompt": "La fleur devenue un fruit contenant des graines est celle dont le pistil :",
          "options": [
            "A été entouré d’une gaze",
            "A été saupoudré de pollen",
            "A été privé d’ovules",
            "A perdu ses anthères"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D’après la situation d’apprentissage, seule la fleur dont le pistil a été saupoudré de pollen est devenue un fruit contenant des graines."
        }
      ]
    }
  ]
};
