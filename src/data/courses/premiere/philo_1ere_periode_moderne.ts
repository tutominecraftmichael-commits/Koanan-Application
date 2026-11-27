import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « La période moderne » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=3727
export const PHILO_1ERE_L08_PERIODE_MODERNE: CurriculumChapter = {
  "id": "premiere_philo_histoire_philosophie_l08_periode_moderne",
  "subjectId": "philosophie",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 8,
  "title": "Leçon 8 : La période moderne",
  "summary": "La période moderne, du XVIe siècle au XVIIIe siècle, recherche la source ou le fondement de la connaissance : le rationalisme de Descartes, l'empirisme de Locke, puis le criticisme de Kant qui les réconcilie.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=3727",
  "points": [
    {
      "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p01",
      "order": 1,
      "title": "Le cadre de la période moderne : le fondement de la connaissance",
      "summary": "Situer la période moderne et sa question centrale : raison ou sens, quelle est la source de la connaissance ?",
      "conceptExplanation": "La période moderne s'étend du XVIe siècle au XVIIIe siècle.\nLes réflexions des philosophes de cette époque portent sur la recherche de la source ou du fondement de la connaissance.\nLa leçon organise cette recherche en trois temps : le rationalisme, illustré par René Descartes, pour qui seule la raison permet d'accéder à la connaissance ; l'empirisme, illustré par John Locke, pour qui toutes les connaissances proviennent de l'expérience ; puis le rôle de la raison et des sens dans l'élaboration de la connaissance, avec Emmanuel Kant, dont le criticisme réconcilie empirisme et rationalisme en affirmant que la connaissance naît de l'union entre la raison et l'expérience.",
      "keyRule": "La question moderne est celle du fondement de la connaissance : raison, expérience, ou leur union chez Kant.",
      "formulas": [],
      "workedExample": {
        "title": "Départager raison et sens (situation d'apprentissage)",
        "statement": "Pendant la récréation, un élève de première A rapporte qu'il a appris que la raison est la source de toutes nos connaissances ; un autre affirme avoir lu que ce sont plutôt les sens qui en constituent la source. Quelles recherches les élèves décident-ils d'effectuer selon la situation ?",
        "methodSteps": [
          "Connaître les fondements de la connaissance.",
          "Apprécier les doctrines des penseurs de l'époque moderne.",
          "Comparer la réponse rationaliste, la réponse empiriste et la réponse critique de Kant."
        ],
        "conclusion": "Le débat de la situation d'apprentissage est exactement la question de la période moderne : la source ou le fondement de la connaissance."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les bornes de la période moderne",
          "stepTheme": "Les bornes de la période moderne",
          "stepBadge": "Les bornes de la période moderne",
          "paragraphText": "• Période moderne : du XVIe siècle au XVIIIe siècle.\nElle succède au Moyen Âge et à la Renaissance dans l'histoire de la philosophie.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p01_q1",
            "type": "mcq",
            "prompt": "La période moderne s'étend :",
            "options": [
              "Du VIe siècle avant J.-C. au Ve siècle après J.-C.",
              "Du VIe siècle au XVe siècle",
              "Du XVIe siècle au XVIIIe siècle",
              "Du XIXe siècle à nos jours"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les bornes données dans l'introduction de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La question centrale de la période",
          "stepTheme": "La question centrale de la période",
          "stepBadge": "La question centrale de la période",
          "paragraphText": "Les réflexions des philosophes de cette époque portent sur la recherche de la source ou du fondement de la connaissance.\nC'est ce qui oppose puis articule rationalisme et empirisme dans la leçon.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p01_q2",
            "type": "mcq",
            "prompt": "La réflexion centrale de la période moderne porte sur :",
            "options": [
              "Les rapports entre philosophie et religion",
              "La source ou le fondement de la connaissance",
              "La place de la liberté uniquement",
              "Les deux cités, terrestre et céleste"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Raison ou expérience comme source de la connaissance : telle est la question moderne selon l'introduction."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Deux réponses entendues en récréation",
          "stepTheme": "Deux réponses entendues en récréation",
          "stepBadge": "Deux réponses entendues en récréation",
          "paragraphText": "Exemple : un élève affirme que la raison est la source de toutes nos connaissances, un autre que ce sont les sens.\nCes deux affirmations correspondent aux deux grandes doctrines étudiées ensuite : le rationalisme et l'empirisme.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p01_q3",
            "type": "mcq",
            "prompt": "Les deux sources discutées dans la situation d'apprentissage sont :",
            "options": [
              "La foi et la charité",
              "La nature et la loi",
              "L'opinion et la science",
              "La raison et les sens"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Raison contre sens : le débat des élèves annonce le rationalisme de Descartes et l'empirisme de Locke."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Rationalisme et empirisme en regard",
          "stepTheme": "Rationalisme et empirisme en regard",
          "stepBadge": "Rationalisme et empirisme en regard",
          "paragraphText": "• Rationalisme : doctrine selon laquelle seule la raison permet à l'homme d'accéder à la connaissance.\n• Empirisme : doctrine selon laquelle toutes les connaissances humaines proviennent de l'expérience.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p01_q4",
            "type": "mcq",
            "prompt": "Le rationalisme affirme que :",
            "options": [
              "Seule la raison permet d'accéder à la connaissance",
              "Toutes les connaissances proviennent de l'expérience",
              "La connaissance naît de l'union de la raison et de l'expérience",
              "La vérité est relative à chaque individu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du rationalisme donnée dans la leçon, à propos de Descartes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La réponse kantienne annoncée",
          "stepTheme": "La réponse kantienne annoncée",
          "stepBadge": "La réponse kantienne annoncée",
          "paragraphText": "La troisième partie de la leçon étudie le rôle de la raison et des sens dans l'élaboration de la connaissance avec Kant.\nEn affirmant que la connaissance naît de l'union entre la raison et l'expérience, Kant réconcilie empirisme et rationalisme.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p01_q5",
            "type": "mcq",
            "prompt": "Selon la définition du criticisme dans la leçon, la connaissance naît :",
            "options": [
              "De la raison seule, sans les sens",
              "Des sens seuls, sans la raison",
              "De l'union entre la raison et l'expérience",
              "De la suspension du jugement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Union de la raison et de l'expérience : c'est la réconciliation opérée par le criticisme kantien."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre moderne et contemporain",
          "stepTheme": "Ne pas confondre moderne et contemporain",
          "stepBadge": "Ne pas confondre moderne et contemporain",
          "paragraphText": "Piège : situer Descartes, Locke et Kant dans la période contemporaine.\nLa période moderne va du XVIe siècle au XVIIIe siècle ; la période contemporaine part du XIXe siècle.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p01_q6",
            "type": "mcq",
            "prompt": "Descartes, Locke et Kant appartiennent, dans cette leçon, à :",
            "options": [
              "La période antique",
              "La période moderne",
              "La période contemporaine",
              "Le Moyen Âge"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois auteurs de la période moderne étudiés dans la leçon, du XVIe siècle au XVIIIe siècle."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p01_q1",
          "type": "mcq",
          "prompt": "La période moderne s'étend :",
          "options": [
            "Du VIe siècle avant J.-C. au Ve siècle après J.-C.",
            "Du VIe siècle au XVe siècle",
            "Du XVIe siècle au XVIIIe siècle",
            "Du XIXe siècle à nos jours"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les bornes données dans l'introduction de la leçon."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p01_q2",
          "type": "mcq",
          "prompt": "La réflexion centrale de la période moderne porte sur :",
          "options": [
            "Les rapports entre philosophie et religion",
            "La source ou le fondement de la connaissance",
            "La place de la liberté uniquement",
            "Les deux cités, terrestre et céleste"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Raison ou expérience comme source de la connaissance : telle est la question moderne selon l'introduction."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p01_q3",
          "type": "mcq",
          "prompt": "Les deux sources discutées dans la situation d'apprentissage sont :",
          "options": [
            "La foi et la charité",
            "La nature et la loi",
            "L'opinion et la science",
            "La raison et les sens"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Raison contre sens : le débat des élèves annonce le rationalisme de Descartes et l'empirisme de Locke."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p01_q4",
          "type": "mcq",
          "prompt": "Le rationalisme affirme que :",
          "options": [
            "Seule la raison permet d'accéder à la connaissance",
            "Toutes les connaissances proviennent de l'expérience",
            "La connaissance naît de l'union de la raison et de l'expérience",
            "La vérité est relative à chaque individu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du rationalisme donnée dans la leçon, à propos de Descartes."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p01_q5",
          "type": "mcq",
          "prompt": "Selon la définition du criticisme dans la leçon, la connaissance naît :",
          "options": [
            "De la raison seule, sans les sens",
            "Des sens seuls, sans la raison",
            "De l'union entre la raison et l'expérience",
            "De la suspension du jugement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Union de la raison et de l'expérience : c'est la réconciliation opérée par le criticisme kantien."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p01_q6",
          "type": "mcq",
          "prompt": "Descartes, Locke et Kant appartiennent, dans cette leçon, à :",
          "options": [
            "La période antique",
            "La période moderne",
            "La période contemporaine",
            "Le Moyen Âge"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois auteurs de la période moderne étudiés dans la leçon, du XVIe siècle au XVIIIe siècle."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p02",
      "order": 2,
      "title": "Descartes : les trois sortes d'idées",
      "summary": "Comprendre la distinction cartésienne entre idées adventices, factices et innées, et son argument pour l'innéité des notions communes.",
      "conceptExplanation": "René Descartes (1596-1650) est un philosophe français. En 1616, il obtient à la fois le baccalauréat et la licence en droit. À partir de 1628, il vit fréquemment en Hollande, y mène une vie tranquille, s'adonne à la méditation et y écrit ses principales œuvres : Les Règles pour la direction de l'esprit, Le Discours de la méthode, Les Méditations métaphysiques, Les Principes de philosophie et Les Passions de l'âme.\nPar le mot idea, Descartes entend tout ce qui peut être en notre pensée, et il en distingue trois sortes. Certaines sont adventices, c'est-à-dire viennent de l'extérieur, comme l'idée qu'on a vulgairement du soleil. D'autres sont faites ou factices, fabriquées par nous, comme celles que les astronomes font du soleil par leur raisonnement. Les autres sont innées, propres à l'esprit, comme l'idée de Dieu, de l'esprit, du corps, du triangle, et en général toutes celles qui représentent des essences vraies, immuables et éternelles.\nDescartes soutient que même les idées du mouvement et des figures sont naturellement en nous, et à plus forte raison les idées de la douleur, des couleurs et des sons. Il juge absurde de dire que toutes les notions communes procèdent des mouvements corporels : tous les mouvements ne sont que particuliers et les notions sont universelles, et elles n'ont aucune affinité avec ces mouvements.",
      "keyRule": "Idée adventice, idée factice, idée innée : les notions universelles ne peuvent naître de mouvements seulement particuliers.",
      "formulas": [],
      "workedExample": {
        "title": "Classer les idées du soleil chez Descartes",
        "statement": "Dans le texte, Descartes donne deux idées du soleil différentes. Classe-les et ajoute un exemple d'idée innée.",
        "methodSteps": [
          "L'idée qu'on a vulgairement du soleil est adventice : elle vient de l'extérieur.",
          "L'idée que les astronomes font du soleil par leur raisonnement est factice : elle est fabriquée par nous.",
          "L'idée de Dieu, de l'esprit, du corps ou du triangle est innée : elle est propre à l'esprit et représente une essence vraie, immuable et éternelle."
        ],
        "conclusion": "Le même objet, le soleil, peut donner une idée adventice ou une idée factice, tandis que les essences relèvent des idées innées."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Descartes, philosophe français",
          "stepTheme": "Descartes, philosophe français",
          "stepBadge": "Descartes, philosophe français",
          "paragraphText": "René Descartes (1596-1650), philosophe français, obtient en 1616 le baccalauréat et la licence en droit.\nÀ partir de 1628, il vit fréquemment en Hollande et y écrit ses principales œuvres, dont Le Discours de la méthode et Les Méditations métaphysiques.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p02_q1",
            "type": "mcq",
            "prompt": "Parmi les œuvres de Descartes citées dans la leçon figure :",
            "options": [
              "L'Essai concernant l'entendement humain",
              "La Critique de la raison pure",
              "Le Discours de la méthode",
              "Le Prince"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les Règles pour la direction de l'esprit, Le Discours de la méthode, Les Méditations métaphysiques, Les Principes de philosophie et Les Passions de l'âme sont les œuvres cartésiennes listées."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'idea : tout ce qui est en notre pensée",
          "stepTheme": "L'idea : tout ce qui est en notre pensée",
          "stepBadge": "L'idea : tout ce qui est en notre pensée",
          "paragraphText": "• Idea : terme latin qui désigne l'idée, c'est-à-dire toute représentation mentale.\nDescartes entend par ce mot tout ce qui peut être en notre pensée, et il en distingue trois sortes.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p02_q2",
            "type": "mcq",
            "prompt": "Par le mot idea, Descartes entend :",
            "options": [
              "Uniquement les sensations corporelles",
              "Tout ce qui peut être en notre pensée",
              "Seulement l'idée de Dieu",
              "Les mouvements du corps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première phrase du texte : l'idea est tout ce qui peut être en notre pensée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Adventices, factices, innées",
          "stepTheme": "Adventices, factices, innées",
          "stepBadge": "Adventices, factices, innées",
          "paragraphText": "Les trois sortes d'idées chez Descartes.\n• Adventices : elles viennent de l'extérieur.\n• Factices : elles sont faites, fabriquées par nous.\n• Innées : elles sont propres à l'esprit.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p02_q3",
            "type": "mcq",
            "prompt": "Une idée factice est une idée :",
            "options": [
              "Qui vient de l'extérieur",
              "Qui est propre à l'esprit dès la naissance",
              "Qui représente une essence éternelle",
              "Qui est fabriquée par nous"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Exemple du texte : l'idée du soleil que les astronomes font par leur raisonnement est factice, donc fabriquée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'idée de Dieu, idée innée",
          "stepTheme": "L'idée de Dieu, idée innée",
          "stepBadge": "L'idée de Dieu, idée innée",
          "paragraphText": "Exemple d'idée innée : l'idée de Dieu, avec celles de l'esprit, du corps et du triangle.\nEn général, sont innées toutes les idées qui représentent des essences vraies, immuables et éternelles, c'est-à-dire qui ne subissent pas de modifications et durent de manière perpétuelle.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p02_q4",
            "type": "mcq",
            "prompt": "L'idée du triangle est, chez Descartes, une idée :",
            "options": [
              "Innée, représentant une essence vraie, immuable et éternelle",
              "Adventice, venue de l'extérieur",
              "Factice, fabriquée par les astronomes",
              "Sensible, produite par un mouvement corporel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le triangle est cité parmi les idées innées, avec Dieu, l'esprit et le corps."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les mouvements particuliers ne font pas les notions universelles",
          "stepTheme": "Les mouvements particuliers ne font pas les notions universelles",
          "stepBadge": "Les mouvements particuliers ne font pas les notions universelles",
          "paragraphText": "Piège : croire que les notions communes procèdent des mouvements corporels.\nDescartes juge absurde cette prétention : tous les mouvements ne sont que particuliers et les notions sont universelles, sans aucune affinité avec ces mouvements.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p02_q5",
            "type": "mcq",
            "prompt": "L'argument de Descartes contre l'origine corporelle des notions communes est :",
            "options": [
              "Les mouvements sont éternels",
              "Les notions sont particulières",
              "Les mouvements ne sont que particuliers alors que les notions sont universelles",
              "Les astronomes fabriquent toutes les idées"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Du particulier ne peut procéder l'universel : les notions communes sont donc naturellement en nous."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Mouvement, douleur, couleurs et sons sont en nous",
          "stepTheme": "Mouvement, douleur, couleurs et sons sont en nous",
          "stepBadge": "Mouvement, douleur, couleurs et sons sont en nous",
          "paragraphText": "« Même les idées du mouvement et des figures sont naturellement en nous. »\nÀ plus forte raison, les idées de la douleur, des couleurs et des sons doivent nous être naturelles, afin que l'esprit se les représente à l'occasion de mouvements corporels avec lesquels elles n'ont aucune ressemblance.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p02_q6",
            "type": "mcq",
            "prompt": "Selon l'identification de la position de Descartes, les idées du mouvement et des figures sont :",
            "options": [
              "Produites par les mouvements corporels",
              "Naturellement en nous",
              "Absentes de notre esprit",
              "Toujours adventices"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la phrase retenue par la leçon pour identifier la position de l'auteur."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p02_q1",
          "type": "mcq",
          "prompt": "Parmi les œuvres de Descartes citées dans la leçon figure :",
          "options": [
            "L'Essai concernant l'entendement humain",
            "La Critique de la raison pure",
            "Le Discours de la méthode",
            "Le Prince"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les Règles pour la direction de l'esprit, Le Discours de la méthode, Les Méditations métaphysiques, Les Principes de philosophie et Les Passions de l'âme sont les œuvres cartésiennes listées."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p02_q2",
          "type": "mcq",
          "prompt": "Par le mot idea, Descartes entend :",
          "options": [
            "Uniquement les sensations corporelles",
            "Tout ce qui peut être en notre pensée",
            "Seulement l'idée de Dieu",
            "Les mouvements du corps"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première phrase du texte : l'idea est tout ce qui peut être en notre pensée."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p02_q3",
          "type": "mcq",
          "prompt": "Une idée factice est une idée :",
          "options": [
            "Qui vient de l'extérieur",
            "Qui est propre à l'esprit dès la naissance",
            "Qui représente une essence éternelle",
            "Qui est fabriquée par nous"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Exemple du texte : l'idée du soleil que les astronomes font par leur raisonnement est factice, donc fabriquée."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p02_q4",
          "type": "mcq",
          "prompt": "L'idée du triangle est, chez Descartes, une idée :",
          "options": [
            "Innée, représentant une essence vraie, immuable et éternelle",
            "Adventice, venue de l'extérieur",
            "Factice, fabriquée par les astronomes",
            "Sensible, produite par un mouvement corporel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le triangle est cité parmi les idées innées, avec Dieu, l'esprit et le corps."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p02_q5",
          "type": "mcq",
          "prompt": "L'argument de Descartes contre l'origine corporelle des notions communes est :",
          "options": [
            "Les mouvements sont éternels",
            "Les notions sont particulières",
            "Les mouvements ne sont que particuliers alors que les notions sont universelles",
            "Les astronomes fabriquent toutes les idées"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Du particulier ne peut procéder l'universel : les notions communes sont donc naturellement en nous."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p02_q6",
          "type": "mcq",
          "prompt": "Selon l'identification de la position de Descartes, les idées du mouvement et des figures sont :",
          "options": [
            "Produites par les mouvements corporels",
            "Naturellement en nous",
            "Absentes de notre esprit",
            "Toujours adventices"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la phrase retenue par la leçon pour identifier la position de l'auteur."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p03",
      "order": 3,
      "title": "La raison et le rationalisme cartésien",
      "summary": "Définir la raison selon Descartes et le rationalisme comme doctrine de la seule raison source de connaissance.",
      "conceptExplanation": "Pour Descartes, la raison, c'est-à-dire le bon sens, est la faculté de bien juger et de découvrir la vérité dans les sciences.\nPar le raisonnement et la déduction, l'esprit humain se détache des sens et parvient à la vérité. Descartes est donc rationaliste.\nLe rationalisme est la doctrine selon laquelle seule la raison permet à l'homme d'accéder à la connaissance.",
      "keyRule": "Raison égale bon sens : faculté de bien juger ; par le raisonnement et la déduction, l'esprit se détache des sens et atteint la vérité.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte sur Descartes (exercice 1)",
        "statement": "Le professeur annonce un devoir sur René Descartes. Complète : Descartes est un philosophe de la période moderne, sa doctrine est le rationalisme, selon laquelle toutes nos connaissances découlent de la raison et non de l'expérience.",
        "methodSteps": [
          "Identifier l'auteur et sa période : René Descartes, philosophe de la période moderne (1596-1650).",
          "Nommer sa doctrine : le rationalisme.",
          "Appliquer la définition : selon cette doctrine, toutes nos connaissances découlent de la raison et non de l'expérience."
        ],
        "conclusion": "L'exercice 1 de la leçon se complète avec la raison comme source des connaissances chez le rationaliste Descartes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La raison comme bon sens",
          "stepTheme": "La raison comme bon sens",
          "stepBadge": "La raison comme bon sens",
          "paragraphText": "• Raison : pour Descartes, c'est-à-dire le bon sens, la faculté de bien juger et de découvrir la vérité dans les sciences.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p03_q1",
            "type": "mcq",
            "prompt": "Pour Descartes, la raison est :",
            "options": [
              "La faculté de bien juger et de découvrir la vérité dans les sciences",
              "L'ensemble des organes des sens",
              "Une table rase vide de caractères",
              "Un composé d'impressions sensibles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon définit la raison cartésienne comme le bon sens, faculté de bien juger."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Raisonnement et déduction contre les sens",
          "stepTheme": "Raisonnement et déduction contre les sens",
          "stepBadge": "Raisonnement et déduction contre les sens",
          "paragraphText": "Méthode cartésienne : par le raisonnement et la déduction, l'esprit humain se détache des sens.\nC'est ainsi détaché des sens que l'esprit parvient à la vérité.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p03_q2",
            "type": "mcq",
            "prompt": "Chez Descartes, l'esprit parvient à la vérité :",
            "options": [
              "En s'appuyant uniquement sur les sensations",
              "Par l'observation répétée des cas particuliers",
              "Par le raisonnement et la déduction, en se détachant des sens",
              "En suspendant tout jugement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Raisonnement et déduction sont les instruments de la raison contre la dépendance aux sens."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le rationalisme défini",
          "stepTheme": "Le rationalisme défini",
          "stepBadge": "Le rationalisme défini",
          "paragraphText": "• Rationalisme : doctrine selon laquelle seule la raison permet à l'homme d'accéder à la connaissance.\nDescartes est rationaliste parce que sa raison, par la déduction, se détache des sens pour atteindre la vérité.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p03_q3",
            "type": "mcq",
            "prompt": "Le rationalisme est la doctrine selon laquelle :",
            "options": [
              "Toutes les connaissances proviennent de l'expérience",
              "Seule la raison permet à l'homme d'accéder à la connaissance",
              "La connaissance commence avec l'expérience",
              "L'âme est une table rase"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du rationalisme donnée en conclusion de la première partie de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre Descartes et l'empirisme",
          "stepTheme": "Ne pas confondre Descartes et l'empirisme",
          "stepBadge": "Ne pas confondre Descartes et l'empirisme",
          "paragraphText": "Piège : attribuer à Descartes la thèse de la table rase ou de l'expérience source de tout.\nCes thèses sont celles de Locke, empiriste ; Descartes soutient des idées innées et la primauté de la raison.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p03_q4",
            "type": "mcq",
            "prompt": "Laquelle de ces thèses n'est pas celle de Descartes ?",
            "options": [
              "Il existe des idées innées propres à l'esprit",
              "La raison est la faculté de bien juger",
              "L'âme est au commencement une table rase vide de tous caractères",
              "Les notions communes sont universelles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La table rase est l'hypothèse de Locke dans l'Essai concernant l'entendement humain, à l'opposé de l'innéisme cartésien."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Descartes insatisfait de l'enseignement reçu",
          "stepTheme": "Descartes insatisfait de l'enseignement reçu",
          "stepBadge": "Descartes insatisfait de l'enseignement reçu",
          "paragraphText": "Exemple biographique de la présentation : en dehors des mathématiques, Descartes n'est pas satisfait de l'enseignement reçu, qu'il juge stérile.\nIl vit fréquemment en Hollande à partir de 1628, y mène une vie tranquille et s'adonne à la méditation.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p03_q5",
            "type": "mcq",
            "prompt": "Descartes juge stérile :",
            "options": [
              "Les mathématiques uniquement",
              "L'enseignement reçu, en dehors des mathématiques",
              "La méditation en Hollande",
              "La licence en droit de 1616"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Hors les mathématiques, l'enseignement reçu ne le satisfait pas : d'où sa recherche d'une autre voie vers la vérité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Deux actes de l'entendement chez Descartes",
          "stepTheme": "Deux actes de l'entendement chez Descartes",
          "stepBadge": "Deux actes de l'entendement chez Descartes",
          "paragraphText": "L'exercice 2 de la leçon associe à Descartes cette position : deux actes de notre entendement nous permettent de parvenir à la connaissance.\nCes deux actes sont l'intuition et la déduction.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p03_q6",
            "type": "mcq",
            "prompt": "Selon la position associée à Descartes dans l'exercice 2, nous parvenons à la connaissance par :",
            "options": [
              "L'intuition et la déduction",
              "Les perceptions des sens uniquement",
              "Des pensées sans matière",
              "L'induction sans sensation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Intuition et déduction : ce sont les deux actes de l'entendement rangés du côté de Descartes dans l'exercice de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p03_q1",
          "type": "mcq",
          "prompt": "Pour Descartes, la raison est :",
          "options": [
            "La faculté de bien juger et de découvrir la vérité dans les sciences",
            "L'ensemble des organes des sens",
            "Une table rase vide de caractères",
            "Un composé d'impressions sensibles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon définit la raison cartésienne comme le bon sens, faculté de bien juger."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p03_q2",
          "type": "mcq",
          "prompt": "Chez Descartes, l'esprit parvient à la vérité :",
          "options": [
            "En s'appuyant uniquement sur les sensations",
            "Par l'observation répétée des cas particuliers",
            "Par le raisonnement et la déduction, en se détachant des sens",
            "En suspendant tout jugement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Raisonnement et déduction sont les instruments de la raison contre la dépendance aux sens."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p03_q3",
          "type": "mcq",
          "prompt": "Le rationalisme est la doctrine selon laquelle :",
          "options": [
            "Toutes les connaissances proviennent de l'expérience",
            "Seule la raison permet à l'homme d'accéder à la connaissance",
            "La connaissance commence avec l'expérience",
            "L'âme est une table rase"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du rationalisme donnée en conclusion de la première partie de la leçon."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p03_q4",
          "type": "mcq",
          "prompt": "Laquelle de ces thèses n'est pas celle de Descartes ?",
          "options": [
            "Il existe des idées innées propres à l'esprit",
            "La raison est la faculté de bien juger",
            "L'âme est au commencement une table rase vide de tous caractères",
            "Les notions communes sont universelles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La table rase est l'hypothèse de Locke dans l'Essai concernant l'entendement humain, à l'opposé de l'innéisme cartésien."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p03_q5",
          "type": "mcq",
          "prompt": "Descartes juge stérile :",
          "options": [
            "Les mathématiques uniquement",
            "L'enseignement reçu, en dehors des mathématiques",
            "La méditation en Hollande",
            "La licence en droit de 1616"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Hors les mathématiques, l'enseignement reçu ne le satisfait pas : d'où sa recherche d'une autre voie vers la vérité."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p03_q6",
          "type": "mcq",
          "prompt": "Selon la position associée à Descartes dans l'exercice 2, nous parvenons à la connaissance par :",
          "options": [
            "L'intuition et la déduction",
            "Les perceptions des sens uniquement",
            "Des pensées sans matière",
            "L'induction sans sensation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Intuition et déduction : ce sont les deux actes de l'entendement rangés du côté de Descartes dans l'exercice de la leçon."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p04",
      "order": 4,
      "title": "Locke : l'expérience, source de toutes nos connaissances",
      "summary": "Comprendre l'empirisme de Locke : l'âme table rase reçoit toutes ses idées de l'expérience, par deux sources.",
      "conceptExplanation": "John Locke, né en 1632 et mort en 1704, étudie les mathématiques, l'astronomie et surtout la médecine. Ses œuvres les plus importantes sont l'Essai sur la loi de nature, la Lettre sur la tolérance, les Deux traités du gouvernement civil et Quelques pensées sur l'éducation ; il ébauche puis achève, réfugié en Hollande, la rédaction de l'Essai concernant l'entendement humain.\nDans ce texte, Locke examine comment l'homme vient à avoir toutes ses idées. Contre le sentiment généralement établi que tous les hommes ont des idées innées, caractères originaux gravés dans leur âme dès le premier moment de leur existence, il suppose qu'au commencement l'âme est ce qu'on appelle une table rase, vide de tous caractères, sans aucune idée.\nD'où l'âme puise-t-elle tous les matériaux de ses raisonnements et de ses connaissances ? De l'expérience : c'est là le fondement de toutes nos connaissances, et c'est de là qu'elles tirent leur première origine. Deux sources fournissent à l'esprit les matériaux de toutes ses pensées : les observations que nous faisons sur les objets extérieurs et sensibles, et les opérations intérieures de notre âme, que nous apercevons et sur lesquelles nous réfléchissons nous-mêmes.\nL'expérience se définit comme l'ensemble des objets et des phénomènes extérieurs qui frappent nos sens ; les sens désignent l'ensemble des organes et facultés qui mettent l'homme en relation avec le monde extérieur. L'empirisme est la doctrine philosophique selon laquelle toutes les connaissances humaines proviennent de l'expérience. Position de Locke : l'expérience est la source de toutes nos connaissances.",
      "keyRule": "Âme table rase au commencement : toutes les idées viennent de l'expérience, par les objets sensibles et par la réflexion sur nos opérations intérieures.",
      "formulas": [],
      "workedExample": {
        "title": "Répondre à la question de Locke : d'où viennent les idées ?",
        "statement": "Locke suppose l'âme comme une table rase au commencement. D'où puise-t-elle alors tous les matériaux de ses connaissances, et par quelles deux sources ?",
        "methodSteps": [
          "Rejeter l'hypothèse de départ des idées innées gravées dans l'âme dès le premier moment de l'existence.",
          "Poser la réponse en un mot : de l'expérience, fondement de toutes nos connaissances et leur première origine.",
          "Première source : les observations sur les objets extérieurs et sensibles.",
          "Deuxième source : les opérations intérieures de notre âme, aperçues et réfléchies par nous-mêmes."
        ],
        "conclusion": "Pour Locke, l'expérience, par la sensation des objets extérieurs et la réflexion intérieure, fournit tous les matériaux de nos pensées."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'âme comme table rase",
          "stepTheme": "L'âme comme table rase",
          "stepBadge": "L'âme comme table rase",
          "paragraphText": "• Table rase : au commencement, l'âme est vide de tous caractères, sans aucune idée, quelle qu'elle soit.\nLocke oppose cette supposition au sentiment généralement établi des idées innées gravées dans l'âme dès le premier moment de l'existence.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p04_q1",
            "type": "mcq",
            "prompt": "Supposer l'âme comme une table rase signifie qu'au commencement elle est :",
            "options": [
              "Pleine d'idées innées",
              "Vide de tous caractères, sans aucune idée",
              "Pleine de notions universelles",
              "Déjà savante par la raison"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'hypothèse de Locke au livre II de l'Essai concernant l'entendement humain."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'expérience, fondement des connaissances",
          "stepTheme": "L'expérience, fondement des connaissances",
          "stepBadge": "L'expérience, fondement des connaissances",
          "paragraphText": "« À cela je réponds en un mot, de l'expérience : c'est là le fondement de toutes nos connaissances, et c'est de là qu'elles tirent leur première origine. »\nL'expérience désigne la constatation spontanée d'un fait ou sa découverte par une observation dirigée.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p04_q2",
            "type": "mcq",
            "prompt": "Pour Locke, toutes nos connaissances tirent leur première origine :",
            "options": [
              "Des idées innées",
              "De la déduction rationnelle",
              "De l'expérience",
              "Des essences éternelles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'identification de la position de l'auteur retenue par la leçon : l'expérience est la source de toutes nos connaissances."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les deux sources des idées",
          "stepTheme": "Les deux sources des idées",
          "stepBadge": "Les deux sources des idées",
          "paragraphText": "Deux sources découlent toutes les idées que nous avons ou pouvons avoir naturellement.\n• Les observations sur les objets extérieurs et sensibles\n• Les opérations intérieures de notre âme, que nous apercevons et sur lesquelles nous réfléchissons",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p04_q3",
            "type": "mcq",
            "prompt": "Les deux sources des idées chez Locke sont :",
            "options": [
              "L'induction et la démonstration",
              "L'intuition et la déduction",
              "La foi et la raison",
              "Les objets extérieurs sensibles et les opérations intérieures de l'âme"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sensation des objets extérieurs et réflexion sur les opérations intérieures : ce sont les deux sources énumérées dans le texte."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Expérience et sens définis",
          "stepTheme": "Expérience et sens définis",
          "stepBadge": "Expérience et sens définis",
          "paragraphText": "• Expérience : ensemble des objets et des phénomènes extérieurs qui frappent nos sens.\n• Sens : ensemble des organes et facultés qui mettent l'homme en relation avec le monde extérieur.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p04_q4",
            "type": "mcq",
            "prompt": "L'expérience se définit, dans la leçon, comme :",
            "options": [
              "L'ensemble des objets et phénomènes extérieurs qui frappent nos sens",
              "La faculté de bien juger",
              "Une essence vraie et immuable",
              "La suspension du jugement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Cette définition suit immédiatement le texte de Locke dans la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'empirisme défini",
          "stepTheme": "L'empirisme défini",
          "stepBadge": "L'empirisme défini",
          "paragraphText": "• Empirisme : doctrine philosophique selon laquelle toutes les connaissances humaines proviennent de l'expérience.\nElle s'oppose point par point au rationalisme, pour qui seule la raison donne accès à la connaissance.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p04_q5",
            "type": "mcq",
            "prompt": "L'empirisme est la doctrine selon laquelle :",
            "options": [
              "Seule la raison permet d'accéder à la connaissance",
              "Toutes les connaissances humaines proviennent de l'expérience",
              "La vérité est intelligible et relève de l'Idée",
              "Il faut suspendre son jugement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition qui conclut la partie sur l'empirisme dans la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Des idées innées chez Locke : la thèse combattue",
          "stepTheme": "Des idées innées chez Locke : la thèse combattue",
          "stepBadge": "Des idées innées chez Locke : la thèse combattue",
          "paragraphText": "Piège : présenter les idées innées comme la thèse de Locke.\nLocke commence par rappeler ce sentiment généralement établi pour le discuter : il suppose au contraire l'âme vide au commencement, une table rase.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p04_q6",
            "type": "mcq",
            "prompt": "Le sentiment des idées innées gravées dans l'âme est, dans le texte de Locke :",
            "options": [
              "Sa propre thèse définitive",
              "Un sentiment généralement établi qu'il examine et écarte au profit de la table rase",
              "La doctrine de Kant",
              "La définition de l'expérience"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Locke sait que ce sentiment est généralement établi, mais sa réponse fait de l'expérience la source de tout."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p04_q1",
          "type": "mcq",
          "prompt": "Supposer l'âme comme une table rase signifie qu'au commencement elle est :",
          "options": [
            "Pleine d'idées innées",
            "Vide de tous caractères, sans aucune idée",
            "Pleine de notions universelles",
            "Déjà savante par la raison"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'hypothèse de Locke au livre II de l'Essai concernant l'entendement humain."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p04_q2",
          "type": "mcq",
          "prompt": "Pour Locke, toutes nos connaissances tirent leur première origine :",
          "options": [
            "Des idées innées",
            "De la déduction rationnelle",
            "De l'expérience",
            "Des essences éternelles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'identification de la position de l'auteur retenue par la leçon : l'expérience est la source de toutes nos connaissances."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p04_q3",
          "type": "mcq",
          "prompt": "Les deux sources des idées chez Locke sont :",
          "options": [
            "L'induction et la démonstration",
            "L'intuition et la déduction",
            "La foi et la raison",
            "Les objets extérieurs sensibles et les opérations intérieures de l'âme"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sensation des objets extérieurs et réflexion sur les opérations intérieures : ce sont les deux sources énumérées dans le texte."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p04_q4",
          "type": "mcq",
          "prompt": "L'expérience se définit, dans la leçon, comme :",
          "options": [
            "L'ensemble des objets et phénomènes extérieurs qui frappent nos sens",
            "La faculté de bien juger",
            "Une essence vraie et immuable",
            "La suspension du jugement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cette définition suit immédiatement le texte de Locke dans la leçon."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p04_q5",
          "type": "mcq",
          "prompt": "L'empirisme est la doctrine selon laquelle :",
          "options": [
            "Seule la raison permet d'accéder à la connaissance",
            "Toutes les connaissances humaines proviennent de l'expérience",
            "La vérité est intelligible et relève de l'Idée",
            "Il faut suspendre son jugement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition qui conclut la partie sur l'empirisme dans la leçon."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p04_q6",
          "type": "mcq",
          "prompt": "Le sentiment des idées innées gravées dans l'âme est, dans le texte de Locke :",
          "options": [
            "Sa propre thèse définitive",
            "Un sentiment généralement établi qu'il examine et écarte au profit de la table rase",
            "La doctrine de Kant",
            "La définition de l'expérience"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Locke sait que ce sentiment est généralement établi, mais sa réponse fait de l'expérience la source de tout."
        }
      ]
    },
    {
      "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p05",
      "order": 5,
      "title": "Kant : le criticisme, union de la raison et de l'expérience",
      "summary": "Comprendre la synthèse kantienne : toute connaissance commence avec l'expérience sans dériver toute d'elle, et la distinction entre a priori et a posteriori.",
      "conceptExplanation": "Emmanuel Kant (1724-1804) naît à Königsberg et y meurt sans l'avoir jamais quittée. Il y suit des cours de philosophie et de théologie, puis y mène une carrière d'enseignant à l'université et d'écrivain. Il a écrit notamment la Critique de la raison pure, la Critique de la raison pratique, la Critique de la faculté de juger et les Fondements de la métaphysique des mœurs.\nDans l'introduction à la deuxième édition de la Critique de la raison pure, il affirme qu'il n'est pas douteux que toutes nos connaissances commencent avec l'expérience : des objets frappent nos sens, produisent des représentations et excitent notre activité intellectuelle à les comparer, les unir ou les séparer. Aucune connaissance ne précède donc en nous, dans le temps, l'expérience.\nMais si toute notre connaissance débute avec l'expérience, cela ne prouve pas qu'elle dérive toute de l'expérience : notre connaissance par expérience est un composé de ce que nous recevons des impressions sensibles et de ce que notre propre pouvoir de connaître produit de lui-même.\nPar connaissance a priori, Kant entend celles qui sont absolument indépendantes de toute expérience ; à elles sont opposées les connaissances empiriques, possibles seulement a posteriori, c'est-à-dire par expérience. Parmi les connaissances a priori, sont appelées pures celles auxquelles n'est mêlé absolument rien d'empirique : par exemple, la proposition « Tout changement a une cause » est bien a priori, mais n'est point pure, puisque le changement est un concept qu'on ne peut tirer que de l'expérience.\nLa philosophie de Kant est un rationalisme critique ; on la désigne par le vocable criticisme. Kant critique le rationalisme absolu et l'empirisme dogmatique : en affirmant que la connaissance naît de l'union entre la raison et l'expérience, Kant réconcilie empirisme et rationalisme.",
      "keyRule": "Commencer avec l'expérience n'est pas dériver toute de l'expérience : la connaissance compose impressions sensibles et pouvoir propre de connaître.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser le sujet : la raison peut-elle connaître indépendamment des sens ? (situation d'évaluation)",
        "statement": "Des élèves de première du Lycée Moderne de Daoukro débattent de l'origine de la connaissance autour du sujet : « La raison peut-elle connaître indépendamment des sens ? » Reformule le sujet, formule le problème et ses aspects à la lumière de la leçon.",
        "methodSteps": [
          "Reformulation : la raison peut-elle produire la connaissance sans le concours des sensations et de l'expérience ?",
          "Problème : quelle est la source de la connaissance, la raison seule, les sens seuls, ou leur union ?",
          "Aspect rationaliste : pour Descartes, par le raisonnement et la déduction, l'esprit se détache des sens et parvient à la vérité.",
          "Aspect empiriste : pour Locke, toutes nos connaissances proviennent de l'expérience qui frappe nos sens.",
          "Aspect critique : pour Kant, la connaissance commence avec l'expérience mais naît de l'union entre la raison et l'expérience."
        ],
        "conclusion": "Le sujet oppose rationalisme et empirisme, et la leçon le tranche par le criticisme : ni la raison seule ni les sens seuls, mais leur union."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Kant, le philosophe de Königsberg",
          "stepTheme": "Kant, le philosophe de Königsberg",
          "stepBadge": "Kant, le philosophe de Königsberg",
          "paragraphText": "Emmanuel Kant (1724-1804) naît à Königsberg et y meurt sans l'avoir jamais quittée.\nParmi ses œuvres : Critique de la raison pure, Critique de la raison pratique, Critique de la faculté de juger et Fondements de la métaphysique des mœurs.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p05_q1",
            "type": "mcq",
            "prompt": "Parmi les œuvres de Kant citées dans la leçon figure :",
            "options": [
              "Le Discours de la méthode",
              "L'Essai concernant l'entendement humain",
              "Les Méditations métaphysiques",
              "La Critique de la raison pure"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est de l'introduction à la deuxième édition de la Critique de la raison pure que le texte de la leçon est extrait."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Toute connaissance commence avec l'expérience",
          "stepTheme": "Toute connaissance commence avec l'expérience",
          "stepBadge": "Toute connaissance commence avec l'expérience",
          "paragraphText": "« Il n'est pas douteux que toutes nos connaissances ne commencent avec l'expérience. »\nDes objets frappent nos sens, produisent des représentations et excitent notre activité intellectuelle à les comparer, les unir ou les séparer.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p05_q2",
            "type": "mcq",
            "prompt": "Chez Kant, les objets qui frappent nos sens excitent notre activité intellectuelle à :",
            "options": [
              "Suspendre tout jugement",
              "Comparer, unir ou séparer les représentations",
              "Fabriquer des idées factices",
              "Mépriser l'expérience"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'activité intellectuelle met ainsi en œuvre la matière brute des impressions sensibles pour former l'expérience."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Commencer avec l'expérience ne veut pas dire en dériver toute",
          "stepTheme": "Commencer avec l'expérience ne veut pas dire en dériver toute",
          "stepBadge": "Commencer avec l'expérience ne veut pas dire en dériver toute",
          "paragraphText": "Piège : lire Kant comme un empiriste ordinaire.\n« Si toute notre connaissance débute avec l'expérience, cela ne prouve pas qu'elle dérive toute de l'expérience » : elle est un composé des impressions reçues et de ce que notre pouvoir de connaître produit de lui-même.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p05_q3",
            "type": "mcq",
            "prompt": "La connaissance par expérience est, chez Kant, un composé :",
            "options": [
              "De notions innées uniquement",
              "D'idées adventices et factices",
              "De ce que nous recevons des impressions sensibles et de ce que notre pouvoir de connaître produit de lui-même",
              "De conventions et d'habitudes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Composé de matière reçue et d'apport propre du pouvoir de connaître : c'est le cœur de la position kantienne citée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "A priori et a posteriori",
          "stepTheme": "A priori et a posteriori",
          "stepBadge": "A priori et a posteriori",
          "paragraphText": "• Connaissance a priori : absolument indépendante de toute expérience.\n• Connaissance empirique : possible seulement a posteriori, c'est-à-dire par expérience.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p05_q4",
            "type": "mcq",
            "prompt": "Une connaissance a priori est, chez Kant :",
            "options": [
              "Absolument indépendante de toute expérience",
              "Possible seulement par expérience",
              "Toujours mêlée d'empirique",
              "Une simple opinion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "A priori et a posteriori s'opposent ainsi dans l'introduction de la Critique de la raison pure."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "« Tout changement a une cause » : a priori mais non pure",
          "stepTheme": "« Tout changement a une cause » : a priori mais non pure",
          "stepBadge": "« Tout changement a une cause » : a priori mais non pure",
          "paragraphText": "Exemple du texte : la proposition « Tout changement a une cause » est bien a priori, mais n'est point pure.\nEn effet, le changement est un concept qu'on ne peut tirer que de l'expérience : quelque chose d'empirique s'y trouve donc mêlé.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p05_q5",
            "type": "mcq",
            "prompt": "Pourquoi « Tout changement a une cause » n'est-elle pas une connaissance pure ?",
            "options": [
              "Parce qu'elle est fausse",
              "Parce qu'elle dépend entièrement des sens",
              "Parce que le changement est un concept tiré de l'expérience",
              "Parce qu'elle est une opinion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sont appelées pures les connaissances a priori auxquelles n'est mêlé absolument rien d'empirique, ce qui n'est pas le cas ici."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le criticisme kantien",
          "stepTheme": "Le criticisme kantien",
          "stepBadge": "Le criticisme kantien",
          "paragraphText": "• Criticisme : philosophie de Kant, rationalisme critique qui critique le rationalisme absolu et l'empirisme dogmatique.\nKant réconcilie empirisme et rationalisme en affirmant que la connaissance naît de l'union entre la raison et l'expérience.",
          "exercise": {
            "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p05_q6",
            "type": "mcq",
            "prompt": "Le criticisme de Kant consiste à :",
            "options": [
              "Choisir le rationalisme absolu contre l'empirisme",
              "Choisir l'empirisme dogmatique contre le rationalisme",
              "Réconcilier empirisme et rationalisme par l'union de la raison et de l'expérience",
              "Renoncer à toute connaissance"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Critique des deux dogmatismes et réconciliation des deux doctrines : c'est la définition du criticisme qui conclut la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p05_q1",
          "type": "mcq",
          "prompt": "Parmi les œuvres de Kant citées dans la leçon figure :",
          "options": [
            "Le Discours de la méthode",
            "L'Essai concernant l'entendement humain",
            "Les Méditations métaphysiques",
            "La Critique de la raison pure"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est de l'introduction à la deuxième édition de la Critique de la raison pure que le texte de la leçon est extrait."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p05_q2",
          "type": "mcq",
          "prompt": "Chez Kant, les objets qui frappent nos sens excitent notre activité intellectuelle à :",
          "options": [
            "Suspendre tout jugement",
            "Comparer, unir ou séparer les représentations",
            "Fabriquer des idées factices",
            "Mépriser l'expérience"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'activité intellectuelle met ainsi en œuvre la matière brute des impressions sensibles pour former l'expérience."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p05_q3",
          "type": "mcq",
          "prompt": "La connaissance par expérience est, chez Kant, un composé :",
          "options": [
            "De notions innées uniquement",
            "D'idées adventices et factices",
            "De ce que nous recevons des impressions sensibles et de ce que notre pouvoir de connaître produit de lui-même",
            "De conventions et d'habitudes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Composé de matière reçue et d'apport propre du pouvoir de connaître : c'est le cœur de la position kantienne citée."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p05_q4",
          "type": "mcq",
          "prompt": "Une connaissance a priori est, chez Kant :",
          "options": [
            "Absolument indépendante de toute expérience",
            "Possible seulement par expérience",
            "Toujours mêlée d'empirique",
            "Une simple opinion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "A priori et a posteriori s'opposent ainsi dans l'introduction de la Critique de la raison pure."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p05_q5",
          "type": "mcq",
          "prompt": "Pourquoi « Tout changement a une cause » n'est-elle pas une connaissance pure ?",
          "options": [
            "Parce qu'elle est fausse",
            "Parce qu'elle dépend entièrement des sens",
            "Parce que le changement est un concept tiré de l'expérience",
            "Parce qu'elle est une opinion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sont appelées pures les connaissances a priori auxquelles n'est mêlé absolument rien d'empirique, ce qui n'est pas le cas ici."
        },
        {
          "id": "premiere_philo_histoire_philosophie_l08_periode_moderne_p05_q6",
          "type": "mcq",
          "prompt": "Le criticisme de Kant consiste à :",
          "options": [
            "Choisir le rationalisme absolu contre l'empirisme",
            "Choisir l'empirisme dogmatique contre le rationalisme",
            "Réconcilier empirisme et rationalisme par l'union de la raison et de l'expérience",
            "Renoncer à toute connaissance"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Critique des deux dogmatismes et réconciliation des deux doctrines : c'est la définition du criticisme qui conclut la leçon."
        }
      ]
    }
  ]
};
