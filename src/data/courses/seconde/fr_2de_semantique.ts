import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 4 PL 2nde La sémantique 1.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const FR_2DE_PL_L03_SEMANTIQUE: CurriculumChapter = {
  "id": "seconde_a_francais_pl_l03_semantique",
  "subjectId": "francais",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 9,
  "title": "Perfectionnement de la langue, leçon 3 : La sémantique, les mots et leurs sens",
  "summary": "Monosémie et polysémie, homonymes, sens lexical et contextuel, sens propre et figuré, dénotation et connotation.",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "4 PL 2nde La sémantique 1.pdf",
  "points": [
    {
      "id": "seconde_a_francais_pl_l03_semantique_p01",
      "order": 1,
      "title": "Monosémie et polysémie",
      "summary": "Un mot, un sens ; un mot, plusieurs sens.",
      "conceptExplanation": "La sémantique est l'étude du sens des mots.\n\n1. La monosémie : un mot monosémique n'a qu'un seul sens. Ces mots sont rares ; ils appartiennent surtout au vocabulaire scientifique ou technique : kilomètre, encéphalogramme, carburateur, photosynthèse.\n\n2. La polysémie : un mot polysémique a plusieurs sens, liés entre eux. C'est le cas de la plupart des mots courants.\nExemple : « Il aime le théâtre (le genre littéraire), c'est pourquoi il se rend souvent au théâtre (le bâtiment) du Palais de la culture de Treichville. »\nAutres exemples : « la tête » (partie du corps, chef d'un groupe, début d'une liste) ; « la feuille » (d'un arbre, de papier).\n\nC'est le contexte (la phrase, la situation) qui permet de choisir le bon sens d'un mot polysémique. Le dictionnaire numérote ces différents sens dans un même article.",
      "keyRule": "Monosémie : un seul sens (mots techniques : kilomètre). Polysémie : plusieurs sens liés (théâtre, tête, feuille). Le contexte indique le bon sens.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir le bon sens",
        "statement": "« Le capitaine est à la tête de son équipe. » Quel sens a le mot « tête » ?",
        "methodSteps": [
          "On ne parle pas d'une partie du corps.",
          "« À la tête de » une équipe = à la direction."
        ],
        "conclusion": "Ici, « tête » signifie « direction, premier rang »."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La sémantique",
          "stepTheme": "La sémantique",
          "stepBadge": "La sémantique",
          "paragraphText": "La sémantique est l'étude du sens des mots : leurs significations et leurs emplois.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p01_q1",
            "type": "mcq",
            "prompt": "Qu'étudie la sémantique ?",
            "options": [
              "La prononciation des sons",
              "L'orthographe des accords",
              "Le sens des mots",
              "La conjugaison des verbes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sémantique vient du grec sêma, le signe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La monosémie",
          "stepTheme": "La monosémie",
          "stepBadge": "La monosémie",
          "paragraphText": "Un mot monosémique n'a qu'un seul sens.\nCes mots sont rares et souvent techniques ou scientifiques.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p01_q2",
            "type": "mcq",
            "prompt": "Lequel de ces mots est monosémique ?",
            "options": [
              "Kilomètre",
              "Tête",
              "Feuille",
              "Théâtre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Kilomètre n'a qu'un sens : une mesure de longueur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La polysémie",
          "stepTheme": "La polysémie",
          "stepBadge": "La polysémie",
          "paragraphText": "Un mot polysémique a plusieurs sens, liés entre eux.\nLa plupart des mots courants sont polysémiques.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p01_q3",
            "type": "mcq",
            "prompt": "Que signifie « polysémie » ?",
            "options": [
              "Le fait qu'un mot ait un seul sens",
              "Le fait que deux mots aient le même sens",
              "Le fait qu'un mot ait plusieurs orthographes",
              "Le fait qu'un mot ait plusieurs sens"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Poly = plusieurs ; sêma = sens."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le théâtre",
          "stepTheme": "Le théâtre",
          "stepBadge": "Le théâtre",
          "paragraphText": "« Il aime le théâtre (genre littéraire), c'est pourquoi il va souvent au théâtre (bâtiment) de Treichville. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p01_q4",
            "type": "mcq",
            "prompt": "Dans « il va souvent au théâtre de Treichville », quel sens a « théâtre » ?",
            "options": [
              "Le genre littéraire",
              "Le bâtiment où l'on joue des pièces",
              "Un comédien célèbre",
              "Une pièce écrite par Molière"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On se rend dans un lieu : c'est le bâtiment."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La tête",
          "stepTheme": "La tête",
          "stepBadge": "La tête",
          "paragraphText": "« Tête » a plusieurs sens :\n• partie du corps ;\n• direction (« être à la tête d'une équipe ») ;\n• premier rang (« la tête du classement »).",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p01_q5",
            "type": "mcq",
            "prompt": "Dans « Notre lycée est en tête du classement », que signifie « tête » ?",
            "options": [
              "Une partie du corps",
              "La première place",
              "Le directeur du lycée",
              "Le toit du bâtiment"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Être en tête = être premier."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le rôle du contexte",
          "stepTheme": "Le rôle du contexte",
          "stepBadge": "Le rôle du contexte",
          "paragraphText": "Pour un mot polysémique, c'est le contexte (la phrase, la situation) qui indique le bon sens.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p01_q6",
            "type": "mcq",
            "prompt": "Qu'est-ce qui permet de choisir le bon sens d'un mot polysémique ?",
            "options": [
              "La longueur du mot",
              "La première lettre du mot",
              "Le nombre de syllabes",
              "Le contexte de la phrase"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le sens dépend de l'emploi du mot."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Les mots techniques",
          "stepTheme": "Les mots techniques",
          "stepBadge": "Les mots techniques",
          "paragraphText": "Les mots monosémiques appartiennent surtout aux sciences et aux techniques : encéphalogramme, carburateur, photosynthèse.\nLeur sens précis évite les confusions.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p01_q7",
            "type": "mcq",
            "prompt": "Pourquoi les mots scientifiques sont-ils souvent monosémiques ?",
            "options": [
              "Pour éviter toute confusion de sens",
              "Parce qu'ils sont très anciens",
              "Parce qu'ils sont toujours très courts",
              "Pour être plus faciles à prononcer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La science a besoin d'un vocabulaire précis."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l03_semantique_p01_q1",
          "type": "mcq",
          "prompt": "Qu'étudie la sémantique ?",
          "options": [
            "La prononciation des sons",
            "L'orthographe des accords",
            "Le sens des mots",
            "La conjugaison des verbes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sémantique vient du grec sêma, le signe."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p01_q2",
          "type": "mcq",
          "prompt": "Lequel de ces mots est monosémique ?",
          "options": [
            "Kilomètre",
            "Tête",
            "Feuille",
            "Théâtre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Kilomètre n'a qu'un sens : une mesure de longueur."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p01_q3",
          "type": "mcq",
          "prompt": "Que signifie « polysémie » ?",
          "options": [
            "Le fait qu'un mot ait un seul sens",
            "Le fait que deux mots aient le même sens",
            "Le fait qu'un mot ait plusieurs orthographes",
            "Le fait qu'un mot ait plusieurs sens"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Poly = plusieurs ; sêma = sens."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p01_q4",
          "type": "mcq",
          "prompt": "Dans « il va souvent au théâtre de Treichville », quel sens a « théâtre » ?",
          "options": [
            "Le genre littéraire",
            "Le bâtiment où l'on joue des pièces",
            "Un comédien célèbre",
            "Une pièce écrite par Molière"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On se rend dans un lieu : c'est le bâtiment."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p01_q5",
          "type": "mcq",
          "prompt": "Dans « Notre lycée est en tête du classement », que signifie « tête » ?",
          "options": [
            "Une partie du corps",
            "La première place",
            "Le directeur du lycée",
            "Le toit du bâtiment"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Être en tête = être premier."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p01_q6",
          "type": "mcq",
          "prompt": "Qu'est-ce qui permet de choisir le bon sens d'un mot polysémique ?",
          "options": [
            "La longueur du mot",
            "La première lettre du mot",
            "Le nombre de syllabes",
            "Le contexte de la phrase"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le sens dépend de l'emploi du mot."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p01_q7",
          "type": "mcq",
          "prompt": "Pourquoi les mots scientifiques sont-ils souvent monosémiques ?",
          "options": [
            "Pour éviter toute confusion de sens",
            "Parce qu'ils sont très anciens",
            "Parce qu'ils sont toujours très courts",
            "Pour être plus faciles à prononcer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La science a besoin d'un vocabulaire précis."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l03_semantique_p02",
      "order": 2,
      "title": "Polysémie ou homonymie ?",
      "summary": "Un mot à plusieurs sens, ou deux mots différents ?",
      "conceptExplanation": "Il ne faut pas confondre la polysémie et l'homonymie.\n\n- Polysémie : un seul mot a plusieurs sens liés entre eux. Dans le dictionnaire, il a un seul article avec plusieurs sens numérotés. Exemple : « la feuille » d'un arbre, « la feuille » de papier (toutes deux minces et plates).\n\n- Homonymie : deux mots différents se prononcent de la même façon, mais leurs sens n'ont aucun lien (ils ont des origines différentes). Dans le dictionnaire, ils ont deux articles séparés.\n  • Homonymes homographes (même orthographe) : « une pêche » (le fruit) / « la pêche » (attraper des poissons) ; « un avocat » (le juriste) / « un avocat » (le fruit).\n  • Homonymes homophones (orthographe différente) : « vert, verre, ver, vers » ; « mer, mère, maire ».\n\nExemple ivoirien : « Un canari (l'oiseau) s'est noyé dans un canari (le récipient en terre cuite) déposé au bord du marigot. »\n\nAttention, certaines expressions donnent des sens figurés à un mot : « avoir la pêche » (être en forme) ; « flanquer une pêche » (donner un coup de poing).",
      "keyRule": "Polysémie : un mot, plusieurs sens liés (un article de dictionnaire). Homonymie : deux mots différents, même prononciation, sens sans lien (deux articles).",
      "formulas": [],
      "workedExample": {
        "title": "Les sens de « pêche »",
        "statement": "« Je n'ai pas eu la pêche durant la partie de pêche. » Explique les deux emplois.",
        "methodSteps": [
          "« Avoir la pêche » : expression familière, être en forme.",
          "« La partie de pêche » : l'activité qui consiste à attraper des poissons."
        ],
        "conclusion": "Je n'étais pas en forme pendant la sortie pour attraper des poissons."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les homonymes",
          "stepTheme": "Les homonymes",
          "stepBadge": "Les homonymes",
          "paragraphText": "Des homonymes sont des mots différents qui se prononcent de la même façon, mais dont les sens n'ont aucun lien.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p02_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que des homonymes ?",
            "options": [
              "Des mots qui ont exactement le même sens",
              "Des mots qui ont des sens contraires",
              "Des mots qui se prononcent pareil mais ont des sens sans lien",
              "Un seul mot qui a plusieurs sens liés"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Homo = même ; onoma = nom."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les homophones",
          "stepTheme": "Les homophones",
          "stepBadge": "Les homophones",
          "paragraphText": "Certains homonymes s'écrivent différemment : ce sont des homophones.\n« vert, verre, ver, vers » ; « mer, mère, maire ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p02_q2",
            "type": "mcq",
            "prompt": "Lequel de ces mots est un homophone de « mer » ?",
            "options": [
              "Mare",
              "Mur",
              "Miel",
              "Mère"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Mer, mère et maire se prononcent de la même façon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La pêche",
          "stepTheme": "La pêche",
          "stepBadge": "La pêche",
          "paragraphText": "« Une pêche » (le fruit) et « la pêche » (attraper des poissons) s'écrivent pareil mais n'ont aucun lien de sens : ce sont des homonymes.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p02_q3",
            "type": "mcq",
            "prompt": "« Il mange une pêche après la pêche. » Que désignent les deux mots « pêche » ?",
            "options": [
              "Deux fois l'action d'attraper des poissons",
              "Deux fois le même fruit",
              "Un fruit, puis l'action d'attraper des poissons",
              "Une couleur, puis un coup de poing"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Fruit, puis activité : deux mots homonymes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les expressions",
          "stepTheme": "Les expressions",
          "stepBadge": "Les expressions",
          "paragraphText": "Certaines expressions familières donnent un sens figuré :\n• « avoir la pêche » = être en forme ;\n• « flanquer une pêche » = donner un coup de poing.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p02_q4",
            "type": "mcq",
            "prompt": "Que signifie « avoir la pêche » ?",
            "options": [
              "Aimer les fruits",
              "Être en forme",
              "Savoir pêcher",
              "Être en colère"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est une expression familière."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le canari",
          "stepTheme": "Le canari",
          "stepBadge": "Le canari",
          "paragraphText": "En Côte d'Ivoire, « canari » désigne un oiseau et aussi un récipient en terre cuite.\n« Un canari s'est noyé dans un canari déposé au bord du marigot. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p02_q5",
            "type": "mcq",
            "prompt": "Dans « un canari s'est noyé dans un canari », que désigne le second « canari » ?",
            "options": [
              "Un récipient en terre cuite",
              "Un petit oiseau jaune",
              "Un poisson du marigot",
              "Un enfant du village"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'oiseau s'est noyé dans le récipient."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Le test du dictionnaire",
          "stepTheme": "Le test du dictionnaire",
          "stepBadge": "Le test du dictionnaire",
          "paragraphText": "Pour distinguer :\n• polysémie : un seul article, plusieurs sens numérotés ;\n• homonymie : deux articles séparés dans le dictionnaire.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p02_q6",
            "type": "mcq",
            "prompt": "Dans le dictionnaire, comment reconnaît-on deux homonymes ?",
            "options": [
              "Ils ont deux articles séparés",
              "Ils sont dans le même article",
              "Ils sont écrits en majuscules",
              "Ils n'ont aucune définition"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux mots différents = deux articles."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "L'avocat",
          "stepTheme": "L'avocat",
          "stepBadge": "L'avocat",
          "paragraphText": "« L'avocat mange une salade d'avocat. »\nLe juriste et le fruit sont deux mots d'origines différentes : ce sont des homonymes, pas un mot polysémique.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p02_q7",
            "type": "mcq",
            "prompt": "« L'avocat mange une salade d'avocat » : quel phénomène illustre cette phrase ?",
            "options": [
              "La monosémie",
              "L'homonymie",
              "La synonymie",
              "L'antonymie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le juriste et le fruit n'ont aucun lien de sens."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l03_semantique_p02_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que des homonymes ?",
          "options": [
            "Des mots qui ont exactement le même sens",
            "Des mots qui ont des sens contraires",
            "Des mots qui se prononcent pareil mais ont des sens sans lien",
            "Un seul mot qui a plusieurs sens liés"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Homo = même ; onoma = nom."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p02_q2",
          "type": "mcq",
          "prompt": "Lequel de ces mots est un homophone de « mer » ?",
          "options": [
            "Mare",
            "Mur",
            "Miel",
            "Mère"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Mer, mère et maire se prononcent de la même façon."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p02_q3",
          "type": "mcq",
          "prompt": "« Il mange une pêche après la pêche. » Que désignent les deux mots « pêche » ?",
          "options": [
            "Deux fois l'action d'attraper des poissons",
            "Deux fois le même fruit",
            "Un fruit, puis l'action d'attraper des poissons",
            "Une couleur, puis un coup de poing"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Fruit, puis activité : deux mots homonymes."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p02_q4",
          "type": "mcq",
          "prompt": "Que signifie « avoir la pêche » ?",
          "options": [
            "Aimer les fruits",
            "Être en forme",
            "Savoir pêcher",
            "Être en colère"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est une expression familière."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p02_q5",
          "type": "mcq",
          "prompt": "Dans « un canari s'est noyé dans un canari », que désigne le second « canari » ?",
          "options": [
            "Un récipient en terre cuite",
            "Un petit oiseau jaune",
            "Un poisson du marigot",
            "Un enfant du village"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'oiseau s'est noyé dans le récipient."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p02_q6",
          "type": "mcq",
          "prompt": "Dans le dictionnaire, comment reconnaît-on deux homonymes ?",
          "options": [
            "Ils ont deux articles séparés",
            "Ils sont dans le même article",
            "Ils sont écrits en majuscules",
            "Ils n'ont aucune définition"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux mots différents = deux articles."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p02_q7",
          "type": "mcq",
          "prompt": "« L'avocat mange une salade d'avocat » : quel phénomène illustre cette phrase ?",
          "options": [
            "La monosémie",
            "L'homonymie",
            "La synonymie",
            "L'antonymie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le juriste et le fruit n'ont aucun lien de sens."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l03_semantique_p03",
      "order": 3,
      "title": "Sens lexical et sens contextuel",
      "summary": "Le sens du dictionnaire et le sens dans la phrase.",
      "conceptExplanation": "1. Le sens lexical est le sens qu'un mot a dans le dictionnaire, hors de toute phrase.\nExemple : « maître » = personne qui enseigne ; personne qui commande.\n\n2. Le sens contextuel est le sens précis que prend un mot dans une phrase ou une situation donnée. On ne peut le comprendre qu'en tenant compte du contexte.\nExemples :\n- « Le maître corrige les cahiers » → l'enseignant ;\n- « Le chien obéit à son maître » → le propriétaire de l'animal ;\n- « Ce peintre est un maître » → un artiste de très grand talent.\n\nLe contexte comprend la phrase, le texte entier, mais aussi la situation (qui parle, à qui, où, quand). Lire le contexte est indispensable pour bien comprendre un texte et répondre aux questions de vocabulaire (« explique le mot en gras »).",
      "keyRule": "Sens lexical : sens du dictionnaire. Sens contextuel : sens précis que le mot prend dans la phrase. Toujours lire le contexte pour expliquer un mot.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer un mot en contexte",
        "statement": "« Ce footballeur est un maître du dribble. » Explique le mot « maître ».",
        "methodSteps": [
          "Ce n'est ni un enseignant ni un propriétaire.",
          "« Maître du dribble » = quelqu'un qui excelle dans le dribble."
        ],
        "conclusion": "Ici, « maître » signifie « champion, expert »."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le sens lexical",
          "stepTheme": "Le sens lexical",
          "stepBadge": "Le sens lexical",
          "paragraphText": "Le sens lexical est le sens qu'un mot a dans le dictionnaire, hors de toute phrase.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p03_q1",
            "type": "mcq",
            "prompt": "Où trouve-t-on le sens lexical d'un mot ?",
            "options": [
              "Dans la situation de la phrase",
              "Dans la ponctuation du texte",
              "Dans le dictionnaire",
              "Dans le titre de l'œuvre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le sens lexical est celui des définitions du dictionnaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le sens contextuel",
          "stepTheme": "Le sens contextuel",
          "stepBadge": "Le sens contextuel",
          "paragraphText": "Le sens contextuel est le sens précis que prend un mot dans une phrase ou une situation donnée.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p03_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce que le sens contextuel d'un mot ?",
            "options": [
              "Sa première définition dans le dictionnaire",
              "Son origine latine ou grecque",
              "Sa traduction dans une autre langue",
              "Le sens qu'il prend dans une phrase précise"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le contexte précise le sens."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le maître",
          "stepTheme": "Le maître",
          "stepBadge": "Le maître",
          "paragraphText": "• « Le maître corrige les cahiers » → l'enseignant.\n• « Le chien obéit à son maître » → le propriétaire de l'animal.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p03_q3",
            "type": "mcq",
            "prompt": "Dans « Le chien obéit à son maître », quel sens a « maître » ?",
            "options": [
              "L'enseignant de l'école",
              "Un artiste de grand talent",
              "Le propriétaire de l'animal",
              "Le chef d'un royaume"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le contexte (le chien) indique le propriétaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un maître du dribble",
          "stepTheme": "Un maître du dribble",
          "stepBadge": "Un maître du dribble",
          "paragraphText": "« Ce footballeur est un maître du dribble. »\nIci, « maître » signifie quelqu'un qui excelle dans un domaine.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p03_q4",
            "type": "mcq",
            "prompt": "Que signifie « maître » dans « un maître du dribble » ?",
            "options": [
              "Un enseignant de sport",
              "Un arbitre de football",
              "Le propriétaire du ballon",
              "Un expert, un champion"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il excelle dans le dribble."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Qu'est-ce que le contexte ?",
          "stepTheme": "Qu'est-ce que le contexte ?",
          "stepBadge": "Qu'est-ce que le contexte ?",
          "paragraphText": "Le contexte, c'est la phrase et le texte qui entourent le mot, mais aussi la situation : qui parle, à qui, où, quand.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p03_q5",
            "type": "mcq",
            "prompt": "Que comprend le contexte d'un mot ?",
            "options": [
              "La phrase, le texte et la situation",
              "Seulement la première lettre du mot",
              "Uniquement la date de publication",
              "Seulement le nom de l'auteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tout ce qui entoure le mot aide à le comprendre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Expliquer un mot en gras",
          "stepTheme": "Expliquer un mot en gras",
          "stepBadge": "Expliquer un mot en gras",
          "paragraphText": "Pour expliquer un mot dans un texte :\n1. relis la phrase entière ;\n2. élimine les sens qui ne conviennent pas ;\n3. propose un synonyme qui garde le sens de la phrase.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p03_q6",
            "type": "mcq",
            "prompt": "Quelle est la bonne méthode pour expliquer un mot en gras dans un texte ?",
            "options": [
              "Recopier la première définition du dictionnaire",
              "Relire la phrase et proposer un synonyme adapté",
              "Donner le contraire du mot",
              "Compter les lettres du mot"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le sens à donner est celui du contexte."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le dictionnaire ne suffit pas",
          "stepTheme": "Le dictionnaire ne suffit pas",
          "stepBadge": "Le dictionnaire ne suffit pas",
          "paragraphText": "Recopier la première définition du dictionnaire est une erreur fréquente : elle ne correspond pas toujours au sens du mot dans le texte.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p03_q7",
            "type": "mcq",
            "prompt": "« Il a une plume élégante. » Quel sens convient pour « plume » ?",
            "options": [
              "Le duvet d'un oiseau",
              "Sa manière d'écrire",
              "Un stylo en métal",
              "Un oreiller en plumes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ici, la « plume » désigne le style de l'écrivain."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l03_semantique_p03_q1",
          "type": "mcq",
          "prompt": "Où trouve-t-on le sens lexical d'un mot ?",
          "options": [
            "Dans la situation de la phrase",
            "Dans la ponctuation du texte",
            "Dans le dictionnaire",
            "Dans le titre de l'œuvre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le sens lexical est celui des définitions du dictionnaire."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p03_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce que le sens contextuel d'un mot ?",
          "options": [
            "Sa première définition dans le dictionnaire",
            "Son origine latine ou grecque",
            "Sa traduction dans une autre langue",
            "Le sens qu'il prend dans une phrase précise"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le contexte précise le sens."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p03_q3",
          "type": "mcq",
          "prompt": "Dans « Le chien obéit à son maître », quel sens a « maître » ?",
          "options": [
            "L'enseignant de l'école",
            "Un artiste de grand talent",
            "Le propriétaire de l'animal",
            "Le chef d'un royaume"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le contexte (le chien) indique le propriétaire."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p03_q4",
          "type": "mcq",
          "prompt": "Que signifie « maître » dans « un maître du dribble » ?",
          "options": [
            "Un enseignant de sport",
            "Un arbitre de football",
            "Le propriétaire du ballon",
            "Un expert, un champion"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il excelle dans le dribble."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p03_q5",
          "type": "mcq",
          "prompt": "Que comprend le contexte d'un mot ?",
          "options": [
            "La phrase, le texte et la situation",
            "Seulement la première lettre du mot",
            "Uniquement la date de publication",
            "Seulement le nom de l'auteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tout ce qui entoure le mot aide à le comprendre."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p03_q6",
          "type": "mcq",
          "prompt": "Quelle est la bonne méthode pour expliquer un mot en gras dans un texte ?",
          "options": [
            "Recopier la première définition du dictionnaire",
            "Relire la phrase et proposer un synonyme adapté",
            "Donner le contraire du mot",
            "Compter les lettres du mot"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le sens à donner est celui du contexte."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p03_q7",
          "type": "mcq",
          "prompt": "« Il a une plume élégante. » Quel sens convient pour « plume » ?",
          "options": [
            "Le duvet d'un oiseau",
            "Sa manière d'écrire",
            "Un stylo en métal",
            "Un oreiller en plumes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ici, la « plume » désigne le style de l'écrivain."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l03_semantique_p04",
      "order": 4,
      "title": "Sens propre et sens figuré",
      "summary": "Le sens concret et le sens imagé.",
      "conceptExplanation": "1. Le sens propre est le sens premier, concret, le plus courant d'un mot.\nExemple : « un chemin » = une voie, une route.\n\n2. Le sens figuré est un sens imagé, abstrait, obtenu à partir du sens propre. Il crée souvent une image (une métaphore).\nExemples : « le chemin du bonheur » (la suite d'étapes qui mène au bonheur) ; « le chemin de la vie » (les années vécues).\nAutres exemples : « une montagne de devoirs » (une grande quantité) ; « un cœur de pierre » (une personne insensible) ; « dévorer un livre » (le lire avec passion).\n\nPour passer du sens propre au sens figuré, on garde une idée commune : la montagne est grande, donc « une montagne de devoirs » = beaucoup de devoirs.",
      "keyRule": "Sens propre : sens premier, concret (un chemin = une route). Sens figuré : sens imagé tiré du sens propre (le chemin du bonheur).",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer un sens figuré",
        "statement": "« Cet élève dévore les romans. » Explique « dévore ».",
        "methodSteps": [
          "Sens propre : manger avec avidité.",
          "Idée commune : avidité, rapidité.",
          "Sens figuré : lire beaucoup et avec passion."
        ],
        "conclusion": "« Dévore » est au sens figuré : il lit avec passion."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le sens propre",
          "stepTheme": "Le sens propre",
          "stepBadge": "Le sens propre",
          "paragraphText": "Le sens propre est le sens premier, concret, le plus courant d'un mot.\n« Un chemin » = une voie, une route.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p04_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que le sens propre d'un mot ?",
            "options": [
              "Son sens premier et concret",
              "Son sens imagé et poétique",
              "Son sens dans une autre langue",
              "Son sens contraire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sens propre est le sens de base."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le sens figuré",
          "stepTheme": "Le sens figuré",
          "stepBadge": "Le sens figuré",
          "paragraphText": "Le sens figuré est un sens imagé, abstrait, tiré du sens propre.\n« Le chemin du bonheur » : la suite d'étapes qui mène au bonheur.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p04_q2",
            "type": "mcq",
            "prompt": "Dans « le chemin du bonheur », à quel sens est employé « chemin » ?",
            "options": [
              "Au sens propre",
              "Au sens technique",
              "Au sens scientifique",
              "Au sens figuré"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On ne parle pas d'une vraie route."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une montagne de devoirs",
          "stepTheme": "Une montagne de devoirs",
          "stepBadge": "Une montagne de devoirs",
          "paragraphText": "« J'ai une montagne de devoirs. »\nLa montagne est très grande : au sens figuré, « une montagne de » = une grande quantité de.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p04_q3",
            "type": "mcq",
            "prompt": "Que signifie « une montagne de devoirs » ?",
            "options": [
              "Des devoirs de géographie",
              "Des devoirs faits en altitude",
              "Une grande quantité de devoirs",
              "Des devoirs très faciles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sens figuré : l'idée de grandeur est conservée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un cœur de pierre",
          "stepTheme": "Un cœur de pierre",
          "stepBadge": "Un cœur de pierre",
          "paragraphText": "« Il a un cœur de pierre. »\nLa pierre est dure et froide : la personne est insensible.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p04_q4",
            "type": "mcq",
            "prompt": "Que signifie « avoir un cœur de pierre » ?",
            "options": [
              "Être malade du cœur",
              "Être très fort physiquement",
              "Être insensible",
              "Être sculpteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La dureté de la pierre devient l'insensibilité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Trouver l'idée commune",
          "stepTheme": "Trouver l'idée commune",
          "stepBadge": "Trouver l'idée commune",
          "paragraphText": "Pour expliquer un sens figuré, cherche l'idée commune avec le sens propre :\n« dévorer » (manger avec avidité) → « dévorer un livre » (lire avec avidité).",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p04_q5",
            "type": "mcq",
            "prompt": "« Cet élève dévore les romans. » Que signifie « dévore » ?",
            "options": [
              "Il lit les romans avec passion",
              "Il mange les pages des romans",
              "Il déchire les romans",
              "Il vend les romans très vite"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'idée d'avidité passe du repas à la lecture."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les émotions",
          "stepTheme": "Les émotions",
          "stepBadge": "Les émotions",
          "paragraphText": "Le sens figuré sert souvent à exprimer les émotions : « brûler d'impatience », « être glacé de peur », « avoir le cœur lourd ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p04_q6",
            "type": "mcq",
            "prompt": "Dans « être glacé de peur », à quel sens est employé « glacé » ?",
            "options": [
              "Au sens propre",
              "Au sens technique",
              "Au sens chimique",
              "Au sens figuré"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On n'est pas réellement transformé en glace."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Propre ou figuré ?",
          "stepTheme": "Propre ou figuré ?",
          "stepBadge": "Propre ou figuré ?",
          "paragraphText": "Un même mot peut être au sens propre ou figuré selon la phrase :\n• « Le feu brûle le bois » (propre) ;\n• « Il brûle d'impatience » (figuré).",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p04_q7",
            "type": "mcq",
            "prompt": "Dans quelle phrase « brûler » est-il au sens propre ?",
            "options": [
              "Il brûle d'impatience de te voir.",
              "Le feu brûle les herbes sèches.",
              "Elle brûle d'envie de partir.",
              "Il brûle d'amour pour sa patrie."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seul le feu brûle réellement quelque chose."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l03_semantique_p04_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que le sens propre d'un mot ?",
          "options": [
            "Son sens premier et concret",
            "Son sens imagé et poétique",
            "Son sens dans une autre langue",
            "Son sens contraire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sens propre est le sens de base."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p04_q2",
          "type": "mcq",
          "prompt": "Dans « le chemin du bonheur », à quel sens est employé « chemin » ?",
          "options": [
            "Au sens propre",
            "Au sens technique",
            "Au sens scientifique",
            "Au sens figuré"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On ne parle pas d'une vraie route."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p04_q3",
          "type": "mcq",
          "prompt": "Que signifie « une montagne de devoirs » ?",
          "options": [
            "Des devoirs de géographie",
            "Des devoirs faits en altitude",
            "Une grande quantité de devoirs",
            "Des devoirs très faciles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sens figuré : l'idée de grandeur est conservée."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p04_q4",
          "type": "mcq",
          "prompt": "Que signifie « avoir un cœur de pierre » ?",
          "options": [
            "Être malade du cœur",
            "Être très fort physiquement",
            "Être insensible",
            "Être sculpteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La dureté de la pierre devient l'insensibilité."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p04_q5",
          "type": "mcq",
          "prompt": "« Cet élève dévore les romans. » Que signifie « dévore » ?",
          "options": [
            "Il lit les romans avec passion",
            "Il mange les pages des romans",
            "Il déchire les romans",
            "Il vend les romans très vite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'idée d'avidité passe du repas à la lecture."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p04_q6",
          "type": "mcq",
          "prompt": "Dans « être glacé de peur », à quel sens est employé « glacé » ?",
          "options": [
            "Au sens propre",
            "Au sens technique",
            "Au sens chimique",
            "Au sens figuré"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On n'est pas réellement transformé en glace."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p04_q7",
          "type": "mcq",
          "prompt": "Dans quelle phrase « brûler » est-il au sens propre ?",
          "options": [
            "Il brûle d'impatience de te voir.",
            "Le feu brûle les herbes sèches.",
            "Elle brûle d'envie de partir.",
            "Il brûle d'amour pour sa patrie."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seul le feu brûle réellement quelque chose."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l03_semantique_p05",
      "order": 5,
      "title": "Dénotation et connotation",
      "summary": "Ce que le mot désigne, ce qu'il suggère.",
      "conceptExplanation": "1. La dénotation est le sens objectif d'un mot, celui que tout le monde comprend de la même façon : la réalité qu'il désigne.\nExemple : « un mouton » dénote un animal d'élevage à laine.\n\n2. La connotation est le sens second d'un mot : les idées, les images, les jugements ou les émotions qu'il suggère en plus de son sens premier. Elle dépend du contexte et de la culture.\nExemples :\n- « un mouton » connote la docilité, le fait de suivre les autres sans réfléchir : « Il se conduit comme un mouton » ;\n- « la colombe » connote la paix ;\n- « le rouge » connote le danger, l'interdiction ou la passion ;\n- « l'aube » connote le commencement, l'espoir.\n\nLes connotations peuvent être mélioratives (positives) ou péjoratives (négatives). Les écrivains les utilisent pour suggérer sans dire directement.",
      "keyRule": "Dénotation : sens objectif, la réalité désignée (le mouton = un animal). Connotation : sens second, idées suggérées (le mouton = la docilité).",
      "formulas": [],
      "workedExample": {
        "title": "Analyser une connotation",
        "statement": "Un poète écrit : « Une colombe s'envola au-dessus de la ville en ruine. » Que suggère la colombe ?",
        "methodSteps": [
          "Dénotation : un oiseau blanc.",
          "Connotation culturelle : la paix.",
          "Dans une ville en ruine, elle suggère l'espoir de la paix après la guerre."
        ],
        "conclusion": "La colombe connote la paix et l'espoir."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dénotation",
          "stepTheme": "La dénotation",
          "stepBadge": "La dénotation",
          "paragraphText": "La dénotation est le sens objectif d'un mot : la réalité qu'il désigne, comprise de la même façon par tous.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p05_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que la dénotation d'un mot ?",
            "options": [
              "Les émotions qu'il suggère",
              "Son sens objectif, la réalité désignée",
              "Son sens contraire",
              "Sa prononciation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dénoter = désigner objectivement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La connotation",
          "stepTheme": "La connotation",
          "stepBadge": "La connotation",
          "paragraphText": "La connotation est le sens second d'un mot : les idées, images ou émotions qu'il suggère en plus de son sens premier.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p05_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce que la connotation d'un mot ?",
            "options": [
              "Sa définition exacte dans le dictionnaire",
              "Son orthographe officielle",
              "Le nombre de ses syllabes",
              "Les idées qu'il suggère en plus de son sens premier"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Connoter = suggérer."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le mouton",
          "stepTheme": "Le mouton",
          "stepBadge": "Le mouton",
          "paragraphText": "« Un mouton » dénote un animal à laine.\nIl connote la docilité : « Il se conduit comme un mouton » = il suit les autres sans réfléchir.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p05_q3",
            "type": "mcq",
            "prompt": "Que connote « mouton » dans « Il suit le groupe comme un mouton » ?",
            "options": [
              "Le fait de suivre les autres sans réfléchir",
              "Un animal d'élevage à laine",
              "Une grande intelligence",
              "Le courage face au danger"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le mouton suit le troupeau : c'est l'idée suggérée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La colombe",
          "stepTheme": "La colombe",
          "stepBadge": "La colombe",
          "paragraphText": "La colombe dénote un oiseau.\nDans notre culture, elle connote la paix.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p05_q4",
            "type": "mcq",
            "prompt": "Que connote généralement la colombe ?",
            "options": [
              "La guerre",
              "La richesse",
              "La paix",
              "La maladie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La colombe est le symbole de la paix."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les couleurs",
          "stepTheme": "Les couleurs",
          "stepBadge": "Les couleurs",
          "paragraphText": "Les couleurs ont des connotations :\n• rouge : danger, interdiction, passion ;\n• vert : espoir, nature ;\n• noir : deuil, tristesse.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p05_q5",
            "type": "mcq",
            "prompt": "Que connote souvent la couleur noire ?",
            "options": [
              "La joie et la fête",
              "La paix et la sérénité",
              "La nature et l'espoir",
              "Le deuil et la tristesse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le noir est associé au deuil."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Positive ou négative",
          "stepTheme": "Positive ou négative",
          "stepBadge": "Positive ou négative",
          "paragraphText": "Une connotation peut être méliorative (positive) ou péjorative (négative).\n« Un renard » connote la ruse : c'est péjoratif dans « C'est un vieux renard ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p05_q6",
            "type": "mcq",
            "prompt": "Dans « C'est un vieux renard », quelle idée suggère « renard » ?",
            "options": [
              "La gentillesse",
              "La naïveté",
              "La ruse",
              "La lenteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le renard symbolise la ruse."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "La connotation dépend de la culture",
          "stepTheme": "La connotation dépend de la culture",
          "stepBadge": "La connotation dépend de la culture",
          "paragraphText": "Les connotations ne sont pas universelles : elles dépendent de la culture.\nPar exemple, le blanc connote le deuil dans certaines cultures, la pureté dans d'autres.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p05_q7",
            "type": "mcq",
            "prompt": "De quoi dépend la connotation d'un mot ?",
            "options": [
              "Uniquement de son orthographe",
              "Du contexte et de la culture",
              "Uniquement de sa longueur",
              "De la première lettre du mot"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les idées suggérées varient selon les sociétés."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l03_semantique_p05_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que la dénotation d'un mot ?",
          "options": [
            "Les émotions qu'il suggère",
            "Son sens objectif, la réalité désignée",
            "Son sens contraire",
            "Sa prononciation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dénoter = désigner objectivement."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p05_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce que la connotation d'un mot ?",
          "options": [
            "Sa définition exacte dans le dictionnaire",
            "Son orthographe officielle",
            "Le nombre de ses syllabes",
            "Les idées qu'il suggère en plus de son sens premier"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Connoter = suggérer."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p05_q3",
          "type": "mcq",
          "prompt": "Que connote « mouton » dans « Il suit le groupe comme un mouton » ?",
          "options": [
            "Le fait de suivre les autres sans réfléchir",
            "Un animal d'élevage à laine",
            "Une grande intelligence",
            "Le courage face au danger"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le mouton suit le troupeau : c'est l'idée suggérée."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p05_q4",
          "type": "mcq",
          "prompt": "Que connote généralement la colombe ?",
          "options": [
            "La guerre",
            "La richesse",
            "La paix",
            "La maladie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La colombe est le symbole de la paix."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p05_q5",
          "type": "mcq",
          "prompt": "Que connote souvent la couleur noire ?",
          "options": [
            "La joie et la fête",
            "La paix et la sérénité",
            "La nature et l'espoir",
            "Le deuil et la tristesse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le noir est associé au deuil."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p05_q6",
          "type": "mcq",
          "prompt": "Dans « C'est un vieux renard », quelle idée suggère « renard » ?",
          "options": [
            "La gentillesse",
            "La naïveté",
            "La ruse",
            "La lenteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le renard symbolise la ruse."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p05_q7",
          "type": "mcq",
          "prompt": "De quoi dépend la connotation d'un mot ?",
          "options": [
            "Uniquement de son orthographe",
            "Du contexte et de la culture",
            "Uniquement de sa longueur",
            "De la première lettre du mot"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les idées suggérées varient selon les sociétés."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l03_semantique_p06",
      "order": 6,
      "title": "Lire le sens d'un texte",
      "summary": "Utiliser la sémantique pour comprendre et écrire.",
      "conceptExplanation": "Les notions de sémantique aident à construire le sens d'un texte :\n\n- face à un mot difficile, on cherche s'il est polysémique et on choisit le sens adapté au contexte ;\n- on repère les mots employés au sens figuré et on explique l'image ;\n- on analyse les connotations pour comprendre ce que l'auteur suggère sans le dire ;\n- on distingue les homonymes pour éviter les contresens.\n\nÀ l'écrit, ces notions permettent de choisir le mot juste, d'éviter les ambiguïtés et d'enrichir son style avec des images.\n\nExemple d'analyse : « La ville dormait sous un manteau blanc. »\n- « dormait » : sens figuré (la ville était calme, silencieuse) ;\n- « manteau blanc » : sens figuré (une couche de brume ou de neige qui couvre la ville) ;\n- connotations : calme, douceur, pureté.",
      "keyRule": "Pour lire un texte : choisir le sens selon le contexte, expliquer les sens figurés, analyser les connotations, distinguer les homonymes.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser une phrase",
        "statement": "« Le vieux baobab veille sur le village. » Analyse le sens de « veille ».",
        "methodSteps": [
          "Sens propre : rester éveillé pour surveiller.",
          "Un arbre ne surveille pas : sens figuré.",
          "Connotation : protection, sagesse, ancienneté."
        ],
        "conclusion": "Le baobab est présenté comme un protecteur du village."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Un mot difficile",
          "stepTheme": "Un mot difficile",
          "stepBadge": "Un mot difficile",
          "paragraphText": "Face à un mot difficile, demande-toi s'il a plusieurs sens, puis choisis celui qui convient au contexte.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p06_q1",
            "type": "mcq",
            "prompt": "Que faire d'abord face à un mot qui a plusieurs sens dans un texte ?",
            "options": [
              "Choisir le sens qui convient au contexte",
              "Prendre toujours le premier sens",
              "Ignorer le mot et continuer",
              "Remplacer le mot par son contraire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le contexte guide le choix du sens."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une ville qui dort",
          "stepTheme": "Une ville qui dort",
          "stepBadge": "Une ville qui dort",
          "paragraphText": "« La ville dormait sous un manteau blanc. »\n• « dormait » : la ville était calme, silencieuse ;\n• « manteau blanc » : la brume ou la neige qui la couvre.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p06_q2",
            "type": "mcq",
            "prompt": "Dans « La ville dormait », à quel sens est employé « dormait » ?",
            "options": [
              "Au sens figuré : la ville était calme",
              "Au sens propre : la ville avait sommeil",
              "Au sens technique : la ville était fermée",
              "Au sens lexical : la ville était malade"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une ville ne dort pas vraiment : c'est une image."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le baobab",
          "stepTheme": "Le baobab",
          "stepBadge": "Le baobab",
          "paragraphText": "« Le vieux baobab veille sur le village. »\nUn arbre ne surveille pas : « veille » est au sens figuré.\nIl connote la protection et la sagesse.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p06_q3",
            "type": "mcq",
            "prompt": "Que suggère « Le vieux baobab veille sur le village » ?",
            "options": [
              "Que le baobab va être coupé",
              "Que le baobab protège le village",
              "Que le village est abandonné",
              "Que le baobab est malade"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le baobab devient un protecteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Éviter les contresens",
          "stepTheme": "Éviter les contresens",
          "stepBadge": "Éviter les contresens",
          "paragraphText": "Confondre deux homonymes ou prendre au sens propre un mot employé au sens figuré conduit à un contresens.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p06_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un contresens ?",
            "options": [
              "Un mot qui a plusieurs sens",
              "Une figure de style",
              "Une erreur sur le sens d'un mot ou d'un texte",
              "Un mot de sens contraire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le contresens donne au texte un sens qu'il n'a pas."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Choisir le mot juste",
          "stepTheme": "Choisir le mot juste",
          "stepBadge": "Choisir le mot juste",
          "paragraphText": "À l'écrit, choisis le mot dont le sens et les connotations correspondent à ce que tu veux dire.\n« Une demeure » est valorisant ; « une cabane » est plus modeste.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p06_q5",
            "type": "mcq",
            "prompt": "Pour parler d'une maison magnifique, quel mot choisir ?",
            "options": [
              "Une baraque",
              "Un taudis",
              "Une cabane",
              "Une demeure"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Demeure » a une connotation méliorative."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Analyser une image",
          "stepTheme": "Analyser une image",
          "stepBadge": "Analyser une image",
          "paragraphText": "« Ses paroles étaient du miel. »\nLe miel est doux et agréable : ses paroles étaient douces et flatteuses.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p06_q6",
            "type": "mcq",
            "prompt": "Que signifie « Ses paroles étaient du miel » ?",
            "options": [
              "Il parlait la bouche pleine de miel",
              "Il vendait du miel au marché",
              "Ses paroles étaient douces et agréables",
              "Ses paroles étaient collantes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La douceur du miel est transférée aux paroles."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le sens d'un mot change",
          "stepTheme": "Le sens d'un mot change",
          "stepBadge": "Le sens d'un mot change",
          "paragraphText": "Un même mot peut avoir des sens très différents selon le texte : il ne faut jamais réciter une définition sans vérifier le contexte.",
          "exercise": {
            "id": "seconde_a_francais_pl_l03_semantique_p06_q7",
            "type": "mcq",
            "prompt": "Quelle attitude est correcte face au vocabulaire d'un texte ?",
            "options": [
              "Réciter la définition apprise par cœur",
              "Supposer qu'un mot a toujours un seul sens",
              "Ignorer les mots qu'on ne connaît pas",
              "Vérifier le sens de chaque mot dans son contexte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le sens se construit dans le contexte."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l03_semantique_p06_q1",
          "type": "mcq",
          "prompt": "Que faire d'abord face à un mot qui a plusieurs sens dans un texte ?",
          "options": [
            "Choisir le sens qui convient au contexte",
            "Prendre toujours le premier sens",
            "Ignorer le mot et continuer",
            "Remplacer le mot par son contraire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le contexte guide le choix du sens."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p06_q2",
          "type": "mcq",
          "prompt": "Dans « La ville dormait », à quel sens est employé « dormait » ?",
          "options": [
            "Au sens figuré : la ville était calme",
            "Au sens propre : la ville avait sommeil",
            "Au sens technique : la ville était fermée",
            "Au sens lexical : la ville était malade"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une ville ne dort pas vraiment : c'est une image."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p06_q3",
          "type": "mcq",
          "prompt": "Que suggère « Le vieux baobab veille sur le village » ?",
          "options": [
            "Que le baobab va être coupé",
            "Que le baobab protège le village",
            "Que le village est abandonné",
            "Que le baobab est malade"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le baobab devient un protecteur."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p06_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un contresens ?",
          "options": [
            "Un mot qui a plusieurs sens",
            "Une figure de style",
            "Une erreur sur le sens d'un mot ou d'un texte",
            "Un mot de sens contraire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le contresens donne au texte un sens qu'il n'a pas."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p06_q5",
          "type": "mcq",
          "prompt": "Pour parler d'une maison magnifique, quel mot choisir ?",
          "options": [
            "Une baraque",
            "Un taudis",
            "Une cabane",
            "Une demeure"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Demeure » a une connotation méliorative."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p06_q6",
          "type": "mcq",
          "prompt": "Que signifie « Ses paroles étaient du miel » ?",
          "options": [
            "Il parlait la bouche pleine de miel",
            "Il vendait du miel au marché",
            "Ses paroles étaient douces et agréables",
            "Ses paroles étaient collantes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La douceur du miel est transférée aux paroles."
        },
        {
          "id": "seconde_a_francais_pl_l03_semantique_p06_q7",
          "type": "mcq",
          "prompt": "Quelle attitude est correcte face au vocabulaire d'un texte ?",
          "options": [
            "Réciter la définition apprise par cœur",
            "Supposer qu'un mot a toujours un seul sens",
            "Ignorer les mots qu'on ne connaît pas",
            "Vérifier le sens de chaque mot dans son contexte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le sens se construit dans le contexte."
        }
      ]
    }
  ]
};
