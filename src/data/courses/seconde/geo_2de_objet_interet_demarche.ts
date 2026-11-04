import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 2nde G1-La géographie Objet ,Intérêt et démarche.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const GEO_2DE_L01_OBJET_INTERET_DEMARCHE: CurriculumChapter = {
  "id": "seconde_a_hg_geographie_l01_objet_interet_demarche",
  "subjectId": "histoire_geo",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 1,
  "title": "Leçon 1 : La géographie, objet, intérêt et démarche",
  "summary": "Ce qu'est la géographie, ses domaines, ses outils, sa démarche en cinq étapes et son utilité.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "2nde G1-La géographie Objet ,Intérêt et démarche.pdf",
  "points": [
    {
      "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01",
      "order": 1,
      "title": "Qu'est-ce que la géographie ?",
      "summary": "Le sens du mot géographie et l'objet de cette science.",
      "conceptExplanation": "Le mot géographie vient du grec « gê » (la terre) et « graphein » (décrire, dessiner) : c'est, au départ, la description de la terre.\nAujourd'hui, la géographie décrit et explique tous les phénomènes naturels et humains observés à la surface de la terre.\nC'est la science de l'espace : son objet d'étude est l'Homme dans son milieu de vie.",
      "keyRule": "Géographie = « gê » (terre) + « graphein » (décrire) ; son objet : l'Homme dans son milieu de vie.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître un sujet de géographie",
        "statement": "« Pourquoi la population ivoirienne se concentre-t-elle dans le Sud forestier ? » Est-ce une question de géographie ?",
        "methodSteps": [
          "On parle d'êtres humains (la population).",
          "On parle d'un espace (le Sud forestier) et de la répartition sur cet espace.",
          "On cherche à expliquer un phénomène observé à la surface de la terre."
        ],
        "conclusion": "Oui : c'est une question de géographie, car elle étudie l'Homme dans son espace."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'origine du mot",
          "stepTheme": "L'origine du mot",
          "stepBadge": "L'origine du mot",
          "paragraphText": "Le mot géographie vient du grec :\n• « gê » signifie la terre ;\n• « graphein » signifie décrire ou dessiner.\nÉtymologiquement, la géographie est donc la description (le dessin) de la terre.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q1",
            "type": "mcq",
            "prompt": "Que signifie le mot grec « gê » dans le mot géographie ?",
            "options": [
              "L'eau",
              "Le ciel",
              "La terre",
              "L'homme"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Gê » = la terre ; « graphein » = décrire, dessiner."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Décrire ou dessiner",
          "stepTheme": "Décrire ou dessiner",
          "stepBadge": "Décrire ou dessiner",
          "paragraphText": "La seconde partie du mot, « graphein », signifie décrire ou dessiner.\nC'est pourquoi on dit que la géographie est, à l'origine, le « dessin de la terre ».",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q2",
            "type": "mcq",
            "prompt": "Que signifie « graphein » ?",
            "options": [
              "Décrire ou dessiner",
              "Mesurer ou calculer",
              "Raconter le passé",
              "Voyager ou explorer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Graphein » veut dire décrire, dessiner : la géographie décrit la terre."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La science de l'espace",
          "stepTheme": "La science de l'espace",
          "stepBadge": "La science de l'espace",
          "paragraphText": "Aujourd'hui, la géographie ne se contente plus de dessiner la terre.\nElle décrit ET explique tous les phénomènes naturels et humains observés à la surface de la terre.\nOn dit que c'est la science de l'espace.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q3",
            "type": "mcq",
            "prompt": "Comment définit-on la géographie aujourd'hui ?",
            "options": [
              "La science qui étudie uniquement les événements du passé des sociétés humaines",
              "La science qui étudie seulement le relief et les roches de la croûte terrestre",
              "La science qui se limite à dessiner les cartes des pays du monde",
              "La science qui décrit et explique les phénomènes naturels et humains à la surface de la terre"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La géographie décrit et explique les phénomènes naturels ET humains à la surface de la terre : c'est la science de l'espace."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'objet de la géographie",
          "stepTheme": "L'objet de la géographie",
          "stepBadge": "L'objet de la géographie",
          "paragraphText": "L'objet d'étude de la géographie est l'Homme dans son milieu de vie, c'est-à-dire dans son espace.\nLe géographe étudie comment les hommes occupent, aménagent et utilisent l'espace.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q4",
            "type": "mcq",
            "prompt": "Quel est l'objet d'étude de la géographie ?",
            "options": [
              "Les événements passés de l'humanité",
              "L'Homme dans son milieu de vie (son espace)",
              "Les êtres vivants microscopiques",
              "Les astres et les étoiles de l'univers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La géographie étudie l'Homme dans son milieu de vie, son espace."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Géographie ou histoire ?",
          "stepTheme": "Géographie ou histoire ?",
          "stepBadge": "Géographie ou histoire ?",
          "paragraphText": "Attention à ne pas confondre :\n• l'histoire étudie le passé des hommes ;\n• la géographie étudie l'Homme dans son espace, aujourd'hui.\nLes deux disciplines sont complémentaires et forment le binôme histoire-géographie.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces questions relève de la géographie ?",
            "options": [
              "En quelle année la Côte d'Ivoire est-elle devenue indépendante ?",
              "Comment la population se répartit-elle sur le territoire ivoirien ?",
              "Qui était le premier président de la République de Côte d'Ivoire ?",
              "Comment vivaient les royaumes africains au XVIIe siècle ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La répartition de la population sur un territoire est une question d'espace : c'est de la géographie. Les autres questions portent sur le passé : c'est de l'histoire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une science en évolution",
          "stepTheme": "Une science en évolution",
          "stepBadge": "Une science en évolution",
          "paragraphText": "La géographie a beaucoup évolué depuis sa naissance.\nSimple description de la terre au départ, elle est devenue une science moderne qui explique les phénomènes grâce à une démarche rigoureuse.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q6",
            "type": "mcq",
            "prompt": "Quelle phrase résume l'évolution de la géographie ?",
            "options": [
              "Elle est passée de l'explication des phénomènes à la simple description de la terre",
              "Elle n'a jamais changé depuis l'Antiquité grecque",
              "Elle a abandonné l'étude des hommes pour n'étudier que la nature",
              "Elle est passée de la simple description de la terre à l'explication des phénomènes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D'abord description de la terre, la géographie est devenue une science qui décrit ET explique."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Plus qu'une représentation",
          "stepTheme": "Plus qu'une représentation",
          "stepBadge": "Plus qu'une représentation",
          "paragraphText": "Certains pensent que la géographie est une simple représentation de la terre.\nC'est faux : c'est une véritable science, avec un objet (l'Homme dans son espace) et une démarche rigoureuse.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q7",
            "type": "mcq",
            "prompt": "Un camarade affirme : « La géographie, c'est juste dessiner des cartes. » Que lui répondre ?",
            "options": [
              "Non, c'est une science qui décrit et explique l'espace avec une démarche rigoureuse",
              "Oui, la géographie se limite à la réalisation de cartes et de croquis",
              "Non, la géographie étudie uniquement les dates et les grands personnages",
              "Oui, car la géographie n'utilise jamais de calculs ni d'explications"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les cartes sont un outil ; la géographie est une science qui décrit, explique et compare les phénomènes de l'espace."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q1",
          "type": "mcq",
          "prompt": "Que signifie le mot grec « gê » dans le mot géographie ?",
          "options": [
            "L'eau",
            "Le ciel",
            "La terre",
            "L'homme"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Gê » = la terre ; « graphein » = décrire, dessiner."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q2",
          "type": "mcq",
          "prompt": "Que signifie « graphein » ?",
          "options": [
            "Décrire ou dessiner",
            "Mesurer ou calculer",
            "Raconter le passé",
            "Voyager ou explorer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Graphein » veut dire décrire, dessiner : la géographie décrit la terre."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q3",
          "type": "mcq",
          "prompt": "Comment définit-on la géographie aujourd'hui ?",
          "options": [
            "La science qui étudie uniquement les événements du passé des sociétés humaines",
            "La science qui étudie seulement le relief et les roches de la croûte terrestre",
            "La science qui se limite à dessiner les cartes des pays du monde",
            "La science qui décrit et explique les phénomènes naturels et humains à la surface de la terre"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La géographie décrit et explique les phénomènes naturels ET humains à la surface de la terre : c'est la science de l'espace."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q4",
          "type": "mcq",
          "prompt": "Quel est l'objet d'étude de la géographie ?",
          "options": [
            "Les événements passés de l'humanité",
            "L'Homme dans son milieu de vie (son espace)",
            "Les êtres vivants microscopiques",
            "Les astres et les étoiles de l'univers"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La géographie étudie l'Homme dans son milieu de vie, son espace."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces questions relève de la géographie ?",
          "options": [
            "En quelle année la Côte d'Ivoire est-elle devenue indépendante ?",
            "Comment la population se répartit-elle sur le territoire ivoirien ?",
            "Qui était le premier président de la République de Côte d'Ivoire ?",
            "Comment vivaient les royaumes africains au XVIIe siècle ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La répartition de la population sur un territoire est une question d'espace : c'est de la géographie. Les autres questions portent sur le passé : c'est de l'histoire."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q6",
          "type": "mcq",
          "prompt": "Quelle phrase résume l'évolution de la géographie ?",
          "options": [
            "Elle est passée de l'explication des phénomènes à la simple description de la terre",
            "Elle n'a jamais changé depuis l'Antiquité grecque",
            "Elle a abandonné l'étude des hommes pour n'étudier que la nature",
            "Elle est passée de la simple description de la terre à l'explication des phénomènes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D'abord description de la terre, la géographie est devenue une science qui décrit ET explique."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p01_q7",
          "type": "mcq",
          "prompt": "Un camarade affirme : « La géographie, c'est juste dessiner des cartes. » Que lui répondre ?",
          "options": [
            "Non, c'est une science qui décrit et explique l'espace avec une démarche rigoureuse",
            "Oui, la géographie se limite à la réalisation de cartes et de croquis",
            "Non, la géographie étudie uniquement les dates et les grands personnages",
            "Oui, car la géographie n'utilise jamais de calculs ni d'explications"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cartes sont un outil ; la géographie est une science qui décrit, explique et compare les phénomènes de l'espace."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02",
      "order": 2,
      "title": "La géographie physique",
      "summary": "Le domaine qui étudie les phénomènes naturels et ses quatre branches.",
      "conceptExplanation": "La géographie a trois grands domaines : la géographie physique, la géographie humaine et la géographie économique.\n\nLa géographie physique étudie les phénomènes naturels : climat, relief, végétation, sols, cours d'eau.\nElle a quatre branches :\n- la géomorphologie étudie le relief (plaine, plateau, montagne) ;\n- la biogéographie étudie la faune et la flore ;\n- la climatologie étudie les climats et leurs variations ;\n- l'hydrographie et l'océanographie étudient les eaux (cours d'eau, mers, océans).",
      "keyRule": "Géographie physique = phénomènes naturels : géomorphologie (relief), biogéographie (faune, flore), climatologie (climats), hydrographie/océanographie (eaux).",
      "formulas": [],
      "workedExample": {
        "title": "Classer une étude",
        "statement": "Une équipe étudie les crues du fleuve Bandama. Dans quelle branche classer ce travail ?",
        "methodSteps": [
          "Le sujet est un cours d'eau.",
          "Les cours d'eau sont des phénomènes naturels : géographie physique.",
          "La branche qui étudie les eaux est l'hydrographie."
        ],
        "conclusion": "C'est de l'hydrographie, une branche de la géographie physique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Trois grands domaines",
          "stepTheme": "Trois grands domaines",
          "stepBadge": "Trois grands domaines",
          "paragraphText": "La géographie a trois grands domaines d'étude :\n• la géographie physique ;\n• la géographie humaine ;\n• la géographie économique.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q1",
            "type": "mcq",
            "prompt": "Quels sont les trois grands domaines de la géographie ?",
            "options": [
              "Physique, historique et politique",
              "Humaine, religieuse et culturelle",
              "Physique, humaine et économique",
              "Économique, militaire et sportive"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les trois domaines sont la géographie physique, humaine et économique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La géographie physique",
          "stepTheme": "La géographie physique",
          "stepBadge": "La géographie physique",
          "paragraphText": "La géographie physique étudie les phénomènes naturels :\nle climat, le relief, la végétation, les sols et les cours d'eau.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q2",
            "type": "mcq",
            "prompt": "Qu'étudie la géographie physique ?",
            "options": [
              "La population, sa répartition et ses déplacements sur un territoire",
              "Les activités de production, de commerce et de transport des hommes",
              "Les villes, les villages et l'organisation de l'habitat",
              "Les phénomènes naturels : climat, relief, végétation, sols, cours d'eau"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La géographie physique s'intéresse aux phénomènes naturels."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La géomorphologie",
          "stepTheme": "La géomorphologie",
          "stepBadge": "La géomorphologie",
          "paragraphText": "La géomorphologie étudie le relief : les plaines, les plateaux et les montagnes.\nExemple : l'étude des monts de la région de Man.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q3",
            "type": "mcq",
            "prompt": "Quelle branche étudie le relief (plaines, plateaux, montagnes) ?",
            "options": [
              "La biogéographie",
              "La climatologie",
              "La géomorphologie",
              "La démographie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le relief est l'objet de la géomorphologie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La biogéographie",
          "stepTheme": "La biogéographie",
          "stepBadge": "La biogéographie",
          "paragraphText": "La biogéographie étudie la faune (les animaux) et la flore (les végétaux) et leur répartition sur la terre.\nExemple : la répartition de la forêt dense et de la savane en Côte d'Ivoire.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q4",
            "type": "mcq",
            "prompt": "Qu'étudie la biogéographie ?",
            "options": [
              "Les climats et leurs variations",
              "La faune et la flore",
              "Les eaux des fleuves et des océans",
              "Les populations des villes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Bio = vivant : la biogéographie étudie la faune et la flore."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La climatologie",
          "stepTheme": "La climatologie",
          "stepBadge": "La climatologie",
          "paragraphText": "La climatologie étudie les différents climats et leurs variations : températures, pluies, saisons.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q5",
            "type": "mcq",
            "prompt": "Un géographe étudie la baisse des pluies dans le Nord ivoirien. Dans quelle branche travaille-t-il ?",
            "options": [
              "La climatologie",
              "La géomorphologie",
              "L'hydrographie",
              "La géographie urbaine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les pluies et leurs variations relèvent du climat : c'est la climatologie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Hydrographie et océanographie",
          "stepTheme": "Hydrographie et océanographie",
          "stepBadge": "Hydrographie et océanographie",
          "paragraphText": "L'hydrographie étudie les cours d'eau (fleuves, rivières, lacs).\nL'océanographie étudie les mers et les océans.\nToutes deux étudient les eaux.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q6",
            "type": "mcq",
            "prompt": "Quelle branche étudie les mers et les océans ?",
            "options": [
              "L'océanographie",
              "La biogéographie",
              "La climatologie",
              "La géomorphologie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'océanographie étudie les mers et les océans ; l'hydrographie, les cours d'eau."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une branche intruse",
          "stepTheme": "Une branche intruse",
          "stepBadge": "Une branche intruse",
          "paragraphText": "Les quatre branches de la géographie physique sont : géomorphologie, biogéographie, climatologie, hydrographie/océanographie.\nLa démographie n'en fait pas partie : elle étudie la population.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q7",
            "type": "mcq",
            "prompt": "Laquelle de ces branches N'appartient PAS à la géographie physique ?",
            "options": [
              "La géomorphologie",
              "La démographie",
              "La climatologie",
              "L'hydrographie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La démographie (étude de la population) appartient à la géographie humaine."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q1",
          "type": "mcq",
          "prompt": "Quels sont les trois grands domaines de la géographie ?",
          "options": [
            "Physique, historique et politique",
            "Humaine, religieuse et culturelle",
            "Physique, humaine et économique",
            "Économique, militaire et sportive"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les trois domaines sont la géographie physique, humaine et économique."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q2",
          "type": "mcq",
          "prompt": "Qu'étudie la géographie physique ?",
          "options": [
            "La population, sa répartition et ses déplacements sur un territoire",
            "Les activités de production, de commerce et de transport des hommes",
            "Les villes, les villages et l'organisation de l'habitat",
            "Les phénomènes naturels : climat, relief, végétation, sols, cours d'eau"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La géographie physique s'intéresse aux phénomènes naturels."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q3",
          "type": "mcq",
          "prompt": "Quelle branche étudie le relief (plaines, plateaux, montagnes) ?",
          "options": [
            "La biogéographie",
            "La climatologie",
            "La géomorphologie",
            "La démographie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le relief est l'objet de la géomorphologie."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q4",
          "type": "mcq",
          "prompt": "Qu'étudie la biogéographie ?",
          "options": [
            "Les climats et leurs variations",
            "La faune et la flore",
            "Les eaux des fleuves et des océans",
            "Les populations des villes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Bio = vivant : la biogéographie étudie la faune et la flore."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q5",
          "type": "mcq",
          "prompt": "Un géographe étudie la baisse des pluies dans le Nord ivoirien. Dans quelle branche travaille-t-il ?",
          "options": [
            "La climatologie",
            "La géomorphologie",
            "L'hydrographie",
            "La géographie urbaine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les pluies et leurs variations relèvent du climat : c'est la climatologie."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q6",
          "type": "mcq",
          "prompt": "Quelle branche étudie les mers et les océans ?",
          "options": [
            "L'océanographie",
            "La biogéographie",
            "La climatologie",
            "La géomorphologie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'océanographie étudie les mers et les océans ; l'hydrographie, les cours d'eau."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p02_q7",
          "type": "mcq",
          "prompt": "Laquelle de ces branches N'appartient PAS à la géographie physique ?",
          "options": [
            "La géomorphologie",
            "La démographie",
            "La climatologie",
            "L'hydrographie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La démographie (étude de la population) appartient à la géographie humaine."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03",
      "order": 3,
      "title": "Les géographies humaine et économique",
      "summary": "L'étude de la population, de son habitat et de ses activités.",
      "conceptExplanation": "La géographie humaine étudie la population et son cadre de vie (l'habitat) : sa composition, sa structure, sa répartition et sa mobilité. Elle s'intéresse aux foyers de peuplement, aux espaces vides et aux très grandes villes (mégalopoles).\nElle a trois branches :\n- la démographie : étude de la population ;\n- la géographie rurale : étude des campagnes ;\n- la géographie urbaine : étude des villes.\n\nLa géographie économique étudie les activités économiques de l'Homme et leurs réseaux d'échange : agriculture, industrie, commerce, transport.",
      "keyRule": "Géographie humaine = population et habitat (démographie, rurale, urbaine) ; géographie économique = activités et échanges (agriculture, industrie, commerce, transport).",
      "formulas": [],
      "workedExample": {
        "title": "Classer des sujets d'étude",
        "statement": "Classe : l'exode rural vers Abidjan ; le port autonome de San Pedro ; la croissance de la population ivoirienne.",
        "methodSteps": [
          "L'exode rural vers Abidjan : déplacement de population vers une ville, géographie humaine.",
          "Le port de San Pedro : transport et échanges, géographie économique.",
          "La croissance de la population : démographie, géographie humaine."
        ],
        "conclusion": "Deux sujets de géographie humaine, un sujet de géographie économique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La géographie humaine",
          "stepTheme": "La géographie humaine",
          "stepBadge": "La géographie humaine",
          "paragraphText": "La géographie humaine étudie la population et son cadre de vie, appelé habitat.\nElle s'intéresse à la composition de la population, à sa structure, à sa répartition dans l'espace et à sa mobilité.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q1",
            "type": "mcq",
            "prompt": "Qu'étudie la géographie humaine ?",
            "options": [
              "Le relief, les sols et la végétation",
              "Les climats et leurs variations",
              "La population et son cadre de vie (l'habitat)",
              "Les fleuves, les lacs et les océans"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La géographie humaine étudie la population et son habitat."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La démographie",
          "stepTheme": "La démographie",
          "stepBadge": "La démographie",
          "paragraphText": "La démographie est l'étude de la population : son nombre, sa croissance, sa natalité, sa mortalité.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q2",
            "type": "mcq",
            "prompt": "Quelle branche étudie la population, sa natalité et sa mortalité ?",
            "options": [
              "La biogéographie",
              "La géomorphologie",
              "L'océanographie",
              "La démographie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La démographie est l'étude de la population."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Géographie rurale et urbaine",
          "stepTheme": "Géographie rurale et urbaine",
          "stepBadge": "Géographie rurale et urbaine",
          "paragraphText": "• La géographie rurale étudie les campagnes (zones rurales).\n• La géographie urbaine étudie les villes (zones urbaines).",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q3",
            "type": "mcq",
            "prompt": "Une étude sur la croissance des quartiers d'Abobo relève de quelle branche ?",
            "options": [
              "La géographie rurale",
              "La biogéographie",
              "La géographie urbaine",
              "La climatologie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Abobo est une commune d'Abidjan, une ville : c'est la géographie urbaine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Foyers et espaces vides",
          "stepTheme": "Foyers et espaces vides",
          "stepBadge": "Foyers et espaces vides",
          "paragraphText": "La géographie humaine s'intéresse aussi :\n• aux grands foyers de peuplement (régions très peuplées) ;\n• aux espaces vides (régions presque sans habitants) ;\n• aux très grandes villes, appelées mégalopoles.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q4",
            "type": "mcq",
            "prompt": "Comment appelle-t-on une très grande ville ou un ensemble de très grandes villes ?",
            "options": [
              "Un foyer rural",
              "Un espace vide",
              "Un bassin versant",
              "Une mégalopole"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les très grandes villes sont appelées mégalopoles."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La géographie économique",
          "stepTheme": "La géographie économique",
          "stepBadge": "La géographie économique",
          "paragraphText": "La géographie économique étudie les activités économiques de l'Homme à la surface de la terre et leurs réseaux d'échange :\nagriculture, industrie, commerce, transport.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q5",
            "type": "mcq",
            "prompt": "Qu'étudie la géographie économique ?",
            "options": [
              "Les activités de production et d'échange : agriculture, industrie, commerce, transport",
              "La population, sa croissance et sa répartition dans les villes et les campagnes",
              "Les phénomènes naturels comme le relief, le climat et la végétation",
              "Les mers, les océans et les cours d'eau de la planète"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La géographie économique étudie les activités économiques et les échanges."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Classer un exemple",
          "stepTheme": "Classer un exemple",
          "stepBadge": "Classer un exemple",
          "paragraphText": "Pour classer un sujet, on se demande ce qu'il étudie :\n• la nature : géographie physique ;\n• la population et l'habitat : géographie humaine ;\n• les activités et les échanges : géographie économique.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q6",
            "type": "mcq",
            "prompt": "L'étude du chemin de fer Abidjan-Ouagadougou relève de quel domaine ?",
            "options": [
              "La géographie physique",
              "La géographie économique",
              "La démographie",
              "La géographie rurale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le chemin de fer est un moyen de transport : c'est une activité économique."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Industrie : humaine ou économique ?",
          "stepTheme": "Industrie : humaine ou économique ?",
          "stepBadge": "Industrie : humaine ou économique ?",
          "paragraphText": "Attention : l'industrie, le commerce et les transports sont des activités économiques.\nIls relèvent donc de la géographie économique, pas de la géographie humaine.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q7",
            "type": "mcq",
            "prompt": "Dans quel domaine classe-t-on l'industrie ?",
            "options": [
              "La géographie humaine",
              "La géographie économique",
              "La géographie physique",
              "La géographie urbaine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'industrie est une activité de production : géographie économique."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q1",
          "type": "mcq",
          "prompt": "Qu'étudie la géographie humaine ?",
          "options": [
            "Le relief, les sols et la végétation",
            "Les climats et leurs variations",
            "La population et son cadre de vie (l'habitat)",
            "Les fleuves, les lacs et les océans"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La géographie humaine étudie la population et son habitat."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q2",
          "type": "mcq",
          "prompt": "Quelle branche étudie la population, sa natalité et sa mortalité ?",
          "options": [
            "La biogéographie",
            "La géomorphologie",
            "L'océanographie",
            "La démographie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La démographie est l'étude de la population."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q3",
          "type": "mcq",
          "prompt": "Une étude sur la croissance des quartiers d'Abobo relève de quelle branche ?",
          "options": [
            "La géographie rurale",
            "La biogéographie",
            "La géographie urbaine",
            "La climatologie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Abobo est une commune d'Abidjan, une ville : c'est la géographie urbaine."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on une très grande ville ou un ensemble de très grandes villes ?",
          "options": [
            "Un foyer rural",
            "Un espace vide",
            "Un bassin versant",
            "Une mégalopole"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les très grandes villes sont appelées mégalopoles."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q5",
          "type": "mcq",
          "prompt": "Qu'étudie la géographie économique ?",
          "options": [
            "Les activités de production et d'échange : agriculture, industrie, commerce, transport",
            "La population, sa croissance et sa répartition dans les villes et les campagnes",
            "Les phénomènes naturels comme le relief, le climat et la végétation",
            "Les mers, les océans et les cours d'eau de la planète"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La géographie économique étudie les activités économiques et les échanges."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q6",
          "type": "mcq",
          "prompt": "L'étude du chemin de fer Abidjan-Ouagadougou relève de quel domaine ?",
          "options": [
            "La géographie physique",
            "La géographie économique",
            "La démographie",
            "La géographie rurale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le chemin de fer est un moyen de transport : c'est une activité économique."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p03_q7",
          "type": "mcq",
          "prompt": "Dans quel domaine classe-t-on l'industrie ?",
          "options": [
            "La géographie humaine",
            "La géographie économique",
            "La géographie physique",
            "La géographie urbaine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'industrie est une activité de production : géographie économique."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04",
      "order": 4,
      "title": "Une science interdisciplinaire et moderne",
      "summary": "Les liens de la géographie avec les autres sciences et ses outils modernes.",
      "conceptExplanation": "La géographie est une science interdisciplinaire.\n- Avec les sciences exactes : elle fait des calculs (taux de natalité et de mortalité en démographie, calcul de pente, part des secteurs d'activité dans l'économie).\n- Avec les autres sciences humaines : elles se complètent ; la géographie est même jumelée à l'histoire (le binôme histoire-géographie).\n\nElle utilise des moyens de plus en plus modernes :\n- le Système d'Information Géographique (SIG), qui recueille, stocke, traite, analyse et présente les données géographiques ;\n- l'analyse systémique ;\n- la photographie aérienne ;\n- la photographie satellitaire.",
      "keyRule": "La géographie s'appuie sur les sciences exactes (calculs) et humaines (histoire) ; ses outils modernes : SIG, photos aériennes et satellitaires.",
      "formulas": [],
      "workedExample": {
        "title": "Un calcul de géographie",
        "statement": "Une ville compte 100 000 habitants et 3 500 naissances dans l'année. Quel est son taux de natalité ?",
        "methodSteps": [
          "Taux de natalité = naissances / population × 1 000.",
          "3 500 / 100 000 × 1 000 = 35.",
          "Le taux de natalité est de 35 pour mille."
        ],
        "conclusion": "La géographie utilise les mathématiques pour mesurer les phénomènes humains."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une science interdisciplinaire",
          "stepTheme": "Une science interdisciplinaire",
          "stepBadge": "Une science interdisciplinaire",
          "paragraphText": "La géographie est interdisciplinaire : elle s'appuie sur les résultats d'autres sciences pour ses analyses.\nLe géographe a recours aux travaux des sciences exactes et des autres sciences humaines.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q1",
            "type": "mcq",
            "prompt": "Que signifie « la géographie est une science interdisciplinaire » ?",
            "options": [
              "Elle s'appuie sur les résultats d'autres sciences",
              "Elle refuse d'utiliser les travaux des autres sciences",
              "Elle n'étudie qu'un seul type de phénomène",
              "Elle remplace toutes les autres sciences humaines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Interdisciplinaire : elle travaille avec d'autres disciplines et utilise leurs résultats."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Avec les sciences exactes",
          "stepTheme": "Avec les sciences exactes",
          "stepBadge": "Avec les sciences exactes",
          "paragraphText": "La géographie utilise les sciences exactes (mathématiques, statistiques) pour faire des calculs :\n• taux de natalité et de mortalité ;\n• calcul de pente et de dénivellation ;\n• part des secteurs d'activité dans l'économie.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q2",
            "type": "mcq",
            "prompt": "Pourquoi la géographie a-t-elle besoin des sciences exactes ?",
            "options": [
              "Pour connaître les dates des grands événements de l'histoire africaine",
              "Pour remplacer l'observation du terrain par des formules",
              "Pour étudier les croyances et les religions des peuples",
              "Pour faire des calculs : taux de natalité, pentes, parts des secteurs d'activité"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les sciences exactes fournissent les outils de calcul (statistiques, pentes, taux)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le binôme histoire-géographie",
          "stepTheme": "Le binôme histoire-géographie",
          "stepBadge": "Le binôme histoire-géographie",
          "paragraphText": "La géographie est étroitement liée aux autres sciences humaines, qui se complètent.\nElle est même jumelée à l'histoire : c'est le binôme histoire-géographie.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q3",
            "type": "mcq",
            "prompt": "Avec quelle discipline la géographie forme-t-elle un binôme à l'école ?",
            "options": [
              "La physique",
              "La philosophie",
              "L'histoire",
              "Les mathématiques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Histoire et géographie forment le binôme histoire-géographie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le SIG",
          "stepTheme": "Le SIG",
          "stepBadge": "Le SIG",
          "paragraphText": "Le Système d'Information Géographique (SIG) est un système conçu pour recueillir, stocker, traiter, analyser, gérer et présenter les données spatiales et géographiques.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q4",
            "type": "mcq",
            "prompt": "Que permet un Système d'Information Géographique (SIG) ?",
            "options": [
              "Prendre des photographies du sol depuis un avion ou un ballon",
              "Mesurer la température et la pluie dans une station météo",
              "Recueillir, stocker, traiter, analyser et présenter des données géographiques",
              "Compter les habitants d'un pays lors d'un recensement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le SIG est un système informatique qui gère toutes les étapes des données géographiques."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Photos aériennes et satellitaires",
          "stepTheme": "Photos aériennes et satellitaires",
          "stepBadge": "Photos aériennes et satellitaires",
          "paragraphText": "Parmi les moyens modernes de la géographie :\n• la photographie aérienne (prise d'un avion ou d'un ballon) ;\n• la photographie satellitaire (prise d'un satellite) ;\n• l'analyse systémique.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q5",
            "type": "mcq",
            "prompt": "Lequel de ces outils est un moyen moderne de la géographie ?",
            "options": [
              "La photographie satellitaire",
              "Le cadran solaire",
              "La boussole en bois",
              "Le parchemin manuscrit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les images prises par satellite sont un outil moderne de la géographie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Calculer un taux",
          "stepTheme": "Calculer un taux",
          "stepBadge": "Calculer un taux",
          "paragraphText": "Taux de natalité = nombre de naissances / population totale × 1 000.\nIl s'exprime en pour mille (‰).",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q6",
            "type": "mcq",
            "prompt": "Une ville de 200 000 habitants compte 6 000 naissances en un an. Quel est son taux de natalité ?",
            "options": [
              "3 ‰",
              "300 ‰",
              "33 ‰",
              "30 ‰"
            ],
            "correctAnswerIndex": 3,
            "explanation": "6 000 / 200 000 × 1 000 = 30 ‰."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Analyse systémique",
          "stepTheme": "Analyse systémique",
          "stepBadge": "Analyse systémique",
          "paragraphText": "L'analyse systémique étudie un phénomène comme un ensemble d'éléments liés entre eux.\nElle suit les principes interdisciplinaires pour définir, étudier ou expliquer tout type de phénomène.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q7",
            "type": "mcq",
            "prompt": "Sur quel principe repose l'analyse systémique ?",
            "options": [
              "Étudier chaque élément séparément sans chercher de liens",
              "Étudier un phénomène comme un ensemble d'éléments liés entre eux",
              "Remplacer l'étude du terrain par la seule lecture de cartes",
              "Ne retenir que les phénomènes naturels d'un espace"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Systémique : on étudie le système, c'est-à-dire les éléments et leurs relations."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q1",
          "type": "mcq",
          "prompt": "Que signifie « la géographie est une science interdisciplinaire » ?",
          "options": [
            "Elle s'appuie sur les résultats d'autres sciences",
            "Elle refuse d'utiliser les travaux des autres sciences",
            "Elle n'étudie qu'un seul type de phénomène",
            "Elle remplace toutes les autres sciences humaines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Interdisciplinaire : elle travaille avec d'autres disciplines et utilise leurs résultats."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q2",
          "type": "mcq",
          "prompt": "Pourquoi la géographie a-t-elle besoin des sciences exactes ?",
          "options": [
            "Pour connaître les dates des grands événements de l'histoire africaine",
            "Pour remplacer l'observation du terrain par des formules",
            "Pour étudier les croyances et les religions des peuples",
            "Pour faire des calculs : taux de natalité, pentes, parts des secteurs d'activité"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les sciences exactes fournissent les outils de calcul (statistiques, pentes, taux)."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q3",
          "type": "mcq",
          "prompt": "Avec quelle discipline la géographie forme-t-elle un binôme à l'école ?",
          "options": [
            "La physique",
            "La philosophie",
            "L'histoire",
            "Les mathématiques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Histoire et géographie forment le binôme histoire-géographie."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q4",
          "type": "mcq",
          "prompt": "Que permet un Système d'Information Géographique (SIG) ?",
          "options": [
            "Prendre des photographies du sol depuis un avion ou un ballon",
            "Mesurer la température et la pluie dans une station météo",
            "Recueillir, stocker, traiter, analyser et présenter des données géographiques",
            "Compter les habitants d'un pays lors d'un recensement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le SIG est un système informatique qui gère toutes les étapes des données géographiques."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q5",
          "type": "mcq",
          "prompt": "Lequel de ces outils est un moyen moderne de la géographie ?",
          "options": [
            "La photographie satellitaire",
            "Le cadran solaire",
            "La boussole en bois",
            "Le parchemin manuscrit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les images prises par satellite sont un outil moderne de la géographie."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q6",
          "type": "mcq",
          "prompt": "Une ville de 200 000 habitants compte 6 000 naissances en un an. Quel est son taux de natalité ?",
          "options": [
            "3 ‰",
            "300 ‰",
            "33 ‰",
            "30 ‰"
          ],
          "correctAnswerIndex": 3,
          "explanation": "6 000 / 200 000 × 1 000 = 30 ‰."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p04_q7",
          "type": "mcq",
          "prompt": "Sur quel principe repose l'analyse systémique ?",
          "options": [
            "Étudier chaque élément séparément sans chercher de liens",
            "Étudier un phénomène comme un ensemble d'éléments liés entre eux",
            "Remplacer l'étude du terrain par la seule lecture de cartes",
            "Ne retenir que les phénomènes naturels d'un espace"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Systémique : on étudie le système, c'est-à-dire les éléments et leurs relations."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05",
      "order": 5,
      "title": "La démarche géographique",
      "summary": "Les cinq étapes de la démarche et leurs deux grandes phases.",
      "conceptExplanation": "La démarche géographique comprend cinq étapes :\n1. L'observation : découvrir le phénomène, directement (sur le terrain) ou indirectement (photos, cartes).\n2. La localisation : situer le phénomène grâce aux coordonnées géographiques et aux points cardinaux.\n3. La description : dire comment se présente le phénomène.\n4. L'explication : rechercher les causes et les origines du phénomène.\n5. La comparaison : établir des relations, des ressemblances et des différences, puis conclure.\n\nDepuis le XIXe siècle, ces étapes forment deux phases :\n- la phase descriptive : observation, localisation, description ;\n- la phase analytique : explication, comparaison.",
      "keyRule": "Observer, localiser, décrire (phase descriptive), puis expliquer et comparer (phase analytique).",
      "formulas": [],
      "workedExample": {
        "title": "Appliquer la démarche",
        "statement": "Étudier les embouteillages à Abidjan avec la démarche géographique.",
        "methodSteps": [
          "Observer : constater les bouchons (sur place ou sur des photos).",
          "Localiser : ponts, boulevards, communes concernées.",
          "Décrire : heures, longueur des files, types de véhicules.",
          "Expliquer : croissance de la population, peu de ponts, travail concentré au Plateau.",
          "Comparer : avec Lagos ou Dakar, puis conclure."
        ],
        "conclusion": "Les cinq étapes, dans l'ordre, transforment une simple observation en explication scientifique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Cinq étapes",
          "stepTheme": "Cinq étapes",
          "stepBadge": "Cinq étapes",
          "paragraphText": "La démarche géographique comprend cinq étapes, dans cet ordre :\nobservation → localisation → description → explication → comparaison.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q1",
            "type": "mcq",
            "prompt": "Combien d'étapes compte la démarche géographique ?",
            "options": [
              "Trois",
              "Cinq",
              "Quatre",
              "Six"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Observation, localisation, description, explication, comparaison : cinq étapes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'observation",
          "stepTheme": "L'observation",
          "stepBadge": "L'observation",
          "paragraphText": "L'observation consiste à découvrir le phénomène à étudier.\n• Directe : au contact du terrain.\n• Indirecte : à travers des photos, des cartes.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q2",
            "type": "mcq",
            "prompt": "Un élève étudie une plantation de cacao à partir d'une photographie. Quel type d'observation fait-il ?",
            "options": [
              "Une observation directe",
              "Une localisation",
              "Une comparaison",
              "Une observation indirecte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Passer par une photo ou une carte, c'est une observation indirecte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La localisation",
          "stepTheme": "La localisation",
          "stepBadge": "La localisation",
          "paragraphText": "La localisation consiste à situer le phénomène observé à la surface de la terre, grâce :\n• aux coordonnées géographiques (latitude, longitude) ;\n• aux repères comme les points cardinaux.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q3",
            "type": "mcq",
            "prompt": "Que fait-on à l'étape de la localisation ?",
            "options": [
              "On situe le phénomène grâce aux coordonnées géographiques et aux points cardinaux",
              "On recherche les causes qui expliquent l'origine du phénomène",
              "On compare le phénomène avec d'autres pour en tirer une conclusion",
              "On découvre le phénomène sur le terrain ou à partir de photos"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Localiser = situer le phénomène dans l'espace."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Description et explication",
          "stepTheme": "Description et explication",
          "stepBadge": "Description et explication",
          "paragraphText": "• Décrire : dire comment se présente le phénomène.\n• Expliquer : rechercher ses causes, faire comprendre ses origines et son évolution.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q4",
            "type": "mcq",
            "prompt": "Quelle étape consiste à rechercher les causes d'un phénomène ?",
            "options": [
              "La description",
              "La localisation",
              "L'explication",
              "L'observation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Expliquer, c'est chercher le « pourquoi » : les causes et les origines."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La comparaison",
          "stepTheme": "La comparaison",
          "stepBadge": "La comparaison",
          "paragraphText": "La comparaison établit des relations entre les phénomènes étudiés.\nElle met en relief les ressemblances et les différences, puis permet de conclure.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q5",
            "type": "mcq",
            "prompt": "Quelle est la dernière étape de la démarche géographique ?",
            "options": [
              "L'explication",
              "La description",
              "La localisation",
              "La comparaison"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La comparaison vient en dernier : elle permet de conclure."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Deux grandes phases",
          "stepTheme": "Deux grandes phases",
          "stepBadge": "Deux grandes phases",
          "paragraphText": "Depuis le XIXe siècle, les cinq étapes sont regroupées en deux phases :\n• phase descriptive : observation, localisation, description ;\n• phase analytique : explication, comparaison.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q6",
            "type": "mcq",
            "prompt": "Quelles étapes forment la phase analytique ?",
            "options": [
              "L'observation et la localisation",
              "La localisation et la description",
              "L'explication et la comparaison",
              "L'observation et la comparaison"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La phase analytique regroupe l'explication et la comparaison."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Respecter l'ordre",
          "stepTheme": "Respecter l'ordre",
          "stepBadge": "Respecter l'ordre",
          "paragraphText": "On ne peut pas expliquer un phénomène avant de l'avoir observé, situé et décrit.\nL'ordre des étapes est donc important.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q7",
            "type": "mcq",
            "prompt": "Quel ordre est correct ?",
            "options": [
              "Explication, observation, localisation, description, comparaison",
              "Observation, localisation, description, explication, comparaison",
              "Localisation, comparaison, observation, description, explication",
              "Description, explication, observation, comparaison, localisation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On observe, on localise, on décrit, puis on explique et on compare."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q1",
          "type": "mcq",
          "prompt": "Combien d'étapes compte la démarche géographique ?",
          "options": [
            "Trois",
            "Cinq",
            "Quatre",
            "Six"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Observation, localisation, description, explication, comparaison : cinq étapes."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q2",
          "type": "mcq",
          "prompt": "Un élève étudie une plantation de cacao à partir d'une photographie. Quel type d'observation fait-il ?",
          "options": [
            "Une observation directe",
            "Une localisation",
            "Une comparaison",
            "Une observation indirecte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Passer par une photo ou une carte, c'est une observation indirecte."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q3",
          "type": "mcq",
          "prompt": "Que fait-on à l'étape de la localisation ?",
          "options": [
            "On situe le phénomène grâce aux coordonnées géographiques et aux points cardinaux",
            "On recherche les causes qui expliquent l'origine du phénomène",
            "On compare le phénomène avec d'autres pour en tirer une conclusion",
            "On découvre le phénomène sur le terrain ou à partir de photos"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Localiser = situer le phénomène dans l'espace."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q4",
          "type": "mcq",
          "prompt": "Quelle étape consiste à rechercher les causes d'un phénomène ?",
          "options": [
            "La description",
            "La localisation",
            "L'explication",
            "L'observation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Expliquer, c'est chercher le « pourquoi » : les causes et les origines."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q5",
          "type": "mcq",
          "prompt": "Quelle est la dernière étape de la démarche géographique ?",
          "options": [
            "L'explication",
            "La description",
            "La localisation",
            "La comparaison"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La comparaison vient en dernier : elle permet de conclure."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q6",
          "type": "mcq",
          "prompt": "Quelles étapes forment la phase analytique ?",
          "options": [
            "L'observation et la localisation",
            "La localisation et la description",
            "L'explication et la comparaison",
            "L'observation et la comparaison"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La phase analytique regroupe l'explication et la comparaison."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p05_q7",
          "type": "mcq",
          "prompt": "Quel ordre est correct ?",
          "options": [
            "Explication, observation, localisation, description, comparaison",
            "Observation, localisation, description, explication, comparaison",
            "Localisation, comparaison, observation, description, explication",
            "Description, explication, observation, comparaison, localisation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On observe, on localise, on décrit, puis on explique et on compare."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06",
      "order": 6,
      "title": "L'intérêt de la géographie",
      "summary": "À quoi sert la géographie : intérêts pratique, éducatif et socio-économique.",
      "conceptExplanation": "1. L'intérêt pratique : la géographie permet de s'orienter et se localiser, de connaître notre planète et notre milieu (pour éviter les milieux contraignants), de fournir des outils de développement, de mettre en place des politiques de développement, et même de faire la guerre.\n\n2. L'intérêt éducatif : elle contribue à un comportement responsable face à l'environnement, à la formation intellectuelle, à l'ouverture sur le monde, à la solidarité, à la connaissance des autres peuples et à la compréhension de l'occupation de l'espace.\n\n3. L'intérêt socio-économique : elle prépare à des métiers (aménagement, développement territorial, gestion de l'environnement, enseignement, recherche).",
      "keyRule": "La géographie sert à s'orienter et développer un pays (pratique), à former des citoyens ouverts et responsables (éducatif), et à exercer des métiers (socio-économique).",
      "formulas": [],
      "workedExample": {
        "title": "Vrai ou faux ?",
        "statement": "« La géographie donne des informations sur le passé de l'homme. »",
        "methodSteps": [
          "Le passé de l'homme est l'objet de l'histoire.",
          "La géographie étudie l'Homme dans son espace."
        ],
        "conclusion": "Faux : c'est l'histoire qui étudie le passé de l'homme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'intérêt pratique",
          "stepTheme": "L'intérêt pratique",
          "stepBadge": "L'intérêt pratique",
          "paragraphText": "Sur le plan pratique, la géographie permet de :\n• s'orienter et se localiser ;\n• connaître la planète et notre milieu ;\n• mettre en place des politiques de développement.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q1",
            "type": "mcq",
            "prompt": "Lequel de ces éléments est un intérêt pratique de la géographie ?",
            "options": [
              "S'orienter et se localiser dans l'espace",
              "Connaître les dates des grandes batailles",
              "Apprendre les règles de grammaire",
              "Calculer la vitesse d'un mobile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "S'orienter et se localiser est l'un des intérêts pratiques de la géographie."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Éviter les milieux contraignants",
          "stepTheme": "Éviter les milieux contraignants",
          "stepBadge": "Éviter les milieux contraignants",
          "paragraphText": "Connaître son milieu permet d'éviter les milieux contraignants : zones inondables, pentes instables, sols trop pauvres.\nExemple : ne pas construire dans un bas-fond inondable.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q2",
            "type": "mcq",
            "prompt": "Pourquoi un maire consulte-t-il un géographe avant d'ouvrir un nouveau quartier ?",
            "options": [
              "Pour éviter les zones à risque comme les bas-fonds inondables",
              "Pour connaître l'histoire des premiers habitants de la ville",
              "Pour choisir les couleurs des façades des maisons",
              "Pour calculer le prix des terrains à la place des notaires"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La géographie aide à connaître le milieu et à éviter les milieux contraignants."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Géographie et défense",
          "stepTheme": "Géographie et défense",
          "stepBadge": "Géographie et défense",
          "paragraphText": "La géographie sert aussi à faire la guerre : connaître le relief, les routes et les cours d'eau est indispensable aux opérations militaires.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q3",
            "type": "mcq",
            "prompt": "Selon le cours, la géographie sert-elle aussi à faire la guerre ?",
            "options": [
              "Non, la géographie n'a aucun lien avec les questions militaires",
              "Oui, car la connaissance du terrain est indispensable aux opérations militaires",
              "Non, seule l'histoire est utile aux armées",
              "Oui, mais uniquement pour dessiner les drapeaux des pays"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cours le précise : la géographie permet aussi de faire la guerre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'intérêt éducatif",
          "stepTheme": "L'intérêt éducatif",
          "stepBadge": "L'intérêt éducatif",
          "paragraphText": "La géographie contribue à :\n• un comportement responsable face à l'environnement ;\n• la formation intellectuelle ;\n• l'ouverture sur le monde et la connaissance des autres peuples ;\n• la solidarité.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q4",
            "type": "mcq",
            "prompt": "Lequel de ces éléments est un intérêt éducatif de la géographie ?",
            "options": [
              "La fabrication de produits industriels",
              "La construction de routes et de ponts",
              "L'ouverture sur le monde et la connaissance des autres peuples",
              "La prévision des cours de la bourse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'ouverture sur le monde fait partie de l'intérêt éducatif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'intérêt socio-économique",
          "stepTheme": "L'intérêt socio-économique",
          "stepBadge": "L'intérêt socio-économique",
          "paragraphText": "La géographie prépare à des métiers :\n• aménagement et développement du territoire ;\n• gestion de l'environnement ;\n• enseignement secondaire et universitaire ;\n• recherche.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q5",
            "type": "mcq",
            "prompt": "Lequel de ces métiers est un débouché de la géographie ?",
            "options": [
              "Chirurgien dentiste",
              "Pilote de ligne",
              "Avocat d'affaires",
              "Aménagiste du territoire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'aménagement du territoire est un débouché direct de la géographie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Géographie et passé",
          "stepTheme": "Géographie et passé",
          "stepBadge": "Géographie et passé",
          "paragraphText": "Attention : la géographie ne donne pas d'informations sur le passé de l'homme.\nC'est l'histoire qui étudie le passé.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q6",
            "type": "mcq",
            "prompt": "« La géographie donne des informations sur le passé de l'homme. » Cette affirmation est :",
            "options": [
              "Vraie, car la géographie étudie toutes les époques",
              "Vraie, car l'espace garde toujours la trace du passé",
              "Fausse, c'est l'histoire qui étudie le passé de l'homme",
              "Fausse, car la géographie n'étudie pas l'homme"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La géographie étudie l'Homme dans son espace ; le passé relève de l'histoire."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Localiser les richesses",
          "stepTheme": "Localiser les richesses",
          "stepBadge": "Localiser les richesses",
          "paragraphText": "La géographie permet de localiser avec précision les richesses naturelles (gisements, sols fertiles, eaux) : c'est un outil indispensable du développement.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q7",
            "type": "mcq",
            "prompt": "« La géographie permet de localiser avec précision les richesses naturelles. » Cette affirmation est :",
            "options": [
              "Fausse, seule la géologie peut localiser les richesses",
              "Fausse, la géographie ne s'intéresse pas aux ressources",
              "Vraie, mais seulement pour les pays européens",
              "Vraie, c'est un outil indispensable du développement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Vrai : localiser les ressources fait partie de l'intérêt pratique de la géographie."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q1",
          "type": "mcq",
          "prompt": "Lequel de ces éléments est un intérêt pratique de la géographie ?",
          "options": [
            "S'orienter et se localiser dans l'espace",
            "Connaître les dates des grandes batailles",
            "Apprendre les règles de grammaire",
            "Calculer la vitesse d'un mobile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "S'orienter et se localiser est l'un des intérêts pratiques de la géographie."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q2",
          "type": "mcq",
          "prompt": "Pourquoi un maire consulte-t-il un géographe avant d'ouvrir un nouveau quartier ?",
          "options": [
            "Pour éviter les zones à risque comme les bas-fonds inondables",
            "Pour connaître l'histoire des premiers habitants de la ville",
            "Pour choisir les couleurs des façades des maisons",
            "Pour calculer le prix des terrains à la place des notaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La géographie aide à connaître le milieu et à éviter les milieux contraignants."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q3",
          "type": "mcq",
          "prompt": "Selon le cours, la géographie sert-elle aussi à faire la guerre ?",
          "options": [
            "Non, la géographie n'a aucun lien avec les questions militaires",
            "Oui, car la connaissance du terrain est indispensable aux opérations militaires",
            "Non, seule l'histoire est utile aux armées",
            "Oui, mais uniquement pour dessiner les drapeaux des pays"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cours le précise : la géographie permet aussi de faire la guerre."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q4",
          "type": "mcq",
          "prompt": "Lequel de ces éléments est un intérêt éducatif de la géographie ?",
          "options": [
            "La fabrication de produits industriels",
            "La construction de routes et de ponts",
            "L'ouverture sur le monde et la connaissance des autres peuples",
            "La prévision des cours de la bourse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'ouverture sur le monde fait partie de l'intérêt éducatif."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q5",
          "type": "mcq",
          "prompt": "Lequel de ces métiers est un débouché de la géographie ?",
          "options": [
            "Chirurgien dentiste",
            "Pilote de ligne",
            "Avocat d'affaires",
            "Aménagiste du territoire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'aménagement du territoire est un débouché direct de la géographie."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q6",
          "type": "mcq",
          "prompt": "« La géographie donne des informations sur le passé de l'homme. » Cette affirmation est :",
          "options": [
            "Vraie, car la géographie étudie toutes les époques",
            "Vraie, car l'espace garde toujours la trace du passé",
            "Fausse, c'est l'histoire qui étudie le passé de l'homme",
            "Fausse, car la géographie n'étudie pas l'homme"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La géographie étudie l'Homme dans son espace ; le passé relève de l'histoire."
        },
        {
          "id": "seconde_a_hg_geographie_l01_objet_interet_demarche_p06_q7",
          "type": "mcq",
          "prompt": "« La géographie permet de localiser avec précision les richesses naturelles. » Cette affirmation est :",
          "options": [
            "Fausse, seule la géologie peut localiser les richesses",
            "Fausse, la géographie ne s'intéresse pas aux ressources",
            "Vraie, mais seulement pour les pays européens",
            "Vraie, c'est un outil indispensable du développement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Vrai : localiser les ressources fait partie de l'intérêt pratique de la géographie."
        }
      ]
    }
  ]
};
