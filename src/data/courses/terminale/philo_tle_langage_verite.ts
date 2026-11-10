import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo Tle_L9_Langage et Vérité.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_TLE_L09_LANGAGE_VERITE: CurriculumChapter = {
  "id": "terminale_philo_conditions_connaissance_l01_langage_verite",
  "subjectId": "philosophie",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 9,
  "title": "Les conditions de la connaissance, leçon 1 : Langage et vérité",
  "summary": "Communication et langage, langage et pensée, critères et relativité de la vérité, pouvoir et limites du langage.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "Philo Tle_L9_Langage et Vérité.pdf",
  "points": [
    {
      "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p01",
      "order": 1,
      "title": "Communication animale et langage humain",
      "summary": "Les abeilles parlent-elles ? Von Frisch et Benveniste.",
      "conceptExplanation": "Le langage est un système de signes oraux et écrits qui permet d'exprimer et de communiquer sa pensée. La communication est l'échange d'informations entre individus.\nKarl von Frisch (Vie et mœurs des abeilles) a montré que l'abeille indique la direction et la distance du butin par une danse en forme de huit.\nMais pour Émile Benveniste (Problèmes de linguistique générale), c'est un « code de signaux » : fixe, instinctif, sans dialogue.\nLe langage humain est créatif, culturel et appelle une réponse.",
      "keyRule": "Les animaux communiquent par un code de signaux ; seul l'homme a un langage.",
      "formulas": [],
      "workedExample": {
        "title": "L'abeille et le message",
        "statement": "Une abeille qui a dansé peut-elle répondre à la question d'une autre abeille ?",
        "methodSteps": [
          "La danse transmet un message fixe sur le butin.",
          "Les autres abeilles agissent, mais ne répondent pas par un autre message."
        ],
        "conclusion": "Sans dialogue, il y a communication mais pas langage."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Langage et communication",
          "stepTheme": "Langage et communication",
          "stepBadge": "Langage et communication",
          "paragraphText": "• Langage : système de signes (oraux, écrits, gestuels) qui permet à l'homme d'exprimer et de communiquer sa pensée.\n• Communication : échange d'informations ou de messages entre individus.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p01_q1",
            "type": "mcq",
            "prompt": "Quelle affirmation sur le langage est juste ?",
            "options": [
              "Le langage est un simple cri instinctif",
              "Le langage n'existe que par écrit",
              "Le langage est un système de signes pour exprimer et communiquer la pensée",
              "Le langage est un code fixe de signaux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le langage repose sur des signes et exprime la pensée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La danse des abeilles",
          "stepTheme": "La danse des abeilles",
          "stepBadge": "La danse des abeilles",
          "paragraphText": "Karl von Frisch, zoologiste autrichien (prix Nobel 1973), a étudié les abeilles (Vie et mœurs des abeilles).\nL'abeille qui a trouvé du nectar exécute une danse en forme de huit qui indique la direction et la distance du butin.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p01_q2",
            "type": "mcq",
            "prompt": "Que permet la danse en huit des abeilles selon von Frisch ?",
            "options": [
              "Indiquer la direction et la distance du butin",
              "Raconter une histoire",
              "Poser une question",
              "Exprimer une opinion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La danse transmet une information précise sur la nourriture."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Un code de signaux",
          "stepTheme": "Un code de signaux",
          "stepBadge": "Un code de signaux",
          "paragraphText": "Benveniste (« Communication animale et langage humain ») : la communication des abeilles n'est pas un langage mais un « code de signaux ».\nIl est fixe, invariable, instinctif, et ne permet ni dialogue ni réponse.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p01_q3",
            "type": "mcq",
            "prompt": "Comment Benveniste qualifie-t-il la communication des abeilles ?",
            "options": [
              "Un langage complet",
              "Une langue écrite",
              "Un dialogue",
              "Un code de signaux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les signaux transmettent un message, mais sans échange."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Ce qui fait le langage humain",
          "stepTheme": "Ce qui fait le langage humain",
          "stepBadge": "Ce qui fait le langage humain",
          "paragraphText": "Le langage humain est évolutif, créatif, polysémique et culturel.\nSurtout, il est un dialogue : il appelle une réponse, et non une simple conduite.\nIl est capable d'invention et de progrès.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p01_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce qui caractérise le langage humain, contrairement au code animal ?",
            "options": [
              "Il est fixe et instinctif",
              "Il est un dialogue qui appelle une réponse",
              "Il ne transmet qu'un seul message",
              "Il ne varie jamais"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'homme répond par un autre message ; l'animal réagit par une conduite."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Un trait propre à l'homme",
          "stepTheme": "Un trait propre à l'homme",
          "stepBadge": "Un trait propre à l'homme",
          "paragraphText": "La capacité linguistique n'appartient qu'à l'homme et le distingue des autres vivants.\nL'abbé Bougeant (Amusement philosophique sur le langage des bêtes) prêtait la parole au chien ; la linguistique moderne ne le suit pas.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p01_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations est vraie ?",
            "options": [
              "Le chien parle comme l'homme",
              "La capacité linguistique appartient en propre à l'homme",
              "Les abeilles dialoguent entre elles",
              "Tous les vivants ont un langage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Communiquer n'est pas parler."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Communiquer n'est pas parler",
          "stepTheme": "Communiquer n'est pas parler",
          "stepBadge": "Communiquer n'est pas parler",
          "paragraphText": "Erreur fréquente : croire que la communication animale est identique au langage humain.\nLes animaux communiquent, mais leur code est fermé, sans création ni dialogue.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p01_q6",
            "type": "mcq",
            "prompt": "L'affirmation « La communication animale est un code de signaux identique au langage humain » est…",
            "options": [
              "Vraie",
              "Vraie seulement pour les abeilles",
              "Vraie seulement pour les chiens",
              "Fausse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est un code de signaux, mais justement pas identique au langage humain."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p01_q1",
          "type": "mcq",
          "prompt": "Quelle affirmation sur le langage est juste ?",
          "options": [
            "Le langage est un simple cri instinctif",
            "Le langage n'existe que par écrit",
            "Le langage est un système de signes pour exprimer et communiquer la pensée",
            "Le langage est un code fixe de signaux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le langage repose sur des signes et exprime la pensée."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p01_q2",
          "type": "mcq",
          "prompt": "Que permet la danse en huit des abeilles selon von Frisch ?",
          "options": [
            "Indiquer la direction et la distance du butin",
            "Raconter une histoire",
            "Poser une question",
            "Exprimer une opinion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La danse transmet une information précise sur la nourriture."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p01_q3",
          "type": "mcq",
          "prompt": "Comment Benveniste qualifie-t-il la communication des abeilles ?",
          "options": [
            "Un langage complet",
            "Une langue écrite",
            "Un dialogue",
            "Un code de signaux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les signaux transmettent un message, mais sans échange."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p01_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce qui caractérise le langage humain, contrairement au code animal ?",
          "options": [
            "Il est fixe et instinctif",
            "Il est un dialogue qui appelle une réponse",
            "Il ne transmet qu'un seul message",
            "Il ne varie jamais"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'homme répond par un autre message ; l'animal réagit par une conduite."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p01_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations est vraie ?",
          "options": [
            "Le chien parle comme l'homme",
            "La capacité linguistique appartient en propre à l'homme",
            "Les abeilles dialoguent entre elles",
            "Tous les vivants ont un langage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Communiquer n'est pas parler."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p01_q6",
          "type": "mcq",
          "prompt": "L'affirmation « La communication animale est un code de signaux identique au langage humain » est…",
          "options": [
            "Vraie",
            "Vraie seulement pour les abeilles",
            "Vraie seulement pour les chiens",
            "Fausse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est un code de signaux, mais justement pas identique au langage humain."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p02",
      "order": 2,
      "title": "Le signe linguistique et les fonctions du langage",
      "summary": "Saussure, l'arbitraire du signe, les fonctions du langage, son fondement culturel.",
      "conceptExplanation": "Pour Ferdinand de Saussure (Cours de linguistique générale), le signe linguistique unit un signifiant (la forme sonore ou écrite) et un signifié (le concept). « Le lien unissant le signifiant au signifié est arbitraire » : il est conventionnel.\nLe langage a plusieurs fonctions : communiquer, exprimer, agir sur autrui (fonction conative), créer de la beauté (fonction esthétique), donner un pouvoir aux mots (fonction magique).\nLe langage est culturel : les enfants sauvages (Lucien Malson) privés de société ne parlent pas.",
      "keyRule": "Signe = signifiant + signifié, unis de façon arbitraire. Le langage s'apprend en société.",
      "formulas": [],
      "workedExample": {
        "title": "Un même animal, plusieurs mots",
        "statement": "Le même animal se dit « chien » en français et « dog » en anglais. Que montre cet exemple ?",
        "methodSteps": [
          "Le concept (signifié) est le même.",
          "La forme sonore (signifiant) change selon la langue."
        ],
        "conclusion": "Le lien entre le mot et le concept est arbitraire, fixé par convention."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Signifiant et signifié",
          "stepTheme": "Signifiant et signifié",
          "stepBadge": "Signifiant et signifié",
          "paragraphText": "Saussure (Cours de linguistique générale) :\n• signifiant : la forme du signe (les sons, les lettres) ;\n• signifié : le concept, l'idée associée.\nLe signe linguistique unit les deux.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p02_q1",
            "type": "mcq",
            "prompt": "Dans le mot « arbre », qu'est-ce que le signifié ?",
            "options": [
              "Le concept d'arbre",
              "Les sons du mot",
              "Les lettres a-r-b-r-e",
              "L'arbre réel dans la cour"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le signifié est l'idée ; le signifiant est la forme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'arbitraire du signe",
          "stepTheme": "L'arbitraire du signe",
          "stepBadge": "L'arbitraire du signe",
          "paragraphText": "Saussure : « Le lien unissant le signifiant au signifié est arbitraire ».\nRien dans les sons du mot « chien » ne ressemble à un chien : c'est une convention de la communauté.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p02_q2",
            "type": "mcq",
            "prompt": "Que signifie « le signe est arbitraire » ?",
            "options": [
              "Chacun choisit ses mots comme il veut",
              "Les mots imitent les choses",
              "Le lien entre le mot et le concept est conventionnel",
              "Le langage est naturel"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Arbitraire = non motivé, fixé par l'usage collectif, pas par chaque individu."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les fonctions du langage",
          "stepTheme": "Les fonctions du langage",
          "stepBadge": "Les fonctions du langage",
          "paragraphText": "Le langage ne sert pas qu'à communiquer :\n• fonction expressive : exprimer ses émotions ;\n• fonction conative : agir sur autrui (ordonner, convaincre) ;\n• fonction esthétique : la beauté de la poésie ;\n• fonction magique : les mots semblent agir sur les choses.\nGeorges Mounin (Clefs pour la linguistique) souligne cette distinction des fonctions.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p02_q3",
            "type": "mcq",
            "prompt": "Quand un professeur dit « Fermez vos cahiers ! », quelle fonction du langage domine ?",
            "options": [
              "La fonction esthétique",
              "La fonction magique",
              "La fonction expressive",
              "La fonction conative"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Conative : on cherche à agir sur l'interlocuteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Un fait culturel",
          "stepTheme": "Un fait culturel",
          "stepBadge": "Un fait culturel",
          "paragraphText": "Les enfants sauvages étudiés par Lucien Malson (Les enfants sauvages), grandis hors de la société, ne parlent pas.\nLe langage n'est donc pas inné : il s'acquiert dans un groupe culturel.\nHenry Duméry : « Tout le passé culturel est inhérent à l'acquis linguistique d'un peuple ».",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p02_q4",
            "type": "mcq",
            "prompt": "Que montre l'exemple des enfants sauvages ?",
            "options": [
              "Le langage est inné",
              "Les animaux apprennent à parler",
              "Le langage s'acquiert en société",
              "Le langage ne sert à rien"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sans société, pas de langage."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Langage naturel ou culturel ?",
          "stepTheme": "Langage naturel ou culturel ?",
          "stepBadge": "Langage naturel ou culturel ?",
          "paragraphText": "Lucrèce (De la nature) pensait que la nature pousse les hommes à émettre des sons.\nRousseau (Essai sur l'origine des langues) place l'origine des langues dans les passions plutôt que dans les besoins.\nLa linguistique moderne insiste sur l'apprentissage social.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p02_q5",
            "type": "mcq",
            "prompt": "Selon Rousseau, d'où viennent d'abord les langues ?",
            "options": [
              "Des seuls calculs",
              "Des passions",
              "D'une invention technique",
              "Des machines"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour Rousseau, ce sont les passions qui ont arraché les premières voix."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Arbitraire ne veut pas dire libre",
          "stepTheme": "Arbitraire ne veut pas dire libre",
          "stepBadge": "Arbitraire ne veut pas dire libre",
          "paragraphText": "L'arbitraire du signe ne signifie pas que chacun peut changer les mots à sa guise.\nLe signe est imposé à l'individu par la communauté linguistique.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p02_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations est fausse ?",
            "options": [
              "Chaque individu peut changer librement le sens des mots",
              "Le signe est conventionnel",
              "Le signifiant varie selon les langues",
              "Le langage s'apprend en société"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La convention est collective, pas individuelle."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p02_q1",
          "type": "mcq",
          "prompt": "Dans le mot « arbre », qu'est-ce que le signifié ?",
          "options": [
            "Le concept d'arbre",
            "Les sons du mot",
            "Les lettres a-r-b-r-e",
            "L'arbre réel dans la cour"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le signifié est l'idée ; le signifiant est la forme."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p02_q2",
          "type": "mcq",
          "prompt": "Que signifie « le signe est arbitraire » ?",
          "options": [
            "Chacun choisit ses mots comme il veut",
            "Les mots imitent les choses",
            "Le lien entre le mot et le concept est conventionnel",
            "Le langage est naturel"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Arbitraire = non motivé, fixé par l'usage collectif, pas par chaque individu."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p02_q3",
          "type": "mcq",
          "prompt": "Quand un professeur dit « Fermez vos cahiers ! », quelle fonction du langage domine ?",
          "options": [
            "La fonction esthétique",
            "La fonction magique",
            "La fonction expressive",
            "La fonction conative"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Conative : on cherche à agir sur l'interlocuteur."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p02_q4",
          "type": "mcq",
          "prompt": "Que montre l'exemple des enfants sauvages ?",
          "options": [
            "Le langage est inné",
            "Les animaux apprennent à parler",
            "Le langage s'acquiert en société",
            "Le langage ne sert à rien"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sans société, pas de langage."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p02_q5",
          "type": "mcq",
          "prompt": "Selon Rousseau, d'où viennent d'abord les langues ?",
          "options": [
            "Des seuls calculs",
            "Des passions",
            "D'une invention technique",
            "Des machines"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour Rousseau, ce sont les passions qui ont arraché les premières voix."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p02_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations est fausse ?",
          "options": [
            "Chaque individu peut changer librement le sens des mots",
            "Le signe est conventionnel",
            "Le signifiant varie selon les langues",
            "Le langage s'apprend en société"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La convention est collective, pas individuelle."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p03",
      "order": 3,
      "title": "Le langage et la pensée",
      "summary": "Penser dans les mots : Descartes, Hegel, Merleau-Ponty, Boileau.",
      "conceptExplanation": "Pour Descartes, la parole manifeste la pensée : les animaux ne parlent pas parce qu'ils ne pensent pas.\nPour Hegel (Encyclopédie des sciences philosophiques, § 462), « c'est dans les mots que nous pensons » : le mot donne à la pensée son existence la plus haute et la plus vraie.\nMerleau-Ponty : il n'y a pas de pensée extérieure au langage.\nBoileau (Art poétique) : « Ce que l'on conçoit bien s'énonce clairement, et les mots pour le dire arrivent aisément ».\nPour Platon, la pensée est un dialogue intérieur de l'âme avec elle-même.",
      "keyRule": "Pensée et langage sont inséparables : on pense dans les mots.",
      "formulas": [],
      "workedExample": {
        "title": "L'idée qu'on n'arrive pas à dire",
        "statement": "Un élève dit : « Je sais, mais je n'arrive pas à l'expliquer. » Que répondrait Hegel ?",
        "methodSteps": [
          "Tant que la pensée n'a pas trouvé ses mots, elle reste vague.",
          "C'est en la formulant qu'on la rend claire."
        ],
        "conclusion": "Pour Hegel, une pensée qu'on ne peut pas dire n'est pas encore une pensée claire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Descartes : la parole signe de la pensée",
          "stepTheme": "Descartes : la parole signe de la pensée",
          "stepBadge": "Descartes : la parole signe de la pensée",
          "paragraphText": "Pour Descartes (Discours de la méthode, Ve partie), les animaux ne parlent pas parce qu'ils n'ont pas de pensée, et non parce qu'ils manquent d'organes.\nLa parole est le signe extérieur de la pensée.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p03_q1",
            "type": "mcq",
            "prompt": "Selon Descartes, pourquoi les animaux ne parlent-ils pas ?",
            "options": [
              "Parce qu'ils n'ont pas de pensée",
              "Parce qu'ils n'ont pas de bouche",
              "Parce qu'ils ne veulent pas",
              "Parce qu'ils n'ont pas de culture"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les perroquets profèrent des mots sans penser ce qu'ils disent."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Hegel : penser dans les mots",
          "stepTheme": "Hegel : penser dans les mots",
          "stepBadge": "Hegel : penser dans les mots",
          "paragraphText": "Hegel : « C'est dans les mots que nous pensons. […] Le mot donne à la pensée son existence la plus haute et la plus vraie ».\nLa pensée ne devient claire et consciente d'elle-même que par les mots.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p03_q2",
            "type": "mcq",
            "prompt": "Que signifie « c'est dans les mots que nous pensons » ?",
            "options": [
              "Les mots sont inutiles à la pensée",
              "La pensée prend forme et devient claire dans les mots",
              "On pense mieux sans langage",
              "Les mots trahissent toujours la pensée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour Hegel, l'ineffable n'est qu'une pensée obscure."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "La bonne source de Hegel",
          "stepTheme": "La bonne source de Hegel",
          "stepBadge": "La bonne source de Hegel",
          "paragraphText": "Le PDF situe cette citation dans la Phénoménologie de l'esprit.\nElle vient en réalité de l'Encyclopédie des sciences philosophiques (Philosophie de l'esprit, § 462). Au BAC, citez l'Encyclopédie.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p03_q3",
            "type": "mcq",
            "prompt": "Dans quelle œuvre Hegel écrit-il « C'est dans les mots que nous pensons » ?",
            "options": [
              "La Phénoménologie de l'esprit",
              "Le Discours de la méthode",
              "L'Encyclopédie des sciences philosophiques",
              "Le Cratyle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Paragraphe 462 de l'Encyclopédie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Boileau : bien concevoir",
          "stepTheme": "Boileau : bien concevoir",
          "stepBadge": "Boileau : bien concevoir",
          "paragraphText": "Boileau (Art poétique, chant I) : « Ce que l'on conçoit bien s'énonce clairement, et les mots pour le dire arrivent aisément ».\nSi l'on n'arrive pas à dire, c'est souvent qu'on a mal pensé.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p03_q4",
            "type": "mcq",
            "prompt": "Qui a écrit : « Ce que l'on conçoit bien s'énonce clairement » ?",
            "options": [
              "Hegel",
              "Hobbes",
              "Platon",
              "Boileau"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Vers de l'Art poétique, chant I."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Merleau-Ponty et le dialogue intérieur",
          "stepTheme": "Merleau-Ponty et le dialogue intérieur",
          "stepBadge": "Merleau-Ponty et le dialogue intérieur",
          "paragraphText": "Merleau-Ponty (Signes) : « Il n'y a pas de pensée extérieure au langage ».\nDéjà Platon (Théétète, Sophiste) définissait la pensée comme un dialogue intérieur et silencieux de l'âme avec elle-même.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p03_q5",
            "type": "mcq",
            "prompt": "Comment Platon définit-il la pensée ?",
            "options": [
              "Un code de signaux",
              "Une simple sensation",
              "Un dialogue intérieur de l'âme avec elle-même",
              "Un calcul de machine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Penser, c'est se parler à soi-même."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Deux citations mal attribuées",
          "stepTheme": "Deux citations mal attribuées",
          "stepBadge": "Deux citations mal attribuées",
          "paragraphText": "Le PDF commet deux erreurs :\n• « La pensée sans le langage n'est qu'une nébuleuse » n'est pas du peintre Delacroix : c'est l'idée de Saussure (Cours de linguistique générale), pour qui la pensée seule est « comme une nébuleuse ».\n• L'image du recto et du verso d'une même feuille vient aussi de Saussure, pas de Platon.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p03_q6",
            "type": "mcq",
            "prompt": "Qui compare la pensée sans le langage à une nébuleuse ?",
            "options": [
              "Delacroix",
              "Platon",
              "Boileau",
              "Saussure"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Saussure : la pensée et le son sont comme le recto et le verso d'une feuille."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p03_q1",
          "type": "mcq",
          "prompt": "Selon Descartes, pourquoi les animaux ne parlent-ils pas ?",
          "options": [
            "Parce qu'ils n'ont pas de pensée",
            "Parce qu'ils n'ont pas de bouche",
            "Parce qu'ils ne veulent pas",
            "Parce qu'ils n'ont pas de culture"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les perroquets profèrent des mots sans penser ce qu'ils disent."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p03_q2",
          "type": "mcq",
          "prompt": "Que signifie « c'est dans les mots que nous pensons » ?",
          "options": [
            "Les mots sont inutiles à la pensée",
            "La pensée prend forme et devient claire dans les mots",
            "On pense mieux sans langage",
            "Les mots trahissent toujours la pensée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour Hegel, l'ineffable n'est qu'une pensée obscure."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p03_q3",
          "type": "mcq",
          "prompt": "Dans quelle œuvre Hegel écrit-il « C'est dans les mots que nous pensons » ?",
          "options": [
            "La Phénoménologie de l'esprit",
            "Le Discours de la méthode",
            "L'Encyclopédie des sciences philosophiques",
            "Le Cratyle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Paragraphe 462 de l'Encyclopédie."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p03_q4",
          "type": "mcq",
          "prompt": "Qui a écrit : « Ce que l'on conçoit bien s'énonce clairement » ?",
          "options": [
            "Hegel",
            "Hobbes",
            "Platon",
            "Boileau"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Vers de l'Art poétique, chant I."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p03_q5",
          "type": "mcq",
          "prompt": "Comment Platon définit-il la pensée ?",
          "options": [
            "Un code de signaux",
            "Une simple sensation",
            "Un dialogue intérieur de l'âme avec elle-même",
            "Un calcul de machine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Penser, c'est se parler à soi-même."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p03_q6",
          "type": "mcq",
          "prompt": "Qui compare la pensée sans le langage à une nébuleuse ?",
          "options": [
            "Delacroix",
            "Platon",
            "Boileau",
            "Saussure"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Saussure : la pensée et le son sont comme le recto et le verso d'une feuille."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p04",
      "order": 4,
      "title": "Les critères de la vérité",
      "summary": "Vérité et réalité, unanimité, évidence, cohérence, efficacité.",
      "conceptExplanation": "La vérité n'est pas la réalité : c'est l'accord de la pensée avec la réalité (Thomas d'Aquin ; Kant, Critique de la raison pure : « l'accord de la connaissance avec son objet »). Un faux billet est réel, mais faux.\nCritères proposés :\n• l'unanimité : ce que tous admettent ;\n• l'évidence : l'idée claire et distincte (Descartes ; Spinoza : « qui a une idée vraie sait en même temps qu'il a une idée vraie ») ;\n• la cohérence logique dans les sciences formelles ;\n• l'efficacité : pour William James (Le pragmatisme), le vrai est « ce qui est avantageux pour notre pensée ».",
      "keyRule": "La vérité est un accord entre la pensée et le réel, pas le réel lui-même.",
      "formulas": [],
      "workedExample": {
        "title": "Le faux billet de 10 000 F",
        "statement": "Un faux billet de 10 000 F existe bel et bien dans votre main. Est-il vrai ?",
        "methodSteps": [
          "Il est réel : on peut le toucher.",
          "Mais il ne correspond pas à ce qu'il prétend être : un billet émis par la banque centrale."
        ],
        "conclusion": "Réel ne veut pas dire vrai : la vérité est un accord, pas une simple existence."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La vérité comme accord",
          "stepTheme": "La vérité comme accord",
          "stepBadge": "La vérité comme accord",
          "paragraphText": "• Vérité : accord de la pensée (ou du discours) avec la réalité.\nThomas d'Aquin : adéquation de l'intelligence et de la chose.\nKant (Critique de la raison pure) admet la « définition nominale » de la vérité : « l'accord de la connaissance avec son objet ».",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p04_q1",
            "type": "mcq",
            "prompt": "Quelle définition de la vérité Kant admet-il ?",
            "options": [
              "L'accord de la connaissance avec son objet",
              "Ce que tout le monde pense",
              "Ce qui est utile",
              "Ce qui est ancien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la vérité-correspondance."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Vrai n'est pas réel",
          "stepTheme": "Vrai n'est pas réel",
          "stepBadge": "Vrai n'est pas réel",
          "paragraphText": "Le PDF écrit que Kant « exige que la vérité soit synonyme de réalité ». C'est trop rapide.\nLa vérité est un accord entre une pensée et la réalité ; ce n'est pas la réalité elle-même. Ce sont nos jugements qui sont vrais ou faux, pas les choses.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p04_q2",
            "type": "mcq",
            "prompt": "Pourquoi un faux billet montre-t-il que vérité et réalité sont différentes ?",
            "options": [
              "Il n'existe pas",
              "Il est réel mais ne correspond pas à ce qu'il prétend être",
              "Il est vrai parce qu'on peut le toucher",
              "Il est faux parce qu'il est en papier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le faux billet existe, mais il est faux."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'unanimité",
          "stepTheme": "L'unanimité",
          "stepBadge": "L'unanimité",
          "paragraphText": "Pour le sens commun, ce que tout le monde admet est vrai : « tout le monde ne peut pas se tromper ».\nMais ce critère conduit au conformisme et au suivisme : l'opinion majoritaire peut se tromper (on a longtemps cru que le Soleil tournait autour de la Terre).",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p04_q3",
            "type": "mcq",
            "prompt": "Pourquoi l'unanimité est-elle un critère fragile ?",
            "options": [
              "Parce que personne n'est jamais d'accord",
              "Parce que tout le monde peut se tromper en même temps",
              "Parce qu'elle est démontrée",
              "Parce qu'elle est toujours scientifique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'accord de tous ne prouve pas le vrai."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'évidence",
          "stepTheme": "L'évidence",
          "stepBadge": "L'évidence",
          "paragraphText": "Pour Descartes, est vrai ce qui se présente à l'esprit « clairement et distinctement ».\nSpinoza (Éthique, II) : « Qui a une idée vraie sait en même temps qu'il a une idée vraie et ne peut douter de la vérité de la chose » : la vérité est à elle-même son propre critère.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p04_q4",
            "type": "mcq",
            "prompt": "Selon Descartes, quelle idée est vraie ?",
            "options": [
              "Celle qui se présente clairement et distinctement à l'esprit",
              "Celle que la majorité admet",
              "Celle qui rapporte de l'argent",
              "Celle qu'on a toujours entendue"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le critère cartésien est l'évidence rationnelle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La cohérence et l'efficacité",
          "stepTheme": "La cohérence et l'efficacité",
          "stepBadge": "La cohérence et l'efficacité",
          "paragraphText": "Dans les sciences formelles (logique, mathématiques), le vrai dépend de la cohérence : l'accord de la pensée avec elle-même.\nPour William James (Le pragmatisme), le vrai est « ce qui est avantageux pour notre pensée » : ce qui réussit, ce qui « paie ».",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p04_q5",
            "type": "mcq",
            "prompt": "Pour William James, qu'est-ce que le vrai ?",
            "options": [
              "Ce qui est évident",
              "Ce que tous admettent",
              "Ce qui est arbitraire",
              "Ce qui est avantageux pour notre pensée, ce qui réussit"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le critère pragmatique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Source de la phrase de Descartes",
          "stepTheme": "Source de la phrase de Descartes",
          "stepBadge": "Source de la phrase de Descartes",
          "paragraphText": "« La vérité est une notion si transcendantalement claire qu'il est impossible de l'ignorer » ne vient pas du Discours de la méthode, comme le dit le PDF.\nDescartes l'écrit dans une lettre à Mersenne du 16 octobre 1639.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p04_q6",
            "type": "mcq",
            "prompt": "Où Descartes écrit-il que la vérité est une notion « si transcendantalement claire qu'il est impossible de l'ignorer » ?",
            "options": [
              "Dans le Discours de la méthode",
              "Dans l'Éthique",
              "Dans une lettre à Mersenne de 1639",
              "Dans le Léviathan"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Citer la bonne source évite de perdre des points."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p04_q1",
          "type": "mcq",
          "prompt": "Quelle définition de la vérité Kant admet-il ?",
          "options": [
            "L'accord de la connaissance avec son objet",
            "Ce que tout le monde pense",
            "Ce qui est utile",
            "Ce qui est ancien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la vérité-correspondance."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p04_q2",
          "type": "mcq",
          "prompt": "Pourquoi un faux billet montre-t-il que vérité et réalité sont différentes ?",
          "options": [
            "Il n'existe pas",
            "Il est réel mais ne correspond pas à ce qu'il prétend être",
            "Il est vrai parce qu'on peut le toucher",
            "Il est faux parce qu'il est en papier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le faux billet existe, mais il est faux."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p04_q3",
          "type": "mcq",
          "prompt": "Pourquoi l'unanimité est-elle un critère fragile ?",
          "options": [
            "Parce que personne n'est jamais d'accord",
            "Parce que tout le monde peut se tromper en même temps",
            "Parce qu'elle est démontrée",
            "Parce qu'elle est toujours scientifique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'accord de tous ne prouve pas le vrai."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p04_q4",
          "type": "mcq",
          "prompt": "Selon Descartes, quelle idée est vraie ?",
          "options": [
            "Celle qui se présente clairement et distinctement à l'esprit",
            "Celle que la majorité admet",
            "Celle qui rapporte de l'argent",
            "Celle qu'on a toujours entendue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le critère cartésien est l'évidence rationnelle."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p04_q5",
          "type": "mcq",
          "prompt": "Pour William James, qu'est-ce que le vrai ?",
          "options": [
            "Ce qui est évident",
            "Ce que tous admettent",
            "Ce qui est arbitraire",
            "Ce qui est avantageux pour notre pensée, ce qui réussit"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le critère pragmatique."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p04_q6",
          "type": "mcq",
          "prompt": "Où Descartes écrit-il que la vérité est une notion « si transcendantalement claire qu'il est impossible de l'ignorer » ?",
          "options": [
            "Dans le Discours de la méthode",
            "Dans l'Éthique",
            "Dans une lettre à Mersenne de 1639",
            "Dans le Léviathan"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Citer la bonne source évite de perdre des points."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p05",
      "order": 5,
      "title": "La relativité de la vérité",
      "summary": "Protagoras, Pyrrhon, Pascal, Bachelard : la vérité est-elle absolue ?",
      "conceptExplanation": "Pour le sophiste Protagoras, « l'homme est la mesure de toutes choses » : chacun a sa vérité.\nLe sceptique Pyrrhon d'Élis doute de tout et pratique l'épochè, la suspension du jugement.\nPascal (Pensées) : « Vérité au-deçà des Pyrénées, erreur au-delà ».\nEn science aussi, la vérité évolue : pour Bachelard, « il n'y a pas de vérité première, il n'y a que des erreurs premières ». Toute vérité scientifique est provisoire.\nL'hypothèse, selon Claude Bernard, est une réponse anticipée que l'expérience doit vérifier.",
      "keyRule": "La vérité dépend souvent du lieu, de l'époque et de l'état des connaissances.",
      "formulas": [],
      "workedExample": {
        "title": "Le Soleil et la Terre",
        "statement": "Pendant des siècles, on a tenu pour vrai que le Soleil tournait autour de la Terre. Que montre ce changement ?",
        "methodSteps": [
          "Une vérité admise à une époque a été corrigée (Copernic, Galilée).",
          "La science avance en rectifiant ses erreurs."
        ],
        "conclusion": "La vérité scientifique d'aujourd'hui peut être l'erreur de demain."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'homme mesure de toutes choses",
          "stepTheme": "L'homme mesure de toutes choses",
          "stepBadge": "L'homme mesure de toutes choses",
          "paragraphText": "Protagoras d'Abdère, sophiste du Ve siècle av. J.-C. : « L'homme est la mesure de toutes choses ».\nLa vérité dépend de chacun : ce qui me paraît vrai est vrai pour moi.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p05_q1",
            "type": "mcq",
            "prompt": "Que signifie la formule de Protagoras « L'homme est la mesure de toutes choses » ?",
            "options": [
              "L'homme mesure les objets avec une règle",
              "La vérité est la même pour tous",
              "La vérité dépend de chaque homme",
              "Seul Dieu connaît la vérité"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le relativisme : chacun sa vérité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le scepticisme",
          "stepTheme": "Le scepticisme",
          "stepBadge": "Le scepticisme",
          "paragraphText": "• Scepticisme : doctrine selon laquelle il n'existe pas de vérité objective certaine.\nPyrrhon d'Élis (IVe-IIIe siècle av. J.-C.) doute de tout et pratique l'épochè : la suspension du jugement.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p05_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'épochè des sceptiques ?",
            "options": [
              "La suspension du jugement",
              "L'évidence claire et distincte",
              "Le juste milieu",
              "La danse des abeilles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sceptique ne dit ni oui ni non."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Vérité selon le lieu",
          "stepTheme": "Vérité selon le lieu",
          "stepBadge": "Vérité selon le lieu",
          "paragraphText": "Pascal (Pensées) : « Plaisante justice qu'une rivière borne ! Vérité au-deçà des Pyrénées, erreur au-delà ».\nCe qui est tenu pour vrai change d'un pays à l'autre.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p05_q3",
            "type": "mcq",
            "prompt": "Que veut montrer Pascal avec « Vérité au-deçà des Pyrénées, erreur au-delà » ?",
            "options": [
              "Les Pyrénées sont une frontière naturelle",
              "La vérité est universelle",
              "La géographie est une science exacte",
              "Ce qu'on tient pour vrai varie selon les lieux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La coutume fait varier les vérités humaines."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Des erreurs premières",
          "stepTheme": "Des erreurs premières",
          "stepBadge": "Des erreurs premières",
          "paragraphText": "Bachelard : « Il n'y a pas de vérité première, il n'y a que des erreurs premières ».\nLa science progresse en corrigeant ses erreurs : une vérité scientifique est toujours provisoire.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p05_q4",
            "type": "mcq",
            "prompt": "Selon Bachelard, comment la science progresse-t-elle ?",
            "options": [
              "En partant de vérités absolues",
              "En corrigeant ses erreurs",
              "En refusant toute hypothèse",
              "En suivant l'opinion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La vérité scientifique est une erreur rectifiée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'hypothèse du savant",
          "stepTheme": "L'hypothèse du savant",
          "stepBadge": "L'hypothèse du savant",
          "paragraphText": "Pour Claude Bernard (Introduction à l'étude de la médecine expérimentale), l'hypothèse est une réponse anticipée : une idée du savant que l'expérience doit confirmer ou infirmer.\nLe sujet intervient donc dans la construction du vrai.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p05_q5",
            "type": "mcq",
            "prompt": "Selon Claude Bernard, qu'est-ce que l'hypothèse ?",
            "options": [
              "Une vérité définitive",
              "Une réponse anticipée que l'expérience doit vérifier",
              "Une croyance religieuse",
              "Un mythe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'hypothèse précède l'expérience et doit être vérifiée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le sceptique ne fait pas confiance au savant",
          "stepTheme": "Le sceptique ne fait pas confiance au savant",
          "stepBadge": "Le sceptique ne fait pas confiance au savant",
          "paragraphText": "Au vrai ou faux : « Pour le scepticisme, il n'existe pas de vérités objectives » est vrai.\nMais « La vérité dépend de ce que dit le savant, sans vérification » est faux : même en science, une affirmation doit être vérifiée.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p05_q6",
            "type": "mcq",
            "prompt": "Au vrai ou faux, quelle affirmation sur la vérité est fausse ?",
            "options": [
              "Pour le scepticisme, il n'existe pas de vérités objectives",
              "La vérité scientifique est provisoire",
              "Pyrrhon suspend son jugement",
              "La vérité dépend de ce que dit le savant, sans vérification"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une vérité scientifique se vérifie ; elle ne s'impose pas par l'autorité."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p05_q1",
          "type": "mcq",
          "prompt": "Que signifie la formule de Protagoras « L'homme est la mesure de toutes choses » ?",
          "options": [
            "L'homme mesure les objets avec une règle",
            "La vérité est la même pour tous",
            "La vérité dépend de chaque homme",
            "Seul Dieu connaît la vérité"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le relativisme : chacun sa vérité."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p05_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'épochè des sceptiques ?",
          "options": [
            "La suspension du jugement",
            "L'évidence claire et distincte",
            "Le juste milieu",
            "La danse des abeilles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sceptique ne dit ni oui ni non."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p05_q3",
          "type": "mcq",
          "prompt": "Que veut montrer Pascal avec « Vérité au-deçà des Pyrénées, erreur au-delà » ?",
          "options": [
            "Les Pyrénées sont une frontière naturelle",
            "La vérité est universelle",
            "La géographie est une science exacte",
            "Ce qu'on tient pour vrai varie selon les lieux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La coutume fait varier les vérités humaines."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p05_q4",
          "type": "mcq",
          "prompt": "Selon Bachelard, comment la science progresse-t-elle ?",
          "options": [
            "En partant de vérités absolues",
            "En corrigeant ses erreurs",
            "En refusant toute hypothèse",
            "En suivant l'opinion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La vérité scientifique est une erreur rectifiée."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p05_q5",
          "type": "mcq",
          "prompt": "Selon Claude Bernard, qu'est-ce que l'hypothèse ?",
          "options": [
            "Une vérité définitive",
            "Une réponse anticipée que l'expérience doit vérifier",
            "Une croyance religieuse",
            "Un mythe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'hypothèse précède l'expérience et doit être vérifiée."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p05_q6",
          "type": "mcq",
          "prompt": "Au vrai ou faux, quelle affirmation sur la vérité est fausse ?",
          "options": [
            "Pour le scepticisme, il n'existe pas de vérités objectives",
            "La vérité scientifique est provisoire",
            "Pyrrhon suspend son jugement",
            "La vérité dépend de ce que dit le savant, sans vérification"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une vérité scientifique se vérifie ; elle ne s'impose pas par l'autorité."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p06",
      "order": 6,
      "title": "Le pouvoir et les limites du langage",
      "summary": "Hobbes, Lavelle, Bergson, Locke, Wittgenstein : le langage dit-il le vrai ?",
      "conceptExplanation": "Le langage est le lieu de la vérité : pour Hobbes (Léviathan), « là où il n'y a pas de langage, il n'y a ni vérité ni fausseté ». Pour Louis Lavelle (La Parole et l'Écriture), le langage n'est pas le vêtement de la pensée, mais son corps.\nMais il a des limites : pour Bergson (Essai sur les données immédiates de la conscience), les mots, généraux et impersonnels, échouent à traduire ce que notre âme ressent. Diderot : « nous avons plus d'idées que de mots ».\nLe langage peut tromper : imperfections (Locke), lapsus (Freud), rhétorique des sophistes. Wittgenstein (Tractatus) : « Ce dont on ne peut parler, il faut le taire ».",
      "keyRule": "Le langage permet de dire le vrai, mais il peut aussi trahir ou tromper.",
      "formulas": [],
      "workedExample": {
        "title": "Dire sa tristesse",
        "statement": "Deux élèves disent « je suis triste ». Ressentent-ils exactement la même chose ?",
        "methodSteps": [
          "Le mot « triste » est le même pour tous.",
          "Mais chaque tristesse est unique et personnelle."
        ],
        "conclusion": "Comme le dit Bergson, le mot général manque la nuance du vécu."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Pas de vérité sans langage",
          "stepTheme": "Pas de vérité sans langage",
          "stepBadge": "Pas de vérité sans langage",
          "paragraphText": "Hobbes (Léviathan, chapitre 4) : « Là où il n'y a pas de langage, il n'y a ni vérité ni fausseté ».\nLe vrai et le faux sont des propriétés de nos énoncés, pas des choses.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p06_q1",
            "type": "mcq",
            "prompt": "Qui a écrit : « Là où il n'y a pas de langage, il n'y a ni vérité ni fausseté » ?",
            "options": [
              "Hobbes",
              "Bergson",
              "Locke",
              "Wittgenstein"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour Hobbes, la vérité est un attribut du discours."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le corps de la pensée",
          "stepTheme": "Le corps de la pensée",
          "stepBadge": "Le corps de la pensée",
          "paragraphText": "Louis Lavelle (La Parole et l'Écriture) : « Le langage n'est pas, comme on le croit souvent, le simple vêtement de la pensée, il en est le corps véritable ».\nUne pensée inexprimée est une pensée indéterminée.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p06_q2",
            "type": "mcq",
            "prompt": "Pour Lavelle, qu'est-ce que le langage pour la pensée ?",
            "options": [
              "Un simple vêtement",
              "Un obstacle",
              "Son corps véritable",
              "Un code de signaux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On ne peut pas séparer la pensée de son expression."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'ineffable selon Bergson",
          "stepTheme": "L'ineffable selon Bergson",
          "stepBadge": "L'ineffable selon Bergson",
          "paragraphText": "Bergson (Essai sur les données immédiates de la conscience) : « Nous échouons à traduire entièrement ce que notre âme ressent : la pensée demeure incommensurable avec le langage ».\nLes mots sont généraux et impersonnels ; nos sentiments sont uniques et continus.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p06_q3",
            "type": "mcq",
            "prompt": "Pourquoi, selon Bergson, le langage échoue-t-il à dire nos sentiments ?",
            "options": [
              "Parce que nous n'avons pas de sentiments",
              "Parce que les mots sont trop précis",
              "Parce que la pensée est plus petite que le langage",
              "Parce que les mots sont généraux alors que nos sentiments sont uniques"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La pensée est « incommensurable » avec le langage."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Compléter les phrases",
          "stepTheme": "Compléter les phrases",
          "stepBadge": "Compléter les phrases",
          "paragraphText": "Retenez les trois idées de Bergson :\n• « Le langage » nous trompera parfois sur le caractère de la sensation éprouvée ;\n• la pensée demeure « incommensurable » avec le langage ;\n• le langage appauvrit « le sentiment », lui fait perdre son originalité.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p06_q4",
            "type": "mcq",
            "prompt": "Quel mot complète : « La pensée demeure … avec le langage » ?",
            "options": [
              "identique",
              "confondue",
              "incommensurable",
              "inutile"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Incommensurable : sans commune mesure."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les imperfections du langage",
          "stepTheme": "Les imperfections du langage",
          "stepBadge": "Les imperfections du langage",
          "paragraphText": "Locke (Essai sur l'entendement humain, livre III) : sans les imperfections du langage, beaucoup de controverses cesseraient d'elles-mêmes.\nLe lapsus (Freud) fait dire autre chose que ce qu'on veut dire ; les sophistes utilisaient la rhétorique pour défendre des contre-vérités.\nWittgenstein (Tractatus) : « Ce dont on ne peut parler, il faut le taire ».",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p06_q5",
            "type": "mcq",
            "prompt": "Selon Locke, qu'est-ce qui cause beaucoup de controverses inutiles ?",
            "options": [
              "L'excès de science",
              "Les imperfections du langage",
              "La danse des abeilles",
              "Le progrès technique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Des mots mal définis créent de faux débats."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une citation donnée à deux auteurs",
          "stepTheme": "Une citation donnée à deux auteurs",
          "stepBadge": "Une citation donnée à deux auteurs",
          "paragraphText": "Le PDF attribue d'abord « Le langage nous trompera parfois » à Locke, puis la même phrase à Bergson.\nC'est Bergson qui écrit : « le langage nous trompera parfois sur le caractère de la sensation éprouvée ». De Locke, retenez plutôt les « imperfections du langage ».",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p06_q6",
            "type": "mcq",
            "prompt": "Qui écrit que le langage « nous trompera parfois sur le caractère de la sensation éprouvée » ?",
            "options": [
              "Bergson",
              "Locke",
              "Hobbes",
              "Lavelle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ne pas mélanger les deux auteurs."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p06_q1",
          "type": "mcq",
          "prompt": "Qui a écrit : « Là où il n'y a pas de langage, il n'y a ni vérité ni fausseté » ?",
          "options": [
            "Hobbes",
            "Bergson",
            "Locke",
            "Wittgenstein"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour Hobbes, la vérité est un attribut du discours."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p06_q2",
          "type": "mcq",
          "prompt": "Pour Lavelle, qu'est-ce que le langage pour la pensée ?",
          "options": [
            "Un simple vêtement",
            "Un obstacle",
            "Son corps véritable",
            "Un code de signaux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On ne peut pas séparer la pensée de son expression."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p06_q3",
          "type": "mcq",
          "prompt": "Pourquoi, selon Bergson, le langage échoue-t-il à dire nos sentiments ?",
          "options": [
            "Parce que nous n'avons pas de sentiments",
            "Parce que les mots sont trop précis",
            "Parce que la pensée est plus petite que le langage",
            "Parce que les mots sont généraux alors que nos sentiments sont uniques"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La pensée est « incommensurable » avec le langage."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p06_q4",
          "type": "mcq",
          "prompt": "Quel mot complète : « La pensée demeure … avec le langage » ?",
          "options": [
            "identique",
            "confondue",
            "incommensurable",
            "inutile"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Incommensurable : sans commune mesure."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p06_q5",
          "type": "mcq",
          "prompt": "Selon Locke, qu'est-ce qui cause beaucoup de controverses inutiles ?",
          "options": [
            "L'excès de science",
            "Les imperfections du langage",
            "La danse des abeilles",
            "Le progrès technique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Des mots mal définis créent de faux débats."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p06_q6",
          "type": "mcq",
          "prompt": "Qui écrit que le langage « nous trompera parfois sur le caractère de la sensation éprouvée » ?",
          "options": [
            "Bergson",
            "Locke",
            "Hobbes",
            "Lavelle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ne pas mélanger les deux auteurs."
        }
      ]
    },
    {
      "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p07",
      "order": 7,
      "title": "Méthode : textes et sujets du BAC",
      "summary": "Parler, est-ce dire le vrai ? La cohérence suffit-elle ? Le texte de Kant.",
      "conceptExplanation": "Sujet « Parler, est-ce ne dire que la vérité ? » : problème, le langage exprime-t-il essentiellement le vrai ? Axe 1 : oui, on pense dans les mots (Hegel). Axe 2 : la parole est lacunaire et peut tromper (Bergson, sophistes, lapsus).\nSujet « Une pensée cohérente est-elle nécessairement vraie ? » : la cohérence garantit la vérité formelle, pas la vérité du contenu.\nTexte de Kant (Critique de la raison pure) : toute notre connaissance commence avec l'expérience, mais elle ne dérive pas toute de l'expérience.",
      "keyRule": "Cohérent ne veut pas dire vrai : il faut aussi l'accord avec le réel.",
      "formulas": [],
      "workedExample": {
        "title": "Un raisonnement valide mais faux",
        "statement": "« Tous les poissons volent ; le capitaine est un poisson ; donc le capitaine vole. » Ce raisonnement est-il cohérent ? Est-il vrai ?",
        "methodSteps": [
          "La forme est correcte : la conclusion découle des prémisses.",
          "Mais les prémisses sont fausses."
        ],
        "conclusion": "Une pensée peut être cohérente et fausse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Parler, est-ce ne dire que la vérité ?",
          "stepTheme": "Parler, est-ce ne dire que la vérité ?",
          "stepBadge": "Parler, est-ce ne dire que la vérité ?",
          "paragraphText": "• Parler : faire usage de la parole, communiquer par des mots.\n• Ne dire que : n'exprimer que.\n• La vérité : adéquation de la pensée avec elle-même et avec le réel.\nProblème : le langage exprime-t-il essentiellement le vrai ?",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p07_q1",
            "type": "mcq",
            "prompt": "Quel est le problème du sujet « Parler, est-ce ne dire que la vérité ? » ?",
            "options": [
              "Le langage exprime-t-il essentiellement le vrai ?",
              "Faut-il se taire ?",
              "Les animaux parlent-ils ?",
              "Qu'est-ce que la technique ?"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sujet interroge le lien entre parole et vérité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les deux axes",
          "stepTheme": "Les deux axes",
          "stepBadge": "Les deux axes",
          "paragraphText": "Axe 1 : le langage exprime le vrai. On pense dans les mots (Hegel) ; les mots donnent sens aux choses.\nAxe 2 : la parole est lacunaire. Elle échoue à tout dire (Bergson) et peut tromper (rhétorique des sophistes, lapsus chez Freud).",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p07_q2",
            "type": "mcq",
            "prompt": "Quelle référence convient à l'axe « la parole peut tromper » ?",
            "options": [
              "Hegel : c'est dans les mots que nous pensons",
              "La rhétorique des sophistes",
              "Boileau : ce que l'on conçoit bien s'énonce clairement",
              "Hobbes : pas de vérité sans langage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les sophistes défendaient le faux avec habileté."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "« Qui connaît les mots connaît les choses »",
          "stepTheme": "« Qui connaît les mots connaît les choses »",
          "stepBadge": "« Qui connaît les mots connaît les choses »",
          "paragraphText": "Le PDF donne cette phrase comme la thèse de Platon dans le Cratyle.\nEn réalité, dans le dialogue, c'est le personnage de Cratyle qui la soutient ; Socrate la discute et conclut qu'il vaut mieux connaître les choses par elles-mêmes que par les noms.\nCitez donc le Cratyle de Platon, en précisant que la thèse y est critiquée.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p07_q3",
            "type": "mcq",
            "prompt": "Dans le Cratyle, que conclut Socrate sur la connaissance par les noms ?",
            "options": [
              "Que connaître les mots suffit pour connaître les choses",
              "Que les mots sont toujours vrais",
              "Qu'il vaut mieux connaître les choses par elles-mêmes que par les noms",
              "Que les noms sont inutiles pour parler"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Platon se méfie de la connaissance par les seuls mots."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Cohérence et vérité",
          "stepTheme": "Cohérence et vérité",
          "stepBadge": "Cohérence et vérité",
          "paragraphText": "Une pensée cohérente est une pensée sans contradiction, logique (Arnauld et Nicole, Logique de Port-Royal : « l'art de bien conduire sa raison »).\nElle garantit la vérité formelle (accord de la pensée avec elle-même), pas la vérité matérielle (accord avec le réel).",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p07_q4",
            "type": "mcq",
            "prompt": "Que garantit la cohérence d'un raisonnement ?",
            "options": [
              "La vérité absolue de sa conclusion",
              "Rien du tout",
              "L'accord de tous les hommes",
              "Sa vérité formelle, pas forcément la vérité de son contenu"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un syllogisme valide peut partir de prémisses fausses."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le texte de Kant",
          "stepTheme": "Le texte de Kant",
          "stepBadge": "Le texte de Kant",
          "paragraphText": "Kant (Critique de la raison pure, introduction) : « Que toute notre connaissance commence avec l'expérience, cela ne soulève aucun doute ». Mais « si toute notre connaissance débute avec l'expérience, cela ne prouve pas qu'elle dérive toute de l'expérience » : l'esprit y ajoute ses propres formes a priori.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p07_q5",
            "type": "mcq",
            "prompt": "Dans l'introduction de la Critique de la raison pure, Kant écrit : « Si toute notre connaissance débute avec l'expérience, cela ne prouve pas qu'elle dérive toute de l'expérience. » Quelle est sa thèse ?",
            "options": [
              "La connaissance vient uniquement de l'expérience",
              "La connaissance vient uniquement de la raison",
              "La connaissance commence avec l'expérience mais ne dérive pas toute de l'expérience",
              "La connaissance est impossible"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Kant unit l'expérience (empirisme) et l'esprit (rationalisme)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Situer Kant dans le débat",
          "stepTheme": "Situer Kant dans le débat",
          "stepBadge": "Situer Kant dans le débat",
          "paragraphText": "Antithèse : pour les empiristes (Locke, Hume), toute connaissance vient de l'expérience ; pour les rationalistes (Descartes), la raison en est la source.\nKant dépasse l'opposition : sensibilité et entendement sont les deux sources de la connaissance.",
          "exercise": {
            "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p07_q6",
            "type": "mcq",
            "prompt": "Qui pense que toute connaissance vient exclusivement de l'expérience ?",
            "options": [
              "Les rationalistes",
              "Kant",
              "Les sceptiques",
              "Les empiristes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Kant répond aux empiristes : l'expérience ne suffit pas."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p07_q1",
          "type": "mcq",
          "prompt": "Quel est le problème du sujet « Parler, est-ce ne dire que la vérité ? » ?",
          "options": [
            "Le langage exprime-t-il essentiellement le vrai ?",
            "Faut-il se taire ?",
            "Les animaux parlent-ils ?",
            "Qu'est-ce que la technique ?"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sujet interroge le lien entre parole et vérité."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p07_q2",
          "type": "mcq",
          "prompt": "Quelle référence convient à l'axe « la parole peut tromper » ?",
          "options": [
            "Hegel : c'est dans les mots que nous pensons",
            "La rhétorique des sophistes",
            "Boileau : ce que l'on conçoit bien s'énonce clairement",
            "Hobbes : pas de vérité sans langage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les sophistes défendaient le faux avec habileté."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p07_q3",
          "type": "mcq",
          "prompt": "Dans le Cratyle, que conclut Socrate sur la connaissance par les noms ?",
          "options": [
            "Que connaître les mots suffit pour connaître les choses",
            "Que les mots sont toujours vrais",
            "Qu'il vaut mieux connaître les choses par elles-mêmes que par les noms",
            "Que les noms sont inutiles pour parler"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Platon se méfie de la connaissance par les seuls mots."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p07_q4",
          "type": "mcq",
          "prompt": "Que garantit la cohérence d'un raisonnement ?",
          "options": [
            "La vérité absolue de sa conclusion",
            "Rien du tout",
            "L'accord de tous les hommes",
            "Sa vérité formelle, pas forcément la vérité de son contenu"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un syllogisme valide peut partir de prémisses fausses."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p07_q5",
          "type": "mcq",
          "prompt": "Dans l'introduction de la Critique de la raison pure, Kant écrit : « Si toute notre connaissance débute avec l'expérience, cela ne prouve pas qu'elle dérive toute de l'expérience. » Quelle est sa thèse ?",
          "options": [
            "La connaissance vient uniquement de l'expérience",
            "La connaissance vient uniquement de la raison",
            "La connaissance commence avec l'expérience mais ne dérive pas toute de l'expérience",
            "La connaissance est impossible"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Kant unit l'expérience (empirisme) et l'esprit (rationalisme)."
        },
        {
          "id": "terminale_philo_conditions_connaissance_l01_langage_verite_p07_q6",
          "type": "mcq",
          "prompt": "Qui pense que toute connaissance vient exclusivement de l'expérience ?",
          "options": [
            "Les rationalistes",
            "Kant",
            "Les sceptiques",
            "Les empiristes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Kant répond aux empiristes : l'expérience ne suffit pas."
        }
      ]
    }
  ]
};
