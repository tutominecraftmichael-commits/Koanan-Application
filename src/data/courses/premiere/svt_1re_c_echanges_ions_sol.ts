import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère C_L3_les échanges dions au niveau du sol.pdf (Mon école à la maison) ». Première C (la 1re D a sa propre leçon sur ce sujet).
// Fichier généré (scratchpad build_1re_c_svt.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_C_L03_ECHANGES_IONS_SOL: CurriculumChapter = {
  "id": "premiere_c_svt_l03_echanges_ions_sol",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "order": 3,
  "title": "Leçon 3 : Les échanges d’ions au niveau du sol",
  "summary": "Formation du complexe argilo-humique (argile, humus, ponts calciques), pouvoir absorbant et charges négatives, échanges de cations avec la solution du sol, engrais, lessivage et expérience de Way.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT 1ère C_L3_les échanges dions au niveau du sol.pdf (Mon école à la maison)",
  "points": [
    {
      "id": "premiere_c_svt_l03_echanges_ions_sol_p01",
      "order": 1,
      "title": "Le complexe argilo-humique",
      "summary": "Argile, humus et cations : un complexe qui structure le sol.",
      "conceptExplanation": "Situation : lors d’une sortie sur une parcelle de maïs de l’ANADER, un agent explique aux élèves l’importance du complexe argilo-humique pour un bon rendement du jardin potager.\n- Dans l’eau, l’argile et l’humus restent dispersés en très fines particules : ce sont des colloïdes.\n- En présence de calcium, les particules d’argile et d’humus s’associent et forment des flocons : c’est la floculation.\n- L’association de l’argile et de l’humus par l’intermédiaire de cations (surtout Ca²⁺) forme le complexe argilo-humique (CAH). Les micelles d’humus forment une enveloppe protectrice autour de l’argile.\n- Le complexe argilo-humique donne au sol une structure grumeleuse (en petits agrégats) : l’eau et l’air y circulent bien, ce qui favorise le développement des plantes.",
      "keyRule": "Complexe argilo-humique = argile + humus unis par des cations (Ca²⁺) → structure grumeleuse, sol aéré et fertile.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l’intérêt du complexe pour le jardin",
        "statement": "Pourquoi un sol riche en complexe argilo-humique favorise-t-il de bons rendements ?",
        "methodSteps": [
          "Le complexe donne une structure grumeleuse : l’eau et l’air circulent bien.",
          "Il retient les ions minéraux et les met à la disposition des racines."
        ],
        "conclusion": "Sol bien aéré et riche en ions disponibles : les plantes poussent mieux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Colloïdes",
          "stepTheme": "Argile et humus",
          "stepTitle": "Des particules très fines",
          "paragraphText": "Dans l’eau, l’**argile** et l’**humus** restent dispersés en particules très fines : ce sont des **colloïdes**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q1",
            "type": "mcq",
            "prompt": "Comment appelle-t-on les très fines particules d’argile et d’humus qui restent dispersées dans l’eau ?",
            "options": [
              "Des colloïdes",
              "Des cations",
              "Des flocons",
              "Des sels minéraux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ils restent en suspension sans se déposer."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le complexe argilo-humique",
            "caption": "L’argile et l’humus portent des charges négatives ; les ions calcium Ca²⁺ font le pont entre eux (pont calcique).",
            "svgContent": "<svg viewBox=\"0 0 560 220\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Feuillets d’argile, ions calcium et micelle d’humus reliés par des ponts calciques\"><rect x=\"30\" y=\"40\" width=\"170\" height=\"50\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"115\" y=\"61.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Feuillet d’argile</text><text x=\"115\" y=\"76.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">−  −  −  −</text><rect x=\"30\" y=\"130\" width=\"170\" height=\"50\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"115\" y=\"151.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Feuillet d’argile</text><text x=\"115\" y=\"166.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">−  −  −  −</text><circle cx=\"250\" cy=\"65\" r=\"22\" fill=\"#3B82F6\" fill-opacity=\"0.18\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"250\" y=\"70\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Ca²⁺</text><circle cx=\"250\" cy=\"155\" r=\"22\" fill=\"#3B82F6\" fill-opacity=\"0.18\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"250\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Ca²⁺</text><line x1=\"200\" y1=\"65\" x2=\"228\" y2=\"65\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"272\" y1=\"65\" x2=\"330\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"155\" x2=\"228\" y2=\"155\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"272\" y1=\"155\" x2=\"330\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><circle cx=\"390\" cy=\"110\" r=\"62\" fill=\"#10B981\" fill-opacity=\"0.16\" stroke=\"#10B981\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><text x=\"390\" y=\"106\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Humus</text><text x=\"390\" y=\"122\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">−  −  −</text><text x=\"250\" y=\"205\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">ponts calciques</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Complexe",
          "stepTheme": "Définition",
          "stepTitle": "Le complexe argilo-humique",
          "paragraphText": "Le **complexe argilo-humique** est l’association de l’**argile** et de l’**humus** par l’intermédiaire de **cations**, surtout les ions **calcium Ca²⁺**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q2",
            "type": "mcq",
            "prompt": "De quoi est constitué le complexe argilo-humique ?",
            "options": [
              "D’argile et d’humus unis par des ions calcium",
              "Uniquement d’argile",
              "Uniquement d’ions calcium",
              "Uniquement d’humus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé de l’activité : 1 faux, 2 faux, 3 faux, 4 vrai."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Floculation",
          "stepTheme": "Flocons",
          "stepTitle": "La floculation",
          "paragraphText": "En présence de **calcium**, les colloïdes d’argile et d’humus s’assemblent en **flocons** : c’est la **floculation**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q3",
            "type": "mcq",
            "prompt": "Que se passe-t-il quand on ajoute du calcium à de l’argile et de l’humus dispersés dans l’eau ?",
            "options": [
              "Ils s’assemblent en flocons : c’est la floculation",
              "Ils se dissolvent complètement",
              "Ils deviennent des cations",
              "Rien ne change"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le calcium rassemble les particules."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Structure",
          "stepTheme": "Sol fertile",
          "stepTitle": "Une structure grumeleuse",
          "paragraphText": "Le complexe argilo-humique donne au sol une **structure grumeleuse** : l’**eau** et l’**air** y circulent bien, favorables aux racines.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q4",
            "type": "mcq",
            "prompt": "Quelle structure le complexe argilo-humique donne-t-il au sol ?",
            "options": [
              "Une structure grumeleuse, où l’eau et l’air circulent bien",
              "Une structure compacte et imperméable",
              "Une structure sableuse sans eau",
              "Aucune structure particulière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les agrégats laissent des espaces pour l’eau et l’air."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Enveloppe",
          "stepTheme": "Humus",
          "stepTitle": "L’humus entoure l’argile",
          "paragraphText": "Dans le complexe, les micelles d’**humus** forment une **enveloppe protectrice** autour des particules d’**argile**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q5",
            "type": "mcq",
            "prompt": "Dans le complexe argilo-humique, comment l’humus est-il disposé par rapport à l’argile ?",
            "options": [
              "Il forme une enveloppe protectrice autour de l’argile",
              "Il est enfermé à l’intérieur de l’argile",
              "Il est séparé de l’argile",
              "Il remplace complètement l’argile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité 1 : affirmation 2 vraie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Uniquement ?",
          "stepTheme": "Activité 1",
          "stepTitle": "Pas seulement argile et humus",
          "paragraphText": "« Le complexe argilo-humique est constitué **uniquement** d’argile et d’humus » : **faux**. Il faut aussi les **cations** (Ca²⁺) qui les relient.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q6",
            "type": "mcq",
            "prompt": "« Le complexe argilo-humique est constitué uniquement d’argile et d’humus. » Vrai ou faux ?",
            "options": [
              "Faux : il faut aussi les cations, comme Ca²⁺, qui les relient",
              "Vrai",
              "Faux : il ne contient pas d’humus",
              "Vrai, mais seulement dans les sols sableux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans cations, argile et humus restent séparés."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q1",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les très fines particules d’argile et d’humus qui restent dispersées dans l’eau ?",
          "options": [
            "Des colloïdes",
            "Des cations",
            "Des flocons",
            "Des sels minéraux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ils restent en suspension sans se déposer."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q2",
          "type": "mcq",
          "prompt": "De quoi est constitué le complexe argilo-humique ?",
          "options": [
            "D’argile et d’humus unis par des ions calcium",
            "Uniquement d’argile",
            "Uniquement d’ions calcium",
            "Uniquement d’humus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé de l’activité : 1 faux, 2 faux, 3 faux, 4 vrai."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q3",
          "type": "mcq",
          "prompt": "Que se passe-t-il quand on ajoute du calcium à de l’argile et de l’humus dispersés dans l’eau ?",
          "options": [
            "Ils s’assemblent en flocons : c’est la floculation",
            "Ils se dissolvent complètement",
            "Ils deviennent des cations",
            "Rien ne change"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calcium rassemble les particules."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q4",
          "type": "mcq",
          "prompt": "Quelle structure le complexe argilo-humique donne-t-il au sol ?",
          "options": [
            "Une structure grumeleuse, où l’eau et l’air circulent bien",
            "Une structure compacte et imperméable",
            "Une structure sableuse sans eau",
            "Aucune structure particulière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les agrégats laissent des espaces pour l’eau et l’air."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q5",
          "type": "mcq",
          "prompt": "Dans le complexe argilo-humique, comment l’humus est-il disposé par rapport à l’argile ?",
          "options": [
            "Il forme une enveloppe protectrice autour de l’argile",
            "Il est enfermé à l’intérieur de l’argile",
            "Il est séparé de l’argile",
            "Il remplace complètement l’argile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité 1 : affirmation 2 vraie."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p01_q6",
          "type": "mcq",
          "prompt": "« Le complexe argilo-humique est constitué uniquement d’argile et d’humus. » Vrai ou faux ?",
          "options": [
            "Faux : il faut aussi les cations, comme Ca²⁺, qui les relient",
            "Vrai",
            "Faux : il ne contient pas d’humus",
            "Vrai, mais seulement dans les sols sableux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans cations, argile et humus restent séparés."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l03_echanges_ions_sol_p02",
      "order": 2,
      "title": "L’expérience de floculation",
      "summary": "Le calcium fait floculer l’argile et l’humus : les ponts calciques.",
      "conceptExplanation": "- Étape 1 : de la terre argileuse est agitée dans l’eau distillée, puis filtrée. Sans chlorure de calcium (tube I), l’argile fine reste en suspension ; avec du chlorure de calcium (CaCl₂), elle flocule.\n- Étape 2 : de la terre riche en humus est agitée dans une solution de soude. Sans CaCl₂ (tube II), l’humus reste en solution colloïdale ; avec CaCl₂, il flocule.\n- Étape 3 : on mélange les tubes I et II. Sans CaCl₂, le mélange reste stable ; avec CaCl₂, la floculation est importante.\n- Interprétation : les ions Ca²⁺ provoquent la floculation des colloïdes. L’argile et l’humus sont chargés négativement (électronégatifs) : ils se repoussent et ne peuvent pas s’unir directement. Les ions Ca²⁺, à deux charges positives, font le pont entre eux : c’est le pont calcique.",
      "keyRule": "Argile (−) et humus (−) se repoussent ; Ca²⁺ fait le pont calcique entre eux → floculation, complexe argilo-humique.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter l’étape 3",
        "statement": "Le mélange argile + humus reste stable sans calcium, mais flocule fortement avec du CaCl₂. Expliquez.",
        "methodSteps": [
          "L’argile et l’humus sont tous deux chargés négativement : ils se repoussent.",
          "Les ions Ca²⁺ (deux charges +) se lient à l’un et à l’autre et les relient."
        ],
        "conclusion": "Les ponts calciques forment le complexe argilo-humique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Étape 1",
          "stepTheme": "Argile",
          "stepTitle": "L’argile et le chlorure de calcium",
          "paragraphText": "Argile fine dans l’eau : **sans** CaCl₂, elle reste en **suspension** ; **avec** CaCl₂, elle **flocule**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q1",
            "type": "mcq",
            "prompt": "On ajoute du chlorure de calcium (CaCl₂) à de l’argile fine en suspension dans l’eau. Que se passe-t-il ?",
            "options": [
              "L’argile flocule",
              "L’argile se dissout",
              "L’argile reste en suspension",
              "L’argile devient de l’humus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les ions Ca²⁺ qui provoquent la floculation."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Expérience de floculation",
            "caption": "Le chlorure de calcium (CaCl₂) apporte des ions Ca²⁺.",
            "tableData": {
              "headers": [
                "Étape",
                "Sans CaCl₂",
                "Avec CaCl₂"
              ],
              "rows": [
                [
                  "1. Argile fine dans l’eau",
                  "L’argile reste en suspension",
                  "Floculation"
                ],
                [
                  "2. Humus extrait par la soude",
                  "L’humus reste en solution colloïdale",
                  "Floculation"
                ],
                [
                  "3. Mélange argile + humus",
                  "Mélange stable",
                  "Floculation importante"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Étape 2",
          "stepTheme": "Humus",
          "stepTitle": "L’humus et le chlorure de calcium",
          "paragraphText": "Humus extrait par la soude : **sans** CaCl₂, il reste en **solution colloïdale** ; **avec** CaCl₂, il **flocule**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q2",
            "type": "mcq",
            "prompt": "On ajoute du chlorure de calcium à de l’humus en solution colloïdale. Que se passe-t-il ?",
            "options": [
              "L’humus flocule",
              "L’humus reste en solution colloïdale",
              "L’humus se transforme en argile",
              "L’humus disparaît"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le calcium a le même effet sur l’humus que sur l’argile."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Étape 3",
          "stepTheme": "Mélange",
          "stepTitle": "Argile + humus + calcium",
          "paragraphText": "Le mélange argile + humus reste **stable** sans calcium ; avec CaCl₂, la **floculation est importante** : l’argile et l’humus s’associent.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q3",
            "type": "mcq",
            "prompt": "On mélange de l’argile et de l’humus en suspension, puis on ajoute du CaCl₂ : la floculation est importante. Que montre ce résultat ?",
            "options": [
              "L’argile et l’humus s’associent grâce au calcium",
              "L’argile et l’humus se repoussent toujours",
              "Le calcium dissout l’humus",
              "Le mélange ne contient pas d’argile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la formation du complexe argilo-humique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Charges",
          "stepTheme": "Électronégatifs",
          "stepTitle": "Pourquoi un intermédiaire est nécessaire",
          "paragraphText": "L’**argile** et l’**humus** sont tous deux chargés **négativement** : ils se **repoussent** et ne peuvent pas s’unir directement.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q4",
            "type": "mcq",
            "prompt": "Pourquoi l’argile et l’humus ne peuvent-ils pas s’unir directement ?",
            "options": [
              "Ils sont tous deux chargés négativement et se repoussent",
              "Ils sont tous deux chargés positivement",
              "L’argile est un liquide",
              "L’humus n’existe que dans la soude"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux charges de même signe se repoussent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Pont calcique",
          "stepTheme": "Ca²⁺",
          "stepTitle": "Le pont calcique",
          "paragraphText": "L’ion **Ca²⁺**, qui porte **deux charges positives**, se lie à la fois à l’argile et à l’humus : c’est le **pont calcique**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q5",
            "type": "mcq",
            "prompt": "Quel est le rôle des ions calcium Ca²⁺ dans le complexe argilo-humique ?",
            "options": [
              "Ils font le pont entre l’argile et l’humus, chargés négativement",
              "Ils repoussent l’humus",
              "Ils dissolvent l’argile",
              "Ils remplacent l’eau du sol"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux charges + : une vers l’argile, une vers l’humus."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Ions Cl⁻",
          "stepTheme": "Activité 1",
          "stepTitle": "Un anion peut-il faire le pont ?",
          "paragraphText": "« Les ions Cl⁻ peuvent former des ponts entre l’argile et l’humus » : **faux**. Un anion (−) est **repoussé** par les colloïdes chargés négativement.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q6",
            "type": "mcq",
            "prompt": "« Les ions chlorure Cl⁻ peuvent former des ponts entre les particules d’argile et d’humus. » Vrai ou faux ?",
            "options": [
              "Faux : un anion est repoussé par l’argile et l’humus, chargés négativement",
              "Vrai",
              "Faux : seuls les ions sodium le peuvent",
              "Vrai, à la place du calcium"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seuls des cations peuvent relier deux colloïdes négatifs."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q1",
          "type": "mcq",
          "prompt": "On ajoute du chlorure de calcium (CaCl₂) à de l’argile fine en suspension dans l’eau. Que se passe-t-il ?",
          "options": [
            "L’argile flocule",
            "L’argile se dissout",
            "L’argile reste en suspension",
            "L’argile devient de l’humus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les ions Ca²⁺ qui provoquent la floculation."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q2",
          "type": "mcq",
          "prompt": "On ajoute du chlorure de calcium à de l’humus en solution colloïdale. Que se passe-t-il ?",
          "options": [
            "L’humus flocule",
            "L’humus reste en solution colloïdale",
            "L’humus se transforme en argile",
            "L’humus disparaît"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calcium a le même effet sur l’humus que sur l’argile."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q3",
          "type": "mcq",
          "prompt": "On mélange de l’argile et de l’humus en suspension, puis on ajoute du CaCl₂ : la floculation est importante. Que montre ce résultat ?",
          "options": [
            "L’argile et l’humus s’associent grâce au calcium",
            "L’argile et l’humus se repoussent toujours",
            "Le calcium dissout l’humus",
            "Le mélange ne contient pas d’argile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la formation du complexe argilo-humique."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q4",
          "type": "mcq",
          "prompt": "Pourquoi l’argile et l’humus ne peuvent-ils pas s’unir directement ?",
          "options": [
            "Ils sont tous deux chargés négativement et se repoussent",
            "Ils sont tous deux chargés positivement",
            "L’argile est un liquide",
            "L’humus n’existe que dans la soude"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux charges de même signe se repoussent."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q5",
          "type": "mcq",
          "prompt": "Quel est le rôle des ions calcium Ca²⁺ dans le complexe argilo-humique ?",
          "options": [
            "Ils font le pont entre l’argile et l’humus, chargés négativement",
            "Ils repoussent l’humus",
            "Ils dissolvent l’argile",
            "Ils remplacent l’eau du sol"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux charges + : une vers l’argile, une vers l’humus."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p02_q6",
          "type": "mcq",
          "prompt": "« Les ions chlorure Cl⁻ peuvent former des ponts entre les particules d’argile et d’humus. » Vrai ou faux ?",
          "options": [
            "Faux : un anion est repoussé par l’argile et l’humus, chargés négativement",
            "Vrai",
            "Faux : seuls les ions sodium le peuvent",
            "Vrai, à la place du calcium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seuls des cations peuvent relier deux colloïdes négatifs."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l03_echanges_ions_sol_p03",
      "order": 3,
      "title": "Le pouvoir absorbant du sol",
      "summary": "Le complexe retient les cations, pas les anions.",
      "conceptExplanation": "- Les charges négatives du complexe argilo-humique attirent et retiennent les ions positifs (cations : Ca²⁺, K⁺, Mg²⁺, Na⁺…) de la solution du sol. C’est le pouvoir absorbant du complexe, appelé aussi complexe adsorbant.\n- L’adsorption est la fixation d’ions à la surface du complexe ; la désorption est la libération d’ions fixés.\n- Expérience des colorants : le bleu de méthylène (coloré par un cation) versé sur un sol donne un filtrat incolore : le cation est retenu. L’éosine (colorée par un anion) donne un filtrat rouge : l’anion n’est pas retenu.\n- La caractéristique mise en évidence est la charge négative (électronégativité) des colloïdes du sol.\n- Les ions bivalents (Ca²⁺, Mg²⁺) portent deux charges ; l’argile et l’acide humique sont des colloïdes.\n- Corrections du document : il écrit que les colloïdes fixent « les cations d’abord puis les anions », et son texte à trous attend « les anions » ; or ses propres expériences (éosine, expérience de Way) montrent que les anions ne sont pas retenus. C’est pourquoi les anions comme les nitrates sont facilement entraînés par l’eau. Dans l’activité 3, il range l’argile parmi les ions bivalents : l’argile, comme l’acide humique, est un colloïde.",
      "keyRule": "Colloïdes du sol chargés − → retiennent les cations (+), pas les anions (−). Adsorption = fixation ; désorption = libération.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter l’expérience des colorants",
        "statement": "Le bleu de méthylène (cation) donne un filtrat incolore, l’éosine (anion) un filtrat rouge. Concluez.",
        "methodSteps": [
          "Le cation coloré a été retenu par le sol ; l’anion coloré est passé.",
          "Le sol attire donc les charges positives et repousse les négatives."
        ],
        "conclusion": "Les colloïdes du sol sont chargés négativement : ils retiennent les cations."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Pouvoir absorbant",
          "stepTheme": "Complexe adsorbant",
          "stepTitle": "Le sol retient des ions",
          "paragraphText": "Grâce à ses **charges négatives**, le complexe argilo-humique **retient** des ions positifs de la solution du sol : c’est son **pouvoir absorbant**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q1",
            "type": "mcq",
            "prompt": "Qu’appelle-t-on le pouvoir absorbant du complexe argilo-humique ?",
            "options": [
              "Sa capacité à retenir des ions à sa surface",
              "Sa capacité à absorber la lumière",
              "Sa capacité à produire de l’humus",
              "Sa capacité à dissoudre les roches"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On parle aussi de complexe adsorbant."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le sol retient-il les ions positifs ou négatifs ?",
            "caption": "On verse deux colorants sur deux échantillons du même sol.",
            "tableData": {
              "headers": [
                "Colorant versé",
                "Nature de l’ion coloré",
                "Filtrat obtenu",
                "Conclusion"
              ],
              "rows": [
                [
                  "Bleu de méthylène",
                  "Cation (+)",
                  "Incolore",
                  "Le cation est retenu par le sol"
                ],
                [
                  "Éosine (rouge)",
                  "Anion (−)",
                  "Rouge",
                  "L’anion n’est pas retenu"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Bleu de méthylène",
          "stepTheme": "Cation",
          "stepTitle": "Un filtrat incolore",
          "paragraphText": "Le **bleu de méthylène** doit sa couleur à un **cation** : le filtrat est **incolore**, car le cation a été **retenu** par le sol.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q2",
            "type": "mcq",
            "prompt": "On verse du bleu de méthylène, coloré par un cation, sur un échantillon de sol : le filtrat est incolore. Pourquoi ?",
            "options": [
              "Le cation coloré a été retenu par les charges négatives du sol",
              "Le bleu a été détruit par l’eau",
              "Le sol a produit un anion",
              "Le filtre était bouché"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les charges + sont attirées par les charges −."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Éosine",
          "stepTheme": "Anion",
          "stepTitle": "Un filtrat rouge",
          "paragraphText": "L’**éosine** contient un **anion** coloré : le filtrat reste **rouge**, car l’anion est **repoussé** par le sol, chargé négativement.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q3",
            "type": "mcq",
            "prompt": "On verse de l’éosine, colorée par un anion, sur le même sol : le filtrat est rouge. Pourquoi ?",
            "options": [
              "L’anion est repoussé par les charges négatives du sol et passe dans le filtrat",
              "L’anion est retenu par le sol",
              "L’éosine réagit avec le calcium",
              "Le sol est chargé positivement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Charges de même signe : répulsion."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Électronégatif",
          "stepTheme": "Déduction",
          "stepTitle": "La charge des colloïdes",
          "paragraphText": "Ces expériences montrent que les colloïdes du sol (argile et humus) sont **chargés négativement** (électronégatifs).",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q4",
            "type": "mcq",
            "prompt": "Quelle caractéristique du complexe argilo-humique l’expérience des colorants met-elle en évidence ?",
            "options": [
              "Sa charge négative (électronégativité)",
              "Sa charge positive",
              "Sa couleur rouge",
              "Sa forte teneur en sable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’origine de tout le pouvoir absorbant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Adsorption",
          "stepTheme": "Activité 4",
          "stepTitle": "Adsorption et désorption",
          "paragraphText": "**Adsorption** : fixation d’ions **à la surface** du complexe. **Désorption** : **libération** des ions fixés (c’est l’inverse).",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q5",
            "type": "mcq",
            "prompt": "Qu’est-ce que l’adsorption, dans le sol ?",
            "options": [
              "La fixation d’ions à la surface du complexe argilo-humique",
              "L’absorption des ions par les plantes",
              "Le déplacement des ions par l’eau",
              "La libération des ions fixés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé du document ajoute à tort la réponse « fixation par les plantes »."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Anions",
          "stepTheme": "Erreur du document",
          "stepTitle": "Le complexe ne fixe pas les anions",
          "paragraphText": "Le document dit que les colloïdes fixent « les cations d’abord, puis les **anions** ». Ses propres expériences montrent l’inverse : les **anions** (Cl⁻, éosine) **ne sont pas retenus**. C’est pourquoi les nitrates sont facilement lessivés.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q6",
            "type": "mcq",
            "prompt": "Le complexe argilo-humique retient-il les anions comme le chlorure Cl⁻ ?",
            "options": [
              "Non : chargés négativement, les anions sont repoussés et restent dans la solution",
              "Oui, autant que les cations",
              "Oui, plus que les cations",
              "Oui, grâce aux ions sodium"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans l’expérience de Way, la quantité de Cl⁻ ne change pas."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Classer",
          "stepTheme": "Activité 3",
          "stepTitle": "Colloïdes et ions bivalents",
          "paragraphText": "L’**argile** et l’**acide humique** sont des **colloïdes** ; les ions **calcium** Ca²⁺ et **magnésium** Mg²⁺ sont **bivalents** (deux charges).",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q7",
            "type": "mcq",
            "prompt": "Dans quelle catégorie range-t-on l’argile ?",
            "options": [
              "Parmi les colloïdes, comme l’acide humique",
              "Parmi les ions bivalents, comme Ca²⁺",
              "Parmi les anions, comme Cl⁻",
              "Parmi les ions monovalents, comme Na⁺"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé du document range à tort l’argile parmi les ions bivalents."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q1",
          "type": "mcq",
          "prompt": "Qu’appelle-t-on le pouvoir absorbant du complexe argilo-humique ?",
          "options": [
            "Sa capacité à retenir des ions à sa surface",
            "Sa capacité à absorber la lumière",
            "Sa capacité à produire de l’humus",
            "Sa capacité à dissoudre les roches"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On parle aussi de complexe adsorbant."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q2",
          "type": "mcq",
          "prompt": "On verse du bleu de méthylène, coloré par un cation, sur un échantillon de sol : le filtrat est incolore. Pourquoi ?",
          "options": [
            "Le cation coloré a été retenu par les charges négatives du sol",
            "Le bleu a été détruit par l’eau",
            "Le sol a produit un anion",
            "Le filtre était bouché"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les charges + sont attirées par les charges −."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q3",
          "type": "mcq",
          "prompt": "On verse de l’éosine, colorée par un anion, sur le même sol : le filtrat est rouge. Pourquoi ?",
          "options": [
            "L’anion est repoussé par les charges négatives du sol et passe dans le filtrat",
            "L’anion est retenu par le sol",
            "L’éosine réagit avec le calcium",
            "Le sol est chargé positivement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Charges de même signe : répulsion."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q4",
          "type": "mcq",
          "prompt": "Quelle caractéristique du complexe argilo-humique l’expérience des colorants met-elle en évidence ?",
          "options": [
            "Sa charge négative (électronégativité)",
            "Sa charge positive",
            "Sa couleur rouge",
            "Sa forte teneur en sable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’origine de tout le pouvoir absorbant."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q5",
          "type": "mcq",
          "prompt": "Qu’est-ce que l’adsorption, dans le sol ?",
          "options": [
            "La fixation d’ions à la surface du complexe argilo-humique",
            "L’absorption des ions par les plantes",
            "Le déplacement des ions par l’eau",
            "La libération des ions fixés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé du document ajoute à tort la réponse « fixation par les plantes »."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q6",
          "type": "mcq",
          "prompt": "Le complexe argilo-humique retient-il les anions comme le chlorure Cl⁻ ?",
          "options": [
            "Non : chargés négativement, les anions sont repoussés et restent dans la solution",
            "Oui, autant que les cations",
            "Oui, plus que les cations",
            "Oui, grâce aux ions sodium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans l’expérience de Way, la quantité de Cl⁻ ne change pas."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p03_q7",
          "type": "mcq",
          "prompt": "Dans quelle catégorie range-t-on l’argile ?",
          "options": [
            "Parmi les colloïdes, comme l’acide humique",
            "Parmi les ions bivalents, comme Ca²⁺",
            "Parmi les anions, comme Cl⁻",
            "Parmi les ions monovalents, comme Na⁺"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé du document range à tort l’argile parmi les ions bivalents."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l03_echanges_ions_sol_p04",
      "order": 4,
      "title": "Le mécanisme des échanges d’ions",
      "summary": "Équilibre entre ions fixés et ions libres ; déficit, excès, engrais, lessivage.",
      "conceptExplanation": "- Dans le sol, il y a toujours un équilibre, pour un cation donné, entre les ions libres de la solution du sol et ceux fixés sur le complexe argilo-humique.\n- Cet équilibre peut être déplacé dans les deux sens :\n- quand les racines absorbent des ions ou quand l’eau les entraîne en profondeur (lessivage), la solution du sol s’appauvrit : le complexe libère des ions (désorption) et les met à la disposition des plantes ;\n- quand on apporte des ions par des engrais ou des amendements, la solution du sol s’enrichit : le complexe fixe des ions (adsorption) et évite leur perte par infiltration.\n- Exemples : un apport de chlorure de potassium (KCl) : le complexe fixe des K⁺ et libère des Ca²⁺ ; un apport de chaux Ca(OH)₂ : le complexe fixe des Ca²⁺ et libère des ions H⁺, qui s’unissent aux OH⁻ pour former de l’eau : le sol devient moins acide.\n- Sources d’ions du sol : l’altération de la roche mère et la minéralisation de la matière organique. Pertes : absorption par les plantes et les microorganismes, lessivage.\n- Corrections du document : dans l’activité 1, il déclare vraie « le complexe libère des ions quand la solution du sol s’enrichit en ions » ; c’est faux, il en fixe. Dans l’activité 4, il donne la rotation des cultures comme une source d’ions du sol : les sources sont l’altération de la roche mère et la minéralisation de la matière organique.",
      "keyRule": "Solution appauvrie (racines, lessivage) → le complexe libère des ions. Solution enrichie (engrais, chaux) → le complexe fixe des ions.",
      "formulas": [],
      "workedExample": {
        "title": "Prévoir la réaction du complexe",
        "statement": "Un agriculteur apporte un engrais potassique (KCl) à son champ. Que fait le complexe argilo-humique ?",
        "methodSteps": [
          "La solution du sol s’enrichit en ions K⁺.",
          "Pour rétablir l’équilibre, le complexe fixe des K⁺ et libère d’autres cations, comme Ca²⁺."
        ],
        "conclusion": "Le complexe stocke le potassium et le rendra aux plantes plus tard."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Équilibre",
          "stepTheme": "Principe",
          "stepTitle": "Un équilibre permanent",
          "paragraphText": "Il existe un **équilibre** permanent entre les ions **libres** de la solution du sol et les ions **fixés** sur le complexe argilo-humique.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q1",
            "type": "mcq",
            "prompt": "Que se passe-t-il en permanence entre la solution du sol et le complexe argilo-humique ?",
            "options": [
              "Un équilibre d’échanges entre ions libres et ions fixés",
              "Rien : les ions fixés ne bougent jamais",
              "Le complexe se dissout",
              "La solution du sol devient de l’argile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Cet équilibre peut être déplacé dans les deux sens."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le complexe argilo-humique s’adapte à la solution du sol",
            "caption": "Un équilibre permanent existe entre les ions fixés et les ions libres.",
            "tableData": {
              "headers": [
                "Situation dans la solution du sol",
                "Cause",
                "Réaction du complexe"
              ],
              "rows": [
                [
                  "Ions en déficit",
                  "Absorption par les racines, lessivage",
                  "Il libère des ions (désorption)"
                ],
                [
                  "Ions en excès",
                  "Engrais, amendements (chaux)",
                  "Il fixe des ions (adsorption)"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Déficit",
          "stepTheme": "Racines",
          "stepTitle": "Quand les plantes absorbent des ions",
          "paragraphText": "Quand les **racines absorbent** des ions, la solution s’**appauvrit** : le complexe **libère** des ions (désorption) pour la réalimenter.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q2",
            "type": "mcq",
            "prompt": "Les racines d’un champ de maïs absorbent beaucoup d’ions de la solution du sol. Que fait le complexe argilo-humique ?",
            "options": [
              "Il libère des ions dans la solution du sol",
              "Il fixe encore plus d’ions",
              "Il se détruit",
              "Il ne réagit pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le complexe est une réserve d’ions pour les plantes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Lessivage",
          "stepTheme": "Pluies",
          "stepTitle": "Quand la pluie entraîne des ions",
          "paragraphText": "Le **lessivage** (ions entraînés en profondeur par l’eau) appauvrit aussi la solution : le complexe **libère** des ions.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q3",
            "type": "mcq",
            "prompt": "De fortes pluies entraînent les ions de la solution du sol en profondeur. Comment appelle-t-on ce phénomène ?",
            "options": [
              "Le lessivage",
              "L’adsorption",
              "La floculation",
              "La minéralisation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les ions non fixés partent avec l’eau d’infiltration."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Excès",
          "stepTheme": "Engrais",
          "stepTitle": "Quand on apporte des engrais",
          "paragraphText": "Un apport d’**engrais** ou d’**amendements** enrichit la solution : le complexe **fixe** des ions (adsorption) et **évite leur perte**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q4",
            "type": "mcq",
            "prompt": "Un agriculteur apporte des engrais : la solution du sol s’enrichit en ions. Que fait le complexe argilo-humique ?",
            "options": [
              "Il fixe une partie de ces ions",
              "Il libère tous ses ions",
              "Il se transforme en sable",
              "Il n’intervient pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il stocke l’excès et le rendra plus tard."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Vrai ou faux",
          "stepTheme": "Erreur du document",
          "stepTitle": "Libérer ou fixer ?",
          "paragraphText": "Le corrigé déclare vraie : « le complexe **libère** des ions quand la solution s’**enrichit** ». C’est **faux** : quand la solution s’enrichit, le complexe **fixe** des ions ; il en libère quand elle s’appauvrit.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q5",
            "type": "mcq",
            "prompt": "« Le complexe argilo-humique libère des ions dans la solution du sol quand celle-ci s’enrichit en ions. » Vrai ou faux ?",
            "options": [
              "Faux : quand la solution s’enrichit, le complexe fixe des ions",
              "Vrai",
              "Faux : le complexe ne fixe ni ne libère d’ions",
              "Vrai, seulement avec la chaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Excès → fixation ; déficit → libération."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Chaux",
          "stepTheme": "Amendement",
          "stepTitle": "L’apport de chaux",
          "paragraphText": "La **chaux** Ca(OH)₂ apporte des **Ca²⁺** : le complexe les fixe et libère des **H⁺**, qui forment de l’eau avec les **OH⁻**. Le sol devient **moins acide**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q6",
            "type": "mcq",
            "prompt": "Un agriculteur apporte de la chaux Ca(OH)₂ à un sol acide. Quel ion le complexe argilo-humique libère-t-il en échange des Ca²⁺ fixés ?",
            "options": [
              "L’ion H⁺, qui forme de l’eau avec OH⁻",
              "L’ion Cl⁻",
              "L’ion K⁺ seulement",
              "Aucun ion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le principe du chaulage."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Sources",
          "stepTheme": "Activité 4",
          "stepTitle": "D’où viennent les ions du sol ?",
          "paragraphText": "Les ions du sol viennent de l’**altération de la roche mère** et de la **minéralisation de la matière organique**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q7",
            "type": "mcq",
            "prompt": "Quelle est l’une des principales sources d’ions minéraux du sol ?",
            "options": [
              "La minéralisation de la matière organique",
              "Le lessivage des ions",
              "L’absorption par les racines",
              "La floculation de l’argile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le lessivage et l’absorption sont des pertes, pas des sources."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q1",
          "type": "mcq",
          "prompt": "Que se passe-t-il en permanence entre la solution du sol et le complexe argilo-humique ?",
          "options": [
            "Un équilibre d’échanges entre ions libres et ions fixés",
            "Rien : les ions fixés ne bougent jamais",
            "Le complexe se dissout",
            "La solution du sol devient de l’argile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cet équilibre peut être déplacé dans les deux sens."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q2",
          "type": "mcq",
          "prompt": "Les racines d’un champ de maïs absorbent beaucoup d’ions de la solution du sol. Que fait le complexe argilo-humique ?",
          "options": [
            "Il libère des ions dans la solution du sol",
            "Il fixe encore plus d’ions",
            "Il se détruit",
            "Il ne réagit pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le complexe est une réserve d’ions pour les plantes."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q3",
          "type": "mcq",
          "prompt": "De fortes pluies entraînent les ions de la solution du sol en profondeur. Comment appelle-t-on ce phénomène ?",
          "options": [
            "Le lessivage",
            "L’adsorption",
            "La floculation",
            "La minéralisation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ions non fixés partent avec l’eau d’infiltration."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q4",
          "type": "mcq",
          "prompt": "Un agriculteur apporte des engrais : la solution du sol s’enrichit en ions. Que fait le complexe argilo-humique ?",
          "options": [
            "Il fixe une partie de ces ions",
            "Il libère tous ses ions",
            "Il se transforme en sable",
            "Il n’intervient pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il stocke l’excès et le rendra plus tard."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q5",
          "type": "mcq",
          "prompt": "« Le complexe argilo-humique libère des ions dans la solution du sol quand celle-ci s’enrichit en ions. » Vrai ou faux ?",
          "options": [
            "Faux : quand la solution s’enrichit, le complexe fixe des ions",
            "Vrai",
            "Faux : le complexe ne fixe ni ne libère d’ions",
            "Vrai, seulement avec la chaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Excès → fixation ; déficit → libération."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q6",
          "type": "mcq",
          "prompt": "Un agriculteur apporte de la chaux Ca(OH)₂ à un sol acide. Quel ion le complexe argilo-humique libère-t-il en échange des Ca²⁺ fixés ?",
          "options": [
            "L’ion H⁺, qui forme de l’eau avec OH⁻",
            "L’ion Cl⁻",
            "L’ion K⁺ seulement",
            "Aucun ion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le principe du chaulage."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p04_q7",
          "type": "mcq",
          "prompt": "Quelle est l’une des principales sources d’ions minéraux du sol ?",
          "options": [
            "La minéralisation de la matière organique",
            "Le lessivage des ions",
            "L’absorption par les racines",
            "La floculation de l’argile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le lessivage et l’absorption sont des pertes, pas des sources."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l03_echanges_ions_sol_p05",
      "order": 5,
      "title": "Évaluation : l’expérience de Way",
      "summary": "Sol sableux et sol argileux échangent des cations avec une solution de KCl.",
      "conceptExplanation": "- Expérience de Way : on verse une solution de chlorure de potassium (KCl) sur une terre sableuse et sur une terre argileuse, et on analyse les filtrats (unités arbitraires).\n- Solution initiale : K⁺ 10, Cl⁻ 10, Ca²⁺ 0. Filtrat du sol sableux : K⁺ 8, Cl⁻ 10, Ca²⁺ 2. Filtrat du sol argileux : K⁺ 2, Cl⁻ 10, Ca²⁺ 8.\n- Analyse : le sol sableux a retenu 2 unités de K⁺ et libéré 2 unités de Ca²⁺ ; le sol argileux a retenu 8 unités de K⁺ et libéré 8 unités de Ca²⁺. Les ions Cl⁻ ne sont pas retenus : leur quantité ne change pas.\n- Interprétation : les sols, chargés négativement, échangent des cations (K⁺ contre Ca²⁺) avec la solution ; ils ne retiennent pas les anions. Le sol argileux, plus riche en complexe argilo-humique, échange beaucoup plus que le sol sableux.\n- Rôle du complexe argilo-humique : il fixe et échange les ions avec la solution du sol, et les met à la disposition des plantes.\n- Correction du document : son corrigé dit que le sol sableux « perd 2 K⁺ et fixe 2 Ca²⁺ » et que le sol argileux « libère 8 K⁺ et fixe 8 Ca²⁺ » ; c’est l’inverse, comme le montrent les filtrats : le sol retient le K⁺ venu de la solution et libère le Ca²⁺ qu’il portait.",
      "keyRule": "Le sol retient K⁺ et libère Ca²⁺ ; Cl⁻ ne change pas. Sol argileux : échanges bien plus importants.",
      "formulas": [],
      "workedExample": {
        "title": "Lire le filtrat du sol argileux",
        "statement": "La solution versée contient 10 K⁺ et 0 Ca²⁺ ; le filtrat du sol argileux contient 2 K⁺ et 8 Ca²⁺. Que s’est-il passé ?",
        "methodSteps": [
          "Il manque 8 K⁺ dans le filtrat : le sol les a retenus.",
          "Il est apparu 8 Ca²⁺ : le sol les a libérés."
        ],
        "conclusion": "Le sol argileux a échangé des Ca²⁺ contre des K⁺ : c’est un échange de cations."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Sol sableux",
          "stepTheme": "Analyse",
          "stepTitle": "Ce que fait le sol sableux",
          "paragraphText": "Solution versée : **10 K⁺**, **0 Ca²⁺**. Filtrat du sol sableux : **8 K⁺**, **2 Ca²⁺**. Le sol a **retenu 2 K⁺** et **libéré 2 Ca²⁺**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p05_q1",
            "type": "mcq",
            "prompt": "On verse une solution contenant 10 K⁺, 10 Cl⁻ et 0 Ca²⁺ sur un sol sableux ; le filtrat contient 8 K⁺, 10 Cl⁻ et 2 Ca²⁺. Qu’a fait le sol ?",
            "options": [
              "Il a retenu 2 K⁺ et libéré 2 Ca²⁺",
              "Il a libéré 2 K⁺ et retenu 2 Ca²⁺",
              "Il a retenu les Cl⁻",
              "Il n’a rien échangé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce qui manque dans le filtrat a été retenu ; ce qui apparaît a été libéré."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Expérience de Way",
            "caption": "On verse une solution de chlorure de potassium (KCl) sur un sol sableux et sur un sol argileux (unités arbitraires).",
            "tableData": {
              "headers": [
                "Ion",
                "Solution initiale",
                "Filtrat du sol sableux",
                "Filtrat du sol argileux"
              ],
              "rows": [
                [
                  "K⁺",
                  10,
                  8,
                  2
                ],
                [
                  "Cl⁻",
                  10,
                  10,
                  10
                ],
                [
                  "Ca²⁺",
                  0,
                  2,
                  8
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepBadge": "Sol argileux",
          "stepTheme": "Analyse",
          "stepTitle": "Ce que fait le sol argileux",
          "paragraphText": "Filtrat du sol argileux : **2 K⁺**, **8 Ca²⁺**. Le sol a **retenu 8 K⁺** et **libéré 8 Ca²⁺**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p05_q2",
            "type": "mcq",
            "prompt": "La même solution (10 K⁺, 10 Cl⁻, 0 Ca²⁺) versée sur un sol argileux donne un filtrat de 2 K⁺, 10 Cl⁻ et 8 Ca²⁺. Qu’a fait le sol argileux ?",
            "options": [
              "Il a retenu 8 K⁺ et libéré 8 Ca²⁺",
              "Il a libéré 8 K⁺ et retenu 8 Ca²⁺",
              "Il a retenu 8 Cl⁻",
              "Il a retenu tous les ions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "10 − 2 = 8 K⁺ retenus ; 8 Ca²⁺ apparus."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Sens",
          "stepTheme": "Erreur du document",
          "stepTitle": "Qui retient quoi ?",
          "paragraphText": "Le corrigé du document écrit que le sol « **perd** des K⁺ et **fixe** des Ca²⁺ » : c’est l’**inverse**. Le K⁺ disparaît du filtrat parce que le sol l’a **retenu** ; le Ca²⁺ apparaît parce que le sol l’a **libéré**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p05_q3",
            "type": "mcq",
            "prompt": "Dans l’expérience de Way, le K⁺ diminue dans le filtrat et le Ca²⁺ y apparaît. Comment l’interpréter ?",
            "options": [
              "Le sol a fixé des K⁺ et libéré des Ca²⁺",
              "Le sol a perdu des K⁺ et fixé des Ca²⁺",
              "Le sol a fabriqué du calcium",
              "Le chlorure a remplacé le potassium"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le Ca²⁺ ne peut venir que du sol : la solution n’en contenait pas."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Chlorure",
          "stepTheme": "Interprétation",
          "stepTitle": "Le chlorure ne change pas",
          "paragraphText": "Les ions **Cl⁻** restent à **10** dans les deux filtrats : le sol ne retient **pas** les **anions**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p05_q4",
            "type": "mcq",
            "prompt": "Dans l’expérience de Way, la quantité d’ions chlorure Cl⁻ reste égale à 10 dans les filtrats. Que montre ce résultat ?",
            "options": [
              "Le sol ne retient pas les anions",
              "Le sol retient tous les anions",
              "Le chlorure s’est transformé en calcium",
              "Le sol est chargé positivement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sol, chargé négativement, n’échange que des cations."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Comparer",
          "stepTheme": "Interprétation",
          "stepTitle": "Sableux ou argileux ?",
          "paragraphText": "Le sol **argileux** échange **8** unités, le sol **sableux** **2** : le sol argileux est bien plus riche en **complexe argilo-humique**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p05_q5",
            "type": "mcq",
            "prompt": "Pourquoi le sol argileux échange-t-il beaucoup plus de cations (8 unités) que le sol sableux (2 unités) ?",
            "options": [
              "Il est plus riche en complexe argilo-humique, chargé négativement",
              "Il contient plus de sable",
              "Il est chargé positivement",
              "Il ne contient pas de calcium"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sable retient peu d’ions."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Rôle",
          "stepTheme": "Déduction",
          "stepTitle": "Le rôle du complexe argilo-humique",
          "paragraphText": "Le complexe argilo-humique **fixe** et **échange** les ions avec la solution du sol, et les **met à la disposition des plantes**.",
          "exercise": {
            "id": "premiere_c_svt_l03_echanges_ions_sol_p05_q6",
            "type": "mcq",
            "prompt": "Quel est le rôle du complexe argilo-humique dans un sol cultivé ?",
            "options": [
              "Il fixe et échange les ions minéraux et les met à la disposition des plantes",
              "Il empêche les plantes d’absorber les ions",
              "Il détruit les engrais",
              "Il rend le sol imperméable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est une réserve d’ions qui se recharge et se vide."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p05_q1",
          "type": "mcq",
          "prompt": "On verse une solution contenant 10 K⁺, 10 Cl⁻ et 0 Ca²⁺ sur un sol sableux ; le filtrat contient 8 K⁺, 10 Cl⁻ et 2 Ca²⁺. Qu’a fait le sol ?",
          "options": [
            "Il a retenu 2 K⁺ et libéré 2 Ca²⁺",
            "Il a libéré 2 K⁺ et retenu 2 Ca²⁺",
            "Il a retenu les Cl⁻",
            "Il n’a rien échangé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce qui manque dans le filtrat a été retenu ; ce qui apparaît a été libéré."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p05_q2",
          "type": "mcq",
          "prompt": "La même solution (10 K⁺, 10 Cl⁻, 0 Ca²⁺) versée sur un sol argileux donne un filtrat de 2 K⁺, 10 Cl⁻ et 8 Ca²⁺. Qu’a fait le sol argileux ?",
          "options": [
            "Il a retenu 8 K⁺ et libéré 8 Ca²⁺",
            "Il a libéré 8 K⁺ et retenu 8 Ca²⁺",
            "Il a retenu 8 Cl⁻",
            "Il a retenu tous les ions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "10 − 2 = 8 K⁺ retenus ; 8 Ca²⁺ apparus."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p05_q3",
          "type": "mcq",
          "prompt": "Dans l’expérience de Way, le K⁺ diminue dans le filtrat et le Ca²⁺ y apparaît. Comment l’interpréter ?",
          "options": [
            "Le sol a fixé des K⁺ et libéré des Ca²⁺",
            "Le sol a perdu des K⁺ et fixé des Ca²⁺",
            "Le sol a fabriqué du calcium",
            "Le chlorure a remplacé le potassium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le Ca²⁺ ne peut venir que du sol : la solution n’en contenait pas."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p05_q4",
          "type": "mcq",
          "prompt": "Dans l’expérience de Way, la quantité d’ions chlorure Cl⁻ reste égale à 10 dans les filtrats. Que montre ce résultat ?",
          "options": [
            "Le sol ne retient pas les anions",
            "Le sol retient tous les anions",
            "Le chlorure s’est transformé en calcium",
            "Le sol est chargé positivement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sol, chargé négativement, n’échange que des cations."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p05_q5",
          "type": "mcq",
          "prompt": "Pourquoi le sol argileux échange-t-il beaucoup plus de cations (8 unités) que le sol sableux (2 unités) ?",
          "options": [
            "Il est plus riche en complexe argilo-humique, chargé négativement",
            "Il contient plus de sable",
            "Il est chargé positivement",
            "Il ne contient pas de calcium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sable retient peu d’ions."
        },
        {
          "id": "premiere_c_svt_l03_echanges_ions_sol_p05_q6",
          "type": "mcq",
          "prompt": "Quel est le rôle du complexe argilo-humique dans un sol cultivé ?",
          "options": [
            "Il fixe et échange les ions minéraux et les met à la disposition des plantes",
            "Il empêche les plantes d’absorber les ions",
            "Il détruit les engrais",
            "Il rend le sol imperméable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est une réserve d’ions qui se recharge et se vide."
        }
      ]
    }
  ]
};
