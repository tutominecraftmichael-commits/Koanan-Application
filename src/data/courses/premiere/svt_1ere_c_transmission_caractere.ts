import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 7 : La transmission d'un caractère héréditaire » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=934
export const SVT_1ERE_C_L07_TRANSMISSION_CARACTERE: CurriculumChapter = {
  "id": "premiere_c_svt_l07_transmission_caractere_hereditaire",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 7,
  "title": "Leçon 7 : La transmission d'un caractère héréditaire",
  "summary": "On s’informe sur les caractères héréditaires, gène, locus et allèles, puis on explique la transmission d’un caractère selon les règles du monohybridisme : dominance complète, test-cross et codominance.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=934",
  "points": [
    {
      "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01",
      "order": 1,
      "title": "Le chromosome, le gène, le locus et les allèles : l’exemple des groupes sanguins ABO",
      "summary": "Le locus du gène des groupes sanguins ABO, sur le chromosome, porte trois allèles A, B et O qui déterminent les agglutinogènes A ou B, ou aucun, sur la membrane des hématies.",
      "conceptExplanation": "On a, au niveau du chromosome, le locus des allèles du système ABO, et au niveau des membranes des hématies, des agglutinogènes A ou B qui sont des protéines.\nLe locus identifié sur le chromosome marque l’emplacement du gène responsable des groupes sanguins ABO chez l’homme. Ce gène est une portion de l’ADN du chromosome et existe sous trois formes appelées allèles : l’allèle A, l’allèle B et l’allèle O.\nL’allèle A est responsable de la production de la protéine appelée agglutinogène A, l’allèle B de l’expression de l’agglutinogène B, et l’allèle O ne produit aucun agglutinogène. La présence ou l’absence de ces protéines au niveau de la membrane des hématies détermine les groupes sanguins chez l’homme.\nLe chromosome est donc la structure responsable de la transmission des caractères : chaque portion du chromosome responsable de l’expression d’un caractère est appelée gène, son emplacement est le locus, et le gène peut se présenter sous plusieurs formes appelées allèles.",
      "keyRule": "Gène égale portion d’ADN, locus égale son adresse, allèles égale ses formes.",
      "formulas": [],
      "workedExample": {
        "title": "Définir les mots de génétique",
        "statement": "Relie génétique, hétérozygote, gène autosomal, allèle et fécondation à leurs significations.",
        "methodSteps": [
          "La génétique est l’étude de la transmission des caractères d’une génération à l’autre.",
          "L’allèle est une forme d’un gène occupant un locus sur un chromosome.",
          "L’hétérozygote comporte deux allèles différents en un locus."
        ],
        "conclusion": "Le corrigé associe chaque mot à sa signification exacte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du gène",
          "stepTheme": "Définition du gène",
          "stepBadge": "Définition du gène",
          "paragraphText": "• Gène : portion de l’ADN du chromosome responsable de l’expression d’un caractère.\nSon emplacement sur le chromosome est le locus.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q1",
            "type": "mcq",
            "prompt": "Le gène est :",
            "options": [
              "Une portion de l’ADN du chromosome responsable d’un caractère",
              "Un chromosome entier",
              "Une protéine membranaire",
              "Un gamète"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conclusion de la partie I et les exercices définissent ainsi le gène."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le locus",
          "stepTheme": "Le locus",
          "stepBadge": "Le locus",
          "paragraphText": "• Locus : emplacement d’un gène sur le chromosome.\nLe document montre le locus des allèles du système ABO sur un chromosome.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q2",
            "type": "mcq",
            "prompt": "Le locus est :",
            "options": [
              "Un agglutinogène",
              "La fécondation",
              "L’emplacement du gène sur le chromosome",
              "La forme d’un gène"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé définit le locus comme l’emplacement du gène."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les allèles",
          "stepTheme": "Les allèles",
          "stepBadge": "Les allèles",
          "paragraphText": "• Allèles : différentes formes possibles d’un gène, occupant un même locus.\nPour le système ABO, il s’agit des allèles A, B et O.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q3",
            "type": "mcq",
            "prompt": "Pour les groupes sanguins ABO, les allèles du gène sont :",
            "options": [
              "A et O seulement",
              "A, B et O",
              "Uniquement A",
              "Uniquement O"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’analyse liste les trois formes alléliques A, B et O."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’allèle O ne produit aucun agglutinogène",
          "stepTheme": "L’allèle O ne produit aucun agglutinogène",
          "stepBadge": "L’allèle O ne produit aucun agglutinogène",
          "paragraphText": "L’allèle A produit l’agglutinogène A et l’allèle B l’agglutinogène B.\nL’allèle O, lui, ne produit aucun agglutinogène.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q4",
            "type": "mcq",
            "prompt": "L’allèle O produit :",
            "options": [
              "L’agglutinogène A",
              "L’agglutinogène B",
              "Les deux agglutinogènes",
              "Aucun agglutinogène"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la phrase exacte de l’analyse du document."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les agglutinogènes déterminent le groupe",
          "stepTheme": "Les agglutinogènes déterminent le groupe",
          "stepBadge": "Les agglutinogènes déterminent le groupe",
          "paragraphText": "La présence ou l’absence des agglutinogènes au niveau de la membrane des hématies détermine les groupes sanguins.\nCes agglutinogènes sont des protéines membranaires.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q5",
            "type": "mcq",
            "prompt": "Les groupes sanguins sont déterminés par :",
            "options": [
              "Le nombre de chromosomes",
              "La couleur du plasma",
              "La présence ou l’absence d’agglutinogènes sur la membrane des hématies",
              "La taille des hématies"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’analyse conclut en ce sens."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Gène autosomal et hétérozygote",
          "stepTheme": "Gène autosomal et hétérozygote",
          "stepBadge": "Gène autosomal et hétérozygote",
          "paragraphText": "Piège de vocabulaire : un gène autosomal est un fragment d’ADN d’un chromosome non sexuel.\nUn hétérozygote est un génotype comportant deux allèles différents en un locus.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q6",
            "type": "mcq",
            "prompt": "Un hétérozygote est un génotype comportant :",
            "options": [
              "Deux allèles différents en un locus",
              "Trois chromosomes",
              "Deux allèles identiques",
              "Aucun allèle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le tableau de l’activité d’application donne cette signification."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q1",
          "type": "mcq",
          "prompt": "Le gène est :",
          "options": [
            "Une portion de l’ADN du chromosome responsable d’un caractère",
            "Un chromosome entier",
            "Une protéine membranaire",
            "Un gamète"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conclusion de la partie I et les exercices définissent ainsi le gène."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q2",
          "type": "mcq",
          "prompt": "Le locus est :",
          "options": [
            "Un agglutinogène",
            "La fécondation",
            "L’emplacement du gène sur le chromosome",
            "La forme d’un gène"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé définit le locus comme l’emplacement du gène."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q3",
          "type": "mcq",
          "prompt": "Pour les groupes sanguins ABO, les allèles du gène sont :",
          "options": [
            "A et O seulement",
            "A, B et O",
            "Uniquement A",
            "Uniquement O"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’analyse liste les trois formes alléliques A, B et O."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q4",
          "type": "mcq",
          "prompt": "L’allèle O produit :",
          "options": [
            "L’agglutinogène A",
            "L’agglutinogène B",
            "Les deux agglutinogènes",
            "Aucun agglutinogène"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la phrase exacte de l’analyse du document."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q5",
          "type": "mcq",
          "prompt": "Les groupes sanguins sont déterminés par :",
          "options": [
            "Le nombre de chromosomes",
            "La couleur du plasma",
            "La présence ou l’absence d’agglutinogènes sur la membrane des hématies",
            "La taille des hématies"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’analyse conclut en ce sens."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q6",
          "type": "mcq",
          "prompt": "Un hétérozygote est un génotype comportant :",
          "options": [
            "Deux allèles différents en un locus",
            "Trois chromosomes",
            "Deux allèles identiques",
            "Aucun allèle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le tableau de l’activité d’application donne cette signification."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02",
      "order": 2,
      "title": "Le vocabulaire du monohybridisme : caractère, phénotype, génotype, dominance",
      "summary": "Le caractère couleur du pelage présente deux phénotypes, gris et blanc ; le gris est dominant, noté B, et le blanc récessif, noté b, selon que l’individu est homozygote ou hétérozygote.",
      "conceptExplanation": "Le caractère est l’ensemble des phénotypes observables chez un individu, et le phénotype est l’une des différentes formes sous lesquelles un caractère s’exprime : par exemple gris et blanc pour le caractère couleur du pelage chez la souris.\nLe génotype est l’ensemble des gènes d’un individu. Un individu est hétérozygote pour un caractère lorsqu’il possède deux allèles différents du gène responsable de ce caractère ; il est homozygote lorsqu’il possède deux allèles identiques.\nPour le choix des symboles, on prend l’initiale du phénotype récessif : en minuscule pour désigner le phénotype récessif, en majuscule pour désigner le phénotype dominant. Pour la souris : allèle blanc b, allèle gris B, phénotype blanc noté entre crochets b, phénotype gris noté entre crochets B, et le couple d’allèles ou le gène est B/b.\nLe phénotype qui s’exprime seul dans la descendance est dominant, et celui qui ne s’exprime pas est récessif.",
      "keyRule": "Dominant en majuscule, récessif en minuscule, phénotypes entre crochets.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir les symboles pour la souris",
        "statement": "Pour le pelage de la souris, gris dominant et blanc récessif, choisis les symboles des allèles et des phénotypes.",
        "methodSteps": [
          "On prend l’initiale du phénotype récessif, blanc, soit b en minuscule.",
          "Le dominant prend la majuscule, soit B pour le gris.",
          "Les phénotypes s’écrivent entre crochets."
        ],
        "conclusion": "Le couple d’allèles s’écrit B/b."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Caractère et phénotype",
          "stepTheme": "Caractère et phénotype",
          "stepBadge": "Caractère et phénotype",
          "paragraphText": "• Caractère : ensemble des phénotypes observables chez un individu.\n• Phénotype : l’une des formes sous lesquelles un caractère s’exprime.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q1",
            "type": "mcq",
            "prompt": "Pour la couleur du pelage chez la souris, les phénotypes sont :",
            "options": [
              "Uniquement gris",
              "B et b",
              "Homozygote et hétérozygote",
              "Gris et blanc"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’analyse des croisements A liste les phénotypes gris et blanc."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le génotype",
          "stepTheme": "Le génotype",
          "stepBadge": "Le génotype",
          "paragraphText": "• Génotype : ensemble des gènes d’un individu.\nIl s’écrit avec les symboles des allèles du couple considéré.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q2",
            "type": "mcq",
            "prompt": "Le génotype est :",
            "options": [
              "La couleur du pelage seule",
              "L’ensemble des gènes d’un individu",
              "Un chromosome sexuel",
              "Uniquement l’aspect visible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée dans l’interprétation du deuxième croisement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Homozygote et hétérozygote",
          "stepTheme": "Homozygote et hétérozygote",
          "stepBadge": "Homozygote et hétérozygote",
          "paragraphText": "Un individu hétérozygote possède deux allèles différents du gène responsable du caractère.\nUn individu homozygote possède deux allèles identiques.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q3",
            "type": "mcq",
            "prompt": "Un individu possédant deux allèles identiques est dit :",
            "options": [
              "Homozygote",
              "Récessif",
              "Hétérozygote",
              "Dominant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé définit l’homozygote par deux allèles identiques."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le choix des symboles",
          "stepTheme": "Le choix des symboles",
          "stepBadge": "Le choix des symboles",
          "paragraphText": "Méthode : prendre l’initiale du phénotype récessif, en minuscule pour le récessif et en majuscule pour le dominant.\nPour la souris, blanc donne b et gris donne B.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q4",
            "type": "mcq",
            "prompt": "L’allèle du phénotype récessif blanc s’écrit :",
            "options": [
              "B majuscule",
              "Entre crochets uniquement",
              "b minuscule",
              "R"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La règle du choix des symboles donne b pour l’allèle blanc récessif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Dominant et récessif",
          "stepTheme": "Dominant et récessif",
          "stepBadge": "Dominant et récessif",
          "paragraphText": "Le phénotype gris, qui s’exprime seul dans la descendance du premier croisement, est dominant.\nLe phénotype blanc, qui ne s’exprime pas, est récessif.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q5",
            "type": "mcq",
            "prompt": "Le phénotype qui ne s’exprime pas en F1 est dit :",
            "options": [
              "Codominant",
              "Récessif",
              "Homozygote",
              "Dominant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation du premier croisement nomme récessif le phénotype blanc masqué."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le monohybridisme",
          "stepTheme": "Le monohybridisme",
          "stepBadge": "Le monohybridisme",
          "paragraphText": "Piège de définition : le monohybridisme n’est pas l’étude de tous les caractères à la fois.\nC’est la transmission d’un caractère héréditaire chez les diploïdes, titre de la partie sur les règles.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q6",
            "type": "mcq",
            "prompt": "Le monohybridisme est :",
            "options": [
              "Un croisement entre espèces différentes",
              "La transmission de deux caractères liés",
              "La fabrication des gamètes",
              "La transmission d’un caractère héréditaire chez les diploïdes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la définition du corrigé de la situation d’évaluation 1 de consolidation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q1",
          "type": "mcq",
          "prompt": "Pour la couleur du pelage chez la souris, les phénotypes sont :",
          "options": [
            "Uniquement gris",
            "B et b",
            "Homozygote et hétérozygote",
            "Gris et blanc"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’analyse des croisements A liste les phénotypes gris et blanc."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q2",
          "type": "mcq",
          "prompt": "Le génotype est :",
          "options": [
            "La couleur du pelage seule",
            "L’ensemble des gènes d’un individu",
            "Un chromosome sexuel",
            "Uniquement l’aspect visible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée dans l’interprétation du deuxième croisement."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q3",
          "type": "mcq",
          "prompt": "Un individu possédant deux allèles identiques est dit :",
          "options": [
            "Homozygote",
            "Récessif",
            "Hétérozygote",
            "Dominant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé définit l’homozygote par deux allèles identiques."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q4",
          "type": "mcq",
          "prompt": "L’allèle du phénotype récessif blanc s’écrit :",
          "options": [
            "B majuscule",
            "Entre crochets uniquement",
            "b minuscule",
            "R"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La règle du choix des symboles donne b pour l’allèle blanc récessif."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q5",
          "type": "mcq",
          "prompt": "Le phénotype qui ne s’exprime pas en F1 est dit :",
          "options": [
            "Codominant",
            "Récessif",
            "Homozygote",
            "Dominant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation du premier croisement nomme récessif le phénotype blanc masqué."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q6",
          "type": "mcq",
          "prompt": "Le monohybridisme est :",
          "options": [
            "Un croisement entre espèces différentes",
            "La transmission de deux caractères liés",
            "La fabrication des gamètes",
            "La transmission d’un caractère héréditaire chez les diploïdes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la définition du corrigé de la situation d’évaluation 1 de consolidation."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03",
      "order": 3,
      "title": "La dominance complète chez la souris : F1 homogène et ségrégation $\\frac{3}{4}$, $\\frac{1}{4}$ en F2",
      "summary": "Le croisement de lignées pures donne une F1 homogène grise ; le croisement des hybrides donne une F2 en ségrégation $\\frac{3}{4}$ de gris et $\\frac{1}{4}$ de blanc, signature d’un gène autosomal avec dominance complète.",
      "conceptExplanation": "Premier croisement : une souris blanche croisée avec une souris grise donne une descendance de souriceaux tous à pelage gris. Cette descendance, première génération filiale ou F1, est homogène parce que les parents croisés sont de races pures, de souches pures ou de lignées pures : ils sont donc homozygotes pour le caractère étudié. Le phénotype gris qui s’exprime seul est dominant et le blanc est récessif, ce qui correspond à l’uniformité des hybrides de la première génération, première loi de Mendel citée dans les exercices.\nDeuxième croisement : deux souris grises issues du premier croisement donnent 54 souriceaux gris et 18 souriceaux blancs, soit des proportions de $\\frac{3}{4}$ de gris et $\\frac{1}{4}$ de blanc. Cette descendance F2 est hétérogène et présente une ségrégation $\\frac{3}{4}$, $\\frac{1}{4}$ parce que le caractère est gouverné par un couple d’allèles ou un gène autosomal avec dominance complète, et que les parents croisés sont hétérozygotes.\nL’interprétation chromosomique, avec l’échiquier de croisement, donne les mêmes résultats théoriques : les résultats théoriques sont conformes aux résultats expérimentaux.",
      "keyRule": "F1 homogène égale parents de lignée pure ; F2 en trois quarts, un quart égale dominance complète.",
      "formulas": [],
      "workedExample": {
        "title": "Exploiter les croisements de souris de l’exercice",
        "statement": "Premier croisement : grise par blanche donne uniquement des grises. Deuxième : les grises obtenues donnent 6 grises et 2 blanches. Analyse et interprète.",
        "methodSteps": [
          "La F1 est homogène à phénotype gris alors que les parents ont des phénotypes différents.",
          "La F2 est hétérogène, avec une ségrégation de trois quarts de gris et un quart de blanc.",
          "On conclut à des parents de lignée pure, au gris dominant et au blanc récessif."
        ],
        "conclusion": "Les résultats théoriques de l’échiquier confirment les résultats expérimentaux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La F1 homogène",
          "stepTheme": "La F1 homogène",
          "stepBadge": "La F1 homogène",
          "paragraphText": "• F1 : première génération filiale, descendance du premier croisement.\nElle est homogène quand tous les descendants présentent le même phénotype, ici le gris.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q1",
            "type": "mcq",
            "prompt": "Une descendance où tous les souriceaux sont gris est dite :",
            "options": [
              "Hétérogène",
              "Récessive",
              "Homogène",
              "En ségrégation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’analyse qualifie d’homogène la descendance uniforme du premier croisement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des parents de lignée pure",
          "stepTheme": "Des parents de lignée pure",
          "stepBadge": "Des parents de lignée pure",
          "paragraphText": "La F1 est homogène parce que les parents croisés sont de races pures ou de lignées pures.\nIls sont donc homozygotes pour le caractère étudié.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q2",
            "type": "mcq",
            "prompt": "Si la F1 est homogène, les parents croisés sont :",
            "options": [
              "De lignée pure, homozygotes",
              "Tous récessifs",
              "Déjà des hybrides",
              "Hétérozygotes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’interprétation relie homogénéité de la F1 et parents homozygotes de lignée pure."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La ségrégation de la F2",
          "stepTheme": "La ségrégation de la F2",
          "stepBadge": "La ségrégation de la F2",
          "paragraphText": "Le deuxième croisement donne 54 gris et 18 blancs.\nLes proportions sont de $\\frac{3}{4}$ pour le gris et $\\frac{1}{4}$ pour le blanc.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q3",
            "type": "mcq",
            "prompt": "La ségrégation phénotypique de la F2 est de :",
            "options": [
              "Uniquement du gris",
              "Moitié, moitié",
              "Un quart, un demi, un quart",
              "Trois quarts de gris, un quart de blanc"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le calcul des proportions du résumé donne trois quarts et un quart."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Un gène autosomal avec dominance complète",
          "stepTheme": "Un gène autosomal avec dominance complète",
          "stepBadge": "Un gène autosomal avec dominance complète",
          "paragraphText": "La ségrégation de la F2 traduit un caractère gouverné par un couple d’allèles autosomal avec dominance complète.\nLes parents de la F2, hybrides, sont hétérozygotes.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q4",
            "type": "mcq",
            "prompt": "Les souris grises croisées au deuxième croisement sont :",
            "options": [
              "Homozygotes dominantes",
              "Hétérozygotes",
              "Homozygotes récessives",
              "Sans génotype"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation dit que les parents croisés de la F2 sont hétérozygotes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La première loi de Mendel",
          "stepTheme": "La première loi de Mendel",
          "stepBadge": "La première loi de Mendel",
          "paragraphText": "Selon les affirmations corrigées, l’uniformité des hybrides de la première génération est la première loi de Mendel : l’affirmation est vraie.\nEn revanche, dire qu’un croisement entre individus de race pure donne toujours une descendance hétérogène est faux.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q5",
            "type": "mcq",
            "prompt": "L’uniformité des hybrides de la première génération est :",
            "options": [
              "La première loi de Mendel",
              "Le test-cross",
              "Une ségrégation",
              "Une erreur de croisement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé des affirmations donne vrai à cette proposition."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La vérification par l’échiquier",
          "stepTheme": "La vérification par l’échiquier",
          "stepBadge": "La vérification par l’échiquier",
          "paragraphText": "Exemple de vérification : l’échiquier de croisement de la F2 donne, en bilan théorique, les mêmes proportions que l’expérience.\nLes résultats théoriques sont conformes aux résultats expérimentaux.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q6",
            "type": "mcq",
            "prompt": "Le bilan théorique de l’échiquier de la F2 donne :",
            "options": [
              "Des proportions contraires à l’expérience",
              "Uniquement du blanc",
              "Les mêmes proportions que les résultats expérimentaux",
              "Aucun gris"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé conclut à la conformité des résultats théoriques et expérimentaux."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q1",
          "type": "mcq",
          "prompt": "Une descendance où tous les souriceaux sont gris est dite :",
          "options": [
            "Hétérogène",
            "Récessive",
            "Homogène",
            "En ségrégation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’analyse qualifie d’homogène la descendance uniforme du premier croisement."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q2",
          "type": "mcq",
          "prompt": "Si la F1 est homogène, les parents croisés sont :",
          "options": [
            "De lignée pure, homozygotes",
            "Tous récessifs",
            "Déjà des hybrides",
            "Hétérozygotes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’interprétation relie homogénéité de la F1 et parents homozygotes de lignée pure."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q3",
          "type": "mcq",
          "prompt": "La ségrégation phénotypique de la F2 est de :",
          "options": [
            "Uniquement du gris",
            "Moitié, moitié",
            "Un quart, un demi, un quart",
            "Trois quarts de gris, un quart de blanc"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le calcul des proportions du résumé donne trois quarts et un quart."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q4",
          "type": "mcq",
          "prompt": "Les souris grises croisées au deuxième croisement sont :",
          "options": [
            "Homozygotes dominantes",
            "Hétérozygotes",
            "Homozygotes récessives",
            "Sans génotype"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation dit que les parents croisés de la F2 sont hétérozygotes."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q5",
          "type": "mcq",
          "prompt": "L’uniformité des hybrides de la première génération est :",
          "options": [
            "La première loi de Mendel",
            "Le test-cross",
            "Une ségrégation",
            "Une erreur de croisement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé des affirmations donne vrai à cette proposition."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q6",
          "type": "mcq",
          "prompt": "Le bilan théorique de l’échiquier de la F2 donne :",
          "options": [
            "Des proportions contraires à l’expérience",
            "Uniquement du blanc",
            "Les mêmes proportions que les résultats expérimentaux",
            "Aucun gris"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé conclut à la conformité des résultats théoriques et expérimentaux."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04",
      "order": 4,
      "title": "Le test-cross : une ségrégation $\\frac{1}{2}$, $\\frac{1}{2}$ qui révèle les gamètes de l’hybride",
      "summary": "Le croisement d’une souris grise hybride avec une souris blanche homozygote récessive donne autant de gris que de blancs ; dans un test-cross, les proportions reflètent les gamètes de l’individu testé.",
      "conceptExplanation": "Troisième croisement : une souris parente blanche croisée avec une souris grise issue du premier croisement donne 36 souriceaux gris et 37 souriceaux blancs, soit des proportions voisines de $\\frac{1}{2}$ et $\\frac{1}{2}$.\nCette ségrégation $\\frac{1}{2}$, $\\frac{1}{2}$ s’explique parce que le caractère couleur du pelage est gouverné par un couple d’allèles autosomal et que les souris croisées sont l’une hétérozygote et l’autre homozygote récessif : il s’agit d’un test-cross.\nDans un test-cross, la proportion des individus reflète en qualité et en quantité les gamètes de l’individu testé. L’échiquier de croisement donne en bilan théorique moitié de phénotype gris et moitié de phénotype blanc, conforme aux résultats expérimentaux.",
      "keyRule": "Test-cross égale hybride croisé avec homozygote récessif, descendance en deux moitiés.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître les ségrégations du monohybridisme",
        "statement": "Associe chaque ségrégation à son interprétation : trois quarts un quart, moitié moitié, un quart un demi un quart, et descendance uniforme.",
        "methodSteps": [
          "La ségrégation en deux moitiés correspond au test-cross.",
          "Trois quarts, un quart correspond à des parents hétérozygotes avec dominance complète.",
          "Un quart, un demi, un quart correspond à des hétérozygotes avec codominance."
        ],
        "conclusion": "Le corrigé des associations donne la correspondance pour chaque ségrégation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du test-cross",
          "stepTheme": "Définition du test-cross",
          "stepBadge": "Définition du test-cross",
          "paragraphText": "• Test-cross : croisement entre un hybride et un parent homozygote récessif.\nDire qu’il s’agit d’un croisement avec un parent homozygote dominant est faux, d’après le corrigé des affirmations.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q1",
            "type": "mcq",
            "prompt": "Le test-cross est un croisement entre un hybride F1 et :",
            "options": [
              "Un parent homozygote dominant",
              "Un parent homozygote récessif",
              "Un individu d’une autre espèce",
              "Lui-même uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé juge fausse la version avec homozygote dominant ; le cours croise l’hybride avec le parent blanc récessif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La ségrégation du test-cross",
          "stepTheme": "La ségrégation du test-cross",
          "stepBadge": "La ségrégation du test-cross",
          "paragraphText": "Le troisième croisement donne 36 gris et 37 blancs.\nLes proportions sont voisines de $\\frac{1}{2}$ pour chaque phénotype.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q2",
            "type": "mcq",
            "prompt": "La descendance du test-cross présente une ségrégation de :",
            "options": [
              "Un quart, un demi, un quart",
              "Uniquement du gris",
              "Trois quarts, un quart",
              "Moitié, moitié"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le calcul des proportions du troisième croisement donne deux moitiés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Ce que reflète le test-cross",
          "stepTheme": "Ce que reflète le test-cross",
          "stepBadge": "Ce que reflète le test-cross",
          "paragraphText": "Dans un test-cross, la proportion des individus reflète en qualité et en quantité les gamètes de l’individu testé.\nL’hybride produit donc deux types de gamètes en proportions égales.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q3",
            "type": "mcq",
            "prompt": "Dans un test-cross, les proportions de la descendance reflètent :",
            "options": [
              "Les chromosomes sexuels seuls",
              "Uniquement le parent récessif",
              "Les gamètes de l’individu testé, en qualité et en quantité",
              "Le hasard sans règle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la phrase exacte de l’interprétation du troisième croisement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les génotypes croisés",
          "stepTheme": "Les génotypes croisés",
          "stepBadge": "Les génotypes croisés",
          "paragraphText": "Méthode : écrire les génotypes avant l’échiquier : la souris grise testée est hétérozygote, la souris blanche est homozygote récessive.\nLe parent blanc ne fournit qu’un seul type de gamète.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q4",
            "type": "mcq",
            "prompt": "La souris blanche du test-cross est :",
            "options": [
              "Homozygote récessive",
              "Hétérozygote",
              "Homozygote dominante",
              "Sans allèle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’interprétation dit que les croisés sont l’un hétérozygote et l’autre homozygote récessif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre F2 et test-cross",
          "stepTheme": "Ne pas confondre F2 et test-cross",
          "stepBadge": "Ne pas confondre F2 et test-cross",
          "paragraphText": "Piège : les deux croisements donnent une descendance hétérogène, mais pas dans les mêmes proportions.\nLa F2 d’hybrides donne trois quarts, un quart ; le test-cross donne moitié, moitié.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q5",
            "type": "mcq",
            "prompt": "La descendance en deux moitiés égales signale plutôt :",
            "options": [
              "Un croisement de lignées pures",
              "Une codominance en F1",
              "Un croisement d’hybrides entre eux",
              "Un test-cross"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le troisième croisement, en deux moitiés, est identifié comme un test-cross dans le résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le bilan théorique du test-cross",
          "stepTheme": "Le bilan théorique du test-cross",
          "stepBadge": "Le bilan théorique du test-cross",
          "paragraphText": "Exemple de bilan : l’échiquier du troisième croisement donne moitié de gris et moitié de blanc en résultats théoriques.\nCes résultats sont conformes aux résultats expérimentaux.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q6",
            "type": "mcq",
            "prompt": "Le bilan théorique du test-cross est :",
            "options": [
              "Un quart de gris, trois quarts de blanc",
              "Moitié de gris, moitié de blanc",
              "Trois quarts de gris, un quart de blanc",
              "Uniquement du blanc"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le bilan inscrit sous l’échiquier du troisième croisement donne deux moitiés."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q1",
          "type": "mcq",
          "prompt": "Le test-cross est un croisement entre un hybride F1 et :",
          "options": [
            "Un parent homozygote dominant",
            "Un parent homozygote récessif",
            "Un individu d’une autre espèce",
            "Lui-même uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé juge fausse la version avec homozygote dominant ; le cours croise l’hybride avec le parent blanc récessif."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q2",
          "type": "mcq",
          "prompt": "La descendance du test-cross présente une ségrégation de :",
          "options": [
            "Un quart, un demi, un quart",
            "Uniquement du gris",
            "Trois quarts, un quart",
            "Moitié, moitié"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le calcul des proportions du troisième croisement donne deux moitiés."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q3",
          "type": "mcq",
          "prompt": "Dans un test-cross, les proportions de la descendance reflètent :",
          "options": [
            "Les chromosomes sexuels seuls",
            "Uniquement le parent récessif",
            "Les gamètes de l’individu testé, en qualité et en quantité",
            "Le hasard sans règle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la phrase exacte de l’interprétation du troisième croisement."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q4",
          "type": "mcq",
          "prompt": "La souris blanche du test-cross est :",
          "options": [
            "Homozygote récessive",
            "Hétérozygote",
            "Homozygote dominante",
            "Sans allèle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’interprétation dit que les croisés sont l’un hétérozygote et l’autre homozygote récessif."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q5",
          "type": "mcq",
          "prompt": "La descendance en deux moitiés égales signale plutôt :",
          "options": [
            "Un croisement de lignées pures",
            "Une codominance en F1",
            "Un croisement d’hybrides entre eux",
            "Un test-cross"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le troisième croisement, en deux moitiés, est identifié comme un test-cross dans le résumé."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q6",
          "type": "mcq",
          "prompt": "Le bilan théorique du test-cross est :",
          "options": [
            "Un quart de gris, trois quarts de blanc",
            "Moitié de gris, moitié de blanc",
            "Trois quarts de gris, un quart de blanc",
            "Uniquement du blanc"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le bilan inscrit sous l’échiquier du troisième croisement donne deux moitiés."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05",
      "order": 5,
      "title": "La codominance chez la belle de nuit : F1 rose et ségrégation $\\frac{1}{4}$, $\\frac{1}{2}$, $\\frac{1}{4}$ en F2",
      "summary": "Chez la belle de nuit, rouge et blanc ne se dominent pas : la F1 est rose, phénotype intermédiaire, et la F2 donne un quart de rouge, un demi de rose et un quart de blanc.",
      "conceptExplanation": "Premier croisement : une belle de nuit à fleurs rouges croisée avec une plante à fleurs blanches donne une descendance homogène composée uniquement de plantes à fleurs roses, intermédiaires entre le rouge et le blanc. La descendance est homogène parce que les parents sont de souche pure, donc homozygotes, et le phénotype intermédiaire rose apparaît parce qu’il n’y a pas de dominance du rouge sur le blanc et vice versa : on dit qu’il y a codominance.\nDeuxième croisement : deux plantes à fleurs roses donnent 120 plantes à fleurs rouges, 121 à fleurs blanches et 242 à fleurs roses, soit une ségrégation $\\frac{1}{4}$, $\\frac{1}{2}$ et $\\frac{1}{4}$ au niveau des phénotypes, qui traduit un couple d’allèles autosomal avec codominance et des parents hétérozygotes.\nPour le choix des symboles, on prend l’initiale du phénotype de chaque lignée pure en majuscule : allèle rouge R, allèle blanc B, allèle rose BR ; phénotypes rouge, blanc et rose notés entre crochets avec ces symboles ; le couple d’allèles ou le gène est B/R. L’échiquier de la F2 donne en bilan théorique un quart de rouge, un demi de rose et un quart de blanc, conforme aux résultats expérimentaux.",
      "keyRule": "Pas de dominance égale phénotype intermédiaire en F1 et trois phénotypes en F2.",
      "formulas": [],
      "workedExample": {
        "title": "Décrire et interpréter l’expérience de la belle de nuit",
        "statement": "On croise une plante à fleurs rouges et une plante à fleurs blanches, puis deux plantes roses entre elles. Interprète les deux croisements.",
        "methodSteps": [
          "La F1 homogène rose montre des parents de souche pure et homozygotes.",
          "Le rose intermédiaire signale l’absence de dominance : c’est la codominance.",
          "La F2 en trois phénotypes confirme des parents hétérozygotes codominants."
        ],
        "conclusion": "Les résultats théoriques de l’échiquier sont conformes aux résultats expérimentaux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La codominance",
          "stepTheme": "La codominance",
          "stepBadge": "La codominance",
          "paragraphText": "• Codominance : absence de dominance d’un phénotype sur l’autre, donnant un phénotype intermédiaire chez l’hybride.\nChez la belle de nuit, cet intermédiaire est le rose.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q1",
            "type": "mcq",
            "prompt": "La codominance se reconnaît en F1 par :",
            "options": [
              "Un phénotype intermédiaire entre les deux parents",
              "La disparition des deux phénotypes parents sans intermédiaire",
              "La dominance totale du rouge",
              "Une descendance hétérogène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’interprétation dit que le rose apparaît car il n’y a pas de dominance du rouge sur le blanc, et inversement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La F1 rose homogène",
          "stepTheme": "La F1 rose homogène",
          "stepBadge": "La F1 rose homogène",
          "paragraphText": "Le premier croisement donne uniquement des fleurs roses.\nCette descendance homogène vient de parents de souche pure, homozygotes.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q2",
            "type": "mcq",
            "prompt": "La F1 de la belle de nuit est composée uniquement de fleurs :",
            "options": [
              "Blanches",
              "Rouges et blanches mélangées",
              "Roses",
              "Rouges"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les résultats du premier croisement donnent toutes les plantes à fleurs roses."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les trois phénotypes de la F2",
          "stepTheme": "Les trois phénotypes de la F2",
          "stepBadge": "Les trois phénotypes de la F2",
          "paragraphText": "Le deuxième croisement donne des fleurs rouges, blanches et roses.\nLes proportions sont voisines de $\\frac{1}{4}$, $\\frac{1}{2}$ et $\\frac{1}{4}$.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q3",
            "type": "mcq",
            "prompt": "La ségrégation de la F2 de la belle de nuit est de :",
            "options": [
              "Uniquement du rose",
              "Un quart de rouge, un demi de rose, un quart de blanc",
              "Trois quarts, un quart",
              "Moitié, moitié"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le calcul des proportions du résumé donne un quart, un demi, un quart."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les symboles en codominance",
          "stepTheme": "Les symboles en codominance",
          "stepBadge": "Les symboles en codominance",
          "paragraphText": "Méthode : en codominance, chaque allèle de lignée pure prend l’initiale de son phénotype en majuscule.\nRouge donne R, blanc donne B, et le rose s’écrit avec les deux initiales en majuscule, BR.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q4",
            "type": "mcq",
            "prompt": "Le phénotype rose est symbolisé par :",
            "options": [
              "b minuscule",
              "R seul",
              "Un symbole sans lettre",
              "BR, les deux initiales en majuscule"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le choix des symboles du résumé écrit l’allèle rose avec les deux initiales en majuscule."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les parents de la F2 sont hétérozygotes",
          "stepTheme": "Les parents de la F2 sont hétérozygotes",
          "stepBadge": "Les parents de la F2 sont hétérozygotes",
          "paragraphText": "Piège : les plantes roses croisées entre elles ne sont pas de lignée pure.\nCe sont des hybrides hétérozygotes, ce qui explique les trois phénotypes obtenus.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q5",
            "type": "mcq",
            "prompt": "Les plantes à fleurs roses croisées au deuxième croisement sont :",
            "options": [
              "Sans génotype",
              "De la F1 récessive",
              "Hétérozygotes",
              "Homozygotes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’interprétation de la F2 dit que les parents croisés sont hétérozygotes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le bilan théorique de la F2",
          "stepTheme": "Le bilan théorique de la F2",
          "stepBadge": "Le bilan théorique de la F2",
          "paragraphText": "Exemple de bilan d’échiquier : un quart de rouge, un demi de rose et un quart de blanc en résultats théoriques.\nCes résultats sont conformes aux résultats expérimentaux.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q6",
            "type": "mcq",
            "prompt": "Le bilan théorique de la F2 de la belle de nuit donne :",
            "options": [
              "Un quart de rouge, un demi de rose, un quart de blanc",
              "Moitié de rouge, moitié de blanc",
              "Uniquement du rose",
              "Trois quarts de rose, un quart de blanc"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le bilan inscrit sous l’échiquier du deuxième croisement donne ces trois proportions."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q1",
          "type": "mcq",
          "prompt": "La codominance se reconnaît en F1 par :",
          "options": [
            "Un phénotype intermédiaire entre les deux parents",
            "La disparition des deux phénotypes parents sans intermédiaire",
            "La dominance totale du rouge",
            "Une descendance hétérogène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’interprétation dit que le rose apparaît car il n’y a pas de dominance du rouge sur le blanc, et inversement."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q2",
          "type": "mcq",
          "prompt": "La F1 de la belle de nuit est composée uniquement de fleurs :",
          "options": [
            "Blanches",
            "Rouges et blanches mélangées",
            "Roses",
            "Rouges"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les résultats du premier croisement donnent toutes les plantes à fleurs roses."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q3",
          "type": "mcq",
          "prompt": "La ségrégation de la F2 de la belle de nuit est de :",
          "options": [
            "Uniquement du rose",
            "Un quart de rouge, un demi de rose, un quart de blanc",
            "Trois quarts, un quart",
            "Moitié, moitié"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le calcul des proportions du résumé donne un quart, un demi, un quart."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q4",
          "type": "mcq",
          "prompt": "Le phénotype rose est symbolisé par :",
          "options": [
            "b minuscule",
            "R seul",
            "Un symbole sans lettre",
            "BR, les deux initiales en majuscule"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le choix des symboles du résumé écrit l’allèle rose avec les deux initiales en majuscule."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q5",
          "type": "mcq",
          "prompt": "Les plantes à fleurs roses croisées au deuxième croisement sont :",
          "options": [
            "Sans génotype",
            "De la F1 récessive",
            "Hétérozygotes",
            "Homozygotes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’interprétation de la F2 dit que les parents croisés sont hétérozygotes."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q6",
          "type": "mcq",
          "prompt": "Le bilan théorique de la F2 de la belle de nuit donne :",
          "options": [
            "Un quart de rouge, un demi de rose, un quart de blanc",
            "Moitié de rouge, moitié de blanc",
            "Uniquement du rose",
            "Trois quarts de rose, un quart de blanc"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bilan inscrit sous l’échiquier du deuxième croisement donne ces trois proportions."
        }
      ]
    }
  ]
};
