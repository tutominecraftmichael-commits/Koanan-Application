import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère G5-Lorganisation administrative de la Côte dIvoire.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const GEO_1RE_T3_L01_ORGANISATION_ADMINISTRATIVE_CI: CurriculumChapter = {
  "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci",
  "subjectId": "histoire_geo",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 5,
  "title": "Thème 3, leçon 1 : L'organisation administrative de la Côte d'Ivoire",
  "summary": "Déconcentration et décentralisation : circonscriptions administratives, collectivités territoriales, leurs organes et leurs insuffisances.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "1ère G5-Lorganisation administrative de la Côte dIvoire.pdf",
  "points": [
    {
      "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01",
      "order": 1,
      "title": "Déconcentration et décentralisation",
      "summary": "Deux principes pour organiser l'administration du territoire.",
      "conceptExplanation": "L'organisation administrative est la manière dont un État est structuré et fonctionne sur son territoire. Celle de la Côte d'Ivoire est inspirée du modèle colonial français et repose sur deux principes (ordonnance n° 2011-262 du 28 septembre 2011, loi n° 2014-451 du 5 août 2014) :\n\n1. La déconcentration : l'État transfère une partie du pouvoir central à des agents qu'il nomme (préfets, sous-préfets) et qu'il répartit sur tout le territoire. Ils exercent un pouvoir délégué et représentent l'État. Leurs moyens viennent des dotations de l'État.\n\n2. La décentralisation : l'État transfère des compétences à des collectivités territoriales distinctes de lui (régions et communes). Elles sont dirigées par des élus, ont la personnalité juridique et l'autonomie financière, mais restent sous le contrôle de l'État (ministère chargé de la décentralisation, préfets).\n\nRepère simple : déconcentration = autorités nommées ; décentralisation = autorités élues.",
      "keyRule": "Déconcentration : pouvoir délégué à des agents nommés de l'État. Décentralisation : compétences transférées à des collectivités dirigées par des élus, avec personnalité juridique et autonomie financière.",
      "formulas": [],
      "workedExample": {
        "title": "Distinguer deux autorités",
        "statement": "Le préfet et le maire : lequel relève de la déconcentration ?",
        "methodSteps": [
          "Le préfet est nommé par décret : il représente l'État.",
          "Le maire est élu par le conseil municipal : il dirige une collectivité."
        ],
        "conclusion": "Le préfet relève de la déconcentration, le maire de la décentralisation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'organisation administrative",
          "stepTheme": "L'organisation administrative",
          "stepBadge": "L'organisation administrative",
          "paragraphText": "L'organisation administrative est le mode de structuration et de fonctionnement d'un État sur son territoire.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q1",
            "type": "mcq",
            "prompt": "Sur quel modèle l'organisation administrative ivoirienne est-elle calquée ?",
            "options": [
              "Le modèle fédéral américain",
              "Le modèle des cités marchandes",
              "Le modèle colonial français",
              "Le modèle des royaumes akan"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle repose sur la déconcentration et la décentralisation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La déconcentration",
          "stepTheme": "La déconcentration",
          "stepBadge": "La déconcentration",
          "paragraphText": "La déconcentration transfère une partie du pouvoir central à des agents nommés par l'État et répartis sur le territoire.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce que la déconcentration ?",
            "options": [
              "Le transfert de pouvoir à des agents nommés par l'État",
              "Le transfert de compétences à des élus locaux",
              "La suppression de l'administration",
              "La création d'un État fédéral"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ces agents exercent un pouvoir délégué."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La décentralisation",
          "stepTheme": "La décentralisation",
          "stepBadge": "La décentralisation",
          "paragraphText": "La décentralisation transfère des compétences de l'État à des collectivités territoriales dirigées par des élus.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce que la décentralisation ?",
            "options": [
              "La nomination de préfets dans les régions",
              "Le regroupement de tous les pouvoirs à Abidjan",
              "La suppression des communes",
              "Le transfert de compétences à des collectivités dirigées par des élus"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ces collectivités ont la personnalité juridique et l'autonomie financière."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Nommés ou élus",
          "stepTheme": "Nommés ou élus",
          "stepBadge": "Nommés ou élus",
          "paragraphText": "Les autorités déconcentrées sont nommées ; les autorités décentralisées sont élues.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q4",
            "type": "mcq",
            "prompt": "Comment sont désignées les autorités décentralisées ?",
            "options": [
              "Elles sont nommées par décret",
              "Elles sont élues",
              "Elles sont tirées au sort",
              "Elles héritent du poste"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le maire et le président du conseil régional sont des élus."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'autonomie financière",
          "stepTheme": "L'autonomie financière",
          "stepBadge": "L'autonomie financière",
          "paragraphText": "Les collectivités territoriales ont la personnalité juridique et l'autonomie financière ; les circonscriptions déconcentrées vivent des dotations de l'État.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q5",
            "type": "mcq",
            "prompt": "Qu'est-ce que les collectivités territoriales possèdent, contrairement aux circonscriptions déconcentrées ?",
            "options": [
              "Un préfet nommé",
              "L'autonomie financière",
              "Aucun budget",
              "Une armée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elles ont leurs propres ressources (impôts locaux, taxes)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Un contrôle de l'État",
          "stepTheme": "Un contrôle de l'État",
          "stepBadge": "Un contrôle de l'État",
          "paragraphText": "Les collectivités décentralisées restent sous le contrôle du pouvoir central, par le ministère chargé de la décentralisation et les préfets.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q6",
            "type": "mcq",
            "prompt": "Les collectivités territoriales sont-elles totalement indépendantes de l'État ?",
            "options": [
              "Oui, l'État n'a aucun droit de regard",
              "Oui, elles forment des États séparés",
              "Non, elles sont dirigées par des préfets",
              "Non, l'État garde un contrôle sur elles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La Côte d'Ivoire reste un État unitaire."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Préfet ou maire ?",
          "stepTheme": "Préfet ou maire ?",
          "stepBadge": "Préfet ou maire ?",
          "paragraphText": "Le préfet est nommé par décret pour représenter l'État ; le maire est un élu local.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q7",
            "type": "mcq",
            "prompt": "Quel administrateur relève de la déconcentration ?",
            "options": [
              "Le préfet",
              "Le maire",
              "Le président du conseil régional",
              "Le conseiller municipal"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les trois autres sont des élus : ils relèvent de la décentralisation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q1",
          "type": "mcq",
          "prompt": "Sur quel modèle l'organisation administrative ivoirienne est-elle calquée ?",
          "options": [
            "Le modèle fédéral américain",
            "Le modèle des cités marchandes",
            "Le modèle colonial français",
            "Le modèle des royaumes akan"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle repose sur la déconcentration et la décentralisation."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce que la déconcentration ?",
          "options": [
            "Le transfert de pouvoir à des agents nommés par l'État",
            "Le transfert de compétences à des élus locaux",
            "La suppression de l'administration",
            "La création d'un État fédéral"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ces agents exercent un pouvoir délégué."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce que la décentralisation ?",
          "options": [
            "La nomination de préfets dans les régions",
            "Le regroupement de tous les pouvoirs à Abidjan",
            "La suppression des communes",
            "Le transfert de compétences à des collectivités dirigées par des élus"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ces collectivités ont la personnalité juridique et l'autonomie financière."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q4",
          "type": "mcq",
          "prompt": "Comment sont désignées les autorités décentralisées ?",
          "options": [
            "Elles sont nommées par décret",
            "Elles sont élues",
            "Elles sont tirées au sort",
            "Elles héritent du poste"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le maire et le président du conseil régional sont des élus."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q5",
          "type": "mcq",
          "prompt": "Qu'est-ce que les collectivités territoriales possèdent, contrairement aux circonscriptions déconcentrées ?",
          "options": [
            "Un préfet nommé",
            "L'autonomie financière",
            "Aucun budget",
            "Une armée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elles ont leurs propres ressources (impôts locaux, taxes)."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q6",
          "type": "mcq",
          "prompt": "Les collectivités territoriales sont-elles totalement indépendantes de l'État ?",
          "options": [
            "Oui, l'État n'a aucun droit de regard",
            "Oui, elles forment des États séparés",
            "Non, elles sont dirigées par des préfets",
            "Non, l'État garde un contrôle sur elles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La Côte d'Ivoire reste un État unitaire."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p01_q7",
          "type": "mcq",
          "prompt": "Quel administrateur relève de la déconcentration ?",
          "options": [
            "Le préfet",
            "Le maire",
            "Le président du conseil régional",
            "Le conseiller municipal"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les trois autres sont des élus : ils relèvent de la décentralisation."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02",
      "order": 2,
      "title": "Les circonscriptions administratives",
      "summary": "District, région, département, sous-préfecture, village.",
      "conceptExplanation": "L'administration déconcentrée est organisée en circonscriptions administratives hiérarchisées, de la plus grande à la plus petite :\n1. Le district : premier échelon. Il regroupe des régions et conduit les grands projets d'aménagement pour corriger les disparités régionales. Le décret de 2011 crée 12 districts, auxquels s'ajoutent 2 districts autonomes : Abidjan et Yamoussoukro. En juin 2021, le gouvernement a annoncé la création de 12 nouveaux districts autonomes.\n2. La région : échelon de conception, de programmation et de coordination du développement. Elle regroupe plusieurs départements et est dirigée par un préfet de région, nommé en Conseil des ministres. La Côte d'Ivoire compte 31 régions.\n3. Le département : échelon relais entre la région et la sous-préfecture, administré par un préfet. Environ 108 départements.\n4. La sous-préfecture : entre le département et le village, administrée par un sous-préfet qui agit sous l'autorité du préfet et supervise les chefs de village. Environ 509 sous-préfectures.\n5. Le village : circonscription de base, administré par un chef assisté d'un conseil de village. Choisi par ses pairs, le chef est nommé par arrêté préfectoral : il devient un auxiliaire de l'administration.",
      "keyRule": "Ordre des circonscriptions : district > région (préfet de région) > département (préfet) > sous-préfecture (sous-préfet) > village (chef de village).",
      "formulas": [],
      "workedExample": {
        "title": "Relier un administrateur à sa circonscription",
        "statement": "Qui administre la sous-préfecture ?",
        "methodSteps": [
          "La sous-préfecture est entre le département et le village.",
          "Elle est dirigée par un sous-préfet, sous l'autorité du préfet."
        ],
        "conclusion": "Le sous-préfet administre la sous-préfecture."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le premier échelon",
          "stepTheme": "Le premier échelon",
          "stepBadge": "Le premier échelon",
          "paragraphText": "Le district est le premier échelon de la déconcentration : il regroupe des régions.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q1",
            "type": "mcq",
            "prompt": "Quel est le premier échelon de la déconcentration administrative ?",
            "options": [
              "Le village",
              "La sous-préfecture",
              "Le district",
              "La commune"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Viennent ensuite la région, le département, la sous-préfecture et le village."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les districts autonomes",
          "stepTheme": "Les districts autonomes",
          "stepBadge": "Les districts autonomes",
          "paragraphText": "Abidjan et Yamoussoukro sont les deux premiers districts autonomes du pays.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q2",
            "type": "mcq",
            "prompt": "Quels sont les deux premiers districts autonomes de Côte d'Ivoire ?",
            "options": [
              "Bouaké et Korhogo",
              "Man et Daloa",
              "San-Pédro et Odienné",
              "Abidjan et Yamoussoukro"
            ],
            "correctAnswerIndex": 3,
            "explanation": "En 2021, de nouveaux districts autonomes ont été annoncés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le nombre de régions",
          "stepTheme": "Le nombre de régions",
          "stepBadge": "Le nombre de régions",
          "paragraphText": "La Côte d'Ivoire compte 31 régions, chacune dirigée par un préfet de région.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q3",
            "type": "mcq",
            "prompt": "Combien de régions la Côte d'Ivoire compte-t-elle selon le cours ?",
            "options": [
              "12",
              "108",
              "31",
              "509"
            ],
            "correctAnswerIndex": 2,
            "explanation": "12 districts, 31 régions, environ 108 départements, 509 sous-préfectures."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La région",
          "stepTheme": "La région",
          "stepBadge": "La région",
          "paragraphText": "La région est l'échelon de conception, de programmation et de coordination des actions de développement.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q4",
            "type": "mcq",
            "prompt": "Quel est le rôle de la région dans l'administration déconcentrée ?",
            "options": [
              "Gérer l'état civil des villages",
              "Concevoir et coordonner le développement",
              "Juger les procès",
              "Voter les lois"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle est dirigée par le préfet de région."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le sous-préfet",
          "stepTheme": "Le sous-préfet",
          "stepBadge": "Le sous-préfet",
          "paragraphText": "Le sous-préfet agit sous l'autorité du préfet et supervise les chefs de village.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q5",
            "type": "mcq",
            "prompt": "Qui supervise l'action des chefs de village ?",
            "options": [
              "Le sous-préfet",
              "Le maire",
              "Le président du conseil régional",
              "Le député"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La sous-préfecture est l'échelon juste au-dessus du village."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le village",
          "stepTheme": "Le village",
          "stepBadge": "Le village",
          "paragraphText": "Le village est la circonscription administrative de base, administrée par un chef assisté d'un conseil de village.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q6",
            "type": "mcq",
            "prompt": "Quelle est la circonscription administrative de base ?",
            "options": [
              "Le village",
              "Le district",
              "La région",
              "Le département"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'échelon le plus proche des populations."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Le chef de village",
          "stepTheme": "Le chef de village",
          "stepBadge": "Le chef de village",
          "paragraphText": "Choisi par ses pairs, le chef de village est nommé par arrêté préfectoral et devient un auxiliaire de l'administration.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q7",
            "type": "mcq",
            "prompt": "Comment le chef de village devient-il un auxiliaire de l'administration ?",
            "options": [
              "Par une élection présidentielle",
              "Par un arrêté préfectoral",
              "Par un décret du ministre de la Santé",
              "Par un vote du conseil régional"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le préfet de sa circonscription qui le nomme."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q1",
          "type": "mcq",
          "prompt": "Quel est le premier échelon de la déconcentration administrative ?",
          "options": [
            "Le village",
            "La sous-préfecture",
            "Le district",
            "La commune"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Viennent ensuite la région, le département, la sous-préfecture et le village."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q2",
          "type": "mcq",
          "prompt": "Quels sont les deux premiers districts autonomes de Côte d'Ivoire ?",
          "options": [
            "Bouaké et Korhogo",
            "Man et Daloa",
            "San-Pédro et Odienné",
            "Abidjan et Yamoussoukro"
          ],
          "correctAnswerIndex": 3,
          "explanation": "En 2021, de nouveaux districts autonomes ont été annoncés."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q3",
          "type": "mcq",
          "prompt": "Combien de régions la Côte d'Ivoire compte-t-elle selon le cours ?",
          "options": [
            "12",
            "108",
            "31",
            "509"
          ],
          "correctAnswerIndex": 2,
          "explanation": "12 districts, 31 régions, environ 108 départements, 509 sous-préfectures."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q4",
          "type": "mcq",
          "prompt": "Quel est le rôle de la région dans l'administration déconcentrée ?",
          "options": [
            "Gérer l'état civil des villages",
            "Concevoir et coordonner le développement",
            "Juger les procès",
            "Voter les lois"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle est dirigée par le préfet de région."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q5",
          "type": "mcq",
          "prompt": "Qui supervise l'action des chefs de village ?",
          "options": [
            "Le sous-préfet",
            "Le maire",
            "Le président du conseil régional",
            "Le député"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La sous-préfecture est l'échelon juste au-dessus du village."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q6",
          "type": "mcq",
          "prompt": "Quelle est la circonscription administrative de base ?",
          "options": [
            "Le village",
            "Le district",
            "La région",
            "Le département"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'échelon le plus proche des populations."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p02_q7",
          "type": "mcq",
          "prompt": "Comment le chef de village devient-il un auxiliaire de l'administration ?",
          "options": [
            "Par une élection présidentielle",
            "Par un arrêté préfectoral",
            "Par un décret du ministre de la Santé",
            "Par un vote du conseil régional"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le préfet de sa circonscription qui le nomme."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03",
      "order": 3,
      "title": "Les objectifs de la déconcentration",
      "summary": "Rapprocher l'administration des populations.",
      "conceptExplanation": "La politique de déconcentration administrative poursuit plusieurs objectifs :\n- rapprocher l'administration des populations ;\n- alléger les tâches du pouvoir central ;\n- diffuser et faire appliquer les décisions du pouvoir central ;\n- traiter équitablement les problèmes des populations sur l'ensemble du territoire ;\n- identifier les problèmes des régions avec la participation des populations, pour trouver ensemble des solutions ;\n- réaliser des infrastructures et équiper les régions pour un développement équilibré du territoire ;\n- renforcer la cohésion sociale pour une paix durable, pilier du développement.\n\nLe préfet a trois rôles :\n- protocolaire : il représente le pouvoir central dans les cérémonies et se place au premier rang ;\n- politique : il explique la politique du gouvernement aux populations ; il représente le chef de l'État et chaque ministre ;\n- administratif : il dirige et contrôle les services de l'État dans sa circonscription.",
      "keyRule": "La déconcentration rapproche l'administration des populations, allège le pouvoir central et vise un développement équilibré. Le préfet a un rôle protocolaire, politique et administratif.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer un rôle",
        "statement": "Explique : « le préfet dispose d'importantes prérogatives protocolaires et administratives ».",
        "methodSteps": [
          "Protocolaire : il représente le chef de l'État dans les cérémonies et occupe le premier rang.",
          "Administratif : il dirige et contrôle les services de l'État dans sa circonscription."
        ],
        "conclusion": "Le préfet est le représentant de l'État sur le terrain."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Rapprocher l'administration",
          "stepTheme": "Rapprocher l'administration",
          "stepBadge": "Rapprocher l'administration",
          "paragraphText": "Le premier objectif de la déconcentration est de rapprocher l'administration des populations.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q1",
            "type": "mcq",
            "prompt": "Quel est le premier objectif de la déconcentration ?",
            "options": [
              "Éloigner l'administration des villages",
              "Supprimer les préfectures",
              "Rapprocher l'administration des populations",
              "Concentrer tous les services à Abidjan"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'élève n'a plus à aller à Abidjan pour chaque démarche."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Alléger le pouvoir central",
          "stepTheme": "Alléger le pouvoir central",
          "stepBadge": "Alléger le pouvoir central",
          "paragraphText": "En confiant des tâches aux préfets et sous-préfets, la déconcentration allège le travail du pouvoir central.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q2",
            "type": "mcq",
            "prompt": "Quel effet la déconcentration a-t-elle sur le pouvoir central ?",
            "options": [
              "Elle augmente toutes ses tâches",
              "Elle le supprime",
              "Elle le remplace par des élus",
              "Elle allège ses tâches"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les décisions courantes sont prises sur place."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un développement équilibré",
          "stepTheme": "Un développement équilibré",
          "stepBadge": "Un développement équilibré",
          "paragraphText": "La déconcentration vise à équiper les régions en infrastructures pour un développement équilibré du territoire.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q3",
            "type": "mcq",
            "prompt": "Quel objectif de la déconcentration concerne les infrastructures ?",
            "options": [
              "Concentrer les routes dans une seule ville",
              "Réduire le nombre d'écoles",
              "Équiper les régions pour un développement équilibré",
              "Fermer les hôpitaux régionaux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il s'agit de réduire les disparités régionales."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La cohésion sociale",
          "stepTheme": "La cohésion sociale",
          "stepBadge": "La cohésion sociale",
          "paragraphText": "La déconcentration cherche aussi à renforcer la cohésion sociale pour une paix durable, pilier du développement.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q4",
            "type": "mcq",
            "prompt": "Pourquoi la déconcentration veut-elle renforcer la cohésion sociale ?",
            "options": [
              "Pour augmenter les impôts",
              "Pour diviser les régions",
              "Pour supprimer les villages",
              "Pour une paix durable, pilier du développement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sans paix, pas de développement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le rôle protocolaire",
          "stepTheme": "Le rôle protocolaire",
          "stepBadge": "Le rôle protocolaire",
          "paragraphText": "Dans les cérémonies, le préfet représente le pouvoir central : il est placé au premier rang.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q5",
            "type": "mcq",
            "prompt": "Pourquoi le préfet est-il placé au premier rang lors des cérémonies ?",
            "options": [
              "Il représente le pouvoir central",
              "Il est le plus âgé du département",
              "Il a été élu par la population",
              "Il est le chef traditionnel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est son rôle protocolaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le rôle politique",
          "stepTheme": "Le rôle politique",
          "stepBadge": "Le rôle politique",
          "paragraphText": "Le préfet explique la politique gouvernementale aux populations : il est l'intermédiaire entre le gouvernement et les administrés.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q6",
            "type": "mcq",
            "prompt": "Quel est le rôle politique du préfet ?",
            "options": [
              "Voter chaque année le budget de la commune",
              "Expliquer la politique du gouvernement aux populations",
              "Élire le maire parmi les conseillers",
              "Présider les séances du conseil régional"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il représente le chef de l'État et chaque ministre."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Le rôle administratif",
          "stepTheme": "Le rôle administratif",
          "stepBadge": "Le rôle administratif",
          "paragraphText": "Le préfet dirige et contrôle les services administratifs et civils de l'État dans son département.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q7",
            "type": "mcq",
            "prompt": "Quel rôle exerce le préfet quand il dirige les services de l'État dans son département ?",
            "options": [
              "Un rôle protocolaire",
              "Un rôle administratif",
              "Un rôle religieux",
              "Un rôle législatif"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il gère aussi le personnel de l'État placé sous son autorité."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q1",
          "type": "mcq",
          "prompt": "Quel est le premier objectif de la déconcentration ?",
          "options": [
            "Éloigner l'administration des villages",
            "Supprimer les préfectures",
            "Rapprocher l'administration des populations",
            "Concentrer tous les services à Abidjan"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'élève n'a plus à aller à Abidjan pour chaque démarche."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q2",
          "type": "mcq",
          "prompt": "Quel effet la déconcentration a-t-elle sur le pouvoir central ?",
          "options": [
            "Elle augmente toutes ses tâches",
            "Elle le supprime",
            "Elle le remplace par des élus",
            "Elle allège ses tâches"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les décisions courantes sont prises sur place."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q3",
          "type": "mcq",
          "prompt": "Quel objectif de la déconcentration concerne les infrastructures ?",
          "options": [
            "Concentrer les routes dans une seule ville",
            "Réduire le nombre d'écoles",
            "Équiper les régions pour un développement équilibré",
            "Fermer les hôpitaux régionaux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il s'agit de réduire les disparités régionales."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q4",
          "type": "mcq",
          "prompt": "Pourquoi la déconcentration veut-elle renforcer la cohésion sociale ?",
          "options": [
            "Pour augmenter les impôts",
            "Pour diviser les régions",
            "Pour supprimer les villages",
            "Pour une paix durable, pilier du développement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sans paix, pas de développement."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q5",
          "type": "mcq",
          "prompt": "Pourquoi le préfet est-il placé au premier rang lors des cérémonies ?",
          "options": [
            "Il représente le pouvoir central",
            "Il est le plus âgé du département",
            "Il a été élu par la population",
            "Il est le chef traditionnel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est son rôle protocolaire."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q6",
          "type": "mcq",
          "prompt": "Quel est le rôle politique du préfet ?",
          "options": [
            "Voter chaque année le budget de la commune",
            "Expliquer la politique du gouvernement aux populations",
            "Élire le maire parmi les conseillers",
            "Présider les séances du conseil régional"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il représente le chef de l'État et chaque ministre."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p03_q7",
          "type": "mcq",
          "prompt": "Quel rôle exerce le préfet quand il dirige les services de l'État dans son département ?",
          "options": [
            "Un rôle protocolaire",
            "Un rôle administratif",
            "Un rôle religieux",
            "Un rôle législatif"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il gère aussi le personnel de l'État placé sous son autorité."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04",
      "order": 4,
      "title": "Les collectivités territoriales",
      "summary": "La région et la commune, administrées par des élus.",
      "conceptExplanation": "Depuis la loi n° 2012-1128 du 13 décembre 2012 et la loi n° 2014-451 du 5 août 2014, les collectivités territoriales décentralisées sont seulement deux : la région et la commune. Elles sont administrées par des élus et ont la personnalité juridique et l'autonomie financière.\n\nElles sont créées selon plusieurs critères : poids démographique, niveau d'équipement, cohésion sociale réelle, potentiel économique et financier, étendue et nombre de localités.\n\nLeurs missions :\n- organiser la vie collective sur leur territoire ;\n- faire participer les populations à la gestion des affaires locales ;\n- promouvoir le développement local ;\n- moderniser le monde rural ;\n- améliorer le cadre de vie ;\n- gérer les terroirs et l'environnement.\n\nEn résumé, la décentralisation vise un développement local avec la participation de la population, et permet de lutter contre les disparités régionales.\n\nChaque collectivité a un organe de délibération (le conseil) et un organe exécutif (le maire pour la commune, le président du conseil régional pour la région).",
      "keyRule": "Les collectivités territoriales sont la région et la commune : élus, personnalité juridique, autonomie financière. But : le développement local avec la participation des populations.",
      "formulas": [],
      "workedExample": {
        "title": "Vrai ou faux",
        "statement": "« En Côte d'Ivoire, les collectivités territoriales sont la région et le département. »",
        "methodSteps": [
          "Le département est une circonscription déconcentrée, dirigée par un préfet nommé.",
          "Les collectivités territoriales sont la région et la commune."
        ],
        "conclusion": "L'affirmation est fausse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Deux collectivités",
          "stepTheme": "Deux collectivités",
          "stepBadge": "Deux collectivités",
          "paragraphText": "En Côte d'Ivoire, les seules collectivités territoriales sont la région et la commune.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q1",
            "type": "mcq",
            "prompt": "Quelles sont les collectivités territoriales en Côte d'Ivoire ?",
            "options": [
              "La région et la commune",
              "La région et le département",
              "Le district et le village",
              "La sous-préfecture et la commune"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le département et le village sont des circonscriptions déconcentrées."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Une région, deux statuts",
          "stepTheme": "Une région, deux statuts",
          "stepBadge": "Une région, deux statuts",
          "paragraphText": "La région est à la fois une circonscription déconcentrée (préfet de région) et une collectivité territoriale (conseil régional élu).",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q2",
            "type": "mcq",
            "prompt": "La région ivoirienne est-elle déconcentrée ou décentralisée ?",
            "options": [
              "Seulement déconcentrée",
              "Seulement décentralisée",
              "Ni l'une ni l'autre",
              "Les deux à la fois"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le seul échelon qui a ce double statut."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les critères de création",
          "stepTheme": "Les critères de création",
          "stepBadge": "Les critères de création",
          "paragraphText": "Une collectivité est créée selon son poids démographique, ses équipements, sa cohésion sociale et son potentiel économique.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q3",
            "type": "mcq",
            "prompt": "Lequel de ces critères sert à créer une collectivité territoriale ?",
            "options": [
              "La couleur du drapeau local",
              "Le nombre de footballeurs",
              "Le poids démographique",
              "L'âge du préfet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On regarde aussi le potentiel économique et financier."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les missions",
          "stepTheme": "Les missions",
          "stepBadge": "Les missions",
          "paragraphText": "Les collectivités ont pour missions d'organiser la vie collective, de faire participer les populations, de moderniser le monde rural et d'améliorer le cadre de vie.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q4",
            "type": "mcq",
            "prompt": "Laquelle de ces missions revient aux collectivités territoriales ?",
            "options": [
              "Commander l'armée nationale",
              "Voter les lois du pays",
              "Améliorer le cadre de vie",
              "Battre la monnaie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elles s'occupent des affaires locales."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le but de la décentralisation",
          "stepTheme": "Le but de la décentralisation",
          "stepBadge": "Le but de la décentralisation",
          "paragraphText": "L'objectif de la décentralisation est un développement local avec la participation de la population.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q5",
            "type": "mcq",
            "prompt": "Quel est le but principal de la décentralisation ?",
            "options": [
              "Un développement local avec la participation de la population",
              "Le renforcement du seul pouvoir central",
              "La suppression des élections",
              "La fusion de toutes les communes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle aide aussi à lutter contre les disparités régionales."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Délibérer et exécuter",
          "stepTheme": "Délibérer et exécuter",
          "stepBadge": "Délibérer et exécuter",
          "paragraphText": "Chaque collectivité a un organe de délibération (le conseil) et un organe exécutif (maire ou président du conseil régional).",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q6",
            "type": "mcq",
            "prompt": "Quel est l'organe exécutif de la commune ?",
            "options": [
              "Le conseil municipal",
              "Le préfet",
              "Le chef de village",
              "Le maire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le conseil municipal est l'organe de délibération."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Le personnel",
          "stepTheme": "Le personnel",
          "stepBadge": "Le personnel",
          "paragraphText": "Le maire ou le président du conseil recrute le personnel avec l'autorisation du conseil ; l'État met aussi des fonctionnaires à leur disposition.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q7",
            "type": "mcq",
            "prompt": "Qui autorise le maire à recruter du personnel communal ?",
            "options": [
              "Le président de la République",
              "Le conseil municipal",
              "Le chef de village",
              "Le comité économique et social"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'exécutif agit sur autorisation de l'organe délibérant."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q1",
          "type": "mcq",
          "prompt": "Quelles sont les collectivités territoriales en Côte d'Ivoire ?",
          "options": [
            "La région et la commune",
            "La région et le département",
            "Le district et le village",
            "La sous-préfecture et la commune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le département et le village sont des circonscriptions déconcentrées."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q2",
          "type": "mcq",
          "prompt": "La région ivoirienne est-elle déconcentrée ou décentralisée ?",
          "options": [
            "Seulement déconcentrée",
            "Seulement décentralisée",
            "Ni l'une ni l'autre",
            "Les deux à la fois"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le seul échelon qui a ce double statut."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q3",
          "type": "mcq",
          "prompt": "Lequel de ces critères sert à créer une collectivité territoriale ?",
          "options": [
            "La couleur du drapeau local",
            "Le nombre de footballeurs",
            "Le poids démographique",
            "L'âge du préfet"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On regarde aussi le potentiel économique et financier."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q4",
          "type": "mcq",
          "prompt": "Laquelle de ces missions revient aux collectivités territoriales ?",
          "options": [
            "Commander l'armée nationale",
            "Voter les lois du pays",
            "Améliorer le cadre de vie",
            "Battre la monnaie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elles s'occupent des affaires locales."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q5",
          "type": "mcq",
          "prompt": "Quel est le but principal de la décentralisation ?",
          "options": [
            "Un développement local avec la participation de la population",
            "Le renforcement du seul pouvoir central",
            "La suppression des élections",
            "La fusion de toutes les communes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle aide aussi à lutter contre les disparités régionales."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q6",
          "type": "mcq",
          "prompt": "Quel est l'organe exécutif de la commune ?",
          "options": [
            "Le conseil municipal",
            "Le préfet",
            "Le chef de village",
            "Le maire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le conseil municipal est l'organe de délibération."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p04_q7",
          "type": "mcq",
          "prompt": "Qui autorise le maire à recruter du personnel communal ?",
          "options": [
            "Le président de la République",
            "Le conseil municipal",
            "Le chef de village",
            "Le comité économique et social"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'exécutif agit sur autorisation de l'organe délibérant."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05",
      "order": 5,
      "title": "Les organes de la commune et de la région",
      "summary": "Conseils, exécutifs et sources de financement.",
      "conceptExplanation": "1. La commune est un regroupement de quartiers ou de villages (un peu plus de 200 en Côte d'Ivoire). Ses organes :\n- le conseil municipal (délibération) : il élit le maire et ses adjoints (suffrage indirect), adopte le budget et les programmes ; il se réunit au moins une fois par trimestre, en public ;\n- le maire (exécution) : il exécute les délibérations, ordonne les recettes et les dépenses, est officier d'état civil et exerce des pouvoirs de police ; il est aidé de ses adjoints ;\n- la municipalité (le maire et ses adjoints) : elle prépare l'ordre du jour, le budget et suit le programme de développement.\n\nFinancement de la commune :\n- ressources propres : impôts (foncier…), patentes, taxes (stationnement, véhicules…), timbres, locations, contraventions ;\n- ressources additionnelles : subventions de l'État, aides, dons, prêts.\n\n2. La région (collectivité) a quatre organes :\n- le conseil régional (délibérant) : il adopte le budget, se réunit au moins une fois par trimestre ;\n- le président du conseil régional : premier responsable, ordonnateur des recettes et des dépenses ;\n- le bureau du conseil régional : le président et 3 à 6 vice-présidents ; il prépare et exécute les délibérations ;\n- le comité économique et social régional : organe consultatif, il donne son avis et se réunit au moins deux fois par an.",
      "keyRule": "Commune : conseil municipal, maire, municipalité. Région : conseil régional, président, bureau, comité économique et social. Le maire est élu par les conseillers municipaux.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer un mode d'élection",
        "statement": "Par qui le maire est-il élu ?",
        "methodSteps": [
          "Les habitants élisent les conseillers municipaux.",
          "Les conseillers municipaux élisent ensuite le maire : c'est un suffrage indirect."
        ],
        "conclusion": "Le maire est élu par les conseillers municipaux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La commune",
          "stepTheme": "La commune",
          "stepBadge": "La commune",
          "paragraphText": "La commune est une collectivité territoriale qui regroupe des quartiers ou des villages.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une commune ?",
            "options": [
              "Un regroupement de régions",
              "Un regroupement de quartiers ou de villages",
              "Une subdivision du village",
              "Un district autonome"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle est dirigée par un maire élu."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "L'élection du maire",
          "stepTheme": "L'élection du maire",
          "stepBadge": "L'élection du maire",
          "paragraphText": "Le maire est élu au suffrage indirect : par les conseillers municipaux, eux-mêmes élus par la population.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q2",
            "type": "mcq",
            "prompt": "Par qui le maire est-il élu ?",
            "options": [
              "Directement par toute la population",
              "Par les députés",
              "Par le préfet",
              "Par les conseillers municipaux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est un suffrage indirect."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le maire, officier d'état civil",
          "stepTheme": "Le maire, officier d'état civil",
          "stepBadge": "Le maire, officier d'état civil",
          "paragraphText": "Le maire exécute les délibérations, ordonne les recettes et les dépenses et tient l'état civil.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q3",
            "type": "mcq",
            "prompt": "Lequel de ces rôles revient au maire ?",
            "options": [
              "Officier d'état civil",
              "Préfet de région",
              "Juge de paix",
              "Chef d'état-major"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est lui qui enregistre naissances, mariages et décès."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les réunions du conseil",
          "stepTheme": "Les réunions du conseil",
          "stepBadge": "Les réunions du conseil",
          "paragraphText": "Le conseil municipal se réunit au moins une fois par trimestre ; ses réunions sont publiques et ouvertes au préfet.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q4",
            "type": "mcq",
            "prompt": "À quelle fréquence minimale le conseil municipal se réunit-il ?",
            "options": [
              "Une fois tous les cinq ans",
              "Une fois par jour",
              "Une fois par trimestre",
              "Jamais en public"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le conseil régional suit la même règle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les ressources propres",
          "stepTheme": "Les ressources propres",
          "stepBadge": "Les ressources propres",
          "paragraphText": "Les ressources propres de la commune sont les impôts locaux, les patentes, les taxes, les timbres et les contraventions.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces recettes est une ressource propre de la commune ?",
            "options": [
              "Les subventions de l'État",
              "Les dons étrangers",
              "Les prêts bancaires",
              "Les patentes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les trois autres sont des ressources additionnelles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le bureau du conseil régional",
          "stepTheme": "Le bureau du conseil régional",
          "stepBadge": "Le bureau du conseil régional",
          "paragraphText": "Le bureau du conseil régional réunit le président et 3 à 6 vice-présidents selon la population de la région.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q6",
            "type": "mcq",
            "prompt": "Combien de vice-présidents compte le bureau du conseil régional ?",
            "options": [
              "Un seul",
              "De 20 à 30",
              "De 3 à 6",
              "Aucun"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le nombre dépend de la population de la région."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "Le comité économique et social",
          "stepTheme": "Le comité économique et social",
          "stepBadge": "Le comité économique et social",
          "paragraphText": "Le comité économique et social régional est un organe consultatif : il donne son avis sur les questions économiques et sociales.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q7",
            "type": "mcq",
            "prompt": "Quel est le rôle du comité économique et social régional ?",
            "options": [
              "Voter le budget de la région",
              "Donner son avis (organe consultatif)",
              "Élire le président de la République",
              "Nommer les préfets"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il se réunit au moins deux fois par an."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une commune ?",
          "options": [
            "Un regroupement de régions",
            "Un regroupement de quartiers ou de villages",
            "Une subdivision du village",
            "Un district autonome"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle est dirigée par un maire élu."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q2",
          "type": "mcq",
          "prompt": "Par qui le maire est-il élu ?",
          "options": [
            "Directement par toute la population",
            "Par les députés",
            "Par le préfet",
            "Par les conseillers municipaux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est un suffrage indirect."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q3",
          "type": "mcq",
          "prompt": "Lequel de ces rôles revient au maire ?",
          "options": [
            "Officier d'état civil",
            "Préfet de région",
            "Juge de paix",
            "Chef d'état-major"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est lui qui enregistre naissances, mariages et décès."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q4",
          "type": "mcq",
          "prompt": "À quelle fréquence minimale le conseil municipal se réunit-il ?",
          "options": [
            "Une fois tous les cinq ans",
            "Une fois par jour",
            "Une fois par trimestre",
            "Jamais en public"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le conseil régional suit la même règle."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces recettes est une ressource propre de la commune ?",
          "options": [
            "Les subventions de l'État",
            "Les dons étrangers",
            "Les prêts bancaires",
            "Les patentes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les trois autres sont des ressources additionnelles."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q6",
          "type": "mcq",
          "prompt": "Combien de vice-présidents compte le bureau du conseil régional ?",
          "options": [
            "Un seul",
            "De 20 à 30",
            "De 3 à 6",
            "Aucun"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le nombre dépend de la population de la région."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p05_q7",
          "type": "mcq",
          "prompt": "Quel est le rôle du comité économique et social régional ?",
          "options": [
            "Voter le budget de la région",
            "Donner son avis (organe consultatif)",
            "Élire le président de la République",
            "Nommer les préfets"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il se réunit au moins deux fois par an."
        }
      ]
    },
    {
      "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06",
      "order": 6,
      "title": "Les insuffisances de l'organisation administrative",
      "summary": "Des limites à corriger pour un développement équilibré.",
      "conceptExplanation": "1. Les insuffisances de la déconcentration :\n- la persistance des disparités régionales (population, investissements, infrastructures) ;\n- certaines sous-préfectures ne fonctionnent pas ;\n- un découpage administratif déséquilibré ;\n- une présence faible de l'État dans la gestion des espaces publics, de l'environnement, de la sécurité et du foncier.\n\n2. Les insuffisances de la décentralisation :\n- les mandats des conseillers ne sont pas limités : certains élus s'installent dans l'immobilisme ;\n- le cumul des postes : un même élu peut être député, maire, président de conseil régional, voire ministre, et manque de disponibilité ;\n- la lenteur du transfert des compétences : des textes d'application manquent, d'où des conflits de compétences ;\n- la création des districts peut freiner la décentralisation ;\n- la faible participation des acteurs locaux (jeunes, femmes, médias) ;\n- l'absence de contrôle citoyen, par désintérêt ou manque d'information ;\n- les difficultés de l'État à tenir ses engagements financiers envers les collectivités.\n\nConclusion : l'organisation administrative ivoirienne vise une meilleure gestion du développement avec l'implication des populations ; les gouvernements successifs s'efforcent de corriger ses insuffisances.",
      "keyRule": "Déconcentration : disparités régionales, sous-préfectures non fonctionnelles, découpage déséquilibré. Décentralisation : mandats illimités, cumul des postes, lenteur du transfert des compétences, faible participation citoyenne.",
      "formulas": [],
      "workedExample": {
        "title": "Donner son avis",
        "statement": "« Le développement local incombe essentiellement aux collectivités territoriales. » Es-tu d'accord ?",
        "methodSteps": [
          "Les collectivités élues connaissent les besoins locaux et associent les populations.",
          "Mais elles ont besoin de l'État : transfert de compétences, subventions, contrôle."
        ],
        "conclusion": "Je suis en partie d'accord : le développement local exige à la fois les collectivités et l'État."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Des disparités persistantes",
          "stepTheme": "Des disparités persistantes",
          "stepBadge": "Des disparités persistantes",
          "paragraphText": "Malgré la déconcentration, les disparités régionales (population, investissements, infrastructures) persistent.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q1",
            "type": "mcq",
            "prompt": "Quelle insuffisance de la déconcentration le cours cite-t-il ?",
            "options": [
              "La persistance des disparités régionales",
              "L'égalité parfaite entre les régions",
              "La disparition des sous-préfectures",
              "L'excès d'élus locaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Certaines régions restent bien moins équipées que d'autres."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Des sous-préfectures inactives",
          "stepTheme": "Des sous-préfectures inactives",
          "stepBadge": "Des sous-préfectures inactives",
          "paragraphText": "Certaines sous-préfectures créées ne sont pas fonctionnelles.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q2",
            "type": "mcq",
            "prompt": "Que reproche-t-on à certaines sous-préfectures ?",
            "options": [
              "De ne pas être fonctionnelles",
              "D'avoir trop de personnel",
              "D'être dirigées par des élus",
              "D'avoir l'autonomie financière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elles existent sur le papier sans vraiment fonctionner."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le cumul des postes",
          "stepTheme": "Le cumul des postes",
          "stepBadge": "Le cumul des postes",
          "paragraphText": "Le cumul des postes : un même élu peut être à la fois député, maire et président de conseil régional.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q3",
            "type": "mcq",
            "prompt": "Pourquoi le cumul des postes est-il une insuffisance ?",
            "options": [
              "Il augmente la participation des jeunes",
              "L'élu manque de disponibilité pour chaque mission",
              "Il accélère le transfert des compétences",
              "Il supprime les conflits"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On ne peut pas bien faire trois métiers à la fois."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Des mandats illimités",
          "stepTheme": "Des mandats illimités",
          "stepBadge": "Des mandats illimités",
          "paragraphText": "La non-limitation des mandats des conseillers ne favorise ni le renouvellement de la classe politique ni la bonne gouvernance.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q4",
            "type": "mcq",
            "prompt": "Quel effet la non-limitation des mandats peut-elle avoir ?",
            "options": [
              "Le renouvellement rapide des élus",
              "La hausse de la créativité",
              "L'immobilisme des élus",
              "La suppression des élections"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Certains élus ne font plus preuve de créativité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La lenteur du transfert",
          "stepTheme": "La lenteur du transfert",
          "stepBadge": "La lenteur du transfert",
          "paragraphText": "Des textes d'application manquent pour clarifier les compétences des collectivités, d'où des conflits de compétences.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q5",
            "type": "mcq",
            "prompt": "Quelle conséquence a la lenteur du transfert des compétences ?",
            "options": [
              "Une parfaite clarté des rôles",
              "La fin des collectivités",
              "La baisse des impôts",
              "Des conflits de compétences"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On ne sait plus qui fait quoi entre l'État et les collectivités."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La participation citoyenne",
          "stepTheme": "La participation citoyenne",
          "stepBadge": "La participation citoyenne",
          "paragraphText": "La faible participation des jeunes, des femmes et des médias et l'absence de contrôle citoyen affaiblissent la décentralisation.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q6",
            "type": "mcq",
            "prompt": "Quels acteurs participent trop peu au développement local selon le cours ?",
            "options": [
              "Les préfets et les sous-préfets",
              "Les ministres",
              "Les jeunes, les femmes et les médias",
              "Les ambassadeurs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Souvent par désintérêt ou manque d'information."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "L'impôt et les collectivités",
          "stepTheme": "L'impôt et les collectivités",
          "stepBadge": "L'impôt et les collectivités",
          "paragraphText": "L'impôt local est une ressource essentielle des collectivités : le civisme fiscal leur donne les moyens d'agir.",
          "exercise": {
            "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q7",
            "type": "mcq",
            "prompt": "Pourquoi le civisme fiscal compte-t-il pour les collectivités territoriales ?",
            "options": [
              "Il remplace les élections",
              "Il supprime le contrôle de l'État",
              "Il n'a aucun lien avec elles",
              "L'impôt finance leurs actions"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sans recettes, la commune ne peut pas réaliser ses projets."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q1",
          "type": "mcq",
          "prompt": "Quelle insuffisance de la déconcentration le cours cite-t-il ?",
          "options": [
            "La persistance des disparités régionales",
            "L'égalité parfaite entre les régions",
            "La disparition des sous-préfectures",
            "L'excès d'élus locaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Certaines régions restent bien moins équipées que d'autres."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q2",
          "type": "mcq",
          "prompt": "Que reproche-t-on à certaines sous-préfectures ?",
          "options": [
            "De ne pas être fonctionnelles",
            "D'avoir trop de personnel",
            "D'être dirigées par des élus",
            "D'avoir l'autonomie financière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elles existent sur le papier sans vraiment fonctionner."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q3",
          "type": "mcq",
          "prompt": "Pourquoi le cumul des postes est-il une insuffisance ?",
          "options": [
            "Il augmente la participation des jeunes",
            "L'élu manque de disponibilité pour chaque mission",
            "Il accélère le transfert des compétences",
            "Il supprime les conflits"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On ne peut pas bien faire trois métiers à la fois."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q4",
          "type": "mcq",
          "prompt": "Quel effet la non-limitation des mandats peut-elle avoir ?",
          "options": [
            "Le renouvellement rapide des élus",
            "La hausse de la créativité",
            "L'immobilisme des élus",
            "La suppression des élections"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Certains élus ne font plus preuve de créativité."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q5",
          "type": "mcq",
          "prompt": "Quelle conséquence a la lenteur du transfert des compétences ?",
          "options": [
            "Une parfaite clarté des rôles",
            "La fin des collectivités",
            "La baisse des impôts",
            "Des conflits de compétences"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On ne sait plus qui fait quoi entre l'État et les collectivités."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q6",
          "type": "mcq",
          "prompt": "Quels acteurs participent trop peu au développement local selon le cours ?",
          "options": [
            "Les préfets et les sous-préfets",
            "Les ministres",
            "Les jeunes, les femmes et les médias",
            "Les ambassadeurs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Souvent par désintérêt ou manque d'information."
        },
        {
          "id": "premiere_a1_hg_geographie_t3_l01_organisation_administrative_ci_p06_q7",
          "type": "mcq",
          "prompt": "Pourquoi le civisme fiscal compte-t-il pour les collectivités territoriales ?",
          "options": [
            "Il remplace les élections",
            "Il supprime le contrôle de l'État",
            "Il n'a aucun lien avec elles",
            "L'impôt finance leurs actions"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sans recettes, la commune ne peut pas réaliser ses projets."
        }
      ]
    }
  ]
};
