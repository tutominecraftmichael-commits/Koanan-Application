import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 3 : La gamétogenèse » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2787
export const SVT_1ERE_D_L03_GAMETOGENESE: CurriculumChapter = {
  "id": "premiere_d_svt_l03_gametogenese",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 3,
  "title": "Leçon 3 : La gamétogenèse",
  "summary": "On décrit les étapes de la spermatogenèse et de l’ovogenèse, le mécanisme de la méiose qui les sous-tend, ainsi que les brassages chromosomiques et les aberrations qui peuvent l’accompagner.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2787",
  "points": [
    {
      "id": "premiere_d_svt_l03_gametogenese_p01",
      "order": 1,
      "title": "La spermatogenèse : quatre phases en continu",
      "summary": "Décrire les quatre phases de la formation des spermatozoïdes, de la spermatogonie au spermatozoïde.",
      "conceptExplanation": "La formation des cellules sexuelles mâles, ou spermatogenèse, se déroule de façon continue à partir de la puberté, en quatre phases.\nPendant la phase de multiplication, les cellules souches ou spermatogonies, à 2n chromosomes, situées à la périphérie de chaque tube séminifère, se divisent chacune par mitose pour donner plusieurs spermatogonies filles.\nPendant la phase d’accroissement, les spermatogonies filles augmentent de volume et portent le nom de spermatocytes I.\nPendant la phase de maturation, chaque spermatocyte I subit successivement deux divisions particulières qui constituent la méiose : la première donne des spermatocytes II, la deuxième des spermatides.\nPendant la phase de différenciation, ou spermiogenèse, les spermatides subissent de profondes transformations qui les différencient en spermatozoïdes.",
      "keyRule": "Multiplication, accroissement, maturation, différenciation : quatre phases, en continu depuis la puberté.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le phénomène observé dans un tube séminifère",
        "statement": "Un document montre une coupe transversale de tube séminifère avec cellules de Leydig, cellules de Sertoli, spermatogonies, spermatocytes I et II, spermatides et spermatozoïdes. Explique le phénomène qui aboutit au gamète mâle, d’après le corrigé de la leçon.",
        "methodSteps": [
          "Multiplication : les spermatogonies à 2n chromosomes se divisent par mitose à la périphérie du tube.",
          "Accroissement : les spermatogonies filles augmentent de volume et deviennent des spermatocytes I.",
          "Maturation : chaque spermatocyte I subit la méiose, donnant des spermatocytes II puis des spermatides.",
          "Différenciation ou spermiogenèse : les spermatides se transforment en spermatozoïdes."
        ],
        "conclusion": "Ce phénomène est la spermatogenèse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les quatre phases de la spermatogenèse",
          "stepTheme": "Les quatre phases de la spermatogenèse",
          "stepBadge": "Les quatre phases de la spermatogenèse",
          "paragraphText": "Les phases de la spermatogenèse sont : la phase de multiplication, la phase d’accroissement, la phase de maturation et la phase de différenciation.\nElle se déroule de façon continue à partir de la puberté.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p01_q1",
            "type": "mcq",
            "prompt": "La spermatogenèse comporte :",
            "options": [
              "Trois phases, de façon discontinue",
              "Quatre phases : multiplication, accroissement, maturation et différenciation",
              "Deux phases seulement",
              "Une seule mitose"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats de la leçon : quatre phases pour la spermatogenèse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La phase de multiplication",
          "stepTheme": "La phase de multiplication",
          "stepBadge": "La phase de multiplication",
          "paragraphText": "Au cours de la phase de multiplication, les spermatogonies à 2n chromosomes, à la périphérie de chaque tube séminifère, se divisent par mitose.\nChacune donne deux spermatogonies, puis plusieurs spermatogonies filles.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p01_q2",
            "type": "mcq",
            "prompt": "Pendant la multiplication, les spermatogonies se divisent par :",
            "options": [
              "Méiose",
              "Mitose",
              "Fécondation",
              "Bourgeonnement du corps jaune"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que les spermatogonies se divisent par mitose pendant la multiplication."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Accroissement et maturation",
          "stepTheme": "Accroissement et maturation",
          "stepBadge": "Accroissement et maturation",
          "paragraphText": "Pendant l’accroissement, les spermatogonies filles augmentent de volume et deviennent des spermatocytes I.\nPendant la maturation, chaque spermatocyte I subit les deux divisions de la méiose : d’abord des spermatocytes II, puis des spermatides.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p01_q3",
            "type": "mcq",
            "prompt": "La phase de maturation d’un spermatocyte I donne successivement :",
            "options": [
              "Des spermatogonies puis des spermatozoïdes",
              "Des spermatocytes II puis des spermatides",
              "Des ovocytes puis des globules polaires",
              "Des cellules de Sertoli"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La première division donne des spermatocytes II, la deuxième des spermatides."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La spermiogenèse",
          "stepTheme": "La spermiogenèse",
          "stepBadge": "La spermiogenèse",
          "paragraphText": "• Spermiogenèse : phase de différenciation au cours de laquelle les spermatides subissent de profondes transformations.\nElles deviennent alors des spermatozoïdes, gamètes mâles.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p01_q4",
            "type": "mcq",
            "prompt": "La spermiogenèse est la transformation :",
            "options": [
              "Des spermatogonies en spermatocytes",
              "Des spermatides en spermatozoïdes",
              "Des ovogonies en ovocytes",
              "Des follicules en corps jaune"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La phase de différenciation ou spermiogenèse transforme les spermatides en spermatozoïdes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Une production continue depuis la puberté",
          "stepTheme": "Une production continue depuis la puberté",
          "stepBadge": "Une production continue depuis la puberté",
          "paragraphText": "La spermatogenèse se déroule de façon continue à partir de la puberté.\nC’est une différence majeure avec l’ovogenèse, qui est discontinue.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p01_q5",
            "type": "mcq",
            "prompt": "La spermatogenèse se déroule :",
            "options": [
              "De façon discontinue, avant la naissance",
              "De façon continue à partir de la puberté",
              "Uniquement pendant la vie embryonnaire",
              "Par cycles de vingt-huit jours"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse de la leçon : la spermatogenèse est continue à partir de la puberté."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l03_gametogenese_p01_q1",
          "type": "mcq",
          "prompt": "La spermatogenèse comporte :",
          "options": [
            "Trois phases, de façon discontinue",
            "Quatre phases : multiplication, accroissement, maturation et différenciation",
            "Deux phases seulement",
            "Une seule mitose"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats de la leçon : quatre phases pour la spermatogenèse."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p01_q2",
          "type": "mcq",
          "prompt": "Pendant la multiplication, les spermatogonies se divisent par :",
          "options": [
            "Méiose",
            "Mitose",
            "Fécondation",
            "Bourgeonnement du corps jaune"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que les spermatogonies se divisent par mitose pendant la multiplication."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p01_q3",
          "type": "mcq",
          "prompt": "La phase de maturation d’un spermatocyte I donne successivement :",
          "options": [
            "Des spermatogonies puis des spermatozoïdes",
            "Des spermatocytes II puis des spermatides",
            "Des ovocytes puis des globules polaires",
            "Des cellules de Sertoli"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La première division donne des spermatocytes II, la deuxième des spermatides."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p01_q4",
          "type": "mcq",
          "prompt": "La spermiogenèse est la transformation :",
          "options": [
            "Des spermatogonies en spermatocytes",
            "Des spermatides en spermatozoïdes",
            "Des ovogonies en ovocytes",
            "Des follicules en corps jaune"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La phase de différenciation ou spermiogenèse transforme les spermatides en spermatozoïdes."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p01_q5",
          "type": "mcq",
          "prompt": "La spermatogenèse se déroule :",
          "options": [
            "De façon discontinue, avant la naissance",
            "De façon continue à partir de la puberté",
            "Uniquement pendant la vie embryonnaire",
            "Par cycles de vingt-huit jours"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse de la leçon : la spermatogenèse est continue à partir de la puberté."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l03_gametogenese_p02",
      "order": 2,
      "title": "L’ovogenèse : trois phases et un déroulement discontinu",
      "summary": "Décrire les trois phases de la formation des gamètes femelles et leur calendrier, de la vie embryonnaire à la puberté.",
      "conceptExplanation": "La formation des gamètes femelles, ou ovogenèse, se déroule de façon discontinue, en trois phases : multiplication, accroissement et maturation — elle ne possède pas de phase de différenciation.\nElle commence dans l’ovaire embryonnaire, avant la naissance, s’arrête avant la naissance par une longue période de repos, puis reprend à partir de la puberté.\nPendant la multiplication, les ovogonies souches à 2n chromosomes se divisent par de nombreuses mitoses pour donner plusieurs ovogonies filles.\nPendant l’accroissement, chaque ovogonie fille subit un important accroissement de volume, par accumulation de réserves nutritives, et devient un ovocyte de premier ordre ou ovocyte I ; tous les ovocytes I s’entourent de quelques cellules folliculaires pour constituer les follicules primordiaux, puis entrent en repos après la naissance.\nPendant la maturation, l’ovocyte I subit la méiose : la première division donne une grosse cellule haploïde, l’ovocyte II, et une très petite cellule, le premier globule polaire ; la deuxième division aboutit à une grosse cellule haploïde, l’ovotide, et au deuxième globule polaire.",
      "keyRule": "Ovogenèse : trois phases sans différenciation, commencée avant la naissance, en repos, reprise à la puberté.",
      "formulas": [],
      "workedExample": {
        "title": "Déduire les phases de la gamétogenèse chez la femme d’un graphe",
        "statement": "Un graphe montre le nombre de cellules sexuelles dans les ovaires : il augmente jusqu’à environ sept millions au sixième mois de vie embryonnaire, chute à environ deux millions à la naissance, puis baisse jusqu’à s’annuler vers cinquante ans. Que déduit-on, d’après le corrigé de la leçon ?",
        "methodSteps": [
          "L’augmentation traduit la multiplication des ovogonies, dont certaines deviennent des ovocytes I par accumulation de réserves pendant l’accroissement.",
          "La chute traduit la destruction de beaucoup de ces cellules pendant le stade embryonnaire, puis l’utilisation du stock à chaque cycle menstruel.",
          "Les deux principales phases chez la femme sont donc la multiplication et l’accroissement au stade embryonnaire, puis la maturation."
        ],
        "conclusion": "La gamétogenèse femelle est discontinue : multiplication et accroissement avant la naissance, maturation reprise à la puberté."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les trois phases de l’ovogenèse",
          "stepTheme": "Les trois phases de l’ovogenèse",
          "stepBadge": "Les trois phases de l’ovogenèse",
          "paragraphText": "Les phases de l’ovogenèse sont : la phase de multiplication, la phase d’accroissement et la phase de maturation.\nContrairement à la spermatogenèse, il n’y a pas de phase de différenciation.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p02_q1",
            "type": "mcq",
            "prompt": "L’ovogenèse se distingue de la spermatogenèse parce qu’elle :",
            "options": [
              "Possède une phase de différenciation supplémentaire",
              "Ne possède pas de phase de différenciation et comporte trois phases",
              "Se déroule dans les tubes séminifères",
              "Produit quatre gamètes égaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la leçon : l’ovogenèse ne possède pas de phase de différenciation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un déroulement discontinu",
          "stepTheme": "Un déroulement discontinu",
          "stepBadge": "Un déroulement discontinu",
          "paragraphText": "L’ovogenèse commence dans l’ovaire embryonnaire, avant la naissance, puis s’arrête avant la naissance.\nAprès une longue période de repos, elle reprend à partir de la puberté.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p02_q2",
            "type": "mcq",
            "prompt": "L’ovogenèse commence :",
            "options": [
              "À la puberté seulement",
              "Dans l’ovaire embryonnaire, avant la naissance, puis reprend à la puberté après un repos",
              "À la ménopause",
              "Après la fécondation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon décrit un début embryonnaire, un arrêt avant la naissance et une reprise à la puberté."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’accroissement : des réserves nutritives",
          "stepTheme": "L’accroissement : des réserves nutritives",
          "stepBadge": "L’accroissement : des réserves nutritives",
          "paragraphText": "Durant l’accroissement, chaque ovogonie fille subit un important accroissement de volume par accumulation de réserves nutritives.\nElle devient un ovocyte de premier ordre ou ovocyte I, entouré de cellules folliculaires dans un follicule primordial.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p02_q3",
            "type": "mcq",
            "prompt": "Pendant l’accroissement, l’ovogonie fille devient un ovocyte I grâce à :",
            "options": [
              "Une division réductionnelle",
              "L’accumulation de réserves nutritives, avec un important accroissement de volume",
              "Un crossing-over",
              "Une fécondation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation de la leçon attribue l’accroissement à l’accumulation de réserves nutritives."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La maturation : des cellules de taille inégale",
          "stepTheme": "La maturation : des cellules de taille inégale",
          "stepBadge": "La maturation : des cellules de taille inégale",
          "paragraphText": "La première division de méiose de l’ovocyte I donne une grosse cellule haploïde, l’ovocyte II, et une très petite cellule, le premier globule polaire.\nLa deuxième division aboutit à l’ovotide, grosse cellule haploïde, et au deuxième globule polaire.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p02_q4",
            "type": "mcq",
            "prompt": "La première division de méiose de l’ovocyte I donne :",
            "options": [
              "Deux ovocytes II égaux",
              "Un ovocyte II, grosse cellule haploïde, et un premier globule polaire, très petite cellule",
              "Quatre ovotides",
              "Deux ovogonies"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon insiste sur l’inégalité des deux cellules obtenues : ovocyte II et premier globule polaire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre continu et discontinu",
          "stepTheme": "Ne pas confondre continu et discontinu",
          "stepBadge": "Ne pas confondre continu et discontinu",
          "paragraphText": "Piège : attribuer la continuité à l’ovogenèse.\nLa spermatogenèse est continue depuis la puberté ; l’ovogenèse est discontinue, avec un stock formé avant la naissance.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p02_q5",
            "type": "mcq",
            "prompt": "Le déroulement discontinu, avec période de repos, caractérise :",
            "options": [
              "La spermatogenèse",
              "La spermiogenèse",
              "L’ovogenèse",
              "La multiplication des spermatogonies"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conclusion de la leçon : l’ovogenèse se déroule de façon discontinue, la spermatogenèse de façon continue."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l03_gametogenese_p02_q1",
          "type": "mcq",
          "prompt": "L’ovogenèse se distingue de la spermatogenèse parce qu’elle :",
          "options": [
            "Possède une phase de différenciation supplémentaire",
            "Ne possède pas de phase de différenciation et comporte trois phases",
            "Se déroule dans les tubes séminifères",
            "Produit quatre gamètes égaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la leçon : l’ovogenèse ne possède pas de phase de différenciation."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p02_q2",
          "type": "mcq",
          "prompt": "L’ovogenèse commence :",
          "options": [
            "À la puberté seulement",
            "Dans l’ovaire embryonnaire, avant la naissance, puis reprend à la puberté après un repos",
            "À la ménopause",
            "Après la fécondation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon décrit un début embryonnaire, un arrêt avant la naissance et une reprise à la puberté."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p02_q3",
          "type": "mcq",
          "prompt": "Pendant l’accroissement, l’ovogonie fille devient un ovocyte I grâce à :",
          "options": [
            "Une division réductionnelle",
            "L’accumulation de réserves nutritives, avec un important accroissement de volume",
            "Un crossing-over",
            "Une fécondation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation de la leçon attribue l’accroissement à l’accumulation de réserves nutritives."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p02_q4",
          "type": "mcq",
          "prompt": "La première division de méiose de l’ovocyte I donne :",
          "options": [
            "Deux ovocytes II égaux",
            "Un ovocyte II, grosse cellule haploïde, et un premier globule polaire, très petite cellule",
            "Quatre ovotides",
            "Deux ovogonies"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon insiste sur l’inégalité des deux cellules obtenues : ovocyte II et premier globule polaire."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p02_q5",
          "type": "mcq",
          "prompt": "Le déroulement discontinu, avec période de repos, caractérise :",
          "options": [
            "La spermatogenèse",
            "La spermiogenèse",
            "L’ovogenèse",
            "La multiplication des spermatogonies"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conclusion de la leçon : l’ovogenèse se déroule de façon discontinue, la spermatogenèse de façon continue."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l03_gametogenese_p03",
      "order": 3,
      "title": "La méiose : division réductionnelle puis division équationnelle",
      "summary": "Comparer le bilan de la méiose chez le mâle et chez la femelle, de la cellule diploïde aux gamètes haploïdes.",
      "conceptExplanation": "La spermatogenèse et l’ovogenèse se déroulent grâce à la méiose, division cellulaire qui comprend deux grandes étapes : la première, ou division réductionnelle, et la deuxième, ou division équationnelle, présentant chacune une prophase, une métaphase, une anaphase et une télophase.\nChez le mâle, le spermatocyte I diploïde subit la division réductionnelle et donne deux spermatocytes II haploïdes de taille égale ; chaque spermatocyte II subit la division équationnelle et donne deux spermatides haploïdes de taille égale : on obtient quatre spermatides à partir d’un spermatocyte I, qui donneront quatre spermatozoïdes.\nChez la femelle, l’ovocyte I donne, par la division réductionnelle, un ovocyte II et un premier globule polaire, de tailles différentes ; l’ovocyte II donne ensuite un ovule et un deuxième globule polaire.\nOn obtient ainsi un ovule et deux globules polaires à partir d’un ovocyte I.\nDans les deux cas, à partir de cellules diploïdes, on obtient des cellules haploïdes appelées gamètes.",
      "keyRule": "Un spermatocyte I donne quatre spermatozoïdes ; un ovocyte I donne un seul ovule et des globules polaires — mais toujours du diploïde vers l’haploïde.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte sur la production des gamètes chez la femme",
        "statement": "Le corrigé de l’exercice sur la gamétogenèse précise que chez la femme la fabrication est cyclique, tous les vingt-huit jours en moyenne, de la puberté à la ménopause, alternativement dans l’un ou l’autre des deux ovaires, avec pas plus de quatre cents ovules au cours d’une vie. Retrouve les bilans chromosomiques associés.",
        "methodSteps": [
          "Le caryotype d’un gamète ne contient que vingt-trois chromosomes, contre quarante-six pour les cellules normales : le nombre est réduit de moitié.",
          "Chaque gamète n’a plus qu’un seul chromosome de chaque paire, reçu au hasard.",
          "Les gamètes produits par un individu sont donc génétiquement différents."
        ],
        "conclusion": "La méiose réduit le nombre de chromosomes de moitié et rend les gamètes génétiquement différents."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les deux divisions de la méiose",
          "stepTheme": "Les deux divisions de la méiose",
          "stepBadge": "Les deux divisions de la méiose",
          "paragraphText": "La méiose comprend deux grandes étapes : la première ou division réductionnelle, et la deuxième ou division équationnelle.\nChacune présente une prophase, une métaphase, une anaphase et une télophase.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p03_q1",
            "type": "mcq",
            "prompt": "La méiose comprend :",
            "options": [
              "Une seule division, comme la mitose",
              "Deux divisions : réductionnelle puis équationnelle",
              "Trois divisions successives",
              "Aucune division chez la femelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse de la leçon : deux divisions, réductionnelle puis équationnelle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Bilan chez le mâle : quatre spermatides",
          "stepTheme": "Bilan chez le mâle : quatre spermatides",
          "stepBadge": "Bilan chez le mâle : quatre spermatides",
          "paragraphText": "On obtient quatre spermatides haploïdes à partir d’un spermatocyte I diploïde grâce à la méiose.\nLes quatre spermatides, de taille égale, donneront quatre spermatozoïdes.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p03_q2",
            "type": "mcq",
            "prompt": "À partir d’un spermatocyte I, la méiose donne :",
            "options": [
              "Un seul spermatozoïde",
              "Deux spermatides",
              "Quatre spermatides haploïdes de taille égale",
              "Quatre spermatogonies diploïdes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultat de la leçon : quatre spermatides à partir d’un spermatocyte I."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Bilan chez la femelle : un ovule",
          "stepTheme": "Bilan chez la femelle : un ovule",
          "stepBadge": "Bilan chez la femelle : un ovule",
          "paragraphText": "À partir d’un ovocyte I diploïde, grâce à la méiose, on obtient un ovule haploïde et deux globules polaires haploïdes.\nLes divisions sont inégales : seule la grosse cellule poursuit utilement la gamétogenèse.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p03_q3",
            "type": "mcq",
            "prompt": "À partir d’un ovocyte I, la méiose donne :",
            "options": [
              "Quatre ovules égaux",
              "Un ovule et deux globules polaires",
              "Deux ovules et un globule",
              "Un ovocyte II diploïde"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultat de la leçon pour l’ovogenèse : un ovule et deux globules polaires."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "De diploïde à haploïde",
          "stepTheme": "De diploïde à haploïde",
          "stepBadge": "De diploïde à haploïde",
          "paragraphText": "À partir de cellules diploïdes, la méiose permet d’obtenir des cellules haploïdes appelées gamètes.\nLa première division est dite réductionnelle parce qu’elle réduit de moitié le nombre de chromosomes.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p03_q4",
            "type": "mcq",
            "prompt": "La division réductionnelle est ainsi appelée parce qu’elle :",
            "options": [
              "Double le nombre de chromosomes",
              "Réduit de moitié le nombre de chromosomes, du stade diploïde au stade haploïde",
              "Conserve exactement le même nombre",
              "Supprime tous les chromosomes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation de la leçon : la première division réduit le nombre de chromosomes de moitié."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La division équationnelle conserve l’haploïdie",
          "stepTheme": "La division équationnelle conserve l’haploïdie",
          "stepBadge": "La division équationnelle conserve l’haploïdie",
          "paragraphText": "La deuxième division est dite équationnelle parce qu’elle permet d’obtenir des cellules haploïdes à partir de cellules haploïdes.\nElle se déroule comme une mitose, avec clivage des centromères en anaphase.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p03_q5",
            "type": "mcq",
            "prompt": "La division équationnelle produit :",
            "options": [
              "Des cellules diploïdes à partir d’haploïdes",
              "Des cellules haploïdes à partir de cellules haploïdes",
              "Des cellules sans chromosomes",
              "Uniquement des globules polaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition de la leçon : la deuxième division donne des haploïdes à partir d’haploïdes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l03_gametogenese_p03_q1",
          "type": "mcq",
          "prompt": "La méiose comprend :",
          "options": [
            "Une seule division, comme la mitose",
            "Deux divisions : réductionnelle puis équationnelle",
            "Trois divisions successives",
            "Aucune division chez la femelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse de la leçon : deux divisions, réductionnelle puis équationnelle."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p03_q2",
          "type": "mcq",
          "prompt": "À partir d’un spermatocyte I, la méiose donne :",
          "options": [
            "Un seul spermatozoïde",
            "Deux spermatides",
            "Quatre spermatides haploïdes de taille égale",
            "Quatre spermatogonies diploïdes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultat de la leçon : quatre spermatides à partir d’un spermatocyte I."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p03_q3",
          "type": "mcq",
          "prompt": "À partir d’un ovocyte I, la méiose donne :",
          "options": [
            "Quatre ovules égaux",
            "Un ovule et deux globules polaires",
            "Deux ovules et un globule",
            "Un ovocyte II diploïde"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultat de la leçon pour l’ovogenèse : un ovule et deux globules polaires."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p03_q4",
          "type": "mcq",
          "prompt": "La division réductionnelle est ainsi appelée parce qu’elle :",
          "options": [
            "Double le nombre de chromosomes",
            "Réduit de moitié le nombre de chromosomes, du stade diploïde au stade haploïde",
            "Conserve exactement le même nombre",
            "Supprime tous les chromosomes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation de la leçon : la première division réduit le nombre de chromosomes de moitié."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p03_q5",
          "type": "mcq",
          "prompt": "La division équationnelle produit :",
          "options": [
            "Des cellules diploïdes à partir d’haploïdes",
            "Des cellules haploïdes à partir de cellules haploïdes",
            "Des cellules sans chromosomes",
            "Uniquement des globules polaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition de la leçon : la deuxième division donne des haploïdes à partir d’haploïdes."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l03_gametogenese_p04",
      "order": 4,
      "title": "Le déroulement détaillé des phases de la méiose",
      "summary": "Suivre, phase par phase, l’appariement des homologues, leur séparation, puis le clivage des centromères.",
      "conceptExplanation": "En prophase de première division, les chromosomes homologues s’apparient sur toute leur longueur : on obtient des paires d’homologues ou bivalents.\nEn métaphase de première division, les chromosomes de chaque paire se placent de part et d’autre du plan équatorial du fuseau de division.\nEn anaphase de première division, les deux chromosomes homologues de chaque bivalent se séparent et migrent chacun vers un pôle, sans division des centromères, chaque chromosome gardant ses deux chromatides.\nEn télophase de première division, chaque pôle reçoit l’un ou l’autre des deux chromosomes du bivalent, l’enveloppe nucléaire se reconstitue et on obtient deux cellules filles haploïdes.\nLa deuxième division se déroule comme une mitose : en prophase, l’enveloppe nucléaire et le nucléole disparaissent à nouveau ; en métaphase, chaque chromosome se place par son centromère sur le plan équatorial ; en anaphase, le clivage de tous les centromères forme des chromosomes fils d’une seule chromatide, qui s’éloignent vers les pôles ; en télophase, chaque cellule se divise en deux cellules filles haploïdes, soit quatre cellules filles haploïdes au total.",
      "keyRule": "Première division : les homologues se séparent sans clivage des centromères ; deuxième division : les chromatides se séparent après clivage des centromères.",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner les événements de la méiose",
        "statement": "Remets dans l’ordre : appariement des homologues en bivalents, séparation des homologues vers les pôles, clivage des centromères, obtention de quatre cellules haploïdes.",
        "methodSteps": [
          "L’appariement des homologues en bivalents a lieu en prophase de première division.",
          "La séparation des homologues, sans division des centromères, a lieu en anaphase de première division.",
          "Le clivage des centromères et la séparation des chromatides ont lieu en anaphase de deuxième division.",
          "On obtient au final quatre cellules filles haploïdes."
        ],
        "conclusion": "L’ordre des événements distingue nettement la division réductionnelle de la division équationnelle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La prophase I : les bivalents",
          "stepTheme": "La prophase I : les bivalents",
          "stepBadge": "La prophase I : les bivalents",
          "paragraphText": "En prophase de première division, les chromosomes homologues s’apparient sur toute leur longueur.\nOn obtient des paires d’homologues appelées bivalents.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p04_q1",
            "type": "mcq",
            "prompt": "En prophase de première division, les chromosomes homologues :",
            "options": [
              "Se séparent immédiatement",
              "S’apparient sur toute leur longueur pour former des bivalents",
              "Disparaissent",
              "Se placent sur le plan équatorial"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la leçon : appariement des homologues en bivalents en prophase I."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La métaphase I : de part et d’autre du plan équatorial",
          "stepTheme": "La métaphase I : de part et d’autre du plan équatorial",
          "stepBadge": "La métaphase I : de part et d’autre du plan équatorial",
          "paragraphText": "En métaphase de première division, les chromosomes de chaque paire se placent de part et d’autre du plan équatorial du fuseau de division.\nCette disposition prépare la séparation des homologues.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p04_q2",
            "type": "mcq",
            "prompt": "En métaphase de première division, les chromosomes de chaque paire se placent :",
            "options": [
              "Sur un seul côté du fuseau",
              "Aux deux pôles de la cellule",
              "De part et d’autre du plan équatorial",
              "Dans le nucléole"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon place les chromosomes de chaque paire de part et d’autre du plan équatorial."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’anaphase I : séparation sans clivage des centromères",
          "stepTheme": "L’anaphase I : séparation sans clivage des centromères",
          "stepBadge": "L’anaphase I : séparation sans clivage des centromères",
          "paragraphText": "En anaphase de première division, les deux chromosomes homologues de chaque bivalent se séparent et migrent chacun vers un pôle.\nIl n’y a pas division des centromères : chaque chromosome reste à deux chromatides.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p04_q3",
            "type": "mcq",
            "prompt": "En anaphase de première division, il y a :",
            "options": [
              "Clivage de tous les centromères",
              "Séparation des chromosomes homologues, sans division des centromères",
              "Fécondation des gamètes",
              "Formation des globules polaires seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise : migration des homologues sans division des centromères."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’anaphase II : le clivage des centromères",
          "stepTheme": "L’anaphase II : le clivage des centromères",
          "stepBadge": "L’anaphase II : le clivage des centromères",
          "paragraphText": "À l’anaphase de deuxième division, le clivage de tous les centromères conduit à la formation de chromosomes fils constitués chacun d’une seule chromatide.\nLes deux chromatides d’un même chromosome s’éloignent et montent aux pôles.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p04_q4",
            "type": "mcq",
            "prompt": "Le clivage des centromères a lieu :",
            "options": [
              "En prophase de première division",
              "En métaphase de première division",
              "En anaphase de deuxième division",
              "Pendant la fécondation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est en anaphase II que les centromères se clivent, selon la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le bilan de la télophase II",
          "stepTheme": "Le bilan de la télophase II",
          "stepBadge": "Le bilan de la télophase II",
          "paragraphText": "À la télophase de deuxième division, chaque cellule issue de la première division se divise en deux autres cellules filles haploïdes.\nOn obtient ainsi quatre cellules filles haploïdes, morphologiquement identiques chez le mâle.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p04_q5",
            "type": "mcq",
            "prompt": "Au terme de la méiose d’une cellule diploïde mâle, on obtient :",
            "options": [
              "Deux cellules diploïdes",
              "Quatre cellules filles haploïdes",
              "Une seule cellule haploïde",
              "Huit cellules haploïdes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la leçon : quatre cellules filles haploïdes au terme de la méiose."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l03_gametogenese_p04_q1",
          "type": "mcq",
          "prompt": "En prophase de première division, les chromosomes homologues :",
          "options": [
            "Se séparent immédiatement",
            "S’apparient sur toute leur longueur pour former des bivalents",
            "Disparaissent",
            "Se placent sur le plan équatorial"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la leçon : appariement des homologues en bivalents en prophase I."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p04_q2",
          "type": "mcq",
          "prompt": "En métaphase de première division, les chromosomes de chaque paire se placent :",
          "options": [
            "Sur un seul côté du fuseau",
            "Aux deux pôles de la cellule",
            "De part et d’autre du plan équatorial",
            "Dans le nucléole"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon place les chromosomes de chaque paire de part et d’autre du plan équatorial."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p04_q3",
          "type": "mcq",
          "prompt": "En anaphase de première division, il y a :",
          "options": [
            "Clivage de tous les centromères",
            "Séparation des chromosomes homologues, sans division des centromères",
            "Fécondation des gamètes",
            "Formation des globules polaires seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise : migration des homologues sans division des centromères."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p04_q4",
          "type": "mcq",
          "prompt": "Le clivage des centromères a lieu :",
          "options": [
            "En prophase de première division",
            "En métaphase de première division",
            "En anaphase de deuxième division",
            "Pendant la fécondation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est en anaphase II que les centromères se clivent, selon la leçon."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p04_q5",
          "type": "mcq",
          "prompt": "Au terme de la méiose d’une cellule diploïde mâle, on obtient :",
          "options": [
            "Deux cellules diploïdes",
            "Quatre cellules filles haploïdes",
            "Une seule cellule haploïde",
            "Huit cellules haploïdes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la leçon : quatre cellules filles haploïdes au terme de la méiose."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l03_gametogenese_p05",
      "order": 5,
      "title": "Les brassages chromosomiques : diversité des gamètes",
      "summary": "Distinguer le brassage interchromosomique du brassage intrachromosomique et leurs mécanismes.",
      "conceptExplanation": "Les brassages se traduisent par des échanges de segments de chromosomes ou une disposition aléatoire des chromosomes : on rencontre le brassage interchromosomique et le brassage intrachromosomique.\nLe brassage interchromosomique a lieu à la métaphase de première division de méiose : il se caractérise par la combinaison aléatoire des chromosomes d’origine paternelle et d’origine maternelle.\nLe brassage intrachromosomique est dû aux échanges de segments de chromatides entre chromosomes homologues : il est la conséquence du crossing-over, avec contact puis échange de fragments entre chromosomes homologues d’origine parentale différente.\nL’individu produit ainsi, en plus des gamètes parentaux, des gamètes recombinés.\nCes brassages conduisent à la formation de gamètes remaniés et assurent la diversité biologique, ou biodiversité ; la méiose permet par ailleurs la réduction chromatique, qui donne des cellules sexuelles haploïdes.",
      "keyRule": "Inter : disposition aléatoire des chromosomes entiers à la métaphase I ; intra : échanges de segments par crossing-over entre homologues.",
      "formulas": [],
      "workedExample": {
        "title": "Associer chaque brassage à son phénomène",
        "statement": "L’exercice de la leçon associe les brassages à leurs phénomènes : crossing-over, chiasma et échanges de chromatides d’un côté ; disposition aléatoire des chromosomes de l’autre. Classe les phénomènes.",
        "methodSteps": [
          "Le brassage intrachromosomique correspond au crossing-over, aux chiasmas et aux échanges de chromatides entre homologues.",
          "Le brassage interchromosomique correspond à la combinaison aléatoire des chromosomes d’origine paternelle et maternelle."
        ],
        "conclusion": "Chaque brassage a son mécanisme propre : échange de segments pour l’intra, tirage aléatoire des chromosomes pour l’inter."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Deux types de brassages",
          "stepTheme": "Deux types de brassages",
          "stepBadge": "Deux types de brassages",
          "paragraphText": "On rencontre le brassage interchromosomique et le brassage intrachromosomique.\nLes uns portent sur la disposition des chromosomes entiers, les autres sur des échanges de segments.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p05_q1",
            "type": "mcq",
            "prompt": "Les deux brassages de la méiose sont :",
            "options": [
              "Mitose et fécondation",
              "Brassage interchromosomique et brassage intrachromosomique",
              "Transcription et traduction",
              "Multiplication et accroissement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse de la leçon : brassage interchromosomique et brassage intrachromosomique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le brassage interchromosomique",
          "stepTheme": "Le brassage interchromosomique",
          "stepBadge": "Le brassage interchromosomique",
          "paragraphText": "Le brassage interchromosomique a lieu à la métaphase de première division de méiose.\nIl se caractérise par la combinaison aléatoire des chromosomes d’origine paternelle et d’origine maternelle.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p05_q2",
            "type": "mcq",
            "prompt": "Le brassage interchromosomique se caractérise par :",
            "options": [
              "L’échange de fragments entre homologues",
              "La combinaison aléatoire des chromosomes d’origine paternelle et maternelle",
              "La perte d’un chromosome",
              "La duplication de l’ADN"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon le définit par la combinaison aléatoire des chromosomes parentaux."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le brassage intrachromosomique et le crossing-over",
          "stepTheme": "Le brassage intrachromosomique et le crossing-over",
          "stepBadge": "Le brassage intrachromosomique et le crossing-over",
          "paragraphText": "Le brassage intrachromosomique est dû aux échanges de segments de chromatides entre chromosomes homologues.\nIl est la conséquence du crossing-over : contact puis échange de fragments entre homologues d’origine parentale différente.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p05_q3",
            "type": "mcq",
            "prompt": "Le brassage intrachromosomique est la conséquence :",
            "options": [
              "De la fécondation",
              "Du crossing-over, échange de segments entre chromosomes homologues",
              "De la non-disjonction",
              "De la spermiogenèse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon attribue le brassage intrachromosomique au crossing-over."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Gamètes parentaux et gamètes recombinés",
          "stepTheme": "Gamètes parentaux et gamètes recombinés",
          "stepBadge": "Gamètes parentaux et gamètes recombinés",
          "paragraphText": "L’individu issu d’une union entre gamètes parentaux produit lui-même, en plus des gamètes parentaux, des gamètes recombinés.\nCe sont les gamètes remaniés par les brassages.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p05_q4",
            "type": "mcq",
            "prompt": "En plus des gamètes parentaux, un individu produit :",
            "options": [
              "Uniquement des cellules diploïdes",
              "Des gamètes recombinés",
              "Des globules polaires uniquement",
              "Aucun gamète nouveau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le schéma de la leçon montre la production de gamètes recombinés en plus des gamètes parentaux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La conséquence : la diversité biologique",
          "stepTheme": "La conséquence : la diversité biologique",
          "stepBadge": "La conséquence : la diversité biologique",
          "paragraphText": "Ces brassages conduisent à la formation de gamètes remaniés et assurent la diversité biologique ou biodiversité.\nLa méiose assure en même temps la réduction chromatique, qui donne des gamètes haploïdes.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p05_q5",
            "type": "mcq",
            "prompt": "Les brassages chromosomiques assurent :",
            "options": [
              "L’identité génétique de tous les gamètes",
              "La diversité biologique, par la formation de gamètes remaniés",
              "La disparition des chromosomes",
              "La stérilité des individus"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la leçon : les brassages assurent la diversité biologique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l03_gametogenese_p05_q1",
          "type": "mcq",
          "prompt": "Les deux brassages de la méiose sont :",
          "options": [
            "Mitose et fécondation",
            "Brassage interchromosomique et brassage intrachromosomique",
            "Transcription et traduction",
            "Multiplication et accroissement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse de la leçon : brassage interchromosomique et brassage intrachromosomique."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p05_q2",
          "type": "mcq",
          "prompt": "Le brassage interchromosomique se caractérise par :",
          "options": [
            "L’échange de fragments entre homologues",
            "La combinaison aléatoire des chromosomes d’origine paternelle et maternelle",
            "La perte d’un chromosome",
            "La duplication de l’ADN"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon le définit par la combinaison aléatoire des chromosomes parentaux."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p05_q3",
          "type": "mcq",
          "prompt": "Le brassage intrachromosomique est la conséquence :",
          "options": [
            "De la fécondation",
            "Du crossing-over, échange de segments entre chromosomes homologues",
            "De la non-disjonction",
            "De la spermiogenèse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon attribue le brassage intrachromosomique au crossing-over."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p05_q4",
          "type": "mcq",
          "prompt": "En plus des gamètes parentaux, un individu produit :",
          "options": [
            "Uniquement des cellules diploïdes",
            "Des gamètes recombinés",
            "Des globules polaires uniquement",
            "Aucun gamète nouveau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le schéma de la leçon montre la production de gamètes recombinés en plus des gamètes parentaux."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p05_q5",
          "type": "mcq",
          "prompt": "Les brassages chromosomiques assurent :",
          "options": [
            "L’identité génétique de tous les gamètes",
            "La diversité biologique, par la formation de gamètes remaniés",
            "La disparition des chromosomes",
            "La stérilité des individus"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la leçon : les brassages assurent la diversité biologique."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l03_gametogenese_p06",
      "order": 6,
      "title": "Méiose atypique et aberrations chromosomiques",
      "summary": "Expliquer les anomalies de nombre et de structure des chromosomes et citer les exemples de la leçon.",
      "conceptExplanation": "Lorsque la méiose se déroule de façon anormale, elle est dite atypique : elle conduit à la formation de gamètes anormaux à cause des anomalies ou aberrations chromosomiques, qui affectent aussi bien le nombre que la structure des chromosomes.\nLes aberrations de nombre se produisent tant au niveau des autosomes qu’au niveau des hétérochromosomes ; elles sont dues soit à la non-disjonction des chromosomes homologues lors de la division réductionnelle, soit à la non-disjonction des chromatides sœurs lors de la division équationnelle, et conduisent après fécondation à des troubles divers.\nParmi les exemples de la leçon : le syndrome de Klinefelter, avec des mâles stériles aux testicules réduits et sans spermatogonies ; le triplo-X, chez des femelles fertiles ; le syndrome de Turner ; et, au niveau des autosomes, la trisomie 21 ou syndrome de Down, avec trois exemplaires du chromosome 21 au lieu de deux, ainsi que les trisomies 18, 13 et 8.\nLes aberrations de structure surviennent à la suite d’une délétion ou d’une translocation : la délétion est la perte d’un fragment de chromosome — celle du bras court du chromosome 5 entraîne la maladie du cri du chat — et la translocation est le transfert d’un fragment de chromosome, ou d’un chromosome entier, sur le même chromosome ou sur un autre chromosome.",
      "keyRule": "Non-disjonction : anomalies de nombre ; délétion et translocation : anomalies de structure — la méiose atypique produit des gamètes anormaux.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître une aberration à partir d’un caryotype",
        "statement": "Un caryotype montre trois exemplaires du chromosome 21 au lieu de deux. Identifie l’anomalie et son origine, d’après la leçon.",
        "methodSteps": [
          "Trois exemplaires d’un autosome définissent une trisomie : ici la trisomie 21, ou syndrome de Down.",
          "L’origine est une non-disjonction, des homologues en division réductionnelle ou des chromatides sœurs en division équationnelle.",
          "Après fécondation, le gamète anormal transmet l’anomalie à l’individu."
        ],
        "conclusion": "La trisomie 21 est l’exemple d’aberration de nombre développé dans la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La méiose atypique",
          "stepTheme": "La méiose atypique",
          "stepBadge": "La méiose atypique",
          "paragraphText": "Lorsque la méiose se déroule de façon anormale, elle est dite atypique.\nElle conduit à la formation de gamètes anormaux à cause des aberrations chromosomiques.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p06_q1",
            "type": "mcq",
            "prompt": "Une méiose atypique conduit à :",
            "options": [
              "Des gamètes rigoureusement normaux",
              "Des gamètes anormaux, à cause d’aberrations chromosomiques",
              "Quatre spermatozoïdes supplémentaires",
              "Une ovogenèse continue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit la méiose atypique par la formation de gamètes anormaux."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La non-disjonction, origine des anomalies de nombre",
          "stepTheme": "La non-disjonction, origine des anomalies de nombre",
          "stepBadge": "La non-disjonction, origine des anomalies de nombre",
          "paragraphText": "Les anomalies de nombre sont dues soit à la non-disjonction des chromosomes homologues lors de la division réductionnelle, soit à la non-disjonction des chromatides sœurs lors de la division équationnelle.\nElles touchent autosomes et hétérochromosomes.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p06_q2",
            "type": "mcq",
            "prompt": "Les aberrations de nombre des chromosomes sont dues à :",
            "options": [
              "Un crossing-over normal",
              "La non-disjonction des homologues ou des chromatides sœurs pendant la méiose",
              "La fécondation",
              "L’accumulation de réserves"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon attribue les anomalies de nombre à la non-disjonction pendant la méiose."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La trisomie 21 ou syndrome de Down",
          "stepTheme": "La trisomie 21 ou syndrome de Down",
          "stepBadge": "La trisomie 21 ou syndrome de Down",
          "paragraphText": "Exemple de la leçon : la trisomie 21 ou syndrome de Down, ou mongolisme.\nLe caryotype de l’individu affecté montre trois exemplaires du chromosome 21 au lieu de deux.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p06_q3",
            "type": "mcq",
            "prompt": "La trisomie 21 se reconnaît à :",
            "options": [
              "Un chromosome 21 en moins",
              "Trois exemplaires du chromosome 21 au lieu de deux",
              "Un chromosome 5 raccourci",
              "La présence de trois chromosomes X"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le caryotype montre trois exemplaires du chromosome 21, d’après la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Klinefelter, triplo-X et Turner",
          "stepTheme": "Klinefelter, triplo-X et Turner",
          "stepBadge": "Klinefelter, triplo-X et Turner",
          "paragraphText": "Le tableau de la leçon cite le syndrome de Klinefelter chez des mâles stériles aux testicules réduits et sans spermatogonies, le triplo-X chez des femelles fertiles et le syndrome de Turner.\nCe sont des aberrations portant sur les chromosomes sexuels.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p06_q4",
            "type": "mcq",
            "prompt": "Le syndrome de Klinefelter, dans le tableau de la leçon, concerne :",
            "options": [
              "Des femelles fertiles",
              "Des mâles stériles, aux testicules réduits et sans spermatogonies",
              "Des enfants atteints du cri du chat",
              "Uniquement les autosomes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau de la leçon décrit des mâles stériles pour le syndrome de Klinefelter."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Délétion et translocation",
          "stepTheme": "Délétion et translocation",
          "stepBadge": "Délétion et translocation",
          "paragraphText": "• Délétion : perte d’un fragment plus ou moins important d’un chromosome ; celle du bras court du chromosome 5 entraîne la maladie du cri du chat.\n• Translocation : transfert d’un fragment de chromosome, ou d’un chromosome entier, sur le même chromosome ou sur un autre chromosome.",
          "exercise": {
            "id": "premiere_d_svt_l03_gametogenese_p06_q5",
            "type": "mcq",
            "prompt": "La maladie du cri du chat est due à :",
            "options": [
              "Une trisomie 18",
              "La délétion du bras court du chromosome 5",
              "Un triplo-X",
              "Un crossing-over normal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon cite la délétion du bras court du chromosome 5 comme cause de la maladie du cri du chat."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l03_gametogenese_p06_q1",
          "type": "mcq",
          "prompt": "Une méiose atypique conduit à :",
          "options": [
            "Des gamètes rigoureusement normaux",
            "Des gamètes anormaux, à cause d’aberrations chromosomiques",
            "Quatre spermatozoïdes supplémentaires",
            "Une ovogenèse continue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit la méiose atypique par la formation de gamètes anormaux."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p06_q2",
          "type": "mcq",
          "prompt": "Les aberrations de nombre des chromosomes sont dues à :",
          "options": [
            "Un crossing-over normal",
            "La non-disjonction des homologues ou des chromatides sœurs pendant la méiose",
            "La fécondation",
            "L’accumulation de réserves"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon attribue les anomalies de nombre à la non-disjonction pendant la méiose."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p06_q3",
          "type": "mcq",
          "prompt": "La trisomie 21 se reconnaît à :",
          "options": [
            "Un chromosome 21 en moins",
            "Trois exemplaires du chromosome 21 au lieu de deux",
            "Un chromosome 5 raccourci",
            "La présence de trois chromosomes X"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le caryotype montre trois exemplaires du chromosome 21, d’après la leçon."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p06_q4",
          "type": "mcq",
          "prompt": "Le syndrome de Klinefelter, dans le tableau de la leçon, concerne :",
          "options": [
            "Des femelles fertiles",
            "Des mâles stériles, aux testicules réduits et sans spermatogonies",
            "Des enfants atteints du cri du chat",
            "Uniquement les autosomes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau de la leçon décrit des mâles stériles pour le syndrome de Klinefelter."
        },
        {
          "id": "premiere_d_svt_l03_gametogenese_p06_q5",
          "type": "mcq",
          "prompt": "La maladie du cri du chat est due à :",
          "options": [
            "Une trisomie 18",
            "La délétion du bras court du chromosome 5",
            "Un triplo-X",
            "Un crossing-over normal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon cite la délétion du bras court du chromosome 5 comme cause de la maladie du cri du chat."
        }
      ]
    }
  ]
};
