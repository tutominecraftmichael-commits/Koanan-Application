import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère D_L8_Les échanges dions au niveau du sol valid.pdf (Mon école à la maison ; le document l’intitule « Leçon 3 ») ». Première D (programme propre à la 1re D).
// Fichier généré (scratchpad build_1re_d_svt_c.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_D_L08_ECHANGES_IONS_SOL: CurriculumChapter = {
  "id": "premiere_d_svt_l08_echanges_ions_sol",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "order": 8,
  "title": "Leçon 8 : Les échanges d’ions au niveau du sol",
  "summary": "Charges négatives de l’argile et de l’humus, floculation par le calcium, complexe argilo-humique et pont calcique, pouvoir absorbant, équilibre entre la solution du sol et le complexe, expérience de Way.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT 1ère D_L8_Les échanges dions au niveau du sol valid.pdf (Mon école à la maison ; le document l’intitule « Leçon 3 »)",
  "points": [
    {
      "id": "premiere_d_svt_l08_echanges_ions_sol_p01",
      "order": 1,
      "title": "Argile et humus sont chargés négativement",
      "summary": "Bleu de méthylène et éosine.",
      "conceptExplanation": "Situation : la coopérative scolaire visite une parcelle de maïs de l’ANADER. L’agent leur parle des échanges d’ions dans le sol et de l’importance du complexe argilo-humique. Les élèves veulent comprendre sa formation et le mécanisme des échanges.\n- Expérience 1 : on verse du bleu de méthylène (particules colorées chargées positivement) sur de la terre argileuse ou humifère : le filtrat est décoloré. Avec de l’éosine (particules colorées chargées négativement), le filtrat reste rouge.\n- Les cations du bleu de méthylène sont retenus par la terre ; les anions de l’éosine passent.\n- Deux charges de signes contraires s’attirent, deux charges de même signe se repoussent : les particules d’argile et d’humus sont donc chargées négativement (électronégatives).\n- Les particules d’argile et d’humus sont des colloïdes : de très petites particules (de 0,001 à 0,3 micromètre environ) qui peuvent rester en suspension dans l’eau.",
      "keyRule": "La terre retient le bleu de méthylène (cations) et laisse passer l’éosine (anions) : argile et humus sont chargés négativement.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter la décoloration",
        "statement": "Pourquoi le bleu de méthylène ressort-il décoloré de la terre argileuse ?",
        "methodSteps": [
          "Ses particules colorées sont des cations (charges +).",
          "Elles sont attirées et retenues par l’argile, chargée négativement."
        ],
        "conclusion": "L’argile (et l’humus) retiennent les cations : ils sont électronégatifs."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Bleu de méthylène",
          "stepTheme": "Expérience 1",
          "stepTitle": "Un filtrat décoloré",
          "paragraphText": "Le **bleu de méthylène** (particules colorées **positives**) ressort **décoloré** : ses **cations** sont **retenus** par la terre.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q1",
            "type": "mcq",
            "prompt": "On verse du bleu de méthylène, dont les particules colorées sont chargées positivement, sur de la terre argileuse : le filtrat est décoloré. Pourquoi ?",
            "options": [
              "Les particules colorées, positives, ont été retenues par l’argile",
              "Le bleu de méthylène s’est évaporé",
              "L’argile a ajouté de la couleur",
              "Le filtre a absorbé l’eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Charges contraires : attraction."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Expérience 1 : bleu de méthylène et éosine",
            "caption": "Les deux colorants traversent de la terre argileuse ou humifère.",
            "tableData": {
              "headers": [
                "Colorant",
                "Charge des particules colorées",
                "Filtrat"
              ],
              "rows": [
                [
                  "Bleu de méthylène",
                  "Positive (cations)",
                  "Décoloré : les cations sont retenus"
                ],
                [
                  "Éosine",
                  "Négative (anions)",
                  "Rouge : les anions passent"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Éosine",
          "stepTheme": "Expérience 1",
          "stepTitle": "Un filtrat qui reste rouge",
          "paragraphText": "L’**éosine** (particules colorées **négatives**) traverse la terre : le filtrat reste **rouge**. Les **anions** ne sont **pas retenus**.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q2",
            "type": "mcq",
            "prompt": "On verse de l’éosine, dont les particules colorées sont chargées négativement, sur de la terre humifère : le filtrat reste rouge. Que montre ce résultat ?",
            "options": [
              "Les particules négatives ne sont pas retenues par la terre",
              "La terre retient toutes les particules",
              "L’éosine est un cation",
              "La terre est chargée positivement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Charges de même signe : répulsion."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Électronégatifs",
          "stepTheme": "Déduction",
          "stepTitle": "Des particules chargées négativement",
          "paragraphText": "La terre **retient les cations** et **laisse passer les anions** : l’argile et l’humus sont **chargés négativement**.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q3",
            "type": "mcq",
            "prompt": "Que déduire du fait que l’argile et l’humus retiennent les cations et laissent passer les anions ?",
            "options": [
              "L’argile et l’humus sont chargés négativement",
              "L’argile et l’humus sont chargés positivement",
              "L’argile et l’humus n’ont pas de charge",
              "Seule l’argile est chargée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On dit qu’ils sont électronégatifs."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Colloïdes",
          "stepTheme": "Notion",
          "stepTitle": "De très petites particules",
          "paragraphText": "L’**argile** et l’**humus** sont des **colloïdes** : de très petites particules qui peuvent rester en **suspension** dans l’eau.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q4",
            "type": "mcq",
            "prompt": "Comment appelle-t-on les très petites particules, comme l’argile et l’humus, qui peuvent rester en suspension dans l’eau ?",
            "options": [
              "Des colloïdes",
              "Des cations",
              "Des cristaux de sel",
              "Des grains de sable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elles mesurent moins d’un micromètre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Cation",
          "stepTheme": "Vocabulaire",
          "stepTitle": "Cation et anion",
          "paragraphText": "Un **cation** est un ion **positif** (Ca²⁺, K⁺, Mg²⁺, Na⁺) ; un **anion** est un ion **négatif** (Cl⁻, NO₃⁻).",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q5",
            "type": "mcq",
            "prompt": "Parmi ces ions : Ca²⁺, Cl⁻, K⁺, NO₃⁻, lesquels sont des cations ?",
            "options": [
              "Ca²⁺ et K⁺",
              "Cl⁻ et NO₃⁻",
              "Ca²⁺ et Cl⁻",
              "Tous les quatre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les cations portent le signe +."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Retenir",
          "stepTheme": "Conséquence",
          "stepTitle": "Des cations retenus par le sol",
          "paragraphText": "Parce qu’ils sont **négatifs**, l’argile et l’humus **retiennent les cations** nutritifs (K⁺, Ca²⁺, Mg²⁺) et les empêchent d’être emportés par l’eau.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q6",
            "type": "mcq",
            "prompt": "Pourquoi un sol riche en argile et en humus garde-t-il mieux le potassium (K⁺) qu’un sol sableux ?",
            "options": [
              "Parce que l’argile et l’humus, chargés négativement, retiennent les cations comme K⁺",
              "Parce que le sable retient mieux les ions",
              "Parce que K⁺ est un anion",
              "Parce que l’humus repousse les cations"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sable, lui, ne retient presque rien."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q1",
          "type": "mcq",
          "prompt": "On verse du bleu de méthylène, dont les particules colorées sont chargées positivement, sur de la terre argileuse : le filtrat est décoloré. Pourquoi ?",
          "options": [
            "Les particules colorées, positives, ont été retenues par l’argile",
            "Le bleu de méthylène s’est évaporé",
            "L’argile a ajouté de la couleur",
            "Le filtre a absorbé l’eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Charges contraires : attraction."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q2",
          "type": "mcq",
          "prompt": "On verse de l’éosine, dont les particules colorées sont chargées négativement, sur de la terre humifère : le filtrat reste rouge. Que montre ce résultat ?",
          "options": [
            "Les particules négatives ne sont pas retenues par la terre",
            "La terre retient toutes les particules",
            "L’éosine est un cation",
            "La terre est chargée positivement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Charges de même signe : répulsion."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q3",
          "type": "mcq",
          "prompt": "Que déduire du fait que l’argile et l’humus retiennent les cations et laissent passer les anions ?",
          "options": [
            "L’argile et l’humus sont chargés négativement",
            "L’argile et l’humus sont chargés positivement",
            "L’argile et l’humus n’ont pas de charge",
            "Seule l’argile est chargée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On dit qu’ils sont électronégatifs."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les très petites particules, comme l’argile et l’humus, qui peuvent rester en suspension dans l’eau ?",
          "options": [
            "Des colloïdes",
            "Des cations",
            "Des cristaux de sel",
            "Des grains de sable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elles mesurent moins d’un micromètre."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q5",
          "type": "mcq",
          "prompt": "Parmi ces ions : Ca²⁺, Cl⁻, K⁺, NO₃⁻, lesquels sont des cations ?",
          "options": [
            "Ca²⁺ et K⁺",
            "Cl⁻ et NO₃⁻",
            "Ca²⁺ et Cl⁻",
            "Tous les quatre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cations portent le signe +."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q6",
          "type": "mcq",
          "prompt": "Pourquoi un sol riche en argile et en humus garde-t-il mieux le potassium (K⁺) qu’un sol sableux ?",
          "options": [
            "Parce que l’argile et l’humus, chargés négativement, retiennent les cations comme K⁺",
            "Parce que le sable retient mieux les ions",
            "Parce que K⁺ est un anion",
            "Parce que l’humus repousse les cations"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sable, lui, ne retient presque rien."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l08_echanges_ions_sol_p02",
      "order": 2,
      "title": "La formation du complexe argilo-humique",
      "summary": "Floculation par le calcium et pont calcique.",
      "conceptExplanation": "- Expérience 2, étape 1 : de la terre argileuse agitée dans de l’eau distillée donne, après filtration, de l’argile fine en suspension. Avec du chlorure de calcium (CaCl₂), l’argile flocule (forme des flocons qui se déposent).\n- Étape 2 : de la terre riche en humus agitée dans de la soude donne de l’humus en solution colloïdale. Avec du CaCl₂, l’humus flocule.\n- Étape 3 : le mélange argile + humus reste stable sans CaCl₂ ; avec du CaCl₂, la floculation est importante.\n- Interprétation : les ions calcium (Ca²⁺) font floculer les colloïdes. L’argile et l’humus, tous deux négatifs, ne peuvent pas s’unir directement ; les ions Ca²⁺, positifs, les relient : c’est le pont calcique.\n- Cette association argile-humus-calcium forme le complexe argilo-humique (CAH). Les micelles d’humus entourent les particules d’argile d’une enveloppe protectrice.\n- Le complexe argilo-humique est donc formé d’argile, d’humus et de cations (surtout Ca²⁺) qui les relient.",
      "keyRule": "Argile (–) + Ca²⁺ + humus (–) = complexe argilo-humique. Le calcium forme un pont entre deux particules négatives.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le pont calcique",
        "statement": "Pourquoi l’argile et l’humus ne s’unissent-ils qu’en présence de calcium ?",
        "methodSteps": [
          "L’argile et l’humus sont tous deux chargés négativement : ils se repoussent.",
          "L’ion Ca²⁺, qui porte deux charges positives, peut s’accrocher à l’un et à l’autre."
        ],
        "conclusion": "Le calcium forme un pont entre l’argile et l’humus : c’est le complexe argilo-humique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Floculation",
          "stepTheme": "Étapes 1 et 2",
          "stepTitle": "Le calcium fait floculer",
          "paragraphText": "Avec du **chlorure de calcium**, l’argile et l’humus **floculent** : ils forment des flocons qui se déposent.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q1",
            "type": "mcq",
            "prompt": "De l’argile fine en suspension dans l’eau forme des flocons qui se déposent quand on ajoute du chlorure de calcium (CaCl₂). Quels ions en sont responsables ?",
            "options": [
              "Les ions calcium Ca²⁺",
              "Les ions chlorure Cl⁻",
              "Les molécules d’eau",
              "Les ions sodium Na⁺"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le calcium neutralise et relie les particules négatives."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Expérience 2 : floculation par le chlorure de calcium",
            "caption": "CaCl₂ apporte des ions Ca²⁺.",
            "tableData": {
              "headers": [
                "Tube",
                "Sans CaCl₂",
                "Avec CaCl₂"
              ],
              "rows": [
                [
                  "Argile (eau distillée)",
                  "Argile en suspension",
                  "Floculation"
                ],
                [
                  "Humus (soude)",
                  "Humus en solution colloïdale",
                  "Floculation"
                ],
                [
                  "Argile + humus",
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
          "stepBadge": "Mélange",
          "stepTheme": "Étape 3",
          "stepTitle": "Une floculation importante",
          "paragraphText": "Le mélange **argile + humus** flocule **fortement** avec le calcium : les deux colloïdes **s’associent**.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q2",
            "type": "mcq",
            "prompt": "Un mélange d’argile et d’humus reste stable sans calcium, mais flocule fortement quand on ajoute du CaCl₂. Que montre ce résultat ?",
            "options": [
              "L’argile et l’humus s’associent grâce aux ions calcium",
              "L’argile et l’humus se repoussent toujours",
              "Le calcium détruit l’humus",
              "L’argile se dissout dans l’humus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ils forment le complexe argilo-humique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Pont calcique",
          "stepTheme": "Mécanisme",
          "stepTitle": "Le pont calcique",
          "paragraphText": "Argile et humus sont **négatifs** : ils ne peuvent pas s’unir directement. L’ion **Ca²⁺** les relie : c’est le **pont calcique**.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q3",
            "type": "mcq",
            "prompt": "Pourquoi l’argile et l’humus ne peuvent-ils pas s’unir directement ?",
            "options": [
              "Parce qu’ils sont tous deux chargés négativement et se repoussent",
              "Parce qu’ils sont tous deux positifs",
              "Parce que l’humus est un gaz",
              "Parce que l’argile est trop lourde"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le calcium, positif, fait le lien."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le complexe argilo-humique",
            "caption": "Argile et humus, tous deux chargés négativement, s’associent grâce aux ions calcium (pont calcique). Le complexe retient des cations à sa surface.",
            "svgContent": "<svg viewBox=\"0 0 560 196\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Complexe argilo-humique : feuillets d’argile et humus chargés négativement, reliés par des ponts calciques, avec des cations fixés\"><rect x=\"40\" y=\"60\" width=\"120\" height=\"30\" rx=\"6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1.8\"/><text x=\"100\" y=\"80\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">argile ( – )</text><rect x=\"40\" y=\"120\" width=\"120\" height=\"30\" rx=\"6\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1.8\"/><text x=\"100\" y=\"140\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">argile ( – )</text><circle cx=\"200\" cy=\"75\" r=\"15\" fill=\"#3B82F6\" fill-opacity=\"0.35\" stroke=\"#3B82F6\" stroke-width=\"1.8\"/><text x=\"200\" y=\"79\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Ca²⁺</text><line x1=\"160\" y1=\"75\" x2=\"185\" y2=\"75\" stroke=\"#94A3B8\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"215\" y1=\"75\" x2=\"252\" y2=\"95\" stroke=\"#94A3B8\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><circle cx=\"200\" cy=\"135\" r=\"15\" fill=\"#3B82F6\" fill-opacity=\"0.35\" stroke=\"#3B82F6\" stroke-width=\"1.8\"/><text x=\"200\" y=\"139\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Ca²⁺</text><line x1=\"160\" y1=\"135\" x2=\"185\" y2=\"135\" stroke=\"#94A3B8\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"215\" y1=\"135\" x2=\"252\" y2=\"115\" stroke=\"#94A3B8\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><circle cx=\"300\" cy=\"105\" r=\"48\" fill=\"#10B981\" fill-opacity=\"0.3\" stroke=\"#10B981\" stroke-width=\"1.8\"/><text x=\"300\" y=\"102\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">humus</text><text x=\"300\" y=\"118\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">( – )</text><text x=\"200\" y=\"40\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#3B82F6\">pont calcique</text><circle cx=\"390\" cy=\"60\" r=\"13\" fill=\"#8B5CF6\" fill-opacity=\"0.3\" stroke=\"#8B5CF6\" stroke-width=\"1.5\"/><text x=\"390\" y=\"64\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">K⁺</text><circle cx=\"400\" cy=\"105\" r=\"13\" fill=\"#8B5CF6\" fill-opacity=\"0.3\" stroke=\"#8B5CF6\" stroke-width=\"1.5\"/><text x=\"400\" y=\"109\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Mg²⁺</text><circle cx=\"390\" cy=\"150\" r=\"13\" fill=\"#8B5CF6\" fill-opacity=\"0.3\" stroke=\"#8B5CF6\" stroke-width=\"1.5\"/><text x=\"390\" y=\"154\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Na⁺</text><text x=\"470\" y=\"100\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"800\" fill=\"#8B5CF6\">cations fixés</text><text x=\"470\" y=\"114\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"700\" fill=\"#8B5CF6\">à la surface</text><text x=\"280\" y=\"186\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">Argile et humus, chargés négativement, sont reliés par des ions calcium (Ca²⁺)</text></svg>"
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "CAH",
          "stepTheme": "Définition",
          "stepTitle": "Le complexe argilo-humique",
          "paragraphText": "Le **complexe argilo-humique** est l’association de l’**argile** et de l’**humus**, reliés par des **ions calcium**.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q4",
            "type": "mcq",
            "prompt": "De quoi le complexe argilo-humique est-il formé ?",
            "options": [
              "D’argile et d’humus unis par des ions calcium",
              "Uniquement d’argile",
              "Uniquement d’humus",
              "Uniquement d’ions calcium"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 1 : seule la 4e proposition est vraie."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Enveloppe",
          "stepTheme": "Structure",
          "stepTitle": "L’humus entoure l’argile",
          "paragraphText": "Dans le complexe, les **micelles d’humus** forment une **enveloppe protectrice** autour des particules d’**argile**.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q5",
            "type": "mcq",
            "prompt": "Comment l’humus est-il disposé par rapport à l’argile dans le complexe argilo-humique ?",
            "options": [
              "Les micelles d’humus entourent les particules d’argile d’une enveloppe",
              "L’humus est enfermé dans l’argile",
              "Ils restent séparés",
              "L’humus remplace l’argile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : l’affirmation 2 est vraie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Cl⁻",
          "stepTheme": "Activité",
          "stepTitle": "Un anion ne fait pas de pont",
          "paragraphText": "Les ions **Cl⁻**, négatifs, ne peuvent **pas** relier deux particules négatives : seuls des **cations** comme **Ca²⁺** forment des ponts.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q6",
            "type": "mcq",
            "prompt": "« Les ions chlorure Cl⁻ peuvent former des ponts entre les particules d’argile et d’humus. » Vrai ou faux ?",
            "options": [
              "Faux : un anion est repoussé par l’argile et l’humus, chargés négativement",
              "Vrai",
              "Vrai, comme le calcium",
              "Faux, car l’argile est positive"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : 3 faux."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q1",
          "type": "mcq",
          "prompt": "De l’argile fine en suspension dans l’eau forme des flocons qui se déposent quand on ajoute du chlorure de calcium (CaCl₂). Quels ions en sont responsables ?",
          "options": [
            "Les ions calcium Ca²⁺",
            "Les ions chlorure Cl⁻",
            "Les molécules d’eau",
            "Les ions sodium Na⁺"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calcium neutralise et relie les particules négatives."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q2",
          "type": "mcq",
          "prompt": "Un mélange d’argile et d’humus reste stable sans calcium, mais flocule fortement quand on ajoute du CaCl₂. Que montre ce résultat ?",
          "options": [
            "L’argile et l’humus s’associent grâce aux ions calcium",
            "L’argile et l’humus se repoussent toujours",
            "Le calcium détruit l’humus",
            "L’argile se dissout dans l’humus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ils forment le complexe argilo-humique."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q3",
          "type": "mcq",
          "prompt": "Pourquoi l’argile et l’humus ne peuvent-ils pas s’unir directement ?",
          "options": [
            "Parce qu’ils sont tous deux chargés négativement et se repoussent",
            "Parce qu’ils sont tous deux positifs",
            "Parce que l’humus est un gaz",
            "Parce que l’argile est trop lourde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calcium, positif, fait le lien."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q4",
          "type": "mcq",
          "prompt": "De quoi le complexe argilo-humique est-il formé ?",
          "options": [
            "D’argile et d’humus unis par des ions calcium",
            "Uniquement d’argile",
            "Uniquement d’humus",
            "Uniquement d’ions calcium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 1 : seule la 4e proposition est vraie."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q5",
          "type": "mcq",
          "prompt": "Comment l’humus est-il disposé par rapport à l’argile dans le complexe argilo-humique ?",
          "options": [
            "Les micelles d’humus entourent les particules d’argile d’une enveloppe",
            "L’humus est enfermé dans l’argile",
            "Ils restent séparés",
            "L’humus remplace l’argile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : l’affirmation 2 est vraie."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q6",
          "type": "mcq",
          "prompt": "« Les ions chlorure Cl⁻ peuvent former des ponts entre les particules d’argile et d’humus. » Vrai ou faux ?",
          "options": [
            "Faux : un anion est repoussé par l’argile et l’humus, chargés négativement",
            "Vrai",
            "Vrai, comme le calcium",
            "Faux, car l’argile est positive"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : 3 faux."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l08_echanges_ions_sol_p03",
      "order": 3,
      "title": "Le pouvoir absorbant",
      "summary": "Le complexe retient les cations.",
      "conceptExplanation": "- Les charges négatives du complexe argilo-humique attirent et retiennent à sa surface des cations de la solution du sol (Ca²⁺, K⁺, Mg²⁺, Na⁺, H⁺) : c’est le pouvoir absorbant du complexe. On parle de complexe adsorbant : les ions sont fixés à sa surface.\n- Ces cations fixés forment une réserve : ils ne sont pas emportés par l’eau de pluie, mais restent disponibles pour les plantes.\n- Les anions (nitrates NO₃⁻, chlorures Cl⁻) ne sont pas retenus : ils restent dans la solution du sol et sont facilement emportés par l’eau d’infiltration.\n- Un sol riche en argile et en humus retient donc mieux les éléments nutritifs (cations) qu’un sol sableux.\n- Correction du document : il écrit que les charges négatives des colloïdes fixent « les cations d’abord puis les anions ». Des charges négatives repoussent les anions : le complexe argilo-humique fixe les cations. Les anions restent dans la solution du sol (seuls quelques-uns, comme les phosphates, peuvent être retenus indirectement par des ponts de cations).",
      "keyRule": "Pouvoir absorbant : le complexe argilo-humique retient les cations à sa surface. Les anions restent dans la solution et sont facilement lessivés.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la perte des nitrates",
        "statement": "Pourquoi les nitrates (NO₃⁻) d’un engrais sont-ils facilement emportés par la pluie ?",
        "methodSteps": [
          "Les nitrates sont des anions.",
          "Le complexe argilo-humique, négatif, ne les retient pas : ils restent dans l’eau du sol."
        ],
        "conclusion": "Les nitrates sont entraînés par l’eau d’infiltration."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Pouvoir absorbant",
          "stepTheme": "Définition",
          "stepTitle": "Retenir des cations",
          "paragraphText": "Le **pouvoir absorbant** est la capacité du complexe argilo-humique à **retenir des cations** à sa **surface**.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q1",
            "type": "mcq",
            "prompt": "Qu’appelle-t-on le pouvoir absorbant du complexe argilo-humique ?",
            "options": [
              "Sa capacité à retenir des cations à sa surface",
              "Sa capacité à absorber l’eau de pluie",
              "Sa capacité à produire de l’humus",
              "Sa capacité à retenir le sable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On parle aussi de complexe adsorbant."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Cations fixés",
          "stepTheme": "Exemples",
          "stepTitle": "Quels ions sont retenus ?",
          "paragraphText": "Le complexe retient les **cations** : **Ca²⁺**, **K⁺**, **Mg²⁺**, **Na⁺**, **H⁺**.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q2",
            "type": "mcq",
            "prompt": "Lequel de ces ions est retenu par le complexe argilo-humique ?",
            "options": [
              "K⁺ (potassium)",
              "NO₃⁻ (nitrate)",
              "Cl⁻ (chlorure)",
              "Aucun ion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les cations sont attirés par les charges négatives."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Anions",
          "stepTheme": "Correction du document",
          "stepTitle": "Les anions ne sont pas fixés",
          "paragraphText": "Le document dit que le complexe fixe « les cations d’abord **puis les anions** ». Des charges **négatives** **repoussent** les anions : le complexe fixe les **cations** ; les **anions** restent dans la solution.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q3",
            "type": "mcq",
            "prompt": "Le complexe argilo-humique fixe-t-il les anions comme les nitrates (NO₃⁻) ?",
            "options": [
              "Non : chargé négativement, il repousse les anions, qui restent dans la solution du sol",
              "Oui, après les cations",
              "Oui, il les fixe en premier",
              "Oui, grâce aux charges négatives"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : l’affirmation 4 « seulement les cations » est donc vraie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Nitrates",
          "stepTheme": "Conséquence",
          "stepTitle": "Des nitrates lessivés",
          "paragraphText": "Les **nitrates** (anions) ne sont pas retenus : ils sont facilement **emportés** par l’eau de pluie et peuvent **polluer** les nappes.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q4",
            "type": "mcq",
            "prompt": "Pourquoi conseille-t-on d’apporter les engrais azotés (nitrates) en plusieurs petites fois ?",
            "options": [
              "Parce que les nitrates, non retenus par le complexe, sont vite emportés par l’eau",
              "Parce que les nitrates sont trop fortement fixés",
              "Parce que les nitrates détruisent l’argile",
              "Parce que les plantes n’absorbent pas les nitrates"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Moins de pertes, moins de pollution."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Réserve",
          "stepTheme": "Rôle",
          "stepTitle": "Une réserve pour les plantes",
          "paragraphText": "Les cations **fixés** sur le complexe forment une **réserve** : ils ne sont pas emportés par la pluie et restent **disponibles** pour les plantes.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q5",
            "type": "mcq",
            "prompt": "Quel est l’intérêt, pour les cultures, des cations fixés sur le complexe argilo-humique ?",
            "options": [
              "Ils forment une réserve d’éléments nutritifs qui n’est pas emportée par la pluie",
              "Ils empêchent les racines de pousser",
              "Ils rendent le sol stérile",
              "Ils n’ont aucun intérêt"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est un véritable réservoir d’ions."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Sol sableux",
          "stepTheme": "Comparer",
          "stepTitle": "Le sable retient peu",
          "paragraphText": "Un sol **sableux**, pauvre en argile et en humus, a un **faible** pouvoir absorbant : les ions apportés sont vite **perdus**.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q6",
            "type": "mcq",
            "prompt": "Un agriculteur cultive sur un sol très sableux et pauvre en humus. Pourquoi ses engrais sont-ils vite perdus ?",
            "options": [
              "Parce que ce sol, pauvre en complexe argilo-humique, retient peu les ions",
              "Parce que le sable retient trop les ions",
              "Parce que le sable est chargé négativement",
              "Parce que l’humus repousse les engrais"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ajouter de la matière organique améliore ce sol."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q1",
          "type": "mcq",
          "prompt": "Qu’appelle-t-on le pouvoir absorbant du complexe argilo-humique ?",
          "options": [
            "Sa capacité à retenir des cations à sa surface",
            "Sa capacité à absorber l’eau de pluie",
            "Sa capacité à produire de l’humus",
            "Sa capacité à retenir le sable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On parle aussi de complexe adsorbant."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q2",
          "type": "mcq",
          "prompt": "Lequel de ces ions est retenu par le complexe argilo-humique ?",
          "options": [
            "K⁺ (potassium)",
            "NO₃⁻ (nitrate)",
            "Cl⁻ (chlorure)",
            "Aucun ion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cations sont attirés par les charges négatives."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q3",
          "type": "mcq",
          "prompt": "Le complexe argilo-humique fixe-t-il les anions comme les nitrates (NO₃⁻) ?",
          "options": [
            "Non : chargé négativement, il repousse les anions, qui restent dans la solution du sol",
            "Oui, après les cations",
            "Oui, il les fixe en premier",
            "Oui, grâce aux charges négatives"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : l’affirmation 4 « seulement les cations » est donc vraie."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q4",
          "type": "mcq",
          "prompt": "Pourquoi conseille-t-on d’apporter les engrais azotés (nitrates) en plusieurs petites fois ?",
          "options": [
            "Parce que les nitrates, non retenus par le complexe, sont vite emportés par l’eau",
            "Parce que les nitrates sont trop fortement fixés",
            "Parce que les nitrates détruisent l’argile",
            "Parce que les plantes n’absorbent pas les nitrates"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Moins de pertes, moins de pollution."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q5",
          "type": "mcq",
          "prompt": "Quel est l’intérêt, pour les cultures, des cations fixés sur le complexe argilo-humique ?",
          "options": [
            "Ils forment une réserve d’éléments nutritifs qui n’est pas emportée par la pluie",
            "Ils empêchent les racines de pousser",
            "Ils rendent le sol stérile",
            "Ils n’ont aucun intérêt"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est un véritable réservoir d’ions."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q6",
          "type": "mcq",
          "prompt": "Un agriculteur cultive sur un sol très sableux et pauvre en humus. Pourquoi ses engrais sont-ils vite perdus ?",
          "options": [
            "Parce que ce sol, pauvre en complexe argilo-humique, retient peu les ions",
            "Parce que le sable retient trop les ions",
            "Parce que le sable est chargé négativement",
            "Parce que l’humus repousse les engrais"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ajouter de la matière organique améliore ce sol."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l08_echanges_ions_sol_p04",
      "order": 4,
      "title": "Les échanges entre le complexe et la solution du sol",
      "summary": "Un équilibre qui se déplace dans les deux sens.",
      "conceptExplanation": "- Dans le sol, il y a une solution (eau et ions libres) et des complexes argilo-humiques portant des ions fixés. Entre les deux, il existe un équilibre permanent.\n- Quand les racines absorbent des ions, ou quand la pluie les entraîne (lessivage), la solution du sol s’appauvrit : le complexe libère des ions pour combler ce déficit.\n- Quand on apporte des engrais ou des amendements, la solution du sol s’enrichit : le complexe fixe une partie de ces ions.\n- Le complexe argilo-humique joue donc le rôle de réservoir et de régulateur : il maintient une quantité d’ions à peu près constante dans la solution du sol.\n- Activité (vrai ou faux) : 1 faux (le complexe contient aussi des cations, comme Ca²⁺) ; 2 vrai ; 3 faux ; 4 vrai ; 5 faux (en cas de déficit, il libère des ions) ; 6 faux (quand la solution s’enrichit, il en fixe).\n- Exercice 2 : affirmations exactes 1, 3 et 5.",
      "keyRule": "Déficit d’ions dans la solution (absorption, lessivage) : le complexe libère des ions. Excès (engrais) : il en fixe. Il régule la solution du sol.",
      "formulas": [],
      "workedExample": {
        "title": "Prévoir l’effet d’un engrais",
        "statement": "On apporte un engrais potassique (K⁺) à un sol. Que fait le complexe argilo-humique ?",
        "methodSteps": [
          "La solution du sol s’enrichit en K⁺ : l’équilibre est déplacé.",
          "Le complexe fixe une partie des K⁺ et libère d’autres cations en échange."
        ],
        "conclusion": "Le K⁺ est mis en réserve sur le complexe et libéré plus tard pour les plantes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Équilibre",
          "stepTheme": "Notion",
          "stepTitle": "Un équilibre permanent",
          "paragraphText": "Il existe un **équilibre permanent** entre les ions **libres** de la solution du sol et les ions **fixés** sur le complexe.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q1",
            "type": "mcq",
            "prompt": "Dans un sol, comment se répartissent les ions entre la solution du sol et le complexe argilo-humique ?",
            "options": [
              "Il existe un équilibre entre les ions libres de la solution et les ions fixés sur le complexe",
              "Tous les ions sont fixés",
              "Tous les ions sont libres",
              "Les ions disparaissent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Cet équilibre peut se déplacer dans les deux sens."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les échanges d’ions",
            "caption": "Excès d’ions dans la solution (engrais) : le complexe en fixe. Déficit (absorption par les racines, lessivage) : il en libère.",
            "svgContent": "<svg viewBox=\"0 0 560 150\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Équilibre entre la solution du sol et le complexe argilo-humique : fixation en cas d’excès, libération en cas de déficit\"><rect x=\"20\" y=\"60\" width=\"170\" height=\"50\" rx=\"10\" fill=\"#3B82F6\" fill-opacity=\"0.14\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"105\" y=\"81.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Solution du sol</text><text x=\"105\" y=\"96.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">ions libres</text><rect x=\"370\" y=\"60\" width=\"170\" height=\"50\" rx=\"10\" fill=\"#F59E0B\" fill-opacity=\"0.14\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"455\" y=\"81.5\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Complexe argilo-humique</text><text x=\"455\" y=\"96.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">ions fixés</text><line x1=\"190\" y1=\"72\" x2=\"361.0\" y2=\"72.0\" stroke=\"#10B981\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polygon points=\"370,72 361.0,67.0 361.0,77.0\" fill=\"#10B981\"/><text x=\"280\" y=\"52\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">apport d’engrais : le complexe FIXE</text><line x1=\"370\" y1=\"100\" x2=\"199.0\" y2=\"100.0\" stroke=\"#EF4444\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polygon points=\"190,100 199.0,105.0 199.0,95.0\" fill=\"#EF4444\"/><text x=\"280\" y=\"124\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">absorption par les racines ou lessivage :</text><text x=\"280\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">le complexe LIBÈRE des ions</text><text x=\"280\" y=\"30\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Un équilibre qui se déplace dans les deux sens</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Racines",
          "stepTheme": "Déficit",
          "stepTitle": "Quand les plantes absorbent",
          "paragraphText": "Quand les **racines absorbent** des ions, la solution s’appauvrit : le complexe **libère** des ions pour les remplacer.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q2",
            "type": "mcq",
            "prompt": "Les racines d’un champ de maïs absorbent beaucoup d’ions potassium dans la solution du sol. Que fait le complexe argilo-humique ?",
            "options": [
              "Il libère des ions potassium dans la solution du sol",
              "Il fixe encore plus de potassium",
              "Il se détruit",
              "Il ne réagit pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 2 : affirmation 3 exacte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Engrais",
          "stepTheme": "Excès",
          "stepTitle": "Quand on apporte des engrais",
          "paragraphText": "Quand on apporte des **engrais**, la solution s’enrichit : le complexe **fixe** une partie des ions.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q3",
            "type": "mcq",
            "prompt": "Un agriculteur apporte un engrais riche en ions calcium et potassium. Que fait le complexe argilo-humique ?",
            "options": [
              "Il fixe une partie de ces ions, qu’il libérera plus tard",
              "Il libère tous ses ions",
              "Il repousse les cations",
              "Il ne change rien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : 6 est faux."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Lessivage",
          "stepTheme": "Déficit",
          "stepTitle": "Quand la pluie emporte les ions",
          "paragraphText": "Quand la pluie **entraîne** des ions (lessivage), la solution s’appauvrit : le complexe **libère** des ions.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q4",
            "type": "mcq",
            "prompt": "De fortes pluies entraînent en profondeur une partie des ions de la solution du sol. Comment réagit le complexe argilo-humique ?",
            "options": [
              "Il libère des ions pour compenser",
              "Il fixe encore plus d’ions",
              "Il se transforme en sable",
              "Il absorbe l’eau de pluie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : 5 est faux (il libère, il ne fixe pas)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Régulateur",
          "stepTheme": "Rôle",
          "stepTitle": "Un réservoir et un régulateur",
          "paragraphText": "Le complexe argilo-humique est un **réservoir** d’ions et un **régulateur** : il garde la solution du sol à peu près **constante**.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q5",
            "type": "mcq",
            "prompt": "Quel est le rôle du complexe argilo-humique dans le sol ?",
            "options": [
              "Il sert de réservoir d’ions et régule leur quantité dans la solution du sol",
              "Il empêche toute nutrition des plantes",
              "Il produit les engrais",
              "Il retient seulement l’eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exercice 2 : affirmation 5 exacte."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Origine",
          "stepTheme": "Situation 2",
          "stepTitle": "D’où viennent l’argile et l’humus ?",
          "paragraphText": "L’**argile** vient de l’**altération** des roches ; l’**humus** vient de la **décomposition** de la matière organique (feuilles mortes, débris) par les micro-organismes.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q6",
            "type": "mcq",
            "prompt": "D’où vient l’humus du complexe argilo-humique ?",
            "options": [
              "De la décomposition de la matière organique par les micro-organismes du sol",
              "De l’altération des roches",
              "Des engrais chimiques",
              "De l’eau de pluie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’argile, elle, vient de l’altération des roches."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q1",
          "type": "mcq",
          "prompt": "Dans un sol, comment se répartissent les ions entre la solution du sol et le complexe argilo-humique ?",
          "options": [
            "Il existe un équilibre entre les ions libres de la solution et les ions fixés sur le complexe",
            "Tous les ions sont fixés",
            "Tous les ions sont libres",
            "Les ions disparaissent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cet équilibre peut se déplacer dans les deux sens."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q2",
          "type": "mcq",
          "prompt": "Les racines d’un champ de maïs absorbent beaucoup d’ions potassium dans la solution du sol. Que fait le complexe argilo-humique ?",
          "options": [
            "Il libère des ions potassium dans la solution du sol",
            "Il fixe encore plus de potassium",
            "Il se détruit",
            "Il ne réagit pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 2 : affirmation 3 exacte."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q3",
          "type": "mcq",
          "prompt": "Un agriculteur apporte un engrais riche en ions calcium et potassium. Que fait le complexe argilo-humique ?",
          "options": [
            "Il fixe une partie de ces ions, qu’il libérera plus tard",
            "Il libère tous ses ions",
            "Il repousse les cations",
            "Il ne change rien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : 6 est faux."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q4",
          "type": "mcq",
          "prompt": "De fortes pluies entraînent en profondeur une partie des ions de la solution du sol. Comment réagit le complexe argilo-humique ?",
          "options": [
            "Il libère des ions pour compenser",
            "Il fixe encore plus d’ions",
            "Il se transforme en sable",
            "Il absorbe l’eau de pluie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : 5 est faux (il libère, il ne fixe pas)."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q5",
          "type": "mcq",
          "prompt": "Quel est le rôle du complexe argilo-humique dans le sol ?",
          "options": [
            "Il sert de réservoir d’ions et régule leur quantité dans la solution du sol",
            "Il empêche toute nutrition des plantes",
            "Il produit les engrais",
            "Il retient seulement l’eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exercice 2 : affirmation 5 exacte."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q6",
          "type": "mcq",
          "prompt": "D’où vient l’humus du complexe argilo-humique ?",
          "options": [
            "De la décomposition de la matière organique par les micro-organismes du sol",
            "De l’altération des roches",
            "Des engrais chimiques",
            "De l’eau de pluie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’argile, elle, vient de l’altération des roches."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l08_echanges_ions_sol_p05",
      "order": 5,
      "title": "Évaluation : l’expérience de Way",
      "summary": "Sol sableux et sol argileux face au chlorure de potassium.",
      "conceptExplanation": "Le document ne donne pas de corrigé pour cette situation ; voici la solution.\n- On verse goutte à goutte une solution de chlorure de potassium (KCl : 10 unités de K⁺ et 10 de Cl⁻) sur une terre sableuse et sur une terre argileuse, et on analyse les filtrats.\n- Sol sableux : K⁺ 8, Cl⁻ 10, Ca²⁺ 2. Sol argileux : K⁺ 2, Cl⁻ 10, Ca²⁺ 8.\n- Analyse : les ions Cl⁻ traversent les deux sols sans être retenus. Les ions K⁺ sont peu retenus par le sol sableux (10 → 8) et fortement retenus par le sol argileux (10 → 2). Du calcium, absent au départ, apparaît dans les filtrats, en quantité égale au potassium retenu.\n- Interprétation : le complexe argilo-humique fixe des ions K⁺ et libère en échange des ions Ca²⁺ : c’est un échange de cations. Le sol argileux, riche en complexe, échange beaucoup plus que le sol sableux. Les anions Cl⁻ ne sont pas retenus.\n- Déduction : le complexe argilo-humique retient les cations et les échange avec ceux de la solution du sol.\n- Remarque : en réalité, un ion Ca²⁺ (deux charges) remplace deux ions K⁺ (une charge chacun) ; le tableau compte les ions en unités arbitraires de charge.",
      "keyRule": "Expérience de Way : le sol argileux retient K⁺ et libère Ca²⁺ en échange ; Cl⁻ n’est pas retenu. Le complexe échange des cations.",
      "formulas": [],
      "workedExample": {
        "title": "Lire le tableau de Way",
        "statement": "Sol argileux : K⁺ passe de 10 à 2, Ca²⁺ de 0 à 8. Interprète.",
        "methodSteps": [
          "8 unités de K⁺ ont été retenues par le sol.",
          "8 unités de Ca²⁺, auparavant fixées sur le complexe, ont été libérées."
        ],
        "conclusion": "Le complexe argilo-humique a échangé des Ca²⁺ contre des K⁺."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Cl⁻",
          "stepTheme": "Analyse",
          "stepTitle": "Le chlorure n’est pas retenu",
          "paragraphText": "Les ions **Cl⁻** sont à **10** dans les deux filtrats, comme au départ : ils ne sont **pas retenus**.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p05_q1",
            "type": "mcq",
            "prompt": "Dans l’expérience de Way, une solution contenant 10 unités de Cl⁻ traverse un sol sableux et un sol argileux ; les deux filtrats contiennent 10 unités de Cl⁻. Que montre ce résultat ?",
            "options": [
              "Les anions Cl⁻ ne sont pas retenus par le sol",
              "Les ions Cl⁻ sont tous fixés",
              "Le sol produit des ions Cl⁻",
              "Le sol argileux retient plus de Cl⁻"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le complexe, négatif, repousse les anions."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Expérience de Way",
            "caption": "Solution de chlorure de potassium (KCl) versée sur deux terres (concentrations en unités arbitraires).",
            "tableData": {
              "headers": [
                "Ion",
                "Solution initiale",
                "Filtrat sol sableux",
                "Filtrat sol argileux"
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
          "stepBadge": "K⁺",
          "stepTheme": "Analyse",
          "stepTitle": "Le potassium est retenu",
          "paragraphText": "Le sol **argileux** fait passer K⁺ de **10 à 2** : il retient **8** unités. Le sol **sableux** n’en retient que **2**.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p05_q2",
            "type": "mcq",
            "prompt": "Une solution à 10 unités de K⁺ traverse un sol argileux : le filtrat ne contient plus que 2 unités de K⁺. Combien d’unités de K⁺ le sol a-t-il retenues ?",
            "options": [
              "8",
              "2",
              "10",
              "12"
            ],
            "correctAnswerIndex": 0,
            "explanation": "10 − 2 = 8."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Ca²⁺",
          "stepTheme": "Analyse",
          "stepTitle": "Du calcium apparaît",
          "paragraphText": "Du **Ca²⁺**, absent au départ, apparaît dans le filtrat du sol argileux (**8** unités) : il a été **libéré** par le complexe.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p05_q3",
            "type": "mcq",
            "prompt": "Dans l’expérience de Way, le filtrat du sol argileux contient 8 unités de Ca²⁺ alors que la solution versée n’en contenait pas. D’où vient ce calcium ?",
            "options": [
              "Il a été libéré par le complexe argilo-humique en échange du potassium retenu",
              "Il vient de la solution de KCl",
              "Il s’est formé à partir du chlore",
              "Il vient de l’air"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Autant de calcium libéré que de potassium retenu."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Échange",
          "stepTheme": "Interprétation",
          "stepTitle": "Un échange de cations",
          "paragraphText": "Le complexe **fixe K⁺** et **libère Ca²⁺** : c’est un **échange de cations**.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p05_q4",
            "type": "mcq",
            "prompt": "Que montre l’ensemble des résultats de l’expérience de Way ?",
            "options": [
              "Le complexe argilo-humique échange des cations : il fixe K⁺ et libère Ca²⁺",
              "Le sol détruit les ions",
              "Le sol retient les anions et libère les cations",
              "Le sable échange plus que l’argile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Rôle déduit : réservoir et échangeur d’ions."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Sable ou argile",
          "stepTheme": "Comparer",
          "stepTitle": "Qui échange le plus ?",
          "paragraphText": "Le sol **argileux** retient **8** unités de K⁺, le sol **sableux** seulement **2** : l’argile a un **pouvoir absorbant** bien plus grand.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p05_q5",
            "type": "mcq",
            "prompt": "Dans l’expérience de Way, le sol argileux retient 8 unités de K⁺ et le sol sableux 2. Que peut-on conclure ?",
            "options": [
              "Le sol argileux a un pouvoir absorbant plus grand que le sol sableux",
              "Le sol sableux est le plus fertile",
              "Les deux sols ont le même pouvoir absorbant",
              "Le sol argileux ne retient rien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il contient plus de complexe argilo-humique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Charges",
          "stepTheme": "Nuance",
          "stepTitle": "Un Ca²⁺ pour deux K⁺",
          "paragraphText": "Un ion **Ca²⁺** porte **deux** charges positives : il remplace **deux** ions **K⁺**. Le tableau de Way compte en **unités de charge**, d’où les nombres égaux.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p05_q6",
            "type": "mcq",
            "prompt": "Combien d’ions K⁺ (une charge positive chacun) un ion Ca²⁺ (deux charges positives) peut-il remplacer sur le complexe argilo-humique ?",
            "options": [
              "Deux",
              "Un",
              "Quatre",
              "Aucun"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’échange respecte l’équilibre des charges."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p05_q1",
          "type": "mcq",
          "prompt": "Dans l’expérience de Way, une solution contenant 10 unités de Cl⁻ traverse un sol sableux et un sol argileux ; les deux filtrats contiennent 10 unités de Cl⁻. Que montre ce résultat ?",
          "options": [
            "Les anions Cl⁻ ne sont pas retenus par le sol",
            "Les ions Cl⁻ sont tous fixés",
            "Le sol produit des ions Cl⁻",
            "Le sol argileux retient plus de Cl⁻"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le complexe, négatif, repousse les anions."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p05_q2",
          "type": "mcq",
          "prompt": "Une solution à 10 unités de K⁺ traverse un sol argileux : le filtrat ne contient plus que 2 unités de K⁺. Combien d’unités de K⁺ le sol a-t-il retenues ?",
          "options": [
            "8",
            "2",
            "10",
            "12"
          ],
          "correctAnswerIndex": 0,
          "explanation": "10 − 2 = 8."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p05_q3",
          "type": "mcq",
          "prompt": "Dans l’expérience de Way, le filtrat du sol argileux contient 8 unités de Ca²⁺ alors que la solution versée n’en contenait pas. D’où vient ce calcium ?",
          "options": [
            "Il a été libéré par le complexe argilo-humique en échange du potassium retenu",
            "Il vient de la solution de KCl",
            "Il s’est formé à partir du chlore",
            "Il vient de l’air"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Autant de calcium libéré que de potassium retenu."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p05_q4",
          "type": "mcq",
          "prompt": "Que montre l’ensemble des résultats de l’expérience de Way ?",
          "options": [
            "Le complexe argilo-humique échange des cations : il fixe K⁺ et libère Ca²⁺",
            "Le sol détruit les ions",
            "Le sol retient les anions et libère les cations",
            "Le sable échange plus que l’argile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Rôle déduit : réservoir et échangeur d’ions."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p05_q5",
          "type": "mcq",
          "prompt": "Dans l’expérience de Way, le sol argileux retient 8 unités de K⁺ et le sol sableux 2. Que peut-on conclure ?",
          "options": [
            "Le sol argileux a un pouvoir absorbant plus grand que le sol sableux",
            "Le sol sableux est le plus fertile",
            "Les deux sols ont le même pouvoir absorbant",
            "Le sol argileux ne retient rien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il contient plus de complexe argilo-humique."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p05_q6",
          "type": "mcq",
          "prompt": "Combien d’ions K⁺ (une charge positive chacun) un ion Ca²⁺ (deux charges positives) peut-il remplacer sur le complexe argilo-humique ?",
          "options": [
            "Deux",
            "Un",
            "Quatre",
            "Aucun"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’échange respecte l’équilibre des charges."
        }
      ]
    }
  ]
};
