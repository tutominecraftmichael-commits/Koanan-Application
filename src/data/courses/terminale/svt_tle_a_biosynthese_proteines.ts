import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT TA_L7_La biosynthèse des protéines.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const SVT_TLE_A_L07_BIOSYNTHESE_PROTEINES: CurriculumChapter = {
  "id": "terminale_a_svt_l07_biosynthese_proteines",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 7,
  "title": "Leçon 7 : La biosynthèse des protéines",
  "summary": "Les acteurs (ADN, ARN, ribosome), le code génétique, la transcription et la traduction, traduire une séquence (ocytocine et vasopressine), les mutations (albinisme).",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "SVT TA_L7_La biosynthèse des protéines.pdf",
  "points": [
    {
      "id": "terminale_a_svt_l07_biosynthese_proteines_p01",
      "order": 1,
      "title": "Les acteurs de la synthèse des protéines",
      "summary": "ADN, ARN messager, ARN de transfert, ARN ribosomial et ribosome.",
      "conceptExplanation": "Situation : une vidéo montre la synthèse des protéines dans une cellule. Les protéines ne se forment pas au hasard. Hypothèses : la cellule synthétise les protéines grâce à des acteurs, selon un code et selon un mécanisme.\n\nRappel : une protéine est une grosse molécule formée d'une chaîne d'ACIDES AMINÉS (il en existe 20 sortes), reliés par des liaisons peptidiques.\n\nLes acteurs :\n- l'ADN (acide désoxyribonucléique) : deux brins complémentaires (bicaténaire), situé dans le NOYAU ; ses bases sont A, T, C, G. Un GÈNE est une petite portion d'ADN qui contient l'information pour fabriquer une protéine ;\n- l'ARN (acide ribonucléique) : un seul brin (monocaténaire) ; ses bases sont A, U, C, G (l'uracile U remplace la thymine T). Trois types :\n  · l'ARN messager (ARNm) : copie de l'information d'un gène, il va du noyau au cytoplasme ;\n  · l'ARN de transfert (ARNt) : forme particulière ; il porte un acide aminé et un ANTICODON (3 bases) ;\n  · l'ARN ribosomial (ARNr) : il forme les ribosomes avec des protéines ;\n- le RIBOSOME : formé d'une petite et d'une grande sous-unité ; c'est l'« atelier » où la protéine est assemblée, dans le cytoplasme.\n\nConclusion : la cellule synthétise les protéines grâce à l'ADN, aux ARN et aux ribosomes.",
      "keyRule": "ADN (2 brins, noyau, A-T-C-G) → ARNm (1 brin, A-U-C-G) → ribosome + ARNt (porte l'acide aminé) → protéine.",
      "formulas": [],
      "workedExample": {
        "title": "ADN ou ARN ?",
        "statement": "Une molécule à un seul brin contient les bases A, U, C et G. Est-ce de l'ADN ou de l'ARN ?",
        "methodSteps": [
          "Un seul brin : caractère de l'ARN.",
          "La base U (uracile) n'existe que dans l'ARN ; l'ADN a T à la place."
        ],
        "conclusion": "C'est de l'ARN."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une protéine",
          "stepTheme": "Une protéine",
          "stepBadge": "Une protéine",
          "paragraphText": "Une protéine est une grosse molécule formée d'une chaîne d'acides aminés reliés par des liaisons peptidiques.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q1",
            "type": "mcq",
            "prompt": "Quelles sont les sous-unités qui forment une protéine ?",
            "options": [
              "Des molécules de glucose",
              "Des acides gras",
              "Des acides aminés",
              "Des nucléotides"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les acides aminés sont reliés par des liaisons peptidiques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'ADN",
          "stepTheme": "L'ADN",
          "stepBadge": "L'ADN",
          "paragraphText": "L'ADN est formé de deux brins complémentaires (bicaténaire) et se trouve dans le noyau.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q2",
            "type": "mcq",
            "prompt": "Parmi les acteurs de la synthèse des protéines, lequel est formé de deux brins complémentaires et se trouve dans le noyau ?",
            "options": [
              "L'ARN messager",
              "L'ADN",
              "Le ribosome",
              "L'ARN de transfert"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les ARN n'ont qu'un seul brin."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le gène",
          "stepTheme": "Le gène",
          "stepBadge": "Le gène",
          "paragraphText": "Un gène est un segment d'ADN qui contient l'information pour fabriquer une protéine et programme un caractère.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un gène ?",
            "options": [
              "Une protéine",
              "Un segment d'ADN qui programme un caractère (une protéine)",
              "Un acide aminé",
              "Un ribosome"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est une très petite portion de chromosome."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les bases de l'ARN",
          "stepTheme": "Les bases de l'ARN",
          "stepBadge": "Les bases de l'ARN",
          "paragraphText": "L'ARN a un seul brin ; ses bases sont A, U, C et G : l'uracile (U) remplace la thymine (T) de l'ADN.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q4",
            "type": "mcq",
            "prompt": "Parmi ces bases (adénine, uracile, cytosine, guanine, thymine), laquelle n'existe PAS dans l'ARN ?",
            "options": [
              "L'adénine",
              "L'uracile",
              "La guanine",
              "La thymine"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Dans l'ARN, l'uracile remplace la thymine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Trois ARN",
          "stepTheme": "Trois ARN",
          "stepBadge": "Trois ARN",
          "paragraphText": "On distingue l'ARN messager (ARNm), l'ARN de transfert (ARNt) et l'ARN ribosomial (ARNr).",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q5",
            "type": "mcq",
            "prompt": "Quel ARN porte un acide aminé et un anticodon, et l'apporte au ribosome ?",
            "options": [
              "L'ARN messager",
              "L'ARN de transfert",
              "L'ARN ribosomial",
              "L'ADN"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il « transfère » les acides aminés vers le ribosome."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le ribosome",
          "stepTheme": "Le ribosome",
          "stepBadge": "Le ribosome",
          "paragraphText": "Le ribosome, formé d'une petite et d'une grande sous-unité, est le lieu d'assemblage de la protéine, dans le cytoplasme.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q6",
            "type": "mcq",
            "prompt": "De combien de sous-unités est composé un ribosome, et où se trouve-t-il ?",
            "options": [
              "Une seule sous-unité, dans le noyau",
              "Deux sous-unités (une petite et une grande), dans le cytoplasme",
              "Trois sous-unités, dans l'ADN",
              "Quatre sous-unités, dans le sang"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il lit l'ARNm et assemble les acides aminés."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Reconnaître la molécule",
          "stepTheme": "Reconnaître la molécule",
          "stepBadge": "Reconnaître la molécule",
          "paragraphText": "Un seul brin et la base U : c'est de l'ARN. Deux brins et la base T : c'est de l'ADN.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q7",
            "type": "mcq",
            "prompt": "Une molécule à un seul brin contient la séquence AUG UGC GCU. S'agit-il d'ADN ou d'ARN ?",
            "options": [
              "D'ADN, car elle contient G",
              "D'ARN, car elle contient U et n'a qu'un brin",
              "D'une protéine",
              "D'un acide aminé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "U (uracile) n'existe que dans l'ARN."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q1",
          "type": "mcq",
          "prompt": "Quelles sont les sous-unités qui forment une protéine ?",
          "options": [
            "Des molécules de glucose",
            "Des acides gras",
            "Des acides aminés",
            "Des nucléotides"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les acides aminés sont reliés par des liaisons peptidiques."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q2",
          "type": "mcq",
          "prompt": "Parmi les acteurs de la synthèse des protéines, lequel est formé de deux brins complémentaires et se trouve dans le noyau ?",
          "options": [
            "L'ARN messager",
            "L'ADN",
            "Le ribosome",
            "L'ARN de transfert"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les ARN n'ont qu'un seul brin."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un gène ?",
          "options": [
            "Une protéine",
            "Un segment d'ADN qui programme un caractère (une protéine)",
            "Un acide aminé",
            "Un ribosome"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est une très petite portion de chromosome."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q4",
          "type": "mcq",
          "prompt": "Parmi ces bases (adénine, uracile, cytosine, guanine, thymine), laquelle n'existe PAS dans l'ARN ?",
          "options": [
            "L'adénine",
            "L'uracile",
            "La guanine",
            "La thymine"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Dans l'ARN, l'uracile remplace la thymine."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q5",
          "type": "mcq",
          "prompt": "Quel ARN porte un acide aminé et un anticodon, et l'apporte au ribosome ?",
          "options": [
            "L'ARN messager",
            "L'ARN de transfert",
            "L'ARN ribosomial",
            "L'ADN"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il « transfère » les acides aminés vers le ribosome."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q6",
          "type": "mcq",
          "prompt": "De combien de sous-unités est composé un ribosome, et où se trouve-t-il ?",
          "options": [
            "Une seule sous-unité, dans le noyau",
            "Deux sous-unités (une petite et une grande), dans le cytoplasme",
            "Trois sous-unités, dans l'ADN",
            "Quatre sous-unités, dans le sang"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il lit l'ARNm et assemble les acides aminés."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p01_q7",
          "type": "mcq",
          "prompt": "Une molécule à un seul brin contient la séquence AUG UGC GCU. S'agit-il d'ADN ou d'ARN ?",
          "options": [
            "D'ADN, car elle contient G",
            "D'ARN, car elle contient U et n'a qu'un brin",
            "D'une protéine",
            "D'un acide aminé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "U (uracile) n'existe que dans l'ARN."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l07_biosynthese_proteines_p02",
      "order": 2,
      "title": "Le code génétique",
      "summary": "64 codons, 20 acides aminés : un code universel, redondant et non ambigu.",
      "conceptExplanation": "Le code génétique est le système de correspondance entre les CODONS de l'ARNm et les 20 acides aminés.\n\n- Un codon est un triplet de nucléotides (3 bases) de l'ARNm, par exemple AUG.\n- Avec 4 bases (U, C, A, G) prises 3 par 3, on obtient 4 × 4 × 4 = 64 codons.\n- 61 codons désignent un acide aminé.\n- 3 codons ne désignent aucun acide aminé : UAA, UAG et UGA. Ce sont les codons STOP (ou codons non-sens) : ils arrêtent la synthèse.\n- La synthèse commence toujours par le codon AUG (méthionine) : c'est le codon INITIATEUR.\n\nPropriétés :\n- REDONDANT (ou dégénéré) : plusieurs codons peuvent coder le même acide aminé (de 1 à 6 codons selon l'acide aminé ; par exemple la leucine a 6 codons). Le document dit « de 2 à 4 » : c'est inexact, la méthionine et le tryptophane n'ont qu'un codon, la leucine, la sérine et l'arginine en ont six.\n- NON AMBIGU : un codon donné ne correspond qu'à un seul acide aminé.\n- UNIVERSEL : c'est le même code chez presque tous les êtres vivants (bactéries, plantes, animaux, homme).\n\nL'ANTICODON est le triplet de bases porté par l'ARNt, complémentaire du codon de l'ARNm (exemple : codon AUG, anticodon UAC).",
      "keyRule": "Codon = 3 bases de l'ARNm. 64 codons : 61 codent un acide aminé, 3 stop (UAA, UAG, UGA). AUG = initiateur (méthionine). Code redondant, non ambigu, universel.",
      "formulas": [],
      "workedExample": {
        "title": "Pourquoi 64 codons ?",
        "statement": "L'ARN a 4 bases (U, C, A, G). Combien de codons différents de 3 bases peut-on former ?",
        "methodSteps": [
          "4 choix pour la 1re base, 4 pour la 2e, 4 pour la 3e.",
          "4 × 4 × 4 = 64."
        ],
        "conclusion": "64 codons, pour seulement 20 acides aminés : le code est redondant."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le codon",
          "stepTheme": "Le codon",
          "stepBadge": "Le codon",
          "paragraphText": "Un codon est un triplet de bases (3 nucléotides) de l'ARN messager.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q1",
            "type": "mcq",
            "prompt": "Le mot « codon » désigne une séquence de 3 nucléotides. De quelle molécule ?",
            "options": [
              "De l'ARN de transfert",
              "De l'ARN ribosomial",
              "De l'ARN messager",
              "D'une protéine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le triplet de l'ARNt s'appelle l'anticodon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "64 codons",
          "stepTheme": "64 codons",
          "stepBadge": "64 codons",
          "paragraphText": "Avec 4 bases prises 3 par 3 : 4 × 4 × 4 = 64 codons.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q2",
            "type": "mcq",
            "prompt": "L'ARN possède 4 bases (U, C, A, G) et un codon est formé de 3 bases. Combien de codons différents existe-t-il ?",
            "options": [
              "12",
              "20",
              "64",
              "81"
            ],
            "correctAnswerIndex": 2,
            "explanation": "4 × 4 × 4 = 64."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les codons stop",
          "stepTheme": "Les codons stop",
          "stepBadge": "Les codons stop",
          "paragraphText": "UAA, UAG et UGA ne correspondent à aucun acide aminé : ce sont les codons stop (non-sens), qui arrêtent la synthèse.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q3",
            "type": "mcq",
            "prompt": "Les codons UAA, UAG et UGA ne correspondent à aucun acide aminé. Comment les appelle-t-on ?",
            "options": [
              "Des codons initiateurs",
              "Des codons stop (ou non-sens)",
              "Des anticodons",
              "Des codons redondants"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ils marquent la fin de la protéine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le codon initiateur",
          "stepTheme": "Le codon initiateur",
          "stepBadge": "Le codon initiateur",
          "paragraphText": "La synthèse d'une protéine commence toujours par le codon AUG, qui code la méthionine : c'est le codon initiateur.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q4",
            "type": "mcq",
            "prompt": "Par quel codon commence toujours la synthèse d'une protéine, et quel acide aminé code-t-il ?",
            "options": [
              "UAA, aucun acide aminé",
              "AUG, la méthionine",
              "UGG, le tryptophane",
              "GGC, la glycine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "AUG est le codon initiateur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Redondant",
          "stepTheme": "Redondant",
          "stepBadge": "Redondant",
          "paragraphText": "Plusieurs codons peuvent coder le même acide aminé : le code est redondant (dégénéré). Exemple : CUU, CUC, CUA, CUG, UUA, UUG codent tous la leucine.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q5",
            "type": "mcq",
            "prompt": "Les codons CUU, CUC, CUA, CUG, UUA et UUG codent tous la leucine. Quelle propriété du code génétique cela illustre-t-il ?",
            "options": [
              "Il est redondant (plusieurs codons pour un même acide aminé)",
              "Il est ambigu",
              "Il n'est pas universel",
              "Il est stop"
            ],
            "correctAnswerIndex": 0,
            "explanation": "64 codons pour 20 acides aminés : il y a forcément des « synonymes »."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Non ambigu et universel",
          "stepTheme": "Non ambigu et universel",
          "stepBadge": "Non ambigu et universel",
          "paragraphText": "Un codon ne correspond qu'à un seul acide aminé (non ambigu). Le code est le même chez presque tous les êtres vivants (universel).",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q6",
            "type": "mcq",
            "prompt": "Le codon UGG code le tryptophane chez l'homme, chez la bactérie et chez le maïs. Quelle propriété du code génétique cela montre-t-il ?",
            "options": [
              "Il est universel",
              "Il est redondant",
              "Il est ambigu",
              "Il est stop"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est pourquoi une bactérie peut fabriquer une protéine humaine (insuline)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "L'anticodon",
          "stepTheme": "L'anticodon",
          "stepBadge": "L'anticodon",
          "paragraphText": "L'anticodon est le triplet de bases de l'ARNt, complémentaire du codon de l'ARNm (A avec U, C avec G).",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q7",
            "type": "mcq",
            "prompt": "Le codon initiateur de l'ARNm est AUG. Sachant que A s'associe à U et C à G, quel est l'anticodon de l'ARNt qui lui correspond ?",
            "options": [
              "AUG",
              "UAC",
              "TAC",
              "GUA"
            ],
            "correctAnswerIndex": 1,
            "explanation": "A→U, U→A, G→C : UAC (sans T, car c'est de l'ARN)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q1",
          "type": "mcq",
          "prompt": "Le mot « codon » désigne une séquence de 3 nucléotides. De quelle molécule ?",
          "options": [
            "De l'ARN de transfert",
            "De l'ARN ribosomial",
            "De l'ARN messager",
            "D'une protéine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le triplet de l'ARNt s'appelle l'anticodon."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q2",
          "type": "mcq",
          "prompt": "L'ARN possède 4 bases (U, C, A, G) et un codon est formé de 3 bases. Combien de codons différents existe-t-il ?",
          "options": [
            "12",
            "20",
            "64",
            "81"
          ],
          "correctAnswerIndex": 2,
          "explanation": "4 × 4 × 4 = 64."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q3",
          "type": "mcq",
          "prompt": "Les codons UAA, UAG et UGA ne correspondent à aucun acide aminé. Comment les appelle-t-on ?",
          "options": [
            "Des codons initiateurs",
            "Des codons stop (ou non-sens)",
            "Des anticodons",
            "Des codons redondants"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ils marquent la fin de la protéine."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q4",
          "type": "mcq",
          "prompt": "Par quel codon commence toujours la synthèse d'une protéine, et quel acide aminé code-t-il ?",
          "options": [
            "UAA, aucun acide aminé",
            "AUG, la méthionine",
            "UGG, le tryptophane",
            "GGC, la glycine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "AUG est le codon initiateur."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q5",
          "type": "mcq",
          "prompt": "Les codons CUU, CUC, CUA, CUG, UUA et UUG codent tous la leucine. Quelle propriété du code génétique cela illustre-t-il ?",
          "options": [
            "Il est redondant (plusieurs codons pour un même acide aminé)",
            "Il est ambigu",
            "Il n'est pas universel",
            "Il est stop"
          ],
          "correctAnswerIndex": 0,
          "explanation": "64 codons pour 20 acides aminés : il y a forcément des « synonymes »."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q6",
          "type": "mcq",
          "prompt": "Le codon UGG code le tryptophane chez l'homme, chez la bactérie et chez le maïs. Quelle propriété du code génétique cela montre-t-il ?",
          "options": [
            "Il est universel",
            "Il est redondant",
            "Il est ambigu",
            "Il est stop"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est pourquoi une bactérie peut fabriquer une protéine humaine (insuline)."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p02_q7",
          "type": "mcq",
          "prompt": "Le codon initiateur de l'ARNm est AUG. Sachant que A s'associe à U et C à G, quel est l'anticodon de l'ARNt qui lui correspond ?",
          "options": [
            "AUG",
            "UAC",
            "TAC",
            "GUA"
          ],
          "correctAnswerIndex": 1,
          "explanation": "A→U, U→A, G→C : UAC (sans T, car c'est de l'ARN)."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l07_biosynthese_proteines_p03",
      "order": 3,
      "title": "La transcription : de l'ADN à l'ARN messager",
      "summary": "Dans le noyau, l'ARN polymérase copie un gène en ARNm.",
      "conceptExplanation": "La transcription a lieu dans le NOYAU.\n1. La molécule d'ADN s'ouvre localement, au niveau du gène dont la cellule a besoin.\n2. Une enzyme, l'ARN POLYMÉRASE, se déplace le long d'un des deux brins (le brin qui sert de matrice) et assemble des nucléotides libres (ribonucléotides précurseurs) par complémentarité. Il faut de l'énergie.\n3. Il se forme un ARN messager, qui sort ensuite du noyau vers le cytoplasme.\n\nCorrection du document : l'enzyme de la transcription est l'ARN polymérase (le document écrit d'abord « ADN polymérase », qui sert à copier l'ADN lors de la division cellulaire).\n\nRègles de complémentarité pour la transcription (base de l'ADN matrice → base de l'ARNm) :\n- A → U ; T → A ; C → G ; G → C.\n\nNoms des brins dans ce cours : le brin qui sert de matrice est appelé brin CODANT (ou brin transcrit, ou brin informatif) ; l'autre est le brin NON CODANT (non transcrit). L'ARNm est complémentaire du brin codant, et il a la même séquence que le brin non codant, avec U à la place de T.\n(Attention : dans certains manuels étrangers, les noms « codant » et « non codant » sont inversés. Retiens la règle : l'ARNm est COMPLÉMENTAIRE du brin transcrit.)\n\nExemple du document :\n- brin 1 (codant, transcrit) : AGC TAC GGA TAA GCT TGA\n- brin 2 (non codant) : TCG ATG CCT ATT CGA TCT\n- ARNm : UCG AUG CCU AUU CGA UCU",
      "keyRule": "Transcription (noyau, ARN polymérase) : ARNm complémentaire du brin transcrit (A→U, T→A, C→G, G→C) = même séquence que l'autre brin, avec U au lieu de T.",
      "formulas": [],
      "workedExample": {
        "title": "Transcrire une séquence",
        "statement": "Le brin transcrit (brin codant) d'un gène est TAC ACG CGA. Écris l'ARNm.",
        "methodSteps": [
          "On remplace chaque base par sa complémentaire, avec U au lieu de T.",
          "TAC → AUG ; ACG → UGC ; CGA → GCU."
        ],
        "conclusion": "ARNm : AUG UGC GCU."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Où ?",
          "stepTheme": "Où ?",
          "stepBadge": "Où ?",
          "paragraphText": "La transcription de l'ADN en ARN messager se déroule dans le noyau.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q1",
            "type": "mcq",
            "prompt": "Dans quelle partie de la cellule se déroule la transcription de l'ADN en ARN messager ?",
            "options": [
              "Dans le noyau",
              "Dans le cytoplasme, sur le ribosome",
              "Dans la membrane",
              "Dans le sang"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ADN reste dans le noyau ; l'ARNm en sort ensuite."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "La bonne enzyme",
          "stepTheme": "La bonne enzyme",
          "stepBadge": "La bonne enzyme",
          "paragraphText": "L'enzyme qui fabrique l'ARNm est l'ARN polymérase (et non l'ADN polymérase).",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q2",
            "type": "mcq",
            "prompt": "Quelle enzyme se déplace le long du gène et assemble les nucléotides pour fabriquer l'ARN messager ?",
            "options": [
              "L'ADN polymérase",
              "L'ARN polymérase",
              "L'amylase",
              "La pepsine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document écrit d'abord « ADN polymérase » : c'est une erreur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La complémentarité",
          "stepTheme": "La complémentarité",
          "stepBadge": "La complémentarité",
          "paragraphText": "Lors de la transcription : A de l'ADN donne U dans l'ARNm, T donne A, C donne G et G donne C.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q3",
            "type": "mcq",
            "prompt": "Lors de la transcription, une base A (adénine) du brin transcrit de l'ADN fait placer quelle base dans l'ARN messager ?",
            "options": [
              "T (thymine)",
              "U (uracile)",
              "A (adénine)",
              "C (cytosine)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ARN n'a pas de T : U s'associe à A."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Transcrire",
          "stepTheme": "Transcrire",
          "stepBadge": "Transcrire",
          "paragraphText": "Brin transcrit TAC ACG CGA → ARNm AUG UGC GCU (on prend les complémentaires, avec U au lieu de T).",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q4",
            "type": "mcq",
            "prompt": "Le brin transcrit (brin codant) de l'ADN est TAC ACG CGA. Avec les règles A→U, T→A, C→G, G→C, quel est l'ARN messager ?",
            "options": [
              "TAC ACG CGA",
              "AUG UGC GCU",
              "ATG TGC GCT",
              "UAC ACG CGA"
            ],
            "correctAnswerIndex": 1,
            "explanation": "TAC → AUG ; ACG → UGC ; CGA → GCU."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Depuis le brin non codant",
          "stepTheme": "Depuis le brin non codant",
          "stepBadge": "Depuis le brin non codant",
          "paragraphText": "L'ARNm a la même séquence que le brin non codant, avec U à la place de T. Exemple : TGC TAC → UGC UAC.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q5",
            "type": "mcq",
            "prompt": "Le brin NON codant (non transcrit) d'un gène est TGC TAC ATC. L'ARNm a la même séquence que ce brin, avec U à la place de T. Quel est l'ARNm ?",
            "options": [
              "ACG ATG TAG",
              "UGC UAC AUC",
              "TGC TAC ATC",
              "ACG AUG UAG"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On remplace simplement chaque T par U."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Le brin complémentaire",
          "stepTheme": "Le brin complémentaire",
          "stepBadge": "Le brin complémentaire",
          "paragraphText": "Dans l'ADN, A s'associe à T et C à G. Le brin complémentaire de TAC ACG est ATG TGC.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q6",
            "type": "mcq",
            "prompt": "Dans l'ADN, A s'associe à T et C s'associe à G. Quel est le brin d'ADN complémentaire de TAC ACG CGA ?",
            "options": [
              "AUG UGC GCU",
              "ATG TGC GCT",
              "TAC ACG CGA",
              "CGT GTA TAC"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans l'ADN, on garde T (pas de U)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "La sortie du noyau",
          "stepTheme": "La sortie du noyau",
          "stepBadge": "La sortie du noyau",
          "paragraphText": "Une fois formé, l'ARN messager sort du noyau et passe dans le cytoplasme, où se fait la traduction.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q7",
            "type": "mcq",
            "prompt": "Dans la synthèse des protéines, quel est le bon ordre des événements ?",
            "options": [
              "Traduction dans le noyau, puis transcription dans le cytoplasme",
              "Transcription dans le noyau, sortie de l'ARNm, puis traduction dans le cytoplasme",
              "Traduction, puis transcription, dans le sang",
              "Tout se passe dans l'ADN"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La transcription précède la traduction."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q1",
          "type": "mcq",
          "prompt": "Dans quelle partie de la cellule se déroule la transcription de l'ADN en ARN messager ?",
          "options": [
            "Dans le noyau",
            "Dans le cytoplasme, sur le ribosome",
            "Dans la membrane",
            "Dans le sang"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ADN reste dans le noyau ; l'ARNm en sort ensuite."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q2",
          "type": "mcq",
          "prompt": "Quelle enzyme se déplace le long du gène et assemble les nucléotides pour fabriquer l'ARN messager ?",
          "options": [
            "L'ADN polymérase",
            "L'ARN polymérase",
            "L'amylase",
            "La pepsine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document écrit d'abord « ADN polymérase » : c'est une erreur."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q3",
          "type": "mcq",
          "prompt": "Lors de la transcription, une base A (adénine) du brin transcrit de l'ADN fait placer quelle base dans l'ARN messager ?",
          "options": [
            "T (thymine)",
            "U (uracile)",
            "A (adénine)",
            "C (cytosine)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ARN n'a pas de T : U s'associe à A."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q4",
          "type": "mcq",
          "prompt": "Le brin transcrit (brin codant) de l'ADN est TAC ACG CGA. Avec les règles A→U, T→A, C→G, G→C, quel est l'ARN messager ?",
          "options": [
            "TAC ACG CGA",
            "AUG UGC GCU",
            "ATG TGC GCT",
            "UAC ACG CGA"
          ],
          "correctAnswerIndex": 1,
          "explanation": "TAC → AUG ; ACG → UGC ; CGA → GCU."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q5",
          "type": "mcq",
          "prompt": "Le brin NON codant (non transcrit) d'un gène est TGC TAC ATC. L'ARNm a la même séquence que ce brin, avec U à la place de T. Quel est l'ARNm ?",
          "options": [
            "ACG ATG TAG",
            "UGC UAC AUC",
            "TGC TAC ATC",
            "ACG AUG UAG"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On remplace simplement chaque T par U."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q6",
          "type": "mcq",
          "prompt": "Dans l'ADN, A s'associe à T et C s'associe à G. Quel est le brin d'ADN complémentaire de TAC ACG CGA ?",
          "options": [
            "AUG UGC GCU",
            "ATG TGC GCT",
            "TAC ACG CGA",
            "CGT GTA TAC"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans l'ADN, on garde T (pas de U)."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p03_q7",
          "type": "mcq",
          "prompt": "Dans la synthèse des protéines, quel est le bon ordre des événements ?",
          "options": [
            "Traduction dans le noyau, puis transcription dans le cytoplasme",
            "Transcription dans le noyau, sortie de l'ARNm, puis traduction dans le cytoplasme",
            "Traduction, puis transcription, dans le sang",
            "Tout se passe dans l'ADN"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La transcription précède la traduction."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l07_biosynthese_proteines_p04",
      "order": 4,
      "title": "La traduction : de l'ARN messager à la protéine",
      "summary": "Initiation, élongation, terminaison sur le ribosome.",
      "conceptExplanation": "La traduction a lieu dans le CYTOPLASME, sur les ribosomes. Elle utilise l'ARNm, les ARNt chargés d'acides aminés, et de l'énergie. Trois étapes :\n\n1. L'INITIATION : la petite sous-unité du ribosome se fixe sur l'ARNm au niveau du codon initiateur AUG. Un ARNt portant la méthionine, avec l'anticodon UAC, s'y place (site P). La grande sous-unité vient compléter le ribosome.\n\n2. L'ÉLONGATION : un nouvel ARNt se place au site A, en face du 2e codon ; son anticodon est complémentaire de ce codon, et il porte l'acide aminé correspondant selon le code génétique. Une LIAISON PEPTIDIQUE se forme entre les deux acides aminés. Le premier ARNt, déchargé, est libéré ; le ribosome avance d'un codon. Et ainsi de suite.\n\n3. La TERMINAISON : quand le ribosome rencontre un codon STOP (UAA, UAG ou UGA), aucun ARNt ne correspond : la chaîne d'acides aminés (polypeptide) est libérée et le ribosome se sépare de l'ARNm.\n\nVitesse : une chaîne de 400 acides aminés est fabriquée en moins de 20 secondes, soit environ 1/20 de seconde par acide aminé (20 ÷ 400 = 0,05 s).\n\nConclusion : la synthèse des protéines se fait selon un mécanisme en deux grandes étapes : la transcription (noyau) et la traduction (cytoplasme).",
      "keyRule": "Traduction (cytoplasme, ribosome) : initiation (AUG, méthionine) → élongation (ARNt au site A, liaison peptidique, le ribosome avance) → terminaison (codon stop).",
      "formulas": [],
      "workedExample": {
        "title": "Une question de vitesse",
        "statement": "Une protéine de 400 acides aminés est fabriquée en 20 secondes. Combien de temps faut-il pour ajouter un acide aminé ?",
        "methodSteps": [
          "On divise le temps par le nombre d'acides aminés : 20 ÷ 400.",
          "20 ÷ 400 = 0,05 s, soit 1/20 de seconde."
        ],
        "conclusion": "Environ 1/20 de seconde par acide aminé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Où ?",
          "stepTheme": "Où ?",
          "stepBadge": "Où ?",
          "paragraphText": "La traduction a lieu dans le cytoplasme, sur les ribosomes.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q1",
            "type": "mcq",
            "prompt": "Où se déroule la traduction de l'ARN messager en protéine ?",
            "options": [
              "Dans le noyau, sur l'ADN",
              "Dans le cytoplasme, sur les ribosomes",
              "Dans le sang",
              "Dans la membrane du noyau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La transcription, elle, se fait dans le noyau."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Trois étapes",
          "stepTheme": "Trois étapes",
          "stepBadge": "Trois étapes",
          "paragraphText": "La traduction comprend trois étapes : l'initiation, l'élongation et la terminaison.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q2",
            "type": "mcq",
            "prompt": "Quelles sont, dans l'ordre, les trois étapes de la traduction ?",
            "options": [
              "Terminaison, élongation, initiation",
              "Initiation, élongation, terminaison",
              "Transcription, traduction, terminaison",
              "Acquisition, consolidation, restitution"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On commence, on allonge la chaîne, on termine."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'initiation",
          "stepTheme": "L'initiation",
          "stepBadge": "L'initiation",
          "paragraphText": "À l'initiation, le ribosome se place sur le codon AUG ; un ARNt portant la méthionine (anticodon UAC) s'installe au site P.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q3",
            "type": "mcq",
            "prompt": "Pendant l'initiation de la traduction, sur quel codon le ribosome se place-t-il, et quel acide aminé est mis en place en premier ?",
            "options": [
              "UAA, aucun",
              "AUG, la méthionine",
              "UGC, la cystéine",
              "GGC, la glycine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "AUG est le codon initiateur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La liaison peptidique",
          "stepTheme": "La liaison peptidique",
          "stepBadge": "La liaison peptidique",
          "paragraphText": "Pendant l'élongation, une liaison peptidique se forme entre l'acide aminé déjà en place et le nouvel acide aminé apporté par l'ARNt.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q4",
            "type": "mcq",
            "prompt": "Pendant l'élongation, un nouvel ARNt se place au site A du ribosome. Quelle liaison se forme alors entre les deux acides aminés ?",
            "options": [
              "Une liaison peptidique",
              "Une liaison hydrogène entre bases",
              "Une liaison ionique avec le sel",
              "Aucune liaison"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la liaison qui relie les acides aminés d'une protéine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le ribosome avance",
          "stepTheme": "Le ribosome avance",
          "stepBadge": "Le ribosome avance",
          "paragraphText": "Après chaque liaison, l'ARNt déchargé est libéré et le ribosome avance d'un codon sur l'ARNm.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q5",
            "type": "mcq",
            "prompt": "Pendant l'élongation, après la formation d'une liaison peptidique, que fait le ribosome ?",
            "options": [
              "Il retourne dans le noyau",
              "Il avance d'un codon sur l'ARNm",
              "Il détruit l'ARNm",
              "Il se transforme en ADN"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il lit l'ARNm codon après codon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La terminaison",
          "stepTheme": "La terminaison",
          "stepBadge": "La terminaison",
          "paragraphText": "La traduction s'arrête quand le ribosome rencontre un codon stop (UAA, UAG ou UGA) : la chaîne polypeptidique est libérée.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q6",
            "type": "mcq",
            "prompt": "Le ribosome lit l'ARNm AUG UGC GCU UGA. Sachant que UGA est un codon stop, combien d'acides aminés aura la chaîne fabriquée ?",
            "options": [
              "2",
              "3",
              "4",
              "5"
            ],
            "correctAnswerIndex": 1,
            "explanation": "AUG, UGC, GCU donnent 3 acides aminés ; UGA arrête la synthèse."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Une machine rapide",
          "stepTheme": "Une machine rapide",
          "stepBadge": "Une machine rapide",
          "paragraphText": "Une chaîne de 400 acides aminés est fabriquée en moins de 20 secondes : 20 ÷ 400 = 0,05 s par acide aminé.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q7",
            "type": "mcq",
            "prompt": "Une chaîne de 400 acides aminés est fabriquée en 20 secondes. Combien de temps faut-il, en moyenne, pour ajouter un acide aminé ?",
            "options": [
              "0,05 s (1/20 de seconde)",
              "0,5 s",
              "20 s",
              "8 000 s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "20 ÷ 400 = 0,05."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q1",
          "type": "mcq",
          "prompt": "Où se déroule la traduction de l'ARN messager en protéine ?",
          "options": [
            "Dans le noyau, sur l'ADN",
            "Dans le cytoplasme, sur les ribosomes",
            "Dans le sang",
            "Dans la membrane du noyau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La transcription, elle, se fait dans le noyau."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q2",
          "type": "mcq",
          "prompt": "Quelles sont, dans l'ordre, les trois étapes de la traduction ?",
          "options": [
            "Terminaison, élongation, initiation",
            "Initiation, élongation, terminaison",
            "Transcription, traduction, terminaison",
            "Acquisition, consolidation, restitution"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On commence, on allonge la chaîne, on termine."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q3",
          "type": "mcq",
          "prompt": "Pendant l'initiation de la traduction, sur quel codon le ribosome se place-t-il, et quel acide aminé est mis en place en premier ?",
          "options": [
            "UAA, aucun",
            "AUG, la méthionine",
            "UGC, la cystéine",
            "GGC, la glycine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "AUG est le codon initiateur."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q4",
          "type": "mcq",
          "prompt": "Pendant l'élongation, un nouvel ARNt se place au site A du ribosome. Quelle liaison se forme alors entre les deux acides aminés ?",
          "options": [
            "Une liaison peptidique",
            "Une liaison hydrogène entre bases",
            "Une liaison ionique avec le sel",
            "Aucune liaison"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la liaison qui relie les acides aminés d'une protéine."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q5",
          "type": "mcq",
          "prompt": "Pendant l'élongation, après la formation d'une liaison peptidique, que fait le ribosome ?",
          "options": [
            "Il retourne dans le noyau",
            "Il avance d'un codon sur l'ARNm",
            "Il détruit l'ARNm",
            "Il se transforme en ADN"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il lit l'ARNm codon après codon."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q6",
          "type": "mcq",
          "prompt": "Le ribosome lit l'ARNm AUG UGC GCU UGA. Sachant que UGA est un codon stop, combien d'acides aminés aura la chaîne fabriquée ?",
          "options": [
            "2",
            "3",
            "4",
            "5"
          ],
          "correctAnswerIndex": 1,
          "explanation": "AUG, UGC, GCU donnent 3 acides aminés ; UGA arrête la synthèse."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p04_q7",
          "type": "mcq",
          "prompt": "Une chaîne de 400 acides aminés est fabriquée en 20 secondes. Combien de temps faut-il, en moyenne, pour ajouter un acide aminé ?",
          "options": [
            "0,05 s (1/20 de seconde)",
            "0,5 s",
            "20 s",
            "8 000 s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "20 ÷ 400 = 0,05."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l07_biosynthese_proteines_p05",
      "order": 5,
      "title": "Traduire avec le code génétique",
      "summary": "Ocytocine et vasopressine : de l'ADN à la chaîne d'acides aminés.",
      "conceptExplanation": "Méthode pour trouver une protéine à partir de l'ADN :\n1. trouver l'ARNm (complémentaire du brin transcrit, ou copie du brin non codant avec U au lieu de T) ;\n2. découper l'ARNm en codons de 3 bases ;\n3. lire chaque codon dans le tableau du code génétique.\n\nExtrait du code génétique utile :\nUGC = cystéine (Cys) ; UAC = tyrosine (Tyr) ; AUC = isoleucine (Ile) ; UUC = phénylalanine (Phe) ; CAG = glutamine (Gln) ; AAC = asparagine (Asn) ; CCC et CCA = proline (Pro) ; CUG = leucine (Leu) ; AGA = arginine (Arg) ; GGC et GGA = glycine (Gly).\n\nSituation : deux hormones humaines très proches.\n- Brin non codant pour l'ocytocine : TGC TAC ATC CAG AAC TGC CCC CTG GGC\n  → ARNm : UGC UAC AUC CAG AAC UGC CCC CUG GGC\n  → Cys – Tyr – Ile – Gln – Asn – Cys – Pro – Leu – Gly\n- Brin non codant pour la vasopressine : TGC TAC TTC CAG AAC TGC CCA AGA GGA\n  → ARNm : UGC UAC UUC CAG AAC UGC CCA AGA GGA\n  → Cys – Tyr – Phe – Gln – Asn – Cys – Pro – Arg – Gly\n\nDifférence : les deux hormones ne diffèrent que par 2 acides aminés : en 3e position (Ile pour l'ocytocine, Phe pour la vasopressine) et en 8e position (Leu pour l'ocytocine, Arg pour la vasopressine). Ces petites différences de séquence d'ADN donnent des protéines différentes, avec des rôles différents (l'ocytocine agit sur l'utérus lors de l'accouchement, la vasopressine sur les reins).\n\nRemarque : CCC et CCA codent tous deux la proline : la différence d'ADN en 7e position (C → A) ne change pas l'acide aminé (redondance du code).",
      "keyRule": "ADN → ARNm (T devient U) → codons de 3 bases → acides aminés (tableau du code). Ocytocine et vasopressine ne diffèrent que par 2 acides aminés (positions 3 et 8).",
      "formulas": [],
      "workedExample": {
        "title": "Traduire trois codons",
        "statement": "Traduis l'ARNm UGC UAC AUC, sachant que UGC = Cys, UAC = Tyr, AUC = Ile.",
        "methodSteps": [
          "On découpe en codons : UGC / UAC / AUC.",
          "On lit chaque codon dans le code génétique."
        ],
        "conclusion": "Cys – Tyr – Ile."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Obtenir l'ARNm",
          "stepTheme": "Obtenir l'ARNm",
          "stepBadge": "Obtenir l'ARNm",
          "paragraphText": "Brin non codant de l'ocytocine : TGC TAC ATC… On remplace T par U : ARNm UGC UAC AUC…",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q1",
            "type": "mcq",
            "prompt": "Le brin non codant de l'ADN de l'ocytocine commence par TGC TAC ATC CAG. L'ARNm a la même séquence que ce brin, avec U à la place de T. Quel est le début de l'ARNm ?",
            "options": [
              "ACG ATG TAG GTC",
              "UGC UAC AUC CAG",
              "TGC TAC ATC CAG",
              "ACG AUG UAG GUC"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On remplace seulement T par U."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Traduire",
          "stepTheme": "Traduire",
          "stepBadge": "Traduire",
          "paragraphText": "Avec le code génétique : UGC = Cys, UAC = Tyr, AUC = Ile, CAG = Gln.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q2",
            "type": "mcq",
            "prompt": "D'après le code génétique, UGC = Cys, UAC = Tyr, AUC = Ile, CAG = Gln. Quelle est la séquence d'acides aminés codée par l'ARNm UGC UAC AUC CAG ?",
            "options": [
              "Cys – Tyr – Ile – Gln",
              "Gln – Ile – Tyr – Cys",
              "Cys – Cys – Ile – Gln",
              "Tyr – Cys – Gln – Ile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On lit les codons dans l'ordre, de gauche à droite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'ocytocine",
          "stepTheme": "L'ocytocine",
          "stepBadge": "L'ocytocine",
          "paragraphText": "ARNm de l'ocytocine : UGC UAC AUC CAG AAC UGC CCC CUG GGC → Cys Tyr Ile Gln Asn Cys Pro Leu Gly.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q3",
            "type": "mcq",
            "prompt": "L'ARNm de l'ocytocine est UGC UAC AUC CAG AAC UGC CCC CUG GGC. Combien d'acides aminés contient cette hormone ?",
            "options": [
              "3",
              "9",
              "27",
              "64"
            ],
            "correctAnswerIndex": 1,
            "explanation": "27 bases ÷ 3 = 9 codons, donc 9 acides aminés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La vasopressine",
          "stepTheme": "La vasopressine",
          "stepBadge": "La vasopressine",
          "paragraphText": "ARNm de la vasopressine : UGC UAC UUC CAG AAC UGC CCA AGA GGA → Cys Tyr Phe Gln Asn Cys Pro Arg Gly.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q4",
            "type": "mcq",
            "prompt": "Le 3e codon de l'ARNm est AUC pour l'ocytocine et UUC pour la vasopressine. Sachant que AUC = isoleucine (Ile) et UUC = phénylalanine (Phe), quel est le 3e acide aminé de la vasopressine ?",
            "options": [
              "Isoleucine (Ile)",
              "Phénylalanine (Phe)",
              "Cystéine (Cys)",
              "Glycine (Gly)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une seule base différente (A → U) change l'acide aminé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Comparer",
          "stepTheme": "Comparer",
          "stepBadge": "Comparer",
          "paragraphText": "Ocytocine : Cys Tyr Ile Gln Asn Cys Pro Leu Gly. Vasopressine : Cys Tyr Phe Gln Asn Cys Pro Arg Gly. Deux différences : positions 3 et 8.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q5",
            "type": "mcq",
            "prompt": "Ocytocine : Cys–Tyr–Ile–Gln–Asn–Cys–Pro–Leu–Gly. Vasopressine : Cys–Tyr–Phe–Gln–Asn–Cys–Pro–Arg–Gly. Combien d'acides aminés diffèrent entre les deux hormones ?",
            "options": [
              "0",
              "1",
              "2",
              "9"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Position 3 (Ile / Phe) et position 8 (Leu / Arg)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une différence sans effet",
          "stepTheme": "Une différence sans effet",
          "stepBadge": "Une différence sans effet",
          "paragraphText": "Le 7e codon est CCC pour l'ocytocine et CCA pour la vasopressine : les deux codent la proline. L'ADN diffère, mais pas l'acide aminé.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q6",
            "type": "mcq",
            "prompt": "Le 7e codon est CCC pour l'ocytocine et CCA pour la vasopressine. Sachant que CCC et CCA codent tous deux la proline, le 7e acide aminé est-il différent ?",
            "options": [
              "Oui, c'est forcément différent",
              "Non : c'est la proline dans les deux cas (le code est redondant)",
              "Non, car il n'y a pas de 7e acide aminé",
              "Oui, c'est un codon stop"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la redondance du code génétique."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Gène, protéine, caractère",
          "stepTheme": "Gène, protéine, caractère",
          "stepBadge": "Gène, protéine, caractère",
          "paragraphText": "Une petite différence dans la séquence d'ADN (le gène) donne une protéine différente, avec un rôle différent : les protéines expriment les caractères codés par les gènes.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q7",
            "type": "mcq",
            "prompt": "L'ocytocine et la vasopressine ont des rôles différents alors que leurs gènes ne diffèrent que de quelques bases. Que montre cet exemple ?",
            "options": [
              "Que l'ADN ne sert à rien",
              "Que la séquence de l'ADN détermine la séquence des acides aminés, donc la protéine et son rôle",
              "Que les protéines se forment au hasard",
              "Que les hormones ne sont pas des protéines"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Gène → ARNm → protéine → caractère."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q1",
          "type": "mcq",
          "prompt": "Le brin non codant de l'ADN de l'ocytocine commence par TGC TAC ATC CAG. L'ARNm a la même séquence que ce brin, avec U à la place de T. Quel est le début de l'ARNm ?",
          "options": [
            "ACG ATG TAG GTC",
            "UGC UAC AUC CAG",
            "TGC TAC ATC CAG",
            "ACG AUG UAG GUC"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On remplace seulement T par U."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q2",
          "type": "mcq",
          "prompt": "D'après le code génétique, UGC = Cys, UAC = Tyr, AUC = Ile, CAG = Gln. Quelle est la séquence d'acides aminés codée par l'ARNm UGC UAC AUC CAG ?",
          "options": [
            "Cys – Tyr – Ile – Gln",
            "Gln – Ile – Tyr – Cys",
            "Cys – Cys – Ile – Gln",
            "Tyr – Cys – Gln – Ile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On lit les codons dans l'ordre, de gauche à droite."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q3",
          "type": "mcq",
          "prompt": "L'ARNm de l'ocytocine est UGC UAC AUC CAG AAC UGC CCC CUG GGC. Combien d'acides aminés contient cette hormone ?",
          "options": [
            "3",
            "9",
            "27",
            "64"
          ],
          "correctAnswerIndex": 1,
          "explanation": "27 bases ÷ 3 = 9 codons, donc 9 acides aminés."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q4",
          "type": "mcq",
          "prompt": "Le 3e codon de l'ARNm est AUC pour l'ocytocine et UUC pour la vasopressine. Sachant que AUC = isoleucine (Ile) et UUC = phénylalanine (Phe), quel est le 3e acide aminé de la vasopressine ?",
          "options": [
            "Isoleucine (Ile)",
            "Phénylalanine (Phe)",
            "Cystéine (Cys)",
            "Glycine (Gly)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une seule base différente (A → U) change l'acide aminé."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q5",
          "type": "mcq",
          "prompt": "Ocytocine : Cys–Tyr–Ile–Gln–Asn–Cys–Pro–Leu–Gly. Vasopressine : Cys–Tyr–Phe–Gln–Asn–Cys–Pro–Arg–Gly. Combien d'acides aminés diffèrent entre les deux hormones ?",
          "options": [
            "0",
            "1",
            "2",
            "9"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Position 3 (Ile / Phe) et position 8 (Leu / Arg)."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q6",
          "type": "mcq",
          "prompt": "Le 7e codon est CCC pour l'ocytocine et CCA pour la vasopressine. Sachant que CCC et CCA codent tous deux la proline, le 7e acide aminé est-il différent ?",
          "options": [
            "Oui, c'est forcément différent",
            "Non : c'est la proline dans les deux cas (le code est redondant)",
            "Non, car il n'y a pas de 7e acide aminé",
            "Oui, c'est un codon stop"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la redondance du code génétique."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p05_q7",
          "type": "mcq",
          "prompt": "L'ocytocine et la vasopressine ont des rôles différents alors que leurs gènes ne diffèrent que de quelques bases. Que montre cet exemple ?",
          "options": [
            "Que l'ADN ne sert à rien",
            "Que la séquence de l'ADN détermine la séquence des acides aminés, donc la protéine et son rôle",
            "Que les protéines se forment au hasard",
            "Que les hormones ne sont pas des protéines"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Gène → ARNm → protéine → caractère."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l07_biosynthese_proteines_p06",
      "order": 6,
      "title": "Les mutations et leurs conséquences",
      "summary": "Une base change : la protéine change… ou pas.",
      "conceptExplanation": "Une MUTATION est un changement dans la séquence de l'ADN (par exemple une base remplacée par une autre).\n\nSituation : le petit frère d'Aya est albinos : ses cellules de la peau ne fabriquent pas une protéine qui donne la couleur noire (la mélanine est produite grâce à cette protéine enzyme). Cause : une mutation du gène.\n\nExercice : brin transcrit (codant) d'ADN : TAC ACG CGA TTT TAT GTA.\n- Brin complémentaire : ATG TGC GCT AAA ATA CAT.\n- ARNm : AUG UGC GCU AAA AUA CAU.\n- Acides aminés (d'après le code : AUG = Met, UGC = Cys, GCU = Ala, AAA = Lys, AUA = Ile, CAU = His) : Met – Cys – Ala – Lys – Ile – His.\n\nMutations du 2e triplet ACG :\n- G remplacé par A : ACG → ACA, l'ARNm devient UGU au lieu de UGC. Or UGU code aussi la cystéine : la protéine NE CHANGE PAS (mutation silencieuse, grâce à la redondance du code).\n- G remplacé par C : ACG → ACC, l'ARNm devient UGG, qui code le tryptophane (Trp) : la protéine CHANGE (Cys remplacée par Trp). Elle peut devenir inactive.\n\nAutres conséquences possibles : si la mutation crée un codon stop, la protéine est raccourcie.\nExemple réel : la drépanocytose est due au remplacement d'une seule base du gène de l'hémoglobine (l'acide glutamique est remplacé par la valine).\n\nConclusion générale : la cellule fabrique ses protéines à partir des acides aminés, grâce à des acteurs (ADN, ARN, ribosomes), selon un mécanisme (transcription puis traduction) qui s'appuie sur un code génétique universel. Les protéines permettent l'expression des caractères déterminés par les gènes.",
      "keyRule": "Mutation = changement de base dans l'ADN. Si le nouveau codon code le même acide aminé, la protéine ne change pas ; sinon, elle change (et peut ne plus fonctionner).",
      "formulas": [],
      "workedExample": {
        "title": "Une mutation silencieuse ?",
        "statement": "Dans l'ARNm, le codon UGC (cystéine) devient UGU. Sachant que UGU code aussi la cystéine, la protéine change-t-elle ?",
        "methodSteps": [
          "On lit le nouveau codon : UGU = cystéine.",
          "L'acide aminé est le même qu'avant."
        ],
        "conclusion": "Non : la séquence d'acides aminés n'est pas modifiée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une mutation",
          "stepTheme": "Une mutation",
          "stepBadge": "Une mutation",
          "paragraphText": "Une mutation est un changement dans la séquence des bases de l'ADN.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q1",
            "type": "mcq",
            "prompt": "Dans un gène, la base G d'un triplet est remplacée par la base A. Comment appelle-t-on ce changement ?",
            "options": [
              "Une transcription",
              "Une mutation",
              "Une traduction",
              "Une liaison peptidique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est une modification de l'information génétique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Lire la séquence normale",
          "stepTheme": "Lire la séquence normale",
          "stepBadge": "Lire la séquence normale",
          "paragraphText": "Brin transcrit TAC ACG CGA → ARNm AUG UGC GCU → Met – Cys – Ala.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q2",
            "type": "mcq",
            "prompt": "Le brin transcrit d'ADN est TAC ACG CGA ; l'ARNm est donc AUG UGC GCU. Avec AUG = Met, UGC = Cys, GCU = Ala, quelle est la chaîne d'acides aminés ?",
            "options": [
              "Met – Cys – Ala",
              "Ala – Cys – Met",
              "Met – Met – Ala",
              "Cys – Ala – Met"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On lit les codons dans l'ordre."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une mutation silencieuse",
          "stepTheme": "Une mutation silencieuse",
          "stepBadge": "Une mutation silencieuse",
          "paragraphText": "Le 2e triplet ACG devient ACA : l'ARNm porte UGU au lieu de UGC. UGU code aussi la cystéine : la protéine ne change pas.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q3",
            "type": "mcq",
            "prompt": "Sur le brin transcrit, le triplet ACG devient ACA ; le codon de l'ARNm passe donc de UGC à UGU. Sachant que UGC et UGU codent tous deux la cystéine, la séquence d'acides aminés est-elle modifiée ?",
            "options": [
              "Oui, la cystéine disparaît",
              "Non, c'est toujours la cystéine (mutation silencieuse)",
              "Oui, la protéine s'arrête",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Grâce à la redondance du code génétique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une mutation qui change tout",
          "stepTheme": "Une mutation qui change tout",
          "stepBadge": "Une mutation qui change tout",
          "paragraphText": "Le 2e triplet ACG devient ACC : l'ARNm porte UGG, qui code le tryptophane. La cystéine est remplacée : la protéine change.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q4",
            "type": "mcq",
            "prompt": "Sur le brin transcrit, le triplet ACG devient ACC ; le codon de l'ARNm passe de UGC (cystéine) à UGG. Sachant que UGG code le tryptophane, la protéine est-elle modifiée ?",
            "options": [
              "Non",
              "Oui : la cystéine est remplacée par le tryptophane",
              "Oui : la protéine devient de l'ADN",
              "Non, car UGG est un codon stop"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un acide aminé différent peut rendre la protéine inactive."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'albinisme",
          "stepTheme": "L'albinisme",
          "stepBadge": "L'albinisme",
          "paragraphText": "Chez un enfant albinos, une mutation empêche les cellules de la peau de fabriquer une protéine nécessaire à la couleur noire de la peau.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q5",
            "type": "mcq",
            "prompt": "Le professeur explique : « les cellules de la peau de cet enfant albinos ne peuvent pas fabriquer une protéine qui donne la couleur noire de la peau ». Quelle est l'origine de ce problème ?",
            "options": [
              "Un manque de soleil",
              "Une mutation du gène qui code cette protéine",
              "Une maladie contagieuse",
              "Une alimentation pauvre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Gène muté → protéine absente ou inactive → caractère modifié."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un codon stop",
          "stepTheme": "Un codon stop",
          "stepBadge": "Un codon stop",
          "paragraphText": "Si une mutation transforme un codon en codon stop (UAA, UAG, UGA), la protéine s'arrête trop tôt : elle est raccourcie.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q6",
            "type": "mcq",
            "prompt": "Une mutation transforme le codon UGG (tryptophane) en UGA. Sachant que UGA est un codon stop, quelle est la conséquence ?",
            "options": [
              "La protéine est plus longue",
              "La traduction s'arrête : la protéine est raccourcie",
              "Rien ne change",
              "Le ribosome revient au début"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une protéine trop courte est souvent inactive."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "La conclusion générale",
          "stepTheme": "La conclusion générale",
          "stepBadge": "La conclusion générale",
          "paragraphText": "La cellule fabrique ses protéines grâce à l'ADN, aux ARN et aux ribosomes, par transcription puis traduction, selon un code génétique universel ; les protéines expriment les caractères codés par les gènes.",
          "exercise": {
            "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q7",
            "type": "mcq",
            "prompt": "Selon la conclusion générale de la leçon sur la biosynthèse des protéines, comment la cellule fabrique-t-elle ses protéines ?",
            "options": [
              "Au hasard, sans code",
              "Grâce à des acteurs (ADN, ARN, ribosomes), par transcription puis traduction, selon un code génétique universel",
              "Uniquement dans le noyau, sans ARN",
              "Par la digestion des protéines des aliments, sans modification"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Acteurs, code et mécanisme : les trois hypothèses du cours."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q1",
          "type": "mcq",
          "prompt": "Dans un gène, la base G d'un triplet est remplacée par la base A. Comment appelle-t-on ce changement ?",
          "options": [
            "Une transcription",
            "Une mutation",
            "Une traduction",
            "Une liaison peptidique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est une modification de l'information génétique."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q2",
          "type": "mcq",
          "prompt": "Le brin transcrit d'ADN est TAC ACG CGA ; l'ARNm est donc AUG UGC GCU. Avec AUG = Met, UGC = Cys, GCU = Ala, quelle est la chaîne d'acides aminés ?",
          "options": [
            "Met – Cys – Ala",
            "Ala – Cys – Met",
            "Met – Met – Ala",
            "Cys – Ala – Met"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On lit les codons dans l'ordre."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q3",
          "type": "mcq",
          "prompt": "Sur le brin transcrit, le triplet ACG devient ACA ; le codon de l'ARNm passe donc de UGC à UGU. Sachant que UGC et UGU codent tous deux la cystéine, la séquence d'acides aminés est-elle modifiée ?",
          "options": [
            "Oui, la cystéine disparaît",
            "Non, c'est toujours la cystéine (mutation silencieuse)",
            "Oui, la protéine s'arrête",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Grâce à la redondance du code génétique."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q4",
          "type": "mcq",
          "prompt": "Sur le brin transcrit, le triplet ACG devient ACC ; le codon de l'ARNm passe de UGC (cystéine) à UGG. Sachant que UGG code le tryptophane, la protéine est-elle modifiée ?",
          "options": [
            "Non",
            "Oui : la cystéine est remplacée par le tryptophane",
            "Oui : la protéine devient de l'ADN",
            "Non, car UGG est un codon stop"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un acide aminé différent peut rendre la protéine inactive."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q5",
          "type": "mcq",
          "prompt": "Le professeur explique : « les cellules de la peau de cet enfant albinos ne peuvent pas fabriquer une protéine qui donne la couleur noire de la peau ». Quelle est l'origine de ce problème ?",
          "options": [
            "Un manque de soleil",
            "Une mutation du gène qui code cette protéine",
            "Une maladie contagieuse",
            "Une alimentation pauvre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Gène muté → protéine absente ou inactive → caractère modifié."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q6",
          "type": "mcq",
          "prompt": "Une mutation transforme le codon UGG (tryptophane) en UGA. Sachant que UGA est un codon stop, quelle est la conséquence ?",
          "options": [
            "La protéine est plus longue",
            "La traduction s'arrête : la protéine est raccourcie",
            "Rien ne change",
            "Le ribosome revient au début"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une protéine trop courte est souvent inactive."
        },
        {
          "id": "terminale_a_svt_l07_biosynthese_proteines_p06_q7",
          "type": "mcq",
          "prompt": "Selon la conclusion générale de la leçon sur la biosynthèse des protéines, comment la cellule fabrique-t-elle ses protéines ?",
          "options": [
            "Au hasard, sans code",
            "Grâce à des acteurs (ADN, ARN, ribosomes), par transcription puis traduction, selon un code génétique universel",
            "Uniquement dans le noyau, sans ARN",
            "Par la digestion des protéines des aliments, sans modification"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Acteurs, code et mécanisme : les trois hypothèses du cours."
        }
      ]
    }
  ]
};
