import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 2nde G8 - Les problèmes environnementaux actuels.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const GEO_2DE_T3_L02_PROBLEMES_ENVIRONNEMENTAUX: CurriculumChapter = {
  "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels",
  "subjectId": "histoire_geo",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 8,
  "title": "Thème 3, leçon 2 : Les problèmes environnementaux actuels",
  "summary": "Les grands problèmes environnementaux du monde, leurs causes, leurs conséquences et les initiatives pour y répondre.",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "2nde G8 - Les problèmes environnementaux actuels.pdf",
  "points": [
    {
      "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01",
      "order": 1,
      "title": "L'environnement et ses grands problèmes",
      "summary": "Ce qu'est l'environnement et les problèmes qui menacent le monde.",
      "conceptExplanation": "L'environnement est l'ensemble des éléments biotiques (les êtres vivants) et abiotiques (l'eau, l'air, les sols...) qui entourent un individu ou une espèce. Les besoins croissants de l'Homme exercent sur lui une forte pression.\n\nLes principaux problèmes environnementaux actuels :\n- la pollution de l'air et la pollution des eaux ;\n- le réchauffement climatique : la hausse générale des températures moyennes, qui modifie durablement le climat et les écosystèmes ;\n- la dégradation de la couche d'ozone : cette couche de gaz, située vers 25 km d'altitude, filtre les rayons ultraviolets du Soleil ; elle se dégrade quand des « trous » apparaissent ;\n- les déchets radioactifs, dangereux pour l'environnement ;\n- l'épuisement des ressources non renouvelables, consommées plus vite qu'elles ne se renouvellent ;\n- l'urbanisation galopante ;\n- la dégradation des sols agricoles, la sécheresse, la rareté de l'eau potable ;\n- la destruction des écosystèmes, par exemple par la déforestation.",
      "keyRule": "Environnement = êtres vivants (biotique) + eau, air, sols (abiotique) ; problèmes : pollutions, réchauffement, ozone, déchets, ressources épuisées, sols dégradés, sécheresse.",
      "formulas": [],
      "workedExample": {
        "title": "Biotique ou abiotique ?",
        "statement": "Classe : l'air, un poisson, le sol, un arbre.",
        "methodSteps": [
          "Biotique = vivant : le poisson, l'arbre.",
          "Abiotique = non vivant : l'air, le sol."
        ],
        "conclusion": "L'environnement réunit les deux catégories."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Biotique et abiotique",
          "stepTheme": "Biotique et abiotique",
          "stepBadge": "Biotique et abiotique",
          "paragraphText": "L'environnement est l'ensemble des éléments qui entourent un individu ou une espèce :\n• les éléments biotiques : les êtres vivants ;\n• les éléments abiotiques : l'eau, l'air, les sols.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q1",
            "type": "mcq",
            "prompt": "Lequel de ces éléments est abiotique ?",
            "options": [
              "Un arbre",
              "Un poisson",
              "L'air",
              "Une bactérie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Abiotique = non vivant : l'air, l'eau, le sol."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le réchauffement climatique",
          "stepTheme": "Le réchauffement climatique",
          "stepBadge": "Le réchauffement climatique",
          "paragraphText": "Le réchauffement climatique est la hausse générale des températures moyennes de la planète.\nIl modifie durablement le climat et les écosystèmes.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce que le réchauffement climatique ?",
            "options": [
              "La hausse générale des températures moyennes de la planète",
              "La baisse générale des températures pendant l'hiver",
              "L'apparition de trous dans la couche d'ozone",
              "La disparition des saisons des pluies en Afrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est une augmentation durable des températures moyennes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La couche d'ozone",
          "stepTheme": "La couche d'ozone",
          "stepBadge": "La couche d'ozone",
          "paragraphText": "La couche d'ozone est une couche de gaz située vers 25 km d'altitude.\nElle filtre les rayons ultraviolets (UV) du Soleil.\nElle se dégrade lorsque des « trous » apparaissent.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q3",
            "type": "mcq",
            "prompt": "Quel danger la dégradation de la couche d'ozone fait-elle courir aux êtres vivants ?",
            "options": [
              "Une baisse brutale de la quantité d'oxygène dans l'air",
              "Une augmentation des pluies acides sur les forêts",
              "Un refroidissement général de toute la planète",
              "Une exposition plus forte aux rayons ultraviolets du Soleil"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Moins d'ozone, c'est plus d'UV qui atteignent le sol : risques pour la peau, les yeux et les plantes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ozone et réchauffement",
          "stepTheme": "Ozone et réchauffement",
          "stepBadge": "Ozone et réchauffement",
          "paragraphText": "Attention, ce sont deux problèmes différents :\n• le réchauffement vient des gaz à effet de serre (CO₂, méthane) qui retiennent la chaleur ;\n• le trou dans la couche d'ozone laisse passer davantage d'UV, sans être la cause du réchauffement.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q4",
            "type": "mcq",
            "prompt": "Quelle est la principale cause du réchauffement climatique actuel ?",
            "options": [
              "Le trou dans la couche d'ozone",
              "Les gaz à effet de serre rejetés par les activités humaines",
              "Le rapprochement de la Terre et du Soleil",
              "La rotation de la Terre de plus en plus rapide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les gaz à effet de serre (CO₂ surtout) retiennent la chaleur : c'est la cause principale du réchauffement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les ressources non renouvelables",
          "stepTheme": "Les ressources non renouvelables",
          "stepBadge": "Les ressources non renouvelables",
          "paragraphText": "Une ressource non renouvelable (pétrole, charbon, gaz, minerais) se forme très lentement.\nOn parle d'épuisement quand on la consomme plus vite qu'elle ne se renouvelle.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces ressources est non renouvelable ?",
            "options": [
              "L'énergie solaire",
              "Le pétrole",
              "Le vent",
              "L'eau de pluie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le pétrole met des millions d'années à se former : il s'épuise."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des problèmes variés",
          "stepTheme": "Des problèmes variés",
          "stepBadge": "Des problèmes variés",
          "paragraphText": "D'autres problèmes menacent le monde :\n• les déchets radioactifs ;\n• l'urbanisation galopante ;\n• la dégradation des sols agricoles ;\n• la sécheresse et la rareté de l'eau potable.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q6",
            "type": "mcq",
            "prompt": "Qu'est-ce que la sécheresse ?",
            "options": [
              "Une pluie très forte et brève qui inonde soudainement les villes",
              "Une vague géante qui envahit le rivage après un séisme sous-marin",
              "Un vent froid venu des pôles qui fait geler les cultures",
              "Un manque d'eau long et important qui touche la flore, la faune et les sociétés"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La sécheresse est un manque d'eau durable qui affecte le vivant et les hommes."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "La destruction des écosystèmes",
          "stepTheme": "La destruction des écosystèmes",
          "stepBadge": "La destruction des écosystèmes",
          "paragraphText": "Un écosystème est un milieu naturel et l'ensemble des êtres vivants qui y vivent.\nSa destruction est un déséquilibre créé par les activités humaines, par exemple la déforestation.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q7",
            "type": "mcq",
            "prompt": "Lequel de ces exemples est une destruction d'écosystème ?",
            "options": [
              "La déforestation d'une forêt tropicale",
              "La création d'un parc national",
              "Le reboisement d'une colline",
              "Le recyclage du papier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Couper la forêt détruit le milieu de vie de nombreuses espèces."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q1",
          "type": "mcq",
          "prompt": "Lequel de ces éléments est abiotique ?",
          "options": [
            "Un arbre",
            "Un poisson",
            "L'air",
            "Une bactérie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Abiotique = non vivant : l'air, l'eau, le sol."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce que le réchauffement climatique ?",
          "options": [
            "La hausse générale des températures moyennes de la planète",
            "La baisse générale des températures pendant l'hiver",
            "L'apparition de trous dans la couche d'ozone",
            "La disparition des saisons des pluies en Afrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est une augmentation durable des températures moyennes."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q3",
          "type": "mcq",
          "prompt": "Quel danger la dégradation de la couche d'ozone fait-elle courir aux êtres vivants ?",
          "options": [
            "Une baisse brutale de la quantité d'oxygène dans l'air",
            "Une augmentation des pluies acides sur les forêts",
            "Un refroidissement général de toute la planète",
            "Une exposition plus forte aux rayons ultraviolets du Soleil"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Moins d'ozone, c'est plus d'UV qui atteignent le sol : risques pour la peau, les yeux et les plantes."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q4",
          "type": "mcq",
          "prompt": "Quelle est la principale cause du réchauffement climatique actuel ?",
          "options": [
            "Le trou dans la couche d'ozone",
            "Les gaz à effet de serre rejetés par les activités humaines",
            "Le rapprochement de la Terre et du Soleil",
            "La rotation de la Terre de plus en plus rapide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les gaz à effet de serre (CO₂ surtout) retiennent la chaleur : c'est la cause principale du réchauffement."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces ressources est non renouvelable ?",
          "options": [
            "L'énergie solaire",
            "Le pétrole",
            "Le vent",
            "L'eau de pluie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le pétrole met des millions d'années à se former : il s'épuise."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q6",
          "type": "mcq",
          "prompt": "Qu'est-ce que la sécheresse ?",
          "options": [
            "Une pluie très forte et brève qui inonde soudainement les villes",
            "Une vague géante qui envahit le rivage après un séisme sous-marin",
            "Un vent froid venu des pôles qui fait geler les cultures",
            "Un manque d'eau long et important qui touche la flore, la faune et les sociétés"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La sécheresse est un manque d'eau durable qui affecte le vivant et les hommes."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p01_q7",
          "type": "mcq",
          "prompt": "Lequel de ces exemples est une destruction d'écosystème ?",
          "options": [
            "La déforestation d'une forêt tropicale",
            "La création d'un parc national",
            "Le reboisement d'une colline",
            "Le recyclage du papier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Couper la forêt détruit le milieu de vie de nombreuses espèces."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02",
      "order": 2,
      "title": "Les activités humaines, principales causes",
      "summary": "Agriculture, exploitation des ressources, industrie, transport et commerce dégradent l'environnement.",
      "conceptExplanation": "Pour sa subsistance et son épanouissement, l'Homme exerce une forte pression sur l'environnement.\n\n- L'agriculture utilise des engrais et des pesticides qui polluent l'eau, l'air et les sols ; elle surexploite les étendues d'eau, ce qui a contribué à l'assèchement du lac Tchad et de la mer d'Aral.\n- L'exploitation forestière et minière et l'extension des villes détruisent la végétation et exposent les sols à l'érosion et à la pollution. La chasse et la pêche excessives perturbent les êtres vivants.\n- L'industrie rejette des déchets et des gaz toxiques, dont du gaz carbonique (CO₂).\n- Le transport routier rejette des gaz d'échappement ; les naufrages de navires polluent les océans.\n- Le commerce produit des déchets plastiques : dans l'océan Pacifique, un « continent de plastique » couvre environ 1,6 million de km².",
      "keyRule": "Agriculture (engrais, pesticides, lac Tchad, mer d'Aral), mines et forêts, industrie (CO₂), transport (gaz, naufrages), commerce (plastique).",
      "formulas": [],
      "workedExample": {
        "title": "Relier une activité à une pollution",
        "statement": "Quelle pollution provoquent un camion, une usine et un champ traité aux pesticides ?",
        "methodSteps": [
          "Le camion : gaz d'échappement, pollution de l'air.",
          "L'usine : déchets et fumées, pollution de l'air, de l'eau et des sols.",
          "Le champ : pesticides, pollution des sols et de l'eau."
        ],
        "conclusion": "Chaque activité humaine a son type de pollution."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'agriculture",
          "stepTheme": "L'agriculture",
          "stepBadge": "L'agriculture",
          "paragraphText": "Pour nourrir une population croissante, l'agriculture utilise des engrais et des pesticides.\nCes produits chimiques polluent l'eau, l'air et les sols.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q1",
            "type": "mcq",
            "prompt": "Comment l'agriculture moderne pollue-t-elle l'environnement ?",
            "options": [
              "Par la plantation d'arbres qui retiennent l'eau de pluie",
              "Par la rotation des cultures qui enrichit les sols",
              "Par les engrais et les pesticides qui polluent l'eau, l'air et les sols",
              "Par la jachère qui laisse la terre se reposer"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Engrais et pesticides chimiques se répandent dans l'eau, l'air et les sols."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Des lacs asséchés",
          "stepTheme": "Des lacs asséchés",
          "stepBadge": "Des lacs asséchés",
          "paragraphText": "La surexploitation de l'eau pour l'irrigation a contribué à l'assèchement de grandes étendues d'eau :\n• le lac Tchad, en Afrique ;\n• la mer d'Aral, en Asie centrale.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q2",
            "type": "mcq",
            "prompt": "Quel lac africain s'est fortement asséché, notamment à cause de la surexploitation de son eau ?",
            "options": [
              "Le lac Victoria",
              "Le lac de Kossou",
              "Le lac Tanganyika",
              "Le lac Tchad"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le lac Tchad a perdu une grande partie de sa surface ; en Asie, c'est la mer d'Aral."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Forêts, mines et villes",
          "stepTheme": "Forêts, mines et villes",
          "stepBadge": "Forêts, mines et villes",
          "paragraphText": "L'exploitation forestière et minière et l'extension des villes détruisent la végétation.\nLes sols, mis à nu, sont exposés à l'érosion et à la pollution.\nLa chasse et la pêche excessives perturbent les êtres vivants.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q3",
            "type": "mcq",
            "prompt": "Pourquoi l'exploitation minière et forestière expose-t-elle les sols à l'érosion ?",
            "options": [
              "Parce qu'elle plante des arbres trop serrés",
              "Parce qu'elle arrose les sols en permanence",
              "Parce qu'elle détruit la végétation qui protège le sol",
              "Parce qu'elle couvre les sols de plastique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sans végétation, le sol nu est emporté par la pluie et le vent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'industrie",
          "stepTheme": "L'industrie",
          "stepBadge": "L'industrie",
          "paragraphText": "Les usines rejettent des déchets industriels dans l'eau, l'air et les sols.\nElles émettent aussi des gaz toxiques, dont du gaz carbonique (CO₂), un gaz à effet de serre.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q4",
            "type": "mcq",
            "prompt": "Quel gaz à effet de serre les industries rejettent-elles en grande quantité ?",
            "options": [
              "Le dioxygène (O₂)",
              "Le gaz carbonique (CO₂)",
              "L'hélium (He)",
              "Le diazote (N₂)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le CO₂, rejeté par la combustion, est le principal gaz à effet de serre d'origine humaine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le transport",
          "stepTheme": "Le transport",
          "stepBadge": "Le transport",
          "paragraphText": "• Le transport routier rejette des gaz d'échappement qui polluent l'air.\n• Les naufrages de navires (pétroliers) polluent les océans.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q5",
            "type": "mcq",
            "prompt": "Quelle pollution provoque le naufrage d'un pétrolier ?",
            "options": [
              "La pollution des océans",
              "La pollution sonore des villes",
              "La destruction de la couche d'ozone",
              "L'érosion des sols agricoles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le pétrole répandu en mer forme une marée noire qui pollue l'océan."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le continent de plastique",
          "stepTheme": "Le continent de plastique",
          "stepBadge": "Le continent de plastique",
          "paragraphText": "Le commerce produit beaucoup de déchets plastiques qui finissent en ville et dans les océans.\nDans l'océan Pacifique, un « continent de plastique » couvre environ 1,6 million de km².",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q6",
            "type": "mcq",
            "prompt": "Quel déchet forme un « continent » dans l'océan Pacifique ?",
            "options": [
              "Le plastique",
              "Le verre",
              "Le papier",
              "Le bois"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le plastique s'accumule dans le Pacifique : environ 1,6 million de km²."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "La cause principale",
          "stepTheme": "La cause principale",
          "stepBadge": "La cause principale",
          "paragraphText": "Certains problèmes ont des causes naturelles, mais la plupart des problèmes environnementaux actuels sont causés par les activités humaines.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q7",
            "type": "mcq",
            "prompt": "Quelle est la principale cause des problèmes environnementaux actuels ?",
            "options": [
              "Les éruptions volcaniques uniquement",
              "Les activités humaines",
              "Les mouvements de la Lune",
              "Les animaux sauvages"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'agriculture, l'industrie, les transports et le commerce sont les principales causes."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q1",
          "type": "mcq",
          "prompt": "Comment l'agriculture moderne pollue-t-elle l'environnement ?",
          "options": [
            "Par la plantation d'arbres qui retiennent l'eau de pluie",
            "Par la rotation des cultures qui enrichit les sols",
            "Par les engrais et les pesticides qui polluent l'eau, l'air et les sols",
            "Par la jachère qui laisse la terre se reposer"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Engrais et pesticides chimiques se répandent dans l'eau, l'air et les sols."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q2",
          "type": "mcq",
          "prompt": "Quel lac africain s'est fortement asséché, notamment à cause de la surexploitation de son eau ?",
          "options": [
            "Le lac Victoria",
            "Le lac de Kossou",
            "Le lac Tanganyika",
            "Le lac Tchad"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le lac Tchad a perdu une grande partie de sa surface ; en Asie, c'est la mer d'Aral."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q3",
          "type": "mcq",
          "prompt": "Pourquoi l'exploitation minière et forestière expose-t-elle les sols à l'érosion ?",
          "options": [
            "Parce qu'elle plante des arbres trop serrés",
            "Parce qu'elle arrose les sols en permanence",
            "Parce qu'elle détruit la végétation qui protège le sol",
            "Parce qu'elle couvre les sols de plastique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sans végétation, le sol nu est emporté par la pluie et le vent."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q4",
          "type": "mcq",
          "prompt": "Quel gaz à effet de serre les industries rejettent-elles en grande quantité ?",
          "options": [
            "Le dioxygène (O₂)",
            "Le gaz carbonique (CO₂)",
            "L'hélium (He)",
            "Le diazote (N₂)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le CO₂, rejeté par la combustion, est le principal gaz à effet de serre d'origine humaine."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q5",
          "type": "mcq",
          "prompt": "Quelle pollution provoque le naufrage d'un pétrolier ?",
          "options": [
            "La pollution des océans",
            "La pollution sonore des villes",
            "La destruction de la couche d'ozone",
            "L'érosion des sols agricoles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pétrole répandu en mer forme une marée noire qui pollue l'océan."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q6",
          "type": "mcq",
          "prompt": "Quel déchet forme un « continent » dans l'océan Pacifique ?",
          "options": [
            "Le plastique",
            "Le verre",
            "Le papier",
            "Le bois"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le plastique s'accumule dans le Pacifique : environ 1,6 million de km²."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p02_q7",
          "type": "mcq",
          "prompt": "Quelle est la principale cause des problèmes environnementaux actuels ?",
          "options": [
            "Les éruptions volcaniques uniquement",
            "Les activités humaines",
            "Les mouvements de la Lune",
            "Les animaux sauvages"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'agriculture, l'industrie, les transports et le commerce sont les principales causes."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03",
      "order": 3,
      "title": "Les catastrophes et phénomènes naturels",
      "summary": "Séismes, cyclones, montée des océans et désertification.",
      "conceptExplanation": "Certaines dégradations résultent d'événements naturels.\n- Les tremblements de terre (séismes) : par exemple le séisme d'août 2021 en Haïti.\n- Les cyclones : ils naissent dans la zone intertropicale et frappent surtout les côtes est des continents (Madagascar, Mozambique, Haïti, Caraïbes).\n- La montée du niveau des océans : des pays perdent une partie de leurs côtes (Lahou-Kpanda en Côte d'Ivoire, îles Fidji, Bangladesh).\n- La désertification : des régions deviennent désertiques (Chine, Mongolie...).\n\nCes catastrophes écologiques peuvent dégrader durablement, parfois de façon irréversible, les ressources naturelles. Mais la montée des océans et la désertification sont aggravées par le réchauffement climatique, lui-même lié aux activités humaines.",
      "keyRule": "Séismes (Haïti 2021), cyclones (côtes est : Madagascar, Caraïbes), montée des océans (Lahou-Kpanda, Bangladesh), désertification (Chine, Mongolie).",
      "formulas": [],
      "workedExample": {
        "title": "Un phénomène naturel aggravé",
        "statement": "La montée des océans est-elle seulement naturelle ?",
        "methodSteps": [
          "La montée des océans vient de la fonte des glaces et de la dilatation de l'eau chaude.",
          "Ces deux phénomènes sont accélérés par le réchauffement climatique.",
          "Le réchauffement est surtout causé par les activités humaines."
        ],
        "conclusion": "C'est un phénomène naturel aggravé par l'Homme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Les séismes",
          "stepTheme": "Les séismes",
          "stepBadge": "Les séismes",
          "paragraphText": "Un séisme (tremblement de terre) est une secousse brutale du sol.\nExemple : le séisme d'août 2021 en Haïti a fait de nombreuses victimes et de grands dégâts.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q1",
            "type": "mcq",
            "prompt": "Quel pays a été frappé par un grave séisme en août 2021 ?",
            "options": [
              "La Côte d'Ivoire",
              "La Mongolie",
              "Haïti",
              "Le Bangladesh"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Haïti a subi un séisme meurtrier en août 2021."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les cyclones",
          "stepTheme": "Les cyclones",
          "stepBadge": "Les cyclones",
          "paragraphText": "Les cyclones sont des tempêtes tropicales très violentes.\nIls naissent dans la zone intertropicale et frappent surtout les côtes est des continents : Madagascar, le Mozambique, Haïti, les Caraïbes.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q2",
            "type": "mcq",
            "prompt": "Où se forment les cyclones ?",
            "options": [
              "Dans les zones polaires",
              "Au cœur des déserts",
              "Dans les zones tempérées uniquement",
              "Dans la zone intertropicale"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les cyclones naissent au-dessus des mers chaudes de la zone intertropicale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Des pays touchés par les cyclones",
          "stepTheme": "Des pays touchés par les cyclones",
          "stepBadge": "Des pays touchés par les cyclones",
          "paragraphText": "Sur la côte est de l'Afrique, Madagascar et le Mozambique sont souvent frappés par des cyclones venus de l'océan Indien.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q3",
            "type": "mcq",
            "prompt": "Lequel de ces pays africains est souvent frappé par des cyclones ?",
            "options": [
              "Le Mali",
              "Le Burkina Faso",
              "Madagascar",
              "Le Niger"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Madagascar, sur la côte est de l'Afrique, reçoit les cyclones de l'océan Indien."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La montée des océans",
          "stepTheme": "La montée des océans",
          "stepBadge": "La montée des océans",
          "paragraphText": "Avec la montée du niveau des océans, des pays perdent une partie de leurs côtes :\n• Lahou-Kpanda en Côte d'Ivoire ;\n• les îles Fidji ;\n• le Bangladesh.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q4",
            "type": "mcq",
            "prompt": "Quelle localité ivoirienne est menacée par la montée de la mer ?",
            "options": [
              "Korhogo",
              "Bouaké",
              "Odienné",
              "Lahou-Kpanda"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Lahou-Kpanda, sur le littoral, est rongé par la mer ; les autres villes sont à l'intérieur des terres."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La désertification",
          "stepTheme": "La désertification",
          "stepBadge": "La désertification",
          "paragraphText": "La désertification est la transformation d'une région en désert : les sols se dégradent et la végétation disparaît.\nExemples : certaines régions de Chine et de Mongolie.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q5",
            "type": "mcq",
            "prompt": "Qu'est-ce que la désertification ?",
            "options": [
              "La transformation progressive d'une région en désert",
              "La plantation d'arbres dans le désert",
              "La montée du niveau de la mer sur les côtes",
              "La fonte des glaciers en montagne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La désertification : les sols se dégradent, la végétation disparaît, le désert avance."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Les catastrophes écologiques",
          "stepTheme": "Les catastrophes écologiques",
          "stepBadge": "Les catastrophes écologiques",
          "paragraphText": "Une catastrophe écologique est un événement aux conséquences considérables sur les écosystèmes.\nElle dégrade fortement, parfois de façon irréversible, les ressources naturelles.\nExemples : tsunamis, séismes, éboulements.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q6",
            "type": "mcq",
            "prompt": "Que signifie qu'une catastrophe écologique peut être « irréversible » ?",
            "options": [
              "Qu'elle ne dure que quelques minutes",
              "Que ses dégâts ne peuvent plus être réparés",
              "Qu'elle ne touche que les océans",
              "Qu'elle se répète chaque année"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Irréversible : on ne peut pas revenir à l'état d'avant."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Naturel mais aggravé",
          "stepTheme": "Naturel mais aggravé",
          "stepBadge": "Naturel mais aggravé",
          "paragraphText": "La montée des océans et la désertification sont des phénomènes naturels, mais ils sont aggravés par le réchauffement climatique, causé surtout par les activités humaines.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q7",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que la montée des océans est aggravée par l'Homme ?",
            "options": [
              "Parce que les hommes versent de l'eau dans les océans",
              "Parce que le réchauffement climatique d'origine humaine fait fondre les glaces",
              "Parce que les bateaux font monter le niveau de la mer",
              "Parce que la pêche industrielle creuse les fonds marins"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le réchauffement fait fondre les glaces et dilate l'eau : la mer monte."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q1",
          "type": "mcq",
          "prompt": "Quel pays a été frappé par un grave séisme en août 2021 ?",
          "options": [
            "La Côte d'Ivoire",
            "La Mongolie",
            "Haïti",
            "Le Bangladesh"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Haïti a subi un séisme meurtrier en août 2021."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q2",
          "type": "mcq",
          "prompt": "Où se forment les cyclones ?",
          "options": [
            "Dans les zones polaires",
            "Au cœur des déserts",
            "Dans les zones tempérées uniquement",
            "Dans la zone intertropicale"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les cyclones naissent au-dessus des mers chaudes de la zone intertropicale."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q3",
          "type": "mcq",
          "prompt": "Lequel de ces pays africains est souvent frappé par des cyclones ?",
          "options": [
            "Le Mali",
            "Le Burkina Faso",
            "Madagascar",
            "Le Niger"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Madagascar, sur la côte est de l'Afrique, reçoit les cyclones de l'océan Indien."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q4",
          "type": "mcq",
          "prompt": "Quelle localité ivoirienne est menacée par la montée de la mer ?",
          "options": [
            "Korhogo",
            "Bouaké",
            "Odienné",
            "Lahou-Kpanda"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Lahou-Kpanda, sur le littoral, est rongé par la mer ; les autres villes sont à l'intérieur des terres."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q5",
          "type": "mcq",
          "prompt": "Qu'est-ce que la désertification ?",
          "options": [
            "La transformation progressive d'une région en désert",
            "La plantation d'arbres dans le désert",
            "La montée du niveau de la mer sur les côtes",
            "La fonte des glaciers en montagne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La désertification : les sols se dégradent, la végétation disparaît, le désert avance."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q6",
          "type": "mcq",
          "prompt": "Que signifie qu'une catastrophe écologique peut être « irréversible » ?",
          "options": [
            "Qu'elle ne dure que quelques minutes",
            "Que ses dégâts ne peuvent plus être réparés",
            "Qu'elle ne touche que les océans",
            "Qu'elle se répète chaque année"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Irréversible : on ne peut pas revenir à l'état d'avant."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p03_q7",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que la montée des océans est aggravée par l'Homme ?",
          "options": [
            "Parce que les hommes versent de l'eau dans les océans",
            "Parce que le réchauffement climatique d'origine humaine fait fondre les glaces",
            "Parce que les bateaux font monter le niveau de la mer",
            "Parce que la pêche industrielle creuse les fonds marins"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le réchauffement fait fondre les glaces et dilate l'eau : la mer monte."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04",
      "order": 4,
      "title": "L'impact sur la qualité de vie",
      "summary": "Conséquences de la pollution, du réchauffement et de la perte de biodiversité.",
      "conceptExplanation": "1. La pollution augmente les risques de maladies pulmonaires et de cancers, et menace le patrimoine génétique des hommes et des animaux. Les hommes s'intoxiquent aussi par l'alimentation (résidus de médicaments vétérinaires et d'additifs). Selon le PNUE, en 2015, un décès sur six dans le monde était lié à la pollution.\n\n2. Le réchauffement climatique dérègle le climat et rend le calendrier agricole inadapté. Il peut aussi assécher des barrages hydroélectriques et réduire la production d'électricité.\n\n3. La diminution de la biodiversité : les écosystèmes et les chaînes alimentaires sont des systèmes en équilibre ; si un maillon disparaît, tout le réseau est menacé. Pour l'Homme, c'est la perte d'un patrimoine unique, la réduction des espèces comestibles (la morue risque de disparaître à cause de la pêche industrielle) et la disparition de molécules utiles à la médecine.",
      "keyRule": "Pollution : maladies pulmonaires, cancers (1 décès sur 6 en 2015) ; réchauffement : climat et calendrier agricole déréglés ; biodiversité : chaînes alimentaires rompues.",
      "formulas": [],
      "workedExample": {
        "title": "Une chaîne alimentaire rompue",
        "statement": "Que se passe-t-il si les petits poissons disparaissent d'une lagune ?",
        "methodSteps": [
          "Les gros poissons qui s'en nourrissent manquent de nourriture.",
          "Les oiseaux et les pêcheurs qui mangent les gros poissons sont touchés à leur tour."
        ],
        "conclusion": "La disparition d'un maillon menace toute la chaîne alimentaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Pollution et santé",
          "stepTheme": "Pollution et santé",
          "stepBadge": "Pollution et santé",
          "paragraphText": "La pollution augmente les risques :\n• de maladies pulmonaires ;\n• de cancers ;\n• d'atteintes au patrimoine génétique des hommes et des animaux.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q1",
            "type": "mcq",
            "prompt": "Quelle conséquence la pollution de l'air a-t-elle sur la santé ?",
            "options": [
              "Elle augmente les risques de maladies pulmonaires et de cancers",
              "Elle renforce les défenses du corps contre les maladies",
              "Elle n'a aucun effet sur la santé humaine",
              "Elle guérit les maladies respiratoires"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Respirer un air pollué abîme les poumons et augmente les risques de cancer."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un décès sur six",
          "stepTheme": "Un décès sur six",
          "stepBadge": "Un décès sur six",
          "paragraphText": "Selon le PNUE (Programme des Nations unies pour l'environnement), en 2015, un décès sur six dans le monde était lié à la pollution, surtout dans les pays en développement.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q2",
            "type": "mcq",
            "prompt": "Selon le PNUE, quelle part des décès était liée à la pollution en 2015 ?",
            "options": [
              "Un décès sur cent",
              "La moitié des décès",
              "Aucun décès",
              "Un décès sur six"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le PNUE estime qu'un décès sur six était lié à la pollution en 2015."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "S'intoxiquer en mangeant",
          "stepTheme": "S'intoxiquer en mangeant",
          "stepBadge": "S'intoxiquer en mangeant",
          "paragraphText": "Les hommes absorbent aussi des polluants par la nourriture : résidus de pesticides, de médicaments vétérinaires et d'additifs de l'alimentation animale.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q3",
            "type": "mcq",
            "prompt": "Comment les hommes peuvent-ils s'intoxiquer par l'alimentation ?",
            "options": [
              "En mangeant des fruits fraîchement cueillis et bien lavés",
              "En buvant de l'eau potable traitée",
              "En consommant des aliments contenant des résidus de pesticides ou de médicaments vétérinaires",
              "En consommant des légumes cultivés sans produits chimiques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les résidus chimiques passent dans la chaîne alimentaire jusqu'à l'homme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les effets du réchauffement",
          "stepTheme": "Les effets du réchauffement",
          "stepBadge": "Les effets du réchauffement",
          "paragraphText": "Le réchauffement climatique :\n• dérègle le climat (pluies irrégulières, vagues de chaleur) ;\n• rend le calendrier agricole inadapté ;\n• peut assécher les barrages hydroélectriques et réduire la production d'électricité.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q4",
            "type": "mcq",
            "prompt": "Pourquoi le réchauffement climatique peut-il réduire la production d'électricité en Côte d'Ivoire ?",
            "options": [
              "Parce qu'il fait tourner les turbines trop vite",
              "Parce qu'il rend le pétrole plus abondant",
              "Parce qu'il assèche les retenues d'eau des barrages hydroélectriques",
              "Parce qu'il fait tomber trop de pluie sur les centrales"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Moins de pluie et plus d'évaporation : les barrages se vident et produisent moins."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La biodiversité",
          "stepTheme": "La biodiversité",
          "stepBadge": "La biodiversité",
          "paragraphText": "La biodiversité (ou diversité biologique) est la variété des espèces vivantes.\nElle est indispensable aux équilibres naturels.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q5",
            "type": "mcq",
            "prompt": "Qu'est-ce que la biodiversité ?",
            "options": [
              "La variété des espèces vivantes",
              "La quantité d'eau douce sur la Terre",
              "La température moyenne de la planète",
              "Le nombre d'habitants d'un pays"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Bio = vie, diversité = variété : la variété du vivant."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les chaînes alimentaires",
          "stepTheme": "Les chaînes alimentaires",
          "stepBadge": "Les chaînes alimentaires",
          "paragraphText": "Les écosystèmes et les chaînes alimentaires sont des systèmes en équilibre.\nSi l'un des maillons disparaît, c'est l'ensemble du réseau qui est menacé.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q6",
            "type": "mcq",
            "prompt": "Pourquoi la disparition d'une seule espèce peut-elle menacer tout un écosystème ?",
            "options": [
              "Parce que chaque espèce vit seule, sans lien avec les autres",
              "Parce que les autres espèces se multiplient alors à l'infini",
              "Parce que l'écosystème remplace toujours l'espèce disparue",
              "Parce que les espèces sont liées entre elles dans les chaînes alimentaires"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les espèces dépendent les unes des autres : un maillon manquant fragilise toute la chaîne."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Ce que l'Homme perd",
          "stepTheme": "Ce que l'Homme perd",
          "stepBadge": "Ce que l'Homme perd",
          "paragraphText": "Pour l'Homme, la perte de biodiversité, c'est :\n• un patrimoine unique perdu à jamais ;\n• moins d'espèces comestibles (la morue risque de disparaître à cause de la pêche industrielle) ;\n• la disparition de molécules utiles à la médecine.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q7",
            "type": "mcq",
            "prompt": "Pourquoi la perte de biodiversité menace-t-elle la médecine ?",
            "options": [
              "Parce que les médecins ont besoin de voir des animaux pour soigner",
              "Parce que des plantes et animaux disparus contenaient des molécules utiles aux médicaments",
              "Parce que les hôpitaux sont construits dans les forêts",
              "Parce que les médicaments sont fabriqués uniquement avec du plastique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "De nombreux médicaments viennent de molécules trouvées dans les plantes et les animaux."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q1",
          "type": "mcq",
          "prompt": "Quelle conséquence la pollution de l'air a-t-elle sur la santé ?",
          "options": [
            "Elle augmente les risques de maladies pulmonaires et de cancers",
            "Elle renforce les défenses du corps contre les maladies",
            "Elle n'a aucun effet sur la santé humaine",
            "Elle guérit les maladies respiratoires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Respirer un air pollué abîme les poumons et augmente les risques de cancer."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q2",
          "type": "mcq",
          "prompt": "Selon le PNUE, quelle part des décès était liée à la pollution en 2015 ?",
          "options": [
            "Un décès sur cent",
            "La moitié des décès",
            "Aucun décès",
            "Un décès sur six"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le PNUE estime qu'un décès sur six était lié à la pollution en 2015."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q3",
          "type": "mcq",
          "prompt": "Comment les hommes peuvent-ils s'intoxiquer par l'alimentation ?",
          "options": [
            "En mangeant des fruits fraîchement cueillis et bien lavés",
            "En buvant de l'eau potable traitée",
            "En consommant des aliments contenant des résidus de pesticides ou de médicaments vétérinaires",
            "En consommant des légumes cultivés sans produits chimiques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les résidus chimiques passent dans la chaîne alimentaire jusqu'à l'homme."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q4",
          "type": "mcq",
          "prompt": "Pourquoi le réchauffement climatique peut-il réduire la production d'électricité en Côte d'Ivoire ?",
          "options": [
            "Parce qu'il fait tourner les turbines trop vite",
            "Parce qu'il rend le pétrole plus abondant",
            "Parce qu'il assèche les retenues d'eau des barrages hydroélectriques",
            "Parce qu'il fait tomber trop de pluie sur les centrales"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Moins de pluie et plus d'évaporation : les barrages se vident et produisent moins."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q5",
          "type": "mcq",
          "prompt": "Qu'est-ce que la biodiversité ?",
          "options": [
            "La variété des espèces vivantes",
            "La quantité d'eau douce sur la Terre",
            "La température moyenne de la planète",
            "Le nombre d'habitants d'un pays"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Bio = vie, diversité = variété : la variété du vivant."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q6",
          "type": "mcq",
          "prompt": "Pourquoi la disparition d'une seule espèce peut-elle menacer tout un écosystème ?",
          "options": [
            "Parce que chaque espèce vit seule, sans lien avec les autres",
            "Parce que les autres espèces se multiplient alors à l'infini",
            "Parce que l'écosystème remplace toujours l'espèce disparue",
            "Parce que les espèces sont liées entre elles dans les chaînes alimentaires"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les espèces dépendent les unes des autres : un maillon manquant fragilise toute la chaîne."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p04_q7",
          "type": "mcq",
          "prompt": "Pourquoi la perte de biodiversité menace-t-elle la médecine ?",
          "options": [
            "Parce que les médecins ont besoin de voir des animaux pour soigner",
            "Parce que des plantes et animaux disparus contenaient des molécules utiles aux médicaments",
            "Parce que les hôpitaux sont construits dans les forêts",
            "Parce que les médicaments sont fabriqués uniquement avec du plastique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "De nombreux médicaments viennent de molécules trouvées dans les plantes et les animaux."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05",
      "order": 5,
      "title": "Lutter contre la pollution de l'eau et de l'air",
      "summary": "Les initiatives mondiales et les gestes individuels.",
      "conceptExplanation": "1. La lutte pour l'eau : les États construisent des aménagements coûteux pour capter, traiter, transporter et distribuer l'eau potable. En agriculture, il faut limiter les produits phytosanitaires (pesticides) et privilégier les cultures moins gourmandes en eau ; dans l'industrie, récupérer les polluants. En 1977, une conférence des Nations unies sur l'eau a affirmé le droit de tous à une eau potable. Chacun peut économiser l'eau : récupérer l'eau de pluie, prendre des douches rapides.\n\n2. La lutte contre la pollution de l'air : le premier Sommet de la Terre à Rio de Janeiro (Brésil) en 1992 et les COP successives (conférences sur le climat), dont l'Accord de Paris (2015), cherchent à réduire les gaz à effet de serre. Moyens : énergies renouvelables, économies d'énergie, filtres en sortie d'usine, transports en commun, covoiturage, vélo, marche. Chacun peut économiser l'énergie et limiter les transports polluants.",
      "keyRule": "Eau : traitement, moins de pesticides, conférence de l'ONU (1977) ; air : Sommet de Rio (1992), COP, Accord de Paris (2015), énergies renouvelables, transports en commun, covoiturage.",
      "formulas": [],
      "workedExample": {
        "title": "Un geste pour chaque problème",
        "statement": "Quel geste contre la pollution de l'air et lequel contre le gaspillage d'eau ?",
        "methodSteps": [
          "Pollution de l'air : covoiturage, transports en commun, vélo.",
          "Gaspillage d'eau : douches rapides, récupération de l'eau de pluie."
        ],
        "conclusion": "Chaque citoyen peut agir à son niveau."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Fournir de l'eau potable",
          "stepTheme": "Fournir de l'eau potable",
          "stepBadge": "Fournir de l'eau potable",
          "paragraphText": "Pour fournir une eau potable en quantité et en qualité, les États réalisent des aménagements coûteux : captage, traitement, transport et distribution de l'eau.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q1",
            "type": "mcq",
            "prompt": "Que doivent faire les États pour fournir de l'eau potable ?",
            "options": [
              "Interdire à la population de boire de l'eau",
              "Capter, traiter, transporter et distribuer l'eau",
              "Laisser chacun puiser l'eau des rivières sans traitement",
              "Remplacer l'eau par des boissons sucrées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'eau doit être captée, traitée (rendue potable), puis transportée et distribuée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le droit à l'eau",
          "stepTheme": "Le droit à l'eau",
          "stepBadge": "Le droit à l'eau",
          "paragraphText": "En 1977, une conférence des Nations unies sur l'eau a affirmé le droit de tous d'accéder à une eau potable, non souillée et non contaminée.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q2",
            "type": "mcq",
            "prompt": "Qu'a affirmé la conférence des Nations unies sur l'eau de 1977 ?",
            "options": [
              "L'interdiction de construire des barrages",
              "La privatisation de toutes les rivières",
              "L'obligation de dessaler l'eau de mer partout",
              "Le droit de tous d'accéder à une eau potable"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La conférence de 1977 a affirmé le droit de chacun à une eau potable."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Moins de pesticides",
          "stepTheme": "Moins de pesticides",
          "stepBadge": "Moins de pesticides",
          "paragraphText": "Pour protéger l'eau, l'agriculture doit :\n• limiter les produits phytosanitaires (pesticides) ;\n• privilégier les engrais naturels ;\n• choisir des cultures moins gourmandes en eau.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q3",
            "type": "mcq",
            "prompt": "Quelle mesure protège l'eau contre la pollution agricole ?",
            "options": [
              "Limiter l'utilisation des produits phytosanitaires",
              "Augmenter les doses de pesticides",
              "Déverser les engrais dans les rivières",
              "Irriguer en continu avec de l'eau potable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Moins de pesticides, c'est moins de produits chimiques dans les rivières et les nappes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le Sommet de la Terre",
          "stepTheme": "Le Sommet de la Terre",
          "stepBadge": "Le Sommet de la Terre",
          "paragraphText": "En 1992, le premier Sommet de la Terre s'est tenu à Rio de Janeiro, au Brésil.\nLes pays y ont pris des engagements pour l'environnement, dont la réduction des gaz à effet de serre.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q4",
            "type": "mcq",
            "prompt": "Où et quand s'est tenu le premier Sommet de la Terre ?",
            "options": [
              "À Paris, en France, en 2015",
              "À Abidjan, en Côte d'Ivoire, en 1960",
              "À Rio de Janeiro, au Brésil, en 1992",
              "À New York, aux États-Unis, en 1945"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le premier Sommet de la Terre a eu lieu à Rio en 1992."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les COP",
          "stepTheme": "Les COP",
          "stepBadge": "Les COP",
          "paragraphText": "Les COP sont des conférences internationales sur le climat, organisées chaque année.\nLa COP de 2015 a adopté l'Accord de Paris pour limiter le réchauffement climatique.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q5",
            "type": "mcq",
            "prompt": "Quel accord international sur le climat a été adopté en 2015 ?",
            "options": [
              "Le traité de Rome",
              "La convention de Lomé",
              "L'accord de Cotonou",
              "L'Accord de Paris"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'Accord de Paris (2015) vise à limiter le réchauffement climatique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Réduire la pollution de l'air",
          "stepTheme": "Réduire la pollution de l'air",
          "stepBadge": "Réduire la pollution de l'air",
          "paragraphText": "Pour réduire la pollution de l'air :\n• développer les énergies renouvelables (solaire, éolien) ;\n• installer des filtres en sortie d'usine ;\n• développer les transports en commun, le covoiturage, le vélo, la marche.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces mesures lutte contre la pollution de l'air ?",
            "options": [
              "La création de parcs et réserves",
              "La limitation des produits phytosanitaires",
              "La pratique du covoiturage",
              "Le développement de l'agroforesterie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Moins de voitures sur la route, c'est moins de gaz d'échappement."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Les gestes de chacun",
          "stepTheme": "Les gestes de chacun",
          "stepBadge": "Les gestes de chacun",
          "paragraphText": "À notre niveau, nous pouvons :\n• économiser l'eau (douches rapides, eau de pluie) ;\n• économiser l'énergie (éteindre les lumières) ;\n• limiter les transports polluants ;\n• utiliser des produits ménagers naturels.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q7",
            "type": "mcq",
            "prompt": "Lequel de ces gestes individuels économise l'eau ?",
            "options": [
              "Laisser couler le robinet en se brossant les dents",
              "Récupérer l'eau de pluie pour arroser le jardin",
              "Laver sa voiture tous les jours au tuyau",
              "Prendre des bains très longs chaque jour"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Récupérer l'eau de pluie évite d'utiliser l'eau potable pour arroser."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q1",
          "type": "mcq",
          "prompt": "Que doivent faire les États pour fournir de l'eau potable ?",
          "options": [
            "Interdire à la population de boire de l'eau",
            "Capter, traiter, transporter et distribuer l'eau",
            "Laisser chacun puiser l'eau des rivières sans traitement",
            "Remplacer l'eau par des boissons sucrées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'eau doit être captée, traitée (rendue potable), puis transportée et distribuée."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q2",
          "type": "mcq",
          "prompt": "Qu'a affirmé la conférence des Nations unies sur l'eau de 1977 ?",
          "options": [
            "L'interdiction de construire des barrages",
            "La privatisation de toutes les rivières",
            "L'obligation de dessaler l'eau de mer partout",
            "Le droit de tous d'accéder à une eau potable"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La conférence de 1977 a affirmé le droit de chacun à une eau potable."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q3",
          "type": "mcq",
          "prompt": "Quelle mesure protège l'eau contre la pollution agricole ?",
          "options": [
            "Limiter l'utilisation des produits phytosanitaires",
            "Augmenter les doses de pesticides",
            "Déverser les engrais dans les rivières",
            "Irriguer en continu avec de l'eau potable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Moins de pesticides, c'est moins de produits chimiques dans les rivières et les nappes."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q4",
          "type": "mcq",
          "prompt": "Où et quand s'est tenu le premier Sommet de la Terre ?",
          "options": [
            "À Paris, en France, en 2015",
            "À Abidjan, en Côte d'Ivoire, en 1960",
            "À Rio de Janeiro, au Brésil, en 1992",
            "À New York, aux États-Unis, en 1945"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le premier Sommet de la Terre a eu lieu à Rio en 1992."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q5",
          "type": "mcq",
          "prompt": "Quel accord international sur le climat a été adopté en 2015 ?",
          "options": [
            "Le traité de Rome",
            "La convention de Lomé",
            "L'accord de Cotonou",
            "L'Accord de Paris"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'Accord de Paris (2015) vise à limiter le réchauffement climatique."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces mesures lutte contre la pollution de l'air ?",
          "options": [
            "La création de parcs et réserves",
            "La limitation des produits phytosanitaires",
            "La pratique du covoiturage",
            "Le développement de l'agroforesterie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Moins de voitures sur la route, c'est moins de gaz d'échappement."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p05_q7",
          "type": "mcq",
          "prompt": "Lequel de ces gestes individuels économise l'eau ?",
          "options": [
            "Laisser couler le robinet en se brossant les dents",
            "Récupérer l'eau de pluie pour arroser le jardin",
            "Laver sa voiture tous les jours au tuyau",
            "Prendre des bains très longs chaque jour"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Récupérer l'eau de pluie évite d'utiliser l'eau potable pour arroser."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06",
      "order": 6,
      "title": "Protéger les sols et la biodiversité",
      "summary": "Agroécologie, lutte contre l'érosion, aires protégées et conventions internationales.",
      "conceptExplanation": "1. Protéger les sols : développer l'agroécologie et l'agroforesterie (associer arbres et cultures). Contre l'érosion :\n- la culture en courbes de niveau sur les pentes ;\n- les terrasses et les rigoles, qui freinent le ruissellement ;\n- la culture en bandes, qui alterne bandes cultivées et bandes en jachère.\n\n2. Protéger la biodiversité :\n- la Convention sur la diversité biologique, adoptée au Sommet de la Terre de Rio en 1992 ;\n- les parcs nationaux et les réserves naturelles, où animaux et plantes sont protégés ;\n- l'interdiction de capturer certaines espèces : la chasse commerciale à la baleine est interdite depuis 1986 par la Commission baleinière internationale ;\n- l'élevage en captivité d'espèces menacées, pour les relâcher ensuite dans la nature.",
      "keyRule": "Sols : agroforesterie, courbes de niveau, terrasses, culture en bandes ; biodiversité : convention de Rio (1992), parcs et réserves, interdiction de la chasse à la baleine (1986).",
      "formulas": [],
      "workedExample": {
        "title": "Associer un problème à une solution",
        "statement": "Relie : pollution des sols, diminution de la biodiversité, pollution de l'air.",
        "methodSteps": [
          "Pollution des sols : agroforesterie, agriculture écologique.",
          "Diminution de la biodiversité : parcs et réserves.",
          "Pollution de l'air : covoiturage."
        ],
        "conclusion": "Chaque problème a ses solutions propres."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'agroforesterie",
          "stepTheme": "L'agroforesterie",
          "stepBadge": "L'agroforesterie",
          "paragraphText": "L'agroforesterie associe sur une même parcelle des arbres et des cultures.\nLes arbres protègent le sol de l'érosion et l'enrichissent.\nAvec l'agroécologie, elle protège les sols.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'agroforesterie ?",
            "options": [
              "Associer des arbres et des cultures sur une même parcelle",
              "Couper tous les arbres pour agrandir les champs",
              "Cultiver uniquement sous serre",
              "Brûler la forêt avant de semer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Agro = champ, foresterie = arbres : on cultive avec les arbres."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les courbes de niveau",
          "stepTheme": "Les courbes de niveau",
          "stepBadge": "Les courbes de niveau",
          "paragraphText": "Sur un terrain en pente, on cultive en suivant les courbes de niveau (perpendiculairement à la pente).\nLes sillons retiennent l'eau et freinent le ruissellement qui emporte le sol.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q2",
            "type": "mcq",
            "prompt": "Pourquoi cultive-t-on selon les courbes de niveau sur une pente ?",
            "options": [
              "Pour freiner le ruissellement de l'eau qui emporte le sol",
              "Pour accélérer l'écoulement de l'eau vers le bas",
              "Pour que les cultures reçoivent moins de soleil",
              "Pour faciliter le passage des troupeaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les sillons perpendiculaires à la pente retiennent l'eau et le sol."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Terrasses et cultures en bandes",
          "stepTheme": "Terrasses et cultures en bandes",
          "stepBadge": "Terrasses et cultures en bandes",
          "paragraphText": "• Les terrasses : des marches aménagées sur une pente pour retenir l'eau et le sol.\n• La culture en bandes : on alterne des bandes cultivées et des bandes en jachère, ce qui limite l'érosion par le vent.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce que la culture en bandes ?",
            "options": [
              "Cultiver une seule plante sur tout le terrain",
              "Alterner des bandes cultivées et des bandes laissées en jachère",
              "Planter des bandes de plastique entre les champs",
              "Brûler les champs en bandes successives"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'alternance de bandes protège le sol contre l'érosion, surtout éolienne."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La convention de Rio",
          "stepTheme": "La convention de Rio",
          "stepBadge": "La convention de Rio",
          "paragraphText": "Au premier Sommet de la Terre, à Rio de Janeiro en 1992, les pays ont adopté la Convention sur la diversité biologique pour protéger la biodiversité dans le monde.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q4",
            "type": "mcq",
            "prompt": "Quelle convention a été adoptée en 1992 à Rio pour protéger le vivant ?",
            "options": [
              "La Convention sur le droit de la mer",
              "La Charte des Nations unies",
              "La Convention sur la diversité biologique",
              "Le traité de non-prolifération nucléaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La Convention sur la diversité biologique a été adoptée à Rio en 1992."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les espaces protégés",
          "stepTheme": "Les espaces protégés",
          "stepBadge": "Les espaces protégés",
          "paragraphText": "Pour préserver le patrimoine naturel, on crée des parcs nationaux et des réserves naturelles : les écosystèmes n'y sont pas perturbés et les animaux et plantes y sont protégés.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q5",
            "type": "mcq",
            "prompt": "Quelle solution lutte contre la diminution de la biodiversité ?",
            "options": [
              "La pratique du covoiturage",
              "L'installation de filtres en sortie d'usine",
              "La récupération de l'eau de pluie",
              "La création de parcs nationaux et de réserves"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les parcs et réserves protègent directement les espèces et leurs milieux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La baleine protégée",
          "stepTheme": "La baleine protégée",
          "stepBadge": "La baleine protégée",
          "paragraphText": "Certaines espèces ne peuvent plus être capturées.\nExemple : la chasse commerciale à la baleine est interdite depuis 1986 par la Commission baleinière internationale.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q6",
            "type": "mcq",
            "prompt": "Depuis quand la chasse commerciale à la baleine est-elle interdite ?",
            "options": [
              "Depuis 1945",
              "Depuis 2015",
              "Depuis 1986",
              "Depuis 1960"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La Commission baleinière internationale l'a interdite en 1986."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "L'élevage en captivité",
          "stepTheme": "L'élevage en captivité",
          "stepBadge": "L'élevage en captivité",
          "paragraphText": "Pour certaines espèces menacées, on élève des animaux en captivité, puis on les relâche dans leur milieu naturel pour reconstituer leur population.",
          "exercise": {
            "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q7",
            "type": "mcq",
            "prompt": "Pourquoi élève-t-on certaines espèces menacées en captivité ?",
            "options": [
              "Pour les vendre comme animaux de compagnie",
              "Pour les garder enfermées pour toujours",
              "Pour les utiliser dans les cirques",
              "Pour les relâcher ensuite dans la nature et reconstituer leur population"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'élevage en captivité sert à réintroduire l'espèce dans son milieu."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'agroforesterie ?",
          "options": [
            "Associer des arbres et des cultures sur une même parcelle",
            "Couper tous les arbres pour agrandir les champs",
            "Cultiver uniquement sous serre",
            "Brûler la forêt avant de semer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Agro = champ, foresterie = arbres : on cultive avec les arbres."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q2",
          "type": "mcq",
          "prompt": "Pourquoi cultive-t-on selon les courbes de niveau sur une pente ?",
          "options": [
            "Pour freiner le ruissellement de l'eau qui emporte le sol",
            "Pour accélérer l'écoulement de l'eau vers le bas",
            "Pour que les cultures reçoivent moins de soleil",
            "Pour faciliter le passage des troupeaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les sillons perpendiculaires à la pente retiennent l'eau et le sol."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce que la culture en bandes ?",
          "options": [
            "Cultiver une seule plante sur tout le terrain",
            "Alterner des bandes cultivées et des bandes laissées en jachère",
            "Planter des bandes de plastique entre les champs",
            "Brûler les champs en bandes successives"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'alternance de bandes protège le sol contre l'érosion, surtout éolienne."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q4",
          "type": "mcq",
          "prompt": "Quelle convention a été adoptée en 1992 à Rio pour protéger le vivant ?",
          "options": [
            "La Convention sur le droit de la mer",
            "La Charte des Nations unies",
            "La Convention sur la diversité biologique",
            "Le traité de non-prolifération nucléaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La Convention sur la diversité biologique a été adoptée à Rio en 1992."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q5",
          "type": "mcq",
          "prompt": "Quelle solution lutte contre la diminution de la biodiversité ?",
          "options": [
            "La pratique du covoiturage",
            "L'installation de filtres en sortie d'usine",
            "La récupération de l'eau de pluie",
            "La création de parcs nationaux et de réserves"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les parcs et réserves protègent directement les espèces et leurs milieux."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q6",
          "type": "mcq",
          "prompt": "Depuis quand la chasse commerciale à la baleine est-elle interdite ?",
          "options": [
            "Depuis 1945",
            "Depuis 2015",
            "Depuis 1986",
            "Depuis 1960"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La Commission baleinière internationale l'a interdite en 1986."
        },
        {
          "id": "seconde_a_hg_geographie_t3_l02_problemes_environnementaux_actuels_p06_q7",
          "type": "mcq",
          "prompt": "Pourquoi élève-t-on certaines espèces menacées en captivité ?",
          "options": [
            "Pour les vendre comme animaux de compagnie",
            "Pour les garder enfermées pour toujours",
            "Pour les utiliser dans les cirques",
            "Pour les relâcher ensuite dans la nature et reconstituer leur population"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'élevage en captivité sert à réintroduire l'espèce dans son milieu."
        }
      ]
    }
  ]
};
