import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 9 : Écosystème naturel et agrosystème » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2419
export const SVT_1ERE_C_L09_ECOSYSTEME: CurriculumChapter = {
  "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 9,
  "title": "Leçon 9 : Écosystème naturel et agrosystème",
  "summary": "On distingue l’écosystème naturel et l’agrosystème par leurs caractéristiques, puis on compare leur biomasse, leur productivité et leurs rendements énergétiques.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2419",
  "points": [
    {
      "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01",
      "order": 1,
      "title": "Les caractéristiques : forêt naturelle contre champ de maïs",
      "summary": "La forêt, non exploitée, réunit biodiversité, plusieurs strates, tous les niveaux trophiques et un cycle de la matière fermé ; le champ de maïs, agrosystème exploité en monoculture, a une seule strate, des producteurs prédominants et un cycle ouvert.",
      "conceptExplanation": "Dans la forêt, on note une importante biodiversité, la présence de tous les niveaux trophiques (producteurs, consommateurs de premier, deuxième, troisième ordre et décomposeurs) et de plusieurs strates. Le transfert de matière et d’énergie des producteurs vers les consommateurs se fait aisément et naturellement, de sorte que le cycle de la matière reste toujours fermé. La forêt, milieu non exploité présentant ces caractéristiques, constitue un écosystème naturel.\nContrairement à la forêt, le champ de maïs, obtenu après une exploitation du terrain, est une monoculture avec une seule strate, montrant des producteurs prédominants et de rares consommateurs, éliminés. Il existe aussi un transfert d’énergie, mais le cycle de la matière demeure ouvert, du fait que la matière est en partie exportée, avec des apports d’engrais et d’eau. Le champ de maïs, milieu exploité, constitue un agrosystème ou un écosystème agro-industriel.",
      "keyRule": "Naturel égale fermé et diversifié ; agrosystème égale exploité, monoculture et cycle ouvert.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les éléments de la forêt et de la palmeraie",
        "statement": "Une liste mélange arbres, arbustes, arbrisseaux, herbes, champignons, animaux présents, beaucoup de palmiers, petit nombre d’espèces végétales et animaux rares. Range-la entre forêt et palmeraie.",
        "methodSteps": [
          "La forêt réunit les strates variées, les champignons et la présence d’animaux.",
          "La palmeraie, agrosystème, réunit beaucoup de palmiers, peu d’espèces végétales et des animaux rares.",
          "Le nombre d’espèces distingue les deux milieux."
        ],
        "conclusion": "C’est le corrigé de l’activité d’application de la partie I."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’écosystème naturel",
          "stepTheme": "L’écosystème naturel",
          "stepBadge": "L’écosystème naturel",
          "paragraphText": "• Écosystème naturel : milieu non exploité présentant biodiversité, plusieurs strates et tous les niveaux trophiques, comme la forêt.\nSon cycle de la matière est fermé.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q1",
            "type": "mcq",
            "prompt": "La forêt naturelle est caractérisée par :",
            "options": [
              "Une biodiversité, plusieurs strates et tous les niveaux trophiques",
              "Une monoculture et une seule strate",
              "Des consommateurs éliminés",
              "Un cycle de la matière ouvert"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document 1 et son analyse donnent ces caractéristiques à la forêt."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’agrosystème",
          "stepTheme": "L’agrosystème",
          "stepBadge": "L’agrosystème",
          "paragraphText": "• Agrosystème ou écosystème agro-industriel : milieu exploité par l’homme, comme le champ de maïs en monoculture.\nIl présente une seule strate et des producteurs prédominants.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q2",
            "type": "mcq",
            "prompt": "Le champ de maïs est :",
            "options": [
              "Une forêt galerie",
              "Un milieu sans producteurs",
              "Un agrosystème, milieu exploité en monoculture",
              "Un écosystème naturel non exploité"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’analyse qualifie le champ de maïs d’agrosystème ou écosystème agro-industriel."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cycle de la matière fermé ou ouvert",
          "stepTheme": "Le cycle de la matière fermé ou ouvert",
          "stepBadge": "Le cycle de la matière fermé ou ouvert",
          "paragraphText": "Dans la forêt, le cycle de la matière reste toujours fermé.\nDans le champ de maïs, il demeure ouvert car la matière est en partie exportée, avec des apports d’engrais et d’eau.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q3",
            "type": "mcq",
            "prompt": "Le cycle de la matière est fermé dans :",
            "options": [
              "Les deux également selon le résumé",
              "La forêt naturelle",
              "Le champ de maïs",
              "Aucun des deux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’analyse oppose cycle fermé de la forêt et cycle ouvert du champ."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les niveaux trophiques de la forêt",
          "stepTheme": "Les niveaux trophiques de la forêt",
          "stepBadge": "Les niveaux trophiques de la forêt",
          "paragraphText": "La forêt présente tous les niveaux trophiques : producteurs, consommateurs de plusieurs ordres et décomposeurs.\nDans le champ, les consommateurs sont rares car éliminés.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q4",
            "type": "mcq",
            "prompt": "Dans le champ de maïs, les consommateurs sont :",
            "options": [
              "Très nombreux à tous les niveaux",
              "Uniquement des décomposeurs",
              "Plus nombreux que les producteurs",
              "Rares, car éliminés"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le document 1 indique des consommateurs rares, éliminés, dans le champ."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le transfert d’énergie existe dans les deux",
          "stepTheme": "Le transfert d’énergie existe dans les deux",
          "stepBadge": "Le transfert d’énergie existe dans les deux",
          "paragraphText": "Piège des associations corrigées : le transfert d’énergie n’est pas propre à la forêt.\nIl est associé aussi bien à l’écosystème naturel qu’à l’agrosystème dans l’exercice d’application.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q5",
            "type": "mcq",
            "prompt": "Le transfert d’énergie est une caractéristique :",
            "options": [
              "Du champ seulement",
              "D’aucun écosystème",
              "Des deux écosystèmes",
              "De la forêt seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé de l’exercice 1 associe le transfert d’énergie aux deux types d’écosystèmes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La palmeraie comparée à la forêt",
          "stepTheme": "La palmeraie comparée à la forêt",
          "stepBadge": "La palmeraie comparée à la forêt",
          "paragraphText": "Exemple corrigé : la palmeraie présente beaucoup de palmiers, un petit nombre d’espèces végétales et des animaux rares.\nLa forêt présente arbres, arbustes, arbrisseaux, herbes, champignons et des animaux.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q6",
            "type": "mcq",
            "prompt": "La palmeraie se distingue par :",
            "options": [
              "Beaucoup de palmiers et un petit nombre d’espèces végétales",
              "L’absence de producteurs",
              "Plusieurs strates et beaucoup d’animaux",
              "Un cycle fermé sans exploitation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le tableau corrigé de l’activité d’application."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q1",
          "type": "mcq",
          "prompt": "La forêt naturelle est caractérisée par :",
          "options": [
            "Une biodiversité, plusieurs strates et tous les niveaux trophiques",
            "Une monoculture et une seule strate",
            "Des consommateurs éliminés",
            "Un cycle de la matière ouvert"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document 1 et son analyse donnent ces caractéristiques à la forêt."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q2",
          "type": "mcq",
          "prompt": "Le champ de maïs est :",
          "options": [
            "Une forêt galerie",
            "Un milieu sans producteurs",
            "Un agrosystème, milieu exploité en monoculture",
            "Un écosystème naturel non exploité"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’analyse qualifie le champ de maïs d’agrosystème ou écosystème agro-industriel."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q3",
          "type": "mcq",
          "prompt": "Le cycle de la matière est fermé dans :",
          "options": [
            "Les deux également selon le résumé",
            "La forêt naturelle",
            "Le champ de maïs",
            "Aucun des deux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’analyse oppose cycle fermé de la forêt et cycle ouvert du champ."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q4",
          "type": "mcq",
          "prompt": "Dans le champ de maïs, les consommateurs sont :",
          "options": [
            "Très nombreux à tous les niveaux",
            "Uniquement des décomposeurs",
            "Plus nombreux que les producteurs",
            "Rares, car éliminés"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le document 1 indique des consommateurs rares, éliminés, dans le champ."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q5",
          "type": "mcq",
          "prompt": "Le transfert d’énergie est une caractéristique :",
          "options": [
            "Du champ seulement",
            "D’aucun écosystème",
            "Des deux écosystèmes",
            "De la forêt seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé de l’exercice 1 associe le transfert d’énergie aux deux types d’écosystèmes."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p01_q6",
          "type": "mcq",
          "prompt": "La palmeraie se distingue par :",
          "options": [
            "Beaucoup de palmiers et un petit nombre d’espèces végétales",
            "L’absence de producteurs",
            "Plusieurs strates et beaucoup d’animaux",
            "Un cycle fermé sans exploitation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le tableau corrigé de l’activité d’application."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02",
      "order": 2,
      "title": "Biomasses et énergies des niveaux trophiques",
      "summary": "Sur la même superficie, l’écosystème naturel totalise une biomasse et une énergie supérieures à celles de l’agrosystème, et dans les deux cas l’énergie diminue d’un niveau trophique au niveau supérieur.",
      "conceptExplanation": "Le tableau des biomasses donne, pour l’écosystème naturel : producteurs avec la biomasse la plus élevée, puis consommateurs de premier ordre, consommateurs de deuxième ordre et décomposeurs, pour un total supérieur à celui de l’agrosystème ; pour l’agrosystème, les producteurs dominent aussi, avec des consommateurs de premier ordre proches et très peu de consommateurs de deuxième ordre, et pas de décomposeurs chiffrés.\nLa biomasse et l’énergie de la biomasse de la forêt sont respectivement supérieures à celles de l’autre écosystème comparé.\nDans les deux écosystèmes, l’énergie diminue d’un niveau trophique inférieur à un niveau trophique supérieur, mais la diminution d’énergie est plus importante dans l’écosystème naturel, où la chaîne est longue, que dans l’agrosystème à chaîne courte.",
      "keyRule": "Plus on monte dans la chaîne alimentaire, moins il reste d’énergie.",
      "formulas": [],
      "workedExample": {
        "title": "Construire la pyramide des énergies",
        "statement": "À partir du tableau des biomasses et des équivalences énergétiques données, construis la pyramide des énergies de chaque écosystème.",
        "methodSteps": [
          "On convertit chaque biomasse en énergie avec les équivalences du protocole.",
          "On classe les niveaux : producteurs, consommateurs de premier ordre, consommateurs de deuxième ordre, décomposeurs.",
          "On représente des barres de longueur décroissante vers le sommet."
        ],
        "conclusion": "La pyramide traduit la diminution de l’énergie le long de la chaîne."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La biomasse mesurée",
          "stepTheme": "La biomasse mesurée",
          "stepBadge": "La biomasse mesurée",
          "paragraphText": "• Biomasse : masse totale de matière organique sèche des êtres vivants présents, mesurée ici par unité de surface et par an.\nLe protocole la mesure sur la même superficie pour les deux écosystèmes.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q1",
            "type": "mcq",
            "prompt": "Le protocole mesure, sur la même superficie :",
            "options": [
              "Uniquement le nombre d’espèces",
              "La température du sol",
              "La hauteur des arbres",
              "La masse totale de matière organique sèche par an des êtres vivants"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le but et le protocole de la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le total supérieur de l’écosystème naturel",
          "stepTheme": "Le total supérieur de l’écosystème naturel",
          "stepBadge": "Le total supérieur de l’écosystème naturel",
          "paragraphText": "Le tableau corrigé donne un total de biomasse supérieur pour l’écosystème naturel par rapport à l’agrosystème.\nSon énergie de biomasse est également supérieure.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q2",
            "type": "mcq",
            "prompt": "La biomasse totale de l’écosystème naturel est, par rapport à celle de l’agrosystème :",
            "options": [
              "Strictement égale",
              "Supérieure",
              "Nulle",
              "Inférieure"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’analyse conclut que biomasse et énergie de la forêt sont supérieures."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La diminution de l’énergie entre niveaux",
          "stepTheme": "La diminution de l’énergie entre niveaux",
          "stepBadge": "La diminution de l’énergie entre niveaux",
          "paragraphText": "Dans les deux écosystèmes, l’énergie diminue d’un niveau trophique inférieur à un niveau trophique supérieur.\nLa diminution est plus importante dans l’écosystème naturel, à chaîne longue.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q3",
            "type": "mcq",
            "prompt": "L’énergie, d’un niveau trophique au niveau supérieur :",
            "options": [
              "Diminue",
              "Disparaît dès les producteurs",
              "Augmente",
              "Reste toujours égale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’analyse du tableau des biomasses et énergies."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Chaîne longue et pertes",
          "stepTheme": "Chaîne longue et pertes",
          "stepBadge": "Chaîne longue et pertes",
          "paragraphText": "Piège : une chaîne longue ne conserve pas mieux l’énergie au sommet.\nAu contraire, la diminution d’énergie est plus importante dans l’écosystème naturel où la chaîne est longue.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q4",
            "type": "mcq",
            "prompt": "La diminution d’énergie est plus importante dans :",
            "options": [
              "L’agrosystème à chaîne courte",
              "Aucun des deux",
              "L’écosystème naturel à chaîne longue",
              "Le niveau des producteurs seuls"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’analyse oppose chaîne longue de l’écosystème naturel et chaîne courte de l’agrosystème."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les producteurs dominent la biomasse",
          "stepTheme": "Les producteurs dominent la biomasse",
          "stepBadge": "Les producteurs dominent la biomasse",
          "paragraphText": "Exemple du tableau : dans les deux écosystèmes, les producteurs ont la biomasse la plus élevée des niveaux trophiques.\nLes consommateurs de deuxième ordre ont la plus faible.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q5",
            "type": "mcq",
            "prompt": "Le niveau trophique à la biomasse la plus élevée est celui des :",
            "options": [
              "Décomposeurs",
              "Producteurs",
              "Consommateurs de premier ordre",
              "Consommateurs de deuxième ordre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les valeurs du tableau placent les producteurs largement en tête dans les deux écosystèmes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les chaînes courtes plus rentables",
          "stepTheme": "Les chaînes courtes plus rentables",
          "stepBadge": "Les chaînes courtes plus rentables",
          "paragraphText": "Exemple de la situation de consolidation : du niveau des producteurs au niveau des consommateurs de deuxième ordre, les pertes énergétiques augmentent.\nLa conclusion dit que, dans un écosystème, les chaînes alimentaires les plus courtes sont plus rentables que les plus longues.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q6",
            "type": "mcq",
            "prompt": "Selon la conclusion de la situation, les chaînes alimentaires les plus rentables sont :",
            "options": [
              "Celles sans décomposeurs",
              "Les plus longues",
              "Celles sans producteurs",
              "Les plus courtes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la conclusion du corrigé de la situation d’évaluation 1 de consolidation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q1",
          "type": "mcq",
          "prompt": "Le protocole mesure, sur la même superficie :",
          "options": [
            "Uniquement le nombre d’espèces",
            "La température du sol",
            "La hauteur des arbres",
            "La masse totale de matière organique sèche par an des êtres vivants"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le but et le protocole de la partie II."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q2",
          "type": "mcq",
          "prompt": "La biomasse totale de l’écosystème naturel est, par rapport à celle de l’agrosystème :",
          "options": [
            "Strictement égale",
            "Supérieure",
            "Nulle",
            "Inférieure"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’analyse conclut que biomasse et énergie de la forêt sont supérieures."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q3",
          "type": "mcq",
          "prompt": "L’énergie, d’un niveau trophique au niveau supérieur :",
          "options": [
            "Diminue",
            "Disparaît dès les producteurs",
            "Augmente",
            "Reste toujours égale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’analyse du tableau des biomasses et énergies."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q4",
          "type": "mcq",
          "prompt": "La diminution d’énergie est plus importante dans :",
          "options": [
            "L’agrosystème à chaîne courte",
            "Aucun des deux",
            "L’écosystème naturel à chaîne longue",
            "Le niveau des producteurs seuls"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’analyse oppose chaîne longue de l’écosystème naturel et chaîne courte de l’agrosystème."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q5",
          "type": "mcq",
          "prompt": "Le niveau trophique à la biomasse la plus élevée est celui des :",
          "options": [
            "Décomposeurs",
            "Producteurs",
            "Consommateurs de premier ordre",
            "Consommateurs de deuxième ordre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les valeurs du tableau placent les producteurs largement en tête dans les deux écosystèmes."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p02_q6",
          "type": "mcq",
          "prompt": "Selon la conclusion de la situation, les chaînes alimentaires les plus rentables sont :",
          "options": [
            "Celles sans décomposeurs",
            "Les plus longues",
            "Celles sans producteurs",
            "Les plus courtes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la conclusion du corrigé de la situation d’évaluation 1 de consolidation."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03",
      "order": 3,
      "title": "Productivités primaires brute et nette",
      "summary": "La productivité primaire brute de l’écosystème naturel est supérieure à celle de l’agrosystème, mais sa productivité primaire nette est inférieure, car une plus grande part est utilisée pour la respiration des végétaux.",
      "conceptExplanation": "La production primaire est la quantité de matière organique produite par les végétaux ; lorsque cette production est ramenée à l’unité de temps et à l’unité de surface, on parle de productivité. Ainsi, la productivité est la vitesse de production de la biomasse végétale.\nLa productivité primaire brute est la quantité de matière produite par les végétaux chlorophylliens à l’issue de la photosynthèse. La production primaire nette est la quantité de matière mise à la disposition des consommateurs de premier ordre, les herbivores, après la part utilisée par les végétaux pour leur respiration.\nSur une même superficie, la productivité primaire brute de l’écosystème naturel est supérieure à celle de l’agrosystème, tandis que la productivité primaire nette de l’écosystème naturel est inférieure à celle de l’agrosystème, d’après le tableau des productivités du résumé.",
      "keyRule": "Brute égale production totale des végétaux ; nette égale ce qui reste pour les herbivores.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer la productivité d’une parcelle de forêt",
        "statement": "Sur une parcelle, la biomasse des parties pérennantes augmente entre deux années. Comment obtient-on sa productivité ?",
        "methodSteps": [
          "On fait la somme des augmentations de biomasse des arbres, arbustes, herbes, litières et racines.",
          "On rapporte le résultat à la surface et à l’année.",
          "Le corrigé obtient ainsi la productivité de la parcelle pour un an."
        ],
        "conclusion": "La productivité est une augmentation de biomasse par surface et par temps."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la productivité",
          "stepTheme": "Définition de la productivité",
          "stepBadge": "Définition de la productivité",
          "paragraphText": "• Productivité : vitesse de production de la biomasse végétale, production ramenée à l’unité de temps et à l’unité de surface.\nLa production primaire est la quantité de matière organique produite par les végétaux.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q1",
            "type": "mcq",
            "prompt": "La productivité est :",
            "options": [
              "La biomasse totale sans référence au temps",
              "Le nombre de consommateurs",
              "La vitesse de production de la biomasse végétale",
              "L’énergie solaire reçue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’interprétation de la partie III donne cette définition."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La productivité primaire brute",
          "stepTheme": "La productivité primaire brute",
          "stepBadge": "La productivité primaire brute",
          "paragraphText": "• Productivité primaire brute : quantité de matière produite par les végétaux chlorophylliens à l’issue de la photosynthèse.\nC’est la production avant déduction de la respiration.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q2",
            "type": "mcq",
            "prompt": "La productivité primaire brute est la quantité de matière produite :",
            "options": [
              "Par les végétaux chlorophylliens à l’issue de la photosynthèse",
              "Par les décomposeurs",
              "Exportée par la récolte",
              "Par les herbivores"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition de l’interprétation de la partie III."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La production primaire nette",
          "stepTheme": "La production primaire nette",
          "stepBadge": "La production primaire nette",
          "paragraphText": "• Production primaire nette : quantité de matière mise à la disposition des consommateurs de premier ordre, les herbivores.\nElle correspond à ce qui reste après la respiration des végétaux.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q3",
            "type": "mcq",
            "prompt": "La production primaire nette est la matière mise à la disposition des :",
            "options": [
              "Machines agricoles",
              "Producteurs eux-mêmes uniquement",
              "Décomposeurs seulement",
              "Consommateurs de premier ordre, les herbivores"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé la définit ainsi."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Brute supérieure dans l’écosystème naturel",
          "stepTheme": "Brute supérieure dans l’écosystème naturel",
          "stepBadge": "Brute supérieure dans l’écosystème naturel",
          "paragraphText": "Sur une même superficie, la productivité primaire brute de l’écosystème naturel est supérieure à celle de l’agrosystème.\nC’est le premier constat de l’analyse du tableau des productivités.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q4",
            "type": "mcq",
            "prompt": "La productivité primaire brute la plus élevée est celle de :",
            "options": [
              "L’agrosystème",
              "L’écosystème naturel",
              "Aucun des deux, elles sont nulles",
              "La même dans les deux cas selon l’analyse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’analyse du tableau donne la brute supérieure pour l’écosystème naturel."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Nette supérieure dans l’agrosystème",
          "stepTheme": "Nette supérieure dans l’agrosystème",
          "stepBadge": "Nette supérieure dans l’agrosystème",
          "paragraphText": "La productivité primaire nette de l’écosystème naturel est inférieure à celle de l’agrosystème.\nC’est le constat inverse de celui sur la brute.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q5",
            "type": "mcq",
            "prompt": "La productivité primaire nette la plus élevée est celle de :",
            "options": [
              "L’agrosystème",
              "Ni l’un ni l’autre",
              "Des décomposeurs seuls",
              "L’écosystème naturel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’analyse du tableau donne la nette inférieure pour l’écosystème naturel, donc supérieure pour l’agrosystème."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La part de la respiration",
          "stepTheme": "La part de la respiration",
          "stepBadge": "La part de la respiration",
          "paragraphText": "Piège : confondre la matière produite et la matière disponible.\nDans le protocole, les végétaux utilisent une part de leur production pour leur respiration ; le reste est mis à la disposition des consommateurs.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q6",
            "type": "mcq",
            "prompt": "La matière mise à disposition des consommateurs correspond à la production :",
            "options": [
              "Exportée uniquement",
              "Brute, sans aucune déduction",
              "Restante après la part utilisée pour la respiration des végétaux",
              "Totale augmentée de la respiration"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les notes du protocole opposent production totale, part de respiration et reste disponible."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q1",
          "type": "mcq",
          "prompt": "La productivité est :",
          "options": [
            "La biomasse totale sans référence au temps",
            "Le nombre de consommateurs",
            "La vitesse de production de la biomasse végétale",
            "L’énergie solaire reçue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’interprétation de la partie III donne cette définition."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q2",
          "type": "mcq",
          "prompt": "La productivité primaire brute est la quantité de matière produite :",
          "options": [
            "Par les végétaux chlorophylliens à l’issue de la photosynthèse",
            "Par les décomposeurs",
            "Exportée par la récolte",
            "Par les herbivores"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition de l’interprétation de la partie III."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q3",
          "type": "mcq",
          "prompt": "La production primaire nette est la matière mise à la disposition des :",
          "options": [
            "Machines agricoles",
            "Producteurs eux-mêmes uniquement",
            "Décomposeurs seulement",
            "Consommateurs de premier ordre, les herbivores"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé la définit ainsi."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q4",
          "type": "mcq",
          "prompt": "La productivité primaire brute la plus élevée est celle de :",
          "options": [
            "L’agrosystème",
            "L’écosystème naturel",
            "Aucun des deux, elles sont nulles",
            "La même dans les deux cas selon l’analyse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’analyse du tableau donne la brute supérieure pour l’écosystème naturel."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q5",
          "type": "mcq",
          "prompt": "La productivité primaire nette la plus élevée est celle de :",
          "options": [
            "L’agrosystème",
            "Ni l’un ni l’autre",
            "Des décomposeurs seuls",
            "L’écosystème naturel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’analyse du tableau donne la nette inférieure pour l’écosystème naturel, donc supérieure pour l’agrosystème."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p03_q6",
          "type": "mcq",
          "prompt": "La matière mise à disposition des consommateurs correspond à la production :",
          "options": [
            "Exportée uniquement",
            "Brute, sans aucune déduction",
            "Restante après la part utilisée pour la respiration des végétaux",
            "Totale augmentée de la respiration"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les notes du protocole opposent production totale, part de respiration et reste disponible."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04",
      "order": 4,
      "title": "Les rendements énergétiques et les apports extérieurs de l’agrosystème",
      "summary": "Le rendement théorique du champ de maïs est supérieur à celui de la forêt, mais son rendement réel est inférieur, à cause des apports d’engrais, d’eau et de pesticides ; l’agrosystème reste un écosystème productif grâce à ces apports extérieurs.",
      "conceptExplanation": "Le rendement théorique est le rapport, en pourcentage, entre l’énergie produite et l’énergie solaire reçue ; le rendement réel est le rapport, en pourcentage, entre l’énergie produite et l’énergie ingérée, selon les formules données dans le résumé.\nD’après le tableau des rendements, le rendement théorique du champ de maïs est supérieur à celui de la forêt, par contre son rendement réel est inférieur à celui de la forêt. Le rendement réel du champ de maïs est inférieur à cause des apports d’engrais, de l’eau et de l’utilisation de pesticides au niveau du champ de maïs.\nDans le tableau des apports extérieurs, l’agrosystème reçoit machinisme, carburant, semences, engrais, irrigation, insecticides, herbicides et séchage, alors que l’écosystème naturel ne reçoit aucun apport extérieur ; la biomasse produite de l’agrosystème est plus importante, mais sa récolte est exportée, tandis que la récolte de l’écosystème naturel est nulle car sa production est utilisée en interne, à travers le cycle de la matière fermé. L’intérêt de l’agrosystème est donc d’être un écosystème productif.",
      "keyRule": "Rendement théorique rapporté au soleil ; rendement réel rapporté à l’énergie ingérée.",
      "formulas": [
        {
          "name": "Rendement théorique",
          "formula": "R_{th} = \\frac{E_{produite}}{E_{solaire}} \\times 100",
          "note": "Formule donnée dans le résumé : énergie produite sur énergie solaire, en pourcentage."
        },
        {
          "name": "Rendement réel",
          "formula": "R_{r} = \\frac{E_{produite}}{E_{ingeree}} \\times 100",
          "note": "Formule donnée dans le résumé : énergie produite sur énergie ingérée, en pourcentage."
        }
      ],
      "workedExample": {
        "title": "Exploiter le tableau des apports extérieurs",
        "statement": "Un tableau compare les apports extérieurs et la productivité d’un agrosystème et d’un écosystème naturel. Analyse-le et explique la récolte nulle de l’écosystème naturel.",
        "methodSteps": [
          "L’agrosystème reçoit de nombreux apports extérieurs, l’écosystème naturel aucun.",
          "La biomasse produite de l’agrosystème est plus importante que celle de l’écosystème naturel.",
          "La récolte exportée de l’écosystème naturel est nulle car sa production est utilisée en interne, cycle fermé."
        ],
        "conclusion": "L’intérêt déduit de l’agrosystème est d’être un écosystème productif."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le rendement théorique",
          "stepTheme": "Le rendement théorique",
          "stepBadge": "Le rendement théorique",
          "paragraphText": "• Rendement théorique : rapport en pourcentage entre l’énergie produite et l’énergie solaire reçue.\nC’est la première formule donnée dans la partie III.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q1",
            "type": "mcq",
            "prompt": "Le rendement théorique compare l’énergie produite à :",
            "options": [
              "L’énergie ingérée",
              "L’énergie solaire reçue",
              "La biomasse des décomposeurs",
              "L’énergie des herbivores"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La formule du résumé place l’énergie solaire au dénominateur du rendement théorique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le rendement réel",
          "stepTheme": "Le rendement réel",
          "stepBadge": "Le rendement réel",
          "paragraphText": "• Rendement réel : rapport en pourcentage entre l’énergie produite et l’énergie ingérée.\nC’est la deuxième formule donnée dans la partie III.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q2",
            "type": "mcq",
            "prompt": "Le rendement réel compare l’énergie produite à :",
            "options": [
              "La respiration des végétaux",
              "La récolte exportée",
              "L’énergie solaire",
              "L’énergie ingérée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La formule du résumé place l’énergie ingérée au dénominateur du rendement réel."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les deux rendements comparés",
          "stepTheme": "Les deux rendements comparés",
          "stepBadge": "Les deux rendements comparés",
          "paragraphText": "Le rendement théorique du champ de maïs est supérieur à celui de la forêt.\nPar contre, son rendement réel est inférieur à celui de la forêt.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q3",
            "type": "mcq",
            "prompt": "Pour le champ de maïs par rapport à la forêt, on a :",
            "options": [
              "Aucune différence",
              "Théorique et réel tous deux supérieurs",
              "Théorique supérieur mais réel inférieur",
              "Théorique et réel tous deux inférieurs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’analyse du tableau des rendements énergétiques."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La cause du rendement réel plus faible",
          "stepTheme": "La cause du rendement réel plus faible",
          "stepBadge": "La cause du rendement réel plus faible",
          "paragraphText": "Le rendement réel du champ de maïs est inférieur à celui de la forêt à cause des apports d’engrais, de l’eau et de l’utilisation de pesticides.\nCes apports extérieurs coûtent de l’énergie au système.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q4",
            "type": "mcq",
            "prompt": "La faiblesse du rendement réel du champ est attribuée aux :",
            "options": [
              "Apports d’engrais, d’eau et à l’utilisation de pesticides",
              "Absences totales d’apports",
              "Nombreux décomposeurs",
              "Cycles fermés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’interprétation exacte de la partie III."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La récolte nulle de l’écosystème naturel",
          "stepTheme": "La récolte nulle de l’écosystème naturel",
          "stepBadge": "La récolte nulle de l’écosystème naturel",
          "paragraphText": "Piège : une récolte exportée nulle ne signifie pas une production nulle.\nLa production primaire de l’écosystème naturel est utilisée en interne par les êtres vivants, à travers le cycle de la matière fermé.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q5",
            "type": "mcq",
            "prompt": "La récolte exportée nulle de l’écosystème naturel s’explique car :",
            "options": [
              "Tout est exporté en secret",
              "Il reçoit des engrais",
              "Il ne produit rien",
              "Sa production est utilisée en interne, cycle de la matière fermé"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est l’explication du corrigé de la situation d’évaluation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’intérêt de l’agrosystème",
          "stepTheme": "L’intérêt de l’agrosystème",
          "stepBadge": "L’intérêt de l’agrosystème",
          "paragraphText": "Exemple de déduction : malgré ses apports coûteux, l’agrosystème produit une biomasse importante et exportable en récolte.\nLe corrigé conclut que c’est un écosystème productif.",
          "exercise": {
            "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q6",
            "type": "mcq",
            "prompt": "L’intérêt de l’agrosystème déduit du document est que c’est un écosystème :",
            "options": [
              "Sans aucun apport",
              "Productif",
              "Improductif",
              "Naturel sans intervention"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La déduction du corrigé de la situation d’évaluation le qualifie de productif."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q1",
          "type": "mcq",
          "prompt": "Le rendement théorique compare l’énergie produite à :",
          "options": [
            "L’énergie ingérée",
            "L’énergie solaire reçue",
            "La biomasse des décomposeurs",
            "L’énergie des herbivores"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La formule du résumé place l’énergie solaire au dénominateur du rendement théorique."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q2",
          "type": "mcq",
          "prompt": "Le rendement réel compare l’énergie produite à :",
          "options": [
            "La respiration des végétaux",
            "La récolte exportée",
            "L’énergie solaire",
            "L’énergie ingérée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La formule du résumé place l’énergie ingérée au dénominateur du rendement réel."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q3",
          "type": "mcq",
          "prompt": "Pour le champ de maïs par rapport à la forêt, on a :",
          "options": [
            "Aucune différence",
            "Théorique et réel tous deux supérieurs",
            "Théorique supérieur mais réel inférieur",
            "Théorique et réel tous deux inférieurs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’analyse du tableau des rendements énergétiques."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q4",
          "type": "mcq",
          "prompt": "La faiblesse du rendement réel du champ est attribuée aux :",
          "options": [
            "Apports d’engrais, d’eau et à l’utilisation de pesticides",
            "Absences totales d’apports",
            "Nombreux décomposeurs",
            "Cycles fermés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’interprétation exacte de la partie III."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q5",
          "type": "mcq",
          "prompt": "La récolte exportée nulle de l’écosystème naturel s’explique car :",
          "options": [
            "Tout est exporté en secret",
            "Il reçoit des engrais",
            "Il ne produit rien",
            "Sa production est utilisée en interne, cycle de la matière fermé"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est l’explication du corrigé de la situation d’évaluation."
        },
        {
          "id": "premiere_c_svt_l09_ecosysteme_naturel_agrosysteme_p04_q6",
          "type": "mcq",
          "prompt": "L’intérêt de l’agrosystème déduit du document est que c’est un écosystème :",
          "options": [
            "Sans aucun apport",
            "Productif",
            "Improductif",
            "Naturel sans intervention"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La déduction du corrigé de la situation d’évaluation le qualifie de productif."
        }
      ]
    }
  ]
};
