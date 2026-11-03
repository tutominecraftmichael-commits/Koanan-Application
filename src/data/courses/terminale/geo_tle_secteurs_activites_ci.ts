import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Tle G2_Les secteurs d'activités économiques de la Côte d'Ivoire.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const GEO_TLE_L02_SECTEURS_ACTIVITES_CI: CurriculumChapter = {
  "id": "terminale_hg_geographie_l02_secteurs_activites_economiques",
  "subjectId": "histoire_geo",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d",
    "terminale_a1",
    "terminale_a2"
  ],
  "order": 2,
  "title": "Leçon 2 : Les secteurs d'activités économiques de la Côte d'Ivoire",
  "summary": "Un secteur primaire prépondérant, un secteur secondaire en plein essor et un secteur tertiaire dynamique.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "Tle G2_Les secteurs d'activités économiques de la Côte d'Ivoire.pdf",
  "points": [
    {
      "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01",
      "order": 1,
      "title": "Les conditions du développement agricole",
      "summary": "Pourquoi l'agriculture ivoirienne peut se développer : nature, main-d'œuvre, recherche et encadrement.",
      "conceptExplanation": "Le secteur primaire exploite les ressources naturelles pour produire des matières premières.\nEn Côte d'Ivoire, il est dominé par l'agriculture.\nL'agriculture profite d'un relief plat, d'une main-d'œuvre abondante (plus de 60 % des actifs) et du soutien de l'État : instituts de recherche, structures d'encadrement, garantie des prix.",
      "keyRule": "Nature favorable + main-d'œuvre abondante + appui de l'État = conditions du développement agricole.",
      "formulas": [],
      "workedExample": {
        "title": "Classer un atout agricole",
        "statement": "Le CNRA est-il un atout naturel, humain ou institutionnel ?",
        "methodSteps": [
          "Le CNRA est le Centre national de recherche agronomique.",
          "Il a été créé par l'État pour améliorer les rendements."
        ],
        "conclusion": "C'est un atout institutionnel : un moyen technique mis en place par l'État."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le secteur primaire",
          "stepTheme": "Le secteur primaire",
          "stepBadge": "Le secteur primaire",
          "paragraphText": "• Secteur primaire : ensemble des activités qui exploitent les ressources naturelles pour produire des matières premières.\nIl comprend l'agriculture, l'élevage, la pêche et l'exploitation forestière.\nEn Côte d'Ivoire, l'agriculture le domine.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q1",
            "type": "mcq",
            "prompt": "Quelle activité appartient au secteur primaire ?",
            "options": [
              "La brasserie de bière",
              "Le transport lagunaire",
              "La pêche artisanale",
              "Le commerce de détail"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La pêche exploite une ressource naturelle. La brasserie est une industrie (secondaire) ; le transport et le commerce sont des services (tertiaire)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une nature favorable",
          "stepTheme": "Une nature favorable",
          "stepBadge": "Une nature favorable",
          "paragraphText": "La Côte d'Ivoire a dans l'ensemble un relief plat.\nCe relief facilite la mise en culture et la circulation des produits.\nLe climat et les sols permettent des cultures variées du sud au nord.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q2",
            "type": "mcq",
            "prompt": "Quel élément naturel facilite la pratique de l'agriculture en Côte d'Ivoire ?",
            "options": [
              "Un relief dans l'ensemble plat",
              "De hautes montagnes sur tout le territoire",
              "Un climat désertique",
              "L'absence de cours d'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le relief plat facilite le travail de la terre. Le pays n'est ni montagneux ni désertique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une main-d'œuvre abondante",
          "stepTheme": "Une main-d'œuvre abondante",
          "stepBadge": "Une main-d'œuvre abondante",
          "paragraphText": "Plus de 60 % de la population active travaille dans l'agriculture.\nCette main-d'œuvre est composée d'Ivoiriens et d'étrangers.\nLa population forme aussi un grand marché de consommation pour les produits agricoles.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q3",
            "type": "mcq",
            "prompt": "En quoi la population est-elle un atout pour l'agriculture ivoirienne ?",
            "options": [
              "Elle vit surtout à l'étranger",
              "Elle refuse de consommer les produits locaux",
              "Elle travaille surtout dans l'industrie lourde",
              "Elle fournit une main-d'œuvre abondante et un marché pour les produits"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Plus de 60 % des actifs travaillent dans l'agriculture, et la population achète une grande partie des produits vivriers."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les instituts de recherche",
          "stepTheme": "Les instituts de recherche",
          "stepBadge": "Les instituts de recherche",
          "paragraphText": "L'État a créé des instituts pour améliorer les rendements :\n• IRCC : café et cacao ;\n• IRCA : caoutchouc ;\n• IRHO : huiles et oléagineux ;\n• CNRA : Centre national de recherche agronomique.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q4",
            "type": "mcq",
            "prompt": "Quel institut s'occupe de la recherche sur le café et le cacao ?",
            "options": [
              "L'IRCA",
              "L'IRCC",
              "L'IRHO",
              "La SODEPALM"
            ],
            "correctAnswerIndex": 1,
            "explanation": "IRCC = Institut de recherche sur le café et le cacao. L'IRCA travaille sur le caoutchouc, l'IRHO sur les oléagineux ; la SODEPALM était une structure d'encadrement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'encadrement des planteurs",
          "stepTheme": "L'encadrement des planteurs",
          "stepBadge": "L'encadrement des planteurs",
          "paragraphText": "Des structures encadraient les planteurs par région :\n• CIDT au nord, SATMACI au centre, SODEPALM au sud.\nDepuis 1993, elles ont laissé la place à deux organes : l'ANADER et le PNASA.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q5",
            "type": "mcq",
            "prompt": "Depuis 1993, quelle structure assure l'encadrement des agriculteurs ?",
            "options": [
              "La SATMACI",
              "L'ANADER",
              "La CIDT",
              "L'IRHO"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ANADER (avec le PNASA) a remplacé la CIDT, la SATMACI et la SODEPALM en 1993. L'IRHO est un institut de recherche."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La garantie des prix",
          "stepTheme": "La garantie des prix",
          "stepBadge": "La garantie des prix",
          "paragraphText": "L'État a garanti les prix du café et du cacao, avec la création de la BCC.\nUn prix garanti rassure le planteur : il sait ce que sa récolte lui rapportera.\nCes moyens financiers, matériels et techniques visent de meilleures performances agricoles.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q6",
            "type": "mcq",
            "prompt": "Pourquoi l'État garantit-il le prix du café et du cacao ?",
            "options": [
              "Pour interdire l'exportation du cacao",
              "Pour remplacer les cultures vivrières",
              "Pour réduire le nombre de planteurs",
              "Pour sécuriser le revenu des planteurs et encourager la production"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un prix garanti protège le planteur contre la chute des cours et l'incite à produire."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Naturel ou institutionnel ?",
          "stepTheme": "Naturel ou institutionnel ?",
          "stepBadge": "Naturel ou institutionnel ?",
          "paragraphText": "Ne confonds pas les types d'atouts :\n• naturels : relief, climat, sols ;\n• humains : main-d'œuvre, marché de consommation ;\n• institutionnels : instituts de recherche, encadrement, garantie des prix.",
          "konanTip": "Si c'est l'État qui l'a créé, ce n'est pas un atout naturel.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q7",
            "type": "mcq",
            "prompt": "Lequel de ces atouts n'est PAS un atout naturel ?",
            "options": [
              "L'encadrement des planteurs par l'ANADER",
              "Le relief plat",
              "La diversité des climats",
              "La qualité des sols"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ANADER est une structure créée par l'État : c'est un atout institutionnel. Le relief, le climat et les sols sont naturels."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q1",
          "type": "mcq",
          "prompt": "Quelle activité appartient au secteur primaire ?",
          "options": [
            "La brasserie de bière",
            "Le transport lagunaire",
            "La pêche artisanale",
            "Le commerce de détail"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La pêche exploite une ressource naturelle. La brasserie est une industrie (secondaire) ; le transport et le commerce sont des services (tertiaire)."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q2",
          "type": "mcq",
          "prompt": "Quel élément naturel facilite la pratique de l'agriculture en Côte d'Ivoire ?",
          "options": [
            "Un relief dans l'ensemble plat",
            "De hautes montagnes sur tout le territoire",
            "Un climat désertique",
            "L'absence de cours d'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le relief plat facilite le travail de la terre. Le pays n'est ni montagneux ni désertique."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q3",
          "type": "mcq",
          "prompt": "En quoi la population est-elle un atout pour l'agriculture ivoirienne ?",
          "options": [
            "Elle vit surtout à l'étranger",
            "Elle refuse de consommer les produits locaux",
            "Elle travaille surtout dans l'industrie lourde",
            "Elle fournit une main-d'œuvre abondante et un marché pour les produits"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Plus de 60 % des actifs travaillent dans l'agriculture, et la population achète une grande partie des produits vivriers."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q4",
          "type": "mcq",
          "prompt": "Quel institut s'occupe de la recherche sur le café et le cacao ?",
          "options": [
            "L'IRCA",
            "L'IRCC",
            "L'IRHO",
            "La SODEPALM"
          ],
          "correctAnswerIndex": 1,
          "explanation": "IRCC = Institut de recherche sur le café et le cacao. L'IRCA travaille sur le caoutchouc, l'IRHO sur les oléagineux ; la SODEPALM était une structure d'encadrement."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q5",
          "type": "mcq",
          "prompt": "Depuis 1993, quelle structure assure l'encadrement des agriculteurs ?",
          "options": [
            "La SATMACI",
            "L'ANADER",
            "La CIDT",
            "L'IRHO"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ANADER (avec le PNASA) a remplacé la CIDT, la SATMACI et la SODEPALM en 1993. L'IRHO est un institut de recherche."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q6",
          "type": "mcq",
          "prompt": "Pourquoi l'État garantit-il le prix du café et du cacao ?",
          "options": [
            "Pour interdire l'exportation du cacao",
            "Pour remplacer les cultures vivrières",
            "Pour réduire le nombre de planteurs",
            "Pour sécuriser le revenu des planteurs et encourager la production"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un prix garanti protège le planteur contre la chute des cours et l'incite à produire."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p01_q7",
          "type": "mcq",
          "prompt": "Lequel de ces atouts n'est PAS un atout naturel ?",
          "options": [
            "L'encadrement des planteurs par l'ANADER",
            "Le relief plat",
            "La diversité des climats",
            "La qualité des sols"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ANADER est une structure créée par l'État : c'est un atout institutionnel. Le relief, le climat et les sols sont naturels."
        }
      ]
    },
    {
      "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02",
      "order": 2,
      "title": "Les régions et les types de cultures",
      "summary": "Le sud forestier, le nord des savanes, les cultures vivrières et les cultures d'exportation.",
      "conceptExplanation": "Les régions agricoles dépendent du climat et des sols.\nLe sud forestier porte des cultures arborées (cacao, café, hévéa, palmier à huile).\nLe nord des savanes porte des cultures herbacées (maïs, coton, riz, arachide…) associées à une arboriculture (anacardier, karité, manguier).\nOn distingue les cultures vivrières, qui nourrissent la population, et les cultures d'exportation, qui rapportent des devises.",
      "keyRule": "Sud forestier = cultures arborées ; nord des savanes = cultures herbacées + anacardier, karité, manguier.",
      "formulas": [],
      "workedExample": {
        "title": "Situer une culture",
        "statement": "Où cultive-t-on surtout l'hévéa ?",
        "methodSteps": [
          "L'hévéa est un arbre : c'est une culture arborée.",
          "Les cultures arborées sont dans la région forestière."
        ],
        "conclusion": "L'hévéa est cultivé surtout dans le sud forestier."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Deux grandes régions agricoles",
          "stepTheme": "Deux grandes régions agricoles",
          "stepBadge": "Deux grandes régions agricoles",
          "paragraphText": "Les régions agricoles dépendent du climat et des sols.\n• Au sud : la région forestière.\n• Au nord : la région des savanes.\nChacune a ses propres cultures.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q1",
            "type": "mcq",
            "prompt": "De quoi dépendent les régions agricoles de la Côte d'Ivoire ?",
            "options": [
              "Du nombre de routes",
              "Des frontières administratives",
              "Du climat et des sols",
              "Du nombre d'usines"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le climat et la nature des sols déterminent ce qu'on peut cultiver dans chaque région."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le sud forestier",
          "stepTheme": "Le sud forestier",
          "stepBadge": "Le sud forestier",
          "paragraphText": "• Cultures arborées : cultures d'arbres ou d'arbustes, comme le cacao, le café, l'hévéa et le palmier à huile.\nElles sont pratiquées dans la région forestière du sud.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q2",
            "type": "mcq",
            "prompt": "Quelle culture est typique de la région forestière du sud ?",
            "options": [
              "Le mil",
              "Le sorgho",
              "Le soja",
              "Le cacao"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le cacao est une culture arborée du sud forestier. Le mil, le sorgho et le soja sont des cultures herbacées du nord."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le nord des savanes",
          "stepTheme": "Le nord des savanes",
          "stepBadge": "Le nord des savanes",
          "paragraphText": "• Cultures herbacées : plantes basses, comme le maïs, le soja, l'arachide, le coton, le riz, le haricot, le sorgho et le mil.\nAu nord, elles sont souvent associées à une arboriculture : anacardier, karité, manguier.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q3",
            "type": "mcq",
            "prompt": "Quel groupe de cultures est typique du nord des savanes ?",
            "options": [
              "Cacao, café et hévéa",
              "Palmier à huile et banane",
              "Coton, maïs, arachide et anacardier",
              "Hévéa et palmier à huile"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le nord porte des cultures herbacées (coton, maïs, arachide) et des arbres comme l'anacardier. Cacao, café, hévéa et palmier sont des cultures du sud."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "L'anacardier, un arbre du nord",
          "stepTheme": "L'anacardier, un arbre du nord",
          "stepBadge": "L'anacardier, un arbre du nord",
          "paragraphText": "L'anacardier (noix de cajou) est un arbre, mais il pousse surtout au nord.\nAu nord, l'arboriculture (anacardier, karité, manguier) complète les cultures herbacées.\nToutes les cultures arborées ne sont donc pas au sud.",
          "konanTip": "Arbre ne veut pas dire forcément sud : pense à l'anacardier et au karité.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q4",
            "type": "mcq",
            "prompt": "Dans quelle région se trouve surtout l'anacardier ?",
            "options": [
              "Au sud, dans la région forestière",
              "Au nord, dans la région des savanes",
              "Uniquement sur le littoral",
              "Dans les lagunes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'anacardier est un arbre des savanes du nord, comme le karité et le manguier."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les cultures vivrières",
          "stepTheme": "Les cultures vivrières",
          "stepBadge": "Les cultures vivrières",
          "paragraphText": "• Cultures vivrières : cultures destinées surtout à nourrir la population.\nExemples : igname, manioc, banane plantain, riz, maïs.\nElles occupent aussi une place dans le commerce intérieur.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q5",
            "type": "mcq",
            "prompt": "À quoi servent d'abord les cultures vivrières ?",
            "options": [
              "À nourrir la population",
              "À être exportées en Europe",
              "À fabriquer du caoutchouc",
              "À produire de l'huile pour l'industrie uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les cultures vivrières constituent l'essentiel de l'alimentation des Ivoiriens."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Les cultures d'exportation",
          "stepTheme": "Les cultures d'exportation",
          "stepBadge": "Les cultures d'exportation",
          "paragraphText": "• Cultures d'exportation (ou industrielles) : cultures vendues surtout à l'étranger ou transformées par l'industrie.\nExemples : cacao, café, hévéa, coton, anacarde.\nElles rapportent des devises à l'État.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces cultures est d'abord une culture d'exportation ?",
            "options": [
              "Le cacao",
              "L'igname",
              "Le manioc",
              "La banane plantain"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cacao est surtout exporté. L'igname, le manioc et la banane plantain sont des cultures vivrières."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Classer des cultures",
          "stepTheme": "Classer des cultures",
          "stepBadge": "Classer des cultures",
          "paragraphText": "Pour classer une culture, pose deux questions :\n• Où pousse-t-elle ? (sud forestier ou nord des savanes)\n• À quoi sert-elle ? (nourrir la population ou exporter)\nExemple : le coton est une culture herbacée du nord, destinée à l'industrie et à l'exportation.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q7",
            "type": "mcq",
            "prompt": "Comment classer le coton ?",
            "options": [
              "Culture arborée du sud, destinée à l'alimentation",
              "Culture herbacée du nord, destinée à l'industrie et à l'exportation",
              "Culture vivrière du sud forestier",
              "Culture arborée du littoral"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le coton est une plante basse (herbacée) cultivée au nord ; il est égrené, transformé et exporté."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q1",
          "type": "mcq",
          "prompt": "De quoi dépendent les régions agricoles de la Côte d'Ivoire ?",
          "options": [
            "Du nombre de routes",
            "Des frontières administratives",
            "Du climat et des sols",
            "Du nombre d'usines"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le climat et la nature des sols déterminent ce qu'on peut cultiver dans chaque région."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q2",
          "type": "mcq",
          "prompt": "Quelle culture est typique de la région forestière du sud ?",
          "options": [
            "Le mil",
            "Le sorgho",
            "Le soja",
            "Le cacao"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le cacao est une culture arborée du sud forestier. Le mil, le sorgho et le soja sont des cultures herbacées du nord."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q3",
          "type": "mcq",
          "prompt": "Quel groupe de cultures est typique du nord des savanes ?",
          "options": [
            "Cacao, café et hévéa",
            "Palmier à huile et banane",
            "Coton, maïs, arachide et anacardier",
            "Hévéa et palmier à huile"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le nord porte des cultures herbacées (coton, maïs, arachide) et des arbres comme l'anacardier. Cacao, café, hévéa et palmier sont des cultures du sud."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q4",
          "type": "mcq",
          "prompt": "Dans quelle région se trouve surtout l'anacardier ?",
          "options": [
            "Au sud, dans la région forestière",
            "Au nord, dans la région des savanes",
            "Uniquement sur le littoral",
            "Dans les lagunes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'anacardier est un arbre des savanes du nord, comme le karité et le manguier."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q5",
          "type": "mcq",
          "prompt": "À quoi servent d'abord les cultures vivrières ?",
          "options": [
            "À nourrir la population",
            "À être exportées en Europe",
            "À fabriquer du caoutchouc",
            "À produire de l'huile pour l'industrie uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cultures vivrières constituent l'essentiel de l'alimentation des Ivoiriens."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces cultures est d'abord une culture d'exportation ?",
          "options": [
            "Le cacao",
            "L'igname",
            "Le manioc",
            "La banane plantain"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cacao est surtout exporté. L'igname, le manioc et la banane plantain sont des cultures vivrières."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p02_q7",
          "type": "mcq",
          "prompt": "Comment classer le coton ?",
          "options": [
            "Culture arborée du sud, destinée à l'alimentation",
            "Culture herbacée du nord, destinée à l'industrie et à l'exportation",
            "Culture vivrière du sud forestier",
            "Culture arborée du littoral"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le coton est une plante basse (herbacée) cultivée au nord ; il est égrené, transformé et exporté."
        }
      ]
    },
    {
      "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03",
      "order": 3,
      "title": "L'importance de l'agriculture",
      "summary": "Les grandes productions ivoiriennes et le poids de l'agriculture dans l'emploi, les exportations et le budget.",
      "conceptExplanation": "La Côte d'Ivoire est le 1er producteur mondial de cacao (environ 40 % de la production mondiale) et de noix de cajou.\nElle est le 1er producteur africain de caoutchouc et un grand producteur de coton.\nL'agriculture occupe environ 66 % de la population active et fournit environ 70 % des recettes d'exportation.\nElle alimente le budget de l'État, par exemple grâce aux droits uniques de sortie (DUS).",
      "keyRule": "L'agriculture emploie environ deux actifs sur trois et fournit environ 70 % des recettes d'exportation.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer le poids de l'agriculture",
        "statement": "Montre que l'agriculture est un pilier de l'économie ivoirienne.",
        "methodSteps": [
          "Emploi : environ 66 % de la population active.",
          "Exportations : environ 70 % des recettes.",
          "Budget : taxes comme les DUS sur le café, le cacao et le bois."
        ],
        "conclusion": "L'agriculture fournit des emplois, des devises et des recettes fiscales : c'est un pilier de l'économie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le cacao, première richesse",
          "stepTheme": "Le cacao, première richesse",
          "stepBadge": "Le cacao, première richesse",
          "paragraphText": "La Côte d'Ivoire est le 1er producteur mondial de cacao.\nLe PDF donne 1 400 000 tonnes, soit environ 40 % de la production mondiale.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q1",
            "type": "mcq",
            "prompt": "Quel rang la Côte d'Ivoire occupe-t-elle dans la production mondiale de cacao ?",
            "options": [
              "3e producteur africain",
              "15e producteur mondial",
              "1er producteur mondial",
              "1er producteur africain seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La Côte d'Ivoire est le premier producteur mondial de cacao, avec environ 40 % de la production."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les autres grandes productions",
          "stepTheme": "Les autres grandes productions",
          "stepBadge": "Les autres grandes productions",
          "paragraphText": "• Noix de cajou : 1er producteur mondial en 2017 (715 000 t).\n• Caoutchouc : 1er producteur africain en 2015 (340 000 t).\n• Coton : 3e producteur africain en 2015 (450 000 t).\n• Noix de cola : 1er exportateur mondial.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q2",
            "type": "mcq",
            "prompt": "Pour quelle production la Côte d'Ivoire était-elle 1er producteur mondial en 2017 ?",
            "options": [
              "Le caoutchouc",
              "Le coton",
              "Le café",
              "La noix de cajou"
            ],
            "correctAnswerIndex": 3,
            "explanation": "En 2017, elle est 1er producteur mondial de noix de cajou. Pour le caoutchouc, elle est 1er producteur africain ; pour le coton, 3e producteur africain."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Erreur dans le PDF : le café",
          "stepTheme": "Erreur dans le PDF : le café",
          "stepBadge": "Erreur dans le PDF : le café",
          "paragraphText": "Le PDF indique 1 230 000 t de café pour un 15e rang mondial.\nC'est une erreur d'unité : la production ivoirienne de café tourne autour de 100 000 à 130 000 t par an.\nRetiens surtout que le café a beaucoup reculé face au cacao.",
          "konanTip": "Un 15e producteur mondial ne peut pas produire presque autant de café que de cacao.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q3",
            "type": "mcq",
            "prompt": "Quelle affirmation sur le café ivoirien est juste ?",
            "options": [
              "La Côte d'Ivoire en est le 1er producteur mondial",
              "Elle en produit plus de 1 million de tonnes par an",
              "Sa production est bien plus faible que celle du cacao",
              "Il est cultivé surtout dans le nord des savanes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le café a reculé et ne pèse plus qu'environ 100 000 t, loin du cacao. Il est cultivé dans le sud forestier."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Un grand employeur",
          "stepTheme": "Un grand employeur",
          "stepBadge": "Un grand employeur",
          "paragraphText": "L'agriculture occupe environ 66 % de la population active.\nElle fait vivre la majorité des ménages ruraux.\nC'est le premier employeur du pays.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q4",
            "type": "mcq",
            "prompt": "Environ quelle part de la population active l'agriculture occupe-t-elle ?",
            "options": [
              "14 %",
              "40 %",
              "90 %",
              "66 %"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Environ deux actifs sur trois travaillent dans l'agriculture (66 %)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Une source de devises",
          "stepTheme": "Une source de devises",
          "stepBadge": "Une source de devises",
          "paragraphText": "L'agriculture fournit environ 70 % des recettes d'exportation.\nCes exportations font entrer des devises dans le pays.\nLes devises servent à acheter à l'étranger et à investir.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q5",
            "type": "mcq",
            "prompt": "Quelle part des recettes d'exportation l'agriculture fournit-elle ?",
            "options": [
              "Environ 70 %",
              "Environ 7 %",
              "Environ 30 %",
              "La totalité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Environ 70 % des recettes d'exportation viennent des produits agricoles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Les droits uniques de sortie",
          "stepTheme": "Les droits uniques de sortie",
          "stepBadge": "Les droits uniques de sortie",
          "paragraphText": "• DUS (droits uniques de sortie) : taxes prélevées par l'État sur certains produits exportés, comme le café, le cacao et le bois.\nLes agriculteurs paient aussi l'impôt foncier.\nL'agriculture alimente ainsi directement le budget de l'État.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q6",
            "type": "mcq",
            "prompt": "Sur quoi les droits uniques de sortie (DUS) sont-ils prélevés ?",
            "options": [
              "Sur les importations de voitures",
              "Sur les exportations de café, de cacao et de bois",
              "Sur les salaires des fonctionnaires",
              "Sur les billets d'avion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les DUS sont des taxes à l'exportation sur le café, le cacao et le bois."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Justifier en trois arguments",
          "stepTheme": "Justifier en trois arguments",
          "stepBadge": "Justifier en trois arguments",
          "paragraphText": "Pour montrer l'importance de l'agriculture, cite trois arguments chiffrés :\n• l'emploi (environ 66 % des actifs) ;\n• les exportations (environ 70 % des recettes) ;\n• le budget de l'État (DUS, impôt foncier).",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q7",
            "type": "mcq",
            "prompt": "Quel argument montre le mieux le rôle de l'agriculture dans le budget de l'État ?",
            "options": [
              "Le relief plat du pays",
              "Les DUS prélevés sur le café, le cacao et le bois",
              "La diversité des climats",
              "La création de la SOTRA"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les DUS sont des recettes fiscales tirées de l'agriculture. Le relief et le climat sont des conditions naturelles, pas des recettes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q1",
          "type": "mcq",
          "prompt": "Quel rang la Côte d'Ivoire occupe-t-elle dans la production mondiale de cacao ?",
          "options": [
            "3e producteur africain",
            "15e producteur mondial",
            "1er producteur mondial",
            "1er producteur africain seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La Côte d'Ivoire est le premier producteur mondial de cacao, avec environ 40 % de la production."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q2",
          "type": "mcq",
          "prompt": "Pour quelle production la Côte d'Ivoire était-elle 1er producteur mondial en 2017 ?",
          "options": [
            "Le caoutchouc",
            "Le coton",
            "Le café",
            "La noix de cajou"
          ],
          "correctAnswerIndex": 3,
          "explanation": "En 2017, elle est 1er producteur mondial de noix de cajou. Pour le caoutchouc, elle est 1er producteur africain ; pour le coton, 3e producteur africain."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q3",
          "type": "mcq",
          "prompt": "Quelle affirmation sur le café ivoirien est juste ?",
          "options": [
            "La Côte d'Ivoire en est le 1er producteur mondial",
            "Elle en produit plus de 1 million de tonnes par an",
            "Sa production est bien plus faible que celle du cacao",
            "Il est cultivé surtout dans le nord des savanes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le café a reculé et ne pèse plus qu'environ 100 000 t, loin du cacao. Il est cultivé dans le sud forestier."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q4",
          "type": "mcq",
          "prompt": "Environ quelle part de la population active l'agriculture occupe-t-elle ?",
          "options": [
            "14 %",
            "40 %",
            "90 %",
            "66 %"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Environ deux actifs sur trois travaillent dans l'agriculture (66 %)."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q5",
          "type": "mcq",
          "prompt": "Quelle part des recettes d'exportation l'agriculture fournit-elle ?",
          "options": [
            "Environ 70 %",
            "Environ 7 %",
            "Environ 30 %",
            "La totalité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Environ 70 % des recettes d'exportation viennent des produits agricoles."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q6",
          "type": "mcq",
          "prompt": "Sur quoi les droits uniques de sortie (DUS) sont-ils prélevés ?",
          "options": [
            "Sur les importations de voitures",
            "Sur les exportations de café, de cacao et de bois",
            "Sur les salaires des fonctionnaires",
            "Sur les billets d'avion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les DUS sont des taxes à l'exportation sur le café, le cacao et le bois."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p03_q7",
          "type": "mcq",
          "prompt": "Quel argument montre le mieux le rôle de l'agriculture dans le budget de l'État ?",
          "options": [
            "Le relief plat du pays",
            "Les DUS prélevés sur le café, le cacao et le bois",
            "La diversité des climats",
            "La création de la SOTRA"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les DUS sont des recettes fiscales tirées de l'agriculture. Le relief et le climat sont des conditions naturelles, pas des recettes."
        }
      ]
    },
    {
      "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04",
      "order": 4,
      "title": "Élevage, pêche et exploitation forestière",
      "summary": "Les autres activités du secteur primaire : un élevage et une pêche insuffisants, une forêt menacée.",
      "conceptExplanation": "L'élevage se pratique surtout au nord, mais aussi au sud sous palmeraies.\nIl concerne le gros bétail (bovins), le petit bétail (ovins, caprins, porcins) et la volaille.\nLa pêche est artisanale ou industrielle (101 000 t en 2019).\nL'élevage et la pêche ne couvrent pas la consommation nationale.\nL'exploitation forestière a joué un grand rôle, mais l'exploitation abusive a fortement réduit la forêt.",
      "keyRule": "L'élevage et la pêche ne couvrent pas les besoins nationaux ; la forêt est menacée par l'exploitation abusive.",
      "formulas": [],
      "workedExample": {
        "title": "Lire la production de pêche de 2019",
        "statement": "Pêche artisanale : 59 590 t ; pêche industrielle : 41 410 t. Quel est le total ?",
        "methodSteps": [
          "On additionne : 59 590 + 41 410.",
          "59 590 + 41 410 = 101 000 t."
        ],
        "conclusion": "En 2019, la pêche a produit 101 000 t, dont plus de la moitié par la pêche artisanale."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Où se pratique l'élevage ?",
          "stepTheme": "Où se pratique l'élevage ?",
          "stepBadge": "Où se pratique l'élevage ?",
          "paragraphText": "La région nord est la plus favorable à l'élevage.\nAu sud, un élevage sous palmeraies se développe.\nL'élevage est pratiqué de façon traditionnelle ou moderne.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q1",
            "type": "mcq",
            "prompt": "Quelle région de la Côte d'Ivoire est la plus favorable à l'élevage ?",
            "options": [
              "Le nord",
              "Le littoral",
              "La forêt du sud-ouest",
              "Les lagunes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les savanes du nord sont les plus favorables à l'élevage. Au sud, il se développe surtout sous palmeraies."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Gros bétail, petit bétail, volaille",
          "stepTheme": "Gros bétail, petit bétail, volaille",
          "stepBadge": "Gros bétail, petit bétail, volaille",
          "paragraphText": "• Gros bétail : les bovins, qui fournissent viande et lait (environ 1,3 million de têtes).\n• Petit bétail : ovins, caprins et porcins.\n• Aviculture : élevage de volailles, en fort développement.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q2",
            "type": "mcq",
            "prompt": "Lequel de ces animaux fait partie du gros bétail ?",
            "options": [
              "Le mouton",
              "La chèvre",
              "Le porc",
              "Le bœuf"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le bœuf est un bovin : c'est du gros bétail. Le mouton, la chèvre et le porc forment le petit bétail."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une production insuffisante",
          "stepTheme": "Une production insuffisante",
          "stepBadge": "Une production insuffisante",
          "paragraphText": "Les productions de l'élevage ne couvrent pas la consommation nationale.\nPour la viande et le lait, la Côte d'Ivoire reste déficitaire.\nElle doit donc importer.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q3",
            "type": "mcq",
            "prompt": "La production animale ivoirienne couvre-t-elle la consommation nationale ?",
            "options": [
              "Oui, elle est largement excédentaire",
              "Oui, grâce aux bovins du sud",
              "Non, le pays reste déficitaire et doit importer",
              "Oui, sauf pour la volaille"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'élevage ne couvre pas les besoins : le pays importe viande et produits laitiers."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Deux formes de pêche",
          "stepTheme": "Deux formes de pêche",
          "stepBadge": "Deux formes de pêche",
          "paragraphText": "• Pêche industrielle : en haute mer, par des compagnies, avec des outils performants.\n• Pêche artisanale : par les populations du littoral et des lagunes.\nAtouts : un réseau hydrographique dense, la façade sur le golfe de Guinée, les ports de pêche d'Abidjan et de San-Pedro.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q4",
            "type": "mcq",
            "prompt": "Qui pratique la pêche artisanale ?",
            "options": [
              "Les compagnies de pêche en haute mer",
              "Uniquement les éleveurs du nord",
              "Les populations du littoral et des lagunes",
              "Les sociétés de transport maritime"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La pêche artisanale est pratiquée par les riverains de la côte et des lagunes. La pêche en haute mer avec de gros moyens est industrielle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Chiffres de la pêche : attention",
          "stepTheme": "Chiffres de la pêche : attention",
          "stepBadge": "Chiffres de la pêche : attention",
          "paragraphText": "Le cours donne 101 000 t pêchées en 2019 (59 590 t artisanales et 41 410 t industrielles).\nLa situation d'évaluation du même PDF parle de 52 000 t en 2019 : les deux chiffres ne concordent pas.\nRetiens l'idée sûre : la pêche ne couvre qu'une petite partie de la consommation et le pays importe massivement du poisson.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q5",
            "type": "mcq",
            "prompt": "Que faut-il retenir de la pêche ivoirienne ?",
            "options": [
              "Elle ne couvre pas la consommation et le pays importe beaucoup de poisson",
              "Elle couvre largement la consommation nationale",
              "Elle est uniquement industrielle",
              "Elle se pratique seulement dans le nord"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Malgré ses atouts, la pêche est insuffisante : le pays importe une grande partie du poisson consommé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'exploitation forestière",
          "stepTheme": "L'exploitation forestière",
          "stepBadge": "L'exploitation forestière",
          "paragraphText": "L'exploitation du bois a longtemps soutenu l'économie.\nElle a favorisé des scieries à San-Pedro, Gagnoa, Guiglo, Adzopé, Agnibilékrou.\nEssences exploitées : makoré, sipo, tiama, niangon, samba, iroko…\nPrès de 70 % du bois est exporté.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q6",
            "type": "mcq",
            "prompt": "Quelle part de la production de bois est destinée à l'exportation ?",
            "options": [
              "Près de 7 %",
              "Moins de 20 %",
              "La totalité",
              "Près de 70 %"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Près de 70 % du bois produit est exporté sur les marchés internationaux."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Une forêt en danger",
          "stepTheme": "Une forêt en danger",
          "stepBadge": "Une forêt en danger",
          "paragraphText": "L'exploitation abusive a fortement réduit le massif forestier.\nLa forêt est passée de 16 millions d'hectares en 1960 à moins de 3 millions aujourd'hui.\nL'exploitation forestière est donc une activité en danger.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q7",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que l'exploitation forestière est une activité en danger ?",
            "options": [
              "Parce que le bois ne s'exporte plus du tout",
              "Parce que l'exploitation abusive a détruit une grande partie de la forêt",
              "Parce que la forêt s'étend chaque année",
              "Parce qu'il n'y a jamais eu de scieries"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La surexploitation a réduit la forêt de 16 millions d'hectares à moins de 3 millions : la ressource s'épuise."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q1",
          "type": "mcq",
          "prompt": "Quelle région de la Côte d'Ivoire est la plus favorable à l'élevage ?",
          "options": [
            "Le nord",
            "Le littoral",
            "La forêt du sud-ouest",
            "Les lagunes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les savanes du nord sont les plus favorables à l'élevage. Au sud, il se développe surtout sous palmeraies."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q2",
          "type": "mcq",
          "prompt": "Lequel de ces animaux fait partie du gros bétail ?",
          "options": [
            "Le mouton",
            "La chèvre",
            "Le porc",
            "Le bœuf"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le bœuf est un bovin : c'est du gros bétail. Le mouton, la chèvre et le porc forment le petit bétail."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q3",
          "type": "mcq",
          "prompt": "La production animale ivoirienne couvre-t-elle la consommation nationale ?",
          "options": [
            "Oui, elle est largement excédentaire",
            "Oui, grâce aux bovins du sud",
            "Non, le pays reste déficitaire et doit importer",
            "Oui, sauf pour la volaille"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'élevage ne couvre pas les besoins : le pays importe viande et produits laitiers."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q4",
          "type": "mcq",
          "prompt": "Qui pratique la pêche artisanale ?",
          "options": [
            "Les compagnies de pêche en haute mer",
            "Uniquement les éleveurs du nord",
            "Les populations du littoral et des lagunes",
            "Les sociétés de transport maritime"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La pêche artisanale est pratiquée par les riverains de la côte et des lagunes. La pêche en haute mer avec de gros moyens est industrielle."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q5",
          "type": "mcq",
          "prompt": "Que faut-il retenir de la pêche ivoirienne ?",
          "options": [
            "Elle ne couvre pas la consommation et le pays importe beaucoup de poisson",
            "Elle couvre largement la consommation nationale",
            "Elle est uniquement industrielle",
            "Elle se pratique seulement dans le nord"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Malgré ses atouts, la pêche est insuffisante : le pays importe une grande partie du poisson consommé."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q6",
          "type": "mcq",
          "prompt": "Quelle part de la production de bois est destinée à l'exportation ?",
          "options": [
            "Près de 7 %",
            "Moins de 20 %",
            "La totalité",
            "Près de 70 %"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Près de 70 % du bois produit est exporté sur les marchés internationaux."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p04_q7",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que l'exploitation forestière est une activité en danger ?",
          "options": [
            "Parce que le bois ne s'exporte plus du tout",
            "Parce que l'exploitation abusive a détruit une grande partie de la forêt",
            "Parce que la forêt s'étend chaque année",
            "Parce qu'il n'y a jamais eu de scieries"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La surexploitation a réduit la forêt de 16 millions d'hectares à moins de 3 millions : la ressource s'épuise."
        }
      ]
    },
    {
      "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05",
      "order": 5,
      "title": "L'industrialisation : phases et types d'industries",
      "summary": "Les quatre phases de l'industrialisation ivoirienne et les grands types d'industries.",
      "conceptExplanation": "L'industrialisation ivoirienne a connu quatre phases :\n1960-1970 : l'import-substitution ;\n1970-1980 : la régionalisation industrielle ;\n1980-1994 : la stagnation ;\ndepuis 1994 : la reprise et la diversification.\nLes industries agroalimentaires dominent ; on trouve aussi le textile, le bois, la chimie, le bâtiment et les industries d'extraction.",
      "keyRule": "Import-substitution, régionalisation, stagnation, puis reprise depuis 1994.",
      "formulas": [],
      "workedExample": {
        "title": "Placer une phase",
        "statement": "À quelle phase correspond la période 1980-1994 ?",
        "methodSteps": [
          "Les années 1980 sont celles de la crise économique.",
          "La crise freine les investissements jusqu'à la dévaluation de 1994."
        ],
        "conclusion": "1980-1994 est la phase de stagnation de l'industrie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'import-substitution (1960-1970)",
          "stepTheme": "L'import-substitution (1960-1970)",
          "stepBadge": "L'import-substitution (1960-1970)",
          "paragraphText": "• Import-substitution : produire sur place ce que l'on importait auparavant.\nC'est la première phase de l'industrialisation ivoirienne, de 1960 à 1970.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q1",
            "type": "mcq",
            "prompt": "Que signifie « import-substitution » ?",
            "options": [
              "Importer davantage de produits finis",
              "Produire sur place ce qu'on importait auparavant",
              "Exporter uniquement des matières premières",
              "Fermer les usines étrangères"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On remplace les importations par une production locale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les quatre phases",
          "stepTheme": "Les quatre phases",
          "stepBadge": "Les quatre phases",
          "paragraphText": "• 1960-1970 : import-substitution.\n• 1970-1980 : régionalisation industrielle (des usines à l'intérieur du pays).\n• 1980-1994 : stagnation de l'industrie.\n• Depuis 1994 : reprise et diversification.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q2",
            "type": "mcq",
            "prompt": "Quelle phase de l'industrialisation correspond aux années 1970-1980 ?",
            "options": [
              "La stagnation de l'industrie",
              "L'import-substitution",
              "La reprise et la diversification",
              "La régionalisation industrielle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "De 1970 à 1980, l'État implante des industries dans les régions : c'est la régionalisation industrielle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "1994, une date charnière",
          "stepTheme": "1994, une date charnière",
          "stepBadge": "1994, une date charnière",
          "paragraphText": "La stagnation dure de 1980 à 1994.\nEn 1994, le franc CFA est dévalué : cela marque le début de la reprise.\nNe place pas la reprise en 1980 : 1980 marque au contraire le début de la crise.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q3",
            "type": "mcq",
            "prompt": "Quel événement de 1994 marque la fin de la stagnation industrielle ?",
            "options": [
              "La dévaluation du franc CFA",
              "L'indépendance du pays",
              "La création de la SODEPALM",
              "La crise post-électorale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dévaluation du franc CFA en 1994 ouvre la phase de reprise et de diversification."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les industries agroalimentaires",
          "stepTheme": "Les industries agroalimentaires",
          "stepBadge": "Les industries agroalimentaires",
          "paragraphText": "Les industries agroalimentaires sont le poumon de l'industrie ivoirienne : elles prédominent.\nExemples : les brasseries (SOLIBRA, BRASSIVOIRE), les conserveries de poisson.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q4",
            "type": "mcq",
            "prompt": "Quel type d'industrie domine en Côte d'Ivoire ?",
            "options": [
              "L'industrie automobile",
              "L'industrie aéronautique",
              "L'industrie agroalimentaire",
              "L'industrie lourde"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'agroalimentaire est le poumon de l'industrie ivoirienne ; l'industrie lourde est presque absente."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Textile et bois",
          "stepTheme": "Textile et bois",
          "stepBadge": "Textile et bois",
          "paragraphText": "Les premières industries ont été textiles : filature, tissage, confection, sacherie.\nExemples : GONFREVILLE (Bouaké), FILTISAC et UNIWAX (Abidjan).",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q5",
            "type": "mcq",
            "prompt": "Où se trouve l'usine textile GONFREVILLE ?",
            "options": [
              "À San-Pedro",
              "À Korhogo",
              "À Grand-Bassam",
              "À Bouaké"
            ],
            "correctAnswerIndex": 3,
            "explanation": "GONFREVILLE est l'usine textile historique de Bouaké."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Chimie, bâtiment, extraction",
          "stepTheme": "Chimie, bâtiment, extraction",
          "stepBadge": "Chimie, bâtiment, extraction",
          "paragraphText": "• Chimie, métallurgie, bâtiment : engrais, produits phytosanitaires, peinture (exemples : Seigneurie, SOTACI).\n• Extraction : exploitation des ressources minières et énergétiques (exemples : SODEMI, PETROCI).",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q6",
            "type": "mcq",
            "prompt": "À quel type d'industrie appartient la PETROCI ?",
            "options": [
              "Les industries agroalimentaires",
              "Les industries textiles",
              "Les industries d'extraction",
              "Le commerce de détail"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La PETROCI exploite des ressources énergétiques (pétrole, gaz) : c'est une industrie d'extraction."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Construire l'axe chronologique",
          "stepTheme": "Construire l'axe chronologique",
          "stepBadge": "Construire l'axe chronologique",
          "paragraphText": "Pour compléter un axe des phases, repère les dates clés : 1960, 1970, 1980, 1994.\nPuis place dans l'ordre : import-substitution, régionalisation, stagnation, reprise.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q7",
            "type": "mcq",
            "prompt": "Quel ordre des phases est correct ?",
            "options": [
              "Régionalisation, import-substitution, reprise, stagnation",
              "Import-substitution, régionalisation, stagnation, reprise",
              "Stagnation, reprise, import-substitution, régionalisation",
              "Reprise, stagnation, régionalisation, import-substitution"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On remplace d'abord les importations, puis on régionalise, la crise fait stagner l'industrie, et 1994 ouvre la reprise."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q1",
          "type": "mcq",
          "prompt": "Que signifie « import-substitution » ?",
          "options": [
            "Importer davantage de produits finis",
            "Produire sur place ce qu'on importait auparavant",
            "Exporter uniquement des matières premières",
            "Fermer les usines étrangères"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On remplace les importations par une production locale."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q2",
          "type": "mcq",
          "prompt": "Quelle phase de l'industrialisation correspond aux années 1970-1980 ?",
          "options": [
            "La stagnation de l'industrie",
            "L'import-substitution",
            "La reprise et la diversification",
            "La régionalisation industrielle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "De 1970 à 1980, l'État implante des industries dans les régions : c'est la régionalisation industrielle."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q3",
          "type": "mcq",
          "prompt": "Quel événement de 1994 marque la fin de la stagnation industrielle ?",
          "options": [
            "La dévaluation du franc CFA",
            "L'indépendance du pays",
            "La création de la SODEPALM",
            "La crise post-électorale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dévaluation du franc CFA en 1994 ouvre la phase de reprise et de diversification."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q4",
          "type": "mcq",
          "prompt": "Quel type d'industrie domine en Côte d'Ivoire ?",
          "options": [
            "L'industrie automobile",
            "L'industrie aéronautique",
            "L'industrie agroalimentaire",
            "L'industrie lourde"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'agroalimentaire est le poumon de l'industrie ivoirienne ; l'industrie lourde est presque absente."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q5",
          "type": "mcq",
          "prompt": "Où se trouve l'usine textile GONFREVILLE ?",
          "options": [
            "À San-Pedro",
            "À Korhogo",
            "À Grand-Bassam",
            "À Bouaké"
          ],
          "correctAnswerIndex": 3,
          "explanation": "GONFREVILLE est l'usine textile historique de Bouaké."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q6",
          "type": "mcq",
          "prompt": "À quel type d'industrie appartient la PETROCI ?",
          "options": [
            "Les industries agroalimentaires",
            "Les industries textiles",
            "Les industries d'extraction",
            "Le commerce de détail"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La PETROCI exploite des ressources énergétiques (pétrole, gaz) : c'est une industrie d'extraction."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p05_q7",
          "type": "mcq",
          "prompt": "Quel ordre des phases est correct ?",
          "options": [
            "Régionalisation, import-substitution, reprise, stagnation",
            "Import-substitution, régionalisation, stagnation, reprise",
            "Stagnation, reprise, import-substitution, régionalisation",
            "Reprise, stagnation, régionalisation, import-substitution"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On remplace d'abord les importations, puis on régionalise, la crise fait stagner l'industrie, et 1994 ouvre la reprise."
        }
      ]
    },
    {
      "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06",
      "order": 6,
      "title": "Les foyers et l'importance de l'industrie",
      "summary": "Où sont les industries, leurs caractères et leur apport à l'économie.",
      "conceptExplanation": "Les industries se concentrent au sud, surtout dans le District d'Abidjan (environ 70 %).\nD'autres foyers existent : Grand-Bassam, Bonoua, Yamoussoukro, Bouaké, Korhogo, San-Pedro.\nCaractères : industries légères, poids de l'agro-industrie, inégale répartition, concentration à Abidjan.\nL'industrie emploie 14 % des actifs, crée de la valeur ajoutée, paie des impôts et transforme une partie des produits agricoles.",
      "keyRule": "Une industrie légère, dominée par l'agro-industrie et concentrée à Abidjan.",
      "formulas": [],
      "workedExample": {
        "title": "Mesurer la transformation locale",
        "statement": "En 2015, la Côte d'Ivoire transforme 35 % de son cacao et 5 % de ses noix de cajou. Que peut-on en conclure ?",
        "methodSteps": [
          "35 % du cacao est transformé sur place : c'est une part réelle mais minoritaire.",
          "Seulement 5 % du cajou est transformé : presque tout part brut."
        ],
        "conclusion": "La transformation locale progresse mais reste faible : la plupart des produits sont encore exportés bruts."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Abidjan, premier foyer industriel",
          "stepTheme": "Abidjan, premier foyer industriel",
          "stepBadge": "Abidjan, premier foyer industriel",
          "paragraphText": "La plupart des industries se concentrent dans le District d'Abidjan : environ 70 %.\nD'autres foyers : Grand-Bassam et Bonoua (Sud-Comoé), Yamoussoukro, Bouaké, Korhogo, San-Pedro.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q1",
            "type": "mcq",
            "prompt": "Quelle part des industries ivoiriennes se trouve dans le District d'Abidjan ?",
            "options": [
              "Environ 70 %",
              "Environ 10 %",
              "Environ 30 %",
              "La totalité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Environ 70 % des industries sont à Abidjan : la répartition est très inégale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les caractères de l'industrie",
          "stepTheme": "Les caractères de l'industrie",
          "stepBadge": "Les caractères de l'industrie",
          "paragraphText": "L'industrie ivoirienne se caractérise par :\n• la prédominance des industries légères ;\n• l'importance de l'agro-industrie ;\n• l'inégale répartition des usines ;\n• la forte concentration à Abidjan.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q2",
            "type": "mcq",
            "prompt": "Lequel de ces caractères décrit l'industrie ivoirienne ?",
            "options": [
              "La prédominance des industries légères",
              "La domination de l'industrie lourde",
              "Une répartition égale dans toutes les régions",
              "L'absence d'agro-industrie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'industrie ivoirienne est surtout légère et agroalimentaire, et concentrée au sud."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Industrie légère ou lourde ?",
          "stepTheme": "Industrie légère ou lourde ?",
          "stepBadge": "Industrie légère ou lourde ?",
          "paragraphText": "• Industrie légère : transforme des produits pour la consommation (boissons, textile, huile).\n• Industrie lourde : sidérurgie, machines, grandes usines de base.\nLa Côte d'Ivoire a surtout des industries légères ; l'industrie lourde y est presque absente.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces usines est une industrie légère ?",
            "options": [
              "Une aciérie",
              "Une brasserie",
              "Une usine de locomotives",
              "Un haut-fourneau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La brasserie fabrique un produit de consommation : c'est une industrie légère. Les trois autres relèvent de l'industrie lourde."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le poids de l'industrie",
          "stepTheme": "Le poids de l'industrie",
          "stepBadge": "Le poids de l'industrie",
          "paragraphText": "L'industrie emploie 14 % de la population active.\nSelon la Banque mondiale, elle produit environ 30 % du PIB (2018).\nElle est en pleine croissance depuis la sortie de la crise de 2010-2011.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q4",
            "type": "mcq",
            "prompt": "Quelle part de la population active l'industrie emploie-t-elle ?",
            "options": [
              "66 %",
              "70 %",
              "14 %",
              "40 %"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'industrie emploie 14 % des actifs, bien moins que l'agriculture (environ 66 %)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Une source d'impôts",
          "stepTheme": "Une source d'impôts",
          "stepBadge": "Une source d'impôts",
          "paragraphText": "Les industries paient des impôts directs (patentes, licences).\nElles paient aussi l'impôt sur les bénéfices industriels.\nElles renflouent ainsi les caisses de l'État.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q5",
            "type": "mcq",
            "prompt": "Comment l'industrie contribue-t-elle aux recettes de l'État ?",
            "options": [
              "Par les droits uniques de sortie sur le cacao",
              "Par l'impôt foncier des planteurs",
              "Elle ne paie aucun impôt",
              "Par les patentes, les licences et l'impôt sur les bénéfices"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les patentes, licences et l'impôt sur les bénéfices industriels sont payés par les entreprises. Les DUS et l'impôt foncier concernent l'agriculture."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La transformation locale",
          "stepTheme": "La transformation locale",
          "stepBadge": "La transformation locale",
          "paragraphText": "En 2015 :\n• 35 % du cacao est transformé sur place ;\n• environ la moitié du coton graine est égrenée localement ;\n• tout le caoutchouc subit une première transformation ;\n• seulement 5 % des noix de cajou sont transformées.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q6",
            "type": "mcq",
            "prompt": "Quelle production était la MOINS transformée sur place en 2015 ?",
            "options": [
              "Le cacao (35 %)",
              "Le caoutchouc (100 %)",
              "La noix de cajou (5 %)",
              "Le coton (environ 50 %)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Seulement 5 % des noix de cajou étaient transformées localement : c'est la part la plus faible."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Expliquer « industrie déséquilibrée »",
          "stepTheme": "Expliquer « industrie déséquilibrée »",
          "stepBadge": "Expliquer « industrie déséquilibrée »",
          "paragraphText": "Pour expliquer qu'une industrie est déséquilibrée, donne deux faits :\n• un déséquilibre géographique (environ 70 % à Abidjan) ;\n• un déséquilibre de branches (agro-industrie dominante, industrie lourde presque absente).",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q7",
            "type": "mcq",
            "prompt": "Quel fait montre le déséquilibre géographique de l'industrie ivoirienne ?",
            "options": [
              "L'agro-industrie emploie beaucoup d'ouvriers",
              "La PETROCI exploite le pétrole",
              "Les brasseries produisent de la bière",
              "Environ 70 % des industries sont à Abidjan"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La concentration à Abidjan montre une répartition inégale sur le territoire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q1",
          "type": "mcq",
          "prompt": "Quelle part des industries ivoiriennes se trouve dans le District d'Abidjan ?",
          "options": [
            "Environ 70 %",
            "Environ 10 %",
            "Environ 30 %",
            "La totalité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Environ 70 % des industries sont à Abidjan : la répartition est très inégale."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q2",
          "type": "mcq",
          "prompt": "Lequel de ces caractères décrit l'industrie ivoirienne ?",
          "options": [
            "La prédominance des industries légères",
            "La domination de l'industrie lourde",
            "Une répartition égale dans toutes les régions",
            "L'absence d'agro-industrie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'industrie ivoirienne est surtout légère et agroalimentaire, et concentrée au sud."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces usines est une industrie légère ?",
          "options": [
            "Une aciérie",
            "Une brasserie",
            "Une usine de locomotives",
            "Un haut-fourneau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La brasserie fabrique un produit de consommation : c'est une industrie légère. Les trois autres relèvent de l'industrie lourde."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q4",
          "type": "mcq",
          "prompt": "Quelle part de la population active l'industrie emploie-t-elle ?",
          "options": [
            "66 %",
            "70 %",
            "14 %",
            "40 %"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'industrie emploie 14 % des actifs, bien moins que l'agriculture (environ 66 %)."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q5",
          "type": "mcq",
          "prompt": "Comment l'industrie contribue-t-elle aux recettes de l'État ?",
          "options": [
            "Par les droits uniques de sortie sur le cacao",
            "Par l'impôt foncier des planteurs",
            "Elle ne paie aucun impôt",
            "Par les patentes, les licences et l'impôt sur les bénéfices"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les patentes, licences et l'impôt sur les bénéfices industriels sont payés par les entreprises. Les DUS et l'impôt foncier concernent l'agriculture."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q6",
          "type": "mcq",
          "prompt": "Quelle production était la MOINS transformée sur place en 2015 ?",
          "options": [
            "Le cacao (35 %)",
            "Le caoutchouc (100 %)",
            "La noix de cajou (5 %)",
            "Le coton (environ 50 %)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Seulement 5 % des noix de cajou étaient transformées localement : c'est la part la plus faible."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p06_q7",
          "type": "mcq",
          "prompt": "Quel fait montre le déséquilibre géographique de l'industrie ivoirienne ?",
          "options": [
            "L'agro-industrie emploie beaucoup d'ouvriers",
            "La PETROCI exploite le pétrole",
            "Les brasseries produisent de la bière",
            "Environ 70 % des industries sont à Abidjan"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La concentration à Abidjan montre une répartition inégale sur le territoire."
        }
      ]
    },
    {
      "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07",
      "order": 7,
      "title": "Le commerce et la balance commerciale",
      "summary": "Le commerce intérieur et extérieur, et le calcul de la balance commerciale.",
      "conceptExplanation": "Le commerce intérieur est animé par les grandes entreprises commerciales, les grossistes, les demi-grossistes et les détaillants.\nLe commerce extérieur regroupe les exportations et les importations.\nLa Côte d'Ivoire exporte surtout des matières premières (cacao, café, coton, bois, pétrole) et importe des produits manufacturés, des équipements et des véhicules.\nBalance commerciale = exportations − importations.",
      "keyRule": "Balance commerciale = valeur des exportations − valeur des importations.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer la balance commerciale de 2017",
        "statement": "En 2017 : exportations 7 302,31 milliards F CFA ; importations 5 594,01 milliards F CFA.",
        "methodSteps": [
          "Balance = exportations − importations.",
          "7 302,31 − 5 594,01 = 1 708,30 milliards F CFA."
        ],
        "conclusion": "La balance est excédentaire de 1 708,30 milliards F CFA : le pays vend plus qu'il n'achète."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le commerce intérieur",
          "stepTheme": "Le commerce intérieur",
          "stepBadge": "Le commerce intérieur",
          "paragraphText": "• Commerce intérieur : échanges à l'intérieur du pays.\nActeurs : les grandes entreprises commerciales, les grossistes, les demi-grossistes et les détaillants (boutiquiers, femmes commerçantes des marchés).",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q1",
            "type": "mcq",
            "prompt": "Lequel de ces acteurs participe au commerce intérieur ?",
            "options": [
              "Un détaillant de quartier",
              "Un acheteur de cacao à Amsterdam",
              "Une compagnie aérienne étrangère",
              "Un port européen"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le détaillant vend à l'intérieur du pays. Les autres concernent les échanges avec l'étranger ou le transport."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le commerce extérieur",
          "stepTheme": "Le commerce extérieur",
          "stepBadge": "Le commerce extérieur",
          "paragraphText": "• Commerce extérieur : échanges avec les autres pays.\n• Exportations : ventes à l'étranger.\n• Importations : achats à l'étranger.\nIl s'évalue grâce à la balance commerciale.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q2",
            "type": "mcq",
            "prompt": "Que sont les importations ?",
            "options": [
              "Les produits vendus à l'étranger",
              "Les produits achetés à l'étranger",
              "Les produits vendus sur les marchés locaux",
              "Les impôts sur les entreprises"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Importer, c'est acheter à l'étranger ; exporter, c'est vendre à l'étranger."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Ce que la Côte d'Ivoire vend et achète",
          "stepTheme": "Ce que la Côte d'Ivoire vend et achète",
          "stepBadge": "Ce que la Côte d'Ivoire vend et achète",
          "paragraphText": "• Exportations : matières premières agricoles (cacao, café, coton), bois, pétrole.\n• Importations : produits manufacturés, biens d'équipement, véhicules, produits pétroliers, médicaments.\nPartenaires : France, États-Unis, Pays-Bas, Union européenne, UEMOA, CEDEAO.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q3",
            "type": "mcq",
            "prompt": "Quel produit la Côte d'Ivoire importe-t-elle surtout ?",
            "options": [
              "Du cacao",
              "Des biens d'équipement et des véhicules",
              "Du bois tropical",
              "Du coton"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le pays importe des produits manufacturés et des équipements ; il exporte cacao, bois et coton."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La balance commerciale",
          "stepTheme": "La balance commerciale",
          "stepBadge": "La balance commerciale",
          "paragraphText": "• Balance commerciale : différence entre la valeur des exportations et celle des importations.\nSi elle est positive, elle est excédentaire.\nSi elle est négative, elle est déficitaire.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q4",
            "type": "mcq",
            "prompt": "Une balance commerciale excédentaire signifie que…",
            "options": [
              "les exportations dépassent les importations",
              "les importations dépassent les exportations",
              "le pays n'exporte rien",
              "le pays n'a pas de partenaires"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Excédent : on vend à l'étranger pour une valeur supérieure à ce qu'on achète."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calculer la balance",
          "stepTheme": "Calculer la balance",
          "stepBadge": "Calculer la balance",
          "paragraphText": "Balance commerciale = exportations − importations.\nExemple 2010 : 5 063,15 − 3 881,17 = 1 181,98 milliards F CFA.\nLe signe indique l'excédent (+) ou le déficit (−).",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q5",
            "type": "mcq",
            "prompt": "En 2012, exportations = 5 538,24 et importations = 4 987,06 milliards F CFA. Quelle est la balance commerciale ?",
            "options": [
              "−551,18 milliards F CFA",
              "+10 525,30 milliards F CFA",
              "+1 181,98 milliards F CFA",
              "+551,18 milliards F CFA"
            ],
            "correctAnswerIndex": 3,
            "explanation": "5 538,24 − 4 987,06 = 551,18 milliards F CFA : la balance est excédentaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Valeur ou poids ?",
          "stepTheme": "Valeur ou poids ?",
          "stepBadge": "Valeur ou poids ?",
          "paragraphText": "Le tableau donne aussi le poids en tonnes.\nEn 2017, le pays importe plus de tonnes (14 163,70 milliers) qu'il n'en exporte (9 662,31 milliers).\nPourtant, la balance se calcule en valeur (F CFA) : elle est excédentaire.",
          "konanTip": "La balance commerciale se calcule toujours avec les valeurs, jamais avec les tonnes.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q6",
            "type": "mcq",
            "prompt": "Pourquoi la balance de 2017 est-elle excédentaire alors que le pays importe plus de tonnes qu'il n'en exporte ?",
            "options": [
              "Parce qu'on la calcule en tonnes",
              "Parce que les importations sont gratuites",
              "Parce qu'on la calcule en valeur, et la valeur des exportations est plus forte",
              "Parce que le tableau est faux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En valeur : 7 302,31 − 5 594,01 = +1 708,30 milliards F CFA. Les tonnes ne servent pas au calcul."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "L'importance du commerce",
          "stepTheme": "L'importance du commerce",
          "stepBadge": "L'importance du commerce",
          "paragraphText": "Le commerce extérieur fait entrer des devises.\nLes importations approvisionnent le marché national.\nLes taxes sur les produits exportés et importés alimentent le budget de l'État.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q7",
            "type": "mcq",
            "prompt": "Comment le commerce extérieur alimente-t-il le budget de l'État ?",
            "options": [
              "Par l'impôt foncier",
              "Par les salaires des enseignants",
              "Par les taxes sur les produits exportés et importés",
              "Il ne rapporte rien à l'État"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les droits et taxes perçus à l'entrée et à la sortie des marchandises sont des recettes de l'État."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q1",
          "type": "mcq",
          "prompt": "Lequel de ces acteurs participe au commerce intérieur ?",
          "options": [
            "Un détaillant de quartier",
            "Un acheteur de cacao à Amsterdam",
            "Une compagnie aérienne étrangère",
            "Un port européen"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le détaillant vend à l'intérieur du pays. Les autres concernent les échanges avec l'étranger ou le transport."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q2",
          "type": "mcq",
          "prompt": "Que sont les importations ?",
          "options": [
            "Les produits vendus à l'étranger",
            "Les produits achetés à l'étranger",
            "Les produits vendus sur les marchés locaux",
            "Les impôts sur les entreprises"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Importer, c'est acheter à l'étranger ; exporter, c'est vendre à l'étranger."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q3",
          "type": "mcq",
          "prompt": "Quel produit la Côte d'Ivoire importe-t-elle surtout ?",
          "options": [
            "Du cacao",
            "Des biens d'équipement et des véhicules",
            "Du bois tropical",
            "Du coton"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le pays importe des produits manufacturés et des équipements ; il exporte cacao, bois et coton."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q4",
          "type": "mcq",
          "prompt": "Une balance commerciale excédentaire signifie que…",
          "options": [
            "les exportations dépassent les importations",
            "les importations dépassent les exportations",
            "le pays n'exporte rien",
            "le pays n'a pas de partenaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Excédent : on vend à l'étranger pour une valeur supérieure à ce qu'on achète."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q5",
          "type": "mcq",
          "prompt": "En 2012, exportations = 5 538,24 et importations = 4 987,06 milliards F CFA. Quelle est la balance commerciale ?",
          "options": [
            "−551,18 milliards F CFA",
            "+10 525,30 milliards F CFA",
            "+1 181,98 milliards F CFA",
            "+551,18 milliards F CFA"
          ],
          "correctAnswerIndex": 3,
          "explanation": "5 538,24 − 4 987,06 = 551,18 milliards F CFA : la balance est excédentaire."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q6",
          "type": "mcq",
          "prompt": "Pourquoi la balance de 2017 est-elle excédentaire alors que le pays importe plus de tonnes qu'il n'en exporte ?",
          "options": [
            "Parce qu'on la calcule en tonnes",
            "Parce que les importations sont gratuites",
            "Parce qu'on la calcule en valeur, et la valeur des exportations est plus forte",
            "Parce que le tableau est faux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "En valeur : 7 302,31 − 5 594,01 = +1 708,30 milliards F CFA. Les tonnes ne servent pas au calcul."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p07_q7",
          "type": "mcq",
          "prompt": "Comment le commerce extérieur alimente-t-il le budget de l'État ?",
          "options": [
            "Par l'impôt foncier",
            "Par les salaires des enseignants",
            "Par les taxes sur les produits exportés et importés",
            "Il ne rapporte rien à l'État"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les droits et taxes perçus à l'entrée et à la sortie des marchandises sont des recettes de l'État."
        }
      ]
    },
    {
      "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08",
      "order": 8,
      "title": "Le tourisme et les transports",
      "summary": "Les atouts touristiques ivoiriens, le poids du tourisme et les grandes infrastructures de transport.",
      "conceptExplanation": "Atouts touristiques : plages et lagunes, parcs et réserves, diversité culturelle, monuments, infrastructures modernes.\nEn 2016, le tourisme a contribué à environ 7,5 % du PIB.\nTransports : un réseau routier parmi les plus performants d'Afrique de l'Ouest, la ligne Abidjan-Ouagadougou (SITARAIL), trois aéroports internationaux (Abidjan, Bouaké, Yamoussoukro) et deux grands ports (Abidjan, San-Pedro).",
      "keyRule": "Le tourisme valorise la nature et la culture ; les transports relient le pays à la sous-région et au monde.",
      "formulas": [],
      "workedExample": {
        "title": "Classer un atout touristique",
        "statement": "La basilique de Yamoussoukro est-elle un atout naturel ou culturel ?",
        "methodSteps": [
          "La basilique est un édifice construit par l'homme.",
          "Elle fait partie des monuments et édifices religieux."
        ],
        "conclusion": "C'est un atout culturel (monument), pas un atout naturel."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Les atouts naturels",
          "stepTheme": "Les atouts naturels",
          "stepBadge": "Les atouts naturels",
          "paragraphText": "• Plages de sable fin, criques et lagunes : lagune Ébrié, lagune Aby.\n• Parcs nationaux et réserves : parc national de Taï, forêt du Banco, Azagny, mont Péko.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q1",
            "type": "mcq",
            "prompt": "Lequel de ces sites est un parc national ivoirien ?",
            "options": [
              "Taï",
              "La basilique de Yamoussoukro",
              "La mosquée de Kong",
              "Le port d'Abidjan"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le parc national de Taï est un atout naturel. La basilique et la mosquée sont des monuments ; le port est une infrastructure."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les atouts culturels",
          "stepTheme": "Les atouts culturels",
          "stepBadge": "Les atouts culturels",
          "paragraphText": "• Diversité culturelle d'une soixantaine de peuples : fêtes de générations, sorties initiatiques, art culinaire.\n• Monuments et édifices religieux : basilique de Yamoussoukro, mosquées anciennes de Kong et de Bondoukou.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q2",
            "type": "mcq",
            "prompt": "Lequel de ces éléments est un atout touristique culturel ?",
            "options": [
              "La lagune Ébrié",
              "La forêt du Banco",
              "Les plages de sable fin",
              "Les fêtes de générations"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les fêtes de générations relèvent de la culture. Les trois autres sont des atouts naturels."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le poids du tourisme",
          "stepTheme": "Le poids du tourisme",
          "stepBadge": "Le poids du tourisme",
          "paragraphText": "En 2016, le tourisme a contribué à environ 7,5 % du PIB.\nIl est soumis à des impôts et taxes (TVA, taxe de développement touristique).\nIl fait donc entrer des recettes dans les caisses de l'État.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q3",
            "type": "mcq",
            "prompt": "Quelle part du PIB le tourisme représentait-il en 2016 ?",
            "options": [
              "Environ 75 %",
              "Environ 7,5 %",
              "Environ 40 %",
              "Moins de 1 %"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tourisme représentait environ 7,5 % du PIB en 2016."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Routes et chemin de fer",
          "stepTheme": "Routes et chemin de fer",
          "stepBadge": "Routes et chemin de fer",
          "paragraphText": "Le réseau routier est l'un des plus performants d'Afrique de l'Ouest (environ 68 000 km, dont 6 000 km bitumés).\nLa voie ferrée relie Abidjan à Ouagadougou ; elle est gérée par la SITARAIL.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q4",
            "type": "mcq",
            "prompt": "Quelle société gère le chemin de fer Abidjan-Ouagadougou ?",
            "options": [
              "La SOTRA",
              "La SITARAIL",
              "AIR CÔTE D'IVOIRE",
              "La SODEMI"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La SITARAIL gère la voie ferrée. La SOTRA gère les bus et bateaux-bus d'Abidjan ; la SODEMI est une société minière."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Aéroports et ports",
          "stepTheme": "Aéroports et ports",
          "stepBadge": "Aéroports et ports",
          "paragraphText": "• Trois aéroports internationaux : Abidjan (Félix Houphouët-Boigny), Bouaké, Yamoussoukro.\n• Deux grands ports : le Port autonome d'Abidjan, qui assure l'essentiel du trafic maritime, et le port de San-Pedro.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q5",
            "type": "mcq",
            "prompt": "Quels sont les deux grands ports de la Côte d'Ivoire ?",
            "options": [
              "Bouaké et Korhogo",
              "Yamoussoukro et Daloa",
              "Abidjan et Bouaké",
              "Abidjan et San-Pedro"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les ports maritimes sont sur la côte : Abidjan et San-Pedro. Bouaké, Korhogo, Yamoussoukro et Daloa sont à l'intérieur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le transport lagunaire",
          "stepTheme": "Le transport lagunaire",
          "stepBadge": "Le transport lagunaire",
          "paragraphText": "À Abidjan, le transport lagunaire relie les quartiers par la lagune.\nIl est assuré par les bateaux-bus de la SOTRA et par des compagnies privées.\nDes pinasses relient aussi Locodjro, le Plateau et Treichville.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q6",
            "type": "mcq",
            "prompt": "Qui assure le transport lagunaire à Abidjan ?",
            "options": [
              "Les bateaux-bus de la SOTRA et des compagnies privées",
              "La SITARAIL",
              "Le Port autonome de San-Pedro",
              "AIR CÔTE D'IVOIRE"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le transport sur la lagune est assuré par les bateaux-bus de la SOTRA et des compagnies privées."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Situation d'évaluation : le déficit en poisson",
          "stepTheme": "Situation d'évaluation : le déficit en poisson",
          "stepBadge": "Situation d'évaluation : le déficit en poisson",
          "paragraphText": "Situation : le pays importe beaucoup de poisson malgré ses ressources en eau.\n1. Le problème : le déficit en produits halieutiques.\n2. Explication : pêche surtout artisanale, moyens limités, forte demande.\n3. Solutions : moderniser la pêche, développer l'aquaculture.",
          "exercise": {
            "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q7",
            "type": "mcq",
            "prompt": "Quelle solution aide à réduire le déficit en poisson ?",
            "options": [
              "Interdire la pêche artisanale",
              "Réduire les ports de pêche",
              "Développer l'aquaculture et moderniser la pêche",
              "Augmenter les importations de viande"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'aquaculture (élevage de poissons) et une pêche mieux équipée augmentent la production nationale."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q1",
          "type": "mcq",
          "prompt": "Lequel de ces sites est un parc national ivoirien ?",
          "options": [
            "Taï",
            "La basilique de Yamoussoukro",
            "La mosquée de Kong",
            "Le port d'Abidjan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le parc national de Taï est un atout naturel. La basilique et la mosquée sont des monuments ; le port est une infrastructure."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q2",
          "type": "mcq",
          "prompt": "Lequel de ces éléments est un atout touristique culturel ?",
          "options": [
            "La lagune Ébrié",
            "La forêt du Banco",
            "Les plages de sable fin",
            "Les fêtes de générations"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les fêtes de générations relèvent de la culture. Les trois autres sont des atouts naturels."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q3",
          "type": "mcq",
          "prompt": "Quelle part du PIB le tourisme représentait-il en 2016 ?",
          "options": [
            "Environ 75 %",
            "Environ 7,5 %",
            "Environ 40 %",
            "Moins de 1 %"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tourisme représentait environ 7,5 % du PIB en 2016."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q4",
          "type": "mcq",
          "prompt": "Quelle société gère le chemin de fer Abidjan-Ouagadougou ?",
          "options": [
            "La SOTRA",
            "La SITARAIL",
            "AIR CÔTE D'IVOIRE",
            "La SODEMI"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La SITARAIL gère la voie ferrée. La SOTRA gère les bus et bateaux-bus d'Abidjan ; la SODEMI est une société minière."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q5",
          "type": "mcq",
          "prompt": "Quels sont les deux grands ports de la Côte d'Ivoire ?",
          "options": [
            "Bouaké et Korhogo",
            "Yamoussoukro et Daloa",
            "Abidjan et Bouaké",
            "Abidjan et San-Pedro"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les ports maritimes sont sur la côte : Abidjan et San-Pedro. Bouaké, Korhogo, Yamoussoukro et Daloa sont à l'intérieur."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q6",
          "type": "mcq",
          "prompt": "Qui assure le transport lagunaire à Abidjan ?",
          "options": [
            "Les bateaux-bus de la SOTRA et des compagnies privées",
            "La SITARAIL",
            "Le Port autonome de San-Pedro",
            "AIR CÔTE D'IVOIRE"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le transport sur la lagune est assuré par les bateaux-bus de la SOTRA et des compagnies privées."
        },
        {
          "id": "terminale_hg_geographie_l02_secteurs_activites_economiques_p08_q7",
          "type": "mcq",
          "prompt": "Quelle solution aide à réduire le déficit en poisson ?",
          "options": [
            "Interdire la pêche artisanale",
            "Réduire les ports de pêche",
            "Développer l'aquaculture et moderniser la pêche",
            "Augmenter les importations de viande"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'aquaculture (élevage de poissons) et une pêche mieux équipée augmentent la production nationale."
        }
      ]
    }
  ]
};
