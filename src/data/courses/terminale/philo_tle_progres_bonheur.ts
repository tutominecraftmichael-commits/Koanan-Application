import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo Tle_L8_Progrès et Bonheur.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_TLE_L08_PROGRES_BONHEUR: CurriculumChapter = {
  "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur",
  "subjectId": "philosophie",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 8,
  "title": "Les conditions du bonheur, leçon 3 : Progrès et bonheur",
  "summary": "Désir et passions, travail, technique, art et imagination, types de progrès et conditions du bonheur.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "Philo Tle_L8_Progrès et Bonheur.pdf",
  "points": [
    {
      "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p01",
      "order": 1,
      "title": "Le désir et les passions",
      "summary": "Désir, besoin, passion ; la classification d'Épicure.",
      "conceptExplanation": "Le désir est l'expression d'un manque : désirer, c'est aspirer à posséder ce qui nous manque. Lié à la conscience, il est propre à l'homme ; l'animal n'a que des besoins.\nLa passion est un sentiment qui se développe au détriment des autres : un amour démesuré qu'on subit.\nÉpicure (Lettre à Ménécée) distingue les désirs naturels et nécessaires, naturels et non nécessaires, ni naturels ni nécessaires ; le sage se contente des premiers.\nPour Hegel (La Raison dans l'histoire), « rien de grand ne s'est accompli dans le monde sans passion ».",
      "keyRule": "Désir = manque conscient. Le sage d'Épicure se limite aux désirs naturels et nécessaires.",
      "formulas": [],
      "workedExample": {
        "title": "Classer des désirs",
        "statement": "Boire de l'eau, boire un jus sucré, posséder la voiture la plus chère du quartier : comment Épicure les classe-t-il ?",
        "methodSteps": [
          "Boire de l'eau quand on a soif : naturel et nécessaire.",
          "Un jus sucré : naturel mais non nécessaire.",
          "La voiture pour impressionner : ni naturel ni nécessaire (vanité)."
        ],
        "conclusion": "Le bonheur épicurien vient de la limitation des désirs."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le désir, un manque",
          "stepTheme": "Le désir, un manque",
          "stepBadge": "Le désir, un manque",
          "paragraphText": "• Désir : expression d'un manque ; aspiration à posséder quelque chose qui nous manque.\nIl est provoqué par un objet ou un être qu'on imagine source de satisfaction.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p01_q1",
            "type": "mcq",
            "prompt": "Quelle définition s'applique au désir ?",
            "options": [
              "Excès d'émotion qui détourne de la raison",
              "Ensemble de procédés pour fabriquer",
              "Aspiration profonde à posséder quelque chose qui nous manque",
              "Production du beau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le désir naît du manque. L'excès d'émotion qui égare décrit plutôt la passion."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Désir et besoin",
          "stepTheme": "Désir et besoin",
          "stepBadge": "Désir et besoin",
          "paragraphText": "Le besoin est biologique : manger, boire, dormir.\nLe désir est lié à la conscience et à l'imagination : il est propre à l'homme et peut aller au-delà du nécessaire. L'animal n'a que des besoins.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p01_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce qui distingue le désir du besoin ?",
            "options": [
              "Le désir est lié à la conscience, il est propre à l'homme",
              "Le désir est un simple instinct animal",
              "Le besoin est toujours imaginaire",
              "Il n'y a aucune différence"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'animal a des besoins ; l'homme désire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La passion",
          "stepTheme": "La passion",
          "stepBadge": "La passion",
          "paragraphText": "• Passion : développement d'un sentiment au détriment des autres ; un amour démesuré pour quelqu'un ou quelque chose.\nDans la passion, on subit, on souffre (pâtir).",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p01_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce que la passion ?",
            "options": [
              "Un besoin biologique",
              "Une connaissance scientifique",
              "Un désir naturel et nécessaire",
              "Un sentiment démesuré qui domine les autres et qu'on subit"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Passion vient de pâtir : on la subit."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les trois sortes de désirs",
          "stepTheme": "Les trois sortes de désirs",
          "stepBadge": "Les trois sortes de désirs",
          "paragraphText": "Épicure (Lettre à Ménécée) :\n• naturels et nécessaires (manger, boire, s'abriter) ;\n• naturels et non nécessaires (manger raffiné) ;\n• ni naturels ni nécessaires (gloire, richesse sans fin).\nLe sage se contente des désirs naturels et nécessaires.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p01_q4",
            "type": "mcq",
            "prompt": "Selon Épicure, de quels désirs le sage se contente-t-il ?",
            "options": [
              "De tous les désirs",
              "Des désirs naturels et nécessaires",
              "Des désirs de gloire",
              "Des désirs ni naturels ni nécessaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Limiter ses désirs, c'est s'assurer la tranquillité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les bonnes passions",
          "stepTheme": "Les bonnes passions",
          "stepBadge": "Les bonnes passions",
          "paragraphText": "Les moralistes condamnent les passions, mais certaines donnent de l'énergie à l'action.\nRousseau (La Nouvelle Héloïse) : il n'y a que des « âmes de feu » qui sachent combattre et vaincre.\nHegel (La Raison dans l'histoire) : « Rien de grand ne s'est accompli dans le monde sans passion ».",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p01_q5",
            "type": "mcq",
            "prompt": "Qui a écrit : « Rien de grand ne s'est accompli dans le monde sans passion » ?",
            "options": [
              "Épicure",
              "Hegel",
              "Platon",
              "Voltaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La passion peut être une force créatrice."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le juste milieu vient d'Aristote",
          "stepTheme": "Le juste milieu vient d'Aristote",
          "stepBadge": "Le juste milieu vient d'Aristote",
          "paragraphText": "Le PDF attribue à Platon (Phédon) la formule « La vertu réside dans le juste milieu ».\nEn réalité, la vertu comme juste milieu entre deux excès est la doctrine d'Aristote (Éthique à Nicomaque) : le courage est entre la lâcheté et la témérité.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p01_q6",
            "type": "mcq",
            "prompt": "Chez quel philosophe trouve-t-on la vertu comme juste milieu entre deux excès ?",
            "options": [
              "Platon, dans le Phédon",
              "Hegel, dans La Raison dans l'histoire",
              "Rousseau, dans La Nouvelle Héloïse",
              "Aristote, dans l'Éthique à Nicomaque"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le juste milieu est la marque d'Aristote ; c'est la référence à donner au BAC."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p01_q1",
          "type": "mcq",
          "prompt": "Quelle définition s'applique au désir ?",
          "options": [
            "Excès d'émotion qui détourne de la raison",
            "Ensemble de procédés pour fabriquer",
            "Aspiration profonde à posséder quelque chose qui nous manque",
            "Production du beau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le désir naît du manque. L'excès d'émotion qui égare décrit plutôt la passion."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p01_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce qui distingue le désir du besoin ?",
          "options": [
            "Le désir est lié à la conscience, il est propre à l'homme",
            "Le désir est un simple instinct animal",
            "Le besoin est toujours imaginaire",
            "Il n'y a aucune différence"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'animal a des besoins ; l'homme désire."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p01_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce que la passion ?",
          "options": [
            "Un besoin biologique",
            "Une connaissance scientifique",
            "Un désir naturel et nécessaire",
            "Un sentiment démesuré qui domine les autres et qu'on subit"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Passion vient de pâtir : on la subit."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p01_q4",
          "type": "mcq",
          "prompt": "Selon Épicure, de quels désirs le sage se contente-t-il ?",
          "options": [
            "De tous les désirs",
            "Des désirs naturels et nécessaires",
            "Des désirs de gloire",
            "Des désirs ni naturels ni nécessaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Limiter ses désirs, c'est s'assurer la tranquillité."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p01_q5",
          "type": "mcq",
          "prompt": "Qui a écrit : « Rien de grand ne s'est accompli dans le monde sans passion » ?",
          "options": [
            "Épicure",
            "Hegel",
            "Platon",
            "Voltaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La passion peut être une force créatrice."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p01_q6",
          "type": "mcq",
          "prompt": "Chez quel philosophe trouve-t-on la vertu comme juste milieu entre deux excès ?",
          "options": [
            "Platon, dans le Phédon",
            "Hegel, dans La Raison dans l'histoire",
            "Rousseau, dans La Nouvelle Héloïse",
            "Aristote, dans l'Éthique à Nicomaque"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le juste milieu est la marque d'Aristote ; c'est la référence à donner au BAC."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p02",
      "order": 2,
      "title": "Le travail et la technique",
      "summary": "Définir le travail et la technique, technoscience et homo faber.",
      "conceptExplanation": "Le travail est une activité consciente de transformation de la nature et de l'homme lui-même, qui produit l'utile au prix d'efforts physiques et intellectuels.\nLe mot viendrait du latin tripalium, instrument de torture à trois pieux.\nDans la Genèse (chapitre 3), le travail apparaît comme une sanction après la désobéissance d'Adam et Ève.\nLa technique est l'ensemble des procédés pour produire, fabriquer, inventer : le savoir-faire de l'homme. Aujourd'hui, elle est surtout science appliquée (technoscience).\nVoltaire (Candide) : « Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin ».",
      "keyRule": "Travail = transformer la nature pour produire l'utile ; technique = savoir-faire.",
      "formulas": [],
      "workedExample": {
        "title": "Du champ à la table",
        "statement": "Un planteur transforme une parcelle en champ d'igname. En quoi est-ce un travail ?",
        "methodSteps": [
          "Il transforme la nature (défricher, planter, récolter).",
          "Il fournit des efforts physiques et intellectuels.",
          "Il produit un bien utile et se forme lui-même."
        ],
        "conclusion": "Le travail transforme la nature et l'homme qui travaille."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le travail",
          "stepTheme": "Le travail",
          "stepBadge": "Le travail",
          "paragraphText": "• Travail : activité consciente de transformation de la nature et de l'homme lui-même, en vue de produire l'utile.\nIl demande des efforts physiques et intellectuels.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p02_q1",
            "type": "mcq",
            "prompt": "Quelle définition correspond au travail ?",
            "options": [
              "Ensemble d'efforts physiques et intellectuels pour produire l'utile",
              "Création du beau",
              "Capacité à combiner des images",
              "Récit des origines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le travail vise l'utile, l'art vise le beau."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Tripalium",
          "stepTheme": "Tripalium",
          "stepBadge": "Tripalium",
          "paragraphText": "Le mot travail viendrait du latin tripalium, un instrument de torture à trois pieux.\nCette étymologie, discutée par les linguistes, rappelle que le travail est d'abord vécu comme une peine.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p02_q2",
            "type": "mcq",
            "prompt": "Que rappelle l'étymologie tripalium ?",
            "options": [
              "Que le travail est un jeu",
              "Que le travail est réservé aux savants",
              "Que le travail est vécu comme une peine",
              "Que le travail est un art"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le travail est d'abord une contrainte à surmonter."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une malédiction ?",
          "stepTheme": "Une malédiction ?",
          "stepBadge": "Une malédiction ?",
          "paragraphText": "Dans les religions monothéistes, le travail apparaît comme une sanction après la désobéissance d'Adam et Ève (Genèse, chapitre 3) : « Tu mangeras ton pain à la sueur de ton front ».",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p02_q3",
            "type": "mcq",
            "prompt": "Dans la Genèse, comment le travail apparaît-il ?",
            "options": [
              "Comme un divertissement",
              "Comme une invention de la science",
              "Comme une œuvre d'art",
              "Comme une sanction après la désobéissance d'Adam et Ève"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Genèse 3 : le travail pénible suit la chute."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La technique",
          "stepTheme": "La technique",
          "stepBadge": "La technique",
          "paragraphText": "• Technique : ensemble de procédés permettant de produire, fabriquer, inventer ; le savoir-faire de l'homme.\nAujourd'hui, elle est surtout l'application de la science : on parle de technoscience.\nL'homme est un homo faber, un fabricant d'outils.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p02_q4",
            "type": "mcq",
            "prompt": "Que signifie « homo faber » ?",
            "options": [
              "L'homme qui pense",
              "L'homme qui prie",
              "L'homme fabricant d'outils",
              "L'homme qui joue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Faber : celui qui fabrique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le travail libère",
          "stepTheme": "Le travail libère",
          "stepBadge": "Le travail libère",
          "paragraphText": "Voltaire (Candide) : « Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin ».\nPour Freud (Malaise dans la civilisation), le travail permet aussi de transformer (sublimer) des pulsions agressives.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p02_q5",
            "type": "mcq",
            "prompt": "Selon Voltaire, quels maux le travail éloigne-t-il ?",
            "options": [
              "La maladie, la mort et la guerre",
              "L'ennui, le vice et le besoin",
              "La passion, le désir et l'art",
              "La peur, la honte et la colère"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La formule conclut Candide."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le travail peut aliéner",
          "stepTheme": "Le travail peut aliéner",
          "stepBadge": "Le travail peut aliéner",
          "paragraphText": "Le travail n'est pas toujours libérateur. Marx (Manuscrits de 1844) dénonce l'aliénation : l'ouvrier, soumis à la machine, ne se reconnaît plus dans ce qu'il produit.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p02_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations est fausse ?",
            "options": [
              "Le travail rend toujours l'homme libre, sans exception",
              "Marx dénonce l'aliénation du travailleur",
              "La machine peut déshumaniser le travail",
              "Le travail peut être source de dignité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le travail libère ou aliène selon ses conditions."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p02_q1",
          "type": "mcq",
          "prompt": "Quelle définition correspond au travail ?",
          "options": [
            "Ensemble d'efforts physiques et intellectuels pour produire l'utile",
            "Création du beau",
            "Capacité à combiner des images",
            "Récit des origines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le travail vise l'utile, l'art vise le beau."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p02_q2",
          "type": "mcq",
          "prompt": "Que rappelle l'étymologie tripalium ?",
          "options": [
            "Que le travail est un jeu",
            "Que le travail est réservé aux savants",
            "Que le travail est vécu comme une peine",
            "Que le travail est un art"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le travail est d'abord une contrainte à surmonter."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p02_q3",
          "type": "mcq",
          "prompt": "Dans la Genèse, comment le travail apparaît-il ?",
          "options": [
            "Comme un divertissement",
            "Comme une invention de la science",
            "Comme une œuvre d'art",
            "Comme une sanction après la désobéissance d'Adam et Ève"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Genèse 3 : le travail pénible suit la chute."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p02_q4",
          "type": "mcq",
          "prompt": "Que signifie « homo faber » ?",
          "options": [
            "L'homme qui pense",
            "L'homme qui prie",
            "L'homme fabricant d'outils",
            "L'homme qui joue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Faber : celui qui fabrique."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p02_q5",
          "type": "mcq",
          "prompt": "Selon Voltaire, quels maux le travail éloigne-t-il ?",
          "options": [
            "La maladie, la mort et la guerre",
            "L'ennui, le vice et le besoin",
            "La passion, le désir et l'art",
            "La peur, la honte et la colère"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La formule conclut Candide."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p02_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations est fausse ?",
          "options": [
            "Le travail rend toujours l'homme libre, sans exception",
            "Marx dénonce l'aliénation du travailleur",
            "La machine peut déshumaniser le travail",
            "Le travail peut être source de dignité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le travail libère ou aliène selon ses conditions."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p03",
      "order": 3,
      "title": "L'art et l'imagination",
      "summary": "L'art imite-t-il ou crée-t-il ? Platon, Kant, Hegel, Bachelard.",
      "conceptExplanation": "L'art est la production du beau par un être conscient.\nPlaton (République, livre X) condamne l'art d'imitation : il est « bien éloigné du vrai », une copie de copie.\nKant (Critique de la faculté de juger) : l'art est « la belle représentation d'une chose », non la représentation d'une belle chose.\nHegel (Esthétique) : l'imitation ne produit que des chefs-d'œuvre de technique, jamais des œuvres d'art.\nL'imagination, pour Kant, est le pouvoir de se représenter un objet même en son absence ; Bachelard (L'air et les songes) y voit « l'expérience même de l'ouverture, de la nouveauté ».",
      "keyRule": "L'art n'imite pas seulement : il crée, grâce à l'imagination.",
      "formulas": [],
      "workedExample": {
        "title": "Un masque baoulé",
        "statement": "Un masque ne ressemble pas exactement à un visage réel. Est-ce un défaut ?",
        "methodSteps": [
          "Le sculpteur ne copie pas : il transforme les formes.",
          "Il crée une belle représentation qui exprime une idée ou une force."
        ],
        "conclusion": "Comme le dit Kant, l'art est la belle représentation d'une chose."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'art",
          "stepTheme": "L'art",
          "stepBadge": "L'art",
          "paragraphText": "• Art : production du beau par les œuvres d'un être conscient (peinture, sculpture, musique, poésie…).",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p03_q1",
            "type": "mcq",
            "prompt": "Quelle définition correspond à l'art ?",
            "options": [
              "Création du beau",
              "Production de l'utile",
              "Ensemble de procédés de fabrication",
              "Récit imaginaire des origines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'art vise le beau ; la technique vise l'utile."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Platon condamne l'imitation",
          "stepTheme": "Platon condamne l'imitation",
          "stepBadge": "Platon condamne l'imitation",
          "paragraphText": "Platon (République, livre X) : « l'art d'imiter est bien éloigné du vrai ; il ne touche qu'une petite partie de chaque chose, et cette partie n'est qu'un fantôme ».\nLe tableau copie un objet, qui lui-même copie l'Idée : une copie de copie.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p03_q2",
            "type": "mcq",
            "prompt": "Pourquoi Platon condamne-t-il l'art d'imitation ?",
            "options": [
              "Parce qu'il coûte trop cher",
              "Parce qu'il est éloigné du vrai, une copie de copie",
              "Parce qu'il est trop scientifique",
              "Parce qu'il fait progresser l'humanité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour Platon, l'imitation éloigne de la vérité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Kant : une belle représentation",
          "stepTheme": "Kant : une belle représentation",
          "stepBadge": "Kant : une belle représentation",
          "paragraphText": "Kant (Critique de la faculté de juger, § 48) : la beauté artistique est « une belle représentation d'une chose », et non la représentation d'une belle chose.\nL'artiste peut rendre beau même un sujet laid.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p03_q3",
            "type": "mcq",
            "prompt": "Pour Kant, qu'est-ce que l'art ?",
            "options": [
              "La représentation d'une belle chose",
              "Une copie exacte de la nature",
              "La belle représentation d'une chose",
              "Un savoir-faire utile"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La beauté est dans la représentation, pas dans le modèle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Hegel : dépasser l'imitation",
          "stepTheme": "Hegel : dépasser l'imitation",
          "stepBadge": "Hegel : dépasser l'imitation",
          "paragraphText": "Hegel (Esthétique) : l'art doit se proposer une autre fin que l'imitation de la nature ; l'imitation ne produit que « des chefs-d'œuvre de la technique, jamais des œuvres d'art ».",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p03_q4",
            "type": "mcq",
            "prompt": "Selon Hegel, que produit la simple imitation de la nature ?",
            "options": [
              "Les plus grandes œuvres d'art",
              "Des mythes",
              "Des vérités scientifiques",
              "Des chefs-d'œuvre de technique, pas des œuvres d'art"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'œuvre d'art exprime l'esprit, pas seulement une copie."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'imagination",
          "stepTheme": "L'imagination",
          "stepBadge": "L'imagination",
          "paragraphText": "Kant (Critique de la raison pure) : l'imagination est « le pouvoir de se représenter dans l'intuition un objet, même en son absence ».\nElle ne fait pas que rappeler le passé (mémoire) : elle combine et invente des images nouvelles.\nBachelard (L'air et les songes) : « l'expérience même de l'ouverture, de la nouveauté ».",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p03_q5",
            "type": "mcq",
            "prompt": "Pour Bachelard, qu'est-ce que l'imagination ?",
            "options": [
              "Une pâle copie de la réalité",
              "Une simple mémoire",
              "L'expérience même de l'ouverture, de la nouveauté",
              "Une maîtresse d'erreur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'imagination invente ; elle ne se réduit pas à la mémoire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Platon n'admire pas l'art",
          "stepTheme": "Platon n'admire pas l'art",
          "stepBadge": "Platon n'admire pas l'art",
          "paragraphText": "Attention au vrai ou faux du PDF : « Selon Platon, l'imagination et l'art, dont les œuvres sont de pures créations, font progresser l'humanité. »\nC'est faux : Platon se méfie de l'art d'imitation, qu'il juge éloigné du vrai.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p03_q6",
            "type": "mcq",
            "prompt": "L'affirmation « Selon Platon, l'art fait progresser l'humanité » est…",
            "options": [
              "Vraie, car Platon admire les poètes",
              "Vraie, car l'art est une Idée",
              "Fausse, car Platon ignore l'art",
              "Fausse, car Platon juge l'art d'imitation éloigné du vrai"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Platon condamne l'imitation au livre X de la République."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p03_q1",
          "type": "mcq",
          "prompt": "Quelle définition correspond à l'art ?",
          "options": [
            "Création du beau",
            "Production de l'utile",
            "Ensemble de procédés de fabrication",
            "Récit imaginaire des origines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'art vise le beau ; la technique vise l'utile."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p03_q2",
          "type": "mcq",
          "prompt": "Pourquoi Platon condamne-t-il l'art d'imitation ?",
          "options": [
            "Parce qu'il coûte trop cher",
            "Parce qu'il est éloigné du vrai, une copie de copie",
            "Parce qu'il est trop scientifique",
            "Parce qu'il fait progresser l'humanité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour Platon, l'imitation éloigne de la vérité."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p03_q3",
          "type": "mcq",
          "prompt": "Pour Kant, qu'est-ce que l'art ?",
          "options": [
            "La représentation d'une belle chose",
            "Une copie exacte de la nature",
            "La belle représentation d'une chose",
            "Un savoir-faire utile"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La beauté est dans la représentation, pas dans le modèle."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p03_q4",
          "type": "mcq",
          "prompt": "Selon Hegel, que produit la simple imitation de la nature ?",
          "options": [
            "Les plus grandes œuvres d'art",
            "Des mythes",
            "Des vérités scientifiques",
            "Des chefs-d'œuvre de technique, pas des œuvres d'art"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'œuvre d'art exprime l'esprit, pas seulement une copie."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p03_q5",
          "type": "mcq",
          "prompt": "Pour Bachelard, qu'est-ce que l'imagination ?",
          "options": [
            "Une pâle copie de la réalité",
            "Une simple mémoire",
            "L'expérience même de l'ouverture, de la nouveauté",
            "Une maîtresse d'erreur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'imagination invente ; elle ne se réduit pas à la mémoire."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p03_q6",
          "type": "mcq",
          "prompt": "L'affirmation « Selon Platon, l'art fait progresser l'humanité » est…",
          "options": [
            "Vraie, car Platon admire les poètes",
            "Vraie, car l'art est une Idée",
            "Fausse, car Platon ignore l'art",
            "Fausse, car Platon juge l'art d'imitation éloigné du vrai"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Platon condamne l'imitation au livre X de la République."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p04",
      "order": 4,
      "title": "Les différents types de progrès",
      "summary": "Définir le progrès ; Hegel et Marx ; progrès matériel et progrès moral.",
      "conceptExplanation": "Le progrès est une marche en avant, un passage graduel d'un état inférieur à un état supérieur : une évolution bénéfique.\nPour Hegel (La Raison dans l'histoire), le progrès est une nécessité historique, guidée par l'Esprit.\nPour Marx, le progrès est l'œuvre de l'homme lui-même, par son action et son travail.\nLe progrès matériel vient de la science et de la technique : l'homme devient « comme maître et possesseur de la nature » (Descartes, Discours de la méthode, VIe partie).\nLe progrès spirituel et moral est l'élévation du sens moral et de l'esprit.",
      "keyRule": "Deux progrès : matériel (science, technique) et spirituel et moral (conscience).",
      "formulas": [],
      "workedExample": {
        "title": "Le téléphone portable",
        "statement": "Le téléphone portable est-il un progrès ?",
        "methodSteps": [
          "Progrès matériel : on communique vite et partout.",
          "Progrès moral ? Pas forcément : on peut l'utiliser pour mentir, harceler, escroquer."
        ],
        "conclusion": "Le progrès matériel ne garantit pas le progrès moral."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le progrès",
          "stepTheme": "Le progrès",
          "stepBadge": "Le progrès",
          "paragraphText": "• Progrès : marche en avant ; changement graduel qui constitue une évolution bénéfique, d'un état inférieur à un état supérieur.\nUn changement en mal (aggravation) n'est pas un progrès.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p04_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces définitions du progrès est juste ?",
            "options": [
              "Un changement graduel qui constitue une évolution bénéfique",
              "Tout changement, en bien ou en mal",
              "Un retour en arrière",
              "Une aggravation lente"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le progrès implique une amélioration."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Hegel : la ruse de l'Esprit",
          "stepTheme": "Hegel : la ruse de l'Esprit",
          "stepBadge": "Hegel : la ruse de l'Esprit",
          "paragraphText": "Pour Hegel (La Raison dans l'histoire), le progrès est une nécessité historique : l'Esprit conduit l'évolution des peuples vers la liberté.\nLes individus en sont les instruments.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p04_q2",
            "type": "mcq",
            "prompt": "Pour Hegel, qu'est-ce qui conduit le progrès ?",
            "options": [
              "L'action libre de chaque individu seulement",
              "L'Esprit, selon une nécessité historique",
              "Le hasard",
              "Les dieux de l'Olympe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chez Hegel, l'histoire suit le mouvement de l'Esprit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Hegel ou Marx ?",
          "stepTheme": "Hegel ou Marx ?",
          "stepBadge": "Hegel ou Marx ?",
          "paragraphText": "C'est Marx, et non Hegel, qui fait du progrès l'œuvre de l'homme lui-même, par son travail et son action (La Sainte Famille).\nAu vrai ou faux « D'après Hegel, le progrès est l'œuvre de l'homme lui-même », il faut répondre faux.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p04_q3",
            "type": "mcq",
            "prompt": "Qui voit le progrès comme l'œuvre de l'homme lui-même, par son travail ?",
            "options": [
              "Hegel",
              "Marx",
              "Platon",
              "Épicure"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Hegel : l'Esprit ; Marx : l'homme qui travaille."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le progrès matériel",
          "stepTheme": "Le progrès matériel",
          "stepBadge": "Le progrès matériel",
          "paragraphText": "Le progrès matériel est la conséquence de la science et de la technique.\nDescartes (Discours de la méthode, VIe partie) annonçait que la science nous rendrait « comme maîtres et possesseurs de la nature ».",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p04_q4",
            "type": "mcq",
            "prompt": "Qui a annoncé que la science nous rendrait « comme maîtres et possesseurs de la nature » ?",
            "options": [
              "Descartes",
              "Rousseau",
              "Freud",
              "Bergson"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La « prophétie cartésienne » s'accomplit avec la technoscience."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le progrès spirituel et moral",
          "stepTheme": "Le progrès spirituel et moral",
          "stepBadge": "Le progrès spirituel et moral",
          "paragraphText": "• Progrès spirituel et moral : changement qualitatif dans la pensée et la conduite ; développement du sens moral et élévation de l'esprit.\nIl corrige les excès d'un progrès seulement matériel.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p04_q5",
            "type": "mcq",
            "prompt": "Qu'est-ce que le progrès moral ?",
            "options": [
              "L'augmentation des richesses",
              "La multiplication des machines",
              "La conquête de l'espace",
              "Le développement du sens moral et de l'esprit"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le progrès moral concerne la conscience, pas les objets."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une citation de Kant détournée",
          "stepTheme": "Une citation de Kant détournée",
          "stepBadge": "Une citation de Kant détournée",
          "paragraphText": "Le PDF présente « Le Je pense doit pouvoir accompagner toutes mes représentations » comme une recommandation morale.\nEn réalité, dans la Critique de la raison pure, cette phrase concerne la connaissance : l'unité de la conscience qui relie nos représentations. Ne l'utilisez pas pour parler de progrès moral.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p04_q6",
            "type": "mcq",
            "prompt": "De quoi parle la phrase de Kant « Le Je pense doit pouvoir accompagner toutes mes représentations » ?",
            "options": [
              "Du progrès moral de l'humanité",
              "Du bonheur",
              "De l'unité de la conscience dans la connaissance",
              "De la technique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est une thèse sur la connaissance, pas un conseil moral."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p04_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces définitions du progrès est juste ?",
          "options": [
            "Un changement graduel qui constitue une évolution bénéfique",
            "Tout changement, en bien ou en mal",
            "Un retour en arrière",
            "Une aggravation lente"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le progrès implique une amélioration."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p04_q2",
          "type": "mcq",
          "prompt": "Pour Hegel, qu'est-ce qui conduit le progrès ?",
          "options": [
            "L'action libre de chaque individu seulement",
            "L'Esprit, selon une nécessité historique",
            "Le hasard",
            "Les dieux de l'Olympe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chez Hegel, l'histoire suit le mouvement de l'Esprit."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p04_q3",
          "type": "mcq",
          "prompt": "Qui voit le progrès comme l'œuvre de l'homme lui-même, par son travail ?",
          "options": [
            "Hegel",
            "Marx",
            "Platon",
            "Épicure"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Hegel : l'Esprit ; Marx : l'homme qui travaille."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p04_q4",
          "type": "mcq",
          "prompt": "Qui a annoncé que la science nous rendrait « comme maîtres et possesseurs de la nature » ?",
          "options": [
            "Descartes",
            "Rousseau",
            "Freud",
            "Bergson"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La « prophétie cartésienne » s'accomplit avec la technoscience."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p04_q5",
          "type": "mcq",
          "prompt": "Qu'est-ce que le progrès moral ?",
          "options": [
            "L'augmentation des richesses",
            "La multiplication des machines",
            "La conquête de l'espace",
            "Le développement du sens moral et de l'esprit"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le progrès moral concerne la conscience, pas les objets."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p04_q6",
          "type": "mcq",
          "prompt": "De quoi parle la phrase de Kant « Le Je pense doit pouvoir accompagner toutes mes représentations » ?",
          "options": [
            "Du progrès moral de l'humanité",
            "Du bonheur",
            "De l'unité de la conscience dans la connaissance",
            "De la technique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est une thèse sur la connaissance, pas un conseil moral."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p05",
      "order": 5,
      "title": "Les limites du progrès matériel",
      "summary": "Freud, Rousseau, Marx, l'école de Francfort, Michel Henry.",
      "conceptExplanation": "Freud (Malaise dans la civilisation) constate que la domination de la nature n'a pas rendu les hommes plus heureux.\nRousseau (Discours sur les sciences et les arts) : nos âmes se sont corrompues à mesure que les sciences et les arts progressaient.\nMarx (Manuscrits de 1844) dénonce l'aliénation du travailleur.\nAdorno et Horkheimer (La Dialectique de la raison) montrent que la raison technique peut servir la barbarie.\nMichel Henry (La barbarie, 1987) voit dans la technique une « nouvelle barbarie ».",
      "keyRule": "Le progrès matériel seul ne rend pas heureux et peut se retourner contre l'homme.",
      "formulas": [],
      "workedExample": {
        "title": "La bombe atomique",
        "statement": "La physique nucléaire est un progrès du savoir. Est-elle un progrès pour l'humanité ?",
        "methodSteps": [
          "Elle produit de l'énergie et soigne (radiothérapie).",
          "Elle a aussi détruit Hiroshima et Nagasaki en 1945."
        ],
        "conclusion": "Le progrès technique vaut ce que vaut l'usage moral qu'on en fait."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le constat de Freud",
          "stepTheme": "Le constat de Freud",
          "stepBadge": "Le constat de Freud",
          "paragraphText": "Freud (Malaise dans la civilisation, 1930) : les hommes sont fiers de leur domination sur la nature, mais n'ont pas le sentiment d'être devenus plus heureux.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p05_q1",
            "type": "mcq",
            "prompt": "Quel constat fait Freud dans Malaise dans la civilisation ?",
            "options": [
              "La technique a supprimé toute souffrance",
              "Les hommes ont honte du progrès",
              "La maîtrise de la nature n'a pas rendu les hommes plus heureux",
              "Le progrès est impossible"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Progrès matériel et bonheur ne coïncident pas."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "La vraie thèse de Freud est nuancée",
          "stepTheme": "La vraie thèse de Freud est nuancée",
          "stepBadge": "La vraie thèse de Freud est nuancée",
          "paragraphText": "Le corrigé du PDF résume la thèse : les hommes ne sont pas plus heureux. C'est incomplet.\nFreud conclut que la domination de la nature n'est pas la seule condition du bonheur, mais il refuse de dire que la technique est sans valeur pour notre bonheur.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p05_q2",
            "type": "mcq",
            "prompt": "Quelle est la conclusion exacte de Freud dans ce texte ?",
            "options": [
              "La maîtrise de la nature n'est pas la seule condition du bonheur, mais elle a de la valeur",
              "La technique n'a aucune valeur pour le bonheur",
              "La technique suffit à rendre heureux",
              "Il faut détruire la technique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Freud écrit qu'il ne faut pas conclure que les progrès techniques sont dénués de valeur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Rousseau et la corruption",
          "stepTheme": "Rousseau et la corruption",
          "stepBadge": "Rousseau et la corruption",
          "paragraphText": "Rousseau (Discours sur les sciences et les arts, 1750) : « nos âmes se sont corrompues à mesure que nos sciences et nos arts se sont avancés à la perfection ».",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p05_q3",
            "type": "mcq",
            "prompt": "Selon Rousseau, qu'ont produit les progrès des sciences et des arts ?",
            "options": [
              "La vertu universelle",
              "La fin des inégalités",
              "Le bonheur de tous",
              "La corruption des âmes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pour Rousseau, progrès intellectuel et progrès moral divergent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La raison devenue instrument",
          "stepTheme": "La raison devenue instrument",
          "stepBadge": "La raison devenue instrument",
          "paragraphText": "Adorno et Horkheimer (La Dialectique de la raison, 1944), de l'école de Francfort, montrent que la raison technique peut servir n'importe quelle fin, même les crimes de masse du XXe siècle.\nLe progrès peut se muer en régression.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p05_q4",
            "type": "mcq",
            "prompt": "Que montrent Adorno et Horkheimer ?",
            "options": [
              "Que la technique rend toujours meilleur",
              "Que la raison technique peut servir n'importe quelle fin, même la barbarie",
              "Que le mythe est l'enfance de l'esprit",
              "Que le travail éloigne le vice"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une raison sans fins morales devient dangereuse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une hache entre de mauvaises mains",
          "stepTheme": "Une hache entre de mauvaises mains",
          "stepBadge": "Une hache entre de mauvaises mains",
          "paragraphText": "Une formule attribuée à Einstein compare le progrès technique à « une hache entre les mains d'un criminel ».\nMichel Henry (La barbarie) voit dans la technique une « nouvelle barbarie » qui remplace la culture.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p05_q5",
            "type": "mcq",
            "prompt": "Que veut dire la comparaison du progrès technique avec une hache aux mains d'un criminel ?",
            "options": [
              "La technique est inutile",
              "La technique est dangereuse sans morale",
              "La technique est toujours bonne",
              "La technique remplace la morale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un outil puissant sans conscience devient une arme."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les dégâts sur la nature",
          "stepTheme": "Les dégâts sur la nature",
          "stepBadge": "Les dégâts sur la nature",
          "paragraphText": "L'usage abusif des produits techniques détruit l'écosystème, pollue l'environnement et provoque des maladies.\nLe progrès matériel peut menacer l'équilibre de la planète.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p05_q6",
            "type": "mcq",
            "prompt": "Quel argument montre que la misère persiste malgré le progrès technique ?",
            "options": [
              "L'augmentation de l'espérance de vie",
              "La croissance économique",
              "La production abondante de biens",
              "La pollution et la destruction de l'écosystème"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les trois autres réponses sont des arguments en faveur du progrès technique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p05_q1",
          "type": "mcq",
          "prompt": "Quel constat fait Freud dans Malaise dans la civilisation ?",
          "options": [
            "La technique a supprimé toute souffrance",
            "Les hommes ont honte du progrès",
            "La maîtrise de la nature n'a pas rendu les hommes plus heureux",
            "Le progrès est impossible"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Progrès matériel et bonheur ne coïncident pas."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p05_q2",
          "type": "mcq",
          "prompt": "Quelle est la conclusion exacte de Freud dans ce texte ?",
          "options": [
            "La maîtrise de la nature n'est pas la seule condition du bonheur, mais elle a de la valeur",
            "La technique n'a aucune valeur pour le bonheur",
            "La technique suffit à rendre heureux",
            "Il faut détruire la technique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Freud écrit qu'il ne faut pas conclure que les progrès techniques sont dénués de valeur."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p05_q3",
          "type": "mcq",
          "prompt": "Selon Rousseau, qu'ont produit les progrès des sciences et des arts ?",
          "options": [
            "La vertu universelle",
            "La fin des inégalités",
            "Le bonheur de tous",
            "La corruption des âmes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pour Rousseau, progrès intellectuel et progrès moral divergent."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p05_q4",
          "type": "mcq",
          "prompt": "Que montrent Adorno et Horkheimer ?",
          "options": [
            "Que la technique rend toujours meilleur",
            "Que la raison technique peut servir n'importe quelle fin, même la barbarie",
            "Que le mythe est l'enfance de l'esprit",
            "Que le travail éloigne le vice"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une raison sans fins morales devient dangereuse."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p05_q5",
          "type": "mcq",
          "prompt": "Que veut dire la comparaison du progrès technique avec une hache aux mains d'un criminel ?",
          "options": [
            "La technique est inutile",
            "La technique est dangereuse sans morale",
            "La technique est toujours bonne",
            "La technique remplace la morale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un outil puissant sans conscience devient une arme."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p05_q6",
          "type": "mcq",
          "prompt": "Quel argument montre que la misère persiste malgré le progrès technique ?",
          "options": [
            "L'augmentation de l'espérance de vie",
            "La croissance économique",
            "La production abondante de biens",
            "La pollution et la destruction de l'écosystème"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les trois autres réponses sont des arguments en faveur du progrès technique."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p06",
      "order": 6,
      "title": "Les conditions du bonheur",
      "summary": "Allier progrès matériel et moral ; le bonheur est-il accessible ?",
      "conceptExplanation": "Le bonheur est un état de pleine satisfaction ; pour Kant, « la satisfaction de toutes nos inclinations ».\nIl suppose que le progrès matériel s'accompagne du progrès spirituel et moral : « Science sans conscience n'est que ruine de l'âme » (Rabelais, Pantagruel) ; il faut un « supplément d'âme » (Bergson, Les Deux Sources de la morale et de la religion).\nLe bonheur est-il accessible ? Oui pour Épicure : l'absence de douleur du corps et l'ataraxie de l'âme. Non pour Platon (Gorgias), pour qui le désir est un tonneau percé, et pour Schopenhauer, pour qui toute satisfaction est provisoire.",
      "keyRule": "Le bonheur demande un progrès matériel guidé par la conscience morale.",
      "formulas": [],
      "workedExample": {
        "title": "Une maison du bonheur",
        "statement": "Jules Renard écrit : « Si l'on bâtissait la maison du bonheur, la plus grande pièce serait la salle d'attente. » Que veut-il dire ?",
        "methodSteps": [
          "L'homme passe son temps à espérer le bonheur.",
          "Le bonheur total reste toujours à venir."
        ],
        "conclusion": "Le bonheur complet demeure un idéal."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le bonheur",
          "stepTheme": "Le bonheur",
          "stepBadge": "Le bonheur",
          "paragraphText": "• Bonheur : état de pleine et durable satisfaction, de plein épanouissement.\nKant le définit comme « la satisfaction de toutes nos inclinations ».",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p06_q1",
            "type": "mcq",
            "prompt": "Comment Kant définit-il le bonheur ?",
            "options": [
              "La satisfaction de toutes nos inclinations",
              "L'absence totale de désir",
              "La possession de machines",
              "Le juste milieu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le bonheur est un état de satisfaction complète."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Science et conscience",
          "stepTheme": "Science et conscience",
          "stepBadge": "Science et conscience",
          "paragraphText": "Rabelais (Pantagruel) : « Science sans conscience n'est que ruine de l'âme ».\nLe progrès matériel doit être guidé par le progrès moral : l'homme est corps et esprit.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p06_q2",
            "type": "mcq",
            "prompt": "Qui a écrit : « Science sans conscience n'est que ruine de l'âme » ?",
            "options": [
              "Descartes",
              "Freud",
              "Rabelais",
              "Hegel"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La phrase vient de Pantagruel, de Rabelais."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un supplément d'âme",
          "stepTheme": "Un supplément d'âme",
          "stepBadge": "Un supplément d'âme",
          "paragraphText": "Bergson (Les Deux Sources de la morale et de la religion, 1932) : la technique a agrandi démesurément le corps de l'humanité ; ce corps agrandi attend un « supplément d'âme ».",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p06_q3",
            "type": "mcq",
            "prompt": "Selon Bergson, que manque-t-il à une humanité très avancée techniquement ?",
            "options": [
              "Plus de machines",
              "Plus de richesses",
              "Moins de science",
              "Un supplément d'âme"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il faut un progrès spirituel à la mesure du progrès technique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le bonheur épicurien",
          "stepTheme": "Le bonheur épicurien",
          "stepBadge": "Le bonheur épicurien",
          "paragraphText": "Épicure (Lettre à Ménécée) : le plaisir visé n'est pas la débauche, mais « l'absence de douleur dans le corps et l'absence de trouble dans l'âme » (l'ataraxie).\nPour lui, le bonheur est accessible par la sagesse.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p06_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'ataraxie chez Épicure ?",
            "options": [
              "La recherche de tous les plaisirs",
              "La passion amoureuse",
              "L'absence de trouble de l'âme",
              "Le travail à la chaîne"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le plaisir épicurien est un état de calme, pas d'excès."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le tonneau percé",
          "stepTheme": "Le tonneau percé",
          "stepBadge": "Le tonneau percé",
          "paragraphText": "Platon (Gorgias) compare l'âme de celui qui ne maîtrise pas ses désirs à un tonneau percé : on le remplit sans cesse, il se vide toujours.\nSchopenhauer : la satisfaction ressemble à l'aumône donnée au mendiant, qui le fait vivre aujourd'hui pour qu'il ait faim demain.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p06_q5",
            "type": "mcq",
            "prompt": "Que signifie l'image du tonneau percé ?",
            "options": [
              "Le désir est vite satisfait",
              "Le désir n'est jamais comblé",
              "Le travail est inutile",
              "La technique est parfaite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le désir se renouvelle sans fin : l'homme est insatiable."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ellul, critique de la technique",
          "stepTheme": "Ellul, critique de la technique",
          "stepBadge": "Ellul, critique de la technique",
          "paragraphText": "Le corrigé du PDF cite Jacques Ellul comme s'il célébrait la technique (« le nouveau Dieu qui sauve »).\nAttention : Ellul (La Technique ou l'enjeu du siècle) est un grand critique de la technique. Il décrit la technique devenue sacrée pour l'homme moderne afin de le dénoncer, pas pour l'approuver.",
          "exercise": {
            "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p06_q6",
            "type": "mcq",
            "prompt": "Quelle est la position de Jacques Ellul sur la technique ?",
            "options": [
              "Il la critique et dénonce sa sacralisation",
              "Il la vénère comme un Dieu sauveur",
              "Il l'ignore",
              "Il la confond avec l'art"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Au BAC, utilisez Ellul dans l'axe critique, pas pour défendre la technique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p06_q1",
          "type": "mcq",
          "prompt": "Comment Kant définit-il le bonheur ?",
          "options": [
            "La satisfaction de toutes nos inclinations",
            "L'absence totale de désir",
            "La possession de machines",
            "Le juste milieu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bonheur est un état de satisfaction complète."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p06_q2",
          "type": "mcq",
          "prompt": "Qui a écrit : « Science sans conscience n'est que ruine de l'âme » ?",
          "options": [
            "Descartes",
            "Freud",
            "Rabelais",
            "Hegel"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La phrase vient de Pantagruel, de Rabelais."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p06_q3",
          "type": "mcq",
          "prompt": "Selon Bergson, que manque-t-il à une humanité très avancée techniquement ?",
          "options": [
            "Plus de machines",
            "Plus de richesses",
            "Moins de science",
            "Un supplément d'âme"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il faut un progrès spirituel à la mesure du progrès technique."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p06_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'ataraxie chez Épicure ?",
          "options": [
            "La recherche de tous les plaisirs",
            "La passion amoureuse",
            "L'absence de trouble de l'âme",
            "Le travail à la chaîne"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le plaisir épicurien est un état de calme, pas d'excès."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p06_q5",
          "type": "mcq",
          "prompt": "Que signifie l'image du tonneau percé ?",
          "options": [
            "Le désir est vite satisfait",
            "Le désir n'est jamais comblé",
            "Le travail est inutile",
            "La technique est parfaite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le désir se renouvelle sans fin : l'homme est insatiable."
        },
        {
          "id": "terminale_philo_conditions_bonheur_l03_progres_bonheur_p06_q6",
          "type": "mcq",
          "prompt": "Quelle est la position de Jacques Ellul sur la technique ?",
          "options": [
            "Il la critique et dénonce sa sacralisation",
            "Il la vénère comme un Dieu sauveur",
            "Il l'ignore",
            "Il la confond avec l'art"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Au BAC, utilisez Ellul dans l'axe critique, pas pour défendre la technique."
        }
      ]
    }
  ]
};
