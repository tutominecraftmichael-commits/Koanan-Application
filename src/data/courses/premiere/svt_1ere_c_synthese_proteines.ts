import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 6 : La synthèse des protéines » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=935
export const SVT_1ERE_C_L06_SYNTHESE_PROTEINES: CurriculumChapter = {
  "id": "premiere_c_svt_l06_synthese_proteines",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 6,
  "title": "Leçon 6 : La synthèse des protéines",
  "summary": "On identifie les acteurs de la synthèse des protéines, on explique le code génétique puis le mécanisme en deux grandes étapes : la transcription dans le noyau et la traduction dans le cytoplasme.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=935",
  "points": [
    {
      "id": "premiere_c_svt_l06_synthese_proteines_p01",
      "order": 1,
      "title": "Les acteurs de la synthèse des protéines",
      "summary": "La synthèse fait intervenir l’ADN, support de l’information, l’ARN messager qui la copie, l’ARN de transfert qui apporte les acides aminés, et les ribosomes, ateliers de fabrication, avec enzymes et ATP.",
      "conceptExplanation": "Les acteurs de la synthèse des protéines sont l’ADN, l’ARN (l’ARN messager et l’ARN de transfert) et le ribosome.\nL’ADN est le support de l’information génétique et sert de matrice pour la copie de l’information génétique. L’ARN messager est une copie de l’information portée par l’ADN et permet le passage de l’information du noyau au cytoplasme.\nL’ARN est constitué d’acide phosphorique, de sucre et de bases azotées ; son sucre est le ribose et l’uracile y remplace la thymine. L’ARN est une molécule formée d’une seule chaîne de nucléotides : elle est monocaténaire. L’ARN de transfert permet le transport des acides aminés et place chaque acide aminé à l’endroit qui convient. Les ribosomes sont de petits granules cytoplasmiques qui se déplacent le long de l’ARN et jouent le rôle d’ateliers de fabrication des protéines. L’ensemble des réactions nécessite plusieurs enzymes et de l’énergie sous forme d’ATP.",
      "keyRule": "ADN matrice, ARNm copie mobile, ARNt transporteur, ribosome atelier.",
      "formulas": [],
      "workedExample": {
        "title": "Vrai ou faux sur les acteurs",
        "statement": "Juge les affirmations : l’ADN porte l’information ; l’ARNt porte l’acide aminé correspondant à un codon ; le ribosome assure la lecture de l’ARNm ; l’ADN est un acide ribonucléique.",
        "methodSteps": [
          "Les trois premières affirmations sont vraies d’après le corrigé.",
          "La dernière est fausse : l’ADN n’est pas l’ARN.",
          "L’ARNt porte bien l’acide aminé correspondant à un codon précis."
        ],
        "conclusion": "Le corrigé donne vrai, faux pour la peptidase-hormone, vrai, vrai, faux dans l’activité du cours."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’ADN, support de l’information",
          "stepTheme": "L’ADN, support de l’information",
          "stepBadge": "L’ADN, support de l’information",
          "paragraphText": "• ADN : support de l’information génétique.\nIl sert de matrice pour la copie de l’information génétique.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p01_q1",
            "type": "mcq",
            "prompt": "L’ADN est :",
            "options": [
              "Le support de l’information génétique et la matrice de sa copie",
              "Le transporteur des acides aminés",
              "L’atelier de fabrication",
              "Une enzyme de la traduction"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’analyse de la partie I attribue ce rôle à l’ADN."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’ARN messager, copie mobile",
          "stepTheme": "L’ARN messager, copie mobile",
          "stepBadge": "L’ARN messager, copie mobile",
          "paragraphText": "• ARN messager : copie de l’information portée par l’ADN.\nIl permet le passage de l’information du noyau au cytoplasme.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p01_q2",
            "type": "mcq",
            "prompt": "L’ARN messager permet :",
            "options": [
              "La fabrication des ribosomes seuls",
              "Le transport direct des acides aminés",
              "Le passage de l’information du noyau au cytoplasme",
              "La destruction de l’ADN"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé définit l’ARNm comme la copie qui fait passer l’information du noyau au cytoplasme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La structure de l’ARN",
          "stepTheme": "La structure de l’ARN",
          "stepBadge": "La structure de l’ARN",
          "paragraphText": "L’ARN est constitué d’acide phosphorique, de sucre et de bases azotées, comme l’ADN.\nMais son sucre est le ribose, l’uracile remplace la thymine et il est monocaténaire.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p01_q3",
            "type": "mcq",
            "prompt": "Dans l’ARN, la thymine est remplacée par :",
            "options": [
              "La cytosine",
              "L’uracile",
              "L’adénine",
              "La guanine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé dit que l’uracile remplace la thymine au niveau de l’ARN."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L’ARN de transfert",
          "stepTheme": "L’ARN de transfert",
          "stepBadge": "L’ARN de transfert",
          "paragraphText": "• ARN de transfert : ARN qui permet le transport des acides aminés.\nIl place chaque acide aminé à l’endroit qui convient et porte l’acide aminé correspondant à un codon précis de l’ARNm.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p01_q4",
            "type": "mcq",
            "prompt": "L’ARN de transfert assure :",
            "options": [
              "La lecture de l’ARNm",
              "La copie de l’ADN",
              "La formation du noyau",
              "Le transport des acides aminés à la bonne place"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le rôle décrit dans l’analyse de la partie I et confirmé par les activités."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le ribosome, atelier de fabrication",
          "stepTheme": "Le ribosome, atelier de fabrication",
          "stepBadge": "Le ribosome, atelier de fabrication",
          "paragraphText": "Les ribosomes sont de petits granules cytoplasmiques qui se déplacent le long de l’ARN.\nIls jouent le rôle d’ateliers de fabrication des protéines et assurent la lecture de l’ARNm.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p01_q5",
            "type": "mcq",
            "prompt": "Le ribosome assure :",
            "options": [
              "La copie de l’information dans le noyau",
              "La fourniture du code génétique",
              "La lecture de l’ARNm",
              "Le transport des acides aminés seuls"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé des affirmations retient que le ribosome assure la lecture de l’ARNm."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L’énergie et les enzymes nécessaires",
          "stepTheme": "L’énergie et les enzymes nécessaires",
          "stepBadge": "L’énergie et les enzymes nécessaires",
          "paragraphText": "Piège : les trois acteurs principaux ne suffisent pas seuls.\nL’ensemble des réactions nécessite plusieurs enzymes et de l’énergie sous forme d’ATP.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p01_q6",
            "type": "mcq",
            "prompt": "La synthèse des protéines nécessite aussi :",
            "options": [
              "Plusieurs enzymes et de l’énergie sous forme d’ATP",
              "Aucune énergie",
              "Uniquement de l’eau",
              "Uniquement des lipides"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fin de l’analyse de la partie I mentionne enzymes et ATP."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p01_q1",
          "type": "mcq",
          "prompt": "L’ADN est :",
          "options": [
            "Le support de l’information génétique et la matrice de sa copie",
            "Le transporteur des acides aminés",
            "L’atelier de fabrication",
            "Une enzyme de la traduction"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’analyse de la partie I attribue ce rôle à l’ADN."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p01_q2",
          "type": "mcq",
          "prompt": "L’ARN messager permet :",
          "options": [
            "La fabrication des ribosomes seuls",
            "Le transport direct des acides aminés",
            "Le passage de l’information du noyau au cytoplasme",
            "La destruction de l’ADN"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé définit l’ARNm comme la copie qui fait passer l’information du noyau au cytoplasme."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p01_q3",
          "type": "mcq",
          "prompt": "Dans l’ARN, la thymine est remplacée par :",
          "options": [
            "La cytosine",
            "L’uracile",
            "L’adénine",
            "La guanine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé dit que l’uracile remplace la thymine au niveau de l’ARN."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p01_q4",
          "type": "mcq",
          "prompt": "L’ARN de transfert assure :",
          "options": [
            "La lecture de l’ARNm",
            "La copie de l’ADN",
            "La formation du noyau",
            "Le transport des acides aminés à la bonne place"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le rôle décrit dans l’analyse de la partie I et confirmé par les activités."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p01_q5",
          "type": "mcq",
          "prompt": "Le ribosome assure :",
          "options": [
            "La copie de l’information dans le noyau",
            "La fourniture du code génétique",
            "La lecture de l’ARNm",
            "Le transport des acides aminés seuls"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé des affirmations retient que le ribosome assure la lecture de l’ARNm."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p01_q6",
          "type": "mcq",
          "prompt": "La synthèse des protéines nécessite aussi :",
          "options": [
            "Plusieurs enzymes et de l’énergie sous forme d’ATP",
            "Aucune énergie",
            "Uniquement de l’eau",
            "Uniquement des lipides"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fin de l’analyse de la partie I mentionne enzymes et ATP."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l06_synthese_proteines_p02",
      "order": 2,
      "title": "Le code génétique : codons, codon initiateur et codons stop",
      "summary": "Le code génétique fait correspondre 64 triplets de nucléotides aux 20 acides aminés : AUG initie toujours la synthèse, UAA, UAG et UGA l’arrêtent, et la plupart des acides aminés ont plusieurs codons.",
      "conceptExplanation": "Le code génétique est le système de correspondance entre la séquence de nucléotides de l’ARNm et celle des acides aminés (20 acides aminés spécifiques) nécessaires à la synthèse protéique ; il comprend 64 triplets de nucléotides.\nLa combinaison de trois bases azotées est nécessaire pour désigner un acide aminé : ce triplet de bases constitue un codon, plus petite unité du message génétique. Chaque triplet est formé d’une combinaison de trois bases parmi les quatre de l’ARNm, représentées par les lettres U, C, G et A.\nToute synthèse protéique débute toujours par le même codon, AUG, désignant la méthionine : c’est le codon initiateur. La majorité des acides aminés est désignée par plusieurs codons : le code génétique est redondant. Trois codons ne désignent aucun acide aminé, UAA, UAG et UGA : ce sont les codons stop ou codons non-sens, qui marquent la fin du message génétique. L’anticodon est le triplet de bases complémentaires aux codons, porté par l’ARNt.",
      "keyRule": "Un codon égale trois bases égale un acide aminé ; AUG commence, trois codons stop terminent.",
      "formulas": [],
      "workedExample": {
        "title": "Associer notions et définitions",
        "statement": "Associe codon, codon initiateur, codon stop, code redondant et anticodon à leurs définitions.",
        "methodSteps": [
          "Le codon est un triplet de bases de l’ARNm et l’anticodon le triplet complémentaire porté par l’ARNt.",
          "Le codon initiateur débute la synthèse et le codon stop n’a aucune correspondance en acide aminé.",
          "Le code redondant correspond à l’existence de codons synonymes."
        ],
        "conclusion": "Le corrigé donne les associations une à une pour les cinq notions."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d’un codon",
          "stepTheme": "Définition d’un codon",
          "stepBadge": "Définition d’un codon",
          "paragraphText": "• Codon : triplet de bases azotées de l’ARNm correspondant à un acide aminé.\nC’est la plus petite unité du message génétique et une information élémentaire.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p02_q1",
            "type": "mcq",
            "prompt": "Un codon est :",
            "options": [
              "Une seule base azotée",
              "Un acide aminé complet",
              "Un ribosome entier",
              "Un triplet de bases constituant l’unité du message génétique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’interprétation définit le codon comme triplet et plus petite unité du message génétique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "64 triplets pour 20 acides aminés",
          "stepTheme": "64 triplets pour 20 acides aminés",
          "stepBadge": "64 triplets pour 20 acides aminés",
          "paragraphText": "Le code génétique comprend 64 triplets de nucléotides.\nIl ne désigne qu’une vingtaine d’acides aminés, soit 20 acides aminés spécifiques.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p02_q2",
            "type": "mcq",
            "prompt": "Le nombre de triplets du code génétique est de :",
            "options": [
              "3",
              "64",
              "4",
              "20"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les résultats de la partie II donnent 64 triplets et une vingtaine d’acides aminés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le codon initiateur AUG",
          "stepTheme": "Le codon initiateur AUG",
          "stepBadge": "Le codon initiateur AUG",
          "paragraphText": "• Codon initiateur : codon AUG qui débute toute synthèse protéique.\nIl désigne la méthionine.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p02_q3",
            "type": "mcq",
            "prompt": "Le codon initiateur est :",
            "options": [
              "AUG, désignant la méthionine",
              "UAG",
              "UAA",
              "UGA"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé dit que toute synthèse débute par AUG, codon de la méthionine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les codons stop",
          "stepTheme": "Les codons stop",
          "stepBadge": "Les codons stop",
          "paragraphText": "• Codons stop ou non-sens : UAA, UAG et UGA.\nIls ne correspondent à aucun acide aminé et marquent la fin du message génétique.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p02_q4",
            "type": "mcq",
            "prompt": "Les codons stop sont :",
            "options": [
              "AUG, UAA et UGA",
              "Uniquement AUG",
              "UAA, UAG et UGA",
              "Tous les codons de la méthionine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé liste exactement UAA, UAG et UGA."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le code génétique est redondant",
          "stepTheme": "Le code génétique est redondant",
          "stepBadge": "Le code génétique est redondant",
          "paragraphText": "La majorité des acides aminés est désignée par plusieurs codons.\nOn dit que le code génétique est redondant, avec des codons synonymes.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p02_q5",
            "type": "mcq",
            "prompt": "Le code est dit redondant car :",
            "options": [
              "Aucun codon ne désigne d’acide aminé",
              "Il existe plusieurs codons pour un même acide aminé",
              "Les codons stop sont nombreux",
              "Chaque acide aminé a un seul codon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition du code redondant dans les activités est l’existence de codons synonymes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L’anticodon est porté par l’ARNt",
          "stepTheme": "L’anticodon est porté par l’ARNt",
          "stepBadge": "L’anticodon est porté par l’ARNt",
          "paragraphText": "Piège : ne pas confondre codon et anticodon.\nLe codon est sur l’ARNm ; l’anticodon est le triplet complémentaire porté par l’ARNt.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p02_q6",
            "type": "mcq",
            "prompt": "L’anticodon est :",
            "options": [
              "Un codon stop",
              "Un triplet de l’ADN seul",
              "Le codon initiateur",
              "Un triplet de bases complémentaires aux codons, porté par l’ARNt"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le corrigé des associations définit ainsi l’anticodon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p02_q1",
          "type": "mcq",
          "prompt": "Un codon est :",
          "options": [
            "Une seule base azotée",
            "Un acide aminé complet",
            "Un ribosome entier",
            "Un triplet de bases constituant l’unité du message génétique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’interprétation définit le codon comme triplet et plus petite unité du message génétique."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p02_q2",
          "type": "mcq",
          "prompt": "Le nombre de triplets du code génétique est de :",
          "options": [
            "3",
            "64",
            "4",
            "20"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les résultats de la partie II donnent 64 triplets et une vingtaine d’acides aminés."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p02_q3",
          "type": "mcq",
          "prompt": "Le codon initiateur est :",
          "options": [
            "AUG, désignant la méthionine",
            "UAG",
            "UAA",
            "UGA"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé dit que toute synthèse débute par AUG, codon de la méthionine."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p02_q4",
          "type": "mcq",
          "prompt": "Les codons stop sont :",
          "options": [
            "AUG, UAA et UGA",
            "Uniquement AUG",
            "UAA, UAG et UGA",
            "Tous les codons de la méthionine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé liste exactement UAA, UAG et UGA."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p02_q5",
          "type": "mcq",
          "prompt": "Le code est dit redondant car :",
          "options": [
            "Aucun codon ne désigne d’acide aminé",
            "Il existe plusieurs codons pour un même acide aminé",
            "Les codons stop sont nombreux",
            "Chaque acide aminé a un seul codon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition du code redondant dans les activités est l’existence de codons synonymes."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p02_q6",
          "type": "mcq",
          "prompt": "L’anticodon est :",
          "options": [
            "Un codon stop",
            "Un triplet de l’ADN seul",
            "Le codon initiateur",
            "Un triplet de bases complémentaires aux codons, porté par l’ARNt"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le corrigé des associations définit ainsi l’anticodon."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l06_synthese_proteines_p03",
      "order": 3,
      "title": "La transcription : de l’ADN à l’ARN messager dans le noyau",
      "summary": "La transcription se déroule dans le noyau : l’ARN polymérase ouvre localement l’ADN et construit l’ARNm par complémentarité à partir du brin transcrit, avec l’uracile à la place de la thymine.",
      "conceptExplanation": "La transcription, ou synthèse de l’ARN messager à partir d’un seul brin de l’ADN, se déroule dans le noyau de la cellule sous l’action d’une enzyme, l’ARN polymérase.\nLa molécule d’ADN s’ouvre localement au niveau de la portion de l’information dont la cellule a besoin. L’ARN polymérase se déplace le long de la portion du brin d’ADN portant l’information génétique visée en incorporant les nucléotides libres par complémentarité avec le brin d’ADN qui sert de matrice ; il se forme ainsi l’ARN messager. Au niveau du brin d’ARN, l’uracile remplace la thymine : on dit que l’ADN est transcrit en ARNm.\nLe brin d’ADN servant de matrice est appelé brin codant ou brin transcrit ou brin informatif, et l’autre brin est le brin non transcrit.",
      "keyRule": "Transcription égale noyau, ARN polymérase, un seul brin matrice, produit ARNm.",
      "formulas": [],
      "workedExample": {
        "title": "Classer transcription et traduction",
        "statement": "Range les informations suivantes : production de l’ARN messager, dans le noyau, intervention de l’ARN polymérase, ADN en est la base.",
        "methodSteps": [
          "Ces quatre informations concernent la transcription.",
          "La traduction, elle, se fait dans le cytoplasme avec les ARNt.",
          "Le tableau corrigé oppose ainsi les deux grandes étapes."
        ],
        "conclusion": "Le lieu et l’enzyme suffisent à reconnaître la transcription."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la transcription",
          "stepTheme": "Définition de la transcription",
          "stepBadge": "Définition de la transcription",
          "paragraphText": "• Transcription : synthèse de l’ARN messager à partir d’un seul brin de l’ADN.\nElle se déroule dans le noyau et produit l’ARNm.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p03_q1",
            "type": "mcq",
            "prompt": "La transcription aboutit à :",
            "options": [
              "La formation d’une protéine",
              "La duplication de tout l’ADN",
              "La formation de l’ARNm à partir de l’ADN",
              "La formation des ribosomes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les résultats de la partie III placent en premier la synthèse de l’ARNm à partir de l’ADN, dans le noyau."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de l’ARN polymérase",
          "stepTheme": "Le rôle de l’ARN polymérase",
          "stepBadge": "Le rôle de l’ARN polymérase",
          "paragraphText": "L’ARN polymérase se déplace le long du brin matrice en incorporant les nucléotides libres par complémentarité.\nC’est l’enzyme de la transcription.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p03_q2",
            "type": "mcq",
            "prompt": "La transcription est catalysée par :",
            "options": [
              "L’ARN polymérase",
              "Le ribosome",
              "L’anticodon",
              "La peptidase seule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’activité lacunaire et l’interprétation nomment l’ARN polymérase comme enzyme de la transcription."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’ouverture locale de l’ADN",
          "stepTheme": "L’ouverture locale de l’ADN",
          "stepBadge": "L’ouverture locale de l’ADN",
          "paragraphText": "La molécule d’ADN s’ouvre localement, seulement au niveau de la portion d’information dont la cellule a besoin.\nUn seul brin sert de matrice.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p03_q3",
            "type": "mcq",
            "prompt": "Pendant la transcription, l’ADN :",
            "options": [
              "Se transforme en protéine",
              "Se copie entièrement en deux ADN",
              "Disparaît du noyau",
              "S’ouvre localement et un seul brin sert de matrice"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’interprétation précise l’ouverture locale et le brin unique matrice."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "L’uracile remplace la thymine dans l’ARN",
          "stepTheme": "L’uracile remplace la thymine dans l’ARN",
          "stepBadge": "L’uracile remplace la thymine dans l’ARN",
          "paragraphText": "Piège : recopier le brin d’ADN lettre pour lettre donne un faux ARNm.\nAu niveau du brin d’ARN formé, l’uracile remplace la thymine.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p03_q4",
            "type": "mcq",
            "prompt": "Dans l’ARNm transcrit, à la place de la thymine on trouve :",
            "options": [
              "L’adénine",
              "L’uracile",
              "La guanine uniquement",
              "Aucune base"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé répète que l’uracile remplace la thymine au niveau de l’ARN."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le brin transcrit",
          "stepTheme": "Le brin transcrit",
          "stepBadge": "Le brin transcrit",
          "paragraphText": "• Brin codant, brin transcrit ou brin informatif : brin d’ADN servant de matrice à la transcription.\nL’autre brin est le brin non transcrit.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p03_q5",
            "type": "mcq",
            "prompt": "Le brin d’ADN servant de matrice est appelé :",
            "options": [
              "Brin codant ou brin transcrit",
              "Anticodon",
              "Codon initiateur",
              "Brin non transcrit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé donne ces trois noms au brin matrice."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La sortie de l’ARNm",
          "stepTheme": "La sortie de l’ARNm",
          "stepBadge": "La sortie de l’ARNm",
          "paragraphText": "Exemple d’enchaînement : après sa synthèse dans le noyau, l’ARNm sort du noyau.\nLa synthèse de la protéine se fera ensuite dans le cytoplasme, au niveau du ribosome.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p03_q6",
            "type": "mcq",
            "prompt": "Après la transcription, l’ARNm :",
            "options": [
              "Détruit les ribosomes",
              "Reste définitivement dans le noyau",
              "Sort du noyau vers le cytoplasme",
              "Se retransforme en ADN"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les résultats listent la sortie de l’ARNm du noyau comme deuxième événement."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p03_q1",
          "type": "mcq",
          "prompt": "La transcription aboutit à :",
          "options": [
            "La formation d’une protéine",
            "La duplication de tout l’ADN",
            "La formation de l’ARNm à partir de l’ADN",
            "La formation des ribosomes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les résultats de la partie III placent en premier la synthèse de l’ARNm à partir de l’ADN, dans le noyau."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p03_q2",
          "type": "mcq",
          "prompt": "La transcription est catalysée par :",
          "options": [
            "L’ARN polymérase",
            "Le ribosome",
            "L’anticodon",
            "La peptidase seule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’activité lacunaire et l’interprétation nomment l’ARN polymérase comme enzyme de la transcription."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p03_q3",
          "type": "mcq",
          "prompt": "Pendant la transcription, l’ADN :",
          "options": [
            "Se transforme en protéine",
            "Se copie entièrement en deux ADN",
            "Disparaît du noyau",
            "S’ouvre localement et un seul brin sert de matrice"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’interprétation précise l’ouverture locale et le brin unique matrice."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p03_q4",
          "type": "mcq",
          "prompt": "Dans l’ARNm transcrit, à la place de la thymine on trouve :",
          "options": [
            "L’adénine",
            "L’uracile",
            "La guanine uniquement",
            "Aucune base"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé répète que l’uracile remplace la thymine au niveau de l’ARN."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p03_q5",
          "type": "mcq",
          "prompt": "Le brin d’ADN servant de matrice est appelé :",
          "options": [
            "Brin codant ou brin transcrit",
            "Anticodon",
            "Codon initiateur",
            "Brin non transcrit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé donne ces trois noms au brin matrice."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p03_q6",
          "type": "mcq",
          "prompt": "Après la transcription, l’ARNm :",
          "options": [
            "Détruit les ribosomes",
            "Reste définitivement dans le noyau",
            "Sort du noyau vers le cytoplasme",
            "Se retransforme en ADN"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les résultats listent la sortie de l’ARNm du noyau comme deuxième événement."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l06_synthese_proteines_p04",
      "order": 4,
      "title": "La traduction : initiation, élongation et terminaison dans le cytoplasme",
      "summary": "La traduction se fait dans le cytoplasme : l’initiation place l’ARNt de la méthionine au site P, l’élongation enchaîne les acides aminés par liaisons peptidiques, et un codon stop provoque la terminaison.",
      "conceptExplanation": "La traduction a lieu dans le cytoplasme et se fait en trois étapes : l’initiation, l’élongation et la terminaison ; elle fait intervenir les ARNt et les ribosomes, avec le code génétique.\nÀ l’initiation, le premier codon est toujours AUG, le codon initiateur correspondant à la méthionine : la petite sous-unité du ribosome et un ARNt se lient à une extrémité de l’ARNm ; cet ARNt porte la méthionine et un anticodon complémentaire au codon initiateur, et se positionne sur le site P du ribosome.\nÀ l’élongation, un nouveau ARNt se place au site A, en face du deuxième codon ; son anticodon est complémentaire et l’acide aminé qu’il porte correspond à ce codon selon le code génétique. Une liaison peptidique s’établit entre les deux acides aminés, le premier ARNt déchargé est libéré et le ribosome se déplace, et ainsi de suite. À la terminaison, la traduction s’arrête lorsque le ribosome rencontre un codon non-sens ou codon stop : il se produit une dissociation entre l’ARNm et la chaîne polypeptidique.",
      "keyRule": "Site P pour commencer, site A pour allonger, codon stop pour terminer.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le mécanisme de la traduction",
        "statement": "Complète : la traduction a lieu dans le … ; l’ARNt portant l’anticodon complémentaire se place au site P ; la liaison formée entre acides aminés est une liaison … ; le codon stop marque la …",
        "methodSteps": [
          "Le lieu est le cytoplasme et l’étape de démarrage est l’initiation.",
          "La liaison formée est la liaison peptidique, pendant l’élongation.",
          "Le codon stop marque la terminaison de la synthèse."
        ],
        "conclusion": "Le texte lacunaire corrigé enchaîne initiation, élongation et terminaison."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’initiation",
          "stepTheme": "L’initiation",
          "stepBadge": "L’initiation",
          "paragraphText": "• Initiation : première étape de la traduction, où la petite sous-unité du ribosome et un ARNt se lient à l’ARNm au niveau du codon initiateur.\nL’ARNt de la méthionine se positionne sur le site P.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p04_q1",
            "type": "mcq",
            "prompt": "À l’initiation, l’ARNt portant la méthionine se positionne sur :",
            "options": [
              "Le site A",
              "Le site P du ribosome",
              "L’ADN",
              "Le codon stop"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation place cet ARNt sur le site P du ribosome."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le site A et le deuxième codon",
          "stepTheme": "Le site A et le deuxième codon",
          "stepBadge": "Le site A et le deuxième codon",
          "paragraphText": "À l’élongation, un nouveau ARNt se place au site A du ribosome, en face du deuxième codon de l’ARNm.\nSon anticodon est complémentaire à ce deuxième codon.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p04_q2",
            "type": "mcq",
            "prompt": "Le nouvel ARNt de l’élongation se place :",
            "options": [
              "Sur l’ADN du noyau",
              "Sur un codon stop",
              "Au site P déjà occupé",
              "Au site A, en face du deuxième codon"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la description de l’élongation dans le résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La liaison peptidique",
          "stepTheme": "La liaison peptidique",
          "stepBadge": "La liaison peptidique",
          "paragraphText": "• Liaison peptidique : liaison qui s’établit entre les deux acides aminés voisins pendant l’élongation.\nElle construit progressivement la chaîne polypeptidique.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p04_q3",
            "type": "mcq",
            "prompt": "Entre les acides aminés qui se succèdent, il s’établit une liaison :",
            "options": [
              "Phosphorée du sol",
              "Hydrogène du sol",
              "Peptidique",
              "Calcique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé et le texte lacunaire nomment la liaison peptidique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le déplacement du ribosome",
          "stepTheme": "Le déplacement du ribosome",
          "stepBadge": "Le déplacement du ribosome",
          "paragraphText": "Méthode d’élongation : le premier ARNt déchargé de son acide aminé est libéré.\nLe ribosome se déplace de telle sorte que son site P soit occupé par le deuxième ARNt et que son site A soit libre pour un nouvel ARNt.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p04_q4",
            "type": "mcq",
            "prompt": "Après la liaison peptidique, le ribosome :",
            "options": [
              "Se déplace d’un codon, libérant le site A",
              "Retourne dans le noyau",
              "Se détruit",
              "Recopie l’ADN"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’interprétation décrit ce déplacement et la libération du premier ARNt."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La terminaison au codon stop",
          "stepTheme": "La terminaison au codon stop",
          "stepBadge": "La terminaison au codon stop",
          "paragraphText": "Piège : la traduction ne s’arrête pas à un codon quelconque.\nElle s’arrête lorsque le ribosome rencontre un codon non-sens ou codon stop, ne correspondant à aucun acide aminé.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p04_q5",
            "type": "mcq",
            "prompt": "La terminaison se produit quand le ribosome rencontre :",
            "options": [
              "Un deuxième ribosome",
              "La fin de l’ADN",
              "Le codon initiateur AUG",
              "Un codon stop, sans acide aminé correspondant"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé définit ainsi l’arrêt de la traduction, avec dissociation de l’ARNm et de la chaîne."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le polysome dans le tableau comparatif",
          "stepTheme": "Le polysome dans le tableau comparatif",
          "stepBadge": "Le polysome dans le tableau comparatif",
          "paragraphText": "Exemple du tableau corrigé : la formation de polysome est rangée du côté de la traduction.\nLa lecture de l’ARN messager et l’utilisation du code génétique y figurent aussi.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p04_q6",
            "type": "mcq",
            "prompt": "La formation de polysome est classée dans :",
            "options": [
              "Aucune étape",
              "La traduction",
              "La transcription",
              "La réplication"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé de l’activité range la formation de polysome dans la colonne traduction."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p04_q1",
          "type": "mcq",
          "prompt": "À l’initiation, l’ARNt portant la méthionine se positionne sur :",
          "options": [
            "Le site A",
            "Le site P du ribosome",
            "L’ADN",
            "Le codon stop"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation place cet ARNt sur le site P du ribosome."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p04_q2",
          "type": "mcq",
          "prompt": "Le nouvel ARNt de l’élongation se place :",
          "options": [
            "Sur l’ADN du noyau",
            "Sur un codon stop",
            "Au site P déjà occupé",
            "Au site A, en face du deuxième codon"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la description de l’élongation dans le résumé."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p04_q3",
          "type": "mcq",
          "prompt": "Entre les acides aminés qui se succèdent, il s’établit une liaison :",
          "options": [
            "Phosphorée du sol",
            "Hydrogène du sol",
            "Peptidique",
            "Calcique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé et le texte lacunaire nomment la liaison peptidique."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p04_q4",
          "type": "mcq",
          "prompt": "Après la liaison peptidique, le ribosome :",
          "options": [
            "Se déplace d’un codon, libérant le site A",
            "Retourne dans le noyau",
            "Se détruit",
            "Recopie l’ADN"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’interprétation décrit ce déplacement et la libération du premier ARNt."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p04_q5",
          "type": "mcq",
          "prompt": "La terminaison se produit quand le ribosome rencontre :",
          "options": [
            "Un deuxième ribosome",
            "La fin de l’ADN",
            "Le codon initiateur AUG",
            "Un codon stop, sans acide aminé correspondant"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé définit ainsi l’arrêt de la traduction, avec dissociation de l’ARNm et de la chaîne."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p04_q6",
          "type": "mcq",
          "prompt": "La formation de polysome est classée dans :",
          "options": [
            "Aucune étape",
            "La traduction",
            "La transcription",
            "La réplication"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé de l’activité range la formation de polysome dans la colonne traduction."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l06_synthese_proteines_p05",
      "order": 5,
      "title": "Lire le code génétique : ocytocine et vasopressine",
      "summary": "Deux hormones proches, l’ocytocine et la vasopressine, ne diffèrent que par le troisième et le huitième acides aminés de leur chaîne, ce qui montre le passage du brin d’ADN à la chaîne polypeptidique.",
      "conceptExplanation": "Portion du brin non codant de l’ADN pour l’ocytocine : TGC TAC ATC CAG AAC TGC CCC CTG GGC ; pour la vasopressine : TGC TAC TTC CAG AAC TGC CCA AGA GGA.\nLes brins codants élaborés sont, pour l’ocytocine : ACG ATG TAG GTC TTG ACG GGG GAC CCG ; pour la vasopressine : ACG ATG AAG GTC TTG ACG GGT TCT CCT.\nLes ARNm obtenus donnent, pour l’ocytocine : Cys, Tyr, Ileu, Gln, Asn, Cys, Pro, Leu, Gly ; pour la vasopressine : Cys, Tyr, Phe, Gln, Asn, Cys, Pro, Arg, Gly.\nLa différence entre les deux molécules se situe au niveau du troisième et du huitième acides aminés : au troisième, l’isoleucine de l’ocytocine est remplacée par la phénylalanine dans la vasopressine ; au huitième, la leucine de l’ocytocine est remplacée par l’arginine dans la vasopressine.",
      "keyRule": "Une petite différence de codons suffit à changer deux acides aminés de la chaîne.",
      "formulas": [],
      "workedExample": {
        "title": "Déterminer les deux chaînes polypeptidiques",
        "statement": "À partir des portions d’ADN des deux hormones et du code génétique, détermine leurs chaînes et explique leur différence.",
        "methodSteps": [
          "On élabore d’abord le brin codant de chaque ADN, complémentaire du brin non codant donné.",
          "On transcrit ensuite en ARNm, puis on traduit codon par codon.",
          "On compare enfin les deux chaînes acide aminé par acide aminé."
        ],
        "conclusion": "Les deux chaînes ne diffèrent qu’aux positions trois et huit."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le brin codant de l’ocytocine",
          "stepTheme": "Le brin codant de l’ocytocine",
          "stepBadge": "Le brin codant de l’ocytocine",
          "paragraphText": "Le brin codant s’élabore par complémentarité à partir du brin non codant donné.\nPour l’ocytocine, le corrigé donne la séquence commençant par ACG ATG TAG.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p05_q1",
            "type": "mcq",
            "prompt": "Le brin codant de l’ocytocine commence par :",
            "options": [
              "ACG ATG TAG",
              "TGC TAC ATC",
              "UGC UAC AUC",
              "CCC CTG GGC"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le début de la séquence du corrigé de la situation d’évaluation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’ARNm de l’ocytocine",
          "stepTheme": "L’ARNm de l’ocytocine",
          "stepBadge": "L’ARNm de l’ocytocine",
          "paragraphText": "L’ARNm de l’ocytocine commence par les codons UGC, UAC, AUC.\nIls correspondent aux premiers acides aminés Cys, Tyr puis Ileu.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p05_q2",
            "type": "mcq",
            "prompt": "Le troisième acide aminé de l’ocytocine est :",
            "options": [
              "L’arginine",
              "La leucine",
              "L’isoleucine",
              "La phénylalanine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La chaîne corrigée de l’ocytocine donne Ileu en troisième position."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le troisième acide aminé de la vasopressine",
          "stepTheme": "Le troisième acide aminé de la vasopressine",
          "stepBadge": "Le troisième acide aminé de la vasopressine",
          "paragraphText": "Dans la vasopressine, le troisième codon donne la phénylalanine.\nC’est la première différence avec l’ocytocine.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p05_q3",
            "type": "mcq",
            "prompt": "Dans la vasopressine, l’isoleucine de l’ocytocine est remplacée par :",
            "options": [
              "La glycine",
              "La phénylalanine",
              "La leucine",
              "La proline"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’explication du corrigé situe ce remplacement en troisième position."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le huitième acide aminé",
          "stepTheme": "Le huitième acide aminé",
          "stepBadge": "Le huitième acide aminé",
          "paragraphText": "Au huitième acide aminé, la leucine de l’ocytocine est remplacée par l’arginine dans la vasopressine.\nLes autres positions des deux chaînes sont identiques dans le corrigé.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p05_q4",
            "type": "mcq",
            "prompt": "Au huitième acide aminé, la vasopressine porte :",
            "options": [
              "La leucine",
              "La cystéine",
              "La tyrosine",
              "L’arginine"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le corrigé indique le remplacement de la leucine par l’arginine en huitième position."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Deux différences seulement",
          "stepTheme": "Deux différences seulement",
          "stepBadge": "Deux différences seulement",
          "paragraphText": "Piège : les deux hormones sont très proches, pas entièrement différentes.\nLe corrigé ne relève que deux positions différentes, la troisième et la huitième.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p05_q5",
            "type": "mcq",
            "prompt": "Les deux chaînes diffèrent au niveau :",
            "options": [
              "Uniquement du premier acide aminé",
              "D’aucune position",
              "Du troisième et du huitième acides aminés",
              "De toutes leurs positions"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la conclusion exacte du corrigé de la situation d’évaluation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’origine d’une anomalie : l’hémoglobine S",
          "stepTheme": "L’origine d’une anomalie : l’hémoglobine S",
          "stepBadge": "L’origine d’une anomalie : l’hémoglobine S",
          "paragraphText": "Exemple de la situation 1 : la chaîne bêta anormale de l’hémoglobine S diffère de la normale au sixième acide aminé, où la valine remplace l’acide glutamique.\nL’origine se situe au niveau de la dix-septième base azotée, où la thymine de l’ADN normal est remplacée par l’adénine dans l’ADN anormal.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p05_q6",
            "type": "mcq",
            "prompt": "Dans l’hémoglobine S, au sixième acide aminé, la valine remplace :",
            "options": [
              "L’acide glutamique",
              "L’histidine",
              "La leucine",
              "La proline"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé de comparaison des chaînes d’hémoglobine donne ce remplacement."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p05_q1",
          "type": "mcq",
          "prompt": "Le brin codant de l’ocytocine commence par :",
          "options": [
            "ACG ATG TAG",
            "TGC TAC ATC",
            "UGC UAC AUC",
            "CCC CTG GGC"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le début de la séquence du corrigé de la situation d’évaluation."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p05_q2",
          "type": "mcq",
          "prompt": "Le troisième acide aminé de l’ocytocine est :",
          "options": [
            "L’arginine",
            "La leucine",
            "L’isoleucine",
            "La phénylalanine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La chaîne corrigée de l’ocytocine donne Ileu en troisième position."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p05_q3",
          "type": "mcq",
          "prompt": "Dans la vasopressine, l’isoleucine de l’ocytocine est remplacée par :",
          "options": [
            "La glycine",
            "La phénylalanine",
            "La leucine",
            "La proline"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’explication du corrigé situe ce remplacement en troisième position."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p05_q4",
          "type": "mcq",
          "prompt": "Au huitième acide aminé, la vasopressine porte :",
          "options": [
            "La leucine",
            "La cystéine",
            "La tyrosine",
            "L’arginine"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le corrigé indique le remplacement de la leucine par l’arginine en huitième position."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p05_q5",
          "type": "mcq",
          "prompt": "Les deux chaînes diffèrent au niveau :",
          "options": [
            "Uniquement du premier acide aminé",
            "D’aucune position",
            "Du troisième et du huitième acides aminés",
            "De toutes leurs positions"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la conclusion exacte du corrigé de la situation d’évaluation."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p05_q6",
          "type": "mcq",
          "prompt": "Dans l’hémoglobine S, au sixième acide aminé, la valine remplace :",
          "options": [
            "L’acide glutamique",
            "L’histidine",
            "La leucine",
            "La proline"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé de comparaison des chaînes d’hémoglobine donne ce remplacement."
        }
      ]
    }
  ]
};
