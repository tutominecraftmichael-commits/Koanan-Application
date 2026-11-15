import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère C_L7_La transmission dun caractère héréditaire OK.pdf (Mon école à la maison ; le document l’intitule « Leçon 8 ») ». Première C (la 1re D a sa propre leçon sur ce sujet).
// Fichier généré (scratchpad build_1re_c_svt_b.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_C_L07_TRANSMISSION_CARACTERE_HEREDITAIRE: CurriculumChapter = {
  "id": "premiere_c_svt_l07_transmission_caractere_hereditaire",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "order": 7,
  "title": "Leçon 7 : La transmission d’un caractère héréditaire",
  "summary": "Gène, locus et allèles (système ABO), monohybridisme avec dominance complète (souris), choix des symboles, F1, F2 et échiquier, test-cross, absence de dominance (belle-de-nuit) et lecture des ségrégations.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT 1ère C_L7_La transmission dun caractère héréditaire OK.pdf (Mon école à la maison ; le document l’intitule « Leçon 8 »)",
  "points": [
    {
      "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01",
      "order": 1,
      "title": "Gène, locus et allèles",
      "summary": "Le gène du groupe sanguin ABO : un locus, trois allèles.",
      "conceptExplanation": "Situation : en visite dans une ferme, des élèves remarquent que les lapereaux et les poussins ressemblent à leurs parents par les poils ou la couleur des yeux.\n- Un document montre un chromosome de la paire n° 9 portant le locus du gène du système ABO, et les membranes des hématies.\n- Le gène des groupes sanguins est une portion d’ADN du chromosome ; son emplacement est le locus. Il existe sous trois formes ou allèles : A, B et O.\n- L’allèle A fait produire l’agglutinogène A (une protéine de la membrane des hématies), l’allèle B l’agglutinogène B ; l’allèle O n’en produit aucun. La présence ou l’absence de ces protéines détermine le groupe sanguin.\n- Conclusion : le chromosome porte les gènes, responsables des caractères.\n- Vocabulaire : génétique (étude de la transmission des caractères d’une génération à l’autre) ; hétérozygote (deux allèles différents à un locus) ; gène autosomal (porté par un chromosome non sexuel) ; allèle (forme d’un gène) ; déterminisme génétique (façon dont un ou plusieurs gènes contrôlent un caractère) ; fécondation (union de deux gamètes de sexes différents).\n- Correction du document : son texte parle d’un chromosome « de la paire n° 8 », alors que son schéma indique la paire n° 9 ; le gène du système ABO est bien porté par le chromosome 9.",
      "keyRule": "Gène = portion d’ADN à un locus ; ses formes = allèles (A, B, O pour le groupe sanguin) ; un allèle fait produire une protéine qui donne le caractère.",
      "formulas": [],
      "workedExample": {
        "title": "Relier allèle et protéine",
        "statement": "Une personne a les allèles A et O. Quels agglutinogènes portent ses hématies ?",
        "methodSteps": [
          "L’allèle A fait produire l’agglutinogène A.",
          "L’allèle O ne fait produire aucun agglutinogène."
        ],
        "conclusion": "Ses hématies portent seulement l’agglutinogène A : elle est du groupe A."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Gène",
          "stepTheme": "Définition",
          "stepTitle": "Le gène",
          "paragraphText": "Le **gène** est une **portion d’ADN** d’un chromosome responsable d’un **caractère** ; son emplacement est le **locus**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q1",
            "type": "mcq",
            "prompt": "Comment appelle-t-on l’emplacement d’un gène sur un chromosome ?",
            "options": [
              "Le locus",
              "L’allèle",
              "Le phénotype",
              "Le caryotype"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Locus = lieu."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Allèles",
          "stepTheme": "Groupe ABO",
          "stepTitle": "Les allèles du groupe sanguin",
          "paragraphText": "Le gène des groupes sanguins existe sous **trois allèles** : **A**, **B** et **O**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q2",
            "type": "mcq",
            "prompt": "Combien d’allèles possède le gène du système ABO, et lesquels ?",
            "options": [
              "Trois : A, B et O",
              "Deux : A et B",
              "Quatre : A, B, AB et O",
              "Un seul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "AB est un groupe (phénotype), pas un allèle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Agglutinogènes",
          "stepTheme": "Protéines",
          "stepTitle": "Du gène à la protéine",
          "paragraphText": "L’allèle **A** fait produire l’**agglutinogène A**, l’allèle **B** l’agglutinogène B ; l’allèle **O** n’en produit **aucun**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q3",
            "type": "mcq",
            "prompt": "Quelle protéine l’allèle O fait-il produire à la surface des hématies ?",
            "options": [
              "Aucun agglutinogène",
              "L’agglutinogène A",
              "L’agglutinogène B",
              "Les deux agglutinogènes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’absence de protéine qui donne le groupe O (chez les O//O)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Chromosome 9",
          "stepTheme": "Erreur du document",
          "stepTitle": "Quelle paire de chromosomes ?",
          "paragraphText": "Le texte du document parle de la « paire n° **8** », mais son schéma indique la paire n° **9** : le gène du système ABO est sur le **chromosome 9**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q4",
            "type": "mcq",
            "prompt": "Sur quel chromosome se trouve le gène du système ABO chez l’Homme ?",
            "options": [
              "Le chromosome 9",
              "Le chromosome 8",
              "Le chromosome X",
              "Le chromosome 21"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un autosome : le groupe sanguin ne dépend pas du sexe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Associer",
          "stepTheme": "Activité",
          "stepTitle": "Le vocabulaire",
          "paragraphText": "**Hétérozygote** : génotype à deux allèles **différents** en un locus. **Gène autosomal** : porté par un chromosome **non sexuel**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q5",
            "type": "mcq",
            "prompt": "Comment appelle-t-on un génotype comportant deux allèles différents en un locus ?",
            "options": [
              "Hétérozygote",
              "Homozygote",
              "Autosomal",
              "Haploïde"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Hétéro- : différent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepBadge": "Déterminisme",
          "stepTheme": "Vocabulaire",
          "stepTitle": "Le déterminisme génétique",
          "paragraphText": "Le **déterminisme génétique** est la façon dont **un ou plusieurs gènes** contrôlent un caractère.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q6",
            "type": "mcq",
            "prompt": "Que désigne le déterminisme génétique d’un caractère ?",
            "options": [
              "La façon dont un ou plusieurs gènes contrôlent ce caractère",
              "L’étude des fossiles",
              "L’union de deux gamètes",
              "La forme d’un gène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exemple : un gène autosomal à deux allèles."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q1",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l’emplacement d’un gène sur un chromosome ?",
          "options": [
            "Le locus",
            "L’allèle",
            "Le phénotype",
            "Le caryotype"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Locus = lieu."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q2",
          "type": "mcq",
          "prompt": "Combien d’allèles possède le gène du système ABO, et lesquels ?",
          "options": [
            "Trois : A, B et O",
            "Deux : A et B",
            "Quatre : A, B, AB et O",
            "Un seul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "AB est un groupe (phénotype), pas un allèle."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q3",
          "type": "mcq",
          "prompt": "Quelle protéine l’allèle O fait-il produire à la surface des hématies ?",
          "options": [
            "Aucun agglutinogène",
            "L’agglutinogène A",
            "L’agglutinogène B",
            "Les deux agglutinogènes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’absence de protéine qui donne le groupe O (chez les O//O)."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q4",
          "type": "mcq",
          "prompt": "Sur quel chromosome se trouve le gène du système ABO chez l’Homme ?",
          "options": [
            "Le chromosome 9",
            "Le chromosome 8",
            "Le chromosome X",
            "Le chromosome 21"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un autosome : le groupe sanguin ne dépend pas du sexe."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on un génotype comportant deux allèles différents en un locus ?",
          "options": [
            "Hétérozygote",
            "Homozygote",
            "Autosomal",
            "Haploïde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Hétéro- : différent."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p01_q6",
          "type": "mcq",
          "prompt": "Que désigne le déterminisme génétique d’un caractère ?",
          "options": [
            "La façon dont un ou plusieurs gènes contrôlent ce caractère",
            "L’étude des fossiles",
            "L’union de deux gamètes",
            "La forme d’un gène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exemple : un gène autosomal à deux allèles."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02",
      "order": 2,
      "title": "Dominance complète : les souris grises et blanches",
      "summary": "F1 homogène, F2 en 3/4 et 1/4, choix des symboles.",
      "conceptExplanation": "- 1er croisement : souris grise × souris blanche, toutes deux de lignée pure (homozygotes). Toute la descendance (F1, première génération filiale) est grise : elle est homogène. Le phénotype qui s’exprime seul en F1 est dominant (gris) ; celui qui disparaît est récessif (blanc). C’est l’uniformité des hybrides de F1 (première loi de Mendel).\n- Choix des symboles (convention du cours) : on prend l’initiale du phénotype récessif, en minuscule pour l’allèle récessif et en majuscule pour l’allèle dominant : allèle blanc b, allèle gris B ; phénotypes [b] et [B].\n- 2e croisement : F1 × F1 donne 54 grises et 18 blanches (F2), soit 75 % et 25 % : une ségrégation 3/4, 1/4. Les parents F1 sont hétérozygotes (B//b). Le caractère est gouverné par un couple d’allèles autosomal avec dominance complète.\n- Génotypes : parent gris B//B, parent blanc b//b, F1 B//b.\n- Un caractère héréditaire se transmet de génération en génération. Un phénotype est une forme sous laquelle s’exprime le caractère.\n- Correction du document : dans son vrai ou faux, il déclare faux « un caractère gouverné par un gène autosomal avec dominance complète se traduit par 75 %, 25 % en F2 ». C’est vrai : c’est exactement la ségrégation 3/4, 1/4 de la F2.",
      "keyRule": "F1 homogène → parents homozygotes ; phénotype de F1 = dominant. F2 en 3/4 [dominant] et 1/4 [récessif] → F1 hétérozygotes, un gène, dominance complète.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer les proportions de la F2",
        "statement": "La F2 compte 54 souris grises et 18 blanches. Quelles proportions ?",
        "methodSteps": [
          "Total : 54 + 18 = 72.",
          "Grises : 54 ÷ 72 = 0,75 ; blanches : 18 ÷ 72 = 0,25."
        ],
        "conclusion": "3/4 grises, 1/4 blanches : ségrégation 3/4, 1/4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "F1",
          "stepTheme": "1er croisement",
          "stepTitle": "Une F1 homogène",
          "paragraphText": "Grise × blanche (lignées pures) → **toutes grises**. La F1 est **homogène** : les parents étaient **homozygotes**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q1",
            "type": "mcq",
            "prompt": "On croise une souris grise et une souris blanche de lignées pures : tous les souriceaux sont gris. Que peut-on dire des parents ?",
            "options": [
              "Ils sont homozygotes (lignées pures)",
              "Ils sont hétérozygotes",
              "Ils sont de la même couleur",
              "Ils n’ont pas de gène pour ce caractère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lignée pure = homozygote."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Croisements de souris grises et blanches",
            "caption": "Les souris parentes sont de lignées pures.",
            "tableData": {
              "headers": [
                "Croisement",
                "Résultats",
                "Proportions"
              ],
              "rows": [
                [
                  "1. Grise × blanche",
                  "Toutes grises (F1)",
                  "100 % [B]"
                ],
                [
                  "2. F1 grise × F1 grise",
                  "54 grises, 18 blanches (F2)",
                  "3/4 [B], 1/4 [b]"
                ],
                [
                  "3. F1 grise × parent blanc",
                  "36 grises, 37 blanches",
                  "1/2 [B], 1/2 [b] (test-cross)"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Dominant",
          "stepTheme": "F1",
          "stepTitle": "Le phénotype dominant",
          "paragraphText": "Le phénotype qui s’exprime **seul en F1** (gris) est **dominant** ; celui qui n’apparaît pas (blanc) est **récessif**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q2",
            "type": "mcq",
            "prompt": "En F1, toutes les souris sont grises alors qu’un parent était blanc. Quel phénotype est dominant ?",
            "options": [
              "Le gris",
              "Le blanc",
              "Aucun des deux",
              "Les deux à égalité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le récessif est caché chez l’hétérozygote."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Symboles",
          "stepTheme": "Convention",
          "stepTitle": "Choisir les symboles",
          "paragraphText": "On prend l’**initiale du phénotype récessif** (blanc → **b**) : **b** pour l’allèle récessif, **B** pour l’allèle dominant ; phénotypes **[b]** et **[B]**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q3",
            "type": "mcq",
            "prompt": "Couleur du pelage : gris dominant, blanc récessif. Quel symbole désigne l’allèle gris selon la convention du cours ?",
            "options": [
              "B majuscule, initiale du récessif (blanc) écrite en majuscule",
              "g minuscule",
              "G majuscule",
              "b minuscule"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux allèles portent la même lettre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Proportions",
          "stepTheme": "2e croisement",
          "stepTitle": "Calculer la ségrégation",
          "paragraphText": "F2 : **54** grises et **18** blanches sur **72** : 54 ÷ 72 = **75 %** (3/4), 18 ÷ 72 = **25 %** (1/4).",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q4",
            "type": "mcq",
            "prompt": "Deux souris grises de F1 donnent 54 souriceaux gris et 18 blancs. Quelles sont les proportions ?",
            "options": [
              "3/4 gris et 1/4 blancs",
              "1/2 gris et 1/2 blancs",
              "1/4 gris et 3/4 blancs",
              "100 % gris"
            ],
            "correctAnswerIndex": 0,
            "explanation": "54 + 18 = 72."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Hétérozygotes",
          "stepTheme": "Interprétation",
          "stepTitle": "Ce que révèle 3/4, 1/4",
          "paragraphText": "Une F2 en **3/4, 1/4** révèle : **un seul gène** autosomal, **dominance complète**, et des parents F1 **hétérozygotes** (B//b).",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q5",
            "type": "mcq",
            "prompt": "Deux souris de même phénotype donnent 3/4 de descendants de ce phénotype et 1/4 de l’autre. Quel est leur génotype ?",
            "options": [
              "Hétérozygote, B//b chacune",
              "Homozygote dominant, B//B chacune",
              "Homozygote récessif chacune",
              "Une B//B et une b//b"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le phénotype récessif ne peut apparaître que si les deux parents portent b."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Erreur du document",
          "stepTitle": "75 % et 25 % en F2",
          "paragraphText": "Le corrigé du document déclare **faux** : « un gène autosomal avec dominance complète donne 75 % et 25 % en F2 ». C’est **vrai** : c’est la ségrégation 3/4, 1/4.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q6",
            "type": "mcq",
            "prompt": "« Un caractère gouverné par un gène autosomal avec dominance complète donne des proportions de 75 % et 25 % en F2. » Vrai ou faux ?",
            "options": [
              "Vrai",
              "Faux",
              "Vrai, seulement chez les plantes",
              "Faux : on obtient toujours 50 % et 50 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la même chose que l’affirmation 2, déclarée vraie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q1",
          "type": "mcq",
          "prompt": "On croise une souris grise et une souris blanche de lignées pures : tous les souriceaux sont gris. Que peut-on dire des parents ?",
          "options": [
            "Ils sont homozygotes (lignées pures)",
            "Ils sont hétérozygotes",
            "Ils sont de la même couleur",
            "Ils n’ont pas de gène pour ce caractère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lignée pure = homozygote."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q2",
          "type": "mcq",
          "prompt": "En F1, toutes les souris sont grises alors qu’un parent était blanc. Quel phénotype est dominant ?",
          "options": [
            "Le gris",
            "Le blanc",
            "Aucun des deux",
            "Les deux à égalité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le récessif est caché chez l’hétérozygote."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q3",
          "type": "mcq",
          "prompt": "Couleur du pelage : gris dominant, blanc récessif. Quel symbole désigne l’allèle gris selon la convention du cours ?",
          "options": [
            "B majuscule, initiale du récessif (blanc) écrite en majuscule",
            "g minuscule",
            "G majuscule",
            "b minuscule"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux allèles portent la même lettre."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q4",
          "type": "mcq",
          "prompt": "Deux souris grises de F1 donnent 54 souriceaux gris et 18 blancs. Quelles sont les proportions ?",
          "options": [
            "3/4 gris et 1/4 blancs",
            "1/2 gris et 1/2 blancs",
            "1/4 gris et 3/4 blancs",
            "100 % gris"
          ],
          "correctAnswerIndex": 0,
          "explanation": "54 + 18 = 72."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q5",
          "type": "mcq",
          "prompt": "Deux souris de même phénotype donnent 3/4 de descendants de ce phénotype et 1/4 de l’autre. Quel est leur génotype ?",
          "options": [
            "Hétérozygote, B//b chacune",
            "Homozygote dominant, B//B chacune",
            "Homozygote récessif chacune",
            "Une B//B et une b//b"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le phénotype récessif ne peut apparaître que si les deux parents portent b."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p02_q6",
          "type": "mcq",
          "prompt": "« Un caractère gouverné par un gène autosomal avec dominance complète donne des proportions de 75 % et 25 % en F2. » Vrai ou faux ?",
          "options": [
            "Vrai",
            "Faux",
            "Vrai, seulement chez les plantes",
            "Faux : on obtient toujours 50 % et 50 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la même chose que l’affirmation 2, déclarée vraie."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03",
      "order": 3,
      "title": "L’échiquier de croisement et le test-cross",
      "summary": "Vérifier une hypothèse ; reconnaître un hétérozygote.",
      "conceptExplanation": "- L’interprétation chromosomique vérifie l’hypothèse : on écrit les phénotypes et les génotypes des parents, leurs gamètes avec leurs proportions, puis l’échiquier de croisement (gamètes mâles d’un côté, femelles de l’autre).\n- 1er croisement : B//B × b//b. Gamètes : 100 % B et 100 % b. F1 : 100 % B//b, de phénotype [B].\n- 2e croisement : B//b × B//b. Chaque parent donne 1/2 B et 1/2 b. Échiquier : 1/4 B//B, 1/2 B//b, 1/4 b//b, soit 3/4 [B] et 1/4 [b], conforme aux résultats (54 et 18).\n- 3e croisement : F1 grise B//b × parent blanc b//b : 36 grises et 37 blanches, soit 1/2 et 1/2. C’est un test-cross : on croise un individu de phénotype dominant avec un homozygote récessif. Les proportions des descendants reflètent les gamètes de l’individu testé.\n- Si le test-cross donne 100 % [B], l’individu testé était B//B ; s’il donne 1/2 [B] et 1/2 [b], il était B//b.",
      "keyRule": "Échiquier : gamètes × gamètes. B//b × B//b → 3/4 [B], 1/4 [b]. Test-cross (× b//b) : 1/2, 1/2 → individu testé hétérozygote.",
      "formulas": [],
      "workedExample": {
        "title": "Utiliser un test-cross",
        "statement": "Une souris grise croisée avec une souris blanche donne 36 grises et 37 blanches. Quel est son génotype ?",
        "methodSteps": [
          "La souris blanche (b//b) ne donne que des gamètes b.",
          "Moitié grises, moitié blanches : la souris grise donnait moitié B, moitié b."
        ],
        "conclusion": "La souris grise est hétérozygote, B//b."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Gamètes",
          "stepTheme": "Méiose",
          "stepTitle": "Les gamètes d’un hétérozygote",
          "paragraphText": "Un individu **B//b** produit **1/2** de gamètes **B** et **1/2** de gamètes **b** : les deux allèles se séparent à la méiose.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q1",
            "type": "mcq",
            "prompt": "Quels gamètes produit une souris hétérozygote B//b, et en quelles proportions ?",
            "options": [
              "1/2 de gamètes B et 1/2 de gamètes b",
              "Uniquement des gamètes portant l’allèle dominant",
              "Uniquement des gamètes portant l’allèle récessif",
              "1/4 B et 3/4 b"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la « pureté des gamètes » : un seul allèle par gamète."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Échiquier du 2e croisement : B//b × B//b",
            "caption": "Trois quarts de souris grises, un quart de souris blanches.",
            "tableData": {
              "headers": [
                "Gamètes",
                "B (1/2)",
                "b (1/2)"
              ],
              "rows": [
                [
                  "B (1/2)",
                  "B//B [B] 1/4",
                  "B//b [B] 1/4"
                ],
                [
                  "b (1/2)",
                  "B//b [B] 1/4",
                  "b//b [b] 1/4"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Échiquier",
          "stepTheme": "2e croisement",
          "stepTitle": "L’échiquier de la F2",
          "paragraphText": "B//b × B//b : **1/4 B//B**, **1/2 B//b**, **1/4 b//b** ; soit **3/4 [B]** et **1/4 [b]**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q2",
            "type": "mcq",
            "prompt": "Dans l’échiquier B//b × B//b, quelle proportion des descendants est de génotype b//b ?",
            "options": [
              "1/4",
              "1/2",
              "3/4",
              "0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il faut un b du père et un b de la mère."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Génotypes",
          "stepTheme": "F2",
          "stepTitle": "Les génotypes des souris grises",
          "paragraphText": "Parmi les souris **grises** de F2, certaines sont **B//B**, d’autres **B//b** : le phénotype seul ne permet pas de les distinguer.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q3",
            "type": "mcq",
            "prompt": "Une souris grise de F2 peut-elle être hétérozygote ?",
            "options": [
              "Oui : une souris grise peut être homozygote ou hétérozygote",
              "Non : une souris grise est forcément homozygote",
              "Non : une souris grise est forcément hétérozygote",
              "On ne peut pas avoir de souris grise en F2"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seul un test-cross permet de trancher."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Test-cross",
          "stepTheme": "Définition",
          "stepTitle": "Le test-cross",
          "paragraphText": "Le **test-cross** est le croisement d’un individu de phénotype **dominant** avec un individu **homozygote récessif**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q4",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’un test-cross ?",
            "options": [
              "Le croisement d’un individu de phénotype dominant avec un homozygote récessif",
              "Le croisement d’un hybride F1 avec un homozygote dominant",
              "Le croisement de deux hybrides F1",
              "Le croisement de deux lignées pures"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : « test-cross avec un homozygote dominant » est faux."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Test-cross : B//b × b//b",
            "caption": "Les proportions des descendants reflètent les gamètes de l’individu testé.",
            "tableData": {
              "headers": [
                "Gamètes",
                "b (100 %)"
              ],
              "rows": [
                [
                  "B (1/2)",
                  "B//b [B] 1/2"
                ],
                [
                  "b (1/2)",
                  "b//b [b] 1/2"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "1/2 ; 1/2",
          "stepTheme": "3e croisement",
          "stepTitle": "Interpréter le test-cross",
          "paragraphText": "**36** grises et **37** blanches : environ **1/2** et **1/2**. L’individu gris testé est **hétérozygote B//b**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q5",
            "type": "mcq",
            "prompt": "Une souris grise croisée avec une souris blanche (b//b) donne 36 grises et 37 blanches. Quel est le génotype de la souris grise ?",
            "options": [
              "Hétérozygote B//b",
              "Homozygote dominant B//B",
              "Homozygote récessif",
              "On ne peut rien dire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un B//B aurait donné 100 % de souris grises."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Reflet",
          "stepTheme": "Principe",
          "stepTitle": "Pourquoi le test-cross est utile",
          "paragraphText": "Comme l’homozygote récessif ne donne que des gamètes **b**, les descendants **reflètent les gamètes** de l’individu testé, en nature et en proportion.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q6",
            "type": "mcq",
            "prompt": "Un test-cross donne 100 % de descendants gris. Quel était le génotype de l’individu gris testé ?",
            "options": [
              "Homozygote B//B",
              "Hétérozygote B//b",
              "Homozygote récessif",
              "Impossible à savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il n’a donné que des gamètes B."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q1",
          "type": "mcq",
          "prompt": "Quels gamètes produit une souris hétérozygote B//b, et en quelles proportions ?",
          "options": [
            "1/2 de gamètes B et 1/2 de gamètes b",
            "Uniquement des gamètes portant l’allèle dominant",
            "Uniquement des gamètes portant l’allèle récessif",
            "1/4 B et 3/4 b"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la « pureté des gamètes » : un seul allèle par gamète."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q2",
          "type": "mcq",
          "prompt": "Dans l’échiquier B//b × B//b, quelle proportion des descendants est de génotype b//b ?",
          "options": [
            "1/4",
            "1/2",
            "3/4",
            "0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il faut un b du père et un b de la mère."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q3",
          "type": "mcq",
          "prompt": "Une souris grise de F2 peut-elle être hétérozygote ?",
          "options": [
            "Oui : une souris grise peut être homozygote ou hétérozygote",
            "Non : une souris grise est forcément homozygote",
            "Non : une souris grise est forcément hétérozygote",
            "On ne peut pas avoir de souris grise en F2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seul un test-cross permet de trancher."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q4",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’un test-cross ?",
          "options": [
            "Le croisement d’un individu de phénotype dominant avec un homozygote récessif",
            "Le croisement d’un hybride F1 avec un homozygote dominant",
            "Le croisement de deux hybrides F1",
            "Le croisement de deux lignées pures"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : « test-cross avec un homozygote dominant » est faux."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q5",
          "type": "mcq",
          "prompt": "Une souris grise croisée avec une souris blanche (b//b) donne 36 grises et 37 blanches. Quel est le génotype de la souris grise ?",
          "options": [
            "Hétérozygote B//b",
            "Homozygote dominant B//B",
            "Homozygote récessif",
            "On ne peut rien dire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un B//B aurait donné 100 % de souris grises."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p03_q6",
          "type": "mcq",
          "prompt": "Un test-cross donne 100 % de descendants gris. Quel était le génotype de l’individu gris testé ?",
          "options": [
            "Homozygote B//B",
            "Hétérozygote B//b",
            "Homozygote récessif",
            "Impossible à savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il n’a donné que des gamètes B."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04",
      "order": 4,
      "title": "Sans dominance : la belle-de-nuit",
      "summary": "F1 rose intermédiaire, F2 en 1/4, 1/2, 1/4.",
      "conceptExplanation": "- 1er croisement : belle-de-nuit à fleurs rouges × belle-de-nuit à fleurs blanches (lignées pures) : toutes les plantes de F1 ont des fleurs roses, intermédiaires. Aucun allèle ne domine l’autre.\n- Symboles : quand il n’y a pas de dominance, chaque allèle prend l’initiale de son phénotype, en majuscule : allèle rouge R, allèle blanc B. Phénotypes : [R] rouge, [B] blanc, [RB] rose. Génotypes : R//R, B//B et R//B.\n- 2e croisement : rose × rose donne 120 rouges, 242 roses, 121 blanches, soit 1/4, 1/2, 1/4. Les parents roses sont hétérozygotes R//B. Échiquier : 1/4 R//R [R], 1/2 R//B [RB], 1/4 B//B [B].\n- Chaque phénotype correspond ici à un seul génotype : on peut lire les génotypes directement sur les phénotypes.\n- Vocabulaire : le document parle de « codominance ». Comme l’hétérozygote rose est intermédiaire, on parle plus précisément de dominance intermédiaire (ou semi-dominance) ; le mot codominance s’emploie surtout quand les deux allèles s’expriment côte à côte, comme dans le groupe sanguin AB.\n- Correction du document : il donne un « allèle rose : BR ». Il n’existe pas d’allèle rose : le rose est le phénotype [RB] des hétérozygotes R//B, qui portent un allèle R et un allèle B.",
      "keyRule": "Sans dominance : F1 intermédiaire ; F2 en 1/4, 1/2, 1/4. Allèles R et B ; rose = hétérozygote R//B, phénotype [RB].",
      "formulas": [],
      "workedExample": {
        "title": "Calculer la F2 de la belle-de-nuit",
        "statement": "La F2 compte 120 rouges, 242 roses et 121 blanches. Quelles proportions ?",
        "methodSteps": [
          "Total : 120 + 242 + 121 = 483.",
          "Rouges ≈ 25 %, roses ≈ 50 %, blanches ≈ 25 %."
        ],
        "conclusion": "Ségrégation 1/4, 1/2, 1/4 : un gène, sans dominance."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "F1 rose",
          "stepTheme": "1er croisement",
          "stepTitle": "Une F1 intermédiaire",
          "paragraphText": "Rouge × blanche (lignées pures) → **toutes roses** : un phénotype **intermédiaire**. Aucun allèle ne domine.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q1",
            "type": "mcq",
            "prompt": "On croise une belle-de-nuit à fleurs rouges et une à fleurs blanches, de lignées pures : toutes les plantes obtenues ont des fleurs roses. Que montre ce résultat ?",
            "options": [
              "Aucun allèle ne domine l’autre : le phénotype est intermédiaire",
              "Le rouge est dominant",
              "Le blanc est dominant",
              "Les parents sont hétérozygotes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le rose n’est ni rouge ni blanc."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Belle-de-nuit : rouge × blanche",
            "caption": "Pas de dominance : l’hétérozygote est rose, intermédiaire.",
            "tableData": {
              "headers": [
                "Génération",
                "Résultats",
                "Proportions"
              ],
              "rows": [
                [
                  "F1 (rouge × blanche)",
                  "Toutes roses",
                  "100 % [RB]"
                ],
                [
                  "F2 (rose × rose)",
                  "120 rouges, 242 roses, 121 blanches",
                  "1/4 [R], 1/2 [RB], 1/4 [B]"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Symboles",
          "stepTheme": "Convention",
          "stepTitle": "Les symboles sans dominance",
          "paragraphText": "Chaque allèle prend l’**initiale de son phénotype** en **majuscule** : rouge **R**, blanc **B**. Le phénotype rose s’écrit **[RB]**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q2",
            "type": "mcq",
            "prompt": "Sans dominance, comment note-t-on les allèles rouge et blanc de la belle-de-nuit ?",
            "options": [
              "R pour rouge et B pour blanc, tous deux en majuscule",
              "r et b en minuscule",
              "R pour rouge et r pour blanc",
              "RB pour rose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Aucun n’est récessif : pas de minuscule."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Allèle rose ?",
          "stepTheme": "Erreur du document",
          "stepTitle": "Il n’y a pas d’allèle rose",
          "paragraphText": "Le document écrit « **allèle rose : BR** ». Il n’existe **pas d’allèle rose** : une plante rose est **hétérozygote R//B**, de phénotype **[RB]**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q3",
            "type": "mcq",
            "prompt": "Quel est le génotype d’une belle-de-nuit à fleurs roses ?",
            "options": [
              "R//B, avec un allèle rouge et un allèle blanc",
              "Deux allèles « rose »",
              "R//R",
              "B//B"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le rose vient de l’association des deux allèles."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "F2",
          "stepTheme": "2e croisement",
          "stepTitle": "Calculer la ségrégation",
          "paragraphText": "F2 : **120** rouges, **242** roses, **121** blanches sur **483** : **1/4**, **1/2**, **1/4**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q4",
            "type": "mcq",
            "prompt": "Deux belles-de-nuit roses donnent 120 plantes rouges, 242 roses et 121 blanches. Quelles proportions ?",
            "options": [
              "1/4 rouges, 1/2 roses, 1/4 blanches",
              "3/4 roses, 1/4 blanches",
              "1/2 rouges, 1/2 blanches",
              "100 % roses"
            ],
            "correctAnswerIndex": 0,
            "explanation": "120 + 242 + 121 = 483."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Échiquier",
          "stepTheme": "Vérification",
          "stepTitle": "L’échiquier rose × rose",
          "paragraphText": "R//B × R//B : **1/4 R//R** [R], **1/2 R//B** [RB], **1/4 B//B** [B].",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q5",
            "type": "mcq",
            "prompt": "Dans le croisement R//B × R//B, quelle proportion des descendants est rose (R//B) ?",
            "options": [
              "1/2",
              "1/4",
              "3/4",
              "0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux cases sur quatre de l’échiquier."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Intermédiaire",
          "stepTheme": "Vocabulaire",
          "stepTitle": "Codominance ou dominance intermédiaire ?",
          "paragraphText": "Le document dit « **codominance** ». Avec un hétérozygote **intermédiaire** (rose), on parle plus précisément de **dominance intermédiaire** ; la codominance désigne surtout deux allèles exprimés côte à côte, comme dans le groupe **AB**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q6",
            "type": "mcq",
            "prompt": "Chez une personne du groupe AB, les deux agglutinogènes A et B sont présents. Comment appelle-t-on cette expression des deux allèles ?",
            "options": [
              "La codominance",
              "La dominance complète de A",
              "La récessivité de B",
              "Le test-cross"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans les deux cas, aucun allèle ne masque l’autre."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q1",
          "type": "mcq",
          "prompt": "On croise une belle-de-nuit à fleurs rouges et une à fleurs blanches, de lignées pures : toutes les plantes obtenues ont des fleurs roses. Que montre ce résultat ?",
          "options": [
            "Aucun allèle ne domine l’autre : le phénotype est intermédiaire",
            "Le rouge est dominant",
            "Le blanc est dominant",
            "Les parents sont hétérozygotes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rose n’est ni rouge ni blanc."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q2",
          "type": "mcq",
          "prompt": "Sans dominance, comment note-t-on les allèles rouge et blanc de la belle-de-nuit ?",
          "options": [
            "R pour rouge et B pour blanc, tous deux en majuscule",
            "r et b en minuscule",
            "R pour rouge et r pour blanc",
            "RB pour rose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Aucun n’est récessif : pas de minuscule."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q3",
          "type": "mcq",
          "prompt": "Quel est le génotype d’une belle-de-nuit à fleurs roses ?",
          "options": [
            "R//B, avec un allèle rouge et un allèle blanc",
            "Deux allèles « rose »",
            "R//R",
            "B//B"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rose vient de l’association des deux allèles."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q4",
          "type": "mcq",
          "prompt": "Deux belles-de-nuit roses donnent 120 plantes rouges, 242 roses et 121 blanches. Quelles proportions ?",
          "options": [
            "1/4 rouges, 1/2 roses, 1/4 blanches",
            "3/4 roses, 1/4 blanches",
            "1/2 rouges, 1/2 blanches",
            "100 % roses"
          ],
          "correctAnswerIndex": 0,
          "explanation": "120 + 242 + 121 = 483."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q5",
          "type": "mcq",
          "prompt": "Dans le croisement R//B × R//B, quelle proportion des descendants est rose (R//B) ?",
          "options": [
            "1/2",
            "1/4",
            "3/4",
            "0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux cases sur quatre de l’échiquier."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p04_q6",
          "type": "mcq",
          "prompt": "Chez une personne du groupe AB, les deux agglutinogènes A et B sont présents. Comment appelle-t-on cette expression des deux allèles ?",
          "options": [
            "La codominance",
            "La dominance complète de A",
            "La récessivité de B",
            "Le test-cross"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans les deux cas, aucun allèle ne masque l’autre."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05",
      "order": 5,
      "title": "Évaluation : lire les ségrégations",
      "summary": "Associer ségrégations et interprétations ; exploiter une généalogie de souris.",
      "conceptExplanation": "- Exercice 2 (correspondances) : 100 % (F1 homogène) → parents homozygotes ; 3/4, 1/4 → parents hétérozygotes, dominance complète ; 1/2, 1/2 → test-cross ; 1/4, 1/2, 1/4 → parents hétérozygotes, sans dominance.\n- Situation 2 : souris grise × souris blanche (P) → F1 100 % grises ; F1 × F1 → 198 grises et 72 blanches (F2), soit environ 73 % et 27 %, proches de 3/4 et 1/4 ; des grises de F2 croisées entre elles → 93 grises et 27 blanches ; des blanches de F2 croisées entre elles → 100 % blanches. Il y a quatre croisements.\n- Les souris blanches donnent toujours des blanches : elles sont homozygotes récessives (b//b).\n- Le monohybridisme est l’étude de la transmission d’un seul caractère héréditaire (un gène) chez des diploïdes.\n- Exercice d’approfondissement : un brin codant TAT TTC TCC ATG CCG CTC GTT CGT GCA CGA donne, selon la convention du cours (brin codant = brin transcrit), l’ARNm AUA AAG AGG UAC GGC GAG CAA GCA CGU GCU, traduit en Ile-Lys-Arg-Tyr-Gly-Glu-Gln-Ala-Arg-Ala.",
      "keyRule": "100 % : homozygotes. 3/4 ; 1/4 : hétérozygotes, dominance. 1/2 ; 1/2 : test-cross. 1/4 ; 1/2 ; 1/4 : hétérozygotes, sans dominance.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter un croisement de souris blanches",
        "statement": "Des souris blanches de F2 croisées entre elles donnent 100 % de souris blanches. Pourquoi ?",
        "methodSteps": [
          "Le blanc est récessif : une souris blanche est forcément b//b.",
          "b//b × b//b ne donne que des gamètes b, donc des descendants b//b."
        ],
        "conclusion": "Toute la descendance est blanche."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Associer",
          "stepTheme": "Exercice 2",
          "stepTitle": "Une ségrégation 1/2 ; 1/2",
          "paragraphText": "Une descendance en **1/2 ; 1/2** signale un **test-cross** : hétérozygote × homozygote récessif.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q1",
            "type": "mcq",
            "prompt": "Un croisement donne 1/2 de descendants de phénotype dominant et 1/2 de phénotype récessif. De quel croisement s’agit-il ?",
            "options": [
              "D’un test-cross : hétérozygote × homozygote récessif",
              "De deux hétérozygotes avec dominance",
              "De deux homozygotes dominants",
              "De deux hétérozygotes sans dominance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : A-2, B-3, C-4, D-1."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Lire une ségrégation (monohybridisme)",
            "caption": "Exercice 2 : faire correspondre chaque ségrégation à son interprétation.",
            "tableData": {
              "headers": [
                "Ségrégation",
                "Interprétation"
              ],
              "rows": [
                [
                  "100 % (F1 homogène)",
                  "Parents homozygotes (lignées pures)"
                ],
                [
                  "3/4 ; 1/4",
                  "Parents hétérozygotes, dominance complète"
                ],
                [
                  "1/2 ; 1/2",
                  "Test-cross : hétérozygote × homozygote récessif"
                ],
                [
                  "1/4 ; 1/2 ; 1/4",
                  "Parents hétérozygotes, sans dominance"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Associer",
          "stepTheme": "Exercice 2",
          "stepTitle": "Une ségrégation 1/4 ; 1/2 ; 1/4",
          "paragraphText": "Une descendance en **1/4 ; 1/2 ; 1/4** signale des parents **hétérozygotes**, **sans dominance**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q2",
            "type": "mcq",
            "prompt": "Un croisement donne trois phénotypes en proportions 1/4, 1/2 et 1/4. Que peut-on en conclure ?",
            "options": [
              "Les parents sont hétérozygotes et il n’y a pas de dominance",
              "Il y a dominance complète",
              "C’est un test-cross",
              "Les parents sont homozygotes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme la belle-de-nuit rose × rose."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "F2",
          "stepTheme": "Situation 2",
          "stepTitle": "Analyser la F2 de souris",
          "paragraphText": "F2 : **198** grises et **72** blanches sur **270** : environ **73 %** et **27 %**, proches de **3/4** et **1/4**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q3",
            "type": "mcq",
            "prompt": "Une F2 compte 198 souris grises et 72 blanches. De quelle ségrégation théorique ces résultats sont-ils proches ?",
            "options": [
              "3/4 et 1/4",
              "1/2 et 1/2",
              "1/4, 1/2 et 1/4",
              "100 % gris"
            ],
            "correctAnswerIndex": 0,
            "explanation": "198 ÷ 270 ≈ 0,73."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Blanches",
          "stepTheme": "Situation 2",
          "stepTitle": "Les souris blanches entre elles",
          "paragraphText": "Des souris **blanches** croisées entre elles donnent **100 % de blanches** : elles sont toutes **b//b**.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q4",
            "type": "mcq",
            "prompt": "Des souris blanches (phénotype récessif) croisées entre elles donnent 100 % de souris blanches. Quel est leur génotype ?",
            "options": [
              "Homozygote récessif, b//b",
              "Hétérozygote, B//b",
              "Homozygote dominant, B//B",
              "On ne peut pas le savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un phénotype récessif révèle toujours le génotype."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Monohybridisme",
          "stepTheme": "Situation 1",
          "stepTitle": "Qu’est-ce que le monohybridisme ?",
          "paragraphText": "Le **monohybridisme** est l’étude de la transmission d’**un seul caractère** héréditaire, gouverné par **un gène**, chez des êtres diploïdes.",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q5",
            "type": "mcq",
            "prompt": "Qu’appelle-t-on monohybridisme ?",
            "options": [
              "L’étude de la transmission d’un seul caractère héréditaire chez des diploïdes",
              "L’étude de deux caractères à la fois",
              "La formation d’un seul gamète",
              "La fécondation par un seul spermatozoïde"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Mono- : un seul."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Code génétique",
          "stepTheme": "Approfondissement",
          "stepTitle": "Traduire un ARNm",
          "paragraphText": "ARNm **AUA AAG AGG UAC** … → **Ile-Lys-Arg-Tyr**… (AUA isoleucine, AAG lysine, AGG arginine, UAC tyrosine).",
          "exercise": {
            "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q6",
            "type": "mcq",
            "prompt": "L’ARNm commence par AUA AAG AGG UAC, avec AUA = isoleucine, AAG = lysine, AGG = arginine, UAC = tyrosine. Quels sont les quatre premiers acides aminés ?",
            "options": [
              "Ile-Lys-Arg-Tyr",
              "Lys-Ile-Tyr-Arg",
              "Ile-Lys-Tyr-Arg",
              "Tyr-Arg-Lys-Ile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On lit les codons dans l’ordre."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q1",
          "type": "mcq",
          "prompt": "Un croisement donne 1/2 de descendants de phénotype dominant et 1/2 de phénotype récessif. De quel croisement s’agit-il ?",
          "options": [
            "D’un test-cross : hétérozygote × homozygote récessif",
            "De deux hétérozygotes avec dominance",
            "De deux homozygotes dominants",
            "De deux hétérozygotes sans dominance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : A-2, B-3, C-4, D-1."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q2",
          "type": "mcq",
          "prompt": "Un croisement donne trois phénotypes en proportions 1/4, 1/2 et 1/4. Que peut-on en conclure ?",
          "options": [
            "Les parents sont hétérozygotes et il n’y a pas de dominance",
            "Il y a dominance complète",
            "C’est un test-cross",
            "Les parents sont homozygotes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme la belle-de-nuit rose × rose."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q3",
          "type": "mcq",
          "prompt": "Une F2 compte 198 souris grises et 72 blanches. De quelle ségrégation théorique ces résultats sont-ils proches ?",
          "options": [
            "3/4 et 1/4",
            "1/2 et 1/2",
            "1/4, 1/2 et 1/4",
            "100 % gris"
          ],
          "correctAnswerIndex": 0,
          "explanation": "198 ÷ 270 ≈ 0,73."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q4",
          "type": "mcq",
          "prompt": "Des souris blanches (phénotype récessif) croisées entre elles donnent 100 % de souris blanches. Quel est leur génotype ?",
          "options": [
            "Homozygote récessif, b//b",
            "Hétérozygote, B//b",
            "Homozygote dominant, B//B",
            "On ne peut pas le savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un phénotype récessif révèle toujours le génotype."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q5",
          "type": "mcq",
          "prompt": "Qu’appelle-t-on monohybridisme ?",
          "options": [
            "L’étude de la transmission d’un seul caractère héréditaire chez des diploïdes",
            "L’étude de deux caractères à la fois",
            "La formation d’un seul gamète",
            "La fécondation par un seul spermatozoïde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Mono- : un seul."
        },
        {
          "id": "premiere_c_svt_l07_transmission_caractere_hereditaire_p05_q6",
          "type": "mcq",
          "prompt": "L’ARNm commence par AUA AAG AGG UAC, avec AUA = isoleucine, AAG = lysine, AGG = arginine, UAC = tyrosine. Quels sont les quatre premiers acides aminés ?",
          "options": [
            "Ile-Lys-Arg-Tyr",
            "Lys-Ile-Tyr-Arg",
            "Ile-Lys-Tyr-Arg",
            "Tyr-Arg-Lys-Ile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On lit les codons dans l’ordre."
        }
      ]
    }
  ]
};
