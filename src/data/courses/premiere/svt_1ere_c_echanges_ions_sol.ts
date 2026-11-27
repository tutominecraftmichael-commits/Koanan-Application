import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 3 : Les échanges d'ions au niveau du sol » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=940
export const SVT_1ERE_C_L03_ECHANGES_IONS_SOL: CurriculumChapter = {
  "id": "premiere_c_svt_l03_echanges_ions_sol",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 3,
  "title": "Leçon 3 : Les échanges d'ions au niveau du sol",
  "summary": "On explique la formation du complexe argilo-humique et le mécanisme d’échanges d’ions entre ce complexe et la solution du sol, au service des plantes.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=940",
  "points": [
    {
      "id": "premiere_c_svt_l03_echanges_ions_sol_p01",
      "order": 1,
      "title": "La formation du complexe argilo-humique",
      "summary": "Le complexe argilo-humique est l’association de colloïdes d’argile et d’humus par l’intermédiaire de cations, qui donne au sol une structure grumeleuse favorable aux plantes.",
      "conceptExplanation": "En présence d’eau, l’argile et l’humus restent dispersés : ce sont des colloïdes.\nEn présence de calcium, les particules d’argile et d’humus s’associent pour former des flocons.\nL’association de colloïdes d’argile et d’humus par l’intermédiaire de cations forme le complexe argilo-humique.\nLes flocons ainsi formés constituent le complexe, qui donne au sol une structure grumeleuse ou fragmentaire, avec une bonne circulation d’eau et d’air permettant un bon développement de la plante.",
      "keyRule": "Argile plus humus plus cations : telle est la composition du complexe argilo-humique.",
      "formulas": [],
      "workedExample": {
        "title": "Les éléments constitutifs du complexe",
        "statement": "D’après le schéma de formation, quels éléments constituent le complexe argilo-humique ?",
        "methodSteps": [
          "On repère la micelle d’argile et la micelle d’humus.",
          "On repère aussi l’eau et les ions positifs ou cations.",
          "L’association des trois éléments forme le complexe."
        ],
        "conclusion": "Le complexe réunit argile, humus et cations."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du complexe argilo-humique",
          "stepTheme": "Définition du complexe argilo-humique",
          "stepBadge": "Définition du complexe argilo-humique",
          "paragraphText": "• Complexe argilo-humique : association de colloïdes d’argile et d’humus par l’intermédiaire de cations.\nSes éléments constitutifs sont l’argile, l’humus et les ions positifs.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q1",
            "type": "mcq",
            "prompt": "Le complexe argilo-humique est constitué :",
            "options": [
              "D’argile et d’humus unis par des cations",
              "Uniquement d’argile",
              "Uniquement d’humus",
              "Uniquement d’ions calcium sans argile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé de l’activité retient : d’argile et d’humus unis par les ions calcium, donc par des cations."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Argile et humus sont des colloïdes",
          "stepTheme": "Argile et humus sont des colloïdes",
          "stepBadge": "Argile et humus sont des colloïdes",
          "paragraphText": "• Colloïdes : particules qui, en présence d’eau, restent dispersées, comme l’argile et l’humus.\nLeurs particules très petites sont appelées micelles.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q2",
            "type": "mcq",
            "prompt": "En présence d’eau, l’argile et l’humus :",
            "options": [
              "Se transforment en sable",
              "Disparaissent",
              "Restent dispersés : ce sont des colloïdes",
              "Se dissolvent totalement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’analyse du document 1 dit qu’en présence d’eau, l’argile et l’humus restent dispersés et sont des colloïdes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rôle du calcium dans la floculation",
          "stepTheme": "Le rôle du calcium dans la floculation",
          "stepBadge": "Le rôle du calcium dans la floculation",
          "paragraphText": "En présence de calcium, les particules d’argile et d’humus s’associent pour former des flocons.\nLa formation de flocons s’explique par l’association par l’intermédiaire des ions calcium.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q3",
            "type": "mcq",
            "prompt": "La formation des flocons s’explique par l’association des particules grâce aux ions :",
            "options": [
              "Hydrogène seuls cités ici",
              "Calcium",
              "Chlorure",
              "Sodium seuls cités ici"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation attribue la floculation à l’intermédiaire des ions Ca2+."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La structure grumeleuse du sol",
          "stepTheme": "La structure grumeleuse du sol",
          "stepBadge": "La structure grumeleuse du sol",
          "paragraphText": "Les flocons formés constituent le complexe argilo-humique.\nLe complexe donne au sol une structure grumeleuse ou fragmentaire.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q4",
            "type": "mcq",
            "prompt": "Le complexe donne au sol une structure :",
            "options": [
              "Compacte et imperméable",
              "Uniquement sableuse",
              "Liquide",
              "Grumeleuse ou fragmentaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la propriété énoncée dans l’interprétation du document 1."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Sans cation, pas d’association",
          "stepTheme": "Sans cation, pas d’association",
          "stepBadge": "Sans cation, pas d’association",
          "paragraphText": "Piège : l’argile et l’humus seuls, dans l’eau, ne forment pas le complexe.\nIls restent dispersés ; il faut l’intermédiaire de cations pour les associer.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q5",
            "type": "mcq",
            "prompt": "Sans cations, dans l’eau, l’argile et l’humus :",
            "options": [
              "Deviennent des engrais",
              "Se solidifient en roche",
              "Restent dispersés",
              "Forment immédiatement le complexe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’analyse précise qu’en présence d’eau ils restent dispersés et que l’association se fait par l’intermédiaire de cations."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un sol favorable à la plante",
          "stepTheme": "Un sol favorable à la plante",
          "stepBadge": "Un sol favorable à la plante",
          "paragraphText": "Exemple du jardin potager de la situation : un bon complexe favorise un bon rendement.\nLa structure grumeleuse assure une bonne circulation d’eau et d’air, utile au développement de la plante.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q6",
            "type": "mcq",
            "prompt": "La structure grumeleuse permet :",
            "options": [
              "Une bonne circulation d’eau et d’air dans le sol",
              "De rendre le sol stérile",
              "D’empêcher toute circulation d’eau",
              "De supprimer les racines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé relie la structure grumeleuse à une bonne circulation d’eau et d’air et au bon développement de la plante."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q1",
          "type": "mcq",
          "prompt": "Le complexe argilo-humique est constitué :",
          "options": [
            "D’argile et d’humus unis par des cations",
            "Uniquement d’argile",
            "Uniquement d’humus",
            "Uniquement d’ions calcium sans argile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé de l’activité retient : d’argile et d’humus unis par les ions calcium, donc par des cations."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q2",
          "type": "mcq",
          "prompt": "En présence d’eau, l’argile et l’humus :",
          "options": [
            "Se transforment en sable",
            "Disparaissent",
            "Restent dispersés : ce sont des colloïdes",
            "Se dissolvent totalement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’analyse du document 1 dit qu’en présence d’eau, l’argile et l’humus restent dispersés et sont des colloïdes."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q3",
          "type": "mcq",
          "prompt": "La formation des flocons s’explique par l’association des particules grâce aux ions :",
          "options": [
            "Hydrogène seuls cités ici",
            "Calcium",
            "Chlorure",
            "Sodium seuls cités ici"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation attribue la floculation à l’intermédiaire des ions Ca2+."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q4",
          "type": "mcq",
          "prompt": "Le complexe donne au sol une structure :",
          "options": [
            "Compacte et imperméable",
            "Uniquement sableuse",
            "Liquide",
            "Grumeleuse ou fragmentaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la propriété énoncée dans l’interprétation du document 1."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q5",
          "type": "mcq",
          "prompt": "Sans cations, dans l’eau, l’argile et l’humus :",
          "options": [
            "Deviennent des engrais",
            "Se solidifient en roche",
            "Restent dispersés",
            "Forment immédiatement le complexe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’analyse précise qu’en présence d’eau ils restent dispersés et que l’association se fait par l’intermédiaire de cations."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q6",
          "type": "mcq",
          "prompt": "La structure grumeleuse permet :",
          "options": [
            "Une bonne circulation d’eau et d’air dans le sol",
            "De rendre le sol stérile",
            "D’empêcher toute circulation d’eau",
            "De supprimer les racines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé relie la structure grumeleuse à une bonne circulation d’eau et d’air et au bon développement de la plante."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l03_echanges_ions_sol_p02",
      "order": 2,
      "title": "La mise en évidence expérimentale et le pont calcique",
      "summary": "L’expérience au chlorure de calcium montre la floculation des colloïdes : les ions calcium forment un pont calcique entre l’argile et l’humus électronégatifs, d’où le pouvoir absorbant du complexe.",
      "conceptExplanation": "Dans l’expérience, l’ajout de chlorure de calcium au filtrat d’argile ou au surnageant d’humus provoque une floculation, alors que sans chlorure de calcium l’argile fine reste en suspension et l’humus en solution colloïdale.\nLe mélange des deux tubes donne une floculation importante : les particules d’argile et d’humus s’associent. Ces particules sont électronégatives et ne peuvent se fixer directement l’une à l’autre ; l’association est rendue possible par l’intermédiaire des cations, formant un pont dit pont calcique entre l’argile et l’humus.\nLes micelles d’humus forment autour de celles de l’argile une enveloppe protectrice. Les charges négatives des colloïdes fixent les ions de la solution du sol, les cations d’abord puis les anions : c’est le pouvoir absorbant du complexe argilo-humique.",
      "keyRule": "Les ions calcium provoquent la floculation et forment le pont calcique entre argile et humus.",
      "formulas": [],
      "workedExample": {
        "title": "L’expérience de Way (situation d’évaluation)",
        "statement": "Après ajout d’une solution, le sol argileux libère des ions potassium et fixe des ions calcium, sans échanger les ions chlorure. Qu’en déduit-on ?",
        "methodSteps": [
          "Le sol argileux échange plus d’ions que le sol sableux dans le corrigé.",
          "Seuls les cations sont échangés, les anions chlorure ne changent pas.",
          "Le complexe, électronégatif, fixe les cations."
        ],
        "conclusion": "Les sols échangent des cations, pas les anions chlorure."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La floculation",
          "stepTheme": "La floculation",
          "stepBadge": "La floculation",
          "paragraphText": "• Floculation : formation de flocons par association des particules colloïdales.\nElle apparaît dans les tubes qui reçoivent du chlorure de calcium.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q1",
            "type": "mcq",
            "prompt": "Sans chlorure de calcium, dans le tube d’argile, l’argile fine :",
            "options": [
              "Flocule immédiatement",
              "Se transforme en humus",
              "Disparaît",
              "Reste en suspension"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’analyse de la première étape dit que sans CaCl2, l’argile fine reste en suspension."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les ions calcium provoquent la floculation",
          "stepTheme": "Les ions calcium provoquent la floculation",
          "stepBadge": "Les ions calcium provoquent la floculation",
          "paragraphText": "L’apparition de floculation en présence de chlorure de calcium est due aux ions calcium.\nCes ions provoquent la floculation des colloïdes argileux et humiques.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q2",
            "type": "mcq",
            "prompt": "La floculation des colloïdes est provoquée par les ions :",
            "options": [
              "Oxygène",
              "Calcium",
              "Azote gazeux",
              "Chlorure"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation de l’expérience attribue la floculation aux ions Ca++."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le pont calcique",
          "stepTheme": "Le pont calcique",
          "stepBadge": "Le pont calcique",
          "paragraphText": "• Pont calcique : liaison assurée par les cations entre l’argile et l’humus.\nArgile et humus sont électronégatifs et ne peuvent se fixer directement l’un à l’autre.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q3",
            "type": "mcq",
            "prompt": "Argile et humus ne se fixent pas directement car ils sont :",
            "options": [
              "Électronégatifs",
              "Toujours dissous",
              "Électropositifs tous les deux",
              "Sans aucune charge"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé dit que ces particules sont électronégatives et que le cation forme un pont entre elles."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’enveloppe protectrice d’humus",
          "stepTheme": "L’enveloppe protectrice d’humus",
          "stepBadge": "L’enveloppe protectrice d’humus",
          "paragraphText": "Dans l’association, les micelles d’humus forment autour de celles de l’argile une enveloppe protectrice.\nLes micelles sont des particules de très petite taille.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q4",
            "type": "mcq",
            "prompt": "Autour des micelles d’argile, les micelles d’humus forment :",
            "options": [
              "Un pont de chlorure",
              "Une couche de sable",
              "Une enveloppe protectrice",
              "Un film d’eau pure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la description donnée dans l’interprétation de l’expérience."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le pouvoir absorbant fixe d’abord les cations",
          "stepTheme": "Le pouvoir absorbant fixe d’abord les cations",
          "stepBadge": "Le pouvoir absorbant fixe d’abord les cations",
          "paragraphText": "Piège : le complexe ne fixe pas d’abord les anions.\nSes charges négatives fixent les ions de la solution du sol, les cations d’abord puis les anions.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q5",
            "type": "mcq",
            "prompt": "Le pouvoir absorbant du complexe consiste à fixer plusieurs sels minéraux, en commençant par :",
            "options": [
              "Uniquement l’eau",
              "Les cations d’abord",
              "Uniquement le chlorure",
              "Les anions d’abord"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé précise : les cations d’abord puis les anions."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’expérience de Way et les anions",
          "stepTheme": "L’expérience de Way et les anions",
          "stepBadge": "L’expérience de Way et les anions",
          "paragraphText": "Exemple corrigé : les ions chlorure ne sont pas échangés, leur nombre ne change pas.\nLes sols échangent des ions positifs car ils sont électronégatifs.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q6",
            "type": "mcq",
            "prompt": "Dans l’expérience de Way, les ions non échangés sont les ions :",
            "options": [
              "Magnésium",
              "Potassium",
              "Calcium",
              "Chlorure"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le corrigé indique que les ions Cl- ne sont pas échangés."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q1",
          "type": "mcq",
          "prompt": "Sans chlorure de calcium, dans le tube d’argile, l’argile fine :",
          "options": [
            "Flocule immédiatement",
            "Se transforme en humus",
            "Disparaît",
            "Reste en suspension"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’analyse de la première étape dit que sans CaCl2, l’argile fine reste en suspension."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q2",
          "type": "mcq",
          "prompt": "La floculation des colloïdes est provoquée par les ions :",
          "options": [
            "Oxygène",
            "Calcium",
            "Azote gazeux",
            "Chlorure"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation de l’expérience attribue la floculation aux ions Ca++."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q3",
          "type": "mcq",
          "prompt": "Argile et humus ne se fixent pas directement car ils sont :",
          "options": [
            "Électronégatifs",
            "Toujours dissous",
            "Électropositifs tous les deux",
            "Sans aucune charge"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé dit que ces particules sont électronégatives et que le cation forme un pont entre elles."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q4",
          "type": "mcq",
          "prompt": "Autour des micelles d’argile, les micelles d’humus forment :",
          "options": [
            "Un pont de chlorure",
            "Une couche de sable",
            "Une enveloppe protectrice",
            "Un film d’eau pure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la description donnée dans l’interprétation de l’expérience."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q5",
          "type": "mcq",
          "prompt": "Le pouvoir absorbant du complexe consiste à fixer plusieurs sels minéraux, en commençant par :",
          "options": [
            "Uniquement l’eau",
            "Les cations d’abord",
            "Uniquement le chlorure",
            "Les anions d’abord"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé précise : les cations d’abord puis les anions."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q6",
          "type": "mcq",
          "prompt": "Dans l’expérience de Way, les ions non échangés sont les ions :",
          "options": [
            "Magnésium",
            "Potassium",
            "Calcium",
            "Chlorure"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le corrigé indique que les ions Cl- ne sont pas échangés."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l03_echanges_ions_sol_p03",
      "order": 3,
      "title": "Le mécanisme d’échanges entre le complexe et la solution du sol",
      "summary": "Il existe un équilibre permanent : en cas de déficit d’ions dans la solution, le complexe libère des ions ; en cas d’excès par engrais ou amendements, il en fixe.",
      "conceptExplanation": "Il y a un échange d’ions entre le complexe argilo-humique et la solution du sol, avec un équilibre permanent entre les ions de la solution et ceux du complexe.\nLorsque les plantes absorbent les ions de la solution du sol, ou lorsque les ions sont entraînés par lessivage, il y a déficit d’ions dans la solution : pour combler ce déficit, le complexe argilo-humique libère des ions.\nLorsqu’on apporte à la solution du sol des ions, par des engrais ou des amendements, il y a excès d’ions : pour rétablir l’équilibre, le complexe argilo-humique fixe ces ions.\nLe complexe fixe à sa surface des cations provenant de la solution du sol : c’est un complexe adsorbant.",
      "keyRule": "Déficit dans la solution : le complexe libère ; excès dans la solution : le complexe fixe.",
      "formulas": [],
      "workedExample": {
        "title": "Reconstituer le mécanisme (activité d’application)",
        "statement": "Range les phénomènes dans l’ordre logique du mécanisme d’échanges.",
        "methodSteps": [
          "Des échanges de cations ont lieu entre la solution du sol et le complexe.",
          "En cas d’excès, le complexe fixe les ions ; en cas de déficit, il les libère.",
          "Les ions sont ainsi mis à la disposition des plantes."
        ],
        "conclusion": "L’ordre retenu dans le corrigé enchaîne échanges, fixation en excès, libération en déficit, puis mise à disposition des plantes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le complexe adsorbant",
          "stepTheme": "Le complexe adsorbant",
          "stepBadge": "Le complexe adsorbant",
          "paragraphText": "• Complexe adsorbant : ensemble des colloïdes humiques et argileux dotés de charges négatives et susceptibles de retenir les cations.\nLe complexe argilo-humique fixe à sa surface des cations de la solution du sol.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q1",
            "type": "mcq",
            "prompt": "On désigne par complexe adsorbant l’ensemble des colloïdes :",
            "options": [
              "Électropositifs retenant les anions",
              "Sans charges",
              "Dotés de charges négatives et susceptibles de retenir les cations",
              "Uniquement liquides"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la définition donnée dans l’interprétation de la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’équilibre permanent",
          "stepTheme": "L’équilibre permanent",
          "stepBadge": "L’équilibre permanent",
          "paragraphText": "Il existe un équilibre permanent entre les ions de la solution du sol et ceux du complexe.\nCet équilibre peut être déplacé dans les deux sens.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q2",
            "type": "mcq",
            "prompt": "L’équilibre entre solution et complexe peut être déplacé :",
            "options": [
              "Dans les deux sens",
              "Jamais",
              "Uniquement par la pluie",
              "Dans un seul sens"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les résultats de l’observation disent que cet équilibre peut être déplacé dans les deux sens."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "En cas de déficit, le complexe libère",
          "stepTheme": "En cas de déficit, le complexe libère",
          "stepBadge": "En cas de déficit, le complexe libère",
          "paragraphText": "Méthode : repérer d’abord la cause du déséquilibre, absorption par les plantes ou lessivage.\nEn cas de déficit d’ions dans la solution, le complexe libère des ions pour combler le déficit.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q3",
            "type": "mcq",
            "prompt": "Quand les plantes absorbent les ions de la solution, le complexe :",
            "options": [
              "Arrête tout échange",
              "Fixe encore plus d’ions",
              "Se détruit",
              "Libère des ions pour les remplacer"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’analyse dit que le complexe libère des ions pour remplacer ceux absorbés par les plantes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "En cas d’excès, le complexe fixe",
          "stepTheme": "En cas d’excès, le complexe fixe",
          "stepBadge": "En cas d’excès, le complexe fixe",
          "paragraphText": "Méthode : un apport d’engrais ou d’amendements enrichit la solution en ions.\nPour rétablir l’équilibre ionique, le complexe fixe ces ions en excès.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q4",
            "type": "mcq",
            "prompt": "Après un apport d’engrais, le complexe argilo-humique :",
            "options": [
              "Libère tous ses ions",
              "Fixe les ions en excès",
              "Repousse les cations",
              "Devient du sable"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé indique que le complexe fixe les ions apportés à la solution du sol."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Adsorption et désorption ne se confondent pas",
          "stepTheme": "Adsorption et désorption ne se confondent pas",
          "stepBadge": "Adsorption et désorption ne se confondent pas",
          "paragraphText": "Piège repris des exercices : l’adsorption est la fixation des ions à la surface du complexe.\nLa désorption est la libération des ions fixés, opposée à l’adsorption, et non l’effet d’un apport d’ions.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q5",
            "type": "mcq",
            "prompt": "L’adsorption est :",
            "options": [
              "La fixation des ions à la surface du complexe argilo-humique",
              "Le déplacement libre des ions sans fixation",
              "La destruction du complexe",
              "La fixation des ions par les plantes seules"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé de l’activité 4 retient la fixation des ions à la surface du complexe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’appauvrissement par lessivage",
          "stepTheme": "L’appauvrissement par lessivage",
          "stepBadge": "L’appauvrissement par lessivage",
          "paragraphText": "Exemple : l’appauvrissement de la solution du sol en ions peut être dû à l’absorption par les plantes ou à un important lessivage.\nUn apport d’engrais, au contraire, enrichit la solution.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q6",
            "type": "mcq",
            "prompt": "L’appauvrissement de la solution en ions peut être dû à :",
            "options": [
              "La structure grumeleuse seule",
              "Un apport d’engrais",
              "L’absorption par les plantes et le lessivage",
              "La formation du complexe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé de l’activité 4 retient l’absorption par les plantes et l’important lessivage."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q1",
          "type": "mcq",
          "prompt": "On désigne par complexe adsorbant l’ensemble des colloïdes :",
          "options": [
            "Électropositifs retenant les anions",
            "Sans charges",
            "Dotés de charges négatives et susceptibles de retenir les cations",
            "Uniquement liquides"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la définition donnée dans l’interprétation de la partie II."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q2",
          "type": "mcq",
          "prompt": "L’équilibre entre solution et complexe peut être déplacé :",
          "options": [
            "Dans les deux sens",
            "Jamais",
            "Uniquement par la pluie",
            "Dans un seul sens"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les résultats de l’observation disent que cet équilibre peut être déplacé dans les deux sens."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q3",
          "type": "mcq",
          "prompt": "Quand les plantes absorbent les ions de la solution, le complexe :",
          "options": [
            "Arrête tout échange",
            "Fixe encore plus d’ions",
            "Se détruit",
            "Libère des ions pour les remplacer"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’analyse dit que le complexe libère des ions pour remplacer ceux absorbés par les plantes."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q4",
          "type": "mcq",
          "prompt": "Après un apport d’engrais, le complexe argilo-humique :",
          "options": [
            "Libère tous ses ions",
            "Fixe les ions en excès",
            "Repousse les cations",
            "Devient du sable"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé indique que le complexe fixe les ions apportés à la solution du sol."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q5",
          "type": "mcq",
          "prompt": "L’adsorption est :",
          "options": [
            "La fixation des ions à la surface du complexe argilo-humique",
            "Le déplacement libre des ions sans fixation",
            "La destruction du complexe",
            "La fixation des ions par les plantes seules"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé de l’activité 4 retient la fixation des ions à la surface du complexe."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q6",
          "type": "mcq",
          "prompt": "L’appauvrissement de la solution en ions peut être dû à :",
          "options": [
            "La structure grumeleuse seule",
            "Un apport d’engrais",
            "L’absorption par les plantes et le lessivage",
            "La formation du complexe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé de l’activité 4 retient l’absorption par les plantes et l’important lessivage."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l03_echanges_ions_sol_p04",
      "order": 4,
      "title": "Le rôle du complexe argilo-humique pour les plantes et le rendement",
      "summary": "Le complexe fixe et échange les ions avec la solution du sol et les met à la disposition des plantes : c’est pourquoi un sol fertile est riche en complexe argilo-humique.",
      "conceptExplanation": "L’altération de la roche mère libère des ions minéraux qui enrichissent la solution du sol en ions.\nCes ions minéraux sont mis à la disposition des plantes, qui les utilisent pour leur développement ; les complexes argilo-humiques fixent une grande partie de ces ions, les cations d’abord, les anions ensuite.\nLe rôle du complexe argilo-humique est donc de fixer et d’échanger les ions avec la solution du sol, en les mettant à la disposition des plantes qui y poussent, ce qui favorise l’obtention de bons rendements agricoles.\nLes principales sources d’ions du sol citées dans les exercices sont la minéralisation de la matière organique, et l’absorption des ions du sol est faite par les plantes et les microorganismes.",
      "keyRule": "Le complexe est un réservoir d’ions échangeables au service des plantes.",
      "formulas": [],
      "workedExample": {
        "title": "Définir et expliquer le rôle (situation d’évaluation)",
        "statement": "Un élève entend qu’un sol fertile est riche en complexe argilo-humique. Définis le complexe et indique son rôle quand il est riche ou pauvre en ions.",
        "methodSteps": [
          "Le complexe est l’association de colloïdes humiques et d’argile retenant les ions du sol.",
          "Riche en ions, il libère des ions dans la solution du sol ; pauvre en ions, il en fixe.",
          "Il met ainsi les ions à la disposition des plantes."
        ],
        "conclusion": "Le rôle du complexe s’inverse selon sa richesse en ions."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition attendue du complexe",
          "stepTheme": "Définition attendue du complexe",
          "stepBadge": "Définition attendue du complexe",
          "paragraphText": "• Complexe argilo-humique : association de colloïdes humiques et d’argile, retenant les ions du sol.\nC’est la définition du corrigé de la situation d’évaluation.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q1",
            "type": "mcq",
            "prompt": "Le complexe argilo-humique est l’association :",
            "options": [
              "De sable et de gravier",
              "De colloïdes humiques et d’argile retenant les ions",
              "D’eau et d’air uniquement",
              "De racines et de feuilles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé définit le complexe comme l’association de colloïdes humiques et d’argile retenant les ions."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Quand le complexe est riche en ions",
          "stepTheme": "Quand le complexe est riche en ions",
          "stepBadge": "Quand le complexe est riche en ions",
          "paragraphText": "Si le complexe est riche en ions, il en libère dans la solution du sol.\nLa solution peut alors alimenter les plantes.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q2",
            "type": "mcq",
            "prompt": "Riche en ions, le complexe :",
            "options": [
              "Bloque les échanges",
              "Se transforme en roche mère",
              "Fixe des ions de la solution",
              "Libère des ions dans la solution du sol"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le corrigé de la situation d’évaluation 1 donne ce rôle pour le cas riche en ions."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Quand le complexe est pauvre en ions",
          "stepTheme": "Quand le complexe est pauvre en ions",
          "stepBadge": "Quand le complexe est pauvre en ions",
          "paragraphText": "Si le complexe est pauvre en ions, il fixe des ions de la solution du sol.\nIl reconstitue ainsi sa réserve échangeable.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q3",
            "type": "mcq",
            "prompt": "Pauvre en ions, le complexe :",
            "options": [
              "Arrête la croissance des plantes",
              "Libère des ions",
              "Fixe des ions de la solution du sol",
              "Repousse les cations"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé donne la fixation pour le cas pauvre en ions."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L’origine des ions du sol",
          "stepTheme": "L’origine des ions du sol",
          "stepBadge": "L’origine des ions du sol",
          "paragraphText": "L’altération de la roche mère libère des ions minéraux qui enrichissent la solution du sol.\nLa minéralisation de la matière organique est aussi une source d’ions citée dans les exercices.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q4",
            "type": "mcq",
            "prompt": "Les ions minéraux de la solution du sol proviennent notamment de :",
            "options": [
              "L’altération de la roche mère",
              "La seule photosynthèse",
              "Uniquement la pluie acide",
              "La respiration des animaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte à compléter de la partie II commence par l’altération de la roche mère qui libère des ions minéraux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "En cas de déficit, le complexe libère des ions",
          "stepTheme": "En cas de déficit, le complexe libère des ions",
          "stepBadge": "En cas de déficit, le complexe libère des ions",
          "paragraphText": "Piège des affirmations : dire que le complexe fixe des ions en cas de déficit dans la solution du sol est faux, d’après le corrigé de l’activité d’application.\nEn cas de déficit, il libère des ions ; c’est en cas d’excès d’ions dans la solution qu’il en fixe, pour rétablir l’équilibre.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q5",
            "type": "mcq",
            "prompt": "En cas de déficit d’ions dans la solution, le complexe :",
            "options": [
              "Ne fait aucun échange",
              "Détruit les anions",
              "Fixe des ions",
              "Libère des ions"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La règle du mécanisme est claire dans le cours : le déficit est comblé par une libération d’ions du complexe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’importance pour le rendement",
          "stepTheme": "L’importance pour le rendement",
          "stepBadge": "L’importance pour le rendement",
          "paragraphText": "Exemple de la sortie ANADER : l’importance du complexe peut favoriser un bon rendement au jardin potager.\nIl met à la disposition des plantes les ions échangés avec la solution du sol.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q6",
            "type": "mcq",
            "prompt": "L’importance du complexe pour l’agriculture est qu’il :",
            "options": [
              "Transforme le sol en sable",
              "Met les ions à la disposition des plantes grâce aux échanges",
              "Empêche les plantes d’absorber les ions",
              "Supprime le besoin d’eau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion de la situation d’évaluation relie le complexe à la mise à disposition des ions pour les plantes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q1",
          "type": "mcq",
          "prompt": "Le complexe argilo-humique est l’association :",
          "options": [
            "De sable et de gravier",
            "De colloïdes humiques et d’argile retenant les ions",
            "D’eau et d’air uniquement",
            "De racines et de feuilles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé définit le complexe comme l’association de colloïdes humiques et d’argile retenant les ions."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q2",
          "type": "mcq",
          "prompt": "Riche en ions, le complexe :",
          "options": [
            "Bloque les échanges",
            "Se transforme en roche mère",
            "Fixe des ions de la solution",
            "Libère des ions dans la solution du sol"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le corrigé de la situation d’évaluation 1 donne ce rôle pour le cas riche en ions."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q3",
          "type": "mcq",
          "prompt": "Pauvre en ions, le complexe :",
          "options": [
            "Arrête la croissance des plantes",
            "Libère des ions",
            "Fixe des ions de la solution du sol",
            "Repousse les cations"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé donne la fixation pour le cas pauvre en ions."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q4",
          "type": "mcq",
          "prompt": "Les ions minéraux de la solution du sol proviennent notamment de :",
          "options": [
            "L’altération de la roche mère",
            "La seule photosynthèse",
            "Uniquement la pluie acide",
            "La respiration des animaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte à compléter de la partie II commence par l’altération de la roche mère qui libère des ions minéraux."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q5",
          "type": "mcq",
          "prompt": "En cas de déficit d’ions dans la solution, le complexe :",
          "options": [
            "Ne fait aucun échange",
            "Détruit les anions",
            "Fixe des ions",
            "Libère des ions"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La règle du mécanisme est claire dans le cours : le déficit est comblé par une libération d’ions du complexe."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q6",
          "type": "mcq",
          "prompt": "L’importance du complexe pour l’agriculture est qu’il :",
          "options": [
            "Transforme le sol en sable",
            "Met les ions à la disposition des plantes grâce aux échanges",
            "Empêche les plantes d’absorber les ions",
            "Supprime le besoin d’eau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion de la situation d’évaluation relie le complexe à la mise à disposition des ions pour les plantes."
        }
      ]
    }
  ]
};
