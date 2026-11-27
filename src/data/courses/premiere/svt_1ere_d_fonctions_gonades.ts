import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 2 : Les fonctions des gonades » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2786
export const SVT_1ERE_D_L02_FONCTIONS_GONADES: CurriculumChapter = {
  "id": "premiere_d_svt_l02_fonctions_gonades",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 2,
  "title": "Leçon 2 : Les fonctions des gonades",
  "summary": "À partir d’expériences de castration, de ligature et d’injections chez le rat et la rate, on dégage les rôles exocrine et endocrine des testicules et des ovaires, puis on décrit leurs structures.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2786",
  "points": [
    {
      "id": "premiere_d_svt_l02_fonctions_gonades_p01",
      "order": 1,
      "title": "Les testicules : production de gamètes et rôle endocrine",
      "summary": "Lire les expériences sur les rats pour dégager le rôle exocrine et le rôle endocrine des testicules.",
      "conceptExplanation": "Les expériences portent sur cinq lots de rats pubères et impubères : un lot témoin, des rats pubères castrés, des rats castrés recevant des extraits testiculaires, et des rats dont les spermiductes sont ligaturés.\nLa castration et la ligature des spermiductes entraînent la stérilité chez le rat pubère : les testicules produisent les gamètes mâles, véhiculés par les spermiductes — c’est le rôle exocrine des testicules.\nLa castration seule entraîne en plus la régression des caractères sexuels primaires et secondaires, tandis que les extraits testiculaires maintiennent ces caractères : ils contiennent une hormone, la testostérone.\nLa testostérone est sécrétée par les cellules de Leydig puis déversée dans le sang pour agir sur des cellules cibles : c’est le rôle endocrine des testicules.\nChez le rat impubère castré, on observe la régression des caractères sexuels primaires et la non-apparition des caractères sexuels secondaires.",
      "keyRule": "Castration : stérilité plus régression des caractères ; extraits : caractères maintenus — donc gamètes (exocrine) et testostérone (endocrine).",
      "formulas": [],
      "workedExample": {
        "title": "Déduire les fonctions des testicules de l’expérience sur les vésicules séminales",
        "statement": "Des rats normaux, castrés, et castrés recevant de la testostérone sont sacrifiés ; la masse des vésicules séminales passe de la valeur normale à une valeur très faible après castration, puis remonte avec la testostérone. Interprète.",
        "methodSteps": [
          "La castration fait diminuer la masse des vésicules séminales : il manque la testostérone dans le sang.",
          "L’injection de testostérone fait remonter cette masse : la testostérone déversée dans le sang agit sur les vésicules et assure leur développement.",
          "Les vésicules séminales sont donc des organes cibles de la testostérone."
        ],
        "conclusion": "La fonction mise en évidence dans cette expérience est la fonction endocrine des testicules."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Le dispositif expérimental chez le rat mâle",
          "stepTheme": "Le dispositif expérimental chez le rat mâle",
          "stepBadge": "Le dispositif expérimental chez le rat mâle",
          "paragraphText": "On choisit cinq lots de rats, pubères et impubères : un lot témoin, des lots castrés, un lot castré recevant des extraits testiculaires, et un lot aux spermiductes ligaturés.\nLa comparaison des lots permet d’isoler le rôle des testicules.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p01_q1",
            "type": "mcq",
            "prompt": "Dans les expériences sur les gonades mâles, le premier lot sert de :",
            "options": [
              "Lot castré",
              "Lot témoin, constitué de rats normaux",
              "Lot injecté",
              "Lot ligaturé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que le premier lot, de rats normaux, sert de témoin."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Castration et ligature : la stérilité",
          "stepTheme": "Castration et ligature : la stérilité",
          "stepBadge": "Castration et ligature : la stérilité",
          "paragraphText": "Résultats : le lot castré est stérile, avec régression des caractères sexuels primaires et secondaires.\nLe lot aux spermiductes ligaturés est lui aussi stérile, mais ses caractères sexuels sont maintenus.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p01_q2",
            "type": "mcq",
            "prompt": "La castration et la ligature des spermiductes ont en commun de provoquer :",
            "options": [
              "La disparition des testicules",
              "La stérilité",
              "La régression des caractères sexuels dans les deux cas",
              "Une production accrue de gamètes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse de la leçon : la castration et la ligature des spermiductes entraînent la stérilité chez le rat pubère."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le rôle exocrine des testicules",
          "stepTheme": "Le rôle exocrine des testicules",
          "stepBadge": "Le rôle exocrine des testicules",
          "paragraphText": "• Rôle exocrine des testicules : production des gamètes mâles.\nCes gamètes sont véhiculés par les spermiductes, d’où la stérilité quand ils sont ligaturés ou quand les testicules sont retirés.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p01_q3",
            "type": "mcq",
            "prompt": "Le rôle exocrine des testicules est :",
            "options": [
              "La sécrétion de testostérone dans le sang",
              "La production des gamètes mâles, véhiculés par les spermiductes",
              "Le maintien des caractères sexuels",
              "La gestation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interprétation de la leçon : les testicules produisent les gamètes mâles — c’est leur rôle exocrine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La testostérone et les cellules de Leydig",
          "stepTheme": "La testostérone et les cellules de Leydig",
          "stepBadge": "La testostérone et les cellules de Leydig",
          "paragraphText": "Les extraits testiculaires maintiennent les caractères sexuels car ils contiennent une hormone appelée testostérone.\nLa testostérone est sécrétée par les cellules de Leydig des testicules.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p01_q4",
            "type": "mcq",
            "prompt": "La testostérone est sécrétée par :",
            "options": [
              "Les cellules de Sertoli",
              "Les vésicules séminales",
              "Les cellules de Leydig",
              "Les spermatogonies"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Corrigé de l’exercice 1 de la leçon : la testostérone est produite par les cellules de Leydig."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le rôle endocrine des testicules",
          "stepTheme": "Le rôle endocrine des testicules",
          "stepBadge": "Le rôle endocrine des testicules",
          "paragraphText": "• Rôle endocrine des testicules : sécrétion de la testostérone, déversée dans le sang pour être véhiculée et agir sur des cellules cibles.\nC’est ce rôle qui maintient les caractères sexuels primaires et secondaires.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p01_q5",
            "type": "mcq",
            "prompt": "Le rôle endocrine des testicules consiste à :",
            "options": [
              "Produire les spermatozoïdes",
              "Évacuer les gamètes par les spermiductes",
              "Sécréter la testostérone dans le sang, vers des cellules cibles",
              "Former les tubes séminifères"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La testostérone est déversée dans le sang et agit sur des cellules cibles : c’est le rôle endocrine."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p01_q1",
          "type": "mcq",
          "prompt": "Dans les expériences sur les gonades mâles, le premier lot sert de :",
          "options": [
            "Lot castré",
            "Lot témoin, constitué de rats normaux",
            "Lot injecté",
            "Lot ligaturé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que le premier lot, de rats normaux, sert de témoin."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p01_q2",
          "type": "mcq",
          "prompt": "La castration et la ligature des spermiductes ont en commun de provoquer :",
          "options": [
            "La disparition des testicules",
            "La stérilité",
            "La régression des caractères sexuels dans les deux cas",
            "Une production accrue de gamètes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse de la leçon : la castration et la ligature des spermiductes entraînent la stérilité chez le rat pubère."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p01_q3",
          "type": "mcq",
          "prompt": "Le rôle exocrine des testicules est :",
          "options": [
            "La sécrétion de testostérone dans le sang",
            "La production des gamètes mâles, véhiculés par les spermiductes",
            "Le maintien des caractères sexuels",
            "La gestation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interprétation de la leçon : les testicules produisent les gamètes mâles — c’est leur rôle exocrine."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p01_q4",
          "type": "mcq",
          "prompt": "La testostérone est sécrétée par :",
          "options": [
            "Les cellules de Sertoli",
            "Les vésicules séminales",
            "Les cellules de Leydig",
            "Les spermatogonies"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Corrigé de l’exercice 1 de la leçon : la testostérone est produite par les cellules de Leydig."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p01_q5",
          "type": "mcq",
          "prompt": "Le rôle endocrine des testicules consiste à :",
          "options": [
            "Produire les spermatozoïdes",
            "Évacuer les gamètes par les spermiductes",
            "Sécréter la testostérone dans le sang, vers des cellules cibles",
            "Former les tubes séminifères"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La testostérone est déversée dans le sang et agit sur des cellules cibles : c’est le rôle endocrine."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l02_fonctions_gonades_p02",
      "order": 2,
      "title": "Hormone, glandes et caractères sexuels : le vocabulaire de la leçon",
      "summary": "Définir hormone, glande endocrine, glande exocrine et les deux types de caractères sexuels.",
      "conceptExplanation": "Une hormone est une substance chimique sécrétée par une glande endocrine, qui agit par voie sanguine, de manière spécifique et à très faible dose, sur des organes cibles.\nUne glande endocrine est une glande dont le produit de sécrétion est déversé dans le sang ; une glande exocrine est une glande dont le produit de sécrétion est excrété.\nLes caractères sexuels primaires sont l’ensemble des voies génitales chez le mâle ou la femelle.\nLes caractères sexuels secondaires sont l’ensemble des traits visibles qui permettent de distinguer le mâle de la femelle.\nChez le rat impubère castré, les caractères primaires régressent et les caractères secondaires n’apparaissent pas : les deux dépendent des hormones des gonades.",
      "keyRule": "Hormone : voie sanguine, faible dose, organe cible — primaires : voies génitales ; secondaires : traits visibles distinctifs.",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer caractères primaires et secondaires chez la femelle",
        "statement": "Parmi les organes trompe, ovaire, vésicule séminale, vagin et utérus, relève ceux qui se rapportent aux caractères sexuels primaires de la femme, selon le corrigé de la leçon.",
        "methodSteps": [
          "Les caractères sexuels primaires sont l’ensemble des voies génitales.",
          "Chez la femme, le vagin et l’utérus sont des voies génitales.",
          "La vésicule séminale est un organe mâle et l’ovaire est la gonade, non une voie génitale."
        ],
        "conclusion": "Le corrigé retient le vagin et l’utérus comme caractères sexuels primaires de la femme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d’une hormone",
          "stepTheme": "Définition d’une hormone",
          "stepBadge": "Définition d’une hormone",
          "paragraphText": "• Hormone : substance chimique sécrétée par une glande endocrine et qui agit par voie sanguine de manière spécifique et à très faible dose sur des organes cibles.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p02_q1",
            "type": "mcq",
            "prompt": "Une hormone agit :",
            "options": [
              "Par voie nerveuse, à forte dose",
              "Par voie sanguine, de manière spécifique et à très faible dose, sur des organes cibles",
              "Uniquement sur la glande qui la produit",
              "Par les spermiductes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée mot pour mot dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Glande endocrine et glande exocrine",
          "stepTheme": "Glande endocrine et glande exocrine",
          "stepBadge": "Glande endocrine et glande exocrine",
          "paragraphText": "• Glande endocrine : glande dont le produit de sécrétion est déversé dans le sang.\n• Glande exocrine : glande dont le produit de sécrétion est excrété.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p02_q2",
            "type": "mcq",
            "prompt": "Une glande endocrine déverse son produit :",
            "options": [
              "Dans un canal excréteur",
              "À l’extérieur du corps",
              "Dans le sang",
              "Dans les trompes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon définit la glande endocrine par le déversement de sa sécrétion dans le sang."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les caractères sexuels primaires",
          "stepTheme": "Les caractères sexuels primaires",
          "stepBadge": "Les caractères sexuels primaires",
          "paragraphText": "• Caractères sexuels primaires : ensemble des voies génitales chez le mâle ou la femelle des animaux.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p02_q3",
            "type": "mcq",
            "prompt": "Les caractères sexuels primaires sont :",
            "options": [
              "Les traits visibles du visage",
              "L’ensemble des voies génitales chez le mâle ou la femelle",
              "Les hormones sexuelles",
              "Les gamètes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition de la leçon : les caractères primaires sont les voies génitales."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les caractères sexuels secondaires",
          "stepTheme": "Les caractères sexuels secondaires",
          "stepBadge": "Les caractères sexuels secondaires",
          "paragraphText": "• Caractères sexuels secondaires : ensemble des traits visibles qui permettent de distinguer le mâle de la femelle chez les animaux.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p02_q4",
            "type": "mcq",
            "prompt": "Les caractères sexuels secondaires sont :",
            "options": [
              "Les voies génitales",
              "Les gonades elles-mêmes",
              "L’ensemble des traits visibles qui distinguent le mâle de la femelle",
              "Les gamètes mâles et femelles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon les définit comme les traits visibles qui distinguent le mâle de la femelle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Castration avant la puberté",
          "stepTheme": "Castration avant la puberté",
          "stepBadge": "Castration avant la puberté",
          "paragraphText": "Chez le rat impubère castré, la leçon observe la régression des caractères sexuels primaires et la non-apparition des caractères sexuels secondaires.\nSans hormone, les caractères secondaires ne se développent donc jamais.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p02_q5",
            "type": "mcq",
            "prompt": "Chez le rat impubère castré, les caractères sexuels secondaires :",
            "options": [
              "Apparaissent normalement",
              "N’apparaissent pas",
              "Apparaissent puis doublent",
              "Sont remplacés par les caractères primaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultat du lot impubère castré : non-apparition des caractères sexuels secondaires."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p02_q1",
          "type": "mcq",
          "prompt": "Une hormone agit :",
          "options": [
            "Par voie nerveuse, à forte dose",
            "Par voie sanguine, de manière spécifique et à très faible dose, sur des organes cibles",
            "Uniquement sur la glande qui la produit",
            "Par les spermiductes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée mot pour mot dans la leçon."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p02_q2",
          "type": "mcq",
          "prompt": "Une glande endocrine déverse son produit :",
          "options": [
            "Dans un canal excréteur",
            "À l’extérieur du corps",
            "Dans le sang",
            "Dans les trompes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon définit la glande endocrine par le déversement de sa sécrétion dans le sang."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p02_q3",
          "type": "mcq",
          "prompt": "Les caractères sexuels primaires sont :",
          "options": [
            "Les traits visibles du visage",
            "L’ensemble des voies génitales chez le mâle ou la femelle",
            "Les hormones sexuelles",
            "Les gamètes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition de la leçon : les caractères primaires sont les voies génitales."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p02_q4",
          "type": "mcq",
          "prompt": "Les caractères sexuels secondaires sont :",
          "options": [
            "Les voies génitales",
            "Les gonades elles-mêmes",
            "L’ensemble des traits visibles qui distinguent le mâle de la femelle",
            "Les gamètes mâles et femelles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon les définit comme les traits visibles qui distinguent le mâle de la femelle."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p02_q5",
          "type": "mcq",
          "prompt": "Chez le rat impubère castré, les caractères sexuels secondaires :",
          "options": [
            "Apparaissent normalement",
            "N’apparaissent pas",
            "Apparaissent puis doublent",
            "Sont remplacés par les caractères primaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultat du lot impubère castré : non-apparition des caractères sexuels secondaires."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l02_fonctions_gonades_p03",
      "order": 3,
      "title": "Les ovaires : gamètes femelles, hormones et gestation",
      "summary": "Lire les expériences sur les rates pour dégager les fonctions exocrine et endocrine des ovaires.",
      "conceptExplanation": "Les expériences portent sur six lots de rates pubères, dont des rates gravides : lot témoin, rates ovariectomisées, rates ovariectomisées recevant des extraits ovariens, rates gravides castrées, rates gravides castrées injectées, et rates aux trompes ligaturées.\nL’ablation des ovaires ou la ligature des trompes chez une rate non gravide entraîne la stérilité ; chez la rate gravide, la castration provoque un avortement une quinzaine de jours plus tard.\nL’injection d’extraits ovariens à une rate gravide castrée permet la poursuite normale de la gestation, et à une rate non gravide castrée, le maintien des caractères sexuels primaires et secondaires.\nCes extraits contiennent des hormones produites par les ovaires : les œstrogènes, produits par les follicules, et la progestérone, sécrétée par le corps jaune — c’est le rôle endocrine des ovaires.\nLa stérilité vient de ce que les ovaires produisent les gamètes femelles, déposés dans les trompes : c’est leur rôle exocrine.",
      "keyRule": "Ovariectomie : stérilité, régression, avortement si gravide ; extraits : caractères et gestation maintenus — œstrogènes des follicules, progestérone du corps jaune.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter les expériences de greffe et d’injection chez la souris femelle",
        "statement": "Une souris castrée puis greffée d’ovaires, ou castrée puis injectée d’œstrogènes et de progestérone, reste stérile mais développe normalement ses caractères sexuels. Explique ces résultats.",
        "methodSteps": [
          "La stérilité est due au manque de production de gamètes femelles par les ovaires absents.",
          "La régression initiale des caractères vient du manque d’œstrogènes et de progestérone dans le sang.",
          "La greffe ou les injections restaurent ces hormones dans le sang : les caractères se développent normalement."
        ],
        "conclusion": "Les fonctions mises en évidence sont la fonction exocrine et la fonction endocrine des ovaires."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Le dispositif chez les rates",
          "stepTheme": "Le dispositif chez les rates",
          "stepBadge": "Le dispositif chez les rates",
          "paragraphText": "On choisit six lots de rates pubères, dont deux lots de rates gravides.\nLe premier lot, de rates gravides et non gravides, sert de témoin ; les autres subissent ovariectomie, injections d’extraits ovariens ou ligature des trompes.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p03_q1",
            "type": "mcq",
            "prompt": "Les expériences sur les gonades femelles utilisent :",
            "options": [
              "Des rats mâles uniquement",
              "Six lots de rates pubères, dont des rates gravides",
              "Des rates impubères seulement",
              "Des souris mâles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon décrit six lots de rates pubères, dont deux lots de rates gravides."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Castration d’une rate gravide : l’avortement",
          "stepTheme": "Castration d’une rate gravide : l’avortement",
          "stepBadge": "Castration d’une rate gravide : l’avortement",
          "paragraphText": "Résultat du lot de rates gravides castrées : avortement quinze jours plus tard.\nAvec des extraits ovariens injectés, au contraire, la gestation se poursuit normalement.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p03_q2",
            "type": "mcq",
            "prompt": "La castration d’une rate gravide provoque :",
            "options": [
              "Une gestation plus longue",
              "La naissance de petits plus nombreux",
              "Un avortement",
              "Aucun effet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultat de la leçon : les rates gravides castrées avortent, faute d’hormones ovariennes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les hormones ovariennes et leurs structures",
          "stepTheme": "Les hormones ovariennes et leurs structures",
          "stepBadge": "Les hormones ovariennes et leurs structures",
          "paragraphText": "Les hormones produites par les ovaires sont les œstrogènes et la progestérone.\nLes œstrogènes sont produits par les follicules et la progestérone est sécrétée par le corps jaune.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p03_q3",
            "type": "mcq",
            "prompt": "La progestérone est sécrétée par :",
            "options": [
              "Les follicules",
              "Le corps jaune",
              "Les trompes",
              "Les cellules de Leydig"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon attribue les œstrogènes aux follicules et la progestérone au corps jaune."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rôle endocrine des ovaires",
          "stepTheme": "Le rôle endocrine des ovaires",
          "stepBadge": "Le rôle endocrine des ovaires",
          "paragraphText": "Les extraits ovariens maintiennent les caractères sexuels et permettent la poursuite de la gestation parce qu’ils contiennent des hormones produites par les ovaires.\nAgir ainsi par des substances déversées dans le sang, c’est le rôle endocrine des ovaires.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p03_q4",
            "type": "mcq",
            "prompt": "Le maintien de la gestation par les extraits ovariens illustre :",
            "options": [
              "Le rôle exocrine des ovaires",
              "Le rôle endocrine des ovaires",
              "Un effet mécanique des trompes",
              "La production de gamètes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les hormones des extraits agissent par le sang sur la gestation : rôle endocrine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le rôle exocrine des ovaires",
          "stepTheme": "Le rôle exocrine des ovaires",
          "stepBadge": "Le rôle exocrine des ovaires",
          "paragraphText": "La stérilité provoquée par la castration ou la ligature des trompes est due au fait que les ovaires produisent des gamètes femelles, déposés dans les trompes.\nProduire les gamètes est le rôle exocrine des ovaires.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p03_q5",
            "type": "mcq",
            "prompt": "La stérilité après ligature des trompes s’explique parce que les ovaires :",
            "options": [
              "Ne produisent plus d’hormones",
              "Produisent des gamètes femelles qui ne peuvent plus passer, les trompes étant ligaturées",
              "Disparaissent",
              "Produisent de la testostérone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les gamètes femelles produits par les ovaires sont déposés dans les trompes : leur ligature rend stérile."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p03_q1",
          "type": "mcq",
          "prompt": "Les expériences sur les gonades femelles utilisent :",
          "options": [
            "Des rats mâles uniquement",
            "Six lots de rates pubères, dont des rates gravides",
            "Des rates impubères seulement",
            "Des souris mâles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon décrit six lots de rates pubères, dont deux lots de rates gravides."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p03_q2",
          "type": "mcq",
          "prompt": "La castration d’une rate gravide provoque :",
          "options": [
            "Une gestation plus longue",
            "La naissance de petits plus nombreux",
            "Un avortement",
            "Aucun effet"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultat de la leçon : les rates gravides castrées avortent, faute d’hormones ovariennes."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p03_q3",
          "type": "mcq",
          "prompt": "La progestérone est sécrétée par :",
          "options": [
            "Les follicules",
            "Le corps jaune",
            "Les trompes",
            "Les cellules de Leydig"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon attribue les œstrogènes aux follicules et la progestérone au corps jaune."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p03_q4",
          "type": "mcq",
          "prompt": "Le maintien de la gestation par les extraits ovariens illustre :",
          "options": [
            "Le rôle exocrine des ovaires",
            "Le rôle endocrine des ovaires",
            "Un effet mécanique des trompes",
            "La production de gamètes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les hormones des extraits agissent par le sang sur la gestation : rôle endocrine."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p03_q5",
          "type": "mcq",
          "prompt": "La stérilité après ligature des trompes s’explique parce que les ovaires :",
          "options": [
            "Ne produisent plus d’hormones",
            "Produisent des gamètes femelles qui ne peuvent plus passer, les trompes étant ligaturées",
            "Disparaissent",
            "Produisent de la testostérone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les gamètes femelles produits par les ovaires sont déposés dans les trompes : leur ligature rend stérile."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l02_fonctions_gonades_p04",
      "order": 4,
      "title": "La structure du testicule : tubes séminifères et cellules",
      "summary": "Décrire l’organisation du testicule et situer les cellules de Sertoli, de Leydig et la lignée germinale.",
      "conceptExplanation": "L’observation des coupes longitudinale et transversale de testicule montre des tubes séminifères, des lobules, l’albuginée, l’épididyme surmontant le testicule, le cône efférent, le réseau de Haller, le canal épididymaire, le canal déférent et les tubes droits.\nPlusieurs lobules renferment chacun des tubes séminifères, reliés au réseau de Haller par un tube droit.\nChaque tube séminifère, délimité par une gaine conjonctive, possède une paroi et une lumière ; de la paroi vers la lumière, on trouve des cellules germinales à différents stades : spermatogonies, spermatocytes I, spermatocytes II, spermatides, puis spermatozoïdes accolés à l’extrémité des cellules de Sertoli.\nEntre les tubes séminifères se trouvent les cellules de Leydig et des vaisseaux sanguins.\nLes testicules produisent donc les gamètes mâles chez les mammifères.",
      "keyRule": "De la paroi vers la lumière du tube : spermatogonie, spermatocyte I, spermatocyte II, spermatide, spermatozoïde ; Leydig entre les tubes, Sertoli dans le tube.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier les constituants d’une coupe de tubes séminifères",
        "statement": "Sur une coupe transversale de tubes séminifères, les éléments numérotés comprennent la cellule interstitielle, la spermatogonie, les spermatocytes I et II, la spermatide et le spermatozoïde. Précise leurs rôles, d’après le corrigé de la leçon.",
        "methodSteps": [
          "La cellule interstitielle, ou cellule de Leydig, produit la testostérone.",
          "Spermatogonie, spermatocytes I et II et spermatide sont les étapes successives de la formation des gamètes mâles.",
          "Le spermatozoïde est le gamète mâle, qui intervient dans la fécondation."
        ],
        "conclusion": "On en déduit le double rôle des testicules : production de testostérone et de gamètes mâles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les tubes séminifères dans les lobules",
          "stepTheme": "Les tubes séminifères dans les lobules",
          "stepBadge": "Les tubes séminifères dans les lobules",
          "paragraphText": "Les testicules sont constitués principalement de tubes séminifères disposés de façon particulière.\nPlusieurs lobules renferment chacun des tubes séminifères, reliés au réseau de Haller par un tube droit.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p04_q1",
            "type": "mcq",
            "prompt": "Les tubes séminifères sont regroupés dans :",
            "options": [
              "L’épididyme",
              "Des lobules, reliés au réseau de Haller par un tube droit",
              "Le corps jaune",
              "Les follicules"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse de la leçon : chaque lobule renferme des tubes séminifères reliés au réseau de Haller."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "De la paroi vers la lumière du tube",
          "stepTheme": "De la paroi vers la lumière du tube",
          "stepBadge": "De la paroi vers la lumière du tube",
          "paragraphText": "Chaque tube séminifère possède une paroi et une lumière.\nDe la paroi vers la lumière, on trouve des successions de cellules germinales à différents stades de développement : spermatogonies, spermatocytes, spermatides, spermatozoïdes.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p04_q2",
            "type": "mcq",
            "prompt": "En allant de la paroi vers la lumière d’un tube séminifère, on rencontre dans l’ordre :",
            "options": [
              "Spermatozoïdes puis spermatogonies",
              "Spermatogonies, spermatocytes, spermatides, puis spermatozoïdes",
              "Cellules de Leydig uniquement",
              "Follicules puis corps jaune"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon décrit les stades germinaux de la paroi vers la lumière, jusqu’aux spermatozoïdes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Cellules de Sertoli et cellules de Leydig",
          "stepTheme": "Cellules de Sertoli et cellules de Leydig",
          "stepBadge": "Cellules de Sertoli et cellules de Leydig",
          "paragraphText": "Les amas de cellules germinales sont séparés par des cellules de Sertoli, à l’extrémité desquelles sont accolés des spermatozoïdes.\nDes cellules de Leydig et des vaisseaux sanguins se trouvent entre les tubes séminifères.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p04_q3",
            "type": "mcq",
            "prompt": "Les cellules de Leydig se trouvent :",
            "options": [
              "Dans la lumière du tube",
              "Sur l’ovaire",
              "Entre les tubes séminifères, avec des vaisseaux sanguins",
              "Dans l’épididyme"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon situe les cellules de Leydig entre les tubes séminifères."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le trajet des gamètes après le tube",
          "stepTheme": "Le trajet des gamètes après le tube",
          "stepBadge": "Le trajet des gamètes après le tube",
          "paragraphText": "Le testicule est surmonté par l’épididyme, qui contient le cône efférent, suivi par le canal épididymaire, lui-même suivi par le canal déférent.\nC’est la voie de sortie des gamètes formés dans les tubes.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p04_q4",
            "type": "mcq",
            "prompt": "Après les tubes séminifères et le réseau de Haller, les gamètes passent par :",
            "options": [
              "Le corps jaune",
              "L’épididyme, puis le canal épididymaire et le canal déférent",
              "Les trompes",
              "Les follicules"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon décrit l’épididyme surmontant le testicule, suivi du canal épididymaire et du canal déférent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Conclusion sur le testicule",
          "stepTheme": "Conclusion sur le testicule",
          "stepBadge": "Conclusion sur le testicule",
          "paragraphText": "Conclusion de la partie : les testicules produisent des gamètes mâles chez les mammifères, grâce à leurs structures spécifiques.\nCes structures sont les tubes séminifères et leurs cellules associées.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p04_q5",
            "type": "mcq",
            "prompt": "Les structures spécifiques du testicule servent à produire :",
            "options": [
              "Les ovocytes",
              "Les œstrogènes",
              "Les gamètes mâles",
              "La progestérone"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conclusion de la leçon : les testicules produisent les gamètes mâles chez les mammifères."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p04_q1",
          "type": "mcq",
          "prompt": "Les tubes séminifères sont regroupés dans :",
          "options": [
            "L’épididyme",
            "Des lobules, reliés au réseau de Haller par un tube droit",
            "Le corps jaune",
            "Les follicules"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse de la leçon : chaque lobule renferme des tubes séminifères reliés au réseau de Haller."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p04_q2",
          "type": "mcq",
          "prompt": "En allant de la paroi vers la lumière d’un tube séminifère, on rencontre dans l’ordre :",
          "options": [
            "Spermatozoïdes puis spermatogonies",
            "Spermatogonies, spermatocytes, spermatides, puis spermatozoïdes",
            "Cellules de Leydig uniquement",
            "Follicules puis corps jaune"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon décrit les stades germinaux de la paroi vers la lumière, jusqu’aux spermatozoïdes."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p04_q3",
          "type": "mcq",
          "prompt": "Les cellules de Leydig se trouvent :",
          "options": [
            "Dans la lumière du tube",
            "Sur l’ovaire",
            "Entre les tubes séminifères, avec des vaisseaux sanguins",
            "Dans l’épididyme"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon situe les cellules de Leydig entre les tubes séminifères."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p04_q4",
          "type": "mcq",
          "prompt": "Après les tubes séminifères et le réseau de Haller, les gamètes passent par :",
          "options": [
            "Le corps jaune",
            "L’épididyme, puis le canal épididymaire et le canal déférent",
            "Les trompes",
            "Les follicules"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon décrit l’épididyme surmontant le testicule, suivi du canal épididymaire et du canal déférent."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p04_q5",
          "type": "mcq",
          "prompt": "Les structures spécifiques du testicule servent à produire :",
          "options": [
            "Les ovocytes",
            "Les œstrogènes",
            "Les gamètes mâles",
            "La progestérone"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conclusion de la leçon : les testicules produisent les gamètes mâles chez les mammifères."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l02_fonctions_gonades_p05",
      "order": 5,
      "title": "La structure de l’ovaire : les follicules et le corps jaune",
      "summary": "Décrire les stades folliculaires de l’ovaire et le devenir du follicule mûr.",
      "conceptExplanation": "La coupe longitudinale d’un ovaire montre des follicules à différents stades de développement, de taille variable, entourés de tissu conjonctif dense ; chaque follicule contient un ovocyte, futur gamète femelle.\nLe follicule primordial est constitué d’un ovocyte entouré de quelques cellules disposées en couronne ; le follicule jeune est constitué d’un ovocyte entouré de plusieurs assises de cellules.\nLe follicule mûr, ou follicule de De Graaf, est caractérisé par la présence d’une cavité en forme de croissant autour de l’ovocyte.\nLe follicule mûr libère l’ovocyte et se transforme en corps jaune.\nSur le schéma de la leçon, on repère le follicule primordial, le follicule primaire, le follicule secondaire, le follicule mûr de De Graaf et le corps jaune.\nLes gonades mâle et femelle possèdent donc des structures spécifiques qui produisent les gamètes, et les gonades interviennent dans la reproduction par la production de gamètes et de substances.",
      "keyRule": "Primordial, primaire, secondaire, mûr de De Graaf avec cavité en croissant, puis corps jaune après libération de l’ovocyte.",
      "formulas": [],
      "workedExample": {
        "title": "Légender une coupe longitudinale d’ovaire",
        "statement": "Sur le schéma d’une coupe d’ovaire, on doit légender les follicules et le corps jaune, puis expliquer le rôle de ces constituants, selon le corrigé de la leçon.",
        "methodSteps": [
          "Les follicules assurent la maturation et la libération des gamètes femelles, ainsi que la production des œstrogènes.",
          "Le corps jaune assure la production de la progestérone, qui intervient dans la gestation.",
          "Œstrogènes et progestérone sont des hormones déversées dans les vaisseaux sanguins."
        ],
        "conclusion": "On en déduit les fonctions endocrine et exocrine de l’ovaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Chaque follicule contient un ovocyte",
          "stepTheme": "Chaque follicule contient un ovocyte",
          "stepBadge": "Chaque follicule contient un ovocyte",
          "paragraphText": "L’ovaire renferme des follicules à différents stades de développement, entourés de tissu conjonctif dense.\nChaque follicule contient un ovocyte, futur gamète femelle.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p05_q1",
            "type": "mcq",
            "prompt": "Chaque follicule de l’ovaire contient :",
            "options": [
              "Un spermatozoïde",
              "Un ovocyte, futur gamète femelle",
              "Une cellule de Leydig",
              "Un tube séminifère"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que chaque follicule contient un ovocyte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les stades folliculaires",
          "stepTheme": "Les stades folliculaires",
          "stepBadge": "Les stades folliculaires",
          "paragraphText": "On distingue le follicule primordial, le follicule primaire, le follicule secondaire et le follicule mûr de De Graaf.\nLe follicule primordial n’a que quelques cellules en couronne autour de l’ovocyte ; le follicule jeune a plusieurs assises de cellules.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p05_q2",
            "type": "mcq",
            "prompt": "Le follicule primordial est constitué :",
            "options": [
              "D’un ovocyte entouré de quelques cellules disposées en couronne",
              "D’une grande cavité en croissant",
              "D’un corps jaune",
              "De cellules de Leydig"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Description de la leçon : ovocyte entouré de quelques cellules en couronne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le follicule mûr de De Graaf",
          "stepTheme": "Le follicule mûr de De Graaf",
          "stepBadge": "Le follicule mûr de De Graaf",
          "paragraphText": "Le follicule mûr est caractérisé par la présence d’une cavité en forme de croissant autour de l’ovocyte.\nC’est le follicule de De Graaf, stade final avant la libération de l’ovocyte.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p05_q3",
            "type": "mcq",
            "prompt": "Le follicule mûr se reconnaît à :",
            "options": [
              "L’absence d’ovocyte",
              "Une cavité en forme de croissant autour de l’ovocyte",
              "La présence de spermatozoïdes",
              "Un tissu musculaire épais"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La cavité en forme de croissant caractérise le follicule mûr d’après la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le devenir du follicule mûr : le corps jaune",
          "stepTheme": "Le devenir du follicule mûr : le corps jaune",
          "stepBadge": "Le devenir du follicule mûr : le corps jaune",
          "paragraphText": "Le follicule mûr libère l’ovocyte et se transforme en corps jaune.\nLe corps jaune sécrète ensuite la progestérone.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p05_q4",
            "type": "mcq",
            "prompt": "Après avoir libéré l’ovocyte, le follicule mûr :",
            "options": [
              "Disparaît sans trace",
              "Devient un tube séminifère",
              "Se transforme en corps jaune",
              "Se divise en deux ovaires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon indique que le follicule mûr libère l’ovocyte et se transforme en corps jaune."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Conclusion générale sur les gonades",
          "stepTheme": "Conclusion générale sur les gonades",
          "stepBadge": "Conclusion générale sur les gonades",
          "paragraphText": "Conclusion générale : les gonades interviennent dans la reproduction chez les mammifères par la production de gamètes et de substances grâce à des structures spécifiques.\nTesticules et ovaires sont donc des glandes mixtes, exocrines et endocrines.",
          "exercise": {
            "id": "premiere_d_svt_l02_fonctions_gonades_p05_q5",
            "type": "mcq",
            "prompt": "Les gonades interviennent dans la reproduction par :",
            "options": [
              "La production de gamètes et de substances, grâce à des structures spécifiques",
              "La seule production de chaleur",
              "La digestion des aliments",
              "La circulation du sang"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la conclusion générale de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p05_q1",
          "type": "mcq",
          "prompt": "Chaque follicule de l’ovaire contient :",
          "options": [
            "Un spermatozoïde",
            "Un ovocyte, futur gamète femelle",
            "Une cellule de Leydig",
            "Un tube séminifère"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que chaque follicule contient un ovocyte."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p05_q2",
          "type": "mcq",
          "prompt": "Le follicule primordial est constitué :",
          "options": [
            "D’un ovocyte entouré de quelques cellules disposées en couronne",
            "D’une grande cavité en croissant",
            "D’un corps jaune",
            "De cellules de Leydig"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Description de la leçon : ovocyte entouré de quelques cellules en couronne."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p05_q3",
          "type": "mcq",
          "prompt": "Le follicule mûr se reconnaît à :",
          "options": [
            "L’absence d’ovocyte",
            "Une cavité en forme de croissant autour de l’ovocyte",
            "La présence de spermatozoïdes",
            "Un tissu musculaire épais"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La cavité en forme de croissant caractérise le follicule mûr d’après la leçon."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p05_q4",
          "type": "mcq",
          "prompt": "Après avoir libéré l’ovocyte, le follicule mûr :",
          "options": [
            "Disparaît sans trace",
            "Devient un tube séminifère",
            "Se transforme en corps jaune",
            "Se divise en deux ovaires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon indique que le follicule mûr libère l’ovocyte et se transforme en corps jaune."
        },
        {
          "id": "premiere_d_svt_l02_fonctions_gonades_p05_q5",
          "type": "mcq",
          "prompt": "Les gonades interviennent dans la reproduction par :",
          "options": [
            "La production de gamètes et de substances, grâce à des structures spécifiques",
            "La seule production de chaleur",
            "La digestion des aliments",
            "La circulation du sang"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la conclusion générale de la leçon."
        }
      ]
    }
  ]
};
