import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère D_L3_LA GAMETOGENESE.pdf (Côte d’Ivoire – École numérique ; durée non indiquée, 12 h comme la leçon de 1re C) ». Première D (programme propre à la 1re D).
// Fichier généré (scratchpad build_1re_d_svt.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_D_L03_GAMETOGENESE: CurriculumChapter = {
  "id": "premiere_d_svt_l03_gametogenese",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "order": 3,
  "title": "Leçon 3 : La gamétogenèse",
  "summary": "Étapes de la spermatogenèse et de l’ovogenèse, mécanisme de la méiose, brassages interchromosomique et intrachromosomique, aberrations chromosomiques (nombre et structure), évolution du stock d’ovocytes chez la femme.",
  "officialVolumeHours": 12,
  "contentVersion": 2,
  "source": "SVT 1ère D_L3_LA GAMETOGENESE.pdf (Côte d’Ivoire – École numérique ; durée non indiquée, 12 h comme la leçon de 1re C)",
  "points": [
    {
      "id": "premiere_d_svt_l03_gametogenese_p01",
      "order": 1,
      "title": "La spermatogenèse",
      "summary": "Multiplication, accroissement, maturation, différenciation.",
      "conceptExplanation": "Situation : pendant la récréation, des élèves de 1re D débattent de la puberté (pollutions nocturnes du garçon, règles de la fille). Ils veulent décrire la formation des gamètes, son mécanisme et l’importance de la méiose.\n- La spermatogenèse se déroule dans les tubes séminifères, de façon continue, de la puberté jusqu’à un âge avancé.\n- Multiplication : à la périphérie du tube, les spermatogonies (2n) se divisent par mitoses et donnent de nombreuses spermatogonies.\n- Accroissement : certaines spermatogonies grossissent et deviennent des spermatocytes I (2n).\n- Maturation : chaque spermatocyte I subit la méiose. La 1re division donne 2 spermatocytes II (n), la 2e division donne 4 spermatides (n).\n- Différenciation (spermiogenèse) : sans se diviser, chaque spermatide se transforme en spermatozoïde (tête avec acrosome et noyau, pièce intermédiaire riche en mitochondries, flagelle).",
      "keyRule": "Spermatogenèse : multiplication (mitoses) → accroissement (spermatocyte I) → maturation (méiose : 4 spermatides n) → différenciation (4 spermatozoïdes).",
      "formulas": [],
      "workedExample": {
        "title": "Compter les cellules",
        "statement": "Combien de spermatozoïdes un spermatocyte I peut-il donner ?",
        "methodSteps": [
          "1re division de méiose : 1 spermatocyte I → 2 spermatocytes II.",
          "2e division : 2 → 4 spermatides, qui deviennent 4 spermatozoïdes."
        ],
        "conclusion": "Un spermatocyte I donne 4 spermatozoïdes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Quatre phases",
          "stepTheme": "Spermatogenèse",
          "stepTitle": "Les étapes de la spermatogenèse",
          "paragraphText": "La **spermatogenèse** comprend **4 phases** : **multiplication**, **accroissement**, **maturation** et **différenciation**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p01_q1",
            "type": "mcq",
            "prompt": "Quelles sont, dans l’ordre, les quatre phases de la spermatogenèse ?",
            "options": [
              "Multiplication, accroissement, maturation, différenciation",
              "Maturation, multiplication, différenciation, accroissement",
              "Accroissement, multiplication, maturation, différenciation",
              "Différenciation, maturation, accroissement, multiplication"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle se fait dans les tubes séminifères."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les quatre phases de la spermatogenèse",
            "caption": "Un spermatocyte I (2n) donne, par méiose, 4 spermatides (n) qui se différencient en 4 spermatozoïdes.",
            "svgContent": "<svg viewBox=\"0 0 560 312\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Spermatogenèse : multiplication des spermatogonies, accroissement en spermatocyte I, méiose donnant 2 spermatocytes II puis 4 spermatides, différenciation en 4 spermatozoïdes\"><line x1=\"10\" y1=\"105\" x2=\"550\" y2=\"105\" stroke=\"#94A3B8\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"5 5\"/><line x1=\"10\" y1=\"158\" x2=\"550\" y2=\"158\" stroke=\"#94A3B8\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"5 5\"/><line x1=\"10\" y1=\"255\" x2=\"550\" y2=\"255\" stroke=\"#94A3B8\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"5 5\"/><circle cx=\"280\" cy=\"35\" r=\"9\" fill=\"#3B82F6\" fill-opacity=\"0.3\" stroke=\"#3B82F6\" stroke-width=\"1.8\"/><circle cx=\"280\" cy=\"35\" r=\"3.0\" fill=\"#3B82F6\"/><line x1=\"274\" y1=\"43\" x2=\"245.0\" y2=\"66.4\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"238,72 248.1,70.2 241.9,62.5\" fill=\"#94A3B8\"/><line x1=\"286\" y1=\"43\" x2=\"315.0\" y2=\"66.4\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"322,72 318.1,62.5 311.9,70.2\" fill=\"#94A3B8\"/><circle cx=\"230\" cy=\"80\" r=\"9\" fill=\"#3B82F6\" fill-opacity=\"0.3\" stroke=\"#3B82F6\" stroke-width=\"1.8\"/><circle cx=\"230\" cy=\"80\" r=\"3.0\" fill=\"#3B82F6\"/><circle cx=\"330\" cy=\"80\" r=\"9\" fill=\"#3B82F6\" fill-opacity=\"0.3\" stroke=\"#3B82F6\" stroke-width=\"1.8\"/><circle cx=\"330\" cy=\"80\" r=\"3.0\" fill=\"#3B82F6\"/><line x1=\"326\" y1=\"90\" x2=\"299.1\" y2=\"110.5\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"292,116 302.2,114.5 296.1,106.6\" fill=\"#94A3B8\"/><circle cx=\"280\" cy=\"130\" r=\"16\" fill=\"#8B5CF6\" fill-opacity=\"0.3\" stroke=\"#8B5CF6\" stroke-width=\"1.8\"/><circle cx=\"280\" cy=\"130\" r=\"5.3\" fill=\"#8B5CF6\"/><line x1=\"270\" y1=\"145\" x2=\"235.7\" y2=\"166.3\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"228,171 238.3,170.5 233.0,162.0\" fill=\"#94A3B8\"/><line x1=\"290\" y1=\"145\" x2=\"324.3\" y2=\"166.3\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"332,171 327.0,162.0 321.7,170.5\" fill=\"#94A3B8\"/><circle cx=\"220\" cy=\"185\" r=\"12\" fill=\"#F59E0B\" fill-opacity=\"0.3\" stroke=\"#F59E0B\" stroke-width=\"1.8\"/><circle cx=\"220\" cy=\"185\" r=\"4.0\" fill=\"#F59E0B\"/><circle cx=\"340\" cy=\"185\" r=\"12\" fill=\"#F59E0B\" fill-opacity=\"0.3\" stroke=\"#F59E0B\" stroke-width=\"1.8\"/><circle cx=\"340\" cy=\"185\" r=\"4.0\" fill=\"#F59E0B\"/><line x1=\"214\" y1=\"197\" x2=\"199.2\" y2=\"217.7\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"194,225 203.3,220.6 195.2,214.8\" fill=\"#94A3B8\"/><line x1=\"226\" y1=\"197\" x2=\"240.8\" y2=\"217.7\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"246,225 244.8,214.8 236.7,220.6\" fill=\"#94A3B8\"/><line x1=\"334\" y1=\"197\" x2=\"319.2\" y2=\"217.7\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"314,225 323.3,220.6 315.2,214.8\" fill=\"#94A3B8\"/><line x1=\"346\" y1=\"197\" x2=\"360.8\" y2=\"217.7\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"366,225 364.8,214.8 356.7,220.6\" fill=\"#94A3B8\"/><circle cx=\"190\" cy=\"235\" r=\"8\" fill=\"#10B981\" fill-opacity=\"0.3\" stroke=\"#10B981\" stroke-width=\"1.8\"/><circle cx=\"190\" cy=\"235\" r=\"2.7\" fill=\"#10B981\"/><line x1=\"190\" y1=\"244\" x2=\"190.0\" y2=\"253.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"190,262 195.0,253.0 185.0,253.0\" fill=\"#94A3B8\"/><ellipse cx=\"190\" cy=\"271\" rx=\"5\" ry=\"7\" fill=\"#EC4899\" fill-opacity=\"0.6\" stroke=\"#EC4899\" stroke-width=\"1.4\"/><path d=\"M190,278 Q196,286 190,294 T190,306\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"1.6\"/><circle cx=\"250\" cy=\"235\" r=\"8\" fill=\"#10B981\" fill-opacity=\"0.3\" stroke=\"#10B981\" stroke-width=\"1.8\"/><circle cx=\"250\" cy=\"235\" r=\"2.7\" fill=\"#10B981\"/><line x1=\"250\" y1=\"244\" x2=\"250.0\" y2=\"253.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"250,262 255.0,253.0 245.0,253.0\" fill=\"#94A3B8\"/><ellipse cx=\"250\" cy=\"271\" rx=\"5\" ry=\"7\" fill=\"#EC4899\" fill-opacity=\"0.6\" stroke=\"#EC4899\" stroke-width=\"1.4\"/><path d=\"M250,278 Q256,286 250,294 T250,306\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"1.6\"/><circle cx=\"310\" cy=\"235\" r=\"8\" fill=\"#10B981\" fill-opacity=\"0.3\" stroke=\"#10B981\" stroke-width=\"1.8\"/><circle cx=\"310\" cy=\"235\" r=\"2.7\" fill=\"#10B981\"/><line x1=\"310\" y1=\"244\" x2=\"310.0\" y2=\"253.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"310,262 315.0,253.0 305.0,253.0\" fill=\"#94A3B8\"/><ellipse cx=\"310\" cy=\"271\" rx=\"5\" ry=\"7\" fill=\"#EC4899\" fill-opacity=\"0.6\" stroke=\"#EC4899\" stroke-width=\"1.4\"/><path d=\"M310,278 Q316,286 310,294 T310,306\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"1.6\"/><circle cx=\"370\" cy=\"235\" r=\"8\" fill=\"#10B981\" fill-opacity=\"0.3\" stroke=\"#10B981\" stroke-width=\"1.8\"/><circle cx=\"370\" cy=\"235\" r=\"2.7\" fill=\"#10B981\"/><line x1=\"370\" y1=\"244\" x2=\"370.0\" y2=\"253.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"370,262 375.0,253.0 365.0,253.0\" fill=\"#94A3B8\"/><ellipse cx=\"370\" cy=\"271\" rx=\"5\" ry=\"7\" fill=\"#EC4899\" fill-opacity=\"0.6\" stroke=\"#EC4899\" stroke-width=\"1.4\"/><path d=\"M370,278 Q376,286 370,294 T370,306\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"1.6\"/><text x=\"14\" y=\"52\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">multiplication</text><text x=\"14\" y=\"66\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"600\" fill=\"currentColor\">(mitoses)</text><text x=\"14\" y=\"134\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">accroissement</text><text x=\"14\" y=\"202\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">maturation</text><text x=\"14\" y=\"216\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"600\" fill=\"currentColor\">(méiose)</text><text x=\"14\" y=\"286\" font-size=\"11\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">différenciation</text><text x=\"420\" y=\"62\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"#3B82F6\">spermatogonies (2n)</text><text x=\"420\" y=\"134\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"#8B5CF6\">spermatocyte I (2n)</text><text x=\"420\" y=\"189\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"#F59E0B\">spermatocytes II (n)</text><text x=\"420\" y=\"239\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"#10B981\">spermatides (n)</text><text x=\"420\" y=\"285\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"#EC4899\">spermatozoïdes (n)</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Multiplication",
          "stepTheme": "Phase 1",
          "stepTitle": "Des mitoses",
          "paragraphText": "Les **spermatogonies (2n)** se divisent par **mitoses** : elles deviennent très nombreuses et restent **2n**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p01_q2",
            "type": "mcq",
            "prompt": "Pendant la phase de multiplication de la spermatogenèse, comment les spermatogonies (2n) se divisent-elles ?",
            "options": [
              "Par mitoses, en donnant des spermatogonies 2n",
              "Par méiose, en donnant des cellules n",
              "Par fécondation",
              "Elles ne se divisent pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La mitose conserve le nombre de chromosomes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Accroissement",
          "stepTheme": "Phase 2",
          "stepTitle": "Le spermatocyte I",
          "paragraphText": "Une spermatogonie qui **grossit** devient un **spermatocyte I (2n)**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p01_q3",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la spermatogonie qui a augmenté de volume pendant la phase d’accroissement ?",
            "options": [
              "Un spermatocyte I (2n)",
              "Une spermatide (n)",
              "Un spermatozoïde",
              "Un spermatocyte II (n)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il est prêt pour la méiose."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Maturation",
          "stepTheme": "Phase 3",
          "stepTitle": "La méiose",
          "paragraphText": "Le spermatocyte I subit la **méiose** : **2 spermatocytes II (n)**, puis **4 spermatides (n)**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p01_q4",
            "type": "mcq",
            "prompt": "Combien de spermatides obtient-on à partir d’un spermatocyte I grâce à la méiose ?",
            "options": [
              "Quatre",
              "Deux",
              "Une",
              "Huit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux divisions successives : 1 → 2 → 4."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Spermiogenèse",
          "stepTheme": "Phase 4",
          "stepTitle": "La différenciation",
          "paragraphText": "Sans se diviser, chaque **spermatide** se transforme en **spermatozoïde** : c’est la **différenciation** ou **spermiogenèse**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p01_q5",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la phase où les spermatides se transforment en spermatozoïdes, sans division ?",
            "options": [
              "La différenciation (spermiogenèse)",
              "La multiplication",
              "La méiose",
              "L’ovulation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le noyau se condense, le flagelle se forme."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepBadge": "Spermatozoïde",
          "stepTheme": "Structure",
          "stepTitle": "Le gamète mâle",
          "paragraphText": "Le **spermatozoïde** : une **tête** (acrosome + noyau), une **pièce intermédiaire** (mitochondries) et un **flagelle**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p01_q6",
            "type": "mcq",
            "prompt": "Dans le spermatozoïde, quel est le rôle des nombreuses mitochondries de la pièce intermédiaire ?",
            "options": [
              "Fournir l’énergie nécessaire aux mouvements du flagelle",
              "Contenir les chromosomes",
              "Digérer les enveloppes de l’ovocyte",
              "Produire la testostérone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’acrosome, lui, contient les enzymes."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le spermatozoïde",
            "caption": "Structure et rôle de chaque partie.",
            "tableData": {
              "headers": [
                "Partie",
                "Contenu",
                "Rôle"
              ],
              "rows": [
                [
                  "Tête",
                  "Acrosome et noyau (n chromosomes)",
                  "L’acrosome contient des enzymes pour traverser les enveloppes de l’ovocyte ; le noyau apporte les chromosomes paternels"
                ],
                [
                  "Pièce intermédiaire",
                  "Centriole et nombreuses mitochondries",
                  "Les mitochondries fournissent l’énergie du mouvement"
                ],
                [
                  "Flagelle",
                  "Microtubules",
                  "Assure le déplacement du spermatozoïde"
                ]
              ]
            }
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l03_gametogenese_p01_q1",
          "type": "mcq",
          "prompt": "Quelles sont, dans l’ordre, les quatre phases de la spermatogenèse ?",
          "options": [
            "Multiplication, accroissement, maturation, différenciation",
            "Maturation, multiplication, différenciation, accroissement",
            "Accroissement, multiplication, maturation, différenciation",
            "Différenciation, maturation, accroissement, multiplication"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle se fait dans les tubes séminifères."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p01_q2",
          "type": "mcq",
          "prompt": "Pendant la phase de multiplication de la spermatogenèse, comment les spermatogonies (2n) se divisent-elles ?",
          "options": [
            "Par mitoses, en donnant des spermatogonies 2n",
            "Par méiose, en donnant des cellules n",
            "Par fécondation",
            "Elles ne se divisent pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La mitose conserve le nombre de chromosomes."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p01_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la spermatogonie qui a augmenté de volume pendant la phase d’accroissement ?",
          "options": [
            "Un spermatocyte I (2n)",
            "Une spermatide (n)",
            "Un spermatozoïde",
            "Un spermatocyte II (n)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il est prêt pour la méiose."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p01_q4",
          "type": "mcq",
          "prompt": "Combien de spermatides obtient-on à partir d’un spermatocyte I grâce à la méiose ?",
          "options": [
            "Quatre",
            "Deux",
            "Une",
            "Huit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux divisions successives : 1 → 2 → 4."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p01_q5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la phase où les spermatides se transforment en spermatozoïdes, sans division ?",
          "options": [
            "La différenciation (spermiogenèse)",
            "La multiplication",
            "La méiose",
            "L’ovulation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le noyau se condense, le flagelle se forme."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p01_q6",
          "type": "mcq",
          "prompt": "Dans le spermatozoïde, quel est le rôle des nombreuses mitochondries de la pièce intermédiaire ?",
          "options": [
            "Fournir l’énergie nécessaire aux mouvements du flagelle",
            "Contenir les chromosomes",
            "Digérer les enveloppes de l’ovocyte",
            "Produire la testostérone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’acrosome, lui, contient les enzymes."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l03_gametogenese_p02",
      "order": 2,
      "title": "L’ovogenèse",
      "summary": "Trois phases, un déroulement discontinu, des divisions inégales.",
      "conceptExplanation": "- L’ovogenèse se déroule dans l’ovaire, de façon discontinue, et ne comporte que 3 phases (pas de différenciation).\n- Multiplication (vie embryonnaire) : les ovogonies (2n) se multiplient par de nombreuses mitoses.\n- Accroissement (vie embryonnaire) : chaque ovogonie accumule des réserves et devient un ovocyte I (2n). Entouré de quelques cellules folliculaires, il forme un follicule primordial.\n- Les ovocytes I commencent la méiose avant la naissance mais restent bloqués en prophase I : c’est une longue période de repos, jusqu’à la puberté.\n- Maturation (de la puberté à la ménopause, à chaque cycle) : la 1re division de méiose est très inégale. Elle donne un gros ovocyte II (n) et un tout petit 1er globule polaire (n).\n- Chez la femme, l’ovocyte II libéré à l’ovulation est bloqué en métaphase II. La 2e division ne s’achève que si un spermatozoïde y pénètre : elle donne alors l’ovule (ou ovotide) et le 2e globule polaire. Le 1er globule polaire peut aussi se diviser : 2 ou 3 globules polaires en tout.\n- Corrections du document : son schéma écrit « 1er globule polaire (2n) » ; il est haploïde (n), comme l’ovocyte II. Le même schéma appelle « ovocytes I » les quatre cellules issues des mitoses ; ce sont des ovogonies, qui deviennent des ovocytes I pendant l’accroissement. Enfin, le document présente l’ovotide comme une étape normale ; chez la femme, la 2e division n’a lieu qu’à la fécondation.",
      "keyRule": "Ovogenèse : multiplication et accroissement avant la naissance ; maturation de la puberté à la ménopause. 1 ovocyte I → 1 ovule + 2 ou 3 globules polaires (tous n).",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le mot « discontinu »",
        "statement": "Pourquoi dit-on que l’ovogenèse est discontinue ?",
        "methodSteps": [
          "Elle commence avant la naissance (multiplication, accroissement, début de méiose).",
          "Elle s’arrête en prophase I jusqu’à la puberté, puis reprend pour quelques ovocytes à chaque cycle."
        ],
        "conclusion": "Elle se déroule par étapes séparées par de longues pauses : elle est discontinue."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Trois phases",
          "stepTheme": "Ovogenèse",
          "stepTitle": "Les étapes de l’ovogenèse",
          "paragraphText": "L’**ovogenèse** comprend **3 phases** : **multiplication**, **accroissement** et **maturation**. Il n’y a **pas de différenciation**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p02_q1",
            "type": "mcq",
            "prompt": "Quelles sont les phases de l’ovogenèse ?",
            "options": [
              "Multiplication, accroissement, maturation (sans différenciation)",
              "Multiplication, accroissement, maturation et différenciation",
              "Seulement la maturation",
              "Différenciation et multiplication"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’ovocyte n’a pas besoin de flagelle."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Spermatogenèse et ovogenèse",
            "caption": "Même mécanisme (la méiose), déroulements différents.",
            "tableData": {
              "headers": [
                "",
                "Spermatogenèse",
                "Ovogenèse"
              ],
              "rows": [
                [
                  "Lieu",
                  "Tubes séminifères du testicule",
                  "Follicules de l’ovaire"
                ],
                [
                  "Début",
                  "À la puberté",
                  "Pendant la vie embryonnaire"
                ],
                [
                  "Déroulement",
                  "Continu, jusqu’à un âge avancé",
                  "Discontinu, jusqu’à la ménopause"
                ],
                [
                  "Phases",
                  "4 (avec différenciation)",
                  "3 (pas de différenciation)"
                ],
                [
                  "Une cellule mère donne",
                  "4 spermatozoïdes",
                  "1 ovule et 2 ou 3 globules polaires"
                ],
                [
                  "Taille des cellules filles",
                  "Égale",
                  "Très inégale"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Avant la naissance",
          "stepTheme": "Calendrier",
          "stepTitle": "Une ovogenèse qui commence tôt",
          "paragraphText": "La **multiplication** des ovogonies et leur **accroissement** en ovocytes I ont lieu **avant la naissance**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p02_q2",
            "type": "mcq",
            "prompt": "À quel moment de la vie se déroulent la multiplication des ovogonies et leur accroissement en ovocytes I ?",
            "options": [
              "Avant la naissance, pendant la vie embryonnaire",
              "À la puberté",
              "Après la ménopause",
              "À chaque fécondation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une fille naît avec tout son stock d’ovocytes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Repos",
          "stepTheme": "Prophase I",
          "stepTitle": "Une longue pause",
          "paragraphText": "Les **ovocytes I** commencent la méiose avant la naissance, puis restent **bloqués en prophase I** jusqu’à la **puberté**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p02_q3",
            "type": "mcq",
            "prompt": "Après la naissance, que deviennent les ovocytes I contenus dans les follicules primordiaux ?",
            "options": [
              "Ils restent bloqués au début de la méiose (prophase I) jusqu’à la puberté",
              "Ils deviennent des spermatozoïdes",
              "Ils se multiplient par mitose toute la vie",
              "Ils deviennent tous des ovules dès la naissance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la période de repos."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Division inégale",
          "stepTheme": "Méiose I",
          "stepTitle": "Un gros et un petit",
          "paragraphText": "La 1re division de méiose de l’ovocyte I donne un **gros ovocyte II (n)** et un **petit 1er globule polaire (n)**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p02_q4",
            "type": "mcq",
            "prompt": "Que donne la 1re division de méiose d’un ovocyte I ?",
            "options": [
              "Un gros ovocyte II (n) et un petit 1er globule polaire (n)",
              "Deux ovocytes II de même taille",
              "Quatre ovules",
              "Un ovocyte II (2n) et un globule polaire (2n)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’ovocyte II garde presque tout le cytoplasme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Globule polaire",
          "stepTheme": "Erreur du document",
          "stepTitle": "Le 1er globule polaire est haploïde",
          "paragraphText": "Le schéma du document écrit « 1er globule polaire **(2n)** » : c’est faux. Comme l’ovocyte II, il est **haploïde (n)**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p02_q5",
            "type": "mcq",
            "prompt": "Le 1er globule polaire, formé par la 1re division de méiose de l’ovocyte I, est-il haploïde ou diploïde ?",
            "options": [
              "Haploïde (n), comme l’ovocyte II",
              "Diploïde (2n)",
              "Il n’a pas de chromosomes",
              "Triploïde (3n)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La 1re division sépare les homologues : chaque cellule reçoit n chromosomes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Métaphase II",
          "stepTheme": "Précision",
          "stepTitle": "La 2e division attend le spermatozoïde",
          "paragraphText": "Chez la femme, l’ovocyte II libéré à l’ovulation est **bloqué en métaphase II**. La 2e division ne s’achève **que si un spermatozoïde y pénètre**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p02_q6",
            "type": "mcq",
            "prompt": "Chez la femme, quand la 2e division de méiose de l’ovocyte II s’achève-t-elle ?",
            "options": [
              "Seulement si un spermatozoïde pénètre dans l’ovocyte, lors de la fécondation",
              "Avant la naissance",
              "Juste avant l’ovulation, dans tous les cas",
              "Jamais"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’ovocyte II, et non l’ovule, qui est libéré."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l03_gametogenese_p02_q1",
          "type": "mcq",
          "prompt": "Quelles sont les phases de l’ovogenèse ?",
          "options": [
            "Multiplication, accroissement, maturation (sans différenciation)",
            "Multiplication, accroissement, maturation et différenciation",
            "Seulement la maturation",
            "Différenciation et multiplication"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’ovocyte n’a pas besoin de flagelle."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p02_q2",
          "type": "mcq",
          "prompt": "À quel moment de la vie se déroulent la multiplication des ovogonies et leur accroissement en ovocytes I ?",
          "options": [
            "Avant la naissance, pendant la vie embryonnaire",
            "À la puberté",
            "Après la ménopause",
            "À chaque fécondation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une fille naît avec tout son stock d’ovocytes."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p02_q3",
          "type": "mcq",
          "prompt": "Après la naissance, que deviennent les ovocytes I contenus dans les follicules primordiaux ?",
          "options": [
            "Ils restent bloqués au début de la méiose (prophase I) jusqu’à la puberté",
            "Ils deviennent des spermatozoïdes",
            "Ils se multiplient par mitose toute la vie",
            "Ils deviennent tous des ovules dès la naissance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la période de repos."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p02_q4",
          "type": "mcq",
          "prompt": "Que donne la 1re division de méiose d’un ovocyte I ?",
          "options": [
            "Un gros ovocyte II (n) et un petit 1er globule polaire (n)",
            "Deux ovocytes II de même taille",
            "Quatre ovules",
            "Un ovocyte II (2n) et un globule polaire (2n)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’ovocyte II garde presque tout le cytoplasme."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p02_q5",
          "type": "mcq",
          "prompt": "Le 1er globule polaire, formé par la 1re division de méiose de l’ovocyte I, est-il haploïde ou diploïde ?",
          "options": [
            "Haploïde (n), comme l’ovocyte II",
            "Diploïde (2n)",
            "Il n’a pas de chromosomes",
            "Triploïde (3n)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La 1re division sépare les homologues : chaque cellule reçoit n chromosomes."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p02_q6",
          "type": "mcq",
          "prompt": "Chez la femme, quand la 2e division de méiose de l’ovocyte II s’achève-t-elle ?",
          "options": [
            "Seulement si un spermatozoïde pénètre dans l’ovocyte, lors de la fécondation",
            "Avant la naissance",
            "Juste avant l’ovulation, dans tous les cas",
            "Jamais"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’ovocyte II, et non l’ovule, qui est libéré."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l03_gametogenese_p03",
      "order": 3,
      "title": "Le mécanisme : la méiose",
      "summary": "Division réductionnelle, division équationnelle, quantité d’ADN.",
      "conceptExplanation": "- La méiose comprend deux divisions successives, précédées d’une seule réplication de l’ADN. Elle donne quatre cellules haploïdes (n) à partir d’une cellule diploïde (2n).\n- 1re division, dite réductionnelle :\n- prophase I : les chromosomes homologues s’apparient sur toute leur longueur et forment des bivalents (ou tétrades) ;\n- métaphase I : les bivalents se placent de part et d’autre du plan équatorial ;\n- anaphase I : les deux chromosomes de chaque paire se séparent et migrent vers les pôles, sans division des centromères (chacun garde ses 2 chromatides) ;\n- télophase I : on obtient deux cellules haploïdes (n), à chromosomes à 2 chromatides. Le nombre de chromosomes passe de 2n à n.\n- 2e division, dite équationnelle, comme une mitose : métaphase II, chromosomes alignés par leur centromère ; anaphase II, les centromères se divisent et les chromatides sœurs se séparent ; télophase II, 4 cellules haploïdes à chromosomes à une chromatide.\n- Quantité d’ADN : 2q après la réplication, q après la 1re division, ½q dans les gamètes. Dans la spermatogenèse : 14,6 unités dans le spermatocyte I, 7,3 dans le spermatocyte II, 3,6 dans la spermatide.\n- Nuance au document : les 4 cellules filles sont « morphologiquement identiques » dans la spermatogenèse seulement (elles sont très inégales dans l’ovogenèse) ; surtout, elles sont génétiquement différentes, à cause des brassages.",
      "keyRule": "Méiose : 1 réplication + 2 divisions. DR : séparation des homologues (2n → n). DE : séparation des chromatides (n → n). ADN : 2q → q → ½q.",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer les deux divisions",
        "statement": "Qu’est-ce qui se sépare en anaphase I et en anaphase II ?",
        "methodSteps": [
          "En anaphase I, les chromosomes homologues de chaque paire se séparent.",
          "En anaphase II, les centromères se divisent et les chromatides sœurs se séparent."
        ],
        "conclusion": "Anaphase I : homologues ; anaphase II : chromatides."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Méiose",
          "stepTheme": "Définition",
          "stepTitle": "Deux divisions successives",
          "paragraphText": "La **méiose** : **deux divisions** successives qui donnent **4 cellules haploïdes (n)** à partir d’une cellule **diploïde (2n)**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p03_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce que la méiose ?",
            "options": [
              "Deux divisions successives qui donnent quatre cellules haploïdes (n) à partir d’une cellule diploïde (2n)",
              "Une seule division qui donne deux cellules 2n identiques",
              "La fusion de deux gamètes",
              "La multiplication des spermatogonies"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle est précédée d’une seule réplication."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Quantité d’ADN au cours de la méiose",
            "caption": "Après la réplication (phase S), la cellule a 2q d’ADN. La division réductionnelle (DR) ramène à q, la division équationnelle (DE) à ½q.",
            "svgContent": "<svg viewBox=\"0 0 560 238\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Courbe de la quantité d’ADN : q en G1, montée à 2q en phase S, 2q en G2, chute à q après la division réductionnelle, puis à un demi q après la division équationnelle\"><line x1=\"60\" y1=\"190\" x2=\"540\" y2=\"190\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"30\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"52\" y=\"54\" font-size=\"11\" text-anchor=\"end\" font-weight=\"800\" fill=\"currentColor\">2q</text><text x=\"52\" y=\"124\" font-size=\"11\" text-anchor=\"end\" font-weight=\"800\" fill=\"currentColor\">q</text><text x=\"52\" y=\"159\" font-size=\"11\" text-anchor=\"end\" font-weight=\"800\" fill=\"currentColor\">½q</text><polyline points=\"60.0,120.0 150.0,120.0 240.0,50.0 330.0,50.0 330.0,120.0 400.0,120.0 400.0,155.0 530.0,155.0\" fill=\"none\" stroke=\"#8B5CF6\" stroke-width=\"2.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"40\" x2=\"150\" y2=\"190\" stroke=\"#94A3B8\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"190\" stroke=\"#94A3B8\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/><line x1=\"330\" y1=\"40\" x2=\"330\" y2=\"190\" stroke=\"#94A3B8\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"190\" stroke=\"#94A3B8\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"190\" stroke=\"#94A3B8\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-dasharray=\"4 4\"/><text x=\"105\" y=\"208\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">G1</text><text x=\"195\" y=\"208\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">S</text><text x=\"285\" y=\"208\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">G2</text><text x=\"365\" y=\"208\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">DR</text><text x=\"430\" y=\"208\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">DE</text><line x1=\"330\" y1=\"218\" x2=\"460\" y2=\"218\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"395\" y=\"232\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">méiose</text><text x=\"64\" y=\"22\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">quantité d’ADN par cellule</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Prophase I",
          "stepTheme": "Division réductionnelle",
          "stepTitle": "L’appariement des homologues",
          "paragraphText": "En **prophase I**, les chromosomes **homologues s’apparient** et forment des **bivalents**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p03_q2",
            "type": "mcq",
            "prompt": "Que se passe-t-il pendant la prophase I de la méiose ?",
            "options": [
              "Les chromosomes homologues s’apparient et forment des bivalents",
              "Les centromères se divisent",
              "Les chromatides sœurs se séparent",
              "La cellule se divise en quatre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est propre à la méiose : la mitose n’a pas d’appariement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Anaphase I",
          "stepTheme": "Division réductionnelle",
          "stepTitle": "Les homologues se séparent",
          "paragraphText": "En **anaphase I**, les **chromosomes homologues** se séparent ; chacun garde ses **2 chromatides** (pas de division des centromères).",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p03_q3",
            "type": "mcq",
            "prompt": "Pendant l’anaphase I, qu’est-ce qui se sépare et migre vers les pôles ?",
            "options": [
              "Les chromosomes homologues, chacun encore formé de deux chromatides",
              "Les chromatides sœurs d’un même chromosome",
              "Les noyaux de deux cellules",
              "Les mitochondries seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque pôle reçoit un chromosome de chaque paire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Réductionnelle",
          "stepTheme": "Notion",
          "stepTitle": "De 2n à n",
          "paragraphText": "La 1re division est **réductionnelle** : elle **réduit de moitié** le nombre de chromosomes, de **2n** à **n**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p03_q4",
            "type": "mcq",
            "prompt": "Pourquoi la 1re division de méiose est-elle dite réductionnelle ?",
            "options": [
              "Elle réduit de moitié le nombre de chromosomes : de 2n à n",
              "Elle réduit la taille des chromosomes",
              "Elle supprime l’ADN",
              "Elle réduit le nombre de cellules"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la réduction chromatique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Équationnelle",
          "stepTheme": "Division 2",
          "stepTitle": "Comme une mitose",
          "paragraphText": "En **anaphase II**, les **centromères se divisent** et les **chromatides sœurs** se séparent : les cellules restent **n**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p03_q5",
            "type": "mcq",
            "prompt": "Pendant l’anaphase II de la méiose, que se passe-t-il ?",
            "options": [
              "Les centromères se divisent et les chromatides sœurs se séparent vers les pôles",
              "Les chromosomes homologues s’apparient",
              "L’ADN se réplique",
              "Les bivalents se forment"
            ],
            "correctAnswerIndex": 0,
            "explanation": "n cellules à 2 chromatides → n cellules à 1 chromatide."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "ADN",
          "stepTheme": "Documentation",
          "stepTitle": "La quantité d’ADN",
          "paragraphText": "Spermatocyte I : **14,6** unités d’ADN ; spermatocyte II : **7,3** ; spermatide : **3,6**, soit le **quart**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p03_q6",
            "type": "mcq",
            "prompt": "Un spermatocyte I contient 14,6 unités d’ADN après la réplication. Combien en contient une spermatide ?",
            "options": [
              "Environ 3,6 unités, soit le quart",
              "7,3 unités",
              "14,6 unités",
              "29,2 unités"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux divisions sans réplication entre elles : 14,6 → 7,3 → 3,6."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l03_gametogenese_p03_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce que la méiose ?",
          "options": [
            "Deux divisions successives qui donnent quatre cellules haploïdes (n) à partir d’une cellule diploïde (2n)",
            "Une seule division qui donne deux cellules 2n identiques",
            "La fusion de deux gamètes",
            "La multiplication des spermatogonies"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle est précédée d’une seule réplication."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p03_q2",
          "type": "mcq",
          "prompt": "Que se passe-t-il pendant la prophase I de la méiose ?",
          "options": [
            "Les chromosomes homologues s’apparient et forment des bivalents",
            "Les centromères se divisent",
            "Les chromatides sœurs se séparent",
            "La cellule se divise en quatre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est propre à la méiose : la mitose n’a pas d’appariement."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p03_q3",
          "type": "mcq",
          "prompt": "Pendant l’anaphase I, qu’est-ce qui se sépare et migre vers les pôles ?",
          "options": [
            "Les chromosomes homologues, chacun encore formé de deux chromatides",
            "Les chromatides sœurs d’un même chromosome",
            "Les noyaux de deux cellules",
            "Les mitochondries seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque pôle reçoit un chromosome de chaque paire."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p03_q4",
          "type": "mcq",
          "prompt": "Pourquoi la 1re division de méiose est-elle dite réductionnelle ?",
          "options": [
            "Elle réduit de moitié le nombre de chromosomes : de 2n à n",
            "Elle réduit la taille des chromosomes",
            "Elle supprime l’ADN",
            "Elle réduit le nombre de cellules"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la réduction chromatique."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p03_q5",
          "type": "mcq",
          "prompt": "Pendant l’anaphase II de la méiose, que se passe-t-il ?",
          "options": [
            "Les centromères se divisent et les chromatides sœurs se séparent vers les pôles",
            "Les chromosomes homologues s’apparient",
            "L’ADN se réplique",
            "Les bivalents se forment"
          ],
          "correctAnswerIndex": 0,
          "explanation": "n cellules à 2 chromatides → n cellules à 1 chromatide."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p03_q6",
          "type": "mcq",
          "prompt": "Un spermatocyte I contient 14,6 unités d’ADN après la réplication. Combien en contient une spermatide ?",
          "options": [
            "Environ 3,6 unités, soit le quart",
            "7,3 unités",
            "14,6 unités",
            "29,2 unités"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux divisions sans réplication entre elles : 14,6 → 7,3 → 3,6."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l03_gametogenese_p04",
      "order": 4,
      "title": "Les brassages chromosomiques",
      "summary": "Brassage interchromosomique et crossing-over.",
      "conceptExplanation": "- Brassage interchromosomique : en métaphase I, chaque paire de chromosomes se place au hasard sur le plan équatorial ; en anaphase I, les chromosomes d’origine paternelle et maternelle se répartissent donc au hasard, indépendamment d’une paire à l’autre.\n- Chez l’Homme (23 paires), cela donne 2²³ combinaisons, soit environ 8,4 millions de gamètes différents par ce seul brassage.\n- Brassage intrachromosomique : pendant la prophase I, les chromatides de deux chromosomes homologues appariés s’enchevêtrent (chiasmas) et échangent des segments : c’est le crossing-over. Il crée des chromatides recombinées.\n- Schéma 3 : un hybride F1 issu de deux parents de race pure, [A B] et [a b], porte les gènes A/a et B/b sur deux paires différentes. Il produit 4 sortes de gamètes, chacune avec une probabilité de 1/4 : 50 % de gamètes parentaux et 50 % de gamètes recombinés.\n- Conséquence : les gamètes d’un même individu sont génétiquement différents. Avec la fécondation au hasard, cela assure la diversité des individus.\n- Corrections du document : il place le crossing-over « à l’anaphase I » ; il se produit pendant la prophase I, quand les homologues sont appariés. Il range aussi ces brassages sous le titre « méiose atypique » : les brassages sont des événements normaux de la méiose.",
      "keyRule": "Interchromosomique : répartition au hasard des homologues (métaphase-anaphase I), 2²³ combinaisons. Intrachromosomique : crossing-over en prophase I.",
      "formulas": [],
      "workedExample": {
        "title": "Compter les combinaisons",
        "statement": "Avec 2 paires de chromosomes, combien de types de gamètes le brassage interchromosomique peut-il donner ?",
        "methodSteps": [
          "Chaque paire peut envoyer son chromosome paternel ou maternel : 2 possibilités.",
          "Pour 2 paires : 2 × 2 = 4."
        ],
        "conclusion": "4 types de gamètes ; pour 23 paires : 2²³, soit environ 8,4 millions."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Interchromosomique",
          "stepTheme": "Brassage",
          "stepTitle": "Une répartition au hasard",
          "paragraphText": "Le **brassage interchromosomique** : les chromosomes **paternels** et **maternels** de chaque paire se répartissent **au hasard** lors de la 1re division de méiose.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p04_q1",
            "type": "mcq",
            "prompt": "En quoi consiste le brassage interchromosomique ?",
            "options": [
              "La répartition au hasard des chromosomes paternels et maternels de chaque paire lors de la 1re division de méiose",
              "L’échange de segments entre chromatides homologues",
              "La perte d’un chromosome",
              "La fusion de deux gamètes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque paire se place au hasard en métaphase I."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "2²³",
          "stepTheme": "Calcul",
          "stepTitle": "Des millions de combinaisons",
          "paragraphText": "Chaque paire offre **2 choix** : pour **23 paires**, **2²³ ≈ 8,4 millions** de combinaisons.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p04_q2",
            "type": "mcq",
            "prompt": "Chez l’Homme (23 paires de chromosomes), combien de combinaisons de chromosomes différentes un individu peut-il produire par le seul brassage interchromosomique ?",
            "options": [
              "2²³, soit environ 8,4 millions",
              "23",
              "46",
              "23 × 23 = 529"
            ],
            "correctAnswerIndex": 0,
            "explanation": "2²³ = 8 388 608."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Crossing-over",
          "stepTheme": "Brassage",
          "stepTitle": "Échanger des morceaux",
          "paragraphText": "Le **crossing-over** : deux chromatides de chromosomes **homologues** échangent des **segments** au niveau d’un **chiasma**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p04_q3",
            "type": "mcq",
            "prompt": "Qu’est-ce que le crossing-over ?",
            "options": [
              "Un échange de segments de chromatides entre deux chromosomes homologues, au niveau d’un chiasma",
              "La séparation des chromatides sœurs",
              "Un échange entre deux gamètes",
              "La disparition d’un chromosome"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le brassage intrachromosomique."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le crossing-over (brassage intrachromosomique)",
            "caption": "En prophase I, deux chromatides de chromosomes homologues échangent des segments au niveau d’un chiasma : de nouvelles combinaisons apparaissent sur un même chromosome.",
            "svgContent": "<svg viewBox=\"0 0 560 205\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Crossing-over : échange de segments entre deux chromatides de chromosomes homologues au niveau d’un chiasma\"><rect x=\"70\" y=\"40\" width=\"12\" height=\"75\" rx=\"6\" fill=\"#3B82F6\" fill-opacity=\"0.75\"/><rect x=\"70\" y=\"111\" width=\"12\" height=\"40\" rx=\"6\" fill=\"#3B82F6\" fill-opacity=\"0.75\"/><rect x=\"82\" y=\"40\" width=\"12\" height=\"75\" rx=\"6\" fill=\"#3B82F6\" fill-opacity=\"0.75\"/><rect x=\"82\" y=\"111\" width=\"12\" height=\"40\" rx=\"6\" fill=\"#3B82F6\" fill-opacity=\"0.75\"/><rect x=\"116\" y=\"40\" width=\"12\" height=\"75\" rx=\"6\" fill=\"#EF4444\" fill-opacity=\"0.75\"/><rect x=\"116\" y=\"111\" width=\"12\" height=\"40\" rx=\"6\" fill=\"#EF4444\" fill-opacity=\"0.75\"/><rect x=\"128\" y=\"40\" width=\"12\" height=\"75\" rx=\"6\" fill=\"#EF4444\" fill-opacity=\"0.75\"/><rect x=\"128\" y=\"111\" width=\"12\" height=\"40\" rx=\"6\" fill=\"#EF4444\" fill-opacity=\"0.75\"/><circle cx=\"82\" cy=\"80\" r=\"5\" fill=\"#94A3B8\"/><circle cx=\"128\" cy=\"80\" r=\"5\" fill=\"#94A3B8\"/><line x1=\"94\" y1=\"118\" x2=\"116\" y2=\"138\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"94\" y1=\"138\" x2=\"116\" y2=\"118\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"175\" y1=\"95\" x2=\"286.0\" y2=\"95.0\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"295,95 286.0,90.0 286.0,100.0\" fill=\"#94A3B8\"/><text x=\"235\" y=\"85\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">crossing-over</text><rect x=\"330\" y=\"40\" width=\"12\" height=\"75\" rx=\"6\" fill=\"#3B82F6\" fill-opacity=\"0.75\"/><rect x=\"330\" y=\"111\" width=\"12\" height=\"40\" rx=\"6\" fill=\"#3B82F6\" fill-opacity=\"0.75\"/><rect x=\"342\" y=\"40\" width=\"12\" height=\"75\" rx=\"6\" fill=\"#3B82F6\" fill-opacity=\"0.75\"/><rect x=\"342\" y=\"111\" width=\"12\" height=\"40\" rx=\"6\" fill=\"#EF4444\" fill-opacity=\"0.75\"/><rect x=\"376\" y=\"40\" width=\"12\" height=\"75\" rx=\"6\" fill=\"#EF4444\" fill-opacity=\"0.75\"/><rect x=\"376\" y=\"111\" width=\"12\" height=\"40\" rx=\"6\" fill=\"#3B82F6\" fill-opacity=\"0.75\"/><rect x=\"388\" y=\"40\" width=\"12\" height=\"75\" rx=\"6\" fill=\"#EF4444\" fill-opacity=\"0.75\"/><rect x=\"388\" y=\"111\" width=\"12\" height=\"40\" rx=\"6\" fill=\"#EF4444\" fill-opacity=\"0.75\"/><circle cx=\"342\" cy=\"80\" r=\"5\" fill=\"#94A3B8\"/><circle cx=\"388\" cy=\"80\" r=\"5\" fill=\"#94A3B8\"/><text x=\"105\" y=\"178\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">prophase I : homologues appariés,</text><text x=\"105\" y=\"192\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">chiasma entre deux chromatides</text><text x=\"365\" y=\"178\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">deux chromatides recombinées</text><text x=\"365\" y=\"192\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">(bleu + rouge)</text><text x=\"430\" y=\"70\" font-size=\"10\" text-anchor=\"start\" font-weight=\"700\" fill=\"#3B82F6\">bleu : chromosome</text><text x=\"430\" y=\"84\" font-size=\"10\" text-anchor=\"start\" font-weight=\"700\" fill=\"#3B82F6\">paternel</text><text x=\"430\" y=\"110\" font-size=\"10\" text-anchor=\"start\" font-weight=\"700\" fill=\"#EF4444\">rouge : chromosome</text><text x=\"430\" y=\"124\" font-size=\"10\" text-anchor=\"start\" font-weight=\"700\" fill=\"#EF4444\">maternel</text></svg>"
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Prophase I",
          "stepTheme": "Erreur du document",
          "stepTitle": "Le bon moment",
          "paragraphText": "Le document place le crossing-over « à l’**anaphase I** ». Il se produit pendant la **prophase I**, quand les homologues sont **appariés**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p04_q4",
            "type": "mcq",
            "prompt": "À quel moment de la méiose se produit le crossing-over ?",
            "options": [
              "Pendant la prophase I, quand les homologues sont appariés",
              "Pendant l’anaphase I",
              "Pendant la télophase II",
              "Après la fécondation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En anaphase I, les homologues se séparent déjà."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Schéma 3",
          "stepTheme": "Hybride",
          "stepTitle": "Les gamètes d’un hybride",
          "paragraphText": "Gènes sur **deux paires différentes** : l’hybride produit **4 types** de gamètes, chacun **1/4** : **50 %** parentaux, **50 %** recombinés.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p04_q5",
            "type": "mcq",
            "prompt": "Un hybride F1, issu d’un parent [A B] et d’un parent [a b] de races pures, porte le gène A/a sur une paire de chromosomes et le gène B/b sur une autre paire. Quels gamètes produit-il ?",
            "options": [
              "4 types de gamètes, chacun 1/4 : 50 % parentaux et 50 % recombinés",
              "Seulement 2 types de gamètes, parentaux",
              "100 % de gamètes recombinés",
              "3 types de gamètes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Gamètes AB, ab (parentaux) ; Ab, aB (recombinés)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Diversité",
          "stepTheme": "Conséquence",
          "stepTitle": "Des gamètes tous différents",
          "paragraphText": "Grâce aux brassages, les **gamètes** d’un même individu sont **génétiquement différents** : c’est la source de la **diversité** des individus.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est la principale conséquence des brassages chromosomiques de la méiose ?",
            "options": [
              "Les gamètes d’un même individu sont génétiquement différents, ce qui assure la diversité des individus",
              "Tous les gamètes sont identiques",
              "Les gamètes deviennent diploïdes",
              "Les chromosomes disparaissent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fécondation au hasard ajoute encore de la diversité."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l03_gametogenese_p04_q1",
          "type": "mcq",
          "prompt": "En quoi consiste le brassage interchromosomique ?",
          "options": [
            "La répartition au hasard des chromosomes paternels et maternels de chaque paire lors de la 1re division de méiose",
            "L’échange de segments entre chromatides homologues",
            "La perte d’un chromosome",
            "La fusion de deux gamètes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque paire se place au hasard en métaphase I."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p04_q2",
          "type": "mcq",
          "prompt": "Chez l’Homme (23 paires de chromosomes), combien de combinaisons de chromosomes différentes un individu peut-il produire par le seul brassage interchromosomique ?",
          "options": [
            "2²³, soit environ 8,4 millions",
            "23",
            "46",
            "23 × 23 = 529"
          ],
          "correctAnswerIndex": 0,
          "explanation": "2²³ = 8 388 608."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p04_q3",
          "type": "mcq",
          "prompt": "Qu’est-ce que le crossing-over ?",
          "options": [
            "Un échange de segments de chromatides entre deux chromosomes homologues, au niveau d’un chiasma",
            "La séparation des chromatides sœurs",
            "Un échange entre deux gamètes",
            "La disparition d’un chromosome"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le brassage intrachromosomique."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p04_q4",
          "type": "mcq",
          "prompt": "À quel moment de la méiose se produit le crossing-over ?",
          "options": [
            "Pendant la prophase I, quand les homologues sont appariés",
            "Pendant l’anaphase I",
            "Pendant la télophase II",
            "Après la fécondation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En anaphase I, les homologues se séparent déjà."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p04_q5",
          "type": "mcq",
          "prompt": "Un hybride F1, issu d’un parent [A B] et d’un parent [a b] de races pures, porte le gène A/a sur une paire de chromosomes et le gène B/b sur une autre paire. Quels gamètes produit-il ?",
          "options": [
            "4 types de gamètes, chacun 1/4 : 50 % parentaux et 50 % recombinés",
            "Seulement 2 types de gamètes, parentaux",
            "100 % de gamètes recombinés",
            "3 types de gamètes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Gamètes AB, ab (parentaux) ; Ab, aB (recombinés)."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est la principale conséquence des brassages chromosomiques de la méiose ?",
          "options": [
            "Les gamètes d’un même individu sont génétiquement différents, ce qui assure la diversité des individus",
            "Tous les gamètes sont identiques",
            "Les gamètes deviennent diploïdes",
            "Les chromosomes disparaissent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fécondation au hasard ajoute encore de la diversité."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l03_gametogenese_p05",
      "order": 5,
      "title": "Les aberrations chromosomiques",
      "summary": "Non-disjonction, trisomies, syndromes, délétion, translocation.",
      "conceptExplanation": "- Une méiose anormale (dite atypique) produit des gamètes anormaux. Les aberrations chromosomiques touchent le nombre ou la structure des chromosomes.\n- Anomalies du nombre : elles viennent d’une non-disjonction, quand deux chromosomes homologues (en 1re division) ou deux chromatides sœurs (en 2e division) ne se séparent pas. Un gamète reçoit un chromosome en trop (n + 1), un autre un chromosome en moins (n − 1). Après fécondation : trisomie (2n + 1) ou monosomie (2n − 1).\n- Elles touchent les autosomes (trisomies 21, 18, 13, 8) ou les chromosomes sexuels (XXY, XXX, X0).\n- Anomalies de structure : la délétion est la perte d’un fragment (bras court du chromosome 5 : maladie du cri du chat). La translocation est le transfert d’un fragment sur un autre chromosome, non homologue (exemple : un morceau de chromosome 2 soudé au chromosome 5). L’inversion est le retournement d’un segment sur le même chromosome.\n- Corrections du tableau du document : le syndrome de Turner (X0) donne en général des femmes stériles, pas fertiles ; dans la trisomie 21, les yeux sont obliques vers le haut et en dehors, pas vers le bas ; « mongolisme » et « débilité mentale » sont des termes à éviter (on dit trisomie 21, déficience intellectuelle) ; dans les trisomies 18 et 13, la survie est en général de quelques semaines à quelques mois, et non « une semaine ».\n- Correction du document : il définit la translocation comme un transfert « sur le même chromosome ou sur un autre chromosome ». Sur le même chromosome, il s’agit d’une inversion. Ses figures de délétion et de translocation sont aussi interverties.",
      "keyRule": "Non-disjonction → gamète n + 1 ou n − 1 → trisomie ou monosomie. Délétion : perte d’un fragment ; translocation : fragment sur un autre chromosome ; inversion : segment retourné.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer une trisomie 21",
        "statement": "Un enfant a trois chromosomes 21. Comment est-ce possible ?",
        "methodSteps": [
          "Chez un parent, la paire 21 ne s’est pas séparée pendant la méiose (non-disjonction).",
          "Un gamète a reçu deux chromosomes 21 ; uni à un gamète normal, il donne un œuf à trois chromosomes 21."
        ],
        "conclusion": "La trisomie 21 vient d’une non-disjonction lors de la méiose."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Non-disjonction",
          "stepTheme": "Méiose anormale",
          "stepTitle": "Des chromosomes qui ne se séparent pas",
          "paragraphText": "Une **non-disjonction** : deux **homologues** (ou deux **chromatides sœurs**) ne se séparent pas et partent dans la **même** cellule.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p05_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’une non-disjonction lors de la méiose ?",
            "options": [
              "Deux chromosomes homologues (ou deux chromatides sœurs) qui ne se séparent pas et partent dans la même cellule",
              "L’échange de segments entre homologues",
              "La séparation normale des chromosomes",
              "La fusion de deux spermatozoïdes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle donne des gamètes n + 1 et n − 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Trisomie 21",
          "stepTheme": "Autosomes",
          "stepTitle": "Trois chromosomes 21",
          "paragraphText": "Un gamète à **deux chromosomes 21** uni à un gamète normal donne un œuf à **trois chromosomes 21** : la **trisomie 21**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p05_q2",
            "type": "mcq",
            "prompt": "Le caryotype d’un enfant montre trois chromosomes 21 au lieu de deux. Quelle anomalie a pu en être la cause ?",
            "options": [
              "Une non-disjonction de la paire 21 lors de la méiose chez un parent",
              "Un crossing-over normal",
              "Une translocation 2-5",
              "Une ligature des trompes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les yeux sont obliques vers le haut, pas vers le bas."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Quelques aberrations chromosomiques (tableau corrigé)",
            "caption": "Anomalies du nombre (dues à une non-disjonction) et de la structure des chromosomes.",
            "tableData": {
              "headers": [
                "Anomalie",
                "Nom",
                "Conséquences"
              ],
              "rows": [
                [
                  "XXY",
                  "Syndrome de Klinefelter",
                  "Homme stérile : petits testicules qui ne produisent pas de spermatozoïdes"
                ],
                [
                  "XXX",
                  "Triplo-X",
                  "Femme en général fertile"
                ],
                [
                  "X0 (un seul X)",
                  "Syndrome de Turner",
                  "Femme de petite taille, en général stérile (ovaires non fonctionnels)"
                ],
                [
                  "3 chromosomes 21",
                  "Trisomie 21",
                  "Yeux obliques vers le haut et en dehors ; déficience intellectuelle"
                ],
                [
                  "3 chromosomes 18",
                  "Trisomie 18",
                  "Malformations graves ; survie en général de quelques semaines à quelques mois"
                ],
                [
                  "3 chromosomes 13",
                  "Trisomie 13",
                  "Malformations graves ; survie en général de quelques semaines à quelques mois"
                ],
                [
                  "3 chromosomes 8 (en mosaïque)",
                  "Trisomie 8",
                  "Handicaps légers, compatibles avec la vie"
                ],
                [
                  "Délétion du bras court du 5",
                  "Maladie du cri du chat",
                  "Bébé au cri aigu, malformation du larynx, déficience intellectuelle"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Klinefelter",
          "stepTheme": "Chromosomes sexuels",
          "stepTitle": "Un homme XXY",
          "paragraphText": "Un homme **XXY** est atteint du **syndrome de Klinefelter** : ses testicules ne produisent pas de spermatozoïdes, il est **stérile**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p05_q3",
            "type": "mcq",
            "prompt": "Un homme a pour caryotype 47,XXY. Quel est son syndrome ?",
            "options": [
              "Le syndrome de Klinefelter, avec stérilité",
              "Le syndrome de Turner",
              "Le triplo-X",
              "La trisomie 13"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il a un chromosome X en trop."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Turner",
          "stepTheme": "Erreur du document",
          "stepTitle": "Une femme X0 est-elle fertile ?",
          "paragraphText": "Le tableau du document dit « femelles **fertiles** » pour le syndrome de **Turner** : c’est faux. Les ovaires ne fonctionnent pas ; ces femmes sont en général **stériles** et de petite taille.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p05_q4",
            "type": "mcq",
            "prompt": "Une femme atteinte du syndrome de Turner (45,X0) est-elle en général fertile ?",
            "options": [
              "Non : ses ovaires ne fonctionnent pas, elle est en général stérile",
              "Oui, toujours",
              "Oui, plus fertile que la moyenne",
              "Elle produit des spermatozoïdes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le triplo-X (XXX), lui, est en général fertile."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Délétion",
          "stepTheme": "Structure",
          "stepTitle": "La perte d’un fragment",
          "paragraphText": "Une **délétion** est la **perte** d’un fragment de chromosome. Celle du **bras court du chromosome 5** cause la **maladie du cri du chat**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p05_q5",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’une délétion chromosomique ?",
            "options": [
              "La perte d’un fragment de chromosome, comme le bras court du chromosome 5 dans la maladie du cri du chat",
              "L’ajout d’un chromosome entier",
              "Le retournement d’un segment",
              "La séparation normale des chromatides"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le bébé émet un cri aigu, comme un miaulement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Translocation",
          "stepTheme": "Erreur du document",
          "stepTitle": "Translocation ou inversion ?",
          "paragraphText": "Le document définit la translocation comme un transfert « sur le **même** chromosome ou sur un autre ». Une **translocation** se fait sur un **autre** chromosome, non homologue ; sur le **même** chromosome, c’est une **inversion**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p05_q6",
            "type": "mcq",
            "prompt": "Comment appelle-t-on le transfert d’un fragment de chromosome sur un autre chromosome, non homologue ?",
            "options": [
              "Une translocation",
              "Une inversion",
              "Une délétion",
              "Un crossing-over"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exemple : un morceau du chromosome 2 soudé au chromosome 5."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l03_gametogenese_p05_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’une non-disjonction lors de la méiose ?",
          "options": [
            "Deux chromosomes homologues (ou deux chromatides sœurs) qui ne se séparent pas et partent dans la même cellule",
            "L’échange de segments entre homologues",
            "La séparation normale des chromosomes",
            "La fusion de deux spermatozoïdes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle donne des gamètes n + 1 et n − 1."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p05_q2",
          "type": "mcq",
          "prompt": "Le caryotype d’un enfant montre trois chromosomes 21 au lieu de deux. Quelle anomalie a pu en être la cause ?",
          "options": [
            "Une non-disjonction de la paire 21 lors de la méiose chez un parent",
            "Un crossing-over normal",
            "Une translocation 2-5",
            "Une ligature des trompes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les yeux sont obliques vers le haut, pas vers le bas."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p05_q3",
          "type": "mcq",
          "prompt": "Un homme a pour caryotype 47,XXY. Quel est son syndrome ?",
          "options": [
            "Le syndrome de Klinefelter, avec stérilité",
            "Le syndrome de Turner",
            "Le triplo-X",
            "La trisomie 13"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il a un chromosome X en trop."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p05_q4",
          "type": "mcq",
          "prompt": "Une femme atteinte du syndrome de Turner (45,X0) est-elle en général fertile ?",
          "options": [
            "Non : ses ovaires ne fonctionnent pas, elle est en général stérile",
            "Oui, toujours",
            "Oui, plus fertile que la moyenne",
            "Elle produit des spermatozoïdes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le triplo-X (XXX), lui, est en général fertile."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p05_q5",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’une délétion chromosomique ?",
          "options": [
            "La perte d’un fragment de chromosome, comme le bras court du chromosome 5 dans la maladie du cri du chat",
            "L’ajout d’un chromosome entier",
            "Le retournement d’un segment",
            "La séparation normale des chromatides"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bébé émet un cri aigu, comme un miaulement."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p05_q6",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le transfert d’un fragment de chromosome sur un autre chromosome, non homologue ?",
          "options": [
            "Une translocation",
            "Une inversion",
            "Une délétion",
            "Un crossing-over"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exemple : un morceau du chromosome 2 soudé au chromosome 5."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l03_gametogenese_p06",
      "order": 6,
      "title": "Évaluation : le stock d’ovocytes et les exercices",
      "summary": "Analyser la courbe des cellules sexuelles chez la femme ; brassages et texte à trous.",
      "conceptExplanation": "- Situation d’évaluation : la courbe montre le nombre d’ovogonies et d’ovocytes des deux ovaires, de la vie embryonnaire à 60 ans.\n- Analyse : le nombre augmente à partir d’environ un mois et demi de vie embryonnaire et atteint son maximum, environ 7 millions, vers le 5e-6e mois. Il chute ensuite jusqu’à 2 millions à la naissance, puis continue de baisser et devient presque nul vers 50 ans.\n- Explication : l’augmentation vient de la multiplication des ovogonies par mitoses, qui deviennent des ovocytes I par accroissement. La chute vient de la dégénérescence (atrésie) de la plupart des follicules, avant et après la naissance. Les ovulations n’en utilisent qu’environ 400 au cours de la vie.\n- Déduction : les deux grandes phases sont la multiplication et l’accroissement (avant la naissance), puis la maturation (de la puberté à la ménopause).\n- Corrections du corrigé : la courbe va jusqu’à 60 ans, pas 50 ; la maturation se déroule à partir de la puberté, et non « à partir de la naissance » ; la chute après la naissance est due surtout à l’atrésie, pas aux cycles menstruels.\n- Correction de l’exercice 1 : son corrigé range « chromosome surnuméraire à la 21e paire », « chromosome en moins à la 18e paire » et « trois chromosomes sexuels » dans le brassage interchromosomique. Ce sont des aberrations dues à une non-disjonction, pas des brassages normaux. Le brassage intrachromosomique regroupe le crossing-over, le chiasma et l’échange de chromatides entre homologues.\n- Exercice 2 (texte à trous) : 1 cyclique ; 2 ménopause ; 3 ovaires ; 4 menstruel ; 5 caryotype ; 6 moitié ; 7 chaque paire ; 8 au hasard ; 9 différents ; 10 spermatozoïdes.\n- Exercice 3 : le constituant est le tube séminifère (coupe transversale) : 1 cellules de Leydig ; 2 cellule de Sertoli ; 3 spermatogonie ; 4 spermatocyte I ; 5 spermatocyte II ; 6 spermatide ; 7 spermatozoïde jeune ; 8 spermatozoïde âgé. Le phénomène est la spermatogenèse.",
      "keyRule": "Ovaire : environ 7 millions de cellules au 5e-6e mois de vie embryonnaire, 2 millions à la naissance, presque 0 vers 50 ans. Chute surtout due à l’atrésie.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser la courbe",
        "statement": "Pourquoi le nombre de cellules sexuelles chute-t-il alors qu’une femme n’ovule qu’environ 400 fois ?",
        "methodSteps": [
          "400 ovulations ne peuvent pas expliquer la disparition de millions de cellules.",
          "La plupart des follicules dégénèrent sans jamais ovuler : c’est l’atrésie."
        ],
        "conclusion": "La chute est due surtout à l’atrésie des follicules."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Montée",
          "stepTheme": "Graphe",
          "stepTitle": "Pourquoi le nombre augmente",
          "paragraphText": "Le nombre de cellules monte jusqu’à **≈ 7 millions** vers le **5e-6e mois** de vie embryonnaire : les **ovogonies se multiplient** par mitoses.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p06_q1",
            "type": "mcq",
            "prompt": "Le nombre d’ovogonies et d’ovocytes des deux ovaires atteint environ 7 millions vers le 5e-6e mois de la vie embryonnaire, puis tombe à 2 millions à la naissance. Comment expliquer l’augmentation du début ?",
            "options": [
              "Par la multiplication des ovogonies par mitoses",
              "Par la méiose des ovocytes",
              "Par l’ovulation",
              "Par la fécondation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la phase de multiplication."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les cellules sexuelles des ovaires, de la vie embryonnaire à 60 ans",
            "caption": "Nombre d’ovogonies et d’ovocytes pour les deux ovaires (en millions). Maximum vers le 5e-6e mois de vie embryonnaire, 2 millions à la naissance, presque plus rien vers 50 ans.",
            "svgContent": "<svg viewBox=\"0 0 560 250\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Courbe du nombre de cellules sexuelles des ovaires : montée jusqu’à 7 millions au 5e-6e mois de grossesse, 2 millions à la naissance, puis baisse jusqu’à zéro vers 50 ans\"><line x1=\"60\" y1=\"200\" x2=\"535\" y2=\"200\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"200\" x2=\"60\" y2=\"30\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"52\" y=\"204\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">0</text><text x=\"52\" y=\"160\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">2</text><text x=\"52\" y=\"116\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">4</text><text x=\"52\" y=\"72\" font-size=\"10\" text-anchor=\"end\" font-weight=\"600\" fill=\"currentColor\">6</text><polyline points=\"93.0,200.0 115.0,189.0 126.0,167.0 148.0,112.0 170.0,46.0 192.0,116.4 214.0,147.2 236.0,151.6 258.0,156.0\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"258.0,156.0 290.0,156.0 318.0,184.6 338.0,191.2 370.0,194.5 410.0,196.7 450.0,198.9 490.0,200.0 530.0,200.0\" fill=\"none\" stroke=\"#EC4899\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"36\" x2=\"274\" y2=\"200\" stroke=\"#94A3B8\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-dasharray=\"5 4\"/><text x=\"274\" y=\"244\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">naissance</text><text x=\"60\" y=\"214\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">0</text><text x=\"126\" y=\"214\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">3</text><text x=\"192\" y=\"214\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">6</text><text x=\"258\" y=\"214\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">9</text><text x=\"330\" y=\"214\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">10</text><text x=\"370\" y=\"214\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">20</text><text x=\"410\" y=\"214\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">30</text><text x=\"450\" y=\"214\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">40</text><text x=\"490\" y=\"214\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">50</text><text x=\"530\" y=\"214\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">60</text><text x=\"160\" y=\"230\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">mois de vie embryonnaire</text><text x=\"420\" y=\"230\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">âge (années)</text><text x=\"180\" y=\"50\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#EC4899\">≈ 7 millions</text><text x=\"298\" y=\"150\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">≈ 2 millions</text><text x=\"490\" y=\"190\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">≈ 0 vers 50 ans</text><text x=\"64\" y=\"22\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"currentColor\">ovogonies + ovocytes (millions, 2 ovaires)</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Atrésie",
          "stepTheme": "Graphe",
          "stepTitle": "Pourquoi le nombre chute",
          "paragraphText": "De **7 millions** à presque **0** vers **50 ans**, avec seulement **400** ovulations environ : la chute vient surtout de l’**atrésie** des follicules.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p06_q2",
            "type": "mcq",
            "prompt": "Le nombre de cellules sexuelles des ovaires chute d’environ 7 millions (5e-6e mois de vie embryonnaire) à presque 0 vers 50 ans, alors qu’une femme n’ovule qu’environ 400 fois. Comment expliquer surtout cette chute ?",
            "options": [
              "Par la dégénérescence (atrésie) de la plupart des follicules",
              "Par les ovulations seulement",
              "Par la transformation des ovocytes en spermatozoïdes",
              "Par la multiplication des ovogonies"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La plupart des follicules ne mûrissent jamais."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Puberté",
          "stepTheme": "Erreur du document",
          "stepTitle": "Quand se fait la maturation ?",
          "paragraphText": "Le corrigé place la maturation « à partir de la **naissance** » : faux. Elle se déroule de la **puberté** à la **ménopause**, à chaque cycle.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p06_q3",
            "type": "mcq",
            "prompt": "Chez la femme, pendant quelle période de la vie la phase de maturation (reprise de la méiose) se déroule-t-elle, à chaque cycle ?",
            "options": [
              "De la puberté à la ménopause",
              "Dès la naissance",
              "Uniquement pendant la vie embryonnaire",
              "Après la ménopause"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Entre la naissance et la puberté, les ovocytes I sont au repos."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Brassage ou aberration",
          "stepTheme": "Erreur du document",
          "stepTitle": "Un chromosome en trop n’est pas un brassage",
          "paragraphText": "Le corrigé de l’exercice 1 range « chromosome en trop » ou « en moins » dans le **brassage interchromosomique** : ce sont des **aberrations** dues à une **non-disjonction**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p06_q4",
            "type": "mcq",
            "prompt": "Un chromosome surnuméraire à la 21e paire est-il une conséquence du brassage interchromosomique normal ?",
            "options": [
              "Non : c’est une aberration due à une non-disjonction lors d’une méiose anormale",
              "Oui, c’est le rôle normal du brassage",
              "Oui, c’est un crossing-over",
              "Non, c’est une mutation de l’ADN des mitochondries"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le brassage normal ne change pas le nombre de chromosomes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Intrachromosomique",
          "stepTheme": "Exercice 1",
          "stepTitle": "Le bon classement",
          "paragraphText": "Le **brassage intrachromosomique** : **crossing-over**, **chiasma**, **échange de chromatides** entre homologues.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p06_q5",
            "type": "mcq",
            "prompt": "Parmi ces phénomènes : crossing-over, chiasma, échange de chromatides entre homologues, chromosome en moins à la 18e paire, lesquels relèvent du brassage intrachromosomique ?",
            "options": [
              "Le crossing-over, le chiasma et l’échange de chromatides entre homologues",
              "Seulement le chromosome en moins à la 18e paire",
              "Aucun",
              "Tous les quatre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé juste : 2-b, 2-d, 2-e."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Texte à trous",
          "stepTheme": "Exercice 2",
          "stepTitle": "Le caryotype d’un gamète",
          "paragraphText": "« Le **caryotype** d’un gamète ne contient que 23 chromosomes. » Le nombre est réduit de **moitié** ; chaque gamète a un seul chromosome de **chaque paire**, reçu **au hasard**.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p06_q6",
            "type": "mcq",
            "prompt": "Complète : « Le … d’un gamète ne contient que 23 chromosomes, tandis que celui des cellules normales en contient 46. »",
            "options": [
              "caryotype",
              "ovaire",
              "ménopause",
              "spermatozoïde"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé : 5 caryotype."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l03_gametogenese_p06_q1",
          "type": "mcq",
          "prompt": "Le nombre d’ovogonies et d’ovocytes des deux ovaires atteint environ 7 millions vers le 5e-6e mois de la vie embryonnaire, puis tombe à 2 millions à la naissance. Comment expliquer l’augmentation du début ?",
          "options": [
            "Par la multiplication des ovogonies par mitoses",
            "Par la méiose des ovocytes",
            "Par l’ovulation",
            "Par la fécondation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la phase de multiplication."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p06_q2",
          "type": "mcq",
          "prompt": "Le nombre de cellules sexuelles des ovaires chute d’environ 7 millions (5e-6e mois de vie embryonnaire) à presque 0 vers 50 ans, alors qu’une femme n’ovule qu’environ 400 fois. Comment expliquer surtout cette chute ?",
          "options": [
            "Par la dégénérescence (atrésie) de la plupart des follicules",
            "Par les ovulations seulement",
            "Par la transformation des ovocytes en spermatozoïdes",
            "Par la multiplication des ovogonies"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La plupart des follicules ne mûrissent jamais."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p06_q3",
          "type": "mcq",
          "prompt": "Chez la femme, pendant quelle période de la vie la phase de maturation (reprise de la méiose) se déroule-t-elle, à chaque cycle ?",
          "options": [
            "De la puberté à la ménopause",
            "Dès la naissance",
            "Uniquement pendant la vie embryonnaire",
            "Après la ménopause"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Entre la naissance et la puberté, les ovocytes I sont au repos."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p06_q4",
          "type": "mcq",
          "prompt": "Un chromosome surnuméraire à la 21e paire est-il une conséquence du brassage interchromosomique normal ?",
          "options": [
            "Non : c’est une aberration due à une non-disjonction lors d’une méiose anormale",
            "Oui, c’est le rôle normal du brassage",
            "Oui, c’est un crossing-over",
            "Non, c’est une mutation de l’ADN des mitochondries"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le brassage normal ne change pas le nombre de chromosomes."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p06_q5",
          "type": "mcq",
          "prompt": "Parmi ces phénomènes : crossing-over, chiasma, échange de chromatides entre homologues, chromosome en moins à la 18e paire, lesquels relèvent du brassage intrachromosomique ?",
          "options": [
            "Le crossing-over, le chiasma et l’échange de chromatides entre homologues",
            "Seulement le chromosome en moins à la 18e paire",
            "Aucun",
            "Tous les quatre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé juste : 2-b, 2-d, 2-e."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p06_q6",
          "type": "mcq",
          "prompt": "Complète : « Le … d’un gamète ne contient que 23 chromosomes, tandis que celui des cellules normales en contient 46. »",
          "options": [
            "caryotype",
            "ovaire",
            "ménopause",
            "spermatozoïde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé : 5 caryotype."
        }
      ]
    }
  ]
};
