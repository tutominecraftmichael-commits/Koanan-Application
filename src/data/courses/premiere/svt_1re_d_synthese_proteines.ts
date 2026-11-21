import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère D_L5_La synthèse des protéines.pdf (Mon école à la maison ; thème « La transmission des caractères héréditaires » ; le document l’intitule « Leçon 9 ») ». Première D (programme propre à la 1re D).
// Fichier généré (scratchpad build_1re_d_svt_b.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_D_L05_SYNTHESE_PROTEINES: CurriculumChapter = {
  "id": "premiere_d_svt_l05_synthese_proteines",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "order": 5,
  "title": "Leçon 5 : La synthèse des protéines",
  "summary": "Acteurs de la synthèse (ADN, ARNm, ARNt, ARNr, ribosome), code génétique, transcription par l’ARN polymérase, traduction (initiation, élongation, terminaison), exercices de traduction et mutations.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT 1ère D_L5_La synthèse des protéines.pdf (Mon école à la maison ; thème « La transmission des caractères héréditaires » ; le document l’intitule « Leçon 9 »)",
  "points": [
    {
      "id": "premiere_d_svt_l05_synthese_proteines_p01",
      "order": 1,
      "title": "Les acteurs de la synthèse",
      "summary": "ADN, ARN messager, ARN de transfert, ARN ribosomal, ribosome.",
      "conceptExplanation": "Situation : en classe, une vidéo montre la synthèse des protéines dans une cellule. Les élèves découvrent que les protéines ne se forment pas au hasard ; ils veulent connaître les acteurs et le mécanisme.\n- L’ADN (acide désoxyribonucléique) a deux brins complémentaires ; il est dans le noyau et porte l’information génétique.\n- L’ARN (acide ribonucléique) n’a qu’un brin ; son sucre est le ribose et l’uracile (U) y remplace la thymine (T).\n- Il existe trois sortes d’ARN : l’ARN messager (ARNm) copie l’information d’un gène et l’apporte au cytoplasme ; l’ARN de transfert (ARNt) apporte les acides aminés et porte un anticodon ; l’ARN ribosomal (ARNr) forme les ribosomes avec des protéines.\n- Le ribosome a deux sous-unités, une petite et une grande. Il lit l’ARNm et assemble les acides aminés.\n- Une protéine est une grosse molécule formée d’acides aminés reliés par des liaisons peptidiques.",
      "keyRule": "ADN (2 brins, noyau) → ARNm (copie) → ribosome + ARNt → protéine (chaîne d’acides aminés).",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer ADN et ARN",
        "statement": "Une molécule a un seul brin, du ribose et de l’uracile. Est-ce de l’ADN ou de l’ARN ?",
        "methodSteps": [
          "Un seul brin et du ribose : caractères de l’ARN.",
          "L’uracile n’existe que dans l’ARN."
        ],
        "conclusion": "C’est de l’ARN."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "ADN",
          "stepTheme": "Acteur",
          "stepTitle": "L’ADN",
          "paragraphText": "L’**ADN** a **deux brins complémentaires** ; il est dans le **noyau** et porte l’**information génétique**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p01_q1",
            "type": "mcq",
            "prompt": "Où se trouve l’ADN d’une cellule et combien de brins possède-t-il ?",
            "options": [
              "Dans le noyau ; deux brins complémentaires",
              "Dans le cytoplasme ; un seul brin",
              "Dans le ribosome ; trois brins",
              "Dans la membrane ; un seul brin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il ne sort pas du noyau."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les acteurs de la synthèse des protéines",
            "caption": "ADN et ARN comparés.",
            "tableData": {
              "headers": [
                "",
                "ADN",
                "ARN"
              ],
              "rows": [
                [
                  "Brins",
                  "Deux brins complémentaires",
                  "Un seul brin"
                ],
                [
                  "Sucre",
                  "Désoxyribose",
                  "Ribose"
                ],
                [
                  "Bases",
                  "A, T, C, G",
                  "A, U, C, G (U remplace T)"
                ],
                [
                  "Localisation",
                  "Noyau",
                  "Noyau et cytoplasme"
                ],
                [
                  "Types",
                  "—",
                  "ARN messager, ARN de transfert, ARN ribosomal"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "ARN",
          "stepTheme": "Acteur",
          "stepTitle": "L’ARN",
          "paragraphText": "L’**ARN** a **un seul brin** ; son sucre est le **ribose** et l’**uracile (U)** remplace la **thymine (T)**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p01_q2",
            "type": "mcq",
            "prompt": "Parmi ces bases : adénine, uracile, cytosine, guanine, thymine, laquelle n’existe pas dans l’ARN ?",
            "options": [
              "La thymine",
              "L’uracile",
              "L’adénine",
              "La guanine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 3 : l’ARN contient A, U, C, G."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "ARNm",
          "stepTheme": "Trois ARN",
          "stepTitle": "L’ARN messager",
          "paragraphText": "L’**ARN messager** copie l’information d’un **gène** et l’apporte du noyau au **cytoplasme**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p01_q3",
            "type": "mcq",
            "prompt": "Quel ARN transporte l’information d’un gène du noyau jusqu’au ribosome ?",
            "options": [
              "L’ARN messager (ARNm)",
              "L’ARN de transfert (ARNt)",
              "L’ARN ribosomal (ARNr)",
              "L’ADN"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il sort par les pores du noyau."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "ARNt",
          "stepTheme": "Trois ARN",
          "stepTitle": "L’ARN de transfert",
          "paragraphText": "L’**ARN de transfert** apporte un **acide aminé** au ribosome ; il porte un **anticodon** complémentaire d’un codon.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p01_q4",
            "type": "mcq",
            "prompt": "Quel est le rôle de l’ARN de transfert dans la synthèse des protéines ?",
            "options": [
              "Apporter un acide aminé au ribosome, grâce à son anticodon qui reconnaît un codon",
              "Copier l’information du gène",
              "Former l’enveloppe du noyau",
              "Fabriquer l’ADN"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’anticodon est porté par l’ARNt."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Ribosome",
          "stepTheme": "Acteur",
          "stepTitle": "Le ribosome",
          "paragraphText": "Le **ribosome** a **deux sous-unités** ; il **lit l’ARNm** et **assemble** les acides aminés.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p01_q5",
            "type": "mcq",
            "prompt": "De quoi le ribosome est-il formé ?",
            "options": [
              "De deux sous-unités, une petite et une grande, formées d’ARN ribosomal et de protéines",
              "D’un seul brin d’ADN",
              "De glucides seulement",
              "De deux noyaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’atelier de la traduction."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepBadge": "Protéine",
          "stepTheme": "Produit",
          "stepTitle": "Qu’est-ce qu’une protéine ?",
          "paragraphText": "Une **protéine** est une grosse molécule formée d’**acides aminés** reliés par des **liaisons peptidiques**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p01_q6",
            "type": "mcq",
            "prompt": "De quelles sous-unités une protéine est-elle formée ?",
            "options": [
              "D’acides aminés",
              "De glucoses",
              "D’acides gras",
              "De nucléotides"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 2 : réponse 2-c."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p01_q1",
          "type": "mcq",
          "prompt": "Où se trouve l’ADN d’une cellule et combien de brins possède-t-il ?",
          "options": [
            "Dans le noyau ; deux brins complémentaires",
            "Dans le cytoplasme ; un seul brin",
            "Dans le ribosome ; trois brins",
            "Dans la membrane ; un seul brin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il ne sort pas du noyau."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p01_q2",
          "type": "mcq",
          "prompt": "Parmi ces bases : adénine, uracile, cytosine, guanine, thymine, laquelle n’existe pas dans l’ARN ?",
          "options": [
            "La thymine",
            "L’uracile",
            "L’adénine",
            "La guanine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 3 : l’ARN contient A, U, C, G."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p01_q3",
          "type": "mcq",
          "prompt": "Quel ARN transporte l’information d’un gène du noyau jusqu’au ribosome ?",
          "options": [
            "L’ARN messager (ARNm)",
            "L’ARN de transfert (ARNt)",
            "L’ARN ribosomal (ARNr)",
            "L’ADN"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il sort par les pores du noyau."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p01_q4",
          "type": "mcq",
          "prompt": "Quel est le rôle de l’ARN de transfert dans la synthèse des protéines ?",
          "options": [
            "Apporter un acide aminé au ribosome, grâce à son anticodon qui reconnaît un codon",
            "Copier l’information du gène",
            "Former l’enveloppe du noyau",
            "Fabriquer l’ADN"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’anticodon est porté par l’ARNt."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p01_q5",
          "type": "mcq",
          "prompt": "De quoi le ribosome est-il formé ?",
          "options": [
            "De deux sous-unités, une petite et une grande, formées d’ARN ribosomal et de protéines",
            "D’un seul brin d’ADN",
            "De glucides seulement",
            "De deux noyaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’atelier de la traduction."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p01_q6",
          "type": "mcq",
          "prompt": "De quelles sous-unités une protéine est-elle formée ?",
          "options": [
            "D’acides aminés",
            "De glucoses",
            "D’acides gras",
            "De nucléotides"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 2 : réponse 2-c."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l05_synthese_proteines_p02",
      "order": 2,
      "title": "Le code génétique",
      "summary": "Codons, codon initiateur, codons stop ; un code redondant et universel.",
      "conceptExplanation": "- Un codon est un triplet de nucléotides (3 bases) de l’ARNm. Avec 4 bases (A, U, C, G), il existe 4 × 4 × 4 = 64 codons.\n- 61 codons désignent un acide aminé ; 3 codons (UAA, UAG, UGA) n’en désignent aucun : ce sont les codons stop, ou non-sens.\n- La synthèse commence toujours au codon AUG (méthionine), le codon initiateur.\n- Le code est redondant (ou dégénéré) : plusieurs codons peuvent désigner le même acide aminé. Il est non ambigu : un codon ne désigne qu’un seul acide aminé. Il est universel : le même chez presque tous les êtres vivants.\n- L’anticodon est un triplet de l’ARNt, complémentaire d’un codon.\n- Corrections du document : il dit qu’un acide aminé correspond à « 2 à 4 » codons ; c’est de 1 à 6 (1 pour la méthionine et le tryptophane, 6 pour la leucine, la sérine et l’arginine). Il appelle aussi le codon une association de 3 « acides nucléiques » : ce sont 3 nucléotides (ou bases).\n- Activité d’application : codon → triplet de bases de l’ARNm ; codon initiateur → triplet qui débute la synthèse ; codon stop → triplet sans acide aminé ; code redondant → plusieurs codons pour un même acide aminé ; anticodon → triplet complémentaire d’un codon, porté par l’ARNt.\n- Exercice 1 (texte) : 1 acides aminés ; 2 bases azotées ; 3 triplet de bases ; 4 triplets ; 5 codons stop ; 6 redondant ; 7 non ambigu ; 8 universel ; 9 protéines ; 10 non-sens ; 11 la synthèse ; 12 initiateur.",
      "keyRule": "64 codons : 61 désignent un acide aminé, 3 codons stop (UAA, UAG, UGA). AUG = initiateur. Code redondant, non ambigu, universel.",
      "formulas": [],
      "workedExample": {
        "title": "Compter les codons",
        "statement": "Pourquoi y a-t-il 64 codons ?",
        "methodSteps": [
          "Chaque position du codon peut recevoir une des 4 bases.",
          "4 × 4 × 4 = 64."
        ],
        "conclusion": "64 codons possibles, dont 61 désignent un acide aminé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Codon",
          "stepTheme": "Code",
          "stepTitle": "Le codon",
          "paragraphText": "Un **codon** est un **triplet de nucléotides** de l’**ARNm** qui désigne un acide aminé (ou l’arrêt).",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p02_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’un codon ?",
            "options": [
              "Un triplet de nucléotides de l’ARN messager",
              "Un acide aminé",
              "Un triplet de l’ARN de transfert",
              "Une protéine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 3 : 2-d."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Quelques codons du code génétique (lus sur l’ARNm)",
            "caption": "Extrait utile pour les exercices de la leçon.",
            "tableData": {
              "headers": [
                "Codons",
                "Acide aminé"
              ],
              "rows": [
                [
                  "AUG",
                  "Méthionine (Met), codon initiateur"
                ],
                [
                  "UGC, UGU",
                  "Cystéine (Cys)"
                ],
                [
                  "UAC, UAU",
                  "Tyrosine (Tyr)"
                ],
                [
                  "AUC, AUU, AUA",
                  "Isoleucine (Ile)"
                ],
                [
                  "UUC, UUU",
                  "Phénylalanine (Phe)"
                ],
                [
                  "CAG, CAA",
                  "Glutamine (Gln)"
                ],
                [
                  "AAC, AAU",
                  "Asparagine (Asn)"
                ],
                [
                  "CCC, CCA, CCG, CCU",
                  "Proline (Pro)"
                ],
                [
                  "CUG, CUC, CUA, CUU, UUA, UUG",
                  "Leucine (Leu)"
                ],
                [
                  "AGA, AGG, CGA, CGC, CGG, CGU",
                  "Arginine (Arg)"
                ],
                [
                  "GGC, GGA, GGG, GGU",
                  "Glycine (Gly)"
                ],
                [
                  "GCU, GCC, GCA, GCG",
                  "Alanine (Ala)"
                ],
                [
                  "AAA, AAG",
                  "Lysine (Lys)"
                ],
                [
                  "CAU, CAC",
                  "Histidine (His)"
                ],
                [
                  "ACG, ACU, ACC, ACA",
                  "Thréonine (Thr)"
                ],
                [
                  "UGG",
                  "Tryptophane (Trp)"
                ],
                [
                  "UAA, UAG, UGA",
                  "Codons stop (aucun acide aminé)"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "64 codons",
          "stepTheme": "Calcul",
          "stepTitle": "Combien de codons ?",
          "paragraphText": "Avec **4 bases** à chacune des **3 positions** : **4 × 4 × 4 = 64** codons.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p02_q2",
            "type": "mcq",
            "prompt": "Avec les 4 bases de l’ARN (A, U, C, G) prises 3 par 3, combien de codons différents peut-on former ?",
            "options": [
              "64",
              "12",
              "20",
              "61"
            ],
            "correctAnswerIndex": 0,
            "explanation": "61 codent un acide aminé, 3 sont des codons stop."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Stop et initiateur",
          "stepTheme": "Code",
          "stepTitle": "Le début et la fin",
          "paragraphText": "La synthèse **commence** au codon **AUG** (méthionine) et **s’arrête** à un codon **stop** : **UAA, UAG** ou **UGA**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p02_q3",
            "type": "mcq",
            "prompt": "Lequel de ces codons de l’ARNm arrête la synthèse d’une protéine ?",
            "options": [
              "UGA",
              "AUG",
              "UGG",
              "UGC"
            ],
            "correctAnswerIndex": 0,
            "explanation": "AUG est le codon initiateur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "1 à 6 codons",
          "stepTheme": "Erreur du document",
          "stepTitle": "Combien de codons par acide aminé ?",
          "paragraphText": "Le document dit « **2 à 4** » codons par acide aminé. En fait, c’est **1 à 6** : **1** pour la méthionine et le tryptophane, **6** pour la leucine, la sérine et l’arginine.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p02_q4",
            "type": "mcq",
            "prompt": "D’après le code génétique, combien de codons différents désignent la leucine ?",
            "options": [
              "6",
              "2",
              "4",
              "1"
            ],
            "correctAnswerIndex": 0,
            "explanation": "CUU, CUC, CUA, CUG, UUA, UUG."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Redondant",
          "stepTheme": "Propriétés",
          "stepTitle": "Un code redondant et non ambigu",
          "paragraphText": "**Redondant** : plusieurs codons pour un même acide aminé. **Non ambigu** : un codon ne désigne qu’**un seul** acide aminé.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p02_q5",
            "type": "mcq",
            "prompt": "Pendant la traduction, laquelle de ces affirmations est vraie ?",
            "options": [
              "Un codon désigne un seul acide aminé, mais plusieurs codons peuvent désigner le même acide aminé",
              "Chaque acide aminé est désigné par un seul codon",
              "Un codon peut désigner deux acides aminés",
              "Les codons stop désignent la méthionine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 2 : 4-a et 4-c."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepBadge": "Universel",
          "stepTheme": "Propriétés",
          "stepTitle": "Un code universel",
          "paragraphText": "Le code génétique est **universel** : le **même** codon désigne le même acide aminé chez presque **tous les êtres vivants**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p02_q6",
            "type": "mcq",
            "prompt": "Que signifie que le code génétique est universel ?",
            "options": [
              "Il est le même chez presque tous les êtres vivants",
              "Il change d’une espèce à l’autre",
              "Il n’existe que chez l’Homme",
              "Chaque cellule a son propre code"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On peut faire fabriquer de l’insuline humaine par une bactérie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p02_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’un codon ?",
          "options": [
            "Un triplet de nucléotides de l’ARN messager",
            "Un acide aminé",
            "Un triplet de l’ARN de transfert",
            "Une protéine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 3 : 2-d."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p02_q2",
          "type": "mcq",
          "prompt": "Avec les 4 bases de l’ARN (A, U, C, G) prises 3 par 3, combien de codons différents peut-on former ?",
          "options": [
            "64",
            "12",
            "20",
            "61"
          ],
          "correctAnswerIndex": 0,
          "explanation": "61 codent un acide aminé, 3 sont des codons stop."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p02_q3",
          "type": "mcq",
          "prompt": "Lequel de ces codons de l’ARNm arrête la synthèse d’une protéine ?",
          "options": [
            "UGA",
            "AUG",
            "UGG",
            "UGC"
          ],
          "correctAnswerIndex": 0,
          "explanation": "AUG est le codon initiateur."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p02_q4",
          "type": "mcq",
          "prompt": "D’après le code génétique, combien de codons différents désignent la leucine ?",
          "options": [
            "6",
            "2",
            "4",
            "1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "CUU, CUC, CUA, CUG, UUA, UUG."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p02_q5",
          "type": "mcq",
          "prompt": "Pendant la traduction, laquelle de ces affirmations est vraie ?",
          "options": [
            "Un codon désigne un seul acide aminé, mais plusieurs codons peuvent désigner le même acide aminé",
            "Chaque acide aminé est désigné par un seul codon",
            "Un codon peut désigner deux acides aminés",
            "Les codons stop désignent la méthionine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 2 : 4-a et 4-c."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p02_q6",
          "type": "mcq",
          "prompt": "Que signifie que le code génétique est universel ?",
          "options": [
            "Il est le même chez presque tous les êtres vivants",
            "Il change d’une espèce à l’autre",
            "Il n’existe que chez l’Homme",
            "Chaque cellule a son propre code"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On peut faire fabriquer de l’insuline humaine par une bactérie."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l05_synthese_proteines_p03",
      "order": 3,
      "title": "La transcription",
      "summary": "Du gène à l’ARN messager, dans le noyau.",
      "conceptExplanation": "- Un gène est une portion d’ADN qui porte l’information d’une protéine ; c’est une très petite partie d’un chromosome.\n- La transcription se déroule dans le noyau : la molécule d’ADN s’ouvre localement au niveau du gène.\n- L’ARN polymérase se déplace le long d’un des deux brins, qui sert de matrice, et assemble des nucléotides libres (ribonucléotides) par complémentarité : A en face de T, U en face de A, C en face de G, G en face de C.\n- L’ARNm formé a la même séquence que l’autre brin de l’ADN, avec U à la place de T. Il sort ensuite du noyau par les pores nucléaires.\n- Convention de vocabulaire : le brin qui sert de matrice est appelé brin codant, brin transcrit ou brin informatif ; l’autre est le brin non transcrit. (Selon les conventions, « brin codant » peut parfois désigner l’autre brin ; on retient ici brin codant = brin transcrit.)\n- Exemple : brin transcrit AGC TAC GGA TAA GCT TGA → ARNm UCG AUG CCU AUU CGA ACU.\n- Point de vigilance : l’enzyme de la transcription est l’ARN polymérase (à ne pas confondre avec l’ADN polymérase qui réplique l’ADN avant une division).",
      "keyRule": "Transcription (noyau) : l’ARN polymérase copie le brin transcrit en ARNm par complémentarité (A→U, T→A, C→G, G→C).",
      "formulas": [],
      "workedExample": {
        "title": "Transcrire un brin",
        "statement": "Brin transcrit : TAC ACG. Quel est l’ARNm ?",
        "methodSteps": [
          "En face de T : A ; de A : U ; de C : G ; de G : C.",
          "TAC → AUG ; ACG → UGC."
        ],
        "conclusion": "ARNm : AUG UGC."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Gène",
          "stepTheme": "Notion",
          "stepTitle": "Le gène",
          "paragraphText": "Un **gène** est une **portion d’ADN** qui porte l’information d’une **protéine** ; c’est une très petite partie d’un chromosome.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p03_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’un gène ?",
            "options": [
              "Un segment d’ADN qui programme un caractère en codant une protéine",
              "Une protéine qui détermine un caractère",
              "Une chaîne d’acides aminés",
              "Un ribosome"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 2 : 1-a."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les deux étapes de la synthèse des protéines",
            "caption": "Transcription dans le noyau (ARN polymérase), sortie de l’ARNm par un pore nucléaire, traduction dans le cytoplasme sur les ribosomes.",
            "svgContent": "<svg viewBox=\"0 0 560 230\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Transcription de l’ADN en ARNm dans le noyau, passage de l’ARNm dans le cytoplasme, traduction en protéine sur le ribosome\"><rect x=\"12\" y=\"20\" width=\"236\" height=\"190\" rx=\"18\" fill=\"#8B5CF6\" fill-opacity=\"0.08\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"130\" y=\"42\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#8B5CF6\">NOYAU</text><rect x=\"40\" y=\"56\" width=\"180\" height=\"40\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"130\" y=\"80\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">ADN (gène)</text><line x1=\"130\" y1=\"98\" x2=\"130.0\" y2=\"125.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"130,134 135.0,125.0 125.0,125.0\" fill=\"#94A3B8\"/><text x=\"138\" y=\"120\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#8B5CF6\">transcription</text><rect x=\"40\" y=\"138\" width=\"180\" height=\"44\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"130\" y=\"156.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">ARNm</text><text x=\"130\" y=\"171.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">ARN polymérase</text><line x1=\"222\" y1=\"160\" x2=\"309.0\" y2=\"160.0\" stroke=\"#F59E0B\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"318,160 309.0,155.0 309.0,165.0\" fill=\"#F59E0B\"/><text x=\"270\" y=\"150\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">pore</text><text x=\"410\" y=\"42\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">CYTOPLASME</text><rect x=\"322\" y=\"138\" width=\"200\" height=\"44\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"422\" y=\"156.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Ribosome + ARNt</text><text x=\"422\" y=\"171.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">lecture des codons</text><line x1=\"422\" y1=\"136\" x2=\"422.0\" y2=\"109.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"422,100 417.0,109.0 427.0,109.0\" fill=\"#94A3B8\"/><text x=\"430\" y=\"120\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#10B981\">traduction</text><rect x=\"322\" y=\"56\" width=\"200\" height=\"40\" rx=\"10\" fill=\"#EF4444\" fill-opacity=\"0.14\" stroke=\"#EF4444\" stroke-width=\"2\"/><text x=\"422\" y=\"80\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Protéine (acides aminés)</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Noyau",
          "stepTheme": "Lieu",
          "stepTitle": "Où se fait la transcription ?",
          "paragraphText": "La **transcription** se fait dans le **noyau** : l’ADN s’**ouvre** localement au niveau du gène.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p03_q2",
            "type": "mcq",
            "prompt": "Où la transcription de l’ADN en ARN messager se déroule-t-elle ?",
            "options": [
              "Dans le noyau",
              "Dans le ribosome",
              "Dans le cytoplasme, sur les ribosomes",
              "Dans la membrane plasmique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La traduction, elle, se fait dans le cytoplasme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "ARN polymérase",
          "stepTheme": "Erreur du document",
          "stepTitle": "La bonne enzyme",
          "paragraphText": "Le document écrit « **ADN polymérase** ». L’enzyme de la transcription est l’**ARN polymérase**, qui assemble les nucléotides de l’ARN.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p03_q3",
            "type": "mcq",
            "prompt": "Quelle enzyme fabrique l’ARN messager pendant la transcription ?",
            "options": [
              "L’ARN polymérase",
              "L’ADN polymérase",
              "L’amylase",
              "La carboxylase"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’ADN polymérase copie l’ADN avant la division."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Complémentarité",
          "stepTheme": "Méthode",
          "stepTitle": "Transcrire un brin",
          "paragraphText": "En face de **T** : **A** ; de **A** : **U** ; de **C** : **G** ; de **G** : **C**. Le brin transcrit **TAC ACG** donne l’ARNm **AUG UGC**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p03_q4",
            "type": "mcq",
            "prompt": "Le brin transcrit d’un gène commence par TAC ACG. Quel est le début de l’ARN messager ?",
            "options": [
              "AUG UGC",
              "ATG TGC",
              "TAC ACG",
              "UAC ACG"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans l’ARN, U remplace T."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Brin codant",
          "stepTheme": "Vocabulaire",
          "stepTitle": "Brin codant ou brin transcrit ?",
          "paragraphText": "Dans ce cours, **brin codant = brin transcrit** : c’est le brin **matrice**. L’ARNm a la séquence de l’**autre** brin (non transcrit), avec **U** à la place de **T**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p03_q5",
            "type": "mcq",
            "prompt": "En génétique moléculaire (convention brin transcrit = brin codant), l’ARN messager a la même séquence (avec U à la place de T) que quel brin d’ADN ?",
            "options": [
              "Le brin non transcrit",
              "Le brin codant (transcrit)",
              "Les deux brins à la fois",
              "Aucun des deux brins"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il est complémentaire du brin transcrit."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Sortie",
          "stepTheme": "Étape 2",
          "stepTitle": "L’ARNm quitte le noyau",
          "paragraphText": "L’**ARNm** formé **sort du noyau** par les **pores nucléaires** et rejoint les **ribosomes** du cytoplasme.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p03_q6",
            "type": "mcq",
            "prompt": "Que fait l’ARN messager après sa formation dans le noyau ?",
            "options": [
              "Il sort du noyau par les pores nucléaires et rejoint les ribosomes",
              "Il reste dans le noyau",
              "Il se transforme en ADN",
              "Il est détruit immédiatement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Transcription → sortie → traduction."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p03_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’un gène ?",
          "options": [
            "Un segment d’ADN qui programme un caractère en codant une protéine",
            "Une protéine qui détermine un caractère",
            "Une chaîne d’acides aminés",
            "Un ribosome"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 2 : 1-a."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p03_q2",
          "type": "mcq",
          "prompt": "Où la transcription de l’ADN en ARN messager se déroule-t-elle ?",
          "options": [
            "Dans le noyau",
            "Dans le ribosome",
            "Dans le cytoplasme, sur les ribosomes",
            "Dans la membrane plasmique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La traduction, elle, se fait dans le cytoplasme."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p03_q3",
          "type": "mcq",
          "prompt": "Quelle enzyme fabrique l’ARN messager pendant la transcription ?",
          "options": [
            "L’ARN polymérase",
            "L’ADN polymérase",
            "L’amylase",
            "La carboxylase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’ADN polymérase copie l’ADN avant la division."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p03_q4",
          "type": "mcq",
          "prompt": "Le brin transcrit d’un gène commence par TAC ACG. Quel est le début de l’ARN messager ?",
          "options": [
            "AUG UGC",
            "ATG TGC",
            "TAC ACG",
            "UAC ACG"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans l’ARN, U remplace T."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p03_q5",
          "type": "mcq",
          "prompt": "En génétique moléculaire (convention brin transcrit = brin codant), l’ARN messager a la même séquence (avec U à la place de T) que quel brin d’ADN ?",
          "options": [
            "Le brin non transcrit",
            "Le brin codant (transcrit)",
            "Les deux brins à la fois",
            "Aucun des deux brins"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il est complémentaire du brin transcrit."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p03_q6",
          "type": "mcq",
          "prompt": "Que fait l’ARN messager après sa formation dans le noyau ?",
          "options": [
            "Il sort du noyau par les pores nucléaires et rejoint les ribosomes",
            "Il reste dans le noyau",
            "Il se transforme en ADN",
            "Il est détruit immédiatement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Transcription → sortie → traduction."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l05_synthese_proteines_p04",
      "order": 4,
      "title": "La traduction",
      "summary": "Initiation, élongation, terminaison sur le ribosome.",
      "conceptExplanation": "- La traduction se fait dans le cytoplasme, sur les ribosomes. L’ARNm est lu codon par codon ; la transcription précède toujours la traduction.\n- Initiation : la petite sous-unité du ribosome se fixe sur l’ARNm au codon initiateur AUG. Un ARNt portant la méthionine, d’anticodon UAC, s’y place (site P) ; la grande sous-unité s’assemble.\n- Élongation : un 2e ARNt, dont l’anticodon est complémentaire du 2e codon, se place au site A avec son acide aminé. Une liaison peptidique relie les deux acides aminés. Le 1er ARNt est libéré, le ribosome avance d’un codon, et ainsi de suite.\n- Terminaison : quand le ribosome atteint un codon stop, aucun ARNt ne s’y fixe. La chaîne d’acides aminés (polypeptide) est libérée et le ribosome se dissocie.\n- La traduction est rapide : une chaîne de 400 acides aminés est faite en moins de 20 secondes, soit environ un acide aminé tous les 1/20 de seconde.\n- La synthèse des protéines demande de l’énergie (ATP).",
      "keyRule": "Traduction (cytoplasme) : initiation au codon AUG, élongation (liaisons peptidiques, ribosome qui avance), terminaison au codon stop.",
      "formulas": [],
      "workedExample": {
        "title": "Trouver l’anticodon",
        "statement": "Le codon de l’ARNm est AUG. Quel est l’anticodon de l’ARNt ?",
        "methodSteps": [
          "L’anticodon est complémentaire du codon.",
          "En face de A : U ; de U : A ; de G : C."
        ],
        "conclusion": "Anticodon : UAC (ARNt de la méthionine)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Traduction",
          "stepTheme": "Lieu",
          "stepTitle": "Dans le cytoplasme",
          "paragraphText": "La **traduction** se fait dans le **cytoplasme**, sur les **ribosomes** : l’ARNm est lu **codon par codon**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p04_q1",
            "type": "mcq",
            "prompt": "Dans la synthèse des protéines, laquelle de ces affirmations est vraie ?",
            "options": [
              "La transcription précède la traduction",
              "La traduction précède la transcription",
              "La transcription se fait dans le cytoplasme",
              "La traduction se fait dans le noyau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 2 : 3-a."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Initiation",
          "stepTheme": "Étape 1",
          "stepTitle": "Le démarrage au codon AUG",
          "paragraphText": "La petite sous-unité se fixe sur l’ARNm au codon **AUG** ; un ARNt portant la **méthionine** (anticodon **UAC**) s’y place.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p04_q2",
            "type": "mcq",
            "prompt": "Pendant l’initiation, quel est l’anticodon de l’ARNt qui se place en face du codon initiateur AUG ?",
            "options": [
              "UAC",
              "AUG",
              "TAC",
              "UAG"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 3 : l’anticodon appartient à l’ARNt (3-c)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Élongation",
          "stepTheme": "Étape 2",
          "stepTitle": "La chaîne s’allonge",
          "paragraphText": "Un nouvel ARNt se place en face du codon suivant ; une **liaison peptidique** relie les acides aminés ; le ribosome **avance d’un codon**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p04_q3",
            "type": "mcq",
            "prompt": "Que se passe-t-il pendant l’élongation de la traduction ?",
            "options": [
              "Les acides aminés apportés par les ARNt sont reliés par des liaisons peptidiques, et le ribosome avance codon par codon",
              "L’ADN s’ouvre au niveau du gène",
              "L’ARNm sort du noyau",
              "Le ribosome se dissocie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le processus se répète n fois."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Terminaison",
          "stepTheme": "Étape 3",
          "stepTitle": "L’arrêt au codon stop",
          "paragraphText": "Au **codon stop**, aucun ARNt ne se fixe : la **chaîne** est **libérée** et le ribosome se **dissocie**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p04_q4",
            "type": "mcq",
            "prompt": "Pourquoi la traduction s’arrête-t-elle quand le ribosome atteint un codon stop ?",
            "options": [
              "Parce qu’aucun ARNt ne correspond à ce codon : la chaîne est libérée",
              "Parce que l’ARNm est détruit",
              "Parce que le codon stop porte la méthionine",
              "Parce que le ribosome n’a plus d’énergie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "UAA, UAG, UGA."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Lire l’ARNm",
          "stepTheme": "Méthode",
          "stepTitle": "Traduire un ARNm",
          "paragraphText": "On lit l’ARNm **de 3 en 3** à partir de **AUG** : **AUG UGC GCU AAA** → **Met-Cys-Ala-Lys**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p04_q5",
            "type": "mcq",
            "prompt": "D’après le code génétique (AUG : Met ; UGC : Cys ; GCU : Ala ; AAA : Lys), quelle chaîne donne l’ARNm AUG UGC GCU AAA ?",
            "options": [
              "Met-Cys-Ala-Lys",
              "Met-Ala-Cys-Lys",
              "Lys-Ala-Cys-Met",
              "Met-Cys-Lys-Ala"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On lit dans l’ordre, codon après codon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Rapidité",
          "stepTheme": "Ordre de grandeur",
          "stepTitle": "Une synthèse très rapide",
          "paragraphText": "Une chaîne de **400** acides aminés est faite en moins de **20 secondes** : environ **un acide aminé tous les 1/20 de seconde**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p04_q6",
            "type": "mcq",
            "prompt": "Une chaîne de 400 acides aminés est assemblée en 20 secondes. Combien d’acides aminés sont ajoutés par seconde ?",
            "options": [
              "20",
              "400",
              "8 000",
              "2"
            ],
            "correctAnswerIndex": 0,
            "explanation": "400 ÷ 20 = 20 par seconde."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p04_q1",
          "type": "mcq",
          "prompt": "Dans la synthèse des protéines, laquelle de ces affirmations est vraie ?",
          "options": [
            "La transcription précède la traduction",
            "La traduction précède la transcription",
            "La transcription se fait dans le cytoplasme",
            "La traduction se fait dans le noyau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 2 : 3-a."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p04_q2",
          "type": "mcq",
          "prompt": "Pendant l’initiation, quel est l’anticodon de l’ARNt qui se place en face du codon initiateur AUG ?",
          "options": [
            "UAC",
            "AUG",
            "TAC",
            "UAG"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 3 : l’anticodon appartient à l’ARNt (3-c)."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p04_q3",
          "type": "mcq",
          "prompt": "Que se passe-t-il pendant l’élongation de la traduction ?",
          "options": [
            "Les acides aminés apportés par les ARNt sont reliés par des liaisons peptidiques, et le ribosome avance codon par codon",
            "L’ADN s’ouvre au niveau du gène",
            "L’ARNm sort du noyau",
            "Le ribosome se dissocie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le processus se répète n fois."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p04_q4",
          "type": "mcq",
          "prompt": "Pourquoi la traduction s’arrête-t-elle quand le ribosome atteint un codon stop ?",
          "options": [
            "Parce qu’aucun ARNt ne correspond à ce codon : la chaîne est libérée",
            "Parce que l’ARNm est détruit",
            "Parce que le codon stop porte la méthionine",
            "Parce que le ribosome n’a plus d’énergie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "UAA, UAG, UGA."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p04_q5",
          "type": "mcq",
          "prompt": "D’après le code génétique (AUG : Met ; UGC : Cys ; GCU : Ala ; AAA : Lys), quelle chaîne donne l’ARNm AUG UGC GCU AAA ?",
          "options": [
            "Met-Cys-Ala-Lys",
            "Met-Ala-Cys-Lys",
            "Lys-Ala-Cys-Met",
            "Met-Cys-Lys-Ala"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On lit dans l’ordre, codon après codon."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p04_q6",
          "type": "mcq",
          "prompt": "Une chaîne de 400 acides aminés est assemblée en 20 secondes. Combien d’acides aminés sont ajoutés par seconde ?",
          "options": [
            "20",
            "400",
            "8 000",
            "2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "400 ÷ 20 = 20 par seconde."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l05_synthese_proteines_p05",
      "order": 5,
      "title": "Évaluation : hormones, albinisme et mutations",
      "summary": "Traduire des séquences ; mutations sans effet et mutations qui changent la protéine.",
      "conceptExplanation": "Applications corrigées (avec la convention brin codant = brin transcrit) :\n- Ocytocine et vasopressine : on donne le brin non transcrit. Le brin codant (transcrit) est son complémentaire : ACG ATG TAG GTC TTG ACG GGG GAC CCG pour l’ocytocine. L’ARNm a la séquence du brin non transcrit, avec U à la place de T.\n- Ocytocine : Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly. Vasopressine : Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Arg-Gly. Elles ne diffèrent que par 2 acides aminés (3e : Ile/Phe ; 8e : Leu/Arg), dus à des différences de quelques nucléotides dans leurs gènes.\n- Albinisme : brin codant TAC ACG CGA TTT TAT GTA. Brin complémentaire : ATG TGC GCT AAA ATA CAT. ARNm : AUG UGC GCU AAA AUA CAU. Chaîne : Met-Cys-Ala-Lys-Ile-His.\n- Si le G du 2e triplet (ACG) devient A (ACA), le codon devient UGU : toujours la cystéine, la protéine ne change pas (mutation silencieuse, grâce à la redondance du code). Si ce G devient C (ACC), le codon devient UGG : tryptophane à la place de cystéine, la protéine change.\n- Exercice 2 : ARNm AUG UGC GCU AAA AUA CAU CCG ACG UGA… La chaîne est Met-Cys-Ala-Lys-Ile-His-Pro-Thr : la traduction s’arrête au 9e codon, UGA, un codon stop.\n- Point de vigilance : l’ADN ne contient jamais d’uracile (U), uniquement de la thymine (T), et l’ARN polymérase lit le brin transcrit de 3’ vers 5’.",
      "keyRule": "Brin transcrit → ARNm par complémentarité → acides aminés par le code. Une mutation peut ne rien changer (code redondant) ou changer un acide aminé.",
      "formulas": [],
      "workedExample": {
        "title": "Une mutation silencieuse",
        "statement": "Le codon UGC (Cys) devient UGU. La protéine change-t-elle ?",
        "methodSteps": [
          "D’après le code, UGU désigne aussi la cystéine.",
          "Le code est redondant : deux codons pour le même acide aminé."
        ],
        "conclusion": "La protéine ne change pas : la mutation est silencieuse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Ocytocine",
          "stepTheme": "Situation",
          "stepTitle": "Traduire l’ocytocine",
          "paragraphText": "Brin non transcrit **TGC TAC ATC CAG AAC TGC CCC CTG GGC** → ARNm **UGC UAC AUC CAG AAC UGC CCC CUG GGC** → **Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p05_q1",
            "type": "mcq",
            "prompt": "L’ARNm de l’ocytocine est UGC UAC AUC CAG AAC UGC CCC CUG GGC. D’après le code (UGC : Cys, UAC : Tyr, AUC : Ile, CAG : Gln, AAC : Asn, CCC : Pro, CUG : Leu, GGC : Gly), quelle est la chaîne ?",
            "options": [
              "Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly",
              "Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Arg-Gly",
              "Met-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly",
              "Gly-Leu-Pro-Cys-Asn-Gln-Ile-Tyr-Cys"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lire de 3 en 3, de gauche à droite."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Ocytocine et vasopressine",
            "caption": "Brin non transcrit de l’ADN → ARNm (T remplacé par U) → acides aminés.",
            "tableData": {
              "headers": [
                "",
                "Ocytocine",
                "Vasopressine"
              ],
              "rows": [
                [
                  "Brin non transcrit",
                  "TGC TAC ATC CAG AAC TGC CCC CTG GGC",
                  "TGC TAC TTC CAG AAC TGC CCA AGA GGA"
                ],
                [
                  "ARNm",
                  "UGC UAC AUC CAG AAC UGC CCC CUG GGC",
                  "UGC UAC UUC CAG AAC UGC CCA AGA GGA"
                ],
                [
                  "Chaîne",
                  "Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly",
                  "Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Arg-Gly"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Deux hormones",
          "stepTheme": "Situation",
          "stepTitle": "Ocytocine ou vasopressine ?",
          "paragraphText": "Ocytocine : Cys-Tyr-**Ile**-Gln-Asn-Cys-Pro-**Leu**-Gly. Vasopressine : Cys-Tyr-**Phe**-Gln-Asn-Cys-Pro-**Arg**-Gly. **Deux** acides aminés diffèrent.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p05_q2",
            "type": "mcq",
            "prompt": "L’ocytocine (Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly) et la vasopressine (Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Arg-Gly) sont deux hormones différentes. D’où vient cette différence ?",
            "options": [
              "De deux acides aminés différents (3e et 8e), dus à des différences dans les gènes",
              "De la longueur de la chaîne",
              "Du codon initiateur",
              "D’un nombre de cystéines différent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un petit changement de séquence change la fonction."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Albinisme",
          "stepTheme": "Situation",
          "stepTitle": "La protéine de l’albinisme",
          "paragraphText": "Brin codant **TAC ACG CGA TTT TAT GTA** → ARNm **AUG UGC GCU AAA AUA CAU** → **Met-Cys-Ala-Lys-Ile-His**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p05_q3",
            "type": "mcq",
            "prompt": "Le brin codant (transcrit) d’un gène est TAC ACG CGA TTT TAT GTA. Quel est l’ARN messager ?",
            "options": [
              "AUG UGC GCU AAA AUA CAU",
              "ATG TGC GCT AAA ATA CAT",
              "UAC ACG CGA UUU UAU GUA",
              "AUG UGC GCU UUU AUA CAU"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Complémentaire, avec U à la place de T."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Silencieuse",
          "stepTheme": "Mutation",
          "stepTitle": "Un changement sans effet",
          "paragraphText": "G du 2e triplet → A : ACG devient **ACA**, codon **UGU** : toujours la **cystéine**. La protéine **ne change pas**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p05_q4",
            "type": "mcq",
            "prompt": "Dans un gène, le codon d’ARNm UGC (cystéine) devient UGU après une mutation. Sachant que UGU désigne aussi la cystéine, la protéine est-elle modifiée ?",
            "options": [
              "Non : le code est redondant, l’acide aminé reste la cystéine",
              "Oui : la chaîne s’arrête",
              "Oui : la cystéine devient de la méthionine",
              "Oui : toute la protéine change"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est une mutation silencieuse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Faux-sens",
          "stepTheme": "Mutation",
          "stepTitle": "Un acide aminé change",
          "paragraphText": "G du 2e triplet → C : ACG devient **ACC**, codon **UGG** : **tryptophane** à la place de la **cystéine**. La protéine **change**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p05_q5",
            "type": "mcq",
            "prompt": "Dans un gène, le codon d’ARNm UGC (cystéine) devient UGG après une mutation. Sachant que UGG désigne le tryptophane, que devient la protéine ?",
            "options": [
              "Elle change : un tryptophane remplace une cystéine",
              "Elle ne change pas",
              "Elle s’arrête à ce codon",
              "Elle perd la méthionine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un seul nucléotide peut changer un acide aminé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Codon stop",
          "stepTheme": "Exercice 2",
          "stepTitle": "La lecture s’arrête",
          "paragraphText": "ARNm **AUG UGC GCU AAA AUA CAU CCG ACG UGA…** : au 9e codon, **UGA** est un **codon stop**. La chaîne est **Met-Cys-Ala-Lys-Ile-His-Pro-Thr**.",
          "exercise": {
            "id": "premiere_d_svt_l05_synthese_proteines_p05_q6",
            "type": "mcq",
            "prompt": "Un ARNm se lit AUG UGC GCU AAA AUA CAU CCG ACG UGA UGC AUG UCA. Combien d’acides aminés la chaîne compte-t-elle ?",
            "options": [
              "8, car UGA (9e codon) est un codon stop",
              "12, un par codon",
              "9, car UGA est traduit",
              "11, car le dernier AUG recommence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les codons après UGA ne sont pas traduits."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p05_q1",
          "type": "mcq",
          "prompt": "L’ARNm de l’ocytocine est UGC UAC AUC CAG AAC UGC CCC CUG GGC. D’après le code (UGC : Cys, UAC : Tyr, AUC : Ile, CAG : Gln, AAC : Asn, CCC : Pro, CUG : Leu, GGC : Gly), quelle est la chaîne ?",
          "options": [
            "Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly",
            "Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Arg-Gly",
            "Met-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly",
            "Gly-Leu-Pro-Cys-Asn-Gln-Ile-Tyr-Cys"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lire de 3 en 3, de gauche à droite."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p05_q2",
          "type": "mcq",
          "prompt": "L’ocytocine (Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly) et la vasopressine (Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Arg-Gly) sont deux hormones différentes. D’où vient cette différence ?",
          "options": [
            "De deux acides aminés différents (3e et 8e), dus à des différences dans les gènes",
            "De la longueur de la chaîne",
            "Du codon initiateur",
            "D’un nombre de cystéines différent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un petit changement de séquence change la fonction."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p05_q3",
          "type": "mcq",
          "prompt": "Le brin codant (transcrit) d’un gène est TAC ACG CGA TTT TAT GTA. Quel est l’ARN messager ?",
          "options": [
            "AUG UGC GCU AAA AUA CAU",
            "ATG TGC GCT AAA ATA CAT",
            "UAC ACG CGA UUU UAU GUA",
            "AUG UGC GCU UUU AUA CAU"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Complémentaire, avec U à la place de T."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p05_q4",
          "type": "mcq",
          "prompt": "Dans un gène, le codon d’ARNm UGC (cystéine) devient UGU après une mutation. Sachant que UGU désigne aussi la cystéine, la protéine est-elle modifiée ?",
          "options": [
            "Non : le code est redondant, l’acide aminé reste la cystéine",
            "Oui : la chaîne s’arrête",
            "Oui : la cystéine devient de la méthionine",
            "Oui : toute la protéine change"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est une mutation silencieuse."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p05_q5",
          "type": "mcq",
          "prompt": "Dans un gène, le codon d’ARNm UGC (cystéine) devient UGG après une mutation. Sachant que UGG désigne le tryptophane, que devient la protéine ?",
          "options": [
            "Elle change : un tryptophane remplace une cystéine",
            "Elle ne change pas",
            "Elle s’arrête à ce codon",
            "Elle perd la méthionine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un seul nucléotide peut changer un acide aminé."
        },
        {
          "id": "premiere_d_svt_l05_synthese_proteines_p05_q6",
          "type": "mcq",
          "prompt": "Un ARNm se lit AUG UGC GCU AAA AUA CAU CCG ACG UGA UGC AUG UCA. Combien d’acides aminés la chaîne compte-t-elle ?",
          "options": [
            "8, car UGA (9e codon) est un codon stop",
            "12, un par codon",
            "9, car UGA est traduit",
            "11, car le dernier AUG recommence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les codons après UGA ne sont pas traduits."
        }
      ]
    }
  ]
};
