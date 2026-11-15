import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère C_L1_La structure interne du globe terrestre.pdf (Mon école à la maison) ». Première C (la 1re D a sa propre leçon sur ce sujet).
// Fichier généré (scratchpad build_1re_c_svt.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_C_L01_STRUCTURE_INTERNE_GLOBE: CurriculumChapter = {
  "id": "premiere_c_svt_l01_structure_interne_globe",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "order": 1,
  "title": "Leçon 1 : La structure interne du globe terrestre",
  "summary": "Séismes et volcans, foyer et épicentre, magnitude et intensité, ondes P, S et L, hodographes, vitesse des ondes en profondeur, croûte, manteau, noyau et discontinuités.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT 1ère C_L1_La structure interne du globe terrestre.pdf (Mon école à la maison)",
  "points": [
    {
      "id": "premiere_c_svt_l01_structure_interne_globe_p01",
      "order": 1,
      "title": "Séismes, foyer et épicentre",
      "summary": "Conséquences des séismes et des volcans ; foyer, épicentre, magnitude et intensité.",
      "conceptExplanation": "Situation : lors d’une visite à la station de Lamto, des élèves découvrent les appareils qui enregistrent les vibrations de la Terre. Ces vibrations peuvent avoir des conséquences désastreuses.\n- Les séismes détruisent habitations et routes ; ils causent des pertes en vies humaines, animales et végétales et peuvent provoquer des raz-de-marée.\n- Une éruption volcanique rejette des produits solides (cendres, bombes volcaniques), liquides (coulées de lave) et gazeux (fumerolles).\n- Un séisme naît d’un relâchement brutal de tensions dans les roches, en un point profond appelé foyer ou hypocentre. Les ondes sismiques en partent dans toutes les directions.\n- L’épicentre est le point de la surface situé à la verticale du foyer ; c’est là que les secousses sont en général les plus fortes.\n- Une faille est une rupture des roches avec décalage des couches ; les forces d’extension écartent deux masses rocheuses.\n- La magnitude mesure l’énergie libérée par le séisme (échelle de Richter) ; elle se calcule à partir de l’amplitude des ondes enregistrées. L’intensité décrit les effets observés en un lieu (dégâts, ressenti) ; elle diminue en s’éloignant de l’épicentre.\n- Corrections du document : il écrit que « l’intensité ou l’énergie libérée par un séisme est la magnitude » ; ce sont deux notions différentes. Il écrit aussi « centre volcanique » et « coulée de larves » pour cendres volcaniques et coulée de lave.",
      "keyRule": "Foyer (en profondeur) → ondes ; épicentre (en surface, au-dessus). Magnitude = énergie du séisme ; intensité = effets en un lieu.",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer magnitude et intensité",
        "statement": "Un séisme de magnitude 6 est ressenti fortement à 10 km de l’épicentre et à peine à 300 km. Expliquez.",
        "methodSteps": [
          "La magnitude (6) est la même partout : c’est l’énergie libérée au foyer.",
          "L’intensité, elle, dépend du lieu : les effets diminuent avec la distance à l’épicentre."
        ],
        "conclusion": "Un seul séisme a une seule magnitude, mais des intensités différentes selon les lieux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Conséquences",
          "stepTheme": "Séismes",
          "stepTitle": "Les effets d’un séisme",
          "paragraphText": "Les séismes détruisent **habitations** et **routes**, font des **victimes** et peuvent provoquer des **raz-de-marée**.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p01_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces conséquences peut être causée par un séisme ?",
            "options": [
              "La destruction d’habitations et de routes",
              "La formation d’un arc-en-ciel",
              "Une baisse de la température de l’air",
              "La fertilisation des sols"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les secousses fracturent le sol et les bâtiments."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Foyer et épicentre d’un séisme",
            "caption": "Les ondes partent du foyer (hypocentre), en profondeur ; l’épicentre est le point de la surface situé juste au-dessus.",
            "svgContent": "<svg viewBox=\"0 0 560 230\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Coupe du sol : foyer en profondeur, épicentre à la verticale en surface, ondes en cercles\"><rect x=\"40\" y=\"60\" width=\"480\" height=\"160\" fill=\"#F59E0B\" fill-opacity=\"0.10\" stroke=\"none\"/><line x1=\"40\" y1=\"60\" x2=\"520\" y2=\"60\" stroke=\"#10B981\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"280\" cy=\"170\" r=\"30\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\"/><circle cx=\"280\" cy=\"170\" r=\"60\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\"/><circle cx=\"280\" cy=\"170\" r=\"90\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\"/><circle cx=\"280\" cy=\"170\" r=\"120\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\"/><line x1=\"280\" y1=\"60\" x2=\"280\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/><circle cx=\"280\" cy=\"170\" r=\"7\" fill=\"#EF4444\"/><circle cx=\"280\" cy=\"60\" r=\"6\" fill=\"#8B5CF6\"/><line x1=\"172\" y1=\"206\" x2=\"259.4\" y2=\"178.7\" stroke=\"#EF4444\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"268,176 257.9,173.9 260.9,183.5\" fill=\"#EF4444\"/><text x=\"46\" y=\"212\" font-size=\"12\" text-anchor=\"start\" font-weight=\"800\" fill=\"#EF4444\">foyer (hypocentre)</text><text x=\"280\" y=\"44\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#8B5CF6\">épicentre</text><text x=\"80\" y=\"50\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#10B981\">surface</text><text x=\"440\" y=\"120\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#3B82F6\">ondes sismiques</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Volcan",
          "stepTheme": "Produits",
          "stepTitle": "Les produits d’une éruption",
          "paragraphText": "Un volcan rejette des produits **solides** (cendres, bombes volcaniques), **liquides** (lave) et **gazeux** (fumerolles).",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p01_q2",
            "type": "mcq",
            "prompt": "Lors d’une éruption volcanique, à quelle catégorie de produits appartient la coulée de lave ?",
            "options": [
              "Aux produits liquides",
              "Aux produits solides",
              "Aux produits gazeux",
              "À aucun produit volcanique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Cendres et bombes : solides ; fumerolles : gaz."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Foyer",
          "stepTheme": "Hypocentre",
          "stepTitle": "Le foyer d’un séisme",
          "paragraphText": "Le **foyer** (ou **hypocentre**) est le point **en profondeur** où les roches cèdent brutalement et d’où partent les **ondes sismiques**.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p01_q3",
            "type": "mcq",
            "prompt": "Comment appelle-t-on le point en profondeur d’où partent les ondes sismiques ?",
            "options": [
              "Le foyer ou hypocentre",
              "L’épicentre",
              "La faille",
              "Le sismogramme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Hypo- : en dessous."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Épicentre",
          "stepTheme": "En surface",
          "stepTitle": "L’épicentre",
          "paragraphText": "L’**épicentre** est le point de la **surface** situé **à la verticale du foyer** ; les secousses y sont en général les plus fortes.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p01_q4",
            "type": "mcq",
            "prompt": "Où se trouve l’épicentre d’un séisme ?",
            "options": [
              "À la surface, à la verticale du foyer",
              "Au centre de la Terre",
              "Dans le noyau externe",
              "Dans la station sismologique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Épi- : au-dessus."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Faille",
          "stepTheme": "Vocabulaire",
          "stepTitle": "La faille",
          "paragraphText": "Une **faille** est une **rupture des roches** avec **décalage** des couches. Les **forces d’extension** écartent deux masses rocheuses.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p01_q5",
            "type": "mcq",
            "prompt": "Comment appelle-t-on une rupture des roches accompagnée d’un décalage des couches ?",
            "options": [
              "Une faille",
              "Un sismogramme",
              "Une onde sismique",
              "Une discontinuité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : 1-C ; 2-A ; 3-D ; 4-B."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Magnitude",
          "stepTheme": "Erreur du document",
          "stepTitle": "Magnitude ou intensité ?",
          "paragraphText": "Le document confond les deux. La **magnitude** mesure l’**énergie** libérée au foyer (échelle de Richter) ; l’**intensité** décrit les **effets** observés en un lieu.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p01_q6",
            "type": "mcq",
            "prompt": "Un même séisme fait de gros dégâts près de l’épicentre et presque aucun à 300 km. Qu’est-ce qui change d’un lieu à l’autre ?",
            "options": [
              "L’intensité : la magnitude, elle, est la même pour tout le séisme",
              "La magnitude : elle diminue avec la distance",
              "Le foyer, qui change de place",
              "Rien : intensité et magnitude sont la même chose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une seule magnitude par séisme, plusieurs intensités."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p01_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces conséquences peut être causée par un séisme ?",
          "options": [
            "La destruction d’habitations et de routes",
            "La formation d’un arc-en-ciel",
            "Une baisse de la température de l’air",
            "La fertilisation des sols"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les secousses fracturent le sol et les bâtiments."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p01_q2",
          "type": "mcq",
          "prompt": "Lors d’une éruption volcanique, à quelle catégorie de produits appartient la coulée de lave ?",
          "options": [
            "Aux produits liquides",
            "Aux produits solides",
            "Aux produits gazeux",
            "À aucun produit volcanique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cendres et bombes : solides ; fumerolles : gaz."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p01_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le point en profondeur d’où partent les ondes sismiques ?",
          "options": [
            "Le foyer ou hypocentre",
            "L’épicentre",
            "La faille",
            "Le sismogramme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Hypo- : en dessous."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p01_q4",
          "type": "mcq",
          "prompt": "Où se trouve l’épicentre d’un séisme ?",
          "options": [
            "À la surface, à la verticale du foyer",
            "Au centre de la Terre",
            "Dans le noyau externe",
            "Dans la station sismologique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Épi- : au-dessus."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p01_q5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on une rupture des roches accompagnée d’un décalage des couches ?",
          "options": [
            "Une faille",
            "Un sismogramme",
            "Une onde sismique",
            "Une discontinuité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : 1-C ; 2-A ; 3-D ; 4-B."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p01_q6",
          "type": "mcq",
          "prompt": "Un même séisme fait de gros dégâts près de l’épicentre et presque aucun à 300 km. Qu’est-ce qui change d’un lieu à l’autre ?",
          "options": [
            "L’intensité : la magnitude, elle, est la même pour tout le séisme",
            "La magnitude : elle diminue avec la distance",
            "Le foyer, qui change de place",
            "Rien : intensité et magnitude sont la même chose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une seule magnitude par séisme, plusieurs intensités."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l01_structure_interne_globe_p02",
      "order": 2,
      "title": "Les ondes P, S et L",
      "summary": "Sismographe, sismogramme et caractéristiques des trois ondes.",
      "conceptExplanation": "- Le sismographe enregistre les vibrations du sol : une masse inerte suspendue reste immobile pendant que le support bouge ; un stylet inscrit le mouvement sur un cylindre. Il existe des sismographes verticaux et horizontaux. L’enregistrement est le sismogramme.\n- Le sismogramme montre trois types d’ondes :\n- les ondes P (primaires), les plus rapides, arrivent en premier ; amplitude faible ; ce sont des ondes de compression : les particules bougent dans le sens de la propagation ; elles traversent les solides et les liquides ;\n- les ondes S (secondaires), moins rapides, arrivent ensuite ; amplitude moyenne ; ce sont des ondes de cisaillement : les particules bougent perpendiculairement à la propagation ; elles ne traversent que les solides ;\n- les ondes L (longues), les plus lentes, arrivent en dernier ; amplitude la plus grande ; ce sont des ondes de surface, les plus destructrices.",
      "keyRule": "P : rapides, compression, solides et liquides. S : cisaillement, solides seulement. L : lentes, en surface, les plus destructrices.",
      "formulas": [],
      "workedExample": {
        "title": "Lire un sismogramme",
        "statement": "Un sismogramme montre une première petite vibration, puis une moyenne, puis une très grande. Nommez-les.",
        "methodSteps": [
          "Les premières arrivées, de faible amplitude, sont les ondes P.",
          "Viennent ensuite les ondes S (amplitude moyenne), puis les ondes L (grande amplitude)."
        ],
        "conclusion": "Ordre d’arrivée : P, puis S, puis L."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Sismographe",
          "stepTheme": "Appareil",
          "stepTitle": "Enregistrer les vibrations",
          "paragraphText": "Le **sismographe** enregistre les vibrations du sol ; son enregistrement s’appelle le **sismogramme**.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p02_q1",
            "type": "mcq",
            "prompt": "Comment s’appelle l’enregistrement des ondes émises par un séisme ?",
            "options": [
              "Le sismogramme",
              "Le sismographe",
              "L’hodographe",
              "La magnitude"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sismographe est l’appareil ; le sismogramme est la trace."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les trois types d’ondes sismiques",
            "caption": "Sur un sismogramme, les ondes P arrivent en premier, puis les S, puis les L.",
            "tableData": {
              "headers": [
                "Onde",
                "Arrivée",
                "Mouvement des particules",
                "Milieux traversés",
                "Amplitude"
              ],
              "rows": [
                [
                  "P (primaires)",
                  "1re, les plus rapides",
                  "Compression : dans le sens de propagation",
                  "Solides et liquides",
                  "Faible"
                ],
                [
                  "S (secondaires)",
                  "2e",
                  "Cisaillement : perpendiculaire à la propagation",
                  "Solides seulement",
                  "Moyenne"
                ],
                [
                  "L (longues)",
                  "Dernières, les plus lentes",
                  "Ondes de surface",
                  "Couches superficielles",
                  "Grande : les plus destructrices"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Onde P",
          "stepTheme": "Primaire",
          "stepTitle": "Les ondes P",
          "paragraphText": "Les **ondes P** arrivent **en premier** : ce sont les plus **rapides**. Ondes de **compression**, elles traversent les **solides et les liquides**.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p02_q2",
            "type": "mcq",
            "prompt": "Quelles ondes sismiques arrivent les premières à une station ?",
            "options": [
              "Les ondes P",
              "Les ondes S",
              "Les ondes L",
              "Elles arrivent toutes en même temps"
            ],
            "correctAnswerIndex": 0,
            "explanation": "P comme primaires."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Onde S",
          "stepTheme": "Secondaire",
          "stepTitle": "Les ondes S",
          "paragraphText": "Les **ondes S** sont des ondes de **cisaillement** : les particules bougent **perpendiculairement** à la propagation. Elles ne traversent que les **solides**.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p02_q3",
            "type": "mcq",
            "prompt": "Dans quels milieux les ondes S se propagent-elles ?",
            "options": [
              "Seulement dans les solides",
              "Dans les solides et les liquides",
              "Seulement dans les liquides",
              "Seulement dans l’air"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un liquide ne transmet pas le cisaillement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Compression",
          "stepTheme": "Mouvement",
          "stepTitle": "Le mouvement des particules",
          "paragraphText": "Onde **P** : particules qui avancent et reculent **dans le sens** de la propagation (compression). Onde **S** : particules qui bougent **perpendiculairement**.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p02_q4",
            "type": "mcq",
            "prompt": "Pour quelle onde les particules se déplacent-elles dans le même sens que la propagation ?",
            "options": [
              "L’onde P (compression)",
              "L’onde S (cisaillement)",
              "Aucune onde",
              "Toutes les ondes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme un ressort qu’on pousse et qu’on tire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Onde L",
          "stepTheme": "Surface",
          "stepTitle": "Les ondes L",
          "paragraphText": "Les **ondes L** arrivent en **dernier** ; lentes et de **grande amplitude**, elles se propagent **en surface** et sont les plus **destructrices**.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p02_q5",
            "type": "mcq",
            "prompt": "Quelles ondes sont les plus destructrices ?",
            "options": [
              "Les ondes L",
              "Les ondes P",
              "Les ondes S",
              "Aucune onde n’est destructrice"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice : « Les ondes P sont les plus destructrices » est faux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Exercice",
          "stepTitle": "La magnitude d’un volcan ?",
          "paragraphText": "« La magnitude est la force d’un volcan » : **faux**. La magnitude mesure l’**énergie d’un séisme**.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p02_q6",
            "type": "mcq",
            "prompt": "« La magnitude est la force d’un volcan. » Vrai ou faux ?",
            "options": [
              "Faux : la magnitude mesure l’énergie libérée par un séisme",
              "Vrai",
              "Faux : elle mesure la vitesse des ondes P",
              "Vrai, sur l’échelle de Richter"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : 1 faux, 2 vrai, 3 vrai, 4 faux, 5 vrai."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p02_q1",
          "type": "mcq",
          "prompt": "Comment s’appelle l’enregistrement des ondes émises par un séisme ?",
          "options": [
            "Le sismogramme",
            "Le sismographe",
            "L’hodographe",
            "La magnitude"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sismographe est l’appareil ; le sismogramme est la trace."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p02_q2",
          "type": "mcq",
          "prompt": "Quelles ondes sismiques arrivent les premières à une station ?",
          "options": [
            "Les ondes P",
            "Les ondes S",
            "Les ondes L",
            "Elles arrivent toutes en même temps"
          ],
          "correctAnswerIndex": 0,
          "explanation": "P comme primaires."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p02_q3",
          "type": "mcq",
          "prompt": "Dans quels milieux les ondes S se propagent-elles ?",
          "options": [
            "Seulement dans les solides",
            "Dans les solides et les liquides",
            "Seulement dans les liquides",
            "Seulement dans l’air"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un liquide ne transmet pas le cisaillement."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p02_q4",
          "type": "mcq",
          "prompt": "Pour quelle onde les particules se déplacent-elles dans le même sens que la propagation ?",
          "options": [
            "L’onde P (compression)",
            "L’onde S (cisaillement)",
            "Aucune onde",
            "Toutes les ondes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme un ressort qu’on pousse et qu’on tire."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p02_q5",
          "type": "mcq",
          "prompt": "Quelles ondes sont les plus destructrices ?",
          "options": [
            "Les ondes L",
            "Les ondes P",
            "Les ondes S",
            "Aucune onde n’est destructrice"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice : « Les ondes P sont les plus destructrices » est faux."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p02_q6",
          "type": "mcq",
          "prompt": "« La magnitude est la force d’un volcan. » Vrai ou faux ?",
          "options": [
            "Faux : la magnitude mesure l’énergie libérée par un séisme",
            "Vrai",
            "Faux : elle mesure la vitesse des ondes P",
            "Vrai, sur l’échelle de Richter"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : 1 faux, 2 vrai, 3 vrai, 4 faux, 5 vrai."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l01_structure_interne_globe_p03",
      "order": 3,
      "title": "Les hodographes",
      "summary": "Temps d’arrivée selon la distance : milieux homogènes et hétérogènes.",
      "conceptExplanation": "- Expérience 1 : on mesure le temps d’arrivée des ondes P, S et L en fonction de la distance à l’épicentre. Les courbes obtenues s’appellent des hodographes.\n- L’hodographe des ondes L est une droite : leur vitesse est constante. Elles parcourent les couches superficielles, de propriétés semblables (homogènes).\n- Les hodographes des ondes P et S sont des courbes : plus la station est loin, plus la vitesse moyenne de ces ondes est grande. Elles passent en profondeur, dans des milieux hétérogènes de plus en plus denses, où elles vont plus vite.\n- À toute distance, P arrive avant S, et S avant L.\n- La vitesse des ondes dépend donc de la nature du milieu traversé : on peut s’en servir pour explorer l’intérieur de la Terre.",
      "keyRule": "Hodographe droit (L) : vitesse constante, milieu homogène. Hodographes courbes (P, S) : vitesse qui augmente, milieux hétérogènes en profondeur.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter la forme d’un hodographe",
        "statement": "Pourquoi l’hodographe des ondes L est-il une droite ?",
        "methodSteps": [
          "Une droite signifie que le temps est proportionnel à la distance.",
          "La vitesse est donc constante : les ondes L traversent un milieu homogène (couches superficielles)."
        ],
        "conclusion": "Les ondes L circulent en surface, dans un milieu aux propriétés constantes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Hodographe",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce qu’un hodographe ?",
          "paragraphText": "Un **hodographe** est la courbe du **temps d’arrivée** d’une onde en fonction de la **distance à l’épicentre**.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p03_q1",
            "type": "mcq",
            "prompt": "Que représente un hodographe ?",
            "options": [
              "Le temps d’arrivée d’une onde en fonction de la distance à l’épicentre",
              "La vitesse des ondes en fonction de la profondeur",
              "L’amplitude des secousses",
              "La magnitude du séisme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il compare plusieurs stations à des distances différentes."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Hodographes des ondes P, S et L",
            "caption": "Temps d’arrivée des ondes en fonction de la distance à l’épicentre. L’hodographe de L est une droite ; ceux de P et S sont courbes.",
            "svgContent": "<svg viewBox=\"0 0 560 270\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Temps d’arrivée des ondes P, S et L selon la distance épicentrale\"><line x1=\"60\" y1=\"230\" x2=\"520\" y2=\"230\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"230\" x2=\"60\" y2=\"22\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"54\" y=\"194\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">5</text><text x=\"54\" y=\"154\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">10</text><text x=\"54\" y=\"114\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">15</text><text x=\"54\" y=\"74\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">20</text><text x=\"54\" y=\"34\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">25</text><text x=\"143.63636363636363\" y=\"246\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">2000</text><text x=\"227.27272727272728\" y=\"246\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">4000</text><text x=\"310.9090909090909\" y=\"246\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">6000</text><text x=\"394.54545454545456\" y=\"246\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">8000</text><text x=\"478.1818181818182\" y=\"246\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">10000</text><text x=\"290\" y=\"262\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">distance à l’épicentre (km)</text><text x=\"56\" y=\"16\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">temps (min)</text><polyline points=\"60.0,230.0 101.8,212.4 143.6,195.6 185.5,178.0 269.1,154.0 352.7,134.0 436.4,119.6 520.0,113.2\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"60.0,230.0 101.8,198.0 143.6,167.6 185.5,138.0 269.1,98.0 352.7,70.0 436.4,49.2 520.0,33.2\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"60.0,230.0 281.6,30.0\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"248.1818181818182\" y=\"46\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">L</text><text x=\"394.54545454545456\" y=\"50\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">S</text><text x=\"394.54545454545456\" y=\"113.2\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">P</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Ondes L",
          "stepTheme": "Droite",
          "stepTitle": "L’hodographe des ondes L",
          "paragraphText": "L’hodographe des ondes **L** est une **droite** : leur vitesse est **constante**, car elles parcourent un milieu **homogène** (couches superficielles).",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p03_q2",
            "type": "mcq",
            "prompt": "L’hodographe des ondes L est une droite. Que peut-on en déduire ?",
            "options": [
              "Leur vitesse est constante : elles traversent un milieu homogène",
              "Leur vitesse augmente avec la distance",
              "Elles traversent le noyau",
              "Elles n’existent pas loin de l’épicentre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Droite = proportionnalité = vitesse constante."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Ondes P et S",
          "stepTheme": "Courbes",
          "stepTitle": "Les hodographes de P et S",
          "paragraphText": "Les hodographes des ondes **P** et **S** sont **courbes** : leur vitesse **augmente** avec la distance, car elles passent en **profondeur**, dans des milieux **hétérogènes** de plus en plus denses.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p03_q3",
            "type": "mcq",
            "prompt": "Les hodographes des ondes P et S sont courbes. Que signifie cette forme ?",
            "options": [
              "Leur vitesse augmente : elles passent par des milieux profonds et hétérogènes",
              "Leur vitesse est constante",
              "Elles restent en surface",
              "Elles ralentissent toujours"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En profondeur, les roches plus denses les accélèrent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Lire",
          "stepTheme": "Graphe",
          "stepTitle": "Lire un hodographe",
          "paragraphText": "À **3 000 km** de l’épicentre, les ondes P arrivent après environ **6,5 min**, les S après environ **11,5 min** : P arrive bien **avant** S.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p03_q4",
            "type": "mcq",
            "prompt": "D’après les hodographes, à 3 000 km de l’épicentre, les ondes P arrivent après environ 6,5 minutes et les ondes S après environ 11,5 minutes. Quel est l’écart entre les deux arrivées ?",
            "options": [
              "Environ 5 minutes",
              "Environ 18 minutes",
              "Environ 1 minute",
              "Elles arrivent ensemble"
            ],
            "correctAnswerIndex": 0,
            "explanation": "11,5 − 6,5 = 5 minutes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Milieu",
          "stepTheme": "Conclusion",
          "stepTitle": "La vitesse dépend du milieu",
          "paragraphText": "La **vitesse** des ondes dépend de la **nature du milieu** traversé : en mesurant ces vitesses, on peut « voir » l’intérieur de la Terre.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p03_q5",
            "type": "mcq",
            "prompt": "Pourquoi l’étude des ondes sismiques permet-elle de connaître l’intérieur de la Terre ?",
            "options": [
              "Leur vitesse change selon la nature des milieux traversés",
              "Elles ne traversent jamais la Terre",
              "Elles ont toujours la même vitesse",
              "Elles ne sont enregistrées qu’à l’épicentre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque changement de vitesse révèle un changement de milieu."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p03_q1",
          "type": "mcq",
          "prompt": "Que représente un hodographe ?",
          "options": [
            "Le temps d’arrivée d’une onde en fonction de la distance à l’épicentre",
            "La vitesse des ondes en fonction de la profondeur",
            "L’amplitude des secousses",
            "La magnitude du séisme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il compare plusieurs stations à des distances différentes."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p03_q2",
          "type": "mcq",
          "prompt": "L’hodographe des ondes L est une droite. Que peut-on en déduire ?",
          "options": [
            "Leur vitesse est constante : elles traversent un milieu homogène",
            "Leur vitesse augmente avec la distance",
            "Elles traversent le noyau",
            "Elles n’existent pas loin de l’épicentre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Droite = proportionnalité = vitesse constante."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p03_q3",
          "type": "mcq",
          "prompt": "Les hodographes des ondes P et S sont courbes. Que signifie cette forme ?",
          "options": [
            "Leur vitesse augmente : elles passent par des milieux profonds et hétérogènes",
            "Leur vitesse est constante",
            "Elles restent en surface",
            "Elles ralentissent toujours"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En profondeur, les roches plus denses les accélèrent."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p03_q4",
          "type": "mcq",
          "prompt": "D’après les hodographes, à 3 000 km de l’épicentre, les ondes P arrivent après environ 6,5 minutes et les ondes S après environ 11,5 minutes. Quel est l’écart entre les deux arrivées ?",
          "options": [
            "Environ 5 minutes",
            "Environ 18 minutes",
            "Environ 1 minute",
            "Elles arrivent ensemble"
          ],
          "correctAnswerIndex": 0,
          "explanation": "11,5 − 6,5 = 5 minutes."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p03_q5",
          "type": "mcq",
          "prompt": "Pourquoi l’étude des ondes sismiques permet-elle de connaître l’intérieur de la Terre ?",
          "options": [
            "Leur vitesse change selon la nature des milieux traversés",
            "Elles ne traversent jamais la Terre",
            "Elles ont toujours la même vitesse",
            "Elles ne sont enregistrées qu’à l’épicentre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque changement de vitesse révèle un changement de milieu."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l01_structure_interne_globe_p04",
      "order": 4,
      "title": "Les couches du globe et leurs limites",
      "summary": "Croûte, manteau, noyau externe et interne ; discontinuités de Moho, Gutenberg et Lehmann.",
      "conceptExplanation": "- Expérience 2 : on suit la vitesse des ondes P et S en fonction de la profondeur. Les changements brusques de vitesse marquent des limites entre couches : les discontinuités.\n- Croûte (écorce) : de la surface au Moho, environ 30 km sous les continents en moyenne (jusqu’à 70 km sous les montagnes) et 6 à 7 km sous les océans. Les ondes y accélèrent vite.\n- Discontinuité de Mohorovicic (Moho) : la vitesse des ondes P et S augmente brusquement, car le manteau est plus dense que la croûte.\n- Juste en dessous, vers 100 à 250 km, les ondes ralentissent un peu : c’est l’asthénosphère, partie du manteau supérieur plus chaude et ductile. Au-dessus, la croûte et le haut du manteau forment la lithosphère, rigide.\n- Manteau, du Moho à 2 900 km : les vitesses augmentent en deux temps, ce qui sépare le manteau supérieur (jusqu’à environ 700 km) et le manteau inférieur (mésosphère), solide.\n- Discontinuité de Gutenberg, à 2 900 km : la vitesse des ondes P chute d’environ 13,7 à 8 km/s et les ondes S disparaissent : le noyau externe est liquide.\n- Noyau externe, de 2 900 à 5 100 km : liquide ; les ondes P y accélèrent progressivement.\n- Discontinuité de Lehmann, à 5 100 km : début du noyau interne (graine), solide, jusqu’au centre (6 370 km).\n- Corrections du document : il dit qu’à 70 km la vitesse « chute brutalement » et que le manteau est « moins dense que la croûte ». En réalité, au Moho la vitesse augmente, car le manteau est plus dense ; le ralentissement observé vers 100 km correspond à l’asthénosphère. Il donne aussi 70 km comme épaisseur de la croûte continentale : c’est un maximum, sous les montagnes ; la moyenne est d’environ 30 km.",
      "keyRule": "Croûte | Moho (vitesse ↑) | manteau | Gutenberg 2 900 km (P chute, S disparaît) | noyau externe liquide | Lehmann 5 100 km | graine solide.",
      "formulas": [],
      "workedExample": {
        "title": "Montrer que le noyau externe est liquide",
        "statement": "À 2 900 km de profondeur, les ondes S disparaissent. Que peut-on conclure ?",
        "methodSteps": [
          "Les ondes S ne se propagent que dans les solides.",
          "Si elles ne traversent pas une couche, cette couche n’est pas solide."
        ],
        "conclusion": "Le noyau externe, sous 2 900 km, est liquide."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Discontinuité",
          "stepTheme": "Limites",
          "stepTitle": "Qu’est-ce qu’une discontinuité ?",
          "paragraphText": "Une **discontinuité** est une limite entre deux couches, repérée par un **changement brusque** de la vitesse des ondes.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p04_q1",
            "type": "mcq",
            "prompt": "Comment repère-t-on la limite entre deux couches du globe ?",
            "options": [
              "Par un changement brusque de la vitesse des ondes sismiques",
              "Par un changement de couleur des roches en surface",
              "Par la magnitude des séismes",
              "Par la position de l’épicentre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque saut de vitesse révèle un nouveau milieu."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Vitesse des ondes P et S selon la profondeur",
            "caption": "Chaque changement brusque de vitesse marque une limite entre deux couches (discontinuité). Les ondes S disparaissent dans le noyau externe : il est liquide.",
            "svgContent": "<svg viewBox=\"0 0 560 290\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Vitesse des ondes P et S de la surface au centre de la Terre\"><line x1=\"70\" y1=\"30\" x2=\"370\" y2=\"30\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"30\" x2=\"70\" y2=\"260\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"70\" y=\"22\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">0</text><text x=\"177.14285714285714\" y=\"22\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">5</text><text x=\"284.2857142857143\" y=\"22\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">10</text><text x=\"370\" y=\"22\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">14 km/s</text><text x=\"64\" y=\"69.9375\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">1000</text><text x=\"64\" y=\"138.21875\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">2900</text><text x=\"64\" y=\"217.28125\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">5100</text><text x=\"64\" y=\"264\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">6400</text><text x=\"14\" y=\"150\" font-size=\"10\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">km</text><polyline points=\"198.6,30.0 209.3,31.1 243.6,31.1 243.6,33.2 237.1,35.4 250.0,40.8 271.4,53.4 297.1,55.2 363.6,133.9 241.4,134.6 290.7,214.7 305.7,215.4 310.0,260.0\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"145.0,30.0 151.4,31.1 168.6,31.1 168.6,33.2 162.1,35.4 170.7,40.8 183.6,53.4 196.4,55.2 226.4,133.9\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"145.0,215.4 147.1,260.0\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"337.85714285714283\" y=\"112.65625\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">P</text><text x=\"207.14285714285714\" y=\"101.875\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">S</text><line x1=\"70\" y1=\"134.21875\" x2=\"420\" y2=\"134.21875\" stroke=\"#F59E0B\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-dasharray=\"5 4\"/><text x=\"424\" y=\"138.21875\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#F59E0B\">Gutenberg (2 900 km)</text><line x1=\"70\" y1=\"213.28125\" x2=\"420\" y2=\"213.28125\" stroke=\"#F59E0B\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-dasharray=\"5 4\"/><text x=\"424\" y=\"217.28125\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#F59E0B\">Lehmann (5 100 km)</text><line x1=\"70\" y1=\"31.15\" x2=\"420\" y2=\"31.15\" stroke=\"#F59E0B\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-dasharray=\"5 4\"/><text x=\"424\" y=\"39.15\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#F59E0B\">Moho (≈ 30 km)</text><text x=\"424\" y=\"173.75\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">pas d’onde S :</text><text x=\"424\" y=\"187.75\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">noyau liquide</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Croûte",
          "stepTheme": "Moho",
          "stepTitle": "La croûte et le Moho",
          "paragraphText": "La **croûte** va de la surface au **Moho** : environ **30 km** sous les continents (jusqu’à 70 km sous les montagnes), **6 à 7 km** sous les océans.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est l’épaisseur moyenne de la croûte sous les océans ?",
            "options": [
              "Environ 6 à 7 km",
              "Environ 2 900 km",
              "Environ 700 km",
              "Environ 5 100 km"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La croûte océanique est bien plus mince que la croûte continentale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Moho",
          "stepTheme": "Erreur du document",
          "stepTitle": "Au Moho, les ondes accélèrent",
          "paragraphText": "Le document dit que la vitesse « **chute** » au Moho et que le manteau est « **moins dense** ». C’est l’inverse : au Moho, la vitesse **augmente**, car le manteau est **plus dense**. Le léger ralentissement vers 100 km est l’**asthénosphère**.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p04_q3",
            "type": "mcq",
            "prompt": "Que se passe-t-il pour la vitesse des ondes P et S au passage de la croûte au manteau (Moho) ?",
            "options": [
              "Elle augmente brusquement, car le manteau est plus dense que la croûte",
              "Elle chute à zéro",
              "Elle diminue, car le manteau est moins dense",
              "Elle ne change pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Plus un milieu solide est dense et rigide, plus les ondes y vont vite."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Lithosphère",
          "stepTheme": "Manteau supérieur",
          "stepTitle": "Lithosphère et asthénosphère",
          "paragraphText": "La **lithosphère**, rigide, comprend la **croûte** et le **haut du manteau**. En dessous, l’**asthénosphère**, plus chaude et ductile, ralentit un peu les ondes.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p04_q4",
            "type": "mcq",
            "prompt": "Qu’est-ce que la lithosphère ?",
            "options": [
              "L’ensemble rigide formé par la croûte et le haut du manteau supérieur",
              "Le noyau interne",
              "La partie liquide du noyau",
              "Le manteau inférieur seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lithos : la pierre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Gutenberg",
          "stepTheme": "2 900 km",
          "stepTitle": "La discontinuité de Gutenberg",
          "paragraphText": "À **2 900 km**, la vitesse des ondes **P chute** (d’environ 13,7 à 8 km/s) et les ondes **S disparaissent** : c’est la discontinuité de **Gutenberg**.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p04_q5",
            "type": "mcq",
            "prompt": "À quelle profondeur les ondes S disparaissent-elles et la vitesse des ondes P chute-t-elle brusquement ?",
            "options": [
              "Vers 2 900 km (discontinuité de Gutenberg)",
              "Vers 30 km (Moho)",
              "Vers 5 100 km (Lehmann)",
              "Vers 6 370 km"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la limite manteau-noyau."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Noyau externe",
          "stepTheme": "Liquide",
          "stepTitle": "Le noyau externe est liquide",
          "paragraphText": "Les ondes **S** ne traversent que les solides : comme elles **disparaissent** de 2 900 à 5 100 km, le **noyau externe** est **liquide**.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p04_q6",
            "type": "mcq",
            "prompt": "Les ondes S ne se propagent pas entre 2 900 et 5 100 km de profondeur. Que peut-on en déduire ?",
            "options": [
              "Le noyau externe est liquide",
              "Le noyau externe est solide",
              "Le manteau est liquide",
              "La croûte est liquide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les ondes S ne traversent pas les liquides."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Lehmann",
          "stepTheme": "Graine",
          "stepTitle": "Le noyau interne",
          "paragraphText": "À **5 100 km** (discontinuité de **Lehmann**) commence le **noyau interne** ou **graine**, **solide**, jusqu’au centre de la Terre (**6 370 km**).",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p04_q7",
            "type": "mcq",
            "prompt": "Comment s’appelle la limite entre le noyau externe et le noyau interne, vers 5 100 km ?",
            "options": [
              "La discontinuité de Lehmann",
              "La discontinuité de Gutenberg",
              "La discontinuité de Mohorovicic",
              "L’asthénosphère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Moho, Gutenberg, Lehmann : de la surface vers le centre."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les couches du globe et leurs limites",
            "caption": "Les profondeurs sont des valeurs moyennes.",
            "tableData": {
              "headers": [
                "Couche",
                "Profondeur",
                "État",
                "Limite inférieure"
              ],
              "rows": [
                [
                  "Croûte",
                  "0 à ≈ 30 km (continents), 0 à 6-7 km (océans)",
                  "Solide",
                  "Discontinuité de Mohorovicic (Moho)"
                ],
                [
                  "Manteau supérieur",
                  "Moho à ≈ 700 km ; asthénosphère vers 100-250 km",
                  "Solide, en partie ductile",
                  "—"
                ],
                [
                  "Manteau inférieur",
                  "≈ 700 à 2 900 km",
                  "Solide",
                  "Discontinuité de Gutenberg"
                ],
                [
                  "Noyau externe",
                  "2 900 à 5 100 km",
                  "Liquide",
                  "Discontinuité de Lehmann"
                ],
                [
                  "Noyau interne (graine)",
                  "5 100 à 6 370 km",
                  "Solide",
                  "Centre de la Terre"
                ]
              ]
            }
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p04_q1",
          "type": "mcq",
          "prompt": "Comment repère-t-on la limite entre deux couches du globe ?",
          "options": [
            "Par un changement brusque de la vitesse des ondes sismiques",
            "Par un changement de couleur des roches en surface",
            "Par la magnitude des séismes",
            "Par la position de l’épicentre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque saut de vitesse révèle un nouveau milieu."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est l’épaisseur moyenne de la croûte sous les océans ?",
          "options": [
            "Environ 6 à 7 km",
            "Environ 2 900 km",
            "Environ 700 km",
            "Environ 5 100 km"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La croûte océanique est bien plus mince que la croûte continentale."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p04_q3",
          "type": "mcq",
          "prompt": "Que se passe-t-il pour la vitesse des ondes P et S au passage de la croûte au manteau (Moho) ?",
          "options": [
            "Elle augmente brusquement, car le manteau est plus dense que la croûte",
            "Elle chute à zéro",
            "Elle diminue, car le manteau est moins dense",
            "Elle ne change pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Plus un milieu solide est dense et rigide, plus les ondes y vont vite."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p04_q4",
          "type": "mcq",
          "prompt": "Qu’est-ce que la lithosphère ?",
          "options": [
            "L’ensemble rigide formé par la croûte et le haut du manteau supérieur",
            "Le noyau interne",
            "La partie liquide du noyau",
            "Le manteau inférieur seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lithos : la pierre."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p04_q5",
          "type": "mcq",
          "prompt": "À quelle profondeur les ondes S disparaissent-elles et la vitesse des ondes P chute-t-elle brusquement ?",
          "options": [
            "Vers 2 900 km (discontinuité de Gutenberg)",
            "Vers 30 km (Moho)",
            "Vers 5 100 km (Lehmann)",
            "Vers 6 370 km"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la limite manteau-noyau."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p04_q6",
          "type": "mcq",
          "prompt": "Les ondes S ne se propagent pas entre 2 900 et 5 100 km de profondeur. Que peut-on en déduire ?",
          "options": [
            "Le noyau externe est liquide",
            "Le noyau externe est solide",
            "Le manteau est liquide",
            "La croûte est liquide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ondes S ne traversent pas les liquides."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p04_q7",
          "type": "mcq",
          "prompt": "Comment s’appelle la limite entre le noyau externe et le noyau interne, vers 5 100 km ?",
          "options": [
            "La discontinuité de Lehmann",
            "La discontinuité de Gutenberg",
            "La discontinuité de Mohorovicic",
            "L’asthénosphère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Moho, Gutenberg, Lehmann : de la surface vers le centre."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l01_structure_interne_globe_p05",
      "order": 5,
      "title": "Évaluation : la structure du globe",
      "summary": "Lire un graphe de vitesses, compter les couches, annoter un schéma.",
      "conceptExplanation": "- Exercice 2 : un graphe donne la vitesse des ondes P et S de la surface jusqu’à 6 370 km.\n- Les vitesses changent brusquement près de la surface (Moho, où elles augmentent), à 2 900 km (P chute, S disparaît) et vers 5 100 km (petit saut des ondes P).\n- Ces changements brusques traduisent des changements de nature des milieux : ce sont des discontinuités.\n- On en déduit trois couches majeures : la croûte, le manteau et le noyau (lui-même divisé en noyau externe liquide et noyau interne solide).\n- Schéma à annoter : 1 croûte continentale, 2 croûte océanique, 3 manteau, 4 noyau externe, 5 noyau interne ou graine, 6 noyau ; a discontinuité de Mohorovicic, b discontinuité de Gutenberg, c discontinuité de Lehmann.\n- Vrai ou faux (le document ne donne pas le corrigé) : 1 « la magnitude est la force d’un volcan » faux ; 2 « les ondes L sont lentes » vrai ; 3 « l’épicentre est la zone où l’intensité est la plus élevée » vrai ; 4 « les ondes P sont les plus destructrices » faux ; 5 « l’hypocentre est le lieu d’où partent les ondes » vrai.",
      "keyRule": "Trois couches majeures : croûte, manteau, noyau (externe liquide + interne solide).",
      "formulas": [],
      "workedExample": {
        "title": "Compter les couches majeures",
        "statement": "Un graphe montre deux grandes ruptures de vitesse : près de la surface et à 2 900 km. Combien de couches majeures ?",
        "methodSteps": [
          "Deux limites séparent trois ensembles.",
          "Au-dessus du Moho : croûte ; entre Moho et 2 900 km : manteau ; en dessous : noyau."
        ],
        "conclusion": "Trois couches majeures : croûte, manteau, noyau."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Profondeurs",
          "stepTheme": "Question 1",
          "stepTitle": "Où les vitesses changent-elles brusquement ?",
          "paragraphText": "Les vitesses changent brusquement près de la **surface** (Moho), à **2 900 km** et vers **5 100 km**.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p05_q1",
            "type": "mcq",
            "prompt": "Un graphe montre la vitesse des ondes P et S en profondeur : changement brusque près de 30 km, chute des P et disparition des S à 2 900 km, petit saut des P vers 5 100 km. Combien de discontinuités repère-t-on ?",
            "options": [
              "Trois : Moho, Gutenberg et Lehmann",
              "Une seule, à 2 900 km",
              "Deux, à 30 et 6 370 km",
              "Aucune"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque changement brusque = une discontinuité."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les enveloppes du globe terrestre",
            "caption": "Croûte, manteau, noyau externe liquide, noyau interne solide (graine), séparés par trois discontinuités.",
            "svgContent": "<svg viewBox=\"0 0 560 300\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Quart de globe : croûte, manteau, noyau externe, noyau interne\"><path d=\"M40 280 L40 20 A260 260 0 0 1 300 280 Z\" fill=\"#F59E0B\" fill-opacity=\"0.18\" stroke=\"#F59E0B\" stroke-width=\"2\"/><path d=\"M40 280 L40 32 A248 248 0 0 1 288 280 Z\" fill=\"#EF4444\" fill-opacity=\"0.14\" stroke=\"#EF4444\" stroke-width=\"1.5\"/><path d=\"M40 280 L40 162 A118 118 0 0 1 158 280 Z\" fill=\"#F59E0B\" fill-opacity=\"0.30\" stroke=\"#F59E0B\" stroke-width=\"1.5\"/><path d=\"M40 280 L40 228 A52 52 0 0 1 92 280 Z\" fill=\"#94A3B8\" fill-opacity=\"0.45\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/><line x1=\"210\" y1=\"50\" x2=\"330\" y2=\"34\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"336\" y=\"30\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">croûte</text><text x=\"336\" y=\"44\" font-size=\"10\" text-anchor=\"start\" font-weight=\"600\" fill=\"currentColor\">≈ 30 km (continents), 6-7 km (océans)</text><line x1=\"190\" y1=\"120\" x2=\"330\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"336\" y=\"96\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">manteau (solide) jusqu’à 2 900 km</text><line x1=\"130\" y1=\"200\" x2=\"330\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"336\" y=\"154\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">noyau externe (liquide)</text><text x=\"336\" y=\"168\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"600\" fill=\"currentColor\">de 2 900 à 5 100 km</text><line x1=\"70\" y1=\"262\" x2=\"330\" y2=\"220\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"336\" y=\"224\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">noyau interne ou graine (solide)</text><text x=\"336\" y=\"238\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"600\" fill=\"currentColor\">de 5 100 à 6 370 km</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Raison",
          "stepTheme": "Question 2",
          "stepTitle": "Pourquoi ces changements brusques ?",
          "paragraphText": "Un changement brusque de vitesse signifie que les ondes entrent dans un milieu de **nature différente** (densité, état solide ou liquide).",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p05_q2",
            "type": "mcq",
            "prompt": "Pourquoi la vitesse des ondes P et S change-t-elle brusquement à certaines profondeurs ?",
            "options": [
              "Parce qu’elles entrent dans une couche de nature différente",
              "Parce que le séisme s’arrête",
              "Parce que le sismographe tombe en panne",
              "Parce que la magnitude change"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La vitesse dépend du milieu traversé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Trois couches",
          "stepTheme": "Question 3",
          "stepTitle": "Les couches majeures",
          "paragraphText": "On distingue **trois couches majeures** : la **croûte**, le **manteau** et le **noyau** (noyau externe liquide et graine solide).",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p05_q3",
            "type": "mcq",
            "prompt": "Combien de couches majeures compte le globe terrestre, et lesquelles ?",
            "options": [
              "Trois : la croûte, le manteau et le noyau",
              "Deux : la croûte et le noyau",
              "Une seule, homogène",
              "Cinq couches toutes liquides"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le noyau se divise lui-même en deux parties."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Annoter",
          "stepTheme": "Activité",
          "stepTitle": "Annoter le schéma du globe",
          "paragraphText": "a = **Moho** (base de la croûte) ; b = **Gutenberg** (2 900 km) ; c = **Lehmann** (5 100 km).",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p05_q4",
            "type": "mcq",
            "prompt": "Sur un schéma du globe, la limite b est à 2 900 km, entre le manteau et le noyau. Comment s’appelle-t-elle ?",
            "options": [
              "La discontinuité de Gutenberg",
              "La discontinuité de Mohorovicic",
              "La discontinuité de Lehmann",
              "L’épicentre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : a Moho, b Gutenberg, c Lehmann."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Exercice",
          "stepTitle": "L’hypocentre",
          "paragraphText": "« L’hypocentre est le lieu d’où partent les ondes sismiques » : **vrai**. C’est le foyer, en profondeur.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p05_q5",
            "type": "mcq",
            "prompt": "« L’hypocentre est le lieu d’où partent les ondes sismiques. » Vrai ou faux ?",
            "options": [
              "Vrai",
              "Faux : c’est l’épicentre",
              "Faux : c’est la station sismologique",
              "Faux : les ondes partent du noyau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Hypocentre = foyer."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Exercice",
          "stepTitle": "La vitesse des ondes L",
          "paragraphText": "« Les ondes L sont lentes » : **vrai** ; elles arrivent en dernier.",
          "exercise": {
            "id": "premiere_c_svt_l01_structure_interne_globe_p05_q6",
            "type": "mcq",
            "prompt": "« Les ondes L sont lentes. » Vrai ou faux ?",
            "options": [
              "Vrai : ce sont les dernières à arriver",
              "Faux : ce sont les plus rapides",
              "Faux : elles n’existent pas",
              "Vrai, mais seulement dans le noyau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ordre d’arrivée : P, S, L."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p05_q1",
          "type": "mcq",
          "prompt": "Un graphe montre la vitesse des ondes P et S en profondeur : changement brusque près de 30 km, chute des P et disparition des S à 2 900 km, petit saut des P vers 5 100 km. Combien de discontinuités repère-t-on ?",
          "options": [
            "Trois : Moho, Gutenberg et Lehmann",
            "Une seule, à 2 900 km",
            "Deux, à 30 et 6 370 km",
            "Aucune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque changement brusque = une discontinuité."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p05_q2",
          "type": "mcq",
          "prompt": "Pourquoi la vitesse des ondes P et S change-t-elle brusquement à certaines profondeurs ?",
          "options": [
            "Parce qu’elles entrent dans une couche de nature différente",
            "Parce que le séisme s’arrête",
            "Parce que le sismographe tombe en panne",
            "Parce que la magnitude change"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La vitesse dépend du milieu traversé."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p05_q3",
          "type": "mcq",
          "prompt": "Combien de couches majeures compte le globe terrestre, et lesquelles ?",
          "options": [
            "Trois : la croûte, le manteau et le noyau",
            "Deux : la croûte et le noyau",
            "Une seule, homogène",
            "Cinq couches toutes liquides"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le noyau se divise lui-même en deux parties."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p05_q4",
          "type": "mcq",
          "prompt": "Sur un schéma du globe, la limite b est à 2 900 km, entre le manteau et le noyau. Comment s’appelle-t-elle ?",
          "options": [
            "La discontinuité de Gutenberg",
            "La discontinuité de Mohorovicic",
            "La discontinuité de Lehmann",
            "L’épicentre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : a Moho, b Gutenberg, c Lehmann."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p05_q5",
          "type": "mcq",
          "prompt": "« L’hypocentre est le lieu d’où partent les ondes sismiques. » Vrai ou faux ?",
          "options": [
            "Vrai",
            "Faux : c’est l’épicentre",
            "Faux : c’est la station sismologique",
            "Faux : les ondes partent du noyau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Hypocentre = foyer."
        },
        {
          "id": "premiere_c_svt_l01_structure_interne_globe_p05_q6",
          "type": "mcq",
          "prompt": "« Les ondes L sont lentes. » Vrai ou faux ?",
          "options": [
            "Vrai : ce sont les dernières à arriver",
            "Faux : ce sont les plus rapides",
            "Faux : elles n’existent pas",
            "Vrai, mais seulement dans le noyau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ordre d’arrivée : P, S, L."
        }
      ]
    }
  ]
};
