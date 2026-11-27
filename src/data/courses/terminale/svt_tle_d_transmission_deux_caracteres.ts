import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 12 : La transmission de deux caractères héréditaires chez les êtres vivants » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2880
export const SVT_TLE_D_L12_TRANSMISSION_DEUX_CARACTERES: CurriculumChapter = {
  "id": "terminale_d_svt_l12_transmission_deux_caracteres",
  "subjectId": "svt",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 12,
  "title": "Leçon 12 : La transmission de deux caractères héréditaires chez les êtres vivants",
  "summary": "Le dihybridisme étudie la transmission simultanée de deux caractères : chez les pois, les deux couples d’allèles sont indépendants (chromosomes différents), tandis que chez la drosophile, couleur du corps et longueur des ailes sont liés sur le même chromosome, à 15,70 unités de recombinaison l’un de l’autre.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2880",
  "points": [
    {
      "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01",
      "order": 1,
      "title": "Le dihybridisme et le premier croisement de pois",
      "summary": "Définir le dihybridisme et interpréter la F1 homogène obtenue en croisant des pois lisses jaunes et ridés verts.",
      "conceptExplanation": "Dans ces croisements, on a la transmission simultanée de deux caractères : c’est un cas de dihybridisme.\nLe caractère « couleur des graines » se présente sous deux phénotypes, jaune et vert, et le caractère « aspect des graines » sous deux phénotypes, ridé et lisse.\nAu premier croisement, on croise des pois à graines lisses et jaunes avec des pois à graines ridées et vertes, et on obtient uniquement des graines lisses et jaunes en F1.\nLa descendance F1 étant homogène, les parents croisés sont de race pure, donc homozygotes pour chacun des caractères.\nOn en déduit que les phénotypes lisse et jaune, qui s’expriment en F1, sont dominants, et que les phénotypes ridé et vert, masqués, sont récessifs.\nLes symboles choisis sont : lisse R et ridé r pour le couple d’allèles R/r ; jaune V et vert v pour le couple d’allèles V/v.",
      "keyRule": "F1 homogène à partir de parents différents signifie parents de race pure, et les phénotypes de la F1 sont les dominants.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter le premier croisement de pois",
        "statement": "On croise des pois à graines lisses et jaunes avec des pois à graines ridées et vertes ; toutes les graines récoltées sont lisses et jaunes. Que peut-on en déduire ?",
        "methodSteps": [
          "La descendance est homogène : les parents sont donc de race pure, homozygotes pour chacun des caractères.",
          "Les phénotypes qui s’expriment en F1, lisse et jaune, sont dominants.",
          "Les phénotypes masqués en F1, ridé et vert, sont récessifs.",
          "On choisit les symboles : R pour lisse, r pour ridé ; V pour jaune, v pour vert."
        ],
        "conclusion": "La F1 homogène révèle la race pure des parents et la dominance de lisse et de jaune."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le dihybridisme",
          "stepTheme": "Le dihybridisme",
          "stepBadge": "Le dihybridisme",
          "paragraphText": "• Dihybridisme : transmission simultanée de deux caractères héréditaires.\nDans l’exemple de la leçon, les deux caractères sont la couleur des graines et l’aspect des graines des pois.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q1",
            "type": "mcq",
            "prompt": "Le dihybridisme est l’étude de :",
            "options": [
              "La transmission simultanée de deux caractères héréditaires",
              "La transmission d’un seul caractère",
              "La fécondation chez les plantes",
              "La formation des gamètes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon précise que la transmission de deux caractères à la fois est un cas de dihybridisme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les deux caractères étudiés chez le pois",
          "stepTheme": "Les deux caractères étudiés chez le pois",
          "stepBadge": "Les deux caractères étudiés chez le pois",
          "paragraphText": "Le caractère « couleur des graines » se présente sous deux phénotypes : jaune et vert.\nLe caractère « aspect des graines » se présente sous deux phénotypes : ridé et lisse.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q2",
            "type": "mcq",
            "prompt": "Les deux caractères étudiés dans les croisements de pois sont :",
            "options": [
              "La couleur et la taille des graines",
              "La couleur des graines et l’aspect des graines",
              "La couleur des fleurs et la couleur des graines",
              "La longueur et la couleur des ailes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D’après l’analyse de la leçon, les caractères sont la couleur des graines (jaune, vert) et l’aspect des graines (lisse, ridé)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une F1 homogène",
          "stepTheme": "Une F1 homogène",
          "stepBadge": "Une F1 homogène",
          "paragraphText": "Au premier croisement, on obtient uniquement des graines lisses et jaunes en F1.\nLes pois croisés sont de phénotypes différents pour chaque caractère et donnent une descendance homogène.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q3",
            "type": "mcq",
            "prompt": "Au premier croisement, la F1 est composée :",
            "options": [
              "De graines ridées et vertes uniquement",
              "D’un mélange de quatre phénotypes",
              "Uniquement de graines lisses et jaunes",
              "De graines lisses et vertes uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les résultats du premier croisement donnent uniquement des graines lisses et jaunes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Des parents de race pure",
          "stepTheme": "Des parents de race pure",
          "stepBadge": "Des parents de race pure",
          "paragraphText": "La descendance F1 est homogène : les parents croisés sont donc de race pure, ou de lignée pure.\nIls sont homozygotes pour chacun des caractères.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q4",
            "type": "mcq",
            "prompt": "Une F1 homogène permet de déduire que les parents sont :",
            "options": [
              "Hétérozygotes pour les deux caractères",
              "Des hybrides de première génération",
              "Déjà recombinés",
              "De race pure, homozygotes pour chaque caractère"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’interprétation de la leçon conclut que des parents donnant une descendance homogène sont de race pure, donc homozygotes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Dominants et récessifs chez le pois",
          "stepTheme": "Dominants et récessifs chez le pois",
          "stepBadge": "Dominants et récessifs chez le pois",
          "paragraphText": "Les phénotypes lisse et jaune, qui s’expriment en F1, sont dominants.\nLes phénotypes ridé et vert, qui sont masqués en F1, sont récessifs.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q5",
            "type": "mcq",
            "prompt": "Chez le pois, les phénotypes dominants sont :",
            "options": [
              "Lisse et jaune",
              "Ridé et vert",
              "Lisse et vert",
              "Ridé et jaune"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon déduit que lisse et jaune s’expriment en F1 et sont dominants, tandis que ridé et vert sont masqués et récessifs."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le choix des symboles des allèles",
          "stepTheme": "Le choix des symboles des allèles",
          "stepBadge": "Le choix des symboles des allèles",
          "paragraphText": "Piège : attribuer la majuscule aux phénotypes récessifs.\nDans la leçon, le dominant reçoit la majuscule : lisse R, jaune V ; le récessif reçoit la minuscule : ridé r, vert v, formant les couples R/r et V/v.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q6",
            "type": "mcq",
            "prompt": "Les symboles choisis dans la leçon sont :",
            "options": [
              "Les dominants reçoivent la minuscule et les récessifs la majuscule",
              "Lisse reçoit R, ridé reçoit r ; jaune reçoit V, vert reçoit v",
              "On utilise les lettres L et J pour les deux caractères",
              "On échange les lettres : V pour l’aspect et R pour la couleur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D’après le choix des symboles de la leçon : ridé r, lisse R (couple R/r) ; vert v, jaune V (couple V/v)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le point de départ : des lapins aux pois",
          "stepTheme": "Le point de départ : des lapins aux pois",
          "stepBadge": "Le point de départ : des lapins aux pois",
          "paragraphText": "La situation d’apprentissage part de lapins au pelage noir et aux yeux noirs donnant un lapereau au pelage blanc et aux yeux rouges.\nPour comprendre la transmission de deux caractères à la fois, la leçon réalise ensuite des croisements contrôlés avec des pois.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q7",
            "type": "mcq",
            "prompt": "Dans la situation d’apprentissage, le lapereau différent de ses parents a :",
            "options": [
              "Un pelage noir et des yeux noirs",
              "Un pelage noir et des yeux rouges",
              "Un pelage blanc et des yeux rouges",
              "Un pelage blanc et des yeux noirs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte introductif décrit un lapereau au pelage blanc et des yeux rouges, né de parents au pelage noir et aux yeux noirs."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q1",
          "type": "mcq",
          "prompt": "Le dihybridisme est l’étude de :",
          "options": [
            "La transmission simultanée de deux caractères héréditaires",
            "La transmission d’un seul caractère",
            "La fécondation chez les plantes",
            "La formation des gamètes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon précise que la transmission de deux caractères à la fois est un cas de dihybridisme."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q2",
          "type": "mcq",
          "prompt": "Les deux caractères étudiés dans les croisements de pois sont :",
          "options": [
            "La couleur et la taille des graines",
            "La couleur des graines et l’aspect des graines",
            "La couleur des fleurs et la couleur des graines",
            "La longueur et la couleur des ailes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D’après l’analyse de la leçon, les caractères sont la couleur des graines (jaune, vert) et l’aspect des graines (lisse, ridé)."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q3",
          "type": "mcq",
          "prompt": "Au premier croisement, la F1 est composée :",
          "options": [
            "De graines ridées et vertes uniquement",
            "D’un mélange de quatre phénotypes",
            "Uniquement de graines lisses et jaunes",
            "De graines lisses et vertes uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les résultats du premier croisement donnent uniquement des graines lisses et jaunes."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q4",
          "type": "mcq",
          "prompt": "Une F1 homogène permet de déduire que les parents sont :",
          "options": [
            "Hétérozygotes pour les deux caractères",
            "Des hybrides de première génération",
            "Déjà recombinés",
            "De race pure, homozygotes pour chaque caractère"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’interprétation de la leçon conclut que des parents donnant une descendance homogène sont de race pure, donc homozygotes."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q5",
          "type": "mcq",
          "prompt": "Chez le pois, les phénotypes dominants sont :",
          "options": [
            "Lisse et jaune",
            "Ridé et vert",
            "Lisse et vert",
            "Ridé et jaune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon déduit que lisse et jaune s’expriment en F1 et sont dominants, tandis que ridé et vert sont masqués et récessifs."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q6",
          "type": "mcq",
          "prompt": "Les symboles choisis dans la leçon sont :",
          "options": [
            "Les dominants reçoivent la minuscule et les récessifs la majuscule",
            "Lisse reçoit R, ridé reçoit r ; jaune reçoit V, vert reçoit v",
            "On utilise les lettres L et J pour les deux caractères",
            "On échange les lettres : V pour l’aspect et R pour la couleur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D’après le choix des symboles de la leçon : ridé r, lisse R (couple R/r) ; vert v, jaune V (couple V/v)."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p01_q7",
          "type": "mcq",
          "prompt": "Dans la situation d’apprentissage, le lapereau différent de ses parents a :",
          "options": [
            "Un pelage noir et des yeux noirs",
            "Un pelage noir et des yeux rouges",
            "Un pelage blanc et des yeux rouges",
            "Un pelage blanc et des yeux noirs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte introductif décrit un lapereau au pelage blanc et des yeux rouges, né de parents au pelage noir et aux yeux noirs."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l12_transmission_deux_caracteres_p02",
      "order": 2,
      "title": "Le deuxième croisement de pois : la ségrégation 9-3-3-1",
      "summary": "Analyser l’autofécondation de la F1 et vérifier l’indépendance des deux couples d’allèles.",
      "conceptExplanation": "Au deuxième croisement, les graines lisses et jaunes de la F1 sont semées et les plants obtenus s’autofécondent.\nOn récolte 3057 graines lisses et jaunes, 1021 graines lisses et vertes, 1012 graines ridées et jaunes et 341 graines ridées et vertes, soit 5431 graines au total.\nÉtudié caractère par caractère, chaque caractère donne une ségrégation de 3/4 de dominant et 1/4 de récessif : chaque caractère est donc gouverné par un couple d’allèles avec dominance complète.\nEn combinant les deux ségrégations, on attend 9/16 de [RV], 3/16 de [Rv], 3/16 de [rV] et 1/16 de [rv].\nLes effectifs théoriques attendus sous l’hypothèse d’indépendance (3054,93 ; 1018,31 ; 1018,31 ; 339,43) sont statistiquement identiques aux effectifs observés.\nLes couples d’allèles R/r et V/v sont donc situés sur des chromosomes différents : ils sont indépendants.",
      "keyRule": "En F2 de dihybridisme à gènes indépendants : 9/16, 3/16, 3/16, 1/16, et chaque caractère pris seul ségrége en 3/4 et 1/4.",
      "formulas": [],
      "workedExample": {
        "title": "Vérifier l’hypothèse d’indépendance en F2",
        "statement": "À partir des effectifs observés en F2 (3057 ; 1021 ; 1012 ; 341 sur 5431 graines), montre que les deux couples d’allèles sont indépendants.",
        "methodSteps": [
          "Caractère par caractère, on retrouve 75 pour cent environ de dominant et 25 pour cent de récessif : ségrégation 3/4 et 1/4 pour chaque caractère.",
          "En combinant les deux caractères, l’hypothèse d’indépendance prévoit 9/16 de [RV], 3/16 de [Rv], 3/16 de [rV] et 1/16 de [rv].",
          "Les effectifs théoriques calculés (3054,93 ; 1018,31 ; 1018,31 ; 339,43) sont très proches des effectifs observés.",
          "L’hypothèse est vérifiée : les couples d’allèles sont indépendants."
        ],
        "conclusion": "Les effectifs observés correspondent aux effectifs attendus en 9/16, 3/16, 3/16, 1/16 : les gènes sont indépendants."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les effectifs de la F2",
          "stepTheme": "Les effectifs de la F2",
          "stepBadge": "Les effectifs de la F2",
          "paragraphText": "L’autofécondation de la F1 donne 3057 graines lisses et jaunes, 1021 lisses et vertes, 1012 ridées et jaunes et 341 ridées et vertes.\nLe total est de 5431 graines : la descendance est hétérogène, contrairement à la F1.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p02_q1",
            "type": "mcq",
            "prompt": "Le phénotype le plus nombreux en F2 est :",
            "options": [
              "Lisse et jaune, avec 3057 graines",
              "Ridé et vert, avec 341 graines",
              "Lisse et vert, avec 1021 graines",
              "Ridé et jaune, avec 1012 graines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après les résultats, les graines lisses et jaunes sont les plus nombreuses en F2, avec 3057 graines sur 5431."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Chaque caractère ségrége en 3/4 et 1/4",
          "stepTheme": "Chaque caractère ségrége en 3/4 et 1/4",
          "stepBadge": "Chaque caractère ségrége en 3/4 et 1/4",
          "paragraphText": "Pour l’aspect des graines, on obtient environ 75 pour cent de lisses et 25 pour cent de ridées, soit 3/4 et 1/4.\nLe même calcul pour la couleur donne environ 75 pour cent de jaunes et 25 pour cent de vertes.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p02_q2",
            "type": "mcq",
            "prompt": "Pris séparément, chaque caractère donne en F2 une ségrégation phénotypique de :",
            "options": [
              "1/2 et 1/2",
              "3/4 de dominant et 1/4 de récessif",
              "9/16 et 1/16",
              "100 pour cent de dominant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’étude caractère par caractère de la leçon donne, pour chaque caractère, une ségrégation 3/4 et 1/4."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La ségrégation combinée 9-3-3-1",
          "stepTheme": "La ségrégation combinée 9-3-3-1",
          "stepBadge": "La ségrégation combinée 9-3-3-1",
          "paragraphText": "En combinant les deux ségrégations 3/4 et 1/4, on obtient les proportions des quatre phénotypes.\nCe sont 9/16 de [RV], 3/16 de [Rv], 3/16 de [rV] et 1/16 de [rv].",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p02_q3",
            "type": "mcq",
            "prompt": "Sous l’hypothèse d’indépendance, la proportion attendue du double récessif [rv] en F2 est :",
            "options": [
              "9/16",
              "3/16",
              "1/16",
              "1/4"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La combinaison des ségrégations donne 1/16 pour le phénotype réunissant les deux récessifs, [rv]."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le test de l’hypothèse d’indépendance",
          "stepTheme": "Le test de l’hypothèse d’indépendance",
          "stepBadge": "Le test de l’hypothèse d’indépendance",
          "paragraphText": "Méthode : on calcule les effectifs théoriques attendus sous l’hypothèse d’indépendance et on les compare aux effectifs observés.\nPour [RV], l’effectif théorique est 9/16 de 5431, soit 3054,93, contre 3057 observés.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p02_q4",
            "type": "mcq",
            "prompt": "Les effectifs théoriques attendus sont statistiquement identiques aux effectifs observés. On conclut que :",
            "options": [
              "Les deux couples d’allèles sont liés",
              "Le croisement est un test-cross",
              "Les parents n’étaient pas de race pure",
              "Les couples d’allèles R/r et V/v sont indépendants"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon conclut que les couples d’allèles sont situés sur des chromosomes différents, donc indépendants, car les effectifs coïncident."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Indépendant veut dire chromosomes différents",
          "stepTheme": "Indépendant veut dire chromosomes différents",
          "stepBadge": "Indépendant veut dire chromosomes différents",
          "paragraphText": "Piège : confondre indépendance des gènes et absence de dominance.\nL’indépendance signifie ici que les deux couples d’allèles sont portés par des chromosomes différents, ce qui n’empêche pas la dominance complète dans chaque couple.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p02_q5",
            "type": "mcq",
            "prompt": "Deux couples d’allèles indépendants sont :",
            "options": [
              "Situés sur des chromosomes différents",
              "Situés sur le même chromosome",
              "Toujours sans dominance",
              "Transmis uniquement par la mère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après la conclusion du test, les couples d’allèles indépendants sont situés sur des chromosomes différents."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’effectif théorique du double dominant",
          "stepTheme": "L’effectif théorique du double dominant",
          "stepBadge": "L’effectif théorique du double dominant",
          "paragraphText": "Exemple chiffré de la leçon : pour le phénotype [RV], la ségrégation attendue est 9/16.\nAppliquée aux 5431 graines, elle donne un effectif théorique de 3054,93, très proche des 3057 graines observées.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p02_q6",
            "type": "mcq",
            "prompt": "L’effectif théorique attendu pour [RV] en F2 est :",
            "options": [
              "1018,31",
              "3054,93",
              "339,43",
              "5431"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau du test d’indépendance donne 3054,93 comme effectif théorique de [RV], contre 3057 observés."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p02_q1",
          "type": "mcq",
          "prompt": "Le phénotype le plus nombreux en F2 est :",
          "options": [
            "Lisse et jaune, avec 3057 graines",
            "Ridé et vert, avec 341 graines",
            "Lisse et vert, avec 1021 graines",
            "Ridé et jaune, avec 1012 graines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après les résultats, les graines lisses et jaunes sont les plus nombreuses en F2, avec 3057 graines sur 5431."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p02_q2",
          "type": "mcq",
          "prompt": "Pris séparément, chaque caractère donne en F2 une ségrégation phénotypique de :",
          "options": [
            "1/2 et 1/2",
            "3/4 de dominant et 1/4 de récessif",
            "9/16 et 1/16",
            "100 pour cent de dominant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’étude caractère par caractère de la leçon donne, pour chaque caractère, une ségrégation 3/4 et 1/4."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p02_q3",
          "type": "mcq",
          "prompt": "Sous l’hypothèse d’indépendance, la proportion attendue du double récessif [rv] en F2 est :",
          "options": [
            "9/16",
            "3/16",
            "1/16",
            "1/4"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La combinaison des ségrégations donne 1/16 pour le phénotype réunissant les deux récessifs, [rv]."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p02_q4",
          "type": "mcq",
          "prompt": "Les effectifs théoriques attendus sont statistiquement identiques aux effectifs observés. On conclut que :",
          "options": [
            "Les deux couples d’allèles sont liés",
            "Le croisement est un test-cross",
            "Les parents n’étaient pas de race pure",
            "Les couples d’allèles R/r et V/v sont indépendants"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon conclut que les couples d’allèles sont situés sur des chromosomes différents, donc indépendants, car les effectifs coïncident."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p02_q5",
          "type": "mcq",
          "prompt": "Deux couples d’allèles indépendants sont :",
          "options": [
            "Situés sur des chromosomes différents",
            "Situés sur le même chromosome",
            "Toujours sans dominance",
            "Transmis uniquement par la mère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après la conclusion du test, les couples d’allèles indépendants sont situés sur des chromosomes différents."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p02_q6",
          "type": "mcq",
          "prompt": "L’effectif théorique attendu pour [RV] en F2 est :",
          "options": [
            "1018,31",
            "3054,93",
            "339,43",
            "5431"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau du test d’indépendance donne 3054,93 comme effectif théorique de [RV], contre 3057 observés."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l12_transmission_deux_caracteres_p03",
      "order": 3,
      "title": "Le troisième croisement de pois : le test-cross",
      "summary": "Interpréter le croisement de la F1 avec le parent double récessif et ses proportions en quarts égaux.",
      "conceptExplanation": "Au troisième croisement, on croise les graines lisses et jaunes de la F1 avec des graines ridées et vertes, le parent double récessif.\nOn obtient 496 graines lisses et jaunes, 507 lisses et vertes, 496 ridées et jaunes et 500 ridées et vertes, soit 1999 graines.\nCaractère par caractère, la ségrégation est de 1/2 et 1/2, ce qui montre que le croisement oppose un hétérozygote à un homozygote récessif : c’est un croisement test, ou test-cross.\nEn combinant les deux caractères, chaque phénotype représente 1/4 de la descendance, et les effectifs théoriques attendus (499,75 pour chaque phénotype) sont statistiquement identiques aux effectifs observés.\nLes deux couples d’allèles V/v et R/r sont donc indépendants, comme au deuxième croisement.\nDans un test-cross, les phénotypes de la descendance révèlent directement les gamètes produits par l’hybride F1 : quatre types de gamètes en proportions égales.",
      "keyRule": "Test-cross de dihybridisme indépendant : quatre phénotypes en proportions égales de 1/4, reflet des quatre gamètes de la F1.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître un test-cross à ses résultats",
        "statement": "Un croisement donne quatre phénotypes en proportions sensiblement égales (496 ; 507 ; 496 ; 500). Identifie ce croisement et interprète-le.",
        "methodSteps": [
          "Caractère par caractère, la ségrégation est de 1/2 et 1/2 : un des parents est hétérozygote, l’autre homozygote récessif.",
          "Il s’agit donc d’un test-cross : la F1 est croisée avec le parent ridé et vert, double récessif.",
          "Les quatre phénotypes en 1/4 chacun correspondent aux quatre types de gamètes de la F1, en proportions égales.",
          "Les effectifs observés coïncident avec les effectifs théoriques : les couples d’allèles sont indépendants."
        ],
        "conclusion": "Quatre phénotypes équiprobables en test-cross signent des gènes indépendants."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le test-cross",
          "stepTheme": "Le test-cross",
          "stepBadge": "Le test-cross",
          "paragraphText": "• Test-cross (ou croisement test) : croisement entre un hétérozygote et un homozygote récessif.\nDans la leçon, la F1 [RV] est croisée avec le parent [rv], double homozygote récessif.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p03_q1",
            "type": "mcq",
            "prompt": "Un test-cross est le croisement entre :",
            "options": [
              "Un hétérozygote et un homozygote récessif",
              "Deux homozygotes dominants",
              "Deux hétérozygotes",
              "Deux races pures différentes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon définit le troisième croisement comme un test-cross : la F1 hétérozygote est croisée avec l’homozygote récessif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La ségrégation 1/2 et 1/2 par caractère",
          "stepTheme": "La ségrégation 1/2 et 1/2 par caractère",
          "stepBadge": "La ségrégation 1/2 et 1/2 par caractère",
          "paragraphText": "Pour l’aspect des graines, on obtient environ 50 pour cent de lisses et 50 pour cent de ridées, soit 1/2 et 1/2.\nLa même ségrégation 1/2 et 1/2 est obtenue pour la couleur des graines.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p03_q2",
            "type": "mcq",
            "prompt": "Dans le test-cross des pois, chaque caractère ségrége en :",
            "options": [
              "3/4 et 1/4",
              "1/2 et 1/2",
              "9/16 et 1/16",
              "100 pour cent et 0 pour cent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’étude caractère par caractère du troisième croisement donne une ségrégation 1/2 et 1/2 pour chaque caractère."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Quatre phénotypes en 1/4 chacun",
          "stepTheme": "Quatre phénotypes en 1/4 chacun",
          "stepBadge": "Quatre phénotypes en 1/4 chacun",
          "paragraphText": "En combinant les deux caractères, les quatre phénotypes [RV], [Rv], [rV] et [rv] apparaissent chacun dans la proportion 1/4.\nLes effectifs observés (496 ; 507 ; 496 ; 500) sont proches de l’effectif théorique de 499,75.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p03_q3",
            "type": "mcq",
            "prompt": "Dans le test-cross, la proportion de chaque phénotype combiné est :",
            "options": [
              "9/16 pour le double dominant",
              "3/16 pour les simples récessifs",
              "1/4 pour chacun des quatre phénotypes",
              "1/16 pour le double récessif"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau de ségrégation du test-cross donne 1/4 pour chacun des quatre phénotypes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ne pas attendre du 9-3-3-1 en test-cross",
          "stepTheme": "Ne pas attendre du 9-3-3-1 en test-cross",
          "stepBadge": "Ne pas attendre du 9-3-3-1 en test-cross",
          "paragraphText": "Piège : appliquer les proportions de la F2 (9/16, 3/16, 3/16, 1/16) au test-cross.\nCes proportions valent pour l’autofécondation de la F1 ; le test-cross donne quatre phénotypes en proportions égales.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p03_q4",
            "type": "mcq",
            "prompt": "Les proportions 9/16, 3/16, 3/16, 1/16 correspondent :",
            "options": [
              "Au test-cross de la F1",
              "Au premier croisement entre races pures",
              "À la F1 elle-même",
              "À l’autofécondation de la F1 (deuxième croisement)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ces proportions sont celles du deuxième croisement, l’autofécondation de la F1, et non celles du test-cross."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Lire les gamètes de la F1 dans la descendance",
          "stepTheme": "Lire les gamètes de la F1 dans la descendance",
          "stepBadge": "Lire les gamètes de la F1 dans la descendance",
          "paragraphText": "Dans un test-cross, le parent récessif ne fournit qu’un seul type de gamète.\nLes phénotypes de la descendance reflètent donc directement, en qualité et en quantité, les gamètes produits par l’hybride testé.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p03_q5",
            "type": "mcq",
            "prompt": "Dans un test-cross, les phénotypes de la descendance reflètent :",
            "options": [
              "Les gamètes produits par l’individu double hétérozygote",
              "Uniquement les gamètes du parent récessif",
              "La fécondation au hasard sans méiose",
              "Les chromosomes de la mère seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme le parent récessif ne donne qu’un gamète, chaque phénotype de la descendance révèle un gamète de la F1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La conclusion commune aux pois",
          "stepTheme": "La conclusion commune aux pois",
          "stepBadge": "La conclusion commune aux pois",
          "paragraphText": "Au deuxième comme au troisième croisement, les effectifs théoriques attendus sous l’hypothèse d’indépendance coïncident avec les effectifs observés.\nLa conclusion de la première partie est donc que la transmission simultanée de deux caractères peut se faire par deux chromosomes différents.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p03_q6",
            "type": "mcq",
            "prompt": "Chez les pois étudiés, les couples d’allèles R/r et V/v sont :",
            "options": [
              "Liés sur le même chromosome",
              "Indépendants, sur des chromosomes différents",
              "Portés par un seul allèle",
              "Sans dominance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux tests d’indépendance concluent que les couples d’allèles des pois sont indépendants."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p03_q1",
          "type": "mcq",
          "prompt": "Un test-cross est le croisement entre :",
          "options": [
            "Un hétérozygote et un homozygote récessif",
            "Deux homozygotes dominants",
            "Deux hétérozygotes",
            "Deux races pures différentes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon définit le troisième croisement comme un test-cross : la F1 hétérozygote est croisée avec l’homozygote récessif."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p03_q2",
          "type": "mcq",
          "prompt": "Dans le test-cross des pois, chaque caractère ségrége en :",
          "options": [
            "3/4 et 1/4",
            "1/2 et 1/2",
            "9/16 et 1/16",
            "100 pour cent et 0 pour cent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’étude caractère par caractère du troisième croisement donne une ségrégation 1/2 et 1/2 pour chaque caractère."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p03_q3",
          "type": "mcq",
          "prompt": "Dans le test-cross, la proportion de chaque phénotype combiné est :",
          "options": [
            "9/16 pour le double dominant",
            "3/16 pour les simples récessifs",
            "1/4 pour chacun des quatre phénotypes",
            "1/16 pour le double récessif"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau de ségrégation du test-cross donne 1/4 pour chacun des quatre phénotypes."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p03_q4",
          "type": "mcq",
          "prompt": "Les proportions 9/16, 3/16, 3/16, 1/16 correspondent :",
          "options": [
            "Au test-cross de la F1",
            "Au premier croisement entre races pures",
            "À la F1 elle-même",
            "À l’autofécondation de la F1 (deuxième croisement)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ces proportions sont celles du deuxième croisement, l’autofécondation de la F1, et non celles du test-cross."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p03_q5",
          "type": "mcq",
          "prompt": "Dans un test-cross, les phénotypes de la descendance reflètent :",
          "options": [
            "Les gamètes produits par l’individu double hétérozygote",
            "Uniquement les gamètes du parent récessif",
            "La fécondation au hasard sans méiose",
            "Les chromosomes de la mère seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme le parent récessif ne donne qu’un gamète, chaque phénotype de la descendance révèle un gamète de la F1."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p03_q6",
          "type": "mcq",
          "prompt": "Chez les pois étudiés, les couples d’allèles R/r et V/v sont :",
          "options": [
            "Liés sur le même chromosome",
            "Indépendants, sur des chromosomes différents",
            "Portés par un seul allèle",
            "Sans dominance"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux tests d’indépendance concluent que les couples d’allèles des pois sont indépendants."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l12_transmission_deux_caracteres_p04",
      "order": 4,
      "title": "L’interprétation chromosomique chez les pois",
      "summary": "Écrire les génotypes des parents et les gamètes de la F1 pour les trois croisements de pois.",
      "conceptExplanation": "Au premier croisement, les parents de race pure [RV] et [rv] produisent chacun un seul type de gamète, à 100 pour cent ; la fécondation donne une F1 homogène [RV], double hétérozygote, à 100 pour cent.\n Au deuxième croisement, chaque F1 produit quatre types de gamètes en proportions égales de 25 pour cent, car les deux couples d’allèles, situés sur des chromosomes différents, se séparent indépendamment à la méiose.\nL’échiquier de croisement de ces gamètes donne le bilan de la F2 : 9/16 de [RV], 3/16 de [Rv], 3/16 de [rV] et 1/16 de [rv].\nAu troisième croisement, la F1 produit les mêmes quatre gamètes à 25 pour cent chacun, tandis que le parent double récessif ne produit qu’un seul gamète à 100 pour cent.\nL’échiquier donne alors quatre phénotypes à 25 pour cent chacun : [RV], [Rv], [rV] et [rv].",
      "keyRule": "Quatre gamètes équiprobables chez la F1 double hétérozygote à gènes indépendants : c’est la clé des deux bilans, F2 et test-cross.",
      "formulas": [],
      "workedExample": {
        "title": "Les gamètes de la F1 double hétérozygote",
        "statement": "Écris les types de gamètes produits par la F1 des pois et leurs proportions, puis le bilan du test-cross.",
        "methodSteps": [
          "La F1 est double hétérozygote pour les couples R/r et V/v, situés sur des chromosomes différents.",
          "À la méiose, les allèles se combinent librement : quatre gamètes sont possibles.",
          "Chaque gamète représente 25 pour cent, soit 1/4 des gamètes produits.",
          "Croisée avec le parent double récessif (un seul gamète), la F1 donne quatre phénotypes à 25 pour cent chacun."
        ],
        "conclusion": "Quatre gamètes à 25 pour cent expliquent à la fois la F2 en 9-3-3-1 et le test-cross en quarts égaux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le double hétérozygote",
          "stepTheme": "Le double hétérozygote",
          "stepBadge": "Le double hétérozygote",
          "paragraphText": "• Double hétérozygote : individu hétérozygote pour deux couples d’allèles à la fois.\nLa F1 des pois, issue de deux races pures différentes pour les deux caractères, est double hétérozygote.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p04_q1",
            "type": "mcq",
            "prompt": "La F1 issue du croisement des deux races pures de pois est :",
            "options": [
              "Double hétérozygote",
              "Double homozygote dominant",
              "Double homozygote récessif",
              "Homozygote pour un seul caractère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque parent apporte un allèle différent pour chaque caractère : la F1 est hétérozygote pour les deux couples d’allèles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Quatre gamètes à 25 pour cent",
          "stepTheme": "Quatre gamètes à 25 pour cent",
          "stepBadge": "Quatre gamètes à 25 pour cent",
          "paragraphText": "La F1 double hétérozygote à gènes indépendants produit quatre types de gamètes.\nChaque type représente 25 pour cent, soit 1/4, des gamètes.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p04_q2",
            "type": "mcq",
            "prompt": "Combien de types de gamètes la F1 des pois produit-elle, et en quelles proportions ?",
            "options": [
              "Deux types à 50 pour cent",
              "Quatre types à 25 pour cent chacun",
              "Un seul type à 100 pour cent",
              "Seize types équiprobables"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation chromosomique de la leçon donne quatre gamètes à 25 pour cent chacun pour la F1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le gamète unique du parent récessif",
          "stepTheme": "Le gamète unique du parent récessif",
          "stepBadge": "Le gamète unique du parent récessif",
          "paragraphText": "Le parent double homozygote récessif [rv] ne peut produire qu’un seul type de gamète, portant les deux allèles récessifs.\nCe gamète est produit à 100 pour cent.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p04_q3",
            "type": "mcq",
            "prompt": "Dans le test-cross, le parent double récessif produit :",
            "options": [
              "Quatre gamètes à 25 pour cent",
              "Deux gamètes à 50 pour cent",
              "Un seul type de gamète, à 100 pour cent",
              "Aucun gamète"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Étant homozygote pour les deux caractères, le parent récessif ne forme qu’un seul type de gamète, à 100 pour cent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L’échiquier de croisement",
          "stepTheme": "L’échiquier de croisement",
          "stepBadge": "L’échiquier de croisement",
          "paragraphText": "Méthode : on place les gamètes d’un parent en lignes et ceux de l’autre en colonnes d’un tableau, l’échiquier de croisement.\nChaque case correspond à une fécondation et donne un génotype, puis un phénotype, de la descendance.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p04_q4",
            "type": "mcq",
            "prompt": "L’échiquier de croisement sert à :",
            "options": [
              "Compter les chromosomes d’une cellule",
              "Mesurer la distance génétique directement",
              "Classer les espèces",
              "Combiner les gamètes des deux parents pour prévoir la descendance"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon utilise l’échiquier pour combiner les gamètes et obtenir le bilan phénotypique des croisements."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La F1 n’est pas un mélange de génotypes",
          "stepTheme": "La F1 n’est pas un mélange de génotypes",
          "stepBadge": "La F1 n’est pas un mélange de génotypes",
          "paragraphText": "Piège : croire que la F1 homogène contient déjà les quatre phénotypes en mélange invisible.\nTous les individus de la F1 ont le même génotype, double hétérozygote, et le même phénotype [RV] ; la diversité n’apparaît qu’à la génération suivante, grâce aux gamètes variés de la F1.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p04_q5",
            "type": "mcq",
            "prompt": "En F1 des pois, tous les individus ont :",
            "options": [
              "Le même génotype double hétérozygote et le phénotype [RV]",
              "Quatre génotypes différents",
              "Le génotype du parent récessif",
              "Des gamètes déjà formés en quatre types visibles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La F1 est homogène : 100 pour cent d’individus [RV] issus de la fécondation entre les gamètes uniques des deux races pures."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le bilan du deuxième croisement par l’échiquier",
          "stepTheme": "Le bilan du deuxième croisement par l’échiquier",
          "stepBadge": "Le bilan du deuxième croisement par l’échiquier",
          "paragraphText": "L’échiquier du croisement F1 par F1 comporte les quatre gamètes de chaque parent.\nSon bilan est : 9/16 de [RV], 3/16 de [Rv], 3/16 de [rV] et 1/16 de [rv].",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p04_q6",
            "type": "mcq",
            "prompt": "Le bilan phénotypique obtenu par l’échiquier F1 par F1 est :",
            "options": [
              "Quatre phénotypes à 25 pour cent",
              "9/16 [RV], 3/16 [Rv], 3/16 [rV], 1/16 [rv]",
              "100 pour cent de [RV]",
              "1/2 de [RV] et 1/2 de [rv]"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le bilan donné par l’interprétation chromosomique du deuxième croisement dans la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p04_q1",
          "type": "mcq",
          "prompt": "La F1 issue du croisement des deux races pures de pois est :",
          "options": [
            "Double hétérozygote",
            "Double homozygote dominant",
            "Double homozygote récessif",
            "Homozygote pour un seul caractère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque parent apporte un allèle différent pour chaque caractère : la F1 est hétérozygote pour les deux couples d’allèles."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p04_q2",
          "type": "mcq",
          "prompt": "Combien de types de gamètes la F1 des pois produit-elle, et en quelles proportions ?",
          "options": [
            "Deux types à 50 pour cent",
            "Quatre types à 25 pour cent chacun",
            "Un seul type à 100 pour cent",
            "Seize types équiprobables"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation chromosomique de la leçon donne quatre gamètes à 25 pour cent chacun pour la F1."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p04_q3",
          "type": "mcq",
          "prompt": "Dans le test-cross, le parent double récessif produit :",
          "options": [
            "Quatre gamètes à 25 pour cent",
            "Deux gamètes à 50 pour cent",
            "Un seul type de gamète, à 100 pour cent",
            "Aucun gamète"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Étant homozygote pour les deux caractères, le parent récessif ne forme qu’un seul type de gamète, à 100 pour cent."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p04_q4",
          "type": "mcq",
          "prompt": "L’échiquier de croisement sert à :",
          "options": [
            "Compter les chromosomes d’une cellule",
            "Mesurer la distance génétique directement",
            "Classer les espèces",
            "Combiner les gamètes des deux parents pour prévoir la descendance"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon utilise l’échiquier pour combiner les gamètes et obtenir le bilan phénotypique des croisements."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p04_q5",
          "type": "mcq",
          "prompt": "En F1 des pois, tous les individus ont :",
          "options": [
            "Le même génotype double hétérozygote et le phénotype [RV]",
            "Quatre génotypes différents",
            "Le génotype du parent récessif",
            "Des gamètes déjà formés en quatre types visibles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La F1 est homogène : 100 pour cent d’individus [RV] issus de la fécondation entre les gamètes uniques des deux races pures."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p04_q6",
          "type": "mcq",
          "prompt": "Le bilan phénotypique obtenu par l’échiquier F1 par F1 est :",
          "options": [
            "Quatre phénotypes à 25 pour cent",
            "9/16 [RV], 3/16 [Rv], 3/16 [rV], 1/16 [rv]",
            "100 pour cent de [RV]",
            "1/2 de [RV] et 1/2 de [rv]"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le bilan donné par l’interprétation chromosomique du deuxième croisement dans la leçon."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05",
      "order": 5,
      "title": "La drosophile : deux caractères liés sur le même chromosome",
      "summary": "Montrer, par le test-cross de la drosophile, que les couples d’allèles n+/n et vg+/vg ne sont pas indépendants.",
      "conceptExplanation": "Chez la drosophile, on étudie le caractère « couleur du corps » (gris ou noir) et le caractère « longueur des ailes » (long ou vestigial).\nAu premier croisement, une drosophile sauvage à corps gris et aux ailes longues croisée avec une mutante à corps noir et aux ailes vestigiales donne une F1 entièrement à corps gris et aux ailes longues : les parents sont de race pure, et gris et long sont dominants, noir et vestigial récessifs.\nLes symboles sont : gris n+, noir n (couple n+/n) ; long vg+, vestigial vg (couple vg+/vg).\nAu deuxième croisement, test-cross d’une femelle F1 avec un mâle noir vestigial, on dénombre 421 drosophiles grises aux ailes longues, 78 grises vestigiales, 79 noires aux ailes longues et 422 noires vestigiales, sur 1000.\nCaractère par caractère, la ségrégation est bien de 1/2 et 1/2, comme attendu en test-cross.\nMais sous l’hypothèse d’indépendance, on attendrait 250 individus par phénotype ; les effectifs observés en sont statistiquement différents, avec deux phénotypes parentaux très majoritaires.\nLes couples d’allèles n+/n et vg+/vg ne sont donc pas indépendants : ils sont liés, c’est-à-dire portés par le même chromosome.",
      "keyRule": "En test-cross, des phénotypes parentaux largement majoritaires révèlent des gènes liés sur le même chromosome.",
      "formulas": [],
      "workedExample": {
        "title": "Le test d’indépendance qui échoue chez la drosophile",
        "statement": "Dans le test-cross de la drosophile (421 ; 78 ; 79 ; 422 sur 1000), montre que l’hypothèse d’indépendance doit être rejetée.",
        "methodSteps": [
          "Si les gènes étaient indépendants, le test-cross donnerait quatre phénotypes équiprobables, soit 250 individus attendus par phénotype.",
          "Les phénotypes parentaux [n+ vg+] et [n vg] comptent 421 et 422 individus, très au-dessus de 250.",
          "Les phénotypes nouveaux [n+ vg] et [n vg+] ne comptent que 78 et 79 individus, très au-dessous de 250.",
          "Les effectifs observés sont statistiquement différents des attendus : les couples d’allèles sont liés."
        ],
        "conclusion": "L’écart massif entre effectifs observés et attendus prouve la liaison des deux gènes chez la drosophile."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les caractères étudiés chez la drosophile",
          "stepTheme": "Les caractères étudiés chez la drosophile",
          "stepBadge": "Les caractères étudiés chez la drosophile",
          "paragraphText": "Les caractères étudiés sont la couleur du corps, gris ou noir, et la longueur des ailes, long ou vestigial.\nLe premier croisement oppose une souche sauvage grise aux ailes longues à une souche mutante noire aux ailes vestigiales.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q1",
            "type": "mcq",
            "prompt": "Chez la drosophile, les deux caractères étudiés sont :",
            "options": [
              "La couleur du corps et la longueur des ailes",
              "La couleur des yeux et la forme des ailes",
              "La taille du corps et la couleur des ailes",
              "La couleur des graines et leur aspect"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après l’analyse de la leçon, les caractères sont la couleur du corps (gris, noir) et la longueur des ailes (long, vestigial)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La F1 de la drosophile",
          "stepTheme": "La F1 de la drosophile",
          "stepBadge": "La F1 de la drosophile",
          "paragraphText": "Toutes les drosophiles de la F1 ont un corps gris et des ailes longues.\nLes drosophiles croisées sont donc de race pure, et les phénotypes gris et long sont dominants.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q2",
            "type": "mcq",
            "prompt": "La F1 du premier croisement de drosophiles est :",
            "options": [
              "Noire aux ailes vestigiales",
              "Entièrement grise aux ailes longues",
              "Moitié grise, moitié noire",
              "Grise aux ailes vestigiales"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les résultats du premier croisement donnent une F1 entièrement à corps gris et aux ailes longues."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les symboles chez la drosophile",
          "stepTheme": "Les symboles chez la drosophile",
          "stepBadge": "Les symboles chez la drosophile",
          "paragraphText": "Pour la couleur du corps : gris n+ et noir n, formant le couple n+/n.\nPour la longueur des ailes : long vg+ et vestigial vg, formant le couple vg+/vg ; l’allèle sauvage dominant porte le signe + en exposant.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q3",
            "type": "mcq",
            "prompt": "Le couple d’allèles de la longueur des ailes est :",
            "options": [
              "R/r",
              "V/v",
              "vg+/vg",
              "n+/n"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon choisit vg pour vestigial et vg+ pour long : le couple est vg+/vg ; n+/n concerne la couleur du corps."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les phénotypes parentaux majoritaires",
          "stepTheme": "Les phénotypes parentaux majoritaires",
          "stepBadge": "Les phénotypes parentaux majoritaires",
          "paragraphText": "Dans le test-cross, les phénotypes parentaux [n+ vg+] et [n vg] comptent 421 et 422 individus.\nLes phénotypes recombinés [n+ vg] et [n vg+] ne comptent que 78 et 79 individus.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q4",
            "type": "mcq",
            "prompt": "Dans le test-cross de la drosophile, les effectifs des phénotypes parentaux sont :",
            "options": [
              "78 et 79",
              "250 et 250",
              "500 et 500",
              "421 et 422"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les résultats dénombrent 421 drosophiles grises longues et 422 noires vestigiales, contre 78 et 79 pour les phénotypes nouveaux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Comparer observés et attendus",
          "stepTheme": "Comparer observés et attendus",
          "stepBadge": "Comparer observés et attendus",
          "paragraphText": "Méthode du test d’indépendance : on compare les effectifs observés aux effectifs théoriques attendus si les gènes étaient indépendants.\nIci, l’attendu serait de 250 par phénotype pour 1000 descendants, très loin des 421, 78, 79 et 422 observés.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q5",
            "type": "mcq",
            "prompt": "Sous l’hypothèse d’indépendance, l’effectif théorique attendu de chaque phénotype du test-cross serait :",
            "options": [
              "250 sur 1000",
              "421 sur 1000",
              "500 sur 1000",
              "100 sur 1000"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Quatre phénotypes équiprobables sur 1000 descendants donnent 250 individus attendus par phénotype."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La ségrégation par caractère ne suffit pas",
          "stepTheme": "La ségrégation par caractère ne suffit pas",
          "stepBadge": "La ségrégation par caractère ne suffit pas",
          "paragraphText": "Piège : conclure à l’indépendance parce que chaque caractère, pris seul, ségrége en 1/2 et 1/2 dans le test-cross.\nC’est l’étude simultanée des deux caractères qui révèle la liaison : les combinaisons parentales sont beaucoup trop nombreuses pour des gènes indépendants.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q6",
            "type": "mcq",
            "prompt": "La conclusion correcte du test-cross de la drosophile est :",
            "options": [
              "Les couples d’allèles sont indépendants",
              "Les couples d’allèles sont liés, portés par le même chromosome",
              "Il n’y a pas de dominance",
              "Le croisement n’est pas un test-cross"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon conclut que les couples d’allèles n+/n et vg+/vg ne sont pas indépendants : ils sont liés, donc sur le même chromosome."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Position cis des allèles du double hétérozygote",
          "stepTheme": "Position cis des allèles du double hétérozygote",
          "stepBadge": "Position cis des allèles du double hétérozygote",
          "paragraphText": "L’effectif observé des doubles récessifs [n vg], 422, est supérieur à l’effectif théorique attendu, 250 : le gamète correspondant est donc d’origine parentale.\nOn en déduit que le double hétérozygote a ses allèles en position cis : les deux dominants sur un chromosome, les deux récessifs sur l’autre.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q7",
            "type": "mcq",
            "prompt": "Le double hétérozygote de la drosophile a ses allèles en position :",
            "options": [
              "Trans, dominants séparés",
              "Au hasard selon les individus",
              "Cis, car le gamète double récessif est d’origine parentale",
              "Sur des chromosomes différents"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D’après la leçon, l’excès du phénotype [n vg] montre que son gamète est parental, donc les allèles sont en position cis chez le double hétérozygote."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q1",
          "type": "mcq",
          "prompt": "Chez la drosophile, les deux caractères étudiés sont :",
          "options": [
            "La couleur du corps et la longueur des ailes",
            "La couleur des yeux et la forme des ailes",
            "La taille du corps et la couleur des ailes",
            "La couleur des graines et leur aspect"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après l’analyse de la leçon, les caractères sont la couleur du corps (gris, noir) et la longueur des ailes (long, vestigial)."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q2",
          "type": "mcq",
          "prompt": "La F1 du premier croisement de drosophiles est :",
          "options": [
            "Noire aux ailes vestigiales",
            "Entièrement grise aux ailes longues",
            "Moitié grise, moitié noire",
            "Grise aux ailes vestigiales"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les résultats du premier croisement donnent une F1 entièrement à corps gris et aux ailes longues."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q3",
          "type": "mcq",
          "prompt": "Le couple d’allèles de la longueur des ailes est :",
          "options": [
            "R/r",
            "V/v",
            "vg+/vg",
            "n+/n"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon choisit vg pour vestigial et vg+ pour long : le couple est vg+/vg ; n+/n concerne la couleur du corps."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q4",
          "type": "mcq",
          "prompt": "Dans le test-cross de la drosophile, les effectifs des phénotypes parentaux sont :",
          "options": [
            "78 et 79",
            "250 et 250",
            "500 et 500",
            "421 et 422"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les résultats dénombrent 421 drosophiles grises longues et 422 noires vestigiales, contre 78 et 79 pour les phénotypes nouveaux."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q5",
          "type": "mcq",
          "prompt": "Sous l’hypothèse d’indépendance, l’effectif théorique attendu de chaque phénotype du test-cross serait :",
          "options": [
            "250 sur 1000",
            "421 sur 1000",
            "500 sur 1000",
            "100 sur 1000"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Quatre phénotypes équiprobables sur 1000 descendants donnent 250 individus attendus par phénotype."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q6",
          "type": "mcq",
          "prompt": "La conclusion correcte du test-cross de la drosophile est :",
          "options": [
            "Les couples d’allèles sont indépendants",
            "Les couples d’allèles sont liés, portés par le même chromosome",
            "Il n’y a pas de dominance",
            "Le croisement n’est pas un test-cross"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon conclut que les couples d’allèles n+/n et vg+/vg ne sont pas indépendants : ils sont liés, donc sur le même chromosome."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p05_q7",
          "type": "mcq",
          "prompt": "Le double hétérozygote de la drosophile a ses allèles en position :",
          "options": [
            "Trans, dominants séparés",
            "Au hasard selon les individus",
            "Cis, car le gamète double récessif est d’origine parentale",
            "Sur des chromosomes différents"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D’après la leçon, l’excès du phénotype [n vg] montre que son gamète est parental, donc les allèles sont en position cis chez le double hétérozygote."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l12_transmission_deux_caracteres_p06",
      "order": 6,
      "title": "La distance génétique et la carte factorielle",
      "summary": "Calculer la distance entre les deux gènes liés de la drosophile à partir des phénotypes recombinés du test-cross.",
      "conceptExplanation": "Les deux couples d’allèles étant liés, on détermine la distance qui les sépare, appelée distance génétique, exprimée en unité de recombinaison (UR) ou en centimorgan (cM).\nLe croisement effectué étant un test-cross, les phénotypes de la descendance reflètent en qualité et en quantité les gamètes produits par l’individu double hétérozygote.\nLe crossing-over étant un événement rare, les gamètes parentaux sont majoritaires (421 et 422 descendants) et les gamètes recombinés minoritaires (78 et 79 descendants).\nLa distance génétique est le pourcentage des gamètes recombinés ; dans un test-cross, elle se calcule par le pourcentage des phénotypes minoritaires.\nPour la drosophile, ce pourcentage vaut 15,70 pour cent : la distance entre n+/n et vg+/vg est de 15,70 UR.\nLa carte factorielle est la représentation linéaire de cette distance génétique sur le chromosome, selon une échelle choisie.",
      "keyRule": "Distance génétique égale pourcentage de recombinés : ici 157 recombinés sur 1000, soit 15,70 UR entre les deux gènes.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer la distance génétique chez la drosophile",
        "statement": "À partir des effectifs du test-cross (421 ; 78 ; 79 ; 422), calcule la distance génétique entre les couples n+/n et vg+/vg.",
        "methodSteps": [
          "On repère les phénotypes minoritaires, issus de gamètes recombinés : 78 [n+ vg] et 79 [n vg+].",
          "On additionne ces recombinés : 78 plus 79 égale 157.",
          "On rapporte au total des descendants : 157 sur 1000, soit 15,70 pour cent.",
          "La distance génétique est donc de 15,70 UR (ou centimorgans)."
        ],
        "conclusion": "Les deux gènes sont distants de 15,70 unités de recombinaison sur leur chromosome."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La distance génétique",
          "stepTheme": "La distance génétique",
          "stepBadge": "La distance génétique",
          "paragraphText": "• Distance génétique : distance qui sépare deux couples d’allèles liés sur un chromosome.\nElle s’exprime en unité de recombinaison (UR) ou en centimorgan (cM).",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p06_q1",
            "type": "mcq",
            "prompt": "La distance génétique entre deux gènes liés s’exprime en :",
            "options": [
              "Unité de recombinaison (UR) ou centimorgan",
              "Grammes par tonne",
              "Pour cent de parents",
              "Nombre de chromosomes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon définit la distance génétique, exprimée en unité de recombinaison (UR) ou en centimorgan (cM)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Gamètes parentaux et gamètes recombinés",
          "stepTheme": "Gamètes parentaux et gamètes recombinés",
          "stepBadge": "Gamètes parentaux et gamètes recombinés",
          "paragraphText": "Les gamètes parentaux reproduisent les combinaisons d’allèles des parents ; ils sont majoritaires car le crossing-over est un événement rare.\nLes gamètes recombinés, issus d’un crossing-over, portent des combinaisons nouvelles et sont minoritaires.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p06_q2",
            "type": "mcq",
            "prompt": "Les gamètes recombinés sont minoritaires parce que :",
            "options": [
              "La fécondation est rare",
              "Le crossing-over est un événement rare",
              "Les parents sont de race pure",
              "Le test-cross les élimine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D’après le texte, le crossing-over étant un événement rare, les gamètes recombinés sont minoritaires dans la descendance du test-cross."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calculer la distance par les phénotypes minoritaires",
          "stepTheme": "Calculer la distance par les phénotypes minoritaires",
          "stepBadge": "Calculer la distance par les phénotypes minoritaires",
          "paragraphText": "Méthode : dans un test-cross, la distance génétique est le pourcentage des gamètes recombinés, donc le pourcentage des phénotypes minoritaires.\nOn additionne les effectifs des deux phénotypes recombinés et on les rapporte à l’effectif total.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p06_q3",
            "type": "mcq",
            "prompt": "Le pourcentage de recombinés du test-cross de la drosophile vaut :",
            "options": [
              "84,30 pour cent",
              "50 pour cent",
              "15,70 pour cent",
              "7,85 pour cent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le calcul de la leçon additionne 78 et 79 recombinés sur 1000 descendants, soit 15,70 pour cent de recombinaison."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La carte factorielle",
          "stepTheme": "La carte factorielle",
          "stepBadge": "La carte factorielle",
          "paragraphText": "• Carte factorielle : représentation linéaire de la distance génétique séparant deux couples d’allèles liés sur les chromosomes, selon une échelle choisie.\nPour la drosophile, les deux loci sont placés à 15,70 UR l’un de l’autre.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p06_q4",
            "type": "mcq",
            "prompt": "La carte factorielle représente :",
            "options": [
              "Les effectifs observés d’un croisement",
              "La forme du chromosome au microscope",
              "La répartition des espèces",
              "La distance génétique entre des gènes liés, de façon linéaire et à une échelle choisie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon définit la carte factorielle comme la représentation linéaire de la distance génétique entre couples d’allèles liés."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas calculer la distance avec les parentaux",
          "stepTheme": "Ne pas calculer la distance avec les parentaux",
          "stepBadge": "Ne pas calculer la distance avec les parentaux",
          "paragraphText": "Piège : diviser les phénotypes parentaux (421 et 422) par le total pour obtenir la distance.\nLa distance génétique est le pourcentage des recombinés, donc des minoritaires : 15,70 pour cent, et non 84,30 pour cent.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p06_q5",
            "type": "mcq",
            "prompt": "La valeur 84,30 pour cent correspond, dans ce test-cross, au pourcentage :",
            "options": [
              "Des gamètes parentaux",
              "Des gamètes recombinés",
              "Des homozygotes",
              "Des femelles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les parentaux totalisent 421 plus 422, soit 843 sur 1000 ou 84,30 pour cent ; la distance génétique utilise les recombinés, 15,70 pour cent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le bilan chiffré du test-cross en pourcentages",
          "stepTheme": "Le bilan chiffré du test-cross en pourcentages",
          "stepBadge": "Le bilan chiffré du test-cross en pourcentages",
          "paragraphText": "L’interprétation chromosomique donne le bilan suivant : 42,1 pour cent de [n+ vg+], 42,2 pour cent de [n vg], 7,8 pour cent de [n+ vg] et 7,9 pour cent de [n vg+].\nLa somme des deux phénotypes recombinés, 7,8 et 7,9, redonne les 15,70 pour cent de recombinaison.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p06_q6",
            "type": "mcq",
            "prompt": "Dans le bilan du test-cross, les phénotypes recombinés représentent :",
            "options": [
              "42,1 et 42,2 pour cent",
              "7,8 et 7,9 pour cent",
              "50 et 50 pour cent",
              "25 pour cent chacun"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le bilan de la leçon donne 7,8 pour cent de [n+ vg] et 7,9 pour cent de [n vg+] pour les recombinés."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p06_q1",
          "type": "mcq",
          "prompt": "La distance génétique entre deux gènes liés s’exprime en :",
          "options": [
            "Unité de recombinaison (UR) ou centimorgan",
            "Grammes par tonne",
            "Pour cent de parents",
            "Nombre de chromosomes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon définit la distance génétique, exprimée en unité de recombinaison (UR) ou en centimorgan (cM)."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p06_q2",
          "type": "mcq",
          "prompt": "Les gamètes recombinés sont minoritaires parce que :",
          "options": [
            "La fécondation est rare",
            "Le crossing-over est un événement rare",
            "Les parents sont de race pure",
            "Le test-cross les élimine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D’après le texte, le crossing-over étant un événement rare, les gamètes recombinés sont minoritaires dans la descendance du test-cross."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p06_q3",
          "type": "mcq",
          "prompt": "Le pourcentage de recombinés du test-cross de la drosophile vaut :",
          "options": [
            "84,30 pour cent",
            "50 pour cent",
            "15,70 pour cent",
            "7,85 pour cent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le calcul de la leçon additionne 78 et 79 recombinés sur 1000 descendants, soit 15,70 pour cent de recombinaison."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p06_q4",
          "type": "mcq",
          "prompt": "La carte factorielle représente :",
          "options": [
            "Les effectifs observés d’un croisement",
            "La forme du chromosome au microscope",
            "La répartition des espèces",
            "La distance génétique entre des gènes liés, de façon linéaire et à une échelle choisie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon définit la carte factorielle comme la représentation linéaire de la distance génétique entre couples d’allèles liés."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p06_q5",
          "type": "mcq",
          "prompt": "La valeur 84,30 pour cent correspond, dans ce test-cross, au pourcentage :",
          "options": [
            "Des gamètes parentaux",
            "Des gamètes recombinés",
            "Des homozygotes",
            "Des femelles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les parentaux totalisent 421 plus 422, soit 843 sur 1000 ou 84,30 pour cent ; la distance génétique utilise les recombinés, 15,70 pour cent."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p06_q6",
          "type": "mcq",
          "prompt": "Dans le bilan du test-cross, les phénotypes recombinés représentent :",
          "options": [
            "42,1 et 42,2 pour cent",
            "7,8 et 7,9 pour cent",
            "50 et 50 pour cent",
            "25 pour cent chacun"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le bilan de la leçon donne 7,8 pour cent de [n+ vg] et 7,9 pour cent de [n vg+] pour les recombinés."
        }
      ]
    },
    {
      "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07",
      "order": 7,
      "title": "Le troisième croisement de drosophiles : F1 croisée avec F1",
      "summary": "Retrouver la même distance génétique de 15,7 pour cent dans un croisement qui n’est pas un test-cross.",
      "conceptExplanation": "Au troisième croisement, on croise une femelle de la F1 avec un mâle de la F1, tous deux doubles hétérozygotes à corps gris et aux ailes longues.\nOn obtient 719 drosophiles grises aux ailes longues, 44 grises vestigiales, 46 noires aux ailes longues et 216 noires vestigiales, sur 1025 individus.\nCaractère par caractère, la ségrégation est de 3/4 et 1/4, mais l’étude simultanée montre que les effectifs observés sont statistiquement différents des effectifs attendus sous l’hypothèse d’indépendance (576,56 ; 192,18 ; 192,18 ; 64,06) : les couples d’allèles sont liés, et les deux parents ont leurs allèles en position cis.\nCe croisement n’étant pas un test-cross, on calcule la distance en posant P, la fréquence des gamètes recombinés, la fréquence des gamètes parentaux étant 1 moins P ; la leçon tient compte du fait qu’il n’y a pas de crossing-over chez le mâle de la drosophile.\nEn égalant la fréquence observée des doubles récessifs [n vg] (216 sur 1025) à leur fréquence théorique, on obtient P égal à 0,157, soit une distance génétique de 15,7 pour cent de recombinaison : la même que celle du test-cross.",
      "keyRule": "Même sans test-cross, la fréquence des doubles récessifs permet de retrouver P, donc la distance de 15,7 UR.",
      "formulas": [],
      "workedExample": {
        "title": "Retrouver la distance génétique sans test-cross",
        "statement": "Dans le croisement F1 par F1 de drosophiles, explique comment la leçon obtient une distance génétique de 15,7 pour cent.",
        "methodSteps": [
          "On pose P la fréquence des gamètes recombinés ; celle des gamètes parentaux est 1 moins P.",
          "Le mâle de la drosophile ne réalise pas de crossing-over : ses gamètes parentaux valent chacun 50 pour cent du total utile au calcul.",
          "On égale la fréquence observée des [n vg], 216 sur 1025, à leur fréquence théorique exprimée avec P.",
          "La résolution donne P égal à 0,157, soit une distance de 15,7 pour cent de recombinaison."
        ],
        "conclusion": "Le troisième croisement confirme la distance de 15,70 UR trouvée par le test-cross."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les effectifs du troisième croisement",
          "stepTheme": "Les effectifs du troisième croisement",
          "stepBadge": "Les effectifs du troisième croisement",
          "paragraphText": "Le croisement F1 par F1 donne 719 drosophiles grises longues, 44 grises vestigiales, 46 noires longues et 216 noires vestigiales.\nLe total est de 1025 individus, et la descendance est hétérogène.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q1",
            "type": "mcq",
            "prompt": "Le phénotype double récessif [n vg] compte, au troisième croisement :",
            "options": [
              "216 individus sur 1025",
              "44 individus sur 1025",
              "719 individus sur 1025",
              "46 individus sur 1025"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D’après les résultats, on obtient 216 drosophiles à corps noir et aux ailes vestigiales sur 1025."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des effectifs différents de l’indépendance",
          "stepTheme": "Des effectifs différents de l’indépendance",
          "stepBadge": "Des effectifs différents de l’indépendance",
          "paragraphText": "Sous l’hypothèse d’indépendance, les effectifs théoriques attendus seraient 576,56 ; 192,18 ; 192,18 et 64,06.\nLes effectifs observés en sont statistiquement différents : les couples d’allèles sont liés.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q2",
            "type": "mcq",
            "prompt": "Au troisième croisement, le test de l’hypothèse d’indépendance montre que :",
            "options": [
              "Les effectifs coïncident, les gènes sont indépendants",
              "Les effectifs observés diffèrent des attendus, les gènes sont liés",
              "Le croisement est un test-cross",
              "Les parents sont de race pure"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon conclut que les effectifs théoriques attendus sont statistiquement différents des observés : les couples d’allèles sont liés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La fréquence P des gamètes recombinés",
          "stepTheme": "La fréquence P des gamètes recombinés",
          "stepBadge": "La fréquence P des gamètes recombinés",
          "paragraphText": "On pose P la fréquence des gamètes recombinés produits par le double hétérozygote.\nLa fréquence des gamètes parentaux est alors 1 moins P, car la somme des deux fréquences vaut 1.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q3",
            "type": "mcq",
            "prompt": "Si P est la fréquence des gamètes recombinés, celle des gamètes parentaux est :",
            "options": [
              "P aussi",
              "2 fois P",
              "1 moins P",
              "100 moins P en effectifs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte pose que la fréquence des gamètes recombinés plus celle des gamètes parentaux égale 1, donc les parentaux valent 1 moins P."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Pas de crossing-over chez le mâle drosophile",
          "stepTheme": "Pas de crossing-over chez le mâle drosophile",
          "stepBadge": "Pas de crossing-over chez le mâle drosophile",
          "paragraphText": "La leçon le signale dans le schéma du croisement : il n’y a pas de crossing-over chez le mâle de la drosophile.\nLe mâle F1 ne produit donc que des gamètes parentaux, à 50 pour cent chacun.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q4",
            "type": "mcq",
            "prompt": "Chez le mâle de la drosophile, le crossing-over :",
            "options": [
              "Est plus fréquent que chez la femelle",
              "Produit 15,7 pour cent de recombinés",
              "Double la distance génétique",
              "N’a pas lieu"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon précise explicitement : pas de crossing-over chez le mâle de la drosophile."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Égaler fréquence observée et fréquence théorique",
          "stepTheme": "Égaler fréquence observée et fréquence théorique",
          "stepBadge": "Égaler fréquence observée et fréquence théorique",
          "paragraphText": "Méthode : pour calculer la distance, on pose que la fréquence observée des doubles récessifs [n vg] égale leur fréquence théorique, exprimée à l’aide de P.\nLa fréquence observée vaut 216 divisé par 1025.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q5",
            "type": "mcq",
            "prompt": "La valeur de P obtenue par ce calcul est :",
            "options": [
              "0,157",
              "0,5",
              "0,25",
              "0,843"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La résolution de la leçon donne P égal à 0,157, soit 15,7 pour cent de recombinaison."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La même distance par deux croisements différents",
          "stepTheme": "La même distance par deux croisements différents",
          "stepBadge": "La même distance par deux croisements différents",
          "paragraphText": "Piège : croire que la distance génétique dépend du croisement utilisé pour la mesurer.\nLe test-cross donne 15,70 UR et le croisement F1 par F1 donne 15,7 pour cent : c’est la même distance entre les deux gènes, propriété du chromosome.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q6",
            "type": "mcq",
            "prompt": "La distance génétique obtenue au troisième croisement est :",
            "options": [
              "Différente de celle du test-cross",
              "La même qu’au test-cross : environ 15,7 unités de recombinaison",
              "De 50 UR car les parents sont hybrides",
              "Impossible à déterminer sans test-cross"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux calculs aboutissent à environ 15,7 pour cent de recombinaison, la distance entre n+/n et vg+/vg."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "La conclusion générale de la leçon",
          "stepTheme": "La conclusion générale de la leçon",
          "stepBadge": "La conclusion générale de la leçon",
          "paragraphText": "La conclusion générale rassemble les deux cas étudiés : pois à gènes indépendants et drosophile à gènes liés.\nLa transmission simultanée de deux caractères héréditaires peut donc se faire par un même chromosome ou par deux chromosomes différents.",
          "exercise": {
            "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q7",
            "type": "mcq",
            "prompt": "Selon la conclusion générale, la transmission de deux caractères peut se faire :",
            "options": [
              "Uniquement par le même chromosome",
              "Uniquement par deux chromosomes différents",
              "Par un même chromosome ou par deux chromosomes différents",
              "Sans aucun chromosome"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la conclusion générale de la leçon, après l’étude des pois (indépendance) et de la drosophile (liaison)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q1",
          "type": "mcq",
          "prompt": "Le phénotype double récessif [n vg] compte, au troisième croisement :",
          "options": [
            "216 individus sur 1025",
            "44 individus sur 1025",
            "719 individus sur 1025",
            "46 individus sur 1025"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D’après les résultats, on obtient 216 drosophiles à corps noir et aux ailes vestigiales sur 1025."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q2",
          "type": "mcq",
          "prompt": "Au troisième croisement, le test de l’hypothèse d’indépendance montre que :",
          "options": [
            "Les effectifs coïncident, les gènes sont indépendants",
            "Les effectifs observés diffèrent des attendus, les gènes sont liés",
            "Le croisement est un test-cross",
            "Les parents sont de race pure"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon conclut que les effectifs théoriques attendus sont statistiquement différents des observés : les couples d’allèles sont liés."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q3",
          "type": "mcq",
          "prompt": "Si P est la fréquence des gamètes recombinés, celle des gamètes parentaux est :",
          "options": [
            "P aussi",
            "2 fois P",
            "1 moins P",
            "100 moins P en effectifs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte pose que la fréquence des gamètes recombinés plus celle des gamètes parentaux égale 1, donc les parentaux valent 1 moins P."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q4",
          "type": "mcq",
          "prompt": "Chez le mâle de la drosophile, le crossing-over :",
          "options": [
            "Est plus fréquent que chez la femelle",
            "Produit 15,7 pour cent de recombinés",
            "Double la distance génétique",
            "N’a pas lieu"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon précise explicitement : pas de crossing-over chez le mâle de la drosophile."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q5",
          "type": "mcq",
          "prompt": "La valeur de P obtenue par ce calcul est :",
          "options": [
            "0,157",
            "0,5",
            "0,25",
            "0,843"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La résolution de la leçon donne P égal à 0,157, soit 15,7 pour cent de recombinaison."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q6",
          "type": "mcq",
          "prompt": "La distance génétique obtenue au troisième croisement est :",
          "options": [
            "Différente de celle du test-cross",
            "La même qu’au test-cross : environ 15,7 unités de recombinaison",
            "De 50 UR car les parents sont hybrides",
            "Impossible à déterminer sans test-cross"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux calculs aboutissent à environ 15,7 pour cent de recombinaison, la distance entre n+/n et vg+/vg."
        },
        {
          "id": "terminale_d_svt_l12_transmission_deux_caracteres_p07_q7",
          "type": "mcq",
          "prompt": "Selon la conclusion générale, la transmission de deux caractères peut se faire :",
          "options": [
            "Uniquement par le même chromosome",
            "Uniquement par deux chromosomes différents",
            "Par un même chromosome ou par deux chromosomes différents",
            "Sans aucun chromosome"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la conclusion générale de la leçon, après l’étude des pois (indépendance) et de la drosophile (liaison)."
        }
      ]
    }
  ]
};
