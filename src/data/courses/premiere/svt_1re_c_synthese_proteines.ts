import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère C_L6_La synthèse des protéines.pdf (Mon école à la maison ; le document l’intitule « Leçon 7 ») ». Première C (la 1re D a sa propre leçon sur ce sujet).
// Fichier généré (scratchpad build_1re_c_svt_b.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_C_L06_SYNTHESE_PROTEINES: CurriculumChapter = {
  "id": "premiere_c_svt_l06_synthese_proteines",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "order": 6,
  "title": "Leçon 6 : La synthèse des protéines",
  "summary": "ADN, ARNm, ARNt et ribosomes ; code génétique (codons, codon initiateur, codons stop, redondance) ; transcription dans le noyau et traduction dans le cytoplasme (initiation, élongation, terminaison) ; ocytocine, vasopressine et drépanocytose.",
  "officialVolumeHours": 9,
  "contentVersion": 2,
  "source": "SVT 1ère C_L6_La synthèse des protéines.pdf (Mon école à la maison ; le document l’intitule « Leçon 7 »)",
  "points": [
    {
      "id": "premiere_c_svt_l06_synthese_proteines_p01",
      "order": 1,
      "title": "Les acteurs de la synthèse des protéines",
      "summary": "ADN, ARNm, ARNt, ribosomes, enzymes et ATP.",
      "conceptExplanation": "Situation : un professeur projette une vidéo de la synthèse des protéines dans une cellule ; les élèves découvrent que les protéines ne se forment pas au hasard.\n- L’ADN, dans le noyau, est le support de l’information génétique ; il sert de matrice.\n- L’ARN messager (ARNm) est une copie de l’information portée par l’ADN ; il la transporte du noyau vers le cytoplasme.\n- L’ARN est fait d’acide phosphorique, d’un sucre (le ribose) et de bases azotées ; l’uracile (U) y remplace la thymine (T). C’est une molécule à une seule chaîne : monocaténaire.\n- L’ARN de transfert (ARNt), de 70 à 80 nucléotides, replié en trèfle, porte un acide aminé et un anticodon qui reconnaît le codon de l’ARNm.\n- Les ribosomes, formés d’une grosse et d’une petite sous-unité, se déplacent le long de l’ARNm : ce sont les ateliers de fabrication des protéines. Ils ont deux sites : le site P (peptidyl) et le site A (aminoacyl).\n- La synthèse demande des enzymes et de l’énergie (ATP).\n- Correction du document : une figure titrée « ribose » montre en fait le ribosome ; le ribose est le sucre de l’ARN.",
      "keyRule": "ADN (matrice, noyau) → ARNm (copie, messager) ; ARNt (acide aminé + anticodon) ; ribosome (atelier, sites P et A) ; enzymes + ATP.",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer ADN et ARN",
        "statement": "Une molécule a une seule chaîne, contient du ribose et de l’uracile. Est-ce de l’ADN ou de l’ARN ?",
        "methodSteps": [
          "Ribose et uracile sont propres à l’ARN.",
          "L’ADN a deux chaînes, du désoxyribose et de la thymine."
        ],
        "conclusion": "C’est de l’ARN."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "ADN",
          "stepTheme": "Support",
          "stepTitle": "L’ADN, support de l’information",
          "paragraphText": "L’**ADN**, dans le **noyau**, porte l’**information génétique** et sert de **matrice** pour la copier.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p01_q1",
            "type": "mcq",
            "prompt": "Quel est le rôle de l’ADN dans la synthèse des protéines ?",
            "options": [
              "Il porte l’information génétique et sert de matrice",
              "Il transporte les acides aminés",
              "Il assemble les acides aminés",
              "Il fournit l’énergie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : 1 vrai."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les acteurs de la synthèse des protéines",
            "caption": "Il faut aussi des enzymes et de l’énergie (ATP).",
            "tableData": {
              "headers": [
                "Acteur",
                "Où ?",
                "Rôle"
              ],
              "rows": [
                [
                  "ADN",
                  "Noyau",
                  "Porte l’information génétique ; sert de matrice"
                ],
                [
                  "ARN messager (ARNm)",
                  "Du noyau au cytoplasme",
                  "Copie de l’information ; la transporte vers le cytoplasme"
                ],
                [
                  "ARN de transfert (ARNt)",
                  "Cytoplasme",
                  "Apporte l’acide aminé ; son anticodon reconnaît le codon"
                ],
                [
                  "Ribosome",
                  "Cytoplasme",
                  "Lit l’ARNm et assemble les acides aminés (sites P et A)"
                ],
                [
                  "ARN polymérase",
                  "Noyau",
                  "Enzyme de la transcription"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "ARNm",
          "stepTheme": "Messager",
          "stepTitle": "L’ARN messager",
          "paragraphText": "L’**ARNm** est une **copie** de l’information de l’ADN ; il la **transporte** du noyau vers le **cytoplasme**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p01_q2",
            "type": "mcq",
            "prompt": "Quel est le rôle de l’ARN messager ?",
            "options": [
              "Transporter une copie de l’information génétique du noyau au cytoplasme",
              "Porter les acides aminés",
              "Lire l’ARNm",
              "Former les ribosomes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Messager = qui transporte un message."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "ARN",
          "stepTheme": "Composition",
          "stepTitle": "ARN et ADN",
          "paragraphText": "L’**ARN** contient du **ribose** et de l’**uracile** (U) à la place de la thymine ; il n’a **qu’une chaîne** (monocaténaire).",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p01_q3",
            "type": "mcq",
            "prompt": "Quelle base azotée l’ARN contient-il à la place de la thymine de l’ADN ?",
            "options": [
              "L’uracile (U)",
              "L’adénine (A)",
              "La guanine (G)",
              "La cytosine (C)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "A-U dans l’ARN, A-T dans l’ADN."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "ADN et ARN",
            "caption": "Deux acides nucléiques, mais des différences importantes.",
            "tableData": {
              "headers": [
                "",
                "ADN",
                "ARN"
              ],
              "rows": [
                [
                  "Sucre",
                  "Désoxyribose",
                  "Ribose"
                ],
                [
                  "Bases",
                  "A, T, C, G",
                  "A, U, C, G (uracile à la place de la thymine)"
                ],
                [
                  "Chaînes",
                  "Deux (bicaténaire)",
                  "Une seule (monocaténaire)"
                ],
                [
                  "Lieu",
                  "Noyau",
                  "Noyau et cytoplasme"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "ARNt",
          "stepTheme": "Transfert",
          "stepTitle": "L’ARN de transfert",
          "paragraphText": "L’**ARNt** porte un **acide aminé** et un **anticodon** complémentaire d’un codon de l’ARNm : il place chaque acide aminé au bon endroit.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p01_q4",
            "type": "mcq",
            "prompt": "Quel est le rôle de l’ARN de transfert ?",
            "options": [
              "Apporter l’acide aminé qui correspond à un codon de l’ARNm",
              "Lire l’ARNm à lui seul",
              "Copier l’ADN",
              "Transporter l’information hors du noyau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité 2 : « l’ARNt assure la lecture de l’ARNm » est faux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Ribosome",
          "stepTheme": "Atelier",
          "stepTitle": "Le ribosome",
          "paragraphText": "Le **ribosome** (grosse + petite sous-unité) se déplace le long de l’**ARNm**, le **lit** et assemble les acides aminés.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p01_q5",
            "type": "mcq",
            "prompt": "Quel est le rôle du ribosome ?",
            "options": [
              "Lire l’ARNm et assembler les acides aminés en protéine",
              "Porter l’information génétique",
              "Fabriquer l’ARNm",
              "Transporter les acides aminés dans le sang"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’atelier de fabrication des protéines."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Activité",
          "stepTitle": "L’ADN est-il un acide ribonucléique ?",
          "paragraphText": "« L’ADN est un acide **ribo**nucléique » : **faux**. L’ADN est l’acide **désoxyribo**nucléique ; c’est l’**ARN** qui est ribonucléique.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p01_q6",
            "type": "mcq",
            "prompt": "« L’ADN est un acide ribonucléique. » Vrai ou faux ?",
            "options": [
              "Faux : l’ADN est l’acide désoxyribonucléique",
              "Vrai",
              "Faux : l’ADN est une protéine",
              "Vrai, comme l’ARN"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La « peptidase » n’est pas non plus une hormone : affirmation 2 fausse."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p01_q1",
          "type": "mcq",
          "prompt": "Quel est le rôle de l’ADN dans la synthèse des protéines ?",
          "options": [
            "Il porte l’information génétique et sert de matrice",
            "Il transporte les acides aminés",
            "Il assemble les acides aminés",
            "Il fournit l’énergie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : 1 vrai."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p01_q2",
          "type": "mcq",
          "prompt": "Quel est le rôle de l’ARN messager ?",
          "options": [
            "Transporter une copie de l’information génétique du noyau au cytoplasme",
            "Porter les acides aminés",
            "Lire l’ARNm",
            "Former les ribosomes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Messager = qui transporte un message."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p01_q3",
          "type": "mcq",
          "prompt": "Quelle base azotée l’ARN contient-il à la place de la thymine de l’ADN ?",
          "options": [
            "L’uracile (U)",
            "L’adénine (A)",
            "La guanine (G)",
            "La cytosine (C)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "A-U dans l’ARN, A-T dans l’ADN."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p01_q4",
          "type": "mcq",
          "prompt": "Quel est le rôle de l’ARN de transfert ?",
          "options": [
            "Apporter l’acide aminé qui correspond à un codon de l’ARNm",
            "Lire l’ARNm à lui seul",
            "Copier l’ADN",
            "Transporter l’information hors du noyau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité 2 : « l’ARNt assure la lecture de l’ARNm » est faux."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p01_q5",
          "type": "mcq",
          "prompt": "Quel est le rôle du ribosome ?",
          "options": [
            "Lire l’ARNm et assembler les acides aminés en protéine",
            "Porter l’information génétique",
            "Fabriquer l’ARNm",
            "Transporter les acides aminés dans le sang"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’atelier de fabrication des protéines."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p01_q6",
          "type": "mcq",
          "prompt": "« L’ADN est un acide ribonucléique. » Vrai ou faux ?",
          "options": [
            "Faux : l’ADN est l’acide désoxyribonucléique",
            "Vrai",
            "Faux : l’ADN est une protéine",
            "Vrai, comme l’ARN"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La « peptidase » n’est pas non plus une hormone : affirmation 2 fausse."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l06_synthese_proteines_p02",
      "order": 2,
      "title": "Le code génétique",
      "summary": "Codons, codon initiateur AUG, codons stop, redondance.",
      "conceptExplanation": "- Le code génétique est la correspondance entre les triplets de nucléotides de l’ARNm et les acides aminés (20 acides aminés).\n- Avec 4 bases (U, C, A, G), on forme 4 × 4 × 4 = 64 triplets.\n- Un codon est un triplet de bases de l’ARNm ; il désigne un acide aminé : c’est la plus petite unité du message génétique.\n- Toute synthèse commence par le codon initiateur AUG, qui désigne la méthionine.\n- La plupart des acides aminés sont désignés par plusieurs codons : le code est redondant (codons synonymes).\n- Trois codons (UAA, UAG, UGA) ne désignent aucun acide aminé : ce sont les codons stop (non-sens), qui marquent la fin du message.\n- L’anticodon est le triplet de l’ARNt complémentaire du codon.\n- Le code génétique est le même chez presque tous les êtres vivants : il est universel. On l’a déchiffré dans les années 1960 avec des ARN de synthèse (poly-U → polyphénylalanine, Nirenberg).",
      "keyRule": "Codon = triplet de l’ARNm = 1 acide aminé. AUG : départ (méthionine). UAA, UAG, UGA : stop. Code redondant et universel.",
      "formulas": [],
      "workedExample": {
        "title": "Traduire un petit ARNm",
        "statement": "Traduisez l’ARNm AUG UUU UGG UAA (AUG méthionine, UUU phénylalanine, UGG tryptophane, UAA stop).",
        "methodSteps": [
          "On lit l’ARNm par triplets à partir de AUG.",
          "Met, Phe, Trp, puis UAA arrête la traduction."
        ],
        "conclusion": "Le peptide est Met-Phe-Trp."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Codon",
          "stepTheme": "Définition",
          "stepTitle": "Le codon",
          "paragraphText": "Un **codon** est un **triplet de bases** de l’ARNm qui désigne un **acide aminé**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p02_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’un codon ?",
            "options": [
              "Un triplet de bases de l’ARNm qui désigne un acide aminé",
              "Un triplet de bases de l’ARNt",
              "Une protéine du ribosome",
              "Un acide aminé du cytoplasme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : 1-A."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "64",
          "stepTheme": "Calcul",
          "stepTitle": "Combien de codons ?",
          "paragraphText": "Avec **4 bases** prises **3 par 3** : 4 × 4 × 4 = **64 codons**, pour une vingtaine d’acides aminés.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p02_q2",
            "type": "mcq",
            "prompt": "Combien de triplets différents peut-on former avec les 4 bases de l’ARNm (U, C, A, G) ?",
            "options": [
              "64",
              "20",
              "12",
              "16"
            ],
            "correctAnswerIndex": 0,
            "explanation": "4 × 4 × 4 = 64."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "AUG",
          "stepTheme": "Départ",
          "stepTitle": "Le codon initiateur",
          "paragraphText": "Toute synthèse commence par le codon **AUG**, qui désigne la **méthionine** : c’est le **codon initiateur**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p02_q3",
            "type": "mcq",
            "prompt": "Quel codon marque le début de toute synthèse de protéine, et quel acide aminé désigne-t-il ?",
            "options": [
              "AUG, la méthionine",
              "UAA, la leucine",
              "UGA, la glycine",
              "GGG, la glycine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La méthionine est souvent retirée ensuite."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Codons stop",
          "stepTheme": "Fin",
          "stepTitle": "Les codons stop",
          "paragraphText": "**UAA**, **UAG** et **UGA** ne désignent **aucun acide aminé** : ce sont les **codons stop**, qui arrêtent la traduction.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p02_q4",
            "type": "mcq",
            "prompt": "Que font les codons UAA, UAG et UGA ?",
            "options": [
              "Ils arrêtent la traduction : aucun acide aminé ne leur correspond",
              "Ils démarrent la traduction",
              "Ils désignent la méthionine",
              "Ils désignent la thymine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On les appelle aussi codons non-sens."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Redondant",
          "stepTheme": "Propriété",
          "stepTitle": "Un code redondant",
          "paragraphText": "La plupart des acides aminés sont désignés par **plusieurs codons** (par exemple, GGU, GGC, GGA et GGG pour la glycine) : le code est **redondant**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p02_q5",
            "type": "mcq",
            "prompt": "La glycine est désignée par GGU, GGC, GGA et GGG. Quelle propriété du code génétique cela illustre-t-il ?",
            "options": [
              "Sa redondance : plusieurs codons pour un même acide aminé",
              "Son universalité",
              "L’existence de codons stop",
              "Le codon initiateur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On parle de codons synonymes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Traduire",
          "stepTheme": "Application",
          "stepTitle": "Lire un ARNm",
          "paragraphText": "On lit l’ARNm **triplet par triplet** depuis AUG jusqu’au codon stop : AUG UUU UGG UAA → **Met-Phe-Trp**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p02_q6",
            "type": "mcq",
            "prompt": "Traduis l’ARNm AUG UUU UGG UAA, sachant que AUG = méthionine, UUU = phénylalanine, UGG = tryptophane et UAA = codon stop.",
            "options": [
              "Met-Phe-Trp",
              "Met-Phe-Trp-Stop-Met",
              "Phe-Met-Trp",
              "Met-Trp"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le codon stop ne donne pas d’acide aminé."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepBadge": "Anticodon",
          "stepTheme": "ARNt",
          "stepTitle": "L’anticodon",
          "paragraphText": "L’**anticodon** est le triplet de l’**ARNt** **complémentaire** du codon : pour le codon AUG, l’anticodon est **UAC**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p02_q7",
            "type": "mcq",
            "prompt": "Quel est l’anticodon de l’ARNt qui reconnaît le codon AUG de l’ARNm ?",
            "options": [
              "UAC",
              "AUG",
              "TAC",
              "GUA"
            ],
            "correctAnswerIndex": 0,
            "explanation": "A-U, U-A, G-C : complémentarité."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p02_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’un codon ?",
          "options": [
            "Un triplet de bases de l’ARNm qui désigne un acide aminé",
            "Un triplet de bases de l’ARNt",
            "Une protéine du ribosome",
            "Un acide aminé du cytoplasme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : 1-A."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p02_q2",
          "type": "mcq",
          "prompt": "Combien de triplets différents peut-on former avec les 4 bases de l’ARNm (U, C, A, G) ?",
          "options": [
            "64",
            "20",
            "12",
            "16"
          ],
          "correctAnswerIndex": 0,
          "explanation": "4 × 4 × 4 = 64."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p02_q3",
          "type": "mcq",
          "prompt": "Quel codon marque le début de toute synthèse de protéine, et quel acide aminé désigne-t-il ?",
          "options": [
            "AUG, la méthionine",
            "UAA, la leucine",
            "UGA, la glycine",
            "GGG, la glycine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La méthionine est souvent retirée ensuite."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p02_q4",
          "type": "mcq",
          "prompt": "Que font les codons UAA, UAG et UGA ?",
          "options": [
            "Ils arrêtent la traduction : aucun acide aminé ne leur correspond",
            "Ils démarrent la traduction",
            "Ils désignent la méthionine",
            "Ils désignent la thymine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On les appelle aussi codons non-sens."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p02_q5",
          "type": "mcq",
          "prompt": "La glycine est désignée par GGU, GGC, GGA et GGG. Quelle propriété du code génétique cela illustre-t-il ?",
          "options": [
            "Sa redondance : plusieurs codons pour un même acide aminé",
            "Son universalité",
            "L’existence de codons stop",
            "Le codon initiateur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On parle de codons synonymes."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p02_q6",
          "type": "mcq",
          "prompt": "Traduis l’ARNm AUG UUU UGG UAA, sachant que AUG = méthionine, UUU = phénylalanine, UGG = tryptophane et UAA = codon stop.",
          "options": [
            "Met-Phe-Trp",
            "Met-Phe-Trp-Stop-Met",
            "Phe-Met-Trp",
            "Met-Trp"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le codon stop ne donne pas d’acide aminé."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p02_q7",
          "type": "mcq",
          "prompt": "Quel est l’anticodon de l’ARNt qui reconnaît le codon AUG de l’ARNm ?",
          "options": [
            "UAC",
            "AUG",
            "TAC",
            "GUA"
          ],
          "correctAnswerIndex": 0,
          "explanation": "A-U, U-A, G-C : complémentarité."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l06_synthese_proteines_p03",
      "order": 3,
      "title": "La transcription",
      "summary": "De l’ADN à l’ARNm, dans le noyau, grâce à l’ARN polymérase.",
      "conceptExplanation": "- La synthèse se fait en deux grandes étapes : la transcription (dans le noyau) puis la traduction (dans le cytoplasme).\n- Transcription : l’ADN s’ouvre localement au niveau du gène utile. L’ARN polymérase se déplace le long d’un seul des deux brins et assemble des ribonucléotides libres complémentaires de ce brin (A face à T, U face à A, C face à G, G face à C). Il se forme l’ARN messager, qui sort ensuite du noyau par les pores nucléaires.\n- Le brin d’ADN qui sert de matrice est appelé, dans ce cours, brin codant ou brin transcrit ; l’autre est le brin non transcrit (ou non codant). L’ARNm a donc la même séquence que le brin non transcrit, avec U à la place de T.\n- Attention aux conventions : dans beaucoup de manuels hors de Côte d’Ivoire, on appelle au contraire « brin codant » le brin non transcrit, dont la séquence est celle de l’ARNm. Il faut lire la consigne : le brin qui sert de matrice est toujours le brin transcrit.",
      "keyRule": "Transcription (noyau, ARN polymérase) : brin transcrit d’ADN → ARNm complémentaire (U face à A). ARNm = séquence du brin non transcrit, T remplacé par U.",
      "formulas": [],
      "workedExample": {
        "title": "Transcrire un brin d’ADN",
        "statement": "Le brin transcrit d’un gène est TAC GGA TTC. Quel est l’ARNm ?",
        "methodSteps": [
          "On écrit la base complémentaire de chaque base : T → A, A → U, C → G, G → C.",
          "TAC → AUG ; GGA → CCU ; TTC → AAG."
        ],
        "conclusion": "ARNm : AUG CCU AAG."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Transcription",
          "stepTheme": "Noyau",
          "stepTitle": "Qu’est-ce que la transcription ?",
          "paragraphText": "La **transcription** est la fabrication d’un **ARNm** à partir d’un brin d’**ADN**, dans le **noyau**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p03_q1",
            "type": "mcq",
            "prompt": "Où se déroule la transcription, et que produit-elle ?",
            "options": [
              "Dans le noyau ; elle produit l’ARN messager",
              "Dans le cytoplasme ; elle produit la protéine",
              "Dans le ribosome ; elle produit l’ADN",
              "Dans la mitochondrie ; elle produit l’ATP"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Transcrire : recopier dans une autre « écriture »."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "De l’ADN à la protéine",
            "caption": "La transcription se fait dans le noyau ; la traduction dans le cytoplasme, sur les ribosomes.",
            "svgContent": "<svg viewBox=\"0 0 560 250\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Noyau : ADN, transcription par l’ARN polymérase, ARNm ; cytoplasme : ribosome, ARNt, traduction, protéine\"><rect x=\"10\" y=\"20\" width=\"240\" height=\"210\" rx=\"18\" fill=\"#8B5CF6\" fill-opacity=\"0.08\" stroke=\"#8B5CF6\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><text x=\"130\" y=\"42\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#8B5CF6\">NOYAU</text><rect x=\"40\" y=\"56\" width=\"180\" height=\"46\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"130\" y=\"75.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">ADN</text><text x=\"130\" y=\"90.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">information génétique</text><line x1=\"130\" y1=\"104\" x2=\"130.0\" y2=\"131.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"130,140 135.0,131.0 125.0,131.0\" fill=\"#94A3B8\"/><text x=\"140\" y=\"118\" font-size=\"10\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">transcription</text><text x=\"140\" y=\"131\" font-size=\"10\" text-anchor=\"start\" font-weight=\"600\" fill=\"currentColor\">(ARN polymérase)</text><rect x=\"40\" y=\"144\" width=\"180\" height=\"46\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"130\" y=\"163.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">ARNm</text><text x=\"130\" y=\"178.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">copie de l’information</text><line x1=\"222\" y1=\"167\" x2=\"291.0\" y2=\"167.0\" stroke=\"#3B82F6\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"300,167 291.0,162.0 291.0,172.0\" fill=\"#3B82F6\"/><text x=\"262\" y=\"158\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">pore</text><text x=\"410\" y=\"42\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">CYTOPLASME</text><rect x=\"310\" y=\"56\" width=\"200\" height=\"46\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"410\" y=\"83\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">ARNt + acides aminés</text><line x1=\"410\" y1=\"104\" x2=\"410.0\" y2=\"131.0\" stroke=\"#F59E0B\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"410,140 415.0,131.0 405.0,131.0\" fill=\"#F59E0B\"/><rect x=\"310\" y=\"144\" width=\"200\" height=\"46\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"410\" y=\"163.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Ribosome</text><text x=\"410\" y=\"178.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">traduction de l’ARNm</text><line x1=\"410\" y1=\"192\" x2=\"410.0\" y2=\"203.0\" stroke=\"#10B981\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"410,212 415.0,203.0 405.0,203.0\" fill=\"#10B981\"/><text x=\"410\" y=\"228\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">Protéine (chaîne d’acides aminés)</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "ARN polymérase",
          "stepTheme": "Enzyme",
          "stepTitle": "L’enzyme de la transcription",
          "paragraphText": "L’**ARN polymérase** ouvre localement l’ADN et assemble les nucléotides de l’ARNm par **complémentarité** avec le brin transcrit.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p03_q2",
            "type": "mcq",
            "prompt": "Quelle enzyme fabrique l’ARNm pendant la transcription ?",
            "options": [
              "L’ARN polymérase",
              "L’ADN polymérase",
              "La peptidase",
              "L’amylase"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’ADN polymérase sert à la réplication de l’ADN."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Complémentarité",
          "stepTheme": "Règle",
          "stepTitle": "Les règles d’appariement",
          "paragraphText": "Face au brin transcrit : **A** donne **U**, **T** donne **A**, **C** donne **G**, **G** donne **C**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p03_q3",
            "type": "mcq",
            "prompt": "Pendant la transcription, quelle base de l’ARNm se place en face d’une adénine (A) du brin transcrit d’ADN ?",
            "options": [
              "L’uracile (U)",
              "La thymine (T)",
              "La guanine (G)",
              "L’adénine (A)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il n’y a pas de thymine dans l’ARN."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Transcrire",
          "stepTheme": "Application",
          "stepTitle": "Écrire l’ARNm",
          "paragraphText": "Brin transcrit **TAC GGA TTC** → ARNm **AUG CCU AAG**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p03_q4",
            "type": "mcq",
            "prompt": "Le brin transcrit d’un gène est TAC GGA TTC. Quelle est la séquence de l’ARNm ?",
            "options": [
              "AUG CCU AAG",
              "ATG CCT AAG",
              "TAC GGA TTC",
              "UAC GGA UUC"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Complémentarité et U à la place de T."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Brin codant",
          "stepTheme": "Convention",
          "stepTitle": "Brin codant ou brin transcrit ?",
          "paragraphText": "Dans ce cours, le brin qui sert de matrice s’appelle **brin codant** ou **brin transcrit** ; l’ARNm a la séquence du **brin non transcrit** (T remplacé par U). D’autres manuels inversent les noms : retiens que la matrice est **toujours** le brin **transcrit**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p03_q5",
            "type": "mcq",
            "prompt": "Un brin non transcrit d’ADN a la séquence TGC TAC. Quelle est la séquence de l’ARNm ?",
            "options": [
              "UGC UAC",
              "ACG AUG",
              "TGC TAC",
              "ACG ATG"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’ARNm reprend la séquence du brin non transcrit, avec U."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Sortie",
          "stepTheme": "Pores",
          "stepTitle": "L’ARNm quitte le noyau",
          "paragraphText": "Une fois formé, l’**ARNm** sort du noyau par les **pores nucléaires** et gagne le **cytoplasme**, où a lieu la traduction.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p03_q6",
            "type": "mcq",
            "prompt": "Par où l’ARNm sort-il du noyau pour gagner le cytoplasme ?",
            "options": [
              "Par les pores de l’enveloppe nucléaire",
              "Par les ribosomes",
              "Par la membrane de la cellule",
              "Il ne sort jamais du noyau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’ADN, lui, reste dans le noyau."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p03_q1",
          "type": "mcq",
          "prompt": "Où se déroule la transcription, et que produit-elle ?",
          "options": [
            "Dans le noyau ; elle produit l’ARN messager",
            "Dans le cytoplasme ; elle produit la protéine",
            "Dans le ribosome ; elle produit l’ADN",
            "Dans la mitochondrie ; elle produit l’ATP"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Transcrire : recopier dans une autre « écriture »."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p03_q2",
          "type": "mcq",
          "prompt": "Quelle enzyme fabrique l’ARNm pendant la transcription ?",
          "options": [
            "L’ARN polymérase",
            "L’ADN polymérase",
            "La peptidase",
            "L’amylase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’ADN polymérase sert à la réplication de l’ADN."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p03_q3",
          "type": "mcq",
          "prompt": "Pendant la transcription, quelle base de l’ARNm se place en face d’une adénine (A) du brin transcrit d’ADN ?",
          "options": [
            "L’uracile (U)",
            "La thymine (T)",
            "La guanine (G)",
            "L’adénine (A)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il n’y a pas de thymine dans l’ARN."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p03_q4",
          "type": "mcq",
          "prompt": "Le brin transcrit d’un gène est TAC GGA TTC. Quelle est la séquence de l’ARNm ?",
          "options": [
            "AUG CCU AAG",
            "ATG CCT AAG",
            "TAC GGA TTC",
            "UAC GGA UUC"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Complémentarité et U à la place de T."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p03_q5",
          "type": "mcq",
          "prompt": "Un brin non transcrit d’ADN a la séquence TGC TAC. Quelle est la séquence de l’ARNm ?",
          "options": [
            "UGC UAC",
            "ACG AUG",
            "TGC TAC",
            "ACG ATG"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’ARNm reprend la séquence du brin non transcrit, avec U."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p03_q6",
          "type": "mcq",
          "prompt": "Par où l’ARNm sort-il du noyau pour gagner le cytoplasme ?",
          "options": [
            "Par les pores de l’enveloppe nucléaire",
            "Par les ribosomes",
            "Par la membrane de la cellule",
            "Il ne sort jamais du noyau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’ADN, lui, reste dans le noyau."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l06_synthese_proteines_p04",
      "order": 4,
      "title": "La traduction",
      "summary": "Initiation, élongation, terminaison sur le ribosome.",
      "conceptExplanation": "- La traduction se fait dans le cytoplasme, sur les ribosomes ; elle transforme la séquence des codons de l’ARNm en séquence d’acides aminés.\n- Initiation : la petite sous-unité du ribosome se fixe sur l’ARNm au niveau du codon initiateur AUG ; l’ARNt portant la méthionine, d’anticodon UAC, s’y place ; la grosse sous-unité s’assemble ; l’ARNt de départ occupe le site P.\n- Élongation : un nouvel ARNt, dont l’anticodon est complémentaire du codon suivant, se place au site A ; une liaison peptidique se forme entre les deux acides aminés ; l’ARNt du site P, déchargé, est libéré ; le ribosome avance d’un codon ; et ainsi de suite.\n- Terminaison : quand le ribosome atteint un codon stop, aucun ARNt ne s’y place ; la chaîne polypeptidique est libérée et les sous-unités se séparent. La méthionine de départ est souvent retirée ensuite.\n- Plusieurs ribosomes peuvent lire le même ARNm à la suite (polysome). La traduction est rapide : une chaîne de 400 acides aminés en moins de 20 secondes.\n- Corrections du document : dans la situation d’évaluation 2, son corrigé appelle « réplication » la phase 1, qui fabrique de l’ARNm à partir de l’ADN ; c’est la transcription (la réplication copie l’ADN en ADN). Il écrit aussi « codon initiateur de l’ARNt » : le codon initiateur est porté par l’ARNm (l’ARNt porte l’anticodon). Enfin, dans le texte à trous, le numéro 12 est « la fin de la synthèse » (le document écrit deux fois 13).",
      "keyRule": "Traduction (cytoplasme, ribosome) : initiation (AUG, site P) → élongation (site A, liaisons peptidiques) → terminaison (codon stop, chaîne libérée).",
      "formulas": [],
      "workedExample": {
        "title": "Suivre l’élongation",
        "statement": "L’ARNt de la méthionine est au site P. Que se passe-t-il quand l’ARNt du codon suivant arrive ?",
        "methodSteps": [
          "Le nouvel ARNt se place au site A, son anticodon face au 2e codon.",
          "Une liaison peptidique relie les deux acides aminés ; le 1er ARNt part ; le ribosome avance d’un codon."
        ],
        "conclusion": "La chaîne s’allonge d’un acide aminé à chaque codon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Traduction",
          "stepTheme": "Cytoplasme",
          "stepTitle": "Qu’est-ce que la traduction ?",
          "paragraphText": "La **traduction** transforme la séquence des **codons** de l’ARNm en séquence d’**acides aminés**, dans le **cytoplasme**, sur les **ribosomes**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p04_q1",
            "type": "mcq",
            "prompt": "Où se déroule la traduction ?",
            "options": [
              "Dans le cytoplasme, sur les ribosomes",
              "Dans le noyau, sur l’ADN",
              "Dans la mitochondrie",
              "Dans l’enveloppe nucléaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : la traduction utilise le code génétique."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "De l’ADN à la protéine",
            "caption": "La transcription se fait dans le noyau ; la traduction dans le cytoplasme, sur les ribosomes.",
            "svgContent": "<svg viewBox=\"0 0 560 250\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Noyau : ADN, transcription par l’ARN polymérase, ARNm ; cytoplasme : ribosome, ARNt, traduction, protéine\"><rect x=\"10\" y=\"20\" width=\"240\" height=\"210\" rx=\"18\" fill=\"#8B5CF6\" fill-opacity=\"0.08\" stroke=\"#8B5CF6\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><text x=\"130\" y=\"42\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#8B5CF6\">NOYAU</text><rect x=\"40\" y=\"56\" width=\"180\" height=\"46\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"130\" y=\"75.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">ADN</text><text x=\"130\" y=\"90.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">information génétique</text><line x1=\"130\" y1=\"104\" x2=\"130.0\" y2=\"131.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"130,140 135.0,131.0 125.0,131.0\" fill=\"#94A3B8\"/><text x=\"140\" y=\"118\" font-size=\"10\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">transcription</text><text x=\"140\" y=\"131\" font-size=\"10\" text-anchor=\"start\" font-weight=\"600\" fill=\"currentColor\">(ARN polymérase)</text><rect x=\"40\" y=\"144\" width=\"180\" height=\"46\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"130\" y=\"163.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">ARNm</text><text x=\"130\" y=\"178.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">copie de l’information</text><line x1=\"222\" y1=\"167\" x2=\"291.0\" y2=\"167.0\" stroke=\"#3B82F6\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"300,167 291.0,162.0 291.0,172.0\" fill=\"#3B82F6\"/><text x=\"262\" y=\"158\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">pore</text><text x=\"410\" y=\"42\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">CYTOPLASME</text><rect x=\"310\" y=\"56\" width=\"200\" height=\"46\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"410\" y=\"83\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">ARNt + acides aminés</text><line x1=\"410\" y1=\"104\" x2=\"410.0\" y2=\"131.0\" stroke=\"#F59E0B\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"410,140 415.0,131.0 405.0,131.0\" fill=\"#F59E0B\"/><rect x=\"310\" y=\"144\" width=\"200\" height=\"46\" rx=\"10\" fill=\"#10B981\" fill-opacity=\"0.14\" stroke=\"#10B981\" stroke-width=\"2\"/><text x=\"410\" y=\"163.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Ribosome</text><text x=\"410\" y=\"178.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">traduction de l’ARNm</text><line x1=\"410\" y1=\"192\" x2=\"410.0\" y2=\"203.0\" stroke=\"#10B981\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"410,212 415.0,203.0 405.0,203.0\" fill=\"#10B981\"/><text x=\"410\" y=\"228\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">Protéine (chaîne d’acides aminés)</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Initiation",
          "stepTheme": "Étape 1",
          "stepTitle": "L’initiation",
          "paragraphText": "La petite sous-unité se fixe sur l’ARNm au **codon AUG** ; l’**ARNt de la méthionine** s’y place, puis la grosse sous-unité s’assemble. Cet ARNt occupe le **site P**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p04_q2",
            "type": "mcq",
            "prompt": "Pendant l’initiation, quel ARNt se place en premier sur le ribosome ?",
            "options": [
              "L’ARNt portant la méthionine, face au codon AUG",
              "L’ARNt portant la glycine, face au codon stop",
              "N’importe quel ARNt",
              "Aucun ARNt"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’initiation démarre toujours sur AUG."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Élongation",
          "stepTheme": "Étape 2",
          "stepTitle": "L’élongation",
          "paragraphText": "Un nouvel ARNt se place au **site A** ; une **liaison peptidique** se forme entre les deux acides aminés ; le ribosome **avance d’un codon**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p04_q3",
            "type": "mcq",
            "prompt": "Pendant l’élongation, que se forme-t-il entre deux acides aminés voisins ?",
            "options": [
              "Une liaison peptidique",
              "Une liaison hydrogène avec l’ADN",
              "Un codon stop",
              "Un anticodon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est ainsi que la chaîne s’allonge."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Terminaison",
          "stepTheme": "Étape 3",
          "stepTitle": "La terminaison",
          "paragraphText": "Quand le ribosome atteint un **codon stop**, aucun ARNt ne s’y fixe : la **chaîne** est **libérée** et les sous-unités se **séparent**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p04_q4",
            "type": "mcq",
            "prompt": "Qu’est-ce qui arrête la traduction ?",
            "options": [
              "L’arrivée du ribosome sur un codon stop",
              "La fin de l’ADN",
              "Le codon AUG",
              "Le manque de ribosomes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "UAA, UAG ou UGA."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Réplication",
          "stepTheme": "Erreur du document",
          "stepTitle": "Transcription, pas réplication",
          "paragraphText": "Le corrigé du document appelle « **réplication** » la phase où l’ADN donne de l’ARNm : c’est la **transcription**. La réplication est la copie de l’ADN en **ADN**, avant une division cellulaire.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p04_q5",
            "type": "mcq",
            "prompt": "Comment s’appelle la phase où une portion d’ADN sert à fabriquer un ARNm dans le noyau ?",
            "options": [
              "La transcription",
              "La réplication",
              "La traduction",
              "La terminaison"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Réplication : ADN → ADN ; transcription : ADN → ARN."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Classer",
          "stepTheme": "Activité",
          "stepTitle": "Transcription ou traduction ?",
          "paragraphText": "Transcription : noyau, ARN polymérase, l’ADN comme base, production d’ARNm. Traduction : cytoplasme, ARNt, code génétique, codon initiateur et codon stop, **polysome**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p04_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces caractéristiques appartient à la traduction ?",
            "options": [
              "L’intervention des ARN de transfert",
              "L’intervention de l’ARN polymérase",
              "Elle se déroule dans le noyau",
              "Elle produit l’ARN messager"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les trois autres sont propres à la transcription."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Polysome",
          "stepTheme": "Efficacité",
          "stepTitle": "Plusieurs ribosomes sur un ARNm",
          "paragraphText": "Plusieurs ribosomes lisent **le même ARNm** à la suite : c’est un **polysome**, qui produit plusieurs copies de la même protéine.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p04_q7",
            "type": "mcq",
            "prompt": "Comment appelle-t-on plusieurs ribosomes qui lisent en même temps le même ARNm ?",
            "options": [
              "Un polysome",
              "Un chromosome",
              "Un anticodon",
              "Un nucléole"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une chaîne de 400 acides aminés est faite en moins de 20 secondes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p04_q1",
          "type": "mcq",
          "prompt": "Où se déroule la traduction ?",
          "options": [
            "Dans le cytoplasme, sur les ribosomes",
            "Dans le noyau, sur l’ADN",
            "Dans la mitochondrie",
            "Dans l’enveloppe nucléaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : la traduction utilise le code génétique."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p04_q2",
          "type": "mcq",
          "prompt": "Pendant l’initiation, quel ARNt se place en premier sur le ribosome ?",
          "options": [
            "L’ARNt portant la méthionine, face au codon AUG",
            "L’ARNt portant la glycine, face au codon stop",
            "N’importe quel ARNt",
            "Aucun ARNt"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’initiation démarre toujours sur AUG."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p04_q3",
          "type": "mcq",
          "prompt": "Pendant l’élongation, que se forme-t-il entre deux acides aminés voisins ?",
          "options": [
            "Une liaison peptidique",
            "Une liaison hydrogène avec l’ADN",
            "Un codon stop",
            "Un anticodon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est ainsi que la chaîne s’allonge."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p04_q4",
          "type": "mcq",
          "prompt": "Qu’est-ce qui arrête la traduction ?",
          "options": [
            "L’arrivée du ribosome sur un codon stop",
            "La fin de l’ADN",
            "Le codon AUG",
            "Le manque de ribosomes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "UAA, UAG ou UGA."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p04_q5",
          "type": "mcq",
          "prompt": "Comment s’appelle la phase où une portion d’ADN sert à fabriquer un ARNm dans le noyau ?",
          "options": [
            "La transcription",
            "La réplication",
            "La traduction",
            "La terminaison"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Réplication : ADN → ADN ; transcription : ADN → ARN."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p04_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces caractéristiques appartient à la traduction ?",
          "options": [
            "L’intervention des ARN de transfert",
            "L’intervention de l’ARN polymérase",
            "Elle se déroule dans le noyau",
            "Elle produit l’ARN messager"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les trois autres sont propres à la transcription."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p04_q7",
          "type": "mcq",
          "prompt": "Comment appelle-t-on plusieurs ribosomes qui lisent en même temps le même ARNm ?",
          "options": [
            "Un polysome",
            "Un chromosome",
            "Un anticodon",
            "Un nucléole"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une chaîne de 400 acides aminés est faite en moins de 20 secondes."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l06_synthese_proteines_p05",
      "order": 5,
      "title": "Évaluation : ocytocine, vasopressine et drépanocytose",
      "summary": "Traduire des séquences, comparer des protéines, trouver une mutation.",
      "conceptExplanation": "- Ocytocine et vasopressine : brins non codants donnés. Selon la convention du cours, on écrit d’abord le brin codant (complémentaire), puis l’ARNm (complémentaire du brin codant, donc identique au brin non codant avec U).\n- Ocytocine : brin codant ACG ATG TAG GTC TTG ACG GGG GAC CCG ; ARNm UGC UAC AUC CAG AAC UGC CCC CUG GGC ; Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly.\n- Vasopressine : brin codant ACG ATG AAG GTC TTG ACG GGT TCT CCT ; ARNm UGC UAC UUC CAG AAC UGC CCA AGA GGA ; Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Arg-Gly.\n- Les deux hormones ne diffèrent que par 2 acides aminés : le 3e (isoleucine/phénylalanine) et le 8e (leucine/arginine).\n- Drépanocytose : la chaîne β de l’hémoglobine S ne diffère de la normale que par le 6e acide aminé : la valine remplace l’acide glutamique. ARNm possibles : GAA (Glu) devient GUA (Val). Brin transcrit : CTT devient CAT : la 17e base, T, est remplacée par A. Une seule base changée dans l’ADN (mutation) suffit à modifier la protéine et à provoquer la maladie.",
      "keyRule": "Brin → ARNm → protéine par le code génétique. Une base changée dans l’ADN (mutation) peut changer un acide aminé et causer une maladie.",
      "formulas": [],
      "workedExample": {
        "title": "Trouver la mutation de la drépanocytose",
        "statement": "Le 6e codon de l’ARNm passe de GAA (Glu) à GUA (Val). Quel changement dans le brin transcrit ?",
        "methodSteps": [
          "Le brin transcrit est complémentaire de l’ARNm : GAA ↔ CTT, GUA ↔ CAT.",
          "CTT devient CAT : la 2e base du 6e triplet, soit la 17e base, passe de T à A."
        ],
        "conclusion": "Une seule base change : c’est une mutation ponctuelle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Ocytocine",
          "stepTheme": "Question 2",
          "stepTitle": "Traduire l’ARNm de l’ocytocine",
          "paragraphText": "ARNm **UGC UAC AUC CAG AAC UGC CCC CUG GGC** → **Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p05_q1",
            "type": "mcq",
            "prompt": "L’ARNm de l’ocytocine commence par UGC UAC AUC (UGC = cystéine, UAC = tyrosine, AUC = isoleucine). Quels sont ses trois premiers acides aminés ?",
            "options": [
              "Cys-Tyr-Ile",
              "Tyr-Cys-Ile",
              "Cys-Tyr-Phe",
              "Ile-Tyr-Cys"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On lit les codons dans l’ordre."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Ocytocine et vasopressine",
            "caption": "Brins non codants donnés ; selon la convention du cours, l’ARNm a la même séquence que le brin non codant (avec U à la place de T).",
            "tableData": {
              "headers": [
                "Position",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
              ],
              "rows": [
                [
                  "ARNm ocytocine",
                  "UGC",
                  "UAC",
                  "AUC",
                  "CAG",
                  "AAC",
                  "UGC",
                  "CCC",
                  "CUG",
                  "GGC"
                ],
                [
                  "Ocytocine",
                  "Cys",
                  "Tyr",
                  "Ile",
                  "Gln",
                  "Asn",
                  "Cys",
                  "Pro",
                  "Leu",
                  "Gly"
                ],
                [
                  "ARNm vasopressine",
                  "UGC",
                  "UAC",
                  "UUC",
                  "CAG",
                  "AAC",
                  "UGC",
                  "CCA",
                  "AGA",
                  "GGA"
                ],
                [
                  "Vasopressine",
                  "Cys",
                  "Tyr",
                  "Phe",
                  "Gln",
                  "Asn",
                  "Cys",
                  "Pro",
                  "Arg",
                  "Gly"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Comparer",
          "stepTheme": "Question 3",
          "stepTitle": "Ocytocine et vasopressine",
          "paragraphText": "Les deux hormones ne diffèrent que par **2 acides aminés** : le **3e** (Ile/Phe) et le **8e** (Leu/Arg).",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p05_q2",
            "type": "mcq",
            "prompt": "Ocytocine : Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly. Vasopressine : Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Arg-Gly. À quelles positions diffèrent-elles ?",
            "options": [
              "À la 3e et à la 8e",
              "À la 1re et à la 9e",
              "Seulement à la 3e",
              "À toutes les positions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux hormones très proches, aux rôles différents."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Brin codant",
          "stepTheme": "Question 1",
          "stepTitle": "Écrire le brin codant",
          "paragraphText": "Le brin codant est **complémentaire** du brin non codant : **TGC** → **ACG**, **TAC** → **ATG**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p05_q3",
            "type": "mcq",
            "prompt": "Le brin non codant de l’ADN de l’ocytocine commence par TGC TAC. Quel est le début du brin codant (complémentaire) ?",
            "options": [
              "ACG ATG",
              "UGC UAC",
              "TGC TAC",
              "ACG AUG"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans l’ADN, A s’apparie avec T et C avec G."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Hémoglobine",
          "stepTheme": "Situation 1",
          "stepTitle": "Comparer les deux chaînes β",
          "paragraphText": "HbA : Val-His-Leu-Thr-Pro-**Glu** ; HbS : Val-His-Leu-Thr-Pro-**Val**. Seul le **6e** acide aminé change.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p05_q4",
            "type": "mcq",
            "prompt": "La chaîne β normale commence par Val-His-Leu-Thr-Pro-Glu, celle de l’hémoglobine S par Val-His-Leu-Thr-Pro-Val. Quelle différence ?",
            "options": [
              "Au 6e acide aminé, la valine remplace l’acide glutamique",
              "Au 1er acide aminé, la glutamine remplace la valine",
              "Aucune différence",
              "Toute la chaîne est différente"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un seul acide aminé suffit à déformer les hématies."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Hémoglobine normale et hémoglobine S",
            "caption": "Six premiers acides aminés de la chaîne β ; une seule base change dans l’ADN.",
            "tableData": {
              "headers": [
                "",
                "Acides aminés",
                "ARNm possible",
                "Brin transcrit d’ADN possible"
              ],
              "rows": [
                [
                  "HbA (normale)",
                  "Val-His-Leu-Thr-Pro-Glu",
                  "GUA CAC CUC ACU CCA GAA",
                  "CAT GTG GAG TGA GGT CTT"
                ],
                [
                  "HbS (anormale)",
                  "Val-His-Leu-Thr-Pro-Val",
                  "GUA CAC CUC ACU CCA GUA",
                  "CAT GTG GAG TGA GGT CAT"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Mutation",
          "stepTheme": "Question 3",
          "stepTitle": "L’origine de la maladie",
          "paragraphText": "Le 6e codon GAA devient **GUA** ; dans le brin transcrit, CTT devient **CAT** : la **17e base** passe de **T** à **A**. C’est une **mutation**.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p05_q5",
            "type": "mcq",
            "prompt": "Le brin transcrit de l’ADN normal se termine par … GGT CTT, celui de l’ADN anormal par … GGT CAT. Quel changement y a-t-il ?",
            "options": [
              "Une seule base change : T remplacé par A",
              "Tout le gène est perdu",
              "Un triplet entier est ajouté",
              "Aucun changement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une mutation ponctuelle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Gène et protéine",
          "stepTheme": "Bilan",
          "stepTitle": "Du gène au caractère",
          "paragraphText": "Une modification d’**une seule base** de l’ADN peut changer **un acide aminé**, donc la **protéine**, et provoquer une **maladie** comme la drépanocytose.",
          "exercise": {
            "id": "premiere_c_svt_l06_synthese_proteines_p05_q6",
            "type": "mcq",
            "prompt": "Que montre l’exemple de la drépanocytose ?",
            "options": [
              "Un changement d’une base de l’ADN peut modifier une protéine et causer une maladie",
              "Les protéines ne dépendent pas de l’ADN",
              "L’ARNm ne sert à rien",
              "Une maladie génétique change toutes les protéines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Gène → protéine → caractère."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p05_q1",
          "type": "mcq",
          "prompt": "L’ARNm de l’ocytocine commence par UGC UAC AUC (UGC = cystéine, UAC = tyrosine, AUC = isoleucine). Quels sont ses trois premiers acides aminés ?",
          "options": [
            "Cys-Tyr-Ile",
            "Tyr-Cys-Ile",
            "Cys-Tyr-Phe",
            "Ile-Tyr-Cys"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On lit les codons dans l’ordre."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p05_q2",
          "type": "mcq",
          "prompt": "Ocytocine : Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly. Vasopressine : Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Arg-Gly. À quelles positions diffèrent-elles ?",
          "options": [
            "À la 3e et à la 8e",
            "À la 1re et à la 9e",
            "Seulement à la 3e",
            "À toutes les positions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux hormones très proches, aux rôles différents."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p05_q3",
          "type": "mcq",
          "prompt": "Le brin non codant de l’ADN de l’ocytocine commence par TGC TAC. Quel est le début du brin codant (complémentaire) ?",
          "options": [
            "ACG ATG",
            "UGC UAC",
            "TGC TAC",
            "ACG AUG"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans l’ADN, A s’apparie avec T et C avec G."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p05_q4",
          "type": "mcq",
          "prompt": "La chaîne β normale commence par Val-His-Leu-Thr-Pro-Glu, celle de l’hémoglobine S par Val-His-Leu-Thr-Pro-Val. Quelle différence ?",
          "options": [
            "Au 6e acide aminé, la valine remplace l’acide glutamique",
            "Au 1er acide aminé, la glutamine remplace la valine",
            "Aucune différence",
            "Toute la chaîne est différente"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un seul acide aminé suffit à déformer les hématies."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p05_q5",
          "type": "mcq",
          "prompt": "Le brin transcrit de l’ADN normal se termine par … GGT CTT, celui de l’ADN anormal par … GGT CAT. Quel changement y a-t-il ?",
          "options": [
            "Une seule base change : T remplacé par A",
            "Tout le gène est perdu",
            "Un triplet entier est ajouté",
            "Aucun changement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une mutation ponctuelle."
        },
        {
          "id": "premiere_c_svt_l06_synthese_proteines_p05_q6",
          "type": "mcq",
          "prompt": "Que montre l’exemple de la drépanocytose ?",
          "options": [
            "Un changement d’une base de l’ADN peut modifier une protéine et causer une maladie",
            "Les protéines ne dépendent pas de l’ADN",
            "L’ARNm ne sert à rien",
            "Une maladie génétique change toutes les protéines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Gène → protéine → caractère."
        }
      ]
    }
  ]
};
