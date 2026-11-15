import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère D_L12_Labsorption des nutriments.pdf (Mon école à la maison ; thème « La production de la matière organique et son utilisation ») ». Première D (programme propre à la 1re D).
// Fichier généré (scratchpad build_1re_d_svt_d.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_D_L12_ABSORPTION_NUTRIMENTS: CurriculumChapter = {
  "id": "premiere_d_svt_l12_absorption_nutriments",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "order": 12,
  "title": "Leçon 12 : L’absorption des nutriments",
  "summary": "Villosité intestinale, voie sanguine et voie lymphatique, transport passif (dialyse, osmose) et transport actif du glucose (expériences sur sacs d’intestin), glycémie et diabète.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT 1ère D_L12_Labsorption des nutriments.pdf (Mon école à la maison ; thème « La production de la matière organique et son utilisation »)",
  "points": [
    {
      "id": "premiere_d_svt_l12_absorption_nutriments_p01",
      "order": 1,
      "title": "La villosité intestinale",
      "summary": "Une surface d’échange immense.",
      "conceptExplanation": "Situation : un commerçant urine très souvent. Son analyse de sang montre une glycémie (taux de glucose dans le sang) supérieure à 1,8 g/L. Sa fille, en 1re D, et ses camarades veulent comprendre comment le glucose et les autres nutriments passent dans le sang.\n- La paroi de l’intestin grêle porte des millions de replis en forme de doigt de gant : les villosités intestinales.\n- Une villosité est recouverte d’une seule couche de cellules épithéliales. À l’intérieur se trouvent des capillaires sanguins (entre une artériole et une veinule) et un vaisseau lymphatique central, le chylifère.\n- Les cellules épithéliales portent elles-mêmes, du côté du contenu intestinal, de minuscules replis : les microvillosités.\n- Villosités et microvillosités forment une surface d’échange immense (de l’ordre de 200 m² chez l’Homme), avec une paroi très fine et des vaisseaux tout proches : l’absorption est rapide et efficace.\n- Correction du document : son schéma est intitulé « microvillosité intestinale » ; il représente une villosité (les microvillosités sont les replis, beaucoup plus petits, de chaque cellule épithéliale).",
      "keyRule": "Villosité : paroi d’une seule couche de cellules, capillaires sanguins et chylifère central. Villosités + microvillosités = immense surface d’échange.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l’efficacité de l’absorption",
        "statement": "Pourquoi l’intestin grêle absorbe-t-il si bien les nutriments ?",
        "methodSteps": [
          "Villosités et microvillosités multiplient la surface de contact.",
          "La paroi est très fine et les vaisseaux sont tout proches."
        ],
        "conclusion": "L’intestin grêle offre une immense surface d’échange, mince et très irriguée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Villosité",
          "stepTheme": "Structure",
          "stepTitle": "La villosité intestinale",
          "paragraphText": "Une **villosité** est un repli en **doigt de gant** de la paroi de l’intestin grêle, recouvert d’**une seule couche** de cellules épithéliales.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p01_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’une villosité intestinale ?",
            "options": [
              "Un repli en doigt de gant de la paroi de l’intestin grêle, recouvert d’une couche de cellules",
              "Une enzyme de l’intestin",
              "Un vaisseau sanguin du foie",
              "Une glande de l’estomac"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il y en a des millions."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Une villosité intestinale",
            "caption": "Une paroi très fine de cellules épithéliales recouvre des capillaires sanguins (voie sanguine) et un vaisseau lymphatique central, le chylifère (voie lymphatique).",
            "svgContent": "<svg viewBox=\"0 0 560 256\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Villosité intestinale : paroi de cellules épithéliales en doigt de gant, capillaires sanguins et chylifère central\"><path d=\"M120,230 L120,80 Q120,30 180,30 Q240,30 240,80 L240,230\" fill=\"#F59E0B\" fill-opacity=\"0.15\" stroke=\"#F59E0B\" stroke-width=\"10\" stroke-linejoin=\"round\"/><path d=\"M150,230 L150,90 Q150,62 180,62 Q210,62 210,90 L210,230\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"3\"/><line x1=\"150\" y1=\"100\" x2=\"210\" y2=\"92\" stroke=\"#EF4444\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"130\" x2=\"210\" y2=\"122\" stroke=\"#EF4444\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"160\" x2=\"210\" y2=\"152\" stroke=\"#EF4444\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"190\" x2=\"210\" y2=\"182\" stroke=\"#EF4444\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M180,230 L180,80\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"6\" stroke-opacity=\"0.8\"/><line x1=\"150\" y1=\"226\" x2=\"150.0\" y2=\"209.0\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"150,200 145.0,209.0 155.0,209.0\" fill=\"#EF4444\"/><line x1=\"210\" y1=\"200\" x2=\"210.0\" y2=\"217.0\" stroke=\"#3B82F6\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"210,226 215.0,217.0 205.0,217.0\" fill=\"#3B82F6\"/><line x1=\"244\" y1=\"60\" x2=\"330\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"336\" y=\"50\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#F59E0B\">cellules épithéliales (paroi)</text><line x1=\"206\" y1=\"120\" x2=\"330\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"336\" y=\"114\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#EF4444\">capillaires sanguins : eau, ions, oses,</text><text x=\"336\" y=\"128\" font-size=\"10\" text-anchor=\"start\" font-weight=\"600\" fill=\"#EF4444\">acides aminés, vitamines hydrosolubles</text><line x1=\"182\" y1=\"170\" x2=\"330\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\"/><text x=\"336\" y=\"174\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#F59E0B\">chylifère central : acides gras,</text><text x=\"336\" y=\"188\" font-size=\"10\" text-anchor=\"start\" font-weight=\"600\" fill=\"#F59E0B\">glycérol, vitamines liposolubles</text><text x=\"150\" y=\"246\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#EF4444\">artériole</text><text x=\"212\" y=\"246\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#3B82F6\">veinule</text><text x=\"60\" y=\"120\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">contenu</text><text x=\"60\" y=\"134\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">intestinal</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Vaisseaux",
          "stepTheme": "Structure",
          "stepTitle": "Ce qu’il y a à l’intérieur",
          "paragraphText": "Dans la villosité : des **capillaires sanguins** (entre une artériole et une veinule) et un vaisseau **lymphatique** central, le **chylifère**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p01_q2",
            "type": "mcq",
            "prompt": "Comment s’appelle le vaisseau lymphatique situé au centre d’une villosité intestinale ?",
            "options": [
              "Le chylifère central",
              "La veine porte",
              "L’artériole",
              "Le canal cholédoque"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il transporte la lymphe."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Surface",
          "stepTheme": "Explication",
          "stepTitle": "Une immense surface d’échange",
          "paragraphText": "Villosités et **microvillosités** forment une surface d’échange **immense** (≈ 200 m²), avec une paroi **très fine** et des vaisseaux tout **proches**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p01_q3",
            "type": "mcq",
            "prompt": "Pourquoi les villosités et les microvillosités rendent-elles l’absorption très efficace ?",
            "options": [
              "Parce qu’elles multiplient la surface d’échange, avec une paroi très fine près des vaisseaux",
              "Parce qu’elles digèrent les fibres",
              "Parce qu’elles fabriquent les enzymes",
              "Parce qu’elles bloquent le passage des nutriments"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Plus de surface = plus d’échanges."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Microvillosité",
          "stepTheme": "Correction du document",
          "stepTitle": "Villosité ou microvillosité ?",
          "paragraphText": "Le document appelle son schéma « **microvillosité** ». Il montre une **villosité** ; les **microvillosités** sont les replis minuscules de **chaque cellule** épithéliale.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p01_q4",
            "type": "mcq",
            "prompt": "Quelle est la différence entre une villosité et une microvillosité ?",
            "options": [
              "La villosité est un repli de la paroi intestinale ; la microvillosité est un repli minuscule d’une seule cellule",
              "Ce sont deux mots pour la même chose",
              "La microvillosité est plus grande que la villosité",
              "La villosité est dans l’estomac"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les microvillosités forment la « bordure en brosse »."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Glycémie",
          "stepTheme": "Situation",
          "stepTitle": "La glycémie",
          "paragraphText": "La **glycémie** est le **taux de glucose** dans le sang ; à jeun, elle est normalement proche de **1 g/L**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p01_q5",
            "type": "mcq",
            "prompt": "Qu’appelle-t-on la glycémie ?",
            "options": [
              "Le taux de glucose dans le sang",
              "Le taux de sel dans l’urine",
              "La quantité d’amidon dans l’intestin",
              "Le nombre de globules rouges"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le commerçant a plus de 1,8 g/L."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Diabète",
          "stepTheme": "Situation",
          "stepTitle": "Uriner souvent",
          "paragraphText": "Au-delà d’environ **1,8 g/L**, le rein ne retient plus tout le glucose : il passe dans l’**urine**, qui entraîne beaucoup d’eau. C’est un signe de **diabète**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p01_q6",
            "type": "mcq",
            "prompt": "Un homme dont la glycémie dépasse 1,8 g/L urine très souvent. Comment l’expliquer ?",
            "options": [
              "Le glucose en excès passe dans l’urine et entraîne beaucoup d’eau",
              "Il boit trop peu",
              "Son intestin n’absorbe plus le glucose",
              "Son sang ne contient plus de glucose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il faut consulter un médecin."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p01_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’une villosité intestinale ?",
          "options": [
            "Un repli en doigt de gant de la paroi de l’intestin grêle, recouvert d’une couche de cellules",
            "Une enzyme de l’intestin",
            "Un vaisseau sanguin du foie",
            "Une glande de l’estomac"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il y en a des millions."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p01_q2",
          "type": "mcq",
          "prompt": "Comment s’appelle le vaisseau lymphatique situé au centre d’une villosité intestinale ?",
          "options": [
            "Le chylifère central",
            "La veine porte",
            "L’artériole",
            "Le canal cholédoque"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il transporte la lymphe."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p01_q3",
          "type": "mcq",
          "prompt": "Pourquoi les villosités et les microvillosités rendent-elles l’absorption très efficace ?",
          "options": [
            "Parce qu’elles multiplient la surface d’échange, avec une paroi très fine près des vaisseaux",
            "Parce qu’elles digèrent les fibres",
            "Parce qu’elles fabriquent les enzymes",
            "Parce qu’elles bloquent le passage des nutriments"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Plus de surface = plus d’échanges."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p01_q4",
          "type": "mcq",
          "prompt": "Quelle est la différence entre une villosité et une microvillosité ?",
          "options": [
            "La villosité est un repli de la paroi intestinale ; la microvillosité est un repli minuscule d’une seule cellule",
            "Ce sont deux mots pour la même chose",
            "La microvillosité est plus grande que la villosité",
            "La villosité est dans l’estomac"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les microvillosités forment la « bordure en brosse »."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p01_q5",
          "type": "mcq",
          "prompt": "Qu’appelle-t-on la glycémie ?",
          "options": [
            "Le taux de glucose dans le sang",
            "Le taux de sel dans l’urine",
            "La quantité d’amidon dans l’intestin",
            "Le nombre de globules rouges"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le commerçant a plus de 1,8 g/L."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p01_q6",
          "type": "mcq",
          "prompt": "Un homme dont la glycémie dépasse 1,8 g/L urine très souvent. Comment l’expliquer ?",
          "options": [
            "Le glucose en excès passe dans l’urine et entraîne beaucoup d’eau",
            "Il boit trop peu",
            "Son intestin n’absorbe plus le glucose",
            "Son sang ne contient plus de glucose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il faut consulter un médecin."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l12_absorption_nutriments_p02",
      "order": 2,
      "title": "Les deux voies d’absorption",
      "summary": "Voie sanguine et voie lymphatique.",
      "conceptExplanation": "- Les nutriments traversent les cellules épithéliales puis passent dans les vaisseaux de la villosité.\n- Voie sanguine : l’eau, les sels minéraux (ions), les oses (glucose), les acides aminés et les vitamines hydrosolubles passent dans les capillaires sanguins. Ils rejoignent la veine porte, qui les conduit au foie, puis au cœur.\n- Voie lymphatique : les acides gras, le glycérol et les vitamines liposolubles passent dans le chylifère central. La lymphe chargée de graisses rejoint ensuite le sang près du cœur.\n- Activité d’application : voie sanguine → eau (a), oses (c), vitamines hydrosolubles (d), acides aminés (f), sels minéraux (h) ; voie lymphatique → glycérol (b), vitamines liposolubles (e), acides gras (g).",
      "keyRule": "Voie sanguine (capillaires → veine porte → foie) : eau, ions, oses, acides aminés, vitamines hydrosolubles. Voie lymphatique (chylifère) : acides gras, glycérol, vitamines liposolubles.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les nutriments",
        "statement": "Par quelle voie passent le glucose et les acides gras ?",
        "methodSteps": [
          "Le glucose est soluble dans l’eau : il passe dans les capillaires sanguins.",
          "Les acides gras, produits de la digestion des graisses, passent dans le chylifère."
        ],
        "conclusion": "Glucose : voie sanguine ; acides gras : voie lymphatique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Voie sanguine",
          "stepTheme": "Absorption",
          "stepTitle": "La voie sanguine",
          "paragraphText": "L’**eau**, les **ions**, les **oses**, les **acides aminés** et les **vitamines hydrosolubles** passent dans les **capillaires sanguins**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p02_q1",
            "type": "mcq",
            "prompt": "Par quelle voie le glucose absorbé dans l’intestin grêle rejoint-il l’organisme ?",
            "options": [
              "Par la voie sanguine (capillaires sanguins)",
              "Par la voie lymphatique (chylifère)",
              "Par l’urine",
              "Par les poumons"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : a, c, d, f, h → voie sanguine."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les deux voies de l’absorption",
            "caption": "Voie sanguine : intestin → veine porte → foie → cœur. Voie lymphatique : intestin → vaisseaux lymphatiques → rejoignent le sang près du cœur.",
            "svgContent": "<svg viewBox=\"0 0 560 160\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Voie sanguine par la veine porte et le foie ; voie lymphatique jusqu’au sang près du cœur\"><rect x=\"20\" y=\"60\" width=\"120\" height=\"44\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"80\" y=\"86\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Intestin grêle</text><line x1=\"140\" y1=\"70\" x2=\"201.7\" y2=\"43.5\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"210,40 199.8,38.9 203.7,48.1\" fill=\"#EF4444\"/><rect x=\"214\" y=\"18\" width=\"110\" height=\"40\" rx=\"10\" fill=\"#EF4444\" fill-opacity=\"0.14\" stroke=\"#EF4444\" stroke-width=\"2\"/><text x=\"269\" y=\"42\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Veine porte</text><line x1=\"326\" y1=\"38\" x2=\"351.0\" y2=\"38.0\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"360,38 351.0,33.0 351.0,43.0\" fill=\"#EF4444\"/><rect x=\"364\" y=\"18\" width=\"70\" height=\"40\" rx=\"10\" fill=\"#8B5CF6\" fill-opacity=\"0.14\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><text x=\"399\" y=\"42\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Foie</text><line x1=\"436\" y1=\"38\" x2=\"463.4\" y2=\"63.8\" stroke=\"#EF4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"470,70 466.9,60.2 460.0,67.5\" fill=\"#EF4444\"/><line x1=\"140\" y1=\"94\" x2=\"201.6\" y2=\"118.7\" stroke=\"#F59E0B\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"210,122 203.5,114.0 199.8,123.3\" fill=\"#F59E0B\"/><rect x=\"214\" y=\"104\" width=\"220\" height=\"40\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"324\" y=\"128\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Vaisseaux lymphatiques</text><line x1=\"436\" y1=\"122\" x2=\"462.9\" y2=\"101.5\" stroke=\"#F59E0B\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"470,96 459.8,97.5 465.9,105.4\" fill=\"#F59E0B\"/><rect x=\"472\" y=\"60\" width=\"80\" height=\"44\" rx=\"10\" fill=\"#EF4444\" fill-opacity=\"0.14\" stroke=\"#EF4444\" stroke-width=\"2\"/><text x=\"512\" y=\"86\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Cœur</text><text x=\"270\" y=\"76\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#EF4444\">eau, ions, oses, acides aminés</text><text x=\"270\" y=\"156\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#F59E0B\">acides gras, glycérol, vitamines liposolubles</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Voie lymphatique",
          "stepTheme": "Absorption",
          "stepTitle": "La voie lymphatique",
          "paragraphText": "Les **acides gras**, le **glycérol** et les **vitamines liposolubles** passent dans le **chylifère** : c’est la **voie lymphatique**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p02_q2",
            "type": "mcq",
            "prompt": "Quels nutriments empruntent la voie lymphatique ?",
            "options": [
              "Les acides gras, le glycérol et les vitamines liposolubles",
              "Le glucose et les acides aminés",
              "L’eau et les sels minéraux",
              "Les vitamines hydrosolubles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : b, e, g → voie lymphatique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Veine porte",
          "stepTheme": "Trajet",
          "stepTitle": "Direction le foie",
          "paragraphText": "Les nutriments de la voie sanguine rejoignent la **veine porte**, qui les conduit d’abord au **foie**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p02_q3",
            "type": "mcq",
            "prompt": "Après leur absorption, vers quel organe les nutriments de la voie sanguine sont-ils d’abord conduits par la veine porte ?",
            "options": [
              "Le foie",
              "Le cerveau",
              "Le rein",
              "L’estomac"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le foie stocke le glucose sous forme de glycogène."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Acides aminés",
          "stepTheme": "Classer",
          "stepTitle": "Les acides aminés",
          "paragraphText": "Les **acides aminés**, solubles dans l’eau, empruntent la **voie sanguine**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p02_q4",
            "type": "mcq",
            "prompt": "Par quelle voie les acides aminés issus de la digestion des protéines sont-ils absorbés ?",
            "options": [
              "Par la voie sanguine",
              "Par la voie lymphatique",
              "Ils ne sont pas absorbés",
              "Par la bile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme les oses et les ions."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Vitamines",
          "stepTheme": "Classer",
          "stepTitle": "Hydrosolubles ou liposolubles ?",
          "paragraphText": "Les vitamines **hydrosolubles** (solubles dans l’eau) passent par le **sang** ; les vitamines **liposolubles** (solubles dans les graisses) passent par la **lymphe**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p02_q5",
            "type": "mcq",
            "prompt": "Par quelle voie les vitamines liposolubles (solubles dans les graisses) sont-elles absorbées ?",
            "options": [
              "Par la voie lymphatique, avec les graisses",
              "Par la voie sanguine, avec le glucose",
              "Par l’urine",
              "Elles ne sont pas absorbées"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lipo : graisse ; hydro : eau."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Lymphe",
          "stepTheme": "Trajet",
          "stepTitle": "La lymphe rejoint le sang",
          "paragraphText": "La **lymphe** chargée de graisses rejoint finalement le **sang** près du **cœur**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p02_q6",
            "type": "mcq",
            "prompt": "Que deviennent les graisses absorbées par le chylifère ?",
            "options": [
              "Elles sont transportées par la lymphe, qui rejoint le sang près du cœur",
              "Elles restent dans l’intestin",
              "Elles sont éliminées dans l’urine",
              "Elles vont directement au cerveau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux voies finissent dans le sang."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p02_q1",
          "type": "mcq",
          "prompt": "Par quelle voie le glucose absorbé dans l’intestin grêle rejoint-il l’organisme ?",
          "options": [
            "Par la voie sanguine (capillaires sanguins)",
            "Par la voie lymphatique (chylifère)",
            "Par l’urine",
            "Par les poumons"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : a, c, d, f, h → voie sanguine."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p02_q2",
          "type": "mcq",
          "prompt": "Quels nutriments empruntent la voie lymphatique ?",
          "options": [
            "Les acides gras, le glycérol et les vitamines liposolubles",
            "Le glucose et les acides aminés",
            "L’eau et les sels minéraux",
            "Les vitamines hydrosolubles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : b, e, g → voie lymphatique."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p02_q3",
          "type": "mcq",
          "prompt": "Après leur absorption, vers quel organe les nutriments de la voie sanguine sont-ils d’abord conduits par la veine porte ?",
          "options": [
            "Le foie",
            "Le cerveau",
            "Le rein",
            "L’estomac"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le foie stocke le glucose sous forme de glycogène."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p02_q4",
          "type": "mcq",
          "prompt": "Par quelle voie les acides aminés issus de la digestion des protéines sont-ils absorbés ?",
          "options": [
            "Par la voie sanguine",
            "Par la voie lymphatique",
            "Ils ne sont pas absorbés",
            "Par la bile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme les oses et les ions."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p02_q5",
          "type": "mcq",
          "prompt": "Par quelle voie les vitamines liposolubles (solubles dans les graisses) sont-elles absorbées ?",
          "options": [
            "Par la voie lymphatique, avec les graisses",
            "Par la voie sanguine, avec le glucose",
            "Par l’urine",
            "Elles ne sont pas absorbées"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lipo : graisse ; hydro : eau."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p02_q6",
          "type": "mcq",
          "prompt": "Que deviennent les graisses absorbées par le chylifère ?",
          "options": [
            "Elles sont transportées par la lymphe, qui rejoint le sang près du cœur",
            "Elles restent dans l’intestin",
            "Elles sont éliminées dans l’urine",
            "Elles vont directement au cerveau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux voies finissent dans le sang."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l12_absorption_nutriments_p03",
      "order": 3,
      "title": "Le transport passif",
      "summary": "Le fructose traverse la paroi par diffusion.",
      "conceptExplanation": "- On prépare de petits sacs avec des morceaux d’intestin de hamster, fermés aux deux bouts, et on les plonge dans un bain physiologique oxygéné. La solution interne représente le contenu intestinal ; le bain représente le milieu intérieur (sang, lymphe).\n- Fructose : il passe du compartiment le plus concentré vers le moins concentré, à la même vitesse (44) dans les deux sens.\n- La paroi se comporte alors comme une membrane perméable : le fructose la traverse par dialyse (diffusion), un transport passif qui ne demande pas d’énergie et suit le sens des concentrations.\n- L’eau traverse aussi la paroi par un transport passif, l’osmose, du milieu le moins concentré vers le plus concentré.\n- Exercice 1 : l’absorption des nutriments se fait soit par transport actif, soit par transport passif (1-c) ; le transport passif se fait par osmose et par dialyse (2-a et 2-b).",
      "keyRule": "Transport passif (dialyse, osmose) : sans énergie, du plus concentré vers le moins concentré, à la même vitesse dans les deux sens.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître un transport passif",
        "statement": "Le fructose traverse la paroi intestinale à la même vitesse dans les deux sens. Conclusion ?",
        "methodSteps": [
          "Il suit seulement la différence de concentration.",
          "La paroi ne favorise aucun sens."
        ],
        "conclusion": "Le fructose traverse par dialyse : c’est un transport passif."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Sacs",
          "stepTheme": "Protocole",
          "stepTitle": "Les sacs d’intestin",
          "paragraphText": "Dans l’expérience, la **solution interne** du sac représente le **contenu intestinal** et le **bain** représente le **milieu intérieur** (sang, lymphe).",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p03_q1",
            "type": "mcq",
            "prompt": "Dans l’expérience des sacs d’intestin de hamster, que représente le bain physiologique dans lequel on plonge les sacs ?",
            "options": [
              "Le milieu intérieur (sang et lymphe)",
              "Le contenu intestinal",
              "Le suc gastrique",
              "L’urine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La solution interne représente le contenu de l’intestin."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Expérience 1 : sacs d’intestin de hamster",
            "caption": "Bain physiologique oxygéné ; vitesse de passage des sucres en une heure (unités arbitraires).",
            "tableData": {
              "headers": [
                "Sac",
                "Solution interne",
                "Bain",
                "Passage observé"
              ],
              "rows": [
                [
                  "1",
                  "Sans fructose",
                  "Avec fructose",
                  "Fructose : bain → intérieur, 44"
                ],
                [
                  "2",
                  "Avec fructose",
                  "Sans fructose",
                  "Fructose : intérieur → bain, 44"
                ],
                [
                  "3",
                  "Sans glucose",
                  "Avec glucose",
                  "Glucose : bain → intérieur, 5"
                ],
                [
                  "4",
                  "Avec glucose",
                  "Sans glucose",
                  "Glucose : intérieur → bain, 100"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Fructose",
          "stepTheme": "Expérience 1",
          "stepTitle": "Même vitesse dans les deux sens",
          "paragraphText": "Le **fructose** passe du plus concentré vers le moins concentré, à la **même vitesse (44)** dans les **deux sens**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p03_q2",
            "type": "mcq",
            "prompt": "Le fructose traverse la paroi d’un sac d’intestin à la vitesse de 44, aussi bien de l’intérieur vers le bain que du bain vers l’intérieur. Que peut-on en déduire ?",
            "options": [
              "La paroi se comporte comme une membrane perméable : le fructose passe par dialyse",
              "Le fructose est transporté activement vers le sang",
              "Le fructose ne traverse pas la paroi",
              "La paroi bloque le fructose dans un sens"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Rien ne favorise un sens plutôt que l’autre."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Dialyse",
          "stepTheme": "Notion",
          "stepTitle": "La dialyse",
          "paragraphText": "La **dialyse** (diffusion) est le passage d’une substance dissoute à travers une membrane, du milieu le **plus concentré** vers le **moins concentré**, **sans énergie**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p03_q3",
            "type": "mcq",
            "prompt": "Qu’est-ce que la dialyse ?",
            "options": [
              "Le passage d’une substance dissoute, sans énergie, du milieu le plus concentré vers le moins concentré",
              "Le passage d’une substance contre sa concentration grâce à de l’énergie",
              "La digestion des protéines",
              "La fabrication du glucose"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est un transport passif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Osmose",
          "stepTheme": "Notion",
          "stepTitle": "L’osmose",
          "paragraphText": "L’**osmose** est le passage de l’**eau** à travers une membrane, du milieu le **moins concentré** vers le **plus concentré**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p03_q4",
            "type": "mcq",
            "prompt": "Par quel transport passif l’eau traverse-t-elle la paroi intestinale ?",
            "options": [
              "Par osmose",
              "Par transport actif",
              "Par évaporation",
              "Par la voie lymphatique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 1 : 2-a et 2-b."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Sans énergie",
          "stepTheme": "Notion",
          "stepTitle": "Pourquoi « passif » ?",
          "paragraphText": "Un transport est **passif** quand il ne demande **pas d’énergie** : il suit simplement la **différence de concentration**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p03_q5",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que la dialyse est un transport passif ?",
            "options": [
              "Parce qu’elle ne consomme pas d’énergie et suit la différence de concentration",
              "Parce qu’elle est très lente",
              "Parce qu’elle a besoin d’oxygène",
              "Parce qu’elle se fait contre la concentration"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle s’arrête quand les concentrations sont égales."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Exercice 1",
          "stepTheme": "Bilan",
          "stepTitle": "Actif ou passif ?",
          "paragraphText": "L’absorption des nutriments se fait **soit par transport actif**, **soit par transport passif**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p03_q6",
            "type": "mcq",
            "prompt": "Comment se fait l’absorption des nutriments par la paroi intestinale ?",
            "options": [
              "Soit par transport actif, soit par transport passif",
              "Uniquement par transport passif",
              "Uniquement par transport actif",
              "Uniquement par évaporation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : 1-c."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p03_q1",
          "type": "mcq",
          "prompt": "Dans l’expérience des sacs d’intestin de hamster, que représente le bain physiologique dans lequel on plonge les sacs ?",
          "options": [
            "Le milieu intérieur (sang et lymphe)",
            "Le contenu intestinal",
            "Le suc gastrique",
            "L’urine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La solution interne représente le contenu de l’intestin."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p03_q2",
          "type": "mcq",
          "prompt": "Le fructose traverse la paroi d’un sac d’intestin à la vitesse de 44, aussi bien de l’intérieur vers le bain que du bain vers l’intérieur. Que peut-on en déduire ?",
          "options": [
            "La paroi se comporte comme une membrane perméable : le fructose passe par dialyse",
            "Le fructose est transporté activement vers le sang",
            "Le fructose ne traverse pas la paroi",
            "La paroi bloque le fructose dans un sens"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Rien ne favorise un sens plutôt que l’autre."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p03_q3",
          "type": "mcq",
          "prompt": "Qu’est-ce que la dialyse ?",
          "options": [
            "Le passage d’une substance dissoute, sans énergie, du milieu le plus concentré vers le moins concentré",
            "Le passage d’une substance contre sa concentration grâce à de l’énergie",
            "La digestion des protéines",
            "La fabrication du glucose"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est un transport passif."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p03_q4",
          "type": "mcq",
          "prompt": "Par quel transport passif l’eau traverse-t-elle la paroi intestinale ?",
          "options": [
            "Par osmose",
            "Par transport actif",
            "Par évaporation",
            "Par la voie lymphatique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 1 : 2-a et 2-b."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p03_q5",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que la dialyse est un transport passif ?",
          "options": [
            "Parce qu’elle ne consomme pas d’énergie et suit la différence de concentration",
            "Parce qu’elle est très lente",
            "Parce qu’elle a besoin d’oxygène",
            "Parce qu’elle se fait contre la concentration"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle s’arrête quand les concentrations sont égales."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p03_q6",
          "type": "mcq",
          "prompt": "Comment se fait l’absorption des nutriments par la paroi intestinale ?",
          "options": [
            "Soit par transport actif, soit par transport passif",
            "Uniquement par transport passif",
            "Uniquement par transport actif",
            "Uniquement par évaporation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : 1-c."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l12_absorption_nutriments_p04",
      "order": 4,
      "title": "Le transport actif du glucose",
      "summary": "Un transport orienté qui consomme de l’énergie.",
      "conceptExplanation": "- Glucose (expérience 1) : il passe 20 fois plus vite de l’intérieur du sac vers le bain (100) que dans l’autre sens (5). Glucose et fructose ont pourtant la même masse molaire : la dialyse seule ne peut pas expliquer cette différence.\n- Expérience 2 : on met les sacs dans la même solution que celle qui les remplit (8 mmol/L de glucose). Sous azote, rien ne change (8 et 8). Sous oxygène, la solution interne descend à 2 mmol/L et le bain monte à 14 mmol/L, soit 7 fois plus.\n- Sous oxygène, le glucose est donc passé de l’intérieur vers le bain alors que les concentrations étaient égales, puis contre la différence de concentration : c’est un transport actif.\n- Le transport actif utilise de l’énergie fournie par la respiration (d’où le besoin d’oxygène) et des protéines de transport des cellules épithéliales. Il fait passer le glucose du contenu intestinal vers le sang, même quand le sang en est plus riche.\n- Situation d’évaluation : deux types de transport : passif (dialyse, osmose) et actif. Les voies sont la voie sanguine et la voie lymphatique.\n- Correction du document : son analyse dit qu’il y a « 2 mmol/L dans le bain et 14 mmol/L dans la solution interne ». C’est l’inverse, d’après son tableau et sa propre interprétation : 2 mmol/L dans la solution interne et 14 mmol/L dans le bain.",
      "keyRule": "Transport actif : orienté (intestin → sang), contre la différence de concentration, consomme de l’énergie (respiration, O₂) grâce à des protéines de transport.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter l’expérience sous oxygène",
        "statement": "Sous oxygène, l’intérieur du sac passe de 8 à 2 mmol/L et le bain de 8 à 14 mmol/L. Interprète.",
        "methodSteps": [
          "Le glucose est passé de l’intérieur vers le bain, jusqu’à être 7 fois plus concentré dehors.",
          "Il a donc traversé contre la différence de concentration, ce qui demande de l’énergie, fournie grâce à l’oxygène."
        ],
        "conclusion": "Le glucose est absorbé par transport actif."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "100 contre 5",
          "stepTheme": "Expérience 1",
          "stepTitle": "Le glucose préfère un sens",
          "paragraphText": "Le **glucose** passe **20 fois plus vite** de l’intérieur vers le bain (**100**) que dans l’autre sens (**5**).",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p04_q1",
            "type": "mcq",
            "prompt": "Dans des sacs d’intestin, le glucose passe de l’intérieur vers le bain à la vitesse de 100, et du bain vers l’intérieur à la vitesse de 5. Que montre ce résultat ?",
            "options": [
              "La paroi favorise le passage du glucose du contenu intestinal vers le milieu intérieur",
              "Le glucose passe par simple dialyse",
              "Le glucose ne traverse pas la paroi",
              "La paroi bloque le glucose vers le sang"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le fructose, lui, passe à la même vitesse dans les deux sens."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Azote",
          "stepTheme": "Expérience 2",
          "stepTitle": "Sans oxygène, rien ne bouge",
          "paragraphText": "Sous **azote** (sans oxygène), les concentrations restent égales (**8** et **8 mmol/L**) : aucun passage.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p04_q2",
            "type": "mcq",
            "prompt": "Un sac d’intestin contenant 8 mmol/L de glucose est plongé dans un bain à 8 mmol/L, sous azote. Une heure plus tard, les deux contiennent toujours 8 mmol/L. Pourquoi ?",
            "options": [
              "Concentrations égales et pas d’oxygène : ni diffusion, ni transport actif",
              "Le glucose a été détruit",
              "L’azote a bloqué la dialyse du fructose",
              "Le glucose a été transformé en amidon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il manque l’énergie de la respiration."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Expérience 2 : glucose, oxygène et azote",
            "caption": "Au départ, 8 mmol/L de glucose dedans et dehors.",
            "tableData": {
              "headers": [
                "Conditions",
                "Solution interne",
                "Bain physiologique"
              ],
              "rows": [
                [
                  "Sac sous azote",
                  "8 mmol/L",
                  "8 mmol/L"
                ],
                [
                  "Sac sous oxygène",
                  "2 mmol/L",
                  "14 mmol/L"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Oxygène",
          "stepTheme": "Expérience 2",
          "stepTitle": "Avec oxygène, le glucose passe",
          "paragraphText": "Sous **oxygène**, l’intérieur passe à **2 mmol/L** et le bain à **14 mmol/L** : le glucose est passé **contre** la différence de concentration.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p04_q3",
            "type": "mcq",
            "prompt": "Sous oxygène, un sac d’intestin passe de 8 à 2 mmol/L de glucose et son bain de 8 à 14 mmol/L. Comment le glucose a-t-il traversé la paroi ?",
            "options": [
              "Par transport actif, contre la différence de concentration",
              "Par simple dialyse",
              "Par osmose",
              "Il n’a pas traversé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le bain devient 7 fois plus concentré."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Inversion",
          "stepTheme": "Erreur du document",
          "stepTitle": "2 et 14 mmol/L : où ?",
          "paragraphText": "L’analyse du document dit « **2** mmol/L dans le **bain** et **14** dans la solution interne ». D’après son tableau et sa propre interprétation, c’est l’inverse : **2 dedans**, **14 dans le bain**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p04_q4",
            "type": "mcq",
            "prompt": "Dans l’expérience sous oxygène, où la concentration en glucose atteint-elle 14 mmol/L ?",
            "options": [
              "Dans le bain physiologique (milieu intérieur)",
              "Dans la solution interne du sac",
              "Dans les deux compartiments",
              "Nulle part"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le glucose va vers le milieu intérieur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Transport actif",
          "stepTheme": "Notion",
          "stepTitle": "Le transport actif",
          "paragraphText": "Le **transport actif** fait passer une substance **contre** la différence de concentration ; il **consomme de l’énergie** (respiration) et utilise des **protéines de transport**.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p04_q5",
            "type": "mcq",
            "prompt": "Pourquoi le transport actif du glucose a-t-il besoin d’oxygène ?",
            "options": [
              "Parce que l’oxygène permet la respiration, qui fournit l’énergie nécessaire au transport",
              "Parce que l’oxygène dissout le glucose",
              "Parce que l’oxygène est un nutriment",
              "Parce que l’oxygène bloque la dialyse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans énergie, pas de transport actif."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Intérêt",
          "stepTheme": "Conclusion",
          "stepTitle": "Absorber même quand le sang est riche",
          "paragraphText": "Grâce au transport actif, l’intestin absorbe le glucose **même quand** le sang en contient **déjà plus** que le contenu intestinal : rien n’est perdu.",
          "exercise": {
            "id": "premiere_d_svt_l12_absorption_nutriments_p04_q6",
            "type": "mcq",
            "prompt": "Quel est l’intérêt du transport actif du glucose dans l’intestin ?",
            "options": [
              "Absorber le glucose même quand le sang en contient déjà plus que l’intestin",
              "Rejeter le glucose dans l’intestin",
              "Économiser l’oxygène",
              "Digérer l’amidon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dialyse seule s’arrêterait à l’égalité des concentrations."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p04_q1",
          "type": "mcq",
          "prompt": "Dans des sacs d’intestin, le glucose passe de l’intérieur vers le bain à la vitesse de 100, et du bain vers l’intérieur à la vitesse de 5. Que montre ce résultat ?",
          "options": [
            "La paroi favorise le passage du glucose du contenu intestinal vers le milieu intérieur",
            "Le glucose passe par simple dialyse",
            "Le glucose ne traverse pas la paroi",
            "La paroi bloque le glucose vers le sang"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le fructose, lui, passe à la même vitesse dans les deux sens."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p04_q2",
          "type": "mcq",
          "prompt": "Un sac d’intestin contenant 8 mmol/L de glucose est plongé dans un bain à 8 mmol/L, sous azote. Une heure plus tard, les deux contiennent toujours 8 mmol/L. Pourquoi ?",
          "options": [
            "Concentrations égales et pas d’oxygène : ni diffusion, ni transport actif",
            "Le glucose a été détruit",
            "L’azote a bloqué la dialyse du fructose",
            "Le glucose a été transformé en amidon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il manque l’énergie de la respiration."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p04_q3",
          "type": "mcq",
          "prompt": "Sous oxygène, un sac d’intestin passe de 8 à 2 mmol/L de glucose et son bain de 8 à 14 mmol/L. Comment le glucose a-t-il traversé la paroi ?",
          "options": [
            "Par transport actif, contre la différence de concentration",
            "Par simple dialyse",
            "Par osmose",
            "Il n’a pas traversé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bain devient 7 fois plus concentré."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p04_q4",
          "type": "mcq",
          "prompt": "Dans l’expérience sous oxygène, où la concentration en glucose atteint-elle 14 mmol/L ?",
          "options": [
            "Dans le bain physiologique (milieu intérieur)",
            "Dans la solution interne du sac",
            "Dans les deux compartiments",
            "Nulle part"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le glucose va vers le milieu intérieur."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p04_q5",
          "type": "mcq",
          "prompt": "Pourquoi le transport actif du glucose a-t-il besoin d’oxygène ?",
          "options": [
            "Parce que l’oxygène permet la respiration, qui fournit l’énergie nécessaire au transport",
            "Parce que l’oxygène dissout le glucose",
            "Parce que l’oxygène est un nutriment",
            "Parce que l’oxygène bloque la dialyse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans énergie, pas de transport actif."
        },
        {
          "id": "premiere_d_svt_l12_absorption_nutriments_p04_q6",
          "type": "mcq",
          "prompt": "Quel est l’intérêt du transport actif du glucose dans l’intestin ?",
          "options": [
            "Absorber le glucose même quand le sang en contient déjà plus que l’intestin",
            "Rejeter le glucose dans l’intestin",
            "Économiser l’oxygène",
            "Digérer l’amidon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dialyse seule s’arrêterait à l’égalité des concentrations."
        }
      ]
    }
  ]
};
