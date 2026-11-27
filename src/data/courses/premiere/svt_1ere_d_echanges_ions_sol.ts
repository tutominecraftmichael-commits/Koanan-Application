import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 8 : Les échanges d’ions au niveau du sol » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2792
export const SVT_1ERE_D_L08_ECHANGES_IONS_SOL: CurriculumChapter = {
  "id": "premiere_d_svt_l08_echanges_ions_sol",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 8,
  "title": "Leçon 8 : Les échanges d’ions au niveau du sol",
  "summary": "Les échanges d’ions au niveau du sol se font grâce au complexe argilo-humique, formé de l’argile et de l’humus unis par le pont calcique, qui fixe ou libère des ions selon l’équilibre avec la solution du sol.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2792",
  "points": [
    {
      "id": "premiere_d_svt_l08_echanges_ions_sol_p01",
      "order": 1,
      "title": "Les charges des particules d’argile et d’humus",
      "summary": "Montrer, par les expériences aux colorants, que les particules d’argile et d’humus sont chargées négativement.",
      "conceptExplanation": "Dans l’expérience 1, on verse sur des échantillons de terre du bleu de méthylène, qui doit sa couleur à des particules chargées positivement, et de l’éosine, dont les particules colorées sont chargées négativement.\nLorsqu’on verse du bleu de méthylène sur l’échantillon de terre argileuse ou humique, on obtient un filtrat décoloré après filtration, alors qu’avec l’éosine, on obtient un filtrat de couleur rouge.\nLe bleu de méthylène se décolore car ses cations ont été retenus par l’argile ou l’humus ; l’éosine conserve sa couleur parce que ses anions n’ont pas été retenus.\nOn sait que deux charges de même signe se repoussent et que deux charges de signes contraires s’attirent : la rétention des cations et le passage des anions montrent donc que les particules d’argile et d’humus sont électronégatives, c’est-à-dire chargées négativement.",
      "keyRule": "Argile et humus retiennent les cations et laissent passer les anions : leurs particules sont chargées négativement.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter l’expérience au bleu de méthylène et à l’éosine",
        "statement": "On verse du bleu de méthylène et de l’éosine sur de la terre argileuse ou humique. Le filtrat de bleu de méthylène est décoloré et celui d’éosine reste rouge. Interprète ces résultats.",
        "methodSteps": [
          "Le bleu de méthylène doit sa couleur à des particules chargées positivement : décoloré, il a perdu ses cations, retenus par la terre.",
          "L’éosine doit sa couleur à des particules chargées négativement : restée rouge, ses anions sont passés à travers la terre.",
          "Des charges de signes contraires s’attirent : ce qui retient les cations est chargé négativement."
        ],
        "conclusion": "Les particules d’argile et d’humus sont donc électronégatives."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les deux colorants de l’expérience 1",
          "stepTheme": "Les deux colorants de l’expérience 1",
          "stepBadge": "Les deux colorants de l’expérience 1",
          "paragraphText": "• Bleu de méthylène : colorant qui doit sa couleur à des particules chargées positivement, des cations.\n• Éosine : colorant dont les particules colorées sont chargées négativement, des anions.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q1",
            "type": "mcq",
            "prompt": "Le bleu de méthylène doit sa couleur bleue à des particules :",
            "options": [
              "Chargées positivement",
              "Chargées négativement",
              "Neutres",
              "Sans charge électrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la présentation de l’expérience 1 dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le résultat avec le bleu de méthylène",
          "stepTheme": "Le résultat avec le bleu de méthylène",
          "stepBadge": "Le résultat avec le bleu de méthylène",
          "paragraphText": "Lorsqu’on verse du bleu de méthylène sur l’échantillon de terre argileuse ou humique, on obtient un filtrat décoloré après filtration.\nCette décoloration signifie que les particules colorées ont été retenues par la terre.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q2",
            "type": "mcq",
            "prompt": "Après filtration sur terre argileuse ou humique, le filtrat de bleu de méthylène est :",
            "options": [
              "Encore plus bleu",
              "Rouge",
              "Décoloré",
              "Inchangé"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le résultat de l’expérience 1 analysé dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le résultat avec l’éosine",
          "stepTheme": "Le résultat avec l’éosine",
          "stepBadge": "Le résultat avec l’éosine",
          "paragraphText": "Avec l’éosine, on obtient un filtrat d’éosine de couleur rouge après filtration.\nSes particules colorées, chargées négativement, n’ont donc pas été retenues par la terre argileuse ou humique.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q3",
            "type": "mcq",
            "prompt": "Après filtration sur terre argileuse ou humique, le filtrat d’éosine est :",
            "options": [
              "Décoloré",
              "De couleur rouge",
              "Bleu",
              "Incolore et cristallin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’éosine conserve sa couleur car ses anions traversent la terre sans être retenus."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le raisonnement par les charges",
          "stepTheme": "Le raisonnement par les charges",
          "stepBadge": "Le raisonnement par les charges",
          "paragraphText": "On sait que deux charges de même signe se repoussent et que deux charges de signes contraires s’attirent.\nLa rétention des charges positives et le passage des charges négatives permettent de déduire le signe de la charge des particules du sol.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q4",
            "type": "mcq",
            "prompt": "Deux charges de signes contraires :",
            "options": [
              "Se repoussent",
              "S’annulent toujours",
              "Ne peuvent pas coexister",
              "S’attirent"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le rappel utilisé dans l’interprétation de l’expérience 1."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Des particules électronégatives",
          "stepTheme": "Des particules électronégatives",
          "stepBadge": "Des particules électronégatives",
          "paragraphText": "Les particules d’argile et d’humus retiennent les charges positives et laissent passer les charges négatives.\nElles sont donc électronégatives, c’est-à-dire chargées négativement.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q5",
            "type": "mcq",
            "prompt": "Les particules d’argile et d’humus sont :",
            "options": [
              "Électropositives",
              "Neutres",
              "Électronégatives, chargées négativement",
              "Chargées positivement et négativement à la fois"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la conclusion de l’interprétation de l’expérience 1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser cations et anions",
          "stepTheme": "Ne pas inverser cations et anions",
          "stepBadge": "Ne pas inverser cations et anions",
          "paragraphText": "Piège : les cations sont les ions chargés positivement et les anions les ions chargés négativement.\nC’est parce que les cations du bleu de méthylène sont retenus que le filtrat se décolore.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q6",
            "type": "mcq",
            "prompt": "Un cation est un ion :",
            "options": [
              "Chargé positivement",
              "Chargé négativement",
              "Sans charge",
              "Toujours lié à l’humus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon précise que les particules colorées du bleu de méthylène, chargées positivement, sont des cations."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q1",
          "type": "mcq",
          "prompt": "Le bleu de méthylène doit sa couleur bleue à des particules :",
          "options": [
            "Chargées positivement",
            "Chargées négativement",
            "Neutres",
            "Sans charge électrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la présentation de l’expérience 1 dans la leçon."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q2",
          "type": "mcq",
          "prompt": "Après filtration sur terre argileuse ou humique, le filtrat de bleu de méthylène est :",
          "options": [
            "Encore plus bleu",
            "Rouge",
            "Décoloré",
            "Inchangé"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le résultat de l’expérience 1 analysé dans la leçon."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q3",
          "type": "mcq",
          "prompt": "Après filtration sur terre argileuse ou humique, le filtrat d’éosine est :",
          "options": [
            "Décoloré",
            "De couleur rouge",
            "Bleu",
            "Incolore et cristallin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’éosine conserve sa couleur car ses anions traversent la terre sans être retenus."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q4",
          "type": "mcq",
          "prompt": "Deux charges de signes contraires :",
          "options": [
            "Se repoussent",
            "S’annulent toujours",
            "Ne peuvent pas coexister",
            "S’attirent"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le rappel utilisé dans l’interprétation de l’expérience 1."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q5",
          "type": "mcq",
          "prompt": "Les particules d’argile et d’humus sont :",
          "options": [
            "Électropositives",
            "Neutres",
            "Électronégatives, chargées négativement",
            "Chargées positivement et négativement à la fois"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la conclusion de l’interprétation de l’expérience 1."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p01_q6",
          "type": "mcq",
          "prompt": "Un cation est un ion :",
          "options": [
            "Chargé positivement",
            "Chargé négativement",
            "Sans charge",
            "Toujours lié à l’humus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon précise que les particules colorées du bleu de méthylène, chargées positivement, sont des cations."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l08_echanges_ions_sol_p02",
      "order": 2,
      "title": "La formation du complexe argilo-humique et le pont calcique",
      "summary": "Expliquer la floculation par les ions calcium, la formation du complexe argilo-humique et son pouvoir absorbant.",
      "conceptExplanation": "Dans l’expérience 2, lorsqu’on ajoute du chlorure de calcium au filtrat de terre argileuse, on obtient une floculation, alors que dans le tube témoin sans chlorure de calcium, l’argile fine reste en suspension ; de même, l’humus reste en solution colloïdale sans chlorure de calcium et flocule en sa présence.\nLorsqu’on ajoute du chlorure de calcium au mélange des deux, on obtient une floculation importante, alors que le mélange est stable sans chlorure de calcium.\nLes ions calcium provoquent la floculation des colloïdes argileux et humiques ; la floculation importante du mélange montre que les particules d’argile et d’humus s’associent.\nOr ces particules étant électronégatives, elles ne peuvent se fixer directement l’une à l’autre : cette association est rendue possible par l’intermédiaire des cations calcium formant un pont, dit pont calcique, entre l’argile et l’humus.\nCette association forme le complexe argilo-humique, dans lequel les micelles d’humus forment autour de celles de l’argile une enveloppe protectrice.\nLes charges négatives présentes sur les colloïdes fixent les ions contenus dans la solution du sol, les cations d’abord puis les anions : le complexe argilo-humique peut ainsi fixer plusieurs sels minéraux, c’est son pouvoir absorbant.",
      "keyRule": "Sans ions calcium, pas d’association argile-humus : le pont calcique rend possible la formation du complexe argilo-humique.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la floculation importante du mélange argile et humus",
        "statement": "On mélange le filtrat de terre argileuse et le surnageant de terre riche en humus, puis on ajoute du chlorure de calcium : on obtient une floculation importante. Explique ce résultat.",
        "methodSteps": [
          "Les ions calcium provoquent la floculation des colloïdes argileux et humiques pris séparément.",
          "Argile et humus sont tous deux électronégatifs : ils ne peuvent pas se fixer directement l’un à l’autre.",
          "Les cations calcium forment un pont calcique entre l’argile et l’humus, ce qui les associe.",
          "Cette association est le complexe argilo-humique."
        ],
        "conclusion": "C’est l’interprétation de la troisième étape de l’expérience 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La floculation par le chlorure de calcium",
          "stepTheme": "La floculation par le chlorure de calcium",
          "stepBadge": "La floculation par le chlorure de calcium",
          "paragraphText": "Lorsqu’on ajoute du chlorure de calcium au filtrat de terre argileuse, on obtient une floculation.\nDans le tube témoin sans chlorure de calcium, l’argile fine reste en suspension ; de même, l’humus reste en solution colloïdale sans chlorure de calcium.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q1",
            "type": "mcq",
            "prompt": "Sans chlorure de calcium, l’argile fine du filtrat :",
            "options": [
              "Flocule immédiatement",
              "Se dissout complètement",
              "Change de couleur",
              "Reste en suspension"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le résultat de la première étape de l’expérience 2, comparé au tube témoin."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le rôle des ions calcium",
          "stepTheme": "Le rôle des ions calcium",
          "stepBadge": "Le rôle des ions calcium",
          "paragraphText": "L’apparition de la floculation en présence de chlorure de calcium est due aux ions calcium.\nEn effet, les ions calcium provoquent la floculation des colloïdes argileux et humiques.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q2",
            "type": "mcq",
            "prompt": "La floculation des colloïdes argileux et humiques est provoquée par :",
            "options": [
              "L’eau distillée",
              "Les ions calcium",
              "Les anions chlorure uniquement",
              "L’agitation du mélange"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’interprétation des deux premières étapes de l’expérience 2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le pont calcique",
          "stepTheme": "Le pont calcique",
          "stepBadge": "Le pont calcique",
          "paragraphText": "• Pont calcique : liaison assurée par les cations calcium entre une particule d’argile et une particule d’humus, toutes deux électronégatives.\nSans cet intermédiaire, les deux particules, de même signe, ne pourraient pas se fixer l’une à l’autre.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q3",
            "type": "mcq",
            "prompt": "Le pont calcique est formé par :",
            "options": [
              "Des anions entre l’argile et l’humus",
              "Des cations calcium entre l’argile et l’humus",
              "Des molécules d’eau uniquement",
              "Des micelles d’humus entre elles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que les cations calcium forment un pont dit pont calcique entre l’argile et l’humus."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le complexe argilo-humique",
          "stepTheme": "Le complexe argilo-humique",
          "stepBadge": "Le complexe argilo-humique",
          "paragraphText": "• Complexe argilo-humique : association de l’argile et de l’humus réalisée grâce au pont calcique.\nDans cette association, les micelles d’humus forment autour de celles de l’argile une enveloppe protectrice ; les micelles sont des particules de très petite taille, mesurant entre 0,001 et 0,3 micron.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q4",
            "type": "mcq",
            "prompt": "Dans le complexe argilo-humique, les micelles d’humus forment autour des micelles d’argile :",
            "options": [
              "Un pont calcique",
              "Une solution colloïdale",
              "Un feuillet rigide",
              "Une enveloppe protectrice"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la description du document 3 sur la formation du complexe argilo-humique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le pouvoir absorbant du complexe",
          "stepTheme": "Le pouvoir absorbant du complexe",
          "stepBadge": "Le pouvoir absorbant du complexe",
          "paragraphText": "Les charges négatives présentes sur les colloïdes fixent les ions contenus dans la solution du sol : les cations d’abord, puis les anions.\nLe complexe argilo-humique peut ainsi fixer plusieurs sels minéraux : c’est le pouvoir absorbant du complexe argilo-humique.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q5",
            "type": "mcq",
            "prompt": "Le pouvoir absorbant du complexe argilo-humique est sa capacité à :",
            "options": [
              "Fixer plusieurs sels minéraux de la solution du sol",
              "Produire des sels minéraux",
              "Détruire les ions du sol",
              "Rendre le sol imperméable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition du pouvoir absorbant donnée dans l’interprétation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L’argile et l’humus ne se fixent pas directement",
          "stepTheme": "L’argile et l’humus ne se fixent pas directement",
          "stepBadge": "L’argile et l’humus ne se fixent pas directement",
          "paragraphText": "Piège : deux particules électronégatives se repoussent ; l’argile et l’humus ne peuvent donc pas se fixer directement l’une à l’autre.\nLeur association exige l’intermédiaire des cations calcium.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q6",
            "type": "mcq",
            "prompt": "L’argile et l’humus ne se fixent pas directement l’un à l’autre parce que :",
            "options": [
              "Ils sont trop gros",
              "Ils sont absents du sol",
              "Ils sont tous deux électronégatifs",
              "Ils sont dissous dans l’eau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’argument de l’interprétation : des charges de même signe se repoussent, d’où le rôle du pont calcique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q1",
          "type": "mcq",
          "prompt": "Sans chlorure de calcium, l’argile fine du filtrat :",
          "options": [
            "Flocule immédiatement",
            "Se dissout complètement",
            "Change de couleur",
            "Reste en suspension"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le résultat de la première étape de l’expérience 2, comparé au tube témoin."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q2",
          "type": "mcq",
          "prompt": "La floculation des colloïdes argileux et humiques est provoquée par :",
          "options": [
            "L’eau distillée",
            "Les ions calcium",
            "Les anions chlorure uniquement",
            "L’agitation du mélange"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’interprétation des deux premières étapes de l’expérience 2."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q3",
          "type": "mcq",
          "prompt": "Le pont calcique est formé par :",
          "options": [
            "Des anions entre l’argile et l’humus",
            "Des cations calcium entre l’argile et l’humus",
            "Des molécules d’eau uniquement",
            "Des micelles d’humus entre elles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que les cations calcium forment un pont dit pont calcique entre l’argile et l’humus."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q4",
          "type": "mcq",
          "prompt": "Dans le complexe argilo-humique, les micelles d’humus forment autour des micelles d’argile :",
          "options": [
            "Un pont calcique",
            "Une solution colloïdale",
            "Un feuillet rigide",
            "Une enveloppe protectrice"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la description du document 3 sur la formation du complexe argilo-humique."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q5",
          "type": "mcq",
          "prompt": "Le pouvoir absorbant du complexe argilo-humique est sa capacité à :",
          "options": [
            "Fixer plusieurs sels minéraux de la solution du sol",
            "Produire des sels minéraux",
            "Détruire les ions du sol",
            "Rendre le sol imperméable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition du pouvoir absorbant donnée dans l’interprétation."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p02_q6",
          "type": "mcq",
          "prompt": "L’argile et l’humus ne se fixent pas directement l’un à l’autre parce que :",
          "options": [
            "Ils sont trop gros",
            "Ils sont absents du sol",
            "Ils sont tous deux électronégatifs",
            "Ils sont dissous dans l’eau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’argument de l’interprétation : des charges de même signe se repoussent, d’où le rôle du pont calcique."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l08_echanges_ions_sol_p03",
      "order": 3,
      "title": "Le mécanisme des échanges : quand le sol perd des ions",
      "summary": "Expliquer la libération d’ions par le complexe argilo-humique quand la solution du sol s’appauvrit, par absorption des plantes ou par lessivage.",
      "conceptExplanation": "Dans le sol, le complexe argilo-humique fixe à sa surface des cations provenant de la solution du sol : c’est un complexe adsorbant.\nOn désigne par complexe adsorbant l’ensemble des colloïdes, composés humiques et argileux, dotés de charges négatives et susceptibles de retenir les cations.\nIl existe un équilibre permanent entre les ions de la solution du sol et ceux du complexe argilo-humique, et cet équilibre peut être déplacé dans les deux sens.\nToute modification de la composition ionique de la solution du sol entraîne un changement de l’équilibre par des échanges : le changement peut survenir lorsque les racines des plantes absorbent les ions, ou bien lorsque les ions sont entraînés par lessivage.\nDans ce cas, il y a déficit d’ions dans la solution du sol ; pour combler ce déficit, le complexe argilo-humique libère des ions.",
      "keyRule": "En cas de déficit d’ions dans la solution du sol, le complexe argilo-humique libère des ions pour rétablir l’équilibre.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer ce qui se passe quand les plantes absorbent les ions du sol",
        "statement": "Les racines des plantes absorbent les ions de la solution du sol. Décris la réponse du complexe argilo-humique.",
        "methodSteps": [
          "L’absorption par les racines fait baisser la quantité d’ions dans la solution du sol : il y a déficit d’ions.",
          "L’équilibre entre la solution du sol et le complexe argilo-humique est déplacé.",
          "Pour combler ce déficit, le complexe argilo-humique libère des ions dans la solution du sol."
        ],
        "conclusion": "C’est le mécanisme d’échange décrit dans la partie II de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le complexe adsorbant",
          "stepTheme": "Le complexe adsorbant",
          "stepBadge": "Le complexe adsorbant",
          "paragraphText": "• Complexe adsorbant : ensemble des colloïdes, composés humiques et argileux, dotés de charges négatives et susceptibles de retenir les cations.\nDans le sol, le complexe argilo-humique fixe à sa surface des cations provenant de la solution du sol.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q1",
            "type": "mcq",
            "prompt": "On désigne par complexe adsorbant l’ensemble des colloïdes :",
            "options": [
              "Dotés de charges négatives et susceptibles de retenir les cations",
              "Dotés de charges positives et retenant les anions",
              "Sans aucune charge",
              "Constitués uniquement de sels minéraux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition donnée dans l’interprétation de la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un équilibre permanent dans le sol",
          "stepTheme": "Un équilibre permanent dans le sol",
          "stepBadge": "Un équilibre permanent dans le sol",
          "paragraphText": "Il existe un équilibre entre les ions de la solution du sol et ceux du complexe argilo-humique.\nCet équilibre peut être déplacé dans les deux sens, selon que la solution du sol gagne ou perd des ions.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q2",
            "type": "mcq",
            "prompt": "Entre la solution du sol et le complexe argilo-humique, il existe :",
            "options": [
              "Un échange à sens unique",
              "Aucun échange",
              "Un équilibre permanent, déplaçable dans les deux sens",
              "Un équilibre seulement en présence d’engrais"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le résultat de l’observation du document sur les échanges ioniques."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’absorption des ions par les plantes",
          "stepTheme": "L’absorption des ions par les plantes",
          "stepBadge": "L’absorption des ions par les plantes",
          "paragraphText": "Lorsque les plantes absorbent les ions de la solution du sol, le complexe argilo-humique libère des ions pour les remplacer.\nLes racines prélèvent donc les ions dans la solution, et le complexe réalimente cette solution.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q3",
            "type": "mcq",
            "prompt": "Lorsque les plantes absorbent les ions de la solution du sol, le complexe argilo-humique :",
            "options": [
              "Fixe encore plus d’ions",
              "Libère des ions pour les remplacer",
              "Se dissout",
              "Ne réagit pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le mécanisme décrit dans l’analyse de la partie II."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le lessivage, autre cause de déficit",
          "stepTheme": "Le lessivage, autre cause de déficit",
          "stepBadge": "Le lessivage, autre cause de déficit",
          "paragraphText": "Le changement d’équilibre peut aussi survenir lorsque les ions sont entraînés par lessivage.\nDans ce cas comme dans celui de l’absorption par les plantes, il y a déficit d’ions dans la solution du sol.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q4",
            "type": "mcq",
            "prompt": "Le lessivage provoque au niveau de la solution du sol :",
            "options": [
              "Un excès d’ions",
              "Une formation de ponts calciques",
              "Une floculation",
              "Un déficit d’ions, les ions étant entraînés"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon cite l’absorption par les racines et l’entraînement par lessivage comme causes de déficit d’ions."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La réponse au déficit : la libération d’ions",
          "stepTheme": "La réponse au déficit : la libération d’ions",
          "stepBadge": "La réponse au déficit : la libération d’ions",
          "paragraphText": "Pour combler le déficit d’ions de la solution du sol, le complexe argilo-humique libère des ions.\nCette libération rétablit l’équilibre ionique entre le complexe et la solution.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q5",
            "type": "mcq",
            "prompt": "En cas de déficit d’ions dans la solution du sol, le complexe argilo-humique :",
            "options": [
              "Fixe des ions",
              "Arrête tout échange",
              "Libère des ions pour combler le déficit",
              "Libère uniquement de l’eau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la réponse du complexe décrite dans l’interprétation de la partie II."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser déficit et excès",
          "stepTheme": "Ne pas inverser déficit et excès",
          "stepBadge": "Ne pas inverser déficit et excès",
          "paragraphText": "Piège : c’est en cas d’excès d’ions que le complexe fixe des ions, et en cas de déficit qu’il en libère.\nInverser les deux sens est l’erreur visée par l’activité d’application de la leçon.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q6",
            "type": "mcq",
            "prompt": "Le complexe argilo-humique fixe des ions de la solution du sol quand celle-ci :",
            "options": [
              "S’enrichit en ions, par exemple après un apport d’engrais",
              "Présente un déficit d’ions",
              "Est absorbée par les plantes",
              "Est entraînée par lessivage"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En cas d’excès d’ions dans la solution, le complexe fixe des ions pour rétablir l’équilibre."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q1",
          "type": "mcq",
          "prompt": "On désigne par complexe adsorbant l’ensemble des colloïdes :",
          "options": [
            "Dotés de charges négatives et susceptibles de retenir les cations",
            "Dotés de charges positives et retenant les anions",
            "Sans aucune charge",
            "Constitués uniquement de sels minéraux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition donnée dans l’interprétation de la partie II."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q2",
          "type": "mcq",
          "prompt": "Entre la solution du sol et le complexe argilo-humique, il existe :",
          "options": [
            "Un échange à sens unique",
            "Aucun échange",
            "Un équilibre permanent, déplaçable dans les deux sens",
            "Un équilibre seulement en présence d’engrais"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le résultat de l’observation du document sur les échanges ioniques."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q3",
          "type": "mcq",
          "prompt": "Lorsque les plantes absorbent les ions de la solution du sol, le complexe argilo-humique :",
          "options": [
            "Fixe encore plus d’ions",
            "Libère des ions pour les remplacer",
            "Se dissout",
            "Ne réagit pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le mécanisme décrit dans l’analyse de la partie II."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q4",
          "type": "mcq",
          "prompt": "Le lessivage provoque au niveau de la solution du sol :",
          "options": [
            "Un excès d’ions",
            "Une formation de ponts calciques",
            "Une floculation",
            "Un déficit d’ions, les ions étant entraînés"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon cite l’absorption par les racines et l’entraînement par lessivage comme causes de déficit d’ions."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q5",
          "type": "mcq",
          "prompt": "En cas de déficit d’ions dans la solution du sol, le complexe argilo-humique :",
          "options": [
            "Fixe des ions",
            "Arrête tout échange",
            "Libère des ions pour combler le déficit",
            "Libère uniquement de l’eau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la réponse du complexe décrite dans l’interprétation de la partie II."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p03_q6",
          "type": "mcq",
          "prompt": "Le complexe argilo-humique fixe des ions de la solution du sol quand celle-ci :",
          "options": [
            "S’enrichit en ions, par exemple après un apport d’engrais",
            "Présente un déficit d’ions",
            "Est absorbée par les plantes",
            "Est entraînée par lessivage"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En cas d’excès d’ions dans la solution, le complexe fixe des ions pour rétablir l’équilibre."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l08_echanges_ions_sol_p04",
      "order": 4,
      "title": "Le mécanisme des échanges : quand le sol reçoit des ions, et le rôle du complexe",
      "summary": "Expliquer la fixation d’ions en cas d’apport d’engrais ou d’amendements et déduire le rôle régulateur du complexe argilo-humique.",
      "conceptExplanation": "Le changement d’équilibre peut aussi survenir lorsqu’il y a apport d’ions à la solution du sol par des engrais ou des amendements.\nDans ce cas, il y a excès d’ions dans la solution du sol ; pour rétablir l’équilibre ionique, le complexe argilo-humique fixe des ions.\nLe complexe argilo-humique, formé de l’association de l’argile et de l’humus par le pont calcique, interagit ainsi en permanence avec la solution du sol : il fixe les ions en cas d’excès et les libère en cas de déficit.\nLa conclusion générale de la leçon retient que les échanges d’ions au niveau du sol se font grâce au complexe argilo-humique, qui interagit avec la solution du sol.\nCe fonctionnement fait du complexe un régulateur de la quantité d’ions disponibles pour les plantes dans la solution du sol.",
      "keyRule": "Le complexe argilo-humique régule les ions du sol : il fixe en cas d’excès et libère en cas de déficit.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l’effet d’un apport d’engrais sur les échanges d’ions",
        "statement": "Un agriculteur apporte des engrais à son sol, comme dans la situation de la coopérative scolaire de la leçon. Décris la réponse du complexe argilo-humique.",
        "methodSteps": [
          "L’apport d’engrais enrichit la solution du sol en ions : il y a excès d’ions.",
          "L’équilibre entre la solution du sol et le complexe argilo-humique est déplacé.",
          "Pour rétablir l’équilibre ionique, le complexe argilo-humique fixe des ions.",
          "Ces ions pourront être libérés plus tard, quand les plantes les absorberont."
        ],
        "conclusion": "C’est le mécanisme d’échange en cas d’apport d’ions décrit dans la partie II."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L’apport d’ions par les engrais ou les amendements",
          "stepTheme": "L’apport d’ions par les engrais ou les amendements",
          "stepBadge": "L’apport d’ions par les engrais ou les amendements",
          "paragraphText": "Lorsqu’on apporte à la solution du sol des ions, par un apport d’engrais ou d’amendements, le complexe argilo-humique fixe ces ions.\nCet apport crée un excès d’ions dans la solution du sol.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q1",
            "type": "mcq",
            "prompt": "Un apport d’engrais ou d’amendements provoque dans la solution du sol :",
            "options": [
              "Un déficit d’ions",
              "Une disparition des colloïdes",
              "Une acidification systématique",
              "Un excès d’ions"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la situation décrite dans l’analyse et l’interprétation de la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La réponse à l’excès : la fixation d’ions",
          "stepTheme": "La réponse à l’excès : la fixation d’ions",
          "stepBadge": "La réponse à l’excès : la fixation d’ions",
          "paragraphText": "Pour rétablir l’équilibre ionique en cas d’excès, le complexe argilo-humique fixe des ions.\nCes ions sont retenus à la surface des colloïdes, grâce à leurs charges négatives pour les cations.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q2",
            "type": "mcq",
            "prompt": "En cas d’excès d’ions dans la solution du sol, le complexe argilo-humique :",
            "options": [
              "Libère des ions",
              "Fixe des ions pour rétablir l’équilibre",
              "Se désagrège",
              "Repousse tous les ions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la réponse du complexe en cas d’excès, symétrique de la libération en cas de déficit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les ions fixés à la surface du complexe",
          "stepTheme": "Les ions fixés à la surface du complexe",
          "stepBadge": "Les ions fixés à la surface du complexe",
          "paragraphText": "Dans le sol, le complexe argilo-humique fixe à sa surface des cations provenant de la solution du sol.\nLa leçon cite comme exemples les cations calcium et potassium présents dans la solution du sol.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q3",
            "type": "mcq",
            "prompt": "Parmi les ions suivants, lesquels sont cités comme cations fixés par le complexe ?",
            "options": [
              "Les ions chlorure uniquement",
              "Les ions calcium et potassium",
              "Les anions de l’éosine",
              "Les ions hydrogène de l’eau distillée uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation cite des cations tels que le calcium et le potassium provenant de la solution du sol."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Un échange dans les deux sens",
          "stepTheme": "Un échange dans les deux sens",
          "stepBadge": "Un échange dans les deux sens",
          "paragraphText": "Toute modification de la composition ionique de la solution du sol entraîne un changement de l’équilibre par des échanges.\nLe complexe libère des ions en cas de déficit et en fixe en cas d’excès : l’échange fonctionne dans les deux sens.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q4",
            "type": "mcq",
            "prompt": "Les échanges entre le complexe argilo-humique et la solution du sol se font :",
            "options": [
              "Uniquement du complexe vers la solution",
              "Uniquement de la solution vers le complexe",
              "Seulement pendant la saison des pluies",
              "Dans les deux sens, selon le déficit ou l’excès d’ions"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon précise que l’équilibre peut être déplacé dans les deux sens."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le rôle du complexe pour les plantes",
          "stepTheme": "Le rôle du complexe pour les plantes",
          "stepBadge": "Le rôle du complexe pour les plantes",
          "paragraphText": "Grâce à ces échanges, les ions fixés par le complexe peuvent être libérés lorsque les plantes absorbent ceux de la solution du sol.\nLe complexe argilo-humique constitue ainsi une réserve d’ions échangeables pour la nutrition des plantes.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q5",
            "type": "mcq",
            "prompt": "Pour les plantes, le complexe argilo-humique joue le rôle :",
            "options": [
              "D’une réserve d’ions qu’il peut libérer dans la solution du sol",
              "D’un obstacle à l’absorption des ions",
              "D’un producteur d’engrais chimique",
              "D’une couche imperméable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le complexe libère des ions pour remplacer ceux que les plantes absorbent : c’est son rôle de réserve échangeable."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le complexe n’est pas constitué uniquement d’argile",
          "stepTheme": "Le complexe n’est pas constitué uniquement d’argile",
          "stepBadge": "Le complexe n’est pas constitué uniquement d’argile",
          "paragraphText": "Piège : le complexe argilo-humique n’est constitué ni uniquement d’argile, ni uniquement d’humus, ni uniquement d’ions calcium.\nIl est formé d’argile et d’humus unis par les ions calcium, comme le rappelle l’exercice 1 de la leçon.",
          "exercise": {
            "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q6",
            "type": "mcq",
            "prompt": "Le complexe argilo-humique est constitué :",
            "options": [
              "Uniquement d’argile",
              "Uniquement d’humus",
              "D’argile et d’humus unis par les ions calcium",
              "Uniquement d’ions calcium"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la seule affirmation exacte de l’exercice 1 de la leçon sur la constitution du complexe."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q1",
          "type": "mcq",
          "prompt": "Un apport d’engrais ou d’amendements provoque dans la solution du sol :",
          "options": [
            "Un déficit d’ions",
            "Une disparition des colloïdes",
            "Une acidification systématique",
            "Un excès d’ions"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la situation décrite dans l’analyse et l’interprétation de la partie II."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q2",
          "type": "mcq",
          "prompt": "En cas d’excès d’ions dans la solution du sol, le complexe argilo-humique :",
          "options": [
            "Libère des ions",
            "Fixe des ions pour rétablir l’équilibre",
            "Se désagrège",
            "Repousse tous les ions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la réponse du complexe en cas d’excès, symétrique de la libération en cas de déficit."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q3",
          "type": "mcq",
          "prompt": "Parmi les ions suivants, lesquels sont cités comme cations fixés par le complexe ?",
          "options": [
            "Les ions chlorure uniquement",
            "Les ions calcium et potassium",
            "Les anions de l’éosine",
            "Les ions hydrogène de l’eau distillée uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation cite des cations tels que le calcium et le potassium provenant de la solution du sol."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q4",
          "type": "mcq",
          "prompt": "Les échanges entre le complexe argilo-humique et la solution du sol se font :",
          "options": [
            "Uniquement du complexe vers la solution",
            "Uniquement de la solution vers le complexe",
            "Seulement pendant la saison des pluies",
            "Dans les deux sens, selon le déficit ou l’excès d’ions"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon précise que l’équilibre peut être déplacé dans les deux sens."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q5",
          "type": "mcq",
          "prompt": "Pour les plantes, le complexe argilo-humique joue le rôle :",
          "options": [
            "D’une réserve d’ions qu’il peut libérer dans la solution du sol",
            "D’un obstacle à l’absorption des ions",
            "D’un producteur d’engrais chimique",
            "D’une couche imperméable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le complexe libère des ions pour remplacer ceux que les plantes absorbent : c’est son rôle de réserve échangeable."
        },
        {
          "id": "premiere_d_svt_l08_echanges_ions_sol_p04_q6",
          "type": "mcq",
          "prompt": "Le complexe argilo-humique est constitué :",
          "options": [
            "Uniquement d’argile",
            "Uniquement d’humus",
            "D’argile et d’humus unis par les ions calcium",
            "Uniquement d’ions calcium"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la seule affirmation exacte de l’exercice 1 de la leçon sur la constitution du complexe."
        }
      ]
    }
  ]
};
