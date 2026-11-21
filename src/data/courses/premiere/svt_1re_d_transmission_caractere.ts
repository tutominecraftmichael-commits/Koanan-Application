import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère D_L4_LA TRANSMISSION DUN CARACTERE HEREDITAIRE.pdf (Côte d’Ivoire – École numérique ; durée non indiquée) ». Première D (programme propre à la 1re D).
// Fichier généré (scratchpad build_1re_d_svt_b.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_D_L04_TRANSMISSION_CARACTERE: CurriculumChapter = {
  "id": "premiere_d_svt_l04_transmission_caractere",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "order": 4,
  "title": "Leçon 4 : La transmission d’un caractère héréditaire",
  "summary": "Monohybridisme avec dominance (souris), croisement-test, absence de dominance (belle-de-nuit), caractère lié au sexe (drosophile), vocabulaire de la génétique et échiquiers de croisement.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT 1ère D_L4_LA TRANSMISSION DUN CARACTERE HEREDITAIRE.pdf (Côte d’Ivoire – École numérique ; durée non indiquée)",
  "points": [
    {
      "id": "premiere_d_svt_l04_transmission_caractere_p01",
      "order": 1,
      "title": "Un caractère avec dominance : la souris",
      "summary": "Races pures, F1 homogène, ségrégation ¾ – ¼.",
      "conceptExplanation": "Situation : des élèves du lycée moderne d’Abengourou, en visite dans une ferme, voient des lapereaux et des poussins qui ressemblent à leurs parents (poils, couleur des yeux). Ils veulent comprendre comment un caractère se transmet.\n- Croisement 1 : une souris grise × une souris blanche, de races pures. Tous les descendants (F1) sont gris : la F1 est homogène.\n- Le phénotype qui apparaît en F1 est dominant (gris) ; celui qui disparaît est récessif (blanc).\n- Croisement 2 : souris grises F1 × souris grises F1. On obtient 241 gris et 80 blancs : 241 ÷ 321 ≈ 75 % (¾) et 80 ÷ 321 ≈ 25 % (¼).\n- La ségrégation ¾ – ¼ montre que le caractère est gouverné par un couple d’allèles autosomaux avec dominance complète, et que les souris F1 croisées sont hétérozygotes.\n- Choix des symboles : on prend l’initiale du phénotype récessif. Blanc : b (minuscule, récessif) ; gris : B (majuscule, dominant). Le couple d’allèles est B/b.\n- Génotypes : parent gris B//B, parent blanc b//b, F1 B//b. Échiquier F1 × F1 : ¼ B//B, ½ B//b, ¼ b//b, soit ¾ [B] et ¼ [b].\n- Correction du document : pour le 1er croisement, il dessine le parent gris B//b. Un parent de race pure est homozygote : B//B. C’est pourquoi il ne produit que des gamètes B et que toute la F1 est grise.",
      "keyRule": "F1 homogène : parents de races pures ; le phénotype de la F1 est dominant. F1 × F1 donnant ¾ – ¼ : un couple d’allèles avec dominance complète, F1 hétérozygote.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer une proportion",
        "statement": "241 souris grises et 80 blanches : quelles proportions ?",
        "methodSteps": [
          "Total : 241 + 80 = 321.",
          "Gris : 241 ÷ 321 ≈ 0,75, soit ¾ ; blanc : 80 ÷ 321 ≈ 0,25, soit ¼."
        ],
        "conclusion": "Ségrégation ¾ – ¼ : deux hétérozygotes croisés, dominance complète."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "F1 homogène",
          "stepTheme": "Croisement 1",
          "stepTitle": "Le phénotype dominant",
          "paragraphText": "Gris × blanc (races pures) donne **100 % de gris** : la F1 est **homogène**. Le gris est **dominant**, le blanc **récessif**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p01_q1",
            "type": "mcq",
            "prompt": "Une souris grise et une souris blanche de races pures donnent uniquement des souriceaux gris. Que peut-on dire ?",
            "options": [
              "Le gris est dominant et le blanc récessif",
              "Le blanc est dominant",
              "Le gris et le blanc sont codominants",
              "Les parents sont hétérozygotes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le phénotype récessif est masqué en F1."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Croisements de souris (couleur du pelage)",
            "caption": "Expérience 1 du document, avec les proportions calculées.",
            "tableData": {
              "headers": [
                "Croisement",
                "Descendants",
                "Proportions"
              ],
              "rows": [
                [
                  "1 : gris × blanc (races pures)",
                  "Tous gris",
                  "100 % gris"
                ],
                [
                  "2 : gris F1 × gris F1",
                  "241 gris, 80 blancs",
                  "¾ gris, ¼ blanc"
                ],
                [
                  "3 : gris F1 × blanc (parent)",
                  "36 gris, 37 blancs",
                  "½ gris, ½ blanc"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "¾ – ¼",
          "stepTheme": "Croisement 2",
          "stepTitle": "Calculer les proportions",
          "paragraphText": "F1 × F1 : **241 gris** et **80 blancs** sur **321** : environ **¾** et **¼**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p01_q2",
            "type": "mcq",
            "prompt": "Un croisement de souris grises F1 entre elles donne 241 souriceaux gris et 80 blancs. Quelles sont les proportions ?",
            "options": [
              "Environ ¾ de gris et ¼ de blancs",
              "Environ ½ de gris et ½ de blancs",
              "Environ ¼ de gris et ¾ de blancs",
              "100 % de gris"
            ],
            "correctAnswerIndex": 0,
            "explanation": "241 ÷ 321 ≈ 0,75."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Hétérozygotes",
          "stepTheme": "Interprétation",
          "stepTitle": "Que révèle ¾ – ¼ ?",
          "paragraphText": "La ségrégation **¾ – ¼** révèle **un couple d’allèles** avec **dominance complète** et des parents **hétérozygotes**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p01_q3",
            "type": "mcq",
            "prompt": "Un croisement donne ¾ de descendants au phénotype A et ¼ au phénotype a. Que peut-on en déduire ?",
            "options": [
              "Un couple d’allèles avec dominance complète ; les deux parents croisés sont hétérozygotes",
              "Deux couples d’allèles",
              "Les parents sont de races pures",
              "Le gène est lié au sexe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le phénotype à ¾ est dominant."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Symboles",
          "stepTheme": "Convention",
          "stepTitle": "Choisir les symboles",
          "paragraphText": "On prend l’**initiale du phénotype récessif** : blanc → **b** (récessif), gris → **B** (dominant). Couple d’allèles : **B/b**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p01_q4",
            "type": "mcq",
            "prompt": "Pelage gris (dominant) et pelage blanc (récessif) : quels symboles choisit-on par convention usuelle ?",
            "options": [
              "B pour l’allèle gris et b pour l’allèle blanc",
              "G pour gris et g pour blanc",
              "b pour gris et B pour blanc",
              "G pour gris et B pour blanc"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Majuscule = dominant, minuscule = récessif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Échiquier",
          "stepTheme": "Vérification",
          "stepTitle": "L’échiquier F1 × F1",
          "paragraphText": "Chaque F1 **B//b** donne **50 % B** et **50 % b**. L’échiquier donne **¼ B//B, ½ B//b, ¼ b//b**, soit **¾ [B]** et **¼ [b]**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p01_q5",
            "type": "mcq",
            "prompt": "Deux souris hétérozygotes B//b sont croisées (B : gris dominant, b : blanc récessif). Quelle proportion de souriceaux blancs attend-on ?",
            "options": [
              "¼",
              "½",
              "¾",
              "0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seul b//b est blanc."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Échiquier du croisement F1 × F1",
            "caption": "Chaque souris F1 (B//b) produit 50 % de gamètes B et 50 % de gamètes b.",
            "tableData": {
              "headers": [
                "Gamètes",
                "B (50 %)",
                "b (50 %)"
              ],
              "rows": [
                [
                  "B (50 %)",
                  "B//B : gris (25 %)",
                  "B//b : gris (25 %)"
                ],
                [
                  "b (50 %)",
                  "B//b : gris (25 %)",
                  "b//b : blanc (25 %)"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Race pure",
          "stepTheme": "Erreur du document",
          "stepTitle": "Le parent gris est B//B",
          "paragraphText": "Pour le 1er croisement, le document dessine le parent gris **B//b**. Un parent de **race pure** est **homozygote** : **B//B**. Il ne donne que des gamètes B, d’où une F1 toute grise.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p01_q6",
            "type": "mcq",
            "prompt": "Dans le croisement gris × blanc de races pures qui donne 100 % de gris, quel est le génotype du parent gris ?",
            "options": [
              "B//B, homozygote",
              "B//b, hétérozygote",
              "b//b, homozygote récessif",
              "On ne peut pas le savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un hétérozygote donnerait aussi des blancs."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p01_q1",
          "type": "mcq",
          "prompt": "Une souris grise et une souris blanche de races pures donnent uniquement des souriceaux gris. Que peut-on dire ?",
          "options": [
            "Le gris est dominant et le blanc récessif",
            "Le blanc est dominant",
            "Le gris et le blanc sont codominants",
            "Les parents sont hétérozygotes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le phénotype récessif est masqué en F1."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p01_q2",
          "type": "mcq",
          "prompt": "Un croisement de souris grises F1 entre elles donne 241 souriceaux gris et 80 blancs. Quelles sont les proportions ?",
          "options": [
            "Environ ¾ de gris et ¼ de blancs",
            "Environ ½ de gris et ½ de blancs",
            "Environ ¼ de gris et ¾ de blancs",
            "100 % de gris"
          ],
          "correctAnswerIndex": 0,
          "explanation": "241 ÷ 321 ≈ 0,75."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p01_q3",
          "type": "mcq",
          "prompt": "Un croisement donne ¾ de descendants au phénotype A et ¼ au phénotype a. Que peut-on en déduire ?",
          "options": [
            "Un couple d’allèles avec dominance complète ; les deux parents croisés sont hétérozygotes",
            "Deux couples d’allèles",
            "Les parents sont de races pures",
            "Le gène est lié au sexe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le phénotype à ¾ est dominant."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p01_q4",
          "type": "mcq",
          "prompt": "Pelage gris (dominant) et pelage blanc (récessif) : quels symboles choisit-on par convention usuelle ?",
          "options": [
            "B pour l’allèle gris et b pour l’allèle blanc",
            "G pour gris et g pour blanc",
            "b pour gris et B pour blanc",
            "G pour gris et B pour blanc"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Majuscule = dominant, minuscule = récessif."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p01_q5",
          "type": "mcq",
          "prompt": "Deux souris hétérozygotes B//b sont croisées (B : gris dominant, b : blanc récessif). Quelle proportion de souriceaux blancs attend-on ?",
          "options": [
            "¼",
            "½",
            "¾",
            "0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seul b//b est blanc."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p01_q6",
          "type": "mcq",
          "prompt": "Dans le croisement gris × blanc de races pures qui donne 100 % de gris, quel est le génotype du parent gris ?",
          "options": [
            "B//B, homozygote",
            "B//b, hétérozygote",
            "b//b, homozygote récessif",
            "On ne peut pas le savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un hétérozygote donnerait aussi des blancs."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l04_transmission_caractere_p02",
      "order": 2,
      "title": "Le croisement-test et le vocabulaire",
      "summary": "Croiser avec un homozygote récessif ; gène, locus, allèle, génotype.",
      "conceptExplanation": "- Croisement 3 : une souris grise F1 × une souris blanche (parent). On obtient 36 gris et 37 blancs : environ ½ – ½.\n- Ce croisement avec un homozygote récessif (b//b) s’appelle un croisement-test (ou test-cross). L’homozygote récessif ne donne que des gamètes b : les phénotypes des descendants reflètent donc directement les gamètes de l’autre parent.\n- Une ségrégation ½ – ½ montre que la souris grise testée est hétérozygote (B//b). Si elle était homozygote (B//B), tous les descendants seraient gris.\n- Vocabulaire : un caractère héréditaire se transmet d’une génération à l’autre. Le phénotype est la manifestation visible d’un caractère, noté entre crochets : [B]. Les chromosomes, formés d’ADN, transmettent les caractères.\n- Le gène est une portion d’ADN d’un chromosome qui détermine un caractère ; sa place sur le chromosome est le locus ; ses différentes formes sont les allèles. Le génotype est l’ensemble des allèles d’un individu pour le ou les gènes étudiés.\n- Homozygote : deux allèles identiques (B//B, b//b). Hétérozygote : deux allèles différents (B//b).\n- Exercice d’association : 1 génétique → étude de la transmission des caractères ; 2 hétérozygote → deux allèles différents d’un même gène ; 3 gène autosomal → portion d’ADN d’un autosome ; 4 allèle → forme d’un gène à un locus ; 5 déterminisme génétique → contrôle d’un caractère par un ou plusieurs gènes ; 6 fécondation → union de deux gamètes.",
      "keyRule": "Croisement-test : individu de phénotype dominant × homozygote récessif. ½ – ½ : il est hétérozygote ; 100 % dominant : il est homozygote.",
      "formulas": [],
      "workedExample": {
        "title": "Trouver le génotype d’une souris grise",
        "statement": "Une souris grise croisée avec une souris blanche donne 36 gris et 37 blancs. Quel est son génotype ?",
        "methodSteps": [
          "La blanche (b//b) ne donne que des gamètes b.",
          "La moitié des petits sont blancs : la grise a donné autant de gamètes b que de gamètes B."
        ],
        "conclusion": "La souris grise est hétérozygote : B//b."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Croisement-test",
          "stepTheme": "Croisement 3",
          "stepTitle": "Croiser avec un récessif",
          "paragraphText": "Croiser un individu de phénotype dominant avec un **homozygote récessif** (b//b), c’est faire un **croisement-test**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p02_q1",
            "type": "mcq",
            "prompt": "Pourquoi croise-t-on une souris grise (gris dominant) avec une souris blanche homozygote récessive pour connaître son génotype ?",
            "options": [
              "Parce que la souris blanche ne donne que des gamètes b : les phénotypes des petits reflètent les gamètes de la grise",
              "Parce que la souris blanche est dominante",
              "Parce que cela donne toujours ¾ – ¼",
              "Parce que la blanche est hétérozygote"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le test-cross."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "½ – ½",
          "stepTheme": "Analyse",
          "stepTitle": "Une souris hétérozygote",
          "paragraphText": "Grise × blanche : **36 gris** et **37 blancs**, soit **½ – ½** : la souris grise est **hétérozygote B//b**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p02_q2",
            "type": "mcq",
            "prompt": "Une souris grise croisée avec une souris blanche b//b donne 36 souriceaux gris et 37 blancs. Quel est le génotype de la souris grise ?",
            "options": [
              "B//b, hétérozygote",
              "B//B, homozygote",
              "b//b, homozygote récessif",
              "Elle n’a qu’un allèle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle produit 50 % de gamètes B et 50 % de gamètes b."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Homozygote",
          "stepTheme": "Autre cas",
          "stepTitle": "Si tous les petits sont gris",
          "paragraphText": "Si le croisement-test donne **100 % de gris**, la souris grise testée est **homozygote B//B**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p02_q3",
            "type": "mcq",
            "prompt": "Une souris grise croisée avec une souris blanche b//b ne donne que des souriceaux gris (des dizaines). Quel est le génotype probable de la souris grise ?",
            "options": [
              "B//B, homozygote",
              "B//b, hétérozygote",
              "b//b, homozygote récessif",
              "B//B ou b//b au hasard"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle ne produit que des gamètes B."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Gène et locus",
          "stepTheme": "Vocabulaire",
          "stepTitle": "Gène, locus, allèle",
          "paragraphText": "Le **gène** est une portion d’**ADN** qui détermine un caractère ; sa place sur le chromosome est le **locus** ; ses formes sont les **allèles**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p02_q4",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la place occupée par un gène sur un chromosome ?",
            "options": [
              "Le locus",
              "L’allèle",
              "Le phénotype",
              "Le caryotype"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Locus : « lieu » en latin."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Génotype",
          "stepTheme": "Vocabulaire",
          "stepTitle": "Génotype et phénotype",
          "paragraphText": "Le **phénotype** est la manifestation **visible** d’un caractère, noté [B] ; le **génotype** est l’ensemble des **allèles** de l’individu, noté B//b.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p02_q5",
            "type": "mcq",
            "prompt": "Quelle est la différence entre le phénotype et le génotype d’une souris grise B//b ?",
            "options": [
              "Le phénotype est ce qu’on voit (gris) ; le génotype est la composition en allèles (B//b)",
              "Ce sont deux mots pour la même chose",
              "Le phénotype est la composition en allèles",
              "Le génotype est la couleur visible"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux génotypes différents (B//B, B//b) peuvent donner le même phénotype."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Associer",
          "stepTheme": "Exercice",
          "stepTitle": "Hétérozygote",
          "paragraphText": "Un individu **hétérozygote** porte **deux allèles différents** d’un même gène (B//b) ; un **homozygote** porte deux allèles identiques.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p02_q6",
            "type": "mcq",
            "prompt": "Que signifie « hétérozygote » ?",
            "options": [
              "Présence de deux allèles différents d’un même gène",
              "Présence de deux allèles identiques",
              "Absence de gène",
              "Union de deux gamètes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice : 1-c, 2-b, 3-d, 4-a, 5-f, 6-e."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p02_q1",
          "type": "mcq",
          "prompt": "Pourquoi croise-t-on une souris grise (gris dominant) avec une souris blanche homozygote récessive pour connaître son génotype ?",
          "options": [
            "Parce que la souris blanche ne donne que des gamètes b : les phénotypes des petits reflètent les gamètes de la grise",
            "Parce que la souris blanche est dominante",
            "Parce que cela donne toujours ¾ – ¼",
            "Parce que la blanche est hétérozygote"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le test-cross."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p02_q2",
          "type": "mcq",
          "prompt": "Une souris grise croisée avec une souris blanche b//b donne 36 souriceaux gris et 37 blancs. Quel est le génotype de la souris grise ?",
          "options": [
            "B//b, hétérozygote",
            "B//B, homozygote",
            "b//b, homozygote récessif",
            "Elle n’a qu’un allèle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle produit 50 % de gamètes B et 50 % de gamètes b."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p02_q3",
          "type": "mcq",
          "prompt": "Une souris grise croisée avec une souris blanche b//b ne donne que des souriceaux gris (des dizaines). Quel est le génotype probable de la souris grise ?",
          "options": [
            "B//B, homozygote",
            "B//b, hétérozygote",
            "b//b, homozygote récessif",
            "B//B ou b//b au hasard"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle ne produit que des gamètes B."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p02_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la place occupée par un gène sur un chromosome ?",
          "options": [
            "Le locus",
            "L’allèle",
            "Le phénotype",
            "Le caryotype"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Locus : « lieu » en latin."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p02_q5",
          "type": "mcq",
          "prompt": "Quelle est la différence entre le phénotype et le génotype d’une souris grise B//b ?",
          "options": [
            "Le phénotype est ce qu’on voit (gris) ; le génotype est la composition en allèles (B//b)",
            "Ce sont deux mots pour la même chose",
            "Le phénotype est la composition en allèles",
            "Le génotype est la couleur visible"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux génotypes différents (B//B, B//b) peuvent donner le même phénotype."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p02_q6",
          "type": "mcq",
          "prompt": "Que signifie « hétérozygote » ?",
          "options": [
            "Présence de deux allèles différents d’un même gène",
            "Présence de deux allèles identiques",
            "Absence de gène",
            "Union de deux gamètes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice : 1-c, 2-b, 3-d, 4-a, 5-f, 6-e."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l04_transmission_caractere_p03",
      "order": 3,
      "title": "Sans dominance : la belle-de-nuit",
      "summary": "Phénotype intermédiaire et ségrégation ¼ – ½ – ¼.",
      "conceptExplanation": "- Croisement 1 : belle-de-nuit à fleurs rouges × belle-de-nuit à fleurs blanches (races pures). Toutes les plantes F1 ont des fleurs roses : un phénotype nouveau, intermédiaire entre ceux des parents.\n- Croisement 2 : roses × roses. On obtient 39 rouges, 80 roses et 37 blanches sur 156 : environ ¼ rouges, ½ roses et ¼ blanches.\n- Aucun allèle ne domine l’autre : c’est une absence de dominance (dominance intermédiaire). L’hétérozygote a un phénotype intermédiaire.\n- Symboles : les deux allèles s’écrivent en majuscules, R (rouge) et B (blanc). Rouge : R//R ; blanche : B//B ; rose : R//B, phénotype noté [RB].\n- La ségrégation ¼ – ½ – ¼ révèle deux hétérozygotes croisés : le phénotype à ½ est l’intermédiaire, les phénotypes à ¼ sont ceux des parents de races pures.\n- Correction du document : il parle d’allèles « codominants ». Chez la belle-de-nuit, la fleur rose est un mélange intermédiaire : c’est une dominance intermédiaire. Dans la codominance, les deux allèles s’expriment côte à côte (exemple : le groupe sanguin AB).",
      "keyRule": "Absence de dominance : F1 au phénotype intermédiaire ; F1 × F1 donne ¼ – ½ – ¼. Les deux allèles en majuscules (R//B).",
      "formulas": [],
      "workedExample": {
        "title": "Calculer la ségrégation",
        "statement": "39 rouges, 80 roses, 37 blanches : proportions ?",
        "methodSteps": [
          "Total : 39 + 80 + 37 = 156.",
          "Rouges : 39 ÷ 156 = 0,25 ; roses : 80 ÷ 156 ≈ 0,51 ; blanches : 37 ÷ 156 ≈ 0,24."
        ],
        "conclusion": "Environ ¼ – ½ – ¼ : absence de dominance, F1 hétérozygotes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Fleurs roses",
          "stepTheme": "Croisement 1",
          "stepTitle": "Un phénotype nouveau",
          "paragraphText": "Rouge × blanche (races pures) donne des fleurs **roses** : un phénotype **intermédiaire**. Aucun allèle ne domine.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p03_q1",
            "type": "mcq",
            "prompt": "Une belle-de-nuit à fleurs rouges et une à fleurs blanches, de races pures, donnent uniquement des plantes à fleurs roses. Que montre ce résultat ?",
            "options": [
              "Aucun des deux allèles ne domine : l’hybride a un phénotype intermédiaire",
              "Le rouge est dominant",
              "Le blanc est dominant",
              "Le gène est lié au sexe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La F1 ne ressemble à aucun parent."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "La belle-de-nuit (couleur des fleurs)",
            "caption": "Expérience 2 : sans dominance, l’hybride a un phénotype intermédiaire.",
            "tableData": {
              "headers": [
                "Croisement",
                "Descendants",
                "Proportions"
              ],
              "rows": [
                [
                  "Rouge × blanche (races pures)",
                  "Toutes roses",
                  "100 % roses"
                ],
                [
                  "Rose × rose",
                  "39 rouges, 80 roses, 37 blanches",
                  "¼ rouges, ½ roses, ¼ blanches"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "¼ – ½ – ¼",
          "stepTheme": "Croisement 2",
          "stepTitle": "La ségrégation sans dominance",
          "paragraphText": "Roses × roses : **39 rouges**, **80 roses**, **37 blanches** sur 156 : environ **¼ – ½ – ¼**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p03_q2",
            "type": "mcq",
            "prompt": "Le croisement de belles-de-nuit roses entre elles donne 39 plantes à fleurs rouges, 80 roses et 37 blanches. Quelles proportions observe-t-on ?",
            "options": [
              "Environ ¼ rouges, ½ roses, ¼ blanches",
              "Environ ¾ roses, ¼ blanches",
              "Environ ½ rouges, ½ blanches",
              "100 % roses"
            ],
            "correctAnswerIndex": 0,
            "explanation": "80 ÷ 156 ≈ 0,51."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Symboles",
          "stepTheme": "Convention",
          "stepTitle": "Deux majuscules",
          "paragraphText": "Sans dominance, les deux allèles s’écrivent en **majuscules** : **R** (rouge) et **B** (blanc). La plante rose est **R//B**, notée **[RB]**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p03_q3",
            "type": "mcq",
            "prompt": "Chez la belle-de-nuit, sans dominance, quel est le génotype d’une plante à fleurs roses ?",
            "options": [
              "R//B (hétérozygote)",
              "R//R (homozygote rouge)",
              "B//B (homozygote blanc)",
              "un allèle « rose » sur chaque chromosome"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il n’y a pas d’allèle « rose »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Hétérozygotes",
          "stepTheme": "Interprétation",
          "stepTitle": "Que révèle ¼ – ½ – ¼ ?",
          "paragraphText": "La ségrégation **¼ – ½ – ¼** révèle **deux hétérozygotes** croisés, sans dominance : le phénotype à **½** est l’**intermédiaire**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p03_q4",
            "type": "mcq",
            "prompt": "Un croisement donne ¼ de rouges, ½ de roses et ¼ de blanches. Quel est le génotype des parents croisés ?",
            "options": [
              "Tous deux hétérozygotes R//B",
              "Tous deux homozygotes R//R",
              "Un R//R et un B//B",
              "Un R//B et un B//B"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seul R//B × R//B donne les trois phénotypes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Codominance",
          "stepTheme": "Correction du document",
          "stepTitle": "Intermédiaire ou codominant ?",
          "paragraphText": "Le document parle d’allèles « **codominants** ». La fleur rose est un **mélange intermédiaire** : c’est une **dominance intermédiaire**. Dans la **codominance**, les deux allèles s’expriment **côte à côte**, comme dans le groupe sanguin **AB**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p03_q5",
            "type": "mcq",
            "prompt": "Dans quel cas parle-t-on de codominance plutôt que de dominance intermédiaire ?",
            "options": [
              "Quand les deux allèles s’expriment côte à côte, comme dans le groupe sanguin AB",
              "Quand l’hybride a une couleur mélangée, comme la fleur rose",
              "Quand un allèle masque l’autre",
              "Quand le gène est sur le chromosome Y"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Rose = intermédiaire ; AB = codominance."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Rose × blanche",
          "stepTheme": "Application",
          "stepTitle": "Prévoir un croisement",
          "paragraphText": "Rose **R//B** × blanche **B//B** : gamètes **½ R, ½ B** et **100 % B** → **½ roses** (R//B), **½ blanches** (B//B).",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p03_q6",
            "type": "mcq",
            "prompt": "On croise une belle-de-nuit rose (R//B) avec une belle-de-nuit blanche (B//B). Quelle descendance attend-on ?",
            "options": [
              "½ roses et ½ blanches",
              "¼ rouges, ½ roses, ¼ blanches",
              "100 % roses",
              "½ rouges et ½ blanches"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La blanche ne donne que des gamètes B."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p03_q1",
          "type": "mcq",
          "prompt": "Une belle-de-nuit à fleurs rouges et une à fleurs blanches, de races pures, donnent uniquement des plantes à fleurs roses. Que montre ce résultat ?",
          "options": [
            "Aucun des deux allèles ne domine : l’hybride a un phénotype intermédiaire",
            "Le rouge est dominant",
            "Le blanc est dominant",
            "Le gène est lié au sexe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La F1 ne ressemble à aucun parent."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p03_q2",
          "type": "mcq",
          "prompt": "Le croisement de belles-de-nuit roses entre elles donne 39 plantes à fleurs rouges, 80 roses et 37 blanches. Quelles proportions observe-t-on ?",
          "options": [
            "Environ ¼ rouges, ½ roses, ¼ blanches",
            "Environ ¾ roses, ¼ blanches",
            "Environ ½ rouges, ½ blanches",
            "100 % roses"
          ],
          "correctAnswerIndex": 0,
          "explanation": "80 ÷ 156 ≈ 0,51."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p03_q3",
          "type": "mcq",
          "prompt": "Chez la belle-de-nuit, sans dominance, quel est le génotype d’une plante à fleurs roses ?",
          "options": [
            "R//B (hétérozygote)",
            "R//R (homozygote rouge)",
            "B//B (homozygote blanc)",
            "un allèle « rose » sur chaque chromosome"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il n’y a pas d’allèle « rose »."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p03_q4",
          "type": "mcq",
          "prompt": "Un croisement donne ¼ de rouges, ½ de roses et ¼ de blanches. Quel est le génotype des parents croisés ?",
          "options": [
            "Tous deux hétérozygotes R//B",
            "Tous deux homozygotes R//R",
            "Un R//R et un B//B",
            "Un R//B et un B//B"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seul R//B × R//B donne les trois phénotypes."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p03_q5",
          "type": "mcq",
          "prompt": "Dans quel cas parle-t-on de codominance plutôt que de dominance intermédiaire ?",
          "options": [
            "Quand les deux allèles s’expriment côte à côte, comme dans le groupe sanguin AB",
            "Quand l’hybride a une couleur mélangée, comme la fleur rose",
            "Quand un allèle masque l’autre",
            "Quand le gène est sur le chromosome Y"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Rose = intermédiaire ; AB = codominance."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p03_q6",
          "type": "mcq",
          "prompt": "On croise une belle-de-nuit rose (R//B) avec une belle-de-nuit blanche (B//B). Quelle descendance attend-on ?",
          "options": [
            "½ roses et ½ blanches",
            "¼ rouges, ½ roses, ¼ blanches",
            "100 % roses",
            "½ rouges et ½ blanches"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La blanche ne donne que des gamètes B."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l04_transmission_caractere_p04",
      "order": 4,
      "title": "Un caractère lié au sexe : la drosophile",
      "summary": "Résultats différents selon le sens du croisement ; gène porté par X.",
      "conceptExplanation": "- Chez la drosophile, couleur des yeux : sauvage rouge, mutant blanc. Parents de races pures.\n- Sens 1 : femelles yeux rouges × mâles yeux blancs : toute la F1 a les yeux rouges. Le rouge (b+) est dominant, le blanc (b) récessif.\n- Sens 2 : femelles yeux blancs × mâles yeux rouges : 49 femelles aux yeux rouges et 51 mâles aux yeux blancs, soit ½ – ½, avec toutes les femelles rouges et tous les mâles blancs.\n- Le résultat change selon le sens du croisement et dépend du sexe : le gène est porté par le chromosome X (gène lié au sexe). Le chromosome Y ne porte pas ce gène.\n- La femelle a deux chromosomes X, le mâle un X et un Y. Le mâle reçoit son X de sa mère : il a le phénotype de sa mère dans le sens 2.\n- Sens 2 : la mère X(b)//X(b) donne des X(b) ; le père X(b+)/Y donne X(b+) à ses filles et Y à ses fils. Filles X(b+)//X(b) : yeux rouges ; fils X(b)/Y : yeux blancs.\n- Corrections du document : le croisement du sens 2 est fait entre parents de races pures, pas entre individus F1, et ses descendants forment une F1, pas une F2. Le calcul des proportions est faux : le total est 49 + 51 = 100 (et non 110), d’où 49 % et 51 % (et non 0,49 % et 0,51 %). Enfin, sa conclusion générale « chromosomes autosomaux sexuels » doit se lire : par les autosomes ou par les chromosomes sexuels.",
      "keyRule": "Résultats différents selon le sens du croisement : gène lié au sexe (porté par X). Le fils reçoit son X de sa mère.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le sens 2",
        "statement": "Femelles yeux blancs × mâles yeux rouges donnent des filles aux yeux rouges et des fils aux yeux blancs. Pourquoi ?",
        "methodSteps": [
          "Les fils reçoivent le X de leur mère, qui ne porte que l’allèle b : ils ont les yeux blancs.",
          "Les filles reçoivent un X(b+) de leur père : l’allèle dominant b+ leur donne des yeux rouges."
        ],
        "conclusion": "Le gène de la couleur des yeux est porté par le chromosome X."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Sens 1",
          "stepTheme": "Croisement",
          "stepTitle": "Femelles rouges × mâles blancs",
          "paragraphText": "Femelles yeux **rouges** × mâles yeux **blancs** (races pures) : **100 %** de F1 aux yeux **rouges**. Le rouge (**b+**) est **dominant**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p04_q1",
            "type": "mcq",
            "prompt": "Des drosophiles femelles aux yeux rouges croisées avec des mâles aux yeux blancs, de races pures, donnent une F1 toute aux yeux rouges. Quel allèle est dominant ?",
            "options": [
              "L’allèle rouge (b+)",
              "L’allèle blanc (b)",
              "Aucun des deux",
              "On ne peut pas le savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le phénotype de la F1 est dominant."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Drosophiles : les deux sens de croisement",
            "caption": "Parents de races pures. Le résultat dépend du sens du croisement : le gène est porté par le chromosome X.",
            "tableData": {
              "headers": [
                "Croisement",
                "Génotypes des parents",
                "Descendance (F1)"
              ],
              "rows": [
                [
                  "Femelle yeux rouges × mâle yeux blancs",
                  "$X^{b+}//X^{b+}$ × $X^{b}/Y$",
                  "100 % yeux rouges"
                ],
                [
                  "Femelle yeux blancs × mâle yeux rouges",
                  "$X^{b}//X^{b}$ × $X^{b+}/Y$",
                  "49 femelles yeux rouges, 51 mâles yeux blancs"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Sens 2",
          "stepTheme": "Croisement inverse",
          "stepTitle": "Femelles blanches × mâles rouges",
          "paragraphText": "Femelles yeux **blancs** × mâles yeux **rouges** : **49 femelles** aux yeux **rouges**, **51 mâles** aux yeux **blancs**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p04_q2",
            "type": "mcq",
            "prompt": "Des drosophiles femelles aux yeux blancs croisées avec des mâles aux yeux rouges, de races pures, donnent 49 femelles aux yeux rouges et 51 mâles aux yeux blancs. Qu’est-ce qui frappe ?",
            "options": [
              "Toutes les femelles ont les yeux rouges et tous les mâles les yeux blancs : le résultat dépend du sexe",
              "Tous les descendants ont les yeux rouges",
              "On obtient ¾ de rouges et ¼ de blancs",
              "Les femelles ont toutes les yeux blancs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les résultats diffèrent selon le sens du croisement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Lié au sexe",
          "stepTheme": "Interprétation",
          "stepTitle": "Un gène porté par X",
          "paragraphText": "Quand les résultats **changent selon le sens** du croisement, le gène est **lié au sexe** : il est porté par le **chromosome X**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p04_q3",
            "type": "mcq",
            "prompt": "Chez la drosophile, deux croisements inverses entre races pures ne donnent pas les mêmes résultats. Que peut-on en déduire ?",
            "options": [
              "Le gène étudié est porté par le chromosome X",
              "Le gène est porté par un autosome",
              "Il y a deux couples d’allèles",
              "Les allèles sont codominants"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le Y ne porte pas ce gène."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Génotypes",
          "stepTheme": "Notation",
          "stepTitle": "Écrire les génotypes",
          "paragraphText": "Femelle aux yeux blancs : **$X^{b}//X^{b}$** ; mâle aux yeux rouges : **$X^{b+}/Y$**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p04_q4",
            "type": "mcq",
            "prompt": "Quel est le génotype d’un mâle drosophile aux yeux rouges, de race pure, si le gène est porté par X (b+ : rouge, b : blanc) ?",
            "options": [
              "$X^{b+}/Y$",
              "$X^{b}/Y$",
              "$X^{b+}//X^{b+}$",
              "$X^{b+}//X^{b}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le mâle n’a qu’un chromosome X."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Fils",
          "stepTheme": "Explication",
          "stepTitle": "Le fils reçoit le X de sa mère",
          "paragraphText": "Le **fils** reçoit son **X de sa mère** et le **Y de son père**. Mère **$X^{b}//X^{b}$** : tous ses fils sont **$X^{b}/Y$**, aux yeux **blancs**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p04_q5",
            "type": "mcq",
            "prompt": "Une drosophile femelle aux yeux blancs ($X^{b}//X^{b}$) est croisée avec un mâle aux yeux rouges ($X^{b+}/Y$). Pourquoi tous les fils ont-ils les yeux blancs ?",
            "options": [
              "Parce qu’ils reçoivent leur chromosome X de leur mère, qui ne porte que l’allèle b",
              "Parce que leur père leur donne l’allèle b",
              "Parce que le chromosome Y porte l’allèle b",
              "Parce que l’allèle blanc est dominant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les filles reçoivent le X(b+) du père : yeux rouges."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "F1, pas F2",
          "stepTheme": "Erreur du document",
          "stepTitle": "Le bon calcul",
          "paragraphText": "Le croisement inverse se fait entre **races pures** : ses descendants sont une **F1**, pas une F2. Sur **100** mouches (49 + 51), il y a **49 %** de femelles rouges et **51 %** de mâles blancs, pas « 0,49 % » sur 110.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p04_q6",
            "type": "mcq",
            "prompt": "Un croisement donne 49 femelles aux yeux rouges et 51 mâles aux yeux blancs. Quel pourcentage de femelles aux yeux rouges obtient-on ?",
            "options": [
              "49 %",
              "0,49 %",
              "44,5 %",
              "4,9 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "49 ÷ (49 + 51) × 100 = 49."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p04_q1",
          "type": "mcq",
          "prompt": "Des drosophiles femelles aux yeux rouges croisées avec des mâles aux yeux blancs, de races pures, donnent une F1 toute aux yeux rouges. Quel allèle est dominant ?",
          "options": [
            "L’allèle rouge (b+)",
            "L’allèle blanc (b)",
            "Aucun des deux",
            "On ne peut pas le savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le phénotype de la F1 est dominant."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p04_q2",
          "type": "mcq",
          "prompt": "Des drosophiles femelles aux yeux blancs croisées avec des mâles aux yeux rouges, de races pures, donnent 49 femelles aux yeux rouges et 51 mâles aux yeux blancs. Qu’est-ce qui frappe ?",
          "options": [
            "Toutes les femelles ont les yeux rouges et tous les mâles les yeux blancs : le résultat dépend du sexe",
            "Tous les descendants ont les yeux rouges",
            "On obtient ¾ de rouges et ¼ de blancs",
            "Les femelles ont toutes les yeux blancs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les résultats diffèrent selon le sens du croisement."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p04_q3",
          "type": "mcq",
          "prompt": "Chez la drosophile, deux croisements inverses entre races pures ne donnent pas les mêmes résultats. Que peut-on en déduire ?",
          "options": [
            "Le gène étudié est porté par le chromosome X",
            "Le gène est porté par un autosome",
            "Il y a deux couples d’allèles",
            "Les allèles sont codominants"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le Y ne porte pas ce gène."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p04_q4",
          "type": "mcq",
          "prompt": "Quel est le génotype d’un mâle drosophile aux yeux rouges, de race pure, si le gène est porté par X (b+ : rouge, b : blanc) ?",
          "options": [
            "$X^{b+}/Y$",
            "$X^{b}/Y$",
            "$X^{b+}//X^{b+}$",
            "$X^{b+}//X^{b}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le mâle n’a qu’un chromosome X."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p04_q5",
          "type": "mcq",
          "prompt": "Une drosophile femelle aux yeux blancs ($X^{b}//X^{b}$) est croisée avec un mâle aux yeux rouges ($X^{b+}/Y$). Pourquoi tous les fils ont-ils les yeux blancs ?",
          "options": [
            "Parce qu’ils reçoivent leur chromosome X de leur mère, qui ne porte que l’allèle b",
            "Parce que leur père leur donne l’allèle b",
            "Parce que le chromosome Y porte l’allèle b",
            "Parce que l’allèle blanc est dominant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les filles reçoivent le X(b+) du père : yeux rouges."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p04_q6",
          "type": "mcq",
          "prompt": "Un croisement donne 49 femelles aux yeux rouges et 51 mâles aux yeux blancs. Quel pourcentage de femelles aux yeux rouges obtient-on ?",
          "options": [
            "49 %",
            "0,49 %",
            "44,5 %",
            "4,9 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "49 ÷ (49 + 51) × 100 = 49."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l04_transmission_caractere_p05",
      "order": 5,
      "title": "Évaluation : les cobayes et les règles à retenir",
      "summary": "Analyser, interpréter, écrire les génotypes.",
      "conceptExplanation": "Le document ne donne pas de corrigé pour cette situation ; voici la solution.\n- Situation : un cobaye mâle blanc × une femelle grise donnent des petits tous gris (cage 1). Un couple de ces cobayes gris donne 12 gris et 4 blancs (cage 2).\n- Cage 1 : F1 homogène grise : les parents sont de races pures ; le gris est dominant, le blanc récessif. Symboles : blanc b, gris B. Parents : femelle grise B//B, mâle blanc b//b ; F1 B//b.\n- Cage 2 : 12 gris et 4 blancs sur 16, soit ¾ – ¼ : un couple d’allèles avec dominance complète ; les deux cobayes gris croisés sont hétérozygotes B//b.\n- Règles à retenir :\n- F1 homogène : les parents sont de races pures ; son phénotype est dominant (sauf phénotype intermédiaire).\n- ¾ – ¼ : deux hétérozygotes, dominance complète.\n- ½ – ½ avec un homozygote récessif : l’autre parent est hétérozygote (croisement-test).\n- ¼ – ½ – ¼ : deux hétérozygotes, sans dominance.\n- Résultats différents selon le sens du croisement : gène lié au sexe (porté par X).",
      "keyRule": "Lire la ségrégation : ¾ – ¼ (dominance, deux hétérozygotes) ; ½ – ½ (croisement-test) ; ¼ – ½ – ¼ (sans dominance) ; selon le sens (lié au sexe).",
      "formulas": [],
      "workedExample": {
        "title": "Les cobayes de la cage 2",
        "statement": "12 cobayes gris et 4 blancs naissent de deux parents gris. Génotypes des parents ?",
        "methodSteps": [
          "12 ÷ 16 = ¾ et 4 ÷ 16 = ¼.",
          "La ségrégation ¾ – ¼ révèle deux hétérozygotes."
        ],
        "conclusion": "Les deux parents gris sont B//b."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Cage 1",
          "stepTheme": "Analyse",
          "stepTitle": "Une F1 toute grise",
          "paragraphText": "Mâle **blanc** × femelle **grise** → petits **tous gris** : le **gris** est **dominant** et les parents sont de **races pures**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p05_q1",
            "type": "mcq",
            "prompt": "Un cobaye mâle blanc et une femelle grise ont des petits tous gris. Quels sont les génotypes des parents (B : gris, b : blanc) ?",
            "options": [
              "Femelle grise B//B et mâle blanc b//b",
              "Femelle grise hétérozygote et mâle blanc homozygote récessif",
              "Femelle grise B//B et mâle blanc hétérozygote",
              "Les deux parents sont hétérozygotes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "F1 homogène : parents de races pures."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Cage 2",
          "stepTheme": "Analyse",
          "stepTitle": "12 gris et 4 blancs",
          "paragraphText": "Deux cobayes gris de la F1 donnent **12 gris** et **4 blancs** : **¾ – ¼**. Les deux parents gris sont **B//b**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p05_q2",
            "type": "mcq",
            "prompt": "Deux cobayes gris donnent 12 petits gris et 4 petits blancs. Quels sont leurs génotypes (B : gris dominant, b : blanc) ?",
            "options": [
              "Les deux sont hétérozygotes B//b",
              "Les deux sont homozygotes gris",
              "L’un est homozygote gris, l’autre homozygote blanc",
              "L’un est homozygote gris, l’autre hétérozygote"
            ],
            "correctAnswerIndex": 0,
            "explanation": "12 ÷ 16 = ¾ ; 4 ÷ 16 = ¼."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Règle ¾ – ¼",
          "stepTheme": "Retenir",
          "stepTitle": "Deux hétérozygotes",
          "paragraphText": "Une ségrégation **¾ – ¼** signifie : **un couple d’allèles**, **dominance complète**, **deux parents hétérozygotes**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p05_q3",
            "type": "mcq",
            "prompt": "Que permet de conclure une ségrégation ¾ – ¼ des phénotypes dans une descendance ?",
            "options": [
              "Les deux parents sont hétérozygotes, avec dominance complète",
              "Un parent est homozygote récessif",
              "Il n’y a pas de dominance",
              "Le gène est lié au sexe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la règle de la 2e loi de Mendel."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Règle ½ – ½",
          "stepTheme": "Retenir",
          "stepTitle": "Le croisement-test",
          "paragraphText": "Avec un **homozygote récessif**, une ségrégation **½ – ½** montre que l’autre parent est **hétérozygote**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p05_q4",
            "type": "mcq",
            "prompt": "Un individu de phénotype dominant croisé avec un homozygote récessif donne ½ de descendants dominants et ½ récessifs. Que conclure ?",
            "options": [
              "L’individu testé est hétérozygote",
              "L’individu testé est homozygote dominant",
              "Les deux allèles sont codominants",
              "Le gène est sur Y"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ses gamètes sont 50 % dominants, 50 % récessifs."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Règle ¼ – ½ – ¼",
          "stepTheme": "Retenir",
          "stepTitle": "Sans dominance",
          "paragraphText": "**¼ – ½ – ¼** : deux **hétérozygotes**, **sans dominance** ; le phénotype à ½ est **intermédiaire**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p05_q5",
            "type": "mcq",
            "prompt": "Quelle ségrégation des phénotypes obtient-on en croisant deux hétérozygotes, quand aucun allèle ne domine ?",
            "options": [
              "¼ – ½ – ¼",
              "¾ – ¼",
              "½ – ½",
              "100 % – 0 %"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Trois phénotypes apparaissent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Selon le sens",
          "stepTheme": "Retenir",
          "stepTitle": "Gène lié au sexe",
          "paragraphText": "Si les résultats **changent selon le sens** du croisement, le gène est porté par le **chromosome X**.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_p05_q6",
            "type": "mcq",
            "prompt": "Comment reconnaître qu’un gène est porté par le chromosome X ?",
            "options": [
              "Les résultats changent selon le sens du croisement et dépendent du sexe des descendants",
              "On obtient toujours ¾ – ¼",
              "La F1 a un phénotype intermédiaire",
              "Les mâles et les femelles ont toujours le même phénotype"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le mâle n’a qu’un X : il exprime toujours l’allèle qu’il porte."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p05_q1",
          "type": "mcq",
          "prompt": "Un cobaye mâle blanc et une femelle grise ont des petits tous gris. Quels sont les génotypes des parents (B : gris, b : blanc) ?",
          "options": [
            "Femelle grise B//B et mâle blanc b//b",
            "Femelle grise hétérozygote et mâle blanc homozygote récessif",
            "Femelle grise B//B et mâle blanc hétérozygote",
            "Les deux parents sont hétérozygotes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "F1 homogène : parents de races pures."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p05_q2",
          "type": "mcq",
          "prompt": "Deux cobayes gris donnent 12 petits gris et 4 petits blancs. Quels sont leurs génotypes (B : gris dominant, b : blanc) ?",
          "options": [
            "Les deux sont hétérozygotes B//b",
            "Les deux sont homozygotes gris",
            "L’un est homozygote gris, l’autre homozygote blanc",
            "L’un est homozygote gris, l’autre hétérozygote"
          ],
          "correctAnswerIndex": 0,
          "explanation": "12 ÷ 16 = ¾ ; 4 ÷ 16 = ¼."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p05_q3",
          "type": "mcq",
          "prompt": "Que permet de conclure une ségrégation ¾ – ¼ des phénotypes dans une descendance ?",
          "options": [
            "Les deux parents sont hétérozygotes, avec dominance complète",
            "Un parent est homozygote récessif",
            "Il n’y a pas de dominance",
            "Le gène est lié au sexe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la règle de la 2e loi de Mendel."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p05_q4",
          "type": "mcq",
          "prompt": "Un individu de phénotype dominant croisé avec un homozygote récessif donne ½ de descendants dominants et ½ récessifs. Que conclure ?",
          "options": [
            "L’individu testé est hétérozygote",
            "L’individu testé est homozygote dominant",
            "Les deux allèles sont codominants",
            "Le gène est sur Y"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ses gamètes sont 50 % dominants, 50 % récessifs."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p05_q5",
          "type": "mcq",
          "prompt": "Quelle ségrégation des phénotypes obtient-on en croisant deux hétérozygotes, quand aucun allèle ne domine ?",
          "options": [
            "¼ – ½ – ¼",
            "¾ – ¼",
            "½ – ½",
            "100 % – 0 %"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Trois phénotypes apparaissent."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_p05_q6",
          "type": "mcq",
          "prompt": "Comment reconnaître qu’un gène est porté par le chromosome X ?",
          "options": [
            "Les résultats changent selon le sens du croisement et dépendent du sexe des descendants",
            "On obtient toujours ¾ – ¼",
            "La F1 a un phénotype intermédiaire",
            "Les mâles et les femelles ont toujours le même phénotype"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le mâle n’a qu’un X : il exprime toujours l’allèle qu’il porte."
        }
      ]
    }
  ]
};
