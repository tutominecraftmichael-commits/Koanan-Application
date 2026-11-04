import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 2nde H1- L'histoire et la formation du citoyen.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const HIST_2DE_L01_HISTOIRE_FORMATION_CITOYEN: CurriculumChapter = {
  "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen",
  "subjectId": "histoire_geo",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 1,
  "title": "Leçon 1 : L'histoire et la formation du citoyen",
  "summary": "Ce qu'est l'histoire, son objet, ses fonctions et ce qu'elle apporte au citoyen et à la société.",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "2nde H1- L'histoire et la formation du citoyen.pdf",
  "points": [
    {
      "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01",
      "order": 1,
      "title": "Qu'est-ce que l'histoire ?",
      "summary": "L'origine du mot histoire, ses premiers penseurs et sa définition.",
      "conceptExplanation": "Le mot « histoire » vient du grec « historia », qui signifie « enquête, recherche ».\n- Vers 444 avant J.-C., le Grec Hérodote, l'un des plus anciens historiens, enquêtait sur les grandes actions humaines pour qu'elles ne tombent pas dans l'oubli, chez les Grecs comme chez les « Barbares ».\n- Au début du VIIe siècle, Isidore de Séville (Espagne) définit l'histoire comme « le récit des choses qui ont eu lieu, par lequel on peut connaître les choses réalisées autrefois ».\n\nOn retient que l'histoire est une discipline scientifique qui s'intéresse à la connaissance du passé des sociétés humaines et cherche à le reconstituer.\n\nLa citoyenneté est le fait, pour un individu, d'être membre d'un État auquel il est rattaché.",
      "keyRule": "Histoire = « historia » (enquête, recherche) : la science qui connaît et reconstitue le passé des sociétés humaines.",
      "formulas": [],
      "workedExample": {
        "title": "Retrouver le sens premier",
        "statement": "Pourquoi l'histoire est-elle une « enquête » ?",
        "methodSteps": [
          "Le passé n'est plus visible directement.",
          "L'historien doit chercher des traces (textes, témoignages, objets) et les vérifier.",
          "Comme un enquêteur, il reconstitue ce qui s'est passé."
        ],
        "conclusion": "Le sens grec d'« historia », enquête, décrit bien le travail de l'historien."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'origine du mot",
          "stepTheme": "L'origine du mot",
          "stepBadge": "L'origine du mot",
          "paragraphText": "Le mot « histoire » vient du grec « historia », qui signifie « enquête, recherche ».",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q1",
            "type": "mcq",
            "prompt": "Que signifie le mot grec « historia » ?",
            "options": [
              "Récit inventé, légende",
              "Terre, description",
              "Enquête, recherche",
              "Souvenir, mémoire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Historia » = enquête, recherche : l'historien enquête sur le passé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Hérodote",
          "stepTheme": "Hérodote",
          "stepBadge": "Hérodote",
          "paragraphText": "Vers 444 avant J.-C., le Grec Hérodote enquêtait sur les grandes actions humaines pour qu'elles ne tombent pas dans l'oubli.\nIl est l'un des plus anciens historiens.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q2",
            "type": "mcq",
            "prompt": "Quel Grec est l'un des plus anciens historiens, vers 444 avant J.-C. ?",
            "options": [
              "Hérodote",
              "Aristote",
              "Thalès",
              "Pythagore"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Hérodote, surnommé le « père de l'histoire », enquêtait pour éviter l'oubli des grandes actions."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le but d'Hérodote",
          "stepTheme": "Le but d'Hérodote",
          "stepBadge": "Le but d'Hérodote",
          "paragraphText": "Hérodote faisait ses recherches pour éviter « l'oubli des grandes actions survenues autrefois aussi bien chez les Grecs que chez les Barbares ».",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q3",
            "type": "mcq",
            "prompt": "Pourquoi Hérodote faisait-il ses recherches ?",
            "options": [
              "Pour inventer des légendes qui amusent le peuple",
              "Pour prédire l'avenir des cités grecques",
              "Pour mesurer la taille de la Terre",
              "Pour éviter que les grandes actions du passé tombent dans l'oubli"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'histoire naît du souci de garder la mémoire des actions passées."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Isidore de Séville",
          "stepTheme": "Isidore de Séville",
          "stepBadge": "Isidore de Séville",
          "paragraphText": "Au début du VIIe siècle, Isidore de Séville, savant d'Espagne, définit l'histoire comme « le récit des choses qui ont eu lieu, par lequel on peut connaître les choses réalisées autrefois ».",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q4",
            "type": "mcq",
            "prompt": "Selon Isidore de Séville, qu'est-ce que l'histoire ?",
            "options": [
              "Le récit des choses qui pourraient arriver dans l'avenir",
              "Le récit des choses qui ont eu lieu, pour connaître ce qui a été réalisé autrefois",
              "La description de la surface de la Terre",
              "L'ensemble des contes et légendes d'un peuple"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour Isidore, l'histoire est le récit du passé réel."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La définition à retenir",
          "stepTheme": "La définition à retenir",
          "stepBadge": "La définition à retenir",
          "paragraphText": "L'histoire est une discipline scientifique qui s'intéresse à la connaissance du passé des sociétés humaines et cherche à le reconstituer.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q5",
            "type": "mcq",
            "prompt": "Quelle est la définition de l'histoire ?",
            "options": [
              "La science qui étudie l'Homme dans son espace actuel",
              "La science qui étudie et reconstitue le passé des sociétés humaines",
              "La science qui étudie les êtres vivants et leur évolution",
              "L'ensemble des légendes transmises par les griots"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'histoire connaît et reconstitue le passé des sociétés humaines."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La citoyenneté",
          "stepTheme": "La citoyenneté",
          "stepBadge": "La citoyenneté",
          "paragraphText": "La citoyenneté est le fait, pour un individu, d'être membre d'un État auquel il est rattaché.\nLe citoyen a des droits et des devoirs envers cet État.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q6",
            "type": "mcq",
            "prompt": "Qu'est-ce que la citoyenneté ?",
            "options": [
              "Le fait d'habiter dans une grande ville",
              "Le fait de connaître l'histoire de son village",
              "Le fait d'avoir voyagé dans plusieurs pays",
              "Le fait d'être membre d'un État auquel on est rattaché"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Être citoyen, c'est être membre d'un État, avec des droits et des devoirs."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Histoire ou légende ?",
          "stepTheme": "Histoire ou légende ?",
          "stepBadge": "Histoire ou légende ?",
          "paragraphText": "L'histoire n'est pas un récit inventé : elle cherche la vérité sur le passé réel, à partir de traces vérifiées.\nLa légende, elle, mêle faits et imagination.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q7",
            "type": "mcq",
            "prompt": "Qu'est-ce qui distingue l'histoire d'une légende ?",
            "options": [
              "L'histoire cherche la vérité sur le passé réel à partir de traces vérifiées",
              "L'histoire raconte uniquement des récits imaginaires",
              "La légende est toujours plus exacte que l'histoire",
              "Il n'y a aucune différence entre les deux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'histoire est une science : elle vérifie ses sources ; la légende mêle réel et imaginaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q1",
          "type": "mcq",
          "prompt": "Que signifie le mot grec « historia » ?",
          "options": [
            "Récit inventé, légende",
            "Terre, description",
            "Enquête, recherche",
            "Souvenir, mémoire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Historia » = enquête, recherche : l'historien enquête sur le passé."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q2",
          "type": "mcq",
          "prompt": "Quel Grec est l'un des plus anciens historiens, vers 444 avant J.-C. ?",
          "options": [
            "Hérodote",
            "Aristote",
            "Thalès",
            "Pythagore"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Hérodote, surnommé le « père de l'histoire », enquêtait pour éviter l'oubli des grandes actions."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q3",
          "type": "mcq",
          "prompt": "Pourquoi Hérodote faisait-il ses recherches ?",
          "options": [
            "Pour inventer des légendes qui amusent le peuple",
            "Pour prédire l'avenir des cités grecques",
            "Pour mesurer la taille de la Terre",
            "Pour éviter que les grandes actions du passé tombent dans l'oubli"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'histoire naît du souci de garder la mémoire des actions passées."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q4",
          "type": "mcq",
          "prompt": "Selon Isidore de Séville, qu'est-ce que l'histoire ?",
          "options": [
            "Le récit des choses qui pourraient arriver dans l'avenir",
            "Le récit des choses qui ont eu lieu, pour connaître ce qui a été réalisé autrefois",
            "La description de la surface de la Terre",
            "L'ensemble des contes et légendes d'un peuple"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour Isidore, l'histoire est le récit du passé réel."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q5",
          "type": "mcq",
          "prompt": "Quelle est la définition de l'histoire ?",
          "options": [
            "La science qui étudie l'Homme dans son espace actuel",
            "La science qui étudie et reconstitue le passé des sociétés humaines",
            "La science qui étudie les êtres vivants et leur évolution",
            "L'ensemble des légendes transmises par les griots"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'histoire connaît et reconstitue le passé des sociétés humaines."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q6",
          "type": "mcq",
          "prompt": "Qu'est-ce que la citoyenneté ?",
          "options": [
            "Le fait d'habiter dans une grande ville",
            "Le fait de connaître l'histoire de son village",
            "Le fait d'avoir voyagé dans plusieurs pays",
            "Le fait d'être membre d'un État auquel on est rattaché"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Être citoyen, c'est être membre d'un État, avec des droits et des devoirs."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p01_q7",
          "type": "mcq",
          "prompt": "Qu'est-ce qui distingue l'histoire d'une légende ?",
          "options": [
            "L'histoire cherche la vérité sur le passé réel à partir de traces vérifiées",
            "L'histoire raconte uniquement des récits imaginaires",
            "La légende est toujours plus exacte que l'histoire",
            "Il n'y a aucune différence entre les deux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'histoire est une science : elle vérifie ses sources ; la légende mêle réel et imaginaire."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02",
      "order": 2,
      "title": "L'objet de l'histoire",
      "summary": "Les faits et événements du passé humain qu'étudie l'historien.",
      "conceptExplanation": "La science historique étudie les faits et les événements qui ont marqué la vie des êtres et des sociétés humaines.\nCe ne sont pas seulement les guerres et les grands personnages : les modes de vie, les activités économiques, les religions, les techniques, les arts du passé sont aussi l'objet de l'histoire.\n\nL'histoire s'intéresse à tous les peuples, y compris ceux qui n'ont pas connu tôt l'écriture : l'Afrique a une histoire, reconstituée grâce à des sources variées.",
      "keyRule": "L'objet de l'histoire : tous les faits et événements du passé humain (guerres, modes de vie, économie, religions, techniques).",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître un objet d'histoire",
        "statement": "« Comment vivaient les paysans baoulé au XVIIIe siècle ? » Est-ce une question d'histoire ?",
        "methodSteps": [
          "Elle porte sur des êtres humains.",
          "Elle porte sur le passé (XVIIIe siècle).",
          "Elle concerne leur mode de vie."
        ],
        "conclusion": "Oui : les modes de vie du passé sont un objet de l'histoire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les faits et événements",
          "stepTheme": "Les faits et événements",
          "stepBadge": "Les faits et événements",
          "paragraphText": "L'histoire étudie les faits et les événements qui ont marqué la vie des êtres et des sociétés humaines.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q1",
            "type": "mcq",
            "prompt": "Quel est l'objet de l'histoire ?",
            "options": [
              "Les phénomènes naturels comme le climat et le relief",
              "Le fonctionnement du corps humain",
              "Les faits et événements qui ont marqué la vie des sociétés humaines",
              "Les mouvements des planètes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'historien étudie le passé humain à travers ses faits et événements."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Pas seulement les guerres",
          "stepTheme": "Pas seulement les guerres",
          "stepBadge": "Pas seulement les guerres",
          "paragraphText": "L'histoire n'étudie pas que les guerres et les rois.\nLes modes de vie, les activités économiques, les religions, les techniques et les arts du passé sont aussi son objet.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q2",
            "type": "mcq",
            "prompt": "Lequel de ces sujets est un objet de l'histoire ?",
            "options": [
              "La formation des nuages",
              "La croissance des plantes",
              "La vitesse de la lumière",
              "Les modes de vie des sociétés du passé"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La vie quotidienne d'autrefois fait pleinement partie de l'histoire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le passé humain",
          "stepTheme": "Le passé humain",
          "stepBadge": "Le passé humain",
          "paragraphText": "L'histoire s'intéresse au passé humain.\nL'étude des roches et des fossiles d'avant l'apparition de l'Homme relève d'autres sciences (géologie, paléontologie).",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q3",
            "type": "mcq",
            "prompt": "Lequel de ces sujets relève de l'histoire ?",
            "options": [
              "La formation des roches il y a 3 milliards d'années",
              "Le cycle de l'eau dans la nature",
              "Les religions pratiquées dans l'Égypte ancienne",
              "La reproduction des mammifères"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'Égypte ancienne est une société humaine du passé : c'est de l'histoire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Tous les peuples ont une histoire",
          "stepTheme": "Tous les peuples ont une histoire",
          "stepBadge": "Tous les peuples ont une histoire",
          "paragraphText": "Tous les peuples ont une histoire, même ceux qui n'ont pas connu tôt l'écriture.\nL'Afrique a une riche histoire, reconstituée grâce aux traditions orales, à l'archéologie et aux écrits.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q4",
            "type": "mcq",
            "prompt": "« L'Afrique est sans histoire parce que les écrits y sont rares. » Cette affirmation est :",
            "options": [
              "Vraie, car il n'y a pas d'histoire sans écriture",
              "Fausse, car l'histoire de l'Afrique se reconstitue aussi avec les traditions orales et l'archéologie",
              "Vraie, car les Africains n'ont jamais raconté leur passé",
              "Fausse, car l'Afrique possède plus d'écrits que tous les autres continents"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Tout peuple a un passé ; l'historien utilise toutes les sources disponibles."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un repère de notre histoire",
          "stepTheme": "Un repère de notre histoire",
          "stepBadge": "Un repère de notre histoire",
          "paragraphText": "L'histoire permet de situer les événements dans le temps.\nExemple : la proclamation de l'indépendance de la Côte d'Ivoire, le 7 août 1960.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q5",
            "type": "mcq",
            "prompt": "À quelle date l'indépendance de la Côte d'Ivoire a-t-elle été proclamée ?",
            "options": [
              "Le 7 août 1960",
              "Le 7 décembre 1960",
              "Le 25 mai 1963",
              "Le 28 mai 1975"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La Côte d'Ivoire a proclamé son indépendance le 7 août 1960."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Fait et événement",
          "stepTheme": "Fait et événement",
          "stepBadge": "Fait et événement",
          "paragraphText": "• Un événement est un fait marquant et daté (une bataille, une indépendance).\n• Un fait historique peut aussi être une réalité durable (un mode de vie, une économie, une croyance).",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q6",
            "type": "mcq",
            "prompt": "Lequel de ces exemples est un événement daté ?",
            "options": [
              "L'indépendance de la Côte d'Ivoire en 1960",
              "La culture de l'igname dans les sociétés akan",
              "La croyance aux ancêtres en Afrique",
              "L'usage de la pirogue sur les lagunes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une indépendance est un événement précis et daté ; les autres sont des réalités durables."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Histoire et géographie",
          "stepTheme": "Histoire et géographie",
          "stepBadge": "Histoire et géographie",
          "paragraphText": "Ne pas confondre :\n• l'histoire étudie le passé des sociétés humaines ;\n• la géographie étudie l'Homme dans son espace actuel.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q7",
            "type": "mcq",
            "prompt": "Laquelle de ces questions relève de l'histoire ?",
            "options": [
              "Comment la population ivoirienne se répartit-elle aujourd'hui ?",
              "Comment les royaumes africains étaient-ils organisés au XVIIe siècle ?",
              "Pourquoi le nord ivoirien est-il couvert de savane ?",
              "Quels sont les ports de la Côte d'Ivoire ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'organisation des royaumes du passé relève de l'histoire ; les autres questions, de la géographie."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q1",
          "type": "mcq",
          "prompt": "Quel est l'objet de l'histoire ?",
          "options": [
            "Les phénomènes naturels comme le climat et le relief",
            "Le fonctionnement du corps humain",
            "Les faits et événements qui ont marqué la vie des sociétés humaines",
            "Les mouvements des planètes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'historien étudie le passé humain à travers ses faits et événements."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q2",
          "type": "mcq",
          "prompt": "Lequel de ces sujets est un objet de l'histoire ?",
          "options": [
            "La formation des nuages",
            "La croissance des plantes",
            "La vitesse de la lumière",
            "Les modes de vie des sociétés du passé"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La vie quotidienne d'autrefois fait pleinement partie de l'histoire."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q3",
          "type": "mcq",
          "prompt": "Lequel de ces sujets relève de l'histoire ?",
          "options": [
            "La formation des roches il y a 3 milliards d'années",
            "Le cycle de l'eau dans la nature",
            "Les religions pratiquées dans l'Égypte ancienne",
            "La reproduction des mammifères"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'Égypte ancienne est une société humaine du passé : c'est de l'histoire."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q4",
          "type": "mcq",
          "prompt": "« L'Afrique est sans histoire parce que les écrits y sont rares. » Cette affirmation est :",
          "options": [
            "Vraie, car il n'y a pas d'histoire sans écriture",
            "Fausse, car l'histoire de l'Afrique se reconstitue aussi avec les traditions orales et l'archéologie",
            "Vraie, car les Africains n'ont jamais raconté leur passé",
            "Fausse, car l'Afrique possède plus d'écrits que tous les autres continents"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tout peuple a un passé ; l'historien utilise toutes les sources disponibles."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q5",
          "type": "mcq",
          "prompt": "À quelle date l'indépendance de la Côte d'Ivoire a-t-elle été proclamée ?",
          "options": [
            "Le 7 août 1960",
            "Le 7 décembre 1960",
            "Le 25 mai 1963",
            "Le 28 mai 1975"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Côte d'Ivoire a proclamé son indépendance le 7 août 1960."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q6",
          "type": "mcq",
          "prompt": "Lequel de ces exemples est un événement daté ?",
          "options": [
            "L'indépendance de la Côte d'Ivoire en 1960",
            "La culture de l'igname dans les sociétés akan",
            "La croyance aux ancêtres en Afrique",
            "L'usage de la pirogue sur les lagunes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une indépendance est un événement précis et daté ; les autres sont des réalités durables."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p02_q7",
          "type": "mcq",
          "prompt": "Laquelle de ces questions relève de l'histoire ?",
          "options": [
            "Comment la population ivoirienne se répartit-elle aujourd'hui ?",
            "Comment les royaumes africains étaient-ils organisés au XVIIe siècle ?",
            "Pourquoi le nord ivoirien est-il couvert de savane ?",
            "Quels sont les ports de la Côte d'Ivoire ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'organisation des royaumes du passé relève de l'histoire ; les autres questions, de la géographie."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03",
      "order": 3,
      "title": "Les fonctions de l'histoire",
      "summary": "Un repère, un outil de développement et une arme idéologique.",
      "conceptExplanation": "1. Un point de repère : l'histoire situe les faits dans le temps (exemple : l'indépendance de la Côte d'Ivoire le 7 août 1960). Point de départ de toute évolution, elle permet de s'orienter, car un peuple sans repère est sans avenir : on « ne peut vivre avec la mémoire d'autrui ».\n\n2. Un outil de développement : selon Joseph Ki-Zerbo (1978), l'histoire « crée un capital spirituel qui constituera une source multiforme et permanente d'inspiration ». Elle ne produit pas de biens matériels, mais elle aide les nations à connaître leur place dans le monde et à se développer (exemple : l'ère Meiji au Japon au XIXe siècle).\n\n3. Une arme idéologique : elle conscientise les peuples sur leur valeur (exemple : la Négritude). Mais elle peut aussi servir la propagande et exacerber le nationalisme, comme dans l'Allemagne nazie, qui a conduit à la Seconde Guerre mondiale. D'où la mise en garde de Paul Valéry : « L'histoire est le produit le plus dangereux que la chimie de l'intellect ait élaboré. Il enivre les peuples, leur engendre de faux souvenirs, entretient leurs vieilles plaies. »",
      "keyRule": "L'histoire est un repère (7 août 1960), un outil de développement (Ki-Zerbo, Meiji) et une arme idéologique, utile (Négritude) ou dangereuse (nazisme, Paul Valéry).",
      "formulas": [],
      "workedExample": {
        "title": "Une arme à double tranchant",
        "statement": "Pourquoi Paul Valéry dit-il que l'histoire est « dangereuse » ?",
        "methodSteps": [
          "L'histoire peut être déformée pour servir un pouvoir (propagande).",
          "Elle peut alors exalter un nationalisme agressif ou entretenir de vieilles rancunes.",
          "Exemple : l'Allemagne nazie a manipulé l'histoire pour justifier la guerre."
        ],
        "conclusion": "Mal utilisée, l'histoire divise ; bien utilisée, avec rigueur, elle éclaire et rassemble."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Un point de repère",
          "stepTheme": "Un point de repère",
          "stepBadge": "Un point de repère",
          "paragraphText": "L'histoire situe les faits dans le temps et donne des repères à la société.\nUn peuple sans repère est sans avenir et reste vulnérable : on « ne peut vivre avec la mémoire d'autrui ».",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q1",
            "type": "mcq",
            "prompt": "Pourquoi dit-on que l'histoire est un point de repère pour la société ?",
            "options": [
              "Parce qu'elle indique la direction du Nord sur les cartes",
              "Parce qu'elle prédit exactement les événements futurs",
              "Parce qu'elle situe les faits dans le temps et aide un peuple à s'orienter",
              "Parce qu'elle remplace la mémoire de chaque individu"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Connaître son passé aide un peuple à savoir où il va."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Ki-Zerbo et le capital spirituel",
          "stepTheme": "Ki-Zerbo et le capital spirituel",
          "stepBadge": "Ki-Zerbo et le capital spirituel",
          "paragraphText": "Selon l'historien burkinabè Joseph Ki-Zerbo (1978), l'histoire « crée un capital spirituel qui constituera une source multiforme et permanente d'inspiration ».",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q2",
            "type": "mcq",
            "prompt": "Selon Joseph Ki-Zerbo, que crée l'histoire ?",
            "options": [
              "Des biens de consommation vendus sur les marchés",
              "Des frontières définitives entre les États",
              "Des machines pour l'industrie",
              "Un capital spirituel, source permanente d'inspiration"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'histoire ne produit pas de biens matériels, mais un capital spirituel qui inspire les peuples."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un outil de développement",
          "stepTheme": "Un outil de développement",
          "stepBadge": "Un outil de développement",
          "paragraphText": "L'histoire aide les nations à connaître leur position dans le monde, pour la maintenir ou la renforcer.\nExemple : au XIXe siècle, le Japon de l'ère Meiji s'est modernisé en tirant les leçons de son passé.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q3",
            "type": "mcq",
            "prompt": "Quel exemple montre que l'histoire peut être un outil de développement ?",
            "options": [
              "La disparition de l'Empire romain d'Occident",
              "La découverte du feu par les premiers hommes",
              "La modernisation du Japon pendant l'ère Meiji au XIXe siècle",
              "La formation des montagnes de l'Ouest ivoirien"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le Japon de l'ère Meiji s'est appuyé sur la connaissance de sa situation pour se moderniser."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La Négritude",
          "stepTheme": "La Négritude",
          "stepBadge": "La Négritude",
          "paragraphText": "L'histoire peut conscientiser les peuples sur leur propre valeur et leur spécificité.\nExemple : la Négritude, mouvement qui revalorise les cultures noires, enseigné dans les écoles africaines.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q4",
            "type": "mcq",
            "prompt": "Quel mouvement a utilisé l'histoire pour revaloriser les cultures noires ?",
            "options": [
              "Le nazisme",
              "La révolution industrielle",
              "La Renaissance européenne",
              "La Négritude"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La Négritude a revalorisé l'histoire et les cultures des peuples noirs."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une arme dangereuse",
          "stepTheme": "Une arme dangereuse",
          "stepBadge": "Une arme dangereuse",
          "paragraphText": "L'histoire peut aussi devenir une arme de propagande qui exacerbe le nationalisme.\nExemple : l'Allemagne nazie a manipulé l'histoire, ce qui a contribué à plonger le monde dans la Seconde Guerre mondiale.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q5",
            "type": "mcq",
            "prompt": "Quel régime a manipulé l'histoire pour exacerber le nationalisme et préparer la guerre ?",
            "options": [
              "L'Allemagne nazie",
              "Le Japon de l'ère Meiji",
              "La Côte d'Ivoire indépendante",
              "La Grèce d'Hérodote"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le régime nazi a déformé l'histoire à des fins de propagande."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La mise en garde de Paul Valéry",
          "stepTheme": "La mise en garde de Paul Valéry",
          "stepBadge": "La mise en garde de Paul Valéry",
          "paragraphText": "Paul Valéry a écrit : « L'histoire est le produit le plus dangereux que la chimie de l'intellect ait élaboré. Il enivre les peuples, leur engendre de faux souvenirs, entretient leurs vieilles plaies. »",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q6",
            "type": "mcq",
            "prompt": "Que dénonce Paul Valéry dans sa célèbre phrase sur l'histoire ?",
            "options": [
              "L'inutilité totale de l'étude du passé à l'école",
              "Le danger d'une histoire manipulée qui enivre les peuples et entretient leurs rancunes",
              "Le manque de sources écrites en Europe",
              "La trop grande précision des historiens"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Valéry met en garde contre une histoire déformée, qui crée de faux souvenirs et ravive les conflits."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Classer une fonction",
          "stepTheme": "Classer une fonction",
          "stepBadge": "Classer une fonction",
          "paragraphText": "Les trois fonctions de l'histoire :\n• repère : situer dans le temps, s'orienter ;\n• outil de développement : inspirer les nations ;\n• arme idéologique : conscientiser, ou manipuler.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q7",
            "type": "mcq",
            "prompt": "Utiliser l'histoire pour rappeler aux Ivoiriens la date de leur indépendance relève de quelle fonction ?",
            "options": [
              "Une arme de propagande nationaliste",
              "Un point de repère pour la société",
              "Un outil de production de biens",
              "Une source de faux souvenirs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Rappeler une date fondatrice, c'est donner un repère temporel."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q1",
          "type": "mcq",
          "prompt": "Pourquoi dit-on que l'histoire est un point de repère pour la société ?",
          "options": [
            "Parce qu'elle indique la direction du Nord sur les cartes",
            "Parce qu'elle prédit exactement les événements futurs",
            "Parce qu'elle situe les faits dans le temps et aide un peuple à s'orienter",
            "Parce qu'elle remplace la mémoire de chaque individu"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Connaître son passé aide un peuple à savoir où il va."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q2",
          "type": "mcq",
          "prompt": "Selon Joseph Ki-Zerbo, que crée l'histoire ?",
          "options": [
            "Des biens de consommation vendus sur les marchés",
            "Des frontières définitives entre les États",
            "Des machines pour l'industrie",
            "Un capital spirituel, source permanente d'inspiration"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'histoire ne produit pas de biens matériels, mais un capital spirituel qui inspire les peuples."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q3",
          "type": "mcq",
          "prompt": "Quel exemple montre que l'histoire peut être un outil de développement ?",
          "options": [
            "La disparition de l'Empire romain d'Occident",
            "La découverte du feu par les premiers hommes",
            "La modernisation du Japon pendant l'ère Meiji au XIXe siècle",
            "La formation des montagnes de l'Ouest ivoirien"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le Japon de l'ère Meiji s'est appuyé sur la connaissance de sa situation pour se moderniser."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q4",
          "type": "mcq",
          "prompt": "Quel mouvement a utilisé l'histoire pour revaloriser les cultures noires ?",
          "options": [
            "Le nazisme",
            "La révolution industrielle",
            "La Renaissance européenne",
            "La Négritude"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La Négritude a revalorisé l'histoire et les cultures des peuples noirs."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q5",
          "type": "mcq",
          "prompt": "Quel régime a manipulé l'histoire pour exacerber le nationalisme et préparer la guerre ?",
          "options": [
            "L'Allemagne nazie",
            "Le Japon de l'ère Meiji",
            "La Côte d'Ivoire indépendante",
            "La Grèce d'Hérodote"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le régime nazi a déformé l'histoire à des fins de propagande."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q6",
          "type": "mcq",
          "prompt": "Que dénonce Paul Valéry dans sa célèbre phrase sur l'histoire ?",
          "options": [
            "L'inutilité totale de l'étude du passé à l'école",
            "Le danger d'une histoire manipulée qui enivre les peuples et entretient leurs rancunes",
            "Le manque de sources écrites en Europe",
            "La trop grande précision des historiens"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Valéry met en garde contre une histoire déformée, qui crée de faux souvenirs et ravive les conflits."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p03_q7",
          "type": "mcq",
          "prompt": "Utiliser l'histoire pour rappeler aux Ivoiriens la date de leur indépendance relève de quelle fonction ?",
          "options": [
            "Une arme de propagande nationaliste",
            "Un point de repère pour la société",
            "Un outil de production de biens",
            "Une source de faux souvenirs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Rappeler une date fondatrice, c'est donner un repère temporel."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04",
      "order": 4,
      "title": "L'histoire et les valeurs du citoyen",
      "summary": "Les valeurs que l'étude de l'histoire développe.",
      "conceptExplanation": "L'histoire est la connaissance, scientifiquement élaborée, du passé humain. Elle cherche à le rendre compréhensible en le reconstituant et en l'expliquant.\n\nElle fournit aux peuples des leçons qui les guident dans le présent et aide les jeunes à préparer leur avenir. Elle aide à comprendre les civilisations du passé et développe :\n- la tolérance ;\n- l'impartialité, qui consiste à dire toute la vérité sur le passé sans rien cacher ;\n- le respect de la vérité ;\n- la solidarité ;\n- l'esprit critique, qui arme le citoyen contre les manipulations.\nElle forme ainsi des citoyens honnêtes et contribue à l'unité nationale.\n\nÀ l'inverse, le racisme, la xénophobie, l'ostracisme ou l'ultranationalisme ne sont pas des valeurs que l'histoire enseigne.",
      "keyRule": "L'histoire enseigne la tolérance, l'impartialité, la vérité, la solidarité et l'esprit critique ; elle contribue à l'unité nationale.",
      "formulas": [],
      "workedExample": {
        "title": "Trier des valeurs",
        "statement": "Parmi : racisme, tolérance, xénophobie, solidarité, vérité, violence, lesquelles l'histoire enseigne-t-elle ?",
        "methodSteps": [
          "L'histoire montre les dégâts du racisme, de la xénophobie et de la violence : elle ne les enseigne pas.",
          "Elle développe la tolérance, la solidarité et le respect de la vérité."
        ],
        "conclusion": "Tolérance, solidarité et vérité sont les valeurs enseignées par l'histoire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une connaissance scientifique",
          "stepTheme": "Une connaissance scientifique",
          "stepBadge": "Une connaissance scientifique",
          "paragraphText": "L'histoire est la connaissance, scientifiquement élaborée, du passé humain.\nElle cherche à le rendre intelligible (compréhensible) en le reconstituant et en l'expliquant.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q1",
            "type": "mcq",
            "prompt": "Que cherche à faire l'histoire avec le passé humain ?",
            "options": [
              "Le rendre compréhensible en le reconstituant et en l'expliquant",
              "L'effacer pour ne garder que le présent",
              "L'embellir pour flatter les peuples",
              "Le remplacer par des légendes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'histoire reconstitue et explique le passé pour le rendre intelligible."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des leçons pour aujourd'hui",
          "stepTheme": "Des leçons pour aujourd'hui",
          "stepBadge": "Des leçons pour aujourd'hui",
          "paragraphText": "L'histoire fournit aux peuples des leçons qui les guident dans le présent.\nElle aide les jeunes à préparer leur avenir en évitant les erreurs du passé.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q2",
            "type": "mcq",
            "prompt": "En quoi l'histoire aide-t-elle les jeunes à préparer leur avenir ?",
            "options": [
              "En leur donnant la liste exacte des événements futurs",
              "En les dispensant de réfléchir par eux-mêmes",
              "En les obligeant à vivre comme leurs ancêtres",
              "En leur apprenant les leçons du passé pour éviter de répéter ses erreurs"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Connaître les erreurs du passé aide à faire de meilleurs choix."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'impartialité",
          "stepTheme": "L'impartialité",
          "stepBadge": "L'impartialité",
          "paragraphText": "L'impartialité consiste à dire toute la vérité sur le passé sans rien cacher et sans prendre parti.\nLe bon historien est impartial.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'impartialité de l'historien ?",
            "options": [
              "Raconter seulement les victoires de son propre peuple",
              "Cacher les faits qui dérangent le pouvoir",
              "Dire toute la vérité sur le passé sans rien cacher ni prendre parti",
              "Choisir les faits qui confirment son opinion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Impartial : ne pas prendre parti, dire toute la vérité."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La tolérance",
          "stepTheme": "La tolérance",
          "stepBadge": "La tolérance",
          "paragraphText": "En faisant connaître les civilisations et les peuples du passé, l'histoire développe l'esprit de tolérance : le respect des autres et de leurs différences.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q4",
            "type": "mcq",
            "prompt": "Laquelle de ces valeurs l'histoire développe-t-elle ?",
            "options": [
              "La xénophobie",
              "Le racisme",
              "La tolérance",
              "L'ostracisme"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Connaître la diversité des peuples apprend à respecter les différences."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'esprit critique",
          "stepTheme": "L'esprit critique",
          "stepBadge": "L'esprit critique",
          "paragraphText": "Par ses méthodes, l'histoire développe le jugement critique.\nElle arme le citoyen contre les manipulations : un peuple sans mémoire est plus facilement manipulé.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q5",
            "type": "mcq",
            "prompt": "Pourquoi l'histoire protège-t-elle les citoyens contre les manipulations ?",
            "options": [
              "Parce qu'elle développe l'esprit critique et la vérification des faits",
              "Parce qu'elle oblige à croire tout ce qui est dit à la radio",
              "Parce qu'elle interdit de poser des questions",
              "Parce qu'elle remplace les lois de l'État"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En apprenant à vérifier les sources, le citoyen repère mieux les mensonges."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'unité nationale",
          "stepTheme": "L'unité nationale",
          "stepBadge": "L'unité nationale",
          "paragraphText": "En formant des citoyens honnêtes, tolérants et solidaires, l'histoire contribue à l'unité nationale.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q6",
            "type": "mcq",
            "prompt": "À quoi l'histoire contribue-t-elle au niveau d'un pays ?",
            "options": [
              "À la division des peuples",
              "À la haine entre les régions",
              "À l'oubli du passé commun",
              "À l'unité nationale"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un passé commun connu et partagé renforce l'unité nationale."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Des valeurs à rejeter",
          "stepTheme": "Des valeurs à rejeter",
          "stepBadge": "Des valeurs à rejeter",
          "paragraphText": "L'histoire montre les ravages du racisme, de la xénophobie (la peur ou le rejet des étrangers) et de l'ultranationalisme.\nCe ne sont pas des valeurs qu'elle enseigne : elle apprend au contraire à les combattre.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q7",
            "type": "mcq",
            "prompt": "Laquelle de ces attitudes l'histoire n'enseigne PAS ?",
            "options": [
              "La solidarité",
              "La xénophobie",
              "Le respect de la vérité",
              "La tolérance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La xénophobie est le rejet des étrangers : l'histoire en montre les dangers."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q1",
          "type": "mcq",
          "prompt": "Que cherche à faire l'histoire avec le passé humain ?",
          "options": [
            "Le rendre compréhensible en le reconstituant et en l'expliquant",
            "L'effacer pour ne garder que le présent",
            "L'embellir pour flatter les peuples",
            "Le remplacer par des légendes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'histoire reconstitue et explique le passé pour le rendre intelligible."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q2",
          "type": "mcq",
          "prompt": "En quoi l'histoire aide-t-elle les jeunes à préparer leur avenir ?",
          "options": [
            "En leur donnant la liste exacte des événements futurs",
            "En les dispensant de réfléchir par eux-mêmes",
            "En les obligeant à vivre comme leurs ancêtres",
            "En leur apprenant les leçons du passé pour éviter de répéter ses erreurs"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Connaître les erreurs du passé aide à faire de meilleurs choix."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'impartialité de l'historien ?",
          "options": [
            "Raconter seulement les victoires de son propre peuple",
            "Cacher les faits qui dérangent le pouvoir",
            "Dire toute la vérité sur le passé sans rien cacher ni prendre parti",
            "Choisir les faits qui confirment son opinion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Impartial : ne pas prendre parti, dire toute la vérité."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q4",
          "type": "mcq",
          "prompt": "Laquelle de ces valeurs l'histoire développe-t-elle ?",
          "options": [
            "La xénophobie",
            "Le racisme",
            "La tolérance",
            "L'ostracisme"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Connaître la diversité des peuples apprend à respecter les différences."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q5",
          "type": "mcq",
          "prompt": "Pourquoi l'histoire protège-t-elle les citoyens contre les manipulations ?",
          "options": [
            "Parce qu'elle développe l'esprit critique et la vérification des faits",
            "Parce qu'elle oblige à croire tout ce qui est dit à la radio",
            "Parce qu'elle interdit de poser des questions",
            "Parce qu'elle remplace les lois de l'État"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En apprenant à vérifier les sources, le citoyen repère mieux les mensonges."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q6",
          "type": "mcq",
          "prompt": "À quoi l'histoire contribue-t-elle au niveau d'un pays ?",
          "options": [
            "À la division des peuples",
            "À la haine entre les régions",
            "À l'oubli du passé commun",
            "À l'unité nationale"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un passé commun connu et partagé renforce l'unité nationale."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p04_q7",
          "type": "mcq",
          "prompt": "Laquelle de ces attitudes l'histoire n'enseigne PAS ?",
          "options": [
            "La solidarité",
            "La xénophobie",
            "Le respect de la vérité",
            "La tolérance"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La xénophobie est le rejet des étrangers : l'histoire en montre les dangers."
        }
      ]
    },
    {
      "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05",
      "order": 5,
      "title": "L'histoire transforme le citoyen et la société",
      "summary": "Héritage, identité, cohésion sociale et solidarité.",
      "conceptExplanation": "1. L'amélioration de l'héritage : les générations passées ont construit la vie en l'améliorant de génération en génération (exemple : les transformations techniques en Europe du XVe au XXe siècle). L'étude de l'histoire permet d'apprécier cet héritage et de léguer à notre tour des améliorations aux générations futures.\n\n2. L'identité : l'histoire révèle notre identité. Elle nous dit d'où nous venons, fortifie nos racines, aide à comprendre le présent et à envisager l'avenir.\n\n3. La cohésion sociale et la solidarité : l'histoire fait connaître notre société et notre pays, mais aussi les autres sociétés, ce qui favorise l'ouverture des uns aux autres. Elle nous prépare à bâtir ensemble notre avenir.\n\nFinalement, l'exploration du passé sert à comprendre le présent, pour mieux s'impliquer comme citoyen dans la société.",
      "keyRule": "L'histoire transmet un héritage à améliorer, révèle notre identité, renforce la cohésion sociale et aide à comprendre le présent.",
      "formulas": [],
      "workedExample": {
        "title": "Vrai ou faux ?",
        "statement": "« Les adolescents, futurs citoyens, n'ont aucun intérêt à étudier le passé de leur peuple. »",
        "methodSteps": [
          "L'histoire révèle l'identité et fortifie les racines.",
          "Elle aide à comprendre le présent et à préparer l'avenir.",
          "Elle forme des citoyens responsables."
        ],
        "conclusion": "Faux : l'étude du passé est essentielle à la formation du citoyen."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Un héritage à améliorer",
          "stepTheme": "Un héritage à améliorer",
          "stepBadge": "Un héritage à améliorer",
          "paragraphText": "Les générations qui nous ont précédés ont construit la vie en l'améliorant de génération en génération.\nL'histoire nous fait apprécier cet héritage et nous invite à léguer des améliorations aux générations futures.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q1",
            "type": "mcq",
            "prompt": "Que nous apprend l'histoire sur l'héritage des générations passées ?",
            "options": [
              "À l'oublier pour tout recommencer à zéro",
              "À l'apprécier et à l'améliorer pour le transmettre aux générations futures",
              "À le garder exactement tel quel sans rien changer",
              "À le rejeter car il n'a aucune valeur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque génération reçoit un héritage, l'améliore et le transmet."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un exemple d'héritage",
          "stepTheme": "Un exemple d'héritage",
          "stepBadge": "Un exemple d'héritage",
          "paragraphText": "Les transformations techniques en Europe du XVe au XXe siècle (imprimerie, machine à vapeur, électricité...) montrent comment chaque génération améliore l'héritage reçu.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q2",
            "type": "mcq",
            "prompt": "Quel exemple montre l'amélioration de l'héritage d'une génération à l'autre ?",
            "options": [
              "La disparition des dinosaures",
              "La formation de la lagune Ébrié",
              "Le mouvement de rotation de la Terre",
              "Les transformations techniques en Europe du XVe au XXe siècle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les techniques se perfectionnent de génération en génération."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Notre identité",
          "stepTheme": "Notre identité",
          "stepBadge": "Notre identité",
          "paragraphText": "L'histoire révèle notre identité : elle nous dit d'où nous venons.\nElle fortifie nos racines, aide à comprendre le présent et à envisager l'avenir.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q3",
            "type": "mcq",
            "prompt": "En quoi l'histoire révèle-t-elle notre identité ?",
            "options": [
              "Elle nous fait savoir d'où nous venons et fortifie nos racines",
              "Elle nous donne une nouvelle nationalité",
              "Elle nous fait oublier nos origines",
              "Elle nous impose de copier les autres peuples"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Connaître son passé, c'est connaître ses racines et son identité."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La cohésion sociale",
          "stepTheme": "La cohésion sociale",
          "stepBadge": "La cohésion sociale",
          "paragraphText": "L'histoire fait connaître notre société et notre pays, mais aussi les autres sociétés.\nElle favorise l'ouverture des uns aux autres et renforce la cohésion sociale et la solidarité.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q4",
            "type": "mcq",
            "prompt": "Comment l'histoire renforce-t-elle la cohésion sociale ?",
            "options": [
              "En rappelant sans cesse les conflits anciens pour que chaque groupe garde ses rancunes",
              "En enseignant à chaque peuple qu'il est supérieur aux autres peuples du pays",
              "En faisant connaître notre société et les autres, ce qui favorise l'ouverture et la solidarité",
              "En limitant l'étude du passé à sa seule région pour ignorer celle des voisins"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Mieux se connaître permet de mieux vivre ensemble."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Comprendre le présent",
          "stepTheme": "Comprendre le présent",
          "stepBadge": "Comprendre le présent",
          "paragraphText": "L'intérêt essentiel de l'étude du passé est de comprendre le présent, pour mieux s'impliquer comme citoyen dans la société actuelle.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q5",
            "type": "mcq",
            "prompt": "Quel est l'intérêt essentiel de l'étude du passé pour le citoyen ?",
            "options": [
              "Vivre dans le passé en rejetant le présent",
              "Apprendre des dates par cœur sans les comprendre",
              "Se désintéresser de la vie de son pays",
              "Comprendre le présent pour mieux s'impliquer dans la société"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le passé éclaire le présent et aide le citoyen à agir."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une boussole",
          "stepTheme": "Une boussole",
          "stepBadge": "Une boussole",
          "paragraphText": "On dit que l'histoire est une boussole pour les peuples et la mémoire des collectivités humaines : elle guide les jeunes dans leurs choix d'avenir.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q6",
            "type": "mcq",
            "prompt": "« L'histoire est une boussole pour les peuples. » Que signifie cette image ?",
            "options": [
              "Elle indique le Nord géographique sur une carte",
              "Elle permet de voyager sans se perdre en forêt",
              "Elle aide les peuples à s'orienter et à faire leurs choix d'avenir",
              "Elle fixe pour toujours le destin des peuples"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Comme une boussole oriente le voyageur, l'histoire oriente les peuples."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Vrai ou faux ?",
          "stepTheme": "Vrai ou faux ?",
          "stepBadge": "Vrai ou faux ?",
          "paragraphText": "L'étude de l'histoire au lycée est essentielle à la formation du citoyen.\nNégliger le passé dans la formation des adolescents limite le développement de leurs capacités intellectuelles.",
          "exercise": {
            "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q7",
            "type": "mcq",
            "prompt": "« L'étude de l'histoire n'est pas indispensable à la formation du citoyen. » Cette affirmation est :",
            "options": [
              "Vraie, car le citoyen n'a besoin que des mathématiques",
              "Fausse, car l'histoire forme l'esprit critique, l'identité et les valeurs du citoyen",
              "Vraie, car le passé n'a aucun lien avec le présent",
              "Fausse, car l'histoire sert seulement à réussir les examens"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'histoire est essentielle : elle forme des citoyens éclairés, tolérants et responsables."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q1",
          "type": "mcq",
          "prompt": "Que nous apprend l'histoire sur l'héritage des générations passées ?",
          "options": [
            "À l'oublier pour tout recommencer à zéro",
            "À l'apprécier et à l'améliorer pour le transmettre aux générations futures",
            "À le garder exactement tel quel sans rien changer",
            "À le rejeter car il n'a aucune valeur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque génération reçoit un héritage, l'améliore et le transmet."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q2",
          "type": "mcq",
          "prompt": "Quel exemple montre l'amélioration de l'héritage d'une génération à l'autre ?",
          "options": [
            "La disparition des dinosaures",
            "La formation de la lagune Ébrié",
            "Le mouvement de rotation de la Terre",
            "Les transformations techniques en Europe du XVe au XXe siècle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les techniques se perfectionnent de génération en génération."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q3",
          "type": "mcq",
          "prompt": "En quoi l'histoire révèle-t-elle notre identité ?",
          "options": [
            "Elle nous fait savoir d'où nous venons et fortifie nos racines",
            "Elle nous donne une nouvelle nationalité",
            "Elle nous fait oublier nos origines",
            "Elle nous impose de copier les autres peuples"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Connaître son passé, c'est connaître ses racines et son identité."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q4",
          "type": "mcq",
          "prompt": "Comment l'histoire renforce-t-elle la cohésion sociale ?",
          "options": [
            "En rappelant sans cesse les conflits anciens pour que chaque groupe garde ses rancunes",
            "En enseignant à chaque peuple qu'il est supérieur aux autres peuples du pays",
            "En faisant connaître notre société et les autres, ce qui favorise l'ouverture et la solidarité",
            "En limitant l'étude du passé à sa seule région pour ignorer celle des voisins"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Mieux se connaître permet de mieux vivre ensemble."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q5",
          "type": "mcq",
          "prompt": "Quel est l'intérêt essentiel de l'étude du passé pour le citoyen ?",
          "options": [
            "Vivre dans le passé en rejetant le présent",
            "Apprendre des dates par cœur sans les comprendre",
            "Se désintéresser de la vie de son pays",
            "Comprendre le présent pour mieux s'impliquer dans la société"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le passé éclaire le présent et aide le citoyen à agir."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q6",
          "type": "mcq",
          "prompt": "« L'histoire est une boussole pour les peuples. » Que signifie cette image ?",
          "options": [
            "Elle indique le Nord géographique sur une carte",
            "Elle permet de voyager sans se perdre en forêt",
            "Elle aide les peuples à s'orienter et à faire leurs choix d'avenir",
            "Elle fixe pour toujours le destin des peuples"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Comme une boussole oriente le voyageur, l'histoire oriente les peuples."
        },
        {
          "id": "seconde_a_hg_histoire_l01_histoire_formation_citoyen_p05_q7",
          "type": "mcq",
          "prompt": "« L'étude de l'histoire n'est pas indispensable à la formation du citoyen. » Cette affirmation est :",
          "options": [
            "Vraie, car le citoyen n'a besoin que des mathématiques",
            "Fausse, car l'histoire forme l'esprit critique, l'identité et les valeurs du citoyen",
            "Vraie, car le passé n'a aucun lien avec le présent",
            "Fausse, car l'histoire sert seulement à réussir les examens"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'histoire est essentielle : elle forme des citoyens éclairés, tolérants et responsables."
        }
      ]
    }
  ]
};
