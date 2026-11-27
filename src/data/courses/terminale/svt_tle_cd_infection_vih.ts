import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 6 : L'infection de l'organisme par le VIH » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2123
export const SVT_TLE_CD_L06_INFECTION_VIH: CurriculumChapter = {
  "id": "terminale_c_svt_l06_infection_vih",
  "subjectId": "svt",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 6,
  "orderForGrades": {"terminale_d":7},
  "title": "Leçon 6 : L'infection de l'organisme par le VIH",
  "summary": "On décrit la structure particulière du VIH, on explique comment il infecte et détruit les lymphocytes T4, puis on suit l'évolution de l'infection jusqu'aux maladies opportunistes et aux mesures de protection.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2123",
  "points": [
    {
      "id": "terminale_c_svt_l06_infection_vih_p01",
      "order": 1,
      "title": "La structure particulière du VIH",
      "summary": "Décrire l'organisation du virus du SIDA : capside, ARN, transcriptase inverse et enveloppe.",
      "conceptExplanation": "Sur le schéma de la structure du VIH, on observe des protéines d'enveloppe, des protéines internes, une enveloppe lipidique, une capside protéique, deux brins d'ARN et deux transcriptases reverses.\nLe VIH est constitué d'une capside protéique, ou cœur, qui contient deux molécules d'ARN associées chacune à une transcriptase inverse, ou réverse, ou encore rétrotranscriptase.\nLa capside est entourée d'une couche de protéines appelée protéines internes et d'une enveloppe externe lipidique hérissée de protéines d'enveloppe, Gp120 et Gp41.\nC'est cette organisation, avec des protéines spécifiques sur sa membrane, qui rend la structure du VIH particulière.",
      "keyRule": "Le VIH se reconnaît à sa capside protéique contenant deux brins d'ARN et la transcriptase inverse, sous une enveloppe lipidique portant Gp120 et Gp41.",
      "formulas": [],
      "workedExample": {
        "title": "Lire le schéma de la structure du VIH",
        "statement": "À partir du schéma de la structure du VIH fourni dans la leçon, décris l'organisation du virus, de l'intérieur vers l'extérieur.",
        "methodSteps": [
          "Au centre, la capside protéique contient deux molécules d'ARN, chacune associée à une transcriptase inverse.",
          "Autour de la capside se trouve une couche de protéines internes.",
          "À l'extérieur, l'enveloppe lipidique est hérissée de protéines d'enveloppe Gp120 et Gp41."
        ],
        "conclusion": "Le VIH a une structure particulière, marquée par la présence de protéines spécifiques sur sa membrane."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La capside et son contenu",
          "stepTheme": "La capside et son contenu",
          "stepBadge": "La capside et son contenu",
          "paragraphText": "• Capside protéique : le cœur du VIH, qui contient deux molécules d'ARN.\nChaque molécule d'ARN est associée à une transcriptase inverse, enzyme caractéristique du virus.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p01_q1",
            "type": "mcq",
            "prompt": "Que contient la capside protéique du VIH ?",
            "options": [
              "Un seul brin d'ADN",
              "Deux molécules d'ARN associées chacune à une transcriptase inverse",
              "Uniquement des protéines d'enveloppe",
              "Un noyau entouré d'une membrane"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après l'analyse du schéma, la capside contient deux molécules d'ARN, chacune associée à une transcriptase inverse (ou réverse)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La transcriptase inverse",
          "stepTheme": "La transcriptase inverse",
          "stepBadge": "La transcriptase inverse",
          "paragraphText": "• Transcriptase inverse (ou réverse, ou rétrotranscriptase) : l'enzyme associée à l'ARN viral dans la capside.\nLa leçon relève deux transcriptases reverses dans la structure du virus observée.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p01_q2",
            "type": "mcq",
            "prompt": "Comment appelle-t-on encore la transcriptase inverse du VIH ?",
            "options": [
              "Intégrase",
              "Rétrotranscriptase",
              "Polymérase cellulaire",
              "Protéine Gp120"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon donne trois noms équivalents : transcriptase inverse, transcriptase réverse ou rétrotranscriptase."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'enveloppe lipidique et ses protéines",
          "stepTheme": "L'enveloppe lipidique et ses protéines",
          "stepBadge": "L'enveloppe lipidique et ses protéines",
          "paragraphText": "La capside est entourée d'une couche de protéines internes puis d'une enveloppe externe lipidique.\nCette enveloppe est hérissée de protéines d'enveloppe précises : Gp120 et Gp41.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p01_q3",
            "type": "mcq",
            "prompt": "Quelles protéines d'enveloppe sont hérissées sur l'enveloppe lipidique du VIH ?",
            "options": [
              "Les protéines internes",
              "CD4 et CD8",
              "Gp120 et Gp41",
              "L'intégrase et la transcriptase"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'enveloppe externe lipidique porte les protéines d'enveloppe Gp120 et Gp41, citées dans l'analyse du schéma."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les protéines internes",
          "stepTheme": "Les protéines internes",
          "stepBadge": "Les protéines internes",
          "paragraphText": "Entre la capside et l'enveloppe externe se trouve une couche de protéines appelée protéines internes.\nLe schéma distingue donc bien les protéines internes des protéines d'enveloppe, situées à l'extérieur.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p01_q4",
            "type": "mcq",
            "prompt": "Où se situent les protéines internes du VIH ?",
            "options": [
              "À l'extérieur de l'enveloppe lipidique",
              "Dans le noyau de la cellule hôte",
              "Entre la capside et l'enveloppe externe",
              "Associées à chaque molécule d'ARN"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon précise que la capside est entourée d'une couche de protéines appelée protéines internes, elle-même sous l'enveloppe externe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre ARN viral et ADN",
          "stepTheme": "Ne pas confondre ARN viral et ADN",
          "stepBadge": "Ne pas confondre ARN viral et ADN",
          "paragraphText": "Piège : le matériel génétique du VIH dans la capside est de l'ARN, en deux molécules, et non de l'ADN.\nL'ADN n'apparaîtra que plus tard, dans la cellule infectée, sous forme d'ADN proviral formé à partir de l'ARN viral.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p01_q5",
            "type": "mcq",
            "prompt": "Le matériel génétique contenu dans la capside du VIH est :",
            "options": [
              "De l'ADN proviral",
              "Deux molécules d'ARN",
              "Un chromosome",
              "De l'ARN messager de la cellule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le schéma et son analyse montrent deux brins d'ARN dans la capside ; l'ADN proviral n'existe qu'après l'infection d'une cellule."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Ce qui rend la structure particulière",
          "stepTheme": "Ce qui rend la structure particulière",
          "stepBadge": "Ce qui rend la structure particulière",
          "paragraphText": "La conclusion de la première partie est que le virus du SIDA a effectivement une structure particulière.\nCette particularité tient à la présence de protéines spécifiques sur sa membrane, les Gp120 et Gp41.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p01_q6",
            "type": "mcq",
            "prompt": "Selon la conclusion de la leçon, la structure du VIH est particulière à cause :",
            "options": [
              "De sa très grande taille",
              "De protéines spécifiques sur sa membrane",
              "De l'absence totale d'enveloppe",
              "De son ADN en double brin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion partielle le dit : la particularité vient de la présence de protéines spécifiques sur sa membrane."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l06_infection_vih_p01_q1",
          "type": "mcq",
          "prompt": "Que contient la capside protéique du VIH ?",
          "options": [
            "Un seul brin d'ADN",
            "Deux molécules d'ARN associées chacune à une transcriptase inverse",
            "Uniquement des protéines d'enveloppe",
            "Un noyau entouré d'une membrane"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après l'analyse du schéma, la capside contient deux molécules d'ARN, chacune associée à une transcriptase inverse (ou réverse)."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p01_q2",
          "type": "mcq",
          "prompt": "Comment appelle-t-on encore la transcriptase inverse du VIH ?",
          "options": [
            "Intégrase",
            "Rétrotranscriptase",
            "Polymérase cellulaire",
            "Protéine Gp120"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon donne trois noms équivalents : transcriptase inverse, transcriptase réverse ou rétrotranscriptase."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p01_q3",
          "type": "mcq",
          "prompt": "Quelles protéines d'enveloppe sont hérissées sur l'enveloppe lipidique du VIH ?",
          "options": [
            "Les protéines internes",
            "CD4 et CD8",
            "Gp120 et Gp41",
            "L'intégrase et la transcriptase"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'enveloppe externe lipidique porte les protéines d'enveloppe Gp120 et Gp41, citées dans l'analyse du schéma."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p01_q4",
          "type": "mcq",
          "prompt": "Où se situent les protéines internes du VIH ?",
          "options": [
            "À l'extérieur de l'enveloppe lipidique",
            "Dans le noyau de la cellule hôte",
            "Entre la capside et l'enveloppe externe",
            "Associées à chaque molécule d'ARN"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon précise que la capside est entourée d'une couche de protéines appelée protéines internes, elle-même sous l'enveloppe externe."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p01_q5",
          "type": "mcq",
          "prompt": "Le matériel génétique contenu dans la capside du VIH est :",
          "options": [
            "De l'ADN proviral",
            "Deux molécules d'ARN",
            "Un chromosome",
            "De l'ARN messager de la cellule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le schéma et son analyse montrent deux brins d'ARN dans la capside ; l'ADN proviral n'existe qu'après l'infection d'une cellule."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p01_q6",
          "type": "mcq",
          "prompt": "Selon la conclusion de la leçon, la structure du VIH est particulière à cause :",
          "options": [
            "De sa très grande taille",
            "De protéines spécifiques sur sa membrane",
            "De l'absence totale d'enveloppe",
            "De son ADN en double brin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion partielle le dit : la particularité vient de la présence de protéines spécifiques sur sa membrane."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l06_infection_vih_p02",
      "order": 2,
      "title": "Les étapes de l'infection du lymphocyte T4",
      "summary": "Ordonner les étapes de l'infection d'un LT4, de l'adsorption au bourgeonnement de nouveaux virus.",
      "conceptExplanation": "Le document de la leçon montre les étapes de l'infection du lymphocyte T4 par le VIH : 1 : adsorption ; 2 : injection de l'ARN viral et de la transcriptase inverse ; 3 : transcription de l'ARN en ADN proviral ; 4 : intégration de l'ADN proviral dans l'ADN du LT4 ; 5 : transcription de l'ADN viral en ARN messager ; 6 : synthèse de protéines virales ; 7 : modification des protéines synthétisées ; 8 : assemblage des différentes protéines ; 9 : bourgeonnement des virions ; 10 : apparition de nouveaux virus.\nLe processus commence donc par la fixation du virus sur la cellule et se termine par la libération de nouveaux virus.",
      "keyRule": "De l'adsorption au bourgeonnement, l'infection suit un ordre fixe : fixation, injection, transcription inverse, intégration, expression, assemblage, libération.",
      "formulas": [],
      "workedExample": {
        "title": "Remettre les étapes dans l'ordre (exercice 1)",
        "statement": "Les étapes suivantes de l'infection du lymphocyte T4 sont dans le désordre : multiplication du VIH dans le lymphocyte T4 ; adsorption du VIH au lymphocyte T4 ; transformation de l'ARN viral en ADN proviral ; injection de l'ARN viral et de la transcriptase inverse ; intégration de l'ADN proviral à l'ADN du lymphocyte T4. Range-les dans l'ordre chronologique.",
        "methodSteps": [
          "L'adsorption du VIH au lymphocyte T4 vient en premier : le virus se fixe sur la cellule.",
          "Vient ensuite l'injection de l'ARN viral et de la transcriptase inverse dans la cellule.",
          "L'ARN viral est alors transformé en ADN proviral, puis cet ADN proviral s'intègre à l'ADN du lymphocyte T4.",
          "La multiplication du VIH dans le lymphocyte T4 clôt la séquence."
        ],
        "conclusion": "L'ordre chronologique est : adsorption, injection, transformation en ADN proviral, intégration, puis multiplication du VIH."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'adsorption : la fixation du VIH",
          "stepTheme": "L'adsorption : la fixation du VIH",
          "stepBadge": "L'adsorption : la fixation du VIH",
          "paragraphText": "• Adsorption : la fixation du VIH sur le lymphocyte T4, première étape de l'infection.\nLa leçon précise que le processus d'infection du LT4 commence par cette adsorption.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p02_q1",
            "type": "mcq",
            "prompt": "Quelle est la première étape de l'infection du LT4 par le VIH ?",
            "options": [
              "L'intégration de l'ADN proviral",
              "Le bourgeonnement des virions",
              "L'adsorption du virus sur le LT4",
              "La synthèse des protéines virales"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'étape 1 du document est l'adsorption, c'est-à-dire la fixation du VIH sur le lymphocyte T4."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'injection du matériel viral",
          "stepTheme": "L'injection du matériel viral",
          "stepBadge": "L'injection du matériel viral",
          "paragraphText": "Après l'adsorption, le VIH injecte son ARN et sa transcriptase inverse dans le cytoplasme lymphocytaire.\nC'est l'étape 2 du document présenté dans la leçon.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p02_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce que le VIH injecte dans le cytoplasme du LT4 ?",
            "options": [
              "Son ADN proviral et son intégrase uniquement",
              "Son ARN et sa transcriptase inverse",
              "Ses protéines d'enveloppe Gp120",
              "Des anticorps anti-VIH"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'étape 2 est l'injection de l'ARN viral et de la transcriptase inverse dans le cytoplasme du LT4."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "De l'ARN viral à l'ADN proviral",
          "stepTheme": "De l'ARN viral à l'ADN proviral",
          "stepBadge": "De l'ARN viral à l'ADN proviral",
          "paragraphText": "Il se produit ensuite la transcription de l'ARN viral en ADN : on obtient l'ADN proviral.\nLe document de la leçon intitule cette étape 3 « transcription de l'ARN proviral en ADN proviral » (formulation de la source).",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p02_q3",
            "type": "mcq",
            "prompt": "Le produit de la transcription inverse de l'ARN viral est :",
            "options": [
              "L'ARN messager viral",
              "L'ADN proviral",
              "Une protéine d'enveloppe",
              "Le kérogène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "À l'intérieur du LT4, la transcription inverse permet la synthèse de l'ADN proviral à partir de l'ARN viral."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L'intégration puis l'expression virale",
          "stepTheme": "L'intégration puis l'expression virale",
          "stepBadge": "L'intégration puis l'expression virale",
          "paragraphText": "L'ADN proviral obtenu est intégré à l'ADN de la cellule hôte, au niveau du noyau : c'est l'étape 4.\nSuivent la transcription de l'ADN viral en ARN messager (étape 5), la synthèse des protéines virales (étape 6) et leur modification (étape 7).",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p02_q4",
            "type": "mcq",
            "prompt": "Juste après l'intégration de l'ADN proviral, l'étape suivante est :",
            "options": [
              "Le bourgeonnement des virions",
              "Une nouvelle adsorption",
              "La transcription de l'ADN viral en ARN messager",
              "La destruction immédiate du virus"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'ordre du document est : intégration (étape 4), puis transcription de l'ADN viral en ARN messager (étape 5)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'ordre assemblage et bourgeonnement",
          "stepTheme": "L'ordre assemblage et bourgeonnement",
          "stepBadge": "L'ordre assemblage et bourgeonnement",
          "paragraphText": "Piège : les nouveaux virus ne sortent pas avant d'être assemblés.\nL'assemblage des différentes protéines (étape 8) précède le bourgeonnement des virions (étape 9), qui précède l'apparition de nouveaux virus (étape 10).",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p02_q5",
            "type": "mcq",
            "prompt": "Dans quel ordre se déroulent la fin de l'infection ?",
            "options": [
              "Bourgeonnement, assemblage, apparition de nouveaux virus",
              "Assemblage, bourgeonnement, apparition de nouveaux virus",
              "Apparition de nouveaux virus, assemblage, bourgeonnement",
              "Assemblage, apparition de nouveaux virus, bourgeonnement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document numérote : 8 assemblage, 9 bourgeonnement des virions, 10 apparition de nouveaux virus."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Réordonner les étapes (exercice 1)",
          "stepTheme": "Réordonner les étapes (exercice 1)",
          "stepBadge": "Réordonner les étapes (exercice 1)",
          "paragraphText": "L'exercice 1 de la leçon donne cinq étapes dans le désordre et demande de les ranger chronologiquement.\nEn appliquant la séquence du document, on obtient : adsorption, injection, transformation de l'ARN viral en ADN proviral, intégration, multiplication.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p02_q6",
            "type": "mcq",
            "prompt": "Dans l'exercice 1, quelle étape vient juste après l'adsorption du VIH au lymphocyte T4 ?",
            "options": [
              "La multiplication du VIH dans le lymphocyte T4",
              "L'intégration de l'ADN proviral",
              "L'injection de l'ARN viral et de la transcriptase inverse",
              "La transformation de l'ARN viral en ADN proviral"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Après la fixation (adsorption), le virus injecte son ARN et sa transcriptase inverse ; la transformation et l'intégration viennent ensuite."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l06_infection_vih_p02_q1",
          "type": "mcq",
          "prompt": "Quelle est la première étape de l'infection du LT4 par le VIH ?",
          "options": [
            "L'intégration de l'ADN proviral",
            "Le bourgeonnement des virions",
            "L'adsorption du virus sur le LT4",
            "La synthèse des protéines virales"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'étape 1 du document est l'adsorption, c'est-à-dire la fixation du VIH sur le lymphocyte T4."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p02_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce que le VIH injecte dans le cytoplasme du LT4 ?",
          "options": [
            "Son ADN proviral et son intégrase uniquement",
            "Son ARN et sa transcriptase inverse",
            "Ses protéines d'enveloppe Gp120",
            "Des anticorps anti-VIH"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'étape 2 est l'injection de l'ARN viral et de la transcriptase inverse dans le cytoplasme du LT4."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p02_q3",
          "type": "mcq",
          "prompt": "Le produit de la transcription inverse de l'ARN viral est :",
          "options": [
            "L'ARN messager viral",
            "L'ADN proviral",
            "Une protéine d'enveloppe",
            "Le kérogène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "À l'intérieur du LT4, la transcription inverse permet la synthèse de l'ADN proviral à partir de l'ARN viral."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p02_q4",
          "type": "mcq",
          "prompt": "Juste après l'intégration de l'ADN proviral, l'étape suivante est :",
          "options": [
            "Le bourgeonnement des virions",
            "Une nouvelle adsorption",
            "La transcription de l'ADN viral en ARN messager",
            "La destruction immédiate du virus"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'ordre du document est : intégration (étape 4), puis transcription de l'ADN viral en ARN messager (étape 5)."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p02_q5",
          "type": "mcq",
          "prompt": "Dans quel ordre se déroulent la fin de l'infection ?",
          "options": [
            "Bourgeonnement, assemblage, apparition de nouveaux virus",
            "Assemblage, bourgeonnement, apparition de nouveaux virus",
            "Apparition de nouveaux virus, assemblage, bourgeonnement",
            "Assemblage, apparition de nouveaux virus, bourgeonnement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document numérote : 8 assemblage, 9 bourgeonnement des virions, 10 apparition de nouveaux virus."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p02_q6",
          "type": "mcq",
          "prompt": "Dans l'exercice 1, quelle étape vient juste après l'adsorption du VIH au lymphocyte T4 ?",
          "options": [
            "La multiplication du VIH dans le lymphocyte T4",
            "L'intégration de l'ADN proviral",
            "L'injection de l'ARN viral et de la transcriptase inverse",
            "La transformation de l'ARN viral en ADN proviral"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Après la fixation (adsorption), le virus injecte son ARN et sa transcriptase inverse ; la transformation et l'intégration viennent ensuite."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l06_infection_vih_p03",
      "order": 3,
      "title": "Fixation sur le CD4 et destruction du LT4",
      "summary": "Expliquer le rôle du récepteur CD4, de Gp120, de Gp41 et de l'intégrase, jusqu'à la destruction du LT4.",
      "conceptExplanation": "Le VIH, une fois dans l'organisme, infecte les LT4 qui sont ses cellules cibles. Les LT4 possèdent à leur surface un récepteur membranaire appelé CD4.\nLe VIH se fixe sur le LT4 grâce à sa glycoprotéine Gp120 qui adhère aux récepteurs CD4. Cette fixation décroche la Gp120 et libère la Gp41, qui sert d'élément perforateur de la membrane du LT4 : les membranes virale et lymphocytaire fusionnent.\nL'ADN proviral est intégré à l'ADN du LT4 grâce à une enzyme appelée intégrase.\nAprès l'intégration, il se forme un ARN messager viral permettant la synthèse des protéines virales. Les matériaux viraux s'assemblent et les unités virales quittent le LT4 infecté en emportant une partie de sa membrane plasmique, ce qui entraîne la destruction du LT4. Les nouveaux virus libérés s'attaquent alors à d'autres LT4.",
      "keyRule": "Gp120 accroche le CD4, Gp41 perfore la membrane, l'intégrase insère l'ADN proviral : le LT4 finit détruit.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte du mécanisme (exercice 2)",
        "statement": "Complète le texte de la leçon : le virus se fixe sur les cellules possédant la protéine CD4 ; la fixation induit la fusion des membranes ; l'ADN proviral, produit grâce à la transcriptase reverse, s'incorpore à l'ADN de la cellule hôte ; le sujet sans symptôme est dit séropositif ; après la latence, le provirus produit de nouveaux virus qui bourgeonnent à la surface du lymphocyte T4 infecté.",
        "methodSteps": [
          "On repère les molécules de la fixation : la protéine CD4 de la cellule-cible et la fusion des membranes virale et plasmique.",
          "On repère l'enzyme de la transcription inverse : la transcriptase reverse, qui produit l'ADN proviral intégré à l'ADN de la cellule hôte.",
          "On repère l'état du sujet sans symptôme : il est séropositif, et le virus en latence est le provirus.",
          "On termine par la sortie des nouveaux virus, qui bourgeonnent à la surface du lymphocyte T4 infecté."
        ],
        "conclusion": "Chaque mot de la liste de l'exercice trouve sa place : protéine CD4, fusion, cellule-cible, transcriptase reverse, l'ADN, séropositif, provirus, nouveaux virus, infecté."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les LT4, cellules cibles du VIH",
          "stepTheme": "Les LT4, cellules cibles du VIH",
          "stepBadge": "Les LT4, cellules cibles du VIH",
          "paragraphText": "• Cellules cibles du VIH : les lymphocytes T4, cellules de défense de l'organisme.\nElles possèdent à leur surface un récepteur membranaire appelé CD4.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p03_q1",
            "type": "mcq",
            "prompt": "Quelles sont les cellules cibles du VIH ?",
            "options": [
              "Les globules rouges",
              "Les lymphocytes T4",
              "Les cellules du foie uniquement",
              "Les plaquettes sanguines"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'interprétation de la leçon est claire : le VIH infecte les LT4, qui sont ses cellules cibles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le récepteur CD4",
          "stepTheme": "Le récepteur CD4",
          "stepBadge": "Le récepteur CD4",
          "paragraphText": "• CD4 : récepteur membranaire situé à la surface des LT4.\nC'est sur ce récepteur que le VIH vient se fixer au début de l'infection.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p03_q2",
            "type": "mcq",
            "prompt": "Le récepteur CD4 se trouve :",
            "options": [
              "Sur l'enveloppe du VIH",
              "Dans le noyau du LT4",
              "À la surface des LT4",
              "Dans le plasma sanguin"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon précise que les LT4 possèdent à leur surface un récepteur membranaire appelé CD4."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de Gp120 et de Gp41",
          "stepTheme": "Le rôle de Gp120 et de Gp41",
          "stepBadge": "Le rôle de Gp120 et de Gp41",
          "paragraphText": "Le VIH se fixe sur le LT4 grâce à sa glycoprotéine Gp120, qui adhère aux récepteurs CD4.\nCette fixation décroche la Gp120 et libère la Gp41, qui sert d'élément perforateur de la membrane du LT4.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p03_q3",
            "type": "mcq",
            "prompt": "Après la fixation de Gp120 sur le CD4, quel est le rôle de Gp41 ?",
            "options": [
              "Elle fabrique l'ADN proviral",
              "Elle sert d'élément perforateur de la membrane du LT4",
              "Elle produit les anticorps",
              "Elle intègre l'ADN proviral"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La fixation décroche Gp120 et libère Gp41, élément perforateur de la membrane du LT4, ce qui permet la fusion des membranes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de l'intégrase",
          "stepTheme": "Le rôle de l'intégrase",
          "stepBadge": "Le rôle de l'intégrase",
          "paragraphText": "L'ADN proviral, formé dans le cytoplasme, doit rejoindre l'ADN de la cellule hôte dans le noyau.\nSon intégration à l'ADN du LT4 se fait grâce à une enzyme appelée intégrase.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p03_q4",
            "type": "mcq",
            "prompt": "Quelle enzyme intègre l'ADN proviral à l'ADN du LT4 ?",
            "options": [
              "La transcriptase inverse",
              "La Gp41",
              "L'intégrase",
              "La protéine interne"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon distingue les rôles : la transcriptase inverse forme l'ADN proviral, et l'intégrase l'intègre à l'ADN du LT4."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La sortie des virus détruit le LT4",
          "stepTheme": "La sortie des virus détruit le LT4",
          "stepBadge": "La sortie des virus détruit le LT4",
          "paragraphText": "Piège : le LT4 ne survit pas à la production de nouveaux virus.\nLes unités virales quittent le LT4 infecté en emportant une partie de sa membrane plasmique, ce qui entraîne la destruction du LT4.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p03_q5",
            "type": "mcq",
            "prompt": "Comment les nouveaux virus quittent-ils le LT4, selon la leçon ?",
            "options": [
              "En traversant la membrane sans l'endommager",
              "En emportant une partie de la membrane plasmique du LT4, ce qui le détruit",
              "Par les anticorps anti-VIH",
              "En restant définitivement dans le noyau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le bourgeonnement emporte une partie de la membrane plasmique du LT4 : cela entraîne la destruction du LT4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le texte à compléter (exercice 2)",
          "stepTheme": "Le texte à compléter (exercice 2)",
          "stepBadge": "Le texte à compléter (exercice 2)",
          "paragraphText": "Dans l'exercice 2, le sujet infecté qui ne présente aucun symptôme est dit séropositif.\nIl reste susceptible de transmettre le virus, par le sang ou par les sécrétions sexuelles, pendant la période de latence.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p03_q6",
            "type": "mcq",
            "prompt": "Dans l'exercice 2, un sujet infecté sans aucun symptôme est dit :",
            "options": [
              "Séropositif",
              "Immunisé",
              "Guéri",
              "Asymptomatique définitif sans virus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte à compléter le précise : à ce stade, le sujet est dit séropositif et ne présente aucun symptôme, tout en pouvant transmettre le virus."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l06_infection_vih_p03_q1",
          "type": "mcq",
          "prompt": "Quelles sont les cellules cibles du VIH ?",
          "options": [
            "Les globules rouges",
            "Les lymphocytes T4",
            "Les cellules du foie uniquement",
            "Les plaquettes sanguines"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'interprétation de la leçon est claire : le VIH infecte les LT4, qui sont ses cellules cibles."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p03_q2",
          "type": "mcq",
          "prompt": "Le récepteur CD4 se trouve :",
          "options": [
            "Sur l'enveloppe du VIH",
            "Dans le noyau du LT4",
            "À la surface des LT4",
            "Dans le plasma sanguin"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon précise que les LT4 possèdent à leur surface un récepteur membranaire appelé CD4."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p03_q3",
          "type": "mcq",
          "prompt": "Après la fixation de Gp120 sur le CD4, quel est le rôle de Gp41 ?",
          "options": [
            "Elle fabrique l'ADN proviral",
            "Elle sert d'élément perforateur de la membrane du LT4",
            "Elle produit les anticorps",
            "Elle intègre l'ADN proviral"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La fixation décroche Gp120 et libère Gp41, élément perforateur de la membrane du LT4, ce qui permet la fusion des membranes."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p03_q4",
          "type": "mcq",
          "prompt": "Quelle enzyme intègre l'ADN proviral à l'ADN du LT4 ?",
          "options": [
            "La transcriptase inverse",
            "La Gp41",
            "L'intégrase",
            "La protéine interne"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon distingue les rôles : la transcriptase inverse forme l'ADN proviral, et l'intégrase l'intègre à l'ADN du LT4."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p03_q5",
          "type": "mcq",
          "prompt": "Comment les nouveaux virus quittent-ils le LT4, selon la leçon ?",
          "options": [
            "En traversant la membrane sans l'endommager",
            "En emportant une partie de la membrane plasmique du LT4, ce qui le détruit",
            "Par les anticorps anti-VIH",
            "En restant définitivement dans le noyau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le bourgeonnement emporte une partie de la membrane plasmique du LT4 : cela entraîne la destruction du LT4."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p03_q6",
          "type": "mcq",
          "prompt": "Dans l'exercice 2, un sujet infecté sans aucun symptôme est dit :",
          "options": [
            "Séropositif",
            "Immunisé",
            "Guéri",
            "Asymptomatique définitif sans virus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte à compléter le précise : à ce stade, le sujet est dit séropositif et ne présente aucun symptôme, tout en pouvant transmettre le virus."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l06_infection_vih_p04",
      "order": 4,
      "title": "L'évolution de l'infection en trois phases",
      "summary": "Suivre l'évolution des quantités de VIH, de LT4 et d'anticorps anti-VIH, de la primo-infection au SIDA déclaré.",
      "conceptExplanation": "On dose chez un patient, depuis sa contamination jusqu'à sa mort, les anticorps anti-VIH dans le sang ainsi que les quantités de virus (virémie) et de LT4.\nPhase I, la primo-infection (de 0 à 6 mois) : la quantité de VIH augmente rapidement jusqu'à un maximum puis chute, tandis que le taux d'anticorps anti-VIH et de LT4 augmente.\nPhase II, la phase asymptomatique (de 6 à 56 mois) : la quantité de VIH continue de diminuer jusqu'à un minimum puis augmente à nouveau, alors que le taux d'anticorps anti-VIH et de LT4 continue d'augmenter avant de chuter.\nPhase III, la phase symptomatique ou SIDA déclaré (au-delà de 56 mois) : le taux de VIH continue d'augmenter, tandis que les taux d'anticorps anti-VIH et de LT4 tendent à s'annuler.",
      "keyRule": "Trois phases : primo-infection (0 à 6 mois), phase asymptomatique (6 à 56 mois), puis SIDA déclaré, avec effondrement des LT4 et des anticorps.",
      "formulas": [],
      "workedExample": {
        "title": "Lire les courbes d'évolution (document 3)",
        "statement": "Le document 3 donne les courbes d'évolution de la quantité de VIH, de LT4 et d'anticorps anti-VIH chez un patient, de la contamination à la mort. Décris la phase III.",
        "methodSteps": [
          "On repère la durée : la phase III commence au-delà de 56 mois, c'est la phase symptomatique ou SIDA déclaré.",
          "On lit la courbe du VIH : son taux continue d'augmenter.",
          "On lit les autres courbes : les taux d'anticorps anti-VIH et de LT4 tendent à s'annuler."
        ],
        "conclusion": "En phase III, le VIH augmente pendant que les LT4 et les anticorps anti-VIH tendent à disparaître."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La primo-infection",
          "stepTheme": "La primo-infection",
          "stepBadge": "La primo-infection",
          "paragraphText": "• Phase I ou primo-infection : la première phase de l'infection, de 0 à 6 mois après la contamination.\nLa quantité de VIH y augmente rapidement jusqu'à une valeur maximale, puis chute.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p04_q1",
            "type": "mcq",
            "prompt": "Quelle durée la leçon donne-t-elle à la primo-infection ?",
            "options": [
              "De 6 à 56 mois",
              "Au-delà de 56 mois",
              "De 0 à 6 mois",
              "Une dizaine d'années"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'analyse des courbes situe la phase I, la primo-infection, de 0 à 6 mois."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le rôle des anticorps en phase I",
          "stepTheme": "Le rôle des anticorps en phase I",
          "stepBadge": "Le rôle des anticorps en phase I",
          "paragraphText": "L'augmentation du VIH est due à sa multiplication dans l'organisme ; les LT4 sensibilisés se multiplient activement et activent les LB.\nLes LB se multiplient et se différencient en plasmocytes sécréteurs d'anticorps anti-VIH, dont le taux augmente et fait chuter la quantité de VIH.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p04_q2",
            "type": "mcq",
            "prompt": "En phase I, qu'est-ce qui fait chuter la quantité de VIH après son pic ?",
            "options": [
              "La disparition des LT4",
              "L'augmentation des anticorps anti-VIH sécrétés par les plasmocytes",
              "L'arrêt total de la multiplication virale",
              "La prise d'antibiotiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les LT4 activent les LB, qui deviennent des plasmocytes sécréteurs d'anticorps anti-VIH : leur taux croissant fait chuter la quantité de VIH."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La séropositivité",
          "stepTheme": "La séropositivité",
          "stepBadge": "La séropositivité",
          "paragraphText": "• Séropositif : dès l'apparition des anticorps anti-VIH dans son sang, l'individu est qualifié de séropositif.\nLe test ELISA, cité dans les évaluations, révèle justement la présence d'anticorps anti-VIH.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p04_q3",
            "type": "mcq",
            "prompt": "Un individu devient séropositif dès :",
            "options": [
              "La disparition de ses LT4",
              "L'apparition des anticorps anti-VIH dans son sang",
              "L'apparition des maladies opportunistes",
              "La fin de la phase asymptomatique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'interprétation de la leçon le dit : dès l'apparition des anticorps anti-VIH, l'individu est qualifié de séropositif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La phase asymptomatique",
          "stepTheme": "La phase asymptomatique",
          "stepBadge": "La phase asymptomatique",
          "paragraphText": "• Phase II ou phase asymptomatique : de 6 à 56 mois, sans symptôme apparent.\nLa quantité de VIH diminue d'abord, car les virus circulants sont neutralisés par les anticorps produits en grande quantité, puis augmente à nouveau car le virus se multiplie en détruisant les LT4.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p04_q4",
            "type": "mcq",
            "prompt": "Pendant la phase asymptomatique, pourquoi la quantité de VIH augmente-t-elle à nouveau ?",
            "options": [
              "Parce que les anticorps deviennent plus efficaces",
              "Parce que le virus se multiplie en détruisant les LT4",
              "Parce que le patient est guéri",
              "Parce que les LB se multiplient davantage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La remontée du VIH vient de sa multiplication aux dépens des LT4, dont le taux chute, entraînant la chute des anticorps anti-VIH."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre asymptomatique et guérison",
          "stepTheme": "Confondre asymptomatique et guérison",
          "stepBadge": "Confondre asymptomatique et guérison",
          "paragraphText": "Piège : la phase asymptomatique ne signifie pas que le virus a disparu.\nLe virus échappe progressivement à l'action du système immunitaire et continue de se multiplier aux dépens des LT4.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p04_q5",
            "type": "mcq",
            "prompt": "Pendant la phase asymptomatique, le virus :",
            "options": [
              "A complètement disparu de l'organisme",
              "Continue de se multiplier en détruisant les LT4",
              "Est neutralisé définitivement",
              "Ne peut plus être transmis"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Malgré l'absence de symptômes, le VIH se multiplie en détruisant les LT4 : c'est ce qui prépare la phase symptomatique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La phase symptomatique ou SIDA déclaré",
          "stepTheme": "La phase symptomatique ou SIDA déclaré",
          "stepBadge": "La phase symptomatique ou SIDA déclaré",
          "paragraphText": "• Phase III ou phase symptomatique (SIDA déclaré) : au-delà de 56 mois.\nLe taux de VIH continue d'augmenter, tandis que les taux d'anticorps anti-VIH et de LT4 tendent à s'annuler.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p04_q6",
            "type": "mcq",
            "prompt": "En phase III, selon les courbes de la leçon :",
            "options": [
              "Le VIH diminue et les LT4 augmentent",
              "Le VIH et les LT4 augmentent ensemble",
              "Le VIH augmente et les LT4 tendent à s'annuler",
              "Toutes les courbes restent stables"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'analyse de la phase III indique une augmentation continue du VIH pendant que les taux d'anticorps anti-VIH et de LT4 tendent à s'annuler."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l06_infection_vih_p04_q1",
          "type": "mcq",
          "prompt": "Quelle durée la leçon donne-t-elle à la primo-infection ?",
          "options": [
            "De 6 à 56 mois",
            "Au-delà de 56 mois",
            "De 0 à 6 mois",
            "Une dizaine d'années"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'analyse des courbes situe la phase I, la primo-infection, de 0 à 6 mois."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p04_q2",
          "type": "mcq",
          "prompt": "En phase I, qu'est-ce qui fait chuter la quantité de VIH après son pic ?",
          "options": [
            "La disparition des LT4",
            "L'augmentation des anticorps anti-VIH sécrétés par les plasmocytes",
            "L'arrêt total de la multiplication virale",
            "La prise d'antibiotiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les LT4 activent les LB, qui deviennent des plasmocytes sécréteurs d'anticorps anti-VIH : leur taux croissant fait chuter la quantité de VIH."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p04_q3",
          "type": "mcq",
          "prompt": "Un individu devient séropositif dès :",
          "options": [
            "La disparition de ses LT4",
            "L'apparition des anticorps anti-VIH dans son sang",
            "L'apparition des maladies opportunistes",
            "La fin de la phase asymptomatique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'interprétation de la leçon le dit : dès l'apparition des anticorps anti-VIH, l'individu est qualifié de séropositif."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p04_q4",
          "type": "mcq",
          "prompt": "Pendant la phase asymptomatique, pourquoi la quantité de VIH augmente-t-elle à nouveau ?",
          "options": [
            "Parce que les anticorps deviennent plus efficaces",
            "Parce que le virus se multiplie en détruisant les LT4",
            "Parce que le patient est guéri",
            "Parce que les LB se multiplient davantage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La remontée du VIH vient de sa multiplication aux dépens des LT4, dont le taux chute, entraînant la chute des anticorps anti-VIH."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p04_q5",
          "type": "mcq",
          "prompt": "Pendant la phase asymptomatique, le virus :",
          "options": [
            "A complètement disparu de l'organisme",
            "Continue de se multiplier en détruisant les LT4",
            "Est neutralisé définitivement",
            "Ne peut plus être transmis"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Malgré l'absence de symptômes, le VIH se multiplie en détruisant les LT4 : c'est ce qui prépare la phase symptomatique."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p04_q6",
          "type": "mcq",
          "prompt": "En phase III, selon les courbes de la leçon :",
          "options": [
            "Le VIH diminue et les LT4 augmentent",
            "Le VIH et les LT4 augmentent ensemble",
            "Le VIH augmente et les LT4 tendent à s'annuler",
            "Toutes les courbes restent stables"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'analyse de la phase III indique une augmentation continue du VIH pendant que les taux d'anticorps anti-VIH et de LT4 tendent à s'annuler."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l06_infection_vih_p05",
      "order": 5,
      "title": "Conséquences : maladies opportunistes et protection",
      "summary": "Dégager la conséquence de la destruction des LT4 : la déficience immunitaire et les maladies opportunistes.",
      "conceptExplanation": "Lorsque le taux de LT4 devient très faible, il s'installe une déficience du système immunitaire, appelée dysfonctionnement du système immunitaire.\nLe VIH affaiblit ainsi l'organisme et l'expose à tous les agents pathogènes, d'où l'apparition des maladies opportunistes liées au SIDA, comme la tuberculose et le sarcome de Kaposi.\nLa conclusion générale rappelle que le VIH s'attaque au système de défense grâce à sa structure particulière, se multiplie et finit par détruire les cellules de défense (LT4).\nPour prévenir l'infection, il convient de mener une vie saine et responsable face au VIH, en adoptant des mesures de protection.",
      "keyRule": "Sans LT4, le système immunitaire dysfonctionne : les maladies opportunistes apparaissent, d'où l'importance des mesures de protection.",
      "formulas": [],
      "workedExample": {
        "title": "Exploiter les tests de séropositivité (exercice 3)",
        "statement": "Dans l'exercice 3, le test ELISA est positif chez le témoin infecté I2 et négatif chez le témoin non contaminé I1 ; la charge virale est de 0 chez I1. Que révèlent ces résultats ?",
        "methodSteps": [
          "Le test ELISA révèle la présence d'anticorps anti-VIH : positif, il signale une infection par le VIH.",
          "Chez le témoin non contaminé I1, le test est négatif et la charge virale est de 0 : aucun virus n'est détecté.",
          "Chez les enfants suivis, la présence d'anticorps peut venir de la mère, c'est la charge virale qui renseigne sur leur propre infection."
        ],
        "conclusion": "Un test ELISA positif signe la présence d'anticorps anti-VIH, à interpréter avec la charge virale, surtout chez le nouveau-né."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le dysfonctionnement du système immunitaire",
          "stepTheme": "Le dysfonctionnement du système immunitaire",
          "stepBadge": "Le dysfonctionnement du système immunitaire",
          "paragraphText": "• Dysfonctionnement du système immunitaire : la déficience du système immunitaire qui s'installe quand le taux de LT4 devient très faible.\nLe virus échappe alors à l'action du système immunitaire et continue de se multiplier.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p05_q1",
            "type": "mcq",
            "prompt": "Comment la leçon nomme-t-elle la déficience du système immunitaire causée par le VIH ?",
            "options": [
              "La séropositivité",
              "Le dysfonctionnement du système immunitaire",
              "La primo-infection",
              "L'atrésie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Quand les LT4 deviennent très rares, la leçon parle d'une déficience appelée dysfonctionnement du système immunitaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les maladies opportunistes",
          "stepTheme": "Les maladies opportunistes",
          "stepBadge": "Les maladies opportunistes",
          "paragraphText": "• Maladies opportunistes : les maladies qui apparaissent parce que l'organisme affaibli est exposé à tous les agents pathogènes.\nLa leçon cite en exemples la tuberculose et le sarcome de Kaposi.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p05_q2",
            "type": "mcq",
            "prompt": "Parmi les exemples suivants, lesquels la leçon cite-t-elle comme maladies opportunistes ?",
            "options": [
              "La tuberculose et le sarcome de Kaposi",
              "Le paludisme et la grippe uniquement",
              "L'albinisme et le daltonisme",
              "Aucune maladie n'est citée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'interprétation de la phase III cite la tuberculose et le sarcome de Kaposi comme maladies opportunistes liées au SIDA."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Pourquoi la chute des LT4 affaiblit tout l'organisme",
          "stepTheme": "Pourquoi la chute des LT4 affaiblit tout l'organisme",
          "stepBadge": "Pourquoi la chute des LT4 affaiblit tout l'organisme",
          "paragraphText": "Les LT4 sont des cellules de défense qui activent notamment les LB producteurs d'anticorps.\nLeur destruction par le VIH fait donc chuter à la fois les LT4 et les anticorps anti-VIH, comme le montrent les courbes de la phase III.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p05_q3",
            "type": "mcq",
            "prompt": "La destruction des LT4 entraîne aussi la chute des anticorps anti-VIH parce que :",
            "options": [
              "Les LT4 fabriquent directement tous les anticorps",
              "Les LT4 activent les LB qui se différencient en plasmocytes sécréteurs d'anticorps",
              "Les anticorps sont détruits par Gp41",
              "Les LB deviennent des cellules cibles du VIH"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon explique que les LT4 activent les LB, qui se différencient en plasmocytes : sans LT4, la production d'anticorps s'effondre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Prévenir l'infection par les mesures de protection",
          "stepTheme": "Prévenir l'infection par les mesures de protection",
          "stepBadge": "Prévenir l'infection par les mesures de protection",
          "paragraphText": "La situation d'apprentissage fixe l'objectif final : appliquer les mesures de protection contre le VIH.\nLa conclusion générale précise qu'il faut mener une vie saine et responsable face au VIH, en adoptant des mesures de protection.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p05_q4",
            "type": "mcq",
            "prompt": "Selon la conclusion générale de la leçon, prévenir l'infection suppose :",
            "options": [
              "D'attendre la disparition du virus",
              "De mener une vie saine et responsable en adoptant des mesures de protection",
              "D'éviter tout contact avec les séropositifs",
              "De prendre des antibiotiques régulièrement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La prévention, selon la leçon, repose sur une vie saine et responsable et sur l'adoption de mesures de protection."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un séropositif sans symptôme peut transmettre le virus",
          "stepTheme": "Un séropositif sans symptôme peut transmettre le virus",
          "stepBadge": "Un séropositif sans symptôme peut transmettre le virus",
          "paragraphText": "Piège : croire qu'une personne sans symptôme ne transmet pas le VIH.\nLe texte de l'exercice 2 précise qu'un sujet séropositif sans symptôme est susceptible de transmettre le virus, par le sang ou par les sécrétions sexuelles.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p05_q5",
            "type": "mcq",
            "prompt": "Un sujet séropositif qui ne présente aucun symptôme :",
            "options": [
              "Ne peut transmettre le virus en aucun cas",
              "Peut transmettre le virus par le sang ou les sécrétions sexuelles",
              "Est définitivement guéri",
              "N'a plus de virus dans le sang"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte à compléter de l'exercice 2 le dit explicitement : le séropositif sans symptôme peut transmettre le virus."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le test ELISA et la charge virale (exercice 3)",
          "stepTheme": "Le test ELISA et la charge virale (exercice 3)",
          "stepBadge": "Le test ELISA et la charge virale (exercice 3)",
          "paragraphText": "L'exercice 3 utilise le test ELISA, qui révèle la présence d'anticorps anti-VIH, et la charge virale, nombre de virus par millilitre de plasma.\nChez le témoin infecté I2, le test est positif ; chez le témoin non contaminé I1, il est négatif avec une charge virale de 0.",
          "exercise": {
            "id": "terminale_c_svt_l06_infection_vih_p05_q6",
            "type": "mcq",
            "prompt": "Que révèle le test ELISA utilisé dans l'exercice 3 ?",
            "options": [
              "Le nombre de LT4",
              "La présence d'anticorps anti-VIH",
              "La présence du récepteur CD4",
              "Le taux de progestérone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La note de l'exercice précise que le test ELISA révèle la présence d'anticorps anti-VIH."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l06_infection_vih_p05_q1",
          "type": "mcq",
          "prompt": "Comment la leçon nomme-t-elle la déficience du système immunitaire causée par le VIH ?",
          "options": [
            "La séropositivité",
            "Le dysfonctionnement du système immunitaire",
            "La primo-infection",
            "L'atrésie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Quand les LT4 deviennent très rares, la leçon parle d'une déficience appelée dysfonctionnement du système immunitaire."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p05_q2",
          "type": "mcq",
          "prompt": "Parmi les exemples suivants, lesquels la leçon cite-t-elle comme maladies opportunistes ?",
          "options": [
            "La tuberculose et le sarcome de Kaposi",
            "Le paludisme et la grippe uniquement",
            "L'albinisme et le daltonisme",
            "Aucune maladie n'est citée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'interprétation de la phase III cite la tuberculose et le sarcome de Kaposi comme maladies opportunistes liées au SIDA."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p05_q3",
          "type": "mcq",
          "prompt": "La destruction des LT4 entraîne aussi la chute des anticorps anti-VIH parce que :",
          "options": [
            "Les LT4 fabriquent directement tous les anticorps",
            "Les LT4 activent les LB qui se différencient en plasmocytes sécréteurs d'anticorps",
            "Les anticorps sont détruits par Gp41",
            "Les LB deviennent des cellules cibles du VIH"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon explique que les LT4 activent les LB, qui se différencient en plasmocytes : sans LT4, la production d'anticorps s'effondre."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p05_q4",
          "type": "mcq",
          "prompt": "Selon la conclusion générale de la leçon, prévenir l'infection suppose :",
          "options": [
            "D'attendre la disparition du virus",
            "De mener une vie saine et responsable en adoptant des mesures de protection",
            "D'éviter tout contact avec les séropositifs",
            "De prendre des antibiotiques régulièrement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La prévention, selon la leçon, repose sur une vie saine et responsable et sur l'adoption de mesures de protection."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p05_q5",
          "type": "mcq",
          "prompt": "Un sujet séropositif qui ne présente aucun symptôme :",
          "options": [
            "Ne peut transmettre le virus en aucun cas",
            "Peut transmettre le virus par le sang ou les sécrétions sexuelles",
            "Est définitivement guéri",
            "N'a plus de virus dans le sang"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte à compléter de l'exercice 2 le dit explicitement : le séropositif sans symptôme peut transmettre le virus."
        },
        {
          "id": "terminale_c_svt_l06_infection_vih_p05_q6",
          "type": "mcq",
          "prompt": "Que révèle le test ELISA utilisé dans l'exercice 3 ?",
          "options": [
            "Le nombre de LT4",
            "La présence d'anticorps anti-VIH",
            "La présence du récepteur CD4",
            "Le taux de progestérone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La note de l'exercice précise que le test ELISA révèle la présence d'anticorps anti-VIH."
        }
      ]
    }
  ]
};
