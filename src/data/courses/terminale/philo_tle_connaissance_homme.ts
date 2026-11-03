import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo Tle_L3_La connaissance de l'homme.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_TLE_L03_CONNAISSANCE_HOMME: CurriculumChapter = {
  "id": "terminale_philo_conditions_liberte_l01_connaissance_homme",
  "subjectId": "philosophie",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 3,
  "title": "Les conditions de la liberté, leçon 1 : La connaissance de l'homme",
  "summary": "Conscience, mémoire et liberté ; la découverte de l'inconscient ; déterminisme et responsabilité.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "Philo Tle_L3_La connaissance de l'homme.pdf",
  "points": [
    {
      "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p01",
      "order": 1,
      "title": "L'homme, un être de conscience",
      "summary": "La conscience, faculté propre à l'homme, et sa dimension psychologique selon Descartes.",
      "conceptExplanation": "Connaître l'homme, c'est savoir ce qui fait son essence, sa nature.\nComme les autres vivants, l'homme a une dimension biologique ; mais la conscience le distingue.\nLa conscience est la faculté qui permet de se connaître, de connaître le monde et de juger.\nElle a deux dimensions : psychologique et morale.\nPar le doute, Descartes découvre une certitude : « Je pense, donc je suis » (le cogito).",
      "keyRule": "La conscience distingue l'homme : se connaître, connaître le monde, juger.",
      "formulas": [],
      "workedExample": {
        "title": "Le doute de Descartes",
        "statement": "Comment Descartes trouve-t-il une certitude absolue ?",
        "methodSteps": [
          "Il doute de tout : des sens, des opinions, du monde.",
          "Mais pour douter, il faut penser.",
          "Il ne peut donc pas douter qu'il pense."
        ],
        "conclusion": "« Je pense, donc je suis » : l'homme est d'abord un être pensant, conscient."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Connaître l'homme",
          "stepTheme": "Connaître l'homme",
          "stepBadge": "Connaître l'homme",
          "paragraphText": "• Essence : ce qui fait la nature d'un être, ce qu'il est fondamentalement.\nConnaître l'homme, c'est dégager ses caractéristiques essentielles.\nOn le définit souvent comme un être conscient ou pensant.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p01_q1",
            "type": "mcq",
            "prompt": "Que signifie « connaître l'homme » en philosophie ?",
            "options": [
              "Connaître le nom de chaque personne",
              "Étudier uniquement son corps",
              "Savoir ce qui fait son essence, sa nature",
              "Connaître son histoire familiale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La connaissance de l'homme cherche ce qui le définit essentiellement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La conscience",
          "stepTheme": "La conscience",
          "stepBadge": "La conscience",
          "paragraphText": "• Conscience : faculté psychique qui permet de se connaître, de connaître le monde et de juger.\nC'est elle qui distingue l'homme des autres êtres vivants.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p01_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce que la conscience ?",
            "options": [
              "La faculté de se connaître, de connaître le monde et de juger",
              "Une maladie de l'esprit",
              "Un organe du corps",
              "La capacité de courir vite"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conscience est la faculté de connaissance et de jugement propre à l'homme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Deux dimensions",
          "stepTheme": "Deux dimensions",
          "stepBadge": "Deux dimensions",
          "paragraphText": "La conscience a deux dimensions :\n• psychologique : se connaître et connaître le monde extérieur ;\n• morale : juger ses actes, distinguer le bien et le mal.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p01_q3",
            "type": "mcq",
            "prompt": "Quelles sont les deux dimensions de la conscience ?",
            "options": [
              "Biologique et chimique",
              "Politique et économique",
              "Physique et sportive",
              "Psychologique et morale"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La conscience permet de connaître (psychologique) et de juger (morale)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le cogito de Descartes",
          "stepTheme": "Le cogito de Descartes",
          "stepBadge": "Le cogito de Descartes",
          "paragraphText": "René Descartes (1596-1650) doute de toutes ses connaissances.\nIl découvre une chose dont il ne peut douter : il pense.\nD'où la formule « Je pense, donc je suis » (Discours de la méthode ; en latin, « Cogito ergo sum »).",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p01_q4",
            "type": "mcq",
            "prompt": "Quelle formule résume la découverte de Descartes ?",
            "options": [
              "« L'homme est un loup pour l'homme »",
              "« Je pense, donc je suis »",
              "« Toute conscience est mémoire »",
              "« L'enfer, c'est les autres »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cogito fait de la pensée la première certitude."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La conscience n'est pas commune à l'animal",
          "stepTheme": "La conscience n'est pas commune à l'animal",
          "stepBadge": "La conscience n'est pas commune à l'animal",
          "paragraphText": "L'homme partage avec l'animal une dimension biologique.\nMais la conscience réfléchie (se savoir soi-même, juger ses actes) est propre à l'homme selon le cours.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p01_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations est conforme au cours ?",
            "options": [
              "La conscience est commune à l'homme et à l'animal",
              "La conscience est une faculté propre à l'homme",
              "La conscience s'oppose à la mémoire",
              "La conscience est la seule réalité du psychisme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cours fait de la conscience la marque spécifique de l'homme."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Utiliser Descartes au BAC",
          "stepTheme": "Utiliser Descartes au BAC",
          "stepBadge": "Utiliser Descartes au BAC",
          "paragraphText": "Pour défendre « l'homme est essentiellement conscient », cite Descartes : « Je pense, donc je suis ».\nExplique : même en doutant de tout, je ne peux douter que je pense ; la pensée est donc mon essence.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p01_q6",
            "type": "mcq",
            "prompt": "Quelle thèse la référence à Descartes permet-elle de défendre ?",
            "options": [
              "L'homme est déterminé par l'inconscient",
              "L'homme est naturellement violent",
              "L'homme n'est pas libre",
              "L'homme est essentiellement un être pensant et conscient"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Descartes définit l'homme par la pensée consciente."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p01_q1",
          "type": "mcq",
          "prompt": "Que signifie « connaître l'homme » en philosophie ?",
          "options": [
            "Connaître le nom de chaque personne",
            "Étudier uniquement son corps",
            "Savoir ce qui fait son essence, sa nature",
            "Connaître son histoire familiale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La connaissance de l'homme cherche ce qui le définit essentiellement."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p01_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce que la conscience ?",
          "options": [
            "La faculté de se connaître, de connaître le monde et de juger",
            "Une maladie de l'esprit",
            "Un organe du corps",
            "La capacité de courir vite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conscience est la faculté de connaissance et de jugement propre à l'homme."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p01_q3",
          "type": "mcq",
          "prompt": "Quelles sont les deux dimensions de la conscience ?",
          "options": [
            "Biologique et chimique",
            "Politique et économique",
            "Physique et sportive",
            "Psychologique et morale"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La conscience permet de connaître (psychologique) et de juger (morale)."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p01_q4",
          "type": "mcq",
          "prompt": "Quelle formule résume la découverte de Descartes ?",
          "options": [
            "« L'homme est un loup pour l'homme »",
            "« Je pense, donc je suis »",
            "« Toute conscience est mémoire »",
            "« L'enfer, c'est les autres »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cogito fait de la pensée la première certitude."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p01_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations est conforme au cours ?",
          "options": [
            "La conscience est commune à l'homme et à l'animal",
            "La conscience est une faculté propre à l'homme",
            "La conscience s'oppose à la mémoire",
            "La conscience est la seule réalité du psychisme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cours fait de la conscience la marque spécifique de l'homme."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p01_q6",
          "type": "mcq",
          "prompt": "Quelle thèse la référence à Descartes permet-elle de défendre ?",
          "options": [
            "L'homme est déterminé par l'inconscient",
            "L'homme est naturellement violent",
            "L'homme n'est pas libre",
            "L'homme est essentiellement un être pensant et conscient"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Descartes définit l'homme par la pensée consciente."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p02",
      "order": 2,
      "title": "Conscience morale et mémoire",
      "summary": "Rousseau et la conscience morale, Bergson et la conscience comme mémoire.",
      "conceptExplanation": "La conscience morale est la capacité de juger ses actes. Pour Rousseau (Émile, livre IV), elle est un « instinct divin », un « juge infaillible du bien et du mal ».\nLa conscience a aussi une fonction de rétention : elle conserve le passé, c'est la mémoire.\nPour Bergson, « toute conscience est donc mémoire » (L'énergie spirituelle) : pour agir, la conscience choisit dans ses souvenirs ce qui est utile.\nOr choisir, c'est être libre.",
      "keyRule": "Rousseau : la conscience juge le bien et le mal ; Bergson : toute conscience est mémoire.",
      "formulas": [],
      "workedExample": {
        "title": "Conscience et choix",
        "statement": "Pourquoi la mémoire mène-t-elle à la liberté selon Bergson ?",
        "methodSteps": [
          "La conscience garde le passé : elle est mémoire.",
          "Pour agir, elle choisit dans les souvenirs ce qui est utile.",
          "Choisir, c'est exercer sa liberté."
        ],
        "conclusion": "Conscience, mémoire et liberté sont liées."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La conscience morale",
          "stepTheme": "La conscience morale",
          "stepBadge": "La conscience morale",
          "paragraphText": "• Conscience morale : capacité de l'homme à juger ses propres actes, à distinguer le bien et le mal.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p02_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que la conscience morale ?",
            "options": [
              "La capacité de juger ses actes selon le bien et le mal",
              "La capacité de se souvenir",
              "La capacité de calculer",
              "La capacité de rêver"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conscience morale porte des jugements de valeur sur nos actions."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Rousseau",
          "stepTheme": "Rousseau",
          "stepBadge": "Rousseau",
          "paragraphText": "Jean-Jacques Rousseau (1712-1778), dans Émile ou de l'éducation : « Conscience ! Conscience ! Instinct divin, immortelle et céleste voix (…), juge infaillible du bien et du mal. »",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p02_q2",
            "type": "mcq",
            "prompt": "Comment Rousseau appelle-t-il la conscience ?",
            "options": [
              "« Un animal redoutable »",
              "« Une illusion »",
              "« Juge infaillible du bien et du mal »",
              "« Un loup pour l'homme »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour Rousseau, la conscience est une voix intérieure qui juge sans se tromper."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La mémoire",
          "stepTheme": "La mémoire",
          "stepBadge": "La mémoire",
          "paragraphText": "• Mémoire : faculté de conserver les idées et les pensées acquises auparavant, et de les restituer.\nLa conscience a une fonction de rétention : elle garde le passé.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p02_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce que la mémoire ?",
            "options": [
              "La faculté d'oublier",
              "La faculté de rêver",
              "La faculté de juger",
              "La faculté de conserver et de restituer les idées acquises"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La mémoire retient le passé et le rend disponible."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Bergson : conscience et mémoire",
          "stepTheme": "Bergson : conscience et mémoire",
          "stepBadge": "Bergson : conscience et mémoire",
          "paragraphText": "Henri Bergson (1859-1949), L'énergie spirituelle : « Toute conscience est donc mémoire. »\nPour agir, la conscience choisit dans les souvenirs ce qui est utile.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p02_q4",
            "type": "mcq",
            "prompt": "Quelle formule de Bergson lie conscience et mémoire ?",
            "options": [
              "« Je pense, donc je suis »",
              "« La conscience règne mais ne gouverne pas »",
              "« Toute conscience est donc mémoire »",
              "« L'homme est condamné à être libre »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour Bergson, être conscient, c'est retenir le passé pour agir."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Conscience et mémoire ne s'opposent pas",
          "stepTheme": "Conscience et mémoire ne s'opposent pas",
          "stepBadge": "Conscience et mémoire ne s'opposent pas",
          "paragraphText": "Le cours montre que la conscience implique la mémoire et la liberté.\nIl serait faux de dire qu'elle s'y oppose.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p02_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations est fausse ?",
            "options": [
              "La conscience implique la mémoire et la liberté",
              "La conscience s'oppose à la mémoire et à la liberté",
              "La conscience permet d'agir en connaissance de cause",
              "La conscience définit l'homme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conscience, la mémoire et la liberté vont ensemble."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Relier les trois notions",
          "stepTheme": "Relier les trois notions",
          "stepBadge": "Relier les trois notions",
          "paragraphText": "Raisonnement à retenir :\n• la conscience retient le passé (mémoire) ;\n• elle choisit ce qui est utile pour agir ;\n• or choisir, c'est être libre.\nDonc la conscience fait de l'homme un être libre.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p02_q6",
            "type": "mcq",
            "prompt": "Pourquoi la conscience fait-elle de l'homme un être libre ?",
            "options": [
              "Parce qu'elle opère des choix",
              "Parce qu'elle oublie tout",
              "Parce qu'elle obéit à l'inconscient",
              "Parce qu'elle supprime la mémoire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Faire des choix, c'est la marque de la liberté."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p02_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que la conscience morale ?",
          "options": [
            "La capacité de juger ses actes selon le bien et le mal",
            "La capacité de se souvenir",
            "La capacité de calculer",
            "La capacité de rêver"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conscience morale porte des jugements de valeur sur nos actions."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p02_q2",
          "type": "mcq",
          "prompt": "Comment Rousseau appelle-t-il la conscience ?",
          "options": [
            "« Un animal redoutable »",
            "« Une illusion »",
            "« Juge infaillible du bien et du mal »",
            "« Un loup pour l'homme »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour Rousseau, la conscience est une voix intérieure qui juge sans se tromper."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p02_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce que la mémoire ?",
          "options": [
            "La faculté d'oublier",
            "La faculté de rêver",
            "La faculté de juger",
            "La faculté de conserver et de restituer les idées acquises"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La mémoire retient le passé et le rend disponible."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p02_q4",
          "type": "mcq",
          "prompt": "Quelle formule de Bergson lie conscience et mémoire ?",
          "options": [
            "« Je pense, donc je suis »",
            "« La conscience règne mais ne gouverne pas »",
            "« Toute conscience est donc mémoire »",
            "« L'homme est condamné à être libre »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour Bergson, être conscient, c'est retenir le passé pour agir."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p02_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations est fausse ?",
          "options": [
            "La conscience implique la mémoire et la liberté",
            "La conscience s'oppose à la mémoire et à la liberté",
            "La conscience permet d'agir en connaissance de cause",
            "La conscience définit l'homme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conscience, la mémoire et la liberté vont ensemble."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p02_q6",
          "type": "mcq",
          "prompt": "Pourquoi la conscience fait-elle de l'homme un être libre ?",
          "options": [
            "Parce qu'elle opère des choix",
            "Parce qu'elle oublie tout",
            "Parce qu'elle obéit à l'inconscient",
            "Parce qu'elle supprime la mémoire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Faire des choix, c'est la marque de la liberté."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p03",
      "order": 3,
      "title": "L'homme, un être de liberté",
      "summary": "La définition de la liberté et le témoignage de la conscience selon Bergson.",
      "conceptExplanation": "La liberté est la capacité de s'autodéterminer, d'agir sans contrainte, de n'obéir qu'à sa volonté.\nÊtre libre, pour un être conscient, c'est agir de façon responsable, « en toute conscience ».\nL'homme doit donc assumer ses actes et maîtriser ses opinions.\nPour Bergson (Leçons clermontoises), « notre conscience témoigne de notre liberté ».",
      "keyRule": "Liberté = s'autodéterminer sans contrainte ; être libre, c'est être responsable.",
      "formulas": [],
      "workedExample": {
        "title": "Agir en toute conscience",
        "statement": "Que signifie l'expression « agir en toute conscience » ?",
        "methodSteps": [
          "Agir en sachant ce que l'on fait.",
          "Agir sans être dominé par une force extérieure.",
          "Accepter d'en assumer les conséquences."
        ],
        "conclusion": "Agir en toute conscience, c'est agir librement et de façon responsable."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La liberté",
          "stepTheme": "La liberté",
          "stepBadge": "La liberté",
          "paragraphText": "• Liberté : capacité de l'homme à s'autodéterminer, à agir sans contrainte, à n'obéir qu'à sa volonté.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p03_q1",
            "type": "mcq",
            "prompt": "Quelle est la bonne définition de la liberté selon le cours ?",
            "options": [
              "N'obéir qu'à sa volonté, indépendamment de toute contrainte extérieure",
              "Faire tout ce qu'on veut, même malade ou sous l'emprise",
              "Se laisser guider entièrement par un directeur de conscience",
              "Obéir à toutes les pulsions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La liberté est l'autodétermination de la volonté, sans contrainte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Liberté et responsabilité",
          "stepTheme": "Liberté et responsabilité",
          "stepBadge": "Liberté et responsabilité",
          "paragraphText": "Être libre, pour un être conscient, c'est agir de façon responsable.\nL'homme doit assumer ses actes et maîtriser ses opinions.\nC'est le sens de l'expression « agir en toute conscience ».",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p03_q2",
            "type": "mcq",
            "prompt": "Que doit faire un homme libre de ses actes ?",
            "options": [
              "Les attribuer aux autres",
              "Les assumer",
              "Les oublier",
              "Les cacher"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Liberté et responsabilité vont ensemble : je réponds de ce que je choisis."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La responsabilité",
          "stepTheme": "La responsabilité",
          "stepBadge": "La responsabilité",
          "paragraphText": "• Responsabilité : fait de répondre de ses actes, de les assumer.\nOn ne peut être tenu responsable que d'un acte accompli librement et consciemment.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p03_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce que la responsabilité ?",
            "options": [
              "Le fait d'obéir à un chef",
              "Le fait d'être riche",
              "Le fait de répondre de ses actes et de les assumer",
              "Le fait d'oublier ses fautes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Être responsable, c'est pouvoir « répondre » de ce que l'on a fait."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Bergson et la liberté",
          "stepTheme": "Bergson et la liberté",
          "stepBadge": "Bergson et la liberté",
          "paragraphText": "Bergson, Leçons clermontoises : « Notre conscience nous avertit (…) que nous sommes des êtres libres (…) notre conscience témoigne de notre liberté. »",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p03_q4",
            "type": "mcq",
            "prompt": "Selon Bergson, qu'est-ce qui témoigne de notre liberté ?",
            "options": [
              "Notre inconscient",
              "Nos pulsions",
              "La société",
              "Notre conscience"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pour Bergson, nous sentons intérieurement que nous sommes libres."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Liberté n'est pas caprice",
          "stepTheme": "Liberté n'est pas caprice",
          "stepBadge": "Liberté n'est pas caprice",
          "paragraphText": "La liberté n'est pas « faire n'importe quoi ».\nAgir sous la colère, la drogue ou la folie n'est pas être libre : la volonté est alors dominée.\nLa vraie liberté suppose la conscience et la maîtrise de soi.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p03_q5",
            "type": "mcq",
            "prompt": "Pourquoi un acte commis sous l'emprise de la drogue n'est-il pas vraiment libre ?",
            "options": [
              "Parce qu'il est toujours puni",
              "Parce qu'il est toujours conscient",
              "Parce que la volonté y est dominée par une force qu'on ne maîtrise pas",
              "Parce que la liberté n'existe pas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Être libre suppose la conscience et la maîtrise de soi."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Une transition vers l'inconscient",
          "stepTheme": "Une transition vers l'inconscient",
          "stepBadge": "Une transition vers l'inconscient",
          "paragraphText": "Question critique : sommes-nous toujours maîtres de nous-mêmes ?\nDéjà Leibniz parlait de « petites perceptions » dont nous n'avons pas conscience.\nMais c'est Freud qui découvre vraiment l'inconscient.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p03_q6",
            "type": "mcq",
            "prompt": "Quel philosophe, avant Freud, parle de « petites perceptions » non conscientes ?",
            "options": [
              "Descartes",
              "Rousseau",
              "Sartre",
              "Leibniz"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Leibniz montre que nous percevons beaucoup sans en avoir conscience."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p03_q1",
          "type": "mcq",
          "prompt": "Quelle est la bonne définition de la liberté selon le cours ?",
          "options": [
            "N'obéir qu'à sa volonté, indépendamment de toute contrainte extérieure",
            "Faire tout ce qu'on veut, même malade ou sous l'emprise",
            "Se laisser guider entièrement par un directeur de conscience",
            "Obéir à toutes les pulsions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La liberté est l'autodétermination de la volonté, sans contrainte."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p03_q2",
          "type": "mcq",
          "prompt": "Que doit faire un homme libre de ses actes ?",
          "options": [
            "Les attribuer aux autres",
            "Les assumer",
            "Les oublier",
            "Les cacher"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Liberté et responsabilité vont ensemble : je réponds de ce que je choisis."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p03_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce que la responsabilité ?",
          "options": [
            "Le fait d'obéir à un chef",
            "Le fait d'être riche",
            "Le fait de répondre de ses actes et de les assumer",
            "Le fait d'oublier ses fautes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Être responsable, c'est pouvoir « répondre » de ce que l'on a fait."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p03_q4",
          "type": "mcq",
          "prompt": "Selon Bergson, qu'est-ce qui témoigne de notre liberté ?",
          "options": [
            "Notre inconscient",
            "Nos pulsions",
            "La société",
            "Notre conscience"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pour Bergson, nous sentons intérieurement que nous sommes libres."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p03_q5",
          "type": "mcq",
          "prompt": "Pourquoi un acte commis sous l'emprise de la drogue n'est-il pas vraiment libre ?",
          "options": [
            "Parce qu'il est toujours puni",
            "Parce qu'il est toujours conscient",
            "Parce que la volonté y est dominée par une force qu'on ne maîtrise pas",
            "Parce que la liberté n'existe pas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Être libre suppose la conscience et la maîtrise de soi."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p03_q6",
          "type": "mcq",
          "prompt": "Quel philosophe, avant Freud, parle de « petites perceptions » non conscientes ?",
          "options": [
            "Descartes",
            "Rousseau",
            "Sartre",
            "Leibniz"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Leibniz montre que nous percevons beaucoup sans en avoir conscience."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p04",
      "order": 4,
      "title": "La découverte de l'inconscient",
      "summary": "Freud, l'inconscient et ses manifestations.",
      "conceptExplanation": "Beaucoup de faits psychiques échappent à la conscience : oublis, rêves, phobies, motivations cachées, perceptions insensibles.\nIls révèlent un inconscient psychique.\nPour Sigmund Freud (1856-1939), l'inconscient est l'ensemble des désirs refoulés qui échappent à la conscience : une instance dynamique où sont stockés instincts, pulsions et désirs refoulés.\nFreud : « Pour bien comprendre la vie psychique, il est indispensable de cesser de surestimer la conscience » (L'interprétation des rêves).\nLe moi « n'est pas maître dans sa propre maison ».",
      "keyRule": "Inconscient = désirs refoulés qui agissent sur nous à notre insu.",
      "formulas": [],
      "workedExample": {
        "title": "Le lapsus",
        "statement": "Un élève veut dire « J'ouvre la séance » et dit « Je ferme la séance ». Que révèle ce lapsus ?",
        "methodSteps": [
          "Le mot prononcé n'est pas celui qu'il voulait dire.",
          "Pour Freud, ce n'est pas un hasard : un désir caché (ne pas vouloir de cette séance) s'exprime."
        ],
        "conclusion": "Le lapsus est une manifestation de l'inconscient."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les limites de la conscience",
          "stepTheme": "Les limites de la conscience",
          "stepBadge": "Les limites de la conscience",
          "paragraphText": "Certains faits psychiques échappent à la conscience :\n• les oublis ;\n• les rêves ;\n• les phobies ;\n• les motivations cachées ;\n• les perceptions insensibles.\nIls supposent l'existence d'un inconscient.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p04_q1",
            "type": "mcq",
            "prompt": "Lequel de ces faits révèle les limites de la conscience ?",
            "options": [
              "Les rêves",
              "Le calcul mental",
              "La lecture d'un livre",
              "La résolution d'une équation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le rêve se produit sans contrôle conscient."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'inconscient selon Freud",
          "stepTheme": "L'inconscient selon Freud",
          "stepBadge": "L'inconscient selon Freud",
          "paragraphText": "• Inconscient : ensemble des désirs refoulés qui échappent à la conscience ; instance psychique où sont stockés les instincts, les pulsions et les désirs refoulés.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p04_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'inconscient selon Freud ?",
            "options": [
              "La partie la plus raisonnable de l'esprit",
              "L'ensemble des désirs refoulés qui échappent à la conscience",
              "Le sommeil profond",
              "La mémoire des leçons apprises"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'inconscient contient ce que la conscience a repoussé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le refoulement",
          "stepTheme": "Le refoulement",
          "stepBadge": "Le refoulement",
          "paragraphText": "• Refoulement : mécanisme par lequel la conscience repousse dans l'inconscient des désirs jugés inacceptables.\nLes désirs refoulés ne disparaissent pas : ils cherchent à revenir (rêves, lapsus, actes manqués).",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p04_q3",
            "type": "mcq",
            "prompt": "Que deviennent les désirs refoulés ?",
            "options": [
              "Ils disparaissent définitivement",
              "Ils restent dans l'inconscient et cherchent à s'exprimer",
              "Ils deviennent conscients immédiatement",
              "Ils se transforment en souvenirs heureux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Refoulés, les désirs continuent d'agir et ressurgissent sous d'autres formes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Ne pas surestimer la conscience",
          "stepTheme": "Ne pas surestimer la conscience",
          "stepBadge": "Ne pas surestimer la conscience",
          "paragraphText": "Freud, L'interprétation des rêves : « Pour bien comprendre la vie psychique, il est indispensable de cesser de surestimer la conscience. »\nNotre vie psychique est faite d'une petite part consciente et d'une grande part inconsciente.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p04_q4",
            "type": "mcq",
            "prompt": "Selon Freud, que faut-il cesser de faire pour comprendre la vie psychique ?",
            "options": [
              "Surestimer la conscience",
              "Étudier les rêves",
              "Écouter les patients",
              "Croire à l'inconscient"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conscience n'est que la partie visible de la vie psychique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La citation exacte de Freud",
          "stepTheme": "La citation exacte de Freud",
          "stepBadge": "La citation exacte de Freud",
          "paragraphText": "Le corrigé du PDF écrit « la conscience n'est pas toujours maître dans sa propre maison ».\nLa formule exacte de Freud est : « Le moi n'est pas maître dans sa propre maison » (Une difficulté de la psychanalyse, 1917).",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p04_q5",
            "type": "mcq",
            "prompt": "Quelle est la formule exacte de Freud ?",
            "options": [
              "« La conscience règne mais ne gouverne pas »",
              "« L'homme est condamné à être libre »",
              "« Toute conscience est mémoire »",
              "« Le moi n'est pas maître dans sa propre maison »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Le moi n'est pas maître dans sa propre maison » : l'inconscient agit sur lui."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les manifestations de l'inconscient",
          "stepTheme": "Les manifestations de l'inconscient",
          "stepBadge": "Les manifestations de l'inconscient",
          "paragraphText": "Pour Freud, il existe « de multiples preuves de l'existence de l'inconscient » (Métapsychologie) :\n• le rêve, « voie royale » vers l'inconscient ;\n• le lapsus (un mot pour un autre) ;\n• l'acte manqué (oubli, geste raté) ;\n• les symptômes névrotiques.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p04_q6",
            "type": "mcq",
            "prompt": "Comment appelle-t-on le fait de dire un mot à la place d'un autre ?",
            "options": [
              "Un cogito",
              "Un refoulement",
              "Un lapsus",
              "Une phobie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le lapsus est une des manifestations de l'inconscient."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p04_q1",
          "type": "mcq",
          "prompt": "Lequel de ces faits révèle les limites de la conscience ?",
          "options": [
            "Les rêves",
            "Le calcul mental",
            "La lecture d'un livre",
            "La résolution d'une équation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rêve se produit sans contrôle conscient."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p04_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'inconscient selon Freud ?",
          "options": [
            "La partie la plus raisonnable de l'esprit",
            "L'ensemble des désirs refoulés qui échappent à la conscience",
            "Le sommeil profond",
            "La mémoire des leçons apprises"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'inconscient contient ce que la conscience a repoussé."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p04_q3",
          "type": "mcq",
          "prompt": "Que deviennent les désirs refoulés ?",
          "options": [
            "Ils disparaissent définitivement",
            "Ils restent dans l'inconscient et cherchent à s'exprimer",
            "Ils deviennent conscients immédiatement",
            "Ils se transforment en souvenirs heureux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Refoulés, les désirs continuent d'agir et ressurgissent sous d'autres formes."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p04_q4",
          "type": "mcq",
          "prompt": "Selon Freud, que faut-il cesser de faire pour comprendre la vie psychique ?",
          "options": [
            "Surestimer la conscience",
            "Étudier les rêves",
            "Écouter les patients",
            "Croire à l'inconscient"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conscience n'est que la partie visible de la vie psychique."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p04_q5",
          "type": "mcq",
          "prompt": "Quelle est la formule exacte de Freud ?",
          "options": [
            "« La conscience règne mais ne gouverne pas »",
            "« L'homme est condamné à être libre »",
            "« Toute conscience est mémoire »",
            "« Le moi n'est pas maître dans sa propre maison »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Le moi n'est pas maître dans sa propre maison » : l'inconscient agit sur lui."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p04_q6",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le fait de dire un mot à la place d'un autre ?",
          "options": [
            "Un cogito",
            "Un refoulement",
            "Un lapsus",
            "Une phobie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le lapsus est une des manifestations de l'inconscient."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p05",
      "order": 5,
      "title": "Violence et déterminisme psychologique",
      "summary": "L'agressivité humaine selon Freud et le déterminisme qui menace la liberté.",
      "conceptExplanation": "Pour la psychanalyse, l'inconscient est le siège de la violence en l'homme.\nFreud (Malaise dans la civilisation) : l'homme n'est pas un être « débonnaire, au cœur assoiffé d'amour », mais il porte « une bonne somme d'agressivité ».\nLe déterminisme psychologique signifie que nos actes ne sont pas le fruit de nos choix mais de forces qui nous échappent.\nLa liberté et la responsabilité semblent alors illusoires : « La conscience règne mais ne gouverne pas » (Paul Valéry).",
      "keyRule": "Si l'inconscient décide à notre place, la liberté et la responsabilité deviennent douteuses.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la formule de Valéry",
        "statement": "« La conscience règne mais ne gouverne pas. »",
        "methodSteps": [
          "Un roi qui « règne » a le titre du pouvoir.",
          "Celui qui « gouverne » décide réellement.",
          "La conscience croit diriger, mais c'est l'inconscient qui décide."
        ],
        "conclusion": "La formule exprime le déterminisme psychologique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Freud et l'agressivité",
          "stepTheme": "Freud et l'agressivité",
          "stepBadge": "Freud et l'agressivité",
          "paragraphText": "Freud, Malaise dans la civilisation : « L'homme n'est point cet être débonnaire, au cœur assoiffé d'amour (…) mais un être (…) qui doit porter au compte de ses données instinctives une bonne somme d'agressivité. »",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p05_q1",
            "type": "mcq",
            "prompt": "Quelle pensée justifie que l'homme est violent ?",
            "options": [
              "« La violence engendre la violence »",
              "« La violence est dans la société et non ailleurs »",
              "« L'homme (…) doit porter au compte de ses données instinctives une bonne somme d'agressivité »",
              "« Je pense, donc je suis »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour Freud, l'agressivité fait partie des instincts humains."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le déterminisme psychologique",
          "stepTheme": "Le déterminisme psychologique",
          "stepBadge": "Le déterminisme psychologique",
          "paragraphText": "• Déterminisme psychologique : idée que nos actes et nos pensées ne viennent pas de nos choix mais de forces psychiques indépendantes de notre volonté (l'inconscient).",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p05_q2",
            "type": "mcq",
            "prompt": "Que signifie le déterminisme psychologique ?",
            "options": [
              "Nos actes sont causés par des forces psychiques qui échappent à notre volonté",
              "Nous choisissons librement tous nos actes",
              "La société décide de tout",
              "Le hasard gouverne la nature"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le déterminisme psychologique fait de l'inconscient la vraie cause de nos actes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Paul Valéry",
          "stepTheme": "Paul Valéry",
          "stepBadge": "Paul Valéry",
          "paragraphText": "L'écrivain Paul Valéry (1871-1945) : « La conscience règne mais ne gouverne pas » (Mauvaises pensées et autres).\nLa conscience a l'apparence du pouvoir, mais l'inconscient décide.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p05_q3",
            "type": "mcq",
            "prompt": "Qui a écrit « La conscience règne mais ne gouverne pas » ?",
            "options": [
              "Sigmund Freud",
              "Jean-Paul Sartre",
              "Alain",
              "Paul Valéry"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La formule est de Paul Valéry."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Une liberté illusoire ?",
          "stepTheme": "Une liberté illusoire ?",
          "stepBadge": "Une liberté illusoire ?",
          "paragraphText": "Si le moi conscient est manipulé par l'inconscient, sa liberté et sa responsabilité semblent illusoires.\nL'homme ne pourrait plus se prévaloir d'aucune volonté.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p05_q4",
            "type": "mcq",
            "prompt": "Quelle conséquence le déterminisme psychologique a-t-il sur la liberté ?",
            "options": [
              "Il la renforce",
              "Il la rend illusoire",
              "Il n'a aucun effet",
              "Il la rend absolue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Si l'inconscient décide, la liberté consciente n'est qu'une apparence."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Citations : l'homme n'est pas totalement libre",
          "stepTheme": "Citations : l'homme n'est pas totalement libre",
          "stepBadge": "Citations : l'homme n'est pas totalement libre",
          "paragraphText": "Citations qui justifient que l'homme n'est pas totalement libre :\n• « La conscience règne mais ne gouverne pas » (Valéry) ;\n• « Le moi n'est pas maître dans sa propre maison » (Freud) ;\n• « L'homme subit le déterminisme psychologique ».",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p05_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces citations ne justifie PAS que l'homme est privé de liberté ?",
            "options": [
              "« La conscience règne mais ne gouverne pas »",
              "« L'inconscient est de la mauvaise foi »",
              "« Le moi n'est pas maître dans sa propre maison »",
              "« L'homme subit le déterminisme psychologique »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dire que l'inconscient est de la mauvaise foi (Sartre), c'est au contraire défendre la liberté."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La conscience n'est pas tout le psychisme",
          "stepTheme": "La conscience n'est pas tout le psychisme",
          "stepBadge": "La conscience n'est pas tout le psychisme",
          "paragraphText": "Après Freud, on ne peut plus dire que la conscience est la seule réalité du psychisme humain.\nLe psychisme comprend aussi l'inconscient.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p05_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations est fausse après Freud ?",
            "options": [
              "Le psychisme comprend une part inconsciente",
              "Les rêves révèlent l'inconscient",
              "Le moi n'est pas maître dans sa propre maison",
              "La conscience est la seule réalité du psychisme humain"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pour Freud, la plus grande part du psychisme est inconsciente."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p05_q1",
          "type": "mcq",
          "prompt": "Quelle pensée justifie que l'homme est violent ?",
          "options": [
            "« La violence engendre la violence »",
            "« La violence est dans la société et non ailleurs »",
            "« L'homme (…) doit porter au compte de ses données instinctives une bonne somme d'agressivité »",
            "« Je pense, donc je suis »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour Freud, l'agressivité fait partie des instincts humains."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p05_q2",
          "type": "mcq",
          "prompt": "Que signifie le déterminisme psychologique ?",
          "options": [
            "Nos actes sont causés par des forces psychiques qui échappent à notre volonté",
            "Nous choisissons librement tous nos actes",
            "La société décide de tout",
            "Le hasard gouverne la nature"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le déterminisme psychologique fait de l'inconscient la vraie cause de nos actes."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p05_q3",
          "type": "mcq",
          "prompt": "Qui a écrit « La conscience règne mais ne gouverne pas » ?",
          "options": [
            "Sigmund Freud",
            "Jean-Paul Sartre",
            "Alain",
            "Paul Valéry"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La formule est de Paul Valéry."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p05_q4",
          "type": "mcq",
          "prompt": "Quelle conséquence le déterminisme psychologique a-t-il sur la liberté ?",
          "options": [
            "Il la renforce",
            "Il la rend illusoire",
            "Il n'a aucun effet",
            "Il la rend absolue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Si l'inconscient décide, la liberté consciente n'est qu'une apparence."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p05_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces citations ne justifie PAS que l'homme est privé de liberté ?",
          "options": [
            "« La conscience règne mais ne gouverne pas »",
            "« L'inconscient est de la mauvaise foi »",
            "« Le moi n'est pas maître dans sa propre maison »",
            "« L'homme subit le déterminisme psychologique »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dire que l'inconscient est de la mauvaise foi (Sartre), c'est au contraire défendre la liberté."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p05_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations est fausse après Freud ?",
          "options": [
            "Le psychisme comprend une part inconsciente",
            "Les rêves révèlent l'inconscient",
            "Le moi n'est pas maître dans sa propre maison",
            "La conscience est la seule réalité du psychisme humain"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pour Freud, la plus grande part du psychisme est inconsciente."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p06",
      "order": 6,
      "title": "L'homme reste responsable",
      "summary": "Les critiques de l'inconscient par Alain et Sartre.",
      "conceptExplanation": "Même déterminé en partie par l'inconscient, l'homme reste un sujet libre qui assume ses actes.\nAlain conteste l'hypothèse de l'inconscient : « Le freudisme si fameux est un art d'inventer en chaque homme un animal redoutable » (Éléments de philosophie).\nPour l'existentialiste Jean-Paul Sartre (1905-1980), l'homme est « condamné à être libre » ; invoquer l'inconscient pour excuser ses fautes est de la mauvaise foi.\nConclusion : l'homme est un être complexe, à la fois conscient et libre, et en partie déterminé.",
      "keyRule": "Pour Sartre, l'homme est condamné à être libre : l'excuse de l'inconscient est de la mauvaise foi.",
      "formulas": [],
      "workedExample": {
        "title": "La mauvaise foi",
        "statement": "Un élève qui triche dit : « Ce n'est pas ma faute, c'est mon inconscient. » Que répondrait Sartre ?",
        "methodSteps": [
          "Pour Sartre, l'homme est toujours libre de choisir.",
          "Rejeter sa faute sur l'inconscient, c'est se mentir à soi-même.",
          "C'est ce qu'il appelle la mauvaise foi."
        ],
        "conclusion": "L'élève reste responsable de sa tricherie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Un sujet libre malgré tout",
          "stepTheme": "Un sujet libre malgré tout",
          "stepBadge": "Un sujet libre malgré tout",
          "paragraphText": "Même s'il est en partie déterminé par l'inconscient, l'homme reste un sujet libre qui doit assumer ses actes.\nLes philosophes moralistes et existentialistes critiquent la théorie freudienne.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p06_q1",
            "type": "mcq",
            "prompt": "Que soutiennent les critiques de la théorie freudienne ?",
            "options": [
              "L'homme reste un sujet libre qui assume ses actes",
              "L'homme n'est jamais responsable",
              "La conscience n'existe pas",
              "Seule la violence définit l'homme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour eux, l'inconscient ne supprime pas la responsabilité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Alain",
          "stepTheme": "Alain",
          "stepBadge": "Alain",
          "paragraphText": "Alain (Émile Chartier) refuse de faire de l'inconscient une réalité toute-puissante :\n« Le freudisme si fameux est un art d'inventer en chaque homme un animal redoutable » (Éléments de philosophie).",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p06_q2",
            "type": "mcq",
            "prompt": "Que reproche Alain au freudisme ?",
            "options": [
              "De surestimer la conscience",
              "D'ignorer les rêves",
              "D'inventer en chaque homme un animal redoutable",
              "De nier la violence"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour Alain, Freud exagère et fait de l'inconscient un monstre imaginaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La mauvaise foi",
          "stepTheme": "La mauvaise foi",
          "stepBadge": "La mauvaise foi",
          "paragraphText": "• Mauvaise foi (Sartre) : mensonge à soi-même par lequel on fuit sa liberté et sa responsabilité.\nPour Sartre, invoquer l'inconscient pour excuser ses actes est de la mauvaise foi.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p06_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce que la mauvaise foi selon Sartre ?",
            "options": [
              "Une croyance religieuse sincère",
              "Une maladie mentale",
              "Une erreur de calcul",
              "Un mensonge à soi-même pour fuir sa responsabilité"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La mauvaise foi consiste à se cacher sa propre liberté."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Condamné à être libre",
          "stepTheme": "Condamné à être libre",
          "stepBadge": "Condamné à être libre",
          "paragraphText": "Jean-Paul Sartre (1905-1980), existentialiste : l'homme est « condamné à être libre ».\nIl ne peut pas ne pas choisir : même refuser de choisir est un choix.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p06_q4",
            "type": "mcq",
            "prompt": "Selon Sartre, l'homme est…",
            "options": [
              "« Un loup pour l'homme »",
              "« Un animal redoutable »",
              "« Condamné à être libre »",
              "« Maître dans sa propre maison »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour Sartre, la liberté est inévitable : on ne peut s'y soustraire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Sartre contre l'excuse de l'inconscient",
          "stepTheme": "Sartre contre l'excuse de l'inconscient",
          "stepBadge": "Sartre contre l'excuse de l'inconscient",
          "paragraphText": "Pour Sartre, l'inconscient ne peut servir d'excuse.\nDire « l'inconscient est de la mauvaise foi » défend la responsabilité de l'homme, pas son déterminisme.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p06_q5",
            "type": "mcq",
            "prompt": "Quelle position Sartre défend-il ?",
            "options": [
              "L'inconscient excuse toutes les fautes",
              "L'homme reste responsable de ses actes",
              "L'homme n'est jamais libre",
              "La conscience règne mais ne gouverne pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sartre défend une liberté totale et donc une responsabilité totale."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Un être complexe",
          "stepTheme": "Un être complexe",
          "stepBadge": "Un être complexe",
          "paragraphText": "Connaître l'homme est difficile : il est tantôt conscient et libre, tantôt déterminé par l'inconscient.\nL'homme est un être pluridimensionnel et complexe.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p06_q6",
            "type": "mcq",
            "prompt": "Quelle est la conclusion de la leçon sur la connaissance de l'homme ?",
            "options": [
              "L'homme est un être complexe, à la fois conscient et en partie déterminé",
              "L'homme n'est que conscience",
              "L'homme n'est qu'inconscient",
              "L'homme ne peut pas être connu du tout"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'homme réunit conscience, liberté et une part d'inconscient."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p06_q1",
          "type": "mcq",
          "prompt": "Que soutiennent les critiques de la théorie freudienne ?",
          "options": [
            "L'homme reste un sujet libre qui assume ses actes",
            "L'homme n'est jamais responsable",
            "La conscience n'existe pas",
            "Seule la violence définit l'homme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour eux, l'inconscient ne supprime pas la responsabilité."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p06_q2",
          "type": "mcq",
          "prompt": "Que reproche Alain au freudisme ?",
          "options": [
            "De surestimer la conscience",
            "D'ignorer les rêves",
            "D'inventer en chaque homme un animal redoutable",
            "De nier la violence"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour Alain, Freud exagère et fait de l'inconscient un monstre imaginaire."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p06_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce que la mauvaise foi selon Sartre ?",
          "options": [
            "Une croyance religieuse sincère",
            "Une maladie mentale",
            "Une erreur de calcul",
            "Un mensonge à soi-même pour fuir sa responsabilité"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La mauvaise foi consiste à se cacher sa propre liberté."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p06_q4",
          "type": "mcq",
          "prompt": "Selon Sartre, l'homme est…",
          "options": [
            "« Un loup pour l'homme »",
            "« Un animal redoutable »",
            "« Condamné à être libre »",
            "« Maître dans sa propre maison »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour Sartre, la liberté est inévitable : on ne peut s'y soustraire."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p06_q5",
          "type": "mcq",
          "prompt": "Quelle position Sartre défend-il ?",
          "options": [
            "L'inconscient excuse toutes les fautes",
            "L'homme reste responsable de ses actes",
            "L'homme n'est jamais libre",
            "La conscience règne mais ne gouverne pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sartre défend une liberté totale et donc une responsabilité totale."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p06_q6",
          "type": "mcq",
          "prompt": "Quelle est la conclusion de la leçon sur la connaissance de l'homme ?",
          "options": [
            "L'homme est un être complexe, à la fois conscient et en partie déterminé",
            "L'homme n'est que conscience",
            "L'homme n'est qu'inconscient",
            "L'homme ne peut pas être connu du tout"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'homme réunit conscience, liberté et une part d'inconscient."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p07",
      "order": 7,
      "title": "Entraînement : l'inconscient abolit-il la responsabilité ?",
      "summary": "Préparer la dissertation sur l'inconscient et la responsabilité.",
      "conceptExplanation": "Définitions : inconscient (instance des pulsions et désirs refoulés), abolir (supprimer, rendre illusoire), responsabilité (répondre de ses actes).\nProblème : l'inconscient rend-il illusoire la responsabilité humaine ?\nAxe 1 : l'inconscient agit sur nos actes (Freud : le moi n'est pas maître dans sa propre maison ; Valéry : la conscience règne mais ne gouverne pas).\nAxe 2 : la responsabilité demeure (Sartre : l'alibi de l'inconscient est de la mauvaise foi ; Alain : grossir l'inconscient est une erreur, et même une faute).",
      "keyRule": "L'inconscient influence nos actes, mais il ne supprime pas notre responsabilité.",
      "formulas": [],
      "workedExample": {
        "title": "Plan du sujet",
        "statement": "« L'inconscient abolit-il la responsabilité humaine ? »",
        "methodSteps": [
          "Axe 1 : l'inconscient agit sur la responsabilité (Freud, Valéry).",
          "Axe 2 : la responsabilité demeure (Sartre, Alain)."
        ],
        "conclusion": "Réponse nuancée : l'inconscient explique certains actes, sans dispenser l'homme de les assumer."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Définir les termes",
          "stepTheme": "Définir les termes",
          "stepBadge": "Définir les termes",
          "paragraphText": "• Inconscient : instance psychique, siège des pulsions et désirs refoulés.\n• Abolir : supprimer, rendre caduc, rendre illusoire.\n• Responsabilité : le fait de répondre de ses actes, de les assumer.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p07_q1",
            "type": "mcq",
            "prompt": "Que signifie « abolir » dans le sujet ?",
            "options": [
              "Supprimer, rendre illusoire",
              "Renforcer",
              "Expliquer",
              "Récompenser"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Abolir la responsabilité, c'est la faire disparaître."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Poser le problème",
          "stepTheme": "Poser le problème",
          "stepBadge": "Poser le problème",
          "paragraphText": "Problème : l'inconscient rend-il illusoire la responsabilité humaine ?\nAutre formulation : l'existence de l'inconscient excuse-t-elle l'homme de tous ses actes ?",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p07_q2",
            "type": "mcq",
            "prompt": "Quel est le problème du sujet « L'inconscient abolit-il la responsabilité humaine ? » ?",
            "options": [
              "Qui a découvert l'inconscient ?",
              "L'inconscient rend-il illusoire la responsabilité humaine ?",
              "Les rêves ont-ils un sens ?",
              "La conscience est-elle une mémoire ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le problème oppose l'influence de l'inconscient et la responsabilité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Axe 1 : l'inconscient agit",
          "stepTheme": "Axe 1 : l'inconscient agit",
          "stepBadge": "Axe 1 : l'inconscient agit",
          "paragraphText": "L'inconscient détermine des actes au détriment de la conscience.\nRéférences : Freud, « le moi n'est pas maître dans sa propre maison » ; Valéry, « la conscience règne mais ne gouverne pas ».",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p07_q3",
            "type": "mcq",
            "prompt": "Quelle référence appuie l'axe « l'inconscient agit sur la responsabilité » ?",
            "options": [
              "Sartre : « condamné à être libre »",
              "Alain : « grossir l'inconscient est une faute »",
              "Freud : « le moi n'est pas maître dans sa propre maison »",
              "Rousseau : « juge infaillible du bien et du mal »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Freud montre que l'inconscient échappe au contrôle du moi."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Axe 2 : la responsabilité demeure",
          "stepTheme": "Axe 2 : la responsabilité demeure",
          "stepBadge": "Axe 2 : la responsabilité demeure",
          "paragraphText": "L'inconscient fait partie de l'homme : il doit en assumer les manifestations.\nRéférences : Sartre, l'alibi de l'inconscient est de la mauvaise foi ; Alain, « si on grossit [l'inconscient], alors commence l'erreur, et bien pis, c'est une faute ».",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p07_q4",
            "type": "mcq",
            "prompt": "Quelle référence appuie l'axe « la responsabilité demeure » ?",
            "options": [
              "Valéry : « la conscience règne mais ne gouverne pas »",
              "Freud : « cesser de surestimer la conscience »",
              "Leibniz : les petites perceptions",
              "Sartre : l'alibi de l'inconscient est de la mauvaise foi"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sartre refuse que l'inconscient serve d'excuse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Conclure avec nuance",
          "stepTheme": "Conclure avec nuance",
          "stepBadge": "Conclure avec nuance",
          "paragraphText": "Conclusion possible : l'inconscient explique certains de nos actes, mais il ne nous dispense pas de les assumer.\nConnaître son inconscient permet même de mieux se maîtriser.",
          "exercise": {
            "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p07_q5",
            "type": "mcq",
            "prompt": "Quelle conclusion est la plus nuancée ?",
            "options": [
              "L'inconscient excuse tous nos actes",
              "L'inconscient n'existe pas du tout",
              "L'inconscient explique certains actes, mais l'homme reste responsable",
              "La responsabilité est une illusion totale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une bonne conclusion tient compte des deux axes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p07_q1",
          "type": "mcq",
          "prompt": "Que signifie « abolir » dans le sujet ?",
          "options": [
            "Supprimer, rendre illusoire",
            "Renforcer",
            "Expliquer",
            "Récompenser"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Abolir la responsabilité, c'est la faire disparaître."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p07_q2",
          "type": "mcq",
          "prompt": "Quel est le problème du sujet « L'inconscient abolit-il la responsabilité humaine ? » ?",
          "options": [
            "Qui a découvert l'inconscient ?",
            "L'inconscient rend-il illusoire la responsabilité humaine ?",
            "Les rêves ont-ils un sens ?",
            "La conscience est-elle une mémoire ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le problème oppose l'influence de l'inconscient et la responsabilité."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p07_q3",
          "type": "mcq",
          "prompt": "Quelle référence appuie l'axe « l'inconscient agit sur la responsabilité » ?",
          "options": [
            "Sartre : « condamné à être libre »",
            "Alain : « grossir l'inconscient est une faute »",
            "Freud : « le moi n'est pas maître dans sa propre maison »",
            "Rousseau : « juge infaillible du bien et du mal »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Freud montre que l'inconscient échappe au contrôle du moi."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p07_q4",
          "type": "mcq",
          "prompt": "Quelle référence appuie l'axe « la responsabilité demeure » ?",
          "options": [
            "Valéry : « la conscience règne mais ne gouverne pas »",
            "Freud : « cesser de surestimer la conscience »",
            "Leibniz : les petites perceptions",
            "Sartre : l'alibi de l'inconscient est de la mauvaise foi"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sartre refuse que l'inconscient serve d'excuse."
        },
        {
          "id": "terminale_philo_conditions_liberte_l01_connaissance_homme_p07_q5",
          "type": "mcq",
          "prompt": "Quelle conclusion est la plus nuancée ?",
          "options": [
            "L'inconscient excuse tous nos actes",
            "L'inconscient n'existe pas du tout",
            "L'inconscient explique certains actes, mais l'homme reste responsable",
            "La responsabilité est une illusion totale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une bonne conclusion tient compte des deux axes."
        }
      ]
    }
  ]
};
