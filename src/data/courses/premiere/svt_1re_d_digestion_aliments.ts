import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère D_L11_ LA  DIGESTION DES ALIMENTS.pdf (Côte d’Ivoire – École numérique ; durée non indiquée) ». Première D (programme propre à la 1re D).
// Fichier généré (scratchpad build_1re_d_svt_d.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_D_L11_DIGESTION_ALIMENTS: CurriculumChapter = {
  "id": "premiere_d_svt_l11_digestion_aliments",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "order": 11,
  "title": "Leçon 11 : La digestion des aliments",
  "summary": "Hydrolyse enzymatique de l’amidon, des protéines et des lipides, rôle de la bile, mécanisme de l’action enzymatique (complexe enzyme-substrat, spécificité), influence du pH et de la température sur les enzymes.",
  "officialVolumeHours": 5,
  "contentVersion": 2,
  "source": "SVT 1ère D_L11_ LA DIGESTION DES ALIMENTS.pdf (Côte d’Ivoire – École numérique ; durée non indiquée)",
  "points": [
    {
      "id": "premiere_d_svt_l11_digestion_aliments_p01",
      "order": 1,
      "title": "La digestion de l’amidon",
      "summary": "Hydrolyse par l’amylase et par l’acide ; catalyseurs.",
      "conceptExplanation": "Situation : à la fin de l’année, des élèves de 1re D organisent un repas. Leur discussion porte sur le devenir des aliments ; certains invités savent peu de choses sur la digestion. Ils veulent expliquer son mécanisme et les conditions d’action des enzymes.\n- Expérience 1 : trois tubes d’empois d’amidon reçoivent de l’eau distillée (A), de la salive fraîche (B) ou de l’acide chlorhydrique (C), 10 minutes à 40 °C, puis de la liqueur de Fehling.\n- Résultats : A, pas de précipité ; B, précipité rouge brique abondant ; C, faible précipité. Le précipité rouge brique révèle des sucres réducteurs.\n- L’eau n’agit pas. La salive et l’acide transforment l’amidon en sucres réducteurs, mais la salive agit beaucoup plus vite.\n- La décomposition de l’amidon est une hydrolyse : les grosses molécules sont coupées grâce à l’eau. L’amylase salivaire est un catalyseur biologique (une enzyme), l’acide un catalyseur chimique ; les catalyseurs accélèrent la réaction. L’enzyme est bien plus efficace.\n- La digestion de l’amidon commence dans la bouche (amylase salivaire) : amidon → maltose. Elle se termine dans l’intestin grêle (amylase pancréatique, puis maltase) : maltose → glucose.\n- Exercice d’association : amidon → glucose ; lipide → glycérol et acides gras ; protéine → acides aminés.",
      "keyRule": "Digestion = hydrolyse des grosses molécules en nutriments, catalysée par des enzymes. Amidon → maltose → glucose.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer salive et acide",
        "statement": "La salive donne un précipité rouge brique abondant, l’acide un faible précipité. Qu’en conclure ?",
        "methodSteps": [
          "Les deux transforment l’amidon en sucres réducteurs : ce sont des catalyseurs.",
          "La salive agit beaucoup plus vite."
        ],
        "conclusion": "L’amylase salivaire, catalyseur biologique, est plus efficace que l’acide, catalyseur chimique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Fehling",
          "stepTheme": "Expérience 1",
          "stepTitle": "La salive transforme l’amidon",
          "paragraphText": "Avec la **salive**, la liqueur de Fehling donne un précipité **rouge brique abondant** : l’amidon a été transformé en **sucres réducteurs**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p01_q1",
            "type": "mcq",
            "prompt": "De l’empois d’amidon mélangé à de la salive fraîche, 10 minutes à 40 °C, donne un précipité rouge brique abondant avec la liqueur de Fehling. Que montre ce résultat ?",
            "options": [
              "La salive a transformé l’amidon en sucres réducteurs",
              "La salive a fabriqué de l’amidon",
              "L’amidon est resté intact",
              "La salive contient du dioxygène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec l’eau distillée, aucun précipité."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Expérience 1 : l’amidon et trois liquides",
            "caption": "Empois d’amidon, 10 minutes à 40 °C, puis liqueur de Fehling.",
            "tableData": {
              "headers": [
                "Tube",
                "Ajout",
                "Résultat"
              ],
              "rows": [
                [
                  "A",
                  "Eau distillée",
                  "Pas de précipité rouge brique"
                ],
                [
                  "B",
                  "Salive fraîche",
                  "Précipité rouge brique abondant"
                ],
                [
                  "C",
                  "Acide chlorhydrique (HCl)",
                  "Faible précipité rouge brique"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Hydrolyse",
          "stepTheme": "Réaction",
          "stepTitle": "Couper grâce à l’eau",
          "paragraphText": "La digestion de l’amidon est une **hydrolyse** : les grosses molécules sont **coupées** en plus petites grâce à l’**eau**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p01_q2",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la réaction chimique qui coupe les grosses molécules des aliments grâce à l’eau ?",
            "options": [
              "Une hydrolyse",
              "Une photosynthèse",
              "Une combustion",
              "Une fermentation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Toutes les enzymes digestives catalysent des hydrolyses."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Catalyseur",
          "stepTheme": "Notion",
          "stepTitle": "Accélérer une réaction",
          "paragraphText": "Un **catalyseur** **accélère** une réaction sans être consommé. L’**amylase** est un catalyseur **biologique** ; l’**acide chlorhydrique** un catalyseur **chimique**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p01_q3",
            "type": "mcq",
            "prompt": "Qu’est-ce que l’amylase salivaire ?",
            "options": [
              "Un catalyseur biologique (une enzyme) qui accélère l’hydrolyse de l’amidon",
              "Un sucre réducteur",
              "Un acide chimique",
              "Un nutriment"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une enzyme est un biocatalyseur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Efficacité",
          "stepTheme": "Comparer",
          "stepTitle": "L’enzyme est plus efficace",
          "paragraphText": "La **salive** agit **beaucoup plus vite** que l’**acide** : les catalyseurs biologiques sont plus **efficaces** que les catalyseurs chimiques.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p01_q4",
            "type": "mcq",
            "prompt": "En 10 minutes à 40 °C, la salive donne un précipité rouge brique abondant et l’acide chlorhydrique un faible précipité. Que peut-on en déduire ?",
            "options": [
              "L’enzyme de la salive est un catalyseur plus efficace que l’acide",
              "L’acide est plus efficace que la salive",
              "Les deux n’ont aucun effet",
              "La salive détruit les sucres"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Précipité abondant = réaction plus rapide."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Maltose",
          "stepTheme": "Étapes",
          "stepTitle": "De l’amidon au glucose",
          "paragraphText": "Dans la **bouche**, l’amylase salivaire donne du **maltose** ; dans l’**intestin grêle**, la digestion se termine en **glucose**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p01_q5",
            "type": "mcq",
            "prompt": "Quel est le produit final de la digestion de l’amidon, absorbé dans l’intestin grêle ?",
            "options": [
              "Le glucose",
              "Le maltose",
              "Les acides aminés",
              "Le glycérol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Amidon → maltose → glucose."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Associer",
          "stepTheme": "Exercice",
          "stepTitle": "Aliment et nutriment",
          "paragraphText": "**Amidon** → **glucose** ; **lipide** → **glycérol** et **acides gras** ; **protéine** → **acides aminés**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p01_q6",
            "type": "mcq",
            "prompt": "Quels nutriments obtient-on après la digestion complète des lipides ?",
            "options": [
              "Des acides gras et du glycérol",
              "Du glucose",
              "Des acides aminés",
              "Du maltose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : 1-d, 2-b et c, 3-a."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p01_q1",
          "type": "mcq",
          "prompt": "De l’empois d’amidon mélangé à de la salive fraîche, 10 minutes à 40 °C, donne un précipité rouge brique abondant avec la liqueur de Fehling. Que montre ce résultat ?",
          "options": [
            "La salive a transformé l’amidon en sucres réducteurs",
            "La salive a fabriqué de l’amidon",
            "L’amidon est resté intact",
            "La salive contient du dioxygène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec l’eau distillée, aucun précipité."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p01_q2",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la réaction chimique qui coupe les grosses molécules des aliments grâce à l’eau ?",
          "options": [
            "Une hydrolyse",
            "Une photosynthèse",
            "Une combustion",
            "Une fermentation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toutes les enzymes digestives catalysent des hydrolyses."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p01_q3",
          "type": "mcq",
          "prompt": "Qu’est-ce que l’amylase salivaire ?",
          "options": [
            "Un catalyseur biologique (une enzyme) qui accélère l’hydrolyse de l’amidon",
            "Un sucre réducteur",
            "Un acide chimique",
            "Un nutriment"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une enzyme est un biocatalyseur."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p01_q4",
          "type": "mcq",
          "prompt": "En 10 minutes à 40 °C, la salive donne un précipité rouge brique abondant et l’acide chlorhydrique un faible précipité. Que peut-on en déduire ?",
          "options": [
            "L’enzyme de la salive est un catalyseur plus efficace que l’acide",
            "L’acide est plus efficace que la salive",
            "Les deux n’ont aucun effet",
            "La salive détruit les sucres"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Précipité abondant = réaction plus rapide."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p01_q5",
          "type": "mcq",
          "prompt": "Quel est le produit final de la digestion de l’amidon, absorbé dans l’intestin grêle ?",
          "options": [
            "Le glucose",
            "Le maltose",
            "Les acides aminés",
            "Le glycérol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Amidon → maltose → glucose."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p01_q6",
          "type": "mcq",
          "prompt": "Quels nutriments obtient-on après la digestion complète des lipides ?",
          "options": [
            "Des acides gras et du glycérol",
            "Du glucose",
            "Des acides aminés",
            "Du maltose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : 1-d, 2-b et c, 3-a."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l11_digestion_aliments_p02",
      "order": 2,
      "title": "La digestion des protéines et des lipides",
      "summary": "Pepsine, trypsine ; bile et lipases.",
      "conceptExplanation": "- Expérience 2 : deux heures après un repas de viande, on filtre le contenu de l’intestin grêle et on ajoute de la ninhydrine : une coloration violette apparaît après chauffage. Elle révèle des acides aminés : les protéines de la viande ont été digérées.\n- Les protéines sont digérées dans l’estomac par la pepsine, puis dans l’intestin grêle par la trypsine et d’autres peptidases : on obtient des acides aminés (et de courts peptides).\n- Expérience 3 : de l’huile reçoit de l’eau (tube A) ou des sels biliaires (tube B). Avec l’eau, le mélange reste hétérogène (l’huile se sépare). Avec les sels biliaires, l’huile se disperse en fines gouttelettes : c’est une émulsion.\n- La bile, fabriquée par le foie et stockée dans la vésicule biliaire, ne contient pas d’enzyme : elle émulsionne les graisses, ce qui facilite l’action des lipases.\n- La lipase pancréatique (dans l’intestin grêle) hydrolyse les lipides en acides gras et glycérol. La lipase gastrique ne commence qu’une petite partie de cette digestion.\n- Corrections du document : il écrit que les sels biliaires « transforment les lipides en acides gras » et que le tube B contient « des molécules d’acide gras et de glycérol ». Les sels biliaires ne font qu’émulsionner l’huile ; c’est la lipase qui l’hydrolyse en acides gras et glycérol. Il attribue aussi l’émulsion à la lipase gastrique : l’émulsion est due à la bile, et l’essentiel de l’hydrolyse est fait par la lipase pancréatique.",
      "keyRule": "Protéines → acides aminés (pepsine, trypsine). Lipides : la bile émulsionne, la lipase pancréatique hydrolyse en acides gras et glycérol.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter le test à la ninhydrine",
        "statement": "Le contenu de l’intestin, deux heures après un repas de viande, devient violet avec la ninhydrine. Interprète.",
        "methodSteps": [
          "La ninhydrine colore en violet les acides aminés.",
          "Les protéines de la viande ont donc été hydrolysées en acides aminés."
        ],
        "conclusion": "La digestion des protéines produit des acides aminés."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Ninhydrine",
          "stepTheme": "Expérience 2",
          "stepTitle": "Des acides aminés dans l’intestin",
          "paragraphText": "Le filtrat du contenu intestinal devient **violet** avec la **ninhydrine** : il contient des **acides aminés**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p02_q1",
            "type": "mcq",
            "prompt": "Deux heures après un repas de viande, le contenu filtré de l’intestin grêle devient violet avec la ninhydrine. Que montre ce résultat ?",
            "options": [
              "Les protéines de la viande ont été digérées en acides aminés",
              "La viande n’a pas été digérée",
              "L’intestin contient de l’amidon",
              "La ninhydrine a fabriqué des protéines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La ninhydrine révèle les acides aminés."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Pepsine",
          "stepTheme": "Enzymes",
          "stepTitle": "Les enzymes des protéines",
          "paragraphText": "Les protéines sont digérées par la **pepsine** dans l’**estomac**, puis par la **trypsine** dans l’**intestin grêle**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p02_q2",
            "type": "mcq",
            "prompt": "Quelle enzyme commence la digestion des protéines dans l’estomac ?",
            "options": [
              "La pepsine",
              "L’amylase salivaire",
              "La lipase",
              "La maltase"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La trypsine continue dans l’intestin."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Émulsion",
          "stepTheme": "Expérience 3",
          "stepTitle": "La bile disperse l’huile",
          "paragraphText": "Avec des **sels biliaires**, l’huile se disperse en fines **gouttelettes** : c’est une **émulsion**. Avec l’eau, elle reste séparée.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p02_q3",
            "type": "mcq",
            "prompt": "De l’huile mélangée à des sels biliaires se disperse en fines gouttelettes, alors qu’avec de l’eau elle reste séparée. Quel est le rôle des sels biliaires ?",
            "options": [
              "Émulsionner l’huile en fines gouttelettes",
              "Hydrolyser l’huile en glucose",
              "Transformer l’huile en protéines",
              "Détruire les enzymes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La bile est fabriquée par le foie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Bile",
          "stepTheme": "Erreur du document",
          "stepTitle": "La bile ne digère pas",
          "paragraphText": "Le document dit que les sels biliaires **transforment** les lipides en acides gras. La **bile** n’a **pas d’enzyme** : elle **émulsionne** seulement ; c’est la **lipase** qui **hydrolyse** les lipides.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p02_q4",
            "type": "mcq",
            "prompt": "Quelle substance hydrolyse les lipides en acides gras et glycérol dans l’intestin grêle ?",
            "options": [
              "La lipase pancréatique",
              "Les sels biliaires",
              "L’amylase salivaire",
              "L’acide chlorhydrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’émulsion facilite le travail de la lipase."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Surface",
          "stepTheme": "Explication",
          "stepTitle": "Pourquoi émulsionner ?",
          "paragraphText": "En dispersant l’huile en **petites gouttelettes**, la bile **augmente la surface** de contact avec la **lipase** : la digestion est plus rapide.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p02_q5",
            "type": "mcq",
            "prompt": "Pourquoi l’émulsion des graisses par la bile accélère-t-elle leur digestion ?",
            "options": [
              "Elle augmente la surface de contact entre les graisses et la lipase",
              "Elle fournit l’énergie de la digestion",
              "Elle remplace la lipase",
              "Elle transforme les graisses en sucres"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Plus de surface = plus de molécules accessibles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Tableau",
          "stepTheme": "Exercice",
          "stepTitle": "Où chaque aliment est-il digéré ?",
          "paragraphText": "L’**amidon** commence dans la **bouche**, les **protides** dans l’**estomac**, les **lipides** surtout dans l’**intestin grêle**. Les **vitamines** et les **fibres** ne sont pas digérées.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p02_q6",
            "type": "mcq",
            "prompt": "Dans quel organe la digestion des lipides se fait-elle principalement ?",
            "options": [
              "Dans l’intestin grêle",
              "Dans la bouche",
              "Dans l’œsophage",
              "Dans le gros intestin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est là qu’agissent la bile et la lipase pancréatique."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Où les aliments sont-ils digérés ?",
            "caption": "Exercice : état des aliments le long du tube digestif.",
            "tableData": {
              "headers": [
                "Aliment",
                "Bouche",
                "Estomac",
                "Intestin grêle"
              ],
              "rows": [
                [
                  "Amidon",
                  "Début de digestion",
                  "Peu de changement",
                  "Digestion complète (glucose)"
                ],
                [
                  "Protides",
                  "Aucune",
                  "Début de digestion",
                  "Acides aminés"
                ],
                [
                  "Lipides (huile)",
                  "Aucune",
                  "Très peu",
                  "Acides gras et glycérol"
                ],
                [
                  "Vitamines",
                  "Non digérées",
                  "Non digérées",
                  "Absorbées telles quelles"
                ],
                [
                  "Fibres",
                  "Non digérées",
                  "Non digérées",
                  "Non digérées"
                ]
              ]
            }
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p02_q1",
          "type": "mcq",
          "prompt": "Deux heures après un repas de viande, le contenu filtré de l’intestin grêle devient violet avec la ninhydrine. Que montre ce résultat ?",
          "options": [
            "Les protéines de la viande ont été digérées en acides aminés",
            "La viande n’a pas été digérée",
            "L’intestin contient de l’amidon",
            "La ninhydrine a fabriqué des protéines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La ninhydrine révèle les acides aminés."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p02_q2",
          "type": "mcq",
          "prompt": "Quelle enzyme commence la digestion des protéines dans l’estomac ?",
          "options": [
            "La pepsine",
            "L’amylase salivaire",
            "La lipase",
            "La maltase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La trypsine continue dans l’intestin."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p02_q3",
          "type": "mcq",
          "prompt": "De l’huile mélangée à des sels biliaires se disperse en fines gouttelettes, alors qu’avec de l’eau elle reste séparée. Quel est le rôle des sels biliaires ?",
          "options": [
            "Émulsionner l’huile en fines gouttelettes",
            "Hydrolyser l’huile en glucose",
            "Transformer l’huile en protéines",
            "Détruire les enzymes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La bile est fabriquée par le foie."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p02_q4",
          "type": "mcq",
          "prompt": "Quelle substance hydrolyse les lipides en acides gras et glycérol dans l’intestin grêle ?",
          "options": [
            "La lipase pancréatique",
            "Les sels biliaires",
            "L’amylase salivaire",
            "L’acide chlorhydrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’émulsion facilite le travail de la lipase."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p02_q5",
          "type": "mcq",
          "prompt": "Pourquoi l’émulsion des graisses par la bile accélère-t-elle leur digestion ?",
          "options": [
            "Elle augmente la surface de contact entre les graisses et la lipase",
            "Elle fournit l’énergie de la digestion",
            "Elle remplace la lipase",
            "Elle transforme les graisses en sucres"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Plus de surface = plus de molécules accessibles."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p02_q6",
          "type": "mcq",
          "prompt": "Dans quel organe la digestion des lipides se fait-elle principalement ?",
          "options": [
            "Dans l’intestin grêle",
            "Dans la bouche",
            "Dans l’œsophage",
            "Dans le gros intestin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est là qu’agissent la bile et la lipase pancréatique."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l11_digestion_aliments_p03",
      "order": 3,
      "title": "Le mécanisme de l’action des enzymes",
      "summary": "Complexe enzyme-substrat et spécificité.",
      "conceptExplanation": "- Une enzyme (E) possède un site actif dont la forme correspond à celle de son substrat (S). Le substrat se fixe sur ce site : il se forme un complexe enzyme-substrat (ES).\n- L’enzyme coupe alors le substrat en produits plus petits (P1 et P2), puis elle est libérée intacte et peut recommencer : E + S → ES → E + P1 + P2.\n- Spécificité de substrat : chaque enzyme n’agit que sur un substrat (l’amylase sur l’amidon, la pepsine sur les protéines). Spécificité d’action : elle ne catalyse qu’un type de réaction.\n- Les enzymes sont des protéines, dénaturées par une forte chaleur. Elles ne fournissent pas d’énergie : elles accélèrent les réactions. Plus il y a d’enzymes, plus la réaction est rapide.\n- Exercice 2 : 1 vrai ; 2 vrai ; 3 faux ; 4 vrai ; 5 vrai ; 6 faux (le pH agit sur l’activité enzymatique).\n- Nuance au document : sa conclusion générale dit que les enzymes « catalysent uniquement des réactions d’hydrolyse ». C’est vrai des enzymes digestives ; d’autres enzymes de l’organisme catalysent bien d’autres réactions (synthèses, oxydations, comme dans la photosynthèse).",
      "keyRule": "E + S → ES → E + produits. Spécificité de substrat et d’action. L’enzyme est retrouvée intacte et peut resservir.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la spécificité",
        "statement": "Pourquoi l’amylase n’agit-elle pas sur les protéines ?",
        "methodSteps": [
          "Le site actif de l’amylase a une forme qui correspond à l’amidon.",
          "Une protéine ne peut pas s’y fixer : aucun complexe enzyme-substrat ne se forme."
        ],
        "conclusion": "Chaque enzyme est spécifique de son substrat."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Complexe ES",
          "stepTheme": "Mécanisme",
          "stepTitle": "Le complexe enzyme-substrat",
          "paragraphText": "Le **substrat** se fixe sur le **site actif** de l’enzyme : il se forme un **complexe enzyme-substrat** (ES).",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p03_q1",
            "type": "mcq",
            "prompt": "Par quoi commence l’action d’une enzyme sur son substrat ?",
            "options": [
              "Par la fixation du substrat sur le site actif de l’enzyme (complexe enzyme-substrat)",
              "Par la destruction de l’enzyme",
              "Par la production d’énergie",
              "Par la fabrication du substrat"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 2 : affirmation 5 vraie."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le mécanisme de l’action d’une enzyme",
            "caption": "L’enzyme (E) fixe le substrat (S) sur son site actif : complexe ES. Le substrat est coupé en produits P1 et P2 ; l’enzyme est libérée intacte et peut recommencer.",
            "svgContent": "<svg viewBox=\"0 0 560 120\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Mécanisme enzymatique : l’enzyme fixe le substrat sur son site actif, forme le complexe enzyme-substrat, puis libère les produits et se retrouve intacte\"><path d=\"M30,60 Q30,30 70,30 Q110,30 110,60 L90,60 L90,48 L70,48 L70,60 Z\" fill=\"#F59E0B\" fill-opacity=\"0.4\" stroke=\"#F59E0B\" stroke-width=\"1.8\"/><path d=\"M30,60 Q30,90 70,90 Q110,90 110,60 Z\" fill=\"#F59E0B\" fill-opacity=\"0.4\" stroke=\"#F59E0B\" stroke-width=\"1.8\"/><text x=\"70\" y=\"110\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">E (enzyme)</text><text x=\"80\" y=\"22\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#8B5CF6\">site actif</text><rect x=\"140\" y=\"44\" width=\"36\" height=\"16\" rx=\"3\" fill=\"#EF4444\" fill-opacity=\"0.6\" stroke=\"#EF4444\" stroke-width=\"1.5\"/><text x=\"158\" y=\"110\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">S (substrat)</text><line x1=\"190\" y1=\"60\" x2=\"216.0\" y2=\"60.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"225,60 216.0,55.0 216.0,65.0\" fill=\"#94A3B8\"/><path d=\"M240,60 Q240,30 280,30 Q320,30 320,60 Q320,90 280,90 Q240,90 240,60 Z\" fill=\"#F59E0B\" fill-opacity=\"0.4\" stroke=\"#F59E0B\" stroke-width=\"1.8\"/><rect x=\"280\" y=\"44\" width=\"36\" height=\"16\" rx=\"3\" fill=\"#EF4444\" fill-opacity=\"0.6\" stroke=\"#EF4444\" stroke-width=\"1.5\"/><text x=\"280\" y=\"110\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">ES (complexe)</text><line x1=\"332\" y1=\"60\" x2=\"358.0\" y2=\"60.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"367,60 358.0,55.0 358.0,65.0\" fill=\"#94A3B8\"/><path d=\"M380,60 Q380,30 420,30 Q460,30 460,60 L440,60 L440,48 L420,48 L420,60 Z\" fill=\"#F59E0B\" fill-opacity=\"0.4\" stroke=\"#F59E0B\" stroke-width=\"1.8\"/><path d=\"M380,60 Q380,90 420,90 Q460,90 460,60 Z\" fill=\"#F59E0B\" fill-opacity=\"0.4\" stroke=\"#F59E0B\" stroke-width=\"1.8\"/><rect x=\"478\" y=\"36\" width=\"18\" height=\"16\" rx=\"3\" fill=\"#EF4444\" fill-opacity=\"0.6\" stroke=\"#EF4444\" stroke-width=\"1.5\"/><rect x=\"508\" y=\"66\" width=\"18\" height=\"16\" rx=\"3\" fill=\"#EF4444\" fill-opacity=\"0.6\" stroke=\"#EF4444\" stroke-width=\"1.5\"/><text x=\"420\" y=\"110\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">E (intacte)</text><text x=\"505\" y=\"110\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">P1 + P2</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Produits",
          "stepTheme": "Mécanisme",
          "stepTitle": "Couper puis libérer",
          "paragraphText": "L’enzyme **coupe** le substrat en **produits** (P1, P2), puis elle est **libérée intacte** et peut **recommencer**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p03_q2",
            "type": "mcq",
            "prompt": "Que devient l’enzyme après avoir coupé son substrat en produits ?",
            "options": [
              "Elle est libérée intacte et peut agir de nouveau",
              "Elle est détruite",
              "Elle devient un produit",
              "Elle se transforme en substrat"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une petite quantité d’enzyme suffit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Spécificité",
          "stepTheme": "Propriété",
          "stepTitle": "Une enzyme, un substrat",
          "paragraphText": "Chaque enzyme n’agit que sur **un substrat** : c’est la **spécificité de substrat**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p03_q3",
            "type": "mcq",
            "prompt": "Pourquoi l’amylase salivaire n’agit-elle pas sur les protéines de la viande ?",
            "options": [
              "Parce qu’une enzyme est spécifique de son substrat : son site actif correspond à l’amidon",
              "Parce que la viande est trop chaude",
              "Parce que l’amylase est un acide",
              "Parce que les protéines sont des sucres"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est comme une clé et sa serrure."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Énergie",
          "stepTheme": "Exercice 2",
          "stepTitle": "Les enzymes ne fournissent pas d’énergie",
          "paragraphText": "« Les enzymes **fournissent l’énergie** des réactions » : **faux**. Elles **accélèrent** les réactions, sans fournir d’énergie.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p03_q4",
            "type": "mcq",
            "prompt": "« Les enzymes fournissent l’énergie nécessaire aux réactions chimiques de l’organisme. » Vrai ou faux ?",
            "options": [
              "Faux : elles accélèrent les réactions sans fournir d’énergie",
              "Vrai",
              "Vrai, grâce à l’ATP qu’elles contiennent",
              "Faux : elles ralentissent les réactions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont des catalyseurs."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Quantité",
          "stepTheme": "Exercice 2",
          "stepTitle": "Plus d’enzyme, plus vite",
          "paragraphText": "La **vitesse** de la réaction **dépend** de la **quantité d’enzymes** : plus il y en a, plus la réaction est rapide.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p03_q5",
            "type": "mcq",
            "prompt": "Comment évolue la vitesse d’une digestion enzymatique quand on augmente la quantité d’enzyme (avec assez de substrat) ?",
            "options": [
              "Elle augmente",
              "Elle diminue",
              "Elle ne change pas",
              "Elle devient nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Plus de sites actifs disponibles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Hydrolyses",
          "stepTheme": "Nuance",
          "stepTitle": "Seulement des hydrolyses ?",
          "paragraphText": "Les **enzymes digestives** catalysent des **hydrolyses**. Mais d’**autres** enzymes de l’organisme catalysent d’autres réactions (synthèses, oxydations).",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p03_q6",
            "type": "mcq",
            "prompt": "Toutes les enzymes de l’organisme catalysent-elles des hydrolyses ?",
            "options": [
              "Non : les enzymes digestives catalysent des hydrolyses, d’autres catalysent des synthèses ou des oxydations",
              "Oui, toutes",
              "Non, aucune ne catalyse d’hydrolyse",
              "Oui, sauf l’amylase"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exemple : la carboxylase de la photosynthèse fixe le CO₂."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p03_q1",
          "type": "mcq",
          "prompt": "Par quoi commence l’action d’une enzyme sur son substrat ?",
          "options": [
            "Par la fixation du substrat sur le site actif de l’enzyme (complexe enzyme-substrat)",
            "Par la destruction de l’enzyme",
            "Par la production d’énergie",
            "Par la fabrication du substrat"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 2 : affirmation 5 vraie."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p03_q2",
          "type": "mcq",
          "prompt": "Que devient l’enzyme après avoir coupé son substrat en produits ?",
          "options": [
            "Elle est libérée intacte et peut agir de nouveau",
            "Elle est détruite",
            "Elle devient un produit",
            "Elle se transforme en substrat"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une petite quantité d’enzyme suffit."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p03_q3",
          "type": "mcq",
          "prompt": "Pourquoi l’amylase salivaire n’agit-elle pas sur les protéines de la viande ?",
          "options": [
            "Parce qu’une enzyme est spécifique de son substrat : son site actif correspond à l’amidon",
            "Parce que la viande est trop chaude",
            "Parce que l’amylase est un acide",
            "Parce que les protéines sont des sucres"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est comme une clé et sa serrure."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p03_q4",
          "type": "mcq",
          "prompt": "« Les enzymes fournissent l’énergie nécessaire aux réactions chimiques de l’organisme. » Vrai ou faux ?",
          "options": [
            "Faux : elles accélèrent les réactions sans fournir d’énergie",
            "Vrai",
            "Vrai, grâce à l’ATP qu’elles contiennent",
            "Faux : elles ralentissent les réactions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont des catalyseurs."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p03_q5",
          "type": "mcq",
          "prompt": "Comment évolue la vitesse d’une digestion enzymatique quand on augmente la quantité d’enzyme (avec assez de substrat) ?",
          "options": [
            "Elle augmente",
            "Elle diminue",
            "Elle ne change pas",
            "Elle devient nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Plus de sites actifs disponibles."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p03_q6",
          "type": "mcq",
          "prompt": "Toutes les enzymes de l’organisme catalysent-elles des hydrolyses ?",
          "options": [
            "Non : les enzymes digestives catalysent des hydrolyses, d’autres catalysent des synthèses ou des oxydations",
            "Oui, toutes",
            "Non, aucune ne catalyse d’hydrolyse",
            "Oui, sauf l’amylase"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exemple : la carboxylase de la photosynthèse fixe le CO₂."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l11_digestion_aliments_p04",
      "order": 4,
      "title": "L’influence du pH",
      "summary": "Chaque enzyme a son pH optimal.",
      "conceptExplanation": "- 1re série : empois d’amidon + amylase salivaire à pH neutre (A), à pH 10,3 avec de la soude (B), à pH 2,8 avec de l’acide citrique (C). Premier précipité à la liqueur de Fehling : A au bout de 1 minute ; B jamais ; C au bout de 3 minutes.\n- L’amylase salivaire agit le mieux à pH neutre (son pH optimal, celui de la salive, environ 7). Son activité est ralentie en milieu acide et nulle en milieu très basique.\n- Exercice d’approfondissement : la pepsine digère l’ovalbumine (le trouble disparaît) seulement en milieu acide ; l’amylase salivaire, elle, est bloquée par l’acide chlorhydrique concentré (l’amidon reste, eau iodée bleu violacé).\n- Chaque enzyme a son pH optimal, qui correspond au milieu où elle agit : pepsine, milieu acide de l’estomac ; amylase salivaire, milieu neutre de la bouche.\n- Corrections du document : ses résultats écrivent deux fois « pH neutre » ; le tube sans précipité est celui à pH basique (10,3). Il explique le pH optimal par le fait que l’amylase « a elle-même un pH neutre » : une enzyme n’a pas de pH ; son pH optimal correspond au milieu où elle travaille. Enfin, le corrigé de l’approfondissement dit que l’amylase « agit plutôt en milieu alcalin » : sa propre expérience montre l’inverse (aucune activité à pH 10,3) ; son optimum est proche de la neutralité.",
      "keyRule": "Chaque enzyme a un pH optimal : amylase salivaire ≈ 7 (neutre), pepsine en milieu acide (estomac).",
      "formulas": [],
      "workedExample": {
        "title": "Comparer amylase et pepsine",
        "statement": "La pepsine agit en milieu acide, l’amylase salivaire en milieu neutre. Pourquoi ?",
        "methodSteps": [
          "La pepsine travaille dans l’estomac, très acide.",
          "L’amylase salivaire travaille dans la bouche, au pH proche de la neutralité."
        ],
        "conclusion": "Le pH optimal de chaque enzyme correspond à celui de son milieu d’action."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "pH neutre",
          "stepTheme": "1re série",
          "stepTitle": "L’amylase préfère le neutre",
          "paragraphText": "À **pH neutre**, le précipité apparaît en **1 minute** ; à pH acide (2,8) en **3 minutes** ; à pH basique (10,3), **jamais**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p04_q1",
            "type": "mcq",
            "prompt": "De l’amidon et de l’amylase salivaire donnent un précipité rouge brique en 1 minute à pH neutre, en 3 minutes à pH 2,8 et jamais à pH 10,3. Quel est le pH optimal de l’amylase ?",
            "options": [
              "Un pH neutre (≈ 7)",
              "Un pH très acide",
              "Un pH très basique (10,3)",
              "N’importe quel pH"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le pH de la salive."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Influence du pH sur l’amylase salivaire",
            "caption": "Empois d’amidon + amylase ; premier précipité rouge brique à la liqueur de Fehling.",
            "tableData": {
              "headers": [
                "Tube",
                "pH du milieu",
                "Résultat"
              ],
              "rows": [
                [
                  "A",
                  "Neutre (≈ 7)",
                  "Précipité au bout de 1 min"
                ],
                [
                  "B",
                  "Basique (10,3, soude)",
                  "Pas de précipité"
                ],
                [
                  "C",
                  "Acide (2,8, acide citrique)",
                  "Précipité au bout de 3 min"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepBadge": "Basique",
          "stepTheme": "Erreur du document",
          "stepTitle": "Le tube sans précipité",
          "paragraphText": "Les résultats du document écrivent deux fois « **pH neutre** ». Le tube **sans précipité** est celui à pH **basique** (10,3, soude).",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p04_q2",
            "type": "mcq",
            "prompt": "Dans l’expérience sur le pH, quel tube ne donne jamais de précipité rouge brique ?",
            "options": [
              "Le tube à pH basique (10,3)",
              "Le tube à pH neutre",
              "Le tube à pH acide (2,8)",
              "Tous les tubes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’amylase est inactive en milieu très basique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Pepsine",
          "stepTheme": "Approfondissement",
          "stepTitle": "La pepsine aime l’acide",
          "paragraphText": "La **pepsine** rend limpide une suspension d’**ovalbumine** seulement en milieu **acide** : elle agit dans l’**estomac**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p04_q3",
            "type": "mcq",
            "prompt": "Une suspension trouble d’ovalbumine (blanc d’œuf cuit) devient limpide avec de la pepsine en milieu acide, mais reste trouble sans acide. Que montre ce résultat ?",
            "options": [
              "La pepsine n’agit qu’en milieu acide",
              "La pepsine n’agit qu’en milieu neutre",
              "L’acide digère seul l’ovalbumine",
              "La pepsine digère l’amidon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’estomac est très acide."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Amylase et acide",
          "stepTheme": "Approfondissement",
          "stepTitle": "L’amylase bloquée par l’acide",
          "paragraphText": "Avec de l’**acide chlorhydrique concentré**, l’amylase n’agit plus : l’**amidon reste** (eau iodée **bleu violacé**, pas de précipité).",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p04_q4",
            "type": "mcq",
            "prompt": "De l’empois d’amidon et de la salive, additionnés d’acide chlorhydrique concentré, restent bleu violacé à l’eau iodée et ne donnent pas de précipité avec la liqueur de Fehling. Pourquoi ?",
            "options": [
              "L’acide fort a bloqué l’amylase salivaire",
              "L’amylase a tout digéré",
              "L’acide a fabriqué de l’amidon",
              "La salive a détruit l’acide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans l’estomac, l’amylase salivaire cesse d’agir."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Pas alcalin",
          "stepTheme": "Erreur du document",
          "stepTitle": "L’optimum de l’amylase",
          "paragraphText": "Le corrigé dit que l’amylase « agit **plutôt en milieu alcalin** ». Sa propre expérience montre **aucune** activité à pH **10,3** : son optimum est proche de la **neutralité**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p04_q5",
            "type": "mcq",
            "prompt": "L’amylase salivaire agit-elle mieux en milieu fortement alcalin (pH 10,3) ?",
            "options": [
              "Non : elle y est inactive ; son optimum est proche de pH 7",
              "Oui, c’est son optimum",
              "Oui, et elle est inactive à pH 7",
              "Non, elle n’agit qu’à pH 1"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une enzyme n’a pas « un pH » : elle a un pH optimal."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "pH optimal",
          "stepTheme": "Conclusion",
          "stepTitle": "Chaque enzyme son pH",
          "paragraphText": "Chaque enzyme a un **pH optimal** qui correspond à son **milieu d’action** : **acide** pour la pepsine (estomac), **neutre** pour l’amylase salivaire (bouche).",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p04_q6",
            "type": "mcq",
            "prompt": "Pourquoi la pepsine et l’amylase salivaire n’ont-elles pas le même pH optimal ?",
            "options": [
              "Parce que chacune est adaptée au pH du milieu où elle agit (estomac acide, bouche neutre)",
              "Parce que ce sont des sucres",
              "Parce qu’elles n’agissent pas à la même température",
              "Parce que le pH n’a aucun effet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 2 : « le pH n’a aucun effet » est faux."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p04_q1",
          "type": "mcq",
          "prompt": "De l’amidon et de l’amylase salivaire donnent un précipité rouge brique en 1 minute à pH neutre, en 3 minutes à pH 2,8 et jamais à pH 10,3. Quel est le pH optimal de l’amylase ?",
          "options": [
            "Un pH neutre (≈ 7)",
            "Un pH très acide",
            "Un pH très basique (10,3)",
            "N’importe quel pH"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le pH de la salive."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p04_q2",
          "type": "mcq",
          "prompt": "Dans l’expérience sur le pH, quel tube ne donne jamais de précipité rouge brique ?",
          "options": [
            "Le tube à pH basique (10,3)",
            "Le tube à pH neutre",
            "Le tube à pH acide (2,8)",
            "Tous les tubes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’amylase est inactive en milieu très basique."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p04_q3",
          "type": "mcq",
          "prompt": "Une suspension trouble d’ovalbumine (blanc d’œuf cuit) devient limpide avec de la pepsine en milieu acide, mais reste trouble sans acide. Que montre ce résultat ?",
          "options": [
            "La pepsine n’agit qu’en milieu acide",
            "La pepsine n’agit qu’en milieu neutre",
            "L’acide digère seul l’ovalbumine",
            "La pepsine digère l’amidon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’estomac est très acide."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p04_q4",
          "type": "mcq",
          "prompt": "De l’empois d’amidon et de la salive, additionnés d’acide chlorhydrique concentré, restent bleu violacé à l’eau iodée et ne donnent pas de précipité avec la liqueur de Fehling. Pourquoi ?",
          "options": [
            "L’acide fort a bloqué l’amylase salivaire",
            "L’amylase a tout digéré",
            "L’acide a fabriqué de l’amidon",
            "La salive a détruit l’acide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans l’estomac, l’amylase salivaire cesse d’agir."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p04_q5",
          "type": "mcq",
          "prompt": "L’amylase salivaire agit-elle mieux en milieu fortement alcalin (pH 10,3) ?",
          "options": [
            "Non : elle y est inactive ; son optimum est proche de pH 7",
            "Oui, c’est son optimum",
            "Oui, et elle est inactive à pH 7",
            "Non, elle n’agit qu’à pH 1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une enzyme n’a pas « un pH » : elle a un pH optimal."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p04_q6",
          "type": "mcq",
          "prompt": "Pourquoi la pepsine et l’amylase salivaire n’ont-elles pas le même pH optimal ?",
          "options": [
            "Parce que chacune est adaptée au pH du milieu où elle agit (estomac acide, bouche neutre)",
            "Parce que ce sont des sucres",
            "Parce qu’elles n’agissent pas à la même température",
            "Parce que le pH n’a aucun effet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 2 : « le pH n’a aucun effet » est faux."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l11_digestion_aliments_p05",
      "order": 5,
      "title": "L’influence de la température",
      "summary": "Optimum, froid réversible, chaleur destructrice.",
      "conceptExplanation": "- 2e série : amidon + amylase à 20 °C, 37 °C et 60 °C. Premier précipité : 15 minutes à 20 °C, 6 minutes à 37 °C, jamais à 60 °C.\n- L’amylase salivaire est la plus active vers 37 °C, la température du corps. Le froid la ralentit ; une forte chaleur la détruit (dénaturation).\n- Situation d’évaluation (cinq tubes, amidon cuit + amylase, une heure) : à 37 °C, plus d’amidon (eau iodée −) et des sucres réducteurs (Fehling +) ; à 100 °C et à 0 °C, l’amidon reste (eau iodée +) et il n’y a pas de sucre. Les tubes 1 et 4 ne contiennent plus d’amidon.\n- L’amylase congelée puis remise à 37 °C agit de nouveau : le froid ne fait que l’inactiver (effet réversible). L’amylase bouillie puis remise à 37 °C n’agit plus : la chaleur l’a détruite (effet irréversible).\n- Exercice de consolidation : pour une autre enzyme, la quantité de substrat transformée passe de 200 mg à 20 °C à un maximum (environ 550 mg) vers 45 °C, puis s’annule à 60 °C. L’optimum dépend de l’enzyme.",
      "keyRule": "Optimum de l’amylase salivaire ≈ 37 °C. Froid : inactivation réversible. Forte chaleur : dénaturation irréversible.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer amylase congelée et bouillie",
        "statement": "Remises à 37 °C, l’amylase congelée digère l’amidon, l’amylase bouillie non. Pourquoi ?",
        "methodSteps": [
          "Le froid ralentit l’enzyme sans l’abîmer : réchauffée, elle fonctionne de nouveau.",
          "L’ébullition dénature l’enzyme, une protéine : elle ne peut plus fonctionner."
        ],
        "conclusion": "Le froid inactive l’enzyme de façon réversible ; la chaleur la détruit de façon irréversible."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "37 °C",
          "stepTheme": "2e série",
          "stepTitle": "La température optimale",
          "paragraphText": "Précipité en **15 min** à 20 °C, en **6 min** à **37 °C**, **jamais** à 60 °C : l’amylase est la plus active vers **37 °C**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p05_q1",
            "type": "mcq",
            "prompt": "De l’amidon et de l’amylase donnent un précipité rouge brique en 15 minutes à 20 °C, en 6 minutes à 37 °C et jamais à 60 °C. À quelle température l’amylase est-elle la plus active ?",
            "options": [
              "Vers 37 °C",
              "Vers 20 °C",
              "Vers 60 °C",
              "Vers 0 °C"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la température du corps humain."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Plus d’amidon",
          "stepTheme": "Évaluation",
          "stepTitle": "Quels tubes n’ont plus d’amidon ?",
          "paragraphText": "Les tubes **1** (37 °C) et **4** (amylase congelée puis 37 °C) : eau iodée **négative**, Fehling **positive** : l’amidon a été **digéré**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p05_q2",
            "type": "mcq",
            "prompt": "Dans quels tubes l’amidon a-t-il disparu : 1 (37 °C), 2 (100 °C), 3 (0 °C), 4 (amylase congelée puis 37 °C), 5 (amylase bouillie puis 37 °C) ?",
            "options": [
              "Les tubes 1 et 4",
              "Les tubes 2 et 3",
              "Le tube 5 seulement",
              "Tous les tubes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Eau iodée − : plus d’amidon."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Situation d’évaluation : cinq tubes d’amidon cuit et d’amylase",
            "caption": "Tests une heure plus tard (+ : présence ; − : absence).",
            "tableData": {
              "headers": [
                "Tube",
                "Conditions",
                "Eau iodée (amidon)",
                "Fehling (sucre réducteur)"
              ],
              "rows": [
                [
                  "1",
                  "37 °C",
                  "−",
                  "+"
                ],
                [
                  "2",
                  "100 °C",
                  "+",
                  "−"
                ],
                [
                  "3",
                  "0 °C",
                  "+",
                  "−"
                ],
                [
                  "4",
                  "Amylase congelée puis 37 °C",
                  "−",
                  "+"
                ],
                [
                  "5",
                  "Amylase bouillie puis 37 °C",
                  "+",
                  "−"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Froid",
          "stepTheme": "Interprétation",
          "stepTitle": "Le froid endort l’enzyme",
          "paragraphText": "L’amylase **congelée** puis remise à **37 °C** agit de nouveau : le **froid** ne fait que l’**inactiver** (effet **réversible**).",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p05_q3",
            "type": "mcq",
            "prompt": "De l’amylase congelée, remise à 37 °C, digère de nouveau l’amidon. Qu’en déduire ?",
            "options": [
              "Le froid inactive l’enzyme sans la détruire",
              "Le froid détruit l’enzyme",
              "Le froid fabrique de l’amidon",
              "L’enzyme n’agit qu’à 0 °C"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est pourquoi on conserve les aliments au froid."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Chaleur",
          "stepTheme": "Interprétation",
          "stepTitle": "La chaleur détruit l’enzyme",
          "paragraphText": "L’amylase **bouillie** puis remise à 37 °C n’agit **plus** : la chaleur l’a **dénaturée** (effet **irréversible**).",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p05_q4",
            "type": "mcq",
            "prompt": "De l’amylase bouillie puis refroidie à 37 °C ne digère plus l’amidon. Pourquoi ?",
            "options": [
              "La chaleur a dénaturé l’enzyme de façon irréversible",
              "L’amidon était trop froid",
              "Le froid a détruit l’amylase",
              "L’enzyme a besoin de 100 °C"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les enzymes sont des protéines."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Courbe",
          "stepTheme": "Consolidation",
          "stepTitle": "Lire la courbe d’activité",
          "paragraphText": "Substrat transformé : **200 mg** à 20 °C, **maximum** (≈ 550 mg) vers **45 °C**, puis **0** à **60 °C**.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p05_q5",
            "type": "mcq",
            "prompt": "Pour une enzyme, la quantité de substrat transformée est de 200 mg à 20 °C, maximale vers 45 °C et nulle à 60 °C. Pourquoi est-elle nulle à 60 °C ?",
            "options": [
              "Parce que l’enzyme est totalement dénaturée par la chaleur",
              "Parce que l’enzyme est inactivée par le froid",
              "Parce qu’il n’y a plus de substrat",
              "Parce que le pH est trop acide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’optimum varie d’une enzyme à l’autre."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Température et activité enzymatique",
            "caption": "Quantité de substrat transformée : 200 mg à 20 °C, maximum (≈ 550 mg) vers 45 °C, nulle à 60 °C (exercice de consolidation).",
            "svgContent": "<svg viewBox=\"0 0 560 230\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Quantité de substrat transformée selon la température : maximum vers 45 °C, nulle à 60 °C\"><line x1=\"60\" y1=\"190\" x2=\"530\" y2=\"190\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"30\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polyline points=\"145.0,138.0 230.0,122.4 315.0,80.8 357.5,47.0 400.0,80.8 442.5,135.4 485.0,190.0\" fill=\"none\" stroke=\"#8B5CF6\" stroke-width=\"2.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"145\" y=\"206\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">20</text><text x=\"230\" y=\"206\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">30</text><text x=\"315\" y=\"206\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">40</text><text x=\"400\" y=\"206\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">50</text><text x=\"485\" y=\"206\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">60</text><text x=\"52\" y=\"142\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">200</text><text x=\"52\" y=\"90\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">400</text><text x=\"52\" y=\"38\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">600</text><text x=\"357.5\" y=\"37\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#8B5CF6\">optimum ≈ 45 °C</text><text x=\"300\" y=\"224\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">température (°C)</text><text x=\"64\" y=\"22\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">substrat transformé (mg)</text></svg>"
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Conditions",
          "stepTheme": "Conclusion",
          "stepTitle": "Les conditions du vivant",
          "paragraphText": "Les enzymes agissent dans les **conditions du vivant** : présence d’**eau**, **température** et **pH** doux, sur un **substrat** précis.",
          "exercise": {
            "id": "premiere_d_svt_l11_digestion_aliments_p05_q6",
            "type": "mcq",
            "prompt": "Dans quelles conditions les enzymes digestives agissent-elles le mieux ?",
            "options": [
              "En présence d’eau, à une température et un pH proches de ceux de leur milieu dans l’organisme",
              "À sec et à très haute température",
              "Uniquement à 0 °C",
              "Dans n’importe quelles conditions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 2 : affirmations 1, 2, 4 et 5 vraies."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p05_q1",
          "type": "mcq",
          "prompt": "De l’amidon et de l’amylase donnent un précipité rouge brique en 15 minutes à 20 °C, en 6 minutes à 37 °C et jamais à 60 °C. À quelle température l’amylase est-elle la plus active ?",
          "options": [
            "Vers 37 °C",
            "Vers 20 °C",
            "Vers 60 °C",
            "Vers 0 °C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la température du corps humain."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p05_q2",
          "type": "mcq",
          "prompt": "Dans quels tubes l’amidon a-t-il disparu : 1 (37 °C), 2 (100 °C), 3 (0 °C), 4 (amylase congelée puis 37 °C), 5 (amylase bouillie puis 37 °C) ?",
          "options": [
            "Les tubes 1 et 4",
            "Les tubes 2 et 3",
            "Le tube 5 seulement",
            "Tous les tubes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Eau iodée − : plus d’amidon."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p05_q3",
          "type": "mcq",
          "prompt": "De l’amylase congelée, remise à 37 °C, digère de nouveau l’amidon. Qu’en déduire ?",
          "options": [
            "Le froid inactive l’enzyme sans la détruire",
            "Le froid détruit l’enzyme",
            "Le froid fabrique de l’amidon",
            "L’enzyme n’agit qu’à 0 °C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est pourquoi on conserve les aliments au froid."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p05_q4",
          "type": "mcq",
          "prompt": "De l’amylase bouillie puis refroidie à 37 °C ne digère plus l’amidon. Pourquoi ?",
          "options": [
            "La chaleur a dénaturé l’enzyme de façon irréversible",
            "L’amidon était trop froid",
            "Le froid a détruit l’amylase",
            "L’enzyme a besoin de 100 °C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les enzymes sont des protéines."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p05_q5",
          "type": "mcq",
          "prompt": "Pour une enzyme, la quantité de substrat transformée est de 200 mg à 20 °C, maximale vers 45 °C et nulle à 60 °C. Pourquoi est-elle nulle à 60 °C ?",
          "options": [
            "Parce que l’enzyme est totalement dénaturée par la chaleur",
            "Parce que l’enzyme est inactivée par le froid",
            "Parce qu’il n’y a plus de substrat",
            "Parce que le pH est trop acide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’optimum varie d’une enzyme à l’autre."
        },
        {
          "id": "premiere_d_svt_l11_digestion_aliments_p05_q6",
          "type": "mcq",
          "prompt": "Dans quelles conditions les enzymes digestives agissent-elles le mieux ?",
          "options": [
            "En présence d’eau, à une température et un pH proches de ceux de leur milieu dans l’organisme",
            "À sec et à très haute température",
            "Uniquement à 0 °C",
            "Dans n’importe quelles conditions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 2 : affirmations 1, 2, 4 et 5 vraies."
        }
      ]
    }
  ]
};
